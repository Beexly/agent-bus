# arxiv-program/research/2026-09-21/arxiv-deep/1224-adaptive-strategies-in-kellys-horse-races-model.md
## What it is (1-2 sentences)
Deep-research ledger on Despons, Peliti & Lacoste (2022) arXiv:2201.03387v2, "Adaptive strategies in Kelly's horse races model": it quantifies the cost of learning unknown win probabilities online under Kelly betting — cumulative regret grows logarithmically — plus learning time, bookmaker-odds priors, Markov/correlated races, and an exact equivalence between Cover's universal portfolio and the Laplace estimator. Verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Laplace strategy: b_x^{LAPL,t+1} = (n_x^t+1)/(t+M).
- Cumulative regret: ⟨Δ(t)⟩ ≈ ⟨Δ(t₀)⟩ + (M−1)/2 · log(t/(t₀+1)); per-race KL gap ≈ (M−1)/(2t) (CLT regime, requires t > min_x p_x^{−1}).
- Regret = cumulative KL divergence of the estimate: D_KL(p‖b^{LAPL,t}) = ⟨log p_x − log b_x^{LAPL,t}⟩.
- Mean log-capital: ⟨log C_t⟩ ≈ D_KL(p‖r)·t − (M−1)/2·log(t/(t₀+1)) − ⟨Δ(t₀)⟩ (Kelly growth rate minus logarithmic learning penalty).
- Learning time: t⋆ = (M−1)/(2·D_KL(p‖r)) — races until cumulative learning loss equals one race of Kelly edge.
- Bookmaker-odds prior (modified Laplace, conjugate prior with pseudo-count τ): asymptotically identical rate (M−1)/(2t); "in the long run the information contained in the prior becomes negligible" — prior reduces short-term loss only.
- Exact result: Cover's universal portfolio ≡ Laplace estimate (Dirichlet integration, no asymptotics).
- Correlated races: Markov order-1 regret ≈ M(M−1)/2·log t; memory-n: M^n(M−1)/2·log t — exponential blowup in memory length.
- GSE implementation spec: (1) shrink model probabilities toward market-implied probabilities, p̂ = (n·p_model + τ·p_market)/(n + τ), τ tuned, larger τ early season decaying as n grows; (2) gate full-Kelly staking on t > t⋆, fractional Kelly (¼) before; (3) inflate penalty for correlated outcomes (SGPs/correlated props), treating effective M as larger.
## Data sources named
No real data. Python simulations: Figure 3 averages 200 realizations for M=10 horses with bookmaker margin ε=0.1; correlated-race simulations for the Markov case. Reproducible test target: fit cumulative regret to a·log t + b with a ≈ 4.5 = (M−1)/2, tolerance |a − 4.5| ≤ 0.5, mean log-capital tracking D_KL(p‖r)·t − 4.5·log t for t ≥ 1,000.
## Findings (numbers and facts, not vibes)
- Per-race learning penalty (M−1)/(2t); cumulative regret logarithmic with (M−1)/2 coefficient, verified by simulation (200 realizations, M=10, ε=0.1).
- Bookmaker-odds prior: short-term gain only, zero asymptotic effect (Eq. 40).
- Universal portfolio reduces exactly to the Laplace estimator in this model (Eq. 44).
- Markov/memory-n correlated races multiply the penalty (M^n scaling) — directly relevant to correlated prop/SGP staking.
- Limitations: assumes fixed true p and fixed odds (no non-stationarity, no odds movement); CLT regime fails for longshots early; no fractional Kelly or bankroll constraints.
- Related GSE reads: 0171 (estimation error in staking), 0276 (KellyBench sequential benchmark), Wave-3 2508.18868 (Kelly under estimation risk), 2607.09505 (KL growth-gap identities).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: staking/estimation-error theory — Kelly burn-in gating, market-prior shrinkage schedule, correlated-outcome penalty inflation. No QB/coaching/OL/scheme/trust-signal content.
## Engine-actionable? (yes/no + one-line what)
yes — add Kelly burn-in gate (t > t⋆ before full Kelly) plus market-prior shrinkage p̂ = (n·p_model + τ·p_market)/(n+τ) with τ decaying over the season, and inflate evidence requirements for correlated props/SGPs.
