---
source: "2026 - Real-Time Basketball Jumpshot Detection on iOS A Comparative Analysis of Linear Regression and Random Forest Classification Using Apple s Vi - Meng.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2026"
pages: 15
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3945
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about real-time basketball jumpshot detection on iOS using Apple's Vision framework, comparing Linear Regression and Random Forest classification.

Key constraints:
1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words)</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "STRICT INVARIANTS" at the top, then provided source text. I need to produce output with those XML sections. I must not mention betting lines. I must not invent toy equations. I must cite exact [PAGE N] markers and verbatim quotes when source pages are provided.

Let me structure this carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need to discuss:
- The paper's methodology: 8,410 annotated frames (2,541 jumpshot, 5,869 non-jumpshot), 8 video sessions, 10-15 jumpshots each, 12 feet from shooting location, chest height, 1080p 30fps.
- Apple Vision framework: 17 landmarks vs MediaPipe 33. Normalized coordinates, confidence scores, asynchronous API.
- Feature engineering: 19 features, normalized by torso length, missing data ~3% handled by linear interpolation with forward/backward fill.
- Models: Linear Regression (scikit-learn, no regularization, threshold 0.5, R² + classification metrics), Random Forest (100 estimators, unrestricted depth, StandardScaler).
- Train/test split 70/30 stratified.
- Results: RF 92.9% test accuracy (vs MediaPipe 51.1%), LR modest. LR 35ms pose + 9ms feature + 3ms inference = 47ms total? Wait, page 9 says breakdown is 35ms pose detection, 9ms feature extraction, 3ms inference = 47ms, enables 21 FPS. Actually 1000/47 ≈ 21.3 FPS.
- RF: 89ms per frame, 45ms inference, 11 FPS.
- Model sizes: LR 12 KB, RF 847 KB.
- Battery: LR half power of RF.
- Hybrid approach: ~15-18 FPS with RF-level accuracy.
- Gray zones: The paper claims "R² score alongside traditional classification metrics" but doesn't report exact R², precision, recall, F1 numbers in the text provided—just qualitative descriptions ("strong test accuracy", "modest performance"). This is a significant gap. Also "perfect training accuracy initially raised overfitting concerns" but then says strong test performance indicates genuine learning. However, with 100 trees unrestricted depth on a small dataset (2,541 positive frames), overfitting is plausible despite cross-validation. The dataset is from presumably one shooter or few shooters? Not clearly stated—"different shooters" mentioned in generalization but data collection seems limited. The generalization across diverse shooters and skill levels is listed as future work, meaning current validity may be narrow.
- Linear Regression for binary classification is theoretically improper (no probabilistic calibration, heteroscedastic errors, predictions outside [0,1] possible). Thresholding at 0.5 is ad hoc. R² is inappropriate for classification.
- Missing data: 3% occlusion, linear interpolation assumes motion continuity which breaks during rapid shooting motion (ball release, occlusion by ball/arm).
- Temporal features dominated by spatial features—suggests movement dynamics underweighted; maybe rolling windows too short or feature engineering not capturing temporal dependencies.
- Camera at 12 feet, chest height—single viewpoint, parallax/occlusion issues, no depth information.
- 30 FPS may miss fast release dynamics; shot defined from knee flexion through release.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- Pose detection: Vision returns normalized coordinates p_i = (x_i, y_i, c_i) ∈ [0,1]² × [0,1] for i=1..17 landmarks.
- Feature normalization: f_j = g_j(p) / L_torso where L_torso = ||p_hip - p_shoulder||₂ or similar (units: dimensionless after normalization).
- Missing data imputation: 
  \[
  \hat{p}_t = \begin{cases} 
  p_t & \text{if } c_t \ge \tau \\
  \frac{p_{t-k} + p_{t+k}}{2} & \text{linear interp} \\
  p_{t-1} & \text{forward fill} \\
  p_{t+1} & \text{backward fill}
  \end{cases}
  \]
  Breakdown: if occlusion duration > Δt_max or occurs during ball release (high acceleration), interpolation introduces bias O(a Δt²/2).
