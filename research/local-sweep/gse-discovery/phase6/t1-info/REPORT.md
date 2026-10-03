# T1 — Information-theoretic structure: REPORT
## PROJECT MOVE-37 | GSE machine-discovery PHASE 6 | 2026-09-13/14
**Family:** T1 (information-theoretic). **Prereg:** `PREREG.md` (written before any run;
amendment 2026-09-14 logged pre-full-run, no results seen).
**Code:** `t1_info.py` (estimators), `run_t1.py` (pipeline). **Seed:** 20260913.
**Code hash:** `1f9e9e966dcc` (sha256 of t1_info.py, first 12).

---

## Data
- Full run: frozen snapshot `~/workspace/gse-discovery/data_snapshot_20260913/`
  (MANIFEST.md, created 2026-09-14T02:49:49Z; 27 seasons, 1,279,628 pbp rows).
  **Only snapshot data used.** No live pulls in the full run.
- Read: 13 columns per season parquet (the 3 personnel columns are absent in ALL
  seasons — see §T1b/T1c).
- 906,811 qualifying plays (run/pass only, no punts/kicks/spikes/kneels, EPA/down/
  ydstogo/yardline_100/posteam non-null; team-seasons with <800 qualifying plays
  dropped per prereg).
- Era split (mandatory): train ≤2010 (381 team-seasons), validate 2011–2017 (224),
  test 2018–2025 (256). Total 861 team-seasons.
- Sample smoke test: nflreadpy pbp 2024 only — NOT the snapshot, NOT a prereg test
  (results in `results_SAMPLE-2024.json`).

### Data-integrity incident (found and fixed mid-run)
The snapshot contains a `pbp/` subdirectory duplicating the 27 top-level
`pbp_YYYY.parquet` files; the first full attempt (started 03:13:12) walked the
whole tree, loaded 54 files, and double-counted every season (1.81M "qualifying"
plays from 1.28M rows). Caught on the manifest row-total cross-check, **killed via
SIGTERM before any results were computed or written**, `load_pbp_snapshot` patched
to dedupe by basename (keeps the shallower path = top-level files matching the
manifest exactly: 1,279,628 rows). The clean re-run (started 03:15:32) used 27 files.
A stray-loader-line pollution from a post-hoc helper was scrubbed from RUNLOG.md
(raw preserved at `/tmp/RUNLOG.bak`).

## Placebo / pipeline validation (synthetic null, order-1 Markov chain, true H=0.9197 bits)
| estimator | estimate | expectation |
|---|---|---|
| LZ entropy rate | 1.0432 | ≈0.92 (finite-sample upward bias, documented) |
| plug-in H(X_t\|X_{t-1}) | 0.9238 | 0.9197 ✓ |
| TE, independent Y channel | 0.0034 bits | ≈0 ✓ |
| MI, shuffled labels | 0.0044 bits | ≈0 ✓ |
Pipeline introduces no spurious information. ✓

## T1a. Entropy rate → offensive efficiency

Entropy-rate estimates, team-season level (bits/play, LZ = Kontoyiannis estimator;
H1 = plug-in H(X_t|X_{t-1}); H_sit = H(X_t|X_{t-1}, situation-cell)):

| era | n | LZ mean±sd | H1 mean±sd | H_sit mean±sd | EPA/play mean |
|---|---|---|---|---|---|
| train ≤2010 | 381 | 1.1066±0.0291 | 0.9798±0.0187 | 0.8007±0.0291 | −0.0347 |
| validate 2011–2017 | 224 | 1.0912±0.0349 | 0.9693±0.0227 | 0.7923±0.0349 | −0.0118 |
| test 2018–2025 | 256 | 1.0950±0.0338 | 0.9717±0.0220 | 0.8043±0.0323 | −0.0007 |

Spearman ρ (entropy rate vs team-season EPA/play), 95% bootstrap CIs (2000 resamples):

| era | ρ(LZ) | ρ(H1) | ρ(H_sit, situation-conditioned) |
|---|---|---|---|
| train | +0.064 [−0.04,+0.16] | +0.126 [+0.03,+0.23] | **+0.223 [+0.12,+0.32]** |
| validate | +0.096 [−0.03,+0.23] | +0.114 [−0.02,+0.25] | **+0.340 [+0.22,+0.45]** |
| test | +0.121 [−0.00,+0.24] | **+0.206 [+0.09,+0.33]** | **+0.201 [+0.08,+0.32]** |

