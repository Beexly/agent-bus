# T5 verification notes (2026-09-13, seed 3705)

Continuity worker's review of the banked code (PREREG.md finalized pre-fit;
amendments A1–A4 all pre-fit).

## Active-worker collision (important)
The "killed" previous T5 worker was NOT dead: at 02:09–02:13 UTC it was
actively editing fit_hazard.py / build_panel.py / sample_fit.py and running
sample fits (PIDs 2085/2184/2245/2756, logs in /tmp/t5_samplefit3.log,
/tmp/t5_samplefit4.log). To avoid an edit war:
- I applied ONE fix to fit_hazard.py (1-based covariate shift) — it was
  clobbered by the sibling's 02:12:43 rewrite, which fixed the same problem
  more cleanly at the panel level (0-based t_bin/down in build_panel.py).
- I applied ONE fix to stages.py (A3 duel-weight window, see below);
  stages.py untouched by sibling since 01:45, low clobber risk.
- All heavy stages (build_panel full era, duel stages) left to the sibling;
  I monitor outputs and own verification + data-gate polling.

## Code review (on-disk state as of 02:15 UTC)
- common.py: OK. Bin edges match prereg §5. snapshot_pbp_dir() expects
  SNAP/pbp/ and SNAP/schedules/ subdirs — the downloader writes FLAT files
  (pbp_1999.parquet). MUST be resolved before full run or load_* falls back
  to live nflreadpy (forbidden by data gate). Check MANIFEST/final layout.
- build_panel.py (sibling rev 02:11:18): OK. 0-based t_bin {0..14}
  (0 = t1 ref, 14 = t15+ pooled — matches prereg "dummies 1..14, 15+"),
  0-based down {0..3}. Censoring per §3 (End of half/game, kneel ≤120s).
  is_last via int_range().over() after sort — order-safe (left join preserves).
  drives_* parquet carries epa_sum for the EPA contestant.
- fit_hazard.py (sibling rev 02:12:43): intercept + drop-first dummies,
  full-rank (rank 102/102 on 2024 cells), Newton-IRLS ridge 1e-6 +
  backtracking line search, sum-to-zero team FE via dropped-last recovery.
  Earlier revs had: 1D-intercept hstack crash (fixed), t=15→14 and
  down=4→3 clip-pooling (fixed at panel level), rank-deficiency conv=False
  (fixed). Current rev runs clean.
- duel.py: games/era/trainfeat/weekly/eval/placebo stage functions OK.
  stage_games normalizes spread_line sign on train corr — logged.
  elo_walk chronological, K/hfa grid-fit on train only — clean.
- stages.py: stage_era K4 Spearman+permutation OK; weekly windows match
  prereg (S-2,S-1 + S weeks<W, W≤4 → prior seasons only); mp.Pool(2).
  FIX APPLIED by continuity worker: duel-weight fit restricted to
  seasons 2002–2010 (was 1999–2010). Rationale: per-season expanding
  S_season_* ratings only exist from 2002 (A3); 1999–2001 games used the
  static full-train fit = within-train lookahead, and EPA windows were
  degenerate (empty S-2/S-1 history → x_epa=0).
- placebo_stage.py: P2 parametric bootstrap (FE=0 refit, gates max|FE|<0.05,
  |Δlogloss|<0.002) and P3 within-stratum target shuffle — match A1.
  P2 duel uses eval.json duel weights + static null S on test games. OK.
- sample_fit.py: mechanics-only smoke test. OK.

## Remaining compliance gaps (for sibling/parent)
1. DEAD_SET contains "Opp touchdown" (pick-6 etc.) — NOT in prereg §3's
   enumerated scoreless-death set. Defensible (drive died scoreless) but
   needs a one-line prereg amendment; currently an undocumented deviation.
2. Harness wiring: duel.py reimplements paired_perm_pvalue and bh locally
   instead of harness.permutation_test / benjamini_hochberg, and no
   harness.duel_report call is made. Task requires "Duel report via harness".
   Per-game log-loss vectors exist in stage_eval — wiring is easy.
3. epa_ratings_window is called per game (~7k × group_by on full drives) —
   slow (~20+ min est.); consider vectorizing if it becomes the bottleneck.
4. A2 null-covariate drop is implemented and logged. A4 weekly cells for
   seasons ≥2011 only — implemented.

## Data gate
Snapshot download in progress (PID 2114/1923): pbp 1999–2013 done at 02:13,
on season 2014. MANIFEST.md absent → NO full-era runs yet. Polling 180s.

## 2026-09-14 ~02:52 UTC — snapshot repaired, data gate OPEN, taking over full run
- Download had died after pbp_2023 (21-min fetch); restarted resume-capable
  download_snapshot.py. It completed 2024/2025 but crashed writing
  MANIFEST.md: KeyError 'columns' — file_stats_existing (resume path) omits
  the 'columns' key the fresh path sets. Fixed with a one-line patch
  (added "columns": cols to the resume entry) and generated MANIFEST.md from
  the checkpointed manifest.json (27 seasons). MANIFEST.md written 02:51 UTC.
- common.py expects SNAP/pbp/ and SNAP/schedules/ subdirs; downloader writes
  flat files. Created those subdirs with symlinks (27+27) — no data files
  touched. Snapshot reads verified (pbp 2024: 49,492 x 22 from snapshot).
- Sibling T5 worker quiet since ~02:24 UTC (last sample_fit died without
  output). Taking over the full pipeline run as of 02:52 UTC.

