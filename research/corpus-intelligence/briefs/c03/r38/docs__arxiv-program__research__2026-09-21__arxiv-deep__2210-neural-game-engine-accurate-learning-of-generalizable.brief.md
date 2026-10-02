# docs/arxiv-program/research/2026-09-21/arxiv-deep/2210-neural-game-engine-accurate-learning-of-generalizable.md
## What it is (1-2 sentences)
A full-text-read ledger (verdict: ADAPT, completed 2026-09-22) of the Neural Game Engine (Bamford & Lucas 2020, arXiv:2003.10520): a modified Neural GPU — a convolutional gated recurrent unit iterated n times per frame — that learns game rules from pixels so accurately it generalizes to larger level sizes than trained on, with no accuracy loss.
## Key metrics/methods (formulas where given, else "not specified")
- State s is a 2D grid (W_s,H_s,C_s), one vector per tile; 3×3 convolutional kernel banks U,U′,U″ masked to 4-neighborhood (no diagonals); per frame a CGRU cell is iterated n times to produce the next state; decoded to O_{t+1} and reward r_t.
- 2D diagonal gating: state split 5 ways, fixed-kernel convolutions copy tile info to neighbors (eq. 2: s_i = u_i⊙s̃_i + (1−u_i)⊙c_t); selective-gating variant; PDT (progressive data training) curriculum; separate decoupled reward-prediction network; multi-state training.
- Key property: changing (W_s,H_s) changes zero parameters → unbounded size generalization.
- Metrics: tile F1 (F_t), reward F1 (F_r), MSE (E_mse) over rollout horizons.
- Assumes deterministic, fully observable, grid-structured, tile-local dynamics, discrete actions; no stochasticity or global state changes (stated limitations).
## Data sources named
10 deterministic GVGAI games (Sokoban, aliens, clusters, etc.); training = random level generation + random agent movement, 1.28M frames per experiment; evaluation rollouts against the true GVGAI engine from identical start states/action lists, up to 500 steps × 10 repeats. Pre-trained models public at github.com/Bam4d/Neural-Game-Engine.
## Findings (numbers and facts, not vibes)
- Gating: selective gating trains fastest and is most stable over long horizons (Fig. 2, Table I).
- vs baselines (Fig. 3): NGE achieves lowest E_mse and highest average F_t of four methods (feedforward conv net, Recurrent Environment Simulator autoencoder+LSTM, stochastic state-space model) on Sokoban, all trained 1.28M frames on fixed 10×10.
- Iteration ablation (Fig. 4): n=2 reaches very high rollout accuracy vs 5 hand-built GVGAI levels; n=1 plateaus much lower — multiple iterations are vital for non-local interactions (e.g., block-against-wall).
- Size generalization (Table I): 10×10-trained model on 30×30/50×50/70×70/100×100: max E_mse 7.5–8.3e-6, F1 = 1.0 everywhere over 500 steps — zero degradation at 100× the cells.
- 10 GVGAI games (Table II): most games F_t = 1.0 and F_r = 1.0 (perfect pixel and reward prediction). Failures: aliens (stochastic enemies, partial observability) min F_t = 0.73; clusters reward completely unlearned (reason unclear).
- Ledger verdict: ADAPT — port as a Graph Neural Game Engine for NFL: play as a 23-node player-interaction graph, n=3 message-passing rounds per 100 ms step, decoupled EPA reward head, GPU-parallel learned engine for MCTS over play calls/4th downs (~4–6 engineer-weeks; NGS tracking pipeline is the main cost).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: the mechanism directly models how schematic interactions (blitz-pickup cascades, coverage rotations) propagate — the port's acceptance test is beating single-round message passing on +1s player position error by ≥15%.
- OTHER: learned forward-simulation / world-model methodology for a GPU-parallel play engine; complements the corpus's Transformer world models (ledgers 2204–2208) as the only local-iterative alternative.
## Engine-actionable? (yes/no + one-line what)
yes — build the Graph Neural Game Engine on NGS tracking (23-node graph, n=3 message passing, decoupled EPA head), adopt iff n=3 beats n=1 on +1s position error ≥15%, roster-subset degradation <10%, and 500-step rollouts stay within 2.0 yards mean error.
