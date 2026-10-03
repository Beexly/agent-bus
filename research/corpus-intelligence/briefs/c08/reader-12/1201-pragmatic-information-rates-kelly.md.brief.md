# docs/arxiv-program/research/2026-09-21/arxiv-deep/1201-pragmatic-information-rates-kelly.md
## What it is (1-2 sentences)
Deep read of Weinberger (2009, arXiv:0903.2243v4) proposing "pragmatic information" rates as a generalization of the Kelly criterion and a mutual-information definition of market efficiency. Verdict in-file: REJECT — withdrawn by the author (v5, 2026-02-28), self-described as expository of well-known results.
## Key metrics/methods (formulas where given, else "not specified")
- Pragmatic information: I(A;M) = Σ_m Σ_A Pr(A,m) log[Pr(A,m)/(Pr(m)Pr(A))]; information-rate existence via Cesaro-sum argument for stationary processes.
- Horse-race Kelly: E[log₂Σb_iX_i(n)] = Σ_i p_i(n)log₂(b_iR_i) = D(p‖q) − D(p‖b) − log₂T, optimal at b = p(n); with track take T, W*_N = (1/N)Σ_n D(p(n)‖q) − log₂T.
- With ergodic side messages: increase in optimal doubling rate equals the pragmatic information of the messages; ΔW ≤ i(X;μ) via Jensen.
- Market efficiency ⟺ i(P;μ⁻) = h(P) − h(P|μ⁻) = 0 ("tradable past"); GARCH(1,1) inefficiency "proof" via Jensen on conditional variance.
## Data sources named
None — pure theory/exposition; no data, no simulations, no empirical tests.
## Findings (numbers and facts, not vibes)
- No numbers anywhere in the paper; all results are inequalities, existence theorems, and limit statements.
- The abstract concedes the Kelly results are "well known in the literature."
- Author withdrew the paper (v5, 2026-02-28).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: none actionable — the information-rate framing of edge value is conceptually adjacent to GSE edge measurement but offers no implementable estimator; Kelly practice is covered more directly by other ledgers (0171/0626/0813 per the file).
## Engine-actionable? (yes/no + one-line what)
no — withdrawn expository paper with no empirical content and no implementable method for GSE.
