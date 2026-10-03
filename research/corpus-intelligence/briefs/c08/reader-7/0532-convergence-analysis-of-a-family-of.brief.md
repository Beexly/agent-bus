# docs/arxiv-program/research/2026-09-21/arxiv-deep/0532-convergence-analysis-of-a-family-of.md
## What it is (1-2 sentences)
Convergence analysis of Newman's one-parameter family of Zermelo-type fixed-point iterations for Bradley–Terry MLE; proves that α=0 with ASYNCHRONOUS (per-coordinate, Gauss-Seidel style) updates converges substantially faster than classical Zermelo, while synchronous α=0 can fail to converge entirely. Pure numerical-analysis paper, not predictive.

## Key metrics/methods (formulas where given, else "not specified")
- Newman α-scheme: π_i ← [Σ_j w_ij(α π_i+π_j)/(π_i+π_j)] / [Σ_j (α w_ij+w_ji)/(π_i+π_j)], α ≥ 0; α=0: π_i ← [Σ_j w_ij π_j/(π_i+π_j)] / [Σ_j w_ji/(π_i+π_j)]
- Theorem 3.1: ρ_sync(α) = max{|λ|: λ ∈ Λ(J_{F_α}(π̂)), λ<1} = max{λ_2, −λ_n} (all eigenvalues real)
- Theorem 4.2: ρ_async(α) < 1 for all α>0 — async always locally convergent
- Theorem 4.3: under population BT with consistently ordered bipartite graphs, ρ̄_async(α) monotonically increasing in α≥0 (optimal α=0); at α=0, ρ̄_async(0) ≡ max{|λ|²: |λ|<1} < 1 — eigenvalue squaring is the acceleration mechanism

## Data sources named
Synthetic: two-community SBM graphs (homogeneous p=q=0.05; clustered p=0.1,q=0.01; near-bipartite p=0.01,q=0.1), cyclic graph n=20, bipartite graphs; real: vervet monkey dominance (n=64, N=11,632), ATP tennis (Jeff Sackmann), ASSISTments. Code: github.com/Yiminithere/newman-algorithm-for-BT. MLE ground truth to tolerance ‖π⁽ᵏ⁾−π⁽ᵏ⁻¹⁾‖₂/‖π⁽ᵏ⁾‖₂ ≤ 1e-15.

## Findings (numbers and facts, not vibes)
- Async local convergence factor substantially smaller than sync — ~7× in near-bipartite setting.
- Bipartite case: ρ̄_sync(0)=1 (sync α=0 FAILS); async α=0 speedup ≈17.33× over Zermelo (α=1) under consistent ordering, ≈6.95× under random ordering.
- Cyclic graph (n=20): BT assumptions break; population convergence factors do not reflect actual behavior.
- Real data: population convergence factors from fitted BT model predict observed ρ_sync/ρ_async "surprisingly accurately."
- Paper's bottom line: the α=0 acceleration comes mainly from ASYNCHRONOUS updates, not just the parameter choice.
- Author-cited caveat (from file): on 32 NFL teams, any reasonable fitter converges in milliseconds — the 17× speedup matters for large sparse graphs (CFB 134 teams), not dense 32-node problems.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: numerical-upgrade for GSE's BT-MLE rating fitter — same MLE, faster convergence, provably always-convergent async variant; biggest payoff on CFB-scale sparse comparison graphs.

## Engine-actionable? (yes/no + one-line what)
Yes — replace the BT fitter with Newman's α=0 async iteration (Eq. 2.1 α=0, sequential per-team updates + unit-product renormalization); verify ≥1.5× fewer passes vs Zermelo on CFB data with identical MLE to 1e-9 log-ratio.
