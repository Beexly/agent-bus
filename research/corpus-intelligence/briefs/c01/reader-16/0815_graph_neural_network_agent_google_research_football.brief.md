# arxiv-program/research/2026-09-21/arxiv-deep/0815-graph-neural-network-agent-google-research-football.md
## What it is (1-2 sentences)
Research deep-read of arXiv:2204.11142 (Liu et al., 2022): a DQN agent for Google Research Football (soccer) whose Q-network is a GCN or GAT over a 24-node player graph instead of a CNN over rasterized observations. Reader verdict: ADAPT the player-graph representation only; the DQN apparatus and training protocol are not to be copied.

## Key metrics/methods (formulas where given, else "not specified")
- Graph: 24 nodes (22 players, 1 ball, 1 "any other information" node), 9 features per node (exact 9 not enumerated — gap). Edge definition NOT specified (complete? k-NN? distance threshold? — a real gap).
- GCN: 2 graph-convolution layers, 9 input features/node → 32 hidden → 19 outputs (one Q-value per action; action_size=19).
- GAT: 2 graph-attention layers + FC layer; attention e_ij = a(Wh_i, Wh_j) (Eq. 1); α_ij = softmax_j(e_ij) = exp(e_ij)/Σ_{k∈N_i} exp(e_ik) (Eq. 2).
- DQN: TD Local = Q(s,a;θ); TD Target = r + γ·max_{a'} Q(s',a';θ⁻); Loss = signed TD error (paper prints Eq. 5 as the signed error; actual optimized loss presumably its square — not stated).
- Hyperparameters (exact as stated): lr 0.0001, batch size 1 ("to prevent the unsteadiness of learning" —sic), gradient clipping 0.7, 1 epoch = 3,000 episodes, 100 epochs ≈ 0.3M steps. γ, ε-schedule, replay size, target-update frequency all unstated — not reproducible.
- Two networks: Q_network_local (trained every step from replay) and Q_network_target (copied every few steps); ε-greedy action selection; rewards = scoring + checkpoints (ball-possession region rewards).

## Data sources named
- No static dataset — training data generated online by self-play in gfootball simulator v2.6 (open-source: google-research/football).
- Scenarios: 11v11 easy stochastic (difficulty 0.05), 11v11 hard stochastic (0.95), 11v11 competition (halftime games, 0.6), 11v11 Kaggle (1.0).
- Hardware: Intel E5-2678 v3, NVIDIA Tesla V100 32GB, 40GB RAM; PyTorch 1.8.1, CUDA 11.2, cuDNN 8. No public repo for this paper's code.

## Findings (numbers and facts, not vibes)
- Average score difference vs built-in AI (negative = losing; exact): GCN: easy −0.37 (rising curve), hard −2.23, competition −1.62, Kaggle −2.52. GAT: easy −1.13 (peaked −0.43 at epoch ~10 then declined), hard −1.41 (steadily rising — best GAT), competition −2.62, Kaggle −2.59 (declining reward).
- Table III (exact): Easy — PPO 0.05, IMPALA −0.01, DQN −1.17, GCN −0.37, GAT −1.21; Hard — PPO −1.32, IMPALA −1.38, DQN −2.12, GCN −2.23, GAT −1.41; steps: baselines 20M, GCN/GAT 0.3M.
- File's adversarial read: every reported number is negative (agents never beat the built-in AI); the "efficiency" claim compares 0.3M-step runs to 20M-step baselines (66× compute difference) — not a controlled comparison; equal-steps comparison was never run.
- GAT collapses on easy (−0.43 → −1.13) and Kaggle (declining reward) — paper hand-waves as "schema too easy/hard" rather than diagnosing attention instability.
- Existing-research map: "GNN sports outcomes (2207.14124)" already absorbed (different paper — scores, not player graphs); nothing covers graph representations of tracking data — no duplication.
- Proposed GSE adaptation: supervised GCN (2-layer, hidden 32) on per-play graphs from NFL NGS tracking (22 player nodes + ball node; node features x, y, speed, accel, orientation, team indicator, down/distance context; complete graph with distance-weighted adjacency), predicting play EPA bucket; train nflverse 2020–2024 + NGS tracking (Big Data Bowl format), test 2025. Baseline: GBM on hand-engineered NGS aggregates. Pass gate: ≥5% EPA-RMSE reduction on 2025 holdout; GAT variant's edge weights must correlate with football structure (nearest defenders/opponents get weight).
- Improvement experiment: (1) spatio-temporal GCN (snap−1s … +2s frames) instead of static frame; (2) learned adjacency sparsified — if edges recover OL-DL/WR-CB matchups, edge weights become interpretable matchup features for the pick model.
- Effort estimate: ~2–3 weeks for data join + supervised GCN baseline; skip RL entirely.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Representation transfer: players-as-graph (24 nodes × 9 features) is directly portable to NFL NGS tracking data for play-outcome modeling — representation-only adaptation, discard DQN/RL scaffolding.
- [OL] Learned edge weights that recover OL-DL matchups would become interpretable pass-protection/pressure features (pressure-rate drivers) — named as the improvement experiment, not yet run.
- [QB-BEHAVIOR] Proposed uses: separation-vs-man-coverage embeddings from GAT edges; scramble/design distinction not addressed — INFERENCE: temporal graph features could split scramble vs designed-run movement, but the paper says nothing about it.
- [SCHEME] Spatio-temporal GCN hypothesis: route development and closing speed are temporal phenomena, so multi-frame graph beats static frame on EPA prediction.
- [TRUST-SIGNAL] Sanity-check gate named: GAT edge weights must correlate with football structure (nearest defenders/opponents) — a check the paper itself never ran.
- [OTHER] File aligns with Garrett's NGS program (tracking-data representations "on-strategy"); architecture earns no prior credit from this paper given its own negative-vs-baseline scores — only a head-to-head on NFL data counts.

## Engine-actionable? (yes/no + one-line what)
Yes — build the supervised player-graph GCN on NFL NGS tracking joined to nflverse play outcomes (skip RL), with the ≥5% EPA-RMSE pass gate on the 2025 holdout before any production use.
