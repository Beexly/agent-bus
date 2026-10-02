# arxiv-program/research/2026-09-21/arxiv-deep/0542-bradleyterry-rankings-for-recommender-systems-across.md
## What it is (1-2 sentences)
Grishina et al. (KDD '26) ask whether a Bradley–Terry tournament model over pairwise algorithm comparisons yields more consistent, missing-data-robust rankings than naive mean/sum aggregation of metrics across 89 recommendation datasets × 14 algorithms, and whether covariate-adjusted BT can predict rankings on unseen datasets from dataset characteristics. The deep read's verdict is ADAPT — the transitive-triplets metric, covariate-BT, and missing-data robustness port directly to GSE's team-rating and model-selection machinery.

## Key metrics/methods (formulas where given, else "not specified")
- BT tournament: i "beats" j on dataset d if its metric (NDCG@10) is higher → win matrix W; ties if metric±std intervals overlap (add 0.5 each). Pr(i≻j) = p_i/(p_i+p_j).
- Estimation variants compared: Zermelo MLE iteration p′_i = Σ_j W_{ij}/Σ_j (W_{ij}+W_{ji})/(p_i+p_j) (normalized by geometric mean); Bayesian BT (W_{ij} ∼ Binomial(N_{ij}, e^{β_i}/(e^{β_i}+e^{β_j})), β_i ∼ Normal(0,σ̄), σ̄ ∼ LogNormal(0,0.5), Metropolis-Hastings → CIs on weights and P(i≻j)); rank centrality (spectral stationary distribution). All three converge to identical weights on the complete matrix.
- Plackett–Luce (listwise): EM with latent Exp variables or Gibbs sampler with Gamma posteriors.
- Novel transitive-triplets ratio: 1/((n choose 3)·D − missing) · Σ_d Σ_{i_1≠i_2≠i_3} I{i_1^d ≻ i_2^d ≻ i_3^d}; tie-aware variant. Higher = better ranking consistency; robust to missing comparisons (unlike mean Kendall's τ).
- Covariate-adjusted BT: P(i≻j|x) = σ(β_{i0}−β_{j0}+⟨x,β_i⟩−⟨x,β_j⟩); penalized MLE ℓ(B)−L(B) with fusion penalty L(B) = λ_0 Σ_{i<j}√((β_{i0}−β_{j0})²+ε) + λ_1 Σ_k Σ_{i<j}√((β_{ik}−β_{jk})²+ε); L-BFGS-B; predict new-dataset ranking by sorting β_{i0}+⟨x,β_i⟩.
- BT trees (psychotree R): recursive partition of datasets by covariates; zero-cost prediction by traversal.

## Data sources named
89 recommendation datasets (APS benchmark + additions, 5-core filtered) with 4 taxonomy dimensions (density, user-item ratio, mean interactions/user, sequentiality); 14 algorithms (Random, PopRandom, User/Item/Seq-KNN, ALS, BPR, SGD MF, PureSVD, EASEr, LightGCN, UltraGCN, SASRec, GASATF); protocol: global temporal split 90/5/5, 10 seeds, Optuna TPE 200 trials tuned on NDCG@10; open code + data at zenodo.20383718 / github.com/fallnlove/btl_recsys.

## Findings (numbers and facts, not vibes)
- Ranking quality (NDCG@10, triplet ratio w/o ties → w/ ties): Mean 0.488→0.613, Sum 0.484→0.613, BT 0.510→0.631, PL 0.503→0.631; mean Kendall's τ: Mean 0.542, Sum 0.541, BT 0.567, PL 0.558 — BT best on both.
- Stability: BT/PL triplet ratio stays ≈0.6 until >0.7 of comparisons are missing; Sum/Mean decline 0.6 → ~0.4.
- Global BT ranking: 1 Seq-KNN, 2 LightGCN, 3 SASRec, 4 GASATF, 5 EASEr, 6 BPR, 7 Item-KNN, 8 UltraGCN, 9 PureSVD, 10 ALS, 11 SGD MF, 12 User-KNN, 13 PopRandom, 14 Random; naive aggregators disagree (EASEr 5th BT vs 1st Mean; BPR 6th BT vs 10th Sum).
- Holdout-dataset top-1 hits (train 79/holdout 10): Mean 0.02, BT 0.24, Cov. BT 0.28, BT tree 0.26; covariate models degrade less with fewer comparisons. Kendall τ of predicted rankings: Mean 0.438, BT 0.489, Cov. BT 0.572, tree 0.501.
- Dataset-class rankings: SASRec/GASATF rank 1–2 on sequential, collapse to 10th/11th on non-sequential; ALS rises 11th→2nd on non-sequential — "simple methods treat every win as equal; BT accounts for opponent strength."

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: Bayesian BT with CIs on P(i≻j) gives uncertainty-quantified head-to-head probabilities for the calibration/Kelly stack; transitive-triplets ratio is a ranking-consistency metric for model selection (a model that beats A, A beats B, but loses to B is suspect regardless of mean error); missing-data robustness is directly relevant to early-season sparse comparison matrices.
- SCHEME: regime-conditional team strength via covariate-BT — fit team strengths conditional on Sunday's regime covariates (home/away, rest differential, dome/outdoor, wind, QB-missing flags), usable as a margin-model feature and for regime-sliced edge detection.
- COACHING: dataset-class-conditioned rankings analogize to situation-conditional team ratings (e.g., "team X is a different animal at home/with rest") for coaching content.

## Engine-actionable? (yes/no + one-line what)
yes — implement regime-conditional team strength via fusion-regularized covariate BT on nflverse game covariates (~3–5 days) plus the transitive-triplet metric as a standing model-selection eval utility (~half day).
