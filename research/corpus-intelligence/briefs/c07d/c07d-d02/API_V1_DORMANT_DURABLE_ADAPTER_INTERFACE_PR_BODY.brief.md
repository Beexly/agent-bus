# api/API_V1_DORMANT_DURABLE_ADAPTER_INTERFACE_PR_BODY.md
## What it is (1-2 sentences)
PR body text adding a dormant, table-mapped durable adapter interface for API v1 — connecting the memory shadow adapter, a mocked transaction harness, and a proposal-only Prisma table map, without creating any live database adapter. Process/safety documentation for the API v1 shadow track, not sports analysis.

## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas or statistical methods. Interface contents enumerated:
- New file: `apps/web/lib/api/v1/dormant-durable-adapter-interface.ts`
- Table map exports for three tables: `ApiV1Consumer`, `ApiV1AuditEvent`, `ApiV1QuotaMonth`
- Operation plans: `resolve_consumer`, `put_consumer`, `append_audit_event`, `record_quota_and_audit` (4 operations)
- Validators block: route exposure, Prisma imports, database package imports, env reads, API v1 env vars, schema mutation, migrations, table-map drift, non-append-only audit writes, non-atomic quota/audit writes
- Dry-run report explicitly non-executable; focused Vitest coverage for mapping, atomicity rules, boundary leaks, dry-run behavior, and current repo state
- Suggested verification: 4 test files (`api-v1-dormant-durable-adapter-interface.test.ts`, `api-v1-durable-adapter-harness.test.ts`, `api-v1-db-schema-proposal.test.ts`, `api-v1-persistence.test.ts`) + typecheck, lint, guardrails, `git diff --check`

## Data sources named
None (no datasets or external sources).

## Findings (numbers and facts, not vibes)
- The interface is deliberately dormant: no `apps/web/app/api/v1` route, no Prisma schema edit, no migration directory, no API v1 env var, no real database adapter, no SQL execution, no raw API key storage, no generated credential/partner record/billing hook/provider call/AWS mutation.
- Audit writes are constrained to append-only; quota/audit writes must be atomic (validators enforce this).
- Follow-up direction recorded: the route-free durable fixture simulator now lives in `docs/api/API_V1_DURABLE_FIXTURE_SIMULATOR.md`; the next slice should add a fixture-report archive and promotion checklist that records simulator output as tracked artifacts and compares it against the durable harness — still with no live routes, schema edits, migrations, env vars, credentials, provider calls, or database execution.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — Infrastructure/process doc for the API v1 shadow track. No connection to QB-behavior, coaching, OL, trust-signal, or scheme programs. The append-only audit-event pattern (`ApiV1AuditEvent`) is the one reusable design idea: the calibration/sizing lane could adopt append-only event logs for prediction/proof audit trails, but this file does not itself propose that.

## Engine-actionable? (yes/no + one-line what)
No — PR process/safety record for the API shadow stack; nothing to wire into the engine.

## Referenced files / papers / datasets
- `apps/web/lib/api/v1/dormant-durable-adapter-interface.ts` (new interface)
- `docs/api/API_V1_DURABLE_FIXTURE_SIMULATOR.md` (fixture simulator doc)
