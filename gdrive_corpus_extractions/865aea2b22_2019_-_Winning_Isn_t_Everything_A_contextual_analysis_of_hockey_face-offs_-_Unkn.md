---
source: "2019 - Winning Isn t Everything A contextual analysis of hockey face-offs - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3575
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source text (a hockey face-offs research paper). I must follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

I need to analyze the paper thoroughly, create formal mathematical formulations based on the paper's content (EE model, WDBE model), cite pages exactly, and produce deep multi-hop reasoning.

Let me structure this carefully.

Key facts from paper:
- 71,147 face-offs from 2017-18 NHL regular season [PAGE 2]
- Face-off win percentage vs goals correlation -1.8%, vs wins 0.03% [PAGE 1]
- ~75 face-off wins for +1 goal differential [PAGE 1]
- 44.5% of face-off wins clean [PAGE 4]
- Clean wins 48.0% led to shot event or zone exit/entry vs 44.1% non-clean [PAGE 4]
- Offensive zone clean wins led to shot event 38.6% vs 30.3% non-clean [PAGE 4]
- Backward-inside clean wins led to shot events 43.6% vs 32.1% non-clean [PAGE 4]
- Clean wins directed to teammate's stick 25% faster [PAGE 4]
- 35.4% defensive zone wins clean vs 50.4% offensive zone wins clean [PAGE 5]
- Direction binned into 45° sectors [PAGE 3]
- Center ice excluded (12,285 = 17.3%) [PAGE 3]
- 9 possible circles, 8 excluding center ice [PAGE 3, 7]
- Slot shooting percentage 16.6% vs 9.0% all locations [PAGE 3]
- Strong side deployments 61.0% [PAGE 11]
- Centers on strong sides won 11.1% more often [PAGE 11]
- Roughly 65% of strong side face-offs won backward or backward-outside combined [PAGE 11]
- Weak side less than 50% in those two areas [PAGE 11]
- Offensive zone weak side backward-inside wins: 33.7% shot event vs 26.7% strong side [PAGE 12]
- Attacking neutral zone weak side backward-inside wins led to 7% more zone entries [PAGE 12]
- EE model equation (1): league-wide events average per face-off win direction * number of wins in direction / total face-offs [PAGE 3]
- WDBE model equation (2): WDBE = sum[P(WinDirection_{j i s c}) * E(Event_{j i s c})] [PAGE 4]
- Correlation EE with CF% 6.6%, XGD 7.3% [PAGE 10]
- Clean % among wins correlation with overall win % 2.0% [PAGE 7]
- Overall face-off win % correlation with XGD -7% [PAGE 7]
- Clean % correlation with XGD 23.8% [PAGE 7]
- WDBE correlations: offensive zone 13.1% with XGD, defensive 10.5%, neutral attacking 7.2%, neutral defending 11.1% [PAGE 13]
- Early versions zone+directions only: 8.0% OZ, 6.0% DZ correlation with XGD [PAGE 13]

Now I need to write formal LaTeX equations, not toy ratios. I should formalize:
- The EE model properly.
- The WDBE model properly.
- Define probability spaces, sigma-algebras, random variables for face-off outcomes, directions, zones, deployment, cleanliness.
- Exact singularity/breakdown regimes: center-ice exclusion (no inside/outside), n_i = 0 directions (division by zero in empirical probability), human drop randomness (Page 15), possession loss immediate after win (Page 15), predictability/adaptation within game (Page 15).

I must avoid betting lines entirely. No mention of odds, spreads, etc.

