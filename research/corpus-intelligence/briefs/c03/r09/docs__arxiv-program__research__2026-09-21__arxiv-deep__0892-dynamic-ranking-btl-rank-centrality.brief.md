# docs/arxiv-program/research/2026-09-21/arxiv-deep/0892-dynamic-ranking-btl-rank-centrality.md
## What it is (1-2 sentences)
Full-read deep ledger of Karl & Tyagi (arXiv:2109.13743v2, 2023): Dynamic Rank Centrality — a spectral method for recovering time-varying latent strengths in the Bradley–Terry–Luce model from sparse per-slice comparison graphs, with non-asymptotic theory. Verdict ADAPT: directly portable to GSE's in-season rating engine.
## Key metrics/methods (formulas where given, else "not specified")
- Algorithm 1: (1) time-neighborhood N_δ(t) = {t′ : |t−t′| ≤ δ/T}; (2) union graph G_δ(t); (3) locally averaged win fractions ȳ_ij(t) = |N_ij,δ(t)|^{−1} Σ y_ij(t′); (4) Rank Centrality transition matrix P̂(t) (eq. 2.5), normalization d_δ(t) ≥ d_max; (5) leading left eigenvector π̂(t) as strength estimate.
- BTL: P(j beats i at t′) = w*_{t′,j}/(w*_{t′,i}+w*_{t′,j}); true strengths π*(t) = w*_t/‖w*_t‖_1 are stationary distribution of population matrix P̄(t) (detailed balance).
- Theorem 1 (ℓ_2): ‖π̂(t)−π*(t)‖_2/‖π*(t)‖_2 ≤ bias O(Mδ|E|/T·…) + variance O(√(N_max d_max/(L N²_min))), w.p. ≥ 1−O(n^{−10}).
- Theorem 2 (Erdős–Rényi): theoretically optimal window δ* ≃ T^{2/3} → ℓ_2 rate O(T^{−1/3}); static case recovers Negahban/Chen O(1/√(Lnp)) rate. ℓ_∞ bounds in §3.2/§5 (same T^{−1/3} pointwise rate).
- Assumption 1 (Lipschitz smoothness): |y*_ij(t) − y*_ij(t′)| ≤ M|t−t′|; requires union graph G_δ(t) connected; L fixed per edge.
## Data sources named
- Synthetic: GP-generated strengths (n=100/400, T=10–150 grid, Erdős–Rényi comparison graphs, L=5 comparisons per edge), 60 Monte Carlo runs.
- Real: NFL 2009–2015 from the nflWAR R package — n=32 teams, T=16 rounds/season, binary outcomes y_ij(t).
- Code: https://github.com/karle-eglantine/Dynamic_Rank_Centrality.
## Findings (numbers and facts, not vibes)
- Synthetic: DRC ≈ Bong et al. kernel-MLE on ℓ_2, ranking error D_π*, ℓ_∞ across T=10–150; Borda-count baseline slightly worse. Numerically optimal δ coincides with theoretical δ* ≃ T^{2/3}.
- Speed: n=100, T=150: DRC 13.2±0.19s vs MLE 65.99±5.97s; n=400, T=100: DRC 59.58±2.28s vs MLE 551.54±56.71s — roughly 5–10× faster (eigenvector vs optimization).
- NFL 2009–2015: δ tuned per season by LOOCV on prediction error ‖y_ij(t) − π̃_j/(π̃_j+π̃_i)‖². DRC strength–Elo correlations (2011–2015): 0.425/0.518/0.284/0.478/0.414 vs MLE 0.092/−0.237/−0.337/−0.026/0.002. Kendall rank correlations with Elo ranks low for all methods (−0.201 to 0.245).
- Limitations per file: Lipschitz assumption breaks at regime changes (injuries, coaching changes); theory needs connected union graph; Elo used as "ground truth" biases the comparison toward Elo-like methods; proof appendices read at statement level only.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Dynamic spectral rating, 5–10× faster than MLE at equal accuracy, δ* ≃ T^{2/3} principled forgetting window (OTHER)
- DRC strengths track Elo far better than kernel-MLE on NFL 2009–2015 (TRUST-SIGNAL — independent-method corroboration of rating signal)
- Breaks at regime changes (injuries, coaching changes) — motivates adaptive δ (COACHING)
## Engine-actionable? (yes/no + one-line what)
yes — Port DRC as GSE's weekly dynamic rating: per-week union graph → Rank Centrality eigenvector, δ via T^{2/3} rule tuned by LOOCV; ADAPT confirmed if week-ahead log-likelihood on 2024 NFL within 0.005/game of current rating AND rebuild ≥3× faster.
