# arxiv-program/research/2026-09-21/arxiv-deep/1194-seasonal-linear-predictivity-in-national-football.md
## What it is (1-2 sentences)
A soccer-season study fitting linear (and quadratic/cubic) regression of a team's cumulative points on round number, extrapolated from the first n−ts rounds to predict the final points total. Verdict in file: REJECT — the linear model's edge over a random null is negligible (0.34 MAE), there is no match-level prediction, no calibration, and no market test.

## Key metrics/methods (formulas where given, else "not specified")
- Linear model: cumulative_points(r) = α + β·r, fit on rounds 1…(n−ts), extrapolated to round n (ts = 1…20 held-out rounds).
- Baselines: quadratic and cubic regression on the same task; a null of random sequences with matched marginals.
- Evaluation: mean absolute error of the final-points prediction; final-table normalized displacement at ts=10.
- Assumptions: constant points-per-round rate; held-out tail continues the early trend; team-seasons independent; no structural breaks modeled.

## Data sources named
7,768 team-season series, 707 teams, 425 championships, 22 divisions, 11 countries, soccer seasons 1993/94–2013/14; described as a football results database (no URL in the extracted text; effectively unreplicable as stated). No match-level features, no odds, no team-strength covariates. Soccer-only.

## Findings (numbers and facts, not vibes)
- Linear MAE: 4.652, 95% CI (4.634, 4.672).
- Quadratic MAE: 8.966 (8.913, 9.014); cubic: 27.760 (27.530, 28.011) — higher-degree fits dramatically worse (overfit to early-season noise).
- Random-sequence null MAE: 4.993 (4.666, 5.303) — real sequences only slightly more structured than random; the paper's "predictivity" rests on a ~0.34-point edge with massive N (7,768): statistical significance without practical significance.
- At ts=10: average error ≈ 4.4 points; final-table normalized displacement 0.1874 ≈ 1.874 positions in a 20-team league.
- Anecdote only: EPL 2012/13 linear model correctly identified QPR, Reading, Wigan as relegated for all ts=1…20 (single-season illustration, not a backtest).
- No comparison against any real forecasting model (Elo, Dixon-Coles, market odds); even a naive points-per-game × remaining-games comparator was not tested.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (negative lesson): higher-degree polynomial fits on early-season trends overfit noise badly (quadratic 8.97, cubic 27.76 MAE vs linear 4.65) — an elementary caution against polynomial trend extrapolation of early-season team-strength signals.
- OTHER (significance discipline): a p < 10⁻¹⁶ with N=7,768 on a 0.34-point effect is a textbook example of statistical significance without practical significance — a calibration standard for judging GSE validation claims.

## Engine-actionable? (yes/no + one-line what)
no — REJECT: the demonstrated edge over a random null is negligible, there is no match-level probability forecast, no calibration, and no market test; nothing maps to a GSE build (file itself notes it is to be replaced by a new full-paper read).
