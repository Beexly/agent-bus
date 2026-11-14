---
source: "2023 - Evaluation of Team Defense Positioning by Computing Counterfactuals Using StatsBomb 360 Data - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2023"
pages: 15
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3649
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about football (soccer) defensive positioning using StatsBomb 360 data. I need to follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Let me analyze the source text carefully.

Key details from the paper:
- Authors: Rikuhei Umemoto and Keisuke Fujii, Nagoya University
- Dataset: 290 EPL games 2021-22 and 290 EPL games 2022-23 from StatsBomb
- 10 teams with full data, 12 teams with 20 games each
- Used 180 game data (combinations of 10 teams)
- Event data and 360 data (freeze frames)
- Event types listed: ball recovery, block, carry, clearance, corner, corner shot, cross, dispossessed, dribble, foul, free kick, free kick shot, goal kick, ground pass, high pass, interception, keeper collect, keeper claim, keeper punch, keeper save, low pass, miscontrol, penalty shot, shield, shot, tackle, throw-in
- OBSO (Off-Ball Scoring Opportunity) by Spearman [6]
- EF-OBSO: Event and Freeze frame based OBSO
- PPCF: Potential Pitch Control Field [21]
- DRSO: Defense Response to Scoring Opportunity
- Verification conditions 1-5 for player speeds
- Condition 5: all other players' speeds 5.0 m/s towards goal, had smallest RMSE for all attackers and scorers
- Condition 2 had smallest RMSE for non-scorers
- DRSO algorithm: 3 defenders closest to max EF-OBSO point, counterfactual positions at grid vertices
- Diff_opt and Diff_obs metrics
- Results: Everton best average, Leeds worst; Man City lowest concedes but not high DRSO
- Season comparisons: Arsenal, Leeds, Man Utd improved; Brentford, Chelsea, Everton, Liverpool, Man City worsened
- Limitations: incomplete data, grid vertices may not be reachable, need better parameter verification

Word count requirement: >= 1000 words across sections. THINK_TRACE needs >= 400 words.

Let me structure the response:

1. THINK_TRACE: Deep multi-hop derivation & gray-zone audit. I need to trace the logical dependencies:
   - OBSO depends on PPCF, which depends on reach probabilities and control times
   - EF-OBSO modifies OBSO for incomplete data by restricting to attacking third
   - Assumptions: player speeds, movement directions toward goal, offside line
   - Verification: RMSE against actual goals (0/1)
   - DRSO: counterfactual grid search for 3 closest defenders
   - Gray zones: incomplete freeze frames, missing player IDs, velocity estimation, grid vertex reachability, possession-rate confounding (Everton low possession vs Man City high possession), keeper save percentage confounding
   - Breakdown regimes: when event not in attacking third, when offside, when freeze frame missing key players

2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from paper, units, page citations.
   - Equation 1: OBSO formula (from image text, described as product of probabilities)
   - Equation 2: PPCF differential equation
   - Equation 3: reach probability
   - Equation 4: alternative for high passes etc.
   - Equation 5: RMSE formula
   - Units: m/s for speeds, grid 32x50 divisions
   - Page citations: [PAGE 3], [PAGE 7], [PAGE 8], [PAGE 9], [PAGE 10], [PAGE 11], etc.

3. RETROCAUSAL_GENEALOGY: Historical lineage from Spearman 2018 OBSO, PPCF 2017, Decroos 2019, etc. Multi-week traps: season-by-season comparison confounded by keeper saves, tactical changes, relegation (Leeds), possession rates.

4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression (teams reverting to defensive shapes under pressure), counter-trap (DRSO suggesting optimal positioning but opponent adapts), clock (match time, event duration, seasons).

5. CROSS_LAYER_VETO_ADJUDICATION: Physical veto (player cannot reach grid vertex in time), biomechanical (speed assumptions 0-5 m/s, keeper 2 m/s), weather (not in paper but pitch conditions affect ball velocity), incomplete data veto (missing players in freeze frame).

