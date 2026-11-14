---
source: "Estimating locomotor demands during team play from broadcast-derived tracking data.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 18
model: deepseek/deepseek-v4.1-flash-1017
words: 5683
---

<NATIVE_REASONING>
We need answer with XML sections, >=1000 words, no betting lines. Need use source provided cite [PAGE N] and verbatim quotes. Need formal LaTeX equations units assumptions singularity breakdown. Topic paper estimating offscreen locomotor demands from broadcast tracking. Need be careful "DRIVE SOURCE" maybe sports research. We must not mention spreads totals moneylines odds. We can mention totals? Invariant says never mention spreads, totals, moneylines, or odds. We need avoid word "totals"? Hmm source has total distance, total acceleration. The invariant says "NEVER mention spreads, totals, moneylines, or odds." That likely betting totals, but to be safe avoid "totals" word? But source metric "Total distance" includes word Total. Need cite exact table? We can quote "Total distance" maybe violates literal? The invariant likely betting lines. But "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." We can use "summed distance" or "aggregate distance" and quote source with "Total distance" if necessary? It says zero betting lines. In sports betting "totals" is line. But metric "total distance" isn't betting. Yet strict? We can refer "aggregate distance metric (Table 1)" not spell total? Need page citation and verbatim quote. We can quote "Total Acceleration" maybe contains total? Hmm. Better avoid "total" as betting term? But equation variables. We can say "aggregate acceleration" but quote source uses "Total Acceleration". Since exact quote required where relevant. I think not mention betting totals; using "total distance" as source metric is okay? The invariant says "Never mention spreads, totals, moneylines, or odds." To be safe, I will avoid standalone betting terms and phrase "aggregate distance" and "aggregate acceleration". But citations need exact [PAGE 6] "Total distance". Hmm if quote, may include word total. Could quote "Sum of the distance travelled by an athlete" no total. For acceleration quote "Sum of the absolute values of acceleration at 0.1 second intervals." Avoid "Total Acceleration" label. Use "acceleration sum". Fine.

Need craft. User requested Drive source, pages 18. Need deep derivation and gray-zone audit. Need answer probably as analytical "frontier foundry" with sections. Need include >=1000 words. Let's ensure. Need cite exact [PAGE N] markers and verbatim quotes. Need formal LaTeX, units, assumptions, singularity/breakdown regimes. Need mention no betting lines maybe not mention. We can include all XML sections exactly. Need likely "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. This sounds sports betting but we need adapt to paper? Maybe user expects betting analysis? But drive source is research paper. We can frame as model-risk / decision theory for sports science, not betting. Need include counter-trap vs clock? It's weird. Could interpret as recursive theory of mind in modeling: athlete/coach/camera operator recursive expectations? Need satisfy.

Need include RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. Need no toy equations. Need "RLVR" perhaps reinforcement learning with verifiable rewards? We can define? We can provide verifiable veto scenarios using data checks. Need predictions. Must be specific.

Need mention "crisis habit regression" vs counter-trap vs clock in recursive theory of mind. Could write: In load monitoring, "crisis habit regression" = analyst reverts to scaling estimator under time pressure; counter-trap = overfitting to censoring rate; clock = match clock/segment time; the model must adjudicate whether trust is placed in player, camera, or clock. Need be coherent.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Discuss tracking data, Prozone 1999, EPV Cervone, Fernández, GPS/LPS, missing data Rubin MCAR, Nadaraya-Watson. Multi-week traps: censoring patterns vary by role/opponent/venue; team tactics over weeks; drift in broadcast camera behavior; model trained first 13 games tested last 5; nonstationarity. Need cite pages.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. Paper doesn't include weather. Need "veto proof" as conditions that invalidate model using source facts and physical constraints. We can say no weather variables in model [PAGE 10 Table 2], no pitch/weather/physiology; veto if weather changes camera or locomotion. Need not invent fake equations. We can provide formal veto conditions with inequalities. Need avoid toy ratios? Formal ratios okay if real? They forbid fake ratios like Force / Fatigue. We can state real definitions: scaling estimator \(D_c/D_o=T_c/T_o\), RMSPE, CV. Use exact equations from paper. Need mention units and assumptions. Need "singularity/breakdown regimes": scaling estimator singular when \(T_o=0\); RMSPE undefined n=0; CV undefined \(\bar y=0\); MCAR false; high-speed bands sparse; camera window clipping; acceleration smoothing; model extrapolation when censored fraction beyond training range. Need formal.

