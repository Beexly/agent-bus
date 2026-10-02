# docs/api/API_V1_DURABLE_FIXTURE_SIMULATOR_PR_BODY.md
## What it is (1-2 sentences)
A PR body describing a route-free, database-free fixture simulator (`apps/web/lib/api/v1/durable-fixture-simulator.ts`) that replays local synthetic operation traces against the dormant durable adapter interface to report drift before any real DB adapter exists. It is pure process scaffolding: tests clean replay, boundary enforcement, read/write drift, rollback leakage, bad rollback order, dormant-interface drift, and no live-storage hooks.

## Key metrics/methods (formulas where given, else "not specified")
not specified — the method is synthetic trace replay against a table-mapped contract, with fixture-report archive and promotion checklist documented in `docs/api/API_V1_DURABLE_FIXTURE_REPORT.md`. Suggested verification commands: run 5 Vitest suites + typecheck + lint + guardrails + `git diff --check`.

## Data sources named
None — synthetic fixtures only (`apps/web/__fixtures__/api-v1/durable-fixture-simulator.json`); explicitly route-free, DB-free, env-var-free, SQL-free, no raw API keys, no provider calls.

## Findings (numbers and facts, not vibes)
- Adds 2 new files (`durable-fixture-simulator.ts`, `durable-fixture-simulator.json`) plus tests and an export from `apps/web/lib/api/v1/index.ts`.
- Safety invariants asserted: no `apps/web/app/api/v1` route, no Prisma schema edit, no migration, no API v1 env var, no real DB adapter, no SQL execution, no raw key storage, no provider/billing/AWS mutation.
- Follow-up named: the next slice adds a disposable-database rehearsal plan as docs-only, keeping the shadow-only constraint.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Drift-reporting simulator as pre-wire QA pattern for future durable adapters: OTHER
- Promotion checklist gating live routes until drift is clean: TRUST-SIGNAL

## Engine-actionable? (yes/no + one-line what)
No — process/infrastructure doc with no sports content, metrics, or signals.
