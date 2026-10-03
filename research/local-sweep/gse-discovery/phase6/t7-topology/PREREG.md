# Pre-registration: T7 / topological structure of play clouds (persistent homology)

**Author:** T7 worker (Motif lab)  |  **Date:** 2026-09-13
**Status:** PRE-REGISTERED (locked before any run on the test era)
**Protocol ref:** `../deepseek-move37-phase6-response-01.md` §2 (DeepSeek deliverable, Run ID MOVE-37-PHASE6-01)

> Rule (§4.1 of the program): pre-registration with kill criteria BEFORE every
> run. No HARKing. Kill criteria enforced verbatim from protocol §2.5.

## 1. Estimand

The predictive R² of team-season **persistence-image (PI) features** for
**next-season offensive EPA per play**, computed out-of-sample on the
2018–2025 test era, incremental over a baseline of (this-season EPA/play,
pace, pass rate).

- Target variable: `EPA_per_play(i, t+1)` — posteam's offensive EPA per play in the following season (orientation: posteam).
- Unit of observation: team-season `(i, t)`.
- Test-era population: team-seasons with season t ∈ {2018, ..., 2025} that have a following-season outcome (season ≤ 2024 for the target; season 2025 contributes features only).

Point cloud per team-season: each play is a point
`x = (yardline_100, down, score_differential)`, posteam perspective, filtered to
`play_type ∈ {pass, run}`, `down ∈ {1,2,3,4}`, `yardline_100 ∈ [1,99]`,
non-null `score_differential`. Coordinates standardized to unit variance
globally (required). Subsample n=300 (fallback n=200) per team-season, 20
subsamples (seeds 42+i, i=0..19). Vietoris–Rips to H1 via ripser; vectorize
with `persim.PersistenceImager` 20×20, sigma=0.1, persistence-weighted;
average PIs across subsamples.

## 2. Identification argument

Topological features are identified if point-cloud structure differs across
team-seasons in a way not fully explained by lower moments of the play
distribution (mean, variance, correlations). Weakest point: if PI is a
nonlinear function of the same lower moments, PI is redundant with
EPA-based features and the increment will be zero — exactly what the
incremental-R² test measures.

Finite-sample behavior:
- Subsampled clouds (n=300, 3D): Rips to H1 yields typically 5–30 H1 features;
  averaging over 20 subsamples stabilizes the signature.
- Scale sensitivity: coordinates standardized to unit variance globally —
  required, else yardline dominates the metric. Standardization statistics
  computed once across all seasons (train+val+test pooled for the geometry;
  they are geometric constants, not tuned).
- Flat-surface diagnostic: CV of PI L2 norms across team-seasons < 0.05 →
  signatures uninformative → family dies immediately (gate runs FIRST, before
  any regression).
- Metric misspecification: robustness check with Manhattan metric; flag if
  predictive increments differ by > 0.01 R² (metric-sensitive).

## 3. Dumb-baseline duel spec

- Baseline 1: season-t EPA/play only (1-feature OLS). The "dumb baseline."
- Baseline 2: season-t EPA/play + pace + pass rate (3-feature OLS). The human metric set.
- Topo model: baseline-2 features + flatten(PI_{i,t}) (400 features), ridge
  regression with cross-validated alpha (fit on train; alpha selection by
  inner CV on train only).
- Metric: incremental R² of next-season EPA/play on the test era (2018–2025),
  i.e. R²(topo) − R²(baseline 2). Higher is better.
- Test set: team-seasons t ∈ 2018..2025 with a season-t+1 outcome — SAME
  observations for all three models.
- Market duel (secondary): if topological claim is predictive, next-game win
  prediction with topo features vs closing spread alone: win = +0.01 AUC over
  spread alone. If no game-level topo signal is built, report "N/A — season
  granularity has no per-game line duel" honestly.
- Win condition: incremental R² ≥ 0.02 over baseline 2 on test.

## 4. Kill criteria (quantitative, falsifiable — protocol §2.5 verbatim)

The experiment is KILLED if ANY of the following hold. No judgment calls.

1. **Topological CV gate (runs FIRST):** cross-team-season CV of
   persistence-image L2 norm < 0.05 → EXIT immediately with NULL verdict —
   signatures uninformative, family dies before the regression.
2. **Incremental R²:** topo features beat baseline 2 by < 0.02 R² on test →
   topological features add nothing — family dies, no rescue.
3. **Era stability:** sign and magnitude of the R² increment must be
   consistent across train (≤2010) / val (2011–2017) / test (2018–2025)
   (fit on train, evaluated on each era's own (X_{t}, y_{t+1}) block); if the
   increment's sign flips across eras → regime artifact → family dies.
4. **Permutation null:** topo features from play-order-shuffled-within-
   team-season clouds yield an R² increment within ±0.01 of the true
   increment → topological structure is spurious → family dies.
5. **Market duel (secondary):** if a game-level predictive claim is made,
   topo features must improve next-game win prediction over closing spread
   alone by ≥ 0.01 AUC; if not → market already prices the signal.
6. **Metric robustness:** Manhattan-metric R² increment differs from
   Euclidean-metric increment by > 0.01 → flag result as metric-sensitive
   (kill promotion claim, report NULL).

Dead families get a one-line obituary in the repo; survivors get deeper runs.
This protocol's NULL is stated in advance: topological features of play clouds
do not add predictive information over standard EPA-based features.

## 5. Analysis plan (locked)

- Estimator/pipeline: per-team-season PI averaging (n=300, 20 subsamples,
  H1, PI 20×20 sigma=0.1 persistence-weighted) → CV gate → ridge regression
  (CV alpha) on EPA_{t+1} with the three feature sets above.
- Hyperparameters: Rips maxdim=1, PI resolution 20, sigma 0.1, weight
  w(b,p)=p−b (persistence); subsample seeds 42+i (i=0..19); ridge alpha via
  CV on train; regression random seed 42. No other tuning.
- Era split: train ≤2010 / validate 2011–2017 / test 2018–2025 via
  `harness.era_split`.
- Multiple comparisons: BH across the family battery handled at
  program level; T7 contributes its single pre-registered incremental-R²
  hypothesis (plus the permutation diagnostic, which is a kill check, not a
  discovery claim).
- Flat-surface diagnostics: PI L2-norm CV (kill gate) reported with its
  numeric value regardless of outcome.
- Fallback: if 300-point Rips exceeds compute budget, reduce to n=200
  (logged in RUNLOG; the protocol permits it).

## 6. Data snapshot & reproducibility

- Data snapshot: `~/workspace/gse-discovery/data_snapshot_20260913/` (frozen;
  NO run on live/unversioned data — DATA GATE: polling for MANIFEST.md;
  full analysis starts only after the frozen snapshot is available).
- Code hash: recorded at run time (RUNLOG).
- Seed: subsample seeds 42+i (i=0..19); regression seed 42. All randomness
  derives from these.
- Expected outputs: `RUNLOG.md`, `REPORT.md`, `duel_report` markdown,
  `results.json` (CV gate value, R² per model per era, permutation deltas,
  metric-robustness delta).

## 7. One-paragraph statement (draft, for the record)

If true, a discovery here would mean that the *shape* of a team's play cloud
in (field position, down, score) space — the loops and voids of sustained
drives versus scattered desperation plays, summarized by persistent homology —
carries information about next season's offensive efficiency that no
mean-based statistic (EPA/play, pace, pass rate) captures. In plain terms:
there is a geometry to how a team plays football that persists and predicts,
and a machine found it.

---

_Signed: T7 worker, 2026-09-13. Amendments after first run require a new dated
addendum; the original stays immutable._
