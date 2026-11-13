---
source: "2026 - BMASH Ball-Motion-Aware Soccer Header Spotting - Hasen et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 9
model: deepseek/deepseek-v4.1-flash-1017
words: 8904
---

<NATIVE_REASONING>
The user wants a deep multi-section analysis of this BMASH paper. I need to produce >=1000 words across the specified XML sections, with formal LaTeX, units, page citations with verbatim quotes, no betting lines, no toy equations. Let me construct a rigorous technical analysis.

Key technical content from paper:
- BMASH = Ball-Motion-Aware Soccer Header Spotting, late fusion of Video Swin action scores (6-dim) + ball-motion descriptor (10-dim) = 16-dim → MLP
- Video Swin-Tiny, Kinetics-400 pretrained, fine-tuned 30 epochs, AdamW lr 1e-3
- YOLO11s COCO-pretrained, fine-tuned on SoccerNet tracking data, 20 epochs, input 1280, batch 6, lr 0.01
- Dataset: 7 SoccerNet Ball Action Spotting matches + 5 raw matches, 2543 windows total (1335 non-header, 1208 header), test set 529 (268 NH, 261 H) from BN (Blackburn–Nottingham Forest) and WB (Wigan–Birmingham City)
- 10 rotating validation folds
- Metrics: AP, F1, precision, recall, balanced accuracy, ROC-AUC
- Results: BMASH-32 AP 0.9530±0.0103, ROC-AUC 0.9507±0.0114, F1 0.8639±0.0383; Video Swin-32 AP 0.9423±0.0131, F1 0.8636±0.0364, ROC-AUC 0.9418±0.0139
- BMASH-16 AP 0.8966 vs Video Swin-16 0.8858; F1 0.7961 vs 0.7416
- Full-video: BMASH-32 TP 175, FP 115, FN 86, P 0.603, R 0.671, F1 0.635; Video Swin-32 TP 171, FP 106, FN 90, P 0.617, R 0.655, F1 0.636
- BMASH-16 P 0.621, FP 97, R 0.609, F1 0.615; Video Swin-16 R 0.671, FP 127, F1 0.622
- Sliding window 2.0s, stride 0.5s, ±2s tolerance, NMS
- Prior DeepImpact [29] precision 21.1%
- Ball action spotting header AP@1 ~0.56
- Frames 25 fps

Now formal equations. I should present:

1. The header spotting posterior: ŷ = F(X) = P(y=1|X) — Eq (1) [PAGE 4]
2. Video score feature f_v = [μ_NH, μ_H, m_NH, m_H, σ_NH, σ_H] ∈ R^6 — Eq (2) [PAGE 4]
3. Ball descriptor f_b = [μ_c, m_c, σ_c, μ_r, μ_a, m_a, μ_x, μ_y, μ_d, m_d] ∈ R^10 — Eq (3) [PAGE 4]
4. Fusion f = [f_v; f_b] ∈ R^16, ŷ = C(f) — Eq (4),(5) [PAGE 5]
5. Weighted BCE loss L = -w_h y log ŷ - (1-y) log(1-ŷ), w_h = N_NH/N_H — Eq (6) [PAGE 5]

I can add my own derived formal expressions: e.g., the sliding-window event detection operator, the information-theoretic decomposition of AP improvement, the mutual information between ball descriptor and label, the multiplicity of sliding windows per event, expected FP accumulation rate.

Let me derive the sliding window density: 2.0 s window, 0.5 s stride → 4 windows per second, i.e., window overlap factor = W/s = 2.0/0.5 = 4. For a match of duration T_match ~ 5400 s (90 min), number of windows N_w = (T_match - W)/s + 1 ≈ 10800. Test videos: 261 GT headers over two matches. Pred rate: BMASH-32 290 predictions over 2 matches ≈ 145/match. FP per match = 115/2 ≈ 57.5. Paper says "false positives per match" is a reported metric.

Match tolerance ±2 s → with stride 0.5 s, a single true event can generate up to floor(2*2.0/0.5)+1 = 9 candidate windows within tolerance; hence NMS is essential. Actually tolerance τ=2 s, stride s=0.5 s → number of windows whose center falls within τ of event = 2τ/s + 1 = 9.

Localization resolution / quantization error: uniform in [-s/2, s/2], variance s²/12 = 0.25/12 ≈ 0.0208 s².

Information-theoretic: let H(Y) be binary entropy of the test prior p = 261/529 = 0.4934, H = 0.99991 bits ≈ 1 bit. ROC-AUC relates to... I could relate AUC to a rank statistic — Mann–Whitney U: AUC = P(score(header) > score(non-header)). That's formal and correct. And AUC → the probability that a randomly drawn header window outranks a random non-header window. Convert to a normalized rank-separation: AUC = (U)/(n_H n_NH).

Then the "information gain" framing: AUC maps to a Kendall-type separation; I should be careful not to invent fake ratios. But AUC = P(S_H > S_N) is a legitimate probability with unit "probability". Good.

I can also state the AP as a Riemann–Stieltjes integral: AP = ∫ p(r) dr over recall, with p(r) precision at recall r. That's formal, standard.

Also the sensitivity/precision trade-off: the paper's DeepImpact prior 21.1% precision. And PPV as function of prevalence: PPV = Se·π / (Se·π + (1-Sp)(1-π)) where π is prevalence. For full-video continuous frames, the "prevalence" of window containing a header is tiny: 261 events × 2 s windows / (10800 windows per match × 2) ≈ hmm. Let's compute: two matches, each ~90 min = 5400 s. GT 261 events. Each event spans 2.0 s window → 261×2 = 522 s of positive window-seconds out of 10800 s total → prevalence π ≈ 522/10800 = 0.0483. Actually the "header-containing window" prevalence ≈ π = N_pos_windows/N_total. With 9 windows per event within tolerance... Let's define more carefully: base rate of windows centered within ±2 s of an event: 261 × 9 = 2349 out of (10800×2 - ...) ≈ 21600 → π ≈ 0.1087. Hmm, but the definition depends. I'll present it as a parameterized formula with the specific number and note the assumption.

Actually better: define π = (N_H · (2τ/s + 1)) / N_w,total. With N_H = 261, 2τ/s+1 = 9, N_w,total ≈ 2 · ((5400-2)/0.5+1) = 2·10800 = 21600. π = 2349/21600 = 0.1088. Then with Se = 0.671, Sp = ? From Table 4 BMASH-32: FP = 115, TP = 175, FN = 86. TN = N_w,total - positives... but the paper doesn't report TN. It says "True negatives were not used for event-level full-video evaluation". So I can derive implied Sp only with an assumption — I'll flag it as an assumption with the count.

Let me do: If N_w ≈ 21600 and positives (windows within tolerance of a header) = 2349, then negatives = 19251. FP = 115 → Sp = 1 - 115/19251 = 0.99403. Then PPV check: TP/(TP+FP) = 175/290 = 0.6034 ✓. Good, this is consistent: PPV = Se·π/(Se·π + (1-Sp)(1-π)) = 0.671·0.1088/(0.671·0.1088 + 0.00597·0.8912) = 0.07301/(0.07301+0.005321) = 0.932. Hmm that gives 0.932, not 0.603. Because event-level evaluation is not window-level; NMS merges. So I shouldn't conflate. I'll note that the window-level base rate and event-level PPV are not the same estimand — this is a genuine gray-zone: the event-level metric operates on merged/NMS'd predictions, so the "prevalence" entering event-level PPV is N_H/(N_H + FP-collapsed)... Actually event-level PPV = TP/(TP+FP) = 175/290 with the "denominator" being predicted events after NMS. So the relevant base rate is the density of *event-like* false positives per match: 57.5/match over ~90 min = 0.64/min. That's formal and checkable.

