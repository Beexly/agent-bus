# arxiv-program/research/2026-09-21/arxiv-deep/0510-dagnet-double-attentive-graph-neural-network.md
## What it is (1-2 sentences)
Deep read of Monti et al. (2020, arXiv:2005.12661v2): DAG-Net — multi-agent trajectory forecasting via a goal-conditioned VRNN with two attentive GNNs (one refining future-goal relationships, one refining hidden-state interactions), evaluated on STATS SportVU NBA tracking and Stanford Drone Dataset. Verdict in file: ADAPT — portable to NFL Next Gen Stats trajectory forecasting, though goals-as-grid-cells must be re-mapped to NFL route/rush intents.
## Key metrics/methods (formulas where given, else "not specified")
- VRNN: encoder q_φ(z_t|x_≤t,z_<t) = N(μ_z,t, σ²_z,t); decoder p_θ(x_t|x_<t,z_≤t); prior from h_{t−1} alone; GRU h_t = φ^rnn(x_t,z_t,h_{t−1}); trained by sequential ELBO; all positions as relative displacements (Δx, Δy).
- Goal conditioning: g^i_t = one-hot grid cell the agent will land in (from GT sliding window); Goal-Net g′_t = φ^goal(g′_{t−1}, d_{t−1}, h_{t−1}); ELBO gains −Σ_k g^k_t log(g′^k_t).
- Refinements: ĝ_t = W(g′_t ∥ g̃_t) (goal GNN); ĥ_t = H(h_t ∥ h̃_t) (interaction GNN with distance-based adjacency).
- Hyperparams: GRU-64, latent-32, 2 attentive GNN layers × 4 heads per graph; sports: lr 1e−3, batch 64, 300 epochs.
- Metrics ADE/FDE: ADE = Σ_i Σ_t dist / (|P|·T_pred).
## Data sources named
STATS SportVU NBA 2016 (1,200+ games, 50 timesteps at 5 Hz, ATK/DEF modeled separately); Stanford Drone Dataset (TrajNet benchmark). No code/data links stated.
## Findings (numbers and facts, not vibes)
- SportVU ADE/FDE (feet, 10 obs→40 pred): ATK DAG-Net 8.98/14.08 vs STGAT 9.94/15.80, Social-Ways 9.91/15.19, Weak-Supervision 9.47/16.98; DEF 6.87/9.76 vs best baseline 7.05/10.56 — best in all four cells.
- Long-term (20 obs; ADE): DAG-Net 2.09/4.58/6.66 (ATK) vs C-VAE 3.95/5.80/7.08. SDD: DAG-Net 0.53/1.04 vs STGAT 0.58/1.11.
- Ablations: interaction GNN alone helps marginally; the goal-conditioning drives most of the gain (Vanilla VRNN ATK 9.41/15.56 → DAG-Net 8.98/14.08).
- Limitations flagged: training sees full ground-truth sequences (future context) — protocol mismatch vs inference; goal-prediction accuracy never measured separately; no CIs; NFL tracking data not public so data side not replicable.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: receiver route-endpoint prediction (goals as route intents) feeds route-completion probability and expected-YAC models; ball-carrier target-yardline intents.
- SCHEME: improvement experiment — condition the GNN on called scheme/formation embedding instead of anonymous grid cells, since NFL trajectories are scheme-driven (assignment football > distance-proximity).
- OTHER: structured multi-agent trajectory forecasting with explicit intent nodes — complements UniTraj (0065) and diffusion trajectory work; a new capability in the tracking lane.
## Engine-actionable? (yes/no + one-line what)
yes — reimplement the three-part architecture on public NFL tracking (Big Data Bowl); adopt for NGS-scale only if it beats Vanilla VRNN by ≥10% relative ADE on ball-carrier/receiver set and beats A-VRNN, with min-over-20 ADE also improving (no mode collapse).
