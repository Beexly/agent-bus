---
source: "2025 - Forecasting NFL Wide Receiver Touchdowns with a Temporal Linear Regression Model - Chung.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2025"
pages: 23
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4672
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided PDF source text about forecasting NFL WR touchdowns using a temporal linear regression model. They have strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations. Must be formal.

I need to write a comprehensive analysis that hits all sections, with word count >= 1000 total, and THINK_TRACE >= 400 words.

Key source facts to cite:
- Paper: Chung, Ruben. "Forecasting NFL Wide Receiver Touchdowns with a Temporal Linear Regression Model." Brown University.
- Pages: 1-23 provided.
- Model: OLS linear regression, y_i = β_0 + Σ β_j x_ij + ε_i [PAGE 5], RSS minimization [PAGE 6], β = (X^T X)^{-1} X^T y [PAGE 6].
- Train: 1990-2010, Test: 2011-2024 [PAGE 10].
- Features: lag features, rolling averages (2-year), player traits (age, age squared, experience, prime age, rookie/sophomore), efficiency (TD per target, catch rate, target share, yards per game), red zone data, team context (offensive strength), durability (games played) [PAGE 9-10].
- No regularization, StandardScaler [PAGE 10].
- 5-fold CV on training set [PAGE 10-11].
- Metrics: MAE 0.82 TDs, RMSE 1.29 TDs, R² 0.803 on test set [PAGE 13-14].
- CV MAE 0.45 ± 0.08 [PAGE 14].
- Best fit line predicted vs actual: y = 1.06x - 0.18 [PAGE 15]. Underpredicts high end, overpredicts low end (<3 TDs).
- Top 10 2025 projections [PAGE 15-16]: Ja'Marr Chase 11.03, Justin Jefferson 9.85, etc.
- Limitations: linear form cannot capture nonlinear effects/interactions [PAGE 18-19], no injury/situational awareness [PAGE 18], no adversarial defense data [PAGE 18], limited to WRs [PAGE 18].
- Regression to the mean discussion [PAGE 8-9, 15-16].
- Data leakage prevention: temporal bounds [PAGE 7, 10].
- Data source: Pro-Football-Reference.com [PAGE 7].

I must avoid any betting terminology. I can talk about projections, errors, variance, but not "odds," "spread," "moneyline," "total," "over/under," etc.

For LaTeX, I need formal equations. Since the source gives OLS formula, I can restate it formally. I should not invent fake ratios. I can define proper statistical quantities: MAE = (1/N) Σ |y_i - ŷ_i|, RMSE = sqrt((1/N) Σ (y_i - ŷ_i)²), R² = 1 - SS_res/SS_tot. Units: touchdowns (TD), dimensionless R², MAE in TDs/season, RMSE in TDs/season. Breakdown/singularity: OLS singular when X^T X is not invertible (perfect multicollinearity, rank deficiency), or when n < p+1. Also heteroscedasticity, non-normal residuals, etc.

Structure:
- THINK_TRACE: Deep derivation and gray-zone audit. Discuss how the model frames TD prediction as supervised regression, the temporal train/test split, feature engineering constraints, OLS assumptions, multicollinearity, the meaning of R²=0.803 with count data (TD is discrete non-negative integer but modeled as continuous ℝ⁺ per page 9), regression to mean, the y=1.06x-0.18 calibration curve, systematic bias at low and high ends, why TD_prev isn't top feature, leakage prevention, external validity limits (new QBs, rookie competition). Gray zones: treating count as continuous, OLS with potentially heteroscedastic errors, linearity with age/usage interactions omitted, no defensive matchup data, preseason-only features missing in-season changes. Word count >= 400.

- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define design matrix X ∈ ℝ^(n×(p+1)), y ∈ ℝ^n, β ∈ ℝ^(p+1). OLS solution. RSS. MAE, RMSE, R² formulas. Units. Assumptions: linearity, independence, homoscedasticity, no perfect multicollinearity. Breakdown regimes: det(X^T X)=0, rank(X) < p+1, n < p+1, heteroscedasticity violating constant variance, non-integer predictions for count data, extrapolation beyond 1990-2024 domain. Page citations [PAGE N]. Verbatim quotes where appropriate.

