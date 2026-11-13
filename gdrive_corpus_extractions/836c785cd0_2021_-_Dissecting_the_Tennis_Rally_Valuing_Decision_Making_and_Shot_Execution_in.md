---
source: "2021 - Dissecting the Tennis Rally Valuing Decision Making and Shot Execution in Tennis - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2021"
pages: 12
model: baidu/ernie-5.5-flash-preview:free
words: 8147
---

<NATIVE_REASONING>
We need answer user's request. Need produce final with XML sections, >=1000 words total? They require >=1,000-WORD DEPTH across exact XML sections. Need comply with strict invariants. User provided drive source and pages. Need probably analyze source, derive formal equations, cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need zero betting lines, no odds/spreads/totals/moneylines. Zero toy equations: no fake ratios. State formal LaTeX equations, units, assumptions, exact singularity/breakdown regimes. Need sections exactly:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>
Need at least 1000 words. Need likely discuss paper: Dissecting Tennis Rally: valuing decision making and shot execution. Need formalize models: xDW, xDR, xEW, xER, leverage, expected match win probability, Bayesian in-match update, ELO, Barnett-Clarke. Need no betting lines. Can mention sports betting? Source page 5 mentions applications media and sports betting, but strict invariant zero betting lines; can mention source says but not define lines? Better avoid. Need maybe state formal equations for neural network outputs as conditional probabilities:
xDW = P(Y_{t}^{hit}=1 | X_t^{hit}) maybe direct winner at hit.
xDR = P(R_{t}^{hit}=1 | X_t^{hit}) rally win after current shot.
xEW = P(Y_{bounce}=1 | X_{bounce}) direct winner after bounce.
xER = P(R_{bounce}=1 | X_{bounce}) rally win after bounce.
Need define input feature vector includes positions and velocities of players and ball. Units: positions in meters relative to court coordinate system, velocities m/s, angles rad, spin rad/s? Source says direction, speed, spin or target location can be changed. But input features: position, speed and angle of both players and ball. We can define coordinate system, SI. Need cite exact [PAGE 2], [PAGE 3]. Need exact quotes: [PAGE 2] "train four neural network models to disentangle decision-making and execution for each shot hit..." etc. Need cite page markers exact? Use [PAGE N] markers. Need verbatim quotes from source text. Use quotes where relevant. Need formal equations with assumptions and breakdown regimes. Need derive leverage:
Let M(s_t) be in-match win probability for player i at score state s_t. Leverage L_t = |M(s_t with point won) - M(s_t with point lost)|? Source says leverage as how much a point could influence match outcome, high pressure >5%. Need formal:
L_t = |p_i^{win match | score after i wins point} - p_i^{win match | score after i loses point}|. Units: dimensionless probability difference. Singularity/breakdown: when both resulting match probabilities are 1 or 0 (L=0), or when terminal score after point leads to deterministic outcome. Or when pre-match equal and early set, low. Need also expected match win probability after rally:
Let r_t = xER at final bounce? in-rally win probability. Let p^+ = match win prob if player wins point, p^- if loses point from current score. Expected match win probability using observed in-rally execution: E[M | rally] = r_t p^+ + (1-r_t) p^-. But source says weighting last observed in-rally win probability with resulting match win probabilities for positive and negative outcome. Page 9: "determine expected match win probability by weighting the last observed in-rally win probability with the resulting match win probabilities for a positive and negative outcome of the point." Good.
Need discuss Thiem rally point: scoreline 4:6, 6:4, 6:2, 3:6, 1:2, Advantage Thiem? Wait page 8: scoreline 4:6, 6:4, 6:2, 3:6, 1:2, Advantage Thiem, leverage 21.15%. Before point pre-rally match win percentage 19.27% (page 9). Point outcomes: (3) post-rally match win drops to 12.5% (-6.77%) but expected match win increased to 22.0% (+2.73%). Need formal decomposition. Need ensure arithmetic consistent? Let's derive: pre-rally match win p0 = 19.27%. If lost actual point, post-rally match win p^- = 12.5%? Difference -6.77 percentage points. If expected in-rally win q=44.9% (at last observed shot before lost point?) Then expected match win = q p^+ + (1-q) p^- = 22.0%. Solve p^+? q=0.449, p^-=0.125, E=0.220. 0.220 = 0.449 p^+ + 0.551*0.125 = 0.449 p^+ + 0.068875. p^+ = (0.220 - 0.068875)/0.449 = 0.3367? Let's calc: 0.151125/0.449 = 0.3366. So if Thiem wins point, match win becomes 33.66%. Leverage maybe 21.15% = |p^+ - p^-|? 0.3366 - 0.125 = 0.2116. Yes. Good. Could derive. Need note if final point was lost, observed match win p^-=12.5; model-based expected p=22.0, so counterfactual outperformance +9.5 percentage points relative to realized? Source says incorporating in-rally win percentage, expected match win increased to 22.0% (+2.73%). It's increase relative to pre-rally 19.27: +2.73 pp. Also relative to realized loss +9.5 pp. Need careful. Need no betting lines. Can discuss "sports betting" maybe avoid.

Need include THINK_TRACE >=400 words? The section says >=400 words for THINK_TRACE. Overall >=1000 words. Need ensure all sections exact. Could make THINK_TRACE ~500-600 words, other sections 200-300 each. Need no non-XML outside? Probably only XML. Need final only XML sections. Need ensure words. Need maybe include equations in LaTeX. Need formal. Need source citations. Need exact page markers and quotes. Could cite [PAGE 2] etc.

Need think about invariants: ZERO BETTING LINES: never mention spreads, totals, moneylines, or odds. Avoid words? "sports betting" is in source but if mention maybe not line? Better not mention betting at all. ZERO TOY EQUATIONS: no fake ratios. Use formal probability models. Need state assumptions and exact singularity/breakdown regimes. In equations, include assumptions and breakdown. Need maybe not invent "Force / Fatigue". OK.

Need maybe discuss cross-layer veto: physical/biomechanical/weather veto proof. Need use source? Hawk-Eye tracking. Need maybe formalize physical constraints: court dimensions, ball bounce inside/outside, kinematic limits, weather not in source? Need veto proof for interpretations? Could say if venue indoor AO, weather not direct, but temperature/humidity affect ball speed; no explicit weather feature in model, so any causal claim about weather is vetoed unless data include. Need physical veto: shot execution value after bounce cannot exceed physical possibility; if model predicts winner where bounce outside court, veto. Biomechanical veto: players positions/velocities at shot constrain shot options; if decision value assigned to impossible direction due to angle, veto. Need include exact breakdown regimes.

