---
source: "arxiv_2505.12854v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 12
model: deepseek/deepseek-v4.1-flash-1017
words: 9025
---

<NATIVE_REASONING>
We need answer to user. Need comply strict format exact XML sections. Must not mention betting lines. Need produce >=1000 words across exact sections. Need analyze source paper pages. Need formal LaTeX equations units, page citations, verbatim quotes. Need THINK_TRACE >=400 words. Then other sections. Need likely derive deep multi-hop, gray-zone audit. This is academic vision paper. Need identify traps, equations: tIoU, accuracy, precision, sensitivity, maybe overlap area, temporal threshold, homography, occlusion, frame rate. Need cite [PAGE N] exact markers and verbatim quotes. Need "source operators and equations" with formal LaTeX, units, assumptions, singularity/breakdown. Need retrocausal genealogy historical/scientific lineage & multi-week traps. Recursive theory of mind crisis habit regression vs counter-trap vs clock. Cross-layer veto adjudication physical/biomechanical/weather veto proof. RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need ensure no betting lines/odds. No toy equations. Use SI/information/probability units. Exact singularity breakdown regimes. Need maybe source citations. Need be careful "DRIVE SOURCE" no line mention. Need include exact quotes. Need not claim unknown. Need word count at least 1000. Could be around 2000-3000. Need sections exactly. They request ">= 1,000-word DEPTH across these exact XML sections" with the six tags. So final should consist of exact XML sections. Need include all. Maybe no preamble outside? Better only XML sections. Need maybe include all requested section tags, no extra. Need not mention "betting" at all? Invariant says never mention spreads, totals, moneylines, odds. We can avoid words. No betting lines. Could mention "probability" but no odds. Need not use "odds". Avoid "moneyline". Fine.

Need deeply reason about paper. Let's parse.

Paper: "The Way Up: A Dataset for Hold Usage Detection in Sport Climbing" arXiv 2505.12854v1. 22 videos, 10 athletes, two routes orange 4c, green 5a, 8.5m 0-degree inclined indoor wall, GoPro Hero 9 90-degree, portrait, 3840x2160 50 FPS, downsampled 25 FPS, resized 720x1280, stabilization. Hold annotations with extremity, hold id, start/end frames, occlusions. 940 usages, hand 481, foot 459. Avg usage duration 5.27s total; hands 5.55, feet 4.97. Occlusion avg 26.98 total; hands 50.53, feet 2.19. Models MediaPipe heavy, YOLOv8-pose X, ViTPose L. Evaluation: TP hold correctly recognized if predicted interval overlaps ground truth; TN excluded. tIoU. Results tIoU>0: ViTPose 86.6 overall; MediaPipe 83.5; YOLOv8 75.3. Sensitivity high, precision lower. tIoU>0.5 degrades. Inference times 0.12 (8.19 FPS), 0.15 (7.06), 0.25 (4.11). Missing detections: MediaPipe >150 frames in three videos, YOLOv8 >35 in two, 1-15 in eleven, ViTPose 2-10 in seven.

Need formal equations. Need derive from paper. We can formalize:

Let a hold-usage event \(E=(e,h,s,e)\) with extremity e, hold id h, interval \(T=[s,e]\subset \mathbb{N}\) frames. Under sampling \(f_s=25\) Hz, physical duration \(D=|T|/f_s\) seconds. Paper downsampled to 25 FPS [PAGE 4]; start/end frames [PAGE 5]. Annotation units: frames, seconds, pixels. Occlusion fraction maybe \(\rho_{\mathrm{occ}} = N_{\mathrm{occ}}/N_{\mathrm{use}}\) (dimensionless, percentage). Paper table 3 percentages. But careful not invent? It's standard. Could state.

Overlap area: area of interest \(A_{\mathrm{RoI}}(k)\) and hold bbox \(B_h\); overlap \(O_{k,h}=|A_k \cap B_h| / |B_h|\) or maybe intersection area. Paper says area of interest around keypoint, overlap with marked holds; threshold persist 0.5s. Not formally defined. Can formalize as \(C(k,h,t)=1[\operatorname{area}(A_k(t)\cap B_h)/\operatorname{area}(B_h)\ge \tau_A]\) dimensionless. Assumption; \(\tau_A\) not specified exact. Need note not in paper.

Temporal persistence: \(P_{k,h}(t)=1\) if \(C(k,h,s)=1\) for all? Paper: overlap must persist for at least 0.5s (12.5 frames); if new overlap matches previous, previous timestamp used instead of restarting. Formal: \(U_{k,h}(t) = \mathbf{1}[\exists t_0: C(k,h,\tau)=1 \forall \tau \in [t_0,t], f_s(t-t_0)\ge 0.5]\) or with reset? Need include grace. Framework: run-length \(R_{k,h}(t)=t - t_{\mathrm{start}}\) if continuous overlap, else 0, with anchor rule \(t_{\mathrm{start}} \leftarrow t_{\mathrm{prev}}\) if same detection reacquired. Then \(U=1[R\ge 12.5]\). At 25 FPS, 0.5s=12.5 frames, paper says 12.5 frames; integer implementation likely 12 or 13? They quote "0.5 seconds (12.5 frames)". Need exact quote. Singularity: threshold at 0.5 not derivative but break at equality; b/w sampling: if lower FPS, 12.5 frames non-integer; 0.5s maps to \(f_s/2\) frames; integer quantization changes event boundary. Also if frame rate too low, run-length cannot resolve; if FPS <2 Hz? Need breakdown: the 0.5s persistence requires at least 2 samples? For exact? It is a temporal Nyquist-like issue. We can state detection of a 0.5s interval requires sampling intervals \(\Delta t \le 0.5\) s; for robust jitter \(\Delta t \ll 0.5\). At 25Hz \(\Delta t=0.04s\). If hardware frame rate falls to 2 FPS, one sample per threshold, boundary error up to 0.5s.

tIoU: \(\mathrm{tIoU}(T_p,T_g)=|T_p\cap T_g|/|T_p\cup T_g|\) [PAGE 8]. Units frames or seconds; dimensionless in [0,1]. Breakdown when denominator zero: no predicted/GT? If both empty undefined 0/0; exclude empty events; if one empty tIoU=0. Threshold at 0 vs 0.5. The TP at tIoU>0 means any overlap; at >0.5 means majority temporal intersection. Formal: TP if \(\mathrm{tIoU}\ge \tau_{\mathrm{tIoU}}\). At \(\tau=0\), any nonzero overlap; but if equality? paper "overlap with time range" and "threshold of 0.0" so \(>0\) perhaps. Need note. tIoU threshold 0.0 and 0.5. The source says "with a threshold of 0.0 for the tIoU to count a hold usage as TP" and "tIoU threshold of 0.5". Could write \(\tau_{\mathrm{tIoU}}\in\{0,0.5\}\); TP if \(\mathrm{tIoU}>\tau\) (or \(\ge\) depending implementation). The inequality at zero matters. Singularity: denominator zero; exact \(\tau=0\) turns any positive temporal overlap into TP, so precision becomes sensitive to false positive events with tiny overlap. At \(\tau=0.5\), events with exactly half are boundary. Temporal quantization and event duration \(D\): max achievable tIoU? If predicted duration \(D_p\) and ground truth \(D_g\) with offset \delta, maximum? Could derive. We need maybe define.

Accuracy: \(A=(TP)/(TP+FP+FN)\)? Since TN not considered. Usually accuracy = (TP+TN)/(TP+TN+FP+FN), but TN not considered. Paper says TP, FP, FN, TN not considered, so likely \(A=TP/(TP+FP+FN)\). Need be careful. It says "For calculating these metrics, elements defined... TN: Not considered... Since most holds remain unused..." So accuracy computed over considered positives? Could be TP/(TP+FP+FN). We can state under assumption that TN excluded, the reported accuracy is \(A=TP/(TP+FP+FN)\); this matches their evaluation. But is that formal? Need caution: They might compute accuracy as TP/(TP+FP+FN) or (TP)/(TP+FP+FN) indeed. Sensitivity \(Se=TP/(TP+FN)\). Precision \(P=TP/(TP+FP)\). Units dimensionless. Breakdown: if no positives, sensitivity denominator zero; if no predicted positives, precision undefined; if no events, accuracy undefined. Also model comparison confounded by event base rates and route-specific distributions. Need cite Table 5 and 6.

