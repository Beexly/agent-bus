---
source: "undated - Using Tracking and Charting Data to Better Evaluate NFL Players A Review - Eager et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/undated"
pages: 18
model: deepseek/deepseek-v4.1-flash-1017
words: 8751
---

<NATIVE_REASONING>
We need answer with required XML sections, >=1000 words, deep derivation, cite pages/quotes. Need no betting lines/odds. Need maybe discuss source and derive formulas. User asked DRIVE SOURCE and pages. Need produce analysis? They didn't specify explicit question. We need infer: produce frontier foundry analysis of paper with specified sections. Need adhere exact XML. Need zero betting lines. Need formal LaTeX equations with SI/information/probability units, assumptions, exact singularity/breakdown regimes. Need cite exact [PAGE N] markers and verbatim quotes where source pages provided. Need >=1000 words across sections. Need deep multi-hop derivation/gray-zone audit >=400 words in THINK_TRACE. Need source operators/equations with formal LaTeX units page citations breakdown. Retro causal genealogy historical/scientific lineage & multi-week traps. Recursive theory of mind crisis habit regression vs counter-trap vs clock. Cross-layer veto adjudication physical/biomechanical/weather veto proof. RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need no fake ratios like Force/Fatigue. Need maybe include equations based on paper: ROC, RMSE, R-squared, expected pressure rate, expected win rate, BDUE, TDA-PFF, TDA-40 regression. Need units. Need singularity/breakdown regimes: e.g., logistic probability p in [0,1], logit singular at p=0/1; R^2 undefined when variance zero; XGBoost extrapolation breakdown outside convex hull; tracking data 10 Hz sampling Nyquist 5 Hz; 1s get-off window; Euclidean distance meters (paper uses yards? Tracking coordinates likely yards; we can state native coordinate units are yards in source, SI conversion). Need careful: source says x,y coordinate, speed, acceleration; no exact units. We can state source doesn't specify SI; if coordinates are yards, convert. Need avoid inventing units? We can state dimensionless probabilities and R^2; distances in yards (paper says 40-yard dash, yards; BDUE y-coordinate displacement likely yards). SI conversion optional.

Need cite quotes exactly. Need use verbatim quotes. Need page markers. Need not overquote too much but enough.

Need formulate "source operators": define:
- Euclidean get-off distance d_E(t)=sqrt((x(t)-x_0)^2+(y(t)-y_0)^2), d_y(t)=y(t)-y_0. In source, first one second. Units: coordinate units (yards) if native. Convert to m.
- Pressure probability p_pressure = P(pressure=1 | X), modeled by XGBoost; expected pressure rate over plays: EPR_i = (1/N_i) sum p_hat_pressure, dimensionless.
- Expected win rate similarly.
- ROC AUC = P(score_positive > score_negative) + 0.5 tie; dimensionless.
- R^2 = 1 - SS_res/SS_tot; dimensionless; breakdown SS_tot=0.
- RMSE = sqrt(1/n sum (y_i - yhat_i)^2); units of response (BDUE yards, PFF grade points).
- BDUE = actual bite distance - expected bite distance; if >0 less bite. Need sign.
- TDA-PFF grade per route maybe average residual? Actually model predicts PFF grade, aggregate. TDA-40 regression: 40_i = alpha + beta * (TDA-PFF_i / deep routes_i) + epsilon. Need note source says "simple linear model to regress to their 40-yard dash time" maybe inverted? "used a simple linear model to regress to their 40-yard dash time coming into the league" with per-route grade feature and 40 response. Equation.
- Model performance table: ROC 0.500 naive, 0.611 naive to tracking, 0.620 full for pressure; win 0.500, 0.584, 0.604. RMSE BDUE 3.00 naive vs 2.23 full. Deep grade RMSE 0.194, 0.193, 0.188.
- Stability: expected pressure rate r^2=0.858; expected win 0.861; BDUE 0.350; TDA-40 0.309; raw PFF coverage 0.082 -> 0.112 with BDUE; deep 40 r^2 0.2671; raw PFF deep 0.04. Need cite pages.

Need "multi-hop derivation & gray-zone audit": derive from observables to latent probabilities and stability. Discuss tracking sampling: 10 Hz, first 1s = 10 samples; derivative speed finite differences noisy; acceleration high variance; get-off measured by displacement not velocity; vertical speed more important. Gray zones: selection thresholds 150 pass-rush snaps, 50 play-action snaps, 150 deep routes; small-n bias; regression to mean; r-squared not causal; combine/pro-day adjustments; stadium/turf/dome effects; home team; role position; charting subjectivity; PFF grades [-2,2] increments 0.5? Actually PFF grades -2 to 2 in increments 0.5. Need mention. Multi-hop: probability -> expected rate -> year n+1 sack/pressure -> combine athleticism; combination of charting and tracking increases R^2. Need audit sign of BDUE: >0 less bite. Need caution: "Bite Distance Under Expected" vs "Below Expectation" inconsistency on page 9? Source says "Bite distance below expectation (BDUE)" and "BDUE values > 0 mean defensive player bit less than expected" but earlier "BDUE = actual - expected" so >0 more actual? Wait actual bite distance minus expected: if actual > expected, player bit more, but paper says >0 bit less. There is sign inconsistency. Need flag as gray-zone. Let's inspect: Page 8: "subtract the expected bite distance from the actual bite distance to create bite distance under expected (BDUE)" Then page 9: "BDUE is the difference between actual and expected bite distance... BDUE values > 0 mean defensive player bit less than expected, and < 0 more than expected." If actual minus expected >0 means actual > expected = more bite, not less. Unless "bite distance" measured as displacement toward LOS? Maybe sign convention inverted? Need mention sign-convention ambiguity. Good deep audit.

