# arxiv-program/research/2026-09-21/arxiv-deep/0642-online-gambling-pure-chance-wager-distribution.brief.md
## What it is (1-2 sentences)
Wang & Pleimling (2019) do descriptive statistical physics on pure-chance online gambling logs (roulette, crash, dice, jackpot): wager sizes are log-normally distributed at aggregate, gamblers use negative-progression (Martingale-like) strategies, and net-income random walks show anomalous diffusion.
## Key metrics/methods (formulas where given, else "not specified")
- Wager CCDF log-normal fit (Eq. 3): P(x) = [Φ((ln(x+1)−μ)/σ) − Φ((ln(x)−μ)/σ)] / [1 − Φ((ln(x_min)−μ)/σ)]; model selection by AIC Akaike weights; x_min via KS-distance minimization.
- Payoff: E(o_p|m,b) = −ξb (Eq. 2), house edge 1%–8% across games, always negative.
- Ergodicity-breaking parameter EB(t) = ⟨(δ²̅(t))²⟩/⟨δ²̅(t)⟩² − 1 (Eq. 9); non-Gaussian parameter NGP (Eq. 11); first-passage time via Heaviside estimator (Eq. 10).
- Martingale simulation: 10 billion individual simulations reproducing superdiffusion→normal-diffusion crossover.
## Data sources named
8 datasets from CSGOFAST, CSGOSpeed, ethCrash, SatoshiDice, Coinroll (skin + crypto gambling); 0.3M–19.2M bet logs per dataset; "available from the authors on reasonable request" (not public).
## Findings (numbers and facts, not vibes)
- Representative log-normal (μ, σ): Roulette A1 Red 3.689/1.952; A1 Black 3.807/1.922; Crash C1 1.647/2.226; Dice E 5.910/2.691; Coinroll F 1.930/2.638.
- Consecutive-bet correlations (Kendall τ, Spearman ρ, all τ > 0.5): C (0.858, 0.909); D (0.866, 0.949); G (0.522, 0.675). P(b_{i+1}=b_i) up to 0.802 for Crash C.
- After loss, gamblers most often increase wagers (e.g., A: 0.432 increase vs 0.249 decrease; F: 0.560 vs 0.061); after win, more likely to decrease (A: 0.388 decrease vs 0.228 increase) — negative-progression dominates.
- Player-selected odds follow truncated shifted power-law with exponents < 2 (CSGOFAST Crash α=1.881; Coinroll α=1.423) vs true ≈2 → gamblers overweight low-probability win chances.
- File verdict: REJECT — descriptive only, no predictive model, no holdout, data not accessible, zero transferability to NFL sports betting.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: gambler-behavior descriptive physics only — no transferable edge for GSE's prediction/betting stack; possible future recreational-money-flow module if per-wager sportsbook data ever becomes available.
## Engine-actionable? (yes/no + one-line what)
no — Rejected by the source ledger: no predictive experiment, no holdout, no replicable parameter, and the underlying data are private.
