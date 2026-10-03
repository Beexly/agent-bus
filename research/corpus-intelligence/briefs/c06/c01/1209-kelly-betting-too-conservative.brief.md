# arxiv-program/research/2026-09-21/arxiv-deep/1209-kelly-betting-too-conservative.md
## What it is (1-2 sentences)
Proves Kelly betting can be *too conservative*: fitting an unbounded-support distribution (e.g. normal) to returns forces the degenerate K*=0 ("bet nothing") regardless of μ/σ, while Kelly computed from the empirical return distribution gives sensible fractions. Diagnoses a real staking failure mode with the Restricted Betting Theorem.
## Key metrics/methods (formulas where given, else "not specified")
- Maximize g(K) = E[log(1+KᵀX)] over admissible K; Restricted Betting Theorem: optimizer satisfies h_X(−K) ≤ 1 (support function confinement); feasible set convex, closed
- Scalar lemma: support [X_min,X_max] with X_min<0<X_max ⟹ K∈[−1/X_max, −1/X_min]; unbounded both sides ⟹ K*=0 forced no matter how large μ/σ
- Toy Bernoulli X∈{1,−x₀}: K* = (1−ε(1+x₀))/x₀ < 1/x₀ regardless of how small ε
- Bad-sample probability p_bad = 1−(1−ε)^M (ε=0.001, M=50 → ≈0.05); empirical counterpart K̂* from f̂_X = m⁻¹Σδ(x−x_i)
- Hypercube/hypersphere joint-support cases; AAPL tick validation
## Data sources named
Toy Bernoulli; normal family N(μ,1), μ∈[0,4], 1M samples/μ; AAPL tick data 2015-12-02, 110,000 ticks
## Findings (numbers and facts, not vibes)
- Normal family: empirical K̂*(μ) rises 0→~0.9 as μ: 0→4; theoretical K*=0 for ALL μ, σ
- AAPL ticks: X_min≈−0.01; empirical optimum 82.4% of wealth vs theoretical GBM K*=0; matches Merton/Thorp continuous-time μ̂/σ̂²≈0.825
- The empirical PMF systematically underestimates tail risk (p_bad) — paper flags this honestly; no correction offered
- Sports-betting returns at fixed odds have bounded support by construction, so the pathology bites only if GSE fits unbounded models (normals) to residuals/returns or bets heavy-tailed parlays
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: staking hard rule — compute Kelly stakes from the empirical distribution of historical engine edge realizations per market type, never from a fitted normal; report confinement interval [−1/X_max, −1/X_min] as a stake sanity check; p_bad guard (if >0.05, shrink toward fractional Kelly); parlay legs via joint hypercube support constraints, not independent per-leg Kelly; complements 0626 (Kelly under probability uncertainty) on the support-misspecification side
## Engine-actionable? (yes/no + one-line what)
Yes — empirical-PMF Kelly + winsorized support bounds + p_bad shrink guard; gate: avoids degenerate under-betting (stake>0 on ≥90% of +EV slates where normal-fit stakes <25% of empirical) while matching/beating flat fractional Kelly on log growth with no worse drawdown.
