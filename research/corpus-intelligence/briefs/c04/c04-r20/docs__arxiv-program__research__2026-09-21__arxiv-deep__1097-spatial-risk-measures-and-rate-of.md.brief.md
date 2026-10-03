# docs/arxiv-program/research/2026-09-21/arxiv-deep/1097-spatial-risk-measures-and-rate-of.md
## What it is (1-2 sentences)
A deep-read ledger of arXiv:1803.07041v6 (Koch 2018), a pure actuarial-theory paper on spatial risk measures and rates of spatial diversification for insurance. Verdict: **REJECT** — no data, no experiments, no code, no operational path to GSE value; replaced by ledger 1303 (same-lane weather/spatial-extremes substitute).

## Key metrics/methods (formulas where given, else "not specified")
- Normalized spatially aggregated loss: `L_N(A,P) = ν(A)^{-1} ∫_A C_P(x) ν(dx)`; spatial risk measure `R_Π(A,P) = Π(L_N(A,P))`.
- Axioms proposed: translation invariance, spatial sub-additivity (`R_Π(A1∪A2,C) ≤ min(R_Π(A1,C), R_Π(A2,C))`), asymptotic spatial homogeneity of order −γ: `R_Π(λA,C) = K1(A,C) + K2(A,C)/λ^γ + o(1/λ^γ)` as λ→∞.
- Proved diversification orders: expectation 0, variance −2, VaR and ES −1 (under CLT + mixing assumptions on max-stable/Brown–Resnick/Smith fields). Insurance premium condition: `pr > K1(A,C) = E[C(0)]`.
- All results asymptotic (λ→∞); assumptions include stationary max-stable cost fields, CLT conditions, strong mixing, law-invariance of Π. No novel empirical method.

## Data sources named
None — pure mathematics paper; definitions, theorems, proofs. No empirical data, no simulations, no case study executed (a winter-storm application is described as "ongoing work"). No code or data availability stated.

## Findings (numbers and facts, not vibes)
- Theorem-level results only: diversification orders for expectation (0), variance (−2), VaR (−1), expected shortfall (−1).
- No numerical results, no baselines, no validation design of any kind.
- Rejection grounds (ledger): theory-only, no data/experiments, insurance-domain, no actionable GSE application; the only conceivable sports analogue (aggregating weather-tail risk across game locations) would require building the spatial-extremes machinery the paper leaves as future work.
- Replacement ledger 1303 covers the same weather/spatial-extremes lane and was chosen instead.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Spatial diversification orders for VaR/ES: **OTHER** (pure actuarial theory; rejected with no GSE transfer).
- No QB behavioral, coaching, OL, trust-signal, or scheme content.

## Engine-actionable? (yes/no + one-line what)
No — REJECT: no empirical content to implement; the weather/spatial lane is covered by replacement ledger 1303 instead.
