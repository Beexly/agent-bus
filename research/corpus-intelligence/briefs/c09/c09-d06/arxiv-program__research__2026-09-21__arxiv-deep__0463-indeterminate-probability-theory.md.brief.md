# arxiv-program/research/2026-09-21/arxiv-deep/0463-indeterminate-probability-theory.md
## What it is (1-2 sentences)
Full-paper ledger note on Yang et al. (2023) "Indeterminate Probability Neural Network" (arXiv:2303.11536v2) — a neural net whose output layer is split into N separately-softmaxed categorical "code" variables, with labels assigned from empirical joint-code/label frequency tables. Ledger verdict: REJECT — the exponential-capacity claim confuses representational combinatorics with learnability.
## Key metrics/methods (formulas where given, else "not specified")
- Output neurons partitioned into N groups, each softmaxed separately; joint code space has ∏M_j combinations from ∑M_j output neurons; inference via empirical P(label|code) = H/G from two rolling count accumulators (H joint, G marginal) over forgetting window T, plus ε-smoothing for unseen combos.
- Load-bearing assumption: strong conditional-independence claims about code variables given the label — which the paper itself says "can neither be proved nor falsified."
- Validation: MNIST clustering (split {2,10}, ε=2, batch 64, T=5, 5 epochs, 876 rounds); 12-bit→4096-class toy mapping.
## Data sources named
MNIST (70,000 digits); synthetic 12-bit binary-to-decimal task (all 2^12 combinations). No noisy real-world or sports data.
## Findings (numbers and facts, not vibes)
- 12-bit→4096-class mapping WITHOUT auxiliary bit labels: 69.5% train accuracy (failure); WITH all 12 auxiliary bit labels: 100% train accuracy using 24 outputs — the headline, but the auxiliary labels hand the model the factorization directly (circular).
- MNIST runs converge but only train-accuracy-style statistics reported — no held-out accuracy vs any baseline.
- Reported fragility to split shape, forgetting window T, ε, and initialization (local minima). Outputs are empirical frequency tables with no calibrated probabilistic interpretation.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — combinatorial output-coding scheme; not a representation learner, no sports application, nothing transfers to GSE's calibration work.
## Engine-actionable? (yes/no + one-line what)
no — Factorized output spaces for large discrete label sets are already better served by hierarchical softmax or autoregressive factorization; do not prototype.
