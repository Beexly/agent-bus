# docs/arxiv-program/research/2026-09-21/arxiv-deep/0517-fantasy-football-prediction.md
## What it is (1-2 sentences)
Deep-read of arXiv:1505.06918v1 (Lutz, Univ. of Massachusetts Amherst, 2015) predicting weekly fantasy points of NFL QBs (standard scoring) with SVR and a single-hidden-layer neural net on 2009-2014 data. Verdict: REJECT — the paper's own conclusion is that errors are too large to be useful; no baselines, QB-only, obsolete data; GSE's projection stack strictly dominates.
## Key metrics/methods (formulas where given, else "not specified")
- SVR: f_SVR(x) = sum_d w_d x_d + b; (w*,b*) = argmin_{w,b} (C/N) sum_i V_epsilon(y_i - (x_i w + b)) + ||w||^2_2, V_epsilon = epsilon-insensitive loss; grid over kernel {RBF, sigmoid, linear, polynomial}, C in {0.25,0.5,0.75,1.0}, epsilon 0.05-0.25, gamma {0,0.05,0.1,0.15}, degree {2,3}; feature scaling [0,1], feature selection {none, manual, RFECV}.
- NN (PyBrain): one hidden layer, h_k = 1/(1+exp(-(sum_d w_dk + b_dk))), y_hat = sum_k w^o_k h_k + b^o; grid epochs {10,50,100,1000} x hidden units {10,25,50,100} x {sigmoid,tanh} = 32 configs; no normalization.
- EWMA proposal: S_t = alpha G_t + (1-alpha) S_{t-1} (portable feature-engineering idea: replace last-game/last-10-average pairs).
- Metrics: RMSE, MAE, MRE = |y-prediction|/prediction.
## Data sources named
NFL game data 2009-2014 via the nflgame API (BurntSushi/nflgame, sourced from NFL.com) — defunct for current seasons. Train 2010-2013 (2,167 QB-game cases), test 2014 (553 cases). No code or data released.
## Findings (numbers and facts, not vibes)
- Best SVR (RFECV, C=0.25, epsilon=0.25, linear kernel): RMSE 7.759 / MAE 6.221 / MRE 0.448 (all test cases); RMSE 7.833 / MAE 6.248 / MRE 0.418 (top-24 QBs). Manual/no feature selection within ~0.05 RMSE.
- RFECV kept only 4 features: age, years pro, passing attempts (last 10), successful passing 2-pt conversions (last 10) — touchdowns dropped (author flags as suspicious; symptom of correlated features + small data).
- Best neural net (50 epochs, 50 hidden, sigmoid): top-24 RMSE 7.868 / MAE 6.235 / MRE 0.413 — slightly better than SVR on top-24 MAE/MRE; all other 31 configs worse.
- Author's own verdict: "the errors were still very high. For example, the MAE of the best prediction was more than 6 points, which can make a difference in most Fantasy Football games."
- Methodological holes: no baseline of any kind (not even "repeat last week's score"); test = one season; QB-only; MRE defined with prediction (not actual) in the denominator; top-24 evaluation subset selected on 2014 outcomes (mild selection bias).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- EWMA form features (S_t = alpha G_t + (1-alpha) S_{t-1}) replacing last-game/last-10-average pairs -> QB-BEHAVIOR (a two-line feature change to evaluate in GSE's projection model if not already present)
- Degenerate RFECV feature set (keeps 2-pt conversions, drops TDs) -> OTHER (cautionary: correlated features + small data produce misleading feature selection; relevant to any GSE feature-selection step)
- Missing baselines makes results uninterpretable -> TRUST-SIGNAL (reinforces GSE's gate discipline: no claim without a stated trivial baseline, e.g. "repeat last-3-week average")
## Engine-actionable? (yes/no + one-line what)
No — nothing in the paper meets the implementation bar; only the portable EWMA form-feature idea (S_t = alpha G_t + (1-alpha) S_{t-1}) is a candidate for an afternoon evaluation inside the existing GSE projection model, testing EWMA(alpha tuned) vs last-10-average features by MAE on 2016-2024 QB fantasy points.
