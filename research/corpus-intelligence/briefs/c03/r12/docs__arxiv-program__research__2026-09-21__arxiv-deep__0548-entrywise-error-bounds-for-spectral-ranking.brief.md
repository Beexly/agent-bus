# docs/arxiv-program/research/2026-09-21/arxiv-deep/0548-entrywise-error-bounds-for-spectral-ranking.md
## What it is (1-2 sentences)
A full-paper research ledger (arXiv:2605.23854v1, Purdue; §§1–6 read, proofs skimmed) proving entrywise (ℓ_∞) error bounds for spectral BTL ranking (rank centrality) under semi-random non-uniform comparison graphs, plus an MMWU edge-reweighting scheme that restores Erdős-Rényi-like guarantees; verdict: ADAPT — the NFL schedule is exactly a clustered non-uniform comparison graph (dense intra-division blocks, sparse inter-division edges = assortative SBM).
## Key metrics/methods (formulas where given, else "not specified")
Theorem 3.1 (unweighted): ‖π̂−π‖_∞/‖π‖_∞ ≤ (c_1/γ + c_2)√(log(n)/(npk)), w.p. ≥ 1−O(n^{−5}), np ≥ c_0 log(n), k ≥ 5. Proposition 3.4 (assortative SBM): same bound under np ≥ c_0 log^5(n), q_m ≤ r·p. Theorem 4.1 (weighted rank centrality, weights w_ij ∈ [0,1]): bound depends only on the weighted Fiedler value λ_{n−1}(L^W) with 1/λ, 1/λ², 1/λ³ terms. Theorem 4.2 (MMWU weights): ‖π̂−π‖_∞/‖π‖_∞ ≤ c_1√(log n/(npk)) + c_2√(n log n/((np)³k)); Corollary 4.3 (np ≥ c√n): ER-optimal C√(log n/(npk)). Weighted Laplacian: L_w = Σ w_ij(e_i−e_j)(e_i−e_j)^T. Phenomenon: adding edges can reduce the spectral gap (Braess paradox, Eldan et al. 2017) — more data ≠ better spectral ranking. Proof machinery: leave-one-out error decomposition (Chen et al. 2019), Hoeffding/Bernstein concentration, Tropp (2015) matrix concentration.
## Data sources named
No empirical dataset — theory + synthetic simulations: (1) 3-block SBM, P=[[1,1,0],[1,2log n/n,2log n/n],[0,2log n/n,2log n/n]], n∈{30,…,135}, 25 repetitions, median reported; (2) Erdős-Rényi p=2log(n)/n. No public code/data released ("primarily theoretical in nature").
## Findings (numbers and facts, not vibes)
- On the heterogeneous 3-block SBM: MMWU-weighted rank centrality kept spectral gap ≈ 0.07 while unweighted decayed 0.03 → 0.01; weighted ℓ_∞ error dropped to ≈ 0.46 vs ≈ 0.48 (unweighted) at n=135.
- Weight heatmap: dense block downweighted, sparse block upweighted — reweighting normalizes degrees.
- On ER graphs: no significant difference (error ≈ 0.4–0.415 both) — reweighting harmless but unnecessary on already-uniform graphs.
- Score dynamic range bounded by constant h; connectivity needs np ≥ c_0 log(n); ER-optimality needs np ≥ c√n (for 32 NFL teams, average degree ≳ 6 vs actual 17-game schedule).
- Experiment 1 deliberately violates the theory's assumptions (p=0 allowed) yet reweighting still works empirically.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- MMWU reweighting → downweight intra-division games, upweight inter-division/inter-conference games; counters the "divisional echo chamber" bias in power ratings: SCHEME (schedule-structure effect on ratings) + TRUST-SIGNAL (per-team ℓ_∞ confidence bands).
- Braess-paradox finding (more games can shrink the spectral gap): TRUST-SIGNAL — a schedule-connectivity health metric (λ_{n−1}(L^W)) should gate rating confidence, e.g. early-season widening of per-team intervals.
- No existing corpus entry addresses non-uniform comparison-graph structure for spectral ranking; extends ledgers 0542/0544/0546/0547: OTHER (corpus-level novelty).
## Engine-actionable? (yes/no + one-line what)
Yes — implement MMWU-reweighted spectral power rating for the 32-team NFL comparison graph (port + backtest on nflverse 2015–2024) and a spectral-gap confidence diagnostic that widens per-team intervals when schedule connectivity dips.
