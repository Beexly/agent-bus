# arxiv-program/research/2026-09-21/arxiv-deep/0068-predicting-batting-averages-in-specific-matchups.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2402.01914v1 (O'Connell 2024): introduces Generalized Linked Matrix Factorization (GLMF), which jointly factorizes a sparse binomial matchup matrix plus two normal aggregate side matrices in natural-parameter space via alternating IRLS, validated on 2017 MLB batter-vs-pitcher matchups (76% never observed). Verdict in the file: ADAPT — port the method (not the baseball) to NFL sparse matchup matrices.

## Key metrics/methods (formulas where given, else "not specified")
- GLMF: joint rank-r approximation Θ_X, Θ_Y, Θ_Z sharing row/column factors; alternating IRLS (Green 1984) per Li & Gaynanova (2018): X ~ Binomial(N,p) with logit link; Y (pitching aggregates) ~ Normal, Z (batting aggregates) ~ Normal; initialize Ṽ from first r right singular vectors of stacked-matrix SVD; iterate IRLS row-updates + σ² re-estimation to convergence; missing X initialized by row/column mean averaging (N=1), iterated imputation; probabilities clipped to [0.001, 0.999] for log-likelihood.
- Canonical links (Table 1): Normal → identity; Binomial → logit g(μ)=log(μ/(1−μ)); Poisson → log.
- Joint likelihood (Eq. 1): product over entries of the three exponential-family densities L(Θ_X,Θ_Y,Θ_Z | U,V,W,C). Rank-r decomposition (Eq. 2) and IRLS induced-response/weight formulas were garbled in PDF extraction — file marks them UNCERTAIN, cites Li & Gaynanova (2018) as the implementation reference.
- Baselines: naive mean, James (1983) log5, LMF (O'Connell & Lock 2019), PCA on centered/scaled X, logistic PCA (Landgraf & Lee 2015).
- Metrics: RMSE and binomial log-likelihood; 144-dataset simulation (σ∈{0.1,0.3,0.5,0.7}, nmax∈{1,2,8,16}, rank∈{1,2,3}, 20% of X masked) + 5-fold CV on 2017 MLB (~12,506 observed matchups per fold), ranks 1–3.

## Data sources named
Simulation per above; real data: 2017 MLB from MLB.com — pitchers >20 IP (516), batters ≥50 AB (508); 262,128 possible matchups, 62,528 observed (~24%). Pitching aggregate schema (Y, per batter faced): W,L,G,GS,GF,CG,SHO,SV,IP,H,R,ER,HR,BB,IBB,K,HBP,BK,WP. Batting aggregate schema (Z, per PA): G,AB,R,H,2B,3B,HR,RBI,SB,CS,BB,K,TB,GIDP,HBP,SH,SF,IBB. No code link; logisticPCA R package referenced for the LPCA baseline.

## Findings (numbers and facts, not vibes)
- Table 4 (5-fold CV, real MLB), rank-3 RMSE: GLMF 0.342, LMF 0.351, LPCA 0.344, PCA 0.358, Log5 0.345 (rank-1 only), Mean 0.344. Log-likelihood: GLMF −0.854, LMF −0.899, LPCA −0.864, PCA −0.952, Log5 −0.870, Mean −0.864. GLMF best on both metrics at every rank, and the only method whose performance improves with rank (others overfit at higher rank).
- Honest caveat (§4): naive mean (0.250) was next-best — margins over the mean are thin with aggregate stats (0.342 vs 0.344 RMSE).
- Simulation: GLMF wins at high systematic variability (σ=0.5, 0.7, even on RMSE at 0.7 despite it favoring Gaussian methods); LMF best at σ=0.3; mean wins at σ=0.1 (low signal); GLMF failed to converge on 2 of 144 simulations (rank 3, low σ — singular IRLS matrices).
- Qualitative: most favorable 2017 matchup, rank-3 GLMF: Jose Altuve vs. Bartolo Colon, predicted 0.463 (observed 0.333 in 3 ABs); LOESS shows models shrink single-AB 1.000s downward — argued more reasonable than empirical rates.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME / OTHER: method is the transferable asset — sparse pairwise matchup imputation enriched with marginal stats is exactly the shape of NFL problems: receiver-vs-coverage or QB-vs-defense matchup matrices (completions/targets binomial + aggregate offense/defense stats normal), OL-vs-DL pressure rates, prop-market success-rate imputation for thin head-to-head histories. Not a QB-behavior/coaching/OL/trust-signal file directly.

## Engine-actionable? (yes/no + one-line what)
yes — Reimplement GLMF via Li & Gaynanova (2018) IRLS (paper's printed equations unrecoverable) and test on an NFL receiver×defense / QB×defense binomial matchup matrix vs. GSE's current shrinkage prior on time-ordered holdout log-likelihood, with ridge regularization to fix the 2/144 IRLS convergence failures.
