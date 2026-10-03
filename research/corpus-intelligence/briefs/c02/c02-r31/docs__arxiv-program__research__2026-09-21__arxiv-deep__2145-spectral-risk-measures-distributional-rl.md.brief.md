# docs/arxiv-program/research/2026-09-21/arxiv-deep/2145-spectral-risk-measures-distributional-rl.md
## What it is (1-2 sentences)
A distributional-RL paper extending risk-sensitive RL beyond plain CVaR to static spectral risk measures (SRMs — convex blends of CVaRs such as Mean-CVaR), with the QR-SRM algorithm that optimizes this tunable tail-risk objective with convergence guarantees plus an interpretable read-out of intermediate (time-evolving) risk preferences. Verdict in file: ADAPT — gives GSE a principled season-level decision objective (expected season profit vs worst-quintile tail risk) that fixes CVaR's "blindness to success."

## Key metrics/methods (formulas where given, else "not specified")
- SRM_ϕ(Z) = ∫_0^1 F_Z^{−1}(u) ϕ(u) du, ϕ non-increasing, ∫ϕ=1 (Eq. 3); equivalently SRM_μ(Z) = ∫_0^1 CVaR_α(Z) μ(dα) (Eq. 4) — convex combination of CVaRs (Kusuoka 2001).
- Supremum representation: SRM_ϕ(Z) = sup_{h∈H} {E[h(Z)] + ∫_0^1 ĥ(ϕ(u))du}, attained at closed-form h_{ϕ,Z}(z) = ∫_0^1 F_Z^{−1}(α) + (1/α)(z − F_Z^{−1}(α))^− μ(dα) (Eq. 6).
- Objective: max_π SRM_ϕ(G^π) = max_π max_h J(π,h), J(π,h) = E[h(G^π)] + ∫_0^1 ĥ(ϕ(u))du (Eq. 7).
- QR-SRM (Alg. 1): alternate — (outer) closed-form h_l from the initial-state return distribution (Eq. 6, novel vs Bäuerle & Glauner 2021); (inner) quantile-regression DRL on augmented MDP X:=X×S×C (S=[G_MIN,G_MAX] accumulated discounted reward, C=(0,1] discount factor), greedy rule a_{G,h}(x,s,c)=argmax_a E[h(s+cG(x,s,c,a))] (Eq. 10); Bellman iteration η_{k+1,l}=T^{G_l} η_{k,l} (Eq. 11).
- Convergence (Theorem 4.1): gap ≤ ϕ(0)cγ^{k+1}G_MAX (Eq. 13); J(π*_l,h_l) monotone increasing in l, lower-bounds the objective.
- Risk spectra tested: CVaR ϕ_α(u)=(1/α)1_{[0,α]}(u); WSCVaR ϕ_{α⃗,w⃗}=Σ_i w_i(1/α_i)1_{[0,α_i]}; exponential ERM ϕ_λ(u)=λe^{−λu}/(1−e^{−λ}); dual power DPRM ϕ_ν(u)=ν(1−u)^{ν−1}.
- Interpretability (Thm 5.1, Pflug & Pichler 2016 decomposition): intermediate risk levels αξ_t^α and weights ξ_t^αμ(dα)/ξ (Eq. 9) computed from return CDF; worked example ρ(G) = 2+0.5(0.6·1.2·6.73+0.4·0.7·8.32) = 5.5875. Decomposition is explanation-only, never used to optimize (Hau et al. 2023).
- Assumptions: infinite-horizon discounted MDP, rewards bounded [R_MIN,R_MAX] with R_MIN≥0; exact return-distribution representation in the limit (practical runs use function approximation — acknowledged theory-practice gap).

## Data sources named
- No real datasets — three synthetic/simulated environments only: American put option trading (Tamar et al. 2017 setup; underlying = Geometric Brownian Motion), mean-reversion trading (Coache & Jaimungal 2023), Windy Lunar Lander (Gym-style, larger state/action space). Multiple seeds (e.g., 5 seeds in Lunar Lander). No code URL given.

## Findings (numbers and facts, not vibes)
- American option: QR-SRM(ϕ_α) finds the highest-CVaR_α(G) policy for each α∈{0.2,0.6,1.0}; lowering α from 1.0→0.6→0.2 makes the policy more conservative (exercises sooner), raising CVaR_{0.2} but lowering CVaR_{1.0}. [OTHER]
- Mean-reversion (Table 2, means ± std): QR-SRM(ϕ_{α=1}) CVaR_{1.0}=1.43±0.03, CVaR_{0.5}=0.03±0.04, CVaR_{0.2}=−1.36±0.09 — beats QR-DQN (1.40±0.09, −0.24±0.17, −1.76±0.27) on all three; matches QR-CVaR (1.48±0.07, −0.02±0.10, −1.42±0.21). [OTHER]
- QR-iCVaR(α=0.5) sub-optimal at CVaR_{0.5} (0.14±0.04 vs 0.27±0.03) — confirms per-step risk measures misalign with static objectives. [OTHER]
- WSCVaR model QR-SRM(ϕ_{α⃗_2,w⃗_2}), α⃗_2=[0.1,0.6,1.0], w⃗_2=[0.2,0.3,0.5]: best on ERM_4.0/DPRM_2.0/WSCVaR rows, e.g. WSCVaR score 0.24±0.02 vs QR-DQN −0.18±0.16. [OTHER]
- Lunar Lander (Table 3): QR-SRM(ϕ_{α=1}) within 1 std of QR-DQN on expectation (slightly worse, attributed to state augmentation); QR-SRM(WSCVaR) achieves highest WSCVaR while improving CVaR_{0.2}/CVaR_{0.5} "without a great impact on expected return." [OTHER]
- QR-CVaR collapsed on 3/5 Lunar Lander seeds (poor); authors attribute CVaR-only failures to "Blindness to Success" (Greenberg et al. 2022) — ignoring the right tail. Weighting expectation alongside tail (Mean-CVaR/WSCVaR) fixes this while keeping tail protection. [TRUST-SIGNAL]
- INFERENCE: GSE's selection-policy objective (fixed EV-threshold rules today) is the closest analog of the "decision objective" this paper formalizes; the proposed GSE framing is an 18-week finite-horizon episode with WSCVaR α⃗=[0.2,1.0], w⃗=[0.5,0.5] (Mean-CVaR) optimized over 10k bootstrapped seasons.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- CVaR "blindness to success" — a pure tail-risk objective ignores upside; Mean-CVaR blends expectation with tail protection: TRUST-SIGNAL.
- Intermediate risk readout (Eq. 9) — mid-season effective risk preference shift given realized bankroll — as publishable "how our risk posture adapts" content: TRUST-SIGNAL.
- Season-level selection policy (which EV threshold to post across the year) governed by a principled Mean-CVaR objective; complements 2142 (per-game certificates), 2143 (weekly slate sizing), 2144 (per-game stake fraction): SCHEME.
- Proposed human-calibrated spectrum: fit (α⃗,w⃗) from Garrett's historical override decisions to ground the risk measure in the operator's demonstrated risk tolerance: OTHER.
- No direct QB/coaching/OL/scheme findings in the paper: none applicable beyond the above.

## Engine-actionable? (yes/no + one-line what)
yes — Frame the 18-week season as a finite-horizon episode and select the weekly pick-posting policy by maximizing a Mean-CVaR (0.5·E + 0.5·CVaR_{0.2} of season profit) objective over 10k bootstrapped seasons.
