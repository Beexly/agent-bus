---
source: "2020 - Going deep models for continuous-time within-play valuation of game outcomes in American football with tracking data - Yurko et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Quantitative Analysis in Sports/2020"
pages: 29
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4546
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "Going deep: models for continuous-time within-play valuation of game outcomes in American football with tracking data" by Yurko et al. (2020), published in Journal of Quantitative Analysis in Sports.

The user has provided the full source text (29 pages worth, though it appears to be pages 163-182 of the journal).

I need to produce a response with specific XML sections:
1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes.
- When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
- >= 1,000-WORD DEPTH across these exact XML sections.

Important: The source text provided doesn't have explicit page numbers like "[PAGE 1]" but it does have journal page numbers in the headers/footers (163-182). I should cite these as [PAGE 164], [PAGE 165], etc., corresponding to the journal page numbers visible in the text.

Let me map the content to pages:
- Page 163: Abstract, Introduction start
- Page 164: Section 1.1, Figure 1 picture text
- Page 165: Section 1.2 continued
- Page 166: Section 1.3, 1.4, Table 1, Figure 2
- Page 167: Section 2, Figure 3
- Page 168: Section 3, 3.1 Notation
- Page 169: Section 3.2 Framework, Figure 4
- Page 170: Section 3.3 Ball-carrier model, 3.4 QB decision model
- Page 171: Section 3.5, 3.6, 3.7
- Page 172: Section 4, 4.1 Features, Table 2
- Page 173: Table 3, Figure 6
- Page 174: Section 4.2 Models, Table 4
- Page 175: Section 4.3 Model validation
- Page 176: Section 5 Results, 5.1, Figures 7-8
- Page 177: 5.3, Figures 10-11
- Page 178: 5.4 Player evaluation, Figures 12-13
- Page 179: Section 6 Discussion, 6.1 Conditional density estimation, Figure 14
- Page 180: Section 6.1 continued, 6.2 Future work
- Page 181: 6.2 continued
- Page 182: References

I need to be careful about verbatim quotes and exact page citations.

Let me draft each section.

**THINK_TRACE**: Needs >=400 words. Deep multi-hop derivation & gray-zone audit. I need to trace the logical dependencies:
- The paper's core contribution: continuous-time within-play valuation using tracking data.
- The modular framework: expected end-of-play yard line as the linchpin.
- Ball-carrier model as the only implemented sub-model.
- LSTM outperforms alternatives because it captures time/smoothness/high-dim/non-linearity/interactions.
- Gray zones: play type assumed known (RPO problem), speed conditioning means player evaluation attributes speed-based gains to the model not the player (future work note), independence assumption between between-play EP/WP and within-play density, missing special teams, fumbles, joint time-yardage modeling, only 6 weeks of data (2017 Big Data Bowl), intercept-only baseline, Voronoi limitations, no blockers directly modeled.
- Multi-hop: tracking data (10 Hz RFID) -> features (adjusted coords, Voronoi) -> LSTM -> expected yards gained -> end-of-play yard line -> EP/WP via conditional density integration.
- Breakdown regimes: when play type unknown (RPO), when speed is confounded with skill, when within-play features correlate with between-play covariates (timeouts), small sample for rare events (fumbles, blocked kicks).

**SOURCE_OPERATORS_AND_EQUATIONS**: Formal LaTeX, units, page citations, breakdown.
- Notation from Section 3.1 [PAGE 168]:
  - t > 0 time between snap and end of play
  - Y random variable yards gained from current position
  - Y* end-of-play yard line
  - X_t data structure locations/trajectories until time t
  - F(X_t, i) filtration
  - E[Y_{t,i} | F(X_t, i)] expected yards gained
  - E[Y*_{t,i} | F(X_t, i)] expected end-of-play yard line
- Framework equations:
  - Rushing: E[Y*_{t,i}|F] = current yard line + E[Y_{t,i}|F] (linearity of expectations) [PAGE 170]
  - Dropback QB decision: P(D_i | F(X_t,i)) multinomial over {d_ta, d_r, d_p} [PAGE 170]
  - Target prob: P(T_{j,i}=1 | F, D_i=Pass) Softmax normalized [PAGE 170]
  - Global catch: P(C_i=1 | ...) binary [PAGE 171]
  - Individual catch: P(C_{k,i}=1 | ..., T_j=1, C_i=1) Softmax over 16 players [PAGE 171]
