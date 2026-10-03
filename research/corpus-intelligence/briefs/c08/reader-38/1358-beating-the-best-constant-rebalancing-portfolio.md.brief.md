# docs/arxiv-program/research/2026-09-21/arxiv-deep/1358-beating-the-best-constant-rebalancing-portfolio.md
## What it is (1-2 sentences)
Ledger read of Lam (2025), "Beating the Best Constant Rebalancing Portfolio in Long-Term Investment: A Generalization of the Kelly Criterion and Universal Learning Algorithm for Markets with Serial Dependence" (arXiv:2507.05994v1): a k-parallel Universal Portfolio (k-PUP) algorithm plus a generalized Kelly criterion for block-wise i.i.d. markets, proven to asymptotically beat the best constant-rebalancing portfolio by exploiting periodic/serial structure. Verdict: ADAPT — theoretically grounded bankroll-allocation method for exploiting periodic structure in GSE's bet sequence.
## Key metrics/methods (formulas where given, else "not specified")
- k-cyclic constant strategy: b^k_n = (b_{kt+1},…,b_{kt+k})_{t≥0}, looping k fixed portfolios.
- k-PUP update (2.5): b_{kt+i} = ∫ b·∏_{j=0}^{t−1}⟨b, x_{kj+i}⟩μ(b)db / ∫ ∏_{j=0}^{t−1}⟨b, x_{kj+i}⟩μ(b)db — decompose the sequence into k subsequences, run an independent Universal Portfolio per cycle position; μ = uniform or Dirichlet(1/2,…,1/2).
- Theorem 1 regret bound: ≤ k(m−1)(log n + 1) (uniform μ), or ≤ k(m−1)/2·log n + 1 + k log 2 (Dirichlet).
- Generalized Kelly: k-log-optimal portfolios maximize EΣ_{i=1}^k log⟨b_i, X^i⟩; Kuhn–Tucker condition E∏_{i=1}^k (⟨b^i,X^i⟩/⟨b^{i*},X^i⟩)^{1/k} ≤ 1 (Lemma 2).
- Theorem 2: k-log-optimal k-cyclic strategy attains the highest asymptotic growth rate among all dynamic strategies in block-wise i.i.d. markets; Corollary 2: (2.5) attains it without knowing the distribution. Wealth: S_n(b_n) = ∏⟨b_i,x_i⟩; growth W_n = (1/n)log S_n.
- Assumptions: no-short simplex, no transaction costs, positive returns, well-defined expectations, block-wise i.i.d. for the Kelly result (Thm. 1 is distribution-free).
## Data sources named
CRSP daily adjusted closing prices, 1992-12-31 to 2019-12-31: 6,798 trading days, 4 NYSE/NASDAQ blue chips (HON, BA, AMD, JPM); 11,437-point Riemann discretization of the simplex (step 0.025).
## Findings (numbers and facts, not vibes)
- Final wealth at n=6798: best 1-CC hindsight 38.46; 1-PUP 28.05; **2-PUP 44.98** (beats best constant); 6-PUP 38.86 (marginally beats); others 31.3–37.7.
- Growth rates: 2-PUP 0.000560 vs best 1-CC 0.000537 vs 1-PUP 0.000490. Sharpe: 1-PUP 55.92 vs 2-PUP 54.46 (higher growth ≠ higher Sharpe).
- Best k-CC in hindsight explodes with k: 446.7 (k=2), 1773.7 (k=6), 3054.2 (k=10) vs 38.46 (k=1) — up to ~80× headroom.
- Key falsification: W_n(b^{k-PUP}) − W_n(b^{1-PUP}) does not converge to 0 for any k>1 → returns are not i.i.d. → classical Kelly invalidated in this market.
- Limitations flagged in-file: k swept ex post (no walk-forward selection); no transaction costs; Riemann error analysis asymptotic, not measured; block-wise i.i.d. is a strong idealization.
- In-file acceptance gate: adopt periodic allocation only if walk-forward backtest (k chosen on 2023, evaluated 2024–2025) gives k-PUP bankroll multiple ≥10% over flat fractional-Kelly with max drawdown ≤1.2× baseline.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: bankroll/staking machinery — periodic (k=7 day-of-week or situational: rest days, back-to-backs, divisional) k-PUP allocation over the simultaneous-pick portfolio, complementing GSE's existing i.i.d.-assumption Kelly stack with a distribution-free learner that doesn't duplicate it.
## Engine-actionable? (yes/no + one-line what)
yes — partition GSE's logged 2023–2025 bet history into k=7 day-of-week (or situational) subsequences, run k-PUP vs flat fractional-Kelly on the simultaneous-pick portfolio with vig-cost applied, adopt only if walk-forward bankroll multiple ≥10% better with drawdown ≤1.2× (2–3 weeks effort).
