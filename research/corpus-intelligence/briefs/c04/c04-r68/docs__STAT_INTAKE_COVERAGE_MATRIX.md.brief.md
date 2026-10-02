# docs/STAT_INTAKE_COVERAGE_MATRIX.md
## What it is (1-2 sentences)
A 2026-06-15 (updated 2026-09-18) audit of GSE's stat-intake coverage against the live nflverse release manifest, defining three intake tiers (CATALOG → CONSUMED → PERSISTED) and adding the WIRE-40 set of 40 new verified external inputs.
## Key metrics/methods (formulas where given, else "not specified")
- Coverage tally across 26 nflverse release tags × three-tier classification (CATALOG/CONSUMED/PERSISTED); 5 previously-missing CC-BY-4.0 datasets added to CATALOG (officials, trades, contracts, weekly_rosters, stats_team).
- WIRE-40: 40 inputs live-verified by unauthenticated GET on 2026-09-18 (~01:20–01:42 CDT); verdict tally 1 cleared, 14 cleared-with-attribution, 25 use-with-caution (deviation from original 4/14/22: Sleeper's 3 entries downgraded to use-with-caution).
## Data sources named
nflverse (pbp, player_stats, nextgen_stats, pfr_advstats, snap_counts, injuries, depth_charts, rosters, schedules, players, combine, espn_data QBR, draft_picks, officials, trades, contracts, weekly_rosters, stats_team, pbp_participation, ftn_charting, players_components, stats_player, teams/misc/blank/test), The Odds API (already wired), NWS weather, FTN StatsIQ, PFF public player-page grades (WIRE-40 #3, `pff-grades-client.ts`, fail-closed with sourceUrl+fetchedAt), Sharp Football (pace/offensive tendencies/personnel/coverage/OL/DL/offensive efficiency), Pregame consensus/odds history, Action Network, Covers odds history/live odds, VSiN splits, DK Network splits, DraftKings DFS lobby, Spreadspoke, KeepTradeCut dynasty, FantasyPros ECR, Underdog, 4for4 cheatsheet, DynastyProcess values, Sleeper feeds, TeamRankings, RotoWire RSS, DVOA archives (FTN/FO, Wayback 1983), FTN Charting OpenAPI spec.
## Findings (numbers and facts, not vibes)
- NGS (NextGenStat: separation/cushion/CPOE/rush-yds-over-expected) and PFR advanced (PfrAdvStat: QB pressure + yards before/after contact) were PERSISTED 2026-06-15 as systems of record (storage only, not yet scoring inputs).
- Persisted: player/stat/snap/injury/depth/historical-game/team-efficiency + NGS + PFR advstats; most analytics are CATALOG/CONSUMED but not PERSISTED (Phase-A gap).
- pbp_participation (formation/personnel/box): highest-value scheme/personnel dataset but on RIGHTS-HOLD (CC-BY-SA-4.0, needs share-alike/clearance review); ftn_charting excluded (CC-BY-SA-4.0).
- PFF: only public page-embedded grades (`__NEXT_DATA__`) in scope at CATALOG with per-ingestion citation (exact URL + fetch date/time); paid PFF API excluded. Sleeper feeds: free for non-commercial use only, no written commercial grant → use-with-caution.
- Genuine breadth gaps: college football data (cfbfastR/collegefootballdata.com — QB college→NFL scheme transition, "high" value) and Big Data Bowl tracking (Phase D), both outside nflverse needing their own rights path.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: college-data gap flagged specifically for QB college→NFL scheme transition.
- OL: Sharp Football OL/DL client (registry #4–10) at CATALOG/use-with-caution via `SHARP_FOOTBALL_INGEST`.
- SCHEME: pbp_participation unlocks formation/box/coverage context (rights-hold); Sharp coverage/personnel clients; `officials` (crew penalty/total lean) consumer recommended.
- TRUST-SIGNAL: WIRE-40 verdict framework (cleared / cleared-with-attribution / use-with-caution) with env-gated defaults — every `use-with-caution` source defaults OFF behind an env flag.
## Engine-actionable? (yes/no + one-line what)
Yes — recommended highest-value next: build CONSUMED/PERSISTED consumers for `officials` (crew penalty/total lean) and `contracts` (contract-year motivation) signals, clearance-gated and calibrated.
