---
source: "2011 An_Improved_Adjusted_Plus_Minus_Statististic - McDonald.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 8
model: deepseek/deepseek-v4.1-flash-1017
words: 8496
---

<NATIVE_REASONING>
We need answer user. Need produce GSE + GSI Frontier Reasoning Foundry with exact XML sections, >=1000 words, zero betting lines. Need analyze source. They ask "DRIVE SOURCE..." likely wants deep research analysis. Need comply strict invariants. Need cite [PAGE N] markers and verbatim quotes when source pages provided. Must avoid betting lines. Need no spreads/totals/moneylines/odds. Need formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes. Need exact XML sections:

<THINK_TRACE> >=400 words deep multi-hop derivation & gray-zone audit.
<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown.
<RETROCAUSAL_GENEALOGY> Historical/scientific lineage & multi-week traps.
<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock.
<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof.
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

Need include source quotes exact. Need perhaps mention no sports betting. Need maybe construct formulas from paper: weighted least squares regression, shift weighted by duration. Dependent variable? It doesn't explicitly say y? Need infer: goals? In model, coefficients goals per 60. Weighted by duration. For each shift, two observations, offensive output home/away. y likely goals scored during observation? Need be careful. The source says "Each observation is weighted by duration of shift"; coefficients interpretations goals per 60 minutes. Model includes beta offensive skater, delta defensive skater, gamma goalie. Need formulate y_{i,t}? Could define observation for team side. Need include zone indicators Z_off^ev, Z_def^ev. Special teams model with PP and SH terms.

Need cite pages. Page 2 has notation table. Page 3 has definitions, equations maybe garbled. Page 4 special team equation, aggregation formulas. Page 5 tables and Sedin collinearity. Page 6 standard errors ranges quote. Page 8 tables.

Need discuss gray-zone audit: multicollinearity, identifiability, line combinations, small special teams sample, initial zone confound, goalie effects, minutes conversion, standard errors, sample 2007-08 through 2009-10, lack regularization. Need mention "singularity/breakdown regimes": if players always together, design matrix columns nearly linearly dependent; OLS variance inflates; Sedin example: Daniel spent 92% EV and 98% PP with Henrik [PAGE 5]. Also if all shifts start faceoff? zone indicators collinear? If power play units stable? If player has zero minutes in PP/SH, coefficient undefined; if goalie no exposure, etc. If shift begins not faceoff, zone indicators zero? There is no neutral zone? Actually Z_off=1 if shift begins with faceoff in offensive zone, Z_def likewise. If faceoff in neutral? Both zero. Need mention omitted category (defensive zone? They only include offensive and defensive; if neutral/on-the-fly? The baseline includes all else). Need quote.

Need maybe provide exact equations:
For even strength:
\( y = \beta_0^{ev} + \sum_{j=1}^J \beta_j^{ev} X_j^{ev} + \sum_{j=1}^J \delta_j^{ev} D_j^{ev} + \sum_{k=1}^K \gamma_k^{ev} G_k^{ev} + \theta_{off}^{ev} Z_{off}^{ev} + \theta_{def}^{ev} Z_{def}^{ev} + \epsilon \)
Need source uses phi? It appears ߞ maybe theta? We can denote \(\theta\). Coefficients beta hats etc.

Weighted least squares objective:
\[
\hat{\mathbf b} = \arg\min_{\mathbf b} \sum_i w_i (y_i - \mathbf x_i^\top \mathbf b)^2,\quad w_i = \Delta t_i
\]
with units: y_i is goal count per observation? If y_i is goals in shift segment, beta per 60 min. But if y is count and weights duration, coefficient dimension? Let's derive: If y_i = goals scored in observation (count), regress on indicators (dimensionless) weighted by duration \(w_i = \Delta t_i\) (minutes). Coefficient beta dimension? For WLS, objective sum Δt (goals - beta)^2 has units min*goals^2, derivative gives beta in goals? Actually if y is goals in shift (not rate), beta estimated as goals per shift? But paper says goals per 60 minutes. They might use y = goals per minute? Let's reason. If y_i is "offensive output" maybe goals scored during shift / duration? If dependent variable is goals per 60? The model says coefficients goals per 60 minutes. For each shift two observations, weighted by duration. If y_i = number goals in that shift, and weight duration, coefficient for indicator is event rate? Let's derive WLS with y_i count over interval Δt_i. If model y_i = Δt_i * (linear predictor) + error? But written y = beta0 + ... not multiplied. Alternatively if y_i = goals/60? If y_i is "goals per 60 minutes" for shift, then if goal occurs, y=60/Δt; weighted by Δt? Then coefficient maybe goals per 60. Need not over-specify. Source doesn't define y explicitly. We can state source omits explicit y definition/scaling; for dimensional consistency, one can interpret y_i as a goal rate for the observation or use offset \( \Delta t_i \). But must avoid inventing? Need formal with assumption. We can include "Assuming the paper's implied scaling that \(y_i\) is the observed goal count divided by \(\Delta t_i/60\)" maybe. But maybe not.

Let's read source: "Each observation is weighted by duration of shift. The coefficients ... goals per 60 minutes". This suggests y is goals per 60 minutes? Maybe for each shift, if goal occurs, y = 60 / shift length? Hmm.

Could phrase: "The manuscript does not print the exact response scaling; the stated coefficient interpretation implies the response is expressed on a per-60-minute scale, or equivalently an exposure offset of Δt/60 is absorbed into the weighted fit. Under either implementation, \hat β_j has units goals (60 min)^{-1}." This is a gray-zone audit. Need cite page 3 quote.

Need include information/probability units: Standard errors AErr in goals per season? Tables show APM etc in goals per season; per 60 in goals/60. AErr "standard error in APM estimates" probably goals per season. We can use units: goals, minutes, goals per 60 min, goals per season. Information? Could define Fisher information matrix \(I(\mathbf b) = \sigma^{-2} X^\top W X\) with units? If X dimensionless and W minutes, I units min/(goal^2) if σ goals. But maybe not necessary. Invariant says SI/information/probability units. Need mention probability units for RLVR maybe? We can mention "information units are inverse variance of goal-rate estimates". But not fake ratios. Need no toy equations like Force/Fatigue. We can state equations have units.

Need maybe include "Crisis habit regression vs counter-trap vs clock" section. This is from prompt; likely wants sports modeling with "recursive theory of mind" about habits/regression/counter-trap/clock. Need adapt to paper: not betting, but model evaluation: crisis habit = defaulting to traditional plus-minus or star narratives; counter-trap = overcorrecting by overfitting/regularization or using raw zone starts; clock = temporal leakage / using future seasons? Need include. Must avoid betting lines. We can discuss "clock" as time-on-ice exposure, shift duration, season windows. Good.

Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need proof that physical/biomechanical/weather layers veto APM? We can state APM is observational regression, no physical biomechanical sensor, weather irrelevant to indoor NHL; so weather veto cannot adjudicate player quality; biomechanical layer vetoes claims when injury/line chemistry/ice conditions? Need provide proof: model only sees shift indicators and goals; no biomechanical load, skating speed, injury status, weather. If any claim about "causal physical superiority" from APM, veto because omitted variables. Need cite page 3 data from NHL.com shift reports. Need be careful: "weather veto proof" maybe in context of outdoor games? We can say indoor arena conditions not in model; weather cannot be inferred. Need no fake equations. Could formalize omitted-variable bias: \( \hat\beta = \beta + (X^\top W X)^{-1}X^\top W \eta\) if omitted \(\eta\) (biomechanical load, matchup, score state) correlated with X. That's formal and not fake. Units: beta goals/60, eta goals/60. Good.

