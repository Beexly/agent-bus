# docs/arxiv-program/research/2026-09-21/arxiv-deep/1075-vector-quantile-regression-misspecification.md
## What it is (1-2 sentences)
Ledger of arXiv:1610.06833 (Carlier, Chernozhukov, Galichon 2016), "Vector quantile regression beyond correct specification." Pure optimal-transport theory of vector quantile regression under misspecification; verdict REJECT, no experiments, no numbers.
## Key metrics/methods (formulas where given, else "not specified")
- VQR primal (3.1): max{E(V·Y) : Law(V)=μ, E(X|V)=E(X)} — correlation maximization with mean-independence constraint, μ=uniform([0,1]^d), solved by Brenier map Y=∇φ(U).
- Dual (3.2): inf_{(ψ,φ,b)} E(ψ(X,Y)+φ(U)) s.t. ψ(x,y)+φ(t)+b(t)·x ≥ t·y pointwise.
- Theorem 3.3: under misspecification Y ∈ ∂Φ_X^{**}(U) a.s. (solution lives on the contact set of Φ_x with its convex envelope).
- Univariate specialization: Theorem 4.9 — mean-independence correlation maximization equals the Koenker–Bassett check-function program with added global constraint t↦U_t nonincreasing (t-grid monotonicity).
- Lemma 4.10: sup_{v∈C}∫₀¹v(t)q(t)dt=max_t Q(t), Q(t)=∫₀ᵗq(s)ds.
## Data sources named
None. No datasets, no simulations, no empirical evaluation of any kind (mathematical-statistics paper: existence proofs, representation theorems, duality).
## Findings (numbers and facts, not vibes)
- [OTHER] Paper contains zero numbers: ledger's numeric gate is 0 (count of experiments, datasets, reported numbers). No tables or figures with results.
- [OTHER] Theorem 4.9 (univariate-only): adding the t-monotonicity constraint to the Koenker–Bassett program makes it equivalent to the mean-independence correlation-maximization problem — i.e., monotone t-grid prevents quantile crossing within this theory.
- [TRUST-SIGNAL] The ledger notes the mean-independence constraint is strictly weaker than full independence, so the estimated "quantiles" need not be conditional quantiles at all — this is the paper's own honest point, and it limits operational use.
- [OTHER] The multivariate case admits no analogous monotonicity-repair: Theorem 4.9 is univariate-only.
- [OTHER] The ledger verdict: the single operationally adjacent observation (t-grid monotonicity to avoid quantile crossing) is well-known folklore with cheaper remedies (post-hoc quantile sorting; Chernozhukov–Fernández-Val–Galichon 2009/2010 rearrangement). Replacement chain completed: 1610 REJECT → 2207 reserve REJECT → 2401 ADAPT (2401.16392v3).
## Engine-actionable? (no — REJECT; one-line fallback: enforce t-monotonicity across the quantile grid via post-hoc sorting, a one-line post-processing step, not an adaptation of this paper)
