# Pre-registration: T9 / HETEROGENEOUS TREATMENT EFFECTS OF 4TH-DOWN AGGRESSIVENESS (CAUSAL FOREST)

**Author:** T9 worker (Motif subagent) | **Date:** 2026-09-13
**Status:** PRE-REGISTERED (locked before any run on the test era)
**Protocol source:** `~/workspace/gse-discovery/deepseek-move37-phase6-response-01.md` §3 (DeepSeek deliverable, Run ID MOVE-37-PHASE6-01)
**Program:** `~/workspace/gse-discovery/PHASE6_EXPANDED_PROGRAM.md` §§4, 7

> Rule (§4.1 of the program): pre-registration with kill criteria BEFORE every
> run. No HARKing. Amendments after first run require a new dated addendum;
> the original stays immutable.

## 1. Estimand

The Conditional Average Treatment Effect (CATE) of going for it on 4th down:

```
τ(x) = E[ Y(1) − Y(0) | X = x ]
```

- **Y** = 1 if the POSTEAM wins the game, else 0. Orientation: posteam's win probability.
- **T** = 1 if the posteam goes for it on 4th down (play_type ∈ {pass, run}); T = 0 if the posteam kicks (play_type ∈ {punt, field_goal}). Orientation: posteam's action.
- **X** = pre-snap covariates, all posteam-perspective: `ydstogo` (1–30), `yardline_100`, `score_differential` (−28…28), `game_seconds_remaining` (>0), `posteam_timeouts_remaining`, `defteam_timeouts_remaining`, posteam quality proxy (see §5).

- Target variable: game win indicator Y ∈ {0, 1}
- Unit of observation: one 4th-down play (play_type pass/run/punt/field_goal)
- Test-era population: all 4th-down decisions in NFL games, seasons 2018–2025, after the §5 filters

The estimand of interest is the HETEROGENEITY of τ(x) — its variance and its
calibration — not the ATE alone. The decision question: does a CATE-optimal
rule beat a homogeneous "4th-down bot" on the test era?

## 2. Identification argument

Unconfoundedness: {Y(0), Y(1)} ⊥ T | X.

Stated plainly (protocol §3.2): coaches' 4th-down decisions are not random
given X. Unobserved determinants (weather, injuries, gut feel, opponent
tendencies not in X) may also affect the outcome. Therefore τ(x) is
**"CATE under unconfoundedness"** — if the assumption fails, the estimates are
adjusted outcome differences between go-ers and kickers with the same X, NOT
causal effects. Any downstream causal language must carry this qualification.

Overlap: e(x) = P(T=1|X=x) ∈ [0.05, 0.95]; observations outside are trimmed
(not identified). Cells with < 30 treated or < 30 control pooled.

Finite-sample behavior at boundaries:
- 4th-and-long deep in own territory: e(x) → 0; CATE unidentified there — trimmed.
- Small cells: pooled; era-stability sign check only uses cells with ≥30 treated AND ≥30 control in EACH of train/val/test.
- Weak orthogonalization: if nuisance R² < 0.03 (outcome model) or propensity pseudo-R² < 0.03 (AUC < 0.60 as practical flag), CATE estimates are noisy — reported as a flag, not a kill (flag affects calibration interpretation).

## 3. Dumb-baseline duel spec

- Baseline: **homogeneous-ATE policy** — the "4th-down bot": go iff the train-era mean doubly-robust score (ATE) > 0, else always kick. Exact, reproducible from train data alone.
- Metric: AIPW win-probability on the test era (higher is better). Per-observation score for policy π: s_i(π) = μ̂_0(x_i) + γ̂_i · π(x_i), where γ̂ is the doubly-robust score and μ̂_0 the control-outcome nuisance, both fitted on train only.
- Test set: test-era (2018–2025) 4th-down plays after overlap trimming — SAME observations for family and baseline (paired).
- Market duel: N/A — no closing line exists for 4th-down *decision quality*; the public-model comparison IS the homogeneous bot baseline. Reported honestly as such.
- Win condition: mean(s(π_CATE)) − mean(s(π_homog)) ≥ 0.02 win-probability on the test era, with paired t-test p < 0.05.
- Secondary policies reported (means + regret vs CATE-optimal, no significance gate): always-go, historical-frequency (train-era go-rate by state cell; go iff rate > 0.5; cells with <30 treated or <30 control fall back to the overall train go-rate).
- Duel report generated via `harness.duel_report` (family = CATE-optimal scores, baseline = homogeneous scores).

