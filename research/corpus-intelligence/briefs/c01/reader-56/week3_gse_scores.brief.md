# reasoning/week3-gse-scores.md
## What it is (1-2 sentences)
Week-3 scoring output of the GSE engine: calibration statistics and per-game elo/market/score/edge rows for all 16 games; every game scored WATCH, publishablePick true count 0.
## Key metrics/methods (formulas where given, else "not specified")
- Calibration fed to the contract: n=3018, ECE=0.0338, Brier=0.2312, baseline=0.2122, drift=0.0057.
- Score = action-quality number 0–100, NOT a win probability.
- Position weights from 2025 half-PPR inverse MAE: QB 0.1522488766223285, RB 0.2496028856660058, TE 0.32871756046821105, WR 0.2694306772434547.
## Data sources named
- None new (engine output; 2025 half-PPR inverse MAE for position weights).
## Findings (numbers and facts, not vibes)
- All 16 games WATCH with publishablePick false; score values clustered at 54.0 (11 games), 39.8 (4 games: HOU@IND, MIN@TB, NE@JAX, PHI@CHI), 47.5 (LV@NO).
- Largest positive edges: CIN@PIT 0.234, CAR@CLE 0.171, KC@MIA 0.169; largest negative: NE@JAX -0.104, MIN@TB -0.074.
- LAC@BUF: elo 0.778, market 0.741, score 54.0, WATCH, edge 0.037 (note: the live-part edge in parent-still-moves-20260926.md for the same game is 0.30259224777263855 — different edge definition/contract stage; flag as INFERENCE-worthy cross-file check).
- TE carries the highest position weight (0.3287), QB the lowest (0.1522).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Calibration diagnostics (ECE 0.0338, Brier 0.2312 vs baseline 0.2122, drift 0.0057, n=3018): OTHER (engine calibration state, not a behavioral signal).
- Position weights from inverse MAE (TE 0.3287 > WR 0.2694 > RB 0.2496 > QB 0.1522): OTHER (DFS/fantasy weighting prior).
## Engine-actionable? (yes/no + one-line what)
yes — Use the calibration row (ECE, Brier, baseline, drift, n) and position weights as the canonical Week-3 engine state snapshot; reconcile the edge-definition mismatch with the reasoning-layer edge (0.3026) before publishing any pick.
