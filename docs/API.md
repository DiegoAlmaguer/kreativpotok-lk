# API (PR1 Foundation)

Base URL: `/api`

## Health
- `GET /api/health`

## Auth
- `POST /api/auth/otp/request`
  - body: `{ "phone": "+79990000000" }`
- `POST /api/auth/otp/verify`
  - body: `{ "phone": "+79990000000", "code": "123456", "consentVersion": "v1" }`
  - returns: `{ accessToken, refreshToken, user }`

## Users
- `GET /api/users/me` (Bearer token)

## Payments skeleton
- `POST /api/payments/create` (placeholder, auth required)
- `POST /api/payments/webhook/:provider` (provider signature secret validation TODO)