Need "RETROCAUSAL_GENEALOGY": lineage from play-by-play/EPA/DVOA/nflfastR, PFF charting, RFID tracking, Big Data Bowl, Next Gen Stats, Burke, StatsBomb, etc. Multi-week traps: adoption traps: treating tracking metrics as pure athleticism; crossing eras 2017 RFID; pro day vs combine; stadium installation differences; public media data vs team data; model drift; selection thresholds; fantasy/betting? Avoid betting lines. We can mention sports betting? Source mentions consumer use for sports betting. But invariant zero betting lines; can mention "consumer use" not lines? Better avoid betting. Multi-week traps: "stationarity assumption", "context confounding", "role vs position", "sample size", "overfitting XGBoost", "nonstationarity". Need historical/scientific lineage & multi-week traps. Could discuss "retrocausal" in sense metrics retrodict and become causal stories? Need careful.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Interpret: How evaluators/coaches/players adapt recursively; crisis habit regression = under pressure revert to prior habits (e.g., overvaluing 40 time, PFF grade, sacks); counter-trap = opponent/analyst counters metric (e.g., play-action to exploit BDUE, deep speed). Clock = time-varying athlete measure vs one-time combine. Need use recursive theory of mind: evaluator models player, player models evaluator? Need mention "crisis habit regression" as model usage under uncertainty: revert to familiar combine numbers; counter-trap: teams might alter play-action rate to attack LBs with high BDUE? Actually BDUE measures less bite, maybe better awareness; offense counters by RPO/motion. Clock: year-to-year stability and aging. Need not too speculative; tie to source.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. Need prove if metric can be vetoed by physical constraints. Use equations: max acceleration bounded by friction a_max <= mu g; speed cap; tracking chip sampling; weather/turf/dome effects. Paper includes stadium, dome, turf, rest, home. Need adjudicate: if observed get-off distance exceeds physical bound d_max <= 0.5 a_max t^2 + v0 t, veto; if wind/weather? Paper includes stadium effects and turf; no weather variables except dome. Need state weather veto is partial: dome/turf/stadium proxies; not direct wind/temp/humidity; threshold. Biomechanical: 40-yard dash vs tracking-adjusted; combine/pro day adjustments; injury/age. Physical: max speed from tracking maybe outlier due RFID; use median vs max; max speed sensitive. Need formal bound: d_E(1s) <= v_max*1 + 0.5*a_max*1^2? Actually if initial speed v0 (at snap) and acceleration a, d <= v0*1 + 0.5 a_max *1^2. But if v0 near 0, d <= 0.5 a_max. For NFL sprinter a_max ~ 10 m/s^2? d <=5m. But source uses yards; get-off first one second likely 2-5 yards. Need not exact constants? We can state generic. Maybe use a_max = mu_s g? For human sprint acceleration, horizontal ground reaction force limited by friction coefficient μ; a_max <= μ g; μ ~ 0.7-1.0? This is biomechanical. We can state if measured d_E exceeds bound, veto as tracking/error or non-sprint movement. Need "proof" in sense logical adjudication.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need create 3 scenarios with verifiable reward vetoes. Need precise predictions and tests. Scenarios:
1. Tracking coordinates sampling/outlier veto: if speed_max exceeds physical bound or jumps > ... then model prediction veto. Prediction: removing outliers reduces R^2 or changes top TDA-40; expected pressure rate stability remains >0.8? Need verifiable. 
2. Sign convention/BDUE audit: if recompute BDUE as expected - actual, top LB list flips sign; check whether high BDUE correlates positively with PFF coverage grade? Source says correlation within season r^2=0.038, next year 0.052, and adding BDUE improves coverage grade year-to-year 0.082->0.112. Need prediction: if sign is wrong, improvement disappears or reverses. Verifiable via replication. 
3. Selection threshold/leakage veto: deep route model includes "whether pass attempted" and PFF grade; target rate skill. If evaluate on players below 150 routes, TDA-40 r^2 drops; prediction <0.10 vs 0.2671. Or cross-validation by season not random; if random five-fold on play-level leaks player/season, inflated. Need choose verifiable. 
Need 3 "verifiable RLVR veto scenarios + predictions": maybe use explicit reward: R = 1 if held-out metric meets threshold and physical plausibility, 0 otherwise. Need predictions e.g., holdout 2021, threshold, etc. But source only 2017-2020. We can predict.

Need overall word count >1000. We can write ~2500-3500 words. Need exact XML tags. Need include citations [PAGE N] and verbatim quotes. Should cite throughout. Need ensure quotes verbatim. Use exact quotes from source. Let's list useful quotes:

Page 1: "combine charting and tracking data to build metrics for pass rushers, linebackers and receivers and show that combining charting and tracking data can help us evaluate players better than either data source by itself."
Page 1: PFF "assigned a numerical grade between -2 and 2, in increments of 0.5 to every player on every play"
Page 2: RFID "provided each tenth of a second"
Page 2: "the promise of tracking data is still in the early stages"
Page 3: get-off "by measuring their total Euclidean and vertical (y) distance from their position at the snap during the first one second of the play"
Page 4 table? Page 4: "ROC (Naïve) ... 0.500 ... 0.611 ... 0.620" We can quote exact maybe table not quote.
Page 5: "x_speed and speed are the player’s speed in the y direction and overall"
Page 6: "expected pressure rate has an r-squared value of 0.858 from year n to year n + 1 and expected win rate 0.861."
Page 6: "charting data combined with tracking data do a better job than either one individually."
Page 6 table: 0.274, 0.318, 0.344; 0.465, 0.405, 0.507; 0.263,0.325,0.353;0.535,0.370,0.558.
Page 7 table: 40-yard dash r^2 0.380, 0.567; etc.
Page 7: "traditional measures of athleticism ... are a one-time snapshot"
Page 8: "subtract the expected bite distance from the actual bite distance to create bite distance under expected (BDUE)"
Page 9: "BDUE values > 0 mean the defensive player bit less than expected, and < 0 more than expected." Sign inconsistency.
Page 9: year-to-year r^2 0.350; team EPA r^2 0.046.
Page 10: raw PFF coverage r^2 0.082; improves to 0.112; BDUE/PFF r^2 0.038, next year 0.052.
Page 10: "speed variables, as measured by the tracking data, are the most important in this model"
Page 12: TDA-40 r^2 0.2671; raw PFF deep 0.04.
Page 13: "faster in pads than in shorts"
Page 14: TDA-40 r^2 0.309 for >50 deep receiving snaps.
Page 14: "the current revolution ... began with play-by-play data and charting data, but it will be accelerated with tracking data."
Page 15: future research emulate three-cone and vertical jump.

Need page citations for methods:
Page 2-3 features. Page 3 XGBoost, caret, five-fold.
Page 3 BDUE features and PFF grade deep features page 4.
Page 4 TDA-40 regression.
Page 4 Table 3.1.1.
Page 5 variable importance.
Page 6 tables.
Page 7 table.
Page 8 RMSE.
Page 9 BDUE.
Page 10 LB.
Page 10-11 deep model.
Page 12 TDA-PFF table.
Page 12-13 TDA-40.
Page 13-14 tables.
Page 14 discussion.
Page 15 future.

Need formal LaTeX. We can use \(...\) and \[...\]. Need units. Need mention dimensionless where applicable. Need "SI/information/probability units". For information units maybe ROC/R^2 dimensionless; probability dimensionless [0,1]; log-odds nats? We can state logit units: nats. Tracking coordinates: source uses yards; SI meters conversion 0.9144 m/yd. Speed yards/s -> m/s. Sampling 10 Hz => sample period 0.1 s, Nyquist 5 Hz. Acceleration m/s^2. PFF grade points. RMSE units response. BDUE yards. TDA-40 seconds. R^2 dimensionless. ROC AUC dimensionless probability. Information entropy in bits or nats? We can include "binary entropy H(p) = -p log2 p - (1-p) log2(1-p) bits" maybe not needed but information units. Need no toy equations. Use formal.

Need "exact singularity/breakdown regimes":
- logit \( \eta = \log(p/(1-p))\) singular at p=0,1; XGBoost probability calibration clipped.
- ROC AUC undefined if only one class; 0.5 no discrimination.
- R^2 undefined if SS_tot=0; unstable for small n or restricted range. Selection thresholds cause range restriction.
- RMSE units and zero only perfect; XGBoost cannot extrapolate outside training support; tree model piecewise constant, so for new stadium/turf/era or speed > training max, prediction saturates; "breakdown" outside convex hull.
- Euclidean distance derivative at t=0 not differentiable if no movement? Speed finite difference; noise at 10 Hz.
- TDA-40 linear regression: singular when Var(TDA-PFF per route)=0; extrapolation beyond observed grade; measurement error attenuation; regression to mean. R^2 0.2671.
- BDUE sign ambiguity; zero expected bite distance; sign convention.
- Physical bound: \(d_E \le v_0 t + \frac12 a_{\max} t^2\); if measured exceeds, veto. At t=1s, \(a_{\max}\le \mu_s g\); if \(\mu_s\approx1\), \(a_{\max}\le9.81 m/s^2\), d<=4.905m + v0. Need maybe use yards: 5.36 yd. But NFL get-off first second maybe less. We can avoid specific μ; state bound generic. Also max speed physical bound from human sprint; source uses max speed but median less outlier. 
- Weather: no direct weather variable; dome/turf/stadium proxies; if rain/snow changes traction, μ decreases, physical bound lower; model trained without weather can misattribute. Veto if stadium/turf/dome not in training support or weather extreme. 
Need "cross-layer veto adjudication" prove: physical layer can veto metric if impossible displacement; biomechanical layer if measured get-off contradicts combine by >? But paper says expected pressure rate maps to combine; TDA-40 can be faster/slower. Need not require exact threshold. Use "veto rule".

