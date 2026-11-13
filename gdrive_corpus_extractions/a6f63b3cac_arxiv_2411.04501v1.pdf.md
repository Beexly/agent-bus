---
source: "arxiv_2411.04501v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 13
model: deepseek/deepseek-v4.1-flash-1017
words: 7580
---

<NATIVE_REASONING>
We need answer as GSE+GSI Frontier Reasoning Foundry. User provided drive source with pages and asks? They didn't explicitly ask a question, but likely they want deep analysis per invariants, XML sections. Need produce >=1000 words, exact XML sections. Need obey zero betting lines. Zero toy equations. Need cite [PAGE N] markers and verbatim quotes when source pages provided. Need derive multi-hop, gray-zone audit, formal LaTeX, units, assumptions, singularities/breakdown. Historical lineage. Recursive theory of mind. Cross-layer veto. RLVR counterfactual vetoes 3 scenarios.

Need infer task: analyze paper Pose2Trajectory. Need maybe "drive source" as source. We should produce a comprehensive reasoning audit of the paper, equations, limitations, traps. No betting. Need avoid odds/spreads/totals. Need be careful not to mention sports betting at all. This is tennis trajectories; no betting lines.

Need include exact page citations and verbatim quotes. Use paper details: pages 1-13. Need cite [PAGE 1] etc. Need formal LaTeX equations. Need units: frames, ms, pixels, feature counts, positions, dimensions, loss, etc. Need singularity/breakdown regimes: MEDE undefined if T=0; feature dimension mismatch; teacher forcing exposure bias; decoder mask causality; ball occlusion; bounding box 224x224 and error 48 px; 60 fps; 10 requests per second; 0.5/1 s; TrackNet 640x360; ViTPose 224x224; 17 keypoints x2=34 per player. Need derive S_i 74 features: Model Family 4: C1, J1, C2, J2, B. C each 2, J each 17*2=34, ball 2 => 2+34+2+34+2=74. Yes page 7 says S_i 74 values. But note Model Family 4 includes both players + ball. For family 1: S = C1,C2 =4 features. Family 2/3: S = C1,J1,C2,J2 =72 features. Good. Need mention model family 2 vs 3 mask; family 4 best long. Table values: Family 4 500ms trained: predicting 50ms=58,100=46,150=60,200=66,250=77,500=48,1s=67? Wait table row Model Family 4 500 ms: 58 46 60 66 77 48 67. Text says best 500 ms and 1s with 48 and 67. For 250 ms maybe 77? Actually model family 4 500ms row has 500ms=48, 1s=67, 250ms=77, 200=66, etc. Family 3 500ms row: 46 52 57 53 64 83 86. Family 2 500ms: 36 50 47 71 84 91 109. Family 1 500ms:79 95 110 90 91 102 93. Need be precise.

Need structure exactly sections:
<THINK_TRACE>...
<SOURCE_OPERATORS_AND_EQUATIONS>...
<RETROCAUSAL_GENEALOGY>...
<RECURSIVE_THEORY_OF_MIND>...
<CROSS_LAYER_VETO_ADJUDICATION>...
<RLVR_COUNTERFACTUAL_VETOES>...

Need >=400 words in THINK_TRACE and >=1000 total. Desired oververbosity 5. Need include all.

Need not mention betting lines. "RLVR" maybe reinforcement learning with verifiable rewards? Need create counterfactual veto scenarios: 3 verifiable scenarios with predictions. Could be experiments editing/ablating source assumptions: mask removal, ball occlusion interpolation, camera latency constraint. Need predictions numeric? We can say if mask removed, long-horizon MEDE worsens, etc. Need "verifiable" maybe source-checkable predictions. Need avoid invented fake ratios. Equations with units. Need formal LaTeX. Need explain no "Force/Fatigue" toy. Could use physical constraints, kinematics. Need cross-layer veto adjudication: physical/biomechanical/weather veto proof. The paper has no weather; indoor hard courts (Vienna Open) [PAGE 4] so weather outside not in data; camera latency and biomechanics of joints. Need "veto" if predicted centroid outside reachable set given biomechanics and ball trajectory; not enough. Need state formal reachable set and veto proof. Use SI units, information/probability units. Need equations:
- coordinate vector \(C_p(t)=(x_p(t),y_p(t))\) pixels.
- joints \(J_p(t)\in\mathbb{R}^{17\times2}\) pixels.
- ball \(B(t)\in\mathbb{R}^2\) pixels.
- S_i dimension \(d=2+34+2+34+2=74\) [PAGE 7].
- S'_i dimension 2.
- sequence lengths in frames and ms; at 60 fps, \(\Delta t=1/60\) s =16.67 ms. But paper says 15 frames=250ms, 30=500ms,60=1s. Wait 15 frames at 60 fps =250 ms; 30=500; 60=1s. But table includes 50ms,100ms,150ms,200ms,250ms,500ms,1s. 50ms ~3 frames; 100~6; etc. There is discrepancy: 60 fps gives 16.67 ms/frame, but Table 1 has 50 ms not 50? Could be frames? Actually Figure 1: 15 frames (250 ms), 30 (500), 60 (1s). Table columns 50 ms,100 ms,... It's okay. Need note frame/time mismatch: 15 frames at 60 fps exactly 250 ms, but 50ms isn't integer frame (3 frames=50ms at 60fps? 3*16.67=50.0). Fine.
- MEDE equation page 9: \( \mathrm{MEDE} = \frac{\sum_{t=1}^T \sqrt{(x_t-\hat x_t)^2+(y_t-\hat y_t)^2}}{T}\) units pixels. Singular at T=0. Need maybe not "fake ratio"; it's source equation. Fine.
- Time2Vector equation page 8: \(t2v(\tau)[i]= \omega_i \tau+\phi_i\) if i=0; \(F(\omega_i \tau+\phi_i)\) if 1<=i<=k. Need units: \(\tau\) time, \(\omega\) rad/s? In paper no units. We can say dimensions require \(\omega_i\tau\) dimensionless in angular frequency units; \(F\) periodic activation; \(\phi_i\) phase. Need cite [PAGE 8]. Source quote exact: "t2v(τ)[i] =\n{ωiτ + φi\nif i = 0\nF(ωiτ + φi),\nif 1 ≤i ≤k" etc.
- teacher forcing and mask: quote page 9 "The decoder mask has also been used in this work to introduce a sequence mask that ensures that the model only attends to the past time steps during inference and not to the future time steps that need to be predicted." [PAGE 9].
- camera constraint quote page 2: "at least half a second in advance" and "maximum capacity of ten requests per second" [PAGE 2].
- 224x224 bounding box, 48 px error quote page 10: "We assume that the predicted trajectory remains inside the bounding box up to the error of 48 pixels when predicting 30 frames ahead (500 ms) in Model Family 4." [PAGE 10].
- ball invisible >100 frames quote page 5.
- FasterRCNN COCO issue quote page 5.
- 17 keypoints quote page 6.
- 60 fps quote page 4.
- Vienna Open indoor hard courts quote page 4.
- Model family definitions [PAGE 8] and table [PAGE 9].
- encoder 30 frames, predict 6 frames example [PAGE 7].
- MSE, Adam hyperparams, dropout 30 epochs [PAGE 9].
- model layers 2 encoder, decoder 3 sub-layers [PAGE 8-9].
- TrackNet 640x360 [PAGE 6].
- max serve speed 120 mph men 105 mph women [PAGE 6]. Need convert to SI: 120 mph=53.6 m/s; 105 mph=46.9 m/s. Could include. Need no fake equations? This is physical.

