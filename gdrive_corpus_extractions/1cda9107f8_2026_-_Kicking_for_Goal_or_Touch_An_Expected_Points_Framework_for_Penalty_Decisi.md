---
source: "2026 - Kicking for Goal or Touch An Expected Points Framework for Penalty Decisions in Rugby Union - Watts et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2026"
pages: 22
model: baidu/ernie-5.5-flash-preview:free
words: 8680
---

<NATIVE_REASONING>
We need answer user's request. Need produce final with exact XML sections, >=1000 words, no betting lines, no toy equations, formal LaTeX, units, assumptions, singularity/breakdown regimes, cite pages and quotes when source pages provided. Need likely analyze paper and maybe produce frontier reasoning. User says DRIVE SOURCE ... PAGES: 22 SOURCE TEXT. They likely expect an analysis output with sections. Need obey invariants. Need zero betting lines: no spreads/totals/moneylines/odds. Can discuss expected points but not betting. Need zero toy equations: only formal equations from paper and standard ones, with units and assumptions. Need >=1,000 words across exact XML sections. Sections:
<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Need likely discuss the rugby penalty decision paper. No betting lines. Need maybe include formal equations: Delta EP, EPlineout, multinomial logit, EPkick, Pmake logistic, angle geometry, xLO. Units: x,y meters, d meters, theta degrees/radians? Paper uses θ = arctan(|x-35|/y)*180/pi. Need breakdown/singularity: y=0 angle undefined/infinite? Distance zero? lineout truncation at max{5,x-dtouch}; if x-dtouch <=5 lineout at 5m; if dtouch large no further gain; near own goal EP uncertainty, not considered. Multinomial reference category? c* unspecified. Coefficients per outcome. C set {-7,-5,-3,0,3,5,7}. Assumptions: lineout EP depends longitudinal zone and covariates, suppress lateral; missed kick transitions to 22m drop-out; dtouch scenario; no win probability; selection bias; zonal coarse; data seasons.

Need maybe cite exact page markers and verbatim quotes. Must cite exact [PAGE N] markers and verbatim quotes when source pages provided. We can quote many. Need maybe exact page citations in equations. Need maybe include [PAGE 5], [PAGE 9], etc.

Need word count >=1000. Need maybe around 2500 words. Ensure XML tags exactly. Could include LaTeX inside. Need avoid betting terms. "odds" is banned? Strict invariant: never mention spreads, totals, moneylines, or odds. Avoid word odds entirely. Also avoid betting lines. Could say "probability" but not odds. The paper has "odds"? No. Need avoid "betting".

Need ensure no fake ratios. Could use "threshold" but not ratio. Use formal equations. Need not invent. Could mention "positive values favor lineout" etc.

Need think through content.

User request is just source; likely wants output per system. Need produce all sections.

Let's outline.

<THINK_TRACE> >=400 words. Deep multi-hop derivation and gray-zone audit. Discuss mapping from penalty location (x,y) to lineout vs kick. Equations. Case study x=16,y=40, dtouch=20. xLO= max(5,16-20)=5? Wait equation says x is distance from opposition try line? In Section 3.1: x distance from opposition try line. In Section 3.4: x distance from left touchline, y distance from opposition try line for kicking. In case study: penalty 16 m from left touchline and 40 m from opposition try line. They use marker (x=16, y=40). There is inconsistency: Section 3.1 (x,y) penalty location where x distance from opposition try line and y lateral. Section 3.4 says x left touchline, y opposition try line. Case study says x=16,y=40. Figure 12 marker. Need audit this coordinate ambiguity. We must note gray zone. If x=16 m from left touchline and y=40 from try line, then distance to posts? Need compute: lateral distance from center = |16-35|=19; distance from posts d = sqrt(19^2+40^2)=? sqrt(361+1600)=sqrt1961=44.283. θ = arctan(19/40)=25.346 deg. EPkick 2.22. If instead x=16 from try line and y=40 lateral, then distance to posts sqrt((16)^2+(40-35)^2)? But paper's kicking angle uses x left touchline, y try line. They say case study marker (x=16,y=40). So likely x lateral, y distance. Equation xLO = max{5, x - dtouch} uses x as distance from opposition try line? They say starting from x (distance from opposition try line) approximate xLO=max{5,x-dtouch}. If penalty spot at 40 m from try line and dtouch=20 => xLO=20. If they plug x=16, then xLO=5, weird. In Table 4 case marker dtouch=20, EPlineout=1.69. At xLO=20 (opposition 40 minus 20) likely plausible. At xLO=5 likely high maybe >4. So coordinate notation conflict. Need audit. This is important. Need mention source uses two coordinate conventions: Section 3.1 [PAGE 5] x distance from opposition try line, y lateral; Section 3.4 [PAGE 9] x distance from left touchline, y distance from opposition try line; case study uses 16 m from left touchline and 40 m from opposition try line [PAGE 15], and marker (x=16,y=40) [PAGE 12]. For decision map, x likely penalty spot's distance from try line? Actually in Eq 3, x distance from try line. If penalty is 40 m from try line, x=40, y=16? But they say (x=16,y=40). Could be swapped. Need include in THINK_TRACE. Need not overstate but note breakdown/assumption.

Need maybe compute geometry for case study. Use x=16 lateral from left touchline? y=40 from try line. Horizontal offset from posts = |16-35|=19 m. d=sqrt(40^2+19^2)=44.3 m. theta=arctan(19/40)=25.35 deg. Kick model Pmake logistic not coefficients given; but EPkick 2.22. If EPkick= Pmake*3 + (1-Pmake)*EPmiss. If EPmiss maybe around 0.60 overall average? Could solve implied Pmake: 2.22 = 3p + (1-p)*0.60 = 0.60+2.4p => p=0.675. But not in paper? They report GAM marker-level make probability 0.563 vs 0.538 [PAGE 9], but case marker? Actually sensitivity says marker-level make probability in case study 0.563 vs 0.538. If EPmiss maybe 0.6, then EPkick would 1.92? Wait 0.563*3+0.437*? = 2.22 -> EPmiss = (2.22-1.689)/0.437 =1.215. Could be zone-specific EPmiss. Not given. Don't invent too much. Could mention without exact EPmiss cannot infer Pmake.

