# docs/arxiv-program/research/2026-09-21/arxiv-deep/1226-preference-centric-bandits-optimality-of-mixtures.md
## What it is (1-2 sentences)
Deep-read ledger (ADAPT) of arXiv:2504.20877v2 (Tatlı et al., 2025): stochastic bandits redesigned around a preference metric (PM) — a signed Choquet integral (distortion functional) of an arm's full CDF — learning the optimal *mixture* of arms rather than the best single arm, with four algorithms (PM-ETC-M, PM-UCB-M, CE-UCB-M, anytime CIRT). Directly relevant to GSE's Kelly/sizing lane: it formalizes when risk-sensitive criteria (e.g., CVaR on a bet portfolio) prefer spreading stake across several picks instead of all-in on the best single pick.

## Key metrics/methods (formulas where given, else "not specified")
- Preference metric: U_h(F) = ∫ h∘F dλ (Eq. 1); mixture utility V(α,F) = U_h(Σ_i α_i F_i).
- Oracle: α⋆ ∈ argmax_{α∈Δ^{K−1}} U_h(Σ α_i F_i) (Eq. 7). Average regret R_π^ν(T) = V(α⋆,F) − E[V(τ_T^π/T, F)] (Eq. 8).
- Theorem 2 (convex distortion): if h convex, a solitary arm maximizes U_h. Theorem 3 (strictly concave h): for every strictly concave h there exists a bandit instance whose optimum is a strict mixture (Table 2: mean–median deviation, inter-ES range, Wang's right-tail deviation, Gini deviation examples).
- Lemma 1 (Gini motivation): two-arm Bernoulli Bern(p)/Bern(1−p), h(u)=u(1−u): U_h(½F₁+½F₂) > max(U_h(F₁), U_h(F₂)) (Eq. 3).
- PM-UCB-M selection: A_{t+1} = argmax_i (t·a_t^U(i) − τ_t^U(i)) (Eq. 22), with 1-Wasserstein confidence balls (Eq. 20) and optimistic mixing coefficients (Eq. 21); anti-chattering sticks with a_{t−1}^U.
- CE-UCB-M index: UCB_t(a) = U_h(Σ a(i)F^C_{i,t}) + L·Σ a(i)·(16√((2e log T+32)/τ_t^U(i)))^q (Eq. 23–24).
- Regret rates: Gini deviation — PM-ETC-M O(K√T), PM-UCB-M O(√(KT)) ignoring polylogs (Table 1). Risk-sensitive specialization: CVaR via PM-ETC-M O(√(log T/T)) matching best known; DRMs O((log T/T)^q) vs prior O(T^{−q/2}(log T)^{q/2}) — strictly better for risk-seeking.
- Assumptions: sub-Gaussian rewards (exponential CDF concentration in 1-Wasserstein); h Hölder-continuous; heavy tails explicitly out of scope.

## Data sources named
No real-world dataset; all experiments synthetic: Bernoulli bandits (K-arm, two-arm GD with h(u)=u(1−u) and WRTD with h(u)=√u−u; closed-form V(α,F)=⟨α,p⟩(1−⟨α,p⟩)); 3-arm Gaussian (variance 1, means 1, 3, 5); CIRT anytime (2-arm Bernoulli, T=3·10⁶, ε∈{0.03,0.06,0.12}, A=4, δ=0.05); 100 independent trials per run. No code released; supplementary material is proofs only.

## Findings (numbers and facts, not vibes)
- Fig. 3 regret-vs-horizon (GD/WRTD, T∈{20k,40k,60k}, regret scale ~10⁻³–10⁻²): PM-ETC-M and PM-UCB-M beat uniform sampling; PM-ETC-M has higher variance (commits to one mixture).
- Fig. 4 (Gaussian 3-arm, T up to 5k): sublinear regret for mean and GD; for GD PM-ETC-M less regret, for mean CE-UCB-M less.
- CIRT (Fig. 7): after tracking starts, regret ≈ δ(ε) constants — 9.06·10⁻⁸ (ε=0.03), 9.76·10⁻⁷ (ε=0.06), 1.52·10⁻⁵ (ε=0.12).
- Fig. 8: CIRT reaches same regret threshold as fixed-discretization anytime baseline with strictly less average computation; per-step cost O(A^{1/K}), horizon-independent.
- Numeric gate for replication: at T=60k under GD on the 2-arm Bernoulli setup, PM-UCB-M average regret ≤50% of uniform sampling's, decreasing monotonically across T∈{20k,40k,60k} (paper: PM-UCB-M ≈ 0.004–0.008 vs uniform ≈ 0.010–0.020).
- Limitations: synthetic-only; PM-ETC-M needs instance-dependent gap knowledge (crucial drawback); per-step O(ε^{−1/K}) optimization exponential in K; no minimax lower bounds (open problem); loose UCB constants for practical T.
- Ledger verdict: ADAPT.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pick-portfolio mixture selector: build empirical CDFs of per-pick per-unit PnL from walk-forward backtests (or Neon picks table), optimize a strictly concave distortion (CVaR, quadratic risk) over a discretized simplex, allocate bankroll proportional to the maximizing mixture, scaled by existing quarter-Kelly rule (OTHER — staking/portfolio sizing, the paper's concrete GSE implementation spec).
- Theorem 3 formalizes *why* CVaR on a bet portfolio can strictly prefer spreading stake across picks vs. all-in on the best single pick — directly complements the single-pick quarter-Kelly rule (OTHER — staking theory).
- Tracking rule (Eq. 22, under-sampled-arm selection) is a disciplined way to realize target stake fractions over a slate / balance online pick counts (OTHER — portfolio execution).
- Connections noted in ledger: optimal sports betting strategies paper (0171, 10 staking strategies), KellyBench (0276, log-wealth walk-forward), sizing-lane wave-3 (2607.09505, 2112.14451, 2508.18868).

## Engine-actionable? (yes/no + one-line what)
Yes — implement the CVaR-PM mixture selector: empirical-CDF per pick from walk-forward backtests, strictly-concave-distortion simplex optimization for bankroll allocation across a slate (Theorem 2 check: skip if PM convex), walk-forward tested against quarter-Kelly-on-best-pick on realized log-wealth and max drawdown.
