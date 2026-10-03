[2026-09-14T03:36:27.534948+00:00] T9 run start | seed=42 tag=primary | code_sha256=adf2e8742502ed9c750bbf1be0c7b1bae8ba66ef24bedf2bf112e50818cf5752
[2026-09-14T03:36:27.535042+00:00] snapshot=/home/hatch/workspace/gse-discovery/data_snapshot_20260913

## Session history (2026-09-13/14, pre-run)

- Preregistered design + 6 kill criteria; seeds 42/123/7; era split
  train<=2010 / val 2011-2017 / test 2018-2025.
- Pre-reboot smoke (fallback honest-forest): case A planted-heterogeneity
  PASSED (duel +0.0528, p=0.0009).
- Env: venv econml 0.17.0 / sklearn 1.9.1 / scipy 1.18.1 / numpy 2.5.3 /
  pandas 3.0.5. econml needs discrete_treatment=True (PREREG addendum).
- VM reboot #1 (~02:09): killed a pip install mid-transaction -> broken
  sklearn (stray partial dir in ~/.local); fixed by deleting stray +
  force-reinstall into venv.
- OpenBLAS thread-init hang on this box -> all runs export
  OPENBLAS_NUM_THREADS=1 OMP_NUM_THREADS=1.
- Data-loading audits: (1) column projection to 26 NEED_COLS (full reads
  OOM); (2) pbp/ subdir symlinks double-counted plays -> non-recursive
  root glob (27 files, 1,279,628 rows); (3) posteam_elo column exists but
  all-junk -> prior-season offensive EPA/play fallback confirmed.
- Pre-run audit: n=100,316; treat 0.1428; win 0.4743;
  train/val/test=42518/27123/30675; go-rate 0.125->0.118->0.190.
- VM reboot #2 (~03:02): split run into stage 1 (checkpoint) + stage 2
  (permutations); run_all.sh orchestrates 3 seeds, skips done stages.
- Smoke (econml path): case A main fit done, CATE policy +0.0658 over
  homogeneous (p=0.0001); perms in progress. Box load ~11, slow.
[2026-09-14T03:38:49.957887+00:00] loaded 1279628 pbp rows from 27 file(s): ['pbp_1999.parquet', 'pbp_2000.parquet', 'pbp_2001.parquet', 'pbp_2002.parquet', 'pbp_2003.parquet', 'pbp_2004.parquet', 'pbp_2005.parquet', 'pbp_2006.parquet', 'pbp_2007.parquet', 'pbp_2008.parquet', 'pbp_2009.parquet', 'pbp_2010.parquet', 'pbp_2011.parquet', 'pbp_2012.parquet', 'pbp_2013.parquet', 'pbp_2014.parquet', 'pbp_2015.parquet', 'pbp_2016.parquet', 'pbp_2017.parquet', 'pbp_2018.parquet', 'pbp_2019.parquet', 'pbp_2020.parquet', 'pbp_2021.parquet', 'pbp_2022.parquet', 'pbp_2023.parquet', 'pbp_2024.parquet', 'pbp_2025.parquet']
[2026-09-14T03:38:49.996261+00:00] snapshot MANIFEST.md sha256=be1592e836852c807183f88a1b00baa6d1400acab4c0d7acff2e8ff841ac8759
[2026-09-14T03:39:06.634051+00:00] analysis frame: n=100316 | treat_rate=0.143 | win_rate=0.474 | quality=prior-season offensive EPA/play (snapshot-computed)

## 2026-09-14 ~03:52 UTC — SMOKE PASSED (econml path, refactored code)
- Case A (planted heterogeneity): var_cate=0.01060 (kill_flat=False);
  duel +0.0658 (p=0.0001, kill_duel=False); perm mean 0.00500 vs obs
  0.01060 -> within_0.005=False (kill_permutation=False). Correctly
  detects real heterogeneity and does NOT flag it as spurious.
- Case B (homogeneous DGP): var_cate=0.00024 -> kill_flat=True;
  VERDICT "KILL (NULL): no detected heterogeneity". Perm correctly
  within_0.005=True. Duel +0.0001 -> kill_duel=True. All correct.
- Note: synthetic calibration slopes (1.87 / 4.82) reflect forest
  shrinkage at n=2.7k; real train n=42.5k should shrink less. The
  preregistered [0.7,1.3] band applies as-is to real data.
