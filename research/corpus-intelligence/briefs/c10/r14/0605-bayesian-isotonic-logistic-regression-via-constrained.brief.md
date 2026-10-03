# arxiv-program/research/2026-09-21/arxiv-deep/0605-bayesian-isotonic-logistic-regression-via-constrained.md
## What it is (1-2 sentences)
Deep read of Montagna, Orani & Argiento (2019, arXiv:1909.03802v1): Bayesian isotonic logistic regression with constrained B-splines (partial monotonicity via recursive ε-decrement priors) applied to tennis serve-advantage decay vs rally length. Verdict ADAPT — port the constrained-spline machinery as GSE's standard monotone probability-modeling tool (calibration curves, 4th-down conversion, completion probability); skip the tennis application itself.
## Key metrics/methods (formulas where given, else "not specified")
- Likelihood: Y_{ij}|p_{ij}(x) ~ Bernoulli(p_{ij}(x)); logit p_{ij}(x) = f_i(x) + (α_i − α_j) (serve curve + Bradley–Terry ability difference)
- f_i(s) = Σ_{m=1}^M β_{i,m} b_m(s), B-splines order k=4, M=9, knots (1,1,1,1,2,3,4,7,11,15,15,15,15) on [1,15]
- Partial monotonicity: β_{i,m} := β_{i,m−1} − ε_{i,m}, ε_{i,m}|r_ε,s_ε ~ Gamma(r_ε/s_ε², (r_ε/s_ε)²), r_ε,s_ε ~ U(0,10) — first m_{L₀}−k coefficients free (rich-data region learns freely), constrained beyond L₀=3
- Proposition 1: non-increasing restricted control polygon ⇒ spline non-increasing on [L₀,U] (proof in Appendix A)
- Abilities: α_i ~ N(α₀,σ²_α), Σα_i = 0 identifiability; court extension α_{i,c}, c ∈ {clay, grass, hard}
- Fit: Gibbs via rjags, 20,000 draws, 1,000 burn-in, thinning 20; model comparison via LPML/WAIC/DIC/RMSE
## Data sources named
Point-by-point Grand Slam singles 2012+, scraped by Jeff Sackmann (also in R package `deuce`); ATP 145,510 rallies (130,577 short ≤4 shots), WTA 81,880 (71,592 short); train 90 servers, test 50 (ATP)/49 (WTA) hold-out servers.
## Findings (numbers and facts, not vibes)
- Partial monotonicity wins all four criteria (Table 3): LPML −52,739.1, WAIC 105,747.6, DIC 105,828, RMSE 19.32 vs exponential baseline −52,813.7 / 105,821.3 / 105,876 / 22.52; unconstrained −52,760.4 / 105,853.9 / 105,818 / 20.71; fully monotone −52,744.9 / 105,790.4 / 105,875 / 20.37 — "no dramatic difference"; the win is principled shape + sparse-region uncertainty, not fit leaps
- Unconstrained splines learn implausible increasing segments at intermediate rally lengths (Fig. 4)
- Serve advantage: P(server wins | x=1) = 0.83 men (95% CI 0.75–0.94), 0.69 women (0.55–0.83); at x=15: men (0.51,0.64), women (0.46,0.55)
- Djokovic best baseline rally ability (α=0.35); by surface — clay: Nadal 0.52, grass: Federer 0.28, hard: Djokovic 0.34; Serena top WTA baseline 0.26 (0.18–0.35)
- Trade-off conclusion: top players separate on rally ability, not serve; hold-out serve curves track observed points via hierarchical borrowing
- Limitations: knot/L₀ hand-tuned (sensitivity in unpublished thesis); Gibbs/rjags dated (NUTS-friendly for Stan); sum-to-zero identifiability awkward for streaming
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Monotone calibration module: replace binned recalibration — P(actual win | model prob) must be non-decreasing, smooth isotonic B-spline with credible bands — TRUST-SIGNAL, OTHER
- 4th-down/2-pt conversion vs yards-to-go: monotone non-increasing, sparse at long distances — exactly the paper's sparse-tail problem — COACHING
- Completion probability vs air yards/separation: monotone decreasing — QB-BEHAVIOR
- QB "advantage decay" analog: scripted-play advantage over drive-play number 1–15 decaying to baseline — SCHEME, COACHING
- Partial-monotonicity principle (learn freely where data rich, constrain where sparse) as general engine-calibration doctrine — OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — implement the BILR constrained-spline fitter (~3 days, Stan) as the engine's monotone calibration module and 4th-down conversion curve model, per the file's spec and acceptance gates.
