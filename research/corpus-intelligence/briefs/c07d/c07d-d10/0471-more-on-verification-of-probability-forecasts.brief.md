# research/2026-09-21/arxiv-deep/0471-more-on-verification-of-probability-forecasts.md
## What it is (1-2 sentences)
Deep-read ledger for Jean-Louis Foulley (2021), arXiv:2106.14345v2 — a pedagogical verification toolbox for football WDL probability forecasts applying Brier-score decompositions (Murphy calibration-refinement, likelihood-base, Yates), logistic calibration testing, and discrimination analysis on 4 seasons of UEFA Champions League matches. The intake verdict is **ADAPT**: adopt the full decomposition + logistic-calibration verification suite as GSE's standard GSE-vs-market diagnostic; the Poisson-ELO scoreline model itself duplicates the inventoried Dixon-Coles family and is dropped.

## Key metrics/methods (formulas where given, else "not specified")
- Murphy calibration-refinement decomposition: E[S(P,X)] = Var(X) − E_P[(E_X(X|P) − E_X(X))²] + E_P[(E_X(X|P) − P)²] (eq. 1) = UNC − RES + REL.
- Likelihood-base decomposition: E[S(P,X)] = Var(P) − Var_X[E_P(P|X)] + E_X[(E_P(P|X) − X)²] (eq. 2) with components REF = Var(P), DIS = Var_X[E_P(P|X)], CB2 = E_X[(E_P(P|X) − X)²].
- Yates decomposition: E[S(P,X)] = Var(X) − 2Cov(P,X) + Var_X[E_P(P|X)] + E_X[Var_P(P|X)] + [E(P) − E(X)]² (eq. 4), where VPB = Var_X[E(P|X)] ("VarPmin", beneficial = DIS), VPW = within-class scattered variance (detrimental), RIL = marginal bias² ("reliability-in-large").
- Brier skill score: BSS = 1 − BS/BS_ref = (RES − REL)/UNC (eq. 3).
- Empirical Murphy estimators: REL = S(p) − S(x̂), RES = S(x1_N) − S(x̂), UNC = S(x1_N) (eq. 7); discrete-case (eq. 6): REL = N⁻¹Σ_k n_k(x_k − p_k)², RES = N⁻¹Σ_k n_k(x_k − x̄)², UNC = x̄(1−x̄). Binning via fixed intervals, quantile intervals, isotonic regression via PAV (Siegert 2017 estimator).
- Logistic calibration (Cox 1958): logit[Pr(X_i=1)] = α + β logit(p_i); Wald/LR tests of α=0, β=1. Patterns: (α>0,β=1) concave under-forecasting; (α<0,β=1) convex over-forecasting; (α=0,β>1) sigmoid; (α=0,β<1) inverse-sigmoid.
- Ignorance score: L(P,X) = −X log(P) − (1−X) log(1−P), with 2N[L(p) − L(q̂_p)] asymptotically χ².
- Poisson-ELO model: log λ_{ij(t,1)} = η + h + β1∆r_{ij}(t′) + β2 r̄_{ij}(t′), log λ_{ij(t,2)} = η + β1∆r_{ji}(t′) + β2 r̄_{ij}(t′), where r_i = (ELO_i − 1800)/150. WDL probabilities aggregated from posterior-mean scoreline probabilities. Bayesian fit via Win/OpenBUGS, noninformative priors η0=0, σ_η²=10⁴; h0=0, σ_h²=10⁴; bk=0, σ_β²=10³.
- Induced goal correlation: Var(y_{m,k}) = μ_k{1 + μ_k[exp(β²γ) − 1]}; Cov(y_{m,1},y_{m,2}) = μ1μ2[exp(−β²γ) − 1]; ρ12 = μ1μ2[exp(−β²γ) − 1] / sqrt({1+μ1[exp(β²γ)−1]}{1+μ2[exp(β²γ)−1]}), always negative for β≠0.

## Data sources named
- UEFA Champions League group-stage matches, seasons 2017–2020, N=384 matches (377 unique probability profiles). No download URL stated.
- Team ELO ratings standardized r_i = (ELO_i − 1800)/150, taken "as close as possible before kickoff" (UNCERTAIN: potential subtle lookahead if ELO incorporates same-season matches — not audited).
- Bookmaker 3-way odds implied probabilities from OddsPortal (average of 10–12 well-known bookmakers), de-vigged as p_{m,j} = o_{m,j}⁻¹ / Σ_k o_{m,k}⁻¹.
- Posterior means (Table A-1, 2014–2019 sample): intercept 0.117 (SD 0.034, 95% CI [0.049,0.183]); home effect 0.329 (0.043, [0.246,0.413]); team difference 0.303 (0.016, [0.272,0.335]); team average 0.045 (0.032, [−0.017,0.106], ns, deviance p=0.157).

