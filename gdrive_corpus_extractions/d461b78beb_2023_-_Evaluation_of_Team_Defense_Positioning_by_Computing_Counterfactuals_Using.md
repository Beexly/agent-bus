---
source: "2023 - Evaluation of Team Defense Positioning by Computing Counterfactuals Using StatsBomb 360 Data - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Hudl StatsBomb/Research Competitions/2023"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5061
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about evaluating team defense positioning using counterfactuals with StatsBomb 360 data. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Let me structure this carefully.

First, let me analyze the paper content:

Paper: "Evaluation of Team Defense Positioning by Computing Counterfactuals using StatsBomb 360 data" by Rikuhei Umemoto and Keisuke Fujii, Nagoya University.

Key contributions:
1. EF-OBSO (Event and Freeze frame based OBSO) - computes OBSO with incomplete location data by adding prior knowledge
2. DRSO (Defense Response to Scoring Opportunity) - counterfactual optimal positioning of defensive teams
3. Experiments validating parameters and analyzing team defense season-by-season

Methodology:
- Dataset: 290 EPL games 2021-22 and 290 games 2022-23. Ten teams with all games, twelve teams with 20 games. Used 180 game data (combinations of ten teams).
- Event data + 360 data (freeze frames at start of event). Not all 22 players visible.
- OBSO (Spearman [6]): Probability off-ball player can score in next state. Uses PPCF (Potential Pitch Control Field).
- Equation (1): OBSO formula (though rendered weirdly in text, it's product of probabilities)
- Equation (2): differential equation for PPCF
- Equation (3): probability player reaches point within time
- EF-OBSO adapted for incomplete data:
  - Only attacking third or shots
  - Assume movement toward goal
  - Set offside line
  - 32x50 grid divisions
  - PPCF formula for ground pass/low pass/carry; different formula (4) for high passes
- Verification of player speeds (conditions I-V):
  I. All 0.0 m/s, actor velocity = ball velocity if carry else 0, GK 2.0 m/s towards ball endpoint if shot
  II. 0.0 m/s towards goal
  III. 4.0 m/s towards goal
  IV. 4.5 m/s towards goal
  V. 5.0 m/s towards goal
- Verified using RMSE against actual score (0/1). Condition 5 had smallest mean/std for all attackers and scorers.
- DRSO:
  - Calculate max observed EF-OBSO in attacking third, identify point
  - Extract closest defender and their grid
  - Counterfactual EF-OBSO at four vertices of grid
  - Optimal position where counterfactual max is taken
  - Applied to 3 defenders closest to max EF-OBSO point
  - Difference between optimal and observed values per team averaged
  - Smaller difference = better defense (closer to optimal)

Results:
- Everton best average DRSO, Leeds worst
- Manchester City fewest concedes but DRSO not high
- Season comparison: Arsenal, Leeds, Man Utd improved; Brentford, Chelsea, Everton, Liverpool, Man City worsened
- Leeds improved from 56 to 40 concedes but still relegated
- Liverpool increased from 16 to 27 concedes
- Brentford concedes decreased 30 to 18 but DRSO worsened -> save percentage improved (64/93 to 90/108)
- Everton save percentage 62/92 to 63/90

Limitations:
- Incomplete data vs complete location data
- Player speed parameters need more verification
- DRSO grid vertices not verified as reachable; suggestion: movement range as circle based on speed

Now I need to write the response with the exact XML sections.

Important: No betting lines. No toy equations. Use formal LaTeX. Cite [PAGE N] markers.

Word count: >= 1,000 words total across sections. THINK_TRACE >= 400 words.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >= 400 words. I'll discuss the derivation chain from OBSO -> EF-OBSO -> DRSO, the assumptions (attacking third only, movement toward goal, grid discretization, speed conditions), the verification RMSE logic, the counterfactual grid vertex assumption, and gray zones (incomplete tracking, missing identities, speed proxies, offside line determination, season comparison confounded by goalkeeping/save percentage, possession rate confounding).

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations with units, page citations. I need to reconstruct equations from the text. The text has placeholders but I can describe them formally based on the description:
- OBSO: product of three probabilities: P(next on-ball event at point), P(attacking player controls ball at point), P(shot results in score at point). Equation (1).
- PPCF differential equation (2).
- Reach probability equation (3).
- High-pass interception formula (4).
- RMSE equation (5).
- Speed conditions I-V with units m/s.
- Grid 32x50 divisions.
- Diff metric.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Spearman OBSO [6], PPCF [21], Decroos et al. [1], Bransen et al. [2], etc. Multi-week traps: season-to-season comparison confounded by roster changes, goalkeeper save percentage, tactical shifts, relegation (Leeds), small sample (20 games for 12 teams).

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is about how defenders regress to habitual positioning under crisis, counter-traps (attackers anticipating defensive shifts), and clock/tempo pressure. Apply to the paper's assumption that defenders can move to optimal grid vertices instantly.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical: pitch dimensions, grid resolution, player speed limits (4.47-4.92 m/s average cited). Biomechanical: acceleration/deceleration, reachability of grid vertices within event duration. Weather: not in paper but can discuss as veto layer (pitch condition affecting ball roll, player speed). Need to be careful not to invent data not in paper, but can discuss as theoretical veto layers.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just counterfactual vetoes. I'll create 3 scenarios where the DRSO counterfactual should be vetoed (e.g., offside trap timing, goalkeeper rushing out, defensive line offside, player stamina/fatigue not modeled, set-piece vs open play). Each with verification condition and prediction.

Let me make sure to cite page numbers accurately from the provided text.

Page citations from text:
- Abstract and intro: [PAGE 1]
- Dataset: [PAGE 2]
- 360 data/freeze frame: [PAGE 3]
- Data preprocessing/terms: [PAGE 2]-[PAGE 3]
- OBSO definition: [PAGE 3]-[PAGE 4]
- PPCF: [PAGE 4]
- EF-OBSO disadvantages: [PAGE 4]
- EF-OBSO explanation: [PAGE 4]-[PAGE 6]
- Figure 1: [PAGE 5]
- Figure 2/3: [PAGE 5]-[PAGE 6]
- Calculation details (grid 32x50, formula 4): [PAGE 7]
- Verification speeds: [PAGE 7]-[PAGE 8]
- Figure 4: [PAGE 8]
- DRSO algorithm: [PAGE 9]-[PAGE 10]
- Evaluation team defense: [PAGE 10]
- Results Table 1: [PAGE 11]
- Figure 6/7: [PAGE 12]-[PAGE 13]
- Discussion: [PAGE 13]-[PAGE 15]
- Conclusion: [PAGE 15]
- Limitations: [PAGE 15]
- References: [PAGE 16]-[PAGE 17]

I need to be careful with verbatim quotes. I'll quote short phrases exactly as they appear.

Let me draft the content now.

For LaTeX equations, since the original text has missing symbols due to PDF extraction, I'll reconstruct them formally based on the textual description and cite the page where they appear. I'll note that the original paper renders them as equations (1)-(5).

Equation reconstruction:
(1) OBSO(s) = P(event at x | s) · P(control at x | s) · P(score | x, s)
where s is instantaneous state.

Actually the text says: "Let [something] represent the probability of the next on-ball event occurring at point [something] on the pitch, the one of an attacking player controlling the ball at [something], and [something] the one of the player's shot resulting in a score at [something]". So:
OBSO = P_{next}(x | s) · P_{control}(x | s) · S_r(x)

(2) Differential equation for PPCF. Text: "We calculated this value from the following differential equation: (2)". Without exact symbols, I'll describe it as the PPCF PDE/ODE governing ball control probability based on reach time and control time, citing [PAGE 4].

(3) Reach probability: P(reach player i at point x within time t) based on expected intercept time. [PAGE 4]

(4) High-pass interception formula: interception only at arrival point because players cannot intercept over head. [PAGE 7]

(5) RMSE for attackers: RMSE = sqrt( (1/N) Σ (OBSO_counterfactual - 0)^2 ) for non-shooters, with ground truth 0. [PAGE 8]

Speed conditions:
v_avg ∈ [4.47, 4.92] m/s cited from average speed 10-11 mph. [PAGE 7]

Conditions:
I: v_actor = v_ball if carry else 0; v_GK = 2.0 m/s towards ball endpoint if shot else 0; others 0.
II: all others 0.0 m/s towards goal.
III: 4.0 m/s towards goal.
IV: 4.5 m/s towards goal.
V: 5.0 m/s towards goal.

DRSO:
max EF-OBSO observed -> point p*.
Defender closest to p*, grid G.
Counterfactual at 4 vertices of G.
Optimal position = argmax counterfactual EF-OBSO.
Diff = EF-OBSO_optimal - EF-OBSO_observed? Wait text: "we used the difference -0.024 as... The smaller this value is, the closer the defender's position... defended well." Actually example: Diff_opt is 0.109, Diff_obs is 0.133, difference -0.024. Smaller (more negative) means closer to optimal? Wait if Diff_opt < Diff_obs, then defender was better than optimal? That seems odd. Let me re-read.

"we used the difference (denoted by ) between and to evaluate team defenses. For example, in Figure 5(c), Diff_opt is 0.109, and Diff_obs is 0.133. In this case, we used the difference -0.024 as. The smaller this value is, the closer the defender's position in the original data was to the optimal one. Hence, we were able to interpret that the player defended well."

Wait, if Diff_opt = 0.109 and Diff_obs = 0.133, difference = -0.024. The text says "the smaller this value is, the closer the defender's position... was to the optimal one." But -0.024 is smaller than 0, yet Diff_opt < Diff_obs means optimal EF-OBSO is lower than observed? That would mean moving defender increased EF-OBSO (worse for defense). Hmm, maybe I have the sign reversed. Actually if EF-OBSO is attacker scoring probability, lower is better for defense. If observed defender position yields EF-OBSO = 0.133, and moving to optimal vertex yields 0.109 (lower), then the observed was worse than optimal. Difference = optimal - observed = 0.109 - 0.133 = -0.024. Smaller (more negative) means observed was much worse than optimal? No, the text says smaller means closer to optimal and defended well. There may be a sign convention where Diff = observed - optimal, so 0.133 - 0.109 = +0.024, but they say -0.024. Let me not over-interpret; I'll state the metric as described: difference between counterfactual optimal and observed EF-OBSO, with smaller values indicating better defensive alignment per the authors, citing [PAGE 10].

Actually re-reading: "we used the difference (denoted by ) between and to evaluate team defenses. For example, in Figure 5(c), Diff_opt is 0.109, and Diff_obs is 0.133. In this case, we used the difference -0.024 as. The smaller this value is, the closer the defender's position in the original data was to the optimal one."

If Diff = Diff_opt - Diff_obs = -0.024. Smaller (more negative) means Diff_opt is much smaller than Diff_obs. But if EF-OBSO is attacker scoring chance, lower is better. So if optimal position gives lower EF-OBSO than observed, then observed was bad. The difference being negative means optimal < observed. But they say smaller difference = closer to optimal = defended well. This seems contradictory unless "smaller" means closer to zero? No, -0.024 is small. Maybe they mean absolute difference? Or maybe the metric is oriented such that higher EF-OBSO is better for defense? No, OBSO is scoring opportunity for attacker.

I'll just report it as the authors describe without resolving the sign ambiguity, noting it as a gray zone. Actually that's perfect for the THINK_TRACE gray-zone audit.

Now, let me write the sections with sufficient depth and word count.

I need to ensure total >= 1000 words. THINK_TRACE alone >= 400. Others can be substantial too.

Let's write.

THINK_TRACE (>=400 words): I'll write a dense multi-hop derivation.

Start: OBSO (Spearman) -> incomplete data problem -> EF-OBSO restrictions (attacking third, movement toward goal, offside line, grid 32x50, high-pass formula). Then speed verification conditions I-V, RMSE against binary goal outcome. Then DRSO counterfactual grid search over 4 vertices. Then team-level aggregation over 3 closest defenders, season comparison. Gray zones: incomplete freeze frames (not 22 players), missing player identities, speed proxies not verified, grid vertices not verified as reachable, possession rate confounding (Everton low possession vs Man City high), goalkeeper save percentage confounding (Brentford/Everton concedes down but save % up), relegation (Leeds), small sample for 12 teams (20 games), offside line determination from incomplete data.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.

RETROCAUSAL_GENEALOGY: Lineage from Spearman [6] OBSO, PPCF [21], Decroos [1], Bransen [2], etc. Multi-week traps: season-to-season DRSO differences confounded by transfer windows, managerial changes, goalkeeper form, fixture difficulty, relegation battle (Leeds), small sample.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (defenders revert to trained shape under pressure), counter-trap (attackers drag defenders out of position then exploit space), clock (event duration vs time to reach grid vertex). Apply to DRSO assumption that defender can instantaneously occupy optimal vertex.

CROSS_LAYER_VETO_ADJUDICATION: Physical (pitch 32x50 grid, speed limits 4.47-4.92 m/s average, max speeds higher), Biomechanical (acceleration, deceleration, change of direction, reachability within freeze-frame-to-event interval), Weather (not in paper; pitch wetness affects ball roll and player speed, vetoing counterfactual reachability). Need to be clear these are theoretical veto layers.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.
1. Offside trap / defensive line synchronization: If moving one defender to grid vertex breaks offside line, attacker onside -> veto. Prediction: DRSO optimal position increases OBSO for through balls.
2. Goalkeeper rushing out / sweeper-keeper: If defensive keeper leaves line, counterfactual defender positioning ignores GK position -> veto. Prediction: DRSO overestimates value of pushing high line when GK is advanced.
3. Stamina/fatigue accumulation: Over 90 min, player speed decays; condition V (5.0 m/s) is not sustainable -> veto late-game counterfactuals. Prediction: DRSO error increases in final 15 minutes; RMSE condition V degrades as t -> 90.

Let me now compose the full response. I need to watch word count. I'll aim for roughly 200-300 words per section except THINK_TRACE which needs >=400.

Let's write carefully with citations.

One important note: The user said "DRIVE SOURCE: ..." and provided the text. I should treat this as the source. I will cite [PAGE N] throughout.

Let me begin drafting.

---

<THINK_TRACE>
...
</THINK_TRACE>

I'll make sure to include verbatim quotes where useful, e.g. "the median number of visible players in the attacking third was more than otherwise" [PAGE 5], "all players' speeds were 0.0[m/s]" etc.

Word count check: I'll write generously.

Let's go.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation chain in this paper proceeds in four nested hops, each introducing an assumption that narrows the identifiability of defensive quality. Hop one: Spearman’s OBSO [PAGE 3] models the off-ball scoring opportunity as a product of three conditional probabilities—the likelihood of the next on-ball event at location x, the likelihood an attacker controls the ball at x, and the likelihood that a shot from x results in a goal—evaluated against the instantaneous game state s, including all player locations and velocities. Hop two: because StatsBomb 360 freeze frames rarely capture all 22 players and lack persistent player identities except at shot events [PAGE 4], the authors restrict computation to the attacking third or shooting scenes [PAGE 4]. This is justified by three claimed advantages: more visible defenders and the defending goalkeeper appear in freeze frames [PAGE 5]; player movement direction can be fixed toward the goal because both attackers and defenders in the attacking third attend to the same goal [PAGE 6]; and the region is precisely where defensive positioning errors are most consequential [PAGE 6]. Hop three: player speeds are not observed, so five verification conditions are tested [PAGE 7], ranging from all players static (condition I) to all non-actor players moving at 5.0 m/s toward the goal (condition V), with the average professional match speed cited as 4.47–4.92 m/s [PAGE 7]. EF-OBSO is validated by RMSE against binary goal outcomes: scorers carry ground truth 1, non-shooters 0 [PAGE 8]. Condition V minimizes RMSE for all attackers and scorers [PAGE 11], yet the paper acknowledges this speed is an unverified proxy [PAGE 15]. Hop four: DRSO searches counterfactual defender placement by taking the point of maximum observed EF-OBSO, extracting the nearest defender and their 32×50 pitch grid cell [PAGE 9], evaluating EF-OBSO at the four grid vertices as counterfactual defender locations [PAGE 10], and selecting the vertex yielding the extremal counterfactual value as the “optimal” position [PAGE 10]. Team defense is scored by averaging the difference between counterfactual and observed EF-OBSO across the three defenders closest to the maximum-opportunity point [PAGE 10], then comparing seasons [PAGE 12–13].

Gray-zone audit: (1) The sign convention for the DRSO difference is internally opaque. The example gives Diff_opt = 0.109 and Diff_obs = 0.133, yielding −0.024, with the authors stating “the smaller this value is, the closer the defender’s position … was to the optimal one” [PAGE 10]. If EF-OBSO measures attacker scoring probability, a lower counterfactual value at the optimal vertex should indicate better defense, but then a negative difference (optimal below observed) implies the observed position was worse, not better—contradicting the claim that smaller means better alignment unless “smaller” means closer to zero in absolute terms, which is never specified. (2) Grid vertices are assumed reachable without verification that a defender could physically occupy them within the event interval [PAGE 15], violating the biomechanical reachability assumption. (3) Season-to-season DRSO differences are confounded by goalkeeper save percentage: Brentford’s concedes fell from 30 to 18 while save percentage rose from 64/93 to 90/108 [PAGE 14–15], and Everton’s save percentage moved from 62/92 to 63/90 [PAGE 15], yet the authors attribute defensive change to positioning alone. (4) Possession rate acts as a tactical confound: Everton defended a low block with <40% possession while Manchester City held >60% [PAGE 13–14], so DRSO’s raw EF-OBSO gap conflates defensive positioning with territorial territory and opponent attack volume. (5) Twelve teams contribute only 20 games per season [PAGE 2], weakening season-level inference. (6) Offside lines are derived from incomplete freeze-frame data [PAGE 7], introducing selection bias in zero-probability offside regions. These gray zones mean DRSO rankings (Everton best, Leeds worst [PAGE 12]) reflect a model-specific positioning proxy rather than a causal estimate of defensive value.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal reconstruction of the paper’s operators, with SI units and page citations.

State space: Let \(s_i\) denote the instantaneous state at event index \(i\), comprising ball xy-coordinates, ball velocity, and visible player coordinates from the 360 freeze frame; \(\mathcal{S} = \{s_i\}_{i=1}^{N}\) is the chronological set of states within a match [PAGE 2–3].

OBSO (Equation 1, [PAGE 3]):
\[
\mathrm{OBSO}(s) = P_{\mathrm{next}}(x \mid s) \cdot P_{\mathrm{control}}(x \mid s) \cdot S_r(x)
\]
where \(x\) is a pitch location, \(P_{\mathrm{next}}\) is the probability of the next on-ball event at \(x\), \(P_{\mathrm{control}}\) is the probability an attacking player controls the ball at \(x\), and \(S_r(x)\) is the scoring probability of a shot from \(x\). The paper notes \(S_r\) decreases rapidly with distance [PAGE 13].

Potential Pitch Control Field (PPCF) (Equation 2, [PAGE 4]): A differential model of ball control based on player reach time and control time; exact symbols are lost in PDF extraction, but the operator maps player state \((p_i, v_i)\) to a spatial control probability field over the pitch.

Reach probability (Equation 3, [PAGE 4]):
\[
P(\text{player } i \text{ reaches } x \text{ within } t)
\]
governed by expected intercept time; required player speeds were fixed at specific constants following Spearman [6] [PAGE 4].

High-pass interception term (Equation 4, [PAGE 7]): For events that are not ground pass, low pass, or carry, interception is modeled only at the ball’s arrival point because players cannot intercept aerial movement over their heads.

EF-OBSO grid discretization: The pitch is divided into \(32 \times 50\) grid cells [PAGE 7]. The offside line is computed from visible player information, and players in offside positions are assigned zero scoring probability [PAGE 4–5, 7].

Speed verification conditions (Table 1, [PAGE 7–8, 11]), all in m/s:
- Condition I: actor speed = ball speed if carrying, else 0.0; defensive goalkeeper speed = 2.0 toward the ball endpoint if the event is a shot, else 0.0; all others 0.0.
- Condition II: all non-actor players 0.0 m/s toward the goal.
- Condition III: all non-actor players 4.0 m/s toward the goal.
- Condition IV: all non-actor players 4.5 m/s toward the goal.
- Condition V: all non-actor players 5.0 m/s toward the goal.
Observed average match speed is cited as 10–11 mph (4.47–4.92 m/s) [PAGE 7].

RMSE verification (Equation 5, [PAGE 8]): For shooting events, shooter ground truth \(y = 1\) for a goal and 0 otherwise; all other attackers in the freeze frame have \(y = 0\). The attacker RMSE at an event is
\[
\mathrm{RMSE}_{\mathrm{att}} = \sqrt{ \frac{1}{N_{\mathrm{att}}} \sum_{j=1}^{N_{\mathrm{att}}} \left( \mathrm{EF\!-\!OBSO}_j - 0 \right)^2 }
\]
where \(N_{\mathrm{att}}\) is the number of attackers excluding the shooter [PAGE 8]. Condition V produced the smallest mean and standard deviation for all attackers and scorers [PAGE 11].

DRSO operator ([PAGE 9–10]):
1. Compute \(M_{\mathrm{obs}} = \max \mathrm{EF\!-\!OBSO}\) over the attacking third and locate its argmax point \(x^*\).
2. Identify the defender \(d\) closest to \(x^*\) and the grid cell \(G\) containing \(d\).
3. For each of the four vertices \(v_k \in G\), compute counterfactual \(\mathrm{EF\!-\!OBSO}^{(k)}\) assuming \(d\) occupies \(v_k\); let \(M_{\mathrm{cf}} = \max_k \mathrm{EF\!-\!OBSO}^{(k)}\).
4. The optimal defender position is \(\arg\max_k \mathrm{EF\!-\!OBSO}^{(k)}\).
5. Team defensive score per event: average over the three defenders closest to \(x^*\) of \(\Delta = M_{\mathrm{cf}} - M_{\mathrm{obs}}\) (or the authors’ signed difference convention [PAGE 10]); smaller \(\Delta\) indicates closer alignment with optimal positioning [PAGE 10]. Aggregation is per team over attacking-third events, then compared across the 2021–22 and 2022–23 seasons [PAGE 10–13].

Breakdown/singularity regimes: (a) Freeze frames with fewer than 22 players induce missing-data bias in \(P_{\mathrm{control}}\) and PPCF [PAGE 4]; (b) offside line estimation fails when defensive line positions are occluded [PAGE 7]; (c) grid-vertex counterfactuals assume instantaneous, collision-free defender relocation with no acceleration constraint [PAGE 10, 15]; (d) condition-V speed (5.0 m/s) is a constant proxy unsupported by longitudinal tracking, breaking down under fatigue or sprint recovery [PAGE 7, 15].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Spearman’s OBSO framework [6] and the Physics-based PPCF model [21], cited on [PAGE 3–4], which treat off-ball scoring probability as a physical control problem over continuous pitch space. The authors extend this to incomplete event-plus-freeze-frame data, joining a broader off-ball valuation literature including Decroos et al. [1], Bransen, Van Haaren, and van de Velden [2], Liu et al. [3], Rudd [4], and Power et al. [5], all referenced in the introduction [PAGE 1]. On the defensive side, the paper sits beside Toda et al.’s ball-recovery and being-attacked prediction models [11], Stöckl et al.’s graph-convolutional defensive performance work [12], and generalized defensive valuation via event probabilities [19–20], all cited on [PAGE 1–2]. The counterfactual turn—asking “where should the defender have been?”—echoes Van Roy, Robberechts, and Davis’s “Optimally Disrupting Opponent Build-ups” [15] and the action-valuation tradition of Fernández and Bornn’s Wide Open Spaces [9], but adapts it to defensive positioning without machine learning, explicitly valuing interpretability over black-box prediction [PAGE 9].

Multi-week traps: The season-by-season DRSO comparison [PAGE 12–15] is exposed to retrospective confounds that a single-season snapshot cannot resolve. Leeds United improved its DRSO diff while concedes fell from 56 to 40, yet the team was relegated to the EFL Championship [PAGE 14], indicating that DRSO captures only a narrow positioning signal while relegation outcomes aggregate recruiting, injuries, and fixture difficulty. Liverpool’s concedes rose from 16 to 27 [PAGE 14], a swing too large to be explained by defensive positioning alone and likely reflecting goalkeeper form, pressing intensity, and opponent quality. Brentford and Everton reduced concedes while DRSO indicated worse positioning; the authors correctly note save-percentage improvement (Brentford 64/93 to 90/108; Everton 62/92 to 63/90) [PAGE 14–15], which means defensive outcome improved despite positioning deteriorating—or that positioning was not the causal lever. Possession-rate asymmetry further breaks temporal comparability: Everton’s sub-40% possession implies a low-block defensive posture, whereas Manchester City’s over-60% possession generates more opposing attacking third invasions and thus more high-EF-OBSO opportunities [PAGE 13–14]. A multi-week causal claim would require controlling for opponent expected threat, goalkeeper save percentage, defensive-line height, and minutes played per defensive unit—none of which are in the DRSO operator.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under defensive pressure, players do not solve a continuous optimization over grid vertices; they regress to trained habitual shapes (zonal sliding, man-to-man markers, offside-line holding). The DRSO counterfactual assumes a defender can be teleported to the argmax grid vertex [PAGE 10], which presupposes the defender’s crisis habit regresses toward a model-derived optimum rather than toward a pre-drilled tactical pattern. In high-press crises, defenders commonly over-commit toward the ball, leaving far-side channels exposed—a habit regression that DRSO’s single-defender grid search cannot capture because it evaluates one defender at a time against a static maximum-EF-OBSO point [PAGE 9–10].

Counter-trap: Attackers recursively anticipate defensive displacement. If a defending team adopts DRSO-optimal positions, the attacking side can run a counter-trap by dragging the nearest defender out of the grid vertex via a decoy run, then exploiting the vacated vertex with a third-man runner. The paper’s method has no game-theoretic layer: it computes a best response to observed attacker positioning but does not model the attacker’s best response to the defender’s counterfactual relocation [PAGE 9–10]. This creates a fixed-point instability: the “optimal” defender position is only optimal against the observed attack, not against an attack that knows the defender will move there.

Clock: The freeze frame is captured at event start [PAGE 2–3], but the counterfactual relocation assumes the defender can occupy a grid vertex before the shot or pass resolves. Human biomechanics impose a clock: at 4.0–5.0 m/s [PAGE 7], a defender requires non-trivial seconds to traverse a grid cell, during which the ball state evolves. In a 0.8-second shooting window, a vertex 4 meters away is unreachable; DRSO’s grid-vertex enumeration ignores this temporal constraint, producing counterfactuals that violate the event clock. The paper acknowledges this limitation and suggests future work sampling within a speed-based reachable circle rather than fixed vertices [PAGE 15], which is precisely the clock-aware correction the current operator lacks.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The pitch is discretized into 32 × 50 grid cells [PAGE 7]. A standard pitch is approximately 105 m × 68 m, so each cell is roughly 3.28 m × 1.36 m. At the verified average professional speed of 4.47–4.92 m/s [PAGE 7], a defender can cross a cell longitudinally in under one second but may require more than a second laterally. If the event duration from freeze frame to shot is shorter than the traversal time, the counterfactual vertex is physically unreachable and the DRSO recommendation receives a physical veto.

Biomechanical layer: Acceleration and deceleration are not modeled. Condition V fixes all non-actor players at 5.0 m/s toward the goal [PAGE 7], but elite soccer involves repeated sprints with directional changes; a defender moving from the observed position to an optimal vertex must decelerate from prior momentum, change direction, and re-accelerate. The time to reach the vertex therefore exceeds Euclidean distance divided by 5.0 m/s. If the ball arrives at the shot point before the defender can plant and set, the counterfactual position is biomechanically infeasible. This veto is most severe for wide grid vertices requiring lateral recovery, where change-of-direction deficits are largest.

Weather layer: The paper does not model weather, pitch moisture, or grass length, but these variables modulate ball roll speed and player traction. On a wet pitch, ball velocity after a pass increases and player deceleration lengthens, shrinking the reachable set within the event clock. A dry-pitch DRSO optimum that places a defender tightly to intercept a ground pass may be vetoed under rain because the ball arrives earlier and the defender slides past the interception point. Because the dataset spans full EPL seasons across weather regimes [PAGE 2], aggregating DRSO scores without weather stratification conflates defensive positioning with environmental ball control. Any operational use of DRSO must condition on surface state or veto recommendations when traction/roll-speed uncertainty exceeds the grid-cell resolution.

Adjudication: A DRSO counterfactual is admissible only if (i) the vertex is within the defender’s speed-constrained reachable set given the event’s remaining time, (ii) the move does not break the offside line or leave a larger uncovered high-EF-OBSO region elsewhere (team-level coordination veto), and (iii) the weather-adjusted ball arrival time still permits interception. The current algorithm satisfies none of these vetoes explicitly; it is a spatial heuristic, not a physically constrained decision policy.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards (RLVR) counterfactual veto scenarios, each with a falsifiable prediction:

Veto Scenario 1 — Offside-line synchronization. If moving the nearest defender to a DRSO grid vertex places them ahead of the offside line while an attacker remains onside, the counterfactual is vetoed because it creates an onside scoring channel that did not exist in the observed state. Verification: recompute the offside line [PAGE 7] after each vertex displacement; reject any vertex where the defender’s new x-coordinate advances the defensive line beyond the second-last opponent. Prediction: Teams with high defensive-line volatility (e.g., high pressing) will show inflated DRSO improvement potential in the raw algorithm, but the vetoed subset will exhibit no actual reduction in concedes after coaching interventions based on unvetoed DRSO.

Veto Scenario 2 — Goalkeeper-sweeper conflict. When the defensive goalkeeper is outside the penalty area (sweeper-keeper action) or rushing to narrow the angle, a defender moving to a grid vertex that assumes the goalkeeper is on the line may open the near post. Verification: use the visible goalkeeper coordinate in the freeze frame [PAGE 3–5]; if the goalkeeper’s distance to goal line exceeds a threshold (e.g., >6 m), veto all counterfactual defender positions that reduce the vertical compactness between defender and goalkeeper. Prediction: DRSO error (RMSE against actual goals) will be systematically higher in events where the goalkeeper is advanced, because the single-defender counterfactual ignores the keeper’s positional externality [PAGE 4].

Veto Scenario 3 — Fatigue-clock bound. Condition V assumes a constant 5.0 m/s speed [PAGE 7–8], but sprint capacity decays over a match. Verification: partition events by match minute (0–15, 15–30, …, 75–90) and recompute EF-OBSO validation RMSE for condition V in each bin. Prediction: RMSE for condition V will increase monotonically in the final 15 minutes, and DRSO optimal-position recommendations in the 75th–90th minute will show lower correlation with actual defensive outcomes than in the 0–15th minute, verifying that a static speed proxy fails under accumulated fatigue. A clock-aware RLVR reward would scale the reachable vertex set by an elapsed-time fatigue coefficient, nullifying late-game counterfactuals that demand maximal sprinting.
</RLVR_COUNTERFACTUAL_VETOES>