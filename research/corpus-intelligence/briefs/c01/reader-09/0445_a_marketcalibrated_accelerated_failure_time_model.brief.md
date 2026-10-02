# arxiv-program/research/2026-09-21/arxiv-deep/0445-a-marketcalibrated-accelerated-failure-time-model.md
## What it is (1-2 sentences)
A full-paper research note on Clegg, Cartlidge & Syed (2026), arXiv:2605.16066v1 — a Weibull accelerated failure time (AFT) model for in-play soccer goal forecasting, calibrated per-match to Betfair prices via a squared-error objective, with post-shot xG as an in-play covariate, and evaluated on both forecast accuracy and Kelly betting profitability. Verdict: ADAPT — soccer-domain, but the machinery transfers: (1) market-calibrated team strengths, (2) baseline-subtracted cumulative deviation covariates, (3) the accuracy-vs-profitability distinction.

## Key metrics/methods (formulas where given, else "not specified")
- Weibull AFT: TH∼Weibull(γ,λH), TA∼Weibull(γ,λA); log 𝔼[T] = μ + βhome + a + d (sum-to-zero identifiability); MLE on interval-censored goal times; half-specific γ; conditional sampling via inverse transform Tremaining = (s^γ − log(U)/λ)^{1/γ} − s.
- Time decay of strengths: w_k = exp(−ξ·d_k/3.5), ξ = 0.0065/half-week ≈ 1-year half-life.
- Market calibration (eq. 13): ℒ = Σ_o(p̂_o − p_o^mkt)² + Σ_g(p̂_>g − p_>g^mkt)² over 1X2 outcomes plus over/under {0.5,1.5,2.5,3.5,4.5} thresholds, minimised per match via Powell's method. Over/under markets fix the absolute scoring level (moneyline alone underdetermines (offense, defense) strength pairs).
- In-play covariates: cumulative PSxG deviation xPSxG,k(t) = S_k(t) − S̄(t) vs linear population baseline; red-card difference (β̂_red = −0.41, SE 0.06).
- Betting: Kelly staking f = (bp − q)/b vs unit; EV-threshold filter; goal-window vs non-goal-window control for stale-price exploitation.

## Data sources named
- 4 EPL seasons 2021–2025: WhoScored.com timestamped events (goal times, red cards, added time); FBref.com post-shot xG (PSxG); Betfair Exchange minute-by-minute historical prices (minute M+2 as executable-odds estimate; 470-goal timing analysis showed 99% of price reactions absorbed within 2 min). 1,520 fixtures → 1,517 after exclusions → 1,377 training, 140 evaluation (gameweek 25+, 2024–25).
- Stoppage-time means from 240 training matches: 3.1 min first half, 6.2 min second half.
- Bibliography leads: Wheatcroft (2021) critique of RPS as a forecast metric; Wunderlich & Memmert (2020) "Are betting returns a useful measure of accuracy?"; Wunderlich et al. (2026, in press) on market prices in model selection; Leriou & Ntzoufras (2025) survival modeling of EPL goal arrivals.

## Findings (numbers and facts, not vibes)
- Covariates (BIC=29,883 baseline): M3 PSxG β̂_psxg = −0.10 (0.02), ΔBIC = −53.4, LRT p = 2.9×10⁻⁷ (best); M2 goals deviation β̂_goals = −0.07 (0.01), ΔBIC = −49.4; M1 red cards ΔBIC = −37.1, p = 7.0×10⁻¹².
- Half-specific γ̂: 1H = 0.983 [0.953,1.012] (memoryless), 2H = 1.395 [1.325,1.465]; ΔBIC = −302.9 vs score-state baseline.
- Pre-match: uncalibrated Weibull 56.4% vs Betfair 61.4% accuracy; calibrated variants lock to 61.4% (RPS ≈0.182–0.184, log-loss ≈0.911–0.920).
- In-play: Weibull κ,ψ 70.2% acc / RPS 0.1294 / log-loss 0.6933 vs Betfair 70.6% / 0.1254 / 0.6714; Maia 69.4% / 0.1303 / 0.6963; Zou 68.2% / 0.1412 / 0.7569. PSxG's out-of-sample effect small (RPS 0.1353→0.1347) — calibration dominates.
- Calibration shifts: >0.47 max (42-min increase in Leicester's expected time to score vs Arsenal); predominantly positive (uncalibrated model overestimates scoring).
- Betting: Weibull κ,ψ Kelly ROI +4.5% (Sharpe 5.94) over 17,458 bets, 49% win, net +158.15; unit staking −3.4%; EV≥0.20 → 8.5% ROI over 3,241 bets; EV-threshold peak near 0.2 at >20% ROI then declines (winner's curse). Maia Kelly ROI only 1.3% despite similar accuracy (accuracy ≠ economic value). Edge not from stale prices: goal-window bets 4.7% ROI (3,212) vs 4.9% outside (14,246).
- Zou's failure mode: its Bayesian in-match update overrides calibrated strengths — 0–0 matches' scoring rates fall 30% by minute 20, 50% by half-time, over-shooting to draws. Sparse in-match evidence must not override the calibrated prior.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: market-calibration recipe (eq. 13 analog) for anchoring NFL team-strength parameters to The Odds API kickoff prices — the totals market fixes the absolute scoring level exactly as over/under fixes goals; identifiability argument replicates for (offense, defense) strength pairs.
- OTHER: baseline-subtracted cumulative deviation covariates (cumulative EPA deviation vs population baseline) as the design pattern for any future GSE in-play feature.
- OTHER: accuracy-vs-profitability distinction — Zou's collapse, Kelly > unit, EV-threshold curve with winner's curse, Maia's accuracy-without-profit — load-bearing for how GSE evaluates picks; profit-based gating (evaluate every model change under log-loss AND Kelly ROI simulation).
- SCHEME: red-card/short-handed covariate handling is a template for personnel-state covariates (INFERENCE — not explicitly in file).
- TRUST-SIGNAL: none in file.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the kickoff market-calibration objective (minimise engine-vs-market squared error over spread/moneyline/total implied probs, with the totals market fixing the identifiability gap) and adopt Kelly ROI simulation with an EV-threshold plot as the standard pick-filter diagnostic.
