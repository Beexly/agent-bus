# arxiv-program/research/2026-09-21/arxiv-deep/0392-extending-the-dixon-and-coles-model.md
## What it is (1-2 sentences)
Generalizes the Dixon–Coles bivariate count model via the Sarmanov family (arXiv:2307.02139v1, Michels/Ötting/Karlis 2023), allowing probability shifting over arbitrary score sets, non-Poisson (negative-binomial) marginals, and much wider correlation ranges, fitted to four European women's football leagues; Motif verdict ADAPT as a candidate joint-distribution model for NFL exact scores/totals.
## Key metrics/methods (formulas where given, else "not specified")
- Dixon–Coles: P(X_1,X_2) = τ_{λ_1,λ_2}(x_1,x_2)·Poisson(λ_1)·Poisson(λ_2), τ shifts probability only among (0,0),(1,0),(0,1),(1,1)
- Sarmanov (Eq. 2): P(X_1=x_1,X_2=x_2) = P_1(x_1)P_2(x_2)[1 + ω q_1(x_1)q_2(x_2)]; zero-mean constraint Σ q_i P_i = 0; ρ = ωu_1u_2/(σ_1σ_2)
- Key theorem: Dixon–Coles is a Sarmanov member (q_dc(x_i) = −λ_i if x_i=0, 1 if x_i=1, 0 if x_i≥2)
- New models: q̂ (quadratic-exponent on 4 pairs), q̃ (shifting over x_i∈{0,1,2}, 9 pairs), q^(s) (general shifting over (s+1)² pairs), NB marginals with q_nb/q̂_nb/q̃_nb, full-support Laplace-based q_Sar, novel ANS model q_ANS(x) = [φ_i/(φ_i+μ_i)]^{x_i} − c_i
- Fitting: numerical MLE in R via nlm(); team models log(θ_1j) = home + att_{h_j} + def_{g_j} with sum-to-zero defence constraint; comparison by AIC and Σ|model − empirical| over scores 0-0…11-11 ×100
## Data sources named
Four European women's leagues 2011/12–2018/19 and 2021/22 (COVID seasons excluded): English FA WSL, German Frauen-Bundesliga, French Division 1 Féminine, Spanish Primera Iberdrola — match scorelines only, no covariates in baseline
## Findings (numbers and facts, not vibes)
- Home–away goal correlations: England −0.269, Germany −0.352, France −0.395, Spain −0.263; classical Dixon–Coles correlation floor is only −0.08 (at λ=1.3/1.2), so DC cannot represent the observed negative dependence
- NB marginals beat Poisson on AIC for every league (e.g., Spain: double NB 14,953.09 vs double Poisson 15,432.49)
- ANS was AIC-preferred among 11 formulations for all four leagues in baseline fits (England 4332.66, Germany 8164.33, France 8343.46, Spain 14787.05); with team dummies, ANS won Germany (7321.30), France (7102.81), Spain (13515.88); England preferred DC-NB q̃_nb (4015.71 vs ANS 4018.12)
- Score-fit check (×100): ANS best for Germany 13.19 and France 13.28; Dixon–Coles Poisson best for Spain 9.50 (ANS 9.61)
- Predictive demo: German Frauen-Bundesliga 2021/22, fit on first 15 matchdays, 1,000 Monte Carlo completions of last 7 matchdays → 95% prediction intervals contained all teams' observed final points
- Women's football empirics: 2-0 and 3-0 overrepresented, 0-0s underrepresented (vs overrepresented in men's); overdispersion in Germany/France/Spain
- Limitations noted by reader: only one league-season out-of-sample check (thin evidence); χ² independence test fails to reject for England (p=0.067); no time weighting; NFL transfer would need re-derivation since NFL points aren't low-count Poisson (apply to TD counts or binned totals)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Score-distribution / totals modeling — bivariate count machinery (Skellam/Poisson family extension) for exact scores and totals
- OTHER: Home–away score correlation structure (negative dependence in low-scoring games)
## Engine-actionable? (yes/no + one-line what)
Yes — build the Sarmanov/ANS model as a challenger for NFL (home TDs, away TDs) joint distribution with NB marginals and team attack/defence means, tested head-to-head against GSE's Skellam/independent baselines on out-of-sample 2023–2025 log-likelihood (acceptance: paired p<0.05 win, no totals-calibration degradation)
