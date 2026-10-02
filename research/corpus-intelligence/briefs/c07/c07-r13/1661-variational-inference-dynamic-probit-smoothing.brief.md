# arxiv-program/research/2026-09-21/arxiv-deep/1661-variational-inference-dynamic-probit-smoothing.md
## What it is (1-2 sentences)
A variational-inference paper deriving a partially-factorized mean-field approximation (PFM-VB) for the smoothing distribution of dynamic probit models — keeping the exact state|augmentation conditional via a Kalman smoother and factorizing only the truncated-normal marginals. Verdict: ADAPT as the fast-inference backend candidate for GSE's dynamic binary-outcome models (in-play event probabilities, availability).
## Key metrics/methods (formulas where given, else "not specified")
- Augmented model: z_t = x_t'θ_t + ε_t, ε_t ~ N(0,1); y_t = 1(z_t > 0). State dynamics: θ_t = Gθ_{t-1} + η_t, η_t ~ N(0,W); θ_0 ~ N(m_0, P_0).
- Exact smoothing p(θ_{1:T}|y_{1:T}) is unified skew-normal (SUN) — closed form but T-dimensional truncated-normal CDF.
- PFM-VB: q(θ_{1:T}, z_{1:T}) = q(θ_{1:T}|z_{1:T}) Π_t q(z_t); conditional q(θ|z) stays exact-Gaussian (Kalman smoother), only truncation factorized; ELBO optimized by coordinate ascent; univariate truncated-normal updates closed-form.
- Full mean-field VB (everything factorized) is the baseline; exact comparison vs 10,000 i.i.d. SUN smoothing draws (Durante's sampler). Assumptions: probit link; Gaussian state dynamics; W, P_0 fixed (no hyperparameter learning).
## Data sources named
CAC40 daily opening direction (up/down), 2018-01-04 to 2018-12-28, n=241 trading days; covariates intercept + Nikkei 225 previous-day direction (p=2); W = diag(0.01,0.01), P_0 = diag(3,3). Code: github.com/augustofasano/Dynamic-Probit-PFMVB (R).
## Findings (numbers and facts, not vibes)
- Posterior-mean MAE vs exact: PFM-VB θ_1 0.003 vs MF-VB 0.009; θ_2 0.008 vs 0.031 — PFM ~3–4× more accurate than full mean-field.
- Mean absolute error of log posterior SDs: PFM 0.04/0.05 (θ_1/θ_2) vs MF 0.14/0.16 — full MF visibly over-shrinks uncertainty; PFM preserves it.
- Runtime: PFM-VB 1.1 s vs exact sampler 115.4 s (~105× speedup).
- PFM smoothing trajectories track the exact SUN smoothing; MF-VB trajectories over-smoothed.
- Limitations: single short series (n=241); W and P_0 hand-fixed, no hyperparameter learning; no out-of-sample predictive evaluation; probit-only; financial series has no missing/irregular data.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: dynamic probit with time-varying coefficients fits binary regime/momentum indicators and player-availability dynamics.
- TRUST-SIGNAL: full mean-field VB systematically under-states posterior uncertainty (0.14/0.16 vs 0.04/0.05 SD error) — a caution for any GSE VB inference; PFM is the trust-preserving alternative.
- OTHER: ~105× speedup over exact MCMC makes play-cadence in-play binary-event probabilities (next-play success, drive TD) computationally feasible.
## Engine-actionable? (yes/no + one-line what)
Yes — build PFMVBProbit as candidate backend for dynamic binary models (in-play TD/drive-success probability, availability), adding W learning via M-step and head-to-head vs EP (ledger 1664) on NFL drive data.
