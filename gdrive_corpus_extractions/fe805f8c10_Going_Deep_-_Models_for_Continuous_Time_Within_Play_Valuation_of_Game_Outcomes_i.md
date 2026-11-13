---
source: "Going Deep - Models for Continuous Time Within Play Valuation of Game Outcomes in American Football with Tracking Data.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 37
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6402
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "Going Deep: Models for Continuous-Time Within-Play Valuation of Game Outcomes in American Football with Tracking Data" by Yurko et al. (2019). They provided the full text across 37 pages.

The user's instructions are strict:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis following these exact XML section tags, with at least 1000 words total, ensuring the THINK_TRACE alone is >=400 words.

Key constraints:
- No betting lines (spreads, totals, moneylines, odds). The paper mentions win probability and expected points, but I must NOT frame them as betting odds. I can discuss them as statistical/game-theoretic quantities but must avoid "odds" language or betting implications.
- No fake toy equations. Use real LaTeX from the paper or formally derived ones. Cite page numbers.
- Exact XML sections.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words. Discuss:
- The core framework: tracking data at 10 Hz [PAGE 7], RFID chips [PAGE 7], 153,184 frames, 4,447 sequences [PAGE 8].
- Between-play independence assumption [PAGE 11]: value between plays conditionally independent of within-play tracking data given observable between-play factors.
- Framework topology [PAGE 12-13]: rushing vs passing decision tree, Softmax normalization [PAGE 13 footnote 4].
- Ball-carrier model: E(Y_i | F_carry(X_t,i)) [PAGE 10], linearity of expectations for end-of-play yard line [PAGE 10].
- LSTM architecture: 3 layers, 5 inputs each, recurrent dropout 20%, zero-padding [PAGE 20-21].
- RMSE results [PAGE 22-23]: Baseline 7.72, LASSO 6.43, XGBoost 5.98, FFNN 6.18, LSTM 5.65. Weighted RMSE [PAGE 23].
- Calibration via EPA mean near zero [PAGE 24-25], Figure 7.
- Gray zones: play type known at start [PAGE 32], RPO problem, no fumbles/survival component [PAGE 32-33], ad hoc time remaining [PAGE 33], speed conditioning bias in player evaluation [PAGE 33], rare events (77 rushing fumbles in 153,184 frames) [PAGE 33].
- Multi-hop: tracking -> ball-carrier yards -> end-of-play yard line -> between-play covariates (down, distance, score, time) -> EPA/WPA via Yurko et al. (2019) [PAGE 11-12].

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, citations.
- Define notation from [PAGE 10-11]:
  - t > 0 time between snap and end.
  - Y: yards gained from current position. Y*: end-of-play yard line.
  - X_t: locations/trajectories from start to t.
  - F(X_t): filtration.
  - E(Y_i | F_carry(X_t,i)) expected yards gained.
  - E(Y*_i | F_carry(X_t,i)) expected end-of-play yard line.
  - Y* = Y + current yard line (linearity of expectations) [PAGE 10, 12].
  - QB decision D_i in {d1=throw away, d2=run/sack, d3=pass} [PAGE 15-16].
  - P(T_{j,i}=1 | F_pass(X_t,i), D_i=Pass) target probability [PAGE 11, 16].
  - P(I_i=1 | ...) incompletion [PAGE 11, 16-17].
  - P(C_{k,i}=1 | ...) catch probability, 16 catchers [PAGE 11, 17-18].
  - Softmax normalization [PAGE 13, 16, 18].
