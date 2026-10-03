# arxiv-program/research/2026-09-21/arxiv-deep/1192-football-goal-distributions-and-extremal-statistics.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:cond-mat/0110605v2 (Greenhough et al. 2001): a descriptive statistical-physics study fitting Poisson, negative-binomial, and extreme-value families to soccer goal-count distributions. Verdict: REJECT — no predictive model, no out-of-sample test, no calibration, no betting evaluation.
## Key metrics/methods (formulas where given, else "not specified")
- Poisson: P(n) = e^(−λ) λ^n / n!; negative binomial as over-dispersed alternative; extreme-value families (Gumbel a=1, Fréchet, Weibull) fitted to pooled worldwide PDFs via moment/matching fits with tail comparisons. No train/test split, no cross-validation.
## Data sources named
Worldwide domestic league matches, 169 countries, 1999–2001: >135,000 matches; English top division 1970/71–2000/01: ~13,000 matches; FA Cup 1970/71–2000/01: ~5,000 matches. Source described as a football results database (no URL given); effectively unreplicable as stated.
## Findings (numbers and facts, not vibes)
- Pooled worldwide: Poisson/NBD fail over the full range; tails fit Fréchet with a=1.04 (home), a=1.10 (away); total goals fit Gumbel (a=1).
- Tail departure points: home beyond ≈ μ+3σ (~6 goals), away beyond ≈ μ+4σ (~6 goals), total beyond ≈ μ+3σ (9 goals).
- Total-goal moments: domestic μ=2.9, σ=1.9; English league 2.6, 1.7; FA Cup 2.8, 1.8. Mean home-minus-away goal difference: 0.51 (domestic pooled).
- English-only data are adequately fit by Poisson/NBD with no extremal signature — the pooling of 169 heterogeneous leagues plausibly manufactures the heavy tail (mixture effect), per the file's own limitation section.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: soccer score-distribution characterization only. Rejected at the problem level — adds no estimation technique, predictive model, or calibration method for GSE's NFL spreads/totals/fantasy lanes; the central empirical claim is likely a pooling artifact.
## Engine-actionable? (yes/no + one-line what)
no — purely descriptive fit with no forecast produced; only conceivable future use would be a weekend project testing whether tail-aware total-goals models beat Poisson baselines on out-of-sample log-loss, which the paper does not attempt.
