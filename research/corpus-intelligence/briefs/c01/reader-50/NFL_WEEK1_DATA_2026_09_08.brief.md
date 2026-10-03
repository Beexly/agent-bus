# ops/NFL_WEEK1_DATA_2026-09-08.md
## What it is (1-2 sentences)
Agent 5 (NFL Specialist) measurement report from 2026-09-09 covering every NFL Week 1 fixture (16 games, 2026-09-09→09-16), the live availability of season-level nflverse satellite assets (rosters, depth charts, injuries, NGS, player-week/PBP/snap counts), and three found-then-fixed pipeline gaps — all verified by public curls and static code reading, with no production DB access.

## Key metrics/methods (formulas where given, else "not specified")
No model metrics or formulas in this file. Odds constraint: `MIN_BOOKMAKERS = 2` (`packages/prediction-engine/src/constants.ts`) fails for every market on a single-book feed, so only SPREAD survives (consensus = sign of the line, not a priced-book-count gate). Live `marketCoverage.sports[americanfootball_nfl]` on 2026-09-09T00:09Z (72h window): games 6, MONEYLINE 0/none, SPREAD 2/covered, TOTAL 0/none.

## Data sources named
- ESPN public scoreboard API (`site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=...`), per-Eastern-day queries 20260909–20260916
- nflverse-data GitHub release assets: `rosters/roster_2026.csv` (HTTP 200, 2,956 rows, includes Aaron Rodgers/PIT), `depth_charts/depth_charts_2026.csv` (HTTP 200, 505,423 rows, `dt` as-of 2026-09-08T11:56:57Z), `injuries/injuries_2026.csv` (HTTP 200, only 12 rows, one team — NE — practice reports still rolling in Tue), `nextgen_stats/ngs_passing.csv.gz` (HTTP 200, 0 rows with season == 2026 — expected, play-derived), `stats_player/stats_player_week_2026.csv` / `pbp/play_by_play_2026.csv` / `snap_counts/snap_counts_2026.csv` (all HTTP 404; 2025 equivalents 200)
- Production truth surface `/api/ops/public-surface-truth` (generatedAt 2026-09-09T00:09:32.298Z)
- Code paths: `apps/web/lib/ingestion/depth-charts.ts`, `injuries.ts`, `next-gen-stats.ts`, `nflverse.ts`, `catalog.ts`, `apps/web/app/api/cron/refresh-player-stats/route.ts`, `packages/data-ingestion/src/nflverse-season.ts:69-83`, `kalshi-series.ts`, `galaxy-kalshi-book.ts`

## Findings (numbers and facts, not vibes)
- All 16 Week 1 games listed by ESPN with exactly one book (DraftKings inline) each; full spread/O-U table captured in file (e.g., NE @ SEA SEA -3/44.5; SF @ LAR LAR -3.5/48.5; KC -2.5/43.5 vs DEN; JAX -8.5 vs CLE)
- ESPN's `dates` param keys on Eastern game-day, not UTC: `dates=20260911` and `20260912` return 0 games; SF @ LAR (2026-09-11T00:35Z UTC = 2026-09-10T20:35 ET) files under the 09-10 slate — schedule seeds must walk Eastern days, not UTC
- Found + fixed C-244: one shared `season` variable stood the entire satellite bundle down (`skipped-prior-season`) because `player_stats_week_2026` doesn't exist yet, blocking already-published 2026 depth charts and injuries; fix commit `f2dfa7bc0` gives each satellite its own labelled season (ledger C-264 DONE)
- Open risk named: Kalshi team-abbreviation alias drift — ESPN `WSH`/`JAX`/`LAR` vs possible Kalshi `WAS`/`JAC`/`LA` — has no alias lookup in `galaxy-kalshi-book.ts`'s whole-word matcher (line ~182); internal normalizer `apps/web/lib/nfl/team-resolver.ts` carries JAX/JAC and LAR/LA aliases but is not imported by that path; affected Week 1 games: WSH@PHI, SF@LAR, CLE@JAX
- NGS 2026 assets exist but are play-derived and will only populate after games are played (2026-09-10 onward)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: no player/coaching content — purely fixture + pipeline measurement.
- COACHING (minor, INFERENCE): the file confirms the engine ingests ESPN schedule data with Eastern-day anchoring and DraftKings inline lines (16 Week 1 spreads/totals captured) — these feed the odds-consensus layer, not tendencies.
- OL (minor, INFERENCE): nflverse NGS passing/rushing/receiving pipeline exists with per-variant ingestion (`ingestNextGenStats`) and will be the pressure/time-to-throw source once games are played.

## Engine-actionable? (yes/no + one-line what)
No — pipeline-ops record; the Week 1 lines were fixture context for a launch measurement, now stale. The Kalshi abbreviation-drift risk (WSH/WAS, JAX/JAC, LAR/LA in `galaxy-kalshi-book.ts`) is an open wiring gap worth flagging to the owner of PR #724.
