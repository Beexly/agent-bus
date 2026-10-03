# arxiv-program/research/2026-09-21/arxiv-deep/0612-asymptotically-optimal-sequential-design-for-rank.md
## What it is (1-2 sentences)
A theoretical treatise on asymptotically optimal sequential rank aggregation (Xi Chen, Yunxiao Chen, Xiaoou Li, 2017, arXiv:1710.06056v1): for ranking K items via adaptively chosen pairwise comparisons under a Bayesian decision framework, it derives the asymptotic Bayes-risk lower bound and proves two epsilon-greedy policies with saddle-point pair selection (mirror descent) and optimal stopping rules attain it as comparison cost c→0. Ledger verdict: REJECT for GSE's prediction stack except one sub-result — Lemma 5's exponential MLE deviation bound, usable as a sample-complexity diagnostic.
## Key metrics/methods (formulas where given, else "not specified")
- Loss: Kendall's tau distance between estimated and true ranking + c·T (comparison cost times stopping time).
- Pair selection: epsilon-greedy — with probability 1−p solve saddle-point D(θ) = max_{λ∈Δ} min_{θ̃: r(θ̃)≠r(θ)} Σ λ^{i,j} D^{i,j}(θ‖θ̃) (KL divergence between comparison-outcome distributions), with probability p explore uniformly; p ∝ |log c|^{−1/2+δ_0}.
- Stopping rules: T_1 = posterior Kendall's tau < c threshold; T_2 = first passage of min_{(i,j)} |sup_{θ∈W_{i,j}} l_n(θ) − sup_{θ∈W_{j,i}} l_n(θ)| ≥ h(c), h(c) = |log c|(1+|log c|^{−α}), α∈(0,1).
- Theorems: liminf_{c→0} V*_c(ρ)/(c·E t_c(Θ)) ≥ 1 (lower bound); E Kendall's tau = O(c); limsup E T_i / E t_c(Θ) ≤ 1 (achievability).
- Lemma 5 (the portable asset): P_θ(sup_{n≤t≤m} ‖θ̂^{(t)}−θ‖ ≥ ε_1) ≤ e^{−Ω(n ε_λ² ε_1⁴)} × O(m^K) for n ε_λ² ε_1⁴ → ∞.
## Data sources named
No real data. Simulations only: K=3 items with latent scores θ uniform on W = {‖θ‖∞ ≤ 2, |θ_i − θ_j| ≥ 0.4}, costs c ∈ {2⁻⁵ … 2⁻⁷⁵}; K=3 and K=4 with ‖θ‖∞ ≤ 4, gaps ≥ 0.2. Pairwise outcomes from parametric comparison models (Bradley-Terry / Thurstone / Luce family). Baselines: randomized selection with fixed-length stopping; Wald-statistic pair selection (smallest |Z_ij|) with fixed-length stopping. No repository, no code, no real data.
## Findings (numbers and facts, not vibes)
- Study I (Fig. 1): for both stopping rules, V̄/(c·E t_c(Θ)) stays above 1 and decays toward 1 as |log c| increases — asymptotic optimality holds numerically.
- Study II (Fig. 2): the two proposed methods "perform similarly and both substantially outperform the randomized and Wald statistic based algorithms"; Wald-statistic greedy beats random.
- No absolute numbers quoted — all results are figure-only; no numeric tables in the text.
- INFERENCE from the ledger: K=32 breaks Lemma 5's O(m^K) term — the bound is vacuous at NFL scale, and the entire adaptive-collection framework has no NFL analog since the 272-game schedule is fixed and not adaptively selectable.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Lemma 5 sample-complexity diagnostic for rating-MLE convergence: OTHER
- "Ratings have converged" indicator gating early-season bet sizing: TRUST-SIGNAL
- Minimax game-weighting (adapt saddle-point pair selection to which games to upweight): OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — implement Lemma 5 as a closed-form "ratings converged" diagnostic: compute per-week the minimum pair-selection probability ε_λ over the season's observed schedule and the bound's rate n·ε_λ²·ε_1⁴ to estimate probability the rating MLE is within ε_1 of truth, gating early-season bet sizing (half-day effort; the sequential policies themselves are rejected unconditionally).
