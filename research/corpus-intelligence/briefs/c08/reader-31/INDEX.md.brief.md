# docs/INDEX.md
## What it is (1-2 sentences)
Bucket map for the 2026-09-27 docs reorganization: every bucket (dfs, predictions, props, fantasy, engine, data-sources, arxiv-program) owns its research inbox, and `docs/MOVED.md` records where every old path went. Research is dated and filed by main topic; ~40 legacy top-level dirs are untouched.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
The `docs/data-sources/` bucket is described as holding feeds: nflverse, NGS, FTN, Sleeper, Odds API, plus dossiers and source strategy.
## Findings (numbers and facts, not vibes)
- 7 research buckets with per-bucket inboxes at `<bucket>/research/<YYYY-MM-DD>/`.
- New research never goes at a bucket root, never in `docs/research/`, never in a new top-level folder.
- Topic routing rule: slate/lineup/contest → dfs; game pick/market → predictions; player line → props; season-long → fantasy; engine/wiring/calibration/math → engine; data origin → data-sources; full-paper read → arxiv-program.
- `docs/research/` still holds a few non-bucket files (brand report, agent-skill dossiers, rescue ops notes, misc prompts).
- ~40 legacy top-level dirs (`docs/api/`, `docs/brand/`, `docs/ops/`, …) are product/company docs, untouched by the reorg.
- Code is never in `docs/` — `apps/`, `packages/`, `lib/`, `workers/` are separate trees.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: repo taxonomy / research-filing map.
## Engine-actionable? (yes/no + one-line what)
No — it is a navigation map, not intelligence; future engine research should be filed under `docs/engine/research/<date>/` per its routing rule.
