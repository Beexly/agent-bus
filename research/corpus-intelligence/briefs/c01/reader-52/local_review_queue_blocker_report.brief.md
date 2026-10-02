# ops/archive/prompts/LOCAL_REVIEW_QUEUE_BLOCKER_REPORT.md
## What it is (1-2 sentences)
A 2026-07-06 ops report defining the "local review queue" repair workflow: it maps memory-shadow review-queue snapshots into a priority-ordered repair report for local operators, implemented in `apps/web/lib/workflows/local-review-queue-report*.ts`.
## Key metrics/methods (formulas where given, else "not specified")
- Priority queue ordering logic: unresolved packets ranked by blocker count, stale evidence, workflow status, warnings, and source type. No weighting formula given.
- Safety-lock flags (all held false): publishAllowed, routeExposureAllowed, externalSendAllowed, liveIntegrationAllowed, affiliateActivationAllowed, sponsorApprovalAutomatic, databaseWritesAllowed, durablePersistenceEnabled, externalSideEffectsAllowed.
- Verification: `npm run test --workspace=apps/web -- local-review-queue-report.test.ts` — PASS, 1 file, 4 tests.
## Data sources named
`LocalReviewQueueSnapshot` from the existing simulator; queue sources = draft-review fixtures, first-month media, partner/sponsor, manual-shadow work. No external sports data sources.
## Findings (numbers and facts, not vibes)
- 4 tests passing; report explicitly does NOT approve publication, outreach, affiliate activation, sponsor approval, API route exposure, DB writes, persistence, legal clearance, or source clearance.
- Next safe local gate named: historical distribution/drift adapters for governed metrics or owner-reviewed production preview QA.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) Ops/workflow governance doc — a repair-report pattern for review queues; no sports intelligence content.
## Engine-actionable? (yes/no + one-line what)
No — infrastructure/test-verification doc with no sports metrics; only pattern value (blocker-count prioritization) for future ops tooling.
