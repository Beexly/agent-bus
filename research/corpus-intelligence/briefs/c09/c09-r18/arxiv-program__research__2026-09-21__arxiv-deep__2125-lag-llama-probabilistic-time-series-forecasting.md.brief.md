# arxiv-program/research/2026-09-21/arxiv-deep/2125-lag-llama-probabilistic-time-series-forecasting.md
## What it is (1-2 sentences)
Research ledger on Lag-Llama (arXiv:2310.08278v1), a decoder-only transformer foundation model for probabilistic time-series forecasting using explicit lag covariates + date-time features with a Student-t output head; verdict ADAPT — as a lag-covariate recipe and heavy-tailed head design inside a sports model, never zero-shot.
## Key metrics/methods (formulas where given, else "not specified")
- Input x_t = [y_{t−l_1},…,y_{t−l_k}, dtf_t] (lags per frequency + date-time features); head: (ν_t, μ_t, σ_t) = head(h_t); likelihood p(y_t) = StudentT(y_t; ν_t, μ_t, σ_t); objective: minimize Σ_t −log StudentT over prediction horizon.
- Primary metric: CRPS of predictive distribution; 2,449,299 parameters after 100-config hyperparameter search; modes: zero-shot, few-shot, fine-tuned.
## Data sources named
Pretraining: 27 datasets across 6 domains (energy, transportation, economics, nature, air quality, cloud ops), 7,965 univariate series, ~352M windows; evaluation on held-out unseen datasets; baselines DeepAR, PatchTST, TFT, N-BEATS, ETS-family, seasonal naive; code via GluonTS lag-llama.
## Findings (numbers and facts, not vibes)
- Zero-shot mean rank across datasets: 6.714 (competitive but not leading); fine-tuned mean rank: 2.786 — best on average, SOTA on 3 individual datasets.
- Key message: lags + date-time + Student-t gets a 2.4M-param model to near-SOTA after fine-tuning; zero-shot is decent but not the headline.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: sports-native lag-covariate recipe (lags {1,2,3,4,8,16} games + rest-day/travel/weather/opponent covariates replacing date-time features) and the Student-t NLL head as a calibrated heavy-tailed baseline for margin distributions (blowouts, key-number landings).
## Engine-actionable? (yes/no + one-line what)
Yes — implement the weekly lag-covariate constructor + Student-t head (sports covariates, not calendar features), gate: CRPS ≥8% better than seasonal naive on 2021–2024 AND 80% prediction intervals calibrated within ±4 pts; hard reject any frozen zero-shot use.