6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions.
   - Veto 1: Freeze frame missing defender coordinates -> DRSO cannot compute optimal position for that defender. Prediction: DRSO undefined for events with <N visible defenders.
   - Veto 2: Offside position -> OBSO = 0 by definition, DRSO counterfactual meaningless for offside attackers. Prediction: DRSO evaluation skipped for offside events.
   - Veto 3: Grid vertex outside physically reachable range given player speed and event duration -> counterfactual positioning is infeasible. Prediction: DRSO optimal position biased toward grid vertices nearest current position rather than true physical optimum.

Need to ensure no betting lines. The paper mentions concedes, goals, possession, save percentage - these are fine, not betting lines.

Need exact [PAGE N] markers. The text has page numbers embedded. I'll cite them carefully.

Let me write this out with substantial depth.

Word count check: I need to make sure total is >= 1000 words. THINK_TRACE alone >= 400 words. Let me write generously.

Let's draft:

THINK_TRACE: I'll discuss the multi-hop dependency chain: Spearman OBSO -> PPCF -> reach probability -> EF-OBSO adaptation -> DRSO counterfactual -> seasonal evaluation. Gray-zone audit: incomplete tracking, no player IDs except shots, velocity estimation proxy, attacking third restriction, 3-defender limit, grid vertex discretization, possession confounding, keeper save confounding.

SOURCE_OPERATORS_AND_EQUATIONS: 
- OBSO: P(OBSO | state) = P(event at x) * P(control at x) * P(score | shot at x) [PAGE 3]
- PPCF differential equation [PAGE 3]
- Reach probability with expected intercept time [PAGE 3]
- Speed assumptions: 4.47-4.92 m/s average [PAGE 7]
- Conditions I-V [PAGE 7-8]
- RMSE equation 5 [PAGE 8]
- Grid 32x50 [PAGE 6]
- DRSO: 3 closest defenders, vertices [PAGE 9-10]

RETROCAUSAL_GENEALOGY: Spearman 2018 MIT Sloan, PPCF 2017, Decroos 2019, etc. Multi-week traps: 2021-22 vs 2022-23 comparison confounded by goalkeeper save rate (Brentford 64/93 to 90/108, Everton 62/92 to 63/90), relegation of Leeds, possession style differences.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression - under scoring threat, defenders retreat to familiar shapes; DRSO optimal positioning may require unnatural positions that regress under match pressure. Counter-trap - if defender moves to optimal, attacker's OBSO changes, creating a game-theoretic loop not modeled. Clock - event duration, freeze frame at event start, seasonal clock (2021-22 to 2022-23).

CROSS_LAYER_VETO_ADJUDICATION: Physical layer - grid vertices may require velocity beyond 5.0 m/s cap; biomechanical - keeper speed fixed 2.0 m/s toward ball endpoint y-coordinate [PAGE 7]; weather/pitch not modeled; data layer - incomplete freeze frames [PAGE 2].

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios with predictions.

Let me write this carefully, ensuring verbatim quotes where useful and exact page markers. The page markers in the text are like **1**, **2**, etc. I'll reference them as [PAGE 1], [PAGE 2], etc.

I must not mention betting lines. No spreads, totals, moneylines, odds. I can mention probabilities (RMSE, scoring probability) but not betting odds.

Let me compose the final response.

Length: Need to be thorough. I'll aim for ~1500+ words total.

Let me start writing.

For equations, since the images are broken in the text, I'll reconstruct based on the description:
- Equation 1: OBSO(s) = P_event(x | s) × P_control(x | s) × P_score(x | s)
- Equation 2: PPCF differential equation (not fully specified in text, but described)
- Equation 3: P(reach | player, point, time) based on expected intercept time
- Equation 4: Alternative for high passes (ball over head)
- Equation 5: RMSE = sqrt( (1/N) * sum( (OBSO_i - ground_truth_i)^2 ) )

Wait, looking at text: "we calculated the following equation and got the RMSE for the attackers at that event: �5� , where represents the number of all attackers except for the shooter". So RMSE formula.

I'll present these formally.

For verbatim quotes, I can quote short passages with page markers.

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

