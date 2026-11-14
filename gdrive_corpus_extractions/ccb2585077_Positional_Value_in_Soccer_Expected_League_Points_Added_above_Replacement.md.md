---
source: "Positional Value in Soccer Expected League Points Added above Replacement.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4960
---

<NATIVE_REASONING>
The user wants me to analyze a soccer analytics paper using a very specific format with strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines terminology.
- No toy equations. Must use formal LaTeX.
- Exact page citations from the source text provided. The source text has page markers: page 1 through page 18 based on the page numbers shown at bottom of pages (1, 2, 3, ... 16 visible in the text). Wait, looking at the source text, I see page numbers embedded: "> **1**", "**2**", "**3**", "**4**", "**5**", "**6**", "**7**", "**8**", "**9**", "**10**", "**11**", "**12**", "**13**", "**14**", "**15**", "**16**". The user says PAGES: 18 but the text only goes up to page 16 visible? Let me check. The text shows page numbers at bottom: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16. Actually looking carefully:

- "**1**" appears after abstract.
- "**2**" appears after affiliation.
- "**3**" after section 1 continues.
- "**4**" after Bivariate Poisson discussion.
- "**5**" after Skellam equation.
- "**6**" after merging positions.
- "**7**" after calibration curves.
- "**8**" after replacement player discussion start.
- "**9**" after Definition 3.1 eLPAR.
- "**10**" after Step 1 discussion.
- "**11**" after Figure 5 discussion start.
- "**12**" after Figure 6 start.
- "**13**" after Rule of Thumb 3.1.
- "**14**" after Table 2/3 intro.
- "**15**" after discrepancy discussion.
- "**16**" after references start.

Wait, there might be more pages but the text provided ends at references. The user says PAGES: 18 but I only see up to page 16. I should cite [PAGE N] markers based on what's visible. I can reference pages 1-16. I should be careful to cite exact page numbers where claims appear.

Key content from paper:
- Dataset: Kaggle European Soccer Database, 21,374 games from 11 European leagues, seasons 2008-09 to 2015-16. [PAGE 3]
- Poisson dispersion test: home 1.01, away 1.1. [PAGE 4]
- Correlation between home and away goals: -0.06. [PAGE 4]
- Bivariate Poisson cannot model negative correlation. [PAGE 4]
- Skellam distribution for Z = X - Y. Modified Bessel function Ir(x). [PAGE 4-5]
- Four line groups: attack, middlefield, defense, goalkeeping. Λ = {λD, λM, λA, λGK}. [PAGE 6]
- Model 2.1: Z ~ Skellam(λ1, λ2), log(λ1) = b1^T · x, log(λ2) = b2^T · x. [PAGE 6]
- Coefficients Table 1: Intercept log λ1: 0.41***, log λ2: 0.13***; xD: 0.02***, -0.02***; xM: 0.02***, -0.02***; xA: 0.01***, -0.01***; xGK: 0.001, -0.002**. [PAGE 7]
- Prediction error std dev 1.6 goals. [PAGE 7]
- Calibration curves on y=x line. Draw probability never >30%. Base rate draws ~25%. [PAGE 7]
- Replacement level: 80% of positional average rating. Around 56 for all lines. [PAGE 8]
- Figure 4: replacement levels around rating 56. [PAGE 8-9]
- Definition 3.1: eLPAR. League points: win=3, draw=1, loss=0. [PAGE 9]
- eLPAR calculation steps: Step 1 increase in average line rating based on formation φ; Step 2 change in win/draw/loss prob (δPw, δPd, δPl); Step 3 eLPAR_p(φ) formula (implied but text says "as following:" then equation missing? Actually in the text it shows blank equation maybe due to formatting). [PAGE 9-10]
- Formation average value because formation not in dataset. [PAGE 10]
- Figure 5: eLPAR for ratings 50-99 across 4 formations. GK smallest eLPAR. Defender > attacker > middlefielder > GK for same rating. 4-4-2 most balanced. [PAGE 10-11]
- Weighted average eLPAR across formations: eLPAR_p = sum over φ (t_φ / T) * eLPAR_p(φ). [PAGE 10-11]
- Market value analysis: only 8.5% GK, ~35% defenders, ~35% middlefielders, ~21% attackers. [PAGE 12-13]
- Figure 6: GK over-valued, defenders undervalued. Best GK eLPAR just over 0.1 per 90 minutes. [PAGE 12-13]
- Rule of Thumb 3.1: Buy bulk expected league points at discount through defense, pay smaller premium for average GK. [PAGE 13]
- Budget example: B=6 million, allocate 55% GK / 45% defender vs 500K GK / 5.5M defender yields 0.028 vs 0.033 expected league points per 90 min, 15% discount. [PAGE 13]
- Tables 2 and 3: Barcelona and Man Utd wages vs eLPAR-projected wages. Discrepancy ~4% Man Utd, ~3% Barcelona. [PAGE 14-15]
- Conclusion: static FIFA ratings limit to expected not actual LPAR. Future: optical tracking, formations, substitutions, Madden ratings for NFL. [PAGE 15-16]

