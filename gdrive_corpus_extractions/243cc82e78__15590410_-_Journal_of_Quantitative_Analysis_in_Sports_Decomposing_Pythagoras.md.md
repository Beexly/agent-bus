---
source: "[15590410 - Journal of Quantitative Analysis in Sports] Decomposing Pythagoras.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 14
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5112
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source paper "Decomposing Pythagoras" by Kaplan and Rich (2017). I need to produce output with exactly these XML sections:

1. <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
2. <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
3. <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
4. <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
5. <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
6. <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes from source.
- >= 1,000-WORD DEPTH across exact XML sections.

I need to be careful: The source text is a PDF extraction with some garbled equations and table formatting. I should cite pages based on the page numbers visible in the text (141-149). The text shows page markers like "**142** |", "**143** |", etc. I can cite [PAGE 142], [PAGE 143], etc.

I must not invent fake ratios. I should use the actual equations from the paper and formalize them properly. Since the source text has missing equation images, I need to reconstruct the formal LaTeX based on the textual description and what can be inferred, but I must not invent fake ratios. I can state the equations as they appear conceptually:

- Pythagorean model: WP = RS^γ / (RS^γ + RA^γ) [Page 142]
- Generalized: WP = RS^γ / (RS^γ + RA^γ) [Page 142]
- Taylor expansion around RS = RA = R_total: WP ≈ 1/2 + γ/(4 R_total) * (RS - RA) [Page 143]
- Regression slope β: WP_i = α + β x_i where x_i = RS_i - RA_i [Page 143]
- γ estimate: γ = 4 R_total β [Page 143]
- Exact model: Let X = spread. Pr(X > 0) = WP [Page 143]
- E[X] = RS - RA [Page 143]
- MOV = E[X | X > 0], MOD = E[-X | X < 0] [Page 143]
- Law of total expectation: E[X] = Pr(X>0) E[X|X>0] + Pr(X<0) E[X|X<0] = WP * MOV - (1-WP) * MOD [Page 143-144]
- Solving: WP = (RS - RA + MOD) / (MOV + MOD) ... wait let me derive carefully.

Actually from text:
E[X] = RS - RA.
E[X] = P(X>0) * MOV + P(X<0) * (-MOD) = WP * MOV - (1-WP) * MOD.
So RS - RA = WP * MOV - (1-WP) * MOD = WP(MOV + MOD) - MOD.
Therefore WP = (RS - RA + MOD) / (MOV + MOD). [Page 144]

This is equation (12). Then for team i:
WP_i = (RS_i - RA_i + MOD_i) / (MOV_i + MOD_i) = 1/2 + [1/(MOV_i + MOD_i)] * (RS_i - RA_i + MOD_i - 1/2(MOV_i + MOD_i))... wait.

Actually they write intercepts a_i and slopes b_i:
a_i = (1/2) * (MOV_i - MOD_i) / (MOV_i + MOD_i)? Let's derive.

WP_i = (RS_i - RA_i + MOD_i) / (MOV_i + MOD_i).
Let x_i = RS_i - RA_i.
WP_i = x_i / (MOV_i + MOD_i) + MOD_i / (MOV_i + MOD_i).
So slope b_i = 1 / (MOV_i + MOD_i).
Intercept a_i = MOD_i / (MOV_i + MOD_i).
But the text says intercepts average close to 1/2. That makes sense if MOD ≈ MOV on average across teams? Not necessarily team-by-team. Wait, across all teams, average win percentage is 1/2, average x is 0. But individual intercepts need not average 1/2? Let's check text: "while the intercepts differ across teams, the average of these intercepts is clearly close to 1/2." Since average WP is 1/2 and average x is 0, average of fitted lines at x=0 would be average a_i = average WP_i - average b_i * average x_i = 1/2 - 0 = 1/2. So yes.

But wait, from exact equation WP_i = (x_i + MOD_i)/(MOV_i+MOD_i). If we write as a_i + b_i x_i, then b_i = 1/(MOV_i+MOD_i) and a_i = MOD_i/(MOV_i+MOD_i). The text says slopes b_i are quite close numerically, implying MOD_i + MOV_i roughly constant across teams.

Then they compare to Taylor expansion: WP ≈ 1/2 + [γ/(4 R_total)] x. So b ≈ γ/(4 R_total), giving γ ≈ 4 R_total b. But they note this is not exactly correct because equation (13) is team-specific while (3) is cross-sectional.

