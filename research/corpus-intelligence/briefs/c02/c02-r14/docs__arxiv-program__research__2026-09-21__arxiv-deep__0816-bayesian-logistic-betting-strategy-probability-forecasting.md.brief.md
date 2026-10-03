# docs/arxiv-program/research/2026-09-21/arxiv-deep/0816-bayesian-logistic-betting-strategy-probability-forecasting.md

## What it is (1-2 sentences)
A game-theoretic "Skeptic" framework that systematically bets against a miscalibrated probability forecaster using a Bayesian logistic correction to the announced probabilities and Kelly-optimal stake fractions, proven asymptotically to bankrupt any forecaster whose probabilities don't match reality, and demonstrated empirically by exploiting the Japan Meteorological Agency's avoidance of clear-cut forecasts. The deep-read ledger verdict is ADAPT: treat the sportsbook's line as the Forecaster and the GSE engine as the Skeptic, fading stale or shaded market probabilities with a logistic correction + Kelly sizing.

## Key metrics/methods (formulas where given, else "not specified")
- Capital: K_n = ∏_{i=1}^n (1 + ν_i(x_i − p_i)) (Eq. 1).
- Kelly-optimal stake fraction: ν_n = (p̂_n − p_n)/(p_n(1−p_n)) = p̂_n/p_n − (1−p̂_n)/(1−p_n) (Eq. 2), maximizing E_{p̂_n}[log(1+ν(x_n−p_n))].
- Capital as likelihood ratio (Eq. 3): K_n = ∏ p̂_i^{x_i}(1−p̂_i)^{1−x_i} / ∏ p_i^{x_i}(1−p_i)^{1−x_i}.
- Logistic correction: log(p̂_n/(1−p̂_n)) = log(p_n/(1−p_n)) + θ'c_n (Eq. 5); p̂_n = p_n e^{θ'c_n}/[1 + p_n(e^{θ'c_n}−1)] (Eq. 6); K_n^θ = e^{θ'Σc_i x_i}/∏(1 + p_i(e^{θ'c_i}−1)) (Eq. 7).
- Bayesian strategy: prior π(θ) (positive near origin) → K_n^π = ∫ K_n^θ π(θ) dθ (universal-portfolio-style mixture).
- Auxiliary: S_n = Σc_i(x_i−p_i), V_n = Σc_i c_i' p_i(1−p_i). Theorems 4.1/4.2: Bayesian logistic Skeptic weakly forces SLLN with side info under regularity conditions (λ_min(V_n)→∞, bounded condition number, bounded c_n).
- Tested strategies: S1 (θ scalar, c_n=1, Uniform[0,1] prior); S2 (θ'=[θ_1, β−1], c_n'=[1, log(p_n/(1−p_n))]); S3 (adds θ_3 with c = x_{n−1}, Markov term).

## Data sources named
- Simulations: three synthetic cases — Case 1: x_n ~ Bernoulli(0.7), p_n alternating 0.4/0.6; Case 2: x_n ~ Bernoulli(0.5), p_n alternating 0.4/0.6; Case 3: p_n = 0.5, x_n from a Markov chain (transition probs in Figure 2).
- Real: JMA probability-of-precipitation forecasts for Tokyo, 3 years (2009-01-01 to 2011-12-31, ~1,096 days), from Mainichi Daily News morning-edition archives; outcomes from weather-eye.com (rain at 09:00 or 15:00 = rainy day). Forecasts quantized to multiples of 10%.

## Findings (numbers and facts, not vibes)
- Table 1 empirical calibration counts: p=0%: 1 rain/61 dry (1.6%); 10%: 10/324 (3.0%); 20%: 24/193 (11.1%); 30%: 36/117 (23.5%); 40%: 20/26 (43.5%); 50%: 67/56 (54.5%); 60%: 38/14 (73.1%); 70%: 36/7 (85.7%); 80%: 36/4 (90.0%); 90%: 22/1 (95.6%); 100%: 3/0 (100%). **[OTHER]**
- JMA "tends to be closer to 50% than the actual ratio" — announces 20% when actual is 11.1%; announces 80% when actual is 90.0% — "tendency of avoiding clear-cut forecasts"; hindsight β ≈ 1.5 (logistic slope on announced log-odds needed to correct JMA). **[TRUST-SIGNAL — the "books shade toward 50%/public side" analog: estimate which books systematically avoid sharp probabilities]**
- Capital process (Figure 8): "works very well against JMA" — NO exact final capital, growth rate, or drawdown numbers in text (figure-only; the file flags this as a caveat). **[OTHER]**
- Capital "shows a seasonal fluctuation and does not perform well for the rainy season (June and July)" — regime-dependence of the correctable bias. **[OTHER]**
- Simulations (capital curves, figure-only): S1 beats only Case 1; S2 fixes Case 2; S3 with the Markov term fixes Case 3 — "more flexible strategy utilizing more side information" wins. **[OTHER]**
- Caveats per the file: β prior tuned with hindsight (Uniform[0,2] chosen because hindsight β≈1.5 — data snooping on the hyperparameter); 0%/100% clipped ad hoc to 1%/99%; Kelly fractions explode near p_n→0/1 with no stake cap discussed; theorems are asymptotic, finite-sample behavior (GSE's ~3,400 picks) is what matters; books adapt, JMA does not.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "Skeptic overlay" for GSE: Forecaster = sportsbook (Pinnacle/book-consensus implied p_n), Skeptic = GSE engine; fit Bayesian logistic log(p̂/(1−p̂)) = log(p/(1−p)) + θ'c_n with c_n = engine features (model edge, line movement, steam, rest/situational flags); stake Kelly fraction ν_n capped at ±ν_max; bet only when |ν_n| > threshold (abstention built in) — **OTHER**.
- Multi-book Skeptic extension: treat each book as a separate Forecaster with book-identity dummies, profiling which books shade which way (line-shopping intelligence) — **TRUST-SIGNAL**.
- Regime-dependent θ (early vs late season, high vs low totals, changepoint detector) directly motivated by the paper's seasonal-fluctuation finding — **OTHER**.
- Testing whether fitted θ on log(p/(1−p)) is significantly ≠ 0 as the statistical test for "the market's probabilities are systematically correctable" — **TRUST-SIGNAL**.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the Skeptic overlay: Bayesian logistic correction of market-implied probabilities fed by engine features, Kelly-capped stakes with abstention below a threshold, θ updated online; ADAPT only if on 2024→2025 walk-forward it beats flat-stakes log-bankroll growth with the logistic slope significantly ≠ 0 and drawdown ≤ 1.25× flat stakes.
