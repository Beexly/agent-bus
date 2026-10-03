# OL/Injury Data Gap — Agent A (MiMo v2.6 Flash) Findings
Date: 2026-10-02. All sources verified live today. Analytical work done through `xiaomi/mimo-v2.6-flash` via OpenRouter.

## HEADLINE: the gap closes FREE

**nflverse publishes a live 2026 injuries dataset.** `injuries_2026.csv` in the nflverse-data
`injuries` release: **1,025 rows, weeks 1–4, all 32 teams**, with `gsis_id`, `report_status`
(Out/Questionable/Doubtful), and `practice_status` (Full/Limited/Did Not Participate).
**149 OL rows** (T:73, G:57, C:19). This is the official-report grid the funnel-kill test needs,
joinable to pbp on `gsis_id`. The "zero OL/injury columns" finding was about pbp only —
the separate injuries dataset was overlooked.

Raw pull archived: `data/alexandria/nflverse-injuries-2026.csv.gz`

## Ranked sources (MiMo analysis + my verification)

**1. nflverse injuries_2026.csv — PRIMARY (FREE)**
Coverage: weeks 1–4, 1,025 rows, 32 teams, 149 OL rows. gsis_id join key.
Freshness: weekly snapshot (release updates ~weekly in-season).
Cost: $0.
Biggest limitation: no timestamp/vintage column — weekly snapshot only, no intra-week
practice-day deltas. (Schema has no `date_modified` at all; the 2025 "null timestamps"
caveat from the corpus doesn't apply to this schema.)

**2. Firecrawl Alexandria `nfl-com` `sports-league-data/injury_report` — PRACTICE DETAIL (5 credits/call)**
Coverage: official per-day practice grid (Wed/Thu participation) + game designation, weeks 1–4,
gsis_id on every player. Verified: 291 reports week 4, 36 OL.
Freshness: per-day within the week.
Cost: 5 credits per league-wide pull.
Biggest limitation: paid; week 5 not yet published (weeks_available 1–4 as of 2026-10-02).

**3. ESPN hidden API `teams/{id}/depthcharts` — STARTER ID (FREE)**
Coverage: per-team depth chart; offensive group exposes `lt/lg/c/rg/rt` with ranked athletes
(starter = first). Verified live for CLE (LT1: Spencer Fano).
Freshness: live.
Cost: $0, no key. Endpoint: `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/{id}/depthcharts`
Biggest limitation: no gsis_id — name→ID join needed (Jr./suffixes are the failure point).

**4. Sleeper `/v1/players/nfl` — SUPPLEMENT (FREE)**
Coverage: 12,229 players, 813 with `injury_status`, 50 OL injured. Verified live (14.6MB dump).
Freshness: live.
Cost: $0, no key.
Biggest limitation: `practice_participation` nearly empty (1 player) — status only, no practice grid.

**5. ESPN hidden API `/nfl/injuries` — FALLBACK SNAPSHOT (FREE)**
Coverage: 800 rows, 32 teams, current snapshot. Verified live (8.7MB).
Freshness: current-only, no history.
Cost: $0, no key.
Biggest limitation: no practice detail, no gsis_id, includes IR/PUP rows the engine must filter
(else double-counts absorbed absences).

**6. Alexandria `nfl-com` `team_roster` — ID AID ONLY (5 credits/team)**
Coverage: 13–14 OL per team with gsis_id. Verified for KC, CLE.
Cost: 5 credits/team = 160 credits for all 32. NOT recommended at full scale — gsis_ids are
obtainable free via sources 1+2.

## Recommended stack

- **Primary:** nflverse injuries (source 1) for weekly OL `report_status`/`practice_status` + gsis_id → pbp.
- **Practice detail:** Alexandria injury_report (source 2) when per-day participation matters or nflverse refresh lags.
- **Starter ID:** ESPN depthcharts (source 3) → map displayName to gsis_id via source 1/2.
- **Sanity check:** ESPN injuries (5) midweek; Sleeper (4) as tiebreaker.

## Gotchas (honest)

- Sources 1–2 cover weeks 1–4 only. Preseason/weeks before 1 have no official-report data —
  the engine must DataGapError (never zero-fill) outside covered weeks.
- No intra-week timestamps anywhere free. The Wed→Thu practice delta (the actual leading
  indicator for Sunday) is only visible via source 2's per-day grid or re-pulling ESPN midweek.
- Name-matching (source 3/5 → gsis_id) is the join's failure point. Spot-verify against
  source 2 before trusting a starter→injury link.

## T1 funnel-kill implication

The kill's missing leg was "OL injury → quick-game compensation → pressure neutralization"
with no real OL/injury feed. That leg is now fillable: source 1 gives weekly OL
report/practice status with gsis_id; source 3 gives the starters. The T1 real-data gate can
move from PARTIAL toward VALIDATED once wired.

## Wire-up instructions

New module `ol/` at repo root of the build (sibling of `coaching/`, `qb-behavior/`):

1. **ABC first** — add `OLProvider` to `integration/providers.py` following the existing
   `CoachingProvider` pattern:
   - `get_ol_status(team, week, season) -> list[OLPlayerStatus]` — one row per OL roster
     member: gsis_id, position (T/G/C), starter flag, practice_status, report_status.
   - `get_ol_starters(team, week, season) -> list[gsis_id]` — the 5 starters from depth chart.
   - Raise `DataGapError("ol", ...)` for weeks with no coverage (preseason, future weeks).
2. **Implementation** — `ol/provider.py` (`OLEngineProvider`):
   - `ol/data/injuries_weekly.csv` — normalized from nflverse injuries (filter position in
     T/G/C; columns: season, week, team, gsis_id, position, full_name, report_status,
     practice_status). Refresh script `ol/build/fetch_injuries.py` pulls the release asset.
   - `ol/data/starters_weekly.csv` — from ESPN depthcharts (team, week, position_slot
     lt/lg/c/rg/rt, display_name, gsis_id resolved via injuries table, rank).
   - Starter resolution: depthchart rank 1 → match display_name to injuries table
     (normalize suffixes: Jr/III/strip); unmatched → DataGapError, never fuzzy-guess.
3. **Reasoning integration** — the L3 OL track in `reasoning/` consumes `OLProvider`
   via the existing provider registry (same pattern as `CoachingEngineProvider` in
   `coaching/provider.py`). The funnel-kill leg reads `get_ol_status` for the two teams
   and fires when a starter is Out/Doubtful or DNP-limited.
4. **Tests** — `ol/tests/` mirroring `coaching/tests/`: (a) schema/pinning tests on the
   archived CSVs, (b) a real-data T1 leg test asserting the OL leg resolves on week-4
   data, (c) a DataGapError test for week 5 (uncovered).
5. **Provenance header** on every file (see `coaching/provider.py` header format).

## Paid call log (Firecrawl Alexandria)

| # | Provider | Capability | Options | creditsCost |
|---|----------|-----------|---------|-------------|
| 1 | nfl-com | sports-league-data/team_roster | team=KC, position=OL | 5 |
| 2 | nfl-com | sports-league-data/team_roster | team=CLE, position=OL | 5 |
| 3 | (parent agent) nfl-com | sports-league-data/injury_report | 2026 REG week 4 | 5 |
| 4 | (parent agent) espn-com | sports-data/scoreboard | football/nfl 2026 w5 | 5 |

My spend: 10 credits. Discovery + find-tools calls: 0 credits (free). OpenRouter MiMo calls: ~$0.0009.

## Raw pulls (in `data/alexandria/`)

- `nflverse-injuries-2026.csv.gz` — the primary dataset (1,025 rows)
- `injury-week4.json` — Alexandria official practice grid, week 4 (291 reports)
- `injury-week5.json` — empty (week 5 not yet published; weeks_available 1–4)
- `roster-KC-OL.json`, `roster-CLE-OL.json` — Alexandria OL rosters with gsis_id
- `espn-injuries-20261002.json` — ESPN hidden API snapshot (800 rows)
- `espn-depthchart-CLE-20261002.json` — ESPN depth chart, CLE
- `sleeper-players-20261002.json` — Sleeper player dump (12,229 players)

## Where I stand

Mission complete within time-box. The #1 finding (nflverse 2026 injuries live) was verified
end-to-end: downloaded, parsed, OL rows counted, schema confirmed. Everything above is
measured, not inferred. The remaining work is the `ol/` module build — that's the coding
agent's lane, and the wire-up instructions above are written for it.