Need think trace >=400 words. Should include multi-hop derivation and gray-zone audit. Need mention causal leakage, teacher forcing, decoder mask, sequence prediction, feature dimension, dataset extraction issues, temporal mismatch, error propagation, occlusion. Need audit: paper claims body joints essential; Model Family 1 worst but Table 1 has Family 2 best at 50ms (36 px) vs Family 4 46 at 100? Need note within table Family 2 sometimes better short; Family 4 best long. Need gray-zone: "Model Family 2 showed bad predictions with longer sequences. However, using a mask, Model Family 3 significantly improved" [PAGE 10]. But table shows Family 3 500ms error 83 vs Family2 91, 1s 86 vs109; yes. Family4 48 and67. Need mention no uncertainty intervals, no cross-validation, single player? They evaluate first player. Need "first player" table. Need note dataset from TennisTV Vienna Open, not general. Need mention 74 features includes ball position, so ball is an exogenous cue; if ball occluded, imputed polynomial regression from 10 before/10 after may leak future? Wait polynomial regression using ten points before and ten after missing data [PAGE 5] uses future information for imputation, possibly leakage if imputed ball positions feed encoder or target? It could be a gray-zone because using after points for missing ball in dataset could introduce future info for training/eval. Need mention. Great.

Need discuss "retrocausal genealogy": historical/scientific lineage. Transformer from machine translation [53], attention Bahdanau [56], BERT/GPT/ViT, Time2Vector [59], Fourier transforms [60], Kalman [20], SORT/DeepSORT/FairMOT/ByteTrack/BoT-SORT, trajectory prediction in soccer/NBA, LucentVision, TrackNet, ViTPose, Faster R-CNN, COCO, Hawk-Eye. Need multi-week traps: treating tracking as forecasting; short-term extrapolation vs long-horizon; teacher forcing; using centroid only; ball occlusion; frame-rate/time conversions; camera control latency; domain shift from broadcast videos. Need mention "retrocausal" as lineage: contemporary Transformer trajectory prediction inherits attention and sequence-to-sequence; Time2Vector inherits Fourier positional encodings; sports tracking inherits Kalman and MOT; pose estimation inherits ViT. Need "multi-week traps" maybe implementation traps that emerge after weeks: leakage from ball imputation, mask/teacher forcing mismatch, wrong feature ordering, 74 vs 72 dims, missing normalization, latency. Need not overdo.

Need recursive theory of mind: crisis habit regression vs counter-trap vs clock. Interpret as model/camera operator behavior under crisis. Need discuss "crisis habit regression" maybe under fast ball/occlusion model reverts to centroid extrapolation or Kalman-like habit; counter-trap: use joints/ball to counter; clock: 0.5s/1s prediction horizon. Need mention theory of mind? The system is not human; but recursive modeling of player intention: player tracks ball, opponent, court; camera operator anticipates; model predicts player centroid. Need "crisis habit regression vs counter-trap vs clock": Under crisis, model may regress to shortest-horizon motor habit (centroid extrapolation) because long-horizon Joint+ball features unreliable; counter-trap is to force causal mask and ball-context; clock is camera's 0.5-1s lead. Need mention recursive ToM: player models opponent, camera models player, model models camera? Could use nested: player's next move depends on prediction of ball bounce and opponent; camera's control depends on predicted player; model's input includes ball position which itself is result of player's stroke. Need be careful not over-anthropomorphize.

Need cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need define layers:
- Input perception layer: ball/joint detection error. Veto if ball missing > allowable frames or joint confidence below threshold.
- Kinematic layer: predicted displacement exceeds max sprint speed/acceleration or joint reach. Use \( \|C_p(t+\Delta t)-C_p(t)\| \le v_{\max}\Delta t + \frac12 a_{\max}\Delta t^2\). Paper doesn't provide velocity; need not invent values? We can state assumption and that paper provides no measured \(v_{\max}\), so cannot validate. But need "veto proof" maybe prove that if predicted centroid moves outside 224x224 crop given 48 px error, camera tracking fails. We can say proof: if MEDE > 48px at 500ms, the predicted centroid may be outside 224 box? Actually 224 box half-width 112; error 48 is within. But paper assumes remains inside. Need formal: bounding box center at predicted centroid; crop half-width 112 px; tolerance 48 px. If error > 112 px (or > half box minus player extent), player leaves crop. Paper uses 48 px as acceptable. Need not invent player extent? We can state geometric bound. Weather: indoor hard court [PAGE 4] means weather is a controlled/excluded variable; outdoor weather veto not testable. Biomechanical: joint reachable set from 17 keypoints; if predicted centroid inconsistent with joint kinematics, veto. Need mention no racket/ball contact labels, no 3D, no force plates, no fatigue data; cannot infer biomechanical force/fatigue. This avoids toy equations. Good.
- Camera layer: 10 requests/s, need 0.5-1s lead [PAGE 2]. If prediction latency > horizon, veto. Use \( \tau_{\mathrm{compute}}+\tau_{\mathrm{network}}+\tau_{\mathrm{actuation}} \le H\). H=0.5s or 1s. Paper doesn't specify actual latency. Need say unverified.