Retrocausal genealogy: historical/scientific lineage & multi-week traps. Need trace APM from NBA Rosenbaum, Ilardi/Barzilai, Sill regularization, MacDonald previous NHL APM [5], shot quality Krzywicki, Schuckers AMPP. Multi-week traps: using only one season, small special teams samples, Sedin collinearity, standard errors, zone starts, score effects, goalie effects. Need cite page 7 references and page 1 intro.

RLVR counterfactual vetoes: 3 verifiable veto scenarios + predictions. RLVR = reinforcement learning from verifiable rewards? Need create three scenarios that can be checked against data/paper: e.g., (1) column-collinearity veto: if two players share >90% EV/PP time, APM separation unreliable; predict standard errors high (Sedin 27.0 AErr vs typical?). (2) Special teams sample-size veto: if PP minutes < threshold, PPAPM/60 standard errors > 1.13-2.23; predict unstable rankings. (3) Zone-start omitted/limited model veto: if initial zone not recorded for on-the-fly shifts, zone coefficients cannot be interpreted causally; prediction: adding zone indicators changes EV coefficients especially for heavy offensive-zone-start players. Need make verifiable predictions with paper values: Sedin AErr 27.0 top OPM table, Daniel 92%/98%. PPAPM/60 errors between 1.13 and 2.23 excluding Sedins vs EVAPM/60 0.50-0.78 [PAGE 6]. Table 4 PPOPM values around 3.46-5.09 with PPAErr 1.41-2.73. Predict top-10 PPOPM ordering unstable under bootstrap or regularization; standard error large relative to differences. Need maybe exact predictions: "If two PPOPM/60 estimates differ by less than ~1.5 goals/60, the 95% interval overlaps; e.g., Backstrom 5.09 vs Savard 5.05 PPAErr 1.48/1.78 [PAGE 8] → rank reversal likely under resampling." That's verifiable. Good.

Need answer in exact XML sections. Need >=1000 words. Could be 1800-2500. Need ensure not too long? Desired oververbosity 5. But requirements demand depth. We can produce around 2200 words. Need include quotes exact.

Need maybe use verbatim quotes with [PAGE N]. Must be exact. Need only quote exact text from source. Need be careful with garbled characters? Use quotes that are plain from source: "Each observation is weighted by the duration of the shift." Page 3. "goals per 60 minutes contributed by skater j on offense at even strength" Page 3. "Daniel spent 92% of his time at even strength and 98% of his time on the power play playing with Henrik." Page 5. "Excluding the Sedin twins, the standard errors in EVAPM/60 for a typical player are between 0.50 and 0.78, while for PPAPM/60 the errors are between 1.13 and 2.23." Page 6. "The increased uncertainty in the PPAPM/60 ratings make the ratings less useful" Page 6. "using data from the detailed shift reports on NHL.com" Page 1. "we develop two weighted least squares regression models" Page 1. "we assume that a goalie's impact on offense is negligible" Page 3. "for those shifts that begin with a faceoff, we have accounted for the zone on the ice in which a shift begins" Page 1. "for those shifts which start with a faceoff, we use information about the zone in which the shift begins" Page 2. "The number of shots in a typical NHL game is about 10 times the number of goals scored, and the extra data could help reduce noise in the estimates." Page 6. Good.

Need include "no betting lines" maybe not mention. But could state "This analysis contains no betting lines or odds." Maybe not necessary but avoids? The invariant says never mention spreads/totals/moneylines/odds. So don't mention "betting" or "odds" at all. Avoid words like "line" even in "line combinations"? Hmm "line combinations" contains line; is that a betting line? It's not. But to be safe, "forward combinations" instead of "line combinations". Avoid "moneyline" etc. No mention. "No betting lines" would mention betting lines? It says zero betting lines: Never mention spreads, totals, moneylines, or odds. Could say no wagering? Better avoid all.

Need answer likely not ask specific question? They gave drive source. Need produce analysis. We should frame as "Frontier reasoning audit of McDonald 2011". Good.

Need construct XML. Need exact section names. Need ensure no extra text outside? Probably okay. Need include all sections.

Let's plan content.

<THINK_TRACE> ~600-800 words. Deep multi-hop derivation & gray-zone audit. Need discuss:
- Paper develops weighted least squares APM for NHL, two models: even strength modified with initial-zone indicators; special teams with PP and SH variables. Data 2007-08 to 2009-10 from NHL.com shift reports. Coefficients offensive/defensive per 60. Aggregation to per-season via minutes.
- Derivation: design matrix rows for each shift-side observation; regressors indicator of skater on offense/defense, goalie, zone begin. Weighted by shift duration. Least squares normal equations \( (X^\top W X)\hat b = X^\top W y\). β hats. Multicollinearity if columns co-move. Gray zones: response scaling not explicit, intercept absorbs baseline, zone indicators only for faceoff starts, special teams small sample, goalie offense negligible, standard errors. Identifiability: columns for players who always play together; Sedin example. Singularity regimes: exact collinearity -> \(X^\top W X\) singular; near collinearity -> variance inflation. Special teams: if player never on PP, coefficient not estimable or zero exposure; if all PP shifts same unit, PPOPM confounded with unit. Zone indicators: if all shifts start with offensive zone faceoff for some unit? Still. Conversion: PPOPM = (PPOPM/60 /60)*PP minutes? Paper says divide by 60 and multiply by minutes. Need quote. Hmm actually "To get a player's PPOPM, we can divide his PPOPM/60 by 60 and multiply by his minutes played per season on the power play." That's dimensionally goals per 60 * min / 60 = goals. Good. But in tables PPOPM values are per season? Table 4 header PPOPM, values 5.09; PPMins 312. If PPOPM/60 = 5.09? Wait table 4 says PPOPM/60 top. Values 5.09 goals per 60. Then PPOPM per season = 5.09/60*312=26.5 goals. But table 4 header PPOPM? Actually page 8 Table 4: "Top 10 Skaters in PPOPM/60" but columns PPOPM, PPDPM, PPAPM. It may be per 60. Values 5.09 plausible per 60. Table 2 OPM values 37.8 per season; EVOPM in Table 3 maybe per season? Wait Table 3 has OPM 47.8, EVOPM 29.9, PPOPM 17.8. If per season, PPOPM 17.8 / 309 min *60 =3.46. Ah Table 3 PPOPM per season; Table 4 PPOPM/60. Page 8 Table 4 columns PPOPM? The header says top 10 in PPOPM/60 but column labels PPOPM; values 5.09 likely per 60. Yes. Need note table labels ambiguity: page 8 column says PPOPM but table title says PPOPM/60; same for SHDPM/60. Gray-zone audit: unit labeling in appendix needs careful interpretation. Good.

