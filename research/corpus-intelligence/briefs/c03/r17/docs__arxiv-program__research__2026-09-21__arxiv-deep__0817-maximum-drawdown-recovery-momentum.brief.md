# docs/arxiv-program/research/2026-09-21/arxiv-deep/0817-maximum-drawdown-recovery-momentum.md
## What it is (1-2 sentences)
Deep-read ledger for arXiv:1403.8125 (Choi 2014) on equity momentum ranking by maximum drawdown (MDD) and post-drawdown recovery. Verdict ADAPT: the equity results don't transfer to sports, but the path decomposition C = PP − MDD + R is adaptable as a path-dependent team-form feature and bankroll-regime signal.
## Key metrics/methods (formulas where given, else "not specified")
- MDD = max_τ(max_{t<τ}(P(t) − P(τ))) on log-prices; R = R(t*,T), log-return from end of MDD formation to period end; path decomposition C = PP − MDD + R.
- Seven ranking rules: C (1,1,1, benchmark), M (0,1,0), R (0,0,1), RM = R−MDD (0,1,1), CM = C−MDD (1,2,1), CR = C+R (1,1,2), CMR (1,2,2).
- Risk model: ARMA(1,1)-GARCH(1,1) with classical tempered stable (CTS) innovations for VaR/CVaR/Sharpe; Carhart four-factor regression: r_p = α + β_MKT f_MKT + β_SMB f_SMB + β_HML f_HML + β_MOM f_MOM + ε_p.
## Data sources named
Korea Exchange (KOSPI 200, Jan 2003–Dec 2012); Bloomberg (9 SPDR US sector ETFs Jan 1999–Dec 2012; S&P 500 Jan 1993–Dec 2012); Ken French data library (Carhart factors).
## Findings (numbers and facts, not vibes)
- KOSPI 200 weekly 6/6 contrarian: recovery-rule (R) L−W 0.1455%/wk (σ 1.7567%) vs benchmark C 0.0731% (σ 2.8417%) — ~2x return at ~40% lower vol; R portfolio daily VaR95 1.149%, CVaR95 1.391% (lowest of all); strategy MDD 30.09% vs benchmark 33.66%.
- KOSPI 200 monthly 6/6 momentum: CM rule W−L 1.4330%/mo (σ 7.0357%, lowest kurtosis) vs benchmark 1.3305%; R rule worst at monthly scale (0.3740%).
- S&P 500 Carhart: weekly contrarian — only significant alpha is R L−W: α = 0.1373%/wk (5%); benchmark α = −0.0071 (insignificant). Monthly momentum — M W−L α = 0.8273%/mo (5%, largest); benchmark α = 0.2169 (insignificant).
- Empirical regularity: MDD-based rules dominate at monthly scale; recovery rules dominate at weekly scale.
- Limitations named: no transaction costs; multiple-comparison concern (7 rules x 3 universes x 2 horizons); equities-only, samples end 2012.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Path-decomposition form features (PP/MDD/R over rolling windows on game EPA or spread-cover margins) → OTHER (model feature engineering)
- Recovery-phase features matter most at short horizons → suggests R-features for week-to-week player-prop form → OTHER
- Bankroll-regime signal: track engine's own cumulative-pick-P&L drawdown, gate stake ramp-up on recovery detection → OTHER (sizing)
## Engine-actionable? (yes/no + one-line what)
yes — add (PP, MDD, R) path-decomposition form features over 6-game windows on per-team game performance series and ablate on 2024→2025 walk-forward log-loss/ROI.