I need to ensure total >= 1000 words and THINK_TRACE >= 400 words.

Let me draft each section now.

THINK_TRACE (>=400 words):
I'll discuss the dependency chain and gray zones in depth.

SOURCE_OPERATORS_AND_EQUATIONS:
Formal LaTeX, units, page citations, breakdown regimes.

RETROCAUSAL_GENEALOGY:
Historical lineage, multi-week traps.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION:
Physical/biomechanical/weather veto proof.

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios + predictions.

Let me write carefully.

I'll include exact page citations like [PAGE 7], [PAGE 8], [PAGE 9], [PAGE 10], [PAGE 11], [PAGE 12], [PAGE 14], [PAGE 15].

Verbatim quotes: 
- [PAGE 2]: "Note that we cannot obtain the coordinates of all 22 players in many frames because many scenes in live football broadcasts do not show all 22 players."
- [PAGE 7]: "As the average speed of a football player during a game is 10–11[mph] (4.47–4.92[m/s]), we set and verified player speeds in this study as follows."
- [PAGE 10]: "The smaller this value is, the closer the defender's position in the original data was to the optimal one. Hence, we were able to interpret that the player defended well."
- [PAGE 14]: "Liverpool, in particular, saw a significant increase from 16 to 27 concedes."

OK, let's write the full response.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's core inference chain proceeds through four coupled hops: (1) Spearman's OBSO defines off-ball scoring probability as a joint product of event location probability, ball-control probability, and shot-to-goal probability, all evaluated over a continuous pitch state; (2) the Potential Pitch Control Field (PPCF) supplies the physical reach/control layer via a differential equation parameterized by expected intercept time and player velocity caps; (3) EF-OBSO collapses the full 22-player tracking requirement into a freeze-frame approximation restricted to the attacking third, substituting assumed constant speeds (0.0–5.0 m/s) and goal-directed movement vectors because StatsBomb 360 frames lack player identifiers and inter-event velocity data except at shots; (4) DRSO executes a counterfactual grid search over the four vertices of the cell containing the three defenders nearest the maximum-EF-OBSO point, comparing counterfactual versus observed OBSO to derive a "Diff" score averaged per team and compared across the 2021–22 and 2022–23 seasons.

Gray-zone audit. First, data incompleteness is structural, not incidental: freeze frames routinely omit players, and except for shot events, players carry no uniform-number identity, making true inter-epoch velocity estimation impossible [PAGE 2]. The authors patch this by restricting computation to the attacking third, where defensive keepers are more frequently captured and movement direction can be heuristically fixed toward the goal [PAGE 4–5]. Second, the speed verification grid (Conditions I–V) treats all non-actor defenders as moving at a single constant speed toward the goal, with the closest defender mirroring the actor's ball-endpoint speed [PAGE 7–8]. Condition 5 (5.0 m/s) minimized RMSE for all attackers and scorers, while Condition 2 minimized RMSE for non-scorers; the authors select Condition 5 despite the non-scorer mismatch, privileging scorer detection because goals are sparse [PAGE 11]. Third, DRSO applies the counterfactual only to the three closest defenders [PAGE 10], ignoring the remaining seven field players and the goalkeeper's positioning dynamics except as implicit context. Fourth, the grid discretization (32 × 50 divisions) and vertex-only counterfactual sampling [PAGE 6, 9] assume reachability of grid corners without verifying that a defender can physically traverse to that vertex within the event's available time [PAGE 15]. Fifth, the seasonal comparison conflates defensive positioning with goalkeeping: Brentford's save percentage moved from 64/93 to 90/108 and Everton's from 62/92 to 63/90 between seasons [PAGE 14], meaning DRSO's "worse defense" verdict for those teams may reflect keeper regression rather than positional decay. Sixth, possession rate acts as a confounder: Everton defended deep with <40% possession while Manchester City attacked with >60% possession [PAGE 13], so DRSO's high Diff for City may simply reflect more opponent attacks in the attacking third rather than inferior individual defensive decisions.