Need "SOURCE_OPERATORS_AND_EQUATIONS": Formal LaTeX, units, page citations, breakdown. Include equations: 
- Scaling estimator \(D_c = D_o T_c/T_o\). Assumption MCAR [PAGE 5]. 
- Linear baseline \(y_i = \beta_0 + \beta_1 T_i + \beta_1 x_i + \epsilon\) (note source has typo same beta1 for both, likely \(\beta_1 T_i + \beta_2 x_i\)). Need quote? We should state as source gives \(\beta_1\) twice? The source page 5 equation: yi = β0 + β1Ti + β1xi + ε. That is likely typo. We can note "as printed" or correct? Strict cite. We can state "the paper prints the baseline as \(y_i=\beta_0+\beta_1 T_i+\beta_1 x_i+\epsilon\)" [PAGE 5]; operationally a second coefficient would be needed. But not fake. Good.
- RMSPE \(= \sqrt{\sum (y_i-\hat y_i)^2/n}\). CV = RMSPE/mean y.
- Load definitions: high speed distance speed 3.5-5.7 m/s; very high >5.7; velocity bands; acceleration bands; peak x-second velocity mean windows. [PAGE 6]. Units.
- Nadaraya-Watson smoother: \(\hat a(t)=\sum_i K((t-t_i)/h)a_i / \sum_i K(...)\) maybe not in source equation but named. Need formal? Could include if needed. But "no toy equations"; this is real. Use kernel smoother as cited. Need not overdo.
- Subtrack censoring: 40x40 m window. Euclidean distance/time between exit/re-entry. [PAGE 4].
- Data: 18 home games, 248 players, 10 Hz, 149,680 subtracks, median length 17.0 m, 8.1s, train 13 games 361 obs, test 5 138 [PAGE 3-4,9].
- Results: subtrack aggregation outperforms game-level; random forest best for very high speed distance 42.8 RMSPE CV .31 vs linear etc [PAGE 14]. Need cite exact. 
- Position censoring: forwards 43.4, midfielders 35.4, defenders 52.5 [PAGE13].
- "players move faster when on camera" quote [PAGE5]. Important.

Need exact verbatim quotes. We need cite [PAGE N] markers. Examples:
- [PAGE 1]: "coordinates are available for an athlete only when that player is within the camera frame."
- [PAGE 3]: "coordinate data is only available for a player as long as they are within the camera frame."
- [PAGE 5]: "players move faster when on camera."
- [PAGE 9]: "100% of the peak x-second velocity values in the 18 games in our data set occur within the camera window"
- [PAGE 11]: "For seven of the eleven player load metrics under consideration, the linear model with interactions performs the best" etc.
- [PAGE 13]: "the RMSPE for defenders, midﬁelders, and forwards is 216, 164, and 160, respectively."
Need quote exact punctuation maybe use [sic].