Bold = CI strictly excludes zero.

Reading against the prereg: the hypothesis is directional (ρ>0). The
situation-conditioned metric — the one the identification argument elevates as
the confound-adjusted measure — is strictly positive in **all three eras**,
including the held-out test era (+0.201, CI [+0.08,+0.32]). However, the prereg's
named *primary* estimator (LZ) does NOT clear zero on the test era (CI straddles
0 at −0.002 to +0.243).

## Dumb-baseline duel (the prediction test)
OLS EPA ~ down dummies + ydstogo + ydstogo² + yardline_100 + yardline_100²,
fit on train (393,924 plays), evaluated on test-era plays (276,440).
Challenger adds team-season info descriptors (LZ, H1, H_sit) frozen at ≤2017.
Metric: test MAE (primary), RMSE (secondary); paired comparison of squared errors.

| | MAE | RMSE |
|---|---|---|
| baseline | 0.9589510 | 1.3864948 |
| + info features | 0.9589471 | 1.3864192 |
| Δ (baseline − challenger) | **0.0000039** | 0.0000756 |

Paired t = 1.94, one-sided p = 0.026.

The duel is a **practical null**: the challenger trims test MAE by 3.9×10⁻⁶
EPA/play — zero for every purpose. The nominally significant paired p is a
large-n artifact (n=276,440). Team-level play-call unpredictability carries no
predictive signal for play-level EPA beyond down/distance/field position.

## T1b. Transfer entropy defense ↔ offense
**OBITUARY (data kill, not theory kill):** `offense_personnel`,
`defense_personnel`, and `defenders_in_the_box` are absent from **all 27 snapshot
seasons** (0% coverage, verified per-season via `pbp_YYYY_columns.txt`). No
defensive pre-snap channel exists, so the prereg's ≥50%-coverage feasibility gate
fails at 0%. Killed as infeasible-on-this-data per the prereg's own gate.
Revisit when real charting data exists.

## T1c. Mutual information: personnel grouping ↔ EPA
**OBITUARY (data kill):** `offense_personnel` is absent from all 27 snapshot
seasons (0% coverage), which voids even the prereg's 2015+ fallback split —
there are no plays anywhere to compute MI on. Killed as infeasible-on-this-data.
Revisit with charting data.

## Kill-criteria audit
- T1b/T1c: killed by the prereg's explicit feasibility gates (0% coverage < 50%).
- T1a directional association: partial support — the confound-adjusted
  situation-conditioned metric clears zero in all eras including the held-out
  test era; the prereg's primary LZ estimator does not.
- T1a duel: dead on effect size (dMAE ≈ 0).
- **Honesty flag:** the banked `PREREG.md` in the workspace is itself truncated —
  it contains a literal `[truncated 4679 chars]` marker exactly where the duel
  decision rule / kill-criteria section should be. The explicit duel kill rule
  was therefore unavailable; the verdict applies the prereg's stated structure
  (MAE primary, paired comparison) and judges the duel dead on magnitude.

## Verdict
**T1a — association present, prediction dead; NOT advanced.** There is a real,
era-stable, situation-adjusted association: less predictable play-calling (after
removing what game state dictates) accompanies higher offensive EPA/play
(test-era ρ=+0.201, CI strictly positive in all three eras). But it does not
survive the operational test — the duel shows team-season information descriptors
add nothing to the dumb baseline (dMAE=3.9e-06), and the prereg's primary LZ
estimator fails to clear zero on the held-out test era. This is a descriptive
curiosity, not a discovery to build on: do not publish an "entropy drives
efficiency" claim from it.

**T1b, T1c — data-killed** (personnel columns absent in all 27 snapshot seasons).

**Overall T1 family verdict: KILLED as a discovery lane on this data.**
No machine-discovered structure advances from T1. The association finding stays
in the record as descriptive evidence; the lane is only reopened with richer
charting data (personnel/channel columns), per the obituaries above.
