# arxiv-program/research/2026-09-21/arxiv-deep/1224-adaptive-strategies-in-kellys-horse-races-model.md
## What it is (1-2 sentences)
Ledger for Despons, Peliti & Lacoste (2022) "Adaptive strategies in Kelly's horse races model" (arXiv:2201.03387v2) — exact quantification of the learning cost when Kelly win probabilities are unknown and learned online via Laplace smoothing, with logarithmic cumulative regret, a learning-time formula, and correlated-race extensions. Verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Laplace strategy: b_x^{LAPL,t+1} = (n_x^t+1)/(t+M).
- Regret: ⟨Δ(t)⟩ ≈ ⟨Δ(t₀)⟩ + (M−1)/2·log(t/(t₀+1)); per-race KL gap ≈ (M−1)/(2t) (CLT derivation, valid for t > min_x p_x^{−1}).
- Mean log-capital: ⟨log C_t⟩ ≈ D_KL(p‖r)·t − (M−1)/2·log(t/(t₀+1)) − ⟨Δ(t₀)⟩.
- Learning time: t⋆ = (M−1)/(2·D_KL(p‖r)) — races needed for cumulative learning loss to equal one race of Kelly edge.
- Correlated (Markov order-1): M(M−1)/2·log t; memory-n: M^n(M−1)/2·log t (exponential blowup in memory length).
- Cover's universal portfolio ≡ Laplace estimate exactly (b_x^{PORTF,t+1} = (n_x^t+1)/(t+M)); bookmaker-odds prior reduces short-term loss only, zero asymptotic effect.
## Data sources named
None real — Python simulations: Fig. 3 averages 200 realizations, M=10 horses, bookmaker margin ε=0.1; Markov-race simulations in appendices.
## Findings (numbers and facts, not vibes)
- Simulated regret/log-capital match (M−1)/2·log t predictions at M=10, ε=0.1 over 200 realizations; modified-Laplace prior reduces early losses, converges to same asymptote.
- Prior from bookmaker odds: short-term gain only, asymptotically negligible — "the information contained in the prior becomes negligible with respect to the information contained in the likelihood."
- Memory-n correlated races blow up learning cost as M^n — a principled reason to require proportionally more evidence for correlated outcomes (SGPs, correlated props).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — estimation-error discipline: shrink model probabilities toward market-implied probabilities early (Laplace/bookmaker-prior); gate full-Kelly staking on t > t⋆; inflate evidence requirements for correlated outcomes.
- OTHER — sequential estimation theory; companions ledger 0276 (KellyBench) and wave-3 2508.18868 (Kelly under estimation risk).
## Engine-actionable? (yes/no + one-line what)
Yes — implement market-shrunk probability estimates p̂ = (n·p_model + τ·p_market)/(n+τ) and a Kelly burn-in gate (fractional ¼ before t⋆ = (M−1)/(2·D_KL(p̂‖r))), with a decaying τ schedule tuned on validation folds.
