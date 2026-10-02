# arxiv-program/research/2026-09-21/arxiv-deep/0576-paired-comparisons-for-games-of-chance.md
## What it is (1-2 sentences)
Full-paper brief of a Bayesian paired-comparison rating system (Cowan, arXiv:2303.14857v1) that generalizes Glicko by separating "game luck" (Λ, a luck function capping win probability below 1) from "player inconsistency" (μ, performance distribution), validated on 1.13M Duelyst II card-game matches. Verdict: ADAPT the luck function Λ into GSE's Elo/BT probability mapping — it fixes Bradley-Terry's systematic overconfidence on heavy favorites, a known NFL moneyline calibration failure. Code: https://github.com/thealexcowan/blatmmr.

## Key metrics/methods (formulas where given, else "not specified")
- Luck function (Eq. 2): Λ(x,y) = (1−β)/2 + β/(1+e^{y−x}), β=0.8: with prob 1−β the winner is random; the champion beats both the author and a rock with prob (1+β)/2 each.
- Posterior update: ρ_{A,A>B}(x) ∝ ρ_A(x) Σ_k ρ_B(x_k) Λ(x,x_k); growth kernel κ = Gaussian σ_κ=0.03 (Glicko's RD-inflation is a special case).
- Duelyst II production config: prior ν_0 = 1001-point discretization of N(0,0.7²) on [−7,7]; display scale x↦(400/log10)x+1500; draws via θ-weighted geometric mixture (Eq. 1, θ=1/2).
- Glicko recovered as Dirac-only priors + normal + Laplace approximation; TrueSkill and FIDE as special Λ choices. Tail pathology at β=1: m′−m → σ²log10/400 as m→−∞ — "Changing β from 1 to 0.99 changes the behaviour much more than from 0.99 to 0.8."
- Algorithms: naive O(n²); FFT-based Õ(n) via R(x)=F(x)−H(x) decomposition; throughput ~170 matches/sec/vCPU.

## Data sources named
First 1,126,592 ranked Duelyst II matches since launch (proprietary, not public); two heaviest users P (2162 matches) and Q (2142 matches) for diagnostics. Comparison baseline: Glicko2 (τ=0.5, default 1500, RD 200, volatility 0.06).

## Findings (numbers and facts, not vibes)
- Average log loss: Glicko2 0.6625, β=0.8 0.6613, β=0.9 0.6559 — ~1% improvement (computed on a filtered subset: both players' posterior variance <70²; comparison set size differs across systems, 558K vs 654K matches).
- β=0.8 was DEPLOYED despite β=0.9's better log loss, by judgment: β=0.8 gives more stable top-player rankings, and harshly penalizing unlucky losses frustrates players (game-design reason).
- Systems separate mainly in the tails (wins by the weaker player at large rating differences); Glicko2's loss concentrates there — consistent with Glickman et al. 2020 ("four widely-used BT systems overestimate very highly rated competitors") and Sonas's 1.54M-game chess finding.
- Heavy-user posterior variance after 2000+ games: Var(ν_Q) ∈ [52²,62²], Var(ν_P) ∈ [48²,52²] — calibrated uncertainty maintained.
- Grid sensitivity: doubling n=1000 changed nothing; σ_0²=1 vs 0.7² tested.
- Glicko2's player-dependent κ (volatility) deliberately rejected — it incentivizes intentional losing (volatility farming).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (calibration): the β-mixture luck link is a direct fix for heavy-favorite overconfidence in GSE moneyline probabilities — p=(1−β)/2+β/(1+10^{−Δ/400}) applied at the calibration layer.
- TRUST-SIGNAL: honest tail calibration — capping probabilities below 1 in the |p−0.5|>0.35 tail deciles where BT fails.
- QB-BEHAVIOR (speculative): INFERENCE — the team-specific-β improvement experiment (hierarchical β_team from historical upset rates) could profile QB/team "upset-proneness" in blowout spots — not a paper result.

## Engine-actionable? (yes/no + one-line what)
Yes — add the luck-capped link p=(1−β)/2+β/(1+10^{−Δ/400}) at GSE's calibration layer (not inside rating updates), grid-tuning β over {0.8,0.85,0.9,0.95,1.0} on 2015–2025 nflverse moneylines; gate: reduces tail-decile log-loss by ≥0.002 vs β=1 with no overall degradation (adapt to piecewise cap for |p−0.5|>0.3 if it wins only in the tail); effort ~half a day.
