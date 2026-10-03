# ops/PROVEN_PATH_HONEST_2026-08-09.md
## What it is (1-2 sentences)
Hard-definition specification for the GSE "PROVEN" performance ladder — the exact gating conditions (Brier ≤ 0.22, ECE ≤ 0.05, Murphy REL ≤ 0.05, n ≥ 100, 3-run GREEN streak) under which performance stats may be exposed publicly, plus a post-mortem of the 2026-08-09 calibration failures and the honest-p resolver that fixed them.

## Key metrics/methods (formulas where given, else "not specified")
- PROVEN gate conditions (all must hold):
  - Canonical settled ≥ floor (observed: 1017 ≥ 100)
  - Live eligibility GREEN for streak K=3 (3 consecutive GREEN runs)
  - Publish policy effective (AUTO_PUBLISH or PUBLISHED)
  - `canExposePerformanceStats` = publishedEffective && GREEN
- Absolute floors (live): Brier ≤ 0.22 · ECE ≤ 0.05 · Murphy REL ≤ 0.05 · n ≥ 100
- Honest live p resolver priority (in `live-calibration-p.ts`): `marketFairProb` → independent `trueProb` → MONEYLINE confidence only; SPREAD/TOTAL picks without a fair p are **excluded** from absolute floors (never feed rank scores into p)
- Regression guard: maps (temperature / Platt / PAVA isotonic calibrations) stay OFF until an offline bakeoff shows holdout improvement AND the founder enables them
- Hard rules: never conf-echo rankingP as independent; never edge-as-p; PERFORMANCE_STATS stays dark while RED
- Progression ladder steps: A) deploy honest p + re-run calibration-metrics → recompute Brier/ECE without rank-as-p pollution; B) `generate-signal-slate` every 2h → new picks with independent rankingP; C) settle + accumulate → RES rises when independents price; D) 3 consecutive GREEN runs → streak; E) AUTO_PUBLISH=true or founder PUBLISHED → performance surfaces open

## Data sources named
- `live-calibration-p.ts` (honest live p resolver)
- `calibration-metrics` cron + durable metrics path
- `components/calibration/reliability-chart.tsx` (reliability diagram component)
- `THE_ODDS_API_KEY` (founder-optional restore to restore market board + marketFairProb density)
- RPCP residual attribution (bottleneck identified: `missing_independent`)

## Findings (numbers and facts, not vibes)
- Live class was stuck RED with Brier ≈ 0.275 (vs ≤ 0.22 floor), ECE ≈ 0.112 (vs ≤ 0.05), RES ≈ 0.002 (essentially zero discrimination)
- Three measured root causes: (1) p = confidence/100 applied to SPREAD/TOTAL rank scores → artificial overconfidence; (2) independentCoverage 0% on the historical sample → ranking could not raise RES; (3) calibration maps correctly OFF (using isotonic to rewrite p to invent GREEN would be dishonest)
- Shipped: honest live p resolver; wiring into calibration-metrics cron; signal slate generation so future independents carry rankingP coverage; reliability chart component for ops/methodology; RPCP residual attribution showing missing_independent as the primary bottleneck
- Date stamp: 2026-08-09; canonical settled count 1017 met the ≥100 floor

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL**: The entire document is a trust-signal doctrine — performance claims may only surface after Brier/ECE/REL floors plus a 3-run GREEN streak; this is the publication-quality gate any engine output must clear before going public (serves the calibration/sizing program).
- **OTHER**: The "never conf-echo rankingP as independent / never edge-as-p" guard is a calibration-integrity rule directly applicable to engine pick publication — rank scores are not probabilities and must never be presented as such (serves calibration/sizing).
- **OTHER**: The residual-attribution finding (missing_independent as primary bottleneck) is a standing diagnosis that any picks without an independent fair probability cannot move RES; engine coverage must carry independent pricing to be credible (serves trust-target intake).
- **OTHER**: Offline calibration maps (temperature/Platt/PAVA) exist as research-only tooling gated on holdout bakeoff + founder enablement — a model for how engine post-hoc calibration should be treated: offline evidence first, never to retroactively inflate live stats (serves calibration/sizing).

## Engine-actionable? (yes/no + one-line what)
yes — adopt the honest-p priority (marketFairProb → independent trueProb → moneyline-only; exclude spread/total rank scores from absolute floors) as the canonical calibration pipeline.
