# arxiv-program/research/2026-09-21/arxiv-deep/1763-competition-among-parallel-contests.md

## What it is (1-2 sentences)
A ledger note on arXiv:2210.06866v1 (Deng, Li, Li, Qi 2022) — pure mechanism-design theory on how contestants choose among parallel contests (crowdsourcing platforms, conferences) and how contest designers set prize structures. The ledger's verdict is **REJECT**: operator-side results with no player-side, implementable artifact for GSE.

## Key metrics/methods (formulas where given, else "not specified")
- Contestant choice: symmetric Bayesian Nash equilibrium characterized via quantile functions — H*_j(q) = x_j^{-1}(X) (Theorem 3.1, highly technical, non-computable into a selection rule).
- Designer best-response: NP-hard; FPTAS achieves (1−ε)-approximation; constant-ratio worst-case guarantee under unknown competition.
- Assumptions: contestants enter exactly one contest; skill types private but distributionally known; designers maximize total participant value (not profit).
- Validation: mathematical proofs only — no empirical validation, no simulations, no numerical results.

## Data sources named
None — no dataset. Motivating examples only: Amazon Mechanical Turk, TopCoder, academic conferences.

## Findings (numbers and facts, not vibes)
- No numerical results at all — theoretical guarantees only (NP-hardness, FPTAS ratio, constant-factor worst-case bound).
- The paper's "contest selection" is the contestant-choice equilibrium (which contest a solver enters), not DFS field/payout picking — a scope mismatch noted explicitly in the ledger.
- The actionable results (FPTAS, worst-case guarantees) are for contest DESIGNERS (platform operators), not players/advisors like GSE.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — Contest-market mechanism design (quantile-function equilibrium, prize-structure competition). No sports content, no player behavior, no coaching/scheme material, no quotes.

## Engine-actionable? (yes/no + one-line what)
No — operator-side theory with no data and no computable contest-selection rule; nothing to wire into the GSE DFS pipeline.
