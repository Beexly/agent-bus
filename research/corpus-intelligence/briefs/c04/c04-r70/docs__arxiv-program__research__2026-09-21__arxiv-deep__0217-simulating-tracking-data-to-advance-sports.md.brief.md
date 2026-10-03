# docs/arxiv-program/research/2026-09-21/arxiv-deep/0217-simulating-tracking-data-to-advance-sports.md
## What it is (1-2 sentences)
Deep read of arXiv:2503.19809v1 (Radke & Tilbury, AAMAS 2025 demo): using simulated tracking data from the Google Research Football RL environment as a stand-in for real licensed tracking data when developing analytics models. Ledger verdict: ADAPT (modest) — the practice (prototype tracking-data models on simulated data when NGS is gated) and the entity-schema/event-stint extraction pipeline transfer; the soccer models do not.
## Key metrics/methods (formulas where given, else "not specified")
- Collection: GRF headless state → entity rows (entity ID, x/y/z center-of-mass, team, role among 8 position types, velocity; boolean ball-possession flag), 3,000 timesteps/game, 23 rows/timestep.
- Event extraction (rule-based): passes/receptions (possession transfer to teammate), turnovers/interceptions (to opponent), shots (ball moved attacking direction + goal/out/keeper).
- Stint identification: automatic segmentation of continuous gameplay with unique IDs.
- xG demo: logistic regression P(goal | polar shot coordinates) — no hyperparameters beyond the model form.
- Pitch control: per-timestep P(recovery | player positions, velocities, ball travel speed, control time); Voronoi + physics (Spearman et al. 2017). No numbered equations (demo paper).
## Data sources named
3,000 simulated GRF soccer games (Radke & Tilbury 2024, Google Drive); GRF open (Kurach et al. 2020); schema analogous to Omidshafiei et al. 2022. Code + dataset released (repo + Drive links in paper; demo video linked).
## Findings (numbers and facts, not vibes)
- No numerical results reported — results are two figures: (1a) xG probability surface declining with distance/angle, consistent with real-soccer xG (Spearman 2018); (1b) one pitch-control frame.
- No train/test splits, no metrics, no baselines vs real data. Validation = "established models behave plausibly on simulated data."
- Admitted limits: no pose estimation, some omitted ball possessions, edge cases in event extraction; GRF agents are RL bots, not humans — behavioral realism limited; soccer only, no football equivalent identified in the paper.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: tracking-data engineering template — entity-row schema, rule-based event/stint extraction layer for NGS frames (target/catch/pressure/missed-tackle events; plays/drives as stints); simulation-first prototyping lane for new tracking features (e.g., pass-rush pressure fields, receiver-separation models).
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the entity-row schema + rule-based event/stint extraction layer for GSE's own NGS tracking store (pure engineering, ~1 week on existing NGS data); simulation-first prototyping only after a football simulator with adequate realism is identified, never for calibrating production parameters.