Need retro-causal genealogy: lineage from Morris 1977 important points [PAGE 11], Barnett-Clarke [PAGE 11], Kovalchik & Reid [PAGE 11], Decroos [PAGE 2], Cervone pointwise [PAGE 10], tennis shot prediction [PAGE 10]. Multi-week traps: confusing immediate winner with rally value; assuming decision = execution; using uncalibrated point probability for leverage; overfitting tracking features; not separating serve/return/rally; distribution shift from tournament to pressure; ignoring bounces. Need maybe mention retro-causal? Historical lineage and traps.

Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Need discuss Thiem under pressure, decision vs execution. Recursive modeling: player's shot choice based on opponent's expected response; leverage induces pressure. In fifth set, execution dropped forehand while decision moderately dropped; habit regression to aggressive forehand under pressure? Need counter-trap: not infer choke solely from outcome; use xER expected win probability. Clock: score state, time between shots, point importance; high leverage >5% and point 21.15. Need maybe define dynamic game.

Cross-layer veto adjudication: Need physical/biomechanical/weather veto proof. Formal proof? Maybe list veto conditions:
1) Physical feasibility veto: If input feature vector has player positions outside court or velocities beyond observed domain, reject inference.
2) Execution consistency veto: If xEW/xER predicts direct winner but bounce coordinate outside valid region, contradiction. Because execution evaluated at bounce, direct winner requires valid bounce or out-of-reach. Need equations.
3) Biomechanical veto: If shot angle/speed requires player displacement > human acceleration under assumed time, veto. Use kinematics: d = v0 t + 0.5 a t^2; if required displacement > feasible from positions.
4) Weather/environment veto: Indoor AO 2020; no weather feature. If claims about wind/humidity not in model, veto. If external environmental data not included, cannot adjudicate. Could say breakdown if weather covariates omitted.

RLVR counterfactual vetoes: Need 3 verifiable RLVR veto scenarios + predictions. RLVR? Reinforcement learning from verifiable rewards? Need create three scenarios where a claimed improvement in decision quality would be vetoed by measurable counterfactuals. Need predictions. Examples:
1) If decision model improvement predicts higher xDR but execution xER unchanged and actual bounce distribution invalid/lower, veto. Prediction: no increase in expected match win under equation; or AUC improves but expected rally points not.
2) If leverage calibration changes such that high-pressure set performance attributed to execution drop but decision values unchanged and pre-rally match probability trajectory inconsistent with scoreline, veto. Prediction: recalibration will shift leverage and reduce inferred choke effect.
3) If a proposed tactical shift (more backhand slice center) increases decision value but tracking shows lower ball speed/time to opponent, physical constraints make opponent reply easier; veto. Prediction: model should lower xER due to bounce position/speed if input includes speed/angle. Need verifiable: using test set of 12,000 hits/11,000 bounces [PAGE 3]. Predictions: out-of-sample AUC/accuracy, calibration. Need mention exact metrics. RLVR maybe reward model? Need formal reward: R = expected match win or rally value; counterfactual veto if observed outcome differs from expected beyond calibrated uncertainty? Need maybe define threshold? But no toy. We can define likelihood ratio. Need three scenarios.

Need ensure no betting lines. Avoid odds. Could mention "win probability" not betting. OK.

Need final word count. Let's draft with XML tags. Need maybe no markdown? XML-like sections. Could include LaTeX inside. Need exact XML sections. Ensure no extra commentary. Need count roughly. We'll write long.

Potential structure:

<THINK_TRACE>
Long multi-hop derivation. Discuss source claims, disentangle decision/execution. Derive variables. Formalize NN outputs. Include leverage and point rally integration. Audit gray zones: source doesn't provide full feature vector, training details, uncertainty intervals, court coordinate system, exact calibration. Need not invent. Mention limitations. At least 400 words. Let's target 550.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal equations:
Court coordinate: x∈[0,10.97]? Tennis court dimensions: length 23.77 m, width singles 8.23, doubles 10.97. Need SI. Use positions p_t = (x,y,z) m; velocity v_t m/s; angle θ rad; spin maybe rad/s but not input? Source says spin as shot selection but input features include position speed angle. Could include if available but not formal. Need units.

Define shot event at time t_h: hit. Bounce event at t_b. Feature maps:
Z_h = [p_i,h, v_i,h, θ_i,h, p_j,h, v_j,h, θ_j,h, p_b,h, v_b,h, θ_b,h, c_t]
Z_b = same at bounce.
Then four binary probabilities:
xDW(Z_h) = P(Y_{h,t}=1 | Z_h) etc.
Where Y=1 if shot immediately wins point? Need direct winner. For serve maybe ace? Source says direct winner. Could define.
Rally win target: whether player will win rally at some point after current shot. Need clarify if after current shot but excluding immediate? Source says after subsequent shots. Define event R_t=1 if player eventually wins rally. 
Loss: binary cross-entropy:
L = -1/N Σ [y log p + (1-y) log(1-p)]. Units nats per event. Could mention AUC/accuracy.
Model evaluation table quote: [PAGE 3] "xDW ... 73% ...". Need cite.
In-match win probability:
ELO with surface and opponent adjustments. Pre-match p_pre. Calibration to serve/return probabilities: solve for p_s^1, p_r^1 such that Barnett-Clarke match probability at first point equals calibrated p_pre. Need equations: p_pre = F(p_s, p_r) maybe. Could write p_cal = B(p_s^{cal}, p_r^{cal}) = p_pre. 
Bayesian update: observed serve points won w_s, played n_s. Use beta posterior: θ_s ~ Beta(α_s, β_s), α_s=α_0 + w_s, β_s=β_0 + n_s - w_s. Posterior mean = (α_s)/(α_s+β_s). But source says observed serve probabilities based on observed serve points won/played. Need maybe not exact formula but formal. Use p_s^{in} = (w_s + κ p_s^{prior})/(n_s + κ) as Bayesian shrink. Units probability. Assumption exchangeable serves. Breakdown if n_s=0 and κ=0 (undefined); if all serves won/lost and prior weak (zero/one boundaries). Need exact.
Barnett-Clarke model: match win probability M(s_t; θ_s, θ_r) with game/set/point Markov chain. Need not fully specify but can define. Use recursive equations? Could state:
M(s)=P_i win game * [1 + ...]? Might be too much. But formal enough: M(s; θ) = Σ_{a∈{win,loss}} P(a | s, θ) M(s_a; θ), with terminal M=1 if won, 0 if lost. Units dimensionless. This is generic. Need avoid invented? It's standard. Barnett-Clarke [PAGE 4, 11]. Could mention high-level. 
Leverage:
L_t = |M(s_t^{win}) - M(s_t^{loss})|. Units probability points. Source defines low <5% high >5% [PAGE 7]. Need cite. 
Expected match value of rally:
q_t = xER at last bounce (or last observed shot) [PAGE 9]. E[M_t] = q_t M(s_t^{win}) + (1-q_t) M(s_t^{loss}).
Example numeric from source: scoreline ... leverage 21.15%, pre-rally 19.27%, lost point post-rally 12.5%, expected 22.0%. Need derive: q=0.449, p^-=0.125, p^+=0.3366. Need cite pages. Need note arithmetic exact based on reported values.

