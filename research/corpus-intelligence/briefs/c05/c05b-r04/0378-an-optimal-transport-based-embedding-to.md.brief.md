# arxiv-program/research/2026-09-21/arxiv-deep/0378-an-optimal-transport-based-embedding-to.md
## What it is (1-2 sentences)
Ledger [0378]: optimal-transport paper (arXiv:2501.10299v1, Baouan/Pulido/Rosenbaum 2025) giving a sliced-Wasserstein frame embedding (permutation-invariant, distance-preserving) plus a team-level similarity metric over quantized frame collections, validated on Ligue 1 tracking and NBA SportVU. Verdict: ADAPT — fills the explicit optimal-transport gap in the research map; highest-value methodological import of the wave for GSE team-style/formation comparison from NGS tracking.
## Key metrics/methods (formulas where given, else "not specified")
- Frame as uniform measure φ: (1/n)Σδ_{x_i}; sliced-Wasserstein SŴ_p via projection onto L fixed directions θ_l = (cos(π(l−1)/2L), sin(π(l−1)/2L)); 1-D Wasserstein via order statistics; O(n log n) per direction vs Hungarian O(n³).
- Embedding (Prop 2.1, proved): Proj_θ injective and distance-preserving — SŴ_p = (nL)^{-1/p}‖Proj_θ(μ)−Proj_θ(ν)‖_p; L=n+1 (12 football, 6 basketball). Euclidean geometry makes k-means/barycenters valid (rejects W_2 geometry for Lloyd's, citing Zhuang et al. 2022).
- Team similarity: empirical frame distributions → Lloyd quantization (k-means++, K=100); similarity(c_1,c_2) = √2·W_2(μ̂_1, μ̂_2); √2 normalization (Prop C.1) interprets score as average meters a player must move to morph one team's frames into the other's.
- Team identity: spherical GMM (50 components) per team; MAP classification of held-out collections.
## Data sources named
- Football: 100 Ligue 1 games 2021–22, Stats Perform 25 fps tracking, possession label per frame (8–11 games/team; frames with <11 players excluded; pitch rotated so analyzed team attacks right; 1-in-10 subsample → 64,024 frames; game list in Table 7).
- Basketball: 630 games (first half of 2015–16 NBA), SportVU 25 fps moments, 1-in-25 subsample.
- No code/dataset release; data proprietary.
## Findings (numbers and facts, not vibes)
- Possession prediction (Table 1): embedding 81.66% (LR) / 82.26% (NN) vs raw tracking 59.65%/76.77%, 10×10 grid CNN 73.71%/80.03%, average positions 59.31%/59.92%. Centered embedding 81.81%/80.63%. Permutation invariance is the difference.
- Brest 10 clusters map to interpretable phases: deep low blocks (possession 22–28%), mid blocks (33–40%), advanced dispositions (61–77%); frequencies 6–13%.
- Similarity (Tables 3–4): PSG most distant overall (Σ=139.34); max pair PSG–Troyes 10.07 m; min Reims–Angers 4.18 m (2.67 centered). Correlation with |Δ possession|: 66.49% raw, 54.72% centered. In/out-of-possession distance: Montpellier 6.73 (shape-preserving), Nantes 8.94 (strategy-switching); PSG 6.80 raw (2nd-lowest) but 4.10 centered (14th).
- Team identity: 82% Top-1 / 88% Top-2 (5-fold); 300 frames → 70.35% Top-1 / 81.43% Top-2. NBA: GSW most deviant (3-point revolution season), Utah 2nd; centering erases both (absolute-position effect); identity 99.33% Top-1 / 100% Top-2; 2,000 frames → 93.8% Top-1.
- Leakage caveats: pooled/CV without team/game holdout (possession); consecutive-chunk folds (identity) — 82% likely partly game-specific.
- GSE port spec: per-play per-side n=11 measures from NGS (10 Hz, pre-snap + fixed post-snap times), L=12, K=100 Lloyd, stratify by down/distance/field zone; 2–3 weeks with POT + sklearn. Improvement experiment: league-wide shared codebook → per-team histograms + Hellinger distance, yielding interpretable formation atoms.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **SCHEME**: principled formation/shell similarity — who runs defensive shells like whom; which offenses use similar personnel geometry; empirical formation-family discovery via clustering instead of charted labels.
- **COACHING**: in/out-of-possession (attack/defense) shape distance quantifies strategy-switching vs shape-preserving coaches.
- **OTHER** (method): sliced-Wasserstein embedding as GSE's standard team-style distance; pairs with 0372 action valuation (shell similarity as conditioner for EPA models).
## Engine-actionable? (yes/no + one-line what)
yes — port the sliced-Wasserstein frame embedding + K=100 quantization to NGS tracking as GSE's team-style similarity engine, accepting only if the pilot shows embedding beats raw-coordinate baselines by ≥10 pp on formation-label prediction and the 32×32 matrix correlates ≥0.5 with an independent style proxy.
