# docs/arxiv-program/research/2026-09-21/arxiv-deep/1085-multivariate-scoring-energy-copula.md
## What it is (1-2 sentences)
Ledger of arXiv:1910.07325v1 (Ziel, Berk), "Multivariate Forecasting Evaluation: On Sensitive and Strictly Proper Scoring Rules." Reviews standard multivariate scores (energy, variogram, Dawid-Sebastiani, log) and introduces marginal-copula scores; verdict ADAPT — fills GSE's missing multivariate-evaluation lane.
## Key metrics/methods (formulas where given, else "not specified")
- ES_β(F_X,y)=E‖X−y‖₂^β − ½E‖X−X̃‖₂^β (2), β∈(0,2), strictly proper.
- Marginal-copula score MCS=MS·CS (5), strictly proper when components are (Theorem 1); copula energy score CES (6) with lb_CES=1/4−1/(2√6), scaling H^{−1/2}; CVS (7)–(10); CDSS (11)–(12), unbounded, "useless for applications".
- Estimation: K-band energy estimators (14)–(16); copula observations via mid-point ecdf with rank adjustment u*=(2R−1)/(2N) (22); empirical copula (23); MS–CS plug-in correction (24).
- Evaluation: sample mean score (25), relative change (26) — explicitly misleading; Diebold-Mariano test (27) under weak stationarity.
## Data sources named
- Synthetic: bivariate normal correlation grids (ρ∈{−1,−0.8,…,1}, M=2^14, N=2^9); Scheuerer–Hamill likelihood-matched bias study (7 models, M=2^13, N=2^8, L=64); random peak study (H=3/9, Q=5, 8 models, M=2^14, N=2^5, L=64/128); ensemble-size sweep M∈{16,…,16,384}.
- Real: AirPassengers (144 monthly obs, 1949–1960), rolling windows T=70 in-sample, H=12, shift 4, N=19, 9 AR(12/13/p) models × standard/comonotone/countermonotone residuals, M=2^16=65,536 paths via residual bootstrap.
## Findings (numbers and facts, not vibes)
- [OTHER] Energy score separates the true model from all alternatives in every simulation, including correlation-only misspecifications — almost as powerful as the Gaussian-only DSS, beats variogram; the earlier "energy score is insensitive" claim was an artifact of using relative change instead of the DM test.
- [OTHER] Copula energy score (CES) was the single most sensitive detector of mis-predicted dependencies: airline study DM statistics 28–158 with only N=19 windows.
- [OTHER] DM statistics only stabilize at ~M=1,024 ensemble paths for simple settings; even M=16,384 may be insufficient for tricky 9-dimensional cases; literature's M=8/19/51 is far too small.
- [TRUST-SIGNAL] Estimation guidance: K-band energy estimators with small K; rank-adjusted copula observations (22) to fix misspecified-marginal leakage into the copula score — CES comparisons are only valid across variants with the same marginals or after rank adjustment (§4.5).
- [TRUST-SIGNAL] Limitations from the ledger: CDSS is unbounded below; CVS-based MCS is merely proper, not strictly proper (use CRPS-CES when strict propriety is required); relative change (26) is misleading — never report it; discrete outcomes (moneyline) degrade MCS to plain propriety; no wall-clock cost numbers.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Primary transfer: adopt energy score as GSE's multivariate engine-variant selection metric for joint forecasts — weekly slate margins (parlay/hedge pricing), player-stat vectors for DFS, spread+total joint distributions; DM-test protocol for variant A/B.
- [OTHER] CES (bivariate along the "forecasting path") as the diagnostic for whether GSE's slate-correlation model is right — pairwise CES per game-pair localizes where the dependency model breaks; also QB–WR stack correlations for DFS.
- [TRUST-SIGNAL] Hard engineering gate: audit GSE's ensemble sizes against M≥1,024; with M<1,024 the energy-score comparison is not trustworthy — upgrade ensemble size first.
- [OTHER] MS·CS combination is unoptimized ("look for better isotonic functions"); ledger proposes testing a scale-matched additive variant vs multiplicative MCS.
## Engine-actionable? (yes — adopt energy score + DM test for joint-forecast variant selection, CES for slate-correlation audits, enforce the M≥1,024 ensemble minimum)
