---
source: "2017 - From NOOB to SMURF Advanced analytics for League of Legends - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2017"
pages: 1
model: alibaba_gse:qwen-plus-character
words: 2259
---

<THINK_TRACE>
The core objective of this analysis is to mathematically formalize the "From NOOB to SMURF" metrics introduced by Vantage, specifically targeting "Worthless Deaths," "Smart Kills," and their proprietary single-player Elo-like rating model. The source document [PAGE 1] explicitly critiques standard MOBA KDA (Kill/Death/Assist) metrics for failing to capture team-oriented value, instead proposing a framework where individual actions are judged on whether the "team, overall benefited from the activity."

To derive a rigorous mathematical operator for this, we first define the state-space of a League of Legends match. A game is not merely a sum of independent player performances but a complex system $S(t)$ evolving over time $t \in [0, T]$, characterized by gold differentials, map control, objective ownership, and vision density. Standard KDA treats a kill as a scalar value $+1$ regardless of context. However, a death that leads to the enemy team securing Baron Nashor or destroying an inhibitor has a massive negative derivative on the probability of victory $P(Win)$. Thus, a "worthless death" is formally defined as an event where the localized change in expected value $\Delta E[V]$ falls below a critical negative threshold $\theta_{death}$.

Furthermore, the concept of a "Smart Kill" implies a contextual weighting matrix. If a player secures a kill ($K$), the metric must evaluate the subsequent resource conversion. Does the kill allow for a tower plate, a dragon steal, or does it result in a trade where the killing team loses two members? We can model this using an influence function $I(a_i, S_t)$ mapping an action $a_i$ at state $S_t$ to a vector of outcome probabilities.

Crucially, the text mentions a "new player rating model" derived from these refined metrics that correlates with winning despite being based on one individual's contribution in a 5v5 setting. This suggests a factorization of the team win probability into individual latent skill vectors. If $V_{team} = \sum_{i=1}^5 f(\mathbf{m}_i)$, where $\mathbf{m}_i$ is the vector of advanced metrics (like worthless deaths/smart kills) for player $i$, then the correlation coefficient $\rho(V_{team}, Win)$ serves as the validation metric. The gray zone here involves handling "tilted" players; the source mentions "Tilt Analysis." Emotional degradation affects decision-making latency and risk assessment. We must consider how psychological states act as non-linear modifiers to the base statistical operators, potentially introducing a decay factor $\alpha(t)$ to a player's effective contribution during high-stress windows. Finally, translating these concepts into a betting-adjacent analytical tool requires establishing strict singularity regimes: when does a metric break down? For example, in a highly asymmetrical match (e.g., 20-minute stomps), standard deviation calculations for "worthless deaths" might skew heavily toward zero variance for the losing team, rendering the metric useless for early-game differentiation. Establishing these boundaries prevents the application of the models in degenerate game states.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Based on the abstract from [PAGE 1], we formalize the transition from standard "NOOB" metrics (KDA) to "SMURF" analytics via the following operators.

**1. Contextual Action Evaluation Operator ($\Omega$)**
Standard metrics treat an action $a$ (like a kill) as a static scalar. The Vantage approach requires evaluating the action within the dynamic game state $S_t$.
Let $E[W(S_T)]$ be the Expected Value of Winning at game end $T$, given current state $S_t$.
The value of an action $a_i$ taken by player $i$ at time $t$ is:
$$ \Delta V(a_i, t) = E[W(S_{t+\delta}) | a_i] - E[W(S_t)] $$
where $\delta$ represents the immediate post-engagement timeframe required to resolve the consequences of the action (e.g., resetting lanes, securing objectives).

**2. Worthless Death Metric ($D_W$)**
A death is inherently negative, but its "worthlessness" is quantified by the degree to which it accelerates the opponent's path to victory beyond the baseline cost of respawning.
Let $d_i$ be a binary indicator of player $i$ dying.
[PAGE 1] states these metrics refine standards based on whether the team benefited. Therefore, a death is worthless if the resulting state change severely harms the team's win probability:
$$ D_W(i) = \begin{cases} 1, & \text{if } \Delta V(d_i, t) < -\lambda \\ 0, & \text{otherwise} \end{cases} $$
where $\lambda$ is a hyperparameter representing the maximum acceptable strategic damage from a single death (e.g., allowing the enemy to secure a major monster or tower). The unit of measurement here is **Binary Strategic Failure**.

**3. Smart Kill Metric ($K_S$)**
Conversely, a "smart" kill actively improves the team's position.
Let $k_i$ be a binary indicator of player $i$ scoring a kill.
$$ K_S(i) = \begin{cases} 1, & \text{if } \Delta V(k_i, t) > \mu \\ 0, & \text{otherwise} \end{cases} $$
where $\mu$ is a positive threshold indicating a net strategic advantage gained (e.g., gold lead converted to map pressure without taking excessive damage in return). The unit is **Binary Strategic Success**.

