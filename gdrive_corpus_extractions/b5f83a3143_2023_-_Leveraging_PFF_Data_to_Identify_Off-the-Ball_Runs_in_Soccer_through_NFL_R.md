---
source: "2023 - Leveraging PFF Data to Identify Off-the-Ball Runs in Soccer through NFL Route Running - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2023"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4836
---

<NATIVE_REASONING>
The user wants me to analyze a specific source paper about using NFL route data to identify off-the-ball runs in soccer. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided "PAGES: 1" but the source text seems to be a single page. I need to cite [PAGE 1] markers.

Let me analyze the source text carefully:

Paper: "Leveraging PFF Data to Identify Off-the-Ball Runs in Soccer through NFL Route Running"
Authors: Alexander Schram, Amelia Probst, Rory Breslin
Conference: New England Symposium on Statistics in Sports 2023

Key details:
- Connect American football and soccer by spotting off-the-ball runs in soccer, akin to NFL routes
- NFL routes systematically labeled; soccer off-the-ball runs lack categorization
- ML techniques trained on labeled NFL route data to identify/categorize soccer off-the-ball runs
- Football dataset: 2021 NFL season week 1, merging NFL Next Gen Stats (NGS) and PFF Play-by-Play data
- First 3.0 seconds after snap
- Specific routes: xo, xl, xd, x6, 1, 2, 3, 4, 6, 7, 8, 9, h2, h3, h8, h9
- Soccer dataset: Sportlogiq broadcast tracking data and PFF event data for 2022-2023 Premier League season
- Three games: Manchester United - Arsenal, Everton - Wolverhampton Wanderers, Arsenal - Bournemouth
- "Soccer snaps" for consecutive events involving ball possession
- Method: Enhance each NGS frame with 3 features: receiver-passer distance (yards), angle between them (degrees), receiver speed (yards per second)
- Features cover 0.0 to 3.0 seconds after snap, resulting in 93 features (31 distances, 31 angles, 31 speed values)
- Random Forest model predicts route types after training on 2161 labeled routes
- Table 1: overall accuracy 0.73 (73% correct prediction rate)
- Routes 1, 6, h2, h3, h8, xd perform well; 8 and xl encounter challenges
- Discussion: expand football dataset, additional features (passer-receiver location, defender data), CNN may enhance accuracy

Now I need to structure this into the required XML sections with >=1000 words total, and THINK_TRACE >=400 words.

Important constraints:
- No betting lines whatsoever.
- No toy equations. Use formal LaTeX, SI units, information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite [PAGE 1] and verbatim quotes where applicable.

