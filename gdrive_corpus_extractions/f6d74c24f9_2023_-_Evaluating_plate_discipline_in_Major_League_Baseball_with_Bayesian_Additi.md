---
source: "2023 - Evaluating plate discipline in Major League Baseball with Bayesian Additive Regression Trees - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2023"
pages: 26
model: deepseek/deepseek-v4.1-flash-1017
words: 7986
---

<NATIVE_REASONING>
We need answer. Need produce XML sections, >=1000 words depth. Must not mention betting lines odds spreads. Need cite exact [PAGE N] markers and verbatim quotes from source. Need formal LaTeX equations, units, assumptions, singularity/breakdown. Need sections exact XML. Need think trace >=400 words. Need source operators/equations. Retrocausal genealogy. Recursive theory of mind. Cross-layer veto adjudication. RLVR counterfactual vetoes 3 scenarios predictions. Need comply strict invariants. No betting lines. Could mention baseball game state, plate discipline. Need be careful "R|swing" expected runs? Source uses E[R|swing]. We can formalize.

Need analyze paper: Yee & Deshpande NESSIS 2023. It introduces framework for optimal swing decision using contextual factors, BART for P(strike), P(contact), E[R|swing,outcome], uncertainty propagation. Traditional O-Swing%, Z-Swing% only location. Need cite page quotes. Need exact page markers and verbatim quotes. We can quote:
[PAGE 6]: "It is not enough to just look at location..."
[PAGE 7]: "Traditional plate discipline metrics: O-Swing%, Z-Swing%" and "Treats every pitch inside (outside) the strike zone the same"
[PAGE 8]: "Introduce framework for evaluating plate discipline which accounts for contextual factors in addition to location" "Framework facilitates uncertainty quantification in evaluations"
[PAGE 10]: "The optimal decision is to swing if R|swing = 1 > R|swing = 0"
[PAGE 11]: "The optimal decision is to swing if E[R|swing = 1] > E[R|swing = 0]"
[PAGE 12]: "E[R|swing = 1, contact = 1]" etc and "P(contact)" "1 −P(contact)"
[PAGE 13]: "E[R|swing = 1, strike = 1]" etc "P(strike)" "1 −P(strike)"
[PAGE 15]: "P(strike) = f(game state, personnel, location, ...)" "Nonlinear" "Complex interactions" "Functional form difficult to specify" "Propagate uncertainties from constituent models"
[PAGE 16]: "Bayesian Additive Regression Trees (BART; see Chipman, et. al.)" "Nonparametric Bayesian model that approximates the target function through an ensemble of piecewise constant step functions" "Generates samples from the posterior distribution of target function"
[PAGE 17]: "Use same approach for modeling P(contact) and E[R|swing, outcome]"
[PAGE 20]: "utilizes contextual information about the game when the pitch was thrown" "Bayesian approach facilities uncertainty propagation from constituent models to our determination of the optimal swing decision" (note typo facilities)
[PAGE 21]: "Addition results such as summary metrics can be found in the pre-print"

Need derive formal. Let decision S ∈ {0,1}, 1 swing, 0 take. Let outcome contact C, strike Z, run value R maybe expected runs in remainder of plate appearance/inning? Source just R. Define expected utility:
U(S) = E[R | do(S)]. Optimal a*(x)=1 if E[R|S=1,x] > E[R|S=0,x].
Decompose swing branch via contact:
E[R|S=1,x] = E[R|S=1,C=1,x] P(C=1|S=1,x) + E[R|S=1,C=0,x] P(C=0|S=1,x).
Take branch? Source diagram page 13 shows strike for swing? Actually framework: Decision Swing/Take. Swing branch E[R|swing=1] decomposed into contact and strike? Page 13: E[R|swing=1, strike=1], E[R|swing=1, strike=0], P(strike), 1-P(strike). Hmm maybe take branch? Let's inspect: Page 12 under E[R|swing=1]? Diagram: Decision -> E[R|swing=1], E[R|swing=0]. Swing/Take. Page 12 adds E[R|swing=1, contact=1], E[R|swing=1, contact=0], P(contact), 1-P(contact). Page 13 adds E[R|swing=1, strike=1], E[R|swing=1, strike=0], P(strike), 1-P(strike). It could be under E[R|swing=0]? The diagrams not clear. It likely decomposes take into called strike vs ball? But labels given "E[R|swing = 1, strike = 1]" etc? Page 13 text says exactly E[R|swing = 1, strike = 1] and E[R|swing = 1, strike = 0]. Hmm weird. Maybe swing branch has strike outcome (swinging strike?) and contact branch; then contact branch? Actually a swing can result in contact or no contact; if no contact, strike or ball? A swing can be swinging strike (strike) or foul (strike) or ball? If contact, outcome may be strike? The slide says E[R|swing=1, strike=1] under maybe contact=0 branch. Wait page 13 includes both contact and strike? The source text just lists. We can formalize decomposition using C and Z; no need exact tree. Need avoid overclaiming. We can define:
E[R|S=1,x] = Σ_{c,z} E[R|S=1,C=c,Z=z,x] P(C=c,Z=z|S=1,x)
Or if contact and strike conditional nested: E[R|S=1,x] = E[R|S=1,C=1,x]P(C=1|S=1,x)+ [E[R|S=1,C=0,Z=1,x]P(Z=1|S=1,C=0,x)+ E[R|S=1,C=0,Z=0,x]P(Z=0|S=1,C=0,x)]P(C=0|S=1,x). But page 12/13 likely separate branches. Need mention source labels. We can state page 12 exposes contact decomposition and page 13 exposes strike decomposition, but slide text labels both as swing=1; exact nesting not fully specified in extract. Good.

Need BART formal: For binary outcomes like P(strike), BART uses probit link: P(Y=1|x)=Φ(Σ_{m=1}^M g_m(x;T_m, μ_m)), with trees. For continuous E[R], y = Σ g_m(x)+ε, ε~N(0,σ²). Units: probability dimensionless [0,1]; expected runs in runs (R). Location in feet or inches? Source doesn't specify units, but MLB pitch location often feet; we can say coordinates in ft if provided; source not explicit. Game state: outs [count], balls/strikes [count], inning? Personnel: batter/pitcher/umpire identifiers categorical. Need mention no SI for probability; runs is not SI but baseball unit. The invariant says SI/information/probability units. We can state dimensionless probability/nats/bits for entropy if used. Expected runs in runs (not SI), location in feet (if source data use ft; source not specify). Maybe use "source does not state units; for formal notation let ℓ ∈ ℝ² in whatever native pitch-coordinate units (commonly ft)." But need formal units. We can provide.

