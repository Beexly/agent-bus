# docs/arxiv-program/research/2026-09-21/arxiv-deep/2146-minimax-optimal-risk-sensitive-rl-cvar.md
## What it is (1-2 sentences)
Deep-dive ledger on Wang, Kallus & Sun (arXiv:2302.03201) — a purely theoretical paper proving minimax lower bounds for CVaR learning in multi-armed bandits and tabular RL, then constructing Bernstein-UCB and CVaR-UCBVI algorithms with matching upper bounds. Verdict: ADAPT; supplies the missing pick-category selection theory — maximize CVaR (not mean) of realized profit under the public-record reputational tail-risk constraint.
## Key metrics/methods (formulas where given, else "not specified")
- CVaR_τ(X) = sup_{b∈R}(b − τ⁻¹E[(b−X)^+]); = E[X | X ≤ F_X^†(τ)] for continuous X; τ=1 → expectation, τ→0 → essential infimum. CVaR-RL ≡ robust MDP under worst-case transition perturbation.
- Regret^MAB_τ(K) = Σ_k [CVaR_τ(ν(a*)) − CVaR_τ(ν(a_k))]; Regret^RL_τ(K) = Σ_k [CVaR*_τ − CVaR_τ(R(π^k))].
- Lower bounds: MAB ≥ (1/24e)√((A−1)K/τ), τ∈(0,1/2), Bernoulli rewards; RL ≥ (1/24e)√(S(A−1)K/τ) — CVaR learning strictly harder than risk-neutral by a √τ⁻¹ factor.
- Bernstein-UCB: per-arm pessimistic shortfall μ̂_k(b,a) = (1/N_k(a))Σ_{i<k}(b−r_i)^+ 1[a_i=a]; bonus Bon_k(a) = √(2τ log(AK/δ)/N_k(a)) + log(AK/δ)/N_k(a); optimistic CVaR f̂_k(b,a) = b − τ⁻¹(μ̂_k(b,a) − Bon_k(a)); pull argmax_a f̂_k(b̂_{a,k},a). The √τ scaling is the key innovation.
- Upper bounds: MAB ≤ 4√(τ⁻¹AK)L + 16τ⁻¹AL², L=log(AK/δ) (minimax-optimal); RL ≤ Õ(τ⁻¹√(SAK)) (Thm 5.3, improves Bastani et al. 2022 by S√H); ≤ 12e√(τ⁻¹SAK)L + τ⁻¹p_min^{−1/2}ξ under continuity assumption 5.4 (Thm 5.5).
- CVaR-UCBVI: bonus-driven value iteration in Bäuerle & Ott 2011 augmented MDP (state + budget b; b-dynamics known); reward discretization on η-grid, runtime O(S²η⁻²AHK).
## Data sources named
None — purely theoretical; no datasets, experiments, simulations. Code: none stated.
## Findings (numbers and facts, not vibes)
- Lower bound gains √τ⁻¹ over vanilla Ω(√(AK)): "information-theoretically harder to be more risk-averse."
- Bernstein-UCB improves Tamkin et al.'s CVaR-UCB suboptimal τ⁻¹ dependence → τ^{−1/2}; CVaR-UCBVI improves Bastani et al. 2022 by factor S√H; Bernstein improves Hoeffding bonus by √(τ⁻¹H) in CVaR-RL (vs √H in vanilla RL).
- Zero empirical validation — algorithm never run on any data, real or simulated; practical behavior (constants, grid sensitivity) unknown.
- Ledger flags: tabular/finite-horizon/known-reward-distribution setting ≠ GSE's world; assumes stationary i.i.d. episodes (sports pick categories drift — injuries, market adaptation; paper doesn't treat windowing); continuity assumption 5.4 unverifiable and likely false for discrete sports payoffs (general bound still holds, looser in τ); early-season per-arm samples too few for the Bernstein bonus to dominate (behaves like Hoeffding anyway); optimizes CVaR of returns, not of regret vs. the closing line.
- GSE adaptation spec: arms = pick categories (~6–10: spread-high-conf, spread-mid, ML-dog, total-over, total-under, prop-tier); reward = realized unit profit mapped to [0,1]; τ=0.25 (care about worst quartile); weekly optimistic-CVaR ranking with soft allocation (post top-3 categories); sliding 8-week window as non-stationarity fix; outputs ranked category list + f̂_k values as audit trail.
- GSE acceptance gate (pre-registered): ACCEPT if 2022–2025 walk-forward realized CVaR_{0.25}(weekly profit) ≥ 1.15× best baseline AND mean ≥ 0.9× post-all baseline AND posted picks ≥ 60% of post-all volume; REJECT if bonus term dominates selection >50% of weeks.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The only paper in this lane addressing WHICH bets to take under tail risk rather than HOW MUCH to stake — complements 2142 (bet/no-bet certificate), 2144 (stake size), 2145 (season objective).
- TRUST-SIGNAL: Matches GSE's reputational constraint — public record punishes bad streaks more than it rewards average winners; optimize CVaR_τ of realized profit, not mean win rate.
- OTHER: Weekly ranked category list + f̂_k values as audit trail ("why we leaned totals this week").
- OTHER: Non-stationarity fix beyond the paper — sliding 8-week window for N_k, μ̂_k since sports categories drift.
- OTHER: Improvement experiment — contextual Bernstein-CVaR-UCB: shortfall estimates conditioned on game context (home/away, divisional, weather) via per-category quantile regression; context explains much of the tail (e.g., road-dog ML tails).
- TRUST-SIGNAL: Paper optimizes CVaR of returns, not CVaR of regret vs. the closing line — the real betting failure mode is missing.
## Engine-actionable? (yes/no + one-line what)
Yes — weekly pick-category selection rule: track per-category empirical shortfall with the Bernstein bonus (τ=0.25, δ=0.05, 8-week sliding window), soft-allocate that week's posting slots to top-3 categories' engine picks.
