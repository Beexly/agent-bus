# docs/fantasy/research/2026-09-28/projection-source-measured.md
## What it is (1-2 sentences)
A 2026-09-28 measurement (read-only against Neon `gse-postgres`, branch `main`, role `hermes_ro`) refuting the SURF-2 claim that "there is nothing in the database to rank on": `player_game_stats` is large, current, and fully populated with the columns a projection model needs, sourced from the nflverse ingestion pipeline (CC-BY-4.0).
## Key metrics/methods (formulas where given, else "not specified")
- Proposed baseline projection: **recency-weighted mean of `fantasyPointsPpr` over a player's own 2026 history, split by position** (formula stated as method, no explicit weights given).
- Floor/ceiling: **per-player variance from the same history** to derive a defensible interval (method only, no formula).
- No fitted model coefficients; the file explicitly notes it did NOT fit anything.
## Data sources named
- Neon Postgres `gse-postgres`, branch `main`, role `hermes_ro` (measurement surface, read-only).
- `player_game_stats` table (35,490 rows | 1,436 distinct players | season 2026).
- Existing `packages/data-ingestion` nflverse pipeline (CC-BY-4.0) — the data's actual origin.
- `apps/web/lib/integrations/projections.ts` (consumer expecting `proj`, `floor`, `ceiling` per player).
- Companion: `docs/fantasy/research/2026-09-28/ranking-basis-census-legacy-split.md` (era-split contamination warning).
## Findings (numbers and facts, not vibes)
- `player_game_stats`: 35,490 rows, 1,436 distinct players, season 2026; wk1 360 players, wk2 364, wk3 344.
- Avg `fantasyPointsPpr`: wk1 7.54, wk2 7.03, wk3 7.66.
- Column coverage on the 1,068 season-2026 rows: `targetShare` 1,068/1,068 (100%), `targets` 1,068/1,068 (100%), `rushingYards` 1,068/1,068 (100%), `receivingYards` 1,068/1,068 (100%); `receivingEpa` and `rushingEpa` also exist.
- `fantasyPointsPpr` is a PPR scoring assumption baked into the feed; non-PPR settings are not covered.
- Honest limits named: row counts only — no backtest proving the projection beats a rolling average; 3 weeks of 2026 data is thin for rest-of-season modeling; pooling eras contaminates fits (era split is the standing reminder).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 100% coverage of targetShare/targets/yards on all 1,068 2026 rows → [TRUST-SIGNAL: fully populated free, licence-clean projection base via nflverse CC-BY-4.0 ingestion]
- Recommendation that founder explicitly name nflverse as the projection source (`rankings-program.md` decision 6) → [TRUST-SIGNAL: provenance choice documented, PPR-only caveat attached]
- Recency-weighted mean baseline + per-player variance floor/ceiling method → [OTHER: projection methodology proposal, not yet fitted or tested]
- 3-week 2026 base + era-split contamination warning → [TRUST-SIGNAL: honest modelling-risk disclosure — "will this model be better" is unknown until backtested]
## Engine-actionable? (yes/no + one-line what)
yes — wires the rankings lane: projection baseline = recency-weighted mean of `fantasyPointsPpr` over `player_game_stats` (nflverse-sourced), floor/ceiling from per-player variance; founder tap to name source + backtest before publishing.
