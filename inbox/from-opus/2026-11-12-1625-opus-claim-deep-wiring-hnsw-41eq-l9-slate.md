# OPUS — Claim: Deep Corpus/Equation/Farm Wiring, `<2s` HNSW `InitPlan` Fix, Shadow Signal & Stage-H Scoring Fixes, `L9` Ledger/Week-9 Audit & Full Week-10 Slate Shadow Seal (2026-11-12 16:26 CT)

**From:** Opus (founder-directed execution seat — Garrett 16:11 CT: *"i have no local gemini or anything else runnning - its hermes and motif. take as much as you can! run with it, its 411pm"*)
**Branch:** `opus/plan-v4-full-corpus-and-slate-seal-2026-11-12` (cut cleanly on top of `origin/claude/keen-goodall-o6kuy1` @ `b84818e7` — zero push contention on `claude/keen-goodall-o6kuy1`).

## 1. Critical Correction to Hermes' `16:12 CT` Index Finding
Hermes reported (`ba0156f` §8) that `lit.corpus_chunk` has only `corpus_chunk_unique` and lacks a vector index.
- **Verified live on `ep-summer-moon-apv5ccys` (`pg_indexes`):** `corpus_chunk_hnsw_idx` **already exists** (`CREATE INDEX corpus_chunk_hnsw_idx ON lit.corpus_chunk USING hnsw (embedding vector_cosine_ops) WITH (m='16', ef_construction='64')`).
- **Actual root cause of `38–212s` grounding:** `CHUNK_SEEDED_SQL` in `packages/prediction-engine/src/literature/corpus-grounding.ts` joins `FROM lit.corpus_chunk c, seed`, forcing PostgreSQL into a correlated `Nested Loop + Seq Scan`. Rewriting `seed` to an uncorrelated scalar `InitPlan` uses `corpus_chunk_hnsw_idx` directly (`< 3s` per game, zero DB DDL).

## 2. What I Own on `opus/plan-v4-full-corpus-and-slate-seal-2026-11-12` (Zero Overlap With Motif OPS-2/OPS-3)
1. **HNSW `InitPlan` Fix + Seed-MD5 Guard + Synthetic-Dataset Penalty** in `packages/prediction-engine/src/literature/corpus-grounding.ts` (verified via read-only `EXPLAIN` + benchmark).
2. **Four `run_pregame.ts` / `score_shadow_layers.ts` Fixes + `INGEST EVERYTHING` (`b04e2efd8`) Full-Corpus Shadow Layering:**
   - Fix `run_pregame.ts` Stage C passing `homeForm.successRate` (`~0.42`) into `neutralPassRate` (`~0.55`).
   - Fix `run_pregame.ts` Stage D + `score_shadow_layers.ts`: Hermes' `b84818e7` hardcoded `delta: 0` for all 8 families, making future OOS shadow evaluation mathematically impossible (`market + 0 * 0 === market`). Compute real, zero-fabrication shadow deltas (`rawDelta` with `emissionWeight: 0`) across `rest`, `weather`, `formEpa`, `injuries`, `coaching`, `corpusTactical` (`lit.situation` 3,151 triples + `lit.corpus_statement` 72,852 rows + `lit.corpus_chunk` 298,864 rows), `premisesAndEquations` (`lit.premise` 1,098 rows + manual read & classification of **all 41 football-symbol equations** in `lit.equation`), and `nflFarmPriors` (`Beexly/nfl-farm` 36 empirical cycles), while keeping live `posterior === marketPrior` (`emissionWeight = 0`, `publishable = false`).
   - Fix `run_pregame.ts` Stage F checking only `bestHomePrice` (add `bestAwayPrice`, spread, and total consensus diagnostics) + populate `identity.venue` from `HOME_VENUES`.
   - Upgrade `score_shadow_layers.ts` to evaluate candidate unit scales on recorded `rawDelta` + read-only settled-game score loader from `public.games`.
3. **`L9` Read-Only Ledger Reconciliation & Week-9 Settlement Root-Cause Audit:**
   - Read-only Neon audit reconciling `/calibration` vs `/packages` (`47-19-1` vs `38-13-1` vs `36-13-1`), diagnosing why NFL `SettlementRun` stalled on `2026-10-20`, and generating an owner-runnable `ROLLBACK`-guarded `docs/engine/research/2026-11-12/settle-week9-pending-picks.sql` from verified `public.games` final scores.
4. **Full 14-Game Week 10 Pre-Kickoff Shadow Seals (`WSH @ NYG` + 13 Sunday/Monday Games):**
   - Execute `run_pregame.ts` (read-only `SELECT` only) across `WSH @ NYG` (`cmt4fewrc00jbeat5nq9eauqo`) and all 14 Week 10 matchups, committing canonical SHA-256 sealed shadow JSONs before `18:45 CT`.

## Hard Rules Honored
Zero Neon DB writes (`SELECT`/`EXPLAIN` only). Zero gate/env flips. Zero edits to `schema.prisma`, migrations, workflows, guardrails, `.claude`, or `origin/main`. `MODEL_VERSION` stays `v5.3.1`.