Now I need to write the response with the exact XML sections.

Section 1: <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
Need to derive the Skellam regression, eLPAR chain, market inefficiency, etc. Multi-hop: from raw goals -> Poisson -> Skellam -> regression -> win prob -> eLPAR -> market value -> roster construction. Gray-zone audit: limitations like static ratings, missing formation data, collinearity, draw probability cap, replacement level rule-of-thumb, business externalities (jersey sales) vs pure win value.

Section 2: <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
Need formal LaTeX equations:
- Poisson: X ~ Pois(λ_h), Y ~ Pois(λ_a)
- Bivariate Poisson: (X,Y) ~ BP(λ1, λ2, λ3), λ3 = Cov(X,Y)
- Skellam PMF: P(Z=k) = e^{-(λ1+λ2)} (λ1/λ2)^{k/2} I_{|k|}(2√(λ1λ2)) maybe cite [PAGE 4-5]
- Regression: log(λ1) = b1^T x, log(λ2) = b2^T x, x = (xD, xM, xA, xGK) [PAGE 6]
- Table 1 coefficients [PAGE 7]
- Replacement: r_replacement = 0.8 * r_avg_line [PAGE 8]
- eLPAR_p(φ) = 3·δP_w + 1·δP_d + 0·δP_l (since win=3, draw=1, loss=0) [PAGE 9]
- Weighted: eLPAR_p = Σ_φ (t_φ / T) eLPAR_p(φ) [PAGE 10-11]
- Cost per eLPAR: market value / eLPAR [PAGE 12-13]
- Budget allocation example [PAGE 13]
- Wage redistribution: f_p = eLPAR_p / eLPAR_total; wage_proj,p = f_p · B [PAGE 14-15]

Units: goals, ratings (0-100), league points (dimensionless points per game), Euros per expected league point, minutes.

Breakdown: assumptions (Poisson fit, independence approximated via Skellam, static ratings, formation-average coefficients, replacement at 80th percentile rule-of-thumb). Singularity/breakdown: when λ1 or λ2 → 0 (Skellam degenerates), when formation data missing (coefficients are formation-averaged, not position-specific within line), when correlation is negative (Bivariate Poisson invalid), when draw probability >30% never observed (calibration ceiling), when eLPAR = 0 for replacement (division by zero in cost-per-point).

Section 3: <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
Lineage: Woolner VORP (baseball) -> eLPAR (soccer). Skellam (1946) -> Karlis & Ntzoufras (2000, 2003, 2005) -> soccer goal modeling. xG, xGC, tracking data (Fernandez & Bornn, Hoang et al., Bornn et al.). Madden ratings for NFL future. Multi-week traps: static FIFA ratings change few times per season, so eLPAR is pre-season expectation not in-season actual; using only starting lineups ignores subs; ignoring formation creates aggregation bias; market value reflects commercial value (jersey sales) not just win value, causing apparent inefficiency that is actually rational business pricing.