Need "THINK_TRACE" >=400 words. Need deep multi-hop derivation & gray-zone audit. Could include chain:
1) Data generating process: full optical track at 10 Hz; broadcast emulation via 40x40 window along event-interpolated camera path; observe only subtracks; predict censored metrics. 
2) Missingness not MCAR: scaling estimator fails because on-camera speeds differ; residuals negative as censoring increases except slow band. 
3) Subtrack-level model then aggregate. Why works? Because local features (entry/exit velocity/accel, offscreen time/distance) capture latent locomotor state; aggregation reduces variance by law of total variance. 
4) Gray-zone: model learns correlation with censored time; high CV metrics are sparse; position censoring; no weather; no biomech; acceleration smoothing may distort high-frequency; camera path is event-interpolated not actual broadcast; 18 home games Chelsea only; train/test temporal split; 100% peak velocity observed. 
5) Need formal risk.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Mention 1999 Prozone, optical tracking, GPS/LPS, accelerometer, EPV. Multi-week traps: "censoring rate varies by player 19.7 to 60.04 percent" [PAGE13], so weekly changes in broadcast style/opponent can create covariate shift; event path interpolation depends on event density; home games only; no weather. Need "retrocausal" maybe model's future re-entry features used to predict past offscreen load? Actually subtrack model includes average velocity in following two seconds, which is future information relative to subtrack. That's a retrodiction/circularity risk in deployment: at live estimation, following 2s not available until after; but paper predicts post hoc. Important! Need highlight: predictors include "average velocity in following two seconds" [PAGE10]. That is future relative to subtrack. In offline analysis okay; live use requires latency or imputation. This is a key gray-zone. Need call "retrocausal leakage" or "retrocausal genealogy". Great.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. We can frame:
- Crisis habit regression: under missing data, analyst defaults to scaling estimator \(D_c=D_o T_c/T_o\), a simple habit; but paper shows systematic bias [PAGE5-8]. 
- Counter-trap: modeler anticipates analyst scaling and overcorrects by fitting censoring time only; but high-speed metrics have weak correlation (0.599,0.605) [PAGE11], so counter-trap fails; need subtrack nonlinear model.
- Clock: match clock/segment time is not causal; censored time is endogenous to camera tracking and player position. The model must not treat clock as exogenous. Use time as feature but adjudicate via position and entry/exit kinematics. 
- Recursive ToM: player's off-camera behavior inferred from coach/team tactics and camera operator expectation; but camera path from events, not operator. Need not over-anthropomorphize.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Provide veto layers:
1) Physical: max speed/accel physiological bounds. If prediction implies speed > ~12 m/s or acceleration > ~10 m/s² sustained, veto. But paper has raw accelerations >50 m/s^-2 [PAGE4] due noise; smoothing. Need avoid fake thresholds? We can state "physically implausible sustained values" and use source "greater than 50 m/s−2" raw. Veto if unsmoothed. Formal: \(a_{\max}\) from data; if \(|\hat a|\) exceeds calibrated quantile. 
2) Biomechanical: acceleration density and band times; if predicted time in acceleration band [2.77,∞) exceeds observed plus uncertainty? Need not fake.
3) Weather: no weather predictors in Table 2 [PAGE10]; if rain/wind/heat changes gait or broadcast tracking, model cannot adjudicate; veto external validity. Also camera window fixed 40x40, weather not in model.
Need "proof" maybe formal invalidation: \(P(Y_c|X,M)=P(Y_c|X)\) requires MCAR/MAR; if weather \(W\) affects both missingness \(M\) and \(Y_c\), then \(Y_c \not\perp M | X\) and estimator biased. Provide equation: bias \( \mathbb E[\hat D_c-D_c] = \mathbb E[ D_o(T_c/T_o) - D_c]\). Under MCAR zero; under on-camera faster, negative for distance? Actually scaling overestimates? Paper says residuals negative (censored values overestimated) for most metrics. Need not derive exact sign. Veto if missingness depends on unmeasured W.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need define "RLVR" maybe "reward with verifiable outcomes" but not necessary. We can present:
1) Zero observed time veto: if a subtrack/game has \(T_o=0\), scaling estimator undefined; model must abstain. Prediction: any pipeline outputting finite estimate is invalid. Verify by checking denominator.
2) Future-feature leakage veto: if live deployment uses "average velocity in following two seconds" [PAGE10] at time t, that is unavailable; prediction error under live latency > offline. Veto until imputed or delayed. Verification: replay with causal mask; expected degradation in high-speed distance CV >0.31. 
3) Extreme censoring/position shift veto: test on defender with >60.04% censored (max observed) [PAGE13]; if predicted aggregate distance residual outside e.g., training residual range (-500,500) [PAGE11 Figure 3], veto. Prediction: defender RMSPE ~216 m [PAGE13] and errors grow with censoring; if >50% missing residual range approx (-500,500) [PAGE11]. Need exact: "even when as much as 50% of the data is missing, the range of the residuals being approximately (-500, 500)" [PAGE11]. Good. 
Need 3 scenarios with predictions and verification.

Need avoid word "betting" maybe not mention. No odds.

Need overall word count >1000. We can write around 1800-2500. XML sections. Need ensure no markdown? They want exact XML sections. We can use plain text in XML tags. Could use LaTeX inside. Need not include markdown headings outside.

Need cite exact [PAGE N] markers. Use [PAGE 1], etc. Need exact verbatim quotes with quotation marks. Ensure quotes from source exactly.

Potential issue: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." In text, if I say "total distance" from paper, is that a betting line? I can avoid by saying "aggregate distance". But exact quote "Total Distance" appears in figure. I can avoid quoting that. But source metric "total acceleration" - avoid. Use "acceleration sum". However equations maybe use \(D_c\) for censored distance; okay. For citations, quote definitions without "total". For acceleration: quote "Sum of the absolute values of acceleration at 0.1 second intervals." from Table 1 but the label includes Total Acceleration. We can cite page 6 and quote definition only. Good. For RMSPE table maybe "total distance (m)" appears but avoid. Use "aggregate distance". For result "RMSPE for total distance is 183 meters" [PAGE11] includes total. We can paraphrase and cite "The RMSPE for [aggregate] distance is 183 meters" but exact quote? We can quote "The RMSPE for total distance is 183 meters" — contains "total" as metric, not betting. Hmm. To be ultra safe, avoid exact quote with "total". Use "the RMSPE ... is 183 meters" and cite page 11; but quote must be verbatim if using quotes. We can quote "minimal error considering players on average travel 3524 meters in each game" [PAGE11], no total. Good. For table 3 values use "aggregate distance (m)" not exact label. Fine.

Need maybe mention "CV" coefficient of variation. That's okay. "CV" could be confused? No.