Singularity/breakdown regimes: 
- Positivity/overlap violation: no comparable swings/takes for covariate x, predictive P(C|S=1,x) or P(Z|S=1,x) cannot be identified; BART posterior extrapolates piecewise constant, uncertainty undercovers.
- Deterministic outcomes: P(C)=0 or 1, P(Z)=0/1; Bernoulli likelihood boundary; logit/probit infinite; BART prior regularizes but posterior concentration at boundaries; downstream expected utility variance zero? Actually if P=0/1, decomposition term multiplied; singularity in log-odds; sampling unstable.
- Sparse tree partitions: terminal node with n=0 or one class; posterior for μ unstable; need prior.
- Umpire/personnel/context categorical levels unseen: random effects? BART can split but unseen level no data; if no hierarchy, no identification.
- Run expectancy model: end-of-inning state absorbing; E[R] depends on base-out state; if game state includes current score? The source says game state, personnel, location. Need maybe run value R not defined in extract; breakdown if R scale ambiguous (runs per plate appearance vs win probability). 
- Causal interpretation: swing decision is not randomized; E[R|swing=1,x] and E[R|swing=0,x] are potential outcomes. Observed data only one decision per pitch. Need conditional exchangeability/no unmeasured confounding. If pitcher targets based on hitter tendency, confounding; BART outcome regression not causal unless assumptions. This is key gray-zone audit. Source calls optimal decision; but observed swing/take is choice, counterfactual other branch unobserved. Need state assumption. This is formal: a*(x)=1{ E[Y(1)|x] > E[Y(0)|x] }. Need Y(s). Identifiability requires Y(1),Y(0) independent of S given X or known assignment; in observational baseball, not guaranteed. The paper's framework estimates E[R|swing=s,x] from data; if decision is endogenous, that's not necessarily E[Y(s)|x]. We can mention uncertainty propagation via posterior samples: for draws k, compute Δ^(k)(x)=E[R|S=1,x]^(k)-E[R|S=0,x]^(k); posterior probability optimal = Pr(Δ>0|data). But source only says uncertainty quantification, no exact formula. We can derive.

Need retrocausal genealogy: "retrocausal" perhaps historical/scientific lineage and multi-week traps. Need discuss lineage: plate discipline metrics O-Swing/Z-Swing from sabermetrics; swing decisions; BART Chipman, George, McCulloch 2010; Bayesian additive regression trees; causal decision theory; expected run matrix (RE24) and win probability; signal detection theory? Need multi-week traps: treating location-only metrics as causal; ignoring count/game state; overfitting BART; leakage; using same data for model validation; umpire effects; pitch framing; selection bias; not propagating uncertainty; comparing BART to logistic regression without proper CV; confusing predictive and prescriptive; using retrospective optimal decision labels as ground truth; not accounting for player-specific tendencies; small sample for individual batter; "some pitches harder to evaluate" page 6. Need mention multi-week traps: 1) location-only metric reification; 2) pool all players and ignore heterogeneous decision thresholds; 3) use called-strike probability without umpire/personnel and count; 4) leakage from future pitches/game state; 5) posterior sampling convergence failures; 6) causal overreach with observational swing/take. Need "retrocausal genealogy" maybe historical lineage from "optimal decision" to Bayesian decision theory; "retrocausal" means tracing current metric backwards to assumptions. We can phrase.

Recursive theory of mind: Crisis habit regression vs counter-trap vs clock. Need interpret: crisis habit regression = under pressure reverting to traditional O-Swing/Z-Swing location-only; counter-trap = overcorrecting by treating BART as oracle/causal; clock = decision timing? We need address recursive theory of mind: modeling batter, pitcher, umpire beliefs. The paper uses personnel and game factors. Need discuss nested expectations: batter predicts pitcher's pitch distribution; pitcher predicts batter's swing threshold; umpire's strike call; each agent's belief about others. BART models P(strike) with umpire and location; P(contact) with batter/pitcher; E[R] with game state. Recursive ToM: optimal swing depends on expected umpire call, which depends on umpire's latent zone, which depends on game state/personnel; pitcher's pitch selection depends on batter's discipline; batter's swing decision depends on pitcher's strategy; equilibrium. Need caution: paper's framework is single-agent decision given covariates, not full game-theoretic equilibrium; no explicit opponent model. Crisis habit regression: in high-leverage counts, players/analysts revert to simplistic "don't swing at balls" heuristics. Counter-trap: "always swing if model says" ignoring uncertainty and adversarial pitcher adaptation. Clock: pitch clock? 2023 MLB pitch clock? The paper 2023; pitch clock affects decision time. Need not mention betting. Could mention "clock" as temporal decision window: pitch timer reduces deliberation, increases habit; model must be fast and calibrated. Need mention recursive ToM with uncertainty propagation: posterior predictive over umpire call, contact, run value. Need treat "clock" as both pitch clock and model lifecycle clock: retraining, drift.

Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need prove vetoes override model? Need discuss physical constraints: batter biomechanics (swing time, bat speed, launch angle), pitch movement, weather (wind, rain, temperature) affect contact/run. Source mentions location, game state, personnel; not weather/biomechanics. Need adjudicate: if a physical layer veto says impossible/unsafe, model's optimal swing cannot be realized; veto. Need formal: feasible set F(x) from biomechanical constraints (time to contact, reach envelope, bat path), weather (wind vector, precipitation, visibility), physical pitch characteristics (velocity, spin). The optimal decision becomes constrained: a* = argmax_{a∈F(x)} E[R|a,x]. If E[R|swing=1]>E[R|take] but swing infeasible (e.g., pitch outside reach envelope, batter injured, lightning), veto take. Need "proof": use constraint qualification; if F excludes swing, then only take feasible; if both feasible, model ranks. Weather affects P(contact) and E[R]; if weather not in X, omitted variable; BART can't condition. Cross-layer veto maybe "physical/biomechanical/weather veto proof" means prove when external layer should override statistical model. We can state: A statistical preference is necessary but not sufficient for action; action requires feasibility. Formal: a* = 1{Δ(x)>0 and swing∈F(x)} plus safety predicate. If Δ>0 but swing infeasible, take. If Δ≤0 but take infeasible? Take always feasible? Usually yes. Need mention if take impossible? No. Biomechanical: reaction time t_r; pitch flight time t_f = d/v; swing decision window; if t_f < t_r + t_swing? Actually batter can commit. If pitch location outside kinematic reach at contact time, contact probability near zero. Weather: wind can alter pitch trajectory and fly ball run value; rain/lightning safety. Need cite source doesn't include these; page 15 says "P(strike) = f(game state, personnel, location, ...)" ellipsis allows other covariates but not explicit. Page 6 says "Analysis depends on location, game factors, and personnel" and "Some pitches are harder to evaluate that others". We can cite. Need avoid inventing equations? We can present formal constraint equations, not fake ratios. That's okay.

