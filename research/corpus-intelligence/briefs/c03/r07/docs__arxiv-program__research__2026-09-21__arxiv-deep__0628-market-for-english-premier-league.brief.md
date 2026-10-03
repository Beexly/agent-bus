# docs/arxiv-program/research/2026-09-21/arxiv-deep/0628-market-for-english-premier-league.md

## What it is (1-2 sentences)
Ledger of arXiv:1604.03614v5 (Polson & Stern), "The Market for English Premier League Odds" — calibrates a two-parameter Skellam (Poisson-difference) process to bookmaker correct-score odds matrices to represent the market's real-time outcome beliefs and trace "implied volatility" during games. Ledger verdict: ADAPT — port the calibration machinery (odds matrix → latent rates → implied-volatility path) as a live win-probability feature family for GSE in-game models, not the soccer specifics.

## Key metrics/methods (formulas where given, else "not specified")
- Score difference N(t) = N_A(t) − N_B(t) ~ Skellam(λ^A t, λ^B t), difference of two independent Poisson processes.
- Calibration: (λ̂^A_t, λ̂^B_t) = argmin{D_E² + D_V²} s.t. λ ≥ 0, matching first two moments of vig-removed, score-aggregated market-implied probabilities.
- Moments: E[N(1)] = λ^A − λ^B; V[N(1)] = λ^A + λ^B.
- Conditional on lead ℓ at time t: N(1) = ℓ + Skellam(λ^A_t, λ^B_t).
- Implied volatility: σ_IV,t = √(λ^A_t + λ^B_t) (Black-Scholes analogy explicit).
- Zero-inflated draw variants (plain Skellam underestimates draws; type 2 with heavier vig on draws fits best).
- Time-varying log-linear extension: log(λ^A_t) = α_A + β_A X_{A,t−1} on in-game stats (possession, shots, corners, cards).

## Data sources named
1,520 EPL games 2012–2016 (380/season) for calibration/efficiency; 18 EPL games Oct 15–22, 2016 (ladbrokes.com correct-score matrices, 238 score-difference outcomes) for calibration diagnostic; Everton vs. West Ham Mar 5, 2016 (ladbrokes.com real-time odds scraped every 10 minutes) for the dynamic case study. Scraped by authors; not re-released.

## Findings (numbers and facts, not vibes)
- Skellam-implied probabilities track market-implied probabilities closely except for underestimating draws (fixed by type-2 zero-inflated variant); Skellam log-odds have a heavier right tail than market log-odds (overprices extreme outcomes).
- 1,520-game efficiency test: binned home-win frequency ≈ market-implied probability — the market looks efficient; Skellam curve with λ̂^A=1.5, λ̂^B=1.2 traces the win/draw probability relationship.
- Everton–West Ham case study: pre-game λ̂^A = 2.33, λ̂^B = 1.44; 34' red card jumps implied volatility; Everton win probability hit ~90% before West Ham's 78' goal; draw probability spiked to ~90% before the 90' winner; whole-game-normalized intensity rose through the game.
- NFL applicability note: scoring is not Poisson (drives have memory, 3/7-point chunks, clock effects) — the Skellam likelihood is wrong for NFL, but the calibration architecture ports to a drive-based point process (Baker & McHale 2013, cited by the paper).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Market-implied win probability with implied-volatility path σ_IV,t as a live in-game feature (high vol = market expects chaos = live-betting screen): OTHER
- Market-implied belief-state diagnostic: does GSE's win prob move with or against the market's implied vol? TRUST-SIGNAL
- Market efficiency finding on 1,520 games (books well-calibrated on average): OTHER

## Engine-actionable? (yes/no + one-line what)
Yes — replicate the calibration loop on NFL in-play odds snapshots with a drive-outcome likelihood, publish implied win prob + σ_IV,t path, and adopt the implied-vol feature iff calibrated probs beat raw moneyline-implied win prob by ≥0.003 mean Brier on a ~50-game 2024 sample.