Section 4 derives decomposition. Let:
x_i = RS_i - RA_i
y_i = WP_i
a_i, b_i from equations (14,15).
Regression slope β = Cov(x,y)/Var(x).
From exact model y_i = a_i + b_i x_i exactly (for each team, using observed seasonal estimates). Actually equation (13) is exact for each team: WP_i = a_i + b_i x_i. So substituting:
y_i = a_i + b_i x_i.
Then Cov(x, y) = Cov(x, a + b x) = Cov(x, a) + E[b] Var(x) + Cov(x, b x - E[b] x)? Wait, if b_i varies with x_i, then:
Cov(x_i, y_i) = Cov(x_i, a_i + b_i x_i) = Cov(x_i, a_i) + Cov(x_i, b_i x_i).
Cov(x_i, b_i x_i) = E[x_i^2 b_i] - E[x_i] E[b_i x_i]. Since E[x_i]=0, this is E[x_i^2 b_i].
But they decompose using regression of a_i on x_i and b_i on x_i^2.

Equation (22) in text:
β = \bar{b} + (s_{ax}/s_x^2) + (s_{b x^2} s_x^2 / s_x^2?) Something like that. The text is garbled.

Let's reconstruct based on standard omitted variable / interaction decomposition.
y_i = a_i + b_i x_i.
Regress a_i on x_i: a_i = \bar{a} + β_{a|x} (x_i - \bar{x}) + error. Since \bar{x}=0, a_i = \bar{a} + β_{a|x} x_i + e_i.
Regress b_i on x_i^2: b_i = \bar{b} + β_{b|x^2} x_i^2 + u_i.
Then y_i = (\bar{a} + β_{a|x} x_i + e_i) + (\bar{b} + β_{b|x^2} x_i^2 + u_i) x_i
= \bar{a} + \bar{b} x_i + β_{a|x} x_i^2 + β_{b|x^2} x_i^3 + e_i + u_i x_i.
Regressing y on x (linear), the slope β picks up \bar{b} plus contributions from the quadratic and cubic terms projected onto x. Since x has mean zero:
Cov(x, y) = \bar{b} Var(x) + β_{a|x} Cov(x, x^2) + β_{b|x^2} Cov(x, x^3) + Cov(x, e_i + u_i x_i).
Assuming errors uncorrelated, and noting Cov(x, x^2) = E[x^3] (since E[x]=0), Cov(x, x^3) = E[x^4] (since E[x]=0? Wait Cov(x,x^3)=E[x^4]-E[x]E[x^3]=E[x^4]).
So β = \bar{b} + β_{a|x} (E[x^3]/Var(x)) + β_{b|x^2} (E[x^4]/Var(x)).
But the text says equation (22) has terms involving sax/s_x^2 and sb,x^2 ... hmm.

Actually the text says: "The second term on the right-hand side of equation (22) follows from recognizing that the ratio sax / s^2_x is exactly the estimated slope for the regression of the a_i's against the x_i's... The third term follows from noting that ... and that sb, x^2 / s^2_x is exactly the estimated slope for the regression of the b_i's against the x_i^2's."

Wait, that doesn't quite match standard algebra unless they define things differently. Let me not over-reconstruct incorrectly. I should cite the paper's equations as described verbatim where possible, and note that some equations are image-based in the source and thus not fully transcribed in the provided text. I can present the formal LaTeX for the equations that are clearly described, and cite pages.

Key formal results I can state with confidence:

- Pythagorean: \widehat{WP} = \frac{RS^\gamma}{RS^\gamma + RA^\gamma} [PAGE 142]
- Generalized exponent γ [PAGE 142]
- First-order Taylor: \widehat{WP} \approx \frac{1}{2} + \frac{\gamma}{4 R_{total}} (RS - RA) [PAGE 143]
- Regression estimator: \gamma = 4 R_{total} \beta [PAGE 143]
- Exact model: Let X = RS - RA per game (spread). Assumption: Pr(X=0)=0. [PAGE 143]
- Win probability: WP = Pr(X>0) [PAGE 143]
- E[X] = RS - RA [PAGE 143]
- MOV = E[X | X > 0], MOD = E[-X | X < 0] [PAGE 143-144]
- Law of total expectation: RS - RA = WP \cdot MOV - (1-WP) \cdot MOD [PAGE 144]
- Exact linear team model: WP_i = \frac{RS_i - RA_i + MOD_i}{MOV_i + MOD_i} = a_i + b_i x_i [PAGE 144]
  where x_i = RS_i - RA_i, b_i = \frac{1}{MOV_i + MOD_i}, a_i = \frac{MOD_i}{MOV_i + MOD_i}.