Need "Page citations" exact. Use [PAGE 5] etc. For equations, cite.

Need "breakdown regimes" in SOURCE_OPERATORS. Include:
- \(T_o=0\): scaling estimator singular; CV singular if \(\bar y=0\); RMSPE singular if n=0.
- \(M\) not MCAR: scaling estimator biased; paper residual evidence [PAGE5-8].
- Sparse high-speed state: \(T_{[5.7,\infty)}\) small; CV 0.31 at best [PAGE14].
- Distribution shift: only Chelsea home games 2014-15 [PAGE3]; no weather/league/venue; extrapolation invalid.
- Future predictors: following 2 s unavailable live [PAGE10].
- Raw acceleration noise >50 m/s² [PAGE4]; smoothing may suppress true high-frequency load.
- Camera path event-interpolated 40x40 window [PAGE3-4] may not match actual broadcast director behavior.

Need "assumptions" formal:
A1 full optical ground truth accurate at 10 Hz.
A2 broadcast emulation via 40x40 window and event-linear camera path is representative.
A3 training/test same Chelsea home distribution; no weather.
A4 missingness mechanism known? MCAR false; model uses features.
A5 subtrack-level predictions aggregate linearly? Need equation: \(\hat Y_c^{game}=\sum_{s\in game}\hat Y_{c,s}\). Is that exact? Paper says predicting each subtrack individually then aggregating. We can state. Units additive for distance and time; acceleration density not additive? Important! Acceleration density is mean acceleration; cannot aggregate by summing. Paper likely uses features. Need gray-zone: aggregation must respect metric algebra. For distance/time bands additive; acceleration density is mean, so aggregate weighted by time: \(\hat a_{density,game}=\sum_s \hat a_s \Delta t_s / \sum_s \Delta t_s\). This is real, not toy. Need mention if paper uses? It likely does. But source not explicit. We can state as formal requirement, not source quote. Good. This is a deep insight.

Need "CROSS_LAYER_VETO" include physical/biomechanical/weather. Formal:
- Physical veto: predicted speed \(v_s(t)\) must satisfy \(0\le v_s(t)\le v_{\max}^{human}\) and \(a_s(t)\) within calibrated physiologic range after smoothing. If not, veto.
- Biomechanical veto: acceleration band times must satisfy \(T_{[0.65,1.46)}+T_{[1.46,2.77)}+T_{[2.77,\infty)}\le T_{\text{active}}\). If model predicts negative or exceeds active time, veto.
- Weather veto: no weather covariate in Table 2 [PAGE10]; if rainfall/wind/heat alters surface or camera tracking, missingness could depend on \(W\), violating MAR/MCAR. Formal: \(Y_c \not\perp M \mid X\) when \(M\) depends on \(W\) and \(W\) affects \(Y_c\). Veto external claim.

Need "RETROCAUSAL_GENEALOGY" multi-week traps. Discuss:
- Prozone 1999 [PAGE2] introduced optical tracking; GPS/LPS/accelerometer lineage [PAGE2]; EPV by Cervone [PAGE2]; Fernández soccer EPV [PAGE2].
- Missing data Rubin 1974 [PAGE18], Nadaraya-Watson 1964 [PAGE4/17].
- Multi-week traps: weekly opponent and game state alter camera path and player offscreen behavior; home-only sample; training first 13 and testing last 5 [PAGE9] means temporal drift; censoring rates vary player to player 19.7-60.04% [PAGE13]; model learned "off-screen time" as top predictor [PAGE11], but if broadcast director style changes across weeks, relation shifts. Need not mention betting.

Need "RECURSIVE_THEORY_OF_MIND" maybe write "crisis habit regression vs counter-trap vs clock" exactly. Use paragraphs:
- Crisis habit regression: under time pressure, analyst uses scaling estimator; paper says residuals systematic, so habit is unsafe [PAGE5-8].
- Counter-trap: overcorrect by assuming all censored time is high-speed or by using only position; but high-speed metrics have weak correlations 0.599/0.605 [PAGE11], and model best nonlinear [PAGE11/14]. 
- Clock: match clock and censored time are not causal; they are proxies. The model must distinguish "time missing" from "load missing." Recursive ToM: infer what camera/coach/player expect. The "clock" traps analysts into treating elapsed time as load; paper shows offscreen time is first/second most significant [PAGE11], but not sufficient.
- Need mention "counter-trap" maybe "counterfactual trap".

Need "RLVR_COUNTERFACTUAL_VETOES" 3 scenarios:
1) Denominator-zero veto.
2) Causal-mask/future leakage veto.
3) Distribution-shift/extreme censoring veto.
Each with verification and prediction. Need exact values.

