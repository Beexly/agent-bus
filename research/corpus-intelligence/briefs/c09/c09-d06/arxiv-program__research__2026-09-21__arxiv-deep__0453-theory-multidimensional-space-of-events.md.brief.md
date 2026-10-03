# arxiv-program/research/2026-09-21/arxiv-deep/0453-theory-multidimensional-space-of-events.md
## What it is (1-2 sentences)
Full-paper ledger note on Kavun (2025) "Theory: Multidimensional Space of Events" (arXiv:2505.11566v1) — a proposed "MDSE" pseudo-bipartite graph formalism for event/hypothesis dependence. Ledger verdict: REJECT — restates standard Bayesian-network concepts under idiosyncratic notation with unverifiable toy arithmetic.
## Key metrics/methods (formulas where given, else "not specified")
- P(A) = Σ_i P(A|Bi)·P(Bi) (law of total probability); P(Bm|A) = P(Bm)·P(A|Bm)/P(A) (Bayes' rule); edge E(Ai,Bj) = P(Ai|Bj) with example weight W(A1,B1)=0.9. All standard.
- "Validation" is four worked arithmetic examples on invented numbers (e.g., corporate default with P(B1)=0.4, P(B2)=0.25, P(B3)=0.35; diabetes/hypertension joint 0.5·0.7·0.24 = 0.084) — no real data.
## Data sources named
None — no dataset used anywhere; numbers are stipulated.
## Findings (numbers and facts, not vibes)
- Claimed improvements are internally inconsistent and unmeasured: abstract "15–20%", Ex.1 +11% (78%→89%) and +18% (57%→72%), Ex.3 +12% (73%→85%), §10 "42% scalability gain" from a normalized composite score with arbitrary weights w=[0.4,0.3,0.3].
- §10 claims benchmarking on AWS c6i.32xlarge (128 vCPUs), O(d^2.5)→O(d^1.8), memory 2.4×10^6→9.8×10^5 MB — no code, data, seeds, or baseline implementations provided.
- The joint-probability "result" smuggles in a conditional-independence assumption while claiming to model dependence — the exact limitation the paper attributes to classical methods.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — no sports content, no method distinct from standard Bayesian networks; duplicate of textbook material per the existing-research map.
## Engine-actionable? (yes/no + one-line what)
no — Nothing to implement; any event–hypothesis dependency graph needs are already served by standard Bayes-net libraries (pgmpy, Pyro).
