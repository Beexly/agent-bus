# arxiv-program/research/2026-09-21/arxiv-deep/0234-prediction-of-the-outcome-of-a.md
## What it is (1-2 sentences)
A full-paper read of a T20 cricket match-outcome prediction study (Singhvi et al., 2022) comparing raw stat features, an Elo-style pairwise-interaction rating model, and k-means cluster ratings across ML classifiers. Verdict was ADAPT on one component only: the pairwise-interaction player rating model (s_ij = A + a_i - b_j) with time-decay weights and neighbor regularization, portable to NFL matchup ratings.
## Key metrics/methods (formulas where given, else "not specified")
- Pairwise interaction score: s_ij = A + a_i - b_j + epsilon, where a_i = batting rating of player i, b_j = bowling rating of player j, A = intercept (expected score between average players), epsilon zero-mean error.
- Time-decay weight: w = (1 + t - t_min) / (1 + t_max - t_min) (linear recency weighting, Chessmetrics-inspired).
- Cost function: cost = sum_{i,j} w_ij (o_hat_ij - o_ij)^2 + lambda * sum_i (r_i - n_i)^2, where n_i = recency-weighted average rating of player i's opponent neighborhood, lambda = 0.7 (chosen by CV). Ratings estimated via SGD.
- Score inputs from runs-above-average (RAA): strike-rate component (runs - 0.79*balls, 2011 baseline) + dismissal-avoidance scaled by average ODI value 28.31.
- k-means k=5 selected by 10-fold internal CV; approach 3: cluster IDs + AdaBoost; approach 1: AdaBoost/DT/NB/RF/SVM +/- Bagging with greedy backward elimination (variation 5).
## Data sources named
5,390 T20 matches scraped from ESPNcricinfo (Python/BeautifulSoup); reduced to 796 IPL matches for classifier stage. 16 features per player (batting + bowling); expanding-window feature functions (no lookahead by construction). No code or data released (course project).
## Findings (numbers and facts, not vibes)
- Approach 1 (raw stats): best 56.63% (AdaBoost, 44 features); backward elimination peak 59.01% (RF) after dropping batting position, matches, 100s.
- Approach 2 (pairwise Elo-style ratings): best 63.05% non-linear SVM / 63.89% + Bagging / 64.62% ensemble of all classifiers; ratings correlate strongly with ICC official ratings for top players (qualitative scatter only, no number).
- Approach 3 (k=5 clusters): best 62% (AdaBoost); Decision Trees worst ~52%.
- Paper conclusion: the Elo-based rating approach wins.
- Leakage: 10-fold CV on matches with overlapping players/teams across folds (identity leakage); backward elimination on same data as selection; no betting-odds or home-win baseline; no held-out test for approach 3.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (matchup ratings math): pairwise matchup formulation maps to WR-vs-CB and QB-vs-pass-rush ratings — the distinct mechanism absent from GSE's Elo/Glicko inventory.
- TRUST-SIGNAL: the neighborhood-regularization trick (lambda=0.7) for thinly-observed players is a calibration/shrinkage technique for small NFL samples.
- QB-BEHAVIOR: INFERENCE — QB-vs-pass-rush matchup ratings could decompose QB performance into individual-matchup components (pass protection vs rush).
- OL: INFERENCE — OL-vs-DL matchup ratings as a ratings feature for pressure/sack modeling.
## Engine-actionable? (yes/no + one-line what)
Yes — implement pairwise NFL matchup ratings (s_ij = A + a_i - b_j, recency weights, lambda~0.7 neighborhood regularization, SGD) as features for WR-prop/CB-shadow and QB-vs-pass-rush models; acceptance gate: >=1% MAE improvement on time-ordered prop backtest; improvement experiments: exponential decay half-life tuning, game-script-conditioned intercept A, Bayesian uncertainty on ratings.