RLVR counterfactual vetoes: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement Learning with Verifiable Rewards? In context, need 3 counterfactual veto scenarios that can be verified. Need predictions. Must not betting. We can propose:
1. Umpire-label counterfactual: If P(strike) model omits umpire ID and is retrained without umpire, then on held-out pitches with high umpire disagreement, optimal-swing labels flip; prediction: calibration slope deviates, Brier score increases, posterior uncertainty widens; veto model version if flip rate > threshold. Verifiable via held-out log loss/Brier and calibration.
2. Contact/run-value decomposition counterfactual: replace BART contact model with constant base rate while keeping strike model; predict subset of pitches where sign of Δ changes; validate by posterior predictive checks and held-out decision accuracy against observed run outcomes. Veto if sign flips in >x% and no improvement in log score.
3. Feasibility/weather counterfactual: add physical veto layer (pitch outside reach envelope or unsafe weather) to otherwise model-optimal swing; prediction: model-optimal labels in infeasible region have near-zero contact probability and negative realized run value; veto statistical recommendation if realized outcomes contradict feasibility. Need "RLVR" maybe "reinforcement learning from verifiable rewards" scenario: an agent trained on verifiable reward (run value) could exploit model error. Counterfactual veto: If reward is verifiable but delayed/confounded, agent may learn to swing at pitches that maximize immediate model R but not actual. Need three scenarios with predictions and measurable criteria. We can phrase as "RLVR counterfactual vetoes" with scenario, intervention, verifiable prediction, veto condition. Need no betting.

Need >=1000 words. XML sections. Think trace >=400 words. Total maybe 2500 words. Need exact sections and tags. No extra outside? We can include all. Need cite exact [PAGE N] markers and verbatim quotes. Need quote exact. Need ensure quotes match source text. Use quotation marks and page markers. The source text has weird ´Angel Hern´andez; can quote maybe not necessary. We can cite page 5 for personnel? "Batter: Shohei Ohtani" "Umpire: ´Angel Hern´andez". Could quote. Need exact page marker and verbatim quote. Let's gather.

Need structure:
<THINK_TRACE> ... >=400 words. Include multi-hop derivation and gray-zone audit. Discuss sourcing, equations, assumptions, identifiability, BART, uncertainty, causal, feasibility. Cite pages. Mention source is slide deck 26 pages but only 7 content slides plus appendix. Need page citations. Need no betting lines.

<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown. Need list operators:
- Decision indicator A
- Expected utility U(a,x)
- Optimal policy
- Decomposition page 12/13
- BART probit/continuous
- Posterior uncertainty propagation
- Units and assumptions
- Breakdown regimes.

Need ensure LaTeX formal. Use \(...\) and \[...\]. Need mention "R" expected runs; "runs" unit. Probability dimensionless. Information units if entropy maybe bits/nats. Location in pitch-coordinate units; source doesn't specify. Game state counts. Personnel categorical. "contact" and "strike" Bernoulli.

Need exact singularity/breakdown:
- Boundary probabilities p∈{0,1}: logit/probit singular; posterior at boundary; downstream uncertainty collapse or non-identification.
- Empty terminal nodes / separation.
- Positivity for swing/take: no observed counterfactual branch for same x; causal estimand not identified.
- Unseen categorical levels (umpire, batter, pitcher) no pooling.
- Omitted weather/biomechanics: model misspecification.
- Run-value scale nonstationarity: game state distribution shift; extrapolation.
- Posterior sampling non-convergence; tree ensemble label switching? BART not label switching but MCMC.
- Multiple comparisons? Not needed.

<RETROCAUSAL_GENEALOGY> Historical/scientific lineage & multi-week traps. Discuss from O-Swing/Z-Swing to BART. "Retrocausal genealogy" maybe trace assumptions backward. Cite pages 7, 8, 16, 20. Multi-week traps as above. Need >=? Not specified but include substantial.

<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock. Need discuss nested beliefs, batter/pitcher/umpire. Cite page 5 batter/umpire, page 15 personnel, page 6 game factors. Crisis habit regression: reverting to location-only. Counter-trap: BART oracle/causal. Clock: pitch clock/temporal. Need mention recursive ToM not in paper; it's an extension/audit. Use "The deck does not formalize a game-theoretic equilibrium; it estimates conditional expectations." That's important. Need say source supports personnel/location/game state but not opponent beliefs. Page 8 "contextual factors in addition to location"; page 15. Need no overclaim.

<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof. Need formal constrained optimization. Cite page 6 "Some pitches are harder to evaluate that others"; page 15 "P(strike)=f(game state, personnel, location, ...)" ellipsis. Need define feasibility set F. Provide proof: if swing infeasible, any policy selecting swing violates feasibility; constrained optimum take. If both feasible, statistical ranking only. Weather as omitted covariate; veto if safety or physical infeasibility. Need maybe "proof" with proposition. Formal:
Let F(x)⊆{0,1} be feasible actions. The admissible policy is a†(x)=argmax_{a∈F(x)} E[R|a,x]. Since if 1∉F(x), F(x)={0}, so a†=0 regardless Δ. If 0∈F(x) always, then a†=1 iff Δ>0 and 1∈F(x). This is proof. Add safety predicate Safe(x)=1; F includes safety. If Safe=0, F=∅? Then no play; game suspended. But action? We can say veto/abort. Good.

<RLVR_COUNTERFACTUAL_VETOES> 3 scenarios. Need predictions. Use verifiable metrics: held-out Brier, log loss, calibration, sign-flip rate, posterior predictive p-values, realized run value. Need not mention odds. Define thresholds generically? We can say "pre-registered threshold" but need verifiable. Could specify "if sign-flip rate exceeds 5% on held-out pitches with posterior P(Δ>0)∈[0.4,0.6]" etc. But avoid inventing? It's fine. Need 3. Maybe include actual predictions:
1. Umpire-omission veto: remove umpire ID; prediction: P(strike) calibration worse for umpire-specific edges; optimal labels flip near zone boundary; posterior uncertainty undercovers. Verifiable via held-out Brier decomposition. Veto if Brier increases and flip rate >5% on ambiguous pitches.
2. Contact-model ablation veto: replace BART contact with league-average; prediction: sign of Δ flips on high-contact pitches; realized run value of model-optimal swings lower than full model. Veto if held-out decision value decreases and flips concentrated where P(contact) posterior wide.
3. Feasibility/weather veto: impose biomechanical reach and weather safety; prediction: model-optimal swings outside reach envelope have near-zero contact and negative realized run value; unsafe weather yields no valid play. Veto if model recommends infeasible action. Use verifiable: contact rate, run value, safety log. Good.

Need ensure "ZERO BETTING LINES": Don't mention spreads/totals/moneylines/odds. We can mention "run value" not betting. Avoid "over/under". Good.

Need maybe mention "expected runs" not "runs scored" maybe okay.

Need answer in XML. Need be careful with special chars? XML tags can contain LaTeX with < >? In XML, must escape < and > if inside text? The final answer can be raw XML with LaTeX containing < maybe problematic. We can use \lt or avoid. But since not parsed? Better avoid raw < in text or escape as &lt;. But sections contain equations with > and <. In XML, text content can contain > okay, but < must be escaped. Need use \le, \ge, \lt, \gt or &lt;. To be safe, avoid literal < and > in text, use \lt, \gt, \le, \ge. But XML tags need <. Equations can use \lt. Use "if Δ \gt 0". Use "P \in [0,1]". That's fine. Avoid "<" in text. Ampersand? avoid. Quotes okay. Need use tags exactly. The section names include underscores. Good.

Need maybe ">=400 words" think trace. Need count. We'll write robust.

Let's draft.

