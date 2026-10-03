# arxiv-program/research/2026-09-21/arxiv-deep/1366-kelly-criterion-utility-function-stochastic-binary-games.md
## What it is (1-2 sentences)
Ledger note for arXiv:2502.16859v1 (Miller, 2025), a proof-based reformulation of the Kelly criterion for binary double-or-nothing games that partitions the bet-fraction domain into growth (submartingale) vs wealth-decay (supermartingale) regimes around a formal zero-crossing boundary F*. Verdict: ADAPT — the F* ceiling and the growth/entropy identity are new relative to GSE's Kelly lanes (ledgers 0813, 0171, 1200).

## Key metrics/methods (formulas where given, else "not specified")
Set-up: N Bernoulli trials, Z(I) ∈ {−1,+1}, P(win)=p; wealth W(N) = W(0)·∏(1+F·Z(I)), 1:1 payoff.
- Utility: U(F,p) = E[log(W(N)/W(0))^{1/N}] = **p·log(1+F) + q·log(1−F)** (eq. 3.17/4.3).
- **Kelly fraction: F_K = |p−q| = 2p−1** (Thm 3.4, eqs. 3.18–3.21).
- **Growth–entropy identity: U(F_K,p) = log(2) − H(p,q) = log 2 + p·log p + q·log q** (Lemma 3.5, eq. 3.22) — max growth rate equals the Shannon entropy deficit.
- **Zero-crossing F\***: U(F*,p)=0 (eq. 3.24–3.25), solved numerically. Regime partition: U>0 on [0,F*), U=0 at F*, U<0 on (F*,1] (Prop 3.9); U→−∞ as F→1 (Cor 3.8).
- **Thm 4.1**: for p>1/2, W(N) is a *submartingale* on (0,F*), a *supermartingale* on (F*,1] (wealth decays on average), martingale at F*.
- **Doob maximal inequality: P(max_{K≤N} W(K) ≥ λ) ≤ E[W(N)]/λ** (Lemma 4.7) — bankroll run-up/drawdown tail bound.
- **Variance: VAR(W(N)) ≈ 2·|W(0)|²·N·p(1−p)·F²** (Prop 5.2, eq. 5.14); at Kelly: **VAR ≈ 2·|W(0)|²·N·p(1−p)·(2p−1)²** (Cor 5.3, eq. 5.15).
- **Fractional Kelly: F̄_K = f·F_K**, f ∈ [1/2,1) (Prop 6.1); worked example p=0.52 → F_K=0.04, (2/3)F_K = 2/75 ≈ 0.0267 — growth drops but volatility drops faster (Figs. 5–6).
- Assumptions: 1:1 payoff (not odds-adjusted), iid trials, fixed F, known p; variance approximations valid only for small edges (p≈0.51–0.52).

## Data sources named
None — pure analytical paper. Sanity plots for p=0.52, W(0)=1000 comparing full vs (2/3) fractional Kelly; Appendix A verifies variance formulas via binomial MGFs. No empirical backtest.

## Findings (numbers and facts, not vibes)
- For p=0.52 with W(0)=1000: full Kelly F_K=0.04 grows E[W(N)] faster than (2/3)F_K but with markedly higher volatility.
- U(F_K,p)=0 at p=1/2 (Cor 3.6): no growth without edge.
- Thm 4.1 part (3) is mislabeled in the text (states "F ∈ (F*,1)" where the boundary point F=F* is meant).
- Paper self-describes as "autodidactic": Thm 3.4 and the entropy identity restate known results; the genuinely new formal material is the regime partition (Thm 4.1) plus the Doob/variance machinery.
- Estimation error in p (the dominant real-world issue) is not treated.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: bankroll/staking intelligence — the F* zero-crossing gives a hard, provable overbetting ceiling (stakes above F* are *wealth-decaying*, a stronger claim than "above Kelly is suboptimal") that GSE's current Kelly protocol does not compute.
- OTHER: the entropy-gap metric g_i = log(2) − H(p_i,q_i) is a candidate information-theoretic edge metric / tiebreaker for same-Kelly-fraction picks.
- OTHER: the Doob inequality yields a principled drawdown-alarm gate for bankroll risk.
- No QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, or SCHEME content.

## Engine-actionable? (yes/no + one-line what)
Yes — generalize the F* zero-crossing to decimal odds (solve p·log(1+(o−1)F)+q·log(1−F)=0 numerically), store F*_i per pick in the sizing module, and enforce posted fraction ≤ F*_i as a logged invariant, per the ledger's implementation spec; backtest on 2024–2025 NFL picks with the acceptance gate of zero F* violations and zero Doob-bound violations.
