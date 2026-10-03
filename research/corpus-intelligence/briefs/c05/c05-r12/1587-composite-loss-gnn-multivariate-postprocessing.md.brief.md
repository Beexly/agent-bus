# arxiv-program/research/2026-09-21/arxiv-deep/1587-composite-loss-gnn-multivariate-postprocessing.md

## What it is (1-2 sentences)
Research ledger on "A Composite-Loss Graph Neural Network for the Multivariate Post-Processing of Ensemble Weather Forecasts" (Lakatos 2025, arXiv:2509.02784) — a GraphSAGE network trained on a weighted Energy-Score + Variogram-Score composite loss producing multivariate calibrated ensembles in one step, beating the standard two-step (univariate calibration + ECC/Schaake shuffle) approach. The ledger's verdict is ADAPT: the one-step recipe for spatially coherent joint weather scenarios across all 30 NFL stadiums in a single forward pass.

## Key metrics/methods (formulas where given, else "not specified")
- dualGNN: GraphSAGE with mean aggregator; graph edges by distance threshold chosen to minimize CRPS (50 km irradiance / 100 km visibility); 1 hidden SAGEConv layer (1024 units) irradiance / 2 (64) visibility; batch norm, ReLU, dropout 0.2; output = K ensemble members directly (non-parametric).
- Loss: ℒ = w₁·ES + w₂·VS, w₂ = 1−w₁, VS normalized by mean(ES)/mean(VS); irradiance best 0.9/0.1, visibility best 0.3/0.7. Training: ≤500 epochs, early stopping (patience 15/10), validation 0.3, batch 64, lr 0.03, one model for all lead times, 10 replications; training windows 30 d (irradiance) / 530 d (visibility); PyTorch Geometric.
- Formulas: sample CRPS = (1/K)Σ|f_k−y| − (1/2K²)ΣΣ|f_k−f_ℓ|; ES = (1/K)Σ‖f_k−y‖ − (1/2K²)ΣΣ‖f_k−f_ℓ‖; VS_p = ΣᵢΣⱼ ωᵢⱼ(|y⁽ⁱ⁾−y⁽ʲ⁾|^p − (1/K)Σ_k|f_k⁽ⁱ⁾−f_k⁽ʲ⁾|^p)², p=0.5; ECC reorder f̃_k⁽ᵈ⁾ = f̂_{π_d(k)}⁽ᵈ⁾. Evaluation: ES, VS₀.₅, sample CRPS, coverage/width, multivariate rank histograms, DM tests with Benjamini–Hochberg correction.

## Data sources named
Solar irradiance: WRF v4.4.2 8-member, 3 km, 48 h hourly, 18 stations Atacama/Coquimbo Chile, 2021; visibility: ECMWF IFS (control + 50 exchangeable), 30 SYNOP stations Germany/Czech/Poland, 2020–2021, 20 lead times 6–120 h, 84 WMO categories, CAMS covariates. No code link.

## Findings (numbers and facts, not vibes)
- Irradiance: dualGNN #1 on ES and VS — beats GNN-ES by 4% (ES) and 5.2% (VS); beats MLP-ECC in 88.46% of DM cases (never worse); beats MLP-SSh in 76.92%; EMOS outperformed in 96–100% of cases. Univariate CRPS as % of raw: EMOS 51.62%, MLP 42.57%, dualGNN 42.85%, GNN-ES 43.23%, GNN-CRPS 40.79%. Adding VS did NOT hurt ES — improved both.
- Visibility: dualGNN #1 on VS (beats GNN-ES by 5%; beats POLR-SSh in 70% of DM cases); ES only 0.4% above GNN-ES (tied). Coverage: 90% intervals — GNN models deviate ~1% from nominal vs 2% POLR, 51% raw; dualGNN most uniform multivariate rank histograms.
- Key side finding: dualGNN's learned rank structure beats raw-ensemble and historical rank structures as a dependence template — the GNN learns real spatial dependence, not just marginals.
- Caveats: data hunger (530-day training for visibility); graph construction crude (distance threshold only); w₁/w₂ empirical per dataset (no universal rule); slight overestimated correlation in energy/dependence pre-rank histograms.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — weather infra: joint weather scenarios across 30 stadiums (cold front hitting Buffalo + Foxboro together → correlated totals across the Sunday slate); the VS-in-the-loss trick is transferable to any loss GSE trains with. Pairs with ledger 1586 (stadium-similarity graph, not geography) and 1583 (conformal layer per stadium).
- TRUST-SIGNAL — nominal coverage ~1% deviation and uniform multivariate rank histograms are the honest calibration evidence for any multi-venue scenario product.

## Engine-actionable? (yes/no + one-line what)
Yes — build `weather/dualGNN.py`: GraphSAGE over 30 stadium nodes (edges by stadium-similarity: elevation, bowl openness, climate, turf), outputs K-member joint ensembles of (temp, wind, precip), loss w₁·ES+w₂·VS₀.₅ with grid w₁ ∈ {0.1,0.3,0.5,0.7,0.9}, trained on GEFS reforecasts + METAR; gate: beat best two-step (EMOS/DRN+ECC) on VS by ≥3% with per-stadium CRPS no worse.