Word count: >= 1000 words total across sections. THINK_TRACE alone >= 400 words.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. I need to derive from the paper why win percentage is insufficient, trace the causal chain from face-off win -> direction -> cleanliness -> subsequent event -> expected goals. Discuss gray zones: possession credit without control, human drop randomness, opponent adaptation/predictability, team strategy confounding (Calgary Flames bottom 4 clean%), small sample for some players/directions, center-ice singularity (17.3% excluded), zero-count directions causing undefined conditional probabilities, weak-side mechanical constraints.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Define:
- Sample space Ω of face-off events.
- Random variables: Z ∈ {OZ, DZ, NZ_N, NZ_S}, D ∈ {F, B, I, O, FI, FO, BI, BO} (45° sectors), C ∈ {clean, non-clean}, S ∈ {strong, weak}, W ∈ {win, loss}, E ∈ {event, no event} where event = shot on net/slot or zone exit/entry.
- P(W | z, s, c) etc.
- EE metric: \widehat{EE}_p = \sum_{d \in \mathcal{D}} \frac{n_{p,d}}{N_p} \bar{\lambda}_d where \bar{\lambda}_d = \frac{1}{M_d} \sum_{m=1}^{M_d} \mathbb{1}\{e_m=1\}, league average event rate per win direction d. Units: events per face-off win (dimensionless probability rate). Cite [PAGE 3].
- WDBE: \mathrm{WDBE}_p = \sum_{j,i,s,c} P(W_i=1 | D_i=d, Z_j=z, Dep=s, Type=c) \cdot \mathbb{E}[E_{j,i,s,c}] ... need to match paper equation (2) but formalize. Paper: WDBE = ∑[P(WinDirection_{j i s c}) * E(Event_{j i s c})] (2). I'll expand: \mathrm{WDBE}_p = \sum_{j \in \mathcal{Z}} \sum_{i \in \mathcal{D}} \sum_{s \in \{st,wk\}} \sum_{c \in \{cl,nc\}} \hat{p}_{p}(w=1 \mid d=i, z=j, dep=s, type=c) \cdot \hat{\mu}_{j,i,s,c} where \hat{\mu} is league-average conditional event count/probability. Units: expected events per face-off (dimensionless). Cite [PAGE 4].
- Breakdown regimes: n_{p,d}=0 => \hat{p} undefined (0/0), require smoothing or exclusion; center-ice z=CI excluded from direction/handedness analysis because inside/outside undefined [PAGE 3]; immediate possession loss creates right-censoring of event sequence [PAGE 15]; referee drop stochasticity adds measurement noise to D [PAGE 15].

<RETROCAUSAL_GENEALOGY>: Historical lineage. Cite references within paper: Liardi & Carron (2011) home advantage [PAGE 16], Sporer (2017) SI [PAGE 16], Schuckers et al. (2017) Statistical Sports Consulting [PAGE 16], Schulte et al. (2017) Apples-to-Apples clustering [PAGE 16], Dellow (2018) strong/weak side [PAGE 16]. Multi-week traps: player predictability across repeated matchups within a game [PAGE 15], team strategic deployment shifts over season (San Jose strong-side usage) [PAGE 13], acquisition of Elias Lindholm by Calgary [PAGE 6], Kopitar example Oct 28 2017 early season road trip [PAGE 1]. The "trap" is relying on static win percentage across a season while opponents adapt directionally week-to-week.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Centers regress to habitual directions under pressure (Kopitar weak side, backhand backward-inside). Opponent centers anticipate and counter-trap (mix up techniques to avoid patterns [PAGE 15]). Clock: 0.9 seconds left in OT, high-pressure reduces time for clean execution, favors pre-planned directional wins over reactive battles. Clean wins 25% faster [PAGE 4]. Crisis habit: defending centers in DZ limit clean wins against them (only 35.4% clean vs 50.4% OZ) [PAGE 5], creating a recursive adaptation where offensive centers must vary direction to avoid defensive tie-ups.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical: stick collision, puck drop randomness, skate ricochet [PAGE 15]. This vetoes deterministic direction models; must treat D as stochastic conditional on biomechanics.
- Biomechanical: strong side = lower hand strength + full blade natural for backward/backward-outside; weak side forces backward-inside via backhand even to middle [PAGE 11-12]. 65% vs <50% [PAGE 11]. Veto: weak-side deployment imposes a hard biomechanical constraint on achievable direction distribution.
- Weather: indoor ice, temperature/humidity affect puck bounce and skate friction; not explicitly in paper but puck bounce strangely due to shape [PAGE 15]. Since NHL is indoor climate-controlled, weather veto is low magnitude but non-zero for puck-ice interaction. Adjudication: model must include random drop term \epsilon_{drop} \sim \mathcal{N}(0, \sigma_{drop}) affecting D; cannot condition purely on player intent.
- Also zone physical constraints: defensive zone inside wins allow protection behind net, additional time for breakout [PAGE 9].

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? I need 3 scenarios where the model's prediction would be vetoed/counterfactual tested.
1. Zero-count direction-cell veto: If a center has n_{p,d}=0 for backward-outside in OZ, EE cannot assign league average without ecological fallacy. Veto: do not impute; predict NA or use hierarchical Bayesian shrinkage. Prediction: players with sparse directional counts will show spurious EE extremes; after shrinkage, correlation with XGD drops from 7.3% to near null for low-N subset.
2. Immediate possession-loss veto: If face-off won forward into slot but opponent intercepts and generates counter-attack, paper credits win and assigns no event [PAGE 15]. Veto: the reward signal E=0 despite high-value direction; counterfactual: re-label as turnover event with negative expected goals. Prediction: models ignoring this overvalue forward/lateral wins by factor of ~4x (since forward <10% event vs backward >40% [PAGE 9]).
3. Strong-side deployment endogeneity veto: San Jose deploys Pavelski/Kane heavily on strong side; WDBE inflated by team strategy not individual skill [PAGE 13]. Veto: counterfactual randomize deployment 50/50; predicted WDBE for Pavelski drops by at least the strong-side usage differential (89.3% strong side). If correlation with XGD falls below 5% under randomized deployment, individual effect is confounded.