Need include "AErr" standard error in APM estimates, APM in goals per season; per 60 errors around 0.50-0.78 vs 1.13-2.23. Good.

<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX. Need include equations with page citations and breakdown. Could list:
1. Even strength full model with initial zone. Use \(J\) skaters, \(K\) goalies.
\[
y_i=\beta_0^{ev}+\sum_j \beta_j^{ev}X_{ij}^{ev}+\sum_j \delta_j^{ev}D_{ij}^{ev}+\sum_k \gamma_k^{ev}G_{ik}^{ev}+\theta_{\rm off}^{ev}Z_{i,\rm off}^{ev}+\theta_{\rm def}^{ev}Z_{i,\rm def}^{ev}+\epsilon_i.
\]
Cite [PAGE 3]. Definitions: \(X_j^{ev}=1\) if skater j on offense and EV during observation; etc. Quote. Units: \(y_i\) response on per-60 goal scale? \(\beta,\delta,\gamma,\theta\) goals per 60 min. Need mention if y is count then offset. But paper says coefficients goals per 60. Keep.

2. Special teams:
\[
y_i=\beta_0+\sum_j \beta_j^{pp}X_{ij}^{pp}+\sum_j \delta_j^{pp}D_{ij}^{pp}+\sum_k \gamma_k^{pp}G_{ik}^{pp}
+\sum_j \beta_j^{sh}X_{ij}^{sh}+\sum_j \delta_j^{sh}D_{ij}^{sh}+\sum_k \gamma_k^{sh}G_{ik}^{sh}
+\theta_{\rm off}Z_{i,\rm off}+\theta_{\rm def}Z_{i,\rm def}+\epsilon_i.
\]
Cite [PAGE 4]. Note goalie only defense; quote "we assume that a goalie's impact on offense is negligible" [PAGE 3]. Units.

3. WLS estimator:
\[
\hat{\mathbf b}=\arg\min_{\mathbf b}\sum_{i=1}^{n}w_i(y_i-\mathbf x_i^\top\mathbf b)^2,\quad w_i=\Delta t_i,
\]
\[
(X^\top W X)\hat{\mathbf b}=X^\top W y,\quad W=\operatorname{diag}(\Delta t_i).
\]
Cite [PAGE 3] quote. Units: \(w_i\) minutes; \(y_i\) response; b goals/60. Need maybe note if y is goals per 60. The paper doesn't write objective, so "implied by". It says "weighted least squares regression models" [PAGE 1] and "Each observation is weighted by the duration of the shift" [PAGE 3]. We can label as formalization of the paper's stated WLS, not source equation.

4. Aggregation:
\[
\text{OPM}=\text{EVOPM}+\text{PPOPM}+\text{SHOPM}
\]
\[
\text{DPM}=\text{EVDPM}+\text{PPDPM}+\text{SHDPM}
\]
\[
\text{APM}=\text{EVAPM}+\text{PPAPM}+\text{SHAPM}=\text{OPM}+\text{DPM}
\]
Cite [PAGE 4]. Conversion:
\[
\text{PPOPM} = \frac{\text{PPOPM/60}}{60}\times \text{PP minutes per season}
\]
Cite [PAGE 4]. Units.

5. Variance/collinearity: 
\[
\operatorname{Var}(\hat{\mathbf b})=\hat\sigma^2(X^\top W X)^{-1}
\]
or WLS covariance \( \hat\sigma^2 (X^\top W X)^{-1} X^\top W^2 X (X^\top W X)^{-1}\) if heteroskedastic? For OLS/WLS under homoskedastic weighted, simpler. Need not overdo. Use to explain standard errors. Singularity if \(\operatorname{rank}(X^\top W X)<p\). Near collinearity if condition number \(\kappa(X^\top W X)\) large. Breakdown: exact collinearity from players always together; near collinearity from Sedin 92/98. Predict high AErr 27.0. Good.

Need maybe mention "AErr" values in Table 2 Datsyuk 20.9 etc are goals per season. Sedin 27.0 [PAGE 5]. Good.

Need include "assumptions" list: linearity in goal-rate; additivity; no interactions except zone indicators? Actually model additive; no teammate interactions; no score-state; no injury; no home/away? For each shift two observations home/away; intercept maybe. Need mention.

<RETROCAUSAL_GENEALOGY> ~300-500 words. Historical lineage: traditional plus-minus → NBA APM (Winston, Rosenbaum, Ilardi/Barzilai, Sill) → MacDonald NHL APM [5] → current paper adds special teams and initial zones → shot quality Krzywicki and AMPP Schuckers as future data expansion. Need cite [PAGE 1] and [PAGE 7]. Multi-week traps: overinterpreting one season; not waiting for standard errors; treating special teams top-10 as stable; ignoring unit collinearity; converting per-60 to per-season without checking minutes; ignoring zone start; treating goalie effect as skater defense; comparing across eras. "Retrocausal" maybe means how future methods (regularization, shot-quality weighting) would retroactively alter earlier conclusions. Multi-week traps: after 2-4 weeks of data, special teams samples tiny; rankings noisy. Need include "the model's own author says priority future research is to reduce errors" quote [PAGE 6]. Good.

<RECURSIVE_THEORY_OF_MIND> ~300-500 words. Crisis habit regression vs counter-trap vs clock. Interpret as analyst behavior. Crisis habit: when a star is omitted from APM top-10, revert to narrative; or when Sedin ranks high but high error, ignore uncertainty. Counter-trap: overreact by banning APM or overfitting regularization, or overinterpreting zone starts as causal; use "weighted shots" without validating. Clock: shift duration and minutes; time-on-ice exposure; season clock 2007-2010; special teams clock small; need recursive updating. Need maybe mention "Theory of mind" of players/coaches? Coaches allocate zone starts and PP time based on perceived ability; that creates selection and feedback. Player behavior adapts to role; model observes outcome. Counter-trap: using APM to judge player then coach changes usage, altering future APM. Good. Need cite Sedin and Burrows/Kesler. Quote Burrows leads SHDPM/60; Kesler finalist; Burrows ranks higher [PAGE 6]. This shows role/teammate context. Need not mention betting.

