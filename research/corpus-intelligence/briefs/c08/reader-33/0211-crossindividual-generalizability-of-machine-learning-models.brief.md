# docs/arxiv-program/research/2026-09-21/arxiv-deep/0211-crossindividual-generalizability-of-machine-learning-models.md
## What it is (1-2 sentences)
Deep read of arXiv:2605.05487 — a baseball pitch-velocity study showing ML models collapse when evaluated leave-one-subject-out vs within-individual; verdict ADAPT for the validation discipline (LOPO/LOSOCV) and the signed-residual-as-ability method, not the biomechanics.
## Key metrics/methods (formulas where given, else "not specified")
- Leave-one-subject-out CV (LOSOCV): test = one pitcher's 5 pitches, train = other 49 pitchers; vs within-individual comparison (1 of 5 pitches per pitcher to test, same pitchers in train/test).
- Models: GNN-GRU and Transformer (6 hyperparameter configs each; architectures not formalized); Adam lr 0.001, weight decay 1e-4, MSE, early stop when training R² > 0.90; metric R² of per-pitcher mean predicted vs actual.
- Expertise grouping criterion (Eq 1): η = d_GS / (σ_I + σ_E), split maximizing η; independent t-tests, Cohen's d, on absolute and signed (predicted − true) errors.
- Spatiotemporal ablation: 5 body regions × 10 cumulative time windows = 50 datasets × 50 pitchers × 10 repeats = 25,000 trainings.
## Data sources named
50 pitchers (4 HS, 10 collegiate, 20 industrial league, 3 independent, 13 NPB), top 5 fastballs each (250 pitches); 16 Raptor-E motion-capture cameras 200–500 Hz, 15 landmarks → 15×101×3 inputs per pitch; TrackMan ball velocity; public anonymized dataset + code on GitHub (github.com/takamido/Ball_speed_pred_cross_ind); JSPS grant JP25K21018.
## Findings (numbers and facts, not vibes)
- Cross-individual R² = 0.38 (best: Transformer (4,64,128)) vs within-individual R² = 0.91 — a pooled train/test split inflates reported accuracy massively when athletes leak across folds.
- GNN-GRU configs: 0.14–0.28; Transformer: 0.17–0.38 across configs.
- Absolute error: no group difference (t(48)=0.12, p=.89, d=0.04). Signed error: Intermediate (n=14) systematically overestimated, Experts (n=36) no clear bias (t(48)=2.13, p=.03, d=0.67); group means 77.60±4.41 vs 84.54±4.39 mph.
- Pivot leg/trunk most generalizable regions; pivot leg R² > 0.25 even in the weight-shift initiation phase (~20% time point).
- Caveats: early stopping on training R²>0.90 is non-standard (within-individual 0.91 may itself be inflated); n=50 pitchers is small; no non-ML baseline; biomechanical findings don't transfer to NFL.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Leave-one-player-out validation discipline for player-level models → TRUST-SIGNAL (honest generalization estimates; the pooled→LOPO degradation is the real applicability number)
- Signed-residual-as-ability metric (systematic over/underperformance vs statistical inputs) → OTHER (portable ability-estimation method for weekly prop projections with shrinkage)
- Feature-group ablation for cross-player generalizability → OTHER (diagnostic: which feature groups memorize individuals vs generalize)
## Engine-actionable? (yes/no + one-line what)
Yes — bolt leave-one-player-out CV onto GSE's prop/DFS pipeline (pooled vs LOPO MAE/R² on 2023–2024 nflverse; adopt as mandatory gate if degradation ≥ 10% relative), and adopt per-player mean signed residuals as a weekly efficiency prior if residuals are week-to-week stable (Spearman ≥ 0.5 across consecutive 4-week windows).
