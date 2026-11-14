---
source: "2023 - Estimating individual contributions to team success in women s college volleyball - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2023"
pages: 4
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4466
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source text (a volleyball analytics paper from NESSIS 2023). I must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations like Force/Fatigue. Need formal LaTeX equations. Cite [PAGE N] markers and verbatim quotes. The source text has page markers in the text (e.g., "0", "1", "2"... up to "26"). I should cite them as [PAGE N].

Let me carefully parse the source content:
- Title: Estimating individual contributions to team success in women’s college volleyball
- Authors: Scott Powers, Luke Stancil and Naomi Consiglio
- NESSIS 2023
- Acts:
  - Act 1: Estimating Point Win Probability (Markov Chain Model)
  - Act 2: Evaluating Individual Contributions (Domain Knowledge)
  - Act 3: Adjusting for Strength of Schedule (Linear Mixed-Effect Models)
  - Act 4: Discussion

Key details:
- Dataset: 4,147 matches, 600K+ points, 5M+ contacts, ~6,000 players [PAGE 7]
- Evaluation codes: # > + > ! > – > / > = [PAGE 7]
- Game state: (S, P) and (R, P) terminal states [PAGE 8]
- Markov chain state includes whether team started serving/receiving and sequence of contacts [PAGE 8]
- Example point progression table [PAGE 9]
- Attack outcome tree [PAGE 13]
- Example: First Attack [PAGE 14] with TOT, ATT, SET, BLK, DIG columns showing % changes
- Distribution of Points Gained per Opportunity [PAGE 15]
- Player A vs Player B back row defense [PAGE 16]: both 72% digs per opportunity, but Player A +3.6% PG per opportunity vs Player B +1.2% PG per opportunity. Caution: dig evaluation codes biased against setters by design [PAGE 16]
- Act 3: Server vs Receiver models [PAGE 17]:
  - Exp. Points Gained = β_Server + δ_Receiver (good)
  - Exp. Points Gained = (β_Team + β_Server) + (δ_Team + δ_Receiver) (better)
  - Exp. Points Gained = (β_Conf + β_Team + β_Server) + (δ_Conf + δ_Team + δ_Receiver) (best)
  - Fit random-effects model using lme4 package in R [PAGE 17]
  - Adj. Points Gained ≈ Points Gained – (δ̂_Conf + δ̂_Team + δ̂_Receiver) [PAGE 17]
  - Requires de-biasing step [PAGE 17]
- Results: Top 10 Conferences [PAGE 18]: Big Ten +0.23, Pac-12 +0.23, SEC +0.21, etc. SoS units: points gained per set [PAGE 18]
- Example Conference Comparison [PAGE 19]: Before/After adjustment, Pac-12 vs Summit League. Caution: Additive assumption is not literally true in real life [PAGE 19]
- Teammate Comparison outside hitters [PAGE 20]: Player A avg SOS +1.4%, Player B -0.1%. Toughest SoS: Player A vs Nebraska +13.0% Kaitlyn Hord blocking, Lexi Rodriguez digging. Caution: SoS depends on which zone attacker hits [PAGE 20]
- Logan Eggleston ranking [PAGE 22]
- Defensive Specialist Strategy [PAGE 23]: 63% of teams replace at least one OH with DS in back row. Reception PG per opportunity: All-Around OH +1.1%, Front-Only OH -1.4%, DS +0.9%. Substitutable opportunities: 0.1 opportunities per point. Example: PWP 50% -> 50.2%, match win prob 50% -> 52%. Pythagorean formula for volleyball: p^10 / (p^10 + (1-p)^10) [PAGE 23]
- Limitations [PAGE 24]: improve blocker/digger assignments, correct bias for digs made by setter, reward good decision-making in SoS, account for setter back/front row, leverage (X,Y) coordinates [PAGE 24]

Now I need to construct the response with the exact XML sections.

Word count >= 1,000 across sections, with THINK_TRACE >= 400 words.

I need to avoid betting lines. The source mentions "Match win probability 50% -> 52%" which is a probability, not a betting line. I can mention probability but not odds/spreads/totals/moneylines. I should be careful not to frame it as betting.

