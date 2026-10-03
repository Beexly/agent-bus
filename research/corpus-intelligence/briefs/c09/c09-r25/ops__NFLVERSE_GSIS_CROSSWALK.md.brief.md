# ops/NFLVERSE_GSIS_CROSSWALK.md
## What it is (1-2 sentences)
The nflverse identity keying standard for GSE: canonical GSIS hub key, column aliases across assets, bridges for PFR/ESPN namespaces, season-matching rules, and the "never invent" law — implemented in `nflverse-id-crosswalk.ts` (`buildIdCrosswalk`/`resolveGsisId`/`resolveGsisFromRow`).
## Key metrics/methods (formulas where given, else "not specified")
Not specified (identity-mapping doc, no formulas). Bridges: `snap.pfr_player_id → roster.pfr_id → roster.gsis_id`; `ESPN feed → roster.espn_id → roster.gsis_id`; `PFR advstats rows → roster.pfr_id → roster.gsis_id`.
## Data sources named
nflverse pipelines/assets: rosters, injuries, players, weekly_rosters, player_stats, NGS (`player_gsis_id`), PBP roles (`*_player_id`), snap_counts (`pfr_player_id` ONLY — no GSIS), pfr_advstats/advstats_week_* (pressures, YAC, etc.), draft_picks, load_players()/DynastyProcess FF IDs; upstream `nflverse/nflverse-players` → `players_pfr_release` for pfr_id joins.
## Findings (numbers and facts, not vibes)
- Canonical key: `Player.gsisId` = nflverse `gsis_id` = weekly `player_id` = NGS `player_gsis_id` (same `00-…` space); snap_counts is PFR-keyed only and must bridge via roster.
- PFR id format: short string like `MahoPa00` — never coerce to number or invent from name.
- Law: empty vendor id or missing map entry → no GSIS substitute; season match by loading the stats season's roster first, prior season only to fill missing keys, first write wins.
- Season floor: before September, `resolveFootballStatsSeason` labels prior year (Aug 2026 → 2025); injuries often lack `injuries_{current}.csv` early — fall back one season with explicit note, never fabricate designations.
- Do not scrape pro-football-reference.com from GSE; ingest upserts players on `gsisId` only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: data-ingestion identity standard — foundational for any engine surface using nflverse/PFR data (snap-share, OL pressure rates, advanced weeks).
## Engine-actionable? (yes/no + one-line what)
Yes — identity crosswalk is the prerequisite for joining snap counts (PFR-only) to GSIS-keyed stats for OL/player analysis; note PFR IDs are strings, never numeric.
