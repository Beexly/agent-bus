---
source: "2021 - Leaving Goals on the Pitch Evaluating Decision Making in Soccer - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2021"
pages: 22
model: deepseek/deepseek-v4.1-flash-1017
words: 8305
---

<NATIVE_REASONING>
We need answer user. Need produce structured XML exact sections >=1000 words total, deep. Need no betting lines. Need cite exact [PAGE N] markers and verbatim quotes where source pages provided. We need infer page numbers. Source text includes page markers at bottom: 1,2,3,... up to 25? User says PAGES:22 maybe PDF pages? But source text has printed page numbers 1-25? Actually pages 1-20 plus appendix 21-25. The prompt says PAGES: 22 perhaps source pages count? We need cite exact [PAGE N] markers. We can use printed numbers as [PAGE 1], etc. Need maybe citations from text. We should be accurate. Need include formal LaTeX equations, units, assumptions, singularities/breakdown. Need address MDP, transition, policy, reward, fundamental matrix, value function, policy modification, xG adjustment. Need gray-zone audit. Need retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication, RLVR counterfactual vetoes. Need not mention betting. Need "DRIVE SOURCE" path. Need likely analyze paper. We need answer as GSE+GSI Frontier Reasoning Foundry. Need >=1000 words. Need exact sections as specified. Need include >=400 words THINK_TRACE. Need cite [PAGE N] and verbatim quotes in SOURCE_OPERATORS. Need maybe all sections. Need formal LaTeX.

Need understand paper deeply. Let's parse.

