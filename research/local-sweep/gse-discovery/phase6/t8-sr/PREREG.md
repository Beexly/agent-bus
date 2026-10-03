# T8 — Symbolic Regression, Done Properly: PREREGISTRATION

**Family:** T8 (phase 6 program §3) · **Worker:** T8 lab worker · **Date:** 2026-09-13
**Status:** PREREGISTERED — no full run until `data_snapshot_20260913/MANIFEST.md` lands.
Smoke tests only on unversioned 2020–2025 cache, DEV-SPLIT (see §9), tiny populations.

## 1. Questions

- **Q1 (primary):** Is there a closed-form expression over pre-snap state that
  predicts play-level actual EPA better than linear baselines (OLS/Ridge),
  stable across eras — i.e., a genuinely new composite expectation function?
- **Q2 (secondary/exploratory):** Can SR find a compact closed-form
  approximation of nflfastR's pre-play expected points (`ep`) that is
  Pareto-competitive with Ridge on fit-vs-complexity? (Compression task; no
  kill criteria, reported only.)

## 2. Data

- **Frozen snapshot** `~/workspace/gse-discovery/data_snapshot_20260913/` per
  MANIFEST.md (pbp 1999–2025 + lines). No full analysis on anything else.
- **Plays included:** regular season + postseason, `play_type` in
  {pass, run} (scrimmage plays only); drop rows with NA in any feature/target.
- **Smoke-test data (unversioned):** `symbolic-regression/data/pbp_202*.parquet`
  (2020–2025). Code shakeout only; numbers from it are never reported as
  findings.

## 3. Target variables

- **Primary:** `epa` (actual play EPA, nflfastR). Rationale: predicting the
  *realized* outcome expectation from pre-snap state is the honest test;
  predicting a model's own output (ep) is curve-fitting the black box.
- **Secondary:** `ep` (pre-play expected points) — approximation/compression.

## 4. Feature set (pre-snap only, no outcome leakage, no black-box outputs)

`down, ydstogo, yardline_100, score_differential, half_seconds_remaining, qtr,
shotgun, no_huddle, posteam_timeouts_remaining, defteam_timeouts_remaining,
spread_line, total_line`

12 features. `wp`/`ep`/`epa`-derived columns are EXCLUDED from features.
Column names verified against snapshot MANIFEST before the run; any rename is
logged (not silently adapted).

## 5. SR engine (custom numpy tree-GP — why not gplearn)

gplearn lacks native islands+migration and sub-run stability hooks; the T8
design *is* the overfitting controls, so the engine implements them directly:
- 4 islands × 400 individuals, migration of top-5 programs every 10
  generations, tournament selection (size 5), crossover 0.7 / subtree-mutation
  0.2 / point-mutation 0.05, elitism 2.
- Ramped half-and-half init, max depth 5, max nodes 31 (hard cap).
- **Function set:** add, sub, mul, pdiv (protected, denom→1 if |d|<1e-6),
  psqrt(|x|), square, plog (log(|x|+1e-6) with sign preserved? no — log1p(|x|)),
  min, max, neg, sin. NO exp (overflow), NO raw division.
- **Terminals:** 12 features + ephemeral random constants uniform(-2, 2).
- **Parsimony-pressure sweep:** λ ∈ {0.001, 0.01, 0.05}; fitness =
  R²_train − λ·(nodes/max_nodes).
- **Generations:** 60 (full run). Train subsample per seed: 25,000 plays
  (stratified by era-third to keep regime mix); validation FULL 2011–2017.
- **Stability selection:** 5 fixed seeds {11, 22, 33, 44, 55}, each with a
  different train subsample. Winner per (seed, λ): best validation R².
  Canonicalize (round constants to 3 s.f., order commutative args) and count
  structurally-equivalent recurrences.

## 6. Era split (mandatory, §2)

- train ≤ 2010 → fitness/selection
- validate 2011–2017 → model + λ selection
- test 2018–2025 → final duel, reported once

## 7. Dumb-baseline duel (mandatory, §4.6)

Same features, same splits, closed-form numpy:
- **OLS** (lstsq) and **Ridge** (α chosen on validation from {0.1, 1, 10, 100}).
- Metric: out-of-sample R² on test 2018–2025 (primary target).
- **Kill rule 1 (instant):** SR_test_R² < Ridge_test_R² → KILL. No matter how
  pretty the expression. (OLS loss also kills.)
- **Promote rule:** SR_test_R² ≥ Ridge_test_R² + max(0.003, 10%·Ridge_test_R²)
  AND stability ≥ 3/5 seeds structurally equivalent AND permutation check
  passes (§8). All three, or no claim.

## 8. Permutation / placebo (mandatory, §4.4)

- **Permutation:** shuffle `epa` within train (5 shuffles), rerun the full
  pipeline at the winning λ, 2 seeds. Pass criterion: validation R² of the
  best shuffled-run expression ≤ 0.002. If a "discovery" appears under the
  null, the pipeline is broken → HALT, report, fix, re-preregister.
- **Placebo:** y = standard-normal noise matched to epa's scale, same
  protocol. Same pass criterion.

## 9. Smoke tests (pre-snapshot, unversioned data)

DEV-SPLIT on 2020–2025 cache only: train 2020–2022 / validate 2023 / test
2024–2025; 1 seed, 1 λ (0.01), 2 islands × 200 pop × 20 gens, 2k train rows.
Purpose: crash-finding, shape checks, timing. Results are NEVER findings.

## 10. Compute guardrails (this box: 2 CPUs, ~3GB free, shared)

- Populations/generations as §5 (≤ 1600 concurrent programs; vectorized eval,
  memory-flat — programs stored as tuples, one float32 array per generation).
- `nice -n 15`, single-process per seed (no multiprocessing pool stampede);
  seeds run sequentially overnight. Estimated ~7 min per (seed, λ) → full
  matrix 15 combos ≈ under 2 h; permutation matrix ≈ 30 min.
- If a full run exceeds available RAM or > 6 h wall-clock, it is killed and
  the scope is reduced in a re-preregistration — never silently.

## 11. Reproducibility

Fixed seeds, code file hashes logged in RUNLOG, data snapshot ref from
MANIFEST.md, all outputs to `phase6/t8-sr/`. Any result that cannot be
re-run from these artifacts did not happen.

## 12. What counts as a discovery (T8 instance of §7)

A closed-form EPA-expectation expression that (a) beats Ridge on test R² by
the promote margin, (b) recurs structurally in ≥3/5 seeds, (c) passes
permutation/placebo, (d) holds up on the era split (test-era R² within 30% of
validation-era R² — no regime artifact), (e) statable in one paragraph.
Otherwise: honest NULL with a one-line obituary.

## Amendment A1 (2026-09-13, PRE-RUN — no full-run data seen; smoke only)

Smoke timing on the weak box showed the §5 config (25k train rows, full-val
tracking every generation) would take ~23 h for the 5×3 matrix — beyond the
compute guardrail (§10). Changes, all before any full run:

- Train subsample per seed: 25,000 → **8,000 plays** (still seed-stratified
  random; 8k rows ≈ 1k+ per feature, ample for a ≤31-node expression).
- Validation tracking during evolution: full 2011–2017 → **20,000-play
  subsample** (fixed per seed); the winner of each (seed, λ) is **re-scored
  on the FULL validation set** before any selection, so §6 model selection
  still uses the full validation era.
- Engine evaluates each program once per generation; val-R² tracked only for
  top-25 by train fitness (was: all programs). Selection semantics unchanged.

If results look underpowered (e.g., validation noise dominates λ selection),
the remedy is a re-preregistered A2 with more rows — never a silent change.
