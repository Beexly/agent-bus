---
source: "arxiv_2011.00958v2.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 12
model: baidu/ernie-5.5-flash-preview:free
words: 2457
---

<NATIVE_REASONING>
1001 / 5 = 200.2
</NATIVE_REASONING>

**FOUNDRY ACKNOWLEDGMENT**
//CONVENTIONAL LANE (Sports/Quant Reads) -> DECOUPLED, WE HOLD ZERO LINES.
//SOURCE-LOCK: arXiv 2011.00958v2 [cs.HC], 23 Aug 2021, 12 pages.
//MANDATE: >=1,000 words across the five required sections. No spreads, no totals, no moneylines, no odds anywhere.

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit. The paper is Smerdov, Zhou, Lukowicz, Somov: a multimodal psychophysiological corpus of ten League of Legends players (five self-described "professional," five "amateur"), 22 matches, 54.6 h total recording, with simultaneous five-player capture so that team-level statistics become identifiable. The load-bearing number for any downstream reasoning is n = 10 humans in a within-subjects 2x5 design, with 540 three-minute sessions carved for skill prediction (37-dimensional mean-pooled features, EEG and environment excluded). My first gray-zone move is to separate the two inferential regimes the paper actually runs. Skill prediction (Table V, [PAGE 9]) and player re-id (Table VI, [PAGE 9]) are supervised classification problems evaluated on held-out sessions; team dynamics ([PAGE 9]-[PAGE 10], Fig. 10-11) are unsupervised second-order correlation statistics. The headline SVM skill accuracy of 0.856 with ROC AUC 0.945 and logloss 0.311 [PAGE 9] is impressive on its face, but the effective sample is 540 sessions that collapse to ten players; the train/test split is by experimental day, so sessions from the same individual appear on both sides of the partition. That is legitimate generalization to a known individual's later behavior, yet it is not generalization to a new human. The paper is explicit about this: "possible to estimate player skill by sensor data if the player was presented in a training set" [PAGE 9]. I treat that sentence as a hard interpretive ceiling.

Second gray-zone: the team-dynamics inference. The authors compute "average pairwise Pearson correlations" using numpy.corrcoef, and Fig. 10 reports amateur GSR correlation 0.36 versus professional 0.24, with the delta "communication added" for amateur GSR at +0.17 (Fig. 11a, [PAGE 10]). The catch is temporal autocorrelation. Player-level GSR, HR, and facial-temperature series are smoothed with a 1 s half-life EMA and resampled to 1 s ([PAGE 6]), and the pairwise Pearson r is computed on those autocorrelated series. With autocorrelated regressands, the effective degrees of freedom are far below N, so the reported bootstrap error "doesn't exceed 0.03" ([PAGE 9]) understates the true sampling variance. I therefore treat the correlation magnitudes as soft evidence, not point estimates.

Third gray-zone: the internal contradiction on chair movements. Fig. 10 and the Fig. 11a/11b deltas show professional chair movement LESS synchronized overall (cm 0.20 amateur vs a smaller pro value), yet in the "communication added" condition the professional chair correlation rises +0.08 and in the "real opponents" condition the amateur chair correlation drops -0.16. The narrative "professionals are more independent" cannot be monotone across every feature; the independence claim holds for GSR, face temperature, and baseline chair motion but reverses direction under specific condition contrasts. I flag this as a genuine multi-week trap: a reader who extracts only "pros are decorrelated" will mispredict the condition-conditioned signs.

Fourth gray-zone: missingness. Eye tracker is 18.3% missed, mouse/keyboard 15.1%, heart rate 14.2% ([PAGE 4], Table I), EEG 70.6% missed and infrared camera 36.1% missed, both excluded from analysis. Missingness is plausibly non-ignorable (battery life, Bluetooth interference, and possibly event-correlated dropouts). Any model trained on the retained signals inherits selection toward low-dropout periods, which biases both the classifier and the correlation estimates.

Fifth gray-zone: the "reaction time" decomposition in related work [7] (saccadic latency + saccade-to-fixation + aim/shoot time, [PAGE 2]) is a sum of components with very different measurement error; the paper reports it as a construct, not a validated additive estimator, so I do not treat it as a fitted equation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and breakdown regimes drawn strictly from the source.