- Conditional density estimation [PAGE 179-180]:
  - ^f(Y*_{t,i} | F(X_t,i)) via RFCDE
  - Expected within-play value: ∫ g(Y*_{t,i}) ^f(Y*_{t,i}|F) dY* (Equation 2 implicitly)
- Units: yards (distance), yards/second (speed), degrees (direction), Hz (10 Hz tracking rate), frames (discrete observations of continuous process).
- Breakdown: LSTM zero-padding to longest sequence, RMSE metric, LOWO CV (leave-1-week-out).
- Feature table variables: x_adj, y_adj, dir_target_endzone, s (yards/sec), dis, x_change, y_change, dist_to_ball, dir_wrt_bc_diff, voronoi variables.

**RETROCAUSAL_GENEALOGY**: Historical/scientific lineage & multi-week traps.
- Lineage: Gudmundsson and Horton (2016) review [PAGE 163]; Cervone et al. (2014, 2016b) basketball EPV two-level Markov chain [PAGE 165]; Link et al. (2016) soccer scoring probability [PAGE 165]; Fernández, Bornn, Cervone (2019) soccer EPV deep learning [PAGE 165]; Yurko, Horowitz, Ventura (2019) discrete-time EP/WP and nflscrapR [PAGE 164]; Burke (2019) DeepQB [PAGE 166]; Deshpande and Evans (2019) catch probability [PAGE 166]; Voronoi (1908) [PAGE 182]; Hochreiter and Schmidhuber (1997) LSTM [PAGE 174]; Tibshirani (1996) LASSO [PAGE 174]; Chen and Guestrin (2016) XGBoost [PAGE 174]; Kingma and Ba (2014) Adam [PAGE 174].
- Multi-week traps: Data only from first 6 weeks of 2017 season (Big Data Bowl) [PAGE 166, 167]; leave-1-week-out CV [PAGE 175]; small sample means rare events (fumbles) impractical [PAGE 180]; temporal non-stationarity across weeks not addressed; early-season vs late-season roster/strategy changes; weather not modeled; the "multi-week trap" is that generalization from 6 weeks to full season is unproven, and LOWO CV may leak week-specific effects.

**RECURSIVE_THEORY_OF_MIND**: Crisis habit regression vs counter-trap vs clock.
- This is a more abstract section. I need to interpret it through the lens of the paper.
- "Crisis habit regression": Under pressure (first contact, high-stakes moments), ball-carriers regress to habit; the LSTM captures this via temporal dependencies but the paper notes speed is an inherent function of the ball-carrier [PAGE 178, 181].
- "Counter-trap": The modular framework is a counter-trap to discrete-time play-by-play limitations; it allows substituting sub-models (Burke 2019, Deshpande & Evans 2019) [PAGE 166]. However, the un-implemented sub-models (QB decision, target, catch probabilities) are theoretical traps—if not implemented correctly, the whole chain breaks.
- "Clock": Game clock/play clock interactions; time remaining is typically of little value except end-of-half [PAGE 180]; the paper uses observed time of ball-carrier sequence to adjust game time remaining as an ad hoc approach [PAGE 180]; modeling joint distribution of yards and time remaining would double parameter space [PAGE 180].
- Crisis habit regression vs counter-trap vs clock: How the model handles sudden changes (first contact causing sharp prediction shifts [PAGE 176]), the one-second delay for blocking scheme changes [PAGE 178], and the clock management blind spot.

**CROSS_LAYER_VETO_ADJUDICATION**: Physical/biomechanical/weather veto proof.
- Physical layer: 22 players + ball, RFID chips at 10 Hz [PAGE 167]; Euclidean distances, Voronoi tessellations [PAGE 172]; adjusted coordinates relative to target endzone [PAGE 172].
- Biomechanical layer: speed (yards/second), distance traveled since previous frame, direction relative to endzone [PAGE 172, Table 2]; ball-carrier speed is top feature [PAGE 175]; conditioning on speed means gains from speed aren't attributed to player [PAGE 181].
- Weather veto proof: The paper does NOT model weather, field conditions, temperature, precipitation, wind. This is a veto layer—any continuous-time valuation is void if weather drastically alters friction, visibility, or player trajectory. The source text makes no mention of weather covariates [PAGE 172-173 feature list confirms no weather vars].
- Breakdown regimes: When RFID triangulation fails, when players are occluded, when speed is zero (line of scrimmage standoff), when Voronoi tessellation cannot capture blocking (teammates removed version attempts this but imperfectly [PAGE 173]).