Need to ensure no betting lines. Words like "odds" appear in source? I won't mention them. Avoid "probability" in betting sense? Probability is fine as math.

Now word count. Need >= 1000 total. Let's aim for:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~350 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~250 words
Total ~1850. Good.

Citations: Use [PAGE N] exactly. Verbatim quotes where appropriate.

Let's write carefully. No markdown tables maybe fine, but XML sections. Must not break XML. Use LaTeX inside.

Check for toy equations: No Force/Fatigue. All equations are from paper or formalized probability. Good.

Check for betting lines: None.

Now write final answer.

Need to ensure THINK_TRACE >= 400 words. I'll write richly.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s core inference is that face-off win percentage is a necessary but insufficient statistic: the 2017-18 NHL regular season shows only a -1.8% correlation with goals and 0.03% with wins [PAGE 1], and approximately 75 face-off wins are required to generate a +1 goal differential [PAGE 1]. The multi-hop causal chain I derive is therefore: (face-off win) → (clean vs. non-clean execution) → (45° sector direction) → (zone context: OZ/DZ/NZ-N/NZ-S) → (deployment: strong vs. weak side) → (subsequent event: shot on net, slot attempt, zone exit/entry) → (expected goals differential, XGD). Each hop introduces information that is discarded by a scalar win percentage.

A critical gray zone is the definition of possession. The paper credits the team that earns possession first after puck drop, yet notes that a team can win immediate possession and lose control just as quickly, with no subsequent event recorded and no penalty assigned to the winner [PAGE 15]. This creates a right-censoring problem in the event stream: the observed outcome E ∈ {0,1} is a noisy proxy for true possession value. A second gray zone is human drop stochasticity: the linesman’s drop may favor one side, bounce off the puck shape, or ricochet off skates [PAGE 15], meaning direction D is not purely an expression of center intent. At full-season scale (71,147 face-offs [PAGE 2]) these noise terms average out, but at the player-season level they generate spurious extremes, especially for players near the 200 face-off minimum [PAGE 6].

A third gray zone is strategic endogeneity. Deployment is not random: strong-side usage was 61.0% in 2017-18 [PAGE 11], and teams such as San Jose deliberately deployed Pavelski and Kane on their strong sides [PAGE 13]. The WDBE metric therefore conflates individual targeting skill with deployment opportunity. A fourth gray zone is within-game adaptation: repeated center vs. center matchups induce predictability, causing players to mix techniques and target different directions as the game wears on [PAGE 15], which violates the stationarity assumption implicit in season-long league-average weights. Finally, center-ice draws (12,285 events, 17.3% of the sample [PAGE 3]) are excluded from direction and handedness analysis because inside/outside and strong/weak side are undefined there, creating a structural singularity in the feature space that any production model must handle with an explicit exclusion indicator rather than imputation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let Ω be the probability space of face-off events in the 2017-18 NHL regular season, |Ω| = 71,147 [PAGE 2]. Define random variables: Z ∈ {OZ, DZ, NZ_N, NZ_S, CI} for zone section; D ∈ {F, B, I, O, FI, FO, BI, BO} for 45° sector direction (forward, backward, inside, outside, and combinations), where CI draws are excluded from direction analysis because inside/outside and strong/weak side are not defined [PAGE 3]; C ∈ {cl, nc} for clean vs. non-clean win; S ∈ {st, wk} for strong vs. weak side deployment; W ∈ {1,0} for win/loss; and E ∈ {0,1} for subsequent shot event or zone exit/entry.

The Expected Events (EE) model from equation (1) [PAGE 3] is formalized as:

\[
\widehat{\mathrm{EE}}_p = \sum_{d \in \mathcal{D}} \frac{n_{p,d}}{N_p} \cdot \bar{\lambda}_d,
\quad
\bar{\lambda}_d = \frac{1}{M_d} \sum_{m=1}^{M_d} \mathbb{1}\{E_m = 1 \mid D_m = d, W_m = 1\},
\]