- Regression across teams: \beta = \frac{Cov(x, WP)}{Var(x)} [PAGE 145]
- Decomposition: \beta = \bar{b} + \text{adjustment terms involving } \beta_{a|x} \text{ and } \beta_{b|x^2} [PAGE 145-146]
- Final: \gamma = 4 R_{total} \beta \approx 4 R_{total} \bar{b} [PAGE 146] when adjustment terms are negligible.
- Empirical ratios: \gamma_{NBA}/\gamma_{MLB} \approx 7.41 vs (R_{total} b)_{NBA}/(R_{total} b)_{MLB} \approx 7.27 [PAGE 147]
- Tables with values [PAGE 146-148]

Units: RS, RA, R_total are in points per game (or runs per game, goals per game). x_i is points per game differential. MOV, MOD are points per game. b_i has units of 1/(points per game) = game/point. β has units of win percentage per (point per game) = game/point. γ is dimensionless.

Breakdown regimes: ties (Pr(X=0)>0) violate assumption; small sample seasons; strike-shortened seasons (2012 NBA omitted); overtime/shootout rules in hockey (ties possible historically); football's lower fit (ratio 1.59 vs 1.42, hockey less satisfying).

Now, the user also wants sections like RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. These are stylized sections that blend sports analytics with systems reasoning. I need to interpret them honestly without inventing fake ratios, but I can discuss the lineage of the Pythagorean model (James 1980, Miller 2007 Weibull derivation, Dayaratna & Miller 2012 Taylor approximation, Kaplan & Rich 2017 decomposition), and multi-week traps (e.g., early-season small sample, schedule strength, regression to mean).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. I can discuss how teams/coaches adapt: if a team outperforms its Pythagorean expectation (lucky close games), opponents adjust, or regression to the mean occurs; "crisis habit regression" refers to teams reverting to mean performance under stress; counter-trap is when analysts overcorrect; clock is the season length / sample accumulation.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since the paper is about scoring distributions, I can discuss how weather (e.g., NFL wind/cold, MLB wind), biomechanics (pitcher fatigue, basketball pacing), and physical constraints (goal size, court dimensions) veto the assumption that scoring is a stationary random variable. These are "vetoes" to the exact model's assumption that X is a well-behaved random variable with Pr(X=0)=0.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR likely means Reinforcement Learning from Verifiable Rewards? Or some evaluation framework. I can interpret as "causal verification vetoes" — scenarios where the model breaks down and what would happen. Must be verifiable (falsifiable). I'll create 3 scenarios with predictions based on paper parameters.

Word count: >= 1000 words across sections. THINK_TRACE alone >= 400 words.

I must avoid betting lines. No spreads, totals, moneylines, odds. I can talk about win percentages, point differentials, scoring margins.

I need to include exact [PAGE N] markers and verbatim quotes. Since I have the source text, I can quote from it.

Let's plan word budget:
- THINK_TRACE: ~450 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~200 words
- RECURSIVE_THEORY_OF_MIND: ~200 words
- CROSS_LAYER_VETO_ADJUDICATION: ~150 words
- RLVR_COUNTERFACTUAL_VETOES: ~150 words
Total ~1450 words. Good.

Now, writing content.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit.
I need to derive from first principles:
1. Start with Pythagorean form.
2. Taylor expand around equality RS=RA=R_total.
3. Derive exact within-team model using law of total expectation.
4. Reconcile cross-sectional regression slope β with team-specific slopes b_i.
5. Decompose γ into 4 R_total times (average b + correction terms).
6. Gray-zone audit: The paper assumes no ties; hockey had ties historically (overtime/shootout changes this), football has rare ties; NBA omits strike-shortened 2012; the term βb|x^2 is assumed ≈0 but not proven zero; cross-sectional attenuation means team-specific slopes don't directly equal regression slope; empirical R^2 not fully reported; γ estimates from Table 1-4 are derived via β = slope of WP on x, then γ=4R_total β, but table header shows γ column separately—maybe estimated directly? Need to be careful.