Breakdown regimes: 
- if M(s^win)=M(s^loss), leverage 0; no pressure info.
- if terminal after point, M in {0,1}, leverage max? Actually if point ends match, difference maybe 1. Need if pre-match? 
- If q at boundary 0/1, expected match collapses to realized outcome. 
- Neural network outputs uncalibrated outside training distribution (new surface, indoor/outdoor, injury) may misrepresent. 
- If tracking missing, bounce invalid. 

Need include exact quote [PAGE 2]: "multiple decisions precede every shot..." maybe. [PAGE 3]: "We train four Neural Networks on 107,000 hits and 98,000 bounces" etc. [PAGE 4] four step. [PAGE 7] leverage 5%. [PAGE 8] leverage 21.15. [PAGE 9] expected match win. Need not quote all.

RETROCAUSAL_GENEALOGY:
Historical lineage: Morris 1977 important points [PAGE 11]. Barnett-Clarke [PAGE 4, 11]. Kovalchik & Reid calibration [PAGE 4, 11]. Decroos et al. valuing actions in soccer [PAGE 2, 10]. Cervone NBA POINTWISE [PAGE 10]. Tennis shot prediction [PAGE 10]. Transfer from event data to tracking. Multi-week traps: (1) treating winners as only value; (2) conflating decision and execution; (3) ignoring score importance; (4) assuming stable ELO/serve probabilities within match; (5) using rally outcomes to infer pressure without separating shot quality; (6) using tournament average baselines when match context differs; (7) not validating on test set. Need perhaps retro-causal means feedback loops: score affects pressure, pressure affects execution, execution affects score. Need mention. 

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression vs counter-trap vs clock. Recursive ToM: player models opponent, self, pressure. In high leverage, predicted behavior may regress to dominant weapon (forehand) but execution may degrade due to arousal/attention. Counter-trap: outcome-based inference (lost point = choke) is wrong; model says expected match win increased. Clock: time/score state changes options. Define recursive equation? Could formalize: decision at time t depends on estimated opponent response distribution:
a_t^* = argmax_a E_{o_{t+1}}[U(a,o) | I_t, θ_opponent]. But U from xER. Under pressure λ_t = f(L_t). Could say arousal modifies execution distribution, not decision distribution. Use source: decision values stayed same level backhand, dropped moderately; forehand execution sharp drop [PAGE 7]. Need quote. The crisis habit regression: Thiem tries forehand because it's habit/dominant; counter-trap is not assuming drop due to lack of will; clock: point 21.15 leverage, before rally 19.27, expected 22.0. Need recursive mentalization: Djokovic serve improved, Thiem return dropped [PAGE 7]. Need mention. 

CROSS_LAYER_VETO_ADJUDICATION:
Need physical/biomechanical/weather veto proof. Maybe present as theorem-like.
Physical layer: Court coordinates. A shot is valid if bounce within court or if unreturned leads to point. For execution values, if xEW predicts winner but bounce is outside valid court and not an ace/service let? Actually if bounce outside, it's error not winner. So veto if classification inconsistent. Equation: I_winner = 1 if (x_b,y_b) ∈ C and opponent cannot reach before bounce time. C = singles court rectangle [0,10.97]? Need coordinate. Use z for net? 
Time-to-bounce: t_b = sqrt(2h/g) approx if vertical? But tracking data gives. Could use kinematic reach: opponent distance d_opp, speed v_opp, reaction time τ. If d_opp/v_opp + τ < t_b? Then not winner? Need formal. 
Biomechanical: shot from p_i,h with velocity v_i,h; required opponent movement Δp = p_b - p_opp. Feasible if ||Δp|| ≤ v_opp max (t_b - t_h - τ) + margin. If predicted winner requires beyond, veto. Breakdown: missing velocities, occlusions, low frame rate. 
Weather/environment: AO indoor/outdoor? 2020 AO had roof? Rod Laver Arena roof closed maybe? But source doesn't mention. Need not assert? Could say if weather covariate omitted, no adjudication. If external claim uses wind/humidity, veto unless model includes environmental feature. Breakdown: model trained only on tracking features [PAGE 3], no environmental variables; cannot attribute weather. Need exact.
Also model layer veto: if NN AUC not significant on test set, veto. Test set 12,000 hits, 11,000 bounces [PAGE 3].

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR veto scenarios + predictions. Let's define RLVR reward: R_t = E[M_t] = q_t p^+ + (1-q_t) p^-; verifiable with tracking and score. Veto if counterfactual claim increases R but observable constraints contradict.
Scenario 1: Claim: "Training a new decision model raises xDR by 0.05 and improves tournament value." Veto if test-set xDR AUC does not exceed 65% [PAGE 3] or calibration error high. Prediction: On holdout 12,000 hits/11,000 bounces, AUC < 0.66 and no significant mean E[M] increase. Need verifiable.
Scenario 2: Claim: "Thiem's fifth-set forehand collapse is caused by decision-making collapse." Veto if decision values only moderately drop while execution drops sharply [PAGE 7]; if recalculated xDR at hit times remains within confidence interval, but xER at bounce is outside. Prediction: Using hit-time features, decision drop < execution drop; expected match win using hit-time q remains near pre-set level; using bounce q shows decline. Verifiable with figure data? Need source. 
Scenario 3: Claim: "Changing tactic to more backhand slice center improves high-leverage point win probability." Veto if tracking shows lower ball speed/angle yields longer time for opponent and bounce not forcing out of court; physical feasibility. Prediction: Simulated counterfactual with same positions but modified bounce increases opponent reach time, xER decreases or unchanged; on observed similar slice events, rally win probability ≤ baseline. Need verifiable using tracking features and model.
Could also include scoreboard pressure scenario: leverage calibration. If claim uses actual point outcome to infer quality, veto because expected match win increased despite lost point [PAGE 9-10]. Prediction: leverage remains 21.15, pre-rally 19.27, expected 22.0. 
Need three scenarios. Include exact predictions maybe thresholds. Need avoid betting. 

Need overall word count. Let's draft with long paragraphs. Need ensure THINK_TRACE >=400 words. Let's estimate: THINK_TRACE 500, SOURCE 500, RETRO 250, ToM 250, CROSS 300, RLVR 350 => 2150 words. Good. Need maybe final no extra. Need include citations [PAGE N] with exact quotes. Need ensure exact XML tags. No unclosed tags. 

