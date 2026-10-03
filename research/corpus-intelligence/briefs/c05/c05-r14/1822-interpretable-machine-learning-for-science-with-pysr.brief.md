# arxiv-program/research/2026-09-21/arxiv-deep/1822-interpretable-machine-learning-for-science-with-pysr.md
## What it is (1-2 sentences)
Flagship symbolic-regression paper (Cranmer 2023, arXiv:2305.01582) introducing PySR/SymbolicRegression.jl with an evolve-simplify-optimize loop (BFGS constant fitting), adaptive parsimony, and EmpiricalBench — a benchmark of rediscovering 9 historical physical laws (Hubble, Kepler, Newton, Planck, Leavitt, Schechter, Bode, ideal gas, Rydberg) from original noisy data without constants.
## Key metrics/methods (formulas where given, else "not specified")
- Adaptive parsimony (used): ℓ(E) = ℓ_pred(E)·exp(frecency[C(E)]), where frecency = frequency+recency count of expressions at complexity C(E) in a moving window / tunable constant (replaces classical ℓ = ℓ_pred + parsimony·C).
- Mutation acceptance (simulated annealing): q_anneal = exp(−(L*−L)/(α·T)), T = 1 − k/n_c.
- Evolve-simplify-optimize loop: evolve → algebraic simplification (infrequent, so redundant intermediates survive to mutate) → BFGS constant optimization inside every expression.
- Migration via global permanent "hall of fame" (best expression per complexity across all island populations).
- GP denoising kernel: k(x,x') = σ²exp(−|x−x'|²/2ℓ²) + αδ(x−x') + C; complexity = nodes in expression tree.
- Custom operators: any 1–2 argument scalar operator with SymPy + JAX/PyTorch equivalents; backend fuses operators into SIMD kernels.
## Data sources named
EmpiricalBench: digitized 1929 Hubble original data (WebPlotDigitizer); Kepler, Newton, Planck, Leavitt, Schechter, Bode, ideal gas, Rydberg datasets — original public where available, else synthetic data from the equation with noise; code at github.com/MilesCranmer/PySR, SymbolicRegression.jl (Julia registry), github.com/MilesCranmer/pysr_paper.
## Findings (numbers and facts, not vibes)
- EmpiricalBench (9 laws × 5 trials = 45 runs/algorithm; correct rediscoveries): PySR 35/45, QLattice 21/45, Operon 9/45, EQL 5/45, DSR 0/45 (many failed/crashed), SR-Transformer 0/45 (pre-trained on billions of synthetic expressions — still last).
- Four classic-heuristic GP algorithms all beat the two pure deep-learning approaches.
- Hubble/Kepler/Newton/Leavitt/Bode/Ideal Gas: PySR 5/5 each; Planck and Rydberg: nobody solved (0/5 for all).
- File's ledger verdict: ADOPT — the production symbolic-regression stack for GSE's metric-invention program; ~1–2 engineer-days to wire.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: metric invention — evolve closed-form metrics from nflverse features (EPA/play, success rate, air yards, pressure rate) targeting points/drive, next-season wins, or QB efficiency; selection by held-out-season accuracy AND complexity (≤15 nodes to stay publishable).
- QB-BEHAVIOR: specific lane — evolve a closed-form "true QB efficiency" equation from per-game QB box-score + EPA features vs next-season wins.
- SCHEME: discovered sub-metrics can compose hierarchically (multi-view SR: QB search + defense search, then a fusion search using hall-of-fame expressions as custom operators).
## Engine-actionable? (yes/no + one-line what)
Yes — install PySR and run the metric-invention pipeline on nflverse 2015–2025 aggregates; adopt a discovered equation if it beats passer rating/QBR by ≥0.05 Pearson r on held-out 2024–2025 AND has ≤15 tree nodes.
