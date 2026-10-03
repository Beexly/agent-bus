# arxiv-program/research/2026-09-21/arxiv-deep/1745-gambling-and-renyi-divergence.md
## What it is (1-2 sentences)
An information-theoretic treatment of gambling on mutually-exclusive outcomes (horse races): maximizing a one-parameter β-utility family U_β = (1/β)log E[S^β] (Kelly at β→0, expected return at β=1) yields a closed-form optimal allocation b^*(β) and a three-term decomposition of utility into bookmaker unfairness (vig), bookmaker mispricing (edge in bits), and allocation error (staking mistake) — via Rényi divergence, extended to side information and partial investment. Pure theory, no empirical validation.
## Key metrics/methods (formulas where given, else "not specified")
- U_β = (1/β)log E[S^β] = log[Σ_i p_i(b_i o_i)^β]^{1/β}; β=−∞/0/1/∞ → min/geometric/arithmetic/max
- Theorem 1: (1/β)log E[S^β] = log c + D_{1/(1−β)}(p‖r) − D_{1−β}(g‖b); optimal b^*(β)=g with g_i ∝ p_i^{1/(1−β)} o_i^{β/(1−β)}; β→0 recovers Kelly b_i=p_i; β≥1 → all wealth on one horse (ruinous); β→−∞ → b_i=c/o_i (risk-free)
- Novel conditional Rényi divergence D_α(p_{X|Y}‖q_{X|Y}|p_Y) for side information (Theorem 6); partial investment: bet only when 1 − Σ_{i∈J} 1/o_i > 0 (Props. 9–10)
- Assumptions: p_i,o_i>0; i.i.d. races with constant odds for growth claim; full reinvestment
## Data sources named
None (pure theory; no datasets, no simulations)
## Findings (numbers and facts, not vibes)
- No numerical results — all results are closed-form characterizations
- Three-term reading: log c = odds fairness (vig), D_{1/(1−β)}(p‖r) = bookmaker's mispricing = the edge, −D_{1−β}(g‖b) = gambler's allocation error — a per-bet edge diagnostic GSE doesn't currently compute
- Limitations: no empirical validation (drawdowns, sensitivity to misestimated p untested); i.i.d. constant-odds assumption fails for sports markets; mutually-exclusive setup covers moneylines/parlay legs, not simultaneous independent bets; β<0 region is more conservative than Kelly but the growth/drawdown tradeoff never priced
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: "β-Kelly" sizing module for mutually-exclusive markets (moneylines, discrete-outcome props): closed-form allocation g(β) on grid β∈{−2,−1,−0.5,−0.25,0}, map β to effective fractional-Kelly by variance-matching on a calibration set, log the three decomposition terms per bet as edge diagnostics; improvement: Bayes-β-Kelly — maximize E_p[U_β] over the engine's posterior/conformal distribution on p, folding estimation error into the allocation
## Engine-actionable? (yes/no + one-line what)
Yes — build the β-Kelly module (~1 day, closed form) on 2023–2025 NFL moneylines; gate: some β<0 beats half-Kelly on terminal log growth with max drawdown ≤0.8× half-Kelly's, β stable across season-halves; else stay with fractional Kelly.
