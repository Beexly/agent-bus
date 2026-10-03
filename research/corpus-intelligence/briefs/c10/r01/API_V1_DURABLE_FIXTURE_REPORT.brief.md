# docs/api/API_V1_DURABLE_FIXTURE_REPORT.md
## What it is (1-2 sentences)
Status report for the API v1 durable-fixture simulator's deterministic report archive (`status=shadow_report_ready`, `livePromotionAllowed=false`): 5 synthetic fixture operations replayed, 8 checklist items passed, no live-readiness claim made.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
- `apps/web/lib/api/v1/durable-fixture-report.ts`, `durable-fixture-report-renderer.ts`; archives at `docs/api/fixtures/API_V1_DURABLE_FIXTURE_REPORT.{json,md}`.
## Findings (numbers and facts, not vibes)
- Passing checklist items mean only that the local shadow artifacts agree with each other — explicitly not a production-readiness signal.
- Live promotion remains blocked on six items: owner approval, Prisma schema edit, migration, route, disposable-DB rollback rehearsal, production credential/partner/billing path.
## Intelligence connections
- [OTHER] Shadow-evidence discipline: a checked checklist is not a readiness claim — the explicit anti-overclaim framing is a process standard worth keeping, but no sports intelligence content.
## Engine-actionable? (yes/no + one-line what)
no — shadow-test bookkeeping with no metrics, methods, or signals to wire.
