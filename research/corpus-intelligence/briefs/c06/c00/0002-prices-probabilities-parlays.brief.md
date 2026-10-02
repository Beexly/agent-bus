# arxiv-program/research/2026-09-21/arxiv-deep/0002-prices-probabilities-parlays.md
## What it is (1-2 sentences)
Deep read (full PDF) of Moshrefi (2026, arXiv:2607.14430v1) on systematic bias in Kalshi sports prediction markets: TTE-conditional calibration of binary moneyline prices and parlay-price consistency. Verdict in file: ADAPT — the TTE-conditional calibration curves and parlay-mispricing measurements are usable, but the parlay sample is 15 days thin and the "computational correction" claim is never backtested.
## Key metrics/methods (formulas where given, else "not specified")
- Power-logit: Ĉ(p) = p^γ / [p^γ + (1−p)^γ]; Platt: Ĉ(p) = σ(a·logit(p) + b); Prelec-II: w(p) = exp{−β(−ln p)^α}; parlay ratio R = P_exec / P_ind with P_ind = ∏ p_j.
- Near-expiry five-minute-bucket γ̂ ∈ [1.27, 1.31]; Platt slopes near expiry: NBA 1.62, MLB 2.05, NHL 4.56 (4.57 in one worked example).
- Median parlay inflation ≈ 3% per additional leg (β̂_1 ≈ 0.029, R² ≈ 0.94); empirical parlay hit rate runs 2–10 pp below price.
## Data sources named
Kalshi binary sports contracts (proprietary/reconstructable via Kalshi API; extraction not published): ~23M trades total — NBA 13,009,643 trades/11 weeks, MLB 7,148,254/7 weeks, NHL 2,819,289/10 weeks (Mar–mid-May 2026); parlay sample 12,639 trades, 2–11 legs, Apr 29–May 13 2026.
## Findings (numbers and facts, not vibes)
- Near-expiry prices are systematically distorted: a contract priced 0.40 in the NHL final TTE bucket has empirical win rate near zero.
- Parlay Table I (N=12,639): median R 0.991 (2 legs) rising to 1.305 (11 legs); means are outlier-driven (10-leg mean 3.078, SD 7.439, N=57); 98% of parlay trades priced below 0.60; price 0.30 wins ~24%, price 0.40 wins ~30%.
- No out-of-sample backtest of any correction; AIC/BIC prefer quadratic-in-log-TTE metamodel (R² > 0.92 across six trajectories); fees excluded throughout; sample is NBA/MLB/NHL only (no NFL).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: TTE-conditional calibration is a new conditioning axis for GSE market-implied probabilities; parlay mispricing prior (median inflation ~3%/leg) testable on GSE-tracked books' SGP pricing.
- OTHER: prediction-market microstructure — near-expiry distortion may be microstructure (informed flow, thin books) rather than correctable bias, suggesting a liquidity filter over a recalibration map.
## Engine-actionable? (yes/no + one-line what)
yes — bucket GSE market-implied probabilities into the paper's TTE buckets and fit TTE-conditional calibration maps; run the SGP audit (R = P_exec / ∏ p_j by leg count) on tracked books before any parlay-facing logic.