**RLVR_COUNTERFACTUAL_VETOES**: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning Verifiable Rewards? Or just "verifiable veto scenarios". I'll interpret as counterfactual scenarios that would veto the model's predictions.
1. RPO (Run-Pass Option) ambiguity: Play type assumed known at start [PAGE 169]. If a QB keeps the ball on an RPO but the model conditions on "pass," the entire decision tree is wrong. Prediction: RMSE spikes on RPO plays; model should flag high uncertainty when pre-snap formation doesn't resolve to run/pass.
2. Speed conditioning attribution bias: Model conditions on observed ball-carrier speed [PAGE 181]. Counterfactual: If a slow ball-carrier breaks a long run due to scheme rather than speed, the model underestimates expected yards because speed feature is low; conversely overestimates for fast carriers in cluttered spaces. Prediction: Player evaluation metrics (yards above expectation) will systematically favor speed and underrate vision/blocking-dependent runners.
3. Independence assumption violation: Between-play EP/WP models include timeouts; within-play density should not [PAGE 180]. Counterfactual: Late-game, timeout-constrained plays where coaches alter ball-carrier aggression. Prediction: Continuous-time WP estimates will be biased in end-of-half situations where within-play decisions depend on clock/timeouts but between-play WP also conditions on timeouts, creating double-counting or contradiction.

Now I need to write this with >=1000 words total across sections. Let me make sure each section is substantial.

I must NOT mention betting lines (spreads, totals, moneylines, odds). The paper mentions win probability (WP), which is a probability, not betting odds. I can mention WP as a probability metric but must not frame it as betting odds.

I must not invent toy equations. I must use formal LaTeX from the paper.

Let me count words roughly. Each section should be several paragraphs.

Format: XML tags exactly as specified.

Let me draft carefully.

Page citations: I'll use [PAGE 164] etc. based on the journal page numbers in the source text.

Verbatim quotes: I need to include some exact quotes with page citations.

Let me write the response now.

Section 1: THINK_TRACE (>=400 words)
Section 2: SOURCE_OPERATORS_AND_EQUATIONS
Section 3: RETROCAUSAL_GENEALOGY
Section 4: RECURSIVE_THEORY_OF_MIND
Section 5: CROSS_LAYER_VETO_ADJUDICATION
Section 6: RLVR_COUNTERFACTUAL_VETOES

Let me ensure no betting lines. I'll refer to "win probability" as a probability [0,1] metric, not odds.

Let me check the source text for exact quotes I can use:
- "The NFL’s tracking data collected as follows: Two radio frequency identification (RFID) chips are placed in each player’s shoulder pads (and in the ball). The RFID chips emit a signal to sensors in each stadium, which triangulate the location of the chip on the field. The data is collected at a rate of 10 Hz..." [PAGE 167]
- "Our framework for providing continuously-updating within-play valuations is organized as follows..." [PAGE 169]
- "We find that long short-term memory (LSTM) recurrent neural networks outperform alternative approaches for this modeling task." [PAGE 166]
- "Since the LSTM is the best-performing model based on the LOWO CV criteria considered, we use its predicted values..." [PAGE 175]
- "As demonstrated in Figure 9, the ball-carrier speed is one of the most important features in modeling yards gained from the current position on the field. However, if we condition on the speed of a player in the model, any gains a ball-carrier makes as a result of being faster than other ball-carriers... will be not be attributed to that ball-carrier." [PAGE 181]
- "In our case, we use the EP and WP models from Yurko et al. (2019) for this purpose, since they only use information observable between plays." [PAGE 180]

I think I have enough. Let me compose the full response.

