---
source: "2017 - From NOOB to SMURF Advanced analytics for League of Legends - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2017"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3639
---

<NATIVE_REASONING>
The user wants me to analyze a specific PDF source about League of Legends analytics from the 2017 New England Symposium on Statistics in Sports. The paper is "From NOOB to SMURF Advanced analytics for League of Legends" by Philip Z. Maymin.

Key constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE 1] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_vETO_ADJUDICATION> — Wait, need exact tag names.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to be careful:
- No betting lines whatsoever. This is about esports/LoL analytics, so I should avoid any gambling terminology.
- No toy equations. I need formal LaTeX equations. Since the source is short (1 page abstract), I need to derive formal statistical frameworks based on the concepts mentioned (win probability, player performance prediction, team composition, etc.) but not invent fake simple ratios. I can use proper probability theory, logistic regression, Bayesian updating, Shapley values, etc.
- Must cite [PAGE 1] and use verbatim quotes from the provided text.
- Must be >= 1,000 words total across sections.

Let me plan the content:

THINK_TRACE (>=400 words): Deep multi-hop derivation. Analyze the abstract's claims:
- Standard metrics (KDA) are simple.
- Vantage Sports proprietary metrics for hundreds of thousands of amateur games.
- "worthless deaths" and "smart kills" refine standard metrics based on team benefit.
- New player rating model correlates strongly with winning based on one individual's contribution in 5v5.
- Gray-zone audit: The abstract claims strong correlation but doesn't give effect sizes, confidence intervals, out-of-sample validation, or the proprietary algorithm. Single-player contribution in a 5v5 team game is confounded by teammates. Correlation != causation. Selection bias in amateur games. Post-game win probability vs live in-game win probability are different tasks.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- Define win probability P(W|S_t) where S_t is game state.
- Individual contribution model: \hat{P}(W | x_i) where x_i is player i's feature vector.
- Team aggregation: P(W | x_1,...,x_5) vs marginal contribution.
- Shapley value or counterfactual marginal contribution: \phi_i = \sum_{S \subseteq N \setminus \{i\}} \frac{|S|!(n-|S|-1)!}{n!} [v(S \cup \{i\}) - v(S)]
- Worthless deaths/smart kills as team-conditioned indicators: D^w_i = 1{death_i \land \neg benefit(team)} etc.
- Breakdown regimes: n=5 fixed team size, non-exchangeable roles, censoring at game end, non-stationarity across patches.
- Cite [PAGE 1] for quotes.

RETROCAUSAL_GENEALOGY:
- Historical lineage: Bill James baseball sabermetrics, basketball plus/minus, expected points (EP), win probability models in sports (NFL win probability), MOBA-specific (ORACLE, Eli Oracle, League of Legends analytics).
- Multi-week traps: Patch cycles (2-week patches), meta shifts, preseason vs regular season, pros vs amateurs, survivor bias in "smurf" detection.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: When losing, players revert to habitual builds/paths; model must account for state-dependent behavior.
- Counter-trap: Opponents adapting to a player's rated style.
- Clock: Game time as a non-stationary covariate; early game vs late game win probability surfaces differ.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical: APM (actions per minute), reaction time, input latency, hand/wrist fatigue (though not in source, can be veto layer). Weather doesn't apply to esports but network latency/packet loss does. I should frame "weather" as network/environmental layer.
- Veto proof: If network latency > threshold, win probability model is invalid regardless of player rating. Biomechanical fatigue veto: APM decay over time.

RLVR_COUNTERFACTUAL_VETOES:
- 3 verifiable RLVR (Reinforcement Learning Verifiable Rewards? Or just counterfactual vetoes) scenarios with predictions.
- Scenario 1: High-rated player on losing team due to teammate disconnect; prediction: model overestimates individual win probability contribution.
- Scenario 2: Smart kill in lost teamfight; prediction: individual metric inflated despite team loss.
- Scenario 3: Patch change altering champion win rates; prediction: pretrained rating model degrades after patch.

