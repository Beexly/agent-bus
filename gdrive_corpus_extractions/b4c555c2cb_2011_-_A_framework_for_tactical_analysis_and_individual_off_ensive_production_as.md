---
source: "2011 - A framework for tactical analysis and individual off ensive production assessment in soccer using Markov chains - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2011"
pages: 27
model: deepseek/deepseek-v4.1-flash-1017
words: 6715
---

<NATIVE_REASONING>
We need answer as GSE+GSI Foundry. Need obey no betting lines. Need produce >=1000 words across exact XML sections. Need cite pages and verbatim quotes. Need be careful source is soccer Markov chains. Need deep multi-hop derivation, gray-zone audit. Need formal LaTeX equations, units, assumptions, singularity/breakdown regimes. Need page citations exact [PAGE N] and verbatim quotes. Need sections exactly:
<THINK_TRACE>...
<SOURCE_OPERATORS_AND_EQUATIONS>...
<RETROCAUSAL_GENEALOGY>...
<RECURSIVE_THEORY_OF_MIND>...
<CROSS_LAYER_VETO_ADJUDICATION>...
<RLVR_COUNTERFACTUAL_VETOES>...
Need likely discuss tactical analysis and individual offensive production assessment. Need no betting. Need make ≥1000 words depth. Need perhaps correct "off ensive" typo. Need not mention spreads/totals/odds. Avoid any betting. Could mention "no wagering" not needed. Need source page quotes exact. Need formal equations: Markov transition matrix P, states S 39, absorbing Goal and End Possession. Value V = (I-Q)^{-1} R maybe P(goal) expectation, hitting probability. Need units: probability dimensionless; value in goals per possession or probability. Information units? Requirement says SI/information/probability units. We can state dimensionless probability, bits if entropy. Need assumptions and exact singularity/breakdown regimes. Need cite pages. Need compare players action values delta P(Goal). Examples pages 23-24. Need incorporate page 14 n=20 convergence. Page 5 dataset. Page 6 states. Page 13 definitions. Page 16 validation. Page 17 team comparison. Page 18 set pieces. Page 22 weighting. Page 23/24 action attribution examples. Page 25/26 top/worst performers.

Need perhaps include "gray-zone audit" in THINK_TRACE: discuss Markov assumption memorylessness, off-ball omitted, sparse data, credit division, absorption, state definition, sample size, non-stationarity, team/player confounds, validation. Need maybe derive transition matrix and player value. Need discuss recursive causation? Retro causal genealogy: Markov chains lineage from Markov 1906, absorbing chains, PageRank? Soccer analytics lineage. Need multi-week traps: memorylessness, sparse transitions, absorbing state convergence, using P(Goal) as causal individual metric, selection bias, team effects, goalkeeper etc. Need recursive theory of mind: crisis habit regression vs counter-trap vs clock. Interpret in soccer tactical context: player/team under pressure reverts to habits, counter-trap (opponent baiting), clock/game state. Need align with source? Yes.

Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need address how Markov model lacks physical/biomechanical/weather layers; veto proof for deciding action value? Need show conditions where physical constraints/weather invalidate transition probabilities. Use exact equations? Could include feasibility constraints, energy cost, surface friction coefficient, wind advection. Need no betting. Need maybe "veto" meaning invalidating claims. Need formal proof: state aggregation erases biomechanical constraints; transition probabilities conditioned on unobserved physical variables. If P(S_b|S_a, X) varies with X and X omitted, then Markov estimate is mixture; cannot identify individual causal contribution. Need weather: precipitation changes ball roll, traction; wind; heat. Need cite pages that off-ball is hard [PAGE 3]. No source for weather but cross-layer can reason. Need "physical/biomechanical/weather veto proof" perhaps formulate as admissibility: observed transition matrix P̂ is an average over hidden physical contexts; value V = E_X[V(X)], action delta is not invariant across contexts. Need give proof sketch via Jensen? If value is nonlinear in P and hidden context affects P, aggregated P yields not equal to average value. Need exact singularity: (I-Q) singular if spectral radius ≥1; absorbing reachability not guaranteed; if closed nonabsorbing class or no goal reachable, (I-Q)^{-1} fails. Need mention Page 14 convergence n=20 is empirical not proof. Need specify probabilities sum to 1 (unit measure). Goal absorbing probability 1, End absorbing. P(Goal) hitting probability h_i solves h_i = sum_j p_ij h_j with h_goal=1 h_end=0. Alternative fundamental matrix N=(I-Q)^{-1}, expected visits; P(goal before end) = N R_goal? Need precise. For absorbing chain with transient Q and absorbing R, hitting probability to goal b = (I-Q)^{-1} R_{*,goal}. Value in probability. Expected number of steps to absorption t = N 1. Action value incremental improvement: Δ = P(Goal | next state) - P(Goal | current state) maybe page 23 shows Player1 -0.08 = 0.17-0.25? Wait page 23: State A P=0.25, State B P=0.17, State C P=0.28, Goal=1. Player1 -0.08; Player2 +0.11; Player3 +0.72. Let's parse sequence: Player1 State A P=0.25 -> Player2 State B P=0.17 => Player1 delta = 0.17-0.25 = -0.08. Player2 -> Player3 State C P=0.28 => +0.11. Player3 -> Goal P=1 => +0.72. Good. Page 24: Player1 State A P=0.15 -> earns penalty P=0.71 delta +0.56; Player2 takes penalty P=0.71 -> missed P=0 delta -0.71. Good.