Let me draft each section.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Discuss the epistemological problem: transferring labeled route taxonomy from gridiron football (discrete, snap-triggered, downs-based, forward-pass constrained) to soccer (continuous flow, no snap, off-the-ball movement as spontaneous tactical response).
- Gray zones: 3.0 second window assumption; "soccer snaps" as artificial discretization of continuous possession events; feature set only 3 kinematic variables omitting defenders, field position, tactical context; route label mismatch (NFL routes are pre-designed pattern breaks, soccer runs are reactive); class imbalance (2161 labeled routes across many classes, some low support); accuracy 0.73 may be inflated by majority classes; Random Forest vs CNN suggestion; cross-sport feature distribution shift (yards vs meters, gridiron yard lines vs pitch coordinates).
- Multi-hop derivation: NGS frame -> kinematic triple (distance, angle, speed) -> 31 timesteps -> 93-dimensional feature vector -> Random Forest classifier -> route class label -> projected onto soccer "snaps" -> off-the-ball run category.
- Singularity/breakdown: if soccer event sampling rate doesn't match 31 frames in 3.0s (approx 10.33 Hz), feature alignment fails; if passer-receiver distance is undefined in soccer (no direct passer-receiver pairing equivalent), the feature engineering collapses; if angle is computed relative to ball carrier vs QB, semantic shift occurs.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Define feature vector: $\mathbf{x}_i = [d_1,\theta_1,v_1,\dots,d_{31},\theta_{31},v_{31}] \in \mathbb{R}^{93}$ where $d_t$ in yards, $\theta_t$ in degrees, $v_t$ in yards/s, $t \in [0.0, 3.0]$ seconds.
- Random Forest: $\hat{y} = \text{mode}_{b=1..B} T_b(\mathbf{x})$ where $T_b$ are decision trees.
- Accuracy: $A = \frac{1}{N}\sum_{i=1}^N \mathbb{I}(\hat{y}_i = y_i) = 0.73$ [PAGE 1].
- Precision/recall/F1 for specific routes.
- Breakdown regimes: sampling frequency $f_s \approx 31/3.0 \approx 10.33$ Hz; if $N_{\text{support}} < \text{threshold}$ for route classes 8 and xl, variance dominates; yard-to-meter conversion introduces unit mismatch if not normalized.
- Cite [PAGE 1] with verbatim quotes: "first 3.0 seconds after the snap", "93 features (31 distances, 31 angles, 31 speed values)", "overall accuracy of 0.73", "2161 labeled routes", routes list.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Next Gen Stats (NGS) RFID tracking, PFF charting, Sportlogiq optical tracking, broadcast tracking. The use of NFL route trees (xo, xl, etc.) traces back to offensive coordinators and charting services.
- Multi-week traps: They only used Week 1 of 2021 NFL season—small sample, team-specific early-season schemes, weather/roster volatility. Then applying to 2022-2023 PL season (different season, different league, different broadcast tracking vendor). Temporal mismatch and cross-league distributional shift.
- Historical context: soccer off-the-ball running analysis (e.g., "gravity" in basketball, spacing in football) but lacking standardized labels.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This section seems to be about the researchers'/model's behavior under pressure/crisis, and adversarial thinking.
- Crisis habit regression: when model encounters uncertain soccer run, it regresses to most frequent NFL route class (mode bias) because Random Forest with imbalanced training data defaults to majority class.
- Counter-trap: defense (in soccer) anticipating the "run" based on detected pattern; if the model labels a run as "post" or "corner," the defensive shadow adjusts, making the run ineffective—a counter-trap to the tactical exploitation.
- Clock: 3.0-second window acts as a hard temporal boundary; runs developing after 3.0s are invisible; the "clock" creates a censorship boundary.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical layer: gridiron field (120 yards x 53.3 yards) vs soccer pitch (105-110m x 68-75m). Scaling factor. Unit mismatch: yards vs meters.
- Biomechanical: American football players in pads/helmets, explosive start from static stance (snap) vs soccer players already in motion, continuous jogging/sprinting, no downs. The "receiver-passer distance" feature presumes a fixed passer (QB) and discrete receiver; in soccer, the ball carrier is mobile and passing lanes are fluid.
- Weather: outdoor elements affect both but differently; turf vs grass; no explicit weather data in model.
- Veto conditions: If pitch dimensions not normalized to common coordinate system, veto. If defender locations omitted, veto (defensive pressure determines run success). If temporal resolution mismatch, veto.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. I need to create 3 counterfactual veto scenarios with predictions.
- Scenario 1: Temporal misalignment veto. If soccer tracking data is sampled at 25 Hz but the model expects 31 frames over exactly 3.0 s (10.33 Hz) without interpolation, the feature vector alignment breaks. Prediction: accuracy drops below 0.50 (chance-level for many classes) or NaN features if nearest-neighbor interpolation not specified.
- Scenario 2: Semantic passer-receiver veto. In soccer, there is no single "passer" analogous to QB during off-the-ball movement; multiple potential passers exist. If the model computes distance to nearest teammate instead of intended passer, the angle/distance features lose route semantics. Prediction: F1 for h2/h3/xd collapses to <0.40.
- Scenario 3: Class support veto. Route classes 8 and xl had low support in the 2161 route training set. If applied to soccer where analogous runs are rare, the Random Forest's majority-class bias causes systematic misclassification. Prediction: precision for rare classes <0.30, recall near zero.