Let me also present the NMS operator formally: given window scores s_i at times t_i, NMS keeps a window i if s_i = max over j with |t_i - t_j| < τ_nms.

Also the "clock" element in RECURSIVE_THEORY_OF_MIND: this is about the sliding-window clock, the 25 fps sampling, the 0.5 s stride, and "crisis habit regression" — the model reverting to ball-presence-only heuristics (ball-detector-dependent behavior), the counter-trap being the fusion MLP's ability to fall back to Video Swin when ball evidence is weak. The paper explicitly says: "When ball evidence is weak or missing, the classifier can rely more on the Video Swin action representation." [PAGE 5]. Also "ball detections are used as supporting evidence rather than as a standalone decision signal" [PAGE 4].

RETROCAUSAL_GENEALOGY: lineage from SoccerNet 2018 [10] → SoccerNet-v2 [8] → NetVLAD++ [13] → CALF [4] → multiple scene encoders [30] → dense anchors [31] → ASTRA [33] → OSL-ActionSpotting [3] → Ball Action Spotting [5]; ball detection lineage DeepBall [21] → Kamble [16] → TrackNet [14] → TrackNetV4 [28] → YOLO11s; wearable lineage Kern [20] xPatch, Kenny [19] mouthpiece, [18] longitudinal, Filben [9], Le Flao [22] review, Aston [2] video review; header CV: DeepImpact/Rezaei & Wu [29] precision 21.1%. Multi-week traps: e.g., the 10-fold rotating validation with per-fold best-checkpoint selection creating optimistic bias; the fixed test set of two matches; the class-weighted loss changing the calibration; threshold tuned on validation transferred to test.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto. This is a domain-adaptation section. For soccer headers: 
- Biomechanical veto: a header requires ball-head contact with the head as the contact surface; the ball must arrive with sufficient speed; a header's kinematics differ from a shoulder/chest control. Wearable sensor physics: xPatch behind the right ear over the mastoid, tri-axis accelerometers + gyroscopes, sampling; the impact signature g-force. A veto: if the ball trajectory does not intersect the head region of any player within the tolerance band, the header hypothesis is physically vetoed.
- Ball aerodynamics: drag crisis, Reynolds number Re = ρ v D/μ. For a size-5 ball D = 0.22 m, v = 25 m/s, ρ = 1.225 kg/m³, μ = 1.81e-5 Pa·s → Re = 1.225·25·0.22/1.81e-5 ≈ 3.7e5. That's in the drag-crisis transition region (Re_crit ≈ 2–3 ×10^5), where C_d drops from ~0.5 to ~0.2 — this is a real, formal physical fact and it affects trajectory curvature/prediction, hence ball displacement features μ_d, m_d. Nice cross-layer link.
- Weather: wind advection adds drift; rain reduces detection confidence c_i (blur, spray); sun/shadows; floodlight strobe at 50/60 Hz producing aliasing with the 25 fps shutter → ball smear. Actually 25 fps with 1/50 s shutter is common in PAL broadcast. Good formal detail: frame interval Δt = 40 ms; ball at 30 m/s travels 1.2 m per frame, which at 1280 px width covering ~68 m pitch → ~18.8 px/m → 22.6 px displacement per frame; ball diameter 0.22 m → 4.1 px. So ball is ~4 px wide and moves ~23 px/frame — that's why detection is hard. This is a very concrete physical computation. Let me verify scale: 1280 px over a wide shot maybe 60-80 m. Use 105 m pitch length: 1280/105 = 12.2 px/m → ball diameter 0.22 m → 2.7 px. Displacement at 30 m/s in 40 ms = 1.2 m → 14.6 px. Either way, ball ≈ 3–5 px, displacement 15–25 px. So inter-frame displacement >> ball extent → "correspondence ambiguity" — this is the crux for μ_d/m_d and for TrackNet-style temporal modeling. Good.
- Occlusion: player body cross-section; the ball can be hidden entirely.

Also gravity: 9.81 m/s², in 40 ms → Δv = 0.392 m/s, Δposition from gravity = ½·9.81·(0.04)² = 7.85 mm → 0.1 px. So gravity is negligible frame-to-frame; drag also small over one frame but curvature accumulates. Let's compute drag deceleration: a_d = ½ ρ C_d A v²/m. A = π(0.11)² = 0.03801 m². m = 0.43 kg. C_d = 0.25 (post-critical). a_d = 0.5·1.225·0.25·0.03801·900/0.43 = 0.5·1.225=0.6125; ×0.25=0.1531; ×0.03801=0.005821; ×900=5.239; /0.43=12.18 m/s². So ~12 m/s² deceleration at 30 m/s — over 0.5 s, Δv ≈ 6 m/s. Hmm that's large; realistic. Fine.

Let me also do the header impact physics: a header with ball mass 0.43 kg, incoming 15 m/s, outgoing 20 m/s (reversed), contact 10 ms → impulse 0.43×(15+20)=15.05 N·s → mean force 1505 N. Head mass ~4.5–5 kg; acceleration ~ 1505/5 = 301 m/s² ≈ 30.7 g. That's in the range reported in heading biomechanics (typically 15–40 g linear). This is a legitimate cross-layer check and connects to the wearable-sensor literature cited (Kern [20], Kenny [19]) — the "video confirmation" requirement.

That's excellent for CROSS_LAYER_VETO_ADJUDICATION: exactly the physical veto proof. And it ties to the paper's claim that header spotting is "an essential first stage toward scalable video-based head-impact monitoring" [PAGE 2].

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios with predictions. RLVR = reinforcement learning with verifiable rewards. So define counterfactual tests with checkable outcomes:
1. Ball-descriptor ablation/permutation veto: replace f_b with a channel-shuffled or time-permuted version (retaining marginal statistics but destroying temporal correspondence). Prediction: if BMASH's gain is from genuine ball-motion evidence rather than from a regularization/extra-parameter effect, the shuffled-f_b model should regress toward Video Swin-32 (AP ≈ 0.942 ± 0.013), while a genuine-f_b model should hold ≥ 0.953. Verifiable by rerunning the fusion MLP with the same 100-epoch AdamW recipe.
2. Detector-dropout / missing-ball stress test: artificially set r_i = 0 for a fraction q of frames (simulate occlusion/rain). Prediction: monotone degradation; since f_b has 10 dims of which μ_r enters, the MLP should degrade gracefully but AP should drop below the Video Swin baseline only when q exceeds a crossover; the paper's claim "classifier can rely more on Video Swin when ball evidence is weak" [PAGE 5] predicts no catastrophic collapse. Verifiable with a dose–response curve.
3. Test-set expansion veto on the two-match estimate: the fixed test set is 2 matches (BN, WB); per-match F1 differs 0.582 vs 0.678 for BMASH-32 ([PAGE 8] Table 5). A bootstrap over matches predicts the 95% interval for the match-mean F1 spans roughly ±0.10, so the reported BMASH-32 vs Video Swin-32 F1 difference (0.635 vs 0.636) is not distinguishable from zero. Prediction: a paired sign test over 10 folds on event-level F1 yields p >> 0.05. Verifiable.

Maybe also a 4th: seed/replicate veto — 10 models from 10 folds, so the std already reported. Fine, three is required.

