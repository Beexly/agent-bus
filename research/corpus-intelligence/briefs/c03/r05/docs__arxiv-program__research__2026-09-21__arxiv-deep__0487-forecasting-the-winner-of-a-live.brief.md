# docs/arxiv-program/research/2026-09-21/arxiv-deep/0487-forecasting-the-winner-of-a-live.md
## What it is (1-2 sentences)
Deep-read ledger of Xie & Muppidi (2026) "Forecasting the Winner of a Live Tennis Match" — compares five approaches integrating pre-match strength and live in-match info within a strictly chronological evaluation, introducing the hybrid Trace architecture: Markov recursion + Elo pre-match prior + Bayesian-shrinkage live updates, stacked with live features in a histogram gradient-boosting model. Verdict: ADAPT — the hybrid recipe ports directly to NFL live win-probability modeling.

## Key metrics/methods (formulas where given, else "not specified")
- Markov score recursion: V(s) = q(s)V(T1(s)) + (1-q(s))V(T2(s)); deuce D(q) = q^2/(q^2+(1-q)^2).
- Elo: q_{i,t} = 1/(1+10^{(Rj,t-Ri,t)/400}); R_{i,t+1} = R_{i,t} + K_{i,t}(S_{i,t}-q_{i,t}), K_{i,t} = 250/(m_{i,t}+5)^{0.4}.
- Elo->serve edge: e = clip(alpha*d, -0.15, 0.15); pa = clip(beta+e, 0.45, 0.88), pb = clip(beta-e, 0.45, 0.88); selected (beta,alpha) = (0.64, 1.3e-4) at 25%, (0.59, 1.3e-4) at 50% and 75%.
- Bayesian shrinkage of live serve rate toward Elo prior: theta_hat = (n/(n+kappa))theta_hat_live + (kappa/(n+kappa))theta_prior; kappa grid {40,80,160,320,640} -> selected 640/160/40 at 25/50/75% (shrinkage weakens as the match progresses).
- Trace stack: x(s) = [p_M, p_S, logit(p_M), logit(p_S), p_S - p_M, z(s)] -> HGBM; configs (lr, max_leaf_nodes, l2) in {(0.03,7,1.0),(0.03,15,1.0),(0.05,7,1.0),(0.05,15,3.0)}; early stopping; max 250 iterations.

## Data sources named
Jeff Sackmann Grand Slam point-by-point data (github.com/JeffSackmann/tennis_slam_pointbypoint): 8,222 matches, 1,505,355 point-level prediction states after cleaning (21.8% excluded); Jeff Sackmann ATP/WTA match results for Elo (matched to 96.0% of matches). Code: https://github.com/cx-57/live-tennis-research. Chronological splits: train 2011–2021, val 2022, test 2023–2024.

## Findings (numbers and facts, not vibes)
- Accuracy (test, 25%/50%/75%/all-points): Trace 0.7606/0.8215/0.8834/77.84% — highest in every column; largest lead mid-match (~40–70% progress).
- Log loss (test, 25/50/75%): Trace 0.4753/0.3530/0.2002 — lowest at all checkpoints. Serve-shrink beats Elo-asymmetric on log loss at every checkpoint (0.5142/0.4266/0.2842 vs 0.5210/0.4549/0.3096).
- HGBM alone weak early (below symmetric Markov at 25%: acc 0.6944 vs 0.6851) but strongest single model late (75%: acc 0.8738, log loss 0.2299).
- Trace well calibrated (Fig. 3), especially at 25% and 50% progress.
- Serve-shrink kappa falls 640->160->40 as evidence accumulates.
- DeepTennis LSTM comparison: 79.5% overall on leakage-suspect non-chronological split; Trace 81.30% all-points on the same split.
- WTA accuracy curves fluctuate more than ATP (hypothesis: 66% vs 79% service-hold rates; untested).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Hybrid stacking of structural-model outputs + their logits + their disagreement + live features in a GBM — OTHER (live-WP architecture).
- Bayesian shrinkage of live stats toward pregame prior with kappa decaying 640->160->40 as evidence accumulates — OTHER (live-update mechanic).
- Pure-ML model weak early but strongest late — TRUST-SIGNAL (model-selection guidance by game stage).
- Trace's mid-match lead (~40–70% progress) — OTHER (where live WP adds most value).
- Improvement experiment: add live line movement (pregame vs current live spread) as a stack input — OTHER (market-relative extension for GSE).

## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL live-WP Trace-port: precomputed WP surface (structural) + shrinkage-of-live-EPA-toward-pregame-prior + HGBM stack with live features, gated by >=0.01 log-loss beat vs nflfastR wp at >=2 of 3 progress checkpoints on 2024–2025 with ECE within 0.005.
