# arxiv-program/research/2026-09-21/arxiv-deep/0960-neural-networks-postprocessing-ensemble-weather.md

## What it is (1-2 sentences)
Paper ledger for arXiv:1805.09091 (Rasp & Lerch 2018, Monthly Weather Review) on NN distributional regression with closed-form Gaussian CRPS loss and station embeddings for post-processing ensemble weather forecasts. Verdict: ADAPT — directly feeds GSE's weather-impact lane: calibrated stadium-level weather distributions as a first-order input to totals/spread models.

## Key metrics/methods (formulas where given, else "not specified")
- Distributional-regression frame: y_{s,t}|X_{s,t} ∼ F_{θ_{s,t}}; θ_{s,t} = g(X_{s,t})
- EMOS link: (μ,σ) = (a_s + b_s·x̄^{t2m}, c_s + d_s·s^{t2m}); boosting link: (μ,σ) = ((1,X)^T β, exp((1,X)^T γ))
- NN output = Gaussian (μ,σ) parameters, no activation; loss = closed-form CRPS of a Gaussian (eq. B2) as SGD loss; station ID → 2-dim embedding (n_emb=2) concatenated with predictors, trained jointly
- Regularization: early stopping on 20% training holdout (dropout/weight decay failed to help); ensemble of 10 NNs with different inits, averaging distribution parameters; Adam; one hidden layer (deeper overfit without gain)
- Calibration: PIT/verification-rank histograms; significance: Diebold–Mariano + Benjamini–Hochberg across stations; permutation feature importance (Breiman-style on validation CRPS)

## Data sources named
- ECMWF 50-member ensemble, 00 UTC init, 48h lead, TIGGE archive; DWD surface stations Germany (537; 499 with 2016 validation data); 3 Jan 2007 – 31 Dec 2016 daily; 42-predictor vector; splits: train 2007–2015 (1,626,724 samples) or 2015-only (180,849), validation = all of 2016 (182,218 samples)
- Code: https://github.com/slerch/ppnn (Python Keras/TensorFlow + R)

## Findings (numbers and facts, not vibes)
- Mean CRPS (2015-train / 2007–2015-train): raw 1.16/1.16 → EMOS-gl 1.01/1.00 → EMOS-loc 0.90/0.90 → EMOS-loc-bst 0.85/0.80 → FCN-aux-emb 0.88/0.87 → NN-aux 0.90/0.86 → NN-aux-emb 0.82/0.78; best NN improves 29% over raw and 3% over best benchmark
- NN-aux-emb best at 65.9% of stations (2015) / 73.5% (2007–2015); significantly better than EMOS-loc-bst at 30% of stations, worse at ≤2%
- Long training helps nonlinear models most (EMOS-loc-bst and NNs gain 4–5%; linear gains ~nothing)
- Cost: NN-aux-emb ≥2× faster than EMOS-loc-bst incl. 10-run ensemble; QRF ~10× slower than EMOS-loc-bst; GPU ≈6× CPU speedup
- Top permutation-importance predictors after t2m mean: station altitude, orography, shortwave radiation flux, 850 hPa specific humidity (cloud-cover proxy); ensemble σ unimportant (spread–error correlation only r=0.15; spread-error ratio 0.51→0.95 after post-processing, mostly additive)
- Raw ensemble under-dispersed (U-shaped rank histogram); all post-processed distributions well calibrated

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Stadium-ID embeddings for calibrated kickoff weather distributions (wind/gusts/precip with truncated-normal/Gamma closed-form CRPS) — OTHER
- Wind/gust/precip ensemble mean/σ at NFL stadium grid cells → predictive moments/quantiles feeding the totals/spread weather model — OTHER
- Multivariate wind–temperature joint calibrated distribution as improvement experiment for totals log-loss — OTHER

## Engine-actionable? (yes/no + one-line what)
yes — build NN-aux-emb-style CRPS-trained weather post-processor on GEFS ensembles + ASOS stadium observations; gate: ≥5% mean-CRPS improvement over EMOS-gl on holdout season, significantly better at ≥15% of stadiums and worse at ≤5%.
