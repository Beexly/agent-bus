# arxiv-program/research/2026-09-21/arxiv-deep/1213-rebalancing-frequency-considerations-for-kelly-optimal.md
## What it is (1-2 sentences)
Ledger of arXiv:1807.05265 (Hsieh, Gubner, Barmish 2018): Kelly-optimal portfolio sizing in a control-theoretic framework, centered on the Dominant Asset Theorem — if one asset dominates, the Kelly-optimal portfolio is all-in on it at any rebalancing frequency. Verdict: ADAPT as a redundancy/concentration screen for GSE pick slates, not as a literal bet-the-farm rule.

## Key metrics/methods (formulas where given, else "not specified")
- Maximize per-period expected log growth g_n(K) = (1/n)·E[log(1 + KᵀX_n)] over unit simplex (K_i ≥ 0, ΣK_i = 1), X_n = n-step compound return vector.
- Dominance condition: asset j dominant iff E[(1 + X_i)/(1 + X_j)] ≤ 1 for every i ≠ j.
- Dominant Asset Theorem: under dominance, K* = e_j and g_n* = g_1* for all n ≥ 1.
- Empirical demo: Netflix + Facebook adjusted daily closes, 4 years from Jan 24, 2013, rolling 126-day windows. Assumptions: known i.i.d. returns, log utility, long-only, no transaction costs.

## Data sources named
Netflix and Facebook adjusted daily closing prices (4 years from 2013-01-24), plus a riskless asset; rolling window N = 126 trading days. No formal backtest or train/test split.

## Findings (numbers and facts, not vibes)
- No performance numbers claimed; the result is the theorem itself (dominance ⇔ all-in is Kelly-optimal at every rebalancing frequency).
- Empirical part only demonstrates when the dominance condition triggers on Netflix/Facebook data.
- Ledger's GSE overlap note: Kelly sizing had zero deep reads elsewhere; GSE's `apps/web/lib/staking/kelly-investigation.ts` sizes bets independently with no cross-pick dominance/redundancy logic — this paper supplies a capability GSE lacks. Companion result strengthened in ledger 1219 (2004.12099, necessity added).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Dominant Asset Theorem as a redundancy screen for GSE slates — detect when one pick dominates all others (spread + moneyline same game, correlated props) via the expected-ratio test, suppress/merge dominated picks rather than posting redundant exposure. Do NOT implement literal all-in; cap at existing fractional-Kelly ceiling.
- OTHER: TRUST-SIGNAL-adjacent: log every dominance trigger with window and probabilities for audit (transparency on suppressed picks).
- OTHER: Improvement idea — time-varying dominance with regime test (only suppress when dominance holds in both trailing window and a structural team-strength model) to reduce false triggers.

## Engine-actionable? (yes/no + one-line what)
yes — implement a cross-pick dominance/redundancy screen on each slate using the expected-ratio condition, suppressing or merging redundant correlated picks (effort M), per the implementation spec in the ledger.
