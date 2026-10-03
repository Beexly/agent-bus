# T5 RUNLOG — survival analysis of drives

## 2026-09-13 ~20:30 CDT — setup
- Work dir: ~/workspace/gse-discovery/phase6/t5-survival/
- Harness dir phase6/harness/ is EMPTY (no HARNESS_README.md); proceeding
  with prereg + code per task instructions ("integrate later").
- No data snapshot yet (data_snapshot_20260913/ absent; DATA worker
  downloading).
- Env: system python has numpy/scipy but PEP 668 blocks pip; nflreadpy NOT
  installed. Created venv at phase6/t5-survival/venv with nflreadpy 0.1.5,
  polars, numpy, scipy. (VM restarted once mid-setup ~01:31 UTC; venv
  survived, reinstalled packages after restart.)

## 2026-09-13 ~20:45 — PREREG.md written BEFORE any fit
- Estimand: discrete-time cause-specific hazards h_score / h_dead per play,
  team FE => S_i = (off_score - off_dead) - (def_score - def_dead).
- Censoring: end-of-half/game + kneel-out-clock drives censored; safeties
  dropped (<0.5%); missed/blocked FG + Opp touchdown = h_dead events.
- Duel: next-week home-win prediction, test 2018-2025; hazard vs EPA/drive
  vs Elo; disagreement region |implied spread diff| >= 2; market duel vs
  closing line; K1/K2/K3/K4 kill criteria; BH across 4 tests.
- Amendments A1-A5 (all pre-fit): P1 -> paired permutation + P2/P3;
  null-covariate play drops logged; duel weights on 2002-2010 expanding
  per-season ratings; weekly fits w/ warm start; full-rank
  reparameterization (intercept + drop-first) after Newton diverged on the
  rank-deficient dummy spec.

## 2026-09-13 ~21:00-22:20 — code
- common.py: snapshot-first loader (falls back to nflreadpy), bins, sets.
  (DEAD_SET includes "Opp touchdown" = pick-6/fumble-return TD.)
- build_panel.py: pbp -> play-level risk set -> cells_{s}.parquet,
  drives_{s}.parquet, cells_wk_{s}.parquet (s>=2011). 0-based t_bin/down.
- fit_hazard.py: Newton-IRLS weighted logistic w/ backtracking line search,
  ridge 1e-6; sum-to-zero team FE; ratings_from_fits.
- duel.py + stages.py: games/schedules, era fits, per-season train ratings,
  weekly test ratings (mp Pool(2)), Elo (K,hfa grid-fit on train), duel
  logistics, disagreement region, market OLS, paired permutation (10k),
  BH, K4 Spearman.
- placebo_stage.py: P2 synthetic null (FE=0 parametric bootstrap -> refit
  -> max|FE|<0.05, |duel delta|<0.002); P3 within-stratum target shuffle.
- Empirical checks (2024): epa is posteam-perspective (+2.05 on TD plays);
  corr(spread_line, home_margin)=+0.50 => spread_line already home-oriented.

## INCIDENT 2026-09-13 ~22:10 — unexplained file modifications
- fit_hazard.py/design() gained a "shift" block I never wrote (shifted
  already-0-based t_bin, creating an all-zero t_bin=15 column -> singular
  design, Newton stalled). Repaired by full-file rewrite; verified by
  grep + sha256 (8c5f8aac...).
- One build_panel.py edit (down 0-basing) appeared reverted in a build log
  hash; re-verified present via grep + full read (it had stuck after all —
  hash confusion; treating as resolved but watching).
- CAUSE UNKNOWN. Mitigation: single edit per file per message, immediate
  grep verification, full-file rewrites for fit_hazard.py. Code hashes
  logged: fit_hazard.py 8c5f8aac10d7..., build_panel.py verified by read.

## 2026-09-13 ~22:25 — resource contention
- Box: 2 CPU / 8GB shared. move37_irl_cara_fix1.py (2.6GB) + DATA worker
  download_snapshot.py (2.2GB) exhaust RAM (340MB free); load avg ~10.
- sample_fit.py (2024) starved at 0% CPU; killed stuck instances.
- Sample fit NOT yet validated end-to-end (mechanics). Full runs BLOCKED
  on: (a) data snapshot MANIFEST.md, (b) memory freeing.
- Next: verify files, run sample fit when RAM allows, poll MANIFEST
  (sleep 180s, up to ~3h), then: full 27-season build -> era -> trainfeat
  -> weekly -> eval -> placebo -> REPORT.md.

## Code hashes (post-repair)
- fit_hazard.py: 8c5f8aac10d7b34317395dd85b41f8f4374b221381f48c9fded4517369e8c0fb

