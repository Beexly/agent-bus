# arxiv-program/research/2026-09-21/arxiv-deep/1218-awareness-of-crash-risk-improves-kelly.md
## What it is (1-2 sentences)
Ledger deep read of Gerlach, Kreuser & Sornette (2020, arXiv:2004.09368): whether a crash-aware Kelly strategy (Efficient Crashes Model, ECO) beats classical Kelly on synthetic bubble-prone time series and how robust it is to estimation error. Verdict: ADAPT — adopt as GSE's stake-sizing regime switch (cut leverage when mispricing is most overextended).
## Key metrics/methods (formulas where given, else "not specified")
- ECM price dynamics: N_t = p0·exp(r_N·t) (normal price); q_t = N_t/p_t (inverted mispricing); p_{t+1} = p_t·exp(r_D − [ρ·K̄·ln(q_t)]/(1−ρ) + σ·ε_t) (no-jump branch); jump branch adds κ_t·ln(q_t), κ_t ~ N(K̄, σ_κ²).
- ECO Kelly: choose risky fraction λ_t each step maximizing conditional expected log wealth: W_{t+1} = (λ_t·e^{ā_t+σ·ε_t} + (1−λ_t)·e^{r_f})·W_t, r_f = 0.
- Base parameters Φ: r_N = r_D = ln(1.07)/252, σ = 0.17/√252, ρ = 0.01, K̄ = 0.3, σ_κ = 0.2 (S&P 500 1971–2019-like: ~7% annual growth, 17% vol, jump every ~100 trading days, jumps correct ~1/3 of mispricing); T = 1250 (5 years daily); m = 10,000 Monte Carlo paths; window sweeps T = 250..10,000.
- Strategies compared: ECO bounded (λ ∈ [−1,2]) and unbounded, classical Kelly bounded/unbounded, buy-and-hold, 60/40 fixed fraction.
- Estimation error: multiplicative Gaussian error ϕ_e = (1+ε_i)·ϕ_true, σ_e swept 10⁻³..10²; metrics: P(outperformance), average odds, mean outperformance, P(default), fraction of uptime, Sharpe, CALMAR, downside-risk Sharpe, CAGR.
- Trading-cost bound: C = CAGR·Δt_r/250.
## Data sources named
Synthetic only (deliberate: zero model error, estimation error isolated). Real-data validation deferred to Kreuser & Sornette (2018).
## Findings (numbers and facts, not vibes)
- ECO beats buy-and-hold ~62% of the time over 2 years, ~65% over 10 years (λ-constrained).
- Fraction of uptime ~70–80% for ECO portfolios.
- ECO beats all other methods on average CAGR (2-year and 10-year) and shows improved Sharpe over classical Kelly.
- Above ~4000-day windows, classical Kelly clearly underperforms the price series (leverage + jumps = failure).
- Estimation error: stable positive performance up to σ_e of order 10⁻¹..10⁰ (10–100% error); most sensitive to r_D; correctly estimating the *sign* of the drift matters more than its magnitude (up to 100% magnitude error still fine if sign is right).
- Rebalancing every 10 days gives ~40bp per period, workable vs. fee-eaten daily rebalancing.
- Default probability flattens ~20–25% at high σ; unconstrained leverage is the main bankruptcy driver.
- Symmetric crash/rally jumps are unrealistic (real data has far more positive bubbles); jump timing unpredictable by construction — sizes magnitude risk only, never times exits.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Regime-aware sizing template: define GSE "mispricing" as model-vs-market probability disagreement + steam/volatility flag; scale down Kelly fraction when edge is large AND market volatility elevated — OTHER
- Multiplicative-error robustness protocol (σ_e 10⁻³..10²) for every sizing parameter before shipping — TRUST-SIGNAL
- Hard constraint λ ∈ [0,1] (no leverage/short) for all product sizing — TRUST-SIGNAL
- GSE's `apps/web/lib/staking/kelly-investigation.ts` sizes with no regime awareness — this is the upgrade — OTHER
- Improvement lane: replace unpredictable-Poisson jumps with a *predictable* component — classifier on injury reports/weather/steam to forecast correction events against GSE positions — OTHER (INFERENCE: ledger's hypothesis, not tested)
## Engine-actionable? (yes/no + one-line what)
Yes — add a mispricing-disagreement × volatility regime switch that cuts Kelly stakes when the market is most overextended, enforce λ ∈ [0,1] with no leverage, and gate every sizing parameter on the multiplicative-error robustness sweep; accept on backtest if realized max drawdown drops ≥15% with log growth ≥0.95× baseline.
