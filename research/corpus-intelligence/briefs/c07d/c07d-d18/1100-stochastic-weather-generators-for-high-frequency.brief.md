# research/2026-09-21/arxiv-deep/1100-stochastic-weather-generators-for-high-frequency.md
## What it is (1-2 sentences)
Research note on arXiv:2606.09941v1 (Cui et al. 2026): a deep generative model (Time VQ-VAE tokenization + MaskGIT bidirectional transformer) for synthesizing minute-by-minute wind-vector time series at one Oklahoma site, evaluated with discriminator accuracy, energy scores, volatility diagnostics, and tail checks. Verdict: REJECT for GSE — the generator explicitly fails on extreme winds, the exact tail regime that would matter for game-day applications; minute-scale single-site simulation has no path to NFL prediction value. Replaced by ledger 1305 (same weather/wind lane).

## Key metrics/methods (formulas where given, else "not specified")
- Stage 1: Time VQ-VAE tokenizes each day's 1,440-minute wind-vector sequence. Stage 2: MaskGIT bidirectional transformer with masked token-wise NLL; sampling via iterative MaskGIT decoding (Algorithm 1).
- Masked NLL: `L(θ) = −Σ_i Σ_{t:m=1} Σ_k 1(s_t^{(i)}=k) log p(s_t^{(i)}=k | s_{1:C}^{(i−1)}, s_{m(1:T)}^{(i)})`.
- Energy score: `ES(F,y) = (1/m)Σ||Xi−y|| − (1/2m²)ΣΣ||Xi−Xj||`.
- Quantile-regression volatility diagnostic: minimize `Σ ρ_τ(d_t − βᵀf(·))`, ρ_τ(u) = u(τ − 1{u<0}).
- Two temporal modes: independent days vs consecutive-day conditioning (last 60 min of prior day); weather-state variants: None / as-Feature / Embedded (Eqs. 9–10).
- Assumptions: June-only stationarity; tokenization preserves relevant dynamics; 16-level weather-state discretization (from pressure/rain) captures regime effects.

## Data sources named
- US DOE ARM facility, Lamont, Oklahoma: 1 Hz surface meteorology summarized to minute scale, June only (to suppress seasonality), 1994–2025.
- Train: June 1–21, 1998–2020 (474 full days); validation: June 22–30 same years; test: 1994–1997 + 2021–2025 (185 days). Wind vector at 10 m; discrete weather states from pressure/rain (16 levels). Gaps ≤20 min imputed with Brownian bridges.
- Code: https://github.com/Zernjk/Stochastic-weather-generators-for-high-frequency-wind-vector-time-series (+ Zenodo archive). Data: ARM facility public data.

## Findings (numbers and facts, not vibes)
- Discriminator (bidirectional LSTM, real vs synthetic, 1-day, best variant Embedded+Consecutive, 50 seeds): real 0.766 (0.052), synthetic 0.744 (0.081) — well above 0.5 chance, so synthetic days are detectable; high-pass-filtered accuracy 0.896 on synthetic.
- Energy scores (Embedded+Independent): median +0.55% vs training baseline, IQR [−2.12%, +3.12%] — closest to training performance.
- Volatility: Embedded generator replicates the 42.0% C_0.9 reduction (achieves 40.6%); Features generator underestimates baseline volatility by ~26%.
- Tails: no generated wind speed exceeds the 22.7 m/s training max in 50,000 days (Embedded: 3 exceedances); observations exceed 20 m/s 28 times. Authors' conclusion: nonparametric generators "understandably unable to reproduce extreme winds accurately."
- Memorization check (min Euclidean distance to training days): passed / no memorization concern stated.
- Day-boundary transitions unrealistic: RMS day-boundary wind-speed change 1.17–1.34 vs 0.73 observed.
- Clean split discipline: test years untouched until model freeze.
- Limitations: single site, single month — no spatial or seasonal generalization; extreme winds not reproduced (the regime that would matter for sports); minute-scale modeling is overkill for game-day decisions (hourly stadium forecasts suffice); purely generative, no forecasting use.
- GSE overlap: Gap 8 of the research map (weather physics for totals) needs wind physics × stadium effects on scoring — this paper has no stadium, no scoring linkage, no tail fidelity. Ledger 1098 covers the actionable weather-calibration lane; this paper is replaced by ledger 1305.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (negative finding, documented for the weather lane): The failure mode is the finding — extreme winds (>20 m/s observed 28 times in test) cannot be reproduced by the nonparametric generator (max 22.7 m/s training bound; effectively 0 exceedances in 50,000 generated days). For GSE's totals/weather program this establishes that deep-generative wind simulation is the wrong tool for tail-risk (kicking-game, deep-passing) quantification; the actionable lane stays with direct physical/empirical weather calibration (ledgers 1098, 1305), not stochastic generators. No QB-behavior, coaching, OL, trust-target, or scheme connections.
- TRUST-SIGNAL: The energy-score result (median +0.55%, IQR [−2.12%, +3.12%] vs training baseline) is a clean example of a proper distributional scoring rule for synthetic-data validation — worth remembering as evaluation craft for any GSE simulation work, but no trust-target intake applies here.

## Engine-actionable? (yes/no + one-line what)
No — REJECT; the generator's tail failure (0 of 50,000 days exceeding the 22.7 m/s training max vs 28 real exceedances of 20 m/s) kills the only sports use case, and minute-scale single-site simulation has no path to NFL prediction value; the weather/wind lane is carried by ledgers 1098/1305 instead.
