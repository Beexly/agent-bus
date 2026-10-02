# arxiv-program/research/2026-09-21/arxiv-deep/1194-seasonal-linear-predictivity-in-national-football.md
## What it is (1-2 sentences)
Ledger for Jurman (2015) "Seasonal Linear Predictivity in National Football Championships" (arXiv:1511.06262) — a soccer study testing whether linear regression of cumulative points on rounds played predicts final season points totals. Verdict: REJECT, to be replaced by a new full-paper read (ledger 1353).
## Key metrics/methods (formulas where given, else "not specified")
- Linear model: cumulative_points(r) = α + β·r fit on rounds 1…(n−ts), ts=1…20 held-out rounds, extrapolated to round n; vs. quadratic/cubic and a random-sequence null.
- Metric: mean absolute error of final-points prediction; final-table normalized displacement at ts=10.
## Data sources named
7,768 team-season series, 707 teams, 425 championships, 22 divisions, 11 countries, seasons 1993/94–2013/14 ("football" = soccer); described as a football results database with no URL in extracted text — effectively unreplicable as stated.
## Findings (numbers and facts, not vibes)
- Linear MAE 4.652, 95% CI (4.634, 4.672); quadratic 8.966; cubic 27.760 (higher-degree fits dramatically worse — overfit to early-season noise); random null 4.993 — real sequences only ~0.34 points better than random (statistical significance without practical significance).
- At ts=10: avg error ≈4.4 points; normalized displacement 0.1874 ≈ 1.874 positions in a 20-team league.
- Single anecdote: EPL 2012/13 correctly identified QPR, Reading, Wigan as relegated for all ts=1…20 — an illustration, not a backtest.
- No match-level forecasting, no calibration, no market/odds comparison, no proper scoring rule; within-season holdout only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — soccer season-total extrapolation; no QB, coaching, OL, scheme, or trust-signal content.
## Engine-actionable? (yes/no + one-line what)
No — wrong granularity (season totals, not match outcomes/spreads/props), negligible edge over random, nothing maps to a GSE build.