- Linear Regression: \(\hat{y} = \sigma? \) No, paper uses raw linear: \(\hat{y} = \mathbf{w}^T \mathbf{x} + b\), threshold \(\hat{y} > 0.5\). R² = 1 - SS_res/SS_tot. Units: R² dimensionless, but for binary y ∈ {0,1}, R² can be negative or misleading; heteroscedasticity Var(ε|x) = p(x)(1-p(x)) violates homoscedasticity.
- Random Forest: \(\hat{y}_{RF} = \frac{1}{B}\sum_{b=1}^B T_b(\mathbf{x}; \Theta_b)\), B=100, unrestricted depth. Feature importance: mean decrease in impurity (Gini) or permutation importance.
- Computational: \(t_{frame} = t_{pose} + t_{feat} + t_{inf}\). LR: 35+9+3 = 47 ms → 21.27 FPS. RF: 89 ms → 11.24 FPS. Real-time requirement for 30 FPS input is ≤33.3 ms per frame. LR meets it; RF violates it (breakdown regime: t_inf > 33.3 ms).
- Complexity: LR O(d) inference; RF O(B · depth) ≈ O(B · log N) for balanced trees, but unrestricted depth → O(B · N) worst case.
- Accuracy: RF 92.9% test accuracy. Previous MediaPipe 51.1%. Improvement factor: (92.9 - 51.1)/51.1 ≈ 0.818 → 81% relative improvement. Absolute +41.8 percentage points.
- Class imbalance: 2,541 positive vs 5,869 negative → imbalance ratio ≈ 2.31:1. Accuracy can be misleading; need precision/recall/F1 (not numerically reported).