- RETROCAUSAL_GENEALOGY: Historical lineage. Burke (2009) team-level scoring/play-calling [PAGE 3]. Lopez, Matthews, Baumer (2018) randomness in sport [PAGE 3]. Yurko et al. (2019) nflWAR [PAGE 3]. Temporal validity emphasis. Multi-week traps: relying on prior-year TD totals (TD_Prev) as sole predictor; ignoring regression to mean; failing to account for quarterback changes (Jefferson, London new QBs [PAGE 16]); rookie competition affecting target share (Thomas vs Hunter [PAGE 16]); small-sample volatility in red-zone scoring. Genealogy from team-level to player-level evaluation, from raw counts to efficiency metrics.

- RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is more abstract/metacognitive but must tie to source. "Crisis habit regression" = under pressure, analysts revert to naive heuristics like "he scored X last year" (TD_Prev) which the paper shows is insufficient [PAGE 17-18]. "Counter-trap" = the model's use of efficiency/rolling averages to avoid overreacting to spikes; but counter-trap can fail if efficiency itself is volatile or if contextual shifts (new QB) invalidate historical efficiency. "Clock" = temporal validation boundary 1990-2010 train, 2011-2024 test; preseason projection clock means features must be strictly prior-season; model cannot see 2025 offseason moves. The recursive loop: projection influences evaluation, evaluation influences feature weighting, but exogenous roster changes break the recursion.

- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This section should discuss physical constraints that are not in the model but act as vetoes: player durability (games played feature is included [PAGE 10]), age/career stage (included), but missing: injury history, weather (not in source), biomechanical decline with age (age squared included but no interaction with usage), red-zone physical efficiency (RZ features included but not defensive matchups). Veto proof means: what physical facts would invalidate a projection regardless of model output? E.g., a torn ACL in offseason (not in dataset), QB change altering timing (not in model), weather-driven game script changes (not modeled), defensive schemata (not modeled). Since source doesn't include weather, I must note its absence as a limitation [PAGE 18] and treat it as an external veto layer. Keep it grounded: no invented data, just reasoning about missing layers.

- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. Need 3 counterfactual veto scenarios. Each scenario: a condition that would veto the model's projection, and a prediction of what happens if it occurs. Must be verifiable (based on source facts + logical extrapolation, not fake data). Examples:
  1. If a top-10 projected WR suffers a season-ending injury before Week 1 (durability feature from 2024 would not capture offseason injury), projection TD > 0 vetoed; actual = 0. Model lacks injury input [PAGE 18]. Prediction: MAE for that player equals projected value (e.g., Chase 11.03 -> actual 0, error 11.03 TDs).
  2. If a projected starter's starting quarterback is replaced mid-offseason (e.g., Jefferson with new QB [PAGE 16]), the efficiency and usage features derived from 2024 QB-WR chemistry become invalid; model projects based on stale catch rate/target share. Veto: actual TDs fall below projection due to disrupted timing. Prediction: systematic underperformance for QBs changed vs model.
  3. If a rookie drafted into same position group creates target competition (Brian Thomas vs Travis Hunter [PAGE 16]), the lag features assume stable role; counterfactual veto reduces target share and thus TDs. Prediction: Thomas's actual TDs < 8.52 projection, error driven by unmodeled roster competition.
  These are verifiable because they map to explicit limitations and examples in the paper. No betting lines.

Need to ensure total words >= 1000. THINK_TRACE alone >= 400. I'll aim for roughly 1500-2000 words total to be safe.

Must not mention betting lines. Check for "spread," "total," "moneyline," "odds," "over," "under," "betting," "wager," "bookmaker." Avoid entirely.

Citations: Use [PAGE N] exactly as requested. Verbatim quotes: quote short phrases from source text, e.g., "touchdowns are the most volatile and thus among the hardest to predict" [PAGE 3], "strict time-bounded feature engineering to prevent data leakage" [PAGE 2], etc.

LaTeX: Use proper formatting. No toy equations like Force/Fatigue. All equations formal.

Let's draft carefully.

Word count estimation: I'll write generously.

