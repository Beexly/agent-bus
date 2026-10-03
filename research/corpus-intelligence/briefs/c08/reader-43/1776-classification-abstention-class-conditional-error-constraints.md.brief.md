# docs/arxiv-program/research/2026-09-21/arxiv-deep/1776-classification-abstention-class-conditional-error-constraints.md
## What it is (1-2 sentences)
Theory+experiment paper on classification with abstention under separate per-class error constraints (R0 ≤ 0.05, R1 ≤ 0.05): gives rate-optimal excess-risk bounds (matching minimax lower bound), proves strict deterministic feasibility can force degenerate all-abstain solutions that only randomization fixes, and compares product vs additive ambiguity objectives empirically.

## Key metrics/methods (formulas where given, else "not specified")
- Excess-risk upper bound: O(√((d_H log n + log(1/δ))/n)) for hypothesis class with VC dimension d_H, sample size n, confidence 1−δ; matching minimax lower bound up to log factors.
- Feasibility pathology: under strict deterministic feasibility, excess ambiguity risk can be forced to 1 (abstain on everything); randomized prediction restores feasibility.
- Constraints: class-conditional errors R0 ≤ α0, R1 ≤ α1 (experiments use 0.05/0.05); objective: minimize product or additive ambiguity (abstention risk).

## Data sources named
Vertebral, MAGIC (gamma telescope), BCI, Phoneme, Sensorless (sensorless drive diagnosis) real datasets, plus a synthetic dataset; compared vs a Lei (2014)-style baseline.

## Findings (numbers and facts, not vibes)
Ambiguity risk, product vs additive vs Lei: Vertebral 0.2591 vs 0.3086 vs 0.3505. MAGIC: product 0.4332 vs additive 0.5107 (both hold errors < 0.05). BCI: product (linear hinge) 0.0077 with errors R0 = 0.0505, R1 = 0.0450 vs Lei 0.2293 (~30× win). Phoneme: additive 0.5292 vs Lei 0.5606; product 0.4482 but violates with R0 = 0.0551 (over cap — infeasible). Sensorless: product 0.0166, additive 0.0644, Lei 0.2833. Synthetic: additive 0.5056 vs Lei 0.6038; product 0.4415 with errors 0.0512/0.0479 (slightly over cap). Pattern: product ambiguity usually abstains less but can violate the per-class cap; additive is the safer, usually-feasible choice. Binary classification only.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: per-market-type gated selection (spread / total / moneyline as "classes") with separate error caps instead of one global gate, using additive ambiguity minimization and randomized tie-breaking at the gate boundary to avoid degenerate all-abstain weeks; adaptive caps (tighten after drawdown weeks, relax above water) as an improvement experiment — a time-varying version of the paper's fixed caps.

## Engine-actionable? (yes/no + one-line what)
yes — Build per-market-type gate models with separate loss-rate caps and additive ambiguity (minimize abstention) with randomized boundary tie-breaking.
