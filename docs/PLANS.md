# Implementation Plan & Status

## Epic 1 — Foundation (PR1) [IN PROGRESS]
- [x] Initialize monorepo structure (`apps/api`, `apps/web`, `apps/admin`, `apps/mobile`)
- [x] Add env template and base docs
- [x] Define baseline relational schema + migration + seed
- [x] Implement auth skeleton (OTP mock + JWT)
- [x] Implement RBAC middleware skeleton
- [x] Add audit logging for login
- [ ] Validate lint/typecheck/tests and finalize PR1

### Definition of done (PR1)
- Repo bootstraps locally by runbook
- API starts and health/auth/profile routes work
- Migration + seed are reproducible
- Documentation reflects architecture and runbook

## Epic 2 — Services + Quiz + Leads (PR2) [TODO]
- Catalog API + CRUD admin
- Quiz engine + lead creation workflow
- Web/admin UI first usable slices

## Epic 3 — Projects + Tasks + Files (PR3) [TODO]
## Epic 4 — Chat + Notifications (PR4) [TODO]
## Epic 5 — Payments redirect + webhook (PR5) [TODO]
## Epic 6 — Admin RBAC + audit (PR6) [TODO]
## Epic 7 — Hardening + docs + full test pass (PR7) [TODO]
