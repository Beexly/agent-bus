# T10 — Conformal Win-Probability / Uncertainty Quantification
## PREREGISTRATION — 2026-09-13 (before any run)

Family: T10 (L — lab-executable immediately). Worker: T10 subagent.
Status: PREREGISTERED, no data touched for full runs until frozen snapshot lands.

---

## 1. Research questions

1. **Coverage under distribution shift.** Do split-conformal 90% prediction
   sets (binary game outcome) and 90% conformalized-quantile intervals (score
   margin) achieve ≈90% empirical coverage on the test era 2018–2025 when
   calibrated on 2011–2017?
2. **Honest uncertainty as an edge.** Do conformal uncertainty measures
   (prediction-set size for the binary outcome; interval width for margin)
   identify high- vs low-leverage/surprise game states better than a dumb
   uncertainty proxy built from the point estimate alone?
3. **Dumb-baseline duel.** Conformalized WP vs nflverse pregame WP point
   estimates on log-loss and calibration (reliability curves, ECE) on the
   same test set; plus interval coverage/sharpness reporting.

## 2. Data

Frozen snapshot `~/workspace/gse-discovery/data_snapshot_20260913/`
(MANIFEST.md pending; DATA worker building). Tables: nflverse pbp 1999–2025
(game-level columns: `spread_line`, `total_line`, `home_score`, `away_score`,
`home_team`, `away_team`, `week`, `season`, `game_id`, and `wp` at the first
play of each game = nflverse pregame home WP).

Game-level dataset built from pbp: one row per regular-season + postseason
game. **Ties excluded** from the binary target (NFL ties exist; keep the
estimand clean), retained in margin analysis.

### Targets
- **Y** ∈ {0,1}: home team wins (drop ties).
- **M** = home_score − away_score (integer margin, ties kept).

### Features (pregame only — no leakage)
`spread_line`, `total_line`, `week`, rest-day differential (computed from
previous game dates per team; if unavailable in snapshot, drop feature),
`div_game` indicator if derivable. **Nothing in-play.**

### Base point-estimate model (predeclared, no tuning)
- Binary: logistic regression, features = [1, spread_line, total_line].
  Fit once on train era only. Implemented with scipy (Newton/IRLS by hand —
  ~20 lines; no sklearn dependency).
- Margin quantiles: linear quantile regression at τ ∈ {0.05, 0.95} via
  scipy.optimize.linprog (standard check-function LP), same features.
  Fit once on train era only.

### Era splits (mandatory)
- **train** ≤ 2010 → fit base models.
- **calibrate** 2011–2017 → conformity scores, quantile cutoff q̂.
- **test** 2018–2025 → coverage / duel evaluation (the distribution-shift test).

Seed: 20260913 (used for tie-breaking jitter only; method is otherwise
deterministic).

## 3. Estimands

1. **Marginal coverage**: P(Y ∈ C(X)) and P(M ∈ [L(X), U(X)]) on the test era.
2. **Conditional coverage** by stratum: era (validate vs test), favorite/dog
   (sign of spread_line), early/late season (week ≤ 9 vs > 9). Reported, with
   ±2pp nominal band as reference — the distribution-shift diagnostic.
3. **Sharpness**: binary — fraction of singleton sets vs {0,1} sets;
   margin — mean/median interval width (points).
4. **Uncertainty–surprise association**: Spearman ρ between uncertainty
   measure and outcome surprise on test era:
   - binary: surprise = 1{pred wrong} (pred = argmax); uncertainty_conformal
     = set size (1 or 2); uncertainty_dumb = 1 − 2|p̂ − 0.5|.
   - margin: surprise = |M − M̂_median|; uncertainty_conformal = U − L;
     uncertainty_dumb = same 1 − 2|p̂ − 0.5| from the binary model.
5. **Duel metrics** (test era): log-loss and 10-bin ECE of (a) our base
   model p̂, (b) nflverse pregame WP (wp at first play), (c) market-implied
   probability from closing spread_line (standard normal mapping with
   σ = 13.45, predeclared). Reliability curves for (a) vs (b).

## 4. Conformal methods (predeclared)

### 4a. Binary outcomes — split/inductive conformal (threshold sets)
- Nonconformity score: s(x, y) = 1 − p̂(y | x), y ∈ {0,1}.
- Calibration scores on 2011–2017; cutoff q̂ = ⌈(n+1)(1−α)⌉-th order
  statistic, α = 0.10.
- Prediction set: C(x) = {y : 1 − p̂(y|x) ≤ q̂}.
- Nominal coverage 90%.

### 4b. Margin — conformalized quantile regression (CQR, Romano et al.)
- Fit q̂_{0.05}, q̂_{0.95} on train; scores
  E_i = max(q̂_lo(x_i) − m_i, m_i − q̂_hi(x_i)) on calibrate;
- Interval: [q̂_lo(x) − Q, q̂_hi(x) + Q], Q = ⌈(n+1)(1−α)⌉-th order statistic
  of E, α = 0.10. Nominal coverage 90%.

Implementation: hand-written (~60 lines total), numpy/scipy only.

## 5. Validation battery (mandatory per §4 of program)

- **Permutation placebo**: shuffle Y (and M) within the calibrate+test pool,
  re-run full pipeline. Requirement: coverage stays ≈90% under permutation
  (the guarantee is distribution-free); sharpness must collapse (singleton
  fraction → ≈0, widths inflate). If coverage breaks under permutation, the
  implementation is wrong → fix code, do not report results.
- **Era-split**: as above; validate-era coverage reported as sanity check.
- **No HARKing**: all choices above fixed before the first run. Any deviation
  logged in RUNLOG with reason.

## 6. Kill criteria (quantitative, predeclared)

**K1 — coverage guarantee (the core claim).** Test-era (2018–2025) empirical
coverage for BOTH the binary sets and the margin intervals within ±2pp of
90% (i.e., ∈ [0.88, 0.92]). Fail on either → family KILLED (the method does
not deliver honest uncertainty under era shift).

**K2 — calibration duel.** 10-bin ECE of our base-model p̂ ≤ ECE of nflverse
pregame WP on the test era, strictly. Fail → KILLED (conformal wrapper on a
worse-calibrated base adds nothing over the public number).

**K3 — uncertainty edge (discovery criterion).** Spearman ρ(conformal
uncertainty, surprise) > ρ(dumb uncertainty, surprise) on test era for at
least one of the two targets, with permutation-test p < 0.05 after
Benjamini–Hochberg across the 2 tests. Fail → no discovery: method may be
valid (K1/K2) but the "honest uncertainty is an edge" claim dies → obituary
for the edge claim, report coverage results as a null.

**K4 — pipeline sanity.** Permutation placebo must hold coverage ≈90%.
Fail → code bug, not a result; fix and re-run, log it.

If K1–K3 all pass: T10 is a candidate discovery pending market-duel reporting
(log-loss vs closing-line implied probability — reported, not a kill gate,
since the uncertainty claim is about sizing rather than direction).

## 7. Deliverables

- `PREREG.md` (this file)
- `t10_conformal.py` — full pipeline (data build, base models, conformal,
  metrics, placebo, duel)
- `RUNLOG.md` — every run: code hash, data snapshot ref, output summary
- `REPORT.md` — verdict + numbers (coverage by era, widths, log-loss/ECE
  duel vs nflverse WP) or one-line obituary if killed

## 8. Compute / memory discipline

Game-level data (~7k rows) — trivial memory. Column selection at load,
category dtypes, season-chunked pbp reads if building from raw pbp. nice -n 10.

---
*Preregistered 2026-09-13 ~20:35 CDT, before any T10 run. Snapshot pending.*
