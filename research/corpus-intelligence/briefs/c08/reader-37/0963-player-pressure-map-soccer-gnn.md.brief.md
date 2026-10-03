# docs/arxiv-program/research/2026-09-21/arxiv-deep/0963-player-pressure-map-soccer-gnn.md
## What it is (1-2 sentences)
Paper ledger (Gu, Na, Pei, De Silva, arXiv:2401.16235v2): quantifies player/team pressure in soccer by fusing pitch-control surfaces, 8-direction pressure vectors, 3D body-pose context from broadcast video, and a GNN predicting possession outcome — the pressure-graph representation adds ~23 pp of accuracy over raw tracking. ADAPT verdict: port pitch-control + pressure-vector + GNN pipeline to NFL pass-rush pressure from NGS tracking.

## Key metrics/methods (formulas where given, else "not specified")
- Pressure circle: 1 m diameter, sampled from 8 compass directions on the pitch-control surface → 8-dim pressure vector per player.
- Finetune: pressure_matrix_finetuned = pressure_amplifier(body_orientation) ⊙ vanilla_matrix (empirical amplifier: failed passes show higher pressure from all directions; passer pressed front-and-right).
- Player Pressure Map: 12-node graph (11 attackers + ball); node features = pressure vector + position + velocity; edges = pairwise distance + angle.
- POP (team pressure): possessions >5 s → sequences of 50 PPMs (every 2 s); 3 graph-conv layers + ReLU + global mean pooling, dropout 0.5, FC head; pop(t) = P_GNN(lose possession in [t, t+4 s]).
- Pressure levels: ≤1/3 (level 1), 1/3–2/3 (level 2), >2/3 (level 3).

## Data sources named
9 Premier League matches (2019/20), confidential tracking + event data + broadcast video; 6 used for passer body-orientation; test = 1 independent PL match, 750+ possessions.

## Findings (numbers and facts, not vibes)
- Possession-outcome accuracy: tracking-only 55.8% | 2D PPM 75.2% | 3D PPM 78.7% — 2D representation alone adds ~20 pp; 3D body features add ~3 pp more.
- Two 300+-pass players, both ~80% raw passing accuracy: player 184341 (top PL attacking midfielder) handles pressure consistently; player 225796 (average CDM) collapses at pressure level 3 — the metric separates them where raw accuracy cannot.
- Midfielders face highest, most consistent pressure; attackers lowest passing accuracy at all pressure levels (compact blocks).
- Player 41328: most effective dribbler (~0.4 team-pressure relief per dribble), 2nd-highest match rating — matches model evaluation.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **QB-BEHAVIOR**: the 184341/225796 separation is the template — two QBs with equal raw EPA but different pressure-conditioned EPA = prop edge (QB performance under pressure splits).
- **OL**: per-rusher contribution via node ablation (pressure delta when removing a rusher node) → OL/DL matchup grading for spread/total models.

## Engine-actionable? (yes/no + one-line what)
Yes — build an NGS-based per-dropback QB pressure index: defensive control-probability surface → 8-direction pressure vectors → small GCN predicting play failure, with pre-snap pressure forecast from formation graph; numeric gate is AUC ≥10 pp over distance-only proxy.
