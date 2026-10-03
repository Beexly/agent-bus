# docs/arxiv-program/research/2026-09-21/arxiv-deep/1141-rotisserie-fantasy-basketball.md

## What it is (1-2 sentences)
Ledger of arXiv:2501.00933 (Rosenof 2025, verdict ADAPT). Derives a closed-form differentiable win-probability objective V = Φ(µD/σD) for Rotisserie fantasy basketball — the key portable insight is the tournament objective form "maximize Φ((expected edge)/uncertainty)" and its corollary that variance is upside, which maps to NFL DFS GPPs and best-ball construction.

## Key metrics/methods (formulas where given, else "not specified")
- V = Φ(µD/σD); µD = ((|O|+1)/|O|)µT − |C|(|O|+1)/2 − µL; σD² = ((|O|+1)/|O|)²σT² + σL².
- µT = ΣcΣo Φ(µc,o); σT² = Bernoulli variances Φ(1−Φ) plus pairwise covariance terms via Lemma 1 (bivariate Normal CDF ≈ Φ(x)Φ(y) + ρφ(x)φ(y) for small ρ); MEV/MVAR tables (expected value/variance of max of N≤20 iid standard Normals); full gradient ∇c,o(V) derived (Eqs. 13–15) for gradient descent.
- GSE adaptation: maximize Φ((µ_lineup − payline)/σ_lineup), where payline = estimated contest cash-line; or scenario-based MILP maximizing fraction of K sampled lineup-score scenarios above payline.
- Adoption gate in file: on 2024 17-week backtest, tournament-objective lineups beat max-expectation lineups by ≥ 5 percentage points in cash rate with no worse top-1% hit rate.

## Data sources named
Simulated NBA fantasy seasons 2004-05 through 2023-24: weekly results sampled from real seasons, Rotisserie scoring on full-season weekly averages, Gaussian noise added (std τM·|N| counting stats, τR/|N| percentage stats), χ ∈ {0.25, 0.5, 0.75} encoding projection-confidence; category correlation ρ = average player-level correlation matrix of the draft pool. Opponents = G-score heuristic drafters (not humans). No code released.

## Findings (numbers and facts, not vibes)
- H₀ Rotisserie win rates vs G-score field: χ=0.25 → 37.5%; χ=0.5 → 17.2%; χ=0.75 → 12.1%; all above the 1/12 ≈ 8.3% random baseline. Edge shrinks as projection uncertainty grows.
- Core insight (§7.2.1): because µD is generally negative, increasing σD raises V; per-matchup variance Φ(1−Φ) is maximized at Φ=½, so the objective rewards balanced 50-50 exposures and penalizes punting, which narrows outcome spread — punting only pays when it raises EV enough to offset the variance loss.
- Behavioral finding: H₀ punted categories far less than head-to-head versions (except occasional FT% punts at low χ; every punting team at χ=0.25 drafted ≥1 of four notoriously poor-FT% players, Table 2).
- Limitations honestly enumerated: opponents not identical (draft-seat advantages), not independent (zero-sum points), max-of-Normals is Gumbel not Normal, inattentive managers distort counting stats.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: tournament roster-construction theory — balanced 50-50 exposures beat stars-and-scrubs when you must beat many opponents; maps to best-ball drafts and GPP portfolio design.
- OTHER: the exact GPP objective GSE's DFS lane lacks — maximize Φ((µ − payline)/σ) instead of expected points; complements the 1091 portfolio-IP read (objective function vs portfolio construction).

## Engine-actionable? (yes/no + one-line what)
Yes — swap the DFS optimizer's maximize-expected-points objective for maximize Φ((µ_lineup − payline)/σ_lineup) in GPP contests (lineup covariance from nflverse weekly fantasy points + game-stack correlations), gated on a ≥5 pp cash-rate backtest win.
