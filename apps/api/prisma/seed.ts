import { PrismaClient, RoleName } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  for (const name of [RoleName.CLIENT, RoleName.SPECIALIST, RoleName.MANAGER, RoleName.ADMIN]) {
    await prisma.role.upsert({ where: { name }, update: {}, create: { name } });
  }

  const branding = await prisma.service.upsert({
    where: { id: 'seed-service-branding' },
    update: {},
    create: {
      id: 'seed-service-branding',
      title: 'Brand Identity',
      description: 'Логотип, визуальная система, гайдлайн.',
      basePrice: 50000
    }
  });

  const smm = await prisma.service.upsert({
    where: { id: 'seed-service-smm' },
    update: {},
    create: {
      id: 'seed-service-smm',
      title: 'SMM Production',
      description: 'Контент-план, продакшн и аналитика.',
      basePrice: 70000
    }
  });

  await prisma.package.upsert({
    where: { id: 'seed-package-branding-start' },
    update: {},
    create: {
      id: 'seed-package-branding-start',
      serviceId: branding.id,
      title: 'Start',
      description: 'Лого + базовый фирстиль.',
      price: 80000
    }
  });

  await prisma.package.upsert({
    where: { id: 'seed-package-smm-growth' },
    update: {},
    create: {
      id: 'seed-package-smm-growth',
      serviceId: smm.id,
      title: 'Growth',
      description: '3 месяца сопровождения + отчёт.',
      price: 180000
    }
  });

  console.log('Seed completed.');
}

main().finally(async () => {
  await prisma.$disconnect();
});
