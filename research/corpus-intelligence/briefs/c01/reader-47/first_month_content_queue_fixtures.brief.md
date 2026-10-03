# media/FIRST_MONTH_CONTENT_QUEUE_FIXTURES.md
## What it is (1-2 sentences)
Local fixture-only first-month content queue (updated 2026-07-05): 30 daily watch posts, 8 long-form YouTube drafts, 40 short-form clip drafts, 4 newsletters, 4 founder build-log drafts, 4 weekly board-meeting drafts, plus 300 partner-outreach targets (10/day) — all `DRAFT_ONLY`, nothing published or sent.
## Key metrics/methods (formulas where given, else "not specified")
- Queue scope: 30 daily watch posts + 8 YouTube drafts + 40 short-form clip drafts + 4 newsletter drafts + 4 founder build-log drafts + 4 weekly board-meeting drafts = 90 content drafts + 300 partner-outreach targets.
- Safety contract per item: `status: DRAFT_ONLY`, `manualReviewRequired: true`, `publishAllowed: false`, `externalSendAllowed: false`; claim-safety report tracks blocked / evidence-required / warning counts.
- Verification: 9/9 targeted tests pass; broad: typecheck, lint, guardrails, 635 test files / 8052 tests.
- Formulas not specified.
## Data sources named
- Repo code: `apps/web/lib/media-revenue/first-month-content-seeds.ts`, `first-month-content-queue.ts`; tests `first-month-content-queue.test.ts`. No external data sources.
## Findings (numbers and facts, not vibes)
- First-week titles preserved from the Sunday media plan (13 titles listed, e.g. "Confidence Is Not Probability", "Box score lied: targets are not role", "The First GSE Board Meeting").
- Explicit boundaries: no auto-posting, no newsletter sending, no affiliate links, no win-rate/ROI/revenue/traffic claims, no public calibration claims.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: titles like "Box score lied: targets are not role" hint at the QB-target-distribution lens, but this doc has no data — only content plans. (OTHER: content-ops fixture, not intelligence.)
## Engine-actionable? (yes/no + one-line what)
No — content-queue fixture with no sports data or methodology; only editorial titles.
