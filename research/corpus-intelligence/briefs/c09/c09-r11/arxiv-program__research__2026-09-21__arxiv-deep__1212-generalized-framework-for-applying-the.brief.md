# arxiv-program/research/2026-09-21/arxiv-deep/1212-generalized-framework-for-applying-the.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:1806.05293 (Byrnes & Barnett 2018): derives the exact multivariate Kelly first-order condition for portfolios of multiple simultaneous investments with arbitrary return distributions and correlations. Verdict: ADAPT — use as the sizing engine for GSE's correlated simultaneous-pick slates, replacing the unconstrained linear solve with a constrained convex program.
## Key metrics/methods (formulas where given, else "not specified")
- Single: ∫ k(x)·p(x)/(1 + f·k(x)) dx = 0. Multivariate: ∫ k_l(x_l)·p(x)/(1 + Σ_{l'} f_{l'}·k_{l'}(x_{l'})) dx = 0, l=1..L.
- First-order (small-parameter) approximation: M·f = b with M_{ll'} = E[k_l·k_{l'}], b_l = E[k_l]; arbitrary-distribution closed form f = (E[x]/x0 − 1)/(1 + E[x²]/x0² − 2·E[x]/x0); Gaussian case f = μ/(μ² + σ²).
- Key qualitative result: positive correlation between investments reduces optimal fractions; negative correlation increases them. Author warning: linear approximation valid only for small parameters.
## Data sources named
None — theoretical paper with pedagogical numerical examples only; no empirical dataset or validation.
## Findings (numbers and facts, not vibes)
- No empirical numbers: results are the formulas and qualitative findings. Gaussian closed form f = μ/(μ² + σ²); GBM approximation agrees with μ/σ² only for small μ and σ.
- Current GSE gap (from file's overlap section): apps/web/lib/staking/kelly-investigation.ts sizes single bets independently — no multivariate/correlated-slate capability; this paper is the theoretical foundation for the missing capability.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: bet-sizing — the missing "portfolio-of-bets" sizing for correlated slates (same-game combos, same-slate picks). Complements ledger 1222 (fractional Kelly growth/risk trade-off) and 1232 (Kelly-gap diagnostics).
## Engine-actionable? (yes/no + one-line what)
yes — build a slate sizer solving the exact multivariate Kelly condition as a constrained convex program (Σf ≤ 1 cash cap, f ≥ 0, drawdown budget) on per-pick edges plus a historical co-occurrence correlation matrix, with a ≥5% realized log-bankroll-growth beat over independent sizing as the adoption gate.
