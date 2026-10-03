# arxiv-program/research/2026-09-21/arxiv-deep/1664-expectation-propagation-dynamic-probit.md
## What it is (1-2 sentences)
ADAPT verdict deep-read of arXiv:2309.01641 (2023): expectation propagation (EP) as an approximate-inference backend for the smoothing distribution of a dynamic probit model (y_t∈{0,1}, P(y_t=1)=Φ(x_t′θ_t), θ_t random walk), benchmarked against PFM-VB and exact MCMC. Positioned as candidate backend B alongside ledger 1661's PFM-VB for GSE's dynamic binary-outcome inference, adoption conditional on winning an NFL bake-off.
## Key metrics/methods (formulas where given, else "not specified")
- EP approximates SUN smoothing p(θ_1:T|y_1:T) by Gaussian q(θ)=N(m,V); per-t site updates: cavity q_{\t}(θ_t) ∝ q(θ_t)/q̃_t(θ_t), tilted p̂ ∝ q_{\t}·p(y_t|θ_t), moment-match E_p̂[θ_t], Cov_p̂[θ_t].
- Probit likelihood gives closed-form tilted moments via univariate truncated-normal formulas; state dynamics via Kalman-smoother forward-backward passes per EP sweep.
## Data sources named
Same as 1661: CAC40 daily opening direction, n=241 trading days in 2018; covariates intercept + Nikkei 225 direction. Public data; no code published in the paper.
## Findings (numbers and facts, not vibes)
- Accuracy: EP slightly more accurate than PFM-VB on posterior means/SDs vs 10,000 exact smoothing draws; MF-VB visibly over-shrinks moments. (OTHER)
- Runtime (2023 MacBook Pro): EP 0.43 s, PFM-VB 0.27 s, MF-VB 0.20 s, exact SUN sampler 36.28 s — EP costs ~60% more than PFM-VB for a small accuracy gain. (OTHER)
- EP has no convergence guarantee (damping/double-loop needed in hard cases); not stress-tested here; fixed W, P_0; no predictive calibration. (TRUST-SIGNAL)
- Gate: EP converges in ≥95% of 32 team-season fits AND matches/beats PFM-VB on posterior-mean MAE and holdout log-loss, else REJECT in favor of the winner. (TRUST-SIGNAL)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: paper alone does not justify adoption; the brief explicitly requires a three-backend head-to-head (EP vs PFM-VB vs exact MCMC) on NFL drive-level binary tasks before any inference backend is standardized.
- OTHER: 100× speedup over exact SUN sampling (0.43 s vs 36.28 s) is the enabling number for live in-play binary-event inference if EP wins the bake-off.
- SCHEME: proposed extension to multinomial drive outcomes (TD/FG/punt/turnover) is the natural NFL generalization of the binary probit.
## Engine-actionable? (yes/no + one-line what)
Yes — implement gse.statespace.EPProbit with a shared interface against PFMVBProbit and run the NFL bake-off (accuracy vs MCMC, runtime, EP non-convergence <5%) before standardizing a backend.
