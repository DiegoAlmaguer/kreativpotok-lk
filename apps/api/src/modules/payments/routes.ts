import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { env } from '../../config/env.js';
import { MockPaymentsProvider, PaymentsProvider, TBankProvider } from './provider.js';

function resolveProvider(): PaymentsProvider {
  if (env.PAYMENTS_PROVIDER === 'tbank') {
    return new TBankProvider();
  }

  return new MockPaymentsProvider();
}

const createPaymentSchema = z.object({
  amount: z.number().int().positive(),
  email: z.string().email(),
  phone: z.string().min(10),
  description: z.string().min(3)
});

export async function paymentRoutes(app: FastifyInstance) {
  app.post('/payments/create', { preHandler: [app.authenticate] }, async (request) => {
    const payload = createPaymentSchema.parse(request.body);
    const provider = resolveProvider();
    return provider.createPayment(payload);
  });

  app.post('/payments/webhook/:provider', async (request, reply) => {
    if (!env.PAYMENTS_WEBHOOK_SECRET) {
      return reply.badRequest('PAYMENTS_WEBHOOK_SECRET is required');
    }

    const secret = request.headers['x-webhook-secret'];
    if (secret !== env.PAYMENTS_WEBHOOK_SECRET) {
      return reply.unauthorized('Invalid webhook secret');
    }

    const provider = resolveProvider();
    return provider.handleWebhook(request.body);
  });
}
