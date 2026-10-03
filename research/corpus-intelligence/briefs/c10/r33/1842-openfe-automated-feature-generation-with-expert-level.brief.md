# docs/arxiv-program/research/2026-09-21/arxiv-deep/1842-openfe-automated-feature-generation-with-expert-level.md
## What it is (1-2 sentences)
A ledger read of arXiv:2211.12507 (Zhang et al., ICML 2023): OpenFE, a production open-source expand-and-reduce automated feature generator using FeatureBoost (GBDT residual fitting for incremental-gain scoring) plus two-stage coarse-to-fine pruning, that beat expert Kaggle features on IEEE Fraud and BNP. Verdict in ledger: ADAPT (paper explicitly cannot handle time series).
## Key metrics/methods (formulas where given, else "not specified")
- Problem (Eq 1): max_{S ⊆ A(T)} E(L(D_tr, T+S), D_vld, T+S) — E larger-better.
- FeatureBoost (Alg. 2): fit f′ only on new features T′ to base-model residuals: minimize L(f′) = Σᵢ l(yᵢ, ŷᵢ + f′(xᵢ[T′])); incremental gain Δ = L(f) − L(f′). Implemented with LightGBM GBDT (1000 estimators, lr 0.1, 16 leaves in hyperparam table).
- Pruning: Stage I SuccessivePruning — split D into 2^q blocks, score each candidate τ alone with Δ_τ = FeatureBoost(Dᵢ, {τ}, ŷ) on growing subsets, keep top half, dedupe, drop Δ_τ ≤ 0; Stage II FeatureAttribution — joint FeatureBoost, MDI per-feature importance, keep top-ranked.
- Operators: unary (Freq/Abs/Log/Sqrt/Sigmoid/Round/Residual); binary (min/max/+/-//); GroupBy aggregations (ThenMin/Max/Mean/Median/Std/Rank/Count/NUnique; Combine, CombineThenFreq). Ordinal features treated as both numerical and categorical. Main experiments use first-order features only.
- Theory: Thm 4.1 — with GroupBy features, test loss → 0 as #groups and group size grow (Rademacher bound); Thm 4.2 — without generation, a Bernoulli-group instance keeps test loss ≥ 1/64 for any predictor regardless of sample size.
- Complexity: O(2^{−q}·q·n·m²).
## Data sources named
- 10 curated benchmarks (CA 20.6k rows, MI 1200k, ME 163k, TE 51k, BR 900k, DI 102k, NO 34.4k, VE 98.5k, JA 83.7k, CO 581k); OpenML CC18 (68 datasets; 49 shown); Kaggle IEEE-CIS Fraud Detection (6,351 teams) and BNP Paribas Cardif Claims (2,920 teams); public UCI/OpenML/Kaggle.
## Findings (numbers and facts, not vibes)
- Table 3 (LightGBM, 10 repeats): OpenFE significantly best on all 10 datasets. Notable: DI AUC 0.731±0.001 → 0.888±0.002 (largest single gain; all baselines ≤0.732); CA RMSE 0.432→0.421; ME RMSE 1128.4→982.0; BR AUC 0.756→0.786. (INFERENCE: standard errors reported as ± values; all gains passed Welch's t-test p=0.05.)
- Kaggle: IEEE Fraud — XGBoost baseline rank 2286/6351 → expert features 76/6351 → OpenFE 42/6351 (beats 99.3%); BNP — baseline 31/2920 → expert 12/2920 → OpenFE 12/2920 (beats 99.6%). First-order only; second-order added nothing for IEEE, small gain for BNP.
- CC18: significantly best on 40 of 49 improvable datasets; avg +1.9% accuracy over base; no significant gain on 19 of 68 (no method gained there).
- Ablations: MI-scoring variant worse than FeatureBoost on all 6 reported sets (e.g. CA 0.428 vs 0.421); no-SuccessivePruning worse (e.g. CO 0.965 vs 0.974). MDI/PFI/SHAP rank similarly (avg rank 2.07/1.79/2.14) but MDI costs 0s (free with LightGBM) vs SHAP 42s vs permutation 25min on Microsoft set.
- Runtime (avg TE/DI/NO/VE, minutes): OpenFE 3.5 vs SAFE 4.3, FCTree 24.4, AutoCross 141, AutoFeat 163.3, FETCH 533.3. Full range 0.1–92 min (IEEE fraud 92 min) vs AutoFeat 537–1,284 min on large sets.
- Key discovery anecdote: top DI feature was freq(patient_id) — a base feature useless alone (never splits in XGBoost), evidence against split-based candidate pre-filtering.
- Limitations noted: FeatureBoost scores candidates in-sample-ish (optimism; mitigated by held-out final eval); TIME SERIES EXPLICITLY UNSUPPORTED ("new features should be computed from the past data; OpenFE cannot handle such constraints"); Kaggle 1st-place comparison used a shared/reproduced model, not a true head-to-head; baselines are author reproductions.
- Code: https://github.com/IIIS-Li-Group/OpenFE (open source).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- FeatureBoost residual-scoring for cheap incremental evaluation of candidate features: OTHER (feature-engineering method directly portable to GSE tabular pipeline).
- Two-stage coarse-to-fine pruning (successive halving → MDI attribution): OTHER (compute-efficient discovery machinery).
- freq(patient_id)-style "useless-alone" transforms as evidence against split-based pre-filtering: OTHER (feature-search design lesson).
- Time-safe GroupBy adaptation (expanding-window semantics, pre-game-computable audit) as the GSE adaptation: OTHER (leakage-control requirement for sports time series).
- Proposed gate: ≥0.003 log-loss improvement on 2024 NFL held-out vs hand-built features, zero leakage violations: TRUST-SIGNAL (audit criterion).
## Engine-actionable? (yes/no + one-line what)
Yes — build "GSE-OpenFE": time-aware expand-and-reduce over GroupBy/binary operators on nflverse aggregates with expanding-window pre-game semantics and a ≥3-of-4-validation-seasons stability filter, promoting survivors to the feature store; ~2–3 days since OpenFE is open-source, the time-aware GroupBy rewrite is the real work.