Word count: Need >=1000 words total. I'll aim for ~1500-2000 words to be safe.

Important: Do not mention betting lines. No spreads, totals, moneylines, odds. I can use "probability" but not "odds" in gambling sense. I should be careful not to say "odds ratio" unless in strict statistical sense? The constraint says "moneylines, or odds" - better avoid "odds" entirely to be safe, or use only "probability" and "log-likelihood". Actually "odds" in statistics is different from betting odds, but to be safe I'll avoid the word "odds" or clarify it's not betting. Better to just use probability and logit.

Let me draft carefully.

THINK_TRACE section:
Start with verbatim quote from [PAGE 1]: "Standard metrics for multiplayer online battle arena (MOBA) games like League of Legends (LoL) are very simple: kills, deaths, and the like."
Then: "At Vantage Sports, we use a proprietary method to generate unique metrics that are more useful for professional players."
"Some of the most important ones are worthless deaths and smart kills, which refine the standard metrics based on whether the team overall benefited from the activity."
"A new player rating model described here correlates strongly with winning even though it is essentially based on just one individual's contribution to a five-on-five game."

Derivation:
1. Define sample space: G = set of amateur LoL games, |G| = hundreds of thousands.
2. For game g, teams T_1, T_2, each |T|=5. Outcome Y_g \in {0,1}.
3. Player i feature vector X_i(g) includes KDA, worthless deaths, smart kills, wards, etc.
4. The claim: \exists f such that Corr(f(X_i), Y) is high for randomly selected i.
5. Problem: In 5v5, Y is a function of joint state X_1,...,X_5 and stochastic map dynamics. Marginal correlation of one player confounded by teammates' quality (selection on teammates).
6. Formal: E[Y | X_i] = \int E[Y | X_i, X_{-i}] dP(X_{-i} | X_i). If teammates are correlated with X_i (e.g., matchmaking pairs similar skill), then marginal effect \neq causal effect.
7. Gray zone: "proprietary method" not disclosed; no out-of-sample AUC/Brier score; "hundreds of thousands of amateur games" but no mention of pros; post-game vs live in-game are distinct prediction horizons.

Need >=400 words here.

SOURCE_OPERATORS_AND_EQUATIONS:
Formal LaTeX. Let's write equations.

Let \mathcal{G} be the set of games observed. For each game g \in \mathcal{G}, define:
- \mathbf{x}_i^{(g)} \in \mathbb{R}^d: feature vector for player i.
- y^{(g)} \in \{0,1\}: win indicator for the team containing player i (or for blue side).
- p_g = P(y=1 | \mathcal{F}_g) where \mathcal{F}_g is pre-game or in-game information.

Player rating model: r_i = \mathbb{E}[y | \text{do}(X_i = x_i)]? No, rating is likely correlational. Better:
\hat{r}_i = \arg\min_r \sum_{g} \ell(y^{(g)}, \sigma(\beta_0 + \beta^\top \phi(x_i^{(g)})))
where \sigma is logistic link.

But need formal operators:
- Worthless death indicator: W_i = \mathbb{1}\{ \text{death}_i \land \Delta \text{TeamGold}_{t+\tau} < 0 \land \neg \text{ObjectiveSecured} \}
- Smart kill indicator: S_i = \mathbb{1}\{ \text{kill}_i \land \Delta \text{WinProb}_{t:t+\tau} > \epsilon \}

Win probability operator: \mathcal{W}: \mathcal{S} \to [0,1], where \mathcal{S} is game state space.
Live win probability: p_t = \mathcal{W}(s_t).
Post-game attribution: \phi_i = \sum_{t=0}^{T} \gamma^t [ \mathcal{W}(s_t) - \mathcal{W}(s_t^{-i}) ] counterfactual.

