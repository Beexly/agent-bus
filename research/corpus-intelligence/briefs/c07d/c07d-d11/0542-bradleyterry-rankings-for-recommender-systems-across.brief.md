# arxiv-program/research/2026-09-21/arxiv-deep/0542-bradleyterry-rankings-for-recommender-systems-across.md
## What it is (1-2 sentences)
Deep-read note on arXiv:2606.07492v1 (Grishina et al., KDD '26): a Bradley–Terry tournament model over pairwise algorithm comparisons across 89 recommender datasets beats naive mean/sum NDCG aggregation on a novel transitive-triplets consistency metric, is robust to ~70% missing comparisons, and extends to covariate-adjusted BT (fusion-regularized) and BT trees that predict rankings on unseen datasets.
## Key metrics/methods (formulas where given, else "not specified")
- BT: Pr(i ≻ j) = p_i/(p_i + p_j), Σ_i p_i = 1 or Π_i p_i = 1
- Log-likelihood (verbatim): ℓ(p) = Σ_{i,j} W_{ij}(ln p_i − ln(p_i + p_j))
- Zermelo iteration (verbatim): p′_i ← Σ_j W_{ij} / Σ_j (W_{ij}+W_{ji})/(p_i+p_j); p_i ← p′_i/(Π_j p_j)^{1/n}
- Bayesian BT: W_{ij} ∼ Binomial(N_{ij}, e^{β_i}/(e^{β_i}+e^{β_j})); β_i ∼ Normal(0, σ̄); σ̄ ∼ LogNormal(0, 0.5) (Metropolis-Hastings)
- Rank centrality: P_{ij} = (1/(2nd))A_{ij}w̄_{ji} (i≠j), P_{ii} = 1 − (1/(2nd))Σ_{k≠i} A_{ik}w̄_{ki}; π̂ᵀP = π̂ᵀ; θ*_i = log π̂_i − (1/n)Σ_k π̂_k (under Σ_i θ*_i = 0)
- Plackett–Luce: Pr(y_{i_1} ≻ … ≻ y_{i_{T_i}}) = Π_{k=1}^{T_i} p_{i_k}/Σ_{j=k}^{T_i} p_{i_j}; EM via latent z_{ij} ∼ Exp(·; Σ_{k≥j} p_{y_ik})
- Transitive-triplet ratio (verbatim): = 1/((n choose 3)·D − missing) · Σ_d Σ_{i_1≠i_2≠i_3} I{i_1^d ≻ i_2^d ≻ i_3^d}; tie-aware: transitive if i_1 ⪰ i_2 ⪰ i_3
- Covariate-adjusted BT: P(i ≻ j | x) = σ(β_{i0} − β_{j0} + ⟨x,β_i⟩ − ⟨x,β_j⟩); ℓ(B) = Σ_k (y_k log P(i_k≻j_k|x_k) + (1−y_k) log(1−P(i_k≻j_k|x_k))); fusion penalty (verbatim): L(B) = λ_0 Σ_{i<j} √((β_{i0}−β_{j0})²+ε) + λ_1 Σ_k Σ_{i<j} √((β_{ik}−β_{jk})²+ε); objective ℓ(B) − L(B) → max, subject to ∀j Σ_i β_{ij} = 0; fitted by L-BFGS-B
- Win matrix: W_{ij} = # datasets where i's NDCG@10 beats j's; ties when metric±std intervals overlap → +0.5 to both
## Data sources named
- 89 recommendation datasets (mostly APS benchmark set + additions), 5-core filtered; taxonomy dimensions: density, user-item ratio, mean interactions/user, 2-gram sequentiality score
- 14 algorithms: Random, PopRandom, User-KNN, Item-KNN, Seq-KNN, ALS, BPR, SGD MF, PureSVD, EASEr, LightGCN, UltraGCN, SASRec, GASATF
- Protocol: global temporal split 90/5/5; 10 random seeds → metric intervals mean ± std; Optuna TPE, 200 trials (20 startup), tuned on validation NDCG@10
- Code + data: https://doi.org/10.5281/zenodo.20383718 / https://github.com/fallnlove/btl_recsys
## Findings (numbers and facts, not vibes)
- Ranking quality (Table 1, NDCG@10, triplet ratio w/o ties → w/ ties): Mean 0.488→0.613; Sum 0.484→0.613; BT 0.510→0.631; PL 0.503→0.631. Mean Kendall's τ: Mean 0.542, Sum 0.541, BT 0.567, PL 0.558. Consistent on sparse/long-history subsets (sparse: BT 0.505→0.624, τ 0.565 vs Mean 0.495→0.615, τ 0.542)
- Stability: triplet ratio for BT/PL stays ≈0.6 until >0.7 of comparisons missing; Sum/Mean decline 0.6 → ~0.4
- Estimators: Zermelo, Bayesian, rank centrality converge to identical weights on complete W; BT vs PL highly concordant on all/sequential datasets (same top cluster: Seq-KNN, LightGCN, SASRec), diverge on long-history (PL moves SASRec 4th→6th, Item-KNN 9th→5th)
- Global BT ranking (Table 3): 1 Seq-KNN, 2 LightGCN, 3 SASRec, 4 GASATF, 5 EASEr, 6 BPR, 7 Item-KNN, 8 UltraGCN, 9 PureSVD, 10 ALS, 11 SGD MF, 12 User-KNN, 13 PopRandom, 14 Random. Discrepancies vs naive: EASEr 5th (BT) vs 1st (Mean); BPR 6th (BT) vs 10th (Sum)
- Dataset-class rankings (Table 2): SASRec/GASATF rank 1–2 on sequential, collapse to 10th/11th on non-sequential; ALS rises 11th→2nd on non-sequential; LightGCN best on short-history; UltraGCN/ALS better on low user-item ratio
- Timestamp shuffle (§6.4): sequential models lose dominance/separation; SASRec degrades most (below Seq-KNN, GASATF after shuffle)
- Holdout prediction (Table 5), Train(79)/Holdout(10) — top-1 hits: Mean 0.02, BT 0.24, Cov. BT 0.28, BT tree 0.26; top-3 hits: 0.16/0.78/0.78/0.64; top-2 overlap: 0.62/0.86/0.96/0.86; top-5 overlap: 3.32/3.32/3.28/2.88. Train(59)/Holdout(30) — top-1 hits: 0.08/0.15/0.24/0.13; top-2 hits: 0.17/0.47/0.61/0.40 (covariate models degrade less)
- Table 6: Kendall τ: Mean 0.438, BT 0.489, Cov. BT 0.572, tree 0.501; MAP@5: 0.689/0.872/0.873/0.869; NDCG@5: 0.575/0.709/0.732/0.693; top-5 overlap: 3.10/3.32/3.42/3.18
- BT vs Mean/Sum/PL Kendall τ > 0.8 on NDCG@10/HitRate@10/Coverage@10 (Appendix Table 8)
- Limitations (paper-stated): win magnitude ignored; datasets exchangeable (no size/quality weighting); HPO budget asymmetry ("occasionally terminated early" on large datasets); covariate BT has n(d+1) parameters; BT-tree instability unevaluated
- Verdict: ADAPT
- Gate: adopt covariate-BT if on 2022–2024 rolling test seasons it beats static-BT baseline by ≥ 0.01 log-loss/game AND higher transitive-triplet ratio, with no worse top-3 overlap; adopt the triplet metric as a standing eval utility regardless
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (model-selection program): The transitive-triplet ratio (novel, robust to missing comparisons unlike Kendall's τ) ports directly as a ranking-consistency metric for GSE's candidate-model comparisons across backtest windows — a model that beats A, A beats B, but loses to B is suspect regardless of mean error. ~half-day eval utility.
- OTHER (calibration/sizing program): Bayesian BT with Metropolis-Hastings CIs on P(i≻j) gives uncertainty-quantified head-to-head probabilities feeding the calibration/Kelly stack (interval width as a bet-sizing input) — the corpus's BT work is point-estimate only.
- SCHEME (regime-conditional ratings): Covariate-adjusted BT with fusion regularization is the recipe for regime-conditional team strength — covariates per game (home/away, rest differential, dome/outdoor, wind ≥15 mph, QB-missing flags) yield β_{i0} + ⟨x, β_i⟩, a team rating conditional on Sunday's regime, usable as a margin-model feature and for regime-sliced edge detection. NFL regimes are discrete (backup-QB chaos weeks, bad-weather weeks) — the BT-tree variant suggests tree-structured regime splits as an improvement hypothesis over linear covariate effects.
- COACHING: UNCERTAIN — "coach tenure"/regime covariates are proposed extensions, not tested in the paper; the class-conditional ranking idea (SASRec 1st on sequential, 11th on non-sequential) is the mechanism analog: a team's edge is class-conditional, not global.
- OTHER (early season): BT/PL stability until >70% missing comparisons is directly relevant to GSE's early-season sparse comparison matrix.
## Engine-actionable? (yes/no + one-line what)
yes — Add the transitive-triplet ratio as a standing model-selection metric AND build a fusion-regularized covariate BT (home/rest/weather/QB covariates) on nflverse, gated at ≥0.01 log-loss/game over static BT on 2022–2024 rolling tests.
