# docs/arxiv-program/research/2026-09-21/arxiv-deep/0047-simulating-mlb-seasons-using-bayesian-inference.md
## What it is (1-2 sentences)
Ledger read of arXiv:2505.05120v1 (Simon Cha, 2025): an MLB season simulator coupling a Bayesian game-outcome model (two-stage Beta-Bernoulli on home-relative strength ratios) with random-walk batting averages and Kalman-filtered ERA to simulate synthetic future inputs, then Monte-Carlo-simulating full seasons for win totals and playoff probabilities. **Verdict in file: REJECT** — unvalidated single-author hobby project; superseded by the Yang & Swartz (2004) primary source.
## Key metrics/methods (formulas where given, else "not specified")
- λ_s = α_s^{r_1} · β_s^{r_2} · γ_s^{r_3}; p_s ~ Beta(m·λ_s, m); X_s ~ Bernoulli(p_s). Posteriors via MCMC (values not numerically reported in paper — model not reconstructable).
- BA innovations: Normal(0, 0.0015). ERA state-space: x_{t+1} = x_t + w_t, w_t ~ N(0, σ²_process); y_t = x_t + v_t, v_t ~ N(0, σ²_obs); per-team noise via 30-game sliding windows (statsmodels UnobservedComponents), teams tercile-grouped by first-20-game ERA.
- Simulation: after a 20-game burn-in, 1,000 simulated seasons per team → win-total distributions and playoff probabilities. Zero out-of-sample validation (no backtest, calibration, or market comparison).
## Data sources named
2022–2024 MLB seasons, games May 20–Aug 20 only; scraped with BeautifulSoup/Selenium from Baseball Reference, TeamRankings.com, SportsbookReview, MLB.com. No code or data released.
## Findings (numbers and facts, not vibes)
- Projected 2025 win totals, e.g.: SDP 99.4 (90% CI 85.6–112.4, playoff 90.9%); NYM 96.1/80.3%; DET 93.1/84.7%; COL 50.2/0.2%; ATH 77.8/0.0%. Full 30-team Table 1 in file.
- Author himself concedes playoff probabilities "disproportionately extreme" (some >90%, others near 0%) from 20-game-burn-in overconfidence compounding.
- Observation noise generally much larger than process noise (Figure 3).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: a negative exemplar — zero out-of-sample validation, unreported fitted parameters, and extreme uncalibrated probabilities; reinforces the calibration-first standard (no published numbers without backtest + calibration).
- OTHER: generic season-simulation pattern (Bayesian relative-strength + Monte Carlo); no NFL-specific carryover. Author's future direction (using sports-betting data as a prior) is directionally market-aware but acknowledged infeasible for long horizons.
## Engine-actionable? (yes/no + one-line what)
No — rejected outright; if season-simulation methodology is ever revisited, use Yang & Swartz (2004), not this paper. Do not build.
