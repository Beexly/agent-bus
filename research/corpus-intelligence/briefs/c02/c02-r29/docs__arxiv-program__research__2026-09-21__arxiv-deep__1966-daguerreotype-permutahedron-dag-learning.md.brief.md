# docs/arxiv-program/research/2026-09-21/arxiv-deep/1966-daguerreotype-permutahedron-dag-learning.md

## What it is (1-2 sentences)
A DAG-learning method (arXiv:2301.11898, Zantedeschi et al. 2023) that learns causal graph structure by continuous optimization of a topological ordering over the permutahedron, keeping every learned graph a valid DAG and allowing edge estimation via any (even non-differentiable) subroutine. File verdict: ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- Decomposition: any DAG = topological ordering (permutation) + edges only from lower to higher nodes in the order; ordering learned via sparse relaxations over the permutahedron (sparsemax/sparseMAP-style; Gumbel-Sinkhorn/Birkhoff connections).
- Theorem bound: SHD(R^{σ(θ)}, R^{σ(θ′)}) ≤ ∫ ΣΣ δ_{H_ij} dt (global sensitivity bound on SHD between induced orderings).
- Edge estimators tested: masked linear (Gaussian equal-variance likelihood per Ng et al. 2020), masked MLP (NoTears-nonlinear style), LARS; ℓ2 regularization on θ, Φ; standardized data.
- Evaluation metrics: SHD (edge correctness; favors sparse) vs SID (structural intervention distance; favors dense); Pareto analysis across both.

## Data sources named
- Sachs (2005) protein signaling: d=11 nodes, 853 observations, 17-edge ground-truth DAG.
- SynTReN: 10 pseudo-real transcriptional networks (Lachapelle et al. 2020), d=20 nodes, 20–25 edges, 500 observations each.
- Synthetic linear/nonlinear SEMs with known ground truth (Appendix D).
- Code: https://github.com/vzantedeschi/DAGuerreotype.

## Findings (numbers and facts, not vibes)
- On Sachs + SynTReN, DAGuerreotype sits on the Pareto front of SHD vs SID: NOTEARS/GOLEM/NPVAR have best SHD but worst SID (too sparse); VI-DP-DAG has best SID but worst SHD ("among the best in terms of SID and the worst in terms of SHD", too dense); sortnregress predicts too few edges, VI-DP-DAG too many. [OTHER]
- Performance "strongly depends on the choice of edge estimator": linear better on Sachs, MLP needed for SynTReN. [OTHER]
- The paper itself cites the Reisach et al. critique: synthetic linear-DAG benchmarks are flawed because marginal variance grows with DAG depth, so sort-by-variance + sparse regression matches SOTA. [TRUST-SIGNAL: synthetic benchmark results on linear DAGs are inflated by variance-sorting artifacts; standardize variables and validate orderings against domain knowledge]
- Space complexity ≥ order of the edge-mask matrix (O(d²); noted fine at d=35). [OTHER]
- Observational data only; Gaussian equal-variance likelihood assumption is strong for sports indicators. [OTHER]
- Proposed GSE acceptance gates: Kendall's τ ≥ 0.6 across season splits; order-constrained NOTEARS matches unconstrained Brier within 0.002 using ≤70% of edges; ≥80% domain-directionality agreement. Reject if τ < 0.5. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Indicator-causality layer: topological ordering of ~35 engine indicators constrains downstream NOTEARS/PCMCI+ runs (edges must respect the learned order), shrinking search space and stabilizing graphs — SCHEME (systematic causal structure of game-outcome drivers), TRUST-SIGNAL (validity claim + estimator-dependence caveat: edge quality hinges on the chosen estimator)
- Benchmark critique as methodology rule: standardize variables, never trust variance-driven ordering results — TRUST-SIGNAL
- No direct QB-BEHAVIOR, COACHING, or OL findings in the file.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the learned topological ordering as a constraint layer over GSE's causal structure-learning pipeline, with the engine's own per-target gradient-boosted regressor plugged in as the non-differentiable edge subroutine (~3 engineer-days).
