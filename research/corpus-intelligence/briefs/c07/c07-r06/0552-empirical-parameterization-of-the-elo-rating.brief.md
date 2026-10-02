# arxiv-program/research/2026-09-21/arxiv-deep/0552-empirical-parameterization-of-the-elo-rating.md
## What it is (1-2 sentences)
Maitra et al. (2026) propose a data-driven framework for tuning Elo parameters: enumerate candidate experience-based K-factor schedules and game-count cutoffs, compute rating histories under each, and select the config maximizing a logistic-regression classifier's accuracy on pre-match rating differences (also fitting the rating-difference→win-probability map empirically instead of the theoretical D=400 curve). The deep read's verdict is ADAPT — the tuning *protocol* ports directly to GSE's NFL Elo-family ratings (the Ludo application is irrelevant), with a walk-forward correction of the paper's in-sample flaw.

## Key metrics/methods (formulas where given, else "not specified")
- Expected score: E_A = 1/(1 + 10^{(R_B − R_A)/400}).
- Update: R' = R + K_i(S − E), S ∈ {1, 0}.
- K-function (tuned eq. 1): K_i = 60 if n_i ≤ 5; 30 if 5 < n_i ≤ 10; 16 if n_i > 10 (n_i = games played).
- Tuner: logistic regression P(Player 1 wins) = σ(β_0 + β_1·(R_1 − R_2)); real-data fit: β_0 = −0.0623 (se 0.001), β_1 = 0.0046 (se 9.49e-06), t = 489.545; simulated: β_0 = −0.1298, β_1 = 0.0056, t = 219.460 (all p ≈ 0.000 per paper).
- Candidate space: K triples {(60,30,16), (30,30,30), (30,16,8), (100,50,25)} × cutoff pairs {(5,10), ([q10]+1,[q25]+1), ([q25]+1,[q50]+1)} with q_k = game-count percentiles; select by classification F1/accuracy.

## Data sources named
Two proprietary Ludo datasets (3-dice, 2-player, Wowzy platform rules): simulated 184,000 games between 7 bot profiles; real 320,978 players, 4,640,765 games over 2.5 months in 2024 from Games24x7 (early post-release, skill unstabilized). Not replicable from public sources.

## Findings (numbers and facts, not vibes)
- Real-data F1 by config: (60,30,16)/(5,10): 0.554; (30,30,30)/(5,10): 0.548; (30,16,8)/(5,10): 0.554; (100,50,25)/(5,10): 0.548; quantile cutoffs 0.548–0.554 across all configs — four configs tied at top; authors "randomly" picked (60,30,16)/(5,10).
- Simulated bots with chosen config: F1 = 0.87 (vs 0.554 real).
- Rating distribution (real): min 776, 10% 977, 25% 1028, median 1094, mean 1096, 75% 1162, 90% 1216, max 1452 — near-symmetric around 1000.
- Accuracy-vs-rating-difference: gaps 0–30 → ~52% accuracy (near random); rises monotonically with larger gaps.
- Limitations (adversarial): tuner fit AND evaluated in-sample (data snooping); 0.548 vs 0.554 differences likely noise; Ludo is high-luck, external validity to low-luck domains asserted via one football citation only; game-count K conflates learning with certainty (Glicko RD is more principled); real-data accuracy 0.554 barely above chance.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the empirical expected-score map (learned rating-diff→win-prob curve vs theoretical 400-divisor curve) is a calibration upgrade; but the paper's in-sample tuning is the cautionary example — GSE must run the tuner walk-forward out-of-sample (2016–2025 Brier), never in-sample.
- OTHER: uncertainty-weighted K (Glicko-style rating-variance weighting) hypothesized as an NFL improvement over game-count decay — adapts faster to regime changes (new QB, coaching change).

## Engine-actionable? (yes/no + one-line what)
yes — run the walk-forward empirical K/config tuner on nflverse 1999–2025 (K grid × margin-model variants from the Skellam-margin Elo lane, select by out-of-sample Brier, ship the empirical win-prob map); ~1 day, low risk.
