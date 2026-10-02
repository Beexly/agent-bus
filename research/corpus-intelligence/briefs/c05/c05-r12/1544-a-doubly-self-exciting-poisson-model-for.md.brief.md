# arxiv-program/research/2026-09-21/arxiv-deep/1544-a-doubly-self-exciting-poisson-model-for.md

## What it is (1-2 sentences)
Research ledger on "A doubly self-exciting Poisson model for describing scoring levels in NBA basketball" (Briz-Redón 2023, arXiv:2304.01538) — an INGARCH(1,1) Poisson model with a hierarchical game→minute structure testing whether scoring is "contagious" at game and minute scales, estimated Bayesianly with a Wasserstein-barycenter divide-and-conquer scheme. The ledger's verdict is ADAPT: portable template for NFL weekly fantasy volume feeding drive-level scoring rates, with self-excitation parameters quantifying within-game "hot" volume dynamics.

## Key metrics/methods (formulas where given, else "not specified")
- INGARCH(1,1): Y_t ~ Po(λ_t), λ_t = d + κ λ_{t−1} + η Y_{t−1}; stationary if κ+η < 1; unconditional mean μ = d/(1−(κ+η)); Var(Y_t) = μ(1−(κ+η)²+η²)/(1−(κ+η)²) ≥ μ.
- Game: λ_g = exp(α_S + α_Home I_{Home}) + κ_S λ_{g−1} I_{g>1} + η_S Y_{g−1} I_{g>1}; Minute: λ_{gm} = exp(α_G + Σ quarter-half effects α_{QH} + λ̂_g/48) + κ_G λ_{gm−1} I_{m>1} + η_G Y_{gm−1} I_{m>1} (game-level posterior mean as offset).
- Bayesian estimation: N(0,1000) priors on intercepts, U(0,1) on (η, κ); NIMBLE MCMC; Wasserstein barycenter p̄(θ|data) = WB(p(θ|G_1),…,p(θ|G_K)) across 4 season periods (games 1–21, 22–42, 43–62, 63–82); WAIC comparison vs non-self-exciting baseline; hierarchical clustering on Wasserstein distances of η_S, κ_S posteriors.

## Data sources named
All made/missed FGs, 2018–19 NBA regular season (datavizardry.com compilation; constructible from NBA API); 8 teams (BOS, DEN, GSW, HOU, MIL, PHI, POR, TOR; N_g=82 each, 3,936 minutes) and 8 top scorers (Beal, Lillard, Mitchell, Harden, KAT, Kemba Walker, Durant, Paul George); overtime discarded. Code/dataset promised at https://github.com/albrizre/NBA_DSE.

## Findings (numbers and facts, not vibes)
- Game level: DSE improves WAIC only for 3 players — Harden 391.25→388.63, KAT 394.67→382.11, Paul George 377.04→376.63; no team improves (Celtics 499.56→504.30).
- Minute level: DSE improves WAIC for many units/periods (e.g., KAT: 893.64→885.82, 1019.17→1018.14, 1031.85→1031.55 first three periods), though absolute gains are small (<3 points on ~1000-scale WAIC).
- Clustering: KAT's κ_S posterior far from all others; Harden and Paul George most similar on η_S (the two highest η_S values).
- Takeaway stated in file: self-excitation in scoring volume is a within-game phenomenon for most units, not a game-to-game one — except for a few high-usage players. Explanatory only — no out-of-sample forecast evaluation (author's own admission). Poisson ignores zero-inflation; only makes modeled (efficiency vs volume confounded).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR — self-excitation parameters (η, κ) per player quantify "hot" within-game volume dynamics; portable to QB/skill-player hot-streak typing.
- SCHEME — the game→minute (weekly→drive) hierarchy is a template for in-game and weekly projection structure.
- OTHER — live betting / DFS: ledger suggests clustering players by (η, κ) posteriors for matchup typing and late-swap decisions.
- TRUST-SIGNAL — honest prior: expect within-game self-excitation, don't expect week-to-week carryover beyond existing AR structure (paper's own empirical asymmetry).

## Engine-actionable? (yes/no + one-line what)
Yes — ~2 weeks on nflverse 2019–2025: weekly fantasy points (game level, INGARCH(1,1) + spread/total/home covariates) feeding drive-level points with weekly posterior mean as offset; gate on 2025 held-out log-likelihood beating baseline, requiring the same within-game-not-across-game asymmetry the paper found.