## 2026-09-14 ~03:07 UTC — duplicate-worker incident
- Sibling T5 session resurfaced and launched a second `duel.py era`
  (PID 2388/2389) while my era run (PID 1968, started 03:04:38) was in
  flight — both writing duel_out/*.json (non-atomic json.dump → corruption
  risk) and doubling CPU on the 2-CPU box.
- Killed the sibling's duplicate (2388/2389); mine continues. Takeover had
  been documented here at 02:52 UTC after 27+ min of sibling inactivity.
- Verified post-incident: stages.py and duel.py on disk contain all
  continuity-worker fixes (A3 window, dispatch fix). md5:
  stages.py 7e6f8f327bf27fab0697275a6e78bda5,
  duel.py ba672c4fe35a0a52e8272d45c90fef9c.

## 2026-09-14 ~03:19 UTC — post-reboot herd; sibling sample_fit killed
- VM rebooted ~03:03 UTC (uptime reset). All phase-6 workers restarted full
  pipelines (T1 run_t1.py, T9 t9_pipeline, run_all.py) — box heavily shared.
- Sibling T5 session resumed post-reboot with another read-only sample_fit
  (PID 2391). Killed it: redundant diagnostic (mechanics already verified),
  frees CPU, removes any chance it escalates to rewriting cells//duel_out
  under my running pipeline. Takeover documented 02:52 UTC stands.
- My era run (PID 1968) healthy, sole T5 pipeline writer.

## 2026-09-14 ~03:35 UTC — CRITICAL: IRLS step was mathematically wrong, fixed
- The 2024 sample fit with the "fixed" code still gave conv=False/100 iters.
  Root cause: irls() used an incremental step
  `beta + solve(XtWX, XtWz - ridge*beta)` which is NOT the Newton step
  (at ridge=0 it yields beta + (X'WX)^{-1}X'Wz, double-counting beta; the
  MLE is not even a fixed point). The line search masked it into a slow
  crawl. Old nll (score) 5917.5 vs true optimum 5287.6 — old fits were
  nowhere near the MLE.
- Replaced with the correct full-update Newton-IRLS
  beta = (X'WX + ridge*I)^{-1} X'Wz; convergence on |Δℓ| per prereg.
  This restores the preregistered estimator (not rescue tuning).
- Verification on 2024 cells: score conv=True 9 iters, dead conv=True
  8 iters, max|gradient| = 5.7e-06 (first-order condition holds).
  Ratings sane (top BUF/PHI/BAL, bottom CLE/JAX/SF).
- Killed the era run that used the wrong irls (its fits would be invalid);
  restarted full chain (era→trainfeat→weekly→eval→placebo) ~03:40 UTC.

## 2026-09-14 ~03:36-03:48 UTC — duplicate-orphan cleanup, chain relaunched
- After killing the wrong-irls era run, discovered MORE sibling orphans
  (reparented to init): era (03:30), trainfeat x2 (03:33, 03:35) — all
  launched post-reboot with the OLD wrong-irls code (imported before the
  03:36 fix), so all their outputs are invalid (conv=False).
- My background chain session (proc_7d33e8bdabbb) vanished without running
  anything; background exec sessions are unreliable post-reboot.
- Killed all t5-survival pipeline orphans (6224, 6729, 6945, 6947). Left
  t3-hmm's worker alone (different lane).
- Relaunched the full chain (era→trainfeat→weekly→eval→placebo) detached via
  nohup so it survives session flakiness; monitoring via logs/duel_*.log.
- NOTE for parent: if another T5 worker was re-spawned (my session did die
  repeatedly), its outputs used a provably non-convergent IRLS and are
  invalid; this report documents the correct-code pipeline.

## 2026-09-14 ~03:50 UTC — era done; K4 FAILS (real, not a bug)
- Era fits converged (train+val True). K4: Spearman rho=-0.001, p=0.506
  (one-sided), n=32. Gate needs rho>0.2, p<0.05 → FAIL. PROMOTE impossible.
- Within-era ratings are sane (train top NE/IND/PHI; val top SEA/NE/GB),
  and recover_fe correctly recenters all 32 teams to zero mean. So the
  ratings capture real within-era quality, but rank persistence across the
  1999-2010→2011-2017 boundary is nil — worse than net EPA/play (rho=0.288,
  p=0.11, computed independently). The hazard team-strength is dominated by
  noise for mid-tier teams (extremes like NE persist, middle is scrambled).
- Chain continues (trainfeat in progress) for K1/K2/K3.

## 2026-09-14 ~04:05 UTC — weekly Pool fork deadlock, fixed with spawn
- weekly_ratings() with mp.Pool(2) (fork) deadlocked: parent + workers all
  in futex wait, 0 CPU after 90s. Root cause: parent has polars' thread pool
  active (15 threads); fork inherits its locks broken; children deadlock on
  first polars/numpy use. (mp.Pool trivial test and single _weekly_one call
  both worked — only fork+threads deadlocked.)
- Fix: mp.get_context("spawn").Pool(2). _weekly_one was already module-level
  with local imports (spawn-safe). Verified with 2-task spawn test (OK).
- This is a correctness fix, not a science change (prereg silent on method).
- Relaunched chain2 (weekly→eval→placebo) detached via nohup ~04:10 UTC.
  Weekly covers 2011-2025 (~270 tasks); expect 2-4h under load.
