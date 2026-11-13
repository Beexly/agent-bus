---
source: "2026 - Deep Learning Based Illegal Bowling Action Detection - Sutradhar et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 13
model: baidu/ernie-5.5-flash-preview:free
words: 7733
---

<NATIVE_REASONING>
The user wants me to analyze this academic paper about deep learning-based illegal bowling action detection in cricket, using the GSE + GSI Frontier Reasoning Foundry framework. Let me understand what's being asked.

This is a legitimate academic/scientific analysis task. The paper is about using computer vision (MediaPipe pose estimation + RT-DETR object detection) to detect "chucking" (illegal bowling) in cricket, where the elbow extension exceeds 15 degrees.

The framework asks me to produce a structured analysis with these XML sections:
1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

The invariants:
1. ZERO BETTING LINES - fine, I won't mention betting/odds
2. ZERO TOY EQUATIONS - use formal LaTeX, SI/information/probability units, assumptions, exact singularity/breakdown regimes, cite exact [PAGE N] markers and verbatim quotes
3. >= 1,000-WORD DEPTH across those exact XML sections

This is a legitimate scientific/technical analysis of a computer vision paper applied to a sports biomechanics problem. There's nothing harmful here. The "GSE + GSI Frontier Reasoning Foundry" framing is unusual but the actual task is a rigorous academic critique/analysis of a published paper. This is fine.

Let me actually engage with the paper's substance. This requires real analysis. Let me think about the actual technical content.

The paper proposes:
- Dataset: 62 videos, 11 male bowlers, 3 angles (front/back/side), 36 labeled, 12 test videos from 4 bowlers, 50 training
- Pipeline: 
  1. Shoulder frame extraction via MediaPipe (frame where arm angle closest to 270°)
  2. Release frame extraction via RT-DETR (object detection, manually annotated via Roboflow, YOLOv8/RT-DETR trained)
  3. Elbow flexion measurement at both frames via MediaPipe
  4. Decision: if |flexion difference| > 15°, illegal

Key equations:
- Eq 1: Fi = argmin_i |Ai - 270| (shoulder frame)
- Threshold: |θ_release - θ_shoulder| > 15° → illegal
- Evaluation metrics: Accuracy, Precision, Recall, F1, TPR, FPR, MCC

Results:
- Best: MediaPipe + RT-DETR: Accuracy 91.96%, Precision 87.50%, Recall 100%, F1 93.33%, TPR 100%, FPR 20%, MCC 0.8367
- RT-DETR release frame detection: 94.6% accuracy, 95.0% mAP
- YOLO variants: v5 85.9% → v11 91.0%

Now let me do REAL critical analysis. This is where I need to be rigorous.

Critical issues I can identify:

1. **Statistical power / sample size**: 12 test videos from 4 bowlers. With accuracy 91.96%, that's 11/12 correct. The "100% TPR" is based on a tiny number of positive cases. If there were, say, 6 illegal actions in the test set, 100% recall = 6/6. This has enormous confidence intervals. Let me compute: with n=12, a 91.96% accuracy = 11.03... wait, 11/12 = 91.67%, 12/12 = 100%. Hmm, 91.96% doesn't divide evenly into 12. Actually 0.9196 × 12 = 11.03. That's odd. Let me think — maybe the test set is different from the 12 videos mentioned, or maybe there's per-frame or per-delivery counting. Actually the abstract says accuracy of 91.96%. 91.96% of 12 = 11.03. That doesn't work cleanly. Let me reconsider. Actually maybe the metric is computed differently. Precision 87.50% = 7/8. Recall 100% = 8/8 (all positives caught) — so if TP=7, FN=1, that's recall 7/8 = 87.5%, not 100%. Wait, let me recompute.

Actually, precision = TP/(TP+FP) = 87.50% and recall = TP/(TP+FN) = 100%.
If recall = 100%, FN = 0. So all actual positives were caught.
Precision = 87.5% = 7/8, meaning TP/(TP+FP) = 7/8, so if TP=7, FP=1.
Then accuracy = (TP+TN)/(TP+TN+FP+FN) = 91.96%.
With TP=7, FP=1, FN=0, we need (7+TN)/(7+TN+1+0) = 0.9196.
(7+TN)/(8+TN) = 0.9196
7+TN = 0.9196(8+TN)
7+TN = 7.3568 + 0.9196 TN
TN - 0.9196 TN = 7.3568 - 7
0.0804 TN = 0.3568
TN = 4.44

That's not an integer. So there's an inconsistency. Let me try TP=7, and see. Hmm. Actually the F1 = 2·(0.875·1)/(0.875+1) = 2·0.875/1.875 = 1.75/1.875 = 0.9333. Yes F1 = 93.33% matches precision 87.5% and recall 100%. Good.

MCC = (TP·TN - FP·FN)/sqrt((TP+FP)(TP+FN)(TN+FP)(TN+FN))
With FN=0: MCC = (TP·TN)/sqrt((TP+FP)(TP)(TN+FP)(TN)) = (TP·TN)/(TN·sqrt((TP+FP)·TP))... wait let me just plug in.
= (TP·TN - 0)/sqrt((TP+FP)(TP+0)(TN+FP)(TN+0))
= (TP·TN)/sqrt((TP+FP)·TP·(TN+FP)·TN)
= (TP·TN)/(sqrt(TP)·sqrt(TN)·sqrt(TP+FP)·sqrt(TN+FP))
= (sqrt(TP)·sqrt(TN))/(sqrt(TP+FP)·sqrt(TN+FP))
= sqrt(TP·TN / ((TP+FP)(TN+FP)))

MCC = 0.8367, so MCC² = 0.7001.
TP·TN/((TP+FP)(TN+FP)) = 0.7001
With TP/(TP+FP) = 0.875:
0.875 · TN/(TN+FP) = 0.7001
TN/(TN+FP) = 0.8001
If TP=7, FP=1: TN/(TN+1) = 0.8001 → TN = 0.8001 TN + 0.8001 → 0.1999 TN = 0.8001 → TN = 4.003 ≈ 4.
So TN=4, FP=1, TP=7, FN=0. Total = 12. 
Accuracy = (7+4)/12 = 11/12 = 91.666...% = 91.67%, not 91.96%.

Hmm, so the reported 91.96% is inconsistent with TP=7, TN=4, FP=1, FN=0. The others (precision 87.5%, recall 100%, F1 93.33%, MCC 0.8367) are all consistent with TP=7, TN=4, FP=1, FN=0 EXCEPT accuracy which should be 91.67%.

So there's a ~0.3 percentage point discrepancy in the reported accuracy. This is a real finding — an internal numerical inconsistency. 91.96% appears to be either a typo or computed on a different denominator. This is exactly the kind of gray-zone audit I should flag. Actually let me double check the MCC with TP=7,TN=4,FP=1,FN=0:
MCC = (7·4 - 1·0)/sqrt((7+1)(7+0)(4+1)(4+0)) = 28/sqrt(8·7·5·4) = 28/sqrt(1120) = 28/33.466 = 0.8367. ✓ 

