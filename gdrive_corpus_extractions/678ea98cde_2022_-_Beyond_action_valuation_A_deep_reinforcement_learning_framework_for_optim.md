---
source: "2022 - Beyond action valuation A deep reinforcement learning framework for optimizing player decisions in soccer - Rahimian et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2022"
pages: 24
model: deepseek/deepseek-v4.1-flash-1017
words: 9213
---

<NATIVE_REASONING>
We need answer to user. Need produce deep multi-section XML exact. Need obey no betting lines. Need cite pages exact [PAGE N] markers and verbatim quotes when source pages provided. Need >=1000 words total. Need include THINK_TRACE >=400 words. Need formal LaTeX equations, SI/information/probability units, assumptions, singularities/breakdown regimes. Need source operators and equations. Need retrocausal genealogy. Recursive theory of mind. Cross-layer veto adjudication physical/biomechanical/weather veto proof. RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Must not mention spreads/totals/moneylines/odds. Need no fake ratios. We can discuss soccer decision framework, EPO, policy gradient, MDP. Need perhaps identify gray-zone traps, limitations. Need cite exact [PAGE N] and verbatim quotes. The source text includes page markers? It has page numbers 1-25 maybe. The user says PAGES:24 but source text has pages 1 through 25? We should cite [PAGE 1] etc according to displayed page numbers. Need exact quotes. We can quote e.g. "The EPO ranges from -1 to +1, where +1 corresponds to scoring a goal at the end of a possession and -1 corresponds to conceding a goal at the end of a possession." [PAGE 1]. Need ensure exact text. Many quotes.

Need maybe formulate <THINK_TRACE> deep derivation. Include multi-hop: from MDP tuple, state channels, policy network, selection/success surfaces, reward engineering, EPO discounted sum, off-policy PG, OPE, use cases. Gray-zone audit: selection surface sums to 1, success surface sigmoid independent per zone, action space continuous/discrete, episode definitions, reward negative xG, discount gamma=0.99, EPO normalization, OPE assumptions, evaluation. Need mention singularities/breakdown regimes: softmax denominator zero? Not exactly; policy probabilities, log-loss, off-policy importance weights overflow/variance when behavior policy assigns near-zero to actions; success sigmoid saturation; discount horizon; episode boundary ambiguity; non-stationarity; unobserved variables; distribution shift; reconstruction hallucination; reward xG model limits; no transition probabilities (off-policy) etc. Need use SI units: positions in metres, pitch 105×68 m, temporal sampling 25 Hz = 0.04 s, velocities m/s, distance m, angle rad or degrees, probabilities dimensionless [0,1], EPO dimensionless normalized [-1,1], discount γ dimensionless. Log-loss in nats? If natural log, units nats per action; could say if base-e. Information units. Need formal equations.

Need include [PAGE N] citations. Need not overdo but enough. Need mention no betting. Need "source operators and equations" formal. Need quote exact. Could use equation:
MDP tuple \( \mathcal{M}=(\mathcal{S},\mathcal{A},R,\pi)\). Source formatting broken: "tuple of , where represents ... (𝑆𝑆, 𝐴𝐴, 𝑅𝑅, 𝜋𝜋)" [PAGE 7]. Need quote exactly maybe "The MDP models the probability that the ball carrier selects the destination location..." [PAGE 7].
EPO equation as source: \( \mathrm{EPO} = \sum_{c=1}^{H} \mathbb{E}_{(s_c,a_c)\sim\pi}[\gamma^c r(s_c,a_c)]\). Actually source has c~π and c=1 to H. Need cite [PAGE 10]. Need exact quote "EPO = ∑ 𝔼𝔼 [𝛾𝛾𝑐𝑐 𝑟𝑟(𝑠𝑠 , 𝑎𝑎" messy. We can reconstruct. Need cite page 10. Need mention gamma=0.99 from [PAGE 10] quote "the discount factor that we set to 0.99". Need quote "The EPO is a real-valued number in the range (-1,1) after normalization." [PAGE 10].
Policy gradient equation (2) absent in source? It says gradient can be defined as in (2) but equation omitted in extracted text. Need note equation (2) not present in source text? But we can formalize standard off-policy PG. Need careful: source page 11 says "In the off-policy PG algorithm, the gradient can be defined as in (2):" but no equation visible. We can state extracted text omits Eq. (2); formal reconstruction is \( \nabla_\theta J(\theta)=\mathbb{E}_{(s,a)\sim \pi_\theta}[ \nabla_\theta \log \pi_\theta(a|s) \hat A(s,a)] \) or off-policy with importance ratio. But we should label as reconstruction, not source quote. Need mention exact source has "off-policy variant of PG methods... transition probabilities are not considered" [PAGE 10]. Great.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage: action valuation (xT, VAEP, QPass, EPV), MDP/RL, policy gradient, OPE, discount trap method [12], Opta phases, half-spaces Guardiola/Klopp. Multi-week traps: reward sparsity, reward engineering, non-stationary policy, episode definition, OPE variance, selection vs success conflation, counterfactual claims. Multi-week traps maybe "teams could improve +2.5 goals" unrealistic due perfect execution; Table 2. Need mention page 17 "Although such an improvement is not much realistic in the real-world as it assumes that all players can perfectly follow the optimal policy". Exact quote [PAGE 17]. Good.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Interpret: model player/coach decision-making and recursive beliefs. Crisis habit regression = reverting to behavioral policy under pressure; counter-trap = opponent anticipates optimal policy and sets traps; clock = possession phase/time/score. Need discuss how EPO and policy surfaces are team-specific, but not individual; source future work: "expand current framework to capture contributions of individual players" [PAGE 22]. Need discuss recursive theory of mind: player models coach/opponent; behavior policy is historical habit; optimal policy from RL; counter-trap scenario when opponent changes transition probabilities (source assumes off-policy no transition probs) [PAGE 10]. Clock: possession phase, score difference reward. Need mention limitation of team-level model cannot capture individual intent. Need exact quotes [PAGE 8] phases. Need maybe mention "score difference at given moment" [PAGE 9].

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. We need prove vetoes: policy surfaces don't include physical feasibility, biomechanics, weather. Source input channels include locations, velocities, distances, angles, not player orientation, acceleration, fatigue, weather. Need cite input channels [PAGE 4]. Veto: if ball destination is optimal but physically impossible due max speed/acceleration, weather, surface, etc. Need formal veto condition: e.g., \( \Delta t_{\min} = \|d - p_i\| / v_{\max} \) vs available time; \( a_{\max} \); friction; pass speed; player reach; weather reduces traction. Need not invent fake ratios? We can use formal kinematic feasibility. "Veto if feasible set \( \mathcal{A}_{\rm phys}(s)=\emptyset \) or optimal action \(a^*\notin \mathcal{A}_{\rm phys}\)". Need mention units: metres, seconds, m/s, m/s². Weather: wind vector affects ball trajectory; rain reduces coefficient of friction. Need cite source doesn't include weather. It includes velocities and positions, not orientation/acceleration/weather. Need exact quote maybe "The input data channels contain different types of low-level information for each square meter of the field" [PAGE 4]. Also "The tracking data include (x,y) coordinates ... at 25 observations per second" [PAGE 3]. Physical veto proof: if action requires exceeding biomechanical constraints or external conditions, EPO estimate is not deployable. Need maybe mention goalkeeper/defender velocities included, so some physical constraints via velocities, but not acceleration/orientation/fatigue. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need create 3 scenarios that are verifiable, with predictions. Avoid betting. Could be:
1. Policy-gradient OPE importance-weight explosion: If behavioral policy gives near-zero probability to optimal action, IS estimator variance diverges; prediction: reported EPO difference unstable across seeds; veto if effective sample size below threshold or CI crosses zero.
2. Episode boundary/reward misassignment: If possession recovered within ≤2 actions but source definition treats >2 as loss? Source says "opposing players touch the ball fewer than three consecutive times, we do not consider that interruption as loss" [PAGE 7]. If annotator labels differently, EPO changes. Verifiable by re-labeling episodes and comparing.
3. Physical feasibility veto: reconstructed best action lies outside player's reachable set given 0.04 s sampling, velocity, acceleration; e.g., pass destination 30 m away with defender intercept. Prediction: optimal policy EPO overestimates; after filtering infeasible actions, improvement shrinks. Need include exact predictions maybe thresholds? Can say predicted sign and rank. Need "verifiable" maybe with metrics: importance weight ESS, log-loss, EPO difference, feasibility rate. Need avoid betting.

