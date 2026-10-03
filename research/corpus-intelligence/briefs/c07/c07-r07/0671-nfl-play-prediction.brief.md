# arxiv-program/research/2026-09-21/arxiv-deep/0671-nfl-play-prediction.md
## What it is (1-2 sentences)
Play-level NFL outcome prediction from game situation and parsed play descriptions (Teich, Lutz, Kassarnig, 2016, arXiv:1601.00574), introducing a down-aware continuous "progress" measure of play success as an alternative to EPA that needs no win-probability model. Ledger verdict: ADAPT — the "progress" measure is a down-aware continuous play-outcome target worth adopting as a complement to EPA for GSE play-level modeling; the RBF-SVM best-practice result is a weak baseline, but the feature/target design transfers.
## Key metrics/methods (formulas where given, else "not specified")
- Progress measure: progress(down, togo, gained) = 0 if down∈{3,4} and gained<togo; (gained/togo)^down if down∈{1,2} and gained<togo; 1 if gained≥togo. Linear on 1st down, quadratic on 2nd down.
- F1 = 2·precision·recall/(precision+recall).
- Classification: decision trees (balanced class weights), nearest centroid, LDA (SVD/LS/eigenvalue w/ shrinkage), linear + RBF SVM (grid search C ∈ {2^k}, k∈[−5,17]; γ ∈ {2^k}, k∈[−17,4]).
- Regression: regression trees, RBF SVR, linear regression, PyBrain ANNs (up to 10 hidden layers × 100 units, 100 epochs, sigmoid/tanh/linear).
- Categorical features one-hot encoded: 12 → 77 dimensions; imbalance handled by balanced class weighting or undersampling; ANOVA F-test for feature ranking; PCA for exploration.
- No explicit train/test split stated — appears train-on-full or cross-validated (methodological weakness; no time-ordered split).
## Data sources named
177,245 plays from all NFL games 2009–2014 via the nflgame API (play-by-play JSON). Penalties, field goals, punts, sacks, fumbles, and non-play strings filtered out. Code: https://www.github.com/romanlutz/NFLPlayPrediction (scikit-learn, PyBrain, nflgame). nflgame deprecated; replicable with nflverse.
## Findings (numbers and facts, not vibes)
- Success classification: RBF SVM best — accuracy 66.65%, precision 67.62%, recall 63.75%, F1 65.63% (C=2^1, γ=2^−17). SVD LDA: 66.91%/67.20%/65.05%/66.11%. Decision tree (1 rule: togo ≤ 7.5): 69.2% accuracy but precision 47.9%, recall 50.0%. Nearest centroid ~50.7% — random. NNs on imbalanced data collapsed to majority class (~70.5% accuracy, ~0 recall). Target imbalance: 70% failure / 30% success.
- Yards regression: RBF SVR best — MAE 5.207 yds, RMSE 8.977 yds (others MAE 5.49–5.78).
- Progress regression: RBF SVR best — MAE 0.1351, RMSE 0.2332; linear 0.1412/0.2283; regression trees 0.1424/0.2131; NN 0.1575/0.2449.
- ANOVA F-test: togo 16146.92 (highest), down 6690.42, pass 2927.44; team=NE 48.01 vs team=MIA 0.00005 — million-fold spread, suggesting team-identity memorization rather than insight.
- Precision ceiling 67.6% too low for real play-calling use (authors' own concession).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "Progress" as a secondary down-aware play-value target alongside EPA in play-by-play models: OTHER
- QB run / shotgun / pass-length features in play-outcome modeling: QB-BEHAVIOR
- Team one-hot features memorize identity (million-fold ANOVA spread) — use Elo/EPA-based strength features instead: TRUST-SIGNAL
- Play-description parsing for scheme tendency extraction: SCHEME
## Engine-actionable? (yes/no + one-line what)
Yes — adopt "progress" as a secondary play-level target: compute it for every nflverse play 2009–2025 and train GBM regression with team-strength (not one-hot) + NGS tracking features, time-ordered; ADOPT if 2024-holdout RMSE < 0.22 and progress adds incremental R² over EPA in a drive-points regression (~3–5 days effort).