Need "retrocausal genealogy" includes historical sequence: box scores -> play-by-play -> EPA/DVOA -> nflfastR -> PFF charting -> RFID tracking -> Big Data Bowl -> NGS -> current paper. Retrocausal: metrics evaluated in year n predict year n+1; retrospective top lists create narratives (Cooper Kupp). Multi-week traps: "metric adoption trap", "combine anchor trap", "play-action rate trap", "stadium installation trap", "selection threshold trap", "nonstationarity trap". Need mention "multi-week" perhaps as weekly game planning? The phrase "multi-week traps" from prompt likely means traps over multiple weeks. We can frame: in a season, a player's BDUE or TDA-40 can fluctuate over multi-week windows; small samples; don't overreact. Need say "multi-week traps" explicitly.

Need "recursive theory of mind": 
- Evaluator's mental model: prior on player from combine; observes tracking metric; updates. Player/coach/opponent models evaluator? E.g., offense knows LB with low BDUE (bites less) and uses RPO/motion; defense knows offense uses play action. 
- Crisis habit regression: when uncertainty high (injury, new scheme), evaluators revert to habit (40 time, sacks, PFF grade). Paper's evidence: sacks r^2 0.202; expected pressure better. 
- Counter-trap: if evaluators over-reward max speed, players/agents optimize 40; defenses use play action to displace LBs; offenses use deep routes to exploit speed. 
- Clock: time-varying athleticism; one-time combine vs tracking over career. 
Need mention "clock" as aging/injury clock and game clock? The section title says "crisis habit regression vs counter-trap vs clock." We can discuss three control policies: habit (revert), counter-trap (opponent adapts), clock (time-varying measurement). Need not be too abstract.

Need "RLVR counterfactual vetoes" with 3 scenarios and predictions. Need make them verifiable. Could phrase:
1. Outlier/physical-plausibility reward: Train/evaluate pressure model with a verifier that rejects plays where \(d_E(1s)\) exceeds \(v_0 + 0.5 a_{\max}\) or speed_max > biological cap or coordinate jump > \(v_{\max}\Delta t\). Prediction: full-model ROC drops from 0.620 to 0.605-0.615, but expected pressure stability remains >0.80; top-10 pass rushers largely stable (rank correlation >0.8). If ROC stays exactly 0.620 or stability collapses, veto.
2. BDUE sign-convention counterfactual: Recompute BDUE as expected - actual and re-run linear model predicting next-year PFF coverage. Prediction: the reported improvement 0.082→0.112 reverses or falls to ≤0.082 if sign wrong; top BDUE list flips. Verifiable via replication. If improvement persists with both signs, sign ambiguity not material.
3. Deep-route selection/leakage veto: Re-run TDA-40 with player-level grouped cross-validation and hold out players/seasons; include only >150 routes. Prediction: r^2 remains near 0.2671 (or drops to 0.15-0.25) but if random play-level CV was used, inflated >0.30; if below 0.10, metric not stable. Also test deep grade model without "attempt" feature? Hmm "attempt" might be post-treatment? Actually PFF grade on deep pass; attempt is whether pass attempted. If predicting grade, attempt may be part of outcome; but source includes it. Could be leakage. Prediction: removing post-snap outcome variables (attempt, pressure, time_to_throw) reduces RMSE benefit; full RMSE 0.188 vs naive 0.194; if RMSE worsens to >0.194, model's speed value is confounded. That's verifiable. Need pick one. Maybe scenario 3: Post-snap leakage veto: remove "attempt", "pressure", "time_to_throw", "screen", "play action"? Some are pre-snap/play design. Prediction: speed importance remains but RMSE improvement shrinks; if full model no longer beats naive, veto. Need not overcomplicate. Need three distinct.

Need ensure no betting lines. We can mention "sports betting" only if quoting? Avoid. No odds/spreads/totals/moneylines. We can mention "consumer customers" not betting. Need not mention fantasy? Fantasy not betting line but can avoid. No "bet". Use "consumer applications" if needed.

Need answer maybe no markdown? XML sections. We can include paragraphs and LaTeX. Need exact tags. Need not include outside. Need likely start with <THINK_TRACE> etc. Need include all sections. Need maybe use bullet lists inside. Fine.

Need word count. Let's draft carefully.

Potential issue: "ZERO TOY EQUATIONS" — ensure every equation has real meaning, units, assumptions. Avoid fake ratios. Use equations from paper. No invented "Force/Fatigue". Good.

Need "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We need use exact [PAGE N] markers. We can include page markers inline. Verbatim quotes in quotation marks. Need not every sentence cite, but enough. Need ensure quotes exact. Let's verify exact quotes:
- Page 1: "combine charting and tracking data to build metrics for pass rushers, linebackers and receivers and show that combining charting and tracking data can help us evaluate players better than either data source by itself." This appears in abstract with "In this paper we combine..." exact.
- Page 2: "provided each tenth of a second" exact.
- Page 3: "by measuring their total Euclidean and vertical (y) distance from their position at the snap during the first one second of the play" exact.
- Page 4: "The model uses a player’s PFF receiving grade – a number between -2 and 2 – as the response variable" exact? Page 4: "The model uses a player’s PFF receiving grade – a number between -2 and 2 – as the response variable, with the following as features:" yes.
- Page 6: "expected pressure rate has an r-squared value of 0.858 from year n to year n + 1 and expected win rate 0.861." exact includes "For players with more than 150..." Before. Good.
- Page 8: "subtract the expected bite distance from the actual bite distance to create bite distance under expected (BDUE)" exact.
- Page 9: "BDUE values > 0 mean the defensive player bit less than expected, and < 0 more than expected." exact.
- Page 10: "This improves to 0.112 when adding in BDUE into a linear model." exact.
- Page 12: "which has an r-squared value of 0.2671" exact? "Figure 3.3.2 displays the relationship between these two variables, which has an r-squared value of 0.2671." yes.
- Page 14: "faster in pads than in shorts" exact.
- Page 14: "The current revolution in football analytics began with play-by-play data and charting data, but it will be accelerated with tracking data." exact? Page 14: "The current revolution in football analytics began with play-by-play data and charting data, but it will be accelerated with tracking data." yes.
Need use verbatim quotes with punctuation maybe.

Need maybe quote Table values not verbatim but cite.

Need "formal LaTeX equations, units, page citations, breakdown." We can format.

Let's outline response:

