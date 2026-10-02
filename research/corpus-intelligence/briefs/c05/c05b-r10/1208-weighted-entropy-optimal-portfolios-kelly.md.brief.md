# arxiv-program/research/2026-09-21/arxiv-deep/1208-weighted-entropy-optimal-portfolios-kelly.md
## What it is (1-2 sentences)
Ledger deep read of Kelbert, Stuhl & Suhov (2017, arXiv:1708.03813): weighted-entropy generalization of Kelly investment under a risk-averse no-ruin constraint. Verdict: ADAPT — gives state-dependent proportional Kelly fractions, a formal abstention/sit-out rule, and outcome weighting for high-value slates.
## Key metrics/methods (formulas where given, else "not specified")
- Objective: ES_n = EΣ ϕ(ε_{j−1},ε_j)·ln(Z_j/Z_{j−1}); stake recursion Z_j = Z_{j−1}(1 + C_{j−1}g/Z_{j−1}); strategy class: predictable (a0), sustainable 0≤C_j<Z_j (a1), no-ruin 1+C_j g/Z_j ≥ b (a2), weighted (q,g)-balance (a3).
- WE-balance equation: D(i)·Σ_l p(i,l)ϕ(i,l)g(i,l)/(1+D(i)g(i,l)) = 0; optimal stake C = D(i)Z with D^O(i) = positive root if feasible else 0.
- Binary Kelly: D^O = (p(1)−p(0))/γ if b≤p(0)≤p(1) and γ≥p(1)−p(0), else 0 (explicit sit-out rule).
- Two-state Markov: D^O(i) = (p(i,1)−p(i,0))/γ per current state i — regime-conditional Kelly fractions.
- Gaussian case: if Eϕ(ε₁)g(ε₁) ≤ 0 → D^O = 0 (cautious trader sits out); else D₀ capped by D₊ from no-ruin.
- Multi-asset: vector D, concave maximization ∇β(D⁰)=0 (eqs. 48–49); S_n − A_n is a supermartingale for cumulative weighted KL entropy A_n (Gibbs inequality, Theorem 1.1).
## Data sources named
None — theorem paper; worked examples: IID binary, two-state Markov chain, two-asset IID, uniform/Gaussian IID with piecewise-linear returns.
## Findings (numbers and facts, not vibes)
- D^O = 0 (sit out) is the modal recommendation when the outlook is unfavorable; the binary example quantifies exactly when.
- Proportional betting survives outcome weighting — the optimal strategy stays proportional under weighted log-growth.
- State-dependent D(i) per Markov regime is proven optimal; full-class optimality holds when D^O > 0 everywhere.
- No empirical numbers — all findings are proven theorems with closed-form examples; the (q,g)-balance condition is restrictive and the "no formal answer" case (D₀ > D₊) leaves the optimum unidentified under tight ruin constraints.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Formal abstention rule (D=0 when no positive balance solution) for the thin "pick selection/abstention" lane — OTHER
- State-dependent Kelly fractions (market regime × slate liquidity tier, or weather/injury flags) — OTHER
- Outcome weights ϕ to up-weight high-liquidity/high-confidence slates (ϕ ∝ expected CLV or playoff-week weight) — OTHER
- No-ruin floor b (e.g., b=0.8 → never risk >20% of bankroll on one slate's worst case); cap D(i) ≤ D₊ — TRUST-SIGNAL (risk guardrail)
- Pairs with ledger 0626's uncertainty treatment for the known-probability assumption gap — OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — implement per-state D(i) root-finding (1-D per state) with D=0 sit-outs, ϕ-weighted slates, and hard D₊ cap; backtest 2024–2025 NFL flat-fractional-Kelly vs. state-dependent Kelly with sit-out on ≥5% of historical slates (accept if log-bankroll growth ≥ flat with strictly fewer losing slates and no worse max drawdown).