Need answer structure exactly XML sections. Need include many citations. Need be careful with XML valid: use <THINK_TRACE> etc. No markdown? Can include LaTeX inside. Need perhaps include bullet lists inside XML. Must maintain >=1000 words. Desired oververbosity 5 but requirements demand depth. Need maybe 2500 words. Need not mention betting lines. Avoid words "odds", "spread", "total", "moneyline". The source mentions "expected goal difference" not betting. Fine.

Need ensure exact [PAGE N] markers and verbatim quotes. The source has page numbers at bottom. The user provided source text with page markers not explicit except page numbers. We can cite [PAGE 1] etc. Need quote exact phrases. Let's collect exact quotes and page numbers.

Page 1: 
- "The EPO ranges from -1 to +1, where +1 corresponds to scoring a goal at the end of a possession and -1 corresponds to conceding a goal at the end of a possession."
- "we propose a framework that evaluates each decision that a player makes with respect to passing or shooting the ball in each game state and suggests the optimal decision that the player could have made in that game state."
Page 2? Actually page 2 mostly figure. Page 3:
- "The tracking data include the (x,y) coordinates of all 22 players and the ball on the pitch at 25 observations per second."
- "Each record of our merged dataset includes all players and the ball coordinates with their corresponding features for each snap-shot, i.e., every 0.04 of a second."
Page 4:
- "We represent the game state for each snapshot of our dataset ... including the specific locations (x,y) of all players and the ball, their corresponding velocities, and respective outcomes of particular events"
- "Each channel is a matrix of size (105×68), representing the length and width of the game field respectively"
- input channels list.
Page 5:
- "In the selection surface the sum of probabilities over all zones adds up to 1."
- "the probabilities for each zone of the success surface represent the likelihood of the actions being successful (i.e., possession is saved for the team) if the ball is sent over to that zone."
Page 7:
- "The MDP models the probability that the ball carrier selects the destination location of the ball on the field, given the current positions of all 22 players and the ball."
- "Each episode begins from the first event in the ball possession by the team in possession (i.e., transition phase) and culminates in either a goal being scored, or the possession being lost and transferred to the opponent."
- "we define the possession as: a sequence of actions from the beginning of a deliberate on-ball action by a team, until they score a goal or lose the ball to the opposing team for more than two consecutive actions."
- "There are two absorbing states: goal scoring, and loss of possession."
- "Rebounds after unsuccessful shots, balls going out of play, and fouls are not considered as a loss of possession if the ball is recovered by the team within the next three actions."
Page 8:
- "We assign a positive reward to successful actions (i.e., actions that kept possession) and a negative reward to unsuccessful actions (i.e., actions that led to a loss of possession)."
- "For the unsuccessful actions, we use the negative of the expected-goals value for the opponent's shot"
- "we split each possession into several phases of play according to the Opta possession framework"
Page 9:
- Build-up reward depends score difference.
Page 10:
- "The EPO is a real-valued number in the range (-1,1) after normalization."
- "we introduce the notion of Expected Possession Outcome (EPO) for which we took inspiration from discounted rewards in RL algorithms."
- "the discount factor that we set to 0.99 in this work after carefully tuning with the discount trap method proposed in [12]."
- "If the possession continues until the attacking phase, the reward of the last action is associated with x."
- "we take advantage of the Policy Gradient (PG) algorithm [13,14,15], that is a popular technique in RL to get the optimal actions in a continuous space."
- "the agent learns (trains and evaluates) solely from historical data, without online interaction with the environment."
- "Thus, the transition probabilities are not considered in this algorithm, and we have not considered them either in our approach."
Page 11:
- "In the off-policy PG algorithm, the gradient can be defined as in (2):"
- OPE: "we compare the performance of the behavioral and optimal policies through three different evaluation methods: importance sampling, doubly robust, and through looking at the outcome of the reconstructed possessions"
Page 12:
- Figure 7 description: "The behavioral policy yields -0.01 EPO (likely to lose the game by 1 goal), whereas the optimal policy yields higher expected goal difference predicted by all evaluators."
- "given an average of 100 possessions per team in a game, they would improve their expected goal difference per game by 2.5 goals, from -1 to +1.5 evaluated by IS"
Page 13:
- "Union’s behavioral policy is quite close to the optimal one. The relatively small EPO difference of 0.00031"
Page 15:
- "we provide a fine-grained analysis of the behaviors for each specific team in the league and provide the optimal decisions as well as the number of potential additional goals they could score throughout a game."
- "We develop a league-wide model by training the network on all games of the 2020-21 season, and then fine-tune the policy network to develop a team-specific model for each of the 18 teams using the games of the 2021-22 season until the moment of writing this paper (October 2021)."
Page 16 Table 2.
Page 17:
- "Although such an improvement is not much realistic in the real-world as it assumes that all players can perfectly follow the optimal policy (which is not the real case)"
- "the optimization results propose a larger propensity of backward passes on the wings, a smaller propensity of backward passes and a larger propensity of shots in the half-spaces, and a larger propensity of forward passes and sideway passes in the center."
Page 22:
- "A direction for future work is to expand the current framework to capture the contributions of individual players such that they could adapt themselves to their team-specific optimal strategy."
- "To the best of our knowledge, our work is the first attempt to use reinforcement learning to maximize the expected possession outcome for the full pitch surface in soccer."
Page 24? pseudo-code figure. Page 25 Figure 13. Not needed.

Need exact page citations: User says PAGES:24 but source pages 1-25. We can use [PAGE 1] etc. Need maybe not cite page 25 if page count 24? But source has page 25 at Figure 13. We'll cite up to 25? User says pages 24, but source text includes 25. To be safe cite [PAGE 24] for appendix, [PAGE 25] maybe not. But exact markers should correspond to source's printed page numbers. The user says PAGES:24 maybe expects 24 pages. We can cite [PAGE 24] for appendix A.1. But Figure 13 is page 25, weird. We can avoid page 25.

Need formal LaTeX. Since XML, LaTeX with \(...\). Need not escape. Ampersand in text? XML needs escape & if used. We can avoid ampersands or use "and". But LaTeX may include & in aligned? Avoid. If include \(\mathcal{M}=(\mathcal{S},\mathcal{A},R,\pi)\), no ampersand. Need avoid "<" in text? XML text can include < only as tag. In equations, < is okay? XML parser would treat < as start tag. Need escape &lt; if using < in text. Better avoid < in plain text or use words. In LaTeX, \le, \ge instead of <. Use \(0 \le \pi \le 1\). Good. Avoid "&". Use "and". Need avoid raw ">"? > is okay but can use words. Need avoid "×"? Fine. Need avoid "≤" maybe okay. XML supports unicode. But use \le.