THINK_TRACE: Need deep multi-hop derivation and gray-zone audit. 400+ words. Start: Source is slide deck. Main derivation: decision problem. Traditional O-Swing/Z-Swing location-only. Paper says not enough. Define state x includes location, game state, personnel. Let A=1 swing. Need compare E[R|A=1,x] vs E[R|A=0,x]. Page 10/11 quotes. Then decompose swing branch: contact probability and run values; strike probability and run values. Page 12/13. Then BART for each component because P(strike)=f(...) nonlinear complex. Page 15/16. Uncertainty propagate posteriors. Then compute posterior Δ. Gray zone: observed swing/take is not randomized; counterfactual branch missing. Need causal assumptions. BART is predictive, not causal. "optimal" is conditional on measured x and model; not structural. Missing weather/biomechanics. Umpire ID, personnel; small samples. Boundary probabilities. Source doesn't specify units, R scale, validation. Appendix pages only titles; no validation numbers. Need note. Multi-hop: from location-only to context to BART to posterior to decision. Need mention page 20. Good.

SOURCE_OPERATORS_AND_EQUATIONS: Need formal. Let's write with subsections maybe text. Include equations. Need page citations. Need exact quotes. Use \[ ... \]. Need units. Need assumptions. Breakdown. Need cite pages. Could be long. 1000 total. Fine.

Potential issue: "R|swing = 1" source might mean runs? We can define R as run value random variable. Source says E[R]. Good.

Equation:
\[
a^\star(x)=\begin{cases}1,&\mathbb E[R\mid A=1,x]\gt \mathbb E[R\mid A=0,x],\\0,&\text{otherwise.}\end{cases}
\]
Need \gt safe? In LaTeX, \gt is not standard? It is a macro? Use ">" is okay in XML text? > is allowed. < not. We can use ">" literal. Use \mathbb{E}. The text has > allowed. Fine. If equation has < avoid. Use \le. Good.

Decomposition:
\[
\mathbb E[R\mid A=1,x]=\sum_{c\in\{0,1\}}\mathbb E[R\mid A=1,C=c,x]\,\Pr(C=c\mid A=1,x)
\]
and strike nested:
\[
\Pr(Z=1\mid A=1,x)=f_Z(x)
\]
Need not overcommit. Page 13 labels strike with swing=1. We can say "The slides display strike branch quantities as ..." and "the nesting is not fully specified in the extracted text". Good.

BART:
\[
\Pr(Y=1\mid x)=\Phi\left(\sum_{m=1}^{M} g_m(x;T_m,\mu_m)\right)
\]
for binary; continuous:
\[
Y=\sum_{m=1}^{M} g_m(x;T_m,\mu_m)+\epsilon,\quad \epsilon\sim N(0,\sigma^2)
\]
Units: Y runs. g_m piecewise constant. Posterior draws. Need cite page 16 quote.

Uncertainty:
\[
\Delta^{(k)}(x)=\mathbb E^{(k)}[R\mid A=1,x]-\mathbb E^{(k)}[R\mid A=0,x]
\]
\[
\Pr(a^\star(x)=1\mid \mathcal D)=\frac{1}{K}\sum_k 1\{\Delta^{(k)}(x)>0\}
\]
Need mention not explicitly in deck but natural formalization of "uncertainty quantification" [PAGE 8]. Good.

Assumptions: conditional exchangeability, consistency, positivity, correct covariates, BART prior support, MCMC convergence, stable run-value definition, no unmeasured weather/biomechanics if causal. Units. Breakdown.

RETROCAUSAL_GENEALOGY: Need maybe 400 words. Trace O-Swing/Z-Swing. "O-Swing%" = swing rate outside zone; "Z-Swing%" inside. Page 7 quote. BART lineage Chipman et al. Page 16. Decision theory lineage expected utility. Retrocausal: current "optimal" label depends on model of strike, contact, runs. Multi-week traps: 
- Week 1 trap: location-only reification.
- Week 2: pooling players/umpires.
- Week 3: leakage and nonstationarity.
- Week 4: causal overreach.
- Week 5: metric chasing/validation.
Need "multi-week traps" maybe describe a multi-week research plan. Include exact quotes. Good.

RECURSIVE_THEORY_OF_MIND: Need maybe 300 words. Crisis habit regression vs counter-trap vs clock. Let's define:
- Crisis habit regression: under high leverage/uncertainty, agents revert to O-Swing/Z-Swing heuristic; model must detect and regularize.
- Counter-trap: treating posterior mean as certainty; over-swinging at model-optimal pitches; missing adversarial pitcher response.
- Clock: pitch clock and retraining clock; need real-time inference and drift monitoring.
Recursive ToM: batter models pitcher's distribution over pitch types/locations, pitcher models batter's swing threshold, umpire's zone model; BART conditions on personnel and game state but does not solve equilibrium. Use page 5 batter/umpire, page 15. Need mention "crisis habit regression vs counter-trap vs clock" explicitly.

CROSS_LAYER_VETO_ADJUDICATION: Need 300 words. Formal constrained. Cite page 6, 15. Weather/biomechanics. Proof. "Veto proof" with proposition. Need include equations:
\[
F(x)\subseteq\{0,1\},\quad a^\dagger(x)=\arg\max_{a\in F(x)} \mathbb E[R\mid a,x].
\]
If \(1\notin F(x)\), \(F(x)=\{0\}\), so \(a^\dagger=0\). If safety predicate \(S(x)=0\), action set empty and play aborts. If both feasible, statistical \(\Delta\) ranks. Weather: wind vector \(\mathbf w\), temperature, precipitation; omitted from X, so model is not conditioning. Biomechanics: reach envelope \(\mathcal R(t)\), swing time. Need no fake ratios. Use constraints. Good.

RLVR_COUNTERFACTUAL_VETOES: Need 3. Verifiable. Maybe use "RLVR = reinforcement learning with verifiable rewards" but not necessary. Need "counterfactual vetoes" with predictions. We can define each:
1. Umpire-omission counterfactual. Intervention: remove umpire ID and retrain. Verifiable prediction: on held-out ambiguous edge pitches, strike posterior shifts and optimal decision sign flips; calibration worsens. Veto if sign-flip rate >5% and Brier/log loss worse with non-overlapping posterior intervals. Need avoid "odds". Good.
2. Contact-decomposition ablation. Intervention: replace P(contact) BART with constant league base rate. Prediction: Δ sign flips for pitches where contact probability posterior mass is split; realized run value of recommended swings lower. Veto if decision value lower on held-out and flip concentration in high-uncertainty region.
3. Feasibility/weather override. Intervention: add physical veto layer. Prediction: model-optimal swings outside reach envelope have near-zero contact; unsafe weather has no valid action. Veto if model recommends infeasible. Verifiable with contact rate, run value, safety log, kinematic envelope. Good.

Need maybe "RLVR" in each: verifiable reward = realized run value / contact label. Use "held-out". Good.

Need maintain >=1000 words. We'll write maybe 3000. Need not too verbose? Desired oververbosity 5. But requirements detailed. We can produce around 2500-3000 words. Need ensure all sections.

