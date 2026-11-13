---
source: "2025 - Quantifying Off Ball Defensive Impact through Cover Shadows Lorenzo Casciolio Allen Wang amended - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Hudl StatsBomb/Research Competitions/2025"
pages: 31
model: baidu/ernie-5.5-flash-preview:free
words: 9505
---

<NATIVE_REASONING>
We need answer user's request. They provided a source paper and ask likely implicitly for analysis? The prompt at top: "DRIVE SOURCE: ..." and source text. They expect us to produce a full analysis with required XML sections, >=1000 words, zero betting lines, no fake ratios, formal equations, citations exact [PAGE N] markers and verbatim quotes when source pages provided. Need satisfy sections. Need maybe discuss source? The user didn't ask explicit question beyond providing source. Need produce a frontier reasoning foundry response likely evaluating/defining? Need include all exact XML sections. Need >=1,000 words across sections. Need zero betting lines: no spreads/totals/moneylines/odds. We can mention no odds. Need not invent toy equations. Need use formal LaTeX equations, units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes. Need maybe discuss a sports research paper. We can create an analysis of the cover shadows paper, deriving equations, evaluating. Need ensure no banned terms? "betting lines" zero betting lines: avoid spreads, totals, moneylines, odds. Could mention "no wagering concepts"? Better avoid words entirely? Invariant says never mention spreads, totals, moneylines, or odds. So do not mention those words. Also avoid "betting". Need not mention odds. Need >=1000 words. The final must have exact XML sections:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>
Need maybe only these sections. Need deep multi-hop derivation & gray-zone audit >=400 words in THINK_TRACE. Others can be detailed.

Need cite exact [PAGE N] markers and verbatim quotes. Use quotes from source. Ensure page numbers accurate. Need maybe cite for key equations: ball time page 6, player TTI page 7, probability page 8, threat page 11-12, xT page 13, pass selection page 13-14, blocking score page 17, optimization page 17-19, evaluation page 20-22, use cases page 22-24.

Need formal LaTeX equations, units. Need maybe reconstruct piecewise TTI from text? The source text has missing piecewise formula after "piecewise formula below:" on page 7; not fully included. Need be careful not invent? We can state the described cases and provide formal representation based on described acceleration/cruise, but maybe it's an assumption. The invariant says never invent fake ratios; formal equations with assumptions and singularity regimes. We can derive from constants given: reaction t_react=0.7 s, a=7.0 m/s^2, vmax=12.0 m/s, v0 component, d_eff = max(d-r_block,0), t_acc=(vmax-v0)/a, d_acc=v0 t_acc + 1/2 a t_acc^2. Need piecewise TTI: if v0>=vmax: t_react + d_eff/vmax. Else compute d_acc. If d_eff <= d_acc: solve d_eff = v0 t + 0.5 a t^2 => t = (-v0 + sqrt(v0^2+2 a d_eff))/a; TTI = t_react + t. Else: t_acc + (d_eff-d_acc)/vmax plus reaction. But source says max speed initial component v0=max(0, v_p·e). This is reasonable. Need cite as reconstructed from [PAGE 7] constants and case descriptions. Maybe note if exact piecewise formula omitted in extracted text, we formalize the described piecewise model, not inventing. But user says when source pages provided cite exact markers and verbatim quotes. Need include quotes for assumptions. We can include the piecewise equation as "based on the verbal description" with caveat. Need maybe use "verbatim quote" exact from source. For ball equation: [PAGE 6] "T_{ball} = \frac{e^{kd} - 1}{k v_0}" but text has weird spaces: "𝑇𝑏𝑎𝑙𝑙 = 𝑒^{𝑘𝑑} − 1 / 𝑘 𝑣0" Actually source: "𝑇𝑏𝑎𝑙𝑙 = 𝑒^{𝑘𝑑} − 1 𝑘 𝑣0" with missing fraction. Need present as equation from paper: T_ball=(e^{kd}-1)/(k v0). Cite [PAGE 6]. Drag parameter k=(σ C_d A)/(2m). Units: k m^-1, d m, v0 m/s, T s. Values: σ=1.22 kg/m^3, C_d=0.25, A=0.038 m^2, m=0.42 kg. compute k? (1.22*0.25*0.038)/(0.84)=? 1.22*0.0095=0.01159; /0.84=0.0138 kg? Wait units: drag parameter k=(σ C_d A)/(2m) = (kg/m^3 * dimensionless * m^2)/(kg) = 1/m. 0.0138 m^-1. Need maybe mention. v0=12 m/s. Ball TTI at d=10m: e^{0.138}=1.148; -1=0.148; / (0.0138*12=0.1656) = 0.894 s. Good. Need maybe use.

Probability conversion: Δt = T_k - TTI_j. P_int,j = 1/(1+exp(-Δt/s)), s=sqrt(3) σ / π, σ=0.20. Units? s dimensionless? Δt seconds, so s must seconds. They set σ? It says σ=0.20 best. Probably logistic scale in seconds. Need note. Control probability P_ctrl = 1 - exp(-λ ΔT) ≈ λ ΔT, λ≈4.3 s^-1. Interval ΔT_k = T_k - T_{k-1}. Probability j gains possession in interval: P_j(T_k,T_k+ΔT_k) = (1 - Σ_l P_l(T_k)) P_int,j(T_k) λ ΔT_k. Need discuss issues: normalization, simultaneous players, sum probabilities can exceed? They subtract previous interceptions. Need maybe derive total P_j = Σ_{k=1}^K (1 - Σ_l P_l(T_k)) P_int,j(T_k) λ ΔT_k. P_blocked = sum defenders, P_received = sum attackers. Block if P_blocked > P_received for line. Lane blocked if Any/Majority/All. Need cite [PAGE 8-9]. Need discuss breakdown regimes: kd small (numerical exmp1) [PAGE 6]; k→0 limit T_ball→d/v0; large kd exponential; v0 unknown set to 12 m/s; if player already at max speed acceleration omitted; if d_eff=0 TTI=t_react; if Δt large negative P_int≈0, large positive P_int≈1; if ΔT=0 control probability zero; K finite not to infinity leaves non-zero no-control mass [PAGE 9]. Need maybe discuss threshold: line blocked if P_blocked>P_received, but can be near 0.5 gray zone. Need maybe mention class imbalance and evaluation: progressive passes 98.74% successful, false positives etc [PAGE 10]. Balanced accuracy, macro F1. Need maybe mention evaluation cannot observe true blocked pass: "a blocked pass is an unobserved event" [PAGE 9]. This is a key gray-zone.

Need perhaps answer with a report? The user didn't ask a specific question. The system says "You are the GSE + GSI Frontier Reasoning Foundry" and invariants. We need produce the required XML. Could be a research vetting/adjudication of the source. Need maybe state drive source and analysis.

Need ensure final >=1000 words. Let's plan word count ~2500? Need not too huge but enough. We can produce detailed sections. Need avoid "betting" words. Also avoid "odds" etc. Ensure no "spread" maybe can use "dispersion"? But invariant says never mention spreads, totals, moneylines, or odds. Avoid those exact words. Also "line" is okay for passing line, not betting line. But maybe "passing line". Do not say "betting lines" anywhere. Also avoid "total" maybe invariant says totals? It says never mention spreads, totals, moneylines, or odds. Does "total" count? Could avoid "total threat"? But source uses "total offensive threat" and "total threat prevented". The invariant says zero betting lines: Never mention spreads, totals, moneylines, or odds. Maybe "totals" as betting term, but to be safe avoid the word "total" entirely? It might be difficult because source quotes include "total". If we quote verbatim maybe includes "total". But invariant says never mention; source quotes maybe allowed? It says when source pages are provided, cite exact [PAGE N] markers and verbatim quotes. But if quote contains total, would violate? Need avoid verbatim quotes with banned words? We can paraphrase or quote snippets without banned words. But if required exact quotes, we can choose snippets that don't contain banned terms. Need avoid word "total" entirely in our text. Use "aggregate threat" instead. But source quotes: "The total offensive threat..." includes total. Could avoid. Need check all quotes. Also "spread" maybe in "dispersion"? Avoid. "odds" avoid. "money" avoid. "line" okay. "totals" not. "Total" maybe case-insens? Avoid. In final, avoid "total" and "totals". Use "aggregate", "sum", "overall" maybe okay. But "overall" fine. Need avoid "spread" in "spread of threat"? Use "distribution". "offensive threat" okay. "off-ball". "blocking score".

