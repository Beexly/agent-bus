# arxiv-program/research/2026-09-21/arxiv-deep/1869-sswnp-self-supervised-waypoint-noise-prediction.md
## What it is (1-2 sentences)
A plug-in self-supervised auxiliary task (SSWNP) for trajectory prediction: duplicate each observed trajectory into a clean view and a Gaussian noise-perturbed view, force both to predict the true future (spatial consistency), and train a noise-prediction head on the encoder, with zero inference-time overhead.
## Key metrics/methods (formulas where given, else "not specified")
- Views: X̃_i^{≤t_ob} = X_i^{≤t_ob} + Φ_i^{≤t_ob}, Φ = ω·Φ′, Φ′ ∼ N(0,1); ω=0.05 best on NBA validation.
- L_sup = (1/N) Σ_i [L_tp(Ŷ_i,Y_i) + L_tp(Ŷ̃_i,Y_i)]; L_ss = (1/N) Σ_i [MSE(Φ̂_i,0) + MSE(Φ̃̂_i,Φ_i)]; L_total = L_sup + λ·L_ss with λ=0.01.
- Metrics: minADE/minFDE; tested as drop-in on 4 backbones (GroupNet CVAE, AutoBot Transformer, SSAGCN, Graph-TERN).
## Data sources named
NBA SportVU (all ten players, live games; 5 observed timestamps / 2.0s → 10 future / 4.0s), TrajNet++ (9→12 timestamps), ETH-UCY (8 observed pedestrian timestamps).
## Findings (numbers and facts, not vibes)
- NBA, GroupNet+SSWNP: ADE/FDE 1.13/1.69 → 0.903/1.147, RD 22.33/38.28%; spatial-consistency-only ablation 1.018/1.362 (both modules contribute).
- TrajNet++, AutoBot+SSWNP: 33.8% ADE and 36.4% FDE improvement over baseline.
- ETH-UCY: RD 8.60/14.00% vs B1, 16.60/23.20% vs B2 (ADE/FDE).
- Under test-time noise injection, baselines degrade significantly; SSWNP shows resilience (Table VII).
- ω and λ are dataset-specific; no code link stated in the extracted text; NBA SportVU is 25Hz with known jitter (generalization to 10Hz NFL RFID untested).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Direct plug-in for GSE ball-carrier / player trajectory forecasting (prop modeling: rushing yards, catch probability) — training-loop change only, no inference cost.
- [QB-BEHAVIOR] Structured-noise extension proposed in file: separate lateral (cuts) vs longitudinal (bursts) perturbation; INFERENCE that lateral-noise SSWNP beats isotropic on juke-heavy RB trajectories.
## Engine-actionable? (yes/no + one-line what)
yes — Wrap GSE's NFL 10Hz trajectory predictor (1.0s observed → 2.0s future) with clean+augmented views and a noise-prediction head; adopt if FDE ≥10% lower than baseline on held-out weeks and test-time jitter degradation ≤ half the baseline's (~1 engineer-week, zero inference overhead).
