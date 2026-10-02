# docs/arxiv-program/research/2026-09-21/arxiv-deep/0467-probabilistic-prediction-for-binary-treatment-choice.md
## What it is (1-2 sentences)
Deep-read ledger of Manski (2021) "Probabilistic Prediction for Binary Treatment Choice" — Wald minimax-regret (MMR) statistical decision theory for binary treatment choice: as-if optimization with estimated probabilities, closed-form MMR rules, and weighted estimators with optimized weights. Verdict: ADAPT — the MMR framework fills the repo's named Gap #1 (Kelly/staking under uncertainty has zero papers read) with a criterion that optimizes decisions, not probability accuracy.

## Key metrics/methods (formulas where given, else "not specified")
- Wald criteria: Bayes risk, maximin, minimax regret over states of nature s, sampling distributions Q_s, decision functions phi(psi).
- Clinical threshold rule: p_x* = 1 - U_B; choose treatment B iff p_x > p_x*.
- Regret: R_s[phi(psi)] = |(1-p_s) - U_B| * e[p_s, phi(psi), U_B], where e = probability the rule chooses the inferior treatment.
- No-data MMR = min[(1-p_m) - U_B, U_B - (1-p_M)]; uninformative-data randomized rule with q = [U_B - (1-p_M)]/(p_M - p_m).
- One-observation max regret = 1/4 * max[(1-U_B)^2, U_B^2]; Hoeffding bound: max_s E_s[R_s(n/N)] <= delta + max[(1-p_m)-U_B, U_B-(1-p_M)] * exp(-2N delta^2).
- Weighted (kernel) estimators with optimized weights; ecological-inference via constrained least squares.

## Data sources named
None — purely theoretical/simulation: illustrative two-covariate example (p_m0=0.2, p_M0=0.6, lambda=+-0.1, U_0B=0.6); Monte Carlo max-regret with 20,000 draws on 50x50 parameter grid.

## Findings (numbers and facts, not vibes)
- ITP weighted-estimator minimized maximum regret (Table 1, exact): (N0,N1)=(10,10): 0.030 at w=0.751; (5,15): 0.034 at 0.863; (15,5): 0.023 at 0.752; (20,20): 0.021 at 0.858; (10,30): 0.026 at 0.911; (30,10): 0.016 at 0.800 — optimal weights favor own-group sample but borrow substantially from the other group.
- Ecological example: maximum regret 0.011 for (10,10), 0.008 for (20,20).
- One-observation max regret closed form 1/4*max[(1-U_B)^2, U_B^2].
- Critique: biostatistics/ML evaluations (accuracy, AUC, calibration) miss decision quality — the probability is an instrument, the *decision* is the target.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Minimax regret as the criterion for bet/publish/abstain decisions under probability uncertainty — TRUST-SIGNAL (decision framework).
- Optimal blended-probability weights (engine vs market) computed by regret minimization — OTHER (decision policy).
- Weighting borrowed substantially from the other group (w=0.75-0.91 on own group) — OTHER (engine-vs-market blending heuristic).
- MMR policy buys robustness; gate requires >=90% of as-if P&L with worst-decile regret <=0.7x — OTHER (policy design).

## Engine-actionable? (yes/no + one-line what)
Yes — frame publish/bet as Manski's binary choice, compute maximum regret of the current as-if edge threshold over the engine-vs-market disagreement interval, and adopt MMR-optimal thresholds/blending weights if they preserve >=90% P&L while cutting worst-decile regret.
