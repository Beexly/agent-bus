# arxiv-program/research/2026-09-21/arxiv-deep/0402-expected-hypothetical-completion-probability.md
## What it is (1-2 sentences)
Introduces Expected Hypothetical Completion Probability (EHCP) (arXiv:1910.12337v1, Deshpande & Evans 2019): for every receiver on every NFL passing play, the expected completion probability had the ball been thrown to him at each point in his route, used to evaluate QB decision-making by process rather than outcome; Motif verdict ADAPT — a reproducible completion-probability recipe plus a genuinely new QB-decision metric for GSE.
## Key metrics/methods (formulas where given, else "not specified")
- Completion model: log(P(y=1|x)/P(y=0|x)) = f(x); Bayesian logistic regression (Stan/rstan, N(0,1) priors after Gelman-2008 rescaling) vs Bayesian Additive Regression Trees (BART, Linero 2018 sparsity prior); model selection by 10 random 75/25 splits on MSE, log-loss, misclassification
- EHCP (Eq. 2): EHCP(x*_obs) = E_{x*_miss}[F(x*_obs, x*_miss)] ≈ (1/M) Σ_m F(x*_obs, x*_miss^(m)), with x*_miss sampled from the marginal empirical distribution over all observed passes
- Metrics: squared error (y−p̂)²; log-loss; misclassification 𝟙(y ≠ 𝟙(p̂≥0.5))
- Features: throw-time (receiver speed/direction, receiver–defender–ball pairwise distances, cumulative distance run); catch-attempt-time (same + in-flight changes); situational (snap-to-pass, air time, snap-to-catch time, seconds left in half, down, distance, leading flag, 9+/1–8/0 score-differential)
## Data sources named
NFL Big Data Bowl 2019 dataset — tracking + play data from all 91 games of the first 6 weeks of the 2017 NFL season, 0.1-second granularity; analysis sample N=4,913 passes; code at https://www.github.com/skdeshpande91/ehcp
## Findings (numbers and facts, not vibes)
- BART beats Bayesian logistic on all three metrics (10-split averages): logistic MSE 0.099 (0.004), misclass 0.138 (0.008), log-loss 0.332 (0.018); BART MSE 0.086 (0.004), misclass 0.113 (0.005), log-loss 0.289 (0.011)
- Variable importance (posterior splitting probability): receiver speed at catch attempt 20.74%; receiver–ball distance at catch 17.29%; total distance traveled snap→catch 10.92%; receiver–ball distance at throw 7.35%; separation at catch 6.74%; negligible: speed snap→throw 0.27%, separation at throw 0.08%, distance run snap→throw 0.01%
- Kupp TD vs Tolzien INT (Week 1, 2017): forecasted completion posterior means 47% vs 37.1%; EHCP at arrival 65.1% vs 59.0%; Kupp's EHCP ~2 s earlier 85.1% (95% intervals nearly disjoint from arrival interval); Watkins had the play's highest EHCP 92.2% at 1.5 s after snap
- Tolzien INT: Hilton's arrival-time EHCP 59.0% vs ~89% ~2 s earlier; Moncrief highest EHCP at 2.4 s after snap; intervals Hilton [81.4%, 95.1%] vs Moncrief [89.9%, 99.0%] (substantially overlapping)
- Table 2 (min 100 passes, "illustrative only"): highest % throws to max-EHCP receiver — Winston 26.8% (min-EHCP 16.8%), Siemian 26.2%/16.9%, Goff 24.8%/19.2%; lowest — Wilson 13.2%/23.5%, Carr 15.1%/27.5%, Wentz 15.3%/27.5%
- Table 3 (min 40 targets): receiver credit/blame (EHCP − fitted completion prob): Tate +11.8pp (64.9%/76.7%), McCaffrey +9.9, Brown +8.5; Bryant −18.4 (60.9%/42.5%), Hopkins −17.8, Allen −10.6
- Reader's limitations: random (not time-ordered) splits leak future games; crude marginal imputation of x*_miss (crossers imputed from screens); no QB-pressure features; 6 weeks of 2017, N=4,913, schemes evolved since; training only on thrown passes (selection bias for hypotheticals)
- Reader's improvement direction: Expected Hypothetical EPA (EHEPA) — completion × conditional EPA as continuous value target; adopt if ρ_EHEPA with team offensive EPA/play beats ρ_EHCP by ≥0.05 on 2024 holdout
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: QB decision quality metric — % of throws to the max-EHCP receiver (process grade, not outcome grade); e.g., Wilson 13.2% vs Winston 26.8% to the best option
- QB-BEHAVIOR: Decision timing — Kupp/Hilton examples show arrival-time EHCP far below peak-route EHCP, grading whether QBs throw on time
- SCHEME: Route-level evaluation — per-receiver EHCP over the play identifies which route concepts generate the most-catchable windows
- TRUST-SIGNAL: Min-EHCP targeting rate (Carr 27.5%, Wentz 27.5% of throws to the worst option) as a quantitative signal of poor QB-receiver trust/chemistry — INFERENCE: forcing to low-probability receivers may reflect broken trust dynamics
## Engine-actionable? (yes/no + one-line what)
Yes — build a GSE catch-probability model on modern Big Data Bowl tracking (LightGBM + conditional imputation, time-ordered validation) to create a public CPOE-equivalent plus a weekly QB Decision Grade (% of dropbacks to max-EHCP receiver) and receiver credit/blame risers/fallers for X content