Need equations:
ΔEP(x,y;d_touch)=EP_lineout(x_LO)-EP_kick(x,y) [PAGE 5 Eq1].
EP_lineout(x)=Σ c c P(Y=c|X) [PAGE 5].
Multinomial log-linear: log(P(Y=c|X)/P(Y=c*|X)) = α_c + β_{c,1} Location + β_{c,2} Card_Diff + β_{c,3} WinPct_Diff + β_{c,4} L2M [PAGE 5]. Units: points, dimensionless log-probability; Location factor with zone midpoints m.
EP_kick(d,θ)=P_make(d,θ)·3 + (1-P_make(d,θ))·EP_miss(d,θ) [PAGE 8 Eq2]. Units points. 3 points constant.
θ = arctan(|x-35|/y) * 180/π [PAGE 9]. x distance from left touchline m, y distance from try line m, posts center x=35 m. Breakdown: y=0 gives arctan(inf)=90 deg but zero distance? If y=0 and x≠35, angle 90 deg? Actually if at try line, angle to posts can be 90 if at posts? If y=0 and x=35, distance zero, angle 0/0 undefined. If y<0 invalid. If x outside 0-70? invalid.
d = sqrt((x-35)^2 + y^2) maybe not explicitly given but geometry implies. Could state as formal geometry. Units m.
logistic: log(p_i/(1-p_i)) = β0 + β1 distance_i + β2 θ_i [PAGE 9]. Need avoid "odds"? The logit is log odds; but invariant says never mention odds. Hmm "odds" is prohibited. Need not use word odds. We can write log-linear link: 
\log\frac{p_i}{1-p_i}=... But that's odds ratio mathematically; can avoid word "odds". Is that allowed? The equation contains ratio p/(1-p). It's formal. We can call "logit". But invariant says never mention odds, not necessarily equation? Better avoid phrase. Use "logistic linear predictor". The equation itself uses p/(1-p). Could include because source. But if word odds appears? Not in equation. Fine.
Lineout translation: x_LO = max{5, x - d_touch} [PAGE 12 Eq3]. Units m. Assumption lineout longitudinal only, suppress lateral. Breakdown: if x-d_touch <=5 -> 5 m line; if x>5+d_touch -> x-d_touch; if x<=5? lineout at 5? Penalties within 5m? Law prohibits lineout closer than 5 m; if penalty inside 5m maybe kick to touch cannot gain? Actually max{5,x-dtouch} would produce 5 if x=5, but if x<5? max gives 5, could be backwards? But penalty can be closer than 5m? Try line? Might be invalid. Need mention.
Bootstrap: B=2000, percentile CI [PAGE 7,8].
EP miss continuation: approximated from restart sequences; average points by zone [PAGE 11 Table 3]. Smoothing spline weights=zone counts [PAGE 10]. Breakdown: sparse zones, e.g. 10m-22m (opp) n=7 avg 4.29, high variance; Goal-5m own n=14; not reliable. 
Decision maps: ∆EP=0 frontier. Positive lineout, negative kick [PAGE 13].
Case study: [PAGE 15] ∆EP=-0.53 CI [-1.26,0.25], Pr(∆EP>0)=0.08. Kick optimal. Actual lineout, Rmean=0.53, Rboot=0.55. Table 4 [PAGE 17]. Need maybe note Pr is probability. No betting.

RETROCAUSAL_GENEALOGY: lineage from American football EP/EPA/WP (Romer 2006, Burke 2009, Lock & Nettleton 2014, Baldwin 2021, Yurko et al. 2019) [PAGE 1-2, 21]. Rugby EP Martinez-Arastey et al. 2025 [PAGE 2]. Kicking Quarrie & Hopkins 2015 [PAGE 4]. Brill et al. 2025 humility/cluster subsampling [PAGE 6,19]. Multi-week traps: using wrong coordinate convention, ignoring miss continuation value (zero-value trap), assuming dtouch integrated, double counting runs, selection bias, overinterpreting expected points vs win probability. Need maybe mention "multi-week traps" as temporal traps in research or team strategy over weeks? Could discuss lineage and traps over multi-week modeling cycle: week 1 coordinate ingestion, week 2 feature harmonization, week 3 calibration, week 4 decision latency? Need likely okay.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. Need discuss coaches/players under clock, habits: convention near corner, scoreline, late match. Counter-trap: teams may kick at goal when model says lineout due to risk aversion, kicker trust, card state. Clock: under 2 min indicator, trailing >3, need try. Need formalize maybe threshold clock: if score differential >3 and Sec_Remain_Half low, lineout may be necessary despite EP negative. Avoid toy equations? Can state qualitative. Could include formal state variables: C={-7,...}, L2M. Need no fake ratio. Could discuss recursive modeling: if opponents know model, they adjust lineout defense, touch gain. But no equations? Could use game-theoretic best response: choose action a∈{kick,lineout}; expected points depends on opponent strategy. But keep formal. Maybe define V_t = EP? Could be okay. Need not invent. Use paper variables. Mention clock effect: L2M enters model; trailing by >3 implies expected points insufficient for win probability; paper acknowledges [PAGE 18]. Recursive mind: counterfactual decisions, regret metrics Rmean, Rboot. Could use regret formulas from page 15? Could include.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need veto if weather, wind, kicker injury, pitch, lineout conditions override EP. Need formal proof? Could define veto predicate V = V_physical ∨ V_biomech ∨ V_weather. If V true then decision constraint excludes EP-optimal action? Need formal. Use SI units: wind vector m/s, temperature °C? Biomechanical: kicker max range, hamstring, shoulder; lineout lifters. Weather: rain, crosswind. Need not invent ratios. Could state: If wind speed w > w_crit and direction causes predicted make probability below observed kicking data domain, then kick option vetoed? Need avoid fake constants. Use qualitative. But "proof" maybe show that model domain assumptions fail: kicking data from 2000-2012 [PAGE 4], not weather covariates; phase data 2018/19 [PAGE 2]; no tracking; so any physical/weather state outside covariate support triggers breakdown. Could define breakdown regime: model assumptions invalid. Use source citations. Need maybe include formal inequalities? Could be careful not fake. Could say if measured wind component v_perp exceeds calibration uncertainty such that posterior predictive Pmake outside [0,1]? Not needed. But need formal. We can define model output EP_kick(d,θ) is conditional on historical data D_kick and no weather covariates. If current context has unmodeled variable z (wind, surface friction coefficient μ, kicker maximal range R_max), then EP_kick is not causal; veto if z indicates attempt outside biomechanical feasible set: d ≤ R_kicker and θ within angular cone? Need formalize feasible set: 
A_kick = {(d,θ): d ∈ [d_min,d_max], |θ| ≤ θ_max, surface condition acceptable}. If (d,θ) ∉ A_kick, kick veto. But d_max, θ_max team-specific not in paper. Use as external physical constraints, not toy. Need state units: d m, θ degrees, wind m/s. Could mention paper's estimated probabilities begin at 5 m because no observations at 0 m [PAGE 10]; near posts breakdown.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR maybe reinforcement learning with verifiable rewards? Need define scenarios: 
1) Coordinate swap veto: If analyst feeds (x=16,y=40) into xLO equation as x=16 from try line instead of y=40, prediction: xLO=5, EPlineout overestimated, decision flips to lineout. Verifiable: recalc using correct longitudinal 40 m -> xLO=20, EPlineout ~1.69, ∆EP -0.53. Need cite [PAGE 12,15]. Prediction: coordinate-audit reduces false lineout recommendations by near markers where longitudinal distance > dtouch+5.
2) Miss-continuation zero veto: If miss valued at 0, EPkick =3Pmake. For case marker with EPkick 2.22 and EPmiss positive, zeroing miss lowers EPkick, may make lineout look better. Prediction: setting EPmiss=0 will increase lineout recommendations especially at medium distances where make probability moderate. Verifiable by recomputing equation [PAGE 8]. Need maybe compute if Pmake=0.563, zero miss EPkick=1.69, equals EPlineout, ∆EP=0; frontier shifts. This uses source marker-level make probability 0.563 [PAGE 9]. Nice. But if Pmake 0.563, 3*0.563=1.689; EPlineout 1.69 -> indifferent. If actual EPkick includes miss continuation 2.22, kick favored. Verifiable.
3) dtouch underestimation veto: If dtouch assumed 0 but actual 20, lineout value underestimated. Paper: increasing dtouch shifts surface to lineout [PAGE 13]. Case bootstrap mean crosses zero around 26 m [PAGE 15]. If true dtouch=20, kick optimal; if model assumes 0, may lineout? Need prediction: as dtouch increases from 0 to 20, ∆EP increases; at 26 m mean crosses zero; so underestimating dtouch by >6 m in case can reverse recommendation. Verifiable with Eq3 and decision map. Or selection bias veto: using strong-team lineout data for weak team? But need RLVR scenarios. Could include weather/biomechanical veto? RLVR likely reward verifiable. We'll make 3 scenarios with predictions.

