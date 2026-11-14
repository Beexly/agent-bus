---
source: "openalex_W4399573036.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 99
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5178
---

<NATIVE_REASONING>
The user has provided a source PDF (an R package manual for 'MPV' containing datasets from Montgomery, Peck and Vining's regression textbook) and wants me to act as the GSE + GSI Frontier Reasoning Foundry. I need to produce a deep reasoning response with strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

The source document is the MPV package manual (pages 1-99). It contains documentation for datasets and functions from "Introduction to Linear Regression Analysis" by Montgomery, Peck, and Vining. The user refers to "DRIVE SOURCE" but hasn't actually asked a specific question about a particular dataset or analysis task. They've just provided the source and the system prompt instructions.

Wait, looking carefully: the user message is just the DRIVE SOURCE and the source text. There's no explicit question. However, as the GSE + GSI Frontier Reasoning Foundry, I should treat this as a request to perform a frontier reasoning analysis on the provided source material, following the exact XML structure and strict invariants.

I need to:
- Not mention betting lines (spreads, totals, moneylines, odds). Even though table.b1 contains NFL data, I must NOT discuss betting.
- Not invent toy equations. Use real formal LaTeX equations (linear regression, local polynomial regression, Poisson GLM, PRESS statistic, etc.) that are actually present or implied by the source.
- Cite [PAGE N] markers and verbatim quotes.
- Write >= 1,000 words total across the 6 XML sections.
- THINK_TRACE >= 400 words.

Let me plan the content:

**THINK_TRACE (>=400 words)**: Deep multi-hop derivation & gray-zone audit. I should analyze the MPV package as a research corpus: it's a companion to Montgomery, Peck & Vining's regression textbook. It contains classical linear regression datasets (cement, table.b1-n), generalized linear models (lesions, p13.x binomial/Poisson data), local polynomial regression (BCCIPlot, BCLPBias, BiasVarPlot, LPBias), PRESS statistic, graphical ANOVA/regression (GANOVA, GFplot, GRegplot, Qyplot, tplot, Uplot). I need to trace multi-hop: e.g., table.b1 (NFL 1976) -> GFplot/GRegplot/tplot examples on pages 17-18, 18-19, 92 -> pathoeg (pathological example for stepwise AIC) on page 61 -> PRESS statistic on page 63 -> local polynomial bias on pages 8-10, 22-23. Gray zones: The document is a package manual, not primary research; it describes data but doesn't contain the raw values for most datasets in the provided pages (only descriptions). The examples use `attach()` which is discouraged in modern R. There's a typo: airplane.sim02 usage says `data("airplane.sim01")` (page 6), rectangles warning about errors in previous MPV versions (page 67), gasdata typo "wasll" (page 16), oldwash typo "liqiud" (page 24). These are gray-zone audit points. Also, no betting content despite NFL dataset table.b1 — I must explicitly note the veto.

**SOURCE_OPERATORS_AND_EQUATIONS**: Formal LaTeX equations with units, page citations, breakdown.
- Multiple linear regression: y = Xβ + ε, ε ~ N(0, σ²I). Units depend on dataset (e.g., cement y in some strength unit, x1-x4 in proportions; table.b1 y games won [dimensionless count], x1 rushing yards [yards], etc.)
- Local polynomial regression: estimate ŷ(x₀) = e₁ᵀ(X₀ᵀW₀X₀)⁻¹X₀ᵀW₀y, bandwidth h [units of x], bias correction with k2 degree. Cite pages 8-10, 22-23.
- PRESS statistic: PRESS = Σᵢ (eᵢ / (1 - hᵢᵢ))², where hᵢᵢ are leverages (hat matrix diagonal). Cite page 63.
- GLM for lesions: ACF.Total ~ INJ * T, family=poisson or quasipoisson. Link g(μ) = log(μ). Cite page 22.
- F-test: F = (SSR_R - SSR_F)/(df_R - df_F) / (SSE_F/(n-p)). Cite pages 17-18 (GFplot), 15 (GANOVA).
- Breakdown regimes: p > n singularity (XᵀX singular), bandwidth h → 0 (variance explosion) vs h → ∞ (bias explosion, regresses to mean), quasipoisson dispersion φ = 1 breakdown (Poisson assumption), collinearity in cement/table.b12 etc.

**RETROCAUSAL_GENEALOGY**: Historical lineage. Montgomery (1st ed 1982? Actually 3rd ed 2001, 6th ed 2021 cited), Peck, Vining. Devore & Farnum (2005). Simonoff (1996) smoothing. Braun & Woolford (2013) fire spread. McLellan, Medline & Bird (1991) carcinogenesis. Hazin & Eichholz (1992) radon. Multi-week traps: The manual spans editions 2001/2021, R package dates 2025-2026. Traps: citing 3rd edition (2001) while package published 2026; airplane.sim01/sim02/sim11 replicates with noise variance 0.96 m²; local polynomial bandwidth selection traps (dpill in rectangles page 67); gasdata insulation interventions as structural breaks over 2006-2011 (70 months).

**RECURSIVE_THEORY_OF_MIND**: Crisis habit regression vs counter-trap vs clock. This is more abstract/metacognitive. I can interpret: The analyst's crisis habit is to run stepwise AIC (pathoeg trap, page 61) or to attach() dataframes and ignore masking. Counter-trap: use PRESS, cross-validation, graphical diagnostics (GFplot/tplot) before inference. Clock: time-series datasets (gasdata monthly 2006-2011, Wpgtemp daily 1960-1980, windWin80 1980, wxNWO 2012-2021) require temporal ordering; ignoring the clock (index) violates independence. Recursive ToM: model the modeler — if they regress crisis response on recent wins only, they overfit; counter-trap is holdout/PRESS.

**CROSS_LAYER_VETO_ADJUDICATION**: Physical/biomechanical/weather veto proof. Since no betting, I can discuss physical constraints: gasdata natural gas consumption [m³] vs degree days [°C·day] and temperature [°C]; physical veto: gas usage cannot be negative, cubic metres must be ≥0, insulation indicators are binary {0,1}. Weather data Wpgtemp [°C] bounded by physical climate limits; wind speeds [m/s or km/h?] non-negative. Cement: proportions x1-x4 must sum constraints, non-negative. table.b1 yards non-negative. These are physical vetoes. No betting lines mentioned.

**RLVR_COUNTERFACTUAL_VETOES**: 3 verifiable RLVR veto scenarios + predictions.
1. Veto: If an analyst applies ordinary least squares to `lesions` ACF counts without Poisson/quasipoisson family (page 22), variance-mean relationship violated (equidispersion). Prediction: residual deviance >> df, overdispersion φ > 1, invalid Wald CIs.
2. Veto: If local polynomial bandwidth h is chosen below measurement-error scale in `rectangles` (page 67, diagonal d vs sqrt(h²+w²)), the smoother chases Pythagorean measurement error rather than signal y=x+error. Prediction: integrated squared bias ↓ but variance ↑↓, MSE U-shape violated at small h.
3. Veto: If stepwise AIC on `pathoeg` (page 61) selects x1-x7,x9 over true x8-only model. Prediction: non-parsimonious model, out-of-sample PRESS inflation, AIC selected complement of true model (as noted in GFplot example page 18).

Total word count: Need >= 1000 words across sections. THINK_TRACE alone >= 400. I'll aim for ~1500-1800 words total.

Important: I must include verbatim quotes from the source with [PAGE N] citations. Let me collect some quotes:

- Page 1: "Package ‘MPV’ ... Title Data Sets from Montgomery, Peck and Vining ... Introduction to Linear Regression Analysis (3rd ed), by Montgomery, Peck and Vining."
- Page 5: airconditioner Usage "electricity usage in KWh" ... Source Devore & Farnum (2005).
- Page 6: airplane.sim01 "noise variance was assumed to be 0.96."
- Page 15: earthquake "magnitude greater than 5.8 between 1964 and 1985." 2178 observations.
- Page 16: gasdata "Insulation was added to the roof on one occasions, the walls were insulated on a second occasion, and the mid-efficiency furnace was replaced with a high-efficiency furnace on a third occasion." Typo "wasll insulation" in format.
- Page 17: GFplot example 3 "Evidence of Regression in NFL Data Set" using table.b1.
- Page 18: "An example where stepwise AIC selects the complement of the set of variables that are actually in the true model" with pathoeg.
- Page 21: lesions "Total number of ACF lesions in a section of a rat’s colon" ... glm family=poisson/quasipoisson.
- Page 22: LPBias args.
- Page 61: pathoeg "The true model used to simulate the data has only one real predictor (x8)."
- Page 63: PRESS "Computation of Allen’s PRESS statistic for an lm object."
- Page 67: rectangles "Only the data in MPV versions 1.62 and later can be trusted; there were errors in the third column in previous versions."
- Page 71: table.b1 "National Football League 1976 Team Performance" ... y Games won in a 14 game season.
- Page 95: Wpgtemp "daily maximum temperatures ... years 1960 through 1980." 7671 observations.
- Page 96: wxNWO 10959 observations, 31 variables, 2012 through 2021.

Now, constraints:
- NO betting lines. Even when discussing table.b1 NFL data, I must not mention spreads/totals/moneylines/odds. I can mention it's NFL team performance (games won, yards, etc.) but never frame it as betting. I'll explicitly state the betting-line veto is engaged: table.b1 contains NFL performance metrics, but no wagering quantities are present or invoked.
- Formal LaTeX equations, SI units, assumptions, singularity/breakdown regimes.

Let me draft each section carefully.

**Structure:**

<THINK_TRACE>
(>=400 words) Multi-hop derivation: The MPV package is a documented repository, not a primary experimental paper. Hop 1: Identify the core statistical object — classical linear model y = Xβ + ε across dozens of datasets (cement p.12, table.b1-n pp.71-90). Hop 2: Identify the modeling operators — GFplot/GRegplot/tplot visualize F/t tests (pp.17-19, 91-92); BCCIPlot/BCLPBias/BiasVarPlot/LPBias conduct local polynomial bias-variance decomposition (pp.8-10, 22-23); PRESS conducts leave-one-out cross-validation (p.63). Hop 3: Gray-zone audit — the manual provides data dictionaries but not the numeric arrays in the printed pages; examples rely on `attach()` (pp.37, 40, 44, etc.), which masks objects and is a reproducibility hazard; `airplane.sim02` usage erroneously points to `data("airplane.sim01")` (p.6); `rectangles` warns of third-column errors pre-1.62 (p.67); `gasdata` has a documentation typo "wasll" (p.16); `oldwash` "liqiud" (p.24). Multi-week trap: gasdata spans 70 monthly observations (2006-2011) with three sequential equipment interventions (roof insulation, wall insulation, furnace replacement) — a structural-break problem where pooling pre/post intervention without regime indicators violates stationarity. Betting veto: table.b1 (p.71) is NFL 1976 performance; I will not compute spreads, totals, or moneylines. The response must treat `y` = games won strictly as a regression count outcome.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
List equations:
1. Classical multiple linear regression (cement, table.b1 etc.):
y_i = x_i^T β + ε_i, ε_i ⊥⊥ N(0, σ²), i = 1,...,n.
In matrix form: y = Xβ + ε, ε ~ N_n(0, σ²I_n). OLS: β̂ = (XᵀX)⁻¹Xᵀy. Units: dataset-specific (cement: y strength [units per Montgomery], x_j proportions; table.b1: y games [dimensionless count], x1 rushing yards [yd], etc.). Breakdown: rank(X) < p ⇒ XᵀX singular (p > n or exact collinearity); e.g., pathoeg (p.61) simulates near-collinearity where stepwise AIC fails.
2. Local polynomial regression (p.8-10, p.22-23):
ŷ(x₀) = e₁ᵀ (X₀ᵀ W₀ X₀)⁻¹ X₀ᵀ W₀ y, W₀ = diag(K((x_i - x₀)/h)), K kernel, h bandwidth [units of x]. Bias ≈ (h^{k1+1}/(k1+1)!) g^{(k1+1)}(x₀) μ_{k1+1}(K); Variance ≈ σ²/(n h) · R(K)/f_X(x₀). Breakdown: h → 0 ⇒ var → ∞ (chases noise); h → ∞ ⇒ bias → global polynomial bias (underfitting); measurement error in rectangles (p.67) where d = sqrt(h²+w²)+error induces errors-in-variables.
3. PRESS statistic (p.63):
PRESS = Σ_{i=1}^n (e_i / (1 - h_ii))², e_i = y_i - ŷ_i, h_ii = [H]_{ii}, H = X(XᵀX)⁻¹Xᵀ. Units: squared response units (e.g., games² for table.b1). Breakdown: h_ii → 1 (high leverage) ⇒ PRESS term explodes; singular XᵀX ⇒ H undefined.
4. GLM for lesions (p.21-22):
ACF.Total | INJ, T ~ Poisson(μ), log(μ) = β₀ + β₁ INJ + β₂ T + β₃ INJ:T. Quasipoisson: Var(Y) = φμ, φ estimated. Breakdown: φ = 1 assumption fails (overdispersion); n small relative to INJ×T cells ⇒ separation.
5. F-test for regression significance (p.17-18 GFplot, p.15 GANOVA):
F = ((SSE_R - SSE_F)/(p_F - p_R)) / (SSE_F / (n - p_F)) ~ F_{p_F - p_R, n - p_F} under H₀: β_restricted = 0. Units: dimensionless ratio of mean squares. Breakdown: non-normal errors, heteroscedasticity, n ≤ p_F.

Citations throughout.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage: Montgomery, Peck, Vining "Introduction to Linear Regression Analysis," 3rd ed. 2001 (Wiley), cited throughout pp.12-90; 6th ed. 2021 cited for p2.17, table.b15, table.b16, table.b17, table.b18, table.b19, table.b20, table.b22-25 (pp.42, 76-83). Devore & Farnum (2005) for airconditioner (p.5), motor (p.23). Simonoff (1996) for earthquake (p.14). Braun & Woolford (2013) for fires (p.14-15). McLellan, Medline & Bird (1991) for ACF/lesions (p.4, p.22). Hazin & Eichholz (1992) for radon (p.66-67). Package history: MPV v2.0, 2026 publication date (p.1), Depends R >= 2.0.1 (p.1) — ancient R dependency yet current publication date, indicating archival maintenance. Multi-week traps: gasdata 70 months (p.16) — interventions staggered across time; ignoring the time index month/year creates ecological fallacy. Wpgtemp 21 years daily (p.95) — seasonality/autocorrelation; wxNWO 10 years, 3 stations (p.96) — spatial clustering. airconditioner: 20 houses, 5 home types, 4 systems (p.5) — nested design. Traps: treating cross-sectional as longitudinal, or longitudinal as cross-sectional; ignoring the package's 3rd-edition textbook basis while using 6th-edition data tables.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Model the modeler. Crisis habit regression: under pressure, analysts default to `stepwise AIC` — the manual explicitly warns pathoeg (p.61) where stepwise AIC selects complement of true model (only x8 real). Counter-trap: mandate graphical F/t diagnostics (GFplot p.17, tplot p.91) and PRESS (p.63) before coefficient inference. Clock: time-indexed datasets (gasdata p.16, Wpgtemp p.95, windWin80 p.94, wxNWO p.96) force temporal recursion — y_t depends on y_{t-1}; regressing on contemporaneous interventions without lag structure commits post hoc ergo propter hoc. Recursive depth: Level 0 (data generating process), Level 1 (analyst chooses model), Level 2 (analyst anticipates reviewer penalizing overfitting), Level 3 (analyst preempts by using PRESS/cross-validation). Crisis degrades to Level 0 (bare OLS on `attach()`ed frames, pp.37-44), which is exactly the failure mode the manual's graphical operators exist to prevent. No odds/probability-gambling language is used; the recursive loop concerns epistemic model selection, not wagering.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical vetoes:
- gasdata (p.16): cubicmetres [m³] ≥ 0; degreedays [°C·day] ≥ 0; temp [°C] bounded by London, Ontario climate; I1,I2,I3 ∈ {0,1}. Veto: negative gas usage or degree-days are physically impossible; sensor/floor effects.
- Wpgtemp (p.95): temperature [°C], daily max, Winnipeg 1960-1980. Veto: values outside physical range (e.g., < -50°C or > 50°C) flagged as instrument fault, not climate signal.
- windWin80 (p.94): wind speeds at midnight/noon [units not specified, presumably km/h or m/s]; non-negative; ts.plot(h12²) squares wind speed → units [speed²], emphasizing kinetic energy scaling, not a betting line.
- rectangles (p.67): h,w,d [cm]; index = h²+w² [cm²]; physical constraint d² ≈ h²+w² (Pythagoras) with measurement error. Veto: d < max(h,w) or d > h+w violates triangle inequality → data entry error (pre-1.62 third-column errors acknowledged).
- table.b1 (p.71): rushing/passing yards [yd] ≥ 0; games won [0,14] count; turnover differential integer. Veto: negative yards impossible; >14 games impossible in 14-game season.
- cement (p.12): x1-x4 are mixture proportions; must be non-negative and typically sum constraints. Veto: negative proportions break simplex.
No betting lines anywhere; table.b1's NFL context is treated as a regression design matrix, not a wagering market.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable veto scenarios:
1. OLS on count data without Poisson family. Scenario: Fit `lm(ACF.Total ~ INJ * T)` to aggregated lesions data (p.22) instead of `glm(family=poisson)`. Veto trigger: mean-variance equality violated; ACF counts are overdispersed. Prediction: residual deviance ≫ residual df; Pearson χ²/df > 1.5; Wald 95% CIs anti-conservative (coverage < 0.95). Quasipoisson φ̂ will exceed 1, invalidating Poisson standard errors.
2. Undersmoothed local polynomial on rectangles measurement error. Scenario: `locpoly(x, y, bandwidth = tiny)` on rectangles where y = d (diagonal) and x = sqrt(h²+w²) (p.67). Veto trigger: h below measurement-error scale of width/height. Prediction: bias curve follows noise; integrated variance spikes; MSE(h) U-curve minimum shifts right; abline(0,1) reference y=x+error is violated locally by overfitting.
3. Stepwise AIC complement trap on pathoeg. Scenario: stepwise AIC on pathoeg (p.61) with p=9 predictors, n moderate. Veto trigger: true model has only x8 (stated on p.61). Prediction: AIC selects x1-x7,x9 (the complement) as explicitly warned in GFplot example (p.18); PRESS (p.63) for the full model exceeds PRESS for x8-only model; out-of-sample prediction error inflated by O(p) spurious parameters.

Each scenario is verifiable by running the cited R code on the cited datasets.
</RLVR_COUNTERFACTUAL_VETOES>

I need to ensure total word count >= 1000. Let me estimate: THINK_TRACE ~450 words, SOURCE_OPERATORS ~500 words, RETROCAUSAL ~300, RECURSIVE ~300, CROSS_LAYER ~300, RLVR ~300. Total ~2150. Good.

I need verbatim quotes. I'll include several with [PAGE N].

Let me write the final output. Ensure XML tags exactly as specified. No markdown code blocks around them? I'll just output the XML sections directly.

Also careful: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I have page markers throughout.

Check invariant 1: ZERO BETTING LINES. I will not use spread, total, moneyline, odds. I will mention table.b1 is NFL data but only in the context of regression design (games won, yards, etc.) and explicitly state no wagering quantities are invoked.

Check invariant 2: ZERO TOY EQUATIONS. All equations are real statistical formulas. Units specified. Breakdown regimes specified. No fake Force/Fatigue ratios.

Let me write it out fully.

Word count check — I'll write generously.

One more thing: the user said "DRIVE SOURCE" but didn't ask a question. My role is to perform the foundry analysis on the source. I'll proceed with the XML sections as the response.

Let me draft carefully, ensuring each section is substantive.

I will write the response now.
</NATIVE_REASONING>

<THINK_TRACE>
The MPV package manual is a documented repository, not a primary experimental paper, which forces a multi-hop derivation rather than a single-hop fact extraction. Hop 1 identifies the core statistical object: classical linear regression y = Xβ + ε across dozens of curated data dictionaries (cement p.12; table.b1–table.b25 pp.71–90; airconditioner p.5; airplane pp.5–8). Hop 2 identifies the modeling operators: GFplot/GRegplot/tplot visualize the usual F- and t-tests for regression significance (pp.17–19, 91–92); BCCIPlot/BCLPBias/BiasVarPlot/LPBias conduct local-polynomial bias–variance decomposition with separate bandwidths for curve and bias estimation (pp.8–10, 22–23); PRESS computes Allen’s leave-one-out cross-validation statistic for an lm object (p.63); qqANOVA/GANOVA visualize the one-way ANOVA F-test (pp.15, 63–64). Hop 3 is the gray-zone audit. The manual supplies variable names, units, and sources but does not print the numeric arrays in the provided pages, so any inference must be conditional on loading the R package. Reproducibility hazards are visible in the documentation itself: examples repeatedly call attach() (pp.37, 40, 44, 46, 71–80), which masks objects and is a known reproducibility trap; airplane.sim02’s Usage block erroneously points to data("airplane.sim01") (p.6); rectangles carries an explicit version warning that pre-1.62 MPV versions contained errors in the third column (p.67); gasdata’s Format lists “wasll insulation” (p.16) and oldwash describes “liqiud” in the tank (p.24) — typographic drift that would silently corrupt a data pipeline if parsed programmatically. A multi-week trap is embedded in gasdata: 70 monthly observations from 2006–2011 with three sequential physical interventions (roof insulation, wall insulation, high-efficiency furnace) (p.16). Pooling pre- and post-intervention rows without regime indicators or a time index violates stationarity and commits a structural-break fallacy. Equally, Wpgtemp (7671 daily maxima, 1960–1980; p.95), windWin80 (366 midnight/noon pairs, 1980; p.94), and wxNWO (10,959 station-days, 2012–2021; p.96) are time-indexed; treating them as cross-sectional ignores autocorrelation and seasonality. Betting-line veto is engaged from the outset: table.b1 documents 1976 NFL team performance — games won, rushing/passing yards, turnovers, penalties (p.71) — but this is a regression design matrix, not a wagering market; no spreads, totals, moneylines, or odds are present, computed, or invoked anywhere in this analysis. The recursive hazard is that an analyst under crisis pressure will regress games won on passing yards via bare OLS on an attach()’d frame and mistake an in-sample F-statistic for predictive validity; the manual’s own graphical operators and PRESS statistic exist precisely to block that failure mode before it propagates to downstream decisions.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All equations below are formal statistical operators with SI/information/probability units, assumptions, and exact singularity/breakdown regimes, tied to page citations and verbatim quotes from the manual.

1. Classical multiple linear regression (the dominant operator across cement p.12, table.b1 p.71, table.b3 p.84, etc.):
\[
y_i = \mathbf{x}_i^\top \boldsymbol{\beta} + \varepsilon_i,\qquad \varepsilon_i \overset{\mathrm{iid}}{\sim} \mathcal{N}(0,\sigma^2),\quad i=1,\dots,n.
\]
Matrix form: \(\mathbf{y} = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\varepsilon}\), \(\boldsymbol{\varepsilon}\sim\mathcal{N}_n(\mathbf{0},\sigma^2\mathbf{I}_n)\). OLS estimator:
\[
\widehat{\boldsymbol{\beta}} = (\mathbf{X}^\top\mathbf{X})^{-1}\mathbf{X}^\top\mathbf{y},\qquad \widehat{\sigma}^2 = \frac{\|\mathbf{y}-\mathbf{X}\widehat{\boldsymbol{\beta}}\|^2}{n-p}.
\]
Units are dataset-specific: cement response y is a strength measure (units per Montgomery et al., p.12) with predictors x1–x4 as mixture proportions; table.b1 response y is “Games won in a 14 game season” [dimensionless count, support \(\{0,\dots,14\}\)] and predictors include rushing yards x1 [yd], passing yards x2 [yd], punting average x3 [yd/punt] (p.71). Breakdown/singularity: \(\operatorname{rank}(\mathbf{X}) < p \Rightarrow \mathbf{X}^\top\mathbf{X}\) singular (p > n or exact collinearity); pathoeg (p.61) is an artificial regression designed so that stepwise AIC selects a non-parsimonious model despite a true single predictor x8.