- Timing: ~5 min wall per full refit on 2.7k obs at ~9% CPU (box load ~10).
[2026-09-14T03:52:48.350369+00:00] results -> ./t9_results_seed42_primary.json
[2026-09-14T03:52:48.350442+00:00] var_cate_test=0.00026 | cal_slope=-2.166 | duel_diff=-0.0109 | overlap_test=0.283
[2026-09-14T03:52:48.350455+00:00] VERDICT: KILL (NULL): no detected heterogeneity — homogeneity sufficient.
[2026-09-14T03:52:48.350469+00:00] elapsed=821.7s
[2026-09-14T04:05:27.056185+00:00] T9 run start | seed=123 tag=primary | code_sha256=adf2e8742502ed9c750bbf1be0c7b1bae8ba66ef24bedf2bf112e50818cf5752
[2026-09-14T04:05:27.056924+00:00] snapshot=/home/hatch/workspace/gse-discovery/data_snapshot_20260913
[2026-09-14T04:05:29.253282+00:00] T9 run start | seed=7 tag=primary | code_sha256=adf2e8742502ed9c750bbf1be0c7b1bae8ba66ef24bedf2bf112e50818cf5752
[2026-09-14T04:05:29.260512+00:00] snapshot=/home/hatch/workspace/gse-discovery/data_snapshot_20260913
[2026-09-14T04:07:23.529455+00:00] loaded 1279628 pbp rows from 27 file(s): ['pbp_1999.parquet', 'pbp_2000.parquet', 'pbp_2001.parquet', 'pbp_2002.parquet', 'pbp_2003.parquet', 'pbp_2004.parquet', 'pbp_2005.parquet', 'pbp_2006.parquet', 'pbp_2007.parquet', 'pbp_2008.parquet', 'pbp_2009.parquet', 'pbp_2010.parquet', 'pbp_2011.parquet', 'pbp_2012.parquet', 'pbp_2013.parquet', 'pbp_2014.parquet', 'pbp_2015.parquet', 'pbp_2016.parquet', 'pbp_2017.parquet', 'pbp_2018.parquet', 'pbp_2019.parquet', 'pbp_2020.parquet', 'pbp_2021.parquet', 'pbp_2022.parquet', 'pbp_2023.parquet', 'pbp_2024.parquet', 'pbp_2025.parquet']
[2026-09-14T04:07:23.556316+00:00] snapshot MANIFEST.md sha256=be1592e836852c807183f88a1b00baa6d1400acab4c0d7acff2e8ff841ac8759
[2026-09-14T04:07:28.839808+00:00] loaded 1279628 pbp rows from 27 file(s): ['pbp_1999.parquet', 'pbp_2000.parquet', 'pbp_2001.parquet', 'pbp_2002.parquet', 'pbp_2003.parquet', 'pbp_2004.parquet', 'pbp_2005.parquet', 'pbp_2006.parquet', 'pbp_2007.parquet', 'pbp_2008.parquet', 'pbp_2009.parquet', 'pbp_2010.parquet', 'pbp_2011.parquet', 'pbp_2012.parquet', 'pbp_2013.parquet', 'pbp_2014.parquet', 'pbp_2015.parquet', 'pbp_2016.parquet', 'pbp_2017.parquet', 'pbp_2018.parquet', 'pbp_2019.parquet', 'pbp_2020.parquet', 'pbp_2021.parquet', 'pbp_2022.parquet', 'pbp_2023.parquet', 'pbp_2024.parquet', 'pbp_2025.parquet']
[2026-09-14T04:07:28.843002+00:00] snapshot MANIFEST.md sha256=be1592e836852c807183f88a1b00baa6d1400acab4c0d7acff2e8ff841ac8759
[2026-09-14T04:07:37.457303+00:00] analysis frame: n=100316 | treat_rate=0.143 | win_rate=0.474 | quality=prior-season offensive EPA/play (snapshot-computed)
[2026-09-14T04:07:41.454840+00:00] analysis frame: n=100316 | treat_rate=0.143 | win_rate=0.474 | quality=prior-season offensive EPA/play (snapshot-computed)
[2026-09-14T04:19:54.013542+00:00] T9 run start | seed=123 tag=primary | code_sha256=adf2e8742502ed9c750bbf1be0c7b1bae8ba66ef24bedf2bf112e50818cf5752
[2026-09-14T04:19:54.015503+00:00] snapshot=/home/hatch/workspace/gse-discovery/data_snapshot_20260913
[2026-09-14T04:19:54.675104+00:00] T9 run start | seed=7 tag=primary | code_sha256=adf2e8742502ed9c750bbf1be0c7b1bae8ba66ef24bedf2bf112e50818cf5752
[2026-09-14T04:19:54.679362+00:00] snapshot=/home/hatch/workspace/gse-discovery/data_snapshot_20260913
[2026-09-14T04:21:20.505411+00:00] loaded 1279628 pbp rows from 27 file(s): ['pbp_1999.parquet', 'pbp_2000.parquet', 'pbp_2001.parquet', 'pbp_2002.parquet', 'pbp_2003.parquet', 'pbp_2004.parquet', 'pbp_2005.parquet', 'pbp_2006.parquet', 'pbp_2007.parquet', 'pbp_2008.parquet', 'pbp_2009.parquet', 'pbp_2010.parquet', 'pbp_2011.parquet', 'pbp_2012.parquet', 'pbp_2013.parquet', 'pbp_2014.parquet', 'pbp_2015.parquet', 'pbp_2016.parquet', 'pbp_2017.parquet', 'pbp_2018.parquet', 'pbp_2019.parquet', 'pbp_2020.parquet', 'pbp_2021.parquet', 'pbp_2022.parquet', 'pbp_2023.parquet', 'pbp_2024.parquet', 'pbp_2025.parquet']
[2026-09-14T04:21:20.505763+00:00] snapshot MANIFEST.md sha256=be1592e836852c807183f88a1b00baa6d1400acab4c0d7acff2e8ff841ac8759
[2026-09-14T04:21:22.811203+00:00] loaded 1279628 pbp rows from 27 file(s): ['pbp_1999.parquet', 'pbp_2000.parquet', 'pbp_2001.parquet', 'pbp_2002.parquet', 'pbp_2003.parquet', 'pbp_2004.parquet', 'pbp_2005.parquet', 'pbp_2006.parquet', 'pbp_2007.parquet', 'pbp_2008.parquet', 'pbp_2009.parquet', 'pbp_2010.parquet', 'pbp_2011.parquet', 'pbp_2012.parquet', 'pbp_2013.parquet', 'pbp_2014.parquet', 'pbp_2015.parquet', 'pbp_2016.parquet', 'pbp_2017.parquet', 'pbp_2018.parquet', 'pbp_2019.parquet', 'pbp_2020.parquet', 'pbp_2021.parquet', 'pbp_2022.parquet', 'pbp_2023.parquet', 'pbp_2024.parquet', 'pbp_2025.parquet']
[2026-09-14T04:21:22.850558+00:00] snapshot MANIFEST.md sha256=be1592e836852c807183f88a1b00baa6d1400acab4c0d7acff2e8ff841ac8759
[2026-09-14T04:21:30.239491+00:00] analysis frame: n=100316 | treat_rate=0.143 | win_rate=0.474 | quality=prior-season offensive EPA/play (snapshot-computed)
[2026-09-14T04:21:31.092528+00:00] analysis frame: n=100316 | treat_rate=0.143 | win_rate=0.474 | quality=prior-season offensive EPA/play (snapshot-computed)