**4. Individual Contribution Rating Model ($R_{ind}$)**
The source describes a rating model based essentially just on individual contributions that strongly correlates with winning. Let $\mathbf{M}_i = [K_S(i), D_W(i), \dots]^T$ be the feature vector of advanced metrics for player $i$.
We define the Individual Rating as a weighted linear combination (or more complex non-linear mapping):
$$ R_{ind}(i) = \mathbf{w}^T \mathbf{M}_i + b $$
The aggregate team performance is then:
$$ P(Win) \approx \sigma \left( \sum_{i=1}^5 R_{ind}(i) \right) $$
where $\sigma$ is a sigmoid function squashing the total score into a probability space $[0,1]$.
*Assumptions:* Player contributions are additive; the game duration is sufficiently long to average out stochastic fluctuations (Law of Large Numbers applied to discrete engagements).
*SINGULARITY/BREAKDOWN REGIMES:*
- *Early Game Singularity:* At $t \to 0$, $\Delta V$ is highly volatile due to fog of war. One lucky gank can trigger $K_S=1$ with low actual skill, causing high variance in $R_{ind}$.
- *Feed/Arena Breakdown:* In games where a player intentionally feeds (maximizing $D_W$ constantly), the linear assumption of additivity breaks down as the remaining 4 players may adopt a purely defensive posture, decoupling $R_{ind}$ from standard offensive metrics.
- *Smurf Detection Limit:* If an extremely skilled player deliberately minimizes $K_S$ and $D_W$ (playing perfectly passively), $R_{ind}$ will converge to the mean, masking their true skill level ("sanding").
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of these advanced MOBA metrics traces back to the broader evolution of sports analytics, most notably the sabermetrics revolution in baseball initiated by Bill James and popularized by Moneyball. Just as traditional baseball stats (RBIs, Wins) were shown to be context-free and misleading, League of Legends' KDA was exposed as insufficient for capturing the multi-dimensional nature of team play. The transition from "NOOB to SMURF" reflects a paradigm shift from descriptive statistics (what happened) to prescriptive/causal statistics (why it mattered for the win condition).

In terms of historical development within Esports analytics, platforms like Mobalytics and Oracle's Elixir pioneered early iterations of "Impact" scores, attempting to normalize KDA across different champions and roles. However, Vantage's specific focus on "worthless deaths" draws direct genealogical lines to defensive efficiency metrics in basketball (e.g., Points Allowed per 100 Possessions) and turnover valuation in basketball/hockey. 

Looking forward, a multi-week trap for analysts adopting these models lies in the **"Patch Dependency Loop."** League of Legends undergoes constant balance changes (patches). A metric that identifies a "Smart Kill" on Champion A in Patch 11.1 might become entirely invalid in Patch 11.2 if a nerf fundamentally alters the reward-to-risk ratio of engaging. The retrocausal trap occurs when analysts use historical data from previous patches to train their $R_{ind}$ models, assuming stationarity in a highly non-stationary environment. This causes the model to overweight obsolete strategic paradigms (e.g., valuing hyper-carries too early when the meta shifts to skirmish-heavy compositions). To avoid this, the temporal window for training the $\mathbf{w}$ weights in the rating equation must be strictly constrained to recent patch cycles, accepting higher variance for the sake of relevance.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
In competitive environments, metrics do not exist in a vacuum; they alter player behavior once widely disseminated. This recursive theory of mind manifests differently for crisis habits versus counter-traps.

*Crisis Habit Regression:* When amateur players ("NOOBs") become aware of metrics like "worthless deaths," their instinctive response under stress (e.g., falling behind in gold) is often *avoidance*. Recognizing that dying heavily penalizes their calculated $R_{ind}$, they regress to overly passive, non-contributory playstyles ("laning safely" but never initiating crucial fights). They sacrifice potential upside ($K_S$) to minimize downside ($D_W$), ultimately stalling the team's macro progress and paradoxically decreasing $P(Win)$. The metric, intended to punish poor decision-making, inadvertently punishes necessary aggression.

*Counter-Trap / The Clock:* Conversely, elite players ("SMURFs") engage in goodhart's law exploitation. They understand the underlying clock of the game and how metrics are evaluated. Once a team realizes the analytical community values "Smart Kills" (kills that secure objectives), a SMURF might force suboptimal skirmishes near Dragon solely to accumulate $K_S=1$ markers, even if a safer play would have been to simply contest the vision. They play *for the metric*, creating artificial volatility. Furthermore, because the rating model correlates with winning, teams might deliberately bait their weaker teammates into taking "worthless deaths" early in the game to isolate resources for their carries, gaming the distribution of $R_{ind}$ to make their stars look exceptionally high-rated, obscuring the toxic intra-team dynamics that actually led to the loss.

