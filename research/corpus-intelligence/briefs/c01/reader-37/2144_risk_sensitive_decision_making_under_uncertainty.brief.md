# arxiv-program/research/2026-09-21/arxiv-deep/2144-risk-sensitive-decision-making-under-uncertainty.md
## What it is (1-2 sentences)
A full research ledger on "On Risk-Sensitive Decision Making Under Uncertainty" (arXiv:2404.13371, Hsieh & Wong 2024): a variance-penalized Kelly objective U_n^ρ(K) with a single risk-aversion knob ρ, with KKT necessary-optimality conditions giving the sizing formula. Verdict: ADAPT — directly implementable as GSE's stake-sizing rule; first actual Kelly-family paper read for GSE (repo mentions Kelly 12×, zero papers read before).

## Key metrics/methods (formulas where given, else "not specified")
- Objective: U_n^ρ(K;X) = (1/n) E[log(V(n,K)/V_0)] − (ρ/(2n²)) var(log(V(n,K)/V_0)), ρ ≥ 0; stages k=0…N−1; feedback gain K_i(k) ∈ [0,1] fraction of account; unit-simplex constraint K_i ≥ 0, ΣK_i = 1; account dynamics V(n) = ⟨K, R_n⟩ V_0; X(k) i.i.d., bounded, arbitrarily correlated components.
- Lemma 3.2 optimality: E[R_{n,i}/⟨K*,R_n⟩] − (ρ/n)E[log⟨K*,R_n⟩·R_{n,i}/⟨K*,R_n⟩] + (ρ/n)E[log⟨K*,R_n⟩]E[R_{n,i}/⟨K*,R_n⟩] = 1 if K*_i>0; ≤1 if K*_i=0. Necessary in general; necessary AND sufficient when log-variance is convex (verified in both examples via second derivative ≥0).
- Betting example root equation: f(p,K_2,ρ) = −1 + 2p/(1+K*_2) − 2pρ log(1+K*_2)/(1+K*_2) + 2pρ(p log(1+K*_2)+(1−p) log(1−K*_2))/(1+K*_2) = 0; at ρ=0: K*_2 = 2(2p−1) = classical Kelly.
- Variance convexity check: ∂²v/∂K_2² = 16p(1−p)(2+K_2 log((2+K_2)/(2−K_2)))/(K_2²−4)² ≥ 0.

## Data sources named
No real datasets — two synthetic analytic illustrations only: (1) optimal betting: riskless X_1=0 w.p.1 vs risky X_2∈{−1/2,+1/2}, P(X_2=+1/2)=p∈(1/2,3/4); (2) retail inventory: K_1+K_2=1 of I_max=1000 units, demand X_2∼Uniform(−1, X_max), X_1=0 w.p.1, decision period n∈{1,5,10}.

## Findings (numbers and facts, not vibes)
- p=0.6: ρ=0 → K*_2=0.4 (Kelly); ρ=0.1 → K*_2≈0.3646; ρ=1 → K*_2≈0.2035 (falls "by around 0.2").
- p=0.75: ρ=0 → K*_2=1; ρ=1 → K*_2≈0.5643.
- K*_2 negatively affected by ρ, more sensitive to ρ as profit probability rises.
- Inventory (n=5, ρ=1/2): K*_1=1, K*_2=0 (full allocation to safe category).
- Limitations recorded: no empirical validation at all; assumes payoff distribution known exactly (estimation uncertainty in p not handled — the overbetting risk); i.i.d. fails for sports slates; simplex = fully invested, no cash, no leverage; no principled ρ-calibration procedure.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (bankroll/stake sizing): core sizing rule for GSE picks — complements ledgers 2142 (conformal bet/no-bet) and 2143 (two-layer risk): those govern whether to bet and hedge estimation risk; this gives the growth-vs-variance per-bet fraction. None duplicate each other.
- OTHER (revenue/ops): slate extension proposed — each week's picks as simplex alternatives, cash as deterministic alternative with r=0, payoffs correlated via historical pick-residual correlation.

## Engine-actionable? (yes/no + one-line what)
yes — GSE implementation spec included: per-game stake via 1-D root-find on f(p̂,K,ρ)=0 with payoff X∈{o−1,−1} (fractional-Kelly-like with calibrated ρ, not arbitrary 0.25/0.5); ρ grid-searched on [0,2] maximizing Calmar ratio on rolling backtest; single-game stake capped at 3% bankroll regardless of formula output; acceptance gate = Calmar_ρ-Kelly ≥ 1.10× best-baseline Calmar AND max-drawdown ≤ 0.90× full-Kelly AND CAGR ≥ fixed-fraction baseline on locked 2024–2025 window; improvement experiment proposes adaptive ρ_t = ρ_0 × (1 + κ·(DD_t/DD_max)) drawdown governor (beyond the paper).
