# arxiv-program/research/2026-09-21/arxiv-deep/0591-an-elotype-rating-model-for-players.md
## What it is (1-2 sentences)
Deep read of Düring, Fischer & Wolfram (2021, arXiv:2109.15046v2): a kinetic-theory generalization of Elo where team strength is a random variable (mean θ, variance σ² from lineup/injury fluctuations), deriving a mean-field Fokker–Planck equation and proving convergence conditions — with the usable core being a variance-corrected Elo update. Verdict in file: ADAPT — adopt the variance-corrected update (Jensen K term) and σ-dependent rating-shrinkage insight for GSE's Elo lane; reject the full PDE/theorem machinery as overkill for 32 NFL teams.
## Key metrics/methods (formulas where given, else "not specified")
- Microscopic: R_i^* = R_i + γ(S_ij − b(R_i − R_j)), b(z) = tanh(νz), S_ij ∈ {−1,1}.
- Jensen correction (Eq. 6, the portable formula): ⟨S_ij⟩ ≈ b(θ_i−θ_j) + ½ b''(θ_i−θ_j)(σ_i²+σ_j²) =: b(θ_i−θ_j) + K(θ_i−θ_j, σ_i, σ_j); K odd in first arg, even in the other two.
- Outcome variance (Eq. 7): Var[S_ij] ≈ (b'(θ_i−θ_j))²(σ_i²+σ_j²).
- Convergence (Thm 3, homogeneous σ): ℰ(t) ≤ ℰ(0) exp(−2 w_min(L + σ²L₂)t) when b + σ²b'' is monotone; for tanh, needs 1 + ν²σ²(4 − 6 sech(zν)²) > 0.
- Qualitative law: high-σ teams get rated toward the middle; weak teams over-perform / strong teams under-perform expectations.
## Data sources named
None real — synthetic microscopic simulations only (N=200 teams × 23 players, m=11 lineups; N=500 players, 10⁶ steps; FIFA 2014 anecdotal motivation via goalimpact.com).
## Findings (numbers and facts, not vibes)
- Simulation: ratings converge to mean strength only for θ ∈ [6,8] at larger σ; larger σ → ratings collapse toward the mean (all ≈7 regardless of θ); stationary bias — θ<5 systematically under-perform, θ>5 over-perform relative to rating (Jensen term bends θ=R).
- ν sensitivity (σ=2): ν=1 → total collapse to ≈7 (diagonal lost); ν=0.1/0.01 recovers θ=r diagonal, ν=0.01 much slower — ν must be small (chess's ν≈1/400 cited).
- Zero real-data validation; mean-field theorems assume N→∞ and all-play-all — not the NFL (32 teams, structured schedule).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: QB-change indicator is one of the σ_i² proxies — injury/QB-turnover teams' ratings shrink toward the mean automatically via the K term.
- COACHING: coaching/scheme-change churn feeds the σ estimate (roster turnover, coordinator change) as performance-variance drivers.
- OTHER: the portable core is the variance-corrected expected-score E = b(θ_i−θ_j) + ½b''(θ_i−θ_j)(σ_i²+σ_j²) in the weekly Elo update.
## Engine-actionable? (yes/no + one-line what)
yes — build variance-aware NFL Elo on nflverse 2015–2025 with per-team weekly σ_i² from trailing 8-week EPA/play variance + injury load + QB-change indicator; adopt if it beats standard Elo by ≥0.5% overall log-loss on 2019–2025 rolling AND ≥1.5% on top-quartile-σ team-weeks.