Now RECURSIVE_THEORY_OF_MIND: "Crisis habit regression vs counter-trap vs clock." Interpret: under distribution shift (a crisis, e.g., rain/bad camera), a model regresses to a prior habit (ball-presence shortcut). The counter-trap is the fusion architecture's fallback path. The clock is the temporal stride/tolerance/NMS timing. I'll write about:
- Habit regression: TSM-ResNet50's recall 0.9820 ± 0.0206 with precision 0.5008 ± 0.0083 [PAGE 7] is a degenerate "always-header" attractor — a case study of habit collapse. Its balanced accuracy 0.5138 ± 0.0153 ≈ chance, and ROC-AUC 0.5913 confirms near-no ranking ability. So high recall is not evidence of skill.
- Counter-trap: BMASH's fusion must avoid the reciprocal trap of over-trusting the ball detector (a "ball-present ⇒ header" fallacy) — since "many non-header actions also involve airborne ball motion" [PAGE 2]. The architectural counter-measure is the score-feature fusion with fixed branches (only the MLP trained) — meaning the fusion can only re-weight, not relearn.
- Clock: the 2.0 s window / 0.5 s stride / ±2 s tolerance triple. The clock determines both the multiplicity of windows per event and the FP budget.

Also theory-of-mind recursion: the annotators' intent (they "reviewed frame by frame, and unclear cases were excluded" [PAGE 5]) → the label is a human-verified latent, so the model is being trained against a censored label; the model's "belief" about header-ness must be aligned with an annotator's belief conditioned on visibility. Good.

THINK_TRACE: >=400 words, multi-hop derivation and gray-zone audit. Include:
- Hop 1: from Eq 1 posterior to Eq 2/3 features: the 6-dim score feature is a *statistic* of clip-level softmax scores, so BMASH is not end-to-end; the gradient never reaches Video Swin. Consequence: the fusion's capacity is bounded by the sufficiency of the 6+10 statistics — a data-processing inequality argument: I(Y; f) ≤ I(Y; X) and any fusion cannot exceed the information in the concatenated statistics. Formal: by the data processing inequality, I(Y; f_v, f_b) ≤ min(I(Y;X_clip), ...). Good.
- Hop 2: why does AP improve while F1 stays flat? Because AP/ROC-AUC are rank-based (Mann-Whitney) and threshold-free, whereas F1 at a fixed 0.5 threshold is dominated by a few windows near the boundary. Adding ball features shifts scores mainly in the mid-rank region → AP ↑. Also the threshold is not retuned for Video Swin-32 vs BMASH-32 at 0.5, while the paper says "When threshold tuning is used, the decision threshold is selected on the validation split" [PAGE 5] — ambiguity: was the threshold tuned or fixed at 0.5? Gray zone.
- Hop 3: the class-weighted loss w_h = N_NH/N_H changes the implicit prior; with w_h ≈ 1067/947 = 1.127 in the pooled set, but per-fold training counts differ (e.g., fold 0: 847/957 → w_h = 957/847 = 1.130). The loss is Eq (6), which is *unweighted* on the negative term; so the effective prior is p_eff = w_h p/(w_h p + (1-p)). With p = 0.5 → p_eff = 1.127/2.127 = 0.530. This biases the model toward predicting header, which is consistent with BMASH-32's recall ↑ in full-video (0.671 vs 0.655) and FP ↑ (115 vs 106). That's a clean mechanistic explanation, and it's a real derivation. Excellent — this is the sort of multi-hop that makes the analysis valuable.
- Gray zone audit: fixed test set of 2 matches; 10 folds reuse the same test set → the reported ± std across folds is not a test-set uncertainty, it's a training-fold-sensitivity. Selecting best checkpoint by validation performance per fold then reporting on test is standard but leaks a little. Test-set windows (529) may include overlapping windows around the same event → non-independence inflates effective n. Also "Header windows were centered on visible ball-head contact" — the centered-window task is easier than spotting; the clip-level AP 0.953 does not transfer to event F1 0.635, a drop of 0.318 — a large generalization gap that the paper acknowledges.

Word count: I need >= 1000 words total across sections, with THINK_TRACE >= 400. I'll aim for ~2500-3000 words total. Let's write well.

Let me be careful with quotes — verbatim, with [PAGE N].

Quotes to use:
- [PAGE 1] "header spotting remains a challenging problem due to the subtle and short-lived nature of header events."
- [PAGE 1] "BMASH combines Video Swin action representations with ball-presence and motion features from frame-level soccer-ball detections"
- [PAGE 2] "A soccer header is characterized by a brief ball-head interaction that frequently lasts only a few frames and occupies a very small image region [29]."
- [PAGE 2] "many visually similar actions, including crosses, clearances, long passes, aerial duels, throw-ins, and shots, share highly similar motion patterns and ball trajectories"
- [PAGE 2] "accurate header spotting constitutes an essential first stage toward scalable video-based head-impact monitoring and downstream biomechanical analysis."
- [PAGE 3] "the reported precision dropped to 21.1% due to a large number of false-positive detections"
- [PAGE 3] "wearable sensors alone generate substantial numbers of false-positive events, making video confirmation essential for reliable exposure estimation"
- [PAGE 4] Eq (1) and text "where ˆ𝑦is the predicted probability that the input window contains a header."
- [PAGE 4] "we keep the highest-confidence ball candidate"
- [PAGE 4] Eq (2) and (3).
- [PAGE 4] "Ball detections are used as supporting evidence rather than as a standalone decision signal."
- [PAGE 5] Eq (4),(5),(6), "During fusion training, the Video Swin and ball-detection branches were kept fixed, and only the fusion MLP was optimized"
- [PAGE 5] "When ball evidence is weak or missing, the classifier can rely more on the Video Swin action representation."
- [PAGE 5] "Candidate events were reviewed frame by frame, and unclear cases were excluded when ball-head contact could not be verified because of severe occlusion or camera cuts."
- [PAGE 6] "The model was applied to continuous broadcast videos using sliding-window inference with 2.0-second windows and a stride of 0.5 seconds."
- [PAGE 6] "Predicted events were matched with annotated header timestamps using a tolerance of ±2 seconds."
- [PAGE 6] "True negatives were not used for event-level full-video evaluation, since continuous match footage contains a very large number of non-header moments."
- [PAGE 7] Table 3 numbers, Table 4.
- [PAGE 8] Table 5, and "Full-video spotting was evaluated on only two held-out broadcast matches"

Good. Now write. I must not mention betting lines/odds. Fine.

Structure the XML exactly as specified. Let me write substantial LaTeX.

For SOURCE_OPERATORS_AND_EQUATIONS: present Eqs 1–6 verbatim-ish in LaTeX with page cites, units, then derived operators:

(a) Data-processing bound:
I(Y; f_v, f_b) ≤ I(Y; X) — bits.
Actually more precisely the fusion statistic f = φ(X) is a deterministic function so I(Y;f) ≤ I(Y;X). Units: bits (shannon). Assumption: finite discrete Y, entropy in bits.

(b) Mann–Whitney identity: AUC = P(S_H > S_N) + ½P(S_H = S_N) = U/(n_H n_N). Units: probability.

(c) AP as Stieltjes integral: AP = ∫₀¹ p(r) dr.

(d) Sliding-window operator: W_{t} = X[t - W/2, t + W/2], t_k = k·s, number of windows N_w = ⌊(T - W)/s⌋ + 1. With W=2.0 s, s=0.5 s: density λ_w = 1/s = 2 windows/s. Hmm, 1/0.5 = 2 windows per second. And multiplicity within tolerance: M = ⌊2τ/s⌋ + 1 = ⌊4⌋ + 1 = 9.

(e) NMS: keep i iff s_i ≥ s_j ∀ j: |t_i - t_j| ≤ τ_nms and s_j > s_i.

