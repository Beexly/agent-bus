# arxiv-program/research/2026-09-21/arxiv-deep/0885-predicting-outcomes-redefining-winning.md
## What it is (1-2 sentences)
Deep read of Moreland & Superdock (2018, arXiv:1802.00527v1): extending Elo from win/loss to the full margin-of-victory distribution — one Elo rating per handicap threshold h, whose collection traces the spread CDF P(margin > h), plus the same construction for totals. Verdict in file: ADAPT — the per-threshold Elo → spread-CDF construction is the cheapest route to full margin distributions, and the offseason-regression numbers are reusable priors; "slightly worse than Vegas" is the honest baseline.
## Key metrics/methods (formulas where given, else "not specified")
- Per-threshold Elo: R_i(h) updated by K·(1_{margin_i > h} − E_h), E_h = logistic((R_i(h) − R_j(h) + HFA)/s); spread CDF F(h) = P(margin ≤ h) reconstructed from threshold win probabilities; quantiles read off directly.
- Offseason regression: spreads retain 60%, totals retain 70% of prior-season rating; home field 54 Elo points.
- Assumptions: threshold outcomes conditionally independent given latent margin (acknowledged incoherence — CDF need not be monotone); stationary margin distribution within season; constant additive HFA.
## Data sources named
NFL games 2009–2017 (scores public; closing Vegas lines as comparison baseline). Package: github.com/morelandjs/melo.
## Findings (numbers and facts, not vibes)
- Performance: "comparable but slightly worse than Vegas" (paper's characterization; no exact MAE table printed — noted gap).
- Limitations: threshold Elos fit on the same games used to evaluate (walk-forward, but offseason percentages/HFA tuned on full sample); independent thresholds can imply non-monotone CDFs; NFL-only; no tail-calibration analysis (the part that matters for betting).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: a GSE margin-distribution service — per-threshold Elos (or ordered-logit-smoothed joint version for monotonicity) updated walk-forward, serving P(cover | line) and P(over | total) for any line, enabling fair-price computation for alternative lines and teasers (the teaser-pricing experiment is where the edge would live: Wong teasers through key numbers vs market prices).
## Engine-actionable? (yes/no + one-line what)
yes — clone melo, run walk-forward on 2015–2024 NFL (nflverse); adopt if the spread CDF's 2024 log score is within 0.01 of GSE's current margin model; the offseason-regression priors (60%/70%) and 54-Elo HFA stand as adopted constants either way.
