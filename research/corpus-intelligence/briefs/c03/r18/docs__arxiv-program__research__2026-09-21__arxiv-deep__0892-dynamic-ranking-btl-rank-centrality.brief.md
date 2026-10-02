# docs/arxiv-program/research/2026-09-21/arxiv-deep/0892-dynamic-ranking-btl-rank-centrality.md
## What it is (1-2 sentences)
Full-read ledger of Karlé & Tyagi (2023), arXiv:2109.13743v2: "Dynamic Ranking with the BTL Model: A Nearest Neighbor based Rank Centrality Method" — a spectral dynamic-ranking algorithm that recovers time-varying Bradley–Terry–Luce team strengths from sparse pairwise comparisons. Verdict in file: ADAPT — theoretically optimal forgetting window δ* ≃ T^{2/3}, 5–10× faster than the only competing method (kernel-MLE), and its NFL strengths correlate with Elo far better than MLE's.
## Key metrics/methods (formulas where given, else "not specified")
- Dynamic Rank Centrality (Algorithm 1): (1) time-neighborhood N_δ(t) = {t′ : |t−t′| ≤ δ/T}; (2) union graph G_δ(t) over neighborhood; (3) locally averaged win fractions ȳ_ij(t) = |N_ij,δ(t)|^{-1} Σ_{t′∈N_ij,δ(t)} y_ij(t′); (4) Rank Centrality transition matrix P̂(t) (eq. 2.5) with normalization d_δ(t) ≥ d_max; (5) output leading left eigenvector π̂(t) as strength estimate.
- BTL: P(j beats i at t′) = w*_{t′,j}/(w*_{t′,i}+w*_{t′,j}).
- Theorem 1 (ℓ_2): ‖π̂(t)−π*(t)‖_2/‖π*(t)‖_2 ≤ bias O(Mδ|E|/T·…) + variance O(√(N_max d_max/(L N²_min))), w.p. ≥ 1−O(n^{−10}).
- Theorem 2 (Erdős–Rényi): optimal window δ* ≃ T^{2/3} → ℓ_2 rate O(T^{−1/3}); static case recovers Negahban/Chen O(1/√(Lnp)) rate.
- ℓ_∞ bounds in §3.2/§5 (same T^{−1/3} pointwise rate).
- Assumption: Lipschitz smoothness |y*_ij(t) − y*_ij(t′)| ≤ M|t−t′|; union graph G_δ(t) connected; L fixed per edge.
## Data sources named
- Synthetic: GP-generated strengths (n=100/400, T=10–150 grid, Erdős–Rényi comparison graphs, L=5 comparisons per edge), 60 Monte Carlo runs.
- Real: NFL 2009–2015 from the nflWAR package (n=32 teams, T=16 rounds/season, binary outcomes y_ij(t)).
- Authors' code: github.com/karle-eglantine/Dynamic_Rank_Centrality.
## Findings (numbers and facts, not vibes)
- Speed (seconds): n=100, T=150 — DRC 13.2±0.19 vs MLE 65.99±5.97; n=400, T=100 — DRC 59.58±2.28 vs MLE 551.54±56.71 (roughly 5–10× faster).
- Numerically optimal δ coincides with theoretical δ* ≃ T^{2/3} (paper Fig. 4).
- NFL 2011–2015 strength–Elo correlations: DRC 0.425/0.518/0.284/0.478/0.414 vs MLE 0.092/−0.237/−0.337/−0.026/0.002.
- Kendall rank correlations with Elo ranks similar and low for all methods (−0.201 to 0.245).
- Synthetic: DRC ≈ MLE on ℓ_2, ranking error D_π*, ℓ_∞ across T=10–150; Borda-count baseline slightly worse.
- LOOCV δ tuning per season; evaluation correlation is post-selection (flagged leakage).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Spectral method gives principled forgetting window δ* ≃ T^{2/3} for in-season ratings instead of hand-tuned K-factor — OTHER.
- DRC strength–Elo correlation (0.284–0.518) vs MLE (−0.337–0.092) shows spectral ratings track established ratings better on real NFL data — TRUST-SIGNAL (method validation reference).
- Lipschitz smoothness assumption breaks at regime changes (QB injury, coaching changes mid-season) — QB-BEHAVIOR / COACHING (failure-mode note: INFERENCE — file names "injuries, coaching changes" as regime-change examples).
## Engine-actionable? (yes/no + one-line what)
yes — Port Dynamic Rank Centrality as the in-season rating engine: per-week trailing-window union graph + leading left eigenvector for team strengths, δ chosen by the T^{2/3} rule tuned by LOOCV, with the ℓ_∞ bound as a published uncertainty envelope; gate is week-ahead log-likelihood within 0.005/game of current GSE rating at ≥3× rebuild speed.