I need formal LaTeX equations. I can formalize the Markov chain, the mixed effects model, the Pythagorean formula, etc.

Exact singularity/breakdown regimes: mention where models break (e.g., additive assumption not literally true, dig evaluation codes biased against setters, blocker/digger assignment work in progress, SoS depends on zone, small sample conferences, etc.)

Cite exact [PAGE N] markers and verbatim quotes.

Let's draft each section.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Derive point win probability recursion from Markov chain states.
- Derive individual contribution as difference in point win probability between successive states.
- Chain rule through volleys: serve -> reception -> set -> attack -> dig -> ...
- Show how Act 2 attributes credit via domain knowledge (attack outcome tree).
- Show how Act 3 hierarchical linear mixed model separates conf/team/player effects.
- Gray-zone audit: additive separability assumption, evaluation code bias, blocker/digger assignment, (X,Y) underutilization, front/back row setter, small-sample SOS.
- Multi-hop: how a single dig by Player A vs Player B with same dig% yields different PG due to dig quality (perfect dig rate, no block touch).
- Cite pages.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Define state space S = {(s, c) : s ∈ {Serve, Receive}, c ∈ contact sequence}.
- Transition probabilities P(next state | current state, contact eval).
- Point win probability recursion: V(s) = Σ P(s'|s) V(s'), terminal V(S,P)=1, V(R,P)=0 (or vice versa depending on perspective).
- Individual contribution: ΔPG = V(state_after_contact) - V(state_before_contact).
- Mixed model: y_ijk = β_conf + β_team + β_player + δ_conf + δ_team + δ_receiver + ε.
- Pythagorean: MWP = p^10 / (p^10 + (1-p)^10).
- Units: points gained per set, points gained per opportunity, probability dimensionless.
- Breakdown regimes: additive assumption false [PAGE 19], dig bias vs setters [PAGE 16], blocker/digger assignment WIP [PAGE 14, 24], SoS zone dependence [PAGE 20], (X,Y) unused [PAGE 24].

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Fellingham PAAPS (JQAS 2022) similar to regularized adjusted plus-minus in basketball [PAGE 5]. Gordon Value Added above Expectation [PAGE 5].
- Basketball RAPM lineage -> volleyball adaptation.
- Markov chain in sports (e.g., baseball, soccer expected goals).
- Pythagorean expectation (baseball Bill James, adapted to volleyball exponent 10) [PAGE 23].
- Multi-week traps: conference strength shifts over season; early-season SOS miscalibration; player fatigue/injury not modeled; rotation changes; setter front/back row not modeled [PAGE 24]. If using preseason rankings for SoS, retrospective bias.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This is a more abstract section. Need to interpret in context of volleyball analytics/coaching decisions.
- Crisis habit regression: under pressure, teams revert to default habits (e.g., OH attacks instead of MB quick sets).
- Counter-trap: opponent anticipates regression and stacks block against OH.
- Clock: set score, time constraints (though volleyball sets aren't clock-limited, but point pressure), substitution patterns, DS strategy [PAGE 23].
- How the model's static PG per opportunity fails to capture dynamic in-match adjustments (crisis regression).
- Coaches substituting DS for OH in back row [PAGE 23] as a counter to crisis habit.
- Predictive failure when model assumes additive player effects but in crisis, interactions dominate (non-additivity).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: court dimensions, net height, ball physics. (X,Y) coordinates exist but unused [PAGE 24]; veto: model ignores spatial attack location, which physically determines block/dig success.
- Biomechanical: player jump height, arm swing speed, reaction time not in dataset. Digs by setters biased [PAGE 16]. Blocker/digger assignment WIP [PAGE 14, 24]. Veto: cannot attribute block vs dig accurately without biomechanical tracking.
- Weather: indoor volleyball, minimal weather, but travel fatigue, altitude, arena conditions not modeled. Strength of schedule confounds venue [PAGE 17-18].
- Veto proof: any ranking that ignores these layers is vetoed.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need 3 scenarios where the model's predictions fail verifiably.
- Scenario 1: Setter dig bias. A setter makes a dig; model assigns negative/different credit due to bias against setters by design [PAGE 16]. Prediction: setter PG per opportunity systematically understated relative to libero with identical dig outcome; verifiable by comparing setter vs libero dig PG conditioned on identical dig code and location.
- Scenario 2: Additive SoS failure. Player A faces Nebraska (+13.0% SOS) [PAGE 20]; model subtracts average SOS linearly. Prediction: player's adjusted PG will misrank when opponent-specific defensive synergies (Hord blocking + Rodriguez digging) interact non-additively; verifiable by holdout matches against Nebraska vs other teams.
- Scenario 3: DS substitution edge case. 63% teams replace OH with DS [PAGE 23]. Pythagorean MWP jumps 50% -> 52% from 0.2% PWP change [PAGE 23]. Prediction: in matches where DS substitution frequency > 0.1 opportunities/point, model's constant 0.1 assumption fails; actual match win probability sensitivity non-linear; verifiable by tracking substitution counts and actual match outcomes.
- Each with veto condition and prediction.

Make sure no betting terms. "Match win probability" is okay, it's a probability, not a betting line.

Word count: Need >= 1000 total. THINK_TRACE alone >= 400. Let's aim for substantial content in each.

Citations: Use [PAGE N] exactly as page numbers from source. The source text has standalone numbers like "7", "8", etc. I will reference those.

Verbatim quotes: I need to include some exact quotes from the source.
Examples:
- "Dataset: 4,147 matches, 600K+ points, 5M+ contacts, ~ 6,000 players" [PAGE 7]
- "Evaluation Codes: # > + > ! > – > / > =" [PAGE 7]
- "Caution: Additive assumption is not literally true in real life" [PAGE 19]
- "Caution: Dig evaluation codes are biased against setters by design" [PAGE 16]
- "Caution: Blocker/digger assignment is a work in progress" [PAGE 14]
- "Caution: SoS depends on which zone the attacker hits" [PAGE 20]
- "Pythagorean formula for volleyball: p^10 / (p^10 + (1 − p)^10)" [PAGE 23]
- "Example: Point win probability 50% → 50.2%" [PAGE 23]
- "Match win probability 50% → 52%" [PAGE 23]

Let's write.

Structure:

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

I must ensure formal LaTeX equations are present. Use \[ ... \] or \( ... \).

Let's carefully draft THINK_TRACE first.

THINK_TRACE content plan:
- Start with dataset scale and state definition.
- Derive Markov chain recursion for point win probability.
- Show credit assignment via difference in state values.
- Explain Act 2 domain knowledge overlay (attack outcome tree, dig quality decomposition).
- Explain Act 3 mixed model hierarchy and de-biasing.
- Gray-zone audit: list every assumption and where it breaks, citing pages.
- Word count target ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define notation.
- LaTeX for Markov chain, transition kernel, value function.
- LaTeX for mixed effects model (3 levels).
- LaTeX for Pythagorean.
- Units table maybe in text.
- Page citations for each equation source.
- Breakdown regimes explicitly.

RETROCAUSAL_GENEALOGY:
- Fellingham PAAPS JQAS 2022 [PAGE 5], basketball RAPM analogy.
- Gordon volleydork Value Added [PAGE 5].
- Pythagorean exponent 10 [PAGE 23].
- Multi-week traps: non-stationarity of conference strength, early season noise, player development, rotation changes, front/back row setter [PAGE 24], SOS zone dependence [PAGE 20].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under score pressure, hitters revert to preferred zones; blockers stack.
- Counter-trap: offensive coordinator anticipates and runs quick middle or back-row attack.
- Clock: set point pressure, substitution clock (though no game clock, but set score creates "clock" of points remaining), DS substitution strategy [PAGE 23].
- Interaction between model static PG and dynamic adaptation.
- Predictive failure when crisis breaks additivity.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: (X,Y) coordinates collected but not leveraged [PAGE 24]; net height, ball trajectory; attack code alone insufficient.
- Biomechanical layer: blocker/digger assignment WIP [PAGE 14], setter dig bias [PAGE 16], no jump/reaction metrics.
- Environmental layer: indoor, travel, altitude, venue not in model; SoS confounds [PAGE 17-18].
- Veto rule: if cross-layer variable changes state value by > threshold (e.g., digger assignment error), model output vetoed.

RLVR_COUNTERFACTUAL_VETOES:
- 3 scenarios. Each with: scenario description, verifiable condition, veto trigger, prediction.

Let's write it all out, ensuring length.

I need to watch out for the phrase "odds" or "spread" etc. I will not use them.

Let's draft carefully.

Word count estimation:
THINK_TRACE: I'll write ~550 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~350 words.
RETROCAUSAL_GENEALOGY: ~250 words.
RECURSIVE_THEORY_OF_MIND: ~250 words.
CROSS_LAYER_VETO_ADJUDICATION: ~250 words.
RLVR_COUNTERFACTUAL_VETOES: ~300 words.
Total ~1950 words. Good.

Now, writing with citations.

Let's ensure I use exact [PAGE N] markers. The source text has page numbers like 7, 8, 9, etc. I will cite them.

One thing: the user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I must include quotes.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper constructs a three-act causal pipeline for attributing volleyball point outcomes to individual players. Act 1 defines a discrete-time Markov chain over game states. The state at each contact is a tuple (starter, contact_sequence) where starter ∈ {Serving, Receiving} and the sequence appends evaluation codes for all non-terminal contacts. Evaluation codes are ordered # > + > ! > – / > = [PAGE 7]. Terminal states are (S, P) and (R, P) [PAGE 8]. Because the chain is finite and absorbing, the point win probability V(s) for any state s satisfies the Bellman recursion V(s) = Σ_{s′} T(s′|s) V(s′), with V(terminal win) = 1 and V(terminal loss) = 0. The dataset spans 4,147 matches, 600K+ points, 5M+ contacts, and ~6,000 players [PAGE 7], which is sufficient to estimate transition kernels T for common contact sequences but sparse for rare evaluation-code paths.

Act 2 converts state-value differences into individual credit. If contact c transitions state s → s′, the contact’s points gained is ΔPG(c) = V(s′) − V(s). This is a martingale difference: the sum of ΔPG over all contacts in a point telescopes to the final point outcome minus the initial state value. The attack outcome tree [PAGE 13] imposes domain knowledge to split credit between attacker, setter, blocker, and digger when the Markov chain alone cannot observe intended targeting. The worked example shows that a single attack attempt can yield +5% ATT, +1% SET, 0 BLK, and +14% DIG contributions that sum to a non-obvious total [PAGE 14]. Crucially, Player A and Player B can have identical digs-per-opportunity (72%) yet different points gained per opportunity (+3.6% vs +1.2%) because of hidden quality dimensions: perfect dig rate (48% vs 36%) and no-block-touch rate (85% vs 66%) [PAGE 16]. The paper explicitly cautions that dig evaluation codes are biased against setters by design [PAGE 16], which means setter defensive credit is structurally understated.

Act 3 adjusts raw points gained for strength of schedule using nested linear mixed-effects models fitted with lme4 in R [PAGE 17]. The hierarchy progresses from Exp. Points Gained = β_Server + δ_Receiver, to adding team random effects, to adding conference random effects on both server and receiver sides [PAGE 17]. Adjusted points gained is computed as Points Gained − (δ̂_Conf + δ̂_Team + δ̂_Receiver) [PAGE 17], requiring a de-biasing step and generalization to non-server skills [PAGE 17]. The additive structure yields conference SoS estimates in points gained per set, with Big Ten and Pac-12 at +0.23 [PAGE 18]. However, the paper itself flags the exact breakdown regime: “Caution: Additive assumption is not literally true in real life” [PAGE 19], and SoS depends on which zone the attacker hits [PAGE 20]. A player facing Nebraska’s Kaitlyn Hord blocking and Lexi Rodriguez digging experiences +13.0% SOS, a value that a linear conference average cannot capture [PAGE 20].

Gray-zone audit: (1) The Markov chain ignores (X, Y) coordinates despite their collection [PAGE 24], so spatial attack efficiency is collapsed into discrete attack codes; (2) blocker/digger assignment is a work in progress [PAGE 14], creating misattribution at the net; (3) the additive mixed model cannot represent player–opponent interaction effects, which are decisive in crisis rotations; (4) front-row vs back-row setter status is unmodeled [PAGE 24]; and (5) the Pythagorean conversion from point win probability to match win probability uses exponent 10 [PAGE 23], an empirical constant that may not hold across all competitive tiers. Each of these constitutes a verifiable failure mode rather than a modeling convenience.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the state space be \(\mathcal{S} = \{(g, \mathbf{c}) : g \in \{\text{Serv},\text{Rec}\}, \mathbf{c} \in \mathcal{C}^*\}\) where \(\mathcal{C}\) is the set of evaluation codes \(\{ \#, +, !, –, /, = \}\) ordered \(\# > + > ! > – > / > =\) [PAGE 7]. Terminal absorbing states are \((S,P)\) and \((R,P)\) [PAGE 8]. The transition kernel is \(T(s' \mid s, e) = \Pr(s_{t+1} = s' \mid s_t = s, e_t = e)\), where \(e\) is the contact evaluation. Point win probability \(V: \mathcal{S} \to [0,1]\) solves the dynamic programming equation
\[
V(s) = \sum_{s' \in \mathcal{S}} T(s' \mid s) V(s'), \qquad V(\text{win}) = 1,\; V(\text{loss}) = 0.
\]
For a contact \(c_t\) moving \(s_{t-1} \to s_t\), the individual contribution is
\[
\Delta \mathrm{PG}(c_t) = V(s_t) - V(s_{t-1}),
\]
measured in points gained (dimensionless probability units). By telescoping, \(\sum_t \Delta \mathrm{PG}(c_t) = V(s_{\text{terminal}}) - V(s_0)\), so credits sum exactly to the point outcome relative to the initial serve/receive state.

The Act 3 strength-of-schedule operator is a three-level linear mixed-effects model. Let \(y_{ijk}\) be expected points gained for server/receiver \(i\) in team \(j\) in conference \(k\). The best specification cited is
\[
y_{ijk} = (\beta^{\mathrm{Conf}}_k + \beta^{\mathrm{Team}}_j + \beta^{\mathrm{Server}}_i) + (\delta^{\mathrm{Conf}}_k + \delta^{\mathrm{Team}}_j + \delta^{\mathrm{Receiver}}_i) + \varepsilon_{ijk},
\]
fit via \texttt{lme4} in R [PAGE 17]. Adjusted points gained for a server is
\[
\widehat{\mathrm{AdjPG}}_i = \mathrm{PG}_i - (\hat{\delta}^{\mathrm{Conf}}_{k(i)} + \hat{\delta}^{\mathrm{Team}}_{j(i)} + \hat{\delta}^{\mathrm{Receiver}}_{i}),
\]
where all \(\delta\) terms are in points gained per set [PAGE 17, 18]. The operator requires de-biasing because server and receiver effects are not orthogonal across opponents [PAGE 17].

The Pythagorean match-win operator maps point win probability \(p \in [0,1]\) to match win probability
\[
\mathrm{MWP}(p) = \frac{p^{10}}{p^{10} + (1-p)^{10}},
\]
with exponent 10 specified for volleyball [PAGE 23]. A perturbation \(\Delta p = 0.002\) (50% → 50.2% point win probability) yields \(\Delta \mathrm{MWP} \approx 0.02\) (50% → 52%) under this operator [PAGE 23].

Breakdown regimes and units:
- Additive mixed model: singular when opponent-specific defensive synergies (e.g., Hord blocking + Rodriguez digging) generate non-additive SOS of +13.0% that a conference random effect cannot represent [PAGE 19, 20].
- Dig credit: breaks down for setter digs because evaluation codes are biased against setters by design [PAGE 16].
- Blocker/digger assignment: work in progress; attribution at the net is unverified [PAGE 14, 24].
- Spatial information: (X, Y) contact coordinates are collected but not leveraged in the current estimator [PAGE 24].
- Setter location: front-row vs back-row setter status is unmodeled, biasing set-value transitions [PAGE 24].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The estimator’s intellectual lineage runs from basketball adjusted plus-minus into volleyball through two explicit antecedents. Fellingham’s PAAPS (JQAS 2022) is described as “similar to regularized adjusted plus-minus in basketball” [PAGE 5], and Gordon’s Value Added above Expectation from volleydork.com is called “very similar to the present work” [PAGE 5]. This transplants a cross-sport causal tradition—retroactively assigning outcome value to possession-level actions—into a rally-scoring context where the possession is a volley and the terminal reward is a point.

The Markov chain component descends from expected-points frameworks in football and expected-goals models in soccer, but adapts them to volleyball’s discrete contact grammar: serve \(\to\) reception \(\to\) set \(\to\) attack \(\to\) dig, with evaluation codes appended at every non-terminal node [PAGE 8]. Unlike continuous-time sports, volleyball’s state space is countable and the contact sequence itself is part of the state, making the chain exactly solvable via absorbing Markov fundamentals rather than requiring simulation.

The Pythagorean operator with exponent 10 [PAGE 23] traces to Bill James’s baseball Pythagorean expectation, re-calibrated to volleyball’s higher scoring frequency and lower variance per point. The exponent 10 implies that small point-win advantages are strongly amplified into match-win advantages, a property shared with basketball’s Pythagorean exponent but distinct from baseball’s exponent near 2.

Multi-week traps arise because the model treats strength of schedule as static conference random effects [PAGE 17] while volleyball rosters rotate week-to-week. A player’s early-season SOS is computed against opponents whose defensive rotations, injuries, and setter locations change by week [PAGE 24]. Using preseason conference strength to adjust late-season player values induces retrospective bias: a mid-season coaching change that switches a team from 6-2 to 5-1 serve-receive formation invalidates the conference-level \(\delta^{\mathrm{Conf}}\) estimated from earlier matches. Moreover, the “one elite player from the Summit League still stands out” after adjustment [PAGE 19] signals that small-conference variance is not fully shrunk by the mixed model; rare high-SOS matches against power-conference opponents create leverage points that can dominate a season’s adjusted points gained.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of a team under score pressure to revert to its highest-frequency, lowest-variance habit rather than the statistically optimal play. In the paper’s framework, every contact carries a points-gained value derived from average transition probabilities [PAGE 9], but those averages assume stationary decision-making. In a tight set, an outside hitter whose crisis habit is to attack zone 4 regardless of block configuration will generate a different state-transition distribution than the model’s empirical average. The attacker’s recursive theory of mind must anticipate that the opposing middle blocker, recognizing this habit regression, will stack the outside block—a counter-trap that converts the hitter’s preferred attack into a lower-value state (e.g., from +6% total expected points gained toward negative block territory [PAGE 14]).

The clock layer in volleyball is not a game clock but a point-score clock: as a set approaches 25, the marginal value of a single point rises nonlinearly under the Pythagorean operator [PAGE 23]. The defensive specialist substitution strategy operates exactly at this interface [PAGE 23]. Because 63% of teams replace at least one outside hitter with a defensive specialist in the back row [PAGE 23], the coach is executing a pre-committed counter-trap to the opponent’s crisis habit of swinging at the front-row outside hitter. Reception points gained per opportunity separate All-Around OH (+1.1%), Front-Only OH (−1.4%), and Defensive Specialist (+0.9%) [PAGE 23]. With 0.1 substitutable opportunities per point, a 0.2% point-win improvement is projected to lift match win probability from 50% to 52% [PAGE 23].

The model’s failure mode occurs when crisis habit regression breaks the additive player-effect assumption [PAGE 19]. If a team’s crisis habit is to over-rely on its best outside hitter, that player’s points gained per attack will be depressed by doubled blocks, yet the mixed-effects model attributes part of that depression to team or conference random effects rather than to the interaction between the hitter’s habit and the opponent’s adaptive blocking. The recursive theory of mind required for correct prediction must model second-order beliefs: “I know that you know that I will hit outside in crisis,” which the current state-transition kernel cannot represent because the state excludes the score, set number, and psychological pressure variable.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: The dataset records (X, Y) coordinates for every contact [PAGE 7], yet the estimator explicitly lists “Leverage (X, Y) coordinate information” as a next step rather than a current input [PAGE 24]. Because attack success in volleyball is physically determined by contact location relative to the net and blockers, collapsing spatial data into discrete attack codes (e.g., X6, V5) [PAGE 7] discards the continuous physical variable that determines block-touch probability. Any player ranking derived without (X, Y) is vetoed when comparing attackers who hit the same zone with different trajectories.

Biomechanical layer veto: Blocker and digger assignment is a work in progress [PAGE 14], and dig evaluation codes are biased against setters by design [PAGE 16]. Without biomechanical tracking of jump height, reach, and reaction time, the model cannot distinguish a dig made against a hard-driven attack from a dig made against a free ball. The paper’s own example shows two players with identical 72% digs per opportunity but divergent points gained (+3.6% vs +1.2%) driven by perfect dig rate and no-block-touch rate [PAGE 16]; this proves that the observable dig rate is insufficient for credit assignment. A ranking that does not separately identify blocker vs. digger at the net is vetoed.

Environmental layer veto: Volleyball is indoors, but strength of schedule confounds venue, travel, altitude, and arena-specific court speed. The mixed model adjusts for conference and team [PACE 17] but not for match-specific environmental state. Because SoS depends on which zone the attacker hits [PAGE 20], an attacker who faces a team with elite zone-6 defense will have suppressed points gained that the conference-level random effect cannot isolate.

Veto adjudication rule: A model output is vetoed if any cross-layer variable shifts the state-value difference by more than the standard error of the contact-level points-gained estimate. Given that (X, Y) is unused [PAGE 24], blocker/digger assignment is unverified [PACE 14], and setter digs are biased [PAGE 16], the veto condition is active for all defensive and setting contributions; only pure attack outcomes from non-blocked swings are exempt.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Setter dig attribution veto): Condition: Compare a setter dig and a libero dig with identical evaluation code and identical (X, Y) origin in the same match. Verifiable prediction: The model assigns systematically lower points gained to the setter because “dig evaluation codes are biased against setters by design” [PAGE 16]. Veto trigger: If the setter’s dig receives negative or near-zero credit while the libero’s identical dig receives positive credit, the credit-assignment operator is invalidated for all setter defensive actions.

Scenario 2 (Non-additive strength-of-schedule veto): Condition: Player A faces Nebraska with Kaitlyn Hord blocking and Lexi Rodriguez digging, a match-specific SOS of +13.0% points gained per attack [PAGE 20]. Verifiable prediction: The linear mixed model subtracts the conference-average receiver effect rather than the Nebraska-specific defensive synergy, so Player A’s adjusted points gained will be overstated relative to a holdout model that includes player-by-opponent random interactions. Veto trigger: In out-of-sample matches against Nebraska, the model’s rank ordering of Player A vs. peers will invert relative to the interaction-adjusted truth.

Scenario 3 (Defensive specialist substitution nonlinearity veto): Condition: The Pythagorean operator projects that a 0.2% point-win gain (from 50% to 50.2%) yields a 2% match-win gain (50% to 52%) assuming 0.1 substitutable opportunities per point [PACE 23]. Verifiable prediction: In matches where the actual DS substitution rate exceeds 0.1 opportunities per point (which occurs for 63% of teams replacing at least one OH [PACE 23]), the relationship between reception points gained per opportunity and match win probability will be superlinear, not the linear extrapolation implied by the Pythagorean exponent. Veto trigger: If teams with high DS usage systematically outperform the model’s match-win projections by more than the binomial standard error of the point-win-to-match-win transform, the constant-substitution assumption is falsified.
</RLVR_COUNTERFACTUAL_VETOES>