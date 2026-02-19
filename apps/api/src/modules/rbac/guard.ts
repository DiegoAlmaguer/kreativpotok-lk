import { FastifyReply, FastifyRequest } from 'fastify';
import { AppRole } from './roles.js';

export function withRoles(allowed: AppRole[]) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    await request.jwtVerify();
    const user = request.user as { role?: AppRole };
    if (!user.role || !allowed.includes(user.role)) {
      return reply.forbidden('Insufficient role');
    }
  };
}
