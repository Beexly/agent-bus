# arxiv-program/research/2026-09-21/arxiv-deep/1366-kelly-criterion-utility-function-stochastic-binary-games.md

**Ledger:** [1366] (arXiv:2502.16859v1) — **Verdict in file: ADAPT**

## What it is (1-2 sentences)
An analytical reformulation of the Kelly criterion for binary 1:1-payoff games through a utility function U(F,p) whose zero-crossing F* partitions bet fractions into a growth (submartingale) regime and a wealth-decay (supermartingale) regime, with explicit variance formulas and a fractional-Kelly treatment.

## Key metrics/methods (formulas where given, else "not specified")
- U(F,p) = p·log(1+F) + q·log(1−F) (eq. 3.17/4.3); Kelly fraction F_K = |p−q| = 2p−1 maximizes U.
- Zero-crossing F* defined by U(F*,p) = 0, solved numerically; regime partition: U>0 on [0,F*), U=0 at F*, U<0 on (F*,1] (Prop 3.9).
- Thm 4.1: for p>1/2, wealth process W(N) is a submartingale on (0,F*) (expected wealth grows), supermartingale on (F*,1] (expected wealth decays), martingale at F*.
- Growth–entropy identity: U(F_K,p) = log(2) − H(p,q) = log 2 + p·log p + q·log q (Lemma 3.5) — max growth rate equals the Shannon entropy deficit.
- Doob maximal inequality: P(max_{K≤N} W(K) ≥ λ) ≤ E[W(N)]/λ — a drawdown/run-up tail bound usable as a bankroll risk cap.
- Variance: VAR(W(N)) ≈ 2·|W(0)|²·N·p(1−p)·F²; at Kelly: VAR ≈ 2·|W(0)|²·N·p(1−p)·(2p−1)² (first-order, valid for small edges p≈0.51–0.52).
- Fractional Kelly F̄_K = f·F_K, f∈[1/2,1); example p=0.52 → F_K=0.04, (2/3)F_K≈0.0267.
- Assumptions: 1:1 payoff (not odds-adjusted); iid Bernoulli; fixed F; known p; no estimation error.

## Data sources named
No empirical data — analytical paper. Consistency plots only (p=0.52, W(0)=1000, Figs. 5–6: full Kelly grows faster but markedly more volatile than (2/3) Kelly).

## Findings (numbers and facts, not vibes)
- Formal proof that any stake above F* is provably wealth-decaying on average — a stronger statement than "above Kelly is suboptimal."
- Entropy-gap edge metric g_i = log(2) − H(p_i,q_i): higher entropy deficit = more growth from genuine information rather than odds structure; usable as a tiebreaker among same-Kelly-fraction picks.
- File's spec: generalize the zero-crossing to decimal odds o by solving p·log(1+(o−1)F) + q·log(1−F) = 0 numerically per pick, store F*_i, and enforce posted fraction ≤ F*_i as a hard invariant with a violation alert.
- Variance formulas are first-order only; estimation error (the dominant real-world issue) is not treated.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the F* hard ceiling is a provable safety invariant on posted stakes — a trust-bearing guarantee ("the engine can never recommend a mathematically wealth-decaying stake") for the public pick surface.
- OTHER (staking/risk): growth–entropy identity gives an information-theoretic edge metric distinct from raw Kelly fraction; Doob bound supplies a pre-deployment drawdown alarm.

## Engine-actionable? (yes/no + one-line what)
Yes — compute the decimal-odds F* zero-crossing per pick and enforce it as a hard staking ceiling (any recommendation above F* is a logged bug); test the entropy-gap metric as a pick tiebreaker.
