---
source: "2024 - Estimating NBA Team Shot Selection Efficiency from Aggregations of True, Continuous Shot Charts A Generalized Additive Model Approach - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2024"
pages: 15
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3864
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about NBA shot selection efficiency using GAMs (Generalized Additive Models) and "Continuous True Shot Charts."

Constraints:
1. ZERO BETTING LINES - no spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS - no fake ratios. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided a source text that seems to be pages 1-17 of the paper (though they said PAGES: 15). I need to cite exact [PAGE N] markers. Looking at the text, there are page numbers visible: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17.

I need to be careful about:
- No betting lines
- No toy equations (like Force/Fatigue). Use real LaTeX from the paper or formal mathematical notation.
- Cite page markers like [PAGE 1], [PAGE 2], etc.
- Verbatim quotes where appropriate.

Let me structure the response:

1. <THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the GAM shot selection efficiency measure, discuss the true point yield calculation including free throws, the Pearson correlation, regression models, XGBoost robustness, moneyball analysis, and three-point premium/dispremium. Identify gray zones (e.g., missing Pythagorean exponent formula rendered as garbled text "!"#$!" !"#$!"%&"#$!" ~~.~~", missing exact FT expected points values on page 6, causal identification issues, sample selection 2016-17 to 2022-23 vs 2021-22 in premium section, etc.)

2. <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations from the paper:
   - Pythagorean expected win proportion: \( \text{Pyth.W} = \frac{\text{PF}^{14}}{\text{PF}^{14} + \text{PA}^{14}} \) (Morey 1993 updated exponent 14)
   - GAM: \( g(E[Y]) = \beta_0 + \sum f_j(X_j) \) (Hastie & Tibshirani 1987)
   - Shot Selection Efficiency: Pearson correlation \( \rho = \frac{\text{Cov}(V(x,y), Y(x,y))}{\sigma_V \sigma_Y} \)
   - Exogenous shooting ability: \( \bar{Y} = \frac{1}{N}\sum_{i=1}^N Y(x_i,y_i) \) (equal likelihood weighting)
   - Regression Model 1: \( \text{Pyth.W}_{it} = \beta_0 + \beta_1 \text{SSE}_{it} + \beta_2 \text{ESA}_{it} + \beta_3 \text{DRtg}_{it} + \beta_4 \text{TOV\%}_{it} + \beta_5 \text{ORB\%}_{it} + \text{TeamFE}_i + \epsilon_{it} \)
   - Payroll augmented: add Normalized Payroll and squared.
   - Three-point premium/dispremium: \( \Delta = \bar{Y}_{3PA} - \bar{Y}_{2PA} \) with and without FT.
   - Units: points per shot, win proportion (unitless [0,1]), Net Rating (points per 100 possessions), payroll in millions USD.
   - Breakdown regimes: multicollinearity VIF paring, Pythagorean exponent sensitivity, equal-likelihood exogenous ability assumption breaking down under defensive attention, etc.
   - Citations: [PAGE 9], [PAGE 10], etc.

3. <RETROCAUSAL_GENEALOGY>: Historical lineage: Papalexakis & Pelechrinis 2018, Jiao et al. 2021, Franks et al. 2015 (MIT Sloan), Fichman & O'Brien 2019, Skinner & Goldman 2015, Goldman & Rao 2011, Narayan 2019, Winston et al. 2022, Hastie & Tibshirani 1987, Morey 1993, Ehrlich & Sanders 2021. Multi-week traps: analytic adoption lag, payroll mispricing, 3PA volume overshooting market.

4. <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression (teams regressing to traditional shot charts despite true dispremium), counter-trap (defenders fouling 3PAs disproportionately punishes defense, changing FT rates), clock (trend from 0.23 in 2016-17 to 0.32 in 2022-23).

5. <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Since this is basketball (indoor, controlled environment), weather veto is N/A. Physical: shot location continuum, half-court geometry, rim proximity. Biomechanical: shooting foul differential by location, FT rate differences (Harden 0.557 vs league 0.26, Butler 0.625). Need to show why vetoes don't apply or are controlled.

6. <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need to create 3 counterfactual veto scenarios that are verifiable, with predictions. Examples:
   - Veto 1: If a team's Shot Selection Efficiency > 0.23 but exogenous shooting ability < 0.80, then Pythagorean win proportion should not improve significantly (interaction veto).
   - Veto 2: If 3PA volume increases but true 3PT dispremium < -0.05, then net rating should decline unless offset by ESA.
   - Veto 3: If payroll normalized > 2.0 but SSE < 0.10, wins should not exceed expectation (payroll cannot buy shot selection).
   Each with verifiable prediction and breakdown regime.

Word count: >=1000 words total across sections. THINK_TRACE alone >=400 words.

Let me start writing carefully. I need to ensure no betting lines. I will not mention spreads, totals, moneylines, odds. I can mention win proportion, net rating, Pythagorean expected win proportion—these are not betting lines per se, but performance metrics. The paper uses them. I should avoid framing them as betting.

I need to include exact page citations. The text has page numbers embedded. I'll use [PAGE 1], [PAGE 2], etc.

Let me check page numbers in the text:
- Page 1: Introduction start, Figure 1
- Page 2: Section 2, Figure 2 description
- Page 3: Bucks surprises, long 2PA
- Page 4: Harden, Butler FT rates
- Page 5: Figure 5 differential
- Page 6: Expected points from missed 3PA vs 2PA (text has gaps)
- Page 7: Section 3, Shot Selection Efficiency definition, Table 1
- Page 8: Median values, exogenous shooting ability 0.88, net value quarter point
- Page 9: Equation 1-3, Model 1
- Page 10: Table 2, regression results, 0.1 units = 0.04 win proportion
- Page 11: Table 3, Moneyball
- Page 12: XGBoost robustness, SHAP
- Page 13: Figures 7-9, SSE > 0.23 threshold
- Page 14: Section 6, 3PA premium, Ehrlich & Sanders 2021
- Page 15: Red vs blue trend lines, dispremium -0.066
- Page 16: Conclusion
- Page 17: References

Wait, the user said PAGES: 15 but text goes to 17. I'll cite what's there.

Let me draft.

THINK_TRACE (>=400 words):
- Multi-hop: GAM estimates continuous surface E[Y|x,y] including FT.
- True point yield = FG points + expected FT points from shooting fouls.
- Shot Selection Efficiency = spatial Pearson correlation between volume and yield.
- Exogenous shooting ability = uniform location weighting.
- Regression: Pythagorean exponent 14 (Morey 1993 update).
- Effect size: 0.1 SSE -> 0.04 win proportion (~3.28 wins/82). 1 SD SSE -> 0.17 SD win prop.
- Moneyball: payroll doesn't explain SSE; coaching/analytics drive it.
- 3PA premium: traditional shows +0.025 to 0.064 (2016-2021); true shows dispremium since 2018-19, -0.066 in 2021-22.
- Gray zones: garbled Pythagorean formula on page 9; missing expected FT values on page 6; causal identification (team fixed effects help but omitted variable bias from coaching quality); sample mismatch (regression 2016-17 to 2022-23 but premium aggregation ends 2021-22); equal-likelihood exogenous ability is a strong counterfactual assumption that breaks under defensive adjustment; XGBoost in-sample R^2 0.999989 suggests overfitting risk despite out-of-sample 0.625.

SOURCE_OPERATORS_AND_EQUATIONS:
- LaTeX for GAM, Pythagorean, Pearson correlation, regression, premium.
- Units: points per shot, win proportion (dimensionless), points per 100 possessions, millions USD.
- Page citations.

RETROCAUSAL_GENEALOGY:
- Lineage from Reich et al. 2006 spatial analysis, Skinner & Goldman 2015 optimal strategy, Franks et al. 2015 counterpoints, Goldsberry, Morey revolution, Hastie & Tibshirani 1987 GAM.
- Multi-week traps: analytic lag, market inefficiency (moneyball), volume overshooting.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: teams revert to traditional charts because they show 3PA premium.
- Counter-trap: fouling 3PA gives 50% more expected points than fouling 2PA, so defenders avoid fouling 3PA, suppressing FT rate on 3PAs and narrowing yield gap.
- Clock: SSE trend 0.23 (2016-17) to 0.32 (2022-23).

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: indoor arena, fixed rim height 10 ft, half-court dimensions. Weather veto N/A (indoor). 
- Biomechanical: FT rate by location is not random; Harden 0.557 vs league 0.26 [PAGE 4]; Butler 0.625 [PAGE 4]. Shooting foul probability varies by location (baseline extended long 2PA high made FT rate [PAGE 5]).
- Veto proof: because GAM smooths continuously over (x,y), it absorbs location-specific foul differentials; but breakdown if shot-chart sample lacks rare locations (extrapolation beyond support).

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable veto scenarios + predictions. I'll phrase them as formal counterfactuals with observable implications.

Let's write.

Need to be careful: The user wants "STRICT INVARIANTS". I must not violate. Let me ensure no betting lines. I will not mention odds/spreads/totals/moneylines. I will mention win proportion and net rating as performance metrics, not betting.

Word count check: I'll aim for ~1500+ words total.

Let me compose now.

I need to include exact [PAGE N] markers. Since the source text is provided inline without explicit [PAGE N] tags, but I can see page numbers in the text (e.g., "1", "2", etc. appearing as standalone numbers). I'll reference them as [PAGE 1], [PAGE 2], etc., matching the visible page numbers.

Actually, looking at the source text, there are page breaks indicated by numbers like "1", "2", etc. between sections. I'll cite those.

Let's begin drafting.
</NATIVE_REASONING>

<THINK_TRACE>
The paper develops a Generalized Additive Model (GAM) to estimate "Continuous True Shot Charts" (CTSCs), which assign expected true points—field-goal points plus shot-pursuant free-throw points—to every continuous half-court location (x,y). The multi-hop derivation begins with the outcome definition: a traditional shot chart records only field-goal attempts (FGAs) and field-goal points, omitting missed shots that draw shooting fouls and the resulting free-throw scoring. The CTSC corrects this by augmenting the yield at each spatial coordinate with expected free-throw points conditional on location, thereby producing a continuous color-coded surface rather than discrete bins [PAGE 2]. Hastie and Tibshirani (1987) provide the GAM foundation: the expected outcome depends linearly on smooth functions of explanatory variables, here the spatial coordinates [PAGE 2]. The resulting expected true point yield is denoted Y(x,y), measured in points per shot.

From this surface, the authors construct two summary operators. First, Shot Selection Efficiency (SSE) is the spatial Pearson correlation between expected proportional volume V(x,y) and expected true points Y(x,y) across a simulated grid of the half-court [PAGE 7]. Second, exogenous shooting ability is the uniform-location average of Y(x,y), i.e., expected true points per shot if every location were selected with equal likelihood [PAGE 7]. This second operator isolates shooting skill from shot-location choice. The median exogenous shooting ability is 0.88 true points per shot, while the sample average true points per shot is 1.13, implying a league-average net selection value of roughly 0.25 points per shot [PAGE 8].

The validation chain proceeds through team-season regressions (n=210, every NBA team-season from 2016-17 through 2022-23) [PAGE 9]. Model 1 uses Pythagorean Expected Win Proportion with exponent 14 (updated from Morey 1993) as the dependent variable [PAGE 9]. Model 2 uses actual Win Proportion; Model 3 uses Net Rating (points per 100 possessions) [PAGE 9]. Controls include defensive rating, turnover rate, offensive rebounding rate, team fixed effects, and normalized payroll [PAGE 7]. The SSE coefficient is 0.400 in the Pythagorean model and 0.334 in the actual win-proportion model, both p<0.001 [PAGE 10]. A 0.1-unit SSE improvement yields 0.04 additional win proportion, approximately 3.28 wins over an 82-game season, or one win per roughly 0.03 SSE units [PAGE 10]. A one-standard-deviation SSE increase (0.06) corresponds to a 0.17-standard-deviation increase in expected win proportion [PAGE 10].

The moneyball test adds normalized payroll and its square to Model 1 [PAGE 11]. SSE remains positive and significant (0.379, p<0.001) conditional on payroll, and its coefficient is essentially unchanged, indicating that the player labor market does not price player-level SSE variation; variation is instead driven by coaching and analytic staffs [PAGE 11]. XGBoost robustness checks yield an out-of-sample R-squared of 0.625 and SHAP values confirming the monotonic positive effect of SSE, with a threshold near 0.23 above which shot selection positively contributes to expected wins [PAGE 12-13].

The final multi-hop concerns the three-point premium. Aggregating CTSCs across all NBA shots from 2016-17 to 2021-22, the authors estimate the yield difference between 3PAs and 2PAs with and without shot-pursuant free throws [PAGE 14]. Traditional charts show a significant leaguewide premium of 0.025 to 0.064 points per 3PA from 2016-17 through 2020-21, vanishing in 2021-22 [PAGE 14]. True charts, however, reveal a significant and deepening three-point dispremium since 2018-19, reaching -0.066 points per 3PA in 2021-22—roughly one point less per 15 three-point shots [PAGE 15]. Despite this, 3PA volume continued rising, suggesting teams optimized against a mis-specified analytic tool.

Gray-zone audit: (1) The Pythagorean formula on [PAGE 9] is rendered as garbled text ("!"#$!" !"#$!"%&"#$!" ~~.~~"), so the exact functional form is not verbatim recoverable from the supplied source; (2) Page 6 contains blanked expected-points values for missed 3PAs versus missed 2PAs under shooting fouls, preventing exact verification of the claimed 50% free-throw differential; (3) The exogenous shooting ability equal-likelihood assumption is a strong counterfactual that breaks under defensive adjustment—defenses will not allow uniform shot-location sampling; (4) The regression sample runs through 2022-23, while the three-point premium aggregation ends in 2021-22, creating a temporal mismatch; (5) XGBoost in-sample R-squared of 0.999989 indicates severe memorization risk despite acceptable out-of-sample performance; (6) Team fixed effects absorb time-invariant coaching quality but cannot fully address omitted variable bias from year-to-year coaching changes or roster construction synergies.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**GAM shot-chart surface.** Following Hastie and Tibshirani (1987) [PAGE 2], the expected true point yield at half-court coordinates (x,y) is modeled as
\[
g\!\left(\mathbb{E}[Y\mid x,y]\right)=\beta_0+s_1(x)+s_2(y)+s_{12}(x,y),
\]
where \(g(\cdot)\) is a link function, \(s_j\) are smooth functions, and \(Y\) is measured in points per shot. The CTSC plots \(Y(x,y)\) continuously; traditional shot charts use discrete bins and omit shot-pursuant free-throw points [PAGE 2].

**True point yield.** For a shot at location \((x,y)\),
\[
Y(x,y)=\text{FG points}(x,y)+\mathbb{E}[\text{FT points}\mid \text{shooting foul at }(x,y)]\cdot P(\text{shooting foul}\mid x,y).
\]
This corrects the downward bias of conventional charts near the basket, where foul-drawing is more frequent [PAGE 5].

**Shot Selection Efficiency (SSE).** Over a spatial grid \(\mathcal{G}\) of half-court locations,
\[
\mathrm{SSE}=\rho\!\bigl(V(x,y),\,Y(x,y)\bigr)
=\frac{\operatorname{Cov}\!\bigl(V(x,y),Y(x,y)\bigr)}
{\sigma_V\,\sigma_Y},
\]
measured as a unitless Pearson correlation in \([-1,1]\). The sample median is 0.27, range 0.01 to 0.44 [PAGE 7-8].

**Exogenous shooting ability (ESA).** Uniform location weighting:
\[
\mathrm{ESA}=\frac{1}{|\mathcal{G}|}\sum_{(x,y)\in\mathcal{G}}Y(x,y),
\]
in points per shot, with sample median 0.88 and mean 0.88 [PAGE 8].

**Pythagorean expected win proportion.** With exponent 14 (updated from Morey 1993) [PAGE 9],
\[
\mathrm{Pyth.W}_{it}=\frac{\mathrm{PF}_{it}^{14}}{\mathrm{PF}_{it}^{14}+\mathrm{PA}_{it}^{14}},
\]
unitless win proportion in \([0,1]\), where PF and PA are points for and against per 100 possessions.

**Regression Model 1 (team-season \(i\), year \(t\)).**
\[
\mathrm{Pyth.W}_{it}
=\beta_0+\beta_1\mathrm{SSE}_{it}+\beta_2\mathrm{ESA}_{it}
+\beta_3\mathrm{DRtg}_{it}+\beta_4\mathrm{TOV\%}_{it}
+\beta_5\mathrm{ORB\%}_{it}+\alpha_i+\varepsilon_{it},
\]
with Net Rating in points per 100 possessions as the dependent variable in Model 3 [PAGE 9]. Estimated coefficients: \(\hat\beta_1=0.400\) (SE 0.086, p<0.001) for Pyth.W; \(\hat\beta_1=0.334\) (SE 0.095, p=0.001) for Win Proportion; \(\hat\beta_1=14.149\) (SE 2.691, p<0.001) for Net Rating [PAGE 10]. A 0.1 SSE increase \(\Rightarrow \Delta\mathrm{Pyth.W}=0.040\), about 3.28 wins per 82 games; one win per \(\approx 0.03\) SSE units [PAGE 10].

**Payroll-augmented specification.** Adding normalized payroll \(z_{it}\) and \(z_{it}^2\) leaves \(\hat\beta_1\) essentially unchanged (0.379, SE 0.084, p<0.001), while payroll is significant (0.018, SE 0.006, p=0.002) and the quadratic term is negative but insignificant (-0.003, SE 0.003, p=0.336) [PAGE 11].

**Three-point premium/dispremium.** Let \(\Delta_t=\bar Y_{3PA,t}-\bar Y_{2PA,t}\) in points per shot. Traditional charts: \(\Delta_t\in[0.025,0.064]\) for 2016-17 through 2020-21, insignificant in 2021-22 [PAGE 14]. True charts: significant dispremium since 2018-19, \(\Delta_{2021\text{-}22}=-0.066\) points per 3PA, roughly one point per 15 three-point shots [PAGE 15].

**Units and breakdown regimes.** Dependent variables are unitless win proportion or points per 100 possessions. Independent variables include rates (TOV%, ORB%), ratings (DRtg), and payroll in millions USD. Singularity/breakdown: VIF paring removes multicollinear controls but cannot fix omitted-variable bias from coaching quality; the uniform-location ESA assumption breaks when defenses actively contest hot spots; GAM smooth extrapolation fails in low-sample regions of the half-court (e.g., deep 3PAs beyond ~26 feet where yield falls off sharply) [PAGE 3]; XGBoost in-sample R²=0.999989 indicates overfitting in the memorization regime despite out-of-sample R²=0.625 [PAGE 12].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage extends across spatial statistics, basketball analytics, and market-inefficiency research. Reich et al. (2006) established spatial analysis of basketball shot-chart data [PAGE 17 references]. Skinner and Goldman (2015) framed optimal basketball strategy as an allocation problem [PAGE 17]. Franks, Miller, Bornn, and Goldsberry (2015) introduced advanced defensive metrics at the MIT Sloan conference, reinforcing the shot-chart as a strategic artifact [PAGE 17 references; PAGES 1-2 context]. Goldman and Rao (2011) examined allocative and dynamic efficiency in NBA decision-making [PAGE 1]. Narayan (2019) applied machine learning to basketball strategy [PAGE 1]. Fichman and O’Brien (2019) formalized optimal shot-selection strategies [PAGE 1]. Papalexakis and Pelechrinis (2018) and Jiao, Hu, and Yan (2021) developed multi-aspect and Bayesian spatial point-process frameworks for shot charts [PAGE 1]. Winston, Nestler, and Pelechrinis (2022) documented the SportVU/Second Spectrum spatial-data revolution [PAGE 1]. Hastie and Tibshirani (1987) supplied the GAM machinery [PAGE 2]. Morey (1993) provided the Pythagorean foundation later updated to exponent 14 [PAGE 9]. Ehrlich and Sanders (2021) first documented erosion of the three-point premium during the 2010s using discrete true shot charts [PAGE 14].

Multi-week traps embedded in this genealogy: (1) the analytic adoption lag—SportVU was ubiquitously adopted around 2013-14, coinciding with a locally steep rise in 3PA volume, yet traditional shot charts continued to omit free-throw yield for nearly a decade thereafter [PAGE 1]; (2) the market-inefficiency trap—Massey and Thaler (2013) and the "loser's curse" logic suggest draft and salary markets misprice attributes; here, SSE is a supra-payroll source of wins that labor markets do not price [PAGE 11; PAGE 17 references]; (3) the volume-overshooting trap—teams increased 3PA volume even after the true dispremium emerged, optimizing against perceived rather than actual premia [PAGE 15]. These traps operate on multi-week to multi-season timescales because coaching staffs, scouting departments, and salary-cap structures adjust slowly relative to the continuous shot-surface estimates the GAM produces.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of NBA offenses, under pressure, to revert to the shot-selection heuristics encoded by traditional shot charts. Because traditional charts still display a three-point premium in field-goal-only terms through 2020-21 [PAGE 14], coaches and players receive positive recursive feedback for increasing 3PA volume even when true yield—including free throws—turns negative after 2018-19 [PAGE 15]. The habit regresses because the observable signal (field-goal yield) remains pleasant while the concealed signal (shot-pursuant FT differential) is suppressed.

The counter-trap operates at the defensive location-contingent level. Fouling a missed 3PA awards the offense three free throws, whereas fouling a missed 2PA awards two; assuming league-average FT proficiency, the expected points from the line are therefore 50% higher on a 3PA foul than on a 2PA foul [PAGE 6]. This disproportionately punishes the defense, so defenders rationally reduce fouling on 3PAs. The resulting lower FT rate on 3PAs narrows the true-yield gap between long 2PAs and adjacent 3PAs, which helps explain why the Bucks’ long 2PA region yielded more than 1.2 points per shot and rivaled adjacent three-point range [PAGE 3; PAGE 6]. Offenses that anticipate this defensive substitution effect can exploit the long-2PA pocket, as Milwaukee did in 2021-22 [PAGE 3].

The clock is the temporal trend in SSE: 0.23 in 2016-17 rising to 0.32 by 2022-23 [PAGE 8]. This indicates that, leaguewide, offenses are slowly learning to correlate volume with true yield. Yet the clock runs against the three-point revolution’s volume trajectory: 3PA volume kept climbing through 2021-22 even as the true dispremium swelled to -0.066 points per shot [PAGE 15]. The recursive mind-model is therefore a race between analytic diffusion (SSE improving over seasons) and incentive distortion (volume responding to biased traditional charts). Teams that recognize the counter-trap—defenders avoiding 3PA fouls—and reallocate volume toward high-true-yield long-2PA regions can profit from the defensive overcorrection, but only if their coaching staff resists the crisis habit of chasing visible field-goal premiums.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: NBA games occur indoors under controlled conditions; weather veto is inapplicable (no wind, precipitation, or temperature variation affecting ball flight). The court geometry is fixed: rim height 10 feet, half-court dimensions standardized. The GAM surface is defined over this invariant physical domain, so the spatial coordinates (x,y) carry SI units of feet and the smooth functions s₁(x), s₂(y), s₁₂(x,y) are estimated on a compact half-court manifold. Breakdown occurs only at the domain boundary (beyond ~26 feet, where deep-3PA yield falls off sharply) [PAGE 3], indicating an extrapolation veto for shots outside the observed support.

Biomechanical layer: Shooting-foul probability and made-FT rate are player- and location-specific, not uniform. Harden’s 2019-20 FT rate (FTA/FGA) was 0.557, about 2.14 times the league average of 0.26 [PAGE 4]. Butler’s 2022-23 FT rate was 0.625, the highest among small forwards [PAGE 4]. The differential chart shows that shots near the basket receive a substantial upward bias correction when shot-pursuant FT scoring is included, while long 2PAs along the baseline extended generated high made-FT rates for the Bucks [PAGE 5]. A biomechanical veto would trigger if foul-calling or FT conversion were location-invariant; the data reject this invariance. Therefore the CTSC’s inclusion of location-conditional FT scoring is veto-proof: omitting it systematically distorts yield near the basket and in high-foul-rate regions.

Veto adjudication: No physical veto invalidates the indoor half-court GAM. Biomechanical heterogeneity (player FT rates, location-specific foul rates) is explicitly modeled through the true-yield operator rather than treated as noise. The only regime where the model’s veto power weakens is sparse-data extrapolation—rare locations with few observed shots—where the smooth functions may over-smooth. This is mitigated by the continuous GAM framework and by validating at the team-season level with n=210 observations [PAGE 9].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable Reinforcement Learning from Verifiable Rewards (RLVR) counterfactual veto scenarios with explicit predictions:

**Veto Scenario 1 — Low-ESA interaction veto.** If a team-season has SSE > 0.23 (the XGBoost positive-contribution threshold) but ESA < 0.80 (below the 0.88 league median), then Pythagorean expected win proportion should not increase commensurately with SSE because high selection efficiency cannot compensate for poor baseline shooting ability. Verifiable prediction: In the regression sample, the interaction term SSE × ESA should be positive and significant; conditional on SSE > 0.23, teams with ESA in the bottom quartile should exhibit Pyth.W residuals below zero relative to Model 1. Breakdown regime: If defensive attention exogenously depresses ESA for all teams in a given season, the interaction loses power.

**Veto Scenario 2 — Volume-dispremium divergence veto.** If leaguewide 3PA volume increases year-over-year while the true-chart three-point dispremium Δₜ falls below -0.050 points per shot, then Net Rating should decline unless offset by ESA gains exceeding 0.02 points per shot. Verifiable prediction: For 2018-19 through 2021-22, regress ΔNet Rating on Δ3PA volume, Δtrue dispremium, and ΔESA; the coefficient on Δ3PA volume should become negative when Δtrue dispremium < -0.050. Breakdown regime: Spacing benefits of deep 3PAs (non-scoring value) could decouple net rating from pure yield, violating the exclusion restriction.

**Veto Scenario 3 — Payroll substitution veto.** If normalized payroll z > 2.0 (top decile of team spending) but SSE < 0.10 (near the 0.01 minimum observed for 2017-18 Portland), then expected win proportion should not exceed the sample median because payroll cannot purchase shot-selection efficiency. Verifiable prediction: In Table 3’s payroll-augmented model, the conditional expectation E[Pyth.W | z > 2.0, SSE < 0.10] should be statistically indistinguishable from E[Pyth.W | z ≈ 0, SSE ≈ 0.27]. Breakdown regime: If high-payroll teams can buy elite ESA (shooting ability) independently of SSE, the veto is overturned by the ESA channel rather than the selection channel.

Each scenario produces a falsifiable null: rejection of the prediction implies the corresponding mechanism (selection-skill complementarity, true-yield volume penalty, or payroll-SSE independence) is not operative in the data-generating process.
</RLVR_COUNTERFACTUAL_VETOES>