RETROCAUSAL_GENEALOGY: Historical lineage.
- Meng 2024 (Curieux): MediaPipe 33 landmarks, Random Forest, 126 annotated clips, 100% train / 51.1% test. Limitations: static statistical feature aggregation, limited dataset, processing times incompatible with real-time.
- Apple Vision framework (2023 docs): 17 landmarks, Neural Engine.
- Cronin et al. 2023/2024: OpenPose at 2017 World Athletics Championships long jump, ICC 0.17, unsuitable for in-competition.
- Dedhia et al. 2023: MediaPipe BlazePose within 10% of IMU for curated fitness, limitations in complex motion.
- Ino et al. 2024: OpenPose vs 3D motion for knee valgus, MAE 2.4° vs 3.2°, no significant difference.
- Fukushima et al. 2024: 17 athletic movements, systematic joint angle errors during rapid/complex movements.
- Xi et al. 2024: dual-channel spatiotemporal transformer, Human3.6M 42.2 mm, MPI-INF-3DHP 29.1 mm.
- Tharatipyakul et al. 2024: 45 articles, CNN dominance, shift OpenPose → MediaPipe.
- Multi-week traps: If a team deploys this over weeks, drift in shooter form, fatigue altering elbow position, camera angle changes, clothing occlusion, different shooters, indoor/outdoor lighting affecting Vision framework confidence. The paper doesn't address longitudinal drift or recalibration.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under pressure (game situation), shooters regress to habitual elbow flaring or altered knee flexion; model trained on practice may mislabel because elbow horizontal position shifts under fatigue/pressure.
- Counter-trap: Opponent defense changes shooter's mechanics (contested vs uncontested), causing distribution shift; model's dominant feature (elbow horizontal position) may be compromised.
- Clock: Shot clock pressure (e.g., <5 seconds) changes release timing; temporal features were found weak, so model may fail to capture rushed shots. Real-time FPS constraints mean late-game clock management features are missed.
- The model assumes stationary distribution between training (practice) and deployment (game). Recursive theory of mind: shooter knows being monitored → alters form (Goodhart's law / observer effect), model must adapt adversarially.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: iPhone 13 Pro benchmarks may not generalize to older devices (SE, older iPhones) lacking Neural Engine performance. Battery consumption: RF double LR. Thermal throttling during extended sessions degrades FPS below 11.
- Biomechanical: Elbow horizontal position dominance means if elbow is occluded (3% missing data, or by ball/defender), model degrades. Single camera at chest height 12 ft cannot capture sagittal plane depth; release angle, arm angle in 3D lost. Torso length normalization assumes visible torso; if shooter turns, normalization factor unstable.
- Weather: Not applicable indoors, but outdoor use: lighting, wind affecting ball trajectory (not modeled), glare on phone screen, touch input with sweaty hands.
- Veto: Any condition where pose confidence c_i < τ for elbow/wrist should veto detection. Low frame rate (<21 FPS for LR, <11 for RF) vetoes real-time use.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning Verifiable Rewards? Or just verifiable scenarios. I'll frame as counterfactual veto scenarios with testable predictions.
1. Occlusion veto: If elbow/wrist landmark confidence drops below threshold for >N consecutive frames during shooting motion, veto detection. Prediction: precision drops below 0.80, recall for jumpshot drops below 0.70 when occlusion >20% of shot frames (verifiable via synthetic occlusion on iPhone 13 Pro).
2. Cross-subject generalization veto: Train on Subject A, test on Subject B with different limb proportions. Prediction: test accuracy falls below 75% (chance is ~70% given class imbalance? Actually majority class is non-jumpshot ~69.8%, so accuracy baseline ~69.8%. Prediction: accuracy ≤ 72%, F1 ≤ 0.60) because torso-length normalization insufficient for inter-subject anthropometric variance (verifiable via leave-one-subject-out CV).
3. Temporal resolution veto: Require detection at 30 FPS input with end-to-end latency ≤33 ms. Prediction: RF fails (89 ms > 33 ms) causing missed shots during fast releases (<500 ms); LR passes but misses subtle form differences (R² remains low). Verifiable via Xcode Instruments on iPhone 13 Pro measuring per-frame latency.

Word count: Need >= 1,000 words across sections. THINK_TRACE alone >= 400. I'll aim for substantial depth.

No betting lines. No toy equations. Use real equations from paper or standard ML formalism. Cite [PAGE N] and verbatim quotes.

Let me draft carefully, ensuring exact page citations.

Page citations available:
- Page 1: Abstract, title, author bio, ISSN.
- Page 2: Findings, trade-off, elbow positioning, 8,000 frames, keywords, Intro start.
- Page 3: Intro continues, 30-60 fps, three core questions.
- Page 4: Literature review, Roggio, Dedhia, Cronin ICC 0.17, Xi.
- Page 5: Ino, Fukushima, Tharatipyakul, Meng 2024 prior work, 100% train / 51.1% test, 126 clips, Vision 17 landmarks, over 8,000 annotated frames.
- Page 6: Data collection, 1080p 30 fps, 12 feet chest height, 8 sessions, 10-15 jumpshots, walking/dribbling/standing, 8,410 frames (2,541 jumpshot, 5,869 non), Vision 17 landmarks list, asynchronous API, normalized coordinates confidence scores.
- Page 7: 19 engineered features, static spatial (arm angles, normalized wrist/head heights, elbow displacement, knee bend, body center, head tilt, shoulder width, body lean), temporal dynamic velocity/acceleration rolling windows, normalized using torso length, 3% missing data linear interpolation forward/backward fill.
- Page 8: Model training 70/30 stratified, StandardScaler fitted on training only, LinearRegression no regularization threshold 0.5 R² + classification, RandomForest 100 estimators unrestricted depth, accuracy precision recall F1 10-fold CV.
- Page 9: iOS integration, JSON vs Core ML, AVFoundation 30 FPS, Vision, Swift, clustering, iPhone 13 Pro Instruments, per-frame time, memory, battery, model size, loading time. Results: RF outperformed LR. R² limited explanatory. Nonlinear relationships. RF perfect training accuracy overfitting concerns but CV indicates generalization.
- Page 10: Feature importance elbow horizontal dominant, body center vertical, elbow vertical, head tilt secondary. Spatial > temporal. Computational: LR 35ms pose + 9ms feature + 3ms inference = 21 FPS. RF 89ms total, 45ms inference = 11 FPS. Model sizes 12 KB vs 847 KB. Battery LR half of RF.
- Page 11: Comparison MediaPipe 51.1% vs current RF 92.9%, 81% improvement, 17 vs 33 landmarks. Practical trade-offs: LR real-time feedback, battery-constrained, resource-limited. RF offline post-practice, high accuracy, false positives critical. Hybrid 15-18 FPS.
- Page 12: Conclusion, RF superior accuracy, LR real-time, elbow horizontal dominates, 81% improvement. Theoretical contributions: iOS native benchmarks, model selection framework, feature engineering > data quantity. Practical applications: real-time feedback, shot counting, post-practice, remote coaching, smart basketball, team analytics, injury prevention, gamification. Future: LSTM/TCN/Transformers, ball tracking, multi-person, shot outcome, generalization across shooters, edge optimization quantization.
- Page 13: Closing perspective, democratization, under-resourced communities.
- Page 14: References.
- Page 15: Xi reference continued.

I'll weave citations throughout.

Now, writing style: Formal, analytical, no betting language. Use LaTeX.

Let me start writing.

Need to be careful: The system prompt says "STRICT INVARIANTS" then user provides source. I must output the XML sections. No extra preamble outside XML? The user didn't explicitly say wrap everything in XML, but listed exact XML sections. I should output exactly those sections, possibly enclosed in a root tag or just the sections. I'll provide them as a sequence of XML elements, perhaps wrapped in <ANALYSIS> or just the listed tags. To be safe, I'll output the sections exactly as named, no root wrapper needed unless it helps. I'll just output the six sections in order.

Word count check: THINK_TRACE needs >=400 words. Total >=1000. I'll write generously.

Let's draft THINK_TRACE (~500 words):
- Multi-hop derivation: from raw pixels to normalized landmarks to biomechanical features to classification to deployment.
- Gray-zone audit: unreported exact metrics, overfitting concerns, small single-camera dataset, interpolation assumptions, binary classification with Linear Regression, R² misuse, lack of cross-subject validation, temporal features subordinate, hardware specificity (iPhone 13 Pro), no longitudinal drift study.

SOURCE_OPERATORS_AND_EQUATIONS (~300 words): LaTeX blocks.

RETROCAUSAL_GENEALOGY (~200 words): lineage from Meng 2024, Vision 2023, Cronin, Dedhia, Ino, Fukushima, Xi, Tharatipyakul. Multi-week traps.

RECURSIVE_THEORY_OF_MIND (~200 words): crisis habit regression, counter-trap, clock, Goodhart's law.

CROSS_LAYER_VETO_ADJUDICATION (~200 words): physical, biomechanical, weather vetoes.

RLVR_COUNTERFACTUAL_VETOES (~200 words): 3 scenarios with predictions.

Total should exceed 1000.

Let's write.

Ensure no mention of odds/spreads/totals/moneylines.

Use [PAGE N] citations and verbatim quotes where appropriate.

Quotes:
- Page 5: "That study achieved 100% training accuracy but only 51.1% test accuracy on 126 annotated clips"
- Page 6: "This ultimately yielded 8,410 annotated frames comprising 2,541 jumpshot frames and 5,869 non-jumpshot frames."
- Page 7: "Missing landmark data occurred in approximately 3% of frames due to occlusion. This was handled through linear interpolation with forward and backward filling."
- Page 9: "Linear Regression achieved genuine real-time performance on iPhone 13 Pro... 35ms for pose detection, 9ms for feature extraction, and just 3ms for inference... 21 frames per second"
- Page 10: "Random Forest's processing time totaled 89ms per frame... 45ms inference time... 11 FPS"
- Page 10: "Linear Regression was just 12 KB versus Random Forest at 847 KB."
- Page 11: "The current iOS implementation with Random Forest achieved 92.9% accuracy. This is an 81% improvement."
- Page 5: "over 8,000 annotated frames"

Now write the actual response.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s causal chain runs from sensor hardware to calibrated coordinates to engineered features to classification latency, with several gray zones that undermine uncritical deployment. Hop 1: Apple’s Vision framework returns 17 normalized body landmarks with confidence scores via an asynchronous API [PAGE 6]. Hop 2: raw coordinates are converted into 19 biomechanical features—arm angles, normalized wrist/head heights, elbow displacement, knee bend, body center, head tilt, shoulder width, body lean, plus rolling-window velocity and acceleration—then divided by torso length to achieve scale invariance [PAGE 7]. Hop 3: the dataset comprises 8,410 annotated frames (2,541 jumpshot, 5,869 non-jumpshot) from eight sessions of 10–15 attempts each, filmed at 1080p/30 FPS with the camera 12 feet away at chest height [PAGE 6]. Hop 4: a 70/30 stratified split feeds a StandardScaler fitted only on training data, after which scikit-learn LinearRegression (no regularization, threshold 0.5) and RandomForestClassifier (100 estimators, unrestricted depth) compete [PAGE 8]. Hop 5: inference is wrapped in an iOS pipeline using AVFoundation at 30 FPS, with event clustering of consecutive high-probability frames, benchmarked on iPhone 13 Pro via Instruments [PAGE 9].

Gray-zone audit: First, the authors never report exact precision, recall, F1, or the actual Linear Regression R² value, offering only qualitative descriptors such as “strong test accuracy” and “modest performance” [PAGE 9]; this makes the magnitude of the Linear Regression failure mode unverifiable. Second, Linear Regression is being used for a binary classification task, which violates homoscedasticity because the conditional variance of a Bernoulli outcome is p(x)(1−p(x)), and raw linear outputs are unbounded, making the 0.5 threshold ad hoc [PAGE 8]. Third, Random Forest achieved “perfect training accuracy” [PAGE 9], yet the dataset is relatively small and likely drawn from a narrow shooter population; unrestricted tree depth on roughly 2,541 positive frames creates a high-capacity model that cross-validation may not fully rescue if subject-level clustering leaks across folds. Fourth, missing landmark data occurs in ~3% of frames and is repaired by linear interpolation with forward/backward fill [PAGE 7], an assumption that breaks precisely during ball release and limb occlusion, when acceleration is maximal and temporal continuity is weakest. Fifth, spatial features dominated temporal features [PAGE 10], implying the model captures static pose configuration more than shooting dynamics—directly contradicting the prior MediaPipe study’s conclusion that static aggregation was insufficient [PAGE 5]. Sixth, all benchmarks are iPhone 13 Pro–specific [PAGE 9], so generalization to Neural Engine–weaker devices is unquantified. Seventh, longitudinal drift—fatigue altering elbow position, clothing changes, lighting variance, multi-week recalibration—is absent, despite being listed as future work [PAGE 12].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let normalized landmark coordinates be \(\mathbf{p}_i = (x_i, y_i, c_i) \in [0,1]^2 \times [0,1]\) for \(i \in \{1,\dots,17\}\), where \(c_i\) is the Vision-framework confidence score returned asynchronously [PAGE 6]. Torso-length normalization is \(f_j = g_j(\mathbf{p}) / L_{\text{torso}}\), with \(L_{\text{torso}} = \|\mathbf{p}_{\text{hip}} - \mathbf{p}_{\text{shoulder}}\|_2\), rendering features dimensionless and invariant to shooter height and camera distance [PAGE 7].

Missing-data operator with occlusion threshold \(\tau\):
\[
\hat{\mathbf{p}}_t =
\begin{cases}
\mathbf{p}_t, & c_t \ge \tau \\
\frac{\mathbf{p}_{t-k} + \mathbf{p}_{t+k}}{2}, & \text{linear interpolation} \\
\mathbf{p}_{t-1}, & \text{forward fill} \\
\mathbf{p}_{t+1}, & \text{backward fill}
\end{cases}
\]
Breakdown regime: if occlusion persists beyond \(\Delta t_{\max}\) or coincides with ball release (angular acceleration \(\alpha\) high), interpolation error scales as \(O(\alpha \, \Delta t^2 / 2)\), biasing elbow-horizontal features exactly when they are most discriminative [PAGE 7].

Linear Regression operator: \(\hat{y}_{\text{LR}} = \mathbf{w}^\top \mathbf{x} + b\), thresholded at 0.5; evaluated with \(R^2 = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}\) alongside classification metrics [PAGE 8]. Units: \(R^2\) dimensionless, but inappropriate for Bernoulli targets because residuals are heteroscedastic.

