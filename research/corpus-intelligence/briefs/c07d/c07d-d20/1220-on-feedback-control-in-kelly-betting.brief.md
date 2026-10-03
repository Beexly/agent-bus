# arxiv-program/research/2026-09-21/arxiv-deep/1220-on-feedback-control-in-kelly-betting.md
## What it is (1-2 sentences)
Deep read of Hsieh (2020, arXiv:2004.14048), an analytical paper on the Taylor-based approximation to Kelly betting — its best achievable performance, closed-form expected cumulative gain/loss and variance, when it violates no-bankruptcy (survivability), and how far it can be from the true optimum. Verdict in file: ADAPT — never serve the Taylor closed form (ledger 1210 shows why), but adopt the survival-interval math as hard guardrails plus the closed-form gain/variance formulas for fast pre-trade risk estimates.

## Key metrics/methods (formulas where given, else "not specified")
- Approximation (verbatim): E[log(1+KX(0))] ≈ K·E[X(0)] − (1/2)·K²·E[X²(0)].
- Closed-form approximate optimum: K*_approx = E[X(0)]/E[X²(0)] = μ/(μ²+σ²); alternative Merton form K̃_approx = μ/σ².
- Survival (Lemma 1, verbatim): V(k) > 0 for all k and all paths iff −1/Xmax < K < 1/|Xmin|.
- Saturation: K*_sat,s := SAT_s[K*_approx], clamping into [−1/Xmax, 1/|Xmin|].
- Theorem 2 (cash-financed, K ∈ [−1,1], −1<Xmin<0<Xmax<1): K* = 1 iff E[1/(1+X(0))] ≤ 1; K* = −1 iff E[1/(1−X(0))] ≤ 1.
- Lemma 3: g(K*_approx) ≤ log(1 + μ²/(μ²+σ²)) ≤ log 2 (tight: with σ² = 0 and riskless rate r > 0, K*_approx = 1/r and g = log 2).
- Lemma 4: G_K(N) = ((1+Kμ)^N − 1)·V(0); at K*_approx: ((1+μ²/(μ²+σ²))^N − 1)·V(0).
- Corollary 5 / Theorem 6: G_{K*_approx}(N) ≥ 0 for all N ≥ 1 (> 0 if μ ≠ 0), non-decreasing in N.
- Lemma 7: var(G_K(N)) = ((μ_K²+σ_K²)^N − μ_K^{2N})·V²(0), with μ_K = 1+Kμ, σ_K = Kσ.
- Lemma 8: var(log(V(N)/V(0))) = N·(E[log²(1+KX(0))] − g²(K)).
- Proposition 9 (approximation-gap bound, verbatim): 0 ≤ g(K*) − g(K*_approx) ≤ log E[(1+K*X(0))/(1+K*_approx·X(0))].
- Assumptions: i.i.d. bounded returns, log utility; the quadratic is assumed a good local fit (which the paper itself shows can fail); sample-mean/sample-variance estimation of μ, σ² mentioned only via SLLN asymptotics — no finite-sample analysis.

## Data sources named
No empirical dataset — analytic proofs plus a worked coin-flip counterexample: X(k) = −0.9 w.p. 0.05, X(k) = 0.2 w.p. 0.95. References ledger 1210 (1710.01787) as the companion cautionary result and GSE's `apps/web/lib/staking/kelly-investigation.ts` as current exact single-bet Kelly.

## Findings (numbers and facts, not vibes)
- Coin example (verbatim): K*_approx ≈ 1.84, which lies outside the survival interval (−5, 1.111); worst-case path gives V(1) = 1 + 1.84·(−0.9) ≈ −0.656 < 0 — single-stage ruin with probability 0.05.
- The Taylor closed form it analyzes is the same family of approximation that ledger 1210 shows producing negative growth on realistic gambles — the paper's own message is cautionary: never serve the closed form directly.
- Positive capability: the survival interval (−1/Xmax, 1/|Xmin|) gives a provable no-bankruptcy guardrail — any stake fraction served to production must lie strictly inside it.
- The Lemma 4/7/8 closed forms give expected cumulative gain and its variance for a candidate stake with no simulation — usable for a fast pre-trade risk display in the staking dashboard.
- Proposition 9's gap bound is a monitoring metric: if a served fraction ever comes from an approximation, log the bound and alert above a threshold.
- Limitations: the survival interval requires knowing Xmax/Xmin — known per bet for American-odds sports, but must be estimated for open-ended portfolios; the saturation fix guarantees no bankruptcy but not good growth.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER — calibration/sizing program, safety invariant) Add a `survivalClamp` to the staking lib: any stake fraction (exact or approximate) is hard-clamped into (−1/Xmax, 1/|Xmin|) computed from the bet's worst-case return before serving — the paper's SAT_s as a safety invariant, with a unit test on the coin example (assert V(1) > 0 on the worst path). Adopt if it modifies 0% of current production stakes (pure safety net, no behavior change) and the unit test passes.
- (OTHER — calibration/sizing program, internal tooling) Use the Lemma 4/7/8 closed forms to display expected cumulative gain and its standard deviation for a candidate stake in the internal staking dashboard — fast, simulation-free; adopt if predicted vs. realized std-dev agree within 20% on bootstrap resamples of the 2025–2026 season.
- (OTHER — calibration/sizing program, monitoring) Proposition 9's gap bound as a logged monitoring metric whenever a served fraction comes from an approximation, with an alert threshold — governs any future fast approximate sizing (e.g., μ/σ² heuristic for multi-pick slates) that ledger 1210 warns against.
- (OTHER — calibration/sizing program, improvement direction) Replace fixed Xmin/Xmax bounds with distributional bounds from the engine's calibrated outcome model (e.g., 99.9% worst-case return), making the survival interval adaptive to each market's actual risk — hypothesis: adaptive bounds are tighter (allow larger justified stakes) while preserving the no-bankruptcy guarantee.
- CONTRADICTION/CAUTION: the closed form analyzed here (μ/(μ²+σ²)) is in the same family as the competing formula q̂′ = μ/(μ²+σ²) from [13] in ledger 1200, which errs ~50% at D=0.25 — do not let the "closed-form" convenience of this family leak into the portfolio sizer.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the survival-interval hard clamp (−1/Xmax, 1/|Xmin|) as a staking safety invariant with the coin-example unit test, and ship the Lemma-4/7/8 closed-form expected-gain/std-dev display in the internal staking dashboard; gates in file: clamp adopts if 0% of current stakes change; dashboard adopts if predicted vs. realized std-dev agree within 20%.
