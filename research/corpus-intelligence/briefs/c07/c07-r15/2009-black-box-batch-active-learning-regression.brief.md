# arxiv-program/research/2026-09-21/arxiv-deep/2009-black-box-batch-active-learning-regression.md
## What it is (1-2 sentences)
Black-Box Batch Active Learning for Regression (arXiv:2302.08981, OATML Oxford): replaces the white-box gradient kernel in batch AL methods (BADGE, BAIT, BatchBALD, Core-Set, LCMD) with an empirical predictive covariance kernel computed from K sampled predictions — making them prediction-only methods that work with non-differentiable models (random forests, GBDTs) and, on average across 15 regression datasets, beat their white-box counterparts. Regression-native; classification needs Laplace/MC/EP extensions.

## Key metrics/methods (formulas where given, else "not specified")
- Regression model: Y|x,ω ~ N(μ(x;ω), σ_N²), homoscedastic
- Empirical predictive covariance kernel (Eq. 12–13): k_pred^(x_i,x_j) = (1/K)Σ_k (μ(x_i;ω_k) − μ̄(x_i))(μ(x_j;ω_k) − μ̄(x_j)) — inner product of centered K-vectors (valid PSD kernel); plugged into Holzmüller et al. 2022 kernel formulations → black-box BADGE, BAIT, BALD, BatchBALD, LCMD, ACS-FW, Core-Set
- Prop 3.1: posterior gradient kernel k_grad→post (first-order Taylor around BMA + GGN approximation) ≈ predictive covariance kernel k_pred — white-box gradient kernels are just an approximation of the prediction-covariance kernel
- Prop 3.2: for non-differentiable models, Bayesian hypothesis-space view with latent hypothesis index Ψ ~ Multinomial(q,1) over fixed ensemble gives predictive covariance kernel = "posterior" gradient kernel w.r.t. Ψ EXACTLY; Dirichlet/BMC mixture variant gives same up to constant factor 2
- Entropy bound (Eq. 9): H[Y₁:ₙ|x₁:ₙ] = ½log det(Cov[μ(x₁)…μ(xₙ)] + σ²I) + C_n — acquisition-score log-determinants upper-bound expected information gain (multivariate normal = max-entropy for given covariance)
- Assumptions: homoscedastic Gaussian noise; K diverse enough to estimate predictive covariance; prediction queries cheap relative to labels
- Models tested: DNN ensembles (10 members), random forests (100 trees as virtual ensemble / 10 bagged forests), CatBoost virtual ensembles (up to 20 members); scales in #drawn predictions K, not #parameters
- Validation: Holzmüller et al. 2022 protocol — log-RMSE averaged over ≥5 trials per dataset/method; per-member evaluation for ensembles; uniform baseline; ablations on K and batch size B; A100 40GB GPUs

## Data sources named
15 large tabular regression datasets from UCI ML Repository + OpenML: sgemm, wec_sydney, ct_slices, kegg_undir, online_video, query, poker, road, mlr_knn_rng, fried, diamonds, methane, stock, protein, sarcos. Code: https://github.com/BlackHC/2302.08981.

## Findings (numbers and facts, not vibes)
- DNNs (10-member ensembles): black-box competitive with white-box for BALD, BatchBALD, BAIT, BADGE, Core-Set; on average black-box beats white-box for all but ACS-FW and BAIT (Fig. 3; hypothesis: white-box implicit Fisher-information approximation is poor in the low-data regime where ensembles capture multimodality)
- Random forests (per-tree virtual ensemble): all black-box methods except BALD (top-k) beat uniform
- Bagged RFs and CatBoost virtual ensembles: only LCMD, BADGE, CoreSet beat uniform — attributed to low disagreement among virtual/bagged members (single RF's trees disagree more than bagged forests do)
- Ensemble-size ablation: increasing K improves acquisition for NNs and RFs (except LCMD, which first improves then degrades); for CatBoost virtual ensembles, K ∈ [5,160] gives no boost
- Batch-size ablation: performance degrades with larger acquisition batches for all methods; at the largest batch (4096) white-box catches up to black-box
- Black-box also matches/beats the best-performing white-box kernel variants from Holzmüller et al. (App. B.1)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: regression-native batch active learning running on GSE's actual model class — gradient-boosted tree stacks powering spread-margin/total/team-yardage heads — needs only predictions, so one acquisition pipeline works across the heterogeneous stack (GBMs, linear baselines, any API model); generalize ledgers 2002/2003/2006 (classification-built) to the real models. Compose with ledger 2008: divide black-box acquisition score by charting cost c(game) for the knapsack rule.
- TRUST-SIGNAL (INFERENCE): monitor the paper's failure signal — inter-member disagreement (mean pairwise |μ_k − μ̄|) on the pool; if it collapses (e.g., late season when models agree), fall back to uniform/geometric sampling, since their CatBoost result says AL adds nothing there.

## Engine-actionable? (yes/no + one-line what)
yes — weekly charting queues via black-box BADGE/Core-Set on a K=10 GBM bagged ensemble per regression head (Gram matrix + k-means++ selection, ~2 days, no autograd/last-layer plumbing); ADOPT black-box BADGE iff it matches/beats white-box BADGE on 2024 held-out margin RMSE at equal batch size AND runs ≥3× faster per acquisition round, replicated on a second head (totals).