Need ensure all sections total >=1000 words. Let's estimate. THINK_TRACE 600, SOURCE 600, RETRO 300, RTOM 300, CROSS 350, RLVR 450 = 2600. Good.

Need ensure exact XML sections and no extra outside? Probably output only sections. Need maybe no markdown? Can include LaTeX. The final answer should contain XML tags exactly. Need maybe include citations [PAGE n]. Need verbatim quotes. We need include exact quotes. Let's plan quotes:
- [PAGE 1] "Except when very close to the opposition try line, teams generally prefer the lineout option to a tap-and-go or scrum because the kick to touch can safely gain territory before the restart." (actually page 1)
- [PAGE 5] Eq 1 and quote "where xLO denotes the resulting lineout x-coordinate after kicking to touch".
- [PAGE 5] "A multinomial model is preferable to a single linear regression on points because the response is a discrete state variable..."
- [PAGE 8] Eq2 and quote "The expected points of a penalty kick at goal are the weighted sum of the value of a make and the continuation value of a miss."
- [PAGE 9] angle formula and "where x is the distance from the left touchline, y is the distance from the opposition try line, and 35 is the midpoint of the pitch width (in metres)".
- [PAGE 10] "we therefore adopt a simplifying assumption: a missed penalty transitions to a 22 m drop-out restart."
- [PAGE 12] xLO formula and quote "shifting the ball dtouch meters closer to the opposition try line and truncating at the 5 m line if necessary, since the laws prohibit lineouts closer than 5 m from the try line."
- [PAGE 13] "Positive values of ∆EP(x, y; dtouch) favor choosing the lineout, while negative values favor taking the kick at goal".
- [PAGE 15] "The bootstrap-mean curve crosses zero around 26 m." and "Pr(∆EP > 0) = 0.08".
- [PAGE 18] "South Africa was trailing by more than 3 points towards the end of the match so the final ’inefficient’ EP decisions were necessary to attempt to win the game."
- [PAGE 19] selection bias quote "Stronger teams are both more likely to generate attacking lineouts in the opposition half and more likely to earn penalties."

Need ensure no prohibited words. Search mentally for "odds". Avoid. "betting" avoid. "spread" avoid. "totals" maybe avoid. "moneyline" avoid. Could use "outcome distribution". Do not mention "bet". Good.

Need formal equations with SI units. In SOURCE_OPERATORS_AND_EQUATIONS, list equations with units and breakdown. Need include "SI/information/probability units". Units: meters, points, dimensionless probability, radians/degrees. For multinomial log, log probability ratio dimensionless; coefficients units per category/level. Location factor categorical; if numeric midpoints m, β units log-probability per meter? But Location is factor, not continuous. For interpolation zone midpoints used. Need state. WinPct_Diff dimensionless percentage? Paper uses +25% [PAGE 15]. Could state dimensionless (percentage points). Card_Diff integer players. L2M binary. Sec_Remain_Half seconds. Points outcome in points. 

Need maybe include bootstrap equations? 
\hat{EP}_{boot} = mean over B replicates; CI = quantiles. Formal:
EP^{(b)} = Σ c c \hat P^{(b)}(Y=c|X)
CI_{0.95} = [Q_{0.025}(EP^{(b)}), Q_{0.975}(EP^{(b)})]
B=2000. Units points.
Regret metrics: R_mean,j = max(EP_best_mean - EP_actual_mean,0) [PAGE 15]. R_boot,j = E_b[max(EP_best^(b)-EP_actual^(b),0)]. Could include. Units points. Breakdown: if actual matches optimal and no uncertainty, zero; Rboot positive if bootstrap mass favors other.

Need maybe mention pseudo-replication subsampling: one row per run_id, 2,046 lineout observations [PAGE 7]. Formal? Could include 
r ~ Uniform({1,...,n_r}) maybe. But not necessary? Could include as operator. It's formal. Need no fake. 
\tilde{Y}_r ∼ Uniform({Y_{r1},...,Y_{rn_r}}). Units outcome. 

Need maybe include weighting? EPlineout sum over C c P. Good.

Need think about coordinate ambiguity in SOURCE_OPERATORS. Could present both conventions:
Convention A (lineout longitudinal): x_L ∈ [0,100] m from opposition try line; y lateral m.
Convention B (kicking geometry): x_K ∈ [0,70] m from left touchline; y_K ∈ [0,100] m from opposition try line; posts at x_K=35,y_K=0.
Then transform: d = sqrt((x_K-35)^2 + y_K^2), θ = arctan(|x_K-35|/y_K). For lineout, longitudinal coordinate X = y_K if using kicking convention. This resolves. Need cite [PAGE 9] vs [PAGE 5]. Good.

Need include "exact singularity/breakdown regimes". List:
1. y=0 in angle formula: arctan(|x-35|/0) undefined; at x=35,d=0 undefined. Model excludes 0 m [PAGE 10].
2. d beyond empirical kicking support or outside pitch; Pmake extrapolation invalid.
3. x - dtouch ≤ 5: xLO=5; further gains saturated. If x < 5, law/procedure may make kick-to-touch inadmissible or lineout at 5; model not defined for negative.
4. Multinomial reference category c* not specified; if reference category changes, coefficients change but probabilities invariant if renormalized; breakdown if outcome outside C.
5. Sparse restart zones (n=7, n=14) produce high variance; smoothing may overstate. [PAGE 11 Table 3].
6. Selection bias: lineout EP near try line inflated by stronger teams [PAGE 19].
7. EP vs WP: maximizing EP can conflict with win probability when trailing by >3 [PAGE 18].
8. Data mismatch: club phase vs international kicking [PAGE 2,4,19].

Need maybe mention "formal LaTeX equations". Use display math. Ensure no invalid characters? Fine.

Need think about final answer length. We'll write robust. Need ensure THINK_TRACE >=400 words. Could count roughly. Let's draft THINK_TRACE ~700 words.

THINK_TRACE content:
- Restate decision: after penalty choose kick at goal or kick to touch lineout.
- Derive decision quantity: difference of two EP surfaces. Use Eq1. Need combine coordinates. Explain units.
- Derive lineout EP: multinomial, categories, covariates, expectation. Discuss why full distribution matters.
- Derive kick EP: distance-angle geometry, logistic make probability, continuation miss. Miss not zero. Discuss 22m drop-out assumption.
- Combine and translate: xLO equation. Discuss dtouch scenario.
- Case marker: 16 left, 40 from try line. Compute d and theta. Use source EP values. Analyze ∆EP -0.53, CI, Pr. Note uncertainty crosses zero? CI includes 0, Pr>0 0.08? Wait Pr(∆EP>0)=0.08 means 92% kick. CI includes 0 but small positive probability.
- Coordinate ambiguity: x in Eq3 vs x in kicking geometry; if misuse, xLO=5. Need audit. This is gray zone.
- Double counting: run subsampling. 
- Selection bias, sparse zones.
- Gray zone: dtouch unobserved, actual 20 but model conditional; mean optimal vs observed decision regret; clock/trailing.
- End with formal stance: model is descriptive decision map, not deterministic law; breakdown regimes.

Need maybe avoid too many quotes here? Fine.

