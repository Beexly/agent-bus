# docs/data-sources/research/2026-09-17/2026-09-17-advanced-analytics-landscape.md
## What it is (1-2 sentences)
An engine-benchmarking dossier cataloging 36 verified X analytics accounts, 26 advanced NFL metrics (with definitional traps), free/paid data sources with licensing rules, a ranked gap analysis for the Elo-based engine (v5.2.7), and a 10-account engagement plan.
## Key metrics/methods (formulas where given, else "not specified")
- EPA/play (team): change in Expected Points per play; filter garbage time and kneels.
- Dropback EPA / Rush EPA; Success rate — three competing definitions (nflfastR EPA>0, Football Outsiders 40/60/100, Connelly 50/70/100); never mix.
- DVOA: per-play value vs situational average, opponent-adjusted; 0% = average. DAVE: DVOA blended with preseason forecast, decaying weight (verified: Week 1 2026 was 83% prior on offense, 98% on defense/ST).
- CPOE: completion rate minus expected rate given throw difficulty. EPA+CPOE composite canonical weighting UNVERIFIED.
- PRWR/PBWR (ESPN): pass rush win within 2.5s / pass block sustain for 2.5s+. PFF research note: pressure CREATION is the stable skill; sacks are the noisy outcome.
- Red-zone TRIP rate is the sticky part (conversion is near-noise per Schatz's critique); raw 3rd-down conversion "nearly meaningless" per a 2012 hierarchical-Bayes study — use early-down success / all-downs efficiency instead.
- Turnovers regress hard to zero; model the process (turnover-worthy plays, fumble recovery rates, INT vs expected), never carry raw margin.
- Wind/weather: nonlinear, interacts with stadium/roof/direction; HIGH for totals, LOW for moneyline; never a flat deduction. Bye-week edge largely VANISHED post-2011 CBA (2024 analysis).
## Data sources named
- Free/legal foundation: nflverse (nflfastR/nflreadR) — play-by-play 1999+, rosters, schedules, depth charts, injuries, snap counts, participation, NGS tables, PFR advanced mirror, FTN charting subset (2022+); code MIT, data CC-BY 4.0 ("nflverse"), FTN charting CC-BY-SA 4.0. RBSDM.com leaderboards; PFR free tier; The Spade (raycarp.com newsletter).
- Paid: PFF Pro tier $9.99/mo, $99.99/yr, $199.99/yr Pro (Sep 2026 price drop); FTN NFL Pro $109.99/yr (DVOA); Stathead (~$8/$16-mo 2020); SIS, SumerSports, TruMedia/Stats Perform, Sportradar, StatsDataIO — enterprise (Sportradar = NFL's official data-rights partner).
- Licensing reality: facts aren't copyrightable but compiled databases are; computing own EPA from nflverse is clean, republishing PFF grades is not; public reading is not redistribution; NGS raw tracking is enterprise-only.
## Findings (numbers and facts, not vibes)
- Engine context at the time: v5.2.7 Elo-based; 2026-09-13 factor audit found all signal picks single-source Elo (`sources:["elo"]`, `agreement:"SOLO"`); NFL has only ~70 settled picks ever; the ESTABLISHED blocker is CLV beat-close 23.0% vs 52.4%.
- Key research results: passing efficiency explains wins far more than rushing (~0.53-0.61 vs ~0.13-0.19); passing EPA predicts future point differential at r ~ 0.42 at 6 games better than success rate, though success rate stabilizes faster (~r = 0.60 by game 6); special-teams EPA gives ~+1.9% RMSE improvement (Wharton study); coaching aggressiveness prior worth ~0.5-1.5 pts/game.
- Top-5 ranked gaps: (1) opponent-adjusted EPA/play team ratings with dropback/rush split — "the single biggest structural upgrade"; (2) turnover regression / expected turnover differential — "the single biggest upgrade available to an Elo-based engine"; (3) OL vs DL pressure matchup (pressure rate, PBWR/PRWR-style features); (4) QB efficiency: EPA/dropback + CPOE; (5) market-relative calibration features: CLV tracking, consensus, line movement.
- Next tier: explosive-play differential, DAVE-style early-season shrinkage, situation-neutral pace + stadium wind modeling (top totals inputs), special-teams EPA, coaching aggressiveness, coverage/box splits, red-zone trip rate. PFF grades deferred until free stack is exhausted.
- Explicitly deprioritized: rest/bye coefficients, travel/time-zone/altitude (no verified coefficient), raw 3rd-down conversion (trap), rush EPA as team-strength driver.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: EPA/dropback + CPOE as the QB efficiency prior; powers injury/substitution (backup QB downgrade) modeling; QB EPA/play tiers (@KevinCole___).
- COACHING: 4th-down aggressiveness (go-rate vs WP-model recommendation) as a ~0.5-1.5 pts/game prior; aggressiveness correlates with roster quality.
- OL: Trenches as the most predictive matchup lens — pressure rate, PBWR/PRWR-style features, PRWR 2026 methodology update, RBWR/RSWR; pressure creation is stable, sacks are noise; @BrandonThornNFL OL tiers/True Sack Rate.
- TRUST-SIGNAL: The standing caveat that predicting team quality is not predicting covers and markets price public info; calibration-first framing; DAVE shrinkage addresses the thin-sample NFL calibration problem; engagement plan builds analyst relationships that surface methods early.
- SCHEME: Coverage/box-count splits ("this QB reads zone better than man"), personnel tendencies, situation-neutral pace, explosive-play differential, red-zone trip rate.
## Engine-actionable? (yes/no + one-line what)
Yes — implement the ranked top-5 gap list starting with opponent-adjusted EPA/play (dropback/rush split) and expected turnover differential, both computable free from nflverse, since passing efficiency out-predicts rushing ~0.5 vs ~0.15.