<THINK_TRACE>
- Purpose: reconstruct paper's inferential chain. Multi-hop: tracking coordinates -> get-off distance -> XGBoost p(pressure/win) -> expected rates -> stability/predictive R^2 -> combine mapping; LB: y-displacement -> expected bite -> BDUE -> coverage; WR: speed features -> TDA-PFF -> TDA-40. 
- Audit gray zones: sign inconsistency BDUE, 10Hz sampling, first 1s window, selection thresholds, XGBoost no extrapolation, PFF charting subjectivity, pro day adjustment, stadium/dome/turf proxies, nonstationarity, regression to mean. 
- Explain metrics: probabilities dimensionless; ROC; R^2; RMSE. 
- Discuss causal vs predictive: R^2 not causal; year n+1 predictive. 
- Cite pages/quotes. >=400 words. 
Need maybe 500-700 words. 
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
- Define symbols and equations with units.
- Eq 1 tracking sampling: Δt=0.1s, Nyquist 5 Hz; coordinates in yards; SI conversion.
- Eq 2 get-off d_E and d_y; t∈[0,1s]; units yards/m.
- Eq 3 pressure probability logistic/XGBoost; p∈[0,1]; logit nats; singular p=0/1.
- Eq 4 expected pressure rate; dimensionless; page citations.
- Eq 5 ROC AUC; dimensionless; undefined one class.
- Eq 6 R^2; dimensionless; SS_tot=0 breakdown.
- Eq 7 RMSE; units response.
- Eq 8 BDUE; sign; units yards; sign-convention breakdown.
- Eq 9 TDA-PFF aggregation; PFF grade points per route? Actually TDA-PFF grade is sum? Table values 15.4; maybe aggregate. Define \(G_i = \sum_j \hat g_{ij}\) or average? Table says TDA-PFF grades for players; not clear. We can define \(G_i = \sum_{r\in R_i} \hat g_{ir}\) for aggregation; per-route \(g\). Units PFF grade points. Then TDA-40: \(D_i^{40} = \alpha + \beta (G_i/N_i^{deep}) + \epsilon_i\), seconds. Breakdown Var=0.
- Tables with citations. 
- Breakdown regimes.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
- Lineage: box score -> play-by-play -> DVOA/EPA -> nflfastR -> PFF charting -> RFID 2017 -> Big Data Bowl -> NGS; paper combines. Cite pages.
- Retrocausal: top lists and narratives (Kupp) after metrics; year n to n+1 prediction. 
- Multi-week traps: nonstationarity, stadium installation, role drift, play-action rate against, injury/age, selection thresholds, public/team data asymmetry, overfitting. 
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
- Three regimes: crisis habit regression (sacks/40 time/PFF grade anchors), counter-trap (opponents adapt: play-action, RPO, motion; evaluators overfit speed), clock (time-varying athleticism; combine one-time). 
- How recursive: evaluator beliefs about player skill; player/coach beliefs about evaluator; model updates. 
- Predictions: high BDUE LBs face more play-action? Actually if LB bites less, offense may use RPO/motion; but paper says future work. Need careful. 
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical: displacement bound; speed cap; sampling; weather/turf/dome. 
- Biomechanical: acceleration friction; 40-yard vs tracking; injury/age; pro day. 
- Weather: paper includes dome/turf/stadium; no wind/temp; veto if extreme or out-of-support. 
- Formal veto rules with equations. 
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
- 3 scenarios with verifier and predictions. 
</RLVR_COUNTERFACTUAL_VETOES>

Need final only XML. Need no extra. Need word count maybe >2500. Let's write.

Need be careful with "information units": We can say logit in nats, entropy bits. But not overdo. Include "probability units dimensionless" and "information nats". Good.

Need "exact singularity/breakdown regimes" maybe list in equations section. Need "assumptions" too. Each equation include assumptions. Good.

Let's draft in detail.

Potential issue: The paper uses "x_speed and speed are the player's speed in the y direction and overall" but variable name x_speed? It says x_speed and speed are speed in y direction and overall. That's odd; note maybe typo. We can mention. In equation, use \(s_y\) vertical speed. Good.

Need mention "vertical speed more important than overall" cite page 5. Quote: "vertical speed is more important than overall speed" exact? Page 5: "It also makes sense that vertical speed is more important than overall speed (which comes into play more on exotic pass-rushing plays like stunts and loops and less on more traditional rushes)." We can quote. Good.

Need mention "Stadium effects are not the most important, but they have a non-zero variable importance" exact? Page 5: "Stadium effects are not the most important, but they have a non-zero variable importance, as do things like playing on turf or on different rest differentials." Good.

Need "PFF grade between -2 and 2 increments 0.5" page 1. Use.

Need "n=471 players" page 6. Use.

Need "five-fold cross validation" page 3. Use. Need note random five-fold at play level can leak player/season; not specified. This is a gray zone. Good.

Need "BDUE values >0 mean bit less" sign inconsistency. We'll flag.

Need "TDA-PFF grade per-route" page 12. Table values sum? We can define \(G_i\) as reported aggregate; per-route \(g\). The regression uses "TDA-PFF grades from Table 3.3.2, divided by the number of deep receiving snaps" page 12. So equation: \(D_i^{40} = \alpha + \beta (G_i / N_i) + \epsilon_i\). Units: G_i PFF grade points; N_i routes; beta seconds per grade-point-per-route. Good.

Need "expected pressure rate r^2 0.858" page 6. Good.

Need "raw PFF coverage 0.082 to 0.112" page 10. Good.

Need "team EPA r^2 0.046" page 9. Good.

Need "BDUE and PFF raw coverage grade less correlated with each other in a given season (r^2 of 0.038) than they are from one year to the next (r^2 of 0.052)" page 10. Use. Good.

Need "TDA-40 r^2 0.2671 vs raw PFF deep 0.04" page 12. Good.

Need "TDA-40 year-to-year r^2 0.309 for >50 deep receiving snaps" page 14. Good.

Need "Cooper Kupp combine 4.62; TDA-40 faster" page 14-15. Use as retrocausal narrative. Quote? Page 15: "His combine time was 4.62, which was slower than all of his on-field data." Good.

Need "Big Data Bowl 2019" page 2. Use.

Need "RFID chips in shoulder pads and football" page 2. Use.

Need "NGS data" page 2. Use.

Need "StatsBomb" page 2? It says "For a good guide on differences... StatsBomb research paper [9]." Use maybe.

Need "non-stationarity" page 15. Quote: "The availability of tracking and charting data, along with the non-stationarity of the sport, means that the breadth of problems we can solve will be limited only by our imaginations." Use.

Need "future research emulate three-cone and vertical jump" page 15. Use.

Need not mention betting. Good.

Need "retrocausal genealogy" word maybe historical/scientific lineage. Good.

Need "multi-week traps" explicit. Good.

Need "crisis habit regression" maybe define formula? Could use a policy but no fake equation? We can avoid formula. Maybe use decision-theoretic notation? Could be toy? Better qualitative. But formal sections already have equations. The prompt says "crisis habit regression vs counter-trap vs clock" in section. We can describe.

Need "RLVR" maybe define "reinforcement learning with verifiable rewards" but ensure not too much. Use "verifier-gated reward". Good.

Need "3 verifiable RLVR veto scenarios + predictions" explicitly numbered. Good.

Need "zero betting lines" ensure no "line" word? The prompt uses "lines" but we won't mention. Avoid "line of scrimmage"? That's football, not betting line. It's okay? It includes "line" but not betting. The invariant says never mention spreads/totals/moneylines/odds. "line of scrimmage" is not betting line, but to be safe we can use "scrimmage line" maybe still. It's a physical term. Fine.

