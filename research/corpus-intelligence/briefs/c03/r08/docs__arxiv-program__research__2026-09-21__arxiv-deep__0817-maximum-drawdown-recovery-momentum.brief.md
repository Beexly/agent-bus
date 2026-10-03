# docs/arxiv-program/research/2026-09-21/arxiv-deep/0817-maximum-drawdown-recovery-momentum.md
## What it is (1-2 sentences)
Ledger of arXiv:1403.8125 (Choi 2014, v4): maximum drawdown (MDD) and its consecutive recovery (R) as portfolio ranking criteria vs cumulative past return, across monthly momentum and weekly contrarian equity portfolios. Verdict ADAPT — the path decomposition C = PP − MDD + R transfers to GSE as team-form features and as a bankroll-regime signal; equity momentum numbers themselves do not transfer.
## Key metrics/methods (formulas where given, else "not specified")
- MDD = max_τ(max_{t<τ}(P(t) − P(τ))) on log-prices; recovery R = R(t*,T), log-return from end of MDD formation to period end.
- Path decomposition: C = PP − MDD + R (pre-peak, drawdown, recovery).
- Seven ranking rules: C (1,1,1 benchmark); M (0,1,0); R (0,0,1); RM (0,1,1); CM (1,2,1); CR (1,1,2); CMR (1,2,2).
- Risk model: ARMA(1,1)-GARCH(1,1) with classical tempered stable (CTS) innovations for VaR/CVaR/Sharpe; Carhart four-factor regression (MKT, SMB, HML, MOM) on S&P 500.
- Design: 6-month/6-week estimation, 10 decile baskets (KOSPI, S&P 500), 3 baskets (ETFs), equally weighted, dollar-neutral long-short, overlapping 1/6 rebuilt monthly (weekly); no transaction costs.
## Data sources named
KOSPI 200 (Jan 2003–Dec 2012, Korea Exchange); SPDR US sector ETFs XLB/XLE/XLF/XLI/XLK/XLP/XLU/XLV/XLY (Jan 1999–Dec 2012, Bloomberg); S&P 500 (Jan 1993–Dec 2012, Bloomberg); Ken French data library (factors). No code.
## Findings (numbers and facts, not vibes)
- KOSPI weekly contrarian: benchmark C L−W 0.0731%/wk (σ 2.8417%); R rule 0.1455%/wk (σ 1.7567%) — ~2× return at ~40% lower vol; R strategy daily VaR₉₅ 1.149%, CVaR₉₅ 1.391% (lowest of all); strategy MDD 30.09% vs benchmark 33.66%.
- KOSPI monthly momentum: benchmark C W−L 1.3305%/mo (σ 6.8258%); CM 1.4330%/mo (σ 7.0357%, lowest kurtosis); R rule worst at monthly scale (0.3740%/mo).
- S&P 500 Carhart: weekly contrarian — only significant alpha is R L−W: α = 0.1373%/wk (5%); benchmark α = −0.0071 (insignificant). Monthly momentum — M W−L α = 0.8273%/mo (5%, largest); benchmark α = 0.2169 (insignificant).
- Pattern: "drawdown = trend information, recovery = reversion information" — MDD-based rules dominate at monthly scale, recovery rules at weekly scale.
- Limitations: no transaction costs (weekly contrarian turnover understated); 7 rules × 3 universes × 2 horizons = multiple-comparison concern; sample ends 2012; equities only.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Novel GSE feature construction: per-team path decomposition (PP, MDD, R) on rolling N-game performance series (game EPA margin or spread-cover margin) — teams with identical W-L but small-MDD/strong-recovery paths rate differently.
- [OTHER] Bankroll-regime signal: track MDD of the engine's own cumulative pick P&L; recovery-phase detection (R turning positive) gates stake ramp-up — ties to the sizing lane.
- [OTHER] Improvement experiment: recovery features (R) tested specifically on week-to-week player-prop lines, since recovery dominated at short horizons.
- [TRUST-SIGNAL] Acceptance gate: adopt only if path features improve 2025-holdout log-loss or pick ROI over no-path baseline at p<0.05, or the bankroll gate improves Calmar.
## Engine-actionable? (yes/no + one-line what)
Yes — engineer PP/MDD/R form features over 6-game windows into the GSE model and run the with/without ablation on 2024→2025 walk-forward (~2–3 days).