Section 4: <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
This is a weird section title but I need to interpret it. Crisis habit regression: under pressure, clubs revert to familiar (overpriced) attackers/GKs rather than undervalued defenders. Counter-trap: the market inefficiency (defenders undervalued) is a trap because once exploited, arbitrage closes; clubs with limited budget should buy defenders but then prices adjust. Clock: the 8-season dataset (2008-09 to 2015-16) is static; ratings decay; the "clock" is the season timeline—FIFA ratings updated only a few times, so eLPAR becomes stale. Crisis habit regression: when losing, managers buy expensive attackers (crisis habit) instead of undervalued defenders; counter-trap is to systematically undervalue defenders in scouting; clock is the transfer window deadline and rating update cycle.

Section 5: <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
The paper ignores physical/biomechanical/weather layers. Veto proof: if weather (rain, wind) alters Poisson goal rates, the Skellam λ parameters are conditionally misspecified; if a defender is injured (biomechanical), the line average rating is wrong; if a goalkeeper faces more shots due to tactical setup, xG chain matters. The model assumes ceteris paribus line ratings; any physical layer event (red card, injury, weather-induced goal suppression) vetoes the static eLPAR. Need to state exact veto conditions: e.g., if expected goals under rain differ by >δ, the win probability calibration fails; if a line player is substituted, the 4-line average no longer applies.

Section 6: <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>
Need 3 verifiable counterfactual veto scenarios with predictions.
1. Scenario: Replace a GK rated 91 with replacement rated ~56 in a match; model predicts eLPAR drop. Veto: if actual match result shows no significant point difference because the team parks the bus, the Skellam line-average assumption is vetoed. Prediction: eLPAR_GK(91) - eLPAR_GK(56) ≈ 0.092 - 0 = 0.092 pts/game (from Table 2 Stegen) but actual variance > 1.6 goals std dev means single-game veto is common.
2. Scenario: 4-4-2 vs 3-5-2 formation swap for same defender rating 87. Paper says defender eLPAR differs by formation (Pique 0.38 avg vs 0.36 in 4-4-2). Veto: if actual defensive actions (pressures, interceptions) show no formation dependence, the formation-average coefficient is misspecified. Prediction: in 3-5-2, defender eLPAR > attacker eLPAR; in 4-5-1, attacker > defender (Figure 5).
3. Scenario: Budget reallocation from GK to defender yields 15% discount on expected league points (B=6M example). Veto: if market prices adjust upward for defenders after this insight, arbitrage disappears. Prediction: defender market value premium converges to GK within 2 transfer windows; eLPAR-per-Euro equalizes across lines.

I must ensure no betting terminology (spread, total, moneyline, odds). Use "win probability," "expected league points," "market value," etc.

Word count: Need >= 1,000 words total across sections. THINK_TRACE alone >= 400 words.

Let me draft carefully with page citations. I need to use [PAGE N] format exactly.

Let's count pages from source:
- Page 1: title, abstract, intro start.
- Page 2: intro continues, xGC, tracking tech.
- Page 3: data description, 21,374 games, 11 leagues, FIFA ratings.
- Page 4: Poisson, Bivariate Poisson, Skellam equation, correlation -0.06.
- Page 5: Skellam distribution, drawback.
- Page 6: Model 2.1, four lines, Table structure start.
- Page 7: Table 1 coefficients, prediction error 1.6 goals, calibration.
- Page 8: replacement player, 80% rule, Figure 4.
- Page 9: Definition 3.1 eLPAR, steps.
- Page 10: formation issue, Step 1-3, Figure 5 intro.
- Page 11: Figure 5 results, weighted average across formations.
- Page 12: Figure 6 intro, market value, 8.5% GK, etc.
- Page 13: cost per eLPAR, Rule of Thumb 3.1, budget example.
- Page 14: Tables 2 and 3 intro.
- Page 15: discrepancy 4%/3%, conclusion start.
- Page 16: conclusion, future work, references.

I will cite [PAGE 3] for dataset, [PAGE 4] for Poisson/Bivariate/Skellam, [PAGE 6] for Model 2.1, [PAGE 7] for coefficients, [PAGE 8] for replacement, [PAGE 9] for Definition 3.1, [PAGE 10] for formation steps, [PAGE 11] for Figure 5 and weighting, [PAGE 12-13] for market value, [PAGE 13] for Rule of Thumb, [PAGE 14-15] for Tables and discrepancy, [PAGE 15-16] for conclusion.

Need formal LaTeX. I'll write equations in LaTeX format inside the section.

