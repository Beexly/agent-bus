# arxiv-program/research/2026-09-21/arxiv-deep/2007-average-case-active-learning-with-costs.md
## What it is (1-2 sentences)
Deep read of Guillory & Bilmes (2009), arXiv:0905.2997 (UW technical report) — a pure-theory paper extending greedy active learning to non-uniform query costs, >2 answers, and non-uniform priors: ask the question maximizing the shrinkage-cost ratio Δ_i(S,π)/c_i, with logarithmic approximation guarantees. Ledger verdict: ADAPT — theoretical license for GSE's value-per-dollar charting-acquisition rules; no experiments, no code.
## Key metrics/methods (formulas where given, else "not specified")
- Shrinkage: Δ_i(S,π) = π(S) − Σ_j π(S^j)²/π(S); greedy rule: maximize Δ_i(S,π)/c_i.
- Tree cost: C(T,π) = Σ_h π(h)c_T(h); collision probability CP(v) = Σ_z v(z)².
- Theorem 2: C(T^g,π) ≤ 12C*·ln(1/min_h π(h)) — approximation quality independent of costs ("surprising... does not depend on the costs themselves").
- Theorem 4: C(T^g,π) ≤ O(C*·ln(n·c_max/c_min)); Theorem 5/6: ε-approximate greedy costs only 1/(1−ε) factor.
## Data sources named
None — no datasets, no experiments; "twenty questions" motivating examples (document length ∝ labeling time, parse-tree fragments, parallel labelers).
## Findings (numbers and facts, not vibes)
- Quantitative claims are approximation factors: 12·ln(1/min π) (Theorem 2), O(ln(n·c_max/c_min)) (Theorem 4), 12/(1−ε)·ln(1/min π) (Theorem 5); prior baseline Dasgupta 2004's 4·ln(1/min π) for binary unit-cost.
- Only paper in its related-work table with k>2 answers AND non-uniform costs AND non-uniform prior.
- Assumes finite realizable hypothesis class, unambiguous questions, known π/costs — bounds don't transfer directly to deep models; version-space quantities intractable for deep nets (hence ledgers 2002–2004's gradient/MC-dropout approximations).
- Agnostic (non-realizable) extension stated as open; no batch-diversity analysis.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Cost-aware charting acquisition: score(x) = expected model-change / charting cost, with market-implied game importance as the non-uniform prior π — OTHER (data acquisition economics).
- Subadditive batch costs (2nd game from same team/week cheaper) exploited by greedy — OTHER.
- ε-approximate license covering MC-dropout/projection estimation noise in Δ estimates — OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — operationalize Δ/c scoring on top of the ledgers-2002–2004 acquisition machinery (Δ via BADGE/BatchBALD/ACS-FW, c in dollars/minutes per game, subadditive batch costs); gate: Δ/c beats cost-blind greedy Δ at equal dollar budget by ≥0.005 held-out log-loss on the 2024 holdout, replicated under re-randomized costs; reject if c_max/c_min < 2 (heterogeneity too small to matter).