Word count check: I'll aim for ~1500-2000 words total to be safe.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s logical architecture rests on a single linchpin: the expected end-of-play yard line. Every downstream valuation—expected points (EP), win probability (WP), player value added—flows through this continuous-time estimate. The derivation proceeds in hops. First, raw tracking data arrive at 10 Hz from RFID chips in shoulder pads and the ball, yielding x, y, speed, and direction for all twenty-two players plus the ball [PAGE 167]. Second, these raw streams are transformed into adjusted features relative to the ball-carrier’s target endzone and relative to the ball-carrier himself, including Euclidean distances to the nearest defenders, Voronoi tessellation areas, and directional offsets [PAGE 172, Table 2; PAGE 173, Table 3]. Third, the ball-carrier model maps the filtration F(X_t, i)—the history of locations and trajectories through frame t on play i—to E[Y_{t,i} | F(X_t, i)], the expected additional yards from the current position [PAGE 168, notation; PAGE 170, framework]. Fourth, linearity of expectations converts this into E[Y*_{t,i} | F(X_t, i)], the expected end-of-play yard line [PAGE 170]. Fifth, conditional density estimation via random forests for conditional density estimation (RFCDE) replaces the point estimate with a full density ^f(Y*_{t,i} | F(X_t, i)), enabling integration against arbitrary between-play value functions g(Y*) such as EP or WP [PAGE 179–180].

The gray zones are substantial and multi-hop dependent. Hop-one dependency: the framework assumes play type (run versus dropback) is known at the snap, yet the authors explicitly acknowledge run-pass options (RPOs) violate this, citing the 2018 Baltimore Ravens as a case where this assumption becomes problematic [PAGE 169]. If the top-level node in Figure 4 is misclassified, every descendant probability—QB decision, target probability, catch probability, ball-carrier expectation—is conditioned on a false branch, collapsing the continuous-time valuation. Hop-two dependency: the LSTM’s superiority is established under leave-1-week-out (LOWO) cross-validation on only six weeks of 2017 Big Data Bowl tracking data [PAGE 167; PAGE 175]. Generalization to later seasons, different offensive schemata, or playoff pressure is untested; the model may capture week-specific tactical noise rather than invariant football dynamics. Hop-three dependency: player evaluation metrics condition on observed ball-carrier speed, which the authors admit means any yardage gained purely because a player is faster than average is not attributed to that player [PAGE 181]. This creates a systematic attribution bias in “yards above expectation” that regresses toward the population mean for speed, effectively penalizing slow, vision-dependent runners and rewarding fast, scheme-dependent carriers regardless of decision quality. Hop-four dependency: the independence assumption between within-play conditional density estimates and between-play EP/WP models can fail if timeouts remaining or end-of-game clock states influence both the within-play ball-carrier density and the between-play WP function [PAGE 180]. The breakdown regime is therefore not merely statistical but structural: when play type is ambiguous, when speed confounds skill, when weather or field friction alters RFID-derived kinematics, or when rare events (fumbles, blocked kicks) lack sufficient training density in a six-week sample [PAGE 180]. The model is interpolative within the observed feature manifold of early-season 2017 running plays and extracurricular outside it.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal notation from Section 3.1 [PAGE 168]:
- t > 0: continuous time between snap and end of play.
- Y: random variable for yards gained from the ball-carrier’s current position; Y^*: corresponding end-of-play yard line.
- X_t: data structure of locations and trajectories of all players and ball from start until time t.
- F(X_t, i): filtration of locations/trajectories through time t on play i, borrowing from Cervone et al. (2016b).
- E[Y_{t,i} | F(X_t, i)]: expected yards gained from current position.
- E[Y*_{t,i} | F(X_t, i)]: corresponding expected end-of-play yard line.

Framework operators [PAGE 169–170]:
Rushing plays: E[Y*_{t,i} | F(X_t, i)] = current yard line + E[Y_{t,i} | F(X_t, i)], by linearity of expectations [PAGE 170].

Quarterback decision model (dropbacks) [PAGE 170]:
P(D_i | F(X_t, i)) ~ Multinomial({d_ta = throw away, d_r = scramble/sack, d_p = pass}).
If D_i = d_ta: play ends at original yard line.
If D_i = d_r: ball-carrier model estimates expected end-of-play yard line.
If D_i = d_p: target probability for receiver j, P(T_{j,i} = 1 | F(X_t, i), D_i = Pass), softmax-normalized across five eligible receivers [PAGE 170, footnote 3].

