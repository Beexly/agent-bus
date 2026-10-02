# docs/arxiv-program/research/2026-09-21/arxiv-deep/0497-leveraging-minutebyminute-soccer-match-event-data.md
## What it is (1-2 sentences)
Deep-read ledger of Skripnikov, Cemek & Gillman (2026) "Leveraging Minute-by-Minute Soccer Match Event Data to Adjust Team's Offensive Production for Game Context" — models per-minute offensive production with a Negative Binomial GAM on game context (score differential, red-card differential, home, pre-match strength, game minute) and projects team stats onto a neutral "tied, full-strength" baseline via a multiplicative factor e^{-(eta_hat_s - eta_hat_0)}. Verdict: ADAPT — port the context-adjustment methodology to NFL game-script-adjusted efficiency.

## Key metrics/methods (formulas where given, else "not specified")
- Negative Binomial GAM: log(Shots) ~ s(Diff.S) + s(Diff.RC) + Home + s(Diff.WP) + s(GM|Half=1) + s(GM|Half=2) + s(Team) + s(season); chosen over Poisson (DHARMa overdispersion/zero-inflation failures), ZIP (BIC + miscalibration), Gaussian (KS failures).
- Adjustment factor: e^{-(eta_hat_s - eta_hat_0)} for score differential s; e^{-(eta_hat_rc - eta_hat_0)} for red-card differential; e^{-gamma_hat} for away->home; 95% CIs from GAM Bayesian posterior covariance. No adjustment for win-probability differential (don't penalize strength) or minute (don't penalize timing).
- Extreme bins: |score|>3->+-3, |RC|>2->+-2, minute 45+->45; GCV for spline df; team/season random-effect smooths; game-level random effects tested per season and rejected (75 tests).
- Interaction score×minute tested season-by-season with Holm correction across 75 tests — significant only a handful of times; additive model stands.

## Data sources named
ESPN minute-by-minute event commentary 2008–2023 (15 seasons), 5 leagues (EPL, La Liga, Bundesliga, Ligue 1, Serie A): ~4.97M minute-team observations; pre-match win probabilities from OddsPortal (Selenium scrape) as strength control; ~70 games excluded for corrupted commentary. Data + R code: https://github.com/UsDAnDreS/JQAS_LeveragingMinuteByMinute_Soccer_Event_Data_Paper.

## Findings (numbers and facts, not vibes)
- Multiplicative coefficients: trailing shots ×0.70–0.90; leading ×1.10–1.75; up a man ×0.75 (down 1), ×0.40–0.70 (up 2+); down a man ×1.7–1.9 (down 1), ×2–3 (down 2+). Serie A steepest score-differential slope ("catenaccio").
- Extreme examples: Bordeaux 31 shots -> 13.8 [12.5,15.1]; Bayern 15 -> 31.9 [30.1,33.7]; Real Madrid 40 -> 60.7; PSG 18 corners -> 9.5; Getafe 22 shots/14 corners -> 12.8/8.7.
- England–France 2022 WC: 16->14.35 vs 8->8.15 — adjustment narrows but doesn't erase the gap.
- Season: 8/10 strongest positive adjustments were league winners; 8/10 strongest negative were relegated teams.
- Adjusted stats correlate more with points earned: shots 0.787 vs 0.718; corners 0.737 vs 0.603; significantly beat raw stats in forecasting future score differentials (paired t-test, Holm p<0.01 all leagues).
- LOSOCV per-game totals: shots MAE 3.24–3.53 (27–28% of mean), R² 21–31%; corners MAE 1.9–2.1 (40% of mean), R² 17–22%.
- Forecasting RMSE reduction 0.004–0.04 goals/game (1.5–15.2 over 380 games) — significant everywhere but, per the authors, of marginal practical magnitude.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Standardized-baseline projection via multiplicative factor e^{-(eta_hat_s - eta_hat_0)} with posterior CIs — OTHER (principled garbage-time adjustment mechanic, cleaner than ad-hoc filters).
- Trailing teams' production inflated ×0.70–0.90 downward / leading inflated ×1.10–1.75 upward — OTHER (game-script adjustment magnitudes, soccer-calibrated; NFL analogue needed).
- Play-level NegBin GAM with separate smooths by half; score×time interactions mostly absent — OTHER (template + simplification for NFL analogue).
- Adjusted stats beat raw on forecasting future score differentials (0.787 vs 0.718) — TRUST-SIGNAL (context-adjusted metrics carry real signal).
- NFL caveat: play-calling is endogenous to script (trailing teams choose to pass); two-stage model proposed — OTHER (improvement experiment).

## Engine-actionable? (yes/no + one-line what)
Yes — build NFL game-script-adjusted EPA/play by projecting each team's per-game efficiency onto a neutral script (tied, home) via the paper's multiplicative factor; adopt for content if adjusted stats beat raw on season point-differential correlation (>=0.03), for engine only if LOSOCV margin forecasting also wins at p<0.05.
