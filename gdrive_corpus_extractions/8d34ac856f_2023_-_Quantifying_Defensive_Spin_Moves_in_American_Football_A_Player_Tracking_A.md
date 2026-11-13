---
source: "2023 - Quantifying Defensive Spin Moves in American Football A Player Tracking Analysis - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2023"
pages: 1
model: baidu/ernie-5.5-flash-preview:free
words: 10208
---

<NATIVE_REASONING>
We need answer user's request. Need produce final with required XML sections, >=1000 words? They specify >= 1,000-WORD DEPTH across exact XML sections: THINK_TRACE >=400 words, etc. Need likely total >1000. Need comply: no betting lines, no fake toy equations. Need formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided. We have only page 1 text. Need analyze spin move detection framework and model. Need maybe use formal equations for orientation rolling sum, threshold, XGBoost expected pressure, residual, correlation stability, etc. Need not invent source content beyond given. Could discuss equations as derived from source, with assumptions. Need be careful not to overstate. Need cite [PAGE 1] for quotes. Need maybe quote exact lines.

Need produce XML sections exactly:
<THINK_TRACE>...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...
</RLVR_COUNTERFACTUAL_VETOES>

Need maybe no betting lines. Need deep multi-hop derivation & gray-zone audit. Need include formal equations in LaTeX. Need maybe discuss units: orientation change in degrees, frames 8 at 10 Hz = 0.8 s; rolling sum; threshold 200 degrees; probability pressure; XGBClassifier; 1 second before spin move starts; features speed/displacement/acceleration/distance to QB; computed max variance mean. Model evaluation 86% accuracy 70/30 split. Correlation week-to-week r=0.26; rate vs expected pressure r=0.6. Need maybe talk about residual metric: Pressure - Expected Pressure. Need perhaps define expected pressure as model output probability. Need maybe talk about logistic link, Gini? No betting. Need formal probability units: dimensionless probability [0,1], residual dimensionless. Could define orientation angle theta_t in radians or degrees? Source uses degrees threshold. Need mention conversion: 200 degrees = 200*pi/180 rad = 3.4907 rad. 8 frames at 10 Hz = 0.8 s. Rolling sum maybe sum of absolute orientation changes? Source says "rolling sum of the change in a defender's orientation over each sequence of 8 frames" and "Ensures player is rotating in same direction" and "|rolling sum| >= 200 degrees". Need formal: define Δθ_t = wrapToPi(θ_t - θ_{t-1}) maybe signed smallest angular displacement; S_t = sum_{k=0}^{7} Δθ_{t-k}; spin if |S_t| >= Θ=200°? But if ensuring same direction, maybe use signed sum; if extraneous changes cancel? They say "Ensures player is rotating in same direction, over a sustained period of time" maybe rolling sum of change could be signed sum; extraneous effects mitigated. Could define alternative: D_t = sum |Δθ|? But threshold absolute rolling sum suggests signed sum with absolute value. Need gray-zone: jitter could accumulate, spin vs body rotation due to contact, orientation tracking noise. Need mention possible singularities: angular wrap discontinuity at ±π, threshold degeneracy when θ near cut, low sample. Breakdown regimes: if orientation noisy with variance causing false positives; if rolling window too short/long; if player contact induces large angular changes not spin; if QB pressure state missing; if class imbalance; if features nonstationary across stadium/score/game script; if XGBoost extrapolation outside training distribution; if small n per player leads unreliable over-expected.

Need RETROCAUSAL_GENEALOGY: historical/scientific lineage & multi-week traps. Need discuss lineage: tracking in NFL Big Data Bowl, expected outcomes models (EPA, CPOE?), XGBoost residual metrics, SHAP, defensive line moves, orientation signal. Multi-week traps: weeks 1-4 vs 4-8, week-to-week stability, regression to mean, small sample, schedule strength, personnel packages, game script. Need maybe not invent too much? Can discuss generally, citing source for weeks and correlation. Need avoid claiming source says things it doesn't. Could say plausible but not documented? Maybe as analysis.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. Need likely discuss players/coaches adapting: if opponents recognize spin move, they counter by setting edge, widening contain, chipping, quicker passes; model's expected pressures may drift due to game situation. Clock: 10 Hz sampling, 0.8 s window, 1 s before spin. Crisis habit regression: defender may default to spin under fatigue or when speed rush blocked; counter-trap: offense uses spin counters; clock: pass rush sequence within downs. Need include no betting.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Need proof with equations? Need discuss if a detected 200-degree spin occurs but biomechanical plausibility veto? Need formal: angular velocity ω = |Δθ|/Δt; sustained rotation requires torque; if foot contacts/center of mass path inconsistent, veto. Weather: turf traction, field friction; not in source but physical layer. Need maybe prove using necessary conditions: for spin move, orientation derivative must be monotonic enough, COM angular momentum, foot support. We can state formal inequalities. Need cite source for detection. Need maybe weather: if field conditions alter traction, change feature distribution. But source doesn't include weather. Need say not in source, but physical veto outside source.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR maybe reinforcement learning verification? Need create 3 scenarios: if no orientation exceed threshold, no spin label; if pressure not recorded in 1s after? Actually target pressure 1/0. If target missing/ambiguous, veto. If model output probability outside [0,1]? Or if spin move occurs outside passing play? Since spin moves used on passing plays. Need predictions. Must be verifiable. Maybe:
1. Threshold veto: a defender rotates 220° over 0.8s but due to being spun by blocker after already pressured, contact-induced orientation not independent spin; prediction: positional features show high backward displacement/collision; residual should not count. Need maybe verifiable via tracking COM velocity/acceleration? Source only orientation. Need state would need extra data. But scenario verifiable with provided tracking positional (x,y), speed, acceleration? Could predict if orientation high but positional acceleration low or blocked? Hmm.
2. Pressure timing veto: if pressure occurs before spin detection or outside XGBoost 1-second window, cannot attribute pressure to spin; prediction expected pressure should condition on pre-spin features only. Verifiable by frame timestamps.
3. Sample/data leakage veto: if spin move detection uses orientation during pressure or after contact, target leakage; need only use pre-spin 1s. Verifiable by feature construction. Or if minimum snaps/rushes not met, metric unreliable; source says minimum 50 rushes in weeks 1-8, 2 spin moves each half? For leaders? Could veto low sample. Need 3.

Need ensure no fake equations? We can state formal equations but they are standard, not toy. Need avoid "Force/Fatigue". Need include SI/information/probability units. Equations can include units: θ in rad or degrees; t in s; f_s=10 Hz; window W=8 frames = 0.8 s; probability p∈[0,1]; log loss nats? Could include cross-entropy in nats/bits. XGBoost objective: L = sum binary cross-entropy + regularization. Need formal. Need page citations exact [PAGE 1]. Need quote exact. Need maybe use [PAGE 1] many times.

Need word count: ensure >1000 total. THINK_TRACE >=400 words. We can make sections long. Need likely around 2500-3500 words. Need be careful final not too excessive but okay.

Let's outline final.

