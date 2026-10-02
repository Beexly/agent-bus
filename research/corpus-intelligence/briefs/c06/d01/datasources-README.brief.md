# data-sources/research/2026-09-17/README.md

## What it is (1-2 sentences)
The index README for everything Motif's lab produced or collected on 2026-09-17: an NFL analytics X-account dossier program, a computed-metrics lab (nflverse play-by-play), a Bills-Lions TNF props consensus workstream, and the published Bills-Lions Edge Sheet. It also records the 2026-09-27 bucket reorg that moved six subdirectories into new docs buckets (see `docs/MOVED.md`).

## Key metrics/methods (formulas where given, else "not specified")
No formulas specified in the README itself. Named method/method-topic references:
- Dossier v2 methods: 10 method deep-dives and a 7-topic methods literature review (`dossier-v2-methods.md`).
- `advanced-metrics-data-source-catalog.md` — v1 26-metric catalog.
- `benchmark-audit-2026-09-17.md` — completeness audit: 156 items inventoried, 82 covered, 73 filed into AGENTS.md.
- Props workstream method doc: `projection_methods.md` (in `props-consensus/`).
- `gse-lab/` — computed metrics from nflverse play-by-play: 29 CSVs, 15 metric families, 4 scripts; entry point `COMPUTATION_NOTES.md`.
- Ranked build targets from the 8-post sweep (AGENTS.md): 1. FPOE/xFP stack, 2. EPA + draft-pick Monte Carlo, 3. Hidden yardage, 4. Transparent Open Havoc, 5. Survivor + best-ball EV.
- Screenshots behind the two ENGINE BENCHMARK sections: `air-yards-week1-2026.png`, `coverage-defenders-week1-2026.png` (live in `docs/`).

## Data sources named
- nflverse play-by-play — license CC-BY 4.0 (credit "nflverse").
- FTN charting via nflverse — license CC-BY-SA 4.0 (credit "FTN Data via nflverse", share-alike).
- Excluded as reproducible downloads (not vendored): raw `play_by_play_{2025,2026}.csv.gz` and `ftn_charting_2025.csv` from https://github.com/nflverse/nflverse-data/releases ; Python venvs.
- 2026-09-27 bucket reorg mapping: `dossiers/` → `docs/data-sources/research/2026-09-17/dossiers/`, `props-consensus/` → `docs/props/research/2026-09-17/props-consensus/`, `statrankings/` → `docs/fantasy/research/2026-09-17/statrankings/`, `gse-lab/` → `docs/engine/research/2026-09-17/gse-lab/`, `edge-sheet/` → `docs/predictions/research/2026-09-17/edge-sheet/`, `full-tables/` → `docs/dfs/research/2026-09-17/full-tables/` (full map in `docs/MOVED.md`).

## Findings (numbers and facts, not vibes)
- Dossier program scale: v1 = 36 verified accounts + 26-metric map (`nfl-analytics-x-dossier.md`); v2 = 50 more accounts, 10 method deep-dives, a watch lane, and 8-post sweep entries 51-58 (so 86+8 = 94 account entries across v1/v2+sweep; INFERENCE on the arithmetic, counts stated per-file).
- Benchmark audit: 156 items inventoried, 82 covered, 73 filed into AGENTS.md (156 - 82 = 74 uncovered per arithmetic; the file says 73 filed — the uncovered-vs-unfiled gap is not reconciled in this README).
- `gse-lab/`: 29 CSVs, 15 computed metric families, 4 scripts, sourced from nflverse play-by-play.
- Props workstream (`props-consensus/`): Bills-Lions TNF — method doc `projection_methods.md`, reports, market captures `consensus_lines.csv` + `our_projections.csv`, player gamelogs, team script rates.
- Edge sheet (`edge-sheet/`): v1/v2 build scripts, design brief + critiques, fonts, final graphic `bills-lions-edge-sheet-final-v2.png` — posted to @GalaxySportsHQ on 2026-09-17 at 15:04 CDT.
- Licensed sources used: nflverse (CC-BY 4.0), FTN charting via nflverse (CC-BY-SA 4.0); raw downloads excluded as reproducible.
- Screenshots for the two ENGINE BENCHMARK sections: `air-yards-week1-2026.png` (air yards, week 1 2026), `coverage-defenders-week1-2026.png`.
- NOTE (scope): this brief covers the README only. The substantive method/data content lives in the referenced files (`dossier-v2-methods.md`, `COMPUTATION_NOTES.md`, `projection_methods.md`, the 29 CSVs, `consensus_lines.csv`/`our_projections.csv`) which are outside this subagent's 3-file assignment and were not read.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- FPOE/xFP stack build target and 15-family computed metric lab from nflverse PBP — QB-BEHAVIOR (FPOE/xFP decompose QB rushing vs expected; gse-lab is the compute precedent).
- EPA + draft-pick Monte Carlo build target — OTHER (simulation method for projections).
- 26-metric map / 26-metric catalog and 7-topic methods literature review — OTHER (benchmark inventory = the corpus the engine benchmark program inventories; license terms recorded for reuse).
- Bills-Lions TNF props consensus workstream (market captures + own projections + team script rates) — TRUST-SIGNAL (consensus-vs-projections methodology; market-capture discipline).
- Team script rates in props workstream — SCHEME (game-script modeling input).
- CC-BY 4.0 / CC-BY-SA 4.0 attribution chain for nflverse + FTN charting — OTHER (reusable license precedent for research-learn-only data handling).

## Engine-actionable? (yes/no + one-line what)
yes — treat as an index, not the data: deep-read `gse-lab/COMPUTATION_NOTES.md` + the 15 computed families and `projection_methods.md` next, since those are the actionable methods and numbers behind this README.
