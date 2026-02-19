export const roles = {
  CLIENT: 'CLIENT',
  SPECIALIST: 'SPECIALIST',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN'
} as const;

export type AppRole = keyof typeof roles;
