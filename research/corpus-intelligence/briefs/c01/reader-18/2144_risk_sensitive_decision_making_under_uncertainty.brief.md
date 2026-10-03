# arxiv-program/research/2026-09-21/arxiv-deep/2144-risk-sensitive-decision-making-under-uncertainty.md
## What it is (1-2 sentences)
A ledger (read 2026-09-22) on Hsieh & Wong 2024 "On Risk-Sensitive Decision Making Under Uncertainty" (arXiv:2404.13371): a variance-penalized Kelly objective balancing expected logarithmic growth against the variance of log growth, with KKT necessary-optimality conditions for the allocation vector and closed-form illustrations (optimal betting, retail inventory). Ledger verdict: ADAPT as GSE's stake-sizing rule with a single risk-aversion knob ρ (at ρ=0 it reduces exactly to classical Kelly).
## Key metrics/methods (formulas where given, else "not specified")
U_n^ρ(K;X) = (1/n) E[log(V(n,K)/V_0)] − (ρ/(2n²)) var(log(V(n,K)/V_0)) (Eq. 1), ρ≥0. KKT per-alternative score (Lemma 3.2): E[R_{n,i}/⟨K*,R_n⟩] − (ρ/n) E[log⟨K*,R_n⟩·R_{n,i}/⟨K*,R_n⟩] + (ρ/n) E[log⟨K*,R_n⟩] E[R_{n,i}/⟨K*,R_n⟩] = 1 if K_i*>0; ≤1 if K_i*=0. Betting example: f(p,K_2,ρ)=0; at ρ=0: K*_2 = 2(2p−1) = classical Kelly. Account dynamics V(n)=⟨K,R_n⟩V_0, simplex constraint K_i≥0, ΣK_i=1. Optimality necessary+sufficient only when log-variance is convex (verified for the two toy examples via ∂²v/∂K_2² ≥ 0).
## Data sources named
None — two synthetic/analytic illustrations only: (1) optimal betting: riskless X_1=0 vs risky X_2∈{−1/2,+1/2}, P(X_2=+1/2)=p∈(1/2,3/4); (2) retail inventory: two product categories, K_1+K_2=1 of I_max=1000 units, demand X_2∼Uniform(−1,X_max), decision periods n∈{1,5,10}. No code, no real data, no train/test, no competing baselines (only ρ=0 Kelly as reference).
## Findings (numbers and facts, not vibes)
- p=0.6: ρ=0 → K*_2=0.4 (Kelly); ρ=0.1 → ≈0.3646; ρ=1 → ≈0.2035.
- p=0.75: ρ=0 → K*_2=1.0; ρ=1 → ≈0.5643.
- K*_2 negatively affected by ρ and more sensitive to ρ as win probability rises.
- Inventory (n=5, ρ=1/2): K*_1=1, K*_2=0 (full allocation to safe category).
- First actual Kelly-family paper read for GSE (existing map line 141: Kelly mentioned 12× in repo, zero papers read); complements ledgers 2142 (conformal bet/no-bet) and 2143 (two-layer risk).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the paper assumes the payoff distribution is known exactly — for GSE, p is the estimated thing, and using it as a point estimate reintroduces the overbetting Kelly is infamous for; the paper offers no principled ρ calibration (answer with data: grid-search ρ∈[0,2] maximizing Calmar on rolling backtest). i.i.d. fails for correlated slates; simplex = fully invested, no cash — GSE needs a cap regardless (3% bankroll per game guardrail). No empirical validation at all — treat as sizing theory, not evidence.
- OTHER: bet sizing / bankroll engineering lane — per-game ρ-penalized Kelly via 1-D root-find on f(p̂,K,ρ)=0; slate extension via multi-alternative simplex form with cash as the deterministic alternative.
## Engine-actionable? (yes/no + one-line what)
yes — implement per-game stake rule: solve the paper's optimality equation numerically per pick (p̂ from engine, decimal odds o), calibrate ρ by grid search on 2022–2023 maximizing Calmar, lock, evaluate 2024–2025 vs fixed-unit / full-Kelly / fractional-0.25 baselines on CAGR, Sharpe, Calmar, max drawdown; accept if Calmar ≥1.10× best baseline AND drawdown ≤0.90× full-Kelly AND CAGR ≥ fixed-fraction baseline; ~1 week; not yet built.