Need maybe "moneyline" not mention. Good.

Need "formal LaTeX" with \(...\) and \[...\]. Fine.

Need answer in XML exactly. Let's compose.

We need ensure final answer not too long? Desired oververbosity 5 but requirements high. We'll produce maybe 3000 words. Need >=1000. Good.

Let's write with care.

Potential issue: "SOURCE_OPERATORS_AND_EQUATIONS" should include "formal LaTeX, units, page citations, breakdown." We can structure with bullets.

Let's begin.

Need perhaps use "PAGE" markers exactly as [PAGE 1 of 18]? They said exact [PAGE N] markers. We'll use [PAGE 1], [PAGE 2], etc. Should be fine? "exact [PAGE N] markers" maybe use [PAGE 1 of 18]? The source has [PAGE 1 of 18]. To be safe, use [PAGE 1 of 18] etc. But lengthy. We can use [PAGE 1] maybe considered exact? Prompt says "exact [PAGE N] markers" likely [PAGE 1]. But source markers have "of 18". Use [PAGE 1 of 18] to be exact. We'll do that. Need not every citation include of 18? Fine. Use [PAGE 1 of 18]. It will be verbose but okay.

Need quote exact with page. Good.

Let's draft final.

Need include "assumptions" in equations:
- tracking coordinates are in native yards; conversion to SI; chip time synchronized; no missing samples; constant sampling 10 Hz.
- XGBoost model conditional probability calibrated; independent plays not guaranteed; five-fold CV.
- R^2 for linear relation; stable variance.
- BDUE expected from XGBoost; sign convention assumed actual - expected; paper text inconsistent.
- TDA-40 linear model with measurement error.
- ROC requires binary labels.

Need "breakdown regimes":
- p=0/1 logit; one-class AUC; zero variance R^2; tree extrapolation; selection thresholds; out-of-support stadium/weather; BDUE sign; TDA-40 extrapolation; physical bounds; missing tracking.

Need "cross-layer veto adjudication" include equations:
\[ d_E(1) \le v_0(1) + \frac{1}{2} a_{\max}(1)^2, \quad a_{\max}\le \mu_s g \]
Units: m; if yards convert. If observed beyond bound, veto as sensor/coordinate error or non-sprint. But this assumes straight-line acceleration; if player moves laterally, path length can exceed straight-line? Actually d_E is displacement; bound still applies for path? Acceleration magnitude bound, displacement <= integral speed <= v0 t + .5 a_max t^2. Good. But if initial speed unknown and orientation, use v0 max. Good.
- Speed cap \(v_{\max}\le v_{\rm human,max}\) maybe 12 m/s. But source max speed; median. Could state threshold generic.
- Weather: effective friction \(\mu_s(w)\) decreases with rain/snow; so \(a_{\max}(w)\le \mu_s(w)g\). If model trained without weather and stadium/dome/turf proxies, prediction bias; veto if residual correlates with weather. Good.
- Biomechanical: 40-yard dash vs TDA-40; if TDA-40 outside physiological range or faster than world record, veto. Need not exact.

Need "RLVR" predictions maybe numbers. Let's formulate:
Scenario A: Physical-plausibility verifier. Verifier computes \(d_E(1)\), speed_max, coordinate jumps. Reward 0 if out of bound. Prediction: full-model ROC 0.620 pressure / 0.604 win remains within ±0.015; if drops >0.03, tracking noise is material. Top-decile stable. 
Scenario B: BDUE sign/coverage verifier. Recompute both signs; reward if adding BDUE improves next-year PFF coverage r^2 from 0.082 to >0.112. Prediction: correct sign yields 0.10-0.12; wrong sign fails (≤0.082 or negative). 
Scenario C: Post-snap leakage verifier. Remove attempt, pressure, time_to_throw, screen? But screen is play design; maybe remove post-throw variables. Reward if full model still beats naive RMSE 0.194. Prediction: full RMSE rises to 0.190-0.193, still below naive but speed importance remains top; if >0.194, veto. Alternatively player-grouped CV: TDA-40 r^2 drops from 0.2671 to 0.18-0.25; if <0.10, selection/leakage. Need pick. Maybe scenario C: player-grouped CV for TDA-40. Prediction: r^2 0.15-0.25; if random CV >0.30 indicates leakage. This is verifiable. But need "RLVR" reward: reward only if held-out player r^2 ≥0.15. Good. Use three scenarios.

Need "multi-week traps" maybe mention "week-to-week BDUE is noisy; multi-week rolling averages needed; 50 play-action snaps threshold; don't overreact to 2-3 weeks." Good.

Need "recursive theory of mind" mention "crisis habit regression" under pressure: evaluators revert to sacks/40 time; "counter-trap": if metric becomes public, opponents/agents adapt; "clock": time-varying measure. Good.

Need final answer. Ensure no outside text.

Let's now write final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s inferential chain is a multi-layer translation from raw sensing to evaluative language. First, RFID tracking gives \((x,y)\) coordinates “provided each tenth of a second” [PAGE 2 of 18], so the sampling interval is \(\Delta t=0.1\,\mathrm{s}\) and the nominal Nyquist frequency is \(5\,\mathrm{Hz}\). The paper converts the first second of a pass-rush snap into “total Euclidean and vertical (y) distance from their position at the snap during the first one second of the play” [PAGE 3 of 18]. Those distances then become features in an XGBoost probability model for pressure and pass-rush wins, with contextual controls for down, distance, quarter, stadium, dome, turf, rest, charted position, and \(x,y\) position and speed [PAGE 3 of 18]. The play-level probabilities are aggregated into “expected pressure and expected win rate” [PAGE 5 of 18], and those expected rates are tested for year-to-year stability and for prediction of next-year sacks and pressure. The reported stability is high: “expected pressure rate has an r-squared value of 0.858 from year n to year n + 1 and expected win rate 0.861” [PAGE 6 of 18]. The key comparative claim is that “charting data combined with tracking data do a better job than either one individually” [PAGE 6 of 18], supported by Tables 3.1.2 and 3.1.3, where combined models improve next-year sack-rate and pressure-rate \(R^2\) relative to charting-only or tracking-only inputs [PAGE 6 of 18].

The second chain is linebacker play-action displacement. The source subtracts expected bite distance from actual bite distance to create BDUE [PAGE 8 of 18], then reports year-to-year \(R^2=0.350\) for off-ball linebackers with at least 50 play-action snaps in both years [PAGE 9 of 18]. BDUE is then used to improve next-year PFF coverage-grade prediction: raw play-by-play PFF coverage grade “correlates year-to-year with an r-squared value of 0.082” and “This improves to 0.112 when adding in BDUE into a linear model” [PAGE 10 of 18]. The third chain is receiver deep speed. PFF receiving grade, “a number between -2 and 2” [PAGE 4 of 18], is modeled with tracking speed variables; speed is reported as the most important family of predictors [PAGE 10 of 18]. The model produces a “tracking-data-adjusted PFF deep receiving grade” [PAGE 11 of 18], and a simple linear regression maps per-route TDA-PFF grade to 40-yard dash time with “an r-squared value of 0.2671” [PAGE 12 of 18], versus only \(0.04\) for raw PFF deep grades [PAGE 12 of 18].