Now I need to write this all out with proper XML tags, ensuring total word count >=1000 and THINK_TRACE >=400 words.

Let me check word counts mentally:
- THINK_TRACE: needs to be substantial, maybe 500-600 words.
- SOURCE_OPERATORS_AND_EQUATIONS: 200-300 words.
- RETROCAUSAL_GENEALOGY: 150-200 words.
- RECURSIVE_THEORY_OF_MIND: 150-200 words.
- CROSS_LAYER_VETO_ADJUDICATION: 150-200 words.
- RLVR_COUNTERFACTUAL_VETOES: 150-200 words.

Total should exceed 1000 easily.

I need to be careful about verbatim quotes and [PAGE 1] citations.

Let me write it now.

Important: No betting lines. I will not mention any odds, spreads, etc.

Let's draft.

THINK_TRACE content:
The core analytical problem is a cross-domain transfer of a discrete labeled taxonomy from a static-set-piece sport to a continuous invasion sport. The authors take NFL Next Gen Stats (NGS) frames and PFF Play-by-Play from Week 1 of the 2021 NFL season [PAGE 1], isolate routes xo, xl, xd, x6, 1, 2, 3, 4, 6, 7, 8, 9, h2, h3, h8, h9, and engineer a 93-dimensional feature vector over the first 3.0 seconds post-snap [PAGE 1]. Each frame contributes three scalars: receiver–passer distance (yards), relative angle (degrees), and receiver speed (yards per second). At roughly 31 temporal samples across 3.0 seconds, this yields $31 \times 3 = 93$ features [PAGE 1]. A Random Forest trained on 2,161 labeled routes yields an overall accuracy of 0.73 [PAGE 1], with strong precision/recall/F1 on routes 1, 6, h2, h3, h8, and xd, but poor performance on 8 and xl [PAGE 1].

Gray-zone audit: (1) The "soccer snap" is an artificial discretization of continuous possession, defined only as "consecutive events involving ball possession" [PAGE 1]. There is no snap equivalent in soccer, so the temporal origin $t=0$ is operationally arbitrary. (2) The feature set excludes defenders, absolute field coordinates, and passer-receiver location beyond pairwise kinematics [PAGE 1], which means defensive pressure—a primary determinant of whether an off-the-ball run creates a passing lane—is unmodeled. (3) The training set of 2,161 routes is concentrated in Week 1 of a single NFL season; classes 8 and xl evidently have low support, and the authors themselves propose expanding the dataset for low-support routes [PAGE 1]. (4) Accuracy of 0.73 is an aggregate metric that may hide severe class-conditional degradation; if dominant classes (e.g., short out routes) drive the score, minority tactical runs could be systematically erased. (5) Transfer to the 2022–2023 Premier League via Sportlogiq and PFF event data [PAGE 1] introduces cross-vendor, cross-league, and cross-season distribution shift without a reported domain-adaptation procedure.

Multi-hop derivation: raw NGS frame $\to$ kinematic triple $(d_t,\theta_t,v_t)$ $\to$ temporal concatenation over $t\in[0,3.0]$ s $\to$ $\mathbf{x}\in\mathbb{R}^{93}$ $\to$ Random Forest $\to$ route class $\hat{y}$ $\to$ projection onto soccer "snap" windows $\to$ predicted off-the-ball run category. The breakdown regime occurs when any link in this chain lacks a semantic equivalent: if soccer tracking does not provide 31 samples per 3.0-second window, the 93-feature assumption collapses; if no unique passer–receiver pair exists, $d_t$ and $\theta_t$ lose tactical meaning; if class support in the source domain is too low, the decision boundary for rare routes is statistically singular.

