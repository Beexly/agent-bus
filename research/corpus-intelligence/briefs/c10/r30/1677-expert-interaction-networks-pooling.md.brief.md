# arxiv-program/research/2026-09-21/arxiv-deep/1677-expert-interaction-networks-pooling.md
## What it is (1-2 sentences)
ADAPT verdict deep-read of arXiv:2406.13749 (2024): econometric theory paper modeling what happens to forecast pooling when experts communicate over a network before reporting — defines Attention Centrality and decomposes the pooling effect into zero-mean network bias plus topology-driven variance. Read for GSE's ensemble construction: its component models are "experts that communicate" via shared NGS features, injury reports, and market-implied lines.
## Key metrics/methods (formulas where given, else "not specified")
- Attention Centrality (Def. 4): αᵢ(A) = Σ_{j∈Nᵢ(A)} 1/dⱼ − 1.
- Prop. 1: E_ϵ[𝓑(x)|A] = 0; Var[𝓑(x)|A] = (σ²/n)(n⁻¹Σᵢαᵢ² + 2ρn⁻¹Σ_{i<j}αᵢαⱼ).
- Cor. 1 (star, n≥3): Var = σ²(1−ρ)(n−2)²(n−1)/(4n³) → σ²(1−ρ)/4 as n→∞ — star is the WORST structure.
- Cor. 2 (line): Var = σ²(1−ρ)/(9n²) → 0 as n→∞.
- Prop. 2: αᵢ=0 ∀i ⟺ network is d-regular ⟹ E[𝓑]=Var[𝓑]=0 for any forecast vector — d-regular (balanced) is the most efficient structure.
- Lemma 1: under common correlation + common variance, Bayesian pooling collapses to simple average — pooling-rule choice adds nothing.
- Prop. 3: Poisson G(n,p(n)) random graphs, E_d[Var]→0 as ⟨d⟩→1 or ⟨d⟩→∞.
## Data sources named
None empirical — fully theoretical; illustrations are a three-expert worked example (network bias +1/3, 0, −1/3 depending on placement) and a Poisson random-graph simulation (θ=3, σ²=1.2, ρ=0, ⟨d⟩=5).
## Findings (numbers and facts, not vibes)
- Shared pre-pooling communication adds NO bias in expectation but inflates pooled-forecast variance governed entirely by the information topology. (TRUST-SIGNAL)
- Star topology (every model leaning on one hub input, e.g. the Vegas consensus line or one flagship NGS metric) gives the maximum variance: σ²(1−ρ)/4. (SCHEME)
- d-regular/balanced input topologies give exactly zero network bias and zero network-induced variance. (SCHEME)
- Realized network bias for a fixed network + fixed season can be ±1/3-scale — the zero-bias result is over random forecast placement, so the variance result is the operative one. (TRUST-SIGNAL)
- Prop. 2's "only if" direction is noted as proof-under-review — the d-regular characterization is one-sided as published. (TRUST-SIGNAL)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: ensemble trust calibration must account for shared-input variance inflation — averaging more models that read the same hub is not diversification; it concentrates variance while looking like consensus.
- SCHEME: actionable ensemble-design audit — map each component model's top information sources, compute the star-topology concentration diagnostic (fraction of total weight attributable to the single most-shared input), and diversify or deflate the hub's weight where concentration is high.
- OTHER: pairs with ledger 1675 (2209.01697, empirical factor-removal for common forecast-error components) — this paper is its theoretical prequel: prevention (diversify topology) beats cure (factor adjustment).
## Engine-actionable? (yes/no + one-line what)
Yes — run the ensemble information-graph audit (star-topology concentration diagnostic on component models' shared inputs) and decorrelate inputs or down-weight the hub before trusting ensemble consensus.
