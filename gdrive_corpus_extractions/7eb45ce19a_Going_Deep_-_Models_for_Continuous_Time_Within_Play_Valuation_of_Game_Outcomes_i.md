---
source: "Going Deep - Models for Continuous Time Within Play Valuation of Game Outcomes in American Football with Tracking Data.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 28
model: deepseek/deepseek-v4.1-flash-1017
words: 8081
---

<NATIVE_REASONING>
We need answer user request. They provided drive source and ask? The prompt is a role with strict invariants, wants answer across exact XML sections, >=1000 words depth, cite pages markers. Need produce structured analysis of source. Need infer task: likely evaluate source with deep derivation, equations, genealogy, theory of mind, veto adjudication, RLVR counterfactuals. No explicit question beyond source. Need act as GSE + GSI Frontier Reasoning Foundry. Need analyze paper. Must not mention betting lines etc. Need zero betting. Need formal LaTeX, SI/information/probability units, assumptions, singularities/breakdown. Cite exact [PAGE N] markers and verbatim quotes from source pages. We have pages? Source text has page numbers 1..37? They say PAGES: 28, but text displays page numbers up to 37? Need cite [PAGE N] markers. We must use exact markers. We only have source text with page numbers at bottom/top? Need map. They say PAGES: 28, but pasted source includes page numbers 1-37. Hmm. Need cite exact [PAGE N] markers likely from PDF pages? Source text includes page numbers. Need use [PAGE 1] etc based on displayed page numbers? The document pages in text show "1", "2", ..., "37". User says PAGES: 28, contradictory. But source text has page numbers. Need cite exact [PAGE N] markers and verbatim quotes. We can cite page numbers from source as displayed: [PAGE 1], [PAGE 2], etc. Need ensure quotes are exact. We can quote phrases with exact wording. Need no fabricated page markers? We can use [PAGE 1] for abstract, [PAGE 2] for intro, etc. Need careful.

We need cover:
<THINK_TRACE> deep multi-hop derivation & gray-zone audit >=400 words.
<SOURCE_OPERATORS_AND_EQUATIONS> formal LaTeX, units, page citations, breakdown.
<RETROCAUSAL_GENEALOGY> historical/scientific lineage & multi-week traps.
<RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock.
<CROSS_LAYER_VETO_ADJUDICATION> physical/biomechanical/weather veto proof.
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

Need total >=1000 words. Need maybe around 2000-3000 words. Need include source operators/equations. We should parse paper's key equations and variables:
- X_t locations/trajectories; filtration F(X_t)
- E(Y_i | F_carry(X_t,i)), E(Y_i* | F_carry) = E(Y_i) + current yard line.
- Y_i random variable yards gained; Y_i* end-of-play yard line.
- between-play value conditional independence: value between plays function only of observable between-play features; no tracking info.
- framework: For rush: estimate E(Y_i) then Y_i* by linearity; feed into EP/WP model.
- Passing: QB decision multinomial P(D_i=d_k | F_decision(X_t,i)), D={throw away, run/sack, pass}; target probs P(T_j,i=1 | F_pass(X_t,i), D_i=Pass), Softmax normalize; incompletion P(I_i=1 | F_inc, D=Pass,T_j=1); catch P(C_k,i=1 | F_catch, D=Pass,T_j=1,I_i=0), Softmax normalize to 1 - P(I=1). Then expected end-of-play yard line = sum over nodes probability * expected yards. We can formalize.
- Ball-carrier model features: x,y,s,dir,dis,distance to BC, Voronoi features. Table 2.
- Models: baseline, LASSO, XGBoost, feedforward NN, LSTM. LSTM 3 layers, 5 inputs? Wait "three layers, with five inputs in each layer" maybe means 5 hidden units? It says "LSTM has three layers, with five inputs in each layer, and recurrent dropout rate of 20%." Actually earlier FF NN "three layers, where each layer has five hidden units." LSTM "three layers, with five inputs in each layer" maybe typo. Need note.
- Data: 10 Hz, 1,075,720 unique frames across 14,167 plays; modeling dataset 153,184 frames from 4,447 unique ball-carrier sequences. 77 rushing fumbles.
- Results: LOWO CV RMSE: baseline 7.72, LASSO 6.43, XGBoost 5.98, FF 6.18, LSTM 5.65. Weighted avg: 6.10,4.68,4.41,4.60,4.11. EPA calibration: LSTM closest mean to zero.
- Feature importance: defense1_dist_to_ball and bc_s top.
- Examples: Cordarrelle Patterson 47-yard TD. Initial at Chargers 47? Actually Raiders trailed 14-10 in fourth quarter with eight minutes left on 2nd down two yards to go at Chargers' 47 yard line. At handoff expected roughly 11-yard gain. 
- Player eval: WPA top/bottom. Need maybe mention limitations: no fumbles, no special teams, play type known, time remaining ad hoc, speed attribution issue.