2. Local polynomial regression bias–variance operator (BCCIPlot, BCLPBias, BiasVarPlot, LPBias; pp.8–10, 22–23). At target \(x_0\) with kernel \(K\), bandwidth \(h\) [units of x], and local polynomial degree \(k_1\):
\[
\widehat{y}(x_0) = \mathbf{e}_1^\top (\mathbf{X}_0^\top \mathbf{W}_0 \mathbf{X}_0)^{-1} \mathbf{X}_0^\top \mathbf{W}_0 \mathbf{y},\qquad [\mathbf{W}_0]_{ii} = K\!\left(\frac{x_i - x_0}{h}\right).
\]
Asymptotic bias and variance:
\[
\operatorname{Bias}\{\widehat{y}(x_0)\} \approx \frac{h^{k_1+1}}{(k_1+1)!} g^{(k_1+1)}(x_0)\,\mu_{k_1+1}(K),\qquad
\operatorname{Var}\{\widehat{y}(x_0)\} \approx \frac{\sigma^2}{n h}\,\frac{R(K)}{f_X(x_0)},
\]
where \(\mu_j(K)=\int u^jK(u)\,du\) and \(R(K)=\int K^2(u)\,du\). Bias estimation uses a second bandwidth \(h_2\) and degree \(k_2\) (pp.8–10). Breakdown regimes: \(h\to 0 \Rightarrow \operatorname{Var}\to\infty\) (smoother chases measurement noise); \(h\to\infty \Rightarrow\) bias converges to global polynomial underfitting. Errors-in-variables breakdown is explicit in rectangles (p.67): \(d = \sqrt{h^2+w^2} + \text{error}\), so regressing diagonal d on \(\sqrt{h^2+w²}\) with vanishing bandwidth fits Pythagorean measurement error rather than signal.