Breakdown regimes: EF-OBSO returns zero for offside attackers by definition; the model is undefined for events outside the attacking third under the study's restriction; DRSO collapses when fewer than three defenders are visible in the freeze frame; and the vertex counterfactual is physically infeasible when the required displacement exceeds speed_cap × time_remaining. The paper acknowledges none of these as hard singularities except offside, leaving the reachability regime unverified [PAGE 15].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The formal operators reconstructed from the manuscript (equations rendered as images in the source are described verbatim where the LaTeX is absent):

OBSO joint probability [PAGE 3]:
\[
\mathrm{OBSO}(s) = P(\text{next on-ball event at } x \mid s) \times P(\text{attacker controls ball at } x \mid s) \times P(\text{shot from } x \text{ scores} \mid s)
\]
where \(s\) is the instantaneous game state including player locations and velocities. The scoring probability \(S_r\) decays rapidly with distance from goal [PAGE 13], rendering mid-shot EF-OBSO from outside the penalty area near-singular relative to in-box shots.

PPCF reach/control layer [PAGE 3]:
\[
\frac{\partial}{\partial t} \text{(ball-control field)} = f(\text{time-to-reach}, \text{time-to-control})
\]
with reach probability:
\[
P(\text{player at } p \text{ reaches point } x \text{ within } \Delta t) = g(\text{expected intercept time})
\]
Parameters fixed per Spearman [6]: non-goalkeeper speed response and goalkeeper-specific intercept time constants (values suppressed in image text).

EF-OBSO high-pass alternative [PAGE 6]:
For events that are not ground pass, low pass, or carry (e.g., high pass), intercept probability is evaluated only at the ball's arrival point because aerial balls cannot be intercepted mid-flight [PAGE 6].

Pitch grid [PAGE 6]:
\[
\text{Pitch partition} = 32 \times 50 \text{ rectangular cells}
\]

RMSE verification [PAGE 8]:
\[
\mathrm{RMSE}_{\text{attackers}} = \sqrt{ \frac{1}{N} \sum_{i=1}^{N} \bigl( \mathrm{EF\text{-}OBSO}_i - y_i \bigr)^2 }
\]
where \(N\) is the number of attackers excluding the shooter in the freeze frame, and \(y_i \in \{0,1\}\) is the goal ground truth (1 for scorer, 0 otherwise) [PAGE 8].

Speed assumptions [PAGE 7–8]:
\[
v_{\text{avg}} \in [4.47, 4.92] \mathrm{m/s} \quad (10\text{–}11 \mathrm{mph})
\]
Condition I: all \(v = 0.0 \mathrm{m/s}\). Condition II: actor velocity = ball velocity on carry, else 0; defensive keeper \(v = 2.0 \mathrm{m/s}\) toward ball endpoint y-coordinate on shot, else 0; others \(0.0 \mathrm{m/s}\). Conditions III–V: all other players \(v = 4.0, 4.5, 5.0 \mathrm{m/s}\) toward goal [PAGE 7–8].

DRSO algorithm [PAGE 9–10]:
1. Compute observed max EF-OBSO, \(\mathrm{OBSO}^{\mathrm{obs}}_{\max}\), at attacking-third event; locate argmax point [PAGE 9].
2. Identify three closest defenders and their grid cells [PAGE 9–10].
3. Counterfactual: place each defender at the four cell vertices; compute \(\mathrm{OBSO}^{\mathrm{cf}}_{\max}\); argmax vertex is the optimal position [PAGE 9].
4. Team defense score per event: average of \(\mathrm{Diff} = \mathrm{OBSO}^{\mathrm{obs}}_{\max} - \mathrm{OBSO}^{\mathrm{cf}}_{\max}\) over three defenders [PAGE 10]. Smaller Diff implies observed position closer to optimal [PAGE 10].

