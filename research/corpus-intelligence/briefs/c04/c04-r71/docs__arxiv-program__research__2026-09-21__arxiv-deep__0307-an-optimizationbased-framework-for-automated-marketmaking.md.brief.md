# docs/arxiv-program/research/2026-09-21/arxiv-deep/0307-an-optimizationbased-framework-for-automated-marketmaking.md
## What it is (1-2 sentences)
Theory paper (Abernethy, Chen, Vaughan, arXiv:1011.1941) deriving automated market-maker pricing rules from five axioms (path independence, differentiable prices, information incorporation, no arbitrage, expressiveness), yielding a convex-potential cost-function design rule C(q) = sup_{x∈Π} x·q − R(x) via conjugate duality. Ledger verdict: REJECT — the GSE runs no market-making surface, so none of the machinery transfers.
## Key metrics/methods (formulas where given, else "not specified")
- Cost function: `C(q) = sup_{x∈Π} x·q − R(x)`; prices `∇C(q) = argmax_{x∈Π} x·q − R(x)`; reachable prices = H(ρ(O)) (convex hull of payoff vectors), Theorem 2.
- Loss bound (Theorem 3): worst-case loss ≤ sup R(x) − min R(x) over the hull, refined by −D_R(ρ(o), ∇C(q)).
- Bid-ask spread ≤ 2‖r‖²/β; worst-case loss ≥ β·diam²(H(ρ(O)))/8 (Lemma 1 + Theorem 4) — deeper market (larger β) ⇔ larger worst-case loss.
- Sphere example: R(x)=λ‖x−1‖² gives piecewise closed-form C(q); depth β=2λ; worst-case loss = λ (tight).
- Prop. 2/3: no-arbitrage CAN be relaxed — expanding Π never worsens worst-case loss; guaranteed corrective profit min D_R(x, x₀).
- Pair betting on n competitors: relax Π to Megiddo generalized-order-matrix constraints (X(i,j)≥0, X(i,j)=1−X(j,i), X(i,j)+X(j,k)+X(k,i)≥1); exact for n≤4, strictly larger for n=13.
## Data sources named
None — pure theory paper, no dataset. Two worked instantiations (sphere landing-location, pair betting) as existence proofs.
## Findings (numbers and facts, not vibes)
- Sphere example: β=2λ, worst-case loss = λ (tight bound).
- Pair-betting relaxation is exact for n≤4 (Megiddo 1977) and strictly larger for n=13; exact hull pricing is NP-hard (minimum feedback arcset).
- Othman et al.'s modified-LMSR region {x≥0: 1≤Σx≤1+αn log n} is a special case of the transaction-cost construction.
- Theorem-level facts, no empirical results.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Prediction-market mechanics (LMSR/conjugate-duality pricing, liquidity-vs-loss trade-off): OTHER — mechanism design with no GSE consumer since GSE operates no market-making surface.
## Engine-actionable? (yes/no + one-line what)
no — GSE runs no market-making surface; adopt only if Garrett commissions a GSE-operated combinatorial prediction surface (per the ledger's own acceptance gate: verify loss within 10% of the Theorem-3 bound in counterfactual order-flow replay).