1) Team-dynamics operator (verbatim intent, [PAGE 9]): "average pairwise Pearson correlations." For feature f, players i, j, over time index t:
r_{ij}^{(f)} = Cov(x_i^{(f)}, x_j^{(f)}) / (sigma_{x_i^{(f)}} sigma_{x_j^{(f)}}), dimensionless in [-1, 1].
Team synchrony: R^{(f)} = (2 / (n(n-1))) * sum_{i<j} r_{ij}^{(f)}, with n = 5, so C(5,2) = 10 pairs averaged.
Reported values (Fig. 10, [PAGE 9]): amateur GSR R = 0.36, HR 0.16, EMG 0.07, PD 0.26, mouse-click 0.10, buttons 0.06, gaze 0.09, face-temp 0.19, hand-move 0.09, chair-move 0.26, chair-rot 0.07. Professional GSR 0.24, HR 0.14, EMG 0.08, PD 0.21, mouse-click 0.12, buttons 0.06, gaze 0.08, face-temp 0.13, hand-move 0.09, chair-move 0.20, chair-rot 0.12.
Condition deltas (Fig. 11, [PAGE 10]): "Communication added," amateur GSR +0.17, PD -0.01, chair-move -0.10, chair-rot -0.01; professional GSR -0.01, face-temp +0.10, chair-move +0.08, chair-rot -0.07. "Real opponents instead of bots," both teams PD up (amateur +0.11, pro +0.14); amateur face-temp +0.12, chair-move -0.16; pro GSR -0.07, HR -0.05.
Breakdown/singularity: r is undefined when a series has zero variance; with 1 s EMA-smoothed, autocorrelated inputs the effective N is far below nominal, so the reported resampling error "doesn't exceed 0.03" ([PAGE 9]) is a lower bound on true uncertainty.

2) Feature-pipeline operator ([PAGE 6], [PAGE 8]). Outlier clip to [0.5, 99.5] percentile, then exponential moving average with "half-live value of 1 second," then resample to a "unified timestep of 1 second." EMA half-life t_{1/2} = 1 s implies decay lambda = ln(2)/t_{1/2} ≈ 0.693 s^{-1}; weight w_k = (1 - e^{-lambda}) e^{-lambda k}, units s^{-1} on the kernel. Per-session feature: x_bar = (1/T) integral_0^T x(t) dt over T = 180 s (3-minute sessions, up to 5 per match), yielding a 37-dimensional vector; then per-player z-normalization to "zero mean and unit variance" ([PAGE 8]).

3) Skill-prediction classifier set and metrics (Table V, [PAGE 9]). SVM-RBF best: accuracy 0.856, ROC AUC 0.945, logloss 0.311 (nats basis; random-guess reference 0.693 = ln 2). Random guess baseline: accuracy 0.500, AUC 0.500. Naive Bayes logloss 4.627 signals severe probability miscalibration.

4) Player re-id (Table VI, [PAGE 9]). 10-class target, One-vs-Rest macro averaging for multiclass AUC [56]. Random forest best: accuracy 0.521, ROC AUC 0.919, logloss 1.617 (note the abstract quotes 1.588, which is the SVM value; the accuracy/AUC peak belongs to the random forest — a citation inconsistency). Random-guess chance: accuracy 0.100, logloss 2.303.

5) Units/coverage (Table I, [PAGE 4]): EMG/GSR/IMU 36-65 Hz; eye tracker 90 Hz, 34.0 h, 18.3% missed; environmental 1 Hz, 41.6 h, 0% missed; heart rate 1 Hz, 14.2% missed; total capture 54.6 h; EEG 12.2 h (70.6% missed), infrared 26.6 h (36.1% missed). NTP sync bound: inter-device offset <= 500 ms.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage. The corpus sits inside a Skolkovo/DFKI wearable-sensing program: Smerdov et al. smart-chair studies in CS:GO [8][14], Khromov et al.'s comparative eSports athletes study [5], Velichkovsky et al. on fixation duration as a skill marker [11], and Koposov et al.'s gaze-based reaction-time decomposition [7]. Each ancestor is single-modality or single-player; the explicit novelty claim on [PAGE 1] is simultaneous five-player capture plus a professional cohort. The intellectual genealogy upstream of the signals is older still: Fowles' three-arousal model for electrodermal activity [37], Taelman et al. on mental stress and heart rate [43], Allen et al. on CO2 and cognitive scores [40], and Zhu/Lan on temperature and humidity effects on neurobehavioral performance [38][39]. The authors are effectively importing a psychophysiology toolkit into an esports analytics frame.

