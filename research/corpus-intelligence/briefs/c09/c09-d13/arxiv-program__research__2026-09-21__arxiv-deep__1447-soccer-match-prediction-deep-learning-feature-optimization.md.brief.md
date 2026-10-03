# arxiv-program/research/2026-09-21/arxiv-deep/1447-soccer-match-prediction-deep-learning-feature-optimization.md

## What it is (1-2 sentences)
NOTE: filename slug is a mismatch — actual content is a full-paper read (18 pages) of Sietsema (2022), arXiv:2201.05249, *An Empirical Study of Least Squares Ratings for USA Ultimate Frisbee*, not soccer/deep learning. It pits the plain least-squares rating system against USA Ultimate's custom iterative power-rating system. Ledger verdict: ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- Least squares: each game = one linear equation r_A − r_B = b (score differential); schedule matrix A (m×n, rows +1 winner/−1 loser) and differential vector b give **r̂ = (AᵀA)⁻¹Aᵀb** (Eqs. 5–6), minimizer of ‖Ar − b‖₂², plus a sum-to-zero equation fixing the constant shift.
- USAU game rating: Gr = Tr ± 125 + [475/sin(0.4π)]·sin(min(1, 2(1 − l/(w−1)))·0.4π) (Eq. 1); ± for win/loss; MOV term capped at 600 (cap reached iff winning score > 2× losing score).
- Date weight dw = 2^(t/n) − 1 (Eq. 2, up-weights late games); score weight sw = min(1, (w + max(l, b(w−1)/2c))/19) (Eq. 3, down-weights tiny-cap games); iterate from all-1000 to convergence.
- Cap-normalization trick: multiplicatively normalize all differentials to a common cap (e.g., 12−8 → 15−10, differential 5), predict, then rescale back to the original cap.
- Evaluation diagnostics: MSE, MAD (mean absolute deviation), ranking-violation rate (fraction of games where the lower-rated team wins).

## Data sources named
Scraped USAU website + archived ranking pages, 2014–2019 seasons, Club Men's / Mixed / Women's divisions; games with missing scores/teams dropped, international teams removed; 2020–2021 excluded (COVID). Scale example — 2019 Mixed: 339 teams, 54 regular-season tournaments, 2,209 regular-season games; 2019 Men's: 260 teams, 1,581 games.

## Findings (numbers and facts, not vibes)
- Retrodictive comparison (ratings fit on the regular season, scored against same regular-season games): least squares has strictly better MSE and MAD than USAU in every season (2014–2019) and every division.
- MAD: least squares is consistently ~0.25 points closer to the true differential per game than USAU.
- Ranking violations: comparable overall, both within ~2 percentage points — except 2014 Men's, where USAU got "nearly a quarter of all games" wrong.
- Top-25 ordering (2019 Men's): remarkably similar — all teams within 3 places between methods; Seattle Sockeye #1 under both (went on to win nationals).
- Interpretability: LS ratings are expected point differentials vs an average team (top teams rated >15 = expected to beat an average team by a full 15-point cap game); USAU's point scale has no such meaning.
- Context baselines cited: Gill & Keating (2009) survey; Barrow et al. (2013) found least squares significantly better than other methods on college-football data.
- Leakage caveat stated in read: evaluation is retrodictive (fit on full season, "predict" same games) — measures fit quality, not true forecasting skill; honest test is walk-forward.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — team-rating methodology for the spread head: LS rating differential ≈ expected score differential, the exact quantity a spread model needs; pairs with [1449] (theory companion) and [1446] (ordinal models, for win-probability heads) and contrasts with [1448] (G-Elo, online probabilistic alternative). Design rule for GSE: every rating-system constant must be data-estimated or removed, never hand-picked (the paper's "arbitrary-formula" teardown of USAU's sine-based formula).

## Engine-actionable? (yes/no + one-line what)
Yes — add an `ls_ratings` module (sparse `scipy.sparse.linalg.lsqr`, mean rating anchored at 0 weekly), feed LS rating differentials as a feature into GSE's spread head alongside Elo, add ranking-violation rate to rating diagnostics, and adopt the cap-normalization trick for capped-format data (preseason running clocks, mercy-rule formats); acceptance gate: NFL 2019–2023 walk-forward LS spread-MAE ≤ GSE Elo spread-MAE + 0.1 points AND LS ranking-violation rate ≤ Elo's.
