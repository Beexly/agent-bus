# arxiv-program/research/2026-09-21/arxiv-deep/1973-dagnocurl-hodge-decomposition-dag-learning.md
## What it is (1-2 sentences)
Full-paper research ledger on Yu, Gao, Yin, Ji (2021) "DAGs with No Curl: Learning DAGs via Hodge Decomposition" (ICML 2021, arXiv:2106.07197), verdict ADAPT. It presents DAG-NoCurl, a drop-in 10–100× faster replacement for NOTEARS (ledger 1962) that lands in DAG space directly via Hodge projection instead of iterative constrained optimization, reaching the same global minimizer.
## Key metrics/methods (formulas where given, else "not specified")
- Two steps: (1) unconstrained L-BFGS on the cyclic solution with the NOTEARS loss; (2) Hodge decomposition Y = gradient + curl + harmonic components, projecting onto the curl-free gradient of a potential function; Theorem: DAG weighted-adjacency matrices ≡ weighted gradients of graph potentials.
- Loss: F(A,X) = (1/2n)||X − AᵀX||_F² (+ optional smooth L1; paper finds L1 adds little — thresholding suffices).
- Metrics: SHD (accuracy), ΔF = F(Ã,X) − F(A⁰,X) (optimization quality), CPU seconds.
## Data sources named
Linear SEM (ER/SF random graphs, n=1000, Gaussian/Gumbel noise, 100 trials); nonlinear SEM (three identifiable additive-noise cases); Sachs et al. 2005 protein-signaling network. Code: https://github.com/fishmoon1234/DAG-NoCurl (stated "will be publicly released" — verify live).
## Findings (numbers and facts, not vibes)
- Linear: "NoCurl requires a similar runtime as FGS and MMPC, which is faster than NOTEARS by more than one or two orders of magnitude"; accuracy comparable — NoCurl-2 lowest SHD on ER-Gaussian, NoCurl-1 lowest on SF4-Gumbel.
- Nonlinear: NoCurl ≈ DAG-GNN accuracy but 3–4× faster; >1 order of magnitude faster than NOTEARS-MLP and GraN-DAG. Best in Nonlinear Case 2; beats NOTEARS-MLP in Case 1 (loses to GraN-DAG); loses to NOTEARS-MLP in Case 3.
- Caveat: "NoCurl's performance is limited by the base model" (inherits DAG-GNN's accuracy ceiling).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — continuous-optimization DAG-learning lane; direct production upgrade of ledger 1962 (NOTEARS) for the weekly team-panel refresh cadence where NOTEARS cost is the binding constraint.
## Engine-actionable? (yes/no + one-line what)
yes — swap NOTEARS solver for the NoCurl two-step (L-BFGS → Hodge projection → threshold) in the 1962 team-season snapshot pipeline (~2 engineer-days); ADOPT iff ≥10× wall-clock speedup with SHD within 10% of NOTEARS on synthetic + football edge sanity checks.
