# docs/api/API_V1_DURABLE_FIXTURE_SIMULATOR.md
## What it is (1-2 sentences)
A local synthetic fixture simulator that validates an operation trace against the dormant durable API v1 adapter interface (read/write tables, commit order, rollback order, read-only behavior, table-count changes, rollback leakage) without executing any storage. Canonical source `apps/web/lib/api/v1/durable-fixture-simulator.ts`; first fixture `apps/web/__fixtures__/api-v1/durable-fixture-simulator.json`.
## Key metrics/methods (formulas where given, else "not specified")
- Not specified (no formulas). Contract: each scenario must declare `schemaVersion=api-v1-durable-fixture-simulator-v1`, `source=local_synthetic_fixture`, `routeExposed=false`, `databaseTouched=false`, `providerCalled=false`; any deviation is a report blocker.
- `simulateApiV1DurableFixtureScenario()` returns: `passed`, `operationCount`, `boundary`, per-operation cases, blockers, observations, warnings from the dormant durable interface validator; report is intentionally non-executable with `boundary.executable=false`.
- Fixture coverage: `resolve-known-consumer` → `read_only`; `put-new-shadow-consumer` → `committed`; `append-allow-audit-event` → `committed` (exactly one row, only `api_v1_audit_events`); `record-quota-and-audit-commit` → `committed` (dormant commit order); `record-quota-and-audit-rollback` → `rolled_back` (no leakage). Edge-case fixture covers suspended consumer, expired key, quota-exhaustion denial, malformed-audit rollback. Negative-control fixture (`durable-fixture-hostile-invalid.json`) must FAIL (read-only mutation, audit over-append, quota-row deletion, missing table count).
## Data sources named
- Local synthetic fixtures only (`apps/web/__fixtures__/api-v1/durable-fixture-simulator.json`, `durable-fixture-edge-cases.json`, `durable-fixture-hostile-invalid.json`); no database, no provider, no keys.
## Findings (numbers and facts, not vibes)
- This branch must keep all true: no API v1 route tree, no Prisma API v1 models, no migration directory, no env vars, no raw API keys, no SQL execution, no database package import, no provider call, no partner onboarding or billing path. [OTHER]
- The fixture-report archive and promotion checklist live in `docs/api/API_V1_DURABLE_FIXTURE_REPORT.md`; the next safe slice is the disposable-database rehearsal plan (documentation/contract only). [OTHER]
- Verification command listed: the named vitest files plus `npm run typecheck`, `npm run lint`, `npm run guardrails`, `git diff --check`. [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The negative-control fixture (must fail by construction) is the same adversarial-verification doctrine the corpus applies to engine signals — a guard is only trusted after it is shown firing on a deliberately broken input. [TRUST-SIGNAL]
- Exactly-one-row / exact-table commit-order assertions are the rollback-leakage pattern relevant to pick-mint audit rows (GateDecision, PickSignalSnapshot). [TRUST-SIGNAL]
## Engine-actionable? (yes/no + one-line what)
No — synthetic-only adapter contract test; the negative-control pattern is worth reusing but nothing here touches the engine.
