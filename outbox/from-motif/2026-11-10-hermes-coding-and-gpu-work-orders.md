# Hermes — Coding, GPU, JEV & OCR Work Orders (2026-11-10)

- From: Motif (fleet lead), per Garrett's orchestration, 2026-11-10
- Sequence rule enforced: **MIND-FIRST → WIRE-FIRST SEQUENCING** (`research → wire → weight → calibrate → test → projections LAST`)
- Drive Masters verified live (`2026-11-10T16:52Z`):
  - `EQUATIONS-MASTER-2026-11-10.jsonl.gz`: `1g7htiDP8q2hoS2s9fpFYh7A-1u_tz2Xu` (**645,864** records, 19.1 MB)
  - `SITUATIONAL-MASTER-2026-11-10.jsonl.gz`: `1H6UIEatCIeo6wF4zKWG6nG5H4Np8FFcz` (**101,965** records, 8.9 MB)

---

## HW-1 — Single-Writer Mind Trainer Ingestion (MIND-FIRST, Immediate)

**Owner:** Hermes (Windows host owns single-writer access to `brain/mind.jsonl`).
**Inputs on `Beexly/Sports` `main` + Drive:**
1. Pull `EQUATIONS-MASTER-2026-11-10.jsonl.gz` (`1g7htiDP8q2hoS2s9fpFYh7A-1u_tz2Xu`) and `SITUATIONAL-MASTER-2026-11-10.jsonl.gz` (`1H6UIEatCIeo6wF4zKWG6nG5H4Np8FFcz`).
2. Pull `Beexly/Sports` `main` for:
   - `data/mind/extraction_masters_manifest_2026_11_10.json`
   - `data/mind/honest_executor_master_audit_2026_11_10.json`
   - `data/mind/sweeps_2026_11_09_pm_and_11_10_am_verified_store.json`
3. Append only genuine master records (excluding `TEMPLATE_QUARANTINED_EVIDENCE` 21,419 legacy template rows) into Windows `brain/mind.jsonl`, preserving source provenance (`book`/`paper`/`repo`, `page`/`section`, `md5`, `_lane`).
4. Write receipt to `outbox/from-hermes/2026-11-10-hermes-hw1-mind-trainer-receipt.md` with `receipt`, `action_dependence`, and `response_validity`.

---

## HW-2 — P1 39-Book Image-Only PDF OCR Completion (5,343 Pages)

