# arxiv-program/research/2026-09-21/arxiv-deep/1109-pso-association-rule-text-mining.md
## What it is (1-2 sentences)
A paper using particle swarm optimization to mine association rules from triathlete RSS/blog text. The ledger verdict is REJECT — descriptive rule mining with no predictive validation, no holdout, no stability testing, and an arbitrary fitness function; replaced in the corpus by ledger 1307 (Bayesian weighted dynamic football prediction).
## Key metrics/methods (formulas where given, else "not specified")
- PSO-ARTM: particles encode rule antecedent/consequent sets; population 200, 5 runs, 10,000 fitness evaluations; C1=C2=2.0, inertia 0.7
- Fitness = equal average of support, confidence, and an ad-hoc aggregate weighted score (no justification)
- Rule counts at K=5/6/7/8: 4,594 / 1,947 / 282 / 273
## Data sources named
4,271 triathlete RSS/blog feeds; only the 1,000 most frequent terms kept
## Findings (numbers and facts, not vibes)
- Rule counts collapse from 4,594 (K=5) to 273 (K=8) with no analysis of which rules are real
- Rejection grounds: no predictive baseline, no holdout, no significance tests; "TF/ITF" terminology non-standard; interpretation is subjective narrative
- No numeric results beyond rule counts
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: none — nothing transfers to a prediction engine
## Engine-actionable? (yes/no + one-line what)
No — REJECT in file; no implementable artifact.