Maybe derive "consistency constraints": Since \(A = TP/(TP+FP+FN)\), it is monotone in TP. Sensitivity/precision relation: \(A^{-1}=1/Se+1/P-1\)? Let's check: TP/(TP+FP+FN)=1/(1+FP/TP+FN/TP)=1/(1+(1/P-1)+(1/Se-1)) = 1/(1/P+1/Se-1). So \(A = 1/(1/P + 1/Se - 1)\). Nice. But ensure no toy? This is formal derived from confusion matrix. Good. We can include. Then if Se high and P lower, accuracy near harmonic-like. For ViTPose tIoU>0: Se=0.946, P=0.911 -> accuracy 0.866? Let's compute: 1/(1/0.911 + 1/0.946 -1) = 1/(1.0977+1.0571-1)=1/1.1548=0.866. Yes. For YOLO Se=0.953, P=0.782 -> 1/(1.049+1.279-1)=1/1.328=0.753. Good. MediaPipe Se=0.926 P=0.895 -> 1/(1.080+1.117-1)=1/1.197=0.835. Good. We can derive. That is useful.

Need "exact singularity/breakdown regimes": For \(A\) formula singular if \(1/P+1/Se=1\); but P,Se <=1, sum reciprocals >=2, minus 1 >=1, so denominator >=1, no singularity except? If P or Se zero then infinite? Wait P,Se positive. The formula derived from counts. If Se or P zero, accuracy zero or denominator? Need note. tIoU denominator zero. Homography singular? Homography matrix \(H\in\mathbb{R}^{3\times3}\) up to scale; mapping \(\mathbf{x}' \sim H\mathbf{x}\). Singular if \(\det(H)=0\) or point at infinity \(w=0\); in planar wall mapping, degeneracy if four reference points collinear or homography ill-conditioned. Paper says four corner points mean error 1.51 pixels vs 350-point 1.20 [PAGE 6]. Need formal: \(\tilde{\mathbf{x}}' = H\tilde{\mathbf{x}}\), \(\mathbf{x}'=(x'/w',y'/w')\). Breakdown when \(w'=0\) or \(\det(H)=0\), or reference points not in general position (collinear); also out-of-plane motion violates planar assumption. Units: pixels; \(H\) dimensionless up to scale; reprojection error in pixels. Good.

Occlusion: paper defines "occlusion rate ... listing frame ranges where the extremity on a hold was more than 50 % covered by other body parts" [PAGE 6]. Formal: frame is occluded if \(\rho_{\mathrm{cov}}(e,t)>0.5\), \(\rho_{\mathrm{cov}}\in[0,1]\). Average percent table. Breakdown: threshold at 0.5; occlusion percentage depends on segmentation/annotation, not automatically computed. Could mention hand occlusion 50.53%, feet 2.19 [PAGE 6 Table 3]. Actually Table 3 on PAGE 6. Need quote exact? "avg. hold occlusion (%)" and "hands 46.99 54.91 50.53" etc. Could quote.

Need maybe "source operators" include: temporal intersection/union operator, area intersection, persistence run-length, homography, confusion metrics, FPS/time per frame. Units. Use formal LaTeX.

Need "retrocausal genealogy": historical/scientific lineage & multi-week traps. We can discuss lineage from pose estimation (OpenPose, HRNet, YOLO, MediaPipe, ViTPose), sports analytics homography in hockey/basketball/soccer, climbing datasets (hold detection, Cimi4D, SPEED21, gaze datasets), embedded sensors and IMUs. Multi-week traps: dataset leakage? Need be careful: "multi-week traps" maybe in prompt generic frontier reasoning. We can frame as design traps that only appear across multi-week evaluation: annotation drift, camera stabilization invariances, route-specific hold geometry, participant height 156-183 cm and experience varying, occlusion, model updates, temporal alignment, cross-video homography. Need mention no correlation with experience hypothesis. The paper: "We hypothesized that experienced climbers... However, accuracy did not correlate with experience" [PAGE 10]. This is a retrocausal correction. Also route results: green better than orange despite harder, due dynamic movement reducing occlusion. Could call counterintuitive. Historical lineage: from manual scoring/dedicated hardware to camera-based; external sensors, body-worn, embedded. Pose models: OpenPose, AlphaPose, mediapipe, YOLOv8, ViTPose. Need cite pages. No "betting".

Need "recursive theory of mind": crisis habit regression vs counter-trap vs clock. Interpret as cognitive/habit modeling for climber? Need discuss how a climber's habitual movement pattern (crisis habit regression) under fatigue/crux could lead to overgripping, pulling close to wall, hiding hands, occluding, and how model detects. Counter-trap: the model or coach might over-trust high sensitivity (low false negatives) but high false positives; exact-time tIoU threshold. Clock: 0.5s threshold and frame rate. Need formulate. "Recursive theory of mind" means model the climber's intent vs incidental contact; paper's annotation: hold considered in use when intentionally touched; incidental contact not annotated [PAGE 5]. Need formalize intent latent variable \(I_{k,h}(t)\in\{0,1\}\). Observation \(C\) contact. Annotation \(U=I\) not just \(C\). Model infers \(U\) from \(C\) plus persistence. Recursive: climber anticipates model/coach? In climbing, route previewing and on-sight vs prior experience. Could discuss "crisis habit regression": under stress, climber returns to beginner habit of pulling close to wall, increasing self-occlusion, causing MediaPipe failure when head hidden [PAGE 10]. Counter-trap: don't train on only clean on-sight? The "clock" is 0.5s persistence and 25 FPS; detecting "intentional" needs temporal evidence. Need mention one participant recorded twice with black clothing [PAGE 4] to evaluate dark clothing; no clothing requirements. Theory of mind: annotator intent labels; model predicts observed contact; mismatch when climber brushes hold. Could define \(\Pr(U=1|C_{[t-\Delta,t]})\) with prior based on limb trajectory and hold geometry. But no need exact.

Need "cross-layer veto adjudication": physical/biomechanical/weather veto proof. Need discuss physical veto: planar wall assumption and camera perpendicular; out-of-plane limb movement breaks homography/overlap. Biomechanical: wrist vs fingertip, ankle vs toe; YOLOv8 uses ankle -> larger ROI -> false positives. Weather: indoor wall, 0-degree incline, controlled lighting; outdoor weather not represented; wind/rain/sun could break. But "weather veto proof" maybe need prove no weather influence? The dataset indoor, so no weather. We can state weather layer is vetoed by source scope: recordings indoor on 8.5-m 0-degree wall, GoPro, no weather variables. Therefore any weather-based inference is out-of-domain and must be vetoed. Need "proof": source says indoor wall [PAGE 3]; over four days, one busy gym background movement [PAGE 4], no weather. So cross-layer adjudication: physical geometry veto: if climber is higher up and head hidden, MediaPipe fails [PAGE 10]. Biomechanical veto: toe vs ankle; 0.5s; self-occlusion. Weather veto: not measured; cannot claim. Need be precise: "veto proof" means conditions under which layer overrides. We can formalize gating predicate: \(V_{\mathrm{phys}}=1\) if \(|\pi(\text{wall})-\text{plane}|>\epsilon\) or \(\det H\) ill-conditioned; \(V_{\mathrm{bio}}=1\) if keypoint convention lacks toe/fingertip and ROI margin causes \(FP\) inflation; \(V_{\mathrm{weather}}=1\) if outdoor/non-controlled illumination, not in dataset. We can state.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need provide scenarios with predictions. RLVR likely "Reinforcement Learning with Verifiable Rewards"? Need make 3 counterfactual vetoes. They should be verifiable from paper. Examples:
1. Change keypoint convention from ankle to toe for YOLOv8: prediction foot accuracy rises toward >90%, precision improves, false positives decrease. Verifiable by Table 5: YOLOv8 feet 76.8 vs ViTPose/MediaPipe >91.9/94.5? Actually Table 5: ViTPose feet overall 94.5, MediaPipe 91.9, YOLO 76.8. They attribute to ankle. Good.
2. Set tIoU threshold from 0 to 0.5: prediction accuracy, sensitivity, precision all degrade, especially temporal exactness; ViTPose remains best overall? Table 6: ViTPose 69.3, MediaPipe 68.2, YOLO 62.8. Yes. Prediction: exact-time performance drops ~17.3 percentage points for ViTPose (86.6 to 69.3), overall. Also sensitivity 75.7 and precision 89.1 vs 94.6/91.1? Wait tIoU>0.5 ViTPose Se 75.7, P 89.1. So precision slightly lower? Actually precision 89.1 vs 91.1 lower; sensitivity drops 18.9. Good.
3. Occlusion or head-hidden: if climber looks down at feet and head hidden behind upper body, MediaPipe fails >100 consecutive frames; prediction accuracy video-level ~63.3, 69.8, 72.3; if ViTPose used, no such failure? Paper says MediaPipe issues; ViTPose rare failure. Prediction: switching to ViTPose or tracking previous keypoints mitigates; use head-visible frames? Verifiable.
Alternative: route effect: green vs orange: prediction green accuracy higher for all models; if evaluating on orange only, lower; hand improvement bigger than feet. Verifiable Table 5. Could include as scenario.
Need "3 verifiable RLVR veto scenarios + predictions." Use exact numbers. Need define veto: if counterfactual violates, model selection veto. Maybe include acceptance criteria.