Need "THINK_TRACE" >=400 words. Let's write ~600. Need not reveal chain-of-thought? System asks THINK_TRACE deep multi-hop derivation. This is not hidden chain-of-thought? We can provide concise reasoning summary, not private. But user explicitly requests. We can provide audit reasoning, not raw hidden. Fine.

Need final answer only XML tags. No extra. Need ensure word count >=1000. Let's draft.

Need be careful with XML special characters like & in LaTeX? Use \&? In XML, & must be escaped. In text, use "and" instead of &. Use < >? Avoid raw < > except in tags. In LaTeX, \( \) okay. But inequalities < could break XML if raw. Use \lt or words. In text inside XML, `<` must be escaped. Avoid raw < in equations? Use \(\le\), \(\ge\), \(\infty\). Use "less than" words. For intervals [0, 3.5) okay no <. Use "greater than" words. Avoid ampersand. Use "and" not &. Use "≤" unicode okay. Use "≥". Fine. Quotes with curly apostrophes okay. Need not escape.

Need include "Page N" markers exact [PAGE N]. Good.

Potential issue: "Total" word. Avoid. But source quote "total acceleration" maybe avoid. "Total distance" avoid. In equation variables, \(D_c\) etc. For table values, use "aggregate distance". For result "The RMSPE for total distance is 183 meters" avoid. Instead: "The paper reports an RMSPE of 183 m for the aggregate distance response, with 'minimal error considering players on average travel 3524 meters in each game' [PAGE 11]." The quote doesn't contain total. Good.
Need quote "For seven of the eleven player load metrics under consideration, the linear model with interactions performs the best" [PAGE 11]. No total. 
Need quote "players move faster when on camera" [PAGE 5]. 
Need quote "coordinate data is only available for a player as long as they are within the camera frame" [PAGE 3]. 
Need quote "100% of the peak x-second velocity values in the 18 games in our data set occur within the camera window" [PAGE 9].
Need quote "average velocity in following two seconds" [PAGE 10] exact. 
Need quote "raw accelerations exhibit some unrealistic values, with some instantaneous accelerations greater than 50 m/s−2" [PAGE 4]. Good.
Need quote "The RMSPE for defenders, midﬁelders, and forwards is 216, 164, and 160, respectively." [PAGE 13]. Exact has "midﬁelders" ligature. Use exact? We can quote. Good.
Need quote "ranging from 19.7 to 60.04 percent of data censored" [PAGE 13]. Good.
Need quote "correlations of these two metrics with censored total time are 0.599 and 0.605" [PAGE 11] contains total. Avoid? We can say "the correlations of these two metrics with censored time are 0.599 and 0.605" but not exact. If quoting, it has total. We can paraphrase no quotes. Use "the paper reports correlations 0.599 and 0.605 between these two metrics and censored elapsed time [PAGE 11]" no quote. Good.
Need quote "The largest CV is 0.31" [PAGE 11] no total. Good.

Need equations in LaTeX. In XML, backslashes okay. Need no raw `<`. Use \(\le\), \(\ge\). Use \(\infty\). Use \(\hat{y}_i\). Use \(\epsilon\). Use \(\beta_1\). Use \(\sum\). Good.

Need "formal LaTeX equations, SI/information/probability units" — use units m, s, m/s, m/s², dimensionless CV. Probability unit? Maybe mention missingness indicator \(M\in\{0,1\}\), probability. Use \(P(M|Y)\) no unit. Information? Not relevant. But requirement says SI/information/probability units. We can include probability for missingness. Maybe "bits" not needed. But could mention "mutual information \(I(Y_c;M|X)\) in bits" as diagnostic? That's a formal information unit. But paper doesn't use. Is that inventing? It's a diagnostic not fake equation. Could include in gray-zone: if \(I(Y_c;M|X)>0\), MCAR/MAR violated. That uses bits. Good. Need not overdo.

Need "exact singularity/breakdown regimes": include list.

Need ">=1,000-word depth across exact XML sections" - total >1000. Need word count maybe 2500. Let's write full.

Potential issue: "THINK_TRACE" should be >=400 words. We'll do around 550. Other sections enough.

Need "CROSS_LAYER_VETO_ADJUDICATION" "Physical/biomechanical/weather veto proof." We'll include "Veto proof" formal.

Need "RECURSIVE_THEORY_OF_MIND" "Crisis habit regression vs counter-trap vs clock." We'll explicitly use those terms.

Need "RETROCAUSAL_GENEALOGY" "Historical/scientific lineage & multi-week traps." Good.

Need "RLVR_COUNTERFACTUAL_VETOES" "3 verifiable RLVR veto scenarios + predictions." Good.

Need no betting lines. Avoid "odds" etc. Good.

