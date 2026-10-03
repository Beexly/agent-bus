# docs/arxiv-program/research/2026-09-21/arxiv-deep/0395-inferring-player-location-in-sports-matches.md

## What it is (1-2 sentences)
Inferring Player Location in Sports Matches (arXiv:2302.06569v1, Everett et al., AAMAS 2023): "Agent Imputer," a Time-Aware LSTM + SAGEConv GNN, reconstructs all 22 soccer player positions from sparse event data (~95% missing, one observed agent per timestep) with 6.9 m mean error, enabling tracking-grade analytics without optical tracking.

## Key metrics/methods (formulas where given, else "not specified")
- Problem: N agents, mask M_t^n = 1 iff agent n observed at t; predict Φ̂ (T×N×2) minimizing Euclidean distance.
- 15 engineered features per agent per timestep: prevAgentTime/X/Y, nextAgentTime/X/Y (future info — a smoother, not a filter), avAgentX/Y, agentRole (16 roles), agentSide, agentObserved, goalDiff; global eventX/Y, eventType. Post-embedding I=24.
- Architecture: input window L=5 events centered on t (B×N×L×I, B=128) → shared bidirectional Time-Aware LSTM (H_1=100, irregular-Δt cell-memory discount) → dense+ReLU (H_2=50) → fully-connected graph 2-layer SAGEConv (H_3=64, H_4=32, mean aggregation) → dense+ReLU → (B×N×2).
- Training: tracking data as targets; loss = mean Euclidean distance; 150 epochs, batch 128, AdamW, lr 0.002, ≤3 h per fold on V100 32 GB. No formal hyperparameter tuning.
- Metric: mean Euclidean error in X, Y, XY (meters); 5-fold averages with 95% CIs.

## Data sources named
- 34 games K League 1 (Bepro Group Ltd, proprietary — not public): ~64,000 events, ~1.4 million tracking locations; 31/3 train/test (~91.2%/8.8%); geometry scaled to 105×68 m pitch.
- Code: https://github.com/GregSoton/PlayerImputation (no license stated — check before vendoring).

## Findings (numbers and facts, not vibes)
- Position imputation (Table 1, test, meters): Agent Imputer X/Y/XY = 4.29±0.09 / 4.41±0.11 / 6.88±0.10 vs Time-Aware LSTM 7.09±0.06, GNN 8.32±0.25, XGBoost 9.26±0.26, best naive baseline 18.01±0.46 → ~61.8% error reduction vs best naive (~62% per abstract). [SCHEME, TRUST-SIGNAL]
- Time-decay analysis (Fig. 5): XGBoost/GNN degrade fast with time-since-observed; Agent Imputer and LSTM-only decay slower to a lower plateau — temporal modeling is the essential component (LSTM-only beats GNN-only). [SCHEME]
- Error by role (Fig. 4): goalkeepers most predictable; defenders > attackers; wide players harder in X (4.99 m vs 4.15 m central) but easier in Y (4.35 m vs 5.02 m). [SCHEME, COACHING]
- End-of-half unpredictability (§5.3.2): error significantly higher at end of halves than mid-half (t-tests, p<0.01 both halves) — corroborates fatigue/loss-of-structure intuition. [COACHING]
- Distance covered (Table 2): abs % error by role 2.79–6.03% (e.g. central midfielder pred 9.37 km vs true 9.48 km, 3.66±1.26%); raw predictions overestimated distance by 11.5% because 29.9% of events occur within 1 s of the previous event, producing superhuman position jumps (fixed by merging sub-second events). [COACHING, TRUST-SIGNAL]
- Pitch control (Table 3, MAE vs tracking ground truth): Agent Imputer 0.130±0.001 vs LSTM-only 0.135, GNN 0.149, XGBoost 0.150, baselines 0.272–0.305; learns structured defensive lines where other models stack defenders vertically (Fig. 6). [SCHEME]
- Limitations: uses future information (next-observation features) — cannot run live; deterministic point estimates, no uncertainty quantification; 6.9 m error is good for heatmaps/pitch control but far too coarse for micro-events like separation at catch point. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Direct template for GSE's public-tracking-replacement gap: impute all-22 NFL positions from play-by-play/charting; rebuild features around down, distance, yard line, play type, personnel, formation, pre-snap motion, score, time remaining; train on Big Data Bowl tracking as ground truth with nflverse play-by-play as sparse input. (SCHEME, OTHER)
- Composes with 0394 (LED diffusion): impute all-22 from play-by-play, then forecast future trajectories with LED. (SCHEME, OTHER)
- Imputed positions must never be presented as measured tracking without per-role error bounds; smoother variant must not be used for live prediction; build a causal variant (drop future features) and measure the accuracy cost. (TRUST-SIGNAL)
- Fatigue lens: end-of-half error elevation suggests loss of structure under fatigue — an independent signal channel for 4th-quarter performance degradation. (COACHING)

## Engine-actionable? (yes/no + one-line what)
Yes — the most directly transferable paper of the five: reimplement the Time-Aware LSTM + GNN imputer on NFL play-by-play with BDB tracking ground truth, accepting only if it beats time-scaled interpolation by ≥40% per the file's own gate.
