# arxiv-program/research/2026-09-21/arxiv-deep/0840-how-many-independent-bets-are-there.md

## What it is (1-2 sentences)
Paper ledger for arXiv:physics/0601166v3 (Polakow & Gebbie 2006) using SVD/RMT on the correlation matrix with the Kaiser–Gutman rule to count effectively independent bets, replacing naive breadth √N with √(N_effective) for Kelly-style aggregate sizing. Verdict: ADAPT — GSE should run the breadth diagnostic on correlated pick slates before aggregate Kelly sizing.

## Key metrics/methods (formulas where given, else "not specified")
- Eigendecomposition/SVD of return/correlation matrix; Kaiser–Gutman rule: retain factors with eigenvalue ≥ 1 as effective dimensions (signal vs noise)
- Effective breadth ≈ √(N_effective); scale total aggregate stake exposure by √(N_effective/N) instead of sizing picks independently
- Assumptions: correlation matrix stable over estimation window; returns approximately stationary

## Data sources named
- 41 liquid Johannesburg Stock Exchange (JSE) equities, 4.3 years daily data from March 2003; extended universe adds South African government bonds + 13 international assets
- MATLAB code available from author by request (not openly hosted)

## Findings (numbers and facts, not vibes)
- 41 JSE equities: 8 effective dimensions → breadth ≈ 3 vs naive √41 ≈ 6
- Equities + bonds: 9 dimensions → breadth 3 vs conventional ≈ 7
- Mixed universe (+13 international): 13 dimensions → breadth ≈ 4 vs conventional ≈ 8
- Consistent message: true independent-bet count roughly half the naive count
- No out-of-sample validation; purely demonstrative; bet-outcome correlations (binary) need a different estimator, e.g., tetrachoric or bootstrap (file note)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pre-sizing breadth diagnostic feeding aggregate Kelly: scale exposure by √(N_effective/N) per weekly slate — OTHER
- Rolling 12-week time-varying breadth with Marchenko–Pastur upper-edge test replacing Kaiser–Gutman (dynamic de-risk when diversification is illusory, e.g., heavy-favorite slates) — OTHER

## Engine-actionable? (yes/no + one-line what)
yes — build the breadth diagnostic on engine pick PnL correlation (1-day effort) and gate: ADOPT if effective breadth is consistently <70% of √N on real slates.