The gray-zone audit has several non-negotiable items. First, the paper contains a sign-convention ambiguity in BDUE: it says to “subtract the expected bite distance from the actual bite distance to create bite distance under expected (BDUE)” [PAGE 8 of 18], but then says “BDUE values > 0 mean the defensive player bit less than expected, and < 0 more than expected” [PAGE 9 of 18]. If BDUE is literally actual minus expected, positive values mean more bite, not less. This must be audited before using BDUE as a scouting or game-planning variable. Second, the 10 Hz sampling means the first-one-second get-off measurement contains about ten position samples; finite-difference speed and acceleration are noisy, and max speed is more outlier-sensitive than median speed, which is why the paper’s receiver model uses max, mean, and median speed [PAGE 4 of 18]. Third, the model is tree-based XGBoost with five-fold cross-validation [PAGE 3 of 18]; tree models do not extrapolate smoothly outside the training support, so new stadiums, changed turf, changed RFID installations, or extreme weather are out-of-support regimes. Fourth, the selection thresholds—more than 150 pass-rushing snaps, 50 play-action snaps, 150 deep routes—create range restriction and regression-to-the-mean effects. Fifth, \(R^2\) is predictive, not causal; the paper’s own language is about “predictive power” and “stability,” not a structural causal model [PAGE 2 of 18]. Sixth, PFF charting grades are human judgments on a \(-2\) to \(2\) scale in 0.5 increments [PAGE 1 of 18]; they carry observer error and role-dependent criteria. Seventh, pro-day and combine data are not identical, and the paper explicitly adjusts pro-day data before comparing it with tracking metrics [PAGE 6 of 18]. Finally, the paper itself warns that “the promise of tracking data is still in the early stages of being fully realized” [PAGE 2 of 18], so any single metric should be treated as a partially identified latent trait, not a direct physical measurement of “talent.”

Formally, the inferential object is not the raw coordinate but a conditional expectation: \(p_{i,t}=\Pr(Y_{i,t}=1\mid X_{i,t})\), where \(Y\) is pressure or win, and the season-level metric is an average of these conditional probabilities. The stability and prediction tables therefore measure the reliability of that average and its relation to future outcomes, not the causal effect of “get-off” on sacks. The receiver chain is even more explicitly a proxy: tracking speed is used to predict a charted grade, and the charted grade is then regressed back onto a combine-like 40 time. That is a two-stage measurement model, and each stage has its own error and selection assumptions. The strongest defensible interpretation is therefore: tracking plus charting improves out-of-sample prediction and creates time-varying proxies for athleticism; it does not by itself prove that changing a player’s get-off will change his sack total by a fixed amount.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(i\) index a play, \(j\) a player, and \(s\) a season. Let \((x_i(t),y_i(t))\) be tracking coordinates in the source’s native coordinate units; the paper uses yard-based football distances such as the 40-yard dash, so conversions to SI use \(1\,\mathrm{yd}=0.9144\,\mathrm{m}\). The RFID sampling interval is \(\Delta t=0.1\,\mathrm{s}\) [PAGE 2 of 18]. The sampling Nyquist frequency is \(f_N=1/(2\Delta t)=5\,\mathrm{Hz}\); Fourier components above \(5\,\mathrm{Hz}\) are aliased, so high-frequency acceleration estimates are not identified by the source data.

**Get-off displacement.** For a pass rusher, with snap position \((x_{i0},y_{i0})\), the paper’s first-second get-off variables are
\[
d_{E,i}=\sqrt{(x_i(1)-x_{i0})^2+(y_i(1)-y_{i0})^2},
\qquad
d_{y,i}=y_i(1)-y_{i0},
\]
with \(t\in[0,1]\,\mathrm{s}\). Units are yards in the source coordinate system, or metres after multiplication by \(0.9144\). Assumption: the chip coordinate frame is stable within the play, the snap time is synchronized, and the player’s path is not truncated by missing samples. Breakdown: if \(\Delta t\) is not exactly 0.1 s, if coordinates are smoothed inconsistently across stadiums, or if the player is blocked such that displacement is not a free acceleration, \(d_E\) is a mixed measure of movement and contact. The paper itself notes stadium effects and turf/dome controls [PAGE 3 of 18; PAGE 5 of 18].

**Pressure and win probabilities.** The XGBoost model estimates
\[
p^{\mathrm{pressure}}_{i}=\Pr(Y^{\mathrm{pressure}}_i=1\mid X_i),
\qquad
p^{\mathrm{win}}_{i}=\Pr(Y^{\mathrm{win}}_i=1\mid X_i),
\]
where \(p\in[0,1]\) is dimensionless. The logit is
\[
\eta_i=\log\frac{p_i}{1-p_i},
\]
in nats when natural logarithms are used. Singularity: \(\eta_i\) diverges at \(p_i=0\) or \(p_i=1\); implementations must clip or use calibrated probabilities. The model uses five-fold cross-validation [PAGE 3 of 18]. Assumption: plays are exchangeable conditional on features; if the same player or season appears in both training and validation folds, leakage can inflate performance. Breakdown: tree ensembles are piecewise constant and cannot extrapolate beyond training support in stadium, turf, rest, or speed space.

**Expected rates.** For player \(j\) in season \(s\) with \(N_{j,s}\) qualifying pass-rush snaps,
\[
\mathrm{EPR}_{j,s}=\frac{1}{N_{j,s}}\sum_{i\in \mathcal{I}_{j,s}} \hat p^{\mathrm{pressure}}_{i},
\qquad
\mathrm{EWR}_{j,s}=\frac{1}{N_{j,s}}\sum_{i\in \mathcal{I}_{j,s}} \hat p^{\mathrm{win}}_{i}.
\]
Both are dimensionless probabilities. The paper reports year-to-year \(R^2=0.858\) for expected pressure rate and \(0.861\) for expected win rate [PAGE 6 of 18]. Breakdown: if \(N_{j,s}\) is small, the average is dominated by a few plays and by model uncertainty; the paper’s threshold of more than 150 pass-rushing snaps mitigates but does not eliminate this [PAGE 6 of 18].

**ROC and discrimination.** For binary outcome \(Y\in\{0,1\}\) and score \(S\),
\[
\mathrm{AUC}=\Pr(S^{+}>S^{-})+\frac{1}{2}\Pr(S^{+}=S^{-}),
\]
dimensionless. The paper reports pressure ROC values \(0.500\) naive, \(0.611\) naive-to-tracking, and \(0.620\) full; win ROC values \(0.500\), \(0.584\), and \(0.604\) [PAGE 4 of 18]. Singularity: AUC is undefined if only one class is present; \(0.500\) is chance discrimination. Breakdown: AUC measures ranking, not calibration; a model can rank well but be poorly calibrated for expected rates.

**Coefficient of determination and RMSE.** For response \(y_i\) and prediction \(\hat y_i\),
\[
R^2=1-\frac{\sum_i(y_i-\hat y_i)^2}{\sum_i(y_i-\bar y)^2},
\qquad
\mathrm{RMSE}=\sqrt{\frac{1}{n}\sum_i(y_i-\hat y_i)^2}.
\]
\(R^2\) is dimensionless; RMSE has the units of the response. Singularity: \(R^2\) is undefined when \(\sum_i(y_i-\bar y)^2=0\), i.e., zero response variance; it is unstable under range restriction. For BDUE, RMSE is in yards; the paper reports \(3.00\) naive versus \(2.23\) full [PAGE 8 of 18]. For PFF deep receiving grade, RMSE is in PFF grade points; the paper reports \(0.194\) naive, \(0.193\) naive-to-tracking, and \(0.188\) full [PAGE 10 of 18]. Breakdown: RMSE is scale-dependent and sensitive to outliers; it is not an information-theoretic measure unless converted to a likelihood or entropy scale.

