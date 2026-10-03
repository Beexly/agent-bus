# docs/arxiv-program/research/2026-09-21/arxiv-deep/0097-riskneutral-pricing-and-hedging-of-inplay.md
## What it is (1-2 sentences)
Ledger read of arXiv:1811.03931 (Divos, del Bano Rollin, Bihari, Aste, 2018): applies the Fundamental Theorems of Asset Pricing to in-play soccer betting — closed-form arbitrage-free prices from independent Poisson goal processes, calibration of implied intensities to live market quotes, and dynamic delta-hedging of in-play positions. **Verdict in file: ADAPT** — the framework ports to NFL live totals/spreads; the constant-intensity soccer model needs a drive/clock-aware extension.
## Key metrics/methods (formulas where given, else "not specified")
- Bet value: X_t = 1/Decimal_t = 1/(Fractional_t + 1) (1). Underlyings: S¹_t = N¹_t + λ₁(T−t), S²_t = N²_t + λ₂(T−t) (2); B_t = 1.
- Pricing: X_t = E^Q[X_T | F_t] (7); European closed form: X_t = Σ_{n₁≥N¹_t} Σ_{n₂≥N²_t} Π(n₁,n₂) P(n₁−N¹_t, λ₁(T−t)) P(n₂−N²_t, λ₂(T−t)) (14).
- Greeks: δ₁X_t = X_t(t, N¹_t+1, N²_t) − X_t(t, N¹_t, N²_t); Kolmogorov: ∂_tX_t = −λ₁δ₁X_t − λ₂δ₂X_t (20); ∂X_t/∂λ_i = (T−t)·δ_iX_t (21). Hedge weights φ¹_t = δ₁X_t, φ²_t = δ₂X_t (22–23).
- Replication: hedge with any two linearly independent bets; "Next Goal" bets are the natural hedge (delta matrix nonsingular even at large score gaps; Match Odds deltas collapse).
- Calibration: bid-ask-spread-weighted least squares minimizing R(λ₁,λ₂) (26) — 2 parameters fit 31 bet quotes per minute.
- Implied total-intensity dynamics: d ln(λ¹_t+λ²_t) = μ dt + σ dW_t (27), estimated μ = 0.55 ± 0.16 /90min, σ = 0.51 ± 0.19 /√90min.
## Data sources named
Betfair in-play market data, UEFA Euro 2012 (best buy/sell quotes at 1-minute steps; Match Odds, Over/Under, Correct Score; 31 bet types); 10 games for calibration/replication; showcase Portugal vs Netherlands 22 June 2012. Betfair data commercial, not shared; no code.
## Findings (numbers and facts, not vibes)
- Calibration error: mean 1.57 ± 0.27 bid-ask spreads across 10 games (Portugal–Netherlands 1.18, Spain–Italy 2.21) — "outside the bid-ask spread, but not significantly" for a 2-parameter model on 31 quotes.
- Implied intensities are NOT constant: clear increasing trend (consistent with Dixon & Robinson 1998 on 4,012 matches); drift μ = 0.55/90min.
- Replication jump correlation: mean 80%, std 19% (Portugal–Netherlands 89%, Germany–Italy 99%, Spain–Rep. of Ireland 98%, Italy–Croatia 47%, Sweden–England 50%).
- Hedging errors significant when implied intensities shift abruptly (unmodeled state changes like red cards).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (strong): theoretical foundation for GSE's thin in-play spread/total lane — in-play risk-neutral pricing, implied-intensity calibration to live markets, and "next score" delta-hedging port directly to NFL live totals/spreads with a drive-level scoring process replacing goal-Poisson. File gives an implementation spec: drive-level marked point process with λ(t, score-diff, field-position regime), calibrate λ to live consensus totals via the same bid-ask-weighted LS, hedge with "next score" props.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt as the live-totals pricer blueprint: implement constant-intensity Poisson pricer + calibration harness against live odds (Odds API exists, 20K credits/month), ~2–3 weeks effort; acceptance gate: calibration error ≤ 2.0 spreads AND jump correlation ≥ 0.70 on 2024 holdout games; follow-up = state-dependent intensity λ conditioned on down/distance/field position/clock/score-diff from nflverse EPA tables.
