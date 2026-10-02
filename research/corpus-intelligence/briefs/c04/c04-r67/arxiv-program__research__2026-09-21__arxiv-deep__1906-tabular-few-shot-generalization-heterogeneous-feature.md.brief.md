# arxiv-program/research/2026-09-21/arxiv-deep/1906-tabular-few-shot-generalization-heterogeneous-feature.md
## What it is (1-2 sentences)
A few-shot meta-learning paper (Zhu et al., 2023, arXiv:2311.10051v1) proposing FLAT, a meta-network that transfers across tabular datasets with non-overlapping feature sets using permutation-invariant dataset/column encoders, a weight-generating decoder, and a Graph Attention Network target. Reader verdict is ADAPT, framed as machinery for bridging GSE's feature-heterogeneous eras (pre-NGS vs tracking era, college vs pro stats).
## Key metrics/methods (formulas where given, else "not specified")
- Dataset embedding (Eq. 1): e = f₃((1/N^col)Σ_j f₂((1/N^meta)Σ_i f₁(x^meta_{i,j}, y^meta_i))) — permutation-invariant over rows AND columns.
- Column embedding (Eq. 2): p_j = g((1/N^meta)Σ_i f₁(x^meta_{i,j}, y^meta_i)).
- Generated weights (Eqs. 3–4): [ω_a^l, ω_b^l, ω_W^l] = h_l(e); normalized with learnable scale θ.
- GAT attention (Eqs. 5–6): α_jk = exp(LReLU(a^{l⊤}[W^l h^l_j || W^l h^l_k])) / Σ_r …; node update h^{l+1}_j = Σ_k α_jk W^l h^l_k; first-layer nodes h^0_j = [p_j || x_j].
- Prediction (Eq. 7): p(ŷ^target) = softmax(W^L((1/N^col)Σ_j h^{L-1}_j)).
- FLATadapt: at inference, a few gradient steps on e, p_j using the meta set's features+labels (all weights frozen).
- Validation: N-fold cross-validation over datasets (test datasets never seen in training); N^meta ∈ {1,3,5,10,15}; accuracy averaged over folds and seeds.
## Data sources named
- 118 UCI tabular classification datasets (65 binarized one-vs-all); medical subset of 29; 65 datasets with ≥3 classes for the 3-class experiment. Global hyperparameters tuned on a 25%-datasets validation split.
- Baselines: LR, KNN, SVC, Random Forest, CatBoost, TabNet, FT-Transformer, STUNT, TabPFN, Iwata (heterogeneous meta-learner). No code URL stated in the paper.
## Findings (numbers and facts, not vibes)
- Medical 29 datasets, N^meta=3: FLAT 66.54 ± 0.11 vs Iwata 65.82 ± 0.60, KNN 64.99 ± 0.27, STUNT 63.79 ± 0.28, FTT 63.73 ± 0.27, CatBoost 62.86 ± 0.28.
- Medical 29, N^meta=1: FLAT 59.73 ± 0.18 vs Iwata 57.72 ± 0.64 (random = 50%).
- All 118 datasets, N^meta=3: FLAT 64.40 ± 0.13 vs Iwata 62.48 ± 0.31, KNN 62.54 ± 0.28, STUNT 61.28 ± 0.28; N^meta=5: FLAT 66.40 ± 0.14 vs Iwata 64.52 ± 0.31; N^meta=10: FLAT 69.86 ± 0.12 vs KNN 68.53 ± 0.27, STUNT 69.00 ± 0.26; N^meta=15: FLAT 71.50 ± 0.14 ≈ baselines.
- FLATadapt: +0.5–2.33pp over FLAT (all-118 N^meta=10: 70.35 ± 0.12); median rank #1 over datasets at all N^meta.
- 3-class: FLAT beats all baselines at N^meta=3,5,10; FLATadapt adds up to +1.25pp.
- Inference time (200 steps, 15 rows, 20 cols): FLAT 0.45s (≈ LR 0.42s, KNN 0.22s), FLATadapt 8.65s, vs FT-Transformer 40.61s, TabNet 108.42s.
- t-SNE of dataset embeddings: same-dataset tasks cluster increasingly cleanly as N^meta grows (Figure 3).
- Limitations stated in file: classification only (regression is future work); O((N^col)²) GAT cost; embeddings noisy at N^meta=2–4; no calibration analysis, accuracy only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Heterogeneous tabular meta-learning machinery — OTHER.
- Dataset embedding e as a regime-similarity metric ("which historical team-seasons does this 2-game sample look like?") — INFERENCE from the file's GSE overlap section; SCHEME (era/scheme regime comparison), COACHING (team-season similarity).
## Engine-actionable? (yes/no + one-line what)
yes — Adopt iff FLAT beats per-task XGBoost by ≥3pp accuracy on new-regime win prediction at K∈{2,4} games (2023–2025 LOSO) and the heterogeneous-schema variant loses ≤1pp vs homogeneous; binary heads (win/cover) map directly, regression head (margin) is proposed-but-untested work per the file.
