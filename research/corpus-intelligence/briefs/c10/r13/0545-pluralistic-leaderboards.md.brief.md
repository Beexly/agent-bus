# arxiv-program/research/2026-09-21/arxiv-deep/0545-pluralistic-leaderboards.md
## What it is (1-2 sentences)
Theory + experiments on fairness in leaderboards: a single Bradley–Terry ranking fit to pairwise comparisons is misspecified under heterogeneous preferences and can shut out a cohesive subgroup, so the paper formalizes γ-approximate local stability as a checkable fairness criterion and builds committee (Alg. 1) and geometric-checkpoint ranking (Alg. 2/3) constructions. Ledger verdict: ADAPT — the local-stability audit criterion ports directly to GSE's published pick sheets and power rankings.
## Key metrics/methods (formulas where given, else "not specified")
- γ-approximate local stability: committee W_k of size k is γ-approximately locally stable if max_{a∉W_k} Pr_{i∼D}[a ≻_i W_k] ≤ γ/k (a ≻_i W_k = user i prefers a to every member of W_k); a ranking is stable if every top-k prefix is.
- Stability estimator: γ̂ = k·(max_{a∉W_k} (1/n)Σ_i 1[a ≻_i W_k]); γ̂ ≤ 1 = stable.
- Rank oracle: Rank̂(i;S,Δ) = (1/L)Σ_{ℓ=1}^L 1[S ⪰_i S'_ℓ]; Õ(1/ε²) draws for ε additive error; each committee-vs-committee comparison costs |S|+|S'| pairwise queries.
- Alg. 1 (committee via iterated rounding): T = ⌈10 log(k/ε)⌉ rounds; α = 1/2 + 4ε, β = 1/4 + 2ε; sub-committee sizes k_t = max{1, ⌊(1−α)α^{t−1}k⌋}; Thm 3.1: (16+O(ε))-approximately stable committee w.h.p. 1−δ; n = O(poly(m, 1/ε, log 1/δ)) users; d = O((k/ε²)·log(m/εδ)) comparisons per user (ε=0.01 → factor 18.97; ε=0.05 → 39.2).
- Alg. 2 (ranking via geometric checkpoints): committee sizes k_r = ⌊λ^{r−1}⌋; checkpoint transfer factor λ²/(λ−1)·γ (λ = 2 best theory).
- Alg. 3 (heuristic): single-addition decomposition (k_t = 1, T = m); monotone nested committees, fewer samples, weaker theory.
- PSC ceiling (Appendix A): the stronger PSC notion is unverifiable from k-wise comparisons — no deterministic algorithm can check it; randomized success ≤ k/(k+1) (Prop A.2 via Halpern et al. 2024).
## Data sources named
Synthetic mixtures of k Mallows models (m = 20 candidates, dispersion φ ∈ {0.1, 0.5, 0.9}, weights 1/k). Semi-synthetic LMArena on "arena-human-preference-140k" (huggingface.co/datasets/lmarena-ai/arena-human-preference-140k): top-20 BT models, user distribution = mixture of Mallows with one center per each of the 20 largest prompt categories. No code released; pseudocode fully specified.
## Findings (numbers and facts, not vibes)
- Synthetic: Alg. 1 stable (γ̂ well below 16+O(ε) bound) across all k and φ; BT top-k prefix violates stability for many k at φ = 0.1 and φ = 0.5; the "Mallows centers" ideal baseline is stable at small φ but violates at φ = 0.9.
- LMArena semi-synthetic: BT ranking violates stability at k = 4, 5 (φ=0.1) and k = 5 (φ=0.5); Algorithms 2 and 3 stable for all k and all φ; Alg. 3 slightly outperforms Alg. 2 empirically despite weaker theory.
- Sampling budgets: Alg. 1 (Mallows, k=5, φ=0.5) 18,540 users, median 38 comparisons/user (max 98); Alg. 2 (LMArena) 39,080 users, median 24 (max 95); Alg. 3 74,150 users, median 5 (max 45). MWU oracle settings: T_MWU = 20, T_Oracle = 30, n_MWU = 50, n_eval = 100.
- Identity (D.3): BT over all pairs ≡ Borda count ≡ Elo over all pairwise comparisons.
- Load-bearing limitation: guarantees require adaptive per-user battle-pair selection; offline/pre-collected data explicitly out of scope (§6) — direct application to fixed historical datasets is not covered. LMArena experiment is semi-synthetic (Mallows fit around real BT rankings, not real latent user rankings).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- BT can shut out a 40% cohesive faction with identical pairwise data → [TRUST-SIGNAL] a single consensus pick sheet/ranking can systematically misrepresent heterogeneous game contexts; audit before publishing.
- γ̂ ≤ 1 stability estimator → [OTHER] port to weekly pick-sheet audit: "users" = game-context clusters, "candidates" = weekly picks, preference = realized profitability within cluster.
- Checkpoint-structured ranking (every prefix representation-covered) → [OTHER] pick-sheet construction method if the audit finds violations; also maps to multi-pick slate products.
- PSC unverifiability → [OTHER] hard ceiling for any GSE port: only weak local stability is checkable on fixed historical data.
- Adaptive-querying requirement → [OTHER] caveat: GSE's historical data is offline/pre-collected, so only the diagnostic criterion ports cleanly, not the guarantees.
## Engine-actionable? (yes/no + one-line what)
Yes — implement the standing γ̂ stability audit on historical weekly pick sheets against context-clustered games; adopt checkpoint-structured sheet construction only if violations recur and blockwise reconstruction preserves ATS ROI.
