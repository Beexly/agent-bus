# docs/arxiv-program/research/2026-09-21/arxiv-deep/0548-entrywise-error-bounds-for-spectral-ranking.md

## What it is (1-2 sentences)
Deep-read ledger of arXiv:2605.23854v1 (Lee, Makur, Singh, Purdue 2026) proving entrywise (ℓ∞) error bounds for spectral Bradley-Terry ranking (rank centrality) under a semi-random adversary model, plus an MMWU edge-reweighting scheme that restores Erdős-Rényi-like guarantees on clustered comparison graphs. Verdict: ADAPT — the NFL schedule is exactly a "semi-random-like" non-uniform comparison graph (dense intra-division blocks, sparse inter-division edges).

## Key metrics/methods (formulas where given, else "not specified")
- Unweighted Theorem 3.1: ‖π̂−π‖∞/‖π‖∞ ≤ (c_1/γ + c_2)·√(log(n)/(npk)), w.p. ≥ 1−O(n^{−5}), for np ≥ c_0 log(n), k ≥ 5.
- SBM Proposition 3.4: same bound under np ≥ c_0 log^5(n), q_m ≤ r·p (assortative SBMs).
- Weighted Theorem 4.1: ‖π̂−π‖∞/‖π‖∞ ≤ c_1/λ_{n−1}(L^W)·√(n log(n) p/k) + c_2/λ_{n−1}(L^W)²·√(n² log(n) p²/k) + c_3/λ_{n−1}(L^W)³·√(n⁴ log(n) p³/k).
- MMWU Theorem 4.2: ≤ c_1√(log n/(npk)) + c_2√(n log n/((np)³k)); Corollary 4.3 (np ≥ c√n): ER-optimal ≤ C√(log n/(npk)).
- MMWU SDP (Yang et al. 2024, Algorithm 2): 1/2-approximation in near-linear time; monotone coupling (Def. 5.2, Lemma 5.3) shows a semi-random graph contains an ER-like subgraph w.h.p.
- Key phenomenon: adding edges can *reduce* the normalized Laplacian's spectral gap (Braess paradox, Eldan et al. 2017) — more data ≠ better spectral ranking.

## Data sources named
- No empirical dataset — theory + synthetic simulations only: (1) 3-block SBM with block edge-probability matrix P = [[1,1,0],[1,2log n/n,2log n/n],[0,2log n/n,2log n/n]], n ∈ {30,…,135}, 25 repetitions; (2) ER with p = 2log(n)/n. No code or data released ("primarily theoretical in nature").

## Findings (numbers and facts, not vibes)
- Heterogeneous 3-block SBM: MMWU-weighted keeps spectral gap ≈ 0.07 while unweighted decays 0.03 → 0.01 as n grows; weighted ℓ∞ error ≈ 0.46 vs unweighted ≈ 0.48 at n = 135. Weight heatmap: dense block downweighted, sparse block upweighted — reweighting normalizes degrees.
- On ER graphs: no significant difference (error ≈ 0.4–0.415 for both) — reweighting harmless but unnecessary.
- Simulation 1 deliberately violates the theory's own assumptions (p = 0 allowed) yet reweighting still works empirically.
- Stated assumptions: score dynamic range bounded by constant h; uniform base probability p > 0 (adversary can only boost); k comparisons per pair uniform; spectral gap lower bounded by constant γ w.h.p. (unweighted); weighted graph must be connected.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- NFL divisional block structure = assortative SBM; reweighting counteracts "divisional echo chamber" bias in power ratings: OTHER.
- Braess paradox in spectral ranking (more games ≠ better rating): TRUST-SIGNAL (diagnostic for when rating confidence degrades despite more data).
- Spectral gap λ_{n−1}(L^W) as "schedule connectivity" health metric with 1/λ-dependent confidence intervals: OTHER (new capability in corpus).
- Extension verdict: no existing ledger entry addresses non-uniform comparison-graph structure for spectral ranking.

## Engine-actionable? (yes/no + one-line what)
Yes — implement MMWU-reweighted spectral power rating on the NFL comparison graph (downweight intra-division games, upweight inter-division games) plus a spectral-gap schedule-connectivity diagnostic; acceptance gate: beats unweighted rank centrality on end-of-season ℓ∞ error vs batch-BTL in ≥5 of 7 test seasons AND next-week SU log-loss by ≥0.001/game over 2018–2024.