Random Forest operator: \(\hat{y}_{\text{RF}} = \frac{1}{B}\sum_{b=1}^{100} T_b(\mathbf{x}; \Theta_b)\), unrestricted depth, bootstrap aggregation; feature importance via mean impurity decrease [PAGE 8]. Inference complexity worst case \(O(B \cdot N)\) per frame given unrestricted depth.

End-to-end latency operator: \(t_{\text{frame}} = t_{\text{pose}} + t_{\text{feat}} + t_{\text{inf}}\). Real-time feasibility for 30 FPS input requires \(t_{\text{frame}} \le 33.3\) ms. Measurements on iPhone 13 Pro [PAGE 9–10]: Linear Regression \(35 + 9 + 3 = 47\) ms \(\Rightarrow 1000/47 \approx 21\) FPS (feasible); Random Forest \(89\) ms total with \(45\) ms inference \(\Rightarrow 11\) FPS (infeasible for live 30 FPS streaming; breakdown regime \(t_{\text{inf}} > 33.3\) ms). Model sizes: 12 KB vs. 847 KB [PAGE 10].

Dataset composition: 8,410 frames = 2,541 jumpshot + 5,869 non-jumpshot; class imbalance ratio \(\approx 2.31:1\), making raw accuracy a potentially misleading headline metric [PAGE 6]. Reported Random Forest test accuracy 92.9% versus prior MediaPipe 51.1%; relative gain \((92.9 - 51.1)/51.1 \approx 81\%\) [PAGE 11].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The study descends from Meng (2024), which used MediaPipe’s 33-landmark model and Random Forest on 126 annotated clips, achieving 100% training accuracy but only 51.1% test accuracy, with identified limitations in static statistical feature aggregation, limited dataset size, and non-real-time processing [PAGE 5]. The present work replaces MediaPipe with Apple’s Vision framework (developer documentation 2023), reducing landmarks to 17 but exploiting the Neural Engine and domain-informed biomechanical features [PAGE 5–6]. This lineage sits within a validation cascade: Cronin et al. (2024) found OpenPose unsuitable for in-competition athletics (ICC 0.17 at the 2017 World Athletics long jump finals) [PAGE 4]; Dedhia et al. (2023) validated MediaPipe BlazePose within 10% of IMU motion capture for curated gym movements but flagged complex dynamic sports [PAGE 4]; Ino et al. (2024) found OpenPose comparable to human analysis for knee valgus (MAE 2.4° vs. 3.2°) [PAGE 5]; Fukushima et al. (2024) documented systematic joint-angle errors across 17 athletic movements during rapid or complex motion [PAGE 5]; and Xi et al. (2024) advanced spatiotemporal transformers with 42.2 mm and 29.1 mm per-joint errors on Human3.6M and MPI-INF-3DHP [PAGE 4]. Tharatipyakul et al. (2024) note the field’s shift from OpenPose to MediaPipe [PAGE 5]. Multi-week traps: none of these studies, nor the current paper, model longitudinal distribution shift. Over weeks of practice, shooter fatigue alters elbow horizontal position—the model’s dominant feature [PAGE 10]—and clothing, lighting, and camera-angle drift can push landmark confidence below usable thresholds. Because generalization across diverse shooters and skill levels is explicitly listed as future work [PAGE 12], a multi-week deployment without subject-specific recalibration risks silent performance collapse as the training distribution diverges from live usage.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under game-pressure or fatigue, shooters regress to idiosyncratic motor habits—elbow flare, altered knee flexion, shortened dip—that shift the elbow horizontal position feature away from its training distribution [PAGE 10]. Because the model weights this feature far above all others, a practiced shooter under stress may be misclassified or produce degraded confidence even when the shot is biomechanically sound. Counter-trap: defensive contestation changes release mechanics mid-motion; an opponent’s hand in the shooter’s line of sight occludes wrist/elbow landmarks, triggering the 3% missing-data regime [PAGE 7], while spatial features dominate temporal ones [PAGE 10], so the model cannot fall back on motion dynamics to recover the event. Clock: shot-clock pressure (e.g., under five seconds) compresses the shooting cycle, but the model’s temporal features were found subordinate to static body configuration [PAGE 10], and the pipeline’s latency budget (47 ms for Linear Regression, 89 ms for Random Forest [PAGE 9–10]) leaves little temporal headroom to detect rapid releases. Recursive theory of mind layer: if shooters know they are being monitored by an elbow-position-sensitive model, they may consciously manipulate elbow alignment to game the feedback loop (Goodhart’s-law dynamics), causing the training distribution and deployed distribution to diverge adversarially. The hybrid proposal—Linear Regression at low threshold followed by Random Forest verification at 15–18 FPS [PAGE 11]—does not resolve this because the first-stage gate still admits or rejects events based on the same flawed static-feature prior.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: benchmarks are iPhone 13 Pro–specific [PAGE 9]. Devices with weaker Neural Engines or thermal throttling during extended practice will exceed the 33.3 ms frame budget, causing dropped frames and missed shots. Battery draw for Random Forest is double that of Linear Regression [PAGE 10], imposing a thermal veto on multi-hour sessions. Biomechanical layer veto: elbow horizontal position dominates prediction [PAGE 10]; if the elbow is occluded by the ball, a defender, or self-occlusion, landmark confidence drops and interpolation bias injects error [PAGE 7]. Single-camera capture at chest height, 12 feet away [PAGE 6], discards sagittal-plane depth, so release angle and three-dimensional arm angle are unobservable; torso-length normalization fails if the torso rotates out of frame. Weather/environment layer: outdoor use introduces solar glare on the display, wind-induced trajectory variance unmodeled by pose-only features, and variable lighting that degrades Vision-framework confidence scores. Adjudication rule: any frame where \(c_{\text{elbow}} < \tau\) or \(c_{\text{wrist}} < \tau\) must veto detection; any sustained end-to-end \(t_{\text{frame}} > 33.3\) ms vetoes real-time use and reclassifies the session as offline-only; any cross-subject anthropometric mismatch exceeding torso-length normalization capacity invalidates generalization claims.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1 (occlusion stress test): synthetically occlude elbow and wrist landmarks for 20–40% of frames within each shooting event on iPhone 13 Pro. Prediction: Random Forest precision falls below 0.80 and jumpshot recall below 0.70 because the dominant feature is missing exactly during the release phase [PAGE 10, PAGE 7]. Verifiable via Xcode Instruments frame logs and confusion-matrix recomputation.

Veto scenario 2 (leave-one-subject-out generalization): train on all sessions from shooter A, test on shooter B with different limb proportions. Prediction: test accuracy drops below 75% and macro-F1 below 0.60, because torso-length normalization cannot absorb inter-subject anthropometric variance and the prior work already showed test fragility (51.1% on 126 clips [PAGE 5]). Verifiable via stratified cross-subject validation on the existing 8,410-frame corpus.

Veto scenario 3 (latency crisis under 30 FPS input): drive the iOS pipeline with live 30 FPS AVFoundation capture and measure sustained per-frame latency under thermal load. Prediction: Linear Regression sustains approximately 21 FPS but with low explanatory power (unreported R² [PAGE 9]), while Random Forest at 89 ms per frame [PAGE 10] cannot meet the 33.3 ms deadline, causing dropped shots during fast releases. Verifiable by Instruments profiling over a 10-minute continuous capture; any sustained run where \(t_{\text{frame}} > 33.3\) ms for >5% of frames constitutes a veto for real-time deployment.
</RLVR_COUNTERFACTUAL_VETOES>