<CROSS_LAYER_VETO_ADJUDICATION> ~300-500 words. Physical/biomechanical/weather veto proof. Need "veto proof" maybe establish if cross-layer claims are allowed. We can state APM cannot veto physical/biomechanical/weather claims because no such variables. It can be vetoed by them: if player injured or ice quality changed, regression's stable coefficient not causal. Formal omitted variable bias:
\[
\hat\beta = \beta + (X^\top W X)^{-1}X^\top W \eta
\]
where \(\eta\) includes biomechanical load, injury, matchup, score state. If \(\eta\) correlated with X, bias. Weather: NHL indoor; outdoor game conditions not in data; if weather affects shift reports? No. Need cite data source "detailed shift reports on NHL.com" [PAGE 1] and "2007-08, 2008-09, and 2009-10 seasons" [PAGE 3]. Proof: model has only X,D,G,Z indicators; no sensor, no weather. Therefore any physical causal claim is underdetermined. Veto conditions: (a) injury absence not encoded, (b) ice/weather only if outdoor, (c) biomechanical load not measured. Need maybe mention "goalie impact on offense negligible" is assumption not physical proof [PAGE 3]. Good.

<RLVR_COUNTERFACTUAL_VETOES> ~400-600 words. 3 scenarios with predictions. Need maybe "RLVR" define? We can say "verifiable reward vetoes" but not necessary. Need 3 verifiable scenarios:
1. Co-usage collinearity veto: If two skaters share >90% EV and >95% PP exposure, model cannot separate. Verify with Sedin: quote. Prediction: AErr for such pairs > 20 goals/season or highest among forwards; rank ordering between pair can flip under bootstrap; individual EVOPM/PPOPM should be reported with intervals and not used as standalone. Paper: Henrik AErr 27.0 [PAGE 5], Daniel 92/98 [PAGE 5]. Good.
2. Special-teams sample-size veto: For PPAPM/60, standard errors 1.13-2.23 vs EV 0.50-0.78 [PAGE 6]. Prediction: differences < ~1.5 goals/60 among top PPOPM/60 not statistically distinguishable; top-10 Table 4 (Backstrom 5.09, Savard 5.05, etc) should show rank instability; PPAErr values 1.41-2.73 [PAGE 8]. If resampled by shift or season, top ranks vary. Veto any claim "Backstrom definitively better than Savard on PP" from Table 4 alone. Good.
3. Zone-start causal veto: The model includes \(Z_{\rm off}, Z_{\rm def}\) only for shifts starting with faceoff [PAGE 2/3]. Prediction: For players with high offensive-zone faceoff share, EVOPM estimates will shift when zone indicators are added; but because on-the-fly shifts have both indicators zero, cannot infer total zone-start causal effect. Verifiable: compare model with/without zone indicators; if coefficient changes beyond standard error for heavy OZ players, veto causal "player drives offense" claim. Maybe use Datsyuk EVAPM 42.2, etc? Not necessary. Need cite quote "for those shifts that begin with a faceoff" [PAGE 1]. Good.

Need maybe include "Predictions" each: specific numeric thresholds and expected outcomes. Ensure no betting lines. Fine.

Need be mindful exact XML: Use sections start/end. No markdown? XML tags okay. Inside can use LaTeX. Need escape? XML text can include < >? We use \( \) not < >. Ampersand? Avoid & or escape &amp;. Use "and" instead of &. Need no raw <. Use \(\). Use [PAGE N]. Good.

Need word count. Let's craft.

Need ensure ">= 1,000-word depth across these exact XML sections" means total across. We'll do >2000.

Potential issue: "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX, units, page citations, breakdown. Need include exact equation representation. Use \(\hat{\beta}_{j}^{ev}\) etc.

Need quote exact lines. Let's collect quotes:
- Page 1: "we develop two weighted least squares regression models to estimate an NHL player's effect on his team's success in scoring and preventing goals, independent of that player's teammates and opponents."
- Page 1: "Our initial work focused on even strength situations, excluding situations in which one team had pulled their goalie."
- Page 1: "for those shifts that begin with a faceoff, we have accounted for the zone on the ice in which a shift begins."
- Page 2: "For each player, the models will give an offensive and defensive component of APM per 60 minutes for even strength, power play, and shorthanded situations separately."
- Page 3: "A shift is considered to be a period of time on the ice when no substitutions are made."
- Page 3: "Each observation is weighted by the duration of the shift."
- Page 3: "The data comes from the detailed shift reports on NHL.com for games played during the 2007-08, 2008-09, and 2009-10 seasons."
- Page 3: "goals per 60 minutes contributed by skater j on offense at even strength"
- Page 3: "we assume that a goalie's impact on offense is negligible"
- Page 4: "To get a player's PPOPM, we can divide his PPOPM/60 by 60 and multiply by his minutes played per season on the power play."
- Page 4: equations OPM etc.
- Page 5: "Daniel spent 92% of his time at even strength and 98% of his time on the power play playing with Henrik."
- Page 5: "The high errors are due to the fact that the twin brothers spend almost all of their time on the ice playing together, and the model has difficulty separating the contribution of the two players."
- Page 6: "Excluding the Sedin twins, the standard errors in EVAPM/60 for a typical player are between 0.50 and 0.78, while for PPAPM/60 the errors are between 1.13 and 2.23."
- Page 6: "The increased uncertainty in the PPAPM/60 ratings make the ratings less useful, and a priority in future research is to take measures to reduce errors for all estimates."
- Page 6: "The number of shots in a typical NHL game is about 10 times the number of goals scored, and the extra data could help reduce noise in the estimates."
- Page 8 table values.

Need maybe quote page 4 special teams equation not easily. We can quote "each skater will have four variables" page 3. Good.
- Page 3: "Instead of having two variables in the model for each skater, like we did in the even strength model, each skater will have four variables."
- Page 3: "Skaters will have two variables for offense and defense during power play situations, and two variables for offense and defense during shorthanded situations."
- Page 3: "Each goalie will have two variables, one for defense during power plays, and one for defense during shorthanded situations."

Need mention page 8 Table 4 PPAErr values; quote maybe "Table 4: Top 10 Skaters in PPOPM/60" and values. We can cite [PAGE 8] without quote? Requirement "cite exact [PAGE N] markers and verbatim quotes" when source pages provided. It doesn't require quote every citation, but include verbatim quotes. We'll include.

Need avoid "odds" word. Avoid "spread" maybe "spread" appears? Not. Avoid "line" except "lineage" contains line? "lineage" includes line but not betting. Fine. "forward combinations" not "lines". "top-line" avoid. "baseline" okay.

Need maybe mention "SI units" explicitly: seconds/minutes, goals, goals per 60 minutes. Information units: standard error squared = inverse Fisher information; probability? We can mention "all probabilities are dimensionless [0,1]; shot-quality weights would be probabilities." But paper doesn't use probability except shot quality future. We can say in equations, \(Z\) are dimensionless Bernoulli indicators; \(y\) and coefficients have goal-rate units; \(w\) has time units; standard errors same as coefficient. That satisfies.

