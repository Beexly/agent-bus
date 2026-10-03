# docs/ops/archive/prompts/HISTORICAL_DATA_AND_PROJECTIONS_QUEUE.md
## What it is (1-2 sentences)
Founder-directed autonomous work queue (2026-06-14) to load every prior NFL season's data, backtest against real outcomes, and power validated 2026 projections — all six queue items shipped and committed.
## Key metrics/methods (formulas where given, else "not specified")
- Calibration measurement: de-vig closing moneylines -> real Brier/ECE/reliability curve vs actual results at `/api/calibration/market-backtest`.
- Projections: recency + games-weighted, regressed, backtested vs a carry-forward baseline; Pro-gated `/api/projections` with measured error.
- Reframe named explicitly: historical seasons are settled; nflverse `schedules` carries closing lines (`spread_line`, `total_line`, moneylines) AND final scores back to 1999 — the real (forecast, outcome) archive.
## Data sources named
nflverse schedules/games (closing lines + results back to 1999), player stats/snaps/injuries backfill, depth charts (both column schemas, all 5 models).
## Findings (numbers and facts, not vibes)
- All six queue items shipped with commit hashes: gsis->Player crosswalk (4410e4e), historical schedules ingestion (47fb125), backtest + calibration report (ee98361), multi-season player-stats backfill (a2c7b54), depth charts (4c2ff78), 2026 projections (this commit).
- Branch `claude/zealous-noether-inaaa3`; no merge/deploy (owner-gated); backfills needed a real-DB deploy run to fill calibration/projection surfaces (honest empty states until then).
- Hard rules: no fake data, every record clearance-gated + rights/freshness-stamped; gate (typecheck && lint && build && test) green before every commit; pricing-into-live-confidence is a deliberate MODEL_VERSION step.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: no-fake-data rule, rights/freshness stamping, honest empty states on unfilled surfaces.
- OTHER: hard dependency on the (forecast, outcome) archive back to 1999 for any calibration claim; de-vig closing ML as the baseline any engine probability must be compared against.
## Engine-actionable? (yes/no + one-line what)
Yes — historical closing lines + results back to 1999 are the settled calibration archive; engine Brier/ECE must be measured against the de-vig closing moneyline baseline from this pipeline before any claim of edge.
