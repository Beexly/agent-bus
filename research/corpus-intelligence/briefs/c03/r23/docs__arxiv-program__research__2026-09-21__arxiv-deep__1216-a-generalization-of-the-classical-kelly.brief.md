# docs/arxiv-program/research/2026-09-21/arxiv-deep/1216-a-generalization-of-the-classical-kelly.md
## What it is (1-2 sentences)
Deep-read ledger (ADAPT) of arXiv:2003.02743 (O'Brien et al., 2020), deriving the optimal Kelly stake fraction when bet outcomes are temporally correlated (modeled as a Markov chain of memory depth m) rather than independent, via a constrained-least-squares estimation procedure for the correlation parameters. GSE's `apps/web/lib/staking/kelly-investigation.ts` currently assumes independent trials, so this is a new capability, not a duplicate.

## Key metrics/methods (formulas where given, else "not specified")
- Memory-1 model: P(X_k = 1 | X_{k−1}) = ω0 + ω1·X_{k−1}.
- Optimal constant fraction over horizon n: K_n = 2·(E[H_n]/n) − 1, where H_n counts wins.
- E[H_n]/n = λ_n·p0 + (1 − λ_n)·p_∞; p0 = ω0 + ω1·x_{−1}; p_∞ = (ω0 − ω1)/(1 − 2·ω1); λ_n = (1/n)·(1 − (2·ω1)^n)/(1 − 2·ω1).
- Time-varying fractions: K̃_k = 2·p_k − 1; constant K_n is their average.
- Parameter estimation: constrained least squares on observed sequences.
- Assumptions: binary even-money outcomes, stationary Markov dependence of known memory depth, log utility.

## Data sources named
No empirical dataset. Illustrative Markov-chain example: memory depth 1, x_{−1} = 1, ω0 = 0.55, ω1 = 0.20, n = 2. ELG comparisons computed under the assumed true model (no train/test split).

## Findings (numbers and facts, not vibes)
- Paper's numerical example (x_{−1}=1, ω0=0.55, ω1=0.20, n=2): classical Kelly expected log growth ≈ 0.053; correlation-aware constant-fraction ELG ≈ 0.082; time-varying-fraction ELG ≈ 0.088.
- Accounting for correlation gains ~55% more ELG than classical Kelly in this example; time-varying adds a further ~7% over the constant version (reader's interpretation, marked INFERENCE in ledger).
- Limitations: ELG gains computed under the true model — estimated (ω0, ω1) shrink gains and estimation error can flip the sign of the adjustment; no guidance on choosing memory depth m (overfitting risk); binary even-money structure does not directly cover American-odds sports bets; sports autocorrelation (form streaks) is weaker and less stationary than the fixed Markov chain.
- Ledger verdict: ADAPT — use correlation-aware Kelly fraction for GSE's sequential edges, estimating parameters strictly out-of-sample with constrained least squares.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Streak/momentum in team strength and line value is the "correlation" analogue in sports — model mispricing persisting across weeks for the same team, or streaky calibration residuals (OTHER — staking/sizing, new Kelly-lane capability).
- Improvement-experiment hook: regime-switching correlation parameters (e.g., coaching changes break streaks) (COACHING — regime breaks as a source of nonstationarity in streak models).
- Guardrail noted: fall back to classical Kelly if autocorrelation is not significant at 95% on the trailing window (OTHER — sizing guardrail).

## Engine-actionable? (yes/no + one-line what)
Yes — test lag-1 autocorrelation of GSE's per-pick realized edge by team/market on backtest data, and if significant at 95% on a rolling window, apply the paper's K_n/(2p−1) sizing adjustment (or time-varying K̃_k) behind the existing fractional cap, with a strict out-of-sample acceptance gate of ≥3% realized log-growth improvement on held-out data.
