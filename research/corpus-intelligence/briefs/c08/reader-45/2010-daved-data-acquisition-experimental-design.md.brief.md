# docs/arxiv-program/research/2026-09-21/arxiv-deep/2010-daved-data-acquisition-experimental-design.md
## What it is (1-2 sentences)
Ledger note on arXiv:2403.13893 (MIT/Berkeley/USC/MBZUAI, 2024): DAVED reframes data acquisition as V-optimal experimental design aimed at the buyer's unlabeled test queries — no validation labels needed, budget- and cost-aware, federated-friendly — and beats Data Shapley head-to-head.
## Key metrics/methods (formulas where given, else "not specified")
- True objective: min_{w∈{0,1}ⁿ} (1/m)Σ_i E[l(f_θ̂(w)(x_i^test), y_i^test)] s.t. Σ_j w_j c_j ≤ B (Eq. 1).
- V-optimal proxy: L̂^ED(w) = (1/m)Σ_i (x_i^test)ᵀ I(w)† (x_i^test), where I(w) = Σ_j w_j x_j x_jᵀ is the Fisher information matrix (Eq. 4) — computable from X_train and X_test alone, no labels.
- Selection: Frank-Wolfe herding on convex relaxation, w̃_{t+1} = (1−α_t)w̃_t + α_t e_{j_t}, j_t = argmax_j(−∇_{w_j}L̂/c_j) (Eq. 5–6); g_j = (1/m)Σ_i((x_i^test)ᵀP_t x_j^train)² (Eq. 7); Sherman–Morrison rank-one updates for P_t (Eq. 8); O(log t₀/t₀) approximation of NP-hard integer optimum.
- Single-step variant: top-k of Σ_i[(x_i^test)ᵀ P_0 x_j]² — fastest, still strong.
- Informal Theorem A.1: validation-based selection gap ≳ σ²d/n_val worst case — as bad as training on the n_val validation points alone.
- Assumptions: shared conditional D_{y|x} between train/test; linear/eNTK feature approximation adequate; costs known; test covariates available.
## Data sources named
Synthetic Gaussian seller data (1K/5K/100K points) + MIMIC-III (48 attributes, hospital stay length), RSNA Pediatric Bone Age (hand X-rays, CLIP ViT-B/32 embeddings), Fitzpatrick17K (dermatology images, CLIP embeddings), DrugLib (drug reviews, GPT-2 embeddings, 1–10 ratings). 100 buyers per experiment; baselines get 100 labeled validation points.
## Findings (numbers and facts, not vibes)
- DAVED (multi-step) best on every dataset: Gaussian 100K sellers 0.16 vs random 1.01 (Shapley/LOO exceeded runtime, N/A); MIMIC 0.37 vs random 1.38 vs Data Shapley 0.87; RSNA 171.4 vs random 283.7; Fitzpatrick 785.2 vs random 1309.1; DrugLib 9.2 vs random 21.4. Single-step DAVED second-best in most settings, fastest overall.
- Heterogeneous costs: multi-step DAVED wins under both √c and c² (Gaussian: 0.04/0.2 vs random 2.26/77.7/288.3).
- Validation-based methods sometimes underperform random — the theorem's overfitting phenomenon; second-best overall is Data-OOB, the only other validation-free baseline.
- Runtime: orders of magnitude faster than Data Shapley; scales to 100K sellers.
- Guidance: 1–8 test points per query, 2–5× budget optimization steps, moderate regularization λ∈[0.2,0.6].
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: weekly training-data acquisition — replace "train on last N weeks" with test-targeted selection: buyer queries = this week's slate (unlabeled by definition), seller pool = historical games with charting costs, budget B = weekly compute/charting dollars. Direct upgrade of ledger 2005's Data Shapley for batch AL.
- TRUST-SIGNAL: theorem-backed warning that validation-based selection can be worse than random in GSE's regime (small recent-game validation sets, high-dim features) — a principled calibration for trusting training-data choices.
## Engine-actionable? (yes/no + one-line what)
Yes — spec: run FW herding (or single-step variant) on model embeddings over historical games each week to select the training subset minimizing V-optimal proxy error on that week's slate; adopt iff it beats recency-window baseline by ≥0.003 weekly ATS log-loss over 2024 season AND wins ≥10 of 18 weeks. INFERENCE: single-step variant is ~1 day of work; upgrades weekly retraining economics immediately.
