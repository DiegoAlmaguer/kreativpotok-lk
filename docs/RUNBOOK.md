# Runbook

## Prerequisites
- Node.js 20+
- npm 10+

## Setup
1. Copy env: `cp .env.example .env`
2. Install dependencies: `npm ci`
3. Run migrations: `npm run db:migrate`
4. Seed baseline data: `npm run db:seed`
5. Start API: `npm run dev`

## Core commands
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Tests: `npm run test`

## Desktop app (Electron)
- Run desktop in dev mode: `npm run desktop:dev`
- Build desktop renderer: `npm run desktop:build`
- Package Windows artifacts (`setup.exe` NSIS + portable `.exe`): `npm run desktop:package`

Desktop API URL is read from `VITE_API_BASE_URL` environment variable.

## Icons and binary files policy (temporary)
- Desktop packaging is currently configured **without committed icon binaries** (no `.ico` in repo) due PR/UI limitations on binary files.
- Setup build still works in CI; Electron/electron-builder fallback icons are used for now.
- Branded icons will be added later through CI-side generation or release pipeline artifacts, without committing binary assets in git.

## Windows code signing (TODO)
- Current setup builds unsigned `.exe` binaries for internal/testing usage.
- Before production distribution, configure a signing certificate (`CSC_LINK`, `CSC_KEY_PASSWORD`) in CI secrets.
- Unsigned installers can trigger Windows SmartScreen warning on first run; this is expected until code signing is enabled.

## Notes
- PR1 implements only API runtime and placeholders for web/admin/mobile.
- OTP verification uses `OTP_TEST_CODE` from env.
