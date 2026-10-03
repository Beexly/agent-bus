# docs/ops/FULL_SESSION_EXTRACT.md
## What it is (1-2 sentences)
Consolidated integrity log of build waves 0–7 (process capital, CIR + DSPy, holdout, Session-2 extract, embed, max-leverage); every row is SHIPPED, OPERATOR, or HARD NON-GOAL with no soft deferrals. The `orbit:integrity` script parses this file and fails CI if any listed command or import symbol is missing from the repo, so the doc cannot drift from the code.
## Key metrics/methods (formulas where given, else "not specified")
Named engine functions only, no formulas given in the file: `centeredIsotonicCalibration`, `timeHoldoutSplit`, `selectedSliceEce`, `sizeAfterCalibration` (CIR→Kelly), `portfolioKellyStakes`, `clvDeflator`, `shinDevig`, `toEdgeIndex`; `calibration:offline` pipeline; `dspy-gse` dry-run harness; `gepa_config` reflection 1.0 / task 0 / auto=light; `MODEL_PRIMARY` / `MODEL_CHEAP` in model-router.ts.
## Data sources named
None — the file is a repo-internal status ledger, not a data-source inventory.
## Findings (numbers and facts, not vibes)
- Wave merge rule: land a single consolidated branch; #281–#285 each carry a cumulative superset diff against `main`, so #286 supersedes all five (the earlier sequential-merge plan would have merged the same commits repeatedly).
- HARD NON-GOALs: Polymarket feature work (polymarket-hold); rebuilding webhook/outbox; LIVE_BOARD without founder YES; Full Kelly / MIPROv2 default (DEFER_90_DAYS).
- SHIPPED highlights: free settle only when `THE_ODDS_API_KEY` absent; Stripe `checkout.session.expired` + idempotency; outbox lease + claimVersion; `export:settled-picks`; `agent-eval` $0 fixtures; ORBIT_UNLOCK founder checklist; free `/embed/edge-index/[gameId]` with iframe frame-ancestors, no confidence on free embed; health-alert cron every 15m and `refresh-player-stats` every 30m in vercel.json; `selectSettlementPath` pure law with settle-picks routed through it.
- Commands: `npm run dspy:gse`, `calibration:offline`, `agent:eval`, `orbit:integrity`, `orbit:integrity:full`, `session2:extract`.
- Required import surface from `@sports/prediction-engine`: centeredIsotonicCalibration, timeHoldoutSplit, selectedSliceEce, sizeAfterCalibration, portfolioKellyStakes, clvDeflator, shinDevig, toEdgeIndex, MODEL_VERSION.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: process/infra ledger, not a football signal.
- TRUST-SIGNAL: free-settle-only-when-key-absent rule and no-confidence-on-free-embed keep the paid/free honesty boundary machine-enforced.
## Engine-actionable? (yes/no + one-line what)
No — build-integrity ledger; the named functions confirm which calibration/Kelly/edge utilities exist but the file supplies no tuning values.
