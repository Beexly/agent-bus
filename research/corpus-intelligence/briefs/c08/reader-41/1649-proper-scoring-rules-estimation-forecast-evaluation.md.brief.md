# docs/arxiv-program/research/2026-09-21/arxiv-deep/1649-proper-scoring-rules-estimation-forecast-evaluation.md
## What it is (1-2 sentences)
Deep read of Waghmare & Ziegel (2025), "Proper Scoring Rules for Estimation and Forecast Evaluation" (ETH Zurich): a foundational survey on proper scoring rules — characterization, families, and the choice between them — adopted as the mathematical foundation for GSE's entire forecast-evaluation doctrine. Verdict in file: ADOPT — CRPS as primary objective for margin/total distributions, Brier/log for cover probabilities.
## Key metrics/methods (formulas where given, else "not specified")
- Propriety: S(Q,Q) ≤ S(P,Q) ∀P,Q (strict iff equality ⟺ P=Q); Savage representation: every regular proper score = Bregman divergence of its entropy function.
- Brier: S_Brier(P,y) = (p−y)²; Log: S_log(P,y) = −log p(y); CRPS: CRPS(P,y) = ∫(F_P(x) − 1{y≤x})²dx.
- Kernel scores: S(P,y) = E_P[k(X,X′)] − 2E_P[k(X,y)] (+const) — CRPS as special case; squared MMD distances (Steinwart & Ziegel 2021; Gretton et al. 2006); energy statistics (Székely & Rizzo 2013).
- Weighted/threshold-weighted scores to emphasize regions (e.g., blowout tails); minimum-score estimation (min-CRPS as robust MLE alternative).
- Comparative claims: log score sensitive to tail misspecification (one bad density evaluation dominates); CRPS more robust, rewards whole distribution; kernel scores choose penalized geometry; minimum-score estimators can beat MLE under misspecification.
## Data sources named
None — theory/survey; evidence is mathematical plus documented application history (CRPS in meteorology/ECMWF, log score in economics, Brier in classification). All formulas implementable in ~20 lines; GSE already has brier.ts.
## Findings (numbers and facts, not vibes)
- GSE's current state (from file): brier.ts, brier-ece.test.ts, scoring-reliability.ts, skill-metrics.ts — Brier-centric, no CRPS, no log-score doctrine, no written properness rationale.
- File's implementation spec: (1) doctrine — Brier for cover probs, log score as tail diagnostic, CRPS PRIMARY for margin/total distributions; (2) implement crps.ts in apps/web/lib/calibration/ (empirical-CDF for ensembles, closed form for Gaussian); (3) minimum-CRPS training of distributional heads; (4) threshold-weighted CRPS emphasizing |margin|>14.
- Rejection gate: reject min-CRPS training if it degrades log-score tail diagnostics by >10%.
- Improvement experiment: proper-score "skill gap" — CRPS/Brier of market-implied distributions (spreads/totals/moneylines) vs GSE's, weekly; where GSE beats the market consistently is the edge, where it loses is the repair backlog.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: properness = truth-telling incentives; formalizes WHY Brier/log/CRPS are the right objectives — evaluation doctrine that can't be gamed by hedging forecasts.
- OTHER: model-vs-market scoreboard (proper-score skill-gap decomposition) as weekly model selection/repair backlog driver.
## Engine-actionable? (yes/no + one-line what)
yes — Write the evaluation doctrine (CRPS primary for distributions, Brier for cover), implement crps.ts, and score every model version against market-implied distributions weekly (2–3 days).
