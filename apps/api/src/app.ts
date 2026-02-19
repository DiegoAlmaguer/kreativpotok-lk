import Fastify from 'fastify';
import fastifyJwt from '@fastify/jwt';
import sensible from '@fastify/sensible';
import { env } from './config/env.js';
import { healthRoutes } from './modules/health/routes.js';
import { authRoutes } from './modules/auth/routes.js';
import { userRoutes } from './modules/users/routes.js';
import { paymentRoutes } from './modules/payments/routes.js';

export function buildApp() {
  const app = Fastify({ logger: true });

  app.register(sensible);
  app.register(fastifyJwt, {
    secret: env.JWT_ACCESS_SECRET
  });

  app.decorate('authenticate', async function (request: any, reply: any) {
    try {
      await request.jwtVerify();
    } catch {
      reply.unauthorized();
    }
  });

  app.register(async (api) => {
    api.register(healthRoutes);
    api.register(authRoutes);
    api.register(userRoutes);
    api.register(paymentRoutes);
  }, { prefix: '/api' });

  return app;
}
