# arxiv-program/research/2026-09-21/arxiv-deep/1179-robust-forecast-aggregation-via-additional.md
## What it is (1-2 sentences)
A theory paper asking what *additional queries* beyond single forecasts provably improve worst-case aggregation: *difference queries* (ask expert i for the difference between its forecast and a peer's) recover optimal Bayesian aggregation with only n queries, and the paper derives exact query-complexity scaling laws (error = 1 − d/n for budget d < n; √n phase transition under linear aggregation). Fully theoretical — no data, no experiments.
## Key metrics/methods (formulas where given, else "not specified")
- Partial-information model: n experts, independent mean-zero signals X_S indexed by expert subsets; target Y = Σ_S X_S
- Exact minimax worst-case error with query budget d<n: 1 − d/n
- Linear-aggregation regimes: d=o(√n) → error 1−Θ(d²/n); d=Θ(√n) → limit strictly in (0,1); d=ω(√n) → exponentially decaying bound
- Proof technique: reduction to constrained polynomial minimax via Chebyshev polynomials / equioscillation
- Assumes independent signals, truthful reporting, squared error; correlated-signal extension left open
## Data sources named
None (pure theory; no simulations, no real data)
## Findings (numbers and facts, not vibes)
- Difference queries recover optimal aggregation with only n queries — exponentially fewer than naive higher-order elicitation
- The √n phase transition and 1 − d/n exact bound are worst-case bounds in the independent-signal model, not measured gains
- Key limitation for GSE: everything hinges on independent signals; GSE's panel is heavily correlated (shared nflverse inputs)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: structured model interrogation — operationalize queries as offline per-game, per-component computations: base forecast + difference queries (forecast under perturbed inputs: key player out, line moved ±2) + conditional forecasts given other components' consensus; overlap diagnostic from difference-query covariance to prune redundant components; feed difference-query responses into the peer-expectation aggregator
## Engine-actionable? (yes/no + one-line what)
Yes — build the perturbation harness + overlap diagnostic (~1 week); gate: +0.003 walk-forward 2025 log-loss over base-forecast aggregation (DM p<0.05) AND ablation confirms flagged components are redundant (<0.001 log-loss change on removal); reject if interrogation compute >5× base inference without meeting (a).