<THINK_TRACE> maybe 700-900 words. Deep multi-hop derivation & gray-zone audit.
- Start source facts: [PAGE 1] "Calculate .8 second rolling sum..." etc. Need quote exact. "If |rolling sum| >= 200 degrees, we label..." etc.
- Derive detection operator: frame rate 10 Hz, Δt=0.1 s, 8 frames -> T=0.8 s. Orientation θ_i(t) maybe degrees. signed angular increment Δθ = atan2(sin(θ_t-θ_{t-1}), cos(...)) to handle wrap. Rolling sum S(t)=Σ_{k=0}^{7} Δθ(t-k). Label spin if |S|≥Θ=200°.
- Discuss units and assumptions: orientation is defender facing vector, tracking vendor noise, contact jostling. The sum's absolute value makes clockwise/counterclockwise equivalent. Same direction ensured if signed increments don't cancel; but if jitter cancels, false negative; if cumulative noise or pivot in place, false positive. Need gray zone: 200°/0.8s average angular speed 250°/s = 4.363 rad/s. That is high but possible for spin. Compute if uniform rotation: 200°/0.8 = 250°/s. If actual spin maybe 180-360. Need threshold cutoff subjective per source: "200 degrees within 8 frames is based on a subjective cutoff".
- Multi-hop to model: [PAGE 1] target pressure 1/0, XGBClassifier looks at 1 second before spin move starts, features etc. Define p̂ = P(Y=1|X_pre). Expected pressure. Residual R_i = y_i - p̂_i? Source says residual of Pressure – Expected Pressure; average over spins: POE_j = (1/n_j) Σ_i (y_i - p̂_i). Could discuss individual pressure binary observed, expected probability.
- Model evaluation: 86% accuracy on 70/30 split [PAGE 1]. Need discuss gray: accuracy not enough; precision/recall, calibration, Brier score, log loss, AUC. Base rate matters. Could formalize: Brier = (1/N)Σ(p-y)^2; logloss = -[y log p+(1-y)log(1-p)] in nats or bits. These are not source but standard evaluation. Need not invent results. State not reported.
- Correlations: r=0.26 week-to-week and r=0.6 rate vs expected [PAGE 1]. Need interpret: stability moderate; correlation with traditional metric moderately strong. Need compute coefficient of determination r^2=0.0676 and 0.36. Units: dimensionless covariance normalized by std dev. Need assumptions: bivariate approx, no causal. Gray: r can be inflated by outliers; small sample, outliers per source: "Limited sample size", "Prone to some outliers". Need mention.
- Player leaderboard: Bryce Huff 0.394 with 5 spin moves; Myles Garrett 0.117 with 11. Need discuss over-expected may reward few attempts, high variance. Need maybe variance of residual estimate: Var(POE_j) = (1/n_j^2) Σ Var(y_i - p_i) if independent; for Bernoulli y with model p, conditional variance p(1-p), plus model variance. Could derive approximate standard error: SE ≈ sqrt( p(1-p) + model_var ) / sqrt(n). For n=5 high. Need avoid fake? This is formal. Need units: probability residual.
- Need mention detection framework uses rolling sum of change over each sequence of 8 frames; for each play record highest orientation change rolling sum. If multiple spins? Use max.
- Need discuss possible leakage: if orientation features from spin start or during contact used to predict pressure, target leakage; source says looks at 1 second before spin move starts. Need enforce temporal cut.
- Need mention SHAP values: source says play-level SHAP can quantify features. Could formalize Shapley φ_i, efficiency: sum φ_i = f(x)-E[f(X)]. Units: log-odds or probability depending model. XGBoost binary often log-odds. Need not overdo.

SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX, units, page citations, breakdown. Need include equations with tags maybe. Need exact quotes. We can structure:
- Source-declared facts quotes.
- Detection:
1. Sampling: f_s = 10 Hz, Δt = 0.1 s, N_w=8, T_w=0.8 s.
2. Orientation unwrapping: θ̃_t = θ_t + 2π k_t to minimize |θ̃_t - θ_{t-1}|; or Δθ_t = atan2(sin(...), cos(...)) in radians; convert to degrees Δθ° = 180/π Δθ.
3. Rolling sum: S_t = Σ_{k=0}^{7} Δθ°_{t-k}, units deg. Spin label I_spin(t)=1[|S_t| ≥ Θ], Θ=200°.
4. Per play max: S_p = max_t S_t; if abs >= threshold.
5. Average angular speed: ω̄ = |S_t|/T_w, threshold equivalent 200/0.8=250°/s = 4.363 rad/s.
- Pressure model:
6. Feature vector X_t^-1 from 1s pre-spin: difference in speed (ft/s or mph? tracking likely ft/s), displacement (ft or m), distance to QB (ft), acceleration (ft/s^2), etc. Need source says features such as difference in speed, displacement, difference in distance to QB, acceleration, speed, etc. Computed properties max/variance/mean. We can state units from NFL tracking likely feet and ft/s? The source doesn't specify units. Need be careful: say units must be specified by data dictionary; if x,y are feet, then ft; if yards? We can use SI equivalent: if tracking x,y in yards, 1 yd=0.9144 m; speed yd/s = 0.9144 m/s; acceleration yd/s^2 = 0.9144 m/s^2. But not source. Could say "with units to be declared; SI conversions...". Need include SI units. Use probability.
7. XGBoost: p̂_i = σ(η_i), η_i = f(X_i) = log(p/(1-p)); σ(z)=1/(1+e^-z). Objective L=Σ [y log(1+e^η) - yη] + Ω(f). Or binary cross entropy. Units: η dimensionless log-odds, p dimensionless probability, loss nats.
8. Residual: r_i = y_i - p̂_i, dimensionless. Player POE: POE_j = 1/n_j Σ_i r_i. Units probability.
9. Accuracy: Acc=(TP+TN)/N, dimensionless. Mention 0.86 on 70/30 split.
10. Correlation: r = Σ (x_i - x̄)(y_i - ȳ)/sqrt(Σ...), dimensionless. r=0.26, r=0.6. r^2 explained variance.
11. SHAP: f(x)=φ_0+Σ φ_k; units of model output (log-odds if raw margin). Could cite source says SHAP values.
- Breakdown regimes:
A. Angular unwrap breakdown at rapid crossing ±180 if sampling too low; if Δθ near π ambiguity.
B. Threshold boundary: Θ insensitive? For S near 200, label unstable. Need maybe derivative dI/dS is Dirac delta, non-differentiable.
C. Feature temporal leakage if post-spin features included.
D. Model calibration breakdown: if p̂ not calibrated, residual not meaningful as execution; need reliability diagram, Brier/log loss.
E. Class imbalance and small sample: variance high.
F. Player-level aggregation with n small: SE formula.
G. Distribution shift across weeks/weeks/opponents; correlation r may change.
Need maybe include exact singularity/breakdown regimes: "singular at p=0 or 1 for log loss", "σ(z) saturates for |z|→∞", "indicator discontinuity at |S|=Θ", "correlation undefined if variance zero". Good.

RETROCAUSAL_GENEALOGY: Need >? total. Maybe 500 words. Discuss historical/scientific lineage and multi-week traps. Cite source. Could mention:
- Lineage: manual film -> tracking -> orientation -> event detection -> expected outcome -> residual -> SHAP. Source quotes: "Although previous public research has been done on football linemen in general, there has been limited exploration of individual moves and techniques." [PAGE 1]
- Uses 2023 NFL Big Data Bowl, weeks 1-8 of 2021 [PAGE 1]. Data fields. 10 Hz.
- Multi-week traps: Weeks 1-4 vs 4-8 chart, correlation 0.26 [PAGE 1], "Relatively stable over the course of a season" but "Limited sample size", "Prone to some outliers". Need discuss regression to mean, schedule, team scheme, QB protection changes, defensive playbook frequency, pressure definition, target rate. Need maybe talk about "crisis habit regression"? later.
- Need maybe discuss "multi-week traps" as if model built on weeks 1-8 and split 70/30 random? If random split by play, temporal leakage possible? Source says 70/30 train-test split, not necessarily time-based. Could discuss if random split, same game/week leakage; if time split, regime changes. Need not assert. But as trap.
- Need include equations? Maybe not too much, but formal? Could include temporal covariance. Need keep source citations.

RECURSIVE_THEORY_OF_MIND: Need crisis habit regression vs counter-trap vs clock. Could be 500 words. Need discuss recursive strategic adaptation:
- Defender habit: spin move may be triggered by blocker alignment, fatigue, frustration. Model detects orientation but cannot know intent. If player under pressure/fatigue regresses to familiar spin even when low EV; residual may conflate execution with choice.
- Offense counter-trap: if defense frequently spins, coordinators set trap by keeping tackle on spin side, using chip, changing protection, QB quick pass; this reduces expected pressure. If model not conditioned on opponent tendency, p̂ miscalibrated.
- Clock: pass rush within 2.5-3.5s? Need avoid fake? Can state temporal window: detection uses 0.8s rotation and model 1s pre-spin; if QB releases before pressure, label no pressure; if clock/score influences pass rate. Need maybe use formal: decision horizon H. Maybe not too fake. Need use source: "XGBClassifier looks at 1 second before spin move starts" [PAGE 1]. "spin moves are used on passing plays" [PAGE 1]. Need discuss clock as game state: down, distance, score, time not listed as features? Source doesn't mention game-state features. Could be missing. Need mention if absent, model may not adjust to clock. Need maybe propose include score differential, time remaining, down/distance. But source future improvements not include; can say outside source.

