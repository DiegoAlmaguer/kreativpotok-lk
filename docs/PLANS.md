# Implementation Plan & Status

## Epic 1 — Foundation (PR1) [DONE]
- [x] Initialize monorepo structure (`apps/api`, `apps/web`, `apps/admin`, `apps/mobile`)
- [x] Add env template and base docs
- [x] Define baseline relational schema + migration + seed
- [x] Implement auth skeleton (OTP mock + JWT)
- [x] Implement RBAC middleware skeleton
- [x] Add audit logging for login
- [x] Validate baseline commands in constrained environment

## Epic 1.1 — Desktop Windows packaging [DONE]
- [x] Add `apps/desktop` (Electron + React + Vite)
- [x] Add desktop scripts (`dev`, `build`, `package`)
- [x] Configure electron-builder (`appId`, `productName`, NSIS + portable `.exe` targets)
- [x] Add GitHub Actions workflow for Windows build artifacts
- [x] Update runbook with desktop and code-signing notes

## Epic 2 — Services + Quiz + Leads (PR2) [TODO]
- Catalog API + CRUD admin
- Quiz engine + lead creation workflow
- Web/admin UI first usable slices

## Epic 3 — Projects + Tasks + Files (PR3) [TODO]
## Epic 4 — Chat + Notifications (PR4) [TODO]
## Epic 5 — Payments redirect + webhook (PR5) [TODO]
## Epic 6 — Admin RBAC + audit (PR6) [TODO]
## Epic 7 — Hardening + docs + full test pass (PR7) [TODO]
