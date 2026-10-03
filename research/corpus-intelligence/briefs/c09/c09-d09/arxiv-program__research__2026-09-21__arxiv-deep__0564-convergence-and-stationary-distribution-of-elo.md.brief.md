# arxiv-program/research/2026-09-21/arxiv-deep/0564-convergence-and-stationary-distribution-of-elo.md
## What it is (1-2 sentences)
Deep-read note on Cortez & Tossounian (2025), arXiv:2410.09180: proves the Elo process (fixed N and K, no scaling limit) is a Markov chain with a unique stationary distribution π it converges to a.s. and in Wasserstein metrics, characterizing π's tails, support, and bias. File verdict is ADAPT — two engineering rules: equilibrium rating error scales as √K (K-factor responsiveness-vs-noise trade-off), and the transformed prediction b(rating-diff) is unbiased for the true win probability even though raw ratings are biased.
## Key metrics/methods (formulas where given, else "not specified")
- Update rule (Eq. 1): X^i ← X^i + K{S^{ij} − b(X^i−X^j)}, X^j ← X^j − K{S^{ij} − b(X^i−X^j)}.
- Expected-score model (Eq. 3): E[S^{ij}] = b(ρ^i−ρ^j), with b(x)=tanh(cx) (Eq. 2).
- Assumptions (A1)–(A5): X_0,ρ ∈ Z_N (zero-sum subspace); b odd, strictly increasing, L-Lipschitz with ℓ_M>0 on compact sets; E[S^{ij}]=b(ρ^i−ρ^j), σ^{ji}=−σ^{ij}; KL<1; supp(σ^{ij})⊇{−1,1} (upsets possible both ways).
- Main bound (Theorem 16/1(vii)): E[(1/N)|X−ρ|_1] ≤ ((N−1)/N)·√(8K/ℓ_η) for X∼π and K ≤ ℓ_η/2, η = 1+2max_i|ρ^i| — i.e., C√K with C independent of K.
- Coupling inequality (Lemma 5, Eq. 7) and Lyapunov drift (Lemma 7, Eqs. 8–9): V_a(x)=Σ_i cosh(a(x^i−ρ^i)) giving exponential moments.
- Proposition 12: E[b(2X)] = b(2ρ) — the transformed prediction is an unbiased estimator of the true win-probability transform.
## Data sources named
No real data. Four Monte Carlo experiments, all N=2 players, b(x)=tanh(0.5x), binary scores {−1,1}: (4.1) density of X¹ for 5 values of ρ¹∈[0,1], K=0.4, 5×10⁷ samples/curve; (4.2) density for 5 values of K∈[0.02,1.2], ρ¹=0, 5×10⁷ samples/curve; (4.3) E[X¹] vs ρ¹ over 101 ρ¹∈[−1,1], K=1, 5×10⁵ samples/point; (4.4) E[|X¹−ρ¹|] over 100 logarithmically spaced K∈[10⁻³,1], ρ¹=0.5, 5×10⁴ samples/point. No code repository listed.
## Findings (numbers and facts, not vibes)
- Theorem 1 (eight claims): bounded moments of all orders + bounded exponential moment; natural coupling makes ‖X_t−Y_t‖ non-increasing a.s. → 0; unique stationary π; finite exponential moment; weak convergence L(X_t)→π; W_p convergence; E[(1/N)|X−ρ|_1] ≤ C√K for small K (C independent of N,K); supp(π)=Z_N (full support, unbounded).
- E[X¹]≠ρ¹ for ρ¹≠0 (ratings overestimate positive skill, underestimate negative — bias direction observed for K=1), while E[b(2X¹)] lands exactly on the diagonal b(2ρ¹).
- E[|X¹−ρ¹|] fits C√K tightly for K≪1/L and grows linearly away from 0 — the √K law is small-K only.
- As K grows (K up to 1.2 with L=0.5) the spread comes from the emergence of two bumps rather than a single widening bump, and curves become progressively rougher (density existence/smoothness is an open problem).
- Computing the actual bias E[X]−ρ remains open (listed as future work); no convergence rate in t is proved for the unbounded process.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Rigorous error-scaling and bias structure for Elo-type team-strength ratings — direct overlap with GSE's dynamic Elo ratings; sits next to the existing "Elo/Glicko/TrueSkill" cluster as theory, not a competing rating variant (file §10).
- OTHER: Gives a principled calibration policy — when win-probability diagnostics and raw rating levels disagree, trust the probabilities (the "systematically biased-looking rating, well-calibrated probabilities" regime is theoretically expected, not a bug).
## Engine-actionable? (yes/no + one-line what)
yes — Formalize the in-season K-factor choice as an explicit √K error budget (halve steady-state rating error by cutting K 4×), monitor rolling rating dispersion ≈ Ĉ√K for structural breaks, and adopt the "trust probabilities over raw ratings" calibration policy — ~3 days of parameter sweeps on the existing Elo pipeline, no new model.