I'll write this carefully.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. I'll list the equations with page citations. I must state units and assumptions. I will not invent fake ratios. I'll reproduce the empirical ratio from the paper (7.41 vs 7.27) as a reported empirical comparison, not an invention.

RETROCAUSAL_GENEALOGY: Lineage: James 1980 empirical -> Miller 2007 Weibull theoretical justification -> Dayaratna & Miller 2012 linear approximation -> Kaplan & Rich 2017 decomposition. Multi-week traps: early-season volatility, strength of schedule, injury accumulation, regression to mean over 162/82/16 games.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: teams that overperform Pythagoras in close games may regress when luck evens out; counter-trap: analysts may assume regression too quickly and ignore true talent changes; clock: season length determines how fast the law of total expectation stabilizes.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather vetoes. MLB: wind at Wrigley affects run scoring, violating identical distribution of X across games. NFL: temperature/wind affect scoring; ties rare but possible (Pr(X=0)>0 historically). NHL: overtime/shootout changed tie assumption; ice conditions. Biomechanical: pitcher platoon advantage creates non-independent scoring for/against; basketball fatigue affects late-game scoring. These veto the assumption that RS and RA are independent or identically distributed across games.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios:
1. Hockey pre-2005 tie era: Pr(X=0)>0 violates assumption; model breaks. Prediction: Pythagorean γ for hockey estimated on tie-inclusive data will be biased upward/downward relative to post-shootout era; verify by comparing γ 1999-2003 vs 2006-2010.
2. NFL 2020s rule changes (extra point moved back, overtime rule changes): R_total changes; b_i changes because scoring margins shift. Prediction: γ should move approximately with 4 R_total \bar{b}; verify via season-to-season γ drift matching decomposition.
3. MLB extreme park effects (Coors Field): within-team RS and RA distributions become heteroskedastic and correlated; exact model's single b_i per team fails. Prediction: residual variance from exact linear model WP_i = a_i + b_i x_i will be systematically higher for extreme park teams; verify by heteroskedasticity test on 2016 MLB residuals.

Each scenario: veto condition, counterfactual prediction, verification method. Keep it concise but formal.

I need to ensure no betting language. Avoid "spread," "total," "moneyline," "odds." Use "point differential," "scoring margin," "win percentage," "expected value."

Also ensure no toy equations. All equations must be formal and sourced or clearly derived from the paper. I can derive the exact linear model step-by-step in LaTeX.

Let's draft.

---

<THINK_TRACE>
...
</THINK_TRACE>

Need >=400 words here. I'll write a thorough derivation and audit.

---

<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>

Formal LaTeX block. Include units in brackets. Assumptions. Breakdown regimes.

---

<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>

---

<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>

---

<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>

---

<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

Word count check: I need to make sure total >= 1000. I'll aim for generous length.

Citations: Use [PAGE 142], [PAGE 143], etc. The source text shows page numbers at the top/bottom: 141-149. I'll cite accordingly.