SOURCE_OPERATORS_AND_EQUATIONS: More structured. Use bullet list. Include equations. Need maybe exact page citations. Could include verbatim quotes after each. Need maybe 600 words.

RETROCAUSAL_GENEALOGY: 300-400. Discuss lineage. Multi-week traps. Maybe use "multi-week" as development pipeline: week-long traps. Need maybe not too long.

RECURSIVE_THEORY_OF_MIND: 350. Discuss coach models, opponent adaptation, clock, habit regression. Could include formal state. Use paper variables.

CROSS_LAYER_VETO_ADJUDICATION: 350. Formal veto proof. Need maybe define veto set. Use physical constraints. Could include equations but no fake. For weather: wind speed w (m s^-1), wind direction relative to kick; surface friction μ; kicker range R_max. If d > R_max or θ outside feasible cone, kick veto. If lineout conditions (wet ball, wind) reduce dtouch? Paper doesn't model weather. Therefore cross-layer veto: model outputs advisory only if context within covariate support. Need "proof" maybe: Since EPkick is E_{D_kick}[points] with no weather covariate, under change of measure to weather-affected true distribution, bias not identified. If weather changes make probability by Δ, EPkick changes by 3Δ? But that's a simple equation. Could formalize sensitivity: if true make probability p' = p + δ, holding EPmiss fixed, ΔEPkick = (3 - EPmiss) δ. But δ not estimated. Is that a toy equation? It's formal derived from Eq2. Could include. Need units: δ dimensionless, 3 and EPmiss points, ΔEPkick points. Breakdown if δ outside uncertainty. This is not fake; derived. For biomechanics, if kicker max distance Rmax, feasible set. For weather, wind changes effective distance/angle; if wind vector causes ball path outside posts, kick veto. Could state no wind covariate in paper, so cannot quantify. Good.

RLVR_COUNTERFACTUAL_VETOES: Need 3 verifiable RLVR veto scenarios + predictions. Use RLVR maybe "verifiable counterfactual audit". Define each with trigger, equation, verifiable prediction. 
Scenario 1: coordinate-axis inversion. Verifiable: if xLO computed using lateral coordinate 16 instead of longitudinal 40, xLO=5; EPlineout likely >1.69; false lineout. Prediction: auditing transforms marker to X=40,d=20,xLO=20, ∆EP remains -0.53; no lineout recommendation.
Scenario 2: zero miss continuation. Using Pmake=0.563 [PAGE 9] and EPmiss=0 yields EPkick=1.689, equal to EPlineout 1.69, ∆EP≈0; with observed continuation EPkick=2.22, ∆EP=-0.53. Prediction: zeroing miss increases lineout preference at moderate distances; verifiable by recomputation.
Scenario 3: dtouch mis-specification. Eq3; if actual dtouch=20 but assumed 0, xLO wrong by 20 m; at case marker, ∆EP at dtouch=0 likely negative? Wait paper says bootstrap mean crosses zero around 26 m. At dtouch=20, ∆EP=-0.53. At dtouch=0, likely more negative (kick favored even more). Underestimating dtouch makes lineout less favored. Prediction: if a system assumes dtouch=0, it will overrecommend kicks in situations where actual touch gain 20; if it overestimates >26, flips to lineout. Verifiable with decision map [PAGE 13]. 
Need maybe include "RLVR" as "reward-verifiable counterfactual". Could define verifiable reward: recomputation matches source table. Good.

Need ensure no "odds". In RLVR, don't say "odds". Use probability. 

Potential issue: The system says ">= 1,000-WORD DEPTH across these exact XML sections". It may mean each section? Probably across exact sections total >=1000. But maybe each? To be safe, make each section substantial. THINK_TRACE >=400 explicitly. Others can be 300-500. Total >2500.

Need final no analysis. Need maybe include XML only. Ensure tags closed. Need maybe not use markdown headings outside. Inside can use LaTeX. 

Let's draft carefully.

Need check word count. I'll compose in final. But let's pre-write and count approximate.

THINK_TRACE draft:
"The paper formalizes the penalty decision as..." Need 500+ words. Let's write ~750.

Potential issue: In SOURCE_OPERATORS, avoid "odds". The logit equation uses fraction. Could say "log-linear logistic model". The source says "log(pi/(1-pi))". That's fine. Avoid word.

Need maybe include exact verbatim quotes. For quotes, use quotation marks. Could be long. Need page markers. Good.

Let's write final.

Double-check prohibited: "betting" no. "spread" no. "totals" maybe not. "moneylines" no. "odds" no. Need scan: I might write "win-percentage differential" okay. "win probability" okay. "expected points". "risk profile" okay. No betting.

Need avoid "bookmaker". no.

Let's construct final with sections.

Need ensure LaTeX not too complex for XML? It's okay. Use &? In XML, raw & may be problematic? We are not required valid XML? It says XML sections. Ampersands in LaTeX like \Delta EP? Could use & in alignment? Better avoid align environment with &? It may be okay but to be safe, avoid unescaped &? XML would need &amp; if strict. But user likely expects tags, not parsed. Could use simple LaTeX without alignment &. For equations, use \[ ... \]. Avoid & inside. Use \begin{aligned} with &? Might contain &. To be safe, avoid alignment &. Use separate equations. Use \frac etc. 

Need in LaTeX, \text{} maybe. Fine. Use \left\{ ... \right\}. 

Potential XML issue: less-than in math e.g. Sec_Remain_Half < 120. In XML, raw < problematic. Could use \lt or "less than" text. Use \text{Less\_Than\_2\_Min}=1 if \text{Sec\_Remain\_Half}<120? That has <. Could write \text{Sec\_Remain\_Half} \in [0,120) maybe. Or use \le? Use \lt? In LaTeX \lt is not standard? Use < maybe okay. But to avoid XML issues, use \text{Less\_Than\_2\_Min}=1 when seconds remaining in current half are below 120 s. Or use \mathbb{I}(\text{Sec\_Remain\_Half} < 120). The < could break. Use \mathrm{Sec\_Remain\_Half} \le 119? Better: indicator L2M = 1 if Sec_Remain_Half < 120 s. In text no raw <. Could write "below 120 s". For equations, avoid <. Use \mathbf{1}[\text{Sec\_Remain\_Half} \le 119.999]? That's awkward. Could just not include inequality.

Need maybe use \mathrm{d} for differential? Fine.

SOURCE_OPERATORS: include "C = {-7,-5,-3,0,3,5,7} points". 

Need maybe mention "SI units". 

Let's draft final now. Ensure word count. Use detailed paragraphs.

One more thought: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." We must not include invented equations beyond source? We can derive sensitivity equation from Eq2. That's okay. But avoid arbitrary thresholds. For physical veto, maybe define feasible set but not assign values. Good.

Need maybe include "information units"? The paper doesn't use information. But invariant says state SI/information/probability units. We can say log-probability units are dimensionless information units? Maybe "log-probability (nats)". Good. For multinomial coefficients, log-probability in nats. Use "nats". For logistic, logit in log-probability units (dimensionless). Good.

Need maybe include "breakdown" in each equation? In SOURCE section, list assumptions and breakdown.

Need maybe include page citations for every equation. Good.

Let's write. 

Check THINK_TRACE word count roughly: I'll write long.