(f) Event-level F1: F1 = 2TP/(2TP + FP + FN). Check with Table 4 BMASH-32: 2·175 = 350; 2·175+115+86 = 350+201 = 551 → 0.6352 ✓ matches 0.635. 

Video Swin-32: 342/(342+106+90)=342/538 = 0.6357 → 0.636 ✓. 
BMASH-16: 318/(318+97+102) = 318/517 = 0.6151 ✓. 
Video Swin-16: 350/(350+127+86) = 350/563 = 0.6217 ✓ 0.622. All consistent. I can show this verification — that's a strong auditing move.

(g) Precision/recall: P = TP/(TP+FP), R = TP/(TP+FN). BMASH-32: 175/290 = 0.6034 ✓; 175/261 = 0.6705 ✓.

(h) Class-weight effective prior: p_eff = w_h p / (w_h p + (1-p)) — with derivation. w_h = N_NH/N_H. Derivation: the weighted loss corresponds to sampling with weights; the minimizer of the expected weighted BCE is σ(logit) = w_h p/(w_h p + (1-p)). Actually for BCE with weight w on positives: the optimal posterior is ŷ* = w·p/(w·p + (1-p)). Yes, standard. Units: probability.

For fold 0: train 847 header / 957 non-header (Table 2 gives "847/957" as header/non-header — careful, Table 2 caption says "Counts are given as header/non-header." So 847 header, 957 non-header. Then w_h = ratio of non-header to header = 957/847 = 1.130). With pooled p ≈ 0.5 → p_eff = 1.130·0.5/(1.130·0.5 + 0.5) = 0.565/1.065 = 0.5305. So ~53% implied prior. Threshold 0.5 then corresponds to... hmm, this shows the model is trained to output ~0.53 for a balanced prior, so a 0.5 threshold is aggressive toward header → recall ↑. This matches BMASH-32's higher recall in full-video. Good mechanistic story. But note fusion MLP trained per fold too presumably with same weighting.

Wait — the paper says the fusion MLP used "binary cross-entropy with logits" for training (§4.3), and Eq (6) is the weighted version. Slight inconsistency in the paper — worth flagging as a gray-zone (was the MLP trained with weighted or unweighted BCE? §3.4 Eq (6) says weighted, §4.3 says plain BCE). This is exactly the kind of gray-zone audit that's valuable.

(i) Detection scale physics: pixel-per-metre ρ_px = W_px/L_FOV. Ball angular size etc. Let me formalize:
ball image diameter d_px = f_px · D_b / Z, where f_px is focal length in pixels, D_b = 0.22 m, Z is distance. For a broadcast wide shot, f_px ≈ 1280/(2 tan(HFOV/2)); with HFOV ≈ 60° → f_px = 640/tan30° = 640/0.5774 = 1108 px. At Z = 60 m: d_px = 1108·0.22/60 = 4.06 px. Good — matches my earlier estimate of 4 px. At Z = 100 m: 2.44 px. So the ball is 2–4 px — below the ~8 px stride of YOLO's typical P3 feature map (stride 8), meaning detection depends on up-scaled input 1280 and small-object sensitivity. Excellent formal cross-check with the paper's claim of "limited spatial resolution of distant players" [PAGE 2].

Inter-frame displacement: at v = 30 m/s, Δ = v·Δt, Δt = 1/25 s = 40 ms → 1.2 m → 1.2·(1108/60) = 22.2 px. So displacement/ball-diameter ratio = 22.2/4.06 = 5.5 — i.e., the ball moves 5.5 body-lengths per frame, breaking any frame-to-frame IoU association. This directly explains why μ_d and m_d (mean/max displacement between consecutive detected ball centres) are noisy statistics and why the descriptor avoids explicit tracking. And the paper admits: "does not yet model full ball trajectories, speed, acceleration, or player-relative ball geometry" [PAGE 8]. 

(j) Aerodynamics: Re = ρ v D/μ = 1.225·25·0.22/1.81e-5 = 6.7375/1.81e-5 = 3.72e5. Drag crisis ~2–3e5. C_d ≈ 0.47 subcritical, ≈0.20 supercritical (smooth ball). So trajectory prediction has a bifurcation regime — the ball's deceleration can change abruptly. This matters if you try to infer "was that a header or a deflection" from ball curvature. Formal singularity: at Re ≈ Re_crit the drag coefficient is multivalued/hysteretic → the mapping from observed positions to inferred impulse is ill-conditioned. That's a genuine singularity/breakdown regime. 

(k) Header impulse: J = m_b(1+e)(v_in) with e ~ 0.5–0.8 for ball-head; or simply Δp = m_b(v_out - v_in) with sign flip. m_b = 0.43 kg, v_in = 15, v_out = -20 → |Δp| = 0.43·35 = 15.05 N·s. Contact τ_c ≈ 10 ms → F̄ = 1505 N. Head effective mass m_h ≈ 5 kg → a ≈ 301 m/s² = 30.7 g. Compare to heading literature: reported peak linear accelerations of ~15–40 g. So the physical plausibility band is a veto: a "header" prediction implying a > 100 g head acceleration would be a mislabeled/deflected event. Good.

Also mention: gravity in one frame: Δy = ½ g Δt² = 7.85 mm → 0.14 px at 1108/60 = 18.5 px/m. Negligible → any observed 20+ px transverse jump cannot be gravitational → it's an impact or a detection error. Nice cross-layer veto rule! Formal: |Δp_px| > v_max Δt ρ_px ⟹ detection error, since v_max for a football is ~35 m/s → 35·0.04·18.5 = 25.9 px. So any inter-frame displacement > ~26 px at Z=60 m is a detector swap, not the ball. That's a concrete falsifiable veto rule I can state with the numbers. 

CROSS_LAYER_VETO_ADJUDICATION should have: physical veto (ball kinematics/detector), biomechanical veto (head impact plausibility, wearable cross-check), weather veto (rain/wind/sun/lighting). Each with formal statement and breakdown regime.

Weather: wind w adds v_rel = v - w. Cross-wind of 5 m/s on a 25 m/s ball → drift acceleration a_w = ½ρC_d A (v-w)|v-w|/m — the asymmetry creates lateral force ~ ... magnitude: 0.5·1.225·0.2·0.038·(25²)/0.43 ≈ 0.5·1.225=0.6125, ×0.2=0.1225, ×0.038=0.004655, ×625=2.909, /0.43=6.77 m/s². So a crosswind can produce several m/s² lateral acceleration, comparable to a spin-induced Magnus force — meaning ball trajectory curvature cannot uniquely identify a header (deflection) from a wind-advected cross. Good veto statement.

Rain: droplet-induced refraction/blur reduces detection confidence → μ_c ↓, μ_r ↓. The descriptor handles it by falling back. Also: rain increases the effective Ball-Area flicker.

Now RECURSIVE_THEORY_OF_MIND in ~250 words. THINK_TRACE in ~500 words.