Need be careful with "line" in "passing line" is okay. "Baseline" okay. "linear optimization" okay.

Need formal equations. Need maybe use LaTeX.

Need citations exact [PAGE N]. Need verbatim quotes. Let's list quotes to use without banned words:
[PAGE 1] "These off-ball actions, often referred to as “cover shadows”, are crucial to a team’s defense but have received little analytical attention."
[PAGE 1] "we propose a physics-based model that estimates the probability of a player blocking a pass at any location by incorporating time to intercept" maybe.
[PAGE 2] "The difference in threat serves as a measure of cover shadows effectiveness."
[PAGE 6] "time-to-intercept (TTI)" and constants.
[PAGE 6] "We set v0 to an average ball speed of 12.0 m/s as a proxy." Need quote? It says "we set  to an average ball speed of 12.0 m/s as a proxy." Missing variable, but okay. Could quote "average ball speed of 12.0 m/s".
[PAGE 7] "After a reaction delay of t_react = 0.7 s" maybe.
[PAGE 7] "The maximum acceleration (a =7.0 m/s2) and the maximum speed (vmax =12.0 m/s) are fixed for all players."
[PAGE 7] "Defenders only need to get within a block radius (r_block=0.7 m) of the target"
[PAGE 8] "we express the probability that each player gains possession of the ball at a particular target point" maybe.
[PAGE 8] "This accounts for variability that is not explicitly modeled in TTI calculation such as differing speeds, reaction time, or fatigue."
[PAGE 8] "rate λ ≈ 4.3 s⁻¹"
[PAGE 9] "we are left with a non-zero probability that no one controls the ball before the end of the cone."
[PAGE 9] "This provides more granularity and flexibility to our analysis."
[PAGE 9] "a blocked pass is an unobserved event."
[PAGE 10] Table metrics. Could quote "Lane Control Majority and All outperform the three baselines" [PAGE 10]. Need maybe exact.
[PAGE 11] "Quantify the current offensive threat" etc.
[PAGE 12] equations for threat.
[PAGE 13] "We employ Expected Threat (xT)" maybe.
[PAGE 14] "the product of the xT surface, the pass selection surface ... and the pass success surface".
[PAGE 17] "blocking_score = threatS’ - threatS"
[PAGE 17] "the well-executed cover shadows have reduced the offensive team's danger by 25%." This uses % okay.
[PAGE 18] polygons.
[PAGE 19] Hungarian algorithm.
[PAGE 21] "the overall threat is reduced in 75% of the cases" but "overall" okay.
[PAGE 22] "teams topping the list finished on the lower end of the table" maybe not needed.
[PAGE 24] blocking rate equation.

Need avoid "total" in quotes. Use quotes without total. For blocking score: [PAGE 17] quote "blocking_score = threatS’ - threatS" and "A positive blocking score indicates that cover shadows are preventing some threat." Good.

Need maybe discuss "Expected Threat" xT units: probability of scoring from possession? xT values dimensionless [0,1] maybe. It says "how often a possession from that area leads to a goal" [PAGE 13]. Units: probability. Pass selection probability per cell dimensionless; pass success probability dimensionless. Threat sum dimensionless but can be interpreted as expected goal probability contribution. Blocking score same units. Need mention grid 104x68, coordinates meters. [PAGE 12].

Need cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need discuss no weather in source? We can adjudicate if external physical constraints veto claims. Need maybe produce proof that model is valid under assumptions, and veto scenarios if weather, wet ball, wind, crowd, player fatigue etc. Need formal: drag ignores Magnus/gravity [PAGE 6], constant drag. Weather changes air density, drag, ball mass; wind adds vector; precipitation changes friction, reaction time. Since model assumes straight-line path, constant k, v0 proxy 12 m/s, reaction 0.7s, a=7 m/s^2, vmax=12 m/s, block radius 0.7m, it can break if: strong headwind/tailwind changes ball T by O(10%?), wet pitch increases slip, defender acceleration lower, player fatigue. Need maybe derive bounds.

Need RLVR counterfactual vetoes: 3 verifiable veto scenarios + predictions. Need maybe create scenarios where model's prediction fails if verified by tracking. Need predictions: e.g., remove Lane Control in high-wind stadium; predicted blocking probability overestimates if ball slower? Need 3. Need ensure "verifiable". Could propose: (1) Wet pitch with 15 km/h crosswind and ball speed 9 m/s: measured interception probability lower than Lane Control by >10 percentage points. (2) Defenders with initial velocity opposing target: model uses only component towards target v0=max(0,...), if v0=0; actual turning latency adds delay >0.2s causing block underestimation? Need prediction. (3) Multiple defenders: probability aggregation assumes sequential subtraction but ignores collision/marking interactions; if two defenders within 1m, actual blocking maybe not sum; veto if measured block rate less than predicted by >0.15 when P_blocked near threshold. Need maybe include exact thresholds and predictions.

Need also mention "clock"? Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Need interpret as in-game state, time, score? Could discuss defenders' habits, crisis regression, counter-trap, clock (match time, fatigue). Need no betting. Need maybe mention "clock" as match clock and physical time constants. Need discuss players' strategic behavior: man-marking vs lane-blocking, cover shadow can be a trap; if defender anticipates pass, moves earlier; if ball carrier adjusts, cover shadow becomes false. Need counterfactual reasoning.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage & multi-week traps. Need lineage from pitch control Spearman [9][10], pressing intensity Bekkers [11], SoccerMap [15], xT [14], un-xPass [6], expected disruption [2][3]. Multi-week traps: validation on completed passes, class imbalance, using freeze frames, velocity inference from next event, player IDs missing, usingSerie A evaluation and Belgium-Portugal tracking. Need traps: metric may reward teams with fewer high-threat passes due to style not defense; blocking score affected by shot-ending or passes not attempted; unobserved counterfactual; SoccerMap pass selection biased by training leagues; xT from 2017-18 PL may not generalize; Hungarian algorithm suggests movements ignoring reaction and physical feasibility? Actually it uses shortest distance but not time. Need multi-week: repeated cycles can cause overfitting to league style, evaluating only between midfield and box, excluding high passes; cover shadow not independent from attacker movement.

Need final with sections. Need ensure XML tags not malformed? Use uppercase exactly.

Need word count >=1000. Let's aim ~2600-3200 words. Need maybe no markdown? XML sections can contain text and LaTeX. Good.

Potential issue: The final answer must not mention "betting lines" etc. Avoid all banned words. Check for "total" in final. I must carefully avoid "total". I can use "aggregate" or "sum". In source quotes, if quote includes "total" avoid. Also avoid "spread" (use dispersion, distribution), "odds" (avoid), "money" (avoid), "moneylines" (avoid). Also avoid "betting" (invariant maybe zero betting lines). Do not say "no betting". Just not mention. Also avoid "totals" as a word. In THINK_TRACE maybe say "sum". Need avoid "overall"? It's okay. "entire" okay. "aggregate". "table" maybe okay? "table" not banned, but "table" in source? It's okay. But maybe avoid "table" if not needed. "lower end of the table" quote maybe contains table, okay not banned. But no need.

Need ensure formal equations not fake. We can derive.

Let's outline final:

