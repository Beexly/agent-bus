# arxiv-program/research/2026-09-21/arxiv-deep/0424-biases-in-expected-goals-models-confound.md
## What it is (1-2 sentences)
Full deep-read of Davis & Robberechts (2024), arXiv:2401.09940v2: a paper showing that goals-above-expected (GAX) residuals are confounded by training-data composition — elite high-volume finishers over-contribute to the xG training set, so the model misprices their shots and the "skill" residual is partly self-contamination. It proposes cross-fitting, multi-calibration within position×volume bins, and shrinkage as remedies.
## Key metrics/methods (formulas where given, else "not specified")
- GAX = Σ_i (G_i − xG_i)
- Multi-calibration: calibrate separately within groups g = position × smoothed shot-volume bin (low < 0.875 shots/90, high > 2.526 shots/90); group xG pulled toward the group's empirical conversion rate with a prior weight of 270 minutes at the position prior (attacker 2.1, midfielder 1.1, defender 0.4 per 90)
- Simulation: 10,000 repetitions per (skill multiplier α, shot volume) cell; skill multiplier α ∈ {0, 5, 10, 15, 25%} on baseline conversion; volumes {50, 75, 100, 125, 150} shots/season; detection rate = fraction of 5-season runs with positive cumulative GAX
- Messi contamination experiment: inject 4,000 shots from a +25% finisher into training, re-measure GAX
## Data sources named
StatsBomb Open Data (public); 2015/16 Big Five logistic xG model on 43,110 open-play shots; StatsBomb proprietary xG for comparison. Features: shot x/y, distance, angle, body part. Case studies: Pogba (242 open-play shots, xG 20.85, 17 goals), Mahrez (289 shots, 17 deflected = 5.9%), Messi (375 goals from 1,862 open-play shots). EPL 2015/16 players with ≥5 goals (n=63).
## Findings (numbers and facts, not vibes)
- Simulation: variance dominates — a +25% finisher at 150 shots/season has mean GAX 3.70 with SD 3.73; single-season GAX is mostly noise
- Detection: α=25% with 100 shots/season → 70.0% chance of outperforming xG in ≥4 of 5 seasons; α=10% with 125 shots → only 41.6%
- Messi contamination: adding 4,000 +25%-finisher shots to training drops Messi's measured GAX from 127.6 to 120.8 (>5% — INFERENCE: this is the paper's contamination bar)
- Under corrected (multi-calibrated) baseline, Messi's GAX rises from 127.57 to 149.99 (~17% increase)
- Mahrez: GAX 14.61 including deflected shots vs. 9.03 excluding (deflections inflate apparent finishing skill)
- EPL 2015/16 (n=63, ≥5 goals): 50 players exceed standard xG (avg 16.72%); 51 exceed multi-calibrated xG (avg 20.00%); 47 exceed StatsBomb xG (avg 12.78%)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Elite-player residuals are confounded by training composition — applies directly to NFL expected-yards/CPOE residuals where elite QBs/WRs dominate the training sample — OTHER
- Cross-fitting + multi-calibration (position × volume bins) + shrinkage as mandatory residual hygiene — OTHER
- Mahrez deflected-shot result: atypical plays (tipped passes, Hail Marys, kneel-downs, spikes) must be excluded from both training and residual evaluation — OTHER
- Position priors (2.1/1.1/0.4 per 90) with empirical-Bayes shrinkage toward positional means — OTHER
## Engine-actionable? (yes/no + one-line what)
yes — Add cross-fitting (no player's residual computed from a model trained on his own plays), multi-calibrate expected-yards/CPOE within position × touches-per-game bins, exclude atypical plays (tipped passes, Hail Marys, kneel-downs, spikes), and shrink published residual ratings toward positional means before any prop edge uses them.