THINK_TRACE content plan:
- Start with problem formalization: supervised regression, target TD ∈ ℝ⁺ (though integer count, modeled continuous) [PAGE 9].
- Derive OLS from RSS minimization [PAGE 6].
- Feature vector construction: static + historical [PAGE 7-10]. Temporal bounding: no lookahead [PAGE 7, 10].
- Train/test split 1990-2010 / 2011-2024 [PAGE 10]. 5-fold CV [PAGE 10-11].
- Performance metrics: R²=0.803, MAE=0.82, RMSE=1.29 [PAGE 13-14]. Calibration y=1.06x-0.18 [PAGE 15].
- Interpretation: top features catch rate, yards per game, Yds_Avg2 negative conditional [PAGE 12-13]. TD_Prev not top [PAGE 17].
- Regression to mean: extreme values pull toward mean [PAGE 8-9], Chase decline [PAGE 15-16].
- Gray-zone audit: (1) count data modeled as continuous (non-negative integer vs ℝ⁺) can produce fractional projections (11.03 TDs) which are not physically observable; (2) OLS assumes homoscedastic independent residuals but TD scoring is clustered in red zone and game-dependent, risking heteroscedasticity; (3) linearity forbids interactions age×usage, QB×receiver, though paper acknowledges [PAGE 18]; (4) leakage prevention is strong but preseason-only features omit in-season injuries/trades; (5) no adversarial defense data [PAGE 18]. This is >= 400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal block. Define n observations, p predictors. X matrix. OLS. RSS. β. Standardization via StandardScaler [PAGE 10]. Metrics formulas. Assumptions list [PAGE 5]. Breakdown: singular X^T X, rank deficiency, n ≤ p, heteroscedasticity, non-normality, extrapolation outside 1990-2024, discrete target. Units: TD (dimensionless count), MAE [TD/season], RMSE [TD/season], R² [unitless], coefficients [TD per unit feature]. Page citations.

RETROCAUSAL_GENEALOGY: Cite Burke 2009 [PAGE 3], Lopez et al. 2018 [PAGE 3], Yurko et al. 2019 [PAGE 3]. Move from team-level to player-level. Historical reliance on "he scored X last year" deemed insufficient [PAGE 17-18]. Multi-week traps: red-zone variance week-to-week, quarterback stability across weeks, target share changes from rookie injection (Travis Hunter example [PAGE 16]), new QB for Jefferson/London [PAGE 16]. The "multi-week" aspect: a projection made in preseason must survive 17 weeks of situational variance; model uses season aggregates, not weekly granularity, so it cannot veto a Week 3 injury or mid-season benching.

RECURSIVE_THEORY_OF_MIND: Define three registers. Crisis habit regression: under uncertainty, analysts anchor on TD_Prev; paper explicitly says this is overly simplistic [PAGE 17-18]. Counter-trap: model substitutes efficiency + rolling averages to avoid chasing spikes; however, this is itself a trap if efficiency is context-dependent (QB, scheme) and those contexts shift. Clock: temporal train/test boundary and preseason feature cutoff [PAGE 10]; the model's "clock" stops at 2024 season data; it cannot know 2025 offseason moves. Recursive loop: projection → roster decision → actual usage → invalidates projection assumptions. Example: Chase's 11.03 projection assumes 2024 role stability; if Bengals alter red-zone design, projection breaks.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: durability (games played) included [PAGE 10], but injury history excluded [PAGE 18]. Biomechanical: age and age_squared included [PAGE 9], but no interaction with usage or snap count; decline curve is exogenous to model. Environmental: weather not in source; temperature, wind, precipitation affect passing game and red-zone efficiency but are not features. Veto adjudication: if any physical veto is active (season-ending injury, QB change altering timing, adverse weather dome vs outdoor, defensive matchup taking away top WR), model output is epistemically subordinate to physical reality. The model lacks adversarial defense data [PAGE 18], so a shutdown corner assignment is an external veto. No invented data; just note absence and implications.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios. Format:
Scenario 1: Offseason season-ending injury to projected WR1. Veto condition: player unavailable for all 17 games. Model input: 2024 games played and stats cannot encode future injury. Prediction: projected TDs (e.g., Chase 11.03 [PAGE 15]) → actual 0 TDs; player-level MAE = 11.03 TDs; model cannot reduce error because injury feature absent [PAGE 18]. Verifiable via injury reports.
Scenario 2: Starting quarterback replacement for projected WR. Veto condition: new QB in 2025 not present in 2024 feature set; catch rate and target share derived from prior QB chemistry. Paper explicitly flags Jefferson and London with new QBs [PAGE 16]. Prediction: efficiency-based projection overestimates; actual TDs below projection by ≥1 TD for affected players; model's R² degrades on this subset.
Scenario 3: Rookie target competition at same position. Veto condition: high-draft rookie enters same offense (Thomas vs Hunter [PAGE 16]). Lag features assume incumbent role stability. Prediction: Thomas's actual TDs < 8.52 projection [PAGE 15]; error driven by unmodeled target-share dilution; model cannot detect because roster move data absent [PAGE 18].
Each includes verifiable outcome and prediction. No betting lines.