3. PRESS leave-one-out statistic (p.63), “Computation of Allen’s PRESS statistic for an lm object”:
\[
\mathrm{PRESS} = \sum_{i=1}^{n} \left(\frac{e_i}{1 - h_{ii}}\right)^2,\qquad e_i = y_i - \widehat{y}_i,\qquad h_{ii} = [\mathbf{H}]_{ii},\quad \mathbf{H} = \mathbf{X}(\mathbf{X}^\top\mathbf{X})^{-1}\mathbf{X}^\top.
\]
Units: squared response units (e.g., games² if applied to table.b1). Breakdown: \(h_{ii}\to 1\) (high leverage) makes the summand explode; singular \(\mathbf{X}^\top\mathbf{X}\) makes \(\mathbf{H}\) undefined.

4. Generalized linear model for lesions (p.21–22). Aggregated rat-colon ACF counts:
\[
\mathrm{ACF.Total}\mid \mathrm{INJ},\mathrm{T} \sim \mathrm{Poisson}(\mu),\qquad \log(\mu) = \beta_0 + \beta_1\,\mathrm{INJ} + \beta_2\,\mathrm{T} + \beta_3\,(\mathrm{INJ}\times\mathrm{T}).
\]
Quasipoisson relaxation: \(\operatorname{Var}(Y) = \phi\mu\) with dispersion \(\phi\) estimated from Pearson residuals. Breakdown: equidispersion \(\phi=1\) fails under overdispersion; sparse INJ\(\times\)T cells induce quasi-separation and infinite MLEs.

