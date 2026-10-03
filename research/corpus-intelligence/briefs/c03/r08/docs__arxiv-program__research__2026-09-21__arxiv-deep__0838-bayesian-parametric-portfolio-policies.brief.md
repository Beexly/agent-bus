# docs/arxiv-program/research/2026-09-21/arxiv-deep/0838-bayesian-parametric-portfolio-policies.md
## What it is (1-2 sentences)
Ledger of arXiv:2602.21173v1 (Herculano 2026): Bayesian parametric portfolio policies (BPPP) — placing shrinkage priors on linear policy coefficients and Bayesian-averaging via Laplace approximation at the MAP. Verdict ADAPT: OOS Sharpe 1.05→1.32 and halved turnover vs non-Bayesian PPP; the transferable mechanism is shrinking aggressive sizing coefficients toward zero when data are thin.
## Key metrics/methods (formulas where given, else "not specified")
- Policy form: w_t = θᵀx_t (weights linear in signals).
- Bayesian layer: p(θ|data) ∝ p(data|θ)p(θ); Laplace approximation N(θ_MAP, H⁻¹) with H the Hessian at the MAP; marginal likelihood disciplines shrinkage strength (instead of cross-validation).
- PPP baseline: θ estimated by maximizing in-sample expected mean-variance utility (γ = 2, 5, 10); transaction costs tested at 10 bps and 50 bps.
## Data sources named
Six Fama–French factors as allocatable assets; 242 signals (212 Open Source Asset Pricing predictors + 30 factor-specific); July 1963–December 2023; 120-month initial training window; 605 monthly OOS observations (1973M8–2023M12). No code stated.
## Findings (numbers and facts, not vibes)
- Full-period OOS: PPP Sharpe 1.05 / max DD −37.21% / turnover 9.54; BPPP Sharpe 1.32 / max DD −24.50% / turnover 6.03; market 0.74.
- Net Sharpe at 10 bps: PPP 0.96, BPPP 1.25; at 50 bps: PPP 0.60, BPPP 0.99.
- CE gain BPPP−PPP: 142 bp (γ=2), 184 bp (γ=5), 255 bp (γ=10).
- Crisis Sharpe — GFC: BPPP 0.56 vs PPP 0.33; COVID: BPPP 0.89 vs PPP 0.66.
- BPPP-vs-market Sharpe difference 0.579, bootstrap SE 0.103, t=5.61, p<0.001.
- Limitations: 242 signals on 60 years of equity data is the ideal shrinkage case (sports signals are fewer/noisier); linear policy class; Laplace quality asserted not diagnosed; equity frictions differ from bet frictions; single asset universe.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Sizing-lane mechanism: parameterize GSE stakes as w = θᵀx (x = edge, CLV, model agreement, matchup flags); Gaussian prior on θ; MAP + Laplace posterior; size from posterior-mean policy; refit monthly — prior dampens extreme-signal stakes early season when data are thin.
- [TRUST-SIGNAL] Acceptance gate: adopt only if walk-forward max drawdown improves ≥10% vs plain constrained-Kelly with no ROI loss; reject if θ_MAP ≈ MLE (then the Bayesian layer is decoration).
- [OTHER] Improvement experiment: hierarchical prior grouping θ by signal family (efficiency/market/matchup) with learned group variances — learns which families deserve aggressive coefficients.
## Engine-actionable? (yes/no + one-line what)
Yes — prototype Bayesian-shrunk stake sizing on GSE 2023–2024 pick history vs unshrunk Kelly, gated on ≥10% max-drawdown cut at no ROI loss (~2–3 days).
