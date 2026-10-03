# arxiv-program/research/2026-09-21/arxiv-deep/0791-crps-decision-optimality.md
## What it is (1-2 sentences)
Full-text ledger on arXiv 2308.15443 (Nitka & Weron, electricity price forecasting): tests whether minimizing CRPS when combining 12 predictive-distribution experts leads to optimal *decisions* (battery-storage trading profits on German day-ahead power prices), and finds the statistically-best ensemble earns *less* than a naive equal-weight ensemble. Verdict: ADAPT — ensembles lane.
## Key metrics/methods (formulas where given, else "not specified")
- CRPS(F,x) = −∫(F(y) − 1{y≥x})² dy ≈ (2/M)Σᵢ QL_{pᵢ}(F⁻¹(pᵢ), x); QL_p(q,x) = (1{x<q} − p)(q − x).
- Two combination schemes: qEns (naive equal-weight horizontal quantile averaging) vs CRPS learning (Berrisch & Ziel 2021 online BOA, pointwise per quantile, penalized probabilistic smoothing λ=2^(−5…5), profoc R package). Horizontal (quantile) averaging only; vertical averaging rejected as adding variance/multimodality.
- Decision evaluation: battery storage arbitrage (buy low hour h₁, sell high hour h₂, 90% efficiency, 2 MWh, limit orders from selected quantiles, risk appetite α ∈ {0.5…0.9}).
- Multivariate DM test on daily loss differentials Δ_d^{A,B} = ‖L_d^A‖₁ − ‖L_d^B‖₁ (24-dim hourly CRPS vectors).
## Data sources named
Hourly German EPEX day-ahead electricity prices (2015-01-01–2020-12-31); day-ahead load/RES forecasts from ENTSO-E Transparency; emission allowances + fuel prices. 554-day out-of-sample test (27 Jun 2019 – 31 Dec 2020, covers COVID crash). Expert forecasts: github.com/gmarcjasz/distributionalnn; CRPS learning: profoc R package.
## Findings (numbers and facts, not vibes)
- Statistically best ensemble (DDNN_JSU_CRPS_LEAR) has the lowest CRPS (DM-significant) — but yields LOWER trading profits than its equal-weight qEns counterpart, especially at lower risk appetites.
- CRPS learning is much worse on the few lowest percentiles (the ones driving profitability during the COVID price crash).
- All ensembles earn 80–96% of crystal-ball profits (crystal ball = 13,587 EUR; worst case −21,425 EUR; naive ex-post fixed-hours strategy = 8,048 EUR, 84% of max).
- CRPS learning ≈ 500× slower than qEns (still <20 s on i7-9750H) — extra compute not offset by higher profits.
- Diversity helps: adding the worst standalone experts (LEAR quantile-regression pair) still improves ensembles (avoids overfitting).
- Author caveat: "The precise cause-and-effect relationships between the predictive accuracy and profits are difficult to disentangle."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (bankroll/decision theory): ensemble weights should be optimized on the decision metric (CLV/profit), not on a proper scoring rule — the cleanest citation in the program for decision-objective weighting. Naive equal-weight horizontal averaging is the near-free baseline every heavier scheme must beat. Supports the ledger-0786 forecast-combination puzzle.
## Engine-actionable? (yes/no + one-line what)
Yes — test on GSE pick history: combine engine spread/total distributions with market-implied distributions via (a) equal-weight, (b) CRPS-learning weights, (c) weights optimized directly on backtested CLV; expect (c) to win on P&L.
