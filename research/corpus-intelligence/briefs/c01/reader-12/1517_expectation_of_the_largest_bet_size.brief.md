# arxiv-program/research/2026-09-21/arxiv-deep/1517-expectation-of-the-largest-bet-size.md

**Ledger:** [1517] (arXiv:1807.11729v3) — **Verdict in file: ADAPT**

## What it is (1-2 sentences)
Pure probability theory resolving a decade-old open conjecture (Grimmett & Stirzaker, Problem 12.9.15): in the Labouchere (cancellation) betting system, the expected maximum bet size E[B⋆] is finite if and only if the player has an edge (p > 1/2) — a rigorous anti-progression theorem generalizing to a family of list-based staking systems.

## Key metrics/methods (formulas where given, else "not specified")
- Mechanics: bet = first + last list numbers (single number if length 1); win → cancel first/last; loss → append amount lost; N = stopping time of first empty list; B⋆ = max bet size; T_n = remaining target profit.
- General (a,b)-list systems: integers a<0≤b; B_n ∈ [0, T_{n−1}]; win: T_n=T_{n−1}−B_n, l_n=(l_{n−1}+a)+; loss: T_n=T_{n−1}+B_n, l_n=l_{n−1}+b. Martingale = (−1,0)-list; Labouchere and Fibonacci = (−2,1)-list.
- **Theorem 1/Corollary 1:** Labouchere, any initial list: E[B⋆] < ∞ if p > 1/2; E[B⋆] = ∞ if p < 1/2.
- **Theorem 2/Corollary 2 (fair game):** p = 1/2 ⇒ E[B⋆] = ∞. Combined: E[B⋆] = ∞ iff p ≤ 1/2 — the conjecture, solved.
- **Theorem 3 (moment boundary at p=1/2):** for any ε>0, E[B⋆(1 ∨ log B⋆)] = ∞ but E[B⋆(1 ∨ log B⋆)^{−(1+ε)}] < ∞.
- Stopping-time tail (Lemma 1/Ethier): P_{l0}(N ≥ n+1) ∼ D_{l0}(n)·n^{−3/2}·κ^n, κ<1 for p>1/3.
- Change of measure: dP/dQ = (p/(1−p))^c · (p(1−p)²/(1/2·(1/2)²))^{n/3}; ≤Cρ^n (ρ<1) for p>1/2, ≥Cρ^n (ρ>1) for p<1/2. B⋆ ≤ T_0·2^N.
- Proof machinery: Doob's maximal inequality on the target martingale {T_n}, Fenchel–Young inequality, change of measure between win-p and win-1/2 path measures, optimal-list recursion (Lemma 2), good-list bound (Lemma 5): for good lists, B_n/T_{n−1} = O(1/√l).
- Side results recovered: Fibonacci E[B⋆]=∞ iff p≤1/2; martingale at p=1/2 = St. Petersburg paradox.
- Assumptions: independent coups, fixed p; no time-varying edges or stake limits (idealized).
- Adversarial note (from file): the infinite-expectation result is about the TAIL, not the typical run — at p>1/2 E[B⋆] is finite, and even at p≤1/2 the median max bet can be modest. Do not misread as "Labouchere always bankrupts you."
- Caveat: κ formula's exponent was reconstructed from the proof (PDF extraction mangled "κ := 27p(1−p)²/4") — verify against arXiv source before citing the exact constant.

## Data sources named
None — pure theory, no simulations; proofs are the artifact.

## Findings (numbers and facts, not vibes)
- Phase transition: E[B⋆] < ∞ iff p > 1/2 (any initial list). Moment boundary at p=1/2 (Theorem 3). Worked example: list (1,2,3,4) clears in 8 coups, max bet 13, total target 10.
- Open: Conjecture 1 (E[B⋆]=∞ for every (−2,1)-list system at p=1/2) remains unproven in full generality.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: a citable formal justification that GSE's sizing module never chases losses — any loss-recovery progression has infinite expected max bet without an edge — is a trust-bearing public stance distinct from raw Kelly optimization.
- OTHER (staking/risk): (a) hard policy guardrail — no staking rule whose bet size is a function of cumulative recent losses may be deployed; all sizing must be edge-conditioned fractional Kelly on calibrated probabilities; (b) the (a,b)-list framework + Doob/change-of-measure machinery is a proof template for certifying any future sizing rule's worst-case behavior (finite expected max bet / max drawdown) as a pre-deployment checklist. Complements the corpus's ~30 Kelly ledgers (those optimize growth; this bounds ruin-adjacent tails of non-Kelly systems).

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the no-progression guardrail as immediate sizing-module policy, and build the Doob-based certification checklist for any future sizing change (accept the checklist only if its bound is computable in closed form from backtest statistics without the constant-p idealization).
