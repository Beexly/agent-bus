---
source: "2013 - Crossing in Soccer has a Strong Negative Impact on Scoring Evidence from the English Premier League and the German Bundesliga - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2013"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 7407
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about crossing in soccer using the GSE + GSI Frontier Reasoning Foundry framework. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines (spreads, totals, moneylines, odds). The source mentions betting markets (Betfair, Win/Draw/Loss, Total Number of Goals, Exact Score, Team to Score Next). I must NOT mention these as betting lines. I can discuss Poisson processes for goal distribution scientifically but not frame them as betting odds/quotes.
- No toy equations. Must use formal LaTeX.
- Page citations: The source text doesn't have explicit page numbers like [PAGE 1], but it says PAGES: 9. I need to infer page markers or note that the source is a 9-page document. Since the text doesn't have explicit [PAGE N] markers, I should perhaps treat sections as pages or note the absence. Wait, the instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source text provided doesn't have [PAGE N] markers visible. It's a markdown dump of a PDF. I should cite sections or note that page markers aren't explicitly delimited in the provided text, but I can reference section headers. However, to be safe, I can create logical page references based on the flow, or just cite section names. Actually, looking at the text, there are no [PAGE N] markers. I should state that explicitly or use section-based citations. But the instruction says "when source pages are provided". Since they're not explicitly provided with markers, I'll cite by section header and note the 9-page extent. I can also use approximate page ranges if I want, but that might be inventing. Better to cite [SECTION: ...] or just note the absence. Hmm, but the invariant says cite exact [PAGE N] markers when provided. Since none are provided, I don't have to invent them. I'll cite section titles and note the document is 9 pages.

Let me structure the response.

First, understand the paper:
- Author: Jan Vecer, Frankfurt School of Finance and Management
- NESSIS 2013, Harvard University, Sept 21, 2013
- Topic: Crossing in soccer has strong negative impact on scoring, EPL and Bundesliga.
- Abstract: ~15% of EPL goals from open play crosses. 1 open cross out of 91.92 leads to goal. Multilevel Poisson regression. Net effect typically negative or neutral. Average team can score up to additional 0.656 goals per game if reduced open crossing. Stronger teams miss more goal opportunities when crossing than weaker teams. Top teams (Arsenal, Chelsea, Liverpool, Man City, Tottenham) potential extra goal per match if reduced crossing. Defense: more goal opportunities missed when crossing against weak teams than strong teams. Actual conversion plays minor role.
- Original motivation: in-play prediction from statistics during game. Mentions betting markets (Win, Draw, Loss, Total Goals, Exact Score, Team to Score Next). I must avoid discussing these as betting lines.
- Poisson process for goal distribution: λt and µt scoring intensities for home/away teams. Expected number of goals in remainder. Independent Poisson.
- Known limitations: scores not independent. Correlation EPL since 2006 is -0.057. Realized fraction of draws higher than independent Poisson. Memory in goals, small effect. Next Goal quote should stay same before/after each goal under Poisson (I should avoid "quote").
- Data sources: OPTA (since 2008, 1900+ games), espnfc.com, premierleague.com (since 2006, 2700+ games), bundesliga.de (since 2009, 1250+ games, tracking since 2011).
- Significant variables: Top Speed (Bundesliga), Discipline + Stoppages, Open Crosses.
- Facts: EPL avg team 18.2 open crosses/game, scores 1.33 goals/game. Bundesliga avg 11 open crosses/game, scores 1.45 goals/game. EPL: 18.2 open crosses produce 3.7 good crosses and 14.5 bad crosses. Goal per 92 open crosses. Quality variable: Man Utd 43.8 crosses/goal, Southampton 143.2 crosses/goal.
- Model: Multilevel cross sectional Poisson regression. Teams grouped by attack (j[i]) and defense (k[i]). u_j ~ N(0, Σu), v_k ~ N(0, Σv).
- EPL Model 1: Intercept 0.473376 (0.100849), OpenCross -0.022861 (0.003196), Home 0.417204 (0.029636). AIC 4229, BIC 4286, Log Likelihood -2106, Deviance 4211, Num obs 3800, Num groups Team 29, Against 29. Variances...
- Bundesliga Model 1: Intercept 0.374347 (0.088441), OpenCross -0.020001 (0.004450), Home 0.281266 (0.034298). AIC 3009, BIC 3061, Log Likelihood -1495, Deviance 2991, Num obs 2536, Num groups Team 24, Against 24.
- Team-specific tables for EPL and Bundesliga attack/defense intercepts and OpenCross coefficients.
- Conclusions: Impact negative for most teams, neutral at best. Stronger attacking teams more negative impact. Man Utd exception. Weaker defending teams more negative. Neutral against strong teams (Bayern). Long balls and corners inside box similar negative pattern but lower significance. Alternative play keeping possession more optimal.
- Recommendation: Open crossing used by weaker teams vs stronger teams when luck matters, or stronger teams improve crossing quality to Man Utd level (43.8 crosses/goal). Chelsea second best 62.6. Teams overuse open crossing. Reduction can increase scoring. Top teams can score 40+ extra goals per season.

Now I need to write the six sections with >=1000 words total, THINK_TRACE >=400 words.

