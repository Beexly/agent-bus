# arxiv-program/research/2026-09-21/arxiv-deep/1129-instrumented-mouthguards-ncaa-football.md
## What it is (1-2 sentences)
A measurement study of true-positive head acceleration events (HAEs) in NCAA Division I football using instrumented mouthguards — 35 players, 4 games, 1,101 triggered events video-adjudicated to 828 true positives — reporting per-player-game incidence stratified by offense/defense and position at multiple PLA/PAA thresholds.
## Key metrics/methods (formulas where given, else "not specified")
- Trigger >8g any axis; analysis thresholds 5g PLA, 400 rad/s² PAA at head center of gravity
- Incidence per player-game at {>10g, >30g PLA} × {>1.0, >2.0 krad/s² PAA}; targets: sensitivity, PPV under three FP definitions
- Method: instrumented mouthguards + video adjudication of all triggered events; ≥90% wear-time criterion (64 eligible player-games)
## Data sources named
35 NCAA D-I male players, 2022 Mountain West season, single team, 4 games; proprietary device filtering pipeline; no public data/code
## Findings (numbers and facts, not vibes)
- Sensitivity 0.89 (95% CI 0.86–0.92); PPV 0.98/0.93/0.76 depending on FP definition (wide range is itself a finding)
- Per player-game: >10g PLA: defense 11.2, offense 11.3; >30g PLA: defense 1.6, offense 2.6; >1.0 krad/s² PAA: defense 5.5, offense 6.9; >2.0 krad/s² PAA: defense 0.9, offense 1.4
- Counterintuitive asymmetry: offense shows higher high-magnitude incidence than defense at every threshold above the lowest
- Exposure ≠ injury: paper makes no concussion link; small sample (35 players, 1 team, 1 season); NFL external validity limited
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: player-availability modeling — position×side exposure priors (e.g. 2.6 >30g events/game for offensive skill) as features in DNP/absence models; performance-degradation hypothesis: high-cumulative-exposure skill players may show late-season efficiency decay (YAC, broken tackles); HARD constraint: never present HAE rates as injury probabilities
## Engine-actionable? (yes/no + one-line what)
Yes — build exposure-prior table with the FP-definition uncertainty band and test cumulative-exposure features in next-week absence models; gate: ≥0.003 log-loss improvement on 2025 holdout with monotone direction across positions.
