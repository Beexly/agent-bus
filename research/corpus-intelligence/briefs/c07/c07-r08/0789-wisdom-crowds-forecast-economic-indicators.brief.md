# arxiv-program/research/2026-09-21/arxiv-deep/0789-wisdom-crowds-forecast-economic-indicators.md
## What it is (1-2 sentences)
Ledger read of arXiv:2207.08924v2 (Siqueira Neto & Fontanari, 2022) testing wisdom-of-crowds on 15,455 FRBP Survey of Professional Forecasters contests, comparing mean vs median aggregation and benchmarking against ARIMA. Verdict: ADAPT — prefer median-based consensus over means when aggregating GSE model outputs and market-implied probabilities to blunt outlier-model drag.
## Key metrics/methods (formulas where given, else "not specified")
- Page's diversity prediction theorem: γ_mean² = ε_quad − δ (authors caveat that δ and ε_quad can't be varied independently, so the "more diversity = better" reading is wrong).
- Median F_n^{−1}(1/2); skewness μ₃ = (1/n)Σ((g_i − ⟨g⟩_n)/δ^{1/2})³; mean individual error ε = (1/n)Σ|g_i − G|.
- Rank statistic: fraction ξ of participants beaten by the collective estimate; probability the crowd beats ALL participants (ξ=0).
## Data sources named
Federal Reserve Bank of Philadelphia Survey of Professional Forecasters (FRBP-SPF), 20 economic indicators, 1968:Q4–2007:Q1 entry through 2020:Q4; 5 horizons; mean 35 participants/contest (min 8, max 87); public via Philadelphia Fed. ARIMA comparison on 13,893 contests (12-quarter rolling window).
## Findings (numbers and facts, not vibes)
- Odds crowd beats ALL participants: mean 0.015, median 0.026 (median ~1.7x better).
- Median beats the majority by construction (no contest with ξ_median > 0.5); mean beats the majority in only 67% of contests.
- Mean relative errors: mean 0.20 ± 0.01, median 0.19 ± 0.01; winners 0.15 ± 0.01; random forecaster 0.22 ± 0.01; ARIMA 0.31 ± 0.01.
- Median beats mean head-to-head in 50.4% of contests; their errors correlate r=0.98.
- ARIMA beats a random expert in 35% of contests; ARIMA beats the crowd in 28%.
- 58% of contests have crowd error ≤5%; 28% have error >10%.
- Skewness vs collective error: Pearson r = 0.03 — no meaningful correlation, debunking the error-cancellation (unbiased estimates) explanation of crowd accuracy.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (aggregation doctrine): median vs mean consensus aggregation for model ensembles and cross-book market-implied probabilities.
- TRUST-SIGNAL: |mean − median| as an outlier-sensitivity diagnostic flagging dissenting sources for analyst review; "beat-all" ξ-statistic repurposed as a per-model health monitor (fraction of weeks a model beats the median consensus in log-loss).
- OTHER (experimental design): acceptance gate idea — median must match mean log-loss within 0.5% AND beat all constituents in ≥2% of games.
## Engine-actionable? (yes/no + one-line what)
Yes — swap GSE consensus blending to default to median-based aggregation with a |mean−median| disagreement diagnostic; test median vs mean vs trimmed-mean on 2024 NFL per-game probabilities by log-loss/Brier.
