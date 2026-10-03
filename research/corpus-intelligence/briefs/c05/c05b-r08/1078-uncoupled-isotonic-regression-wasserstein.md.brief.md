# arxiv-program/research/2026-09-21/arxiv-deep/1078-uncoupled-isotonic-regression-wasserstein.md
## What it is (1-2 sentences)
Research brief (wave2-reader-20) on Rigollet & Weed's arXiv:1806.10648v2, a pure minimax-theory paper proving matching upper/lower bounds for estimating a monotone regression function from *unpaired* x/y observations via minimum Wasserstein deconvolution. **Verdict: REJECT** — no data, no experiments, no code, no operational result; replaced in the corpus by 2506.11399v1 (ledger 1080, ADAPT).
## Key metrics/methods (formulas where given, else "not specified")
- Model: y_i = f(x_i) + ξ_i, f nondecreasing with |f| ≤ V, ξ_i ∼ 𝒟 i.i.d. sub-exponential (Orlicz ψ_1 norm finite), 𝒟 known; only unordered sets {x_i} and {y_i} observed.
- Proposition 1 (isometry): ‖f − g‖_p = W_p(π_f, π_g) for isotonic f, g, where π_f is the pushforward of design points through f.
- Estimator (eq. 4): f̂ ∈ argmin_{g∈ℱ_V} W_2²(π_g * 𝒟, π̂); efficient version (eq. 5) is a convex program over measures on an O(n^{1/4}) grid, rounded via quantile functions Ĝ(x_i) = 𝒬_μ̂(i/n).
- Theorem 4 (moment control): W_p(μ,ν) ≤ Cp·sup_{ℓ≥1} Δ_ℓ(μ,ν)/ℓ, Δ_ℓ = |E[X^ℓ] − E[Y^ℓ]|^{1/ℓ} — first W_p (p>1) moment-control result for unbounded measures; tight by Proposition 3.
- Theorem 2 (upper bound): sup risk^{1/p} ≤ Cp·V·(log log n)/(log n)·(1+o(1)).
- Theorem 3 (lower bound): same rate unavoidable even with Gaussian noise, via fuzzy-hypotheses construction with k = c_1(log n)/(log log n) matching moments (Lemma 3, Lemma 11).
- Numeric gate computed in the brief: (log log n)/(log n) at n=10⁴ ≈ 0.24 vs n^{−1/3} ≈ 0.046 for paired isotonic regression — uncoupled error decays ~5× slower.
## Data sources named
None — entirely theorem/proof-based; no experiments, simulations, or data.
## Findings (numbers and facts, not vibes)
- Minimax risk ≍ V·(log log n)/(log n) for all p ∈ [1,∞), exponentially worse than standard (paired) isotonic regression's n^{−1/3}.
- Unpaired datasets need exponentially larger sample sizes to match paired-data accuracy — a negative result: unpaired marginal data is useless at GSE sample sizes.
- No consistent estimator exists unless the noise distribution 𝒟 is known (identifiability requirement).
- Fixed design on [0,1], univariate only; piecewise-constant f and multivariate extensions left as future work.
- GSE's calibration pipeline already operates on paired predictions/outcomes (paper #1, ENIR, ADAPT), so the paper changes nothing operationally.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The REJECT is itself load-bearing — it is analytic confirmation that GSE's paired prediction/outcome calibration pipeline (ENIR) is the statistically correct design; learning a monotone calibration map from unpaired marginals is infeasible.
- OTHER: method transfer — the minimum-Wasserstein-deconvolution machinery (Proposition 1 isometry, moment-matching control of W_p) is a theoretical template if GSE ever faces distribution-shift calibration where only marginals are available.
## Engine-actionable? (yes/no + one-line what)
No — pure theory REJECT; the only action is the standing rule: keep calibrating on paired data, which GSE already does.
