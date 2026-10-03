# docs/arxiv-program/research/2026-09-21/arxiv-deep/1734-bandit-market-makers.md
## What it is (1-2 sentences)
Theory paper (Nicolás Della Penna, Mark D. Reid, 2012) modeling a profit-driven market maker as a bandit problem: the maker explores overround (margin) levels as bandit arms, prices within each round via overround-LMSR cost functions, and is rewarded by worst-case-profit improvement. Gives distribution-free regret bounds and simulation results.

## Key metrics/methods (formulas where given, else "not specified")
- Reward: r_q(C; s) = min_p V_{q+s}(C,p) − min_p V_q(C,p), V_q(C,p) = C(q) − ⟨q,p⟩.
- Regret bound (Theorem 4.1, via continuous adaptive bandits): O(T^{(α+1)/(2α+1)} log^{α/(2α+1)} T) against adaptive adversaries.
- Reward axioms: R0 zero-calibrated, R1 path-independent, R2 overround-compatible.
- Simulation: EXP3 over overround arms 1.05–1.8, b=10 liquidity, 400 periods, IID uniform-belief traders, binary outcomes.

## Data sources named
No real dataset — simulations only. Second "adapting to a shock" simulation shifts trader beliefs mid-run.

## Findings (numbers and facts, not vibes)
Max achievable profit (omniscient fixed 1.5 overround, infinite liquidity): 100. Best fixed-overround maker: 2/3 of max (≈66.7). EXP3 bandit maker: 2/5 of max (≈40) — substantial exploration cost vs best fixed arm. Shock simulation: bandit maker adapts the overround after belief shift (qualitative). No predictive-accuracy metrics. Paper assumes myopic, non-strategic traders; no adverse selection modeled.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: formal model of bookmaker margin-setting behavior (why books set the margins they do) — input to line-shopping timing (bet now vs wait) and CLV/margin forecasting; R0–R2 reward axioms as a sanity filter for scoring GSE's own margin policies if it publishes fair odds.
- TRUST-SIGNAL: INFERENCE — the margin-setting model could inform when books are most likely to widen margin before high-uncertainty games, but the paper gives no empirical calibration to real book data.

## Engine-actionable? (yes/no + one-line what)
yes — Fit a bandit-style model to each book's historical overround path to predict margin widening/tightening for line-shopping timing.