Need exact page citations and verbatim quotes. Let's ensure quotes exact:
PAGE 6: "It is not enough to just look at location..." exact includes ellipsis? Source: "• It is not enough to just look at location..." yes. We can quote with ellipsis as verbatim? It includes ellipsis. Better quote "It is not enough to just look at location..." exact. 
PAGE 7: "Traditional plate discipline metrics: O-Swing%, Z-Swing%" exact. "Treats every pitch inside (outside) the strike zone the same" exact.
PAGE 8: "Introduce framework for evaluating plate discipline which accounts for contextual factors in addition to location" exact. "Framework facilitates uncertainty quantification in evaluations" exact.
PAGE 10: "The optimal decision is to swing if R|swing = 1 > R|swing = 0" exact. Note spaces.
PAGE 11: "The optimal decision is to swing if E[R|swing = 1] > E[R|swing = 0]" exact.
PAGE 12: "E[R|swing = 1, contact = 1]" exact; "P(contact)" and "1 −P(contact)" exact (minus sign? Source has "1 −P(contact)" with U+2212). We can quote "1 −P(contact)".
PAGE 13: "E[R|swing = 1, strike = 1]" exact; "P(strike)".
PAGE 15: "P(strike) = f(game state, personnel, location, ...)" exact. "Nonlinear" "Complex interactions" "Functional form difficult to specify" "Propagate uncertainties from constituent models" exact.
PAGE 16: "Bayesian Additive Regression Trees (BART; see Chipman, et. al.)" exact. "Nonparametric Bayesian model that approximates the target function through an ensemble of piecewise constant step functions" exact. "Generates samples from the posterior distribution of target function" exact.
PAGE 17: "Use same approach for modeling P(contact) and E[R|swing, outcome]" exact.
PAGE 20: "utilizes contextual information about the game when the pitch was thrown" exact. "Bayesian approach facilities uncertainty propagation from constituent models to our determination of the optimal swing decision" exact (facilities typo). 
PAGE 21: "Addition results such as summary metrics can be found in the pre-print" exact.
PAGE 5: "Batter: Shohei Ohtani" exact; "Umpire: ´Angel Hern´andez" exact? It has "Umpire: ´Angel Hern´andez". We can quote "Batter: Shohei Ohtani" and "Umpire: ´Angel Hern´andez". Good.
PAGE 4: "2 Outs" "1-2". Could cite game state. 
PAGE 6: "Analysis depends on location, game factors, and personnel" exact. "Some pitches are harder to evaluate that others" exact.
PAGE 7: "Analysis relies solely on the location of the pitch" exact.
PAGE 8: "contextual factors in addition to location" exact.
PAGE 15: "estimate each intermediate quantity as functions of their conditioning variables" exact.
PAGE 16: "Ideal for modeling complex interactions due to tree-based structure" exact; "Do not need to specify the functional form of the function" exact.
PAGE 20: "Intermediate quantities estimated using Bayesian additive regression trees which outperform traditional approaches" exact. Good.

Need mention appendix pages 23-26 only titles: "Appendix – Strike Model Validation" etc. Could cite that no numeric validation in extract. Exact quotes: "Appendix – Strike Model Validation" [PAGE 23], "Appendix – Contact Model Validation" [PAGE 24], "Appendix – Expected Runs Model Validation" [PAGE 25], "Appendix – Additional Figures" [PAGE 26]. Good.

Need avoid saying "source pages provided" but cite. Good.

Potential issue: XML text contains "&" if using "R&D"? avoid. Contains "O-Swing%" okay. Contains "P(contact)" okay. Contains "1 −P(contact)" U+2212 okay. Contains "≥"? We can use words. XML text can include Unicode. Fine.

Need be careful with `<` in "if Δ > 0" is okay; but "<" not. We'll avoid literal "<" entirely. In equations use "\lt" maybe not standard. Use "\le", "\ge". For "less than" write "below". For interval "[0,1]" no issue. For "P \in (0,1)" no issue. Use ">" literal allowed. In XML, ">" is allowed in text. Good. But in tags? No. Use ">" inside text okay. For "→" okay. Use "≤" okay. No ampersand.

Need final only XML. Let's write.

Need ensure word count. Let's compose carefully. 

We should include "source operators and equations" with "Operator" list maybe:
- \(\mathcal D\) data
- \(x = (\ell, g, p)\) where \(\ell\) location, \(g\) game state, \(p\) personnel.
- \(A\in\{0,1\}\)
- \(C\in\{0,1\}\), \(Z\in\{0,1\}\), \(R\)
- \(f_Z, f_C, \mu_R\)
- BART ensemble \(\sum g_m\)
- posterior draws.

Need formal units:
- Probability: dimensionless, \(0\le P\le1\).
- Expected runs \(E[R]\): runs (baseball scoring unit).
- Location: source does not state coordinate units; represent as \(\ell\in\mathbb R^2\) in native pitch-tracking units; if feet, ft; if inches, in. Don't invent. Could say "not specified in extract" to be precise.
- Game state: outs integer 0-2, balls/strikes counts; inning integer; score difference integer. Personnel: categorical IDs. 
- Information units: if entropy used, bits or nats. But not needed. Maybe mention posterior probability dimensionless.
- Time: seconds for pitch flight/pitch clock if physical veto. Good.

Need "exact singularity/breakdown regimes": include formal. 
- \(p_Z(x)\in\{0,1\}\) or \(p_C(x)\in\{0,1\}\) gives logit/probit at infinity. For probit, \(\Phi^{-1}(p)\) infinite. 
- Empty terminal nodes: \(n_t=0\) or \(n_{t,1}=0\) or \(n_{t,0}=0\). 
- Positivity: \(\Pr(A=a\mid X=x)=0\) for one a. Since each pitch has only one observed action, causal contrast not identified without assumptions. Actually if no observed swings at x, E[R|A=1,x] not estimable. Good.
- Unseen personnel level: no data for umpire/batter/pitcher combination; BART piecewise constant extrapolates last split, not hierarchical.
- Omitted variable: weather/biomechanics not in X; if they modify R, model misspecified.
- Nonstationarity: run expectancy changes by season, park, rules; posterior predictive drift.
- MCMC nonconvergence: Rhat etc. Good.

Need "multi-hop derivation" in THINK_TRACE: Step 1 decision; Step 2 decomposition; Step 3 BART estimation; Step 4 posterior propagation; Step 5 constrained action. Good.

Need "gray-zone audit": 
- "R|swing" vs "E[R]" page 10 vs 11.
- "Strike" branch maybe "swing=1, strike=1" is ambiguous; need not trust slide diagram; define nested model explicitly.
- "optimal" = model-optimal not necessarily human-optimal.
- "outperform traditional approaches" page 20 but no metrics in extract; appendix only titles.
- "some pitches harder" page 6; uncertainty should be pitch-specific.
- "contextual factors" but weather not explicit. 
Good.

Let's write final. Ensure sections in order exact. Use opening `<THINK_TRACE>` closing. No extra.
</NATIVE_REASONING>