## 2026-09-14 ~03:52 UTC — SEED 42 STAGE-1 COMPLETE: KILL (NULL)
- var_cate_test=0.00026 (kill_flat: <0.01)
- cal_slope=-2.166, CI [-4.78, 0.45] (kill_calibration: outside [0.7,1.3])
- duel CATE-h Homogeneous = -0.0109, paired t p=0.988 (kill_duel: <0.02)
- overlap test kept frac = 0.283 (kill_overlap: <0.90)
- Propensity AUC val = 0.950 (treatment highly predictable); outcome R2 = 0.314
- ATE train = +0.0237; era stability passes (22 cells, 100% sign-consistent)
- VERDICT: KILL (NULL): no detected heterogeneity — homogeneity sufficient.
- Elapsed 821.7s. Checkpoint saved.

## 2026-09-14 ~04:19 UTC — VM reboot #3
- Killed seed-42 perms (in progress), seed-123/7 stage-1 (in fitting).
- Seed-42 stage-1 JSON + checkpoint survived (under ~/workspace).
- Relaunched on quiet box: seed-42 stage-2 (perms from checkpoint),
  seed-123 stage-1, seed-7 stage-1 — all at nice 15, OPENBLAS capped.
[2026-09-14T04:34:02.373318+00:00] results -> ./t9_results_seed123_primary.json
[2026-09-14T04:34:02.373397+00:00] var_cate_test=0.00021 | cal_slope=-3.418 | duel_diff=-0.0072 | overlap_test=0.283
[2026-09-14T04:34:02.373414+00:00] VERDICT: KILL (NULL): no detected heterogeneity — homogeneity sufficient.
[2026-09-14T04:34:02.373431+00:00] elapsed=752.1s
[2026-09-14T04:34:02.533293+00:00] results -> ./t9_results_seed7_primary.json
[2026-09-14T04:34:02.533398+00:00] var_cate_test=0.00023 | cal_slope=-2.551 | duel_diff=-0.0118 | overlap_test=0.283
[2026-09-14T04:34:02.533417+00:00] VERDICT: KILL (NULL): no detected heterogeneity — homogeneity sufficient.
[2026-09-14T04:34:02.533436+00:00] elapsed=751.4s

## 2026-09-14 ~04:34 UTC — REPLICATION SEEDS CONFIRM NULL
- Seed 123 stage-1: var_cate=0.00021 | cal_slope=-3.418 |
  duel_diff=-0.0072 | overlap=0.283 -> KILL (NULL)
- Seed 7 stage-1: var_cate=0.00023 | cal_slope=-2.551 |
  duel_diff=-0.0118 | overlap=0.283 -> KILL (NULL)
- All three seeds (42/123/7) agree on every kill criterion.
- Prereg satisfied: "for a NULL, primary verdict stands with
  replications reported."
- Seed-42 permutations (stage 2) still running in background;
  confirmatory only (cannot overturn 4-kill NULL).