Need maybe discuss "singularity/breakdown regimes" explicitly: exact singular if \(X^\top W X\) not invertible due to duplicate columns or players with identical exposure; near-singular when correlation ~1; zero-exposure columns; all shifts same team? Intercept? If all observations same side? But home/away two per shift. Goalie variables: if goalie plays all minutes with same skater? Maybe. Zone indicators collinear with certain player if all their shifts start in OZ? Not exact unless constant across all rows. Special teams: if PP units never change, individual PP coefficients not identified separately from unit effect; but model has each player; exact collinearity if two players always on same PP unit and same SH? Yes. Need mention regularization (Sill) could address.

Need maybe include "weighted least squares" with two observations per shift; home/away. Need formal set: \(i=(s,t)\) where \(s\) shift and \(t\in\{home,away\}\). \(y_{s,t}\) goals scored by team side? The model has each shift two observations one for home offensive output and one for away. The same shift appears twice with offense/defense indicators swapped. Need mention. Good.

Need maybe include "offensive and defensive variables" for skaters; \(X_j\) and \(D_j\); goalie \(G_k\). Good.

Need answer not too meta? It asks "DRIVE SOURCE..." maybe expects "sports research paper analysis". We'll give audit.

Let's draft carefully.

Potential issue with XML: tags contain underscores okay. Need use exact: <SOURCE_OPERATORS_AND_EQUATIONS> etc. Need no unescaped & in "EV+PP+SH" maybe plus. Avoid &.

Let's write with paragraphs. Need include LaTeX. Use \( \) inline. Use \[ \] display. XML text can include backslashes. Good.

Need maybe include "PAGE 3" quote with quotes. Use quotation marks.

Let's ensure no "odds". "Standard error" okay.

Need maybe include "AErr" not "error" as uncertainty. Good.

Let's draft THINK_TRACE around 700 words. Need "multi-hop derivation & gray-zone audit". Use words not too verbose but deep. Let's produce.

Need maybe mention "the manuscript's two models are not causal identification strategies; they are additive exposure regressions." Important.

Need maybe mention "the initial-zone regressors are only for faceoff starts, so baseline includes on-the-fly and neutral-zone faceoffs; thus coefficient is not total zone effect." Good.

Need maybe mention "special teams model includes Z_off/Z_def without superscript? It includes zone indicators in special teams model too; page 4 equation has phi_off Z_off + phi_def Z_def. It doesn't specify if zone variables same for special teams. Page 2 says include this info in special teams model. Good.

Need maybe mention "per-season conversion uses playing time; if a player has low PP minutes, per-season PPOPM shrinks mechanically even if per-60 high." Good.

Need maybe mention "goalie offensive impact negligible is an assumption; goalie defensive coefficient confounds team defense and shot quality." Good.

Need maybe mention "standard errors are large relative to player differences; Datsyuk AErr 20.9 vs APM 52.2; Getzlaf 19.6 vs 45.8; many intervals overlap." Good.

Need maybe include exact numeric examples: Top APM Datsyuk 52.2, AErr 20.9; Getzlaf 45.8, AErr 19.6; Carter 45.3, AErr 15.7; etc. Overlap. This is good gray-zone audit. But avoid too much.

Need maybe mention Table 3 Henrik OPM 47.8, DPM -13.9, APM 33.8, AErr 27.0; high error. Good.

Need maybe mention "AErr in Table 2 is standard error in APM estimates (goals per season), not per 60." Page 4 says AErr? "AErr is the standard error in the APM estimates" [PAGE 4]. Use.

Need maybe include "The paper's own conclusion: special teams results reasonable but noisier; future research reduce errors" [PAGE 6]. Good.

Now final. Need maybe not include markdown headings besides XML. We can include paragraphs.

Let's answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s core inferential move is to replace raw plus-minus with an additive exposure regression in which a shift-side observation is explained by indicators for which skaters are on offense, which skaters are on defense, which goalie is defending, and — for faceoff-starting shifts — whether the shift began in the offensive or defensive zone. The manuscript states that “we develop two weighted least squares regression models to estimate an NHL player's effect on his team's success in scoring and preventing goals, independent of that player's teammates and opponents” [PAGE 1]. That is the central claim to audit: independence from teammates and opponents is conditional on the design matrix and the additive model, not guaranteed by the word “adjusted.”

Multi-hop derivation: first, each shift is split into two observations, one for the home team’s offensive output and one for the away team’s offensive output; “A shift is considered to be a period of time on the ice when no substitutions are made” and “Each observation is weighted by the duration of the shift” [PAGE 3]. Second, the even-strength model assigns each skater an offensive coefficient \(\beta_j^{ev}\) and a defensive coefficient \(\delta_j^{ev}\), and each goalie a defensive coefficient \(\gamma_k^{ev}\). The coefficients are explicitly interpreted as “goals per 60 minutes contributed by skater \(j\) on offense at even strength” [PAGE 3]. Third, the special-teams model gives each skater four variables rather than two: “each skater will have four variables” for power-play offense, power-play defense, shorthanded offense, and shorthanded defense, while “Each goalie will have two variables, one for defense during power plays, and one for defense during shorthanded situations” [PAGE 3]. Fourth, the paper converts per-60 estimates to per-season estimates using minutes: “To get a player's PPOPM, we can divide his PPOPM/60 by 60 and multiply by his minutes played per season on the power play” [PAGE 4]. The aggregate identities are OPM = EVOPM + PPOPM + SHOPM, DPM = EVDPM + PPDPM + SHDPM, and APM = OPM + DPM [PAGE 4].

Gray-zone audit: the model is a linear exposure model with no explicit interactions between teammates, no score-state variable, no injury or fatigue state, no shot-quality covariate, and no direct biomechanical measurement. Its data source is narrow: “The data comes from the detailed shift reports on NHL.com for games played during the 2007-08, 2008-09, and 2009-10 seasons” [PAGE 3]. That makes the coefficients best read as regularized-by-usage descriptive rates, not clean causal effects. The initial-zone adjustment is also partial: the paper says “for those shifts that begin with a faceoff, we have accounted for the zone on the ice in which a shift begins” [PAGE 1], so on-the-fly shifts and non-faceoff starts are not assigned a zone-start category. The model’s zone coefficients therefore answer a narrower question than “total zone-start effect.”

The most important singularity regime is co-usage collinearity. If two players are almost always on the ice together, their indicator columns are nearly identical, so the weighted cross-product matrix \(X^\top W X\) is ill-conditioned. The paper itself gives the canonical example: “Daniel spent 92% of his time at even strength and 98% of his time on the power play playing with Henrik” and “The high errors are due to the fact that the twin brothers spend almost all of their time on the ice playing together, and the model has difficulty separating the contribution of the two players” [PAGE 5]. In exact form, if two columns are identical, \(X^\top W X\) is singular and the individual coefficients are not estimable without a constraint or regularization. In near-singular form, the covariance matrix inflates and the standard errors become large. That is not a minor technicality; it is the difference between a player-specific claim and a unit-specific claim. The same problem can occur for stable power-play units, stable defensive pairings, and goalie-team confounding.

