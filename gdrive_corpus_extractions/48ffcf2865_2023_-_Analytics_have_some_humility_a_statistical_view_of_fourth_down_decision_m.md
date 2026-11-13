---
source: "2023 - Analytics, have some humility a statistical view of fourth down decision making - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2023"
pages: 28
model: deepseek/deepseek-v4.1-flash-1017
words: 8683
---

<NATIVE_REASONING>
We need answer as GSE+GSI Frontier Reasoning Foundry. Need comply exact XML sections, >=1000 words depth, zero betting lines. Need analyze paper. Need cite [PAGE N] markers and verbatim quotes. Need formal LaTeX equations, units, assumptions, singularity/breakdown regimes. Need deep multi-hop derivation and gray-zone audit >=400 words THINK_TRACE. Other sections. Need no spreads/totals/moneylines/odds. Must be about fourth down decision making statistical view. Need likely produce structured XML. Need include source operators/equations formal. Need "RLVR counterfactual vetoes" 3 verifiable scenarios + predictions. Cross-layer veto physical/biomechanical/weather proof. Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Retrocausal genealogy historical/scientific lineage & multi-week traps.

Need maybe interpret task. They gave source PDF text. Need use exact page markers and quotes. Need answer likely an analytical synthesis. Need ensure >=1000 words. Need perhaps 2000 words. Must include math with units: probability dimensionless, expected points points, win probability dimensionless. Need define value function V(x), optimal action d*. EP = sum p_s * points_s. WP. Bootstrap uncertainty. Effective sample size. Catalytic prior, Laplace smoothing tree. Need identify problems: team quality omission causing selection bias / random-team EP vs average team. Bias-variance overfit. Auto-correlated data. WP uncertainty. Need discuss "humility": recommendations based on point estimates overconfident; use bootstrap percentiles; examples. Need not mention betting lines. No odds.

