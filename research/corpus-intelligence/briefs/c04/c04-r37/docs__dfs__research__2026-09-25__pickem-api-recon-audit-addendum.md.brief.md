# docs/dfs/research/2026-09-25/pickem-api-recon-audit-addendum.md
## What it is (1-2 sentences)
A live re-audit pass (2026-09-25 ~22:25–22:30 UTC, branch `motif/pickem-intake-audit-2026-09-25`) re-verifying all five pick'em API intake modules (PrizePicks, Underdog, DK Pick6, Sleeper, Action Network) endpoint-by-endpoint with curl, confirming parsers against live schemas, and checking for public websocket feeds; Drafters remains PARKED per Garrett 2026-09-25.

## Key metrics/methods (formulas where given, else "not specified")
- not specified (no formulas; method = live curl re-verification + field-by-field parser checks + 48/48 vitest tests + tsc clean).

## Data sources named
PrizePicks (`partner-api.prizepicks.com/projections?league_id=9`), Underdog (`api.underdogfantasy.com/v2/over_under_lines`), DK Pick6 (`api.draftkings.com/pick6/v1/...`), Sleeper (`api.sleeper.app/v1/projections/nfl/regular/2026/4`), Action Network (`api.actionnetwork.com/web/v1/scoreboard/nfl`).

## Findings (numbers and facts, not vibes)
- PrizePicks: 200, 8.7 MB, 7,561 projections; league map re-verified via `/leagues` (NFL=9, NBA=7, CFB=15, MLB=2, WNBA=3, NHL=8, PGA=1, TENNIS=5, SOCCER=82, F1=125, BOXING=42, WORLD_CUP=241) — all match module constants; no drift.
- Underdog: 200, 11.9 MB, 4,290 active lines / 539 players; `stat_value` and prices arrive as strings (parser coerces); legacy `/beta/v5` still 426, wrong `product=` values still 400; no drift.
- DK Pick6: all endpoints 200; pickgroup 153812 = NFL "All Day" (153813 = PHI @ CHI standalone); pickcards 28 cards, schema matches (`pickableId`, `entities[0].dkId`, `activePickableMarkets[].pickSixMarketId/targetValue/isPaused/isLive`); payout tiers match; no drift.
- Sleeper: projections endpoint 200, 628 KB, 9,422 players; stats endpoint 200, 36 KB; known keys (`adp_dd_ppr`, `pts_ppr`, `pts_half_ppr`, `pts_std`, `gp`, `gms_active`, `pos_rank_*`) all present; no drift.
- Action Network: DRIFT FOUND AND FIXED — (1) endpoint now 403s bare curl User-Agents via CloudFront, returns 200 (~1.59 MB, 16 games) with browser-like UA; (2) `season` is now numeric (2026), `line_status` is now an object `{over:0, under:0, ...}` — parser updated; (3) `teams` array order is unstable (one game `[away, home]`, next `[home, away]`) — parser now resolves away/home via `away_team_id`/`home_team_id`, falling back to index order only when ids absent.
- Websocket check: no public no-auth websocket/live-socket feed found for any of the five platforms (DK Pick6 production JS bundles grepped: zero `wss://`/WebSocket/EventSource/socket.io/Pusher/Ably references; live tracking is REST polling) — nothing wired; recommendation: revisit only on a concrete verified no-auth socket URL.
- 48/48 vitest tests pass (incl. 3 new drift-regression tests for Action Network); tsc clean on audited files (only pre-existing errors in unrelated files remain).
- Env flags unchanged, default-OFF: PRIZEPICKS_INTAKE_ENABLED, UNDERDOG_PICKEM_INTAKE_ENABLED, DK_PICK6_INTAKE_ENABLED, SLEEPER_PROJECTIONS_INTAKE_ENABLED, ACTION_NETWORK_SCOREBOARD_INTAKE_ENABLED.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pure intake-infrastructure recon (API endpoints, schemas, env flags) — no player, coaching, or scheme content: OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — consume the verified live schemas and the Action Network drift fixes (browser UA requirement, numeric season, object line_status, team-id-based away/home resolution) as ground truth whenever pick'em line-movement intake is enabled, and re-run the live curl verification after any Pick6 deploy or Action Network schema change.
