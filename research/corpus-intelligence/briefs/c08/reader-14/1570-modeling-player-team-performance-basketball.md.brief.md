# docs/arxiv-program/research/2026-09-21/arxiv-deep/1570-modeling-player-team-performance-basketball.md
## What it is (1-2 sentences)
Deep-read ledger entry on Terner & Franks (2020, arXiv:2007.10550): a survey of statistical/ML methods for quantifying basketball team strategy and player performance (APM/RAPM, EPV, shot modeling, production curves) with no original experiments or data analysis. Verdict: REJECT — replaced by 2501.17711; basketball-only, off-lane for causal inference/injuries/workload.

## Key metrics/methods (formulas where given, else "not specified")
- Reproduces textbook equations only: APM (D_i = beta_0 + sum_p beta_p x_ip + eps_i), RAPM ridge/lasso (beta^ = argmin (D-Xbeta)'(D-Xbeta) + lambda beta'beta), EPV macro/micro decomposition (v_it = E[Z_i|X_{i0},...,X_{it}]), EPVA, hierarchical logistic shot models with CAR spatial priors, NMF shot-region bases, LDA play-type discovery, production-curve methods (hierarchical Bayes, GP, functional PCA, archetypoids, RAPTOR nearest-neighbor).
- No original methods; no features/targets of its own; no validation design; no analysis code.

## Data sources named
None new. References NBA box-score data (basketball-reference, back to 1946-47), NBA.com tracking summaries (from 1996-97), SportVU/Second Spectrum optical tracking (x,y at 20+ fps), NOAH/RSPCT ball-trajectory data; supplementary tables list R/Python scraping packages and repositories.

## Findings (numbers and facts, not vibes)
- No original numerical results. Passim mentions of others' numbers: Miller & Sanjurjo's 11% hot-hand effect after bias correction; the "Dwight Effect" 10% paint-attempt reduction.
- Reversal paradox on defender distance (Figure 3) reproduced from Franks et al. 2015b.
- Causal-inference content is a two-paragraph wishlist in the discussion, not a method.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: nothing to connect — review with zero original results; the portable meta-metrics (discrimination/stability/independence, Franks et al. 2016) belong to the cited primary paper, not this one.

## Engine-actionable? (yes/no + one-line what)
no — nothing to implement beyond the primary sources; if the corpus needs these methods, read Cervone et al. 2016b (EPV) and Franks et al. 2015b (defensive matchup models) directly.
