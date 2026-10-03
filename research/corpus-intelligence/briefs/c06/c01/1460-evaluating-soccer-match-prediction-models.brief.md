# arxiv-program/research/2026-09-21/arxiv-deep/1460-evaluating-soccer-match-prediction-models.md
## What it is (1-2 sentences)
A 2023 Soccer Prediction Challenge entry comparing deep neural networks (Inception+Transformer+MLP on a five-match recency matrix) against gradient-boosted trees (XGBoost/CatBoost, 205 features) on 736 hold-out matches. Verdict: pi-ratings alone beat every deep model on exact-score RMSE; the bookmaker entry beat everything on RPS (0.2063) — the paper's real contribution is the ratings-and-market baseline discipline plus the challenge protocol, not the architectures.
## Key metrics/methods (formulas where given, else "not specified")
- Rank Probability Score (cumulative, over ordered W/D/L) for probabilities; RMSE for exact home/away goal counts
- Deep: five-match recency matrix → Inception block + Transformer encoder + 10-layer MLP; LSTM+MLP, GRU+MLP baselines; XGBoost/CatBoost on 205 features incl. pi-rating features; baselines: league-average, team-average, pi-ratings alone, historical frequencies, always-home-win
- Training: three five-year windows, each with preceding five-year train, time-ordered validation rounds (2018–19, 2019–20, 2020–21)
## Data sources named
2023 Soccer Prediction Challenge dataset: 51 leagues, 2001–Apr 4 2023, 300,000+ matches; prediction set 736 matches, Apr 14–26 2023 (authors manually appended Apr 4–14 gap matches); code at github.com/calvinyeungck/Soccer-Prediction-Challenge-2023; dataset proprietary to challenge organizers
## Findings (numbers and facts, not vibes)
- Validation exact-score RMSE: Berrar pi-ratings 1.0047; team avg 1.0206; XGBoost+Berrar 1.0212; selected-feature CatBoost 1.2162; TE+MLP 1.5063
- Validation RPS: CatBoost+pi 0.2085; Inception+TE+MLP 0.2098; historical W/D/L 0.2303; always-home-win 0.4450
- Challenge test (736): authors 1.8169 RMSE / 0.2195 RPS vs winner 1.6235 vs bookmaker entry 0.2063 RPS
- Anti-pattern: 205-feature selection *hurt* (selected-feature CatBoost worst tree variant); deep models collapsed live vs validation (generalization issues conceded)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: ratings-first engine discipline — maintain a living baselines board (pi-ratings on nflverse back to 2006, de-vigged consensus, historical frequencies); no model ships unless it beats all three out-of-sample; blind one-season hold-out harness (736-game scale) scored by locked script; complex models REJECTED unless they beat pi-ratings AND de-vigged consensus by ≥0.003 Brier and ≥0.005 log-loss on both hold-out seasons
## Engine-actionable? (yes/no + one-line what)
Yes — build the baselines board + blind hold-out harness (~5 days total); adopt unconditionally as discipline; improvement experiment: XGBoost-vs-Transformer head-to-head on NFL spread residuals to test whether deep-model failure is soccer-specific.
