# ops/CRON_MATRIX.generated.md
## What it is (1-2 sentences)
Generated (2026-09-05) table of the 22 scheduled routes in `apps/web/vercel.json` with their cron schedules, verified with no drift between the two vercel.json copies; regenerated via `node scripts/ops/cron-matrix-from-vercel.mjs`.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — schedule inventory.
## Data sources named
- Source of truth: `apps/web/vercel.json` (the file Vercel actually reads).
## Findings (numbers and facts, not vibes)
- 22 scheduled routes. Highest-frequency engine-relevant cadences: `/api/cron/refresh-odds` every 15 min; `board-fill` at :02/:17/:32/:47; `generate-signal-slate` at :05/:20/:35/:50; `settle-picks` hourly at :20; `refresh-player-stats` every 30 min; `ingest-player-stats` daily 9:00; `calibration-metrics` every 6h at :40; `backfill-independent-trueprob` every 4h at :10; `backfill-team-efficiency` daily 7:15; `hydrate-cold-plane` daily 9:30; `free-spine-health` every 2h; `daily-truth` at 12:05.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: data-pipeline cadence map for engine signal freshness (odds, player stats, team efficiency, signal slate, calibration).
## Engine-actionable? (yes/no + one-line what)
Yes — use these cadences as the known freshness envelope when wiring live feeds (e.g., odds ≤15 min, signal slate 4×/hr, player stats 2×/hr).
