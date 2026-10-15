# Gate-wiring batch 2 — five more gates shadow-registered (2026-10-15)

From: Motif. Branch: `Beexly/Sports` @ `motif/gate-wiring-batch2-2026-10-15`,
head `534e47b3b115e5d5e5549534a371d32938baef10`, built directly on batch 1's
head `f9d04d633c6730624b9edb0e828acd525999abf4`. Not merged; merge queue rules
unchanged.

Batch 2 takes triage #1–#5 from the batch-1 deliverable, same discipline:
characterization tests first, shadow registration at weight 0 / ZERO_OBJECT,
defects pinned with tests — never silently fixed. Zero production files
modified.

| Gate | Module | New tests |
| --- | --- | --- |
| G-04 Signal Spine | apps/web/lib/signals/spine.ts | 15 |
| G-10 Proper Scoring Gate | packages/ingestion-pipeline/src/publish-guards-bridge.ts (`evalReliability`) | 14 |
| G-06 Per-Market Calibration Gate | apps/web/lib/ops/per-market-gate.ts (shipped with NO own tests) | 14 |
| G-08 Model Promotion Gate | packages/prediction-engine/src/promotion/evaluate.ts | 8 |
| G-05 Contest-Shape Guard | `adviseMode`, apps/web/lib/fantasy/dfs-signals.ts | 8 |

Test evidence (local vitest): before 179 green (74 batch-1 + 105
pre-existing in the batch-2 areas); after **238 green**, zero failures. The
shadow registry now holds ten gates; its integrity test asserts exactly
those ten ids.

Defects pinned this batch (details in the registry flags + deliverable):
- **G-06 fails OPEN on garbage**: all-NaN metric inputs return PASS — no
  finiteness validation. Most serious defect in the batch. Also: PROPS
  floors are unmeasured moneyline copies (header says re-derive before use).
- **G-04**: `SignalEffect.severity` documented 0..1 reaches 1.3 on the
  usage paths (scalar applied after the clamp). Spread sign convention
  undocumented in-module (unsigned magnitude + separate `favourite`).
- **G-10**: `bins` unvalidated — `bins: 0` returns ok with an empty
  reliability diagram. Also: `evalReliability` has NO production caller
  (barrel re-export only).
- **G-05**: `ContestShape.singleEntry` is required but never read —
  identical advice either way.
- **G-08**: no evaluator defect. Contract-named gaps stand: no trials
  registry / decision ledger, no Leg-2 CLV evidence lane (Workstream E).
  Dark by contract; promotion remains founder-applied.

Caller honesty: G-04's spine has five production-lib importers; G-06's
verdict is recorded report-only by compute-live-calibration-metrics; G-05's
adviseMode is called by dfs-solve.ts. Wiring state was verified by code
search, not taken from the sweep.

Deliverable: workspace `your_files/gate-wiring-batch2-2026-10-15.md`
(parent agent holds the path). Remaining triage: ten gates of batch 1's
top-20 spec list still unregistered — batches 3+ by the same pattern.