Let's draft.

Need maybe say "This is not a betting analysis" no, don't mention.

Need cite exact pages. For page 4 data: "149,680 subtracks generated from an original 820 tracks" exact. Great.

Let's write XML.

Check XML: no unescaped ampersand. Avoid "&" in text. Use "and". Use "<" in text? Avoid. Use "less than". In LaTeX, \(<\]? Avoid raw < by using \(\le\) or words. Use \(>\)? raw > okay in XML? `>` is okay but `<` not. Use `\gt`? In LaTeX, \(>\) is okay because > doesn't need escape in XML text? Actually `>` is allowed. `<` is not. Avoid `<` entirely. Use "less than" or \(\le\). For intervals use [0, 3.5) no <. Good.

Need "\(D_c/D_o=T_c/T_o\)" okay. Use slash. Good.

Need "\(\mathbb{E}\)" okay.

Potential issue: "R^2" no.

Let's final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a measurement-validity paper, not a match-outcome paper. The central derivation is: full optical tracking gives a ground-truth coordinate process at 10 Hz [PAGE 3]; the authors emulate broadcast-derived tracking by drawing a 40 × 40 m camera window along linearly interpolated event locations and censoring everything outside it [PAGE 3]. That creates subtracks. The prediction target is the censored locomotor load, i.e., the load accumulated while the player is outside the window. The naive estimator is the scaling estimator \(D_c=D_o T_c/T_o\), which is valid only under missing completely at random, MCAR [PAGE 5]. The paper directly falsifies MCAR: residuals become systematically negative as censoring increases for most metrics, with the exception of the slowest velocity band, and the authors summarize the mechanism as “players move faster when on camera” [PAGE 5]. Therefore the modeling problem is not “fill in missing coordinates”; it is “infer a latent locomotor state from entry and exit kinematics, offscreen elapsed time, offscreen Euclidean displacement, position, and observed game-level load features.” The subtrack-level model then aggregates to the game level, and the paper reports that this beats direct game-level prediction in all cases [PAGE 9, PAGE 11]. 

The gray-zone audit has several layers. First, the camera path is event-interpolated, not an actual broadcast director’s path; the 40 × 40 m window is an emulation assumption [PAGE 3]. Second, the model uses “average velocity in following two seconds” as a predictor [PAGE 10], which is future information relative to a subtrack; that is acceptable in retrospective estimation but creates a latency or leakage problem in live use. Third, peak velocity is omitted because “100% of the peak x-second velocity values in the 18 games in our data set occur within the camera window” [PAGE 9]; that is a sample-specific fact, not a universal law. Fourth, raw accelerations exceed 50 m/s² in some instants and are smoothed with a Nadaraya-Watson kernel [PAGE 4], so high-frequency acceleration load is partially a smoothing-choice quantity. Fifth, the sample is 18 Chelsea home games from 2014-15, with 248 players and 149,680 subtracks [PAGE 3-4], and the train/test split is the first thirteen games versus the final five [PAGE 9]; weekly opponent, game state, and broadcast style can shift the censoring mechanism. Sixth, position matters: defenders are censored 52.5% of the time, midfielders 35.4%, forwards 43.4% [PAGE 13], and player-level censoring ranges from 19.7% to 60.04% [PAGE 13]. Seventh, the metric algebra matters: distance and time-band metrics are additive across subtracks, but acceleration density is a mean and must be time-weighted, not summed. The model can be accurate in RMSPE while still being invalid for a use case that requires causal interpretation, live latency, weather adjustment, or extrapolation beyond the observed censoring range.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines external load as “the work completed by the athlete, measured independently of his or her internal characteristics” [PAGE 2]. The observed data are x-y coordinates at 10 measurements per second, with event information for touches, passes, and tackles [PAGE 3]. The broadcast emulation is a 40 × 40 m window centered on a camera track obtained by linear interpolation between event locations; players outside the window are unobserved [PAGE 3]. Each edge crossing splits the track into a subtrack [PAGE 3-4]. The dataset contains 18 of 19 Chelsea FC home games from 2014-15, 248 players excluding goalkeepers, 149,680 subtracks from 820 original tracks, median subtrack length 17.0 m, and median subtrack time 8.1 s [PAGE 3-4].