Let me start writing.

THINK_TRACE (>=400 words):
I will derive:
1. Goal scoring as Poisson processes. Home mean 1.56, away 1.18 [PAGE 4].
2. Bivariate Poisson covariance negative (-0.06), so BP invalid because BP requires non-negative correlation [PAGE 4]. Therefore model Z = X - Y via Skellam [PAGE 4-5].
3. Skellam PMF with modified Bessel function I_r(x) [PAGE 5].
4. Regression on line rating differences x_pi = rp(h,pi,i) - rp(a,pi,i) [PAGE 6]. Because formations missing, aggregate to four lines Λ = {λ_D, λ_M, λ_A, λ_GK} [PAGE 6].
5. Log-link: log(λ_1) = b_1^T x, log(λ_2) = b_2^T x [PAGE 6]. Coefficients symmetric [PAGE 7].
6. Convert goal differential to win/draw/loss probabilities via Skellam CDF. Calibration accurate [PAGE 7].
7. Replacement rating r_rep = 0.8 * mean line rating ≈ 56 [PAGE 8-9].
8. eLPAR_p(φ) = 3 δP_w + 1 δP_d + 0 δP_l [PAGE 9]. Steps 1-3 [PAGE 9-10].
9. Formation weighting eLPAR_p = Σ (t_φ / T) eLPAR_p(φ) [PAGE 10-11].
10. Market value: cost per eLPAR = V_market / eLPAR [PAGE 12-13]. Defenders undervalued, GK overvalued [PAGE 12-13].
Gray zones: static ratings (expected not actual), missing formation/substitution data, draw probability ceiling 30% vs 25% base rate, replacement rule-of-thumb not exact, commercial externalities (jersey sales) mean market price ≠ win value.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with LaTeX, units, citations, assumptions, breakdown regimes.

RETROCAUSAL_GENEALOGY:
Woolner VORP [PAGE 8], Skellam 1946 [PAGE 5, Ref 22], Karlis & Ntzoufras [PAGE 4, Refs 12-14], xG/xGC [PAGE 1-2], tracking [PAGE 2], future NFL/Madden [PAGE 16]. Multi-week traps: rating staleness across transfer windows, arbitrage decay, static dataset end date 2015-16.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: after losses, clubs buy expensive attackers/GKs (crisis habit) instead of undervalued defenders. Counter-trap: exploiting defender undervaluation causes price correction. Clock: FIFA rating updates few times per season; eLPAR decays between updates; transfer window deadline imposes finite optimization horizon.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: weather (rain/wind) changes scoring intensity, violating Poisson stationarity. Biomechanical: injury to a line player invalidates average line rating. Tactical: red card changes formation mid-game, violating four-line average. Veto conditions: if shot suppression under rain > threshold, win prob miscalibrated; if substitution occurs, eLPAR computed from starting lineup is invalid.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios with predictions.

Need to ensure total words >= 1000. I'll write substantial content in each section.

Let me write now, being careful about LaTeX syntax and page citations.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s causal chain begins with raw goal counts. Empirically, home goals X and away goals Y are each marginally Poisson with means λ_h = 1.56 and λ_a = 1.18 respectively [PAGE 4]. A Pearson dispersion test yields statistics near unity (1.01 home, 1.1 away), so overdispersion is negligible and a negative-binomial upgrade is unjustified [PAGE 4]. The first multi-hop complication is dependence: the empirical correlation between X and Y is −0.06 [PAGE 4]. A bivariate Poisson model BP(λ₁, λ₂, λ₃) with λ₃ = Cov(X,Y) can only accommodate non-negative correlation [PAGE 4]; because the observed sign is negative, that model is structurally inadmissible. The authors therefore bypass the joint distribution entirely and model Z = X − Y directly with a Skellam law. The Skellam PMF contains the modified Bessel function I_|k|(2√(λ₁λ₂)) and, crucially, its form is identical to the difference of two independent Poisson variates, so the unknown covariance drops out of the win/draw/loss calculation [PAGE 4-5].