SOURCE_OPERATORS_AND_EQUATIONS:
Define feature construction per [PAGE 1]. Let $i$ index NGS frames, $t_k = k\cdot \Delta t$ for $k=1,\dots,31$ and $\Delta t = 3.0/31 \approx 0.0968$ s. The feature vector for route instance $i$ is
$$\mathbf{x}_i = [d_{i,1}, \theta_{i,1}, v_{i,1}, \dots, d_{i,31}, \theta_{i,31}, v_{i,31}]^\top \in \mathbb{R}^{93},$$
where $d_{i,k}$ is receiver–passer distance in yards, $\theta_{i,k}$ is the angle between receiver and passer relative to a reference axis in degrees, and $v_{i,k}$ is receiver speed in yards per second. The label set is $\mathcal{Y} = \{xo, xl, xd, x6, 1, 2, 3, 4, 6, 7, 8, 9, h2, h3, h8, h9\}$.

The Random Forest predictor is
$$\hat{y}_i = \operatorname{mode}_{b=1,\dots,B} \left( T_b(\mathbf{x}_i) \right),$$
where each tree $T_b$ is trained on a bootstrap subset of the 2,161 labeled routes [PAGE 1].

Overall accuracy [PAGE 1]:
$$\mathcal{A} = \frac{1}{N}\sum_{i=1}^{N} \mathbb{I}\left(\hat{y}_i = y_i\right) = 0.73.$$

Precision, recall, and F1 for class $c$:
$$\mathrm{Prec}_c = \frac{TP_c}{TP_c + FP_c}, \quad \mathrm{Rec}_c = \frac{TP_c}{TP_c + FN_c}, \quad F1_c = 2\frac{\mathrm{Prec}_c\mathrm{Rec}_c}{\mathrm{Prec}_c+\mathrm{Rec}_c}.$$

Breakdown / singularity regimes: (i) temporal resolution: if the soccer tracking sample rate $f_s$ does not satisfy $31 \approx f_s \cdot 3.0$ s, nearest-neighbor interpolation or decimation introduces phase distortion; (ii) unit scale: yards (imperial) versus Sportlogiq pitch coordinates (meters) require a linear rescaling $1\text{ yd}=0.9144\text{ m}$ before feature comparison; (iii) semantic singularity: soccer has no fixed quarterback, so the receiver–passer dyad is not structurally invariant across possession events; (iv) support singularity: routes 8 and xl [PAGE 1] occupy low-count regions of label space, making maximum-likelihood estimates of class-conditional densities high-variance.

RETROCAUSAL_GENEALOGY:
The paper’s genealogy sits at the intersection of three tracking lineages: (1) NFL Next Gen Stats (NGS), the league’s RFID-based player-tracking infrastructure that supplies x/y coordinates at approximately 10 Hz; (2) Pro Football Focus (PFF) Play-by-Play and route-charting taxonomies, which codify NFL route stems and breaks into labels such as xo, xl, xd, and the numbered/h-series routes used here [PAGE 1]; and (3) Sportlogiq broadcast optical tracking for the 2022–2023 Premier League, which supplies event and tracking data for Manchester United–Arsenal, Everton–Wolverhampton Wanderers, and Arsenal–Bournemouth [PAGE 1]. The analytical move is to treat soccer off-the-ball running as an unlabeled instance of the NFL route tree, an epistemic leap that assumes tactical intentionality transfers across codes.

Multi-week trap: The NFL training data are restricted to Week 1 of the 2021 season [PAGE 1]. This is a severe temporal bottleneck: early-season schemes are not yet fully installed, rosters are subject to cutdown churn, and weather conditions in Week 1 differ from the late-season or playoff environments where route concepts are most refined. Applying a Week-1 route classifier to Premier League matches from an entirely different season and sport compounds the mismatch. There is no reported cross-validation across NFL weeks, nor any stability analysis showing that route embeddings from Week 1 generalize to Weeks 2–18, let alone to association football.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: When the Random Forest encounters an ambiguous soccer off-the-ball run—one that does not cleanly match any NFL route stem—it regresses to the majority-class habit encoded in the training distribution. Because routes 8 and xl already perform poorly [PAGE 1], the model’s crisis behavior is to collapse uncertain predictions into high-support route classes, effectively erasing rare but tactically significant soccer movements.

