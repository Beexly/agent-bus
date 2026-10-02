# arxiv-program/research/2026-09-21/arxiv-deep/0912-tacticai-ai-assistant-football-tactics.md
## What it is (1-2 sentences)
Ledger brief for TacticAI (Wang et al., 2024, arXiv:2310.10553v2, Google DeepMind + Liverpool FC): AI assistant for soccer corner-kick tactics using geometric deep learning on player tracking data. Verdict: ADAPT — two portable methods: (1) receiver-conditional outcome decomposition for prop modeling; (2) pre-snap graph + GNN blueprint for the NGS tracking-data lane.

## Key metrics/methods (formulas where given, else "not specified")
- Decomposition: P(shot) = Σ_i P(shot|receiver=i)·P(receiver=i) (Eq. 1) — train conditional on ground-truth receiver, marginalize at inference. Direct unconditional P(shot) failed (F1 0.52).
- Graph: 22 nodes (players), fully connected; node features = positions, velocities, heights, weights, ball-possession flag; edges = teammate/opponent one-hot. GNN message passing (Eq. 2), GATv2 attention (Eq. 3–4, 8 heads).
- Geometric DL: D₂ dihedral group (identity + horizontal/vertical/both reflections); frame averaging (Eq. 6) for invariance; group convolutions (Eq. 8) for equivariance — 4 group-conv layers, 4 latent features/player.
- Guided generation: conditional VAE (Eq. 11, reparameterization trick) sampling one team's positions/velocities. Retrieval: nearest neighbors in latent team-embedding space (mean of player embeddings).
- Receiver prediction: node classification, top-3 accuracy metric. Realism check: MLP discriminator on real vs generated (F1≈0.5 = chance = indistinguishable).

## Data sources named
- Liverpool FC tracking + event data: 9,693 corner kicks from 2020–21 Premier League; 2,517 dropped (alignment failures) → 7,176 valid (80/20 split); tracking at 25 fps; only the kick frame used.
- 1,736 shot / 5,440 non-shot. Not public (licensing); data "on reasonable request."
- Expert case study: 5 Liverpool FC raters, 4 tasks, 50 samples each.

## Findings (numbers and facts, not vibes)
- Receiver top-3 accuracy: 0.782 ± 0.039 (GATv2+D₂ group conv). Ablations: CNN 0.364, Deep Sets 0.713, MPNN 0.723, GATv2 0.748, +D₂ frame averaging 0.780.
- Shot F1: unconditional 0.521 → receiver-conditional 0.677 (0.712 with D₂ in ablation).
- Generated adjustments: MLP real-vs-generated F1 0.53 ± 0.05 (chance). Defensive refinement cut predicted shot prob 0.75→0.69 (z=2.62, p<0.001); attacking refinement raised it 0.18→0.31 (z=−4.46, p<0.001).
- Expert study: real-vs-generated F1 0.60 (near chance); receiver top-3 agreement 0.79; retrieval recall 0.63 vs 0.33 baseline (z=2.34, p<0.05); 90% (45/50) of adjustments favored, mean rating 0.7±0.1 (t₄₉=9.20, p<0.001).
- Leakage note: random 80/20 split over corners (not by match/season) — mild same-match leakage risk, unaddressed. No aleatoric uncertainty modeling (authors admit). D₂ symmetry is exact for a soccer pitch but weaker on a football field (play direction, hash marks, down/distance break symmetry).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: the receiver-conditional decomposition P(TD) = Σ_t P(TD|targeted=t)·P(targeted=t) ports directly to anytime-TD / target-share / first-down prop modeling — train a target-distribution model from pre-snap/matchup features plus a conditional TD model given the target, then marginalize (the "trust target" concept is built into this decomposition).
- SCHEME: pre-snap graph blueprint for the NGS lane — 22 nodes with positions/velocities at snap, edges = offense/defense + assignment proximity; GATv2 predicting play outcome (run/pass, yards bucket, TD); mirror-across-field-axis augmentation doubles goal-line/red-zone samples in the small-data regime.
- COACHING: latent-space nearest-neighbor retrieval ("find me all 3rd-and-long blitz looks vs this protection") for matchup prep in the weekly packet.
- OL: box count and protection features would enter the graph as node/global features; pre-snap graph naturally ingests OL positioning.

## Engine-actionable? (yes/no + one-line what)
Yes — (1) implement receiver-conditional TD modeling for anytime-TD/receiving props: P(TD)=Σ_t P(TD|target=t)·P(target=t) with marginalization; (2) build the 22-node pre-snap GATv2 graph on NGS tracking data with mirrored-augmentation for red-zone/goal-line samples; numeric gate: ≥5% holdout log-loss improvement over the tabular gradient-boosting baseline on 2025 plays (paired bootstrap, p<0.05), adopt decomposition alone if only it wins.