The second hop elevates the distributional model to a regression. Because exact formations are absent from the Kaggle European Soccer Database (21,374 games, 11 leagues, 2008-09 to 2015-16) [PAGE 3], individual player indicators would be sparse and ill-defined across varying back lines. The authors therefore aggregate players into four lines Λ = {λ_D, λ_M, λ_A, λ_GK} and use the difference in average line ratings as covariates x = (x_D, x_M, x_A, x_GK) [PAGE 6]. Under Model 2.1, Z ∼ Skellam(λ₁, λ₂) with log(λ₁) = b₁ᵀx and log(λ₂) = b₂ᵀx [PAGE 6]. Maximum-likelihood estimates in Table 1 show near-perfect sign symmetry: defensive and middle-field rating differentials carry ±0.02 coefficients on the home/away Poisson means, attack ±0.01, and goalkeeper approximately ±0.001/−0.002 [PAGE 7]. This implies that a one-unit increase in any line’s average rating shifts the home team’s goal-scoring intensity upward by roughly exp(0.02) ≈ 1.02 multiplicative factors for defense/middlefield and exp(0.01) ≈ 1.01 for attack, while the away intensity shifts by the inverse factor.

The third hop converts goal-differential fit into expected league points. The model’s predicted goal differential has mean zero and standard deviation 1.6 goals, and cannot be rejected as N(0, 1.6²) by chi-squared goodness-of-fit [PAGE 7]. Win/draw/loss calibration curves lie on the y = x line, though the model never emits a draw probability above 30% despite a ~25% base rate [PAGE 7]. eLPAR is then defined as the change in expected league points (win = 3, draw = 1, loss = 0) when a replacement player is substituted by player p with rating r_p in formation φ [PAGE 9]. Operationally: Step 1 computes the increase in the relevant line’s average rating; Step 2 computes δP_w, δP_d, δ_l from the win-probability model; Step 3 forms eLPAR_p(φ) = 3·δP_w + 1·δP_d + 0·δP_l [PAGE 9-10]. Because formations are unobserved, the reported coefficient is a formation-average; a proper multilevel model would require position-by-formation interactions [PAGE 10]. Across playing time, the season-level expectation is eLPAR_p = Σ_φ (t_φ / T)·eLPAR_p(φ), where T is total minutes and t_φ minutes in formation φ [PAGE 10-11].

Gray-zone audit. The eLPAR is explicitly expected, not actual, because FIFA ratings are quasi-static and change only a few times per season [PAGE 9-10, 15-16]. The replacement level is a Woolner rule-of-thumb set at 80% of positional average rating, yielding approximately 56 across all lines [PAGE 8-9]; this is not derived from a supply curve of freely available talent, so the zero point of the value scale is conventionally imposed rather than empirically identified. The draw-probability ceiling at 30% creates a calibration boundary condition: close matches are systematically compressed away from draws [PAGE 7]. Finally, the market-value analysis conflates sporting value with commercial value: attackers sell jerseys and draw sponsors, so a premium on offensive eLPAR may be rational business pricing rather than inefficiency [PAGE 13]. These gray zones imply that eLPAR rankings are valid for roster construction under fixed-formation, ceteris-paribus assumptions, but break down under in-game substitutions, injuries, weather-driven scoring regimes, or when a club’s objective function includes revenue externalities.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX operators, units, page citations, and breakdown regimes.

Dataset and count model.  
Let X ∼ Pois(λ_h) and Y ∼ Pois(λ_a) denote home and away goals. Empirical means: λ_h = 1.56, λ_a = 1.18 goals per game [PAGE 4]. Units: goals (count). Dispersion statistics: 1.01 and 1.10, justifying Poisson over negative binomial [PAGE 4].

Bivariate Poisson exclusion.  
(X,Y) ∼ BP(λ₁, λ₂, λ₃), λ₃ = Cov(X,Y). Empirical correlation ρ = −0.06 [PAGE 4]. Because Karlis & Ntzoufras show BP admits only non-negative correlation, the negative sign invalidates the joint Poisson approach for this dataset [PAGE 4-5].

