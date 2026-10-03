# docs/arxiv-program/research/2026-09-21/arxiv-deep/2065-findiff-financial-tabular-data-generation.md
## What it is (1-2 sentences)
FinDiff (arXiv:2309.01472, Sattarov, Schreyer, Borth 2023) is a diffusion model for synthetic financial tabular data that encodes categoricals through learned embeddings (E ∈ ℝ^{D×C}, D=2) inside a single Gaussian diffusion process, avoiding the one-hot dimensionality explosion that breaks baselines. File verdict: ADAPT — the most NFL-scalable tabular-diffusion design in the ledger lane (vs. TabDDPM 2062, CoDi 2064).

## Key metrics/methods (formulas where given, else "not specified")
- Gaussian diffusion (eqs. 1–4): q(x_t|x_{t−1}) = N(x_t; √(1−β_t)x_{t−1}, β_t I); closed form q(x_t|x_0) = N(x_t; √(1−β̂_t)x_0, β̂_t I), β̂_t = 1−Π(1−β_i); reverse p_θ(x_{t−1}|x_t) = N(x_{t−1}; μ_θ(x_t,t), Σ_θ(x_t,t)); μ_θ(x_t,t) = (1/√α_t)(x_t − (β_t/√(1−α̂_t))ε_θ(x_t,t)); L_t = E‖ε − ε_θ(x_t,t)‖²_2.
- Pipeline: numerics normalized, categoricals mapped through learned E ∈ ℝ^{D×C} (D=2 per attribute); x_0 = embeddings ⊕ numerics + sinusoidal time embedding + label embedding, linear-projected; 500 diffusion steps, linear scheduler, feed-forward noise-prediction network; decoding = nearest neighbor in E (argmin over categories), numerics denormalized. Training: up to 3000 epochs, batch 512, Adam (β1=0.9, β2=0.999), cosine LR scheduler, Glorot init; neurons ∈ {256,…,8192}, hidden layers ∈ {4,6,8,10,12}. Conditional sampling via label embeddings.
- Column fidelity (eq. 5): ω_col = 1−KS(x^d,s^d) numeric; 1−½TVD categorical; Ω_col = mean over attributes.
- Row fidelity (eq. 6): ω_row = 1−½|ρ(x^a,x^b)−ρ(s^a,s^b)| numeric pairs; 1−½TVD categorical pairs; Ω_row = mean over pairs.
- Privacy (eq. 7): DCR(s_n) = min_{x∈X} d(s_n, x), Euclidean; final = median over synthetic points (lower better).
- Utility: Φ = (1/5)Σ Θ_i(S_train, X_test) over 5 classifiers (Random Forest, Decision Trees, Logistic Regression, AdaBoost, Naive Bayes) — train on synthetic, test on real; mean accuracy.
- Synthesis: fraction of synthetic records exactly matching a real record (numeric match = within 1%); higher = more novel.

## Data sources named
Three financial datasets, 70/30 train/test: Credit Default (public, UCI: 30,000 rows; 10 categorical / 13 numeric; 2 classes; Taiwan credit-card clients Apr 2005–Sep 2005); Philadelphia Payments (public, data.phila.gov: 100,000 sampled of 238,894 — one-hot baselines couldn't train on full; 7 categorical / 1 numeric; 11 classes; city payments FY2017); Fund Holdings (proprietary, Bundesbank: 88,893 rows; 6 categorical / 78 numeric; 18 classes; mostly extremely skewed numerics). Baselines via SDV v1.0.1: TVAE, CTGAN, TabDDPM.

## Findings (numbers and facts, not vibes)
- Credit Default (mean ± std, 5 seeds; bold = best): column fidelity FinDiff 0.931±0.01 vs TVAE 0.920±0.01, CTGAN 0.872±0.01, TabDDPM 0.401±0.05; row fidelity FinDiff 0.939±0.01 (best); utility FinDiff 0.794±0.01 vs CTGAN 0.703 and TabDDPM 0.709 (+12.95% / +11.98% per paper); privacy FinDiff 1.474±0.01 (best, lower better); synthesis all 1.000. Paper's claim: utility trained on FinDiff synthetic (0.794) beats training on REAL data (0.706) by 8.4%. [TRUST-SIGNAL, OTHER]
- Philadelphia Payments: column FinDiff 0.901±0.01, TabDDPM 0.900±0.01, TVAE 0.791±0.01, CTGAN 0.782±0.01; row FinDiff 0.838±0.00 (best) vs TabDDPM 0.535±0.01; utility FinDiff 0.874±0.00 (best); privacy FinDiff 1.414±0.00 (best). One-hot baselines expanded to 6,124–7,830 dimensions and broke baseline training on the full 238,894 rows. [OTHER, TRUST-SIGNAL]
- Fund Holdings: column FinDiff 0.764±0.01 (best); row TVAE 0.952±0.01 vs FinDiff 0.949±0.01 (second by a hair); utility FinDiff 0.544±0.02 (best); privacy TVAE 0.171±0.01 (best) vs FinDiff 3.667±0.40 vs TabDDPM 9.816±8.00 (the embedding model memorizes more on skewed numeric data); synthesis all 1.000. TabDDPM column fidelity collapsed to 0.119±0.01. [TRUST-SIGNAL, OTHER]
- Ablation Table 3 (Fund Holdings fidelity col/row): Standard scaler 0.534/0.824; Power (yeo-johnson) 0.552/0.889; Quantile Transformer 0.764/0.949 — quantile transform wins decisively on skewed numerics. [OTHER]
- File's adversarial caveat (INFERENCE by the ledger author, recorded in file): asymmetric tuning — FinDiff got exhaustive architecture search, baselines got SDV v1.0.1 defaults; TabDDPM collapses look like config failure, so treat the margin as optimistic. [TRUST-SIGNAL]
- "Increasing embedding dimensionality did not result in performance enhancement" (D=2 chosen); 3000 epochs × up-to-8192-wide nets is heavy compute for the reported gains. [OTHER]
- No code link stated in the paper; Fund Holdings is proprietary (most NFL-relevant skewed-numerics result is unreplicable). [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Synthetic-on-synthetic utility beat (0.794 vs 0.706 real) and fidelity/utility tables → TRUST-SIGNAL (synthetic data as a training-data multiplier for the engine's backfill lanes), OTHER
- Privacy weakness on skewed numerics (3.667 vs TVAE 0.171) → TRUST-SIGNAL (memorization risk in synthetic data)
- Embedding-categorical trick solving the 32-team one-hot blowup; quantile-transform ablation → OTHER
- Asymmetric-tuning caveat and unreplicable proprietary dataset → TRUST-SIGNAL
- No QB-BEHAVIOR, COACHING, OL, or SCHEME content: pure tabular-generation infrastructure.

## Engine-actionable? (yes/no + one-line what)
Yes — build a FinDiff-style embedding diffusion (D ∈ {8,16}, quantile-transformed skewed numerics, conditional on outcome regime) as the candidate production backbone for synthetic NFL game-level tables, head-to-head vs TabDDPM on Ω_col ≥ 0.90 / Ω_row ≥ 0.80 fidelity and real+synthetic log-loss ≥ 0.003 better than real-only on held-out 2024, with ≤50% of TabDDPM's peak training memory.
