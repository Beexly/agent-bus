# docs/arxiv-program/research/2026-09-21/arxiv-deep/0428-explainable-expected-goal-models-for-performance.md
## What it is (1-2 sentences)
Deep-read ledger of Cavus & Biecek (2022) "Explainable expected goal models for performance analysis in football analytics" (arXiv:2206.07212v2): trains xG models on 315k shots and explains them with aggregated ceteris-paribus profiles (AP), a "semi-global" per-player/per-team what-if explainer. Verdict: ADOPT the AP explanation layer for GSE prop what-if analysis; REJECT the paper's ROSE-oversampled random forest model (its Brier/log-loss on untouched data is worse than the plain model).
## Key metrics/methods (formulas where given, else "not specified")
- Aggregated profile: ĝ_AP^j(z) = (1/k) Σ_{i=1}^k f(x_i^{j|z}); population form g_AP^j(z) = E_X^{−j}[f(X^{j|z})]; sits between local CP profiles and global PDP.
- Distance/angle from normalized pitch: X_i^{DTG} = sqrt([105−(L_i×105)]² + [34−(W_i×68)²]); angle formula given as paper Eq. 3.
- xG_{player/team} = Σ f(X_i) over that player's/team's shots.
- Metrics reported: recall, precision, F1, accuracy, AUC, MCC, Brier score, log-loss, balanced accuracy.
## Data sources named
315,430 shots (33,656 goals, ~10.66%) from 12,655 matches, 7 seasons (2014–15 to 2020–21) of Europe's top five leagues, scraped from Understat via the worldfootballR R package; 1,012 own-goal shots excluded; R code at github.com/mcavs/Explainable_xG_model_paper.
## Findings (numbers and facts, not vibes)
- Random forest results: over-sampled — recall 0.958, precision 0.922, F1 0.940, accuracy 0.939, AUC 0.985, MCC 0.879, Brier 0.071, log-loss 0.270; original-data — recall 0.304, precision 0.888, F1 0.453, accuracy 0.921, AUC 0.975, MCC 0.493, Brier 0.051, log-loss 0.173. Reader's note: the ORIGINAL-data model has better Brier (0.051) and log-loss (0.173) than the "winning" over-sampled model — the headline metrics are inflated by evaluating on over-sampled test data.
- Literature comparison: the over-sampled RF bests others on precision/F1/AUC/Brier/MAE; Fernandez et al.'s XGBoost has lower log-loss (0.254 vs 0.270).
- Schalke 04 vs Bayern Munich 2021-01-24: Schalke 0 goals, xG 2.67, 13 shots; Bayern 4 goals, xG 9.59, 31 shots. AP what-ifs: Schalke mean distance 18m→15m raises per-shot xG ~40%; mean angle 25°→35° raises per-shot xG ~20%.
- 2020/21 player seasons: Burak Yilmaz 16 goals / xG 24.77 / 66 shots; Messi 30 / 70.00 / 195; Lewandowski 40 / 65.71 / 132. All three shooting from 15m raises per-shot xG ~20%; Lewandowski's AP reaches ~0.5 avg xG at 50°.
- Cautionary finding: PDP curves for distance-to-goal differ across original/over/under-sampled models — resampling changes model behavior, not just class balance (paper's own §4).
- Leakage flaw flagged by reader: random 80/20 split over seven pooled seasons (future in train, past in test); no temporal validity.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- AP what-if profiles port to NFL prop analysis ("what if this WR's aDOT were 2 yards shorter?") — OTHER (explanation/tooling layer).
- Coverage-conditional AP (aDOT profile split by man vs. zone) is the suggested improvement — SCHEME.
- No QB behavior, coaching, OL, or trust-quote content in the file.
## Engine-actionable? (yes/no + one-line what)
Yes — build the AP what-if harness as a pure prediction-averaging layer over existing house expected-metric models (no new training): per-player/per-team ceteris-paribus profiles over aDOT etc., with bootstrap CIs and shaded out-of-support regions; gates: Test 1 fidelity for ≥16/20 players, Test 2 Spearman vs global PDP. Permanently REJECT ROSE-style over-sampling for GSE probability models.
