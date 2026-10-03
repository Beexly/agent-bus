# Phase 4 (v2, self-audited) — Execution Report

**Date:** 2026-09-13
**Script:** `~/workspace/gse-discovery/move37_phase4_v2.py` — executed VERBATIM,
no modifications. Only dependency installed: `nflreadpy` (was missing from venv).
**Run:** clean, EXIT=0, no tracebacks, no NaN R². Full output:
`~/workspace/gse-discovery/phase4_stdout.txt`

## Target

`|epa − GBM_epa_hat|` (absolute residual of a pre-snap EPA gradient-boosting model),
clipped at 99th percentile. Pre-snap EPA itself is ~unpredictable
(GBM holdout R² 0.0045/0.0039 — consistent with the independent SR prototype's
0.0078), so the residual is essentially "how surprising was this play."

## Six pre-registered criteria — ALL PASS

| # | criterion | result |
|---|---|---|
| 1 | Holdout R² > 0.10 (primary, test 2023) | **0.1335** ✓ |
| 2 | Bootstrap 95% CI excludes B2 | [0.1229, 0.1442] vs B2 [−0.4815, −0.4593] ✓ |
| 3 | Beats B2 by ≥ 0.03 | +0.6034 ✓ |
| 4 | Replicates at R² > 0.05 (test 2024) | **0.1733** ✓ |
| 5 | Complexity > 5 nodes | 9 nodes ✓ |
| 6 | Shuffled-target R² ≤ 0.05 | **−0.2720** → VALID ✓ |

All three seeds: 42 → 0.1335, 123 → 0.1137, 7 → 0.0841.

## Best formula (plain math)

```
unpredictability ≈ max( 2·ln(down) − 0.685 , 0.441 )
```

(GP raw: `max(add(log(X0), sub(log(X0), 0.685)), 0.441)`, X0 = down, standardized
features; ablation shows every other feature has exactly zero effect —
dropping `down` sends R² to −0.2329.)

## Shuffled-target verdict

**VALID.** Shuffling the target within games on the test set gives R² = −0.2720
(≤ 0.05 threshold). The formula does not survive target shuffling — the signal
is real, not an artifact.

## Breakage

None. Ran clean end to end.

## Honest contextualization (independent check, not part of the script)

The script's baselines B2 (−0.4699) and B3/GLI-0.1 (−14.84) are uncalibrated —
their outputs are on the wrong scale for this target, so "beating" them is
near-meaningless. Against honest benchmarks on the same splits:

| model | primary test R² | replication test R² |
|---|---|---|
| Train mean | 0.0000 | 0.0000 |
| **Plain OLS on `down` alone** | **0.1489** | **0.1579** |
| GP "discovered" formula | 0.1335 | 0.1733 |
| Gradient boosting, 9 features | 0.2323 | 0.2368 |

The "discovery" is a monotone curve through 4 down-values that **underperforms
ordinary least squares on the same single feature** on the primary split. What
was genuinely found: *later downs have more volatile EPA* (r = +0.40 between
down and |residual|) — a known football fact (4th downs decide games), not a
new metric. The logarithms are decoration; no multivariate structure was
discovered (ablation: all other features delta = 0.0000).

**Verdict: criteria pass, discovery is trivial.** Statistically valid,
replicable, and uninteresting — it rediscovers a first-order football fact with
a worse-than-linear fit. Do not issue a metric card on this; do not publish it
as a machine-discovered metric. The *method* (residual-target search with
pre-registered criteria, replication, and shuffled nulls) is sound and worth
reusing on harder targets.