Catch probability chain [PAGE 171]:
Global catch: P(C_i = 1 | F(X_t, i), D_i = Pass, T_j = 1), binary (catch vs. no catch, including interceptions).
Individual catch: P(C_{k,i} = 1 | F(X_t, i), D_i = Pass, T_j = 1, C_i = 1) for k in {5 offensive receivers, 11 defenders}, softmax-normalized over 16 potential catchers.

Conditional density extension [PAGE 179–180]:
Replace point estimate with ^f(Y*_{t,i} | F(X_t, i)) via RFCDE (Pospisil and Lee 2018).
Expected within-play value: ∫ g(Y*_{t,i}) ^f(Y*_{t,i} | F(X_t, i)) dY*_{t,i}, where g is EP or WP [PAGE 180, Equation 2 context].
Independence assumption: between-play EP/WP models are conditionally independent of within-play density because the former use only between-play observables (down, distance, yard line, time remaining) while the latter uses within-play observables [PAGE 180].

Units and measurement [PAGE 167; Table 2, PAGE 172]:
Tracking rate: 10 Hz (10 frames per second).
Speed s: yards/second.
Distance dis: yards traveled since previous frame.
Coordinates x_adj, y_adj: yards relative to target endzone and field center.
Direction dir_target_endzone: degrees, 0° facing endzone, ±(0,180) left/right.
x_change, y_change: yard differences preserving orientation.
dist_to_ball: Euclidean distance in yards.
Voronoi area: square yards on the playing surface.

Model validation [PAGE 174–175]:
Metric: root mean-squared error (RMSE), units: yards.
Resampling: leave-1-week-out (LOWO) cross-validation; train on weeks 1–5, predict week 6.
LSTM specification: two layers, fifty inputs per layer, recurrent dropout 20%, zero-padding to longest ball-carrier sequence [PAGE 174].
Baseline: intercept-only model [PAGE 174].
Breakdown regime: LOWO CV assumes week-exchangeability; with only six weeks of data, week-specific strategic shifts (e.g., Ravens’ late-2018 RPO heavy usage [PAGE 169]) are not represented in training or holdout folds.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper positions itself within a genealogical chain of spatio-temporal sports valuation. The immediate ancestor is the discrete-time play-by-play framework of Yurko, Horowitz, and Ventura (2019), operationalized in the nflscrapR R package, which provides EP and WP at the between-play level [PAGE 164]. The continuous-time lineage imports directly from basketball: Cervone et al. (2014, 2016b) introduced expected possession value (EPV) using a two-level Markov chain combining competing hazards of possession-changing events with continuous player movement [PAGE 165]. The soccer branch contributes Link, Lang, and Seidenschwarz (2016) for real-time scoring probability and Fernández, Bornn, and Cervone (2019) for deep-learning EPV with discrete-time expected goals, passing value, and drive value fused to continuous action likelihood [PAGE 165]. The authors explicitly note the structural similarities: hierarchical combination of discrete and continuous models, within-play valuation, and athlete-level value added [PAGE 165].

Within football, the NFL’s December 2018 “Big Data Bowl” release of the first six weeks of 2017 tracking data created the empirical substrate [PAGE 166]. Preceding work using that sample includes Burke (2019) DeepQB for quarterback decision-making, Deshpande and Evans (2019) for hypothetical completion probability, Chu et al. (2019) and Sterken (2019) for route classification, Dutta, Yurko, and Ventura (2019) for coverage annotation, and Haar (2019) for exploratory passing analysis [PAGE 166]. Yurko et al. (2020) extend this by integrating those modular pieces into a general continuous-time framework, though they implement only the ball-carrier sub-model, leaving QB decision, target probability, and catch probability models for future incorporation [PAGE 181].

The algorithmic genealogy runs deeper: Voronoi tessellation (Voronoi 1908) for spatial partitioning [PAGE 172; PAGE 182], LASSO (Tibshirani 1996) for high-dimensional linear regularization [PAGE 174], XGBoost (Chen and Guestrin 2016) for gradient-boosted trees [PAGE 174], feedforward neural networks with ReLU activations (Glorot, Bordes, and Bengio 2011; Goodfellow et al. 2016) [PAGE 174], Adam optimization (Kingma and Ba 2014) [PAGE 174], and LSTM recurrent networks (Hochreiter and Schmidhuber 1997) for temporal dependency [PAGE 174].

