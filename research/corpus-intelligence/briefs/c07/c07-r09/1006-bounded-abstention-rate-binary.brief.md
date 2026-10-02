# arxiv-program/research/2026-09-21/arxiv-deep/1006-bounded-abstention-rate-binary.md
## What it is (1-2 sentences)
Full read of arXiv:1905.09561v1 (Shekhar, Ghavamzadeh, Javidi, 2019): theory of binary classification with a **bounded abstention rate** (abstain on ≤δ fraction of inputs, no per-abstention cost) — derives the Bayes-optimal threshold rule, a semi-supervised plug-in that hits the rate exactly using unlabeled data, and minimax-near-optimal excess-risk bounds. File verdict: **ADAPT** — maps onto GSE's weekly board volume constraint ("publish at most δ of the slate").

## Key metrics/methods (formulas where given, else "not specified")
- Bayes optimal (Theorem 1): abstain where ambiguity |η(x)−1/2| < γ_δ, with γ_δ = sup{γ>0 : P_X(|η(X)−1/2|≤γ) ≤ δ} (Eq. 1); predict ±1 outside; randomize with c_0=(δ−δ_1)/(δ_2−δ_1) on boundary shells where the cdf jumps (Eq. 2). Holds for arbitrary P_XY (no continuity assumptions); reduces to Chow 1957 / Denis & Hebiri 2015 when the ambiguity cdf is continuous.
- Plug-in classifier (§4): (i) estimate η with adaptive histogram (partition [0,1]^D into ⌈1/h⌉^D cubes, cell means; Lepski-type data-driven bandwidth, stochastic error ∝(nh^D)^{−1/2} vs Hölder bias ∝h^β, optimal h≈n^{−1/(2β+D)}); (ii) set abstention threshold from m UNLABELED samples via empirical cdf of |η̂−1/2| — satisfies δ w.h.p., handles cdf discontinuities.
- Excess-risk bounds: Theorem 2 (upper, under Hölder (L,β) + Tsybakov-type margin assumptions); Theorem 3 (minimax lower bound) — near-optimal. §5: convex-surrogate algorithm for high dimensions with realizable-case bounds.
- Stochastic error: e_S(h,x)=√(32 log(nμ_min)/(n μ_min h^D)); e_D = sup-cell variation of η.

## Data sources named
UCI PIMA (Pima Indians Diabetes) dataset, standard 768×8; implementations in CVXPY. No sample sizes beyond standard PIMA stated.

## Findings (numbers and facts, not vibes)
- Figure 1 (PIMA, chart-read): accuracy rises monotonically with δ ∈ {0.1,…,0.6} (more abstention → higher accuracy on decided points); Algorithm 1 (plug-in) achieved rejection rate tracks δ tightly; Algorithm 2 (convex surrogate baseline) is conservative (achieves less than δ). No numeric table extracted; single dataset, one curve, no significance tests.
- Theory is the main contribution (minimax-near-optimal rates, Theorems 2–3), not the empirical margin.
- Assumptions: P_X density bounded in [μ_min, μ_max]; η Hölder (L,β); margin assumption; no continuity of ambiguity cdf required.
- Caveats in file: histogram plug-in intractable in high dimensions (authors' motivation for §5); bounded-rate assumes δ budget is the right primitive (in betting the skip cost is economic, not a hard rate); needs calibrated probabilities (|η̂−1/2| must be accurate).
- Verdict: **ADAPT**; numeric gate: at δ=0.2 published set beats publish-all by ≥2.0 pp hit rate (Wilcoxon p<0.05 over 18 weeks) AND achieved skip rate within ±3 pp of δ every week — decisive number: hit-rate delta ≥ +2.0 pp at achieved skip rate δ±0.03.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Pick-publish/selective-betting volume governor — "board volume governor": fix weekly publish budget δ (e.g., 0.25 skip-rate → publish 75% of slate), set γ̂_δ as the δ-quantile of ambiguity over the slate itself (unlabeled), skip games below it with randomized tie-break at the boundary.
- TRUST-SIGNAL: principled publish/skip discipline — abstention justified by minimax-optimal theory rather than gut; INFERENCE: publishable as "we only bet X% of the board, by design."
- OTHER: improvement experiment in file proposes edge-based threshold (|expected value| < γ̂_δ) instead of ambiguity — tests whether the machinery dominates on profit.

## Engine-actionable? (yes/no + one-line what)
Yes — implement a weekly publish-volume governor: calibrated |p_cover − 0.5| per slate game, skip below the δ-quantile of ambiguity; <1 day effort, no labels needed pre-kickoff; tune δ on 2024 season via grid search on profit.
