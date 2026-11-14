---
source: "Detecting_and_classifying_moments_in_bas.md"
folder: "/GSE-Research/sports-research-papers/md/randoms"
pages: 8
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5638
---

<NATIVE_REASONING>
The user wants a response based on the source text provided (a paper about detecting and classifying moments in basketball matches using sensor tracked data). The user has provided specific formatting requirements:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis of the paper using these sections. The paper is about detecting/classifying active/inactive and offensive/defensive moments in basketball using sensor tracked data (50 Hz, positions in cm, velocities in km/h).

Key details from the paper:
- Authors: Tullio Facchinetti, Rodolfo Metulini, Paola Zuccolotto
- Published 2019, Pearson, ISBN 9788891915108
- Pages provided: 297-304 (8 pages in the PDF excerpt, but the page markers in text are 1-8)
- Tracking system: sampling frequency 50 Hz, every 20 ms. Positions in cm, accuracy ~30 cm. Velocities in km/h. vi(t) = sqrt(vel_i^x(t)^2 + vel_i^y(t)^2)
- Set X of measurements.
- Criteria:
  1. 1-A: drops measurements where number of players inside court != 5.
  2. 1-B: drops measurements when at least one player is on free throw shooting area (FTSA) for at least interval Tft. FTSA: circle Cr centered on center of FTSA radius r = 1.80m.
  3. 1-C: removes measurements where speed of all five players below threshold Vmin for interval >= Tvel.
  4. 2-A: assigns poss based on avg pos^x(t) = sum(pos_i^x(t))/5. Offensive if > 4 (presumably meters? The text says >4 and < -4, likely meters given court dimensions, but text says cm earlier... need to check. Actually Figure 1 FIBA court. avg pos^x > 4 offensive, < -4 defensive, transition in [-4, +4]. Units not explicitly stated here but likely meters since 4 cm would be nonsensical. Wait, positions measured in cm. 4 cm is tiny. So probably the threshold is in meters but the formula uses cm? Or maybe it's normalized? Need to note ambiguity/gray zone. Actually text: "avg pos^x(t) > 4" or "< -4". Given court length ~28m, +/-4m from center line makes sense. But positions in cm. So threshold likely 400 cm but written as 4 (maybe meters). This is a gray zone worth auditing.)
  5. 2-B: ord value counts possessions. Increases by 1 whenever poss takes transition at t-1 and offensive/defensive at t.
- Validation: ground truth from video via smartphone app. Table 1 events. Table 2 excerpt. Table 3 excerpt.
- ROC method: AUC computed for sensitivity/specificity. X~ aggregated at 1 second. Y_t~ = 1 if inactive according to report, 0 otherwise. Y_t~* = 1 if labelled inactive by procedure. TP, TN, FP, FN. Sensitivity and 1-specificity.
- Steps: 1. For given Vmin compute AUC for Tvel varying. 2. Select Vmin maximizing AUC. 3. Youden's index: maximize sensitivity + specificity for Tvel.
- Results CS1: Italian Basketball Cup Final Eight 2017. 505,291 measurements. Max AUC 0.8329 at Vmin = 9.25 km/h. Tvel = 2 (seconds? likely seconds since aggregated at 1 sec). Largest Youden's index at Tvel = 2.
- Breakdown regimes: Vmin too low includes inactive periods; too high excludes active low-speed moments. Tvel too short misclassifies brief pauses; too long misses short inactive bursts.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400 words.

I must not mention betting lines. No toy equations. Use formal LaTeX.

Let's draft each section carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss the chain from raw sensor stream X to filtered Xr, the three exclusion criteria, the possession labeling, the ROC tuning, the singularity when player count !=5, the FTSA exclusion, the velocity threshold ambiguity (units), the aggregation to 1 Hz losing 50 Hz resolution, the ground truth construction via smartphone app (human latency, sampling bias), the AUC maximization landscape, Youden's index, breakdown regimes (Vmin -> 0 includes bench/inactive; Vmin -> infinity excludes all active play; Tvel -> 0 classifies every micro-pause as inactive; Tvel -> infinity never flags inactivity). Gray zones: threshold "4" units unspecified (cm vs m), FTSA circle radius 1.80m but court coordinate system not fully defined, aggregation from 50Hz to 1Hz may alias fast transitions, "majority" wording in section 4.2 is garbled in source but implies majority vote. Need >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define X = {x_t}. x_t contains pos_i(t) in cm, vel_i(t) in km/h, v_i(t) = sqrt(...). Criteria as indicator functions. Xr definition. Possession assignment. AUC formula perhaps. Youden's index J = sensitivity + specificity - 1. Units: cm, km/h, seconds, Hz. Page citations [PAGE N] based on the text page numbers: page 1 (297), page 2 (298), etc. Actually the text has page markers: "1" then "297", "2" then "298", "3" then "299", "4" then "300", "5" then "301", "6" then "302", "7" then "303", "8" then "304". I should cite [PAGE 1] etc corresponding to the PDF page numbers in the text. Or cite [PAGE 297]? The user said cite exact [PAGE N] markers. The source text shows page numbers like 1, 2, 3... and also 297, 298... I'll use the visible page numbers in the document flow: [PAGE 1] for the first page (copyright), [PAGE 2] for introduction (298), etc. But to be safe, I can reference both: e.g., [PAGE 2, p.298]. Let's use the sequential page markers from the source: [PAGE 1] through [PAGE 8].

RETROCAUSAL_GENEALOGY: Historical lineage: Oliver [1] basketball on paper, Zuccolotto et al. [2] shot probability, Kubatko et al. [3] possessions, Sampaio et al. [4], Paulauskas et al. [5], Franks et al. [6], Goldsberry & Weiss [7], Wu & Bornn [8], Miller & Bornn [9], D'Amour et al. [10], Metulini et al. [11-14], Metulini [15] filtering procedures. ROC/Zhou [16], Pepe [17], Krzanowski & Hand [18], Youden [19], Fluss et al. [20], Liu [21]. Multi-week traps: parameter drift over a season, rosters changing (5-player criterion fails with injuries/fouls), aggregation bias, ground truth staleness, sensor calibration drift (30cm accuracy), FTSA circle fixed but court markings vary.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is more abstract. Interpret "crisis habit regression" as teams reverting to default possessions under pressure; "counter-trap" as the classification algorithm being gamed by strategic pacing (deliberate slowdowns to mimic inactivity or transition); "clock" as game clock/shot clock structuring possession boundaries. Discuss how the algorithm's labels (off/def/transition) create a feedback loop: coaches adjust substitution patterns knowing sensor filtering drops non-5-player lineups, etc.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: court dimensions, 30cm accuracy, 50Hz sampling, Nyquist limit for player movement. Biomechanical: Vmin = 9.25 km/h ~ 2.57 m/s, walking vs jogging vs sprinting; below threshold all five players = dead ball or free throw setup; but a single stationary shooter plus moving teammates might not trigger all-five-below threshold? Actually criterion 1-C removes where speed of ALL five players is below Vmin. So if one player is moving fast, it's active. This could misclassify free throws where shooter is stationary but teammates are moving? But 1-B already drops FTSA. Biomechanical breakdown: players standing during inbound but not on FTSA, speeds below 9.25 km/h but game active (tactical walk). Weather: indoor basketball, minimal weather impact, but HVAC/air density negligible; sensor occlusion maybe. Veto conditions: if court temperature affects sensor? Not really. But we can state vetoes: if sampling drops below 25 Hz (Nyquist for typical player accelerations), if position error > 30 cm causes FTSA boundary misclassification, if Vmin < typical walking speed (~5 km/h) causing false inactive labels.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Or just verifiable scenarios. Need 3 counterfactual veto scenarios where the procedure would fail or be vetoed, with predictions.
1. Scenario: Overtime or substitution cluster where fewer than 5 players are legally on court due to fouling out (rare but possible). Veto: Criterion 1-A drops all measurements. Prediction: possession count undercounted; game segments with 4 players labeled inactive incorrectly.
2. Scenario: Tvel set too high (e.g., 10s) during a fast-paced end-of-game foul strategy with frequent stoppages under 10 seconds. Veto: Criterion 1-C fails to aggregate short inactivity. Prediction: inactive periods merged with active possessions, AUC drops below 0.8329, Youden's index decreases.
3. Scenario: Sensor accuracy degradation to >1.0m (beyond 30cm spec) causing FTSA circle misclassification. Veto: Criterion 1-B either over-drops (active play near free throw line) or under-drops (actual free throws not detected). Prediction: possession classification error rate increases; offensive/defensive labels flip near the FTSA boundary.
Need predictions that are verifiable: e.g., compare against video ground truth, measure AUC change.

Word count check: I need to ensure total >= 1000 words. THINK_TRACE >= 400. Others can be substantial. I'll aim for ~1500-2000 words total.

Formatting: exact XML section names. No markdown outside? I can use markdown inside but keep sections. Must not mention betting. No toy equations. Use LaTeX.

Let's write.

Important: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include verbatim quotes with [PAGE N].

Verbatim quotes:
- [PAGE 3]: "The tracking system is able to capture measurements at a sampling frequency of 50 Hz, corresponding to a measurement every 20 milliseconds (ms)."
- [PAGE 3]: "The measured positions are expressed in centimeters (cm); the estimated accuracy of the tracking system is around 30 cm."
- [PAGE 4]: "Criterion 1-A, the procedure drops from X all the measurements belonging to the time instant t in which the number of players inside the court is different from 5."
- [PAGE 4]: "Player i lies in the FTSA at time t if the vector posi(t) lies in the circle Cr centred on the center of the FTSA of radius r = 1.80m."
- [PAGE 5]: "The largest value of AUC is 0.8329. According to the second step, we select the value of Vmin corresponding to the largest AUC, which is equal to to 9.25km/h."
- [PAGE 5]: "The largest Youden’s index is found for Tvel = 2."

I'll use these.

Structure:

<THINK_TRACE>
...
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>

... etc.

Need to ensure LaTeX is formal. No fake ratios.

Let's draft content mentally.

THINK_TRACE (>=400 words):
Start: The source document defines a pipeline from raw sensor stream **X** to reduced set **Xr**. Multi-hop derivation:
Hop 1: Raw acquisition at 50 Hz (20 ms), pos in cm, vel in km/h. Accuracy ~30 cm.
Hop 2: Exclusion criteria. 1-A requires exactly 5 players on court. This creates a hard cardinality singularity: any substitution, foul-out, or bench warming instant is dropped. If a team plays with 4 due to disqualification, entire stretches are removed.
Hop 3: 1-B spatial exclusion: FTSA circle radius 1.80m. This removes free-throw preparation. But note: if a player is near FTSA during active rebounding, false exclusion.
Hop 4: 1-C kinematic exclusion: all five players speed < Vmin for duration >= Tvel. This is the core active/inactive detector. If Vmin too low, tactical walking is active; if too high, slow offensive sets are inactive.
Hop 5: Possession labeling via average x-coordinate. Threshold +/-4 (units ambiguous—likely meters, but positions recorded in cm, creating a unit-scale gray zone). Transition band [-4,4].
Hop 6: Possession counter increments on transition->offense/defense edge.
Hop 7: Validation via video ground truth sampled at 1 Hz (aggregation from 50 Hz). Aliasing risk: events shorter than 1 s lost.
Hop 8: ROC tuning over Vmin and Tvel. AUC surface. Max AUC 0.8329 at Vmin=9.25 km/h. Then Youden's index for Tvel=2.
Gray-zone audit: The text states "avg pos^x(t) > 4" and "< -4" but earlier positions are in cm. 4 cm is nonsensical; 4 m is plausible but unstated. The aggregation method in 4.2 is typographically garbled: "assuming value 1 in t˜ if the majority Vmin of the Tvel combination..." The phrase "majority" appears without a clear denominator. The ground truth relies on a smartphone app operated by a human watching video; reaction latency and button-press jitter introduce labeling noise not quantified. Breakdown regimes: Vmin -> 0 makes every stationary bench player active (but 1-A already removes benches); Vmin -> infinity yields empty Xr. Tvel -> 0 fragments every micro-stop as inactive; Tvel -> infinity never flags inactivity. The 30 cm sensor accuracy relative to 1.80 m FTSA radius is ~16.7% tolerance; boundary cases near the circle edge are unstable.

Need to ensure >=400 words. I'll expand.

SOURCE_OPERATORS_AND_EQUATIONS:
Define measurement vector:
x_t = { pos_i(t), vel_i(t), v_i(t) }_{i=1}^5
pos_i(t) = (pos_i^x(t), pos_i^y(t)) [cm]
vel_i(t) = (vel_i^x(t), vel_i^y(t)) [km/h]
v_i(t) = sqrt( (vel_i^x(t))^2 + (vel_i^y(t))^2 ) [km/h]

Aggregation to 1 Hz:
\tilde{x}_{\tilde{t}} = aggregate_{t \in [\tilde{t}, \tilde{t}+1s)} x_t

Criteria as indicator functions:
C_{1-A}(t) = 1[ N_{court}(t) == 5 ]
C_{1-B}(t) = 1[ \exists i : ||pos_i(t) - c_{FTSA}||_2 <= 1.80 m \wedge \Delta t_{FTSA} >= T_{ft} ]
C_{1-C}(t) = 1[ \forall i \in court : v_i(t) < V_{min} \wedge \Delta t_{low} >= T_{vel} ]

Xr = { x_t \in X : C_{1-A}=1 \wedge C_{1-B}=0 \wedge C_{1-C}=0 } — wait, drops if conditions met. So Xr keeps measurements not dropped. Define carefully.

Possession:
\bar{p}^x(t) = (1/5) \sum_{i=1}^5 pos_i^x(t)
poss(t) = offensive if \bar{p}^x(t) > 4; defensive if \bar{p}^x(t) < -4; transition if -4 <= \bar{p}^x(t) <= 4.
Units ambiguity: likely meters, but positions stored in cm. If literal cm, threshold is 4 cm from centerline—effectively always transition for any real court position. This is a critical singularity.

ord(t):
ord(t_1) = 1.
ord(t) = ord(t-1) + 1 if poss(t-1)=transition and poss(t) \in {offensive, defensive}.

ROC:
\tilde{Y}_{\tilde{t}} = 1[inactive per ground truth]
\tilde{Y}^*_{\tilde{t}} = 1[inactive per procedure]
TP, TN, FP, FN over seconds.
Sensitivity = TP/(TP+FN)
Specificity = TN/(TN+FP)
AUC = \int_0^1 Sensitivity(1-Specificity) d(1-Specificity)
Youden J(Vmin, Tvel) = Sensitivity + Specificity - 1.
Optimization:
Vmin^* = argmax_{Vmin} AUC(Vmin)
Tvel^* = argmax_{Tvel} J(Vmin^*, Tvel)

Results CS1: N = 505,291 measurements [PAGE 6]. Max AUC = 0.8329 at Vmin = 9.25 km/h [PAGE 5]. Tvel^* = 2 [PAGE 5].

Breakdown regimes:
- Vmin <= walking speed (~5 km/h = 1.39 m/s): active tactical walks classified active; but if too low, dead-ball standing classified active.
- Vmin >= sprint speed: all active play classified inactive, Xr empty.
- Tvel < sampling aggregation (1s): sub-second stops invisible.
- Tvel > typical timeout length: long inactivity missed.

Cite pages.

RETROCAUSAL_GENEALOGY:
Historical lineage from Oliver [1] (2004) to tracking metrics. Metulini et al. earlier works on Italian league data [11-14], Metulini [15] filtering procedures. ROC methodology from Zhou [16], Pepe [17], Krzanowski & Hand [18], Youden [19], Fluss [20], Liu [21].
Multi-week traps: parameter non-stationarity across a season; roster changes affect 5-player rule; opponent-specific pacing changes Vmin operating point; ground truth from early-season video may not reflect late-season tactical fatigue; sensor drift over weeks.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under pressure, coaches revert to default possessions; algorithm labels them based on average court position. Counter-trap: a team can deliberately slow ball movement below Vmin while keeping all five players moving slightly above threshold to avoid 1-C, manipulating possession classification. Or use substitutions to dip below 5 players to erase data. Clock: game clock and shot clock impose exogenous possession boundaries that may not align with kinematic transition detection; the algorithm's ord counter assumes transition->offense/defense edges, but shot-clock resets and held-ball calls create transitions without change in offensive possession.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: FIBA court 28m x 15m; position accuracy 30 cm; sampling 50 Hz. Nyquist frequency 25 Hz; player movement spectral content below ~5 Hz, so no aliasing in position, but velocity estimation from finite differences at 50 Hz is sensitive to noise.
Biomechanical: Vmin = 9.25 km/h = 2.57 m/s. This is above typical walking (1.4 m/s) and below sprinting (>7 m/s). It detects jogging/running. However, a five-player defensive stance shuffle may be < 2.57 m/s yet active. Veto: if defensive intensity is low (e.g., garbage time), false inactive.
Weather: indoor, negligible. But sensor occlusion by backboard, stanchion, or referee can create dropouts; not weather but physical occlusion.
Veto proof conditions:
Veto 1: If N_court(t) != 5 for > 5 consecutive seconds due to injury timeout, 1-A voids data; algorithm cannot classify.
Veto 2: If position error > 30 cm approaches FTSA radius 1.80 m, boundary classification unstable (error/ratio = 1/6).
Veto 3: If average velocity of all five players < Vmin during an active inbound set (tactical walk), 1-C removes live play.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
Scenario 1: Fouling out / injury leaves 4 players. Veto under 1-A. Prediction: all measurements during 4-player stretch dropped; possession count undercounted by >=1; video ground truth shows active play but Xr has gap.
Scenario 2: End-of-game intentional foul strategy with stoppages every 6-8 seconds, Tvel = 2 s. Veto: 1-C flags each stoppage as inactive because players stand still >2s. Prediction: active foul-hunting possessions split into many inactive fragments; ord inflated; AUC on active/inactive drops below 0.8329 (verified against ground truth Table 2/3).
Scenario 3: Sensor accuracy degrades to 1.0 m (e.g., calibration drift). Veto: 1-B FTSA circle misclassifies players within 1.80 m ± 1.0 m. Prediction: false positives (active rebound near FTSA labeled free throw) and false negatives (actual free throw shooter outside circle due to error) increase; offense/defense labels near baseline flip; AUC decreases by >0.05 relative to 0.8329 baseline.

Make sure predictions are verifiable by comparing Xr to video annotation tables.

Now ensure word count. Let's write fully. I'll aim for rich prose.

Check no betting terms: none.

Check no toy equations: all equations are formal from the paper or standard definitions.

Check XML tags exact.

Check page citations: [PAGE 1]...[PAGE 8]. The source text shows page numbers: 1 (copyright), 2 (297/intro), 3 (298/data), 4 (299/procedure), 5 (300/validation), 6 (301/ROC), 7 (302/results), 8 (303/conclusions/references). I'll cite accordingly.

Verbatim quotes with quotes and [PAGE N].

Let's write now.

Word count estimate: THINK_TRACE ~500 words. SOURCE ~400. RETRO ~300. RECURSIVE ~250. CROSS ~250. RLVR ~300. Total ~2000. Good.

I will not include a separate title or preamble outside the XML sections unless needed. The user asked for those exact sections. I will output only the sections.

Let's draft carefully.

One thing: The user said ">= 1,000-WORD DEPTH across these exact XML sections". So total across all sections must be >=1000. THINK_TRACE alone >=400.

I'll write.

Need to be careful with LaTeX in XML: use standard LaTeX, no issues.

Proceed.
</NATIVE_REASONING>

<THINK_TRACE>
The source document describes a deterministic pipeline that transforms a raw, high-frequency sensor stream **X** into a reduced possession-labelled set **Xr**, and then tunes two kinematic thresholds against video-derived ground truth using a ROC-like procedure. The derivation proceeds through eight hops. Hop 1 is acquisition: the system samples every player’s position and velocity at 50 Hz, i.e. one measurement every 20 ms, with positions recorded in centimetres and velocities in kilometres per hour, and a stated positional accuracy of approximately 30 cm [PAGE 3]. Hop 2 applies exclusion criterion 1-A, which drops every time instant where the number of players physically inside the court differs from five [PAGE 4]. This creates a hard cardinality singularity: substitutions, injury timeouts, disqualifications, or any moment with fewer than five active players are erased from **X**, regardless of whether the ball is live. Hop 3 applies criterion 1-B, which removes measurements when at least one player remains inside the free-throw shooting area (FTSA)—defined as a circle of radius r = 1.80 m centred on the FTSA—for at least a duration Tft [PAGE 4]. Hop 4 applies criterion 1-C, which removes measurements where the speed of all five players on court falls below Vmin for a continuous interval of at least Tvel [PAGE 4]. Hop 5 assigns possession type poss using the mean x-coordinate of the five on-court players, \bar{pos}^x(t) = (1/5)\sum_{i=1}^5 pos_i^x(t): offensive if \bar{pos}^x(t) > 4, defensive if \bar{pos}^x(t) < -4, and transition in between [PAGE 4]. Hop 6 assigns the possession ordinal ord, incrementing by one whenever the sequence moves from transition at t-1 to offensive or defensive at t [PAGE 4]. Hop 7 aggregates the 50 Hz stream to 1 Hz for validation and builds the ground truth from a smartphone application operated by a human annotator watching video [PAGE 5–6]. Hop 8 tunes Vmin and Tvel by maximising the Area Under the ROC Curve (AUC), then refines Tvel using Youden’s index [PAGE 5–6].

Gray-zone audit reveals multiple unstable regions. First, the possession-side threshold is written as “avg pos^x(t) > 4” and “< -4” [PAGE 4], but positions are stored in centimetres. If interpreted literally as 4 cm, the boundary collapses to a line only four centimetres from the court centre, rendering almost every measurement “transition”; if intended as 4 metres, the unit conversion from centimetres is unstated, creating a scale singularity. Second, the ROC aggregation step in Section 4.2 contains typographically garbled language about a “majority” of observations without specifying the denominator or the aggregation window beyond “1 second” [PAGE 6], leaving the exact binary label Y_t~* ambiguous at sub-second event boundaries. Third, the ground truth itself is human-generated via a smartphone app while watching footage [PAGE 5]; no inter-annotator reliability, reaction-latency model, or button-press jitter distribution is reported, so the “true” active/inactive transition times carry unquantified labelling noise. Fourth, sensor accuracy of 30 cm against a 1.80 m FTSA radius implies a boundary tolerance of roughly 16.7 %, meaning players near the circle edge can flip between included and excluded purely due to measurement error. Fifth, breakdown regimes exist at the extremes of the parameter space: as Vmin → 0, standing players during dead-ball periods are misclassified as active; as Vmin → ∞, all live play is classified inactive and **Xr** empties; as Tvel → 0, every micro-pause becomes inactive and possession fragmentation explodes; as Tvel → ∞, genuine timeouts and free-throw intervals are never removed. The reported optimum for case study CS1 is Vmin = 9.25 km/h with maximum AUC = 0.8329, and Tvel = 2 s by Youden’s index [PAGE 6], but these values are specific to one Italian Basketball Cup Final Eight 2017 game and 505,291 raw measurements [PAGE 6], so portability to other tempos, rule sets, or sensor configurations is unverified.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the raw measurement at time t be x_t, drawn from the ordered set **X**. Each x_t contains, for the i-th player, the position vector pos_i(t) = (pos_i^x(t), pos_i^y(t)) in centimetres [cm], the velocity vector vel_i(t) = (vel_i^x(t), vel_i^y(t)) in kilometres per hour [km/h], and the scalar speed v_i(t) = \sqrt{(vel_i^x(t))^2 + (vel_i^y(t))^2} in [km/h] [PAGE 3]. The system samples at f_s = 50 Hz, giving \Delta t = 20 ms [PAGE 3].

The filtering indicators are:
C_{1-A}(t) = \mathbb{1}\{N_{\text{court}}(t) \neq 5\}, which drops the measurement [PAGE 4].
C_{1-B}(t) = \mathbb{1}\{\exists i : \|pos_i(t) - c_{\text{FTSA}}\|_2 \le r = 1.80\text{ m} \wedge \Delta t_{\text{FTSA}} \ge T_{\text{ft}}\}, which removes free-throw area occupancy [PAGE 4].
C_{1-C}(t) = \mathbb{1}\{\forall i \in \text{court} : v_i(t) < V_{\min} \wedge \Delta t_{\text{low}} \ge T_{\text{vel}}\}, which removes universal low-speed intervals [PAGE 4].

The retained set is **Xr** = \{x_t \in \mathbf{X} : C_{1-A}(t)=0 \wedge C_{1-B}(t)=0 \wedge C_{1-C}(t)=0\}.

Possession labelling uses the court-centred mean longitudinal coordinate:
\bar{pos}^x(t) = \frac{1}{5}\sum_{i=1}^{5} pos_i^x(t) [PAGE 4].
poss(t) = 
\begin{cases}
\text{offensive}, & \bar{pos}^x(t) > 4\\
\text{defensive}, & \bar{pos}^x(t) < -4\\
\text{transition}, & -4 \le \bar{pos}^x(t) \le 4
\end{cases}
[PAGE 4]. The constant “4” lacks an explicit unit in the source despite positions being recorded in cm, constituting a unit-scale ambiguity.

The possession counter evolves as ord(t_1) = 1 and ord(t) = ord(t-1) + 1 when poss(t-1) = transition and poss(t) \in \{\text{offensive, defensive}\} [PAGE 4].

For validation, the 50 Hz stream is aggregated to 1 Hz, yielding \tilde{x}_{\tilde{t}} [PAGE 6]. Let \tilde{Y}_{\tilde{t}} = \mathbb{1}\{\text{inactive per video ground truth}\} and \tilde{Y}^{*}_{\tilde{t}} = \mathbb{1}\{\text{inactive per procedure}\}. True positives, true negatives, false positives, and false negatives are defined over second-level epochs. Sensitivity = TP / (TP + FN); specificity = TN / (TN + FP). The AUC is computed over the pair (Vmin, Tvel) by sweeping thresholds and measuring sensitivity versus 1 - specificity [PAGE 6]. The optimisation is:
Vmin^* = \arg\max_{Vmin} AUC(Vmin), \qquad Tvel^* = \arg\max_{Tvel} [Sensitivity(Vmin^*, Tvel) + Specificity(Vmin^*, Tvel) - 1] [PAGE 6].

For CS1 (Italian Basketball Cup Final Eight 2017), N = 505,291 measurements [PAGE 6]. The reported maximum AUC is 0.8329 at Vmin = 9.25 km/h, and the Youden-optimal Tvel is 2 s [PAGE 6].

Breakdown regimes: Vmin \le 5 km/h (\approx 1.39 m/s, typical walking) risks classifying tactical walking as active; Vmin \ge 9 km/h risks classifying low-intensity defensive shuffling as inactive; Tvel < 1 s is aliased by the 1 Hz validation aggregation; Tvel > 10 s misses short stoppages such as quick inbound resets. Sensor error \sigma_{pos} \approx 0.30 m relative to r = 1.80 m yields a boundary instability ratio \sigma_{pos}/r \approx 0.167.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper positions itself within a lineage that begins with Oliver’s foundational performance tools [1] and extends through possession-based analytics (Kubatko et al. [3]), discriminant analysis of playing style (Sampaio et al. [4]; Paulauskas et al. [5]), and spatial defensive metrics built on NBA tracking data (Franks et al. [6]; Goldsberry and Weiss [7]) [PAGE 2]. The direct methodological ancestors are Metulini and colleagues’ earlier work on Italian professional basketball using accelerometer-derived sensor data, including space-time clustering of player distances [11], sensor analytics [12], player movement and shooting performance [13], and dynamic surface-area modelling [14] [PAGE 2]. Most proximally, Metulini [15] introduced filtering procedures for basketball sensor data, which the present paper extends by adding a video-based ground-truth validation and ROC-style parameter tuning [PAGE 2]. The statistical machinery borrows from diagnostic medicine: ROC curves and AUC as formalised by Zhou et al. [16], Pepe [17], and Krzanowski and Hand [18], with cutoff selection via Youden’s index [19] and its estimation by Fluss et al. [20] and Liu [21] [PAGE 5–7].

Multi-week traps emerge from this genealogy. Because Vmin and Tvel are tuned on a single game (CS1), the parameters encode that specific team’s tempo, substitution pattern, and arena sensor calibration. Over a multi-week season, roster changes alter the five-player cardinality assumption: injuries, foul trouble, and rotation depth mean N_court(t) \neq 5 occurs more frequently, causing criterion 1-A to excise larger fractions of **X** late in the season than early. Opponent-specific pacing shifts the operating point: against a slow-down opponent, Vmin = 9.25 km/h may over-label inactive periods; against a transition-heavy opponent, it may under-label them. Ground-truth drift is another trap: video annotations from early-season games may not reflect late-season tactical fatigue, where players jog rather than sprint during dead-ball intervals, altering the true Vmin distribution. Sensor calibration drift across weeks can move the 30 cm accuracy bound, destabilising the 1.80 m FTSA circle test. Finally, the European-data restriction noted by the authors—limited access to authorised tracking operators—means the method was validated on a narrow Italian Cup sample rather than a league-wide longitudinal panel, limiting its external validity across a full season.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of a team under pressure to revert to its default possession structure. In the context of this algorithm, when a game tightens, coaches typically shorten rotations and increase defensive intensity, producing stereotypical offensive and defensive sets. The classifier reads these sets through \bar{pos}^x(t) and assigns poss accordingly. However, if the team’s crisis habit involves slowing the ball to manage the clock, player speeds may fall below Vmin while all five remain on court, triggering criterion 1-C and labelling active crisis possessions as inactive. The algorithm thus inherits the team’s regression: it classifies crisis-time inactivity (real or tactical) as dead time, removing the very moments analysts most want to study.

A counter-trap exists because the classification rule is observable and deterministic. A coaching staff aware that \bar{pos}^x(t) > 4 triggers “offensive” can deliberately keep the average position near the centre line during transition to prolong the transition label, delaying ordinal increment and distorting possession counts. Similarly, because criterion 1-C requires all five players to be below Vmin, a team can keep one player moving above threshold (e.g., a baseline cutter jogging slowly) during a dead-ball setup to prevent the automatic inactive label, preserving the possession in **Xr** and manipulating the analyst’s sample. Conversely, a team can use a sixth player briefly on court during a substitution scramble to invoke criterion 1-A and erase a stretch of data entirely. The algorithm therefore does not passively observe; it creates incentives for strategic kinematic behaviour that the ground-truth video annotation may not capture because the annotator records game events, not sensor-game interactions.

The clock imposes an exogenous structure that the procedure only partially respects. Game clock stoppages and shot-clock resets define possession boundaries independent of player kinematics. The ord counter increments on a transition-to-offense/defense edge, but a shot-clock violation or held-ball call can produce a new offensive possession without a clear spatial transition across the +/- 4 threshold. If \bar{pos}^x(t) remains in [-4, 4] during the reset, the algorithm may fail to increment ord, merging two possessions into one. Conversely, a long transition dribbled across the centre line may generate multiple transition-to-offense oscillations if players hover near the threshold, inflating ord. The interaction between the mechanical clock and the kinematic classifier means the procedure’s “possession” is not isomorphic with the official scorebook possession, especially in end-game clock-management situations.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The FIBA court is rectangular with dimensions that place the centre line at the longitudinal origin; the +/- 4 threshold in \bar{pos}^x(t) divides offensive and defensive halves relative to this line [PAGE 4, Fig. 1 context]. Position measurements carry \sigma_{pos} \approx 30 cm [PAGE 3]. Sampling at 50 Hz gives a Nyquist frequency of 25 Hz; player centre-of-mass movement spectra in basketball are predominantly below 5 Hz, so position aliasing is negligible, but finite-difference velocity estimation at this sampling rate amplifies high-frequency sensor noise. Velocities are reported in km/h; the selected Vmin = 9.25 km/h equals 2.57 m/s, which lies between walking (~1.4 m/s) and competitive jogging/running [PAGE 6].

Biomechanical layer: Criterion 1-C demands that all five players simultaneously fall below Vmin. This is a conservative active detector: a single fast-moving player preserves the active label. Yet biomechanically, a five-player defensive zone in a low-intensity stretch may have all players shuffling under 2.57 m/s while the ball is live, producing false inactive removal. Similarly, an inbound pass after a made basket often involves walking speeds below Vmin for all five players for several seconds; if this exceeds Tvel, live play is excised. The FTSA exclusion (r = 1.80 m) interacts with biomechanics: a rebounder positioning near the free-throw lane during active play can fall inside the circle and be dropped by criterion 1-B even though no free throw is occurring.

Weather layer: Basketball is played indoors, so ambient weather variables (wind, precipitation, temperature) exert no direct effect on the sensor physics. However, HVAC-driven air density changes are negligible for optical or radio tracking, and the 30 cm accuracy bound dominates environmental error. The relevant “weather” analogue is arena-specific sensor occlusion: backboard supports, stanchions, referees, and camera gantries can create temporary line-of-sight dropouts, effectively increasing \sigma_{pos} or producing missing measurements that the procedure treats as non-events rather than sensor failures.

Veto adjudication: The procedure should be vetoed when (i) N_court(t) \neq 5 persists beyond a substitution window because criterion 1-A makes **Xr** discontinuous; (ii) position error approaches a non-trivial fraction of the FTSA radius (e.g., \sigma_{pos} > 0.5 m, ratio > 0.28), making the 1.80 m circle test unstable; (iii) Vmin is set above the typical speed of an active defensive stance or below the speed of a tactical walk, causing systematic misclassification of live play as inactive; or (iv) Tvel exceeds the duration of common stoppages (timeouts, quick free-throw sequences), so inactive periods are merged into active possessions. Under any of these vetoes, AUC = 0.8329 from CS1 cannot be assumed transportable.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: A player fouls out or is injured late in the game, leaving the team with four players on court for an extended defensive possession. Veto: Criterion 1-A drops every measurement where N_court(t) \neq 5 [PAGE 4], so the entire four-player stretch is excised from **Xr**. Prediction: Compared against video ground truth (Table 2/3 annotation), the algorithm will record a gap in active time and undercount total possessions by at least one; the possession ordinal ord will skip numbers across the injury interval, and AUC for active/inactive classification will fall below the CS1 baseline of 0.8329 because ground truth labels the segment active while **Xr** contains no data.

Scenario 2: End-of-game intentional fouling produces stoppages every 6–8 seconds, with players standing still between fouls. Veto: With Tvel = 2 s [PAGE 6], criterion 1-C classifies each standing interval as inactive because all five players remain below Vmin for longer than Tvel [PAGE 4]. Prediction: Active foul-hunting possessions are fragmented into repeated active/inactive micro-segments; the ordinal ord inflates because each restart after a transition creates a new possession count; verification against the video report would show ord values exceeding the true number of scoring possessions, and the sensitivity for “active” detection would drop significantly relative to the CS1 ROC operating point.

Scenario 3: Sensor calibration drifts so that positional accuracy degrades from 30 cm to 1.0 m [PAGE 3 baseline]. Veto: Criterion 1-B uses a rigid 1.80 m FTSA circle [PAGE 4]; with 1.0 m error, players actively rebounding near the free-throw line are falsely inside the circle and dropped, while actual free-throw shooters may be falsely outside and retained. Prediction: False positives (live play near the FTSA labelled inactive) and false negatives (actual free-throw intervals retained as active) both rise. Verification: Comparing **Xr** to Table 1 event logs (start/stop free-throws) would show misaligned timestamps; the AUC for offence/defence classification near the baseline would decrease by more than 0.05 from the CS1 value, failing a verifiable robustness threshold.
</RLVR_COUNTERFACTUAL_VETOES>