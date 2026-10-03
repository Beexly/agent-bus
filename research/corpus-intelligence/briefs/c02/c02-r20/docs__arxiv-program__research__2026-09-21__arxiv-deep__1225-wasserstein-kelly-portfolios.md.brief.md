# docs/arxiv-program/research/2026-09-21/arxiv-deep/1225-wasserstein-kelly-portfolios.md
## What it is (1-2 sentences)
Jonathan Yu-Meng Li (arXiv:2302.13979v1, q-fin.PM, Feb 2023): makes Kelly portfolio choice robust to distributional uncertainty by optimizing expected log-growth against the worst case inside a Wasserstein ball around the empirical log-return distribution, and tests whether the robust version beats standard Kelly out-of-sample on S&P 500 stocks. Ledger verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Robust Kelly objective: max_w min_{P: W(P,P̂_n) ≤ δ} E_P[log(1 + wᵀR)].
- Exact finite-dimensional convex reformulation (dual) from the paper's §3 — solves as a convex program, no adversary sampling needed.
- Wasserstein ball placed on log-return distributions (matches Kelly log-utility natively), robustness radii δ ∈ {0.1, 0.2, 0.3, 0.4} (ad hoc grid, no data-driven δ selection).
- Evaluation metrics: annualized return, volatility, Sharpe ratio, max drawdown, log final wealth.
## Data sources named
S&P 500 stocks: training on 2019 daily log-returns; out-of-sample 2020-01-01 through 2023-02-20 (includes COVID crash and 2022 bear market). Protocol: 10 randomly selected S&P 500 stocks per universe, 1,000 repetitions.
## Findings (numbers and facts, not vibes)
- No exact numeric table is given — all performance claims are presented graphically (OOS paths and metric bars), a reporting weakness the ledger flags.
- Robust Kelly shows directional improvements over standard Kelly across all five metrics (annualized return, volatility, Sharpe, max drawdown, log final wealth) — graphical only, cannot be sized from the paper. [OTHER — staking/bankroll robustness lane]
- Larger δ is generally more conservative and better protected in the COVID-crash segment of the OOS window. [OTHER — regime-aware staking]
- No data-driven δ selection rule; 10-stock random universes are small; no transaction costs or leverage constraints modeled. [OTHER — implementation caveat]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Robust-Kelly sizing under distributional shift (model trained on last season, deployed this season) — directly addresses the Kelly failure taxonomy in ledger 0276. (OTHER)
- No QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, or SCHEME content in this file.
## Engine-actionable? (yes/no + one-line what)
yes — Build per-pick log-return empirical distribution from walk-forward backtests, solve the robust Kelly convex program with δ calibrated on a validation fold, and use robust weights as the stake vector scaled by the existing fractional-Kelly rule (per ledger §11–14).
