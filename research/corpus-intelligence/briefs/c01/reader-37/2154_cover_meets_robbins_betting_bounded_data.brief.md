# arxiv-program/research/2026-09-21/arxiv-deep/2154-cover-meets-robbins-betting-bounded-data.md
## What it is (1-2 sentences)
A full research ledger on "Cover Meets Robbins While Betting on Bounded Data: ln n Regret and Almost Sure ln ln n Regret" (arXiv:2604.20172, Agrawal & Ramdas 2026): a 50-50 convex combination of Cover's uniform-portfolio mixture and a modified Robbins prior that hedges the two — O(ln n) worst-case regret AND O(ln ln n) regret on typical paths plus optimal growth rate. Verdict: ADAPT — the lane's online stake-adaptation rule; its wealth process doubles as an anytime-valid sequential test of whether the engine actually has edge.

## Key metrics/methods (formulas where given, else "not specified")
- Setup: bet fraction λ ∈ [−1/m_0, 1/(1−m_0)]; wealth W_n(λ) = ∏_{i=1}^n (1−λ(X_i−m_0)), W_0=1; mixture wealth W_n = ∫ W_n(λ)π(λ)dλ; best-in-hindsight W*_n = sup_λ W_n(λ); regret R_n = ln W*_n − ln W_n.
- Thm 3.1 (Cover uniform mixture): path-wise O(ln n) regret on every sequence — unimprovable adversarially.
- Thm 4.1 (modified Robbins prior): low regret on every path in Ville event E_α = {sup_n ln W_n ≤ ln(1/α)}; Thm 4.2: O(ln ln n) regret on almost every path (measure-one set E_0); linear-regret paths a null set under bounded support.
- Prop. 5.1 (best-of-both): 50-50 combination achieves O(ln n) worst-case AND O(ln ln n) a.s. AND optimal growth — first explicit construction.
- Key identity: ln W*_n = n·KL_inf(Q̂_n, m_0).
- Game-theoretic LIL: wealth process witnesses a sharp upper law of the iterated logarithm — either the LIL holds on a path or wealth → ∞ on it.
- Assumptions: observations in [0,1]; m_0 ∈ (0,1); stochastic results need conditional mean = m_0 and intrinsic variance → ∞; comparator = constant-λ strategies.

## Data sources named
None — pure game-theoretic probability: arbitrary deterministic sequences in [0,1]; no simulations, no real data, no numerical results (rate comparisons only).

## Findings (numbers and facts, not vibes)
- Rate hierarchy: Cover/uniform Θ(ln n) worst-case (tight); Robbins O(ln ln n) typical-paths, linear worst-case; 50-50 mixture strictly dominates each component on the combined criteria.
- Killer dual-use recorded: under the null (no edge, conditional mean = breakeven), wealth stays bounded (Ville); if wealth crosses 1/α, edge is certified at level α WITHOUT peeking corrections — a principled, publishable "engine is real" trigger for scaling stakes, and conversely a shutdown trigger if wealth decays. No other paper in the lane provides sequential anytime-valid inference.
- Limitations: zero empirical validation; comparator class is constant fractions only (real staking adapts to edge per bet — paper doesn't compete with edge-adaptive strategies); bounded [0,1] requires affine map of real P&L (tails must be clipped); m_0 must be chosen (breakeven-under-efficient-market is natural); 50-50 weight is a choice not optimized; Robbins prior needs tuning parameters (β_l, β_u).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (bankroll/online adaptation): the online layer closing the loop with 2144 (sizes one bet), 2149/2148 (govern the season) — adapts the stake fraction bet-by-bet as results accrue with vanishing regret vs best fixed fraction in hindsight. Fixed-fraction practice replaced by data-chosen effective fraction.
- OTHER (edge detection/ops): anytime-valid Ville monitor — scale-up gate W_n ≥ 20 (≈α=0.05 rejection of no-edge) → allow 1.5× stakes; shutdown gate W_n ≤ 0.5 after ≥50 picks → halve stakes and trigger model review. Checkable after every pick.

## Engine-actionable? (yes/no + one-line what)
yes — GSE implementation spec included: per posted pick X_i = affine map of profit-in-units into [0,1] (clip at ±5u), m_0=0.5, λ range rescaled to [0, maxfrac] one-sided; implied fraction λ_n = posterior mean E_π_n[λ] sets next week's global stake multiplier on top of per-pick Kelly fractions from 2144; update after each settled pick (~200-point λ quadrature, trivial); effort ~1 week; acceptance gate = realized R_n ≤ 2× theoretical bound AND final log-wealth ≥ 0.9× oracle AND shuffle test keeps W_n < 20 in ≥95% of shuffles; improvement experiment proposes edge-conditioned comparator (λ = a + b·edge) competing with best edge-responsive linear rule in hindsight.