<THE THINK_TRACE>
- Restate task: assess paper's model. Use source. Deep multi-hop: define snapshots, lane, blocked lane, TTI, probability, threat, counterfactual, optimization. Audit gray zones: unobserved blocked passes, freeze frame velocities, class imbalance, fixed constants, proxy v0, man-marker radius, geometric cones in RQ3 vs probabilistic RQ1, evaluation indirect.
- Derivation: ball drag, player acceleration, logistic, control interval, threat product, blocking score. Check units and limits.
- Gray-zone: threshold Any/Majority/All, P_blocked vs P_received near parity; no normalization to 1; finite integration; sum over defenders; pass selection surface not causal; counterfactual removal may violate realism; optimization minimal distance not time.
Need >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX sections:
1 Data geometry: L, corridor, baseline.
2 Ball TTI: equation, constants, units, k value, limit, breakdown.
3 Player TTI: piecewise derived. Include equations. Assumptions and singularity.
4 Probability: logistic, control, combined, aggregate. Units, breakdown.
5 Threat: Voronoi, threat(r), pr, xT, SoccerMap surfaces. Equations.
6 Blocking score. Equation, example values from source? Could mention 0.041-0.031=0.010 [PAGE 16? Actually page 16 says 0.031 to 0.041 yielding 0.01; page 17 says threatS'=0.041, threatS=0.031. Cite]. Use no banned words. "aggregate threat".
7 Optimization: polygons, Hungarian assignment. Equations. Breakdown.
Citations exact and quotes.

Need be careful with quote "total". Use quotes: [PAGE 8] "This accounts for variability that is not explicitly modeled in TTI calculation such as differing speeds, reaction time, or fatigue." Good. [PAGE 9] "a blocked pass is an unobserved event." Good. [PAGE 12] maybe quote "probability that the next pass targets cell". Good. [PAGE 17] "blocking_score = threatS’ - threatS". Good.

<RETROCAUSAL_GENEALOGY>
Historical lineage: event data limitation [PAGE 1], expected disruption [PAGE 1], StatsBomb 360, pitch control, pressing intensity, SoccerMap, xT. Multi-week traps: unobserved counterfactual, class imbalance, style confounding, data synchronization, identity, velocity inference, league transfer, set pieces exclusions, high passes, only attacking half, man-marking exclusion, optimization geometric simplification. Need mention exact pages.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Discuss defender beliefs: if ball carrier likely passes to dangerous receiver, defender shades lane; attacker may dribble or switch; defender regression to habit under crisis (panic, clearances) vs deliberate counter-trap (inviting pass to congest). Clock: match time, velocity inference, reaction delay, ball speed proxy. Model assumes static snapshot and fixed reaction; game state dynamics. Counter-trap: if defender moves to block, attacker can exploit by moving receiver or using third-man run; counterfactual removing defender may not hold because team adjusts. Need predictions: in high-pressure moments, block probability may overstate due to panic passes? Or understate due to pressing? Need mention.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Need formal proof: If assumptions violated beyond tolerance, veto metric. Define veto conditions:
- Ball drag: if wind speed w not negligible, ball acceleration includes drag relative velocity. The model's T_ball uses stationary air. Estimate error: T_ball(w) approx? Derive small perturbation: δT/T ~ (C_d σ A/(2m)) ... Maybe not necessary but formal. Could state: if wind component along pass > 0.15 v0 or air density changes >10%, predicted T_ball error >5%, veto as precise blocking classifier. Need maybe compute? Use equation.
- Wet pitch: friction/accel reduction; if measured acceleration < 5 m/s^2 for >10% players, TTI underestimation; veto.
- Player initial velocity: model uses component toward target; if lateral speed > 6 m/s and turn required, actual turn latency not modeled; veto if d<r_block+1m? Need.
- Weather: precipitation changes ball mass/ surface, spin; Magnus ignored [PAGE 6] quote? Could quote "ignoring gravity and Magnus force"? Source says "ignoring gravity and Magnus force while assuming a constant drag coefficient and a straight-line path" [PAGE 6]. Good.
Need present as proof: model outputs are only valid inside assumptions; if veto condition, discard block probability or widen uncertainty.

<RLVR_COUNTERFACTUAL_VETOES>
Need 3 scenarios with verifiable predictions.
1. High-wind/low-temp: In a controlled re-annotation of matches with measured wind > 5 m/s along pass, compare Lane Control P_blocked vs observed pass completion when lane predicted blocked/open. Prediction: if wind reduces ball speed by >10%, false positives increase; veto if balanced accuracy drops below 60% or FP >5 percentage points.
2. Fatigue late-game: Using tracking-derived acceleration, players with sprint count high; model's fixed a=7, vmax=12 overestimates TTI? Actually if fatigued acceleration lower, defenders arrive later, P_blocked overestimates. Prediction: for defenders with GPS-derived peak speed decile decline >8%, actual block rate lower than predicted by >10 pp; veto if calibrated ECE >0.05.
3. Dense congestion with multiple defenders: Model aggregates defender probabilities sequentially but not marking collisions. In snapshots with 3 defenders within 2m of same lane, predicted P_blocked >0.8 but actual pass completion >0.2? Need veto. Prediction: if at least two defenders within 1.5m of target point, observed block rate will be lower due to mutual obstruction; veto if observed block rate < predicted by 0.15.
Need maybe use "pass completion" not "success"? okay. Need no banned words.

Need ensure no "total" in final. I'll scan mentally.

Potential use of "overall" okay. "aggregate" okay. "sum" okay.

Need maybe mention "class imbalance" but not "imbalanced"? okay. "skewed" okay. "False positive" okay. "false negative" okay.

Need maybe mention "line" many times. Not banned.

Need include exact page markers [PAGE N] for citations. Need maybe quote with page marker before/after. Need exact [PAGE 1] etc. Need verbatim quotes with quotation marks. Ensure quotes are exact from provided source. Need avoid weird Unicode? Can use standard. Need maybe quote [PAGE 1]: "These off-ball actions, often referred to as “cover shadows”, are crucial to a team’s defense but have received little analytical attention." Good.
[PAGE 6]: "ignoring gravity and Magnus force while assuming a constant drag coefficient and a straight-line path". Exact? Source: "we follow Spearman’s approach [9] for ball motion under quadratic drag, ignoring gravity and Magnus force while assuming a constant drag coefficient and a straight-line path." Good.
[PAGE 6]: "average ball speed of 12.0 m/s". Exact? Source: "we set ... to an average ball speed of 12.0 m/s as a proxy." Good.
[PAGE 7]: "maximum acceleration (a =7.0 m/s2) and the maximum speed (vmax =12.0 m/s) are fixed for all players." Source has spaces, but okay? Need exact? It says "The maximum acceleration ( =7.0 m/s2 ) and the maximum speed ( =12.0 m/s) are fixed for all players." Because variables missing due PDF. Better quote plain text without variable? Could quote "maximum acceleration" and "maximum speed". But need exact. Maybe avoid if not exact. Use [PAGE 7] "Defenders only need to get within a block radius". Exact enough.
[PAGE 8] "This accounts for variability that is not explicitly modeled in TTI calculation such as differing speeds, reaction time, or fatigue." Exact? Source: "This accounts for variability that is not explicitly modeled in TTI calculation such as differing speeds, reaction time, or fatigue." Yes.
[PAGE 9] "a blocked pass is an unobserved event". Exact? Source: "by definition, a blocked pass is an unobserved event." Good.
[PAGE 10] "Lane Control Majority and All outperform the three baselines". Exact? Source: "Both Lane Control Majority and All outperform the three baselines in terms of balanced accuracy (+ 11-15%) and macro F1 score (+ 0.17-0.20)." Good.
[PAGE 12] "probability that the next pass targets cell". Source: "is the probability that the next pass targets cell". Good.
[PAGE 14] "the product of the  surface, the pass selection surface (Figure 4, left) and the pass success surface (Figure 4, right)" but xT missing. Maybe quote "pass selection surface" etc. Could avoid.
[PAGE 17] "blocking_score = threatS’ - threatS". Good.
[PAGE 17] "A positive blocking score indicates that cover shadows are preventing some threat." Source: "A positive blocking score indicates that cover shadows are preventing some threat." Good.
[PAGE 18] "we refer to each of the considered areas as a polygon." Good.
[PAGE 19] "Hungarian algorithm". Good.
[PAGE 21] "the overall threat is reduced in 75% of the cases". Good.

Need maybe include equations in LaTeX with \frac etc. Need ensure not fake. Use units.

Let's craft final. Need maybe no intro outside sections. Start with <THINK_TRACE>.

Check word count roughly. THINK_TRACE ~650 words. SOURCE_OPERATORS ~1000 words. Others ~400 each. Total ~3000. Good.

Need avoid "total" in equations? Use "sum". In equations, maybe use \sum. Good.

Need avoid "total" word in "Total Passes" not quoting. Good.

Potential accidental banned words:
- "spread" in "dispersion"? Not use spread.
- "odds" no.
- "money" no.
- "bet" no.
- "totals" no.
- "total" no. Need scan final. In source quotes maybe "total" avoided. In phrase "offensive team's danger" okay. "aggregate". "overall" okay. "entire" okay. "sum". "cumulative" okay. "global" okay.

Need maybe mention "table"? It's okay, but maybe not. Avoid "table" if not needed.

Need maybe mention "statistical table"? okay.

Need ensure "Expected Threat (xT)" is okay. xT values probability. "threat" units dimensionless. "blocking score" units xT probability.

Let's formulate piecewise TTI:
Let d_eff = max(d-r_block,0) for defender, d for receiver? Source: defenders d_eff=max(d-r_block,0), attackers d_eff=d. Let v0 = max(0, v_p · e). t_react=0.7. t_acc = max(0,(vmax-v0)/a). d_acc = v0 t_acc + 0.5 a t_acc^2. Then:
TTI = t_react + 
if v0 >= vmax: d_eff/vmax
else if d_eff <= d_acc: (-v0 + sqrt(v0^2 + 2 a d_eff))/a
else: t_acc + (d_eff - d_acc)/vmax
This covers accelerate case and accelerate-then-cruise. Need if v0<0 set 0. If d_eff=0 TTI=t_react. Need mention if v0=vmax and d_eff small, cruising case. If a=0 breakdown (not allowed). If vmax=0 breakdown.

Ball equation: k=(σ C_d A)/(2m). T_ball = (e^{kd}-1)/(k v0). If k→0, T=d/v0. If kd large, T grows exponentially. Use exmp1 for numerical stability [PAGE 6]. Units: k m^-1, d m, v0 m s^-1, T s.

Probability logistic: s = sqrt(3) σ / π. Source says σ=0.20. If Δt in seconds, s seconds. P_int = 1/(1+exp(-Δt/s)). Δt = T_k - TTI_j. Control: P_ctrl=1-exp(-λ ΔT) ≈ λ ΔT for small ΔT, λ s^-1. Interval probability: P_j(T_k,T_k+ΔT_k) = (1 - Σ_l P_l(T_k)) P_int,j(T_k) λ ΔT_k. Then P_j = Σ_{k=1}^K ... Need note that sum over l includes all players? Source: subtract probability any player already intercepted by time T. It might include both teams. Good. P_blocked = Σ_{d∈D} P_d, P_received = Σ_{r∈R} P_r. If P_blocked > P_received line blocked. Any/Majority/All.

Threat: pitch grid 104x68 cells, coordinates (x,y) m. Voronoi r*(x,y)=argmin_r dist((x_r,y_r),(x,y)). threat(r|S)=Σ_{(x,y):r*=r} threat(x,y) pr(x,y). pr = P(D=(x,y)|S) P(o=success|D,S). P selection SoccerMap, success SoccerMap, xT. Weighted threat surface product. Blocking score = threat(S') - threat(S). Example values [PAGE 17] 0.041 and 0.031. Use no "total".

Optimization: dangerous attackers between ball and goal, xT only. Cones T(p_a,r_j). Polygons P = {∩_{r_j∈U} T(p_a,r_j): U⊆R', area>0}. G = argmax {Q⊆P, |Q|≤n_def} Σ_{r_j∈covered(Q)} xT_j. Cost c_{d,g} shortest distance. Minimize Σ_{d∈D} Σ_{g∈G} c_{d,g} x_{d,g}. Hungarian. Breakdown: if cones don't intersect, polygons are cones; if no defender can cover, infeasible; if n_def > attackers, multiple assignment; cost distance not time, ignores reaction.

Need maybe mention baseline equations: Line corridor, Cone, Gaussian. Could include but maybe not too much. Need formal. Include Gaussian blocking fraction from Appendix A maybe. Need not too long but good.

Need maybe discuss "singularity/breakdown regimes" in source operators. Good.

Now final writing. Need ensure no banned words. Let's draft carefully.

Check for "total" in draft: I might write "total" accidentally. Use find mentally.

Section THINK_TRACE:
"First, the paper asks..." Avoid total.
"the sum of threat" okay.
"aggregate". "overall" maybe okay.

Let's write:

<THINK_TRACE>
The source proposes a three-stage pipeline... etc.
Need >=400 words. Include derivation and gray-zone.

Potential phrase "total threat" avoid. Use "aggregate threat". "total offensive threat" avoid.

Need mention "blocking score is difference". Good.

Let's draft THINK_TRACE ~550 words:

The paper's causal chain: snapshot -> lanes -> TTI -> probabilities -> threat -> counterfactual. It tries to value invisible defense. The key multi-hop inference is not merely geometry but time competition. Ball time under drag, player time under acceleration, logistic arrival, control interval. Then threat weights by xT, pass choice, success. Counterfactual removes defenders and recomputes surfaces. Optimization assigns defenders to cones/polygons.

Gray-zone: blocked pass unobserved [PAGE 9]. Evaluation uses completed passes only, with 98.74% success [PAGE 10?]. This makes false positives costly. The metric can conflate team style, opponent shot avoidance, game state. Freeze frames not continuous; velocities inferred from next event [PAGE 8]. Man-marker radius [PAGE 4]. RQ3 uses geometric cones while RQ1 probabilistic; mismatch. Fixed constants: v0 proxy 12, reaction 0.7, acceleration 7, vmax 12, block radius 0.7. These are plausible but not player-specific. The logistic σ=0.20 is a calibration choice. Finite K leaves non-zero no-control mass [PAGE 9]. If P_blocked≈P_received, label unstable. Need mention.

Need maybe >400. Good.

SOURCE_OPERATORS: need formal. Could be long. Need include citations and quotes.

Let's compose in final. Need ensure XML tags exactly. Use line breaks.

Potential issue: LaTeX inside XML may include &? Avoid & except in align? Use simple equations. Could use aligned with & but XML? It's okay? Maybe avoid & by separate lines. Use \[ ... \]. In XML content, & might need escaping? Not necessary if not strict XML? But to be safe avoid & in LaTeX align. Use equations with commas.

Need no invalid characters? Fine.

Need cite [PAGE N] in text. Good.

Let's craft final now. Ensure no banned words. Use "aggregate" not total. Check "Expected Threat" maybe source quote includes "total"? No.

Need maybe mention "class imbalance" and "skewed". Good.

Let's write final in one go. Then scan for banned words: "total", "spread", "odds", "bet", "money", "line"? line okay. "totals". Also "straight-line" okay.

Potential accidental "spread" in "spatiotemporal"? It contains "spatial" not spread. "spread" no. "distribution" okay. "dispersion" okay.

Potential "money" in "monetary" no. Avoid.

Let's begin. 

Wait: In SOURCE_OPERATORS, quote [PAGE 6] "ignoring gravity and Magnus force while assuming a constant drag coefficient and a straight-line path". Contains "straight-line" okay.

Quote [PAGE 9] "we are left with a non-zero probability that no one controls the ball before the end of the cone." Good.

Need maybe quote [PAGE 10] "Both Lane Control Majority and All outperform the three baselines in terms of balanced accuracy (+ 11-15%) and macro F1 score (+ 0.17-0.20)." Good.

Potential word "balanced accuracy" okay.

Need maybe mention "false positive" no banned.

Now final. Ensure word count maybe ~3000. Let's produce.

</NATIVE_REASONING>

<THINK_TRACE>
The source proposes a multi-hop causal chain for valuing off-ball defense: a freeze-frame snapshot defines a set of potential passing corridors; each corridor is converted into a physics-based interception contest; the interception probabilities are then weighted by attacking danger; finally, a counterfactual removal of defenders creates a measure of cover-shadow value. The deepest inference is that defensive impact is not primarily geometric, but temporal and probabilistic. A defender does not “block” a pass by being near a line alone; the defender must be able to reach a set of points along that line before the ball or the intended receiver can control it. This is why the model moves from simple corridor and cone baselines to a time-to-intercept formulation. The paper’s central claim is that the probability of lane obstruction can be estimated by comparing ball travel time, defender arrival time, and receiver arrival time, with uncertainty introduced through a logistic transform and a control-rate process.

A rigorous reading exposes several gray zones. First, the event that the model is designed to detect is often unobserved. The paper states directly: “by definition, a blocked pass is an unobserved event” [PAGE 9]. This creates a fundamental validation problem: the model cannot be tested against an explicit label for a pass that was never attempted. The authors therefore evaluate on observed passes, using the logic that a lane predicted blocked should not yield many completed passes. This is a sensible proxy, but it makes the metric sensitive to selection bias. Progressive ground passes between midfield and the attacking penalty box are highly successful in the dataset, so false positives become the main error mode. The paper reports that Lane Control Majority and All reduce false positives relative to geometric baselines, and that “Both Lane Control Majority and All outperform the three baselines in terms of balanced accuracy (+ 11-15%) and macro F1 score (+ 0.17-0.20)” [PAGE 10]. Still, because the pass data are heavily skewed toward success, a model can appear conservative without being causally precise.

Second, the model relies on freeze frames rather than continuous tracking. StatsBomb 360 snapshots provide player positions around an event, but they do not provide player velocity. The paper infers velocity by examining the next event and dividing positional displacement by timestamp difference [PAGE 8]. This introduces a discrete-time approximation. A defender’s instantaneous acceleration, torso orientation, and intended movement direction are not directly observed. The model therefore uses a capped accelerate-then-cruise approximation with a fixed reaction delay, acceleration cap, and maximum speed. These assumptions are plausible, but they compress player-specific biomechanics into a small set of constants. The result is a model that can distinguish open and blocked lanes in a physically interpretable way, but its calibration is not player-specific unless additional tracking data are supplied.

Third, there is a mismatch between the probabilistic lane-control model used in RQ1 and the geometric cone model used in RQ3. In RQ1, lane blocking is probabilistic: the model computes time-to-intercept for defenders, attackers, and the ball across sampled points. In RQ3, optimization uses passing cones and polygon intersections to identify where defenders should be placed. This simplification is useful for tractability, but it reintroduces the static geometric assumptions that the paper criticizes earlier. The authors acknowledge that a player outside a cone can still influence a pass, and they report that after repositioning suggestions the aggregate threat is reduced in 75% of cases, while also noting that modeling repositioning only through basic geometric obstruction may be oversimplified [PAGE 21] [PAGE 22]. This is an important limitation: the optimization tells us where defenders could stand to cover a cone, but it does not fully account for reaction, velocity, interception radius, or the probabilistic nature of the ball’s arrival.

Fourth, the counterfactual threat calculation assumes that removing defenders and recomputing pass selection and pass success surfaces produces a meaningful “unblocked” state. This is a strong assumption. In a real match, if a defender is removed, the ball carrier’s behavior, teammate movements, and defensive rest shape may change. The model treats the snapshot as fixed except for defender removal, which is useful for attribution but not a full dynamic simulation. The blocking score is therefore a local counterfactual attribution, not a guarantee of what would happen over the next several seconds of play. This distinction matters when using the metric for player evaluation: a high blocking score may reflect a defender occupying a high-value lane in that snapshot, but it does not prove that the opponent would have attempted the pass if the defender were elsewhere.

The strongest scientific value of the paper is that it makes the invisible visible through explicit operators: ball drag, player acceleration, reaction delay, logistic arrival uncertainty, control intervals, expected threat, pass selection, pass success, and counterfactual threat reduction. The weakest inferential point is that the unobserved counterfactual cannot be directly verified without richer data. The model is therefore best treated as a measurement instrument with explicit assumptions, not as a causal oracle. Its outputs are useful when the assumptions hold, but they must be vetoed or widened when weather, fatigue, player-specific mechanics, or congestion violate the underlying physics.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper defines a passing lane as the segment between ball carrier and receiver. For ball carrier position \(p_a \in \mathbb{R}^2\) and receiver \(r_i \in \mathbb{R}^2\), the lane is

\[
L(p_a,r_i)=\{p_a+s(r_i-p_a):s\in[0,1]\}.
\]

The geometric baselines are simplified lane-obstruction tests. The Line Corridor model uses a rectangle of fixed width \(w=2\) meters around the segment:

\[
R_w(p_a,r_i)=\{x\in\mathbb{R}^2:\operatorname{perp\_dist}(x,L(p_a,r_i))<w/2\}.
\]

A lane is blocked if

\[
\exists d_j\in D:\ d_j\in R_w(p_a,r_i).
\]

The Cone Corridor model expands the corridor into a triangle with vertex at \(p_a\) and base near \(r_i\). If the cone width scales as \(w=k\|r_i-p_a\|\) with \(k=0.2\), then a 10 meter pass has a 2 meter terminal width. The Gaussian Cone model treats each defender as an isotropic Gaussian \(N(\mu_j,\Sigma_j)\), with \(\Sigma_j=\sigma^2 I\). The appendix gives the normalized blocking fraction

\[
F_\sigma=
\frac{
\operatorname{erf}\left(\frac{W(s^*)-u_j}{2\sigma}\right)
+
\operatorname{erf}\left(\frac{u_j}{2\sigma}\right)
}{
2\operatorname{erf}\left(\frac{W(s^*)}{2\sigma}\right)
},
\qquad F_\sigma\in[0,1],
\]

with \(\sigma=1\), \(\tau=0.5\) [PAGE 5] [PAGE 29] [PAGE 30]. These baselines are static; they do not model motion or timing.

The proposed Lane Control model introduces time-to-intercept. For the ball, the paper uses quadratic drag and states that the model is built by “ignoring gravity and Magnus force while assuming a constant drag coefficient and a straight-line path” [PAGE 6]. The drag parameter is

\[
k=\frac{\sigma_{air} C_d A}{2m},
\]

where \(\sigma_{air}\) has units \(\mathrm{kg/m^3}\), \(A\) has units \(\mathrm{m^2}\), \(m\) has units \(\mathrm{kg}\), so \(k\) has units \(\mathrm{m^{-1}}\). The ball travel time to distance \(d\) with initial speed \(v_0\) is

\[
T_{ball}(d)=\frac{e^{kd}-1}{k v_0}.
\]

Using the paper’s constants, \(\sigma_{air}=1.22\ \mathrm{kg/m^3}\), \(C_d=0.25\), \(A=0.038\ \mathrm{m^2}\), \(m=0.42\ \mathrm{kg}\), one obtains approximately

\[
k\approx \frac{1.22\times0.25\times0.038}{2\times0.42}
\approx 0.0138\ \mathrm{m^{-1}}.
\]

The units are consistent: \(kd\) is dimensionless, \(k v_0\) has units \(\mathrm{s^{-1}}\), and \(T_{ball}\) is in seconds. The paper uses an average ball speed proxy because initial pass speed is often unknown: “average ball speed of 12.0 m/s as a proxy” [PAGE 6]. For numerical stability when \(kd\) is small, the implementation uses a numerically stable exponential-minus-one routine [PAGE 6]. The limiting regime is important: as \(k\to 0\),

\[
T_{ball}(d)\to \frac{d}{v_0}.
\]

If \(kd\) becomes large, the exponential dominates and the predicted ball time grows rapidly. This is a breakdown regime for long passes or high drag estimates: small errors in \(k\) or \(v_0\) can produce large errors in \(T_{ball}\).

For players, the model uses a reaction delay followed by acceleration and optional cruising. Let \(r_p\) be the player position, \(v_p\) the inferred velocity, and \(e\) the unit vector from the post-reaction player position to target \(q_k\). The component of velocity toward the target is

\[
v_0=\max(0,v_p\cdot e).
\]

The reaction position is

\[
r_{react}=r_p+v_p t_{react},
\]

with \(t_{react}=0.7\ \mathrm{s}\) [PAGE 6] [PAGE 7]. The distance from that point to the target is

\[
d=\|q_k-r_{react}\|.
\]

Defenders need only reach within a block radius \(r_{block}=0.7\ \mathrm{m}\), so their effective distance is

\[
d_{def}=\max(d-r_{block},0),
\]

while receivers must reach the point itself, so \(d_{att}=d\). The acceleration phase duration is

\[
t_{acc}=\frac{v_{max}-v_0}{a},
\]

with \(a=7.0\ \mathrm{m/s^2}\) and \(v_{max}=12.0\ \mathrm{m/s}\) [PAGE 7]. The distance covered during acceleration is

\[
d_{acc}=v_0 t_{acc}+\frac{1}{2}a t_{acc}^2.
\]

From the verbal description of three cases on PAGE 7, the player time-to-intercept can be formalized as:

\[
TTI_p=t_{react}+
\begin{cases}
\dfrac{d_{eff}}{v_{max}}, & v_0\ge v_{max}, \\[1.2em]
\dfrac{-v_0+\sqrt{v_0^2+2ad_{eff}}}{a}, & v_0<v_{max}\ \text{and}\ d_{eff}\le d_{acc}, \\[1.2em]
t_{acc}+\dfrac{d_{eff}-d_{acc}}{v_{max}}, & v_0<v_{max}\ \text{and}\ d_{eff}>d_{acc}.
\end{cases}
\]

Here \(d_{eff}=d_{def}\) for defenders and \(d_{eff}=d\) for receivers. If \(d_{eff}=0\), the movement term vanishes and \(TTI_p=t_{react}\). If \(v_0\ge v_{max}\), acceleration is omitted, matching the cruising case. If the player reaches the target before reaching maximum speed, the acceleration branch applies. If the player accelerates to maximum speed and then continues, the accelerate-then-cruise branch applies. The model breaks down if \(a=0\) or \(v_{max}=0\), because division by zero occurs. It also assumes that the initial velocity component toward the target is sufficient to characterize approach; lateral motion, turning cost, and torso orientation are not explicitly modeled.

The probability conversion treats arrival as uncertain. For target point \(T_k\), define

\[
\Delta t = T_k-TTI_j.
\]

The interception probability for player \(j\) is a logistic CDF:

\[
P_{int,j}=
\frac{1}{1+\exp(-\Delta t/s)},
\qquad
s=\frac{\sqrt{3}\sigma}{\pi},
\]

with \(\sigma=0.20\) [PAGE 8]. If \(\Delta t\) is measured in seconds, \(s\) has units of seconds. The paper states that this component “accounts for variability that is not explicitly modeled in TTI calculation such as differing speeds, reaction time, or fatigue” [PAGE 8]. If the player arrives much earlier than the ball, \(\Delta t\ll 0\), so \(P_{int,j}\approx 1\). If the player arrives much later, \(P_{int,j}\approx 0\). The gray zone occurs when \(\Delta t\) is near zero; then \(P_{int,j}\approx 0.5\), and small changes in inferred velocity or ball speed can flip the lane classification.

Ball control is modeled as an exponential process with rate \(\lambda\approx 4.3\ \mathrm{s^{-1}}\):

\[
P_{ctrl}=1-\exp(-\lambda \Delta T)
\approx \lambda \Delta T
\]

for small \(\Delta T\), where \(\Delta T_k=T_k-T_{k-1}\) is the interval between consecutive target points. The probability that player \(j\) gains possession in interval \([T_k,T_k+\Delta T_k]\) is

\[
P_j(T_k,T_k+\Delta T_k)
=
\left(1-\sum_l P_l(T_k)\right)
P_{int,j}(T_k)\lambda \Delta T_k.
\]

The term \(1-\sum_l P_l(T_k)\) removes probability mass already assigned to earlier interceptions. Summing across the discretized lane gives

\[
P_j=
\sum_{k=1}^{K}
\left(1-\sum_l P_l(T_k)\right)
P_{int,j}(T_k)\lambda \Delta T_k.
\]

Defender possession probabilities are aggregated into \(P_{blocked}\), and attacker possession probabilities into \(P_{received}\). A single corridor line is blocked if

\[
P_{blocked}>P_{received}.
\]

The full lane can then be labeled blocked under Any, Majority, or All corridor rules [PAGE 9]. A major breakdown regime appears when \(P_{blocked}\approx P_{received}\). The label becomes unstable because the strict inequality can flip under small perturbations. Another regime appears because the numerical integration stops before \(t\to\infty\), so the paper notes that “we are left with a non-zero probability that no one controls the ball before the end of the cone” [PAGE 9]. Therefore, \(P_{blocked}+P_{received}\) need not sum to one.

The threat model begins with a grid over the pitch. The paper uses a \(104\times 68\) cell grid, with each cell described by coordinates \((x,y)\) in meters [PAGE 12]. A Voronoi assignment maps each cell to the closest attacker:

\[
r^*(x,y)=\arg\min_r \operatorname{dist}((x_r,y_r),(x,y)).
\]

The threat associated with receiver \(r\) in snapshot \(S\) is

\[
threat(r\mid S)=
\sum_{(x,y):r^*(x,y)=r}
threat(x,y)\cdot pr(x,y).
\]

The receive probability is

\[
pr(x,y)=
P(D=(x,y)\mid S)\cdot
P(O=success\mid D=(x,y),S),
\]

where the first factor is the probability that the next pass targets cell \((x,y)\), and the second is the probability that a pass to that cell succeeds [PAGE 12]. The positional threat term \(threat(x,y)\) is estimated using Expected Threat, \(xT\), where a cell value reflects “how often a possession from that area leads to a goal” [PAGE 13]. The pass selection and pass success surfaces are generated using SoccerMap [PAGE 13] [PAGE 14]. The weighted surface is the product of the \(xT\) surface, the pass selection surface, and the pass success surface [PAGE 14]. The blocking score is defined as

\[
blocking\_score = threat(S')-threat(S),
\]

where \(S'\) is the counterfactual scenario with cover-shadow defenders removed [PAGE 17]. The paper states: “A positive blocking score indicates that cover shadows are preventing some threat” [PAGE 17]. In the example, \(threat(S')=0.041\) and \(threat(S)=0.031\), giving a blocking score of \(0.010\) [PAGE 17]. The unit is the \(xT\) probability scale, so the score can be interpreted as expected-goal probability removed from the current possession chain under the counterfactual assumption.

The optimization stage defines dangerous attackers \(R'\subset R\) as attackers between the ball carrier and the goal, ranked by \(xT\) at their location. Passing cones \(T(p_a,r_j)\) are converted into candidate polygons. The set of candidate polygons is

\[
P=
\left\{
\bigcap_{r_j\in U}T(p_a,r_j):
U\subseteq R',
\operatorname{area}\left(\bigcap_{r_j\in U}T(p_a,r_j)\right)>0
\right\}.
\]

The best subset of polygons is

\[
G=\arg\max_{\{Q\subseteq P, |Q|\le n_{def}\}}
\sum_{r_j\in covered(Q)}xT_j.
\]

The assignment problem minimizes defender travel distance:

\[
\min \sum_{d\in D}\sum_{g\in G} c_{d,g}x_{d,g},
\]

where \(c_{d,g}\) is the shortest distance defender \(d\) must travel to occupy polygon \(g\), and \(x_{d,g}\in\{0,1\}\) indicates assignment. The paper solves this using the Hungarian algorithm [PAGE 19]. The optimization is tractable, but it is not a full dynamic model. It ignores reaction delay, player speed, acceleration, ball flight time, and probabilistic interception. It also assumes that occupying a polygon is sufficient to block a cone, even though the earlier Lane Control model shows that timing matters. The breakdown regime is clear: if defenders cannot reach the polygons before the ball arrives, geometric coverage may not produce actual obstruction.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage begins with the recognition that conventional soccer metrics underrepresent defense because most recorded actions involve the ball. The authors note that “These off-ball actions, often referred to as “cover shadows”, are crucial to a team’s defense but have received little analytical attention” [PAGE 1]. This creates a historical gap: event data can record tackles, interceptions, and clearances, but not the pass that was never attempted because a defender occupied the lane. The paper positions itself against expected disruption models, which mainly consider man-marking and attribute impact at the team level [PAGE 1]. The proposed contribution is to isolate lane-blocking defenders and value the removal of their shadows.

The scientific lineage runs through several layers. First, expected threat supplies the spatial value of possession: a cell is valuable if possessions from that cell often lead to goals [PAGE 13]. Second, SoccerMap supplies learned probability surfaces for pass selection and pass success [PAGE 13] [PAGE 14]. Third, pitch-control and physics-based pass models supply the temporal competition between ball, attackers, and defenders. The paper explicitly builds on Spearman’s ball-motion approach and Bekkers’ pressing intensity work, while extending the idea from a moving presser to a set of points along a passing corridor [PAGE 6] [PAGE 25]. Fourth, the optimization layer draws on assignment problems and the Hungarian algorithm to suggest minimal repositioning [PAGE 19].

The multi-week traps in this lineage are substantial. The first trap is unobserved counterfactuals. A cover shadow is valuable precisely when it prevents an action, so the data lack direct labels. The authors handle this by evaluating on observed passes, but that means the model is judged mostly by its ability not to contradict completed passes. This creates a conservative bias: a model that rarely predicts blockage will have fewer false positives, even if it misses many true shadows. The second trap is class imbalance. Progressive ground passes between midfield and the attacking box are highly successful in the dataset, so any classifier is dominated by open-lane examples. The paper reports that the pass completion ratio in this zone was 98% across the Big 5 European leagues [PAGE 10]. The third trap is freeze-frame sparsity. Snapshots occur at ball-related events, not continuously, so player motion between events must be inferred. The paper infers velocities from the next event [PAGE 8], but this cannot capture hesitation, feints, or abrupt changes of direction. The fourth trap is identity. StatsBomb 360 freeze frames do not provide player identity, so player-level analysis requires enrichment from tracking data, as in the Belgium-Portugal match [PAGE 2] [PAGE 3]. The fifth trap is style confounding. A team may have a high blocking score because opponents avoid certain zones, not because the defenders are unusually skilled. Conversely, a team may concede many dangerous passes but still apply effective shadows in other snapshots. The paper’s team-level ranking must therefore be interpreted as style-sensitive, not purely talent-revealing.

Another trap is the mismatch between evaluation and optimization. RQ1 uses probabilistic Lane Control, but RQ3 uses geometric cones and polygons. This creates a genealogical tension: the paper criticizes static geometry for ignoring motion, then uses static geometry to define repositioning targets. The authors acknowledge this when discussing why some repositionings do not reduce threat: “modeling our repositioning on basic geometric obstruction of passing cones might be an oversimplification” [PAGE 22]. The trap is that optimal geometric coverage may not be optimal temporal coverage. A defender standing in a cone but too slow, poorly oriented, or reacting late may not actually block the pass. The metric therefore needs to be read as a first-order planning tool, not a complete tactical simulator.

The final genealogical trap is temporal generalization. The \(xT\) values used are derived from a prior league-wide model and upscaled to the grid [PAGE 13]. Pass selection and pass success are trained on Big 5 leagues other than Serie A for evaluation, then applied to Serie A snapshots [PAGE 2] [PAGE 13]. This is methodologically careful, but it still assumes that the learned surfaces transfer across league styles, pressing schemes, and game states. A multi-week audit should therefore re-estimate the surfaces for each competition and verify calibration separately for early, middle, and late phases of matches.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive layer concerns how defenders, attackers, and analysts reason about each other’s intentions. The paper implicitly models a defender’s choice between man-marking and lane-blocking. Man-marking defenders are defined operationally as defenders within a 3 meter radius centered 1 meter behind an attacker [PAGE 4]. Lane-blocking defenders occupy space between the ball carrier and receivers. This distinction is not merely positional; it reflects belief about where the dangerous pass will go. If the defender believes the ball carrier will pass to a specific attacker, the defender shades that lane. If the ball carrier believes the defender will shade that lane, the ball carrier may delay, switch play, or use a third-man combination. The cover-shadow metric therefore depends on a recursive belief structure: the defender’s position is an inference about the attacker’s likely choice, and the attacker’s likely choice is shaped by the defender’s position.

A crisis habit regression occurs when a defender under pressure abandons lane control and reacts to the ball carrier with a simpler habit: step toward the ball, attempt a tackle, or clear the nearest danger. In the model, this would appear as a defender leaving the cone or moving outside the sampled corridor. If the defender’s velocity vector is not aligned with the lane, the model’s \(v_0=\max(0,v_p\cdot e)\) term may be small, increasing TTI and reducing block probability. In a crisis, the defender may also overreact to the ball carrier’s body orientation rather than the actual passing lane. The result can be a false sense of pressure: the defender appears close to the ball but is not positioned to intercept the pass. The model’s block radius and reaction delay partially capture this, but they do not capture panic-induced misorientation.

A counter-trap occurs when the defender intentionally invites a pass. For example, a defender may show the ball carrier one passing lane while leaving a less dangerous option open, then step across once the pass is committed. In the freeze-frame model, this is difficult to represent because the snapshot captures positions at a single moment. The defender may not yet be inside the cone, but the defender’s trajectory and intent may make the lane effectively closed. The model’s use of inferred velocity helps, but only if the next event reveals motion consistent with the trap. If the next event is a dribble or a pass elsewhere, the inferred velocity may not reflect the intended intercept. Thus, counter-traps are a known blind spot.

The clock layer appears in three forms. First, there is physical time: ball travel time, player reaction time, acceleration time, and control time. The paper’s parameters are explicit: \(t_{react}=0.7\ \mathrm{s}\), \(a=7.0\ \mathrm{m/s^2}\), \(v_{max}=12.0\ \mathrm{m/s}\), \(r_{block}=0.7\ \mathrm{m}\), and \(\lambda\approx4.3\ \mathrm{s^{-1}}\) [PAGE 6] [PAGE 7] [PAGE 8]. Second, there is match clock. Late in a match, fatigue, score state, and game management can change pass selection and defensive risk tolerance. The paper hypothesizes that fatigue may reduce optimal positioning, but it does not model this dynamically [PAGE 26]. Third, there is data clock: event timestamps determine inferred velocities. If event spacing is irregular, velocity estimates become noisy. A recursive theory of mind audit should therefore check whether block predictions are stable across event intervals.

The most important recursive prediction is that the metric should not be evaluated independently of opponent adaptation. If a defender consistently receives high blocking scores, opponents may learn to avoid that defender’s shadow, reducing future opportunities for the metric to register value. Conversely, if a defender is used as a decoy, the metric may understate value because the dangerous pass is never attempted. The correct use of the metric is therefore as a snapshot-level attribution tool, not as a permanent trait estimate. Player evaluation should aggregate across many game states and opponent styles, while controlling for game state, pass difficulty, and team shape.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical layer supports the model only inside its stated assumptions. The ball model assumes quadratic drag, constant drag coefficient, straight-line motion, and no gravity or Magnus force [PAGE 6]. These are reasonable for short ground passes, but they break down for curled passes, aerial balls, wet balls, strong wind, or variable spin. A veto condition is met when the observed pass is not a straight-line ground pass, because the ball-time operator no longer represents the physical trajectory. In such cases, the lane-control probability should be treated as invalid for precise classification, even if it remains useful as a coarse spatial prior.

A formal veto proof can be stated as follows. Suppose the true ball acceleration includes wind-relative velocity:

\[
m\ddot{x}=-
\frac{1}{2}\sigma_{air} C_d A
\|\dot{x}-w\|(\dot{x}-w),
\]

where \(w\) is wind velocity. The paper’s model uses \(w=0\). If the component of \(w\) along the pass is large enough that the predicted ball time error exceeds the logistic scale \(s\), then the interception probability is misordered. Since \(s=\sqrt{3}(0.20)/\pi\approx0.110\ \mathrm{s}\), a ball-time error greater than roughly \(0.1\) seconds can shift \(P_{int}\) substantially when \(\Delta t\) is near zero. Therefore, a practical veto rule is: if wind or air-density changes are expected to alter ball time by more than \(0.1\) seconds for a given pass, the model’s binary lane label should be suspended and replaced by a widened uncertainty band.

The biomechanical layer also supports veto conditions. The player model assumes fixed acceleration \(7.0\ \mathrm{m/s^2}\), fixed maximum speed \(12.0\ \mathrm{m/s}\), fixed reaction delay \(0.7\ \mathrm{s}\), and a fixed block radius \(0.7\ \mathrm{m}\) [PAGE 7]. These are population-level approximations. If a defender is fatigued, injured, turning sharply, or starting from a low-speed stance, actual acceleration may be lower. If a receiver is sprinting at maximum speed, the model’s velocity inference may be more reliable, but if the receiver is decelerating to check a run, the model may misestimate arrival time. A veto condition is met when player-specific kinematics differ materially from the fixed constants. For example, if tracked acceleration for a defender falls below \(5.0\ \mathrm{m/s^2}\) in a match segment, the model’s TTI for that defender is likely optimistic. The predicted block probability should then be reduced or discarded.

The tactical layer can also veto the optimization output. The RQ3 assignment problem minimizes distance, not time. It uses polygons and cones rather than the probabilistic Lane Control model. Therefore, if a suggested repositioning requires a defender to travel a short geometric distance but arrive after the ball has already passed the interception window, the suggestion is physically invalid. A veto proof follows: let \(T_{ball}\) be the ball time to the critical point and \(TTI_d\) be the defender’s time after repositioning. If the assignment minimizes \(\|x_{new}-x_d\|\) but does not enforce

\[
TTI_d \le T_{ball}-t_{react},
\]

then the defender may be geometrically inside the cone yet temporally unable to block. The model’s own earlier physics shows why this is possible: defenders need time to react and accelerate, and the ball may arrive first. Thus, optimization output should be accepted only if a post-hoc Lane Control check confirms that the repositioned defender improves \(P_{blocked}\) under the TTI model.

The weather and environmental veto is separate but related. Wet pitches can reduce acceleration and change ball rolling resistance. Strong wind can alter ball speed and curvature. Low visibility or crowd noise may increase reaction delay beyond \(0.7\ \mathrm{s}\). The paper’s model does not include these environmental covariates. Therefore, any cross-layer adjudication must treat the model as valid only under dry, still-air, straight-pass, population-average conditions. Outside those conditions, the metric can still identify spatial intent, but it cannot be used as a precise physical proof of obstruction.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The following three veto scenarios are verifiable with tracking data, calibrated physics, or controlled replay annotation. Each scenario provides a concrete prediction and a failure threshold.

1. High-wind straight-pass veto.
Condition: a set of progressive ground passes is annotated with measured wind along the pass direction. The wind component exceeds \(2.0\ \mathrm{m/s}\), or the pass is exposed for more than \(0.8\) seconds.
Prediction: Lane Control’s ball-time operator will overestimate interception probability because the true ball arrival time differs from the no-wind estimate. If the model predicts a lane is blocked with \(P_{blocked}>0.6\), the observed completion rate of passes through that lane should still be low under calm conditions. Under high wind, however, the completion rate should rise relative to calm matches if the wind slows or destabilizes the ball.
Veto rule: if the false-positive rate on predicted-blocked lanes increases by more than 5 percentage points relative to calm matches, the Lane Control label is vetoed for those snapshots.
Prediction in measurable form: for passes with wind component above \(2.0\ \mathrm{m/s}\), the calibration error of \(P_{blocked}\) should exceed \(0.10\) in expected calibration error, or the false-positive rate should exceed the calm-condition rate by more than \(0.05\).

2. Fatigue-induced acceleration veto.
Condition: tracking data show that defenders in the snapshot have reduced acceleration or maximum speed relative to their season baseline. A practical threshold is a decline of more than 8% in peak acceleration or more than 6% in high-speed running capacity during the match segment.
Prediction: the fixed constants \(a=7.0\ \mathrm{m/s^2}\) and \(v_{max}=12.0\ \mathrm{m/s}\) will make defenders appear faster than they are. Lane Control will therefore overestimate \(P_{blocked}\) for fatigued defenders. The model should perform well early in matches but deteriorate in late-match segments where fatigue is high.
Veto rule: if the observed block rate for fatigued defenders is lower than predicted by more than 10 percentage points in late-match snapshots, the model’s player-time operator is vetoed for those snapshots unless player-specific kinematics are supplied.
Prediction in measurable form: in the highest fatigue decile, the difference between predicted \(P_{blocked}\) and observed block rate should exceed \(0.10\). The paper’s own hypothesis that fatigue may degrade positioning supports this direction, but the current model does not estimate it dynamically [PAGE 26].

3. Congestion interference veto.
Condition: three or more defenders are within a small neighborhood of the same passing corridor, for example within 2 meters of one another near the target points. In such cases, defenders may obstruct each other, collide, or duplicate coverage. The model aggregates defender probabilities using a sequential subtraction term, but it does not model defender-defender interference.
Prediction: when congestion is high, the model may overstate block probability because it treats defender arrival probabilities as if they add without physical interference. The true block rate should be lower than the predicted aggregate when defenders are tightly clustered and their movement vectors conflict.
Veto rule: if at least two defenders are within \(1.5\) meters of the same target point and their inferred velocity vectors differ by more than 90 degrees, the model’s aggregate \(P_{blocked}\) should be discounted. If observed block rate is lower than predicted by more than 15 percentage points in such snapshots, the probabilistic aggregation is vetoed.
Prediction in measurable form: in high-congestion snapshots, the predicted \(P_{blocked}\) should be reduced by a congestion factor estimated from tracking. Without such a factor, the model should be treated as an upper bound rather than a calibrated probability.

These veto scenarios are not minor edge cases. They target the main physical and behavioral assumptions of the model: still air, population-average kinematics, and independent defender arrival. If any veto condition is triggered, the correct response is not to discard the paper entirely, but to downgrade the output from a calibrated probability to a qualitative spatial prior. The paper’s strongest claim is that cover shadows can be measured through explicit physics and counterfactual threat. Its most important limitation is that those physics require environmental and biomechanical validity. The metric should therefore be used with veto checks, especially when applied across matches with different weather, fatigue profiles, or tactical congestion.
</RLVR_COUNTERFACTUAL_VETOES>