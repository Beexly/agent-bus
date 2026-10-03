# arxiv-program/research/2026-09-21/arxiv-deep/0813-diversification-limited-information-kelly-game.md
## What it is (1-2 sentences)
Full-text ledger on arXiv:0803.1364 (Medo, Pis'mak, Zhang 2008): analytical Kelly theory for M simultaneous binary games, the outsider-vs-insider diversification threshold, and the finite-memory penalty when win probability must be estimated from the last L outcomes. Verdict: ADAPT — the first fully-read Kelly paper in the program, directly portable to GSE multi-pick Kelly sizing after generalizing binary ±1 payoffs to decimal odds.
## Key metrics/methods (formulas where given, else "not specified")
- Single game: f_K(p) = 2p−1; G_K(p) = ln 2 − S(p), S(p) = −[p ln p + (1−p) ln(1−p)]; R_K(p) = 2·p^p(1−p)^{1−p} − 1.
- M simultaneous games, unsaturated: f*(p) = (2p−1)/[M(2p−1)² + 4p(1−p)] (Eq. 10); saturated: f* = (1/M)[1 − 2p(1−p)^M/(2p−1)] (Eq. 11); M=2 exact: f*_2 = (2p−1)/(4p²−4p+2).
- Outsider beats insider when Δ < (p−1/2)(√(2M)−1) (small-edge approximation) — diversification beats information over a wide range.
- Finite memory: f*(w,L) = (2w−L)/(L+2); growth penalty G(p,L) ≈ G_K(p) − 1/(2L) (Eq. 19); L_min ≈ 1/[2·G_K(p)].
- Assumes: binary ±1 payoffs, independent identical games (correlations deferred), constant p within window, no shorting.
## Data sources named
None — pure theory with numerical verification (Mathematica solutions, simulated annealing on 5×1,000,000-turn realizations of a stylized p-cycle).
## Findings (numbers and facts, not vibes)
- p=0.6 → f_K = 0.2, compounded R_K = 2.0% (vs 20% naive expected return).
- Minimum memory for profitability: p=0.51 → L ≥ 1,761 outcomes; p=0.52 → L ≥ 438.
- Below p ≈ 0.63 (numerical threshold), Kelly with estimated p can have NEGATIVE growth at finite memory — INFERENCE: most small-edge pick types cannot be safely Kelly-sized without shrinkage.
- Eq. 19 accurate within 10% when L ≳ 9p(1−p)/(p−1/2)²; Eq. 20 series "highly accurate already for L=20".
- "The higher is p, the harder it is for the insider to outperform the outsider."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (bankroll/decision theory): multi-pick Kelly sizing formulas (M simultaneous games); Laplace-smoothed sizing with backtest-sample-size gate; correlation haircut needed since the paper assumes independence (NFL slate bets are correlated — Eq. 10 would over-bet).
## Engine-actionable? (yes/no + one-line what)
Yes — implement generalized multi-pick Kelly solver (decimal odds), apply Laplace-smoothed p̂ with the L_min backtest-sample gate, and add a correlation haircut; walk-forward test on 2024 engine picks vs flat stakes and fractional Kelly.
