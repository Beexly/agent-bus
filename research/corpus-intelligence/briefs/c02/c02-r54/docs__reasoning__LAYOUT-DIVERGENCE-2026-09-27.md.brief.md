# docs/reasoning/LAYOUT-DIVERGENCE-2026-09-27.md
## What it is (1-2 sentences)
A red-team reconciliation brief (2026-09-27 ~05:45Z) inventorying two incompatible nflverse dataset layouts produced independently by the grok branch and main session A (combined-vs-per-season files, 2018–2026 vs 2018–2025), recommending a merge direction where main wins on structure and grok wins on content.
## Key metrics/methods (formulas where given, else "not specified")
- Layout comparison table: grok = ONE `rosters.jsonl` (415,682 rows incl. 2026), ONE `snap-counts.jsonl` (208,441 incl. 2026), `participation-YYYY.jsonl` × 8, `contracts.jsonl` (39,013 incl. 2026-signed); main = `rosters-YYYY.jsonl` × 8 (2018–2025), `snap-counts-YYYY.jsonl` × 8, same participation files + `players_on_field_gsis` enrichment + crosswalk, `contracts.jsonl` (35,944, 2018–2025).
- Split rule: per-season files only split above 90 MB — grok's combined rosters.jsonl is 84 MB, snaps 47 MB, so only participation legitimately split; combined files violate the work-order scheme.
- 2026 verification: grok's 2026 grains verified real against nflverse (snap_counts_2026: 200, roster_2026: 200, participation: 404 recorded, nfl4th: 200).
- Crosswalk: main's `player-id-crosswalk.jsonl` verified by red team at 100% on both hops; grok lacks the crosswalk enrichment entirely (2018–2022 participation slots remain unjoined on grok's side).
- Season scheme: 2018–2024 training, 2025 holdout, 2026 application.
- Estimated real work: one ingest re-run (~10 min machine time) + manifest reseal; do NOT hand-merge manifests — re-derive.
## Data sources named
- nflverse grains: rosters, snap counts, participation (`players_on_field_gsis`), contracts, fourth-down (`nfl4th`).
- `data/gse-dataset/nflverse-ingest-manifest.json` (both sides rewrote; different shapes) and `data/gse-dataset/join-report.json` (two schemas: grok's `joins.participation_personnel.perSeason` vs A's top-level `participation.identifier_compatibility`).
- `packages/data-ingestion/src/nflverse/ingest.ts` and `rows.ts` (conflicting SEASONS/INGEST_SEASONS rewrites).
- Scan-module artifacts: lane2 vs session A `scripts/overnight/scan-modules.mjs` → `module-ledger.jsonl` (63 rows vs ledger + `ingestion-gates.jsonl` with different fields); grok lane has its own scan-modules.mjs — module-ledger.jsonl is "not a comparable number across lanes."
## Findings (numbers and facts, not vibes)
- [OTHER] Hard merge conflicts: `nflverse-ingest-manifest.json` and `join-report.json` both fully rewritten on both sides (different schemas) — last-writer-wins would be data corruption; whichever manifest survives must describe the files that exist.
- [OTHER] `rosters.jsonl`/`snap-counts.jsonl` combined on grok vs per-season on main — no path collision but two coexisting layouts means "every consumer guessing."
- [OTHER] Recommendation: merge direction = grok's branch into main's per-season layout (main wins on structure, grok wins on content): re-run grok's ingest into per-season files for 2018–2026, keep main's crosswalk enrichment as a post-ingest step, reconcile join-report.json to ONE schema (A's), delete grok's combined files, re-run `verify-files.mjs` as the gate.
- [OTHER] Grok's 2026 grains are verified real against nflverse — main has none, and the narrative_contract LIVE path needs grok's 2026 ingest.
- [OTHER] Main's crosswalk enrichment is "strictly more capable" (100% verified both hops); grok's 2018–2022 participation slots remain unjoined.
- [TRUST-SIGNAL] Scanner schema drift: three lanes produce "the" module-ledger.jsonl with different row fields — recommended to pick ONE (session A's, which has the gates file), land it on main, delete the others.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Data-layer merge conflicts and recommended resolution → OTHER
- Three-way module-ledger schema drift → OTHER
- 2026-season verification against nflverse → TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
yes — The resolution steps (re-ingest grok's 2026 content into main's per-season layout, re-derive the manifest, gate on verify-files.mjs) are the direct instructions for the engine's dataset layer and were explicitly "not merged unilaterally" — owner decision is the only open item.