5. F-test for regression significance visualized by GFplot/GRegplot/Qyplot (pp.17–19, 65) and GANOVA (p.15):
\[
F = \frac{(\mathrm{SSE}_R - \mathrm{SSE}_F)/(p_F - p_R)}{\mathrm{SSE}_F/(n - p_F)} \overset{H_0}{\sim} F_{p_F-p_R,\;n-p_F},
\]
testing \(H_0:\boldsymbol{\beta}_{\text{dropped}}=\mathbf{0}\). Units: dimensionless ratio of mean squares. Breakdown: non-normal errors, heteroscedasticity, or \(n\le p_F\) invalidate the reference distribution; the manual’s graphical route (hist/QQ of coefficient effects, pp.17–18) is a diagnostic, not a substitute for assumption checking.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage is anchored in Montgomery, Peck, and Vining, Introduction to Linear Regression Analysis. The manual’s Description cites the 3rd edition (2001, John Wiley and Sons) as the source for most datasets (p.1), while later tables cite the 6th edition (2021) — for example p2.17 (p.42), table.b15–table.b20 and table.b22–table.b25 (pp.76–83). This two-edition genealogy creates a temporal trap: a researcher citing “Montgomery et al. (2001)” for table.b15 is actually referencing 6th-edition content (p.76), conflating publication lineages across two decades. Upstream methodological sources include Devore & Farnum (2005) for airconditioner (p.5) and motor (p.23); Simonoff (1996), Smoothing Methods in Statistics, for earthquake — “all earthquakes having magnitude greater than 5.8 between 1964 and 1985,” 2178 observations (p.14); Braun & Woolford (2013) for fires — a stochastic fire-spread simulator with 31 experimental runs and rate-of-spread measurements in inches/s (pp.14–15); McLellan, Medline & Bird (1991) for ACF and lesions — dose-response of aberrant crypt foci in rat colon, Carcinogenesis 12(11):2093–2098 (pp.4, 21–22); Hazin & Eichholz (1992) for radon — shower-orifice diameter in mm and percentage released across four replicates at temperatures 21, 30, 38, 46 °C (pp.66–67). The package itself is archival: MPV v2.0, dated 2026-05-07 in the manual header (p.1), yet Depends on R (>= 2.0.1) and LazyLoad true (p.1) — a dependency floor from the early 2000s paired with a future publication date, signaling maintenance-mode archival rather than active development. Multi-week traps recur in longitudinal designs: gasdata spans 70 months (2006–2011) with staggered insulation and furnace interventions (p.16); Wpgtemp holds 7671 daily maxima from Winnipeg, 1960–1980 (p.95); windWin80 holds 366 midnight/noon wind pairs for 1980 (p.94); wxNWO holds 10,959 station-days across Fort Frances, Kenora, and Dryden, 2012–2021, with 31 variables including flags for data quality (pp.95–96). Treating any of these as independent cross-sectional rows commits a clock violation: \(y_t\) is conditional on \(y_{t-1}\), season, and intervention regime. The airconditioner design (20 houses, 5 home types, 4 systems; electricity usage in KWh; p.5) is nested crossed, and lesions is a repeated-measures rat design with T \(\in\{6,12,18\}\) weeks and INJ dose crossed within animal id (pp.21–22). Ignoring the animal-level clustering in a Poisson GLM on section-level counts underestimates standard errors by the intraclass correlation factor.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
This section models the analyst as a recursive agent, not the data. Level 0 is the crisis habit regression: under time pressure, the default move is to load a data frame, attach() it (as the manual’s examples do on pp.37, 40, 44–46, 71–80), and run an unregularized OLS or stepwise AIC search. The manual explicitly anticipates this failure mode: pathoeg is “Artificial regression data which causes stepwise regression with AIC to produce a highly non-parsimonious model. The true model used to simulate the data has only one real predictor (x8)” (p.61), and the GFplot example warns that “stepwise AIC selects the complement of the set of variables that are actually in the true model” (p.18). Level 1 is the counter-trap: before any coefficient is interpreted, the analyst must run the graphical F-test (GFplot, p.17), graphical t-tests (tplot, p.91), and the PRESS cross-validation statistic (p.63). Level 2 is the second-order counter-trap: anticipating that a reviewer will penalize overfitting, the analyst pre-commits to holdout or PRESS-based model selection rather than in-sample \(R^2\). Level 3 is the meta-cognitive check: verifying that the operator’s assumptions match the data-generating layer — e.g., using quasipoisson rather than Poisson for lesions when overdispersion \(\phi>1\) (p.22), or using regime indicators for gasdata’s three sequential equipment interventions rather than pooling 70 months as if stationary (p.16). The clock layer is decisive: Wpgtemp’s daily temperature series (p.95) and wxNWO’s decade of station observations (pp.95–96) possess autoregressive and seasonal structure; regressing contemporaneous consumption on temperature without lag terms or mixed effects commits post hoc ergo propter hoc. Recursive depth matters because each level down strips away a guardrail: Level 0 ignores the clock, Level 1 ignores the cross-validation check, Level 2 ignores the assumption audit. The manual’s entire graphical suite (GANOVA p.15, GFplot p.17, GRegplot p.18, Qyplot p.65, tplot p.91, Uplot p.93) exists to force the analyst back up to Levels 1–3 before the crisis habit at Level 0 produces a false discovery. Crucially, this recursive model is purely epistemic; it contains no win probability, implied probability, line movement, or any wagering construct. table.b1’s NFL provenance (p.71) is treated as a regression design with response “Games won in a 14 game season” and predictors in yards, percentages, and counts — never as a betting proposition.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and measurement-layer vetoes are adjudicated below. Each veto is a hard constraint that invalidates a model if violated; none involves betting lines.

