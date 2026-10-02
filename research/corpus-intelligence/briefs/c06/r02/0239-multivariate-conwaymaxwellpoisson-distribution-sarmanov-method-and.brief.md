# arxiv-program/research/2026-09-21/arxiv-deep/0239-multivariate-conwaymaxwellpoisson-distribution-sarmanov-method-and.md
## What it is (1-2 sentences)
A full-depth research note on Piancastelli, Friel, Barreto-Souza & Ombao (2021, arXiv:2107.07561v1), a Bayesian statistics paper constructing a multivariate Conway-Maxwell-Poisson distribution via a modified Sarmanov method with doubly-intractable MCMC inference (GIMH/noisy exchange), applied to the COVID-19 crowdless-match effect on Premier League home advantage 2018-2021. The note's verdict is ADAPT the distributional construction (not the heavy Bayesian machinery) for joint low-count NFL event modeling, e.g., paired team explosive-play or red-zone trip counts.
## Key metrics/methods (formulas where given, else "not specified")
- COM-Poisson pmf: p(x|lambda,nu) = lambda^x / ((x!)^nu Z(lambda,nu)), x in N0; overdispersed nu<1, underdispersed nu>1; nu=1 -> Poisson.
- Modified Sarmanov joint (eq. 8): f(x_1,...,x_d) = {prod f_i(x_i)}{1 + C(d,2)^-1 sum_{j<k} delta_{jk} phi_j(x_j) phi_k(x_k)}, dropping >=3-way terms; exponential kernel phi_i(x) = e^{-omega x} - Psi_i, Psi_i = E(e^{-omega X_i}); sign(delta_jk) sets sign of correlation.
- Delta validity range (eq. 10): -1/max{(1-Psi_1)(1-Psi_2), Psi_1 Psi_2} < delta < 1/max{Psi_1(1-Psi_2), Psi_2(1-Psi_1)}.
- Pairwise correlation (eq. 13): corr(X_j,X_k) = delta_jk * C(d,2)^-1 * A_jk / sqrt(zeta'(lambda_j,nu_j) zeta'(lambda_k,nu_k)), A_jk > 0.
- Inference: GIMH pseudo-marginal (unbiased likelihood via IS-estimated normalizing constants, N_z ~ 170K auxiliary draws; N_r=10K) vs noisy exchange (asymptotically inexact); regression log lambda_1i = gamma_0 + gamma_1*Home_i + gamma_2*Pandemic_i; log lambda_2i = gamma_0.
- Model comparison: PSIS-LOO; priors lambda~Gamma(2,2), nu~Gamma(1.5,2), omega~Gamma(2,0.8), delta~truncated N(0,5); 5 chains x 30K, 10K burn-in, R-hat~1.
## Data sources named
Premier League match scores 2018-19 through 2020-21: 1,140 matches (668 pre-pandemic with crowds, 472 crowdless); simulation datasets (2 bivariate n=200, 1 trivariate n=500); Shunters accident dataset (supplementary only). No data URL stated.
## Findings (numbers and facts, not vibes)
- Home advantage: exp(gamma_1) posterior mean 1.249 (95% CI 1.055-1.455) — ~25% home goal surplus with crowds; exp(gamma_1+gamma_2) mean 1.146 (0.968-1.336) — ~15% without; P(gamma_2<0) = 0.97.
- Dispersion: nu_1 = 0.818 +/- 0.063, nu_2 = 0.756 +/- 0.065 (both <1, overdispersion); delta = -1.767 +/- 0.355, 99% CI excludes 0 — negative home-away goal dependence, empirical corr -0.162; omega = 0.453 +/- 0.098.
- Descriptives: home W/D/L 46.4/21.4/32.2% pre-pandemic vs 39.6/21.8/38.6% during; home goals mean/var (1.54,1.59) pre vs (1.39,1.80) during.
- PSIS-LOO: M_BCOMP 6917.2 (32.6) vs Poisson M_P 6938.4 (71.6) — differences small vs variability; authors cannot decisively choose on PSIS-LOO alone.
- Simulations recover true parameters within 95% CIs in bivariate and trivariate settings (e.g., delta_13 = -2.719 +/- 0.495 vs truth -2.5).
- IS ratio estimation beat TINT-trapezium even at high omega=3; recommended n_draws > 130K.
- Limitations: no train/test split anywhere (full-sample fit + PSIS-LOO only); team strength ignored (only Home/Pandemic covariates across 20 pooled teams); NFL scores (mean ~24) are too high-count for COM-Poisson machinery.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- OTHER: joint low-count count models (team explosive plays, red-zone trips, turnovers) — the transfer target named by the note; negative in-game dependence between teams' event counts fits the zero-sum clock-resource structure.
- TRUST-SIGNAL: full-sample Bayesian fit with no holdout is the failure mode to avoid — GSE ports must test on held-out paired counts (weekly refit, 2024 window) before adoption.
- SCHEME: INFERENCE — dependence between paired counts can quantify scheme-driven tempo/possession coupling (slow-paced games intensify home-away event-count dependence).
## Engine-actionable? (yes/no + one-line what)
yes — Reimplement the MultCOMP construction as a fast two-step estimator (COM-Poisson MLE margins + moment-matched delta/omega) for joint NFL event-count outcomes (explosive plays, red-zone trips), adopting if it beats independent Poisson by >= 0.01 nats/observation on a 2024 holdout window; skip the GIMH machinery entirely.
