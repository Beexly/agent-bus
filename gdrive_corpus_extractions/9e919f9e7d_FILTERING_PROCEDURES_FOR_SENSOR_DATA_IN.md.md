---
source: "FILTERING_PROCEDURES_FOR_SENSOR_DATA_IN.md"
folder: "/GSE-Research/sports-research-papers/md/randoms"
pages: 14
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3692
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about filtering procedures for sensor data in basketball. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "DRIVE SOURCE" and provided the full text. So I should cite [PAGE N] markers based on the page numbers in the text (133-150).

Let me analyze the content:
- Paper: Metulini (2017), Statistica & Applicazioni Vol XV n.2 pp 133-150
- Topic: Filtering procedures for sensor data in basketball
- Algorithm: 5 steps (1-A, 1-B, 1-C, 2-A, 2-B)
- Data: 3 case studies (CS1, CS2, CS3), Italian Basketball Cup Final Eight, MYagonism accelerometer devices, ~80 Hz, ~90-100 minutes total, 40 minutes active play
- Parameters: h1=10s (free throw circle), h2 velocity threshold km/h, h3 consecutive seconds threshold
- Step 1-A: count players inside court != 5
- Step 1-B: free throw circle, h1=10s consecutive
- Step 1-C: all 5 players velocity < h2 km/h for h3 consecutive seconds
- Step 2-A: avg pos, label O/D/Tr, transition interval [-4,+4]m from half-court line
- Step 2-B: action sorting, transition across [-4,+4]m interval
- Parameter validation: h2 range [8;11], h3 range [1;4], best h2 [9;10], h3 [2;3]
- Chosen parameters: CS1 h2=9, h3=2.5; CS2 h2=9.4, h3=2.5; CS3 h2=10, h3=2.5
- Results: CS1 151 actions, CS2 136 actions, CS3 132 actions
- Action duration 4-38s: 97.4%, 97.8%, 97.0%
- CS1 avg duration 16.00s, median 15.66s
- Distances: defense avg 6.17m (med 5.57m), offense avg 7.96m (med 7.97m)
- Convex hull area: defense mean 32.29m² (med 24.97m²), offense mean 53.46m² (med 51.98m²)
- Velocity: defense mean 5.56 km/h (med 5.10 km/h), offense mean 5.76 km/h (med 5.44 km/h)
- Comparison with USA Olympic and Leonessa Brescia A2

I need to be careful about:
- No betting lines whatsoever.
- Formal LaTeX equations only, no toy ratios.
- Cite page numbers as [PAGE N].
- 1000+ words total across sections.
- THINK_TRACE >= 400 words.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. I should discuss the algorithmic logic, the sensor data pipeline, parameter calibration, missing ball data handling, non-constant frequency handling, the carry-forward imputation, the transition zone definition, the robustness checks, gray zones like the 4-38 second action duration rule, the 8 km/h walking threshold assumption, the single-team trajectory limitation, half-time court switch, etc. This needs to be >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations. I should write out:
- Velocity: \( \text{vel}_{p1} = \sqrt{(\text{vel}_{p1,x})^2 + (\text{vel}_{p1,y})^2} \)
- Average position: \( \text{avg pos}_x = \sum_{i=1}^5 \text{pos}_{pi,x} \), etc. Wait the paper seems to have typos with 5 vs n. I'll use their notation but formalize.
- Count variable: \( c_t = \sum_{i=1}^k \mathbb{1}[(x_{i,t}, y_{i,t}) \in \mathcal{C}] \), drop if \( c_t \neq 5 \).
- Free throw: \( f_t = \mathbb{1}[\exists i: (x_{i,t}, y_{i,t}) \in \mathcal{F}] \), drop if \( f_{t-h_1+1:t} = 1 \) for \( h_1 = 10 \) s.
- Step 1-C: drop if \( \max_i \text{vel}_{i,t} < h_2 \) for \( h_3 \) consecutive seconds, \( h_2 \in [8,11] \) km/h, \( h_3 \in [1,4] \) s.
- Transition zone: \( \text{avg pos}_x \in [-4, +4] \) m from half-court.
- Action increment condition: crossing transition zone.
- Units: ms for time, m for position, m/s for velocity (converted to km/h in reporting), m² for convex hull area.
- Page citations for each.