Let's craft carefully.

Potential issue: The user says ">= 1,000-WORD DEPTH across these exact XML sections:" They list exact sections. Need not include additional sections. OK.

Need ensure no "odds" word. Search final for betting lines words: spreads, totals, moneylines, odds. Avoid. Also avoid "betting". Source page 5 mentions sports betting but we don't need quote. Avoid.

Need formal LaTeX. Use equations. Need not use fake toy ratios. Could include likelihood, BCE, leverage, expected match. OK.

Need exact quotes: Use verbatim from source. Let's collect exact quotes:
[PAGE 1] "multiple decisions precede every shot that is hit in professional tennis matches and the use of tracking data to decouple and inferentially examine the quality of decision-making by players remains overlooked."
[PAGE 2] "We train four neural network models to disentangle decision-making and execution for each shot hit at Australian Open 2020" exact. Also "there is a problem with this approach as most tennis players do not hit every shot with the intention of it being a winner but rather to gain small advantages throughout a rally which add up in the battle for time and space – thus oversimplifing a player’s shot selection process and undervalueing strategic play." Need maybe quote. 
[PAGE 3] "We train four Neural Networks on 107,000 hits and 98,000 bounces" and "This refers to the training set, we use a test set of 12,000 hits and 11,000 bounces played in the tournament." Also table quote? Could quote model outputs. 
[PAGE 4] "we define leverage as how much a point could influence the match outcome." Four step. 
[PAGE 7] "by applying the concept of leverage to quantify low (less than 5%) and high (more than 5%) scoreboard pressure situations". Also "The quality of Thiem’s ball striking in rally play fell away, with a sharp drop in forehand execution." and "If we look at Thiem’s decision values we observe that they stayed on the same level for his backhand and only dropped moderately compared to the drop in his forehand execution."
[PAGE 8] "We use the scoreline 4:6, 6:4, 6:2, 3:6, 1:2, Advantage Thiem to do this very thing. Here, the leverage is 21.15%."
[PAGE 9] "Before the point, Thiem has a pre-rally match win percentage of 19.27%." "Thiem attempts a passing shot down-the-line but hits it wide." "incorporating his in-rally win percentage, his expected match win percentage actually increased to 22.0% (+ 2.73%)." Need page 10 for actual increase? The text spans page 9-10. Quote page 10: "Thiem loses the point but before taking the shot he should expect to win it 44.9% of the time. His post-rally win probability of the match drops to 12.5% (- 6.77%) but incorporating his in-rally win percentage, his expected match win percentage actually increased to 22.0% (+ 2.73%)." It starts page 10? Source shows PAGE 9 ends with "his expected match" and PAGE 10 continues "win percentage actually increased...". We can cite [PAGE 9] and [PAGE 10] for full. Use [PAGE 9] "Thiem loses the point but before taking the shot he should expect to win it 44.9% of the time." maybe page 9? Actually text: PAGE 9: "(3) The outcome does not reflect what happened in the rally. Thiem loses the point but before taking the shot he should expect to win it 44.9% of the time. His post-rally win probability of the match drops to 12.5% (- 6.77%) but incorporating his in-rally win percentage, his expected match" PAGE 10: "win percentage actually increased to 22.0% (+ 2.73%). This shows that Thiem played this important point well but this is not visible on the scoreboard." Good.

Need formal definitions: For direct winner target: maybe if hit results in point ending without opponent legal return. For rally win target: eventual point win after subsequent shots. Need note source says "immediately (i.e., with that shot) or later within the rally (i.e., after subsequent shots)" [PAGE 1]. Good.

Need source operators and equations section: Could include subheadings? Fine.

Need no fake equations. Use probability notation.

Let's draft final. Ensure word count. I'll compose now.

Check for prohibited words: "odds" not. "betting" not. "spread" maybe not. "totals" maybe not. "moneyline" no. Could mention "pressure" not. OK.

Need maybe mention "sports betting" avoided. Good.

Let's write THINK_TRACE:
Need >=400 words. I'll write ~520 words. Count roughly: 500. Let's draft in final.

Need ensure exact XML tags. The content inside can have line breaks. OK.

Potential issue: XML sections may be parsed? Use plain. No CDATA. OK.

Let's produce final with all sections. Ensure >=1000 words. The final will be long. Need not include code. Use LaTeX. 

Double-check equations:
Define 
\mathcal{H}_t: hit event; \mathcal{B}_t bounce event.
Z_t^h ∈ R^d. The exact d unknown. Could say d includes player/ball positions, velocities, angles, shot class. Units: positions m, velocities m s^-1, angles rad. 
Y_{t}^{DW}=1 if player i's shot at t wins point immediately. R_t=1 if player i wins rally at any point after current event. For execution at bounce, same at bounce.
Models:
\hat p_{xDW}(Z_h) = Pr(Y^{DW}=1|Z_h), etc.
Training loss:
\ell = -\sum [y log \hat p + ...]. 
AUC, accuracy. 
In-match:
M_i(s) = Pr(i wins match | score s, θ). 
Pre-match p_i^0 = σ(ELO_i^s - ELO_j^s + ...)? Could use logistic but ELO. Need not invent? ELO rating difference maps to win probability via logistic. Formal:
p_i^{pre}=1/(1+10^{-(R_i^{surf}-R_j^{surf})/400}) maybe standard. But source says calculate ELO adjust. Could include as assumed. Is that toy? It's standard. Need state assumption. But maybe avoid too specific? Could include: p_pre = Φ(R_i - R_j) or logistic. Need formal. It's okay. 
Calibration:
Find (p_s,p_r) such that M_1(p_s,p_r)=p_pre.
Bayesian update:
p_s^{post}= (w_s + κ p_s^{prior})/(n_s+κ). Need note κ prior strength. 
Leverage L_t=|M_i(s_t^+)-M_i(s_t^-)|.
Pressure threshold: low L<0.05, high L>0.05 [PAGE 7].
Expected match:
E[M_t] = q_t M_i(s_t^+) + (1-q_t) M_i(s_t^-). q_t = last observed xER or model. 
For example: q=0.449, M^- =0.125, L=0.2115 -> M^+ = M^- + L = 0.3365; E = 0.449*0.3365 + 0.551*0.125 = 0.2198. Good. Need maybe use exact: p^+ = 0.3365. This is derived from reported. 

Need mention model evaluation table: xDW AUC 73%, accuracy 81%; xDR 65/59; xEW 78/84; xER 71/63 [PAGE 3]. Could cite.

