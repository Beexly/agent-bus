# docs/engine/research/2026-09-26/2026-09-26-bdb-code-extraction.md

## What it is (1-2 sentences)
A deep code-extraction report (2026-09-26) from two MIT-licensed NFL Big Data Bowl 2026 repos — repo1 (XxRemsteelexX, neural: ST Transformer/CNN/GRU/ensemble, repo-reported 0.541 public LB) and repo2 (shevchenko9liza, tabular boosting + SHAP-embedding meta-features, RMSE 3.89→2.87, −26%) — producing exact architectures, feature recipes, ablation rankings, loss formulas, and a ranked "what to port" list for GSE's NGS-enabled trajectory engine.

## Key metrics/methods (formulas where given, else "not specified")
- Task metric: mean Euclidean distance across predicted frames (lower = better); 10 fps tracking up to pass moment → predict (x,y) over ball flight (~94 frames).
- Core representation: predict per-frame increments (dx, dy), torch.cumsum(dim=1) → cumulative displacement, anchor to last observed position, clip x→[0,120], y→[0,53.3].
- ST Transformer: input (B,10,167) → d=128, 6 pre-norm layers, 8 heads, 2 learned pooling queries → residual MLP 256→188 (94×2).
- TemporalHuber loss: masked time-weighted Huber (δ=0.5) + 0.01 × mean(second_difference²); time weight w_t = exp(−0.03t); the "jerk" term is actually acceleration regularization.
- Kinematics: vx = s·cos(dir), vy = s·sin(dir), ax = a·cos(dir), ay = a·sin(dir) (repo1 competition-code convention).
- GNN-lite neighbor embeddings: K=6 nearest, radius 30 yd, weights w=exp(−dist/8), normalized, ally/opp split → 17 features.
- Geometric baseline: momentum endpoint = pos + vel × t; targeted receiver endpoint overridden to ball landing point; required acceleration = 2 × displacement / t² clipped to [−10,10].
- Augmentation: horizontal flip +0.007 LB (train), flip TTA +0.005–0.010; speed perturbation +0.003–0.004; flip+speed+TTA combined +0.021 (0.568→0.547).
- Repo2 SHAP-embedding trick: base LightGBM → TreeExplainer SHAP vectors → KMeans K=4 → cluster labels as features → CV RMSE 3.48→3.10 (−11%).
- Training: seeds [42, 19, 89, 64]; 5-fold GroupKFold grouped by game_id_play_id; StandardScaler fit only on train folds; batch 256, 200 epochs, patience 30, LR 1e-3.

## Data sources named
- NFL Big Data Bowl 2026 dataset (CC BY-NC 4.0 — methods transfer, competition data must NOT be used commercially)
- repo1 = XxRemsteelexX/NFL-Big-Data-Bowl-2026- (license caveat: LICENSE says MIT but copyright holder is placeholder "[Your Name]" — adapt methods, don't ship code verbatim)
- repo2 = shevchenko9liza/nfl-player-trajectory-prediction (clean MIT: Copyright (c) 2026 Elizaveta Shevchenko)
- Pretrained weights on Kaggle datasets (gdalbey/*): .pt state_dicts + .pkl scalers + cv_results.json — limited transfer value

## Findings (numbers and facts, not vibes)
- Ablation ranking (847+ experiments, baseline CV 0.0750): geometric features +0.0045 (most important) > GNN neighbor embeddings +0.0030 > opponent features +0.0022 > temporal +0.0018 > lags +0.0015 > route patterns +0.0012 > rolling stats +0.0008 [SCHEME, TRUST-SIGNAL]
- Best single model: ST Transformer 0.547; multiscale CNN+Transformer 0.548; GRU 0.557; position-specific ST 0.553 alone (ensemble diversity value only, weight 0.2490) [SCHEME]
- Ensemble (ST 0.2517 / CNN 0.2517 / position-ST 0.2490 / GRU 0.2476, near-uniform): 0.541 public LB; best 3-model combo ST+GRU+CNN 0.540; 20-model ensembles worse (0.545); 12-model same-seed no gain [SCHEME, TRUST-SIGNAL]
- BiGRU actively hurt (CV 0.0798→0.0830, LB 0.557→0.583); repo2's team NN Bi-GRU score (0.534) conflicts — flagged unresolved, code-level ablation favored [SCHEME]
- 8+ layer transformers overfit (CV 0.0750→0.0755); window 10 optimal (11+ no gain, 14 worse); hidden 128 optimal [SCHEME]
- Repo2: engineered features alone RMSE 3.886→3.520; SHAP-embedding clusters CV 3.48→3.10 (−11%); Optuna (TPE, 50 trials) final 2.87 (−26% total); LightGBM Optuna space: n_estimators 300–800, max_depth 7–11, lr 0.03–0.1, num_leaves 24–64 [TRUST-SIGNAL, SCHEME]
- Catastrophic TTA misfire: augmentation before scaling cratered LB 0.589→3.674 — rule: augment raw coords → recompute features → scale [TRUST-SIGNAL]
- apply_tta() in augmentation.py is a STUB returning original predictions; ensemble flip TTA is schema-incomplete (flips only indexed y column) [TRUST-SIGNAL]
- Regression hazard: preprocessing.py swaps sin/cos for velocity vs competition code — one convention required, unit-tested [TRUST-SIGNAL]
- Negative results: removing Isolation-Forest/Z-score/IQR anomalies HURT (−0.14% RMSE) — edge-of-field cases are real football; DBSCAN found no SHAP clusters; Shapley Flow duplicated SHAP clustering (ARI=0.97); LightGBM "complete failure" on sequence task; synthetic data improved CV ~3% but LB flat/worse [SCHEME, TRUST-SIGNAL]
- Code-verified vs repo-asserted split documented: all LB/CV numbers are notebook-reported (not independently re-run); "847+ experiments," frozen-encoder fine-tuning (no code found) treated as lore [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Delta formulation + cumsum anchoring, geometric baseline + residual learning, GNN-lite neighbor embeddings, time-weighted Huber (early-frame focus), ST Transformer sweet-spot config, augmentation/TTA rules → SCHEME (trajectory/modeling methodology)
- Role-conditioned features (receiver optimality/deviation, defender closing speed, QB-relative bearing), position-specific model grouping (QBs/pocket as a movement group) → QB-BEHAVIOR (receiver/QB role features), COACHING (route concepts feed)
- Code-verified vs asserted ledger, regression hazards (sin/cos swap, stub TTA, schema-incomplete flip), anomaly-removal negative result, GroupKFold-by-play leakage discipline, StandardScaler-on-train-only → TRUST-SIGNAL
- BMI/height/O-line physical features, momentum/kinetic-energy features → OL (per-player physical ratings substrate), OTHER
- Repo2's per-snapshot tabular recipe as fast CPU baseline for props/fantasy markets → SCHEME

## Engine-actionable? (yes)
Delta-prediction formulation (dx/dy per frame, cumsum, anchor to last observed) is the highest-ranked portable kernel, followed by geometric-baseline-plus-residual features (+0.0045 ablation).
