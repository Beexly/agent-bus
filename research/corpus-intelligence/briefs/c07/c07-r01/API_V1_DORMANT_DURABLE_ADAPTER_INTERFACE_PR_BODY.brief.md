# api/API_V1_DORMANT_DURABLE_ADAPTER_INTERFACE_PR_BODY.md
## What it is (1-2 sentences)
PR body for a dormant, table-mapped durable adapter interface for API v1: connects the memory shadow adapter, mocked transaction harness, and proposal-only Prisma table map without creating a live database adapter — everything route-free and dry-run only.
## Key metrics/methods (formulas where given, else "not specified")
- Table map: `ApiV1Consumer`, `ApiV1AuditEvent`, `ApiV1QuotaMonth`.
- Operation plans: `resolve_consumer`, `put_consumer`, `append_audit_event`, `record_quota_and_audit`.
- Validators block: route exposure, Prisma imports, database package imports, env reads, API v1 env vars, schema mutation, migrations, table-map drift, non-append-only audit writes, non-atomic quota/audit writes.
- Dry-run report explicitly non-executable.
## Data sources named
None.
## Findings (numbers and facts, not vibes)
- Follow-up noted: route-free durable fixture simulator now lives in `docs/api/API_V1_DURABLE_FIXTURE_SIMULATOR.md`; next slice = fixture-report archive + promotion checklist, still without live routes/schema/migrations/env/credentials/provider calls/DB execution.
- Explicit safety inventory mirrors the polish PR: no route, no schema edit, no migration, no env var, no real adapter, no SQL, no raw key storage, no billing hook.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: API v1 durable-layer design docs; no sports-modeling content.
## Engine-actionable? (yes/no + one-line what)
No — product API plumbing; nothing for the prediction engine.