Need breakdown:
- If Z_t outside convex hull/training distribution, outputs unreliable.
- If score state terminal, leverage undefined? Actually M terminal 0/1. 
- If q observed at boundary, no counterfactual separation.
- If missing bounce (net/out), execution undefined.
- If environmental confounders omitted. 

OK.

RETROCAUSAL: mention multi-week traps. Need maybe "retro-causal genealogy" as feedback: historical methods cause current interpretations. Good.

RECURSIVE: Need include crisis habit regression, counter-trap, clock. Good.

CROSS_LAYER: Need physical/biomechanical/weather veto proof. Could present "Veto proof" in prose.

RLVR: Need 3 verifiable scenarios. Use bullets maybe. Good.

Let's ensure no "odds" appears in source quote? We won't quote page 5. Good.

Now final.
</NATIVE_REASONING>

<THINK_TRACE>
The central inference chain in the source is not “who hit a better shot?” but “what did the player choose to do, and how well did the executed shot alter the future state distribution?” That distinction matters because the paper explicitly criticizes winner-only evaluation: [PAGE 2] “there is a problem with this approach as most tennis players do not hit every shot with the intention of it being a winner but rather to gain small advantages throughout a rally which add up in the battle for time and space – thus oversimplifing a player’s shot selection process and undervalueing strategic play.” The correct object is therefore a causal separation between decision and execution. Decision is anchored at the instant the ball leaves the racket, because that is the last moment at which the player can choose direction, speed, spin, or target location. Execution is anchored at the opponent’s-court bounce, because the bounce reveals the realized physical consequence of that decision. This is formalized by the source’s four models: xDW, xDR, xEW, and xER, abbreviating “expected decision and execution values for hitting a direct winner and winning the rally” [PAGE 3].

To derive the equations rigorously, we must first define state variables and units. Let a player’s shot decision occur at time t_h. Let the tracking vector at hit be Z_h. The source says input features include “position, speed and angle of both players and the ball at the time of the hit and bounce” and also “classifications that label a shot as a serve, return or rally shot” [PAGE 3]. Therefore Z_h belongs to a mixed continuous-categorical space. In SI units, positions can be represented in meters, velocities in meters per second, angles in radians, and shot class as a categorical indicator. The bounce event at time t_b has analogous tracking vector Z_b. The key epistemic move is that the decision model evaluates the causal contribution of the pre-shot choice, while the execution model evaluates the causal contribution of the realized ball trajectory after that choice.

The paper’s empirical evaluation makes the modeling target clear. The models predict either an immediate direct winner or eventual rally victory. Training used “107,000 hits and 98,000 bounces,” with a separate test set of “12,000 hits and 11,000 bounces” [PAGE 3]. The reported evaluation is modest but coherent: xDW AUC 73%, accuracy 81%; xDR AUC 65%, accuracy 59%; xEW AUC 78%, accuracy 84%; xER AUC 71%, accuracy 63% [PAGE 3]. This asymmetry is expected because decision-time prediction is intrinsically harder: the opponent can still respond. The source says, “Decision accuracy is lower than execution accuracy as it is tougher to predict the immediate or rally winner at the time of hitting the ball compared to the time the ball bounces” [PAGE 3]. The correct formal interpretation is not that decision models are bad, but that they estimate a broader counterfactual distribution over future shots, whereas execution models condition on one realized bounce.

The second inference layer is leverage. The source defines leverage as “how much a point could influence the match outcome” [PAGE 4]. Formally, if M_i(s) is the in-match win probability for player i at score state s, then a point that can move the match from s to either s^+ or s^- has leverage L = |M_i(s^+) - M_i(s^-)|. The paper then uses a threshold: “low (less than 5%) and high (more than 5%) scoreboard pressure situations” [PAGE 7]. This allows pressure to be score-state-dependent rather than merely point-count-dependent. The final integration is the expected match-win value of a rally: if q is the model-based in-rally win probability at the last observed execution event, and p^+ and p^- are the match-win probabilities conditional on winning or losing that point, then expected match win is E[M] = q p^+ + (1-q)p^-. The source applies exactly this logic to a critical fifth-set rally: “the leverage is 21.15%” [PAGE 8], “Before the point, Thiem has a pre-rally match win percentage of 19.27%” [PAGE 9], and “incorporating his in-rally win percentage, his expected match win percentage actually increased to 22.0% (+ 2.73%)” [PAGE 10].

Gray-zone audit: the source does not publish the full feature list, neural architecture, calibration curves, or uncertainty intervals for the four models beyond tournament-round confidence intervals for Thiem’s execution values [PAGE 6]. Therefore, any claim about microscopic causal mechanisms of pressure must be constrained to the model’s observed variables. The source also does not provide an explicit environmental covariate set; hence weather or arena conditions cannot be adjudicated directly from the model unless such variables were added. The strongest valid conclusion is structural: the paper separates decision from execution, embeds execution in leverage, and converts rally-level quality into expected match value. The weakest overreach would be to infer “mental collapse” solely from a lost point, because the source itself shows the opposite can occur: Thiem lost the point but “before taking the shot he should expect to win it 44.9% of the time” [PAGE 9], and his expected match win increased despite the realized loss [PAGE 10].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(t_h\) denote the hit instant and \(t_b\) the opponent-court bounce instant. Define player \(i\)’s shot decision feature vector as
\[
Z_{t_h}^{(i)} = \big(p_{i,t_h}, v_{i,t_h}, \theta_{i,t_h};\, p_{-i,t_h}, v_{-i,t_h}, \theta_{-i,t_h};\, p_{b,t_h}, v_{b,t_h}, \theta_{b,t_h};\, c_{t_h}\big),
\]
where \(p\in\mathbb{R}^3\) is position in meters, \(v\in\mathbb{R}^3\) is velocity in meters per second, \(\theta\) denotes direction/angle in radians, and \(c_{t_h}\in\{\text{serve},\text{return},\text{rally shot}\}\) is the categorical shot class. The source states the models use “position, speed and angle of both players and the ball at the time of the hit and bounce” plus serve/return/rally classifications [PAGE 3].