Need to check word count. I'll write substantial text. Let's ensure >1000 words total. Probably around 1800.

Let's start composing.
</NATIVE_REASONING>

<THINK_TRACE>
The problem is formalized as a supervised regression task in which the dependent variable y is receiving touchdowns for a wide receiver in a given season, modeled as continuous over ℝ⁺ despite being an inherently discrete non-negative integer count [PAGE 9]. The author assembles player-season records from 1990 through 2024 scraped from Pro-Football-Reference.com, including receiving, rushing, and team context [PAGE 7]. Feature engineering is strictly time-bounded: lag features and two-year rolling averages are computed only from seasons prior to the target year, which prevents lookahead bias and enforces temporal integrity [PAGE 7, PAGE 10]. The train/test split is chronological rather than random: 1990–2010 for training, 2011–2024 for out-of-sample testing [PAGE 10].

The mathematical core is ordinary least squares. For n observations and p predictors, the model is yᵢ = β₀ + Σⱼ₌₁ᵖ βⱼxᵢⱼ + εᵢ [PAGE 5]. Coefficients are estimated by minimizing the Residual Sum of Squares, yielding the closed-form solution β̂ = (XᵀX)⁻¹Xᵀy [PAGE 6]. The implementation uses scikit-learn with no regularization and standardization of numeric features via StandardScaler [PAGE 10]. Five-fold cross-validation is applied to the training set to estimate in-sample error and variance [PAGE 10–11].

Out-of-sample performance on 2011–2024 is reported as MAE = 0.82 TDs, RMSE = 1.29 TDs, and R² = 0.803 [PAGE 13–14]. Cross-validation on the training set yields MAE = 0.45 ± 0.08 TDs, suggesting low variance and limited overfitting [PAGE 14]. The predicted-vs-actual calibration line is ŷ = 1.06x − 0.18, where x is the model’s projection and y is actual touchdowns [PAGE 15]. A slope above one implies slight underprediction at the high end; an intercept near zero implies minimal systematic bias overall. However, the paper notes that for projections below 3 TDs the model slightly overpredicts, while for projections above 3 TDs it slightly underpredicts, with the gap widening as touchdowns increase [PAGE 15]. This pattern reflects regression toward the mean and the elevated variance of elite scoring [PAGE 15–16].

Feature importance is ranked by coefficient magnitude: Catch Rate is most influential, followed by Yards Per Game, then Two-Year Average Receiving Yards (which carries a negative coefficient conditional on other features, suggesting high-yardage profiles may arise between the 20s while lower-yardage receivers receive proportionally more red-zone targets) [PAGE 12–13]. Raw prior-year touchdown totals (TD_Prev) do not rank among the top features; the paper explicitly warns that models relying on “he scored X touchdowns last year” are overly simplistic for a volatile statistic [PAGE 17–18]. Efficiency and sustained usage metrics are therefore privileged over raw scoring repetition [PAGE 22–23].

