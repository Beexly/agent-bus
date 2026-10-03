# dfs/research/2026-09-13/verify/nflverse/README.md
## What it is (1-2 sentences)
Provenance note for the 2026-09-13 DFS verification lane: records exactly which nflverse raw files were pulled (`pbp2025.csv` 94 MB and `roster2025.csv`), where live copies sit, and how to reproduce the verify lane exactly.

## Key metrics/methods (formulas where given, else "not specified")
- Files: `pbp2025.csv` (94 MB, from nflverse play_by_play_2025.csv, intentionally NOT committed to git as raw reproducible bulk data) + `roster2025.csv` (committed here).
- Reproduction: refetch play_by_play_2025.csv from nflverse-data releases → save as pbp2025.csv in this directory.
- Consumer: `verify_defense.py` (filed here) and `verify/*.md` analyses.

## Data sources named
nflverse (https://github.com/nflverse/nflverse-data, play_by_play_2025.csv). Workspace copy: ~/workspace/dfs-research/verify/nflverse/pbp2025.csv.

## Findings (numbers and facts, not vibes)
- 94 MB pbp2025.csv pulled 2026-09-13 from nflverse for the Week 1 DFS ownership/verification lane; roster2025.csv committed, pbp kept local-only.
- Provides the exact provenance chain (source URL → workspace path → consumer script) so the verify lane is reproducible.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — data provenance metadata; no football metrics. Supports future QB-BEHAVIOR / COACHING / OL work since nflverse play-by-play is the deep NFL data source the engine draws on.

## Engine-actionable? (yes/no + one-line what)
no — provenance/readme only, no metrics inside. (nflverse itself is a standing engine data source per the sourcing docs.)
