# arxiv-program/research/2026-09-21/arxiv-deep/1180-prior-agnostic-robust-forecast-aggregation.md
## What it is (1-2 sentences)
Deep read of Chen, Peng & Tang (2026, arXiv:2604.24517v2) on prior-agnostic minimax forecast aggregation of two experts under squared loss. Verdict in file: ADAPT — a closed-form binary combiner with certified near-minimax regret, directly usable in the engine's ensemble.

## Key metrics/methods (formulas where given, else "not specified")
- Aggregator (verbatim): `logit(f_α(x_1,x_2)) = α·logit(x_1) + α·logit(x_2)` — symmetric log-odds averaging with shrinkage α < 1 (dampening/extremizing correction).
- Known-marginals variant: same rule but subtracts `γ·logit(μ)` where μ = known marginal mean forecast (base-rate correction).
- Constants by information-structure regime:
  - Conditionally independent signals: α = 0.585, worst-case regret 0.025512, vs analytic lower bound 31/1326 ≈ 0.023379 (gap ≈ 0.0021).
  - Known {0,1} state: α = 0.5168, regret 0.022599.
  - Blackwell-ordered: exact minimax ≈ 0.022542 (attained near same family).
  - Unrestricted (adversarially correlated experts): exact minimax 0.25 — aggregation provably hopeless.
  - Known marginals: α = 0.656089, γ = 0.498268, regret 0.022763.
- Practical rule of thumb supported: α ≈ 0.5–0.6 log-odds dampening is near-minimax across all tractable regimes.
- Numerical protocol: heuristic global search over information structures + grid refinement at 10^-5; paper flags claims as numerical, not analytic, certificates.
- GSE acceptance gate proposed in file: ADOPT pair combiner if it beats simple average (α=1) by ≥0.002 Brier on 2025 walk-forward (DM p<0.05) with no log-loss regression; ADOPT marginal-corrected variant if it additionally beats plain α=0.585 rule by ≥0.001 Brier.

## Data sources named
None — pure theory/numerical paper, no real data. References ledgers 1174/1175/1177/1178/1179 (aggregation workstream), the repo's market-microstructure lane, and paper 1211.4000 as conceptual relatives.

## Findings (numbers and facts, not vibes)
- Two-expert minimax aggregation under squared loss with unknown prior is solvable to near-optimality with a single tuned constant, not a learned model: α=0.585 yields worst-case regret 0.025512, within ~0.0021 of the 0.023379 lower bound.
- The floor is remarkably consistent across regimes: 0.023379 (CI lower bound), 0.022599 (known state), 0.022542 (Blackwell-ordered), 0.022763 (known marginals) — the worst-case regret floor for combining two binary forecasts under squared loss is ~0.0225–0.0255 regardless of structure.
- When experts can be adversarially correlated, the exact minimax regret is 0.25 — a hard impossibility benchmark meaning no combiner guarantees better than regret 1/4.
- The known-marginals extension (α=0.656089, γ=0.498268, subtracting γ·logit(μ)) is the minimax-theoretic analogue of GSE's market-relative modeling: de-vigged consensus as base rate with a multiplicative correction — derived from theory, not heuristics.
- The rule is two lines of code; generalization to n experts proposed heuristically: round-robin pairwise f_α over all components, then average pairwise outputs.
- Limitations: two experts only (n-expert extension is heuristic, no theory); regrets are numerical (optimization-error caveats acknowledged by authors); squared loss only — log-loss/Kelly-relevant case untouched; no real-data validation.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER — calibration/sizing + aggregation program) The α=0.585 dampened log-odds combiner is a direct challenger to the engine's current ensemble combiner: it fuses two model components with a minimax-certified shrinkage constant, replacing ad-hoc weighting. Serves the forecast-aggregation / ensemble workstream (ledgers 1174/1175/1177/1178/1179) as its simplest deployable member.
- (OTHER — trust-target intake / market-relative modeling) The known-marginals variant with γ·logit(μ) correction gives a theory-derived way to fold de-vigged market consensus in as a base rate: μ = market consensus, γ=0.498268, α=0.656089. This should be tested head-to-head against GSE's current heuristic market adjustment — it is the same move derived from minimax theory.
- (OTHER — improvement direction) The file proposes fitting α empirically on GSE data rather than using 0.585, and deriving a correlation-adjusted α as a decreasing function of component forecast correlation — converts the worst-case constant into a data-adaptive combiner, serving the calibration program.
- UNCERTAIN: the transfer of the 0.585 constant to real correlated model panels is explicitly untested (the paper's CI analysis excludes correlation); the file's own gate requires a real backtest before adoption.

## Engine-actionable? (yes/no + one-line what)
Yes — implement f_α with α=0.585 as a two-line challenger combiner for the two strongest engine components, and the marginal-corrected variant (α=0.656089, γ=0.498268, μ = de-vigged market consensus) as a market-aware challenger; backtest walk-forward on 2025 picks vs current combiner and simple average with the ≥0.002 Brier (DM p<0.05) adoption gate.