CROSS_LAYER_VETO_ADJUDICATION: Need physical/biomechanical/weather veto proof. Could formal:
- Physical veto condition for detected spin: Let orientation rate ω_t = Δθ/Δt. For a controlled spin, require sign consistency and minimum angular speed: |S_T|/T ≥ Ω_min. Source threshold yields Ω_min=200°/0.8s=4.363 rad/s. But orientation alone can be caused by external torque from blocker. Need additional veto: center-of-mass horizontal velocity v_COM and angular momentum. If COM trajectory shows no lateral displacement or footwork? Need data x,y, speed, acceleration available [PAGE 1]. We can define false-spin risk if orientation change is not accompanied by lateral/forward displacement consistent with pass-rush arc. Example: |Δx_COM| small? But spin can involve small displacement. Better: if acceleration vector indicates collision (large deceleration) at spin initiation, then orientation may be contact-induced. Need formal veto: if orientation change is primarily due to external impulse J_ext, then expected angular velocity change Δω = τ_ext/I Δt; if contact impulse magnitude high, veto. But no force data. Use acceleration spikes. Need state can be tested with acceleration/ speed features.
- Biomechanical: spin requires support foot and rotational torque; if no plausible lower-body motion (not in tracking) but orientation changes, veto. Need maybe need skeletal data not available.
- Weather: field traction μ affects ability to rotate; if wet turf, lower μ, spin may be slip not controlled; detection may include false spins. Need formal: maximum static friction force f ≤ μ N; rotational traction condition. But N not available. Could state weather proxy not in source, so veto only if external field condition data available; otherwise cannot adjudicate.
- Need "proof": show if condition fails then label invalid. Could provide theorem style: If |S|≥Θ but sign of Δθ changes >1? Wait source says ensures same direction but signed sum could include reversals. Define monotonicity M = 1 - (# sign changes)/(N_w-1). If M low, orientation change is not sustained same direction; veto. Source says ensures rotating same direction. Need formal: Let s_k=sign(Δθ_{t-k}), sign-change count C = Σ 1[s_k ≠ s_{k+1}]. If C>0? Actually if same direction, C=0; with noise some. Define veto if C/C_max > α. But α not given. Could say necessary not sufficient. Also angular wrap. Need not invent threshold? We can say any nonzero sign changes may reduce validity; exact cutoff requires calibration.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios + predictions. Need label RLVR? Could mean Reinforcement Learning Verification? Need produce. Each with scenario, verification, prediction. Ensure no betting.
1. Non-sustained rotation veto: if rolling sum exceeds 200° but sign changes occur or acceleration spike indicates collision, veto. Prediction: positional acceleration spikes, low monotonic orientation, high blocker proximity; residual should be excluded. Verifiable by recomputing sign-change metric from tracking frames.
2. Temporal leakage/attribution veto: if pressure occurs before or within first frames of spin or features include post-spin orientation, veto. Prediction: when feature window strictly pre-spin, expected pressure probabilities lower and leaderboard changes for players whose pressures are immediate; verifiable by timestamps and feature audit.
3. Low-sample/outlier veto: if player has fewer than source threshold (50 rushes? 2 spin moves each half?) or one residual dominates, veto player metric. Prediction: Bayesian/shrinkage adjusted POE reduces top-ranked with small spin moves (Bryce Huff 5, Haason Reddick 5) more than high-sample (Aaron Donald 8, Kenny Clark 10, Myles Garrett 11); verifiable by resampling/bootstrap. Need maybe source says minimum 50 rushes in weeks 1-8, 2 spin moves in each half? It says "Minimum of 50 rushes in weeks 1−8 of 2021, 2 spin moves in each half, bubble size is amount of snaps" maybe chart. Could cite. Need ensure predictions not too strong? Okay.

Need include no betting lines. Good.

Need final only XML sections? User says required XML sections. We can output just sections. Need no extra. Need ensure total >=1000 words. Let's estimate. THINK_TRACE 800, equations 800, genealogy 500, ToM 500, veto 600, RLVR 500 = 3700. Fine. Need maybe not too long but okay.

Need check exact XML tags. Use <THINK_TRACE> etc. Need no markdown? Can include LaTeX inside. Ensure quotes with [PAGE 1].

Need be careful with citations: source page is 1 of 1. Use [PAGE 1] before/after quotes. For verbatim quotes: exact from source:
"Calculate .8 second rolling sum of each defender’s orientation on each unique play" [PAGE 1]
"Filter dataset to plays where a defender’s orientation rolling sum exceeded a threshold" [PAGE 1]
"Built XGBoost binary model to predict expected pressures on spin moves" [PAGE 1]
"Calculate pressures over expected to quantify execution of spin moves" [PAGE 1]
"Player tracking data from 2023 NFL Big Data Bowl (Thanks NFL!)" [PAGE 1]
"Weeks 1-8 of 2021 NFL Season" [PAGE 1]
"Data gathered at 10 frames/sec (10 Hz)" [PAGE 1]
"Orientation tracking data can be affected by factors such as jostling at the line of scrimmage" [PAGE 1]
"Therefore, it is not enough to look at raw orientation" [PAGE 1]
"To address this, we calculate a rolling sum of the change in a defender's orientation over each sequence of 8 frames" [PAGE 1]
"Ensures player is rotating in same direction, over a sustained period of time" [PAGE 1]
"Extraneous data effects are mitigated" [PAGE 1]
"For each play, we record each pass rusher’s highest orientation change rolling sum" [PAGE 1]
"If |rolling sum| >= 200 degrees, we label the play-player instance as a spin move" [PAGE 1]
"Target: Pressure (1) or No Pressure (0)" [PAGE 1]
"XGBClassifier looks at 1 second before spin move starts" [PAGE 1]
"Features such as difference in speed, displacement, difference in distance to QB, acceleration, speed, etc." [PAGE 1]
"Computed properties like maximum, variance, mean" [PAGE 1]
"Model outputs an expected probability of pressure, used to create an over-expected metric" [PAGE 1]
"86% accuracy on 70/30 Train-test split" [PAGE 1]
"Correlation: r = 0.26" [PAGE 1]
"Relatively stable over the course of a season" [PAGE 1]
"Limited sample size" [PAGE 1]
"Prone to some outliers" [PAGE 1]
"Correlation: r = 0.6" [PAGE 1]
"Model lines up well with traditional metrics" [PAGE 1]
"Supports over-expected metric" [PAGE 1]
"Spin Move Pressure Over-expected Metric: Residual of Pressure – Expected Pressure" [PAGE 1]
"Evaluate how good the rusher is at executing the spin itself" [PAGE 1]
"Game planning: Coordinators can scheme their best spin move rushers better looks" [PAGE 1]
"Optimize participation, since spin moves are used on passing plays" [PAGE 1]
"Scouting: Scouts and coaches can use model to quantitatively aid in their analysis" [PAGE 1]
"play-level SHAP values can be used to quantify the exact features leading to a spin move’s outcome" [PAGE 1]
"Detection framework can be used to easily find spin moves, rather than manually sifting through all the film" [PAGE 1]
"Media and Fan Consumption: A quantitative metric for a spin move’s execution could be helpful for fan and media consumption, shedding light on spin moves." [PAGE 1]
"Supplemented by visual animations of features" [PAGE 1]
"Better determine an ideal “cutoff” for determining a spin move" [PAGE 1]
"200 degrees within 8 frames is based on a subjective cutoff" [PAGE 1]
"Incorporate other heuristics to better capture spin moves, improve robustness" [PAGE 1]
"Better feature engineering; some unincorporated features could contain valuable information" [PAGE 1]
"Expand this framework to include other types of pass rushing techniques, allowing us to analyze various tradeoffs and relationships" [PAGE 1]
"SHAP (Values) allow us to get a more granular, detailed look at the “black box” model" [PAGE 1]
"Examine the magnitude and direction of individual feature effects" [PAGE 1]
Leaders: "Bryce Huff NYJ 5 0.394" etc. Could quote table? Maybe not verbatim all. But can cite values.

Need no betting lines. Good.

Need maybe include "expected pressures" as probabilities. Could define pressure y_i ∈ {0,1}. Need maybe discuss pressure definition not provided. Source says Target Pressure (1) or No Pressure (0) but no definition. Need mention ambiguity. Could discuss as breakdown: pressure label may include QB hurry/sack? Not specified.

Need maybe use SI/information/probability units. In equations, units:
- t seconds, f_s Hz, Δt s.
- θ rad or deg; S deg or rad.
- features: speed m/s, displacement m, acceleration m/s^2, distance m; if source tracking uses feet/yards, conversions. Need not assume. Could say "Let units be coherent: if x,y are in yards, convert by 0.9144 to meters; if feet, 0.3048; if NFL tracking uses feet? The source does not state units." Need include. The source only says positional (x,y), speed, acceleration. Need not cite. But requirement says SI units. We can state "For SI expression, define x_m, y_m; all kinematic features in m, m/s, m/s^2." Good.
- probability dimensionless [0,1]; loss nats if natural log; if bits divide by ln2.
- correlation dimensionless.

Need maybe include formal assumptions: angle wrap handled, orientation measurement noise zero-mean? Not guaranteed. Need breakdown if not.

Need check word count. Let's draft with enough detail.

Potential issue: "RLVR_COUNTERFACTUAL_VETOES" might require reinforcement learning verification? Could interpret as "RLVR" (reinforcement learning from verifiable rewards?) but not defined. We can define as "RLVR-style verifiable counterfactual veto audit". Fine.

Need ensure no invented equations? It's okay if derived from source. Need state when equations are formalization of source, not source-reported. Could say "The source does not print equations; the following operators are the minimal formalization consistent with [PAGE 1] quotes." Good.

Need maybe avoid "Force / Fatigue" exact toy. We can mention fatigue conceptually but not ratio. No equation Force/Fatigue. Good.

Need maybe not mention spreads/totals/moneylines/odds. Avoid.

Need maybe final with no preface. Let's start final with <THINK_TRACE>.

Need ensure XML not broken by unescaped < >? In XML, content can include < signs? To be safe, avoid raw less-than signs except tags? In text, equations have |S_t| ≥ Θ not <. Could use ≥ symbol. Avoid & maybe okay. Use & in LaTeX? Need XML? If using \text{...} no &. Could use and. But XML content may include &? Better avoid ampersands or escape. Use "and". LaTeX uses \sum, no &. Use \ge, \le. Fine. Need not use raw < in text? We might use "<" in "if |S| <". Better use words or LaTeX \lt. But raw < could be parsed? In XML text, < starts tag. Avoid raw less-than. Use ≥/≤ or \geq. For less-than, use "less than" or \lt inside LaTeX? Raw \lt okay. For greater-than, use ≥. For XML tags themselves okay.

Need be careful with & in " x and y". Avoid & maybe use "and". In LaTeX alignment use &? Could avoid align environment. Use equations one per line with \begin{equation} maybe no &. If using cases, use &? avoid. Use plain.

Need exact quotes with apostrophes? okay. Need quotes contain [PAGE 1]. Good.

Need perhaps include table? Could use bullet lists inside XML. Fine.

Let's craft.

THINK_TRACE content:
- "The source is a single slide/abstract..." mention limited page. Need deep multi-hop.
- Derivation of threshold angular speed.
- Detection gray zones.
- Model residual.
- Correlation and sample.

Need THINK_TRACE >=400 words. Let's aim 900.

SOURCE_OPERATORS_AND_EQUATIONS: Use LaTeX. Need maybe include equations as text. We can include:
\begin{equation}
\Delta t = 1/f_s = 0.1\text{ s}
\end{equation}
etc.
Need avoid raw <.

Need include citations [PAGE 1] in each major.

Potential XML issue with LaTeX backslashes? Fine.

Let's draft equations:
Detection:
\begin{equation}
f_s = 10\,\text{Hz}, \quad \Delta t = f_s^{-1}=0.1\,\text{s}, \quad N_w=8, \quad T_w=N_w\Delta t=0.8\,\text{s}.
\end{equation}
Angular increment:
\begin{equation}
\Delta\theta_t = \operatorname{atan2}\left(\sin(\theta_t-\theta_{t-1}), \cos(\theta_t-\theta_{t-1})\right)
\end{equation}
radians. Degrees: \Delta\theta_t^{\circ}=\frac{180}{\pi}\Delta\theta_t.
Rolling sum:
\begin{equation}
S_t^{\circ}=\sum_{k=0}^{N_w-1}\Delta\theta_{t-k}^{\circ}, \quad \text{units deg}.
\end{equation}
Spin label:
\begin{equation}
I_{\text{spin}}(t)=\mathbf{1}\left[|S_t^{\circ}|\ge \Theta\right], \quad \Theta=200^\circ.
\end{equation}
Play-level max:
\begin{equation}
S_p^{\max}=\max_{t\in p} S_t^{\circ}, \quad I_{\text{spin}}(p)=\mathbf{1}[|S_p^{\max}|\ge 200^\circ].
\end{equation}
Equivalent angular speed:
\begin{equation}
\bar{\omega}_t = |S_t^{\circ}|/T_w, \quad \bar{\omega}_{\min}=200/0.8=250^\circ\text{s}^{-1}=4.363\text{ rad s}^{-1}.
\end{equation}
Sign consistency:
\begin{equation}
C_t = \sum_{k=0}^{N_w-2} \mathbf{1}[\operatorname{sign}(\Delta\theta_{t-k}^{\circ})\ne \operatorname{sign}(\Delta\theta_{t-k-1}^{\circ})].
\end{equation}
Maybe C=0 ideal. Need no raw <.

Model:
Features X_i^{pre} from window H=1.0 s before spin start.
\begin{equation}
X_i^{pre} = \{v, a, d_{QB}, \Delta v, \Delta d_{QB}, \Delta x, \Delta y, \max, \operatorname{Var}, \operatorname{mean}\}
\end{equation}
with SI units m/s, m/s^2, m. If source uses other units convert.
Pressure:
\begin{equation}
y_i \in \{0,1\}, \quad p_i = P(y_i=1 | X_i^{pre}), \quad 0\le p_i\le 1.
\end{equation}
XGBoost:
\begin{equation}
\eta_i = f(X_i^{pre}) = \log\frac{p_i}{1-p_i}, \quad p_i=\sigma(\eta_i)=\frac{1}{1+e^{-\eta_i}}.
\end{equation}
Loss:
\begin{equation}
L = -\sum_i [y_i \ln p_i + (1-y_i)\ln(1-p_i)] + \Omega(f),
\end{equation}
nats.
Residual:
\begin{equation}
r_i = y_i - p_i, \quad \mathbb{E}[r_i|X_i^{pre}] = 0 \text{ if calibrated}.
\end{equation}
Player POE:
\begin{equation}
\text{POE}_j = \frac{1}{n_j}\sum_{i\in j} (y_i-p_i).
\end{equation}
Variance approx:
\begin{equation}
\operatorname{Var}(r_i) = p_i(1-p_i)+\operatorname{Var}(p_i) \text{ approx}; SE_j ≈ sqrt(sum Var)/n_j.
\end{equation}
Correlation:
\begin{equation}
r_{XY} = \frac{\sum_i (X_i-\bar X)(Y_i-\bar Y)}{\sqrt{\sum_i(X_i-\bar X)^2}\sqrt{\sum_i(Y_i-\bar Y)^2}}, \quad r^2 \text{ fraction variance}.
\end{equation}
SHAP:
\begin{equation}
f(x)=\phi_0+\sum_{k=1}^K \phi_k, \quad \sum_k \phi_k = f(x)-\mathbb{E}[f(X)].
\end{equation}
Breakdown:
- log loss singular p=0 or 1.
- indicator non-differentiable at |S|=Θ.
- correlation undefined variance zero.
- XGBoost extrapolation outside training convex hull? Trees piecewise constant; outside feature range predictions saturate.

Need mention source quotes in equations section. Good.

RETROCAUSAL_GENEALOGY: Need maybe no equations? Could include one about temporal stability: lag-1 correlation. Could include:
\begin{equation}
\rho_{1-4,4-8} = r(\text{POE}_{j,W1-4}, \text{POE}_{j,W4-8}) = 0.26
\end{equation}
source. And r=0.6 between pressure rate and expected pressure. Need cite. Good.

Need maybe mention "multi-week traps": random split vs temporal. Could formal:
If training on weeks 1-8 with random split, covariance between train/test due to same game: need block CV by game. Source doesn't specify. Could state.

RECURSIVE_THEORY_OF_MIND: Could include formal belief state? Maybe not. But can include:
Player decision U = expected pressure - risk penalty, but model not intent. Need not fake. Could state recursive: defender observes blocker, offense observes defender tendency, etc. Use formal signaling? Maybe:
Let q_t be defender spin propensity, offense protection assignment adjusts if q observed. Model p_hat assumes stationary q; if q endogenous, causal interpretation breaks. Could include equation:
\begin{equation}
Y_{it} = g(X_{it}, Z_{offensive\_counter}) + \epsilon
\end{equation}
if counter omitted, residual biased. Need not too formal.

CROSS_LAYER_VETO_ADJUDICATION: Formal proof style. Need maybe use theorem:
Proposition: If I_spin=1 but monotonic consistency C_t>0 and acceleration collision spike, then label fails source criterion "Ensures player is rotating in same direction". But C_t>0 doesn't necessarily fail; need threshold. Could say necessary condition: for source's stated intention, sign changes should be absent or small; if C_t large, veto pending calibration. Need avoid claiming exact. Use "proof obligation".

Maybe write:
The source defines a valid spin detector as one that "Ensures player is rotating in same direction, over a sustained period of time" [PAGE 1]. Let sign consistency S_t = (N_w-1-C_t)/(N_w-1). If S_t near 1, condition plausible; if C_t=6 of 7 intervals, not sustained. The detector as printed only uses |sum|; it does not explicitly require sign consistency. Therefore there is a gray-zone veto: high |sum| with high cancellation or collision may be false.

Physical: orientation angle alone cannot distinguish active spin from passive rotation due to contact. Need positional acceleration. If high acceleration vector points toward blocker and speed decreases, external torque. Could define:
\begin{equation}
\|\mathbf{a}_{t}\| > a_{crit}
\end{equation}
not in source, so cannot set threshold; but any such event requires manual verification. Need maybe "weather veto": traction condition. Use friction:
\begin{equation}
|f_{ground}| \le \mu N
\end{equation}
If μ low, controlled spin less plausible; but no weather data in source. Thus no weather veto can be proven from source alone.

Need RLVR counterfactual vetoes: 3. Need predictions. Could include formal verifiable tests.

Need final word count. Let's write in detailed but concise enough.

Double-check no prohibited content: no betting lines. No spreads/totals/moneylines/odds. No toy equations. Good.

Need maybe mention "expected pressures" not "pressures over expected" as residual. Good.

Need maybe include exact [PAGE 1] citations for every quote. Good.

Potential issue: user says "PAGES: 1" and "SOURCE TEXT". Need cite exact [PAGE N] markers. Use [PAGE 1].

Need maybe include "ZERO BETTING LINES" no mention. Good.

Need maybe no markdown table? Could use text. XML sections. Fine.

Let's draft final now. Ensure tags closed.

Need count words roughly. I'll write lengthy.

Potential issue with XML and LaTeX containing &? Avoid. In equations, \text{deg}, no &. In text, avoid "and" no amp. Use "and". In LaTeX \operatorname{Var}, okay. Use \text{ if calibrated}. Good.

Need avoid raw & in "x and y"? no. In \begin{equation} no align. Good.

Need maybe use unicode ≤? It's fine. But raw < avoid. Use ≥, ≤. In equations, use \ge, \le. In text, use "less than" maybe.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source page is extremely compact, but it contains a complete causal pipeline: orientation tracking → rolling angular-change detection → spin-move labeling → expected-pressure modeling → over-expected residual evaluation → week-to-week stability and traditional-metric correlation checks. The central formal object is a defender orientation signal sampled at 10 Hz, with a rolling window of 8 frames. The source states: “Calculate .8 second rolling sum of each defender’s orientation on each unique play” and “Filter dataset to plays where a defender’s orientation rolling sum exceeded a threshold” [PAGE 1]. It then specifies the actual cutoff: “If |rolling sum| >= 200 degrees, we label the play-player instance as a spin move” [PAGE 1]. The multi-hop derivation begins with the sampling rate: “Data gathered at 10 frames/sec (10 Hz)” [PAGE 1]. Therefore, one frame is 0.1 seconds, and 8 frames form 0.8 seconds. This is important because the threshold is not merely an angle; it is an angle accumulated over a fixed temporal window. In dimensional terms, 200 degrees over 0.8 seconds corresponds to a mean angular speed of 250 degrees per second, or approximately 4.363 radians per second if the orientation signal is interpreted as a sustained rotational movement.

The next hop is the nature of the orientation signal. The source explicitly acknowledges that raw orientation is noisy: “Orientation tracking data can be affected by factors such as jostling at the line of scrimmage” and “Therefore, it is not enough to look at raw orientation” [PAGE 1]. The proposed mitigation is a rolling sum over 8 frames: “To address this, we calculate a rolling sum of the change in a defender's orientation over each sequence of 8 frames” [PAGE 1]. The stated purpose is twofold: “Ensures player is rotating in same direction, over a sustained period of time” and “Extraneous data effects are mitigated” [PAGE 1]. This creates an ambiguity that must be audited carefully. A signed angular-change sum can support “same direction” only if the angular increments do not cancel excessively. If the detector uses signed increments and then takes the absolute value of the sum, it may count clockwise and counterclockwise components as equivalent in aggregate, but it does not automatically prove that the motion was monotonic. Conversely, if the detector sums absolute angular changes, then jitter and oscillation can inflate the signal even without a true spin. The source does not print the exact formula, so the gray zone is whether the rolling sum is signed, absolute, or hybrid. The phrase “|rolling sum|” suggests a signed sum whose magnitude is thresholded, but this must be treated as a formal reconstruction, not a verbatim equation [PAGE 1].

A third hop moves from detection to modeling. The source says: “Built XGBoost binary model to predict expected pressures on spin moves” and “Target: Pressure (1) or No Pressure (0)” [PAGE 1]. The temporal alignment is critical: “XGBClassifier looks at 1 second before spin move starts” [PAGE 1]. Therefore, the feature vector for a spin-move instance must be constructed only from pre-spin information. If any post-spin orientation, acceleration, or displacement is included, the model may learn the outcome rather than predict it. The source lists features: “Features such as difference in speed, displacement, difference in distance to QB, acceleration, speed, etc.” and “Computed properties like maximum, variance, mean” [PAGE 1]. The output is a probability: “Model outputs an expected probability of pressure, used to create an over-expected metric” [PAGE 1]. The over-expected metric is defined as a residual: “Spin Move Pressure Over-expected Metric: Residual of Pressure – Expected Pressure” [PAGE 1]. In formal terms, if \(y_i\) is the observed binary pressure outcome and \(\hat p_i\) is the model’s expected pressure probability, then the play-level residual is \(r_i = y_i - \hat p_i\). A player-level score is the average residual across that player’s detected spin moves. This is a probability-space quantity, dimensionless but bounded indirectly because each observation lies in \([-1,1]\), while its expectation under a calibrated model is zero.

The fourth hop is evaluation and gray-zone interpretation. The source reports: “86% accuracy on 70/30 Train-test split” [PAGE 1]. Accuracy alone is insufficient because pressure events may be imbalanced, and accuracy can be dominated by the majority class. A more informative audit would include Brier score, log loss, calibration curves, precision, recall, and perhaps AUC. The source does not report these, so they are missing diagnostics rather than known results. The week-to-week stability check is also formally important. The source states: “Correlation: r = 0.26” and “Relatively stable over the course of a season” [PAGE 1], but it also warns: “Limited sample size” and “Prone to some outliers” [PAGE 1]. A correlation of 0.26 corresponds to only about 6.8% shared variance if interpreted as a bivariate linear relationship, so “relatively stable” should be read as weak-to-moderate signal, not strong persistence. The second correlation, between “Spin Move Pressure Rate” and “Average Expected Spin Move Pressures,” is reported as “Correlation: r = 0.6” and interpreted as “Moderately Strong correlation,” “Model lines up well with traditional metrics,” and “Supports over-expected metric” [PAGE 1]. A correlation of 0.6 corresponds to about 36% shared variance, which is meaningful but still leaves most variance unexplained.

The final gray-zone audit concerns player-level leaderboard inference. The source lists leaders such as Bryce Huff with 5 spin moves and 0.394 average spin pressures over expected, DeForest Buckner with 10 spin moves and 0.304, Haason Reddick with 5 spin moves and 0.284, and Myles Garrett with 11 spin moves and 0.117 [PAGE 1]. Because the metric is an average of binary residuals, players with few spin moves have high sampling variance. A player with 5 attempts can have a residual average of 0.394 only if several high-expected-pressure situations failed to produce pressure, or if the model assigned low expected pressure and the rusher still succeeded. Without confidence intervals, shrinkage, or bootstrap resampling, the leaderboard may overstate certainty. The source’s own caveats support this concern: “Limited sample size” and “Prone to some outliers” [PAGE 1]. Thus, the safest interpretation is that the framework produces a useful signal for film-assisted scouting and detection, but the over-expected metric should not be treated as a stable causal measure of “skill” until sampling uncertainty, temporal leakage, detection false positives, and calibration are explicitly adjudicated.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source does not print equations, so the following operators are the minimal formal reconstruction consistent with the quoted text. All citations are to the single provided page [PAGE 1].

1. Sampling operator and rolling-window duration.

The source states: “Data gathered at 10 frames/sec (10 Hz)” [PAGE 1], and the detection rule uses a “.8 second rolling sum” [PAGE 1] over “each sequence of 8 frames” [PAGE 1]. Therefore:

\[
f_s = 10\,\text{Hz}
\]

\[
\Delta t = \frac{1}{f_s} = 0.1\,\text{s}
\]

\[
N_w = 8
\]

\[
T_w = N_w \Delta t = 0.8\,\text{s}
\]

Units: \(f_s\) is hertz, \(\Delta t\) and \(T_w\) are seconds, and \(N_w\) is a frame count.

2. Angular increment with wrap handling.

Let \(\theta_t\) be defender orientation at frame \(t\), measured in radians or degrees by the tracking source. Because orientation is periodic, the raw difference \(\theta_t - \theta_{t-1}\) can contain false jumps near the \(+\pi\) / \(-\pi\) boundary. A minimal wrap-safe increment is:

\[
\Delta\theta_t = \operatorname{atan2}\left(\sin(\theta_t-\theta_{t-1}), \cos(\theta_t-\theta_{t-1})\right)
\]

where \(\Delta\theta_t\) is in radians and lies in \((-\pi, \pi]\). In degrees:

\[
\Delta\theta_t^{\circ} = \frac{180}{\pi}\Delta\theta_t
\]

Units: radians or degrees. This equation is not explicitly printed in the source but is required to implement the source’s orientation-change framework without artificial discontinuities.

3. Rolling angular-change sum.

The source says: “we calculate a rolling sum of the change in a defender's orientation over each sequence of 8 frames” [PAGE 1]. The reconstructed operator is:

\[
S_t^{\circ} = \sum_{k=0}^{N_w-1} \Delta\theta_{t-k}^{\circ}
\]

where \(S_t^{\circ}\) is the rolling sum at frame \(t\), in degrees. If the implementation uses radians, the equivalent is \(S_t = \sum_{k=0}^{N_w-1}\Delta\theta_{t-k}\), with threshold converted to radians.

4. Spin-move label operator.

The source states: “If |rolling sum| >= 200 degrees, we label the play-player instance as a spin move” [PAGE 1]. Therefore:

\[
I_{\text{spin}}(t) = \mathbf{1}\left[\left|S_t^{\circ}\right| \ge \Theta\right]
\]

\[
\Theta = 200^{\circ}
\]

\[
\Theta_{\text{rad}} = \frac{200\pi}{180} \approx 3.491\,\text{rad}
\]

where \(I_{\text{spin}}(t)\) is a Bernoulli indicator taking values 0 or 1, and \(\Theta\) is the angular threshold. The source also says: “For each play, we record each pass rusher’s highest orientation change rolling sum” [PAGE 1], so a play-level operator is:

\[
S_p^{\max} = \max_{t \in p} \left|S_t^{\circ}\right|
\]

\[
I_{\text{spin}}(p) = \mathbf{1}\left[S_p^{\max} \ge 200^{\circ}\right]
\]

Units: degrees for \(S\), dimensionless for indicators.

5. Equivalent angular-speed interpretation.

Because the window is 0.8 seconds, the minimum detected average angular speed implied by the threshold is:

\[
\bar{\omega}_{\min} = \frac{200^{\circ}}{0.8\,\text{s}} = 250^{\circ}\,\text{s}^{-1}
\]

In SI angular units:

\[
250^{\circ}\,\text{s}^{-1} \times \frac{\pi}{180} \approx 4.363\,\text{rad}\,\text{s}^{-1}
\]

This is not a separate claim from the source but a dimensional restatement of “200 degrees within 8 frames” [PAGE 1].

6. Sign-consistency audit operator.

The source says the rolling sum is intended to ensure that the player is “rotating in same direction, over a sustained period of time” [PAGE 1]. A necessary audit quantity is the number of sign reversals in the angular increments:

\[
C_t = \sum_{k=0}^{N_w-2} \mathbf{1}\left[\operatorname{sign}\left(\Delta\theta_{t-k}^{\circ}\right) \ne \operatorname{sign}\left(\Delta\theta_{t-k-1}^{\circ}\right)\right]
\]

where \(C_t\) counts direction changes across the 8-frame window. If \(C_t = 0\), the angular increments are direction-consistent. If \(C_t\) is large, the high rolling sum may be caused by noisy oscillation, contact, or mixed-direction rotation rather than a clean spin. The source does not specify a sign-change cutoff, so this is an audit operator, not an asserted source rule.

7. Pre-spin feature window and SI units.

The source says: “XGBClassifier looks at 1 second before spin move starts” [PAGE 1]. Let the spin-start frame be \(t_s\). The feature window is:

\[
W_{\text{pre}} = [t_s - 1.0\,\text{s}, t_s)
\]

The source lists features such as “difference in speed, displacement, difference in distance to QB, acceleration, speed, etc.” and “Computed properties like maximum, variance, mean” [PAGE 1]. In SI units, if positional tracking is converted to meters:

\[
x, y : \text{m}
\]

\[
v : \text{m}\,\text{s}^{-1}
\]

\[
a : \text{m}\,\text{s}^{-2}
\]

\[
d_{\text{QB}} : \text{m}
\]

If the underlying tracking coordinates are in yards or feet, conversion is required:

\[
1\,\text{yd} = 0.9144\,\text{m}
\]

\[
1\,\text{ft} = 0.3048\,\text{m}
\]

The source does not state the tracking unit, so the formal model must declare units explicitly.

8. Binary pressure target and expected probability.

The source states: “Target: Pressure (1) or No Pressure (0)” [PAGE 1] and “Model outputs an expected probability of pressure” [PAGE 1]. Therefore:

\[
y_i \in \{0,1\}
\]

\[
\hat p_i = P(y_i = 1 \mid X_i^{\text{pre}})
\]

\[
0 \le \hat p_i \le 1
\]

where \(y_i\) is observed pressure, \(\hat p_i\) is expected pressure probability, and \(X_i^{\text{pre}}\) is the pre-spin feature vector. Units: \(y_i\) is dimensionless binary, \(\hat p_i\) is dimensionless probability.

9. XGBoost probability link.

For a binary classifier, the raw margin is log-odds:

\[
\eta_i = \log\left(\frac{\hat p_i}{1-\hat p_i}\right)
\]

The inverse link is:

\[
\hat p_i = \sigma(\eta_i) = \frac{1}{1+e^{-\eta_i}}
\]

where \(\eta_i\) is dimensionless log-odds and \(\sigma(\eta_i)\) is probability.

A standard regularized objective consistent with XGBoost is:

\[
L = -\sum_i \left[y_i \ln \hat p_i + (1-y_i)\ln(1-\hat p_i)\right] + \Omega(f)
\]

where the first term is binary cross-entropy in nats and \(\Omega(f)\) is a model-complexity penalty. If measured in bits, divide the log-loss term by \(\ln 2\).

10. Residual and over-expected metric.

The source states: “Spin Move Pressure Over-expected Metric: Residual of Pressure – Expected Pressure” [PAGE 1]. Thus:

\[
r_i = y_i - \hat p_i
\]

where \(r_i\) is dimensionless and lies in \([-1,1]\) for each observation. For player \(j\):

\[
\text{POE}_j = \frac{1}{n_j}\sum_{i \in j} \left(y_i - \hat p_i\right)
\]

where \(n_j\) is the number of detected spin moves for player \(j\), and \(\text{POE}_j\) is average pressure over expected in probability units. If \(y_i\) is Bernoulli and \(\hat p_i\) is fixed, the conditional variance is approximately:

\[
\operatorname{Var}(y_i - \hat p_i \mid \hat p_i) = \hat p_i(1-\hat p_i)
\]

If model uncertainty is included, an approximate total residual variance is:

\[
\operatorname{Var}(r_i) \approx \hat p_i(1-\hat p_i) + \operatorname{Var}(\hat p_i)
\]

The standard error of the player-level average is approximately:

\[
\operatorname{SE}(\text{POE}_j) \approx \frac{\sqrt{\sum_{i \in j}\operatorname{Var}(r_i)}}{n_j}
\]

This equation exposes the small-sample issue acknowledged by the source: “Limited sample size” and “Prone to some outliers” [PAGE 1].

11. Accuracy and correlation operators.

The source reports: “86% accuracy on 70/30 Train-test split” [PAGE 1]. Accuracy is:

\[
\text{Accuracy} = \frac{TP + TN}{N}
\]

where \(TP\), \(TN\), and \(N\) are dimensionless counts.

The source reports week-to-week stability as “Correlation: r = 0.26” [PAGE 1] and spin pressure rate versus expected pressure as “Correlation: r = 0.6” [PAGE 1]. Pearson correlation is:

\[
r_{XY} = \frac{\sum_i (X_i - \bar X)(Y_i - \bar Y)}{\sqrt{\sum_i (X_i - \bar X)^2}\sqrt{\sum_i (Y_i - \bar Y)^2}}
\]

where \(r_{XY}\) is dimensionless. The coefficient of determination is \(r_{XY}^2\), representing approximate shared variance under linear-association assumptions.

12. SHAP attribution operator.

The source states: “play-level SHAP values can be used to quantify the exact features leading to a spin move’s outcome” and “SHAP (Values) allow us to get a more granular, detailed look at the “black box” model” [PAGE 1]. For a model output \(f(x)\):

\[
f(x) = \phi_0 + \sum_{k=1}^{K} \phi_k
\]

\[
\sum_{k=1}^{K}\phi_k = f(x) - \mathbb{E}[f(X)]
\]

where \(\phi_k\) is the SHAP contribution of feature \(k\), in the same units as the model output. If the XGBoost output is log-odds, SHAP values are in log-odds units; if transformed to probability, they are probability-space approximations, but the additive property is cleanest on the raw margin scale.

13. Exact singularity and breakdown regimes.

a. Angular threshold discontinuity: The spin indicator \(I_{\text{spin}}(t)\) is discontinuous at \(|S_t^{\circ}| = 200^{\circ}\). Small orientation-noise perturbations near the threshold can flip labels. This is a true detection singularity.

b. Log-loss singularity: The binary cross-entropy term \(-[y\ln p + (1-y)\ln(1-p)]\) diverges if \(p = 0\) when \(y = 1\), or if \(p = 1\) when \(y = 0\). In practice, clipping or regularization is required.

c. Probability saturation: The sigmoid \(\sigma(\eta)\) saturates as \(|\eta| \to \infty\), causing gradient vanishing if raw margins become extreme.

d. Correlation undefinedness: Pearson \(r\) is undefined if either variable has zero variance. This matters for small player samples or rare pressure events.

e. Tree-model extrapolation: XGBoost predictions are piecewise constant outside training feature ranges. If a spin move occurs in an unseen tactical regime, the expected pressure probability may be unreliable.

f. Temporal leakage: If features after spin start are used, the model may predict the outcome from the outcome itself. The source’s statement that the model “looks at 1 second before spin move starts” is the required temporal guard [PAGE 1].

g. Small-sample aggregation: The player-level residual \(\text{POE}_j\) becomes unstable as \(n_j\) becomes small. The source’s own warning about limited sample and outliers identifies this breakdown regime [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage of the source can be reconstructed as a chain from manual film evaluation to tracking-based event detection, then to probabilistic outcome modeling, and finally to residual-based player evaluation. The source explicitly frames the novelty of individual-move analysis: “Although previous public research has been done on football linemen in general, there has been limited exploration of individual moves and techniques” [PAGE 1]. This places the work in the broader lineage of public football analytics where positional tracking is used to identify player actions that were previously only visible through film review. The source also states: “Detection framework can be used to easily find spin moves, rather than manually sifting through all the film” [PAGE 1]. That sentence marks the genealogy: manual observation is replaced by an algorithmic detector, then the detector feeds a model, and the model feeds a residual metric.

The data genealogy is explicit. The study uses “Player tracking data from 2023 NFL Big Data Bowl” and “Weeks 1-8 of 2021 NFL Season” [PAGE 1]. The tracking fields include “Positional (x,y), Speed, Orientation & Moving Direction, Acceleration” and are sampled at 10 Hz [PAGE 1]. This places the study inside the lineage of NFL tracking datasets where player pose, motion, and location are converted into quantitative features. The orientation field is especially important because it permits detection of rotational movement, which is not directly available from position alone. However, the source correctly warns that orientation is vulnerable to “jostling at the line of scrimmage” [PAGE 1]. This is a recurring scientific issue: sensor-derived orientation is not a pure kinematic intention signal. It can be contaminated by contact, collision, and tracking error.

The multi-week traps arise from the evaluation design. The source reports two temporal windows: “Average Spin Move Pressures Over Expected Weeks 1−4” and “Average Spin Move Pressures Over Expected Weeks 4−8” [PAGE 1]. It then reports “Correlation: r = 0.26” for week-to-week stability and describes it as “Relatively stable over the course of a season” [PAGE 1]. But the same page warns: “Limited sample size” and “Prone to some outliers” [PAGE 1]. The trap is that a player’s early-season over-expected score may be unstable because spin moves are rare, opponent protection rules vary, and a few high-leverage plays can dominate the average. A player who has a small number of successful spins against weak protection may look elite, while a player who faces more difficult rush lanes may look worse even if execution is similar.

A second multi-week trap is the difference between random train-test splitting and temporal validation. The source says: “86% accuracy on 70/30 Train-test split” [PAGE 1]. If the split is random by play rather than blocked by game or week, the model may benefit from same-game correlation. If the split is temporal, performance may drop because tactical tendencies evolve. The source does not specify the split structure, so the 86% accuracy should be treated as an internal estimate, not proof of out-of-season robustness.

A third genealogical trap is the relationship between expected pressure and pressure rate. The source reports “Correlation: r = 0.6” between “Spin Move Pressure Rate” and “Average Expected Spin Move Pressures,” and says this “Model lines up well with traditional metrics” and “Supports over-expected metric” [PAGE 1]. This is useful, but the interpretation must remain cautious. A correlation of 0.6 means the model’s expected-pressure scores are associated with raw pressure rate, but it does not prove that the residual isolates execution. Some of the residual may reflect unmodeled defensive scheme, blocker quality, quarterback release time, or game script.

The final historical trap is that spin moves are embedded in a broader pass-rush economy. The source notes that spin moves are “used on passing plays” and suggests that coordinators can “Optimize participation” for “best spin move rushers” [PAGE 1]. That means the metric is not merely a measure of individual technique; it is also affected by how often a team chooses to call or allow the move. If a team uses a player’s spin move only in favorable matchups, the observed over-expected value may reflect scheme selection as much as skill. Therefore, the genealogical interpretation must separate detection, prediction, residual measurement, and strategic selection.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive strategic layer is crucial because the source is not merely measuring a physical event; it is modeling a contested decision inside a repeated strategic environment. The defender, offensive lineman, quarterback, and coordinator all update beliefs about one another. The source’s detector identifies a spin move, but it does not directly observe the defender’s intention. It observes orientation change that exceeds a threshold. This creates a recursive gap: the defender may spin because it is the optimal counter to the blocker’s set, because it is a habit, or because the defender is reacting to an unexpected protection. The model’s expected-pressure output assumes that the pre-spin feature distribution is informative, but the defender’s future action may already be partially anticipated by the offense.

A crisis habit regression occurs when a defender under fatigue, frustration, or repeated failure defaults to a familiar move even when the situation does not favor it. The source does not explicitly model fatigue, but it does include acceleration, speed, and movement features [PAGE 1]. If a defender is repeatedly blocked, the orientation tracker may still detect a spin attempt, but the offensive line may already be prepared. In that case, the spin-move label is correct, but the pressure outcome may be low because the defender’s choice was predictable. The over-expected residual would then measure something more complicated than “execution of the spin itself.” It could reflect poor decision timing, reduced explosiveness, or an offense that has diagnosed the tendency.

A counter-trap occurs when the offense intentionally baits or counters the spin. For example, a tackle may initially set as if vulnerable to an outside move, then recover to the spin side. If the defender spins into a reinforced protection, the probability of pressure should decrease. The source’s features include “difference in distance to QB” and “acceleration,” which may partially capture the blocker’s recovery and the defender’s attempt to re-route [PAGE 1]. However, the source does not state that explicit offensive counter-protection features are included. If those features are absent, the model may misclassify a countered spin as poor execution, when the true cause is offensive scheme.

The clock layer is also recursive. The source defines a pre-spin feature window of 1 second: “XGBClassifier looks at 1 second before spin move starts” [PAGE 1]. But the pressure outcome may occur after the quarterback releases the ball, after a sack is completed, or after the play is blown dead. If the quarterback gets rid of the ball quickly, a spin move may be physically executed but pressure may never materialize. Conversely, a spin move that occurs late may create pressure only because the protection has broken down, not because the spin itself caused the failure. The clock therefore affects both the label and the outcome. The source’s model does not explicitly mention down, distance, score, time remaining, or quarterback release time, although the future-research section says some features were not incorporated: “some unincorporated features could contain valuable information” [PAGE 1]. Those omitted features are likely part of the clock-and-context problem.

A recursive model of the strategic situation would distinguish three layers. The first layer is physical: orientation, displacement, speed, acceleration, and distance to quarterback. The second layer is tactical: blocker set, protection call, quarterback drop, and pass-rush lane. The third layer is strategic: repeated tendencies, opponent adjustment, and game state. The source’s framework primarily observes the first layer and partially models the second. The third layer is mostly implicit. Therefore, any claim that the residual measures “how good the rusher is at executing the spin itself” must be conditioned on the assumption that the feature set adequately captures the defensive and offensive context. If it does not, recursive opponent adjustment can contaminate the residual.

The safest interpretation is that the metric is useful as a hypothesis-generating signal. A player with high positive over-expected pressure on spin moves may have better spin timing, better counter recovery, or favorable matchups. A player with low or negative over-expected pressure may be predictable, may face stronger tackles, or may be used in less favorable pass-rush situations. The metric becomes more credible when combined with SHAP values, because the source states: “play-level SHAP values can be used to quantify the exact features leading to a spin move’s outcome” [PAGE 1]. SHAP can reveal whether a player’s residual is associated with acceleration, speed difference, distance to quarterback, or other features. But SHAP describes association inside the model, not ultimate causal intention. Recursive theory of mind therefore requires humility: the model can identify spin-like movement and expected pressure, but it cannot fully infer the mental state of the defender or the counter-strategy of the offense without richer contextual data.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto problem asks whether a detected spin move should be accepted as a valid pass-rush execution event once physical, biomechanical, and environmental constraints are considered. The source provides a detection rule based on orientation rolling sum, but it does not provide a full physical model of the defender’s body, foot contact, torque generation, or field traction. Therefore, the adjudication must separate what the source proves from what external physical constraints can veto.

First, the source’s own criterion is partly physical and partly statistical. It states that the rolling sum is intended to ensure the player is “rotating in same direction, over a sustained period of time” [PAGE 1]. A formal necessary condition is sign consistency across angular increments. If the 8-frame window contains many direction reversals, the rolling sum may still exceed 200 degrees in magnitude, but the physical interpretation as a sustained spin is weakened. Let \(C_t\) be the number of sign changes in the 8-frame angular-increment sequence. If \(C_t\) is large relative to 7 possible transitions, the event should be flagged for manual review even if the threshold is met. The source does not specify a maximum allowable \(C_t\), so this is not a source-defined veto, but it is a necessary physical audit condition.

Second, orientation change alone cannot distinguish an active spin from a passive rotation caused by collision. The source acknowledges that orientation can be affected by “jostling at the line of scrimmage” [PAGE 1]. A defender who is turned by a blocker may produce a large orientation rolling sum without executing a voluntary spin move. The tracking data include “Positional (x,y), Speed, Orientation & Moving Direction, Acceleration” [PAGE 1]. Therefore, a physical veto can use acceleration and displacement. If the orientation change coincides with a large collision-like acceleration vector directed from the blocker toward the defender, the event should be treated as contact-induced rotation until proven otherwise. A formal audit condition is:

\[
\|\mathbf{a}_t\| \ge a_{\text{collision}}
\]

where \(\mathbf{a}_t\) is the defender’s acceleration vector and \(a_{\text{collision}}\) is a collision threshold. The source does not provide \(a_{\text{collision}}\), so this condition cannot be numerically adjudicated from the page alone, but its qualitative logic follows directly from the source’s warning about jostling.

Third, a controlled spin move requires footwork and body rotation. Tracking orientation does not directly observe foot contact, center of mass, or lower-body torque. If a defender’s torso orientation changes rapidly but the center of mass remains nearly stationary, the event may be a shoulder turn, a collision reaction, or a tracking artifact rather than a true pass-rush spin. If the center of mass moves laterally in a manner inconsistent with a pass-rush arc, the event may be a scramble, a stunt, or a misdirected rush. A physical veto would therefore require joint analysis of orientation, positional displacement, speed, and acceleration. The source’s feature list includes these fields, so the data can support such a veto, but the source page does not explicitly implement it.

Fourth, biomechanical plausibility imposes a torque condition. A spin move is not just an orientation change; it requires the defender to generate rotational movement while maintaining balance and forward or lateral progression. If the angular speed implied by the threshold is high but the positional speed is near zero and acceleration is erratic, the event may be a pivot in place rather than a pass-rush spin. The threshold itself implies:

\[
\bar{\omega}_{\min} = 250^{\circ}\,\text{s}^{-1}
\]

This is a demanding angular speed over 0.8 seconds. If the defender’s positional speed and displacement do not support a plausible movement pattern, the event should be vetoed or downweighted. The source’s future-improvement statement acknowledges the cutoff problem: “Better determine an ideal “cutoff” for determining a spin move” and “200 degrees within 8 frames is based on a subjective cutoff” [PAGE 1]. That is an explicit admission that the threshold is not fully physically validated.

Fifth, weather and field traction form an environmental veto layer. A spin move depends on the defender’s ability to plant, rotate, and redirect. If the field is wet, slick, or otherwise low-traction, a defender may slide or be turned by contact, producing orientation change without controlled execution. A formal traction constraint can be written as:

\[
|f_{\text{ground}}| \le \mu N
\]

where \(f_{\text{ground}}\) is the ground reaction force available for lateral or rotational control, \(\mu\) is the effective friction coefficient, and \(N\) is the normal force. If \(\mu\) is low, the probability that a large orientation change reflects a controlled spin decreases. However, the source does not include weather, field type, or traction data. Therefore, a weather veto cannot be proven from the source alone; it can only be asserted as an external audit requirement if such data are available.

The final veto proof is this: a detected event satisfies the source’s formal label if \(|S_t^{\circ}| \ge 200^{\circ}\) [PAGE 1], but it does not automatically satisfy the physical validity of a pass-rush spin move. The source’s label is a necessary statistical detection, not a sufficient biomechanical certification. Valid adjudication requires at least three additional checks: sign consistency, collision-acceleration screening, and positional-plausibility screening. If any check fails strongly, the event should be vetoed or flagged. If all checks pass, the event may be accepted as a spin-move candidate for modeling.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Below are three verifiable RLVR-style counterfactual veto scenarios. Each scenario defines a condition under which the source’s spin-move label or over-expected metric should be rejected, suspended, or adjusted. Each prediction is falsifiable using the tracking fields described in the source.

Veto 1: Non-sustained rotation veto.

Scenario: A defender’s 8-frame orientation rolling sum exceeds 200 degrees, but the angular increments reverse sign many times. The event is not a sustained same-direction rotation. This conflicts with the source’s stated purpose that the rolling sum “Ensures player is rotating in same direction, over a sustained period of time” [PAGE 1].

Verification procedure: Recompute \(\Delta\theta_t^{\circ}\) for the 8-frame window, count sign changes \(C_t\), and inspect the sequence. If \(C_t\) is high, the event is likely contaminated by jostling or noise.

Counterfactual prediction: If the spin detector were augmented with a sign-consistency constraint, the number of accepted spin moves would decrease most for players whose high orientation sums are associated with collision or blocker contact. Players with low acceleration and clean rotational increments would retain most of their spin labels.

Expected observable: The raw 200-degree threshold would overcount spin moves relative to a sign-consistent detector. The over-expected metric for players with many collision-contaminated events would shrink toward zero after veto filtering.

Veto 2: Temporal attribution veto.

Scenario: The pressure outcome occurs before the spin move starts, or the feature vector includes information from the spin move itself. In that case, the model may be predicting the