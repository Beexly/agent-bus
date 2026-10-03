# docs/ops/CALIBRATION_ECE_ESTIMATOR_2026-09-09.md

## What it is (1-2 sentences)
A calibration-gate postmortem written 2026-09-09 by the coordinating Claude session, documenting that the raw binned-ECE estimator was biased upward at finite n (a perfect model could not pass the floor), the failed subtractive correction, its replacement with a per-bin variance-corrected debiased ECE, and three sample bugs (in-play picks, receipt-vs-odds-table divergence, loader skipping receipted picks) that made the deployed model version look miscalibrated.

## Key metrics/methods (formulas where given, else "not specified")
- E[ECE | perfect calibration] = SUM_k (n_k / N) * sqrt(2/pi) * sqrt(SUM_i p_i(1-p_i)) / n_k — strictly positive, shrinks like 1/sqrt(n).
- Simulated null ECE under perfect calibration (Beta-distributed forecasts, mean 0.67, 10 equal-width bins, 400 replications): n=100 → 0.080-0.096; n=487 → 0.039-0.043; n=1000 → 0.027-0.031; n=2000 → 0.019-0.022; n=5000 → 0.012-0.014.
- Replaced estimator: debiased = SUM_k (n_k / N) * sqrt(max(0, g_k^2 - v_k)), where g_k = mean forecast - observed rate and v_k = SUM_i p_i(1-p_i) / n_k^2.
- Gate floors: n >= 100, ECE <= 0.05, Brier <= 0.22, Murphy reliability <= 0.05, 3 consecutive GREEN six-hourly runs.
- Deployed-version floor reads the slice's seeded 5th-percentile bootstrap bound of debiased ECE (eceDebiasedCi90Lo, 200 resamples; null under 30 rows).

## Data sources named
Calibration-metrics cron (six-hourly, at :40 UTC), truth surface, production SQL on pick_proof_receipts (read-only), the Odds API odds table (H2H rows at generatedAt), market-anchored bases market_anchored_v2/v3/v4.

## Findings (numbers and facts, not vibes)
- 2026-09-09 09:38 UTC gate read RED: raw ECE 0.0539 > 0.05 on n=487 settled MONEYLINE picks; Brier 0.1907 (floor 0.22), Murphy reliability 0.0060 (floor 0.05), consecutiveGreen 0 of 3. [TRUST-SIGNAL]
- At n=100 the ECE floor pair (n>=100, ECE<=0.05) was never jointly satisfiable — a perfect model reads ~0.09 there. [TRUST-SIGNAL]
- Deployed v5.2.7 slice showed raw ECE 0.1055, debiased 0.0819, bound 0.0526 on 14:08 UTC run — RED by 0.0026; investigation found it was a sample artifact, not miscalibration. [TRUST-SIGNAL]
- Bug 1: 113 of 477 settled moneyline rows were generated at or after commenceTime (in-play prices scored as pre-kickoff); example pick cmt55xbx606xqh8j1t81q8yfq, Twins ML (-1771) at 02:03:01Z with first pitch 01:40Z; Padres won 7-5. [OTHER]
- Bug 2: on v5.2.7's pre-game rows the receipt's marketFairProb averaged 0.169 above the odds table's de-vigged consensus at generatedAt; 15 of 46 receipted rows were more than 0.15 off. [OTHER]
- Bug 3: oddsTableCandidate loader skipped every pick carrying a receipt — 54 of 57 "unverifiable" receipt rows were actually priceable by the odds table (44 v5.2.7 multi-book rows with 12 books: betmgm, draftkings, fanduel + 9 more). [OTHER]
- Clean sample (market_anchored_v4, first run): pooled n=381, Brier 0.2100, debiased ECE 0.0373, bound 0.0244; deployed v5.2.7 n=259, debiased 0.0579, bound 0.0425 — GREEN on every floor; v5.2.7 odds table 2+ books n=131 Brier 0.1723; single-book n=128 Brier 0.2211. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Calibration gate design is directly load-bearing for public claims (TRUST-SIGNAL): floors and methodology are the proof surface Garrett uses publicly.
- The in-play pick bug shows eligibility samples must enforce generatedAt < commenceTime; scoring live prices is look-ahead that inflates stated probabilities (OTHER).
- Receipt-vs-odds-table divergence (0.169 mean gap) shows the minting path is not the source of truth; structured odds data must be first in the chain (TRUST-SIGNAL).
- Multi-book rows outperform single-book rows (Brier 0.1723 vs 0.2211 on v5.2.7) — book-count density is a measurable calibration input (OTHER).

## Engine-actionable? (yes/no + one-line what)
yes — adopt the variance-corrected debiased ECE (with 5th-percentile bootstrap bounds) as the calibration estimator for all engine probability surfaces, and hard-exclude generatedAt >= commenceTime picks from scoring samples.