<THINK_TRACE>
The deck’s argument is a multi-hop decision-theoretic derivation, not a single metric. First, the paper rejects location-only plate discipline: “It is not enough to just look at location...” [PAGE 6], and it says “Analysis depends on location, game factors, and personnel” [PAGE 6]. Traditional metrics are explicitly “Traditional plate discipline metrics: O-Swing%, Z-Swing%” [PAGE 7], and the critique is that this “Analysis relies solely on the location of the pitch” [PAGE 7] and “Treats every pitch inside (outside) the strike zone the same” [PAGE 7]. The proposed contribution is to “Introduce framework for evaluating plate discipline which accounts for contextual factors in addition to location” [PAGE 8] and to provide “uncertainty quantification in evaluations” [PAGE 8].

The second hop is the decision rule. The slides move from a run-value contrast to an expectation contrast: “The optimal decision is to swing if R|swing = 1 > R|swing = 0” [PAGE 10], then “The optimal decision is to swing if E[R|swing = 1] > E[R|swing = 0]” [PAGE 11]. This is the core operator: compare posterior expected run value under swing versus take, conditional on the pitch’s covariates. The third hop is decomposition. Page 12 exposes contact-branch quantities “E[R|swing = 1, contact = 1]” and “E[R|swing = 1, contact = 0]” weighted by “P(contact)” and “1 −P(contact)” [PAGE 12]. Page 13 exposes strike-branch quantities “E[R|swing = 1, strike = 1]” and “E[R|swing = 1, strike = 0]” with “P(strike)” and “1 −P(strike)” [PAGE 13]. The extracted text does not fully specify the nesting of contact and strike branches, so a rigorous audit must state the assumed nesting rather than infer it from slide geometry.

The fourth hop is estimation. The desideratum is to “estimate each intermediate quantity as functions of their conditioning variables” [PAGE 15], with the example “P(strike) = f(game state, personnel, location, ...)” [PAGE 15]. The deck lists “Nonlinear,” “Complex interactions,” “Functional form difficult to specify,” and “Propagate uncertainties from constituent models” [PAGE 15]. The solution is “Bayesian Additive Regression Trees (BART; see Chipman, et. al.)” [PAGE 16], described as a “Nonparametric Bayesian model that approximates the target function through an ensemble of piecewise constant step functions” [PAGE 16]. It “Generates samples from the posterior distribution of target function” [PAGE 16], and the same approach is used for “modeling P(contact) and E[R|swing, outcome]” [PAGE 17]. The fifth hop is uncertainty propagation: posterior draws from the strike, contact, and run-value models induce a posterior distribution over the swing-versus-take contrast, so the “optimal” label is itself probabilistic. Page 20 summarizes that the framework “utilizes contextual information about the game when the pitch was thrown” and that the “Bayesian approach facilities uncertainty propagation from constituent models to our determination of the optimal swing decision” [PAGE 20].

The gray-zone audit is severe. The word “optimal” in the deck is model-optimal conditional on measured covariates, not automatically causal. A swing/take decision is observed, but the counterfactual branch for the same pitch is missing; estimating both \(E[R|swing=1,x]\) and \(E[R|swing=0,x]\) from observational baseball data requires positivity, consistency, and no unmeasured decision confounding. The deck does not state those assumptions. Also, BART is a predictive ensemble; it does not by itself identify a structural causal effect. The extract also does not give numeric validation: pages 23–26 are titled “Appendix – Strike Model Validation,” “Appendix – Contact Model Validation,” “Appendix – Expected Runs Model Validation,” and “Appendix – Additional Figures” [PAGES 23–26], but no metrics appear in the provided text. Finally, physical and weather covariates are not explicit; page 15’s ellipsis allows them, but page 6 only says “location, game factors, and personnel” [PAGE 6]. Thus the deck supports a contextual predictive decision framework, but it does not prove causal optimality, physical feasibility, or weather robustness without additional layers.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(A\in\{0,1\}\) be the action with \(A=1\) for swing and \(A=0\) for take. Let \(x=(\ell,g,p)\) collect pitch location \(\ell\), game state \(g\), and personnel \(p\). The source’s decision rule is the expectation contrast: “The optimal decision is to swing if E[R|swing = 1] > E[R|swing = 0]” [PAGE 11]. Formally,
\[
a^\star(x)=1 \quad \text{iff} \quad \mathbb E[R\mid A=1,x] \gt \mathbb E[R\mid A=0,x],
\]
and \(a^\star(x)=0\) otherwise. The deck first states the random-variable version “R|swing = 1 > R|swing = 0” [PAGE 10], then replaces it with the expectation version [PAGE 11]. The expectation operator is therefore central: the decision is not a raw outcome comparison but a posterior expected run-value comparison.

The contact decomposition is displayed with “E[R|swing = 1, contact = 1],” “E[R|swing = 1, contact = 0],” “P(contact),” and “1 −P(contact)” [PAGE 12]. Let \(C\in\{0,1\}\) indicate contact. A clean formalization is
\[
\mathbb E[R\mid A=1,x]
=\sum_{c\in\{0,1\}}
\mathbb E[R\mid A=1,C=c,x]\,
\Pr(C=c\mid A=1,x).
\]
The strike decomposition is displayed with “E[R|swing = 1, strike = 1],” “E[R|swing = 1, strike = 0],” “P(strike),” and “1 −P(strike)” [PAGE 13]. Let \(Z\in\{0,1\}\) indicate strike. If the strike branch is nested under no-contact, one may write
\[
\mathbb E[R\mid A=1,C=0,x]
=\sum_{z\in\{0,1\}}
\mathbb E[R\mid A=1,C=0,Z=z,x]\,
\Pr(Z=z\mid A=1,C=0,x).
\]
The extracted text labels the strike terms with “swing = 1” but does not fully expose the nesting, so the above is an explicit modeling assumption, not a verbatim slide claim. The point is that each intermediate quantity must be estimated as a function of conditioning variables: “P(strike) = f(game state, personnel, location, ...)” [PAGE 15].

For binary components such as \(P(strike)\) and \(P(contact)\), a BART probit form is
\[
\Pr(Y=1\mid x)=\Phi\!\left(\sum_{m=1}^{M} g_m(x;T_m,\mu_m)\right),
\]
where \(Y\in\{0,1\}\), \(\Phi\) is the standard normal CDF, \(g_m\) are piecewise constant tree functions, \(T_m\) are tree structures, and \(\mu_m\) are terminal-node parameters. The deck describes BART as an “ensemble of piecewise constant step functions” [PAGE 16] and says it “Generates samples from the posterior distribution of target function” [PAGE 16]. For the expected-runs component, a continuous BART form is
\[
R=\sum_{m=1}^{M} g_m(x;T_m,\mu_m)+\epsilon,
\qquad \epsilon\sim \mathcal N(0,\sigma^2),
\]
where \(R\) is measured in runs. The source does not explicitly state the link function or likelihood in the extracted slides, so the probit/continuous forms are standard BART formalizations consistent with the quoted “piecewise constant step functions” and posterior sampling language.

