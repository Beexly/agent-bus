# api/API_V1_DATABASE_SCHEMA_PR_BODY.md
## What it is (1-2 sentences)
A PR-body draft for a proposal-only API v1 database schema contract (`ApiV1Consumer`, `ApiV1AuditEvent`, `ApiV1QuotaMonth` drafts) — intentionally not a live migration; adds rollback SQL, guardrail validation, and tests proving no live exposure.

## Key metrics/methods (formulas where given, else "not specified")
- Quota-month counters and non-64-character-hash rejection for raw key fields (validation constraints only; no formulas).

## Data sources named
None — sources: `apps/web/lib/api/v1/schema-proposal.ts`; follow-ups point to `docs/api/API_V1_DURABLE_ADAPTER_HARNESS.md` and `docs/api/API_V1_DORMANT_DURABLE_ADAPTER_INTERFACE.md`.

## Findings (numbers and facts, not vibes)
- Guards: no `schema.prisma` edit, no API v1 migrations, no `apps/web/app/api/v1` route, no API v1 env vars, no API key/partner/provider/billing/DB write path.
- Verification: `api-v1-db-schema-proposal.test.ts`, `api-v1-persistence.test.ts`, typecheck, lint, guardrails, `git diff --check`.
- Follow-up: next slice = route-free durable adapter simulation over local JSON fixtures, no schema/migrations/secrets/provider calls/DB execution.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: none — pure API-infra scaffolding. The audit-event + quota-month shapes are reusable only if GSE ever meters its own projections API.

## Engine-actionable? (yes/no + one-line what)
no — proposal-only API scaffolding with no sports data or engine surface.
