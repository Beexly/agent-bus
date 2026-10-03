# docs/reasoning/week3-props.md
## What it is (1-2 sentences)
A Week 3 player-props surface build (`publishes_pick: false`; chat explains, does not vote) that regresses frozen projections toward actual stats using 2025 position-level slopes, applied to the Sunday DK salary slate (LAC@BUF example rowed in full). It explicitly does not rank players, pick winners, or join market prices.

## Key metrics/methods (formulas where given, else "not specified")
- Method: 2025 slope = how a frozen projection regresses toward the actual stat on that season block (yards for yard props, receptions for receptions). 2026 was not used to choose `w`; 2026 n/MAE/slope are watch rows only.
- Prop-family (2025, prop-level): passing_yards (n=583, MAE 68.04, slope 0.62308493, intercept 75.743, w=0.6); rushing_yards (n=2007, MAE 17.14, slope 0.83693636, intercept 5.979, w=0.3); receiving_yards (n=4844, MAE 16.18, slope 0.78031067, intercept 5.623, w=0.1); receptions (n=4844, MAE 1.234, slope 0.78955018, intercept 0.460, w=0.3).
- Position slopes (2025 by_position): passing_yards/QB 0.6231 (n=583, MAE 68.04); rushing_yards/QB 0.6073 (n=583, MAE 11.63), rushing_yards/RB 0.8273 (n=1424, MAE 19.39); receiving_yards/RB 0.6504 (n=1424), TE 0.7753 (n=1150, MAE 15.04), WR 0.7546 (n=2270, MAE 20.73); receptions/RB 0.7302, TE 0.7856, WR 0.7939.
- 2026 watch row (slopes collapsed, NOT used for w): passing_yards n=34 MAE 84.15 slope 0.2472; rushing_yards n=115 MAE 22.8 slope 0.5120; receiving_yards n=289 MAE 21.33 slope 0.4822; receptions n=289 MAE 1.583 slope 0.5307.

## Data sources named
`data/gse-dataset/current/calibration-weights.json` (props), `data/gse-dataset/current/DKSalaries-Week3-SunMon.csv`, `data/gse-dataset/current/week3-context.jsonl` (LAC@BUF context: injuries, gameday 2026-09-27).

## Findings (numbers and facts, not vibes)
- Sunday main slate: 685 skill rows across 14 games (e.g., LV@NO 56, ARI@SF 52, HOU@IND 51, SEA@WAS 51, CIN@PIT 46, NYJ@DET 46); DST rows excluded.
- 2025 prop slopes all <1.0 (projections over-extrapolate): passing yards slope 0.623 is the most attenuated family (2026 watch slope collapses to 0.247 on n=34).
- RB rushing_yards slope 0.8273 is the most stable prop family; RB receptions slope 0.7302 is the least predictable of the reception families vs WR 0.7939.
- LAC@BUF rowed fully: 47 skill rows, 47 distinct DK IDs; LAC outs: Dalvin Tomlinson (DT, hamstring), Trey Pipkins (T, knee), Kayode Awosika (G, fibula), Elijah Molden (S, hamstring), Charlie Kolar (TE, forearm), Brenen Thompson (WR, quadricep); LAC questionable: Trey Lance (QB, groin), Rodney Shelley (CB, hamstring); BUF outs: Jordan Hancock (CB, hamstring), T.J. Sanders (DE, illness); BUF questionable: DJ Moore (WR, shoulder), Ed Oliver (DT, hip), Keon Coleman (WR, ankle), Ar'maj Reed-Adams (G, elbow).
- PHI@CHI (09/28) and ATL@GB (09/24) excluded from the Sunday surface; market prices not on file → agreement with posted player props impossible from these inputs.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Passing-yards projections attenuate hardest (slope 0.623, intercept 75.7) — QB passing-yard lines need the largest regression of any prop family. (QB-BEHAVIOR)
- QB rushing_yards slope 0.6073 vs RB 0.8273 — QB rushing production is far less sticky than RB rushing production. (QB-BEHAVIOR)
- LAC down two starting O-linemen (T Pipkins knee, G Awosika fibula) plus starting safety Elijah Molden for LAC@BUF — trench/injury inputs for game-level read. (OL)
- No market price join → no pick possible from this surface alone; honesty boundary held. (TRUST-SIGNAL)
- Position-level slopes applied per player row (not prop-level slope) — granularity doctrine for calibration. (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — 2025 position slopes are ready-to-use regression weights for player-prop projections once real prop prices are available to price against.