Gray-zone audit. First, the target is a count variable but is regressed on a continuous linear hyperplane, producing fractional projections such as Ja’Marr Chase at 11.03 TDs for 2025 [PAGE 15–16]. These are mathematical expectations, not observable integer outcomes, which creates an ontological mismatch between model output and realized season totals. Second, OLS assumes independent, homoscedastic residuals with constant variance [PAGE 5], yet touchdown scoring is clustered in red-zone situations and is conditional on game script, quarterback play, and defensive matchups—all of which can induce heteroscedasticity and serial dependence that the linear form cannot represent. Third, the model explicitly cannot capture nonlinear effects or interactions, such as age × usage or quarterback × receiver chemistry [PAGE 18–19]. Fourth, the feature set excludes injury history, offseason roster changes, coaching changes, and defensive matchup data [PAGE 18–19]. Fifth, the 2025 projections are generated from 2024 data and therefore cannot incorporate known contextual shifts: new quarterbacks for Jefferson and London, and rookie target competition for Brian Thomas from Travis Hunter [PAGE 16]. These omissions are not minor footnotes; they are structural veto conditions that sit outside the model’s information boundary and can invalidate otherwise statistically sound projections.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let a player-season observation be indexed by i = 1, …, n, with n player-seasons in the analysis. Let p be the number of engineered predictors. The design matrix is X ∈ ℝ^(n×(p+1)), where the first column is a vector of ones for the intercept β₀ and the remaining p columns are standardized features. The target vector is y ∈ ℝ^n, where yᵢ is the actual number of receiving touchdowns scored by player i in the target season [PAGE 5, PAGE 9]. The linear model is:

yᵢ = β₀ + Σⱼ₌₁ᵖ βⱼ xᵢⱼ + εᵢ,   εᵢ ~ (0, σ²)   [PAGE 5]

The OLS estimator minimizes the Residual Sum of Squares:

RSS(β) = Σᵢ₌₁ⁿ (yᵢ − β₀ − Σⱼ₌₁ᵖ βⱼ xᵢⱼ)²   [PAGE 6]

which yields:

β̂ = (XᵀX)⁻¹Xᵀy   [PAGE 6]

provided that XᵀX is invertible. Numeric features are standardized via StandardScaler so that each predictor has zero mean and unit variance before fitting; this aids interpretability of coefficient magnitudes but does not alter the geometry of the OLS projection [PAGE 10].

Evaluation metrics on the test set (2011–2024) are defined as:

MAE = (1/N) Σᵢ₌₁ᴺ |yᵢ − ŷᵢ|,   reported as 0.82 TDs   [PAGE 13–14]

RMSE = √[ (1/N) Σᵢ₌₁ᴺ (yᵢ − ŷᵢ)² ],   reported as 1.29 TDs   [PAGE 13–14]

R² = 1 − Σᵢ₌₁ᴺ (yᵢ − ŷᵢ)² / Σᵢ₌₁ᴺ (yᵢ − ȳ)²,   reported as 0.803 (unitless)   [PAGE 13–14]

Cross-validation on the training set (1990–2010) uses 5 folds; each fold serves once as the hold-out set, and the reported CV MAE is 0.45 ± 0.08 TDs [PAGE 10–11, PAGE 14].

The best-fit calibration line relating projected touchdowns x to actual touchdowns y on the test set is:

y = 1.06x − 0.18   [PAGE 15]

Assumptions required for valid OLS inference, as stated in the paper: (1) approximate linearity between predictors and target; (2) independent residuals with constant variance; (3) no perfect multicollinearity, i.e., no predictor is an exact linear combination of others [PAGE 5]. Units: target and predictions are in touchdowns per season (TD/season); MAE and RMSE carry units of TDs; R² is dimensionless; regression coefficients βⱼ carry units of TDs per one-unit change in standardized feature xⱼ [PAGE 5–6].

Breakdown / singularity regimes. The OLS solution is singular if det(XᵀX) = 0, which occurs under rank deficiency (perfect multicollinearity) or when n ≤ p (fewer observations than parameters plus intercept) [PAGE 5–6]. The linear form breaks down when the conditional mean E[TD | X] is nonlinear in X, when residuals exhibit heteroscedasticity or autocorrelation across weeks within a season, or when the target’s discrete count nature generates non-Gaussian residuals. The model’s domain of validity is bounded by the training data distribution (NFL WR seasons, 1990–2010) and the test distribution (2011–2024); extrapolation to rule changes, schedule-length changes, or eras outside this window is not supported [PAGE 10, PAGE 18–19].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper positions itself within a lineage that begins with team-level scoring and play-calling analysis (Burke, 2009), proceeds to broader statistical properties of NFL performance and randomness in North American sport (Lopez, Matthews, & Baumer, 2018), and extends to player-level evaluation metrics such as nflWAR (Yurko, Ventura, Horowitz, & Balasubramanian, 2019) [PAGE 3]. Chung’s contribution is to narrow the focus from team scoring to individual wide receiver touchdowns using a temporally valid linear model, addressing a gap the author identifies: few studies have addressed touchdown predictability specifically with temporal integrity [PAGE 3].

