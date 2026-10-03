# arxiv-program/research/2026-09-21/arxiv-deep/0834-constrained-max-drawdown-fast-robust.md
## What it is (1-2 sentences)
Full-text ledger on arXiv:2401.02601 (Dorador 2024): replaces mean-variance portfolio optimization with a maximin LP (maximize the worst-case daily return), plus a constrained MILP variant (selected asset ≥5%, any weight ≤50%); tested on ~400 S&P 500 stocks, train during the 2020 COVID crash (Feb–May 2020), test 3 months OOS (May–Aug 2020). Verdict: ADAPT — sizing-layer candidate for the GSE bet portfolio.
## Key metrics/methods (formulas where given, else "not specified")
- MD LP: maximize t subject to portfolio daily return ≥ t for every training day, weights sum to 1 (maximin objective, LP-representable, no covariance estimation needed).
- Constrained MD MILP: adds binary selection variables enforcing w_i ≥ 0.05·z_i and w_i ≤ 0.50·z_i (paper light on formal notation; formulation as described in the paper).
- Baselines: classic Markowitz (min variance for return target), reverse Markowitz, simultaneous mean/variance. Robustness check: perturb covariance 2.8% and measure allocation drift.
## Data sources named
~400 S&P 500 stocks, daily returns from Yahoo Finance (ticker list not stated); train 2020-02-01–2020-05-01, test 2020-05-02–2020-08-01 (single time-ordered split, COVID window).
## Findings (numbers and facts, not vibes)
3-month OOS results, quoted exactly:
| Model | 3-mo return | Daily SD | Max DD |
|---|---|---|---|
| Markowitz | 5.7% | 1.7% | −6.1% |
| Reverse Markowitz | 5.3% | 1.7% | −7.2% |
| Simultaneous mean/variance | 5.2% | 2.1% | −8.6% |
| MD (LP) | 9.4% | 2.3% | −3.3% |
| Constrained MD (MILP) | 8.5% | 2.0% | −3.3% |
- Solve time: constrained MILP 0.0001 s vs 0.02 s for the QPs — claimed 200× faster.
- 2.8% covariance perturbation moved other models' allocations 38.1%–47.1% vs only 3.7% for constrained MD.
- Maximin objective naturally concentrates into fewer, larger positions.
- Limitations: single split on one COVID-era window ("preliminary" per author); no transaction costs/turnover analysis; no diversification signal beyond worst-day constraint.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (bankroll/decision theory): covariance-free sizing alternative to Kelly — maximin drawdown objective directly matches a bankroll-preservation goal; complements the Kelly sizing lane (0813) with a drawdown-focused counterpart.
## Engine-actionable? (yes/no + one-line what)
Yes — build a constrained-MD bet-portfolio constructor (engine edge estimates + bootstrapped bet-outcome covariance) and walk-forward it against fractional Kelly and flat stakes on 2024–2025 picks; adopt if max drawdown ≥20% lower than flat staking at equal-or-better ROI.