*Resolution Strategy:* To mitigate these behavioral feedback loops, the model must incorporate *opportunity cost*. A "Smart Kill" should be debited if it prevents a higher-value alternative action (like a clean objective steal), ensuring the metric measures true optimal strategy rather than metric-chasing proxies.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
No purely algorithmic evaluation of digital sports can ignore the physical and environmental substrates. Cross-layer vetoes are essential to validate the integrity of the generated metrics.

*Physical/Biomechanical Veto:* Reaction time and APMS (Actions Per Minute) are bounded by human biomechanics. A sudden spike in $K_S$ for a player who historically maintains a steady APMS could indicate a violation of physiological constraints—namely, cheaters (macros/bots). If a player achieves a sequence of micro-interactions yielding multiple "smart kills" that exceed the theoretical maximum cognitive processing speed of a human (typically capped around 30-40 distinct inputs per second under extreme duress), a **Biomechanical Veto** triggers. The data points are flagged as corrupted, and the player's $R_{ind}$ is invalidated, regardless of the apparent strategic brilliance.

*Environmental/Veto Proof:* League of Legends servers experience lag spikes, packet loss, and rubber-banding. These environmental factors can artificially inflate $D_W$ (a player dies because their movement command didn't register) or deflate $K_S$ (an ability misses due to desync). 
To construct a **Veto Proof** against these anomalies, the analytical pipeline must cross-reference in-game performance metrics with network telemetry (ping variance, packet loss percentage). 
Formulaic Veto Condition:
If $\sigma(Ping) > \tau_{net}$ during the engagement window $\delta$, then:
$$ \text{Override}(\Delta V(a_i, t)) = 0 $$
(meaning the action is neither smart nor worthless, but environmentally compromised). Without this cross-layer veto, the model will systematically punish players with inferior ISPs or hardware, introducing socioeconomic bias into the "SMURF" detection capabilities.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
To stress-test the robustness of the proposed metrics and rating model, we employ Rejection-based LLM Verification Reasoning (RLVR) to generate three counterfactual scenarios where the model fails, followed by verifiable predictions.

**Scenario 1: The Hyper-Carry Farm Bot**
*Counterfactual Setup:* Imagine a bot programmed strictly to maximize CS (Creep Score) and achieve exactly 0 deaths and 0 kills. It never engages, never wards, and never provides vision.
*Model Prediction:* Based on standard definitions, $D_W = 0$ (perfect survival) and perhaps the model assumes passive safety contributes positively. The bot accumulates massive gold.
*Failure Point:* Despite high gold, the team loses because objectives fall unwarded and unchallenged. The $R_{ind}$ incorrectly ranks the bot highly because it avoided "worthless deaths."
*Verifiable Prediction:* The correlation between raw gold share and $P(Win)$ drops precipitously past a certain threshold (diminishing returns), exposing the flaw. To fix this, $R_{ind}$ must include a mandatory "Vision Score" or "Objective Participation" floor. A player cannot achieve a high SMURF rating without contributing to the shared economy of map control.

**Scenario 2: The "Baiter" Carry**
*Counterfactual Setup:* Player A intentionally feeds ($D_W = 1$ repeatedly) while Player B cleans up every death for an easy assist or kill ($K_S = 1$ repeatedly).
*Model Prediction:* Player B's $R_{ind}$ skyrockets, appearing like a god-like carry. Player A is correctly identified as a detriment.
*Failure Point:* The model fails to capture the *causal dependency*. Player B's "smart kills" only exist because Player A created the opportunity. If Player A played normally, Player B would likely be average. The metric overstates Player B's standalone skill ceiling.
*Verifiable Prediction:* In a double-blind A/B test, removing Player A and replacing them with a neutral bot results in Player B's $K_S$ dropping below the $\mu$ threshold immediately. The veto mechanism requires calculating "Baseline Kill Probability"—adjusting $K_S$ downward if the target was already significantly out-positioned or weakened by a teammate.

**Scenario 3: The 20-Minute Stomp (Singularity Check)**
*Counterfactual Setup:* Team X crushes Team Y so thoroughly that by minute 15, the gold difference is 20k. Team Y gives up entirely, running around the fountain.
*Model Prediction:* Every death Team Y takes after minute 15 registers as a "worthless death" ($D_W=1$) because it further cements a lost state. Team X gets "smart kills" ($K_S=1$) effortlessly.
*Failure Point:* The metrics no longer differentiate skill. A random button masher on Team X gets the same $K_S$ as the star player because the win probability $P(Win)$ for Team X is already saturated at 0.99. The marginal $\Delta V$ of any additional kill approaches zero.
*Verifiable Prediction:* The standard deviation of $R_{ind}$ among all 10 players converges to near zero as the game enters the "stomp" phase. The model should implement a dynamic time-decay function, freezing metric accumulation once $|P(Win) - 0.5|$ exceeds a confidence threshold (e.g., 0.85), declaring the game statistically decided and halting further SMURF evaluation.
</RLVR_COUNTERFACTUAL_VETOES>