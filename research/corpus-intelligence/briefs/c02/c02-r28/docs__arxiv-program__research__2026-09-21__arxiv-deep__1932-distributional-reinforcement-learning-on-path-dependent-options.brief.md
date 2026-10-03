# docs/arxiv-program/research/2026-09-21/arxiv-deep/1932-distributional-reinforcement-learning-on-path-dependent-options.md

## What it is (1-2 sentences)
Theory-only paper (arXiv:2507.12657, 2025) reframing path-dependent derivative pricing (e.g., Asian options, payoff = function of the running average) as distributional RL: learning the full conditional payoff distribution via recursive quantile updates with RBF-based quantile function approximation, with contraction/stability proofs.

## Key metrics/methods (formulas where given, else "not specified")
- Distributional Bellman recursion on probability measures for path-dependent payoffs; Asian payoff with running average as augmented Markovian state (state = spot price + running average; payoff = max(average − strike, 0))
- Contraction: distributional Bellman operator is a γ-contraction in Wasserstein metric — "errors in the learned distribution at one time step do not amplify through recursion"
- Quantile SGD: unbiased stochastic gradients of the pinball loss; quantile parameters converge to Bellman-operator fixed points under "standard regularity assumptions on the state space, function class, and sampling procedure"
- RBF feature expansions over the state space for conditional quantile approximation (claimed first use in DistRL option pricing); RBF smoothness enables gradient-based model-parameter calibration "without relying on expectation-based loss"
- Caveat (authors): "minimizing the Wasserstein distance alone may not suffice to evaluate the practical adequacy of the learned value distributions for option pricing, as it does not directly reflect financially critical aspects such as tail behavior or extreme quantile accuracy"

## Data sources named
No empirical dataset — the paper is theoretical/methodological. Running example is arithmetic Asian call options. No code or data URL stated.

## Findings (numbers and facts, not vibes)
- [OTHER] No numerical results: no numerical experiments, tables, or benchmark comparisons in the paper — all claims are theoretical (contraction, convergence, unbiasedness).
- [OTHER] Fat-tailed jumps "shift the learned quantile estimates without requiring a re-specification of the parametric state transition" (theoretical claim).
- [OTHER] Author caveat: Wasserstein-distance adequacy does not capture tail behavior or extreme-quantile accuracy — directly relevant to GSE's drawdown use case.
- Limitation stated in file: RBF approximators scale poorly to high-dimensional state spaces (paper's state is 2-D); single-author 2025 paper, not peer-reviewed as far as stated; convergence claims untested on real data.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Season P&L as a running-sum path-dependent payoff: state = (bankroll, running season profit, weeks remaining), terminal "payoff" = season profit — OTHER
- Learned conditional quantile functions of season profit for weekly risk reporting: P(season profit < 0 | current state), CVaR of season profit — OTHER
- Calibration trick: gradient-fit RBF quantile functions to match market-implied quantiles (de-vigged season win-total markets) without expectation-based loss — OTHER

## Engine-actionable? (yes/no + one-line what)
no — Theory-only with zero empirical validation; borrow only the path-dependent-payoff framing (season profit = Asian-style running sum) and the RBF-quantile seasonal risk-reporting sketch, which must clear a quantile-ECE ≤ 0.05 gate on 2023–2024 data before any adoption.