where n_{p,d} is player p’s clean or total wins in direction d, N_p is p’s total face-offs, and \bar{\lambda}_d is the league-wide event rate per win in direction d. Units: expected events per face-off win (dimensionless probability rate). This isolates individual targeting from teammate quality [PAGE 3]. Breakdown regime: if n_{p,d} = 0 for any d, the empirical conditional is undefined (0/0); the model requires hierarchical shrinkage or cell exclusion rather than plug-in substitution.

The Win and Direction-Based Events Over Expectation model (WDBE, equation 2) [PAGE 4] is:

\[
\mathrm{WDBE}_p = \sum_{j \in \mathcal{Z}} \sum_{i \in \mathcal{D}} \sum_{s \in \{st,wk\}} \sum_{c \in \{cl,nc\}} 
\hat{P}_p(W=1 \mid D=i, Z=j, S=s, C=c) \cdot \hat{\mu}_{j,i,s,c},
\]

where \hat{\mu}_{j,i,s,c} is the league-average conditional event expectation for that zone-direction-deployment-win-type cell, and the sum runs over the four zone sections excluding CI [PAGE 3]. Units: expected events per face-off (dimensionless). Correlation results: EE vs. CF% = 6.6%, EE vs. XGD = 7.3% [PAGE 10]; clean-win percentage vs. overall win percentage = 2.0% [PAGE 7]; overall win % vs. XGD = -7%, while clean-win % vs. XGD = 23.8% [PAGE 7]. Adjusted WDBE vs. XGD: OZ 13.1%, DZ 10.5%, NZ attacking 7.2%, NZ defending 11.1% [PAGE 13].

Singularity/breakdown regimes: (i) center-ice CI is structurally excluded from D and S analysis [PAGE 3]; (ii) immediate post-win possession loss produces E = 0 despite a credited win, right-censoring the event sequence [PAGE 15]; (iii) linesman drop stochasticity adds irreducible measurement error to D [PAGE 15]; (iv) within-game opponent adaptation induces non-stationarity in P(D | p, opponent, time) [PAGE 15].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a lineage of NHL face-off research that progressively de-scalarizes the draw. Liardi and Carron (2011) examined home advantage in face-offs [PAGE 16]; Sporer (2017) questioned the link between face-off wins and long-term success [PAGE 16]; Schuckers, Pasquali, and Curro (2017) provided a statistical face-off analysis [PAGE 16]; and Schulte et al. (2017) introduced location-based clustering and scoring impact for player ranking [PAGE 16]. The present paper extends this by replacing win percentage with spatio-temporal event valuation, a shift necessitated by the near-zero correlation of raw wins with outcomes [PAGE 1].

Multi-week strategic traps are visible in the deployment arc. Strong-side usage was 61.0% league-wide in 2017-18 [PAGE 11], reflecting a season-long recognition that centers win 11.1% more often on their strong side [PAGE 11]. Team-level strategy then individualizes the metric: San Jose’s heavy strong-side deployment of Pavelski and Kane inflated their WDBE relative to deployment-neutral skill [PAGE 13]. Personnel moves also propagate: Calgary acquired Elias Lindholm, who ranked top 20 in clean-win percentage and top 4 in win percentage among clean draws [PAGE 6], suggesting teams now optimize for clean targeting rather than raw win rate.

The Kopitar case [PAGE 1] illustrates the temporal trap: entering the October 28, 2017 overtime draw, Kopitar was at 34.8% for the night (8 of 23), yet won clean backward-inside to Toffoli for the game-winner. A model keyed on season-to-date win percentage would have benched him; a model keyed on clean directional targeting would have played him. This shows that short-term slumps in win percentage are poor predictors of contextual face-off value, creating a multi-week trap for coaches who over-rely on rolling win percentages.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression operates at two levels. For the offensive center, pressure collapses the decision space to pre-mapped directions: Kopitar on his weak side in the offensive zone used his backhand to direct the puck backward-inside to the slot [PAGE 1], and weak-side backward-inside wins in the OZ produced shot events 33.7% of the time versus 26.7% on the strong side [PAGE 12]. For the defending center, crisis induces risk aversion: only 35.4% of defensive-zone wins were clean versus 50.4% in the offensive zone, because defenders prioritize not losing cleanly over winning cleanly [PAGE 5]. This creates a recursive theory of mind: the offensive center expects the defender to tie up, so he varies direction to break the tie-up; the defender anticipates the variation and over-commits to the outside, reopening the inside lane.

