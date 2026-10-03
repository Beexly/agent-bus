# arxiv-program/research/2026-09-21/arxiv-deep/1931-offline-deep-reinforcement-learning-for-dynamic-pricing.md

## What it is (1-2 sentences)
Full-paper research ledger (verdict: ADAPT) on arXiv:2203.03003 — offline deep RL (CQL) for dynamic pricing of consumer credit, read 2026-09-22, adapted by the ledger author into a GSE offline-RL staking-size module (CQL over logged bets, no live A/B experimentation).

## Key metrics/methods (formulas where given, else "not specified")
- Method: offline CQL (continuous-action actor-critic, CQL(ℋ)-style per Kumar et al. 2020; penalty term estimated via samples from current policy).
- Reward: r(s_t,a_t) = p(Accept_t | s_t,a_t) · (expected profit if accepted per Phillips et al. 2015) — interest income minus capital costs minus credit risk; Net Income / Net Interest Income variants noted.
- Baselines: historical policy π_β; profit-optimization π_Opt: a*_t = argmax over a∈[2.5%,12.5%] of p̂(Accept|s_t,a)·profit(s_t,a), with p̂ from training-set logistic regression.
- Metrics: expected profit on test (via a model-based logistic off-policy evaluator), MAPD (mean absolute percentage deviation) of learned prices vs historical policy.
- State s_t (16 features): [Term, Amount, FICO, PD, PreviousRate, CompetitionRate, PrimeRate, Tier, LoanType, CarType, PartnerBin, State, Months, DayOfWeek, MonthOfYear, DaysSinceApp].
- GSE translation spec: state = per-bet feature vector (engine edge, de-vigged fair odds, market odds, CLV history, book, day-of-week, slate size, bankroll fraction); action = stake ∈ {0, 0.25u, 0.5u, 1u, 2u}; reward = settled profit; train 2021–2023, test 2024; constraint stake-MAPD vs historical fractional-Kelly ≤ 25%.

## Data sources named
- Real: ~200,000 approved US auto-loan applications from an online lender via the Center for Pricing and Revenue Management, Columbia (gsb.columbia.edu/cprm/research/datasets); columns: interest rate, term, approved amount, FICO, accept/reject. Synthetic loan data (demand simulated under known forms). No code URL stated in the paper.

## Findings (numbers and facts, not vibes)
- π_CQL: +21% expected profit over historical policy π_β (3-seed average), with <15% MAPD in prices vs the existing policy; average price pushed down 6.8% → 5.9% (consistent with documented historical over-pricing, Phillips et al. 2015).
- π_Opt (parametric): +34% expected profit with 24% MAPD — fragile: under alternative response models with similar fit, the estimated gain ranged from a −7% decrease to a +34% increase, average estimate 12.6%, "strong evidence of overfitting."
- Baseline logistic price-response model has low pseudo-R² ("limited explainability of the feature set") — the regime where model-free offline RL's advantage is largest.
- Synthetic experiments (§4.2): CQL recovers near-optimal pricing under misspecified demand (exact numbers in figures; direction favors CQL robustness).
- Limitations (ledger): off-policy evaluation is model-based, so +21% is estimated, not realized; single-step (myopic) formulation; partial observability/adverse selection acknowledged but unsolved.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — GSE staking/bankroll module design: offline CQL as a model-free replacement for parametric Kelly stake rules; the π_Opt fragility finding transfers directly — INFERENCE: plug-in-probability Kelly rules are the analog of π_Opt and likely similarly fragile to the assumed edge→probability mapping.
- OTHER — Ledger §11/14 proposes the trust-region stake constraint (MAPD ≤ 25% vs historical fractional-Kelly) and a log-bankroll-growth multi-step extension (true Kelly objective) as follow-on experiments.

## Engine-actionable? (yes/no + one-line what)
Yes — mirrors directly into an offline CQL staking policy trained on 2021–2023 logged picks and tested on realized 2024 settlement, gated at ≥2pp ROI lift over fractional-Kelly with stake MAPD ≤ 25% and sign-stable lift under 3 alternative outcome models.
