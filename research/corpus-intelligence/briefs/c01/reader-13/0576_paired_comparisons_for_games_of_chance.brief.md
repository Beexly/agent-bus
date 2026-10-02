# arxiv-program/research/2026-09-21/arxiv-deep/0576-paired-comparisons-for-games-of-chance.md
## What it is (1-2 sentences)
A Bayesian paired-comparison rating system (Alex Cowan, 2023) that generalizes Glicko by separating "game luck" (Λ, the luck function) from "player inconsistency" (μ, the performance distribution), tested on 1.13M ranked matches of the online card game Duelyst II. Verdict in the file: ADAPT — the luck-capped win-probability link is the portable idea; the discrete-distribution rating machinery is not.
## Key metrics/methods (formulas where given, else "not specified")
- Luck function (Eq. 2): Λ(x,y) = (1−β)/2 + β/(1+e^{y−x}), with β=0.8 in the deployed system; β-mixture capping win probability below 1 (with prob 1−β the winner is random).
- Match outcome model (2.1): L(μ_A,μ_B) = ∫∫ Λ(x,y) μ_A(dx) μ_B(dy).
- Posterior update (Eq. 7): ρ_{A,A>B}(x) ∝ ρ_A(x) Σ_k ρ_B(x_k) Λ(x,x_k); draw posterior (Eq. 1) with θ=1/2 geometric mixture; growth kernel (Eq. 8): ρ̃_A(x) ∝ Σ_k ρ_A(x_k) K(x,x_k).
- Prior ν_0 = 1001-point discretization of N(0,0.7²) on [−7,7] (Eq. 5); growth κ = Gaussian σ_κ=0.03 (Eq. 6); display scale x↦(400/log10)x+1500 (Eq. 3).
- Glicko recovered as Dirac-only priors + normal + Laplace approximation (Example 2.13); TrueSkill and FIDE as special Λ choices (Examples 2.7–2.8).
- GSE adaptation spec: replace the BT/Elo link p=1/(1+10^{−Δ/400}) with p=(1−β)/2+β/(1+10^{−Δ/400}), β tuned on 2015–2025 nflverse moneylines (start grid {0.8,0.85,0.9,0.95,1.0}); applied at the calibration layer, not inside the rating update.
## Data sources named
Duelyst II proprietary ranked matches (first 1,126,592 since launch; two heavy users P=2162 matches, Q=2142 matches for diagnostics). Comparison baseline: Glicko2 (τ=0.5, default 1500, RD 200, volatility 0.06). GSE-side target data named: nflverse 2015–2025 moneylines.
## Findings (numbers and facts, not vibes)
- Average log loss (paper-quoted): Glicko2 0.6625, β=0.8 0.6613, β=0.9 0.6559 — the win is ~1%, computed on a filtered subset (both posterior variances <70²; comparison set differs across systems, 558K vs 654K matches).
- β=0.8 was deployed despite β=0.9's better log loss: β=0.8 yields "more stable and reliable rankings" of top players; harshly penalizing unlucky losses is frustrating for players.
- Systems separate mainly in the tails (wins by the weaker player at large rating differences); consistent with "four widely-used systems based on the Bradley–Terry model all overestimate the performance of very highly rated competitors" (Glickman et al. 2020) and Sonas's 1.54M-game chess finding.
- Posterior variance after 2000+ games: Var(ν_Q) ∈ [52²,62²], Var(ν_P) ∈ [48²,52²] — calibrated uncertainty retained.
- Tail pathology at β=1: m′−m → σ²log10/400 as m→−∞ — massive rating changes from ratios of minuscule probabilities; "Changing β from 1 to 0.99 changes the behaviour much more than from 0.99 to 0.8."
- Throughput ~170 matches/sec/vCPU; parameter sensitivity: doubling grid size n=1000 changed nothing.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: moneyline/win-probability calibration — BT link overconfidence on heavy favorites (a 90% BT win prob for a −1000 favorite is the same tail error the paper documents); directly applicable to GSE's predicted-prob → market-prob calibration layer and to the KRC spectral ratings' BT link (paper 0574).
- OTHER: early-season / sparse-data rating behavior — the luck cap prevents rating explosions from fluke upsets.
## Engine-actionable? (yes/no + one-line what)
Yes — one-line calibration-layer change (β-capped BT link) with a defined backtest gate: adopt if tail-decile log-loss improves ≥0.002 vs β=1 on 2015–2025 nflverse with no overall degradation; improvement experiment: hierarchical per-team β (team "luck profiles") if year-over-year rank correlation of β_team >0.3.
