# arxiv-program/research/2026-09-21/arxiv-deep/1336-forecast-trimming-rad-accuracy-diversity.md

## What it is (1-2 sentences)
Deep-research ledger (full 31-pp v2 read) of arXiv:2208.00139v2 (Wang, Kang, Li, 2024): "Another look at forecast trimming for combinations" — proposes RAD, the first backward-selection algorithm addressing robustness, accuracy, and diversity simultaneously via the ADT (Accuracy-Diversity Trade-off) criterion, benchmarked against five algorithms (None, R, A, D, AutoRAD) on 103,826 M/M3/M4 series. Verdict ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- Diversity MSEC (Thomson et al. 2019): `MSEC_{i,j} = (1/H)Σ_{h=1}^{H}(f_{i,h} − f_{j,h})²`; averaged over all pairs for pool-level diversity. Justified because MSEC is a decomposed component of combined forecast's MSE and correlation coefficients cannot be averaged across pairs (Achen 1977).
- MSEComb decomposition (eq. 1): `MSE_comb = Σ_{i=1}^{M} w_i MSE_i − Σ_{i=1}^{M−1}Σ_{j=2,j>i}^{M} w_i w_j MSEC_{i,j}`.
- ADT criterion (eq. 2): `ADT = AvgMSE − κ·AvgMSEC = (1/M)Σ_{i=1}^{M}MSE_i − κ·(2/M²)Σ_{i=1}^{M−1}Σ_{j>i}MSEC_{i,j}`, κ∈[0,1]; κ=1 → ADT = MSE of the equally-combined forecast; κ=0 → accuracy only (κ>1 makes the criterion unbounded below).
- RelDiv diagnostic (eq. 3): `RelDiv = AvgMSEC/AvgMSE`; sample quantiles Q1=0.23, Q3=0.53 define low/moderate/high diversity bands.
- RAD algorithm (backward selection): Step 1: S = full pool. Step 2: Tukey's-fences robustness screen — drop forecasters whose variance of absolute errors on validation set exceeds Q3+1.5(Q3−Q1). Step 3: ADT₀ with κ=1 on remaining S. Steps 4–6: for each i compute ADT(S\{i}); drop forecaster(s) achieving min_i ADT(S\{i}); recompute ADT. Step 7: repeat until percentage ADT decrease < δ (recommended δ=0.05) or |S|=2.
- Benchmarks (Table 1): None (no trim); R (only Step 2); A (Steps 3–7 with AvgMSE — accuracy only); D (Steps 3–7 with −AvgMSEC — diversity only); AutoRAD (RAD with κ from {0,0.1,…,1} minimizing validation-set simple-average MSE).
- Evaluation metrics (verbatim): MASE = [H^{−1}Σ_{t=T+1}^{T+H}|y_t−f_t|] / [(T−s)^{−1}Σ_{t=s+1}^{T}|y_t−y_{t−s}|]; sMAPE = (200/H)Σ|y_t−f_t|/(|y_t|+|f_t|); Bias = [H^{−1}Σ(y_t−f_t)] / [T^{−1}Σy_t]; MSIS = [H^{−1}Σ((u_t−l_t) + (2/α)(l_t−y_t)𝟙{y_t<l_t} + (2/α)(y_t−u_t)𝟙{y_t>u_t})] / [(T−s)^{−1}Σ|y_t−y_{t−s}|] at α=0.05, coverage/upper-coverage targets 0.95/0.975 and spread.
- δ sensitivity: δ∈[0.04,0.06] works well for seasonal series; larger δ better for small pools (yearly).
- RelDiv usage rule: RelDiv<0.2 → A preferred (diversity unnecessary); 0.2–0.5 → A≈RAD≈AutoRAD; >0.5 → RAD/AutoRAD preferred, RAD significantly better than A at high RelDiv (MCB, Fig. 5).
- Combined with simple (equal-weight) averaging only, to keep algorithm comparisons fair given the forecast-combination puzzle.

## Data sources named
- 103,826 time series from M (Makridakis et al. 1982), M3 (Makridakis & Hibon 2000), M4 (Makridakis et al. 2020), frequencies yearly/quarterly/monthly/weekly/daily/hourly. In-sample split training+validation (validation length = test horizon H); series with <2 training observations or constant training sets excluded. Horizons H = 6/8/18/13/14/48; seasonal cycle s = 1/4/12/52/7/168.
- Pool (a) ETS family: 6 models non-seasonal, 15 seasonal (no multiplicative trend or additive-error/multiplicative-seasonality models). Pool (b) cross-family 9 methods: NAIVE, SNAIVE, RW-DRIFT, THETA, ARIMA (auto.arima), ETS, TBATS, STLM-AR, NNET-AR (1,000-simulation intervals).
- R packages Mcomp 2.8, M4comp2018 0.2.0 (public); models via forecast 8.16 (ets), smooth 3.1.5 (es). No paper code stated — algorithms simple enough to reimplement.