A second gray zone is response scaling and units. The paper states the coefficients are goals per 60 minutes, but the printed regression equation does not spell out the exact response construction. For dimensional consistency, the analyst must treat the response and the weights as an exposure model: if \(y_i\) is a goal count over a shift segment, then the per-60 interpretation requires an offset or a per-60 response scale; if \(y_i\) is already a per-60 rate, the weighted fit estimates rate coefficients directly. Either way, the reported \(\hat\beta_j^{ev}\) has units of goals per 60 minutes, while the per-season APM values in Tables 2 and 3 are in goals per season. The appendix labels add another gray zone: Table 4 is titled “Top 10 Skaters in PPOPM/60” but its columns read “PPOPM” and “PPDPM” [PAGE 8]; the title and the column labels must be reconciled before comparing Table 4 with Table 3. This is a units-and-label audit, not a statistical criticism, but it matters because a per-60 value of 5.09 is not a per-season value of 5.09.

A third gray zone is uncertainty. The paper reports AErr as “the standard error in the APM estimates” [PAGE 4], and the uncertainty is material. Datsyuk has APM 52.2 with AErr 20.9; Getzlaf has APM 45.8 with AErr 19.6; Carter has APM 45.3 with AErr 15.7 [PAGE 5]. These intervals overlap heavily. For special teams the paper is explicit: “Excluding the Sedin twins, the standard errors in EVAPM/60 for a typical player are between 0.50 and 0.78, while for PPAPM/60 the errors are between 1.13 and 2.23” and “The increased uncertainty in the PPAPM/60 ratings make the ratings less useful” [PAGE 6]. Therefore the correct audit posture is hierarchical: report the point estimate, the standard error, the exposure minutes, and the co-usage structure together. A top-10 list without those three columns is an overclaim.

Finally, the model assumes “that a goalie's impact on offense is negligible” [PAGE 3]. That is a modeling assumption, not a physical theorem. It means goalie offensive contribution is forced to zero, and goalie defensive estimates absorb team defense, shot quality, and system effects. The special-teams estimates are even more exposed because special-teams minutes are small and role-allocated. The paper’s own conclusion is that the special-teams results “were reasonable but were noisier than the results from the even strength model since there is much less data for special teams situations” [PAGE 6]. The audit conclusion is that the model is a useful exposure-adjusted descriptive statistic with explicit uncertainty, but it is not a stand-alone causal player-value oracle.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The even-strength model in the paper is an additive weighted least-squares exposure model. Using the paper’s notation, with \(J\) skaters and \(K\) goalies, the modified even-strength specification with initial-zone indicators is:

\[
y_i=\beta_0^{ev}
+\sum_{j=1}^{J}\beta_j^{ev}X_{ij}^{ev}
+\sum_{j=1}^{J}\delta_j^{ev}D_{ij}^{ev}
+\sum_{k=1}^{K}\gamma_k^{ev}G_{ik}^{ev}
+\theta_{\mathrm{off}}^{ev}Z_{i,\mathrm{off}}^{ev}
+\theta_{\mathrm{def}}^{ev}Z_{i,\mathrm{def}}^{ev}
+\epsilon_i .
\]

The indicator definitions are given on [PAGE 3]: \(X_j^{ev}=1\) when “skater \(j\) is on offense and at even strength during the observation,” \(D_j^{ev}=1\) when skater \(j\) is on defense and at even strength, and \(G_k^{ev}=1\) when “goalie \(k\) is on defense and at even strength during the observation.” The zone indicators are defined on [PAGE 3] such that \(Z_{\mathrm{off}}^{ev}=1\) “for those observations in which a shift begins with a faceoff in the offensive zone,” and \(Z_{\mathrm{def}}^{ev}\) is determined likewise. Units: \(y_i\) is on the paper’s goal-rate response scale implied by the coefficient interpretation; \(\beta_j^{ev}\), \(\delta_j^{ev}\), \(\gamma_k^{ev}\), and the zone coefficients have units of goals per 60 minutes; \(X,D,G,Z\) are dimensionless Bernoulli indicators; \(\epsilon_i\) has the same units as \(y_i\). The paper states the coefficient interpretation directly: “\(\beta_j\) = goals per 60 minutes contributed by skater \(j\) on offense at even strength” [PAGE 3].

The special-teams model extends the same logic by giving each skater power-play and shorthanded offensive and defensive terms, and each goalie power-play and shorthanded defensive terms:

\[
\begin{aligned}
y_i={}&\beta_0
+\sum_{j=1}^{J}\beta_j^{pp}X_{ij}^{pp}
+\sum_{j=1}^{J}\delta_j^{pp}D_{ij}^{pp}
+\sum_{k=1}^{K}\gamma_k^{pp}G_{ik}^{pp} \\
&+\sum_{j=1}^{J}\beta_j^{sh}X_{ij}^{sh}
+\sum_{j=1}^{J}\delta_j^{sh}D_{ij}^{sh}
+\sum_{k=1}^{K}\gamma_k^{sh}G_{ik}^{sh}
+\theta_{\mathrm{off}}Z_{i,\mathrm{off}}
+\theta_{\mathrm{def}}Z_{i,\mathrm{def}}
+\epsilon_i .
\end{aligned}
\]

This is the formalization of [PAGE 4]. The paper explains the variable count: “Instead of having two variables in the model for each skater, like we did in the even strength model, each skater will have four variables” [PAGE 3]. The goalie restriction is stated as “we assume that a goalie's impact on offense is negligible” [PAGE 3]. Units are again goals per 60 minutes for the \(\beta,\delta,\gamma,\theta\) coefficients; the \(X,D,G,Z\) are dimensionless; minutes enter through the weighting and through later per-season conversion.

The weighted least-squares estimator implied by the paper’s statement that “Each observation is weighted by the duration of the shift” [PAGE 3] is:

\[
\hat{\mathbf b}
=\arg\min_{\mathbf b}\sum_{i=1}^{n}w_i\left(y_i-\mathbf x_i^\top\mathbf b\right)^2,
\qquad
w_i=\Delta t_i,
\]

with normal equations:

\[
\left(X^\top W X\right)\hat{\mathbf b}=X^\top W y,
\qquad
W=\operatorname{diag}(\Delta t_i).
\]

Here \(w_i=\Delta t_i\) has units of minutes, \(y_i\) has the goal-rate response units, and \(\hat{\mathbf b}\) has units of goals per 60 minutes. The intercept \(\beta_0\) absorbs the baseline rate. The least-squares coefficients \(\hat\beta_j^{ev},\hat\delta_j^{ev},\hat\gamma_k^{ev}\) are then used as estimates of EVOPM/60, EVDPM/60, and goalie EVDPM/60 respectively [PAGE 3].

Per-season aggregation is defined by the paper as:

\[
\mathrm{OPM}=\mathrm{EVOPM}+\mathrm{PPOPM}+\mathrm{SHOPM},
\]

\[
\mathrm{DPM}=\mathrm{EVDPM}+\mathrm{PPDPM}+\mathrm{SHDPM},
\]

