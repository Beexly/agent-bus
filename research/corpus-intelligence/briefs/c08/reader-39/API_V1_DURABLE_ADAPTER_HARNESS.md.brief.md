# docs/api/API_V1_DURABLE_ADAPTER_HARNESS.md
## What it is (1-2 sentences)
Design doc for a local-only conformance harness (`apps/web/lib/api/v1/durable-adapter-harness.ts`) that tests future durable API v1 adapters against the existing shadow contract (quota usage, audit events, hash-chained ledger) before any live storage is allowed.
## Key metrics/methods (formulas where given, else "not specified")
`runApiV1DurableAdapterConformanceSuite()` verifies: seeded registry/audit validation; quota incremented exactly once on allowed requests; one allow audit event per allowed request; one deny audit event per rejected request; no usage increment on rejects; quota exhaustion recorded as denial with consumer context; valid hash-chained audit ledger preserved. Mock transactional store supports `injectNextCommitFailure(reason)`; on failure: staged audit not committed, quota not incremented, transaction log records `rolled_back`, snapshot unchanged. Formulas: not specified.
## Data sources named
None (no external datasets).
## Findings (numbers and facts, not vibes)
- Harness runs against two stores: `createApiV1MemoryPersistenceStore()` and `createApiV1MockTransactionalPersistenceStore()`.
- Mock is explicitly not a database transaction and does not imply production readiness.
- Hard boundary list: no `apps/web/app/api/v1`, no Prisma API v1 models, no API v1 migrations, no env vars, no raw keys, no durable DB adapter, no live route exposure.
- Next promotion slice: fixture-report archive + promotion checklist, still without schema/migration/route/secret/provider/DB changes.
- Verification commands: focused tests + typecheck + lint + guardrails + `git diff --check`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: infra — the staged-commit/rollback verification pattern and hash-chained audit ledger are reusable templates for testing engine persistence layers (e.g., prediction write-through, audit logs).
## Engine-actionable? (yes/no + one-line what)
No — API v1 durability infra doc; contains no sports data, models, or engine logic.