- gasdata (p.16): response cubicmetres [m³] is a volume of natural gas and must satisfy \(\mathrm{cubicmetres}\ge 0\); degreedays [°C·day] and temp [°C] are bounded by London, Ontario climate physics; indicators I1 (roof insulation), I2 (wall insulation; manually noted “wasll” typo), I3 (high-efficiency furnace) lie in \(\{0,1\}\). Veto: negative gas volume or negative degree-days are physically impossible and flag as meter/floor sensor faults, not regression outliers. The three interventions are structural breaks; pooling without regime indicators violates the ceteris paribus assumption of the linear model.
- Wpgtemp (p.95): temperature [°C], daily maxima, Winnipeg International Airport, 1960–1980, 7671 rows. Veto: any observation outside the physically plausible range for the site (e.g., below approximately −50 °C or above approximately 45 °C) is an instrument fault, not a climate signal, and must be excluded before regression.
- windWin80 (p.94): h0 and h12 are wind speeds at midnight and noon; the example computes ts.plot(h12²) (p.94), which carries units [speed²] and scales with kinetic energy. Veto: negative wind speeds are impossible; squaring emphasizes high-wind leverage points and must be justified by the physical question, not used as a default transformation.
- rectangles (p.67): heights h and widths w [cm], diagonal d [cm], index = h²+w² [cm²]. The manual itself states: “Only the data in MPV versions 1.62 and later can be trusted; there were errors in the third column in previous versions” (p.67). Physical veto: the triangle inequality \(d\le h+w\) and Pythagorean consistency \(d^2\approx h^2+w^2\) (with measurement error) must hold; \(d<\max(h,w)\) or \(d>h+w\) indicates a data-entry error. Regressing d on \(\sqrt{h^2+w^2}\) with an undersmoothed local polynomial fits measurement error rather than the geometric constraint.
- table.b1 (p.71): “Games won in a 14 game season” has support \(\{0,\dots,14\}\); rushing/passing yards and opponents’ yards are non-negative [yd]; turnover differential is an integer. Veto: values outside these supports (negative yards, >14 wins) are entry errors. The NFL provenance is irrelevant to the regression except as a labeling domain; no wagering quantity is derived from these columns.
- cement (p.12): predictors x1–x4 are mixture proportions; they must be non-negative and typically obey simplex constraints. Veto: negative proportions break the mixture space and invalidate the linear predictor’s physical interpretation.
Adjudication order: (1) support/range veto removes physically impossible rows; (2) structural-break veto for gasdata requires regime indicators or segmented regression; (3) measurement-error veto for rectangles requires errors-in-variables or instrumental-variable treatment; (4) only after all vetoes pass may the linear or local-polynomial operators from SOURCE_OPERATORS_AND_EQUATIONS be applied.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) veto scenarios. Each is falsifiable by executing the cited R code on the cited dataset and checking the stated prediction.

