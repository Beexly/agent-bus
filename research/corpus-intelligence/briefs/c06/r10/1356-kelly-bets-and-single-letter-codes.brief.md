# arxiv-program/research/2026-09-21/arxiv-deep/1356-kelly-bets-and-single-letter-codes.md
## What it is (1-2 sentences)
An information-theoretic paper (arXiv:2104.14277v2, Eckford & Moffett) proving that proportional (Kelly) betting is exactly optimal single-letter coding: it derives a linear lower bound on the rate-distortion function R(D) ≥ H(X) − D − Λ* that holds with equality iff the bettor uses proportional betting, plus the converse that every optimal single-letter code corresponds to a Kelly-betting investment game. Verdict ADAPT — upgrades Kelly from a staking rule to an information-pricing rule.
## Key metrics/methods (formulas where given, else "not specified")
- Wealth: W_{n+1} = W_n·⟨s(y_n), r_{z_n}⟩; growth rate G = Σ_{x,y} p(x,y)·log⟨s(y), r_x⟩.
- Distortion: d(x,y) = −log w_x(y), w(y) = s(y)R; rewritten d(x,y) = −log t_x^{(y)} − Λ*(x), Λ*(x) = log q_{xx}.
- Main bound: R(D) ≥ H(X) − D − Λ* — equality iff φ_{T,px} ≠ ∅, at D* = −Σ p* log t_x^{(y)} − Λ*.
- Proportional betting = T = P_{x|y} (bet conditional outcome probabilities) = Kelly in this notation.
- Nonsquare-R bound: R(D) ≥ H(X) − D − min_{v∈null(R)} Λ*_v; adding a row to R (new bet type) lowers the bound under stated conditions (Corollary 6 / Theorem 5).
- Converse: −(1/c)E[d(x,y)] = Λ* − H(X|Y), satisfied by diagonal R with r_{xx} = e^{d_0(x)/c}, s_x = p(x|y).
## Data sources named
None — analytical paper with computed R(D) curves (Bregman-divergence EM algorithm) and Monte Carlo channel illustrations; figure code + Hamming-code notebook at https://doi.org/10.5281/zenodo.14845449; illustrative examples (E. coli CCR model, catastrophe model, random Py|x channels).
## Findings (numbers and facts, not vibes)
- Proportional betting is sufficient but not necessary for single-letter-code optimality.
- Adding strategies (rows of S) turns a single contact point into a continuum of contact points (underdetermined py); adding a row r = [0.5,0.5,2] to R visibly lowers the bound and the new bound is achievable with equality.
- Randomly drawn channels' operating points cluster near R(D) along its entire length.
- Limitations: finite alphabets, known px, capacity-achieving input assumption rarely hold in sports betting; real GSE staking is fractional Kelly so the equality condition essentially never holds exactly — the bound is a diagnostic, not an operating point.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Feed-pricing rule (a feed is worth its cost iff it moves the distortion bound) and staking-gap diagnostic — OTHER (bankroll/information-value lane)
## Engine-actionable? (yes/no + one-line what)
yes — Value data feeds by their incremental mutual information (buy iff expected profit lift exceeds feed cost) and run the staking-gap diagnostic: compute the gap between GSE's realized (D,R) operating point and the bound to flag non-proportional staking before it shows up in P&L.
