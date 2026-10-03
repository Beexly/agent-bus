# docs/arxiv-program/research/2026-09-21/arxiv-deep/2151-minimax-regret-robust-planning-uncertain-mdps.md

## What it is (1-2 sentences)
A framework for robust planning under model uncertainty (arXiv:2012.04626): instead of optimizing worst-case *expected value* (provably over-conservative), it optimizes worst-case *regret* — how far behind the best policy you could have been, in each plausible world — via a regret Bellman recursion, exact for independent uncertainties and tractable (via n-step "options") for coupled ones. Read verdict in the file: **ADAPT** — minimax regret is framed as the right robustness objective for GSE's public-pick problem (worst-case-profit says "bet nothing"; worst-case regret stays robust without degenerating).

## Key metrics/methods (formulas where given, else "not specified")
- Regret definition per MDP instantiation: reg(s_0,π) = V(s_0,π) − V(s_0,π*) (1); V(s,π) standard SSP Bellman with expected costs C̄(s,a).
- Regret Bellman equation (Prop. 1): recursion computing each action's exact contribution to regret by comparing against the *optimal value function in each sample* — the core innovation vs CEMR's myopic local-action comparison.
- DP algorithm for independent uncertainties (exactness claim later retracted — see Limitations); for coupled/dependent uncertainties, plan over *options* (n-step temporally extended actions) to capture dependence along option execution — trades computation for quality via option length n; stochastic option policies available.
- Objective: min_π max_{ξ∈samples} reg_ξ(π) over a finite sample set of MDP instantiations.
- Assumptions: SSP MDP (proper policies exist, improper → infinite cost); sample-based UMDP (finite set of MDP instantiations); independent uncertainties for exactness; options framework for coupled case.

## Data sources named
- Synthetic: disaster-rescue grid (8-connected, swamp/obstacle regions, 15 MDP samples per UMDP, 25 UMDPs per size).
- Real: (a) medical decision-making (Sharma et al. 2019): state = health {0..19} × day {0..6}, 3 treatments, 250 UMDPs × 15 samples; (b) underwater glider, Norwegian Sea: real Copernicus ocean-current forecasts May 1 2020, 12 hourly samples, 500m grid cells, 12 headings, shallow+strong-current penalty.
- Generalization test: 100 fresh samples per UMDP (glider: interpolated forecasts + 2% Gaussian noise). No code link extracted.

## Findings (numbers and facts, not vibes)
- **Medical (250 UMDPs, normalized max regret, lower better):** their method **0.391±0.03** vs next best 0.557±0.20; CEMR-style baselines 0.84–0.91; MILP timed out (>600s) on medical. Generalization: 0.574±0.12 vs 0.625–0.87.
- **Rescue/glider:** their method best or tied-best across sizes; performance improves with option length n, beating MILP at larger n; deterministic options with larger n preferred over stochastic (scalability).
- **CEMR (prior SOTA):** consistently poor — myopic regret approximation fails; improves only when retrofitted with the paper's options.
- **Speed:** their method 3.75–4.64s typical vs MILP 66.9–103s (where MILP finished at all).
- **Corrigendum:** the authors retracted the "exact for independent uncertainties" claim post-publication — the DP is a strong heuristic with empirical support, NOT an exact solver.
- Limitations noted by the reader: quality depends on the sample set covering the true uncertainty; SSP framing needs a goal/termination concept (mapping a betting season to SSP is a modeling stretch); options add hyperparameters (n, stochastic vs deterministic); no learning — the uncertainty set must come from elsewhere (pairs with 2150's RoBAS ambiguity set).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — decision theory / staking infrastructure: the robustness objective for weekly public picks and stake tiers under calibration uncertainty ("followers forgive losing weeks, not systematically cowardly ones").

## Engine-actionable? (yes/no + one-line what)
Yes — build a minimax-regret weekly stake-tier policy: sample K=15 "worlds" (bootstrap variants of the engine's calibration × 3 market regimes: normal, sharp-heavy, chaotic), each a mapping from (bankroll bucket × edge bucket) to expected weekly profit per stake tier; compute the policy minimizing max-world regret via the regret-Bellman DP (heuristic per corrigendum) with 2-step options; serve as a weekly lookup table with per-world regret contributions logged for audit. Pairs with 2150 (worlds = ambiguity set), 2149 (bankroll-bucket state space). Effort ~2 weeks. ACCEPT if on 2024–2025: realized worst-world regret ≤ 0.7× the maximin baseline's AND mean profit ≥ maximin's AND posted volume ≥ 80% of flat-1u; REJECT if worst-world regret isn't better than maximin's or volume collapses below 60% (then it's maximin in disguise). Improvement axis: plausibility-weighted minimax regret (weight worlds by recent predictive accuracy) vs pure minimax.
