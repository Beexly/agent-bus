# docs/arxiv-program/research/2026-09-21/arxiv-deep/0818-drawdown-practice-theory-back-again.md
## What it is (1-2 sentences)
A risk-theory paper (Goldberg & Mahmoud, arXiv:1404.7493) formalizing Conditional Expected Drawdown (CED) — the tail mean of the maximum-drawdown distribution, the drawdown analog of Expected Shortfall — proving convexity, positive homogeneity, and an Euler attribution formula, illustrated on US equity/bond portfolios 1982–2013. The deep-read ledger rates it ADAPT for GSE bankroll risk measurement and attribution.
## Key metrics/methods (formulas where given, else "not specified")
- D_t^(X) = M_t^(X) − X_t (drawdown process); μ(X) = sup D^(X) (maximum drawdown random variable).
- Drawdown threshold DT_α(μ(X)) = inf{m : P(μ(X) > m) ≤ 1−α} (VaR analog); CED_α(X) = TM_α(μ(X)) (tail mean; ES analog).
- Prop 3.3 convexity: CED_α(λX+(1−λ)Y) ≤ λCED_α(X)+(1−λ)CED_α(Y). Prop 3.5 positive homogeneity: CED_α(λX) = λCED_α(X), λ>0.
- Prop 4.2 Euler/MRC: MRC_i^{CED_α}(P) = E[(F_{i,t*} − F_{i,s*}) | μ(P) > DT_α(P)] where (s*,t*) locate portfolio max drawdown; RC_i = w_i · MRC_i; FRC_i = RC_i / CED.
- Empirical estimation: T-length series → T−n overlapping paths of length n (6M/1Y/5Y) → max drawdown per path → CED_α = average of largest (1−α)% drawdowns.
## Data sources named
Daily US Equity index and US Government Bond index, 1982-01-01–2013-12-31; S&P 500 daily 1950–2013 (max-drawdown distribution illustration); fixed-mix portfolios 50/50, 60/40, 70/30. Index data commercial; method fully implementable from formulas. No code.
## Findings (numbers and facts, not vibes)
- Table 5.1 (1982–2013 daily): vol — US Equity 18.35%, US Bonds 5.43%, 60/40 11.12%; ES_0.9 — 2.19%/0.49%/1.35%; CED_0.9 (6M paths) — 47%/29%/33% (50/50: 31%, 70/30: 36%); CED rises with path length (5Y: 57%/35%/38%).
- Empirical max-drawdown distribution of S&P 500 6-month paths (1950–2013) is asymmetric vs Gaussian simulation.
- 6-month rolling FRC shows equity's drawdown-risk contribution spiking in crises (2008), co-moving with VIX. Descriptive risk statistics only — no predictive content, no strategy backtest.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- OTHER (bankroll risk management): treat engine cumulative pick P&L as the return process; compute CED_0.9 over rolling 6-month daily settled P&L paths; attribute via Prop 4.2 to bet categories (spread/ML/total; NFL/NCAAF; model version) to find concentrated drawdown sources; drawdown trigger (stakes cut when drawdown > DT_0.9, restore on new equity high). TRUST-SIGNAL: the "improvement experiment" proposes applying CED to the engine's calibration-error process — tail risk of the probability estimates themselves, attributed to features (a model-diagnostic tool).
## Engine-actionable? (yes/no + one-line what)
yes — Build a CED/MRC bankroll-risk attribution dashboard over GSE picks DB P&L by bet category, and backtest a drawdown-trigger stake-cut rule on walk-forward 2024→2025 (accept if Calmar improves without >10% ROI sacrifice).
