# arxiv-program/research/2026-09-21/arxiv-deep/1847-llm-fe-evolutionary-optimizer-tabular-features.md
## What it is (1-2 sentences)
LLM-FE (Abhyankar et al., arXiv:2503.14434, published in Transactions on Machine Learning Research 05/2026): casts feature engineering as evolutionary program search — an LLM proposes feature-transformation programs, validation fitness scores them, and a FunSearch-style island model with Boltzmann cluster sampling refines them; open code at github.com/nikhilsab/LLMFE.
## Key metrics/methods (formulas where given, else "not specified")
- Bilevel objective: max_T E(f*(T(X_val)), Y_val) s.t. f* ∈ argmin_f L_f(f(T(X_tr)), Y_tr); programs T ∼ π_θ(p) sampled from the LLM.
- Sampling: b = 3 programs/iteration, temperature 0.8; executed before evaluation, error-prone/timeout discarded.
- Island model: m = 3 islands, programs clustered by identical validation-score signature; Boltzmann cluster sampling P_i = exp(s_i/τ_c)/Σ_j exp(s_j/τ_c); top-k programs become next prompt's in-context examples (implicit mutation/crossover); global budget 20 LLM samples.
- Prompt recipe: role+instruction (explicitly "use domain knowledge", "generate complex features"), task description, feature names+descriptions, serialized samples ("If c_1 is x_i …, then Result is y_i"), the evaluation function itself, one in-context demo, function stub.
- Boltzmann temperature schedule τ_c = T_0(1 − u mod N / N), T_0 = 0.1, N = 10,000; eval caps T = 30 s, M = 2 GB per program.
## Data sources named
37 datasets: 19 classification + 10 regression (OpenML, UCI, Kaggle; 315–581k rows, 4–279 features) + 8 large-scale high-dimensional classification; 5 post-Sept-2021 sets for the memorization control (Hollmann et al. 2024; Bordt et al. 2024); 80/20 splits × 5 seeds. Backbones GPT-3.5-Turbo, Llama-3.1-8B-Instruct; predictors XGBoost, MLP, TabPFN.
## Findings (numbers and facts, not vibes)
- Classification mean rank over 19 datasets (XGBoost): LLM-FE 1.42 vs CAAFE 3.47, OpenFE 3.63, OCTree 4.05, Base 3.95, AutoFeat 5.11, FeatLLM 5.11. Standouts: balance-scale 0.856→0.990, jungle_chess 0.869→0.969, covtype 0.870→0.882.
- Regression mean rank over 10 datasets: LLM-FE 1.10 (best on all 10; e.g. housing RMSE 4.845→4.525, wine 0.639→0.612) vs OpenFE 2.80, Base 4.55.
- Ablation (normalized accuracy): full 0.70 → w/o domain knowledge 0.626, w/o data examples ~0.66, w/o evolutionary refinement 0.587 — refinement is load-bearing; no-refinement plateaus by iteration ~5 while full keeps climbing through 20.
- Wilcoxon significance (95% CI) over base XGBoost: 10/10 regression (p < 0.001), 8/15 classification (p < 0.05).
- Memorization control: modest but consistent gains on post-cutoff sets (fico 0.715→0.719, healthinsurance 0.756→0.759, pharyngitis 0.655→0.660, acsincome 0.807→0.809); HPO control: gains persist on 3/5 datasets after Optuna 100-trial tuning.
- 16.67% of generated features land in top-10 by SHAP, 62.96% in top-50 (features are used, not spurious); features transfer across predictors (MLP 0.745→0.791, TabPFN 0.852→0.863); noise-robust at σ ∈ {0, 0.01, 0.05, 0.1}.
- ~45% of LLM-FE's discovered features qualify as "complex" per Küken et al. (2024) vs negligible for CAAFE/OCTree (fixes LLM simplicity bias); discovered operators skew toward groupby-then-mean/min/max, residual, sigmoid vs CAAFE's 75% multiply/divide.
- File's ledger verdict: ADOPT — adopt the harness wholesale; only the prompt layer is GSE-specific; add cutoff annotations (pre-kickoff only) and paired-permutation-test keep criterion with Holm correction to fix best-of-20 selection bias.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: automated feature engineering for the engine — GSE-ified prompt layer: nflverse schema with cutoff annotations, m = 4 islands seeded with four hypothesis families (passing efficiency, rushing/matchup, market/odds movement, situational/weather), LightGBM as f*, fitness = validation log-loss on 2023; weekly 20-program runs.
- SCHEME: operator-bias finding is directly actionable — GSE's hand-built features skew toward simple arithmetic; evolution toward groupby/residual/sigmoid transforms is the concrete upgrade path.
- TRUST-SIGNAL: SHAP-usage evidence and noise robustness support feature-audit honesty.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the LLM-FE harness with GSE prompt layer + leakage cutoff discipline + two-stage fitness (sequestered second validation season); ADOPT iff 2024 held-out log-loss improves ≥ 0.003 with both ablations (full > no-refinement, full > anonymized) replicating and weekly runtime ≤ 6 hours.
