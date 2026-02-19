# Test Plan (MVP baseline)

## PR1 checks
1. Health endpoint returns 200.
2. OTP request accepts valid phone.
3. OTP verify creates/fetches user and returns JWT tokens.
4. Protected `users/me` endpoint requires valid token.
5. Seed inserts services/packages/cases and base roles.

## Future integration scenarios
- Lead from quiz answers.
- Payment redirect and webhook status transitions.
- Project creation after paid payment.
- Chat real-time message delivery.