A key genealogical shift is the displacement of raw prior-year touchdown totals as the primary anchor. The paper shows that TD_Prev does not rank among the top features by coefficient magnitude, and explicitly rejects the heuristic “he scored X touchdowns last year” as insufficient for reliable forecasting of a volatile statistic [PAGE 17–18]. Instead, the model inherits the logic of efficiency and opportunity metrics: catch rate, yards per game, target share, touchdowns per target, and two-year rolling averages [PAGE 9, PAGE 12–13]. This aligns with football intuition that touchdowns are a function of consistent usage and high-value opportunities rather than isolated scoring spikes [PAGE 22–23].

Multi-week traps arise because the model projects a full-season total from preseason features but must survive 17 weeks of situational variance. The source text identifies specific 2025 contextual risks that sit outside the feature set: Justin Jefferson and Drake London will play with new quarterbacks, and Brian Thomas may face target-share competition from rookie teammate Travis Hunter [PAGE 16]. These are not idiosyncratic anecdotes; they are structural breaks in the temporal continuity that the model assumes. A quarterback change alters the timing, accuracy, and trust structure underlying a receiver’s catch rate and red-zone efficiency; a rookie injection dilutes target volume and can collapse the stable role assumed by lag features. Because the model contains no adversarial defensive data, no injury inputs, and no coaching-change variables [PAGE 18–19], it cannot detect these mid-season or offseason regime shifts. The historical lesson is that any projection system built on lagged efficiency is exposed to “roster-change cascades”: a single offseason transaction can invalidate the conditional distribution from which the 2024 features were drawn, making the 2025 projection a forecast of a counterfactual world in which 2024 context persists.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Three recursive registers govern interpretation of this model: crisis habit regression, counter-trap, and clock.

Crisis habit regression is the analyst’s reflex under uncertainty to revert to the most salient recent observation—prior-year touchdowns. The paper directly identifies this as a failure mode: surface-level models that lean on TD_Prev are “overly simplistic,” and guidelines based on prior-year scoring are inadequate for a volatile statistic [PAGE 17–18]. Under cognitive pressure, forecasters overweight the 2024 outlier season and underweight regression to the mean. Chung’s model resists this by construction: rolling averages and efficiency metrics dilute the influence of any single extreme season, and the fitted coefficients are pulled toward the league mean unless a predictor perfectly explains the target [PAGE 8–9]. Ja’Marr Chase’s 2025 projection of 11.03 TDs, down from his 2024 production, is an explicit institutionalization of regression to the mean rather than a chase of the peak [PAGE 15–16].

The counter-trap is the possibility that the model’s own corrective—efficiency and rolling averages—becomes a new source of systematic error. Catch rate and yards per game are treated as stable traits, but they are context-dependent: they are co-produced with quarterback play, offensive scheme, and red-zone design. If those contexts shift, the “stable efficiency” is an artifact of the previous regime, and the model will confidently project touchdowns using invalidated coefficients. The paper acknowledges this limitation by noting the absence of quarterback stability and scheme variables [PAGE 16, PAGE 18–19]. Thus the counter-trap is recursive: the model escapes naive recency bias only to fall into context-stationarity bias.

The clock is the temporal boundary that defines what the model can know. Training ends in 2010; testing spans 2011–2024; all features are computed strictly from prior seasons to prevent leakage [PAGE 10]. The 2025 projections are generated from 2024 data, meaning the model’s clock stops at the conclusion of the 2024 season. It cannot incorporate offseason trades, coaching hires, injuries, or rookie minicamp reps. The recursion closes as follows: the model emits a projection → front offices or analysts act on that projection (e.g., contract decisions, draft capital allocation, target expectations) → actual 2025 usage diverges from the 2024-conditioned feature assumptions → the projection’s error is realized ex post. The model has no feedback loop to update mid-season because it is a static, preseason linear regression with no in-season updating mechanism described in the source [PAGE 15–16, PAGE 18].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The model’s output is not epistemically sovereign; several external layers can veto its projections regardless of statistical fit.

