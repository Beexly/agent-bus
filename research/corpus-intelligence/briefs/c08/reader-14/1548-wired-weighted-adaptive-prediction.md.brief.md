# docs/arxiv-program/research/2026-09-21/arxiv-deep/1548-wired-weighted-adaptive-prediction.md
## What it is (1-2 sentences)
Deep-read ledger entry on Vercellino (2026, arXiv:2608.12998): WIRED, a modular pipeline for joint probabilistic multiseries forecasting — CRPS-weighted marginal expert mixture plus separately estimated adaptive copula dependence — benchmarked honestly with an explicit negative result. Verdict: ADAPT — architecture ports to combining GSE's model ensemble into calibrated joint scenarios.

## Key metrics/methods (formulas where given, else "not specified")
- Sample CRPS: CRPS(X, z) = (1/m) sum|Xi - z| - (1/2m^2) sum sum|Xi - Xk|.
- Mixture weights: w_k = exp(-s^_k/tau) / sum_l exp(-s^_l/tau), tau = empirical SD of predicted scores; entropy-regularized reading w = argmin sum v_k s^_k + tau sum v_k log v_k.
- CRPS histories extrapolated via robust Theil-Sen slope -> predicted next-window scores.
- Rank->copula mappings: Pearson rho^P; sin(pi tau^/2) (Kendall); 2 sin(pi rho^S/6) (Spearman). Regime blend: R_reg = (1-omega_T) R_calm + omega_T R_stress, omega_T = {1+exp[-k(s_T-c)]}^-1. Shrinkage: R_alpha = (1-alpha) R^ + alpha I_p.
- Scenario draws: X_j = Q_j(U_j) with U from copula; sample energy score and variogram score (r=1/2) for evaluation.
- 8-expert marginal library: naive PERT, auto ARIMA, EWMA Gaussian, historical bootstrap, drift+residual bootstrap, volatility-scaled naive Gaussian, robust median/MAD, shrunk quantile regression.

## Data sources named
Synthetic: 4 multiplicative-growth DGPs (regime heavy tail; static gaussian; break correlation; independent), p=4 series, 240 training obs per replicate, 30 replicates per DGP-horizon; real: R built-in EuStockMarkets (daily DAX, SMI, CAC, FTSE), 8 rolling origins, horizons 1/5/20. CRAN R package `wired` v1.0.1; experiment driver + precomputed CSVs as arXiv ancillary files.

## Findings (numbers and facts, not vibes)
- Headline (paper's words): "WIRED-full is not the overall winner in this benchmark. The Gaussian-copula bootstrap baseline has the best average CRPS, energy score, and variogram score."
- Synthetic Table 3 (means): WIRED-full CRPS 0.00650, Energy 0.01497, Variogram 0.00955, 80% coverage 0.757; Gaussian-copula bootstrap CRPS 0.00599, Energy 0.01367, Variogram 0.00833, 80% coverage 0.734.
- Paired deltas vs WIRED-full: equal weights beat it on CRPS (-0.00039) and Energy (-0.00093); independent marginals worsen Variogram (+0.00186) — dependence layer earns its keep.
- EuStockMarkets Table 6: WIRED-full CRPS 0.01647, Energy 0.03571, Variogram 0.01384, coverage 0.792; Gaussian-copula bootstrap again best (CRPS 0.01427).
- All variants under-cover nominal 80% (0.73-0.82); average adaptive weights ~0.11-0.15 per expert — mixture does not collapse. Paper's fix: stronger weight regularization (toward equal weights / bootstrap prior).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: ensemble combination lane — directly slots into the commissioned-but-unfilled "ensembling" research slot; CRPS-weighted mixture over marginal experts (engine v5.2.7, de-vigged market, Elo, bootstrap, quantile regression).
- OTHER: slate-level copula over game margins enables coherent multi-leg parlay probability and DFS stack covariance — an unbuilt GSE capability (GSE publishes singles).
- OTHER: paper's own negative result is the guardrail — adaptive CRPS weighting needs regularization toward equal weights or it loses to uniform.

## Engine-actionable? (yes/no + one-line what)
yes — build "GSE-WIRED" as a post-engine combination layer (marginal expert library + CRPS backtest weighting shrunk to uniform + slate copula), gated on beating equal-weight mixture by >=2% mean CRPS on 2024-2025 NFL seasons.
