# reasoning/cli-inventory-20260926.md
## What it is (1-2 sentences)
A disk inventory (2026-09-26) of which NFL data tables actually exist on disk under four search roots (`C:\Users\Garrett\.cache`, `C:\Users\Garrett\data`, `C:\tmp`, `data/`), with grain/join-key definitions per table and an audit of stale git branches (all labeled ABANDONED). It is the authoritative record of what the engine can load vs. what is ABSENT.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas; counts and join keys only). Grain/join-key catalog: games→`game_id` (`YYYY_WW_AWAY_HOME`); pbp→`game_id`; ngs_pass/ngs_rec→`player_gsis_id`+season+season_type+week+team_abbr; injuries→`gsis_id`+season+week+team; team_stats→`game_id` (derived file only).
## Data sources named
`data/gse-dataset/games.jsonl` (7548 rows, seasons 1999-2026); `C:\Users\Garrett\.cache\ngs\pbp_2023.csv` (49,665 plays) / `pbp_2024.csv` (49,492 plays); `C:\Users\Garrett\.cache\ngs\ngs_passing.csv.gz` (5,933 rows, seasons 2016-2025, weeks 0-9); `ngs_receiving.csv.gz` (14,731 rows, same span); `data/gse-dataset/current/injuries_2026.csv` (733 rows, weeks 1-3: 182/251/300); `data/gse-dataset/current/week3-split-efficiency.jsonl` (derived opponent-adjusted blend); `data/gse-dataset/current/week3-drive-start.jsonl`; `data/gse-dataset/current/week3-situational.jsonl`.
## Findings (numbers and facts, not vibes)
- ngs_rush (rushing) is ABSENT under all four roots — no NGS rushing file exists; same for depth charts, snap counts (nflverse), rosters, player_stats, team_stats raw, FTN charting, contracts/salary, participation, nfl4th.
- `pbp_2025.csv(.gz)` and `pbp_2026.csv` are ABSENT; calibration scripts (`environment-calibration.json`, `drive-start-calibration.json`) exist but their source CSVs (e.g. `C:\tmp\olcal\games_nflverse.csv`, `C:\tmp\team-stats\tw2025.csv`) are absent.
- games.jsonl has no `wind`/`temp` keys (0 rows) and no `gsis_id` column; team code is `LA` (198 games), never `LAR` (0 rows). NGS files still use `LAR` (passing 193 rows, receiving 545 rows) — `connect-slate.py` maps LAR→LA, but the mapping lives in the script, not the NGS files.
- injuries_2026.csv: Out 138, Questionable 120, Doubtful 19, blank 456 (of 733).
- games.jsonl referee: null on 240 of 7,548 games; 2026 week 3: 15 of 16 games have null referee (the one set: 2026_03_ATL_GB, ATL at GB, Shawn Smith).
- ngs_passing: 167 unique `player_gsis_id`, 0 nulls, 0 duplicate composite keys. ngs_receiving: 676 unique ids, 0 nulls, 0 duplicate composite keys.
- Branch audit: every non-ancestor tip (10 measured + ~60 `origin/grok/*` with no merge base + 205 `claude/` refs + 117 `hermes/` refs) labeled ABANDONED; two Hermes branches hold contract-family code only (`narrative.contract_expiry` measuredEffect 0.3319 constant, `contract-value.ts` ranking EPA/cap-dollar, `overthecap-salaries.ts` parser) with no measured fit or salary file.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- NGS rushing ABSENT (QB-BEHAVIOR rushing signal gap; RB rushing signal gap) — TRUST-SIGNAL
- No nflverse snap counts, depth charts, rosters, player_stats, team_stats raw — TRUST-SIGNAL (availability/provenance gaps)
- pbp 2025/2026 absent (only 2023-2024 present) — TRUST-SIGNAL
- CPOE pair present: pbp header has `cpoe` + `ngs_passing.completion_percentage_above_expectation` — QB-BEHAVIOR (CPOE measurable at play and passer-week level)
- pbp has `qb_hit`, `fourth_down_converted`/`fourth_down_failed` columns — QB-BEHAVIOR, COACHING
- injuries: 138 Out / 120 Questionable / 120- Doubtful split across availability vs airwave — OTHER (availability taxonomy)
- LAR/LA alias mismatch across files — TRUST-SIGNAL (join hygiene)
- Referee null on 15/16 week-3 games; officials family needs referee names — TRUST-SIGNAL
- Wind/temp absent from games.jsonl (present in pbp header, but no pbp 2025/2026) — OTHER (weather feed gap)
- narrative.contract_expiry 0.3319 constant exists in code with no fit — TRUST-SIGNAL (unverified constant; do not treat as measured)
## Engine-actionable? (yes/no + one-line what)
yes — feed-gap inventory: treat NGS rushing, 2025-2026 pbp, depth charts, snap counts, rosters, and salary files as UNTESTED-ABSENT inputs, and fix the LAR/LA join alias before any NGS join.
