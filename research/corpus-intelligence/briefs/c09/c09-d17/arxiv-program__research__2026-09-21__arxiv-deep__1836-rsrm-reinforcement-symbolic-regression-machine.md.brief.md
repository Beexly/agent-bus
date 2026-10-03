# arxiv-program/research/2026-09-21/arxiv-deep/1836-rsrm-reinforcement-symbolic-regression-machine.md
## What it is (1-2 sentences)
Deep-read ledger of Xu, Liu, Sun (arXiv:2305.14656, 2023), "RSRM: Reinforcement Symbolic Regression Machine" — combines MCTS over expression trees with Double Q-learning that learns the reward distribution to prune MCTS's search space, plus a modulated sub-tree discovery block that invents new composite operators. Verdict: ADAPT (the portable parts are reward-distribution pruning and operator invention; GSE's stack is LLM+evolution, not RL/MCTS).
## Key metrics/methods (formulas where given, else "not specified")
- MCTS agent over expression trees with predefined operators/variables; Double Q-learning learns the distribution of rewards (not just max) to shrink/prune MCTS's feasible search space.
- Modulated sub-tree discovery: heuristic mining of recurring sub-tree motifs, promoted to new composite operators in three forms: A±f(x) (e.g. e^x−x), A×f(x) (e.g. 1.57e^x), A^f(x) (e.g. (e^x)^2.5), where A is a fixed form and f(x) learnable; invented operators become first-class tree nodes.
- Ablation design: full model vs Models A–D (module ablations) on Livermore; recovery-rate shootout vs SPL, NGGP, gplearn, DSR (100 parallel runs each).
## Data sources named
Benchmarks: Nguyen (1–2 vars, 20–100 points), Nguyen-c (parametric), R (rational equations), Livermore (hard: high exponentials, trig); real data: free-falling balls (baseball, blue basketball, bowling ball trajectories). No public repo URL stated.
## Findings (numbers and facts, not vibes)
- Nguyen (avg recovery % over 100 runs): RSRM 100% on Nguyen-1 through Nguyen-10, incl. sin(x₁²)cos(x₁)−1 (DSR 72%, GP 12%) and log(x₁+1)+log(x₁²+1) (DSR 35%, GP 17%).
- Livermore ablation (full RSRM 100/100/55/100/100/100/100/100/100/100/100 on Livermore-1..11); ablated variants collapse on hard cases (Livermore-3: 55 vs 20/0/0; Livermore-7 sinh: 100 vs 10; Livermore-8 cosh: 100 vs 3) — each module load-bearing.
- Falling balls: RSRM finds compact physics-plausible forms, e.g. baseball: −4.43t²+0.36sin(t²+1.51)²+47.35 vs baselines' longer polynomials.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — discovery-pipeline methodology: (1) reward-distribution-guided pruning ports to GSE-SR's island model — kill islands whose score distribution is hopeless, saving LLM calls; (2) sub-tree motif mining → promote recurring sub-expressions (e.g. log(1+x), x/(x+c)) to first-class operators, a "vocabulary growth" mechanism for discovered metrics. No player/team findings.
## Engine-actionable? (yes/no + one-line what)
Yes — mine top-100 GSE-SR programs for frequent sub-trees (min support 10%), promote top-3 to named operators, rerun discovery; accept if equal-or-better OOD NMSE with ≥20% shorter median expressions, and let Garrett bless/rename discovered operators as publishable GSE IP.