Potential issue: "Deep multi-hop derivation & gray-zone audit (>=400 words)." Need maybe explicitly >=400. We'll ensure.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper reduces a rugby union penalty decision to a comparison of two expected-points surfaces: the expected points of a possession that begins with a lineout after kicking to touch, and the expected points of attempting a place kick at goal. The central operator is not a single point estimate but a field-dependent difference surface. If we denote the penalty location in the decision-space coordinates used by the paper, the core comparison is

\[
\Delta EP(x,y;d_{\text{touch}})=EP_{\text{lineout}}(x_{LO})-EP_{\text{kick}}(x,y),
\]

where positive values favor the lineout and negative values favor the kick, as stated in [PAGE 13]: “Positive values of ∆EP(x, y; dtouch) favor choosing the lineout, while negative values favor taking the kick at goal, with ∆EP(x, y; dtouch) = 0 tracing out the indifference frontier between the two options.” The derivation has several layers. First, the lineout value must be estimated from possession outcomes that begin with a lineout. The paper uses a multinomial logistic model over next-score outcomes \(C=\{-7,-5,-3,0,3,5,7\}\), then converts fitted class probabilities into expected points by summing outcome points weighted by their conditional probabilities. Second, the kick value must be estimated from distance and angle to the posts, with a make-probability model and a continuation value for misses. Third, the penalty location must be translated into the resulting lineout location using an assumed meters-gained-to-touch parameter \(d_{\text{touch}}\). The final decision map is therefore not a universal truth map; it is a conditional surface conditioned on data regimes, coordinate conventions, continuation assumptions, and touch-gain scenarios.

A critical multi-hop issue is coordinate notation. In the expected-points framework section, the paper says that \(x\) is “the distance in meters from the opposition try line and \(y\) is the lateral distance from the center of the pitch” [PAGE 5]. Later, in the kicking geometry, it says “where x is the distance from the left touchline, y is the distance from the opposition try line, and 35 is the midpoint of the pitch width (in metres)” [PAGE 9]. This creates two coordinate frames. For lineout valuation, the relevant longitudinal coordinate is distance from the opposition try line. For kick geometry, the relevant coordinates are lateral distance from the left touchline and longitudinal distance from the try line. In the case study, the penalty is described as “16 m from the left touchline and 40 m from the opposition try line” [PAGE 15], and the marker is reported as \((x=16,y=40)\) [PAGE 12]. If the kick geometry is used, the horizontal offset from the center of the posts is \(|16-35|=19\) m, and the distance to the posts is approximately \(\sqrt{40^2+19^2}=44.3\) m. The angle is approximately \(\arctan(19/40)\), or about 25.3 degrees. If, however, the lineout translation rule is applied to the lateral coordinate by mistake, one would compute \(x_{LO}=\max\{5,16-20\}=5\) m, which is not the intended lineout location for a penalty 40 m from the try line. The intended longitudinal coordinate is 40 m, so the correct translation with \(d_{\text{touch}}=20\) m is \(x_{LO}=\max\{5,40-20\}=20\) m. This coordinate audit is essential because a swapped axis can artificially inflate or deflate lineout value.

The lineout surface is estimated from 2,046 retained lineout-start possessions after run-level subsampling [PAGE 7]. The model includes location, card differential, win-percentage differential, and a less-than-two-minutes indicator. The paper justifies the multinomial structure by noting that “the response is a discrete state variable and the decision problem depends on the full conditional outcome distribution, not only its mean” [PAGE 5]. That matters because two states with the same mean points can have different tail risks: one state may be mostly no-score with occasional penalties, another may have more try outcomes but also more conceded scores. The expected-points functional preserves that distribution before collapsing to a mean.

The kick surface is also a mean of a compound process. The paper states that “the expected points of a penalty kick at goal are the weighted sum of the value of a make and the continuation value of a miss” [PAGE 8]. This avoids the common mistake of assigning zero value to a miss. After a missed penalty, the defending team may ground the ball, the ball may go dead and trigger a 22 m drop-out, or the ball may remain live. The paper simplifies this by assuming “a missed penalty transitions to a 22 m drop-out restart” [PAGE 10]. This is a defensible baseline, but it is a modeling assumption, not a universal law. Returned-in-play misses, counterattacks, and charge-downs are collapsed into restart continuation values estimated from broad zones.

The case study illustrates both the strength and the fragility of the framework. At the marker with \(d_{\text{touch}}=20\) m, the joint bootstrap gives \(EP_{\text{lineout}}=1.69\), \(EP_{\text{kick}}=2.22\), and \(\Delta EP=-0.53\), with 95% CI \([-1.26,0.25]\) and \(\Pr(\Delta EP>0)=0.08\) [PAGE 15]. The mean-optimal decision is the kick, and the observed decision was lineout. The regret is \(R_{\text{mean}}=0.53\) and \(R_{\text{boot}}=0.55\) [PAGE 17]. But the confidence interval includes zero, so the decision is not presented as deterministic. The paper also notes that the bootstrap-mean curve crosses zero around 26 m of touch gain [PAGE 15]. That means the recommendation is sensitive to the unobserved \(d_{\text{touch}}\). If the actual touch gain were larger than assumed, the lineout becomes more attractive. If it were smaller, the kick becomes even more attractive.

A deeper gray-zone issue is selection. The paper acknowledges that “stronger teams are both more likely to generate attacking lineouts in the opposition half and more likely to earn penalties” [PAGE 19]. Therefore, lineout expected points near the opposition goal line may be upward biased because elite teams and favorable game states are overrepresented. The same concern applies to kicking data: coaches may choose to kick only when they believe the attempt is makeable, and stronger teams may generate more penalty opportunities. The framework is therefore best interpreted as a conditional decision map, not an unconfounded causal optimum.

Finally, the decision problem is not purely expected points. The paper recognizes that “the quantity that ultimately matters in a game” is win probability, not expected points alone [PAGE 20]. In the case study, it says South Africa was trailing by more than 3 points late in the match, so apparently inefficient expected-points decisions were necessary to attempt to win the game [PAGE 18]. Thus, even a correct expected-points calculation can be locally suboptimal when clock, score margin, and win probability are the true objectives. The gray-zone audit therefore concludes: the model is strongest as a transparent baseline for field-location strategy, weaker as a universal recommendation engine, and weakest when physical context, weather, player availability, or score-state urgency are outside its covariate support.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper’s formal operators can be separated into five modules: decision difference, lineout expected points, kick expected points, make probability, and continuation value. All equations below use SI length units in meters, scoring units in points, and probability/log-probability units in dimensionless nats or probability mass.

1. Decision difference operator.

\[
\Delta EP(x,y;d_{\text{touch}})
=
EP_{\text{lineout}}(x_{LO})-EP_{\text{kick}}(x,y)
\]

Units: points.  
Assumptions: both options are compared from the same penalty location and same game context; positive values favor lineout, negative values favor kick.  
Source: “∆EP(x, y; dtouch) = EPlineout(xLO) −EPkick(x, y)” [PAGE 5].  
Breakdown: if \(x_{LO}\), \(d_{\text{touch}}\), or kick geometry are specified in incompatible coordinate frames, the difference is invalid.

2. Lineout expected points from next-score outcomes.

Let \(C=\{-7,-5,-3,0,3,5,7\}\) be observed next-score point outcomes. The multinomial model estimates class probabilities \(\hat P(Y=c\mid X)\). Then

\[
EP_{\text{lineout}}(x)
=
\sum_{c\in C} c\,\hat P(Y=c\mid X)
\]

