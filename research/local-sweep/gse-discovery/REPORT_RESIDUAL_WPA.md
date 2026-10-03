# Experiment 3 — Residual WPA target |wpa − wpa_hat| (MOVE-37-ANALYSIS-02, §4)

**Date:** 2026-09-13 | **Verdict: KILLED** — no discoverable structure beyond the
down-only triviality the spec hoped to escape.

## What was run

Phase-4 machinery adapted per spec §4.3: GBM predicts **wpa** (not epa) from the
same 9 pre-snap features; target = |wpa − wpa_hat|; no 99th-pct clip (spec:
WPA ∈ [−1,1], heavy tail absent by construction). Same six-criteria tournament,
3 SR seeds (2000×30, parsimony 0.001), bootstrap CI, affine-refit replication,
per-feature ablation, within-game shuffled null.

## The spec's premise failed at the first step

**GBM wpa holdout R² = 0.0136** (primary) / 0.0127 (replication). The gradient
booster can barely predict wpa from pre-snap features at all — wpa is the change
in win probability caused by what happens *during* the play, and ~99% of it is
unpredictable pre-snap. So |wpa − wpa_hat| ≈ |wpa − ε}: there is no "predictable
component" for the GBM to remove and no structured residual left behind. The
target inherits wpa's marginal heteroscedasticity, which is down-dominated:

| feature | corr with residual (train) | OLS test R² alone |
|---|---|---|
| down | **+0.2508** | **+0.0656** |
| ydstogo | −0.0842 | +0.0075 |
| shotgun | +0.0798 | +0.0074 |
| yardline_100 | −0.0546 | +0.0046 |
| quarter_seconds_remaining | −0.0302 | +0.0015 |
| score_differential | −0.0059 | +0.0000 |
| all 9 jointly | — | +0.0722 |

The spec predicted the residual "should depend on time, score, and down
independently. No single feature should dominate." **Observed: down dominates
again** (0.0656 of the 0.0722 total), time and score carry nothing. The target did
not escape the down-only triviality — it reproduced it.

## SR results

| seed | program | test R² |
|---|---|---|
| 42 | `inv(X4)` = 1/quarter_seconds_remaining (pathological — blows up at end of quarter) | −1.3722 |
| 123 | `sqrt(0.000)` = 0 (constant) | −0.1921 |
| 7 | `0.011` (near-constant) | −0.2003 |

Best = seed 123's constant zero. Replication affine-refit collapses to a=0.0000,
b=0.0255 (predict the mean), R² = −0.0001. Ablation deltas all −0.0000 (constant
program). Shuffled null −0.1921 → "VALID" (vacuous for a constant).

Note: OLS on all 9 features reaches test R² 0.0722 while the SR found −0.19. The
SR machinery failed to assemble even the weak linear signal — the target's scale
(mean 0.025, std 0.033) plus parsimony pressure collapses the search to
constants. The method didn't hallucinate structure (good), but it also missed
the small real signal (limitation worth noting).

## Baselines B2/B3 are vacuous on this target

B2 (human heuristic) R² = **−121.03**; B3 (GLI-0.1) R² = **−17324.56**. Both were
designed for the EPA-residual scale and are astronomically miscalibrated here
(the target has mean 0.025). The paste's "identical machinery" instruction makes
criteria 2/3 (CI excludes B2, beats B2 by 0.03) pass vacuously — margins of
+120.8 against a baseline of −121 are meaningless. The honest yardsticks are the
spec's own prediction and kill conditions:

- **Prediction:** R² in [0.08, 0.15] with down + qsec + sd drivers → **FAIL**
  (best SR −0.19; OLS-down 0.066, below the range, single driver).
- **Kill 1:** best formula a function of one feature only → trivial → the only
  real signal (OLS) IS down-only → **KILLED**.
- **Kill 2:** R² < 0.05 → no discoverable structure → SR's R² < 0.05 → **KILLED**.

## Verdict: KILLED

The |wpa − wpa_hat| target does not escape the down-volatility triviality, and
the spec's mechanism for why it should (WP model uses time/score as inputs)
confuses the WP *level* model with the WPA *change*, which is inherently
unpredictable pre-snap. The residual-unpredictability method is validated
machinery in search of a target with actual residual structure. Per the revised
atlas, Bayesian surprise (KL between pre- and post-snap WP distributions) is the
next candidate — but note the lesson of this experiment: if the post-snap
distribution is ~99% unpredictable, surprise will inherit the same emptiness.
Any next target needs a GBM R² well above ~0.01 to be worth the SR budget.

## Reproducibility

- `residual_wpa.py` — phased + checkpointed (rerunnable)
- `residual_wpa.log`, `residual_wpa_data.npz`, `residual_wpa_ests/`,
  `residual_wpa_eval.json`, `residual_wpa_ckpt.json`
