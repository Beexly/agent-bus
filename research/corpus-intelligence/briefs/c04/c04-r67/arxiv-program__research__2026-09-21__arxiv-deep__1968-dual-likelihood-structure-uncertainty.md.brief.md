# arxiv-program/research/2026-09-21/arxiv-deep/1968-dual-likelihood-structure-uncertainty.md
## What it is (1-2 sentences)
A causal-inference paper (Strieder & Drton, 2024, arXiv:2402.08328) constructing confidence regions for total causal effects that rigorously capture BOTH causal-structure uncertainty and effect-size uncertainty, via inverting a dual-likelihood ratio test that has a closed-form solution (no grid search or numerical optimization per effect value). Reader verdict is ADAPT, as the corpus's first structure-uncertainty quantification for published causal claims.
## Key metrics/methods (formulas where given, else "not specified")
- Model: linear SCM X = BX + ε, ε ~ N(0, σ²I) (equal error variances — the identifiability restriction), B permutable to strictly lower-triangular (DAG).
- Dual likelihood: reciprocal of the Gaussian likelihood in the sample covariance; dual LR test statistic equals the classical LR statistic for a modified problem (total effects ↔ direct effects correspondence); closed-form solution for constrained total effects.
- Critical values: conservative asymptotic χ² bounds giving a simple upper bound on the dual-LR statistic's distribution.
- Computation: bottom-up procedure starting from sink nodes, recursively searching causal orderings in reverse and rejecting implausible partial orderings early via the unrestricted partial dual-likelihood estimate.
- Test-inversion framework: values of the total causal effect not rejected form the confidence region.
## Data sources named
- Simulation only: 1000 synthetic datasets per setting from linear SCMs on randomly selected DAGs; edge weights ~ N(β, 0.1) for a range of average direct-effect strengths β; errors ~ standard normal; confidence level α = 0.05 for total causal effect C(1→2). Baseline: the LRT-inversion method of Strieder & Drton 2023. No code link stated in the paper.
## Findings (numbers and facts, not vibes)
- Coverage: "achieve the desired coverage in all our simulation settings, even in low sample sizes" (95% nominal) despite conservative asymptotic critical values.
- Width: "the difference in performance between both methods seems negligible" — dual-likelihood regions essentially as tight as the expensive LRT-inversion regions.
- Speed: "computation times ... significantly lower than the competition"; exact timing numbers live in figures (not quoted in text).
- Qualitative: regions "successfully pick up on the direction and the numerical size of the total causal effect while correctly quantifying the remaining uncertainty in structure as well as effect size."
- Limitations in file: equal error variances is a strong untestable identifiability crutch (sports indicators have wildly unequal variances); linear Gaussian only; superexponential structure space bites beyond "moderate dimensions"; conservative χ² bounds may over-widen regions; causal sufficiency assumed (no latent variables).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Honest confidence intervals for published causal claims (e.g., C(pressure rate → defensive EPA/play)); claims whose CI covers 0 downgraded to "associated with" language — INFERENCE from the file's GSE spec; OTHER (content/calibration, not player behavior).
- Variance-robustness curve (compute regions under variance-ratio bounds κ ∈ {1,2,5}) to rank which causal claims survive realistic variance heterogeneity — INFERENCE from the file's improvement experiment; OTHER.
## Engine-actionable? (yes/no + one-line what)
yes — Adopt dual-likelihood CIs for published causal claims iff simulation coverage ≥0.93 at d=20, n=380, real-data runtime <10 min for 20 edges with pruning, and median width ≤2× the oracle-structure width (reject if coverage <0.90 or width >3× oracle).
