# arxiv-program/research/2026-09-21/arxiv-deep/0592-the-relative-importance-of-ability-luck.md
## What it is (1-2 sentences)
Fioravanti, Delbianco & Tohmé (2021) fit a Bayesian hierarchical model decomposing English Rugby Premiership score differences into ability (team random walk), "effort" (tries share of scoring attempts, as a motivation proxy), home advantage, and heavy-tailed luck (Student-t with estimated ν). The deep read's verdict is REJECT for direct predictive use — the headline effort result is target-contaminated (effort proxy computed from the same game it explains); ADAPT only the lagged/structural components (Student-t margins, dynamic-ability random walk, luck variance decomposition).

## Key metrics/methods (formulas where given, else "not specified")
- Likelihood: y_g ~ t_ν(a_diff(g) + eff_diff(g) + ha(g), σ_y); ν ~ Gamma(9, 0.5); 4 chains × 2500 iterations (1500 warm-up), rstan; full Stan code in appendix.
- Ability: a_diff(g) = a_{hw(g),ht(g)} − a_{aw(g),at(g)}; a_{w,team} = a_{w−1,team} + σ·η (random walk); week 1 anchored: a_{1,team} = β_prev·prevperf + η.
- Effort: eff_diff(g) = β_effort·(effH(g) − effA(g)); effH(g) = home tries/(home tries + attempted scoring kicks) — SAME-game ratio (the fatal leakage).
- Home: ha(g) = β_home + β_atten·atten(g) (+ β_day·day(g) in Model III). Priors: β_* ~ N(0.5,1); σ ~ N(0,0.1); η ~ N(0,0.5).
- Luck: (i) Tango-style Var(Performance) = Var(Luck) + Var(Effort) + Var(Ability), Var(Luck) = p(1−p)/g, p=0.5, g=22; (ii) luck as large regression residuals, classified into four Elias/Gilbert-Wells types (physical randomization, simultaneous decisions, human-performance fluctuation, matchmaking).

## Data sources named
English Premiership Rugby 2020/21: 12 teams, 22 rounds, 122 regular-season games (playoffs excluded; 10 canceled for COVID-19); per-game: total score, tries, conversions, penalties, drop kicks (scored and attempted), attendance; priors from 2019/20 standings; source: Wikipedia; COVID season (empty stadiums, disrupted schedule).

## Findings (numbers and facts, not vibes)
- Model II posteriors: β_prev = 1.758 [0.297, 3.185]; β_effort = 3.114 [1.574, 4.639]; β_home = 0.324 [−0.028, 0.657]; β_atten = 0.376 [−0.588, 1.354]; ν = 13.011 [5.445, 25.335]; σ_y = 1.683 [1.380, 2.012].
- Model III: β_day = −0.003 [−0.732, 0.715] — no weekend effect; Model IV (points-based prior): β_prev = 1.1 [−0.3, 2.5], β_effort unchanged.
- Descriptive: home mean score 26.22 vs away 22.35; home tries 3.248 vs 2.796; mean effort home 0.37, away 0.36.
- Luck variance decomposition: Var(Luck) = 0.01136364; Var(Performance) = 0.03798835; Var(Effort) = 0.01563645; Var(Ability) = 0.01098826 — effort, luck, ability contribute roughly equal thirds.
- Prior-sensitivity: β_home posterior ≈ 0.3 under priors with means 2, 4, 6. Rhat ≈ 1.00 for all parameters.
- No predictive-accuracy metrics reported (explanatory goal); entirely in-sample (122 games, no holdout, no forecasting test); luck case studies (three largest residuals) are post-hoc narratives.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the fatal leakage lesson — any NFL port using same-game aggressiveness (that game's 4th-down go-rate, PROE, blitz rate) inherits the target contamination verbatim; only STRICTLY LAGGED pregame aggressiveness (season-to-date through week w−1) is valid; include a same-game negative-control variant to demonstrate the leakage inflation (expect its β_effort larger but holdout performance worse-or-equal).
- COACHING: situational motivation layer — model β_effort as a function of game state (playoff leverage, elimination, tanking) for late-season spread adjustments.
- SCHEME: the decomposition template (ability random walk + effort/aggressiveness + home + heavy-tailed luck) ports to NFL margins with nflverse: y_g = home−away margin ~ t_ν(a_diff + eff_diff + ha, σ_y), week-1 anchored on prior-season EPA/play, 2020 empty-stadium games as natural experiment.
- OTHER: Tango variance decomposition Var(Performance)=Var(Luck)+Var(Effort)+Var(Ability) is computable on GSE's own pick record.

## Engine-actionable? (yes/no + one-line what)
yes — port the hierarchical template to NFL margins with strictly lagged aggressiveness proxies (season-to-date 4th-down go-rate over expected, PROE, blitz rate) in Stan, testing the lagged effort term's marginal log-loss contribution on 2024–2025 rolling; ~2 engineer-weeks, REJECT the same-game variant.