<RETROCAUSAL_GENEALOGY>: Historical lineage: ecological dynamics (Travassos et al. 2013; Araujo & Davids 2016), HAR (Trabelsi et al. 2013), golf swing (Huang et al. 2012), game segmentation (Jiang et al. 2004), Wu & Bornn (2017) comparison, Stein et al. 2017 data acquisition review, Carpita et al. football, Passos et al. water polo centrality, Metulini 2017 visualization, Metulini et al. 2017 sensor analytics. Multi-week traps: parameter drift across games, sensor dropout imputation bias, non-constant sampling frequency aliasing, half-time side switch confounding action labels, single-team observability causing opponent free throws to be caught by 1-C rather than 1-B.

<RECURSIVE_THEORY_OF_MIND>: This is a weird section title but I need to interpret it. "Crisis habit regression vs counter-trap vs clock." I should discuss how coaches/players regress to habits under crisis (end of clock, close score), how the algorithm's action segmentation might mislabel crisis possessions, the 4-38 second window (38s due to 14s reset + offensive rebound), the shot clock/pressure effect on velocity distributions, and how filtering parameters might systematically drop or retain end-of-period inactivity. Also the "clock" as game clock vs sensor clock (ms). Crisis habit regression: teams under pressure may slow down (vel < h2) causing false inactivity drops. Counter-trap: algorithm might interpret tactical stalling as inactive. Clock: 40 min active vs 90-100 min sensor recording, 4-38s action duration.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Since this is indoor basketball, weather veto is minimal but HVAC/court conditions could affect sensor. Physical: court dimensions (hoop 46cm diameter, 3.05m height), player count=5, free throw circle geometry. Biomechanical: walking threshold 8 km/h (~2.22 m/s), running threshold, jumping z-axis dropped (not useful), acceleration dropped. Veto conditions: if sensor frequency drops below Nyquist for player movement, if court coordinates leave [0,28]x[0,15] (FIBA court approx 28x15m), if more than 5 players detected (sensor ghosting), if velocity > physiological sprint limit (~35 km/h). Need to frame as veto proof: conditions under which the algorithm output should be vetoed.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? I need to construct 3 scenarios where the algorithm would fail or be vetoed, with verifiable conditions and predictions. Examples:
1. Sensor dropout > X ms causing carry-forward imputation to create artificial static clusters -> false 1-C trigger -> veto if gap > h3 seconds.
2. Overtime or extra periods beyond 40 min -> algorithm expects 40 min, reduced matrix longer -> veto if total active time > 42 min.
3. Full-court press / trap defense where all 5 offensive players slow below 8 km/h while setting up -> false inactivity drop -> veto if avg pos_x in offensive half but vel < h2 for h3.
4. Maybe ball not available but opponent free throw -> 1-B misses, 1-C catches if players standing still.

I need 3 verifiable scenarios with predictions.

Word count: Need >=1000 words total. THINK_TRACE >=400 words.

Let me write carefully. I must not mention betting lines. I must not invent fake ratios. I must use formal LaTeX.

Let's draft.

Page citations: The text has page numbers 133-150. I will cite like [PAGE 134], [PAGE 136], etc.

Specific quotes:
- "data are detected with a non-constant frequency" [PAGE 135]
- "the only information available is that from GPS devices" [PAGE 135] (actually says GPS but uses accelerometer, paper says GPS techniques earlier)
- "h2 lies in the interval [9;10] and h3 lies in the interval [2;3]" [PAGE 143]
- "4-38 seconds" footnote [PAGE 146]
- "151 actions for CS1, 136 actions for CS2 and 132 for CS3" [PAGE 146]
- etc.