**BDUE.** Define actual bite distance \(B^{\mathrm{act}}_{i}\) and expected bite distance \(\hat B_i\). The paper’s operative construction is
\[
\mathrm{BDUE}_{i}=B^{\mathrm{act}}_{i}-\hat B_i,
\]
in yards, with player-season average \(\overline{\mathrm{BDUE}}_{j,s}\). The source states this subtraction [PAGE 8 of 18], but also states that “BDUE values > 0 mean the defensive player bit less than expected, and < 0 more than expected” [PAGE 9 of 18]. That is a sign-convention inconsistency and must be resolved empirically. Breakdown: if the sign is reversed, the top-BDUE list and the coverage-grade regression coefficient reverse; if expected bite distance is near zero, BDUE becomes numerically unstable and interpretationally ambiguous. The paper reports year-to-year \(R^2=0.350\) for BDUE [PAGE 9 of 18] and a small team-level relationship with EPA allowed, \(R^2=0.046\) [PAGE 9 of 18].

**TDA-PFF and TDA-40.** Let \(\hat g_{i}\) be the model-predicted PFF grade on a deep route, in PFF grade points, and let \(G_j=\sum_{r\in R_j}\hat g_r\) be the aggregated TDA-PFF grade for player \(j\). The paper forms a per-route quantity \(G_j/N_j^{\mathrm{deep}}\) and fits
\[
D_j^{40}=\alpha+\beta\,\frac{G_j}{N_j^{\mathrm{deep}}}+\varepsilon_j,
\]
where \(D_j^{40}\) is 40-yard dash time in seconds and \(\varepsilon_j\) is error in seconds. Assumptions: linearity, homoscedastic error, and no severe measurement error in the predictor. Singularity: the regression is unidentified if \(\operatorname{Var}(G_j/N_j^{\mathrm{deep}})=0\); extrapolation beyond observed grades or 40 times is not supported. The paper reports \(R^2=0.2671\) for this relationship [PAGE 12 of 18], and a year-to-year \(R^2=0.309\) for TDA-40 among players with more than 50 deep receiving snaps [PAGE 14 of 18]. Breakdown: selection on 150 deep routes and on combine/pro-day participation induces truncation; faster or slower TDA-40 values outside the physiological range should be vetoed as tracking or model artifacts.

**Source-level comparison.** The paper’s central numerical operators are thus dimensionless probabilities, dimensionless \(R^2\)/AUC, yard-denominated BDUE and get-off distances, PFF-grade-point RMSE, and second-denominated 40 times. The exact breakdown regimes are: \(p=0,1\) for logits; one-class samples for AUC; zero variance for \(R^2\); out-of-support features for XGBoost; sign reversal for BDUE; zero predictor variance or extrapolation for TDA-40; and missing or aliased tracking samples for any coordinate-derived quantity.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is explicitly cumulative. The paper traces football analytics from box scores and play-by-play to DVOA and EPA, then to nflfastR and public EPA infrastructure [PAGE 1 of 18]. It then places PFF charting in the middle of that lineage: PFF “assigned a numerical grade between -2 and 2, in increments of 0.5 to every player on every play” [PAGE 1 of 18], and its data became a de facto scouting and valuation input. Tracking is the next layer: since 2017 the NFL placed RFID chips in shoulder pads and the football, producing \((x,y)\), orientation, direction, speed, and acceleration “provided each tenth of a second” [PAGE 2 of 18]. The Big Data Bowl and Next Gen Stats are downstream institutional products of that sensing layer [PAGE 2 of 18]. This paper is therefore not a free-standing metric paper; it is a retrocausal synthesis that reads earlier charting categories back through a newer sensing layer.

Retrocausality appears in two forms. First, the paper’s top-player tables create retrospective narratives: Cooper Kupp’s combine 40 was \(4.62\), but his tracking-adjusted 40 values were faster in each of his first four seasons, and the source states “His combine time was 4.62, which was slower than all of his on-field data” [PAGE 15 of 18]. That is a retroactive reinterpretation of an earlier draft evaluation. Second, the predictive tables are explicitly year-\(n\) to year-\(n+1\): expected pressure and win rates in year \(n\) predict sacks and pressure in year \(n+1\) better than sacks alone, whose baseline \(R^2\) is \(0.202\) [PAGE 6 of 18]. The paper also notes that BDUE and raw PFF coverage grade are less correlated within a season (\(R^2=0.038\)) than across adjacent seasons (\(R^2=0.052\)), suggesting the trait is not merely a same-season charting artifact [PAGE 10 of 18]. This is a retrocausal genealogy in the precise sense that later tracking-derived constructs are used to reinterpret earlier charting constructs and earlier combine measurements.

The multi-week traps are several. The first is the **stationarity trap**: the sport is non-stationary, and the paper itself says “the non-stationarity of the sport” limits only by imagination [PAGE 15 of 18]. A metric stable from 2017–2020 need not remain stable after rule changes, offensive scheme shifts, or changes in RFID installation. The second is the **role-drift trap**: charted position is a strong BDUE predictor [PAGE 8 of 18], so a linebacker who changes from MIKE to WILL or from base to nickel can change BDUE without changing skill. The third is the **opponent-rate trap**: BDUE is conditioned on opponent run-concept percentages, but a team’s play-action rate against is not strongly related to its average BDUE [PAGE 9 of 18]; over a multi-week window, a schedule cluster of heavy play-action teams can distort a player’s average. The fourth is the **stadium/turf/dome trap**: stadium, dome, and turf variables have non-zero importance [PAGE 5 of 18], and the paper notes that different stadiums influenced the receiver model “in a small way, due likely in part to small differences in the way stadiums had installed the NGS system” [PAGE 10 of 18]. A multi-week road trip through different installations can create artifactual swings. The fifth is the **selection-threshold trap**: 150 pass-rush snaps, 50 play-action snaps, and 150 deep routes are not neutral filters; they select players with stable roles and remove bench players and injured players. The sixth is the **combine-anchor trap**: the paper wants to replace a “one-time snapshot” of athleticism with a time-varying proxy [PAGE 7 of 18], but a single TDA-40 season is itself a snapshot with error. The correct multi-week use is a rolling estimate with uncertainty, not a hard cutoff.

<RECURSIVE_THEORY_OF_MIND>
The recursive layer is about how evaluators, players, and opponents model one another. In a crisis—contract year, injury return, scheme change, or public criticism—evaluators often regress to familiar habits: sacks, 40-yard dash, or raw PFF grade. The paper gives evidence against that habit: sack rates in year \(n\) have only \(R^2=0.202\) with sack rates in year \(n+1\), while expected pressure and expected win rates improve prediction and combined charting-plus-tracking models improve further [PAGE 6 of 18]. The habit regression is therefore not just psychological; it is statistically detectable as over-weighting low-stability outcomes. The “crisis” is high uncertainty, and the habit is a low-dimensional anchor that feels objective.

