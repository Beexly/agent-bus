# docs/arxiv-program/research/2026-09-21/arxiv-deep/1812-rapm-possession-sequences-soccer.md
## What it is (1-2 sentences)
Regularized adjusted plus-minus for soccer: Bajons & Hornik (arXiv 2407.17832) segment matches into possession sequences and fit binomial logistic regression with four penalty structures (ridge, group lasso, exclusive lasso, generalized/ranking lasso) to split each player's rating into direct (on-ball) and indirect (on-field) contributions; GSE verdict recorded as ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
Ridge: min_β −ℓ(β) + λ‖β‖²₂; group lasso: −ℓ(β) + λΣ_g w_g‖β_g‖₂ (8 groups = 4 positions × direct/indirect); exclusive lasso: λΣ_g‖β_g‖₁²; generalized lasso: λ‖Dβ‖₁ with block-structured D. Binomial GLM via IRLS (glmnet/SGL/ExclusiveLasso); binomial generalized lasso reformulated as conic program (linear + exponential cones) solved via ROI. Validation: bivariate-Poisson (Karlis & Ntzoufras) and ordered logistic regression, each with team-strength difference (mean of player ratings) as sole covariate; metrics = Brier score and informational loss; paired two-sided t-tests vs baselines.
## Data sources named
Spanish La Liga 2017/18 open event-stream data via Figshare (Pappalardo et al. 2019); reference baselines = clubelo.com ELO and PCV (Bajons 2023 debiased ML metric).
## Findings (numbers and facts, not vibes)
Possession = sequence of consecutive on-ball actions (final-third, ≥3 actions, or set pieces); goal indicator response has 1.3% positive rate. Train = first 280 matches, test = last 100. Group lasso best under both frameworks × both criteria; ridge close behind; generalized lasso worst. All four beat Baseline, ELO, PCV; ELO and PCV only slightly beat intercept-only baseline. Paired t-tests: ridge/group/exclusive beat Baseline and ELO at 5% (OLR) and 10% (bivariate Poisson). Ridge vs group-lasso rating correlations ≥0.7 for all position groups; offensive players load on direct involvement, defensive on indirect. Exact Brier/IL table values blanked in extraction — orderings and significance verbatim.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: position-group penalty structure (8 groups = 4 positions × direct/indirect) maps to NFL position groups (QB/WR/RB/TE/OL).
- QB-BEHAVIOR: direct (touched ball) vs indirect (on-field) split is the QB-decoy/blocker credit template.
- TRUST-SIGNAL: train-ratings → single-covariate game-outcome prediction vs ELO is a reusable rating-validation protocol.
- OTHER: group lasso's win over ridge is evidence for grouped shrinkage in GSE's RAPM-style ratings; drive-segment (NFL) / stint (NBA) design-matrix spec given.
## Engine-actionable? (yes/no + one-line what)
Yes — build NFL drive-segment RAPM (per-segment direct-involvement + on-field indicators) with group-lasso position penalties and expected-points targets, validated against ELO on held-out games.
