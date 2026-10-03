# arxiv-program/research/2026-09-21/arxiv-deep/0501-statistical-enhanced-learning-for-modeling-and.md

Source paper: Buhamra & Groll (2025), arXiv:2502.01613v2. Ledger verdict: ADAPT — port the enhanced feature-engineering recipe and the strictly time-ordered evaluation protocol; drop the tennis-specific features.

## What it is (1-2 sentences)
"Statistically enhanced learning" for Grand Slam tennis prediction: augmenting conventional covariates (age, rank, points) with Elo ratings and nonlinear age transforms (Age.30 = |age−30|, Age.int = distance outside [28,32]), all entered as player differences, across logistic regression, GAM/P-spline, and random forest (21 feature combinations each). The ledger ports the feature-engineering philosophy (nonlinear age-development transforms) and the evaluation discipline (expanding-window + rolling-window, both reported) to NFL team-strength modeling.

## Key metrics/methods (formulas where given, else "not specified")
- Age.30 = |age − 30|; Age.int = 0 if 28 ≤ age ≤ 32, else min(|age − 28|, |age − 32|); all covariates enter as differences x_player1 − x_player2.
- Logistic regression; GAM with P-splines (Eilers & Marx); random forest 400 trees, mtry tuned via 10-fold CV (ranger).
- Evaluation: expanding-window on the four 2022 Grand Slams (train on prior tournaments); Appendix A: leave-one-tournament-out CV over all 47 tournaments; Appendix B: rolling last-12-tournaments window.
- Metrics: classification rate, likelihood (mean predicted probability of true outcome), Brier score.
- NFL port features: roster-age transforms (|mean starter age − 27|, distance outside [25,29]), QB-age curve transforms (|qb_age − 29|, distance outside [27,32]), rest-day asymmetry transforms, rolling EPA/play with nonlinear recency decay.
- Improvement experiment: learn the age-transform shape via a 1D P-spline on QB/roster age inside the GAM, then distill the fitted spline into a piecewise-linear feature for the production logistic model.

## Data sources named
5,013 matches from 47 men's Grand Slam tournaments, 2011–2022, assembled with the R package `deuce` (public); retirements and walkovers excluded; no missing values. Paper model code: none stated.

## Findings (numbers and facts, not vibes)
- Expanding-window bests: linear Points+Rank+Elo classification 0.795; linear Points+Elo+Age.int likelihood 0.701; best linear Brier 0.153; spline Elo+Age.30: classification 0.792, likelihood 0.703, Brier 0.149; RF Points+Rank+Age.30+Elo: classification 0.820 (0.8202 in conclusion), likelihood 0.667, Brier 0.151.
- Leave-one-tournament-out bests: linear Rank+Elo classification 0.749, likelihood 0.659, Brier 0.170; RF Rank+Elo classification 0.773.
- Rolling 12-tournament window: linear degrades sharply (classification ~0.647, Brier 0.293); RF holds up (Points+Rank+Age.30+Elo: 0.789 / 0.659 / 0.165).
- Pattern: enhanced features (Elo + age transforms) help most model classes/metrics; RF with the full enhanced set wins overall.
- Limitations flagged: Elo computation protocol not documented (possible lookahead leak); subtraction-direction inconsistency makes reported coefficient signs suspect; no betting-odds benchmark, so "0.82 classification" has no market-relative meaning; likelihood/Brier gains modest in absolute terms (0.153 → 0.149).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: nonlinear age-curve feature engineering (roster mean age, QB age) — the map has no NFL age-curve features; plus the expanding-window + rolling-window evaluation discipline as the standard GSE protocol.
- TRUST-SIGNAL: the acceptance gate (pooled log-loss gain ≥ 0.005 over Elo-only logistic, appearing in ≥5 of 7 held-out seasons) is a consistency-over-lucky-years discipline applicable to all feature adoptions.

## Engine-actionable? (yes/no + one-line what)
Yes — add roster-age and QB-age transforms plus rest-day asymmetry to the team-strength feature set and evaluate expanding-window vs rolling-3-season across three model classes on nflverse 2018–2024; adopt if pooled held-out log-loss improves ≥ 0.005 over Elo-only logistic in ≥ 5 of 7 seasons.
