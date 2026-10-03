# docs/arxiv-program/research/2026-09-21/arxiv-deep/1747-optimal-blackjack-betting-strategies-dp-utility.md
## What it is (1-2 sentences)
Paper (Bordeu & Castro, 2025) solving the blackjack betting policy as an MDP under CRRA/CARA expected utility: splits play into a DP-optimized round policy and a DP-optimized bet-fraction policy, proving the optimal stake fraction is independent of wealth and distilling policies into linear-in-true-count rules.

## Key metrics/methods (formulas where given, else "not specified")
- CRRA utility: u_1(w;α) = w^α/α if α>0; ln(w) if α=0 (α=0 is log utility = Kelly).
- Theorem 1: optimal CRRA policy independent of wealth: π*_{θ,u_1,H}(d,w,n) = π*_{θ,u_1,H}(d,w',n) ∀w,w'.
- Theorem 2: with infinite horizon (H→∞), optimal policy independent of rounds played n.
- Value recursion: V*(ψ_n=ψ) = w^α/α · U*(ψ) (α>0); ln(w) + U*(ψ) (α=0), with U*(ψ) = max_{b∈[0,0.5]} Σ_{x∈R} Σ_{d'} P(d_{n+1}=d', X_θ^d = x | d_n = d)·(1+b·x)^α·U*(ψ').
- Partial policy linear form: ω̃(c) ≈ m_j·c + k_j for true count c per risk level α_j.

## Data sources named
No external dataset. Computed probability mass functions of per-round returns (basic strategy and semi-optimal round policy), Monte Carlo session simulations. Complete policies: six 200×10,001×100 matrices (β ∈ {0.15,0.25,0.35} × 2 round policies).

## Findings (numbers and facts, not vibes)
Optimized round policy beats basic strategy only slightly. Betting on exact deck composition slightly outperforms Hi-Lo true-count betting. Partial-policy fits (basic strategy), (α, m, k, μ, σ²): (0, 0.0032125, −0.0047781, 0.0000047, 0.0000094); (0.5, 0.0064326, −0.0095757, −0.0000000, 0.0000377); (0.9, 0.0318662, −0.0468364, −0.0003771, 0.0009485); (0.95, 0.0598706, −0.0817353, −0.0016756, 0.0039103); (1, 0, 0.5, −, −). "Kelly" never appears by name (α→0 log case is Kelly, connection undiscussed).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: wealth-independent optimal stake fraction justifies bankroll-fraction staking rules; linear-in-edge distillation b*(e) ≈ m·e + k per α generalizes Kelly (f* = edge/odds) with a risk-aversion dial instead of fixed Kelly; acceptance gate requires beating half-Kelly on terminal log growth with max drawdown ≤ half-Kelly's.

## Engine-actionable? (yes/no + one-line what)
yes — Build a "GSE stake MDP" (state = edge estimate, bankroll, week) solved by finite-horizon DP and distilled to a linear per-pick staking rule b*(e) ≈ m·e + k per risk-aversion level.
