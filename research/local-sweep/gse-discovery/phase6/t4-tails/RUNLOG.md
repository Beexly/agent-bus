# T4 RUNLOG

## 2026-09-13 ~20:30 CDT — task start
- Read PHASE6_EXPANDED_PROGRAM.md §3 T4, §4, §7. Harness README did not exist yet.
- Wrote PREREG.md (estimand: team-era GPD shape xi on game-total right tail;
  identification: per-team-era 90th-pct threshold; duel N vs T vs closing line;
  kill criteria K1–K5) BEFORE any run.
- Built venv (python3 -m venv) + nflreadpy/scipy/numpy/pandas/polars/pyarrow.

## 2026-09-13 ~20:45 — harness landed; coordinator integrated pipeline
- Shared harness appeared at phase6/harness/ (selftest 24/24 pass).
- My code/t4_pipeline.py was replaced with a harness-integrated version
  (imports era_split, permutation_test, run_placebo, benjamini_hochberg,
  duel_report; MANIFEST hard gate; T4_SMOKE=1 smoke mode). Reviewed it:
  faithful to PREREG.
- Added PREREG amendment 2026-09-14 (A1–A6): quantitative mean-excess gate
  (R²≥0.80), BH on K1, harness duel_report as primary duel verdict, placebo
  via run_placebo with custom synth null, MANIFEST hard gate, double-count
  caveat.

## 2026-09-13 ~21:00 — data-free mechanics validation (venv)
- scipy genpareto.fit sanity: heavy-tail sim (true xi=0.25) -> 0.218;
  exponential (true xi=0) -> 0.009. Estimator works.
- FOUND finite-sample flaw: at q=0.90, validate era (~112 games/team) gives
  ~11 exceedances < 15-fit floor -> persistence test starved. Pre-run fix:
  PREREG amendment A7–A9: primary threshold q=0.85 (~17-29 exceedances/era);
  robustness sweep q in {0.80,0.85,0.90} with fragility kill; synthetic null
  mirrors real per-era sizes (200/120).
- placebo n_perm 200->100 (compute concession on shared 2-CPU box; noted here).
- bootstrap: 1000 reps primary tail / 500 secondary per report contract.

## 2026-09-13 ~21:10 — continuation after restart drain (new worker)
- Status on takeover: PREREG finalized (no full run done — DATA GATE still
  closed, MANIFEST.md absent, snapshot dir only has pbp_1999..2004 so far);
  venv OK; harness OK; watch_manifest.sh watcher was DEAD (only the start
  line in logs/watcher.log) -> RESTARTED 21:09 CDT (PID 2149), polling
  60x180s, auto smoke+full on MANIFEST arrival.
- BUG FOUND + FIXED (pre-run, data-free): placebo_suite passed team labels
  in X and totals as y, so harness.run_placebo's shuffle arm permuted the
  TOTALS while the statistic ignored y -> p_shuffle=1.0 always, REPORT.md
  would have printed a mechanically false "PLACEBO FAIL: pipeline is broken"
  on real data. FIXED: y = team labels, X = (era, total); shuffle arm is now
  the preregistered team-label shuffle. Recorded as PREREG amendment A10/A11.
  Killed the two stale background jobs (null validation + smoke) that were
  running the old code; re-running both on the fixed code.
- 2026-09-13 ~21:52 CDT — MANIFEST.md ARRIVED (data gate OPEN). Watcher
  fired automatically: smoke (mechanics) at 02:52 UTC then T4_MODE=full.
  Full pipeline running under watcher (niced); report-monitor armed for
  REPORT.md. Awaiting full-run verdict.