Need include citations and verbatim quotes. Need exact page markers and quote. We need not overquote. Must include at least several exact quotes. Use [PAGE N]. Need ensure quotes truly verbatim from source. Let's collect exact quotes:

Page 1: "no climbing dataset with detailed hold usage annotations exists to our knowledge." maybe exact. "We introduce a dataset of 22 annotated climbing videos, providing ground-truth labels for hold locations, usage order, and time of use." Exact. "frequent self-occlusions and non-standard movement patterns." exact. "To our knowledge, no prior work has systematically evaluated multiple pose estimation models for detecting hold usage in climbing." exact.

Page 3: "8.5-meter high, 0-degree inclined indoor wall" exact. "The first route ... difficulty rating of 4c." "second route ... 5a". "Filming was conducted using a handheld GoPro Hero 9 camera positioned at a 90-degree angle to the wall." exact. Page 4: "downsampled to 25 FPS and resized to 720×1280 pixels". "The final dataset contains the original 4K videos at 50 FPS." exact. "Some had prior experience with the routes or had watched previous ascents, while others climbed on-sight." exact. "one participant was recorded twice, once wearing black clothing to evaluate potential issues with dark clothing." exact.

Page 5: "A hold was considered in use when the climber intentionally touched it. Incidental contact was not annotated, such as briefly brushing a hold while reaching for another." exact. "The start frame was defined as the moment the climber actively grasped or stepped on the hold." "The end frame was marked when the hold was released or stepped off." "occlusion rate was annotated, listing frame ranges where the extremity on a hold was more than 50 % covered by other body parts, primarily occurring for hands." exact.

Page 6: "using only the four corner points yielded a mean error of 1.51 pixels — only slightly higher than the full 350-point calibration (1.20 pixels)." exact. "The dataset includes the computed homography matrix and the four reference points for each video." exact. Table 3 values: "hold usages total 496 444 940"; hands 260 221 481; feet 236 223 459; avg usage duration total 6.16 4.28 5.27; hands 6.33 4.65 5.55; feet 5.98 3.90 4.97; avg hold occlusion total 26.24 27.81 26.98; hands 46.99 54.91 50.53; feet 3.37 0.94 2.19. Need quote maybe not all.

Page 7: "The detected overlap must persist for at least 0.5 seconds (12.5 frames) for a hold to be recognized as used." exact. "The 0.5-second threshold was determined through empirical testing of various durations between 0 and 2 seconds, with 0.5 seconds yielding the most reliable results." exact. "if a new overlap is detected for a hand or foot that matches a detection from a previous frame, the previous timestamp is used for the 0.5-second threshold instead of restarting from the current frame." exact. "When the toe location is detected, a relatively small margin ... However, a significantly larger area is required for models that only estimate ankle keypoints" exact.

Page 8: "For a hold to be counted as correctly recognized (TP), the time range in which it was detected had to overlap with the time range of the ground truth usage annotation." exact. tIoU equation. "TN: Not considered in this evaluation. Since most holds in a given video remain unused, including TNs, the analysis would be heavily skewed..." exact. "The mean tIoU was 0.70 for ViTPose, 0.71 for MediaPipe, and 0.73 for YOLOv8-pose." exact. "MediaPipe was the fastest, processing frames at an average of 0.12 seconds per frame (8.19 FPS)." exact.

Page 9 Table 5 values. Page 10: "ViTPose achieved the highest overall accuracy (86.6%), followed by MediaPipe (83.5%), while YOLOv8-pose exhibited the lowest accuracy (75.3%)." exact. "YOLOv8-pose demonstrated the highest sensitivity (95.3%) but the lowest precision (78.2%)." exact. "accuracy did not correlate with experience" exact maybe. "MediaPipe H had issues detecting poses in more than 100 consecutive frames in three cases, resulting in low accuracy at video level, for all three cases (63.3%, 69.8%, 72.3%)." exact. "when looking at the frames where the model started failing to predict the keypoints, in all three cases the climber was higher up the wall and the head of the climber was hidden behind their upper body, as they were looking down at their feet." exact.

Page 10 conclusion: "the best performing model, ViTPose, achieved an accuracy of 86 % while processing frames at interactive rates." exact. "If high frame rates are a requirement, the second-best model in terms of accuracy, MediaPipe, still achieves 83 % while doubling the frame rate compared to ViTPose." exact.

Need "units" for equations: frames (integer), seconds (s), pixels (px), FPS (s^{-1}), dimensionless probabilities. Use SI? seconds, meters? Paper has 8.5-meter high. Could mention height \(H=8.5\) m. Incline \(0^\circ\). Resolution 720x1280 px; original 3840x2160. FPS 25 and 50. Inference time per frame seconds; FPS.

Need "information/probability units" perhaps entropy? We can include probability \(P \in [0,1]\), dimensionless; sensitivity and precision proportions. Could maybe define information units in bits for evaluation? Not needed, but prompt says "State formal LaTeX equations, SI/information/probability units." We can mention all metrics are dimensionless proportions; tIoU is dimensionless; frame interval units are frames or seconds; homography reprojection error pixels. Maybe include information units? Could define temporal uncertainty \(H(T)=-\sum p_i \log_2 p_i\) bits if needed, but paper no. Better not invent too much. But "information units" maybe not mandatory. We can state no information-theoretic unit in source; metrics are probability/proportion units. Avoid toy.

Need "zero toy equations" — no fake ratios. Our equations are grounded. Need not invent "Force/Fatigue". Fine.

Need "exact singularity/breakdown regimes" for each equation or main. We'll include in source operators section: tIoU denominator zero; overlap area denominator zero; persistence threshold non-integer at FPS; homography determinant zero; confusion denominators zero; ROI margin and ankle keypoints. Also accuracy formula singular if P or Se zero? Actually \(A = 1/(1/P+1/Se-1)\). If P=0 or Se=0, reciprocal undefined -> A=0 in limit. But denominator >0 for P,Se>0. If P=0 or Se=0, formula blows; define A=0. If P=Se=1 denominator 1 -> A=1. Boundary at \(P,Se\in(0,1]\). Good.

Need include "gray-zone audit": discuss near-threshold events, annotation ambiguity, frame quantization, occlusions, route difficulty vs accuracy. Need in THINK_TRACE >=400 words. Need maybe count. Let's draft around 500-700 words for THINK_TRACE. Then other sections 200-300 each; total >2000. Need ensure word count >=1000. Desired oververbosity 5. We can be thorough but not excessive. Need exact XML tags. No markdown? XML can contain markdown? Fine.

Need be careful with "PAGES: 12" and "SOURCE TEXT" quote markers. Use [PAGE N] exactly. They requested exact [PAGE N] markers and verbatim quotes. We'll use [PAGE 5] etc. Need not cite all pages. Ensure quotes are exact with capitalization and punctuation. Use quotation marks. Avoid paraphrasing inside quote. Could use quotes from source. Need maybe no quote too long? Fine.

