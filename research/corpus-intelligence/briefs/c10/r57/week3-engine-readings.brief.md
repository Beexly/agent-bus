# reasoning/week3-engine-readings.md
## What it is (1-2 sentences)
The engine's Week 3 game-edge readings: per-family priors, per-game edges for all 16 Week 3 matchups, and a full decomposition of the largest edge (LAC at BUF, 0.303) into its eight live signal parts.
## Key metrics/methods (formulas where given, else "not specified")
- Edge = sum of (prior x signed signal) across live families; dark families contribute 0 and live families are NOT scaled up to hide it. Brier, Kelly, Bradley-Terry are meters only.
- On-field efficiency blend (shrunk, opponent-adjusted): 55% pass EPA residual, 15% rush EPA residual, 15% CPOE, 10% explosive-pass rate, 5% interception luck. Prior season = 2025; observation = 2026 weeks 1-2.
- Airwave family: prior 0.05 = questionable/doubtful skill wire (not a second copy of the out list); SiriusXM audio not captured.
- Family priors: on_field_efficiency 0.14, scheme_play_design 0.12, availability 0.12, schedule_and_body 0.08, historical_strength 0.08, trench_personnel 0.05, market_context 0.05 (context_not_objective), chemistry 0.04, airwave 0.05, calibration_meters 0.03 (meter), narrative_contract 0.03 dark, weather_physics 0.07 dark, coaching 0.06 dark, officials 0.04 dark, bio_nutrition 0.04 dark, social 0.00 dark. Dark share by design: 0.24.
## Data sources named
- Packages-internal: packages/prediction-engine/src/reasoning/part-selector.ts (selectPart), live-edge-registry.ts (8 live families); 2025 season prior + 2026 weeks 1-2 observations.
- Questionnaire/doubtful wire ("airwave"); no OpenRouter call (openrouter_unconfigured).
## Findings (numbers and facts, not vibes)
- All 16 Week 3 edges: LAC at BUF 0.303 (largest), NYJ at DET 0.200, ARI at SF 0.109, ATL at GB 0.106, NE at JAX 0.105, HOU at IND 0.075, MIN at TB 0.072, LV at NO 0.055, LA at DEN 0.024, CAR at CLE -0.009, PHI at CHI -0.010, BAL at DAL -0.029, TEN at NYG -0.028, CIN at PIT -0.039, SEA at WAS -0.156, KC at MIA -0.154.
- Coverage 0.63-0.68 across all games; dark column 0.24-0.29; rest edge column ranges -1 to 3.
- Officials family is DARK on the 2025 holdout, including games that have a referee name.
- LAC at BUF decomposition: on_field_efficiency signed 1.000 -> 0.140; availability 0.667 -> 0.080; historical_strength 0.556 -> 0.044; trench_personnel 0.749 -> 0.037; scheme_play_design 0.034 -> 0.004; schedule_and_body 0.088 -> 0.007; chemistry 0.000 -> 0.000; airwave -0.208 -> -0.010; parts sum exactly to the 0.303 edge.
- Cycle-14 companion read (overnight-audit-2026-09-27): same BUF/LAC matchup from published 2026 rosters — BUF mean APY 5.311M vs LAC 5.442M, p_home 0.520809, signed +0.041619 (narrative_contract, dark, not in the 0.303 edge).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Edge = sum(prior x signed) with dark families at 0 and no re-scaling — the 0.303 LAC@BUF edge is fully decomposed and parts sum exactly; reproducible by construction.
- [SCHEME] On-field efficiency formula: 55% pass EPA residual / 15% rush EPA residual / 15% CPOE / 10% explosive-pass rate / 5% interception luck — opponent-adjusted, shrunk, 2025 prior + 2026 W1-2 observation.
- [COACHING] Coaching family is DARK (prior 0.06, coefficient 0) — named but not in the sum.
- [OL] Trench_personnel is a live premise (0.05): LAC@BUF signed +0.749 -> +0.037 points of the edge.
- [OTHER] Airwave (Q/doubtful skill wire) at prior 0.05 is the only novel-family input here; availability 0.667 is the second-largest edge contributor.
## Engine-actionable? (yes/no + one-line what)
Yes — the on-field efficiency blend weights (55/15/15/10/5) and the dark-share discipline (0.24, no re-scaling) are a concrete, copyable prior-weighting spec for GSE's game-edge sum.