Need include SOURCE_OPERATORS_AND_EQUATIONS with exact citations. Need perhaps quote "2 absorbing states: Goal or End of Possession" [PAGE 6]; "Once you are there you are stuck!" [PAGE 14]; "Multiplication can be repeated until probability of ending in an absorbing state converges (n=20)" [PAGE 14]; "Weight each action with incremental improvement of P(Goal)" [PAGE 22]; "Player 1 is rewarded for earning the penalty and Player 2 is heavily penalized for missing it." [PAGE 24]. Need use verbatim exact quote, perhaps in quotes. Need cite [PAGE N]. Good.

Need comply exact XML sections. Ensure >=1000 words overall. Desired oververbosity 5 but requirement deep. Need maybe 1800-2500 words. Need all sections. Need not overdo but satisfy. Need include all sections exactly. No extra text? Can include preamble? Better just XML sections. Need maybe use CDATA? Not needed. Ensure no markdown? XML sections with text and LaTeX okay. Need escape ampersands? If using & in XML text, need &amp;. But the requested tags; likely plain text. Need be careful: In XML, & must be escaped. We can avoid & or escape. Use "and". Need not include "<" in text? Equations with < maybe problematic. Avoid less-than signs or escape. If using LaTeX \le, okay. But XML tags only section tags; text can contain LaTeX. Ampersands in LaTeX alignment? Avoid. Need use \[ \] okay. Could include \begin. No raw &. Need no unescaped <. Use \leq. Good. Need not use "P(Goal) = 1" etc. Use "=" fine. Need avoid ">"? Greater-than okay in XML text? > is allowed except sequence ]]>? Fine. Use \gt maybe. Use no "&".

Need answer as final only. Need write. Let's plan sections.

THINK_TRACE >=400 words. Discuss multi-hop derivation:
- source describes states 39, two absorbing, 7 set pieces, 30 zonal/defensive states.
- Build P 39x39, rows sum to 1. Partition transient Q and absorbing R.
- P(Goal) vector h = (I-Q)^{-1} r_goal. Show derivation: first-step analysis.
- Player action value = Δh = h(S_after) - h(S_before), credit sequential. Page 23/24 examples.
- Gray-zone audit: memorylessness assumption [PAGE 4], off-ball omitted [PAGE 3], sparse data [PAGE 3], state aggregation, team/player confounds, validation page 16, convergence n=20. Need mention "n=20" empirical convergence not exact. Need discuss Page 26 Darren Bent sample and selection. Need mention set piece P(Goal) e.g. penalty 71.55 [PAGE 18]. Need mention 100,000 actions, 123 matches [PAGE 5]. Need exact page citations. Need maybe quote "hard to capture all of the information about game state; off the ball movement is just as important as on the ball movement" [PAGE 3]. Good. Need careful with quote exact: Source: "Hard to capture all of the information about game state; off the ball movement is just as important as on the ball movement" yes lowercase? page starts bullet "Hard to capture..." We can quote with capitalization? Verbatim quote can include exact phrase; better: “off the ball movement is just as important as on the ball movement” [PAGE 3]. Good. "Sparse data – we haven’t seen all possible combinations..." Exact [PAGE 3]. "How do you divide up credit?" [PAGE 3]. Good.

SOURCE_OPERATORS_AND_EQUATIONS: Formal definitions:
- State space S = {s_1,...,s_39}, absorbing A = {Goal, End of Possession}. P row-stochastic.
- For transient T, Q and R; hitting probability h = (I-Q)^{-1} R_{*,G}. If only goal and end absorbing, h = N r_G. Units: dimensionless probability.
- Expected steps to absorption t = N 1, units possessions/actions (count).
- Action value Δ(s->s') = h(s') - h(s), units probability of goal improvement per action (dimensionless). Or expected goals per action if multiply by? Actually h is probability. If value in goals, h is probability, same.
- Entropy H(s) = -Σ p_ij log2 p_ij bits, optional information unit. Maybe mention to satisfy info units. Could define row entropy. But not in source. It is formal. Need maybe not overcomplicate.
- Assumption: first-order Markov. Exact singularity/breakdown: (I-Q) invertible iff spectral radius ρ(Q) < 1; if closed recurrent non-absorbing class within Q, ρ(Q)=1 and inverse fails. If goal not reachable from component, h = 0 regardless. If rare transitions zero, empirical matrix may have zero absorbing reachability due to sampling. If n=20 convergence not proof; if near unit eigenvalue, convergence slow. Also if state aggregation coarse, conditional independence fails. Mention source quotes.
- Page 22 quote.
- Page 14 quote.
- Page 18 set piece table maybe list penalty 71.55%, long corner 2.39 etc. Need maybe include all? Could include a few. Need cite [PAGE 18].
- Page 23/24 examples with equations. Need exact: Player 1 -0.08, Player 2 +0.11, Player 3 +0.72 [PAGE 23]; Player 1 +0.56 and Player 2 -0.71 [PAGE 24].
- Page 25 top performers? not necessary here. Maybe mention in genealogy.

