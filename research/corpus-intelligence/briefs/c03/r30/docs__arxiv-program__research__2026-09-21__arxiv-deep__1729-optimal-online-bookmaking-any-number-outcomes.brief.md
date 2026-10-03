# docs/arxiv-program/research/2026-09-21/arxiv-deep/1729-optimal-online-bookmaking-any-number-outcomes.md
## What it is (1-2 sentences)
Ledger entry for arXiv:2506.16253 (Tal & Sabag 2025): pure-theory paper characterizing the minimum worst-case loss a bookmaker can guarantee when posting odds repeatedly over T rounds on K outcomes, with the minimax value equal to T plus the largest root of an explicit polynomial family, plus a polynomial-time optimal strategy. Verdict: ADAPT as a margin-setting / worst-case-loss diagnostic (bookmaker-side theory, not a forecaster).
## Key metrics/methods (formulas where given, else "not specified")
- Overround: Γ_t = Σ_k 1/γ_t(k); normalized offered probability r_t(k) = 1/(Γ_t γ_t(k)).
- Characterizing polynomial: P_{T,K}(x) = Σ_{m=0}^{K} binom(K,m) (−T)^{\overline{K−m}} x^m (rising factorial).
- Optimal worst-case loss: L*_T,K = T + (largest root of P_{T,K}).
- Binary case (K=2): L*_{T,2} = T + √T (regret exactly √T).
- Three-outcome (K=3): L*_{T,3} = T + 2√T cos[(1/3) arccos(1/√T)].
- Asymptotics: regret R_{T,K} = L*_{T,K} − T scales as Θ(√T); K-dependent constant = largest root of the K-th Hermite polynomial, asymptotically 2√K + o(√K).
- Largest root computable to precision ε in O(K log(1/ε)) time.
- Optimal strategy is opportunistic: recompute the largest root after every suboptimal/non-decisive bet, otherwise post static optimal odds; static odds posting is strictly suboptimal.
- Assumptions: adversarial bettor sequence and outcome sequence; odds posted before bets; zero-sum; no fees/limits/competition; one-shot outcome per round.
## Data sources named
None — pure theory paper; no empirical dataset, no market data, no backtest.
## Findings (numbers and facts, not vibes)
- Exact minimax results: L*_{T,2} = T + √T; L*_{T,3} = T + 2√T cos[(1/3) arccos(1/√T)]; regret scales Θ(√T) with Hermite-polynomial constant in K (→ 2√K asymptotically).
- Static (non-adaptive) odds posting is strictly suboptimal vs the opportunistic recompute-after-decisive-bet strategy.
- NFL transfer: K=2 closed form (T + √T) is the directly usable one (moneylines, spreads/totals vs line); Hermite scaling in K matters only for multi-way props.
- Limitations: adversarial model may be far more pessimistic than real bettor flow; no in-game dynamics; no empirical contact.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Minimax worst-case-loss envelope (T + √T for binary markets) as adversarial stress-test for dynamic vig/exposure policy: OTHER
- Opportunistic recompute-after-decisive-bet beats static odds: OTHER
- Losses inside the envelope are "explained" by adversarial flow; breaches signal model misspecification, not bad luck: TRUST-SIGNAL
- Enrichment of the market-microstructure lane (CLV, devig, steam) with the inverse question — what margin guarantees bounded worst-case loss: OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — build an "adversarial exposure" module computing the closed-form worst-case-loss envelope for GSE's posted probabilities vs realized loss, to separate adversarial-flow losses from model misspecification, with a Bayesian bettor-flow improvement experiment for a per-market dynamic-vig rule.
