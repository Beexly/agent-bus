# arxiv-program/research/2026-09-21/arxiv-deep/1791-modelling-handball-outcomes-using-univariate-and.md
## What it is (1-2 sentences)
Deep read of arXiv:2404.04213v1 (Karlis, Michels & Ötting, 2024), which models underdispersed handball scores by modeling the score difference with Skellam2 regression, zero-inflated Skellam, and discretized normal/Laplace alternatives, then joints first-half/second-half differences via copulas to get halftime-conditional win probabilities (German Handball Bundesliga 2017-18–2022-23, 1,844 matches).
## Key metrics/methods (formulas where given, else "not specified")
- Skellam PMF: P(Z=z|θ1,θ2) = e^{−(θ1+θ2)}(θ1/θ2)^{z/2} I_{|z|}(2√(θ1θ2)), z ∈ ℤ; E(Z)=θ1−θ2, Var(Z)=θ1+θ2
- Skellam2 reparameterization: Skellam2(μ, σ²), μ=θ1−θ2, σ²=θ1+θ2; covariates enter mean linearly: μ_jk = α + β_j + γ_k (home/away team abilities; team-specific home advantage = β_j − γ_j)
- Zero-inflated Skellam: P_Z(z) = p + (1−p)P(z) if z=0; (1−p)P(z) if z≠0; p fit by EM, optionally logistic in covariates p_i = exp(z_i'γ)/(1+exp(z_i'γ))
- Discrete normal: P_N(z|μ,σ²) = Φ(z+0.5)−Φ(z−0.5); discrete Laplace: P_L(z|μ,σ²) = F(z+0.5)−F(z−0.5)
- Bivariate: Skellam2 marginals per half joined by Frank or Gumbel copula via discrete CDF differencing; complexity tiers A (independence, 72 params) / B (copula, shared abilities, 38 params) / C (copula, half-specific abilities, 73 params)
- Halftime conditional: P(Win) = P(Y > −x | X = x) = Σ_{y=−x+1}^∞ P(Y=y|X=x)
## Data sources named
German Handball Bundesliga scores 2017-18–2022-23 (1,844 matches; 2019-20 COVID-truncated after 240 matches); betting odds from betexplorer.com converted to probabilities assuming equal vig on three outcomes (benchmark + experimental covariate for zero-inflation)
## Findings (numbers and facts, not vibes)
- Descriptives: home goals mean 28.07/variance 19.67; away 26.92/18.32 (underdispersed); home–away goal correlation 0.14; goal-difference SD 5.04–5.96
- AIC 2021-22: Skellam 1854.39, ZI Skellam 1850.77, discrete normal 1855.83, discrete Laplace 1854.42 — Skellam or ZI Skellam wins every season
- Outcome calibration 2021-22 (306 matches), predicted totals — observed: 153.00/29.00/124.00 (home/draw/away); bookmaker-implied: 160.63/28.22/117.14; ZI Skellam: 152.02/30.39/123.59 (nails draws 30.39 vs 29, beats bookmakers on home/away); plain Skellam 10 draws short (20.66)
- Bivariate: Model B (copula, shared abilities, 38 params) Frank copula AIC 3279.47 preferred over Gumbel 3282.47 and Model A independence 3324.09; half-difference correlation 0.13
- COVID out-of-sample: Kiel champion prob 0.972, Flensburg 0.028; matched the administratively awarded table
- Theory result: difference of two underdispersed variables is still Skellam — justifies Skellam for underdispersed counts
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Score-distribution methodology — ZI-Skellam2 for NFL margins (p repurposed as push mass at Z == spread), AIC bake-off protocol across discrete distributions, and copula half-models yielding halftime-conditional P(win)/P(cover)/P(over): the live-betting probability surface
## Engine-actionable? (yes/no + one-line what)
yes — Implement ZI-Skellam2 NFL margin model with team home/away abilities (push-mass parameter replaces draw-inflation), run the paper's discrete-distribution AIC bake-off on NFL margins, and add the Frank-copula half model for halftime-conditional win/cover/over probabilities; ~4-5 days per the ledger spec, with strict acceptance gates (AIC ≥10, push-rate calibration within 0.5pp)
