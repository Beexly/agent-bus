# W3 RUNLOG

## 2026-09-13 ~20:40 CDT — pre-registration + code locked (data gate NOT yet cleared)

- Read protocol `deepseek-move37-phase6-response-01.md` §4/W3, program
  `PHASE6_EXPANDED_PROGRAM.md` §§4,7, shared harness (`HARNESS_README.md`,
  `prereg_template.md`).
- Wrote `PREREG.md` — pre-registered and LOCKED before any contact with real data:
  - 36 cells = 4 downs × 3 distance bins (SHORT 1–3, MED 4–7, LONG 8+) ×
    3 field bins (RED 1–20, MID 21–50, OWN 51–99 on yardline_100)
  - d_FR(p,q) = 2·arccos(Σ√(p_k q_k)), Lidstone α=0.5, team-season floor 200 plays
  - seasons 2002–2025 only (post-realignment 8-division structure)
  - Elo: start-of-season, 538-style from pbp-derived game outcomes (K=20, HFA=65, init 1505, 1/3 regression)
  - estimand: Cohen's d of (cross-div − within-div) d_FR on residuals of
    d_FR ~ season FE + |ΔElo|; kill if d < 0.1; DeepSeek bet threshold d ≥ 0.3
  - permutation placebo: 1,000 within-season division-label shuffles, seed 42
  - era splits via harness.era_split; sign flip across eras = kill
  - market duel N/A (structural estimand, no line exists)
- Wrote `w3_fisherrao.py` (pure numpy/pandas; harness imports only).
- Smoke test `smoke_hellinger.py`: 9/9 PASS — identity, symmetry, point-mass → π,
  uniform-vs-point closed form, triangle inequality (200 triples), planted
  within-division effect detected (d=21.86, perm p=0.005), null centers at 0,
  sparse-count finite/no-NaN.
- Dry run on synthetic pbp (5 seasons × 32 teams × 600 plays): full pipeline
  runs end to end; null data gives d=−0.11, perm p=1.00 — correctly kills.
- Data gate: `~/workspace/gse-discovery/data_snapshot_20260913/MANIFEST.md`
  does NOT exist. Poll loop armed in background (session proc_d1a893cf0326):
  check every 120 s, up to 4 h. Full analysis runs only after MANIFEST appears.

## 2026-09-13 ~21:52 CDT — executor session (W3 executor subagent) started

- Anti-duplication: `ps aux | grep -i fisherrao | grep -v grep` → no W3 pipeline
  running (only sibling T2/T4/T5/T9 workers). No duplicate launched.
  (Old poll loop proc_d1a893cf0326 from prep session is gone — box restarted or
  session ended; data gate now OPEN, so poll loop is moot.)
- Data gate OPEN: manifest `data_snapshot_20260913/MANIFEST.md` created
  2026-09-14T02:49:49.973429Z (UTC), 27 seasons 1999–2025, ~1.28M plays.
- Implementation note (decided BEFORE first real-data run, analysis unchanged):
  the snapshot delivered per-season files (pbp_1999.parquet … pbp_2025.parquet),
  not the single pbp_1999_2025.parquet the prep worker anticipated.
  Adaptation, locked code untouched: `staging/stage_pbp.py` verifies every
  source file's sha256 + row count against MANIFEST.md, then concatenates the
  frozen files into `staging/pbp_1999_2025.parquet` with a column projection to
  the 11 columns w3_fisherrao.py uses (rows/values byte-identical, mechanical).
  All 27 seasons are retained in the merged table so the PREREG Elo table
  (start-of-season, 538-style K=20/HFA=65/init 1505/1-3 regression) can use
  1999–2001 games for 2002 start-of-season Elo; pair analysis is restricted to
  2002–2025 by the locked `SEASON_MIN` filter. Script invoked as
  `python3 w3_fisherrao.py staging . 42` (seed 42 per PREREG).
- Resource posture: whole job `nice -n 15`, OPENBLAS_NUM_THREADS=1,
  OMP_NUM_THREADS=1 (box shared — T4 full run in progress; 2 vCPU / 7 GB RAM).
- Launched chained background job (session proc_d59f72bc33d8):
  staging → pipeline, logs at staging/stage.log and logs_pipeline.log.

- Code hashes at run time (PREREG §6): w3_fisherrao.py `11c49bb7…9a47`,
  smoke_hellinger.py `447d9d1e…cc9f`, staging/stage_pbp.py `d3fb5d53…b2ee`
  (full hashes above); env pandas 2.1.4 / numpy 1.26.4.

- 2026-09-14 ~03:20 UTC (Motif direct): pipeline crashed at results-write with KeyError 'n_permutations' — harness permutation_test returns 'n_perm'. One-line mechanical fix in w3_fisherrao.py (no analysis change). Re-ran detached, completed 732 s. Cohen's d = 0.0091, perm p = 0.348, test-era d = -0.048. 4/5 kill criteria fire. VERDICT: KILL. REPORT.md written.