Need phrase "gray-zone audit" maybe identify ambiguous cases: "continuous-time" is actually 10 Hz discretized; "within-play valuation" only ball-carrier model implemented; passing submodels not implemented; between-play conditional independence assumption; LSTM trained on run-only sequences; RMSE units yards. Need singularity/breakdown regimes:
- Time t at play boundaries; t>0 but event start/end; at t=0 no within-play information; at end t=T, Y=0 maybe expected end yard line equals current, but model not trained? Need mention boundary t -> T: variance of Y shrinks to 0; conditional expectation degenerates to current yard line; if using model predictions near terminal frame, RMSE artificially low? But model predicts remaining yards; at final frame, target Y=0. There is a singularity in temporal conditioning: as t approaches end, Y_t = 0 deterministically; model may exploit sequence length? They zero-pad and train across frames. Need identify breakdown: zero-padding, variable-length sequences; LSTM state after padding? If pad at end, may not; if zero-pad to longest, sequence length is known? Need discuss.
- Softmax normalization with zero probabilities; rare cases all 0.
- Linear expectation Y* = Y + current yard line exact, no issue unless current yard line unknown or target endzone? If yard line measured from own goal? Need units yards.
- Between-play conditional independence: If tracking data reveals injuries, penalties, weather? Actually between-play state could be influenced by within-play tracking? The assumption says no additional info; but within-play could affect time remaining/clock, penalties, injuries, fatigue, personnel. But they use common-sense updates; "value ... conditionally independent of any information that can be gathered from within-play tracking data" [PAGE 11]. Breakdown if within-play events alter future state beyond end yard line (penalties, turnovers, injuries, clock stoppages, timeouts, weather). Need mention.
- "continuous-time" actually 10 Hz; sampling interval Δt=0.1 s. The derivative or frame-to-frame smoothness not modeled explicitly; LSTM recurrent. Need formulate discretization: t_k = k/10 s. The conditional expectation E[Y | F_{t_k}]. At Nyquist? Tracking at 10 Hz, human motion bandwidth ~? Not needed. Units: yards, yards/s, degrees, s, Hz, probability dimensionless.
- LSTM recurrence formalization: h_t = LSTM(x_t, h_{t-1}); output \hat{E}[Y_t] = g(h_t). Loss MSE in yd^2. Regularization L1/L2, dropout. Need not invent exact equations? We can state general LSTM update; but must not invent fake ratios. Use standard LSTM equations with gates. That's formal. Need units? Gates dimensionless; weights dimensionless? Actually matrix multiplication. We can provide.
- Softmax equations.
- Expected end-of-play yard line for passing play: Need formal sum over decision tree. Let \ell_t current yard line; \hat{E}[Y^*_{t}] = \ell_t + \sum_{d} P(D=d|\cdot) [ ... ]. But need careful with throw away/run/pass. Could express recursive expectation. For throw away, Y=0. For run/sack, ball-carrier model. For pass, sum_j P(T_j=1) [ P(I=1) * 0 + (1-P(I=1)) * sum_k P(C_k=1) E[Y|...]] plus maybe pass caught then ball carrier? Actually for pass: if incomplete or throw away, play ends at original yard line; if caught, ball-carrier model from catch location? The paper says for each potential pass-catcher assume they are ball-carrier and input current situation. But catch occurs later; model uses current tracking? They approximate. Need formal.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. We discuss lineage: Thorndike? Not needed. Historical: NFL tracking RFID 2017 Big Data Bowl; nflscrapR; expected points and win probability Yurko et al.; Cervone basketball EPV; Link soccer dangerousity; Fernández soccer EPV; Burke DeepQB; Deshpande & Evans; Chu route clustering; Sterken RouteNet; Dutta coverage; Voronoi (1908); LASSO Tibshirani; XGBoost; LSTM Hochreiter & Schmidhuber. Multi-week traps: training on Weeks 1-6 2017 only; LOWO CV; selection bias long runs; week-to-week heterogeneity; small sample; six-week sample has 77 fumbles; performance in Weeks 1-6 may not generalize; "multi-week traps" maybe in sports forecasting: overfitting to early season, schedule effects, player usage, weather. Need address "multi-week traps": use LOWO not leave-one-frame-out; temporal leakage; same player/team repeated frames correlation; week-level nonstationarity; COVID? Not relevant. Need state traps: (1) frame-level IID assumption false; 153k frames from 4,447 sequences, not independent. LOWO handles week holdout but sequence-level dependence remains. (2) selection bias near end of long runs. (3) track data only 2017 Weeks 1-6; no multiple seasons; "multi-week" as holdout weeks one through five train, week six holdout. (4) using observed time remaining for sequences is ad hoc, leaks end-of-play duration into within-play valuation. Wait they use observed time of ball-carrier sequence for adjusting time remaining. That is future information! This is a gray-zone audit. They say "For now, we use the observed time of the ball-carrier sequence for adjusting the amount of time remaining in the game." That uses actual play duration, which is future information at time t. That's a leakage/trap. Need flag. It affects EPA/WPA calibration? It uses end-of-play time, not known within play. This is a good gray-zone. Need cite [PAGE 24] exact quote. This is "ad hoc approach" later [PAGE 32-33]. Need mention.
- Also "we assume the play type is known at the start of the play" [PAGE 32] not realistic for RPO. 
- "we currently do not handle fumbles" [PAGE 32]; survival component.
- "speed is one of most important features" [PAGE 33] attribution issue.
- "only provide implementation of ball-carrier model, do not implement other modular sub-models" [PAGE 34].
- The paper's "continuous-time" is 10 Hz frames, not continuous; quasi-continuous. Need formal: t ∈ {0, Δt, 2Δt,...}, Δt=0.1 s; limiting continuous-time would require Δt→0 but RFID sampling 10 Hz. This is not a fake equation, it's definition. 
- "Zero betting lines" ensure no mention odds/spread/moneyline/total. Avoid "betting" entirely? We can mention "zero betting lines" in invariant? Better not mention betting at all. The user says strict invariants. We can just comply.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need discuss physical/biomechanical/weather vetoes that would invalidate model. The paper doesn't include weather. Need prove via cross-layer: tracking data coordinates, speed, direction, distance; physical constraints: player acceleration limits, max speed, field boundaries; biomechanical: speed measurement, direction, tackling; weather: rain/snow/wind affects RFID? Actually RFID tracking can have errors due to stadium infrastructure; weather not modeled. We need adjudicate: If physical/biomechanical/weather layer vetoes a within-play estimate, model should be vetoed. Need formal proof? We can set up: Let \hat{Y}_t be model estimate. Physical feasibility constraints: ball-carrier position plus displacement bounded by v_max Δt and field boundaries; if \hat{Y}_t implies position beyond field or speed > v_max, veto. Biomechanical: acceleration/decleration limits, change of direction; if LSTM output implies impossible acceleration. Weather: precipitation/wind can affect traction and ball flight; not in features; if weather state causes distribution shift, model's conditional expectation not identified. Need cite paper says tracking data has location, speed, angle; no weather covariates; features Table 2. We can cite [PAGE 19-20] Table 2 and [PAGE 7] data collection. Need "veto proof" maybe use proof by contradiction: Suppose model predicts end-of-play yard line y*; if path from current to y* requires average speed > v_max over remaining time, impossible; since tracking gives v_max observed? We don't have actual v_max. Need not invent ratio; use kinematic bound. We can state exact formal inequality: For remaining time τ>0, if |y* - y_t| > v_max τ, then estimate violates kinematic bound; veto. But v_max maybe from data or league. Use units yards and s. Not a fake ratio; it's physical bound. Also field boundary: y* must be within [0,120] yd? NFL field 100 yd plus end zones (120 yd total). But coordinate x maybe 0-120? Table uses x 60.64, y 29.70; likely field coordinates in yards with x along length? They call x-coordinate and target endzone; x can be 0-120. Need not specify exact. Use L_field.
- Weather: tracking RFID accuracy may degrade? The paper doesn't discuss. We can say no weather covariate in Table 2 [PAGE 19-20], so if weather alters traction/ball flight, the ball-carrier model's conditional distribution is not exchangeable with training; no within-model veto except distribution shift. For "proof" we can use conditional independence: P(Y|X, W) ≠ P(Y|X) if W influences Y and X insufficient; model estimates E[Y|X] as E[Y|X,W] only if W independent of Y given X; otherwise bias = E[E[Y|X,W]|X] - E[Y|X]. Need formal. That is a cross-layer veto: weather variable W absent, if mutual information I(Y;W|X)>0, then conditional expectation is biased. Units: nats/bits. Good.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. This section seems strange for sports paper. Need interpret: recursive theory of mind in decision-making, crisis habit regression, counter-trap, clock. We can frame as modeling QB decision / coach/player behavior under time pressure: recursive beliefs (QB models defender beliefs, defender models QB), crisis habit regression (under pressure, agents revert to habitual actions; model's decision probabilities should account for time pressure), counter-trap (defender baiting QB into throw; model should detect deceptive trajectories), clock (time remaining/urgency). Need analyze paper's framework: QB decision model P(D_i|F_decision) is left unimplemented. It should be recursive because QB decisions depend on expected receiver target probabilities, defender catch probabilities, and clock. The ball-carrier model does not model intent/deception; it only uses physical trajectories. Crisis habit regression: LSTM might learn habitual patterns; under high-pressure late-clock states, behavior distribution shifts; model may fail. Counter-trap: if defender intentionally leaves zone to bait pass, tracking features may show abnormal separation; ball-carrier model could be fooled by Voronoi area as space ownership, but not intent. Clock: time pressure is not a feature in ball-carrier model (only between-play time remaining); within-play model doesn't include clock in features. Need cite Table 2 lacks clock/score/down? It uses only player locations/trajectories and Voronoi; no game context. That is a gray-zone: ball-carrier model likely uses only tracking features, not down/distance/score/time. The paper says "conditional on the team in possession and locations and trajectories of all 22 players" [PAGE 15]. It doesn't include score/time in ball-carrier model. That's fine; between-play handles context. But recursive theory: player behavior depends on game context; omitting context from within-play model may bias if effort/urgency varies with clock. The paper says single model for any ball-carrier situation [PAGE 15], so no context. Need discuss "counter-trap": a defender may allow yards to tackle later? Actually ball-carrier model predicts yards gained conditional on current positions; if defense employs a "counter-trap" (e.g., giving cushion then closing), the current geometry may understate future closing speed. LSTM temporal sequence may capture trajectory, but not latent tactics. Need mention.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards? We need create scenarios where a model/agent should be vetoed based on verifiable outcomes. Since this is a sports paper, we can propose counterfactual tests: e.g., (1) reversed trajectory/time leakage veto: shuffle future frames or use only frames ≤t; if model performance improves when future frames are accidentally included, veto. Prediction: LSTM should drop to near baseline if future info removed? Hmm. Need "verifiable RLVR veto scenarios" meaning reward model can verify and veto if prediction violates. We can propose three counterfactual scenarios with precise predictions:
1. Temporal leakage veto: Train/evaluate with future frames masked; if model's RMSE does not degrade from reported 5.65 yd when future frames are removed, then it wasn't using future info? Wait we want veto if it uses future info. Prediction: If future frames are leaked, RMSE artificially lower than 5.65; with proper causal masking, RMSE ≥5.65. Veto condition: any model that achieves <5.65 under causal masking? Not necessarily. Need verifiable. We can state: Run an ablation where at frame t only frames ≤t are available. If RMSE decreases significantly below 5.65, suspect leakage; veto. Prediction: under causal masking, LSTM RMSE should be ≥5.65 (since original likely causal? Actually LSTM processes sequence, but when predicting at each time, they might use full sequence? In training, LSTM output at t uses previous hidden states only, but if zero-padded and many-to-one? They use sequence to predict each frame? Need unclear. But if they update predictions at each frame, LSTM is causal. The observed time remaining leakage is separate.) 
2. Kinematic impossibility veto: Generate counterfactual frame where ball-carrier is 90 yd from endzone with 0.2 s remaining and no defenders; a physically impossible model predicts TD. Veto if predicted end-of-play yard line implies displacement > v_max τ. Prediction: a valid model must output ≤ current + v_max τ. With v_max ~ 10 yd/s, 0.2 s => 2 yd. If model predicts >2 yd, veto.
3. Weather/domain-shift veto: Evaluate on synthetic rain/snow where effective traction reduces max acceleration; if model's conditional expectation is unchanged because weather absent, but realized yards differ, veto. Prediction: model underperforms in wet conditions; calibration slope ≠1. Veto if calibration error > threshold. Need maybe "RLVR" reward verifiable via held-out week? Hmm.

Need include formal equations and page citations. Need be careful with exact quotes. We can quote:
- [PAGE 1] "We test several modeling approaches for the ball-carrier model, and ultimately find that a long short-term memory (LSTM) recurrent neural network outperforms alternative approaches."
- [PAGE 1] "For each moment of each play, we use the LSTM to continuously update the ball-carrier model, and we use this estimate to determine the estimated end-of-play yard line."
- [PAGE 11] "we posit that no additional information from the tracking data described in Section 2 will influence the between-play valuations of a football game" maybe exact: "Here, we posit that no additional information from the tracking data described in Section 2 will influence the between-play valuations of a football game, regardless of which model for between-play valuation is used." [PAGE 11] Yes.
- [PAGE 11] "these values are conditionally independent of any information that can be gathered from within-play tracking data." 
- [PAGE 12] "through linearity of expectations (Y* = Y + [player's current yard line])" exact maybe with formatting. Use quote.
- [PAGE 13] Softmax normalization quote: "We suggest the use of Softmax normalization here, to handle rare cases where the estimated target probabilities are all 0." 
- [PAGE 15] "only a single model is needed, and this model can be used for any situation in which a player is carrying the ball (with no intent to pass)." 
- [PAGE 16] "It may seem counterintuitive to model incompletion probability rather than completion probability, but we do this for a specific purpose" 
- [PAGE 19] "Each feature in Table 2 is centered and scaled." 
- [PAGE 20] "Our LSTM has three layers, with five inputs in each layer, and we use a recurrent dropout rate of 20% for each layer." 
- [PAGE 22] table RMSE. Need cite [PAGE 22] for Table 4? The text shows Table 4 on page 22? Let's map: page numbers: Page 1 abstract, 2 intro, 3 section 1.1, 4 1.2, 5 1.3, 6 1.4, 7 section 2, 8, 9 section 3, 10 notation, 11 3.2, 12 3.3, 13 figure 4, 14, 15 3.4/3.5, 16 3.7, 17 3.8/4, 18 4.1, 19 table 2, 20 4.2, 21 table 3/4.3, 22 table 4, 23 table 5, 24 Figure 6/5.1, 25 Figure 7, 26 5.2, 27 Figure 9/5.3, 28 Figure 10? Actually page 28 "Figure 10"; 29 Figure 11; 30 Figure 12; 31 tables 6/7; 32 section 6; 33; 34; 35 references. Need cite accordingly. But the pasted text has page markers at bottom? It shows "22" before Table 4? Let's re-read: After "Table 4 displays..." text, page 22? It shows:
"22
Table 4: LOWO CV RMSE for each model." Yes page 22. Table 5 on page 23. Figure 6 on page 24? It shows "23" before Figure 6? Actually after Table 5, text: "The results for our second criterion..." then "23" then Figure 6? Let's see: "23
Figure 6: Comparison..." So Figure 6 page 23. Then "24" before Figure 7? Actually "24" after Figure 6? Need not perfect. Use page markers around content.

Need "PAGES: 28" but source has 37. We can ignore and use [PAGE N] from source. Maybe they expect [PAGE 1] etc. Need cite exact. We can state "All page markers below refer to the supplied source text's printed page numbers." That might help.

Need answer should not mention betting lines. Avoid "odds", "spread", "moneyline", "totals". We can mention "no betting lines" maybe not.

Need ensure >=1000 words. We'll produce ~2500 words. Desired oververbosity 5. Need structured XML exactly. We can include all sections. Need no extra outside? Probably just XML sections. Need ensure word count. Need maybe include "THINK_TRACE" 500 words, others 300-500. Total 2500.

Let's plan content.

Opening: "I treat the source as a methods paper..." But inside XML. Need no preamble? We can start with <THINK_TRACE>. Must include exact XML sections. We can include all.

THINK_TRACE (>=400 words):
- Identify core claim: quasi-continuous within-play valuation using 10 Hz tracking; ball-carrier LSTM; feed into between-play EP/WP.
- Multi-hop derivation: At any frame t, state X_t; filtration F_t; target Y_t remaining yards; Y*_t = ℓ_t + Y_t; linearity; expected end-of-play; feed into between-play model. For passes, decision tree expectation over D,T,I,C. Need audit:
  1. "Continuous-time" is discretized at 10 Hz; not true continuous. Sampling Δt=0.1 s; conditional expectation E[Y|F_{t_k}].
  2. Between-play conditional independence assumption; breaks if within-play info changes future state beyond yard line (penalties, clock, injuries, turnovers, weather). They use common-sense updates but observed time remaining leakage.
  3. Only ball-carrier model implemented; passing submodels are placeholders; results only rushing plays.
  4. LSTM evaluated LOWO CV; RMSE in yards; calibration via EPA mean near zero; selection bias long runs; frame dependence.
  5. Gray-zone: observed time remaining at end of play used for EPA/WP at each frame [PAGE 24], so not fully causal. This is a future-information leak. Also speed attribution issue [PAGE 33].
- State breakdown regimes: t→T, Y_t→0 and variance→0; model may have low RMSE near end due to boundary; t=0 no within-play info; zero-padding variable length; Softmax zero probabilities; fumble hazard omitted (77 fumbles/153,184 frames); weather absent.
- Need mention exact quotes.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define t_k = k/10 s; X_t; F_t; Y_i; Y*_i; ℓ_t.
- Formal equations:
  \hat{Y}_{t,i} = E[Y_i | F_carry(X_{t,i})]
  \hat{Y}^*_{t,i} = ℓ_{t,i} + \hat{Y}_{t,i} by linearity.
  Between-play: V_{t,i} = g(S_{i+1}) with S_{i+1}=φ(ℓ_{i+1}, down, distance, score, clock,...). Assumption: I(V; F_t | S_between)=0? We can write P(V|S,F_t)=P(V|S). 
- Passing expectation:
  Let d∈D; P(D=d|F). If d=throw away: y=0; if run/sack: \hat{y}^{carry}; if pass: sum_j P(T_j=1|F,D=pass) [ P(I=1|F,D,T_j) * 0 + (1-P(I=1)) * sum_k P(C_k=1|F,D,T_j,I=0) \hat{y}^{carry}_{k} ] with Softmax normalization. Then \hat{Y}^* = ℓ + expectation. Need note Softmax: P(T_j)=e^{z_j}/∑ e^{z}; P(C_k)=...; normalization. Units: yards. 
- LSTM equations: f_t=σ(W_f x_t+U_f h_{t-1}+b_f); i_t, o_t, c_t; h_t=o_t⊙tanh(c_t); \hat{Y}_t = w_y^T h_t + b_y; loss = (1/N)∑(Y_t - \hat{Y}_t)^2 [yd^2]; RMSE = sqrt(loss) [yd]. Need cite [PAGE 20-22]. LSTM outperforms. Table 4 values. 
- Voronoi: region V_p = {x: ||x-p|| ≤ ||x-q|| ∀q}; area A_bc [yd^2]; boundary x extrema [yd]. Features centered/scaled dimensionless z-scores. Cite [PAGE 18-20].
- Breakdown/singularities: t→T; Softmax all zeros; missing weather; fumble hazard; field boundary; zero padding; sampling.

RETROCAUSAL_GENEALOGY:
- Lineage: Voronoi 1908; RFID NFL 2017 Big Data Bowl; nflscrapR; Yurko et al. 2019 EP/WP; Cervone EPV basketball; Link dangerousity soccer; Fernández EPV; Burke DeepQB; Deshpande Evans; route clustering; LASSO, XGBoost, LSTM. 
- Multi-week traps: Weeks 1-6 only; LOWO CV; frame-level dependence; selection bias long runs; week effects; player usage; weather; 2017 sample; fumbles rare; no special teams; RPO play type known. 
- "retrocausal" maybe later work should not retroactively assume passing framework implemented. The paper's future work sections reveal retroactive dependencies.

RECURSIVE_THEORY_OF_MIND:
- QB decision model left unimplemented; recursive beliefs: QB's P(D|F) depends on target/catch probabilities, which depend on defender reactions; defender decisions depend on QB; ball-carrier model is physical, not strategic. 
- Crisis habit regression: Under pressure/clock, agents revert to habits; model trained on average behavior may miscalibrate in high-leverage late-clock; no clock/score in Table 2. 
- Counter-trap: defender baiting; Voronoi area overstates space; LSTM may not infer intent; need latent tactical state. 
- Clock: time remaining not in ball-carrier model; only between-play; observed time leakage. Need formal maybe.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical veto: kinematic bound; field boundary; max speed; acceleration. If predicted Y* violates, veto. Use exact inequality. 
- Biomechanical veto: speed/direction features; LSTM uses bc_s and defense1_dist_to_ball top; if speed imputed or missing, attribution; if predicted path requires impossible acceleration. 
- Weather veto: absent W; bias formula; if I(Y;W|X)>0, model bias. Tracking RFID may be affected? We can say not modeled. 
- Proof: For any estimate \hat{Y}, if \hat{Y}∉[Y_min,Y_max] or distance > v_max τ, then no feasible trajectory; veto. If weather changes traction, conditional expectation not identified; calibration fails. Need cite Table 2 [PAGE 19-20] no weather/game context; [PAGE 7] 10 Hz RFID.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 scenarios with predictions and veto conditions.
1. Causal-masking temporal leakage veto: At time t, mask all frames >t and observed end-of-play duration. Prediction: reported RMSE 5.65 yd should not improve; if without future duration the EPA calibration mean stays near zero? Actually observed time leak affects EPA, not RMSE. We can test: replace observed time remaining with causal estimate (e.g., current clock minus elapsed t) and recompute EPA. Prediction: mean EPA shifts away from zero in end-of-half cases; veto if calibration mean |bias|>2 SE. Need verifiable. 
2. Kinematic feasibility veto: Construct synthetic or real boundary frame: ball-carrier at ℓ=5 yd from endzone, τ=0.2 s, v_max=10 yd/s; max gain 2 yd; if model predicts TD (5 yd) veto. Prediction: LSTM may output high due to nearest defender distance? Actually at 5 yd and 0.2s, max 2 yd; if output >7 yd? Wait ℓ=5 yd from endzone means need 5 yd to TD; max gain 2 yd; model should not predict TD. Veto if \hat{Y}^*>ℓ+2. Use verifiable tracking data. 
3. Weather/domain-shift calibration veto: Split held-out week by precipitation/wind (if external weather data); or synthetic noise. Prediction: model trained without weather will have calibration slope ≠1 and RMSE increased; veto if 95% CI of calibration slope excludes 1 or mean residual > threshold. Need "RLVR" reward: reward = -|predicted - realized|; veto if reward below baseline? We can define. 
Could also include "fumble hazard veto": Since model omits fumbles, if a play has fumble, predicted end-of-play yard line may be wrong; but 77/153k rare. RLVR scenario: inject fumble hazard; model predicted high yards; realized turnover; veto if survival probability not modeled. But they intentionally omit. Maybe use as third. But weather is cross-layer. We need 3 verifiable. Use temporal leakage, kinematic, weather. Good.

Need ensure no "betting lines" mention. Avoid "odds". Good.

Need maybe include exact [PAGE] citations inline. Use quotes with exact text. Need be careful quotes:
- "We test several modeling approaches for the ball-carrier model, and ultimately find that a long short-term memory (LSTM) recurrent neural network outperforms alternative approaches." [PAGE 1] exact? It says "We test several modeling approaches for the ball-carrier model, and ultimately find that a long short-term memory (LSTM) recurrent neural network outperforms alternative approaches." Yes.
- "For each moment of each play, we use the LSTM to continuously update the ball-carrier model, and we use this estimate to determine the estimated end-of-play yard line." [PAGE 1] exact.
- "we posit that no additional information from the tracking data described in Section 2 will influence the between-play valuations of a football game" [PAGE 11] exact? It has "Here, we posit..." We can quote partial. 
- "these values are conditionally independent of any information that can be gathered from within-play tracking data." [PAGE 11] exact.
- "through linearity of expectations (Y* = Y + [player's current yard line])" [PAGE 12] exact? It says "through linearity of expectations (Y ∗ = Y + [player’s current yard line])". Use quote with formatting.
- "only a single model is needed, and this model can be used for any situation in which a player is carrying the ball (with no intent to pass)." [PAGE 15] exact.
- "We suggest the use of Softmax normalization here, to handle rare cases where the estimated target probabilities are all 0." [PAGE 13] exact? It's footnote 4. Yes.
- "Each feature in Table 2 is centered and scaled." [PAGE 19] exact.
- "Our LSTM has three layers, with five inputs in each layer, and we use a recurrent dropout rate of 20% for each layer." [PAGE 20] exact.
- "For now, we use the observed time of the ball-carrier sequence for adjusting the amount of time remaining in the game." [PAGE 24] exact? It says "For now, we use the observed time of the ball-carrier sequence for adjusting the amount of time remaining in the game." Yes.
- "we currently do not handle fumbles by the ball-carrier." [PAGE 32] exact? It says "Third, we currently do not handle fumbles by the ball-carrier." Yes.
- "there were only 77 rushing fumbles in 153,184 rushing frames across 4,447 ball-carrier sequences in our dataset" [PAGE 32] exact? It says "there were only 77 rushing fumbles in 153,184 rushing frames across 4,447 ball-carrier sequences in our dataset" yes.
- "we assume the play type is known at the start of the play, which could be problematic." [PAGE 32] exact? "First, we assume the play type is known at the start of the play, which could be problematic." It says "First, we assume..." Actually "First, there are several remaining aspects..." Then "First, we assume..." Let's quote "we assume the play type is known at the start of the play, which could be problematic" [PAGE 32].
- "the ball-carrier speed is one of the most important features in modeling yards gained from the current position on the field" [PAGE 33] exact? It says "As demonstrated in Figure 8, the ball-carrier speed is one of the most important features in modeling yards gained from the current position on the field." Yes.
- "we currently only provide an implementation of the ball-carrier model, and we do not implement the other modular sub-models" [PAGE 34] exact? It says "Finally and most importantly, we currently only provide an implementation of the ball-carrier model, and we do not implement the other modular sub-models in our framework for continuous-time play value" yes.

Need maybe cite table 4 values [PAGE 22] but if page mismatch, okay. We can group citations.

Need answer length. Let's compose.

Need ensure "formally LaTeX" in SOURCE section. Use LaTeX inline. Need "units" in equations. For probabilities units dimensionless; yards; seconds; Hz. Need assumptions. Need singularity/breakdown regimes. Good.

Need include "SI/information/probability units" as requested. Use "dimensionless (probability)", "yards", "seconds", "yards/second", "Hz", "nats/bits" for mutual information. Good.

Need "ZERO TOY EQUATIONS": Avoid invent fake ratios. We can include standard equations. The mutual information bias formula is real. The kinematic bound is real. Good.

Need "Exact singularity/breakdown regimes": mention t→T; all-zero Softmax; zero-padding; missing W; fumble hazard; field boundary. Good.

Need "gray-zone audit" in THINK_TRACE. Good.

Need "cross-layer veto proof" maybe proof style.

Need "RLVR" maybe define "verifiable reward veto". Good.

Potential issue: "PAGES: 28" but source has 37; use [PAGE 1] etc. Should I mention "printed page numbers in supplied text"? Maybe in first sentence of THINK_TRACE: "I use the printed page numbers in the supplied source text as [PAGE N]." This is safe. But the user says exact markers; okay.

Need not mention "GSE + GSI Frontier Reasoning Foundry"? Not necessary.

Let's draft.

Need word count maybe 3000. Let's estimate: THINK_TRACE ~600, SOURCE ~700, RETRO ~350, RECURSIVE ~350, CROSS ~400, RLVR ~450 = 2850. Good.

Need avoid betting terms. Do not use "spread". Use "score differential" okay. "expected points" okay. "win probability" okay. "WPA" okay. No odds.

Let's write.

Potential nuance: "PAGES: 28" maybe means PDF page count 28, but source has page numbers up to 37 due to article pages. Use [PAGE 1] etc. Should be okay.

Need include "verbatim quotes" exact. Make sure quote punctuation matches. Use quotes around exact phrases. Some quotes have "Y ∗" etc. We can preserve.

Need maybe mention "Softmax-normalized" and "leave-one-week-out (LOWO)". Good.

Let's produce final with XML sections only. Ensure no Markdown? XML tags with prose. Fine.

Need maybe include equations in LaTeX. Use `\( ... \)` or `\[ ... \]`. Good.

Let's write final.
</NATIVE_REASONING>

<THINK_TRACE>
I use the printed page numbers in the supplied source text as [PAGE N]. The paper’s central derivation is a two-stage conditional-expectation chain. At frame \(t\) of play \(i\), tracking data give a state \(X_{t,i}\) containing all 22 players’ \((x,y)\) positions, speeds, directions, and recent displacements, plus ball position. The filtration \(\mathcal F(X_{t,i})\) is the information set available up to \(t\). For a ball-carrier, the target is \(Y_i\), the remaining yards gained from the current position, and the end-of-play yard line is \(Y_i^\ast=\ell_{t,i}+Y_i\), where \(\ell_{t,i}\) is the current yard line. The paper estimates \(\mathbb E[Y_i\mid \mathcal F_{\text{carry}}(X_{t,i})]\), then uses linearity of expectations to obtain \(\mathbb E[Y_i^\ast\mid \mathcal F_{\text{carry}}(X_{t,i})]\). That estimated end-of-play yard line is then fed into a between-play expected-points or win-probability model. The abstract states: “For each moment of each play, we use the LSTM to continuously update the ball-carrier model, and we use this estimate to determine the estimated end-of-play yard line” [PAGE 1]. The paper also claims: “We test several modeling approaches for the ball-carrier model, and ultimately find that a long short-term memory (LSTM) recurrent neural network outperforms alternative approaches” [PAGE 1].

The first gray-zone audit is that “continuous-time” is quasi-continuous. The NFL RFID system records at 10 Hz, so the actual index is \(t_k=k\Delta t\) with \(\Delta t=0.1\) s, not a continuous-time process [PAGE 7]. The paper is careful to say tracking data is not technically continuous-time [PAGE 4], but the valuation language can obscure that the LSTM is updating at frame boundaries. The second gray-zone is the between-play conditional-independence assumption. The paper posits that “no additional information from the tracking data described in Section 2 will influence the between-play valuations of a football game” and that “these values are conditionally independent of any information that can be gathered from within-play tracking data” [PAGE 11]. That is defensible for down, distance, yard line, score, and clock under normal rules, but it breaks if within-play tracking reveals a penalty, injury, turnover, clock stoppage, or weather-driven change in future play. The third gray-zone is implementation scope: the paper implements the ball-carrier model for rushing plays, but leaves the QB decision, target, incompletion, and catch models as modular placeholders. The paper explicitly says: “we currently only provide an implementation of the ball-carrier model, and we do not implement the other modular sub-models” [PAGE 34]. The fourth gray-zone is a future-information leak in the EPA/WP calibration: “For now, we use the observed time of the ball-carrier sequence for adjusting the amount of time remaining in the game” [PAGE 24]. At frame \(t\), the observed end-of-sequence time is not known yet; using it is an ad hoc retrospective input. The fifth gray-zone is selection bias near the end of long runs: plays 100 frames from the end are almost always long runs [PAGE 23], so RMSE by frames-to-end is not an i.i.d. estimate.

The model’s breakdown regimes are also visible. As \(t\to T\) (end of play), \(Y_i\to 0\) and the conditional variance collapses to zero; near-terminal RMSE can look artificially good because the target is nearly deterministic. At \(t=0\), no within-play information exists, so the model reduces to a between-play prior. Variable-length sequences are zero-padded to the longest sequence [PAGE 20], so padding can create artificial state if the recurrent network is not strictly masked. Softmax normalization is used because target probabilities can all be zero: “We suggest the use of Softmax normalization here, to handle rare cases where the estimated target probabilities are all 0” [PAGE 13]. Fumbles are omitted: “we currently do not handle fumbles by the ball-carrier” [PAGE 32], and there were “only 77 rushing fumbles in 153,184 rushing frames across 4,447 ball-carrier sequences” [PAGE 32]. Weather is not in the feature table [PAGE 19-20], so the conditional expectation is identified only under exchangeability with the training weather distribution. The model also assumes the play type is known at the snap: “we assume the play type is known at the start of the play, which could be problematic” [PAGE 32], which is a real limitation for run-pass options.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(t_k=k\Delta t\), \(\Delta t=0.1\) s, so \(t_k\) has units of seconds and the sampling rate is \(10\) Hz [PAGE 7]. Let \(X_{t,i}\in\mathbb R^{d}\) be the tracking state for play \(i\) up to frame \(t\), with coordinates in yards, speed in yards/second, direction in degrees, and displacement in yards/frame. Let \(\mathcal F(X_{t,i})\) be the filtration generated by \(\{X_{s,i}:s\le t\}\). Let \(Y_i\) be remaining yards gained, with units yards, and let \(Y_i^\ast\) be the end-of-play yard line, also in yards. Let \(\ell_{t,i}\) be the ball-carrier’s current yard line in yards. The ball-carrier model is

\[
\hat Y_{t,i}=\mathbb E\!\left[Y_i\mid \mathcal F_{\text{carry}}(X_{t,i})\right],
\qquad
\hat Y_{t,i}^{\ast}=\ell_{t,i}+\hat Y_{t,i}.
\]

The second equality is the paper’s “linearity of expectations” step: “through linearity of expectations (Y* = Y + [player’s current yard line])” [PAGE 12]. This is exact for the conditional mean, not for the full distribution. The between-play value operator is a function \(V(\cdot)\) of post-play state \(S_{i+1}\):

\[
V_{i+1}=g(S_{i+1}),\quad
S_{i+1}=\phi\bigl(\ell_{i+1},\text{down},\text{distance},\text{score},\text{clock},\text{timeouts},\ldots\bigr),
\]

with \(V\) in expected points or win probability; expected points has units points, and win probability is dimensionless. The paper’s conditional-independence assumption is

\[
\Pr\!\left(V_{i+1}\mid S_{i+1},\mathcal F(X_{t,i})\right)=\Pr\!\left(V_{i+1}\mid S_{i+1}\right),
\]

as stated in prose: “these values are conditionally independent of any information that can be gathered from within-play tracking data” [PAGE 11].

For passing plays, the framework composes a decision tree. Let \(D_i\in\{d_1=\text{throw away},d_2=\text{run/sack},d_3=\text{pass}\}\). The QB decision operator is

\[
P\!\left(D_i=d_k\mid \mathcal F_{\text{decision}}(X_{t,i})\right),
\qquad \sum_{k=1}^{3}P(D_i=d_k\mid\cdot)=1,
\]

a dimensionless multinomial probability. For \(D_i=\text{pass}\), target probabilities are

\[
P\!\left(T_{j,i}=1\mid \mathcal F_{\text{pass}}(X_{t,i}),D_i=\text{pass}\right),
\qquad
\tilde P(T_{j,i}=1)=\frac{\exp(z_{j,i})}{\sum_{m=1}^{5}\exp(z_{m,i})},
\]

where \(z_{j,i}\) is the unnormalized score and the Softmax handles all-zero cases [PAGE 13]. For a targeted receiver \(j\), the incompletion probability is

\[
P\!\left(I_i=1\mid \mathcal F_{\text{inc}}(X_{t,i}),D_i=\text{pass},T_{j,i}=1\right),
\]

with \(I_i=1\) incomplete and \(I_i=0\) caught. If \(I_i=0\), catch probabilities are

\[
P\!\left(C_{k,i}=1\mid \mathcal F_{\text{catch}}(X_{t,i}),D_i=\text{pass},T_{j,i}=1,I_i=0\right),
\]

for \(k=1,\ldots,16\) possible pass-catchers, then Softmax-normalized to total \(1-P(I_i=1\mid\cdot)\). The expected end-of-play yard line is a probability-weighted sum over tree nodes:

\[
\hat Y_{t,i}^{\ast}
=
\ell_{t,i}
+
\sum_{d\in D}P(D_i=d\mid\cdot)
\left[
\mathbf 1\{d=\text{throw away}\}\cdot 0
+
\mathbf 1\{d=\text{run/sack}\}\hat Y_{t,i}^{\text{carry}}
+
\mathbf 1\{d=\text{pass}\}\hat Y_{t,i}^{\text{pass}}
\right],
\]

with

\[
\hat Y_{t,i}^{\text{pass}}
=
\sum_{j=1}^{5}P(T_{j,i}=1\mid\cdot)
\left[
P(I_i=1\mid\cdot)\cdot 0
+
\bigl(1-P(I_i=1\mid\cdot)\bigr)
\sum_{k=1}^{16}P(C_{k,i}=1\mid\cdot)\hat Y_{t,i,k}^{\text{carry}}
\right].
\]

All \(\hat Y\) terms are in yards; all \(P(\cdot)\) terms are dimensionless. The paper describes the same logic: each node has “the node’s probability of being achieved” and “the expected end-of-play yard line” [PAGE 13]. The ball-carrier model is deliberately single-model: “only a single model is needed, and this model can be used for any situation in which a player is carrying the ball (with no intent to pass)” [PAGE 15].

The LSTM operator is a standard gated recurrence. With input \(x_t\), hidden state \(h_t\), cell state \(c_t\), and gates \(f_t,i_t,o_t\),

\[
f_t=\sigma(W_f x_t+U_f h_{t-1}+b_f),\quad
i_t=\sigma(W_i x_t+U_i h_{t-1}+b_i),
\]
\[
o_t=\sigma(W_o x_t+U_o h_{t-1}+b_o),\quad
\tilde c_t=\tanh(W_c x_t+U_c h_{t-1}+b_c),
\]
\[
c_t=f_t\odot c_{t-1}+i_t\odot \tilde c_t,\quad
h_t=o_t\odot \tanh(c_t),
\]
\[
\hat Y_t=w_y^\top h_t+b_y.
\]

The training loss is mean squared error in \(\text{yd}^2\):

\[
\mathcal L=\frac{1}{N}\sum_{n=1}^{N}\left(Y_n-\hat Y_n\right)^2,
\qquad
\text{RMSE}=\sqrt{\mathcal L}\ \text{yd}.
\]

The paper’s LSTM is “three layers, with five inputs in each layer,” with “a recurrent dropout rate of 20% for each layer” [PAGE 20]. Leave-one-week-out cross-validation produced RMSE values of \(7.72\) yd baseline, \(6.43\) yd LASSO, \(5.98\) yd XGBoost, \(6.18\) yd feedforward, and \(5.65\) yd LSTM [PAGE 22]; weighted average RMSE values were \(6.10,4.68,4.41,4.60,4.11\) yd respectively [PAGE 23]. The LSTM also had the mean EPA closest to zero [PAGE 25].

The Voronoi operator partitions the field into cells \(V_p=\{x:\|x-p\|\le\|x-q\|\ \forall q\}\), with cell area in \(\text{yd}^2\) and boundary \(x\)-coordinates in yards. The paper extracts “the area of the Voronoi region associated with the ball carrier, and the x-coordinates of the closest and farthest points from the target endzone on the boundary” [PAGE 18]. Features are centered and scaled: “Each feature in Table 2 is centered and scaled” [PAGE 19], yielding dimensionless z-scores.

Singularity and breakdown regimes: (i) \(t\to T\) gives \(Y_i\to0\), variance collapse, and near-terminal RMSE underestimation; (ii) \(t=0\) has no within-play information; (iii) Softmax denominators can be zero if all logits are \(-\infty\), hence the paper’s Softmax-normalization note [PAGE 13]; (iv) zero-padding to the longest sequence can inject artificial state if masking is imperfect [PAGE 20]; (v) missing weather, penalties, injuries, and fumble hazard mean the conditional expectation is not identified under distribution shift; (vi) field-boundary or maximum-speed constraints can make \(\hat Y^\ast\) physically infeasible.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits on a retrocausal chain: Voronoi tessellation from 1908 supplies the spatial-partition operator [PAGE 19]; RFID player tracking from the NFL’s 2017 Weeks 1–6 release supplies the 10 Hz state process [PAGE 7]; `nflscrapR` supplies the play-by-play join and the `calculate_expected_points` and `calculate_win_probability` functions [PAGE 24, PAGE 27]; Yurko et al. (2019) supplies the between-play expected-points and win-probability operators [PAGE 11, PAGE 12]; and Cervone et al. (2014, 2016), Link et al. (2016), and Fernández et al. (2019) supply the continuous-time expected-possession-value lineage in basketball and soccer [PAGE 4]. The ball-carrier LSTM is downstream of Hochreiter and Schmidhuber (1997), while LASSO, XGBoost, and feedforward networks are the comparison operators [PAGE 20-21]. The paper also retroactively positions Burke (2019), Deshpande and Evans (2019), Chu et al. (2019), Sterken (2019), and Dutta et al. (2019) as plug-in sub-models even though they were not implemented here [PAGE 5-6].

The multi-week traps are substantial. First, the modeling dataset is 153,184 frames from 4,447 ball-carrier sequences across only Weeks 1–6 of 2017 [PAGE 8]. Frames within a sequence are highly dependent, so frame-level RMSE is not an i.i.d. sample of 153,184 independent observations. Second, LOWO cross-validation trains on Weeks 1–5 and holds out Week 6 [PAGE 22], which controls for some week-level drift but not for player, team, or game-level clustering. Third, the paper’s own frame-distance analysis shows selection bias: “plays that are 100 frames from the end of the ball-carrier sequence (i.e. 10 seconds from the play ending) are almost always long runs” [PAGE 23]. Fourth, the EPA calibration uses observed sequence time remaining [PAGE 24], a retrospective variable that would not be available in a live within-play deployment. Fifth, the six-week sample has only 77 rushing fumbles [PAGE 32], so a survival/fumble hazard is not estimable; any multi-week extension that ignores that rare-event channel will be overconfident on turnover plays. Sixth, special teams, RPO play-type uncertainty, and passing sub-models remain outside the implemented pipeline [PAGE 32-34]. The retrocausal trap is to read the paper’s modular diagram as a validated full passing model; it is a validated rushing/ball-carrier component plus an unvalidated interface for future modules.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind layer is mostly absent from the implemented model, and that absence is the point. The QB decision model is left as future work [PAGE 15-16], so the paper does not estimate how a quarterback’s belief about a defender’s belief changes the throw. The ball-carrier model is physical: it conditions on locations and trajectories, not on intent, deception, or counterfactual beliefs. A defender can bait a throw by opening a Voronoi cell, or a runner can “set up” a block by changing speed; the LSTM can learn some temporal regularities, but it has no explicit representation of “the defender wants me to believe the lane is open.”

Crisis-habit regression appears when time pressure changes the policy. Under late-clock urgency, agents may revert to habitual routes, forced throws, or direct running; the training distribution is dominated by average situations. The ball-carrier feature table contains position, speed, direction, displacement, distance to ball-carrier, and Voronoi geometry, but no down, distance, score, or clock [PAGE 19-20]. Those variables enter only after the estimated end-of-play yard line is passed to the between-play model. Thus the within-play model cannot condition on “clock crisis,” so its conditional expectation is an average over all game contexts. The counter-trap is a tactical deception: a defender intentionally gives ground to close later. The LSTM may see a large Voronoi area and a distant closest defender and predict more yards, while the latent defensive intent is to counter-trap. The clock is the third layer: time remaining affects the value operator, but the observed end-of-play time is used retrospectively [PAGE 24], not recursively inferred from the current state. A fully recursive model would need \(P(D_i\mid \text{belief about defender},\text{clock})\), \(P(T_j\mid D_i,\text{defender belief})\), and \(P(C_k\mid T_j,\text{clock})\), with the clock as a state variable rather than a post hoc correction. The paper’s modularity makes that possible, but the current implementation does not do it.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical veto is kinematic. Let \(v_{\max}\) be the maximum feasible ball-carrier speed in yards/second, \(\tau=T-t\) the remaining time in seconds, and \(y_t\) the current yard line. Any predicted end-of-play yard line must satisfy

\[
|y^\ast-y_t|\le v_{\max}\tau
\]

and must remain inside the field interval \([y_{\min},y_{\max}]\). If the LSTM outputs \(\hat y^\ast\) outside that interval, no feasible trajectory exists, so the estimate must be vetoed. This is not a statistical preference; it is a feasibility proof by contradiction: a path achieving \(\hat y^\ast\) in time \(\tau\) would require average speed \(|\hat y^\ast-y_t|/\tau>v_{\max}\), which violates the physical bound. The same logic applies to acceleration and change-of-direction limits if the predicted path implies an impossible biomechanical load. The paper’s features include speed and direction [PAGE 19], and the top XGBoost variables are “the distance to closest defender” and “the ball-carrier’s current speed” [PAGE 26], which makes physical plausibility checks directly relevant.

The biomechanical veto is attributional. The paper warns that “the ball-carrier speed is one of the most important features in modeling yards gained from the current position on the field” [PAGE 33]. If speed is conditioned on, then a faster runner’s advantage is absorbed by the model rather than credited to the player. For player evaluation, that is a cross-layer veto: a metric that claims to measure “value added” cannot simultaneously condition on the player’s own speed and attribute speed-driven gains to the player. The paper itself recommends using average speed for individual evaluation [PAGE 33].

The weather veto is identification-based. Table 2 contains no weather covariate, no precipitation, no wind, no temperature, and no surface state [PAGE 19-20]. Let \(W\) be weather. The model estimates \(\mathbb E[Y\mid X]\). If \(I(Y;W\mid X)>0\) in nats or bits, then \(\mathbb E[Y\mid X]\) is not generally equal to \(\mathbb E[Y\mid X,W]\), and the omitted-weather bias is

\[
\text{bias}(x)=\mathbb E\bigl[\mathbb E[Y\mid X=x,W]\mid X=x\bigr]-\mathbb E[Y\mid X=x].
\]

Weather can alter traction, acceleration, route sharpness, and ball flight; RFID tracking itself may also have stadium-specific error modes. The paper does not model these, so the correct adjudication is not “the LSTM is wrong,” but “the LSTM’s conditional expectation is not transportable to weather states with nonzero \(I(Y;W\mid X)\).” A weather-shift calibration test should therefore veto any deployment that reports unchanged calibration without a weather-conditioned validation stratum.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Veto 1 — causal-masking / observed-time leak.** Recompute the continuous-time EPA and WP using only information available at frame \(t\): replace the observed end-of-sequence time with a causal clock estimate such as current clock minus elapsed \(t\). The paper’s own procedure uses “the observed time of the ball-carrier sequence for adjusting the amount of time remaining in the game” [PAGE 24]. Prediction: the reported near-zero mean EPA calibration will degrade in end-of-half and late-clock states, because the retrospective time input is removed. Verifiable veto: if the causal-masked EPA mean shifts by more than two standard errors from zero, or if the win-probability calibration slope’s 95% interval excludes 1, the original within-play valuation is vetoed as not live-deployable. This is an RLVR-style reward check: reward is negative absolute calibration error, and the veto fires when the causal-masked reward is significantly worse than the retrospective reward.

**Veto 2 — kinematic-feasibility counterfactual.** Construct or select a frame with the ball-carrier \(5\) yd from the target end zone and \(\tau=0.2\) s remaining, with \(v_{\max}=10\) yd/s. The maximum feasible gain is \(v_{\max}\tau=2\) yd, so a predicted end-of-play yard line more than \(7\) yd from the current position, or a predicted touchdown, is physically impossible. Prediction: an unconstrained LSTM can output a high expected yard line if the nearest defender is far away and the Voronoi area is large, because the model’s features do not include remaining time. Verifiable veto: if \(\hat Y^\ast_t>y_t+v_{\max}\tau\) or \(\hat Y^\ast_t\notin[y_{\min},y_{\max}]\), the frame-level estimate is vetoed. This is a hard verifiable reward: reward \(=0\) if feasible, \(-\infty\) if infeasible.

**Veto 3 — weather/domain-shift calibration.** Hold out a week or a set of plays with precipitation, wind, or unusual surface conditions, or synthetically perturb tracking-derived acceleration and traction. Since Table 2 contains no weather variable [PAGE 19-20], the model’s conditional expectation is untested under \(W\). Prediction: on the weather-shifted stratum, RMSE will exceed the reported 5.65 yd and the calibration slope will differ from 1; the largest errors should occur on cut-back runs, open-field closes, and stopping/starting trajectories where traction matters. Verifiable veto: if the weather-stratum calibration slope’s 95% interval excludes 1, or if mean residual exceeds the non-weather holdout’s two-standard-error band, the model is vetoed for that weather regime. The same test can be repeated for the fumble channel: because the paper omits fumbles [PAGE 32], a play with a forced fumble should produce a large negative reward against the no-fumble prediction, and repeated failures would veto the model on turnover-heavy subsets.
</RLVR_COUNTERFACTUAL_VETOES>