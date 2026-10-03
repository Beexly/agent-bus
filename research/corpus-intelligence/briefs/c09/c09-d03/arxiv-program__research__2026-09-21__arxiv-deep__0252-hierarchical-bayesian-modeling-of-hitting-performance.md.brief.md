# arxiv-program/research/2026-09-21/arxiv-deep/0252-hierarchical-bayesian-modeling-of-hitting-performance.md
## What it is (1-2 sentences)
Deep read of Jensen, McShane & Wyner (2009), arXiv:0902.1360: a hierarchical Bayesian model for MLB next-season home-run prediction using a Binomial likelihood, position-specific age trajectories, and a hidden-Markov elite/non-elite mixture for shrinkage. Verdict in file: REJECT — no NFL transfer path; statistical ideas already standard.
## Key metrics/methods (formulas where given, else "not specified")
- Y_ij ~ Binomial(M_ij, θ_ij) (Eq. 1); logit(θ_ij) = α_k + β_b + f_k(A_ij) (Eq. 2), with position intercept α_k, ballpark coefficient β_b, position-specific cubic B-spline age trajectory f_k.
- Elite mixture: α_k ∈ {α_k0, α_k1}, chosen by latent elite indicator E_ij; HMM temporal dependence p(E_{i,j+1}=b | E_ij=a, R_ij=k) = ν_abk (Eq. 3), position-specific 2×2 transition matrices.
- Priors: β_l ~ N(0, τ²), γ_kl ~ N(0, τ²), τ² = 10,000; α_k ~ MVNormal truncated to α_k0 < α_k1; (ν) ~ Dirichlet(ω, ω), ω = 1.
- Inference: Gibbs sampler with Metropolis-Hastings for logistic coefficients, conjugate Dirichlet updates, forward-summing backward-sampling for E_ij chain.
- Validation metrics: RMSE, median absolute error (MAE), "% BEST" (share of players where method is closest), 80% predictive-interval empirical coverage and mean width.
## Data sources named
- Lahman Baseball Database v5.5 (public, 1871–present); fit 1990–2005 (10,280 player-years), holdout 2006; external comparison on 118 top HR hitters vs PECOTA and MARCEL projections.
## Findings (numbers and facts, not vibes)
- Internal (559 players, 2006): full model RMSE 5.30, 80%-interval coverage 0.855, mean width 9.81; no-position/no-elite RMSE 6.87, coverage 0.644; strawman (last year's HR) RMSE 8.24; player-specific-transition extension RMSE 5.45 (rejected).
- External (118 hitters): model RMSE 7.33, MAE 4.40, %BEST 41%; PECOTA 7.11/4.68/28%; MARCEL 7.82/4.41/31%. Young players (≤26): model RMSE 2.62, MAE 1.93, %BEST 62% vs PECOTA 4.62/3.44/0%.
- 74% of eventual elite hitters need >1 year of data to be classified elite (P(E_ij=1) ≥ 0.5); 46% need >2 years.
- For players ≥35, adjustment vs naive previous-year prediction is equally driven by age and by past consistency (SD of past HR rates).
- Overall RMSE loss vs PECOTA came from large errors on a few DH-position players (over-shrinkage of a unique role).
- The mixture component dominates position information for accuracy.
- Code not shared. Model predictions used TRUE future at-bat totals (acknowledged as unrealistic — named leakage).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: portable hierarchical-shrinkage-with-elite-mixture concept; latent binary elite state + HMM transition identification (74% need >1 year of evidence) — a caution for any latent-state player classification work (e.g., INFERENCE: QB "elite" breakout identification would similarly need multi-year evidence and would over-shrink atypical roles like dual-threat QBs).
- OTHER: age-trajectory modeling via position-specific spline — a template shape (not numbers) for any aging-curve work.
## Engine-actionable? (yes/no + one-line what)
No — REJECT stands; method duplicates existing hierarchical-pooling/calibration lanes and has no NFL play-level transfer path.
