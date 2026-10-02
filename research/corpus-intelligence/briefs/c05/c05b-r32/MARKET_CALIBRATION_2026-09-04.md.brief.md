# data/MARKET_CALIBRATION_2026-09-04.md
## What it is (1-2 sentences)
A walk-forward calibration study (Wave 3, run 2026-09-04) of de-vigged closing NFL moneylines against home-win outcomes over 5,281 settled games (2006–2025, nflverse `games.csv`), concluding the closing line is already calibrated and no recalibration layer adds skill.

## Key metrics/methods (formulas where given, else "not specified")
- Market probability = proportional de-vig of the two closing moneylines; ties excluded.
- Walk-forward: train ≤ N, evaluate N+1 for eval years 2016–2025 (never one pooled number).
- Brier decomposition terms reported: reliability, resolution, uncertainty; isotonic (PAVA), Platt, and coarse 3-param beta calibrators compared on held-out ΔBrier vs identity.
- Variable-based calibration: per-leaf train≤2015 means on |spread_line| leaves and season-era leaves, evaluated 2016–2025.
- Note: Murphy decomposition rel − res + unc = 0.2438 ≠ Brier 0.2106 due to finite-bin residual ≈ 0.033 on 10 equal-width bins — terms not additive at this binning.

## Data sources named
- nflverse `games.csv` (5,281 settled NFL games, 2006–2025, CC BY 4.0 attribution); distinct from the 15,939-pick replay corpus (spreads/totals 1999–2025).
- Produced by `scripts/analytics/replay-calibration.ts`.

## Findings (numbers and facts, not vibes)
- Pooled held-out 2016–2025 (n=2,750): base home-win rate 55.02%; Brier 0.2106 (95% bootstrap CI [0.2050, 0.2172]); reliability 0.0324 (CI [0.0311, 0.0339]); resolution 0.0361 (CI [0.0303, 0.0424]); uncertainty 0.2475 (CI [0.2453, 0.2490]).
- ECE: equal-width 0.0180 (CI [0.0148, 0.0400]); adaptive binner 0.0126 (CI [0.0099, 0.0332]).
- Reliability curve (equal-count bins, predicted → observed home-win %): 28.0→26.6, 42.7→41.2, 55.1→55.4, 64.2→62.0, 73.8→74.0, 84.1→86.8 — deviations ~2–3 points, no monotone bias.
- Calibrator comparison, mean held-out ΔBrier across 10 folds: isotonic +0.00007, Platt −0.00003, beta −0.00014 — none beats identity by more than 0.0005. "The closing line is already the calibration."
- Favourite-strength leaves (train ≤2015 base vs test 2016–2025 actual): PK-1 46.81%→46.81% (n=188); 1.5–2.5 50.94%→50.11% (n=447); 3–6 50.00%→52.01% (n=1196); 6.5–9.5 65.86%→57.12% (n=576, ≈8.7-point drift, ≈3.6 SE — FLAGGED for follow-up, not a product change); 10+ 74.43%→72.89% (n=343).
- Weighted leaf Brier 0.2440 vs single global mean 0.2478 — leaf model wins by 0.0038 held-out.
- Season-era leaf (2014–2020: 55.91% train → 55.41% test): no era effect; earlier era leaves unevaluable (corpus starts 2006).
- Floors met by the MARKET, not by picks: Brier ≤ 0.22 / ECE ≤ 0.05 (D2). D7 honored: publish the reliability curve, never a recalibrated-model claim. Combined with CONVERGENT_CALIBRATION_EVIDENCE_2026-09-04: the market resolves outcomes; the confidence score does not — no public "edge" language supported.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Market probability as calibrated baseline (Brier 0.2106, ECE 0.0126 adaptive) — TRUST-SIGNAL
- Reliability curve as publishable honest proof artifact — TRUST-SIGNAL
- 55.02% home-win base rate; favourite-strength leaf drift (6.5–9.5 favs 8.7 pts) — OTHER (market behavior, worth era-drift follow-up)
- Recalibration adds variance not skill — TRUST-SIGNAL (do-not-build rule)

## Engine-actionable? (yes/no + one-line what)
Yes — use the de-vigged closing line as the identity calibration with Brier ≤ 0.22 / adaptive ECE ≤ 0.05 as the model-floors reference, and skip any market recalibration layer (adds variance, no skill).
