# docs/engine/research/2026-09-26/2026-09-26-big-data-bowl-deepdive.md
## What it is (1-2 sentences)
Evidence-graded brief (VERIFIED/ATTRIBUTED/UNVERIFIABLE) on NFL Big Data Bowl 2026 Prediction (Kaggle): task, metric, winners, methods, reusable code artifacts with licenses, dataset license, and a 2027 watch item.
## Key metrics/methods (formulas where given, else "not specified")
- Task: predict post-throw player (x,y) per frame from pre-pass NGS tracking + targeted receiver identity + ball landing location. Metric: RMSE = sqrt(1/(2N) · Σ((x_true−x_pred)² + (y_true−y_pred)²)), yards.
- Self-reported leaderboard refs: schubert-tom 0.518 public LB (top 5%); shevchenko9liza 0.534; xxremsteelexx 0.540; best single model 0.547 (6-layer ST transformer).
- Winners' methods: Takoi (4th, gold) — ball–runner–defender relational modeling from film study; Mifune (9th, gold) — joint per-player time series + interactions, outputs speed + prediction confidence for physics-smooth trajectories.
- Consensus techniques: delta (displacement) prediction over absolute coordinates; ball-landing conditioning (FiLM gates); LOS-centered/mirrored coordinate normalization; physics-informed losses (velocity/accel caps, direction-cosine loss, boundary + momentum penalties); horizontal-flip augmentation (most effective, per 847-experiment ablations); TTA +0.005–0.010 LB; K-fold CV up to 20-fold; position-specific models.
## Data sources named
Kaggle competition page (8,147 entrants, 962 participants, 1,899 teams, 1,247 submissions; $50k prizes; Sep 2025 → Jan 2026 timeline; winner license Open Source); dataset 864.82 MB (train: 2023 weeks 1–18, ~4.9M tracking rows at 10 fps, 272 games, ~14k plays, 2,157 players; live forecast 2025 weeks 14–18); GitHub repos: XxRemsteelexX (MIT), shevchenko9liza (MIT), schubert-tom (no license), rocinc (no license), jaydonjp; Rist press release (Takoi/Mifune); Rice news (2026 Analytics comp winner Lucca Ferraz).
## Findings (numbers and facts, not vibes)
- [TRUST-SIGNAL] **Dataset license CC BY-NC 4.0 — non-commercial.** Garrett cannot train a commercial product directly on the competition data; methods transfer, data doesn't.
- [SCHEME] Relational structure beats raw coordinates: GNN/GAT or spatial self-attention over the 22-player set (role-ordered, direction-normalized) outperforms per-player sequence models; defensive tactical state (coverage intent) is the key latent.
- [SCHEME] Ball-landing conditioning is highest-leverage: dist_to_ball / speed_toward_ball dominate feature importance (~20% each per one analysis).
- [OTHER] Honest negatives from shevchenko9liza: dropping detected anomalies hurt (−0.14%); DBSCAN found no meaningful clusters; Shapley-Flow duplicated plain SHAP (ARI=0.97).
- [OTHER] Michelle Lawson (@michellescomputer) 24-hour build: whole-play GNN + LSTM ensemble — directionally sound, no score/repo found.
- [OTHER] No 2027 announcement as of 2026-09-26 (watch: operations.nfl.com, AWS sports page, Kaggle); 75+ past participants hired into NFL/sports analytics roles.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Tagged inline above.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt delta prediction, ball-landing FiLM conditioning, and physics-informed losses for any in-house tracking-trajectory model; reuse the two MIT repos (XxRemsteelexX, shevchenko9liza) with attribution.
