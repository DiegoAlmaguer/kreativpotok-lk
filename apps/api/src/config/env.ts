import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config({ path: '../../.env' });
dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(4000),
  JWT_ACCESS_SECRET: z.string().min(8),
  JWT_REFRESH_SECRET: z.string().min(8),
  JWT_ACCESS_TTL: z.string().default('15m'),
  JWT_REFRESH_TTL: z.string().default('7d'),
  OTP_TEST_CODE: z.string().default('123456'),
  PAYMENTS_PROVIDER: z.string().default('mock'),
  PAYMENTS_WEBHOOK_SECRET: z.string().min(3).default('change_me_webhook')
});

export const env = envSchema.parse(process.env);