\[
\mathrm{APM}=\mathrm{EVAPM}+\mathrm{PPAPM}+\mathrm{SHAPM}
=\mathrm{OPM}+\mathrm{DPM}.
\]

These identities appear on [PAGE 4]. The conversion from per-60 to per-season is:

\[
\mathrm{PPOPM}
=
\frac{\mathrm{PPOPM/60}}{60}
\times
\left(\text{PP minutes per season}\right),
\]

which is exactly the operation described on [PAGE 4]: “To get a player's PPOPM, we can divide his PPOPM/60 by 60 and multiply by his minutes played per season on the power play.” Units: PPOPM is goals per season; PPOPM/60 is goals per 60 minutes; the factor \(1/60\) converts minutes to 60-minute units; PP minutes per season is in minutes.

The uncertainty and singularity audit uses the weighted covariance structure:

\[
\operatorname{Var}(\hat{\mathbf b})
=
\hat\sigma^2\left(X^\top W X\right)^{-1}
\quad\text{under the homoskedastic weighted model,}
\]

and the breakdown condition:

\[
\operatorname{rank}\left(X^\top W X\right)<p
\quad\Longrightarrow\quad
\text{individual coefficients are not identified.}
\]

Near-breakdown occurs when the condition number \(\kappa(X^\top W X)\) is large. The paper’s Sedin example is the empirical signature: “Daniel spent 92% of his time at even strength and 98% of his time on the power play playing with Henrik” [PAGE 5]. In that regime the data cannot sharply separate the two individual columns, and the reported high AErr values are the observable consequence. A second breakdown regime is zero or near-zero exposure: a player with no power-play minutes has no identifying variation for a PP coefficient; a goalie with no shorthanded minutes has no identifying variation for an SH goalie coefficient. A third regime is stable unit co-usage: if a power-play unit never changes, the model can estimate a unit-level effect more reliably than separate player-level effects. The paper’s own caveat is that “The increased uncertainty in the PPAPM/60 ratings make the ratings less useful” [PAGE 6]. The standard-error scale is not cosmetic: EVAPM/60 errors are “between 0.50 and 0.78,” while PPAPM/60 errors are “between 1.13 and 2.23” for typical players excluding the Sedin twins [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is explicit in the paper. Traditional plus-minus is criticized because it is “highly dependent on the team he plays for, the opponents he faces, and other variables out of his control” [PAGE 1]. The paper then imports the basketball adjusted plus-minus tradition: it cites Winston, Rosenbaum, Ilardi and Barzilai, and Sill’s regularization and out-of-sample work [PAGE 1], [PAGE 7]. The immediate predecessor is MacDonald’s own NHL APM model [5], which handled even-strength situations. The current paper’s contribution is to add “power play and shorthanded situations” and to account for “the zone on the ice in which a shift begins” for faceoff-starting shifts [PAGE 1]. That genealogy matters because the basketball APM literature already learned that raw plus-minus is exposure-confounded and that collinearity among teammates requires regularization or out-of-sample testing; Sill’s regularization idea is explicitly named as a future direction [PAGE 6], [PAGE 7].

A second lineage is shot-quality and event-weighting. The paper proposes “weighted shots” as a dependent variable, with weights from Krzywicki’s shot-quality model based on shot type, distance, and other factors [PAGE 6], [PAGE 7]. It also cites Schuckers et al.’s adjusted minus/plus probability approach, which uses “all on-ice events” and weights events by the probability that a goal is scored within 10 seconds [PAGE 6], [PAGE 7]. Retrocausally, this points toward a later generation of models that would replace binary goals with probabilistic event value. The paper’s rationale is sample size: “The number of shots in a typical NHL game is about 10 times the number of goals scored, and the extra data could help reduce noise in the estimates” [PAGE 6]. That is a direct bridge from 2011 APM to modern expected-goal and possession-value models.

The multi-week traps are historical and methodological. Trap one: treating a single season’s top-10 APM as stable. The paper pools 2007-08, 2008-09, and 2009-10 [PAGE 3], but even then the AErr values are large: Datsyuk 20.9, Getzlaf 19.6, Carter 15.7 [PAGE 5]. A few weeks of new data cannot resolve differences of that size. Trap two: treating special-teams rankings as equally reliable as even-strength rankings. The paper says special-teams estimates are noisier because “there is much less data for special teams situations” [PAGE 6], and the per-60 standard errors are roughly two to three times larger. Trap three: forgetting that the model is additive and role-blind. Coaches allocate power-play time, shorthanded time, and zone starts based on prior beliefs; those allocations create the very collinearity and selection patterns that the regression then tries to undo. The Sedin co-usage result is the cleanest warning: a high ranking can be a unit effect, not a separable individual effect [PAGE 5]. Trap four: converting per-60 to per-season without noticing that low minutes mechanically shrink the per-season total. A player with a high PPOPM/60 but only 200 PP minutes will not produce a large PPOPM; that is arithmetic, not a contradiction. Trap five: reading the appendix’s column labels without reconciling them to the table title. Table 4 is titled “Top 10 Skaters in PPOPM/60” [PAGE 8], but its columns are labeled PPOPM and PPDPM; the units must be checked before any cross-table comparison.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive failure mode is a three-way interaction among crisis habit, counter-trap, and clock. Crisis habit is the analyst’s default when a star is missing from a top APM list: the paper notes that “There are some notable omissions to this list of top skaters, including Sidney Crosby, Alex Ovechkin, and Evgeni Malkin” from the APM top 10, while those players appear in the OPM top 10 [PAGE 4]. The habit is to abandon the model and revert to narrative reputation. That is a regression to raw plus-minus in disguise. The counter-trap is the opposite overcorrection: because the model has uncertainty, declare it useless, or because it has zone indicators, declare zone starts causal, or because it has special-teams terms, treat PPOPM/60 as a clean player skill. Both are failures of calibration. The correct recursive stance is to ask what the model can separate at the observed exposure level, then update confidence accordingly.

The paper gives a concrete theory-of-mind example in the Burrows and Kesler discussion. Burrows leads SHDPM/60 “by a wide margin,” and “His most common linemate during both even strength and shorthanded situations is Ryan Kesler” [PAGE 6]. Kesler has been a Selke finalist, yet “Burrows actually ranks higher than Kesler in our advanced defensive statistics EVDPM/60 and SHDPM/60” [PAGE 6]. A reputation-only analyst would infer that Burrows is the better defensive forward; a recursive analyst notices that shared usage and common linemate structure can produce correlated estimates, and that the model has no explicit interaction term for the pairing. The counter-trap is not to reverse the conclusion and anoint Kesler; it is to treat the pair as a co-usage cluster and demand a paired or regularized estimate before making an individual ranking.

Clock matters in two senses. First, shift duration is the weight: “Each observation is weighted by the duration of the shift” [PAGE 3]. A player’s estimate is therefore dominated by long shifts and by whatever events occur during them. Second, season and career clocks matter: the data are 2007-08 through 2009-10 [PAGE 3], and the per-season conversion uses minutes played per season [PAGE 4]. A player’s role changes over that clock; a power-play specialist who loses PP minutes will see PPOPM fall even if PPOPM/60 is unchanged. The recursive update should therefore be: estimate per-60, inspect standard error, inspect minutes, inspect co-usage, then aggregate. Reversing that order is how a noisy per-60 estimate becomes a false per-season certainty.

A final recursive trap is model feedback. Coaches see public analytics; deployment changes; the next season’s exposure matrix changes; the APM coefficients are then estimated on a different selection regime. The model is not measuring a fixed player constant. It is measuring a role-conditional rate. The paper’s own future-work statement — “a priority in future research is to take measures to reduce errors for all estimates” [PAGE 6] — is a signal that the correct behavior is iterative: estimate, regularize, validate out of sample, and re-estimate. The crisis habit says “rank now.” The counter-trap says “discard.” The clock says “collect more exposure and re-fit.” The clock wins.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto is straightforward: the APM model has no physical, biomechanical, or weather layer in its regressors. Its inputs are shift indicators, goalie indicators, zone-start indicators, shift durations, and goals from NHL.com shift reports for 2007-08, 2008-09, and 2009-10 [PAGE 1], [PAGE 3]. Therefore the model cannot prove a biomechanical superiority claim, and a biomechanical or medical layer can veto a causal interpretation of APM. Formal omitted-variable bias is:

\[
\hat{\beta}
=
\beta
+
\left(X^\top W X\right)^{-1}
X^\top W \eta,
\]

where \(\eta\) represents omitted factors: injury status, skating load, matchup quality, score state, ice condition, and team system. If \(\eta\) is correlated with a player’s exposure indicators \(X\), the estimated coefficient is biased. Units: \(\hat\beta\) and \(\beta\) are goals per 60 minutes; \(\eta\) is on the same goal-rate scale; the projection matrix \((X^\top W X)^{-1}X^\top W\) maps omitted goal-rate variation into coefficient bias.

Physical veto: a player returning from injury may be deployed in sheltered minutes and offensive-zone starts. The model sees the exposure indicators and the goals, but not the injury. If the player’s usage is correlated with recovery status, the APM coefficient mixes recovery and ability. The paper does not include injury or load variables, so it cannot adjudicate this layer.

Biomechanical veto: the model has no skating speed, acceleration load, shift-level distance, or collision data. A claim that one player’s APM reflects superior biomechanical efficiency is underdetermined. The model can only say that, conditional on the recorded exposure and the additive structure, the player’s teams scored and conceded at a certain adjusted rate. It cannot say why. The goalie assumption is a related boundary: “we assume that a goalie's impact on offense is negligible” [PAGE 3]. That assumption is not a physical proof; it is a restriction that forces goalie offense to zero and lets goalie defense absorb team and shot-quality effects.

Weather veto: the paper’s data are NHL shift reports from indoor professional games; no weather covariate appears in the model. If an outdoor or unusual-ice event changed shift length, puck luck, or goal rates, the model would not represent it. The correct adjudication is that weather cannot be used to explain an APM coefficient, and an APM coefficient cannot be used to prove a weather effect. The same veto applies to arena-condition claims unless the analyst supplies an external arena or event dataset and tests whether the coefficient shifts across conditions.

The proof of the veto is therefore structural, not anecdotal: the model’s likelihood is conditional on \((X,D,G,Z,\Delta t)\) only. Any layer not in that conditioning set is either an omitted variable or an external validator. The paper’s own methodological boundary supports this reading: it calls the estimates “independent of that player's teammates and opponents” [PAGE 1], not independent of injury, load, system, or environment. The word “independent” is model-conditional. Cross-layer claims must be vetoed unless the external layer is explicitly added and tested.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1: co-usage collinearity veto. Verify the exposure overlap between two skaters. If two players share more than about 90% of even-strength time and more than about 95% of power-play time, the model cannot cleanly separate their individual coefficients. The paper supplies the test case: “Daniel spent 92% of his time at even strength and 98% of his time on the power play playing with Henrik” [PAGE 5], and “the model has difficulty separating the contribution of the two players” [PAGE 5]. Prediction: the pair’s AErr should be among the largest for forwards; Henrik’s AErr is 27.0 in the OPM table [PAGE 5]. A bootstrap or season-block resample should frequently reverse the ordering of the pair’s individual EVOPM/60 and PPOPM/60 estimates. Verifiable veto: if the two players’ exposure overlap exceeds the threshold and their standard errors are not materially larger than comparable non-overlapping players, the claim “the model separates them” is falsified. If the overlap is high and the standard errors are large, any individual ranking between the pair is vetoed.

Veto scenario 2: special-teams sample-size veto. Verify the per-60 standard errors. The paper states: “Excluding the Sedin twins, the standard errors in EVAPM/60 for a typical player are between 0.50 and 0.78, while for PPAPM/60 the errors are between 1.13 and 2.23” [PAGE 6]. Prediction: differences among the top PPOPM/60 estimates that are smaller than roughly 1.5 goals per 60 should not be treated as stable. In Table 4, Backstrom is 5.09 with PPAErr 1.48 and Savard is 5.05 with PPAErr 1.78 [PAGE 8]. The point estimates differ by 0.04 goals per 60, while the reported errors are more than an order of magnitude larger. Verifiable veto: a shift-level bootstrap or a leave-one-season-out refit should produce rank reversals among the top power-play names. If the top-10 order is stable despite errors of that size, the uncertainty model is wrong; if it is unstable, the “definitive top power-play player” claim is vetoed. The paper’s own caveat is the reward signal: “The increased uncertainty in the PPAPM/60 ratings make the ratings less useful” [PAGE 6].

Veto scenario 3: zone-start causal veto. Verify whether the model includes zone starts for all shifts or only faceoff-starting shifts. The paper says “for those shifts that begin with a faceoff, we have accounted for the zone on the ice in which a shift begins” [PAGE 1], and the zone indicator is defined for observations “in which a shift begins with a faceoff in the offensive zone” [PAGE 3]. Prediction: adding or removing the zone indicators should move EVOPM/60 most for players with extreme offensive-zone faceoff shares, but it cannot recover a total zone-start effect for on-the-fly shifts, because those shifts are in the baseline category. Verifiable veto: compare the model with and without \(Z_{\mathrm{off}}^{ev}\) and \(Z_{\mathrm{def}}^{ev}\). If a player’s EVOPM/60 changes by more than its standard error when the zone terms are added, the player’s raw estimate is zone-start-sensitive; if the change is smaller than the standard error, the zone-start critique is not supported for that player. The causal claim “this player drives offense independent of deployment” is vetoed unless the zone-start sensitivity test is reported. The paper’s design supports the test because the zone terms are explicit in the even-strength equation [PAGE 3] and the special-teams equation [PAGE 4], but the design does not support a universal deployment-causal interpretation.
</RLVR_COUNTERFACTUAL_VETOES>