Need formulate "multi-hop derivation" in THINK_TRACE. Let's outline:

THINK_TRACE:
- Start with annotation semantics: event = (limb, hold, start, end, occluded). Paper distinguishes touched vs used; only intentional touch annotated; Page 5. So ground truth is latent intent, not raw contact.
- Convert frames to seconds: at 25 FPS, 0.5 s = 12.5 frames; page 7. Boundary quantization causes gray zone: 12 vs 13 frames; exact equality. If model overlap starts within one frame of true grasp, run-length may cross threshold differently. The source uses previous timestamp if reacquired, which is a hysteresis/anti-reset mechanism; this is a causal filter with memory. Formalize \(R(t)\).
- Evaluation: tIoU. If tIoU threshold 0, any overlap TP; high sensitivity. At 0.5, exact temporal alignment required; numbers drop. Table 5 vs 6. Multi-hop: Because accuracy formula \(A=1/(1/P+1/Se-1)\), the high sensitivity of YOLOv8 cannot compensate for precision; 0.953 and 0.782 yield 0.753. ViTPose 0.946 and 0.911 -> 0.866. This explains table. For feet, ankle keypoint -> large ROI -> false positives; YOLO feet 76.8 vs ViTPose 94.5 and MediaPipe 91.9. Hand occlusion 50.53% vs feet 2.19%; but foot accuracy better due skeleton convention? Need nuance: hands occlusion high yet ViTPose hand 80.1 vs feet 94.5; foot detection easier because ROI geometry and less occlusion; but YOLO ankle hurts. Green route better than orange despite 5a harder; dynamic moves reduce hand occlusion; Page 10. This is counterintuitive, multi-hop.
- Cross-layer: homography 4-corner mean error 1.51 px, 350-point 1.20; planar 0-degree wall; if out-of-plane or camera not perpendicular, overlap breaks. MediaPipe failure when head hidden. Weather not in dataset; indoor.
- Gray-zone audit: 0.5 s threshold empirically tested 0-2 s; not a natural constant; exact threshold selected on same dataset? If so, possible overfitting; not described as held-out. That is a gray-zone: 0.5 s chosen empirically; no cross-validation reported. Need mention. Also TN excluded: accuracy not conventional; don't compare with accuracy including TN. tIoU mean 0.70-0.73 but tIoU>0.5 accuracy much lower. Occlusion definition >50% covered; threshold arbitrary. Experience hypothesis falsified. Model selection hardware: GTX 1050 4GB, 8GB RAM; 4K not used; downsampled 720x1280. Real-time claims at 4-8 FPS, not 25 FPS; "interactive rates" but not full frame rate. Need mention: 8.19 FPS vs 25 FPS downsampled, so not real-time at capture rate; frame skipping. That is gray zone. Paper says "processing frames at average 0.12 s per frame (8.19 FPS)" and "real-time applications" but 8.19 < 25; they may skip frames. Need audit.
- Need maybe identify "gray-zone events": incidental contact vs intentional touch; occlusion start/end estimated by body movement; one technical issue missing first two moves; background movement in busy gym; black clothing participant; handheld camera and stabilization. These affect reproducibility. Good.

Then source operators:
- Table with equations. Need LaTeX. Use \(\mathrm{tIoU}\), \(\mathrm{Acc}\), \(\mathrm{Se}\), \(\mathrm{Prec}\), \(R\), \(C\), homography, FPS. Each with units and citations, breakdown. Need maybe include exact quote. Use bullet list.

Let's draft equations:

1. Frame-to-time: \(t_k = k/f_s\), \(f_s=25\,\mathrm{s^{-1}}\) for processed; original \(50\,\mathrm{s^{-1}}\). Duration \(D=|T|/f_s\), \(T=[s,e]\subset\mathbb{N}_0\). Units s. Breakdown: if \(f_s\) changes, annotation must rescale; non-integer frames.

2. Temporal IoU:
\[
\mathrm{tIoU}(T_p,T_g)=\frac{|T_p\cap T_g|}{|T_p\cup T_g|}\in[0,1]
\]
dimensionless; \(|T|\) in frames or seconds (ratio invariant). Source [PAGE 8]. Breakdown: \(T_p\cup T_g=\varnothing\) -> 0/0 undefined; if either empty but union nonempty -> 0. Threshold \(\tau_{\mathrm{tIoU}}\in\{0,0.5\}\); TP if \(\mathrm{tIoU}>\tau\) (or \(\ge\), boundary). At \(\tau=0\), any positive overlap; exact boundary at 0.

3. Confusion metrics:
\[
\mathrm{TP}=\sum_i \mathbf{1}[\mathrm{tIoU}_i>\tau],\quad
\mathrm{FP}=...,\quad
\mathrm{FN}=...
\]
Need define FP hold recognized not used, FN used not recognized. Since TN excluded. \(A=\frac{TP}{TP+FP+FN}\), \(Se=\frac{TP}{TP+FN}\), \(P=\frac{TP}{TP+FP}\). Dimensionless proportions. Derivation \(A=[1/P+1/Se-1]^{-1}\). Breakdown: no positives -> Se undefined; no predicted positives -> P undefined; no considered events -> A undefined; TN omitted. Source [PAGE 8]. Need maybe exact quote "TN: Not considered..." etc.

4. Overlap/persistence:
\[
C_{k,h}(t)=\mathbf{1}\left[\frac{|A_k(t)\cap B_h|}{|B_h|}\ge \tau_A\right]
\]
\(A_k(t)\) ROI in px\(^2\), \(B_h\) hold bbox in px\(^2\); ratio dimensionless. \(\tau_A\) not given; source says area of interest and overlap. Then:
\[
R_{k,h}(t)=
\begin{cases}
t-t_0, & C=1 \text{ since } t_0 \text{ or matched previous}\\
0, & \text{otherwise}
\end{cases}
\]
\[
U_{k,h}(t)=\mathbf{1}[f_s^{-1} R_{k,h}(t)\ge 0.5\,\mathrm{s}]
\]
At 25s^-1, \(0.5 f_s=12.5\) frames. Source [PAGE 7] exact quote. Breakdown: equality at 12.5 frames; integer rounding; if FPS low, temporal resolution; if occlusion causes dropout, reset; paper's reacquisition anchor rule mitigates but can create false persistence if reacquisition is wrong. Need mention threshold empirically chosen 0-2s; no CV reported.

5. Homography:
\[
\tilde{\mathbf{x}}'=H\tilde{\mathbf{x}},\quad \mathbf{x}'=(x'/w',y'/w')^\top
\]
\(H\in\mathbb{R}^{3\times3}\) up to scale; x in px. Reprojection error \(e_{\mathrm{rep}}=\|\pi(H\mathbf{x}_i)-\mathbf{x}'_i\|_2\) px. \(H\) singular if \(\det H=0\), or \(w'=0\); four points collinear yields non-unique H. Source [PAGE 6] quote. Units: px; H dimensionless up to scale. Breakdown: out-of-plane wall not planar; lens distortion; camera movement despite stabilization. Paper uses four corners; mean error 1.51 px vs 1.20.

6. Throughput:
\[
\mathrm{FPS}_{\mathrm{eff}}=1/\bar{\Delta t}_{\mathrm{frame}}
\]
\(\bar{\Delta t}\) s; measured 0.12 -> 8.19, 0.15 -> 7.06, 0.25 -> 4.11. Breakdown: effective fps less than 25; real-time claim depends definition; if skipping frames, temporal resolution for 0.5s threshold worsens. Source [PAGE 8/10]. Good.

Need "information units": Maybe mention all probabilities dimensionless; no entropy. Could mention "information-theoretic unit is not reported; the only information-like quantity is tIoU, a dimensionless ratio." That's okay.

