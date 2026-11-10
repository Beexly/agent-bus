# TASK-20261110: Hermes wired-engine lanes — Stages 1–6 (MIND-FIRST → WIRE-FIRST)

- From: motif → hermes / opencode
- Created: 2026-11-10
- Status: open

## Spec

Execute in the corrected doctrine sequence: **MIND-FIRST → WIRE-FIRST**
(`research → wire → weight → calibrate → test → projections LAST`).
The sequencing is hard. Stage 6 does not start until Stages 1–5 are done,
and no stage borrows results from a later one.

Companion dispatch (Windows GPU / JEV / OCR / Trainer work orders HW-1..HW-5):
`outbox/from-motif/2026-11-10-hermes-coding-and-gpu-work-orders.md`.
This task is the engine-lane build those work orders feed.

Verified inputs (Motif, 2026-11-10):

- `EQUATIONS-MASTER-2026-11-10.jsonl.gz` — **645,864** records,
  Drive `1g7htiDP8q2hoS2s9fpFYh7A-1u_tz2Xu`
- `SITUATIONAL-MASTER-2026-11-10.jsonl.gz` — **101,965** records,
  Drive `1H6UIEatCIeo6wF4zKWG6nG5H4Np8FFcz`
- Architecture spec: Garrett's
  `Unified_Quantitative_NFL_Projection_Architecture.pdf` (26 pp,
  C0–C6 clocks, physical / causal / sports layers)

### Stage 1 — MIND-FIRST (index and bind; nothing promoted yet)

1. Index both masters into the engine's working stores with full provenance
   (`book` / `paper` / `repo`, `page` / `section`, `md5`, `_lane`).
2. Legacy registry: the 21,419-row equation execution registry is marked
   **`TEMPLATE_QUARANTINED_EVIDENCE`** in every index and manifest that
   references it. Nothing is deleted. Template rows are never promoted into
   `brain/mind.jsonl`, a manifest count, or a projection input.
3. Wire the verified sweep stores: the 2026-11-09-PM X sweep and the
   2026-11-10-AM Instagram sweep
   (`data/mind/sweeps_2026_11_09_pm_and_11_10_am_verified_store.json`) —
   counts stored exactly as verified, conflicts preserved, not resolved
   silently.
4. Book binding: bind book records to per-folder Drive file IDs via
   `gdrive_folder_file_id_map_2026_11_10.json`. Duplicate content is flagged
   honestly on every affected row: `is_sha256_duplicate` and
   `sha256_group_size`. **The numbers, stated plainly:** 503 is the count of
   per-folder file *instances* across the primary + extended Drive folders;
   unique book content is **211** by sha256. Never present 503 as a
   unique-book count, in any wording, anywhere — not in code, comments,
   manifests, or results.

### Stage 2 — Honest equation executor audit

1. `honest_equation_executor.py`: a zero-fabrication AST parser. It never
   synthesizes a coefficient, never invents a value, and never returns a
   live-looking output for a record it did not actually evaluate.
2. Every record lands in exactly one class:
   `PARSED_EVALUATED` / `PARSED_SYMBOLIC_ONLY` / `UNPARSEABLE` (with the
   reason recorded on the record).
3. Run the audit across **all 645,864** master equation records and publish
   the measured class counts. The counts are whatever the run measures.

### Stage 3 — Unified quantitative architecture

Implement `intelligence/architecture/unified_quantitative_nfl_architecture.py`
and `packages/prediction-engine/src/nfl/unified-quantitative-nfl-architecture.ts`
per the spec PDF:

- C0–C6 clocks; kickoff / OT rules; ballistics layer.
- Crew GLMM; BEAST / EWMA / Circadian `CPI_k`.
- Brill–Yurko–Wyner EP/WP with the nflfastR PR #618 coupled `(V, W)` delta.
- AIPW / TMLE with myth gates.
- HBPM + Spearman–Brown + the injury role-key fix + CFBD opponent-adjusted
  line yards.
