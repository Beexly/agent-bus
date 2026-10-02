# docs/arxiv-program/research/2026-09-21/arxiv-deep/0497-leveraging-minutebyminute-soccer-match-event-data.md
## What it is (1-2 sentences)
Deep-read of arXiv:2508.04008v1 (Skripnikov, Cemek & Gillman, 2026) modeling minute-by-minute soccer offensive production as a Negative Binomial GAM of game context (score differential, red cards, home, pre-match strength, minute), then projecting teams onto a neutral "tied, even strength" baseline via a multiplicative adjustment factor. Verdict: ADAPT to NFL — game-script-adjusted offensive efficiency metrics with posterior CIs, per the file's implementation spec.
## Key metrics/methods (formulas where given, else "not specified")
- Negative Binomial GAM: log(Shots) ~ s(Diff.S) + s(Diff.RC) + Home + s(Diff.WP) + s(GM|Half=1) + s(GM|Half=2) + s(Team) + s(season); GCV for spline df; extreme bins |score|>3->±3, |RC|>2->±2, minute 45+->45; team/season random-effect smooths; model selection via DHARMa diagnostics, AIC/BIC, leave-one-season-out CV.
- Adjustment: multiply output by e^{-(eta_hat_s - eta_hat_0)} for score differential s (eta=log response), e^{-(eta_hat_rc - eta_hat_0)} for red-card differential, e^{-gamma_hat} for away->home; 95% CIs from GAM Bayesian posterior covariance. No adjustment for win-probability differential (don't penalize strength) or minute.
## Data sources named
ESPN minute-by-minute event commentary 2008-2023 (15 seasons, 5 leagues: EPL, La Liga, Bundesliga, Ligue 1, Serie A; ~4.97M minute-team observations; ~70 games excluded for corrupted commentary); pre-match win probabilities from OddsPortal (Selenium scrape) as strength control. Data+code: github.com/UsDAnDreS/JQAS_LeveragingMinuteByMinute_Soccer_Event_Data_Paper.
## Findings (numbers and facts, not vibes)
- Multiplicative context coefficients: trailing shots x0.70-0.90; leading x1.10-1.75; up a man x0.75 (down 1), x0.40-0.70 (up 2+); down a man x1.7-1.9 (down 1), x2-3 (down 2+). Serie A has the steepest score-differential slope.
- Concrete adjustments: Bordeaux 31 shots -> 13.8 [12.5,15.1] (2-man advantage while trailing); Bayern 15 -> 31.9 [30.1,33.7] (12th-minute red card, led throughout); Real Madrid 40 -> 60.7; PSG 18 corners -> 9.5.
- Adjusted stats correlate more with points earned than raw: shots 0.787 vs 0.718; corners 0.737 vs 0.603; significantly beat raw stats in forecasting future score differentials (paired t-test, Holm p<0.01 all leagues).
- Predictive: LOSOCV per-game totals — shots MAE 3.24-3.53/game (27-28% of mean), R^2 21-31%; corners MAE 1.9-2.1 (40% of mean), R^2 17-22%.
- Season-level: 8/10 strongest positive adjustments were league winners; 8/10 strongest negative were relegated teams.
- Forecasting gain was marginal in magnitude: RMSE reduction 0.004-0.04 goals/game (1.5-15.2 goals over 380 games), statistically significant but practically small — the authors admit this.
- Score x minute interactions significant in only a handful of 75 season-by-season tests — additive model stands empirically.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Game-script-adjusted production metric with posterior CIs -> OTHER (transfers to play-level NFL EPA/play adjusted for score differential x time remaining x pregame spread)
- Trailing/leading production multipliers (0.70-0.90 / 1.10-1.75) -> OTHER (NFL analog would quantify garbage-time inflation; NFL-specific note in file: play-calling endogeneity — trailing teams pass more by choice — makes the causal direction muddier than in soccer)
- Adjusted stats correlate 0.787 vs 0.718 with points (raw) -> TRUST-SIGNAL (a trust metric for team-strength features: context-adjusted stats are more predictive than raw totals)
- Forecasting gain 0.004-0.04 RMSE, statistically significant but marginal -> OTHER (cautionary: adopt for content rankings, gate engine-feature adoption on a stronger forecasting bar)
## Engine-actionable? (yes/no + one-line what)
Yes — fit play-level NegBin/Gaussian GAMs of EPA/play and explosive-play rates on score differential x time remaining x pregame spread with team/season random effects (nflverse 2015-2024), project each team onto neutral script for a weekly "game-script-adjusted offensive efficiency" metric with CIs; adopt as content metric on correlation win, engine feature only if LOSOCV margin forecasting beats raw stats at p<0.05.
