# docs/arxiv-program/research/2026-09-21/arxiv-deep/1185-predicting-football-tables-by-a.md
## What it is (1-2 sentences)
Haugen & Owren (2018), arXiv:1805.08937v1 — asks whether the current league table itself (or goal difference), with no match simulation, can predict final football tables competitively, and derives exact statistical properties of the MAE table-prediction metric under random guessing. Ledger verdict: ADAPT; ledger completed 2026-09-21, full text read.
## Key metrics/methods (formulas where given, else "not specified")
- MAE = (1/n)Σ_{i=1}^n |P(i) − i| over predicted permutation P of n teams; MSE analog also defined (eq. 1.2), MAE chosen for interpretability.
- Theorem A.1: max_P S(P) = n²/2 (even n), attained by reversed permutation P₀ = [n,n−1,…,1]; hence max MAE = n/2.
- E[MAE] = (1/3)·(n²−1)/n (eq. A.6) under uniform random guessing; Var[MAE] = (n+1)(2n²+7)/(45n²) (eq. A.7).
- Empirics: per round r, regress final rank on round-r rank → R²_pos(r), and final rank on round-r goal difference → R²_gd(r); proposed strategy: sort by goal difference early, switch to latest table later.
- Assumptions: uniform random permutation null; even n for the max proof; parsimony claim assumes no structural breaks (promotion/relegation handled by in-season prediction only).
## Data sources named
Norwegian top flight (Tippeligaen/Eliteserien), seasons 2009–2016, round-by-round tables (rank, points, goal difference per team per round) via the RSSSF Norwegian Football Archive (Lars Aarhus); data + Fortran 90 code available from authors on request (no URL). Illustrative example: Paul Merson's 2016/17 Premier League pre-season table prediction (20 teams).
## Findings (numbers and facts, not vibes)
- Exact MAE null: for n=20, E[MAE] = 6.65, max = 10; P(exact table by chance) = 1/20! ≈ 4×10^−19. Merson's 2016/17 PL prediction MAE = 2.8 vs random-guess expectation 6.65. [OTHER]
- Tippeligaen 2016: R²_pos(r) reaches 0.80 by round 7 — 80% of final-table variation explained 7 rounds in. [OTHER]
- Across 2009–2016: goal difference beats table rank (R²_gd > R²_pos) early in the season in 7 of 8 seasons; the exception is 2016, where rank dominated all rounds. Roughly 80% explanatory power by mid-season for most seasons. [OTHER]
- R² values are in-sample per season (regressions fit and evaluated on the same season's rounds); the cross-season consistency of the pattern is the finding, not any single R². No controlled comparison against simulation-based methods (acknowledged as future work). [OTHER]
- GSE transfer noted in ledger: the MAE null formulas give a documented chance baseline for any season-standings product; the goal-difference-early finding supports using early-season (schedule-adjusted) point differential — not standings — as the parsimonious team-strength prior. [TRUST-SIGNAL]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Exact chance baseline for season-table forecasts (MAE null formulas) — TRUST-SIGNAL
- Early-season goal/point differential beating standings as team-strength signal — OTHER
- 80% of final-table variance explained by round 7 (Tippeligaen) — OTHER
- R²_gd > R²_pos early in 7 of 8 seasons — OTHER
- 2016 counterexample (rank beat GD all season) — OTHER
## Engine-actionable? (yes/no + one-line what)
yes — build the NFL analog (2015–2025 weekly R² curves of final win totals on week-r standings vs schedule-adjusted point differential) and test whether schedule-adjusted point differential beats the current early-season team-strength prior by ≥0.03 out-of-sample R² in weeks 1–6; adopt MAE-null formulas into season-product methodology docs regardless (exact math).