## Findings (numbers and facts, not vibes)
Murphy CR (Table 1, exact):
- HWIN (UNC=0.2458): POI BRS 0.1849, skill 24.8%, ISO-binned REL 0.0116 (4.7% of UNC), RES 0.0725 (29.5%); ODD BRS 0.1732, skill 29.5%, REL 0.0122 (4.9%), RES 0.0847 (34.5%).
- DRAW (UNC=0.1875): POI BRS 0.1849, skill 1.4%, REL 0.0099 (5.3%), RES 0.0125 (6.7%); ODD BRS 0.1820, skill 3.0%, REL 0.0048 (2.6%), RES 0.0092 (4.9%).
- AWIN (UNC=0.2158): POI BRS 0.1700, skill 21.2%, REL 0.0078 (3.6%), RES 0.0537 (24.9%); ODD BRS 0.1569, skill 27.3%, REL 0.0100 (4.6%), RES 0.0689 (31.9%).
- Bookmakers beat the Poisson-ELO model by ~4–6pp skill on home/away wins; draws are near-unforecastable (skill 1.4–3.0% for both).
- Brier-score calibration test: POI HWIN 1.035 [p=0.309], DRAW 3.995 [p=0.045], AWIN 0.001 [p=0.975]; ODD HWIN 2.099 [p=0.147], DRAW 2.102 [p=0.147], AWIN 0.582 [p=0.445].
- Logistic calibration (Table 2, POI): HWIN α̂=−0.259 (SE 0.119, Wald p=0.030), β̂=1.113 (SE 0.129, p=0.382), deviance 423.085 vs 417.489, ΔD=5.596, df=2, p=0.061 — over-forecasting of home wins; DRAW α̂=0.153 (p=0.742), β̂=0.932 (p=0.843); AWIN α̂=0.076 (p=0.610), β̂=1.053 (p=0.693) — away wins very well calibrated per the paper.
- Discrimination (Table 3): mean forecast % given X=0 vs X=1 — HWIN POI 37.88 vs 63.08 (diff 24.20), ODD 35.01 vs 62.73 (diff 27.71); DRAW POI 20.22 vs 22.34 (diff 2.02), ODD 20.97 vs 23.89 (diff 2.93); AWIN POI 24.30 vs 44.84 (diff 20.54), ODD 23.24 vs 48.62 (diff 25.38). Harrell C-statistic: HWIN POI 0.795, ODD 0.820; DRAW POI 0.622, ODD 0.624; AWIN POI 0.789, ODD 0.820 (all Wilcoxon/KS p<0.001 except draw KS p=0.0007).
- Yates (Table 4, POI HWIN): UNC 0.2458, −2COV −0.1190 (−48.4%), VPB 0.0144 (5.8%), VPW 0.0413 (16.8%), RIL 0.0024 (1.0%), REF 0.0556 (22.6%), CB2 0.1436 (58.4%), BRS 0.1849 (75.2%). ODD HWIN: −2COV −0.1362 (−55.4%), VPB 0.0189 (7.7%), VPW 0.0435 (17.7%), REF 0.0624 (25.4%), BRS 0.1732 (70.5%). DRAW (POI): −2COV −0.0076 (−4.0%), VPB 0.0001 (0.0%), VPW 0.0031 (1.7%), CB2 0.1817 (96.9%), BRS 0.1848 (98.6%).
- Table 5 summary (% of UNC): HWIN POI (skill 24.8, REL 4.7, RES 29.5, DIS 5.8, ΔVarP 16.8, 2Cov 48.4); ODD (29.5, 4.9, 34.5, 7.7, 17.7, 55.4); AWIN POI (21.2, 3.6, 24.9, 4.2, 15.6, 41.0); ODD (27.3, 4.6, 31.9, 6.4, 17.0, 50.7).
- Model goal correlation ρ12 = −0.19 vs observed −0.235, 95% CI (−0.394,−0.062).
- The paper cites Dimitriadis et al. (2021) as "promising" for binning but uses basic isotonic; a companion paper 0469 (Gneiting & Resin CORP/T-PAV estimator) is suggested as the binning upgrade for the GSE library.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — calibration/sizing lane (primary): The three-way Brier decomposition suite (Murphy REL/RES + Yates COV/VPB/VPW/RIL + LB REF/DIS/CB2) as a *comparative* diagnostic of GSE probabilities vs de-vigged market probabilities is the single most portable artifact in this 5-file wave for the calibration/sizing program. It tells GSE not just whether Brier score improved but *why* — separating calibration (REL), resolution (RES), and discrimination (DIS/C-statistic) — which feeds directly into sizing decisions (e.g., a high-REL GSE market should be down-weighted even if Brier looks fine). The repo's calibration stack (isotonic regression, ECE-by-slice, grouping loss, Clopper-Pearson) has no Brier decomposition or model-vs-odds discrimination comparison, so this is an extension, not a duplicate.
- OTHER — trust-target intake: The logistic-calibration α/β Wald/LR protocol is directly usable as a weekly calibration monitor: fit logit(cover) = α + β logit(GSE prob) per market and alert when Wald rejects α=0 (systematic over/under-forecasting) or β≠1 (over/under-confidence) — an automated QC gate for published probabilities before they reach content.
- TRUST-SIGNAL: The decomposition provides the "audit receipts" Garrett's 2026-10-01 mandate requires — reporting REL/RES/DIS components alongside Brier for GSE vs market on every backtest window is exactly the kind of test-count-backed claim he now demands. The joint calibration-check improvement (2D win × over reliability via copula-style joint binning) extends this to the joint-tail edges (e.g., favorite-wins-and-covers) that single-outcome verification misses.
- UNCERTAIN: The draw-as-unforecastable finding may be an artifact of group-stage UCL matches (dead-rubber asymmetric motivation) rather than a general property; NFL transfer lesson is that low-RES outcome categories (pushes, exact-score tail props) will show the same near-climatological signature, but that is an INFERENCE.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the three-decomposition + logistic-calibration + discrimination suite as the standard GSE-vs-market diagnostic on every backtest window (~2 days Python); gate adoption on it revealing an actionable deficiency (e.g., RES_GSE < RES_market − 0.03) on the 2025 test window.
