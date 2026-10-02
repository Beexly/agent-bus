# arxiv-program/research/2026-09-21/arxiv-deep/1737-machine-learning-markets.md
## What it is (1-2 sentences)
Deep-dive ledger of Storkey (2011, AISTATS, arXiv:1106.4509): a pure-theory paper showing that prediction markets of machine-learning agents implement standard model-combination rules as market equilibria — log-utility agents ⇔ wealth-weighted mixture of experts, exponential/CARA-utility agents ⇔ product of experts. Verdict: ADAPT as a principled ensemble-combination layer for GSE's sub-models.
## Key metrics/methods (formulas where given, else "not specified")
- Log utility u(w) = log w ⇒ equilibrium price ∝ Σ_i (wealth_i · p_i) — wealth-weighted mixture of experts.
- Exponential utility u(w) = −exp(−a·w) (CARA) ⇒ equilibrium price ∝ Π_i p_i^{weight_i} — product of experts (wealth drops out).
- Mixed-utility markets interpolate between mixture and product combinations; extension to MRFs/CRFs via local-potential markets and message-passing.
- GSE implementation: parameterized family spanning mixture ↔ product with a single interpolation parameter per market type, fit (not assumed) on 2024 data; per-sub-model "wealth" updated by realized log score (Kelly-style) as self-tuning mixture weights; improvement: context-dependent interpolation gated on ensemble disagreement.
## Data sources named
None — pure theory; no experiments, datasets, benchmarks, code, or empirical validation. (Netflix Prize cited only as motivation.)
## Findings (numbers and facts, not vibes)
- No numerical results. Core derivations: the utility→aggregation mapping (log⇔mixture, exponential⇔product); mixed-utility markets give flexible intermediates; local-potential markets implement graphical-model marginals.
- Limitations stated: equivalences exact only under price-taking, complete markets, strictly concave utilities; multivariate outcome spaces make exact clearing intractable (no loopy convergence analysis); the market framing adds clearing/budget overhead vs plain stacking/averaging.
- Acceptance gate from the ledger: ADAPT confirmed if the fitted interpolation beats GSE's current combination by ≥1.5% log-loss on the 2025 holdout with parameter std < 0.15 across folds; REJECT if no interpolation point beats a plain average.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: ensemble-combination semantics — GSE's current sub-model averaging can be reinterpreted as an implicit utility choice (geometric pooling = product of experts = CARA market); gives a fittable one-parameter interpolation plus self-tuning wealth weights as an alternative to ad-hoc weight decay.
## Engine-actionable? (yes/no + one-line what)
Yes — replace/augment GSE's sub-model averaging with a fitted mixture↔product pooling parameter per market type and Kelly-style wealth=track-record weight updates; ~1 week effort, gate on ≥1.5% log-loss improvement vs current averaging on 2025 holdout.