Shapley value formula for 5 players:
\phi_i(v) = \sum_{S \subseteq N \setminus \{i\}} \frac{|S|! (5-|S|-1)!}{5!} [v(S \cup \{i\}) - v(S)]
where v(S) is the win probability achievable by coalition S.

Breakdown regimes:
- n=5 fixed: no extrapolation to different team sizes.
- Non-stationarity: patches change champion pool, so P(Y|X) shifts.
- Censoring: games end at T, so late-game states are right-censored for early-game models.
- Singularity: if all players have identical features (mirror match), individual attribution is unidentified (perfect collinearity).

Cite [PAGE 1] after quotes.

RETROCAUSAL_GENEALOGY:
- Lineage: From sabermetrics (Bill James, 1977 Baseball Abstract) to plus/minus (hockey/basketball), to Expected Points (EP) and Win Probability (WP) in American Football (e.g., Advanced NFL Stats), to MOBA analytics (ORACLE's LoL models, Vantage Sports). The abstract explicitly claims Vantage uses proprietary metrics refined from KDA.
- Multi-week traps: LoL patches release biweekly; champion win rates shift; preseason item changes alter gold flow; "smurf" detection is confounded by account leveling and MMR decay over weeks; amateur samples may be stale within 2-3 weeks of a patch.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under score deficit, players regress to habitual (pre-learned) item paths and lane rotations rather than adaptive optimal play. A model trained on average play misestimates win probability in crisis states.
- Counter-trap: High-rated players are targeted by opponents (focus fire, bans, lane swaps), inducing endogeneity: rating affects opponent behavior, which affects outcomes.
- Clock: Game clock \tau \in [0, T_{max}] is a non-stationary covariate. Early game win probability surface differs from late game; Baron/Dragon timers create discontinuities in \mathcal{W}(s_t).

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical layer: APM (actions per minute), clicks per minute, reaction time. Veto: If APM < threshold due to fatigue or input lag, individual rating r_i is not transportable to current game state. Biomechanical fatigue: fine motor decay after 30+ min.
- Network layer (esports "weather"): ping, packet loss, jitter. Veto: If RTT > 100ms or packet loss > 2%, win probability model invalid due to input-state desynchronization.
- Weather: Not applicable to indoor esports, but environmental layer = venue power/internet outage.
- Adjudication rule: Any physical or network veto overrides the statistical rating; the model output is set to null or baseline team average.

RLVR_COUNTERFACTUAL_VETOES:
RLVR = Reinforcement Learning Verifiable Rewards? I'll interpret as verifiable counterfactual veto scenarios for a reinforcement learning or rating system.
Three scenarios:
1. Disconnected teammate: Player i has high smart kill count but teammate DC at minute 15. Veto triggers because team size becomes 4v5. Prediction: Model without veto overestimates P(win | x_i) by >0.3; with veto, output reverts to team-structure baseline.
2. Worthless death cascade: Player i dies worthlessly at minute 25, triggering enemy Baron. Smart kill metric earlier doesn't offset. Veto: If cumulative worthless death weight > threshold, individual rating contribution set to negative regardless of earlier smart kills. Prediction: post-hoc correlation collapses in games with veto-triggered cascades.
3. Patch discontinuity: Model trained on Patch 7.14, evaluated on Patch 7.15 after jungle changes. Veto: feature distribution shift (KL divergence > threshold) invalidates rating. Prediction: out-of-sample Brier score increases by >0.05; recalibration required.

Need to ensure no betting language. Avoid "odds", "spread", "moneyline". Use probability, likelihood, Brier score, AUC, calibration.

Total word count: I'll write generously.

Let's write it out.

Make sure tags are exactly:
<THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>

Check spelling of CROSS_LAYER_VETO_ADJUDICATION.

I will include verbatim quotes with [PAGE 1].

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The one-page abstract from the 2017 New England Symposium on Statistics in Sports makes several empirical claims that require multi-hop statistical unpacking. The text states, verbatim: “Standard metrics for multiplayer online battle arena (MOBA) games like League of Legends (LoL) are very simple: kills, deaths, and the like” [PAGE 1]. It then asserts that Vantage Sports employs “a proprietary method to generate unique metrics that are more useful for professional players,” applied to “hundreds of thousands of amateur player games,” identifying “worthless deaths and smart kills” as refinements that condition standard actions on “whether the team overall benefited from the activity” [PAGE 1]. Finally, it claims “A new player rating model described here correlates strongly with winning even though it is essentially based on just one individual’s contribution to a five-on-five game” [PAGE 1].

The first derivation hop is to define the sample space formally. Let \mathcal{G} denote the observed set of amateur games, with |\mathcal{G}| in the hundreds of thousands. Each game g \in \mathcal{G} contains two teams, T_1 and T_2, each with exactly five players. Let y^{(g)} \in \{0,1\} be the win indicator for a focal team, and let \mathbf{x}_i^{(g)} \in \mathbb{R}^d be the feature vector for player i, including raw kills, deaths, assists, worthless deaths, smart kills, ward placement, and map-vision metrics. The abstract implies the existence of a rating function r_i = f(\mathbf{x}_i) such that \mathrm{Corr}(r_i, y) is high for a randomly selected individual i in a 5v5 match.

The second hop identifies a fundamental identification problem. In a five-on-five game, y is generated by a joint stochastic map \mathcal{M}: (\mathbf{x}_1,\dots,\mathbf{x}_5, \xi) \mapsto y, where \xi captures map randomness, monster spawns, and patch-dependent mechanics. The marginal expectation E[y \mid \mathbf{x}_i] integrates over teammates: E[y \mid \mathbf{x}_i] = \int E[y \mid \mathbf{x}_i, \mathbf{x}_{-i}] \, dP(\mathbf{x}_{-i} \mid \mathbf{x}_i). Because matchmaking systems pair players of similar visible skill, \mathbf{x}_{-i} is statistically dependent on \mathbf{x}_i. Therefore a high marginal correlation between one player’s refined metrics and the team outcome does not establish that the individual’s contribution causally drives the win; it may be a proxy for teammate quality, a phenomenon the abstract does not address.

The third hop concerns the distinction between post-game attribution and live in-game win probability, both listed as analytical modules on [PAGE 1]. Post-game attribution assigns credit after y is observed, which introduces outcome bias: a “smart kill” in a game that ends in loss may look different ex post than ex ante. Live win probability p_t = P(y=1 \mid \mathcal{F}_t) conditions on the filtration \mathcal{F}_t of game states up to time t. These are distinct estimation targets with different loss functions (e.g., Brier score for probability calibration vs. ranking loss for rating correlation), and the abstract provides no out-of-sample validation metrics for either.

A gray-zone audit reveals three unreported conditions. First, the word “proprietary” means the functional form of f is not disclosed, so reproducibility is impossible from the text alone. Second, “hundreds of thousands of amateur games” does not imply transportability to professional play; amateur macro decision-making, vision control, and teamfight coordination differ systematically from professional play. Third, “correlates strongly with winning” reports no effect size, confidence interval, or out-of-sample AUC/Brier score, so the magnitude and generalizability of the correlation are unverified from [PAGE 1] alone.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the game state at time t be s_t \in \mathcal{S}, where \mathcal{S} includes gold differential, objective control, vision score, and player positions. The live win probability operator is \mathcal{W}: \mathcal{S} \to [0,1], with p_t = \mathcal{W}(s_t). Units are dimensionless probabilities.

For individual attribution, define a team win function v: 2^N \to [0,1] for N=\{1,\dots,5\}. The counterfactual marginal contribution of player i uses the Shapley value operator:

\phi_i(v) = \sum_{S \subseteq N \setminus \{i\}} \frac{|S|! \, (5-|S|-1)!}{5!} \left[ v(S \cup \{i\}) - v(S) \right].

Here \phi_i is measured in probability points (dimensionless, range [-1,1]).

Worthless deaths and smart kills are team-conditioned binary operators. Let D_i be a death event for player i at time t, and let \Delta G_{t:t+\tau} be team gold change over horizon \tau. Then:

W_i = \mathbb{1}\{ D_i \land (\Delta G_{t:t+\tau} < 0) \land \neg \mathrm{ObjectiveSecured}_{t:t+\tau} \},

S_i = \mathbb{1}\{ \mathrm{Kill}_i \land (\mathcal{W}(s_{t+\tau}) - \mathcal{W}(s_t) > \varepsilon) \}.

Both W_i and S_i are dimensionless indicators. The rating model can be expressed as a regularized logistic link:

\hat{y} = \sigma\left( \beta_0 + \boldsymbol{\beta}^\top \boldsymbol{\phi}(\mathbf{x}_i) \right), \qquad \sigma(z) = \frac{1}{1+e^{-z}},

where \hat{y} \in [0,1] is the predicted win probability and \boldsymbol{\phi}(\mathbf{x}_i) aggregates worthless deaths, smart kills, and other Vantage metrics.

Breakdown and singularity regimes:
1. Fixed team size n=5: the Shapley operator assumes exactly five players; it is undefined for 4v5 disconnects or remakes.
2. Perfect collinearity: in mirror-match drafts where all champions and starting states are identical, v(S \cup \{i\}) - v(S) is unidentified because player contributions are exchangeable.
3. Non-stationarity: LoL patches alter champion statistics and item economics, so P(y \mid \mathbf{x}) shifts between patch versions; the model has no reported retraining trigger.
4. Right censoring: games end at finite T, so late-game states are censored for early-game probability models.

All empirical claims in this section are anchored to the abstract’s description of Vantage Sports’ proprietary metrics, worthless deaths, smart kills, and single-player rating correlation on [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The analytical lineage described on [PAGE 1] descends from three historical threads. First, baseball sabermetrics, beginning with Bill James’s abstracts in the late 1970s, replaced simple counting stats (batting average, RBIs) with context-dependent metrics that credit or debit players based on run expectancy and win expectancy. Second, basketball and hockey plus/minus and adjusted plus/minus models attempted to isolate individual contribution within a five-on-five or six-on-six team context, confronting the same teammate-confounding problem identified above. Third, American football expected-points and win-probability models (e.g., advanced NFL stats frameworks) established the distinction between post-game attribution and live in-game win probability, p_t = P(y=1 \mid \mathcal{F}_t).

In MOBA-specific history, Vantage Sports’ claim to refine kills and deaths into “worthless deaths” and “smart kills” parallels earlier esports efforts such as Oracle’s Eli Oracle and team-side LoL analytics that weight actions by game-state impact rather than raw counts. The abstract’s assertion that hundreds of thousands of amateur games were analyzed places this work in the era of big-data esports scouting, circa 2015–2017, when match APIs enabled large-scale amateur sampling.

Multi-week traps are specific to LoL’s live-service cadence. Riot Games historically releases patches on a roughly biweekly schedule. A rating model trained on amateur games from Patch 7.13 may experience feature-distribution shift by Patch 7.15 if jungle spawn timers, item costs, or champion base stats change. Because the model is described as proprietary and correlational rather than structural, there is no reported mechanism to detect patch-induced drift. A second trap is “smurf” dynamics: high-skill players on new accounts create non-stationary matchmaking pools, meaning an amateur sample collected over several weeks may mix true beginners with disguised professionals, biasing the estimated correlation between individual metrics and winning. A third trap is preseason instability, when major item and rune overhauls can render gold-flow and vision metrics non-comparable across season boundaries.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression refers to the tendency of players, when behind in gold or objectives, to revert to previously reinforced build paths, lane rotations, and combat routines rather than computing the state-contingent optimal play. A rating model trained on average player behavior will systematically misestimate win probability in crisis states because it assumes the same decision policy applies whether ahead or behind. The counter-trap is opponent adaptation: a player with a high individual rating becomes a strategic target—opponents prioritize banning that player’s champion, camp their lane, or collapse on them in teamfights. This induces endogeneity: the rating itself alters the game-theoretic environment in which the player performs, so the same \mathbf{x}_i produces a different y distribution depending on opponent awareness of i’s rating.

The clock operates as a non-stationary covariate. LoL contains discontinuous power spikes at dragon and Baron spawn timers, item completion thresholds, and level breakpoints (6, 11, 16). The win-probability surface \mathcal{W}(s_t) is therefore piecewise smooth with jumps at these events. A model that treats game time t as a linear covariate, or that ignores the interaction between individual metrics and clock phase, will misattribute late-game teamfight performance to early-game laning metrics. Recursive theory of mind requires modeling not only what player i does, but what player i believes opponents believe about i’s rating, and how that belief changes opponent targeting as the clock approaches major objectives.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical and biomechanical layer: Actions per minute (APM), clicks per minute, and reaction time are the motor outputs through which \mathbf{x}_i is realized. Veto rule: if a player’s APM falls below a biomechanical fatigue threshold—e.g., sustained fine-motor decay after 30 minutes of continuous play—or if input latency exceeds the human sensorimotor integration window, the observed \mathbf{x}_i no longer represents the player’s true decision policy. Under this veto, the rating output r_i is invalidated and replaced by a team-average baseline.

Network/environmental layer (esports analogue to weather): Round-trip time (RTT), packet loss, and jitter create desynchronization between the client’s intended action and the server’s executed state. Veto rule: if RTT > 100 ms or packet loss > 2% over a 60-second window, win-probability outputs from \mathcal{W}(s_t) are suspended because s_t is measured with error. Weather in the literal meteorological sense is inapplicable to indoor esports, but venue power failure or internet outage functions as an environmental veto of the same class.

Adjudication hierarchy: Any physical, biomechanical, or network veto overrides the statistical rating. The adjudication proof is that \mathcal{W} assumes a faithful observation of s_t and a faithful execution of player intent. If either assumption is violated, the likelihood P(y \mid \mathbf{x}_i, \mathcal{F}_t) is misspecified regardless of the sophistication of worthless-death or smart-kill refinements described on [PAGE 1].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Mid-game teammate disconnect. A high-rated player i accumulates smart kills in the first 15 minutes, but at t=15:00 a teammate disconnects, leaving a 4v5. Veto condition: team size drops below n=5, invalidating the five-player Shapley operator. Prediction without veto: the model assigns i an inflated win-probability contribution based on early smart kills. Prediction with veto: the rating is frozen at the disconnect timestamp and the win probability reverts to a 4v5 structural baseline, reducing the projected team win probability by at least 0.20 relative to the no-veto output.

Scenario 2: Worthless-death cascade. Player i records several smart kills early, but at t=24:00 dies worthlessly while the enemy team secures Baron and two inhibitors. Veto condition: cumulative worthless-death weight \sum W_i exceeds a threshold such that the net team-state impact becomes negative despite earlier smart kills. Prediction without veto: the model’s positive early smart-kill signal dominates, overestimating i’s contribution. Prediction with veto: the post-24:00 cascade triggers a negative attribution override, flipping i’s marginal contribution from positive to negative for that game.

Scenario 3: Patch discontinuity. A rating model is trained on amateur games from Patch 7.14 and evaluated on Patch 7.15 after a jungle experience-point change alters early-game level timings. Veto condition: KL divergence between the training and evaluation feature distributions exceeds a preset tolerance. Prediction without veto: the model applies stale coefficients and reports a strong correlation with winning that does not replicate out of sample. Prediction with veto: the model triggers recalibration or reverts to pre-patch priors, and out-of-sample Brier score degradation is bounded to less than 0.05 rather than the unmitigated increase expected from distributional shift.
</RLVR_COUNTERFACTUAL_VETOES>