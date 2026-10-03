# arxiv-program/research/2026-09-21/arxiv-deep/1169-proper-scoring-rules-maxmin-aggregation.md
## What it is (1-2 sentences)
A theory paper proving a principled correspondence between proper scoring rules and opinion-pooling operators: quasi-arithmetic (QA) pooling w.r.t. a scoring rule's exposure function. Quadratic rule↔linear pooling; log rule↔logarithmic (geometric) pooling; QA pooling is max-min optimal for a sub-contracting aggregator and makes the weight-score concave, enabling no-regret online ensemble-weight learning with O(√T) regret.
## Key metrics/methods (formulas where given, else "not specified")
- Savage representation: s(p;j) = G(p) + ⟨g(p), δ_j − p⟩, g = exposure function
- QA pool: p* = argmin_x Σw_i D_G(x∥p_i) (minimizes weighted Bregman divergence); g_quad(x)=2x → linear pool Σw_i p_i; g_log(x)=ln x+1 → log pool p*(j)=cΠ_i p_i(j)^{w_i}
- Max-min (Thm 4.1): min_j u(p*;j) = Σw_i D_G(p*∥p_i) ≥ 0, equal across outcomes with p*_j>0
- No-regret (Thm 5.3): OGD on simplex weights achieves regret ≤ 3√m·M·√T vs best mixture in hindsight (Algorithm B.3)
- Binary case: EVERY proper scoring rule has convex exposure for n=2 (Prop D.1) — all theorems apply to GSE's binary predictions regardless of rule
- Tsallis family = coordinate-wise power means: quadratic→arithmetic, log→geometric, γ=0→harmonic; informed-model contrast: 0.1% vs 20% equal-weight → linear ≈10% (failure), log ≈1.6%
## Data sources named
None (theory paper). Illustrative examples: hurricane landfall models, election forecasters (FiveThirtyEight, The Economist)
## Findings (numbers and facts, not vibes)
- Never mix operator and rule: linear/log pooling under a mismatched scoring rule breaks concavity (explicit counterexamples); scoring-rule-as-value-judgment: quadratic = even precision preference across [0,1]; log = precision preference near 0 and 1
- QA profit guarantee identity above; regret bound ≤ 3√m·M·√T against the best mixture (ambitious comparator, not just best expert)
- 6 axioms exactly characterize the QA class for n=2
- No empirical validation — proofs only
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: ensemble-aggregation foundation — operator–rule match: GSE's primary metric is log loss → default ensemble to logarithmic pooling; online gradient descent weight learning (warm-start equal) as replacement for fixed equal weights; Σw_i D_G(p*∥p_i) per game as a "disagreement dividend" diagnostic for where aggregation adds most
## Engine-actionable? (yes/no + one-line what)
Yes — ADOPT: (1) log-pooling as default ensemble operator (test: beats linear on 2025 full-season log loss), (2) OGD-learned weights vs equal weights with sublinear realized regret; improvement: contextual OGD weights as function of game context (market disagreement, week, weather) preserving concavity.
