# api/API_V1_DURABLE_FIXTURE_REPORT_PR_BODY.md
## What it is (1-2 sentences)
A PR-body draft archiving a deterministic report + promotion checklist for API v1 durable fixture evidence, comparing the local synthetic fixture simulator against the mocked durable-adapter conformance harness, and recording `livePromotionAllowed=false` — live promotion remains blocked.

## Key metrics/methods (formulas where given, else "not specified")
not specified

## Data sources named
None — artifacts: `apps/web/lib/api/v1/durable-fixture-report.ts`, `docs/api/fixtures/API_V1_DURABLE_FIXTURE_REPORT.json`, follow-up `docs/api/API_V1_DISPOSABLE_DB_REHEARSAL_PLAN.md`.

## Findings (numbers and facts, not vibes)
- Safety list: no API v1 route, no Prisma schema edit, no migration, no env var, no real DB adapter, no SQL execution, no raw API key storage, no provider call, no AWS/account mutation.
- Six-test verification chain: `api-v1-durable-fixture-report.test.ts`, `api-v1-durable-fixture-simulator.test.ts`, `api-v1-dormant-durable-adapter-interface.test.ts`, `api-v1-durable-adapter-harness.test.ts`, `api-v1-db-schema-proposal.test.ts`, `api-v1-persistence.test.ts`.
- Gate: no database-adjacent implementation proceeds until the owner approves a disposable target and rehearsal scope.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: none — fixture/conformance-harness mechanics only. The simulator-vs-harness comparison pattern is transferable to engine backtest harnesses (synthetic vs conformance evidence), but nothing here is sports-specific.

## Engine-actionable? (yes/no + one-line what)
no — API fixture mechanics only; no sports data or engine input.
