# Pre-registration: W2 / Optimal transport (Wasserstein) between team-season play distributions

**Author:** W2 worker (Motif) | **Date:** 2026-09-13
**Status:** PRE-REGISTERED (locked before any run on real data — data snapshot not yet frozen at time of writing)

> Rule (§4.1 of the program): pre-registration with kill criteria BEFORE every
> run. No HARKing. Source protocol: DeepSeek response
> `deepseek-move37-phase6-response-01.md` §4/W2, program `PHASE6_EXPANDED_PROGRAM.md` §§4,7.
> NOTE: Data gate — `~/workspace/gse-discovery/data_snapshot_20260913/MANIFEST.md` does
> not exist at pre-registration time. No full analysis runs on live/unversioned
> data. PREREG was written entirely from the protocol + harness, before touching data.

## 1. Estimand

Per team-season (i, t), the 2-Wasserstein distance W_2(i, t) between that
team-season's empirical play distribution in (yardline_100, ydstogo) and the
league-average play distribution for the SAME season t, estimated via
entropy-regularized Sinkhorn.

- Target variable: Spearman rank correlation r between W_2(i, t) and the
  team's next-season offensive EPA standard deviation, std(EPA per play) in
  season t+1 (posteam perspective, pass/run plays only).
- Unit of observation: team-season pair (i, t) → outcome in (i, t+1).
- Test-era population: pairs whose outcome season t+1 falls in 2018–2025
  (i.e. base seasons 2017–2024).

## 2. Identification argument

W_2 measures how "distinctive" a team's situational play mix is (field
position × distance-to-go) relative to league norms. DeepSeek's mechanistic
claim: distinctive styles are higher-variance, so large W_2 predicts larger
next-season EPA dispersion.

Identifying assumption: W_2 captures play-mix style, not sample-size noise.
Known threat: teams with few plays have noisier histograms, hence
mechanically larger W_2. Diagnostics and kill rule #4 below handle this.
League reference is the same-season pool (zero leakage across seasons).

Finite-sample behavior: Sinkhorn on a 120-cell histogram is well-conditioned;
exact EMD (ot.emd2) used as cross-check. Teams with < 200 qualifying plays in
a season are dropped (empirical histogram too sparse); counts logged. (1,2,3)
down cells only implicitly — no down filter; (yardline, ydstogo) as specified
in the protocol.

## 3. Dumb-baseline duel spec

- Baseline: "field-position spread" — within team-season t, the standard
  deviation of yardline_100 across the same plays (a 3-line statistic). Duel
  metric: Spearman r between baseline_t and next-season EPA std on the SAME
  test-era pairs.
- Metric: Spearman r (higher is better).
- Test set: test-era (outcome season 2018–2025) team-season pairs; same rows
  for family and baseline.
- Market duel: N/A — this is a variance-forecasting estimand, not a
  win/total pick; no closing line exists. Compared to the dumb baseline above.
- Win condition: pre-registered kill threshold is absolute (r ≥ 0.05 with 95%
  CI excluding zero), not relative to the baseline; the duel is reported for
  interpretability (is W_2 a relabeling of a simpler statistic?).

## 4. Kill criteria (quantitative, falsifiable)

The experiment is KILLED if ANY of the following hold. No judgment calls.

