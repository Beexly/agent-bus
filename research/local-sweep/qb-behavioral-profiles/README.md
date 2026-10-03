# QB Behavioral Profiles

Data-backed behavioral profiles for NFL quarterbacks, built from nflverse
play-by-play (2010–2026). Numbers, not adjectives.

## What this is

Garrett's directive (2026-10-01): the engine's reasoning must be
**player-specific and deep**, not category-based. A "veteran QB" label
predicts nothing — Case Keenum spreads it around, Aaron Rodgers fixates on
guys he trusts. The unit of analysis is the player. These profiles quantify
the behavioral patterns: target fixation (HHI), trust targets, INT
situational splits, run behavior, EPA splits.

## Pipeline

```
code/download_pbp.py    -> data/pbp_<season>.parquet   (nflverse via nflreadpy)
code/compute_metrics.py -> data/qb_season_metrics.parquet
                           data/by_qb/<qb>.csv
code/gen_profiles.py    -> profiles/<qb>.md
```

Run inside the venv: `.venv/bin/python code/<script>.py`

Key implementation notes:
- QB identity uses `passer_player_id` (GSIS), mapped to canonical full names
  via nflverse rosters — required because pre-2019 seasons use abbreviated
  names ("A.Rodgers") while newer seasons use full names.
- Min 100 dropbacks per QB-season.
- "Hit" INT proxy: `qb_hit==1` on the attempt (sacks excluded by construction).
- Designed rushes: rusher is the QB, not a scramble/kneel/spike.

## Metrics per QB-season

1. **Target concentration**: HHI of target shares (0–1), top-1/top-2 shares,
   league median for context.
2. **Trust targets**: top receiver + share on 3rd down and in the red zone
   (opp 20 and in).
3. **INT situational splits**: per 100 attempts — overall, by quarter, by game
   script (leading/tied/trailing), hit vs clean.
4. **Run behavior**: scramble rate, designed rush count/rate.
5. **EPA/dropback**: overall, by script, by quarter.

## Known limitations (queued)

- **Scheme splits (man vs zone, blitz vs no-blitz)**: not present in nflverse
  pbp columns. Needs NGS charting or SIS/PFF data.
- **True pressure rate**: nflverse pbp has no per-play pressure flag; the
  qb_hit proxy is outcome-based, not process-based.
- **2026**: weeks 1–3 only at build time.
- Trust-signal intake (player/coach quotes, e.g. the Rodgers–Metcalf video)
  is a separate social/video pipeline, not covered here.

## Status

Built 2026-10-01 by Motif coordinator. See profiles/ for the eight
founding QBs: Rodgers, Watson, Keenum, Mahomes, Allen, Burrow, Hurts, Jackson.
