# arxiv-program/research/2026-09-21/arxiv-deep/1792-an-analysis-of-an-alternative-pythagorean.md
## What it is (1-2 sentences)
Deep-dive ledger on Ehrlich, Boudreaux, Boudreau & Sanders (2021), arXiv:2112.14846: horse-race of Bill James's Pythagorean (Tullock ratio-form CSF) against a novel difference-form CSF (logistic in run differential) for expected win percentage, on 1,000 simulated 2014 MLB seasons (2.43M games); the difference form wins the AIC specification test. Verdict ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- (1) Original Pythagorean: EWP_{i,j} = rs_{i,j}²/(rs_{i,j}² + ra_{i,j}²).
- (2) General Tullock: EWP_{i,j} = rs_{i,j}^α/(rs_{i,j}^α + ra_{i,j}^α).
- (3) Difference-form CSF: EWP_{i,j} = 1/(1 + e^{α(ra_{i,j} − rs_{i,j})}).
- Estimation: LHS is a win *proportion* (non-binary), so both models log-transformed to parameter-linear forms and estimated by OLS with team fixed effects; model selection by AIC (Stata `estat ic`).
## Data sources named
Simulated: 1,000 iterations of the 2014 MLB regular season via the open-source Strategic Baseball Simulator (SBS; event-level, roster-statistics-driven), driven by an AutoHotKey script + a Java app parsing season files to CSV. Replication data at doi:10.7910/DVN/X4ANKJ (Harvard Dataverse). Cited Dayaratna & Miller (2012) empirical MLB exponent estimates as validity check; cited Caro & Machtmes (2013) Pythagorean test on Division I college football vs the Morey model.
## Findings (numbers and facts, not vibes)
- Tullock form: estimated exponent 1.722 (SE 0.005); R² = 0.826; AIC = −49,671.95; RMSE = 0.106. [OTHER]
- Difference form: estimated parameter 0.003 (SE 0.000006); R² = 0.829; AIC = −50,128.41; RMSE = 0.105. [OTHER]
- AIC ratio P_T/P_D = e^{−228.23} ≈ 7.60×10^{−100} — "exceedingly unlikely" the Tullock form is the best fit. [OTHER]
- 1,000 simulated team-seasons (30 teams × 1,000 iterations); 2.43M simulated games (>10× all real MLB games ever played, per authors); p < 0.001. [OTHER]
- Practical gap is tiny (ΔR² = 0.003, ΔRMSE = 0.001) — the astronomical AIC ratio is a large-N artifact (INFERENCE: the ledger's own note). Statistical significance here is not practical significance. [OTHER]
- Validity anchor: fitted Tullock exponent 1.72 matches prior empirical MLB estimates, offered as evidence the simulator reproduces the real DGP. [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Logistic-in-differential win-expectancy form beats ratio-form on specification test — live modeling decision for GSE's team-strength → win-probability mapping [OTHER]
- Improvement experiment: game-level EWP = 1/(1+e^{−(α·PD + β·HFA + γ·rest_edge)}) estimated directly on 2000–2025 game outcomes — difference form's real advantage may appear at game level, where ratio forms blow up on shutouts [OTHER]
- Logistic form better-behaved at extreme differentials — relevant as an early-season prior when samples are 2–3 games [OTHER]
- Limitations: MLB-only (162-game season; NFL's 17-game season far noisier — needs a 4-game rolling-window stress test); all inference is about SBS's DGP, not real baseball [OTHER]
## Engine-actionable? (yes/no + one-line what)
Yes — re-fit both CSF forms on NFL team-seasons 2000–2025 via fractional logit (replacing the paper's OLS hack) and adopt the difference form as GSE's expected-win% feature iff it beats Tullock on out-of-sample RMSE by ≥0.005 on 2020–2024 plus wins the 4-game rolling-window stress test (lower RMSE in ≥60% of windows).
