# arxiv-program/research/2026-09-21/arxiv-deep/0867-ml-alternative-data-market-risk.md
## What it is (1-2 sentences)
Full-text ledger (read 2026-09-21) of Dierckx, Davis & Schoutens (KU Leuven), arXiv:2009.07947 — predicts next-day direction of AAPL implied volatility from 78 engineered features (market + Google News counts + Wikipedia page views) with walk-forward validation; headline result is that market data alone beats alternative data under linear models while a tree model finds non-linear value in Wikipedia features. Verdict: ADAPT — GSE analog is predicting line-movement direction for bet-timing (fire now vs wait for the close).
## Key metrics/methods (formulas where given, else "not specified")
- VIX formula (eq. 1): VIX = 100·√[(2/T)Σ(ΔK_i/K_i²)e^{RT}Q(K_i) − (1/T)(F/K_0 − 1)²], interpolated to 30-day term
- Target: y_i^* = ivol_{i+1} − ivol_i; y_i = 1 iff y_i^* > 0 (eq. 2); class split 59% down / 41% up
- Stationarity: Augmented Dickey–Fuller per feature; first-difference non-stationary ones
- Models (sklearn defaults, no tuning): Logistic Regression, RBF-SVM (standardized, 29-feature AdaBoost-importance subset), AdaBoost (no standardization/selection); no deep learning (too few points); no Random Forests (authors argue random sampling clashes with sequential data)
- Evaluation: Walk-Forward Validation — 379-day (78%) train window, next day OOS, 106 train-test splits; standardization + feature selection re-run inside each fold; metric = balanced accuracy (mean per-class recall)
- Ablation: 5 scenarios — (1) market only, (2) news+wiki only, (3) market+wiki, (4) market+news, (5) all
## Data sources named
Yahoo Finance (OHLC/volume); personal end-of-day option data (not shared, used for VIX-formula implied vol); Google News daily keyword counts (scraped); Wikimedia API daily "Apple Inc" page views. 486 daily feature vectors, Jan 1 2016 – Dec 31 2017, AAPL. 78 features/day after technical-indicator expansion (MA/EMA/ROC/Disparity/Momentum n∈{3,5,10}, RSI(14), Williams %R(14), Stochastic(14), replicating Weng et al. 2017). No code or data links.
## Findings (numbers and facts, not vibes)
- Balanced accuracy (Table 9): scenario 1 market-only — LR 63.3%, SVM 64.2%, AdaBoost 53.7%; scenario 2 news+wiki only — 52.3/50.5/55.0; scenario 3 market+wiki — 52.8/55.6/AdaBoost 63.0%; scenario 4 market+news — 51.8/53.3/49.0; scenario 5 all — 61.3/59.1/57.3
- Best overall: SVM 64.2% / LR 63.3% (market-only) vs 50% chance and 59% majority-class baseline, on 106 OOS points
- AdaBoost + market + Wikipedia = 63.0% (best AdaBoost) while LR collapses to 52.8% on identical features → non-linear interaction between Wikipedia page-traffic features and IV moves that linear models miss
- Alternative data does NOT improve LR/SVM (honest negative, reported plainly); Google News counts least effective feature family
- No hyperparameter tuning; binary target ignores magnitude and neutral moves; predicted probabilities not checked vs precision/move size
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Line-movement-direction prediction template (predicting moves in a market-implied quantity) for bet-timing: OTHER (market/betting intelligence)
- Walk-forward + in-fold preprocessing discipline as evaluation template; audit GSE backtest pipelines for full-sample standardization look-ahead: TRUST-SIGNAL
- Ablation honesty: alt-data value can hide in model-class interaction (LR 52.8% vs AdaBoost 63.0%) — ablate per model class, not just per feature set: TRUST-SIGNAL
- Wikipedia page-traffic as a non-linear attention feature: OTHER (candidate alt-data signal for NFL line moves)
## Engine-actionable? (yes/no + one-line what)
Yes — build a line-movement-direction model (target = sign(close − current) on spread/total, market features + alt data like X volume/news counts/Wikipedia views, 78-style technical expansion on line series) under strict walk-forward evaluation with in-fold preprocessing re-fit, gated on >50% OOS balanced accuracy, to decide bet-timing (fire now vs wait).