The counter-trap is explicit in the paper’s discussion of predictability: repeated head-to-head matchups within a game cause players to mix techniques to avoid giving opponents a pattern [PAGE 15]. A center who always pulls backward-outside on his strong side becomes exploitable; the optimal policy is a mixed strategy over {B, BO, BI, I, O, F} weighted by zone and deployment, not a deterministic habit. The clock modulates this recursion: with 0.9 seconds remaining in overtime [PAGE 1], there is no time for a second puck battle; the value shifts entirely to clean, pre-targeted wins. Clean wins reach a teammate’s stick 25% faster on average [PAGE 4], and in the OZ, clean backward-inside wins led to shot events 43.6% of the time versus 32.1% non-clean [PAGE 4]. Therefore the clock compresses the recursion depth: under time pressure, first-order habit (clean backward-inside) dominates second-order deception, because the defender cannot recover from a clean, fast delivery before the shot is taken.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: all face-off wins result from one or two sticks colliding with a puck dropped by a human, with possible lateral bias, strange bounces from puck shape, and ricochets off centers’ or the linesman’s skates [PAGE 15]. This imposes a hard stochastic veto on any deterministic direction model: D is not a pure control variable but D = f(player intent, drop error \epsilon_{drop}, skate interference). Any production system must include an irreducible noise term \epsilon_{drop} \sim (0, \sigma_{drop}) and treat directional targeting as probabilistic rather than exact.

Biomechanical layer: strong-side deployment lets centers use lower-hand strength and the full blade naturally for backward and backward-outside propulsion; roughly 65% of strong-side wins are in these two directions combined, versus less than 50% weak-side [PAGE 11]. Weak-side players instead favor backward-inside even when that sends the puck toward the middle of the ice [PAGE 11]. This is a hard biomechanical constraint: P(D = BO | S = wk) is mechanically suppressed relative to P(D = BO | S = st), and any model that ignores S will misattribute weak-side directional limitations to lack of skill. The Kopitar weak-side backhand backward-inside winner [PAGE 1, PAGE 12] is an exception that proves the constraint: it succeeded precisely because it overcame the weak-side mechanical bias at high event value.

Weather layer: NHL games are indoors and climate-controlled, so exogenous weather is negligible. However, puck-ice interaction and skate friction remain physical variables that affect bounce and recovery time [PAGE 15]. The veto here is minor but non-zero: ice temperature variance alters the distribution of puck travel after drop, slightly shifting the empirical direction kernels. Adjudication: condition all directional probabilities on rink and session identifiers where available; otherwise absorb ice variance into \epsilon_{drop}.

Zone-physical layer: in the defensive zone, backward-inside wins allow defensemen to recover behind the net, protecting themselves and gaining time for a less rushed breakout pass [PAGE 9]. This physical shielding means the same direction (BI) has different event values in OZ versus DZ, which the WDBE zone-conditioning captures [PAGE 13]. The veto is therefore enforced: a direction-only model without zone context is physically invalid because the same puck vector leads to different outcomes depending on the geometry of the net and defensive support.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Zero-count directional cell. Player p has n_{p,d} = 0 for backward-outside (BO) in the offensive zone, so \hat{P}(W=1 | D=BO, Z=OZ) is undefined. Veto: do not impute the league mean; flag the cell as structurally sparse and apply hierarchical shrinkage or exclude from EE. Counterfactual prediction: players with sparse directional counts will exhibit spurious EE extremes in the raw table; after Bayesian shrinkage, their correlation with XGD will fall from the reported 7.3% [PAGE 10] to near null in the low-N subset, confirming that the raw metric overfits empty cells.

Scenario 2 — Immediate possession loss after high-value direction. A center wins the draw forward into the slot but the opponent intercepts and transitions to a counter-attack; the paper still credits a face-off win and records E = 0 with no negative penalty [PAGE 15]. Veto: re-label the outcome as a turnover event with negative expected-goals value rather than a neutral non-event. Counterfactual prediction: a model that assigns zero value to forward/lateral wins overvalues them by roughly 4× relative to backward wins (forward events < 10% versus backward > 40% [PAGE 9]); after the veto, the estimated marginal value of forward-directed wins becomes negative, overturning the naive direction ranking.

Scenario 3 — Deployment endogeneity. San Jose deploys Pavelski and Kane heavily on their strong sides (Pavelski 89.3% strong-side [PAGE 13]), inflating their WDBE through team strategy rather than individual targeting. Veto: run a counterfactual with deployment randomized 50/50 across strong and weak sides. Counterfactual prediction: Pavelski’s WDBE drops by at least the strong-side usage premium (roughly the 11.1% win-rate gap [PAGE 11] propagated through directional event weights), and the WDBE–XGD correlation (13.1% in OZ [PAGE 13]) falls below 5%. If the correlation remains high under randomized deployment, the effect is individual; if it collapses, the original signal was confounded by team deployment strategy.
</RLVR_COUNTERFACTUAL_VETOES>