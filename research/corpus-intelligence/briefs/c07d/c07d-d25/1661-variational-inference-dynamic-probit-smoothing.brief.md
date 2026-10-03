# arxiv-program/research/2026-09-21/arxiv-deep/1661-variational-inference-dynamic-probit-smoothing.md
## What it is (1-2 sentences)
Variational-inference paper (Fasano, Rebaudo et al., 2021) for the smoothing distribution of dynamic probit models: a partially factorized mean-field VB (PFM-VB) that retains state/augmentation dependence, achieving ~3–4× better accuracy than full mean-field VB and ~105× speedup over exact MCMC. Verdict in file: ADAPT as the fast-inference backend for GSE's dynamic binary-outcome models.

## Key metrics/methods (formulas where given, else "not specified")
- Dynamic probit: y_t ∈ {0,1}, P(y_t=1) = Φ(x_t'θ_t); θ_t = θ_{t-1} + η_t, η_t ~ N(0,W).
- Augmented model: z_t = x_t'θ_t + ε_t, ε_t ~ N(0,1); y_t = 1(z_t > 0).
- State dynamics: θ_t = Gθ_{t-1} + η_t, η_t ~ N(0,W); prior θ_0 ~ N(m_0, P_0).
- Exact smoothing: p(θ_{1:T} | y_{1:T}) is unified skew-normal (SUN) — closed form but with a T-dimensional truncated-normal CDF.
- PFM-VB: q(θ_{1:T}, z_{1:T}) = q(θ_{1:T} | z_{1:T}) Π_t q(z_t); conditional q(θ|z) stays exact-Gaussian (Kalman smoother given z), only the truncated-normal marginals factorized. (Full MF-VB = everything factorized, baseline.)
- ELBO optimized by coordinate ascent; univariate truncated-normal updates are closed-form.
- Compared against 10,000 exact i.i.d. smoothing draws (Durante's SUN sampler).
- Assumptions: probit link (not logit); Gaussian state dynamics; W, P_0 fixed (no hyperparameter learning).
- Reference code (R): https://github.com/augustofasano/Dynamic-Probit-PFMVB.

## Data sources named
- CAC40 daily opening direction (up/down), 2018-01-04 to 2018-12-28, n=241 trading days; covariates: intercept + Nikkei 225 previous-day direction (p=2). Public financial series.
- Hyperparameters fixed: W = diag(0.01, 0.01), P_0 = diag(3,3).

## Findings (numbers and facts, not vibes)
- Posterior-mean MAE vs exact: PFM-VB θ_1 0.003 vs MF-VB 0.009; θ_2 0.008 vs 0.031 — PFM roughly 3–4× more accurate than full MF.
- Average absolute error of log posterior SDs: PFM 0.04/0.05 (θ_1/θ_2) vs MF 0.14/0.16 — MF-VB visibly over-shrinks uncertainty; PFM preserves it.
- Runtime: PFM-VB 1.1 s vs exact sampler 115.4 s (~105× speedup).
- Qualitative: PFM smoothing trajectories track the exact SUN smoothing; MF-VB trajectories are over-smoothed.
- Limitations: single short series (n=241) — no evidence accuracy holds for longer T or higher p; W and P_0 fixed by hand, no learning of state-noise hyperparameters; no predictive evaluation (smoothing accuracy ≠ forecast calibration); probit-only; financial series has no missing data or irregular spacing (sports event streams do).
- Competing backend cited: ledger 1664 (EP for the same model) — head-to-head needed.
- Acceptance gate stated in file: keep ADAPT only if PFM-VB posterior means are within 0.01 MAE of exact MCMC on NFL drive data AND predictive log-loss beats static probit by ≥ 0.003 on 2022–2024 holdout; else REJECT in favor of 1664's EP backend.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER (in-play/tracking lane):** Dynamic probit with time-varying coefficients is exactly the machinery for in-play binary event probabilities (next-play success, drive-TD probability, player active/inactive availability, momentum-style binary regime indicators) — GSE's state-space work (Kalman/particle filters) covers Gaussian/continuous states but dynamic binary outcomes need this. The factorization trick — keep state|augmentation exact, factorize only the truncation — is new to GSE's toolbox. Serves the tracking/in-play lane.
- **QB-BEHAVIOR:** Time-varying coefficient structure (θ_t evolving via random walk) is a natural fit for QB behavioral regimes that drift across a season or game (e.g., QB decision-quality state) — binary outcomes like "QB converts 3rd down" with drifting coefficients. Serves the QB-behavioral-profiles program.
- **TRUST-SIGNAL:** The paper's headline honesty — MF-VB over-shrinks posterior SDs (0.14/0.16 vs 0.04/0.05 log-SD error) — is a trust-relevant calibration warning: naive fast VB understates uncertainty, which directly corrupts Kelly sizing and cover-probability honesty. The acceptance gate (0.01 MAE, ≥0.003 log-loss improvement) is the trust discipline before adoption. Serves trust-target intake / calibration.
- **COACHING / SCHEME:** PFM-VB drive-level TD probability with time-varying coefficients on {down, distance, yardline, score diff} could absorb scheme/coaching effects as drifting coefficients; the multinomial extension (TD/FG/punt/turnover via multivariate probit) is the scheme-relevant improvement experiment. Secondary.

## Engine-actionable? (yes/no + one-line what)
Yes — prototype `gse.statespace.PFMVBProbit` (dynamic probit, Kalman-smoother-exact conditional, factorized truncated-normal updates) on nflverse drive-level TD probability with learned W via M-step, head-to-head vs exact MCMC and ledger-1664 EP on accuracy/runtime/calibration; accept only if posterior-mean MAE < 0.01 and holdout log-loss beats static probit by ≥ 0.003.
