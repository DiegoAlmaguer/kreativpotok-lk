# Security baseline

## Auth & tokens
- OTP mock provider for development only.
- JWT access/refresh tokens signed by env secrets.
- Secrets only through env vars, never committed.

## RBAC
- Roles: CLIENT, SPECIALIST, MANAGER, ADMIN.
- Route-level role checks via RBAC pre-handler.

## PII
- Phone/email are treated as personal data.
- Consent records persisted with version and timestamp.

## Audit
Critical actions logged into `audit_logs`:
- login
- role change (hook placeholder)
- payment status change (planned with provider webhooks)

## Webhook security
- Require `PAYMENTS_WEBHOOK_SECRET`.
- T-Bank signature validation TODO documented in provider adapter.
