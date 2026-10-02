# arxiv-program/research/2026-09-21/arxiv-deep/0956-6mapnet-soccer-player-triplet-network.md
## What it is (1-2 sentences)
Full read of Kim et al. (2021, arXiv:2109.04720): 6MapNet, a FaceNet-style triplet network learning player-style embeddings from GPS-tracking-derived location+direction heatmaps, identifying 308 anonymized soccer players by style. Ledger verdict: ADAPT — portable to NFL for player-style embeddings and stylistic-similarity search.

## Key metrics/methods (formulas where given, else "not specified")
- Per player-phase entity: two 35×50 heatmaps — location heatmap + velocity-direction heatmap (speed > 4 m/s threshold)
- Heatmap additivity: h(s_p(T)) = Σᵢ h(s_p(Tᵢ)) over disjoint intervals; 3-combination augmentation chosen optimal (≈ one full match = 3 phases)
- Triplet loss: L = Σᵢ [‖f(xᵢᵃ) − f(xᵢᵖ)‖²₂ − ‖f(xᵢᵃ) − f(xᵢⁿ)‖²₂ + α]₊, margin α = 0.1; 20-dim L2-normalized embedding from twin CNN branches (Conv 2×3×4→3×3×64, FC 1920→128→10, 25% dropout, batch norm)
- Hard-negative mining re-mined ≤every 10 epochs; key finding: best model from training only a few epochs on the FIRST triplet selection (second mining round hurts — negatives become stylistically similar)
- ATL-sim evaluation: per entity fit Gaussian density p_α over training embeddings; sim(α,β;m) = (1/m) Σᵢ₌₁ᵐ log p_α(f(x_{β(i)}^te)); top-25% likelihood (ATL25) beats using all likelihoods
- Role-conditional identities: per-player K-means (2–4 clusters, silhouette-max) on mean role locations; same player in different role clusters = different identity

## Data sources named
- 750 matches of 2019–2020 K League 1 & 2 via OhCoach Cell B wearables (Fitogether), 10 Hz → 1,989 phases → 17,953 player-phase entities from 436 players; proprietary, not released

## Findings (numbers and facts, not vibes)
- Best (p10-ATL25): Top-1 46.1%, Top-3 69.8%, Top-5 81.8%, Top-10 92.5%, MRR 0.613 — re-identifying 308 players from ~289 minutes of data each
- Similarity ablation Top-1: L2 24.7 vs ATL25 46.1 — outlier-filtered likelihood (top 25%) roughly doubles simple distance baselines
- Data amount: p6-ATL25 Top-1 34.1 → p8 41.2 → p10 46.1 (more phases help monotonically)
- Limitations flagged: no baseline vs PCA/autoencoder; identities overlap train/test by construction (re-identification, not unseen-player generalization — scouting retrieval asserted, untested); "first selection only" training is an empirical hack; 0.6 silhouette cutoff heuristic

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR — QB movement-style embeddings from tracking (location+direction heatmaps per drive) could cluster QB play-styles (scramblers vs pocket) and find stylistic comps
- SCHEME — role-conditional identity idea ports to coverage-role (DB) and route-role (WR/TE) identities, separating scheme assignment from player style
- OTHER — tracking-embedding ML method; comp-search infrastructure for props/DFS (find players with similar route/movement profiles)

## Engine-actionable? (yes/no + one-line what)
Yes — prototype triplet-CNN embeddings on Big Data Bowl tracking (per-drive location+direction heatmaps, role-conditioned labels) for stylistic comp search; acceptance gate: beat raw-heatmap L2 re-identification by ≥10 pp top-1
