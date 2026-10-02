# docs/arxiv-program/research/2026-09-21/arxiv-deep/1705-dls-vs-machine-learning.md
## What it is (1-2 sentences)
Ledger entry for arXiv:2106.00175 (Abbas & Haider 2021): a head-to-head comparison of the cricket Duckworth-Lewis-Stern rain-rule formula vs supervised ML (Naive Bayes, neural nets, bagging, random forests) as mid-match win predictors, including a PSO-optimized DLS resource table and a per-team "Unpredictability Index." Verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
Par Score = Team1Runs × (1 − ResourceValue(X,Y)); PSO optimizing resource-table values (μ=10, c1=2, c2=2.5, 50 generations) with fitness = classification accuracy; ML classifiers trained per-over and per-over-range with 70/30 splits, using the D/L prediction itself as a feature; Unpredictability Index = D/L formula failure percentage at the 40th over per team (chase/defend × win/loss).
## Data sources named
CricInfo: 3,470 ODIs since 1971, 1,751 with over-by-over second-innings data (post-2001-06-07) → 63,000 over-level records; tied and rain-interrupted matches excluded.
## Findings (numbers and facts, not vibes)
- D/L accuracy: 78.12% on all 63,000 overs; 83.74% excluding first 20 overs.
- ML beat D/L at every over: 10th over 72.23% vs 80.97% (Bagging+NB); 20th 79.20% vs 82.80% (NN); 30th 85.90% vs 87.45% (NB); 40th 88.42% vs 88.98% (NN). Overall 0–50 overs: 78.12% vs 80.62% (NN).
- PSO-optimized resource table: 0–50 overs accuracy 79.25% → 80.25%; 20–50: 85.12% → 85.39%; per-over gains +0.3 to +2.8 pp. Dropping the monotonic-decrease constraint gave even higher PSO accuracy (accuracy vs monotonicity tradeoff, contrasting ledger 1704's monotonicity priors).
- Unpredictability Index: chasing wins — Sri Lanka 18.18% failure (rank 1); chasing losses — India 20.37% (rank 1, "collapses"); defending wins — England 21.95% (rank 1); defending losses — Australia 20.41% (rank 1).
- Limitations: no cross-validation, accuracy-only (no calibration/log-loss), D/L prediction used both as baseline and feature, rain-interrupted matches excluded (selection bias).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- ML beats classical formula at every match stage, biggest edge early (72.23% → 80.97% at 10th over): OTHER
- "Classical prediction as an ML feature" stacking trick: OTHER
- Per-team model-failure profiling (Unpredictability Index) as a diagnostic for systematic mispricing: OTHER
- Accuracy-vs-monotonicity tradeoff (constraints cost accuracy): OTHER
- Accuracy-only evaluation is unusable for staking without calibration: TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — stack a closed-form football WP baseline as a feature in the live ML win-probability model and compare accuracy AND log-loss at game-progression deciles, plus per-team Brier-score profiling to flag systematically mispriced teams.