Section 1: THINK_TRACE (>=400 words)
Deep multi-hop derivation and gray-zone audit.
- Derive expected goal reduction from OpenCross coefficient: log link Poisson: log(λ) = β0 + β1*OpenCross + ... So Δlog(λ) = β1 * ΔCrosses. For EPL β1 = -0.022861. If a team reduces crosses by, say, 10, Δlog(λ) = -0.22861, λ_new = λ_old * exp(-0.22861) ≈ 0.7956 λ_old, about 20% reduction in scoring intensity? Wait, that seems huge. But the coefficient is per cross. Average EPL team 18.2 crosses. If reduced to 0, Δlog = -0.022861*18.2 = -0.416, exp(-0.416)=0.66, so 34% reduction? That can't be right because abstract says 0.656 additional goals per game. Let's check: baseline λ maybe around 1.33. exp(-0.022861 * x). The abstract says average team can score up to additional 0.656 goals per game if reduced open crossing. That implies going from current crosses to zero? 1.33 + 0.656 = 1.986, ratio 1.49. exp(0.022861*18.2) = exp(0.416) = 1.516. Yes, that matches. So eliminating all open crosses increases scoring intensity by ~52%. But that's ceteris paribus, holding other things constant, which is the gray zone: crosses may substitute for other plays, indirect effects, follow-up plays, endogeneity (teams cross when trailing or when in certain game states), selection bias (better teams cross from better positions), etc.
- Gray zones: multilevel model assumes random intercepts/slopes normally distributed. Variance of Team.OpenCross is tiny (0.000110 EPL), suggesting little heterogeneity beyond fixed effects? Actually team-specific slopes are given. The model doesn't explicitly model game state (score, time remaining), which is a major confounder in soccer (teams crossing more when behind or when defending a lead). The paper acknowledges "crosses may lead to goals indirectly in follow-up play" and "giving up alternative way of playing." This is an omitted variable / simultaneous equation problem.
- Poisson equidispersion: variance = mean. Soccer scoring often overdispersed. The paper notes correlation -0.057 and more draws than independent Poisson, violating independence.
- Unit analysis: OpenCross is count (dimensionless count per match). Coefficient β1 has units of log-goals per cross (or per unit count). Intercept β0 in log-goals per match. Home coefficient in log-goals.
- Page/section citations: since no page numbers, I'll cite [SECTION: ...] or [PAGE: unknown]. But I can say the document comprises 9 pages and cite by section header. I'll use [DOC p.~N] estimates? Better not invent. I'll cite [SECTION: Abstract], [SECTION: EPL Model], etc., and note that explicit [PAGE N] markers are absent from the provided dump.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS
Formal LaTeX, units, page citations, breakdown.
- Define Poisson process: N(t) ~ Poisson(λt * t) or for remainder: G_home ~ Poisson(λ_t * (T - t)), G_away ~ Poisson(µ_t * (T - t)). Units: goals (dimensionless count), λ_t, µ_t in goals/minute or goals per remaining time.
- Joint probability under independence: P(G_h = g_h, G_a = g_a) = exp(-(λ+µ)τ) (λτ)^g_h / g_h! * (µτ)^g_a / g_a!. Units dimensionless probability.
- Correlation constraint: ρ = -0.057 (EPL since 2006). Draw fraction > independent Poisson implies negative covariance or dependence.
- Multilevel Poisson: log(E[Y_ij | u_j, v_k]) = β_0 + β_1 OpenCross_ij + β_2 Home_ij + u_j + v_k. Where u_j ~ N(0, σ²_u), v_k ~ N(0, σ²_v). For slopes: u_{1j} ~ N(0, σ²_{u1}), etc. The paper shows random intercepts and random slopes for OpenCross by team.
- EPL Model 1 equation: log(λ_i) = 0.473376 - 0.022861 * OpenCross_i + 0.417204 * Home_i + u_{team[i]} + v_{against[i]}.
- Bundesliga: log(λ_i) = 0.374347 - 0.020001 * OpenCross_i + 0.281266 * Home_i + ...
- Marginal effect: ∂E[Y]/∂Crosses = E[Y] * β_1. Since β_1 < 0, marginal effect negative. For EPL average team λ ≈ 1.33, ∂λ/∂Crosses ≈ 1.33 * (-0.022861) ≈ -0.0304 goals per cross. Over 18.2 crosses, total ceteris paribus effect ≈ -0.553 goals, close to abstract's 0.656 (difference due to using team-specific intercepts/averages).
- Breakdown/singularity: λ → 0 as Crosses → ∞ mathematically (log link goes to -∞), but physically crosses cannot exceed bound (max ~50 per match shown in graphs). At Crosses = 0, model predicts baseline exp(β0 + ...). Extrapolation beyond observed range (0-50) is invalid. Overdispersion: if Var(Y) > E[Y], Poisson standard errors understated; standard errors in parentheses may be too small.
- Cite sections: [SECTION: The Statistical Model], [SECTION: EPL Model], [SECTION: Bundesliga Model], [SECTION: Known Limitations of Poisson Model]. Since no page markers, I'll note [PAGE MARKERS ABSENT; 9-PAGE DOCUMENT] and cite section headers.

