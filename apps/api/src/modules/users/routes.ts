import { FastifyInstance } from 'fastify';
import { prisma } from '../../plugins/prisma.js';

export async function userRoutes(app: FastifyInstance) {
  app.get('/users/me', { preHandler: [app.authenticate] }, async (request) => {
    const tokenUser = request.user as { sub: string };
    const user = await prisma.user.findUnique({
      where: { id: tokenUser.sub },
      include: { role: true }
    });

    if (!user) {
      throw app.httpErrors.notFound('User not found');
    }

    return {
      id: user.id,
      phone: user.phone,
      role: user.role.name,
      createdAt: user.createdAt
    };
  });
}