Need exact XML sections. We can include paragraphs. Need no markdown headings outside XML? The answer should be only XML sections. Could include all.

Need satisfy "STRICT INVARIANTS: ZERO BETTING LINES" no mention. Good.

Need formal equations with units and assumptions. Let's plan content.

THINK_TRACE (>=400 words):
- State: source is paper on deep RL framework. Purpose: derive actual and optimal team behavior from tracking/event data. Need not treat as prediction market or betting.
- Multi-hop derivation:
  1. Data: 330 games 2020-21 + 100 games 2021-22, 25 Hz tracking, event merge, 0.04 s; pitch 105×68 m, 7140 zones. Each state = 11 matrices.
  2. Behavioral model: policy network outputs selection surface (softmax over zones sum to 1) and success surface (sigmoid per zone). Selection is team propensity; success is possession retention probability. Log-loss compared to baselines.
  3. MDP: states, actions, reward, policy; episodes possession; absorbing states goal/loss. Reward engineered by Opta phases; positive for success, negative opponent xG for failure; phase-specific objectives.
  4. EPO: discounted expected reward sum, gamma=0.99, normalized [-1,1]. Behavioral vs optimal.
  5. Optimization: off-policy policy gradient from historical data; no online interaction; transition probabilities omitted. Output optimal selection surface.
  6. Evaluation: OPE IS, DR, reconstructed possessions. Team-specific fine-tuning; league-wide model.
- Gray-zone audit: 
  - Selection vs success surfaces are not values; success is immediate retention, not long-term EPO. Cannot directly multiply selection and success to get EPO.
  - EPO units dimensionless probability-like but normalized; not literal goal probability? It is interpreted as likelihood after normalization; reward engineering and xG approximate.
  - Off-policy PG no transition model means counterfactual actions not simulated with opponent response; OPE uses historical behavior support. Breakdown if behavior policy has zero support for optimal action: importance weights undefined/infinite variance.
  - Episode definition has ambiguity: >2 consecutive opponent touches; rebounds/fouls/out-of-play within next three actions not loss. Different labels change EPO.
  - State channels omit orientation, acceleration, fatigue, weather, player identity, ball height, pressure? Actually pressure via positions/velocities and K-means. Need mention.
  - Team-level policy not individual; future work needed.
  - Softmax/sigmoid singularities: softmax underflow if logits extreme; sigmoid saturation yields zero gradients; log-loss finite if target in support, but if target probability zero -> infinite log-loss. 
  - Discount horizon: gamma^c, H variable; if H large but gamma 0.99, effective horizon ~100 actions; if H small, EPO truncated; if reward scale changes, normalization.
  - OPE IS variance, DR model misspecification.
  - Table 2 shows large improvements; source admits unrealistic perfect execution [PAGE 17].
  - Need cite exact quotes.

SOURCE_OPERATORS_AND_EQUATIONS:
- Formal definitions. Use LaTeX.
  - State representation \(S_t \in \mathbb{R}^{11\times105\times68}\), positions metres, velocity m/s, distance m, angle rad.
  - Selection surface \(\pi_\theta(a=z|s)\) over zones \(z\in\mathcal{Z}\), \(\sum_{z\in\mathcal{Z}}\pi_\theta(z|s)=1\). Success surface \(q_\phi(z|s)\in[0,1]\). Units: probability dimensionless; information log-loss in nats if natural log.
  - MDP \(\mathcal{M}=(\mathcal{S},\mathcal{A},R,\pi)\). \(R(s,a)\) dimensionless normalized reward; negative \(R=-xG_{\rm opp}(s,a)\) for failure. EPO \( \mathrm{EPO}(\pi)=\sum_{c=1}^{H}\mathbb{E}_{(s_c,a_c)\sim\pi}[\gamma^c R(s_c,a_c)]\), \(\gamma=0.99\), dimensionless, normalized to [-1,1]. Assumptions: finite horizon H, Markov state, reward engineering captures phase objectives, no transition probabilities in off-policy PG.
  - Off-policy PG gradient reconstruction: \( \nabla_\theta J(\theta)=\mathbb{E}_{(s,a)\sim \pi_{\rm behav}} [ \frac{\pi_\theta(a|s)}{\pi_{\rm behav}(a|s)} \nabla_\theta \log \pi_\theta(a|s) \hat A(s,a)]\). Need label as reconstructed because Eq. (2) omitted in extraction. Or standard PG: \( \nabla_\theta J = \mathbb{E}_{\pi_\theta}[\nabla_\theta \log \pi_\theta(a|s) \hat Q(s,a)]\). Since source says off-policy, use importance sampling. Mention source says "In the off-policy PG algorithm, the gradient can be defined as in (2):" [PAGE 11] but equation not in extracted text.
  - OPE IS estimator: \( \hat V_{\rm IS}(\pi_\theta)=\frac{1}{N}\sum_{i=1}^{N} (\prod_{c=1}^{H_i} \frac{\pi_\theta(a_{i,c}|s_{i,c})}{\pi_{\rm behav}(a_{i,c}|s_{i,c})}) G_i\). G_i return. Breakdown: behavior prob zero; high variance; ESS. DR: \( \hat V_{\rm DR} = \frac{1}{N}\sum_i [ \hat V(s_{i,1}) + \rho_i (G_i - \hat Q(s_{i,1},a_{i,1}))]\), with \(\rho_i\) importance ratio. Mention assumptions.
  - Physical feasibility: \( \mathcal{A}_{\rm phys}(s)=\{a: \|d_a-p_i\|\le v_{\max}\Delta t + \frac12 a_{\max}\Delta t^2, \ldots\}\). Veto \(a^*\notin \mathcal{A}_{\rm phys}\). Units.
  - Breakdown regimes: zero behavior support, softmax underflow, sigmoid saturation, episode boundary misclassification, reward non-stationarity, OPE model misspecification, physical/weather infeasibility. Cite pages.
- Need cite exact quotes with page numbers.

