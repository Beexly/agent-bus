# arxiv-program/research/2026-09-21/arxiv-deep/0404-functional-ratings-in-sports.md
## What it is (1-2 sentences)
Full-paper deep read of arXiv:1908.00939v1 (Lowery, Slater, Thies, 2019, University of Sioux Falls fellowship): extends classic least-squares margin-of-victory team ratings (Stefani/Harville/Massey) to *functional* ratings β_i(t) — schedule-adjusted point differential as a function of game time — fit on the full 2018–19 NCAA D-I men's basketball season. Verdict in-file: REJECT — descriptive-only, no predictive validation vs any baseline, and no NFL applicability.

## Key metrics/methods (formulas where given, else "not specified")
- **Model:** β_i(t) − β_j(t) = d(t), t ∈ [0,T], where d(t) = s_i(t) − s_j(t) is per-second score-differential function; compactly Xβ(t) = d(t) (design matrix: +1 home team i, −1 away, 0 else).
- **Home variants:** Model 1 (no home advantage); Model 2 (constant home function α(t): d(t) = β_i(t) − β_j(t) + α(t), one extra design column); Model 3 (team-specific α_i(t), m×2n design). Neutral-site games get no α term.
- **Overtime removed:** OT games treated as tied at regulation score (authors flag alternatives for further study).
- **Identifiability:** Σ_i β_i(t) = 0 ∀t.
- **Objective:** minimize L² residual norm ‖r(t)‖ = ∫₀ᵀ (Xβ(t) − d(t))ᵀ(Xβ(t) − d(t)) dt via pointwise minimization (OLS independently at each second on raw discretized data; "no loss of information prior to minimizing"); smoothing (order-4 B-spline, knots every minute, trial-and-error) applied afterward for interpretation only.
- **Model selection:** per-second ANOVA F-tests (Harville & Smith style) on SSE of nested models → p-value function over game time.
- **Scalar ranking:** (∫₀ᵀ w(t)β_i(t)dt)/(∫₀ᵀ w(t)dt), w(t)=1 reported; β_i(T) end-of-game-only ranking also computed.
- **Normal-equations decomposition:** β_i(t) = d̄_i(t) + sos_i(t), where d̄_i(t) = (1/m_i)Σ_{k∈G_i} x_ki d_k(t) (average point differential) and sos_i(t) = (1/m_i)Σ_{j∈T_i} β_j(t) − (h_i/m_i)α(t) + (a_i/m_i)α(t) (strength of schedule: mean opponent rating, discounted for home, inflated for road games).
- Assumptions flagged: equal-length games; connected team graph (null space of X exactly dimension 1); score interpolation exact (ignores documented same-timestamp smearing); pointwise ANOVA p-values interpreted with no multiple-testing correction across ~2,400 seconds.

## Data sources named
- **2018–19 NCAA Division I men's college basketball** (incl. postseason): **353 teams, 5,603 games**; per game: date, home/away, final score, neutral-site flag, full scoring summary (every score change with game-clock time) interpolated to per-second score functions. Sourced from Sports-Reference.com (majority), ESPN.com, school sites; cross-validated against MasseyRatings.com. One game (Jackson State at Alabama A&M, 2019-01-05) had only 4 box-score points. Documented error: North Alabama–Samford 2018-11-06 ~5 points smeared over a 212-second interval from same-timestamp bursts. No dataset released by authors.

## Findings (numbers and facts, not vibes)
- Model selection: Model 1 vs 2 p-values consistently < 0.1 except first minute → constant home advantage needed; Model 2 vs 3 consistently > 0.1 except first 20 seconds → team-specific home advantage not supported. Model 2 adopted.
- Home-court effect: end-of-game advantage ≈ **3 points** (80% CI).
- Scalar ratings (w=1): Gonzaga **14.98** (#1), Duke **13.31** (#2), Virginia **12.99** (#3), North Carolina **12.77** (#4), Michigan **12.45** (#5), Michigan State **11.87** (#6); bottom Chicago State **−12.89** (#353). Top 10 identical under end-of-game-only ranking but reordered; biggest movers: Central Florida 8.16 (#22 → #40), Illinois 5.58 (#52 → #72), Stanford 1.78 (#132 → #92, +40), Northern Colorado −0.24 (#167 → #191, 19–11 record dragged by −2.71 SOS, #316).
- SOS (scalar): Kansas **6.10** (#1), Michigan State **6.00**, Purdue **5.91**, Oklahoma **5.87**, Duke **5.80**; bottom Morgan State **−5.01** (#353); top-10 SOS all Big 12/Big Ten/ACC.
- Style interpretations: Duke flat-dominant; Illinois flat second-half (declining differential offset by rising SOS); Stanford second-half surge.
- Authors' own prediction caveat: predicted game-flow curves are averages over hypothetical games, "probably not the most accurate representation of an actual game" — cannot reproduce realistic scoring runs.
- Zero predictive validation: no train/test split, no backtest, no baseline comparison (not vs. Massey, Sagarin, KenPom, or even scalar least squares). Falsifiability spec in-file: implement Model 2 on 2023 NFL nflverse data, backtest weeks 14–18 margin prediction; reject unless functional rating beats scalar least-squares by ≥0.3 RMSE points. Redemption experiment proposed: functional concurrent regression with win-probability link to predict comeback probability beyond current margin (out-of-sample log-loss vs current-margin baseline) — authors' expectation: null.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Duplicate of covered ground: least-squares/score-differential ratings already inventoried (Massey, Sagarin, Colley, Harville 1980, Stefani 1977/1980 — the paper's exact lineage), plus Elo, Bradley-Terry, SP+, FEI, market-implied tiers; time-varying strength already handled by GSE's state-space work (Lopez/Baumer 1701.05976, dynamic Elo, Kalman filters). The β = average-differential + SOS decomposition is standard least-squares algebra implicit in every Massey implementation. NFL applicability nil: needs continuous within-game score functions and ~30-game seasons; NFL score functions are step functions with ~8–10 scoring events per game.

## Engine-actionable? (yes/no + one-line what)
No — REJECT: descriptive-only with zero predictive validation, lineage already covered, and the functional twist buys nothing for NFL's discrete-scoring 17-game setting; falsifiability test defined but explicitly deprioritized.
