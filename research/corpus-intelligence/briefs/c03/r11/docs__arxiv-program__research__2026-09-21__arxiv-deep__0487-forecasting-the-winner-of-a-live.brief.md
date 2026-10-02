# docs/arxiv-program/research/2026-09-21/arxiv-deep/0487-forecasting-the-winner-of-a-live.md
## What it is (1-2 sentences)
Deep-read of arXiv:2609.07617v1 (Xie & Muppidi, 2026) on forecasting live tennis match winners, comparing five approaches (Markov score recursion variants, Bayesian-shrinkage live updates, HGBM on live features, and a hybrid "Trace" stack). Verdict: ADAPT — the Trace recipe (structural model + Elo pregame prior + shrinkage-tuned live inputs stacked in a gradient booster) ports to NFL live win probability.
## Key metrics/methods (formulas where given, else "not specified")
- Markov score recursion: V(s) = q(s)V(T1(s)) + (1-q(s))V(T2(s)); deuce D(q) = q^2/(q^2+(1-q)^2).
- Elo update: R_{i,t+1} = R_{i,t} + K_{i,t}(S_{i,t} - q_{i,t}), K_{i,t} = 250/(m_{i,t}+5)^0.4; Elo gap d -> serve edge e = clip(alpha*d, -0.15, 0.15), alpha grid-searched (selected 1.3e-4).
- Bayesian shrinkage of live serve rate toward Elo prior: theta_hat = (n/(n+k))theta_live + (k/(n+k))theta_prior; selected kappa = 640/160/40 at 25/50/75% match progress (shrinkage weakens as evidence accumulates).
- Trace hybrid: stack [p_Markov, p_shrink, logit(p_Markov), logit(p_shrink), p_shrink - p_Markov, live features] in HistGradientBoostingClassifier; metrics: accuracy + binary log loss at 25/50/75% progress checkpoints + all points; calibration via reliability diagrams.
## Data sources named
Jeff Sackmann Grand Slam point-by-point data (github.com/JeffSackmann/tennis_slam_pointbypoint): 8,222 matches, 1,505,355 point-level states; Jeff Sackmann ATP/WTA match results for Elo (matched to 96.0% of matches); chronological splits train 2011-2021 / val 2022 / test 2023-2024. Code: github.com/cx-57/live-tennis-research.
## Findings (numbers and facts, not vibes)
- Trace (test set): accuracy 0.7606/0.8215/0.8834 at 25/50/75% progress, 77.84% all-points; log loss 0.4753/0.3530/0.2002 — highest accuracy and lowest log loss in every column vs all four baselines.
- Serve-shrink Markov: 0.7564/0.7946/0.8720 accuracy; log loss 0.5142/0.4266/0.2842 — beats Elo-asymmetric Markov on log loss at every checkpoint despite similar accuracy (better probability quality).
- HGBM alone: weak early (0.6944 acc at 25%, below symmetric Markov) but strongest single model late (75%: acc 0.8738, log loss 0.2299); Trace's largest lead over baselines is mid-match (~40-70% progress).
- Shrinkage kappa falls 640 -> 160 -> 40 as the match progresses (more live evidence = less prior weight).
- DeepTennis LSTM external benchmark (leakage-suspect non-chronological split, flagged by authors): 73.2/84.9/89.2 at checkpoints vs Trace 77.66/83.84/88.96 on the same split.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Hybrid stack recipe (structural model + shrunk live estimate + disagreement feature p_S-p_M in GBM) -> OTHER (directly transfers to NFL live win-probability model design)
- Shrinkage kappa decay schedule 640/160/40 as evidence accumulates -> OTHER (same principle applies to shrinking in-game efficiency metrics like EPA/play toward pregame priors)
- Live-features GBM weak early but strongest late-game -> OTHER (feature regime weighting matters by game phase)
- Log-loss vs accuracy divergence: serve-shrink matches Elo-Markov on accuracy but wins on log loss -> TRUST-SIGNAL (calibration/probability quality matters for published probabilities, not just accuracy)
## Engine-actionable? (yes/no + one-line what)
Yes — port Trace to NFL live win probability: structural WP surface (or nflfastR wp) + Bayesian-shrinkage live EPA toward pregame prior + HGBM stack on [both WPs, logits, disagreement, live features], trained on chronological nflverse splits; gate is >=0.01 log-loss beat over nflfastR wp at >=2 of 3 checkpoints with ECE within 0.005.
