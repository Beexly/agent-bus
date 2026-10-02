# arxiv-program/research/2026-09-21/arxiv-deep/1678-linear-pool-entropy-disagreement.md
## What it is (1-2 sentences)
Deep read of arXiv:2412.09430 (Krüger 2024) — exact identities for the linear pool of distributional forecasts: pool entropy = average component entropy + disagreement term D ≥ 0 for all kernel scores, D equals the realized pooling gain over the average component score (Prop 5.1), and the linear pool is the maximally-central combination under any kernel score (Prop 7.1). Ledger verdict: ADAPT — gives GSE a computable ensemble-diversity metric and the theoretical defense of linear pooling.

## Key metrics/methods (formulas where given, else "not specified")
- Prop 3.1 (eq. 4): E_{F^ω}[S(F^ω,X)] = Σᵢωᵢ·d(F^ω,Fⁱ) [D = disagreement] + Σᵢωᵢ·E_{Fⁱ}[S(Fⁱ,X)] [avg component entropy], any proper S; for kernel scores D = ½E_{F^ω}[L(X,X̃)] − ½ΣᵢωᵢE_{Fⁱ}[L(X,X̃)] (eq. 6).
- Prop 5.1: S_L(F^ω,y) = ΣᵢωᵢS_L(Fⁱ,y) − D — pool beats average component score by exactly D.
- Prop 7.1: linear pool minimizes D_gen(h)=Σᵢωᵢd(h,Fⁱ) over probability vectors h = most central combination (finite outcome space); under log-score the central pool is the log pool, not linear.
- Table 2: squared error D = Σᵢωᵢ(μ^ω−μⁱ)²; Brier = weighted mean squared prob deviations; CRPS/energy = energy-statistic forms.
- Implementable from draws: for energy score L(x,y)=‖x−y‖, D = ½·(mean pairwise distance within pooled draws) − ½Σᵢωᵢ·(mean pairwise distance within component-i draws).
- Caveat: log score is NOT a kernel score (excluded from centrality result); D measures gain over average component, not the best.

## Data sources named
- NY Fed Survey of Consumer Expectations inflation-range probabilities (illustrative; R replication code at gitlab.kit.edu/fabian.krueger/kernel_pool_replication).
- BVAR forecasts of US inflation (illustrative).
- GSE test: weekly CRPS/energy-score D on the component ensemble; verify Prop 5.1 identity empirically (realized energy score of pool ≈ avg component energy − D within tolerance).

## Findings (numbers and facts, not vibes)
- SCE illustration: RPS-based disagreement D correlates 0.86 with pool variance and 0.68 with pool ERPS.
- Propositions are exact identities (no estimation) — the empirical role is illustration only.
- Tension noted: high D → more pessimistic self-assessed entropy (eq. 6) but better realized score (Prop 5.1) — calibration implication; monitor PIT histograms alongside D.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (ENSEMBLE DESIGN): weekly ensemble-health monitor (D collapse = pooling adds nothing) and component-selection criterion (prefer new models that increase D at fixed skill); pairs with weight-optimization machinery (Allen et al. 2024) and ledgers 1672–1674, 1677.

## Engine-actionable? (yes/no + one-line what)
Yes — compute weekly energy-score D across component models as the ensemble health/diversity metric and gate new components on ΔD predicting pooled-score improvement.