Let me construct the response now. I'll make sure each XML section is present and substantial.

I need to watch out: The user said "DRIVE SOURCE" and gave pages 14, but the text covers pages 133-150 (18 pages?). Anyway, I'll cite from the provided page numbers.

Let's write.

THINK_TRACE: I'll discuss multi-hop derivation from raw sensor matrix to labeled actions, gray-zone audit around parameter h2/h3, the 8 km/h walking assumption, imputation of missing player records, non-constant frequency, single-team observability, transition band [-4,+4]m, half-time side switch, action duration window [4,38]s, robustness vs play-by-play. I'll aim for ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math with units and page cites.

RETROCAUSAL_GENEALOGY: Lineage and traps.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression, counter-trap, clock.

CROSS_LAYER_VETO_ADJUDICATION: Veto conditions.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Total word count should exceed 1000. Let's ensure each section is long enough.

I'll write it now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s pipeline transforms a raw, non-uniform sensor stream into a semantically labeled, action-sorted matrix through five sequential filtering operations. Raw input X is defined over milliseconds with per-player positioning and velocity along court length x and width y; because accelerometer triggers are aperiodic and players may be undetected at specific instants, the preprocessing layer performs last-value carry-forward imputation so that every row contains a value for all k players [PAGE 135]. This is the first gray zone: carry-forward converts missingness into apparent stasis, which directly feeds step 1-C’s velocity-threshold test. If a player’s device drops out for longer than h3 consecutive seconds, the imputed position is held constant and velocity is computed as zero, potentially fabricating an “all five players below h2 km/h” interval that never occurred biomechanically.

Step 1-A enforces court occupancy c_t = 5 by summing binary indicators that each player’s coordinates lie within the court polygon [PAGE 136]. This removes pre-game, post-game, timeouts, and intermissions but cannot resolve fouls, inbounds sequences, or substitutions because five players may remain on court while play is dead [PAGE 136]. Step 1-B targets free throws by detecting occupancy of the free-throw circle for h1 = 10 consecutive seconds [PAGE 136]; however, since trajectories are captured for only one team, opponent free throws evade this filter and must be captured by step 1-C [PAGE 136]. Step 1-C therefore carries the heaviest inferential load: it drops rows where max_i vel_{i,t} < h2 for h3 consecutive seconds. The authors justify h2 > 8 km/h because a walking player does not exceed 8 km/h, and h3 > 1 s because active moments can briefly feature no running [PAGE 137]. Contour validation over h2 ∈ [8,11] km/h and h3 ∈ [1,4] s across three case studies identifies a stable sweet spot of h2 ∈ [9,10] km/h and h3 ∈ [2,3] s [PAGE 143]. The final selected values—CS1 (9, 2.5), CS2 (9.4, 2.5), CS3 (10, 2.5) km/h·s—reveal game-specific drift, meaning no universal parameter pair exists without recalibration [PAGE 144].

The second half of the algorithm assigns offensive/defensive/transition labels via avg pos_x = (1/5)Σ pos_{pi,x}, with transition defined as avg pos_x ∈ [+4, −4] m relative to the half-court line [PAGE 139]. Action increment occurs only when avg pos_x crosses this ±4 m transition band between consecutive rows [PAGE 140]. A correction is applied for the half-time court-side switch [PAGE 140]. The robustness audit compares algorithm outputs against play-by-play aggregations for USA (Olympics) and Leonessa Brescia (A2), finding median action durations of 14 s and 16 s, respectively, and action counts consistent with the case studies [PAGE 147–148]. Remaining gray zones include the 4–38 s “reasonable” action-duration window (the 38 s upper bound incorporates the 14 s post-foul reset and offensive-rebound possession rules) [PAGE 146], the exclusion of z-axis and acceleration variables despite their potential to distinguish jumping from standing still [PAGE 142], and the single-team observability constraint that makes the labeler blind to opponent possession structure except through velocity stasis [PAGE 136].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Let the raw sensor matrix be X ∈ ℝ^{T×(1+4k)}, where each row t corresponds to a time stamp t_ms ∈ ℝ⁺ measured in milliseconds (ms), sorted such that t_ms < t_{ms+1} [PAGE 135]. For each player i ∈ {1,…,k}, the row contains pos_{i,x} [m], pos_{i,y} [m], vel_{i,x} [m/s], vel_{i,y} [m/s]; the paper converts reported velocity to km/h in descriptive statistics [PAGE 145].

