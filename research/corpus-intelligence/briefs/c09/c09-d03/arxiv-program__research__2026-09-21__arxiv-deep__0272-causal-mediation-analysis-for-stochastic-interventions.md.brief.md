# arxiv-program/research/2026-09-21/arxiv-deep/0272-causal-mediation-analysis-for-stochastic-interventions.md
## What it is (1-2 sentences)
Deep read of Díaz & Hejazi (arXiv:1901.02776, v2 2026): causal mediation analysis for stochastic interventions — decomposing a population intervention effect (PIE) into direct and indirect effects using efficient influence-function (EIF) estimation with ML nuisances and cross-fitting, implemented in the open-source `medshift` R package. Verdict in file: ADAPT — fills GSE's empty mediation-analysis lane for one well-defined causal contrast at a time (e.g., weather → totals via play-calling vs. direct path).
## Key metrics/methods (formulas where given, else "not specified")
- Decomposition: ψ(δ) = E{Y(A_δ,Z(A_δ)) − Y(A_δ,Z)}⏞PIIE + E{Y(A_δ,Z) − Y(A,Z)}⏞PIDE (eq. 5).
- Identification (Theorem 1): θ(δ) = ∫ m(a,z,w) g_δ(a|w) p(z,w) dν(a,z,w).
- Exponential tilting: g_δ(a|w) = exp(δa)g(a|w)/∫exp(δa)g(a|w)dκ(a); binary IPS: g_{δ'}(1|w) = δ'g(1|w)/(δ'g(1|w)+1−g(1|w)).
- Estimators: substitution (plug-in eq. 14); re-weighted IPW E[ĝ_δ(A|W)/ê(A|Z,W)·Y] (eq. 15) with reparameterization e = gq/r avoiding multivariate mediator-density estimation; efficient one-step estimator (cross-fitted, eq. 16).
- EIF: D_{η,δ} = D^Y + D^A + D^{Z,W} − θ(δ); D^Y(o) = g_δ(a|w)/e(a|z,w)·{y − m(a,z,w)}; D^{Z,W}(o) = ∫ m(a,z,w)g_δ(a|w)dκ(a).
- Asymptotic normality √n{θ̂−θ} ⇝ N(0, σ²(δ)) under n^{−1/4}-consistent nuisances; Wald CI θ̂ ± z σ̂/√n; uniform bands over δ for testing H: sup_δ β(δ) = 0.
- Multiple robustness (Lemma 3, modified policies): consistent if (g₁=g and (e₁=e or m₁=m)) or (m₁=m and φ₁=φ); exponential tilt NOT robust to g misspecification.
- Assumptions: A1 piecewise-smooth invertible policy; A2 common support; A3 conditional exchangeability E{Y(a,z)|A,W,Z} = E{Y(a,z)|W,Z} (falsifiable by experiment, unlike natural direct effects); no exposure-affected mediator-outcome confounders (Avin et al. 2005 hardness).
- Validation metrics: MSE scaled by n across 7 sample sizes × 1000 Monte Carlo replicates; bias/SE decomposition.
## Data sources named
- Simulation: synthetic DGP (W₁~Bern(0.50), W₂~Bern(0.65), W₃~Bern(0.35); propensity (ΣW)/4+0.1; 3 binary mediators; n = 400–6400; IPS δ=0.5; true direct effect ≈ 0.137).
- Application: `mma` R package dataset (LSU Health Sciences Center, Grenada 2014 children survey): 691 complete cases, 15 variables; exposure = sports-team participation, outcome = BMI, mediators = snacking/exercise/overweight status.
- Code: `medshift` R package (GitHub, open source); total-effect via `npcausal`; nuisances via `sl3` (xgboost, ranger, glmnet, hal9001).
## Findings (numbers and facts, not vibes)
- Simulation n-scaled MSE at δ=0.5 (n=400→6400): substitution 0.083→0.075; IPW 0.105→0.109; efficient 0.092→0.065; efficient (E mis.) 0.060→0.058; efficient (M mis.) 0.165→0.097; efficient (G mis.) 0.436→4.519 (grows with n — asymptotic bias, G-misspecification fatal).
- Application (IPS δ=2, 95% CI lower/est/upper): direct effect −0.458/0.011/0.479; indirect −0.672/−0.157/0.357 — null; "little total effect of doubling the odds of participation in a sports team on BMI."
- The e = gq/r reparameterization avoids estimating the multivariate mediator density r(z|w), trading it for density-ratio estimation.
- GSE overlap noted as NEW capability: no mediation analysis in the 468-file corpus; GSE luck-layer work decomposes variance, not causal pathways.
- File's GSE spec: nflverse pbp 2015–2025 + stadium weather; decompose wind speed's effect on total points into direct (physics) vs indirect mediated by play-calling (deep-pass rate, pace); intervention d(a,w) = max(a−δ, 0) at δ = 5, 10 mph; effort 3–4 days.
- Acceptance gate: adopt if PIIE at δ=10 mph significant at 5% with expected sign, sum matches naive total effect sign, and holdout (2023–2024) keeps sign; reject if PIIE null while naive total effect significant, or A3 indefensible after game-script controls.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: mediation decomposition for weather → totals (direct physics path vs indirect play-calling path) — wind-reduction counterfactuals with deep-pass-rate/pace as mediators.
- SCHEME: wind → play-calling → points causal chain; the file's chained-improvement experiment (two stacked decompositions: wind→play-calling, play-calling→time-of-possession→points) would tell GSE WHERE in the causal chain the weather effect concentrates — pace projections vs raw wind speed as the totals-adjustment key.
- OTHER: general template for any "how much of effect X flows through mediator Y" question (e.g., INFERENCE: crowd noise → false-start rate → scoring; injuries → play-calling → EPA), using the `medshift` package rather than bespoke estimators.
## Engine-actionable? (yes/no + one-line what)
Yes — run the 3–4 day medshift wind→play-calling→totals decomposition on nflverse pbp + stadium weather and feed direct/indirect split into the totals-model weather adjustment, subject to the file's acceptance gate (PIIE significance, holdout sign stability, A3 defensibility).
