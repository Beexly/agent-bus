# docs/arxiv-program/research/2026-09-21/arxiv-deep/0724-probability-calibration-trees.md
## What it is (1-2 sentences)
Leathart, Frank, Holmes & Pfahringer (2017, ACML) propose probability calibration trees: a logistic-model-tree variant that learns different calibration models in different regions of the input space, for when global calibration (Platt scaling, isotonic regression) fails because miscalibration is not uniform. Ledger verdict: ADAPT — localized probability calibration; complements 0723's global temperature scaling: use global temperature when miscalibration is uniform, calibration trees when it varies by regime.
## Key metrics/methods (formulas where given, else "not specified")
- Platt target smoothing: y₊=(N₊+1)/(N₊+2), y₋=1/(N₋+2) (1)
- Leaf logistic model: P(y=j|x) = e^{F_j(x)} / Σ_i e^{F_i(x)}, Σ_i F_i(x)=0 (2)
- RMSE = sqrt((1/nm) Σ_i Σ_j (p_ij − y_ij)²) (3) — square root of Brier over classes; tree pruned by CART cost-complexity minimizing RMSE, not 0-1 loss
- Log-odds transform: z_j = ln(p_j/(1−p_j)) (4)
- Structure: C4.5 tree on original attributes; LogitBoost logistic models on base-learner output scores at each node (parent model as warm start); boosting iterations chosen via CV optimizing RMSE; trained on held-out internal 5-fold CV scores; natively multiclass; falls back to global Platt when that fits better; min 15 instances/node
## Data sources named
32 UCI datasets (226–78,095 instances, 6–240 attributes, 2–24 classes); base learners calibrated: naive Bayes, boosted stumps, boosted trees (LogitBoost, 100 iterations), RBF SVMs. Implementation: WEKA package manager (probabilityCalibrationTrees, plattScaling packages, by the authors).
## Findings (numbers and facts, not vibes)
- Naive Bayes (Table 2): PCT wins or ties Platt scaling on ALL 32 datasets; vs isotonic: PCT wins many, loses 3 (optdigits 0.123 vs 0.116, led24 0.194 vs 0.194∘, yeast 0.239 vs 0.236∘)
- Boosted stumps (Table 3): PCT ≥ Platt and ≥ isotonic on all datasets; e.g. hand-postures 0.074 vs 0.090/0.089, kr-vs-kp 0.085 vs 0.157/0.153
- Boosted trees (Table 4): PCT outperforms/equal on all; e.g. taiwan-credit 0.369 vs 0.380/0.378, nursery 0.005 vs 0.018/0.006
- SVM RBF (Table 5): PCT better on average, several significant wins (news-popularity 0.468 vs 0.474/0.470; sick 0.102 vs 0.167/0.162; bankruptcy 0.180 vs 0.212/0.207), no significant losses
- Artificial example (§4.3): global Platt/isotonic cannot improve a constant-prior classifier; the calibration tree recovers a full decision tree — local calibration compensates for base-learner bias
- Validation: 10 runs of stratified 10-fold CV; corrected resampled t-test, p=0.01; metric RMSE of calibrated probabilities
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: second calibration instrument after 0723's temperature scaling, and the first *localized* calibrator in the corpus — global Platt/isotonic are inventoried but nothing learns different calibration models per input region; GSE's data is regime-heavy (division games, primetime, weather bands, rest differentials) — exactly the regional-miscalibration case; calibrated probabilities feed every abstention gate (0714–0720)
## Engine-actionable? (yes/no + one-line what)
Yes — after global temperature scaling (0723), fit a probability calibration tree on game-context attributes (spread magnitude, total, weather band, rest differential, primetime, divisional) using out-of-sample model scores; prune by RMSE, ≥15 games/leaf, fall back to global model if the tree collapses to one node; refresh per season and log per-leaf models as an interpretability product. Adopt if test-window RMSE/ECE improves with no overall degradation. (2–3 days.) Follow-on experiment: temperature scaling at the leaves, and rolling 2-season re-fit for regime drift.