Skellam regression, Model 2.1.  
Z = X − Y ∼ Skellam(λ₁, λ₂), with PMF involving the modified Bessel function I_|k|(2√(λ₁λ₂)) [PAGE 5]. Covariates: x_D, x_M, x_A, x_GK = difference in average FIFA rating (0–100 scale) between home and away line π [PAGE 6].  
log(λ₁) = b₁ᵀx, log(λ₂) = b₂ᵀx [PAGE 6].  
Units: ratings are dimensionless index points; coefficients are log-intensity per rating point.

Table 1 coefficient breakdown [PAGE 7]:  
Intercept: b₁,₀ = 0.41***, b₂,₀ = 0.13***.  
x_D: b₁,D = +0.02***, b₂,D = −0.02***.  
x_M: b₁,M = +0.02***, b₂,M = −0.02***.  
x_A: b₁,A = +0.01***, b₂,A = −0.01***.  
x_GK: b₁,GK = +0.001 (n.s.), b₂,GK = −0.002**.  
Interpretation: +1 rating point in defense raises home scoring intensity by factor exp(0.02) ≈ 1.0202 and lowers away intensity by exp(−0.02) ≈ 0.9802, holding other lines constant.

Prediction and calibration.  
Prediction error: Z_pred − Z_actual ∼ N(0, 1.6²) goals, not rejected by chi-squared GOF [PAGE 7]. Calibration: predicted vs observed win/draw/loss probabilities lie on y = x; draw probability capped at 30% despite ~25% base rate [PAGE 7].

Replacement level.  
r_replacement,λ = 0.8 · mean(r_p over line λ) ≈ 56 rating points for all λ [PAGE 8-9]. Units: FIFA rating index points.

eLPAR definition and computation [PAGE 9-11]:  
eLPAR_p(φ) = 3·δP_w + 1·δP_d + 0·δP_l, where δP_* are changes in win/draw/loss probabilities after substituting p for the replacement player in formation φ. Units: expected league points per game (points·game⁻¹).  
Season weighting: eLPAR_p = Σ_{φ∈Φ} (t_φ / T) · eLPAR_p(φ), with T total minutes played and t_φ minutes in formation φ [PAGE 10-11]. Replacement player has eLPAR ≡ 0 by construction [PAGE 10].

Market-value operator.  
Cost per expected league point = V_market,p / eLPAR_p, units: euros per expected league point (EUR·point⁻¹·game). Efficient market implies horizontal equalization across positions [PAGE 12-13]. Position shares: GK 8.5%, defense ≈ 35%, middlefield ≈ 35%, attack ≈ 21% [PAGE 12-13].

Budget reallocation example [PAGE 13]:  
With B = 6,000,000 EUR, naive 55% GK / 45% defender yields ≈ 0.028 expected league points per 90 minutes; shifted 0.5M GK / 5.5M defender yields ≈ 0.033, an implied 15% discount on purchased expected league points.

Wage redistribution [PAGE 14-15]:  
f_p = eLPAR_p / Σ_{j=1}^{11} eLPAR_j; projected wage_p = f_p · B. Average discrepancy between actual and eLPAR-projected wage: ≈ 4% of budget for Manchester United, ≈ 3% for Barcelona [PAGE 15].

Assumptions and singularity/breakdown regimes:  
(1) Poisson stationarity: breaks if weather, red cards, or tactical shifts alter scoring intensity within a match; then λ₁, λ₂ are time-varying and the static Skellam link is misspecified.  
(2) Formation-average coefficients: break down when a team switches formations mid-game or uses a formation outside the four most common; eLPAR_p(φ) becomes a biased estimate of any specific φ.  
(3) Negative correlation exclusion: if future data show ρ > 0, a bivariate Poisson could recover draw probabilities the Skellam difference discards.  
(4) Division by zero: eLPAR_p = 0 for replacement players makes cost-per-point undefined; market-value ratios require strictly positive eLPAR.  
(5) Draw ceiling: if true draw probability exceeds 30%, the model’s calibration curve is forced off y = x and expected points are misestimated.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage.  
The paper situates itself in the Wins Above Replacement tradition of baseball and basketball [PAGE 1, Refs 11, 25], specifically invoking Keith Woolner’s Value Over Replacement Player (VORP) and the notion that average players hold value relative to a replacement-level commodity [PAGE 8, Refs 26-27]. The statistical ancestor is J. G. Skellam’s 1946 frequency distribution of the difference between two Poisson variates [PAGE 5, Ref 22], extended to sports by Karlis and Ntzoufras (2000, 2003, 2005) for soccer goal modeling [PAGE 4, Refs 12-14]. The authors reject the bivariate Poisson route because their empirical correlation is negative, a constraint noted in the statistical literature [PAGE 4, Ref 14].

