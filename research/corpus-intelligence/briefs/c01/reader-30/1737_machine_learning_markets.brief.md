# arxiv-program/research/2026-09-21/arxiv-deep/1737-machine-learning-markets.md

## What it is (1-2 sentences)
Deep-read ledger of Amos Storkey (2011, AISTATS), arXiv:1106.4509 — pure theory paper showing that prediction-market equilibria with machine-learning agents implement standard ML model-combination rules (mixtures, products of experts, graphical-model message passing), with the combination form determined by agents' utility functions. Verdict: ADAPT — the utility→aggregation mapping gives GSE a principled, fittable ensemble-combination layer with wealth-based self-tuning weights.

## Key metrics/methods (formulas where given, else "not specified")
- Log utility u(w) = log w ⇒ equilibrium price ∝ Σ_i (wealth_i · p_i) — wealth-weighted **mixture of experts** (arithmetic pool).
- Exponential/CARA utility u(w) = −exp(−a·w) ⇒ equilibrium price ∝ Π_i p_i^{weight_i} — **product of experts** (geometric/log pool); wealth drops out under CARA.
- Other utilities interpolate between mixture and product combinations; local-potential markets implement MRF/CRF/Boltzmann-machine marginals with message-buying ≈ belief propagation.
- Proposed GSE spec: parameterized family spanning mixture ↔ product, p_comb ∝ Π_i p_i^{w_i} vs Σ_i w_i p_i, with a single interpolation parameter per market type fit on 2024 sub-model outputs; sub-model "wealth" updated by realized log score (Kelly-style) as self-tuning mixture weights; disagreement-gated adaptive pool as improvement experiment.

## Data sources named
- None — pure theory paper; no dataset, no experiments. Cites the Netflix Prize only as motivation for heterogeneous combination.

## Findings (numbers and facts, not vibes)
- No numerical results or baselines — all results are equilibrium derivations under price-taking, complete markets, strictly concave utilities.
- Limitations recorded: zero empirical content; real ensembles violate the assumptions freely; multivariate state spaces make exact clearing intractable (no convergence analysis for loopy message passing); the market framing adds clearing/budget overhead over standard stacking.
- GSE overlap note: the repo has no utility-based combination framework — new conceptual capability (principled combination semantics), not a duplicate of any implemented combiner.
- Reproducible test: log-loss of utility-pooled combination vs current averaging, simple average, geometric mean, best single sub-model on 2024 sub-model outputs with 2025 holdout; pass if fitted interpolation beats best baseline by ≥1.5% log-loss.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: ensemble architecture — GSE's sub-model combination layer: geometric pooling of sub-model probabilities ≡ product of experts ≡ CARA-utility market; arithmetic averaging ≡ mixture of experts ≡ log-utility market.
- OTHER: model governance — read ensemble weights as market equilibrium under implicit utility assumptions; fit the mixture↔product interpolation parameter rather than assuming it (hypothesis: product wins when sub-models agree, mixture hedges when they disagree).

## Engine-actionable? (yes/no + one-line what)
Yes — replace/augment sub-model averaging with the fitted mixture↔product pooling layer plus Kelly-style wealth-updated weights, gating ADOPT on ≥1.5% log-loss improvement over the current combiner on the 2025 holdout.