Define binary targets:
\[
Y_{t_h}^{\mathrm{DW}} =
\begin{cases}
1, & \text{if player } i \text{ wins the point directly with the shot at } t_h,\\
0, & \text{otherwise,}
\end{cases}
\]
\[
Y_{t_h}^{\mathrm{DR}} =
\begin{cases}
1, & \text{if player } i \text{ eventually wins the rally after the shot at } t_h,\\
0, & \text{otherwise.}
\end{cases}
\]
The corresponding decision-value operators are conditional probabilities:
\[
\mathrm{xDW}(Z_{t_h}^{(i)}) = \Pr(Y_{t_h}^{\mathrm{DW}}=1\mid Z_{t_h}^{(i)}),
\]
\[
\mathrm{xDR}(Z_{t_h}^{(i)}) = \Pr(Y_{t_h}^{\mathrm{DR}}=1\mid Z_{t_h}^{(i)}).
\]
At the bounce, define analogous targets \(Y_{t_b}^{\mathrm{EW}}\) and \(Y_{t_b}^{\mathrm{ER}}\), with execution operators
\[
\mathrm{xEW}(Z_{t_b}^{(i)}) = \Pr(Y_{t_b}^{\mathrm{EW}}=1\mid Z_{t_b}^{(i)}),
\]
\[
\mathrm{xER}(Z_{t_b}^{(i)}) = \Pr(Y_{t_b}^{\mathrm{ER}}=1\mid Z_{t_b}^{(i)}).
\]
These are the four outputs named in the source: “xDW, xDR, xEW and xER for the expected decision and execution values for hitting a direct winner and winning the rally” [PAGE 3].

Assume supervised binary training with cross-entropy loss:
\[
\mathcal{L}(\phi) = -\frac{1}{N}\sum_{n=1}^{N}
\left[
y_n \log \hat{p}_\phi(z_n) + (1-y_n)\log(1-\hat{p}_\phi(z_n))
\right],
\]
where \(\hat{p}_\phi(z_n)\) is the model probability for target \(y_n\). Units of \(\mathcal{L}\) are nats per event if natural logarithms are used. The evaluation metrics reported by the source are AUC and accuracy [PAGE 3]. No fake ratio is introduced here; AUC is a probability-ranking measure, not a fabricated composite.

The in-match win probability model uses four steps: pre-match ELO estimation, calibration to serve/return rates, Bayesian in-match updating, and a Barnett-Clarke match probability computation [PAGE 4]. Let \(R_i^{\mathrm{surf}}\) be a surface-adjusted rating for player \(i\). A logistic ELO mapping may be written as
\[
p_i^{\mathrm{pre}} = \frac{1}{1 + 10^{-(R_i^{\mathrm{surf}} - R_j^{\mathrm{surf}})/400}}.
\]
Assumption: the rating scale is stable over the relevant period and opponent adjustments are additive in rating space. Breakdown occurs when ratings are stale, surface transitions are unobserved, or head-to-head sample sizes are too small for stable adjustment.

Calibration converts the pre-match probability into serve/return probabilities:
\[
\text{Find } (s_i^{(1)}, r_i^{(1)}) \text{ such that } M_i(s^{(1)}, r^{(1)}) = p_i^{\mathrm{pre}},
\]
where \(s_i^{(1)}\) and \(r_i^{(1)}\) are calibrated first-point serve-win and return-win probabilities, and \(M_i\) is the Barnett-Clarke match probability at the first point. The source describes this as “Convert the pre-match prediction into serve and return predictions that result in the same prediction at the first point of the match” [PAGE 4]. Breakdown: if the calibration equations are non-unique, additional regularization or monotonicity constraints are required.

For in-match Bayesian updating, let \(w_s\) be observed serve points won and \(n_s\) observed serve points played. With prior pseudo-counts \(\alpha_0,\beta_0\), define
\[
\alpha_s = \alpha_0 + w_s, \qquad \beta_s = \beta_0 + n_s - w_s.
\]
Then the posterior mean serve-win probability is
\[
\hat{s}_i = \frac{\alpha_s}{\alpha_s + \beta_s}.
\]
Assumption: serve outcomes within the match are exchangeable conditional on the player. Breakdown: if \(n_s=0\) and the prior is degenerate, the estimate is undefined or overly dogmatic; if all observed serves are won or lost, the posterior can collapse toward 0 or 1 depending on prior strength.

Let \(M_i(s)\) be the match-win probability at score state \(s\), conditional on updated serve/return rates. A generic recursive terminal-value equation is
\[
M_i(s) = \sum_{a\in\{\text{win point},\text{lose point}\}} \Pr(a\mid s,\theta) M_i(s_a),
\]
with terminal boundary conditions
\[
M_i(s_{\mathrm{won}}) = 1, \qquad M_i(s_{\mathrm{lost}}) = 0.
\]
Units are dimensionless probabilities. This is the operational form of “Calculate the in-match win probability running a Barnett-Clarke model” [PAGE 4].

Leverage is defined as the absolute match-win probability differential produced by the point:
\[
L_t = \left| M_i(s_t^{+}) - M_i(s_t^{-}) \right|,
\]
where \(s_t^{+}\) is the score after player \(i\) wins the point and \(s_t^{-}\) is the score after player \(i\) loses it. The source says, “we define leverage as how much a point could influence the match outcome” [PAGE 4]. The paper’s pressure partition is \(L_t < 0.05\) for low pressure and \(L_t > 0.05\) for high pressure [PAGE 7].

The rally-to-match aggregation is
\[
\widehat{M}_i^{\mathrm{expected}} =
q_t M_i(s_t^{+}) + (1-q_t) M_i(s_t^{-}),
\]
where \(q_t\) is the last observed in-rally win probability, preferably from xER at the final bounce. The source describes this as “weighting the last observed in-rally win probability with the resulting match win probabilities for a positive and negative outcome of the point” [PAGE 9].

Applied to the critical rally: the score state is given as “4:6, 6:4, 6:2, 3:6, 1:2, Advantage Thiem,” and “the leverage is 21.15%” [PAGE 8]. The pre-rally match win probability is “19.27%” [PAGE 9]. If the point is lost, the post-rally match win probability is reported as “12.5%” [PAGE 9]. Thus
\[
M_i(s_t^{-}) = 0.125, \qquad L_t = 0.2115,
\]
so the implied positive-outcome match probability is
\[
M_i(s_t^{+}) = M_i(s_t^{-}) + L_t = 0.125 + 0.2115 = 0.3365.
\]
The reported in-rally win probability before the losing shot is “44.9%” [PAGE 9], so
\[
\widehat{M}_i^{\mathrm{expected}} =
0.449(0.3365) + 0.551(0.125)
\approx 0.220,
\]
matching “22.0%” [PAGE 10]. The model therefore says the player’s rally process was positive even though the realized point outcome was negative: “This shows that Thiem played this important point well but this is not visible on the scoreboard” [PAGE 10].