Counter-trap: In soccer, an off-the-ball run is only valuable if the defense fails to anticipate it. If the model labels a run as an “h8” or “post” analogue, the defending team (or an opposing analyst using the same tool) can pre-adjust coverage, converting the run into a covered option. The detection tool thus creates a counter-trap: identifying the run makes it predictable, nullifying the very gap exploitation the run was designed to create.

Clock: The hard 3.0-second window after the snap [PAGE 1] acts as a temporal censorship boundary. Any soccer run that develops beyond this window—e.g., a delayed third-man run or a late overlap—is outside the feature space and receives no prediction. The model is structurally blind to the “clock” of longer-developing soccer attacking sequences.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: An NFL field is 120 yards by 53.3 yards; a Premier League pitch is approximately 105–110 m by 68–75 m. Without a common normalized coordinate transform, distances in yards are not commensurate with pitch geometry. Veto: if feature vectors are not re-scaled to a dimensionless pitch-relative frame (e.g., percentage of pitch length and width), spatial comparisons are invalid.

Biomechanical layer: NFL routes originate from a static or near-static stance at the snap, with receivers in pads and helmets executing explosive, pre-scripted breaks. Soccer off-the-ball runs occur from continuous motion, often at sub-maximal tempo, without equipment-induced inertia constraints. The receiver–passer distance feature assumes a fixed passer (quarterback) and a single target; in soccer, the ball carrier is mobile and multiple passing options exist simultaneously. Veto: if defender locations and ball-carrier velocity are not included, the model cannot distinguish a run into space from a run into coverage.

Weather/environmental layer: Neither dataset incorporates weather, turf type, or stadium effects into the feature vector [PAGE 1]. Rain alters cutting angles in both sports, but the model has no node for surface friction. Veto: predictions made under adverse weather without surface covariates are epistemically unverified.

Adjudication: The paper proposes adding passer–receiver location and defender data and moving to a CNN [PAGE 1]. Until those features are integrated, the model should be vetoed for in-game tactical deployment. It remains viable only as a descriptive clustering heuristic on archival, possession-controlled sequences.

RLVR_COUNTERFACTUAL_VETOES:
RLVR = Reinforcement Learning from Verifiable Rewards / counterfactual verification layer. Three verifiable veto scenarios:

Scenario 1 (Temporal aliasing veto). Counterfactual: Replace the 31-frame, 3.0-second NGS sampling with Sportlogiq’s native broadcast frame rate (~25 Hz) without resampling, then force the data into a 93-slot vector by taking the first 31 frames. Prediction: Because $25\text{ Hz} \times 3.0\text{ s} = 75$ frames, taking only the first 31 truncates the window to $31/25 = 1.24$ seconds, discarding the final 1.76 seconds of route development. Route classes whose breaks occur after 1.24 s (e.g., deep posts, corners) will have systematically degraded recall, predicted to fall below 0.40 for routes h8 and xd [PAGE 1 baseline context].

Scenario 2 (Passer–receiver semantic veto). Counterfactual: Compute receiver–passer distance and angle using the nearest teammate as “passer” rather than the intended ball carrier, because soccer lacks a fixed quarterback. Prediction: The angle feature $\theta_t$ becomes a nearest-neighbor artifact rather than a route-stem signal. Precision for route classes h2, h3, and xd—which the paper notes perform well [PAGE 1]—is predicted to collapse below 0.50 because the kinematic signature no longer corresponds to a discrete route break.

Scenario 3 (Class-support singularity veto). Counterfactual: Apply the trained Random Forest directly to soccer off-the-ball events without rebalancing or fine-tuning, given that routes 8 and xl already show low support and poor metrics in the NFL training set [PAGE 1]. Prediction: Rare soccer run classes that map to NFL classes 8 or xl will be absorbed into majority classes; recall for those classes is predicted to approach zero, and overall accuracy will remain near 0.73 purely due to class imbalance, masking total failure on the target tactical category.

