# arxiv-program/research/2026-09-21/arxiv-deep/1534-prediction-of-football-player-value-using.md

## What it is (1-2 sentences)
Research ledger on "Prediction of Football Player Value using Bayesian Ensemble Approach" (Lee, Tama, Cha 2022, arXiv:2206.13246) — a LightGBM regression predicting soccer players' SOFIFA market values with Optuna TPE hyperparameter tuning. The ledger's verdict is REJECT: no Bayesian forecasting, transfer-fee target has no mapping to GSE's picks or projections.

## Key metrics/methods (formulas where given, else "not specified")
- LightGBM regressor, hyperparameter search via Tree-structured Parzen Estimator (TPE) in Optuna (independent and multivariate TPE, pruning on/off); baselines: linear regression, lasso, elastic net, kernel ridge, GBDT, default LightGBM; 10-fold CV, RMSE/MAE; SHAP on best model. No model equations stated (qualitative description only).
- Reported search spaces: learning rate [0,1] default 0.1; n_estimators [50,3000] default 100. 100 training repetitions per result.

## Data sources named
2,720 players from 20 top-division European clubs (top-4 of five leagues) in 2021–2022 UCL; 2022 SOFIFA dataset (sofifa.com, ~55 ability attributes) merged with 2021–2022 WhoScored big-five data; ground truth = SOFIFA market value. No code or dataset link in the extracted text.

## Findings (numbers and facts, not vibes)
- Best validation RMSE 716.38 (I-TPE LightGBM) vs 949.94 (GBDT best); optimized LightGBM claimed ~3.8×/1.4×/1.8× better than regression baselines/GBDT/plain LightGBM on RMSE; I-TPE ~1.8× better than unoptimized GBM on RMSE and MAE.
- SHAP top features: 'Overall', 'Release_Clause', 'Age', 'BOV'; Release_Clause correlation 0.96 with target.
- Ledger's adversarial notes: 'Release_Clause' (r=0.96) and 'Wage' are near-price variables (borderline tautological); cross-sectional design predicts listed values, not realized future fees; "Bayesian" is only Bayesian hyperparameter optimization, not Bayesian inference; SOFIFA values are video-game estimates.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — no GSE-relevant connection; the ledger explicitly states "no transfer-fee or player-valuation modeling anywhere in the corpus" is not even a gap — it is off-mission (soccer transfer economics, not prediction).
- TRUST-SIGNAL — negative example: near-leakage predictors (release clause) inflating accuracy; a reminder to exclude price-adjacent features in any valuation work.

## Engine-actionable? (yes/no + one-line what)
No — REJECT; nothing to build; portable fragment ("Optuna TPE for GBM tuning + SHAP audit") is standard practice requiring no paper.