Breakdown/singularity conditions: offside attackers yield OBSO = 0 by rule [PAGE 4]; incomplete freeze frames with <3 visible defenders invalidate the DRSO trio [PAGE 10]; vertex reachability unverified [PAGE 15]; seasonal Diff is confounded by keeper save-rate changes [PAGE 14] and possession-driven attack volume [PAGE 13].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage traces to Spearman's "Beyond expected goals" (MIT Sloan 2018) [PAGE 3, ref 6], which introduced OBSO using full tracking data and PPCF from "Physics-based modeling of pass probabilities" (MIT Sloan 2017) [ref 21]. The present work inherits the off-ball valuation tradition from Decroos et al. (2019) [ref 1], Bransen et al. (2019) [ref 2], Liu et al. (2020) [ref 3], and the defensive sub-literature of Toda et al. (2022) [ref 11] and Stöckl et al. (2022) [ref 12]. The innovation claimed is methodological portability: replacing complete tracking with StatsBomb 360 freeze frames plus event data, thereby lowering the data barrier for amateur and public teams [PAGE 1].

Multi-week traps. The 2021–22 versus 2022–23 seasonal comparison is a longitudinal trap because roster turnover, tactical system changes, and goalkeeper form are not controlled. Leeds United improved its Diff metric and reduced concedes from 56 to 40 yet was still relegated to the EFL Championship [PAGE 14], demonstrating that DRSO defensive quality is not sufficient for survival when attacking output or other defensive phases (set pieces, transitions) are weak. Conversely, Brentford reduced concedes from 30 to 18 while DRSO indicated worse positioning [PAGE 14], explained by save-percentage improvement from 64/93 to 90/108 [PAGE 14]. Everton improved saves marginally (62/92 to 63/90) while DRSO worsened [PAGE 14]. These are multi-week confounders: a single-season snapshot of positioning cannot isolate coaching effects from personnel effects. Arsenal, Leeds United, and Manchester United showed blue-area improvement in Figure 7 [PAGE 12], while Brentford, Chelsea, Everton, Liverpool, and Manchester City showed orange-area deterioration [PAGE 12–14]. Liverpool's concede jump from 16 to 27 [PAGE 14] coincides with DRSO deterioration, but the paper offers no counterfactual separating positioning from keeper Alisson's form or defensive-line injuries.

Temporal scale trap: DRSO is computed per event in the attacking third and averaged per team, yet the seasonal comparison treats a 38-game campaign as a stable unit. Mid-season managerial changes, injuries, and fixture congestion are averaged away. The method also assumes stationarity of the speed/positioning prior across both seasons despite potential tactical evolution [PAGE 15 limitation].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. When a defender is near the maximum-EF-OBSO point, match pressure triggers a regressive habit: retreat toward the goal, compact the block, or mark the nearest attacker rather than execute the DRSO-optimal vertex displacement [PAGE 9–10]. The optimal position computed by DRSO is a static, offline argmax over observed freeze frames; it does not model the defender's cognitive load, fatigue, or the social pressure of conceding. Consequently, the DRSO recommendation may prescribe an "unnatural" position that the player will not adopt under crisis, causing a habit-regression gap between model advice and executed behavior.

Counter-trap. DRSO optimizes defender positioning against a frozen attacker configuration [PAGE 9]. In a recursive game-theoretic loop, if the defender moves to the DRSO-optimal vertex, the attacker's EF-OBSO landscape shifts, opening new passing lanes or shooting angles not captured because the attacker positions are held constant during the counterfactual grid search [PAGE 9]. This creates a counter-trap: the defender's locally optimal move degrades team defense by failing to anticipate the attacker's best response. The algorithm's non-machine-learning interpretability advantage [PAGE 9] becomes a liability here because no adversarial reaction function is modeled.