Retrocausal genealogy:
- lineage: manual competition scoring, dedicated hardware, embedded force sensors, IMUs, camera-based. Cite pages 1-2. Dataset gaps: no temporal order; existing datasets hold detection/gaze/SPEED21. Paper contribution: 22 videos, order/time. Pose estimation lineage: OpenPose, HRNet, YOLOv3, YOLOv5, Apple Vision, etc. Models chosen from preliminary eval: MediaPipe heavy, YOLOv8-pose X, ViTPose L. Homography lineage in sports: hockey, basketball, soccer [PAGE 11 refs 17-19]. Retrocausal: "The Way Up" title? Not relevant.
- Multi-week traps: Dataset captured over four days, participants allowed route preview; some on-sight, some prior experience. This creates a hidden distribution shift if evaluating learning/coaching over weeks. The model accuracy doesn't correlate with experience; this retroactively vetoes the hypothesis that expert extended arms improve pose estimation. Another trap: green route faster? Actually orange faster average; green total duration 931.6 vs orange 614.92; green avg 84.69 vs orange 55.90; green has more hold usages 496 vs 444. But green accuracy better. So route difficulty isn't monotonic with vision difficulty. Multi-week traps: clothing, lighting, background movement, camera position, stabilization, auto belay. If deployed over weeks, these shift. Paper says one busy gym and black clothing. Need mention.
- Scientific lineage: pose estimation models with keypoint conventions (wrist, ankle vs toe) from COCO; climbing-specific fingertip/toe tip missing. The paper's future work: models with fingertips. Good.

Recursive theory of mind:
- Define intentional use latent \(I\), observed contact \(C\). Annotation approximates \(I\); model uses \(C\) and persistence. The recursive loop: climber's belief about route and holds determines movement; observer annotator infers intent; model infers from pose; coach/application gives feedback that changes future climbing. Need discuss crisis habit regression: under crux/fatigue, climber may revert to pulling close to wall, hiding hands/head; MediaPipe fails when head hidden; model mislabels; feedback could reinforce bad habit if it says hold used when only brushed. Counter-trap: high sensitivity model overpredicts; if used for next-hold suggestion, false positives may misguide visually impaired climber. Clock: 0.5s persistence and FPS; short brushes excluded; long occlusions create gaps. Need mention on-sight vs prior experience: participant prior knowledge changes movement; theory of mind about route. Could formalize a Bayesian update:
\[
\Pr(I=1\mid C_{t-\Delta:t}, \text{pose}) \propto \Pr(C\mid I)\Pr(I\mid \text{limb trajectory, hold geometry})
\]
but maybe avoid too much. Need no toy? It's a probability model; okay. But paper doesn't do Bayesian. Could state as conceptual, not source equation. Maybe not include formal fake. We can mention latent variable but not equation? It's okay. Need "crisis habit regression vs counter-trap vs clock" explicitly.

Cross-layer veto:
- Physical: planar wall 0-degree, perpendicular camera; homography. If wall angle, height, camera not 90, out-of-plane, veto. Paper: future work varied wall angles; current only planar. Need quote "planar sport climbing walls with consistent verticality" [PAGE 10].
- Biomechanical: keypoint conventions: wrist vs fingertip; ankle vs toe. Toe positions never exceeded ankle height; ROI shifted downward; ankle models need larger ROI -> false positives. YOLO accuracy worst. Occlusion hands >50% vs feet 2.19. This vetoes equal treatment of hands/feet. Also "toe positions never exceeded ankle height" [PAGE 7] exact. Need maybe quote.
- Weather: indoor, controlled; no weather variables; one busy gym background movement; no rain/wind/sun. Therefore weather layer is not identifiable; any claim is out-of-domain. Need "veto proof": source scope says indoor wall; no weather recorded. We can say "weather veto is categorical, not statistical: the dataset cannot support weather inference because the variable has no support." Good.

RLVR counterfactual vetoes:
Need define RLVR? We can mention "verifiable reward vetoes" maybe. Three scenarios:
1. Keypoint convention counterfactual: replace YOLOv8 ankle with toe keypoint. Prediction: foot accuracy increases from 76.8% toward 91.9-94.5% range; precision increases; false positives from large ROI decrease. Veto if no improvement. Cite Table 5 and Page 7.
2. Temporal threshold counterfactual: evaluate at tIoU>0.5 instead of >0.0. Prediction: all models drop; ViTPose overall 86.6->69.3, MediaPipe 83.5->68.2, YOLO 75.3->62.8. Sensitivity drops to 75.7, 75.7, 79.7; precision changes. Veto if exact-time scoring not reported. Cite Table 5/6.
3. Occlusion/head-hidden counterfactual: choose MediaPipe vs ViTPose for frames where head hidden. Prediction: MediaPipe has >100 consecutive missing frames in three videos leading 63.3, 69.8, 72.3 accuracy; ViTPose fewer failures. Veto if deployment uses MediaPipe without occlusion fallback. Cite Page 10. Alternatively route counterfactual: evaluate only orange route vs green. Prediction green higher for all models, hand improves more than feet. Could be fourth but only 3 needed. Maybe include route as part of scenario 2? We can include three as above. Need "predictions" and "verifiable". Good.

Need perhaps mention "RLVR" not expand? It may stand for "Reinforcement Learning with Verifiable Rewards"; but user didn't define. We can say "RLVR-style counterfactual vetoes (reward checks verifiable from the source)". Avoid inventing? Fine.

Need no "betting" word. Avoid odds. "probability" okay.

Need ensure exact XML tags. No closing after? Include all six. Need no markdown headings outside. The sections can contain LaTeX. Need maybe use CDATA? Not necessary. But XML tags with LaTeX containing `<` or `>`? Avoid raw `<` in text? XML parser might choke if `<` appears. We can use \(\le\), \(\ge\) rather than < >. Use words. Avoid ampersand? Use "and" not &. If using \( \) okay. Avoid `<` characters. Need perhaps no raw `&`. Use "TP and FP". Good. Use `\%`? In XML text, `%` okay. Use `[PAGE 5]` okay. Use quotes. Need avoid `&` in "R&D". Fine.

Need "≥1,000-word depth" maybe word count. Need final under 3000? We can produce around 2400 words. Need no preamble. Let's craft carefully.

Potential issue: User asks "SOURCE TEXT" with pages. We need cite exact [PAGE N] markers. We should include quote with page marker adjacent. For examples:
"no climbing dataset with detailed hold usage annotations exists to our knowledge" [PAGE 1].
"The detected overlap must persist for at least 0.5 seconds (12.5 frames) for a hold to be recognized as used." [PAGE 7].
Need exact quotes: Check page 1 has "However, no climbing dataset with detailed hold usage annotations exists to our knowledge." Yes exact. Good.
Page 7 exact: "The detected overlap must persist for at least 0.5 seconds (12.5 frames) for a hold to be recognized as used." Yes.
Page 8 exact: "TN: Not considered in this evaluation. Since most holds in a given video remain unused, including TNs, the analysis would be heavily skewed and provide little meaningful insight." The source text has "• True Negative (TN): Not considered in this evaluation. Since most holds in a given video remain unused, including TNs, the analysis would be heavily skewed and provide little meaningful insight." Use without bullet. Good.
Page 6 quote: "using only the four corner points yielded a mean error of 1.51 pixels — only slightly higher than the full 350-point calibration (1.20 pixels)." exact (em dash). Good.
Page 10 quote: "accuracy did not correlate with experience" exact lower-case. Good.
Page 10 quote: "when looking at the frames where the model started failing to predict the keypoints, in all three cases the climber was higher up the wall and the head of the climber was hidden behind their upper body, as they were looking down at their feet." Source has "When looking..." capital W. Exact quote should start capital: "When looking at the frames where the model started failing to predict the keypoints, in all three cases the climber was higher up the wall and the head of the climber was hidden behind their upper body, as they were looking down at their feet." Good.
Page 3 quote: "8.5-meter high, 0-degree inclined indoor wall" exact.
Page 4: "downsampled to 25 FPS and resized to 720×1280 pixels" exact (times symbol). Good.
Page 5: "A hold was considered in use when the climber intentionally touched it. Incidental contact was not annotated, such as briefly brushing a hold while reaching for another." exact. Good.
Page 5: "more than 50 % covered by other body parts" exact with space before %. Good.

