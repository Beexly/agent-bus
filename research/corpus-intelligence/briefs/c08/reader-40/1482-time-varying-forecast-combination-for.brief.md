# arxiv-deep/1482-time-varying-forecast-combination-for.md
## What it is (1-2 sentences)
Deep read of Bin Chen & Kenwin Maung (2020), arXiv:2010.10435: nonparametric time-varying forecast-combination weights via local-linear estimation with a two-stage group-SCAD pruning procedure for high-dimensional candidate sets. Verdict in file: ADAPT — time-varying combination of GSE's component forecasts (engine, market, Elo, situational models) with per-week weight paths.
## Key metrics/methods (formulas where given, else "not specified")
- Model: y_{t+1} = ω₀(t/T) + f_t'ω₁(t/T) + ε_{t+1}, weights smooth in rescaled time.
- Low-dim: leave-one-out local linear estimator with Epanechnikov kernel + data reflection (Hall–Wehrly/Chen–Hong) at the forecast boundary — reflection cuts asymptotic variance by >70%.
- High-dim: two-stage — (1) Lasso-penalized local linear for preliminary weights (estimation-consistent); (2) group SCAD (Fan–Li, a=3.7, local-linear approximation; penalties weighted by first-stage norms B̃_j and smoothness D̃_j), solved by group coordinate descent with Cholesky orthogonalization.
- Theory: Prop 1/2 asymptotic normality (√Th rate); optimal bandwidth h^opt (eq. 9); IMSCFE rate O(T^{−4/5}); Thm 1 CV-bandwidth consistency; Thm 2 selection consistency P(Ŝ = S₀) → 1; Thm 3 oracle property. Tuning: bandwidth by leave-one-out CV; λ₁,λ₂ by K-fold CV; h = C[log(p_T+1)/T]^{1/5} rule of thumb; λ₃,λ₄ by modified BIC = log(SSR) + C_T(l log⌊Th⌋/⌊Th⌋), C_T = log p_T.
## Data sources named
Simulations: low-dim (2 forecasts, T ∈ {200,300,500}, 50 OOS points, 500 reps); high-dim (J ∈ {10,50,100} redundant forecasts, T ∈ {50,100,150}, 10 OOS points, 200 reps). Empirical 1: US inflation 1981Q3–2018Q2 (FRED data; 4 component forecasts; 3 CPI measures). Empirical 2: equity premium 1947Q2–2018Q3 (Goyal-Welch predictors; OOS 2013Q4–2018Q3).
## Findings (numbers and facts, not vibes)
- Low-dim sim (mean ASCFE, T=200/300/500): NPRf 1.06/1.06/1.03 — lowest mean and smallest variance at every T; Bates-Granger 1.19/1.22/1.20; equal weights 1.29/1.34/1.34 (worst).
- High-dim sim: ASCFE ≈ low-dim levels (J=100: 1.62/1.34/1.24 for T=50/100/150); exact-selection share 0.70→0.81 at J=100; relevant-forecast inclusion 0.96→1.00.
- Inflation: PUNEW NPRf 0.182 (best; next 0.186; EQ 0.485; SPF 0.467); PUXHS NPRf 0.451 (best); reverses Ang et al. (2007) — non-survey forecasts add value beyond SPF.
- Equity premium: plain NPRf 3.183 loses to EQ 2.888; **gSCAD 2.650 best overall** (DM vs historical avg p=0.065); gSCAD always selects E/P, SVAR, NTIS, TBL, I/K.
- Honest failure: plain local-linear combination fails when p is large vs T (equity-premium case) — exactly why the gSCAD pruning stage exists.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER:** time-varying ensemble combination — nothing in the corpus covers smooth time-varying weights + group-SCAD pruning + CV-optimal bandwidth (static stacking, equal weights, Bayesian model averaging already inventoried).
- **TRUST-SIGNAL:** boundary-reflection estimator maps exactly to "combine models for this week's games using only past weeks" — solves the now-casting boundary problem.
- **OTHER:** weight-path tracking verifies regime changes (early- vs late-season); weights collapsing to near-constant is a recorded negative-result fallback to static combination.
## Engine-actionable? (yes/no + one-line what)
**Yes** — implement gse_tvcombine.py: local-linear time-varying weights with Epanechnikov kernel + reflection on engine/market/Elo/situational component forecasts; two-stage group-SCAD pruning of dead components weekly; rolling OOS evaluation vs equal weights, static OLS, best component with DM tests; ADAPT bar is DM p<0.10 on ≥2-season backtest.
