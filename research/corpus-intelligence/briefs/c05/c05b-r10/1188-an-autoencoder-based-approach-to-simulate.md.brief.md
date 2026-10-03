# arxiv-program/research/2026-09-21/arxiv-deep/1188-an-autoencoder-based-approach-to-simulate.md
## What it is (1-2 sentences)
Ledger deep read of Vaswani (2020, arXiv:2007.10257): a denoising autoencoder trained on team/player stats to "simulate" remaining 2019–20 UCL knockout matches with narrative what-if outcomes. Verdict: REJECT — no held-out forecasting metric exists, so nothing can be adopted or tested.
## Key metrics/methods (formulas where given, else "not specified")
- Denoising autoencoder: Gaussian-noise corruption, MSE reconstruction loss, Adam optimizer (learning rate 0.01), batch size 10.
- Preprocessing: MinMax scaling of all features to [0,1].
- Handcrafted priors: home/away flag; form = points from previous five games (3/1/0); experience = number of historical UCL matches.
- Fixtures tied on aggregate decided by shots on target (heuristic tiebreaker, not model output).
- Reported metrics: team embedding RMSE 0.1380 train / 0.1379 validation; player embedding RMSE 0.1127 train / 0.1126 validation — reconstruction error only, NOT forecasting skill.
## Data sources named
UEFA official website (team data), FBref and Global Sports Archive (player data); European Soccer Database scope: UCL knockout-stage matches only, 2014–2020, 157 matches. Code stated: github.com/ashwinvaswani/whatif.
## Findings (numbers and facts, not vibes)
- 157 UCL knockout matches, 2014–2020.
- Team embedding RMSE: train 0.1380, validation 0.1379. Player embedding RMSE: train 0.1127, validation 0.1126.
- Outcome claim is qualitative only (e.g., Bayern wins the final; what-if narratives).
- No baseline model, no accuracy, no calibration, no betting-return figure appears in the paper.
- Team attributes (exact): goals, attempts, shots on target, shots off target, blocked shots, woodwork, corners, offsides, possession, passes, passing accuracy, pass completions, distance covered, recoveries, tackles, clearances, blocks, cards, fouls. Player attributes: goals, shots, shots on target, assists, interceptions, crosses, fouls, offsides, minutes played.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Negative exemplar for the corpus: reconstruction RMSE is not a forecasting metric — a validation-shape warning for any embedding work — TRUST-SIGNAL
- GSE already has strictly stronger representation-learning work (TabTransformer 2606.09327, diffusion trajectory 2503.18589) — OTHER
- Cautionary note on the what-if/counterfactual idea: only meaningful with a supervised outcome head evaluated time-ordered vs. Elo/logistic baselines — OTHER
## Engine-actionable? (yes/no + one-line what)
No — no evaluated method to implement; only a cautionary pattern (reconstruction skill ≠ predictive skill) worth remembering for GSE's representation-learning lane.