Also RETROCAUSAL_GENEALOGY needs historical/scientific lineage & multi-week traps. Include: Babylon/Assyrian? No — keep it scientific. Lineage: 
- Object detection lineage: Viola-Jones → DPM → R-CNN → YOLO family → YOLO11s (paper cites Ultralytics YOLO11 [15]).
- Ball tracking: TrackNet [14] 2019 tennis, DeepBall [21] 2019, Kamble [16] survey, TrackNetV4 [28] 2025 motion attention.
- Action spotting: SoccerNet [10] 2018 → SoccerNet-v2 [8] 2021 → NetVLAD++ [13] 2021 → CALF [4] 2020 → multiple scene encoders [30] 2022 → dense anchors [31] 2022 → ASTRA [33] 2023 → OSL-ActionSpotting [3] 2024 → Ball Action Spotting [5] 2024 → action anticipation [7] 2025.
- Video backbones: TSM [23] 2019 → Video Swin [25] 2022 → Video Swin-T (paper) 2026.
- Head-impact: xPatch behind mastoid (Kern [20] 2022 neural net for header detection from wearable), instrumented mouthpiece (Kenny [19] 2022), longitudinal [18] 2024, Filben [9] 2021 youth/collegiate female, Le Flao [22] 2022 systematic review, Aston [2] 2025 video-based head acceleration review. DeepImpact [29] 2022 — Rezaei & Wu, 21.1% precision.
- The retrocausal thread: DeepImpact's ball-centered crop pipeline → high sensitivity, 21.1% precision; BMASH runs the arrow backwards: instead of cropping around the ball and classifying, it classifies the full frame and uses the ball as a *feature*, precisely because the crop-based pipeline had a catastrophic failure mode when detections were missed. So BMASH's design is a retrospective correction of [29]. That's the "retrocausal genealogy" — the ancestor's failure mode determines the descendant's architecture.

Multi-week traps (things that would take weeks to discover): 
1. The 10 folds all evaluate the *same* fixed test set → the standard deviation reported is fold-sensitivity, not test uncertainty; you can burn weeks thinking CI is tight.
2. Threshold semantics: 0.5 default vs validation-tuned — §3.4 vs §4.2 conflict (0.5 threshold used for the Ball Action EfficientNet3D comparison at "the default 0.5 threshold" [PAGE 6]).
3. The score-feature mean/max/std across clips: the number of clips sampled per window is never stated in the excerpt — an under-specification that would cost weeks to reproduce.
4. Fold-to-fold train counts vary (819–893 header), so w_h varies; comparing models across folds conflates weighting.
5. Rotating folds with best-checkpoint selection → for 30-epoch training, early stopping on 54–128 validation headers (Table 2) means validation sets of ~150-250 windows; the best-checkpoint selection noise is comparable to the reported ±0.01 AP differences. That's a strong point: the BMASH-32 vs Video Swin-32 AP gap is 0.0107, while the fold-wise std is 0.0103–0.0131. So the gap ≈ 1σ — not decisive. Excellent gray-zone audit. Similarly ROC-AUC gap 0.0089 vs σ 0.0114–0.0139 — also ~1σ. But BMASH-16 vs Video Swin-16: AP gap 0.0108, σ 0.0244-0.0250 → 0.4σ; F1 gap 0.0545 with σ 0.0575-0.0683 → 0.8σ. So the paper's headline improvements are within about one fold-standard-deviation. That's a genuinely important audit. However, since the same folds/checkpoints pair the models, a paired test would be more powerful than the unpaired σ comparison — I should note that the reported σ is unpaired and a paired analysis could still find significance. Balanced, fair.

Good, that's a strong THINK_TRACE.

Let me now write with care and appropriate length. I'll aim ~3000 words.

Format: XML sections. Use LaTeX inline. Keep it organized with subsections inside the tags.

One more: "ZERO TOY EQUATIONS" — so all equations must be real/derived with units and assumptions. My derivations above are real physics/information theory. Good.

Let me write.

For the Thai/Chinese instruction — none. The user prompt is in English. The system says respond in the language of the user. English.

Write now.

I'll include a short header line maybe. The spec says "across these exact XML sections" — I'll output just the sections, maybe with a one-line preamble. Safer: minimal preamble, then sections. Actually strict invariant 3 says ">= 1,000-WORD DEPTH across these exact XML sections" — so the sections must exist exactly. I'll add a tiny preamble title only. Let me include it, it's fine.

Careful with the `<` characters in math inside XML — no parsing issue for a text response, but avoid stray `<` in LaTeX. Use \leq, \geq.

Let me draft.

Word count estimate: THINK_TRACE ~600, SOURCE_OPERATORS ~700, RETROCAUSAL ~400, RECURSIVE ~350, CROSS_LAYER ~450, RLVR ~400 → ~2900. Good.

Write it out.
</NATIVE_REASONING>