Need RLVR counterfactual vetoes: 3 verifiable scenarios with predictions. Could be:
1. Remove decoder causal mask (Family 4 minus mask). Prediction: long-horizon MEDE at 500ms/1s worsens relative to 48/67; short-horizon may improve due leakage. Verify by table? Family 4 only with mask; no no-mask counterpart. But Family 2 vs 3 shows mask improves long. For Family4 no-mask unavailable. Prediction: 1s MEDE >67 px; 500ms >48 px. Verifiable by retraining.
2. Replace ball input with constant zero / drop ball features (Family 2/3 style) while keeping joints and mask. Prediction: long-horizon 500ms/1s error increases above 48/67; 100ms maybe not worse. Verify.
3. Use polynomial interpolated ball positions that use future points for missing ball in evaluation, vs causal-only imputation using past 10 points. Prediction: causal-only will worsen MEDE on sequences containing >100-frame ball outage; difference largest for 500ms/1s. Verify by re-running. This is good.
Alternative 3: Change frame rate/time mapping from 60fps to 30fps without re-labeling; predictions? Need maybe more verifiable from source. The ball imputation leakage is strong.
Need 3 with predictions. Include exact metrics.

Need word count. We'll write maybe 2000-2500 words. Need not too verbose but enough. Use XML tags with exact names. Need ensure no markdown? Can use LaTeX. XML sections contain text. Need no betting lines. Avoid "odds". Avoid "moneyline". "spreads" no. Fine.

Need include "ZERO BETTING LINES" maybe not mention. Don't mention betting. Avoid words "bet" even in "between"? "between" contains bet? Probably fine but to be safe no wagering terms. "better" contains bet? Hmm "better" includes "bet" substring but not relevant. Invariant says never mention spreads, totals, moneylines, odds. We can avoid those words. Fine.

Need exact verbatim quotes from source. We need quote exact text. Let's collect exact quotes:

Page 1 abstract: "Predicting future movement enables cameras to automatically track and predict a player’s future trajectory without human intervention." maybe. "We use encoder-decoder Transformer architecture trained on the joints and trajectory information of the players with ball positions." [PAGE 1].