- Features: x, y, s (speed in yards/second), dir (degrees), dis (distance since prev frame), dist to ball [PAGE 19-20, Table 2].
- Voronoi features: area, closest/farthest x to target endzone [PAGE 18-19].
- Models: Baseline, LASSO (glmnet, 1-SE rule via CV [PAGE 20]), XGBoost (100 trees, max depth 3 [PAGE 20]), FFNN (3 layers, 5 hidden units, ReLU, L1, Adam [PAGE 20]), LSTM (3 layers, 5 inputs, 20% recurrent dropout, zero-padding [PAGE 20-21]).
- Validation: Leave-one-week-out (LOWO) CV [PAGE 21-22], RMSE, weighted average RMSE by frames from end, mean EPA [PAGE 22].
- Units: Hz (10 Hz tracking), yards, seconds, degrees.
- Breakdown/singularity: rare fumbles (77 in 153,184 frames) [PAGE 33], play type known assumption [PAGE 32], ad hoc time [PAGE 33].

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Gudmundsson and Horton (2016) review [PAGE 2]. Cervone et al. (2014, 2016) EPV in basketball [PAGE 4]. Link et al. (2016) soccer scoring probability [PAGE 4]. Fernandez et al. (2019) soccer EPV deep learning [PAGE 4-5]. Burke (2019) DeepQB [PAGE 5]. Deshpande and Evans (2019) hypothetical completion probability [PAGE 5]. Yurko et al. (2019) nflscrapR / expected points and win probability [PAGE 3, 11, 24]. Tibshirani (1996) LASSO [PAGE 20]. Hochreiter and Schmidhuber (1997) LSTM [PAGE 20-21]. Tibshirani etc.
- Multi-week traps: Data only Weeks 1-6 2017 [PAGE 5, 7]. 153,184 frames, 4,447 sequences [PAGE 8]. Only 77 rushing fumbles [PAGE 33]. Small sample leads to overfitting risk, inability to model rare events, player evaluation heavily influenced by long runs/TDs (Fournette 6 TDs, 90/75 yard runs) [PAGE 29]. Leave-one-week-out CV may have temporal leakage if weeks are not independent (team strategies evolve). Short season sample (6 weeks) vs full season.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- This is a more abstract/theoretical section. I need to interpret "crisis habit regression" as teams/players regressing to habitual patterns under pressure. "Counter-trap" as defensive adjustments anticipating offensive tendencies. "Clock" as game clock/time remaining dynamics.
- Connect to paper: The framework assumes play type known at start [PAGE 32], but RPOs (run-pass options) break this—QB reads defense pre-snap and decides. This is a "counter-trap" where defense disguises coverage to induce wrong decision.
- Crisis habit regression: Under pressure (late game, score differential), ball-carriers may revert to habitual paths; model conditions on current speed/trajectory but may not capture strategic shifts in risk aversion.
- Clock: Ad hoc time remaining estimation [PAGE 33]. Time remaining only matters in rare end-of-half situations; the model ignores joint distribution of yards and time. This creates a singularity in end-game clock management where continuous-time valuation breaks down because time remaining is not modeled endogenously.
- Frame-level EPA attribution: Attributing EPA change solely to ball-carrier ignores blocking, defensive scheme, quarterback read—recursive theory of mind failure because it doesn't model what defenders think the ball-carrier will do.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: 10 Hz RFID sampling [PAGE 7]. Aliasing/Nyquist: sudden cuts faster than 100ms interval are missed. Player speed capped by tracking resolution.
- Biomechanical: Ball-carrier speed is input [PAGE 20, Table 2]. Conditioning on speed means faster players get less credit for speed-generated yards [PAGE 33]. Fatigue not modeled (no toy equation). Blocking not directly modeled, only indirectly via Voronoi [PAGE 19].
- Weather: Not mentioned in paper. Outdoor NFL games; weather affects traction, ball movement, but tracking data doesn't include weather covariates. This is a veto: without weather, model validity degrades in rain/snow/wind.
- Surface/turf: Not mentioned.
- Equipment: RFID in shoulder pads and ball [PAGE 7]. Signal occlusion, multipath in stadiums.
- Veto conditions: If RFID sampling drops below Nyquist for cutting frequency, continuous-time valuation is invalid. If weather not included, high-variance conditions veto reliability.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios where the model would fail or be vetoed.
Need 3 scenarios with predictions.
1. Fumble survival hazard: Model excludes fumbles [PAGE 32-33]. Counterfactual: In a high-stakes short-yardage situation, ball-carrier fumble probability spikes. Veto: Without survival component, expected yards overestimates value. Prediction: Model will overestimate end-of-play yard line in high-fumble-risk contexts (e.g., hits near sideline, stripped ball).
2. RPO play-type unknown: Framework assumes play type known at start [PAGE 32]. Counterfactual: RPO where QB decides after snap based on defender. Veto: The decision tree root (run vs pass) is mis-specified. Prediction: Continuous-time EPV will be biased toward the pre-snap play type, failing to capture the option value of the read.
3. Speed-conditioning attribution bias: Speed is a feature [PAGE 33]. Counterfactual: Two ball-carriers, one fast (95th percentile) and one slow, identical blocking. Veto: Because speed is conditioned on, fast player's extra yards are not attributed to him; slow player's shortfall is not penalized. Prediction: EPA per frame will compress talent differences, making elite speedsters appear average and plodders appear above replacement.

Must not mention betting odds. I need to check for any accidental "odds" mentions. The paper mentions "win probability" and "expected points"—those are fine, but I must not say "betting odds" or "spreads."

Word count: Need >=1000 words total. THINK_TRACE >=400 words.

Let me start writing, ensuring each section is detailed and well-cited with [PAGE N].

Be careful with LaTeX formatting: use proper LaTeX inline and display.

I will write the XML sections exactly as requested.

Let's draft.

THINK_TRACE (>=400 words):

