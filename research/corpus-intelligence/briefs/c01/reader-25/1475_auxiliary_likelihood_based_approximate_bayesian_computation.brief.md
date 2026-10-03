# arxiv-program/research/2026-09-21/arxiv-deep/1475-auxiliary-likelihood-based-approximate-bayesian-computation.md
## What it is (1-2 sentences)
Full-text research ledger (Verdict: ADAPT) of Martin et al. 2018 (arXiv:1604.07949v3) on score-based auxiliary-likelihood Approximate Bayesian Computation for state-space models with intractable likelihoods, proposing to fit latent team-strength/scoring-dynamics models where exact likelihoods are unavailable.
## Key metrics/methods (formulas where given, else "not specified")
ABC summary = MLE of a tractable misspecified auxiliary SSM, β̂(y)=argmax_β L_a(y;β); distance d = [β̂(y)−β̂(z)]′Ω[β̂(y)−β̂(z)]^{1/2}. Score-based variant (avoids re-optimization per draw): distance on average score S(z;β)=T^{−1}∂L_a/∂β, with S(y;β̂(y))=0. Dimension reduction: integrated auxiliary likelihood L_I^a(y;β_j)=∫L_a(y;β)w(β_{−j}|β_j)dβ_{−j}, scalar integrated score per parameter. Consistency: Theorem 1 (MLE-ABC), Theorem 2 (score-ABC) — posterior concentrates on φ_0 as T→∞, ε_T→0. Evaluation metric: RMSE of kernel-density ordinates vs exact posterior at grid points (Eq. 33), reported as ratio to best method per parameter. ABC protocol: N=50,000 prior draws, retain 0.5% quantile.
## Data sources named
S&P500 daily open-to-close returns 2 Jan 2013–7 Feb 2017 (n=1033, standardized by sample SD); simulated square-root (Heston) SV sample with φ1=0.004, φ2=0.1, φ3=0.062 calibrated to 2003–2004 S&P500 daily returns and realized volatility. Code: GAUSS, C, MATLAB, R (URL not verified live). Proposed GSE data: nflverse pbp 2009–2026.
## Findings (numbers and facts, not vibes)
- Table 3 (relative RMSE, overall rank by mean ratio across 3 parameters): AUKF-AR-IN (integrated auxiliary score) rank 1 with ratios 1.0000 (φ1), 2.2004 (1−φ2), 1.3307 (φ3); FP-ABC-TRANS rank 2 (1.0759, 1.0000, 1.9254); PMMH-BPF rank 3 (1.3584, 2.8303, 1.6552) — integrated-score ABC beat the "exact" particle method on the SV-SQ benchmark.
- All ABC-MCMC variants rank 15–18 of 18 — MCMC sophistication does not compensate for missing dimension reduction. PMMH-ABC (no summaries) rank 11.
- MLE-as-summary was ~60× slower than score-based ABC in pilot timings.
- Empirical S&P500 α-stable SV: 500 ABC draws from 331,882 replications; posterior modes φ2≈0.95, φ3≈0.25, φ4∈(1.96,1.98); PMMH-ABCF posterior for φ2 flat (mimics prior), φ3 peaks at lower bound (non-convergence); auxiliary-score ABC 4h vs PMMH-ABCF 12.5h (~3× faster, more reliable).
- Nonlinear NN adjustment ≈ linear adjustment (negligible gain); GARCH auxiliary scores + dimension reduction beat no-summary ABC.
- Caveats from the ledger: identification (I2) and deviation-control (I3) assumptions analytically unverifiable; exact benchmark exists only for the tractable SV-SQ case; stationarity assumptions (A2) more fragile for NFL team strength with regime changes (coaching turnover).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Likelihood-free Bayesian inference for intractable state-space models — new engine capability (latent dynamic team-strength posteriors with heavy-tailed margin noise), not QB/coaching/OL/trust-signal/scheme content.
- [COACHING] INFERENCE: regime-change caution — coaching turnover breaks the stationarity assumptions underlying the consistency theory, so dynamic-strength posteriors should include change-point or regime-switch machinery.
## Engine-actionable? (yes/no + one-line what)
yes — Port integrated-score ABC to a latent dynamic team-strength SSM (heavy-tailed margins) using a linear-Gaussian Bradley-Terry/Elo auxiliary model, per the ledger's §11 implementation spec (score evaluation + ABC loop, ~1 week, test gate: mean relative RMSE ≤1.5 vs best comparator).
