# arxiv-program/research/2026-09-21/arxiv-deep/1220-on-feedback-control-in-kelly-betting.md
## What it is (1-2 sentences)
"On Feedback Control in Kelly Betting: An Approximation Approach" (Hsieh 2020, arXiv:2004.14048) analyzes the Taylor-based Kelly approximation analytically: its best achievable performance, closed-form expected cumulative gain/loss and variance, when it violates no-bankruptcy, and a Jensen bound on its gap to the true optimum. Ledger verdict: ADAPT — never serve the Taylor closed form (1210 shows why), but adopt the survival-interval math as hard guardrails and the closed-form variance formulas for fast pre-trade risk estimates.
## Key metrics/methods (formulas where given, else "not specified")
- Approximation: E[log(1+KX)] ≈ K·E[X] − (1/2)K²·E[X²]; K*_approx = E[X]/E[X²] = μ/(μ²+σ²); Merton form K̃_approx = μ/σ².
- Survival (Lemma 1): V(k) > 0 for all k and all paths iff −1/Xmax < K < 1/|Xmin|; saturation K*_sat,s := SAT_s[K*_approx] clamps into [−1/Xmax, 1/|Xmin|].
- Theorem 2: K* = 1 iff E[1/(1+X(0))] ≤ 1; K* = −1 iff E[1/(1−X(0))] ≤ 1.
- Lemma 3: g(K*_approx) ≤ log(1 + μ²/(μ²+σ²)) ≤ log 2.
- Lemma 4: G_K(N) = ((1+Kμ)^N − 1)·V(0); Corollary 5: G_{K*_approx}(N) ≥ 0 for all N ≥ 1, non-decreasing in N.
- Lemma 7: var(G_K(N)) = ((μ_K²+σ_K²)^N − μ_K^{2N})·V²(0), μ_K = 1+Kμ, σ_K = Kσ.
- Lemma 8: var(log(V(N)/V(0))) = N·(E[log²(1+KX(0))] − g²(K)).
- Proposition 9: 0 ≤ g(K*) − g(K*_approx) ≤ log E[(1+K*X(0))/(1+K*_approx·X(0))].
- Assumptions: i.i.d. bounded returns, log utility.
## Data sources named
None — analytic proofs plus a worked coin-flip counterexample: X = −0.9 w.p. 0.05, X = 0.2 w.p. 0.95.
## Findings (numbers and facts, not vibes)
- Coin example: K*_approx ≈ 1.84, outside the survival interval (−5, 1.111); worst-case path gives V(1) = 1 + 1.84·(−0.9) ≈ −0.656 < 0 — single-stage ruin with probability 0.05.
- Lemma 3 bound is tight: with σ² = 0 and riskless rate r > 0, K*_approx = 1/r and g = log 2.
- GSE's `kelly-investigation.ts` currently computes exact single-bet Kelly — this paper governs what happens if GSE ever adds fast approximate sizing: the survival interval becomes a mandatory guardrail; the closed-form variance formulas (Lemmas 7–8) are new capability for pre-trade risk display.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Staking safety invariant: hard-clamp every served stake fraction into (−1/Xmax, 1/|Xmin|) — a pure safety net that should modify 0% of current production stakes (TRUST-SIGNAL — no-bankruptcy guarantee).
- Pre-trade risk display: Lemma 4/7/8 closed forms give expected cumulative gain and its std-dev without simulation (OTHER — internal staking dashboard).
## Engine-actionable? (yes/no + one-line what)
Yes — add a `survivalClamp` (SAT_s into the bet's worst-case-return interval) to the staking lib with a coin-example unit test, plus Lemma-7/8-based expected-gain/std-dev display, gated on the clamp modifying 0% of current production stakes and predicted-vs-realized std-dev agreement within 20%.
