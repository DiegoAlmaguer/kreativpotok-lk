import { prisma } from '../../plugins/prisma.js';

export async function logAudit(action: string, actorId?: string, metadata?: Record<string, unknown>) {
  await prisma.auditLog.create({
    data: {
      action,
      actorId,
      metadata: metadata ? JSON.stringify(metadata) : undefined
    }
  });
}