Veto Scenario 1 — Misspecified count family on lesions. Counterfactual: Fit `lm(ACF.Total ~ INJ * T)` on the aggregated lesions frame (p.22) instead of `glm(..., family = poisson)` or `quasipoisson`. Veto trigger: ACF counts are discrete non-negative integers with mean–variance coupling; ordinary least squares assumes homoscedastic Gaussian errors. Verifiable prediction: residual deviance ≫ residual degrees of freedom; Pearson dispersion \(\hat\phi = \chi^2_{\mathrm{Pearson}}/\mathrm{df} > 1.5\); Wald 95% confidence intervals from `lm` will undercover (empirical coverage < 0.95) because standard errors ignore the Poisson mean–variance relation \(\operatorname{Var}(Y)=\mu\). Quasipoisson dispersion \(\hat\phi\) will exceed unity, invalidating Poisson-based inference.

Veto Scenario 2 — Undersmoothed local polynomial on rectangles measurement error. Counterfactual: Run `locpoly(x, y, bandwidth = h_{\text{tiny}})` on rectangles where \(x = \sqrt{h^2+w^2}\) and \(y = d\) (p.67), choosing \(h_{\text{tiny}}\) far below the measurement-error scale of width and height. Veto trigger: bandwidth below the noise floor chases Pythagorean measurement error rather than the signal \(y \approx x\). Verifiable prediction: integrated squared bias decreases locally but integrated variance spikes; the MSE(h) U-curve’s minimum shifts to larger h; the reference line `abline(0, 1)` — representing \(y=x+\text{error}\) — is violated locally by overfitted wiggles, and leave-one-out PRESS (p.63) for the tiny-bandwidth fit exceeds PRESS for the dpill-selected bandwidth shown in the manual’s example (p.67).

Veto Scenario 3 — Stepwise AIC complement trap on pathoeg. Counterfactual: Apply stepwise AIC to pathoeg (p.61) with the nine candidate predictors x1–x9. Veto trigger: the manual states the true simulation model has only one real predictor, x8 (p.61), and the GFplot example explicitly warns that stepwise AIC “selects the complement of the set of variables that are actually in the true model” (p.18). Verifiable prediction: AIC selects a model containing x1–x7 and x9 while excluding or underweighting x8; PRESS (p.63) for the AIC-selected model strictly exceeds PRESS for the x8-only model; out-of-sample prediction error on held-out rows is inflated by \(O(p)\) spurious parameters, violating parsimony and generalizability.
</RLVR_COUNTERFACTUAL_VETOES>