The framework decomposes continuous-time play value into a causal chain: raw tracking telemetry at 10 Hz [PAGE 7] filtered through an LSTM ball-carrier model that outputs expected remaining yards E(Y_i | F_carry(X_t,i)) [PAGE 10], then projected through linearity of expectations to an expected end-of-play yard line E(Y*_i | F_carry(X_t,i)) = current yard line + E(Y_i | ...) [PAGE 10, 12]. That scalar is fed into discrete between-play covariates—down, yard line, yards to go, score differential, time remaining—which are then scored by Yurko et al. (2019) expected points and win probability models [PAGE 11-12, 24]. A critical gray zone is the conditional independence assumption at [PAGE 11]: between-play value is declared independent of within-play tracking information given observable game-state covariates. This is defensible for settled situations (e.g., 3rd and 2 at the opponent's 26) but becomes fragile when the play itself alters the information set available to the defense for the next play, a second-order effect the framework discards by design.

Another gray zone is the decision-tree topology for passing plays [PAGE 12-13]. The quarterback's multinomial decision D_i in {throw away, run/sack, pass} [PAGE 15-16] gates downstream target, incompletion, and catch models. Each terminal node eventually maps to a ball-carrier estimate or a non-ball-carrier termination (incompletion/throwaway). Softmax normalization is applied at each split [PAGE 13 footnote 4, PAGES 16, 18] to force valid probability simplices. The model validation employs leave-one-week-out (LOWO) cross-validation [PAGE 21-22], training on weeks 1-5 and testing week 6. Because only six weeks of 2017 data exist [PAGE 7, 5], the "holdout week" is both a temporal partition and a single-game-week slice, creating high variance in performance estimates and limiting the ability to detect season-long scheme evolution.

The LSTM selection is justified by three criteria: overall RMSE (5.65 yards vs. 7.72 baseline) [PAGE 22], weighted RMSE emphasizing late-play frames (4.11 vs. 6.10 baseline) [PAGE 23], and calibration of mean EPA near zero [PAGE 24-25]. Yet the calibration criterion reveals a subtle selection bias: frames farther from the end of a sequence disproportionately belong to long runs, inflating RMSE at large horizons [PAGE 23]. This means model comparison across the sequence horizon is not stationary; the metric itself conditions on sequence length.

A final gray zone concerns attribution. Frame-level EPA changes are credited entirely to the ball-carrier [PAGE 28-29], despite the value being a function of all 22 players [PAGE 6]. Conditioning on ball-carrier speed [PAGE 20, Table 2] further removes speed differential from player credit [PAGE 33], systematically biasing evaluations against slower backs and for faster ones in ways the paper acknowledges but does not fully correct.

SOURCE_OPERATORS_AND_EQUATIONS:

Formal notation from [PAGE 10-11]:
- t > 0: continuous time between snap and end of play, measured in seconds. Tracking rate: 10 Hz, so Δt = 0.1 s between observations [PAGE 7].
- X_t: data structure of locations and trajectories of all players and ball from snap to t [PAGE 10].
- F(X_t): filtration of player/ball locations and trajectories [PAGE 10].
- Y_i: random variable for yards gained from ball-carrier's current position on play i [PAGE 10].
- Y*_i: corresponding end-of-play yard line [PAGE 10].
- Ball-carrier conditional expectation: E(Y_i | F_carry(X_t,i)) [PAGE 10].
- End-of-play yard line via linearity: E(Y*_i | F_carry(X_t,i)) = current_yard_line_i + E(Y_i | F_carry(X_t,i)) [PAGE 10, 12].
- QB decision D_i ∈ {d_1 = throw away, d_2 = run/sack, d_3 = pass}; P(D_i | F_decision(X_t,i)) is a PMF over this set [PAGE 15-16].
- Target probability: P(T_{j,i} = 1 | F_pass(X_t,i), D_i = Pass) for j = 1..5 eligible receivers [PAGE 11, 16].
- Incompletion probability: P(I_i = 1 | F_inc(X_t,i), D_i = Pass, T_j = 1) [PAGE 11, 16-17].
- Catch probability: P(C_{k,i} = 1 | F_catch(X_t,i), D_i = Pass, T_j = 1, I_i = 0) for k = 1..16 catchers (5 offense + 11 defense) [PAGE 11, 17-18].
- Softmax normalization applied to target and catch probabilities to form valid distributions [PAGE 13, 16, 18].

Features [PAGE 19-20, Table 2]:
- bc_x, bc_y: horizontal/vertical field coordinates (yards).
- bc_s: speed in yards/second.
- bc_dir: direction in degrees.
- bc_dis: distance traveled since previous frame (yards).
- offenseX/defenseX variants for X closest teammates/defenders; dist to ball = Euclidean distance to ball-carrier (yards).
- Voronoi features: voronoi_bc_area (area of ball-carrier's Voronoi cell, square yards), voronoi_bc_close/far (x-coordinates of cell boundary closest/farthest to target endzone, yards) [PAGE 18-19].

Models [PAGE 20-21]:
- Baseline: intercept only.
- LASSO: L1-regularized linear regression via glmnet; one-standard-error penalty from cross-validation [PAGE 20].
- XGBoost: gradient boosted trees; default 100 trees, max depth 3 [PAGE 20].
- Feedforward NN: 3 layers, 5 hidden units each, ReLU activations, L1 regularization, Adam optimizer [PAGE 20].
- LSTM: 3 layers, 5 inputs per layer, recurrent dropout rate 0.20 per layer; sequences zero-padded to maximum length [PAGE 20-21].

Validation [PAGE 21-23]:
- Leave-one-week-out (LOWO) CV: train on weeks 1-5, predict week 6.
- Metric 1: overall holdout RMSE (yards). Baseline 7.72, LASSO 6.43, XGBoost 5.98, FFNN 6.18, LSTM 5.65 [PAGE 22].
- Metric 2: weighted average RMSE across frames from end of ball-carrier sequence; LSTM 4.11 best [PAGE 23].
- Metric 3: mean expected points added (EPA); calibration check that mean EPA ≈ 0 [PAGE 22, 24-25].

Breakdown / singularity regimes:
- Rare events: only 77 rushing fumbles in 153,184 rushing frames across 4,447 sequences [PAGE 33]; survival/fumble hazard component is impractical without multiple seasons.
- Play-type stationarity: assumes play type known at play start [PAGE 32]; invalid for run-pass options (RPOs) where decision is reactive.
- Time remaining: ad hoc update, not jointly modeled with yards gained [PAGE 33]; breaks down in end-of-half clock situations where time and yardage are strategically coupled.

RETROCAUSAL_GENEALOGY:

Historical lineage. The paper inherits from Gudmundsson and Horton (2016) survey of spatio-temporal team sports analysis [PAGE 2]. In basketball, Cervone et al. (2014, 2016) built Expected Possession Value (EPV) via competing hazards for possession-changing events combined with continuous player movement [PAGE 4]. In soccer, Link et al. (2016) modeled probability of scoring continuously during possessions [PAGE 4], and Fernandez et al. (2019) extended this with deep learning and a multi-level expected-goals/passing-value/drive-value hierarchy [PAGE 4-5]. In football specifically, Burke (2019) DeepQB models receiver target probability, pass outcome, and expected yards [PAGE 5]; Deshpande and Evans (2019) estimate hypothetical completion probability via counterfactual within-play features [PAGE 5]. The between-play valuation backbone relies on Yurko et al. (2019) expected points and win probability models, implemented in nflscrapR [PAGE 3, 11, 24]. Classical statistical components include Tibshirani (1996) LASSO [PAGE 20] and Hochreiter & Schmidhuber (1997) LSTM [PAGE 20-21].

Multi-week traps. The data span only NFL Weeks 1-6 of the 2017 season [PAGE 5, 7], yielding 1,075,720 frames across 14,167 plays and, after filtering for running plays, 153,184 frames from 4,447 ball-carrier sequences [PAGE 8]. This short panel creates several traps. First, team-level strategic adaptation across a season is unobservable; a model trained on early-season weeks may not generalize to late-season schemes (e.g., the 2018 Baltimore Ravens' run-pass option expansion noted at [PAGE 32]). Second, rare-event estimation is starved: with only 77 rushing fumbles [PAGE 33], a fumble survival hazard cannot be estimated, and the model implicitly assumes fumble probability is zero—a strong assumption that breaks down in high-contact, high-variance situations. Third, player-level evaluation is confounded by small-sample outliers: Leonard Fournette's six touchdowns, including 90- and 75-yard runs, inflate his EPA per frame in this six-week window [PAGE 29], meaning cross-seasonal claims about player quality are underpowered. Fourth, LOWO cross-validation treats week 6 as an independent holdout, but within a six-week window, opponent adjustments and injury-driven personnel changes induce temporal dependence that standard CV does not capture, inflating confidence in the LSTM's generalizability.

RECURSIVE_THEORY_OF_MIND:

This section evaluates the model as an agent embedded in a strategic game with recursive beliefs. The framework's top-level node assumes the play type (run vs. pass) is known at the snap [PAGE 32]. This is a "crisis habit regression" failure mode: under pressure, offenses increasingly use run-pass options (RPOs) where the quarterback reads the defense post-snap and chooses run or pass based on defensive alignment [PAGE 32]. Because the model conditions on a fixed play type, it cannot represent the option value of the quarterback's decision; the decision tree root is mis-specified whenever the defense can induce a wrong read by disguising coverage—a "counter-trap" where the defense's hidden information set dictates the offense's optimal action.

The clock layer introduces another recursive breakdown. Time remaining is updated ad hoc at the end of the play rather than modeled as a joint continuous variable with yardage [PAGE 33]. In end-of-half or end-of-game situations, offense and defense recursively condition on each other's clock management: a team trailing may accept a shorter gain to stop the clock, while a leading team may maximize yardage at the cost of time. Because the ball-carrier model does not endogenize time remaining as a choice variable, it cannot model this recursion; continuous-time valuation collapses to a myopic yardage forecast exactly when strategic clock behavior matters most.

Attribution theory of mind fails at the frame level [PAGE 28-29]. The model credits EPA changes solely to the ball-carrier, although the value surface is a function of all 22 players [PAGE 6]. This is a failure to model the defensive counterfactual: what would have happened had the defender taken a different pursuit angle? Without modeling defender beliefs and reactions, the ball-carrier's "value added" is confounded by blocking quality, defensive over-pursuit, and scheme. Conditioning on ball-carrier speed [PAGE 33] further removes a key dimension of player-specific heterogeneity from the attribution, creating a mean-regression bias where fast runners are evaluated as if their speed were average and slow runners as if their slowness were average.

CROSS_LAYER_VETO_ADJUDICATION:

Physical layer veto: RFID chips in shoulder pads and ball emit signals triangulated by stadium sensors at 10 Hz [PAGE 7]. The Nyquist frequency is 5 Hz; any player acceleration, cut, or direction change occurring at a spatial scale shorter than the 0.1 s sampling interval is aliased or missed entirely. In short-area quickness situations (e.g., a cutback against a pursuing linebacker), the continuous-time trajectory is under-sampled, so the LSTM receives a corrupted state X_t and its forecast E(Y_i | F_carry(X_t,i)) is biased toward linear interpolation between observed frames.

Biomechanical layer veto: Ball-carrier speed is an explicit input feature (bc s, yards/second) [PAGE 20, Table 2]. The model conditions on realized speed, meaning it cannot separate the value of speed itself from the value of vision, cutting, or contact balance. As the authors note, this denies credit to fast ball-carriers and withholds blame from slow ones [PAGE 33]. Blocking is not directly modeled; it enters only indirectly through Voronoi tessellations of teammate locations [PAGE 19]. In runs where a lead blocker creates a crease, the model attributes the resulting yardage to the ball-carrier's current kinematic state rather than to the blocker's action—a structural omission that vetoes fair offensive-line evaluation.

Weather and surface layer veto: The paper contains no weather covariates (precipitation, temperature, wind) or surface type (turf vs. grass). Outdoor NFL tracking data collected in rain, snow, or high wind will exhibit different ball bounce, player traction, and cutting efficiency, none of which are represented in X_t [PAGE 18-20]. The model's error distribution is therefore heteroskedastic across weather regimes, with elevated RMSE in adverse conditions unaccounted for by the LOWO validation [PAGE 22-23].

Equipment layer: RFID signal occlusion in dense player clusters (e.g., at the line of scrimmage) or multipath reflection in stadium structures can produce position jitter. Because the framework assumes X_t is a faithful filtration of true locations [PAGE 10], systematic measurement error near contact points invalidates the first-contact frame predictions that weight heavily in the weighted RMSE criterion [PAGE 23].

Veto rule: Any deployment in weather-variant conditions, sub-10-Hz effective sampling due to occlusion, or play types where the root decision is not exogenously known (RPOs) must be vetoed until the corresponding sub-models are added and re-validated.

RLVR_COUNTERFACTUAL_VETOES:

Scenario 1: Fumble survival hazard omission.
Counterfactual: A ball-carrier on third-and-one is hit at the goal line; fumble probability spikes due to contact intensity and strip attempts. The paper explicitly excludes fumbles, noting only 77 rushing fumbles in 153,184 frames [PAGE 33] and stating a survival component is left to future work [PAGE 32-33].
Veto: Without modeling P(fumble | X_t) as a time-varying hazard, the model assigns positive expected yardage to a play that terminates in a turnover.
Prediction: In high-contact, short-yardage goal-line situations, expected end-of-play yard line will be systematically overstated relative to actual outcomes; WPA for ball-carriers in these situations will be inflated by the value of unmodeled fumble risk.

Scenario 2: RPO play-type mis-specification.
Counterfactual: A run-pass option play where the quarterback reads an unblocked defender post-snap and hands off or keeps based on defender movement. The framework assumes play type is known at the start [PAGE 32].
Veto: The root decision node D_i is exogenously fixed rather than endogenously responsive to defensive alignment; the model cannot branch to the correct subtree after the snap.
Prediction: Continuous-time EPA on RPO plays will track the pre-snap play-type assumption, not the realized post-snap decision; frame-level value curves will show a discontinuity at the moment the quarterback makes the read, which the LSTM cannot forecast because its state X_t does not encode the quarterback's latent decision rule.

Scenario 3: Speed-conditioning attribution bias.
Counterfactual: Two running backs with identical blocking and defensive fronts; one runs at 95th-percentile speed, the other at 5th-percentile. Speed is a model input [PAGE 20, Table 2] and the authors note conditioning on it removes speed-based credit/blame [PAGE 33].
Veto: The model attributes yards gained to the current kinematic state rather than to player-specific skill differentials; fast players' extra yards are "explained away" by their speed feature, while slow players' shortfall is likewise absorbed.
Prediction: EPA per frame will compress the talent distribution: elite-speed ball-carriers will appear average and below-average-speed ball-carriers will appear above replacement, distorting player-evaluation leaderboards such as Tables 6-7 [PAGE 31].

Now let me assemble everything. Need to ensure total word count >= 1000. Let me estimate:
THINK_TRACE: likely ~450-500 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~350 words.
RETROCAUSAL_GENEALOGY: ~300 words.
RECURSIVE_THEORY_OF_MIND: ~250 words.
CROSS_LAYER_VETO_ADJUDICATION: ~250 words.
RLVR_COUNTERFACTUAL_VETOES: ~250 words.
Total should be well over 1000.

I must not mention betting lines. I used "expected points" and "win probability" which is fine. No spreads, totals, moneylines, odds.

Check: Did I use "odds" anywhere? I see "odds" is not used. Good.

Check citations: All have [PAGE N].

Check LaTeX: proper formatting.

Let me refine the text for flow and word count. I'll make THINK_TRACE robustly over 400 words.

Writing now.
</NATIVE_REASONING>

<THINK_TRACE>
The framework decomposes continuous-time play value into a causal chain that begins with raw tracking telemetry sampled at 10 Hz [PAGE 7], where RFID chips in shoulder pads and the ball emit triangulated positions ten times per second. This telemetry is filtered through an LSTM ball-carrier model that outputs the expected remaining yards E(Y_i | F_carry(X_t,i)) [PAGE 10], which is then projected through linearity of expectations into an expected end-of-play yard line E(Y*_i | F_carry(X_t,i)) = current_yard_line_i + E(Y_i | F_carry(X_t,i)) [PAGE 10, 12]. That scalar is fed into discrete between-play covariates—down, yard line, yards to go, score differential, time remaining—which are scored by Yurko et al. (2019) expected points and win probability models implemented in nflscrapR [PAGE 11-12, 24].

A critical gray zone is the conditional independence assumption stated at [PAGE 11]: between-play value is declared independent of within-play tracking information given observable game-state covariates. This is defensible for settled situations, such as third-and-two at the opponent's twenty-six yard line, but becomes fragile when the play itself alters the information set available to the defense for the next play, a second-order effect the framework discards by design.

Another gray zone is the decision-tree topology for passing plays [PAGE 12-13]. The quarterback's multinomial decision D_i in {throw away, run/sack, pass} gates downstream target, incompletion, and catch models [PAGE 15-16]. Each terminal node eventually maps to a ball-carrier estimate or a non-ball-carrier termination (incompletion or throwaway). Softmax normalization is applied at each split [PAGE 13 footnote 4; PAGES 16, 18] to force valid probability simplices over receivers and catchers.

Validation uses leave-one-week-out (LOWO) cross-validation, training on weeks one through five and predicting week six [PAGE 21-22]. Because only six weeks of 2017 data exist [PAGE 5, 7], the holdout week is both a temporal partition and a single-game-week slice, creating high variance in performance estimates and limiting detection of season-long scheme evolution.

The LSTM selection is justified by three criteria: overall RMSE (5.65 yards versus 7.72 baseline) [PAGE 22], weighted RMSE emphasizing late-play frames (4.11 versus 6.10 baseline) [PAGE 23], and calibration of mean expected points added near zero [PAGE 24-25]. Yet the calibration criterion reveals a subtle selection bias: frames farther from the end of a sequence disproportionately belong to long runs, inflating RMSE at large horizons [PAGE 23]. This means model comparison across the sequence horizon is not stationary; the metric itself conditions on sequence length.

A final gray zone concerns attribution. Frame-level EPA changes are credited entirely to the ball-carrier [PAGE 28-29], despite the value being a function of all 22 players [PAGE 6]. Conditioning on ball-carrier speed [PAGE 20, Table 2] further removes speed differential from player credit [PAGE 33], systematically biasing evaluations against slower backs and for faster ones in ways the paper acknowledges but does not fully correct.

Rare-event regimes compound these issues. Only 77 rushing fumbles appear in 153,184 rushing frames across 4,447 sequences [PAGE 33], so a fumble survival hazard is impractical to estimate and is effectively assumed to be zero. Play-type stationarity is assumed at the snap [PAGE 32], which breaks down for run-pass options where the quarterback decides post-snap. Time remaining is updated ad hoc rather than modeled jointly with yardage [PAGE 33], which breaks down in end-of-half clock situations where time and yardage are strategically coupled. The small sample also means player-level metrics are heavily influenced by long runs and touchdowns, such as Leonard Fournette's six touchdowns including 90- and 75-yard runs in six weeks [PAGE 29], underpowering cross-seasonal claims about player quality.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal notation from [PAGE 10-11]:
- t > 0: continuous time between snap and end of play, measured in seconds. Tracking rate is 10 Hz, so Δt = 0.1 s between observations [PAGE 7].
- X_t: data structure of locations and trajectories of all players and ball from snap to t [PAGE 10].
- F(X_t): filtration of player and ball locations and trajectories [PAGE 10].
- Y_i: random variable for yards gained from the ball-carrier's current position on play i [PAGE 10].
- Y*_i: corresponding end-of-play yard line [PAGE 10].
- Ball-carrier conditional expectation: E(Y_i | F_carry(X_t,i)) [PAGE 10].
- End-of-play yard line via linearity: E(Y*_i | F_carry(X_t,i)) = current_yard_line_i + E(Y_i | F_carry(X_t,i)) [PAGE 10, 12].
- QB decision D_i ∈ {d_1 = throw away, d_2 = run/sack, d_3 = pass}; P(D_i | F_decision(X_t,i)) is a PMF over this set [PAGE 15-16].
- Target probability: P(T_{j,i} = 1 | F_pass(X_t,i), D_i = Pass) for j = 1,...,5 eligible receivers [PAGE 11, 16].
- Incompletion probability: P(I_i = 1 | F_inc(X_t,i), D_i = Pass, T_j = 1) [PAGE 11, 16-17].
- Catch probability: P(C_{k,i} = 1 | F_catch(X_t,i), D_i = Pass, T_j = 1, I_i = 0) for k = 1,...,16 catchers (5 offense + 11 defense) [PAGE 11, 17-18].
- Softmax normalization is applied to target probabilities [PAGE 13, 16] and catch probabilities [PAGE 18] to form valid distributions over the respective simplexes.

Features from [PAGE 19-20, Table 2]:
- bc_x, bc_y: horizontal and vertical field coordinates in yards.
- bc_s: speed in yards/second.
- bc_dir: direction in degrees.
- bc_dis: distance traveled since previous frame in yards.
- offenseX and defenseX variants for the X closest teammates and defenders; dist to ball is Euclidean distance to the ball-carrier in yards.
- Voronoi features [PAGE 18-19]: voronoi_bc_area (area of ball-carrier's Voronoi cell in square yards); voronoi_bc_close and voronoi_bc_far (x-coordinates of cell boundary closest and farthest to target endzone in yards).

Models from [PAGE 20-21]:
- Baseline: intercept only.
- LASSO: L1-regularized linear regression via glmnet; one-standard-error penalty selected by cross-validation [PAGE 20].
- XGBoost: gradient boosted trees; default 100 trees, maximum depth of 3 splits [PAGE 20].
- Feedforward neural network: 3 layers, 5 hidden units each, ReLU activations, L1 regularization, Adam optimizer [PAGE 20].
- LSTM: 3 layers, 5 inputs per layer, recurrent dropout rate 0.20 per layer; sequences zero-padded to maximum sequence length [PAGE 20-21].

Validation from [PAGE 21-23]:
- Leave-one-week-out (LOWO) cross-validation: train on weeks 1-5, predict week 6.
- Metric 1: overall holdout RMSE in yards. Baseline 7.72; LASSO 6.43; XGBoost 5.98; Feedforward NN 6.18; LSTM 5.65 [PAGE 22].
- Metric 2: weighted average RMSE across frames from end of ball-carrier sequence; LSTM 4.11 best [PAGE 23].
- Metric 3: mean expected points added (EPA); calibration check that mean EPA ≈ 0 [PAGE 22, 24-25].

Breakdown and singularity regimes:
- Rare events: only 77 rushing fumbles in 153,184 rushing frames across 4,447 sequences [PAGE 33]; a fumble survival/hazard component is impractical without multiple seasons of tracking data.
- Play-type stationarity: assumes play type known at play start [PAGE 32]; invalid for run-pass options where the decision is reactive to post-snap defensive alignment.
- Time remaining: ad hoc update, not jointly modeled with yards gained [PAGE 33]; breaks down in end-of-half clock situations where time and yardage are strategically coupled.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper's intellectual lineage begins with Gudmundsson and Horton (2016), whose survey of spatio-temporal team-sports analysis establishes the tracking-data foundation [PAGE 2]. In basketball, Cervone et al. (2014, 2016) developed Expected Possession Value (EPV) by combining competing hazards for possession-changing events with continuous player movement models [PAGE 4]. In soccer, Link et al. (2016) modeled continuous probability of scoring during possessions [PAGE 4], and Fernandez et al. (2019) extended this with deep learning and a multi-level hierarchy of expected goals, passing value, and drive value [PAGE 4-5]. In football specifically, Burke (2019) introduced DeepQB for receiver target probability, pass outcome, and expected yards [PAGE 5], while Deshpande and Evans (2019) estimated hypothetical completion probability through counterfactual within-play features [PAGE 5]. The between-play valuation backbone relies on Yurko et al. (2019) expected points and win probability models as implemented in nflscrapR [PAGE 3, 11, 24]. Classical components include Tibshirani (1996) for LASSO [PAGE 20] and Hochreiter & Schmidhuber (1997) for LSTM networks [PAGE 20-21].

The multi-week traps arise from the narrow data window. The NFL released tracking data only for Weeks 1-6 of the 2017 season [PAGE 5, 7], producing 1,075,720 frames across 14,167 plays and, after filtering for running plays, 153,184 frames from 4,447 ball-carrier sequences [PAGE 8]. This short panel creates four traps. First, team-level strategic adaptation across a season is unobservable; a model trained on early-season weeks may not generalize to late-season schemes, such as the 2018 Baltimore Ravens' run-pass option expansion noted at [PAGE 32]. Second, rare-event estimation is starved: with only 77 rushing fumbles [PAGE 33], a fumble survival hazard cannot be estimated, and the model implicitly assumes fumble probability is zero—an assumption that breaks down in high-contact, high-variance situations. Third, player-level evaluation is confounded by small-sample outliers: Leonard Fournette's six touchdowns, including 90- and 75-yard runs, inflate his EPA per frame in this six-week window [PAGE 29], meaning cross-seasonal claims about player quality are underpowered. Fourth, LOWO cross-validation treats week 6 as an independent holdout, but within a six-week window, opponent adjustments and injury-driven personnel changes induce temporal dependence that standard CV does not capture, inflating confidence in the LSTM's generalizability beyond this narrow sample.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The framework can be read as an agent embedded in a strategic game with recursive beliefs, and it exhibits several theory-of-mind failure modes. The top-level node assumes the play type (run vs. pass) is known at the snap [PAGE 32]. This is a crisis habit regression failure mode: under pressure, offenses increasingly use run-pass options (RPOs) where the quarterback reads the defense post-snap and chooses run or pass based on defensive alignment [PAGE 32]. Because the model conditions on a fixed play type, it cannot represent the option value of the quarterback's decision; the decision-tree root is mis-specified whenever the defense can induce a wrong read by disguising coverage—a counter-trap where the defense's hidden information set dictates the offense's optimal action.

The clock layer introduces another recursive breakdown. Time remaining is updated ad hoc at the end of the play rather than modeled as a joint continuous variable with yardage [PAGE 33]. In end-of-half or end-of-game situations, offense and defense recursively condition on each other's clock management: a team trailing may accept a shorter gain to stop the clock, while a leading team may maximize yardage at the cost of time. Because the ball-carrier model does not endogenize time remaining as a choice variable, it cannot model this recursion; continuous-time valuation collapses to a myopic yardage forecast exactly when strategic clock behavior matters most.

Attribution theory of mind fails at the frame level [PAGE 28-29]. The model credits EPA changes solely to the ball-carrier, although the value surface is a function of all 22 players [PAGE 6]. This is a failure to model the defensive counterfactual: what would have happened had the defender taken a different pursuit angle? Without modeling defender beliefs and reactions, the ball-carrier's value added is confounded by blocking quality, defensive over-pursuit, and scheme. Conditioning on ball-carrier speed [PAGE 33] further removes a key dimension of player-specific heterogeneity from the attribution, creating a regression-to-the-mean bias where fast runners are evaluated as if their speed were average and slow runners as if their slowness were average.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: RFID chips in shoulder pads and the ball emit signals triangulated by stadium sensors at 10 Hz [PAGE 7]. The Nyquist frequency is 5 Hz; any player acceleration, cut, or direction change occurring at a spatial scale shorter than the 0.1 s sampling interval is aliased or missed entirely. In short-area quickness situations, such as a cutback against a pursuing linebacker, the continuous-time trajectory is under-sampled, so the LSTM receives a corrupted state X_t and its forecast E(Y_i | F_carry(X_t,i)) is biased toward linear interpolation between observed frames.

Biomechanical layer veto: Ball-carrier speed is an explicit input feature (bc s, yards/second) [PAGE 20, Table 2]. The model conditions on realized speed, meaning it cannot separate the value of speed itself from vision, cutting, or contact balance. As the authors note, this denies credit to fast ball-carriers and withholds blame from slow ones [PAGE 33]. Blocking is not directly modeled; it enters only indirectly through Voronoi tessellations of teammate locations [PAGE 19]. In runs where a lead blocker creates a crease, the model attributes the resulting yardage to the ball-carrier's current kinematic state rather than to the blocker's action—a structural omission that vetoes fair offensive-line evaluation.

Weather and surface layer veto: The paper contains no weather covariates (precipitation, temperature, wind) or surface type (turf vs. grass). Outdoor NFL tracking data collected in rain, snow, or high wind will exhibit different ball bounce, player traction, and cutting efficiency, none of which are represented in X_t [PAGE 18-20]. The model's error distribution is therefore heteroskedastic across weather regimes, with elevated RMSE in adverse conditions unaccounted for by the LOWO validation [PAGE 22-23].

Equipment layer veto: RFID signal occlusion in dense player clusters, such as at the line of scrimmage, or multipath reflection in stadium structures can produce position jitter. Because the framework assumes X_t is a faithful filtration of true locations [PAGE 10], systematic measurement error near contact points invalidates first-contact frame predictions, which weight heavily in the weighted RMSE criterion [PAGE 23].

Veto rule: Any deployment in weather-variant conditions, sub-10-Hz effective sampling due to occlusion, or play types where the root decision is not exogenously known, such as RPOs, must be vetoed until the corresponding sub-models are added and re-validated.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Fumble survival hazard omission. Counterfactual: A ball-carrier on third-and-one is hit at the goal line; fumble probability spikes due to contact intensity and strip attempts. The paper explicitly excludes fumbles, noting only 77 rushing fumbles in 153,184 frames [PAGE 33], and states a survival component is left to future work [PAGE 32-33]. Veto: Without modeling P(fumble | X_t) as a time-varying hazard, the model assigns positive expected yardage to a play that terminates in a turnover. Prediction: In high-contact, short-yardage goal-line situations, expected end-of-play yard line will be systematically overstated relative to actual outcomes, inflating WPA for ball-carriers by the value of unmodeled fumble risk.

Scenario 2: RPO play-type mis-specification. Counterfactual: A run-pass option play where the quarterback reads an unblocked defender post-snap and hands off or keeps based on defender movement. The framework assumes play type is known at the start [PAGE 32]. Veto: The root decision node D_i is exogenously fixed rather than endogenously responsive to defensive alignment; the model cannot branch to the correct subtree after the snap. Prediction: Continuous-time EPA on RPO plays will track the pre-snap play-type assumption, not the realized post-snap decision; frame-level value curves will show a discontinuity at the moment the quarterback makes the read, which the LSTM cannot forecast because X_t does not encode the quarterback's latent decision rule.

Scenario 3: Speed-conditioning attribution bias. Counterfactual: Two running backs with identical blocking and defensive fronts; one runs at 95th-percentile speed, the other at 5th-percentile. Speed is a model input [PAGE 20, Table 2], and the authors note conditioning on it removes speed-based credit and blame [PAGE 33]. Veto: The model attributes yards gained to the current kinematic state rather than to player-specific skill differentials; fast players' extra yards are explained away by their speed feature, while slow players' shortfall is likewise absorbed. Prediction: EPA per frame will compress the talent distribution: elite-speed ball-carriers will appear average, and below-average-speed ball-carriers will appear above replacement, distorting player-evaluation leaderboards such as Tables 6-7 [PAGE 31].
</RLVR_COUNTERFACTUAL_VETOES>