Speed magnitude for player i at time t is defined as
v_{i,t} = √(vel_{i,x,t}² + vel_{i,y,t}²) [m/s],
which the paper expresses in km/h via multiplication by 3.6 [PAGE 137].

Step 1-A defines a court-membership indicator
𝟙_{i,t} = 1 if (pos_{i,x,t}, pos_{i,y,t}) ∈ 𝒞, else 0,
where 𝒞 ⊂ ℝ² is the court polygon. The row-level count is c_t = Σ_{i=1}^k 𝟙_{i,t}. Rows with c_t ≠ 5 are deleted [PAGE 136]. Breakdown: if sensor ghosting registers a sixth player inside 𝒞 due to reflected signal or bench encroachment, valid active play is erroneously dropped.

Step 1-B defines a free-throw-circle indicator
ft_t = 1 if ∃i : (pos_{i,x,t}, pos_{i,y,t}) ∈ ℱ,
where ℱ is the free-throw circle. If ft_{t-h1+1:t} = 1 continuously for h1 = 10 s, all corresponding rows are removed [PAGE 136]. Breakdown: opponent free throws are invisible because ℱ occupancy by the tracked team is the only trigger [PAGE 136].

Step 1-C deletes rows where max_{i∈{1,…,5}} v_{i,t} < h2 [km/h] for h3 consecutive seconds [PAGE 137]. Calibration ranges are h2 ∈ [8,11] km/h and h3 ∈ [1,4] s [PAGE 143]; selected operating points are (h2,h3) = (9, 2.5), (9.4, 2.5), and (10, 2.5) [km/h, s] for CS1–CS3 [PAGE 144]. Singularity: when v_{i,t} is computed from carry-forward-imputed coordinates during sensor dropout, v_{i,t} = 0 regardless of true player motion, causing false-positive inactivity deletion if dropout persists ≥ h3.

Step 2-A computes average position
avg pos_t = (1/5)(Σ_{i=1}^5 pos_{i,x,t}, Σ_{i=1}^5 pos_{i,y,t}) [m],
and labels each row O (offense), D (defense), or Tr (transition), where transition is avg pos_x ∈ [−4,+4] m from the half-court line [PAGE 139]. A post-half-time correction flips court-side reference because teams exchange ends [PAGE 140].

Step 2-B assigns act_id_t ∈ ℕ⁺ such that act_id increments by 1 only when avg pos_x crosses the [−4,+4] m transition band between t−1 and t [PAGE 140].

Validation metrics reported: action counts N_actions = 151 (CS1), 136 (CS2), 132 (CS3) [PAGE 146]; fraction of actions with duration d ∈ [4,38] s: 147/151 (97.4%), 133/136 (97.8%), 128/132 (97.0%) [PAGE 146]. CS1 action-duration statistics: mean 16.00 s, median 15.66 s; 23.18% < 10 s, 50.33% ∈ [10,20] s, 26.49% > 20 s [PAGE 146]. Spatial descriptors: offensive avg distance among teammates d̄_avg = 7.96 m (median 7.97 m) vs defensive 6.17 m (median 5.57 m) [PAGE 144]; convex hull area A_hull = 53.46 m² offense (median 51.98 m²) vs 32.29 m² defense (median 24.97 m²) [PAGE 144]; mean velocity v̄_avg = 5.76 km/h offense vs 5.56 km/h defense [PAGE 145]. External benchmarks: USA Olympic median action duration 14 s; Leonessa Brescia median 16 s; 150–170 actions per game for USA in 7/8 contests [PAGE 147–148].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper positions itself within Human Activity Recognition (HAR), citing Trabelsi et al. (2013) on unsupervised activity recognition via hidden Markov regression, and situates basketball within ecological dynamics (Travassos et al., 2013; Araújo and Davids, 2016), where continuous coach–player–team interactions generate high-dimensional complexity [PAGE 134]. It explicitly parallels Wu and Bornn (2017), who process ball and player trajectories, but claims novelty by operating when ball trajectory is unavailable [PAGE 134, 150]. Earlier sport-specific segmentation work includes Jiang et al. (2004) for playfield segmentation in sports video and Jordan, Melouk, and Perry (2009) for football play-calling via design of experiments [PAGE 134]. The data-acquisition lineage traces to Stein et al. (2017), who review team-sport data from acquisition through modeling [PAGE 134], and to Metulini (2017) on spatio-temporal visualization with motion charts [PAGE 141, References].

