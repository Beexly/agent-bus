# arxiv-program/research/2026-09-21/arxiv-deep/0282-a-systematic-review-of-machine-learning.md
## What it is (1-2 sentences)
PRISMA systematic review (Galekwa et al. 2024, arXiv:2410.21484v1) of 219 studies (2010–Jul 2024) applying ML to sports betting across 10 sports including American football. No original experiment; verdict in-file is ADAPT as a pointer map to primary papers (calibration-over-accuracy, adaptive fractional Kelly, Black–Litterman betting portfolios).

## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas written out — cited only). Surveyed American-football metrics: accuracy, precision, recall, RMSE, expected points (EP), win probability (WP), AUC, Brier scores, probabilistic forecasts.

## Data sources named
football-data.co.uk, Open International Soccer Database (200k–219k matches), Kaggle NFL pbp 2009–2017 (289,191 plays), NFL Big Data Bowl/NGS 2018–2019, PFF, Pro-Football-Reference, ESPN, FiveThirtyEight Elo, covers.com.

## Findings (numbers and facts, not vibes)
Paper-reported summaries of cited studies (claims, not this paper's experiments):
- Walsh & Joshi 2024: calibration-optimized models generated 69.86% higher average returns than accuracy-optimized models in sports betting.
- Matej et al. 2021: adaptive fractional Kelly beat pure Kelly in horse racing, basketball, soccer with risk-control modifications.
- Stübinger et al. 2019: ML ensemble on 47,856 matches (top-5 European leagues 2006–2018) returned 1.58% per match; Stübinger & Knoll 2018: Random Forest 75.62% accuracy, 5.42% return per match on 8,082 matches.
- Patel 2023 (NFL spreads): XGBoost with Elo/spread features — 58.5% cross-validated accuracy, 53.65% on 2021 season (profitable at −110 odds).
- Sinha et al. 2013: Twitter volume rate-of-change features → >55% precision on winners-vs-spread, "sufficient for profitability."
- Warner 2010 (NFL, Gaussian process): 64.36% straight-up winners but <51% ATS — below 52.4% breakeven.
- Morgan V 2024 (nflfastR playoffs 2002–2023): 64.41% winners, 56.78% ATS.
- Szalkowski & Nelson 2012: home underdogs 53.5% ATS (beats 52.38% breakeven), 2,560 NFL games 2002–2011.
- Ötting 2021: HMM play-call prediction 71.5% out-of-sample (Patriots 77.9%, Seahawks 60.2%).
- Anzer & Bauer 2021 xG (XGBoost, 105,627 Bundesliga shots): RPS 0.197.
- Surveyed NFL features: game location, yards to go, down, formation, score difference, field position, RFID/NGS tracking data, player movements, game time, distance to goal line, score differential, team passing percentage.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: calibration-first doctrine — calibration-optimized models out-earn accuracy-optimized ones (+69.86%); supports GSE's existing calibration stack.
- OTHER: bankroll sizing — adaptive fractional Kelly (Matej et al. 2021) and Black–Litterman betting portfolios (Abinzano et al. 2021) flagged as GSE Gap 1 pointer reads.
- SCHEME: Ötting 2021 HMM play-call prediction 71.5% (Patriots 77.9%) — play-calling predictability varies materially by team, relevant to play-call fingerprinting.
- OTHER: no meta-analytic pooling; publication bias flagged (profitable strategies over-represented); Deng & Zhong 2020's 99%-accuracy soccer DNN treated as suspect leakage.

## Engine-actionable? (yes/no + one-line what)
Yes — queue Matej et al. 2021 (adaptive fractional Kelly) and Abinzano et al. 2021 (Black–Litterman betting portfolio) as deep-read candidates for GSE's Kelly/portfolio gap, and run an internal calibration-vs-accuracy bake-off on 2024 NFL probability outputs to validate Walsh & Joshi's +69.86% claim on GSE's own data.
