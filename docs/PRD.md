# PRD — KreativPotok MVP

KreativPotok is a multi-role platform for service sales and project delivery.

## Roles
- Guest
- Client
- Specialist
- Manager/PM
- Admin

## MVP scope
- OTP auth, profile, consent capture
- Services/catalog + packages
- Multi-step pricing quiz -> lead
- Payment redirect flow (mock + T-Bank adapter contract)
- Projects/tasks/files/chat basics
- Admin operations: lead triage, project assignment, RBAC

## Non-functional requirements
- PostgreSQL-compatible relational model (PR1 uses SQLite for local dev via Prisma, compatible schema)
- Role-based access control and audit log for critical events
- Adapter architecture for payments/push/email/CRM