<AUDIT_HEADER>BMASH (arXiv:2609.39300v1, MMSports '26) — ball-motion-aware late-fusion header spotter. Nine-page source, ten rotating game-level folds, fixed two-match test set. Analysis below is restricted to the paper's own reported quantities and to independently checkable physics/information-theoretic identities.</AUDIT_HEADER>

<THINK_TRACE>
**Hop 1 — What kind of estimator is BMASH, formally?** The paper defines the target as a posterior, not a detector. Eq. (1) on [PAGE 4] states the goal is to learn a classifier F(X) with ŷ = F(X) = P(y = 1 | X), "where ŷ is the predicted probability that the input window contains a header." The input is X = {x_{t1}, …, x_{tT}}. But the fusion stage never sees X. It sees f = [f_v; f_b] ∈ R^16, where f_v is a six-dimensional statistic of Video Swin softmax scores and f_b is a ten-dimensional statistic of YOLO11s detections. Because f = φ(X) is a deterministic map, the data-processing inequality gives I(Y; f_v, f_b) ≤ I(Y; X) in bits, with equality only if φ is sufficient. Since f collapses an entire T-frame clip (T = 16 or 32 at 960×544 or 1280×736) into sixteen scalars, sufficiency is implausible. The consequence is architectural and non-negotiable: "During fusion training, the Video Swin and ball-detection branches were kept fixed, and only the fusion MLP was optimized" [PAGE 5]. The gradient never reaches the backbone. So the correct claim ceiling for BMASH is *re-ranking of a fixed score field*, not representation learning. Every reported BMASH gain must therefore be attributable to information already present in the 6+10 statistics that Video Swin-T's logits left on the table.

**Hop 2 — Why does AP move while F1 does not?** Table 3 [PAGE 7]: Video Swin-32 AP 0.9423 ± 0.0131, F1 0.8636 ± 0.0364; BMASH-32 AP 0.9530 ± 0.0103, F1 0.8639 ± 0.0383. AP and ROC-AUC are rank functionals of the score field — by the Mann–Whitney identity, ROC-AUC = P(S_H > S_N) — and are threshold-free. F1 at a fixed operating point is a functional of the score histogram *near the threshold only*. A perturbation that reorders mid-ranked windows raises AP and leaves the threshold neighbourhood untouched. That is exactly the pattern here: ΔAP = +0.0107, ΔROC-AUC = +0.0089, ΔF1 = +0.0003. The paper's own reading is consistent — "detector-derived ball information primarily improves score ranking and class separation, whereas the strongest visual backbone already provides highly competitive threshold-based classification performance" [PAGE 6]. The 16-frame setting shows the same asymmetry amplified: ΔAP = +0.0108 but ΔF1 = +0.0545, because a weaker backbone leaves more mid-rank disorder for f_b to resolve.

**Hop 3 — The class-weight arithmetic nobody reports.** Eq. (6) [PAGE 5] is a weighted BCE with w_h = N_NH / N_H, the "ratio of non-header to header samples in the training fold." For a weighted BCE with positive weight w, the population minimiser is not the true posterior but the tilted one, ŷ* = w·π / (w·π + (1 − π)), where π = P(y = 1). Take fold 0 (Table 2 [PAGE 5], counts header/non-header): 847/957, so w_h = 957/847 = 1.130. With a near-balanced fold prior π ≈ 0.5, ŷ* ≈ 0.565/1.065 ≈ 0.530. The trained network therefore emits ≈ 0.53 on genuinely ambiguous windows, and a 0.5 decision threshold is *already biased toward the header class*. This is a mechanistic, falsifiable explanation for the full-video asymmetry in Table 4 [PAGE 7]: BMASH-32 R = 0.671 with FP = 115 versus Video Swin-32 R = 0.655 with FP = 106. More recall, more false positives — the signature of a shifted operating point, not of new discriminative power. Note the internal inconsistency: §3.4 writes the weighted form, §4.3 says the MLP was trained with "binary cross-entropy with logits" with no weight mentioned. Whether the negative term is weighted is unresolved in the source, and it changes the calibration argument above.

**Hop 4 — Verifying the event-level table is self-consistent.** From Table 4, F1 = 2TP/(2TP + FP + FN). BMASH-32: 350/(350 + 115 + 86) = 350/551 = 0.6352 → reported 0.635 ✓; P = 175/290 = 0.6034 → 0.603 ✓; R = 175/261 = 0.6705 → 0.671 ✓. Video Swin-32: 342/538 = 0.6357 → 0.636 ✓. Video Swin-16: 350/563 = 0.6217 → 0.622 ✓. BMASH-16: 318/517 = 0.6151 → 0.615 ✓. All four rows are internally consistent. The audit therefore cannot attack the arithmetic — only the estimand.

**Hop 5 — Gray-zone audit of the uncertainty budget.** The reported ± is described as "mean ± standard deviation across the validation folds" [PAGE 7]. That is *fold sensitivity*, not test-set uncertainty: all ten models are scored on the same 529 fixed windows from BN and WB. Three consequences. (i) The headline ΔAP between BMASH-32 and Video Swin-32 is 0.0107 against fold σ of 0.0103–0.0131 — roughly one σ. The ΔROC-AUC is 0.0089 against σ 0.0114–0.0139 — also ≈ 1σ. Because the models are evaluated on identical folds and identical test data, a *paired* analysis would be far more powerful than this unpaired σ comparison, and the paper does not run one. The honest verdict: the ranking gain is plausible and directionally consistent across both window lengths, but the unpaired statistics do not by themselves exclude fold-sampling noise. (ii) Validation sets are small — 54/110 to 128/118 windows (Table 2) — and the checkpoint with "the best validation performance was used as the final model" [PAGE 5]. Best-of-30-epoch selection on ~170 validation windows injects selection noise of the same order as the reported deltas. (iii) The 529 test windows are derived from 261 header timestamps; if windows overlap around a shared event, they are not independent, so the effective n is smaller than 529. None of this invalidates the result; all of it caps the confidence language.

**Hop 6 — The clip-to-event cliff.** AP 0.9530 at clip level collapses to event F1 0.635 in full video — a 0.318 gap under the *same* model. The paper is candid: "dense sliding-window inference over long broadcast videos accumulates false positive detections and introduces temporal localization errors" [PAGE 7]. The gap is the single most important number in the paper and the one a downstream head-impact pipeline would actually feel.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Primary operators, verbatim from source.**

Header posterior ([PAGE 4], Eq. 1):
$$\hat{y} = F(X) = P(y=1 \mid X), \qquad y \in \{0,1\}$$
Units: probability (dimensionless, ∈ [0,1]). Assumption: window label is a well-defined binary latent verified by human review.

Video Swin score statistic ([PAGE 4], Eq. 2), with the source text "we summarize them into a 6-dimensional score feature vector":
$$\mathbf{f}_v = [\,\mu_{NH},\ \mu_H,\ m_{NH},\ m_H,\ \sigma_{NH},\ \sigma_H\,], \qquad \mathbf{f}_v \in \mathbb{R}^{6}$$
where μ, m, σ are "the mean, maximum, and standard deviation of the non-header and header scores across the temporal clips sampled from the same window." Units: probability (μ, m), probability (σ). **Breakdown regime:** when only one clip is sampled per window, σ ≡ 0 identically and two of six dimensions carry zero information — a rank-deficiency that silently halves the effective feature width. The excerpt never states the clip count per window, so this is an under-specification with real consequences.

Ball-motion descriptor ([PAGE 4], Eq. 3), per-frame detector output b_{t_i} = [r_i, c_i, x_i, y_i, a_i]:
$$\mathbf{f}_b = [\,\mu_c,\ m_c,\ \sigma_c,\ \mu_r,\ \mu_a,\ m_a,\ \mu_x,\ \mu_y,\ \mu_d,\ m_d\,], \qquad \mathbf{f}_b \in \mathbb{R}^{10}$$
Units: μ_c, m_c, σ_c — detection confidence, dimensionless ∈ [0,1]; μ_r — detection rate, dimensionless ∈ [0,1] (a proportion of T frames); μ_a, m_a — normalised bounding-box area, dimensionless ∈ [0,1] (fraction of frame area); μ_x, μ_y — normalised centre coordinates, dimensionless ∈ [0,1]; μ_d, m_d — "the mean and maximum displacement between consecutive detected ball centers," units of normalised frame width per frame-interval. **Singularity:** if the ball is detected in zero or one frames of the window, then {μ_d, m_d} are undefined/zero by the "If no ball is detected, all values are set to zero" rule [PAGE 4] — eight of ten dimensions collapse to the origin and f_b becomes a pure detection-rate indicator. This is the exact regime where the paper claims graceful fallback occurs.

Fusion and classifier ([PAGE 5], Eqs. 4–5):
$$\mathbf{f} = [\mathbf{f}_v;\, \mathbf{f}_b] \in \mathbb{R}^{16}, \qquad \hat{y} = C(\mathbf{f})$$
C(·) is "two hidden layers with ReLU activations and dropout, followed by a single output unit whose sigmoid activation gives the header probability." Units: probability.

Weighted objective ([PAGE 5], Eq. 6):
$$\mathcal{L} = -w_h\, y \log(\hat{y}) - (1-y)\log(1-\hat{y}), \qquad w_h = \frac{N_{NH}}{N_H}$$
Units: nats (natural log) or bits (log base 2) per sample; w_h dimensionless. Assumption stated in source: "We use class weighting to account for differences in the number of header and non-header samples within each training fold."

**Derived / auditing operators.**

Rank functional (Mann–Whitney), threshold-free:
$$\mathrm{AUC} = \Pr(S_H > S_N) + \tfrac{1}{2}\Pr(S_H = S_N) = \frac{U}{n_H\, n_N}$$
Units: probability. Assumption: scores are comparable across windows; ties handled at ½.

Average precision as a Stieltjes integral over the precision–recall curve:
$$\mathrm{AP} = \int_{0}^{1} p(r)\, \mathrm{d}r$$
Units: probability. This is why AP responds to mid-rank reordering that F1 cannot see.

Sliding-window sampling operator ([PAGE 6]: "2.0-second windows and a stride of 0.5 seconds"):
$$W_k = X\!\left[t_k - \tfrac{W}{2},\ t_k + \tfrac{W}{2}\right], \quad t_k = k s, \quad N_w = \left\lfloor \frac{T_{\text{match}} - W}{s}\right\rfloor + 1$$
With W = 2.0 s and s = 0.5 s: window density 1/s = 2 windows·s⁻¹, overlap factor W/s = 4, and — under the "tolerance of ±2 seconds" matching rule [PAGE 6] — a multiplicity of
$$M = \left\lfloor \frac{2\tau}{s}\right\rfloor + 1 = \left\lfloor \frac{4.0}{0.5}\right\rfloor + 1 = 9$$
candidate windows per true event, all inside tolerance. Temporal quantisation error is uniform on [−s/2, s/2], variance s²/12 = 0.0208 s².

Event-level scoring identity (verified against all four rows of Table 4):
$$\mathrm{F1} = \frac{2\,\mathrm{TP}}{2\,\mathrm{TP} + \mathrm{FP} + \mathrm{FN}}, \qquad P = \frac{\mathrm{TP}}{\mathrm{TP}+\mathrm{FP}}, \qquad R = \frac{\mathrm{TP}}{\mathrm{TP}+\mathrm{FN}}$$
BMASH-32: 350/551 = 0.6352; Video Swin-32: 342/538 = 0.6357; BMASH-16: 318/517 = 0.6151; Video Swin-16: 350/563 = 0.6217. All reproduce the published values to three decimals.

Class-weight prior tilt:
$$\hat{y}^{*} = \frac{w_h \pi}{w_h \pi + (1-\pi)}, \qquad \pi = \Pr(Y=1)$$
Units: probability. Fold 0 gives w_h = 957/847 = 1.130; at π = 0.5, ŷ* = 0.5305. **Breakdown regime:** when a fold's class ratio inverts (e.g., Fold 4's 893/957 training split with a 54/110 validation split), w_h < 1 and the tilt reverses, so a fixed 0.5 threshold has opposite semantics across folds — a genuine cross-fold incomparability in the thresholded metrics (F1, precision, recall, balanced accuracy) that does not affect AP/ROC-AUC.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper's architecture is a retrospective correction of its own most-cited ancestor. Rezaei & Wu's DeepImpact [29] built a ball-centred pipeline: detect ball, crop, classify. Its failure was catastrophic and quantified: "the reported precision dropped to 21.1% due to a large number of false-positive detections" [PAGE 3]. The causal chain is explicit in the source — "the temporal classifier receives cropped video regions centered on the detected ball, so missed or incorrect ball detections can directly lead to crops that omit the relevant header action or focus on an irrelevant region" [PAGE 3]. BMASH runs that arrow backwards: "In contrast to ball-centered crop pipelines, our framework preserves full-frame spatiotemporal reasoning and uses detector-derived ball information as supporting evidence through late fusion" [PAGE 3]. The descendant's topology is determined by the ancestor's failure mode — the ball may inform, but may never gate.

