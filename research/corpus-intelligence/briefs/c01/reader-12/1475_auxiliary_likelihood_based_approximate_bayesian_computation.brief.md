# arxiv-program/research/2026-09-21/arxiv-deep/1475-auxiliary-likelihood-based-approximate-bayesian-computation.md

**Ledger:** [1475] (arXiv:1604.07949v3) — **Verdict in file: ADAPT**

## What it is (1-2 sentences)
A principled method for Bayesian inference in state-space models with intractable likelihoods: run ABC using the MLE (or cheaper score vector) of a tractable *misspecified* auxiliary state-space model as the summary statistic, with Bayesian-consistency proofs and an integrated-likelihood trick that defeats ABC's curse of dimensionality.

## Key metrics/methods (formulas where given, else "not specified")
- ABC joint: p_ε(θ,z|η(y)) ∝ p(θ)p(z|θ) I[d{η(y),η(z)}≤ε]; distance on auxiliary MLEs: d = [β̂(y)−β̂(z(φⁱ))]' Ω [β̂(y)−β̂(z(φⁱ))]^{1/2} (eq. 10), exploiting asymptotic sufficiency of the auxiliary MLE.
- Score-based variant (Sec. 3.3.1, ~60× cheaper — avoids re-optimizing per ABC draw): distance on S(z(φⁱ);β̂(y)), the average score T^{−1}∂L_a/∂β at the data-estimated auxiliary MLE.
- Dimension reduction (Sec. 3.3.2): integrated auxiliary likelihood L_I^a(y;β_j) = ∫ L_a(y;β) w(β_{−j}|β_j) dβ_{−j}; use the scalar integrated score per structural parameter φ_j (1:1 mapping when auxiliary is a discretization of the true model).
- Theorem 1: Bayesian consistency of the ABC posterior as T→∞, ε_T→0 under assumptions A (compactness, stationarity/ergodicity, bounded continuous densities, unique limit maximizer) and I (prior mass at truth, identification, deviation control). Theorem 2: same for score-based ABC. Correctness of the auxiliary model is NOT assumed.
- Auxiliary examples: AUKF-evaluated discretized true model; GARCH(1,1)/TARCH-N/T; regression adjustments (Beaumont 2002 linear; Blum–François NN) on scores or raw summaries.

## Data sources named
Simulations: Heston square-root SV model with φ1=0.004, φ2=0.1, φ3=0.062 (calibrated to daily S&P500 returns 2003–2004); exact posterior benchmark via Ng et al. (2013) deterministic nonlinear filtering. Empirical: S&P500 daily open-to-close returns, 2 Jan 2013 – 7 Feb 2017, n=1033 (Reuters, proprietary). Each ABC run: N=50,000 prior draws, retain 0.5% quantile (250 draws).

## Findings (numbers and facts, not vibes)
- Table 3 (relative RMSE of posterior-density ordinates vs exact, bold = best; overall rank = mean ratio across 3 params): AUKF-AR-IN (integrated auxiliary score) rank 1: 1.0000, 2.2004, 1.3307; FP-ABC-TRANS rank 2; PMMH-BPF ("exact") rank 3 (1.3584, 2.8303, 1.6552) — integrated-score ABC BEAT the exact particle method on the benchmark case. All ABC-MCMC variants rank 15–18 (worst third) — MCMC sophistication doesn't compensate for missing dimension reduction. Nonlinear NN adjustment ≈ linear adjustment (negligible gain).
- Key lessons: dimension reduction is decisive; statistic choice dominates (FP-TRANS ≫ FP-RAW).
- Empirical S&P500 α-stable SV: posterior modes φ2≈0.95, φ3≈0.25, φ4∈(1.96,1.98); auxiliary-score ABC 4h vs PMMH-ABCF 12.5h (3× faster, more reliable — PMMH posterior for φ2 flat/mimicking prior).
- Identification condition (I2) is analytically unverifiable in practice — the consistency theorem's hardest assumption is asserted, numerically checked only in the supplement. Benchmark exists only for the tractable SV-SQ case; α-stable claims rest on plausibility.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (state-space modeling): likelihood-free Bayesian inference is a NEW capability for the corpus — GSE has Kalman/particle/nested-AR(1)/GP team-strength machinery but nothing ABC; ports to latent team offense/defense strength models with AR(1) dynamics + heavy-tailed scoring observation models (Poisson-binary mixtures) where exact likelihoods are unavailable. True model = heavy-tailed dynamic strength SSM; auxiliary = linear-Gaussian dynamic Bradley-Terry/Elo SSM with Kalman-evaluable likelihood; weight Σ = inverse Hessian at β̂(y).
- TRUST-SIGNAL (weak/INFERENCE): full marginal posteriors on strength-dynamics parameters give honest Bayesian uncertainty for ratings content rather than point estimates.

## Engine-actionable? (yes/no + one-line what)
Yes — build an ABC-SSM lane for dynamic team strength (intractable heavy-tailed observation model + tractable auxiliary) on nflverse pbp 2009–2026; accept only if integrated-score ABC ranks above hand-summary ABC on a simulated-season benchmark with known truth.