The scaling estimator is stated as
\[
\frac{D_c}{D_o}=\frac{T_c}{T_o},
\qquad
\hat D_c=D_o\frac{T_c}{T_o},
\]
where \(D_c\) is censored distance in m, \(D_o\) observed distance in m, \(T_c\) censored time in s, and \(T_o\) observed time in s [PAGE 5]. Its assumption is MCAR [PAGE 5]. The paper rejects MCAR because residuals are systematic: “players move faster when on camera” [PAGE 5]. The baseline linear model is printed as
\[
y_i=\beta_0+\beta_1 T_i+\beta_1 x_i+\epsilon,
\]
where \(i\) indexes player-match, \(y_i\) is the censored game-level metric, \(T_i\) is censored time, \(x_i\) is the observed game-level metric, and \(\epsilon\) is normal error [PAGE 5]. As printed, the same coefficient symbol appears twice; operationally a second coefficient is required. Model comparison uses
\[
\mathrm{RMSPE}=\sqrt{\frac{\sum_i(y_i-\hat y_i)^2}{n}},
\qquad
\mathrm{CV}=\frac{\mathrm{RMSPE}}{\bar y},
\]
with \(\bar y=\sum_i y_i/n\) [PAGE 9]. RMSPE inherits the unit of \(y\); CV is dimensionless.

Metric definitions are unit-bearing [PAGE 6]: distance is the sum of travelled distance in m; high-speed distance is distance with speed between 3.5 and 5.7 m/s; very high-speed distance is distance with speed greater than 5.7 m/s. Velocity-band time is seconds with \(v\) in [0, 3.5), [3.5, 5.7), or [5.7, \(\infty\)) m/s. Peak x-second velocity is the maximum of average velocities over rolling windows of 1, 3, 5, and 10 s. Acceleration is the sum of absolute acceleration at 0.1 s intervals, in m/s²; acceleration density is mean acceleration in m/s²; acceleration-band time uses [0.65, 1.46), [1.46, 2.77), and [2.77, \(\infty\)) m/s² [PAGE 6].

Singularity and breakdown regimes are explicit. The scaling estimator is undefined when \(T_o=0\). CV is undefined when \(\bar y=0\). RMSPE is undefined when \(n=0\). The MCAR assumption fails when missingness depends on the unobserved load; in probability terms, the required conditional independence \(Y_c \perp M \mid X\) fails when the camera window and player behavior co-vary, and a mutual-information diagnostic \(I(Y_c;M\mid X)\) in bits would be positive. The paper’s residual evidence is exactly that failure [PAGE 5-8]. The model also breaks under distribution shift: the source is Chelsea home games only [PAGE 3], with no weather, venue, referee, or opposition covariates in Table 2 [PAGE 10]. Sparse high-speed states are a statistical breakdown regime: the largest CV is 0.31 for very high-speed distance and time in velocity band [5.7, \(\infty\)) [PAGE 11], and the correlations of those two metrics with censored elapsed time are only 0.599 and 0.605 [PAGE 11]. Finally, raw accelerations include “some instantaneous accelerations greater than 50 m/s−2” [PAGE 4], so unsmoothed acceleration metrics are not trustworthy at the instant level.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is: wearable GPS, LPS, and accelerometer load measurement [PAGE 2]; multicamera optical tracking introduced in soccer by Prozone in 1999 [PAGE 2]; broadcast-to-coordinate computer vision [PAGE 3]; and tracking-derived value models such as expected possession value in basketball and its soccer extension [PAGE 2]. The statistical lineage includes Rubin’s incomplete-data framework [PAGE 18] and Nadaraya-Watson kernel smoothing for noisy acceleration [PAGE 4]. The paper’s retrocausal move is to use full optical tracking as ground truth and then deliberately censor it to imitate broadcast-derived tracking, so that the “future” full track validates the “past” broadcast-like estimate [PAGE 3]. That is a strong design, but it also means the ground truth is the 2014-15 Chelsea optical feed, not a universal biological truth.

Multi-week traps are real. The train/test split is first 13 games versus final 5 [PAGE 9], so any week-to-week change in team tactics, opponent press, game state, or broadcast camera behavior can shift the relationship between censored time and censored load. The model’s top predictors include offscreen time, offscreen distance, and position [PAGE 11], which are exactly the quantities most sensitive to broadcast style and match script. A player-level censoring range of 19.7% to 60.04% [PAGE 13] means a model calibrated on low-censoring weeks can be extrapolated into high-censoring weeks without warning. The paper also reports position-specific RMSPE for distance: defenders 216 m, midfielders 164 m, forwards 160 m [PAGE 13], driven by censoring differences. Over multiple weeks, a stable player can look “fitter” or “more intense” merely because the camera followed him more or less. The correct genealogical caution is not that the model is wrong; it is that the model’s error is entangled with the broadcast director’s behavior, the event density used to interpolate the camera path, and the team’s spatial structure.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression is the analyst’s fallback under missing data: scale observed load by censored time. The paper shows that this habit is systematically biased: residuals become increasingly negative as censoring increases for most metrics, except the slowest velocity band [PAGE 5-8]. The counter-trap is to overcorrect by assuming all censored time is high-speed running or by fitting only censored time. That fails because the high-speed metrics are precisely the ones with weaker correlation to censored time, 0.599 and 0.605 [PAGE 11], and because the best model for those responses is nonlinear [PAGE 11, PAGE 14]. The clock trap is to treat match clock or censored elapsed time as a causal load variable. It is not causal; it is a proxy for opportunity. The paper’s variable-importance summary says offscreen time is first or second most significant for all eleven load metrics [PAGE 11], but that is predictive importance, not a mechanistic claim.

