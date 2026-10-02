# docs/arxiv-program/research/2026-09-21/arxiv-deep/0187-fantasy-cricket-team-prediction-dream11.md
## What it is (1-2 sentences)
A full-paper deep-read of Sachin Kumar S et al. (2022, arXiv:2209.06999v1): an undergraduate Dream11 fantasy-cricket project predicting player scores with Extra Trees regression and selecting 11-player teams under credit constraints via a greedy + knapsack combination. The verdict is REJECT: the headline R^2 of 0.99/0.97 is target leakage, there is no prospective validation, and the selection idea is a weaker duplicate of the existing MILP DFS optimizer (ledger 0010).
## Key metrics/methods (formulas where given, else "not specified")
- Pipeline: scrape/convert YAML->CSV, EDA, feature engineering, Plotly visualizations, PyCaret comparison of 22 regressors on a 10% sample -> Extra Trees Regressor selected, retrain on 50% sample, test on other 50%; inference = average n per-row predictions over historical rows matching (player, format, teams, venue); team selection = customknapSack DP over credits W=100 maximizing predicted score (code listing only, no formal equations stated).
- Splits random, not time-ordered; no prospective (future-match) or walk-forward validation. The paper's split statement "Built the Model on 0.07% of Dataset and tested it on 0.93%" is incoherent as written.
## Data sources named
3100 cricket matches from cricsheet.org (1529 ODI, 756 IPL, 815 T20); ball-by-ball YAML converted via yorkpy; ESPN Cricinfo. Raw data public; authors' engineered tables and code not released. Deployment via Flask + Airflow on a GCP VM.
## Findings (numbers and facts, not vibes)
- ETR on 100% dataset, 7:3 split: R^2 0.99 for batsman Dream-11 score prediction, 0.97 for bowler — the authors call R^2 ~= 0.99 "quite alarming" then accept it after inspecting learning curves and feature importance.
- Critical leakage fact: training features include runs, balls, 4s, 6s, 50s, 100s (batsman) and wickets, runs conceded, maidens, econrate (bowler) — the same-match statistics from which a Dream-11 score is deterministically computed, so R^2 ~= 0.99 is arithmetic, not prediction. Their "not overfit" defense ("correlation between the features chosen and label to be predicted is very high") describes the leakage.
- The validated model (trained with leaked features) is not the deployed model (which substitutes historical averages at inference, since same-match stats are unavailable) — the reported R^2 does not apply to the real inference path.
- No uncertainty quantification, no calibration, no comparison against a naive historical-average baseline (which is likely all the deployed system amounts to). Cricket-only; Dream11 scoring/credits do not transfer to NFL DFS.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: duplicate (weaker) of the existing GSE MILP DFS optimizer (ledger 0010) for constrained team selection; the paper's only lesson for the engine is a leakage caution — any fantasy-score predictor with same-match stats as features is arithmetic, not prediction.
- TRUST-SIGNAL: a textbook target-leakage example for the intake corpus — R^2 ~= 0.99 with pre-match-infeasible features is a reject signal, not an adoption signal.
## Engine-actionable? (yes/no + one-line what)
No — permanently rejected: the predictive component is invalid (target leakage), the domain is cricket-only, and constrained team selection is already implemented more rigorously in GSE's existing MILP DFS optimizer.