The counter-trap is that once a metric becomes a target, opponents and agents adapt. If evaluators over-reward max speed on deep routes, receivers and agents optimize straight-line speed; but the paper shows that context—press, time to throw, pressure, screen, play action—matters, and that “faster in pads than in shorts” is a real distinction [PAGE 13 of 18]. On defense, if linebackers are rewarded for low bite distance, offenses can counter with play action, RPO, motion, and read options, which the paper explicitly flags as future work [PAGE 15 of 18]. The recursive belief loop is: evaluator believes BDUE measures awareness; offense believes evaluator believes that; offense uses deception to separate the metric from the underlying skill; evaluator updates again. A metric that is stable year-to-year can still be gamed in the short run if the opponent knows the evaluator’s weighting.

The clock is the time-varying physical and developmental state. The paper’s strongest conceptual move is to replace a one-time combine measurement with an on-field, season-by-season proxy: “traditional measures of athleticism … are a one-time snapshot of information for a player” [PAGE 7 of 18], whereas tracking-derived expected pressure and TDA-40 can vary with maturation, age, and injury. The clock also runs against the evaluator: a player who was fast at 22 may be slower at 28, and a player who was slow at the combine may be faster in pads because of route skill and release. The correct recursive policy is a three-clock model: the game clock (within-play timing), the season clock (multi-week form), and the career clock (aging and injury). The paper’s evidence supports using the season clock—year-to-year stability of expected pressure \(0.858\), expected win \(0.861\), BDUE \(0.350\), TDA-40 \(0.309\) [PAGE 6 of 18; PAGE 9 of 18; PAGE 14 of 18]—but also warns that these are not immortal constants.

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto is a rule that overrides a model output when a lower-layer physical, biomechanical, or environmental constraint makes the output impossible or out-of-support. The physical layer begins with displacement. For a player with initial speed \(v_0\) and bounded acceleration magnitude \(a_{\max}\), the first-second displacement must satisfy
\[
d_E(1)\le v_0(1\,\mathrm{s})+\frac{1}{2}a_{\max}(1\,\mathrm{s})^2,
\qquad
a_{\max}\le \mu_s g,
\]
where \(d_E\) is in metres, \(v_0\) in \(\mathrm{m\,s^{-1}}\), \(a_{\max}\) in \(\mathrm{m\,s^{-2}}\), \(\mu_s\) is the effective coefficient of static friction, and \(g=9.81\,\mathrm{m\,s^{-2}}\). If the tracking-derived \(d_E(1)\) exceeds this bound after accounting for coordinate conversion and initial speed, the play must be vetoed as a sensor, synchronization, or coordinate-frame error, not interpreted as elite get-off. The same logic applies to max speed: if \(v_{\max}\) exceeds a physiological cap or jumps by an impossible amount between adjacent 0.1 s samples, the max-speed feature is an outlier and should be replaced by median or mean speed, which the paper already uses alongside max [PAGE 4 of 18].

The biomechanical layer uses the paper’s own mapping between tracking and combine-like tests. Expected pressure rate has \(R^2=0.567\) with 40-yard dash, \(0.456\) with 3-cone, \(0.430\) with short shuttle, \(0.369\) with broad jump, and \(0.280\) with vertical jump [PAGE 6 of 18]. These are not deterministic identities; they are correlations. A veto is appropriate when a player’s tracking-derived get-off or TDA-40 is outside the physiological range implied by the combine/pro-day distribution, or when a reported improvement is larger than plausible maturation. For example, TDA-40 values slower than a world-class 40 or faster than the fastest recorded human 40 should be rejected as model extrapolation. The paper’s Cooper Kupp example—combine 4.62 versus TDA-40 values of 4.53, 4.38, 4.50, and 4.46 [PAGE 15 of 18]—is plausible because the differences are tenths of a second; a two-second discrepancy would be a veto.

The weather/environment layer is partially represented, not fully measured. The models include dome, turf, stadium, home-team, and rest variables [PAGE 3 of 18; PAGE 3 of 18 for linebacker features; PAGE 4 of 18 for receiver features]. The paper states that “Stadium effects are not the most important, but they have a non-zero variable importance” [PAGE 5 of 18], and that stadium installation differences likely influenced the receiver model slightly [PAGE 10 of 18]. But there is no direct wind, temperature, humidity, or precipitation feature in the listed models. Therefore, a weather veto must be conservative: if a game is played in extreme rain, snow, or wind and the model has no explicit weather covariate, the residual should be checked against weather; if the residual correlates with weather, the play or game should be excluded from athleticism estimation. The effective friction bound \(\mu_s(w)\) decreases in adverse weather, so \(a_{\max}(w)\) and \(d_E(1)\) are both reduced. A model trained without \(w\) can misattribute weather-induced slowness to poor get-off. The correct adjudication is: physical bound first, biomechanical plausibility second, environmental out-of-support third. If any layer vetoes, the model output is not allowed to update the player’s latent athleticism estimate.

<RLVR_COUNTERFACTUAL_VETOES>
RLVR here means a reinforcement-learning-style evaluation loop with a verifiable reward: a model output is accepted only if an external verifier passes. Three counterfactual veto scenarios are directly testable against the paper’s reported structure.

**Scenario 1: Physical-plausibility verifier on tracking features.** The verifier computes \(d_E(1)\), \(v_{\max}\), and adjacent-sample coordinate jumps, and sets reward \(0\) for any play exceeding the friction-bound displacement or a physiological speed cap. Prediction: the full pressure model’s ROC will remain near the reported \(0.620\) (pressure) and \(0.604\) (win) within roughly \(\pm0.015\); if ROC falls by more than \(0.03\), the original gain was materially driven by tracking outliers. A second prediction: expected pressure-rate stability will remain above \(0.80\), because the paper already reports \(0.858\) [PAGE 6 of 18], and removing a small number of impossible plays should not destroy a season-level average. If stability collapses below \(0.70\), the metric is too fragile for player evaluation.

**Scenario 2: BDUE sign-convention verifier.** Recompute BDUE under both conventions, \(\mathrm{BDUE}=B^{\mathrm{act}}-\hat B\) and \(\mathrm{BDUE}=\hat B-B^{\mathrm{act}}\), and require that the correct convention improves next-year PFF coverage-grade prediction from the reported \(0.082\) to at least \(0.112\) [PAGE 10 of 18]. Prediction: only one sign will reproduce the reported improvement; the wrong sign will yield \(R^2\le0.082\) or a reversed coefficient. A second prediction: the top-BDUE list will reverse order or change membership, so the list in Table 3.2.1 [PAGE 9 of 18] is a direct falsification target. If both signs produce the same improvement, the metric is sign-insensitive in the tested sample and the paper’s sign statement is not operationally identified.

**Scenario 3: Player-grouped leakage verifier for TDA-40.** Re-run the TDA-40 regression with player-level or season-level grouped cross-validation rather than play-level random folds, and reward the model only if held-out \(R^2\) remains at least \(0.15\). Prediction: the reported \(0.2671\) [PAGE 12 of 18] will attenuate to roughly \(0.15\)–\(0.25\) under strict player grouping; if it remains above \(0.30\), the original split likely leaked player identity or season context. A second prediction: removing post-snap outcome variables such as whether a pass was attempted, pressure, and time to throw will raise RMSE from \(0.188\) toward \(0.190\)–\(0.193\), but the full model should still beat the naive \(0.194\) [PAGE 10 of 18]. If it does not, the speed signal is confounded by post-snap outcomes rather than identifying receiving skill. These three vetoes are verifiable, falsifiable, and directly tied to the paper’s reported numbers.