Need equations:
- Use \(\operatorname{area}\). Good.
- Use \(\mathbf{1}\). Good.
- Use \(\Delta t\). Good.
- Use \( \mathrm{FPS}_{\mathrm{eff}} = 1/\overline{\Delta t}_{\mathrm{frame}}\). Good.

Need mention "TN excluded" so accuracy not standard. In THINK_TRACE and source operators.

Need "gray-zone audit" in THINK_TRACE: include threshold selection not cross-validated? Source says "empirical testing of various durations between 0 and 2 seconds, with 0.5 seconds yielding the most reliable results." We can say "No held-out protocol is stated on the supplied pages; this is a gray-zone for generalization." That's accurate: not stated. Avoid claiming overfit. Good.
Need "technical issue prevented recording first two moves of one climb" [PAGE 4]. Could mention as data gap. "one occasion, the gym was busy, resulting in background movement" [PAGE 4]. Good.
Need "faces blurred" privacy. Not necessary.
Need "black clothing" [PAGE 4]. Good.

Need "multi-week traps" maybe in retrocausal: if deployed over weeks, participants' familiarity changes, route preview, clothing, camera, occlusion. Good.

Need "counter-trap" in theory of mind: The model's overprediction (high sensitivity) can become a trap for feedback. Use exact quote "Sensitivity is higher than precision for all models, suggesting that they rarely miss actual hold usage (low false negatives) but tend to overpredict usage (higher false positives)." [PAGE 10]. Good. This is a great quote.

Need "clock" in theory of mind: 0.5s and 25 FPS; 12.5 frames; exact. Use quote. Good.

Need "cross-layer veto" proof maybe use "Veto predicates" with formal conditions. Could include equations? Yes:
\[
V_{\mathrm{phys}}=1 \iff \text{wall not planar or } \det H\approx0 \text{ or } |\angle(\text{camera},\text{wall})-90^\circ|>\epsilon
\]
But source says camera 90-degree chosen. We can state not a paper equation, a gate. Need avoid fake? It is an adjudication predicate, not toy. Could be okay. But "formal LaTeX equations" maybe okay. "Veto proof" can be logical. Need not overdo.

Need "information/probability units": We'll state in source operators: \(P,Se,A,\mathrm{tIoU}\in[0,1]\) dimensionless; frame counts are integers; seconds SI; pixels; FPS \(s^{-1}\). No bits are used in paper. Good.

Need final answer with XML tags. Let's draft. Need ensure word count. We'll create around 2500 words. Let's write in detailed but concise sections.

Potential problem: XML section names exact: <THINK_TRACE>, <SOURCE_OPERATORS_AND_EQUATIONS>, <RETROCAUSAL_GENEALOGY>, <RECURSIVE_THEORY_OF_MIND>, <CROSS_LAYER_VETO_ADJUDICATION>, <RLVR_COUNTERFACTUAL_VETOES>. Use exactly. Need no extra tags? Fine.

Need avoid using `<` inside. When writing "tIoU>0" use \(>\). XML text can contain > but okay. Use \(\tau_{\mathrm{tIoU}}>0\). Fine. Avoid raw `<` in "FPS < 25"; use "below 25". Avoid ampersand. Use "and". Avoid `<` in equations? Use \(\le\). Good. Use `\operatorname` etc. LaTeX has backslashes; XML okay. Use `\mathbf{1}`. Good.

Need maybe quote page 7 "12.5 frames" with period. Good.

Let's formulate THINK_TRACE 400+ words. Count roughly:
Paragraph 1: 150. Paragraph 2: 150. Paragraph 3: 150. Paragraph 4: 150. Total 600. Good.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central measurement is not “contact” but “intentional hold use.” The annotation rule states: “A hold was considered in use when the climber intentionally touched it. Incidental contact was not annotated, such as briefly brushing a hold while reaching for another” [PAGE 5]. This creates the first multi-hop inference problem: the ground truth is a latent intent label, while the model observes only 2D keypoints and hold boxes. A hand can geometrically overlap a hold without the climber intending to use it, and a climber can use a hold while the wrist keypoint is displaced from the fingertip contact area. The dataset’s 22 videos, 10 climbers, two routes, and 940 hold usages are therefore an operational proxy for intent, not a direct physical force measurement.

The second hop is temporal. The source converts annotation semantics into a persistence rule: “The detected overlap must persist for at least 0.5 seconds (12.5 frames) for a hold to be recognized as used” [PAGE 7]. At the processed rate of 25 FPS [PAGE 4], 0.5 s is exactly 12.5 frames, so the integer-frame implementation has a gray zone at 12 versus 13 frames. A predicted overlap that begins one frame late, or ends one frame early, can cross the threshold differently. The paper mitigates reacquisition resets: “if a new overlap is detected for a hand or foot that matches a detection from a previous frame, the previous timestamp is used for the 0.5-second threshold instead of restarting from the current frame” [PAGE 7]. That is a memory/hysteresis operator: it prevents brief keypoint dropouts from restarting the clock, but it can also preserve a false positive if the reacquired detection is wrong.

The third hop is evaluation. A detection is a true positive if its predicted interval overlaps the ground-truth interval, with the temporal intersection-over-union defined on [PAGE 8] as \(\mathrm{tIoU}=|T_p\cap T_g|/|T_p\cup T_g|\). At a threshold of 0.0, any positive temporal overlap counts; at 0.5, the predicted and true intervals must substantially coincide. The reported drop from Table 5 to Table 6 is therefore not a model bug but a change in the decision criterion: ViTPose falls from 86.6% overall accuracy at \(\mathrm{tIoU}>0\) to 69.3% at \(\mathrm{tIoU}>0.5\) [PAGE 9]. This exposes a gray zone in “hold usage detection”: counting used holds and timing their use are different tasks.

The fourth hop is the confusion-matrix algebra. Because the paper explicitly excludes true negatives — “TN: Not considered in this evaluation. Since most holds in a given video remain unused, including TNs, the analysis would be heavily skewed and provide little meaningful insight” [PAGE 8] — the reported accuracy is not the conventional all-cell accuracy. Under the source’s TP, FP, and FN definitions, the reported accuracy is \(A=TP/(TP+FP+FN)\), with \(Se=TP/(TP+FN)\) and \(P=TP/(TP+FP)\). This yields the exact identity \(A=[1/P+1/Se-1]^{-1}\). The identity explains why YOLOv8-pose X’s high sensitivity of 95.3% cannot rescue its low precision of 78.2%: those values give approximately 75.3% accuracy, matching the reported overall result [PAGE 10]. ViTPose’s 94.6% sensitivity and 91.1% precision give approximately 86.6%. The model ranking is therefore a precision-limited ranking, not a sensitivity-limited one.

The fifth hop is geometry. The wall is described as an “8.5-meter high, 0-degree inclined indoor wall” [PAGE 3], and the camera was “positioned at a 90-degree angle to the wall” [PAGE 3]. The homography calibration uses four corner points and reports “a mean error of 1.51 pixels — only slightly higher than the full 350-point calibration (1.20 pixels)” [PAGE 6]. This is adequate for a planar wall, but it is a physical constraint: out-of-plane limb motion, wall angle changes, camera rotation, or lens distortion can invalidate the pixel-to-wall mapping. The gray-zone audit must therefore separate errors caused by pose estimation from errors caused by the planar mapping assumption.

A further gray zone is the 0.5 s threshold itself. The source says it was “determined through empirical testing of various durations between 0 and 2 seconds, with 0.5 seconds yielding the most reliable results” [PAGE 7]. The supplied pages do not state a held-out protocol for that threshold selection, so generalization across gyms, routes, and camera rates remains an open risk. The same applies to the “more than 50 % covered” occlusion definition [PAGE 5] and to the four-corner homography. These are defensible engineering choices, but they are not invariant physical constants; they are calibrated operating points with breakdown regimes.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All temporal quantities below use seconds \(\mathrm{s}\), frame indices are integers, spatial quantities use pixels \(\mathrm{px}\), frame rate uses \(\mathrm{s}^{-1}\), and probability-like metrics are dimensionless proportions in \([0,1]\). The paper reports no information-theoretic entropy unit; its evaluation quantities are probability/proportion ratios and temporal overlap ratios.