So MCC = 0.8367 confirms TP=7, TN=4, FP=1, FN=0 exactly. And that gives accuracy 11/12 = 91.67%. The paper reports 91.96%. So 91.96% is inconsistent. Good catch — I'll flag this.

Wait, but also note the paper's Table 4 shows Mediapipe+RT-DETR: Accuracy 0.9196, Precision 0.875, Recall 1, F1 0.9333, TPR 1, FPR 0.2, MCC 0.8367. FPR = FP/(FP+TN) = 1/(1+4) = 1/5 = 0.2. ✓ Yes! FPR = 20% confirms FP=1, TN=4. So the confusion matrix is definitively TP=7, TN=4, FP=1, FN=0. Total = 12 test cases. And accuracy = 11/12 = 91.67%, but they report 91.96%. 

So the 91.96% is a genuine error. Either it should be 91.67%, or the accuracy was computed on a different (larger) test set. This is a solid finding for the audit.

Also note: the abstract and intro say "accuracy of 91.96%" and "true positive rate of 100%". The conclusion says "true positive rate of 100% and an accuracy of 90%". So even within the paper there's inconsistency: 91.96% vs 90%. Another internal inconsistency.

2. **The 15° threshold and biomechanics**: The ICC rule concerns elbow extension (straightening) during the delivery, specifically the maximum elbow extension measured relative to a "zero" (fully straightened arm). The 15° tolerance is the allowed amount of extension. But the paper conflates several things:
   - ICC's actual protocol measures the angle between the upper arm and forearm at the point of maximum extension, compared to the angle when the arm is fully straight. The 15° is the tolerance for extension.
   - The paper measures "elbow flexion" at the shoulder frame and release frame and takes the difference.
   
   The paper's own text [PAGE 6] says: "the elbow extension exceeds 15°" — but the method measures the *difference* between two frames' elbow angles, not the extension from a fully-extended reference. This is a conceptual mismatch. The ICC method is not about frame-to-frame difference; it's about how much the elbow straightens beyond the legal 15° during the arm's rotation. Actually, let me be careful. The ICC definition: the bowler's action is illegal if the elbow "straightens" (extends) by more than 15° during the delivery. This is measured as the difference between the angle of the arm at the shoulder (highest point / when arm is at vertical) and at the point where the arm is horizontal (release zone). Actually the historical definition is the angle between the line joining the shoulder and the elbow and the line joining elbow to the wrist at two points: when the arm is vertical (shoulder) and when it's horizontal (around release). The elbow should not straighten by more than 15° between these two positions.

   So actually the paper's approach — comparing elbow angle at "shoulder frame" (arm vertical, 270°) and at release — is roughly aligned with the ICC concept. But there are important biomechanical subtleties: 
   - The ICC protocol measures across MANY deliveries (the bowler bowls a series) and takes the median/max, with sensor data (inertial). 
   - The 2D projection problem: measuring a 3D elbow angle from 2D video, especially from "front, back, side" single-camera views, introduces large projection errors. The elbow angle in a 2D plane depends heavily on camera viewpoint relative to the plane of arm motion. This is a critical breakdown regime.

3. **2D vs 3D angle measurement**: This is the biggest technical flaw. MediaPipe outputs 2D landmarks (or 2.5D with depth). The elbow angle computed from 2D landmarks is the *projected* angle, not the true 3D anatomical angle. For a bowling action, the arm rotates in a plane that's rarely parallel to the image plane. A 15° threshold measured on a 2D projection could easily be swamped by projection error of ±10-20° depending on viewpoint. This means the effective measurement uncertainty may exceed the decision threshold — a fatal SNR problem. I should formalize this.