All three scenarios are verifiable by re-running the pipeline on the three Premier League matches with (a) frame-rate resampling logs, (b) passer-attribution audit trails, and (c) per-class confusion matrices for low-support routes.

Now I need to check:
- Total word count: Let me estimate. THINK_TRACE ~500 words. SOURCE ~250. RETRO ~180. RECURSIVE ~180. CROSS ~180. RLVR ~200. Total ~1490. Good.
- THINK_TRACE >= 400 words: Yes.
- No betting lines: Checked.
- No toy equations: I used formal LaTeX with real statistical definitions. No fake Force/Fatigue ratios.
- SI/information/probability units: yards, degrees, yards/s, seconds, accuracy (dimensionless probability), etc.
- Exact singularity/breakdown regimes: Included.
- [PAGE 1] citations: Included throughout.
- Verbatim quotes: I included several quoted phrases from the source.

Wait, I need to make sure I have verbatim quotes with [PAGE 1]. The source text says:
- "first 3.0 seconds after the snap"
- "93 features (31 distances, 31 angles, 31 speed values)"
- "overall accuracy of 0.73"
- "2161 labeled routes"
- routes list
- "consecutive events involving ball possession"
- "Manchester United - Arsenal, Everton - Wolverhampton Wanderers, and Arsenal - Bournemouth"
- "expanding our football dataset, particularly for route types with low support"

I should use verbatim quotes more explicitly. Let me integrate them.

Also, need to ensure XML sections are exact.

Let me refine and produce the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The central analytical problem is a cross-domain transfer of a discrete, pre-labeled route taxonomy from a static-set-piece invasion sport (American football) to a continuous-flow invasion sport (association soccer). The authors draw on NFL Next Gen Stats (NGS) and PFF Play-by-Play from Week 1 of the 2021 NFL season [PAGE 1], isolate route labels xo, xl, xd, x6, 1, 2, 3, 4, 6, 7, 8, 9, h2, h3, h8, and h9, and construct feature vectors over "the first 3.0 seconds after the snap" [PAGE 1]. Each NGS frame is augmented with exactly three scalars—receiver–passer distance in yards, angle between them in degrees, and receiver speed in yards per second—yielding "93 features (31 distances, 31 angles, 31 speed values)" [PAGE 1] across roughly 31 temporal samples. A Random Forest trained on "2161 labeled routes" [PAGE 1] attains "an overall accuracy of 0.73" [PAGE 1], with routes 1, 6, h2, h3, h8, and xd performing well, while routes 8 and xl encounter challenges [PAGE 1].

Gray-zone audit: First, the "soccer snap" is an artificial discretization of continuous possession, defined only as "consecutive events involving ball possession" [PAGE 1]. Soccer has no snap, so the temporal origin t = 0 is operationally arbitrary and may not align with the tactical onset of an off-the-ball run. Second, the feature set excludes defender coordinates, absolute field location, and passer–receiver location beyond pairwise kinematics [PAGE 1], meaning defensive pressure—the primary determinant of whether an off-the-ball run actually opens a passing lane—is unmodeled. Third, the training set is confined to Week 1 of a single NFL season; classes 8 and xl evidently have low support, and the authors themselves propose "expanding our football dataset, particularly for route types with low support" [PAGE 1]. Fourth, aggregate accuracy of 0.73 may be driven by majority classes, concealing severe class-conditional degradation for minority tactical runs. Fifth, transfer to the 2022–2023 Premier League via Sportlogiq and PFF event data across three matches—Manchester United–Arsenal, Everton–Wolverhampton Wanderers, and Arsenal–Bournemouth [PAGE 1]—introduces cross-vendor, cross-league, and cross-season distribution shift without any reported domain-adaptation or calibration procedure.

