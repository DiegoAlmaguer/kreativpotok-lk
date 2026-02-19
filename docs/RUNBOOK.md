# Runbook

## Prerequisites
- Node.js 20+
- npm 10+

## Setup
1. Copy env: `cp .env.example .env`
2. Install dependencies: `npm install`
3. Run migrations: `npm run db:migrate`
4. Seed baseline data: `npm run db:seed`
5. Start API: `npm run dev`

## Core commands
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Tests: `npm run test`

## Notes
- PR1 implements only API runtime; web/admin/mobile are scaffold placeholders.
- OTP verification uses `OTP_TEST_CODE` from env.