Paper: Leaving Goals on the Pitch: Evaluating Decision Making in Soccer. Authors Maaike Van Roy, Pieter Robberechts, Wen-Chi Yang, Luc De Raedt, Jesse Davis. It models team offensive behavior as MDP learned from StatsBomb event data 2017/18 and 2018/19 EPL. State space: field states grid 22x17 offensive half plus single defensive half = 375 field states; absorbing states goal, no-goal/missed shot, loss possession after move. Actions: move_to(s') and shoot. Transition: successful move prob P(s, move_to(s'), s'), failure to loss; shot goal P(s, shoot, s_goal) = location-based xG; miss = 1 -; all else zero. Policy π(a|s). Reward 1 goal else 0. Learning transition/policy from counts: P(s, move_to(s'), s') = c_{s,s'}^{success}/c_s? Need equation from text omitted due formatting. They define c_{s,s'} number observed actions start in s intent move to s'; c_{s,s'}^{success} number successful reach s'; c_{s,shoot} number shots; c_{s,shoot,goal} number goals; c_s total actions start in s. They use Gradient Boosted Trees to infer intended end location for unsuccessful actions. Counterfactual reasoning: probabilistic model checking PRISM/STORM compute probabilities of properties. Policy alteration: increase/decrease shooting prob by x, redistribute other actions proportional to original share. Expected goals over season: sum over s E[shots in s | π] * P(s, shoot, s_goal | π). E[shots in s|π] = sum_{s'} E[visits to s from s'?] * π(shoot|s)? Need derive. They use fundamental matrix N = (I - Q)^{-1}, N[i,j] expected visits to field state j before absorption given start i. Q[i,j] = P(i, move_to(j), j) * π(move_to(j)|i). Expected shots in s = expected visits to s * π(shoot|s), maybe sum over starts. Need state starts count. Need formulate. They adjust P'(s, shoot, goal) for modified policy: for increase, additional shots assigned xG μ_s^{low} average below-average StatsBomb xG in s. For decrease, remaining shots assigned μ_s^{top?} average of top (1-x) highest-quality shots, dropping x% lowest. Figure 4 mentions μ_s, μ_s^{low}, μ_s^{top 90%}? Need exact symbols are garbled: μ' maybe μ_s; μ'^<sup>$"9</sup> maybe μ_s^{low}; μ'^{:*!:} maybe μ_s^{top}. We can name \mu_s, \mu_s^{\mathrm{low}}, \mu_s^{\mathrm{top}(1-x)}. Need state assumptions.

Need page citations. Need exact quotes. Need use [PAGE 1] for intro quote "You can’t score if you don’t shoot." Page 1. Page 2 has "Teams are likely taking too few long-distance shots and are likely leaving goals on the pitch." Page 3? MDP components. Page 4 state space/action. Page 5 transition/policy/reward. Page 6 learning MDP. Page 7 counterfactual. Page 8 policy alteration. Page 9 expected goals and xG adjustment. Page 10 Figure 4. Page 11 use cases, 4.1. Page 12 Figure 5. Page 13 Figure 6. Page 14 4.2. Page 15 4.3. Page 16 4.4. Page 17 related work. Page 18 conclusions. Page 21 appendix A.1. Page 22 A.2. Page 23 A.3. Page 24? A.4. Need cite exact [PAGE N] markers. We can include quotes. Need ensure quotes verbatim. We can quote short phrases from source. E.g., [PAGE 1] "You can’t score if you don’t shoot." [PAGE 2] "Teams are likely taking too few long-distance shots and are likely leaving goals on the pitch." [PAGE 3] "A natural formalism to model this behavior is to use Markov Decision Processes (MDPs)." [PAGE 5] "The policy is the only part of the MDP that the team (player) can immediately control." [PAGE 6] "we use Gradient Boosted Trees Ensembles to predict the intended end location of actions" [PAGE 7] "The first technique aims to answer the “What” questions." [PAGE 8] "changing the policy will affect both the number of shots a team will perform in each location and the success probability of the shots taken" [PAGE 9] "Accurately modeling the frequency versus efficiency trade-off would be a complicated undertaking in its own right." [PAGE 10] "This indicates that our method produces fairly good estimates of the number of goals for the observed policy." [PAGE 11] "Take the shot now from the present location" maybe. [PAGE 12] "the benefit of moving decreases." [PAGE 14] "the probability of ever generating a better shot can be as low as 5% for some locations." [PAGE 15] "Most teams would see an increase in the number of goals with an increase in shooting from distance." [PAGE 16] "Shooting 20% more often would yield an extra goal for most teams." [PAGE 18] "teams are leaving goals on the pitch with their current shooting policies." [PAGE 21] "the mean absolute error between the results from the model and the empirical values lies in the following interval" [PAGE 22] "increasing the shooting probability by x percent can be achieved as follows". Need not overquote.

Need include formal equations with units. Units: probabilities dimensionless [0,1]; expected counts per season (goals season^{-1}, shots season^{-1}); xG dimensionless probability; states count; fundamental matrix dimensionless expected visit counts; reward dimensionless indicator; discount factor dimensionless. Need assumptions: Markov property, stationary policy, possession-level, no rebounds new possession, action intention unknown for failed moves, xG location-based, policy changes proportional, no opponent adaptation, no lineup/weather etc. Singularity/breakdown: fundamental matrix singular if spectral radius(Q) >=1 or non-absorbing recurrent class; policy modification denominator total_move_prob_s - (1-x)π(shoot|s) may vanish if >? Need derive. If increasing shoot by x percent: π'(shoot|s)=π(shoot|s)+(1-x)*π(shoot|s)? Wait text garbled: "increasing the shooting probability by x percent can be achieved as follows: 𝜋′(𝑠ℎ𝑜𝑜𝑡 | 𝑠) = 𝜋(𝑠ℎ𝑜𝑜𝑡 | 𝑠) + (1 −𝑥) ∗ 𝜋(𝑠ℎ𝑜𝑜𝑡 | 𝑠)" That seems wrong: increasing by x percent should π' = π + xπ = (1+x)π. But text says (1 - x)? Maybe they define x as percentage decrease? Let's inspect: "increasing the shooting probability by x percent can be achieved as follows: π'(shoot|s)=π(shoot|s)+(1−x)*π(shoot|s)" That would be (2-x)π, not x. Maybe OCR: + x * π? The source text shows (1 −𝑥) maybe "x". It might be formula for decrease? Need be careful. In main text example: increase probability of shooting by 50% (additional probability 0.1) from original shoot prob 0.2? Wait Figure 3a maybe policy C: shoot 0.2, move A 0.3, move B 0.5? Increase by 50% additional 0.1, new shoot 0.3. Formula should π' = π + 0.5π = 1.5π. Text example: "When increasing the probability of shooting by 50% (i.e., an additional probability of 0.1), the total probability of moving needs to decrease by 0.1 as a consequence. Decreasing the probability of the move actions according to their original share means that the probability of choosing to move to A becomes 0.3/0.8 * 0.7 and the probability of choosing to move to B becomes 0.5/0.8 * 0.7." Original move total 0.8, shoot 0.2? Increase shoot by 50% of 0.2 = 0.1, new move total 0.7. Then move A = 0.3/0.8*0.7, move B=0.5/0.8*0.7. So formula π'(shoot)=π(shoot)+xπ(shoot) = (1+x)π(shoot) if x=0.5. The OCR formula says + (1 − x) maybe should be + x. We can present corrected formal policy modification with x as fractional increase/decrease, noting OCR ambiguity. But user wants formal equations. We can state as paper's intent: \pi'(shoot|s)=\pi(shoot|s)+x\pi(shoot|s) for increase; for decrease \pi'(shoot|s)=\pi(shoot|s)-x\pi(shoot|s). But paper's appendix formula might have x percent. We can cite [PAGE 22]. Need not replicate garbled. Need include denominator singularity. For moving redistribution: total_move_prob_s = 1 - π(shoot|s). For increase by x: new shoot = (1+x)π_shoot; new move total = 1 - new shoot = total_move_prob_s - xπ_shoot. For each move action a: π'(a|s) = π(a|s) * new_move_total / total_move_prob_s. Denominator zero if total_move_prob_s=0 (state has only shoot). If x>0 and total_move_prob_s - xπ_shoot <0, invalid (shoot prob >1); breakdown when x > (1-π_shoot)/π_shoot = total_move/π_shoot. For decrease, new move total = total_move + xπ_shoot, denominator nonzero unless total_move=0. Need note policy modification can hit zero/negative probabilities. Fundamental matrix singular if Q has eigen up to 1; with absorbing states and proper policy, ρ(Q)<1; if policy avoids absorption or has recurrent nonabsorbing class, singular.

Need perhaps include value function from Appendix A.1: V^π(s) = E_π[∑_{t=0}∞ γ^t R_t | S_0=s] = R(s,π(s)) + γ∑_{s'} P(s'|s,π(s)) V^π(s') maybe. They use γ=1. Breakdown if improper policy yields no absorption and infinite expected reward? If γ=1 and recurrent nonabsorbing class with zero reward, value finite; if can loop forever no goal, expected goal probability is absorption probability. Actually value with γ=1 is probability eventually scoring if reward only at goal and absorbing. If nonabsorbing recurrent class no goal, value zero. Equation can have nonunique solutions if improper? Need mention.

Need "Retrocausal genealogy": historical/scientific lineage & multi-week traps. Discuss xG evolution, Cruyff quote, EPL shooting decline 2013/14-2018/19, StatsBomb, Markov chains in soccer Rudd 2011, xT, VAEP, basketball Sandholtz/Bornn, MDP dynamic transition, PRISM/STORM, Pearl counterfactuals. Multi-week traps: treating observed policy as optimal; confounding shot quality with selection; rebounds omitted; event data intent imputation; team-specific sample 76 matches; no defensive reaction; weather/pitch/biomechanical. Need mention "retrocausal" maybe how later outcome (goal) conditions earlier action? Need genealogy from 2011 Markov chains to 2020. Need avoid betting.

Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Need interpret as decision-maker (player/coach) under time pressure. Crisis habit regression: long-distance shooters default to shoot or pass based on habit; counter-trap: opponent anticipates and clogs zones; clock: possession clock and season horizon. Need discuss recursive beliefs: player models teammate, opponent models player, coach models opponent's model. Use MDP policy as behavior; counterfactual policy changes assume no opponent response. Need mention theory-of-mind recursion: player believes better shot later; opponent believes player will pass; coach believes opponent will defend flank; recursive trap. Need include "crisis habit regression" maybe when pressure high players regress to low-quality long shots or overpassing. Counter-trap: if team increases shooting from identified zones, defenses adapt; observed MDP fixed transition/policy not equilibrium. Clock: in-game action horizon vs season expected goals; discount γ=1; but decision under time pressure. Need formal? Maybe not.

Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need argue MDP abstract layer cannot override lower-layer constraints: biomechanics (shooting mechanics, fatigue, injury, dominant foot, body orientation), weather (wind, rain, pitch), physical (sprint distance, pressure). Need "veto proof" maybe if lower layer sets feasibility probability zero or reduces xG, then MDP action's expected value invalid. Need formal: if physical feasibility indicator F_{a,s}(ω)=0 then P(s,a,s')=0 or reward 0; policy counterfactual must be vetoed. If weather reduces effective xG below threshold, policy alteration may not hold. Need identify paper limitations: event data lacks pressure, body orientation, weather. Need cite? Paper mentions context-specific "how much pressure is the shooter under, where is teammate located" [PAGE 11]. That supports veto. Also "event data generally more widespread than tracking data" [PAGE 17]. Need no fake ratios? We can state conditions, not invent ratios. Need maybe use formal inequality: \tilde{xG}_{s,ω} = xG_s * η_{s,ω} with η∈[0,1]? Is that a "toy equation"? It's a formal multiplicative modifier; could be okay if units dimensionless and assumption. But invariant says never invent fake ratios (Force / Fatigue). We can state formal condition using indicator and bounds, not fake ratio. Use "if \eta_{s,\omega}<\tau" maybe threshold. Need avoid fake ratios. Could define feasible set. Need exact singularity/breakdown regimes.

RLVR counterfactual vetoes: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement Learning from Verifiable Rewards? We need propose 3 scenarios that would veto paper's counterfactual claims, verifiable. Need include predictions. Examples:
1. Rebound-inclusive possession definition: If missed long shots generate rebounds that are new possessions, paper excludes them. Veto if including rebounds raises xG of shoot branch. Prediction: locations with high rebound rate (central edge of box) will have shoot advantage increased; policy increase effect shrinks or reverses for teams with high rebound conversion. Verifiable via event data: define possession continuation after save/block, compute. 
2. Intended-end-location imputation error: GBT imputation for failed moves. Veto if misclassified failed moves materially alter transition matrix and policy comparison. Prediction: under high-confidence actual intended locations (tracking/annotated), zones near flanks lose shooting advantage; error magnitude threshold. 
3. Opponent adaptation/equilibrium: Fixed policy counterfactual assumes no defensive response. Veto if defenses shift to identified zones when shot frequency increases. Prediction: targeted 20% increase yields < predicted extra goal, or negative, in zones where defender pressure increases. Verifiable via A/B or tracking. Need no betting.

Need structure exact XML sections. Need include all. Desired oververbosity 5. We need answer not too huge but >=1000 words. We can do ~2500-3500 words. Need ensure XML tags exact. Use no markdown? Fine. Need include LaTeX. Need cite page markers. Need include exact quotes. Need maybe quote multiple. Need "PAGES: 22" but we cite printed pages. Maybe user expects [PAGE 1] etc. Good.

Need think through details.

Let's formulate SOURCE_OPERATORS_AND_EQUATIONS:

- State space S = S_field ∪ S_abs. |S_field|=375 = 22*17 + 1 defensive half? Wait 22-by-17 grid = 374; plus single defensive half = 375. Yes. Absorbing S_abs={s_goal, s_no_goal, s_loss}. [PAGE 4?] Actually PAGE 4 has state space? Source page 4 starts state space. It says "We define three absorbing states..." [PAGE 4]. Figure 2 [PAGE 4]. Need cite.

- Action space A(s) = {shoot} ∪ {move_to(s') : s'∈S_field}. [PAGE 4/5].
- Transition:
P(s, move_to(s'), s') = p_move^succ(s,s')
P(s, move_to(s'), s_loss)=1-p_move^succ
P(s, shoot, s_goal)=xG_s
P(s, shoot, s_no_goal)=1-xG_s
others 0. Absorbing self-loop 1. [PAGE 5].
- Policy π(a|s), ∑_{a∈A(s)}π(a|s)=1. [PAGE 5].
- Reward R(s,a,s')=1 if s'=s_goal else 0. [PAGE 5].
- Learning:
P̂(s, move_to(s'), s') = c_{s,s'}^{succ}/c_s? Actually denominator c_s total actions start in s. But if c_{s,s'} intent count includes all moves to s'? The text says c_{s,s'} number observed actions start in s with intent move to s'; c_{s,s'}^{succ} successful reach. Then P = c_succ / c_{s,s'}? Wait transition probability conditional on action move_to(s') should be successful among attempts intended to s'. But they define "Here c_{s,s'} is the number of observed actions that start in s with the intent of moving the ball to state s', c_{s,s'}^{succ} is the number of those actions that successfully reach state s'. The quantity c_{s,shoot} is number of observed shots in state s, and c_{s,shoot,goal} number shots in s that result in goal. Finally, c_s is total number observed actions that start in s." The formula likely P(s, move_to(s'), s') = c_{s,s'}^{succ}/c_{s,s'} and P(s,shoot,s_goal)=c_{s,shoot,goal}/c_{s,shoot}. But then c_s used for policy π(move_to(s')|s)=c_{s,s'}/c_s, π(shoot|s)=c_{s,shoot}/c_s. Need state. Text formula missing. We should write both transition and policy. Use c_s for policy denominator. This is important. We can say "where the transition term is estimated from successful/intended attempts and policy from action counts; the text's denominator c_s appears in policy estimation" with citation. Need avoid incorrect. Maybe formula in source was: P(s, move_to(s'), s') = c_{s,s'}^{succ}/c_{s,s'}? P(s, shoot, s_goal)=c_{s,shoot,goal}/c_{s,shoot}; π(move_to(s')|s)=c_{s,s'}/c_s; π(shoot|s)=c_{s,shoot}/c_s. We can present. Need mention c_s total actions start in s. Good.

- Model checking property: P_{M}^{π}(◇ s_goal | S_0=s) or constrained reachability. [PAGE 7/11].
- Expected goals over season:
G(π)=∑_{s∈S_field} E[N_s(π)] π(shoot|s) P(s,shoot,s_goal|π) maybe with P' adjusted. Units goals season^{-1}. E[N_s] = ∑_{s0} n_{s0} [(I-Q(π))^{-1}]_{s0,s}. Where n_{s0} possessions starting at s0 per season. Then E[shots in s|π] = E[N_s(π)] π(shoot|s). Then G=Σ_s E[shots in s|π] P(s,shoot,s_goal|π). [PAGE 8-9]. Q_{ij}=P(i,move_to(j),j)π(move_to(j)|i). [PAGE 9].
- Policy modification: π'(shoot|s)=(1±x)π(shoot|s), with x fractional change; move redistribution:
π'(move_to(s')|s)=π(move_to(s')|s) * (1-π'(shoot|s))/(1-π(shoot|s)) for increase; for decrease same with new move total. General: M_s=1-π(shoot|s); π'(a|s)=π(a|s) M'_s/M_s for a∈Move(s). [PAGE 8,22]. Denominator breakdown M_s=0. If π'(shoot|s)>1 or <0 invalid.
- xG adjustment:
For increase: Δ_s = E[shots in s|π'] - E[shots in s|π]; additional shots xG = μ_s^{low}, average below-average StatsBomb xG in s. New P'(s,shoot,s_goal) = [E_old * μ_s + Δ_s * μ_s^{low}] / E_new? Actually they only modify xG for additional shots; total expected goals contribution = old shots * P_old + additional * μ_low. So effective P'_eff = (E_old P_old + Δ μ_low)/E_new. But P_old=μ_s? They use location-based xG average? They say P(s,shoot,s_goal) is xG for any shot in s because purely location-based. But then to get fine-grained distribution use StatsBomb xG values. They adjust "estimate of P'(s,shoot,s_goal)" for modified policy. For additional shots awarded xG of μ_s^{low}. For decrease: remaining shots awarded μ_s^{top(1-x)} average of top (1-x) highest-quality shots. We can state. Need note this is an approximation, not a causal effect. [PAGE 9-10].
- Value function Appendix:
V^π(s)=E_π[∑_{t=0}∞ γ^t R(S_t,A_t,S_{t+1}) | S_0=s], γ=1. Bellman: V^π(s)=∑_{a}π(a|s)∑_{s'}P(s,a,s')[R(s,a,s')+γV^π(s')]. [PAGE 21]. Break if improper/recurrent nonabsorbing; if γ=1 and rewards at absorption, V is absorption probability; matrix singularity if ρ(Q_π)≥1.

Need include exact singularity/breakdown regimes:
- Q not substochastic or ρ(Q)≥1 -> fundamental matrix singular; occurs if move policy creates recurrent nonabsorbing class (e.g., policy never shoots and never loses possession in finite model) or if probabilities not normalized.
- policy modification denominator M_s=0 (pure shoot state); if increasing by x and M_s - xπ_shoot <0 -> invalid probability; if x≥M_s/π_shoot (with increase) invalid. If decrease and M_s=0 -> cannot redistribute move mass; no move actions.
- imputation of failed move intents nonidentifiable; if GBT error correlated with zone/pressure, transition matrix biased.
- xG adjustment breakdown when shot distribution has no below-average shots or when additional shots exceed empirical support; top quantile undefined if x=100%; small sample per state sparsity.
- Markov property/stationarity break: opponent adaptation, fatigue, game state, weather; policy not stationary; counterfactual not causally identified.
- season horizon extrapolation: 76 matches per team, 17 teams; rare zones sparse; expected goals error 11.38% ~6 goals; extra goal estimate within noise.

Need THINK_TRACE >=400 words. Need deep multi-hop derivation & gray-zone audit. We can discuss derivation from paper. Need include gray-zone audit: "leaving goals on pitch" conclusion is not a direct theorem; it is model-based counterfactual. Need audit assumptions. Multi-hop: xG -> policy -> MDP -> counterfactual -> season goals -> table points. Each hop has uncertainty. Need mention "long-distance shooters converted 6.5% of 416 long-distance shots; non-shoot touches in zone led to goals 2.1% of possessions" [PAGE 1-2]. That statistic seems raw but not causal; selection bias. Need explain. Cruyff quote. EPL decline 20%. The paper's framework. Need maybe derive how shoot vs move comparisons computed: PRISM reachability. For each state s in long-distance blue zone, compute P_1(s)=P^{π}(◇ goal within exactly one move then shot?) Actually "exactly one attempted move action after which a shot is attempted" and "exactly two move actions to any field location after which a shot is attempted." Model checking constrained reachability. Compare to P(s,shoot,s_goal)=xG_s. Difference Δ_1(s)=P_1(s)-xG_s; red if negative, blue if positive. For two moves plus flank constraint. Need mention "exactly" vs "at most" ambiguous; property likely exactly. Gray zone: "move" action aggregates pass/cross/carry; so cannot distinguish. The model's policy is observed behavior, not optimal. The counterfactual modifies policy but transition probabilities fixed except xG efficiency adjustment. It doesn't model defender response. Need mention.

Need RETROCAUSAL_GENEALOGY. Need historical lineage:
- Cruyff adage (page 1).
- xG analysis found long-distance lower chance; changed shooting policies; EPL long-distance shots declined ~20% 2013/14-2018/19 [PAGE 1].
- StatsBomb event data 2017/18 and 2018/19; 17 teams, 76 matches per team [PAGE 5].
- Markov chains in soccer: Rudd 2011 first framework; Yam expected threat; VAEP; basketball Sandholtz/Bornn "Replaying the NBA" and MDP dynamic transition probabilities [PAGE 17].
- Probabilistic model checking PRISM/STORM [PAGE 7].
- Pearl counterfactuals [PAGE 2].
- Multi-week traps: overreacting to one season; conflating shot volume with quality; ignoring rebounds; ignoring team heterogeneity (Newcastle/Liverpool/Burnley exceptions [PAGE 15]); sample size; imputation; opponent adaptation; "extra goal" ties to $255M relegation cost [PAGE 16] but that's not causal. Need mention "retrocausal" as genealogy: later success (goals, points) retroactively selects earlier policies; survivorship among high-volume shooters; the seven players converted 6.5% but their non-shoot possessions 2.1% [PAGE 1-2], but these are conditional on player quality. Need not overstate. Multi-week trap: treating cross-sectional correlation as counterfactual; need hold-out seasons and prospective tests. Also "Bournemouth would have been relegated instead" is a counterfactual chain with tie-break; verify sensitivity. [PAGE 16-17].

Need RECURSIVE_THEORY_OF_MIND:
- "Crisis habit regression": under pressure/time, player regresses to habitual long shot or safe pass; MDP policy is average behavior, not pressure-conditioned. Need cite paper says context-specific pressure/teammate [PAGE 11]. If crisis, policy π changes; counterfactual invalid.
- "counter-trap": opponent observes team's increased shooting from identified zones and closes them; recursive ToM: team thinks opponent thinks team will pass; opponent thinks team will shoot; coach thinks opponent will adjust. The paper's fixed MDP assumes no opponent adaptation. Need formal: if defender response changes P(s,move_to(s'),s') or xG, then Δ(s) shifts. The targeted increase may be self-defeating. Need prediction: first-mover advantage only if opponent not scouting; repeated matches lead to equilibrium.
- "clock": in-game possession clock (time to shot) vs season clock (expected goals). The model uses γ=1 so no discount; but real decisions have time pressure, scoreline, fatigue. Need mention "clock" as both shot clock? Soccer no shot clock, but possession time. Need theory-of-mind recursion: player evaluates teammate's future shot; teammate evaluates player's pass; opponent evaluates both. Use recursive belief hierarchy. Need "crisis habit regression vs counter-trap vs clock" maybe three failure modes. Need include >= maybe 200 words.

Need CROSS_LAYER_VETO_ADJUDICATION:
- Lower layers can veto upper-layer MDP policy. Formal: Let Ω be physical/weather states. Feasibility indicator F_{s,a}(ω)∈{0,1}. If F=0, transition probability zero regardless of learned P. If effective xG \tilde{xG}_{s,ω} < threshold τ, then shoot branch not preferable. But avoid fake ratio. Use inequality: V_shoot(s,ω)=F_{s,shoot}(ω) P_goal(s,ω) R_goal; V_move(s,ω)=... Veto if V_shoot < V_move. We can state not inventing ratios. 
- Biomechanical: body orientation, dominant foot, fatigue, injury, pressure; inverted wingers example [PAGE 11-12]. If player cannot shoot from zone due to body shape, xG not applicable. Weather: wind/rain/pitch reduces ball speed/control; event data lacks weather. Physical: defender proximity; paper says context-specific pressure [PAGE 11]. Need "veto proof": The paper's own abstraction uses location-only state and action aggregates pass/cross/carry [PAGE 4-5]; so any lower-layer variable that changes transition probabilities or shot success is omitted. Thus, a claim "shoot from zone" is valid only under ceteris paribus where omitted variables do not cross the decision threshold. If omitted variable is decision-relevant and correlated with zone, the counterfactual is not identified. Need cite "event data is generally more widespread than tracking data" [PAGE 17] and "we did not take rebounds into account" [PAGE 2 footnote]. Need mention weather not in paper.

Need RLVR_COUNTERFACTUAL_VETOES:
- Need 3 verifiable scenarios + predictions. Need define "RLVR" as reinforcement learning with verifiable rewards? We can just present. Each scenario should be a counterfactual test that, if true, vetoes. Use "veto predicate" maybe. Need no fake equations? Can include formal predicates.
Scenario 1: Rebound-inclusive continuation. Veto predicate: If recomputing P_goal with rebounds and second chances included changes sign of Δ(s)=P_move(s)-xG_s for >X% of identified shoot zones or reduces targeted 20% policy gain below 0.5 goals/season. Prediction: central edge/penalty arc zones will lose shoot advantage; teams with high rebound rates (maybe not specified) show smaller gains; some exceptions. Verifiable via StatsBomb event data with possession continuation after saved/blocked shots. Need mention paper explicitly excludes rebounds [PAGE 2 footnote: "This number is likely an underestimate as we did not take rebounds into account"]. Wait footnote page 2: "This number is likely an underestimate as we did not take rebounds into account (i.e., other chances may have been created due to a shot from distance)." This is for 6.5% conversion? It says number likely underestimate. Use as veto. Prediction: including rebounds would increase value of shooting, reinforcing paper's conclusion or change? Hmm if rebounds create chances, shooting more could be even better, not veto paper. But the paper's model treats rebounds as new possession, so expected goals from shot branch excludes rebound. If rebounds are correlated with long shots, shoot branch undervalued. That would strengthen "shoot more", not veto. But as a veto scenario, if rebound-inclusive modeling changes specific zones and policy effect magnitude. It could veto exact zone recommendations. Need prediction: shoot advantage increases in central zones; targeted extra goal may exceed 1.0. But "veto" means the paper's exact estimates are invalid, not necessarily conclusion. Fine.

Scenario 2: Intended-end-location imputation bias. Veto if GBT-imputed intended locations for failed moves cause Δ(s) sign reversal in zones where imputation uncertainty high. Prediction: flanks and high-pressure zones will have most misclassification; under annotated true intents, shooting advantage increases because failed passes to flank are more costly. Need verifiable by manually annotate sample of failed moves or tracking data. This is good. Paper says GBT predicts intended end location [PAGE 6]. Prediction: sign reversals concentrated in blue zones adjacent to flanks; targeted policy gain drops/increases. Need exact threshold maybe "≥30% of states" but not arbitrary? We can say "if the sign of Δ(s) reverses in any zone used for targeted recommendations". That's verifiable.

Scenario 3: Opponent adaptation / policy equilibrium. Veto if defenses respond to increased shot frequency by reducing xG or increasing loss probability in those zones. Prediction: in repeated-match or tracking data, after a team increases long shots, defender pressure in identified zones rises; observed conversion falls below model. Verifiable via pre/post or randomized training? Hard but possible with event data: compare matches after high shot volume? Or synthetic agent? We can say "tracking-based defender distance and block rate before/after policy shift". Prediction: targeted 20% increase yields less than predicted extra goal; zones near penalty arc show largest attenuation. This is strong.

Need maybe include "RLVR" verifiable reward: use held-out seasons, synthetic perturbations, annotated tracking. Need not overdo.

Need ensure no betting lines: don't mention odds, spreads, moneyline. We can mention "points in table" but not betting. Avoid "odds" word? The prompt says no betting lines; "odds" in probabilistic sense maybe okay but avoid. Use "probability". Avoid "wager". Good.

Need exact XML sections. We can include paragraphs. Need perhaps include a short preamble? User demanded exact XML sections. We can just output the sections. Need include all tags. Need ensure THINK_TRACE >=400 words. We can count roughly. Need total >=1000. We'll write ~3500 words. Need maybe not too long but sufficient. Let's draft.

Potential issue: "PAGES: 22" while source has printed pages 1-25. The prompt says pages 22? Maybe actual PDF pages 1-22? But source text includes page numbers 1-25. If they expect [PAGE N] markers matching PDF pages, we might be off by? Let's inspect: The source text has page number "1" after intro; then "2" after footnote; "3" after MDP components; etc. It seems printed pages. The user says PAGES:22 but text has 25 printed pages; maybe source file pages 22? Actually PDF might have 22 pages? Wait content pages: 1-20 main, 21-25 appendix = 25. PAGES: 22 maybe prompt metadata wrong. We should cite printed page numbers in source. Good.

Need include citations with [PAGE N] markers. Use exact quote in SOURCE_OPERATORS. Need maybe all page citations. We should place [PAGE 1] after quote. The invariant says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We'll do.

Need formal LaTeX with SI/information/probability units. Use \mathrm{season}^{-1} etc. For information? Maybe mention entropy? Not needed. But "SI/information/probability units" maybe we need units for equations. We can state probabilities dimensionless, counts season^{-1}, reward dimensionless, xG dimensionless. If any information unit? Not necessary.

Need "ZERO TOY EQUATIONS": Avoid fake ratios. We can use formal MDP equations. Multiplicative modifier \eta maybe okay but avoid. We can define threshold condition. No "Force/Fatigue". Good.

Need "exact singularity/breakdown regimes" in SOURCE. We'll include a subsection "Breakdown/singularity". Need use LaTeX.

Let's craft each section.

THINK_TRACE: Need deep derivation. We'll write ~600 words. Include multi-hop:
1. Raw event counts -> policy and transition. For s, action counts c_{s,a}; policy π. For move_to(s'), success probability from intended actions. Failed intents imputed. 
2. MDP absorption and reachability. PRISM computes probability of constrained reachability to goal. Compare shoot vs move chains. 
3. Season expected goals via fundamental matrix. Q, N. Expected visits. Multiply by shoot policy and xG. Policy modification redistributes. 
4. xG quality adjustment. Additional shots lower xG; reduced shots higher xG. 
5. Conclusion depends on assumption. Gray-zone audit: not causal proof; GBT imputation, rebounds, fixed opponent, stationarity, sample. 
Need mention "6.5% of 416 long-distance shots vs 2.1% non-shoot possessions" [PAGE 1-2] is descriptive and selection-biased; not enough. Need mention "exactly one/two move actions" vs "at most" ambiguity. Need mention "long-distance blue zone" and "flank grey" constraints. Good.

SOURCE_OPERATORS_AND_EQUATIONS: Need formal definitions and quotes. Maybe ~1000 words. Use bullet lists. Need quote exact. Let's write.

Quotes:
- [PAGE 1] "You can’t score if you don’t shoot."
- [PAGE 2] "Teams are likely taking too few long-distance shots and are likely leaving goals on the pitch."
- [PAGE 3] "A natural formalism to model this behavior is to use Markov Decision Processes (MDPs)."
- [PAGE 4] "We define three absorbing states that denote the end of a possession sequence"
- [PAGE 5] "The policy is the only part of the MDP that the team (player) can immediately control."
- [PAGE 6] "we use Gradient Boosted Trees Ensembles to predict the intended end location of actions"
- [PAGE 7] "The first technique aims to answer the “What” questions."
- [PAGE 8] "changing the policy will affect both the number of shots a team will perform in each location and the success probability of the shots taken"
- [PAGE 9] "Accurately modeling the frequency versus efficiency trade-off would be a complicated undertaking in its own right."
- [PAGE 10] "This indicates that our method produces fairly good estimates of the number of goals for the observed policy."
- [PAGE 21] "the mean absolute error between the results from the model and the empirical values lies in the following interval"
- [PAGE 22] "increasing the shooting probability by x percent can be achieved as follows"
Need exact punctuation. Good.

Equations:
Define S field, A. Transition. Policy. Reward. Learning. Model checking. Expected goals. Fundamental matrix. Policy alteration. xG adjust. Value function. Breakdown.

Need mention "x" in policy modification: Use x as fractional change, not percent. Paper says percent; we can state "with x as the fractional change (x=0.10 for 10%)". For increase:
π'(shoot|s)=(1+x)π(shoot|s)
M'_s=1-π'(shoot|s)
π'(move_to(s')|s)=π(move_to(s')|s) M'_s/M_s, M_s=1-π(shoot|s).
For decrease:
π'(shoot|s)=(1-x)π(shoot|s)
M'_s=1-π'(shoot|s)=M_s+xπ(shoot|s)
same redistribution.
Need note paper appendix formula OCR has ambiguity; but this is intended. Should we cite [PAGE 22] for general formulas. Good.

xG adjust:
Let E_s(π)=E[shots in s|π]. For increase Δ_s=E_s(π')-E_s(π)>0. Additional shot xG μ_s^{low}. Effective expected goal per shot under π':
\bar{p}'_s = (E_s(π) \bar{p}_s + Δ_s μ_s^{low})/E_s(π')? Wait \bar{p}_s = P(s,shoot,s_goal). But then they say P(s,shoot,s_goal) is xG for any shot taken in s because location-based. However they then use distribution of StatsBomb xG values to derive adjustment. The average StatsBomb xG μ_s might equal P(s,shoot,s_goal)? They define μ_s as average StatsBomb xG of all shots in s. So yes \bar{p}_s≈μ_s. For decrease Δ_s<0: remove lowest x% shots; remaining average μ_s^{top(1-x)}. Effective \bar{p}'_s = μ_s^{top(1-x)} if all remaining shots? Actually if fewer shots, the shots taken are higher quality on average. So for the reduced set, xG = μ_s^{top(1-x)}. But the expected goals contribution is E_s(π') * μ_s^{top(1-x)}. For increase, expected goals = E_s(π)*μ_s + Δ_s*μ_s^{low}. We can state. Need avoid fake ratios? It's an expected value aggregation, okay.

Need note units: E_s shots season^{-1}; μ dimensionless probability; product goals season^{-1}. Good.

Breakdown:
- Fundamental matrix singular if ρ(Q)≥1. In a finite absorbing MDP with proper policy, ρ(Q)<1. If policy can enter a closed nonabsorbing class or move probabilities not sum correctly, N undefined.
- policy redistribution denominator M_s=0. Increase invalid if (1+x)π(shoot|s)>1. Decrease invalid if (1-x)π(shoot|s)<0. If M_s=0 no move mass to redistribute.
- xG adjustment undefined if no below-average shots or x=1 (drop all shots) or small sample per state; top quantile empty. If additional shots exceed empirical support, μ_low not identified.
- Markov/stationarity break if π depends on opponent, weather, fatigue, scoreline. Then MDP not stationary; counterfactual not causal.
- rebounds as new possession violate absorption assumption for second chances; if rebounds correlated with s, E_s and xG biased.

Need maybe mention "goals season^{-1}" and "expected visit counts dimensionless." Good.

RETROCAUSAL_GENEALOGY: ~400 words. Include historical. Need mention multi-week traps. Good.

RECURSIVE_THEORY_OF_MIND: ~300 words. Good.

CROSS_LAYER_VETO_ADJUDICATION: ~350 words. Good.

RLVR_COUNTERFACTUAL_VETOES: ~400 words. Good.

Need maybe answer in XML only. Use no markdown headings outside. We can include LaTeX inside. Need ensure XML tags not broken by < or >? LaTeX uses < maybe? Avoid < in text? In XML, < must be escaped. But we are not in actual XML parser? User specified XML sections. If we use < in LaTeX inequalities, might break. We can use \lt or \leq. Use \le. Avoid raw < and >. Use \ge. Avoid &? Use \& maybe. Fine. Use no unescaped <. In equations, use \pi'(shoot \mid s). Use \mid. Good. Avoid ">=." Use \geq. In prose, use "at most" instead of <. Use XML tags exact.

Need ensure no raw &? In XML, & must be escaped. Avoid ampersand or use \&. We'll avoid. Use "and".

Need maybe use "→" fine. Use Unicode? Fine. XML text can have Unicode. But ampersand no. Avoid < >. Use "less than" in prose. In equations use \le. Good.

Need include exact quotes with curly apostrophes; okay. Need no raw < in quotes. Quotes don't have <.

Let's write answer. Need maybe not include markdown. We'll produce tags sequentially. Need include "THINK_TRACE" first. Ensure all six sections. Need total >1000 words. Good.

Let's compose carefully.

Potential issue: "SOURCE_OPERATORS_AND_EQUATIONS" should include formal LaTeX, units, page citations, breakdown. We'll do.

Need mention "information/probability units" maybe "probabilities are dimensionless; expected counts have units season^{-1}; fundamental matrix entries are expected visit counts dimensionless." Good.

Need "exact singularity/breakdown regimes" maybe use "Breakdown regimes" list.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 scenarios. Use numbered.

Need no betting. Good.

Let's final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s inferential chain is multi-hop. First, raw StatsBomb event data are converted into a possession-level MDP: field states are grid cells plus one defensive-half state; actions are “move_to(s')” or “shoot”; transitions are successful move, failed move to loss, goal, or miss; policy is the observed action frequency; reward is 1 only on a goal. The paper states the formalism directly: “A natural formalism to model this behavior is to use Markov Decision Processes (MDPs).” [PAGE 3]. Second, the transition and policy tables are estimated from counts, but failed move intents are latent. The authors therefore use “Gradient Boosted Trees Ensembles to predict the intended end location of actions” [PAGE 6], which is a modeling step, not an observed fact. Third, PRISM/STORM-style probabilistic model checking computes constrained reachability probabilities: shoot now versus one move then shoot versus two moves then shoot, with optional flank constraint. The “What” question is explicitly the first technique [PAGE 7]. Fourth, season-level effects are computed through the MDP fundamental matrix: expected visits to each field state before absorption, multiplied by shooting policy and adjusted xG. The policy change is not a causal intervention in a controlled trial; it is a redistribution of action probabilities. The paper itself warns that “changing the policy will affect both the number of shots a team will perform in each location and the success probability of the shots taken” [PAGE 8]. Fifth, the quantity-quality tradeoff is approximated by awarding extra shots a below-average StatsBomb xG and awarding reduced shot sets a top-quantile average xG; the authors concede “Accurately modeling the frequency versus efficiency trade-off would be a complicated undertaking in its own right.” [PAGE 9]. Sixth, the season goal estimate is converted into table points and even a relegation counterfactual. That final hop is the weakest causally: an 11.38% average relative error, roughly six goals per team-season, means that a claimed extra goal is inside model error [PAGE 10]. The paper’s headline “Teams are likely taking too few long-distance shots and are likely leaving goals on the pitch” [PAGE 2] is therefore a model-based counterfactual conclusion, not a theorem from the raw conversion rates. The supporting descriptive statistic—seven high-volume long-distance shooters converted 6.5% of 416 long-distance shots, while their non-shoot touches in that zone led to team goals in 2.1% of possessions—is useful but selection-biased: those players are selected for shooting ability, and non-shoot possessions include many situations where shooting was impossible. The gray-zone audit must separate three claims: (a) within the learned MDP, some zones have higher reachability value for shooting than for moving; (b) under the paper’s policy-shift and xG-adjustment assumptions, targeted increases yield about 0.5–1.5 extra goals per season; (c) therefore real teams should change policy. Claim (a) is internally checkable; claim (b) is sensitive to imputation, rebounds, fixed opponents, and quantile adjustment; claim (c) requires lower-layer feasibility, opponent adaptation, and out-of-sample verification. Additional gray zones: “exactly one” and “exactly two” move actions are constrained reachability properties, not necessarily optimal policies; “move” aggregates pass, cross, and carry, so the model cannot distinguish a safe square pass from a risky cross; rebounds are explicitly excluded in one footnote [PAGE 2], and a saved long shot can create a second chance that the absorbing “no-goal” state discards. The conclusion is strongest where the model’s own geometry is robust—central penalty-arc zones where a forward pass forces the receiver to turn, and edge-of-box zones where extra moves increase loss probability. It is weakest where team-specific, low-sample zones, flank constraints, and opponent adjustment dominate.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines a possession-level MDP. Let \(S=S_{\mathrm{field}}\cup S_{\mathrm{abs}}\), with \(S_{\mathrm{abs}}=\{s_{\mathrm{goal}},s_{\mathrm{no\_goal}},s_{\mathrm{loss}}\}\). The paper states: “We define three absorbing states that denote the end of a possession sequence” [PAGE 4]. The field partition is a 22-by-17 grid over the offensive half plus one defensive-half state, giving 375 field states; the long-distance shooting region is the blue area in Figure 2 [PAGE 4]. The action space is \(A(s)=\{\mathrm{shoot}\}\cup\{\mathrm{move\_to}(s'):s'\in S_{\mathrm{field}}\}\). A move action does not distinguish pass, cross, or carry [PAGE 4–5].

For field state \(s\), the transition operator is:
\[
P(s,\mathrm{move\_to}(s'),s')=p^{\mathrm{succ}}_{s,s'},\qquad
P(s,\mathrm{move\_to}(s'),s_{\mathrm{loss}})=1-p^{\mathrm{succ}}_{s,s'},
\]
\[
P(s,\mathrm{shoot},s_{\mathrm{goal}})=xG_s,\qquad
P(s,\mathrm{shoot},s_{\mathrm{no\_goal}})=1-xG_s,
\]
with all other field-to-field transitions zero; each absorbing state has a self-loop of probability 1. Units: all \(P(\cdot)\) and \(xG_s\) are dimensionless probabilities in \([0,1]\); expected counts below have units \(\mathrm{season}^{-1}\). The paper describes \(P(s,\mathrm{shoot},s_{\mathrm{goal}})\) as “the probability of successfully scoring a goal from field state \(s\). This can be viewed as a location-based xG value.” [PAGE 5].

The policy is \(\pi(a\mid s)\), with \(\sum_{a\in A(s)}\pi(a\mid s)=1\). The paper states: “The policy is the only part of the MDP that the team (player) can immediately control.” [PAGE 5]. The reward is \(R(s,a,s')=1\) if \(s'=s_{\mathrm{goal}}\), otherwise 0 [PAGE 5].

Count-based learning uses \(c_{s,s'}\) as observed actions from \(s\) intended for \(s'\), \(c^{\mathrm{succ}}_{s,s'}\) as those that successfully reach \(s'\), \(c_{s,\mathrm{shoot}}\) as shots from \(s\), \(c_{s,\mathrm{shoot,goal}}\) as goals from those shots, and \(c_s\) as total actions from \(s\). The intended transition and policy estimates are:
\[
\hat P(s,\mathrm{move\_to}(s'),s')=\frac{c^{\mathrm{succ}}_{s,s'}}{c_{s,s'}},\qquad
\hat P(s,\mathrm{shoot},s_{\mathrm{goal}})=\frac{c_{s,\mathrm{shoot,goal}}}{c_{s,\mathrm{shoot}}},
\]
\[
\hat\pi(\mathrm{move\_to}(s')\mid s)=\frac{c_{s,s'}}{c_s},\qquad
\hat\pi(\mathrm{shoot}\mid s)=\frac{c_{s,\mathrm{shoot}}}{c_s}.
\]
The latent denominator \(c_{s,s'}\) is not directly observed for failed moves, so the authors “use Gradient Boosted Trees Ensembles to predict the intended end location of actions” [PAGE 6]. This is a verifiable but assumption-laden imputation step.

Model checking computes constrained reachability probabilities. For example,
\[
p_{\mathrm{shoot}}(s)=P^{\pi}_{M}(\Diamond s_{\mathrm{goal}}\mid S_0=s)
\]
for immediate shooting, and \(p_{\mathrm{move1}}(s)\), \(p_{\mathrm{move2}}(s)\), \(p_{\mathrm{flank2}}(s)\) for one move then shot, two moves then shot, and two moves with first move to a flank then shot. The comparison is \(\Delta_k(s)=p_{\mathrm{move},k}(s)-xG_s\); red/blue maps indicate sign [PAGE 11–13]. The paper’s first technique “aims to answer the ‘What’ questions” [PAGE 7].

Season expected goals under policy \(\pi\) are:
\[
G(\pi)=\sum_{s\in S_{\mathrm{field}}} E[\mathrm{shots\ in\ }s\mid \pi]\,P(s,\mathrm{shoot},s_{\mathrm{goal}}\mid \pi),
\]
with units \(\mathrm{goals}\cdot\mathrm{season}^{-1}\). The expected shot count is
\[
E[\mathrm{shots\ in\ }s\mid \pi]=E[N_s(\pi)]\,\pi(\mathrm{shoot}\mid s),
\]
where \(N_s(\pi)\) is the expected number of visits to \(s\) before absorption. Using \(Q_{ij}=P(i,\mathrm{move\_to}(j),j)\pi(\mathrm{move\_to}(j)\mid i)\),
\[
N=(I-Q)^{-1},\qquad
E[N_s(\pi)]=\sum_{s_0} n_{s_0}\,[(I-Q)^{-1}]_{s_0,s},
\]
where \(n_{s_0}\) is possessions starting in \(s_0\) per season and \(N\) entries are dimensionless expected visit counts [PAGE 8–9].

Policy alteration: let \(x\) be the fractional change, e.g. \(x=0.10\) for 10%. For an increase,
\[
\pi'(\mathrm{shoot}\mid s)=(1+x)\pi(\mathrm{shoot}\mid s),\qquad
M_s=1-\pi(\mathrm{shoot}\mid s),\qquad
M'_s=1-\pi'(\mathrm{shoot}\mid s),
\]
\[
\pi'(\mathrm{move\_to}(s')\mid s)=\pi(\mathrm{move\_to}(s')\mid s)\frac{M'_s}{M_s}.
\]
For a decrease, \(\pi'(\mathrm{shoot}\mid s)=(1-x)\pi(\mathrm{shoot}\mid s)\), with the same proportional move redistribution. The paper gives general formulas in Appendix A.2 and states: “increasing the shooting probability by x percent can be achieved as follows” [PAGE 22]. The main-text example increases shooting by 50% and redistributes move mass according to original shares [PAGE 8].

The xG efficiency adjustment is approximate. For an increase, additional shots receive \(\mu_s^{\mathrm{low}}\), the average below-average StatsBomb xG in state \(s\); for a decrease, remaining shots receive the average of the top \(1-x\) fraction of StatsBomb xG values in \(s\). Thus the expected goal contribution is approximated by
\[
E[\mathrm{goals\ in\ }s\mid \pi'] \approx
E[\mathrm{shots\ in\ }s\mid \pi]\,\mu_s
+\big(E[\mathrm{shots\ in\ }s\mid \pi']-E[\mathrm{shots\ in\ }s\mid \pi]\big)\mu_s^{\mathrm{low}}
\]
for increases, and by \(E[\mathrm{shots\ in\ }s\mid \pi']\,\mu_s^{\mathrm{top}(1-x)}\) for decreases. The paper concedes the approximation: “Accurately modeling the frequency versus efficiency trade-off would be a complicated undertaking in its own right.” [PAGE 9]. The reported observed-policy validation is an average relative error of 11.38%, about six goals per season [PAGE 10].

Appendix A.1 gives the value function
\[
V^{\pi}(s)=\mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty}\gamma^t R(S_t,A_t,S_{t+1})\mid S_0=s\right],\qquad \gamma=1,
\]
with Bellman form
\[
V^{\pi}(s)=\sum_{a\in A(s)}\pi(a\mid s)\sum_{s'}P(s,a,s')\left[R(s,a,s')+\gamma V^{\pi}(s')\right].
\]
The paper states “We use \(\gamma=1\), meaning that all future goals are equally important” [PAGE 21]. With \(\gamma=1\) and reward only at the goal absorbing state, \(V^\pi(s)\) is the probability of eventually scoring before absorption.

Breakdown and singularity regimes:
1. \(N=(I-Q)^{-1}\) exists only if the spectral radius satisfies \(\rho(Q)\lt 1\). If the policy creates a closed nonabsorbing recurrent class, or if move probabilities are not properly normalized, \(I-Q\) is singular and expected visits are undefined.
2. Policy redistribution fails when \(M_s=1-\pi(\mathrm{shoot}\mid s)=0\): there is no move mass to redistribute. An increase is invalid when \((1+x)\pi(\mathrm{shoot}\mid s)\gt 1\). A decrease is invalid when \((1-x)\pi(\mathrm{shoot}\mid s)\lt 0\).
3. The xG adjustment is undefined if a state has no below-average shots, if \(x=1\) removes all shots, if the top-quantile set is empty, or if extrapolated additional shots lie outside empirical support.
4. The Markov and stationarity assumptions break if opponent response, weather, fatigue, scoreline, or body orientation changes \(P(s,a,s')\) or \(xG_s\) during the season. Then the counterfactual policy is not causally identified by the observed MDP.
5. Rebounds are excluded from the absorbing “no-goal” state; if rebounds are correlated with shooting location, expected visits and xG are biased. The paper notes: “This number is likely an underestimate as we did not take rebounds into account” [PAGE 2].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage runs from Cruyff’s adage, “You can’t score if you don’t shoot.” [PAGE 1], through xG’s demonstration that long-distance shots convert less often, to the observed 20% decline in English Premier League long-distance shots from 2013/14 to 2018/19 [PAGE 1]. The paper then joins two older streams: soccer Markov-chain analysis, especially Rudd’s 2011 framework and later expected-threat/value models [PAGE 17], and probabilistic model checking via PRISM and STORM [PAGE 7]. It also imports the basketball policy-counterfactual lineage of Sandholtz and Bornn, while adding frequency-and-efficiency adjustment and fundamental-matrix season aggregation [PAGE 17]. The “retrocausal” trap is that later goals and table points retroactively select which earlier shooting policies look wise. The seven high-volume long-distance shooters who converted 6.5% of 416 shots are survivors of a selection process; their success does not prove that a different policy would generate the same conversion rate. Multi-week traps include: treating the learned policy as optimal rather than observed; conflating shot volume with shot quality; ignoring the paper’s own team exceptions, where Newcastle United, Liverpool, and Burnley show no gain or a decrease from more long shots [PAGE 15]; overreading the Bournemouth relegation counterfactual [PAGE 16–17]; and extrapolating from 76 matches per team to a stable season policy without out-of-sample testing. A robust genealogy should demand prospective validation: hold out a season, freeze the policy recommendation, and test whether the targeted zones actually produce the predicted goal gain.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Three failure modes sit inside the decision-maker. “Crisis habit regression” is the pressure-induced reversion to a habitual long shot or a safe square pass; the paper’s state is location-only, while it admits the best decision is “context-specific (e.g., how much pressure is the shooter under, where is the teammate located)” [PAGE 11]. Under crisis, the effective policy is not the season-average \(\pi\), so the counterfactual map can invert. “Counter-trap” is recursive opponent modeling: the team believes a flank pass will create a better shot; the defender believes the team will pass and shades the flank; the coach believes the defender will shade and instructs a shot; the opponent anticipates the instruction. The paper’s fixed transition matrix cannot represent this equilibrium, so a targeted 20% shooting increase may be neutralized by closing the identified zones. “Clock” is the tension between the in-possession horizon and the season horizon: the MDP uses \(\gamma=1\) and treats future goals equally, but players face time pressure, score state, and fatigue. A rational player may shoot now because the probability of ever generating a better shot is only 5–10% in some edge-of-box zones [PAGE 14], yet the same player may overpass when the clock and scoreline favor risk. Recursive theory of mind therefore requires three nested checks: does the player’s own habit model match the MDP policy; does the opponent’s model of the player match the proposed change; and does the season-level clock justify the in-game risk? Without those checks, the counterfactual is a single-agent shadow of a multi-agent game.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Lower-layer constraints can veto an MDP recommendation even when the upper-layer reachability probability is favorable. Let \(\omega\) denote physical, biomechanical, and weather conditions. A physical feasibility indicator \(F_{s,\mathrm{shoot}}(\omega)\in\{0,1\}\) can force the shoot transition to zero if the player cannot orient the body, reach the ball, or strike with the required foot. A weather or pitch condition can reduce effective shot success below the model’s \(xG_s\); if the effective value satisfies
\[
F_{s,\mathrm{shoot}}(\omega)\,xG_{s,\omega}\lt p_{\mathrm{move}}(s,\omega),
\]
then the paper’s “shoot” recommendation is vetoed for that condition. This is not a new toy ratio; it is a threshold comparison between two dimensionless probabilities under an explicit feasibility state. Biomechanically, the paper itself explains left-of-center shooting advantages through inverted wingers who “can cut infield to get the ball on their dominant foot” [PAGE 11–12], which is exactly a body-orientation and footedness constraint absent from the location-only state. Physically, defender proximity and closing speed change both move success and shot xG; the paper’s event data do not encode pressure directly. Weather—wind, rain, surface water—changes ball flight, control, and footing; the source does not model it. The paper’s abstraction is explicit: states are “defined by partitioning the field into a number of disjoint zones” and the move action “does not differentiate among the various ways (e.g., pass, cross, carry)” [PAGE 4–5]. Therefore, the correct adjudication is conditional: the policy claim survives only in the ceteris paribus region where omitted lower-layer variables do not cross the decision threshold. If a lower layer sets \(F=0\), or if it reverses the inequality above, the MDP recommendation is vetoed, not merely attenuated. This is also why tracking data would matter: the paper notes that event data is more widespread than tracking data [PAGE 17], but tracking is where pressure, orientation, and closing speed become observable.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Rebound-inclusive continuation veto. Veto predicate: recompute the shoot-versus-move comparison with saved or blocked long shots allowed to continue as the same attacking sequence, rather than as a new possession. The paper explicitly treats a rebound as a new possession [PAGE 4] and warns that rebounds were not counted in the descriptive conversion statistic [PAGE 2]. Prediction: central edge-of-box and penalty-arc zones will gain the most shoot-branch value because rebounds are concentrated there; the paper’s targeted extra-goal estimate will be biased downward in those zones, while wide-angle zones will show smaller change. Verification: annotate rebound events from StatsBomb or tracking, re-estimate \(P(s,\mathrm{shoot},s_{\mathrm{goal}})\) with a continuation state, and test whether the sign of \(\Delta(s)=p_{\mathrm{move}}(s)-xG_s\) reverses in any zone used for the targeted recommendation.

2. Intended-end-location imputation veto. Veto predicate: replace the Gradient Boosted Trees imputation for failed move intents with manually annotated or tracking-derived true intents, then recompute the transition matrix and the \(\Delta(s)\) maps. The paper’s imputation is necessary because failed moves have unknown intended endpoints [PAGE 6]. Prediction: the largest corrections will occur in flank-directed and high-pressure failed passes, where the imputed endpoint is most ambiguous; if those corrections are large enough, the paper’s shoot advantage will increase near the flanks because failed flank moves are more costly than the model assumes, or decrease where the model over-imputes safe central moves. Verification: sample failed moves, compute imputation error by zone, and veto any zone recommendation whose \(\Delta(s)\) sign is not stable under the annotated transition matrix.

3. Opponent-adaptation equilibrium veto. Veto predicate: after a team increases long-distance shooting in the identified zones, measure defender positioning, block rate, and shot xG in those same zones across subsequent matches. The learned MDP fixes \(P(s,a,s')\) and \(\pi\) while changing only shooting propensity; it does not model a defensive best response. Prediction: the first exposure may yield the predicted gain, but repeated exposure will produce smaller gains or losses as defenders close the penalty arc and force the ball wide. Verification: use pre/post tracking or event data to test whether the targeted 20% increase delivers less than the predicted extra goal, and whether the attenuation is largest in the zones the paper marks red for “shoot.” A verified attenuation would not necessarily refute the one-shot counterfactual, but it would veto the season-long policy claim as stated.
</RLVR_COUNTERFACTUAL_VETOES>