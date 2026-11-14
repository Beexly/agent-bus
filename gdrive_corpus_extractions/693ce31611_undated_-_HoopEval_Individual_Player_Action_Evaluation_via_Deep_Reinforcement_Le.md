---
source: "undated - HoopEval Individual Player Action Evaluation via Deep Reinforcement Learning - Wang et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/undated"
pages: 13
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4604
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about HoopEval, a basketball analytics framework. I need to produce a response with specific XML sections, each with deep content, totaling >= 1000 words. I must avoid betting lines and toy equations. I need formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes, and page citations.

Let me break down the required sections:

1. THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
3. RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.

Key facts from source:
- Paper: HoopEval Individual Player Action Evaluation via Deep Reinforcement Learning by Wang et al.
- MIT Sloan Sports Analytics Conference
- Dataset: SportVU 632 games 2015-2016 NBA, 25 fps downsampled to 5 fps, max 24 sec possession, trimmed so last frame corresponds to shot attempt.
- MDP tuple {S, Ai, R, S'}
- State space: hexagonal grid, graph-based, nodes = players + ball + rim. Edges fully connected with 3 binary features: opposing teams, who holds ball, who can be pass receiver. Transformer-based encoding, causal self-attention.
- Action space: On-ball 6 bins (shoot/pass to 5 offensive players; dribble = pass to self). Movement: 19 possible actions corresponding to nearest hexagonal cells surrounding current position.
- Reward model: qSQ [19]. Non-shot: ΔqSQ of ball handler between t and t+1. Shot: qSQ - baseline 0.40.
- Model: Graph Attention Network encoder + causal self-attention transformer. Autoregressive Q-function decoder (Q-transformer [3]).
- Training: Conservative Q-Learning (CQL) [23]. Auxiliary tasks: predict qSQ of all 5 offensive players; supervised ball-action classification (pass vs dribble) under teacher forcing.
- Q-targets: For agents except last: max Q over next agent's actions at same timestep. For last agent: discounted max Q of first agent at next state + current reward. Monte Carlo returns: max(computed Q-targets, return-to-go).
- Results example: Rudy Gobert frame 1 has favorable qSQ but low team value due to 0% career 3PT. Frame 20 minimum value. Pick-and-roll between frames 20-36 increases value. Frame 20 action-level: low Q for passes and shot, favors dribble; coordinated movement toward pick-and-roll between Player 2 (ball handler) and Player 5.
- Pages: 13 pages total. Content spans pages 1-13.

Let me map content to pages based on the page numbers visible:
- Page 1: Title, intro start, EPV discussion, forward vs backward value propagation.
- Page 2: Preliminaries 2.1 EPV models, DeepHoops, Q-ball, Shapley values critique, soccer EPV extensions.
- Page 3: 2.2 MARL, AlphaStar, OpenAI Five, Google Research Football, VDN, QMIX. Section 3 Methodology, 3.1 Dataset (SportVU, 632 games, 25fps -> 5fps, 24 sec, play-by-play trim, MDP tuple).
- Page 4: 3.1.1 State space (hex grid, graph, transformer, edges, rim node). 3.1.2 Action space (6 bins, dribble as self-pass, movement 19 actions). Figure 1.
- Page 5: 3.1.3 Reward model (qSQ, ΔqSQ, shot reward qSQ - 0.40).
- Page 6: 3.2 Model architecture, Figure 2. 3.2.1 Graph-based Spatial-temporal Encoder (GAT, TacticAI).
- Page 7: 3.2.2 Autoregressive Q-function Decoder, trajectory notation, per-agent view, Bellman update.
- Page 8: Training process, Q-targets, Monte Carlo returns.
- Page 9: 3.3 Training Objective (CQL, auxiliary losses, total loss). Section 4 Result, Figure 3 description, Frame 1 Rudy Gobert, Frame 20 min value.
- Page 10: Frames 20-36 pick-and-roll, frame 36 highest value despite low qSQ. Frame 20 action-level Q-values, dribble favored, movement toward each other (Player 2 and Player 5). Figure 4.
- Page 11: Section 5 Conclusion.
- Page 12: References [1]-[23].
- Page 13: Appendix.

I need to be careful about exact page numbers. The markdown shows page numbers at bottom: 1, 2, 3, etc. I will cite [PAGE N] where appropriate.

Now let's construct the response.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit.
- Derive HoopEval's credit assignment: EPV forward vs HoopEval backward. The MDP tuple {S, A_i, R, S'}. State space size: hexagonal grid cells? Not specified numerically, but discretized. Action space per timestep: 1 ball action (6 bins) + 5 players * 19 movement actions = 1 + 95 = 96 joint action dimensions? But autoregressive means sequential. Need to discuss combinatorial explosion and autoregressive factorization.
- Reward: r_t = qSQ_{t+1} - qSQ_t for non-shot; r_shot = qSQ - 0.40. Units: qSQ is probability-like (0-1?). Baseline 0.40 dimensionless. Reward units: expected points? qSQ is shot quality probability? Actually qSQ from Chang et al. 2014 quantifies shot quality. Baseline 0.40 likely expected points or probability. I'll treat as dimensionless quality score in [0,1] or expected points.
- Bellman update per agent: Q_i(s_t, a_{1:i-1}^t, a_i^t). Targets: for i<d: max_{a_{i+1}} Q_{i+1}(s_t, a_{1:i}^t, a_{i+1}); for i=d: r_t + γ max_{a_1} Q_1(s_{t+1}, a_1). Monte Carlo: max(target, return-to-go).
- Gray zones: The paper doesn't specify hex grid resolution (number of cells), discount factor γ, learning rates, CQL penalty weights, exact loss weighting coefficients. qSQ baseline 0.40 is arbitrary/predefined. Downsampling 25->5 fps loses sub-second dynamics (0.2s resolution). 24-second shot clock hard cap creates non-stationarity near end of possession. Terminal frame forced to shot attempt biases reward structure. Off-ball actions get credit only through qSQ changes of ball handler, which may not capture off-ball value fully (e.g., screening without immediate ball-handler qSQ change). Rudy Gobert example shows player embedding/prior shooting percentage enters implicitly? Actually the paper says model assigns lower team value because Gobert career 3PT is zero—how does model know? Likely through player embeddings learned from data, but not explicitly stated as input feature. This is a gray zone: is player identity an explicit node feature or learned embedding? "player embedding" mentioned but not defined.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- MDP: \mathcal{M} = \langle \mathcal{S}, \{\mathcal{A}_i\}_{i=1}^d, \mathcal{R}, \mathcal{S}' \rangle, d=6 agents (ball + 5 offense? Actually 5 offensive players + ball action = 6 decision nodes? The text says "five offensive players" and ball action. Let's say d=6 agents including ball handler action).
- State: s_t = G(V_t, E_t), V_t = {v_ball, v_1...v_5, v_rim}, E fully connected, edge features e_{ij} ∈ {0,1}^3.
- Hex grid: court partitioned into cells C, v_p ∈ C.
- Action: a_t = (a_ball, a_1,...,a_5), a_ball ∈ {0,...,5} (shoot + 5 passes, self-pass = dribble), a_i ∈ {1,...,19} movement cells.
- Reward: r_t = qSQ_{ball}(s_{t+1}) - qSQ_{ball}(s_t) for a_t ≠ shot; r_t = qSQ_{ball}(s_t) - 0.40 for shot.
- Q-function: Q_i(s_t, a_{1:i-1}^t; θ). Autoregressive conditioning.
- Bellman targets: y_i = max_{a_{i+1}} Q_{i+1}(...) for i<d; y_d = r_t + γ max_{a_1} Q_1(s_{t+1}, a_1). With MC: y_i = max(y_i, G_t) where G_t = return-to-go.
- CQL: penalize OOD Q-values. Loss: L = L_TD + α L_CQL + β L_qSQ + γ L_class.
- Units: time in seconds (5 fps → Δt=0.2s), possession ≤24s, qSQ dimensionless [0,1] (assumed), reward in qSQ units.
- Breakdown regimes: γ→1 near shot clock expiry causes non-episodic instability; Δt=0.2s aliasing of screens/cuts; sparse terminal reward if shot clock violation not modeled; qSQ baseline 0.40 singularity when qSQ < 0.40 punishes all shots including good ones under pressure? Actually baseline means shots below 0.40 get negative reward.

RETROCAUSAL_GENEALOGY: Lineage.
- Cervone et al. 2016 EPV [1] → forward MDP, team-level.
- Sicilia et al. 2019 DeepHoops [4] → end-to-end micro-actions.
- Yanai et al. 2022 Q-ball [5] → RL + Shapley attribution (critiqued in [6]).
- Bornn/Cervone/Fernández 2021 soccer EPV [7], xT [8], VAEP [9], OBV [10].
- MARL: AlphaStar [14], OpenAI Five [15], Google Research Football [16], VDN [17], QMIX [18].
- Offline RL: Q-transformer [3], CQL [23].
- Multi-week traps: If evaluating players over weeks, qSQ baseline static 0.40 ignores defensive adjustments; player embeddings may stale as rosters change; off-ball credit delayed beyond 24s possession boundaries (e.g., screens that pay off 2 possessions later) are not captured; autoregressive order imposes arbitrary causal priority (ball first) that may misattribute off-ball movement that precedes ball action.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This is more abstract. I need to interpret: crisis habit regression = under pressure (shot clock down), players regress to habitual actions (dribble, low-qSQ shot). Counter-trap = model anticipates defense overplaying the habitual action. Clock = 24-second shot clock and downsampling.
- The model at Frame 20 suggests dribble because pass/shot Q low. This is a "clock" pressure situation. Crisis habit regression would be the ball handler forcing a shot. Counter-trap: defense expects drive/shot, model suggests dribble to reset, pick-and-roll. HoopEval's Q-values capture second-order theory of mind: offense models defense's expectation of shot, chooses dribble to punish overcommitment.
- Multi-agent recursion: each agent's Q conditioned on previous agents' actions at same timestep, creating a Stackelberg-like sequence within timestep. Ball acts first, then players move. This imposes a leader-follower theory of mind that may not match basketball simultaneity.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Indoor basketball, weather veto null (no weather). Physical/biomechanical vetoes: hexagonal grid discretization cannot represent sub-cell movement (19 nearest cells); player speed/direction implicit in transformer, no explicit kinematic constraints (acceleration limits, vertical jump for shot); rim height 3.05m, court dimensions 28m x 15m (NBA) not explicitly modeled; 5 fps means max resolvable speed ~? If court 28m, cell size unknown. 19 movement actions to nearest cells assume isotropic movement; picks/screens require precise timing at 0.2s resolution that may be aliased. No injury/fatigue state. These are vetoes: if action requires sub-grid precision or sub-0.2s coordination, model output is vetoed/unreliable.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning via Verifiable Rewards? Or just counterfactual vetoes. Need 3 scenarios.
1. Shot-clock veto: Possession with 1 second left, ball handler at half court. Model predicts dribble (low Q shot/pass) but physical clock forces turnover/shot clock violation. Prediction: HoopEval Q-value for dribble > shot, but actual outcome is turnover; veto condition: remaining time < 2 * Δt (0.4s) to advance ball past half court? Actually NBA has 8-second half-court violation too. Let's formulate: if time-to-shot-clock-expiry < minimum dribble-to-shot latency (~1.2s physically), model's dribble recommendation is vetoed.
2. Off-ball screen delay veto: Player sets off-ball screen whose value materializes 3 possessions later. HoopEval attributes qSQ change only within current possession to ball handler. Prediction: Q-value for screener movement remains near zero despite high real-world value; counterfactual: if we inject future possession value, screener Q would spike. Verifiable by comparing model Q for off-ball screens vs actual lineup plus-minus over next 5 possessions.
3. Gobert-type shooter mismatch veto: Player with 0% 3PT receives open 3. qSQ says high quality spatially, but player-specific shoot
ing gravity is zero. Model may still assign high qSQ if qSQ is purely spatial/defensive and not player-specific? Actually qSQ [19] might be player-specific? The paper says "ball handler's qSQ" and mentions Gobert's career 3PT is zero as external knowledge. If qSQ metric doesn't include player shooting ability, the model overvalues open 3 for non-shooters. Veto: qSQ(s) > 0.6 but player career 3PT% < 0.10; prediction: model Q(shoot) remains high (if qSQ high) leading to bad shot recommendation, actual FG% ~0; counterfactual: multiply qSQ by player-specific conversion rate.

I need to write all this with >=1000 words total across sections. Let's ensure each section is substantial.

Word count plan:
- THINK_TRACE: ~350-450 words.
- SOURCE_OPERATORS_AND_EQUATIONS: ~300-400 words (heavy on equations).
- RETROCAUSAL_GENEALOGY: ~200-250 words.
- RECURSIVE_THEORY_OF_MIND: ~200-250 words.
- CROSS_LAYER_VETO_ADJUDICATION: ~200-250 words.
- RLVR_COUNTERFACTUAL_VETOES: ~250-350 words.
Total ~1600+ words. Good.

Need to include [PAGE N] citations. I'll cite pages where content appears.

No betting lines. No toy equations. Use real formalism.

Let's draft carefully.

THINK_TRACE content:
Start with the epistemological break: EPV forward vs RL backward. Multi-hop derivation:
1. EPV treats possession as team-level MDP forward, V(s) = E[R | s]. All 5 offense share same V(s).
2. HoopEval refactors to per-agent Q_i(s_t, a_{<i}^t, a_i). Backward propagation through ordered state-action transitions.
3. Autoregressive factorization: joint Q(s,a) ≈ product or sequence Q_ball then Q_1...Q_5. Actually autoregressive Q means Q_i conditioned on previous agents' actions at same timestep.
4. Reward shaping via qSQ: dense vs sparse outcome. r_t = ΔqSQ or qSQ - b.
5. Bellman backup with MC max(target, return-to-go) addresses offline distributional shift.
Gray-zone audit: missing hex resolution N_cells, γ value, CQL α/β weights, qSQ baseline 0.40 provenance, player embedding dimensionality and whether identity is explicit, 5fps aliasing, forced terminal shot. Each is a singularity where breakdown occurs.

SOURCE_OPERATORS_AND_EQUATIONS:
Equations as above. Page citations.

RETROCAUSAL_GENEALOGY:
Lineage tree. Multi-week traps: roster turnover invalidates embeddings; defensive scheming adapts to qSQ baseline; off-ball value delay exceeds possession boundary.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under clock pressure, habitual shot/dribble. Counter-trap: model recommends dribble when defense overcommits to shot. Clock: 24s and 5fps. Recursive conditioning: ball first then off-ball creates artificial Stackelberg order; actual basketball has simultaneous moves. At frame 20, model's recommendation to dribble + coordinated movement is a counter-trap against defensive anticipation of shot.

CROSS_LAYER_VETO_ADJUDICATION:
Weather: indoor, null veto. Physical: NBA court 28.65m x 15.24m, rim 3.05m. Hex grid cell size unspecified; 19 neighbor actions assume Euclidean isotropy on hex grid. Biomechanical: no acceleration/jump limits; 5fps = 0.2s frame cannot resolve screen timing (typical screen set 0.5-1.0s). Veto proof: if required temporal precision < 0.2s or spatial precision < cell width, model output is physically unverifiable.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios as above with formal veto predicates and predictions.

Let's write it out now. Need to ensure XML sections exact names.

Check: ">= 1,000-WORD DEPTH across these exact XML sections". So sum across sections >= 1000 words.

Let's begin drafting.

I need to be careful with LaTeX syntax inside XML. It's fine.

Page citations:
- Intro/EPV vs RL: PAGE 1
- Prelims/Q-ball/Shapley: PAGE 2
- MARL/Dataset/MDP: PAGE 3
- State/Action space: PAGE 4
- Reward: PAGE 5
- Architecture/Encoder: PAGE 6
- Decoder/Bellman: PAGE 7
- Training/Marginal: PAGE 8
- Objective/Results Figure 3: PAGE 9
- Figure 4/action-level: PAGE 10
- Conclusion: PAGE 11
- References: PAGE 12

I will cite accordingly.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

HoopEval’s core derivation is an epistemological inversion of Expected Possession Value (EPV). In EPV [PAGE 1], a possession is modeled as a forward-looking Markov decision process in which V(s) = E[Σ γᵏ rₜ₊ₖ | sₜ = s] is a team-level state value; all five offensive players inherit the identical V(s) at each instant, so individual credit, especially for off-ball actions with delayed payoff, cannot be isolated [PAGE 1]. HoopEval instead refactors the possession into a per-agent autoregressive Q-function Qᵢ(sₜ, a₁:ᵢ₋₁ᵗ, aᵢᵗ), where i ranges over the ball-handling action and the five offensive movement agents [PAGE 7]. The backward credit assignment proceeds by chaining value through ordered state–action transitions: for every agent except the last, the Q-target is the maximum Q-value over the next agent’s action dimension at the same timestep; for the terminal agent, the target bootstraps to the discounted maximum Q-value of the first agent in sₜ₊₁ plus the immediate reward rₜ [PAGE 7–8]. This creates a temporal difference (TD) chain that propagates outcome information backward from the shot attempt to every preceding on-ball and off-ball decision, structurally enabling marginal-contribution attribution that EPV’s forward-value-prediction paradigm lacks [PAGE 1].

The reward model is handcrafted and dense rather than outcome-sparse [PAGE 5]. For non-shooting actions, rₜ = qSQ_ball(sₜ₊₁) − qSQ_ball(sₜ), where qSQ [19] is a continuous shot-quality measure. For shooting actions, rₜ = qSQ_ball(sₜ) − 0.40, with 0.40 a predefined baseline [PAGE 5]. Training uses Conservative Q-Learning (CQL) [23] to suppress out-of-distribution (OOD) action values, plus two auxiliary alignment tasks: predicting all five offensive players’ qSQ values from the encoder output, and a supervised ball-action classification (pass vs. dribble) under teacher forcing [PAGE 9]. The state space is a fully connected graph over a hexagonal court discretization: nodes are the ball, five offensive players, and the rim; edges carry three binary features—opposing team, ball holder, pass receiver—and a transformer with causal self-attention encodes spatiotemporal context [PAGE 4].

Gray-zone audit: the paper never specifies the number of hex grid cells, the discount factor γ, the CQL penalty weights, or the exact convex weights in the total loss [PAGE 9], making the numerical singularity regime of the optimizer unverifiable from text alone. The qSQ baseline 0.40 is exogenous and fixed; if qSQ is not player-conditioned, then a zero-percentage three-point shooter such as Rudy Gobert can still receive a spatially “open-shot” qSQ that the model must correct through learned player embeddings rather than explicit shooting priors—yet the embedding mechanism is only mentioned as “player embedding” without dimensionality or input specification [PAGE 4]. Downsampling SportVU from 25 fps to 5 fps imposes Δt = 0.2 s, aliasing screen-setting, close-out, and drive-and-kick timings that evolve on sub-0.2-second scales [PAGE 3]. Finally, the terminal frame is forcibly trimmed to the shot attempt via play-by-play data, which censors shot-clock violations, turnovers, and dead-ball endpoints and biases the reward structure toward shot-terminated possessions [PAGE 3].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Define the offline MDP for one offensive possession as  
\[
\mathcal{M} = \langle \mathcal{S}, \{\mathcal{A}_i\}_{i=1}^{d}, \mathcal{R}, \mathcal{S}' \rangle,\quad d=6,
\]  
where one agent indexes the ball action and five agents index offensive player movement [PAGE 3–4]. Time is discrete at 5 fps, so \(\Delta t = 0.2\) s and possession length \(T \le 24\) s [PAGE 3].

State space: the court is discretized into hexagonal cells \(\mathcal{C}\). At timestep \(t\),  
\[
s_t = G(\mathcal{V}_t,\mathcal{E}_t),\quad 
\mathcal{V}_t = \{v_{\text{ball}}, v_1,\dots,v_5, v_{\text{rim}}\},\quad v_p \in \mathcal{C}.
\]  
The graph is fully connected; each edge \(e_{ij}\) carries a binary feature vector  
\[
e_{ij} \in \{0,1\}^3 = [\text{opposing team},\ \text{ball holder},\ \text{pass receiver}].
\]  
A Graph Attention Network encodes spatial relations, and a causal self-attention transformer encodes temporal history [PAGE 4–6].

Action space: the ball action has six bins—shoot or pass to any of five offensive players, with dribble encoded as a self-pass [PAGE 4]. Each player’s movement action selects one of 19 neighboring hexagonal cells. The joint action is factored autoregressively:  
\[
a_t = (a_{\text{ball}}, a_1,\dots,a_5),\qquad 
a_{\text{ball}} \in \{0,\dots,5\},\quad a_i \in \{1,\dots,19\}.
\]

Reward model [PAGE 5]: for non-shot actions,  
\[
r_t = \mathrm{qSQ}_{\text{ball}}(s_{t+1}) - \mathrm{qSQ}_{\text{ball}}(s_t),
\]  
and for shot attempts,  
\[
r_t = \mathrm{qSQ}_{\text{ball}}(s_t) - b,\quad b = 0.40.
\]  
qSQ is treated as a dimensionless quality score in \([0,1]\); rewards inherit qSQ units.

Autoregressive Q-function [PAGE 7]:  
\[
Q_i(s_t, a_{1:i-1}^{t}, a_i^{t}; \theta)
\]  
is conditioned on the state embedding and on previously selected agents’ actions at the same timestep. Bellman targets: for \(i < d\),  
\[
y_i = \max_{a_{i+1}} Q_{i+1}\big(s_t, a_{1:i}^{t}, a_{i+1}\big);
\]  
for the last agent \(i=d\),  
\[
y_d = r_t + \gamma \max_{a_1} Q_1(s_{t+1}, a_1).
\]  
Monte Carlo stabilization replaces each target with \(\max(y_i, G_t)\), where \(G_t\) is the empirical return-to-go [PAGE 7–8].

Training objective [PAGE 9]:  
\[
\mathcal{L} = \mathcal{L}_{\text{TD}} + \alpha\,\mathcal{L}_{\text{CQL}} + \beta\,\mathcal{L}_{\text{qSQ}} + \delta\,\mathcal{L}_{\text{class}},
\]  
with CQL penalizing OOD Q-values and \(\mathcal{L}_{\text{class}}\) distinguishing pass vs. dribble under teacher forcing.

Breakdown and singularity regimes: (1) \(\gamma \to 1\) near shot-clock expiry induces non-episodic value drift because the 24 s hard cap truncates the horizon; (2) \(\Delta t = 0.2\) s aliases any biomechanical event faster than one frame; (3) the forced terminal shot censors non-shot possession endings, biasing the support of \(\mathcal{R}\); (4) if \(\mathrm{qSQ}(s) < 0.40\), every shot receives negative reward regardless of defensive pressure, creating a baseline-induced shooting suppression singularity.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week evaluation traps.

HoopEval descends from a well-marked chain of possession-value models. Cervone, D’Amour, Bornn, and Goldsberry’s EPV [1] established the foundational stochastic process for basketball possessions, but it remains a team-level forward model [PAGE 1]. Sicilia et al.’s DeepHoops [4] replaced hand-crafted stochastic processes with end-to-end spatio-temporal deep networks for micro-action evaluation [PAGE 2]. Yanai et al.’s Q-ball [5] introduced deep Q-learning to basketball and attempted player decomposition via Shapley-value attribution, which HoopEval explicitly rejects because Shapley values explain average model-prediction contribution rather than the logic of a specific within-possession decision [PAGE 2, citing 6]. Soccer analogues—Fernández, Bornn, and Cervone’s instantaneous EPV [7], xT [8], VAEP [9], and OBV [10]—all suffer the same individual-attribution gap [PAGE 2]. Multi-agent reinforcement learning foundations include AlphaStar [14], OpenAI Five [15], and Google Research Football [16], with value-decomposition architectures VDN [17] and QMIX [18] offering cooperative credit assignment in simulated environments [PAGE 2]. HoopEval’s methodological bridge is offline RL: Q-transformer’s autoregressive Q-functions [3] and Conservative Q-Learning [23], applied to real SportVU tracking data rather than simulated self-play [PAGE 2–3].

Multi-week traps arise when HoopEval is deployed beyond a single static dataset. First, player embeddings learned on the 2015–2016 SportVU corpus become stale under roster turnover, trades, and shooting-skill evolution; a player whose three-point gravity changes mid-season is still represented by a static embedding unless the encoder is continually retrained [PAGE 4]. Second, the fixed qSQ baseline \(b=0.40\) does not adapt to defensive scheming across weeks; if opponents converge on protecting the same high-qSQ spatial zones, the model’s reward signal loses discriminative power [PAGE 5]. Third, off-ball actions whose value materializes across possession boundaries—e.g., a screen that springs a shooter two possessions later—are invisible because the MDP resets at each offensive possession and the terminal frame is forcibly tied to a shot attempt [PAGE 3, 10]. Fourth, the autoregressive agent order (ball first, then players) imposes an artificial Stackelberg causality within each timestep that may not hold when off-ball movement precedes and causes the ball handler’s decision [PAGE 7]. These are not mere implementation details; they are structural breakdowns that accumulate over multi-week inference windows.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and the shot clock.

HoopEval’s action-level output at Frame 20 of the illustrative possession demonstrates a recursive theory-of-mind structure among the offensive agents [PAGE 9–10]. Under shot-clock pressure (the “clock”), the ball handler faces a crisis state: pass Q-values are low, shot Q-value is the lowest among ball actions, and defensive alignment constrains driving lanes [PAGE 8–9]. A naive policy under crisis would regress to a habitual low-percentage shot or a forced pass—the “crisis habit regression.” HoopEval instead prescribes continuing to dribble and coordinated movement toward a pick-and-roll between the ball handler (Player 2) and an off-ball teammate (Player 5) [PAGE 9–10, Figure 4]. This is a counter-trap: the model anticipates that the defense has overcommitted to contesting the immediate shot or pass, so the highest-value action is to withhold the shot, consume clock, and manipulate spacing to induce a defensive rotation failure.

The recursion operates because each agent’s Q-value is conditioned on the prior agents’ actions at the same timestep [PAGE 7]. The ball acts first in the autoregressive sequence, establishing a leader–follower hierarchy: the movement Q-values of Players 1–5 are computed conditional on the ball action already selected. This creates an embedded theory of mind in which off-ball players best-respond to the ball handler’s chosen action within the same decision epoch. In actual basketball, however, off-ball cuts and screens are often simultaneous with, or antecedent to, ball-handler decisions; HoopEval’s fixed ordering therefore imposes a causal asymmetry that may misattribute the true initiator of a pick-and-roll. The model’s strength is that it captures second-order strategic value: it assigns the highest team value to Frame 36 even though the ball handler’s instantaneous qSQ is still low, because it predicts downstream value from the pick-and-roll initiated earlier [PAGE 9]. The clock enforces the horizon: 24 seconds per possession, downsampled to 5 fps, means the recursion must unwind entirely within 120 state transitions per possession, and any habit regression that occurs in the final seconds is locked into the terminal reward structure [PAGE 3].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto layers.

Weather veto: null. NBA games are indoor; no atmospheric layer (wind, precipitation, temperature, humidity) enters the state space or reward function, so no weather veto condition is applicable [PAGE 3–5].

Physical layer: the court is a rigid rectangle (NBA dimensions approximately 28.65 m × 15.24 m, rim height 3.05 m) discretized into an unspecified number of hexagonal cells [PAGE 4]. The 19 movement actions correspond to nearest neighboring cells, which assumes locally isotropic, cell-centered locomotion and cannot represent sub-cell footwork, pivot mechanics, or release-point geometry. If a physically decisive action requires spatial resolution finer than one hex cell—e.g., a shooter’s toe on the three-point line or a defender’s close-out angle within a cell—the model output is vetoed as physically unverifiable [PAGE 4].

Biomechanical layer: speed and direction are implicitly captured by the transformer rather than explicit kinematic states [PAGE 4]. There are no acceleration limits, deceleration constraints, vertical-jump dynamics, or fatigue variables in \(\mathcal{S}\). At \(\Delta t = 0.2\) s, the maximum observable displacement per frame is bounded by cell width; any screen set, slash, or close-out that unfolds in under roughly 0.4–0.6 s is temporally aliased. Because pick-and-roll timing often depends on sub-second coordination between screener and ball handler, the 5 fps sampling vetoes high-frequency coordination patterns that the model claims to predict [PAGE 3–4]. The reward function’s dependence on ball-handler qSQ also means off-ball screens that do not immediately move the ball handler are biomechanically invisible within a single possession [PAGE 5, 10].

Veto adjudication summary: a model recommendation is admissible only if (i) it occurs indoors (weather null), (ii) its spatial expression is coarser than one hex cell, (iii) its temporal expression is slower than \(2\Delta t = 0.4\) s, and (iv) its value is mediated through ball-handler qSQ within the current possession. Any action violating (ii)–(iv)—for example, a sub-cell step-back, a 0.3 s slip-screen, or an off-ball decoy run whose payoff arrives in the next possession—is outside the model’s verified layer.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-via-verifiable-rewards (RLVR) counterfactual veto scenarios with formal veto predicates and predictions.

Veto Scenario 1 — Shot-clock expiry physical veto.  
Veto predicate: remaining shot-clock time \(\tau < t_{\text{dribble-to-shot}} + t_{\text{release}}\), where physical minimum \(t_{\text{dribble-to-shot}} \approx 1.2\) s and release time \(\approx 0.5\) s, so \(\tau < 1.7\) s. HoopEval at Frame 20-type states recommends dribble over shot because shot Q is low [PAGE 9]. Counterfactual: if \(\tau < 1.7\) s, the dribble action is physically infeasible as a scoring attempt; the only legal outcomes are a rushed shot or shot-clock violation. Prediction: HoopEval’s Q(dribble) > Q(shot) will be overridden by the environment; verified by comparing model policy against actual play-by-play in possessions ending with \(\tau < 2\) s, where the model’s dribble recommendation should correlate with shot-clock violations or forced low-qSQ shots rather than successful possessions.

Veto Scenario 2 — Off-ball screen delayed-value veto.  
Veto predicate: an off-ball screen set by player \(j\) at time \(t\) whose offensive value materializes in possession \(t+k\) with \(k \ge 1\), not within the current possession’s terminal shot [PAGE 3, 10]. Because HoopEval attributes credit only through in-possession qSQ changes of the ball handler and resets at each possession boundary [PAGE 3, 5], the screen’s Q-value is predicted to remain near zero despite high lineup plus-minus impact. Prediction: for screened actions where ball-handler qSQ does not rise within \(\Delta t = 0.2\)–1.0 s but team efficiency rises over the next 3–5 possessions, HoopEval’s off-ball Q_j will be statistically indistinguishable from Q_j for non-screen movement, a verifiable null result against SportVU plus-minus stratified by screen events.

Veto Scenario 3 — Player-conditioned qSQ shooter-mismatch veto.  
Veto predicate: spatial qSQ(s) > 0.60 for an open three-point attempt but the ball handler’s career three-point conversion rate \(p_{3P} < 0.10\) (e.g., a Rudy Gobert-type profile [PAGE 8]). The paper notes Gobert’s zero career three-point percentage as external context that lowers team value despite favorable spatial qSQ [PAGE 8], but qSQ itself may not be player-conditioned [PAGE 5]. Prediction: if HoopEval’s Q(shoot) remains high purely from spatial qSQ, the model will over-recommend shots for zero-gravity players; verified by checking whether Q(shoot) correlates with spatial qSQ alone or with \(p_{3P} \cdot \mathrm{qSQ}\). Counterfactual intervention: multiply qSQ by player-specific \(p_{3P}\); if the corrected model’s shot recommendations align with actual FG% while the uncorrected model does not, the uncorrected qSQ reward is vetoed for non-shooter ball handlers.
</RLVR_COUNTERFACTUAL_VETOES>