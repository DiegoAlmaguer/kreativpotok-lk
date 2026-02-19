# Architecture

## Stack decision
Repository was empty, so **Variant A** selected:
- Web/Admin: Next.js (planned)
- Mobile: React Native (planned)
- API: Node.js TypeScript (Fastify in PR1 foundation)
- DB: Prisma relational schema aligned to PostgreSQL

## Monorepo layout
- `apps/api` — backend API foundation (implemented in PR1)
- `apps/web` — client web/PWA placeholder
- `apps/admin` — admin panel placeholder
- `apps/mobile` — mobile app placeholder
- `docs/*` — product/engineering documentation

## Backend module map (PR1)
- Auth module: OTP request/verify mock + JWT token issuing
- RBAC module: role permission map + guard utility
- Users module: profile endpoint
- Audit module: critical event logging
- Payments provider interface (mock + TBank TODO contract)

## Data model baseline
Core entities: users, roles, services, packages, leads, projects, tasks, messages, files, payments, consents, audit_logs.

## Evolution notes
- Replace SQLite local dev with PostgreSQL in deployment via `DATABASE_URL`
- Add websocket gateway for project chat in PR4
- Implement Next.js apps in PR2+
