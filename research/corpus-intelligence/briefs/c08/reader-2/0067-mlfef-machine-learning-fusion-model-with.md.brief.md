# docs/arxiv-program/research/2026-09-21/arxiv-deep/0067-mlfef-machine-learning-fusion-model-with.md
## What it is (1-2 sentences)
Ledger read of arXiv:2402.12149v2 (Ruixin Peng, Ziqing Li, 2024; ICSCIS 2024): a COMAP student-competition paper defining "momentum" in tennis via (1) a stacked SVM+Random Forest+XGBoost fusion model on 2023 Wimbledon men's singles point data and (2) an "empirical formula" with enthusiast-set weights + sliding window, analyzed with CUSUM turning-point detection and run tests. **Verdict in file: REJECT** — headline result is label leakage; momentum never tested as an out-of-sample predictor.
## Key metrics/methods (formulas where given, else "not specified")
- Eq. 1 (stacking), verbatim: F(x,y) = 0.926·SVM(x,y) + 0.964·RF(x,y) + 0.975·XGBoost(x,y) — file flags internal inconsistency: weighted-average coefficients stated as 0.323/0.336/0.340 just above, both used without reconciliation.
- XGBoost tuned via Bayesian optimization (num_round = 126); 10-fold CV base accuracies 92.6% / 96.4% / 97.5%.
- CUSUM: turning point = cumulative sum crossing zero again. Run tests on momentum/turning-point series. 1,000 Monte Carlo random 70/30 re-splits.
- The "empirical formula" is never printed (weights "from the suggestions of many tennis players and enthusiasts"); momentum definition never mathematically specified.
## Data sources named
2023 Wimbledon men's singles, 31 matches (MCM competition dataset); public match data + player personal info. No code or data links.
## Findings (numbers and facts, not vibes)
- Table 2: XGBoost test R² = 0.999851105 (train MAPE 0.191 / test MAPE 0.168, MAE 0.000876) while RF R² = −0.089, AdaBoost −0.032, NN −5.367 — file calls this a textbook label-leakage signature (label point_victor effectively in the point-outcome-derived features), not a modeling achievement.
- Run test (all 31 matches): momentum non-random in 31/31 (mean 1.0, std 0.0); turning points non-random in 38.7% (p1) / 25.8% (p2).
- Monte Carlo accuracy peaks ≈ 0.997 (RF), 0.987 (XGB), 0.97 (SVM).
- Tennis-only, 31 matches, 1 citation, mismatched venue (Smart City conference).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: duplicate of an already-rejected lane at strictly lower evidentiary quality — Garrett's momentum lane already holds the harder negative result (Koopman/DMD momentum REJECTED at p=0.89, AR(1) wins); in-sample non-randomness ≠ predictive signal. File also notes same verdict as batch-mate 0062 TCDformer.
- OTHER: cited refs Chen et al. 2021 (basketball momentum) and Vizard 2023 "Betting Against Momentum" would each need the same AR(1)-null treatment before adoption; neither is in GSE's corpus per the map.
## Engine-actionable? (yes/no + one-line what)
No — REJECT; no transferable method (tennis-specific in-sample construct, leaked headline result). The correct momentum test (out-of-sample, time-ordered, vs AR(1)/Elo null) is already the lane's standard.