## INCIDENT 2026-09-13 ~22:55 — unknown process in work dir
- PID 6801 (cwd = phase6/t5-survival) running `venv/bin/python
  build_panel.py 1999 2000 ... 2025` (all 27 seasons), started 02:51:42 UTC
  — NOT launched by this worker. Possibly a duplicate T5 worker or the
  parent. It runs the verified-correct build_panel.py against the frozen
  snapshot; outputs (cells_*/drives_*/cells_wk_*) are deterministic, so
  letting it run. Watching for clobbering/duplicate expensive stages.
- Snapshot COMPLETE: data_snapshot_20260913/MANIFEST.md (created
  02:49:49 UTC), pbp 1999-2025 + schedules + rosters + injuries +
  depth_charts + officials. Weather: recorded gap (no nflverse source).
- Memory recovered (3.8GB avail) after snapshot download finished.

## 2026-09-13 ~23:20 — CRITICAL IRLS BUG found and fixed (pre-full-run)
- The rewritten irls() solved XtWX @ step = XtWz - ridge*beta, which is the
  FULL updated beta (beta + Newton increment), but applied it as
  beta + alpha*step. Fits ran to max_iter=100 without converging
  (conv=False, NLL 408 on 3k-cell subset).
- Fixed: step = solve(XtWX, XtWz - XtWX@beta) = Newton increment
  (penalized-gradient direction). Verified on 3k cells: 19/17 iters,
  conv=True, NLL 344/347.
- Full 2024 mechanics validation (fixed code): score 9 iters NLL 5287.6,
  dead 8 iters NLL 4916.4; S top8 BUF .992 PHI .767 BAL .693 PIT .685 DET
  .567; bot8 CLE -.897 JAX -.753 SF -.691 CAR -.593 LV -.592. PASSES sanity.
- Duel-window fixes: weekly_ratings() now covers 2011-2025 (validation
  gets genuine rolling ratings, hard-fail if missing); EpaLookup
  precompute (identical math); labels from feature frame; duel weights on
  2002-2010. PREREG A4 corrected + A6/A7/A8/A9.
- fit_hazard.py Newton line: verified via grep (solve(XtWX, XtWz - XtWX @ beta)).

## 2026-09-13 ~23:40 — duplicate pipeline operator
- A second operator ("phantom chain", PID 7001) is running the full duel
  chain (era->trainfeat->weekly->eval->placebo) in this work dir with its
  own logs/duel_*.log. Started 03:35:24 UTC, after my era completed.
- Killed my duplicate trainfeat to avoid double compute; outputs are
  deterministic (fixed seed + same code), so monitoring the chain and will
  verify all outputs before writing REPORT.md. If the chain stalls, I take
  over remaining stages (all idempotent).
- My era (fixed code): K4 rho=-0.001 p=0.5058 -> K4 FAILS (gate).

## 2026-09-13 ~23:50 — phantom rewrote fit_hazard.py irls() (again)
- At 03:29:28 UTC the other operator replaced my line-search IRLS with
  standard direct-update IRLS: beta = solve(X'WX + ridge*I, X'Wz).
- Verified mathematically: this IS the exact penalized Newton step.
  Verified empirically: converges 19/17 iters, NLL 344.18/346.92 —
  IDENTICAL optimum to my fixed version. The code is correct.
- The chain's era (started 03:35:24) runs this version; outputs valid.
- Code hashes snapshotted to logs/code_hashes_verified.txt. Continuing
  to monitor; will re-verify if files change again.

## 2026-09-14 ~00:15 UTC — recognizing the "phantom" as a helper
- The other operator is a competent helper: it fixed the fork-deadlock
  (spawn context + explanatory NOTE), rewrote IRLS correctly, built the
  27-season cells, and created harness_duel.py for harness integration.
- It relaunched as CHAIN2 (PID 10893): weekly -> eval -> placebo.
- I killed my duplicate weekly; monitoring CHAIN2's logs/duel_*.log.
- Outstanding coordination risk: uncoordinated duplicate compute. Outputs
  are deterministic (seed 3705, same code), so no correctness risk.

## 2026-09-14 ~07:00 UTC — pipeline complete, verdict: NOT PROMOTED
- Weekly ratings: 260 files complete (2011-2025).
- Eval: K1 FAIL (haz 0.6778 vs elo 0.6512, Δ=+0.0265, p=1.0).
  K2 FAIL (n=1154, Δ=+0.0351, p=1.0). Market FAIL (p=0.903).
- K4: FAIL (ρ=-0.001, p=0.506) — confirmed on fixed code.
- P3 placebo: FAIL (max|FE|=0.117 on null data) — FE are noise.
- REPORT.md written with honest obituary.
- All gates failed; discovery is a null result. EPA remains superior.
