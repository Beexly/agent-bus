# docs/arxiv-program/research/2026-09-21/arxiv-deep/0666-analysis-of-factors-impacting-team-strengths.md

## What it is (1-2 sentences)
An arXiv:2405.12588v1 paper fitting time-variant Bradley-Terry models on pre-game information to estimate and predict AFL team strengths: from win/loss-count BT, to a home-effect (order-effect) variant, to a team-specific model where strength λ_ir is a linear function of form and cumulative performance-indicator differentials plus Gaussian team errors. Forward-walk prediction (train season t, predict t+1) tops out at 71.5% accuracy on a single best season, with a typical range of ~60–66%.

## Key metrics/methods (formulas where given, else "not specified")
- Outcome encoding: Y_ijr = 1 if team i beats team j at round r, else 0; i,j = 1…18, i ≠ j.
- BT win probability: P(Y_ijr = 1) = π_ir / (π_ir + π_jr), π_ir = exp(λ_ir).
- Standard BT: logit(P(Y_ijr = 1)) = λ_i − λ_j.
- Contest-specific: logit(P(Y_ijr = 1)) = λ_i − λ_j + δZ (Z = +1/−1 home/away indicator), fit via BradleyTerry2 R package with the average (half-wins/half-losses) team as reference.
- Team-specific time-variant: λ_ir = Σ_{k=1..p} β_k X_ik + ε_i, ε_i ~ N(0, σ²) i.i.d. Gaussian team errors; per-feature significance screening at 5%, then backward elimination to p < 0.05.
- Round-by-round prediction strategies: Addition (retrain adding each new round), Substitution (drop the same round of the prior season), Incremental (predict rounds 1–3 with prior-season model, then refit on current-season rounds), Majority Voting over the three plus Experiments 2–3 models; predict win if P > 0.5.
- Features (all pre-game, differential-encoded except binaries): match difficulty — AT_HOME, HOMEGROUND, INTERSTATE; form — consecutive wins/losses, wins last 4 (L4G_WINS), ladder-position differential at game time, previous-season final ladder differential, LG_WON, percentage/points-for/points-against differentials, cumulative-wins differential; ~50–60 PI differentials (Forward-50 entries, marks inside 50, goal shots, score launches, contested possessions, metres gained, intercepts, tackles inside 50, clearances, contested losses, rebound inside 50s, kick-to-handball ratio), each as last-4-games cumulative and season cumulative. Final models typically retain AT_HOME, INTERSTATE (or HOMEGROUND), previous-season ladder differential, points for/against differentials, plus a handful of PI differentials.

## Data sources named
Official AFL data via the fitzRoy R package (AFL Tables, AFL official website, FootyWire, Squiggle); ladder results partly retrieved manually from the AFL website. 1,826 games, AFL seasons 2015–2023 (207 games/season except 2015 with 206, one cancelled; 2020 with 162, Covid-shortened; 2023 with 216, extra round); 14 draws excluded; no missing values. Code: https://github.com/charlieceratops/AFL_BradleyTerry. Full feature glossary in paper Appendix B.

## Findings (numbers and facts, not vibes)
- **Standard BT (Exp. 1):** test accuracy ~60% (single-season windows 57.46%–63.83%; all-data model 60.98% train; train accuracy up to 78.38% in 2016); accuracy degrades as training windows lengthen. [SCHEME]
- **Contest-specific BT (Exp. 2):** AT_HOME significant and positive on all data (coefficient 0.29; single seasons 0.08–0.63); test accuracy improves over most seasons, max 67.37% (2022→2023); AIC slightly lower. [SCHEME]
- **Team-specific time-variant (Exp. 3):** max test accuracy 69.38% (season-cumulative, train 2019 → test 2020); all-data fit reaches 68.54%. [SCHEME]
- **Round-by-round (Exp. 4):** best single-season result 71.5% (Incremental, season-cumulative, train 2015 → test 2016); Majority Voting gives stable 60%+ accuracy, up to 67.96% (2021→2022); finals-series prediction weak (3–7 of 9 games). [SCHEME]
- **Headline check:** the paper's "up to 71.5%" is a single best-season result; typical range ~60–66%, a ~3–8 pp lift over the plain BT baseline. [OTHER]
- **Instability flags in-file:** cumulative-wins differential flips sign (negative in some models), likely driven by early-season near-zero differentials and finals-series selection effects; no betting-market or naive home-favorite baseline comparison, so economic value is unproven; accuracy-only evaluation with a 0.5 threshold — no log-loss, Brier, or calibration assessment. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- BT + Gaussian team-error + home-effect formulation as an interpretable alternative to GSE's current ratings: SCHEME — opponent adjustment for EPA/SR residualization and strength-of-schedule decomposition.
- Rolling 3-season refit window and the Incremental early-season strategy: SCHEME — the "medium-term drift" finding maps to NFL season-to-season roster regime changes.
- Differential feature construction (last-4 cumulative + season-cumulative blocks, e.g., EPA/SR/pressure/turnover differentials with opponent-adjusted variants): SCHEME — port with ridge/grouped elastic-net instead of the paper's fragile univariate-screen + backward-elimination.
- AT_HOME effect isolation (coefficient 0.29 all-data; INTERSTATE travel split): OTHER — AFL-specific venue/travel structure; NFL analogue needs rest-differential/travel/altitude terms.
- Lack of calibration/market-baseline evaluation: OTHER — the paper's accuracy-only gains justify nothing until a Brier/log-loss gate against Elo and the closing spread is cleared.

## Engine-actionable? (yes/no + one-line what)
Yes — build a ridge-regularized team-error BT on nflverse 2009–2025 with pre-game differential features, weekly refit on a rolling 3-season window plus a calibration layer the paper lacks; adopt iff it beats plain Elo on Brier by ≥ 0.003 over 2018–2025 and matches the closing spread on log-loss.
