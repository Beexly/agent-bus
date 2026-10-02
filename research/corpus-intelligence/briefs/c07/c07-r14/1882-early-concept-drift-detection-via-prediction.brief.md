# arxiv-program/research/2026-09-21/arxiv-deep/1882-early-concept-drift-detection-via-prediction.md
## What it is (1-2 sentences)
A ledger on Lu et al. (arXiv:2412.11158): Early Concept Drift Detection via Prediction Uncertainty — the PU-index (u_i = 1 − f_{y_i}(x_i), probability mass assigned to NOT the true class) is provably at least as sensitive as error rate and fires while accuracy is still flat; the PUDD detector (adaptive Ei-kMeans bucketing + Pearson chi-square over sliding-window pairs) ranks 1st in 17 of 24 dataset×classifier cases vs 7 classic + 5 SOTA detectors.
## Key metrics/methods (formulas where given, else "not specified")
- PU-index: u_i = 1 − f_{y_i}(x_i) (Eq. 7).
- Theorems: identical PU-index histograms across two windows ⇒ identical error rates and error stds; converse false ⇒ PU-index strictly more sensitive, fires before accuracy degrades.
- PUDD: sliding window with antiquated-data discard; all cutting points r ∈ [t1, t+1] explored; Adaptive PU-index Bucketing — Ei-kMeans on correctly-classified PU values (k init 5, amplify-shrink M_dist = M_dist ⊙ (1·e^{θ·(V/(N−1))}) keeps cells chi-square-valid), misclassified instances forced into one extra bin; Pearson χ² = ΣΣ(T_ij²/E_ij) − ΣΣT_ij on 2×(K+1) table, alarm when p < 10^(−X); PUDD-1/-3/-5 tested.
- Base classifiers: 3-layer DNN, Gaussian Naive Bayes, VFDT (River); chunk size 1000 (100 for CIFAR-10-CD); 100 seeds.
## Data sources named
Real: airline (58k×679, binary), elec2 (45k×8, 1996–1998 electricity pricing), powersupply (29k×4, binary); synthetic: sine, mixed, SEA variants (100k each); CIFAR-10-CD (50k images, Markov-process drift set). Code: https://github.com/RocStone/PUDD.
## Findings (numbers and facts, not vibes)
- Incremental regime: PUDD 1st in 17/24 dataset×classifier cases, top-3 in 20/24; train-once-until-alarm: 1st in 15, top-3 in 19.
- Thresholds: PUDD-1/-3/-5 take top-1 in 5/5/8 cases (incremental), 2/6/8 (train-once) — smaller thresholds better.
- vs SOTA: top rank in 7/8 cases; PUDD-5 reaches 98.49% accuracy, 2.8% above best SOTA on one dataset; exception = airline (679 features), where NS and ADLTER beat PUDD — paper attributes to tree ensembles that adapt rather than retrain, relevant to tabular NFL features.
- Exact numbers: airline-I PUDD-5 = 63.35 vs ADWIN 61.65 vs DDM 61.29; elec2-I PUDD-5 = 74.92 vs ADWIN 71.94; powersupply mixed-I PUDD-5 = 82.81 vs ADWIN 78.45.
- Ablation: Adaptive PU-index Bucketing beats plain Ei-kMeans across all datasets/classifiers/thresholds, significant at 10⁻³ and 10⁻⁵.
- Limitations: NEEDS LABELS at detection time (u_i requires true y_i) — no unsupervised/pre-game detection, though fine for weekly resolved-game monitoring; blunt refit-on-alarm loses to ensemble adaptation on rich tabular data; threshold manual; DNNs not shown calibrated.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Weekly win-probability model drift monitoring: compute per-game PU-index u_i = 1 − P_model(actual outcome) after each week's games resolve, chunk = 16-game weekly slate, chi-square alarm at α=10⁻³ (TRUST-SIGNAL)
- Fires on regime changes (OC/QB changes, mid-season injuries) while accuracy still looks fine — the "accuracy flat for 2 weeks while the distribution already moved" case (COACHING)
- Antiquated-data discard on alarm: drop pre-drift weeks, refit on post-drift only; improvement path = PU-index-weighted forgetting instead of blunt discard, since NFL regimes recur (TRUST-SIGNAL)
## Engine-actionable? (yes/no + one-line what)
yes — Wire PUDD into the weekly pipeline (offline Tuesday cron, <100 lines Python): adopt if it fires ≥1 week earlier than an error-rate detector on ≥60% of known 2020–2025 regime-change episodes with ≤2 false alarms/season.
