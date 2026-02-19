import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { env } from '../../config/env.js';
import { findOrCreateClient } from './service.js';
import { logAudit } from '../audit/service.js';
import { prisma } from '../../plugins/prisma.js';

const otpRequestSchema = z.object({
  phone: z.string().min(10)
});

const otpVerifySchema = z.object({
  phone: z.string().min(10),
  code: z.string().length(6),
  consentVersion: z.string().min(1)
});

export async function authRoutes(app: FastifyInstance) {
  app.post('/auth/otp/request', async (request) => {
    const payload = otpRequestSchema.parse(request.body);
    return {
      ok: true,
      phone: payload.phone,
      devCodeHint: env.NODE_ENV === 'development' ? env.OTP_TEST_CODE : undefined
    };
  });

  app.post('/auth/otp/verify', async (request, reply) => {
    const payload = otpVerifySchema.parse(request.body);

    if (payload.code !== env.OTP_TEST_CODE) {
      return reply.unauthorized('Invalid OTP code');
    }

    const user = await findOrCreateClient(payload.phone);

    await prisma.consent.create({
      data: {
        userId: user.id,
        policyVersion: payload.consentVersion,
        source: 'auth_otp_verify'
      }
    });

    const tokenPayload = { sub: user.id, phone: user.phone, role: user.role.name };

    const accessToken = await reply.jwtSign(tokenPayload, { expiresIn: env.JWT_ACCESS_TTL });
    const refreshToken = await reply.jwtSign(tokenPayload, {
      expiresIn: env.JWT_REFRESH_TTL,
      sign: { key: env.JWT_REFRESH_SECRET }
    });

    await logAudit('login', user.id, { method: 'otp' });

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        phone: user.phone,
        role: user.role.name
      }
    };
  });
}