The “multi-week trap” is evident throughout. The training and evaluation data span only weeks 1–6 of the 2017 regular season [PAGE 166–167]. LOWO cross-validation [PAGE 175] respects temporal blocking but cannot detect non-stationarity across the season boundary or playoff intensity. Rare-event components—fumble survival hazards, blocked kicks, onside kicks—are explicitly deferred because a six-week sample contains too few occurrences for stable estimation [PAGE 180]. Weather, field surface, and stadium effects are absent from the feature tables [PAGE 172–173], meaning the model inherits any season-week confounding (e.g., early-season temperate conditions vs. late-season cold) without adjustment. Finally, the conditional density extension assumes independence between within-play yardage density and between-play EP/WP [PAGE 180], an assumption that weakens precisely in late-game, multi-week contexts where timeouts and clock management couple within-play aggression to between-play win probability.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under high-pressure within-play states—first contact, compressed Voronoi area, closing defender—the ball-carrier’s observable behavior may regress to habitual patterns encoded in the LSTM’s hidden state. The paper documents sharp prediction shifts at first contact during Patterson’s 47-yard touchdown run, where expected yardage jumps discontinuously once the defender engages [PAGE 176, Figure 10]. However, because the model conditions on observed ball-carrier speed [PAGE 175, Figure 9], any deviation attributable to crisis decision-making (e.g., cutting back against the flow, absorbing contact to extend the play) is partially absorbed by the speed covariate rather than credited to the carrier’s agency. This is a recursive attribution problem: the model sees speed, infers expected yards, and then evaluates the player relative to that expectation, yet speed itself is an output of the player’s crisis habits.

Counter-trap: The modular framework is designed as a counter-trap to the rigidity of discrete-time play-by-play valuation. By decomposing valuation into exchangeable sub-models (QB decision, target probability, global catch, individual catch, ball-carrier), the framework allows substitution of superior specialized models as they appear—Burke (2019) for QB decisions and Deshpande and Evans (2019) for catch probability are explicitly cited as drop-in replacements [PAGE 166, 181]. The counter-trap fails, however, if the top-level play-type classifier misfires on RPOs [PAGE 169], because the entire tree branches from a single known play-type node. An unobserved run-pass option creates a counterfactual branch that the model cannot traverse, rendering continuous-time valuation undefined for that play until post-hoc play-type correction.

Clock: The paper’s treatment of game time is ad hoc and explicitly acknowledged as a limitation [PAGE 180]. Observed ball-carrier sequence duration is subtracted from game time remaining as an input to EP/WP, but time remaining is “typically of little value” except in rare end-of-half situations [PAGE 180]. A joint RFCDE model of yards gained and time remaining would double the parameter space and was not attempted [PAGE 180]. The recursive trap emerges in end-of-half crisis scenarios: a ball-carrier may intentionally go out of bounds or score quickly to manipulate the clock, and because the model does not jointly model yardage-time dependence, the continuous-time WP trajectory misestimates the strategic value of clock management. The model therefore regresses to mean play duration in crisis clock situations, failing to capture the counter-trap of intentional clock manipulation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The sensor layer comprises RFID chips in shoulder pads and the ball, sampled at 10 Hz, triangulated by stadium sensors [PAGE 167]. The physical state space at each frame is 22 players × (x, y, direction, speed) plus ball, yielding the high-dimensional feature vector described in Tables 2–3 [PAGE 172–173]. Adjusted coordinates are computed relative to the ball-carrier’s target endzone; Euclidean distances to the nearest offensive and defensive players are ranked by proximity [PAGE 172].

Biomechanical layer: Speed (yards/second) and distance traveled since previous frame (yards) are primary kinematic inputs [PAGE 172, Table 2]. Direction relative to the target endzone (degrees) and direction relative to the ball-carrier for defenders capture facing angles critical to tackle probability [PAGE 172]. The authors identify ball-carrier speed and distance to closest defender as the two most important features across XGBoost and LASSO [PAGE 175, Figure 9]. A veto condition arises when speed is zero or near-zero at the line of scrimmage: the model’s kinematic discriminators collapse, and prediction reverts toward structural features (blocking, alignment) that are only indirectly represented via Voronoi tessellation [PAGE 173]. Because the model conditions on speed, a fast carrier in a cluttered box may be overrated relative to a slow carrier who reads blocks well, violating biomechanical reality where decision speed matters as much as linear speed.