Section 3: RETROCAUSAL_GENEALOGY
Historical/scientific lineage & multi-week traps.
- Lineage: Poisson regression in sports goes back to Maher (1982) modeling soccer scores as Poisson. Dixon and Coles (1997) bivariate Poisson for dependence. Here Vecer uses multilevel cross-sectional Poisson. The paper mentions SSRN update. Lineage from actuarial/queueing theory (Poisson process) to sports analytics (OPTA data since 2008, tracking since 2011).
- Multi-week traps: If a coach reads this and bans crossing overnight, over a 3-4 week microcycle, players may lose set-piece timing, aerial duel confidence, and transition structure. The "trap" is that immediate reduction in crossing without replacing with possession-based progression (which the paper suggests is more optimal) leads to lower territorial control and higher opponent counter-attack exposure. Multi-week adaptation: regression to mean as teams adjust defensive shapes to fewer crosses (defenders no longer need to mark the box as aggressively), potentially neutralizing the benefit. Also, stronger teams relying on skill (per paper's conclusion) need weeks of training to improve crossing quality to Man Utd benchmark (43.8 crosses/goal) or Chelsea (62.6). A 1-week sample may show noise; a 4-week window needed to separate tactical change from random variation in conversion (binomial noise: p ≈ 1/92 ≈ 0.0109, standard error for n crosses ≈ sqrt(p(1-p)/n)).
- Cite sections.

Section 4: RECURSIVE_THEORY_OF_MIND
Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under pressure (e.g., trailing late), coaches revert to high-crossing "panic" strategy despite negative expected value because crosses are visibly high-effort and TV-highlight biased. The paper explicitly notes "strong observational bias on TV highlights that show mostly good crosses and crosses leading to goals." This creates availability heuristic: coaches overestimate crossing value.
- Counter-trap: Opponent anticipates reduced crossing and compresses central space, making the alternative possession play (which paper says is more optimal) harder. The counter-trap is to mix crossing selectively (weaker vs stronger teams, or against weak defenses where it's neutral/less negative) to keep defense honest.
- Clock: Game-state dependence. The model is cross-sectional and doesn't control for time remaining or score differential. Late-game crossing may have different value (e.g., chasing a goal, high variance needed). The Poisson intensity λ_t, µ_t are time-varying in the in-play model but the crossing analysis aggregates over full matches. Thus the "clock" (match minute) is a omitted moderator: a cross at minute 90 when down by one has different expected value than at minute 20.
- Recursive ToM: Coach A thinks Coach B will defend crosses less if A crosses less; Coach B thinks A will cross less and thus marks the box less; both converge to suboptimal possession stagnation unless one deviates. This is a coordination game with multiple equilibria.

Section 5: CROSS_LAYER_VETO_ADJUDICATION
Physical/biomechanical/weather veto proof.
- Physical layer: Pitch dimensions and ball aerodynamics. A cross is an airborne delivery from side to front of goal. Biomechanics: heading requires timing, jump height, neck muscle loading. The paper notes Manchester United needs 43.8 crosses/goal vs Southampton 143.2. This variance implies biomechanical/technical skill differences, not just tactical.
- Weather: Wind affects aerial delivery precision. The paper says "aerial delivery of the ball has less precision and thus more luck than skill is involved." In high-wind regimes (Premier League winter, Bundesliga autumn), the luck component rises, strengthening the negative effect for skill-reliant strong teams. Veto: if wind speed > threshold (not specified in paper; cannot invent), crossing should be vetoed. But paper doesn't give wind data; so I must say the paper lacks meteorological covariates, representing a veto-relevant omission.
- Physical veto: The model's dependent variable is goals per match; it does not include player fatigue, sprint speed (except Top Speed noted as significant variable for Bundesliga), or stoppages. Thus a fatigue-induced drop in crossing quality in the final 15 minutes is unmodeled.
- No fake ratios. I won't invent Force/Fatigue. I'll cite "Top Speed (Bundesliga)" as a significant variable from [SECTION: Inference of the Intensities from Athletic Performance].
- Breakdown: The Poisson model breaks down under non-stationary intensity (red cards, penalties, weather shifts). The independence assumption breaks down when score affects strategy (negative correlation -0.057).

Section 6: RLVR_COUNTERFACTUAL_VETOES
3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning via Verifiable Rewards? Or some framework. I need 3 counterfactual veto scenarios that are verifiable.
1. Scenario: EPL top-6 team reduces open crosses by 50% (from ~18 to ~9) over 5 matches while holding possession and final-third entries constant. Veto: If goal conversion from non-cross chances does not increase proportionally, veto the crossing reduction because the model's ceteris paribus assumption fails (crosses displace higher-value shots). Prediction: Based on β1 = -0.022861, log-intensity change = -0.022861 * (-9) = +0.2057, multiplicative factor exp(0.2057) ≈ 1.228. Expected +0.30 goals/game (from 1.33 to 1.63). Verifiable via match logs: if actual Δgoals < +0.10/game, veto.
2. Scenario: Bundesliga weak defense (e.g., high intercept defense team) faces strong attack. Paper says negative impact more visible for weaker defending teams; neutral vs strong teams (Bayers? actually Bayern defense coefficient positive 0.002192). Veto: If a weak-defense team instructs its defenders to allow crosses (baiting), expecting neutral effect, veto because against strong attacking teams the defensive OpenCross slope is near zero or positive (Bayern +0.002192), meaning crosses against Bayern may not suppress their scoring and could even slightly aid it? Wait, the defensive table shows OpenCross coefficient for the defending team? Need to interpret. The model is for goals scored by a team. Defense table likely models goals conceded? Actually the tables are labeled "EPL Model - Defense" with intercepts and OpenCross. It might be modeling goals scored against that team (i.e., when they are defending). The OpenCross coefficient there might refer to crosses faced by the defending team. For Bayern defense, coefficient is +0.002192 (slightly positive), meaning more crosses faced is associated with slightly more goals conceded (or less negative). The paper says "neutral against strong teams (FC Bayern Munchen)." So veto scenario: weak-defense team reduces crossing against strong opponent expecting to deny them chances; but if opponent is Bayern, effect neutral, so veto the tactical switch because it won't suppress scoring and may reduce own attacking options. Prediction: Δgoals conceded ≈ 0; verifiable via shots faced from crosses.
3. Scenario: Southampton-level crossing quality (143.2 crosses/goal) vs Man Utd (43.8). Veto: A team with Southampton-level crossing quality attempts to increase crossing volume to create chaos. Veto because marginal expected goals per cross is strongly negative and conversion is binomial with p ≈ 1/143 ≈ 0.007. Prediction: For 20 extra crosses, expected goals = 20 * (1/143) ≈ 0.14, but opportunity cost of foregone shots (assume shot conversion 0.1) = 2.0 expected goals lost if each cross replaces a shot. Net strongly negative. Verifiable via expected goals (xG) tracking. Need to avoid betting terms. Use "expected goals" as a statistical term, not betting odds.

Wait, I must ensure no betting lines. "Expected goals" is fine (it's a statistical metric). Avoid "odds," "quotes," "spreads," "moneylines," "totals." The source mentions betting markets; I must not reproduce them as lines. I can mention the original motivation was in-play prediction but not detail the betting contracts as actionable lines.

Word count: Need >=1000 words total. THINK_TRACE >=400. Others can be substantial. I'll aim for ~1500-2000 words total.

Formatting: Exact XML tags. No extra tags. Must be well-formed.

Let me draft carefully.

THINK_TRACE: I need deep multi-hop derivation and gray-zone audit. Start with the Poisson log-link derivation. Show how coefficient translates to goal expectation. Discuss endogeneity. Cite sections. No page numbers available; note it.

Let's write.

I need to be careful about page citations. The user provided PAGES: 9 but no [PAGE N] markers. I will state [PAGE MARKERS NOT FOUND IN SOURCE DUMP; CITING BY SECTION HEADER, 9-PAGE DOCUMENT] once, then cite [SECTION: ...].

Let's begin drafting each section.

THINK_TRACE (>=400 words):

The central inferential object is the multilevel cross-sectional Poisson regression reported in [SECTION: EPL Model] and [SECTION: Bundesliga Model]. Let Y_i denote goals scored by team i in match i. The model specifies a log link:

log(E[Y_i | ...]) = β_0 + β_1 OpenCross_i + β_2 Home_i + u_{attack[i]} + v_{defense[i]}

where u and v are team-level random effects. In the EPL pooled specification [SECTION: EPL Model], β_1 = -0.022861 (SE 0.003196). Because OpenCross is a count per match, β_1 carries units of log-goals per open cross. The marginal effect on expected goals is ∂E[Y]/∂OpenCross = E[Y] × β_1. Using the EPL sample mean of 1.33 goals per match [SECTION: Some Facts about Crossing], the marginal effect is approximately -0.0304 expected goals per additional open cross. Over the sample mean of 18.2 open crosses per match, the ceteris paribus intensity change from eliminating all open crosses is Δlog λ = -0.022861 × 18.2 ≈ -0.416, or λ_new / λ_old ≈ exp(-0.416) ≈ 0.66. This implies a roughly 34% reduction in scoring intensity if crosses are removed, which is why the abstract frames the upside as up to +0.656 goals per match [SECTION: Abstract].

Gray-zone audit. First, endogeneity: OpenCross is not randomly assigned. Teams cross more when trailing, when wide areas are open, or when central penetration is denied. The model is cross-sectional and does not condition on game state (score differential, minute, red cards). The Poisson intensity section [SECTION: Implied Intensities] describes λ_t and µ_t as time-varying for in-play prediction, yet the crossing analysis aggregates across full matches, embedding an omitted-variable bias: crossing may be a symptom of defensive pressure rather than a cause of scoring failure. Second, indirect effects: [SECTION: Concerns] explicitly states crosses may lead to goals indirectly in follow-up play and that crossing gives up an alternative way of playing. A simple regression of goals on open crosses cannot disentangle direct conversion from possession sacrifice. Third, distributional misspecification: [SECTION: Known Limitations of Poisson Model] reports an EPL score correlation of -0.057 since 2006 and a realized draw fraction above the independent-Poisson implication, violating both independence and equidispersion. Fourth, heterogeneity: team-specific slopes (e.g., Tottenham -0.040664 vs Manchester United -0.011707 in [SECTION: EPL Model - Attack]) show the average effect masks tactical regimes. Fifth, observation bias: [SECTION: Some Facts about Crossing] notes TV highlights overrepresent successful crosses, creating an availability heuristic that inflates perceived crossing value among coaching staff.

Retrocausal lineage and multi-week traps will be covered later; here I close by noting the singularity regime: as OpenCross → ∞ under the log link, λ → 0, an asymptotic absurdity because physical crosses are bounded by match duration and pitch geometry (graphs in [SECTION: Tottenham Attack] et al. show axes only to 50 crosses). Extrapolation beyond the observed 0–50 range is invalid. The standard errors reported in parentheses assume Poisson equidispersion; if overdispersion is present, inference is overconfident.

That's probably ~450 words. Good.

SOURCE_OPERATORS_AND_EQUATIONS:

Define formal equations.

Poisson process for remainder:
Let τ = T_remaining / 90 in match units or seconds. G_h(τ) ~ Pois(λ_t τ), G_a(τ) ~ Pois(µ_t τ). λ_t, µ_t in goals per unit time.
Joint under independence: P(G_h=g_h, G_a=g_a) = e^{-(λ_t+µ_t)τ} (λ_t τ)^{g_h}/g_h! × (µ_t τ)^{g_a}/g_a!.

Multilevel model:
log(λ_{ijk}) = β_0 + β_1 X_{ijk} + β_2 H_{ijk} + u_j + v_k + u_{1j} X_{ijk} + v_{1k} X_{ijk}
u_j ~ N(0, σ²_u), v_k ~ N(0, σ²_v), u_{1j} ~ N(0, σ²_{u1}), v_{1k} ~ N(0, σ²_{v1}).

EPL Model 1:
log(λ_i) = 0.473376 - 0.022861·OpenCross_i + 0.417204·Home_i + u_{team[i]} + v_{against[i]}.
Standard errors: (0.100849), (0.003196), (0.029636).
Fit: AIC 4229, BIC 4286, LL -2106, Deviance 4211, N=3800, groups Team=29, Against=29.
Variance components: Var(Team.Intercept)=0.121923, Var(Team.OpenCross)=0.000110, Var(Against.Intercept)=0.112291, Var(Against.OpenCross)=0.000028.

Bundesliga Model 1:
log(λ_i) = 0.374347 - 0.020001·OpenCross_i + 0.281266·Home_i + ...
SE: (0.088441), (0.004450), (0.034298). AIC 3009, BIC 3061, LL -1495, Deviance 2991, N=2536, groups=24 each.
Variances: 0.064105, 0.000080, 0.070237, 0.000070.

Team-specific slopes EPL attack: Tottenham -0.040664 (most negative), Chelsea -0.031954, Arsenal -0.030510, Liverpool -0.029654, Man City -0.029128. Man Utd -0.011707 (least negative).
EPL defense: West Bromwich -0.025954, West Ham -0.25036? Actually -0.025036, Southampton -0.023927.
Bundesliga defense: Bayern +0.002192 (positive), Dortmund -0.003145 (near zero), others negative.

Breakdown/singularity:
- Log link singularity: λ → 0 as Crosses → ∞; invalid beyond observed range (~50).
- Equidispersion breakdown: Var(Y)=E[Y] assumed; soccer data often overdispersed; correlation ρ=-0.057 and excess draws violate independence.
- Game-state non-stationarity: λ_t, µ_t time-varying in-play but crossing model is full-match aggregated; red cards, penalties invalidate constant intensity.
- Unit dimensions: OpenCross [count/match], β_1 [log-goals per cross], β_0 [log-goals per match], intercepts dimensionless log-rate.

Page citations: [PAGE MARKERS ABSENT; SOURCE IS 9-PAGE PDF DUMP; CITING SECTION HEADERS: Abstract, Some Facts about Crossing, The Statistical Model, EPL Model, Bundesliga Model, Known Limitations of Poisson Model, Concerns, Conclusions].

RETROCAUSAL_GENEALOGY:

Historical lineage: Poisson sports modeling descends from Maher (1982) and Dixon & Coles (1997), extended here to multilevel cross-sectional form with OPTA/ESPn data. The paper's in-play motivation references dynamic scoring intensities λ_t, µ_t, echoing modern survival/intensity approaches. The data pipeline (OPTA since 2008, premierleague.com since 2006, bundesliga.de tracking since 2011) places it at the onset of event-data era.

Multi-week traps:
- Tactical substitution trap: If a strong attacking team (e.g., Arsenal, intercept 1.042368, slope -0.030510) cuts crossing by 50% in week 1 but does not train alternative final-third progression, expected goals may rise on paper but actual creation falls because possession is ceded in less dangerous zones. Over 3–4 weeks, defensive opponents adjust by compressing central space, negating the gain.
- Conversion noise trap: Crossing conversion is binomial with p ≈ 1/92 ≈ 0.0109 (EPL). Over one matchweek (n ≈ 18 crosses), the standard error of the conversion rate is sqrt(p(1-p)/n) ≈ 0.024, larger than the mean; a single clean sheet or fluke goal can reverse the sign of observed effect, causing coaches to abandon the strategy prematurely.
- Quality adaptation trap: The paper recommends strong teams improve crossing quality to the Manchester United benchmark (43.8 crosses/goal) or Chelsea (62.6). This is a multi-month biomechanical/technical project, not a single-week selection change. A team attempting this in a 2-week window will regress to its mean crossing quality, producing negative expected value without the offsetting skill gain.
- Defensive baiting trap: Weaker defending teams suffer more from crosses faced; however, against elite defenses (Bayern slope +0.002192, near neutral), instructing defenders to concede crosses as a "trap" fails because the elite defense nullifies the aerial threat while the attacking team loses possession in advanced positions.

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: Under scoreboard pressure (trailing, late minutes), coaches regress to high-crossing "direct" habits. The paper identifies an observational bias: TV highlights show mostly good crosses and goals, creating an availability heuristic that makes crossing appear high-value despite p ≈ 0.011. In a crisis, the recursive belief is "the opponent expects us to keep possession, so they will not defend the box; therefore a cross will surprise them." This is second-order thinking that collapses if the opponent anticipates the regression and loads the penalty area.

Counter-trap: If Team A reduces crossing to exploit the negative coefficient, Team B infers A will bypass wide areas and compresses central channels, raising the cost of the alternative possession play. Team A must then randomize: cross selectively against weak defenses (where penalty is lower) and withhold against strong defenses (where penalty is higher or neutral). This is a mixed-strategy equilibrium; pure "never cross" is exploitable.

Clock: The match clock is an unmodeled moderator. The Poisson intensity section [SECTION: Implied Intensities] frames λ_t and µ_t as time-varying for the remainder of the match, yet the crossing regression pools all minutes. A cross at minute 15 in a 0–0 game has a different expected marginal value than a cross at minute 88 when trailing by one (high variance needed). Because the model lacks minute × OpenCross interactions, the estimated β_1 is an average over game states that may mask positive crossing value in desperate late-game situations. Recursive ToM over the clock: both coaches know the other knows the clock is ticking; late-game crossing becomes a commitment device for high-risk attack, which can be rational even if ex ante negative in expectation.

CROSS_LAYER_VETO_ADJUDICATION:

Physical layer: A cross is an airborne delivery from the side of the field across to the front of the goal [SECTION: Some Facts about Crossing]. Biomechanically, heading requires aerial timing, jump capacity, and neck stabilization; the wide variance in crosses-per-goal (Man Utd 43.8, Southampton 143.2, Chelsea 62.6 [SECTION: Conclusions]) indicates technical skill differences rather than purely tactical ones. Veto: any policy that treats crossing as a uniform tactical dial without accounting for squad-specific aerial duel win rates is physically ungrounded.

Weather layer: The paper states aerial delivery involves "less precision and thus more luck than skill" [SECTION: Conclusions]. In high-wind or heavy-rain regimes (common in EPL winter and Bundesliga autumn), the luck component rises and the precision-dependent crossing success rate falls. No meteorological covariates appear in the model; therefore weather is a veto-relevant omitted layer: crossing volume should be reduced in adverse wind independent of the Poisson coefficient.

Biomechanical/load layer: [SECTION: Inference of the Intensities from Athletic Performance] lists Top Speed (Bundesliga), Discipline + Stoppages as significant variables alongside Open Crosses. Fatigue in the final 15 minutes reduces crossing accuracy; the model's match-level aggregation cannot separate early-match high-quality crosses from late-match fatigued crosses. Veto: if a team's crossing volume is concentrated in the last 20 minutes, the negative coefficient underestimates the harm because fatigue correlates with both crossing volume and defensive disorganization.

Veto adjudication proof: The Poisson model breaks down under non-stationary intensity (red cards, penalties, weather shifts) and violates independence (ρ = -0.057; excess draws). Any tactical decision derived solely from β_1 without controlling for these layers fails the veto test. Approved crossing policy must be conditional: (i) squad crossing quality above the Southampton threshold, (ii) game state not desperate-late, (iii) wind below adverse threshold, (iv) not substituting for a higher-xG central penetration option.

RLVR_COUNTERFACTUAL_VETOES:

Need 3 verifiable RLVR veto scenarios + predictions. RLVR likely means reinforcement learning via verifiable rewards, but I'll treat as counterfactual veto scenarios that are empirically verifiable.

Scenario 1: EPL top-six team reduces open crosses by 50% (from ~18.2 to ~9.1) over 5 consecutive matches while holding final-third entries and outside-box shots constant. Veto condition: if non-cross expected goals does not rise by at least the model-implied offset, veto the crossing reduction as a net-negative possession transfer.
Prediction: β_1 = -0.022861. ΔCrosses = -9.1. Δlog λ = (-0.022861)(-9.1) = +0.2080. Multiplicative factor exp(0.2080) ≈ 1.231. Expected Δgoals = 1.33 × 0.231 ≈ +0.307 goals per match (from 1.33 to ~1.64). Verification: match event logs over 5 games; if actual Δgoals < +0.10 per match, reject the ceteris paribus assumption and veto.

Scenario 2: Bundesliga team with weak defense instructs its back line to concede crosses against FC Bayern Munich, betting on the neutral defensive slope for Bayern (+0.002192) [SECTION: Bundesliga Model - Defense]. Veto condition: if Bayern's goal-scoring intensity does not remain unchanged or rises, veto the defensive baiting because crosses against elite defenses are not costless and the attacking team surrenders possession.
Prediction: Bayern defensive slope ≈ +0.002192 implies approximately zero or slightly positive association between crosses faced and goals conceded; expected Δgoals conceded ≈ 0 over a 90-minute match. Meanwhile, the baiting team forgoes its own attacking crosses, losing its own β_1 benefit. Verification: track shots conceded from open crosses and goals conceded in 3 matches against Bayern; if goals conceded > baseline or possession in final third drops >15%, veto.

Scenario 3: Southampton-quality crossing squad (143.2 crosses per goal, p ≈ 0.0070) increases open crossing volume by 15 per match to create "chaos." Veto condition: if expected goals from crosses plus expected goals from displaced shots is below baseline, veto the volume increase.
Prediction: Expected goals from 15 extra crosses = 15 × (1/143.2) ≈ 0.105. If each cross displaces one shot with average conversion 0.10 (a conservative non-betting statistical conversion rate), expected goals lost = 15 × 0.10 = 1.50. Net Δ ≈ -1.39 goals per match. Verification: xG model tracking over 4 matches; if net xG from wide-area play does not exceed baseline by >0.05, veto.

Make sure no betting terms. "Conversion rate" is okay as statistical term. Avoid "odds," "quotes," "lines."

Now I need to assemble. Ensure exact XML tags. Word count check: I need >=1000 words total. Let's estimate. THINK_TRACE ~450. SOURCE_OPERATORS ~500. RETROCAUSAL ~300. RECURSIVE ~300. CROSS_LAYER ~300. RLVR ~300. Total ~2150. Good.

I must not mention betting lines. I will not mention "Win, Draw, Loss" or "Total Number of Goals" or "Team to Score Next" or Betfair or odds. I can mention the original motivation was in-play prediction from statistics but avoid listing markets.

Let's write carefully with LaTeX.

Need to ensure no fake equations like Force/Fatigue. All equations formal.

I will include [PAGE MARKERS ABSENT...] note in SOURCE_OPERATORS section.

Let's compose final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The central inferential object is the multilevel cross-sectional Poisson regression reported in [SECTION: EPL Model] and [SECTION: Bundesliga Model]. Let Yᵢ denote goals scored by team i in match i. The model specifies a log link:

log(E[Yᵢ | ·]) = β₀ + β₁·OpenCrossᵢ + β₂·Homeᵢ + u_{attack[i]} + v_{defense[i]}

where u and v are team-level random effects. In the EPL pooled specification [SECTION: EPL Model], β₁ = −0.022861 (SE 0.003196). Because OpenCross is a count per match, β₁ carries units of log-goals per open cross. The marginal effect on expected goals is ∂E[Y]/∂OpenCross = E[Y] × β₁. Using the EPL sample mean of 1.33 goals per match [SECTION: Some Facts about Crossing], the marginal effect is approximately −0.0304 expected goals per additional open cross. Over the sample mean of 18.2 open crosses per match, the ceteris paribus intensity change from eliminating all open crosses is Δlog λ = (−0.022861)(18.2) ≈ −0.416, or λ_new / λ_old ≈ exp(−0.416) ≈ 0.66. This implies a roughly 34% reduction in scoring intensity if crosses are removed, which is why the abstract frames the upside as up to +0.656 goals per match [SECTION: Abstract].

Gray-zone audit. First, endogeneity: OpenCross is not randomly assigned. Teams cross more when trailing, when wide areas are open, or when central penetration is denied. The model is cross-sectional and does not condition on game state (score differential, minute, red cards). The Poisson intensity section [SECTION: Implied Intensities] describes λₜ and µₜ as time-varying for in-play prediction, yet the crossing analysis aggregates across full matches, embedding an omitted-variable bias: crossing may be a symptom of defensive pressure rather than a cause of scoring failure. Second, indirect effects: [SECTION: Concerns] explicitly states crosses may lead to goals indirectly in follow-up play and that crossing gives up an alternative way of playing. A simple regression of goals on open crosses cannot disentangle direct conversion from possession sacrifice. Third, distributional misspecification: [SECTION: Known Limitations of Poisson Model] reports an EPL score correlation of −0.057 since 2006 and a realized draw fraction above the independent-Poisson implication, violating both independence and equidispersion. Fourth, heterogeneity: team-specific slopes (e.g., Tottenham −0.040664 vs Manchester United −0.011707 in [SECTION: EPL Model - Attack]) show the average effect masks tactical regimes. Fifth, observation bias: [SECTION: Some Facts about Crossing] notes TV highlights overrepresent successful crosses, creating an availability heuristic that inflates perceived crossing value among coaching staff.

Singularity and breakdown regimes. Under the log link, λ → 0 as OpenCross → ∞, an asymptotic absurdity because physical crosses are bounded by match duration and pitch geometry (the team attack graphs [SECTION: Tottenham Attack] through [SECTION: Werder Bremen Defense] display axes only to 50 crosses). Extrapolation beyond the observed 0–50 range is invalid. The standard errors reported in parentheses assume Poisson equidispersion; if overdispersion is present, inference is overconfident. [PAGE MARKERS ABSENT IN SOURCE DUMP; DOCUMENT IS 9 PAGES; CITING BY SECTION HEADER.]
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Poisson process for match remainder. Let τ denote remaining match time in consistent units (e.g., fraction of 90 minutes). Home and away goal counts are modeled as:

Gₕ(τ) ∼ Pois(λₜ·τ),   Gₐ(τ) ∼ Pois(µₜ·τ),

with λₜ, µₜ in units of goals per unit time. Under the independence assumption:

P(Gₕ = gₕ, Gₐ = gₐ) = exp[−(λₜ + µₜ)τ] · (λₜτ)ᵍₕ / gₕ! · (µₜτ)ᵍₐ / gₐ!.

This joint probability is dimensionless. [SECTION: Implied Intensities]; [SECTION: Known Limitations of Poisson Model].

Multilevel cross-sectional Poisson regression. For match i with attacking team j and defending team k:

log(λᵢ) = β₀ + β₁·OpenCrossᵢ + β₂·Homeᵢ + uⱼ + vₖ + u₁ⱼ·OpenCrossᵢ + v₁ₖ·OpenCrossᵢ,

uⱼ ∼ N(0, σ²ᵤ),   vₖ ∼ N(0, σ²ᵥ),   u₁ⱼ ∼ N(0, σ²ᵤ₁),   v₁ₖ ∼ N(0, σ²ᵥ₁).

[SECTION: The Statistical Model].

EPL Model 1 fixed effects [SECTION: EPL Model]:

log(λᵢ) = 0.473376 − 0.022861·OpenCrossᵢ + 0.417204·Homeᵢ + u_{team[i]} + v_{against[i]}.

Standard errors: (0.100849), (0.003196), (0.029636). Fit: AIC = 4229, BIC = 4286, log-likelihood = −2106, deviance = 4211, N = 3800 matches, groups: Team = 29, Against = 29. Variance components: Var(Team.Intercept) = 0.121923; Var(Team.OpenCross) = 0.000110; Var(Against.Intercept) = 0.112291; Var(Against.OpenCross) = 0.000028.

Bundesliga Model 1 fixed effects [SECTION: Bundesliga Model]:

log(λᵢ) = 0.374347 − 0.020001·OpenCrossᵢ + 0.281266·Homeᵢ + u_{team[i]} + v_{against[i]}.

Standard errors: (0.088441), (0.004450), (0.034298). Fit: AIC = 3009, BIC = 3061, log-likelihood = −1495, deviance = 2991, N = 2536 matches, groups: Team = 24, Against = 24. Variance components: Var(Team.Intercept) = 0.064105; Var(Team.OpenCross) = 0.000080; Var(Against.Intercept) = 0.070237; Var(Against.OpenCross) = 0.000070.

Team-specific OpenCross slopes, EPL attack [SECTION: EPL Model - Attack]: Tottenham −0.040664; Chelsea −0.031954; Arsenal −0.030510; Liverpool −0.029654; Manchester City −0.029128; Manchester United −0.011707. EPL defense [SECTION: EPL Model - Defense]: West Bromwich −0.025954; West Ham −0.025036; Southampton −0.023927; Arsenal −0.016203. Bundesliga defense [SECTION: Bundesliga Model - Defense]: FC Bayern Munchen +0.002192; Borussia Dortmund −0.003145; all others negative.

Descriptive rates [SECTION: Some Facts about Crossing]: EPL average 18.2 open crosses per match and 1.33 goals per match; Bundesliga average 11 open crosses per match and 1.45 goals per match. EPL: 18.2 crosses produce 3.7 good and 14.5 bad crosses. Goal frequency: 1 goal per 92 open crosses (pooled). Team crosses-per-goal: Manchester United 43.8; Chelsea 62.6; Southampton 143.2 [SECTION: Conclusions].

Singularity and breakdown. Log-link boundary: λ → 0 as OpenCross → ∞; invalid beyond observed range (graphs capped near 50 crosses). Equidispersion breakdown: Var(Y) = E[Y] assumed; score correlation ρ = −0.057 and excess draws relative to independent Poisson violate independence [SECTION: Known Limitations of Poisson Model]. Game-state non-stationarity: λₜ, µₜ are time-varying in the in-play intensity model but the crossing regression pools all minutes, so red cards, penalties, and score effects are unmodeled moderators. Dimensional audit: OpenCross is a count per match [dimensionless count]; β₁ is log-goals per cross; β₀ is log-goals per match; intercepts are log-rate offsets. [PAGE MARKERS ABSENT; SOURCE IS A 9-PAGE PDF DUMP; ALL CITATIONS REFER TO SECTION HEADERS AS LISTED ABOVE.]
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in the lineage of Poisson sports modeling initiated by Maher (1982) and extended by Dixon and Coles (1997) to account for dependence between team scores. Vecer’s contribution is a multilevel cross-sectional Poisson specification with random intercepts and random slopes for OpenCross by attacking and defending team, estimated on event data from OPTA (since 2008, 1,900+ games), premierleague.com (since 2006, 2,700+ games), and bundesliga.de (since 2009, 1,250+ games, tracking since 2011) [SECTION: Inference of the Intensities from Athletic Performance]. The dynamic scoring intensities λₜ and µₜ [SECTION: Implied Intensities] echo modern point-process formulations used for in-play match-state tracking, although the crossing analysis itself collapses that temporal resolution into a single cross-sectional count.

Multi-week traps. Trap 1—tactical substitution without replacement: if a strong attacking team such as Arsenal (intercept 1.042368, slope −0.030510) cuts crossing volume by half in week one but does not train alternative final-third progression, expected goals may rise algebraically while actual creation falls because possession is surrendered in less dangerous zones. Over a three-to-four-week microcycle, opposing defenses compress central space, nullifying the gain. Trap 2—conversion noise: pooled crossing conversion is p ≈ 1/92 ≈ 0.0109 [SECTION: Some Facts about Crossing]. Over one matchweek with n ≈ 18 crosses, the standard error of the observed conversion rate is sqrt[p(1−p)/n] ≈ 0.024, which exceeds the mean; a single fluke goal or clean sheet can reverse the sign of the realized effect, causing a coach to abandon a sound strategy prematurely. Trap 3—quality adaptation horizon: the paper recommends strong teams improve crossing quality to the Manchester United benchmark (43.8 crosses per goal) or Chelsea (62.6) [SECTION: Conclusions]. This is a multi-month biomechanical and technical project, not a single-week selection change; a team attempting it in a two-week window regresses to its mean crossing quality and realizes negative expected value without the offsetting skill gain. Trap 4—defensive baiting against elite units: weaker defending teams suffer more from crosses faced, but against FC Bayern Munchen the defensive slope is +0.002192 (approximately neutral) [SECTION: Bundesliga Model - Defense], so instructing defenders to concede crosses as a trap fails because the elite defense nullifies aerial threat while the attacking team loses possession in advanced positions.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. Under scoreboard pressure—trailing late, or protecting a narrow lead—coaches regress to high-crossing “direct” habits. The paper identifies a strong observational bias: television highlights show mostly good crosses and crosses leading to goals [SECTION: Some Facts about Crossing], generating an availability heuristic that makes crossing appear high-value despite a pooled conversion of roughly one goal per 92 crosses. In a crisis, the recursive belief is “the opponent expects us to retain possession, so they will not defend the box; therefore a cross will surprise them.” This second-order reasoning collapses if the opponent anticipates the regression and loads the penalty area, converting the cross into a low-probability turnover.

Counter-trap. If Team A reduces crossing to exploit the negative β₁, Team B infers that Team A will bypass wide areas and compresses central channels, raising the cost of the alternative possession play that the paper describes as potentially more optimal [SECTION: Things to Notice]. Team A must therefore randomize: cross selectively against weaker defenses (where the penalty is lower) and withhold against stronger defenses (where the effect is more negative or neutral). Pure “never cross” is exploitable; a mixed strategy keeps the opponent’s defensive allocation uncertain.

Clock. The match clock is an unmodeled moderator. The intensity framework [SECTION: Implied Intensities] treats λₜ and µₜ as time-varying for the remainder of the match, yet the crossing regression pools all 90 minutes. A cross at minute 15 in a 0–0 game has a different expected marginal value than a cross at minute 88 while trailing by one, when high-variance attacking actions become instrumentally valuable even if ex ante negative in expectation. Because the model lacks minute × OpenCross interactions, the estimated β₁ is an average over game states that may mask positive crossing value in desperate late-game situations. Recursive theory of mind over the clock: both coaches know that the other knows time is running out; late-game crossing becomes a commitment device for high-risk attack, which can be rational conditionally even when the cross-sectional average is negative.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. A cross is defined as an airborne delivery of the ball from the side of the field across to the front of the goal [SECTION: Some Facts about Crossing]. Biomechanically, aerial duels require jump timing, neck stabilization, and heading precision; the extreme dispersion in crosses-per-goal (Manchester United 43.8, Chelsea 62.6, Southampton 143.2) [SECTION: Conclusions] indicates squad-specific technical skill rather than a uniform tactical parameter. Veto: any policy that treats crossing volume as an invariant tactical dial, independent of the squad’s aerial-duel win rate, is physically ungrounded.

Weather layer. The paper states that aerial delivery involves less precision and more luck than skill [SECTION: Conclusions]. In high-wind or heavy-precipitation regimes—common in English Premier League winter and Bundesliga autumn—the luck component rises and crossing precision falls. No meteorological covariates appear in the regression [SECTION: EPL Model; SECTION: Bundesliga Model], so weather is a veto-relevant omitted layer: crossing volume should be independently reduced in adverse wind regardless of the Poisson coefficient.

Biomechanical and load layer. Athletic performance variables listed as significant include Top Speed (Bundesliga), Discipline, Stoppages, and Open Crosses [SECTION: Inference of the Intensities from Athletic Performance]. Fatigue in the final 15 minutes degrades crossing accuracy; the model’s match-level aggregation cannot separate early-match high-quality crosses from late-match fatigued crosses. Veto: if a team’s crossing volume is concentrated in the last 20 minutes, the negative coefficient underestimates the harm because fatigue correlates with both crossing volume and defensive disorganization.

Veto adjudication proof. The Poisson model breaks down under non-stationary intensity (red cards, penalties, weather shifts) and violates independence (score correlation ρ = −0.057; excess draws relative to independent Poisson) [SECTION: Known Limitations of Poisson Model]. Any tactical decision derived solely from β₁ without controlling for these physical, weather, and load layers fails the veto test. An approved crossing policy must be conditional: (i) squad crossing quality above the Southampton failure threshold; (ii) game state not desperate-late; (iii) wind below an adverse threshold; (iv) crossing not substituted for a higher-value central penetration option.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: EPL top-six team reduces open crosses by 50% (from ≈18.2 to ≈9.1 per match) over five consecutive matches while holding final-third entries and outside-the-box shots constant. Veto condition: if non-cross expected goals does not rise by at least the model-implied offset, veto the crossing reduction as a net-negative possession transfer. Prediction: β₁ = −0.022861; ΔOpenCross = −9.1; Δlog λ = (+0.2080); multiplicative factor exp(0.2080) ≈ 1.231; expected Δgoals ≈ 1.33 × 0.231 ≈ +0.307 goals per match (from 1.33 to ≈1.64). Verification: match event logs over five games; if actual Δgoals < +0.10 per match, reject the ceteris paribus assumption and veto.

Scenario 2: Bundesliga team with a weak defense instructs its back line to concede crosses against FC Bayern Munchen, relying on the approximately neutral defensive slope (+0.002192) [SECTION: Bundesliga Model - Defense]. Veto condition: if Bayern’s goal-scoring intensity does not remain flat or rises, veto the defensive baiting because crosses against elite defenses are not costless and the baiting team surrenders its own attacking possession. Prediction: Bayern defensive slope ≈ +0.002192 implies approximately zero association between crosses faced and goals conceded; expected Δgoals conceded ≈ 0 over 90 minutes, while the baiting team forfeits its own β₁ benefit. Verification: track shots conceded from open crosses and goals conceded in three matches against Bayern; if goals conceded exceed baseline or final-third possession drops >15%, veto.

Scenario 3: Southampton-quality crossing squad (143.2 crosses per goal, implied p ≈ 0.0070) increases open crossing volume by 15 per match to create “chaos.” Veto condition: if expected goals from crosses plus expected goals from displaced shots is below baseline, veto the volume increase. Prediction: expected goals from 15 extra crosses = 15 × (1/143.2) ≈ 0.105. If each cross displaces one shot with an average non-cross conversion of 0.10, expected goals lost = 15 × 0.10 = 1.50; net Δ ≈ −1.39 goals per match. Verification: expected-goals tracking over four matches; if net expected-goals from wide-area play does not exceed baseline by >0.05, veto.
</RLVR_COUNTERFACTUAL_VETOES>