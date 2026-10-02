# ops/OPERATOR.md
## What it is (1-2 sentences)
The operator manual for production actions agents cannot perform: free settlement recovery procedure (with the 2026-09-02 law making the ESPN+consensus free grader the primary settle path regardless of THE_ODDS_API_KEY), Stripe endpoint/secret wiring, CRON_SECRET rotation, the no-flip gate list, the env-var reference, and the line-integrity flags.
## Key metrics/methods (formulas where given, else "not specified")
Line-integrity production counts (ledger C-197): LINE_INTEGRITY_PUBLISH_GUARD_ENABLED (default OFF) suppresses ~43% of SPREAD and ~62% of TOTAL picks if flipped — "a board decision, not an ops toggle." Flip precondition for the line-integrity lane: `lineIntegrity.sweep.voidSweepComplete === true` (C-287), not `remainingToVoid === 0` — because `remainingCapReached` is true on every production call (survey samples oldest 300 of a settled population in the thousands). 2026-09-02 observed state: PUBLIC_PICKS_ENABLED already ON (`gates.canExposePublicPicks: true`, board serves 55 picks/day); PERFORMANCE_STATS, LIVE_BOARD, PUBLISH_LEDGER off.
## Data sources named
Free settlement grader: ESPN + registered consensus; paid supplement: `settleSport` via THE_ODDS_API_KEY (supplement only, fails independently); ESPN Power Index (FPI) as independent probability source — gated behind ESPN_POWERINDEX_LICENSED="true" exact-string and an ESPN data license (rights registry clears ESPN facts — scores/fixtures — only); Stripe webhooks; `/api/health?strict=1`; `docs/ops/FREE_MODE_INGESTION_HEALTH.md`; `scripts/check-launch-readiness.mjs` (`npm run launch:ready`), `scripts/ops/owner-runbook.mjs` (`npm run ops:runbook`).
## Findings (numbers and facts, not vibes)
- Since 2026-09-02 (`selectSettlementPlan`): free grader (ESPN + registered consensus) is the primary pass on every settle-picks cycle regardless of THE_ODDS_API_KEY; a dead key fails only the paid supplement (`paidSupplement.failedSports`, `advisories[]`), no longer blocks the free grader. Removing the key is optional hygiene, not a stuck-settle fix.
- Manual settle: `GET /api/cron/settle-picks` with Bearer CRON_SECRET; expect `"path"` = `"free"` (no key, or `?path=free`) or `"free+odds-api"` (key present). Settle cron cadence: every hour.
- Stripe endpoint: `https://www.galaxysportsedge.com/api/webhooks/stripe` (www, not apex); add `checkout.session.expired` if missing; sustained 400s = wrong `STRIPE_WEBHOOK_SECRET`.
- CRON_SECRET on Production with dual-secret rotation via CRON_SECRET_PREVIOUS; smoke: 401 without Bearer, 200 with correct secret.
- Do-not-flip list without founder YES: LIVE_BOARD, PUBLISH_LEDGER, PERFORMANCE_STATS, Phase C, HEOS #226, gamma schedule.
- Line-integrity flags (C-281..C-284; ledger C-197), default OFF, absent from `.env.example` by design: LINE_INTEGRITY_PUBLISH_GUARD_ENABLED (refuse to publish SPREAD/TOTAL picks whose stored mean-of-books line nobody actually quoted), LINE_INTEGRITY_VOID_ENABLED (remediation lane VOIDs settled picks with that defect via rcaCode LINE_NOT_QUOTED, UNPUBLISHes unsettled ones; idempotent).
- Line-integrity counts require operator auth (C-286): anonymous GET returns `lineIntegrity: null` = NOT SURVEYED (a privacy DoS-scrub of per-IP uncapped scan work); authenticated read runs three capped pick scans.
- Launch readiness in one command: `npm run launch:ready` (read-only, production; exit 1 on any FAIL); owner runbook: `npm run ops:runbook`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Line-integrity defect (mean-of-books lines nobody quotes) directly corrupts published-pick credibility: 43% of SPREAD / 62% of TOTAL picks carry the defect — board-level decision before any record claim.
- [TRUST-SIGNAL] Free-first settle law removes single-key dependency: settlement (and thus grading of every public pick) survives a dead Odds API key.
- [OTHER] Ops-only; no QB/coaching/OL/scheme content.
## Engine-actionable? (yes — engine should weight ESPN/FPI/consensus free-grader signals for settlement truth; flag any published line that is a mean-of-books value no book quoted as defective)