## Findings (numbers and facts, not vibes)
- Overall (ETS pools): RAD's MASE, sMAPE, MSIS are 3.31%, 1.12%, and 41.44% lower than None (no trimming); RAD/AutoRAD top two on mean errors for point forecasts and intervals; MCB (Koning et al. 2005): RAD and AutoRAD significantly outperform None, R, A, D overall and in most frequencies.
- R (robustness only): improves point accuracy vs None but WORSENS interval accuracy — cautionary for GSE's interval lane.
- D (diversity only): consistently worst (ranked last in most frequencies, only exception daily) — unilateral diversity pursuit retains very poor forecasters.
- Subset sizes (Fig. 3): RAD/AutoRAD retain relatively few forecasters → improved computational efficiency.
- RelDiv-conditional (Table 3): RAD or AutoRAD beats A in 56.2%/53.8% of differing-subset series at moderate/high RelDiv.
- Cross-family pools: RAD/AutoRAD still best on mean errors; None's overall performance is worse under cross-family pool than ETS pools, but the gap shrinks or disappears under RAD/AutoRAD — joint approach pays when the pool is genuinely diverse.
- Standing reminder: "the simple average of the selected optimal subset poses a tough benchmark to beat."
- RelDiv sample quantiles: Q1=0.23, Q3=0.53.
- Limitations: trimming uses validation-set forecasts only (clean), but intervals of NNET-AR via 1,000 simulations are heavy; all pools univariate statistical methods — no multivariate, no ML-heavy pools (one NNET-AR), no judgmental forecasts despite criterion being generic; evaluation equal-weight only (optimal subsets selected with simple-average lens, weighted-combination follow-ups inherit that bias); series-specific trimming, no cross-learning; δ=0.05 and κ-grid are heuristics; AutoRAD's κ selection costs a full extra search loop.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (ensemble program): this is the pool-selection machinery GSE's ensemble lane was missing — 1169 (OGD weights) and 1170 (per-quantile weights) both assume a fixed pool, and RAD gives a concrete, cheap, validated algorithm to benchmark against or replace 1171 (evidence-theory pool selection via performance+specialization+diversity), which overlaps directly. Standing slogan adopted: "many could be better than all" (Wang et al. 2022a).
- OTHER (calibration/interval program): the R-algorithm finding — a robustness-only Tukey screen improves point accuracy but WORSENS interval accuracy — is a hard constraint on any GSE trimming step: validate trimming on BOTH point and interval scores (MSIS-style), not point scores alone. This guards the quantile-interval lane.
- OTHER (model-selection + 1306/1172 synthesis): 1172's diagnosis (weight-estimation error from two-step estimation) is exactly what trimming mitigates at the pool level; RAD trims the pool before 1169/1170 estimate weights, and the ledger's §14 improvement experiment proposes a scoring-rule ADT port (ADT_log = (1/M)ΣLogLoss_i − κ·AvgPairwiseDivergence with KL/CRPS divergence) for GSE's distributional targets, since ADT/MSEC are MSE/equal-weight-specific while GSE's targets are log loss, Brier, quantile loss. 1170's per-quantile diversity may partially substitute for explicit trimming.
- OTHER: the RelDiv dashboard rule (<0.2 → accuracy-only screen; >0.5 → full RAD) is immediately deployable as a weekly diagnostic on GSE's model pool with a ~2-hour implementation — it also tells GSE when diversity handling is unnecessary, preventing over-engineering.
- UNCERTAIN: the paper's results are on univariate statistical pools with equal-weight combination; the scoring-rule ADT analog (KL/CRPS divergence decomposition analogous to eq. 1, "per the logarithmic-pool literature") is a derivation the ledger proposes but does not validate — its existence in the logarithmic-pool literature is UNCERTAIN until sourced.

## Engine-actionable? (yes/no + one-line what)
Yes — implement RAD trimming (Tukey's-fences screen → backward ADT elimination κ=1, δ=0.05) plus the RelDiv weekly diagnostic on GSE's model pool with a trailing-4-week validation window, validating on both point and interval scores.

## Referenced files/papers/datasets
Papers: arXiv:2208.00139v2; Thomson et al. 2019 (MSEC); Kang et al. 2022; Achen 1977; Koning et al. 2005 (MCB); Wang et al. 2022a ("many could be better than all"); Makridakis et al. 1982/2000/2020 (M/M3/M4). R packages: Mcomp 2.8, M4comp2018 0.2.0, forecast 8.16, smooth 3.1.5. GSE-internal: ledgers/papers 1169 (OGD weights), 1170 (per-quantile weights), 1171 (evidence-theory pool selection), 1172 (weight-estimation error diagnosis).