1. Frame-to-time conversion. Let \(f_s\) be the processed frame rate and \(T=[s,e]\subset\mathbb{N}_0\) a frame interval. The physical duration is
\[
D(T)=\frac{|T|}{f_s}\,\mathrm{s},\qquad |T|=e-s+1.
\]
The processed dataset uses \(f_s=25\,\mathrm{s}^{-1}\): “downsampled to 25 FPS and resized to 720×1280 pixels” [PAGE 4]. The original capture is \(50\,\mathrm{s}^{-1}\): “The final dataset contains the original 4K videos at 50 FPS” [PAGE 4]. Breakdown: changing \(f_s\) without rescaling annotations changes event duration; non-integer frame counts occur whenever \(Df_s\notin\mathbb{N}\).

2. Temporal intersection-over-union. The paper defines
\[
\mathrm{tIoU}(T_p,T_g)=\frac{|T_p\cap T_g|}{|T_p\cup T_g|}\in[0,1],
\]
where \(T_p\) is predicted usage duration and \(T_g\) is ground truth [PAGE 8]. The ratio is dimensionless and invariant to whether \(|T|\) is measured in frames or seconds. Breakdown: if \(T_p\cup T_g=\varnothing\), the expression is \(0/0\) and undefined; if exactly one interval is empty and the union is non-empty, \(\mathrm{tIoU}=0\). The decision boundary at \(\tau_{\mathrm{tIoU}}=0\) is singular in practice because any positive overlap becomes a true positive; the boundary at \(0.5\) is also a hard threshold where small temporal shifts flip the label.

3. Confusion-matrix metrics with TN excluded. Using the source’s TP, FP, and FN definitions and its explicit TN exclusion [PAGE 8]:
\[
A=\frac{TP}{TP+FP+FN},\qquad
Se=\frac{TP}{TP+FN},\qquad
P=\frac{TP}{TP+FP}.
\]
These are dimensionless proportions. Algebraically,
\[
A=\left(\frac{1}{P}+\frac{1}{Se}-1\right)^{-1}.
\]
Breakdown: \(Se\) is undefined when \(TP+FN=0\); \(P\) is undefined when \(TP+FP=0\); \(A\) is undefined when no considered events exist. The formula has limiting value \(A\to0\) if either \(Se\to0\) or \(P\to0\), and \(A=1\) only when \(P=Se=1\). It cannot be compared to conventional accuracy that includes true negatives.

4. Overlap and persistence operator. Let \(A_k(t)\subset\mathbb{R}^2\) be the area of interest around keypoint \(k\) in \(\mathrm{px}^2\), and \(B_h\subset\mathbb{R}^2\) the hold bounding box in \(\mathrm{px}^2\). A contact indicator can be written
\[
C_{k,h}(t)=\mathbf{1}\!\left[\frac{|A_k(t)\cap B_h|}{|B_h|}\ge \tau_A\right],
\]
with dimensionless \(\tau_A\). The paper states that an area of interest is placed around each keypoint and checked for overlap with annotated holds [PAGE 7]. The exact \(\tau_A\) is not specified on the supplied pages, so it is a gray-zone parameter. The persistence rule is
\[
R_{k,h}(t)=t-t_0,\qquad
U_{k,h}(t)=\mathbf{1}\!\left[\frac{R_{k,h}(t)}{f_s}\ge 0.5\,\mathrm{s}\right],
\]
where \(t_0\) is the overlap start or the matched previous timestamp under reacquisition. At \(f_s=25\,\mathrm{s}^{-1}\), \(0.5f_s=12.5\) frames. The source states: “The detected overlap must persist for at least 0.5 seconds (12.5 frames) for a hold to be recognized as used” [PAGE 7]. Breakdown: the threshold is exactly between 12 and 13 frames; integer rounding changes the label; if the effective frame rate falls, the clock becomes coarser; if occlusion resets \(t_0\) incorrectly, a true long use can be fragmented.

5. Homography mapping. For homogeneous image points \(\tilde{\mathbf{x}}=(x,y,1)^\top\) and \(\tilde{\mathbf{x}}'=(x',y',w')^\top\),
\[
\tilde{\mathbf{x}}'=H\tilde{\mathbf{x}},\qquad
\mathbf{x}'=\left(\frac{x'}{w'},\frac{y'}{w'}\right)^\top,\qquad H\in\mathbb{R}^{3\times3}.
\]
The reprojection error is \(e_{\mathrm{rep}}=\|\pi(H\mathbf{x}_i)-\mathbf{x}'_i\|_2\) in \(\mathrm{px}\). The source reports four-corner calibration with mean error \(1.51\,\mathrm{px}\) versus \(1.20\,\mathrm{px}\) for 350 reference points [PAGE 6]. Breakdown: \(H\) is singular when \(\det H=0\); the mapped point is undefined when \(w'=0\); the four reference points are degenerate when collinear or nearly collinear; and a planar homography is invalid when the wall is not planar or the camera is not approximating a perpendicular view.

6. Throughput. Effective frame rate is
\[
\mathrm{FPS}_{\mathrm{eff}}=\frac{1}{\overline{\Delta t}_{\mathrm{frame}}},
\]
with \(\overline{\Delta t}_{\mathrm{frame}}\) in \(\mathrm{s}\). The source reports MediaPipe at \(0.12\,\mathrm{s}\) per frame (\(8.19\,\mathrm{FPS}\)), YOLOv8-pose at \(0.15\,\mathrm{s}\) (\(7.06\,\mathrm{FPS}\)), and ViTPose at \(0.25\,\mathrm{s}\) (\(4.11\,\mathrm{FPS}\)) [PAGE 8]. Breakdown: these rates are below the processed 25 FPS, so “real-time” here means interactive processing with frame skipping or latency, not capture-rate parity. Lower effective frame rate increases temporal quantization error for the 0.5 s rule.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s scientific lineage runs from manual competition scoring and dedicated climbing hardware toward camera-only, scalable perception. The introduction notes that hold detection and position estimation are “often performed manually or with dedicated hardware, limiting scalability and accessibility” [PAGE 1], and the related-work section organizes prior climbing motion detection into embedded sensors, body-worn sensors, and external sensors [PAGE 1]. Embedded force sensors in holds, IMUs, gaze tracking, YOLOv5 hold detection, OpenPose speed-climbing analysis, HRNet plus YOLOv3 pipelines, and gym-wide bouldering tools are all ancestors of the present work [PAGE 2]. The dataset contribution is retrocausal in the sense that it fixes a missing temporal label layer: earlier climbing datasets covered hold detection, 3D pose, gaze, or speed-climbing skeletons, but the authors claim “no climbing dataset with detailed hold usage annotations exists to our knowledge” [PAGE 1] and emphasize that temporal order “has not been addressed in existing datasets” [PAGE 2].

A second lineage is 2D pose-estimation convention. The paper evaluates MediaPipe heavy, YOLOv8-pose X, and ViTPose L after a preliminary model screen [PAGE 7]. The key historical trap is skeleton convention: “State-of-the-art 2D pose estimation models detect hand keypoints around the wrist and foot keypoints either at the toes or the ankle. However, holds primarily engage with the fingertips and toe tips in climbing” [PAGE 6]. That mismatch is not a minor implementation detail; it is a genealogical inheritance from generic human-pose datasets. YOLOv8-pose’s ankle-based foot keypoints force a larger area of interest, which the authors link to overprediction and worse foot accuracy [PAGE 10]. The future-work statement proposes fingertip keypoints as a direct correction [PAGE 10]. A third lineage is sports homography: hockey, basketball, and soccer are cited as prior domains using homography for player movement statistics [PAGE 11], and the climbing dataset adopts a four-corner planar mapping with \(1.51\,\mathrm{px}\) mean error [PAGE 6].

