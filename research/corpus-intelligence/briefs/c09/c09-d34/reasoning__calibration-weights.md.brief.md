# reasoning/calibration-weights.md
## What it is (1-2 sentences)
Locks in the GSE engine's frozen calibration weights: a half-PPR projection blend weight chosen by lowest 2024 MAE, 2025 inverse-MAE position weights, per-prop blend weights, and an Elo game-probability model benchmarked against a devigged-price baseline.
## Key metrics/methods (formulas where given, else "not specified")
- Blend rule: half-PPR blend w = 0.1, chosen by lowest 2024 MAE then frozen; 2025/2026 data did not choose it.
- Position weights = 2025 inverse MAE normalized to sum 1 (harder-to-project positions get less weight; "not a probability").
- Bias defined as (pred − actual); reported slope/intercept per season.
- Game probability: Elo on 3,018 games, 2015–2025; Brier 0.2312, ECE 0.0338, drift |2025 − 2015–2024| = 0.0057; devigged-price baseline 0.2122 Brier.
## Data sources named
2024/2025/2026 half-PPR projection results (n = 4668 / 5427 / 323 rows), 2025 prop results by stat, Elo over 3018 NFL games 2015–2025, devigged-price moneyline baseline.
## Findings (numbers and facts, not vibes)
- Half-PPR: 2024 MAE 4.530 (bias −0.447, slope 0.798, intercept 1.968); 2025 MAE 4.110 (bias −0.207, slope 0.794, intercept 1.551); 2026 MAE 5.266 (bias +0.204, slope 0.497, intercept 3.448) — 2026 slopes collapsing toward 0.5 indicate predictions near random INFERENCE: small 2026 n (323).
- Position weights (2025): TE 0.329 (n=1150, MAE 3.162, easiest), RB 0.250 (n=1424, MAE 4.164), WR 0.269 (n=2270, MAE 3.858), QB 0.152 (n=583, MAE 6.827, hardest).
- Prop weights: passing_yards w=0.6 (2025 MAE 68.036, slope 0.623; 2026 slope 0.247), rushing_yards w=0.3 (2025 MAE 17.139, slope 0.837), receiving_yards w=0.1 (2025 MAE 16.180, slope 0.780), receptions w=0.3 (2025 MAE 1.234, slope 0.790). All 2026 slopes degrade sharply.
- Elo Brier 0.2312 does NOT beat the devigged-price baseline (0.2122) → the calibration contract must not come back VALIDATED.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — engine calibration: frozen weight schedule, position-level difficulty ordering, and a hard gate that Elo-vs-baseline must clear before any validation claim.
## Engine-actionable? (yes/no + one-line what)
Yes — use the exact position weights (TE .329, RB .250, WR .269, QB .152) in the half-PPR blend and treat any game-probability model with Brier ≥ 0.2122 as unvalidated until it beats devigged prices.