- Logit-AQRE / CFR / CVaR Bellman + the Rule 4 2:01.0 trap.
- CMP / Sarmanov lattice.
- 6-method devig + Black–Litterman + ZA-GAMLSS + Sinkhorn + KL entropic
  tilting + R-Vine.
- Owen–Sobol RQMC + MLMC + DMA + ACI + twCRPS / CPCV.

### Stage 4 — Week 9 autopsy

1. Official final: **BUF @ MIN 23–6** (ESPN game `401873051`). Grade every
   player and **all 78 props**, projected vs actual.
2. Decompose the miss into **Volume vs Efficiency residuals** — say which
   side of the projection failed, per player and per prop family.
3. Compute DMA weights + ACI offsets across **all 15 Week 9 games** and
   carry them forward as Stage 6 inputs (recorded, not hand-set).

### Stage 5 — Tests and guardrails

Run the full gate and report real output: unit tests, E2E, vitest,
trust-gate, lint, dossier-guard, run-all — **36/36 guardrails** is the bar.
A failing gate is reported with its actual output, not worked around.

### Stage 6 — LAST: Week 10 projections

1. Projections JSON across **all 14 official ESPN Week 10 games**, built
   only from Stages 1–5 outputs (wired priors, executor-audited equations,
   Stage 4 DMA weights + ACI offsets).
2. Tickets stay held at **PASS** with `publishAllowed: false` unless and
   until the live Windows JEV snap-by-snap execution (HW-3) has actually
   run against them. No projection is published or posted from this task.

## Standing guardrails

- All `Beexly/Sports` work happens on a branch. **No push to
  `origin/main`** — merges to main are Garrett's gate.
- Nothing is published or posted. No live-bet placement language, no
  customer PII (GSE honesty gate).
- Every benchmark and verification number is reported **as measured** —
  devig table, Rule 4 2:01.0 trap, Sinkhorn convergence, entropic tilting
  KL — never tuned to a target. A miss is a miss, with its measured value.

## Acceptance criteria

- [ ] Stage 1: masters indexed; legacy registry marked
      `TEMPLATE_QUARANTINED_EVIDENCE` with zero rows deleted and zero
      template rows promoted; sweep stores wired with exact verified
      counts; book binding carries `is_sha256_duplicate` /
      `sha256_group_size`; no text presents 503 as a unique-book count.
- [ ] Stage 2: executor audit covers all 645,864 records; measured
      `PARSED_EVALUATED` / `PARSED_SYMBOLIC_ONLY` / `UNPARSEABLE` counts
      published with reasons on the UNPARSEABLE class.
- [ ] Stage 3: `.py` + `.ts` architecture modules land on a branch with
      every component family in the spec list present and importable.
- [ ] Stage 4: BUF @ MIN autopsy complete (game `401873051`, all 78
      props), Volume vs Efficiency residuals split, DMA weights + ACI
      offsets computed across all 15 Week 9 games.
- [ ] Stage 5: 36/36 guardrail output attached as measured (unit, E2E,
      vitest, trust-gate, lint, dossier-guard, run-all).
- [ ] Stage 6: Week 10 projections JSON covers all 14 ESPN games; every
      ticket `publishAllowed: false` and held at PASS absent a completed
      HW-3 JEV run.
- [ ] `RESULT.md` / outbox receipts include `receipt`,
      `action_dependence`, and `response_validity` per
      `BEEX-AGENT-TEAM.md`.
- [ ] Branch named in the result; no commit on `origin/main` from this
      task.

## Notes

- HW-1 (mind trainer) and HW-2 (OCR closer) run on the Windows host in
  parallel with these stages; Stage 1 consumes their outputs but does not
  wait idle on them — flag any true dependency in the bus instead of
  guessing.
- If a spec item cannot be built as written, say so in the result with
  the reason. Do not substitute a plausible-looking stand-in.

— Motif, 2026-11-10
