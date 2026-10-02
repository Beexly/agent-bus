# docs/arxiv-program/research/2026-09-21/arxiv-deep/1196-optimising-game-tactics-for-football.md
## What it is (1-2 sentences)
Deep read of arXiv:2003.10294 (Beal et al. 2020, AAMAS): soccer coaching decision-support modeling pre-match as a Bayesian game (formation/style optimization under incomplete opponent info) and in-match as a stochastic game (substitution optimization), evaluated on 760 EPL matches. Verdict: REJECT — coaching tactics on proprietary data, no calibrated forecast, no market test, no GSE lane to receive it.
## Key metrics/methods (formulas where given, else "not specified")
- Pre-match Bayesian game G_B = (T, A, Θ, p, u): actions = formation + style + players; opponent-style beliefs from k-means style clusters; payoff u = weighted result probability (win 2, draw 1, loss 0). Optimization rules: best response, spiteful (min opponent payoff), minmax.
- Formation prediction: RBF-kernel SVM on prior-5-games-vs-same-style-cluster features (30 formations). Payoff model: 3-layer fully-connected ReLU DNN with categorical cross-entropy (loss −(1/N)Σlog p_model[y_i ∈ O_{y_i}]) predicting home/draw/away from styles, formations, Dixon-Coles-derived strengths.
- In-match stochastic game G_S = (X, T, S(x), π, u): scoreline states 0–0; transitions π learned per-state via RBF-SVM; substitution payoffs add bench-player centrality and remaining time; 64 substitution combinations per state; aggressive vs reserved policies.
- Validation: 70/30 train-test splits with k-fold CV (10-fold formation/transitions, 5-fold payoff) — NOT time-ordered (random splits, leakage for deployment).
## Data sources named
760 EPL matches (2017/18 + 2018/19), event-by-event data (event type, pitch coordinates, outcome) provided by StatsBomb — proprietary for EPL (not in public open-data release). No odds, no market data. Substitutes' identities unavailable (authors substitute all squad players vs actual 7-man bench).
## Findings (numbers and facts, not vibes)
- Formation prediction: 96.21% accuracy, precision 0.9867, recall 0.9135, F1 0.9441 (10-fold CV).
- Optimization "closeness" to real manager choices: best response 35.3%, spiteful 59.7%, minmax 44.6% (away teams: spiteful 69%).
- Win-probability boost vs actual tactics: best response +16.1% (p=0.0001), minmax +12.7%; spiteful reduces loss probability by 1.4% — model-vs-model counterfactuals, not betting edges.
- State-transition models: mean accuracy 87.5% (std 4.8%) per state; with substitution/time features 95.5% (std 4.5%).
- Managers matched recommended sub 14.75% (aggressive) / 14.11% (reserved) of the time, ~40% same-position.
- Hard negatives: random (non-time-ordered) CV splits (leakage); no market interface — DNN probabilities never calibrated, never proper-scored, never tested against odds/CLV; coaching product, not forecasting; soccer/EPL-only with no NFL analog in GSE's stack.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING tactical optimization (formation/substitution game theory): COACHING — but GSE operates no coaching lane; tagged COACHING only, no actionable thread.
- Counterfactual "+16.1% win probability" is model-vs-model, not a calibrated betting edge — illustrates why model-vs-model claims need market tests: TRUST-SIGNAL (negative example).
- Non-time-ordered random CV within pooled seasons = deployment leakage: TRUST-SIGNAL (validation-hygiene negative example).
## Engine-actionable? (yes/no + one-line what)
no — REJECT: coaching decision-support for soccer on proprietary data with no calibrated forecast and no market test; no GSE prediction/calibration/fantasy lane can receive it (nearest fragment, opponent-formation prediction, has no NFL analog in the spread/total/prop stack).
