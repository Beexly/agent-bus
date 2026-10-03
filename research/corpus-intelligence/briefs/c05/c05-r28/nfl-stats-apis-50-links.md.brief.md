# props/research/2026-09-18/firecrawl/nfl-stats-apis-50-links.md
## What it is (1-2 sentences)
A curated inventory of 50 live-verified NFL statistics and advanced-metrics API/source URLs (each curl-checked 200/202 on 2026-09-18/19), organized into nflverse ecosystem, official NFL/NGS, tracking/combine data, sports data APIs, analytics sites, and reference portals. It is GSE's standing free/paid source map for the stat layer.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — this is a link inventory, not a methods doc. Notable access notes: ESPN hidden JSON API (`site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard`) returns 200 with plain curl but 403 with a browser UA; pro-football-reference/Stathead 403 bot-wall to curl; nflfastR/nfl4th pkgdown docs timed out; footballoutsiders.com dead.
## Data sources named
All 50 URLs (see file). Free backbone: nflverse suite (nflverse.nflverse.com, nflreadr, nflplotr, nflfastR, nfl4th, nflseedR repos + nflverse-data releases); NFL.com stats hub; Next Gen Stats (nextgenstats.nfl.com); Kaggle Big Data Bowl 2024/2025 tracking datasets; balldontlie.io; TheSportsDB. Paid/freemium: SportsDataIO, FantasyData, Stathead, PFF, FTN, SumerSports, Establish The Run, SIS (Sports Info Solutions), Sharp Football, 4for4, Footballguys, RotoWire. Benchmarks: RBSDM.com (Ben Baldwin EPA/playoff odds), TeamRankings, ESPN QBR, FantasyPros projections, FanDuel Research/NumberFire, The 33rd Team, Open Source Football.
## Findings (numbers and facts, not vibes)
- nflverse coverage: 1999-present play-by-play, rosters, schedules; nflverse-data repo holds versioned CSV/parquet drops GSE can pin/mirror.
- NGS site carries free tracking metrics (speed, separation, completion probability, expected YAC, aggressiveness); NFL Football Operations page documents NGS data definitions (schema context).
- The ESPN hidden scoreboard JSON endpoint is a no-key live scores/schedules/odds source, with the browser-UA 403 caveat documented.
- A companion historical-odds link list (`nfl-historical-odds-50-links.md`) and List A (`nfl-odds-apis-metrics-50-links.md`) are referenced but not present in the repo at read time — cross-list dedupe was not performed.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: every URL was empirically verified (curl 200/202) and excluded entries are named with reasons — verification-first sourcing practice matching the corpus program's provenance rules.
- QB-BEHAVIOR: NGS completion probability/aggressiveness, ESPN Total QBR as a QB-rating benchmark.
- SCHEME: situational/pre-snap tendency stats (Sharp Football), usage metrics (4for4 target shares, snap counts).
- OL: pressure-rate and OL/DL sources referenced via PFF/FTN/SumerSports entries (paywalled tier).
- OTHER: Monte Carlo simulation reference (nflseedR), 4th-down WP logic (nfl4th) — foundational to the engine's game-projection layer.
## Engine-actionable? (yes/no + one-line what)
Yes — this is the master sourcing shortlist for the engine's data layer: nflverse free backbone + ESPN hidden JSON (no-key live odds) + Big Data Bowl tracking datasets for training, with paid tiers (SIS/PFF/FTN/SumerSports) named as the charting upgrade path.
