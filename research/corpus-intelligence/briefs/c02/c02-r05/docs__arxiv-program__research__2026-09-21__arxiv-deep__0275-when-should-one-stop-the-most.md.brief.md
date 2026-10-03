# docs/arxiv-program/research/2026-09-21/arxiv-deep/0275-when-should-one-stop-the-most.md
## What it is (1-2 sentences)
A pure stochastic-control/free-boundary theory paper (arXiv:2608.12291) that formalizes "when should one stop watching the game and declare" as optimal stopping of a win-martingale Π_s ∈ [0,1] — trading waiting cost against terminal decision loss — with the optimal rule being first exit from a time-varying uncertainty interval, fully characterized by regularity theorems and a unique integral equation.

## Key metrics/methods (formulas where given, else "not specified")
- Bayes reduction: inf_{ν≤S} E[∫₀^ν f(s)ds + g(Π_ν)], where g(π) = inf_d[πℓ(1,d) + (1−π)ℓ(0,d)] is the concave terminal cost induced by the optimal terminal action.
- Terminal costs studied: g_{L²}(x) = x(1−x); g_CE(x) = −x log x − (1−x) log(1−x); hard classification g(x) = x∧(1−x) (boundary existence only, Remark 6.14).
- Separable win-martingale + time change: dΠ_s = ρ(s)σ(Π_s)dW_s; A(s) = ∫₀^s ρ²(v)dv; X_t = Π_{Γ(t)}, dX_t = σ(X_t)dB_t; transformed running cost c(t) = f(Γ(t))Γ′(t) = f(Γ(t))/ρ²(Γ(t)). Value V_T(t,x) = inf_{τ≤T−t} E[∫₀^τ c(t+u)du + g(X^x_τ)], generator ℒ = ½σ²(x)∂_xx. Lagrange form: W(t,x) = V(t,x) − g(x) = inf_τ E[∫₀^τ (c(t+u) + ℒg(X^x_u))du].
- Motivating martingales: Aldous dΠ^A_s = sin(πΠ^A_s)/(π√(S−s)) dW_s; Bass dΠ^B_s = φ(Φ⁻¹(Π^B_s))/√(S−s) dW_s; binary inference dΠ^I_s = Π^I_s(1−Π^I_s)/√(S−s) dW_s; all with ρ(s) = 1/√(S−s), A(s) = −log((S−s)/S), Γ(t) = S(1−e^{−t}).
- Main results: Theorem 4.1 — optimal rule is first exit from 𝒞_T = {(t,x): 1−b_T(t) < x < b_T(t)} with γ(t) < b_T(t) < 1; Theorem 4.2 — V_T ∈ C¹ globally, C^{1,2} away from the boundary, smooth fit ∂_x V_T = g′, ∂_t V_T = 0 at the boundary; Theorem 4.5 — boundary uniquely characterized by integral equation (4.2): V_T(t,x) = E[∫₀^{T−t} c(t+u)1{X^x_u ∈ 𝒞^b_{t+u}}du − ∫₀^{T−t} ℒg(X^x_u)1{X^x_u ∉ 𝒞^b_{t+u}}du + g(X^x_{T−t})] for x = b(t) or 1−b(t). Infinite-horizon homogeneous case (Theorem 5.2): exit from a fixed interval (A*,B*); ℒV̂ = −c inside, V̂ = g outside.
- Proposition 8.2 (monotonicity): boundary monotonicity is governed by f/ρ², not f alone. Proposition 8.6: with periodic costs the boundary need not converge as s↗S.
- Assumptions: positive smooth running cost f with bounded relative derivative, exponential growth bounds, a non-triviality cap (A.(v)); separable smooth symmetric σ with inaccessible endpoints {0,1}, smooth symmetric concave g, unimodal ℒg, true-martingale stochastic-flow derivative; no drift; no exogenous termination — §9 explicitly excludes games ending by absorption (that is the [20] formulation, left for future work).

## Data sources named
- No empirical data. Numerical illustrations only: Figure 1 (Aldous vs. Bass value functions, L²-loss, c₀ = 0.075); Figure 2 (binary martingale, S=1, L²-loss; three regimes: (left) f(s) = k(s+α)/(1−s), c(t) = k(1+α−e^{−t}), k = 0.03, α = 1; (middle) f(s) = k(s+α), c(t) = k(1+α−e^{−t})e^{−t}, k = 0.24, α = 0.01; (right) f(s) = k, c(t) = ke^{−t}, k = 0.06); Figure 3 (Aldous, cross-entropy loss, oscillatory c(t) = k₁ + k₂ sin(2πt), k₁ = 0.125, k₂ = 0.075). Gaussian-prior sequential testing: S′ = (1/(2πc₀) − 1/ξ²)⁺ vs point-estimation cutoff ν̂* = (1/√c₀ − 1/ξ²)⁺ — no general order (if c₀ < 1/(4π²), then S′ > ν̂*).

## Findings (numbers and facts, not vibes)
- [TRUST-SIGNAL] The Aldous value function lies above the Bass value function at c₀ = 0.075 under L²-loss (Figure 1): same loss and cost ⇒ the Aldous game is costlier to predict optimally — "more difficult, or more exciting, to call."
- [OTHER] Monotone original-time waiting costs can produce shrinking, nonmonotone, or expanding continuation regions depending on f/ρ² (Figure 2 panels); a practitioner specifying an increasing waiting cost cannot assume a shrinking "wait region" if noise rises fast enough.
- [OTHER] With periodic running costs, the boundary oscillates and need not converge near game end (Proposition 8.6) — policies can behave erratically close to the end if costs are cyclic.
- [OTHER] The theory assumes a true martingale with no drift and no exogenous termination; real games end by absorption (a team wins), which is explicitly out of scope — any GSE use on live games must add the absorption the paper excludes.
- [OTHER] Real win-probability streams (NGS WP, ESPN, market-implied) do not come with a certified diffusion coefficient; estimating σ(π) from data is the entire practical problem and the paper says nothing about it. Everything is continuous-time; discretization error bounds are not provided.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: an optimal "act now vs. wait for more information" policy over streaming win probabilities / odds — timing a live bet/hedge, timing a pregame pick release as the line moves, or a live-content desk committing to a narrative.
- OTHER: decision-timing as a new capability — the corpus covers market levels (de-vigged consensus, CLV ex post) but nothing treats *timing* as optimal stopping over a belief martingale; pairs with a win-probability feed to optimize the wait-vs-act tradeoff ex ante.

## Engine-actionable? (yes/no + one-line what)
Yes — build a timed-decision module: estimate σ(π) from historical win-probability streams (NGS WP or market-implied from odds snapshots), set terminal loss g and delay cost f from historical line movement, solve the free-boundary problem offline, and serve "act vs wait" from the precomputed (1−b(t), b(t)) interval per decision type.
