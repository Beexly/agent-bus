# arxiv-program/research/2026-09-21/arxiv-deep/1006-bounded-abstention-rate-binary.md
## What it is (1-2 sentences)
Full-text ADAPT verdict on arXiv:1905.09561v1 (2019), Shekhar/Ghavamzadeh/Javidi, "Binary Classification with Bounded Abstention Rate" — derives the Bayes-optimal classifier under a bounded-rate abstention constraint (abstain on at most fraction δ, no per-abstention cost) plus a semi-supervised plug-in rule that sets the abstention threshold from UNLABELED data with minimax-near-optimal excess-risk bounds.

## Key metrics/methods (formulas where given, else "not specified")
- Bayes-optimal threshold (Eq. 1, verbatim): γ_δ = sup{γ>0 : P_X(|η(X)−1/2| ≤ δ)} ≤ δ — INFERENCE: the file literally prints "P_X(|η(X)−1/2| ≤ γ) ≤ δ" inside the sup; the rendered formula in the file is γ_δ = sup{γ>0 : P_X(|η(X)−1/2|≤γ) ≤ δ}. Partition by ambiguity |η(x)−1/2|: predict ±1 outside, abstain inside.
- Randomized boundary rule (Eq. 2, verbatim): c_0=(δ−δ_1)/(δ_2−δ_1) — randomize on boundary shells ∂G where the ambiguity cdf jumps, to hit the rate exactly.
- Reduces to Chow 1957 / Denis & Hebiri 2015 when the cdf of |η−1/2| is continuous, but holds for arbitrary distributions (no continuity assumption on the ambiguity cdf).
- Plug-in classifier (§4): (i) estimate η with an adaptive histogram (partition [0,1]^D into ⌈1/h⌉^D cubes, cell means); Lepski-type data-driven bandwidth selection balancing stochastic error ∝(nh^D)^{−1/2} against Hölder bias ∝h^β, optimal h≈n^{−1/(2β+D)}; (ii) set the abstention threshold from m UNLABELED samples via the empirical cdf of |η̂−1/2| — satisfies the δ constraint with high probability and handles cdf discontinuities.
- Estimator error split (Eq. 3): |η−η̂| ≤ stochastic + bias; e_S(h,x)=√(32 log(nμ_min)/(n μ_min h^D)), e_D = sup-cell variation of η.
- Assumptions: P_X has density bounded in [μ_min, μ_max] (A.4/A.5); η Hölder (L,β); margin (Tsybakov-type) assumption for rates.
- Theorem 2: excess-risk upper bound under Hölder + margin assumptions; Theorem 3: minimax lower bound — near-optimal rates.
- §5: tractable convex-surrogate algorithm for high dimensions (fixed-cost machinery reused), with excess-risk bounds in the realizable case. Algorithm 1 (plug-in, tight rate control) vs Algorithm 2 (convex surrogate baseline, searches a smaller set → conservative).
- Experiment sweep: δ ∈ {0.1,…,0.6} on UCI PIMA dataset (standard 768×8); rejection rate vs classification accuracy (Fig. 1, chart-read — no numeric table extracted).
- Implementations in CVXPY.

## Data sources named
- UCI PIMA (Pima Indians Diabetes) dataset, 768×8 (standard size cited from file).
- No other datasets; no sample sizes beyond PIMA stated in the extracted text. No code or data released beyond the CVXPY implementation mention.

## Findings (numbers and facts, not vibes)
- Bayes-optimal rule: partition by ambiguity |η(x)−1/2| with threshold γ_δ (Eq. 1); predict ±1 outside, abstain inside; randomize on boundary shells ∂G with c_0 (Eq. 2) when the cdf jumps.
- Figure 1 (PIMA, chart-read): accuracy rises MONOTONICALLY with δ (more abstention → higher accuracy on decided points); Algorithm 1's achieved rejection rate tracks δ TIGHTLY, Algorithm 2 is conservative (achieves less than δ).
- Theory: minimax-near-optimal excess-risk rates (Theorems 2–3) — the paper's main contribution is the bound, not the empirical margin. No numeric table extracted; single dataset, one curve, no significance tests, no train/test split details in extracted text.
- Limitations noted in file: histogram plug-in is a theoretical device — intractable in high dimensions (authors' own motivation for §5); bounded-rate assumes the δ budget is the right primitive (in betting the cost of a skip is economic, not a hard rate); no calibration discussion — the rule needs accurate |η̂−1/2|, i.e., calibrated probabilities.
- No label leakage by construction: the threshold is set from unlabeled data.
- GSE implementation spec (from file): Board volume governor — fix weekly publish budget δ (e.g., δ=0.25 skip-rate → publish 75% of slate); each week: (1) compute calibrated |p_cover − 0.5| (ambiguity) for all slate games using the engine's existing calibration stack; (2) set γ̂_δ as the δ-quantile of ambiguity over the slate itself (unlabeled — exactly the paper's semi-supervised step); (3) skip games with ambiguity < γ̂_δ (plus randomized tie-break at the boundary). No labels needed — deployable before kickoff. Tune δ on 2024 season by grid search on profit. Effort estimate: <1 day.
- Numeric gate (ADOPT iff): at δ=0.2 the published set beats publish-all by ≥2.0 pp hit rate (Wilcoxon p<0.05 over 18 weeks) AND achieved skip rate within ±3 pp of δ every week; the single decisive number: hit-rate delta ≥ +2.0 pp at achieved skip rate δ±0.03.
- Reproducible test: 2024 season weekly slates, δ∈{0.1,0.2,0.3}; verify achieved skip rate ≈ δ; metric: hit rate and profit of published set vs publish-all; time-ordered.
- Improvement experiment: replace ambiguity threshold |p−1/2| with edge-based threshold — skip games where |expected value| < γ̂_δ instead — same quantile machinery on unlabeled slate data, score = calibrated edge rather than ambiguity; test whether edge-score variant dominates on profit while keeping tight rate control.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — This is the exact mathematical model of GSE's weekly BOARD VOLUME constraint: "publish at most δ of the slate" with a Bayes-optimal threshold form and a semi-supervised way to hit the rate exactly using the upcoming slate's games as unlabeled data. Serves the calibration/sizing lane (board volume governor, publish/skip cutoff). Complements ledgers 1003/1005 (which pick subsets to maximize metrics) — this paper justifies the VOLUME DIAL itself.
- TRUST-SIGNAL — The randomization-at-the-boundary detail (c_0=(δ−δ_1)/(δ_2−δ_1)) is a principled tie-breaking mechanism when many games sit near the cutoff; it prevents systematic bias in which borderline games get published, protecting public-record integrity on edge cases.
- OTHER — The file explicitly flags that bounded-rate is the wrong primitive for betting economics: "in betting the cost of a skip is economic, not a hard rate" — the engine's economic-abstention (edge-based) variant in the improvement experiment is the more aligned formulation; rate-constrained publish is a product decision (content volume), not a P&L decision.
- OTHER — Calibration dependency: the entire rule requires calibrated |η̂−1/2| — ties the volume governor to the calibration-state labeling doctrine (uncalibrated signals compute in shadow, never publish). A miscalibrated ambiguity estimate makes the threshold meaningless.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the board volume governor: weekly δ-quantile skip on calibrated |p−1/2| over the upcoming slate as unlabeled data (randomized tie-break at the boundary), ADOPT iff hit-rate delta ≥ +2.0 pp at δ=0.2 (Wilcoxon p<0.05 over 18 weeks) with achieved skip rate within δ±0.03 every week.
