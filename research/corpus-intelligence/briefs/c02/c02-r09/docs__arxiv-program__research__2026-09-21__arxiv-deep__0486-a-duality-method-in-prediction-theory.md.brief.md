# docs/arxiv-program/research/2026-09-21/arxiv-deep/0486-a-duality-method-in-prediction-theory.md

## What it is (1-2 sentences)
Frank & Klotz (2001, arXiv:math/0106056v1): a pure functional-analytic prediction-theory paper generalizing Nakazi (1984) and Miamee–Pourahmadi to the multivariate case — relating approximation problems in L²(W) to those in L²(W⁻¹) for q-variate weakly stationary sequences, yielding closed-form prediction-error matrices. The corpus ledger verdict is REJECT — no data, no sports application, no estimation component.

## Key metrics/methods (formulas where given, else "not specified")
- Duality correspondence (Theorem 3.2, core): P_S I = I − (I − Ĩ_S, I)_~⁻¹ (I − Ĩ_S) W⁻¹ and Δ_S = (I − Ĩ_S, I)_~⁻¹ = (I − Ĩ_S, I − Ĩ_S)_~⁻¹, linking trigonometric approximation in L²(W) to approximation in L²(W⁻¹).
- Szegő infimum formula analog (Theorem 4.1): P_S I = I − (∫W⁻¹dλ)⁻¹W⁻¹; Δ_S = (∫W⁻¹dλ)⁻¹; δ_S = [det(∫W⁻¹dλ)]^{−1/q}.
- Nakazi prediction problem formulas (Theorems 5.4–5.6): e.g., Δ_{S₂} = (Σ_{j=0}^n B_j B_j*)⁻¹; δ_{S₂} = [det(Σ_{j=0}^n B_j B_j*)]^{−1/q} in terms of matrix coefficients (B_j, A_j) of outer factorizations.
- Assumptions: q-variate weakly stationary sequence over discrete abelian group G; matrix-valued spectral weight W integrable with W⁻¹ also integrable (excludes deterministic components); infinite past observed; spectral weight W assumed known.

## Data sources named
None — pure mathematics paper (MSC 60G25, 60G10); no observations, no simulations.

## Findings (numbers and facts, not vibes)
- Zero numerical results — the paper contains no numbers, tables, or benchmarks; validation is by proof. [OTHER]
- The theory assumes infinite past and known spectral weight W; it says nothing about estimation error, which the file flags as the hard practical part. [OTHER]
- Not a duplicate of existing GSE corpus entries: no spectral-domain or Wiener–Kolmogorov prediction theory anywhere in the corpus — but out of scope rather than a gap, since NFL outcomes are not stationary linear sequences and GSE has no stationary vector-process team-strength model. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All substantive points tagged OTHER: closed-form spectral prediction-error formulas for multivariate stationary sequences with no sports content, no data, and no operationalizable estimation component — no mapping to QB behavior, coaching, OL, scheme, or trust signals. The file's own improvement experiment (estimate a spectral weight matrix from weekly EPA differentials and compare duality-based prediction error vs the nested AR(1) model 1701.05976 on 2020–2025 nflverse) is explicitly parked as "currently out of scope."

## Engine-actionable? (yes/no + one-line what)
no — closed-form formulas with no estimation component cannot be operationalized for NFL data; rejected, closed.
