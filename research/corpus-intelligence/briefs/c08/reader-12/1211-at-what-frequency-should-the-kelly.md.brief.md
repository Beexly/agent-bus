# docs/arxiv-program/research/2026-09-21/arxiv-deep/1211-at-what-frequency-should-the-kelly.md
## What it is (1-2 sentences)
Deep read of Hsieh, Barmish & Gubner (2018, arXiv:1801.06737) on optimal bet-update frequency for a Kelly bettor: given an n-step waiting period between rebalances, what is the optimal per-period fraction K_n* and when does higher-frequency betting add nothing. Verdict in-file: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- n-step return: X_n = ∏_{k=0}^{n-1}(1 + X(k)) − 1; per-period objective: g_n(K) = (1/n)·E[log(1 + K·X_n)].
- Even-money Bernoulli closed form: K_n* = (2^n·p^n − 1)/(2^n − 1); classical n=1 gives K_1* = 2p − 1.
- Sufficient attractiveness: E[1/(1 + X(0))] ≤ 1 ⟹ g_n* = g_1* for all n (frequency irrelevant).
- Conjecture (unproven per the paper): without transaction costs, g_n* is non-increasing in waiting period n.
- Transaction-cost study: ε = 0.1, p ∈ {0.6, 0.7, 0.8, 0.9}.
## Data sources named
No empirical dataset — theory plus numerical examples on the even-money Bernoulli gamble.
## Findings (numbers and facts, not vibes)
- With transaction cost ε = 0.1 and p ∈ {0.6, 0.7, 0.8, 0.9}, plotted optimal waiting period is n* = 2 — with costs, betting less often beats every-period betting.
- Sufficient-attractiveness theorem (proved): if E[1/(1+X(0))] ≤ 1, frequency gives no benefit.
- Limitations named in-file: let-it-ride compounding assumption does not match sports betting (bets settle, stake returns to cash); ε = 0.1 illustrative, not calibrated to vig; i.i.d. returns violated by nonstationary edges; g_n* monotonicity conjecture unproven.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: staking-cadence policy — when to re-stake as lines move, whether small edges survive vig, a "stale-edge" screen from the sufficient-attractiveness test; complements GSE's fixed 0.25-fraction sizing in kelly-investigation.ts.
## Engine-actionable? (yes/no + one-line what)
yes — implement the sufficient-attractiveness test as a stale-edge screen and build a bet-cadence optimizer (re-stake cadence n maximizing g_n net of vig), adopted only if it beats current policy by ≥3% realized net log growth with no higher drawdown.
