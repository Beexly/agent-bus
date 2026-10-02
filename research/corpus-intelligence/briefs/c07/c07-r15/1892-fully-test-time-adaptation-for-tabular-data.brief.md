# arxiv-program/research/2026-09-21/arxiv-deep/1892-fully-test-time-adaptation-for-tabular-data.md
## What it is (1-2 sentences)
Fully Test-time Adaptation for Tabular Data (FtaT, arXiv:2412.10871): a three-module adaptation scheme for trained tabular models facing covariate + label shift at test time — (1) Confident Distribution Optimizer (label-shift correction), (2) Local Consistent Weighter (neighborhood-consistency per-sample weights, no augmentation), (3) Dynamic Model Ensembler (adaptation-strength ensemble that removes learning-rate tuning). Beats 6 SOTA FTTA methods on 6 TableShift benchmarks × 3 backbones, and shows naive FTTA (TENT/LAME) actively hurts tabular models.

## Key metrics/methods (formulas where given, else "not specified")
- Eq. 1: θ_{t+1} = argmin_θ Σ_i 𝒲(x_i,D_t,θ_t)·Loss(f̂_{θ_t}(x_i)) (weighted entropy loss)
- Eq. 2: f̂_{θ_{t+1}}(x_k) = f_{θ_{t+1}}(x_k) ∘ P̂_t / P_0 (label-shift correction of predictions)
- Eq. 3: P̃_t = Σ_i 𝟙[Entropy(f̂(x_i)) < ε]·f̂(x_i) / Σ_i 𝟙[·] (shifted label dist from low-entropy predictions only)
- Eq. 4–5: debias with confusion matrix Ĉ_t → Ĉ_t^{−1}P̃_t; temporal smoothing P̂_t = Norm(P̂_{t−1} − α·Ĉ_t^{−1}P̃_t)
- Eq. 6–8: neighborhood N(x_k,D_t) = {x : Dist(x,x_k) < mean pairwise Dist} (L2); consistency indicator ℐ = 1 if ‖f(x_k) − mean neighborhood prediction‖ < β; weight 𝒲 = [max f̂(x_k) − min f̂(x_k)] · ℐ(x_k, D_t, θ_t)
- Dynamic Model Ensembler: 4 LRs {1e-3, 1e-4, 5e-4, 1e-5}, weights w_i ∝ 1 − R^i_t(D_t) (current-batch loss)
- Metrics: accuracy, balanced accuracy, F1. Baselines: non-adaptation, TENT, EATA, LAME, CoTTA, ODS, SAR. Backbones: MLP, TabTransformer, FT-Transformer.

## Data sources named
Six TableShift tabular benchmarks with real distribution shifts: HELOC, ANES, Health Insurance, ASSIST, DIABETE, Hypertension (10K–5M samples, 26–365 features). TableShift benchmark public (Gardner, Popovic, and Schmidt 2023).

## Findings (numbers and facts, not vibes)
- FtaT best on all 3 backbones (Table 3, avg over datasets): MLP 66.77/64.96/72.00 (Acc/BalAcc/F1) vs non-adaptation 62.45/64.61/60.59; TabTransformer 66.14/64.40/69.03; FT-Transformer 64.01/62.54/69.56.
- Existing FTTA fails on tabular: TENT 58.43 (MLP Acc, worse than baseline), LAME 59.48, ODS collapses on HELOC (43.10 vs 54.37 baseline), CoTTA ≈ baseline (61.59), SAR ≈ baseline.
- Per-dataset (MLP, Table 4): HELOC 64.09 vs 54.37; Health Insurance 72.42 vs 65.79; Hypertension 62.20 vs 58.76 (F1 73.77 vs 55.46); DIABETE 61.66 vs 60.81.
- Augmentation is actively harmful for tabular: stronger augmentation monotonically degrades CoTTA 60.46 → 54.74 on DIABETE (Table 1).
- Ablation (Table 5): removing the label-shift corrector (Cdo) hurts more than removing the neighborhood weighter (Lcw) — label shift is the bigger problem; both needed for best results.
- Dynamic ensembler matches the best single tuned LR without tuning (Table 6); low-entropy predictions recover the true label distribution faster than ODS/LAME (Figure 5, KL divergence).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the label-shift correction is a pure post-processing recalibration step (corrects slate-level distribution drift against historical base rates) — a calibration guard, not a model change. The neighborhood-consistency flag is a per-game trust/triage signal.
- OTHER: tabular-native test-time adaptation method; maps onto the pre-game prediction layer (GSE's data is tabular).

## Engine-actionable? (yes/no + one-line what)
yes — weekly pre-game label-shift correction as zero-retraining post-processing (shrink slate mean predicted probability toward historical base rate when |slate mean − base| > δ, estimated from confident predictions only) plus k-nearest-historical-game consistency flags for analyst triage; explicitly REJECT entropy-minimization adaptation (TENT failure mode).
