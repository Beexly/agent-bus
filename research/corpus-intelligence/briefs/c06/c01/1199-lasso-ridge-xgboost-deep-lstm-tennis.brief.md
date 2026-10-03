# arxiv-program/research/2026-09-21/arxiv-deep/1199-lasso-ridge-xgboost-deep-lstm-tennis.md
## What it is (1-2 sentences)
A student-style tennis-momentum paper: quantifies "strategic" (multiplicative score updates) and "psychological" (Fibonacci streak weights) momentum, feeds them into elastic-net XGBoost and a dual Deep_LSTM to predict match outcomes/DBWP fluctuations, with MAML transfer across matches. Verdict in file: REJECT — single-final-centered dataset, standard machinery, no mechanism transferring to NFL.
## Key metrics/methods (formulas where given, else "not specified")
- WINJUD sliding-window point scoring with serve-decay β; strategic momentum ×(1.5^n) set-level / ×(1.2^n) game-level; psychological streaks via Fibonacci weights + ace/double-fault bonuses (parameters "extensively experimented", unstated)
- Lasso–Ridge XGBoost: standard elastic-net objective (Chen & Guestrin 2016); 80/20 split, 6 features; DBWP = derivative of interpolated win-rate windows; dual Deep_LSTM (L2+Huber, SELU, Adam); MAML 28 matches support / 3 query
## Data sources named
2023 Wimbledon men's final (Alcaraz vs Djokovic, match 1701) point-by-point + a handful of other Wimbledon matches by ID only; 2020 Tokyo Olympics table-tennis final hand-recorded "frame by frame" (tiny, unverifiable); provenance unstated (appears to be competition data)
## Findings (numbers and facts, not vibes)
- Abstract claims "94% accuracy" — unsupported by any table; Table 3 per-match accuracies: 1302: 0.780489, 1304: 0.897059, 1314: 0.837838, 1401: 0.844444, 1701: 0.776119 (78–90%)
- Deep_LSTM MSE 0.03529891–0.05927794 across 3 matches; MAML transfer declined (no numbers)
- No baselines vs Elo or bookmaker odds; momentum features computed from the same point outcomes being predicted (target-adjacent)
- Tennis momentum (serve alternation, set/game hierarchy) has no NFL analog
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: none transferable; at most a speculative future direction — live win-probability derivatives from market odds as an NFL "momentum" analog is a different paper, not this one
## Engine-actionable? (yes/no + one-line what)
No — REJECT in file; no NFL-applicable build.