Multi-hop derivation: raw NGS frame → kinematic triple (d_t, θ_t, v_t) → temporal concatenation over t ∈ [0.0, 3.0] s → x ∈ ℝ^93 → Random Forest classifier → route label ŷ → projection onto soccer "snap" windows → predicted off-the-ball run category. The breakdown regime occurs whenever any link lacks a semantic equivalent: if soccer tracking does not provide 31 samples per 3.0-second window, the 93-feature assumption collapses; if no unique passer–receiver pair exists, d_t and θ_t lose tactical meaning; if class support in the source domain is too low, the decision boundary for rare routes becomes statistically singular.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let i index NGS frames and let t_k = k·Δt for k = 1, …, 31 with Δt = 3.0 s / 31 ≈ 0.0968 s. Per [PAGE 1], the feature vector for route instance i is

x_i = [d_{i,1}, θ_{i,1}, v_{i,1}, …, d_{i,31}, θ_{i,31}, v_{i,31}]^⊤ ∈ ℝ^93,

where d_{i,k} is receiver–passer distance in yards, θ_{i,k} is the angle between receiver and passer relative to a reference axis in degrees, and v_{i,k} is receiver speed in yards per second. The label set is 𝒴 = {xo, xl, xd, x6, 1, 2, 3, 4, 6, 7, 8, 9, h2, h3, h8, h9} [PAGE 1].

The Random Forest predictor is

ŷ_i = mode_{b = 1, …, B} ( T_b(x_i) ),

where each tree T_b is trained on a bootstrap subset of the 2,161 labeled routes [PAGE 1].

Overall accuracy per [PAGE 1]:

𝒜 = (1/N) Σ_{i=1}^N 𝕀(ŷ_i = y_i) = 0.73.

Class-conditioned metrics for route c:

Prec_c = TP_c / (TP_c + FP_c),  Rec_c = TP_c / (TP_c + FN_c),  F1_c = 2·Prec_c·Rec_c / (Prec_c + Rec_c).

Breakdown / singularity regimes: (i) Temporal aliasing: if the soccer tracking sample rate f_s does not satisfy 31 ≈ f_s · 3.0 s, decimation or interpolation introduces phase distortion in the route-stem signature. (ii) Unit scale: yards (imperial) versus Sportlogiq pitch coordinates in meters require rescaling 1 yd = 0.9144 m before spatial comparison; otherwise distances are incommensurate. (iii) Semantic singularity: soccer has no fixed quarterback, so the receiver–passer dyad is not structurally invariant across possession events. (iv) Support singularity: routes 8 and xl occupy low-count regions [PAGE 1], making class-conditional density estimates high-variance and prone to majority-class collapse.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage sits at the intersection of three tracking and charting traditions. First, NFL Next Gen Stats (NGS), the league’s RFID-based player-tracking infrastructure supplying x/y coordinates at roughly 10 Hz. Second, Pro Football Focus (PFF) Play-by-Play and route-charting taxonomies, which codify NFL route stems and breaks into labels such as xo, xl, xd, and the numbered/h-series routes used here [PAGE 1]. Third, Sportlogiq broadcast optical tracking for the 2022–2023 Premier League, supplying event and tracking data for Manchester United–Arsenal, Everton–Wolverhampton Wanderers, and Arsenal–Bournemouth [PAGE 1]. The epistemic leap is to treat soccer off-the-ball running as an unlabeled instance of the NFL route tree, assuming tactical intentionality transfers across codes.

Multi-week trap: The NFL training data are restricted to Week 1 of the 2021 season [PAGE 1]. This is a severe temporal bottleneck: early-season offensive schemes are not fully installed, rosters are subject to cutdown churn, and Week 1 weather differs from late-season conditions where route concepts are most refined. Applying a Week-1 route classifier to Premier League matches from an entirely different sport and season compounds the mismatch. There is no reported cross-validation across NFL weeks, nor any stability analysis showing that route embeddings from Week 1 generalize to Weeks 2–18, let alone to association football.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: When the Random Forest encounters an ambiguous soccer off-the-ball run—one that does not cleanly match any NFL route stem—it regresses to the majority-class habit encoded in the training distribution. Because routes 8 and xl already perform poorly [PAGE 1], the model’s crisis behavior is to collapse uncertain predictions into high-support route classes, effectively erasing rare but tactically significant soccer movements.

