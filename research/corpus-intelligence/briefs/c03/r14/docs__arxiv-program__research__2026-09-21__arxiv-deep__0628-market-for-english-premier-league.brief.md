# docs/arxiv-program/research/2026-09-21/arxiv-deep/0628-market-for-english-premier-league.md
## What it is (1-2 sentences)
Ledger entry on arXiv:1604.03614v5 (Polson & Stern, "The Market for English Premier League Odds"), modeling soccer score difference as a Skellam (Poisson-difference) process calibrated to the bookmaker correct-score odds matrix to extract market-implied scoring rates and an "implied volatility" path. **Verdict in file: ADAPT** — port the calibration machinery (odds matrix → Skellam rates), not the soccer specifics.
## Key metrics/methods (formulas where given, else "not specified")
- N(t) = N_A(t) − N_B(t) ~ Skellam(λ^A t, λ^B t); Skellam PMF: P(N(1)=x | λ^A, λ^B) = Σ_k P(W_B=k−x | λ^B)·P(W_A=k | λ^A) (Bessel-I_r series).
- Win probability: P(N(1) > 0 | λ^A, λ^B) = Σ_{x=1}^∞ P(N(1)=x); even-team draw: P(N(1)=0 | λ,λ) = e^{−2λ} I_0(2λ), monotone decreasing in λ.
- Conditional on lead ℓ at time t: N(1) = ℓ + Skellam(λ^A_t, λ^B_t); moments E[N(1)] = λ^A − λ^B, V[N(1)] = λ^A + λ^B.
- Calibration: convert correct-score odds matrix to implied probabilities (p = 1/(1+odds)), rescale to remove vig, aggregate to score-difference probs, then (λ̂^A_t, λ̂^B_t) = argmin {D_E² + D_V²} (mean/variance residuals) s.t. λ ≥ 0.
- Zero-inflated draw variants (type 2 fits best) to fix structural Poisson draw underestimation (Karlis & Ntzoufras 2009 phenomenon).
- Implied volatility: σ_IV,t = √(λ^A_t + λ^B_t) (explicit Black-Scholes analogy); dynamics via re-calibration at each 10-minute mark on score-adjusted odds.
- Extension sketched: time-varying log-linear Skellam regression log(λ^A_t) = α_A + β_A X_{A,t−1} on in-game stats (possession, shots, corners, cards).
## Data sources named
Scraped by authors from ladbrokes.com (not re-released): 1,520 EPL games 2012–2016 (380/season) win/lose/draw odds; 18 EPL games (Oct 15–22, 2016) correct-score odds matrices (238 score-difference outcomes, ~13/game); Everton vs. West Ham (Mar 5, 2016) real-time odds every 10 minutes.
## Findings (numbers and facts, not vibes)
- Calibration: Skellam-implied probabilities track market-implied closely except draw underestimation (fixed by type-2 zero-inflated variant); Skellam log-odds have a heavier right tail than market log-odds (overprices extreme scorelines — moments-fitting + vig artifacts).
- 1,520-game efficiency: binned home-win frequency ≈ market-implied probability — the market looks efficient; Skellam curve with λ^A λ^B = 1.8 (from λ̂^A=1.5, λ̂^B=1.2) traces the win/draw probability relationship.
- Everton–West Ham: pre-game λ̂^A = 2.33, λ̂^B = 1.44; 34' red card jumps implied volatility (penalized team's scoring intensity drops, opponent's rises — consistent with Vecer et al. 2009); Everton win prob hit ~90% before West Ham's 78' goal; draw prob spiked to ~90% before the 90' winner.
- Whole-game-normalized intensity (λ̂^A_t+λ̂^B_t)/(1−t) rose through the game — market saw increasing intensity.
- Ledger caution: calibration is to the market, not to outcomes; the dynamic case study is one game (n=1, illustrated not validated); NFL scoring is not Poisson (drives have memory, 3/7-point chunks, clock effects) — but the calibration architecture ports to a drive-based point process (Baker & McHale 2013, cited by paper).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Implied-volatility path σ_IV,t as live win-probability feature and chaos screen: OTHER (live models / in-game betting)
- Market-is-efficient-on-average result (1,520 games, binned home-win ≈ implied): TRUST-SIGNAL
- Red-card / event reaction in implied-vol path (diagnostic of market belief updates): OTHER (live models)
## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL drive-outcome point-process version of the odds→latent-rate→implied-vol calibration on in-play moneyline/spread feeds; ADOPT the σ_IV,t feature iff it beats raw moneyline-implied win prob by ≥0.003 mean Brier on a 50-game 2024 sample.
