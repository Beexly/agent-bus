# arxiv-program/research/2026-09-21/arxiv-deep/1849-iife-interaction-information-feature-engineering.md
## What it is (1-2 sentences)
A ledger on Overman, Klabjan & Utke (arXiv:2409.04665): IIFE — interaction information (feature-pair synergy) pre-selects which pairs are worth combining in automated feature engineering, plus a quantified audit of AutoFE literature hygiene (CV-only reporting inflates gains 5.7pp; OpenFE's transductive leakage inflates airfoil +14.01%); IIFE takes 10 top ranks, avg rank 2.50, and closes the linear-vs-nonlinear gap (IIFE+LR within 4.99% of tuned RF).
## Key metrics/methods (formulas where given, else "not specified")
- Interaction information: τ_ij = I(F_i; F_j; Y) = I(F_i; F_j | Y) − I(F_i; F_j) = H(F_i,F_j) + H(F_j,Y) + H(F_i,Y) − H(F_i) − H(F_j) − H(Y) − H(F_i,F_j,Y); interpretable as I(F_i; Y | F_j) − I(F_i; Y): synergy beyond isolation.
- IIFE loop: (1) compute II for all pairs O(|F|²), prefilter to top-50 RF-importance if |F| large; (2) take K highest-τ pairs × bivariate functions B, evaluate by parallel CV V_M, keep argmax; (3) univariate transforms U on winner; (4) add to pool; II only for (new feature × existing) next round — O(|F|); stop when mean of recent P/2 CV scores ≤ mean of previous P/2 (patience P; K=3, P=20/40).
- II as accelerator: restrict expand-reduce expansion (OpenFE/AutoFeat) to high-II pairs → pair set reduced ~5×, similar-or-better scores, much shorter runtimes.
## Data sources named
Public: Airfoil (1,503×5), Credit Default (30k×23), Bikeshare (17,389×13), Wine Quality Red (999×12), California Housing (20,640×8), OpenML 586 (1k×25), JM1 (10,885×22), Jungle Chess (44,819×6); proprietary Allstate-scale regression (100s of thousands of samples, ~1,000s of features). Downstream: LR/Lasso, RF, LightGBM tuned before AND after AutoFE, 25 runs each.
## Findings (numbers and facts, not vibes)
- IIFE 10 top ranks, avg rank 2.50 (vs OpenFE 3.38, EAAFE 3.13, AutoFeat 3.08, DIFER 3.75, baseline 4.46); avg % change over baseline 26.88% (8.74% excluding OpenML-586 outlier).
- Linear-model gap closure: IIFE+LR within 4.99% of RF* and 5.35% of LGBM*; linear-only gains 72.42% (AutoFeat 59.44%) — explainable linear models reach near-nonlinear performance.
- Standouts: OpenML 586 Lasso IIFE 0.7494 vs OpenFE 0.2150 vs AutoFeat 0.6235 (baseline 0.1383); Jungle Chess LR 0.7988 vs OpenFE 0.7543; Jungle Chess RF 0.9396 vs OpenFE 0.8391.
- Large proprietary: IIFE +6.21% in 5.33h vs OpenFE-II +1.16% (4.17h), AutoFeat-II +4.23% (5.75h).
- Hygiene: CV-as-final-metric inflates 21.03% → 15.33% on holdout; OpenFE transductive groupby-then-* inflates airfoil +14.01%, jungle chess +1.95%.
- Runtimes (total avg): IIFE 1.58h, OpenFE 1.45h, AutoFeat 1.53h, EAAFE 1.31h, DIFER 4.55h.
- Limitations: II internal selection still uses train CV (some selection bias remains); nearest-neighbor MI noisy at small N; RF-importance prefilter drops XOR-type pure-interaction pairs (paper doesn't test this failure mode); anonymous v1 code link may be dead.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- II pair-prior prunes GSE's combinatorial interaction search at O(|F|²) entropy cost vs model retrains per candidate — slots before any OpenFE/DIFER-style expansion (OTHER — feature engineering)
- Hygiene rules as GSE law: holdout test (not CV-as-metric), inductive-only aggregates (groupby-then-* on train only — a hard failure mode for NFL team averages), tune before AND after (TRUST-SIGNAL)
- Explainable linear model within 4.99% of tuned RF = what Garrett can show publicly ("every pick public, show their work") (TRUST-SIGNAL)
- Conditional interaction information I(F_i; F_j; Y | pool) to fix the XOR-blindspot and sports-native bivariate set (weather×dome, rest-differential interactions) as improvement paths (OTHER — feature engineering)
## Engine-actionable? (yes/no + one-line what)
yes — Build GSE-IIFE: compute τ_ij on training seasons only (no RF prefilter — skip the XOR-blindspot), iterative construct with inductive-only aggregates, gated on ≥0.003 LightGBM log-loss gain on held-out 2024 AND beating a random-pair control by ≥0.002.