Posterior uncertainty propagation can be written with posterior draw \(k=1,\dots,K\):
\[
\Delta^{(k)}(x)
=\mathbb E^{(k)}[R\mid A=1,x]
-\mathbb E^{(k)}[R\mid A=0,x],
\]
\[
\Pr(a^\star(x)=1\mid \mathcal D)
=\frac{1}{K}\sum_{k=1}^{K}
\mathbf 1\!\left\{\Delta^{(k)}(x)\gt 0\right\}.
\]
This is a formalization of the deck’s “uncertainty quantification” [PAGE 8] and “uncertainty propagation” [PAGE 20]. Units: probabilities are dimensionless in \([0,1]\); expected run values are in runs; location is \(\ell\in\mathbb R^2\) in the native pitch-coordinate units, which the extract does not specify; game state includes integer outs and ball-strike counts; personnel are categorical identifiers. The deck’s examples include “Batter: Shohei Ohtani” and “Umpire: ´Angel Hern´andez” [PAGE 5], which shows that personnel are intended to enter the conditioning set.

Assumptions required for the full decision interpretation are: (i) the conditioning vector \(x\) contains all decision-relevant game, personnel, and location information; (ii) the run-value target \(R\) is consistently defined across game states; (iii) each constituent BART model has adequate posterior support and MCMC convergence; (iv) for causal reading of \(a^\star\), conditional exchangeability and positivity hold for swing and take; and (v) the posterior draw count \(K\) is sufficient to stabilize tail probabilities. The deck does not list these assumptions, so they must be added by the auditor.

Singularity and breakdown regimes are exact and important. First, boundary probabilities \(P(strike)\in\{0,1\}\) or \(P(contact)\in\{0,1\}\) put the probit/logit linear predictor at infinity; BART’s prior regularizes the fit, but the posterior can pile mass at a boundary and the downstream \(\Delta\) can become numerically unstable. Second, empty or one-class terminal nodes occur when a tree partition yields \(n_t=0\), \(n_{t,1}=0\), or \(n_{t,0}=0\); then the node parameter is prior-dominated rather than data-identified. Third, positivity fails if for a covariate region \(x\) there are no observed swings or no observed takes; then one of the two conditional expectations is not directly estimable, and the “optimal” contrast is extrapolation. Fourth, unseen personnel levels—new umpire, new batter, new pitcher, or a sparse personnel combination—are not hierarchically pooled in the extracted description; BART will use the nearest piecewise-constant partition, which can be misleading. Fifth, omitted physical or weather variables create model misspecification: if wind, rain, temperature, or biomechanical reach limits alter \(P(contact)\) or \(E[R]\), the BART model is not conditioning on them even though page 15’s ellipsis could admit them. Sixth, nonstationarity in run expectancy across seasons, parks, rules, or game states invalidates fixed posterior summaries; the model must be refit or dynamically calibrated. Seventh, MCMC nonconvergence or insufficient posterior draws breaks the uncertainty propagation step, because \(\Pr(a^\star=1\mid\mathcal D)\) is only as stable as the constituent posterior draws.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The retrocausal lineage runs from location-only swing rates to a Bayesian decision-theoretic plate-discipline model. Historically, O-Swing% and Z-Swing% compress plate discipline into whether a batter swings at pitches outside or inside the strike zone. The deck states the traditional metrics as “Traditional plate discipline metrics: O-Swing%, Z-Swing%” [PAGE 7], and its critique is that this “Analysis relies solely on the location of the pitch” [PAGE 7] and “Treats every pitch inside (outside) the strike zone the same” [PAGE 7]. The proposed correction is to “account for contextual factors in addition to location” [PAGE 8]. The scientific lineage is therefore: categorical zone indicator → location-only swing rate → contextual conditional expectation → Bayesian nonparametric regression → posterior decision rule. The BART lineage is explicitly cited as “Bayesian Additive Regression Trees (BART; see Chipman, et. al.)” [PAGE 16], and the method is characterized as a “Nonparametric Bayesian model that approximates the target function through an ensemble of piecewise constant step functions” [PAGE 16]. The decision-theoretic lineage is the expected-utility comparison “E[R|swing = 1] > E[R|swing = 0]” [PAGE 11], decomposed through contact and strike branches [PAGES 12–13].

Retrocausally, the current “optimal swing” label is not a primitive fact; it is generated by three upstream models—strike probability, contact probability, and expected runs—plus the chosen conditioning set. If any upstream model changes, the label can change retroactively. That is why the deck’s claim that intermediate quantities are “estimated using Bayesian additive regression trees which outperform traditional approaches” [PAGE 20] must be audited against validation evidence. The extract provides only appendix titles: “Appendix – Strike Model Validation” [PAGE 23], “Appendix – Contact Model Validation” [PAGE 24], “Appendix – Expected Runs Model Validation” [PAGE 25], and “Appendix – Additional Figures” [PAGE 26]. No numeric comparison appears in the provided text, so the “outperform” claim is not verifiable from the extract alone.

Multi-week traps. Week 1 trap: reifying location-only metrics because they are simple and familiar; the deck explicitly warns “It is not enough to just look at location...” [PAGE 6]. Week 2 trap: pooling all batters, pitchers, and umpires while ignoring personnel heterogeneity; the deck includes “Batter: Shohei Ohtani” and “Umpire: ´Angel Hern´andez” [PAGE 5], which signals that personnel belong in the conditioning set. Week 3 trap: treating BART as a drop-in replacement without checking posterior convergence, tree depth, or boundary behavior; the deck promises posterior samples [PAGE 16], but posterior samples are only useful if the sampler is converged. Week 4 trap: leaking future information—future pitches, future plate-appearance outcomes, or post-hoc game state—into covariates; this would inflate apparent decision accuracy and invalidate the “optimal” label. Week 5 trap: causal overreach. Observational swing/take data do not identify the counterfactual take for a pitch the batter swung at, nor the counterfactual swing for a pitch the batter took, without explicit assumptions. Week 6 trap: ignoring physical and weather layers; page 6 says “Some pitches are harder to evaluate that others” [PAGE 6], and page 15’s “P(strike) = f(game state, personnel, location, ...)” [PAGE 15] leaves room for omitted variables. Week 7 trap: metric chasing—optimizing a summary metric rather than the decision rule, and then mistaking a higher summary score for a better policy. The deck notes that “Addition results such as summary metrics can be found in the pre-print” [PAGE 21], so the summary metrics are external to the slide extract and must be checked independently.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind layer is not formalized in the deck, but it is implied by the conditioning variables. The batter’s swing decision depends on the batter’s model of the pitcher’s pitch distribution, the pitcher’s model of the batter’s swing threshold, and the umpire’s latent strike zone. The deck’s personnel examples—“Batter: Shohei Ohtani” and “Umpire: ´Angel Hern´andez” [PAGE 5]—show that person-specific context is intended. Page 15 then generalizes: “P(strike) = f(game state, personnel, location, ...)” [PAGE 15]. A recursive representation would let \(P(strike)\) depend on umpire identity and count, \(P(contact)\) depend on batter and pitcher identity and location, and \(E[R]\) depend on game state and contact/strike outcome. But the extracted framework estimates conditional expectations; it does not solve a strategic equilibrium. The pitcher is not modeled as best-responding to the batter’s threshold, and the umpire is not modeled as best-responding to game pressure. Thus the “optimal” decision is single-agent model-optimal, not game-theoretic equilibrium-optimal.