Units: points.  
Assumptions: the possession begins with a lineout; next-score outcome distribution is conditioned on field location, card differential, win-percentage differential, and late-half indicator.  
Source: “EPlineout(x) = X c ∈C c · ˆP(Y = c | X)” [PAGE 5].  
Breakdown: if an outcome lies outside \(C\), or if the reference category is not properly normalized, the probability mass is not coherent.

3. Multinomial log-linear model.

For outcome category \(c\in C\), relative to reference category \(c^{*}\),

\[
\log
\frac{P(Y=c\mid X)}{P(Y=c^{*}\mid X)}
=
\alpha_c
+
\beta_{c,1}\,\text{Location}
+
\beta_{c,2}\,\text{Card\_Diff}
+
\beta_{c,3}\,\text{WinPct\_Diff}
+
\beta_{c,4}\,L2M
\]

Units: log-probability ratios, dimensionless nats. \(\alpha_c\) and \(\beta\) coefficients absorb the units of their covariates. Location is categorical by zone, though interpolated to meter midpoints for plotting: “5, 13.5, 31, 45, 55, 69, 86.5, 97.5” m using boundaries “(0, 5, 22, 40, 50, 60, 78, 95, 100)” [PAGE 6].  
Assumptions: additive baseline; location enters flexibly as a factor; \(L2M\) is binary for fewer than two minutes remaining in the half.  
Source: [PAGE 5].  
Breakdown: sparse zones, especially near a team’s own goal line, produce unstable probabilities; the paper notes bootstrap uncertainty is largest there [PAGE 8].

4. Kick expected points.

Let \(d\) be distance from penalty spot to center of posts, in meters, and \(\theta\) the lateral angle, in degrees or radians depending on implementation. The paper’s equation is

\[
EP_{\text{kick}}(d,\theta)
=
P_{\text{make}}(d,\theta)\cdot 3
+
\left(1-P_{\text{make}}(d,\theta)\right)\cdot EP_{\text{miss}}(d,\theta)
\]

Units: points. The successful kick is worth 3 points. \(P_{\text{make}}\) is dimensionless probability. \(EP_{\text{miss}}\) is expected points after a miss.  
Assumptions: make probability depends primarily on distance and angle; miss continuation can be approximated by restart sequences.  
Source: “EPkick(d, θ) = Pmake(d, θ) · 3 + (1 −Pmake(d, θ)) · EPmiss(d, θ)” [PAGE 8].  
Breakdown: if \(EP_{\text{miss}}=0\) is imposed, the model understates kick value relative to the paper’s stated framework.

5. Geometry of distance and angle.

Using kicking coordinates where \(x\) is distance from the left touchline and \(y\) is distance from the opposition try line, with the center of the posts at \(x=35\) m,

\[
\theta
=
\arctan\left(\frac{|x-35|}{y}\right)
\cdot \frac{180}{\pi}
\]

Units: \(\theta\) in degrees if the factor \(180/\pi\) is included; \(|x-35|\) and \(y\) in meters.  
The implied distance to the center of the posts is

\[
d=\sqrt{(x-35)^2+y^2}
\]

Units: meters.  
Source: “θ = arctan |x −35| y · 180 π” [PAGE 9].  
Breakdown/singularity: if \(y=0\) and \(x\neq 35\), the angle expression is singular; if \(y=0\) and \(x=35\), both distance and angle are undefined. The paper notes estimated kick probabilities begin at 5 m from the goal line “because no observations occur at 0 m” [PAGE 10].

6. Logistic make-probability model.

For kick \(i\),

\[
\log\left(\frac{p_i}{1-p_i}\right)
=
\beta_0+\beta_1\,\text{distance}_i+\beta_2\,\theta_i
\]

Units: left side is log-probability ratio, dimensionless; distance in meters; angle in degrees or radians as used in fitting.  
Assumptions: monotonic effects of distance and angle are adequate; no weather, wind, player fatigue, or surface friction covariates.  
Source: [PAGE 9].  
Breakdown: extrapolation beyond empirical distance-angle support is unstable. The paper’s sensitivity check compares a GAM and finds similar performance, but still relies on distance and angle only [PAGE 9].

7. Miss continuation value.

The paper approximates \(EP_{\text{miss}}\) using restart sequences and zone-level average points, then smooths with a weighted smoothing spline:

\[
EP_{\text{miss}}(y)
\approx
\text{smooth}\left(\text{zone average points},\ \text{weights}=\text{zone counts}\right)
\]

Units: points; \(y\) is longitudinal distance from the opposition try line in meters.  
Assumptions: missed penalties mostly transition to 22 m drop-out restarts; broad zones are adequate inputs.  
Source: “we therefore adopt a simplifying assumption: a missed penalty transitions to a 22 m drop-out restart” [PAGE 10]; Table 3 reports zone counts and average points [PAGE 11].  
Breakdown: sparse restart zones are noisy. Table 3 shows, for example, “10m–22m (opp)” with \(n=7\) and average points \(4.29\), which should not be treated as a stable population parameter.

8. Touch-kick translation to lineout location.

Let \(x\) be longitudinal distance from the opposition try line, in meters. The resulting lineout location is

\[
x_{LO}=\max\{5,\ x-d_{\text{touch}}\}
\]

Units: meters.  
Assumptions: the kick gains \(d_{\text{touch}}\) meters closer to the opposition try line; lineout cannot be taken closer than 5 m from the try line.  
Source: “xLO = max{5, x −dtouch}” [PAGE 12]; “truncating at the 5 m line if necessary, since the laws prohibit lineouts closer than 5 m from the try line” [PAGE 12].  
Breakdown: if \(x-d_{\text{touch}}\le 5\), further touch gain is truncated. If \(x<5\), the rule may not represent a legal or meaningful lineout location. The model also suppresses lateral location for the lineout component.

9. Bootstrap uncertainty operators.

For \(B=2000\) replicates,

\[
EP^{(b)}_{\text{lineout}}
=
\sum_{c\in C} c\,\hat P^{(b)}(Y=c\mid X)
\]

and

\[
EP^{(b)}_{\text{kick}}
=
P^{(b)}_{\text{make}}\cdot 3
+
\left(1-P^{(b)}_{\text{make}}\right)\cdot EP^{(b)}_{\text{miss}}
\]

The reported 95% interval is the percentile interval:

\[
\left[
Q_{0.025}\left(EP^{(b)}\right),
Q_{0.975}\left(EP^{(b)}\right)
\right]
\]

Units: points.  
Source: percentile bootstrap with \(B=2000\) replicates [PAGE 7, PAGE 11].  
Breakdown: bootstrap intervals reflect sampling dependence but not unmodeled selection bias, coordinate error, weather, or player-specific kicker ability.

10. Regret operators.

For decision \(j\),

\[
R_{\text{mean},j}
=
\max\left(
EP^{\text{mean}}_{\text{best},j}
-
EP^{\text{mean}}_{\text{actual},j},
0
\right)
\]

and

\[
R_{\text{boot},j}
=
\mathbb{E}_b
\left[
\max\left(
EP^{(b)}_{\text{best},j}
-
EP^{(b)}_{\text{actual},j},
0
\right)
\right]
\]

