# T6 RUNLOG — Bayesian hierarchical partial pooling
Family T6 worker log. All times UTC (box) unless noted.

## 2026-09-14 ~01:30 UTC (2026-09-13 20:30 CDT)
- Task received. Read PHASE6_EXPANDED_PROGRAM.md §3 T6, §4, §7.
  Harness README absent (phase6/harness/ empty) — proceeding with prereg +
  code, will integrate with harness later if it appears.
- Wrote PREREG.md FIRST, before any data access: estimand, pooling
  structure, empirical-Bayes identification, duel spec, kill criteria.
- Computation choice documented in prereg: no PyMC/Stan on this box
  (2 CPUs, ~3GB free); empirical Bayes + analytic James-Stein shrinkage
  via numpy/scipy. For Normal-Normal conjugate this is the exact
  posterior-mean solution, not an approximation.
- Data snapshot NOT yet present (data_snapshot_20260913/MANIFEST.md
  missing; DATA worker still building). Poll loop started: 180s interval,
  up to ~3h. NO full runs on unversioned data per program rules.
- pip install nflreadpy into system python failed (PEP 668
  externally-managed; typing_extensions uninstall conflict). Built
  .venv, installed nflreadpy 0.1.5 there (polars-based, no numpy).
  System python has numpy 1.26.4 / scipy 1.11.4 / pandas 2.1.4.
  Runner: t6py.sh = system python3 + venv site-packages on PYTHONPATH,
  nice -n 10.
- Wrote t6_duel.py (code_hash logged at runtime): hyperparameter fit
  (marginal ML tau2, flat-profile diagnostic), season prediction loop,
  Elo baseline, Holm-corrected paired t-tests, permutation + placebo,
  market duel, HFA ablation, kill criteria.
- Smoke test launched on 2022-2023 (live nflreadpy pull, code-path
  verification only, NOT results).

## 2026-09-14 ~01:44 UTC — smoke test PASSED (2022-2023, unversioned pull, code-path only)
- 543 games built. Pseudo-train (2022 only, 32 groups):
  tau2_off=0.00241 (LL gain vs tau2=0: 16.0, curvature 7.4 → identified);
  tau2_def=0.00033 (LL gain 0.6, curvature 0.85 → near-flat ON ONE SEASON;
  expected to sharpen with 12-season train, ~370 groups).
- 2023 weeks 1-6 predictions: n=93, ll_hier 0.6986 / ll_raw 0.6989 /
  ll_elo 0.7042. Directionally hier < raw < elo, n.s. (smoke only).
- Full pipeline code paths verified: hyper fit, season prediction, Elo,
  paired tests, Holm. Permutation/placebo/market paths not yet exercised
  (await snapshot for full run).
- NOTE: imports take ~4 min on this loaded box (shared with other family
  workers). Full run will be slow; launched with nice -n 10.

## 2026-09-14 ~01:52 UTC — snapshot build in progress
- DATA worker actively writing data_snapshot_20260913/ (pbp 1999-2002,
  rosters, schedules, depth_charts landing; MANIFEST.md not yet written).
- Fixed load_snapshot_pbp() to glob pbp_*.parquet only (dir also holds
  rosters/schedules/depth_charts parquet). Verified all 13 needed columns
  exist in snapshot pbp files.
- Fixed centering consistency: predict_season now centers at era mean
  ybar (same as fit_tau2); raw baseline centered identically so the duel
  isolates shrinkage, not centering. Smoke test 2 re-passed.
- Poll loop continues (180s interval). REPORT.md skeleton drafted.
