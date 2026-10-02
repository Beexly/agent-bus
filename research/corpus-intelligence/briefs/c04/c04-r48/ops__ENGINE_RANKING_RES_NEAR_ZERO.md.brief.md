# docs/ops/ENGINE_RANKING_RES_NEAR_ZERO.md
## What it is (1-2 sentences)
A short 2026 ops note diagnosing the GSE engine's ranking failure: Murphy resolution ≈ 0 means forecasts barely rank winners vs losers, the RED eligibility state is correct, and masking it with calibration adjustments is forbidden. It defines the path to PROVEN via per-group resolution artifacts and edge-filtered re-measurement.
## Key metrics/methods (formulas where given, else "not specified")
- Live diagnosis: Murphy resolution ~0.002, Brier ~0.275, ECE ~0.11 → eligibility RED correct.
- Path to PROVEN: (1) per-group resolution artifact (`resolution-by-group.json` from calibration-metrics), (2) focus sports/markets with higher Res, de-emphasize bottom groups, (3) edge filter: only rows with |p − market_implied| ≥ ε, then re-measure Res, (4) market-relative features + sport models, (5) re-run frequentist floors → GREEN×K → AUTO_PUBLISH once. No floor lowering.
## Data sources named
- calibration-metrics cron (produces `resolution-by-group.json`); market implied probabilities (for the |p − market_implied| edge filter).
## Findings (numbers and facts, not vibes)
- Resolution ~0.002: forecasts barely rank winners vs losers — this is the bottleneck, not reliability.
- Maps (Platt/Temp/PAVA) fix reliability, not ranking; enabling adjustments to mask Res~0 is forbidden.
- No performance publish while RED; no floor lowering.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All items: OTHER (calibration/ranking eligibility internals; no player, coaching, or scheme content).
## Engine-actionable? (yes/no + one-line what)
Yes — apply the resolution diagnostic to DFS/pick work: when live Res ≈ 0, prioritize ranking features (market-relative, sport models) and per-group resolution analysis over calibration tuning.