4. **Class balance and confidence intervals**: With 7 positives and 5 negatives in test, the recall of 100% (7/7) has a 95% Wilson/Clopper-Pearson lower bound. For 7/7, the one-sided 95% lower confidence bound is about 0.59 (Clopper-Pearson: for x=n=7, lower bound = 0.025^(1/7) ≈ ... actually the lower bound for 7/7 at 95% two-sided is (0.025)^(1/7)? Let me compute. For a proportion with x=n successes, the Clopper-Pearson lower bound = (α/2)^(1/n) for the lower... Actually for x = n, lower bound = (α/2)^(1/n). With α=0.05, α/2 = 0.025, n=7: 0.025^(1/7) = exp(ln(0.025)/7) = exp(-3.689/7) = exp(-0.527) = 0.590. So the 95% CI lower bound for recall is ~0.59. So "100% recall" is really "somewhere between 59% and 100%". This is a huge deal for the claim of reliability. I'll formalize.

Similarly accuracy 11/12: 95% CI via Wilson is roughly [0.62, 0.99]. So the accuracy could plausibly be as low as ~62%.

5. **Data leakage / independence**: The paper says test bowlers are exclusively in test set (4 unique bowlers), which is good — prevents per-bowler leakage. But the shoulder and release frames from the same video are correlated. Also, the YOLOv8/RT-DETR is trained on unlabeled videos and Roboflow annotations; need to check if test videos leaked into release-frame detector training. The paper says "unlabeled videos are used to train the model" for YOLOv8 — it's not fully clear the test videos were excluded from release-frame detector training. Potential leakage.

6. **The shoulder frame ideal of 270°**: Eq 1 assumes the hand makes 270° with the shoulder at the top of the action. But this "270°" is a specific gesture convention (Figure 4/7). Different bowlers, side-arm actions, etc., won't hit 270°. The argmin will always find *some* frame, even if no frame is close to 270°, so there's no confidence gating — if the bowler never reaches 270°, the system silently picks the closest wrong frame. This is a failure mode.

7. **RT-DETR for release frame**: The release frame is a single temporal instant. Framing it as object detection (detecting the ball at release) is indirect. The "frame with highest probability of being the release frame" — need to understand what object is detected. This is a bit hand-wavy.

8. **Generalization**: 11 male right-handed conventional bowlers, no female, no left-arm, no side-arm. The claims of real-time deployment are premature. Controlled dataset, lab-like conditions, not actual match broadcast footage with motion blur, occlusion, varying resolution.

9. **Real-time claim**: MediaPipe is fast, but the full pipeline (video crop, RT-DETR per-frame inference, MediaPipe) — RT-DETR is heavier. "few seconds for inference" contradicts "real-time" (real-time usually means <33ms for 30fps). "A few seconds" per delivery might be acceptable between deliveries but is not truly real-time.

Let me also think about the "weather/physical veto" — the CROSS_LAYER_VETO_ADJUDICATION section asks for physical/biomechanical/weather veto proof. Weather: outdoor cricket is affected by light conditions (day/night, overcast), which affect pose estimation and ball detection. Motion blur at high bowling speeds (a fast bowler's arm moves at ~100+ mph ball speed, angular velocity of the arm is very high — the arm sweeps ~180° in a fraction of a second). At the release, the arm's angular velocity could be enormous; frame rate matters. If video is 30fps, the temporal resolution is 33ms; the arm near release could move many degrees between frames. This is a critical temporal sampling issue.

Let me estimate the angular velocity. A fast bowler's arm rotates roughly 180° in the delivery arc. The delivery arc (from shoulder-vertical to release) takes maybe 0.1-0.15 seconds. So angular velocity ≈ 180°/0.12s ≈ 1500°/s. At 30 fps (33.3 ms/frame), that's ~50° per frame near the middle of the arc. Wait, that's huge. Actually the fastest part is near release. If the arm moves 50° between consecutive frames, then pinpointing the "release frame" to within one frame gives ±50° temporal uncertainty, which utterly swamps the 15° threshold. Even at 240 fps (high-speed), 4.17 ms/frame → ~6.25°/frame. So frame rate is a first-order concern. This is a great quantitative veto point.

Actually let me reconsider the arm angular velocity. Ball release speed for a fast bowler ~ 140 km/h = 38.9 m/s. But the arm's angular velocity about the shoulder: the arm length ~0.6-0.7 m. The hand speed at release ≈ ball speed ≈ 38.9 m/s (roughly, plus run-up contributes). Angular velocity ω = v/r = 38.9/0.65 ≈ 60 rad/s = 3437°/s. That's very high. At 30 fps, per-frame arm rotation ≈ 3437/30 ≈ 114°/frame near release. That's clearly impossible to resolve the exact release frame. Even at 240 fps: 3437/240 ≈ 14.3°/frame. So the release frame localization error alone (14°/frame at 240fps, and consumer cricket video is usually 25-50 fps) is on the order of the threshold itself. This is a devastating quantitative critique for high-speed bowling. Spinners are slower, so it's less bad for them, but still.

Hmm, but the release frame is when the ball leaves the hand, and the elbow angle at that instant vs at shoulder — the measurement is of the angle at two instants, not the velocity. Still, if you can't localize the release instant precisely in time, and the angle is changing rapidly, then temporal localization error translates directly to angle error. So Δθ_error ≈ ω · Δt_localization. This is the key equation. Good.

Let me formalize the projection error too. If the true 3D elbow angle is θ_3D, and the plane of the arm makes angle φ with the image plane, the projected 2D angle θ_2D is a nonlinear function. For small out-of-plane tilts, error grows with the out-of-plane component. A rigorous treatment: the cosine of the angle is computed from dot product of 2D vectors (projections of upper arm and forearm). If the true 3D vectors are u, v with angle θ, and we project onto image plane, the projected vectors u', v' give a different angle. The error depends on the out-of-plane components. For a plane tilted by φ about the bisector, the projected angle can differ substantially.

Now, let me also think about the "counter-trap" and "clock" in the RECURSIVE_THEORY_OF_MIND section. This section is about "Crisis habit regression vs counter-trap vs clock." This framing seems to be about: in a crisis (e.g., a bowler accused of chucking), how do the stakeholders (bowler, team, umpire, ICC) behave — do they regress to habit (blame the technology), set counter-traps (demand sensor confirmation), and race against the clock (the 21-day lab process, or the immediate match decision)? I'll interpret it as multi-agent behavioral modeling: the bowler's incentive to disguise action, umpire's caution, the system's role. And the "clock" is the temporal-decision constraint (real-time vs post-hoc 21-day lab).

RETROCAUSAL_GENEALOGY: the lineage of throwing detection — from Wixted/Portus wearable sensors [12,23], Ferdinands & Kersting biomechanics [25], Spratford et al. [2] on illegal actions and performance, to vision-based approaches. Multi-week traps: the "multi-week" refers to the 21-day lab analysis cycle, and how a vision shortcut might create regressions. Also the historical lineage of chucking controversies (Muralitharan, Shoaib Akhtar, etc.) — though the paper doesn't name them, I can note the scientific lineage. But I should be careful to cite the paper's references. Actually the "retro-causal genealogy" — I'll trace the scientific dependencies and the trap of assuming a 2-frame reduction captures what took the biomechanics community decades (and the 21-day protocol) to standardize.

RLVR_COUNTERFACTUAL_VETOES: RLVR = Reinforcement Learning from Verifiable Rewards. The idea: propose 3 verifiable veto scenarios with predictions — counterfactual scenarios where the method would fail and how we'd verify. E.g.:
1. Left-arm bowler test → predict failure (not in training).
2. High-speed express bowler with 25fps footage → predict angle measurement breakdown.
3. Camera angle off-axis (bowler's arm plane not parallel to image plane) → predict projection error exceeds threshold.

Let me make these "verifiable" with concrete predicted numbers.

Now let me also address the invariant about units. I should use SI/information/probability units: degrees, radians, rad/s, frames, bits (for information), probability (nats or bits). 

Let me structure the response. I need >= 1000 words total across the sections, with THINK_TRACE >= 400 words. Let me write substantively.

Let me make sure I cite exact page markers and verbatim quotes. Key quotes:
- [PAGE 1]: "the first AI-based computer vision method for detecting illegal bowling actions in cricket." and "achieved a high true positive rate"
- [PAGE 2]: "A bowl is considered chucking if the angle difference between the elbow bend at the shoulder level and the elbow bend at the time of release is more than 15◦"
- [PAGE 2]: "we leverage pose estimation and other computer vision techniques"
- [PAGE 3]: "the bowler is required to bowl a series of deliveries monitored with motion capture, radar, and high-speed video. The analysis is conducted by a team of 5 people and takes 21 days"
- [PAGE 3]: "±16g 3D accelerometer and a ±2000 deg/s 3D gyroscope"
- [PAGE 5]: "Fi = arg min i |Ai −270|" (Equation 1)
- [PAGE 5]: "In a cricket match, a bowler can bowl a delivery without bending less than 15◦" (page 3 actually)
- [PAGE 5]: "the hand makes a 270◦angle with the shoulders while bowling"
- [PAGE 6]: "the absolute difference between the measured flexions is calculated. If the difference is above 15◦, the bowling action is marked illegal."
- [PAGE 6]: "According to ICC regulations, a bowling action is deemed illegal if the elbow extension exceeds 15◦[12]"
- [PAGE 8]: metric equations
- [PAGE 9]: "RT-DETR achieved the highest performance, obtaining an accuracy of 94.6% and an mAP of 95.0%"
- [PAGE 10]: "achieving an accuracy of 91.96%, precision of 87.50%, recall of 100%, F1-score of 93.33%, TPR of 100%, FPR of 20%, and an MCC of 0.8367"
- [PAGE 10]: "20% of illegal actions were incorrectly classified as legal" — wait, this is in [PAGE 11]. Let me check. Actually [PAGE 11]: "Furthermore, 20% of illegal actions were incorrectly classified as legal, indicating that the system could benefit from further refinement". 

Wait, this is a contradiction! [PAGE 10] says recall = 100% (all illegal actions correctly identified, FN=0). But [PAGE 11] says "20% of illegal actions were incorrectly classified as legal" (i.e., 20% false negatives). These directly contradict. If recall = 100%, FN = 0, so 0% of illegal actions were missed. But [PAGE 11] says 20% of illegal actions were classified as legal. This is a glaring internal contradiction. Also [PAGE 10] says "20% of illegal actions were incorrectly classified as legal" — let me re-read.

[PAGE 10]: "While high recall ensures that all illegal actions are detected, the challenge lies in minimizing false positives without increasing the risk of false negatives, which can have significant consequences for players and match outcomes. In this case, a false negative occurs when a legal delivery is incorrectly classified as illegal."

Wait — this definition of false negative is WRONG. A false negative is when an actual positive (illegal) is classified as negative (legal). The paper says "a false negative occurs when a legal delivery is incorrectly classified as illegal" — that's actually a FALSE POSITIVE (legal classified as illegal). So the paper has the definitions of false positive and false negative swapped/confused on [PAGE 10]. This is a conceptual error in the paper.

Let me re-read [PAGE 10]: "Although the model produces a small number of false positives, reflected by a precision of 87.50%, these cases can subsequently be verified..." OK so here they say false positives relate to precision 87.5% (FP=1). That's consistent with FP being legal-classified-as-illegal... no wait. Precision = TP/(TP+FP). FP = negative (legal) classified as positive (illegal). So FP = legal classified as illegal. And they say "these cases [false positives] can subsequently be verified through biomechanical assessment, whereas undetected illegal deliveries may have irreversible consequences." OK so here they correctly treat FP as the benign ones and FN (undetected illegal) as the dangerous ones. But then in the next paragraph they write: "a false negative occurs when a legal delivery is incorrectly classified as illegal." That's the definition of a false positive, not false negative. So [PAGE 10] contains a definitional error (swaps FP and FN). And "minimizing false negatives should be a priority" — combined with FPR=20%, the priority should be minimizing false positives (since FP is what they have). The confusion propagates.

And then [PAGE 11]: "20% of illegal actions were incorrectly classified as legal" — this describes FN (missed illegal), claiming 20% FN rate. But Table 4 shows recall = 100% (FN=0) and FPR = 20% (FP rate). So the "20%" is the FALSE POSITIVE rate (FPR = FP/(FP+TN) = 1/5 = 20%), but [PAGE 11] mislabels it as "20% of illegal actions incorrectly classified as legal" (which would be the false NEGATIVE rate). This is a direct misreading: they took FPR = 20% and described it as the false negative rate. This is a significant error.

So I've found multiple internal inconsistencies:
(a) Accuracy 91.96% vs correct 91.67% (11/12) — from the confusion matrix TP=7,TN=4,FP=1,FN=0.
(b) Conclusion says accuracy "90%" [PAGE 11] vs 91.96% elsewhere.
(c) [PAGE 10] misdefines false negative ("a false negative occurs when a legal delivery is incorrectly classified as illegal" — that's a false positive).
(d) [PAGE 11] "20% of illegal actions were incorrectly classified as legal" contradicts recall=100%; the 20% is actually FPR (false positives among legal), not missed illegals.

These are excellent, concrete audit findings. Let me make sure I'm reading correctly.

Re-reading [PAGE 10-11] carefully:

[PAGE 10]: "The perfect recall obtained by the MediaPipe–RT-DETR pipeline indicates that all illegal bowling actions in the test set were correctly identified. From an umpiring perspective, this characteristic is highly desirable because failing to detect an illegal bowling action may directly influence the fairness of a match. Although the model produces a small number of false positives, reflected by a precision of 87.50%, these cases can subsequently be verified through biomechanical assessment, whereas undetected illegal deliveries may have irreversible consequences during gameplay."

OK this paragraph is correct: perfect recall = all illegal detected; false positives = the errors (legal flagged illegal), which are verifiable. Good.

"In this case, a false negative occurs when a legal delivery is incorrectly classified as illegal. If the umpire deems the delivery illegal, the bowler could be unfairly penalized with a no-ball or have a valid wicket revoked. Frequent false negatives could lead to disputes... Therefore, minimizing false negatives should be a priority in the upcoming research."

Here's the error: "a false negative occurs when a legal delivery is incorrectly classified as illegal" — NO, that's a false POSITIVE. A false negative = illegal classified as legal (missed). The consequences they describe (bowler penalized for a legal delivery) are indeed the consequences of a false positive. So they've mislabeled the concept. And then "minimizing false negatives should be a priority" — given their confusion, they mean minimizing the false alarms. But the term is wrong.

Then [PAGE 11]: "Furthermore, 20% of illegal actions were incorrectly classified as legal, indicating that the system could benefit from further refinement to enhance its reliability."

"20% of illegal actions incorrectly classified as legal" = false negatives = 20% = miss rate. But recall = 100% means 0% of illegal actions classified as legal. Contradiction. The 20% figure is the FPR (fraction of legal actions classified as illegal = FP/(FP+TN) = 1/5 = 20%). So [PAGE 11] describes the false positive rate but calls it the false negative rate. Direct contradiction with recall=100%.

Great, these are solid. This is exactly the kind of rigorous source audit the framework wants.

Now let me also verify the Eq 2 typo: Accuracy = (TP + TN)/(TP + PP + TN + FN). "PP" should be "FP". Typo in the paper (PP instead of FP). Minor but worth noting for rigor.

Let me also reconsider the "270°" convention. In human pose, if the arm is raised straight up, the angle at the shoulder between the torso (pointing down) and the upper arm (pointing up) — depends on landmark convention. 270° suggests a reflex angle measurement. This is MediaPipe convention-dependent and fragile. Actually Figure 4 shows "Angle of different gestures with the shoulder" and they pick 270° as the bowling-relevant one. This is an empirical choice, not biomechanically derived, and may not generalize to side-arm or different arm-slot bowlers.

Now, let me think about the information-theoretic framing for the RLVR / information units. The decision rule threshold at 15° — the measurement channel from true elbow extension to measured 2D angle has noise (projection + temporal + pose-estimation jitter). The mutual information between the label and the measurement, or the effective SNR. If noise σ ≈ 10-15° and threshold gap is 15°, then the discriminability d' is low. I can frame this as: for reliable binary decision, need the separation between legal and illegal class-conditional distributions to exceed the noise. If both classes cluster near the 15° boundary, error is high. This is a signal-detection-theory framing with units of standard deviations (or d').

Let me now also think about the "singularity/breakdown regimes" required by invariant 2:
- Projection singularity: when the arm's plane of motion is perpendicular to the image plane (arm moving toward/away from camera), the 2D projected elbow angle collapses and becomes undefined/degenerate. Specifically when the forearm and upper arm project to nearly collinear or the elbow landmark is occluded.
- Temporal singularity: at release, angular velocity peaks; frame discretization error Δθ = ω·Δt diverges as needed precision → frame interval.
- Threshold boundary: decisions near 15° have maximal error (the class-conditional PDFs overlap most there).
- Small-sample singularity: with n=7 positives, the recall estimator has infinite relative variance at 100% (can't compute a symmetric CI; only one-sided bounds).

Great, I have rich material. Let me write the six sections with rigor, formal LaTeX, units, page citations, verbatim quotes, and the numeric derivations. I'll aim for well over 1000 words total.

Let me be careful about LaTeX formatting — I'll use inline math with proper notation. Since this is a chat CLI, I'll use standard markdown/LaTeX notation.

Let me draft.

For THINK_TRACE (>=400 words): I'll walk through the derivation of the confusion matrix from the reported metrics, the internal inconsistencies, the projection and temporal error analysis, the small-sample statistics, and the gray-zone audit.

For SOURCE_OPERATORS_AND_EQUATIONS: formal statement of Eq 1, the decision operator, the ICC definition vs the paper's operationalization, the projection error operator, temporal sampling, the metrics with the reconstructed confusion matrix, units throughout, breakdown regimes.

For RETROCAUSAL_GENEALOGY: lineage from [12] Wixted/Portus wearable sensors, [23] inertial orientation, [25] Ferdinands & Kersting biomechanics, [2] Spratford, to this vision approach; the multi-week trap (21-day lab cycle) and how the paper's shortcut could regress the field.

For RECURSIVE_THEORY_OF_MIND: multi-agent crisis modeling — bowler (incentive to disguise), umpire (risk-averse, the false-positive/false-negative asymmetry), ICC (lab authority), the system as a proxy. Habit regression (falling back to suspicion), counter-trap (demand sensor confirmation), clock (real-time decision vs 21-day process). The error rates map onto each agent's payoff.

For CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto. Biomechanical: 2D projection of 3D angle. Weather: lighting, motion blur. Temporal: frame rate. I'll prove the veto for express pace.

For RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios with predictions.

Let me write it all out now. I'll be quantitative and cite pages.

Let me reconsider the numbers once more for the confusion matrix to be airtight:
- Precision = 0.875 = TP/(TP+FP)
- Recall/TPR = 1.0 = TP/(TP+FN) → FN = 0
- FPR = 0.2 = FP/(FP+TN)
- MCC = 0.8367

From precision 0.875: possible (TP,FP): (7,1) gives 0.875. 
Check FPR: FP/(FP+TN) = 1/(1+TN) = 0.2 → 1+TN = 5 → TN = 4. ✓
Check MCC: (7·4 − 1·0)/√((7+1)(7+0)(4+1)(4+0)) = 28/√(8·7·5·4)=28/√1120=28/33.466=0.8367 ✓
Total = TP+FP+TN+FN = 7+1+4+0 = 12 ✓ (matches "12 videos for testing" [PAGE 6 Table 2])
Accuracy = (TP+TN)/12 = 11/12 = 0.9167 = 91.67%. Paper says 0.9196. Discrepancy confirmed.

Also TPR in Table 4 = 1 (100%), consistent.
F1 = 2·(0.875·1)/(0.875+1) = 1.75/1.875 = 0.9333 ✓.

So the only inconsistent figure is accuracy (91.96% vs 91.67%) and the conclusion's "90%". Everything else pins the confusion matrix to (7,1,4,0). Rock solid.

Wilson 95% CI for accuracy 11/12 = 0.9167: 
Wilson center = (p + z²/2n)/(1+z²/n), z=1.96, n=12, p=0.9167.
z²=3.8416, z²/2n = 3.8416/24 = 0.1601, z²/n = 0.3201.
center = (0.9167+0.1601)/(1.3201) = 1.0768/1.3201 = 0.8157.
half-width = z/(1+z²/n) · sqrt(p(1-p)/n + z²/4n²)
= 1.96/1.3201 · sqrt(0.9167·0.0833/12 + 3.8416/(4·144))
= 1.4846 · sqrt(0.006366 + 0.006670)
= 1.4846 · sqrt(0.013036)
= 1.4846 · 0.11418 = 0.1695.
CI = [0.8157 − 0.1695, 0.8157 + 0.1695] = [0.646, 0.985]. So 95% CI ≈ [64.6%, 98.5%]. 

Clopper-Pearson for recall 7/7: lower bound = (α/2)^(1/n) with α=0.05 two-sided → 0.025^(1/7).
ln 0.025 = -3.6889, /7 = -0.52699, exp = 0.5904. So 95% CI recall = [59.0%, 100%]. Good.

For FPR 1/5 (one FP out of 5 negatives): CP interval is wide, [0.5%, 71.6%] roughly. Actually for 1/5: lower and upper Clopper-Pearson. Point estimate 0.2, 95% CI approximately [0.0051, 0.716]. Very wide. I'll note it.

Angular velocity estimate: I'll present ω = v_ball / L_arm as an order-of-magnitude. v ≈ 40 m/s (express), L ≈ 0.65 m → ω ≈ 61.5 rad/s ≈ 3525°/s. Per frame at 30 fps: Δt=33.3 ms → Δθ ≈ 117°/frame. At 60 fps: 58.8°/frame. At 240 fps: 14.7°/frame. Even for a spinner at v ≈ 20 m/s (release), ω ≈ 30.8 rad/s ≈ 1763°/s; at 60 fps → 29.4°/frame; at 240 fps → 7.3°/frame.

So temporal localization error Δθ = ω·Δt. For the 15° threshold to be resolved to, say, ±3° (5× margin), need Δt ≤ 3/ω. For express at 3525°/s: Δt ≤ 0.85 ms → ~1176 fps. That's beyond consumer broadcast. This is the veto.

Projection error: I'll give the model. Let true 3D unit vectors along upper arm a and forearm b, with cos θ3D = a·b. Camera projects onto image plane; measured cos θ2D = (P a · P b)/(|Pa||Pb|) where P is projection. If the elbow's motion plane is tilted by angle ψ relative to image plane (i.e., the plane normal makes angle ψ with the camera axis), the out-of-plane components cause |θ2D − θ3D| to grow. Worst case when the arm moves along the camera axis (ψ → 90°), the projected angle → degenerate. I'll state that for ψ beyond ~30-45°, projection error can exceed 15°, matching the threshold — a breakdown regime.

Now write. Let me be mindful of length and quality. I'll write formal but readable. Total should be well over 1000 words; THINK_TRACE alone 400+.

One more: the "±2000 deg/s 3D gyroscope" [PAGE 3] — this is the sensor range in the ICC lab method. Interesting: the gyroscope saturates at 2000 deg/s, but I estimated arm ω ≈ 3525°/s for express pace. So even the reference sensor would clip for express bowlers — though the elbow's angular velocity (forearm relative to upper arm) is different from the whole-arm-about-shoulder ω. The elbow flexion rate is what the gyroscope measures at the elbow. Still, this is a nice cross-check: the sensor range (2000°/s) hints that relevant angular velocities are on the order of thousands of deg/s, supporting my temporal-sampling critique. Good — I'll cite [PAGE 3] "±2000 deg/s 3D gyroscope" as corroboration that elbow angular rates approach the thousands-of-deg/s regime, which at broadcast frame rates is severely undersampled.

Let me write the final answer.

I should not create any files — this is an analysis response. Just output the XML sections as text. Good.

Let me write it now, being thorough.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation & gray-zone audit.

Hop 1 — Reverse-engineer the ground-truth confusion matrix. The paper never prints TP/TN/FP/FN, but Table 4 [PAGE 11] pins them exactly. For MediaPipe–RT-DETR: Precision $=0.875$, Recall/TPR $=1$, FPR $=0.2$, MCC $=0.8367$, F1 $=0.9333$. Recall $=1 \Rightarrow FN=0$. Precision $=TP/(TP+FP)=0.875=7/8 \Rightarrow (TP,FP)=(7,1)$. FPR $=FP/(FP+TN)=1/(1+TN)=0.2 \Rightarrow TN=4$. Cross-check MCC: $(7\cdot4-1\cdot0)/\sqrt{8\cdot7\cdot5\cdot4}=28/\sqrt{1120}=0.8367$ ✓. Sum $=12$, matching "Videos for testing 12" [PAGE 6, Table 2]. So the operating point is unambiguously $(TP,TN,FP,FN)=(7,4,1,0)$.

Hop 2 — Test the reported accuracy against that matrix. $(TP+TN)/12 = 11/12 = 0.9167$. The paper reports $0.9196$ [PAGE 10] and "accuracy of 90%" [PAGE 11]. Three different numbers for one matrix. $91.96\%$ is arithmetically inconsistent with the very metrics (FPR, MCC, precision, recall) that share its table row; the internally consistent value is $91.67\%$. This is a first-order reporting defect, not a rounding artifact — $0.9196\times12=11.03$, a non-integer count.

Hop 3 — Audit the false-negative definition. [PAGE 10] states: "a false negative occurs when a legal delivery is incorrectly classified as illegal." That is the definition of a false *positive*. A false negative is an illegal delivery called legal (a missed chuck). The error then propagates: [PAGE 11] claims "20% of illegal actions were incorrectly classified as legal" — that is a 20% miss rate (FN rate), which directly contradicts the paper's own "Recall of 100%" [PAGE 10]. The $20\%$ is the *false-positive* rate ($1/5$), mislabeled as a false-negative rate. The authors inverted their own confusion matrix in prose while the numbers in Table 4 remain self-consistent.

Hop 4 — Gray-zone statistics. "Recall 100%" rests on $7$ positives. Clopper–Pearson one-parameter lower bound $=0.025^{1/7}=0.590$; the honest statement is $\text{Recall}\in[59\%,100\%]$ at 95%. Accuracy $11/12$ gives a Wilson 95% CI $\approx[64.6\%,98.5\%]$. FPR $1/5$ has a Clopper–Pearson 95% CI $\approx[0.5\%,71.6\%]$. Every headline metric is estimated on a sample too small to support the deployment claims.

Hop 5 — Physical gray zone. The whole pipeline reduces a 3D anatomical event to a 2D projected angle difference compared against a $15^\circ$ threshold [PAGE 6]. Two noise channels dominate: projection error (out-of-plane arm motion) and temporal sampling error (finite frame rate at high angular velocity). Both are quantified in the next section; both can individually exceed $15^\circ$. The system therefore operates below the noise floor of its own decision threshold for a meaningful class of real deliveries.

Hop 6 — Synthesis. The method is a reasonable proof-of-concept, but three of its load-bearing claims (91.96% accuracy, 100% recall as reliability, and the "20% FN" discussion) are internally inconsistent, and the measurement physics is under-resolved relative to the $15^\circ$ threshold. Confidence in the reported operating point should be low.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

Shoulder-frame operator (verbatim, Equation 1, [PAGE 5]):
$$F_i=\arg\min_i\,\bigl|A_i-270\bigr|$$
where $A_i$ is the MediaPipe-estimated arm–shoulder angle (degrees) at frame $i$. The target $270^\circ$ is asserted empirically: "the hand makes a 270° angle with the shoulders while bowling" [PAGE 5]. Assumption: at least one frame realizes $\approx270^\circ$. Breakdown: $\arg\min$ always returns *some* frame; there is no confidence gate. For a bowler who never approaches $270^\circ$ (side-arm, low arm-slot), the operator silently returns the least-wrong frame, injecting an unbounded bias $b=A_{F_i}-270$.

Decision operator (verbatim, [PAGE 6]):
$$\hat{y}=\begin{cases}\text{illegal}, & \lvert\theta_{\text{rel}}-\theta_{\text{sho}}\rvert>15^\circ\\[2pt]\text{legal}, & \text{otherwise}\end{cases}\qquad \theta\text{ in degrees.}$$
The ICC reference definition [PAGE 2]: "chucking ... if the angle difference between the elbow bend at the shoulder level and the elbow bend at the time of release is more than $15^\circ$." Note [PAGE 6] restates it as "elbow *extension* exceeds $15^\circ$" — the paper oscillates between "difference of flexion" and "extension," two distinct kinematic quantities.

Projection-error operator (breakdown regime). Let $\mathbf a,\mathbf b\in\mathbb R^3$ be unit vectors along upper arm and forearm, with true angle $\cos\theta_{3D}=\mathbf a\!\cdot\!\mathbf b$. A pinhole camera projects onto the image plane via $P$; the measured angle uses $\cos\theta_{2D}=\dfrac{(P\mathbf a)\!\cdot\!(P\mathbf b)}{\lVert P\mathbf a\rVert\,\lVert P\mathbf b\rVert}$. If the elbow's plane of motion is tilted by $\psi$ from the image plane, the error $\varepsilon_{\text{proj}}=\lvert\theta_{2D}-\theta_{3D}\rvert$ grows monotonically with $\psi$ and diverges as $\psi\to90^\circ$ (arm moving along the optical axis): the projected forearm and upper arm become collinear and $\theta_{2D}$ degenerates. For $\psi\gtrsim30^\circ\!-\!45^\circ$, $|\varepsilon_{\text{proj}}|$ can reach or exceed $15^\circ$ — i.e., the noise equals the threshold. Since the dataset uses discrete "front, back, side" views [PAGE 5], any delivery whose arm plane is not near-parallel to the chosen view lands in this regime.

Temporal-sampling operator (breakdown regime). Elbow angular rate scales as $\omega\approx v_{\text{hand}}/L_{\text{arm}}$. For express pace $v\approx40\ \mathrm{m\,s^{-1}}$, $L\approx0.65\ \mathrm m$: $\omega\approx61.5\ \mathrm{rad\,s^{-1}}\approx3.5\times10^{3}\ ^\circ\mathrm s^{-1}$. The angle error from localizing release to one frame is
$$\Delta\theta_{\text{temp}}=\omega\,\Delta t=\omega/f_{\text{fps}}.$$
At $f=30\ \mathrm{fps}$: $\Delta\theta\approx118^\circ$/frame; at $60\ \mathrm{fps}$: $\approx59^\circ$; at $240\ \mathrm{fps}$: $\approx15^\circ$. Corroboration from the ICC sensor spec: the lab gyroscope is a "$\pm2000\ \deg/\mathrm s$ 3D gyroscope" [PAGE 3], confirming that relevant angular rates sit in the $10^{3}\,^\circ\mathrm s^{-1}$ decade. To resolve $\pm3^\circ$ (a $5\times$ safety margin under the threshold) at express pace requires $f\gtrsim1.2\times10^{3}\ \mathrm{fps}$ — far above broadcast. Temporal sampling alone can exceed the $15^\circ$ decision boundary.

Metrics (Equations 2–8, [PAGE 8]) with reconstructed counts $(TP,TN,FP,FN)=(7,4,1,0)$:
- Accuracy $=\frac{TP+TN}{TP+FP+TN+FN}=\frac{11}{12}=0.9167$ (paper prints $0.9196$; Eq. 2 also has a typo, denominator written "$TP+PP+TN+FN$", i.e. $PP$ for $FP$).
- Precision $=7/8=0.875$; Recall/TPR $=7/7=1.000$; F1 $=0.9333$; FPR $=1/5=0.200$; MCC $=28/\sqrt{1120}=0.8367$.
Release-frame detector selection: "RT-DETR ... accuracy of 94.6% and an mAP of 95.0%" [PAGE 9]; ordering YOLOv5 $85.9\%\to$ YOLOv11 $91.0\%$ [PAGE 9].

Units ledger: angles in degrees ($^\circ$) / radians; angular rate in $\mathrm{rad\,s^{-1}}$ or $^\circ\mathrm s^{-1}$; time in s, frame interval in ms; probabilities dimensionless; MCC dimensionless $[-1,1]$.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Scientific lineage & multi-week traps.

The paper's authority claim — "the first AI-based computer vision method for detecting illegal bowling actions in cricket" [PAGE 1] — sits atop a two-decade sensor lineage it cites but does not supersede. The measurement backbone descends from Wixted, Portus, Spratford & James, "Detection of throwing in cricket using wearable sensors" [ref 12], and the inertial-orientation variant [ref 23]; the biomechanical definition of legality traces to Ferdinands & Kersting, "An evaluation of biomechanical measures of bowling action legality" [ref 25], and the performance-risk framing to Spratford et al. [ref 2]. Those works established that legality is a *3D, multi-delivery, sensor-referenced* quantity: the ICC lab protocol requires the bowler to "bowl a series of deliveries monitored with motion capture, radar, and high-speed video," analyzed by "a team of 5 people" over "21 days" [PAGE 3]. The genealogy matters because the present work compresses that entire measurement stack into two frames and one scalar difference — a reduction whose validity is assumed, not demonstrated.

The multi-week trap is twofold. First, an *epistemic* regression: the 21-day lab cycle exists precisely because single-frame or single-delivery judgments are unreliable (intra-bowler variance in elbow extension across deliveries is real biomechanics, not noise). A pipeline reporting 100% recall on 7 positives [PAGE 10] risks re-introducing the very overconfidence the 21-day protocol was designed to suppress. Second, a *comparative* vacuum: the authors concede "no other computer vision-based methods specifically address illegal bowling detection, a direct comparison ... is currently unavailable" [PAGE 11]. Absent a shared benchmark, apparent progress can be an artifact of an idiosyncratic 62-video corpus of "11 bowlers" that is "predominantly ... right-handed ... with conventional actions" [PAGE 1] — the trap of mistaking a narrow, self-labeled distribution for the sport's population. The vision lineage it does cite — no-ball foot tracking [ref 3], DRS ball-to-3D mapping [ref 4], delivery-length segmentation via RetinaNet/YOLO [ref 5] — all operate on slower, more camera-favorable events (crease line, ball bounce) than the fastest-moving joint in the delivery, so the transfer of confidence from those successes to elbow-angle measurement is unwarranted.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis-habit regression vs counter-trap vs clock.

Model the on-field "chucking crisis" as a four-agent game: Bowler ($B$), Umpire ($U$), ICC/Board ($I$), and the Detector ($D$) proposed here.

Crisis-habit regression ($B$, $U$). Under accusation, $B$ regresses to a rehearsed disposition (dispute, appeal, "action always looked like this"), and $U$ regresses to risk-aversion. The paper's own error geometry feeds this: with $(FP,FN)=(1,0)$, the deployed system errs only toward false alarms. $U$'s payoff is asymmetric — a missed chuck (FN) "may have irreversible consequences" while a false alarm (FP) is "verifiable through biomechanical assessment" [PAGE 10]. So $U$'s dominant habit is to trust $D$'s positives as *suspicion triggers*, not verdicts. Note the paper's inverted prose ("a false negative occurs when a legal delivery is incorrectly classified as illegal" [PAGE 10]) would, if taken literally, mislead $U$ into the wrong habit — treating the benign error class as the dangerous one.

Counter-trap ($I$). $I$ holds the legitimate measurement standard (lab, 5 analysts, 21 days [PAGE 3]). Its counter-trap is to accept $D$ only as a triage filter that routes flagged actions to the lab, never as an umpire-level authority. Any claim that $D$ can "integrate into live matches seamlessly" [PAGE 11] collides with $I$'s verification monopoly; the stable equilibrium is $D\to$ shortlist, $I\to$ adjudicate.

Clock. Two clocks run concurrently. The *fast clock* is the delivery: at express pace the decision window is sub-second and the elbow is rotating at $\sim10^{3}\,^\circ\mathrm s^{-1}$ (see temporal-sampling operator), so $D$'s temporal resolution is the binding constraint. The *slow clock* is the 21-day lab cycle. The strategic value of $D$ is compressing the slow clock's queue, not replacing the fast-clock measurement — a distinction the paper blurs when it simultaneously claims "real-time" and "a few seconds for inference" [PAGE 11] (a few seconds is not real-time at $30\ \mathrm{fps}$ framing). Belief recursion: $B$ knows $D$ has 100% claimed recall $\Rightarrow$ $B$ anticipates near-certain flagging $\Rightarrow$ $B$'s best response is to avoid the trigger zone rather than to genuinely legalize the action, which does not improve measurement validity for the ambiguous cases that matter.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical / biomechanical / weather veto proof.

Claim under adjudication: "MediaPipe–RT-DETR provides reliable discrimination between legal and illegal bowling actions" [PAGE 10], usable in "live matches" [PAGE 11].

Biomechanical veto. Legality is a 3D elbow-extension event; $D$ measures a 2D projected difference $\lvert\theta_{\text{rel}}-\theta_{\text{sho}}\rvert$ against $15^\circ$ [PAGE 6]. When the arm's motion plane is tilted $\psi$ from the image plane, the projection error $\varepsilon_{\text{proj}}(\psi)$ is monotone and diverges as $\psi\to90^\circ$. Because the corpus fixes three discrete viewpoints ("front, back, and side," [PAGE 5]), any delivery outside the near-parallel cone enters $\varepsilon_{\text{proj}}>15^\circ$ — i.e., measurement noise equals the decision threshold. Veto holds whenever $\psi\gtrsim30^\circ\!-\!45^\circ$.

Temporal veto. With $\Delta\theta_{\text{temp}}=\omega/f_{\text{fps}}$ and $\omega\approx3.5\times10^{3}\,^\circ\mathrm s^{-1}$ (express), broadcast frame rates give $\Delta\theta_{\text{temp}}\approx118^\circ$ ($30\ \mathrm{fps}$), $59^\circ$ ($60$), $15^\circ$ ($240$). Only $f\gtrsim10^{3}\ \mathrm{fps}$ resolves $\pm3^\circ$. The ICC gyroscope's own "$\pm2000\ \deg/\mathrm s$" range [PAGE 3] confirms the $10^{3}\,^\circ\mathrm s^{-1}$ regime. Veto holds for any sub-$240\ \mathrm{fps}$ capture of pace bowling.

Weather / imaging veto. Outdoor play spans day-to-night and overcast lighting; low illumination and low sun angle raise pose-landmark variance and motion blur length $s=v_{\text{hand}}\cdot t_{\text{exp}}$. At $v=40\ \mathrm{m\,s^{-1}}$ and $t_{\text{exp}}=1/1000\ \mathrm s$, blur $\approx4\ \mathrm{cm}$ at the wrist — enough to displace 2D elbow landmarks and inflate $\theta$ variance. Rain/floodlight glare further degrades the RT-DETR release-frame localization (which already tops out at $94.6\%$ accuracy [PAGE 9], i.e. $\sim1$ in $20$ release frames mislocalized).

Statistical veto (meta-layer). Even granting perfect physics, the evidence is $n=12$ with $(7,4,1,0)$; recall 95% CI $[59\%,100\%]$, accuracy 95% CI $[64.6\%,98.5\%]$. The reported $91.96\%$ conflicts with the arithmetically forced $91.67\%$, and the conclusion's "$90\%$" [PAGE 11] is a third value. Adjudication: the reliability claim is *not* established; the method is admissible only as a suspicion-ranking filter feeding the 21-day lab standard, never as a standalone live umpiring authority.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios with falsifiable predictions.

Veto 1 — Left-arm / side-arm generalization. Training/test corpora are right-handed and "conventional" with no "side-arm actions ... or left-handed bowlers" [PAGE 11]. Counterfactual: introduce $N$ left-arm side-on bowlers.
Prediction: recall collapses toward chance because the $270^\circ$ shoulder anchor (Eq. 1) is arm-slot specific and the mirror-image landmark geometry is out-of-distribution. Falsifiable threshold: predicted accuracy $<70\%$ and MCC $\le0$ on the new subgroup, versus $91.67\%$/$0.8367$ in-domain. Verify by stratified re-evaluation; a result above $80\%$ would falsify the veto.

Veto 2 — Express-pace temporal undersampling. Counterfactual: hold the model fixed, re-shoot identical actions at controlled frame rates $f\in\{30,60,120,240,480\}\ \mathrm{fps}$ on a $140\ \mathrm{km\,h^{-1}}$ bowler.
Prediction: decision error scales as $\Delta\theta_{\text{temp}}=\omega/f$. With $\omega\approx3.5\times10^{3}\,^\circ\mathrm s^{-1}$, predicted release-localization error $\approx\{118,59,29,15,7\}^\circ$ respectively, so accuracy should rise monotonically and only stabilize once $\Delta\theta_{\text{temp}}\lesssim3^\circ$, i.e. $f\gtrsim10^{3}\ \mathrm{fps}$. Falsifiable: if $30\ \mathrm{fps}$ accuracy matches $480\ \mathrm{fps}$ accuracy within noise, the temporal-veto model is wrong.

Veto 3 — Off-axis projection breakdown. Counterfactual: rotate the camera azimuth so the arm plane tilt $\psi\in\{0^\circ,15^\circ,30^\circ,45^\circ,60^\circ\}$, action fixed and legal.
Prediction: false-positive rate rises with $\varepsilon_{\text{proj}}(\psi)$; predicted FPR exceeds the in-domain $0.20$ once $\psi\gtrsim30^\circ$ and approaches $0.5$ (chance for a thresholded scalar) by $\psi\approx60^\circ$. Falsifiable: if FPR stays near $0.20$ out to $\psi=60^\circ$, the projection-veto is refuted and the pose estimator is effectively 3D-consistent (which would itself be a notable positive result).

Common verification protocol: pre-register subgroup sizes $\ge$ enough positives for a Clopper–Pearson recall CI width $<0.15$; report $(TP,TN,FP,FN)$ not just rates; and reconcile accuracy against the confusion matrix to eliminate the $91.96\%$ vs $91.67\%$ vs $90\%$ class of defect flagged above. A model that survives all three vetoes with tight CIs would earn the "reliable, real-time" label the current $n=12$ evidence cannot support.
</RLVR_COUNTERFACTUAL_VETOES>

Summary of what I found: the paper's core operating point reconstructs cleanly to $(TP,TN,FP,FN)=(7,4,1,0)$ on 12 test clips, but three reported figures are internally inconsistent — accuracy is forced to $91.67\%$ (not $91.96\%$ or $90\%$), "recall 100%" carries a 95% lower bound near $59\%$, and the prose on [PAGE 10–11] inverts the false-positive/false-negative definitions (the "20% of illegal actions classified as legal" contradicts the stated 100% recall; it is actually the false-positive rate). Physically, reducing a 3D elbow-extension event to a 2D angle difference against a $15^\circ$ threshold is vulnerable to projection error (off-axis views) and temporal undersampling (express pace at broadcast frame rates), each of which can alone exceed the threshold. It is a reasonable proof-of-concept and triage filter, not a validated live umpiring authority.