**Owner:** Hermes (Windows CPU/GPU box — Motif's 1.5-CPU cell is starved).
**Action:**
1. Run the resumable OCR driver on the 39 image-only PDFs (`Dixon & Coles 1997`, `Luce & Raiffa 1957`, `Thorp`, `Halmos`, `Hull`, `Tolman`, `Wiener` first).
2. Run the saved master rebuild script after each batch, verify zero torn JSONL lines, and refresh Drive files `1g7htiDP8q2hoS2s9fpFYh7A-1u_tz2Xu` and `1H6UIEatCIeo6wF4zKWG6nG5H4Np8FFcz` in place.
3. Also close the named P3/R3/R5 targeted items:
   - `Frontiers-2024 DBSI Eq. 1 (p. 96)` back-matter filter recovery.
   - `lane-p3-still-skipped.jsonl` (`26,968` flattened multi-line displays) render-and-read pass.
   - `GGIR` repo 19/30 axis/filter metric variants in R3 code mining.

---

## HW-3 — Coding & Live Snap-by-Snap JEV (`~typesafe/jev-latest`) Execution on Wired Week 10 Priors

**Owner:** Hermes (`C:\Users\Garrett\hermes-jev-skills\jevkit\client.py` on Windows host).
**Context:** Motif has wired:
- `intelligence/architecture/unified_quantitative_nfl_architecture.py`
- `packages/prediction-engine/src/nfl/unified-quantitative-nfl-architecture.ts`
- Fixed the `epaDropoffTable` role-key mapping defect you flagged on Oct 30 (`LT/LG/C/RG/RT -> OL`, `WR1/WR2/WR3/TE1/RB1 -> SKILL`, `CB1/EDGE1/LB/S/iDL -> DEF`).
- Wired `nflfastR PR #618` coupled `(V, W)` net-EP and `CFBD opponent-adjusted line yards` into `ol_provider.py` and `conserved_nfl_projection_and_equation_optimizer.py`.

**Action:**
1. Pull `Beexly/Sports` `main` and wire `scripts/ops/run_cadence_v30_sunday_overlay.py` to call `map_injury_designation_to_dropoff_bucket()` and the new `unified_quantitative_nfl_architecture.py` Stage-2 priors (`CPI_k`, humid air density `rho`, `CFBD` line yards, `PR #618` net-EP).
2. Execute full-game snap-by-snap JEV simulations (`Snap 1 Q1 15:00 -> Q4 0:00`, `10,000 worlds x 175 snaps` via `jevkit.client.ask` + Sinkhorn-Knopp) for:
   - **Priority 1 (TNF Thu Nov 12):** `WSH @ NYG` (`401873052`)
   - **Priority 2 (Munich Sun Nov 15 09:30 ET):** `NE @ DET` (`401873053`, `CPI_k` circadian shift active)
   - **Priority 3:** Remaining 12 Week 10 games (`401873054`–`401873065`), fetching all pages (`page=1..N`) of live DraftKings `propBets` per the 360-Degree Full-Board Review Doctrine.
3. Until HW-3 completes on Windows `jevkit`, all Week 10 candidate plays in `data/projections/week10_unified_conserved_stat_projections_2026_11_10.json` remain strictly gated at `decision: "PASS"`, `publishAllowed: false`.

---

## HW-4 — `AM-01` Deadline-Bound Model Router Benchmark (Window Closes ~Nov 16, 2026)

**Owner:** Hermes.
**Source:** `2026-11-10-AM` IG Sweep `AM-01` + `AM-05` (`Claude Fable 5.2` $8/$40 vs `Opus 5.5` $4/$20; extra paid-plan Fable usage included through ~Nov 16).
**Action:**
1. Take 3 already-graded hard fleet tasks (1 large-codebase edit, 1 deep-research dissection, 1 multi-hour agent workflow).
2. Run each once on `claude-fable-5-2` (`effort=high`) vs recorded `claude-opus-5-5` (`effort=max`), logging `(model, effort, task_class, accepted, cost_usd, cached_input_tokens, output_tokens, input_to_output_ratio)`.
3. Kill criterion: `< 2/3` accepted-output gain or cost per accepted task `> 1.5x` Opus 5.5. Land labeled rows in `outbox/from-hermes/2026-11-10-hermes-hw4-fable-vs-opus-eval.json`.

---

## HW-5 — Morning Retry of Rate-Limited X Watchlist Accounts & Conflict Resolution

**Owner:** Hermes.
**Action:**
1. Retry `SumerSports` and `run_the_sims` (marked `RATE_LIMITED_UNKNOWN_TONIGHT` in `2026-11-09-PM` X sweep).
2. Cross-check the two conflicting `Jordan Love EPA leaderboard` captures against official `nflfastR` Week 9 play-by-play (both Legacy EP and `PR #618` net-EP) and record which capture matches the primary data.

---

## Standing guardrails (all HW orders)

- All `Beexly/Sports` work happens on a branch. **No push to `origin/main`** — merges to main are Garrett's gate.
- Nothing is published or posted from these work orders. Week 10 output stays internal, held at `publishAllowed: false`, until the stage gates in `inbox/from-motif/TASK-20261110-hermes-wired-engine-lanes.md` clear (Stages 1–6, projections strictly LAST).
- Every benchmark and verification number is reported **as measured** — never tuned to a target. A miss is reported as a miss, with its measured value.

---

— Motif, 2026-11-10
