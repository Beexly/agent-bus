# arxiv-program/research/2026-09-21/arxiv-deep/0814-parimutuel-betting-permutations-proportional-mechanism.md
## What it is (1-2 sentences)
A 2008 pure theory/complexity paper (Agrawal, Wang, Ye) on parimutuel call-auction betting over permutation outcome spaces (n! outcomes): proposes "Proportional Betting" with polynomial-time pricing via a convex program, and reconstructs a joint distribution over rankings from marginal prices via maximum entropy. Verdict: REJECT — zero empirical results, no data, and GSE is a pick publisher, not an exchange operator.
## Key metrics/methods (formulas where given, else "not specified")
- CPCAM primal: max π'x − r + μΣθ_i log s_i s.t. Σ_k a_ik x_k + s_i = r; parimutuel prices = dual variables.
- Proportional betting compact LP: max π'x − e'v − e'w s.t. v_i+w_j ≥ Σ_k(x_k A_k)_{ij} (polynomial via matching-polytope integrality).
- Max-entropy joint: min Σ_σ p_σ log p_σ s.t. Σ_σ p_σ M_σ = Q → p_σ = e^{Y·M_σ−1}, n²-parameter exponential-family form; exact computation #P-hard (reduction from (0,1)-matrix permanent); (1−ε)-FPTAS in poly(n,1/ε,1/q_min) via Sinclair Jerrum-Vigoda permanent approximation.
- Complexity results: fixed-reward matching NP-hard (MAX-2-SAT reduction, Theorem 3.1); proportional-betting pricing polynomial with unique doubly-stochastic marginal price matrix Q (Theorem 4.4).
## Data sources named
None — pure theory. Illustrative examples only (horse race, election). No code, no dataset.
## Findings (numbers and facts, not vibes)
- No numerical results of any kind; results are complexity-theoretic: proportional-betting organizer problem polynomial (O(n²+m) variables/constraints); max-entropy joint has n²-parameter exponential-family form with (1±ε)-approximation in poly(n,1/ε,1/q_min).
- Marginal prices are unique and parimutuel (Theorem 4.4); fixed-reward variant is NP-hard even with 2 non-zero entries per bidding matrix.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None identified for GSE's current operation; conditional-only: if GSE ever runs a subscriber prediction contest with parimutuel payouts, Theorem 4.4 is the pricing design reference (OTHER)
## Engine-actionable? (yes/no + one-line what)
No — no empirical content, no transferable predictive method; the max-entropy-from-marginals trick is superseded by GSE's existing Monte Carlo simulation for joint outcomes.