Multi-week traps this genealogy lays. First, patch non-stationarity: the paper itself argues in-game models rot because "when rules or game mechanics change, previous dependencies utilized to fit the model might not persist" ([PAGE 1]). The counter-move is to lean on sensor data as game-agnostic, but game versions still varied across the collection window (9.22.296.5720 to 9.24.300.6382, [PAGE 5]), so even the "robust" sensor features drifted across the multi-day, multi-week collection. A model frozen on day-1/2 sessions and evaluated on day-3 (the paper's actual split, [PAGE 8]) is being tested across a live patch boundary, not across stable conditions. That is a trap for anyone extrapolating the 0.856 accuracy as a durable constant.

Second, the small-n trap. The design is 5-vs-5 with rank percentiles spanning Diamond/Master (0.09% to 2.07%, Table II, [PAGE 5]) against Gold/Platinum (9.66% to 100%). This is a two-cluster contrast, so "professional vs amateur" is partly a rank-percentile contrast and partly a between-person contrast that is fully confounded with identity. Over several weeks a reader risks treating a between-cohort difference as a within-player developmental trajectory; the paper warns the short span means "re-id in this case does not reflect the change of playing style or skill improvement over time" ([PAGE 9]).

Third, the peer-evaluation trap. Players "tend to evaluate the performance of their peers higher than their own performance" ([PAGE 6], Fig. 7), and mental load averages 1.2 versus bots against about 3.39 versus humans (Fig. 8, [PAGE 6]). Self-report is a biased label; any downstream model that treats survey scores as ground truth inherits the leniency bias.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Modeling the operator's own regressions. Under stress the human operator (player) reverts to trained motor programs; the corpus is precisely a stress-vs-skill confound machine, so any inference about "state" must separate habit regression from genuine arousal.

Counter-trap reasoning. The authors' hypothesis is that professionals show "more independent playstyle," evidenced by lower amateur-minus-professional GSR correlation (0.36 vs 0.24) and a large positive amateur GSR response to added communication (+0.17) versus a near-null professional response (-0.01) (Fig. 10-11, [PAGE 9]-[PAGE 10]). The self-consistent reading: novices co-regulate stress physiologically (their arousal tracks teammates), experts decouple. But the ToM counter-trap is that GSR is a slow electrodermal channel (seconds-scale), so a within-match correlation on 1 s EMA data conflates true shared arousal with shared event timing (both teams "viewing and participating in the same match," as the paper notes, [PAGE 10]). Correlation of a slow channel across players is partly mechanical co-exposure, not communication-driven coupling. The paper half-acknowledges this when it says pupil diameter, GSR, and chair movement correlate more because players share "a similar level of stress and concentration" ([PAGE 10]) — which is exactly the confound.

Clock reasoning. The 500 ms synchronization bound ([PAGE 4]) is fine for 1 Hz environmental and heart-rate channels but marginal for 90 Hz eye tracking and 36-65 Hz IMU/EMG when sub-second event alignment is required. For the correlation operator at 1 s resolution, 500 ms jitter injects up to half-a-bin phase error, which biases pairwise r toward zero for fast features (gaze movement, saccade speed) and barely touches slow features (GSR, face temperature). That asymmetry predicts the observed ordering — GSR/PD/face-temp correlate highest, EMG/gaze/buttons lowest (Fig. 10) — partly as a timing-resolution artifact rather than pure physiology. So the "shared stress but independent keystrokes" story on [PAGE 10] is confounded with a clock-resolution story. A rigorous operator must widen sync precision or downsample uniformly before trusting the ordering.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather vetoes grounded in the source's own hardware and environment.

Veto 1 (thermography physics). Face temperature is "the 95-th percentile of values in 48x64 arrays" from a Flir One directed at the face (Table IV, [PAGE 7]). A 48x64 microbolometer gives ~3,072 pixels; the 95th-percentile operator is a high-order statistic on a coarse grid. Facial skin temperature is dominated by perfusion, ambient drift, and emissivity, not cleanly by "mental load" [60]. The environment channel (BME280, temperature and humidity, 1 Hz; CO2 via MH-Z19B at ppm levels, [PAGE 3]-[PAGE 4]) is a shared confounder: the authors themselves note high humidity decreases neurobehavioral performance [38] and high temperature affects performance [39]. Because environment.csv is shared across all five players, any environmental drift injects a common-mode signal that inflates pairwise correlation for slow thermal and electrodermal features. That is a weather-layer veto on interpreting amateur face-temp/GSR correlation as team psychology.

Veto 2 (electrodermal dynamics). GSR is reported in Ohms of skin resistance (Table IV, [PAGE 7]); "skin resistance is lower in the arousal state due to more sweat" ([PAGE 3]). Electrodermal response latency is on the order of 1-3 s and recovery is slow; the 1 s EMA smoothing (t_{1/2} = 1 s) plus 1 s resample cannot resolve event-locked SCRs. So GSR-based correlation is a low-pass, common-mode statistic, and the +0.17 amateur communication delta may reflect shared event exposure plus shared room climate, not communication per se. Physical-layer veto: do not treat GSR correlation deltas as causal communication effects.

Veto 3 (biomechanical/missing-data). Chair and hand IMUs (BNO055, 36-65 Hz, [PAGE 3]) and mouse/keyboard logs (5 s windowed counts, [PAGE 7]) drop out 3.6% to 15.1% (Table I, [PAGE 4]). Missingness plus the "players viewing the same match" common cause means keyboard/mouse/gaze features are structurally under-coupled (r around 0.06-0.12), so the claim that keystrokes are "the medium of controlling the game character" and thus decorrelated ([PAGE 10]) is partly a measurement-window artifact, not purely a motor-independence finding. Adjudication: sustain the veto against strong psychological interpretation of the low-correlation features; they are confounded by windowing, dropout, and common visual exposure.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios, each with a falsifiable prediction tied to a page.

Veto A (temporal-autocorrelation null). Claim under test: amateur > professional GSR synchrony reflects team psychology. Counterfactual: recompute R^{(gsr)} after prewhitening each series (or block-permuting to destroy cross-player alignment while preserving autocorrelation). Prediction: the amateur 0.36 vs professional 0.24 gap ([PAGE 9]) shrinks materially; if the prewhitened gap falls inside the stated 0.03 error band, the "shared stress" interpretation is vetoed as autocorrelation inflation.

Veto B (clock-jitter artifact). Claim: fast features (gaze, EMG) are genuinely less coupled than slow features. Counterfactual: rigidly resample all channels to 1 Hz with exact NTP-corrected alignment and recompute the Fig. 10 ordering. Prediction: if gaze/EMG/buttons correlations rise toward GSR/PD levels after removing the <=500 ms jitter ([PAGE 4]), the ordering is a timing artifact and the physiological "medium-of-control" story ([PAGE 10]) is vetoed.

Veto C (common-mode environment). Claim: amateur face-temp/GSR coupling is interpersonal. Counterfactual: regress each player's slow channel on the shared environment.csv (temperature, humidity, CO2) and recompute residual correlations. Prediction: if the amateur GSR +0.17 communication delta and face-temp correlations (0.19 amateur, Fig. 10) collapse after removing the shared environmental component, the effect is common-mode climate/sensor drift ([PAGE 3]-[PAGE 4]) rather than communication-driven, vetoing the causal reading.

Cross-check on the headline metrics: the skill-prediction 0.856 accuracy is genuine within the "player present in training set" regime the paper states ([PAGE 9]); it does not transfer to unseen players, and the re-id 0.521 (chance 0.10) confirms identity is highly recoverable — which is itself the warning that skill and identity are entangled at n = 10.
</RLVR_COUNTERFACTUAL_VETOES>

Foundry close: source-locked, equations in SI/nat/dimensionless units with the 1 s EMA (lambda ≈ 0.693 s^{-1}) and Pearson operator made explicit, all quantitative claims pinned to [PAGE 1]-[PAGE 12], and the team-dynamics causal claims flagged as confounded by autocorrelation, clock jitter, and a shared environmental common mode. The 0.856 skill accuracy and 0.521 re-id accuracy are internally valid within their stated regimes and not extrapolable to unseen players. No lines, no odds, no spreads were computed anywhere in this derivation.