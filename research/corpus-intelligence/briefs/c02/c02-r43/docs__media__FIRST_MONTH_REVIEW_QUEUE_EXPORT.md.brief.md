# docs/media/FIRST_MONTH_REVIEW_QUEUE_EXPORT.md

## What it is (1-2 sentences)
Export spec for the first-month review queue (updated 2026-07-05): turns the 30-day content fixture plan into local review packets so title, hook, script-beat count, claim-safety status, content score, cadence coverage, and workflow fence status can be inspected before any owner decision — local review only, nothing published/sent/touched.

## Key metrics/methods (formulas where given, else "not specified")
- `buildFirstMonthReviewQueueExport()` returns 90 local review packets by default, plus generated timestamp, blocked packet count, waiting-manual-review count, claim-blocked count, evidence-required count, weekly cadence summary, closed live-action lock proof.
- Each packet: item id, draft review packet id, day and week, title, workflow status, content score and grade, script beat count, claim-safety result, blockers/warnings/fix hints, bounded markdown review text, live-action locks (no full script bodies printed).
- Safety contract on every packet: `publishAllowed: false`, `externalSendAllowed: false`, `routeExposureAllowed: false`, `liveIntegrationAllowed: false`; unsafe drafts remain BLOCKED pending repair.
- Verification: 3 test files, 16 tests passed; `typecheck`, `guardrails`, and `git diff --check` all passed.

## Data sources named
- 30-day content fixture plan (input).
- Code: `apps/web/lib/media-revenue/first-month-review-queue.ts`; tests: `apps/web/__tests__/first-month-review-queue.test.ts`.

## Findings (numbers and facts, not vibes)
- 90 review packets by default; export carries blocked / waiting-manual-review / claim-blocked / evidence-required counts and a weekly cadence summary.
- Explicit boundary list of what this slice does NOT add: persistent queue storage, public route exposure, auto-posting, newsletter sending, partner email sending, affiliate activation, sponsor claims, traffic claims, revenue claims, win-rate claims, ROI claims, public calibration claims.
- All packets remain non-publishable by construction (`publishAllowed: false` etc.); unsafe drafts are representable in the queue but blocked.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Claim-safety results and the blocked/waiting-manual-review/claim-blocked/evidence-required counters on every packet are the content-side trust gate — no claim ships without evidence, mirroring the launch-side banned-phrase and calibration doctrines.
- [OTHER] The media review-queue workflow (content score + grade, script beat count, live-action locks, bounded review text) is a content-production mechanism, not football intelligence; no player/team/scheme findings.

## Engine-actionable? (yes/no + one-line what)
No — content-publishing workflow tooling; the claim-safety gate is already the standing trust doctrine, and nothing here changes prediction signals.
