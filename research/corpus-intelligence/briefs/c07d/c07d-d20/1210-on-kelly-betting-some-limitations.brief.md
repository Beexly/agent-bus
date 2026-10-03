# arxiv-program/research/2026-09-21/arxiv-deep/1210-on-kelly-betting-some-limitations.md
## What it is (1-2 sentences)
Deep read of Hsieh & Barmish (2017, arXiv:1710.01787), a theoretical paper demonstrating that common closed-form approximations to the Kelly fraction (Taylor quadratic expansion, GBM μ/σ²) can be catastrophically wrong — even sign-wrong — and quantifying the severe drawdown exposure of exact full Kelly. Verdict in file: ADAPT — adopt exact convex optimization with explicit drawdown constraints and fractional sizing; never use the Taylor/GBM sizing approximations.

## Key metrics/methods (formulas where given, else "not specified")
- Kelly objective: choose K to maximize g(K) = E[log(1 + K^T X)], wealth recursion V(k+1) = (1 + K^T X(k))V(k).
- Taylor approximation: maximize K·E[X] − (1/2)K²·E[X²], optimum κTaylor = E[X]/E[X²].
- GBM approximation: κGBM = μ/σ².
- Annualized growth rate r(K) (their computed mapping, 252 periods) used for comparison.
- Drawdown analysis: coin-flip gamble with ±1 outcomes, win probability p = 0.99, horizon N = 252; Kelly problem re-solved under expected-maximum-drawdown constraint E[D(K)] ≤ d.
- Assumptions: i.i.d. returns, known distribution, log utility, no transaction costs — the paper's point is that the approximations add unstated error beyond these.

## Data sources named
No empirical dataset — stylized gambles: Gamble A (X = 0.15 w.p. 0.95, X = −0.95 w.p. 0.05); coin-flip gamble (even-money ±1, p = 0.99, N = 252). References GSE's `apps/web/lib/staking/kelly-investigation.ts` (educational single-bet Kelly, default fraction ≤ 0.25, refuses stake when no edge) on top of `apps/web/lib/tracker/staking.ts`, and the corpus's existing-research map identifying Kelly sizing as a product gap (zero paper deep reads).

## Findings (numbers and facts, not vibes)
- Gamble A (verbatim): κTaylor = 1.4286 → saturated K_Taylor = 1, exact expected growth ≈ −0.017; κGBM = 1.6529 → saturated at 1, exact expected growth ≈ −0.017; true optimum K* = 0.6667 with g(K*) ≈ 0.0404. The approximations turn a +4% growth opportunity into −1.7% expected growth.
- Annualized: true r(K*) ≈ 10.384 vs ≈ −3.443 for both approximations.
- Coin gamble (N = 252, p = 0.99, K* = 0.98): 92% chance the maximum drawdown exceeds 98%.
- Expected maximum drawdown of the Kelly bettor: E[D(K*)] ≈ 0.903; for the approximation at K = 1 it is ≈ 1.0.
- Imposing E[D(K)] ≤ 0.2 reduces the optimal fraction to ≈ 0.1.
- Takeaway as stated: never serve Taylor/GBM closed forms directly — the approximation error can flip a +4% edge into −1.7% growth and push drawdown to near-certain ruin levels; exact convex optimization on the empirical/simulated return distribution is the required path, plus explicit drawdown constraints.
- Limitations: Gamble A is deliberately adversarial; real sports edges rarely have the extreme 5%-tail-at-−95% asymmetry that breaks approximations worst; drawdown analysis is single-repeated-gamble, not a portfolio of simultaneous bets.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER — calibration/sizing program, direct extension) GSE's current `kelly-investigation.ts` computes exact single-bet Kelly, so this paper is an extension, not a duplicate: it warns against any future move to Taylor/GBM-style closed-form sizing (e.g., μ/σ² heuristics on multi-leg or portfolio staking) and supplies the drawdown-constraint machinery GSE lacks — E[D(f)] ≤ d (e.g., d = 0.2) on the fractional-Kelly sizing path, tuned against bankroll simulation on GSE backtest picks.
- (OTHER — calibration/sizing program, testing) The file prescribes a unit test replicating Gamble A: assert the sizer returns K ≈ 0.667 and never the approximations' saturated K = 1 — a regression guard against any approximate-sizing regression.
- (OTHER — calibration/sizing program, improvement direction) Beyond the paper: replace the single-gamble drawdown constraint with a portfolio drawdown constraint over GSE's simultaneous-pick slate (correlated outcomes), solved as a convex program with CVaR-of-drawdown — hypothesis: correlation-aware drawdown control beats per-bet fractional Kelly on realized Sharpe of the bankroll curve.
- UNCERTAIN: the transfer of the adversarial-gamble failure magnitudes to real sports books is explicitly uncertain — real edges rarely carry the extreme asymmetry that breaks the approximations worst.

## Engine-actionable? (yes/no + one-line what)
Yes — keep exact convex maximization of E[log(1 + stakeᵀX)] (codify the Taylor/GBM ban in code comments/tests), add an expected-maximum-drawdown constraint E[D(f)] ≤ d (e.g., 0.2) to the fractional-Kelly path tuned on backtest bankroll simulation, and add the Gamble-A unit test asserting K ≈ 0.667; acceptance gate in file: adopt if held-out 2025–2026 backtest shows realized max drawdown ≤ 0.8× baseline drawdown with log growth ≥ 0.95× baseline.
