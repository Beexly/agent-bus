# docs/ops/FRONTIER_SURFACE_SCORECARD.md
## What it is (1-2 sentences)
A multi-domain probe scorecard from 2026-08-06 (v2 pass) recording the live status of ~21 site surfaces (health, settlement, contests, picks API, StatKing, board, GSN, podcast/newsletter, crons, free-lane, web standards, SEO), to be re-run after every redeploy, with the law: finish · dark · or refuse.
## Key metrics/methods (formulas where given, else "not specified")
Status taxonomy per surface: OK / Dark by law / Configure / code / Ops / fixed. No formulas.
## Data sources named
Live signals cited: `status: healthy`; settlement `overdue 0 / HEALTHY`; picks API `503 feature_gate`; StatKing `404 / robots`; board "honest empty / suppressed"; cron settle `401 unauth`; free-spine cron "every 6h"; podcast/newsletter archive "2+2".
## Findings (numbers and facts, not vibes)
- Picks API and StatKing: Dark by law (founder PUBLIC_PICKS / rights memo gating).
- Glass Ledger: "sealed unpublished" — OK; `PUBLISH_LEDGER` only with metrics.
- Free-lane / Jynx: "env founder" — needs free-lane + `CLAUDE_PROVIDER=auto` + cloud maps.
- One-team rule: do not flip surface flags to look complete; calibrate moat (settle/CLV) and credits (Jynx) first, public boards second.
- Trust-chrome items listed as "code" (to build): security.txt/ads.txt/humans, favicon/apple-touch, RSS alternates, manifest copy, SEO schema with no fake SearchAction.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "Calibrate moat (settle/CLV) ... first; public boards second": TRUST-SIGNAL (calibration-first publishing discipline; settle/CLV as the trust moat).
- Glass Ledger sealed until metrics exist; no fake slate; no ROI theater chrome: TRUST-SIGNAL.
- No QB-BEHAVIOR, COACHING, OL, or SCHEME findings.
## Engine-actionable? (yes/no + one-line what)
no — Surface/status ops checklist; the calibration-before-public ordering is already standing GSE doctrine.
