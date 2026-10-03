# GSE Phase-6 Validation Harness

Shared testing discipline for every theory-family worker (T1-T10). Implements
§4 of `PHASE6_EXPANDED_PROGRAM.md` (testing discipline, non-negotiable).

**Dependencies:** stdlib + numpy + pandas + scipy only. No sklearn.
Tested on numpy 1.26 / pandas 2.1 / scipy 1.11.

## Import (family workers: put this at the top of your lab scripts)

```python
import sys
sys.path.insert(0, "/home/hatch/workspace/gse-discovery/phase6")
from harness import era_split, permutation_test, run_placebo, benjamini_hochberg, duel_report
```

Or import modules directly: `from harness.era_split import era_split`, etc.

## API

### 1. `era_split(df, season_col="season", train_end=2010, val_end=2017)` → dict of boolean masks

Mandatory era split (§2): **train ≤ 2010 / validate 2011–2017 / test 2018–2025**.
Returns `{"train": mask, "validate": mask, "test": mask}` (pandas boolean
Series aligned to `df.index`; disjoint and jointly exhaustive). Raises on a
missing season column or any empty split.

```python
from harness.era_split import era_split, split_frames, split_summary

splits = era_split(pbp, season_col="season")
model.fit(pbp[splits["train"]])          # tune ONLY on train
tuned = tune(model, pbp[splits["validate"]])
score = evaluate(model, pbp[splits["test"]])   # test touched ONCE

frames = split_frames(pbp)              # same thing, as DataFrames
print(split_summary(pbp))               # row counts + season ranges for logs
```

A structure that only works in one era is a regime artifact, not a discovery.

### 2. `permutation_test(observed_stat, null_stats_fn, n_perm=1000, seed=0, alternative="greater")` → dict

Empirical p-value. `null_stats_fn(i, rng)` returns the statistic under
permutation `i` using the provided rng (seeds derive from the master seed via
`SeedSequence.spawn`, so every permutation is reproducible and independent).
p-value uses `(1 + k) / (1 + n)`: valid, never exactly 0, slightly
conservative. Raises if the null function returns non-finite values.

```python
from harness.permutation import permutation_test

obs = abs(np.corrcoef(x, y)[0, 1])
res = permutation_test(
    obs,
    lambda i, rng: abs(np.corrcoef(x, rng.permutation(y))[0, 1]),
    n_perm=1000, seed=0,
)
print(res["p_value"])   # small => not a null artifact
```

### 3. `run_placebo(pipeline_fn, X, y, observed_stat=None, n_perm=200, seed=0, synth_null_fn=None, alpha=0.05)` → dict

Runs a family's discovery pipeline under **two nulls**:
1. **Label-shuffled null** — `y` permuted, `X` untouched. Kills pipelines that
   "discover" structure independent of the target.
2. **Synthetic null** — `default_synth_null` (or your `synth_null_fn(X, y, rng)`):
   destroys all X–y association while preserving marginals. Kills pipelines
   whose statistic is inflated by the data-generating process itself.

`pipeline_fn(X, y)` must return a float discovery statistic (larger = stronger).
Returns `observed`, `shuffle_stats`, `synth_stats`, `p_shuffle`, `p_synth`,
**`appears_under_null`** (bool), and a `verdict` string.

> If the discovery statistic appears under the null (`appears_under_null=True`),
> **the pipeline is broken, not the world interesting.** Fix the method; do not
> promote. A large p means the null routinely produces statistics as large as
> yours — you cannot distinguish signal from noise.

```python
from harness.permutation import run_placebo

def my_stat(Xd, yd):
    return float(np.abs(np.corrcoef(Xd["a"], yd)[0, 1]))

pb = run_placebo(my_stat, X, y, n_perm=200, seed=0)
print(pb["verdict"])
assert not pb["appears_under_null"], "pipeline broken under the null"
```

### 4. `benjamini_hochberg(p_values, alpha=0.05)` → dict

BH step-up FDR control (§4.5). Ten families at α=0.05 without correction is a
false-discovery machine — every family battery goes through this first.
Returns `rejected` (bool mask), `q_values` (BH-adjusted, in [0,1]),
`alpha`, `n_rejected`. NaN p-values tolerated (never rejected).

```python
from harness.bh import benjamini_hochberg

res = benjamini_hochberg([0.001, 0.02, 0.4, 0.9])  # FDR 0.05
print(res["rejected"], res["q_values"])
```

### 5. `duel_report(family_name, metric_name, family_scores, baseline_scores, market_scores=None, test_set_desc="", seed=0, higher_is_better=True, out_dir=".")` → path

The mandatory dumb-baseline duel (§4.6–4.7). All score vectors must be
per-observation on the **SAME test set**, same length. Computes paired
differences, win rates (ties = half), sign-test and paired t-test p-values,
95% CI of the mean diff, then writes a standardized markdown report and
returns its path. Verdict is deterministic:

| condition | verdict |
|---|---|
| family fails vs dumb baseline (mean diff ≤ 0 or t p ≥ 0.05) | **KILL** — instant kill, no matter the theory |
| beats baseline but not the closing line | **INTERESTING, NOT AN EDGE** |
| beats baseline AND market (paired, significant) | **PROMOTE (candidate)** — still "under test" until era-split, placebo, BH clear |

```python
from harness.duel import duel_report

path = duel_report(
    family_name="t6-hierarchical",
    metric_name="log-loss",
    family_scores=fam_ll,        # per-game log-loss, test era
    baseline_scores=elo_ll,      # SAME games, dumb baseline
    market_scores=clv_ll,        # SAME games, closing line (None if no line exists)
    test_set_desc="era test split, seasons 2018-2025, frozen snapshot 20260913",
    seed=7,
    higher_is_better=False,      # log-loss: lower is better
    out_dir=".",
)
```

A blank template for hand-written duels ships as `duel_report_template.md`
(`{{PLACEHOLDERS}}` — every field must be filled; a duel with blanks is not a duel).

## Templates

- **`prereg_template.md`** — pre-registration (§4.1): estimand, identification
  argument (incl. finite-sample behavior at boundaries), dumb-baseline duel
  spec, quantitative falsifiable kill criteria, data snapshot ref, seed.
  Fill BEFORE any run on the test era. No HARKing.

## Reproducibility contract

Every run logs: code hash + data snapshot + seed + full output. Fixed seeds;
all randomness derives from the master seed via `SeedSequence`. A result that
can't be re-run didn't happen.

## Self-test

`python3 selftest.py` exercises all modules on synthetic data (no downloads).
Output recorded in `SELFTEST_OUTPUT.txt`. **24/24 checks pass** as of
2026-09-13, including: planted-signal detection, a broken constant-stat
pipeline correctly flagged by `run_placebo`, BH on null p-values rejecting
nothing, and duel verdicts `KILL` / `INTERESTING, NOT AN EDGE` on synthetic
score vectors.
