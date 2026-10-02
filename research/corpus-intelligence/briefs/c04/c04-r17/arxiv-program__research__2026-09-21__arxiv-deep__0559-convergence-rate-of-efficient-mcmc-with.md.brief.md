# docs/arxiv-program/research/2026-09-21/arxiv-deep/0559-convergence-rate-of-efficient-mcmc-with.md

## What it is (1-2 sentences)
Deep read of Nakakita, Toyabe, Nakatsuma & Hoshino (2026, arXiv:2507.18404), which gives the first rigorous convergence theory for the ancillarity–sufficiency interweaving strategy (ASIS) in Bayesian hierarchical panel models and a decision rule for centered vs non-centered parameterizations. Ledger verdict: ADAPT — the SA/AA decision rule and ASIS sampler design are worth porting to GSE's Bayesian hierarchical team-strength fitting.

## Key metrics/methods (formulas where given, else "not specified")
- Model: panel y_it = α_i + ε_it, α_i ~ N(μ_α, σ_α²), ε_it ~ N(0, σ_ε²), prior μ_α ~ N(φ_α, τ_α²), known variances. SA (centered): draws α_i then μ_α | α. AA (non-centered): draws α̃_i = α_i − μ_α then μ_α | α̃. ASIS interweaves SA→AA and AA→SA sweeps each iteration.
- Theorem 1: the SA and AA geometric rates sum to 1 — if one mixes well the other necessarily mixes poorly.
- Corollary 1 (the decision rule): SA converges faster if σ_ε² < σ_α²T; AA converges faster if σ_ε² > σ_α²T, with T = observations per group.
- Theorem 2: under ASIS, the global mean μ_α chain is approximately IID when τ_α²N is large (diffuse prior limit).
- Assumptions: Gaussian likelihood, known variances, τ_α²N → ∞, linear model with individual effects only; authors flag panel logit/probit extensions as future work.
- Cost note from the read: ASIS roughly doubles per-iteration work, so wall-clock wins are smaller than MCSE ratios suggest.

## Data sources named
Synthetic panels at (N,T) = (10,10), (10,100), (500,10), (500,100) × three variance-ratio patterns each; 10,000 MCMC iterations, 1,000 burn-in, averaged over 100 independent runs. Real data: U.S. "Cigarette" panel (Baltagi & Levin 1986) — 48 states × 11 years; outcome per-capita cigarette-pack consumption; covariates real per-capita income, retail price per pack, excise tax per pack (public in R `plm`/`Ecdat` and Stata). No sports data.

## Findings (numbers and facts, not vibes)
- MCSE of μ_α (×10⁻⁵, smaller better; ASIS best in every setting): Table 1 (N=10,T=10) Pattern 1 (1,1): SA 2.980, AA 6.178, ASIS 2.427. Pattern 2 (10,1): SA 56.286, AA 17.057, ASIS 13.716. Pattern 3 (√10,1): SA 9.644, AA 14.399, ASIS 6.697.
- Table 2 (N=10,T=100) Pattern 1: SA 3.255, AA 8.587, ASIS 2.877. Pattern 2: SA 53.828, AA 17.665, ASIS 13.781. Pattern 3: SA 9.221, AA 13.949, ASIS 6.589.
- Table 3 (N=500,T=10) Pattern 1: SA 0.600, AA 2.279, ASIS 0.567. Pattern 2: SA 10.496, AA 1.753, ASIS 1.722. Pattern 3: SA 1.192, AA 1.126, ASIS 0.738.
- Table 4 (N=500,T=100) Pattern 1: SA 0.618, AA 2.379, ASIS 0.585. Pattern 2: SA 8.815, AA 1.813, ASIS 1.733. Pattern 3: SA 1.169, AA 1.168, ASIS 0.744.
- Table 5, cigarette data (×10⁻³): SA 8.673, AA 8.232, ASIS 3.072 — ASIS ~2.7× lower MCSE than either single scheme.
- The SA-vs-AA ordering matched Corollary 1 in all 12 settings; ACF under ASIS decays markedly faster than either single scheme.
- Limitations: theory covers only Gaussian random-effects with known variances — GSE's logistic win-prob and Poisson/NB score models are outside the proven case; diffuse-prior asymptote conflicts with informative shrinkage priors; one cited sports application (Nakakita & Nakatsuma 2023, racehorse running ability) is the authors' own prior work, not independent confirmation.
- Acceptance gate from the read: adopt ASIS into GSE's sampler stack only if a local re-implementation reproduces ASIS MCSE ≤ best-single-scheme in ≥10 of 12 settings AND the Corollary 1 ordering holds in all 12.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Corollary 1 / ASIS for fitting GSE's hierarchical models (team strength, opponent adjustment, player-level random effects) — OTHER (MCMC sampler engineering, no behavioral or coaching content in the paper).

## Engine-actionable? (yes/no + one-line what)
Yes — for every GSE Bayesian hierarchical model with team-level random effects, estimate the variance ratio, pick SA vs AA per Corollary 1, and implement ASIS interweaving so the global intercept mixes near-IID (gated on R̂ < 1.01 and min ESS).
