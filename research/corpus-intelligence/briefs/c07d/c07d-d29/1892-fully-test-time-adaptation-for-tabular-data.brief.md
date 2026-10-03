# arxiv-program/research/2026-09-21/arxiv-deep/1892-fully-test-time-adaptation-for-tabular-data.md
## What it is (1-2 sentences)
Fully Test-time Adaptation for Tabular Data (FtaT, arXiv:2412.10871) — a guarded test-time adaptation method built specifically for tabular data, beating 6 SOTA FTTA methods on 6 TableShift benchmarks × 3 backbones via three modules: label-shift correction, neighborhood-consistency weighting, and an adaptation-strength ensemble. Verdict in the ledger: ADAPT — the most directly portable paper in the lane because GSE's data is tabular.

## Key metrics/methods (formulas where given, else "not specified")
Objective: θ_{t+1} = argmin_θ Σ_i 𝒲(x_i,D_t,θ_t)·Loss(f̂_{θ_t}(x_i)) (Eq. 1), with entropy loss.
- Confident Distribution Optimizer (label shift): f̂_{θ_{t+1}}(x_k) = f_{θ_{t+1}}(x_k) ∘ P̂_t / P_0 (Eq. 2); confident-only label estimate P̃_t = Σ_i 𝟙[Entropy(f̂(x_i)) < ε]·f̂(x_i) / Σ_i 𝟙[·] (Eq. 3); confusion-matrix debias via Ĉ_t^{−1}P̃_t (Eq. 4); temporal smoothing P̂_t = Norm(P̂_{t−1} − α·Ĉ_t^{−1}P̃_t) (Eq. 5).
- Local Consistent Weighter (replaces augmentation consistency): neighborhood N(x_k, D_t) = {x : Dist(x,x_k) < mean pairwise Dist} (Eq. 6, L2); consistency indicator ℐ = 1 if ‖f(x_k) − mean neighborhood prediction‖ < β (Eq. 7); weight 𝒲 = [max f̂(x_k) − min f̂(x_k)] · ℐ(x_k, D_t, θ_t) (Eq. 8) = prediction margin × consistency.
- Dynamic Model Ensembler: M models with LRs {1e-3, 1e-4, 5e-4, 1e-5}; ensemble weights w_i ∝ 1 − R^i_t(D_t) (current-batch loss); final prediction = Σ w_i·f̂^i(x).
- Evaluation metrics: accuracy, balanced accuracy, F1; TableShift protocol (train → validate → adapt on shifted test, no source access at test).

## Data sources named
Six TableShift tabular benchmarks (Gardner, Popovic, and Schmidt 2023): HELOC, ANES, Health Insurance, ASSIST, DIABETE, Hypertension (10K–5M samples, 26–365 features). Backbones: MLP, TabTransformer, FT-Transformer. Baselines: non-adaptation, TENT, EATA, LAME, CoTTA, ODS, SAR. GSE-side dataset named in the spec: nflverse 2015–2025, game-level features, home-win target.

## Findings (numbers and facts, not vibes)
- FtaT is best on all 3 backbones (Table 3, averaged over datasets): MLP 66.77 / 64.96 / 72.00 (Acc/BalAcc/F1) vs non-adaptation baseline 62.45 / 64.61 / 60.59; TabTransformer 66.14 / 64.40 / 69.03; FT-Transformer 64.01 / 62.54 / 69.56.
- Existing FTTA methods FAIL on tabular: TENT 58.43 MLP accuracy (worse than 62.45 baseline); LAME 59.48; ODS collapses on HELOC (43.10 vs 54.37 baseline); CoTTA ≈ baseline (61.59); SAR ≈ baseline.
- Stronger data augmentation monotonically degrades CoTTA on tabular: 60.46 → 54.74 on DIABETE (Table 1).
- As shifts grow (DIABETE → HELOC → ASSIST), both parameter-optimizing and prediction-optimizing FTTA degrade below baseline (Table 2).
- Per-dataset wins (MLP, Table 4): FtaT HELOC 64.09 vs 54.37 baseline; Health Insurance 72.42 vs 65.79; Hypertension 62.20 vs 58.76 (F1 73.77 vs 55.46); competitive on DIABETE 61.66 vs 60.81.
- Ablation (Table 5): removing the Confident Distribution Optimizer hurts more than removing the Local Consistent Weighter — label shift is the bigger problem; both needed for best results.
- Dynamic ensembler matches the best single tuned LR without any tuning (Table 6); adaptation is otherwise sensitive to LR per dataset and per model (Figure 3).
- Low-entropy predictions recover the true label distribution (Figure 2); FtaT estimates the shifted label distribution faster than ODS/LAME (KL divergence, Figure 5).
- Negative/cautionary facts: naive test-time adaptation hurts tabular models; the method's guards (ε, β, α, M) add hyperparameters; 16-game NFL slates are tiny batches and the neighborhood machinery (Eq. 6) may be statistically starved; results are accuracy/F1 not calibration — entropy-minimization adaptation is known to damage calibration, unmeasured here; Eq. 2 assumes shift in P(y), not concept shift in P(y|x); no streaming/sequential weekly evaluation in the paper.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (calibration/sizing): the pre-game label-shift correction maps directly onto GSE's weekly calibration — compute the slate's mean predicted home-win probability from confident predictions only, and if |P̃_t − P_0| > δ (P_0 ≈ 0.57 historical home-win base rate), multiplicatively renormalize toward base rates. This is a zero-retraining, fully auditable post-processing step that targets the exact failure mode (slate calibration drift) the paper shows is tabular data's dominant shift problem — ablation says label shift hurts more than anything else. Serves the calibration program.
- TRUST-SIGNAL (tracking lane): the neighborhood-consistency flag — for each game find k nearest historical games in feature space; flag the pick for analyst review if the model's prediction deviates from the neighbors' mean by > β (paper's Eq. 7). Paper mechanism: inconsistent neighborhoods carry noise, consistent ones carry signal. GSE adaptation keeps this as triage (16-game batches too small for the full 𝒲-weighted objective, which the ledger explicitly REJECTS).
- OTHER (calibration/sizing): the adaptation-strength ensemble (weight 3–4 weekly model variants — frozen, light refit, full refit, aggressive recency — by w_i ∝ 1 − recent-slate log-loss) removes the "how aggressively to update" tuning decision, mirroring how FtaT removes LR tuning. Serves the calibration program and answers the standing complaint about retraining aggressiveness.
- OTHER (method): explicit REJECT guidance is itself intelligence — entropy-based test-time adaptation (TENT/LAME) hurts tabular models, and augmentation-based consistency monotonically degrades on tabular (60.46 → 54.74). Any GSE agent proposing TENT-style weekly updates is proposing a known-harmful method; the ledger's acceptance gates quantify this (slate drift ≥30% reduction with Brier worsened ≤0.001).
- QB-BEHAVIOR/COACHING-adjacent (weak): the improvement experiment's slate-archetype-conditional base rates (divisional-heavy, bad-weather, prime-time) touch coaching tendency and scheme contexts only as conditional-calibration buckets, not as behavioral models.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the standing pre-game label-shift post-processing step (renormalize weekly home-win predictions against historical base rate ≈0.57 using confident-prediction estimates) with the ≥30% slate-drift-reduction / ≤0.001 Brier-worsening gate on 2020–2025 walk-forward.