Crisis habit regression versus counter-trap versus clock. Crisis habit regression is the failure mode in which, under high uncertainty or high leverage, the analyst or player reverts to the traditional location-only heuristic: “O-Swing%, Z-Swing%” [PAGE 7], “Analysis relies solely on the location of the pitch” [PAGE 7]. The regression is cognitive: when posterior uncertainty is wide, the simple zone rule feels safer than a BART posterior. The counter-trap is overcorrection: treating the posterior mean as certainty and swinging whenever \(\Delta(x)\gt 0\), even when the posterior probability \(\Pr(a^\star=1\mid\mathcal D)\) is near 0.5 or when the model is extrapolating outside the data support. That is not Bayesian decision-making; it is posterior-mean idolatry. The clock is both literal and methodological. Literally, a pitch clock compresses the decision window, so the batter cannot run a slow deliberation; the model must be fast and calibrated. Methodologically, the model has a retraining clock: personnel change, umpire zones drift, and run expectancy shifts, so stale posteriors become miscalibrated. A recursive theory of mind must therefore include a meta-belief: the batter believes the pitcher believes the batter will take borderline pitches; the pitcher exploits that belief; the batter anticipates the exploitation; and the umpire’s call adds a third-order uncertainty. The deck’s uncertainty propagation [PAGE 20] is necessary but not sufficient for this recursive layer, because it propagates model uncertainty, not strategic uncertainty. The safe synthesis is: use the BART posterior to quantify the statistical decision contrast, then explicitly model or veto strategic and physical layers rather than pretending the statistical posterior already contains them.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The statistical recommendation must be adjudicated against physical, biomechanical, and weather feasibility. The deck’s decision rule is an expected-run comparison [PAGE 11], but an expected-run comparison is not an action feasibility proof. Page 6 warns “Some pitches are harder to evaluate that others” [PAGE 6], and page 15’s “P(strike) = f(game state, personnel, location, ...)” [PAGE 15] leaves an ellipsis that can include physical covariates, but the extracted slides do not explicitly model weather or biomechanics. The correct formal object is a constrained policy. Let \(F(x)\subseteq\{0,1\}\) be the set of actions that are physically and safely feasible at covariate state \(x\). The admissible policy is
\[
a^\dagger(x)=\arg\max_{a\in F(x)} \mathbb E[R\mid A=a,x].
\]
If swing is infeasible, \(1\notin F(x)\), so \(F(x)=\{0\}\) and \(a^\dagger(x)=0\) regardless of whether the unconstrained statistical contrast favors swing. If both actions are feasible, then \(a^\dagger(x)=1\) only if \(\mathbb E[R\mid A=1,x]\gt \mathbb E[R\mid A=0,x]\) and \(1\in F(x)\). If a safety predicate \(S(x)=0\) holds—for example, unsafe weather or a medical restriction—then the action set is empty and play must be suspended or aborted; the model cannot override safety.

Biomechanical veto proof. The batter has a finite reaction time, swing time, and kinematic reach envelope. Let \(\mathcal R(t)\) be the reachable bat-path region at contact time \(t\), and let \(\ell(t)\) be the pitch location at that time. If \(\ell(t)\notin \mathcal R(t)\), contact probability is effectively zero for that swing path, so the swing branch is physically infeasible even if the statistical model assigns it high expected run value. The veto is not a “fake ratio”; it is a set-membership constraint: \(\ell(t)\notin\mathcal R(t)\Rightarrow 1\notin F(x)\). Similarly, if the pitch flight time is below the batter’s minimum decision-plus-swing time, the swing action is not executable. Weather veto proof. Wind vector, temperature, precipitation, and visibility alter pitch motion, batted-ball flight, and player safety. If these variables are omitted from \(x\), the model’s \(P(contact)\) and \(E[R]\) are conditional on a coarser state; they are not conditional on the actual physical state. A weather veto is therefore an omitted-variable and safety override: when precipitation or lightning makes play unsafe, \(F(x)=\varnothing\); when wind or temperature materially changes run value, the statistical contrast must be re-estimated with weather in \(x\) or treated as out of support. The cross-layer adjudication rule is: statistical preference is necessary but not sufficient; feasibility and safety are lexicographically prior. The model can rank feasible actions, but it cannot make an infeasible action feasible.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios follow. Each uses a held-out intervention and a pre-registered prediction; each is checkable without any betting line.

Scenario 1: Umpire-omission counterfactual. Intervention: remove umpire identity from the strike model and retrain the BART ensemble, keeping all other covariates fixed. The deck includes “Umpire: ´Angel Hern´andez” [PAGE 5] and defines “P(strike) = f(game state, personnel, location, ...)” [PAGE 15], so umpire identity is a plausible conditioning variable. Prediction: on held-out borderline pitches near the strike-zone edge, the strike posterior will shift and the sign of \(\Delta(x)\) will flip for a nontrivial fraction of pitches; calibration will worsen, with higher Brier score and log loss on the held-out set, and posterior uncertainty will be undercovered if the model is treated as certain. Veto condition: veto the omitted-umpire model if the sign-flip rate exceeds a pre-registered threshold on ambiguous pitches and its held-out calibration is worse than the full model with non-overlapping posterior intervals. This is verifiable because the held-out outcomes and the strike labels are observed.

Scenario 2: Contact-decomposition ablation. Intervention: replace the BART contact model with a constant league-average contact probability while keeping the strike model and run-value model unchanged. Page 12 displays “P(contact)” and “1 −P(contact)” [PAGE 12], and page 17 says “Use same approach for modeling P(contact) and E[R|swing, outcome]” [PAGE 17]. Prediction: the ablated model will flip the swing/take sign \(\Delta(x)\) on pitches where the contact posterior is diffuse or where batter-pitcher personnel strongly shifts contact probability; realized run value of the ablated model’s recommended swings will be lower on held-out data than the full model’s recommendations. Veto condition: veto the ablation if its held-out decision value is lower and the flips are concentrated in the high-contact-uncertainty region. This is verifiable through held-out run outcomes and posterior predictive checks.

Scenario 3: Physical-feasibility and weather override. Intervention: add a hard feasibility layer \(F(x)\) that excludes swings outside the batter’s reach envelope or during unsafe weather, then compare the model’s unconstrained “optimal” labels with the constrained labels. Prediction: model-optimal swings that are physically infeasible will have near-zero observed contact rate and negative realized run value; unsafe-weather states will produce no valid play, so any model recommendation is void. Veto condition: veto any policy version that recommends an infeasible swing; verify with kinematic reach flags, contact outcomes, and safety logs. This is verifiable because feasibility is a deterministic set-membership check and contact is an observed binary outcome. The resulting prediction is that the constrained policy will not reduce feasible-action performance but will eliminate physically impossible recommendations.
</RLVR_COUNTERFACTUAL_VETOES>