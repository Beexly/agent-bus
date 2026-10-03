# arxiv-program/research/2026-09-21/arxiv-deep/0956-6mapnet-soccer-player-triplet-network.md
## What it is (1-2 sentences)
A 2021 arXiv paper (2109.04720, Kim et al.) presenting 6MapNet, a FaceNet-style triplet network that learns player-style embeddings from GPS tracking-derived location + direction heatmaps, without manual event annotation, and evaluates via a Gaussian-density similarity measure (ATL-sim) on a player re-identification task.

## Key metrics/methods (formulas where given, else "not specified")
- Per player-phase entity: two 35×50 heatmaps — location heatmap (pitch) + direction heatmap of velocity-vector endpoints with speed > 4 m/s (grid over {(v_x,v_y): −12 ≤ v_x ≤ 12, −8 ≤ v_y ≤ 8} m/s).
- Heatmap additivity (eq. 1): h(s_p(T)) = Σᵢ h(s_p(Tᵢ)), h(v_p(T)) = Σᵢ h(v_p(Tᵢ)) for disjoint intervals → augmentation by pixel-wise 3-combination (3 phases ≈ one full match).
- 6MapNet: triplet network of three weight-sharing 2MapNet subnetworks; each branch CNN: Conv1a 2×3×4 → Conv1b 3×3×4 → MaxPool 2×2 → Conv2a/b 3×3×16 → MaxPool → Conv3a 2×3×32 → Conv3b 3×3×32 → MaxPool → Conv4a/b 3×3×64 → FC1 1920→128 → FC2 128→10; batch norm after Conv/FC, 25% dropout after MaxPool and Conv4b; two 10-dim branch outputs concatenated and L2-normalized → 20-dim embedding.
- Triplet constraint (eq. 2): ‖f(xᵢᵃ) − f(xᵢᵖ)‖²₂ + α ≤ ‖f(xᵢᵃ) − f(xᵢⁿ)‖²₂; triplet loss (eq. 3): L = Σᵢ [‖f(xᵢᵃ) − f(xᵢᵖ)‖²₂ − ‖f(xᵢᵃ) − f(xᵢⁿ)‖²₂ + α]₊, margin α = 0.1 (best).
- Triplet mining: candidate set S = 5 heatmap pairs per identity; hard negative = one violating margin, else one of 10 nearest negatives; re-mined every ≤10 epochs; validation accuracy = fraction of positive pairs with no hard negative. Key recipe finding: best model from only a few epochs on the FIRST triplet selection — second mining round degrades (negatives become stylistically similar).
- ATL-sim (eq. 4): sim(α,β;m) = (1/m) Σᵢ₌₁ᵐ log p_α(f(x_{β(i)}^te)) — per-anonymized-entity Gaussian density over training embeddings; similarity = average of top-m log-likelihoods of test embeddings.
- Role labeling: Bialkowski et al. frame-by-frame role assignment, entity role = most frequent frame role; per-player K-means (2–4 clusters, maximizing silhouette; all scores < 0.6 → single cluster) on mean role locations → player-role entities (identity = player + role cluster).

## Data sources named
Fitogether OhCoach Cell B wearable GPS (10 Hz, latitude/longitude/speed), 2019–2020 K League 1 & 2: 750 matches → phases split at halftime/substitutions/dismissals (phases ≤10 min absorbed) → 635 matches → 1,989 phases → 17,953 player-phase entities from 436 players. Data proprietary, not released; no code released.

## Findings (numbers and facts, not vibes)
- Best config (p10-ATL25, ~10 phases ≈ 289 minutes of data, 308 anonymized entities): Top-1 46.1%, Top-3 69.8%, Top-5 81.8%, Top-10 92.5%, MRR 0.613.
- Similarity ablation (Top-1/Top-10/MRR): L1 24.4/79.2/0.402; L2 24.7/80.2/0.404; AL 35.1/84.1/0.509; ATL75 42.5/89.3/0.574; ATL50 45.5/90.6/0.602; ATL25 46.1/92.5/0.613; ML 37.0/91.2/0.547 — top-25% outlier filtering beats all-likelihoods.
- Data-amount ablation: p6-ATL25 34.1/84.7/0.508 → p8-ATL25 41.2/89.9/0.574 → p10-ATL25 46.1/92.5/0.613 (more phases help).
- No baseline vs PCA/autoencoder/raw distances (flagged as future work by authors).
- Identity overlap between train/test by construction (re-identification, not generalization to unseen players); "similar player retrieval" asserted, not tested on unseen players.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (QB-BEHAVIOR) Highly portable: triplet embeddings of tracking-derived movement heatmaps could encode QB movement style (pocket movement, scramble tendencies) and WR/TE route-running profiles for stylistic comp search.
- (SCHEME) Role-conditioned identities (player + role cluster as the identity label) map to NFL coverage-role or route-role embeddings; drive/series as the "phase" analog to soccer phases.
- (OTHER) Representation-learning method: FaceNet-style triplet loss (α=0.1) + ATL-sim outlier-filtered similarity as a "find stylistically similar players" engine — usable for props/DFS comps and calibration comparables.
- (COACHING) INFERENCE: clustering embeddings of players under a given coordinator could quantify scheme fingerprints, but the paper does not do this — inference only.

## Engine-actionable? (yes/no + one-line what)
Yes — prototype a 6MapNet-style triplet embedding on NFL Big Data Bowl tracking (per-player-drive location + direction heatmaps, role-clustered identities, α=0.1, ATL-sim) to build a "stylistic comp" retrieval engine for props/DFS and QB-movement profiles; numeric gate: beat raw-heatmap L2 re-identification by ≥10 pts top-1 with top-10 ≥ 80%.