A recursive theory-of-mind reading is useful. The player behaves according to role, team shape, and game state; the camera behaves according to event location and broadcast production; the analyst observes only the intersection. The model must infer the player’s off-camera state from entry and exit kinematics and from observed game-level load, not from an imagined “average player.” The counter-trap is to assume the camera is a neutral random sampler. It is not: “players move faster when on camera” [PAGE 5]. The clock is the shared coordination device that makes the missingness look regular, but the paper’s residual plots show that the clock alone is insufficient. The correct adjudication is: trust the subtrack model when censoring is inside the training range and the metric is additive; distrust the clock-only scaling habit; and veto any interpretation that treats offscreen time as a physical load cause rather than a missingness proxy.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto proof: a predicted speed or acceleration trajectory must remain inside calibrated physiological bounds after smoothing. The source warns that raw instantaneous acceleration can exceed 50 m/s² [PAGE 4], so an unsmoothed output that relies on such values is vetoed. A sustained prediction that implies non-physical locomotion is not rescued by low RMSPE; it is a physical-layer veto. Biomechanical veto proof: acceleration-band times must satisfy the accounting constraint
\[
T_{[0.65,1.46)}+T_{[1.46,2.77)}+T_{[2.77,\infty)}\le T_{\mathrm{active}},
\]
with each term in s. If a model predicts negative band time or band time exceeding active time, the output is internally inconsistent and must be vetoed. Distance and velocity-band times are additive across subtracks; acceleration density is a mean and must be time-weighted:
\[
\hat a_{\mathrm{density,game}}=\frac{\sum_s \hat a_s\,\Delta t_s}{\sum_s \Delta t_s},
\]
with \(\hat a_s\) in m/s² and \(\Delta t_s\) in s. Summing acceleration density across subtracks is a units-and-algebra veto.

Weather veto proof: Table 2 lists the predictors, and no weather, pitch state, temperature, wind, or rain variable appears [PAGE 10]. If weather affects both the camera’s missingness mechanism and the player’s locomotor load, then the conditional independence needed for valid imputation fails: \(Y_c\) is not independent of missingness \(M\) given the observed covariates \(X\). The source cannot adjudicate that layer because it did not measure it. Therefore any claim that the model estimates load under adverse weather is externally invalid unless a weather layer is added and revalidated. The same veto applies to biomechanical injury state, fatigue history, and tactical role changes not captured by the coarse defender/midfielder/forward classification [PAGE 4].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Denominator-zero veto. Scenario: a subtrack or game segment has \(T_o=0\), so the scaling estimator \(D_c=D_o T_c/T_o\) is undefined [PAGE 5]. Verification: check \(T_o\) before any scaling estimate. Prediction: any pipeline that returns a finite scaled value for \(T_o=0\) is invalid; the correct output is abstention or a model-based estimate with an explicit missing-observation flag. This veto is verifiable from the arithmetic alone.

2. Causal-mask and future-feature veto. Scenario: live deployment uses “average velocity in following two seconds” [PAGE 10] at time \(t\). Verification: replay the test set with a causal mask that removes all features after \(t\). Prediction: offline RMSPE will be optimistically low relative to live RMSPE, especially for high-speed responses; the paper’s best very-high-speed CV is still 0.31 [PAGE 11], so live latency should widen that interval. If a deployment claims the offline 42.8 m RMSPE for very-high-speed distance [PAGE 14] without a causal-mask test, veto the claim.

3. Extreme-censoring and position-shift veto. Scenario: a defender is censored above the observed player maximum of 60.04% [PAGE 13], or a game is outside the training censoring range. Verification: compare residuals against the paper’s reported residual envelope; the paper notes that even at 50% missing, distance residuals are approximately (-500, 500) m against an empirical standard deviation of 1506 m [PAGE 11]. Prediction: beyond that envelope, defender RMSPE will exceed the reported 216 m [PAGE 13] and bias will grow with censoring. Veto any unqualified player-level load ranking when censoring exceeds the validated range, because the model’s error is then dominated by the missingness mechanism rather than by the athlete’s locomotion.
</RLVR_COUNTERFACTUAL_VETOES>