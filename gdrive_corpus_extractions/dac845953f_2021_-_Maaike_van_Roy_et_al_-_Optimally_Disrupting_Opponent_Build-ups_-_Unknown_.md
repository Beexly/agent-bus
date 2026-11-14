---
source: "2021 - Maaike van Roy, et al - Optimally Disrupting Opponent Build-ups - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2021"
pages: 13
model: deepseek/deepseek-v4-flash-0731free:free
words: 10257
---

<NATIVE_REASONING>
We need answer user. Need produce >=1000 words with exact XML sections. Need cite page numbers verbatim. Need formal LaTeX equations units etc. Need no betting lines. Need deep. Need parse source. We have paper "Optimally Disrupting Opponent Build-ups" by Van Roy et al. Pages 1-16. User says DRIVE SOURCE path and PAGES: 13. Source text included. We need respond likely analyzing paper, maybe provide summary? Need satisfy section requirements: THINK_TRACE deep multi-hop derivation & gray-zone audit >=400 words. SOURCE_OPERATORS_AND_EQUATIONS formal LaTeX, units, page citations, breakdown. RETROCAUSAL_GENEALOGY historical/scientific lineage & multi-week traps. RECURSIVE_THEORY_OF_MIND crisis habit regression vs counter-trap vs clock. CROSS_LAYER_VETO_ADJUDICATION physical/biomechanical/weather veto proof. RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions.

Need maybe include all sections. We need formulate response as research analysis. Need ensure no betting lines. Need exact page citations [PAGE 3] etc. Need equations.

Let's thoroughly understand paper.

Paper constructs MDPs for build-ups. State space location-based 30 states, extended with 4 binary features reachable teammate in patches -> 480 states. Absorbing states: sloss_possession, sgoal, sno_goal. Actions move_to(s), shoot. Transition probabilities, policy, reward (1 for goal). Data from StatsBomb 360, top 10 teams Bundesliga/LaLiga 2020-2021. Build-up sequences start with defender in possession no pressure, end on loss or shot. ~1700 per team ±160. Split by defensive set-up: high/low block, left/right-forcing block. For high/low: visible defensive players positioned higher/lower than five meters past halfway line on opponent's/own half. Need parse definition "higher / lower up the field than five meters past the halfway line on their opponent’s / own half." Hmm.

Intended end state prediction: gradient boosted trees, post-process with reachable teammate info, boost states with reachable teammate twice as likely. Brier scores improved.

Transition/policy learning: location-based count + Gaussian smoothing. Extended: smoothed prior over all other teams in league, Bayesian average. Equations maybe:

P(state s, action move_to(s'), s') = probability success. etc.

Need formal equations with LaTeX. We need derive perhaps from text. There are missing equations in source text due to PDF extraction. Need reconstruct from context. Need state exact formulas? We need be careful not invent. We can state "the paper defines transition function as ..." Need maybe use notation:
Pr(s' | s,a) = ...
The source text has blank formula. We can describe from text. Need cite pages.

Need maybe identify "optimal disruption" via probabilistic model checking PRISM v4.7 [PAGE 10]. Build-up efficiency = probability of reaching final third during build-up sequence. Compute by probabilistic verification. Compare against defensive set-ups.

Need answer likely a "source operators and equations" section. Need include units: probabilities dimensionless [0,1], distances meters, Brier score unitless, percentages. Need "exact singularity/breakdown regimes": data sparsity states with <30 actions, prior constants C_i = 9/m_i ensuring 99% confidence interval; if >=30 actions C_i=0. Also Brier score issues? Need maybe mention "0.5% significance threshold" etc.

Need "RETROCAUSAL_GENEALOGY": historical lineage from Rudd 2011 Markov chains, Singh xT, Yam, Van Roy et al. Multi-week traps: interpreting most likely patterns as causal, confusion of "blocking" vs "forcing", high/low block definitions using five meters, "left/right-forcing" includes first two actions, etc. Need include.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Need relate to coaching decisions: opponent expects you to know their preferred patterns; defending team should avoid stereotyped response; "counter-trap" of over-committing to one flank; "clock" of possession phase. Need tie to paper's findings.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. Need address e.g., MDP ignores fatigue, weather, substitutions, pressing intensity, player fitness, pitch state; 360 data from broadcast video has occlusions, players not visible; high/low block definitions maybe invalid if defensive line uneven due to weather, etc. Need "veto proof" means show when physical/biomechanical/weather constraints invalidate model's recommendation. Need be concrete: if forcing Real Madrid to right flank decreases efficiency by 2.6% high block/3.8% low block, but if right-back is injured or yellow card, or wind/rain affects long passes, the learned model from previous season not transferable. Also biomechanical: reachability radius 1.5 m opponent proximity and 1 m passing lane; these are arbitrary thresholds, not foot speed or reaction time. Need mention.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Probably "Reinforcement Learning from Verifiable Rewards"? User specifically "RLVR_COUNTERFACTUAL_VETOES" maybe "RLVR" stands for "Reinforcement Learning Verifiable Reward". Need create counterfactual scenarios where RLVR (verifiable reward) vetoes a model recommendation. Need 3 scenarios with predictions. Need ensure verifiable, not betting lines. Scenarios could be:
1. If a team's build-up efficiency against high vs low block differs by less than 0.5%, model recommends no switching; but if opponent has new high-pressing striker with high sprint speed, the learned model's "high block" state from 2020-21 underestimates pressure; prediction: actual build-up efficiency will be lower than model's counterfactual; verify by tracking loss events in first 5 seconds.
2. If blocking CB's right side recommended for high block, but opponent's right-back is left-footed inverted fullback, blocking right side may be less effective; prediction: their central midfielder drops left and bypasses block; verify by pass completion into left halfspace.
3. If forcing Atlético Madrid to left side away from Trippier, but Trippier is substituted/absent, model's advantage disappears; prediction: left-forcing no longer reduces efficiency; verify by comparing with/without Trippier.
Need include "verifiable RLVR veto scenarios" perhaps "RLVR" as "real-life verifiable reward" maybe.

Need maybe "CROSS_LAYER_VETO_ADJUDICATION" include "physical/biomechanical/weather veto proof." Need show "proof" with equations? Could say "Veto condition: if wind speed > threshold ...". Need maybe formalize:
Let \hat{p}_{build-up}^{set-up}(s) be MDP-computed probability. Physical veto for weather: if precipitation > \theta_{rain} or wind > \theta_{wind}, then \hat{p} is invalid because transition probabilities learned under different weather not invariant. Biomechanical veto: reachability condition uses 1.5m/1m radii, which are instantaneous distances; a defender with higher acceleration may cover >1.5m during pass execution. Veto if defender's max acceleration \times t_{pass} > radius. Need exact equation:
P(\text{reachable}) = \prod_{opponents} \mathbf{1}[\|x_{opp} - x_{teammate}\|_2 > 1.5\text{m}] \cdot \mathbf{1}[d_{opp, lane} > 1\text{m}]
If wind speed w > w_crit, transition probability of pass may change by e.g. unknown; so veto.
Need not invent fake ratios.

Need perhaps include "SOURCE_OPERATORS_AND_EQUATIONS" with all formal equations from paper. Let's reconstruct.

MDP:
\mathcal M = (S, A, T, \pi, R)
State space S = S_trans ∪ {s_loss, s_goal, s_no_goal}.
Transient states location-based: 30 zones (Figure 1) [PAGE 4]. Extended: 30×2^4 = 480 states [PAGE 4-5].
Actions A = {move_to(s') : s' ∈ S_trans} ∪ {shoot}.
Transition function T(s,a,s') = Pr(S_{t+1}=s' | S_t=s, A_t=a). For absorbing states: T(s_loss,a,s_loss)=1 etc.
Specifically:
T(s, move_to(s'), s') = p_success(s,s')
T(s, move_to(s'), s_loss) = 1 - p_success(s,s') maybe "unsuccessfully moving ball" (not necessarily all failures? There could be no goal? yes).
T(s, shoot, s_goal) = p_goal(s)
T(s, shoot, s_no_goal) = 1 - p_goal(s)
Other combos zero.
Policy π(a|s) = P(A_t=a | S_t=s).
Reward R(s,a,s') = 1 if s'=s_goal and a=shoot else 0. Or sum discounted? Text: "only assign reward of 1 when a goal is scored from one of the field states" [PAGE 6]. Need mention no discount? Not specified.

Build-up efficiency defined as probability of reaching final third. Could express as property φ = "eventually reach final third" and computed by PRISM: P_{=?}[F φ] [PAGE 10]. Need maybe final third states? Location-based map includes 30 states; final third likely coarse states in opponent half. Need not invent.

Extended state binary features:
For each patch i ∈ {left,right,?} maybe four patches relative to ball carrier. reachable_i = 1 iff ∃ teammate in patch i such that:
1. no opponent within radius 1.5 m of teammate: min_{opp} ||x_opp - x_teammate||_2 > 1.5 m
2. no opponent within 1 m of passing lane between ball carrier and teammate: min_{opp} d_{opp, segment}(x_ball,x_teammate) > 1 m.
Need cite [PAGE 4-5]. Need use Euclidean distance.

Defensive set-ups:
High/low block: "all visible defensive players are positioned higher / lower up the field than five meters past the halfway line on their opponent’s / own half." Need formalize using coordinate y:
Let y∈[0,100] maybe own goal line y=0, opponent goal line y=100. Halfway line y=50. High block condition: for all visible defenders i, y_i > 55 (opponent half past halfway) ? "higher up the field than five meters past the halfway line on their opponent’s / own half" Need parse: "higher / lower up the field than five meters past the halfway line on their opponent’s / own half." High block: all visible defensive players positioned higher up the field than five meters past the halfway line on their opponent's half. That would be y > 55 if opponent half is y>50. Low block: all visible defensive players positioned lower up the field than five meters past halfway line on their own half. That would be y < 45. Need maybe include.

Left/right-forcing block: "defending team’s players are higher up the field on the attacking team’s right / left side and lower up the field on the attacking team’s left / right side. Additionally, the attacking team should move the ball to their own left / right flank in the first two actions." Need formalize perhaps:
Define attacking team's orientation. Let x coordinate inverted? A left-forcing block means defenders more advanced on attacking team's right side (attacking left?); "higher up field on attacking team's right side" means more advanced relative to their own goal? Need careful. Then filter sequences where first two actions move ball to attacking team's left flank for left-forcing? Actually "attacking team should move the ball to their own left / right flank in the first two actions." Text: "additionally, the attacking team should move the ball to their own left / right flank in the first two actions." Hmm need parse: For "left-forcing block" maybe "attacking team should move ball to their own left flank"?? Wait from Figure 3 caption: Real Madrid starts build-ups more often on their right flank against left-forcing block and more often on left flank against right-forcing block. If a left-forcing block is defending team's players higher on attacking team's right side and lower on attacking team's left side, then it forces attacking team to their left? Actually if defenders are higher (more advanced) on attacking team's right, then attacking team's right side is more pressured, so they go left. The text says "Additionally, the attacking team should move the ball to their own left / right flank in the first two actions." For left-forcing block, maybe "attacking team should move ball to their own left flank" because the block forces left. For right-forcing, to own right flank. Need formulate.

Need not overcomplicate.

Need include Bayesian averaging equations from [PAGE 9]:
For state s, action a:
π(a|s) = (C_1 m_1 + count(s,a)) / (C_1 + n(s))? Need text: "m1 is prior probability of shooting in state s, m2 prior probability of moving to state s' from state s, m3 prior probability of successfully moving to state s' from state s, m4 prior probability of scoring a goal from state s" and "All C_i constants denoting number of data points ... In case there are less than 30 actions in a state, all C_i for that state are set to 9/m_i ensuring tight 99% confidence interval around prior. Otherwise all C_i=0." Need derive equations. It likely:
P(a|s) = (n(s,a) + C_? m_a)/(n(s)+C?) etc. Need avoid invent exact if not given. We can state "Bayesian averaging with prior means; for under-sampled states (n(s)<30), all C_i=9/m_i" and give generic formula:
\hat p_i = (n_i + C_i m_i)/(n + C_i), where n_i data count for event i, n total actions in s, C_i=9/m_i if n<30 else 0. But note C_i dimension depends on m_i; perhaps C_i=9/m_i makes C_i m_i =9, so prior contributes 9 pseudo-counts, giving 99% CI around prior. Need say "as the paper states."

Need maybe include "prediction of intended end state" equations? Need maybe:
For a failed pass/cross, gradient boosted trees predict distribution over intended end states q(s'). Post-process: q'(s') ∝ q(s') × (2 if ∃ reachable teammate in s', else 1). Renormalized. Brier score = (1/N) Σ_{i=1}^N (f_i - o_i)^2. Cite Brier [1]? Paper mentions Brier scores in Table 1 [PAGE 8]. Need include.

Need "SOURCE_OPERATORS_AND_EQUATIONS" perhaps present all operators.

Need "THINK_TRACE" >=400 words. Need do deep multi-hop derivation and gray-zone audit. Need maybe discuss: Does MDP correctly encode defensive strategy? The state space includes reachability but not exact defender coordinates; high/low block defined at start only; MDP learned per defensive set-up but the defensive set-up is not in state? Actually they learn separate MDP per defensive set-up. This is key: defensive set-up is context, not state variable. Therefore "counterfactual" between set-ups is not truly causal because teams may select different set-ups based on game state, score, opponent, fatigue. Need gray-zone: "build-up efficiency" only reaches final third, not expected goals; no reward for progress; final third threshold is arbitrary; no discounting; no shot quality; absorbing states include sno_goal for missed shot, but "build-up sequences end when team loses possession or takes a shot." Reaching final third is transient? Wait final third states are transient; property "reach final third" in probabilistic model checking is unbounded eventually, but build-up sequences end at loss/shoot; if they reach final third, maybe sequence continues? Actually they may continue into final third; final third is not absorbing. Need property "eventually reach final third before absorption" computed. Need mention.

"Multi-hop derivation": We can derive relation between blocking side and build-up efficiency from MDP:
E_side = P_{MDP_setup}(F final third | initial state s0 in side).
Decrease Δ = 1 - E_left / E_right. If Δ > 0.5% "significant" in paper's ad hoc threshold. Need maybe.

Need "gray-zone audit": possible confounds:
- 360 data from broadcast video: player visibility limited; "all visible defensive players" used for block definition; positions may be missing. Paper acknowledges "As long as a player is visible in video..." [PAGE 2? Actually PAGE 3?]. This can bias block classification.
- Reachability threshold 1.5m/1m arbitrary.
- Intended end state prediction for failed actions is model-based, so transition probabilities are partly synthetic; Brier score improvements are small (e.g., pass 0.41816 vs 0.41597).
- Data volume ~1700 sequences/team, split by four set-ups => ~850 per set-up? Wait "about 850 build-up sequences against each type of block for each team" but earlier ~1700 total; splitting into four sets gives ~425 each? Actually maybe "against each type of block" includes high and low? Let's parse: "Splitting the build-up sequences based on these definitions, we obtained about 850 build-up sequences against each type of block for each team in the dataset." Wait high/low and left/right are two pairs; each sequence may belong to high or low and left or right? A "block" may be high-block vs low-block, not both. If total ~1700, split by high/low gives ~850 each. But left/right-forcing may be subsets. Need not resolve.

Need maybe "SOURCE_OPERATORS_AND_EQUATIONS" cite page numbers for each equation. Since source text has missing formulas, we must identify page numbers: Transition function defined on [PAGE 5]. Policy [PAGE 6]. Reward [PAGE 6]. Reachability [PAGE 4]. Bayesian averaging [PAGE 9]. Brier scores [PAGE 8].

Need "RETROCAUSAL_GENEALOGY": Need historical/scientific lineage. Paper lineage: Rudd 2011 Markov chains, Singh 2019 xT, Yam 2019 StatsBomb, Van Roy et al. 2021 decision-making, "Leaving Goals on the Pitch", "Analyzing Learned MDPs..." etc. Need mention "retrocausal" maybe "predicting from past data to future opponents is a retrocausal inference: using future opponent's historical sequences to infer their current plan." Multi-week traps: if a team adjusts over a season, MDP learned from full season ignores temporal drift; "most likely patterns" may be stale by match week 30. Need mention.

Need "RECURSIVE_THEORY_OF_MIND": Need discuss "crisis habit regression vs counter-trap vs clock." This is unusual. Need define:
- Crisis habit regression: under high pressure, teams fall back on most practiced patterns; the MDP's "most likely sequences" are exactly these habits, so disruption should target them. But if opponent knows you know, they may counter-trap.
- Counter-trap: defending team over-focuses on one side, leaving space on opposite; model's left/right-forcing recommendations can be exploited by a coach who sees the defensive asymmetry and switches attack.
- Clock: build-up has temporal dynamics; MDP is time-homogeneous (Markov property) and has no clock; but pressing intensity decays after 10-15 seconds? Need mention "no time step exponent" and "situational clock" maybe.

Need maybe include "clock" as "the model's lack of an explicit clock means fatigue/urgency states are not represented; a defending team should re-evaluate block after first pass sequence, but MDP assumes stationary policy."

Need "CROSS_LAYER_VETO_ADJUDICATION": Need include three layers: physical, biomechanical, weather. Need "veto proof" maybe formal conditions.

Physical veto proof:
Let model output be a recommended defensive setup D*. If opponent's average sprint speed v or high-intensity actions? But no data in paper. Could say "No physical layer exists in MDP; therefore any recommendation is conditionally valid only if physical state matches training distribution." Formal:
MDP transition probabilities T learned under environmental context E. If E changes in wind, rain, pitch, then T' ≠ T. Veto criterion:
\Delta_{env} = \sum_{s,a,s'} |T_{E_0}(s,a,s') - T_{E_1}(s,a,s')| > \epsilon_{phys}
then model-based ordering of defensive set-ups is not guaranteed.
Need maybe "biomechanical veto proof":
Reachability condition is geometric, not dynamic:
R_i = 1 if min_o ||x_o - x_t||₂ > 1.5 m and min_o d(o, segment) > 1 m.
A defender with acceleration a_def can cover 1.5 m in t = sqrt(2d/a). If pass release-to-reception time τ > t, then the geometric condition is false. Thus the state feature can be wrong. Need equation:
v_{max} τ + 0.5 a τ² > d_{lane}? Actually distance covered in time τ: d(τ)=v_0 τ+0.5 a τ². If d(τ)>1.5m, the "no opponent within 1.5m" criterion at snapshot time is invalid at reception time. Need include.

Weather veto:
Rain/wind alters pass success probabilities. We can formalize p_success(s,s') = base p under dry conditions. In weather condition W, p_success^W(s,s') = p_success(s,s') + δ_{wind}. If δ causes rank reversal between two defensive set-ups, recommendation vetoed. Need not invent specific values.

Need "RLVR_COUNTERFACTUAL_VETOES" with 3 verifiable scenarios. Need make predictions precise and verifiable from event data. Let's think.

RLVR maybe "Reinforcement Learning from Verifiable Rewards" in AI. The paper uses MDP and probabilistic model checking. Counterfactual "what if a different strategy had been followed" [7]. RLVR could mean "real-life verifiable reward"? Need define in response: "I interpret RLVR here as reward specifications that can be verified from event-stream data, not from a learned proxy." Then scenarios.

Scenario 1: "Block left side of CB vs right side" recommendation for high block all six: block right side. Veto: If opponent's right side is patrolled by a left-footed central midfielder with high pass volume under pressure. Prediction: Under high block, block-right reduces build-up efficiency by >0.5% in model; in actual matches, block-right will show no reduction or increase because opponent's first pass to right is a decoy; verify by tracking actual build-up efficiency from same initial state in held-out matches. Need "verifiable" with data.

Scenario 2: "Force Atlético Madrid to left side away from Trippier." Veto: If Trippier is not on the pitch (injury/rotation) or is asked to invert into midfield. Prediction: Left-forcing block vs base no-forcing will show no decrease in Atlético's final-third probability; verify by comparing conditional pass maps with and without Trippier.

Scenario 3: "High vs low block for Bayern Munich equally efficient both sides." Veto: If match played in heavy rain, high block's offside line and long balls affected. Prediction: Model's invariance between sides fails; actual build-up efficiency under high block drops >2% relative to low block; verify by weather log and event data.

Need maybe include "RLVR" as "reward from event data: final third reached, goal scored, possession lost." Need include "verifiable" not betting lines.

Need perhaps "THINK_TRACE" should be an "inner monologue" with "gray-zone audit". Need maybe 500 words. Need not reveal hidden chain? The instructions ask for deep multi-hop derivation. We can provide a coherent trace.

Need structure response:

<THINK_TRACE>
...
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

Need maybe include "word count" not necessary.

Need ensure "ZERO BETTING LINES" no mention odds/spreads. We won't.

Need "exact [PAGE N] markers and verbatim quotes" in source sections. Need include quotes:
- "Build-up play refers to the phase of play..." [PAGE 1]
- "The state space consists of two types of states: absorbing and transient states." [PAGE 3]
- "The 30 states that make up this transient state space are depicted in Figure 1." [PAGE 3]
- "This results in a transient state space containing 480 states." [PAGE 4]
- "a teammate is reachable if the following conditions are met: 1. There is no opponent within a radius of 1.5 meters of the teammate. 2. There is no opponent within one meter of the passing lane between the ball carrier and the teammate." [PAGE 4-5? Actually text on page 4]
- "For an absorbing state, it is not possible to transition to another state, thus only a self-loop with probability one is possible." [PAGE 5]
- "We mimic the real rewards that can be obtained during a soccer match and only assign a reward of 1 when a goal is scored from one of the field states." [PAGE 6]
- "we retrieve approximately 1700 (± 160) build-up sequences for each team." [PAGE 6]
- "a high / low block: A situation in which all visible defensive players are positioned higher / lower up the field than five meters past the halfway line on their opponent’s / own half." [PAGE 7]
- "a left / right-forcing block: A situation in which the defending team’s players are higher up the field on the attacking team’s right / left side..." [PAGE 7]
- "Splitting the build-up sequences based on these definitions, we obtained about 850 build-up sequences against each type of block for each team in the dataset." [PAGE 7]
- "as it is more likely that a state is the intended end state when there is a reachable teammate in that state, we boost those states by making them twice as likely..." [PAGE 8]
- "In case there are less than 30 actions in a state, all C_i for that state are set to 9/m_i ensuring a tight 99% confidence interval around the prior." [PAGE 9]
- "we define a team’s build-up efficiency as their chances of reaching the final third of the pitch during a build-up sequence and use probabilistic verification to compute this probability." [PAGE 10]
- "It is best to let Real Madrid start their build-ups from their right side since these are about 2.6% less efficient against a high block and 3.8% less efficient against a low block compared to their left-side build-ups." [PAGE 12]
- "we see that it is best to force most of the teams in the Spanish LaLiga to their right side, whereas there is about a 50/50 split in the German Bundesliga." [PAGE 13]
- "For Barcelona, there is no real difference in forcing them to either side." [PAGE 13]
- "When employing a high block, it is generally best to block the players on the CB’s right side for all six teams" [PAGE 14]
Need include exact quotes with page markers.

Need maybe include "PAGES: 13" user says pages 13 but source has 16 pages. The user PAGES: 13 perhaps wants reference to page 13? Need maybe "PAGES: 13" means source text has 13 pages? Actually source text includes page markers to 16. We'll cite actual page markers.

Need maybe "SOURCE_OPERATORS_AND_EQUATIONS" with formal LaTeX. Let's draft carefully.

Potential formal equations:

1. MDP tuple:
\[
\mathcal{M} = (S, A, T, \pi, R)
\]
[S=PAGE 3? Actually MDP definition in Section 2.1, page 3]

State space:
\[
S = S_{\mathrm{trans}} \cup \{s_{\mathrm{loss}}, s_{\mathrm{goal}}, s_{\mathrm{no\_goal}}\}
\]
where \(S_{\mathrm{trans}}\) is 30 location states or 480 extended states. [PAGE 3-4]

2. Absorbing:
\[
T(s_{\mathrm{abs}}, a, s_{\mathrm{abs}})=1 \quad \forall a,\ s_{\mathrm{abs}}\in\{s_{\mathrm{loss}},s_{\mathrm{goal}},s_{\mathrm{no\_goal}}\}
\]
Maybe "self-loop with probability one" [PAGE 5].

3. Transition examples:
\[
T(s, \mathit{move\_to}(s'), s') = p_{\mathrm{succ}}(s,s')
\]
\[
T(s, \mathit{move\_to}(s'), s_{\mathrm{loss}}) = 1-p_{\mathrm{succ}}(s,s')
\]
\[
T(s,\mathit{shoot},s_{\mathrm{goal}})=p_{\mathrm{goal}}(s)
\]
\[
T(s,\mathit{shoot},s_{\mathrm{no\_goal}})=1-p_{\mathrm{goal}}(s)
\]
Need "Other combinations zero" [PAGE 5-6].

4. Policy:
\[
\pi(a|s) = P(A_t = a | S_t = s)
\]
[PAGE 6]

5. Reward:
\[
R(s,a,s') = \begin{cases}
1 & \text{if } s'=s_{\mathrm{goal}}\\
0 & \text{otherwise}
\end{cases}
\]
[PAGE 6]

6. Build-up efficiency (probabilistic property):
\[
E(\mathrm{setup}) = \Pr_{\mathcal{M}_{\mathrm{setup}}}(\Diamond\,\mathrm{FinalThird} \mid S_0=s_{\mathrm{init}})
\]
or \(P_{=?}[\,F\,\mathit{final\_third}\,]\) via PRISM [PAGE 10].

7. Reachability feature:
\[
r_i = \mathbf{1}\left[ \exists t\in \mathrm{patch}_i: \min_{o\in O}\|x_o-x_t\|_2 > 1.5\,\mathrm{m} \;\land\; \min_{o\in O} d(o,\overline{x_b x_t}) > 1\,\mathrm{m}\right]
\]
Then extended state \(s=(z, r_1,r_2,r_3,r_4)\), \(|S|=30\cdot 2^4=480\). [PAGE 4-5]

8. Intended end state post-processing:
\[
q'(s') \propto q(s')\,(1 + \mathbf{1}[\exists \text{reachable teammate in } s'])
\]
or "twice as likely" means weight 2 if reachable, 1 otherwise:
\[
w(s') = \begin{cases}2 & \text{if reachable teammate present}\\1 & \text{otherwise}\end{cases}, \quad q'(s') = \frac{w(s')q(s')}{\sum_{u} w(u)q(u)}.
\]
[PAGE 8]

9. Bayesian average / prior:
For state s with n(s)<30:
\[
C_i = \frac{9}{m_i}
\]
so \(C_i m_i = 9\) pseudo-counts; otherwise \(C_i=0\). Generic:
\[
\hat{p}(e_i|s) = \frac{n_i(s)+C_i m_i}{n(s)+C_i}
\]
Need note: the paper's specific equations are not rendered in the source text; this is a faithful reconstruction from [PAGE 9] prose. Need maybe "Assumption: \(m_1\) through \(m_4\) are league-average probabilities for shoot, move, success, goal, respectively." Need include.

10. Brier score:
\[
B = \frac{1}{N}\sum_{i=1}^N (f_i - o_i)^2
\]
where \(f_i\) predicted probability, \(o_i\in\{0,1\}\) observed outcome. Cite [PAGE 8] Table 1. Need maybe "unitless; lower better."

11. High/low block threshold:
Let coordinate y along field, own goal y=0, opponent goal y=100. Halfway line y=50.
High block condition:
\[
\min_{i\in D_{\mathrm{vis}}} y_i > 55\,\mathrm{m}
\]
Low block:
\[
\max_{i\in D_{\mathrm{vis}}} y_i < 45\,\mathrm{m}
\]
Need "five meters past halfway line on opponent's/own half" supports y>55 or y<45. Need cite [PAGE 7]. Need maybe "5 m past the halfway line" and "all visible defensive players". Use \(D_{\mathrm{vis}}\).

12. Forcing block:
Let \(y_i\) and \(x_i\), define \(A_R = \{i: x_i > x_{\mathrm{attacker,center}}\}\), \(A_L\). A left-forcing block (attacking team's right side higher) maybe:
\[
\forall i \in A_R,\ j \in A_L:\ y_i > y_j
\]
and first two attacks move to attacking left flank? Need careful. Could instead say "filtered by the paper's operational definition; the exact inequality is not rendered." Need not overformalize if uncertain. But user asked formal equations; include "assuming coordinate system." Let's think about "higher up the field on the attacking team’s right / left side and lower up the field on the attacking team’s left / right side." For a left-forcing block: "defending team’s players are higher up the field on the attacking team’s right / left side" wait slash indicates pair "right / left" for left/right-forcing. Text: "a left / right-forcing block: A situation in which the defending team’s players are higher up the field on the attacking team’s right / left side and lower up the field on the attacking team’s left / right side." So for left-forcing block: higher on attacking team's right side and lower on attacking team's left side. For right-forcing block: higher on attacking team's left side and lower on attacking team's right side. "Additionally, the attacking team should move the ball to their own left / right flank in the first two actions." For left-forcing block, the attack moves to their own left flank? Let's see: If defenders are higher on attacking right and lower on attacking left, attacking left is less pressured, so they move to own left. The slash "left / right flank" likely corresponds to left/right-forcing. So left-forcing block includes "attacking team should move ball to their own left flank in first two actions"; right-forcing to own right flank. But Figure 3 says Real Madrid start builds more often on right flank against left-forcing block? Wait "against a leftforcing block" maybe "left-forcing block" means forces opponent to their left? Actually Real Madrid (playing left to right) starts builds more often on their right flank against left-forcing block. Hmm that would be the side being forced? Let's parse.

"a left / right-forcing block: A situation in which the defending team’s players are higher up the field on the attacking team’s right / left side and lower up the field on the attacking team’s left / right side. Additionally, the attacking team should move the ball to their own left / right flank in the first two actions." Maybe "left-forcing" means the defending team's shape is higher on attacking team's right and lower on attacking team's left, which "forces" attacking team to play to their own right? Wait if defenders are higher on attacking right, they are more advanced towards attacking right, occupying that side, so attacking team might avoid right and go left. But the text says "additionally, attacking team should move ball to their own left / right flank" maybe the "/" aligns with "left / right-forcing": left-forcing -> move to own left? But Figure 3: Real Madrid starts build-ups more often on their right flank against left-forcing block. That contradicts if left-forcing means force left. Let's revisit.

Maybe "left-forcing block" means "defending team’s players are higher up the field on the attacking team’s right side and lower up the field on the attacking team’s left side." If defenders are higher on attacking right, that means they have moved toward attacking right? Actually "higher up the field" means closer to the attacking team's goal (more advanced). If they are more advanced on the attacking team's right side, they are pressing high on the attacking team's right half. That might encourage attacking team to go to their left? But Figure 3 says Real Madrid starts more on their right flank against a leftforcing block. Let's look at Figure 3 caption: "Real Madrid (playing left to right) starts their buildups lower in their own half against a high block, than when playing against a low block. Furthermore, they start their build-ups more often on their right flank when playing against a leftforcing block and more often on their left flank against a right-forcing block." So left-forcing block is associated with Real Madrid's right flank. Why call "left-forcing"? Perhaps the defending team is "left-forcing" in their own orientation? Hmm.

Maybe "left-forcing block" means it forces the attacking team to their own left? But Real Madrid's "right flank" is their attacking right, so no. Unless "left-forcing" refers to the side of the defending team? A "left-forcing block" may force play to the attacking team's left from the defender's perspective? Need not resolve. In final, avoid precise inequality for forcing, say "paper defines it via relative defender heights and first-two-action flank; exact inequality is omitted in the extraction." But user wants formal. Could state "I will not invent the missing inequality; the verbal definition is on [PAGE 7]." That is more honest.

Need "singularity/breakdown regimes": Need include: "The model breaks down when n(s)<30 and prior dominates; when n(s)=0, C_i=9/m_i can give non-zero probabilities that are not empirical; if m_i=0, C_i has division by zero." Ah! Important. The paper says \(C_i = 9/m_i\). If prior probability \(m_i=0\), then division by zero. That is a formal singularity. Need include. "m_i" maybe not zero for all events? But could be zero for shooting in some states. Need mention. Also "99% confidence interval" maybe "tight around prior" but if m_i small, C_i huge, maybe prior dominates too much. Need include.

Need "units" for equations: distances in meters, probabilities dimensionless, Brier score unitless, percentages dimensionless. Need include in SOURCE_OPERATORS.

Need "RETROCAUSAL_GENEALOGY" details:
- Rudd (2011) Markov chains for possession/value; Singh xT; Yam StatsBomb. Paper builds on Van Roy et al. 2021 "Leaving Goals on the Pitch" and "Analyzing Learned MDPs..."
- "Retrocausal" because the model uses historical data to infer causal effects of a future defensive plan. Pearl's "Book of Why" cited [PAGE 1? Maybe [7] PAGE 16]. Need mention "counterfactual reasoning about what could have happened if a different strategy had been followed [7]" [PAGE 1].
- Multi-week traps: MDPs learned over whole 2020-21 season; no temporal decay; a team's build-up patterns change after coaching change, injuries, transfer. The "most likely sequence" from Week 1 may not be valid by Week 38. Also the "defensive set-ups" are coarse categories; left/right-forcing filters first two actions, so it selects for sequences already matching the forcing, introducing selection bias: build-up efficiency conditional on first two actions is not the same as causal effect of block if teams choose first moves based on pressure. This is a "multi-week trap" if a coach over-trusts the counterfactual.

Need "RECURSIVE_THEORY_OF_MIND" details:
- "Crisis habit regression": In high-pressure matches, teams reduce their action vocabulary and rely on practiced patterns; the MDP's "most likely sequences" identify these habits. Defensive plan should target these habits, not average behavior. But this is recursive: opponent knows you know, so they may "counter-trap" by showing a left-heavy buildup in training/film while actually attacking right.
- "Counter-trap": A defensive strategy that over-commits to blocking a CB's right side (recommended for high blocks) leaves the left halfspace open. The MDP can evaluate this only by comparing discrete set-ups; it does not optimize over continuous allocation of defensive pressure. An adaptive opponent can exploit the discrete nature.
- "Clock": The MDP is time-homogeneous and memoryless; the "clock" of a buildup—early passes vs late passes—is not in the state. In reality, after 10-15 passes, defensive block shifts, fatigue accumulates, and pressing traps change. The "Markov property" assumption [PAGE 5] is a convenient simplification, not a physical law.

Need "CROSS_LAYER_VETO_ADJUDICATION" with proof maybe "Proof by counterexample":
Layer 1 physical: Suppose model recommends high block over low block because computed efficiency reduction is 0.5%. If the attacking team's forwards have high top speed, the high block's offside line can be beaten; physical layer vetoes if high block creates space behind. Need quantify? "No biomechanical data are in MDP, so no offside-trapping speed is modeled."
Layer 2 biomechanical: The reachability feature treats defender positions as frozen snapshots. A defender at 1.6 m from a teammate is "not within 1.5 m" and thus the teammate is reachable, but if the defender has 0.2 m body extension (lunge) or reaches with leg, the geometric margin is erased. Veto condition:
\[
d_{\mathrm{reaction}} = v_{\mathrm{def}} t_{\mathrm{pass}} + \frac12 a_{\mathrm{def}} t_{\mathrm{pass}}^2 > 1.5\,\mathrm{m}
\]
If true, the state feature should be 0, not 1.
Layer 3 weather: Rain changes ball friction and pass speed; wind changes pass curvature. The transition probabilities from dry-weather training data are not invariant. If weather-induced shift in \(p_{\mathrm{succ}}\) exceeds the difference between defensive set-ups, the model's ranking of set-ups is unreliable.

Need maybe "veto proof" as "A single counterexample suffices to veto a universal claim; the paper itself claims only descriptive insights, not universal laws." Fine.

Need "RLVR_COUNTERFACTUAL_VETOES": Need maybe "RLVR" in context of "verifiable rewards" from event data. Need include "verification protocol" and "prediction" for each. Let's craft.

Scenario 1: "Blocking CB's right side vs left side under high block." Paper says all top 3 teams best to block right [PAGE 14]. Counterfactual veto: The model's reward is "reach final third"; actual reward should be "goal scored" or "shot quality." If blocking right side reduces final-third reach but increases shot quality from central zones, the model recommendation is vetoed. Prediction: In held-out 360 data, when right side blocked, opponent's final-third entries drop by at least 0.5 percentage points (as model says) but their shots per final-third entry increase by >10%, so expected goal reward does not decrease. Verify with xG or shot location.

Scenario 2: "Forcing Atlético Madrid left away from Trippier." Paper says [PAGE 13]. Veto: If Trippier has been replaced by a left-footed right-back who inverts, the "Trippier" variable is no longer causal. Prediction: Left-forcing block will not reduce Atlético's build-up efficiency; actual difference in efficiency between left-forcing and right-forcing will be within 0.5 percentage points. Verify by comparing event data in matches with and without Trippier.

Scenario 3: "Real Madrid right side less efficient." Paper says [PAGE 12]. Veto: If Real Madrid's left-back Marcelo is injured (creative left side), the model's left-side advantage may disappear. Prediction: In matches without Marcelo, left-side build-up efficiency decreases by >1 percentage point relative to model baseline, making the "force right" advice less advantageous. Verify by split-season analysis.

Need "RLVR" maybe "reward learning from verifiable rewards" not "real-life verifiable reward." We'll define "RLVR counterfactual" as "a counterfactual that would change the learned reward and therefore veto the policy." Maybe fine.

Need ensure "no toy equations" — but we include formal equations. Fine.

Need perhaps "word count" count? We'll produce enough. Need maybe not overly long but >=1000 words. Let's estimate: Each section 200-300 words, total 1500-2000. Good.

Need maybe include "THE SOURCE_OPERATORS_AND_EQUATIONS" mention "MDP with location-based states vs extended states: 30 vs 480 states." Need include "Figure 1" [PAGE 4] and "Figure 2" [PAGE 5].

Need perhaps "formal LaTeX, units, page citations, breakdown" - include units and breakdown in that section.

Let's draft response.

Need be cautious: User provided source text with "PAGES: 13" maybe they expect a specific issue? The phrase "PAGES: 13" could mean "source has 13 pages"? But source shows page markers to 16. Maybe "PAGES: 13" indicates they want answer limited to page 13? Hmm. The instruction says "DRIVE SOURCE: ... PAGES: 13" likely from a framework "PAGES" variable specifying number of pages? But source text includes all pages. We'll cite all pages.

Need maybe "paper track" "Unknown Authors" in file path but source text lists authors. Need mention "Maaike Van Roy, Pieter Robberechts, Jesse Davis" not "Unknown".

Need maybe "Hudl StatsBomb Research Competitions 2021" no need.

Let's write.

Potential issue: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." We won't. Need avoid "force/fatigue" maybe "No such ratio is used; model does not include fatigue."

Need maybe "exact singularity/breakdown regimes" mention "division by zero if m_i = 0 in \(C_i=9/m_i\)" and "no data state."

Need perhaps "probabilistic model checking PRISM v4.7" with URL? "https://www.prismmodelchecker.org/" [PAGE 10 footnote]. Need mention.

Let's formulate equations with LaTeX in markdown. Need ensure not too much.

Let's start:

<THINK_TRACE>
The paper is not a "continue" from a betting model but a descriptive/counterfactual MDP. The core question: given an opponent's build-up, what defensive positioning best reduces probability of final-third entry. I need trace from raw event definitions to model output:
1. Define build-up sequences: start with defender in possession and no pressure; end at loss or shot.
2. Partition by defensive setup: high/low, left/right forcing.
3. Learn MDP with state locations + reachability features.
4. Compute efficiency as probabilistic reachability.
5. Compare efficiencies across setups.

Gray-zone audit: The paper claims "counterfactual reasoning" but the MDP is learned from observed sequences, not from randomized interventions. The left/right-forcing block definition includes the attacking team's first two actions, so the setup label is partly defined by the outcome, making the comparison prone to selection bias. Additionally, "visible defensive players" from broadcast 360 data excludes occluded players; block classification can be wrong. The reachability features use thresholds (1.5m, 1m) that ignore defender velocity and pass speed. The Brier score improvements are small: pass prediction from 0.41816 to 0.41597 for location-based states [PAGE 8]. The "2.6% less efficient" etc. [PAGE 12] are conditional correlations, not causal effects. Need maintain "recommendation" as "hypothesis to test in training," not "guarantee."

Need maybe include "multi-hop derivation" of block side:
For Real Madrid, most likely sequence left flank [PAGE 11]. Model predicts left-start build-ups have higher efficiency; therefore force right. The chain: most likely patterns -> flank efficiency -> blocking side. But each link includes estimation error; no uncertainty intervals in paper. The "0.5% significant decrease" threshold is arbitrary. Need mention.

Need "gray-zone audit" include "The policy and transition probabilities for extended states use league-average prior when n(s)<30; this can mask team-specific behavior." Good.

Need perhaps "RETROCAUSAL_GENEALOGY" include "retrocausal" word:
"By learning from 2020-21 season and applying to next opponent, the model treats the past as cause of future. This is retrocausal in the sense that a future defensive intervention is assumed to act on an opponent whose behavior is fixed by history." Need mention "multi-week trap."

Need "RECURSIVE_THEORY_OF_MIND" maybe use "Theory of Mind" as nested beliefs:
Coach's belief about opponent's belief about coach's plan. "If the defending team believes the opponent believes they will block the CB's right side, the rational opponent will switch to left. The MDP has no recursive layer." Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" include "physical/biomechanical/weather veto proof" maybe "proof" via counterexample:
- Physical: If a recommendation says "low block is better," but the attacking team has a dominant aerial target and low block invites crosses, the physical layer vetoes because MDP doesn't model aerial duels.
- Biomechanical: The reachability radius is not biomechanically scaled to pass speed; a defender can intercept a pass despite being >1m from lane if pass is slow. Need equation.
- Weather: Rain/wind changes \(p_{\mathrm{succ}}\). Need no specific values.
Need "veto proof" perhaps "a single valid counterexample under specified conditions is enough to veto the universal application; these are not probabilistic hedges."

Need "RLVR_COUNTERFACTUAL_VETOES" include "RLVR" definition:
"By RLVR I mean a reward that is directly verifiable from event data (goal, final third, possession loss) as opposed to a learned proxy." Then 3 scenarios. Need include predictions with "verification protocol" maybe.

Need maybe "counterfactual veto" should be "RLVR counterfactual vetoes" not "RLVR scenarios." We'll title.

Let's write final with exact XML sections.

Need maybe not use "analysis" too much. Need "source operators and equations" formal. Let's compose carefully.

Detailed equations:

MDP:
\[
\mathcal M_c = (S_c, A, T_c, \pi_c, R_c)
\]
for team \(c\), setup context \(c\) (high/low/left-forcing/right-forcing). Actually "For each team, we learn one such MDP per defensive set-up of the opponent" [PAGE 2]. So subscripts.

State spaces:
\[
S_{\mathrm{loc}} = \{z_1,\dots,z_{30}\} \cup \{s_{\mathrm{loss}}, s_{\mathrm{goal}}, s_{\mathrm{no\_goal}}\}
\]
\[
S_{\mathrm{ext}} = \{ (z_i, b_1,b_2,b_3,b_4) : z_i\in \{1..30\}, b_j\in\{0,1\}\} \cup \{s_{\mathrm{loss}}, s_{\mathrm{goal}}, s_{\mathrm{no\_goal}}\}
\]
Wait "transient state space containing 480 states" plus absorbing 3 = 483. State space includes absorbing and transient. Need mention.

Action:
\[
A = \{\mathit{move\_to}(s') : s'\in S_{\mathrm{trans}}\} \cup \{\mathit{shoot}\}
\]
Need "move_to(s) encompasses passes, dribbles, crosses" [PAGE 5].

Transition:
\[
T_c(s,a,s') = \Pr(S_{t+1}=s'\mid S_t=s, A_t=a)
\]
Assumption Markov property. Need cite [PAGE 5]. Then piecewise.

Policy:
\[
\pi_c(a|s) = \Pr(A_t=a\mid S_t=s)
\]
Reward:
\[
R_c(s,a,s') = \mathbf{1}[s'=s_{\mathrm{goal}}]
\]
Need "from one of field states" maybe "and \(s\notin absorbing\)" but okay.

Reachability:
\[
b_j(s)=1 \iff \exists \text{teammate }t\text{ in patch }j: 
d_{\min}(t, O)>1.5\,\mathrm{m} \land d_{\min}(\mathrm{lane}(b,t), O)>1\,\mathrm{m}
\]
where \(O\) are opponents. Need note "patch relative to ball carrier" [PAGE 5].

Intended end state post-processing:
\[
\hat q(s') = \frac{(1+\mathbf{1}[\exists \text{reachable teammate in }s'])q(s')}{\sum_u (1+\mathbf{1}[\exists \text{reachable teammate in }u])q(u)}
\]
This gives exactly weight 2 vs 1.

Bayesian prior:
For each team \(c\), league prior \(m_i\). If \(n(s)<30\), \(C_i=9/m_i\), else \(C_i=0\). Then:
\[
\hat p_i(s) = \frac{n_i(s) + C_i m_i}{n(s) + C_i}
\]
Wait if C_i=9/m_i, denominator n(s)+C_i. Need "all C_i for that state" maybe each \(C_i\) potentially different. Need include "This reconstruction is from prose in [PAGE 9]; the exact rendered equation is missing in source text." Important to not overclaim.

But "C_i = 9/m_i" has "all C_i" maybe if m_i=0 division by zero. Need mention.

High/low block:
\[
\text{High block}: \min_{i\in D_{\mathrm{vis}}} y_i > 55\,\mathrm{m};\quad
\text{Low block}: \max_{i\in D_{\mathrm{vis}}} y_i < 45\,\mathrm{m}
\]
Need "where y is distance from defending team's own goal line in meters; 50 m halfway line; five meters past halfway line." Need note "visible defensive players" [PAGE 7]. This is an operationalization; paper doesn't state coordinate convention, but this is consistent. Need perhaps "Assumption: own goal line = 0, opponent goal line = 100."

Forcing block: We can state "Let \(y_i\) be the height of defender \(i\); left-forcing requires defenders on attacking team's right to be higher than defenders on attacking left, and the first two actions are constrained to a flank. The paper does not render an exact inequality in the extracted text." Need maybe include "This is a missing operator; I will not invent it." That satisfies formal honesty.

Build-up efficiency:
\[
E_c(\mathrm{setup}) = P_{=?}[\, F\, \mathrm{final\_third}\,]_{\mathcal M_c^{\mathrm{setup}}}
\]
Need maybe "initial state \(s_0\)" not specified. "Starting the build-up from a flank" maybe conditional:
\[
E_c(\mathrm{setup}, \mathrm{side}) = \Pr(\Diamond \mathrm{final\_third}\mid S_0\in \mathrm{side})
\]
Need mention.

Brier:
\[
B = \frac1N \sum_i (f_i-o_i)^2
\]
Need "lower better."

Breakdown regimes:
- \(n(s)<30\): prior dominates with 9 pseudo-counts; if \(m_i=0\), \(C_i\) undefined; if \(n(s)=0\), \(\hat p_i = m_i\) (actually \(C_i m_i/(0+C_i)=m_i\) if C_i positive). Need mention.
- "All visible defensive players" fails under occlusion; if any defender not visible, block classification invalid.
- "Broadcast video" snapshots not full tracking; occlusion -> missing data.

Need maybe "units" in section:
"All distances are meters; probabilities are dimensionless; Brier scores dimensionless; percentages are percentage points."

Need "CROSS_LAYER_VETO_ADJUDICATION" include equations:
Wind/weather:
Let \(T_c^0\) be dry transition, \(T_c^W\) weather transition. Veto if:
\[
\max_{s,a} \sum_{s'} |T_c^W(s,a,s') - T_c^0(s,a,s')| \ge \eta
\]
where \(\eta\) is larger than the model's reported efficiency differences (e.g., 2.6% Real Madrid). If weather shifts probabilities by >2.6 pp, the ordering could invert.
Biomechanical:
Let \(\tau\) be ball flight time, \(v_d,a_d\) defender speed/accel. Veto reachable feature if:
\[
v_d \tau + \frac12 a_d \tau^2 > 1.5\,\mathrm{m}
\]
Then "no opponent within 1.5m at snapshot" is not sufficient. Need "reaction time" maybe "if defender can cover radius during pass, pass may be intercepted." Need no fake fatigue ratio.

Physical:
"Fatigue is not in state; if a team's build-up efficiency drops in second half, MDP learned from full match mixes halves." Need maybe "physical veto: if match minute >75 and team has made 3 subs, the learned stationary policy is biased by fatigue." Could include.

Need "RLVR_COUNTERFACTUAL_VETOES" maybe with "verifiable reward" definitions:
- "Reward A: \(R=1\) iff final third reached before absorption." This is verifiable from event data.
- "Reward B: \(R=1\) iff goal scored." This is verifiable but sparse.
- "Reward C: \(R\) = expected goal value of the terminal event." This is not directly verifiable (needs xG model). RLVR would veto any recommendation that depends on unverifiable reward.
Need perhaps use this in scenarios.

Let's craft scenarios:

1. "Block right side of CB under high block" model recommendation [PAGE 14]. RLVR veto: reward function in MDP gives 1 only for goal, but build-up efficiency is "reach final third" [PAGE 10]. These two rewards can disagree. A block that reduces final-third entries but concedes higher-quality entries is not optimal under the goal reward. Prediction: In held-out matches, when defenders block the CB's right patch, final-third rate falls but xG per final-third entry increases; total goal probability is not reduced. Verification: compare xG before/after same initial states; need xG model. Since xG is a model, not directly verifiable, the veto is "RLVR-compliant only if goal count is used; xG prediction is a testable auxiliary." Hmm.

2. "Force Atlético left away from Trippier" [PAGE 13]. RLVR veto: If Trippier is not in lineup, the causal variable disappears. Prediction: In matches without Trippier, the efficiency difference between left-forcing and right-forcing will be within 0.5 percentage points (the paper's threshold). Verification: split 2020-21 LaLiga matches by Trippier presence; compute MDP efficiency on held-out sequences.

3. "Real Madrid right side less efficient" [PAGE 12]. RLVR veto: This is a conditional probability, not a causal intervention. If Real Madrid's left-back Marcelo is missing, the "left side" advantage may vanish. Prediction: In matches without Marcelo, left-start efficiency decreases by at least 1.0 percentage point relative to the full-season model; the "force right" advice yields no benefit. Verification: subset data.

Need maybe "RLVR" maybe "Reinforcement Learning from Verifiable Rewards" in AI safety: "A reward model should be robust to distribution shift; these scenarios are counterfactual vetoes under distribution shift." Good.

Need perhaps "THINK_TRACE" should include "I need not produce betting predictions; I need source-grounded counterfactual analysis." Fine.

Let's now write final. Need ensure all XML sections exactly as requested. Need include "SOURCE_OPERATORS_AND_EQUATIONS" maybe with subsubsections? Fine.

Need maybe no "Unknown Authors" but mention actual authors. Fine.

Let's draft.

Need include word count? We can't count but likely >1000. Need ensure ">= 1,000-WORD DEPTH across these exact XML sections" maybe each section total? The wording "across these exact XML sections" means total across sections. We'll produce ~1800 words.

Let's begin.
</NATIVE_REASONING>

<THINK_TRACE>
The paper by Van Roy, Robberechts, and Davis constructs a Markov Decision Process (MDP) for opponent build-ups, then uses probabilistic model checking to compare defensive set-ups. The key causal claim is not “what will happen if team X attacks left,” but “what is the probability that team X reaches the final third if we force them to start left versus right.” I need to trace the full inference chain and audit where it can break.

First, build-up sequences are defined operationally: they start with a defender in possession and no pressure, and end with loss of possession or a shot [PAGE 6]. That is a verifiable event-level definition, but it excludes turnovers in midfield, second-ball recoveries, and build-ups that begin after a long goalkeeping distribution. The model therefore only covers a subset of possession starts.

Second, the state space is either 30 location zones or 480 extended zones with reachability features [PAGE 4]. The reachability feature is geometric: no opponent within 1.5 m of a teammate and no opponent within 1 m of the passing lane [PAGE 4]. This is a snapshot definition. It does not include defender velocity, pass speed, or reaction time. A defender standing 1.6 m away can still intercept a slow pass; the model would classify the teammate as reachable. This is a gray-zone failure that feeds directly into the transition probabilities.

Third, the defensive set-up is not a state variable in the MDP; instead, one MDP is learned per set-up [PAGE 2]. That means the model cannot represent transitions between defensive strategies within a possession. It also means the comparison between high and low blocks is a comparison between two separately learned models, not a single model with an intervention variable. The paper calls this counterfactual reasoning [PAGE 1], but the learned models are observational. For example, the left-forcing block definition includes the attacking team’s first two actions [PAGE 7]. If the attacking team only moves left because the defenders are positioned to force left, then the conditioning event is partly caused by the defensive set-up, which is acceptable for description but not for clean causal identification.

Fourth, the reward function assigns 1 only to goals [PAGE 6], yet the reported “build-up efficiency” is probability of reaching the final third [PAGE 10]. This is a mismatch: the MDP’s terminal reward is a goal, but the verification property used for tactical advice is final-third reachability. A defensive set-up that reduces final-third entries but increases shot quality per entry could be ranked incorrectly if the true objective is goal probability. The paper does not resolve this.

Fifth, the Bayesian averaging for extended states uses league-average priors when fewer than 30 actions are observed in a state [PAGE 9]. This mitigates sparsity but can mask team-specific behavior. Also, the formula \(C_i=9/m_i\) has a singularity if \(m_i=0\). If the league prior for shooting from a particular state is zero, the coefficient is undefined. The paper does not discuss this division-by-zero regime.

Finally, the empirical improvements from the reachability post-processing are small: pass Brier scores improve from 0.41816 to 0.41597 for location-based states, and from 0.59445 to 0.57548 for extended states [PAGE 8]. These are modest shifts. The paper’s practical recommendations, such as Real Madrid being 2.6% less efficient from the right against a high block and 3.8% against a low block [PAGE 12], are not accompanied by confidence intervals. The “significant decrease” threshold of 0.5% is ad hoc. I therefore treat the recommendations as testable hypotheses, not as verified causal laws.

<SOURCE_OPERATORS_AND_EQUATIONS>
For each team \(c\) and defensive set-up \(d\), the paper learns an MDP  
\[
\mathcal{M}_{c,d} = (S, A, T_{c,d}, \pi_{c,d}, R)
\]
with state space, action space, transition function, policy, and reward function [PAGE 3].

State space:
\[
S = S_{\mathrm{trans}} \cup \{s_{\mathrm{loss}}, s_{\mathrm{goal}}, s_{\mathrm{no\_goal}}\}
\]
where \(S_{\mathrm{trans}}\) is either 30 location states [PAGE 3] or 480 extended states [PAGE 4]. Absorbing states have a self-loop:
\[
T(s_{\mathrm{abs}}, a, s_{\mathrm{abs}}) = 1
\]
for \(s_{\mathrm{abs}} \in \{s_{\mathrm{loss}}, s_{\mathrm{goal}}, s_{\mathrm{no\_goal}}\}\) [PAGE 5].

Actions:
\[
A = \{\mathit{move\_to}(s') : s' \in S_{\mathrm{trans}}\} \cup \{\mathit{shoot}\}
\]
where \(\mathit{move\_to}(s')\) includes passes, dribbles, and crosses [PAGE 5].

Transition function, using the Markov property [PAGE 5]:
\[
T(s,a,s') = \Pr(S_{t+1}=s' \mid S_t=s, A_t=a).
\]
The paper’s verbal summaries give:
\[
T(s,\mathit{move\_to}(s'),s') = p_{\mathrm{succ}}(s,s'),
\]
\[
T(s,\mathit{move\_to}(s'),s_{\mathrm{loss}}) = 1 - p_{\mathrm{succ}}(s,s'),
\]
\[
T(s,\mathit{shoot},s_{\mathrm{goal}}) = p_{\mathrm{goal}}(s),
\]
\[
T(s,\mathit{shoot},s_{\mathrm{no\_goal}}) = 1 - p_{\mathrm{goal}}(s),
\]
and all other combinations are zero [PAGE 5-6].

Policy:
\[
\pi_{c,d}(a \mid s) = \Pr(A_t = a \mid S_t = s)
\]
[PAGE 6].

Reward:
\[
R(s,a,s') = 
\begin{cases}
1 & \text{if } s' = s_{\mathrm{goal}},\\
0 & \text{otherwise}.
\end{cases}
\]
The paper states: “We mimic the real rewards that can be obtained during a soccer match and only assign a reward of 1 when a goal is scored from one of the field states” [PAGE 6].

For the extended state space, the reachability binary feature for patch \(j\) is:
\[
b_j = \mathbf{1}\Big[\exists\, \text{teammate } t \in \text{patch}_j : 
\min_{o \in O} \|x_o - x_t\|_2 > 1.5\,\mathrm{m} \;\land\;
\min_{o \in O} d(o, \overline{x_{\mathrm{ball}}, x_t}) > 1\,\mathrm{m}\Big].
\]
This follows exactly: “There is no opponent within a radius of 1.5 meters of the teammate. There is no opponent within one meter of the passing lane between the ball carrier and the teammate” [PAGE 4]. Distances are in meters; probabilities are dimensionless.

Intended end-state post-processing: if a reachable teammate is present, that state is made “twice as likely” [PAGE 8]. A faithful LaTeX reconstruction is:
\[
\hat{q}(s') \propto q(s')\bigl(1 + \mathbf{1}[\exists \text{ reachable teammate in } s']\bigr),
\]
with renormalization.

For the extended-state models, the paper uses a league-average prior. The prose states: “In case there are less than 30 actions in a state, all \(C_i\) for that state are set to \(9/m_i\) ensuring a tight 99% confidence interval around the prior. Otherwise, all \(C_i = 0\)” [PAGE 9]. A faithful reconstruction is:
\[
\hat{p}_i(s) = \frac{n_i(s) + C_i m_i}{n(s) + C_i},
\quad
C_i =
\begin{cases}
9/m_i, & n(s) < 30,\\
0, & n(s) \ge 30,
\end{cases}
\]
where \(m_i\) is the league prior probability for event \(i\). Breakdown regime: if \(m_i = 0\), then \(C_i\) is undefined.

Build-up efficiency is the probability of eventually reaching the final third, computed by PRISM v4.7 [PAGE 10]. In linear temporal logic notation:
\[
E_{c,d} = P_{=?}[\,F\, \mathit{final\_third}\,]_{\mathcal{M}_{c,d}}.
\]
This is a probability in \([0,1]\).

For block classification, the paper defines high/low blocks using “five meters past the halfway line” [PAGE 7]. Let \(y=0\) be the defending team’s own goal line and \(y=100\) the opponent goal line; the halfway line is \(y=50\). Then an operationalization consistent with the paper is:
\[
\text{High block: } \min_{i \in D_{\mathrm{visible}}} y_i > 55\,\mathrm{m},
\]
\[
\text{Low block: } \max_{i \in D_{\mathrm{visible}}} y_i < 45\,\mathrm{m}.
\]
The left/right-forcing definition is verbal in the source: “the defending team’s players are higher up the field on the attacking team’s right / left side and lower up the field on the attacking team’s left / right side,” plus a constraint on the first two actions [PAGE 7]. The exact inequality is not rendered in the extracted source text, so I do not invent it.

Brier score for end-location prediction:
\[
B = \frac{1}{N}\sum_{i=1}^N (f_i - o_i)^2,
\]
where \(f_i\) is the predicted probability and \(o_i \in \{0,1\}\) is the observed outcome. Lower is better [PAGE 8]. Units: unitless.

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is explicit: Rudd introduced Markov chains for soccer possession analysis in 2011 [PAGE 16]; Singh and Yam refined value-based possession models [PAGE 16]; Van Roy et al. previously applied MDPs to shooting decisions, pass riskiness, and defensive game plans [PAGE 15-16]. The current paper adds StatsBomb 360 reachability information and per-defensive-set-up MDPs.

The “retrocausal” element is that the model uses 2020-2021 season data to make counterfactual statements about future opponents. The paper explicitly invokes Pearl’s counterfactual framework: “understanding the effect of different defensive strategies necessitates counterfactual reasoning about what could have happened if a different strategy had been followed” [PAGE 1]. But counterfactuals from observational data require strong assumptions. The MDP is learned from observed sequences, not from randomized defensive interventions. A future opponent can change their build-up patterns after a coaching change, injury, or transfer. The model has no temporal decay; a “most likely sequence” learned over the whole season [PAGE 11] may be stale by match week 30.

The multi-week trap is therefore: a coach reads a report saying Real Madrid is less efficient from the right against a low block [PAGE 12], prepares a low-block right-forcing plan in week 10, but Real Madrid’s left-back has been replaced and the actual week-10 build-up is different. The model’s historical conditional probabilities do not automatically transfer across time. The same trap applies to blocking recommendations: “When employing a high block, it is generally best to block the players on the CB’s right side for all six teams” [PAGE 14]. That result is a league-level finding from one season, not a time-invariant law.

<RECURSIVE_THEORY_OF_MIND>
A coach using this framework must reason recursively: the opponent also has access to the same event data. If the defending team knows Barcelona’s most likely build-up routes through Busquets [PAGE 11], Barcelona’s coaches can anticipate that and design a counter-trap. The MDP’s “most likely sequences” are exactly the habits that emerge under crisis: when pressed, teams regress to their most practiced patterns. This is the crisis-habit regression that makes the model useful.

The counter-trap is that a defending team which over-commits to one side creates space on the other. The paper’s left/right-forcing analysis [PAGE 13] only evaluates two discrete global asymmetries. It does not optimize a continuous allocation of pressure. An adaptive opponent can show a left-heavy build-up in early matches, induce the defending team to block left, then attack the now-open right halfspace. The MDP has no recursive layer representing this belief loop.

The “clock” is also missing. The MDP is time-homogeneous: the transition function depends only on the current state and action, not on how long the possession has lasted. In reality, after 10-15 passes a defensive block shifts, fatigue accumulates, and pressing traps become riskier. A recommendation computed as an unbounded reachability probability \(P_{=?}[F\,\mathit{final\_third}]\) [PAGE 10] ignores the clock. The Markov property is a convenient modeling assumption, not a physical constraint.

<CROSS_LAYER_VETO_ADJUDICATION>
A physical veto occurs when the model’s state space omits fatigue. The MDP is learned from full-match sequences; it mixes first-half and second-half behavior. If a team’s build-up efficiency declines sharply after 75 minutes, the model’s stationary policy will average over that decline. Any defensive recommendation that assumes constant physical output across the match is vulnerable.

A biomechanical veto targets the reachability feature. Let \(\tau\) be the time from pass release to reception. If a defender has initial speed \(v_d\) and acceleration \(a_d\), then the distance the defender can cover during the pass is:
\[
D_d(\tau) = v_d \tau + \frac12 a_d \tau^2.
\]
The model marks a teammate as reachable if no opponent is within 1.5 m at the snapshot [PAGE 4]. If \(D_d(\tau) > 1.5\,\mathrm{m}\), then the snapshot condition is false at the reception moment. The feature should be 0, not 1, but the model does not compute this. This is a biomechanical veto on the extended-state MDP.

A weather veto changes the transition probabilities. Let \(T^0\) be the dry-weather transition function and \(T^W\) the transition function under rain or wind. If:
\[
\max_{s,a} \sum_{s'} \left|T^W(s,a,s') - T^0(s,a,s')\right| \ge \eta,
\]
and \(\eta\) exceeds the model’s reported efficiency differences (e.g., the 2.6% Real Madrid right-side deficit [PAGE 12]), then the ranking of defensive set-ups can invert. The paper does not include weather or pitch state, so any recommendation is valid only conditional on similar environmental conditions.

<RLVR_COUNTERFACTUAL_VETOES>
I interpret RLVR as reward verification from event-stream data: a claim should be testable against recorded outcomes such as final-third entries, goals, and possession losses, not against an unverified proxy.

Scenario 1: Blocking the CB’s right side under a high block is recommended for all six top teams [PAGE 14]. Counterfactual veto: the MDP reward is a goal, but the reported efficiency is final-third reachability [PAGE 10]. A block that reduces final-third entries but increases shot quality per entry may not reduce goal probability. Prediction: in held-out 360 data, blocking the CB’s right side will reduce final-third entry rate by at least the model’s claimed percentage, but the number of goals per final-third entry will increase enough that total goal probability is not reduced. Verification: split the data by block direction and compute both final-third rate and goal rate.

Scenario 2: Forcing Atlético Madrid to their left, away from Kieran Trippier, is recommended because Trippier finished with six assists [PAGE 13]. Counterfactual veto: if Trippier is absent or inverted into midfield, the causal variable disappears. Prediction: in matches without Trippier, the difference between left-forcing and right-forcing build-up efficiency will be within 0.5 percentage points, the paper’s own significance threshold. Verification: subset the 2020-2021 LaLiga event data by Trippier’s presence and recompute the MDP efficiencies.

Scenario 3: Real Madrid is less efficient starting from their right flank against both high and low blocks [PAGE 12]. Counterfactual veto: the finding is tied to the left-sided creative combination involving Marcelo and Kroos [PAGE 11]. If Marcelo is absent, the left-side advantage may vanish. Prediction: in matches without Marcelo, left-side build-up efficiency decreases by at least 1.0 percentage point relative to the full-season model, making the “force right” advice ineffective. Verification: compute left/right efficiency on the Marcelo-absent subset and compare to the paper’s reported 2.6% and 3.8% deficits [PAGE 12].

These three scenarios are verifiable from event data and do not require betting lines, odds, or speculative outcome probabilities. Each is designed to veto a model recommendation when the learned reward or conditioning variable is invalid under distribution shift.