Two independent lineages converge here. **Action spotting:** SoccerNet [10] (2018, first large-scale temporal localisation benchmark) → SoccerNet-v2 [8] (2021, scaled annotations) → NetVLAD++ [13] (2021, separate pre/post-event aggregation) → CALF [4] (2020, context-aware neighbourhood loss) → multiple scene encoders [30] (2022, broadcast-transition exploitation) → dense detection anchors [31] (2022) → ASTRA [33] (2023, transformer long-range reasoning) → OSL-ActionSpotting [3] (2024, unified library) → Ball Action Spotting [5] (2024, twelve ball-interaction classes, header among them). Each generation moved from clip-global representation toward explicit temporal neighbourhood modelling; BMASH inverts that trend by going back to a *clip-level binary* formulation and adding a non-visual evidence channel instead. **Ball tracking:** TrackNet [14] (2019, tennis, temporal stacking for tiny high-speed objects) → DeepBall [21] (2019, long-shot soccer ball detection) → Kamble et al. [16] (2019, tracking survey; temporal consistency for invisibility) → TrackNetV4 [28] (2025, motion-attention fusion). BMASH inherits the *motivation* of this lineage but declines its machinery: it uses a single-frame YOLO11s [15] and "frames are processed independently without any additional clip-level adjustment of the detections" [PAGE 4]. **Head-impact:** xPatch sensors behind the mastoid with a neural false-positive filter (Kern et al. [20], 2022) → instrumented mouthpiece with tri-axial accelerometry and gyroscopy, video-synchronised (Kenny et al. [19], 2022) → longitudinal individual exposure (Kenny et al. [18], 2024) → youth/collegiate female header biomechanics (Filben et al. [9], 2021) → systematic review of inertial-sensor head-impact methods (Le Flao et al. [22], 2022) → video-based head-acceleration review (Aston & Teixeira-Dias [2], 2025). The pivot sentence that justifies BMASH's existence is on [PAGE 3]: "wearable sensors alone generate substantial numbers of false-positive events, making video confirmation essential for reliable exposure estimation." Video is the reference standard; BMASH is an attempt to automate the reference standard.

**Multi-week traps embedded in this lineage.** (1) *The fixed-test illusion.* Ten folds, one test set. Weeks can be spent treating the reported ± as a confidence interval when it is a fold-sensitivity band; the true generalisation interval across matches is much wider (Table 5 shows BN F1 0.582 versus WB 0.678 for the same BMASH-32 model [PAGE 8]). (2) *Threshold archaeology.* The 0.5 default is used for the generic Ball-Action comparison ("precision = 0.9230, recall = 0.4303, F1 = 0.5870" at "the default 0.5 threshold" [PAGE 6]) but §3.4 permits validation-tuned thresholds. Mixing the two conventions across tables silently changes what "F1" means between rows. (3) *Reproduction debt on f_v.* The number of clips sampled per window — the quantity over which μ and σ are computed in Eq. (2) — is not given, so exact reproduction of Video Swin-16/32 score features requires guessing. (4) *The anticipation trap.* Dalal et al. [7] predict ball actions before they occur; a header spotter that fires on the pre-contact frame is not an error in their framing but is an error in a head-impact exposure count. The ±2 s tolerance hides this distinction entirely.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
**Crisis habit regression.** The clearest evidence in the paper is TSM-ResNet50 (Table 3 [PAGE 7]): recall 0.9820 ± 0.0206, precision 0.5008 ± 0.0083, balanced accuracy 0.5138 ± 0.0153, ROC-AUC 0.5913 ± 0.0457. A model with near-perfect recall and chance-level balanced accuracy and near-chance AUC has collapsed onto the "always header" attractor. This is habit regression in its purest measurable form: under difficulty, the policy reverts to the majority-of-attention response. The audit lesson is that recall alone is not a skill signal, and any downstream head-impact pipeline that optimises sensitivity will select exactly this degenerate behaviour.

**The counter-trap.** BMASH's risk is the mirror image. Because headers and non-headers both produce airborne ball motion — "many non-header actions also involve airborne ball motion" [PAGE 2] — a fusion layer can learn the shortcut "ball detected with high confidence and large displacement ⇒ header," which is precisely the 21.1%-precision failure of [29] reintroduced at the feature level. The paper's stated defence is architectural and two-sided: "Ball detections are used as supporting evidence rather than as a standalone decision signal" [PAGE 4], and "When ball evidence is weak or missing, the classifier can rely more on the Video Swin action representation" [PAGE 5]. Because the branches are frozen during fusion, the MLP can only re-weight existing evidence; it cannot invent a ball-only detector. That is a real, if partial, guarantee. The residual trap is subtler: with ten of sixteen dimensions devoted to the ball, a dropout-regularised two-hidden-layer MLP trained for 100 epochs on ~2,000 windows has ample capacity to overfit the ball channels to fold-specific camera geometry — which would explain why per-match variation (BN vs WB) dominates per-fold variation.

**The clock.** Three clocks govern the system and none is aligned with the others. The *sensor clock* is 25 fps [PAGE 5], giving 40 ms frame intervals. The *inference clock* is the 2.0 s window with a 0.5 s stride [PAGE 6]. The *evaluation clock* is the ±2 s matching tolerance [PAGE 6]. A header's defining event — ball-head contact — is described as lasting "only a few frames" [PAGE 2], i.e., order 0.1 s, which is 1/20 of the inference window and 1/20 of the matching tolerance. The model is therefore asked to detect a 0.1 s event with a 2.0 s aperture and graded with a 4.0 s tolerance band. That mismatch is the mechanism of the clip-to-event cliff (AP 0.953 → F1 0.635).

