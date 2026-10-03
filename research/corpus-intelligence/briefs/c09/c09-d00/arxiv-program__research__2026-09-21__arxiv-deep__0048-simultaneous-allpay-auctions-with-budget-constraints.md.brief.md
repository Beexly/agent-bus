# arxiv-program/research/2026-09-21/arxiv-deep/0048-simultaneous-allpay-auctions-with-budget-constraints.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2505.03291v2 (Liu, Qin, Wang 2025): pure game-theory characterization of Nash equilibria in two-player simultaneous all-pay auctions with hard asymmetric budget constraints across multiple heterogeneous items. Verdict in the file: REJECT — zero empirical content, no mapping to outcome prediction or betting markets.

## Key metrics/methods (formulas where given, else "not specified")
- Analytic Nash-equilibrium existence/construction proofs under complete information. Model: players i∈{1,2}, n items, budget B_i≥0, valuation v_ij>0; pure strategy = bid vector with Σ_j x_ij ≤ B_i.
- Single item: NE support supremum L = min{B_1,B_2,v_1,v_2}; pure-strategy NE exists iff B_1=B_2 ≤ ½·min{v_1,v_2}; otherwise mixed CDFs (piecewise: F_s(x)=x/v_w on [0,L) etc.).
- Multi-item: equilibrium strategies are joint (correlated) distributions across items supported on line segments, e.g., f_i = 1/√(2c) uniform on x_i1+x_i2=c with c = min{v_11,B_1} (full symmetry); asymmetric cases use piecewise-uniform densities with mass points, thresholds T_1 = v_w1 − (v_w1/v_w2)L_2, T_2 = v_w2 − (v_w2/v_w1)L_1.
- Three items, symmetric valuations: NE mixtures over triangle segments with weights P_AB, P_BC, P_CA ∝ (z−v_3)/(z−v_2), 1, (z−v_3)/(z−v_1), z=(v_1+v_2+v_3)/2.
- Validation: not applicable — proofs only, no simulations/data/code.

## Data sources named
None — no empirical data, experiments, simulations, or code in the paper.

## Findings (numbers and facts, not vibes)
- With budget constraints a Nash equilibrium does not always exist (unlike the unconstrained all-pay auction), even when B_1=B_2 (Proposition 1).
- Single-item equilibrium may not be unique.
- Joint (correlated) bid distributions are essential: marginals need not be equilibria of the standalone single-item games — e.g., B_1=B_2=1, all v=3 gives marginal F=x on [0,1] while the single-item NE is the pure profile (1,1) (Corollary 1).
- Tie-breaking is critical: with plain ½–½ tie-breaking no best response can exist (Example p. 3); paper uses winner-if-tied-at-cap rule.
- Open: NE existence for ≥4 items; general asymmetric three-item case.
- Motivating applications named (§1.2): elections, LLM development races, R&D competition — not sports betting.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: equilibrium bidding theory. File explicitly rejects the DFS salary-cap analogy: DFS is not an all-pay auction (no pay-your-bid-against-one-opponent structure) and the complete-information two-player equilibrium has no mapping to GSE's prediction task.

## Engine-actionable? (yes/no + one-line what)
no — No empirical content, no GSE data source maps to the model, no product surface; the rejection is unconditional per the file.