Clock layer. Two clocks operate: (i) the micro-clock of event duration and freeze-frame capture at event start [PAGE 2], which bounds the time available for a defender to reach a counterfactual vertex; and (ii) the macro-clock of the 2021–22 to 2022–23 seasonal comparison [PAGE 12–14]. The micro-clock invalidates vertex sampling when required travel time exceeds event duration [PAGE 15 limitation]; the macro-clock invalidates cross-season inference when rosters and tactics change between ticks. DRSO ignores both clocks: it assumes instantaneous repositioning to grid vertices and treats seasons as comparable aggregates.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto. A defender can occupy a grid vertex only if \(\|x_{\text{vertex}} - x_{\text{current}}\| \le v_{\max} \times \Delta t_{\text{event}}\), where \(v_{\max}\) is capped at 5.0 m/s in the most favorable condition [PAGE 7–8] and \(\Delta t_{\text{event}}\) is the event duration from preprocessed state features [PAGE 2]. For long passes or high balls, \(\Delta t_{\text{event}}\) may be large enough for vertex reach; for quick one-touch shots, \(\Delta t_{\text{event}}\) collapses and the vertex counterfactual is physically inadmissible. The paper admits it "did not verify whether the player could reliably have been at the vertices" [PAGE 15], so this veto is active for all fast-developing attacking-third events.

Biomechanical layer veto. Goalkeeper speed is hard-fixed at 2.0 m/s toward the ball endpoint's y-coordinate on shots, 0.0 m/s otherwise [PAGE 7]. This ignores goalkeeper lateral speed, diving reach, and starting depth, creating a systematic veto on any DRSO evaluation where the keeper's counterfactual position matters (e.g., cutbacks, crosses). Non-goalkeeper defenders are assigned a single scalar speed toward the goal with no acceleration curve, no lateral cutting, and no collision avoidance, violating biomechanical reality in congested penalty-area events.

Weather/pitch layer veto. The manuscript contains no weather, pitch moisture, grass length, or temperature variables [PAGE 2 dataset description]. Ball roll and player sprint capacity are modulated by these factors, but EF-OBSO/DRSO treat pitch physics as invariant. A veto applies on rainy matchdays or degraded pitches where the 5.0 m/s speed prior and PPCF intercept-time constants become miscalibrated.

Data-layer veto. Freeze frames lack full 22-player coordinates and player IDs except on shots [PAGE 2]. When the defensive goalkeeper or key defenders are absent from the frame, EF-OBSO's goalkeeper-aware advantage collapses [PAGE 4], and DRSO's three-defender subset cannot be formed [PAGE 10]. This veto is structural for non-attacking-third events and for low-visibility broadcast frames.

Adjudication hierarchy. Physical veto > biomechanical veto > weather veto > data-layer veto. If any higher layer vetoes, downstream DRSO output is undefined, not merely noisy.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Incomplete freeze-frame defender coverage. If fewer than three defenders are visible in the freeze frame of an attacking-third event [PAGE 2], DRSO cannot identify its required trio of closest defenders [PAGE 10]. Prediction: DRSO team-defense Diff will be systematically missing for events with low freeze-frame player counts, biasing the seasonal average toward high-visibility set-piece and open-play shots where broadcasts show more players. Verifiable by counting events per team with <3 visible defenders and showing they correlate with lower DRSO sample size, not lower defensive quality.

Veto Scenario 2 — Offside attacker exclusion. OBSO assigns zero scoring probability to attackers in offside positions [PAGE 4]; consequently the maximum EF-OBSO point and the defender trio selection exclude offside threats entirely. Prediction: In matches where a team frequently deploys an offside trap, DRSO will under-rate the defensive value of that trap because the offside attacker's counterfactual scoring opportunity is erased by definition, making the defensive line appear better positioned than it actually is relative to on-ball threats only.

Veto Scenario 3 — Vertex reachability violation. If the Euclidean distance from a defender's observed position to a grid vertex exceeds \(5.0\,\mathrm{m/s} \times \Delta t_{\text{event}}\) [PAGE 7–8], the counterfactual placement is kinematically impossible. Prediction: DRSO optimal positions will cluster at vertices nearest the observed defender rather than at the true physical optimum, producing artificially small Diff values in fast-transition events (short passes, quick shots) and inflated Diff values in slow-build events (long possession sequences). Verifiable by comparing Diff distributions for events with duration below versus above the median and by simulating reachable-position sampling (e.g., a circle of radius \(v_{\max}\Delta t\)) to show the vertex-only method overestimates defensive competence in short-duration events.
</RLVR_COUNTERFACTUAL_VETOES>