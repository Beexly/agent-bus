# docs/api/fixtures/API_V1_DURABLE_FIXTURE_REPORT.md
## What it is (1-2 sentences)
Generated (2026-07-04T00:00:00.000Z) shadow-evidence report for the API v1 durable fixture run: schema `api-v1-durable-fixture-report-v1`, status `shadow_report_ready`, `livePromotionAllowed=false`, recorded as tracked shadow evidence only.
## Key metrics/methods (formulas where given, else "not specified")
Fixture `api-v1-durable-local-synthetic-v1`: passed=true, operation count 5; conformance adapter `mock_transactional_store`: passed=true, case count 5. Boundary all false: route exposed, database touched, provider called, executable. 8-check checklist: fixture-simulator-passed, durable-harness-conformance-passed, fixture-operation-coverage-present (operationCount=5), route-free, database-free, provider-free, non-executable — all pass, non-blocking; `live-promotion-blocked` pass IS a live blocker. Formulas: not specified.
## Data sources named
None (synthetic fixture).
## Findings (numbers and facts, not vibes)
- Fixture cases: `resolve-known-consumer`, `put-new-shadow-consumer`, `append-allow-audit-event`, `record-quota-and-audit-commit`, `record-quota-and-audit-rollback`.
- Promotion blockers recorded: no owner approval for live API use; no Prisma schema edit/migration for API v1 durable tables; no API v1 route tree; no disposable-DB rollback rehearsal recorded; no production credential/partner/billing/provider path.
- Next required proof: replay fixtures against future disposable-DB adapter before schema mutation; run conformance harness against a real adapter in non-prod DB; record rollback rehearsal with row counts and audit tip hash; keep OpenAPI generation, guardrails, typecheck, lint, focused tests green before route exposure.
- Explicitly not a live-readiness, legal-clearance, or production-readiness claim.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: fixture-report/checklist format (pass/block gates, boundary attestations, promotion blockers) is a reusable evidence-template for engine validation runs.
## Engine-actionable? (yes/no + one-line what)
No — API shadow-stack fixture report; no sports data or engine logic.