Verbatim quotes: I need to include some exact quotes from the source.
- "the only assumption required is that games cannot end in a tie" [PAGE 143] (actually text says "The only assumption required is that games cannot end in a tie" on page 143? Let me check. In the introduction: "The only assumption required is that games cannot end in a tie (that is, Pr_{X = 0} = 0)." This is on page 143 based on flow. Actually the section 3 starts on page 143. The sentence appears on page 143. I'll cite [PAGE 143].
- "For example, in basketball, γ ≈14 (Kubatko 2013), while in football, γ ≈2.37 (Schatz 2003)." [PAGE 142]
- "the ratio of the Pythagorean coefficients for two different sports is approximately equal to the ratio of average points over average winning margin..." [PAGE 142]
- "we see that in absolute value, βa|x is about 30% of b" [PAGE 147]
- Tables on pages 146-148.

I need to be careful about verbatim quotes with the garbled table text. I'll quote only clean narrative text.

Let's write.

One more thing: The user explicitly says "STRICT INVARIANTS: ... When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since I was given the full text, I should cite pages. I'll use the page numbers visible: 141, 142, 143, 144, 145, 146, 147, 148, 149.

I will structure the LaTeX carefully.

Equation derivations:

Pythagorean:
\widehat{WP} = \frac{RS^\gamma}{RS^\gamma + RA^\gamma}

Taylor expansion around RS = RA = R_total:
Let \Delta = RS - RA.
\widehat{WP} \approx \frac{1}{2} + \frac{\gamma}{4 R_{total}} \Delta.
Units: WP dimensionless [0,1], R_total in points/game, \Delta in points/game, coefficient \gamma/(4 R_total) in game/point.

Exact model:
X = RS - RA for a random game. Assumption: \Pr(X=0) = 0.
WP = \Pr(X > 0).
E[X] = RS - RA.
MOV = E[X \mid X > 0], MOD = E[-X \mid X < 0].
Law of total expectation:
RS - RA = WP \cdot MOV - (1 - WP) \cdot MOD.
Solving:
WP = \frac{RS - RA + MOD}{MOV + MOD}.
For team i, x_i = RS_i - RA_i:
WP_i = a_i + b_i x_i,
b_i = (MOV_i + MOD_i)^{-1}, a_i = MOD_i (MOV_i + MOD_i)^{-1}.
Units: b_i in game/point, a_i dimensionless.

Cross-sectional regression:
WP_i = \alpha + \beta x_i + \epsilon_i, \alpha = 1/2.
\beta = \frac{Cov(x, WP)}{Var(x)}.
\gamma = 4 R_{total} \beta.

Decomposition:
\beta = \bar{b} + \beta_{a|x} \frac{E[x^3]}{Var(x)} + \beta_{b|x^2} \frac{E[x^4]}{Var(x)} + noise terms.
The paper argues the second and third correction terms are small: \beta_{a|x} < 0, |\beta_{a|x}| \approx 0.3 \bar{b} for MLB/NBA, and \beta_{b|x^2} \approx 0 because lines are parallel. Therefore:
\gamma \approx 4 R_{total} \bar{b}.
Empirical verification: \gamma_{NBA}/\gamma_{MLB} = 13.11/1.77 = 7.41; (R_{total} b)_{NBA}/(R_{total} b)_{MLB} = (0.0475 \times 100.06)/(0.1486 \times 4.40) = 7.27 [PAGE 147].

Breakdown: tie assumption fails (Pr(X=0)>0); strike-shortened seasons (NBA 2012 omitted [PAGE 147]); hockey overtime/shootout changes tie regime; football's ratio 1.59 vs 1.42 less satisfying [PAGE 148].

Now write out all sections.

Let's ensure I don't accidentally use a banned word. "Spread" is used in the source text ("let random variable X denote the spread"). The invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Hmm. The source uses "spread" to mean point differential. But the invariant says never mention spreads. This is tricky. The user wants me to avoid betting terminology. However, the source text itself uses "spread" in a non-betting sense (difference between runs for and against). Should I avoid repeating the word "spread"? To be safe, I will refer to it as "point differential" or "scoring differential" and avoid the word "spread" entirely, even though the source uses it. I can note that the source defines X as the run/point differential without using the banned word. Same for "totals" — I will avoid the word "totals" in betting context, but R_total is "average points per game." I can say "seasonal scoring average" instead of "total." Actually R_total is defined as "average number of runs per team per game." I'll use that phrasing.

Let's proceed.

I will now compose the final response.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds in three hops. Hop one: start from the generalized Pythagorean win expectancy \widehat{WP} = RS^\gamma / (RS^\gamma + RA^\gamma) [PAGE 142] and apply the first-order Taylor expansion reported by Dayaratna and Miller (2012) and Miller et al. (2014). Center the expansion at the league-average scoring level R_total, where RS \approx RA \approx R_total. Let \Delta = RS - RA be the per-game scoring differential. The expansion yields \widehat{WP} \approx 1/2 + [\gamma/(4 R_total)] \Delta [PAGE 143]. This establishes that the cross-sectional regression slope of win percentage on scoring differential is \beta = \gamma/(4 R_total), or equivalently \gamma = 4 R_total \beta [PAGE 143]. The units are consistent: \beta is win percentage per (point per game), i.e. game/point; R_total is points per game; \gamma is dimensionless.

Hop two: replace the cross-sectional heuristic with an exact within-team model. For a randomly selected game, define X as the team's scoring differential (points for minus points against). The sole assumption is \Pr(X = 0) = 0; no independence assumption between points scored and points allowed is required [PAGE 143]. The team's win probability is WP = \Pr(X > 0) [PAGE 143], and the seasonal mean satisfies E[X] = RS - RA [PAGE 143]. Define MOV = E[X | X > 0] and MOD = E[-X | X < 0] [PAGE 143–144]. By the law of total expectation, RS - RA = WP \cdot MOV - (1 - WP) \cdot MOD [PAGE 144]. Solving for WP gives the exact linear team-specific equation WP_i = (RS_i - RA_i + MOD_i) / (MOV_i + MOD_i) = a_i + b_i x_i, where x_i = RS_i - RA_i, b_i = (MOV_i + MOD_i)^{-1}, and a_i = MOD_i (MOV_i + MOD_i)^{-1} [PAGE 144]. Here b_i has units game/point and is the reciprocal of the combined average margin of victory and defeat.

Hop three: reconcile the team-exact slopes b_i with the league-wide regression slope \beta. Because equation (13) holds exactly for each team but equation (3) is a cross-sectional regression line, one cannot simply set b = \beta [PAGE 144–145]. Substituting WP_i = a_i + b_i x_i into the regression formula \beta = Cov(x, WP) / Var(x) and decomposing a_i and b_i into components regressed on x_i and x_i^2 produces correction terms \beta_{a|x} and \beta_{b|x^2} [PAGE 145–146]. The paper shows \beta_{a|x} < 0 because better teams (higher x_i) have larger margins of victory and smaller margins of defeat, lowering MOD_i/(MOV_i + MOD_i) [PAGE 146], and \beta_{b|x^2} \approx 0 because the team lines are essentially parallel [PAGE 146]. Thus \gamma \approx 4 R_total \bar{b}.

Gray-zone audit: The tie assumption is violated by historical NHL ties and rare NFL ties; if \Pr(X = 0) > 0, the exact linear equation loses its clean form and \gamma estimates bias. The strike-shortened 2012 NBA season was omitted because 66 games breaks the seasonal stability assumption [PAGE 147]. The correction term \beta b|x^2 is asserted to be "very small" and "often within two standard errors of zero," but not proven identically zero [PAGE 145–146]; this is a gray zone where empirical approximation substitutes for analytic exactness. Football's decomposition is the least satisfying: \gamma ratio 1.42 versus product ratio 1.59 [PAGE 148], indicating that R_total \times \bar{b} does not fully capture gridiron scoring-margin structure, perhaps because of low-scoring variance and discrete scoring events (field goals, touchdowns).
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations, with units and page citations.

Generalized Pythagorean win expectancy [PAGE 142]:
\[
\widehat{WP} = \frac{RS^{\gamma}}{RS^{\gamma} + RA^{\gamma}},
\]
where RS and RA are average runs/points per game scored for and against, [points/game], and \gamma is dimensionless.

First-order Taylor approximation about RS = RA = R_{total} [PAGE 143]:
\[
\widehat{WP} \approx \frac{1}{2} + \frac{\gamma}{4 R_{\text{total}}}\,(RS - RA).
\]
Here R_{\text{total}} is the league average points per team per game [points/game], and the regression slope \beta = \gamma/(4 R_{\text{total}}) carries units [game/point]. Solving for the exponent: \gamma = 4 R_{\text{total}} \beta [PAGE 143].

Exact within-team model [PAGE 143–144]. Let X denote per-game scoring differential. Assumption: \Pr(X = 0) = 0 (no ties). Win probability:
\[
WP = \Pr(X > 0).
\]
Mean differential:
\[
E[X] = RS - RA.
\]
Margins of victory and defeat:
\[
MOV = E[X \mid X > 0], \qquad MOD = E[-X \mid X < 0],
\]
both in [points/game]. Law of total expectation:
\[
RS - RA = WP \cdot MOV - (1 - WP) \cdot MOD.
\]
Solving for team i, with x_i = RS_i - RA_i:
\[
WP_i = \frac{RS_i - RA_i + MOD_i}{MOV_i + MOD_i} = a_i + b_i x_i,
\]
where
\[
b_i = \frac{1}{MOV_i + MOD_i} \quad [\text{game/point}], \qquad
a_i = \frac{MOD_i}{MOV_i + MOD_i} \quad [\text{dimensionless}].
\]

Cross-sectional regression and decomposition [PAGE 145–146]:
\[
\beta = \frac{Cov(x, WP)}{Var(x)}, \qquad \gamma = 4 R_{\text{total}} \beta.
\]
The decomposition of \beta into exact-model properties yields, to first order,
\[
\gamma \approx 4 R_{\text{total}} \,\bar{b},
\qquad \bar{b} = \frac{1}{n}\sum_{i=1}^{n} \frac{1}{MOV_i + MOD_i},
\]
with negative correction from \beta_{a|x} (about -30\% of \bar{b} for MLB and NBA) and negligible \beta_{b|x^2} [PAGE 146–147].

Empirical verification [PAGE 147]:
\[
\frac{\gamma_{\text{NBA}}}{\gamma_{\text{MLB}}} = \frac{13.11}{1.77} \approx 7.41,
\qquad
\frac{(R_{\text{total}} b)_{\text{NBA}}}{(R_{\text{total}} b)_{\text{MLB}}}
=
\frac{0.0475 \times 100.06}{0.1486 \times 4.40}
\approx 7.27.
\]

Breakdown regimes: (1) \Pr(X = 0) > 0, as in pre-shootout NHL or tie-capable NFL, violates the only structural assumption [PAGE 143]; (2) strike-shortened seasons (e.g., 2012 NBA, 66 games) were excluded from stability analysis [PAGE 147]; (3) football shows the largest mismatch between \gamma ratios and R_{\text{total}}\bar{b} ratios [PAGE 148], indicating the approximation is sport-specific and not universal.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage runs from Bill James's 1980 empirical Pythagorean formula for baseball [PAGE 141–142], through Miller's (2007) Weibull-distribution derivation that first linked scoring distributions to the Pythagorean exponent [PAGE 141], to Dayaratna and Miller's (2012) first-order Taylor linearization [PAGE 141–143], and finally to Kaplan and Rich's (2017) within-team exact decomposition [PAGE 141–149]. Each layer moves the model further from pure curve-fitting toward mechanism: James observed that win percentage tracks runs scored and allowed; Miller showed that independent Weibull scoring implies the Pythagorean form; Dayaratna and Miller linearized it; Kaplan and Rich demonstrated that \gamma is not a free sport constant but a composite of average scoring (R_total) and average scoring margin (via \bar{b} = 1/(MOV + MOD)).

Multi-week traps embedded in this genealogy: (1) early-season small-sample inflation of \gamma because x_i = RS_i - RA_i has high variance over the first few weeks, making the regression slope \beta unstable; (2) strength-of-schedule confounding, where teams playing weaker opponents inflate RS and depress RA simultaneously, violating the assumption that the scoring differential reflects only team strength; (3) injury and fatigue accumulation across a 162-game MLB season or 82-game NBA season means MOV_i and MOD_i are not stationary within the season, so the exact model's per-team constants drift week to week; (4) the cross-sectional attenuation noted in Figures 1–2 [PAGE 144–145] means that a team-specific hot streak does not translate linearly into a changed league-wide \gamma. Analysts who extrapolate a team's early \gamma outlier forward are committing a retrocausal trap: they treat a cross-sectional league parameter as if it were a time-series team parameter.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of teams that outperform their Pythagorean expectation—winning an abnormal share of close games—to regress toward the mean when random variance in MOV and MOD normalizes. In the exact model, overperformance appears as a temporarily high WP_i relative to x_i, which the decomposition attributes to an elevated MOD_i/(MOV_i + MOD_i) ratio or an anomalous b_i. Opponents and front offices observe this and adjust: bullpen usage, defensive rotations, and pace-of-play change in response to perceived vulnerability. The counter-trap is the analyst's mirror error: assuming regression is inevitable and therefore underweighting genuine structural improvements (e.g., a trade that raises RS without changing RA). Because \gamma \approx 4 R_total \bar{b}, a real change in average scoring or margin shifts the entire mapping, not just a team's residual. The clock operates through season length: MLB's 162 games allow the law of total expectation to converge, so WP_i = a_i + b_i x_i stabilizes; NFL's 16 games means Var(x) is large, \beta is noisy, and \gamma estimates swing widely (Table 3 shows standard errors up to 0.31 on \gamma \approx 2.93 in 2016 [PAGE 148]). Recursive theory of mind therefore predicts that in short-season sports, crisis habit regression is overdiagnosed because sampling error mimics mean reversion, while in long-season sports the counter-trap dominates because analysts ignore slow real drifts in R_total and \bar{b}.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Weather directly vetoes the assumption that X is an identically distributed random variable across games. MLB wind at open-air parks changes RS and RA asymmetrically by side (left/right field dimensions), so E[X | game] is not constant within a team's season. NFL cold and wind suppress passing and total points per game, shifting R_total mid-season; because \gamma = 4 R_total \beta, a weather-induced drop in R_total mechanically changes \gamma even if team talent is fixed [PAGE 143, 147]. Biomechanical layer: Pitching rotations create serial dependence in RS and RA for baseball teams, violating the implicit game-by-game independence needed for a clean spread distribution; basketball pace and fatigue create heteroskedasticity in MOV_i and MOD_i across back-to-back games. Weather-biomechanical interaction: NHL ice quality and arena temperature affect scoring margins in ways not captured by a season-long average b_i. Tie rule layer: The exact model's single assumption \Pr(X=0)=0 [PAGE 143] is vetoed by historical NHL ties and rare NFL ties; if ties exist, WP = Pr(X>0) no longer exhausts the sample space, and the linear law-of-total-expectation derivation breaks. The veto is absolute for any sport where the scoring rule permits a zero differential with non-negligible probability. Adjudication rule: any dataset with Pr(X=0) > 0 must either exclude ties, model them as a third outcome, or accept biased \gamma; no rescaling of R_total or \bar{b} repairs the structural failure.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning verification (RLVR) veto scenarios, each with a structural condition, a counterfactual prediction derived from the paper's equations, and a falsification test.

Veto 1 — Tie regime collapse (NHL pre-2005). Condition: \Pr(X=0) > 0 because regular-season ties were permitted before the shootout era. The exact model's assumption \Pr(X=0)=0 fails [PAGE 143]. Prediction: Pythagorean \gamma estimated from tie-inclusive NHL seasons will deviate systematically from post-2005 seasons, even after controlling for R_total, because the denominator MOV + MOD no longer partitions all games. Test: Compare Table 4 hockey \gamma values (2007–2016, post-shootout, \gamma \approx 1.86–2.27 [PAGE 147]) against 1999–2004 tie-era NHL \gamma estimated from the same regression WP = \alpha + \beta x. A statistically significant level shift in \beta, and hence \gamma = 4 R_total \beta, confirms the veto.

Veto 2 — Scoring-rule perturbation (NFL extra-point relocation). Condition: A rule change alters average points per game R_total and average scoring margin MOV + MOD simultaneously. Since \gamma \approx 4 R_total \bar{b} and \bar{b} = 1/(MOV + MOD), \gamma should scale approximately with R_total/(MOV + MOD). Prediction: After the NFL moved extra-point kicks back in 2015, lowering conversion rates and slightly changing scoring, \beta = Cov(x, WP)/Var(x) should drift in proportion to the change in R_total \times \bar{b}; if \gamma remains stable while R_total and margins move, the decomposition is falsified for football. Test: Regress season-level WP on x_i for 2014 vs. 2016 NFL; compare estimated \gamma = 4 R_total \beta against Table 3 values (2.72 in 2014, 2.93 in 2016 [PAGE 148]). A mismatch beyond reported standard errors is a veto.

Veto 3 — Park-induced heteroskedasticity (MLB Coors Field). Condition: Extreme park effects make within-team RS and RA distributions heteroskedastic and correlated across games, so a single b_i = (MOV_i + MOD_i)^{-1} cannot summarize a team's season. Prediction: Residuals from the exact linear fit WP_i = a_i + b_i x_i will show significantly larger variance for extreme-offense parks than for neutral parks, violating the constant-slope implication of Figure 1's parallel lines [PAGE 144]. Test: Fit equation (13) to 2016 MLB team data [PAGE 144], compute residual variance stratified by park factor, and run a Breusch-Pagan-style heteroskedasticity test. Rejection of homoskedasticity at p < 0.05 confirms that the exact model's team-level linearity is locally vetoed by physical context.
</RLVR_COUNTERFACTUAL_VETOES>