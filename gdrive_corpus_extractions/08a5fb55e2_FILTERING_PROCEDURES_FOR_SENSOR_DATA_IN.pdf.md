---
source: "FILTERING_PROCEDURES_FOR_SENSOR_DATA_IN.pdf"
folder: "/GSE-Research/sports-research-papers/randoms"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5500
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "Filtering Procedures for Sensor Data in Basketball" by Rodolfo Metulini. They want a very specific format with XML sections and strict invariants.

 Let me break down the requirements:

 1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
 2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
 3. >= 1,000-WORD DEPTH across exact XML sections:
    - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
    - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
    - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
    - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
    - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
    - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

 The source is provided as pages 1-18. I need to cite exact [PAGE N] markers and verbatim quotes.

 Let me carefully analyze the paper:

 Key content:
 - Page 1: Introduction, basketball data processing, two kinds of data (play-by-play event-log and sensor data), GPS techniques.
 - Page 2: Basketball rules - FIBA, 40 minutes, 4 periods of 10 minutes, hoop 46 cm diameter at 3.05 meters height.
 - Page 3: Algorithm overview. Data matrix X, rows = sensor records, time in milliseconds. Variables pos and vel for each player p1...pk along x (court length) and y (court width). Non-constant frequency. Data for different players at different time instants. Attribute last datum to players not detected.
   Step 1: Remove rows based on three criteria.
   Step 2: Assign actions' sorting and labeling.
 - Page 4: Step 1-A: drop rows where number of players in court != 5. Creates 0/1 variables for each player, count = row sum. Remove if count != 5.
   Step 1-B: drop free throw moments. ft variable = 1 when at least one player's coordinates inside free throw circle. Player shooting free throw if remains inside circle for at least h1 = 10 consecutive seconds. Drop rows when ft = 1 for at least 10 seconds.
   Step 1-C: drop moments where all five players velocity < h2 km/h for at least h3 seconds. h2 > 8 km/h (walking player doesn't exceed 8 km/h). h3 > 1 second (active moments lower than 1 second where nobody running).
   Velocity formula: velp1 = sqrt(velp1_x^2 + velp1_y^2)
 - Page 5: h2 feasible range > 8 km/h. h3 feasible range > 1 second.
   Figure 1 flowchart.
 - Page 6: Figures 2 and 3.
 - Page 7: Step 2-A: avg pos vector [avg posx, avg posy], avg posx = sum(pospi_x)/5, avg posy = sum(pospi_y)/5. Labels O (offense), D (defense), Tr (transition). Transition = avg posx in interval [+4, -4] meters from half-court line.
 - Page 8: Step 2-B: action id. Row with smallest ms = action 1. Action increases by 1 if avg posx passes from one side to other, crossing transition area [+4,-4] m from half-court line. Footnote: teams change court side after half-time.
 - Page 9: Empirical application. Three games CS1, CS2, CS3. Italian Basketball Cup Final Eight. MYagonism system. Accelerometer devices. Microchip connected to machines around court. Position in pixels of 1 cm^2 size in x, y, z axes. Average frequency about 80 Hz. Initial data matrices contain positioning, velocity, acceleration during full game length.
 - Page 10: Data processing. CSV files, each single player single game. Converted to .xls, renamed. .txt files with label, ms, value, names, team. Output file reports positioning, acceleration, velocity in x,y,z for each ms where at least one player captured. Data refer to most recent available ms if player not tracked. z-axis and acceleration dropped. Time and id variables created. Reshaped so each player's variables in column. Positioning in meters:centimeters from half-court line, velocity in m/s.
   Additional variables: dij = sqrt((pospi_x - pospj_x)^2 + (pospi_y - pospj_y)^2), missing if at least one player on bench. davg = average distance. con hull = convex hull area. velavg = sum(veli)/5.
 - Page 11: Parameter validation. Aim to reduce to 40 minutes. Explore combinations h2 and h3. Minutes computed comparing ms in consecutive rows (ms_t - ms_{t-1}). Range [8;11] for h2, [1;4] for h3. Game length increases with h3, decreases with h2. Similar evidence across CS. h2 in [9;10], h3 in [2;3].
 - Page 12: Figure 6 contour plots for CS1, CS2, CS3. h2 (km/h) vs h3 (seconds). Contours show effective minutes.
 - Page 13: Results. Choose h2=9 km/h and h3=2.5s for CS1; h2=9.4 km/h and h3=2.5s for CS2; h2=10 km/h and h3=2.5s for CS3.
   davg: defense mean 6.17 m, median 5.57 m; offense mean 7.96 m, median 7.97 m (CS1 example).
   Convex hull area: defense mean 32.29 m^2, median 24.97 m^2; offense mean 53.46 m^2, median 51.98 m^2.
 - Page 14: velavg: defense mean 5.56 km/h, median 5.10 km/h; offense mean 5.76 km/h, median 5.44 km/h. 25% defensive moments > 6.71 km/h, 25% offensive > 7.07 km/h.
   Number of actions: 151 for CS1, 136 for CS2, 132 for CS3.
   Robustness: actions lasting 4-38 seconds. CS1: 147/151 (97.4%). CS2: 133/136 (97.8%). CS3: 128/132 (97.0%).
   Footnote 3: 38 seconds due to new rule giving 14 additional seconds after a foul, double ball possession after offensive rebound.
   Average duration CS1: 16.00 seconds, median 15.66. 23.18% < 10s, 50.33% 10-20s, 26.49% > 20s.
 - Page 15: Validation against play-by-play from 2016 FIBA Olympics and 2015-2016 Italian A2. USA national team and Leonessa Brescia.
   Team USA median 14s, Leonessa Brescia median 16s.
   <10s: 31.60% USA, 27.50% Brescia. >20s: 19.40% USA, 25.20% Brescia. 10-20s: 49.00% USA, 47.30% Brescia.
   Number of actions: Brescia 140-150 actions 17/29 times (58.62%). USA 150-170 actions 7/8 times (87.5%).
 - Page 16: Conclusions.
 - Page 17-18: References.

 Now I need to write the response. Since the user didn't provide a specific question, I should provide a comprehensive analysis of the paper following the exact XML structure. The user said "DRIVE SOURCE" which suggests they want me to process this source document through the GSE + GSI framework.

 I need to make sure:
 - No betting lines mentioned.
 - No toy equations. Use real LaTeX from the paper.
 - Word count >= 1000 total across sections.
 - THINK_TRACE >= 400 words.
 - Exact [PAGE N] citations and verbatim quotes.

 Let me plan each section:

 <THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Discuss the algorithm's logic chain, parameter interdependence (h2/h3), the missing ball trajectory problem, the free throw detection logic, the offense/defense labeling via centroid, action segmentation via centroid crossing half-court, gray zones (non-constant sampling frequency, imputation of last known position, one-team-only tracking limitation), 40-minute target vs 90-100 minute raw capture, the 8 Hz sampling, singularity regimes (player count != 5, all players stationary, free throw circle dwell). Must be >= 400 words.

 <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations from the paper. Define X matrix, pos/vel variables, count variable, ft variable, velocity norm, average position, action id increment condition, dij, davg, con hull, velavg. Units: ms, m, m/s, km/h, m^2. Page citations [PAGE 3], [PAGE 4], etc. Breakdown of parameter ranges h2 in [8,11], h3 in [1,4], chosen h2 in [9,10], h3 in [2,3]. Exact singularity/breakdown regimes: non-constant frequency, missing ball trajectory, one team only, bench players.

 <RETROCAUSAL_GENEALOGY>: Historical lineage: ecological dynamics (Travassos et al. 2013; Araujo & Davids 2016), Gudmundsson & Horton (2017) review, Carpià et al. (2013, 2015) football mining, Passos et al. (2011) water polo centrality, Stein et al. (2017) data review, Wu & Bornn (2017) ball/player trajectories, Trabelsi et al. (2013) HAR, Huang et al. (2012) golf swing, Jiang et al. (2004) game segmentation, Jordan et al. (2009) football play calling, Metulini (2017) motion charts, Metulini et al. (2017) sensor analytics. Multi-week traps: parameter drift across games, sampling frequency decay, sensor dropout, half-court side switch after halftime, transition zone ambiguity.

 <RECURSIVE_THEORY_OF_MIND>: This is a bit abstract but I need to interpret it as crisis habit regression vs counter-trap vs clock. Crisis habit regression: teams reverting to low-velocity stagnation (all players < h2) triggering false inactive drops. Counter-trap: opponent exploiting free throw circle or stationary periods to manipulate segmentation. Clock: 40-minute FIBA clock vs 90-100 minute raw sensor capture, 4-38 second action window, 10-second free throw rule, h3 > 1 second. Discuss how the algorithm's "habit" of filtering creates regression to the mean in action duration.

 <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical: court dimensions (28x15m implied by half-court line and positions), hoop 3.05m, 46cm diameter [PAGE 2]. Biomechanical: walking threshold 8 km/h [PAGE 4], velocity means 5.56/5.76 km/h [PAGE 14], jump z-axis dropped [PAGE 10]. Weather: indoor basketball, no weather veto applicable, but sensor frequency 80 Hz [PAGE 9], non-constant frequency [PAGE 3]. Veto conditions: if player count != 5, if free throw dwell >= 10s, if all velocities < h2 for h3 seconds.

 <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
   Scenario 1: Sensor dropout causes player count < 5 for > h3 seconds during active play. Prediction: algorithm drops valid active rows, undercounting actions.
   Scenario 2: h2 set below 8 km/h (e.g., 7 km/h). Prediction: walking players during offensive sets incorrectly classified as inactive, fragmenting actions.
   Scenario 3: Free throw shooter from opponent team (not tracked) while tracked team's players wander near circle. Prediction: ft variable misses opponent free throws, but step 1-C catches stationary periods; however if tracked team moves > h2 during opponent free throw, inactive moment retained, inflating action count.

 Need to ensure total words >= 1000. THINK_TRACE alone needs >= 400. I'll write substantial content in each.

 Let me start drafting carefully, ensuring verbatim quotes with [PAGE N] markers.

 Verbatim quotes to use:
 - [PAGE 2]: "The objective is to shoot a ball through a hoop 46 centimetres in diameter and mounted at a height of 3.05 meters to backboards at each end of the court. According to International Basketball Federation (FIBA) rules, the match lasts 40 minutes, divided into four periods of 10 minutes each."
 - [PAGE 3]: "The algorithm applies to a data matrix X where each row corresponds to a sensor record, described by the variables time (in milliseconds, ms). X should be sorted from the smallest ms to the largest ms."
 - [PAGE 3]: "It is important to clarify that, with the accelerometer, data are detected with a non-constant frequency; in addition, data of different players are recorded at different time instants."
 - [PAGE 4]: "velp1 = sqrt(vel^2 p1 x + vel^2 p1 y)" (need to format properly)
 - [PAGE 4]: "h1 = 10 consecutive seconds"
 - [PAGE 4]: "a walking player does not exceed 8 km=h"
 - [PAGE 4]: "h3, a feasible range for this parameter is larger than 1, as there could be active moments (lower than 1 second) where nobody is running."
 - [PAGE 7]: "avg posx = sum_{i=1}^5 pospi_x / 5 and avg posy = sum_{i=1}^5 pospi_y / 5"
 - [PAGE 7]: "The algorithm also labels transition, that corresponds to those moments having avg posx in the interval [+4,-4] meters (m) from the half-court line."
 - [PAGE 8]: "act id increases by 1 only if avg posx, from t to t + 1, passes over the transition area represented by the interval [+4,-4] meters from the half-court line"
 - [PAGE 9]: "Data have been detected with an average frequency of about 80 Hz."
 - [PAGE 10]: "Positioning is expressed in meters:centimeters from the half-court line, while velocity is expressed in meters per seconds (m=s)."
 - [PAGE 11]: "Consistently over the three CS, the algorithm performs better when h2 lies in the interval [9;10] and h3 lies in the interval [2;3]."
 - [PAGE 13]: "In defense, the average distance among payers reports a mean of 6.17 m and a median of 5.57 m. In offense, the average distance reports a mean of 7.96 m and a median of 7.97 m."
 - [PAGE 13]: "In defense, the convex hulls area reports a mean of 32.29 m2 and a median of 24.97 m2. In offense, the convex hulls area reports a mean of 53.46 m2 and a median of 51.98 m2."
 - [PAGE 14]: "In defense, the players’ velocity reports a mean of 5.56 km=h and a median of 5.10 km=h. In offense, the players’ velocity reports a mean of 5.76 km=h and a median of 5.44 km=h."
 - [PAGE 14]: "The algorithm splits the games in a number of 151 actions for CS1, 136 actions for CS2 and 132 for CS3."

 I need to be careful with LaTeX formatting. The user wants formal LaTeX equations.

 Let me draft the response now.

 Structure:
 [No intro outside XML? The user wants exact XML sections. I should probably just output the XML sections. But maybe a brief wrapper? The instructions say "across these exact XML sections". I'll output exactly the six XML sections in order.]

 Let me write each section.

 THINK_TRACE (>=400 words):
 - Start with data ingestion: raw matrix X, time in ms, non-constant 80 Hz average, one-team-only tracking.
 - Multi-hop: raw capture (90-100 min) -> target (40 min active). Three filtering criteria chained.
 - Criterion 1-A: player count == 5. Removes pre/post match, timeouts, quarters.
 - Criterion 1-B: free throw circle dwell h1=10s. Removes free throws by tracked team.
 - Criterion 1-C: all five vel < h2 for h3 seconds. h2>8 km/h (walking threshold), h3>1s. Removes fouls, inbounds, substitutions, opponent free throws.
 - Gray zone 1: imputation of last known position for missing players creates phantom stationarity or phantom motion.
 - Gray zone 2: one-team-only tracking means opponent free throws invisible to 1-B; relies on 1-C which requires ALL five tracked players stationary, but opponents may move while tracked team sets up.
 - Gray zone 3: transition zone [+4,-4] m around half-court for offense/defense labeling and action increments. Ambiguous during fast breaks crossing half-court.
 - Gray zone 4: half-court side switch after halftime (footnote 2) means avg posx sign flips, potentially creating phantom action boundary if not corrected.
 - Parameter coupling: h2 and h3 are not independent. Increasing h3 increases retained minutes; increasing h2 decreases retained minutes. Validation contour plots show feasible region h2 in [9,10], h3 in [2,3]. Singularity: if h2 <= 8, walkers classified as running; if h3 <= 1, genuine micro-pauses split actions.
 - 40-minute clock constraint vs 80 Hz sampling: temporal aliasing risk if ms gaps large.
 - Word count check: needs to be substantial.

 SOURCE_OPERATORS_AND_EQUATIONS:
 - Define X ∈ R^{T × (1 + 4k)} where columns: ms, then for each player p_i: pos_{p_i,x}, pos_{p_i,y}, vel_{p_i,x}, vel_{p_i,y}. [PAGE 3]
 - Indicator I_{p_i}(t) = 1 if (pos_{p_i,x}(t), pos_{p_i,y}(t)) inside court polygon else 0. [PAGE 4]
 - count(t) = Σ_{i=1}^k I_{p_i}(t). Retain iff count(t) = 5. [PAGE 4]
 - ft(t) = 1 if ∃ i: (pos_{p_i,x}(t), pos_{p_i,y}(t)) ∈ free throw circle. Drop if ft(t)=1 for ≥ h1=10 consecutive seconds. [PAGE 4]
 - ‖vel_{p_i}(t)‖₂ = √(vel²_{p_i,x}(t) + vel²_{p_i,y}(t)). [PAGE 4]
 - Drop if ‖vel_{p_i}(t)‖₂ < h2 ∀ i ∈ {1..5} for ≥ h3 consecutive seconds. [PAGE 4]
 - avg pos(t) = [ (1/5)Σ pos_{p_i,x}(t), (1/5)Σ pos_{p_i,y}(t) ]. [PAGE 7]
 - Label: O if avg pos_x > +4; D if avg pos_x < -4; Tr if avg pos_x ∈ [-4, +4]. [PAGE 7]
 - act id increment: id(t) = id(t-1) + 1 iff sign(avg pos_x(t-1)) ≠ sign(avg pos_x(t)) AND crossing transition interval [-4,+4]. [PAGE 8]
 - Pairwise distance: d_{ij} = √((pos_{p_i,x} - pos_{p_j,x})² + (pos_{p_i,y} - pos_{p_j,y})²), missing if bench. [PAGE 10]
 - davg = (1/(n²-n)) Σ d_{ij}. [PAGE 10]
 - con hull = area of convex hull of 5 positions. [PAGE 10]
 - velavg = (1/5) Σ ‖vel_{p_i}‖. [PAGE 10]
 - Units: ms, m, m/s (converted to km/h in reporting), m². [PAGE 3, 10]
 - Parameter sweep: h2 ∈ [8,11] km/h, h3 ∈ [1,4] s. Selected: CS1 h2=9, h3=2.5; CS2 h2=9.4, h3=2.5; CS3 h2=10, h3=2.5. [PAGE 11, 13]
 - Breakdown/singularity: non-constant sampling, bench players, missing ball trajectory, half-time side switch.

 RETROCAUSAL_GENEALOGY:
 - Cite Travassos et al. 2013, Araujo & Davids 2016 ecological dynamics [PAGE 1].
 - Gudmundsson & Horton 2017 spatio-temporal review [PAGE 1].
 - Carpià et al. 2013/2015 football data mining [PAGE 1-2].
 - Passos et al. 2011 water polo centrality [PAGE 2].
 - Stein et al. 2017 data modeling [PAGE 2].
 - Wu & Bornn 2017 ball/player trajectories; this paper differs by working without ball data [PAGE 2].
 - Trabelsi et al. 2013 HAR via HMM regression [PAGE 2].
 - Huang et al. 2012 golf swing IMU [PAGE 2].
 - Jiang et al. 2004 game segmentation [PAGE 2].
 - Jordan et al. 2009 football play calling [PAGE 2].
 - Metulini 2017 motion charts [PAGE 9-10].
 - Metulini, Manisera, Zuccolotto 2017 sensor analytics in basketball [PAGE 13].
 - Multi-week traps: parameter drift across opponents, sensor battery decay over tournament week, sampling jitter at 80 Hz, court side switch at halftime causing centroid discontinuity, free throw rule changes (14 seconds after foul) extending action ceiling to 38s [PAGE 14 footnote 3].

 RECURSIVE_THEORY_OF_MIND:
 - Crisis habit regression: Under defensive pressure, teams slow walk (vel < 8 km/h). Algorithm's h2 threshold risks regressing these low-velocity crisis sets into "inactive" drops, creating a false narrative of inaction.
 - Counter-trap: Opponent can exploit the one-team blind spot. By keeping the tracked team's players stationary (>h3) while the opponent moves, or by using free throws (not tracked by 1-B if opponent shooter), the opponent manipulates the segmentation clock.
 - Clock: The 40-minute FIBA target vs 90-100 minute raw sensor stream. The algorithm imposes a 4-38 second action window (footnote 3: 14s bonus after foul). If game state lingers in transition zone [+4,-4] m, action id may fail to increment or increment spuriously.
 - Regression to mean: Observed action durations cluster 10-20s (50.33% CS1). The filter's h2/h3 calibration enforces this cluster by excising tails (<4s and >38s), creating a recursive loop where the algorithm's output validates its own parameter choices.

 CROSS_LAYER_VETO_ADJUDICATION:
 - Physical layer: Court geometry from [PAGE 2]: hoop 46 cm diameter, height 3.05 m. Half-court line divides court. Transition zone ±4 m around half-court [PAGE 7].
 - Biomechanical layer: Walking threshold 8 km/h [PAGE 4]. Observed velavg defense 5.56 km/h, offense 5.76 km/h [PAGE 14]. z-axis jump data dropped [PAGE 10], so vertical loading invisible.
 - Weather layer: Indoor basketball; no meteorological veto. However, sensor physics: accelerometer/GPS hybrid, 80 Hz average frequency, non-constant [PAGE 3, 9].
 - Veto adjudication matrix:
   1. If player count ≠ 5 → VETO row (criterion 1-A).
   2. If free throw circle dwell ≥ 10s → VETO row (criterion 1-B).
   3. If max(‖vel_i‖) < h2 for h3 seconds → VETO row (criterion 1-C).
   4. If avg pos_x ∈ [-4,+4] → label Tr, not O/D [PAGE 7].
   5. If action duration < 4s or > 38s → robustness flag, not automatic veto [PAGE 14].

 RLVR_COUNTERFACTUAL_VETOES:
 Need 3 verifiable scenarios + predictions.
 Scenario 1: Sensor dropout on one tracked player for > h3 seconds while play continues.
 - Veto condition: count(t) ≠ 5 triggers 1-A.
 - Prediction: Algorithm drops valid active possession, reducing action count and total active minutes below 40. Verifiable by comparing ms gap timestamps against play-by-play.
 Scenario 2: h2 mis-specified at 7 km/h (below walking threshold).
 - Veto condition: walkers during offensive half-court sets have ‖vel‖ < 7 km/h.
 - Prediction: 1-C excises stationary offensive sets, fragmenting a single action into multiple spurious actions or dropping them entirely. Verifiable via davg and con hull: offensive spatial dispersion should collapse artificially.
 Scenario 3: Opponent free throw while tracked team resets positions slowly.
 - Veto condition: 1-B only catches tracked team's free throws. Opponent free throw leaves tracked team players moving slowly but > h2.
 - Prediction: Inactive opponent free throw retained as active, inflating action duration and count. Verifiable against web-scraped play-by-play (USA/Olympics or Brescia/A2) showing free throw timestamps not aligned with action boundaries [PAGE 15].

 Now let me write this all out with proper formatting, ensuring word count.

 I need to make sure total words >= 1000. THINK_TRACE ~500 words. SOURCE_OPERATORS ~400 words. Others ~200-300 each. Should be fine.

 Let me write carefully.

 One thing: the user said "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes."

 So I must not invent equations not in the paper. All equations should be from the paper or direct formalizations of the paper's algorithm.

 Also cite exact [PAGE N] markers. I'll use [PAGE 1], [PAGE 2], etc.

 Let me draft the final response.

 I will not include any text outside the XML sections to be safe, or maybe just the sections. The user specified exact XML sections. I'll provide exactly those six sections in order.

 Let me write now, being mindful of word counts.

 THINK_TRACE needs >= 400 words. I'll write about 500-600.

 Let's go.
</NATIVE_REASONING>

<THINK_TRACE>
The algorithm’s derivation proceeds as a multi-hop sensor-to-action pipeline with explicit failure modes at each handoff. Hop one is ingestion: the raw matrix X is built from accelerometer/GPS microchips worn by one team only, sampled at a non-constant average frequency of roughly 80 Hz across 90–100 minutes of wall-clock time [PAGE 3][PAGE 9]. Because different players are logged at different milliseconds, the preprocessing layer imputes the most recent available position for any player absent at a given instant [PAGE 3][PAGE 10]. This imputation creates the first gray zone: a player who drops out of the sensor net during active play is replaced by a stale coordinate, which can artificially suppress velocity readings and bias the count of players on the court.

Hop two is the triple filter. Criterion 1-A retains rows only when exactly five tracked players occupy the court polygon [PAGE 4]. This excises pre-game, time-outs, quarter breaks, and half-time, but it cannot distinguish a live 5-on-5 possession from a dead-ball period where all five remain on court. Criterion 1-B removes free throws by the tracked team via a dwell rule: a player inside the free throw circle for h1 = 10 consecutive seconds [PAGE 4]. Because only one team is tracked, opponent free throws are invisible to this rule. Criterion 1-C attempts to close that gap by dropping rows where all five players’ speeds fall below h2 km/h for at least h3 seconds, with h2 > 8 km/h justified by the observation that a walking player does not exceed 8 km/h and h3 > 1 second because active micro-pauses under one second exist [PAGE 4]. The parameter coupling is non-linear: retained game length rises with h3 and falls with h2, producing contour plots over h2 ∈ [8,11] km/h and h3 ∈ [1,4] s [PAGE 11]. The stable acceptance region across CS1–CS3 is h2 ∈ [9,10] km/h and h3 ∈ [2,3] s [PAGE 11].

Hop three is semantic segmentation. The centroid avg posx = (1/5)Σ pos_{p_i,x} labels offense, defense, or transition within ±4 m of the half-court line [PAGE 7]. Action id increments only when this centroid crosses the transition corridor between consecutive rows [PAGE 8]. A second gray zone emerges at half-time: teams swap court sides, so the sign of avg posx can flip without a new possession, risking a phantom action boundary unless the correction in footnote 2 is applied [PAGE 8]. A third gray zone is the missing ball trajectory; unlike Wu and Bornn (2017), this procedure deliberately operates without ball data [PAGE 2], so it cannot directly detect shot clock resets, made baskets, or turnovers. The downstream clock constraint is strict: the algorithm targets exactly 40 active minutes (FIBA regulation: four 10-minute periods) [PAGE 2], yet it must discard roughly half the raw sensor stream. The exact singularity regimes are therefore: (i) non-constant sampling frequency causing ms gaps that distort consecutive-time minute conversion [PAGE 3][PAGE 11]; (ii) bench players rendering pairwise distances d_ij missing [PAGE 10]; (iii) one-team tracking leaving opponent-initiated stoppages to the coarse velocity gate of 1-C [PAGE 4]; and (iv) centroid hover in the ±4 m transition band producing unstable offense/defense labels and action increments [PAGE 7][PAGE 8].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the input data matrix be X ∈ ℝ^{T × (1+4k)}, where each row t corresponds to a sensor record at time ms_t, sorted such that ms_1 < ms_2 < … < ms_T, and k is the number of tracked players [PAGE 3]. For player p_i, the columns are pos_{p_i,x}(t), pos_{p_i,y}(t), vel_{p_i,x}(t), vel_{p_i,y}(t) [PAGE 3].

Criterion 1-A (player count): define the binary court-occupancy indicator
I_{p_i}(t) = 
\begin{cases}
1, & (pos_{p_i,x}(t), pos_{p_i,y}(t)) \in \text{court polygon},\\
0, & \text{otherwise}.
\end{cases}
Then count(t) = \sum_{i=1}^{k} I_{p_i}(t), and row t is removed if count(t) \neq 5 [PAGE 4].

Criterion 1-B (free throw): define ft(t) = 1 if \exists i such that player p_i lies inside the free throw circle. Rows are dropped when ft(t) = 1 for at least h1 = 10 consecutive seconds [PAGE 4].

Criterion 1-C (stationarity): player speed is the Euclidean norm
\|vel_{p_i}(t)\|_2 = \sqrt{vel_{p_i,x}^2(t) + vel_{p_i,y}^2(t)} [PAGE 4].
Row t is removed if \|vel_{p_i}(t)\|_2 < h2 \,\text{km/h} for all i \in \{1,\dots,5\} over at least h3 consecutive seconds [PAGE 4]. Assumptions: h2 > 8 km/h because walking does not exceed 8 km/h; h3 > 1 s because active moments under one second may exhibit zero running [PAGE 4].

Step 2-A (offense/defense/transition): the centroid is
\overline{pos}(t) = \left[ \frac{1}{5}\sum_{i=1}^{5} pos_{p_i,x}(t),\; \frac{1}{5}\sum_{i=1}^{5} pos_{p_i,y}(t) \right] [PAGE 7].
Label L(t) = O if \overline{pos}_x(t) > +4 m; L(t) = D if \overline{pos}_x(t) < -4 m; L(t) = Tr if \overline{pos}_x(t) \in [-4,+4] m relative to the half-court line [PAGE 7].

Step 2-B (action sorting): act id(1) = 1 at the minimum ms. For t > 1,
act id(t) = act id(t-1) + 1 iff \overline{pos}_x crosses the transition interval [-4,+4] m between t-1 and t [PAGE 8].

Derived validation variables [PAGE 10]:
d_{ij} = \sqrt{(pos_{p_i,x}-pos_{p_j,x})^2 + (pos_{p_i,y}-pos_{p_j,y})^2}, missing if either player is on the bench;
davg = \frac{1}{n^2-n} \sum d_{ij};
con hull = area of convex hull of the five on-court positions (m^2);
velavg = \frac{1}{5}\sum_{i=1}^{5} \|vel_{p_i}\|_2.

Units: time in milliseconds; position in meters (reported as meters:centimeters from half-court line); velocity in m/s internally, converted to km/h for reporting; area in m^2 [PAGE 3][PAGE 10]. Parameter sweep: h2 ∈ [8,11] km/h, h3 ∈ [1,4] s [PAGE 11]. Selected values: CS1 h2 = 9 km/h, h3 = 2.5 s; CS2 h2 = 9.4 km/h, h3 = 2.5 s; CS3 h2 = 10 km/h, h3 = 2.5 s [PAGE 13]. Breakdown regimes: non-constant 80 Hz sampling [PAGE 3][PAGE 9]; missing ball trajectory [PAGE 2]; one-team-only tracking [PAGE 5]; bench-induced missing distances [PAGE 10]; half-time court-side switch [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with ecological dynamics in team sports (Travassos, Davids, Araújo and Esteves, 2013; Araújo and Davids, 2016), cited to justify the high-complexity interaction among coaches, players, and team [PAGE 1]. It inherits the spatio-temporal team-sports review of Gudmundsson and Horton (2017) and the football data-mining precedent of Carpià, Sandri, Simonetto and Zuccolotto (2013, 2015) [PAGE 1-2]. Social network centrality from Passos et al. (2011) in water polo and the general data-review of Stein et al. (2017) situate the work within human activity recognition (HAR), citing Trabelsi et al. (2013) for HMM-based activity recognition [PAGE 2]. Sports-specific segmentation priors include Huang et al. (2012) on golf-swing IMU trajectories, Jiang et al. (2004) on playfield segmentation, and Jordan, Melouk and Perry (2009) on football play-calling [PAGE 2]. The closest direct antecedent is Wu and Bornn (2017), who process ball and player trajectories; Metulini’s novelty is operating when the ball’s trajectory is unavailable [PAGE 2][PAGE 16]. Internal laboratory lineage includes Metulini (2017) motion charts and Metulini, Manisera and Zuccolotto (2017) sensor analytics in basketball, the latter finding that surface area differs significantly between offensive and defensive actions [PAGE 13].

Multi-week traps embedded in this genealogy are structural. Across a tournament week, sensor battery decay and radio interference can degrade the nominal 80 Hz average frequency, widening non-constant sampling gaps and corrupting consecutive-ms minute conversion used for the 40-minute target [PAGE 3][PAGE 9][PAGE 11]. Opponent rotation changes the identity of the tracked five, so h2/h3 calibration stable in CS1–CS3 may drift when facing a slower or faster opponent lineup [PAGE 11]. The half-time court-side switch introduces a sign discontinuity in avg posx that can masquerade as an action boundary if the footnote-2 correction is omitted [PAGE 8]. Finally, the 38-second action ceiling incorporates the 14-second foul-reset rule and double possession after offensive rebounds; rule changes mid-season would shift the robustness interval [4, 38] seconds and invalidate the 97% action-duration retention rates observed in CS1–CS3 [PAGE 14].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression occurs when a tracked team, under defensive pressure, slows to a walking pace below h2 = 8 km/h while retaining possession. The algorithm’s habit of excising all-five-stationary or sub-h2 segments regresses these low-velocity crisis possessions into “inactive” drops, systematically removing the very moments when offensive sets are most stagnant and therefore most in need of measurement. Counter-trap exploitation follows from the one-team blind spot: an opponent can initiate a free throw (invisible to criterion 1-B unless the tracked team’s shooter is at the line) or move the ball while the tracked team’s five players reset slowly above h2, causing criterion 1-C to fail to fire and preserving a dead-ball interval as an active row. The recursive clock is the 40-minute FIBA target compressed from 90–100 minutes of raw sensor capture, bounded by the 4–38 second action window [PAGE 2][PAGE 14]. Because act id increments only on centroid crossing of the ±4 m half-court transition corridor, a team that oscillates around half-court without clear possession can generate spurious action increments, while a fast break that never settles may fail to increment [PAGE 7][PAGE 8]. The result is a self-referential loop: parameter calibration targets 40 minutes and reasonable action durations, the filter removes outliers to achieve those targets, and the resulting 10–20 second mode (50.33% of CS1 actions) is then cited as validation that the algorithm reproduces “real” basketball rhythm [PAGE 14][PAGE 15].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: court geometry is fixed by FIBA specification—a hoop 46 cm in diameter at 3.05 m height; match duration 40 minutes in four 10-minute periods [PAGE 2]. The half-court line defines the offense/defense boundary, with a ±4 m transition band around it [PAGE 7]. Biomechanical layer: the walking threshold is h2 > 8 km/h; observed velavg is 5.56 km/h (defense) and 5.76 km/h (offense) in CS1, so normal play sits comfortably above the veto gate while deliberate stalls fall below it [PAGE 4][PAGE 14]. Vertical jump (z-axis) and acceleration were dropped from the algorithm input, so loading and landing mechanics are invisible to the veto chain [PAGE 10]. Weather layer: basketball is indoor, so no meteorological veto applies; the relevant environmental variable is sensor physics—non-constant sampling at roughly 80 Hz average frequency [PAGE 3][PAGE 9].

Veto adjudication matrix:
1. count(t) \neq 5 → hard veto on row t (criterion 1-A) [PAGE 4].
2. ft(t) = 1 for h1 = 10 consecutive seconds → hard veto on those rows (criterion 1-B) [PAGE 4].
3. \max_i \|vel_{p_i}(t)\|_2 < h2 for h3 consecutive seconds → hard veto on those rows (criterion 1-C) [PAGE 4].
4. \overline{pos}_x(t) \in [-4,+4] m → soft veto on O/D label; assign Tr instead [PAGE 7].
5. Action duration outside [4,38] seconds → robustness flag; not an automatic row veto but excluded from the 97% retention benchmark [PAGE 14].

A veto is upheld only when the physical sensor condition (missing player, circle dwell, sub-threshold velocity) is simultaneously present at the biomechanical layer and consistent with the court geometry; otherwise the row is retained for action labelling.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Mid-possession sensor dropout. One tracked player’s microchip fails for a continuous stretch exceeding h3 seconds while the ball remains live and the other four players move above h2.
Veto logic: count(t) drops below 5, so criterion 1-A hard-vetoes every row in the dropout window.
Verifiable prediction: Total active minutes fall below 40 and action count is undercounted relative to play-by-play, because a live 4-on-5 segment is excised as if it were a time-out. Cross-check against the 40-minute FIBA target and the observed CS action counts of 151, 136, and 132 [PAGE 14].

Scenario 2: h2 mis-specified below the walking threshold (counterfactual h2 = 7 km/h instead of the validated [9,10] km/h range).
Veto logic: Half-court offensive sets involving deliberate walking or screening generate \|vel_{p_i}\|_2 < 7 km/h for all five players, triggering criterion 1-C for h3 consecutive seconds.
Verifiable prediction: davg and convex hull area during labeled “offense” collapse artificially toward defensive values (defense davg mean 6.17 m vs offense 7.96 m; hull 32.29 m^2 vs 53.46 m^2 in CS1), because valid offensive spacing is removed as inactive [PAGE 13]. Verification: compare spatial dispersion distributions before and after applying the counterfactual h2.

Scenario 3: Opponent free throw during tracked-team reset.
Veto logic: Criterion 1-B only fires when a tracked player dwells in the free throw circle for 10 seconds; an opponent’s free throw leaves the tracked team’s five players walking slowly but above h2, so criterion 1-C does not fire.
Verifiable prediction: Dead-ball opponent free throws are retained as active rows, inflating action duration beyond the 38-second ceiling and distorting the 10–20 second mode (50.33% in CS1). Verifiable by aligning retained inactive rows against web-scraped play-by-play free-throw timestamps from the 2016 FIBA Olympics (USA) or 2015–2016 Italian A2 (Leonessa Brescia) benchmarks [PAGE 15].
</RLVR_COUNTERFACTUAL_VETOES>