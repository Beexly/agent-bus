# docs/arxiv-program/research/2026-09-21/arxiv-deep/0790-view-fusion-black-litterman.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2301.13594v1 (Spears & Roberts, Oxford-Man, Jan 2023): Bayesian Black-Litterman fusion of simultaneous view-generating models (ARIMA, CatBoost, GP) using four fusion methods — precision-weighted (PW), covariance intersection (CI), inverse CI (ICI), covariance union (CU) — evaluated over 29 years of bi-monthly portfolio rebalancing. Verdict: ADAPT for the ensembles lane — ICI/CI fuse correlated prediction sources under unknown correlation, empirically beating naive inverse-variance weighting.
## Key metrics/methods (formulas where given, else "not specified")
- PW fusion: Σ̂ = (Σ̂₁⁻¹ + … + Σ̂S⁻¹)⁻¹; μ̂ = Σ̂(Σ̂₁⁻¹μ̂₁ + … + Σ̂S⁻¹μ̂S) — assumes zero cross-covariance.
- CI (Julier–Uhlmann): convex combination of information matrices, consistent under unknown correlation; ICI (Noack et al.): tighter consistent bounds exploiting common-information structure; CU (Reece & Roberts): for possibly inconsistent/contradictory sources.
- Predictive variance decomposition: var(y*|x*,D) = var_θ|D(E[y*|x*,θ]) + E_θ|D(var(y*|x*,θ)) — epistemic (reducible) + aleatoric (irreducible).
- View models: ARIMA (1-yr rolling; epistemic from 6-mo OOS error-variance minus aleatoric, floor 1e-8), CatBoost (2-yr window; aleatoric from loss, epistemic from ensemble variance), GP (RBF+white-noise kernel; aleatoric = kernel noise, epistemic = total − aleatoric).
- Validation: 29-yr OOS bi-monthly rebalancing (1993–2021); metrics: Sharpe, IR, Sortino, max drawdown, net of transaction costs, volatility-normalized to S&P 500 TR; paired 1-sided t-tests (Ljung-Box independence check, 1 of 28 rejected at 10%), BCa bootstrap 90% CIs, Wilcoxon signed-rank.
## Data sources named
CRSP and IBES via WRDS, daily U.S. equities 1992–2022; top 2,000 stocks by market cap; five risk factors + 70 SIC industry factors (BL-APT factor model).
## Findings (numbers and facts, not vibes)
- Median Sharpe over 29 years: PW 0.11, CU 0.16, CI 0.38, ICI 0.48 (single-view medians 0.01–0.53, means 0.21–0.30).
- Global 29-yr Sharpe: PW 0.10 → ICI 0.34.
- PW was the weakest fusion — assuming independence yields inconsistent estimates and hurts (authors' note); S&P 500 TR beat all view/fusion models — fusion improved relative standing but did not beat the index.
- Significant performance decay of view models over the 30-year period.
- File proposes GSE adaptation: fuse correlated pick-probability sources (engine, market-implied/CLV, analyst adjustments, LLM panels) via ICI/CI instead of naive averaging; test gate = ICI fusion beats PW/average by ≥1% log-loss over best single source; improvement idea: blend ICI with mAFTER-style adaptive source weighting.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Correlated-source ensemble fusion (ICI/CI) for the engine's multiple pick-probability sources (OTHER: ensembles lane — new; no CI/ICI/CU in existing research map).
- Epistemic/aleatoric variance decomposition for calibration (TRUST-SIGNAL: track model uncertainty vs irreducible noise separately rather than as one variance number).
- Warning data point: PW's failure is direct evidence naive precision-weighting overconfidences correlated sources (TRUST-SIGNAL).
## Engine-actionable? (yes/no + one-line what)
Yes — replace/upgrade naive averaging of correlated pick sources with ICI fusion, and split calibration variance into epistemic vs aleatoric components.