Multi-week traps embedded in this lineage include parameter non-stationarity: because h2 and h3 optima drift across CS1–CS3 (9 vs 9.4 vs 10 km/h), a model trained in week 1 of a tournament will misfilter week 3 unless recalibrated per game or per team style [PAGE 143–144]. Sensor dropout and last-value imputation create autocorrelated false stasis that accumulates over a 90–100 minute recording window, biasing the 40-minute active-play target downward in games with poor radio coverage [PAGE 135, 137]. Single-team observability means opponent tactical actions (e.g., opponent free throws, opponent slow-down offense) are only indirectly inferred through the tracked team’s velocity, producing systematic label errors when the tracked team is defending a stationary opponent [PAGE 136]. The half-time court-side switch introduces a non-stationary coordinate transform; if the correction flag fails, offense/defense labels and action boundaries invert after minute 20 [PAGE 140]. Finally, the 4–38 second “reasonable” window assumes standard possession rules; overtime, shot-clock resets, or rule variations (e.g., 14 s after foul) shift the duration distribution and inflate false rejection of valid long actions [PAGE 146, footnote 3].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock. Under end-of-period clock pressure, teams exhibit habit regression: offenses slow tempo to protect a lead or execute structured end-of-game sets, while defenses may drop into stationary formations. Biomechanically, this produces intervals where all five tracked players move below h2 = 9–10 km/h for h3 = 2.5 s or longer. The algorithm’s step 1-C will then classify crisis stasis as inactive and delete the rows, systematically removing the highest-leverage possessions from the reduced matrix. The counter-trap is that a pressing defense may intentionally force the offense into low-velocity ball-reversal patterns; if the tracked team is the pressing side, its own players may legitimately hover near walking speed while maintaining active defensive pressure. Step 1-C cannot distinguish tactical stasis from dead-ball inactivity, so it deletes active defensive possessions, creating a false-negative label error at precisely the moments coaches most need advanced statistics.

The clock operates on two layers: the sensor clock (ms timestamps spanning 90–100 minutes of wall-clock recording) and the game clock (40 minutes of active play across four 10-minute periods, plus breaks) [PAGE 134–135]. The algorithm’s objective is to reduce the sensor timeline to the game timeline, but it has no direct access to the game clock or shot clock. Therefore, timeout stoppages, referee whistles, and injury stoppages are inferred solely from kinematic thresholds. In close games with frequent whistles in the final two minutes, the frequency of sub-h2 velocity clusters increases, and the h3 = 2.5 s buffer may be insufficient to separate short active inbounds plays from inactivity, causing over-segmentation or under-segmentation of action boundaries near the [−4,+4] m transition band [PAGE 137, 140]. Recursively, coaches who observe the algorithm’s output may adjust substitutions or timeouts knowing that static defensive sets risk deletion, inducing a second-order behavioral adaptation where teams avoid prolonged low-velocity formations to remain visible to the sensor pipeline.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. FIBA court dimensions are rectangular; hoop diameter 46 cm, rim height 3.05 m; match length 40 minutes in four 10-minute periods [PAGE 134]. A valid row must satisfy pos_{i,x} ∈ [0,L_c] and pos_{i,y} ∈ [0,W_c] for all i on court, where L_c ≈ 28 m and W_c ≈ 15 m under FIBA. Veto: if any retained row after step 1-A reports coordinates outside the court polygon for a player flagged as present, the entire matrix X is vetoed because court calibration or GPS/accelerometer registration has failed.

