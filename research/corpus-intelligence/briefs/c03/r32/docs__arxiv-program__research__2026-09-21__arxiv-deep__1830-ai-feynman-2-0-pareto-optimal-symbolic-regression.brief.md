# docs/arxiv-program/research/2026-09-21/arxiv-deep/1830-ai-feynman-2-0-pareto-optimal-symbolic-regression.md
## What it is (1-2 sentences)
Full-text ledger read of AI Feynman 2.0 (arXiv 2006.10782, Udrescu et al., Tegmark group) — four upgrades over v1 symbolic regression: generalized graph modularity from NN gradients, Pareto-frontier pruning replacing accuracy thresholds, hypothesis-testing candidate rejection, and normalizing-flow symbolic regression of distributions. Verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- d_k ≡ (1/N) Σ_i d_ki (mean error-description-length of candidate k); Pareto dominance: f_a dominates f_b iff simpler AND more accurate.
- Recursive modularity discovery: train NN on the mystery, examine gradient properties to find arbitrary n-ary compositional substructure (e.g. (v1+v2)/(1+v1·v2) velocity-addition module found, then recursion on the reduced variable); quadruple velocity addition needed generalized symmetry exploited twice.
- After each module merge (n1·n2 combinations), prune all Pareto-dominated candidates — Pareto-optimal count grows only logarithmically with total candidates.
- Normalizing flows: flow g maps samples of unknown distribution f to a normal; symbolic regression then performed on the estimated density — first SR method for "given samples, find the distribution's symbolic form."
## Data sources named
- Test equations exhibiting various modularity types (Table 4, including the quadruple relativistic velocity-addition equation); probability distributions (Table 5, e.g. n=2, l=1, m=0 hydrogen orbital) with N samples needed for discovery recorded; kinetic-energy-vs-(m,v,c) Pareto illustration. Code: pip install aifeynman; ai-feynman.readthedocs.io (open source).
## Findings (numbers and facts, not vibes)
- Noise robustness improved by 1–3 orders of magnitude over v1 (r=−1 error-description-length exponent; added noise shifts the best formula "straight upward" in the Pareto plane rather than breaking discovery).
- Discovers "many formulas that stumped previous methods," including via repeated modularity exploitation.
- Distribution discovery: Table 5 records N samples needed per distribution (hydrogen orbital n=2,l=1,m=0 as illustration).
- Kinetic-energy Pareto front contains both Einstein's exact formula and classical mv²/2 at convex corners — the method returns the accuracy/simplicity trade-off curve, not a single answer.
- Limitations: 1–3 orders claim is vs v1's thresholds, not vs modern baselines (PySR/DSR) — head-to-head absent; Pareto front requires a selector (like 1826) for the operating point; modularity detector could fire on spurious structure in correlated sports features.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pareto pruning after every merge/generation step is a cheap port into any evolutionary search in the engine (OTHER).
- Hypothesis-testing candidate rejection (replace hard error cutoffs in PySR selection) adds robustness to bad data points (weather games, backup-QB garbage time) (TRUST-SIGNAL).
- "Modularity over regimes, not variables" improvement experiment: run gradient modularity detection on NNs trained per game-script cluster (leading/trailing/neutral) to find regime-specific compositional structure (SCHEME).
- Normalizing-flow + SR lane: discover a closed-form "GSE scoring distribution law" for team points per game or EPA per play (OTHER).
## Engine-actionable? (yes/no + one-line what)
Yes — run aifeynman on nflverse team-game data as a complement to PySR, and port the two cheap ideas (hypothesis-testing rejection, Pareto-frontier pruning) into the engine's existing symbolic-regression pipeline.
