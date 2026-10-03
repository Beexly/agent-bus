# fable/UNCERTAINTY_AND_ACTIVE_LEARNING.md
## What it is (1-2 sentences)
A spec for uncertainty-based active-learning candidate ranking: surfaces in the GSE web app rank prediction cases for human review using uncertainty maps.

## Key metrics/methods (formulas where given, else "not specified")
- Three ranking strategies implemented:
  - Least confidence: ranks by `1 - max(probability)`.
  - Margin: ranks by the smallest gap between top two class probabilities.
  - Entropy: ranks by normalized class entropy.
- Shadow segment map built from prediction intervals + settled outcomes (apps/web/lib/metrics/uncertainty-map.ts); new surface apps/web/lib/fable/uncertainty.ts.
- Non-use: ranking does not retrain a model, trigger paid jobs, or route picks to customers — review queues only.

## Data sources named
- apps/web/lib/metrics/uncertainty-map.ts (prediction intervals, settled outcomes).

## Findings (numbers and facts, not vibes)
- Use cases: rank candidates for human review queues; identify where label/feature/model-diagnostic review is valuable.
- No metrics or evaluation numbers given.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: model-calibration infrastructure — uncertainty quantification machinery that can route ambiguous QB-behavior or scheme classifications to human review.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the least-confidence / margin / entropy ranking formulas as a review-queue triage layer for engine outputs (e.g., flag ambiguous predictions for human QC).