Biomechanical layer. The walking threshold h2 > 8 km/h ≈ 2.22 m/s is justified because walking does not exceed 8 km/h [PAGE 137]. Elite basketball sprint velocity can exceed 30 km/h. Veto: if max_i v_{i,t} > 35 km/h for any t, the sensor signal is physically implausible for human locomotion and the row (or device) is vetoed. Conversely, if the z-axis (jump height) and acceleration are dropped before filtering—as the paper does [PAGE 142]—the pipeline cannot distinguish a player jumping in place (active, zero horizontal velocity) from a player standing still (possibly inactive). Veto: any game in which jump-ball or rebound sequences are known to occur but horizontal velocity remains < h2 for h3 seconds should be vetoed unless vertical or acceleration channels are reinstated.

Environmental layer. Games are indoor, so meteorological weather is not a direct veto. However, the accelerometer system relies on machines built around the court and microchips worn by players [PAGE 141]. Radio interference, court-side metal structures, or multipath reflection can produce non-constant detection frequency and missing players [PAGE 135]. Veto: if the inter-arrival time between sensor records exceeds 2·h3 seconds for any player, the carry-forward imputation horizon is breached and the velocity time series is unreliable; the affected game segment is vetoed.

Adjudication order: physical coordinate veto → environmental dropout veto → biomechanical implausibility veto → algorithmic output. Only if all three layers pass is the reduced matrix accepted for advanced statistics.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards (RLVR) veto scenarios, each with a verifiable condition and a prediction.

Scenario 1 — Sensor dropout masquerading as inactivity.
Verifiable condition: For some player i, the gap between consecutive raw timestamps exceeds Δt > h3·1000 ms (e.g., > 2500 ms when h3 = 2.5 s) during a period when play-by-play confirms active possession.
Prediction: The carry-forward imputation will set vel_{i,t} = 0 across the gap. If all five players simultaneously exhibit gaps > h3, step 1-C will delete a contiguous block of rows corresponding to live play. Verifiable reward: the veto triggers and the predicted outcome is a false-negative reduction in active minutes below the 40-minute target, detectable by comparing reduced-matrix ms span against official game clock.

Scenario 2 — Opponent free throw not captured by step 1-B.
Verifiable condition: Play-by-play logs an opponent free throw while the tracked team’s players remain inside the court and within 4 m of the half-court line, with tracked-team velocity < h2 for h3 seconds.
Prediction: Step 1-B only fires when a tracked-team player occupies the free-throw circle [PAGE 136], so the opponent free throw survives 1-B. Step 1-C deletes the rows because all tracked players are below h2 for h3 seconds [PAGE 137]. Verifiable reward: the veto triggers because action count and total active time are undercounted relative to play-by-play; specifically, the reduced matrix loses the free-throw interval and the adjacent transition, biasing action duration downward.

Scenario 3 — Crisis end-of-quarter habit regression.
Verifiable condition: In the final 90 seconds of a period, the tracked team’s offense holds the ball in the frontcourt with velocity below h2 = 9 km/h for h3 = 2.5 s while executing a structured set play confirmed by video or event log.
Prediction: Step 1-C deletes the low-velocity possession as inactive [PAGE 137], despite play-by-play marking it active. Verifiable reward: the veto triggers because the removed interval coincides with a scored or turnover event in the play-by-play log; the algorithm’s action boundary shifts earlier than the actual possession end, and the convex hull area and average distance metrics for that action are corrupted by missing end-of-clock rows.
</RLVR_COUNTERFACTUAL_VETOES>