Counter-trap: In soccer, an off-the-ball run is valuable only if the defense fails to anticipate it. If the model labels a run as an h8 or post analogue, the defending team—or an opposing analyst using the same tool—can pre-adjust coverage, converting the run into a covered option. The detection tool thus creates a counter-trap: identifying the run makes it predictable, nullifying the gap exploitation the run was designed to create.

Clock: The hard 3.0-second window after the snap [PAGE 1] acts as a temporal censorship boundary. Any soccer run that develops beyond this window—e.g., a delayed third-man run or a late overlap—is outside the feature space and receives no prediction. The model is structurally blind to the longer clock of developing soccer attacking sequences.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: An NFL field is 120 yards by 53.3 yards; a Premier League pitch is approximately 105–110 m by 68–75 m. Without a common normalized coordinate transform, distances in yards are incommensurate with pitch geometry. Veto: if feature vectors are not re-scaled to a dimensionless pitch-relative frame (e.g., percentage of pitch length and width), spatial comparisons are invalid.

Biomechanical layer: NFL routes originate from a static or near-static stance at the snap, with receivers in pads and helmets executing explosive, pre-scripted breaks. Soccer off-the-ball runs occur from continuous motion, often at sub-maximal tempo, without equipment-induced inertia constraints. The receiver–passer distance feature assumes a fixed passer (quarterback) and a single target; in soccer, the ball carrier is mobile and multiple passing options exist simultaneously. Veto: if defender locations and ball-carrier velocity are not included [PAGE 1 notes these as planned additions], the model cannot distinguish a run into space from a run into coverage.

Weather/environmental layer: Neither dataset incorporates weather, turf type, or stadium effects into the feature vector [PAGE 1]. Rain alters cutting angles in both sports, but the model has no node for surface friction. Veto: predictions made under adverse weather without surface covariates are epistemically unverified.

Adjudication: The paper proposes adding passer–receiver location and defender data and moving to a CNN [PAGE 1]. Until those features are integrated, the model should be vetoed for in-game tactical deployment. It remains viable only as a descriptive clustering heuristic on archival, possession-controlled sequences.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Temporal aliasing veto). Counterfactual: Replace the 31-frame, 3.0-second NGS sampling with Sportlogiq’s native broadcast frame rate (~25 Hz), then force the data into a 93-slot vector by taking the first 31 frames. Because 25 Hz × 3.0 s = 75 frames, taking only the first 31 truncates the window to 31/25 = 1.24 seconds, discarding the final 1.76 seconds. Prediction: Route classes whose breaks occur after 1.24 s (e.g., deep posts, corners) will have systematically degraded recall, predicted to fall below 0.40 for routes h8 and xd relative to the [PAGE 1] baseline context.

Scenario 2 (Passer–receiver semantic veto). Counterfactual: Compute receiver–passer distance and angle using the nearest teammate as “passer” rather than the intended ball carrier, because soccer lacks a fixed quarterback. Prediction: The angle feature θ_t becomes a nearest-neighbor artifact rather than a route-stem signal. Precision for route classes h2, h3, and xd—which the paper notes perform well [PAGE 1]—is predicted to collapse below 0.50 because the kinematic signature no longer corresponds to a discrete route break.

Scenario 3 (Class-support singularity veto). Counterfactual: Apply the trained Random Forest directly to soccer off-the-ball events without rebalancing or fine-tuning, given that routes 8 and xl already show low support and poor metrics in the NFL training set [PAGE 1]. Prediction: Rare soccer run classes that map to NFL classes 8 or xl will be absorbed into majority classes; recall for those classes is predicted to approach zero, and overall accuracy will remain near 0.73 purely due to class imbalance, masking total failure on the target tactical category.

All three scenarios are verifiable by re-running the pipeline on the three Premier League matches with (a) frame-rate resampling logs, (b) passer-attribution audit trails, and (c) per-class confusion matrices for low-support routes.
</RLVR_COUNTERFACTUAL_VETOES>