Exact breakdown regimes:
1. If \(Z_{t_h}^{(i)}\) or \(Z_{t_b}^{(i)}\) lies outside the training support, neural-network outputs may be extrapolations with unreliable calibration.
2. If a bounce is not observable, e.g., net, fault, or tracking occlusion, execution-value estimation becomes undefined without imputation.
3. If \(q_t\in\{0,1\}\), the expected match-win equation collapses to a deterministic realized outcome and loses counterfactual information.
4. If \(M_i(s_t^{+})=M_i(s_t^{-})\), leverage is zero and the point has no match-state value under the model.
5. If score state is terminal before the point, leverage may become discontinuous or trivially saturated at 0 or 1.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits at the intersection of three older lineages: importance-of-points analysis, within-match forecasting, and action-valuation in sports analytics. The importance lineage is explicitly cited through Morris’s “The Most Important Points in Tennis” [PAGE 11]. This is retro-causal in the sense that older scoreboard theory creates the conceptual necessity for leverage: without point importance, shot quality collapses into unweighted rally counts. The forecasting lineage is supplied by Barnett-Clarke match prediction and Kovalchik-Reid calibration with dynamic updates [PAGE 4, PAGE 11]. This lineage feeds forward into the source’s four-step in-match model: pre-match ELO, calibration, Bayesian update, and Barnett-Clarke recursion [PAGE 4]. The action-valuation lineage comes from soccer and basketball work, especially Decroos et al. and Cervone et al., where player actions are valued relative to future scoring or possession outcomes [PAGE 2, PAGE 10]. The source explicitly transfers this logic: “Decroos et al. [2] introduced the concept for separately valuing decision and execution in soccer. We transfer this idea to tennis” [PAGE 2].

The retro-causal mechanism is that historical scoreboard analysis makes naive winner-counting insufficient; this motivates rally-value modeling; rally-value modeling then requires match-state weighting; match-state weighting then requires leverage; and leverage exposes situations where realized point outcomes and latent rally quality diverge. The critical rally is a retro-causal artifact of that lineage: the lost point looks negative under naive scoreboard logic, but under the genealogy of expected-value modeling it can be positive because the model estimates that the player “played this important point well” despite losing it [PAGE 10].

Multi-week traps are identifiable. Trap 1: treating winners as the only valid target. The source warns against this because many shots are built to “gain small advantages throughout a rally” [PAGE 2]. Trap 2: conflating decision with execution. If one evaluates a shot only by the point outcome, one cannot separate a good choice badly struck from a poor choice well executed. The paper avoids this by anchoring decision at ball-leaving-racket and execution at bounce [PAGE 2]. Trap 3: using tournament-average performance as a static baseline. The source instead compares Thiem’s set-level and pressure-level values against his own prior levels and the field [PAGE 6, PAGE 7]. Trap 4: ignoring score-state leverage. A low-leverage rally and a high-leverage rally with identical tracking features can have different strategic meaning. Trap 5: assuming model stability across match phases. Serve, return, and rally shots are modeled separately because “the special cases of a serve and return” occur at the beginning of each rally and should not be treated identically to later rally shots [PAGE 3]. Trap 6: over-interpreting a single rally as causal proof of pressure. The paper’s safer move is to use the rally as an illustration of model decomposition, not as isolated proof of psychological mechanism.

A further multi-week trap is temporal leakage. Decision models must use only information available at hit time. Execution models must use only information available at bounce time. If feature windows include post-event outcomes, the model becomes retro-causal in the pejorative sense: it predicts using the future. The source’s event definitions protect against this by using the moment “when the ball leaves the racket” for decision and “the consecutive moment of the ball bounce in the opponent’s court” for execution [PAGE 2].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A recursive theory of mind in tennis asks how each player’s model of the opponent’s model affects shot selection, and how scoreboard pressure changes that recursion. The source gives empirical handles: Djokovic’s serve execution improved in the fifth set, Thiem’s return execution dropped, and Thiem’s forehand execution fell sharply [PAGE 7]. Formally, at decision time the player estimates an opponent response distribution:
\[
a_t^{*} = \arg\max_{a\in\mathcal{A}} \mathbb{E}_{o_{t+1}\sim P(o\mid a,Z_t)}\left[U(a,o)\right],
\]
where \(a\) is a shot option, \(o\) is the opponent’s response state, and \(U\) is a terminal rally value aligned with xDR or xER. Under high leverage \(L_t\), the value function should incorporate match-state consequences:
\[
U_{\lambda}(a,o) = M_i(s_t(a,o)) - \lambda M_i(s_t^{\mathrm{no-action}}),
\]
with \(\lambda\) increasing in leverage. The exact functional form is not specified by the source, so this equation is a minimal formal scaffold, not an invented empirical ratio.

Crisis habit regression means that under pressure a player may revert to a dominant, practiced action even when the expected-value landscape has shifted. The source suggests this pattern for Thiem: his forehand was his strength, but in the fifth set “the quality of Thiem’s ball striking in rally play fell away, with a sharp drop in forehand execution” [PAGE 7]. If the forehand remained his default high-confidence option, recursive ToM predicts a habit-regression pressure trap: the player chooses the weapon he trusts, but execution variance rises because the opponent’s serve/return/positioning has changed the geometry. The counter-trap is to infer choking from the lost point alone. The source explicitly rejects that inference in the critical rally: Thiem “should expect to win it 44.9% of the time” before the shot, and his expected match win increased despite losing the point [PAGE 9, PAGE 10]. Therefore, the counter-trap is outcome-blind evaluation: the scoreboard outcome is not the same as the decision-execution value.

The clock dimension is score state plus time. The fifth set is not merely later; it has higher terminal proximity and different break implications. The critical rally had leverage “21.15%” [PAGE 8], making it high-pressure under the paper’s >5% rule [PAGE 7]. Clock pressure changes the opponent’s equilibrium: Djokovic can choose higher-risk serve locations or earlier court positioning because the match state rewards variance reduction by the leader or variance exploitation by the trailing player. The recursive mentalization loop is:
1. Thiem models Djokovic’s serve pattern and likely reply depth.
2. Djokovic models Thiem’s return tendency and forehand aggression.
3. Thiem chooses a return or rally shot based on expected opponent error/weakness.
4. Djokovic adjusts court position and reply target.
5. The score state changes the value of each possible outcome, feeding back into step 3.

The source’s decomposition lets us separate decision regression from execution degradation. If decision values “stayed on the same level for his backhand and only dropped moderately compared to the drop in his forehand execution” [PAGE 7], then the fifth-set shift is better interpreted as execution variance under pressure rather than total loss of strategic intent. The recursive trap is to attribute all movement to one layer. A player can make the right recursive choice but fail physically; or can make a poor recursive choice but execute brilliantly. The paper’s four-model architecture is precisely designed to prevent that conflation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto is valid only if a higher-layer claim is contradicted by a lower-layer physical, biomechanical, environmental, or model-validation constraint. The source’s model layer provides some constraints but not all. We can therefore adjudicate only within the published feature space and physical tracking domain.