1. **Kill (DeepSeek's threshold, protocol §4/W2):** test-era Spearman r < 0.05
   AND 95% CI (bootstrap, seed 42) includes zero → KILL.
2. **Regime artifact:** sign of r flips between train (≤2010) and test
   (2018–2025) eras → KILL as era artifact.
3. **Placebo failure:** permutation_test p ≥ 0.05 (observed test-era r
   appears under label-shuffle null) → pipeline cannot distinguish signal
   from noise → KILL, report as broken.
4. **Sample-size artifact:** |Spearman(W_2, n_plays)| ≥ 0.3 AND partial r
   controlling n_plays < 0.05 → KILL as sampling-noise artifact.
5. **BH:** q-value > 0.05 across the 3 era-specific p-values → no era claim
   survives; combined with #1, kill.
6. **DeepSeek's bet (reported, not a kill rule):** r ≥ 0.15. Report whether
   met; the kill rule is #1 per the protocol.

Obituary (if killed): one line in REPORT.md and the repo, e.g.
"W2 (2026-09-13): team-season Wasserstein distance from league play-mix shows
no relation to next-season EPA variance (test-era r = X, 95% CI [L, U]); killed."

## 5. Analysis plan (locked)

- Estimator / pipeline (see `w2.py`):
  1. From frozen snapshot pbp: filter play_type ∈ {pass, run},
     posteam not null, yardline_100 ∈ [1, 99], ydstogo ∈ [1, 30], epa not null.
  2. Grid: yardline_100 → 20 equal-width bins of 5 yds; ydstogo → 6 bins
     {1, 2, 3–4, 5–7, 8–10, 11+} (120 cells total).
  3. Per (posteam, season): histogram h normalized to sum 1; drop
     team-seasons with < 200 plays.
  4. Per season: league reference histogram from all pooled plays of that season.
  5. Ground cost M = squared Euclidean distance between cell centers after
     standardizing (yardline, ydstogo) to unit variance globally.
  6. W_2(i,t) = sqrt(ot.sinkhorn2(h_team, h_league, M, reg=0.1)); cross-check
     vs ot.emd2 on a 10% subsample of team-seasons (report max |Δ|).
  7. Outcome: std of EPA per play for team i, season t+1, same filters.
  8. Stats per era: Spearman r (W_2_t, epa_std_{t+1}), n, two-sided p
     (permutation-based), bootstrap 95% CI (B=2000, seed 42).
  9. Permutation placebo on test-era pairs: permute y, recompute r (harness
     permutation_test, n_perm=1000, seed 42).
  10. Diagnostics: Spearman(W_2, n_plays); dumb-baseline duel r; BH over the
      3 era p-values (harness benjamini_hochberg).
- Hyperparameters: Sinkhorn reg=0.1 (pre-registered; sensitivity reg ∈
  {0.01, 0.1, 1.0} reported, not selected); bins fixed above. No tuning on
  test; reg chosen from synthetic smoke test before data.
- Era split: train ≤ 2010 / validate 2011–2017 / test 2018–2025 via
  `harness.era_split` on outcome season; base season = outcome season − 1.
- Multiple comparisons: BH at FDR 0.05 over the 3 era p-values.
- Flat-surface diagnostics: report mean/std/CV of W_2 across team-seasons;
  if CV < 0.01 the distances are degenerate → kill as uninformative.

## 6. Data snapshot & reproducibility

- Data snapshot: `~/workspace/gse-discovery/data_snapshot_20260913/MANIFEST.md`
  (PENDING at pre-registration; full run gated on it — NEVER run on
  live/unversioned data).
- Code hash: recorded in RUNLOG at run time.
- Seed: 42 (all randomness via numpy SeedSequence spawning from 42).
- Expected outputs: `w2.py`, `smoke_test.py`, `results.json`, `REPORT.md`,
  `RUNLOG.md`.

## 7. One-paragraph statement (draft, for the record)

If W_2 survives, it means the *shape* of a team's situational play
distribution — how far their down/distance/field-position mix sits from the
league average — forecasts how volatile their offense will be next year.
Distinctive styles would be quantifiably higher-variance, giving a
machine-discovered, one-number style metric that no published EPA-based
metric captures. If it dies, the honest record is that Wasserstein distance
between play mixes is a relabeling of sample noise or a trivial spread
statistic, and optimal transport joins the null-result moat.

---
_Signed: W2 worker, 2026-09-13. Amendments after first run require a new dated
addendum; the original stays immutable._

## Addendum A — 2026-09-13: exact EMD replaces Sinkhorn (pre-data, method-only)

Synthetic smoke testing (no real data touched) found pot 0.9.7's vanilla
`sinkhorn2` numerically broken on the sparse 120-cell histograms:
divide-by-zero on zero-mass cells, "numerical errors at iteration 0"
warnings, self-distance 0.91 instead of 0, and shifted distribution pairs
returning an identical constant. The stabilized log-domain solver converges
but carries large entropic bias (self-distance 1.37 at reg=0.1 on
[0,1]-scaled cost). Exact EMD (`ot.emd2`, network simplex, ~8 ms per
120-cell call) gives self-distance exactly 0, correct monotonicity under
shifts, exact symmetry, and preserves the Sinkhorn ordering; it is the
primary estimator. Sinkhorn is retained only as a robustness cross-check in
RUNLOG. Estimand unchanged (still W_2); the protocol's Sinkhorn mention was
a solver suggestion, not the estimand. Kill criteria and all thresholds
unchanged.
