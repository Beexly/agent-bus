# ops/DEPLOYMENT_TIMELINE_2026-08-07.md
## What it is (1-2 sentences)
Incident-style deployment timeline for the evening of 2026-08-07: a type-error deploy failure on PR #373, a rollback to the last known-good SHA, and the eventual fix with production state recorded.
## Key metrics/methods (formulas where given, else "not specified")
not specified. Timeline: `cd61502d` (waitlist + free-spine + webhook) = last known-good; `6c9c848` (PR #373 preview) = Error; `48756564` (#373 squash → main) = Error; concurrent redeploy of `cd61502d` = Ready; `e9bc3c48` (action-kind fix) = Ready (prod). Failure cause: `'RUN_GENERATE_DRAFTS' does not exist in type Partial<Record<AutonomyActionKind, string>>` — allow-list SoT listed 5 crons but the TypeScript union only had 3 execute kinds; fix extended `AutonomyActionKind` + planner queue.
## Data sources named
none.
## Findings (numbers and facts, not vibes)
- Production stayed on the prior good SHA (`cd61502d`) while the broken SHA was diagnosed — rollback-before-fix discipline.
- Post-fix production state: SHA `e9bc3c48`, autonomy EXECUTE with 5 safe targets, `PUBLIC_PICKS_ENABLED=true` on but the surface still kill-switch dark until oddsInserted SUCCESS; `/api/picks` returns 503 `stale_data` until an odds-inserting run lands within the 240-minute SLA.
- The root cause was an allow-list/union mismatch: the allow-list SoT and the code's `AutonomyActionKind` union disagreed, so the deploy type errored.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: deploy discipline — keep a documented SoT in sync with the code union, hold last known-good while fixing, and keep public surfaces dark behind a kill switch until data freshness SLA is met.
## Engine-actionable? (yes/no + one-line what)
no — ops incident record; reusable as process discipline, not engine signal.
