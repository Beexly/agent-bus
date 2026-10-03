# arxiv-program/research/2026-09-21/arxiv-deep/0611-hierarchical-bayesian-bradleyterry-for-applications-in.md
## What it is (1-2 sentences)
Phelan & Whelan (2017) fit a hierarchical Bayesian Bradley-Terry model to MLB team strength, using a data-driven Gamma hyperprior on league parity (σ) derived from the previous season's MLE, fit with HMC in Stan, and show it predicts rest-of-season records far better than plain MLE early in the season.
## Key metrics/methods (formulas where given, else "not specified")
- Model (Eq. 22): σ ~ Γ(2N, 2N/σ̂²); λ|σ ~ N(0,σ²I); V|λ ~ Bradley-Terry(exp{λ}), where σ̂² is the previous season's estimated log-strength variance.
- BT likelihood: P(i beats j) = π_i/(π_i+π_j); λ_i = log π_i.
- Hyperprior construction via MAP approximation: σ̂ = √(Σλ̂_i²/N) (Eq. 18), ς̂ = σ̂²/(2N) (Eq. 21).
- Prediction via posterior predictive: p(Ṽ|V) = ∫ p(Ṽ|λ)p(λ|V)dλ (Eq. 23).
- Error metric: per-team absolute rest-of-season win error, mean and sd over teams (Eq. 24–26).
## Data sources named
baseball-reference.com; retrosheet.org (2017 event files). MLB seasons 2010–2017 (30 teams, 162 games/season).
## Findings (numbers and facts, not vibes)
- Prior-season σ̂ ranged 0.235 (2014) to 0.316 (2012); √ς̂ ≈ 0.030–0.041.
- 2017 mean absolute win error, Bayes vs MLE: Apr 15 — 8.82 (6.58) vs 24.65 (17.34); May 1 — 7.31 (6.17) vs 12.49 (10.39); May 15 — 6.20 (5.68) vs 9.84 (5.84); Jun 1 — 4.72 (4.87) vs 6.90 (4.27); tied thereafter (Sep 15: 1.75 vs 1.83).
- Averaged 2011–2017 (Fig. 4), Bayes matches or beats MLE for the entire season in both error and variability.
- Bayesian ranking shrinks toward actual records (e.g., LAN 0.38 vs MLE 0.52 top rating); avoids MLE's 0/1/undetermined probability pathologies.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: regularized team-rating backbone — early-season shrinkage recipe directly relevant to Weeks 1–6 NFL forecasts; posterior sd of ratings as rating-uncertainty feed for staking.
## Engine-actionable? (yes/no + one-line what)
yes — Port the previous-season Γ(2N, 2N/σ̂²) parity hyperprior into GSE's ratings layer (with an NFL home-field offset added), using posterior-predictive win probabilities and posterior sd for calibration/kelly sizing, gated on beating dynamic Elo in a 2015–2025 walk-forward test.
