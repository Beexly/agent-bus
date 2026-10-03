# arxiv-program/research/2026-09-21/arxiv-deep/1089-factor-quantile-multivariate-distribution-forecasts.md
## What it is (1-2 sentences)
Introduces the Factor Quantile (FQ) model for forecasting entire *joint* distributions: per-margin univariate quantile regressions on latent PCA factors, PCHIP-interpolated into marginal CDFs, glued with a conditional copula — then horse-races FQ vs EDF+Gaussian copula vs CCC/DCC-GARCH with Student-t E-GARCH margins under proper multivariate scoring rules and the Model Confidence Set protocol.
## Key metrics/methods (formulas where given, else "not specified")
- FQ stages: y_t = α^(τ) + B^(τ)x_t + ε_t^(τ) on |Q|=9 tail-concentrated quantile grid {0.001,0.05,0.1,0.3,0.5,0.7,0.9,0.95,0.999}; PCHIP into conditional CDFs; conditional copula F̂(y|x*) = C(F̂_1…F̂_n|x*); FQ-A (latent factors = last PCs) vs FQ-B (bagging, 25M samples/margin)
- Weighted CRPS: C_w(F,y) = 2∫₀¹(1{y≤F⁻¹(α)}−α)(F⁻¹(α)−y)w(α)dα; w=1, α(1−α), α²/(1−α)², (2α−1)²
- Energy score ES(F,y) = −½E_F‖Y−Y'‖ + E_F‖Y−y‖ (insensitive to correlation misspecification — Pinson & Girard 2012)
- Variogram score VS_p(F,y) = Σ_{i,j}(|y_i−y_j|^p − E_F|Y_i−Y_j|^p)² — the dependence-structure check energy score misses
- Model Confidence Set (Hansen et al. 2011): sequential equivalence tests at 75%/90%, bootstrap variance, worst-model elimination
## Data sources named
Three 8-dimensional daily financial systems with rolling 2000-obs (250 for static) recalibration: 8 USD FX rates (1999–2018), US Treasury term structure (1994–2018), 8 Bloomberg commodity indices (1991–2018)
## Findings (numbers and facts, not vibes)
- |Q|=9 PCHIP grid reproduces |Q|=500 distribution (KS test can't distinguish at 1%); kernel needs 35 nodes, step 50 — 4×+ compute savings; no quantile crossing observed
- Univariate CRPS: FQ-A(250) in 90% MCS 50% of time vs CCC-GARCH 37.5%; FQ wins rates decisively
- Multivariate: FQ-A(250) best overall — 58.3% MCS inclusion vs DCC-GARCH 50%
- FQ calibrates 30%+ faster than CCC-GARCH, 5×+ faster than DCC-GARCH, no convergence failures (DCC needed manual surgery on commodities)
- Smaller (250-obs) windows usually beat 2000-obs — long windows violate stationarity; FQ-A ≥ FQ-B everywhere (simple alpha version dominates complex bagging)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: joint-distribution evaluation for correlated props/SGPs/DFS stacks — variogram score is the correlation diagnostic GSE's energy-score-only evaluation is missing; FQ recipe is a cheap scalable joint forecaster for prop sets; MCS discipline for engine-variant selection
## Engine-actionable? (yes/no + one-line what)
Yes — adopt VS_p (p=0.5,1,2) as permanent joint-simulator correlation diagnostic; pilot FQ-A-style joint forecaster on one correlated prop set; gate: match current simulator on mean energy score within 3% while calibrating faster.