Page 2: "it is crucial to supply predicted data for the player’s trajectory at least half a second in advance, taking into consideration the physical constraints of the close-up camera." [PAGE 2]. "Typically, cameras used in tennis matches can process multiple requests per second, with a maximum capacity of ten requests per second." [PAGE 2]. "Consequently, it is essential to provide predictions at least half a second ahead, or ideally, a full second, to accommodate the camera’s response time limitations." [PAGE 3? Actually page 2 ends with "Consequently, it is essential to provide" and page 3 starts "predictions at least half a second ahead..." So cite [PAGE 2-3] or [PAGE 3]. Use exact with [PAGE 3] for start? It spans. We can cite [PAGE 2-3].
Page 3: "Tennis players exhibit a wide range of movements to reach the ball, which can introduce noise to the centroid-based analysis." [PAGE 3].
Page 4: "The videos for the datasets were collected from the TennisTV channel on YouTube for Vienna Open, a professional tennis tournament played on indoor hard courts." [PAGE 4]. "We convert the videos to images with an average rate of 60 frames per second to cover all the movement information." [PAGE 4].
Page 5: "For example, the ball was invisible for over one hundred frames in one video. We solved the problem using polynomial regression using ten points before and ten after the missing data." [PAGE 5]. "This limitation arises from the model’s pre-training on the COCO dataset [41], which unfortunately lacks sports or tennis-specific images that would have been more suitable for our needs." [PAGE 5].
Page 6: "After detecting the tennis players, we crop the image for each player to size 224 × 224 and feed it to the ViTPose model and get the coordinates of seventeen 2D keypoints, X and Y , for each keypoint, as output for joint locations such as the elbows, wrists, and knees" [PAGE 6]. "the velocity of professional tennis for the first serve often reaches approximately 120 mph for men and around 105 mph for women." [PAGE 6]. "With the capacity to process images at a resolution of 640 × 360, TrackNet generates a detection heatmap from a single frame or a sequence of frames" [PAGE 6].
Page 7: "Si represents a feature set of 74 values at time i, including player centroids, player joint positions, and ball positions. S′i represents a set of two values indicating X and Y positions of player centroid that we want to predict at time i." [PAGE 7]. "the input to the encoder is a sequence of sets of features, given as [S1, S2, S3, ..., S30], while the decoder input is [S′27, ..., S′33]. The goal of the decoder is to output a sequence of sets of features that corresponds to the predicted future trajectory, namely [ˆS′30, ..., ˆS′36]." [PAGE 7].
Page 8: Time2Vector equation. "In our work, we use the Time2Vector model [59] to convert the timestamp inputs into a vector representation by mapping the time steps to a high-dimensional space using Fourier transforms[60]." [PAGE 8]. "As shown in Figure 4, this work uses two Transformer encoder layers. Each layer contains two sub-layers..." [PAGE 8]. "We use a Transformer decoder that contains three sub-layers." [PAGE 8].
Page 9: "The decoder mask has also been used in this work to introduce a sequence mask that ensures that the model only attends to the past time steps during inference and not to the future time steps that need to be predicted." [PAGE 9]. "The Mean Square Error (MSE) loss function has been used with the Adam optimizer [61] with hyperparameters β1 = 0.9, β2 = 0.98 and ϵ = 10−9. Dropout and weight decay have been used for this work to prevent overfitting with 30 epochs." [PAGE 9]. Table 1. MEDE equation.
Page 10: "We assume that the predicted trajectory remains inside the bounding box up to the error of 48 pixels when predicting 30 frames ahead (500 ms) in Model Family 4." [PAGE 10]. "Model Family 2 showed bad predictions with longer sequences. However, using a mask, Model Family 3 significantly improved the prediction of long sequences." [PAGE 10]. "Model Family 4 showed the best results with less error in pixels using the MEDE for predictions 500 ms and 1 s ahead, with 48 and 67, respectively." [PAGE 10].
Page 11? references.

Need include equations:
\[
C_p(t)=(x_p(t),y_p(t))\in\mathbb{R}^2,\quad
J_p(t)=\{(x_{p,k}(t),y_{p,k}(t))\}_{k=1}^{17}\in\mathbb{R}^{34}.
\]
\[
S_i=(C_1,J_1,C_2,J_2,B)\in\mathbb{R}^{74},\quad S'_i=(x_p,y_p)\in\mathbb{R}^2.
\]
Dimensions: 2+34+2+34+2=74. Model Family 1: C1,C2=4; Family 2/3: C1,J1,C2,J2=72; Family 4: +B=74. Units pixels. Note paper uses 74 [PAGE 7].

MEDE:
\[
\mathrm{MEDE}(\hat C,C)=\frac{1}{T}\sum_{t=1}^{T}\sqrt{(\hat x_t-x_t)^2+(\hat y_t-y_t)^2}
\]
pixels. Breakdown T=0; units; if coordinates in different scales need normalization.

Time2Vector:
\[
t2v(\tau)[i]=\begin{cases}\omega_i\tau+\phi_i,& i=0\\ F(\omega_i\tau+\phi_i),&1\le i\le k\end{cases}
\]
Need units: \([\omega_i\tau]\) dimensionless; if \(\tau\) seconds, \(\omega_i\) rad/s? Actually \(\omega\tau\) radians; \(F\) periodic activation. \(\phi_i\) radians. Cite [PAGE 8]. Breakdown if \(\omega_i\) unconstrained, aliasing high frequencies.

Camera latency:
\[
H \ge \tau_{\mathrm{acq}}+\tau_{\mathrm{infer}}+\tau_{\mathrm{comm}}+\tau_{\mathrm{act}}
\]
with H=0.5 s minimum, 1 s ideal [PAGE 2-3]. If \(H <\) sum, veto.

Reachability veto:
\[
\|\hat C_p(t+\Delta)-C_p(t)\|_2 \le v_{\max}\Delta+\frac12 a_{\max}\Delta^2
\]
Need \(v_{\max}\) not supplied; cannot numerically validate. Units m/s, m/s². But coordinates in pixels; need homography to meters. Paper doesn't provide court calibration. Need mention.

Crop containment:
\[
\|\hat C_p(t+\Delta)-C_p^{\mathrm{true}}(t+\Delta)\|_\infty \le \frac{w}{2}-r_p
\]
where w=224, r_p player half-width? Paper says 224x224 box [PAGE 6, PAGE 9]. If error >112 px or >48 px assumed. Need cite.

Ball occlusion: TrackNet missing; polynomial imputation from ten before/after [PAGE 5]. Define interpolation uses future endpoints; causal leakage. Good.

Need "information units" maybe mention bits? Could say feature vector has dimension 74 real scalars, not bits. For probability, maybe no probabilities in paper. We can introduce detection confidence \(q\in[0,1]\) and entropy \(H(q)=-q\log_2 q-(1-q)\log_2(1-q)\) bits as a veto metric. Is that a toy equation? It's formal Shannon entropy, not fake. Could be okay. But not necessary. Need include "SI/information/probability units" per invariant. We can include one probability equation: detection confidence and entropy. But maybe avoid because not in paper. We can say "If one adds detection confidence, a standard veto is \(H_2(q)\le H_{\max}\) bits" but that's invented threshold. Better to state no probability calibration is reported; therefore probability-unit claims are not verifiable. But requirement says state equations with SI/information/probability units. We can use source's MSE in pixel², MEDE in pixels, time in s, frequency in Hz, angles in rad, entropy in bits if we introduce optional. Need not force.

Need "exact singularity/breakdown regimes": include for each equation:
- MEDE denominator T=0; also if coordinates not aligned or missing frames.
- Time2Vector aliasing if sampling below Nyquist; \(f_s < 2f_{\max}\).
- Transformer attention softmax has O(n²) and mask; if sequence length > training context or mask misapplied, leakage.
- Teacher forcing exposure bias: train on ground truth, test autoregressive; error compounding. Need equation maybe not necessary.
- Ball imputation singular if fewer than 10 before/after, non-unique polynomial; high-degree oscillation; no uncertainty.
- 74-dimensional feature vector mismatch if using family 1/2/3; singular if joint missing set to zero without mask.
- Camera latency: if H below response time, controller unstable.
- Physical reachability: if predicted displacement exceeds bound, veto.

Need word count. Let's draft.

Need ensure XML tags exact: <THINK_TRACE> ... </THINK_TRACE> etc. Need include "≥400 words" in THINK_TRACE. We'll make ~550 words. Other sections maybe 300-500 each. Total >1000. Need not mention word count. Need no markdown headings outside XML? Use XML sections.

Need start directly with <THINK_TRACE>. Good.

Potential issue: User says "DRIVE SOURCE: ... PAGES: 13" and source text. They may expect analysis. We can say "This audit treats the paper as the only admissible evidence." Good.

Need maybe mention "The paper is not a forecasting model of ball outcomes; it is a sequence-to-sequence centroid predictor." Good.

Let's write with citations. Need quote exact. Use [PAGE 7] and verbatim quote. Ensure quotes are exact. We can use quotation marks. Avoid too many long quotes. Need cite exact markers [PAGE N] for each. Good.

Let's craft THINK_TRACE:

- Multi-hop: detection stack (FasterRCNN -> ViTPose -> TrackNet) -> feature assembly -> Transformer encoder-decoder -> MEDE. The causal chain: perception errors propagate to feature vector; masking prevents future leakage; decoder predicts S' but target/input overlaps; teacher forcing; evaluation. 
- Derive 74 dims; check Model Family 1,2,3,4.
- Gray-zone audit: Table 1 numbers; Family2 best short but bad long; Family3 mask improves long; Family4 best long. But no variance/CI; single player; dataset narrow; 60fps vs ms; ball imputation uses future; teacher forcing vs inference; mask; no physical constraints; 224 box; 48 px assumption. 
- Causal leakage: polynomial regression uses 10 after points, could leak future ball positions; if ball features included in encoder and ball occlusion segment overlaps history, encoder may see imputed future. Need evaluate causal imputation.
- "No probability calibration, no uncertainty; MEDE is average pixel error, not confidence." 
- "The paper's claim of body joints essential is supported by Family1 worst vs Family2/4, but not cleanly isolated because Family4 adds ball and mask; Family3 vs2 isolates mask; Family1 vs2/3 not exactly because features differ. Need ablation." 
- "The model's output is centroid only; joint feature use is input, not output." 
- "Camera control requires half-second/full second; performance at 500ms/1s is 48/67 px; 48 px inside 224 box but 1s error 67 > 48; still inside 112 half-width but player body extent unknown." 
- "Breakdown: ball invisible >100 frames; TrackNet occlusion; polynomial interpolation; FasterRCNN COCO domain shift; 17 keypoints only 2D; no racket/ball contact; indoor hard court." 
- "Gray-zone: no test/train split details, no cross-subject, no tournament split; not enough to claim generalization." 
- "Need external validation."

SOURCE_OPERATORS_AND_EQUATIONS:
- Formal definitions and equations. Cite.
- Units.
- Breakdown regimes.

RETROCAUSAL_GENEALOGY:
- Historical lineage: Transformer [53], attention [56], BERT/GPT/ViT, Time2Vector [59], Fourier [60], Kalman [20], MOT [22-26], sports trajectory [6-9], pose [51], TrackNet [18], FasterRCNN [44], COCO [41], Hawk-Eye [3]. 
- Multi-week traps: tracking vs forecasting; short-term extrapolation; teacher forcing; mask; ball imputation leakage; frame rate/time conversion; camera latency; domain shift. 
- "Retrocausal" maybe model's future prediction depends on past, but evaluation uses future ground truth; genealogy of methods.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under occlusion/fast ball, model falls back to centroid/Kalman-like short-horizon; counter-trap: joint+ball context and causal mask; clock: 0.5/1s. 
- Recursive ToM: player anticipates opponent and ball bounce; camera operator anticipates player; model predicts player for camera. Nested prediction. If model trained on broadcast camera motion? Actually input from videos; camera operator's framing influences centroid? Hmm. 
- "Crisis habit regression" maybe from human operator: under time pressure, operator reverts to habit of tracking ball not player; counter-trap uses predicted player trajectory; clock is latency. 
- Need mention "the model has no explicit theory of mind; any ToM is external interpretation." Good.

CROSS_LAYER_VETO_ADJUDICATION:
- Layers: physical (court geometry, ball trajectory, latency), biomechanical (joint reach, sprint, 2D projection), weather (indoor hard court, not relevant; outdoor not in data). 
- Veto proof: If predicted centroid violates reachability or crop containment or latency, veto. Provide inequalities. 
- "Weather veto: because dataset is indoor hard court [PAGE 4], weather variables are structurally excluded; any weather-conditioned claim is out-of-distribution and not proven." 
- "Biomechanical veto: 17 2D keypoints cannot determine force/fatigue; no force plates; no 3D; no racket; cannot validate biomechanical energy. Veto claims beyond kinematics." 
- "Physical veto: ball speed 120 mph; TrackNet resolution 640x360; if ball missing >100 frames, imputation; camera 10 req/s; H 0.5/1s." 
- "Proof: If \( \|\hat C - C\| > 112\) px, player leaves 224 box; if \(H <\) latency sum, camera misses; if reachability bound violated, prediction physically impossible." 
- "No weather data, so weather veto cannot be adjudicated; it is an external variable not tested."

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Remove mask from Family4. Prediction: 500ms MEDE >48, 1s >67; short horizons may improve or stay due leakage. Verify by training same architecture with mask off. 
- Scenario 2: Replace ball input with causal zero/constant or drop ball (Family3 style) while keeping mask. Prediction: 500ms/1s error increases above 48/67; short horizons maybe not. Verify.
- Scenario 3: Recompute ball imputation causally (only past 10 points) vs paper's 10 before and 10 after; evaluate on clips with missing ball >100 frames. Prediction: MEDE worsens on 500ms/1s; no change on clips without missing ball. Verify by paired test.
Need maybe "RLVR" = reinforcement learning with verifiable rewards; these are verifiable reward signals. Include "veto if metric crosses threshold." Good.

Need maybe include "3 verifiable RLVR veto scenarios + predictions" exactly. We'll label.

Need avoid "odds" etc. We can say "metric". Good.

Need ensure no "spreads" etc.

Let's write in final. Need include exact XML tags. Could include LaTeX. Need maybe escape XML? LaTeX with `<`? Avoid `<` in equations? Use \(\le\). XML text can contain `<`? It might break. Use `\leq` not `<`. Avoid ampersands. Use `\&`? Avoid. Use `T=0`. Good. Use `\mathbb{R}`. Fine.

Need no markdown bullets? Can use bullets inside XML but okay. Need word count. Let's produce ~2200 words. Need not too long. But requirement >=1000. We'll do ~1800. Ensure THINK_TRACE >=400 words. Let's count roughly. We'll write rich.

Need include exact page markers [PAGE 1] etc. Use [PAGE 2-3] maybe okay. Need exact quote markers. Good.

Potential issue: "source pages provided, cite exact [PAGE N] markers and verbatim quotes." We need include quotes. We'll include 10+ quotes. Good.

Let's final.
</NATIVE_REASONING>

<THINK_TRACE>
This audit treats the paper as the only admissible evidence. The multi-hop chain is: broadcast video → Faster R-CNN player boxes → ViTPose 17-keypoint pose crops → TrackNet ball coordinates → feature assembly into \(S_i\) → encoder-decoder Transformer → centroid sequence \(\hat S'_i\) → MEDE evaluation → camera-control claim. The first gray-zone is feature-dimension arithmetic. The paper states: “Si represents a feature set of 74 values at time i, including player centroids, player joint positions, and ball positions. S′i represents a set of two values indicating X and Y positions of player centroid that we want to predict at time i” [PAGE 7]. That is only consistent for Model Family 4: two players’ centroids \(2+2=4\), two players’ 17 2D joints \(17\times2\times2=68\), and one ball \(2\), giving \(4+68+2=74\). Family 1, using \(S=C_1,C_2\), is 4-dimensional; Families 2 and 3, using \(S=C_1,J_1,C_2,J_2\), are 72-dimensional; Family 4 adds \(B\) and reaches 74 [PAGE 7-8]. Any implementation that reuses a 74-wide input layer for Family 1-3 is dimensionally invalid unless padded or masked.

The second hop is causal. The paper says: “The decoder mask has also been used in this work to introduce a sequence mask that ensures that the model only attends to the past time steps during inference and not to the future time steps that need to be predicted” [PAGE 9]. This is essential because teacher forcing feeds ground-truth decoder inputs during training, while inference uses predictions. The paper also states: “The approach we use is called the technique of teacher forcing to aid the learning process, where the decoder is fed with previous values of the actual output sequence instead of its prediction” [PAGE 7]. The gray-zone is that teacher forcing plus a causal mask can still create exposure bias: training sees true centroids, inference sees its own drifting centroids, and the 1 s horizon compounds error. The paper reports “Model Family 2 showed bad predictions with longer sequences. However, using a mask, Model Family 3 significantly improved the prediction of long sequences” [PAGE 10]. Table 1 supports this direction: Family 2 at 500 ms/1 s is 91/109 px, Family 3 is 83/86 px, and Family 4 is 48/67 px [PAGE 9-10]. But the table is a single first-player evaluation, and no confidence intervals, cross-validation, or tournament split is reported. Therefore the claim that joints and ball position are “essential” is directionally supported but not cleanly isolated: Family 4 changes both ball input and mask relative to Family 2, and Family 1 differs by centroid-only input.

The third gray-zone is temporal. The paper says: “We convert the videos to images with an average rate of 60 frames per second” [PAGE 4]. At 60 fps, one frame is 16.67 ms; 15 frames = 250 ms, 30 = 500 ms, 60 = 1 s, matching Figure 1’s “fifteen (250 ms), thirty (500 ms), and sixty (1s) frames ahead” [PAGE 2]. But Table 1 includes 50 ms, 100 ms, 150 ms, 200 ms, 250 ms, 500 ms, and 1 s columns [PAGE 9]; these are only approximately integer frame counts at 60 fps. Any reimplementation must define whether columns are frames or milliseconds, otherwise labels shift by one frame.

The fourth gray-zone is ball occlusion. The paper says: “For example, the ball was invisible for over one hundred frames in one video. We solved the problem using polynomial regression using ten points before and ten after the missing data” [PAGE 5]. This is a retrocausal imputation: the ten “after” points are future information relative to a missing-frame gap. If imputed ball coordinates enter the encoder history for a prediction, the model may see future-derived ball positions. That is not automatically wrong for offline dataset construction, but it is a leakage risk for causal camera control. A causal-only imputation using only past points would be the clean counterfactual.

The fifth gray-zone is camera latency. The paper says: “it is crucial to supply predicted data for the player’s trajectory at least half a second in advance, taking into consideration the physical constraints of the close-up camera” [PAGE 2], and “cameras used in tennis matches can process multiple requests per second, with a maximum capacity of ten requests per second” [PAGE 2]. The paper then says: “it is essential to provide predictions at least half a second ahead, or ideally, a full second, to accommodate the camera’s response time limitations” [PAGE 2-3]. The reported 500 ms error is 48 px and the 1 s error is 67 px [PAGE 10]. The paper assumes: “the predicted trajectory remains inside the bounding box up to the error of 48 pixels when predicting 30 frames ahead (500 ms) in Model Family 4” [PAGE 10]. But the 1 s error of 67 px is larger than 48 px; it is still inside a 224-pixel box if the half-width is 112 px, but player body extent and crop centering are not formally bounded. The control claim is therefore plausible but not proven end-to-end.

The sixth gray-zone is domain shift and perception. Faster R-CNN was pre-trained on COCO, and the paper admits: “This limitation arises from the model’s pre-training on the COCO dataset [41], which unfortunately lacks sports or tennis-specific images that would have been more suitable for our needs” [PAGE 5]. ViTPose receives 224×224 player crops and returns “seventeen 2D keypoints, X and Y” [PAGE 6]. TrackNet operates at 640×360 [PAGE 6]. These are all 2D pixel estimates; there is no court homography to meters, no racket keypoint, no ball-contact event, and no 3D pose. Any biomechanical or physical claim beyond image-plane kinematics is outside the paper’s evidence.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal state and feature definitions. Let player \(p\in\{1,2\}\) have centroid
\[
C_p(t)=(x_p(t),y_p(t))\in\mathbb{R}^2 \quad [\text{pixels}],
\]
and 17 2D joints
\[
J_p(t)=\{(x_{p,k}(t),y_{p,k}(t))\}_{k=1}^{17}\in\mathbb{R}^{34}\quad[\text{pixels}].
\]
Let the ball position be
\[
B(t)\in\mathbb{R}^2\quad[\text{pixels}].
\]
For Model Family 4, the paper’s 74-value feature set is
\[
S_i=(C_1,J_1,C_2,J_2,B)\in\mathbb{R}^{74},
\]
with dimension \(2+34+2+34+2=74\) [PAGE 7]. The target is
\[
S'_i=(x_p,y_p)\in\mathbb{R}^2
\]
for the player being predicted [PAGE 7]. Families 1-3 use the same paper notation but different subsets: Family 1 \(S=C_1,C_2\) (4 values); Families 2-3 \(S=C_1,J_1,C_2,J_2\) (72 values); Family 4 \(S=C_1,J_1,C_2,J_2,B\) (74 values) [PAGE 7-8]. Units are pixels; no court calibration to meters is provided.

Prediction objective and metric. The paper uses MSE loss with Adam, \(\beta_1=0.9\), \(\beta_2=0.98\), \(\epsilon=10^{-9}\), dropout, weight decay, and 30 epochs [PAGE 9]. Evaluation is Mean Euclidean Distance Error:
\[
\mathrm{MEDE}=\frac{\sum_{t=1}^{T}\sqrt{(x_t-\hat x_t)^2+(y_t-\hat y_t)^2}}{T},
\]
with \(x_t,\hat x_t,y_t,\hat y_t\) in pixels and \(T\) the number of time points [PAGE 9]. Units: pixels. Singularity: undefined at \(T=0\); non-comparable if predictions and ground truth use different coordinate origins, crops, or frame alignments. It is an \(L_1\) average of \(L_2\) point errors, not a probability or confidence.

Time2Vector. The paper states: “we use the Time2Vector model [59] to convert the timestamp inputs into a vector representation by mapping the time steps to a high-dimensional space using Fourier transforms” [PAGE 8], and gives
\[
t2v(\tau)[i]=
\begin{cases}
\omega_i\tau+\phi_i, & i=0,\\
F(\omega_i\tau+\phi_i), & 1\le i\le k,
\end{cases}
\]
where \(F\) is a periodic activation and \(\omega_i,\phi_i\) are learnable parameters [PAGE 8]. Dimensional requirement: \(\omega_i\tau+\phi_i\) must be dimensionless; if \(\tau\) is seconds, \(\omega_i\) must carry inverse-time units and \(\phi_i\) phase units. Breakdown: unconstrained \(\omega_i\) can alias high frequencies; the sampling rate must satisfy the Nyquist condition \(f_s > 2f_{\max}\) for the highest represented frequency.

Latency and containment constraints. For horizon \(H\) seconds,
\[
H \ge \tau_{\mathrm{acq}}+\tau_{\mathrm{infer}}+\tau_{\mathrm{comm}}+\tau_{\mathrm{act}},
\]
with the paper’s minimum \(H=0.5\) s and ideal \(H=1.0\) s [PAGE 2-3]. If the sum exceeds \(H\), camera control is vetoed. For a 224×224 crop centered on the predicted centroid, a coarse containment bound is
\[
\|\hat C_p(t+\Delta)-C_p^{\mathrm{true}}(t+\Delta)\|_\infty \le 112\ \mathrm{px},
\]
before accounting for player body extent. The paper’s stronger assumption is 48 px at 500 ms [PAGE 10]. The reported 1 s error of 67 px [PAGE 10] exceeds that 48 px assumption but not the 112 px half-width. No uncertainty interval is reported, so these are point estimates.

Singular/breakdown regimes. (i) MEDE breaks at \(T=0\) and under coordinate-frame mismatch. (ii) The 74-dimensional feature vector breaks if a joint or ball is missing and encoded as zero without a mask; it becomes an alias for “no observation.” (iii) Teacher forcing with a causal decoder mask still suffers exposure bias when inference feeds back predicted centroids. (iv) Ball imputation with “ten points before and ten after the missing data” [PAGE 5] is non-causal if the gap overlaps encoder history; it can leak future-derived ball positions. (v) TrackNet’s 640×360 heatmap resolution [PAGE 6] and Fast R-CNN’s COCO domain shift [PAGE 5] are perception singularities: when detection confidence collapses, the Transformer receives fabricated or missing inputs. (vi) Physical reachability requires a court homography and maximum speed/acceleration; neither is supplied, so pixel-space predictions cannot be independently vetoed against biomechanics from the paper alone.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is a convergence of four scientific streams. First, sequence-to-sequence learning: the Transformer was “first introduced for machine translation [53]” and then propagated to BERT, GPT, and ViT [PAGE 6]. Second, attention: the paper credits Bahdanau et al. [56] with addressing the fixed-length encoding bottleneck [PAGE 6]. Third, time representation: Time2Vector [59] and Fourier transforms [60] provide a periodic timestamp embedding [PAGE 8]. Fourth, sports tracking: Kalman filtering [20], SORT/DeepSORT/FairMOT/ByteTrack/BoT-SORT [22-26], and earlier soccer/NBA trajectory work [6-7] establish the short-horizon tracking tradition. The paper explicitly separates tracking from forecasting: tracking methods “are not explicitly designed for predicting long-term future trajectories, such as half a second or a full second ahead” [PAGE 4]. That distinction is the genealogical hinge: Pose2Trajectory is not a multi-object tracker; it is a sequence-to-sequence centroid forecaster conditioned on pose and ball coordinates.

The retrocausal trap is that later evidence can make earlier design choices look more causal than they are. The paper’s Table 1 compares families across horizons, but the families are not a clean factorial ablation: Family 4 adds ball position and uses the mask; Family 3 isolates the mask relative to Family 2; Family 1 isolates centroid-only input relative to joint-augmented families. The paper reports Family 1 “performed the worst” and Family 4 “showed the best results ... for predictions 500 ms and 1 s ahead, with 48 and 67” [PAGE 10]. That is consistent with the claim that joints and ball context help, but it does not prove the causal contribution of each feature without retraining matched models. A multi-week implementation trap is to copy the 74-feature encoder for Family 1 and silently pad zeros; the model then learns a different input distribution than the paper’s 4-feature family.

Another trap is the ball-imputation genealogy. The paper’s polynomial regression uses “ten points before and ten after the missing data” [PAGE 5]. In an offline sports-analytics pipeline, that is a reasonable reconstruction; in a causal camera-control pipeline, it is a retrocausal operator. If a reimplementation uses the same interpolation for evaluation clips, the model may appear better at long horizons because the encoder has access to ball positions that would not exist at inference time. The historical lineage of Kalman filtering and MOT also creates a habit trap: short-horizon extrapolation looks excellent, so teams may deploy a tracker and call it a predictor. The paper itself warns that Kalman performance declines “when predicting multiple steps ahead (e.g., 10, 25, 60 frames)” [PAGE 3]. The Transformer’s advantage is supposed to be learned context, not just velocity extrapolation.

Finally, domain genealogy matters. The dataset is from “Vienna Open, a professional tennis tournament played on indoor hard courts” [PAGE 4]. That excludes outdoor wind, sun, and surface variability. The paper’s 60 fps conversion [PAGE 4], 224×224 ViTPose crops [PAGE 6], and TrackNet 640×360 heatmaps [PAGE 6] are broadcast-video artifacts. Generalization to other tournaments, camera angles, genders, surfaces, and lighting is not established. The historical claim “Transformers work for trajectory prediction” is supported by prior work [32-38], but the specific Pose2Trajectory claim is narrower: one tournament, one broadcast source, first-player evaluation, centroid-only output.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The system has no explicit theory of mind, but the task is recursively social in structure: the player predicts the ball’s bounce and the opponent’s recovery; the camera operator predicts the player; the model predicts the player for the camera. The paper’s motivation is exactly this nesting: “Predicting future movement enables cameras to automatically track and predict a player’s future trajectory without human intervention” [PAGE 1]. The model’s input includes the ball because the player’s movement is ball-conditioned, and the model’s output is the centroid because the camera needs a crop center. That is a three-level loop: ball state → player intent → camera framing.

Crisis habit regression. Under fast-ball, occlusion, or domain shift, the model can regress to a short-horizon centroid habit: extrapolate the last centroid with near-constant velocity. This is the “habit” because it is the simplest policy and is reinforced by the short-horizon columns in Table 1. Family 2 is strong at 50 ms with 36 px error, but degrades to 91 px at 500 ms and 109 px at 1 s [PAGE 9]. That pattern is exactly what a crisis regression to local extrapolation would produce. The counter-trap is the causal mask plus joint and ball context: the paper says the mask “forced the model to learn how to generate accurate predictions based on the information available at each time step” [PAGE 10]. Family 4 then reaches 48 px at 500 ms and 67 px at 1 s [PAGE 10]. The clock is the camera’s required lead: at least 0.5 s, ideally 1 s [PAGE 2-3]. If the model’s error grows faster than the clock, the camera operator must fall back to human tracking.

Counter-trap. The counter-trap is not more parameters; it is preserving causal information. The encoder sequence in the paper’s example is 30 frames and the decoder predicts 6 frames ahead, with decoder input \([S'_{27},\ldots,S'_{33}]\) and target \([\hat S'_{30},\ldots,\hat S'_{36}]\) [PAGE 7]. That overlap is a teacher-forcing design: the decoder receives some immediate-past centroids. At inference, those centroids must be replaced by predictions or by measured past values. If the deployment gives the decoder ground-truth centroids from the camera’s own detector, it is not a pure forecast; it is a hybrid. The recursive ToM lesson is that the model’s “belief” about the player is only as good as its belief about the ball and its own past centroid. A ball occlusion of “over one hundred frames” [PAGE 5] is a crisis that can collapse the ball-conditioned belief into a prior.

Clock. The clock is the hard constraint. The paper’s camera can process “a maximum capacity of ten requests per second” [PAGE 2], so a 0.5 s lead is not a luxury; it is the control period. A 1 s prediction is better for response time but has 67 px error, which is 39% larger than the 48 px assumption. The recursive trap is that the camera’s own motion changes the image-plane centroid: a crop that follows the predicted centroid changes the apparent background and player scale, which can feed back into pose estimation. The paper does not model this closed loop. It predicts open-loop centroids from broadcast frames. Therefore any claim of autonomous camera control requires a closed-loop stability test, not just MEDE on held-out sequences.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto. The paper’s own physical constraint is latency: “at least half a second in advance” and “a maximum capacity of ten requests per second” [PAGE 2]. A deployment is vetoed if
\[
\tau_{\mathrm{acq}}+\tau_{\mathrm{infer}}+\tau_{\mathrm{comm}}+\tau_{\mathrm{act}} > H,
\]
with \(H=0.5\) s minimum or \(H=1.0\) s ideal [PAGE 2-3]. The paper reports 48 px at 500 ms and 67 px at 1 s [PAGE 10], but it does not report inference latency, network jitter, or actuation delay. Therefore the physical veto cannot be cleared from the paper alone. A second physical veto is crop containment: for a 224×224 box, an image-plane error above 112 px can place the true centroid outside the crop before body extent is considered. The paper’s 48 px assumption at 500 ms [PAGE 10] is inside that bound; the 67 px at 1 s is also inside 112 px but exceeds the paper’s own 48 px assumption. A third physical veto is ball visibility: “the ball was invisible for over one hundred frames in one video” [PAGE 5]. If the ball feature is missing or imputed non-causally, the ball-conditioned prediction is not physically grounded.

Biomechanical layer veto. The paper provides 17 2D keypoints per player from 224×224 crops [PAGE 6], but no 3D pose, no force plates, no racket keypoint, no contact event, and no court homography. A kinematic veto can be stated only in pixel space:
\[
\|\hat C_p(t+\Delta)-C_p(t)\|_2 \le v_{\max}\Delta+\frac12 a_{\max}\Delta^2,
\]
but \(v_{\max}\) and \(a_{\max}\) are not supplied in meters per second or meters per second squared. Without court calibration, the inequality cannot be numerically evaluated. A stronger biomechanical claim—fatigue, force, injury risk, or stroke efficiency—is vetoed by missing evidence. The paper’s joint features are descriptive geometry, not a biomechanical model. The only admissible biomechanical statement is that joints improve image-plane prediction relative to centroid-only input, consistent with Family 1 being worst [PAGE 10].

Weather layer veto. The dataset is “Vienna Open, a professional tennis tournament played on indoor hard courts” [PAGE 4]. Weather is structurally excluded. Outdoor wind, sun, rain, and surface moisture are not sampled. Therefore any weather-conditioned claim is out-of-distribution and cannot be adjudicated from this paper. The correct adjudication is not “weather does not matter”; it is “weather is not identified.” Indoor hard court removes a confound but also removes the evidence needed for outdoor generalization. A weather veto should therefore block deployment to outdoor tournaments until a new dataset includes weather covariates and surface state.

Cross-layer proof obligation. To clear all layers, a deployment must show: (1) causal ball imputation with no future points; (2) causal decoder inputs with no ground-truth centroid leakage; (3) measured latency below \(H\); (4) crop containment with player body extent, not just centroid; (5) court homography and reachability bounds; and (6) out-of-distribution tests on surfaces and lighting not in the Vienna Open data. The paper satisfies none of these end-to-end; it provides a promising component, not a certified controller.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Remove the decoder causal mask from Model Family 4 while keeping the same 74-feature input, 500 ms training sequence, and 30 epochs. Verifiable prediction: the 500 ms MEDE will be greater than the paper’s 48 px and the 1 s MEDE will be greater than the paper’s 67 px [PAGE 10], because the paper reports that masking “significantly improved the prediction of long sequences” [PAGE 10] and Family 3 improves on Family 2 at 500 ms/1 s (83/86 px versus 91/109 px) [PAGE 9]. Short-horizon 50-150 ms errors may improve or remain similar because leakage helps interpolation. Veto rule: reject the no-mask variant if long-horizon MEDE exceeds the masked baseline.

Scenario 2: Replace the ball-position input with a constant zero vector or drop \(B\) entirely, keeping joints, both players, and the mask. Verifiable prediction: 500 ms MEDE will exceed 48 px and 1 s MEDE will exceed 67 px, with the largest degradation on sequences where the ball position changes the player’s recovery direction. This follows the paper’s claim that adding ball position “allowed the model to capture the relationship between the players’ movements and the ball’s position, leading to more accurate predictions” [PAGE 10]. Veto rule: reject the no-ball variant if the paired error increase is statistically significant on ball-conditioned rallies.

Scenario 3: Recompute ball imputation causally, using only the ten points before a missing gap rather than “ten points before and ten after the missing data” [PAGE 5], and evaluate only clips containing the reported “over one hundred frames” ball invisibility [PAGE 5]. Verifiable prediction: the causal-only variant will have higher 500 ms and 1 s MEDE than the paper’s non-causal interpolation baseline on those clips, while clips without long ball gaps will show little or no change. Veto rule: reject any deployment claim that depends on future-point ball interpolation for real-time control. These three scenarios are verifiable by retraining or re-evaluation with fixed data splits, fixed feature dimensions, and paired MEDE reporting.