## 4. Kill criteria (quantitative, falsifiable) — verbatim from protocol §3.5

The experiment is KILLED (reported as honest NULL) if ANY of the following hold:

1. **CATE variance**: Var(CATE) on test < 0.01 (probability scale) → "no heterogeneity detected; homogeneity sufficient." FIRST-CLASS NULL.
2. **Calibration slope**: OLS of DR scores γ̂_test on estimated CATE τ̂_test; slope ∉ [0.7, 1.3] → CATE estimates unreliable.
3. **Duel**: heterogeneous policy beats homogeneous policy by < 0.02 win-probability on test → heterogeneity adds no decision value.
4. **Overlap**: < 90% of test observations within e(x) ∈ [0.05, 0.95] → most decisions out-of-overlap; CATE is extrapolation.
5. **Era stability**: CATE sign inconsistent across train/val/test for qualifying cells → regime artifact. Operational: among cells with ≥30 treated AND ≥30 control in each era, fewer than 50% have the same sign of mean CATE across all three eras → KILL.
6. **Permutation**: permute T within propensity deciles on train; refit full pipeline; if permuted Var(CATE) is within 0.005 of observed Var(CATE) → heterogeneity is spurious (pipeline noise).

Dead families get a one-line obituary in the repo; survivors get deeper runs.

## 5. Analysis plan (locked)

- Estimator / pipeline:
  1. Build per-4th-down dataset: filters — down==4, play_type ∈ (pass, run, punt, field_goal), qb_kneel==0, qb_spike==0, game_seconds_remaining > 0, score_differential ∈ [−28, 28], ydstogo ∈ [1, 30]. Y from final game scores per game_id (last non-null posteam_score_post/defteam_score_post by play_id; ties dropped, count reported). T = 1[play_type ∈ {pass, run}].
  2. Quality proxy: `posteam_elo` column if present in the snapshot; else prior-season offensive EPA/play per team (computed from snapshot pbp, seasons < current), standardized. Whichever used is recorded in RUNLOG.
  3. Era split via `harness.era_split`: train ≤ 2010 / validate 2011–2017 / test 2018–2025.
  4. Nuisance on train only: propensity GBC(max_depth=4, n_estimators=200); outcome GBMs (max_depth=4, n_estimators=200) for E[Y|X,T=1], E[Y|X,T=0]. Report outcome R² (train-predicted, on val) and propensity AUC / pseudo-R².
  5. Doubly-robust scores: γ = (T − e)/(e(1−e)) · (Y − μ_T) + μ_1 − μ_0, with μ_T = T·μ_1 + (1−T)·μ_0.
  6. Propensity trim e ∈ [0.05, 0.95] applied to train/val/test; trim fractions reported per split.
  7. CausalForestDML (econml): n_estimators=500, honest splitting, min_samples_leaf=50, 5-fold cross-fit, model_t/model_y = the §5.4 GBMs' architectures, random_state=42. Fit on train only. If econml import fails: hand-rolled honest forest per protocol fallback (documented in RUNLOG).
  8. Predict CATE on val and test. Flat-surface check: Var(τ̂_test) < 0.01 → NULL, still report remaining diagnostics where computable.
  9. Calibration: OLS γ̂_test on τ̂_test (HC1 robust SEs); report slope, 95% CI, intercept.
  10. Duel: AIPW policy values on trimmed test; duel_report(CATE vs homogeneous); regret table for always-go, historical-frequency.
  11. Era stability: cell means of τ̂ by era for qualifying cells; sign-consistency fraction.
  12. Permutation: n_perm=10, T shuffled within propensity deciles on train, full pipeline refit, Var(CATE) on (trimmed) test recorded; seeds from SeedSequence(42). Criterion 6 compares observed vs mean permuted Var.
  13. BH: the duel paired-t p-value and the permutation p-value (proportion of permuted Var ≥ observed) are recorded for the cross-family battery.
- Hyperparameters: fixed as above; no tuning on val/test (val used only for nuisance R² reporting and era-stability cell checks).
- Era split: train ≤ 2010 / validate 2011–2017 / test 2018–2025 (via `harness.era_split`).
- Multiple comparisons: BH across the family battery at FDR 0.05 (coordinator-level); T9 contributes duel p and permutation p.
- Flat-surface diagnostics: Var(CATE) on test; nuisance R² floor 0.03 (flag); overlap fraction ≥ 0.90 (kill).