Units: points.  
Assumptions: best is defined by larger bootstrap-mean EP or larger replicate EP; actual decision is compared against that benchmark.  
Source: [PAGE 15].  
Breakdown: regret is expected-points regret, not win-probability regret. A trailing team may rationally accept positive expected-points regret to preserve win probability.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage runs through three scientific streams: American football expected-points decision analysis, rugby union phase-level expected-points modeling, and rugby goal-kicking success modeling. The American football stream supplies the conceptual template: translate field position and context into expected points, then compare decision options. The paper cites Romer (2006), Burke (2009), Lock and Nettleton (2014), Baldwin (2021), and Yurko et al. (2019) [PAGE 1–2, PAGE 20–21]. The rugby stream is more recent and data-constrained. Martinez-Arastey et al. (2025) provide phase-level expected-points foundations for the English Premiership and highlight the difficulty of predicting low-frequency outcomes such as penalty kicks [PAGE 2]. The kicking stream comes from Quarrie and Hopkins (2015) and related international, Super Rugby, and NPC kicking observations [PAGE 4]. The paper synthesizes these streams by building two surfaces—lineout possession value and penalty-kick value—and comparing them directly.

A major genealogical trap is the transfer of American football assumptions into rugby union without checking event structure. American football fourth-down models often treat field position as continuous and possessions as downs; rugby union penalties, lineouts, rucks, phases, and restart sequences have different dependency structures. The paper handles part of this by restricting to lineout-start possessions, using zonal field location, and explicitly modeling next-score outcomes rather than only scoring probability. However, the mismatch remains: Premiership phase data are paired with kicking data from 2000–2012 international, Super Rugby, and NPC sources [PAGE 4]. The paper acknowledges this as a limitation: “the model combines phase-level data from club competitions with penalty-kicking data from international matches, introducing potential inconsistencies in player quality, decision-making, and context” [PAGE 19].

A multi-week modeling trap is pseudo-replication. Consecutive lineout possessions can recycle through the same eventual score. If every row is retained, long same-outcome runs receive mechanical weight. The paper defines run identifiers and keeps one representative row per run: “we retain exactly one representative row per run_id” [PAGE 6]. This is genealogically important because it prevents a single score from being counted many times merely because play recycled through repeated lineouts. The method is similar to cluster-level subsampling used by Brill et al. (2025) for reducing within-game dependence [PAGE 6].

Another multi-week trap is coordinate drift. The paper uses at least two coordinate descriptions: one where \(x\) is distance from the opposition try line [PAGE 5], and another where \(x\) is distance from the left touchline and \(y\) is distance from the opposition try line [PAGE 9]. Over a multi-week implementation cycle, ingestion pipelines, maps, and coaching dashboards can accidentally swap these axes. The correct longitudinal distance from the try line must drive \(x_{LO}\), while the correct lateral and longitudinal coordinates must drive \(d\) and \(\theta\). If this distinction is lost, the decision surface becomes internally inconsistent.

A final genealogical trap is optimizing expected points when the target should be win probability. The paper is explicit: “A common critique of expected-points-based decision models is that they maximize expected points rather than expected win probability” [PAGE 20]. In late-game or trailing states, the optimal win-probability action may have lower expected points because a try, not three points, is required. The case study notes that South Africa was trailing by more than three points late in the match, so some expected-points-inefficient decisions were necessary to attempt to win the game [PAGE 18].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A recursive decision model must represent not only the model’s recommendation but also the coach’s belief about the model, the opponent’s likely response, and the clock. In the paper’s framework, the immediate state variables are field location, \(d_{\text{touch}}\), \(Card\_Diff\), \(WinPct\_Diff\), \(Points\_Difference\), and \(L2M\). The coach’s habit regression can be described as a prior over conventional behavior: near the opposition corner, lineout is often preferred; with a reliable kicker and a narrow score margin, kick at goal may be preferred; late in a half, conservative behavior may dominate. The paper notes that many game states are “governed by convention, perceived kicker ability, and the expected quality of a team’s lineout” [PAGE 1]. That sentence is crucial for recursive reasoning: the observed decision is not generated by a pure expected-points operator; it is generated by a belief system.

A counter-trap occurs when a coaching staff overcorrects for convention. If a team historically kicks at goal too often in marginal positions, a model-based correction may push toward lineout too aggressively. The paper’s decision maps show that increasing \(d_{\text{touch}}\) shifts the surface toward lineout [PAGE 13]. If the coaching staff assumes a large touch gain, but the actual touch-finding is poor, the model will overstate lineout value. Conversely, if the staff assumes a small touch gain, it will overstate kick value. Because \(d_{\text{touch}}\) is treated as a scenario parameter rather than a latent random variable, the framework does not fully resolve this recursive uncertainty: “the data do not record realized meters gained to touch at the penalty level, dtouch is treated as a scenario parameter rather than a latent random variable” [PAGE 12].

The clock creates a second recursive layer. The model includes \(L2M\), an indicator for fewer than two minutes remaining in the half [PAGE 3]. But expected points and win probability can diverge sharply as time decreases. If a team is trailing by more than three points, three points may not change the required win condition; a try may be necessary. The paper acknowledges this explicitly in the case study: “South Africa was trailing by more than 3 points towards the end of the match so the final ’inefficient’ EP decisions were necessary to attempt to win the game” [PAGE 18]. In recursive terms, the correct objective function may switch from maximizing expected points to maximizing probability of a try within a limited number of possessions.

Opponent modeling also matters. If a team kicks to touch, the opponent’s lineout defense, maul defense, and kick-chase behavior determine the realized value of the lineout. The lineout EP model captures downstream contingencies such as losing one’s own lineout or conceding points after a turnover [PAGE 6], but it does not explicitly model opponent-specific defensive schemes. A recursive counter-trap is therefore to treat \(EP_{\text{lineout}}\) as a league-average object and then adjust for known opponent weakness, lineout loss probability, or maul success. The paper’s framework supports such adjustment only by refitting or scenario analysis, not by direct opponent covariates in the main model.

The best recursive use of the paper is not to treat its recommendation as a fixed command. It is to use the indifference frontier as a belief-updating device. If the model says kick at goal, but the actual touch gain is likely larger than assumed, the coach should test the sensitivity of \(\Delta EP\) to \(d_{\text{touch}}\). If the model says lineout, but the kicker is injured, the wind is strong, or the score state requires a try, the recommendation should be vetoed or reweighted. In this sense, the paper provides a transparent first-order policy prior, while the recursive layer must incorporate clock, opponent, player availability, and score-margin urgency.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto occurs when a physical, biomechanical, or weather condition invalidates the empirical support of the expected-points model. The paper’s models are conditional on historical data and broad covariates. They do not include wind speed, wind direction, precipitation, surface friction, kicker fatigue, kicker injury status, lineout throwing accuracy under wet conditions, or altitude. Therefore, any such condition can veto the raw EP recommendation if it places the observed state outside the model’s support.

Formally, let \(D_{\text{kick}}\) be the historical kicking dataset and let \(z\) denote unmodeled physical context variables such as wind vector, surface friction, and kicker maximal range. The estimated make probability is

\[
\hat P_{\text{make}}(d,\theta)
=
f(D_{\text{kick}},d,\theta)
\]

but the true current make probability is

\[
P_{\text{make}}^{\text{true}}(d,\theta,z)
\]

If \(z\) changes the ball flight enough that \(P_{\text{make}}^{\text{true}}\) lies outside the calibrated predictive distribution, the kick module is not valid. A first-order sensitivity follows from the paper’s kick equation:

\[
EP_{\text{kick}}^{\text{true}}
-
EP_{\text{kick}}^{\text{model}}
\approx
\left(3-EP_{\text{miss}}\right)
\left(
P_{\text{make}}^{\text{true}}-P_{\text{make}}^{\text{model}}
\right)
\]