The immediate analytic context is expected goals (xG) and expected goal chains (xGC), which evaluate shot-taking and passing sequences but remain limited to on-ball events and shot-takers [PAGE 1-2]. Optical tracking work by Hoang et al., Fernandez and Bornn, and Bornn et al. suggests future space-creation and space-coverage metrics, but these remain aspect-specific rather than all-inclusive win shares [PAGE 2]. The present paper’s bridge is to use static FIFA ratings—validated in prior soccer analytics studies [PAGE 1, Ref 5]—to generate a pre-game win probability model conditioned on starting lineups [PAGE 3], then to translate positional coefficients into eLPAR [PAGE 9].

Future lineage named by the authors includes optical-tracking-derived game ratings to replace static seasonal ratings, incorporation of actual formations and substitutions, and extension to American football using Madden ratings in place of FIFA ratings [PAGE 15-16]. This last step would attempt an NFL analogue of Wins Above Replacement, a domain where credit division has also proven difficult [PAGE 16].

Multi-week traps.  
Trap 1: rating staleness. FIFA ratings update only a few times per season [PAGE 9-10], so eLPAR is a pre-season expectation that decays between updates. A club trading on week 3 using week 1 ratings is pricing stale information.  
Trap 2: arbitrage decay. If defenders are systematically undervalued because of low market visibility, early adopters who buy defensive eLPAR at a discount will bid up defender prices; within one or two transfer windows the cost-per-expected-league-point equalizes and the Rule of Thumb 3.1 profit opportunity vanishes [PAGE 13].  
Trap 3: dataset horizon. The sample ends in 2015-16 [PAGE 3]. Tactical evolution (pressing structures, high defensive lines, build-from-the-back) means the four-line coefficients estimated on 2008-2016 data may not generalize to current match engines without re-estimation.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.  
Crisis habit regression: after a run of losses or a poor derby result, a sporting director faces pressure to make a “statement signing.” The psychologically available move is to purchase a high-profile attacker or an expensive goalkeeper—positions that are salient, overvalued in transfer-fee markets, and commercially visible [PAGE 12-13]. This regresses to the familiar habit of buying offensive celebrity rather than quietly acquiring undervalued defensive eLPAR. The regression is recursive because each failed expensive signing reinforces the narrative that “we need a star,” deepening the habit loop.

Counter-trap: the paper’s Rule of Thumb 3.1 prescribes buying bulk expected league points at a discount through defense and paying a smaller premium for an average goalkeeper [PAGE 13]. The counter-trap is that once the undervaluation of defenders is public, scouting departments shift resources toward center-backs, and the market clears at a higher defensive price. The inefficiency is therefore self-liquidating; the counter-trap only works for clubs that act before the price correction completes, or for clubs with such limited budgets that they cannot participate in the attacker bidding war anyway.

Clock: two clocks govern the model’s validity. First, the FIFA rating clock—ratings change only a few times per season, so eLPAR updates discretely and becomes stale between release cycles [PAGE 9-10]. Second, the transfer-window clock: budget B must be allocated before the window closes, and the optimization assumes a static market-value surface [PAGE 13]. If the window closes before the defensive arbitrage is executed, the eLPAR-based plan cannot be implemented until the next window, by which time ratings may have been revised. The interaction of these clocks means the theoretically optimal budget split is a point estimate in a moving target environment.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto conditions.  
The paper’s model operates at the aggregate line-rating layer and does not condition on physical, biomechanical, or weather covariates. Each of these layers can veto the eLPAR prediction.

Physical layer (weather): The Skellam regression assumes stationary Poisson scoring intensities λ₁(x), λ₂(x) conditional on line ratings [PAGE 6]. If precipitation or wind materially suppresses shot conversion or increases goalkeeping error, the conditional mean of Z shifts independently of x. Veto rule: if expected goals under adverse weather deviate from clear-weather expectations by more than the model’s residual standard deviation of 1.6 goals [PAGE 7], the win/draw/loss probabilities are miscalibrated and eLPAR computed from pre-match ratings is voided for that fixture.