**Recursive mind-model.** The label itself is a human belief, not a physical ground truth: "Candidate events were reviewed frame by frame, and unclear cases were excluded when ball-head contact could not be verified because of severe occlusion or camera cuts" [PAGE 5]. The annotator's belief is conditioned on visibility V; the model's belief is conditioned on pixels; excluded ambiguous cases mean the training distribution is a censored version of the physical one, systematically depleted of exactly the low-visibility headers the model will face in continuous video. The model must therefore be calibrated to an annotator's *conditional* certainty, not to physical contact — and the full-video false positives are partly the cost of that mismatch.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
**A. Physical / optical veto on the ball channel.** Ball image extent follows the pinhole relation
$$d_{px} = f_{px}\,\frac{D_b}{Z}, \qquad f_{px} = \frac{W_{px}}{2\tan(\mathrm{HFOV}/2)}$$
with D_b = 0.22 m (size-5 ball) and W_px = 1280 [PAGE 6]. At HFOV = 60°, f_px ≈ 1108 px. At Z = 60 m, d_px ≈ 4.1 px; at Z = 100 m, ≈ 2.4 px. The ball is a 2–4 pixel target. Inter-frame displacement at v = 30 m·s⁻¹ over Δt = 40 ms is 1.2 m, i.e. ≈ 22 px at Z = 60 m — a displacement-to-diameter ratio of ~5.5. **Veto corollary:** any frame-to-frame ball association based on spatial overlap is ill-posed at broadcast scale, which is why the descriptor uses displacement statistics μ_d, m_d rather than identities, and why the paper concedes it "does not yet model full ball trajectories, speed, acceleration, or player-relative ball geometry" [PAGE 8]. A hard falsification rule: with v_max ≈ 35 m·s⁻¹ for a struck ball, an inter-frame jump exceeding v_max·Δt·(f_px/Z) ≈ 26 px at Z = 60 m cannot be the same physical ball — it is a detector identity swap, and any f_b computed across it is corrupted.

**B. Aerodynamic singularity regime.** Reynolds number
$$\mathrm{Re} = \frac{\rho\, v\, D_b}{\mu} = \frac{1.225 \times 25 \times 0.22}{1.81\times10^{-5}} \approx 3.7\times10^{5}$$
sits inside the drag-crisis transition (Re_crit ≈ 2–3 × 10⁵ for a smooth sphere), where C_d falls from ≈ 0.47 to ≈ 0.20. **Breakdown:** in this band the map from observed trajectory to inferred impulse is ill-conditioned — two nearly identical flight paths can correspond to materially different drag states, so trajectory curvature cannot uniquely adjudicate "header (redirected)" versus "cross/clearance (undeflected)." Wind makes it worse: a 5 m·s⁻¹ cross-wind produces a lateral acceleration of order ½ρC_dA|v−w|²/m ≈ 6.8 m·s⁻², comparable to spin-induced Magnus forcing. **Weather veto:** in gusting conditions the ball-motion descriptor is physically incapable of separating contact-induced deflection from advective drift, and BMASH's own design accepts this by keeping ball evidence non-decisive.

**C. Biomechanical veto cross-check.** Header impulse with m_b = 0.43 kg, v_in = 15 m·s⁻¹, v_out ≈ −20 m·s⁻¹, contact duration τ_c ≈ 10 ms:
$$|\Delta p| = m_b|v_{out} - v_{in}| \approx 0.43 \times 35 = 15.05\ \mathrm{N\,s}, \qquad \bar{F} = \frac{|\Delta p|}{\tau_c} \approx 1505\ \mathrm{N}$$
With effective head mass m_h ≈ 5 kg: a ≈ 301 m·s⁻² ≈ 30.7 g. This lands inside the range reported by the instrumented-mouthpiece and xPatch literature the paper cites [19, 20]. **Veto rule:** a predicted "header" whose implied head acceleration falls far outside the ~10–50 g plausibility band is a deflection, a shoulder/chest control, or a detection artifact — it should be rejected before it enters an exposure count. This is precisely the "video confirmation" function the paper positions itself to automate [PAGE 3].

**D. Illumination / weather veto on the detector.** Rain, spray, and low sun depress c_i and r_i jointly, collapsing f_b toward the zero vector by the paper's own rule ("If no ball is detected, all values are set to zero" [PAGE 4]). In that regime BMASH reduces to Video Swin-32 — which is, by Table 3, the second-best configuration in the paper. The architecture degrades to its own strongest baseline rather than below it; that is the single most defensible property BMASH claims, and it is testable.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Veto 1 — Temporal-permutation of f_b (does ball *motion* matter, or just ball *presence*?).** Intervention: retrain the fusion MLP under the identical recipe (100 epochs, AdamW, batch 16, [PAGE 6]) but with the ten ball channels replaced by a version whose frames are circularly shifted within each window, preserving marginal means and variances while destroying temporal correspondence. Verifiable prediction: if the reported gain is genuinely motion-derived, the permuted model regresses toward Video Swin-32 (AP ≈ 0.942, ROC-AUC ≈ 0.942); if the gain is an artifact of adding ten regularising dimensions to a frozen-feature MLP, the permuted model retains AP ≈ 0.953. A single retrain on the same ten folds settles it. Paper-anchored threshold: genuine motion information must survive permutation with ΔAP ≥ +0.005 over the Video Swin-32 baseline of 0.9423 ± 0.0131.

**Veto 2 — Occlusion dose–response (the fallback claim is falsifiable).** Intervention: sweep an artificial detection-dropout rate q ∈ {0, 0.1, 0.3, 0.5, 0.7, 0.9}, forcing r_i = 0 and zeroing b_{t_i} for a fraction q of frames, then evaluate the frozen BMASH-32 fusion MLP on the fixed 529-window test set. Verifiable prediction, derived from the paper's own assertion that "When ball evidence is weak or missing, the classifier can rely more on the Video Swin action representation" [PAGE 5]: AP must decay **monotonically** and **boundedly**, never dropping below the Video Swin-32 clip-level floor of 0.9423 ± 0.0131 minus one σ, i.e. ≳ 0.929, even at q = 0.9 — because at q = 1 the input degenerates exactly to [f_v; 0]. Observation of AP below 0.929 at high q falsifies the graceful-fallback claim and proves the MLP has become ball-dependent. Secondary prediction: F1 falls faster than AP as q rises, since the threshold is calibrated to a ball-present score distribution.

**Veto 3 — Matched-pair fold test on the 0.0003 F1 gap.** Intervention: treat the ten folds as ten paired observations of (Video Swin-32 F1, BMASH-32 F1) on the identical test set, and run a paired sign test / Wilcoxon on the per-fold deltas (Figure 2 supplies the per-fold F1 values). Verifiable prediction: the event-level full-video F1 difference of 0.635 vs 0.636 (Δ = 0.001, n = 2 matches) is not distinguishable from zero, and the clip-level F1 difference of 0.8639 vs 0.8636 likewise fails to reach significance, while the clip-level AP difference (0.9530 vs 0.9423) and ROC-AUC difference (0.9507 vs 0.9418) *may* reach significance under pairing because the models share folds, checkpoints, and test windows. Decisive falsifier: if the paired AP test also returns p > 0.05 across the ten folds, the paper's headline claim reduces to a directionally consistent but statistically unestablished trend, and the honest summary is "BMASH-32 ties Video Swin-32 on every thresholded metric and may improve ranking." Both outcomes are informative; neither requires new data collection, only re-analysis of the ten existing checkpoints.
</RLVR_COUNTERFACTUAL_VETOES>