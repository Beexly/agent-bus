# ops/FREE_MODE_INGESTION_HEALTH.md
## What it is (1-2 sentences)
Operational fix record for GSE's free-mode ingestion health reporting: after `THE_ODDS_API_KEY` was intentionally deactivated (~2026-07-25), `/api/health` reported `status: degraded` for 5+ days because free-path jobs never wrote `IngestionRun` rows, even though free settlement was the intended path.
## Key metrics/methods (formulas where given, else "not specified")
- Ingestion health = a recent `IngestionRun` row with `status = SUCCESS` and `completedAt` within the freshness SLA (240m mentioned in the heartbeat section).
- New writers call `recordFreeIngestionRun()` (shared helper in `apps/web/lib/data-sources/free-ingestion-run.ts`): `/api/cron/free-spine-health` (every 2h), `/api/cron/refresh-player-stats` (every 30m after nflverse weekly-stats primary ingest ok), and `persistFreeScores()` after free score stamp cycles.
- `oddsInserted` may be `0`; health probe only requires a recent SUCCESS row, not odds rows.
## Data sources named
The Odds API (deactivated key path returns `200 { skipped: "no-odds-key" }`); nflverse weekly-stats (primary ingest); free multi-sport score probe (free-spine-health); free settlement/free score stamp cycle.
## Findings (numbers and facts, not vibes)
- `lastSuccess` was frozen at 2026-07-25 → `status: degraded` for 5+ days despite free settlement being the intentional path.
- The fix does not re-enable or require a paid Odds key, does not invent games/scores, and does not flip `LIVE_BOARD`, `PUBLISH_LEDGER`, `PUBLIC_PICKS_ENABLED`, `PERFORMANCE_STATS_ENABLED`, nor change the public `/api/health` response shape.
- Troubleshooting table: `THE_ODDS_API_KEY` present-but-deactivated makes settle-picks take the paid path (fails closed) and free-score SUCCESS never gets written — fix is to delete the Production Odds key.
- Automated dual-check: `node scripts/ops/verify-cron-secret.mjs` (never prints secret).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — pure ops/health-check documentation; no modeling or sports-domain content.
## Engine-actionable? (yes/no + one-line what)
No — ops infrastructure doc, no prediction-relevant intelligence.
