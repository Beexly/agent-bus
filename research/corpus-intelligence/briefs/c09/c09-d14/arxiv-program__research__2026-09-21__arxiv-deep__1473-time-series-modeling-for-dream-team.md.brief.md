# arxiv-program/research/2026-09-21/arxiv-deep/1473-time-series-modeling-for-dream-team.md
## What it is (1-2 sentences)
Ledger for Gupta (2017, ICSE; arXiv:1909.12938v1) on forecasting weekly Fantasy Premier League points per player with ARIMA and LSTM time-series models, then assembling an optimal roster via a budget-constrained binary linear program. Verdict: ADAPT — adopt the forecast→integer-optimization architecture only, under modern rolling-origin testing, since the paper's own validation is thin.
## Key metrics/methods (formulas where given, else "not specified")
Standard ARIMA(p,d,q) per player; LSTM (architecture undisclosed); linear blend of the two (40% ARIMA / 60% LSTM selected as common ratio); binary LP: max cᵀx s.t. £100m budget + exact positional cardinality (2 GK, 5 DEF, 5 MID, 3 FWD), x binary. Blend RMSEs: Vardy best shown 2.539 (60/40 blend), Sagna best shown 2.013 (30/70 blend).
## Data sources named
Official FPL data plus Kaggle cross-checks (no public URL stated in the paper); 584 players × 5 fields, ~326 after removing new/dormant; three seasons 2013-14 through 2015-16; 114 weekly values per player.
## Findings (numbers and facts, not vibes)
- Per-player blend RMSE: Vardy 2.539 at 60/40; Sagna 2.013 at 30/70 — the paper's own table contradicts the single "common" 40/60 blend it selected.
- Claimed season-long dream team projection: 3,718 points; claimed result: team overforecast by 87 points (paper's numbers imply unrealistically high player-season totals — flagged as likely overfit/leakage in the forecast stage).
- No rolling-origin backtest, no naive baselines, no uncertainty; missing appearances zero-filled, conflating absence with poor performance.
- GSE overlap: ledgers 1090/1091/1092 already cover optimization-based DFS construction; this paper's distinct contribution is the per-player weekly time-series forecasting stage feeding the optimizer (an extension, not a duplicate).
- Acceptance gate proposed in file: ADOPT the TS-forecast stage only if lineups on TS forecasts beat trailing-average-fed lineups by ≥5% realized points on 2022–2024 rolling slates.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
OTHER: DFS/roster-construction methodology — forecast→ILP pipeline pattern; probabilistic availability modeling; ownership-aware diversification for GPPs.
## Engine-actionable? (yes/no + one-line what)
Yes — adapt the TS-forecast→MILP optimizer pattern with probabilistic availability and diversification penalty, but only after beating a trailing-average baseline by ≥5% in rolling backtests.
