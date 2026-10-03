# arxiv-program/research/2026-09-21/arxiv-deep/0820-risk-constrained-kelly-gambling.md
## What it is (1-2 sentences)
Deep read of Busseti, Ryu & Boyd (2016, arXiv:1603.06183): Risk-Constrained Kelly — a convex reformulation of Kelly gambling adding a hard drawdown-probability constraint P(W_min < α) < β via a sufficient convex bound, plus a quadratic (Markowitz-like) approximation. Verdict in file: ADAPT — gives GSE a principled fractional-Kelly dial: maximize log-growth subject to a hard bankroll-drawdown guarantee.
## Key metrics/methods (formulas where given, else "not specified")
- Drawdown bound (Eq. 6): E[(r'b)^{−λ}] ≤ 1 ⟹ P(W_min < α) < β, with λ = logβ/logα — proved via stopping time τ = inf{t : w_t < α} and a martingale/change-of-measure argument.
- RCK (Eq. 7): max_b E[log(r'b)] s.t. 1'b=1, b≥0, E[(r'b)^{−λ}] ≤ 1 — convex (objective concave, constraint convex); λ→0 recovers unconstrained Kelly.
- QRCK: quadratic Taylor approximation around b=e_n → Markowitz-like mean-variance, λ as risk-aversion knob.
- Wealth: w_t = w_{t−1}(r_t'b); b fixed across rounds, i.i.d. rounds assumed.
## Data sources named
None real — synthetic: (a) n=20 bets (19 risky + cash), K=100 outcomes, returns uniform[0.7,1.3] with 0.2/2.0 spikes; (b) infinite-outcome example; 10,000 Monte Carlo trajectories × 100 rounds.
## Findings (numbers and facts, not vibes)
- Table 1 (α=0.7, β=0.1): Kelly — growth 0.062, realized drawdown risk 0.397 (40% chance of 30% drawdown); RCK λ=6.456 — growth 0.043, bound 0.100, realized 0.073; RCK λ=5.5 — growth 0.047, bound 0.141, realized 0.099; true constrained optimum growth ∈ [0.047, 0.062].
- QRCK: at matched 10% risk, RCK growth 0.047 > QRCK 0.044 — exact convex form beats the quadratic approximation.
- Bound tightness: "typically around 30% or so higher than the actual risk" (Figure 2).
- Limitations: synthetic only; sufficient-not-necessary constraint leaves growth on the table; fixed-fraction i.i.d. rounds don't match correlated slates; λ needs a calibration loop.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: replaces heuristic fractional Kelly with a derived-from-drawdown-guarantee staking rule — the guarantee is auditable (realized drawdown frequency ≤ β checkable on the picks DB); connects to the sizing lane and the drawdown-risk ledgers 0817/0818.
## Engine-actionable? (yes/no + one-line what)
yes — solve per-pick binary-outcome RCK (λ = logβ/logα, e.g. α=0.7, β=0.05) on the picks DB walk-forward; adopt if it achieves ≥90% of half-Kelly's log-growth while realized drawdown frequency stays ≤ β on the 2025 holdout.