Biomechanical layer (injury/availability): The model uses average line ratings as if all four line-members play the full match [PAGE 6]. A defender’s injury forces a substitution or formation change; the line average no longer represents the on-field talent distribution. Veto rule: if any line player is replaced before minute 60, the formation-average coefficient b_π is applied to a rating vector that no longer matches the actual lineup, and the resulting eLPAR_p(φ) is invalid for the remainder of the match.

Tactical-structural layer (red card / formation shift): A red card reduces a team to ten players, effectively removing a line member and altering the spacing that the four-line aggregation presumes [PAGE 6]. Similarly, in-game formation adjustments (e.g., 4-4-2 to 3-5-2) change which positional subset is active. Veto rule: upon a formation change or reduction below eleven fit outfield players, the eLPAR_p computed for the starting formation φ₀ must be re-computed under φ₁; using the original eLPAR is a vetoed prediction.

Adjudication hierarchy: biomechanical availability vetoes first (lineup truth), then physical weather vetoes second (scoring intensity truth), then tactical-structural vetoes third (formation truth). Only if all three layers remain static does the regression-layer eLPAR stand.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-verifiable (RLVR) counterfactual veto scenarios with predictions.

Scenario 1 — Goalkeeper substitution counterfactual.  
Setup: In a match, Team A starts a goalkeeper rated r_GK = 91 (e.g., De Gea, Table 3 [PAGE 14]) and substitutes him at halftime for a replacement-rated keeper ≈ 56 [PAGE 8-9]. The model assigns starting-GK eLPAR ≈ 0.10 expected league points per game relative to replacement [PAGE 14]. Veto condition: if Team A’s actual match outcome (win/draw/loss and goal differential) shows no statistically significant deviation from the replacement-keeper counterfactual—specifically, if the observed goal differential lies within the ±1.6-goal residual band [PAGE 7]—then the Skellam line-rating coefficient for x_GK is vetoed as overstated for that match context. Prediction: single-match veto occurs with probability governed by the 1.6-goal standard deviation; over a 38-game season, the cumulative eLPAR difference of roughly 0.10 × 38 ≈ 3.8 expected points should re-emerge unless goalkeeper quality is systematically neutralized by low shot volume.

Scenario 2 — Formation-switch defender counterfactual.  
Setup: A center-back rated 87 (e.g., Piqué, Table 2 [PAGE 14]) has formation-averaged eLPAR ≈ 0.38, with 0.36 in a 4-4-2 and higher values in back-three systems per Figure 5 [PAGE 10-11]. Veto condition: if the same player, in a match where his team switches from a back four to a back three at minute 30, does not exhibit a corresponding change in defensive actions (interceptions, pressures, shots conceded) consistent with the coefficient shift, then the formation-average coefficient is misspecified. Prediction: in a 3-5-2, the defender’s eLPAR should exceed that of an attacker with identical rating; in a 4-5-1, the reverse [PAGE 10-11]. If event data show no such inversion, the position-by-formation interaction is required and the reported main effect is vetoed.

Scenario 3 — Budget-arbitrage counterfactual.  
Setup: A club with B = 6,000,000 EUR follows the paper’s recommended reallocation (0.5M to a 68-rated goalkeeper, 5.5M to a 78-rated defender) and is predicted to purchase ≈ 0.033 expected league points per 90 minutes versus ≈ 0.028 under the conventional split, a 15% discount [PAGE 13]. Veto condition: if defender market prices rise by more than 15% within two transfer windows after this strategy becomes public, the cost-per-eLPAR curve flattens and the arbitrage is vetoed by market adjustment. Prediction: the equalization of EUR per expected league point across defense and goalkeeper occurs within 24 months, after which the Rule of Thumb 3.1 yields no abnormal expected-points-per-euro return; clubs with limited budgets must then seek inefficiency in a different positional slice or in non-rating attributes (e.g., age, contract length).
</RLVR_COUNTERFACTUAL_VETOES>