## 6. Data snapshot & reproducibility

- Data snapshot: `~/workspace/gse-discovery/data_snapshot_20260913/` (frozen; NOT ready at prereg time — polling per task; NO full run on live/unversioned data; smoke tests only on synthetic data or a single-season nflreadpy pull for plumbing).
- Code hash: sha256 of `t9_pipeline.py` recorded in RUNLOG at run time.
- Seeds: primary 42; replication runs 123, 7 re-run the full pipeline; a positive claim requires all three seeds to agree on the kill/promote verdict; for a NULL, primary verdict stands with replications reported. All randomness via SeedSequence.
- Expected outputs: `PREREG.md`, `t9_pipeline.py`, `t9_smoke.py`, `RUNLOG.md`, `REPORT.md`, `t9_results_<seed>.json`, `duel_t9_causalforest_*.md`.

## 7. One-paragraph statement (draft, for the record)

If true: 4th-down aggressiveness is not a one-number question — the win-probability
gain from going for it varies systematically with field position, distance,
score, clock, and team quality, and a CATE-optimal rule that conditions on
those factors wins ≥0.02 more games per decision than the best homogeneous
"4th-down bot", a gap no public 4th-down model exploits. That would be a
machine-discovered decision structure: WHERE aggressiveness pays, with the
policy to prove it.

---
_Signed: T9 worker, 2026-09-13. Amendments after first run require a new dated
addendum; the original stays immutable._

## Addendum 2026-09-14 (pre-run, implementation detail)

- econml `CausalForestDML` requires `discrete_treatment=True` for a binary
  treatment with a classifier propensity model; without it the fit raises
  `AttributeError: Cannot use a classifier as a first stage model when the
  target is continuous`. This is a faithful implementation of the preregistered
  design (binary T, GBC propensity), not a spec change. Smoke-tested.
- `calibrate()` uses statsmodels HC1 when importable, else an identical numpy
  HC1 implementation (same formula). No numerical difference expected.
- Snapshot has no `posteam_elo` column → quality proxy is the preregistered
  fallback: prior-season offensive EPA/play per team, standardized on train.

## Addendum 2026-09-14 (pre-run, environment + data-loading fixes)

- VM rebooted twice mid-session (~02:09, ~03:02 UTC); background runs die on
  reboot. The real run is split into reboot-safe stages: stage 1
  (`t9_pipeline.py --skip-perm`) fits nuisances + forest, computes all
  non-permutation results, and saves `t9_checkpoint_seed{seed}_primary.pkl`;
  stage 2 (`t9_permute.py`) loads the checkpoint and runs the 10
  propensity-bin permutation refits, then writes the final merged
  `t9_results_seed{seed}_primary.json` with kills + verdict. `run_all.sh`
  orchestrates seeds 42/123/7, skipping completed stages. The permutation
  refits are numerically identical to the preregistered inline design
  (same seeds, same full-pipeline refit); only the staging changed.
- OpenBLAS thread-init hangs on this box (scipy>=1.14 import stalls in
  `_fblas` load). All runs set `OPENBLAS_NUM_THREADS=1 OMP_NUM_THREADS=1`.
  No numerical effect (single-threaded BLAS); documented in run logs.
- nflverse pbp files are ~350 columns wide; full reads OOM the box.
  `load_pbp` now projects to the 26 columns the analysis touches
  (NEED_COLS). No analytical change.
- The snapshot contains a `pbp/` subdir of SYMLINKS to the root
  `pbp_*.parquet` files; a recursive walk double-counted every play
  (2.56M rows). `find_pbp` now reads the root non-recursively (27 files,
  1,279,628 rows). Caught by the row-count audit before any modeling.
- The snapshot HAS a `posteam_elo` column but it is entirely null/junk
  (coerces to all-NaN). The auto quality-proxy check now requires at least
  one usable numeric Elo value; otherwise the preregistered fallback
  (prior-season offensive EPA/play) is used. Confirmed fallback in effect:
  source="prior-season offensive EPA/play (snapshot-computed)", missing 4%.
- Pre-run data audit (frozen snapshot, 2000-2025 after prior-EPA join):
  n=100,316 fourth-down plays; treat rate 0.1428; posteam win rate 0.4743;
  train/val/test = 42,518 / 27,123 / 30,675; go-rate by era 0.125 -> 0.118
  -> 0.190 (train/val/test), consistent with the known aggressiveness trend.
