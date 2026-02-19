import { RoleName } from '@prisma/client';
import { prisma } from '../../plugins/prisma.js';

export async function findOrCreateClient(phone: string) {
  const role = await prisma.role.findUnique({ where: { name: RoleName.CLIENT } });
  if (!role) {
    throw new Error('CLIENT role not found. Run seed.');
  }

  return prisma.user.upsert({
    where: { phone },
    update: {},
    create: {
      phone,
      roleId: role.id
    },
    include: { role: true }
  });
}
