# arxiv-program/research/2026-09-21/arxiv-deep/0500-what-influences-the-field-goal-attempts.md
## What it is (1-2 sentences)
Made and missed field-goal locations for three NBA players are jointly modeled as two correlated log-Gaussian Cox processes sharing a spatial baseline, with spatially varying covariate effects (home/away, opponent strength) on a Karhunen–Loève-truncated GP prior, fit via MALA+Gibbs; verdict ADAPT — the JSVLGCP recipe ports to a 1D NFL target-depth/intensity model.
## Key metrics/methods (formulas where given, else "not specified")
- Intensity: log λ_j(s; z_i) = α_0(s) + z_i^T β_j(s), j=1 (made), 2 (missed); α_0 shared spatial baseline; β_j spatially varying coefficient surfaces.
- GP priors with KL truncation at L=15 components (retained variance >0.8); kernel hyperparams a=0.25, b=1.5; inverse-Gamma(5,5) variance priors; 15,000 MCMC iterations, 10,000 burn-in; posterior via MALA + Gibbs.
- Simulation: m=200, 50 games × (home/away × strong/weak), 20 replicates; competitors LGCP, IPP, KDE, BART.
- Real-data validation: thinning — shots split into 400 spatial cells, retain p=0.8, repeated 10×; negative posterior log-likelihood (NPLL) compared across methods.
## Data sources named
stats.nba.com shot data (Curry, LeBron, 2014–15); Jordan data in the paper's online supplement. Post-exclusion counts: Curry 1,066 shots/80 games; LeBron 856/69; Jordan 908/54 (after removing 2 beyond 28 ft and 285 below 1 ft). No code released.
## Findings (numbers and facts, not vibes)
- Simulation: JSVLGCP recovers the true coefficient surfaces better than LGCP/IPP/KDE/BART (graphical; exact numeric gaps not printed).
- Real data: JSVLGCP attains lowest NPLL for LeBron and Jordan; comparable to best for Curry (exact NPLL values not printed — headline claim rests on figures).
- Game-context effects are interpretable spatial shifts (e.g., more perimeter attempts vs weak opponents at home), visible in the relative-risk maps.
- Limitations: only 2 binary covariates (no fatigue/score-diff/defender); conditional independence of shots given the field ignores hot-hand structure; NFL analog sparser (~100–150 targets/player/season) and public nflverse lacks full 2D receiver coordinates.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: spatial target-depth/tendency surfaces vs opponent tiers (receiver matchup profiles, team pass-location tendencies).
## Engine-actionable? (yes/no + one-line what)
yes — Port to 1D NFL JSVLGCP on target yardline (complete/incomplete point processes) from nflverse 2020–2025 with home/away + opponent defensive-tier covariates; gate: held-out NLL beats KDE by ≥0.02 nats/attempt across 10 seeds.