Units: points. This is not a toy equation; it is an algebraic consequence of Equation 2 if \(EP_{\text{miss}}\) is held fixed. If \(EP_{\text{miss}}\) is close to 3, the kick-value loss from a missed make is small; if \(EP_{\text{miss}}\) is low, make probability changes have larger consequences. However, because \(EP_{\text{miss}}\) itself may be affected by weather and field position, this decomposition is only a first-order audit.

For biomechanical veto, define the kicker’s feasible set:

\[
\mathcal{A}_{\text{kick}}
=
\left\{
(d,\theta):
d_{\min}\le d\le d_{\max},
\theta_{\min}\le\theta\le\theta_{\max},
\text{kicker available}
\right\}
\]

Units: \(d\) in meters, \(\theta\) in degrees or radians. If \((d,\theta)\notin\mathcal{A}_{\text{kick}}\), the kick is physically inadmissible or severely impaired. The paper does not estimate \(d_{\max}\), \(\theta_{\max}\), or kicker-specific fatigue curves. Therefore, those constraints must be supplied by team medical, GPS, or tracking data before the model’s recommendation is acted upon. If a kicker has a groin injury, reduced approach speed, or altered run-up due to wet boots, the historical logistic model may no longer represent the kicker’s current state.

For lineout veto, define the touch-to-lineout feasible set:

\[
\mathcal{A}_{\text{lineout}}
=
\left\{
d_{\text{touch}}:
d_{\text{touch}}\ge 0,
x_{LO}=\max\{5,x-d_{\text{touch}}\},
\text{lineout throw and lift available}
\right\}
\]

Units: meters. If the hooker’s throwing accuracy is degraded by wind or rain, if the lineout lifters are fatigued, or if the opponent’s lineout defense is known to be dominant, the model’s league-average \(EP_{\text{lineout}}\) may overstate the team-specific value. The paper notes that lineout EP captures downstream contingencies, but it does not include opponent-specific lineout loss probability as a direct covariate [PAGE 6].

For weather veto, let \(w\) be wind speed in \(\text{m}\cdot\text{s}^{-1}\), and let \(\phi\) be wind direction relative to the kick vector. A strong crosswind or headwind can change both effective distance and lateral drift. The paper’s kicking model does not include \(w\) or \(\phi\). Therefore, if wind is strong enough to alter the ball’s path materially, the model’s distance-angle make probability is not identified for the current attempt. The correct adjudication is not to force the EP number into the decision, but to treat the EP surface as a prior and apply a physical feasibility constraint:

\[
\text{Choose action } a\in\{\text{kick},\text{lineout}\}
\quad\text{subject to}\quad
a\in \mathcal{A}_{\text{kick}}\cup \mathcal{A}_{\text{lineout}}
\]

If only one action is feasible, the expected-points comparison is moot. If both are feasible but weather or biomechanics introduce large uncertainty, the decision should be made on a wider distribution or deferred to win-probability reasoning. The cross-layer veto proof is therefore: the paper’s operators are valid within their empirical and covariate support; when physical context leaves that support, the model’s output is not a veto-proof recommendation but a conditional approximation requiring external feasibility constraints.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following three reward-verifiable counterfactual veto scenarios test whether the paper’s framework is being applied correctly. Each scenario has a verifiable recomputation rule and a predicted failure mode if the veto is ignored.

1. Coordinate-axis inversion veto.

Trigger: an implementation uses the penalty’s lateral coordinate in the lineout translation equation. The case-study marker is described as “16 m from the left touchline and 40 m from the opposition try line” [PAGE 15]. If the implementation mistakenly uses \(x=16\) as longitudinal distance from the try line in

\[
x_{LO}=\max\{5,x-d_{\text{touch}}\},
\]

then with \(d_{\text{touch}}=20\) m it computes \(x_{LO}=5\) m. That is a 5 m lineout, which is not the intended location for a penalty 40 m from the try line.

Verifiable prediction: using the correct longitudinal coordinate, \(x=40\) m and \(d_{\text{touch}}=20\) m gives \(x_{LO}=20\) m. The paper’s joint bootstrap at the correct marker gives \(EP_{\text{lineout}}=1.69\) and \(EP_{\text{kick}}=2.22\), with \(\Delta EP=-0.53\) [PAGE 15]. If an audit changes the lineout location from 40 m to 5 m and the model suddenly recommends lineout, the audit has exposed a coordinate-axis error. The veto is: do not use the coordinate-inverted lineout recommendation; recompute using the correct longitudinal coordinate.

2. Zero miss-continuation veto.

Trigger: an implementation assigns zero value to a missed penalty, contrary to the paper’s framework. The paper states that the kick surface combines make probability with “the continuation value of misses” and that misses are not assigned zero value [PAGE 2]. Equation 2 is

\[
EP_{\text{kick}}
=
P_{\text{make}}\cdot 3
+
\left(1-P_{\text{make}}\right)\cdot EP_{\text{miss}}.
\]

If \(EP_{\text{miss}}=0\), the model collapses to \(EP_{\text{kick}}=3P_{\text{make}}\). The paper’s sensitivity check reports marker-level make probability around 0.563 for the GAM and 0.538 for the logistic model [PAGE 9]. Using \(P_{\text{make}}=0.563\), the zero-miss value is approximately \(3\times0.563=1.689\) points. This is almost identical to the reported \(EP_{\text{lineout}}=1.69\) at the case-study marker. By contrast, the paper’s full continuation specification gives \(EP_{\text{kick}}=2.22\), which favors the kick.

Verifiable prediction: if a counterfactual implementation zeros out miss continuation, moderate-range penalty kicks will appear less valuable, and lineout recommendations will increase. At the case-study marker, the zero-miss specification would make the decision nearly indifferent, whereas the paper’s specified continuation makes the kick mean-optimal. The veto is: reject any recommendation produced by zeroing miss continuation unless the organization explicitly wants a conservative miss model, and then label it as a non-paper counterfactual.

3. Touch-gain mis-specification veto.

Trigger: an implementation treats \(d_{\text{touch}}\) as known without uncertainty or uses a value inconsistent with observed touch-finding. The paper says the decision maps are conditional on fixed \(d_{\text{touch}}\) scenarios: “the maps are therefore conditional on the chosen dtouch value” [PAGE 12]. The case-study bootstrap-mean curve crosses zero around 26 m of touch gain [PAGE 15]. At the observed 20 m touch gain, the mean decision is kick, with \(\Delta EP=-0.53\). If an implementation assumes \(d_{\text{touch}}=0\) when the team can realistically gain 20 m, it will understate lineout value. If it assumes \(d_{\text{touch}}>26\) m when the team cannot realistically gain that much, it will overstate lineout value.

Verifiable prediction: recalculating the case-study marker across \(d_{\text{touch}}\) should reproduce a monotone movement toward lineout as \(d_{\text{touch}}\) increases, consistent with the paper’s statement that “increasing dtouch shifts the decision surface toward the lineout option” [PAGE 13]. If a recommendation flips from kick to lineout without a corresponding change in \(d_{\text{touch}}\), or if it remains fixed despite a large change in \(d_{\text{touch}}\), the touch-gain layer is miswired. The veto is: treat any recommendation as invalid until the assumed \(d_{\text{touch}}\) is either observed, estimated from tracking data, or explicitly stress-tested across the paper’s grid \(d_{\text{touch}}\in\{0,5,10,15,20,25\}\) m [PAGE 12].
</RLVR_COUNTERFACTUAL_VETOES>