Multi-week traps appear when this four-day dataset [PAGE 4] is projected into longitudinal deployment. First, route familiarity is uncontrolled: “Some had prior experience with the routes or had watched previous ascents, while others climbed on-sight” [PAGE 4]. Over weeks, the same climber’s movement can shift from on-sight exploration to memorized sequence, changing occlusion and timing without changing the hold map. Second, clothing and background are not stationary: one participant was recorded twice, “once wearing black clothing to evaluate potential issues with dark clothing” [PAGE 4], and one session had “background movement” because the gym was busy [PAGE 4]. Third, camera stabilization and handheld capture introduce a recording-pipeline dependency that may drift across sessions. Fourth, the paper’s hypothesis that experienced climbers with extended arms would yield better pose accuracy was not supported: “accuracy did not correlate with experience” [PAGE 10]. That retroactively vetoes experience as a simple proxy for vision quality. Fifth, route difficulty is not monotonic with vision difficulty: all models performed better on the green 5a route than on the orange 4c route, and hand accuracy improved more than foot accuracy, which the authors attribute to longer, more dynamic movements reducing upper-body hand occlusion [PAGE 10]. A multi-week evaluation that treats “harder route” as “harder perception” would therefore be mis-specified.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive loop is: climber intention produces movement; movement produces 2D keypoints and occlusion; the annotator infers intention from video; the model infers hold use from keypoints and boxes; the resulting feedback can alter the climber’s next action. The source’s annotation rule makes intention explicit: “A hold was considered in use when the climber intentionally touched it. Incidental contact was not annotated” [PAGE 5]. But the model has no direct intent channel. It uses wrist or ankle keypoints, an area of interest, hold boxes, and the 0.5 s persistence clock. The clock is the counter-trap against brief brushing: “The detected overlap must persist for at least 0.5 seconds (12.5 frames) for a hold to be recognized as used” [PAGE 7]. The same clock can fail in the opposite direction if a true use is fragmented by occlusion or keypoint dropout.

Crisis habit regression is visible in the biomechanical failure mode. When climbers are higher on the wall, look down at their feet, and hide the head behind the upper body, MediaPipe can lose the pose: “When looking at the frames where the model started failing to predict the keypoints, in all three cases the climber was higher up the wall and the head of the climber was hidden behind their upper body, as they were looking down at their feet” [PAGE 10]. This is a habit/attention regression under load: the climber’s posture becomes less camera-legible exactly when the route demands more. A coach-facing system that assumes clean frontal pose will systematically fail in the crux, not in the easy start. The counter-trap is not to demand that climbers pose for the camera; it is to add temporal memory, multi-view redundancy, or a model with fewer catastrophic misses.

The model-side counter-trap is overprediction. The paper states: “Sensitivity is higher than precision for all models, suggesting that they rarely miss actual hold usage (low false negatives) but tend to overpredict usage (higher false positives)” [PAGE 10]. For a next-hold suggestion system, a false positive is not a harmless extra label; it can misdirect a visually impaired climber or distort training feedback. High sensitivity is therefore not a free reward. The 0.5 s rule and the tIoU threshold are the arbitration clocks: at \(\mathrm{tIoU}>0\), the task is closer to “which holds were used”; at \(\mathrm{tIoU}>0.5\), it is closer to “when exactly was each hold used.” The overall accuracy drop from 86.6% to 69.3% for ViTPose [PAGE 9] is the measurable cost of demanding exact timing. A recursive theory of mind must keep these clocks separate: the climber’s intent clock, the annotator’s frame clock, and the model’s persistence clock are not the same clock.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto. The current dataset is restricted to an “8.5-meter high, 0-degree inclined indoor wall” [PAGE 3], filmed at “a 90-degree angle to the wall” [PAGE 3]. The homography is valid only under the planar-wall approximation. The source itself limits scope: future extensions could incorporate “varied wall angles and heights” [PAGE 10]. Therefore any claim that the same overlap rule transfers to overhangs, slabs, outdoor rock, or oblique camera views is vetoed unless a new calibration and keypoint validation are supplied. The four-corner homography has a measured mean error of \(1.51\,\mathrm{px}\) versus \(1.20\,\mathrm{px}\) for 350 points [PAGE 6], but that error is conditional on the planar setup. If \(\det H\approx0\), if the four points are nearly collinear, or if \(w'=0\), the mapping breaks outright.

Biomechanical veto. The keypoint convention is layer-specific. Wrist and ankle locations are not fingertip and toe-tip locations; the paper notes that “holds primarily engage with the fingertips and toe tips in climbing” [PAGE 6]. When only the ankle is available, “a significantly larger area is required” for foot overlap [PAGE 7]. That larger box inflates false positives. The empirical signature is direct: YOLOv8-pose X has 76.8% overall foot accuracy, while ViTPose L and MediaPipe H are above 90% for feet [PAGE 9]. Hand occlusion is also structurally different from foot occlusion: average hold occlusion is 50.53% for hands and 2.19% for feet [PAGE 6]. A single hand/foot ROI policy is therefore vetoed; the hand requires occlusion-aware temporal memory, while the foot requires toe-aware geometry.

Weather veto. The dataset contains no weather variable. Recordings took place indoors over four days; the only environmental disturbance mentioned is that “on one occasion, the gym was busy, resulting in background movement in some videos” [PAGE 4]. There is no rain, wind, sun angle, temperature, humidity, or outdoor friction measurement. Weather-based inference is therefore not merely weak; it is out-of-support. The correct adjudication is categorical: weather cannot be used as an explanatory or predictive layer for this dataset, and any such claim must be rejected before model comparison. The valid cross-layer variables are wall geometry, camera angle, keypoint convention, occlusion, clothing, and background motion.

The adjudication order is: first veto invalid geometry; second veto keypoint-convention mismatch; third veto environmental variables with no support; then evaluate the remaining temporal model. This order matters because a model can appear “less accurate” when the real cause is ankle-based foot geometry, and a model can appear “robust” when the real cause is a clean indoor wall with a perpendicular camera.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto 1: keypoint-convention counterfactual. Replace YOLOv8-pose X’s ankle-based foot keypoint with a toe keypoint and retain the same temporal rule. Verifiable prediction: foot accuracy should move from 76.8% toward the 91.9%–94.5% range observed for MediaPipe and ViTPose, and precision should improve because the large downward-shifted ankle ROI is no longer needed [PAGE 9]. The source supports the mechanism: toe location permits a small margin, while ankle-only models require a large area [PAGE 7], and YOLOv8’s foot weakness is attributed to ankle keypoints [PAGE 10]. Veto condition: if a toe-keypoint retrain does not improve foot precision or false-positive rate, the stated mechanism is falsified.

Veto 2: temporal-strictness counterfactual. Re-score the same predictions at \(\mathrm{tIoU}>0.5\) instead of \(\mathrm{tIoU}>0.0\). Verifiable prediction: all models lose accuracy and sensitivity, with ViTPose L moving from 86.6% to 69.3% overall, MediaPipe H from 83.5% to 68.2%, and YOLOv8-pose X from 75.3% to 62.8%; the exact-time sensitivities become 75.7%, 75.7%, and 79.7%, respectively [PAGE 9]. The paper explicitly frames the 0.0 threshold as useful when temporal information can be mitigated, and the 0.5 threshold as better for exact-time applications [PAGE 8]. Veto condition: if exact-time scoring does not degrade materially, the claimed distinction between “used holds” and “timed hold use” is not supported.

Veto 3: occlusion-failure counterfactual. Deploy MediaPipe H without a fallback in frames where the climber’s head is hidden by the upper body. Verifiable prediction: MediaPipe will show long pose-loss runs in those segments, including “more than 100 consecutive frames in three cases,” with video-level accuracies of 63.3%, 69.8%, and 72.3% in those cases [PAGE 10]. The source identifies the failure context: the climber is higher on the wall and looking down at the feet [PAGE 10]. A fallback using ViTPose L, temporal keypoint memory, or a second camera should reduce missing detections; ViTPose L is described as “the most accurate model with rare failure in detecting a pose,” though it processes frames nearly twice as slowly as MediaPipe [PAGE 10]. Veto condition: if a head-visible-only evaluation does not improve MediaPipe’s missing-detection rate, the occlusion explanation is incomplete. A related route-level veto is also verifiable: evaluating only the orange route should lower hand accuracy relative to the green route, because the green route’s dynamic movements reduce hand occlusion, and the paper predicts better green-route accuracy for all models [PAGE 10].
</RLVR_COUNTERFACTUAL_VETOES>