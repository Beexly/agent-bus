# arxiv-program/research/2026-09-21/arxiv-deep/0096-predicting-the-scoring-time-in-hockey.md
## What it is (1-2 sentences)
A Bayesian predictive-density study of the time until the r-th goal in NHL hockey, comparing an unrestricted gamma waiting-time estimator against an ancillary-information-restricted version (past points / specialist opinion as an order restriction). Verdict in the source: REJECT — no credible path into GSE's NFL game-outcome/prop engine.
## Key metrics/methods (formulas where given, else "not specified")
- Waiting-time model: X|lambda ~ Gam(r, lambda), pdf p_lambda(x) = x^{r-1} e^{-x/lambda} / (Gamma(r) lambda^r), x > 0 (Sec. 2).
- KL loss: L_KL(q_lambda, q-hat_1) = integral q_lambda(y) log(q_lambda(y)/q-hat_1(y)) dy (2.1); frequentist risk R_KL (2.2); Bayes predictive density q-hat_pi(y;x) = integral q_lambda(y) pi(lambda|x) dlambda (2.3).
- Unrestricted (Lemma 3.1): three-parameter beta prime q-hat_0(y_1;x_1) = x_1^{r_1} y_1^{r_0-1} / [B(r_1,r_0)(x_1+y_1)^{r_1+r_0}] (3.14).
- Restricted (Theorem 3.1, order restriction lambda_1/lambda_2 >= 1): weighted beta prime q-hat_1(y_1;x_1,x_2) = [C(r_1+r_0-1, x_1+y_1, r_2-1, x_2) / C(r_1-1, x_1, r_2-1, x_2)] · q-hat_0(y_1;x_1) (3.15), explicit hypergeometric form (3.18).
- Application: team goals as independent Poisson (means scaled by prior-season points R_1=105 Toronto, R_2=71 Montreal); densities truncated to (0,60) minutes. Several coefficient layouts in the source were PDF-extraction garbled and flagged uncertain.
## Data sources named
NHL 2017–2018 season, proprietary Stathletes data (acknowledged: Meghan Chayka, Jeff Goeree); only aggregated Table 1 times printed. Evaluation: densities trained on 2017–18, KL prediction error on 2016–17, risk projected to 2018–19 matchup (Toronto vs Montreal).
## Findings (numbers and facts, not vibes)
- KL prediction error on 2016–17: pe(q-hat_1) = 0.04 vs pe(q-hat_0) = 0.45 — restricted estimator wins ~11× under KL.
- Ancillary info shifts predicted 3rd-goal time later: mode 17.92 → 28.13, mean 28.35 → 33.12, P20 14.38 → 19.06, P50 26.62 → 32.82, P90 50.30 → 53.48.
- Frequentist risk curves: as theta_1/theta_2 rises above 1, R_KL of q-hat_1 falls below constant risk of q-hat_0 (MRE); both converge when information vanishes. r_1 = r_2 = r_0 = 3.
- Limitations: evaluation is in-sample-ish (truth model = assumed model family); no robustness check for wrong restrictions; single team-pair illustration; no actual 2018–19 game outcomes scored; no betting or decision metric.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — NHL time-to-rth-goal Bayesian predictive densities; no NFL analogue in the engine's lanes (no time-to-score markets modeled).
## Engine-actionable? (yes/no + one-line what)
No — hockey scoring-time machinery with no GSE-relevant target; only conceivable port is first-TD timing markets, which GSE does not model.
