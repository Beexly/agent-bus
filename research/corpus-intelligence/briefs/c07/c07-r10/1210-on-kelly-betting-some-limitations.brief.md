# arxiv-program/research/2026-09-21/arxiv-deep/1210-on-kelly-betting-some-limitations.md
## What it is (1-2 sentences)
"On Kelly Betting: Some Limitations" (Hsieh & Barmish 2017, arXiv:1710.01787) is a cautionary paper showing that common closed-form approximations to the Kelly fraction (Taylor quadratic, GBM μ/σ²) can recommend catastrophically wrong — even sign-wrong — stakes, and quantifying the ruin-adjacent drawdown of full Kelly via Monte Carlo. Ledger verdict: ADAPT — adopt exact convex optimization with explicit drawdown constraints and fractional sizing; never use the Taylor/GBM approximations.
## Key metrics/methods (formulas where given, else "not specified")
- Kelly objective: maximize g(K) = E[log(1 + KᵀX)], wealth recursion V(k+1) = (1 + KᵀX(k))V(k).
- Taylor approximation: maximize K·E[X] − (1/2)K²·E[X²], optimum κTaylor = E[X]/E[X²].
- GBM approximation: κGBM = μ/σ².
- Drawdown constraint variant: re-solve Kelly under E[D(K)] ≤ d (expected maximum drawdown).
- Assumptions: i.i.d. returns, known distribution, log utility, no transaction costs.
## Data sources named
None — stylized gambles: Gamble A (X = 0.15 w.p. 0.95, −0.95 w.p. 0.05); coin-flip gamble (even-money ±1, p = 0.99, N = 252).
## Findings (numbers and facts, not vibes)
- Gamble A: κTaylor = 1.4286 → saturated at 1, exact expected growth ≈ −0.017; κGBM = 1.6529 → saturated at 1, growth ≈ −0.017; true optimum K* = 0.6667 with g(K*) ≈ 0.0404. Annualized: true r(K*) ≈ 10.384 vs ≈ −3.443 for both approximations — the approximations turn +4% growth into −1.7% expected growth.
- Coin gamble (N=252, p=0.99, K*=0.98): 92% chance the maximum drawdown exceeds 98%; E[D(K*)] ≈ 0.903.
- Imposing E[D(K)] ≤ 0.2 reduces the optimal fraction to ≈ 0.1 — a ~10× haircut from the unconstrained optimum.
- GSE's current `kelly-investigation.ts` does exact single-bet Kelly (default fraction ≤ 0.25, refuses stake when no edge) — so this is an extension (drawdown-constraint machinery), not a duplicate.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Staking safety: hard rule — never serve Taylor/μ/σ² approximate sizing; keep the exact convex objective and codify the ban in code comments/tests (TRUST-SIGNAL — sizing integrity).
- Bankroll survival: expected-maximum-drawdown constraint E[D(f)] ≤ d as the missing sizing input — on the paper's coin example the constraint cuts the fraction ~10× (OTHER — staking pipeline).
## Engine-actionable? (yes/no + one-line what)
Yes — add an expected-maximum-drawdown constraint (d ≈ 0.2, tuned on bankroll simulation) to the fractional-Kelly sizing path plus a Gamble-A unit test asserting K ≈ 0.667, gated on ≤0.8× baseline drawdown with ≥0.95× baseline log growth on held-out 2025–2026 backtest.
