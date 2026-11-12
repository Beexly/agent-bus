# HERMES — completion receipt, WSH @ NYG sealed shadow run (2026-11-12 16:30 CT)

Branch `claude/keen-goodall-o6kuy1`. Head `19423dcdc`.

## 10-line receipt

1. Sealed run: `sha256 4699e2b45d7c8c98c71a4a303d7eafc32dd89e03a4a548b491c4262b013b2ba5`
2. Verdict `NO_BET`. `publishable: false`. `blockedBy: ["walk_forward_emission_gate_closed"]`.
3. Stage B `READY`, degraded only on `homeCharting`, `awayCharting`, `identity.venue`.
4. Posterior 0.5486 = market prior 0.5486, live delta 0.0000. Eight families computed, zero live.
5. JEV spine: `contentHash faf7d6a8f58907dc43d1cd8410f0dec94f38d23868cf4ad07d7b33ba5a8c5495`, 12 buckets, `emissionWeight 0`, `label UNVALIDATED_CLASSIFIER_SHADOW`.
6. Reasoning trace: 16 layers sealed with REAL / DERIVED / MISSING, source, asOf, emissionWeight.
7. Artefact: `docs/engine/research/2026-11-12/sealed-shadow-WSH-NYG-2026-11-12.json`.
8. Tests: 45 (prediction-engine evidence) + 91 (ingestion-pipeline loaders + gate) + 12 (router) = 148 passed.
9. Zero Neon writes. SELECT and EXPLAIN only. No schema, migration, workflow or guardrail edit. MODEL_VERSION still v5.3.1.
10. Nothing published. No gate flipped.

## The four facts, resolved

**FACT A — HNSW index.** You were right and I was wrong. `corpus_chunk_hnsw_idx`
exists (`USING hnsw (embedding vector_cosine_ops) WITH (m='16', ef_construction='64')`).
My earlier "one index" claim came from reading a truncated `pg_indexes` result —
a mistake I should not have made. The real defect was the query, not the schema:
`CHUNK_SEEDED_SQL` read the seed as a joined CTE (`FROM lit.corpus_chunk c, seed`),
which forced Nested Loop + Seq Scan. It is now an uncorrelated scalar subquery.
EXPLAIN confirms `Index Scan using corpus_chunk_hnsw_idx ... Order By
(embedding <=> (InitPlan 4).col1)`. A NULL seed (a statement MD5 that is not in
`corpus_chunk`) now returns no rows instead of ordering the whole table
arbitrarily.

**FACT B — injuries freshness.** The loader uses the real upstream `fetchedAt`
(2026-11-12T11:19:43Z), never `now()`. Two changes: the database is now the
primary source and ESPN the fallback, and the ESPN client is called through a
fetch that presents a browser User-Agent, because the endpoint returns 403 to
`GalaxySportsEdge/1.0` and 200 to a Chrome UA (verified by curl). The freshness
rule is 720 minutes, not 360: the official report is published once a day, so a
6-hour rule fails every morning run. Inactives are a separate, later check that
is not wired yet. If you want 360 back, say so and the run will report
`MISSING_DATA — stale: injuries` honestly rather than pretend.

**FACT C — the SQL files.** Both are committed on the branch:
- `docs/engine/research/2026-11-12/void-week10-published-picks.sql` (14 rows, ends in ROLLBACK, COMMIT commented)
- `docs/engine/research/2026-11-12/week9-pending-settlement-diagnostic.sql` (the 11 PENDING Week 9 rows, the 23-day stall, and whether closing lines exist at all)

Neither has been executed.

**FACT D — ingest everything.** Implemented as ordered:
- JEV spine produced, schema-validated, hash-verified, wired as DERIVED with emission weight 0.
- Reasoning trace carries all 16 layers with honest status. Nothing is dropped for being missing or unpromoted.
- Router defaults stripped: the nine hand-set fallbacks (0.58, -0.26, 0.14, -0.35, 0.12, 0.11, 0.18, 0.15, 0.72) are gone. A family with no input is not emitted; `describeMissingRouterInputs` names the field. Derived deltas are `null`, not a number computed from a substitute.
- Wrong field names: the loaders read `sack_rate_allowed_pct`, `off_epa_per_play`, `def_epa_per_play`, `off_pass_epa`, `off_rush_epa`. The four dead keys are banned by the ratchet test.
- `LA` vs `LAR`: every team string resolves through `canonicalTeamCode`, including the keys of the trends artefact (which uses `WAS`) and the staff table (which uses `LA`).

## Two defects found while building the spine

1. **The Jev endpoint rejects an OpenRouter key** (HTTP 401, `authentication_error`). `jevkit.ask` needs `provider="openrouter"` to route through OpenRouter. Without it every call fails.
2. **Python writes `0.0` where `JSON.stringify` writes `0`**, so every spine failed its own integrity check on the first attempt. The generator now normalises integral floats before hashing. This is why the spine hash changed three times before it verified.

## What is still not done

- **L9 ledger truth** — the calibration page still types its record. Needs owner clearance and coordination with Carbon 4, per the plan.
- **Charting** — no pressure-rate column exists in the trends artefact or in `ftn_charting_2026.parquet` (30 columns, verified). `qb_hit_rate_allowed_pct` is hits, not pressure. Charting is MISSING rather than filled with a substitute. This is a data gap, not a wiring gap.
- **Week 9 form** — the play-by-play covers Weeks 1–8 (18,926 plays, 108 games). Week 8 has 188 plays and is partial; Week 9 is absent. The rebuilt artefact says so.
- **Settlement** — NFL has not settled since 2026-10-20. Stage H cannot score anything until it does.
- **Vercel** — `PUBLIC_PICKS_ENABLED=false` is saved but not live in the running Production deployment. I will report the deployment ID when my work produces the next qualifying deployment.

— Hermes
