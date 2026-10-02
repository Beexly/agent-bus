# arxiv-program/research/2026-09-21/arxiv-deep/0409-applying-deep-learning-to-basketball-trajectories.md
## What it is (1-2 sentences)
An LSTM RNN trained on raw 0.5-second SportVu ball trajectories (X, Y, Z + game clock, 25 Hz) classifies NBA three-point attempts as make/miss; the sequence model beats static feature-engineered classifiers (elastic-net GLM, GBM) at every distance except 2 feet from the basket.
## Key metrics/methods (formulas where given, else "not specified")
No equations in the paper (authors forgo RNN math). Architecture: 2 stacked LSTM layers, 64 hidden units/layer, peephole connections, dropout 0.6, Adam lr 0.005, batch 64; per-timestep heads: softmax make/miss (cross-entropy) + mixture-density network (3 mixtures of tri-variate Gaussians, no MDN results reported). Input: 12 timesteps (~0.5 s) of (X, Y, Z, clock). Metric: AUC per distance-to-basket (2–8 ft). Baselines: logistic regression w/ Elastic Net (alpha 0.5); GBM 50 trees, default params (deliberately unoptimized).
## Data sources named
Public SportVu trajectory data scraped from NBA.com, beginning of the 2015-2016 season; >20,000 three-point attempts from 631 games; made-shot rate 35.7% (vs 35% league average). Ball position only (no player positions).
## Findings (numbers and facts, not vibes)
- RNN AUC by distance: 2 ft 0.93; 3 ft 0.913; 4 ft 0.906; 5 ft 0.880; 6 ft 0.873; 7 ft 0.841; 8 ft 0.843.
- Static GBM AUC (full engineered features): 2 ft 0.942; 3 ft 0.902; 4 ft 0.848; 5 ft 0.796; 6 ft 0.746; 7 ft 0.742; 8 ft 0.719.
- Static GLM AUC collapses with distance (2 ft 0.875 → 8 ft 0.558); RNN holds up far from the basket (0.843 at 8 ft vs GBM 0.719).
- GBM beats RNN only at 2 ft (0.942 vs 0.93). At 4 ft, half the training data gives RNN AUC 0.870 vs 0.906 full.
- Limitations per the file: 80/20 random split (no chronological or player holdout); baselines unoptimized; shooter/defender context ignored.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: sequence-modeling of tracked-ball trajectories (kick-quality grading for FGs/punts).
## Engine-actionable? (yes/no + one-line what)
yes — Replicate the 2-layer LSTM on NFL NGS ball-tracking frames for FG/punt trajectory make-prediction, chronological splits, tuned-GBM baseline, adoption gate ≥0.03 AUC over GBM on 2024 holdout.
