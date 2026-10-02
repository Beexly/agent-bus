# docs/arxiv-program/research/2026-09-21/arxiv-deep/1496-betting-neither-verifiable-nor-falsifiable.md
## What it is (1-2 sentences)
Sudhir & Tran-Thanh (2024, arXiv:2402.14021) is a pure philosophy-of-mathematics theory paper designing prediction markets for first-order-logic sentences that are neither verifiable nor falsifiable (e.g., arithmetical-hierarchy sentences like "there is an immortal man"), using Hintikka verification-falsification game semantics and an equilibrium price setter. The corpus reader verdict is REJECT — no sports content, no data, no empirical mechanism, no transferable component for GSE; a replacement read in the same lane sits under ledger 1511.
## Key metrics/methods (formulas where given, else "not specified")
- Method: Hintikka VF-game semantics adapted to markets — asset for ∃x.P(x) is an option to exchange for finite conjunction ∧_{x∈S}P(x); for ∀x.P(x) an obligation against the opponent's finite choice; "program market" of polynomial-time agents (trader + player + labeler + inventory) with equilibrium price setter ̟ as zero of aggregate excess demand.
- Key results stated: Lemma 1.2 (no computable asset/scoring-rule mechanism for Σ₄/Π₄+ sentences — Tarski's theorem); Lemma 3.1 (inexploitability of ̟); Theorem 3.2 (equilibrium prices converge for every sentence); Theorem 3.4/Corollary 3.5 (market learns "constructive truth": if P is computably-verifiable-true then ̟^∞(P)=1). Assumptions: polynomial-time agent class; finite endowments/birthdays; equilibrium computed exactly.
- No equations in standard applied form; no metrics or empirical baselines (proofs only).
## Data sources named
None. Pure theory — no data, no experiments, no simulations. Code/data: none stated.
## Findings (numbers and facts, not vibes)
- [OTHER] The paper's own motivating examples are mathematical/logical sentences, not events; the authors state the framework is "very theoretical, intended to prove that certain optimality results hold at least in principle."
- [OTHER] Stated limitation: says nothing about sentences neither constructively true nor false; practical implementation faces asymmetric computational costs for opposing players.
- [OTHER] GSE-relevant scoping note quoted in the file: the paper explicitly sets aside GSE's class of interest — "prediction markets are useful for estimating probabilities of claims whose truth will be revealed at some fixed time." Sports outcomes are Δ₀-verifiable events with fixed resolution times, the exact class this paper does not address.
- [OTHER] Reader verdict: REJECT — fails Garrett's "active and valuable to GSE" standard (logic/philosophy paper, no data, no sports content, no implementable mechanism). Zero empirical content.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] None transferable — the paper's machinery (VF games over FOL sentences, constructive truth, polynomial-time agent markets) has no mapping onto sports outcomes per the reader. No GSE markets-lane component (CLV, market microstructure, prediction-market calibration) intersects this work; nothing in the corpus duplicates or is duplicated by it.
## Engine-actionable? (yes/no + one-line what)
no — REJECT: no data, no sports content, no implementable mechanism; the replacement read for this ledger slot is under 1511.