Need maybe cite exact quotes from pages. Need include quotes verbatim. Need formal equations:
Game-state x = (yardline, down, distance, time, score diff, timeouts, team quality etc).
V(x) = E[points next score | x] for EP or P(win | x) for WP.
Decision d ∈ {Go, FG, Punt}; choose d* = argmax_{d} V(x_d') where x_d' next state expectation. More precisely for EP: EP(x,d)=Σ_{s ∈ {TD,FG,SAFETY, ...}} P(s|d,x) u(s); u units points. For WP: WP(x,d)=Σ_{y ∈ {Win,Loss}} P(y|d,x) * y, y∈{0,1}; choose argmax. Include touchdown 7? But avoid betting. It's points. Fine.
Team quality: q = (q_OQB, q_ONQ, q_DPass, q_DRun, etc). Model EP(x,q). Need selection bias: EP no q averages over random opponent distribution, not average conditional. Formal: E[Y|A] vs E[Y|A,Q]? If q correlated with action/state. Random team expectation = ∫ E[Y|x,q] f(q) dq. Average-team? Actually if f(q) is marginal distribution of teams. But decisions made by specific teams with q. If model omitted q, E[Y|x] = E_q[E(Y|x,q)]. It is not conditional for team j. If q influences both play calling/state and outcome, selection bias. Team quality high has more plays/score. Need cite page 8: "Models report EP for randomly drawn teams, not for average teams. • No team wants this! • No such thing as a decision made by a random team!" and "Good teams score more points Good teams have more plays". Also base rates.
Bias-variance: ML overfit. Catalytic prior. Need equation for Laplace smoothing tree maybe generic: add pseudo-count α to leaf probability: \hat p_leaf = (n_s + α m_s)/(n + α), α prior strength; or shrinkage to prior. Could cite inspired by Sam Kou catalytic prior. Need not invent exact. But formal equation can be generic and note paper no detailed equations. Need not "toy equations"? Formal LaTeX with assumptions. It's okay.
Auto-correlation: n_plays ≈ 500,000 but games ≈ 4,000; effective sample size n_eff ≈ G; quote page 17. Need equation: n_eff = G / (1+(m-1)ρ) maybe for clustered binary outcomes. But don't invent too much? It's standard, not toy. Need state if intraclass correlation ρ, n_eff = n/[1+(m-1)ρ], units plays. Here n=500k, m plays per game, G=4k. More exact for binary response constant within game. Need explain.
Bootstrap: randomized cluster bootstrap accounts for autocorrelation. Boot % = fraction of bootstrap models choosing d. Decision uncertainty: P_boot(d* = d). If max point estimate but P_boot(d*) low, coach discretion. Need formal:
\hat V_b(x,d), b=1..B. \hat p_d(x)= (1/B) Σ 1[argmax_{d'} \hat V_b(x,d') = d]. If \hat p_{d̂} < τ or top choices overlap in bootstrap distribution -> uncertain. If one action has high p and edge robust -> strong. Paper uses "boot %". Need mention intervals 8% WP average in simplified random walk; real wider. Need cite page 19 quote: "Bootstrapped WP confidence intervals, to achieve 90% coverage of true WP, need to be wide (8% WP on average)." Need quote.
Examples:
Example 1 CHI @ NYJ Week 12 2022: "FG looks like a strong decision based on the WP point estimate (+2%). Traditional analytics recommendation: Field goal attempt." Then "but we don’t have enough data to trust our own point estimate. Our recommendation: Coach’s discretion." Need cite page 22/23. Example 2 WAS @ IND Week 8 2022: "Punt has a tiny estimated edge over Go (+0.05%). Traditional analytics recommendation: Tossup, or slight lean towards punt." Then "but we are confident that the edge is there. Our recommendation: Punt (but not a tragedy if the coach overrides)." Page 24/25. Example 3 LV @ LA Week 14 2022: "Go is a strong decision based on the WP point estimate (+3.5%). Traditional analytics recommendation: Strong Go!" Then "and we are certain it is the best decision. Our recommendation: Strong Go! (LV punted, then LA won after a Mayfield 98 yard game winning drive)." Page 26/27. Need no odds.

Need "retrocausal genealogy": historical/scientific lineage and multi-week traps. Discuss Romer 2006, Burke 2009, Yurko 2018, Baldwin 2021, Kou catalytic prior, Bayesian shrinkage, bootstrap cluster, decision theory. Multi-week traps: treating EP/WP point estimates as ground truth; missing team quality; ignoring effective sample size; overfitting; false precision; overgeneralizing average team; using data without cluster bootstrap; conflating EP and WP in endgame; using model recs across weeks/teams without recalibration; "analytics humility" as trap? Need "multi-week traps" maybe in sports research: chasing week-to-week model residuals? Need mention that model errors persist across weeks/teams because team quality and scheme change; need holdout/regularization. Could be "multi-week traps" as repeated decisions across season where tiny biases compound. Use page 25 quote about tiny confident edges valuable because many more occur per game. Need discuss compounding: many fourth-down decisions per game/season; small edges aggregate, but uncertain edges can compound error. Formal expected cumulative value: sum over N decisions of ΔV_i; if biases, N*Bias. But no betting. Units points or WP. Need perhaps equation for cumulative decision value: ΔV_total = Σ_i [V(x_i, d_i) - V(x_i, d_ref)]; if point estimates have bias b_i and uncertainty σ_i, expected regret. Need not mention odds.
Need "recursive theory of mind": crisis habit regression vs counter-trap vs clock. This is odd. Need interpret: decision maker under crisis may regress to habit (punt/FG default); counter-trap is analyst overconfidence in model point estimates or coach overrides? Clock pressure. Need discuss recursive reasoning: coach models analyst model, analyst models coach priors, opponent? Need not mention betting. Need connect to paper: coach's discretion when model uncertain; "counter-trap" = using uncertainty as excuse to ignore confident edges; "clock" = time remaining and score differential; auto-correlated WP. Need include theory of mind: decision hierarchy: model believes, coach beliefs about model, analyst beliefs about coach. Crisis habit regression: under high pressure, coaches may default to conservative punt/FG even when model says go; but paper says not all decisions obvious. Counter-trap: if model says coach's discretion too often, coach may overuse discretion; or analysts may counter by overclaiming strong go. Need define recursive levels: Level 0 raw WP; Level 1 analyst recommendation; Level 2 coach's belief about analyst reliability; Level 3 analyst anticipates coach's prior and communication. Need include clock: score differential/time remaining/TOs; WP highly nonlinear near end; effective sample sparse. Need mention "clock" as decision timing and clock as computational time? The prompt says "vs clock." likely game clock. Need address.
Need "cross-layer veto adjudication": physical/biomechanical/weather veto proof. Need prove physical veto for fourth down decisions? Paper lacks physical/weather variables except Baldwin roof type, home. Need adjudicate: statistical model can recommend go, but physical/biomechanical/weather constraints can veto: kicker range, wind, rain, field surface, snap/hold, fatigue, injury, offensive line, QB health. Need state paper includes roof type/home in Baldwin model [PAGE 5] but not detailed biomechanics. Need "veto proof": If physical feasibility probability tends zero or variance enormous, statistical EP/WP edge is invalid. Formal: action feasible set F_phys(x); if d not in F, P(execute)≈0; model must constrain d∈F. Weather affects FG probability and passing/running. Biomechanical: kicker leg strength, plant leg, snap operation; if 70-yard FG probability low. Page 7 thought experiment: 70 yard field goal: average NFL kicker vs Justin Tucker vs randomly drawn kicker. That's team quality/kicker quality. Need cite quote? Page 7 text not exact quote? "What is the probability that an “average” NFL kicker sinks a 70 yard field goal in neutral weather conditions?" Need cite [PAGE 7]. Use as physical/quality veto. Weather neutral assumption; if not neutral, probability shifts. Need "proof" via conditional probability: V(x,d) = ∫ V(x,d,w) f(w|x) dw; if weather w makes action infeasible, model trained on neutral/roof may overweight. Need cite Baldwin includes roof type [PAGE 5]. Need "physical/biomechanical/weather veto proof" maybe show with inequalities: statistical upper bound on expected value must be compared to feasibility and execution distribution. If execution outcome distribution is not represented in training data (e.g., 70-yard FG attempts rare), model extrapolates. Need singularities: no data for rare states, confounding by team quality, nonstationarity. Need mention "exact singularity/breakdown regimes": 
- Omitted team quality: if q distribution conditional on x differs from marginal, omitted-variable bias.
- Overfit: if model capacity high and effective n small, variance dominates; breakdown when p/n high.
- Autocorrelation: if intraclass correlation -> effective n << raw n; confidence intervals too narrow; bootstrap clusters.
- Rare/extrapolated states: if P_empirical(state)≈0, model predictions unsupported; singularity at no support.
- Physical infeasibility: P(execute|d,x)≈0.
- Clock/endgame: if time remaining small, WP surface discontinuous/non-smooth; model smoothness assumptions break.
Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Need create counterfactual vetoes: Scenario 1: model recommends go on 4th down but team has QB injury/backup; team-quality adjustment says QB quality matters [PAGE 11]. Veto if QB quality covariate crosses threshold; prediction: if model omits q, wrong; if includes q, decision flips. Verifiable by rerun with q. Scenario 2: kicker range/weather: 70-yard FG with average kicker; veto because physical plausibility low; prediction: model trained without kicker quality/weather overestimates FG; with kicker/weather, FG not chosen. Scenario 3: tiny edge + high bootstrap uncertainty; veto point-estimate optimal action; prediction: boot proportion < threshold -> coach discretion; repeated across similar states, forcing action yields no reliable improvement. Need "verifiable" maybe specify dataset, comparison, metric (out-of-sample MAE, bootstrap proportion, calibration). Need predictions exact? We can state predictions: out-of-sample MAE improves from 3.803 to 3.744 [PAGE 15]; bootstrap coverage 90% widens; etc. Need no betting. Good.
Need "SOURCE_OPERATORS_AND_EQUATIONS" must include formal LaTeX, units, page citations, breakdown. Need cite exact page markers. Should include verbatim quotes. Need quote exact from pages. Need not quote too many but enough. Need ensure all quotes verbatim. Let's list exact quotes available:

PAGE 2:
"The mathematical basis of in-game strategic decision making is a value function which tells us the value of game-state"
"Make the decision which maximizes the value of the next game-state"
"Make the fourth down decision in which maximizes win probability" (grammar weird)
PAGE 3:
"Probabilistic state-space models"
"Statistical models"
"We discovered several problems with the way they are implemented, fit, and applied"
PAGE 6:
"Existing EP models are functions of yard-line, down, yards-to-go, time remaining, timeouts, etc."
"But these models don’t adjust for team quality."
PAGE 8:
"Models report EP for randomly drawn teams, not for average teams."
"No team wants this!"
"No such thing as a decision made by a random team!"
"selection bias problem; EP models are especially wrong/biased"
"Good teams score more points"
"Good teams have more plays"
PAGE 9:
"EP models that don’t adjust for team quality are biased."
"We need to adjust for team quality"
PAGE 11:
"All 4 offensive quality metrics are more impactful than the defensive quality metrics"
"Quarterback quality of both teams matters more than other aspects of team quality!"
PAGE 13:
"ML models tend to aggressively overfit (play-by-play) data"
"Typically deal with this using regularization or shrinkage towards simpler models"
PAGE 14:
"Inspired by Sam Kou’s catalytic prior, we found a way to Laplace smooth tree ML models"
PAGE 15:
table MAE. quote "EP models are biased and overfit, and we can improve upon that"
"On subsets of plays our model is much better, and that can make a huge difference in decision making"
PAGE 17:
"Play-by-play dataset of ≈ 500,000 plays"
"But, not 500,000 independent outcome variables"
"Effective sample size is closer to 4,000 (num. games in the last 15 years)"
"This is nowhere near enough data to experience the full variability of the nonlinear and interacting variables..."
PAGE 19:
"Bootstrapped WP confidence intervals, to achieve 90% coverage of true WP, need to be wide (8% WP on average)."
"Real football exponentially more complex. Confidence intervals should be far wider."
PAGE 20:
"Making fourth down decisions based solely on WP point estimates, which are highly uncertain, leads to overconfident decisions"
"Quantify uncertainty in the 4th down decision by bootstrapping"
"the randomized cluster bootstrap accounts for autocorrelation"
"boot % — % of bootstrapped models which choose decision d ∈{Go, FG, Punt}"
PAGE 22:
"FG looks like a strong decision based on the WP point estimate (+2%)."
"Traditional analytics recommendation: Field goal attempt."
PAGE 23:
"but we don’t have enough data to trust our own point estimate."
"Our recommendation: Coach’s discretion."
"For many plays the optimal decision is uncertain!"
PAGE 24:
"Punt has a tiny estimated edge over Go (+0.05%)."
"Traditional analytics recommendation: Tossup, or slight lean towards punt."
PAGE 25:
"but we are confident that the edge is there."
"Our recommendation: Punt (but not a tragedy if the coach overrides)."
"Eeking out these tiny (but confident) edges are valuable because many more of them occur per game."
PAGE 26:
"Go is a strong decision based on the WP point estimate (+3.5%)."
"Traditional analytics recommendation: Strong Go!"
PAGE 27:
"and we are certain it is the best decision."
"Our recommendation: Strong Go!          (LV punted, then LA won after a Mayfield 98 yard game winning drive)."
PAGE 28:
"Team quality must be incorporated into EP/WP models"
"We need shrinkage to mitigate overfitting in our ML models"
"Humility: There are not enough games to fit an accurate statistical WP model to precisely learn the right fourth down decision at many game-states"
"Far fewer 4th down decisions are as obvious as analysts widely claim"

Need include exact page markers. Need maybe [PAGE 8] etc. Good.

Need answer "DRIVE SOURCE" maybe use source as drive. Need produce not too long? Desired oververbosity 5 but requirement >=1000. Need around 2500 words. XML sections. Need no markdown? XML sections can contain LaTeX. Need be well-formed XML? The prompt exact XML sections. We can output:

<THINK_TRACE> ... </THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS> ... </SOURCE_OPERATORS_AND_EQUATIONS>
...
Need ensure no unescaped &, <, > inside text? XML validity maybe not required but use &amp; for ampersand? Could avoid ampersands. Use LaTeX with < maybe problematic inside XML text. If exact XML sections, maybe use text not strict parse. But better escape < as &lt; in equations? Hmm. If output in XML, raw < in LaTeX can break. We can use \lt or avoid. But LaTeX uses \le, not <. Use \leq. For inequalities use \le. Avoid raw ampersand. Use "and" not &. Use \{ \}. Fine. Use \operatorname{argmax}. Use \mathbb. No raw <. For \sum. Good. Need use ≥? Could use \geq. Avoid &.

Potential issue equations with `&` in align. Avoid align environment; use separate \[ \] maybe no ampersand. Use `\begin{aligned}` has & maybe not. Use single-line equations. Or use plain LaTeX with `\\` no &. XML okay. Need no `<` raw; use `\lt` maybe. Use `\leq`.
Need include "SI/information/probability units": 
- EP units: points.
- WP units: probability dimensionless [0,1].
- ΔWP: probability.
- MAE: points? Out-of-sample MAE in table likely points. Clarify MAE of EP in points.
- n: plays, games.
- Information units maybe use "nats/bits" for entropy? Need include information units if applicable. Maybe define model uncertainty via entropy H(d*) in bits: H = -Σ p_d log_2 p_d bits. Good formal. Use bootstrap proportions as probabilities. Need include "information units" to satisfy. We can define H_d = -Σ p_d log_2 p_d bits; if H≈0 certain, if H log2 3 bits uncertain. That's formal and relevant. Need not overdo. Good.
Need include assumptions and exact singularity/breakdown regimes.

Need "Deep multi-hop derivation": derive value function, decision, team quality, effective sample, bootstrap, examples. Need THINK_TRACE >=400 words. We can make ~600. Need mention gray-zone audit: edge cases: tiny edge + confidence; point estimate vs uncertainty; physical feasibility; clock. Need "multi-hop" maybe chain: game state -> action -> transition -> outcome -> value; omitted q -> selection; auto-correlation -> n_eff; bootstrap -> uncertainty; decision rule. Good.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage. Need mention Romer 2006, Burke 2009, Yurko 2018, Baldwin 2021, Kou catalytic prior, Bayesian shrinkage, cluster bootstrap. "Retrocausal" maybe how present model critiques past models; lineage from expected points to win probability to uncertainty. Multi-week traps: 
1. Averaging over team quality (average team fallacy) persists weekly.
2. Overfitting play-by-play with high capacity; weekly recency changes.
3. Autocorrelation: treating plays as independent; repeated weekly overconfidence.
4. Point-estimate decision making; tiny edges; many decisions.
5. Nonstationarity: injuries, weather, scheme changes across weeks; model recalibration.
Need use quotes.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. Need define:
- Crisis habit regression: under 4th down pressure, coach reverts to punt/FG defaults. Model should account for coach's prior? But paper says "coach's discretion" when uncertain. The recursive model: Level 0 V(x,d); Level 1 analyst recommendation; Level 2 coach's belief about model reliability and own risk preference; Level 3 analyst's anticipation of coach's likely override. A counter-trap is analyst overcorrecting to "humility": declaring everything coach's discretion, or coach using uncertainty to ignore confident tiny edges. Need distinguish from paper: Example 1 uncertain -> discretion; Example 2 tiny but confident -> punt; Example 3 certain -> strong go. So decision threshold based on bootstrap distribution, not vibes. Clock: time remaining, score diff, timeouts; WP model has discontinuous endgame; effective sample sparse; under clock pressure, habit and model overconfidence collide. Need formal threshold: choose d if \hat p_d ≥ τ and Δ\hat V robust; if distribution overlaps, discretion. But no exact τ in paper. Use "exceeds a prespecified threshold". Need not invent exact. Need mention recursive theory of mind: coach knows analyst knows coach's risk aversion; model should output uncertainty language to avoid counter-trap. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. Need formal proof:
Let x_s = statistical state, x_p = physical state (kicker leg, wind, field). Model V_s(x_s,d) estimates average over historical physical states. True V(x_s,x_p,d)=E[Y|x_s,x_p,d]. If x_p not in support or model omits x_p, V_s is not equal. Veto if P(feasible|d,x_p)=0 or if upper confidence bound of V(d) < V(d') under physical constraints. Need include weather: neutral conditions assumption page 7; Baldwin includes roof type page 5; but paper doesn't fully model biomechanics. Thus cross-layer veto must override statistical edge when execution probability low or non-representative. "Proof": If d is physically infeasible, expected value equals zero or undefined; if model assigns positive EP/WP due to averaging over infeasible states, that's extrapolation. For field goals: distance and kicker quality; if no data for 70-yard FG by average kicker, probability near zero; Justin Tucker example. Need cite [PAGE 7]. For biomechanical: injury to QB or kicker; team quality metrics include QB quality [PAGE 11]; but acute injury is not captured by season aggregate. Need veto. Weather: wind/rain changes ball flight and footing; if model trained on neutral/roof, use conditional. Need "physical/biomechanical/weather veto proof" maybe include inequalities:
P(execute|d,x) \leq ε => V(x,d) \leq ε V_max + (1-ε)V_fail; if ε V_max + ... ≤ V(d') then veto. 
Units: probabilities dimensionless; V in points or WP. Good.
Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable scenarios + predictions. Need each scenario with counterfactual, verifiable check, prediction. Maybe include "veto" in sense RLVR reward: if model recommendation fails physical/team-quality/uncertainty constraints, counterfactual reward is negative. Need formal? We can define R_veto = -1 if action violates veto else 0. Predictions:
1. Team-quality counterfactual: Take a 4th-down state with average model. Swap QB quality from average to backup/elite; with q included, optimal action flips or edge shrinks. Prediction: out-of-sample MAE with team quality ~3.744 vs no team quality 3.803 [PAGE 15]; QB quality most impactful [PAGE 11]. Verify by re-fitting and comparing bootstrap proportions. 
2. Physical feasibility counterfactual: 70-yard FG with average kicker vs Justin Tucker. Prediction: average kicker P(FG) near zero, model should not choose FG; if model trained without kicker quality, it overestimates. Use [PAGE 7]. 
3. Uncertainty veto: Example 1 CHI @ NYJ +2% point estimate but low boot proportion; counterfactual forcing FG vs coach's discretion. Prediction: bootstrap distribution overlaps; no stable improvement; if threshold, action becomes discretion. Use [PAGE 22-23]. 
Maybe add Example 2 as tiny confident edge? But only 3. Need "verifiable RLVR veto scenarios": specify dataset split, metric. Good.

Need ensure answer is not an actual betting recommendation? It's sports analytics. No betting lines. Fine.

Need maybe mention "source pages provided" exact [PAGE N]. Ensure all claims about paper cite. Could cite [PAGE 2], [PAGE 6], etc. Need not cite every sentence. Need include verbatim quotes with page markers. Ensure quotes exact and not too many. Good.

Need maybe include "Model Land" as probabilistic vs statistical. Mention statistical models focus. Good.

Need maybe include "EP model comparison" table values. Need quote exact MAE values maybe table:
Catalytic 3.744, Yurko+ 3.749, Baldwin+ 3.753, Baldwin 3.803, Yurko 3.808, Burke 3.833, Romer 3.864 [PAGE 15]. Need mention units points. This is useful. Maybe in SOURCE_OPERATORS. Good.

Need "formal LaTeX equations, units, assumptions, exact singularity/breakdown regimes." We can have subsection in SOURCE_OPERATORS:
1 Value operators.
2 EP and WP.
3 Team quality and omitted-variable bias.
4 Regularization/catalytic prior.
5 Effective sample size and bootstrap.
6 Decision uncertainty entropy.
7 Assumptions and breakdown.
Need include units and page citations. Need quote. Good.
Need "zero toy equations": Avoid fake ratios. Our equations are standard decision theory, probability, sample size, entropy. Not fake. Good.
Need "ZERO BETTING LINES": Avoid words "line", "spread", "total", "moneyline", "odds". We can mention "yard-line" but that's football field yardline, not betting line. Is "line" okay? The invariant says never mention spreads, totals, moneylines, or odds. "yardline" is not betting. "line" as yardline okay. But maybe avoid "line" alone. Use "yardline" or "yard position". Fine.

Need "THINK_TRACE" deep multi-hop derivation. Need include >=400 words. Could be ~700. Need talk to reader as internal audit. Use "The chain is..." Good.

Need maybe "GSE + GSI Frontier Reasoning Foundry" identity? Not necessary. But can include.

Need output with XML tags. Need not include markdown code fence? If exact XML, no code fence. We can output plain. Need escape `&` in "GSE + GSI" not in text? Use plus. No ampersand. In XML, raw `&` illegal. Avoid. Use "and". Need use `>`? In text, `>` okay? In XML text, `>` is allowed but `&` and `<` not. Avoid `<`. Use `\leq` and `\geq`. Use `\in`. Good. Use `\{` okay. Use `%` okay. Use `≈` okay. Use `–` okay. Use `•`? Avoid maybe. Use quotes. Good.
Need no raw `<` in LaTeX like `P( ... )`. If using `\text{Go}` no issue. Use `\operatorname{argmax}_{d \in \{\text{Go},\text{FG},\text{Punt}\}}`. Fine.
Need avoid `&` in equations. No align. Use separate equations. In XML, backslashes okay.
Need include `Δ`? Unicode okay. Use `\Delta`. Good.

Need word count. Let's draft.

Potential final structure:

<THINK_TRACE>
[~700 words] 
- Start: source asks value function. Derive chain: x -> d -> next state -> outcome -> V. 
- EP vs WP. 
- Team quality: omitted q. Formal conditional expectation vs marginal. Selection bias. Base rates quotes. 
- Overfit and catalytic prior. 
- Autocorrelation: raw n vs effective n. 
- Bootstrap and decision uncertainty. 
- Examples and gray-zone audit. 
- Mention exact singularity/breakdown.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Subsections with equations. Include quotes. Need maybe 800 words. 
Equations:
x = (yardline, down, distance, t, Δscore, timeouts, q) 
V_EP(x) = E[Y_pts|x] in points.
V_WP(x)=P(win|x) dimensionless.
For action d: V_EP(x,d)=Σ_s p(s|x,d) u(s); V_WP(x,d)=Σ_y y p(y|x,d); d*...
Team quality: V(x,q). Marginal omitted: V_omit(x)=∫ V(x,q) f(q)dq. Bias: V_omit(x)-V(x,q_j)=... If q correlated with x and d. 
Regularization: leaf estimate \hat p_{ℓ,s}=(n_{ℓ,s}+\alpha m_{ℓ,s})/(n_ℓ+\alpha), α≥0 prior strength (pseudo-count). Catalytic prior inspired by Sam Kou. 
Effective sample size: n_eff = n / [1+(m-1)ρ] for clusters; if ρ>0, n_eff << n. 
Bootstrap proportion p_d(x)=...
Entropy H = -Σ p_d log_2 p_d bits. 
Assumptions: exchangeability within cluster, support, stationarity, physical feasibility. Breakdown: no support, omitted q, p/n high, ρ high, endgame discontinuity, infeasible action. 
MAE table quote. 
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
~400 words. Historical lineage. Multi-week traps.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
~400 words. Crisis habit regression vs counter-trap vs clock. Use examples. 
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
~400 words. Physical/biomechanical/weather veto proof. Formal. Use page 7, 5, 11. 
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios. ~500 words. 
</RLVR_COUNTERFACTUAL_VETOES>

Total > 3000. Good.

Need be mindful "SOURCE_OPERATORS_AND_EQUATIONS" says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We do. Need not overquote. Good.

Need ensure no "odds" word? The word "odds" might appear if I write "odds". Avoid. "probability" only. No "spread", "total", "moneyline". Avoid "line" except "yardline". Good.

Potential issue "win probability" not betting. Fine.

Need mention "EP models don't adjust team quality" exactly. Good.

Let's formulate with exact quotes.

Need "formal LaTeX, SI/information/probability units" - include "points" and "dimensionless probability" and "bits". Good.

Need "exact singularity/breakdown regimes": We can list:
- Support singularity: f(x,q)=0 or n_leaf=0. If model uses smoothing, \hat p approaches prior; if no prior, undefined. 
- Omitted-variable breakdown: \operatorname{Cov}(q, \partial V/\partial q | x) ≠ 0. 
- Effective sample breakdown: ρ→1 => n_eff→n/m=G; if m large, severe.
- Overfit breakdown: when model capacity degrees of freedom df comparable to n_eff; variance dominates.
- Endgame discontinuity: t→0, score differential; WP surface step-like; smooth ML extrapolates poorly.
- Physical infeasibility: P(execute|d,x_p)→0; V→V_fail. 
Need not invent exact thresholds. Use "approaches". Good.

Need "RLVR counterfactual vetoes" maybe define "verifiable reward veto" as binary constraint. Use "counterfactual replay" and "prediction". Good.

Need no "toy equations" like "Force/Fatigue". Our equations are legitimate.

Need maybe mention "catalytic prior" equation as generic Laplace smoothing; we must state paper does not give full formula in slides. Good: "The slide gives the operator name, not a full likelihood; a faithful formalization is..." This addresses no invented exact. Good.

Need "multi-hop derivation" in THINK_TRACE: include chain and audit. Good.

Need "gray-zone audit" include "when is point estimate enough?" Need mention "tiny edge + confidence" example 2. "strong edge + certainty" example 3. "strong point estimate + uncertainty" example 1. Good.

Need "counter-trap" maybe coin term. We can define "counter-trap: an analyst or coach overcorrects against the other's perceived bias, producing a new systematic error." Need tie to paper: "humility" not nihilism; confident tiny edges still valuable. Good.

Need "clock" maybe game clock; also "clock as decision deadline" not needed. Use game clock. Good.

Need "crisis habit regression" under high pressure, coach reverts to habit. But paper's "coach's discretion" maybe not always habit. Need state model must not assume coach will follow model; recursive ToM. Good.

Need "cross-layer veto adjudication" maybe "adjudication proof" not too rigorous but formal. Need state "If statistical recommendation and physical veto conflict, physical feasibility wins because V is conditional on physical state." Good.

Need "retrocausal genealogy" maybe "retrocausal" means how later uncertainty critiques retroactively reinterpret earlier EP/WP models. We can frame: Romer's IV and Burke's spline were reasonable for average team; later Yurko/Baldwin added state variables; Brill-Wyner retroactively diagnoses omitted team quality and overfit. Catalytic prior lineage from Kou; cluster bootstrap lineage from survey statistics. "Multi-week traps" as recurring. Good.

Need not mention "unknown authors" maybe cite "Brill and Wyner" from page 1. Good.

Let's draft final carefully. Need XML tags exactly. Use no raw `<` in equations. Let's write.

Need ensure "verbatim quotes" exact. Check quote "FG looks like a strong decision based on the WP point estimate (+2%). Traditional analytics recommendation: Field goal attempt." We can quote. Good.
Need quote "Punt has a tiny estimated edge over Go (+0.05%)." exact.
Need quote "Go is a strong decision based on the WP point estimate (+3.5%)." exact.
Need quote "Eeking" is typo in source; if quote, preserve "Eeking". Good.
Need quote "Bootstrapped WP confidence intervals, to achieve 90% coverage of true WP, need to be wide (8% WP on average)." exact.
Need quote "Effective sample size is closer to 4,000 (num. games in the last 15 years)" exact.
Need quote "This is nowhere near enough data to experience the full variability of the nonlinear and interacting variables of score diff., time remaining, team quality, yardline, down, distance, timeouts, etc." exact? Source says "This is nowhere near enough data to experience the full variability of the nonlinear and interacting variables of score diff., time remaining, team quality, yardline, down, distance, timeouts, etc." Yes.
Need quote "Quarterback quality of both teams matters more than other aspects of team quality!" exact.
Need quote "All 4 offensive quality metrics are more impactful than the defensive quality metrics" exact.
Need quote "Models report EP for randomly drawn teams, not for average teams." exact.
Need quote "No team wants this!" exact.
Need quote "No such thing as a decision made by a random team!" exact.
Need quote "EP models that don’t adjust for team quality are biased." exact. Use curly apostrophe? Fine.
Need quote "We need shrinkage to mitigate overfitting in our ML models" exact.
Need quote "Team quality must be incorporated into EP/WP models" exact.
Need quote "Far fewer 4th down decisions are as obvious as analysts widely claim" exact.
Need quote "Making fourth down decisions based solely on WP point estimates, which are highly uncertain, leads to overconfident decisions" exact.
Need quote "the randomized cluster bootstrap accounts for autocorrelation" exact.
Need quote "boot % — % of bootstrapped models which choose decision d ∈{Go, FG, Punt}" exact. Use with ∈ maybe. Good.

Need avoid `&` in "EP/WP" slash okay. Use "and" instead of ampersand.

Need maybe mention "Baldwin (2021) XGBoost includes roof type" [PAGE 5]. Good.

Need "source operators" maybe use "V" operator. Good.

Need final answer only XML. Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s decision chain is straightforward at first glance and treacherous on audit. The game-state is a vector \(x\): yard position, down, yards-to-go, time remaining, score differential, timeouts, and team quality. The value operator \(V(x)\) maps that state to expected points in points, or to win probability as a dimensionless probability in \([0,1]\). The fourth-down action set is \(d \in \{\text{Go},\text{FG},\text{Punt}\}\). The decision rule is not “choose what usually works”; it is “choose the action whose realized next-state distribution has the largest expected value.” That is the multi-hop chain: state \(x\) → action \(d\) → transition distribution over next states and outcomes → value \(V\) → ranking of actions → recommendation. The paper’s critique is that every link in that chain is estimated from data, and the data are thinner and more biased than public analytics usually admits.

The first hop is team quality. An EP model that uses only yard position, down, distance, time, and timeouts estimates a marginal expectation over whatever teams happen to be in the training sample. The paper states this directly: “Models report EP for randomly drawn teams, not for average teams” [PAGE 8], and “No such thing as a decision made by a random team!” [PAGE 8]. Formally, if \(q\) is a vector of offensive and defensive quality, then the model should estimate \(E[Y \mid x,q]\), not \(\int E[Y \mid x,q] f(q)\,dq\). The marginal can be useful as a descriptive average, but it is not the conditional value for a specific offense facing a specific defense. Because good teams both score more and run more plays, the training sample is selected in a way that makes the omitted-quality model especially misleading: “Good teams score more points” and “Good teams have more plays” [PAGE 8]. That is a selection-bias problem, not a cosmetic omission.

The second hop is model fit. The paper warns that “ML models tend to aggressively overfit (play-by-play) data” [PAGE 13] and that regularization or shrinkage toward simpler models is the usual remedy. The authors use a catalytic-prior-inspired Laplace smoothing of tree models: “Inspired by Sam Kou’s catalytic prior, we found a way to Laplace smooth tree ML models” [PAGE 14]. The audit point is that a large tree ensemble can memorize play-by-play idiosyncrasies unless leaf estimates are shrunk toward a prior. The paper’s model comparison supports this: the catalytic XGBoost with team quality has out-of-sample MAE 3.744, versus Baldwin 2021 without team quality at 3.803 and Romer 2006 at 3.864 [PAGE 15]. The units are points of EP, so the improvement is not decorative.

The third hop is dependence. The paper notes “Play-by-play dataset of ≈ 500,000 plays” but “not 500,000 independent outcome variables” [PAGE 17]. The response is binary win/loss at the game level, so plays within a game are highly auto-correlated. The “Effective sample size is closer to 4,000 (num. games in the last 15 years)” [PAGE 17]. That is the gray-zone core: a model can have half a million rows and still have only about four thousand independent game outcomes. Confidence intervals built as if plays were independent will be too narrow. The paper’s random-walk football simulation makes the point sharply: “Bootstrapped WP confidence intervals, to achieve 90% coverage of true WP, need to be wide (8% WP on average)” [PAGE 19], and real football is more complex, so intervals should be wider. Therefore a fourth-down recommendation based only on a WP point estimate is overconfident: “Making fourth down decisions based solely on WP point estimates, which are highly uncertain, leads to overconfident decisions” [PAGE 20].

The final audit is decision uncertainty. The paper uses a randomized cluster bootstrap because “the randomized cluster bootstrap accounts for autocorrelation” [PAGE 20], and reports “boot % — % of bootstrapped models which choose decision d ∈{Go, FG, Punt}” [PAGE 20]. That turns the recommendation from a single argmax into a distribution over argmaxes. In Example 1, “FG looks like a strong decision based on the WP point estimate (+2%)” [PAGE 22], but “we don’t have enough data to trust our own point estimate” [PAGE 23], so the recommendation is “Coach’s discretion” [PAGE 23]. In Example 2, “Punt has a tiny estimated edge over Go (+0.05%)” [PAGE 24], but “we are confident that the edge is there” [PAGE 25], so the recommendation is punt but not a tragedy if overridden. In Example 3, “Go is a strong decision based on the WP point estimate (+3.5%)” [PAGE 26], and “we are certain it is the best decision” [PAGE 27], so the recommendation is “Strong Go!” [PAGE 27]. The gray-zone lesson is that point-estimate magnitude and estimate certainty are separate axes; collapsing them into one “analytics says go” slogan is the error the paper calls out.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines the strategic object as a value function: “The mathematical basis of in-game strategic decision making is a value function which tells us the value of game-state” [PAGE 2]. Let the game-state be
\[
x=(\text{yard position},\text{down},\text{yards-to-go},t,\Delta s,\text{timeouts},q)
\]
where \(t\) is time remaining in seconds or minutes, \(\Delta s\) is score differential in points, and \(q\) is a vector of team-quality covariates. The action set is
\[
\mathcal A=\{\text{Go},\text{FG},\text{Punt}\}.
\]
For expected points, the value has units of points:
\[
V_{\mathrm{EP}}(x)=\mathbb E[Y_{\mathrm{pts}}\mid x],\qquad Y_{\mathrm{pts}}\in\mathbb R\ \text{points}.
\]
For win probability, the value is dimensionless:
\[
V_{\mathrm{WP}}(x)=\mathbb P(\text{win}\mid x)\in[0,1].
\]
For an action \(d\), the next-state expectation is
\[
V_{\mathrm{EP}}(x,d)=\sum_{s}p(s\mid x,d)\,u(s),\qquad u(s)\ \text{in points},
\]
\[
V_{\mathrm{WP}}(x,d)=\sum_{y\in\{0,1\}}y\,p(y\mid x,d),\qquad y\in\{0,1\}.
\]
The fourth-down rule is
\[
d^{*}(x)=\operatorname*{argmax}_{d\in\mathcal A}V(x,d).
\]
This formalizes “Make the decision which maximizes the value of the next game-state” [PAGE 2].

Team quality enters as a conditioning problem. If the model omits \(q\), it estimates
\[
V_{\mathrm{omit}}(x)=\int V(x,q)\,f(q)\,dq,
\]
which is a marginal over the training population. The decision-relevant object for team \(j\) is \(V(x,q_j)\). The omitted-variable bias is
\[
\mathrm{Bias}(x,q_j)=V_{\mathrm{omit}}(x)-V(x,q_j),
\]
and it is nonzero whenever \(q\) is correlated with the state distribution or with play selection. The paper’s warning is explicit: “EP models that don’t adjust for team quality are biased” [PAGE 9]. The empirical ranking of quality covariates is also explicit: “All 4 offensive quality metrics are more impactful than the defensive quality metrics” and “Quarterback quality of both teams matters more than other aspects of team quality!” [PAGE 11].

The paper’s regularization operator is a shrinkage toward a prior. The slides name the catalytic prior and Laplace smoothing of trees [PAGE 14], but do not print the full likelihood. A faithful formal representation of the smoothing idea is a leaf-level pseudo-count update:
\[
\hat p_{\ell,s}=\frac{n_{\ell,s}+\alpha m_{\ell,s}}{n_{\ell}+\alpha},\qquad \alpha\geq 0,
\]
where \(n_{\ell,s}\) is the count of outcome class \(s\) in leaf \(\ell\), \(m_{\ell,s}\) is the prior probability mass, and \(\alpha\) is the prior strength in pseudo-count units. As \(\alpha\to 0\), the estimate approaches the raw leaf frequency and overfits; as \(\alpha\to\infty\), it approaches the prior. The paper’s MAE table gives the empirical result: catalytic XGBoost with team quality 3.744 points, Yurko+ 3.749, Baldwin+ 3.753, Baldwin 2021 without team quality 3.803, Yurko 2018 3.808, Burke 2009 3.833, Romer 2006 3.864 [PAGE 15]. The units are EP points, so lower is better.

The dependence operator is effective sample size. For clustered binary outcomes with cluster size \(m\) and intraclass correlation \(\rho\), a standard approximation is
\[
n_{\mathrm{eff}}=\frac{n}{1+(m-1)\rho},\qquad n\ \text{in plays}.
\]
Here \(n\approx 500{,}000\) plays but the independent cluster count is about \(4{,}000\) games [PAGE 17]. As \(\rho\to 1\), \(n_{\mathrm{eff}}\to n/m\), the number of games; as \(\rho\to 0\), the play count is recovered. This is why the paper says the raw play count is “nowhere near enough data to experience the full variability of the nonlinear and interacting variables” [PAGE 17].

The uncertainty operator is the bootstrap action proportion:
\[
\hat p_d(x)=\frac{1}{B}\sum_{b=1}^{B}\mathbf 1\!\left[\operatorname*{argmax}_{d'\in\mathcal A}\hat V_b(x,d')=d\right],
\]
where \(B\) is the number of randomized cluster bootstrap fits. This is exactly the slide’s “boot %” [PAGE 20]. A derived information measure is the action entropy in bits:
\[
H(x)=-\sum_{d\in\mathcal A}\hat p_d(x)\log_2\hat p_d(x)\ \text{bits}.
\]
\(H(x)=0\) bits means one action is selected in every bootstrap fit; \(H(x)=\log_2 3\approx 1.585\) bits means the bootstrap is uniform across the three actions. This separates point-estimate edge size from decision certainty.

Assumptions and breakdown regimes are exact enough to state. The EP/WP estimates assume conditional exchangeability within the training population, stable team-quality effects, enough support in \((x,q)\) space, and a model class that can approximate the nonlinear interactions without memorizing noise. Breakdown occurs in these regimes: omitted-quality bias when \(q\) is correlated with \(x\) and action selection; overfitting when model degrees of freedom are large relative to \(n_{\mathrm{eff}}\); dependence breakdown when \(\rho\) is high and intervals treat plays as independent; support singularity when a state-action pair has near-zero training support, so smoothing dominates and the estimate is prior-driven; endgame discontinuity when \(t\to 0\) and the WP surface becomes step-like, so smooth tree extrapolation is unreliable; and physical infeasibility when the probability of executing the action is near zero, in which case the statistical value is not the operative value. The paper’s conclusion is appropriately bounded: “Team quality must be incorporated into EP/WP models” and “We need shrinkage to mitigate overfitting in our ML models” [PAGE 28].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs from average-team expected points to state-rich win probability to uncertainty-aware decision theory. Romer 2006 used instrumental variables regression with yard position and all plays, scoring the next score in points; Burke 2009 used linear regression with a spline on first-down plays; Yurko et al. 2018 used multinomial logistic regression with yard position, down, log yards-to-go, time remaining, goal-to-go, and under-two-minutes; Baldwin 2021 used XGBoost with yard position, down, yards-to-go, time remaining, timeouts, home, roof type, and era [PAGE 5]. The retrocausal reading is not that the earlier models were stupid. They were reasonable for the data and computing norms of their moment. But later work retroactively reveals what the earlier average-team framing concealed: team quality was not a minor covariate, and the play-by-play sample was not an independent sample.

The scientific genealogy has three branches. The first is econometric program evaluation: omitted variables and selection bias. The paper’s phrase “selection bias problem; EP models are especially wrong/biased” [PAGE 8] belongs to that branch. The second is Bayesian shrinkage and regularization: the catalytic prior idea, Laplace smoothing, and the warning that “ML models tend to aggressively overfit” [PAGE 13]. The third is survey-statistics and clustered inference: the randomized cluster bootstrap and the effective-sample-size correction. The paper’s own contribution is to connect these branches to fourth-down decision making, rather than treating them as separate technical footnotes.

Multi-week traps follow directly. Trap one is the average-team fallacy: a coach or analyst uses a marginal EP surface as if it were conditional on the actual quarterback, offensive line, and defense. This trap repeats every week because the model output is stable while the team is not. Trap two is overfitting to recent play-by-play: a high-capacity model absorbs week-specific noise and then presents the noise as a strategic edge. Trap three is pseudo-replication: treating 500,000 plays as 500,000 independent observations, which produces overconfident intervals and overconfident recommendations. Trap four is point-estimate fundamentalism: ignoring the bootstrap distribution and treating a 2 percent point estimate as a certainty. Trap five is the opposite overcorrection: using “humility” as a blanket excuse to ignore small but confident edges. The paper explicitly warns that “Eeking out these tiny (but confident) edges are valuable because many more of them occur per game” [PAGE 25]. The multi-week discipline is therefore to recalibrate team quality, propagate cluster uncertainty, and distinguish uncertain edges from confident edges across the season, not just in one game.

The deepest retrocausal point is that the paper’s title is not anti-analytics. It is a correction to the genealogy of analytics: the field moved from “what is the average value?” to “what is the value for this team in this state, and how much do we actually know?” That is a more mature decision theory, and it retroactively makes the earlier point-estimate recommendations look less like science and more like point forecasts wearing scientific clothing.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive problem is that the analyst models the coach, the coach models the analyst, and both model the game clock. At level zero is the raw value \(V(x,d)\). At level one is the analyst’s recommendation \(d^{*}(x)\). At level two is the coach’s belief about the analyst’s reliability: does this model know my quarterback, my kicker, my offensive line, and my opponent? At level three is the analyst’s anticipation of the coach’s likely override and the coach’s anticipation of the analyst’s uncertainty language. The paper’s “Coach’s discretion” recommendation in Example 1 is a level-two communication act: the model has a point estimate, but the bootstrap distribution is too diffuse to justify a hard command [PAGE 23]. The paper’s “Punt (but not a tragedy if the coach overrides)” in Example 2 is a level-three communication act: the edge is tiny, but the model is confident enough that an override is a real loss, not a coin flip [PAGE 25]. The paper’s “Strong Go!” in Example 3 is the case where the bootstrap distribution is concentrated enough that discretion would be an overcorrection [PAGE 27].

Crisis habit regression is the first failure mode. Under fourth-down pressure, a coach may revert to the conservative habit: punt in the middle of the field, kick a field goal in the red zone, avoid the go decision because a failed conversion is visibly embarrassing. The statistical model cannot fix that by shouting a point estimate. If the model says “go” with a small edge and a wide bootstrap, the coach’s habit is not irrational from a risk-management perspective; the model has not earned the right to override habit. The paper’s humility is precisely the admission that “Far fewer 4th down decisions are as obvious as analysts widely claim” [PAGE 28]. A recursive theory of mind should therefore model the coach’s prior as a real prior, not as a bias to be scolded.

The counter-trap is the second failure mode. An analyst who knows the coach is conservative may overcorrect by presenting every go decision as a strong go, or a coach who distrusts analytics may use “uncertainty” as a universal veto against every model recommendation. Both are counter-traps: the correction becomes a new systematic error. The paper’s bootstrap framework is the antidote because it separates the two axes. In Example 1, the point estimate favors field goal by 2 percent but the data do not justify trust; the recommendation is discretion [PAGE 22-23]. In Example 2, the point estimate favors punt by only 0.05 percent, but the edge is confident; the recommendation is punt, with override tolerance [PAGE 24-25]. In Example 3, the point estimate favors go by 3.5 percent and the model is certain; the recommendation is strong go [PAGE 26-27]. The counter-trap is to collapse all three into one slogan, either “always trust the model” or “never trust the model.”

The clock is the third failure mode. Time remaining, score differential, and timeouts make the WP surface nonlinear and discontinuous near the end of halves. The paper’s random-walk simulation shows that even a simplified football-like process needs wide intervals to achieve 90 percent coverage [PAGE 19], and real football is more complex. Under clock pressure, the coach’s habit, the analyst’s counter-trap, and the model’s extrapolation all collide. The recursive discipline is to make the clock explicit in the communication: a 2 percent WP edge with 12 minutes left is not the same object as a 2 percent WP edge with 12 seconds left, because the effective sample and the continuity of the value surface differ. The paper’s warning that “Making fourth down decisions based solely on WP point estimates, which are highly uncertain, leads to overconfident decisions” [PAGE 20] is ultimately a theory-of-mind warning: the model must represent not only the game-state but also the limits of its own knowledge, and the coach must be able to act on that representation without either blind obedience or reflexive veto.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical, biomechanical, and weather layers veto statistical recommendations when the statistical value is computed over a state distribution that does not contain the actual execution constraints. The formal proof is simple. Let \(x_s\) be the statistical state and \(x_p\) the physical state: kicker leg strength, plant-leg health, snap and hold quality, quarterback mobility, offensive-line health, wind, rain, footing, and surface. The true value is
\[
V(x_s,x_p,d)=\mathbb E[Y\mid x_s,x_p,d].
\]
A statistical model that omits \(x_p\) estimates
\[
V_s(x_s,d)=\int V(x_s,x_p,d)\,f(x_p\mid x_s)\,dx_p.
\]
If the actual \(x_p\) is outside the support of the training distribution, or if \(f(x_p\mid x_s)\) is not the right conditional distribution, then \(V_s(x_s,d)\) is an extrapolation, not a conditional value. The veto rule is: if the action is physically infeasible,
\[
\mathbb P(\text{execute}\mid d,x_p)\approx 0,
\]
then the statistical edge is not admissible. If the action is feasible but the execution distribution is degraded,
\[
V(x_s,x_p,d)\leq \epsilon V_{\max}+(1-\epsilon)V_{\mathrm{fail}},
\]
and if that upper bound falls below the best alternative, the action is vetoed even if the statistical point estimate favors it. The units are probabilities for execution, points for EP, and dimensionless probability for WP.

The paper gives the canonical physical-quality example on page 7: “What is the probability that an “average” NFL kicker sinks a 70 yard field goal in neutral weather conditions?” and “What is the probability that Justin Tucker sinks a 70 yard field goal in neutral weather conditions?” [PAGE 7]. That is a combined biomechanical and team-quality veto. An average kicker at 70 yards is not the same random variable as Justin Tucker at 70 yards. If the model does not condition on kicker quality and weather, it averages over a support that is mostly empty for that distance. The Baldwin 2021 model includes roof type and home [PAGE 5], but roof type is a coarse weather proxy; it does not capture wind gusts, rain, temperature, or field condition at the moment of the kick. The paper’s team-quality results also imply a biomechanical veto: “Quarterback quality of both teams matters more than other aspects of team quality!” [PAGE 11]. If the quarterback is injured and the season-long quality metric has not adjusted, the model is using a stale physical state.

The cross-layer adjudication order should be: first physical feasibility, second biomechanical execution probability, third weather-conditional value, fourth statistical EP/WP value, fifth uncertainty. This order is not anti-model; it is the correct conditioning order. A statistical recommendation can be perfectly rational on its own layer and still be vetoed on a lower layer. The paper’s conclusion supports this humility: “Team quality must be incorporated into EP/WP models” [PAGE 28], and the thought experiment on kickers shows that quality and environment are not optional covariates. The veto proof is therefore: if \(V_s(x_s,d)\) is computed without the actual \(x_p\), then the recommendation is only as valid as the assumption that \(x_p\) is drawn from the training distribution. When that assumption fails, the physical layer has adjudicative priority.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Team-quality counterfactual veto. Take a fourth-down state that the average-team model marks as a clear go. Replace the quarterback-quality covariate from league-average to backup-level, holding yard position, down, distance, time, and score differential fixed. Verifiable check: refit the model with and without \(q\), then compare the bootstrap action proportions \(\hat p_{\text{Go}},\hat p_{\text{FG}},\hat p_{\text{Punt}}\). Prediction: the no-quality model will preserve a spuriously strong go recommendation, while the quality-conditioned model will either shrink the edge or flip to punt/field goal. This prediction follows from the paper’s result that “All 4 offensive quality metrics are more impactful than the defensive quality metrics” and that quarterback quality is the most important quality aspect [PAGE 11]. The corresponding RLVR veto is binary: if the recommendation is unchanged after a material quarterback downgrade, the model has failed the team-quality conditioning test.

Scenario 2: Physical-feasibility counterfactual veto. Take a 70-yard field-goal state under neutral weather. Swap the kicker from an average NFL kicker to Justin Tucker. Verifiable check: estimate \(\mathbb P(\text{make}\mid \text{distance}=70,\text{kicker})\) with and without kicker quality; compare the model’s action ranking. Prediction: for the average kicker the make probability is near the physical boundary, so field goal should not be the model’s recommendation; for an elite kicker the probability rises but remains a rare-event extrapolation. The paper’s page 7 thought experiment is exactly this comparison [PAGE 7]. The RLVR veto fires when a model trained without kicker quality assigns a positive EP edge to a 70-yard attempt that the physical execution distribution does not support.

Scenario 3: Uncertainty counterfactual veto. Take the CHI at NYJ Week 12 2022 example. The point estimate says “FG looks like a strong decision based on the WP point estimate (+2%)” [PAGE 22]. Verifiable check: run the randomized cluster bootstrap and compute the proportion of bootstrap fits that select field goal, go, and punt. Prediction: the bootstrap distribution will be diffuse enough that the correct recommendation is “Coach’s discretion” [PAGE 23], not a hard field-goal command. A second prediction is that forcing the point-estimate action across many similar states will not produce a reliable cumulative edge, because the uncertainty is not a cosmetic interval; it is a statement about the effective sample of roughly 4,000 games [PAGE 17]. The RLVR veto is: if \(\hat p_{d^{*}}\) is below the prespecified confidence threshold or if the top actions overlap in the bootstrap, the point-estimate argmax is vetoed in favor of discretion or a lower-variance action.

A fourth check, though the prompt asks for three, is the tiny-but-confident edge. In WAS at IND Week 8 2022, “Punt has a tiny estimated edge over Go (+0.05%)” [PAGE 24], but “we are confident that the edge is there” [PAGE 25]. The verifiable prediction is that the bootstrap action proportion for punt should be high even though the point-estimate edge is tiny. That is the counter-trap test: a model that vetoes every small edge as noise will fail this case, while a model that treats every small edge as certain will fail Example 1. The paper’s own conclusion is the correct reward shape: “Far fewer 4th down decisions are as obvious as analysts widely claim” [PAGE 28], but the non-obvious ones are not all equal; some are uncertain, some are tiny-but-confident, and some are strong and certain.
</RLVR_COUNTERFACTUAL_VETOES>