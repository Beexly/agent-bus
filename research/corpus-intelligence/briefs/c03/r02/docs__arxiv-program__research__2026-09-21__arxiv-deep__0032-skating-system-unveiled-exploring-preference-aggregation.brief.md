# docs/arxiv-program/research/2026-09-21/arxiv-deep/0032-skating-system-unveiled-exploring-preference-aggregation.md
## What it is (1-2 sentences)
An arXiv deep-read ledger (2026-09-21) of Laryssa Horn et al.'s "Skating System Unveiled" (arXiv:2511.22384v1), a pure computational-social-choice theory paper formalizing the ballroom-dance Skating System as a voting rule and analyzing its axioms and manipulation complexity. **Verdict in the ledger: REJECT** — no data, no empirical results, nothing transfers to GSE.

## Key metrics/methods (formulas where given, else "not specified")
- Staged majority threshold: `maj(V) = ⌊|V|/2⌋ + 1`
- Per-stage score: `score^i(c) = Σ_v 1{pos_v(c) ≤ i}` (top-i approval count)
- Sum of positions tie-break: `sum_pos^i(c) = Σ_v pos_v(c)·1{pos_v(c) ≤ i}`
- SkS winner rule (Definition 1): `i*_c = min{i : score^i(c) ≥ maj(V)}`; `i* = min_c i*_c`; smallest `j ∈ [i*, m]` where `argmax_c(score^j(c))` is a singleton wins, else reduce to `argmin` on `sum_pos^j` among tied candidates, repeating.
- Complexity results: constructive weighted-manipulation is NP-complete **even with only 4 candidates** (Theorem 3); destructive CWM in P (Theorem 4); constructive/destructive control by deleting candidates and constructive control by adding voters NP-complete; destructive control by adding voters in P (Theorems 5–6).
- Axiom profile (Theorem 2): satisfies majority criterion, positive responsiveness, monotonicity, nondictatorship, citizens' sovereignty; violates Condorcet, strong monotonicity, IIA, independence of clones, consistency, participation, resoluteness, strategy-proofness.

## Data sources named
None — theoretical paper. Only hand-constructed examples: a dance final with six couples (31–36) and five adjudicators (A–E); illustrative election examples (Examples 2, 3); Table 2 counterexample (7 voters, C={X,Y,Z}, maj=4).

## Findings (numbers and facts, not vibes)
- Motivating example: Skating System crowns couple 33 while couple 31 (most first-place marks) finishes last — the rule produces counterintuitive results.
- Theorem 1: every unique Bucklin winner is a unique SkS winner; every SkS winner is a Bucklin winner; the difference in sum of positions of Bucklin winners in the decisive stage can be arbitrarily large.
- Bucklin and SkS align on all studied axioms except positive responsiveness, which SkS satisfies and Bucklin does not (Table 3).
- Complexity of unweighted/single-manipulator variants (SkS-CCM, SkS-CM) remains open.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Rank-aggregation rule formalized (SkS vs Bucklin staged-majority with sum-of-positions tie-break) — OTHER
- Motivating example shows the rule's winner can be the candidate with fewest first-place marks — OTHER (a cautionary note for any analyst-ranking aggregation)
- Conjecture-worthy transplant (from ledger §11) — aggregating ensemble member rankings via staged majority is strictly dominated by GSE's existing probabilistic aggregation (de-vigged consensus, CLV-weighted blends) and by Plackett-Luce — OTHER

## Engine-actionable? (yes/no + one-line what)
No — rejected at screening; voting-theory winner-determination with no predictive or calibration application.
