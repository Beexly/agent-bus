# docs/arxiv-program/research/2026-09-21/arxiv-deep/0838-bayesian-parametric-portfolio-policies.md
## What it is (1-2 sentences)
Deep-read ledger for arXiv:2602.21173v1 (Herculano 2026) on Bayesian parametric portfolio policies. Verdict ADAPT: priors on policy coefficients plus Laplace-approximated posterior averaging lifted OOS Sharpe 1.05→1.32 and halved turnover vs standard PPP on 605 months of equity data; transferable as uncertainty-aware shrinkage of GSE stake-sizing coefficients.
## Key metrics/methods (formulas where given, else "not specified")
- PPP baseline: portfolio weights w_t = θ^T x_t (linear in characteristics); θ estimated by maximizing in-sample mean-variance utility (risk aversion γ).
- BPPP: prior p(θ) shrinking toward zero; posterior approximated by Laplace Gaussian N(θ_MAP, H^-1) at MAP; implemented policy averages over posterior — ridge-like shrinkage with strength disciplined by marginal likelihood.
- Evaluated at γ = 2, 5, 10; transaction costs 10 bps and 50 bps; expanding window (120-month initial train), 605 monthly OOS points (1973M8–2023M12).
## Data sources named
Six Fama–French factors (assets); 242 signals (212 Open Source Asset Pricing predictors + 30 factor-specific signals), July 1963–December 2023; all public/replicable.
## Findings (numbers and facts, not vibes)
- Full-period OOS: PPP Sharpe 1.05 / max DD −37.21% / turnover 9.54; BPPP Sharpe 1.32 / max DD −24.50% / turnover 6.03; market Sharpe 0.74.
- Net Sharpe at 10 bps: PPP 0.96, BPPP 1.25; at 50 bps: PPP 0.60, BPPP 0.99.
- CE gain BPPP−PPP: 142 bp (γ=2), 184 bp (γ=5), 255 bp (γ=10).
- Crisis Sharpe — GFC: BPPP 0.56 vs PPP 0.33; COVID: BPPP 0.89 vs PPP 0.66.
- BPPP-vs-market Sharpe difference 0.579, bootstrap SE 0.103, t=5.61, p<0.001.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Gaussian prior on sizing coefficients shrinks aggressive stakes when signals are extreme/early-season → OTHER (stake sizing)
- Hierarchical extension: group θ by signal family with learned group variances → OTHER (signal weighting)
- Prior-discipline via marginal likelihood rather than cross-validation → OTHER (methodology)
## Engine-actionable? (yes/no + one-line what)
yes — parameterize GSE stakes as w = θ^T x (edge, CLV, model agreement, matchup flags), fit with Gaussian prior + Laplace posterior, accept if walk-forward max drawdown improves ≥10% vs plain constrained-Kelly with no ROI loss.