Weather veto proof: The source text contains no weather, precipitation, temperature, wind, or field-condition covariates in Tables 2–3 [PAGE 172–173]. Therefore, any continuous-time valuation produced by this framework is void under weather regimes that materially alter player-surface interaction (e.g., rain reducing cutting ability, snow obscuring trajectories, extreme heat accelerating fatigue). The RFID triangulation itself may degrade under extreme atmospheric interference, though the paper does not quantify sensor failure modes [PAGE 167]. The breakdown regime is explicit: when environmental factors modulate the mapping from observed trajectory to expected yardage, the model’s conditional expectation E[Y_{t,i} | F(X_t, i)] is misspecified because the filtration lacks the environmental state variable.

Additional veto: Voronoi tessellation with teammates removed attempts to isolate blocking by considering only ball-carrier and defenders [PAGE 172], yet the authors acknowledge they lack a direct approach for blocker positioning and that teammate Voronoi edge-sharing is only an indirect proxy [PAGE 173]. In open-field runs where blocking schemes determine crease availability, the absence of explicit blocker modeling is a structural veto: the model cannot distinguish a hole created by a block from a hole created by defensive misalignment, both appearing as identical Voronoi area expansions [PAGE 176, Figure 11].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Run-Pass Option (RPO) play-type misclassification. The framework conditions on play type at the top node of Figure 4 and explicitly states this assumption is problematic for RPOs [PAGE 169]. Counterfactual: a QB reads a defensive alignment and keeps the ball on a designed RPO, but the model conditions on “pass,” activating target and catch probability branches that never occur. Verifiable prediction: RMSE for the expected end-of-play yard line will spike on plays where pre-snap formation and post-snap QB movement are discordant (unresolved run/pass), and continuous-time valuation curves will show impossible probability mass on receiver targets after the QB has already scrambled. The veto is triggered when the QB decision model’s entropy over {throw away, scramble/sack, pass} remains high at the snap; the model should output high-variance, low-confidence yardage estimates rather than point predictions.

Veto Scenario 2 — Speed-conditioned attribution bias in player evaluation. The model conditions on observed ball-carrier speed, meaning yardage gained because of elite speed is not attributed to the player, and yardage lost because of suboptimal speed is not penalized [PAGE 181]. Counterfactual: a slow, vision-dependent runner (e.g., a power back) breaks a long run via a cutback lane created by blocking; the model, seeing low speed and clustered defenders, predicts modest yardage. Verifiable prediction: “yards gained above expectation at handoff” will be systematically negative for low-speed/high-vision carriers and positive for high-speed/low-vision carriers across carriers with twenty or more carries [PAGE 178, Figure 12 context]. The veto is triggered when residual analysis shows speed coefficient sign and magnitude dominate the residual variance; player evaluation metrics must be recomputed using average population speed rather than observed per-play speed to avoid recursive self-penalization.

Veto Scenario 3 — Independence violation between within-play density and between-play WP in timeout-constrained end-of-half situations. The paper assumes between-play EP/WP models (which include timeouts remaining) are independent of within-play yardage density [PAGE 180]. Counterfactual: in the final two minutes of a half, a trailing team’s ball-carrier may deliberately run out of bounds or score quickly to preserve/stop the clock; the within-play yardage density is therefore a function of clock state, and clock state is also an input to the between-play WP model. Verifiable prediction: continuous-time WP trajectories computed via Equation (2) [PAGE 180] will show double-counting or contradiction in end-of-half drives—specifically, WP will overreact to yardage gains that are strategically meaningless because the clock, not the yard line, determines win probability. The veto is triggered when timeouts remaining > 0 and game clock < 120 seconds; in this regime, the joint distribution of (yards gained, time remaining) should be modeled via bivariate RFCDE rather than assuming independence, or the within-play WP estimate should be flagged as invalid.
</RLVR_COUNTERFACTUAL_VETOES>