# docs/arxiv-program/research/2026-09-21/arxiv-deep/0246-robust-draws-in-balanced-knockout-tournaments.md
## What it is (1-2 sentences)
Deep read (2026-09-21, verdict: ADAPT narrow) of Chatterjee, Ibsen-Jensen & Tkadlec (2016, arXiv:1604.05090, IJCAI 2016) on robust tournament draws: a theoretical-CS paper whose draw-fixing framework is irrelevant to GSE (fixed NFL bracket), but whose sensitivity primitive — the ε-worst drop of a tournament win probability computed via the multilinear decomposition wp = α_ij·P_ij + β_ij — is an adoptable risk diagnostic for futures/bracket positions.
## Key metrics/methods (formulas where given, else "not specified")
- ε-perturbation set P(P,ε) = {P′ : |P′_ij − P_ij| ≤ ε}; ε-guaranteed win prob wp_ε(i*,P,σ) = inf_{P′∈P(P,ε)} wp(i*,P′,σ); ε-worst drop d_ε = wp − wp_ε.
- Drop approximation d̂_ε (linear term): deterministic d̂_ε = c·ε where c = # crucial matches (0,1)-matches whose flip loses the tournament, O(N log N); probabilistic d̂_ε = Σ_{i≠j} |α_ij| where wp = α_ij·P_ij + β_ij, O(N⁴). Worst perturbation always on the ℓ∞ boundary.
- Complexity: RTFP/RPTFP NP-complete; robust-draw approximation poly-time in Aziz et al.'s special cases.
## Data sources named
None — pure theory, no empirical dataset. Numerical illustrations are computed instantiations of propositions, not experiments.
## Findings (numbers and facts, not vibes)
- Example 2 (N=64 hard tournament, unique winning draw): wp_0.01 < 0.54, wp_0.05 < 0.07, wp_0.1 < 0.02 — a "guaranteed" win collapses under 1% probability error; linear coefficient of drop polynomial is N−1 = 63. [OTHER]
- Example 3 (two draws, both wp=1 exactly): robust draw has wp_0.01 > 0.89 vs < 0.73 for the fragile one — identical point estimates, sharply different worst-case guarantees. [OTHER]
- Example 4: a δ-suboptimal draw (wp 0.502 vs 0.506) guarantees MORE under ε=0.02 perturbation (>0.432 vs <0.429) — suboptimal point estimates can be superior once robustness is priced in. [TRUST-SIGNAL]
- Linear-term approximation requires ε < cN^{−2}; for N=64 this means ε ≪ 0.0002, an extremely restrictive regime. [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Futures/bracket positions should be sized on sensitivity, not just point-estimate edge: the top-|α_ij| pairs identify which matchup-probability estimates a Super Bowl ticket's value hinges on [TRUST-SIGNAL].
- A futures bet with a slightly lower point-estimate edge but a smaller Σ|α_ij|·ε drop is the better risk-adjusted position — a decision rule GSE's sizing does not currently use [TRUST-SIGNAL].
- The NFL's 14-team bracket with byes and reseeding breaks the paper's N=2^n balanced-bracket assumption, so the diagnostic needs extension before direct use [OTHER].
## Engine-actionable? (yes/no + one-line what)
Yes — extend the playoff simulator to accumulate α_ij sensitivity coefficients per (i,j) matchup pair and report top-k pairs plus Σ|α_ij|ε alongside every futures edge as a risk-averse sizing overlay.