RETROCAUSAL_GENEALOGY: Historical lineage. Markov chains Andrey Markov 1906, absorbing Markov chains, PageRank (Brin/Page) uses stationary vector but not exactly. Soccer analytics: Rudd 2011 NESSIS; later expected possession value, xT, VAEP, action value. Multi-week traps: memorylessness, sparse state space, state definition, credit assignment, validation leakage, player effect confounded by team style, sample size. Mention Four weeks? "multi-week traps" maybe in temporal sense: teams adapt over weeks, transition matrix nonstationary, opponent scouting, regression to mean, "crisis habit regression" etc. Need cite Page 17 team comparison, Page 26 worst performers. Quote “Not all passes are created equal” [PAGE 22] and “Weight each action with incremental improvement of P(Goal)” [PAGE 22]. Good. Need maybe mention history from Markov to soccer not exact from source. Fine.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Interpret:
- Crisis habit regression: under pressure, players/teams regress to low-entropy habitual actions (safe back-pass, clearance) which may reduce immediate turnover but lower P(Goal). Markov state includes defensive pressure (Page 5) and defensive state; but habit is latent. Need model as policy π(a|s, context). Counter-trap: opponent intentionally leaves a state looking attractive but with low h(s) or high trap probability; action Δ must be computed against conditional P including opponent response. Clock: game state/time remaining changes value; source states exclude clock and scoreline? Page 6 states include zonal and defensive, set pieces; not score/time. Thus P(Goal) is average not situational. Need recursive theory: player models coach/opponent model; opponent models player; value depends on beliefs. Formal: Δ_i = h(s') - h(s) but h depends on policy π of both teams; if opponent adapts, h^π. Need quote page 3 off-ball. Need mention Page 4 memorylessness. Need "counter-trap" could be bait press; Markov transition probabilities aggregate baited vs unbaited; if defender chooses action to maximize own expected value, the observed P is equilibrium not causal. Need "clock" as nonstationary time-inhomogeneous chain P_t; source uses static P. Breakdown if t remaining small; urgency changes preferences and risk. Need maybe cite no clock in state list [PAGE 6] and dataset fields [PAGE 5]? Page 5 lists event type, defensive pressure, defensive state; no clock. Good.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need formal proof:
- Let hidden physical context X (traction, wind, fatigue, surface). True transition P_ij(X). Observed P̂_ij = ∫ P_ij(x) dF(x). Hitting probability h is nonlinear in P. Thus h(P̂) ≠ ∫ h(P(x)) dF(x) generally. Individual action value Δ̂ = h(P̂,s') - h(P̂,s) is not an unbiased estimate of context-specific value. If selection into contexts correlates with player/team, confounding.
- Biomechanical veto: action feasibility set A(s,x) excludes passes with required force/distance; model assigns positive probability to infeasible transitions if estimated from other contexts. Weather: precipitation lowers friction coefficient μ, wind adds advective force; ball trajectory changes. Heat/fatigue alters sprint capacity and pressure. Proof by counterexample: two contexts with same aggregated P but different variance can yield different h due to convexity? Need be precise: h(P) is a hitting probability, not generally linear in P. Could show for two-step: h = p_goal + p_mid q_goal; if p_mid q_goal average differs if covariance. Simpler: aggregated p_mid q_goal uses product of averages, not average of products. Since h includes products, E[pq] ≠ E[p]E[q] when correlated. That's a proof sketch.
- Veto conditions: if hidden context variance and covariance nonzero, no context-free individual causal claim. If action value used for player evaluation, must stratify by physical context or include covariates. Need no betting. Mention source lacks physical layer, only defensive pressure/state [PAGE 5]. Quote “off the ball movement is just as important...” [PAGE 3] supports missing biomechanics? Maybe not, but okay.
- Need "adjudication" maybe decide when model vetoed: when physical feasibility constraint binding; when weather changes transitions; when biomechanical fatigue changes pressure; when player identity changes execution. The definitive veto proof: from Page 5 dataset only (x,y), event type, defensive pressure, defensive state; no weather, no biomechanical load, no player tracking. So any inference about individual production beyond these variables is underdetermined. Good.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement Learning with Verifiable Rewards? likely. Need give scenarios where counterfactual test vetoes model. Need predictions that are verifiable. Must avoid betting. We can propose three:
1. Memoryless-state audit: Recompute P(Goal) with second-order states (previous zone/pressure) on held-out matches; if Δh changes sign or rank correlation low, first-order Markov claim vetoed. Prediction: Players whose top ranking depends on transitions from high-pressure to low-pressure will lose value; source action values [PAGE 23] not stable. Need verifiable: pre-register metric Spearman correlation < 0.7? Maybe say "prediction: rank correlation below 0.8" etc. Need exact.
2. Set-piece penalty credit audit: Use page 24 accounting; if penalty miss is penalized -0.71 while penalty earn +0.56, then a player who earns but doesn't take has positive; a taker who misses negative. Counterfactual: swap taker/earner roles in simulation; predictions: taker value = -0.71 on miss, +? on make? Need calculate made penalty: from 0.71 to 1 => +0.29 (if taker starts at penalty state P=0.71). Wait page 24: Player2 takes penalty P=0.71, missed P=0, delta -0.71. If scored, delta +0.29. Player1 earns penalty from state A P=0.15 to penalty P=0.71, +0.56. Good. Verifiable counterfactual: if we randomize penalty taker and earner, total team credit conserved? Earn +0.56 and take +0.29 = +0.85? But from state A to goal directly delta +0.85. If miss: +0.56 -0.71 = -0.15? Wait if missed final 0, total delta from state A to miss = -0.15. That matches. Good. Prediction: changing taker identity changes individual value but not team state value; individual metric is role-dependent. This is a veto to naive "offensive production" as stable player skill. Need quote page 24. Good.
3. Weather/biomechanical stratification: Re-run P on dry vs wet/fatigued subsets; if P(goal) differs and action-value rankings flip, the context-free individual value is vetoed. Prediction: long passes/crosses degrade more than short passes in wind/wet; players with high long-ball share lose value. Need verifiable with data if available. But source doesn't have weather; RLVR counterfactual can require collecting it. Prediction: stratification by weather yields significant interaction; if not, model survives. Need exact: "If data are available, action-value rank correlation between dry and wet subsets < 0.8; long-pass share negatively correlates with Δh change." This is verifiable. Need mention no betting.

Need ensure at least 1000 words. Let's draft robustly.

Need be mindful of exact XML tags. No extra tags inside? It's okay. Need maybe include "CDATA" to avoid XML special chars? But equations with backslashes and underscores okay. Ampersand avoid. Less-than avoid. Could include braces. Use "less than" words or \lt. In XML, < in text would break. Avoid < entirely except tags. Use \leq. Avoid "&". Use "and" not &. Avoid ">"? Greater-than allowed but can avoid. Use \gt. But LaTeX \gt is okay. We'll use no \gt? Use "exceeds". Good.

Need cite pages exactly: [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 13], [PAGE 14], [PAGE 16], [PAGE 17], [PAGE 18], [PAGE 22], [PAGE 23], [PAGE 24], [PAGE 25], [PAGE 26]. Need source text quotes exact. Use curly quotes? Fine. Need "verbatim quotes" exactly as source, but source has typos like "off ensive". We can quote key phrases. Need avoid misquote. Examples:
- [PAGE 4]: "Assume that the current state is independent to the previous state (i.e. it doesn’t matter how we got here, the probabilities of moving to the next state are the same regardless of the past)" exact? Source: "Assume that the current state is independent to the previous state (i.e. it doesn’t matter how we got here, the probabilities of moving to the next state are the same regardless of the past)" yes.
- [PAGE 6]: "2 absorbing states: Goal or End of Possession" exact.
- [PAGE 14]: "Once you are there you are stuck!" exact. "Multiplication can be repeated until probability of ending in an absorbing state converges (n=20)" exact.
- [PAGE 22]: "Weight each action with incremental improvement of P(Goal)" exact.
- [PAGE 24]: "Player 1 is rewarded for earning the penalty and Player 2 is heavily penalized for missing it." exact.
- [PAGE 3]: "off the ball movement is just as important as on the ball movement" exact lower? Source bullet: "off the ball movement is just as important as on the ball movement" yes.
- [PAGE 3]: "Sparse data – we haven’t seen all possible combinations of game situations, and those we have seen only have a few data points" exact? Source: "Sparse data – we haven’t seen all possible combinations of game situations, and those we have seen only have a few data points" yes.
- [PAGE 13]: "Possession – a series of consecutive deliberate actions performed by one team, only interrupted by a deliberate action performed by the other team or the end of a half." exact.
- [PAGE 18]: "Penalty 71.55%" exact? Table shows "Penalty 71.55%". Good.
- [PAGE 17]: "Manchester City (3rd, underperform offensively) and Wolves (17th, overperform offensively)" exact? Source: "Notable exceptions are Manchester City (3rd, underperform offensively) and Wolves (17th, overperform offensively)" exact.
- [PAGE 26]: "Poor Darren Bent" exact. "1 goal was in sample set out of 17 he scored in the entire season" exact? Source: "1 goal was in sample set out of 17 he scored in the entire season" yes maybe.
Need not quote everything.

Need maybe mention "individual offensive production assessment" in title. Fine.

Need write with all sections. Let's compose in final. Need ensure word count. Let's estimate. THINK 600, source 700, retro 350, recursive 350, cross 500, RLVR 500 => 3000 words. Good.

Need perhaps not too long but enough. Use LaTeX. Need escape ampersand? Avoid. In equations, if I use \text{Goal} okay. Use \mathbf{1}. Use \top? no &. Use \sum_j. No &. Good. Use "and" not "&". Need no "<". Use \rho(Q) \lt 1? In LaTeX, \lt is okay. Use no raw <. Good.

Potential issue XML entities: backslash and curly quotes okay. The text includes "P(Goal)" parentheses okay. The ampersand in "R&B" avoid. The tag names exact. Good.

Need include "formal LaTeX equations, units, assumptions, exact singularity/breakdown regimes." We'll explicitly label Assumptions and Breakdown. Good.

Need maybe "SI/information/probability units" — state dimensionless probability, bits for entropy, action counts. SI? dimensionless. Mention "no SI dimensional unit; probability is dimensionless, expected steps in actions or possessions". For physical veto, mention friction coefficient dimensionless, wind speed m/s, etc. Good.

Need no betting lines. Avoid "odds". We can say "probabilities" but not wagering. "moneylines" no. Good.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a 27-page slide deck by Sarah Rudd on using Markov chains for tactical analysis and individual offensive production assessment in soccer. The core derivation is multi-hop. First, the deck defines 39 states: “2 absorbing states: Goal or End of Possession”, “7 set pieces”, and “30 states defined by zonal location and defensive state” [PAGE 6]. Second, it builds a transition matrix for all 39 states, with “probability of moving from state Sa to Sb for all combinations of the 39 states” [PAGE 14]. Third, because Goal and End of Possession are absorbing, the deck states “Once you are there you are stuck!” [PAGE 14], so a possession of arbitrary length can be treated as a transient walk until absorption. Fourth, it computes absorption probabilities by repeated matrix multiplication, stating “Multiplication can be repeated until probability of ending in an absorbing state converges (n=20)” [PAGE 14]. Fifth, it converts those absorption probabilities into action-level credit: “Weight each action with incremental improvement of P(Goal)” [PAGE 22]. That is the central operator: a player action is valued by the change in the probability of eventually scoring before possession ends.

The gray-zone audit is substantial. The model’s first-order Markov assumption is explicitly restrictive: the deck says the model must “Assume that the current state is independent to the previous state (i.e. it doesn’t matter how we got here, the probabilities of moving to the next state are the same regardless of the past)” [PAGE 4]. Soccer possessions are path-dependent: a pass into space after a switch of play is not equivalent to the same zonal entry after a slow build-up. The deck also admits that it is “Hard to capture all of the information about game state; off the ball movement is just as important as on the ball movement” [PAGE 3]. That is a major omitted-variable problem. The data are “Touch-by-touch data provided by StatDNA” with “(x,y) coordinates”, “event type”, “defensive pressure”, and “defensive ‘state’” over “123 matches” and “~100,000 ‘deliberate’ actions or about 800 actions per match” [PAGE 5]. Those are rich but not complete: no explicit clock, scoreline, weather, biomechanical load, player tracking, or off-ball structure are listed. The deck also flags “Sparse data – we haven’t seen all possible combinations of game situations, and those we have seen only have a few data points” and “How do you divide up credit?” [PAGE 3]. The validation uses “Monte Carlo Bootstrapping” and “K-Fold Validation” [PAGE 16], but validation of fitted transition probabilities does not by itself prove causal player value. The action-credit examples on pages 23 and 24 make this concrete: Player 1 goes from P(Goal)=0.25 to a teammate’s state with P(Goal)=0.17, so Player 1 is assigned -0.08; Player 2 moves to P(Goal)=0.28, so +0.11; Player 3 moves to Goal, so +0.72 [PAGE 23]. In the penalty example, Player 1 earns a penalty and gets +0.56, while Player 2 takes and misses it and gets -0.71 [PAGE 24]. That is coherent accounting for a single possession, but it is role-dependent and state-dependent, not automatically a stable player skill estimate. The deck’s own warning about Darren Bent is a sampling and conversion trap: “1 goal was in sample set out of 17 he scored in the entire season”; he had “19 opportunities where he had the ball with >10% chance of scoring (22% average) but only converted one” [PAGE 26]. So the model’s output must be audited for sample size, role, team style, and selection effects before being treated as individual offensive production.

The multi-hop derivation therefore is not merely “multiply a matrix”. It is: define states, estimate row-stochastic transitions, partition transient and absorbing states, solve the hitting-probability system, then difference the hitting probabilities along observed action edges. The main failure modes are memorylessness, state aggregation, sparse transitions, nonstationarity across teams and weeks, omitted off-ball and physical context, and credit attribution when multiple players act in sequence. The deck’s team comparison shows why the matrix is context-sensitive: teams ordered by final standing differ in P(Goal) by state, with “Notable exceptions are Manchester City (3rd, underperform offensively) and Wolves (17th, overperform offensively)” [PAGE 17]. That is useful tactical description, but it also means a player’s action values are entangled with team state distributions and opponent behavior.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the state space be
\[
\mathcal{S}=\{s_1,\dots,s_{39}\},
\]
where the deck gives “39 total states” and “2 absorbing states: Goal or End of Possession” [PAGE 6]. Let
\[
P_{ij}=\Pr(S_{t+1}=s_j \mid S_t=s_i)
\]
be the one-step transition probability. Units: dimensionless probability. Each row is row-stochastic:
\[
\sum_{j=1}^{39} P_{ij}=1,\qquad P_{ij}\geq 0.
\]
The deck describes this as calculating “the probability of moving from state Sa to Sb for all combinations of the 39 states” [PAGE 14]. Partition the states into transient set \(T\) and absorbing set \(A=\{\text{Goal},\text{End of Possession}\}\). Write
\[
P=
\begin{pmatrix}
Q & R\\
0 & I
\end{pmatrix},
\]
where \(Q\) is the transient-to-transient block, \(R\) is the transient-to-absorbing block, and \(I\) is the absorbing identity block. The absorbing rows satisfy the deck’s statement that “probability of remaining in same state is 1 and moving to another state is 0” [PAGE 14].

Let \(h_i=\Pr(\text{Goal before End of Possession}\mid S_0=s_i)\). First-step analysis gives
\[
h_i=\sum_{j\in T}Q_{ij}h_j+\sum_{a\in A}R_{ia}\,\mathbf{1}[a=\text{Goal}],
\]
with boundary conditions
\[
h_{\text{Goal}}=1,\qquad h_{\text{End of Possession}}=0.
\]
In matrix form, if \(r_G\) is the transient-to-Goal column of \(R\),
\[
h=(I-Q)^{-1}r_G.
\]
Equivalently, the fundamental matrix is
\[
N=(I-Q)^{-1}=\sum_{k=0}^{\infty}Q^k,
\]
so \(N_{ij}\) is the expected number of visits to transient state \(j\) starting from transient state \(i\), in units of action counts or possession steps. The expected number of steps until absorption is
\[
t=N\mathbf{1},
\]
with units of actions per possession. The deck’s iterative procedure is \(P^n\), repeated “until probability of ending in an absorbing state converges (n=20)” [PAGE 14]. That is an empirical convergence rule, not an exact proof. Exact convergence in the finite absorbing case requires the transient block to satisfy
\[
\rho(Q)\lt 1,
\]
where \(\rho(Q)\) is the spectral radius. If \(\rho(Q)=1\), then \((I-Q)\) is singular or arbitrarily ill-conditioned, and \((I-Q)^{-1}\) fails or becomes unstable. This occurs if there is a closed recurrent non-absorbing class inside \(Q\), if Goal and End of Possession are not reachable from some component, or if estimated zero probabilities artificially create such a component. If Goal is unreachable from a state, then \(h_i=0\) for that state regardless of the matrix algebra. If \(Q\) has an eigenvalue close to 1, convergence at \(n=20\) may look plausible while still being far from the finite limit.

The action-value operator is
\[
\Delta_{a\to b}=h_b-h_a.
\]
Units: dimensionless change in goal probability per action. The deck’s instruction is “Weight each action with incremental improvement of P(Goal)” [PAGE 22]. Page 23 gives a verbatim numerical derivation: Player 1 moves from “State A P(Goal)=0.25” to “State B P(Goal)=0.17”, so Player 1 gets “-0.08”; Player 2 moves to “State C P(Goal)=0.28”, so “+0.11”; Player 3 moves to “Goal Scored P(Goal)=1”, so “+0.72” [PAGE 23]. Algebraically:
\[
\Delta_1=0.17-0.25=-0.08,
\]
\[
\Delta_2=0.28-0.17=+0.11,
\]
\[
\Delta_3=1-0.28=+0.72.
\]
Page 24 gives the penalty-credit example: Player 1 earns a penalty from P(Goal)=0.15 to 0.71, so “Player 1: +0.56”; Player 2 takes and misses, from 0.71 to 0, so “Player 2: -0.71”; the deck summarizes: “Player 1 is rewarded for earning the penalty and Player 2 is heavily penalized for missing it” [PAGE 24]. Thus
\[
\Delta_{\text{earn}}=0.71-0.15=+0.56,
\]
\[
\Delta_{\text{miss}}=0-0.71=-0.71.
\]
If the penalty is scored, the taker’s delta is
\[
\Delta_{\text{make}}=1-0.71=+0.29.
\]
This shows that the same possession can assign positive credit to the earner and negative credit to the taker without contradiction, because the credit is edge-local.

The source also gives set-piece absorption probabilities: “Penalty 71.55%”, “Long Corner 2.39%”, “Short Corner 1.67%”, “Long Free Kick 1.67%”, “Shallow Throw in 1.46%”, “Deep Throw in 1.09%”, “Short Free Kick 1.08%” [PAGE 18]. These are dimensionless probabilities. If one wants an information measure of a state’s transition uncertainty, one may define
\[
H_i=-\sum_j P_{ij}\log_2 P_{ij},
\]
with units of bits. That is not in the deck; it is an audit operator, not a source claim.

Key assumptions are: first-order Markov dependence, as stated by “Assume that the current state is independent to the previous state … the probabilities of moving to the next state are the same regardless of the past” [PAGE 4]; homogeneous transition probabilities over the sample; sufficiently rich state definitions; stable player identity; and correct credit assignment to the observed action edge. Breakdown regimes include: memoryless-state breakdown when previous action or pressure history changes \(P_{ij}\); sparse-data breakdown when many \(P_{ij}\) are estimated from few events; aggregation breakdown when zone and defensive state hide off-ball structure, as the deck warns that “off the ball movement is just as important as on the ball movement” [PAGE 3]; nonstationarity breakdown across teams, game states, and weeks; and spectral breakdown when \(\rho(Q)\) approaches 1 or when estimated zeroes disconnect Goal reachability.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage runs from Andrey Markov’s early twentieth-century finite-state chains through absorbing Markov chains, dynamic programming, and modern possession-value models in soccer. The deck’s specific contribution is to combine a 39-state absorbing chain with action-level credit. Page 22 states the motivating critique: “Not all passes are created equal” and existing metrics treat completed passes as equal even though “back-pass, square-pass, through-ball that puts teammate 1-on-1 with keeper are all weighted equally”; likewise “Goals: all are weighted equally, no matter how easy they were to score” [PAGE 22]. The corrective is “Weight each action with incremental improvement of P(Goal)” [PAGE 22]. That is an ancestor of later expected-possession-value, expected-threat, and action-valuation frameworks: the value of an action is not the action label but the change in a downstream probability.

Historically, the deck sits between descriptive notational analysis and modern spatiotemporal player-tracking valuation. It uses “Touch-by-touch data provided by StatDNA” with coordinates, event type, defensive pressure, and defensive state over “123 matches” and “~100,000 ‘deliberate’ actions” [PAGE 5]. It does not yet use full tracking, and it openly notes off-ball omission [PAGE 3]. The retroscientific genealogy is therefore: Markov absorption gives a formal possession clock; the possession definition gives the segmentation rule; set pieces give special absorbing-adjacent states; and the action delta gives the first bridge from team state value to individual credit.

The multi-week traps are predictable from the deck itself. First, memorylessness: if a team changes its build-up pattern over weeks, the transition matrix is nonstationary, but the model treats it as fixed. Second, sparse-state trap: a rare transition may appear strong or weak because “those we have seen only have a few data points” [PAGE 3]. Third, credit trap: the same action can get different credit depending on the previous state, as the penalty example shows: “Player 1 is rewarded for earning the penalty and Player 2 is heavily penalized for missing it” [PAGE 24]. Fourth, team-style trap: Page 17 reports that teams ordered by final standing differ in P(Goal), with “Manchester City (3rd, underperform offensively) and Wolves (17th, overperform offensively)” as “Notable exceptions” [PAGE 17]. A player on a high-transition team may look better than an equivalent player on a low-transition team. Fifth, regression and sample trap: Page 26’s Darren Bent case is a warning that a single in-sample goal against 17 season goals and 19 opportunities with “>10% chance of scoring (22% average)” can distort a short-window ranking [PAGE 26]. Sixth, validation trap: “Monte Carlo Bootstrapping” and “K-Fold Validation” [PAGE 16] test predictive fit, not causal identification. The deck’s top-performer list includes “Tim Cahill”, “Yaya Toure”, “Cesc Fabregas”, and “Jordan Henderson in top 25”, plus “Some surprises like James Morrison, Ricardo Fuller and Chris Baird” [PAGE 25]; the existence of surprises is exactly what a multi-week audit should interrogate rather than accept.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
In a recursive-theory-of-mind reading, the Markov state is not only a physical location and defensive pressure; it is a belief node in a game between player, teammate, opponent, and coach. The source’s state list includes “defensive pressure” and “defensive ‘state’” [PAGE 5], but it does not explicitly include the opponent’s model of the player. That omission creates three distinct failure modes.

First, crisis habit regression. Under high pressure or late-game stress, players often regress to low-entropy habitual actions: safe square passes, back-passes, clearances, or forced crosses. The deck’s state space includes pressure and zone, but the policy that generated the action may be a stress response rather than a stable skill. In Markov terms, the observed transition matrix is an average over policies:
\[
P_{ij}=\sum_{\pi}\Pr(\pi\mid s_i)\Pr(s_j\mid s_i,\pi),
\]
where \(\pi\) is the player’s action policy. If crisis shifts \(\Pr(\pi\mid s_i)\), then the same player can have different \(h_i\) and different \(\Delta_{a\to b}\) in different match phases. The source warns that “off the ball movement is just as important as on the ball movement” [PAGE 3], and crisis habits are often off-ball or first-touch decisions not captured by the event label. The counter-trap is the opponent intentionally offering a low-value state that looks locally attractive. A pressing team may leave a backward pass open, baiting the player into a transition that raises possession retention but lowers P(Goal). The naive action delta will reward the pass if \(h_{\text{after}}\) is slightly higher than \(h_{\text{before}}\), even though the opponent’s preferred response is exactly that pass. Formally, the observed \(P_{ij}\) is an equilibrium response, not a causal effect:
\[
P_{ij}=P_{ij}^{\text{player policy}}\circ P_{ij}^{\text{opponent response}}.
\]
If the opponent selects responses to minimize the player’s \(h\), then the observed transition probability is endogenous to the valuation.

Second, the clock. The deck’s state list does not include scoreline or time remaining [PAGE 6], and the dataset fields are coordinates, event type, defensive pressure, and defensive state [PAGE 5]. But time remaining changes the value of a goal probability. A team trailing late should weight a low-probability high-variance action differently from a team protecting a lead. The model’s static \(h_i\) is an average over clock contexts, not a policy-conditional value. A proper clock-aware version is a time-inhomogeneous chain \(P^{(t)}_{ij}\) and a value \(h_i(t)\) satisfying
\[
h_i(t)=\sum_j P^{(t)}_{ij}h_j(t+1),
\]
with boundary values depending on scoreline and time. The deck’s convergence rule at “n=20” [PAGE 14] is a possession-length convergence statement, not a clock-value statement.

Third, recursive credit and role inference. The penalty example [PAGE 24] shows that the earner and taker are assigned different deltas from the same event. In a recursive model, the taker knows the earner’s action changed the state; the opponent knows the taker’s tendency; the coach knows the opponent’s model. This is a nested belief problem, and the simple edge delta collapses it into a single observed transition. The counter-trap against naive credit is to ask whether the player’s action changed the state or merely selected a state the opponent was willing to concede. The clock-aware counter-trap is to ask whether the action value survives when time and score are conditioned. The model therefore needs a policy-conditional, time-indexed, opponent-response-aware value before it can be read as individual offensive production. The deck’s own caution that “How do you divide up credit?” [PAGE 3] is the recursive-theory-of-mind problem in one sentence.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto is the physical, biomechanical, and weather adjudication of whether a Markov transition probability can be treated as a context-free property of a state. The source’s data fields are “(x,y) coordinates”, “event type”, “defensive pressure”, and “defensive ‘state’” [PAGE 5]. There is no weather variable, no surface friction variable, no metabolic load, no sprint capacity, and no player-tracking load variable in the listed dataset. Therefore any claim that a player’s action delta is a pure offensive skill is underdetermined by the source data unless one assumes that all physical and biomechanical contexts are exchangeable.

Formal veto proof sketch. Let \(X\) be a hidden physical context vector: surface friction coefficient \(\mu\) (dimensionless), wind velocity \(\mathbf{w}\) in \(\mathrm{m\,s^{-1}}\), precipitation rate in \(\mathrm{mm\,h^{-1}}\), temperature in \(\mathrm{K}\), and biomechanical fatigue state \(F\) in normalized units. The true context-specific transition is
\[
P_{ij}(x)=\Pr(S_{t+1}=s_j\mid S_t=s_i,X=x).
\]
The observed transition is a mixture:
\[
\widehat P_{ij}=\int P_{ij}(x)\,dF(x).
\]
The hitting probability \(h\) is not linear in \(P\). For a two-step example,
\[
h=p_{\text{goal}}+p_{\text{mid}}q_{\text{goal}}.
\]
Averaging gives
\[
\mathbb{E}[h]= \mathbb{E}[p_{\text{goal}}]+\mathbb{E}[p_{\text{mid}}q_{\text{goal}}],
\]
which generally differs from
\[
h(\widehat P)=\mathbb{E}[p_{\text{goal}}]+\mathbb{E}[p_{\text{mid}}]\,\mathbb{E}[q_{\text{goal}}]
\]
unless \(p_{\text{mid}}\) and \(q_{\text{goal}}\) are uncorrelated. Weather and fatigue induce exactly such correlations: wet surfaces reduce traction and alter first-touch and cutback success; wind alters ball flight and cross completion; heat and fatigue reduce pressing intensity and sprint recovery. Thus
\[
h(\widehat P)\neq \mathbb{E}[h(P(X))]
\]
in general, and the action delta
\[
\widehat\Delta_{a\to b}=\widehat h_b-\widehat h_a
\]
is a mixture-weighted contrast, not a context-specific causal effect. If player or team selection into contexts is correlated with \(X\), then the individual estimate is confounded.

The veto conditions are exact and testable. If the physical feasibility set
\[
\mathcal{A}(s,x)=\{a:\text{action }a\text{ is physically executable from }s\text{ under }x\}
\]
is binding, then the model must assign zero probability to actions outside \(\mathcal{A}(s,x)\). If a fitted matrix assigns positive mass to a pass or cross that is infeasible under high wind, heavy rain, or extreme fatigue, the transition matrix is physically inadmissible for that context. If the variance of \(X\) within a state is nonzero and the conditional \(P_{ij}(x)\) varies, then pooling is a model misspecification. If the covariance between intermediate success and final goal probability is nonzero, then the pooled \(h(\widehat P)\) is biased relative to the average context-specific value. If weather or biomechanics change the pressure state itself, then even the defensive-pressure label is endogenous. The source’s concession that “off the ball movement is just as important as on the ball movement” [PAGE 3] is a related veto: the state vector omits the physical and off-ball layer that determines whether a transition is genuinely available.

The adjudication is therefore: the Markov operator is admissible as a descriptive, sample-averaged possession model under its stated assumptions. It is vetoed as a context-free individual skill estimator when physical feasibility, weather, fatigue, or surface conditions alter transition probabilities and when those conditions correlate with player or team identity. To survive the veto, the model must either stratify by physical context, include \(X\) as covariates, or restrict claims to the observed mixture distribution. It cannot simultaneously ignore \(X\) and assert that \(\Delta_{a\to b}\) is an invariant individual offensive production measure.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR counterfactual veto 1: second-order memorylessness audit. Re-estimate the chain with a second-order state \(S'_t=(S_{t-1},S_t)\) on held-out matches and compare \(h_i\) and action deltas with the first-order model. The source explicitly assumes “the current state is independent to the previous state … the probabilities of moving to the next state are the same regardless of the past” [PAGE 4]. Prediction: if the first-order model is adequate, the rank correlation between first-order and second-order player action-value aggregates should remain high, for example \(\rho_{\text{rank}}\geq 0.80\). If the second-order model changes the sign of top-player deltas or drops the rank correlation below 0.80, the first-order individual-value claim is vetoed. This is verifiable by re-running the transition estimation and comparing ranks on held-out folds, consistent with the deck’s “K-Fold Validation” [PAGE 16].

RLVR counterfactual veto 2: penalty-role swap audit. Use the page 24 accounting exactly: earning a penalty from P(Goal)=0.15 to 0.71 yields +0.56; missing the penalty from 0.71 to 0 yields -0.71; scoring yields +0.29 [PAGE 24]. Randomly swap which player earns and which player takes penalties in a simulation, holding the team state sequence fixed. Prediction: team-level state value is conserved, but individual player values change sharply by role. If a player’s “offensive production” rank is driven mainly by penalty-taking or penalty-earning assignment, then the individual metric is role-dependent and is vetoed as a stable skill measure. This is verifiable because the assignment is discrete: for each simulated swap, compute the individual deltas and test whether the ranking is invariant. The deck’s own sentence, “Player 1 is rewarded for earning the penalty and Player 2 is heavily penalized for missing it” [PAGE 24], predicts that the answer will be no unless role is modeled.

RLVR counterfactual veto 3: physical-context stratification audit. Re-estimate transition matrices on dry versus wet or low-fatigue versus high-fatigue subsets, if such data are collected, and compare action-value rankings. Prediction: long passes, crosses, and high-pressure actions will show larger \(\Delta h\) changes across physical contexts than short, low-pressure actions, because wind, surface friction, and fatigue affect flight, traction, and pressing recovery. If the cross-context rank correlation for player action values falls below 0.80, or if the sign of a top player’s delta flips, then the pooled context-free value is vetoed. This is directly verifiable by subgroup estimation and interaction tests. The source does not include weather or biomechanical variables in its listed fields [PAGE 5], so the current model cannot pass this audit without additional data. The prediction is not a wager; it is a falsifiable model check: context-free individual values should remain stable across physical strata if the Markov state is sufficient. If they do not, the correct conclusion is that the source model is a valuable descriptive possession-value framework, but not a context-invariant individual offensive production estimator. The deck’s own caveat that “Not all passes are created equal” [PAGE 22] applies with equal force to contexts: not all transitions are created under equal physical and biomechanical conditions.
</RLVR_COUNTERFACTUAL_VETOES>