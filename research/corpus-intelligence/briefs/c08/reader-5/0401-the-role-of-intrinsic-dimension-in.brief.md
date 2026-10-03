# docs/arxiv-program/research/2026-09-21/arxiv-deep/0401-the-role-of-intrinsic-dimension-in.md
## What it is (1-2 sentences)
Deep read (arXiv:2002.04148v1) applying the Hidalgo Bayesian-mixture intrinsic-dimension (ID) framework to NBA SportVU tracking data: ID as a quantitative indicator of play complexity/unpredictability, with play-phase segmentation, shot-chart clustering, and winner-vs-loser / score-margin tests. Authors explicitly flag football as the next sport.

## Key metrics/methods (formulas where given, else "not specified")
- Two-NN estimator: μ_i = r_i2/r_i1 ~ Pareto(1, d) (Eq. 1).
- Mixture likelihood (Eq. 2): P(μ_i|d,p) = Σ_k p_k d_k μ_i^{−(d_k+1)}, p ~ Dirichlet; neighborhood likelihood (Eq. 4): f(N^(q)|z,ζ) = Π_i [ ζ^{n_i^in(z)} (1−ζ)^{q−n_i^in(z)} / Z ], ζ ∈ (0.5, 1); full likelihood (Eq. 5).
- Enhancements: truncated Gamma prior on d_k over (0, D); repulsive prior h(d) = min g(Δ) with sigmoidal g(Δ) = 1/(1+exp[−(Δ−τ)/ν]) (Eqs. 6–7); per-observation d̂_i = mean/median over MCMC sweeps (Eq. 8).
- MCMC posterior inference; K=3 with repulsive prior; per-game Mann-Whitney (winner vs loser ID); Wilcoxon rank-sum for score-margin categories.

## Data sources named
STATS SportVU 2015–16 NBA season, 25 fps downsampled to 2.5 fps, 15 randomly selected games (worked example: CLE@GSW 12.25.2015); play-by-play manually matched via YouTube. Code + curated data: github.com/EdgarSantos-Fernandez/id_basketball.

## Findings (numbers and facts, not vibes)
- Within-play ID spikes, peaking 4–8 s after the ball reaches the offensive court; short possessions (≤12.5 s) peak ≈4–6 s; long possessions ≈6–8 s.
- Shot-chart clusters (worked game): GSW attack success 0.400 / 0.550 / 0.481; GSW defense 0.360 / 0.333 / 0.407; CLE attack 0.333 / 0.407 / 0.429; CLE defense 0.500 / 0.429 / 0.600; 56% of GSW shots in cluster 1(a) successful vs 16.7% in cluster 2.
- Shot-type table: GSW 3pt n=15, success 0.333, ID̄ 11.049 vs CLE 3pt n=20, 0.250, 10.052 — the better team shows higher ID across all shot types.
- Winners vs losers (15 games): 6 games winner had significantly greater ID, 6 no difference, 3 loser higher.
- Score margins: small vs huge p<0.0001; small vs large p=0.010; medium vs huge p<0.0001 — smaller margin → greater ID.
- Limitations: only 15 games; Hidalgo assumes temporal independence (violated by tracking frames — authors propose HMM extension); K chosen ex-post; cluster success cells rest on 15–40 shots (noise-risk); causal direction unclear (good teams may just play more complexly).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — NFL play-complexity ID feature: pre-snap motion ID (5 s pre-snap) as EPA/play-action predictor; post-snap route-combination ID as defense-confusion feature; both precomputed offline from public Big Data Bowl tracking (10 Hz → 2 Hz thinning per the paper's precedent).
- SCHEME — team-level ID as a weekly-updated "scheme unpredictability" rating.

## Engine-actionable? (yes/no + one-line what)
Yes — port the Hidalgo R code to Python, compute per-play peak ID on 2023 tracking (train weeks 1–12, test 13–18); adopt if pre-snap motion ID adds ≥0.005 out-of-sample R² to EPA/play or beats a motion-flag dummy by ≥0.01 AUC on play-action success.
