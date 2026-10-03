# arxiv-program/research/2026-09-21/arxiv-deep/1350-bayesian-bivariate-conway-maxwell-poisson-regression.md
## What it is (1-2 sentences)
Deep read of Florez, Guindani & Vannucci (2024, arXiv:2409.17129v1): a Bayesian bivariate Conway-Maxwell-Poisson (CMP) regression for correlated sports count data, with team-specific dispersion parameters and game-level correlated random effects fit by Exchange-algorithm MCMC, tested on EPL goals and MLB runs. Verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- CMP pmf (Guikema & Goffelt 2008 mean-parametrization): P(Y=y|μ,ν) = (μ^y/y!)^ν / Z(μ,ν); ν<1 over-dispersed, ν>1 under-dispersed, ν=1 Poisson; E(Y) ≈ μ + 1/(2ν) − 1/2; Var(Y) ≈ μ/ν; mode = ⌊μ⌋.
- Bivariate: log(μ_i1), log(μ_i2), log(ν_i1), log(ν_i2) on team offensive/defensive random effects + COVID-era terms; b_i ~ N_2(0,D), D^−1 ~ Wishart; cov(y_i1,y_i2) ≈ λ̃_i1(e^{d_12}−1)λ̃_i2.
- Inference: Exchange algorithm (Murray et al. 2012) with Benson & Friel (2021) rejection sampler; block robust-adaptive Metropolis updates (~40% acceptance target); β,γ ~ N(0, 10I) priors. DIC comparison via Benson & Friel's unbiased likelihood estimator (r = 1000).
## Data sources named
- EPL 2019/20–2021/22, 1,237 games (football-data.co.uk): home goals mean 1.49/var 1.79; away 1.27/1.49; Spearman home–away corr −0.143.
- MLB 2019–2021 regular seasons, 5,756 games (retrosheet.org): home runs mean 4.72/var 10.24; away 4.63/11.01; Spearman corr 0.004.
- Simulations: 20 teams, 380 games/season, 40 replicates × 3 dispersion scenarios × 1/3/5 seasons.
## Findings (numbers and facts, not vibes)
- Simulations at n=1900: CMP lowest DIC in every dispersion regime (e.g., over-dispersed y_1: CMP 7269.45 vs NB 7314.27 vs Poisson 7470.95); true HA = 0.5 recovered by CMP while Poisson/NB miss under over-/under-dispersion.
- EPL DIC: CMP 3635.61/3475.99 vs NB 3759.98/3562.15 vs Poisson 3738.67/3543.99 (home/away).
- MLB DIC: CMP 27943.03/28135.32 vs NB 28516.47/28564.52 vs Poisson 65994.64/30906.11.
- EPL home advantage (log scale): pre-pandemic 0.238 (26.8% more home goals), during 0.0916 (9.6%), post 0.288 (33.4%); P(HA_during < HA_before) = 0.8525; P(HA_during < HA_after) = 0.9527. Home win % 45% → 39% → 44% (ANOVA p = 0.154, not significant).
- Compute cost: 1,000 iterations ≈ 30 s vs ~15 s Poisson/NB; real-data fits used 180K iterations with ESS only 400–500; diffuse priors break convergence (R̂ up to 4–5).
- All real-data model comparison is in-sample DIC; no out-of-sample forecasting or betting evaluation.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Team/venue-specific dispersion regression + index-of-dispersion heatmaps as a totals-modeling diagnostic (OTHER, TRUST-SIGNAL)
- Correlated home/away random effects for joint score distributions (OTHER)
- CMP beat NB/Poisson on DIC across all dispersion regimes — candidate flexible default count model for totals (TRUST-SIGNAL)
## Engine-actionable? (yes/no + one-line what)
Yes — adapt bivariate CMP as GSE's dispersion-flexible count default for (home points, away points) totals modeling with team/venue dispersion regressors, gated on out-of-sample joint log-loss beating bivariate Poisson/NB and a full-season fit under 24 h; extension: time-varying dispersion (e.g., weather-driven variance inflation) for totals pricing in wind games.
