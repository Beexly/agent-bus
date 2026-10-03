# arxiv-program/research/2026-09-21/arxiv-deep/1100-stochastic-weather-generators-for-high-frequency.md
## What it is (1-2 sentences)
Full read of arXiv:2606.09941v1 (Cui et al., 2026): a deep generative method (Time VQ-VAE tokenization + MaskGIT bidirectional transformer) for minute-by-minute synthetic wind-vector time series at one Oklahoma site — rejected by the original reader because it explicitly fails on extreme winds, the only tail regime that would matter for sports. Verdict in file: **REJECT** — niche method, no path to NFL predictions; replaced by ledger 1305.

## Key metrics/methods (formulas where given, else "not specified")
- Stage 1: Time VQ-VAE tokenizes each day's 1,440-minute wind-vector sequence. Stage 2: MaskGIT bidirectional transformer, masked token-wise NLL: L(θ) = −Σ_i Σ_{t:m=1} Σ_k 1(s_t^{(i)}=k) log p(s_t^{(i)}=k | s_{1:C}^{(i−1)}, s_{m(1:T)}^{(i)}); weather-state variants (None / as-Feature / Embedded). Sampling via iterative MaskGIT decoding (Algorithm 1).
- Diagnostics: bidirectional-LSTM discriminator (real vs synthetic accuracy, 50 seeds); energy score ES(F,y) = (1/m)Σ||Xi−y|| − (1/2m²)ΣΣ||Xi−Xj||; quantile-regression volatility replication at τ=0.9 (minimize Σ ρ_τ(d_t − βᵀf(·)), ρ_τ(u)=u(τ−1{u<0})); memorization check (min Euclidean distance to training days).
- Assumptions: June-only stationarity; tokenization preserves relevant dynamics; 16-level weather-state discretization captures regime effects.

## Data sources named
US DOE ARM facility, Lamont, Oklahoma: 1 Hz surface meteorology summarized to minute scale, June only, 1994–2025. Train: June 1–21, 1998–2020 (474 full days); validation: June 22–30 same years; test: 1994–1997 + 2021–2025 (185 days). Gaps ≤20 min imputed with Brownian bridges. Code: https://github.com/Zernjk/Stochastic-weather-generators-for-high-frequency-wind-vector-time-series (+ Zenodo archive). Data: ARM facility public.

## Findings (numbers and facts, not vibes)
- Discriminator (1-day, best = Embedded+Consecutive): real 0.766 (0.052), synthetic 0.744 (0.081) — well above 0.5 chance, so synthetic is detectable; high-pass-filtered accuracy 0.896 on synthetic.
- Energy scores (Embedded+Independent): median +0.55% vs training baseline, IQR [−2.12%, +3.12%].
- Volatility: Embedded generator replicates the 42.0% C_0.9 reduction (achieves 40.6%); Features generator underestimates baseline volatility by ~26%.
- Tails: no generated wind speed exceeds the 22.7 m/s training max in 50,000 days (Embedded: 3 exceedances); observations exceed 20 m/s 28 times. Authors' conclusion: nonparametric generators "understandably unable to reproduce extreme winds accurately."
- Limitations: single site, single month — no spatial or seasonal generalization; day-boundary transitions unrealistic (RMS day-boundary wind-speed change 1.17–1.34 vs 0.73 observed); minute-scale overkill for game-day decisions (hourly stadium forecasts suffice); purely generative, no forecasting use.
- Rejection reason: the failure mode (no extreme winds) kills the only sports use case; single-site simulation with no stadium, no scoring linkage; ledger 1098 covers the actionable weather-calibration lane.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Negative result — documents why nonparametric generative wind simulation is NOT a usable input for NFL weather/totals modeling (tail failure); points at ledger 1098 (weather-calibration lane) as the live alternative.

## Engine-actionable? (yes/no + one-line what)
No — REJECT in the file itself: no extreme-wind fidelity, single site/month, no scoring linkage; log as negative evidence for the weather/totals lane, not a build target.