Physical layer: durability is represented by games played [PAGE 10], but injury history is explicitly absent [PAGE 18]. A season-ending injury sustained in the offseason or preseason is a physical veto that renders all 2024-derived usage features irrelevant. Because the target is season-total touchdowns, a player who misses all games must realize zero touchdowns, whereas the model may project 7–11 TDs based on prior durability and efficiency.

Biomechanical layer: age and age-squared are included as player traits, as are prime-age and rookie/sophomore flags [PAGE 9], but there is no interaction term between age and usage, no snap-count decay function, and no biomechanical decline curve tied to position-specific wear. A 29-year-old receiver (e.g., Terry McLaurin at age 29 in the 2025 projection table [PAGE 15]) may enter a steep decline phase that the quadratic age term cannot capture if the relationship between age and touchdown production is non-quadratic or conditional on snap volume.

Environmental layer: weather is not present in the source data or feature list. Temperature, wind, precipitation, and dome versus outdoor conditions affect passing-game efficiency and red-zone scoring probability, yet the model contains no meteorological covariates. Because the data are aggregated to season level [PAGE 7], weather effects are averaged away rather than modeled, which is a veto risk for receivers in outdoor cold-weather venues whose December red-zone efficiency may diverge from their season average.

Adversarial layer: opposing defensive matchup strength and defensive rankings were not incorporated [PAGE 18]. A shutdown cornerback assignment or a defensive scheme designed to eliminate red-zone targets is an external veto that can suppress a high-projection receiver’s touchdowns independent of his catch rate or yards per game.

Adjudication rule: when any of these physical, biomechanical, environmental, or adversarial vetoes is active, the model’s linear projection is subordinate to the veto condition. The model has no mechanism to down-weight a projection for an injured player or to adjust for a new quarterback; therefore its error on vetoed cases is bounded below by the magnitude of the veto itself. The paper’s own examples—new quarterbacks for Jefferson and London, rookie competition for Thomas—are precisely such veto cases that fall outside the current feature set [PAGE 16].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Offseason season-ending injury). Veto condition: a WR ranked in the model’s top-10 2025 projections suffers a season-ending injury before Week 1 and plays zero games. The model’s feature set includes 2024 games played and 2024 performance but cannot encode a future injury because injury history is not an input [PAGE 18]. Prediction: the projected TD total (e.g., Ja’Marr Chase at 11.03 TDs [PAGE 15]) is vetoed to 0 actual TDs; the player-level absolute error is 11.03 TDs, and this single case increases test-set MAE by 11.03/N TDs where N is the number of projected player-seasons. The failure is verifiable via official injury and game-participation records and is attributable to the missing injury layer, not to coefficient instability.

Scenario 2 (Starting-quarterback replacement). Veto condition: a projected WR’s starting quarterback from 2024 is replaced before the 2025 season, invalidating the QB-WR chemistry embedded in catch rate, target share, and red-zone efficiency features. The paper explicitly flags this risk for Justin Jefferson and Drake London, who will play with new quarterbacks [PAGE 16]. Prediction: efficiency-based projections for these receivers systematically overestimate actual 2025 touchdowns because the 2024 catch-rate and TD-per-target statistics were produced under a different passing-game regime. Actual TDs fall below projection by at least 1 TD for the affected players; the model’s R² on the subset of QB-changed receivers degrades relative to the full-test-set R² of 0.803 [PAGE 13]. This is verifiable by comparing projected vs. actual TDs for receivers with documented QB changes.

Scenario 3 (Rookie target-share dilution). Veto condition: a high-draft rookie enters the same offense and position group as an incumbent projected WR, splitting target volume. The paper gives the example of Brian Thomas facing competition from rookie teammate Travis Hunter [PAGE 16]. The model’s lag features assume role stability from 2024 to 2025 and contain no roster-move or draft-capital variables [PAGE 18]. Prediction: Thomas’s actual 2025 TD total is below his 8.52-TD projection [PAGE 15], with the shortfall proportional to the reduction in target share induced by the rookie. The model cannot anticipate this because the 2025 depth chart is outside the temporal boundary of the features. Verification comes from comparing Thomas’s actual targets and TDs against the projection and against receivers without same-position rookie competition.
</RLVR_COUNTERFACTUAL_VETOES>