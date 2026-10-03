# arxiv-program/research/2026-09-21/arxiv-deep/0230-supervised-learning-for-table-tennis-match.md
## What it is (1-2 sentences)
Deep-dive of Chiang & Denes (2023), which predicts table-tennis match winners from automated video-capture stats (TTNet) using LR/RF/SVM/MLP with hand-crafted advantage-differential features and an ablation study. Ledger verdict: ADAPT the feature-engineering pattern (paired advantage differentials + leave-one-match-out aggregates), not the sport or the numbers.
## Key metrics/methods (formulas where given, else "not specified")
- Target: y_i = {1 if P wins; −1 if P loses} (eq 1).
- RANKDIFF = {RANK_a − RANK_b for player a; RANK_b − RANK_a for player b} (eq 2); then set to 0 when both players ranked over 100 (rank differences unreliable at tails).
- BALANCE = (|SA| + |SRA| + |FHA|) / 3 (eq 3); SA = SP − RP (serve minus receive win %), SRA = short-rally minus long-rally win %, FHA = forehand minus backhand win %.
- Logistic loss: ℓ(p) = −(1/n) Σ_i [p_i log((y_i+1)/2) + (1−p_i) log(1 − y_i/2)] (eq 4); accuracy, precision, recall, F1 (eqs 5–7).
- Models: LR (liblinear, L2, C=1.0), RF (200 trees, max depth 80, max features 4, min samples/leaf 4), SVM (linear/RBF/poly/sigmoid; linear C=0.2 best), MLP (hidden 2, max_iter 200, lbfgs, relu); grid search + 5-fold CV, 72:18:10 train:val:test; features standardized to zero mean/unit variance.
- Robustness regime: aggregate features = average over all past AND future matches of the player excluding the target match (anti-overfit check).
## Data sources named
- Automatic captures from TTNet (Voeikov et al. 2020), released by OSAI (2020, https://osai.ai/), used with OSAI permission; Tokyo 2020 Olympics + Tischtennis-Bundesliga men's/women's singles. No sample size reported (paper weakness). No code/data release.
## Findings (numbers and facts, not vibes)
- Test accuracy / F1 after tuning: LR 0.722 / 0.706; MLP 0.694 / 0.703; sigmoid-SVM 0.694 / 0.621; RBF-SVM 0.667 / 0.600 (validation: LR 0.699±0.024 / F1 0.705±0.023).
- Feature ablation (validation acc/F1, with vs without derived features): LR 0.699/0.705 vs 0.631/0.668; SVM-RBF 0.700/0.677 vs 0.500/0.591; MLP 0.696/0.708 vs 0.639/0.683 — all models worse without derived features.
- Exclude-target-match aggregates (test): LR acc 0.639, RF 0.667, MLP 0.667 (61–67% range) — comparable to live-feature numbers, taken as evidence against overfitting.
- Feature importance (RF, Gini): RANKDIFF most important.
- Leakage caveats: headline ~70% numbers computed on post-match in-match features (leaky); "robustness" check averages over past AND future matches (lookahead); CV folds random, not time-ordered; sample size never reported; no odds baseline, no ROI, no calibration.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Paired advantage-differential feature template (e.g., pass-vs-run EPA diff, early-vs-late-down EPA gap, home/road split diff) + BALANCE-style well-roundedness metric = mean of absolute differentials, as NFL matchup features (OTHER)
- RANKDIFF tail-saturation trick: rating differences unreliable at the tails → clip/zero small differences between closely-rated teams; maps to Elo-difference features (TRUST-SIGNAL)
- "Exclude-target-match aggregate" anti-overfit protocol: compute matchup features as leave-one-game-out rolling aggregates and require accuracy parity vs leaky version — cheap leakage audit for the props/engine pipeline (TRUST-SIGNAL)
## Engine-actionable? (yes/no + one-line what)
yes — adopt the differential-feature + LOO-audit pattern on nflverse 2021–2024 if BALANCE features land in top-half RF importance and LOO features lose ≤5 pp accuracy vs leaky version.
