---
source: "undated - HoopEval Individual Player Action Evaluation via Deep Reinforcement Learning - Wang et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/undated"
pages: 13
model: deepseek/deepseek-v4.1-flash-1017
words: 9446
---

<NATIVE_REASONING>
We need answer to user. Need produce structured XML sections >=1000 words, deep. Need address DRIVE SOURCE HoopEval. Need no betting lines. Need formal LaTeX equations, units, citations [PAGE N], verbatim quotes. Need exact singularity/breakdown regimes. Need >=400 THINK_TRACE. Sections exact. Need likely analyze paper. Need maybe "GSE + GSI Frontier Reasoning Foundry" weird. Need deliver research synthesis, equations, retrocausal genealogy, recursive theory of mind, cross-layer veto, RLVR counterfactual vetoes. Need include mathematical formalization from paper. Need be careful: source doesn't give explicit equations for Q-target due missing text; can reconstruct based on prose. Need cite exact pages and quotes. Need discuss units: Q-values in qSQ baseline units? Reward units "qSQ value" perhaps probability-like shot quality? qSQ continuous measure shot quality. Need not invent fake ratios. Can define units as qSQ points or dimensionless probability? Source says qSQ continuous measure of quality of shot opportunities, baseline 0.40. Need state units as qSQ units (dimensionless index if qSQ standardized; source doesn't specify). Avoid fake ratios. We can formalize MDP {S,A_i,R,S'}, action space 6 on-ball bins, 19 movement. Downsample 5 fps, 25 fps original. 632 games. Hex grid, fully connected graph edges 3 binary features.

Need also discuss "singularity/breakdown regimes": e.g. assumptions: Markov property with fixed order agents; qSQ reward conflates shot quality with possession value; CQL lower bound for OOD; autoregressive sequential agent order not causally simultaneous; max Q-target over next agent's actions can overestimate/optimistic; last agent target discounted max first agent next state plus reward; Monte Carlo max might bias; qSQ baseline 0.40 for shots; no explicit defensive actions in action space? Only offensive players' actions; defensive state encoded but not action. Off-ball delayed effects. Rebound/TO not modeled? Need cite pages. Break down when: qSQ unavailable or poorly calibrated; possession truncation at shot attempt excludes offensive rebounds and post-shot value; ball state inference by distance; player identity/team prior (Rudy Gobert zero 3P) maybe leakage? The model assigns lower value due player identity career 3P%; potential circularity/leakage. Need discuss.

Need apply "DRIVE SOURCE" maybe expected to process only source. Should not mention betting. Could mention no betting lines? Better avoid entirely. The invariants say zero betting lines: never mention spreads etc. Fine.

Need include "GSE + GSI Frontier Reasoning Foundry" perhaps not needed but maybe mention in framing? Sections.

Need >=1000 words total across sections. Desired oververbosity 5, but required deep. Need likely 2500-4000 words? Need satisfy. We have enough. Need ensure sections exact XML tags. Need no extra outside? We can start with XML sections only. Need include THINK_TRACE >=400 words. Let's craft high-quality.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage and multi-week traps. Need identify lineage: EPV (Cervone et al 2016), DeepHoops, Q-ball, soccer xT/VAEP/OBV, MARL AlphaStar/OpenAI Five/Google Research Football, VDN/QMIX, Q-Transformer, CQL, TacticAI, HoopTransformer, qSQ. Multi-week traps: distribution shift in offline RL; reward hacking qSQ; agent-order autoregression; max-target overestimation; identity leakage; tracking noise; unobserved actions; no defensive policy; no counterfactual action data; no possession outcome? Need "retrocausal" maybe how later outcomes leak into earlier value assignment via max return-to-go; credit assignment can retroactively justify actions. Discuss genealogy of backward value propagation vs forward EPV.

Need "RECURSIVE_THEORY_OF_MIND">Crisis habit regression vs counter-trap vs clock. This is unusual. Need interpret: crisis habit regression (models falling back to outcome-based metrics/plus-minus under pressure), counter-trap (evaluator optimizing qSQ or learned Q not actual wins; counterfactual evaluator traps), clock (24-second possession, 5 fps, delayed off-ball effects). Need discuss recursive theory of mind: evaluator modeling player modeling defender etc. Need maybe "player decision under evaluator's Q", "players adapt to metric", "Goodhart". Need tie to HoopEval. Mention "habit regression": under sparse reward or distribution shift, model regresses to qSQ-driven heuristics (dribble, pass) or team-level EPV; "counter-trap": if players optimize HoopEval Q, they may exploit OOD actions; CQL aims to conservative. "clock": 24s horizon and shot-attempt trimming; clock changes value; delayed off-ball value.

Need "CROSS_LAYER_VETO_ADJUDICATION">Physical/biomechanical/weather veto proof. For basketball no weather? Need mention indoor sport, weather veto mostly null/irrelevant. Physical/biomechanical veto: tracking accuracy, fatigue, injury, player identity, shot mechanics, speed/acceleration from 5 fps downsampling, hex grid 19-neighbor movement discretization. Need prove veto: if biomechanical constraint prevents action not in action set? The model action space includes 19 nearest cells per 0.2s. Need compute max speed? At 5 fps, movement to neighboring hex cell. Need no fake ratios. Can discuss if movement action exceeds physical feasible displacement, but source doesn't specify cell size. Avoid inventing ratio. Instead state no explicit kinematic feasibility layer; downsampling to 5 fps and 19-cell movement means actions are discretized; physical veto should reject Q-valuations for actions outside feasible acceleration/velocity bounds. Need cite "downsampled to 5 frames per second" [PAGE 4] and "19 possible actions, corresponding to the nearest cells" [PAGE 4-5]. Weather: indoor NBA, source no weather; if applied outdoors or different league, wind/rain not modeled, so veto. Need "proof" maybe formal veto predicate. Use LaTeX: Veto if a_t notin F(s_t) feasible set, or qSQ undefined, or OOD penalty not active. Need state exact.

Need "RLVR_COUNTERFACTUAL_VETOES">3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need give scenarios with predictions that can be tested. Need no betting. Scenarios:
1. Agent-order permutation invariance test: shuffle agent order in decoder and retrain/evaluate; prediction: if Q-values/credit rankings change beyond tolerance, model's credit assignment is order-dependent, not invariant; veto claim of player-level marginal contribution. But autoregressive design intentionally order-dependent. Predict high sensitivity for simultaneous actions. Need threshold? "verifiable": compute Spearman correlation between player rankings across permutations; if <0.8? That's a threshold, not betting. Fine, but no fake ratios? It's an evaluation metric, okay. Need not invent fake equation? We can state correlation. It's okay.
2. qSQ reward ablation / counterfactual: replace qSQ with sparse possession outcome or randomize qSQ; prediction: if learned Q-values and claimed pick-and-roll interpretation collapse/change, then results depend on handcrafted dense reward rather than outcome value. Verifiable via retraining and comparing frame 20/36 value ordering. 
3. OOD action penalty stress test: inject rare actions (e.g., half-court shot, no-pass dribble) and check Q-values vs CQL lower bound; prediction: unpenalized variants assign inflated Q to OOD actions and exploit; CQL variant keeps below baseline. 
4. Possession truncation/rebound counterfactual: extend possession beyond shot attempt to include offensive rebound; prediction: off-ball boxout/rebound positioning value changes; current model undercredits. This is strong. Need exactly 3 scenarios, can include 4? User says 3 verifiable RLVR veto scenarios. Provide exactly 3 maybe include sub-predictions.

Need equations. Need formal equations with units. Let's formulate:

MDP: M = (S, {A_i}_{i=1}^{d_A}, R, S', γ). Source says tuple {S, Ai, R, S'}, no gamma but RL. Define d_A=6? Actually "total number of agents" d_A. Agents: ball + five offensive players? It says "ball and five players", "ball action then each player"; action space ball six bins + five players 19 movement each. So d_A = 6? If include ball as agent plus 5 offensive players = 6 agents. But "five offensive players" movement; ball action separate. Good.

State s_t in S: graph with nodes N = {ball} ∪ P_off ∪ P_def ∪ {rim}; node features grid indices, player embedding; edges fully connected with 3 binary features. State includes all 10 players? It says players and ball; offense/defense via edge features. Fine.

Action a_t = (a_t^1,...,a_t^{d_A}) where a_t^1 ∈ {0..5} (shot or pass to five offensive players, dribble as self-pass) and a_t^i ∈ {1..19} for i=2..6? Maybe agent order: ball first, then five players. Q_i^π(s_t, a_t^{1:i}) = expected discounted return conditioned on previous agents' actions. Bellman per-agent target:
For i < d_A:
y_t^i = max_{a'^i?} Wait source: "For all agents except the last in the sequence, Q-targets are computed as the maximum Q-value over the next agent’s action dimension at the same timestep, effectively propagating value through the agent sequence. For the last agent, the target is computed as the discounted maximum Q-value of the first agent at the next timestep plus the immediate reward." Need define:
y_t^i = max_{a_t^{i+1}} Q_{i+1}(s_t, a_t^{1:i}, a_t^{i+1}) for i=1..d_A-1? But this seems target for agent i is Q of next agent, not plus reward. For last:
y_t^{d_A} = r_t + γ max_{a_{t+1}^1} Q_1(s_{t+1}, a_{t+1}^1). Then "incorporates Monte Carlo returns by taking maximum between computed Q-targets and empirical return-to-go." So y_t^i ← max(y_t^i, G_t) for all i. Need note observed actions trained via Bellman; unobserved minimized toward zero. CQL penalty. Loss:
L = L_TD + α L_CQL + λ_q L_qSQ + λ_a L_ball-action.
Need write explicit:
L_TD(θ) = E_{(s_t,a_t,r_t,s_{t+1})~D} [ Σ_i ( Q_i^θ(s_t,a_t^{1:i}) - y_t^i )^2 ] maybe only dataset action.
L_CQL = α E_{s~D} [ log Σ_{a'} exp(Q(s,a')) - E_{a~π_β} Q(s,a) ]? But their CQL variant uses lower bound for OOD and action-dependent penalty; source not exact. Need avoid exact if not given? We can say a general conservative term with lower bound; mark not exact from source. But formal LaTeX needed. Need state "source does not print the explicit loss equation; below is the standard CQL form cited, not a verbatim extraction" to avoid invention. But the prompt asks formal equations. It says zero toy equations. We can provide derivations labeled as reconstructions. Use [PAGE 8] for CQL. Need cite exact quote: "we incorporate Conservative Q-Learning (CQL) to explicitly penalize the Q-values of out-of-distribution (OOD) actions and improve the robustness of value estimation." and "we set a conservative lower bound for OOD Q-values and introduce action-dependent penalty weights." Good.

Reward:
r_t = q_t^{BH}(s_{t+1}) - q_t^{BH}(s_t) if a_t^1 not shot; and r_t = q_t^{BH}(s_t) - 0.40 if shot. Need cite Page 5: "For non-shooting actions, the reward is defined as the change in the ball handler’s qSQ between consecutive timesteps... For shot attempts, the reward is given by the ball handler’s qSQ relative to a predefined baseline (0.40)." Figure 1 says "change in ball handler's qSQ value... difference between qSQ at time t+1 and time t when action is not a shot. For shooting actions, reward is ball handler's qSQ minus predefined baseline (0.40)." Good. Units: qSQ units; baseline 0.40 in same units. Note qSQ could be probability-like but source doesn't explicitly define unit; say "unnormalized qSQ index (source gives baseline 0.40 but not unit normalization)". Avoid claiming probability.

qSQ all five offensive players predicted auxiliary. Need equation: q_t^i = qSQ_i(s_t). L_qSQ = Σ_i (q̂_i(s_t) - q_t^i)^2.

Ball-action classification: L_cls = CE(pass/dribble). Maybe shot? It distinguishes pass vs dribble. Good.

Need "singularity/breakdown regimes" exact:
- MDP assumption breaks because action space excludes defense; actual transition depends on defense policy not controlled; Q_i is not true causal effect of offensive action. If defense policy changes or is unobserved, Q estimates confounded. Formal: if P(s'|s,a) not Markov because hidden defender intent/fatigue, then Q_i(s,a) is biased. 
- Sequential agent order: if simultaneous actions, autoregressive factorization is not unique; Q_i depends on arbitrary order. Break if simultaneous movement coordination.
- qSQ reward misalignment: if qSQ not monotone with possession value, reward hacking. Singular when ∇ qSQ suggests action that lowers actual scoring probability (e.g., open shot for poor shooter; source Rudy Gobert example). The paper actually shows model lowers value despite qSQ favorable due identity. That is a breakdown of qSQ-only reward but model uses player embedding. Need discuss.
- CQL lower bound: if OOD Q lower bound is too aggressive, suppresses genuinely novel but good actions; if too weak, overestimates. Break when dataset has limited action coverage; source "632 games 2015-2016" and only observed actions.
- Max over next agent's action dimension: if next agent's Q has noise/overestimation, max propagates upward. "max" operator is not conservative; CQL helps but doesn't guarantee. 
- Monte Carlo return-to-go max: if return-to-go high due teammate/defense/outcome, can overwrite Q-targets and reintroduce outcome bias; if return is high because of luck, credit assignment biased. Formal: y = max(y^TD, G_t); if G_t > y^TD due rare outcome, Q_i inflated.
- Last agent target uses max first agent next state plus immediate reward: if reward qSQ change and next state max, can cause mismatch between agent semantics. Break if last agent is not ball? 
- Truncation at shot attempt: excludes offensive rebounds, tip-ins, transition after make/miss; if off-ball actions matter after shot, undervalued. Source Page 4: "trim each possession, ensuring that the last frame of every time sequence corresponds to the shot attempt." So exact.
- Downsampling 25 to 5 fps: actions between frames omitted; if decision occurs <0.2s, aliasing. Need avoid fake ratio? 25 to 5 is source, yes. 0.2 s derived. Fine.
- Ball state inferred by distance: if ball ambiguous (loose ball, deflection), state wrong. Source Page 4: "we inferred the state of the ball, dribbled or passed, by calculating the distances between the ball and the players." 
- Hex grid and 19 nearest cells: movement actions coarse; boundary cells? If player near boundary? Need not.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include page citations and verbatim quotes. Need maybe multiple quotes. Use exact quotes. Let's list quotes:
PAGE 1: "EPV treats a possession as a Markov Decision Process (MDP), quantizing the expected value of a possession at every moment in time" and "it remains inherently a team-level metric" and "every offense player shares the same value at each moment".
PAGE 2: "by propagating value backward through state-action sequences, the RL framework explicitly attributes change in expected value to the specific actions of individual agents." 
PAGE 3: dataset 632 games 2015-2016 NBA, 25 fps; maybe quote.
PAGE 4: "downsampled to 5 frames per second"; "Each offensive possession was modeled as a discrete-time Markov Decision Process (MDP), formally represented as a tuple {S, Ai, R, S’}"; "we used play-by-play data to trim each possession, ensuring that the last frame of every time sequence corresponds to the shot attempt"; "inferred the state of the ball, dribbled or passed, by calculating the distances between the ball and the players"; "six bins: shooting or passing the ball to any of the five offensive players"; "dribbling as a special case of passing"; "19 possible actions".
PAGE 5: reward quote.
PAGE 6-7: encoder-decoder, autoregressive.
PAGE 7: "For all agents except the last in the sequence, Q-targets are computed as the maximum Q-value over the next agent’s action dimension at the same timestep" and "For the last agent, the target is computed as the discounted maximum Q-value of the first agent at the next timestep plus the immediate reward." Page 7-8: "incorporates Monte Carlo returns by taking the maximum between the computed Q-targets and the empirical return-to-go."
PAGE 8: CQL quote; auxiliary tasks.
PAGE 9: Rudy Gobert quote "career three-point shooting percentage is zero"; frame 20 lowest.
PAGE 10: model suggests dribble, pick-and-roll.
PAGE 11: conclusion.
Need not overquote too much but enough.

Need "THINK_TRACE" deep multi-hop derivation & gray-zone audit >=400 words. We can write ~700. Need not reveal chain-of-thought? The instruction says deep multi-hop derivation. As AI, we can provide concise reasoning trace, not hidden chain-of-thought? We can give "audit summary" not private. But user asks THINK_TRACE. We can provide a structured derivation. Need avoid excessively detailed private chain. But okay.

Need "CROSS_LAYER_VETO_ADJUDICATION">Physical/biomechanical/weather veto proof. We'll write formal predicates.

Need "RLVR_COUNTERFACTUAL_VETOES" exactly 3 scenarios. Each with "Veto trigger", "Prediction", "Verification". Use no betting lines.

Need include ">=1,000-word depth across exact XML sections" — ensure total >1000. Maybe ~3500 words. Need not mention "word count". Need maybe include page markers [PAGE N] exact. Good.

Need ensure all XML tags are well-formed. Sections are uppercase tags. Use LaTeX. Need no markdown outside? XML with text. We can use paragraphs. Need escape ampersands? Use \& maybe. XML text with & must be escaped if raw ampersand. We can avoid & or use "and". Careful: "S & A" not. Use "and". For LaTeX use \&? In XML, & must be escaped as &amp;. Better avoid ampersand entirely in text. Use "and". In equations, \& not needed. For "Q-function" no. Use "R\&D" avoid. Use "credit assignment" etc. Ensure no unescaped < or > in text? In LaTeX, < less-than? We can use \le, \ge instead. If using "<" in XML text, must escape as &lt;. Better use \lt? In text, "less than" words. In equations, use \leq. Avoid raw < >. XML tags only. Quotes fine. Use \mathbb{E}. Need "θ" okay. Avoid "&" in "Wang et al." no.

Need mention "qSQ" not "qSQ value" okay.

Let's outline response:

<THINK_TRACE>
Paragraphs:
1. Source problem: EPV team-level; RL backward credit assignment.
2. Multi-hop derivation: MDP; state graph; actions; reward; Q-target; CQL; aux losses.
3. Gray-zone audit: what paper proves vs assumes. E.g., "player-level Q" not necessarily causal marginal contribution; autoregressive order; defensive policy hidden; reward qSQ; shot-trimmed possession; tracking noise; identity prior. Need cite.
4. Boundary conditions: exact regimes where claims fail. Mention no explicit equations for Q-target due extraction? We reconstruct. Need say "The source prints prose but not typeset equations in extracted text; I reconstruct the minimal forms and mark assumptions." Good.
5. Audit of results: Frame 1 Gobert qSQ favorable but team value lower; Frame 20 low; Frame 36 high despite low qSQ. This shows learned Q captures delayed value but also possible identity/priors. Need cite pages 8-9.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Define MDP. Equations with tags. Need cite quotes. Let's write:

M = (S, {A_i}_{i=1}^{d_A}, P, R, γ), with P(s'|s,a) transition. Source tuple {S,Ai,R,S'}; add P,γ as standard RL operators (not printed). Page 4 quote.

State: G_t=(V,E,X_t) with V = P∪{ball}∪{rim}; each edge e_{uv} has features b_{uv}^{(1)} opposing team, b^{(2)} ball-holder, b^{(3)} pass receiver. Page 4 quote. Node features grid indices. Court hex.

Action:
a_t^1 ∈ {0,1,...,5}; six bins: shot + pass to five offensive players; dribble is self-pass. a_t^i ∈ {1,...,19} for i=2..6? Actually if ball agent separate and five offensive players, movement actions for each player. Need write a_t = (a_t^{ball}, a_t^{P1},...,a_t^{P5}), with a_t^{Pj} ∈ {1,...,19}. The source says "the action space ... six bins ... movement of each player 19 possible actions." Need not exact index. d_A = 6 (ball + five offensive players) if agent count includes ball. But maybe d_A includes five players and ball? Yes.

Q_i:
Q_i^π(s_t,a_t^{1:i}) = E_π[ Σ_{k=0}^{∞} γ^k r_{t+k} | s_t, a_t^{1:i} ], i=1..d_A. Units qSQ units. Because reward qSQ difference. Note if shot reward qSQ -0.40.

Reward:
r_t = 
q_{t+1}^{BH} - q_t^{BH} for non-shot ball action? But for all actions? Source says for non-shooting actions reward is change in ball handler's qSQ. For shooting: q_t^{BH} - 0.40. If action is movement? It says "For non-shooting actions" includes passes, dribbles, movements. Good. Note q_t^{BH}=qSQ of ball handler at time t. Units qSQ.

Q-target:
For i=1,...,d_A-1:
y_t^i = max_{a_t^{i+1}∈A_{i+1}} Q_{i+1}^{θ'}(s_t,a_t^{1:i},a_t^{i+1})
For i=d_A:
y_t^{d_A}= r_t + γ max_{a_{t+1}^1∈A_1} Q_1^{θ'}(s_{t+1},a_{t+1}^1)
Then Monte Carlo:
y_t^i ← max(y_t^i, G_t), G_t = Σ_{k=t}^{T} γ^{k-t} r_k? But source says empirical return-to-go. Define G_t = Σ_{k=t}^{T} γ^{k-t} r_k. Note possession horizon T≤24s at 5 fps. But source says no more than 24 seconds; downsampled 5 fps. Need not compute frames. Use T.

Loss:
L_TD = E_D [Σ_i (Q_i^θ(s_t,a_t^{1:i}) - y_t^i)^2] for observed actions. Maybe sum over dataset actions. 
CQL conservative: L_CQL = α E_{s~D}[ log Σ_{a} exp(Q(s,a)) - E_{a~D} Q(s,a)] with lower bound; but action-dependent weights. Need mark "standard CQL form; paper states lower bound and action-dependent penalty weights." To avoid mismatch, write:
L_CQL = α E_{s~D}[ L_{OOD}(Q; s) ], where L_{OOD} penalizes Q(s,a) for a∉D_s and includes lower bound b_OOD and action-dependent weights w(a). Then give standard form in parentheses as instantiation? Hmm. Need formal. We can write:
L_CQL^{std}(θ)= E_{s~D}[ log Σ_{a∈A} exp(Q^θ(s,a)) - E_{a∼π_β(·|s)} Q^θ(s,a) ].
But paper says "set a conservative lower bound for OOD Q-values and introduce action-dependent penalty weights" not exactly standard CQL. We can state "a source-faithful schematic is" with L_OOD = Σ_{a∉A_D(s)} w(a) max(0, Q^θ(s,a)-b_OOD)? That's invented. Better not. We can say the paper does not print exact CQL loss in extracted text; use placeholder operator L_CQL(θ) with described properties. But user wants equations; placeholder is not toy. Hmm.

We can write:
L(θ)=L_TD(θ)+α L_CQL(θ)+λ_Q L_qSQ(θ)+λ_cls L_cls(θ).
L_CQL(θ)=E_{s∼D}[Σ_{a∈A} w(a) \ell_{OOD}(Q^θ(s,a))], with \ell_{OOD} a hinge lower-bound penalty for a∉A_D(s). But exact not source. Need label "schematic; exact weights not printed." That is acceptable? It might violate "never invent fake ratios" but not fake ratio. Need be transparent.

Aux:
L_qSQ = E_{s_t~D} Σ_{j=1}^5 (q̂_j(s_t)-q_j(s_t))^2.
L_cls = -E[ y_pass log π_pass + y_dribble log π_dribble ].
Need cite Page 8 quote.

Singularity/breakdown regimes:
- OOD action coverage: if A_D(s) misses feasible actions, CQL lower bound b_OOD dominates; Q not identify true value.
- Reward singularity: if qSQ gradient zero or discontinuous (e.g., shot quality saturates), reward fails. Exact: ∇_a qSQ=0 while true possession value changes.
- Markov failure: hidden variables H_t (defender fatigue, scheme) with P(s'|s,a,H)≠P(s'|s,a); Q bias.
- Order dependence: if actions simultaneous, factorization P(a)=∏ P(a^i|a^{1:i-1}) order-specific; marginal credit not unique.
- Max operator: if Q_{i+1} has bias ε>0, max over N actions adds positive bias (approx \sqrt{2 log N} σ under Gaussian noise) — is that a fake ratio? It's a known extreme value result. But maybe avoid formula. We can state max propagates upward bias; no need.
- Truncation: T ends at shot attempt; post-shot value omitted. Exact if offensive rebound probability or putback value nonzero.
Need cite Page 4.

<RETROCAUSAL_GENEALOGY>
Lineage:
- Outcome metrics plus-minus → EPV Cervone et al. [1] page 1/11.
- DeepHoops [4] page 2, Q-ball [5] Shapley, soccer EPV [7], xT [8], VAEP [9], OBV [10], RL soccer [11-13].
- MARL AlphaStar [14], OpenAI Five [15], Google Research Football [16], VDN [17], QMIX [18].
- Q-Transformer [3], CQL [23], TacticAI [22], HoopTransformer [20].
- HoopEval inherits backward credit assignment and autoregressive Q.
Retrocausal traps:
1. Backward value can "retroactively" justify an action because later outcome or MC return-to-go is high; max with G_t introduces outcome leakage. Source page 7-8. Multi-week trap: evaluate only final possession outcome and believe Q is causal.
2. Team-level EPV lineage → individual attribution via Shapley; paper critiques Shapley "explain only a player's average contribution to model predictions rather than the logic of any specific decision" [PAGE 3]. Multi-week trap: attributing credit by average Shapley not decision-specific.
3. Simulated MARL lineage → offline real tracking; paper says online simulated strategies "cannot serve as reliable critics" [PAGE 3]. Multi-week trap: use simulated policy critics on real data.
4. qSQ from Chang et al. [19] → dense reward. Multi-week trap: optimize qSQ, not wins; identity prior. 
Need "multi-week traps" maybe "over multiple weeks of model development, teams may chase qSQ gains, overfit CQL, or tune agent order; these are traps." Good.

<RECURSIVE_THEORY_OF_MIND>
Need crisis habit regression vs counter-trap vs clock. We can frame:
- Recursive ToM: evaluator E models player P models defender D models evaluator. HoopEval Q is a critic; if players know metric, they may optimize it. The model's Q depends on observed dataset policy (behavior policy), not counterfactual best response. 
- Crisis habit regression: Under high pressure/clock, players revert to habit (iso, dribble) and the model may label low qSQ actions as high Q due learned pick-and-roll patterns; or evaluator regresses to plus-minus/EPV when Q is uncertain. Need cite frame 20: model suggests continue dribbling; frame 36 high value despite low qSQ. "Crisis habit regression" = model's policy under OOD or sparse reward falls back to qSQ/ball-handler-centric reward, undervaluing off-ball. Counter-trap = if evaluator penalizes OOD aggressively (CQL), it may veto creative but valid actions; if too weak, players exploit. Clock = 24-second horizon and 5 fps; decisions near clock end have different value; trimming at shot attempt removes rebound. Need formal: terminal time T_24; Q horizon finite; delayed off-ball effects after T not credited. 
- Counter-trap: players may learn to generate qSQ changes without scoring (e.g., dribble to open shot quality but not advantage). The qSQ reward is a proxy; Goodhart. Model might assign high Q to actions that increase qSQ but reduce win probability.
- Clock: at t near 24s, option value collapses; shot reward baseline 0.40; if qSQ low but clock low, shot may be correct but model's baseline may misrank. Need state.
- Recursive ToM formal? Could define evaluator's estimate \hat Q_i and player's policy π_P; if π_P is a best response to \hat Q, then dataset shifts; Q trained on old policy is off-policy. Need cite offline RL/CQL. Use no fake ratios. We can write:
π_P^{new}(·|s) ∈ argmax_a \hat Q(s,a) (if players optimize metric). Then D_new ≠ D_train; CQL's OOD penalty is not a guarantee under strategic response. This is a counter-trap. Good.

<CROSS_LAYER_VETO_ADJUDICATION>
Define layers: physical (tracking, kinematics), biomechanical (joint limits, fatigue), weather (indoor null). Veto predicates:
1. Tracking/physical: if ball state inferred by distance is ambiguous (two players within tracking error), Veto state s_t. Source: "inferred the state of the ball, dribbled or passed, by calculating the distances" [PAGE 4]. Prediction: noisy states produce spurious Q changes.
2. Kinematic: action a_t^{Pj} to one of 19 nearest hex cells must satisfy feasible displacement over Δt=0.2 s given speed/acceleration; if not, veto. Source says downsampled 5 fps [PAGE 4] and 19 actions [PAGE 5]. But no explicit velocity/accel bounds in source; we impose as audit condition.
3. Biomechanical/identity: qSQ and Q conditioned on player embedding; if player identity causes career 3P% prior (Gobert quote [PAGE 9]), then shot quality must be conditioned on shooter skill; otherwise misvaluation. This isn't veto but adjudication: player-specific skill layer can veto generic qSQ. 
4. Weather: NBA indoor, no weather variables in state; if applied outdoors, weather layer unmodeled; veto any claim of portability to outdoor. Source no weather. 
5. Defensive layer: state includes opposing team edge features, but action space is offensive only; if defensive scheme changes, P(s'|s,a) nonstationary; veto causal interpretation. Source page 4 edge features include "whether the two players are on opposing teams" but no defensive actions. 
Need "proof" maybe use formal:
Veto(s_t,a_t)=1 if a_t∉F_phys(s_t) ∨ q_t^{BH} undefined ∨ tracking ambiguity > ε_track ∨ defensive hidden state H_t nonstationary. Then Q̂_i not admissible as causal credit. Use \lor maybe okay. Avoid raw <. Use \epsilon. Fine.

<RLVR_COUNTERFACTUAL_VETOES>
Need 3 scenarios. Let's design precise and verifiable:
Scenario 1: Agent-order permutation invariance. Veto trigger: Permute the fixed decoder order of the five offensive players (and ball-first vs ball-last) in a retrained or same-model masked evaluation; measure rank correlation of player Q/credit at Frame 20 and 36. Prediction: If the paper's claim "explicitly quantifies marginal contribution of each agent's action" [PAGE 11] is robust, player rankings should be stable up to a pre-registered tolerance (e.g., Spearman ρ ≥ 0.8) for simultaneous off-ball actions. If not, veto "marginal contribution" as order-invariant. Wait the model is autoregressive intentionally order-dependent; it may fail. This is a valid counterfactual. Need include exact thresholds? Fine.
Scenario 2: qSQ reward ablation/replacement. Veto trigger: Retrain with sparse possession outcome or randomized qSQ; evaluate whether Frame 20 low value and Frame 36 high value persist; also test if model still favors dribble and pick-and-roll at Frame 20. Prediction: If the tactical interpretation is qSQ-driven, replacing qSQ with random or sparse reward will eliminate the frame ordering and action Q rankings. Veto claim that Q-values "align with interpretable basketball tactics" [PAGE 11] independent of handcrafted reward. Need cite Page 5 and Page 8/11.
Scenario 3: Possession truncation extension. Veto trigger: Extend each possession past the shot attempt to include offensive rebound/putback for a subset; retrain/evaluate off-ball boxout and crash-glass actions. Prediction: If current model's truncation at shot attempt [PAGE 4] omits value, players whose main contribution is offensive rebounding/boxout will have systematically undervalued Q and lower credit; extending horizon will increase their Q. Veto "fine-grained credit assignment ... at every moment" for post-shot actions. 
Could also include OOD CQL stress. But exactly 3. Maybe scenario 3 better OOD? The prompt says "3 verifiable RLVR veto scenarios + predictions." Truncation is good. Need maybe include CQL OOD as scenario 2? Hmm. Need cover CQL. We can make scenario 2 "OOD action injection" and scenario 3 "truncation". qSQ ablation can be in genealogy or think. But three scenarios should be strongest. Let's choose:
1. Agent-order permutation.
2. OOD CQL stress: inject rare actions and compare Q to lower bound; prediction: without CQL, Q inflated; with CQL, Q suppressed. Veto if CQL variant still assigns high Q to OOD. Verifiable via retraining/ablating CQL. Prediction: ablated CQL overestimates OOD Q and recommends impossible/rare actions; full CQL suppresses. This tests Page 8 quote.
3. Possession truncation/rebound extension. 
Need qSQ ablation maybe in genealogy as trap. But user asked 3; can include qSQ ablation in scenario 2? Maybe OOD includes qSQ? Hmm. We can mention qSQ ablation in THINK_TRACE and genealogy. Good.

Need "predictions" concrete: rankings, frame values, Q ordering. Avoid "betting" language. Fine.

Need no mention "odds" etc. Avoid words "bet", "spread", "total", "moneyline". The word "total" appears often? Invariant says never mention totals? It says "Never mention spreads, totals, moneylines, or odds." Avoid "total" as betting term; but "total loss" might be okay? To be safe, avoid "total" maybe use "overall". Avoid "spread" too. Use "distribution shift" not "spread". Avoid "odds" entirely. Good.

Need "GSE + GSI" maybe no. Need maybe "Frontier Reasoning Foundry" not needed. We can use exact XML only.

Need robust citations. Use [PAGE 1] etc. Use quotes verbatim. Need ensure quotes exact. Let's verify quotes:
Page 1: "EPV treats a possession as a Markov Decision Process (MDP), quantizing the expected value of a possession at every moment in time, based on the spatial configuration and coordinated actions of all players on the court." Exact? Source: "EPV treats a possession as a Markov Decision Process (MDP), quantizing the expected value of a possession at every moment in time, based on the spatial configuration and coordinated actions of all players on the court." Yes.
Page 1: "it remains inherently a team-level metric and reveals the team’s overall value evolution over time." Exact.
Page 1: "every offense player shares the same value at each moment without explicitly distinguishing individual contributions" exact? Source: "This implies that every offense player shares the same value at each moment without explicitly distinguishing individual contributions to actions taken at that instant." Good.
Page 2: "by propagating value backward through state-action sequences, the RL framework explicitly attributes change in expected value to the specific actions of individual agents." Exact.
Page 3: "explain only a player’s average contribution to model predictions rather than the logic of any specific decision made within a possession" Exact? Source: "as they explain only a player’s average contribution to model predictions rather than the logic of any specific decision made within a possession [6]." Good.
Page 3: "cannot serve as reliable critics for evaluating the quality of actions observed in real-world tracking data." Exact? Source: "cannot serve as reliable critics for evaluating the quality of actions observed in real-world tracking data." Yes.
Page 4: "downsampled to 5 frames per second." exact. "Each offensive possession was modeled as a discrete-time Markov Decision Process (MDP), formally represented as a tuple {S, Ai, R, S’}" exact. "we used play-by-play data to trim each possession, ensuring that the last frame of every time sequence corresponds to the shot attempt." exact. "we inferred the state of the ball, dribbled or passed, by calculating the distances between the ball and the players." exact. "six bins: shooting or passing the ball to any of the five offensive players" exact? Source: "The first component involves on-ball action, specifically six bins: shooting or passing the ball to any of the five offensive players." Good. "dribbling" quote: "where the ball-handler is considered to pass the ball to himself." Good.
Page 5: reward quote: "For non-shooting actions, the reward is defined as the change in the ball handler’s qSQ between consecutive timesteps, capturing how passes, dribbles, and movements improve offensive positioning. For shot attempts, the reward is given by the ball handler’s qSQ relative to a predefined baseline, allowing the model to distinguish between high- and low-quality shots." Exact? Source says "For non-shooting actions, the reward is defined as the change in the ball handler’s qSQ between consecutive timesteps, capturing how passes, dribbles, and movements improve offensive positioning. For shot attempts, the reward is given by the ball handler’s qSQ relative to a predefined baseline, allowing the model to distinguish between high- and low-quality shots." Yes. Figure 1: "For shooting actions, the reward is given by the ball handler’s qSQ minus a predefined baseline value (0.40)." Exact? Source: "For shooting actions, the reward is given by the ball handler’s qSQ minus a predefined baseline value (0.40)." Good.
Page 7: "For all agents except the last in the sequence, Q-targets are computed as the maximum Q-value over the next agent’s action dimension at the same timestep" exact. "For the last agent, the target is computed as the discounted maximum Q-value of the first agent at the next timestep plus the immediate reward." exact.
Page 7-8: "incorporates Monte Carlo returns by taking the maximum between the computed Q-targets and the empirical return-to-go." Exact? Page 7 last: "To further improve stability, the model incorporates Monte Carlo returns by taking the maximum between the computed Q-targets and the empirical return-to-go." yes.
Page 8: CQL quote: "we incorporate Conservative Q-Learning (CQL) to explicitly penalize the Q-values of out-of-distribution (OOD) actions and improve the robustness of value estimation." Exact. "we set a conservative lower bound for OOD Q-values and introduce action-dependent penalty weights." Exact.
Page 8: auxiliary: "The first task predicts the qSQ values of all five offensive players from the encoder output" exact. "The second task is a supervised ball-action classification objective under teacher forcing, which distinguishes between pass and dribble actions" exact.
Page 9: "the ball-handler at this point is Rudy Gobert, whose career three-point shooting percentage is zero." Exact? Source: "because the ball-handler at this point is Rudy Gobert, whose career three-point shooting percentage is zero." Good.
Page 9: "although the ball handler's instantaneous qSQ value in frame 36 was still relatively low, the model assigned the highest value to this moment" Exact? Source: "It's worth noting that although the ball handler's instantaneous qSQ value in frame 36 was still relatively low, the model assigned the highest value to this moment" Good.
Page 10: "the model favors continuing to dribble to maintain possession" exact? Source: "the model favors continuing to dribble to maintain possession." Good.
Page 11: "explicitly quantifies the marginal contribution of each agent’s action—both on-ball and off-ball—at every moment in time." Exact? Source: "HoopEval explicitly quantifies the marginal contribution of each agent’s action—both on-ball and off-ball—at every moment in time." Good.
Page 11: "the learned Q-values align with interpretable basketball tactics" exact? Source: "our results demonstrate that the learned Q-values align with interpretable basketball tactics, capturing how coordinated actions such as spacing adjustments and pick-and-roll interactions create future offensive advantage even when instantaneous shot-quality indicators remain low." Good.
Need use [PAGE 11] for quote.

Need formal "Q_i^π" notation with π behavior policy. Need state "source does not print the Q-target equations in extracted text; below reconstructs the prose." Is that okay? We can include "The extracted source states the target in prose rather than typeset LaTeX; the following is the minimal source-faithful reconstruction." Good. This is not "toy equation"; it's transparent.

Need maybe include "units": 
- Time: seconds; original 25 Hz, downsampled 5 Hz; Δt = 0.2 s. But 25 frames per second = 0.04s; 5 fps = 0.2s. We can state.
- Possession horizon T ≤ 24 s.
- Q-values and rewards in qSQ units. qSQ baseline 0.40 qSQ units. If qSQ is dimensionless, then Q is dimensionless; if qSQ has probability-like calibration, Q is in same scale. Source doesn't define unit. State exactly.
- γ discount factor dimensionless, source doesn't give value. Need state "source does not report γ; it is a dimensionless hyperparameter." 
- CQL penalty weights α, λ dimensionless; source not values. 
- Graph edge features binary, dimensionless.
- Hex grid indices are categorical.

Need "exact singularity/breakdown regimes" maybe in SOURCE section with bullet list. Need use "Breakdown regime B1..." and exact conditions. Good.

Need "THINK_TRACE" maybe not too long but >=400. We can write ~650 words. Total maybe 3000. Good.

Let's draft carefully. Ensure XML no unescaped &, <, >. Use "and" not &. In equations, use \leq, \geq. For "i < d_A" use i \le d_A-1. For "a ∉" use \notin. Avoid raw ampersand. In text "Q-function" okay.

Potential issue: XML text with "S’" curly apostrophe okay. Use "S'" plain. Need no raw "&" in "R&D". Fine.

Need maybe "RLVR" define? "reinforcement-learning-with-verifiable-rewards-style counterfactual vetoes" maybe. Good.

Let's write final with exact sections. Need not include markdown headings; XML tags. Could use paragraphs inside.

Need be careful with `<` in equations? Use \le. No raw `<`. In text, "less than" words. In XML, "Q_target" no. Use "≥" unicode? Fine, but in LaTeX use \ge. XML accepts unicode. Avoid raw "<" and "&". Use ">"? Raw ">" allowed in XML text? Yes, but can avoid. Use \to. Fine.

Need mention "no betting lines" not. Avoid "total" word. I will not use "total". Avoid "spread" in "distributional shift" yes. "spread" not. Use "shift". Good.

Need "weather veto proof": NBA indoor. Source no weather. We can say "weather is a null layer for this source." Good.

Need "biomechanical" details: no explicit kinematics. We can use "acceleration and joint-torque feasibility set F_bio" as audit condition. Need not claim data. Good.

Need "RLVR" scenarios: Use "Veto" and "Prediction" and "Verification". Ensure 3. Good.

Let's now produce final. Need maybe word count around 3200. Let's compose with high density.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s central move is architectural and causal: it rejects the forward-predictive EPV logic because “it remains inherently a team-level metric” and because “every offense player shares the same value at each moment without explicitly distinguishing individual contributions” [PAGE 1]. HoopEval instead uses backward value propagation: “by propagating value backward through state-action sequences, the RL framework explicitly attributes change in expected value to the specific actions of individual agents” [PAGE 2]. My audit therefore asks whether the paper’s player-level Q-values are true marginal causal credits, or merely the output of an autoregressive critic whose decomposition depends on reward design, agent order, and offline data coverage.

Multi-hop derivation from the source: first, each offensive possession is treated as a discrete-time MDP, “formally represented as a tuple {S, Ai, R, S’}” [PAGE 4]. Second, the state is a fully connected graph of players, ball, and rim, with hex-grid cell indices as node features and three binary edge features for team opposition, ball-holder identity, and pass-receiver eligibility [PAGE 4]. Third, the action space is split into six on-ball bins, “shooting or passing the ball to any of the five offensive players,” with dribbling represented as a self-pass, plus 19 movement actions per player over neighboring hex cells [PAGE 4]. Fourth, the reward is dense and qSQ-based: for non-shots it is the change in the ball handler’s qSQ between consecutive timesteps; for shots it is qSQ minus a 0.40 baseline [PAGE 5]. Fifth, the decoder assigns Q-values autoregressively: for every agent except the last, the Q-target is the maximum Q-value over the next agent’s action dimension at the same timestep; for the last agent, the target is the discounted maximum Q-value of the first agent at the next state plus immediate reward; Monte Carlo return-to-go is then maxed with these targets [PAGE 7]. Sixth, CQL penalizes OOD actions, and two auxiliary heads predict qSQ for all five offensive players and classify pass versus dribble [PAGE 8].

The gray-zone issue is that this chain proves a computational factorization, not automatically a causal decomposition. If the true transition depends on hidden defensive policy, fatigue, or scheme, then P(s’ | s, a) is not Markov in the recorded state, and Q_i(s, a^{1:i}) is a conditional critic value, not the player’s isolated causal contribution. The autoregressive order also imposes a cooperative game with a fixed order; simultaneous off-ball movements do not have a unique sequential factorization. The reward is another boundary: qSQ is a proxy for shot quality, not possession value. The paper itself exposes this when it says the model assigns lower value to a seemingly open shot because “the ball-handler at this point is Rudy Gobert, whose career three-point shooting percentage is zero” [PAGE 9]. That is a strength if player skill is encoded, but a trap if qSQ is treated as a universal action value without shooter conditioning. The frame-36 result is the strongest evidence for delayed value: “although the ball handler's instantaneous qSQ value in frame 36 was still relatively low, the model assigned the highest value to this moment” [PAGE 9]. This supports pick-and-roll anticipation, but it also shows that the Q-function is doing outcome-like retroactive valuation, not merely reading current shot quality.

Another boundary is possession truncation. The source trims each possession so “the last frame of every time sequence corresponds to the shot attempt” [PAGE 4]. That deliberately excludes offensive rebounds, putbacks, and post-shot off-ball value. A player whose main contribution is boxing out or crashing the glass can be systematically undervalued. The ball-state inference is also distance-based: “we inferred the state of the ball, dribbled or passed, by calculating the distances between the ball and the players” [PAGE 4]. Loose balls, deflections, and contested handles can therefore create state aliasing. Finally, the max operator and return-to-go max can propagate optimism or luck: if a rare later outcome inflates G_t, the max with G_t can retroactively raise earlier Q-values and credit actions that did not cause the outcome. The paper’s CQL term is a guard against OOD overestimation, but it is not a proof of counterfactual correctness. The extracted source does not print explicit Q-target or loss equations as typeset LaTeX; the equations below are minimal source-faithful reconstructions from the prose, with assumptions marked.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the possession MDP be
\[
\mathcal{M}=(\mathcal{S},\{\mathcal{A}_i\}_{i=1}^{d_A},P,R,\gamma),
\]
where the source prints the tuple as \(\{S,A_i,R,S'\}\) [PAGE 4]; \(P(s'|s,a)\) and \(\gamma\in[0,1]\) are standard RL operators added here for formal closure. Time is in seconds. The raw tracking rate is 25 frames per second, then “the tracking data were downsampled to 5 frames per second” [PAGE 4], so the effective decision interval is \(\Delta t=0.2\) s. A possession has \(T\le 24\) s by rule. Q-values and rewards are in qSQ units. The source gives the shot baseline as 0.40 qSQ units but does not define a further normalization; therefore Q is dimensionless only if qSQ is dimensionless, and its scale is the qSQ scale, not points, wins, or probability unless separately calibrated.

State operator. At time \(t\),
\[
s_t=G_t=(V,E,X_t),\quad V=\mathcal{P}_{\text{off}}\cup\mathcal{P}_{\text{def}}\cup\{\text{ball},\text{rim}\},
\]
with node features given by hexagonal grid cell indices and player embeddings [PAGE 4]. Edges are fully connected, and each edge carries three binary features:
\[
e_{uv,t}=\big(b^{\text{opp}}_{uv},b^{\text{holder}}_{uv},b^{\text{receiver}}_{uv}\big)\in\{0,1\}^3,
\]
matching the source’s three edge indicators: “whether the two players are on opposing teams,” “who is the holding the ball,” and “who can be the pass receiver” [PAGE 4]. These are categorical or binary, not continuous physical units.

Action operator. Write the joint action as
\[
a_t=\big(a_t^{\text{ball}},a_t^{P_1},\ldots,a_t^{P_5}\big),
\]
where \(a_t^{\text{ball}}\in\{0,\ldots,5\}\) represents the six on-ball bins: shot or pass to one of five offensive players, with dribble encoded as a self-pass [PAGE 4]. For each offensive player \(P_j\), \(a_t^{P_j}\in\{1,\ldots,19\}\) indexes one of the nearest hex-grid cells [PAGE 4-5]. Thus the fixed agent order used by the autoregressive decoder is an assumption, not a physical simultaneity claim.

Reward operator. Let \(q_t^{BH}=qSQ_{BH}(s_t)\) be the ball handler’s qSQ at time \(t\). The source-faithful reward is
\[
r_t=
\begin{cases}
q_{t+1}^{BH}-q_t^{BH}, & a_t^{\text{ball}}\neq \text{shot},\\
q_t^{BH}-0.40, & a_t^{\text{ball}}=\text{shot},
\end{cases}
\]
in qSQ units. This follows the source’s statement: “For non-shooting actions, the reward is defined as the change in the ball handler’s qSQ between consecutive timesteps” and “For shot attempts, the reward is given by the ball handler’s qSQ relative to a predefined baseline” [PAGE 5]; Figure 1 states the baseline value is 0.40 [PAGE 5].

Autoregressive Q operator. For agent \(i\in\{1,\ldots,d_A\}\), define
\[
Q_i^{\pi}(s_t,a_t^{1:i})
=
\mathbb{E}_{\pi}\left[\sum_{k=0}^{T-t}\gamma^k r_{t+k}\mid s_t,a_t^{1:i}\right],
\]
where \(a_t^{1:i}=(a_t^1,\ldots,a_t^i)\) is the prefix of the joint action. The source’s prose target is reconstructed as
\[
y_t^i=
\max_{a_t^{i+1}\in\mathcal{A}_{i+1}}
Q_{i+1}^{\theta'}\big(s_t,a_t^{1:i},a_t^{i+1}\big),
\quad i=1,\ldots,d_A-1,
\]
and for the last agent,
\[
y_t^{d_A}
=
r_t+\gamma
\max_{a_{t+1}^{1}\in\mathcal{A}_{1}}
Q_{1}^{\theta'}\big(s_{t+1},a_{t+1}^{1}\big).
\]
This is exactly the prose: “For all agents except the last in the sequence, Q-targets are computed as the maximum Q-value over the next agent’s action dimension at the same timestep” and “For the last agent, the target is computed as the discounted maximum Q-value of the first agent at the next timestep plus the immediate reward” [PAGE 7]. The Monte Carlo adjustment is
\[
y_t^i\leftarrow \max\big(y_t^i,G_t\big),
\quad
G_t=\sum_{k=t}^{T}\gamma^{k-t}r_k,
\]
because the model “incorporates Monte Carlo returns by taking the maximum between the computed Q-targets and the empirical return-to-go” [PAGE 7-8].

Training objective. The paper does not print the explicit loss equation in the extracted text, but it names the components. A faithful schematic is
\[
\mathcal{L}(\theta)
=
\mathcal{L}_{\text{TD}}(\theta)
+\alpha\mathcal{L}_{\text{CQL}}(\theta)
+\lambda_q\mathcal{L}_{qSQ}(\theta)
+\lambda_c\mathcal{L}_{\text{cls}}(\theta),
\]
with
\[
\mathcal{L}_{\text{TD}}
=
\mathbb{E}_{(s_t,a_t,r_t,s_{t+1})\sim\mathcal{D}}
\left[
\sum_{i=1}^{d_A}
\left(
Q_i^{\theta}(s_t,a_t^{1:i})-y_t^i
\right)^2
\right].
\]
The CQL term is not printed as an explicit equation in the source; the paper states: “we incorporate Conservative Q-Learning (CQL) to explicitly penalize the Q-values of out-of-distribution (OOD) actions” and “we set a conservative lower bound for OOD Q-values and introduce action-dependent penalty weights” [PAGE 8]. Thus \(\mathcal{L}_{\text{CQL}}\) is a lower-bound penalty on \(Q(s,a)\) for \(a\notin\mathcal{A}_{\mathcal{D}}(s)\), with action-dependent weights; the exact bound and weight values are not given in the extracted source. The auxiliary qSQ loss is
\[
\mathcal{L}_{qSQ}
=
\mathbb{E}_{s_t\sim\mathcal{D}}
\sum_{j=1}^{5}
\left(
\hat q_j(s_t)-q_j(s_t)
\right)^2,
\]
matching “The first task predicts the qSQ values of all five offensive players from the encoder output” [PAGE 8]. The ball-action classification loss is
\[
\mathcal{L}_{\text{cls}}
=
-\mathbb{E}_{s_t\sim\mathcal{D}}
\left[
y_{\text{pass}}\log \pi_{\text{pass}}(s_t)
+
y_{\text{dribble}}\log \pi_{\text{dribble}}(s_t)
\right],
\]
matching “a supervised ball-action classification objective under teacher forcing, which distinguishes between pass and dribble actions” [PAGE 8]. The weights \(\alpha,\lambda_q,\lambda_c\) are dimensionless hyperparameters; the source does not report their numeric values.

Exact breakdown and singularity regimes. B1: Markov failure. If there is a hidden variable \(H_t\) such that \(P(s'|s,a,H_t)\neq P(s'|s,a)\), then \(Q_i\) is not a causal marginal contribution. The source encodes opposing-team edge status but no defensive action space, so defensive scheme changes are a real nonstationarity. B2: order dependence. If two agents act simultaneously, the autoregressive factorization \(P(a)=\prod_i P(a^i|a^{1:i-1})\) is not unique; permuting the agent order can change \(Q_i\) even with the same state and joint action. B3: reward singularity. If \(\nabla_a qSQ=0\) while true possession value changes, the dense reward is blind; if qSQ is high for a player with poor shooting skill, the generic qSQ layer conflicts with the player embedding, as in the Rudy Gobert example [PAGE 9]. B4: CQL boundary. If the dataset action support \(\mathcal{A}_{\mathcal{D}}(s)\) is sparse, the lower bound dominates and suppresses genuinely good but rare actions; if the bound is too weak, OOD Q-values inflate. B5: max-target bias. The max over the next agent’s actions and the max with \(G_t\) can propagate optimistic noise and later-outcome luck backward. B6: truncation. Because “the last frame of every time sequence corresponds to the shot attempt” [PAGE 4], post-shot offensive rebounds and putbacks have zero modeled value; if their true value is nonzero, off-ball credit is biased. B7: tracking aliasing. Because ball state is inferred by distance [PAGE 4], contested or loose-ball frames can be misclassified; at 5 fps, sub-0.2 s decisions are aliased.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
HoopEval’s lineage is a sequence of retroactive valuation moves. Outcome metrics such as plus-minus are retrospective at game level; EPV made valuation temporal by treating a possession as an MDP [PAGE 1]. DeepHoops moved toward end-to-end micro-action prediction [PAGE 2]. Q-ball introduced deep RL and Shapley attribution, but the paper objects that Shapley values “explain only a player’s average contribution to model predictions rather than the logic of any specific decision made within a possession” [PAGE 3]. Soccer’s EPV, xT, VAEP, and OBV extended possession value to continuous spatial dynamics [PAGE 3]. MARL supplied value-decomposition architectures such as VDN and QMIX plus simulated environments such as Google Research Football, but the paper argues that online simulated strategies “cannot serve as reliable critics for evaluating the quality of actions observed in real-world tracking data” [PAGE 3]. HoopEval therefore inherits Q-Transformer-style autoregressive Q-learning [PAGE 11], CQL conservatism [PAGE 8, PAGE 12], graph attention from TacticAI and HoopTransformer [PAGE 6], and qSQ from Chang et al. [PAGE 5, PAGE 12]. The genealogy is not a straight line from team value to player value; it is a sequence of changing credit-assignment operators: forward prediction, Shapley averaging, simulated multi-agent critics, and finally backward Q-propagation over ordered agents.

The retrocausal trap is that later outcomes can justify earlier actions after the fact. The model’s \(G_t\) max is explicitly retrospective: a high empirical return-to-go can override the temporal-difference target [PAGE 7-8]. That is useful for stability, but it can credit a player for a teammate’s shot make or a lucky bounce. A multi-week modeling trap is to tune the critic until frame-level narratives look plausible—frame 20 low, frame 36 high—and then treat those narratives as causal proof. The paper’s own frame-36 observation is a warning: “although the ball handler's instantaneous qSQ value in frame 36 was still relatively low, the model assigned the highest value to this moment” [PAGE 9]. This may be correct pick-and-roll anticipation, or it may be return-to-go retrospection. Another multi-week trap is reward capture: because qSQ is dense and handcrafted [PAGE 5], teams can spend weeks improving qSQ-shaped Q-values while the actual possession outcome remains unmodeled. A third trap is simulated-to-real leakage: policies learned in Google Research Football or other simulators may look coordinated but fail as critics on SportVU data [PAGE 3]. A fourth trap is attribution averaging: Shapley-style or team-level EPV reporting can look stable while hiding decision-specific errors, exactly the criticism the paper makes [PAGE 3]. The correct genealogical reading is that HoopEval is a critic, not an oracle: its backward operator is only as causal as its state, action support, reward proxy, and truncation boundary.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive layer is evaluator-player-defender recursion. HoopEval’s Q-function is trained on an offline behavior policy, but it is interpreted as a critic of player decisions. If players or coaches begin optimizing the critic, the data-generating policy changes: \(\pi_P^{\text{new}}\in\arg\max_a \hat Q(s,a)\). Then the offline dataset is no longer representative, and CQL’s OOD penalty becomes a guard against a moving target, not a guarantee. This is the counter-trap: too much conservatism vetoes creative but valid actions; too little lets players exploit critic errors. The paper’s CQL language—“explicitly penalize the Q-values of out-of-distribution (OOD) actions” [PAGE 8]—is precisely a response to this recursive risk.

Crisis habit regression appears when the model or the player falls back to a familiar heuristic under pressure. In the paper, the model at frame 20 favors “continuing to dribble to maintain possession” because pass and shot Q-values are low [PAGE 10]. That can be correct patience, but it can also be habit regression: the ball handler keeps the ball because the critic’s qSQ-change reward favors safe dribbles over risky but higher-value passes. At frame 36, the model values a pick-and-roll even though instantaneous qSQ is low [PAGE 9]. The recursive theory-of-mind question is whether the model is anticipating the defender’s rotation, or merely fitting a familiar two-player pattern. The source does not contain a defensive policy model or a counterfactual defender response; it encodes opposing-team edges but not defensive actions [PAGE 4]. Therefore the anticipation claim is plausible but underidentified.

The clock layer is the 24-second possession and the shot-attempt truncation. Near the end of the clock, the option value of waiting collapses; a low-qSQ shot can be correct. But the model’s shot reward uses a fixed 0.40 baseline [PAGE 5], not a clock-dependent continuation value. If the baseline is not recalibrated by time remaining, late-clock decisions can be misranked. The truncation at the shot attempt [PAGE 4] also means the clock stops before offensive rebounds, so the recursive value of boxing out or crashing the glass is invisible. A counter-trap here is to interpret “continue dribbling” as superior decision-making when it may only be a qSQ-preserving habit. A second counter-trap is to treat the frame-36 high value as proof of tactical foresight when it may be return-to-go retrospection. The safe reading is conditional: HoopEval’s Q-values are decision-aware only within the modeled horizon, reward proxy, and agent order; outside those, the recursive evaluator can mistake habit for wisdom and conservatism for correctness.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Define an admissibility veto for a proposed credit assignment at state-action pair \((s_t,a_t)\):
\[
\mathrm{Veto}(s_t,a_t)=1
\]
if any of the following holds: the action is outside the physically feasible set \(a_t\notin\mathcal{F}_{\text{phys}}(s_t)\); the ball state is tracking-ambiguous; the player-specific skill prior contradicts the generic qSQ ranking; the defensive hidden state is nonstationary; or the possession truncation removes a nonzero post-shot value. Otherwise \(\mathrm{Veto}=0\). This is an audit gate, not a replacement for the learned Q-function.

Physical layer. The source provides 25 fps raw tracking and 5 fps modeling [PAGE 4], with 19 movement actions to neighboring hex cells [PAGE 4-5]. A physical veto should reject any movement action whose implied displacement over \(\Delta t=0.2\) s violates the player’s feasible velocity and acceleration envelope. The source does not print those envelopes, so this layer is a required external check, not a result of the paper. Tracking layer: the source infers ball state by distance [PAGE 4]. If two players are within the tracking error of the ball, the pass-versus-dribble label is ambiguous, and the Q-target for the ball agent is contaminated. Veto the frame or propagate an uncertainty flag.

Biomechanical and skill layer. The Rudy Gobert example is the clean proof that generic qSQ cannot be the final arbiter: the model lowers value because “the ball-handler at this point is Rudy Gobert, whose career three-point shooting percentage is zero” [PAGE 9]. A player-specific skill veto should override a generic open-shot qSQ if the shooter’s calibrated shot distribution is below the possession-value threshold. This is not a contradiction of the model; it is exactly why the player embedding exists. The veto rule is: if \(qSQ_{\text{generic}}\) ranks a shot highly but \(qSQ_{\text{player}}\) and the learned Q rank it low, do not report the generic qSQ as the player’s decision value.

Defensive and weather layers. The state includes opposing-team edge features [PAGE 4], but the action space is offensive only. If the defense changes scheme, \(P(s'|s,a)\) is nonstationary and the Q-value is not a stable causal marginal. Veto causal language when the defensive policy is unmodeled. Weather is a null layer for this source: the data are NBA indoor SportVU from 632 games in the 2015-2016 season [PAGE 3], and the paper reports no weather variables. Therefore any claim that the model transfers to outdoor conditions, wind, rain, or surface variation is vetoed by absence of those state variables. For indoor basketball, weather is not a valid excuse for a bad Q-value; for outdoor portability, it is an unmodeled confound.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Agent-order permutation veto. Veto trigger: retrain or masked-evaluate the autoregressive decoder with a different fixed agent order, such as ball-last versus ball-first and permuted off-ball player order. Prediction: if the claim that HoopEval “explicitly quantifies the marginal contribution of each agent’s action—both on-ball and off-ball—at every moment in time” [PAGE 11] is robust, player credit rankings at frame 20 and frame 36 should remain stable within a pre-registered tolerance, for example Spearman rank correlation at least 0.8 for the five offensive players. If the rankings flip, the marginal contribution is order-dependent and the veto fires: the output is a sequential factorization credit, not an order-invariant causal marginal. Verification is direct: compare Q-vectors and player rankings across permutations on the same possessions.

Scenario 2: OOD action stress veto. Veto trigger: inject rare or unobserved actions, such as half-court shots, zero-pass dribble sequences, or movements into cells rarely visited in the 632-game dataset, and compare Q-values under full CQL versus a CQL-ablated model. Prediction: the ablated model will assign inflated Q-values to OOD actions and recommend them more often, while the full CQL model should suppress them toward the conservative lower bound, consistent with “we incorporate Conservative Q-Learning (CQL) to explicitly penalize the Q-values of out-of-distribution (OOD) actions” [PAGE 8]. If full CQL still assigns high Q to rare actions with no dataset support, the veto fires: the conservatism claim is not empirically effective. Verification: measure Q-rank of injected OOD actions and action-recommendation frequency across ablations.

Scenario 3: Post-shot truncation veto. Veto trigger: extend possessions beyond the shot attempt to include offensive rebounds, putbacks, and immediate post-shot off-ball actions, then retrain or re-evaluate. Prediction: if the current truncation “ensuring that the last frame of every time sequence corresponds to the shot attempt” [PAGE 4] omits real value, players whose main contribution is boxing out or crashing the glass will have systematically lower Q-values and lower credit than they receive under an extended horizon. The veto fires if the extended-horizon model raises those players’ Q-values and changes the frame-level action rankings; it confirms that the original “every moment in time” claim is bounded by the shot-attempt cut. Verification: compare pre-shot versus post-shot credit for rebounders and boxout specialists on the same possessions, using the source’s own qSQ and Q outputs as baselines.
</RLVR_COUNTERFACTUAL_VETOES>