Physical feasibility veto: let the court plane be \(z=0\), net at \(x=0\), and valid singles court region be \(C_s\subset\mathbb{R}^2\) with standard tennis dimensions in meters. If the model assigns high execution winner value to a bounce outside \(C_s\) for a non-error shot, the claim is vetoed. Formally, for a shot intended to be a winner, require
\[
(x_b,y_b)\in C_s
\]
unless the shot is a serve fault or an outright error. The source’s execution value is evaluated at “the consecutive moment of the ball bounce in the opponent’s court” [PAGE 2], so an invalid bounce cannot support a direct winner unless the point-end mechanism is redefined.

Biomechanical reach veto: suppose the opponent is at position \(p_{-i,t_h}\) with speed capacity \(v_{\max}\) and reaction time \(\tau\). The available interception time is approximately
\[
\Delta t = t_b - t_h - \tau.
\]
The opponent’s reachable region is bounded by
\[
\|p_{\mathrm{reach}} - p_{-i,t_h}\| \le v_{\max}\Delta t,
\]
ignoring acceleration limits and racket extension. If a predicted winner requires the opponent to be physically incapable of reaching the bounce under these constraints, the winner prediction is physically plausible only if the opponent’s actual tracking path confirms inability. If the opponent’s observed position at bounce already makes the shot returnable, a winner claim should be vetoed unless the model is predicting unforced error rather than court geometry.

Kinematic option veto: the source says the decision occurs while the player can vary “direction, speed, spin or the target location” [PAGE 2]. A decision value assigned to a shot option must respect the player’s pre-shot position and velocity. If a proposed counterfactual shot requires a direction change outside the player’s feasible movement cone, the counterfactual is vetoed. Let the feasible angular cone be \(\Theta_{\mathrm{feas}}(p_{i,t_h},v_{i,t_h})\). Any shot with \(\theta\notin\Theta_{\mathrm{feas}}\) is physically inadmissible unless additional steps or recovery time are modeled.

Environmental veto: the published model features include positions, speeds, angles, and shot class [PAGE 3], not weather variables. Therefore, any claim that a shot’s execution value was caused by wind, temperature, humidity, court speed, or arena roof conditions is vetoed unless those variables are explicitly added to the model or validated externally. The source does not provide an environmental operator. Breakdown regime: if tracking data were collected under changing indoor/outdoor conditions but no environmental covariate exists, model outputs may be confounded by unmeasured surface/air conditions.

Model-validation veto: a claim about improved decision quality must beat the baseline evaluation regime. The source reports test-set performance for xDW, xDR, xEW, and xER [PAGE 3]. If a proposed model cannot exceed or meaningfully improve the relevant test metric, the claim is vetoed at the validation layer. For rally-value claims, xER is especially relevant because the source combines “the shot execution model xER with an in-match win probability model” to calculate expected in-match win probability [PAGE 10].

Pressure-layer veto: leverage must be computed from match-state probabilities, not from raw point importance heuristics. If a claim says a rally was high-pressure but the computed \(L_t\) is below the source’s low-pressure threshold, the claim is vetoed under the paper’s definition [PAGE 7]. Conversely, if \(L_t>0.05\) but the model’s expected match value does not shift materially, the pressure label alone is insufficient to infer performance collapse.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Define a verifiable reward proxy from the source’s own operators:
\[
R_t = q_t M_i(s_t^{+}) + (1-q_t) M_i(s_t^{-}),
\]
where \(q_t\) is the last observed rally execution value, preferably xER, and \(M_i(s_t^{+}), M_i(s_t^{-})\) are match-win probabilities from the in-match model. This reward is verifiable because it uses score state, tracking-derived rally probability, and calibrated match forecasting. A counterfactual claim is vetoed if it asserts higher \(R_t\) while violating tracking physics, model validation, or source-reported calibration.

Veto Scenario 1: Decision-model inflation without execution validation.
Claim: a new decision model improves shot quality by raising xDR. Verification test: compare out-of-sample xDR AUC and accuracy on the source’s held-out regime, which used “12,000 hits and 11,000 bounces” for testing [PAGE 3]. The source’s baseline xDR is “65 %” AUC and “59 %” accuracy [PAGE 3]. If the proposed model does not exceed the baseline with statistical confidence, or if its probabilities are poorly calibrated, the reward claim is vetoed. Prediction: on a held-out Australian Open-style tracking set, the new model’s xDR AUC will not exceed the baseline by a meaningful margin unless it uses additional features beyond those described by the source; expected reward \(R_t\) will remain indistinguishable from baseline within uncertainty.

Veto Scenario 2: Choke attribution from realized point outcome.
Claim: Thiem’s critical fifth-set point demonstrates decision collapse because he lost the point. Verification test: compare decision and execution values. The source says Thiem’s decision values “only dropped moderately compared to the drop in his forehand execution” [PAGE 7], and in the critical rally he “should expect to win it 44.9% of the time” before the shot, with expected match win increasing to “22.0%” despite the loss [PAGE 9, PAGE 10]. Therefore, any model that assigns negative reward to the rally solely because the point was lost is vetoed. Prediction: when \(q_t=0.449\), \(M_i(s_t^{-})=0.125\), and \(L_t=0.2115\), the computed expected reward is approximately \(0.220\), which is greater than the pre-rally match win probability of \(0.1927\). A counterfactual model claiming negative value will fail this arithmetic check.

Veto Scenario 3: Tactical counterfactual that ignores time-to-opponent.
Claim: changing the shot to a slower central slice would improve high-leverage rally value because it is “safe.” Verification test: inspect tracking-derived time and space. If the slower shot increases the opponent’s available interception time \(\Delta t = t_b - t_h - \tau\) and keeps the bounce within the opponent’s reachable region, the execution model should not increase winner probability. The source’s critical rally shows a slower Djokovic volley “not played with much pace” gave Thiem options and increased rally win probability to “44.9%” [PAGE 9]. By symmetry, if a proposed Thiem shot reduces pace but also reduces court displacement, the counterfactual may increase opponent options and lower reward. Prediction: a physically valid counterfactual that merely reduces pace without increasing required opponent displacement will not increase \(R_t\); if anything, it will increase the opponent’s reach probability and reduce expected rally value. The veto is confirmed if simulated bounce locations lie inside the opponent’s feasible reach region under measured velocities.

These three vetoes are verifiable because they depend on explicit quantities: test-set metrics, score-state leverage, tracking positions, velocities, bounce locations, and the model equations. They do not rely on fabricated ratios or hidden betting constructs. They preserve the source’s core claim: tennis value must be decomposed into decision, execution, leverage, and expected match state, with physical and score-state constraints acting as hard vetoes on unsupported counterfactuals.
</RLVR_COUNTERFACTUAL_VETOES>