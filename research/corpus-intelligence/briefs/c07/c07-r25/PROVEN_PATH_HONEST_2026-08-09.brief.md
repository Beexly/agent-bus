# ops/PROVEN_PATH_HONEST_2026-08-09.md
## What it is (1-2 sentences)
The honest calibration recovery plan for the platform's PROVEN trust-ladder step: it defines PROVEN as a hard ladder (not a claim), documents why live calibration was stuck RED on 2026-08-09, and lists what shipped to fix it without fabricating green.

## Key metrics/methods (formulas where given, else "not specified")
- PROVEN ladder: canonicalSettled ≥ floor (1017 ≥ 100 met) AND live eligibility GREEN for streak K=3 AND publish policy effective (AUTO_PUBLISH or PUBLISHED); `canExposePerformanceStats = publishedEffective && GREEN`.
- Live calibration floors: Brier ≤ 0.22 · ECE ≤ 0.05 · Murphy REL ≤ 0.05 · n ≥ 100.
- Honest live-p resolver (`live-calibration-p.ts`): prefer `marketFairProb` → independent `trueProb` → MONEYLINE confidence only; **exclude SPREAD/TOTAL without fair p from absolute floors**.
- Regression guards: never conf-echo rankingP as independent; never edge-as-p; maps stay OFF until an offline bakeoff shows holdout improvement AND the founder enables it; PERFORMANCE_STATS stays dark while RED.

## Data sources named
- `marketFairProb` (devigged market probabilities), independent `trueProb`, MONEYLINE confidence scores; The Odds API key optional (restoring it feeds the market board + marketFairProb density).

## Findings (numbers and facts, not vibes)
- 2026-08-09 live class: Brier 0.275 (floor 0.22) / ECE 0.112 (floor 0.05) / RES 0.002 — RED.
- Root cause 1 (measured): p = confidence/100 on SPREAD/TOTAL treated rank scores as probabilities → artificial overconfidence.
- Root cause 2: independentCoverage 0% on the historical sample → ranking cannot raise RES.
- Root cause 3: calibration maps correctly OFF — rewriting p with isotonic to invent GREEN would be fabrication.
- Shipped this session: honest live-p resolver wired into `calibration-metrics` cron + durable metrics path; signal slate generation (independents → future rankingP coverage); reliability chart component at `components/calibration/reliability-chart.tsx`; RPCP residual attribution (primary bottleneck: missing_independent).
- Progression ladder A–E: honest p deploy + re-run → generate-signal-slate every 2h → settle + accumulate → 3 consecutive GREEN runs → AUTO_PUBLISH or founder PUBLISHED.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Calibration honesty gate: never rewrite p to fake GREEN; PERFORMANCE_STATS dark while RED — [TRUST-SIGNAL]
- Live calibration floor math (Brier/ECE/Murphy + n floor) as the trust-ladder gate — [TRUST-SIGNAL]
- Honest-p priority chain (marketFairProb → independent trueProb → MONEYLINE only) as the pattern for sourcing modeled win-probability — [OTHER]
- Reliability chart component + residual attribution as trust-reporting artifacts — [OTHER]

## Engine-actionable? (yes/no + one-line what)
yes — Adopt the honest-p rule for any calibration set: never treat rank scores/confidence as probabilities for SPREAD/TOTAL without a fair p; prefer marketFairProb, then independent trueProb, then MONEYLINE confidence.