RETROCAUSAL_GENEALOGY:
- Historical lineage: action valuation (xT, QPass, VAEP, EPV) [refs 1-6], MDP/RL, policy gradient [13-15], OPE [17-19], discount trap [12], Opta phases. The paper's "beyond action valuation" moves from valuing realized actions to optimal full-surface policy. It uses tracking data and neural policy surfaces. Multi-week traps: reward engineering is handcrafted; phase-specific objectives; non-stationary policy; episode definition; team-specific fine-tuning limited data (100 games 2021-22); OPE from historical data; counterfactual claims. Need cite [PAGE 7] "Due to the different objectives ... non-stationary policy" and [PAGE 8] reward functions. Also "the estimated surfaces are not comprehensive enough..." [PAGE 7? Actually page 7 top: "the estimated surfaces are not comprehensive enough..."]. Need quote.
- "Multi-week traps" maybe means traps over multiple weeks of competition? We can interpret as multi-week analytical traps: overfitting to short window, behavior drift, opponent adaptation, player availability, weather. Need discuss.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under pressure, players revert to behavioral policy (historical habit), even if optimal surface suggests alternative. Source says behavioral policy estimated from historical games; optimal is team-specific. Cercle Brugge example: Daland dribbles despite optimal pass to Kanoute; Hotic dribbles and takes unsuccessful attempt; EPO difference 0.014 [PAGE 15? Actually page 14? Let's check: Cercle example is page 14-15. The text on page 14 says "The EPO difference for Cercle Brugge for this possession is 0.014" [PAGE 14? The page number at bottom of that segment is 15? Wait source: after Figure 8 on page 14, then page 15 continues Cercle Brugge possession. The quote "The EPO difference for Cercle Brugge for this possession is 0.014" appears before page 15? Let's locate: Page 14 starts with "the EPO’s resulting from the optimal and behavioral policies..." then Figure 8. Then page 15 begins "the EPO’s resulting..." Hmm actually the text "2. An unsuccessful Cercle Brugge possession" starts on page 14 after Figure 8. Then page 15 has "the figure again shows..."? Wait the source: 
"Figure 8. ... 14 
2. An unsuccessful Cercle Brugge possession : Figure 1 shows ... The figure again 
[page 15]
shows the behavioral selection surfaces... The EPO difference for Cercle Brugge for this possession is 0.014..."
Thus quote is on [PAGE 15]. Good.
- Counter-trap: opponent can anticipate optimal policy. Since source omits transition probabilities and assumes off-policy historical data [PAGE 10], the optimal policy is not a game-theoretic equilibrium. Opponent may set traps by leaving apparent optimal zones open. Recursive ToM: player models coach, coach models opponent, opponent models player's habit. The model's "optimal" is against historical average, not adversarial best response. Need mention.
- Clock: score/time/phase. Reward in build-up depends on score difference [PAGE 9]; phases transition, established, attack [PAGE 8-9]. The "clock" is possession phase and match score/time. Crisis under time pressure may increase long balls/shots. Need mention source's phase-specific rewards. 
- Need cite exact quote "Depends on the score difference at the given moment of the game" [PAGE 9]. Good.
- Future work individual players [PAGE 22].

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical/weather veto proof. Need formal:
  - Source state includes positions, velocities, distances, angles [PAGE 4], but not acceleration, orientation, limb reach, fatigue, surface, weather.
  - Veto 1 biomechanical: If optimal pass requires player to generate ball speed \(u\) greater than \(u_{\max}\) or accelerate beyond \(a_{\max}\), or reach point outside \(r_{\rm reach}\), action infeasible. Use \( \|p_{\rm target}-p_i(t)\| \le v_i \Delta t + \frac{1}{2} a_{\max}\Delta t^2\) in m. If not, veto.
  - Veto 2 physical ball: wind vector \(\mathbf{w}\) and drag; projectile range changes. If predicted landing error \( \|\Delta d\| > \epsilon\), EPO surface invalid for that zone. Need quantify maybe \( \epsilon\) threshold. We can say "if displacement exceeds half-zone width 0.5 m" (zone 1×1 m). That's a formal threshold, not fake ratio. Unit m. 
  - Veto 3 environmental: rain/snow reduces traction coefficient \(\mu\); required acceleration \(a_{\rm req} > \mu g\) infeasible. Use \(a_{\rm req} \le \mu g\). Units m/s². If violated, veto. 
  - Veto 4 observational: tracking at 25 Hz; ball speed high, position error; if \(\Delta t=0.04\) s and ball speed 30 m/s, displacement 1.2 m per sample. Cannot resolve zone-level actions below 1 m. Good! This is a strong physical/temporal veto. Use \(v \Delta t\). If zone 1 m, at 30 m/s ball moves 1.2 m per frame. So sub-zone decisions not identifiable. This is a gray-zone. Need cite sampling [PAGE 3]. 
  - Proof: optimal action \(a^*\) from policy network is only valid if \(a^*\in\mathcal{A}_{\rm phys}\cap\mathcal{A}_{\rm obs}\). Otherwise cross-layer veto. 
  - Weather not in source; use as veto proof. 
  - Need say "physical/biomechanical/weather veto proof" maybe prove by construction: if external layer imposes constraint not represented in state, two identical state inputs can have different feasible sets and outcomes, so policy is non-Markov with respect to represented state; EPO estimate biased. Formal: if \(s_1=s_2\) under model representation but \( \mathcal{A}_{\rm phys}(s_1)\ne\mathcal{A}_{\rm phys}(s_2)\), then \(\pi_\theta(a|s)\) cannot distinguish, so any deterministic optimal action may be infeasible in one. This is a proof of veto. Good.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios. Use "RLVR" maybe reinforce learning with verifiable rewards. Need predictions.
Scenario 1: Importance-weight support veto. Suppose behavior policy \(\pi_{\rm behav}(a^*|s)\le \epsilon\). IS estimator variance. Verifiable: compute ESS and bootstrap CI. Prediction: if ESS < 100 or max weight > 0.1N? We can state threshold. Veto if CI of EPO difference includes zero or sign flips. Prediction: reported +2.5 expected goal difference [PAGE 12] will shrink substantially and may not replicate under support filter. Need not give exact numerical? Could say "predicted rank order of teams in Table 2 loses monotonic relation". But "verifiable predictions" can be qualitative with measurable criteria. 
Scenario 2: Episode boundary/rewind labeling. Re-label possessions under alternative rule (e.g., treat any opponent touch as loss vs >2 consecutive touches). Source rule [PAGE 7]. Verifiable: recompute EPO; compare. Prediction: EPO differences and Table 2 improvements change most for high-pressing teams; sign remains but magnitude shifts. Need maybe specify "Cercle Brugge and Beerschot largest changes" due bottom-table? Hmm not necessarily. But prediction can be "teams with more turnovers within two actions" have larger shifts. That's verifiable.
Scenario 3: Physical feasibility/weather filter. Apply kinematic feasibility and wind/rain filter to optimal actions; recompute optimal policy restricted to feasible zones. Prediction: optimal EPO improvement decreases; long balls and shots from distance decrease more than short passes; reconstructed possessions with infeasible long balls drop. Verifiable by comparing action propensities and EPO. 
Maybe also "team-specific fine-tuning leakage": chronological split? They use 2020-21 train and 2021-22 fine-tune. Could be scenario: temporal leakage. But requirement 3 scenarios. We can include 3.

Need include exact predictions with sign and metrics:
- Scenario 1: If \(\pi_{\rm behav}(a^*|s)<10^{-3}\), importance weights \(>10^3\); variance grows. Prediction: IS EPO point estimate >0 but 95% bootstrap interval crosses 0 for at least bottom teams; DR remains smaller. Veto.
- Scenario 2: If episode boundary labels changed, EPO difference changes by >0.005 for teams with top pressing? Need not exact. "Prediction: the league-wide EPO difference will not remain exactly 0.025; it will move by at least one standard error of possession-level EPO." That's verifiable.
- Scenario 3: Restrict to physical feasible set; prediction: optimal long-ball propensity decreases in attack phase; EPO improvement drops from 0.025 to lower. Verifiable.

Need ensure ">=1,000-word depth across exact XML sections." We'll write ~2500 words. Need maybe include exact quotes and citations. Need not include markdown outside. Need be concise but deep.

Let's draft carefully.

Need maybe mention "source pages" [PAGE N]. Use exact quote phrases. Must not invent page citations. Need ensure quotes match source. Let's verify some exact quotes:
Page 1: "The EPO ranges from -1 to +1, where +1 corresponds to scoring a goal at the end of a possession and -1 corresponds to conceding a goal at the end of a possession." yes.
Page 1: "Our optimization framework enables soccer clubs to analyze their pass and shot tendencies on different pitch zones and different phases of ball possession." yes.
Page 3: "The tracking data include the (x,y) coordinates of all 22 players and the ball on the pitch at 25 observations per second." yes.
Page 3: "every 0.04 of a second." yes.
Page 4: "Each channel is a matrix of size (105×68), representing the length and width of the game field respectively" yes.
Page 5: "In the selection surface the sum of probabilities over all zones adds up to 1." yes.
Page 5: "the probabilities for each zone of the success surface represent the likelihood of the actions being successful (i.e., possession is saved for the team) if the ball is sent over to that zone." yes.
Page 7: "The MDP models the probability that the ball carrier selects the destination location of the ball on the field, given the current positions of all 22 players and the ball." yes.
Page 7: "Each episode begins from the first event in the ball possession by the team in possession (i.e., transition phase) and culminates in either a goal being scored, or the possession being lost and transferred to the opponent." yes.
Page 7: "we define the possession as: a sequence of actions from the beginning of a deliberate on-ball action by a team, until they score a goal or lose the ball to the opposing team for more than two consecutive actions." yes.
Page 7: "Rebounds after unsuccessful shots, balls going out of play, and fouls are not considered as a loss of possession if the ball is recovered by the team within the next three actions." yes.
Page 8: "We assign a positive reward to successful actions (i.e., actions that kept possession) and a negative reward to unsuccessful actions (i.e., actions that led to a loss of possession)." yes.
Page 8: "For the unsuccessful actions, we use the negative of the expected-goals value for the opponent's shot" yes.
Page 9: "Depends on the score difference at the given moment of the game." yes.
Page 10: "The EPO is a real-valued number in the range (-1,1) after normalization." yes.
Page 10: "the discount factor that we set to 0.99 in this work after carefully tuning with the discount trap method proposed in [12]." yes.
Page 10: "the agent learns (trains and evaluates) solely from historical data, without online interaction with the environment." yes.
Page 10: "Thus, the transition probabilities are not considered in this algorithm, and we have not considered them either in our approach." yes.
Page 11: "In the off-policy PG algorithm, the gradient can be defined as in (2):" yes.
Page 11: "we compare the performance of the behavioral and optimal policies through three different evaluation methods: importance sampling, doubly robust, and through looking at the outcome of the reconstructed possessions" yes (slightly line breaks).
Page 12: "The behavioral policy yields -0.01 EPO (likely to lose the game by 1 goal), whereas the optimal policy yields higher expected goal difference predicted by all evaluators." yes.
Page 12: "given an average of 100 possessions per team in a game, they would improve their expected goal difference per game by 2.5 goals, from -1 to +1.5 evaluated by IS" yes.
Page 15: "The EPO difference for Cercle Brugge for this possession is 0.014" yes.
Page 17: "Although such an improvement is not much realistic in the real-world as it assumes that all players can perfectly follow the optimal policy (which is not the real case)" yes.
Page 22: "A direction for future work is to expand the current framework to capture the contributions of individual players such that they could adapt themselves to their team-specific optimal strategy." yes.
Page 22: "To the best of our knowledge, our work is the first attempt to use reinforcement learning to maximize the expected possession outcome for the full pitch surface in soccer." yes.
Page 15? "We develop a league-wide model by training the network on all games of the 2020-21 season, and then fine-tune the policy network to develop a team-specific model for each of the 18 teams using the games of the 2021-22 season until the moment of writing this paper (October 2021)." yes page 15.
Page 17: "the optimization results propose a larger propensity of backward passes on the wings, a smaller propensity of backward passes and a larger propensity of shots in the half-spaces, and a larger propensity of forward passes and sideway passes in the center." yes.

Need maybe quote "Due to the different objectives of the distinct phases of a soccer game (i.e., non-stationary policy), our reward engineering approach applies various reward functions in different phases" [PAGE 8]. yes.
Page 8: "Due to the different objectives of the distinct phases of a soccer game (i.e., non-stationary policy), our reward engineering approach applies various reward functions in different phases with the aim of incorporating the tactical characteristics of the game in their design." yes.

Need source "The current analytical methods [6,10] propose estimating value surfaces by training the neural network to predict the probability of goal scoring within the next 10 actions or at the end of the actual possession." [PAGE 7] maybe. Could use.

Need "source operators and equations" include "Page citations, breakdown." Good.

Need not mention "betting" at all. Avoid "odds" etc.

Need answer in XML. Need not use markdown code fences. Need escape "×" okay. Need avoid "&" in LaTeX? We can write "and" in text. In equations, \mathbb{E}_{(s,a)\sim\pi} no &. Good.

Potential issue: XML with LaTeX containing "<" or ">"? Use \le, \ge. Use \(...\). No raw <. Use "105×68". Fine. Use "(-1,1)" fine. Use "0.04 s" fine. Use "m/s²" fine. Use "π" fine. Use "\pi". Good.

Need maybe include "SI/information/probability units" explicitly. In SOURCE_OPERATORS_AND_EQUATIONS:
- position: metres (m); velocity: m s^{-1}; time: s; angle: rad; probability: dimensionless; log-loss: nats if natural log; EPO: dimensionless normalized; reward: dimensionless or expected-goal units; discount: dimensionless; gradient: parameter units. Mention "softmax gives probability mass; sigmoid gives Bernoulli probability." Good.

Need "assumptions" explicitly. Add bullet "Assumptions: Markov state sufficiency; reward captures phase objectives; historical behavior has support; finite-horizon possession; no online interaction; team-level not individual; physical constraints absent." Good.

Need "exact singularity/breakdown regimes" explicitly. Add "Breakdown regimes: ..." with equations.
- Softmax denominator \(Z(s)=\sum_z \exp(f_\theta(s,z))\); if logits differ by large amount, underflow/overflow; if target zone has probability 0, cross-entropy \(-\log \pi_\theta(a|s)\to\infty\).
- Sigmoid \(q=1/(1+e^{-x})\); saturation \(q\to0\) or \(1\) gives vanishing gradient.
- IS weight \(w=\prod \pi_\theta/\pi_{\rm behav}\); if \(\pi_{\rm behav}=0\) and \(\pi_\theta>0\), undefined/infinite; high variance if small.
- EPO if \(\gamma\to1\) and H long, effective horizon unbounded; if reward scale changes, normalization changes.
- Episode boundary if opponent touches threshold ambiguous; label noise.
- Physical veto as above.

Need maybe include "no transition probabilities" as breakdown for counterfactual. Good.

Now draft actual answer. Need ensure word count. Let's write.

Potential issue: "THINK_TRACE" must be >=400 words. We'll make ~700. Total >2500.

Need use exact XML tag names. User listed:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>
Need note user had typo closing `</RLVR_COUNTERFACTUAL_VETOES>`? They wrote `<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>`? Actually in prompt: `<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>`? It shows `<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>`? Wait final line: `<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>`. The closing tag in prompt is `</RLVR_COUNTERFACTUAL_VETOES>`? It displayed `</RLVR_COUNTERFACTUAL_VETOES>`? Actually text: `<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>` It might be `</RLVR_COUNTERFACTUAL_VETOES>` missing? It says `</RLVR_COUNTERFACTUAL_VETOES>`? I see: `<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>` The closing appears `</RLVR_COUNTERFACTUAL_VETOES>`? Wait tag name in opening is `RLVR_COUNTERFACTUAL_VETOES`; closing shown `</RLVR_COUNTERFACTUAL_VETOES>` maybe typo "VETOES" vs "VETOES"? Let's read: `<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>` Actually the closing in prompt: `</RLVR_COUNTERFACTUAL_VETOES>`? The tag is VETOES? It says "VETOES" at end? The opening is `RLVR_COUNTERFACTUAL_VETOES`; closing is `RLVR_COUNTERFACTUAL_VETOES`? Hmm. I'll use `<RLVR_COUNTERFACTUAL_VETOES> ... </RLVR_COUNTERFACTUAL_VETOES>` matching opening. Good.

Need maybe use "PAGE 11" for equation (2) missing. We can say "The extracted text says ... [PAGE 11], but Eq. (2) itself is not visible; therefore the following is a reconstruction." Good.

Need maybe include "source operators" as operators: selection operator \(\Pi_\theta\), success operator \(Q_\phi\), EPO operator \(\mathcal{E}_\pi\), policy gradient operator \(\nabla_\theta J\), OPE operators \(\hat V_{\rm IS}, \hat V_{\rm DR}\), physical feasibility operator. Good.

Need mention "no toy equations" so avoid invented ratios. Use standard RL equations. Good.

Let's write final. Need maybe use "proof" in cross-layer. Ensure no "spread" etc. Good.

Double-check XML: Ampersands? In text "physical and biomechanical" no &. In LaTeX, \mathbb{E} no &. "105×68" fine. "m/s²" fine. "0.04 s" fine. "π" fine. Use "≤" maybe okay. But in equations use \le. In plain text avoid `<` and `>`. Use "less than" or "greater than". Need ensure no raw "&". Good.

Let's produce final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a soccer decision-analysis paper, not a probabilistic market document. Its core move is to replace realized-action valuation with a full-surface policy: first estimate a team’s actual or behavioral policy, then use reinforcement learning to estimate a team-specific optimal policy over ball destinations, and finally compare their Expected Possession Outcome (EPO). The derivation is multi-hop. First, the data layer: the authors merge tracking and event data from 330 Belgian Pro League games in 2020-21 plus 100 games in 2021-22; tracking gives “the (x,y) coordinates of all 22 players and the ball on the pitch at 25 observations per second” [PAGE 3], i.e. every 0.04 s. The pitch is discretized into 105×68 = 7140 one-square-metre zones, and each state is represented by eleven 105×68 input channels containing player locations, velocities, ball distance, goal distance, and ball-goal angles [PAGE 4]. Second, the behavioral layer: a policy network outputs a selection surface and a success surface. The selection surface is a probability distribution over destination zones, so “the sum of probabilities over all zones adds up to 1” [PAGE 5]; the success surface is a per-zone Bernoulli probability that possession is retained if the ball is sent there [PAGE 5]. Third, the MDP layer: a possession is an episode that starts with a deliberate on-ball action and ends in goal or loss of possession; opposing touches fewer than three consecutive times do not count as loss, and rebounds, out-of-play, and fouls recovered within the next three actions are not automatically losses [PAGE 7]. Fourth, the reward layer: positive rewards for successful actions and negative rewards for unsuccessful actions, with the negative reward set to the negative of the opponent’s expected-goals value for the shot [PAGE 8]. The reward is phase-specific because “Due to the different objectives of the distinct phases of a soccer game (i.e., non-stationary policy), our reward engineering approach applies various reward functions in different phases” [PAGE 8]. Fifth, the EPO layer: EPO is a discounted expected reward sum over an H-step possession, normalized to the interval (-1,1), with +1 interpreted as scoring and -1 as conceding [PAGE 1, PAGE 10]. The discount factor is 0.99 [PAGE 10]. Sixth, the optimization layer: the authors use an off-policy policy-gradient method in which “the agent learns (trains and evaluates) solely from historical data, without online interaction with the environment” and “the transition probabilities are not considered in this algorithm” [PAGE 10]. Seventh, the evaluation layer: importance sampling, doubly robust estimation, and reconstructed possessions are used to compare behavioral and optimal policies [PAGE 11]. The reported league-wide comparison says the behavioral policy yields -0.01 EPO while the optimal policy yields higher expected goal difference, and “given an average of 100 possessions per team in a game, they would improve their expected goal difference per game by 2.5 goals, from -1 to +1.5 evaluated by IS” [PAGE 12].

The gray-zone audit must separate three objects that are easy to conflate: selection probability, success probability, and long-horizon EPO. Selection is a normalized distribution over zones; success is an immediate retention probability; EPO is a discounted reward expectation under a policy. A high success zone is not necessarily a high-EPO zone, and a high selection probability is not evidence of optimality. The paper itself says the estimated surfaces “are not comprehensive enough to assist the players and coaches in optimal decision making” because the selection surfaces reflect historical behavior and “there is no evidence of optimality” [PAGE 7]. That is the key epistemic break: behavioral policy is descriptive, optimal policy is counterfactual, and OPE is the bridge. The bridge is fragile. Off-policy policy gradient without transition probabilities means the method does not explicitly model opponent adaptation; it uses historical support. If the behavioral policy gives near-zero probability to an action that the optimal policy wants to increase, importance weights become unstable or undefined. The paper’s large headline improvement is also explicitly qualified: “Although such an improvement is not much realistic in the real-world as it assumes that all players can perfectly follow the optimal policy (which is not the real case)” [PAGE 17]. The Cercle Brugge example shows the intended diagnostic use: the optimal policy suggested a pass to Kanoute while Daland continued dribbling, and later the optimal policy suggested a forward pass from Hotic to Matondo; the EPO difference for that possession was 0.014 [PAGE 15]. But that is a model-based diagnostic, not proof that the player would have executed the suggested action or that the opponent would have reacted identically. Another gray zone is episode labeling: the possession definition uses a “more than two consecutive actions” loss rule and a three-action recovery rule [PAGE 7]; changing those thresholds changes H, reward assignment, and EPO. A final gray zone is physical feasibility: the state includes positions and velocities but not acceleration, orientation, fatigue, surface, or weather, so the optimal surface can recommend a destination that is mathematically optimal inside the model but kinematically or environmentally infeasible outside it. These are not minor caveats; they are the boundary between a descriptive policy surface and an actionable decision system.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Formal state and surface operators.** Let \(S_t\) be the state at time \(t\), represented as eleven channels \(S_t\in\mathbb{R}^{11\times105\times68}\). Position units are metres, velocity units are metres per second, time units are seconds, and angle units are radians. The selection operator is a conditional probability mass function over zones \(z\in\mathcal{Z}\), \(|\mathcal{Z}|=105\cdot68=7140\):
\[
\pi_\theta(z\mid S_t)\ge 0,\qquad \sum_{z\in\mathcal{Z}}\pi_\theta(z\mid S_t)=1.
\]
The success operator is a per-zone Bernoulli probability:
\[
q_\phi(z\mid S_t)\in[0,1].
\]
The source states that “In the selection surface the sum of probabilities over all zones adds up to 1” and that the success surface gives “the likelihood of the actions being successful (i.e., possession is saved for the team) if the ball is sent over to that zone” [PAGE 5]. Probabilities are dimensionless. If log-loss is computed with natural logarithms, its unit is nats per action; with base-2 logarithms, bits per action. The paper reports log-loss values but does not specify the logarithm base in the extracted text, so the information unit should be stated explicitly in any replication.

**MDP and EPO.** The source models possessions as an MDP tuple \((\mathcal{S},\mathcal{A},R,\pi)\), where \(\mathcal{S}\) is the state set, \(\mathcal{A}\) the action set, \(R\) the reward function, and \(\pi\) the policy [PAGE 7]. The MDP “models the probability that the ball carrier selects the destination location of the ball on the field, given the current positions of all 22 players and the ball” [PAGE 7]. An H-step possession \(\tau=(s_1,a_1,\ldots,s_H,a_H)\) has EPO
\[
\mathrm{EPO}(\pi)=\sum_{c=1}^{H}\mathbb{E}_{(s_c,a_c)\sim\pi}\left[\gamma^c R(s_c,a_c)\right],
\]
with \(\gamma=0.99\) and normalization to \((-1,1)\) [PAGE 10]. \(R\) is dimensionless in the normalized EPO representation; the raw reward engineering uses expected-goal-like values, including “the negative of the expected-goals value for the opponent's shot” for unsuccessful actions [PAGE 8]. Assumptions: finite-horizon possession, Markov state sufficiency under the eleven channels, additive discounted reward, phase-specific reward validity, and policy evaluation on historical support. The source says the EPO is “a real-valued number in the range (-1,1) after normalization” [PAGE 10] and that the discount factor was set “to 0.99 in this work after carefully tuning with the discount trap method proposed in [12]” [PAGE 10].

**Policy-gradient operator.** The extracted text says “In the off-policy PG algorithm, the gradient can be defined as in (2):” [PAGE 11], but the equation itself is not visible in the supplied text. A standard reconstruction, clearly labeled as reconstruction, is
\[
\nabla_\theta J(\theta)=\mathbb{E}_{(s,a)\sim\pi_{\mathrm{behav}}}\left[\frac{\pi_\theta(a\mid s)}{\pi_{\mathrm{behav}}(a\mid s)}\,\nabla_\theta\log\pi_\theta(a\mid s)\,\hat A(s,a)\right],
\]
where \(\hat A\) is an advantage or return baseline. The source’s own framing is off-policy: “the agent learns (trains and evaluates) solely from historical data, without online interaction with the environment” and “the transition probabilities are not considered in this algorithm” [PAGE 10]. That assumption is a breakdown boundary: without transition probabilities, the learned optimal policy is not a game-theoretic best response to an adapting opponent.

**OPE operators.** Importance sampling can be written as
\[
\hat V_{\mathrm{IS}}(\pi_\theta)=\frac{1}{N}\sum_{i=1}^{N}\left(\prod_{c=1}^{H_i}\frac{\pi_\theta(a_{i,c}\mid s_{i,c})}{\pi_{\mathrm{behav}}(a_{i,c}\mid s_{i,c})}\right)G_i,
\]
where \(G_i\) is the realized return and the product is the trajectory importance weight. Doubly robust estimation adds a model-based value and a weighted residual correction. The source compares behavioral and optimal policies through “importance sampling, doubly robust, and through looking at the outcome of the reconstructed possessions” [PAGE 11]. Units: EPO is dimensionless; importance weights are dimensionless; ESS is a count; log-loss is nats or bits depending on base.

**Singularity and breakdown regimes.** (1) Softmax underflow/overflow: if logits are extreme, the normalizing sum \(Z(S_t)=\sum_z e^{f_\theta(S_t,z)}\) loses precision; if a realized action has \(\pi_\theta(a\mid S_t)=0\), the cross-entropy \(-\log\pi_\theta(a\mid S_t)\) diverges. (2) Sigmoid saturation: \(q=1/(1+e^{-x})\) gives vanishing gradients as \(q\to0\) or \(q\to1\). (3) Importance-weight explosion: if \(\pi_{\mathrm{behav}}(a\mid s)\) is near zero while \(\pi_\theta(a\mid s)\) is positive, the weight is undefined or has infinite variance. (4) Episode-boundary ambiguity: the source’s “more than two consecutive actions” loss rule and three-action recovery rule [PAGE 7] create label sensitivity; a different threshold changes H and EPO. (5) Reward non-stationarity: phase-specific rewards [PAGE 8] mean the reward function is not stationary across possession phases, so a single scalar EPO comparison requires careful normalization. (6) Physical infeasibility: the model state lacks acceleration, orientation, surface, and weather; an optimal zone can be outside the feasible action set. (7) Distribution shift: the league-wide model is trained on 2020-21 and fine-tuned on 2021-22 games up to October 2021 [PAGE 15], so later-season tactical drift is outside the training support.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is the movement from action valuation to policy optimization. Earlier soccer analytics valued realized passes, shots, and possessions using expected threat, QPass-style pass valuation, VAEP-style action valuation, and expected possession value frameworks; the paper positions itself against methods that “predict the probability of goal scoring within the next 10 actions or at the end of the actual possession” [PAGE 7]. Its retrocausal claim is that one need not only ask “what was this action worth?” but also “what action would have maximized long-run possession outcome?” That is a shift from after-the-fact attribution to counterfactual policy design. The scientific genealogy runs through MDPs and reinforcement learning, policy-gradient methods [13,14,15], off-policy evaluation [17,18,19], and the discount-trap tuning method [12]. The soccer-specific genealogy runs through the Opta phases of play: transition, build-up, established possession, and attack [PAGE 8]. The paper also inherits the half-space tactical discourse, noting that “many soccer experts such as Guardiola and Klopp have focused on a zone between the center and the wings, which are typically called the half-spaces” [PAGE 16]. Its league-wide optimization result is that teams should increase backward passes on the wings, reduce backward passes and increase shots in the half-spaces, and increase forward and sideway passes in the center [PAGE 17]. That result is not a universal law; it is a model output conditioned on the Belgian Pro League 2020-21 data, the reward design, the episode definition, and the policy-network capacity.

The multi-week traps are clear. First, reward engineering can become the hidden theory: the negative reward uses opponent expected goals, while successful-action rewards vary by phase and score difference [PAGE 8, PAGE 9]. A change in reward weights can change the “optimal” style without changing the data. Second, the off-policy assumption can be mistaken for opponent independence: the source explicitly does not consider transition probabilities [PAGE 10], so an “optimal” pass lane can be optimal against historical average behavior but suboptimal against an opponent that deliberately closes that lane. Third, team-specific fine-tuning on a partial 2021-22 season [PAGE 15] creates a sample-size trap: bottom-table teams may show larger estimated improvements because their behavioral policy is farther from the model’s optimum, not necessarily because they have more attainable upside. Fourth, the headline “+2.5 goals” league-wide improvement assumes perfect adherence to the optimal policy, which the authors themselves call “not much realistic in the real-world” [PAGE 17]. Fifth, the model is team-level, not player-level; the authors list as future work “to expand the current framework to capture the contributions of individual players” [PAGE 22]. That means the current genealogy stops at team policy, not individual decision psychology. The retrocausal danger is to read the optimal surface as a causal claim about what would have happened in the actual match. It is better read as a model-based counterfactual under a fixed historical support and a handcrafted reward, with OPE uncertainty and physical-feasibility caveats.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind layer has three interacting loops: crisis habit regression, counter-trap anticipation, and clock/phase pressure. Crisis habit regression is the player’s reversion to the behavioral policy under stress. The behavioral policy is estimated from historical games and is descriptive of team propensity, not normative optimality; the paper says the selection surfaces are “estimated according to the general policy of the historical games” and that “there is no evidence of optimality of the decisions and policies made by teams and players in prior matches” [PAGE 7]. In the Cercle Brugge possession, the optimal policy suggested passing to Kanoute while Daland continued dribbling, and later suggested a forward pass from Hotic to Matondo; the EPO difference for the possession was 0.014 [PAGE 15]. That is a habit-regression diagnostic: the model can show where the historical habit diverged from the model’s optimum. But it does not prove the player perceived the same affordance; the player may have had proprioceptive, fatigue, or opponent-pressure information absent from the eleven channels.

Counter-trap anticipation is the second loop. The model’s “optimal” action is computed from historical data without transition probabilities [PAGE 10], so it is not a minimax or Nash policy against an opponent who knows the model. If a coach uses the optimal surface repeatedly, an opponent can set a trap by leaving the model’s preferred zone open while closing the second-order continuation. The recursive belief chain is: player models coach’s instruction, coach models opponent’s response, opponent models player’s habitual regression. The paper’s team-specific models and zone propensities are a first-order best response to league average, not a full recursive game. The counter-trap veto is therefore: if the opponent’s behavior is conditioned on the recommended policy, the historical-support OPE is no longer valid.

The clock/phase loop is the third. The reward function is not stationary across possession phases: build-up reward “Depends on the score difference at the given moment of the game” [PAGE 9], and the phases are transition, build-up, established possession, and attack [PAGE 8]. A team that is behind may be rewarded for moving to attack quickly; a team that is ahead may be rewarded mainly for success probability and possession retention [PAGE 9]. That means the “optimal” decision is clock- and score-dependent. Under late-game time pressure, the model may favor direct or long-ball actions; under lead-protection, it may favor retention. The recursive trap is that players may infer the coach’s clock preference and over-adjust, while the opponent infers that adjustment and presses the retention zones. The source’s phase-specific design is therefore both a strength and a source of strategic recursion: it models tactical context, but it does not model the opponent’s model of that context. The correct interpretation is a team-level policy surface conditioned on phase and score, not a universal instruction.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical, biomechanical, and weather layer can veto an optimal action even when the policy surface assigns it high EPO. The source state includes locations, velocities, distances, and angles [PAGE 4], but it does not include acceleration, orientation, limb reach, fatigue, surface friction, or weather. The tracking sample is 25 Hz, i.e. \(\Delta t=0.04\) s [PAGE 3]. At a ball speed of 30 m/s, the ball moves \(30\times0.04=1.2\) m per sample, which is larger than the 1 m zone width; therefore zone-level ball destinations at high speed are not fully observable from a single frame. This is an observational veto: if the action is below the spatiotemporal resolution, the model’s zone-level probability is an aggregate, not a measured decision.

The biomechanical veto can be stated formally. Let \(p_i(t)\) be player \(i\)’s position, \(v_i(t)\) the velocity, \(a_{\max}\) the maximum acceleration, and \(d_a\) the destination point. A simple reachability necessary condition is
\[
\|d_a-p_i(t)\|\le \|v_i(t)\|\Delta t+\frac{1}{2}a_{\max}\Delta t^2.
\]
If the optimal destination violates this inequality, the action is not physically reachable within the decision interval. A stricter ball-strike constraint adds maximum ball speed \(u_{\max}\) and reaction time \(\tau_r\):
\[
\|d_a-p_i(t)\|\le u_{\max}(t_{\mathrm{avail}}-\tau_r).
\]
If \(t_{\mathrm{avail}}\le\tau_r\), the action is vetoed. Units are metres, seconds, metres per second, and metres per second squared. The source’s velocity channels are not enough to prove feasibility, because velocity is a state, not a guaranteed actuator constraint.

The weather and surface veto is a second physical layer. Rain, snow, or wind changes traction and ball trajectory. A necessary traction condition is
\[
a_{\mathrm{req}}\le \mu g,
\]
where \(\mu\) is the effective coefficient of friction and \(g\) is gravitational acceleration in \(\mathrm{m\,s^{-2}}\). If the required acceleration exceeds \(\mu g\), the player cannot execute the turn or plant needed for the pass. Wind adds a vector \(\mathbf{w}\) to ball displacement; if the predicted landing displacement error exceeds half the zone width, i.e. \(\|\Delta d\|>0.5\) m, the zone-level success probability is not trustworthy. The proof of the veto is by indistinguishability: two physical states can map to the same model state \(S_t\) while having different feasible sets \(\mathcal{A}_{\mathrm{phys}}\). If \(S_t^{(1)}=S_t^{(2)}\) under the eleven channels but \(\mathcal{A}_{\mathrm{phys}}^{(1)}\ne\mathcal{A}_{\mathrm{phys}}^{(2)}\), then the policy \(\pi_\theta(a\mid S_t)\) cannot distinguish them; a deterministic optimal action \(a^*\) may be feasible in one and infeasible in the other. Therefore the cross-layer adjudication rule is: deploy \(a^*\) only if
\[
a^*\in\mathcal{A}_{\mathrm{phys}}(S_t)\cap\mathcal{A}_{\mathrm{obs}}(S_t),
\]
where \(\mathcal{A}_{\mathrm{obs}}\) is the set of actions resolvable at the tracking sampling rate. Otherwise the EPO surface is a model-layer suggestion, not a deployable instruction.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Scenario 1: Importance-weight support veto.** Suppose the behavioral policy assigns a very small probability to an action that the optimal policy wants to increase, e.g. \(\pi_{\mathrm{behav}}(a^*\mid s)<10^{-3}\). The trajectory importance weight then contains a factor greater than \(10^3\), and the IS EPO estimator has high or infinite variance. Verifiable test: compute the effective sample size and bootstrap interval for the EPO difference in Table 2. Prediction: if the support filter removes actions with \(\pi_{\mathrm{behav}}<10^{-3}\), the reported league-wide +2.5 expected-goal-difference improvement [PAGE 12] will shrink materially, and at least some bottom-table team intervals will cross zero. Veto rule: do not accept an OPE claim if the support-filtered estimate changes sign or if the confidence interval includes zero.

**Scenario 2: Episode-boundary rewind veto.** The source defines possession loss using “more than two consecutive actions” and recovery within “the next three actions” [PAGE 7]. A verifiable counterfactual is to relabel episodes under a stricter rule, such as any opponent touch counts as loss, and under a looser rule, such as four consecutive touches. Recompute H, reward assignment, and EPO for the same games. Prediction: teams that generate more short turnovers or high-pressure sequences will show larger EPO shifts; the rank order in Table 2 will not be invariant. Veto rule: if the sign of a team’s EPO difference changes under a defensible episode definition, the team-specific “optimal improvement” is not robust.

**Scenario 3: Physical-feasibility and weather filter veto.** Apply the kinematic reachability condition and a wind/rain displacement threshold to every high-EPO zone before policy comparison. Verifiable test: filter zones where the required acceleration exceeds \(\mu g\), where the destination is outside the player’s reachable interval, or where predicted ball displacement error exceeds 0.5 m. Recompute the optimal policy and the action propensities in Figure 11 and Table 3. Prediction: long balls and long-distance shots will be reduced more than short passes, and the optimal EPO improvement will decline from the unfiltered league-wide value. Veto rule: if the filtered optimal policy reverses the recommended direction for a zone—for example, if the model recommends more shots from a half-space but the filtered feasible set removes that shot—then the zone recommendation is vetoed as a deployment instruction and retained only as a model-layer diagnostic.
</RLVR_COUNTERFACTUAL_VETOES>