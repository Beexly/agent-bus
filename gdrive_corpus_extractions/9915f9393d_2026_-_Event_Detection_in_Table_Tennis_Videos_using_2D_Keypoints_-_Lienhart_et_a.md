---
source: "2026 - Event Detection in Table Tennis Videos using 2D Keypoints - Lienhart et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 9
model: deepseek/deepseek-v4.1-flash-1017
words: 8245
---

<NATIVE_REASONING>
We need answer user. Need interpret task. They give drive source paper, pages 9. They want GSE+GSI Frontier Reasoning Foundry with strict invariants, exact XML sections, >=1000 words. Need produce deep derivation and gray-zone audit, source operators/equations with LaTeX, units, page citations, breakdown regimes. No betting lines. This is academic paper. Need synthesize. Need ensure no betting/moneyline etc. Need cite exact [PAGE N] and verbatim quotes where possible. Need >=1000 words across exact sections. We can discuss EventNet event detection, time-to-event encodings, transformers, NaN handling, augmentation, extraction, metrics, limitations. Need perhaps "DRIVE SOURCE" maybe they expect analysis of paper in framework. We should not invent equations beyond source; formal equations can be source equations. We can derive multi-hop. We need include retrospective genealogy, recursive theory of mind? This seems odd for sports research. We should map to paper: historical lineage from pose-based event detection [2], TCN, decoupling video and human motion [3], to EventNet; multi-week traps maybe experimental confounds. Recursive theory of mind: "Crisis habit regression vs counter-trap vs clock" maybe interpret as model/agent behavior under crisis? Need adapt to source: EventNet pipeline, failure modes, false positives around threshold, clock = time-to-event signal, counter-trap = relative encodings, crisis habit regression = absolute linear saturation / baseline TCN reliance. Need mention no betting. Cross-layer veto adjudication: physical/biomechanical/weather veto proof. For table tennis, physical constraints: ball-racket contact = direction reversal; occlusion; viewpoint; fps; projection; body pose. Weather not relevant, but maybe weather veto = not applicable? Need state no atmospheric/weather variables in paper; weather cannot veto unless outdoor broadcast, not modeled. Biomechanical veto: upper-body pose does not help; ball visibility dominates; frontal views. Physical veto: NaN/occlusion/missing keypoints; 95% projection validity; 1920x1080; fps 25-60; Δt=3. Cross-layer veto proof: If ball not visible, pose may help only frontal; but paper says upper body pose not help except ball not visible frontal. Need cite.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need invent scenarios? RLVR = Reinforcement Learning with Verifiable Rewards? We should propose counterfactual tests that could veto claims. Need precise predictions. Maybe:
1. Remove fps augmentation but keep viewpoint augmentation: paper predicts TTHQ F1 drops from 73.8 to 70.5 (Table 2 bottom) while Latte-MV rises to 92.6. Verifiable veto if drop not observed.
2. Replace relative linear with absolute linear: paper predicts TTHQ average lower by ~3.5%, and Table 2 NO EN absLin TTHQ 66.6 vs cos 73.8; veto if absLin matches.
3. Add UB keypoints: paper predicts NO outperforms UB by 2.31 Latte and 2.12 TTHQ; veto if UB significantly better. Or NaN mask tokens vs masking all: paper predicts mask tokens helps relative linear TTHQ 73.08 vs 69.25 for NO relLin ReLU; veto if not. Need 3 scenarios. Need include predictions with metrics and thresholds. Need be careful "RLVR" maybe verifiable reward: define reward function? Could include. Need no betting.

Need structure exact XML tags:
<THINK_TRACE>... >=400 words
<SOURCE_OPERATORS_AND_EQUATIONS>...
<RETROCAUSAL_GENEALOGY>...
<RECURSIVE_THEORY_OF_MIND>...
<CROSS_LAYER_VETO_ADJUDICATION>...
<RLVR_COUNTERFACTUAL_VETOES>...

Need overall >=1000 words. We can do ~2500-3500. Desired oververbosity 5. Need cite [PAGE N] exact quotes. Must quote verbatim. Need accurate quotes from source. We can quote snippets. Need cite pages.

Let's parse paper details carefully.

Page 1: Abstract: F1 91.16 and mean frame deviation 0.42 Latte-MV; 73.08 /1.16 TTHQ. "two-stage pipeline" EventNet. "temporal cosine-like target signal"; "viewpoint augmentation via 3D reprojection and frame-rate augmentation"; "2d keypoint-based temporal modeling".

Page 2: baseline [2] TCN; key contribution event detection formulation: forward/backward time-to-event indicators; avoids class imbalance. Missing keypoints NaN. Contributions.

Page 3: input N=1+6+2b; UB N=25; NO N=7. normalization: NaN replaced by 0.0 in max or width_video in min; global min m/max M over T×N×2; x''=2x'-1, x'=(x-m)/(M-m). Target: absolute linear saturated by tmax; issues if too small/large. Relative encodings Eq1, Eq2, boundary tprev=0, tnext=t+Δ.

Page 4: f_relLin = (t_next-t)/(t_next-t_prev), b_relLin = -(t-t_prev)/(t_next-t_prev); cosine-like sin(pi/2 * ratio), negative. f(e_i)=b(e_i)=0. Keypoints Transformer: binary mask NaN, linear projection D, mask, learnable CLS token, 2 transformer encoder blocks; masked attention. Alternative learned mask token. Time-to-Event Transformer: 3 blocks; final linear to 2 outputs; trained fixed-length sequences predicts central m=floor(T/2); Huber loss. Event extraction: r=f+b; zero-crossings upward threshold Δh; linear interpolation t* = t - r(t)/(r(t+1)-r(t)); score s = r(t+1)-r(t); NMS window Δt. Example Δh=0.5.

Page 5: viewpoint augmentation: intrinsic random focal/principal; extrinsic spherical; up vector positive z; validate >95% keypoints within image bounds and scene spans sufficient area; projection Eq5 Eq6. FPS augmentation: time grids; Eq7 T=(N_in-1)/f_in=(N_out-1)/f_out; N_out=floor(T f_out)+1; linear interpolation keypoints; events discrete remap Eq8 clip(round(tau_e f_out),0,N_out-1); Eq9 event_out[e_out,c]=1.

Page 6: datasets: Latte-MV 9,803 train, 2,099 val, 2,103 test; viewpoint augmentation subset 2,328 train, 498 val with 3D valid >=70%; fps 30-60; test set never unchanged? "The test set was never unchanged." Hmm typo likely "never changed"? Need quote maybe not. TTHQ: six long videos split into 56 clips; 25-60 fps; RT-DETRv2, ViT-Pose-B, SegFormer++ B0. Player assignment cross product sign. Architecture details: batch 200, 30 epochs, Adam lr 5e-4, gamma 0.3 after epoch 2; EMA alpha 0.999 Eq10; two encoder layers d=128; time-to-event three encoder layers; NMS w=7, peak height 0.5.

Page 7: evaluation: assign closest predicted if within Δt=3; precision recall F1; L1 Diff. Results: EventNet vs baseline NO +6.2 absLin +3.8 cos Latte; UB +1.5 and -2.4. TTHQ increase 22.1 to 31.5. runtime factor 0.32-0.48. Ablation: relative linear best avg F1 89.00/89.91 vs cos 88.39/89.69 and absLin 88.22/86.17 for masking/mask tokens; L1 differences. FFN GELU best; Keypoint set NO outperforms UB by 2.31 Latte and 2.12 TTHQ (using mask tokens avg). FPS/viewpoint: no augmentation TTHQ 61.0; viewpoint only 70.5; both 73.8. Conclusion findings.

Page 8: Table 1 exact numbers; Table 2 baseline vs EventNet; augmentation. Table 2 bottom:
NO EN cos 3d fps: Latte 89.8, TTHQ 73.8
NO EN cos 3d –: Latte 92.6, TTHQ 70.5
NO EN cos – fps: Latte 92.3, TTHQ 55.5
NO EN cos – –: Latte 94.0, TTHQ 61.0
So paper says contrary fps augmentation doesn't consistently help; viewpoint effective; fps needs viewpoint. Good.

Page 9 references.

Need answer perhaps "source operators" not generic. Need formal LaTeX with units. Units: frames, dimensionless signals [−1,1] or [0,1], seconds, fps (s^-1), pixels, probability (F1 percentage), frame deviation (frames), latent dimensions D/d_model, batch B. Need state singularities/breakdown regimes:
- relative encodings denominator t_next - t_prev. Breakdown if adjacent events same frame? Then denominator zero. Boundary rules prevent no prev/next but not duplicate events. If t_next = t_prev (coincident events or event at same frame) singular. Paper doesn't discuss duplicate events. Also if t_next = t_prev for frame at event? At event both zero; ratio 0/0 at event? Wait at t=e_i, t_prev(t)=e_i and t_next(t)=e_i, denominator zero. Indeed equations have 0/0 at event. Paper says by construction f(e_i)=b(e_i)=0 but formula undefined at event if t_prev=t_next=e_i unless limit. Need highlight singularity/breakdown. Great. For t not event denominator positive. At event, both nearest previous and next are same event, denominator zero. They implicitly define value zero. We can state formal piecewise extension needed. This is a gray-zone. Need cite [PAGE 4] "By construction both encodings satisfy f(e_i)=b(e_i)=0 ∀e_i∈e" and Eq1/2. Good.

- cosine-like sin(pi/2 * ratio); if denominator zero.
- tmax saturation in absLin: clipping at 1/-1; if too small flat/saturated; if too large nearly flat.
- NaN normalization: max/min with NaN replaced by 0/width; if all missing? M=m zero denominator. Breakdown if all keypoints NaN or M=m.
- viewpoint projection validation >95% in bounds; discard otherwise. If frontal view event not visible -> precision suffers [PAGE 8].
- NMS window Δt=7 and threshold 0.5; if events within 7 frames, NMS may suppress true close events? Table event detection ball-racket contacts can be close? Need note breakdown when inter-event interval < NMS window; paper doesn't discuss but possible.
- evaluation Δt=3 frames; at 25 fps 3 frames = 0.12 s; at 60 fps 0.05 s. Need compute? 3/25=0.12 s; 3/60=0.05 s. Good.
- fps augmentation Eq7: N_out=floor(T f_out)+1; if f_out small, N_out? Breakdown if N_out <2 or events remap collisions; multiple events map to same frame; Eq9 sets 1; loss of multiplicity.
- Huber loss; central frame training; inference full sequence. Need no invented equations? Huber loss can state standard? Source says Huber loss but no formula. We can mention no formula given. If need formal LaTeX, can define generic Huber? But invariant says no toy equations; formal equations okay. But to avoid inventing, cite "Huber loss" not formula.

Need multi-hop derivation:
- Step 1: per-frame keypoints -> normalization -> Keypoints Transformer -> CLS z_t.
- Step 2: temporal sequence z -> Time-to-Event Transformer -> fhat,bhat.
- Step 3: rhat = fhat+bhat; zero-crossing detection threshold; interpolation; NMS.
- Step 4: evaluation matching Δt=3.
- Step 5: ablation attribution: relative encoding and viewpoint augmentation drive generalization; UB hurts.
Need "gray-zone audit": identify ambiguous claims:
1. "The test set was never unchanged" [PAGE 6] likely typo; cannot infer.
2. Abstract says TTHQ F1 73.08 /1.16 but Table 1 NO relLin ReLU mask tokens = 73.08 ±3.92, L1 1.16; yes. But Table 2 NO EN cos 3d fps = 73.8; abstract uses 73.08. Different config. Need not conflate.
3. Abstract F1 91.16 Latte-MV from Table 1 NO relLin SwiGLUFFN mask tokens; but default? It is best table entry. The abstract claims proposed approach achieves 91.16; but not necessarily default. Gray-zone.
4. Table 2 "NO EN cos" TTHQ 73.8 vs abstract 73.08; different encoding/FFN? Table 2 uses mask tokens + fps/viewpoint; "cos" maybe ReLU? Need not overclaim.
5. Keypoint set NO vs UB: average over variants; specific instances UB cos GELU masking all has TTHQ 73.79 > NO? Table 1 UB cos GELU masking all = 73.79, higher than many NO. So "NO outperforms UB" is average, not universal. Need audit.
6. Viewpoint augmentation: on Latte-MV, removing augmentation improves to 94.0; on TTHQ lower. So target domain matters. If deployment same camera, augmentation may hurt.
7. FPS augmentation: only helps with viewpoint augmentation on TTHQ; on Latte-MV hurts.
8. "2D keypoints generalize to diverse environmental settings" but TTHQ requires external detectors; error propagation not fully ablated.
9. "upper body pose did not help except ball not visible frontal" but no explicit quantitative frontal-only experiment? It is conclusion; Table 1 average supports not helpful, but exception qualitative.
10. "mean frame deviation 0.42" is L1 Diff of true positives only, not all events; excludes misses. Important. Page 7: "of all correctly detected events (i.e., true positives)". So low L1 can coexist with false negatives. Need state.

Need "Retrocausal genealogy": Historical/scientific lineage. From motion capture [5,15] -> raw video CNN [10,18,6,13,16,17] -> pose/keypoint sequences [2,11,21] -> decoupling video/human motion [3] -> baseline Einfalt et al 2019 TCN for long/triple jump -> EventNet 2026 extends to table tennis, replaces TCN with transformers, relative time-to-event, augmentations. Also 3D trajectory/spin estimation [4,8,9] assumes rally segmentation/events known; EventNet retrocausally supplies event timestamps enabling those pipelines. That is key. Multi-week traps: dataset bias (Latte-MV single side view, 30 fps), TTHQ distribution shift, using test set improperly? "The test set was never unchanged" maybe trap. Hyperparameter tmax difficult. NMS threshold. Evaluation match. Need mention "multi-week traps" as experimental traps: conflating configs, averaging over seeds, using true positives L1 only, not testing frontal views, not ablating detector errors, not measuring close-event suppression, viewpoint/fps interaction. Need not "weeks" literally? We can call "multi-week experimental traps" (long-horizon research traps).

Recursive theory of mind: "Crisis habit regression vs counter-trap vs clock." Need map:
- Crisis habit regression: under distribution shift (TTHQ viewpoints/fps), model may regress to baseline habits: absolute linear saturation, TCN? Or human researchers may overfit Latte-MV and rely on fixed fps/body pose. "Crisis habit regression" = when out-of-domain, model falls back to salient but brittle cues (body pose, absolute time-to-event, fixed camera). Counter-trap = relative time-to-event encodings + viewpoint/fps augmentation explicitly counter habitual absolute/fixed assumptions; but they can create a trap: viewpoint augmentation improves TTHQ but hurts Latte-MV; fps augmentation alone hurts. Clock = time-to-event signal itself; the model's internal clock; relative clock is robust but singular at events; NMS threshold and Δt define clock resolution. Need write with "theory of mind" maybe model's expectations of event timing; recursive: model predicts its own distance to next/previous event; evaluator's matching window; if model and evaluator clocks misalign, metrics. "Counter-trap" = the alternative design choices. Need mention no anthropomorphism? Fine.

Cross-layer veto adjudication: Need "Physical/biomechanical/weather veto proof." We need adjudicate vetoes across layers:
- Physical layer: ball-racket contact is physical direction reversal; if ball visible, it is best indicator [PAGE 8]. If occluded/NaN, pose may substitute but only frontal views; paper's conclusion. Veto: any method that ignores ball visibility cannot claim frame-accurate contact in frontal/occluded views. Weather: no weather variables in paper; outdoor weather not modeled; cannot invoke weather as explanation or veto. If source doesn't include weather, weather veto is inert. Need state "No weather input, no meteorological variable, no wind/rain/humidity equation appears in pages 1-9; therefore weather cannot adjudicate." Could mention indoor table tennis. Biomechanical: upper-body keypoints (head, shoulders, elbows, wrists, hips) don't help generally; NO outperforms UB; so biomechanical pose veto is weak. But in frontal ball invisible, pose may help. Physical camera geometry: viewpoint augmentation uses 3D reprojection; if >95% keypoints out of bounds, discard; frontal views event not visible. FPS: frame rate determines temporal resolution; at 25 fps Δt=3 = 0.12s; at 60 fps = 0.05s. Weather not relevant.
Need "proof" maybe formal:
Let V_phys be veto if ball visibility indicator =0 and pose set UB not active? Actually paper says upper body pose did not help except ball not visible frontal. We can formulate decision rule:
Detection confidence supported if r(t) crosses Δh upward and zero-crossing; but if ball keypoints NaN and viewpoint frontal, physical visibility condition fails; EventNet's claim to frame-accurate contact is vetoed unless alternative signal. This is derived from paper not explicit formula. Need be careful.

RLVR counterfactual vetoes: Need 3 verifiable scenarios. Let's define each with intervention, paper-derived prediction, falsification criterion. Need "RLVR" maybe reward verification. Could define reward:
R = 1 if F1_TTHQ(A) - F1_TTHQ(B) >= δ and L1 not worse? But no need. Maybe include "verifiable reward" as metric delta. Need 3.
Scenario 1: TTHQ viewpoint augmentation ablation. Intervention: train NO, cosine-like, same seed, remove viewpoint augmentation but keep fps; from Table 2 bottom: with 3d+fps TTHQ 73.8; with fps only 55.5. Prediction: removing 3D reprojection drops TTHQ F1 by ~18.3 absolute (73.8 ->55.5) and Latte-MV rises 89.8->92.3. Veto if drop <5 points or no rise. This is verifiable.
Scenario 2: relative vs absolute target encoding. Intervention: same NO, mask tokens, ReLU, compare relLin vs absLin. Table 1: NO relLin ReLU mask tokens TTHQ 73.08 vs NO absLin ReLU mask tokens 65.49; Latte 89.58 vs 86.55. Prediction: relLin improves TTHQ by ~7.59 points and Latte by ~3.03. Veto if absLin >= relLin or improvement <2 points. Need source exact numbers. Good.
Scenario 3: UB vs NO keypoint set. Intervention: same relLin ReLU mask tokens, compare NO vs UB. Table 1 NO relLin ReLU mask tokens Latte 89.58, TTHQ 73.08; UB relLin ReLU mask tokens Latte 85.35, TTHQ 66.96. Prediction: NO better by 4.23 Latte and 6.12 TTHQ for this config. Veto if UB > NO by >1 point. But paper's average says 2.31/2.12; specific config bigger. Good. Or NaN mask tokens vs masking all: NO relLin ReLU: mask all Latte 89.51, TTHQ 69.25; mask tokens Latte 89.58, TTHQ 73.08. Prediction: mask tokens improves TTHQ 3.83. Veto if not. Which is more verifiable? Need 3 distinct. Maybe include both? We need exactly 3 scenarios. Could choose:
1 viewpoint augmentation
2 relative encoding
3 NaN handling or keypoint set. Need "3 verifiable RLVR veto scenarios + predictions." Include one with keypoint set or NaN. Which is more robust? Keypoint set NO vs UB is central conclusion. NaN mask tokens is architecture. Let's include keypoint set because cross-layer biomechanical veto. Maybe include NaN as part? We need exactly 3, can mention additional in text? Better exactly three bullets.

Need ensure no betting lines. Mention "no odds/spreads/totals/moneylines" maybe not necessary but can say "No wager variables considered" but invariant says never mention; best avoid even saying "betting." We can mention "This is not a wager analysis" maybe no. Avoid all.

Need word count >=1000. We can write ~3000. Need exact XML. Use [PAGE N] citations. Verbatim quotes with quotation marks. Need not overquote too many. Ensure quotes exact.
Let's collect exact quotes:
PAGE 1: "automatic, frame-accurate event detection in table tennis videos"; "two-stage pipeline to detect key events"; "temporal cosine-like target signal"; "viewpoint augmentation via 3D reprojection and frame-rate augmentation"; "F1 score of 91.16% and a mean frame deviation between ground truth and predicted frame of 0.42 on the Latte-MV dataset and 73.08% / 1.16 on the challenging TTHQ dataset."
PAGE 2: "Instead of classifying each frame directly as event or non-event, it defines for every frame two target values for each event type: a forward and a backward time-to-event indicator value."; "avoids a severe class imbalance".
PAGE 3: "If 𝑡max is too small, only frames near events show meaningful values between 0 or 1, while distant frames at time 𝑡 saturate to the extreme value"; "If 𝑡max is chosen too large, the signal becomes nearly flat."; "clipped signals give no feedback during learning."
PAGE 4: "By construction both encodings satisfy 𝑓(𝑒𝑖)=𝑏(𝑒𝑖)=0 ∀𝑒𝑖∈e, while they take smooth, non-zero values between adjacent events."; "The model is optimized with Huber loss applied to the predicted forward and backward indicators."; "The first peak occurring around the 10th frame does not reach the predefined threshold of Δℎ= 0.5, thereby preventing a false positive prediction."
PAGE 5: "A camera pose and position is accepted only if more than 95% of all keypoints remain within the image bounds and the projected scene spans a sufficient portion of the image area."; "linear interpolation is not possible with discrete events. It would produce physically meaningless values."; "The clipping ensures that the index remains within the valid range."
PAGE 6: "The final selection consists of six long videos, which were split into shorter clips and recorded under varying camera viewpoints and frame rates, resulting in a total of 56 clips."; "The frame rates range from 25 to 60 fps."; "The test set was never unchanged." quote maybe typo. "The EMA model tracks a smoothed version of the weights".
PAGE 7: "a predicted event is considered correct if (a) its absolute temporal distance to the assigned ground truth does not exceed the maximum allowed frame distance Δ𝑡 and (b) there is no other closer predicted event."; "The F1 score is the harmonic mean of precision and recall."; "Additionally, the mean absolute frame deviation ... of all correctly detected events (i.e., true positives) is also reported."; "NO outperforms UB by 2.31% (88.59 vs. 86.28) on Latte-MV and by 2.12% (69.09 vs. 66.97) on TTHQ."; "Probably, the reversal of the ball’s direction provides the clearest signal".; "fps augmentation does not consistently help."; "the F1 score of 61.0% without any augmentation increases to 70.5% with viewpoint augmentations and further absolute 3.2 points to 73.8% by adding also fps augmentations."
PAGE 8: "there are viewpoint cases where the event is not visible and therefore the overall temporal precision suffers (e.g., frontal views in table tennis)."; "The upper body pose of the table tennis player did not help in the case of ball-racket contact estimation, except in cases where the ball is not visible such as for frontal view recordings."; Table 2 values.
Page 9 refs.

Need formal equations: We can reproduce Eq1-10. Need units. For Eq1/2: f,b dimensionless in [−1,1]? For relLin f in [0,1], b in [−1,0]; cos same. t,t_next,t_prev frames (or frame indices dimensionless). Denominator frames. Δh dimensionless threshold (0.5). s units? r dimensionless; s dimensionless. t* in frames. Eq4. Eq7 units: N_in,N_out counts; f_in,f_out s^-1; T seconds. Eq8 τ_e seconds; e_out frame index. Eq10 θ parameters unitless. Projection coordinates: r_world maybe mm/m? 3D coords; r_cam; r_img pixels. Need state.

Need singularity:
- Eq1/2 at event e_i: t_prev=t_next=e_i, so ratio 0/0. Paper defines zero by construction. Formal extension: f(e_i)=b(e_i)=0 as a convention; limit from left/right differs. Need state "The derivative jumps" maybe. At event, f jumps from positive to 0? Actually f decreases to 0 at event then resets to 1 after event? Wait f is distance to next event normalized by interval between prev and next. At event e_i, f=0. Just after event, previous = e_i, next = e_{i+1}, f = (e_{i+1}-t)/(e_{i+1}-e_i) near 1. So discontinuity in derivative? f jumps? At t=e_i+1, f=(e_{i+1}-e_i-1)/(interval) = 1 - 1/interval, not jump. At exact event f=0; just after, if one frame after, f=1-1/L. There is a jump from 0 to ~1 across event? Wait at t=e_i, f=0; at t=e_i+1, previous e_i, next e_{i+1}, f=(e_{i+1}-e_i-1)/(e_{i+1}-e_i)=1-1/L. That is near 1. So discrete jump. b at event 0; just after b=-(t-prev)/(next-prev)=-1/L, near 0. r=f+b =1-2/L? Actually at event r=0; after r~1. So zero crossing upward at event. Good.
- If adjacent events same frame L=0, undefined.
- If only one event and t before first: t_prev=0, t_next=e1; denominator e1-0 maybe nonzero if e1>0. If t after last: t_next=t+Δ, t_prev=e_last; denominator t+Δ - e_last; f=Δ/(t+Δ-e_last), b=-(t-e_last)/(t+Δ-e_last). At t=e_last, denominator Δ, f=1, b=0? Wait at last event, t_prev=e_last, t_next=t+Δ? But rule: if no future event exists after last, t_next(t)=t+Δ. At t=e_last, is e_last included as future? t_next = min{e_i≥t}=e_last, so denominator zero. Hmm boundary rule only if no future event exists (current frame after last). At last event itself, future exists equal t, so 0/0. They define zero. After last, f=Δ/(t+Δ-e_last) not zero; at event zero. Could mention.
- Normalization denominator M-m zero if all coordinates identical/NaN replaced; then undefined.
- Viewpoint projection validation is hard gate; if no camera accepted, augmented sample absent; selection bias.
- NMS window 7 frames: if two true contacts within 7 frames, NMS may remove one; paper doesn't evaluate close-event separability. Need state "not addressed, so potential breakdown."
- Evaluation matching: if predicted events within Δt=3 but one GT has closer predicted, etc. If false positives not matched, precision penalized. L1 only true positives.

Need answer in XML only. Could include preamble? They require exact XML sections. We can output only tags. Need no markdown? XML can contain LaTeX. Fine. Need ensure tags not with attributes. Use &? Avoid unescaped < in text. LaTeX has < ? We can use \lt or avoid. In XML text, "<" must be escaped. Need be careful. Use \lt instead of <. Use >? ">" okay but can escape. Ampersand & must be escaped as &amp;. In LaTeX equations, use \&? Avoid ampersands. Use "and" not &. Use "≤" unicode okay. Use "×" okay. Need not include raw "<". Use "less than" or \lt. For equations, use "\[
...
\]" okay but if contains "<" use \lt. Avoid `&` alignment. Use `\begin{aligned}` requires &; avoid. Use separate equations.

Need include exact quotes with `[PAGE 4]` etc. Quotes may contain `%` okay. Need no raw `<` in quotes? Quote "within [−1,1]" no. Quote "more than 95%" okay. Quote "F1 score of 91.16%" okay. Quote "t_max" maybe. Use `t_{\max}`.

Need maybe cite page markers exactly [PAGE N]. User says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We should use [PAGE 1], [PAGE 2] etc. Good.

Need include word count maybe not. Could mention "Word count: ~..." but not necessary. We need guarantee >=1000. We'll write robust.

Let's draft sections.

THINK_TRACE >=400 words. Need deep multi-hop derivation and gray-zone audit. We can write maybe 700 words. Include steps and audits. Need mention exact pages and quotes. Use no XML special chars. Use equations? Could include some. But source operators section has equations. Think trace can discuss.

Potential THINK_TRACE:
- The paper's pipeline: from raw unedited video -> detectors -> per-frame keypoint tensor x ∈ R^{T×N×2}; N=1+6+2b; UB N=25, NO N=7 [PAGE 3]. Normalization [−1,1] using global min/max; NaN replaced 0/width.
- Keypoints Transformer maps each frame to CLS z_t ∈ R^D; NaN mask and masked attention; alternative mask tokens. Time-to-Event Transformer maps z_1:T to (fhat,bhat). Training central frame m=floor(T/2), Huber. r=f+b; zero-crossing threshold Δh; interpolation; NMS.
- Multi-hop: event detection relies on temporal signal not classification; avoids class imbalance [PAGE2]. Relative encodings make pattern invariant to fps and ball speed. Viewpoint augmentation via 3D reprojection simulates cameras; fps augmentation resamples keypoints and remaps discrete events.
- Audit: Eq1/2 singular at event (0/0) and duplicate events. The paper's statement "By construction both encodings satisfy..." hides convention. Normalization singular if M=m. Evaluation L1 true positives only. Abstract best F1 91.16 from Table 1 NO relLin SwiGLUFFN mask tokens; TTHQ 73.08 from NO relLin ReLU mask tokens; Table 2 73.8 from NO EN cos; don't conflate. "NO outperforms UB" average, not every cell: UB cos GELU masking all TTHQ 73.79 vs NO cos GELU masking all 71.36, so exception. Viewpoint augmentation trades Latte-MV (94.0 no aug vs 89.8 both) for TTHQ (61.0 no aug vs 73.8 both). FPS augmentation alone TTHQ 55.5, so interaction. Frontal view exception qualitative. Detector errors not ablated.

SOURCE_OPERATORS_AND_EQUATIONS: list equations with units and breakdown. Need maybe 600 words. Include exact LaTeX. Need cite. We can format:
1. Input tensor: \(x\in\mathbb{R}^{T\times N\times 2}\), \(N=1+6+2b\), UB N=25, NO N=7 [PAGE 3]. Units pixels before normalization; dimensionless after.
2. Normalization: \(x'=(x-m)/(M-m)\), \(x''=2x'-1\), \(m=\min(x)\), \(M=\max(x)\) over T×N×2 [PAGE 3]. Missing NaN replacement. Breakdown \(M=m\), all-missing.
3. Relative linear Eq1; cosine Eq2. Units: frame indices; outputs dimensionless. Boundary \(t_{\rm prev}=0\), \(t_{\rm next}=t+\Delta\). Singularity at \(t=e_i\) and duplicate events.
4. Event indicator Eq3; zero-crossing interpolation Eq4; score \(s=r(t+1)-r(t)\); NMS window Δt. Δh=0.5, w=7 [PAGE 4/6]. Units frames/dimensionless. Breakdown close events.
5. Viewpoint projection Eq5/6; validation gate >95%. Units pixels; camera intrinsics. Breakdown no accepted camera/occlusion.
6. FPS Eq7-9; units. Breakdown N_out small, event collision.
7. EMA Eq10.
Maybe Huber loss no equation given.

Need include "exact singularity/breakdown regimes" explicitly. Good.

RETROCAUSAL_GENEALOGY: lineage and multi-week traps. ~400 words. Mention refs [5,15] motion capture, raw video [10,18,6,13,16,17], pose [2,11,21], [3] decoupling, [2] TCN baseline, EventNet. Retrocausal: EventNet supplies event timestamps to 3D trajectory/spin [4,8,9] that assumed events known [PAGE1]. "Retrocausal" because downstream 3D analysis was blocked by missing upstream event detection; EventNet retroactively enables. Multi-week traps: single viewpoint Latte-MV, fixed fps, tmax, L1 true positives, averaging, NMS, detector stack TTHQ, frontal views. Good.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. ~400 words. Need define terms. "Crisis habit regression" = under OOD stress model/reliance reverts to absolute linear/fixed fps/body pose. "Counter-trap" = relative encodings and augmentations; but counter-trap can overcorrect: viewpoint aug hurts in-domain; fps alone hurts; UB can sometimes help. "Clock" = time-to-event signal; relative clock resets at each event; evaluation clock Δt=3; NMS clock w=7. Recursive: model predicts distance to next/previous event; evaluator independently matches within Δt; if both clocks disagree, F1 penalizes. Need mention "theory of mind" maybe not anthropomorphic; it's an expectation model. Good.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. ~400 words. Physical: ball direction reversal best signal [PAGE8 quote]; if ball invisible frontal, precision suffers; if NaN, mask. Biomechanical: upper body did not help generally; NO outperforms UB; exception frontal. Weather: no weather variables; not a valid veto; indoor. Camera geometry: >95% gate; fps. Need maybe adjudicate "veto" as: any claim of universally frame-accurate detection is vetoed by occlusion/frontal; any claim pose improves is vetoed by Table 1 averages; weather cannot veto because absent. Good.

RLVR_COUNTERFACTUAL_VETOES: 3 bullets with interventions and predictions. Need include thresholds. Use exact Table 1/2 numbers. Need cite [PAGE 8], [PAGE 7]. We can define "RLVR reward = sign and magnitude of metric delta; veto if predicted sign fails or |delta| below threshold." Fine.

Need ensure no "betting lines" words. Avoid "odds", "spread", "moneyline", "total", "bet". "total" appears? We can avoid. "score" okay. "F1 score" okay. No wager.

Need ensure XML valid. We'll use Unicode, no raw `<` or `&`. In equations, use \( \) with less-than? Use `\lt` or `less than`. But TeX `\lt` not standard? Use `\mathrel{<}`? Contains `<` raw invalid. Avoid. Use `\le`? Contains no `<`? `\le` is backslash le. Good. Use `\ge`, `\le`. For "less than" write words. For arrows, `\to` okay. Ampersand avoid. In aligned environments, avoid `&`. Use separate display equations.

Need quotes may include `<`? No.

Need use `[PAGE 3]` markers. Good.

Let's write final with sections. Ensure each tag has content. Word count likely >3000. Need not include markdown outside. Let's produce.

Potential issue: "Weather veto proof" - they ask "Physical/biomechanical/weather veto proof." Need explicitly "Weather veto: not applicable; no meteorological variable appears in pages 1-9." That is proof? State absence. Good.

Need "Crisis habit regression vs counter-trap vs clock" exactly. Use those terms.

Need ">= 1,000-word depth across these exact XML sections" maybe they might sum. We have enough.

Let's craft final carefully.

Need include "source operators" maybe term "operator" for transformer? We can call Keypoints Transformer operator KT, Time-to-Event Transformer operator TE, event extraction operator E. Formal:
\[
z_t = \mathrm{CLS}(\mathrm{KT}(x_t))
\]
\[
(\hat f(t),\hat b(t)) = \mathrm{TE}(z_{1:T})
\]
\[
\hat r(t)=\hat f(t)+\hat b(t)
\]
These are source architecture, okay. Units D latent dimension. Need cite pages 4-5. Good.

Breakdown regimes:
- KT: if all N keypoints NaN for frame, only CLS token with mask; representation constant; source doesn't specify fallback.
- TE: fixed sequence T=29 and central frame; inference full sequence. If video shorter than T? Source not specify; potential.
- Event extraction: zero crossing threshold; if r never crosses threshold, no event; if multiple crossings within NMS w=7, suppress; if two contacts less than 7 frames apart, likely one suppressed. Need say "not tested in reported tables; a breakdown risk rather than demonstrated failure." That's safe.

Need mention "mean frame deviation 0.42" units frames. TTHQ 1.16 frames. At 25-60 fps, convert to seconds: 0.42/30? But fps variable. For Latte 30 fps, 0.42 frames = 14 ms. TTHQ 1.16 frames at 25 fps = 46.4 ms; at 60 fps = 19.3 ms. Need compute: 0.42/30=0.014 s. 1.16/25=0.0464 s; /60=0.01933 s. Good. Could include units. Need not too much.

Need exact quote "The test set was never unchanged." Might be a typo; mention as gray zone. It says "The test set was never unchanged." Actually page 6: "The test set was never unchanged." This is odd. We can quote and say ambiguous. But "never unchanged" could mean never modified? Actually "never unchanged" means always changed? Maybe typo for "never changed". This is a gray zone. Mention in audit: "The sentence 'The test set was never unchanged' [PAGE 6] is internally ambiguous/typo-like; I do not use it as evidence of protocol." Good.

Need no raw `&` in XML. Avoid "R&D". Use "and". In quotes, "F1 Score" no ampersand.

Need use "2D" not "2d"? Fine.

Need not use `>` raw? XML allows `>` but safer use `\gt` or words. In equations, `\ge` okay. Use `\to`. In text, "more than 95%" not `>95%`.

Need if using `\mathbb{R}^{T \times N \times 2}` okay. No raw `<`.

Need use "−" unicode. Fine.

Let's formulate.

Potential issue: "RLVR_COUNTERFACTUAL_VETOES" wants 3 verifiable RLVR veto scenarios + predictions. We'll include a short definition and three numbered bullets. Use "Veto condition" and "Prediction". Good.

Need maybe include "counterfactual" interventions with same seeds? Source trained 3 seeds. We can say "same architecture, same seed set, same T=29, Δt=3". Good.

Let's write final now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s causal chain is not a single classifier. It is a two-stage temporal estimator: raw broadcast video is first converted into a per-frame 2D keypoint tensor, then a Keypoints Transformer condenses each frame into a CLS descriptor, and a Time-to-Event Transformer maps the descriptor sequence to two continuous timing signals. The input tensor is \(x \in \mathbb{R}^{T \times N \times 2}\), with \(N = 1 + 6 + 2b\); the paper defines two keypoint sets: “UB = upper body = {ball, table, head, shoulders, elbows, wrists, hips}, \(N = 25\)” and “NO = no body points = {ball, table}, \(N = 7\)” [PAGE 3]. The normalization is sequence-global: missing values are replaced for the min/max computation, then \(x' = (x-m)/(M-m)\) and \(x'' = 2x' - 1\), forcing coordinates into \([-1,1]\) [PAGE 3]. This matters because the later transformer is not receiving pixel-scale absolute geometry; it receives a bounded, sequence-relative geometry. The first transformer uses a NaN mask and masked attention, appends a learnable CLS token, and retains only the CLS output per frame [PAGE 4]. The second transformer is an encoder-only stack of three blocks that predicts \(\hat f(t)\) and \(\hat b(t)\) for the central frame during training, with Huber loss [PAGE 4]. Event extraction is a separate operator: \(\hat r(t)=\hat f(t)+\hat b(t)\), then upward zero-crossings above a threshold \(\Delta_h\), linear interpolation of the crossing, and non-maximum suppression with window \(\Delta_t\) [PAGE 4]. The default inference report uses \(w=7\) frames and minimal peak height \(0.5\) [PAGE 6].

The multi-hop derivation is: event timing is encoded as a relative clock between adjacent events, not as a rare frame label. The paper says the baseline “defines for every frame two target values for each event type: a forward and a backward time-to-event indicator value,” which “avoids a severe class imbalance at training time” [PAGE 2]. The new encodings replace the absolute saturated signal because \(t_{\max}\) was difficult to tune: if too small, distant frames saturate; if too large, “the signal becomes nearly flat,” and “clipped signals give no feedback during learning” [PAGE 3]. The relative linear and cosine-like equations make every inter-event interval follow the same normalized pattern. That is why the paper can claim robustness to fps and ball speed: the target is a shape between adjacent events, not an absolute number of frames.

The gray-zone audit has several entries. First, the equations as printed are singular at the event itself: at \(t=e_i\), the nearest previous and next events coincide, so \(t_{\rm next}-t_{\rm prev}=0\). The paper states “By construction both encodings satisfy \(f(e_i)=b(e_i)=0\)” [PAGE 4], but that is a convention/limit, not a direct evaluation of the displayed ratios. Second, duplicate or same-frame events would also make the denominator zero. Third, the normalization denominator \(M-m\) is undefined if all coordinates are equal or all missing. Fourth, the reported L1 frame deviation is only over true positives: “the mean absolute frame deviation ... of all correctly detected events (i.e., true positives) is also reported” [PAGE 7], so a low L1 value does not describe missed events. Fifth, the abstract’s 91.16% Latte-MV F1 and 73.08%/1.16 TTHQ numbers are not the same configuration as every table row: 91.16 appears in Table 1 for “NO, relative linear, SwiGLUFFN” with mask tokens [PAGE 8], while Table 2’s “NO EN cos 3d fps” reports 73.8 TTHQ [PAGE 8]. These must not be conflated. Sixth, “NO outperforms UB by 2.31% ... on Latte-MV and by 2.12% ... on TTHQ” [PAGE 7] is an average over variants; it is not a universal cell-by-cell dominance. For example, Table 1 shows UB cosine-like GELU with mask-all-NaN at 73.79 TTHQ, above several NO rows [PAGE 8]. Seventh, viewpoint augmentation improves TTHQ but can hurt in-domain Latte-MV: Table 2 shows 94.0 Latte-MV with no augmentation versus 89.8 with both augmentations, while TTHQ moves from 61.0 to 73.8 [PAGE 8]. Eighth, “The test set was never unchanged” [PAGE 6] is typo-like and should not be treated as a protocol proof. Finally, the frontal-view exception is qualitative: “there are viewpoint cases where the event is not visible and therefore the overall temporal precision suffers (e.g., frontal views in table tennis)” [PAGE 8]. The paper does not report a frontal-view-only ablation table, so that exception is plausible but not fully isolated.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines the input as a sequence tensor \(x \in \mathbb{R}^{T \times N \times 2}\), where \(T\) is frames, \(N\) is keypoints per frame, and the last dimension is normalized \((x,y)\) coordinates [PAGE 4]. The keypoint count is \(N = 1 + 6 + 2b\), with UB \(N=25\) and NO \(N=7\) [PAGE 3]. Units: raw coordinates are pixels; after normalization they are dimensionless in \([-1,1]\). The normalization stated is:
\[
m=\min(x),\qquad M=\max(x),\qquad x'=\frac{x-m}{M-m},\qquad x''=2x'-1.
\]
Missing NaN entries are replaced by \(0.0\) in the max operation or by \(width_{\rm video}\) in the min operation before computing \(m,M\) [PAGE 3]. Breakdown regimes: \(M=m\) gives division by zero; an all-missing or constant-coordinate frame collapses the representation; sequence-global min/max makes each sequence’s scale depend on its most extreme visible or imputed point.

The two relative timing encodings are:
\[
f_{\rm relLin}(t)=\frac{t_{\rm next}(t)-t}{t_{\rm next}-t_{\rm prev}},
\qquad
b_{\rm relLin}(t)=-\frac{t-t_{\rm prev}(t)}{t_{\rm next}-t_{\rm prev}},
\]
and
\[
f_{\rm cos}(t)=\sin\left(\frac{\pi}{2}\frac{t_{\rm next}(t)-t}{t_{\rm next}-t_{\rm prev}}\right),
\qquad
b_{\rm cos}(t)=-\sin\left(\frac{\pi}{2}\frac{t-t_{\rm prev}(t)}{t_{\rm next}-t_{\rm prev}}\right).
\]
Here \(t,t_{\rm prev},t_{\rm next}\) are frame indices, so the ratios are dimensionless; \(f\) lies in \([0,1]\) and \(b\) in \([-1,0]\) away from events. The boundary rules are \(t_{\rm prev}(t)=0\) if no previous event exists, and \(t_{\rm next}(t)=t+\Delta\) if no future event exists, with \(\Delta\) a fixed positive constant [PAGE 3]. Exact singularity: at \(t=e_i\), \(t_{\rm prev}(t)=t_{\rm next}(t)=e_i\), so the displayed denominator is zero. The paper’s zero value “by construction” is therefore a piecewise convention, not a direct ratio [PAGE 4]. Duplicate adjacent events and same-frame events also create a zero denominator; the paper does not report a duplicate-event handling rule.

The event signal and extraction operators are:
\[
r(t)=f(t)+b(t),
\]
\[
t^{*}=t-\frac{r(t)}{r(t+1)-r(t)},
\]
with candidate score \(s=r(t+1)-r(t)\) [PAGE 4]. Units: \(r\) and \(s\) are dimensionless; \(t^{*}\) is a frame index. The zero-crossing threshold is \(\Delta_h=0.5\), and NMS uses a window of \(w=7\) frames [PAGE 4, PAGE 6]. Breakdown regimes: if \(r(t)\) never rises above \(\Delta_h\), no event is emitted; if two true contacts occur within the NMS window, one can be suppressed; if \(r(t+1)-r(t)=0\), the interpolation denominator vanishes. The paper’s example explicitly uses the threshold to reject a peak: “The first peak occurring around the 10th frame does not reach the predefined threshold of \(\Delta_h=0.5\), thereby preventing a false positive prediction” [PAGE 4].

The 3D reprojection augmentation uses:
\[
r_{\rm cam}=\mathrm{world2cam}(r_{\rm world},M_{\rm ext}),
\qquad
r_{\rm img}=\mathrm{cam2img}(r_{\rm cam},M_{\rm int}),
\]
with intrinsic matrix \(M_{\rm int}\) and extrinsic matrix \(M_{\rm ext}\) [PAGE 5]. Units: world/camera coordinates are physical length units in the reconstruction; \(r_{\rm img}\) is pixels. The acceptance gate is strict: a camera is accepted only if “more than 95% of all keypoints remain within the image bounds and the projected scene spans a sufficient portion of the image area” [PAGE 5]. Breakdown: if no sampled camera passes the gate, that augmented sample is discarded; the gate also biases toward cameras that keep most keypoints inside the frame, not necessarily cameras that preserve the event’s visibility.

The fps augmentation uses:
\[
T=\frac{N_{\rm in}-1}{f_{\rm in}}=\frac{N_{\rm out}-1}{f_{\rm out}},
\qquad
N_{\rm out}=\lfloor T f_{\rm out}\rfloor+1,
\]
with \(f_{\rm in},f_{\rm out}\) in \(\mathrm{s}^{-1}\), \(T\) in seconds, and \(N_{\rm in},N_{\rm out}\) as frame counts [PAGE 5]. Event remapping is discrete:
\[
e_{\rm out}=\mathrm{clip}\left(\mathrm{round}(\tau_e f_{\rm out}),0,N_{\rm out}-1\right),
\qquad
\tau_e=\frac{e}{f_{\rm in}},
\]
and then
\[
\mathrm{event}_{\rm out}[e_{\rm out},c]=1.
\]
Units: \(\tau_e\) is seconds; \(e_{\rm out}\) is an integer frame index. The paper states the physical reason: “linear interpolation is not possible with discrete events. It would produce physically meaningless values” [PAGE 5]. Breakdown: small \(N_{\rm out}\) or many nearby events can map multiple events to one frame; Eq. 9 stores only presence, not multiplicity. The EMA update is:
\[
\theta_{\rm EMA}\leftarrow \alpha\theta_{\rm EMA}+(1-\alpha)\theta_{\rm current},
\]
with \(\alpha=0.999\) [PAGE 6]. Parameters are dimensionless; breakdown is not mathematical but practical: EMA lags rapid weight changes and is used for all evaluation and inference in the reported experiments [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs from sensor-heavy motion capture and controlled key-pose recognition [5,15], through raw-video CNN action spotting [6,10,13,16,17,18], to pose/keypoint sequence models [2,3,11,21]. The immediate ancestor is Einfalt et al. [2], a TCN-based frame-level event detector for athletics foot-ground contact; the paper explicitly says it “significantly extend and improve the work of [2] on frame-accurate event detection of foot ground contact in long jump and triple jump using 2d keypoint sequences” [PAGE 2]. EventNet keeps the time-to-event formulation but replaces the TCN with a Keypoints Transformer plus a Time-to-Event Transformer, adds relative linear and cosine-like targets, and adds 3D-reprojection viewpoint augmentation and fps augmentation [PAGE 2, PAGE 4].

The retrocausal relation is explicit. Recent table-tennis 3D trajectory and spin work [4,8,9] “usually assume that rallies are already segmented and timestamps of important events (such as ball-racket contacts or bounces on the table) are known in advance,” and this assumption “is rarely satisfied, especially for long, uncut broadcast videos” [PAGE 1]. EventNet retroactively supplies the missing upstream timestamps that those downstream 3D pipelines need. In that sense, the event detector is not merely another sports-video classifier; it is an enabling layer for later physical reconstruction.

The multi-week traps are mostly protocol and attribution traps. First, Latte-MV is single-side-view and 30 fps, while TTHQ is “recorded under varying camera viewpoints and frame rates” with “frame rates range from 25 to 60 fps” [PAGE 6]. A model tuned only on Latte-MV can look excellent in-domain and fail cross-domain. Second, the absolute linear signal’s \(t_{\max}\) is a hidden hyperparameter; the paper records that too-small values saturate and too-large values flatten the target [PAGE 3]. Third, the L1 metric is computed only on correctly detected events [PAGE 7], so a low L1 is not a full error metric. Fourth, “NO outperforms UB” is an average over architecture, FFN, and NaN-handling variants; treating it as a universal law is a trap [PAGE 7, PAGE 8]. Fifth, augmentation interactions are non-additive: Table 2 shows that fps augmentation alone gives 55.5 TTHQ while no augmentation gives 61.0, yet both augmentations give 73.8 [PAGE 8]. Sixth, the TTHQ pipeline uses external RT-DETRv2, ViT-Pose-B, and SegFormer++ B0 detectors [PAGE 6]; detector error is part of the reported result but is not separately ablated in the pages. Seventh, NMS with \(w=7\) frames can merge close contacts, and the paper does not report a close-event stress test. Eighth, the frontal-view failure is acknowledged but not tabulated: “there are viewpoint cases where the event is not visible and therefore the overall temporal precision suffers (e.g., frontal views in table tennis)” [PAGE 8]. These are the long-horizon traps: in-domain gains can be bought by sacrificing cross-domain robustness, and average improvements can hide specific-cell reversals.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression here means the model or the research protocol reverts to a brittle habit when the input distribution shifts. The brittle habit is the absolute linear clock: it assumes a stable \(t_{\max}\), fixed fps, and roughly stable ball speed. The paper documents exactly why that habit fails: if \(t_{\max}\) is too small, distant frames saturate to \(1\) and \(-1\); if too large, the signal is nearly flat; either way “clipped signals give no feedback during learning” [PAGE 3]. Under TTHQ’s 25–60 fps and diverse viewpoints [PAGE 6], that habit is a regression to an in-domain assumption. A second habit is body-pose reliance: the upper body is semantically salient, but the paper finds “NO outperforms UB by 2.31% ... on Latte-MV and by 2.12% ... on TTHQ” [PAGE 7], and concludes “body pose does not help in our specific event detection task” [PAGE 7]. The crisis habit is to add human keypoints because they look causal; the data say the ball’s direction reversal is the better cue.

The counter-trap is the set of design choices that deliberately break those habits: relative linear and cosine-like targets, fps augmentation, 3D-reprojection viewpoint augmentation, and NaN masking. These are counter-habits, not automatic wins. The counter-trap can overcorrect: viewpoint augmentation raises TTHQ from 61.0 to 73.8 but lowers Latte-MV from 94.0 to 89.8 in the ablation [PAGE 8]. FPS augmentation alone lowers TTHQ to 55.5; it only helps when combined with viewpoint augmentation, reaching 73.8 [PAGE 8]. So the recursive lesson is that a robustness intervention must be evaluated against the target deployment distribution, not against a universal “more augmentation is better” prior.

The clock is the time-to-event signal itself, plus the evaluator’s clock. The model predicts \(\hat f(t)\) and \(\hat b(t)\), the distances to the next and previous event; the evaluator independently assigns a predicted event to a ground truth only if it is within \(\Delta_t=3\) frames and is the closest prediction [PAGE 7]. Recursive theory of mind appears as a double timing contract: the model’s internal clock says where the event should be, while the evaluator’s clock decides whether that claim counts. If the model’s zero-crossing occurs four frames early at 30 fps, it is outside the matching window even if the shape of \(r(t)\) is plausible. At 25 fps, \(\Delta_t=3\) frames is \(0.12\) s; at 60 fps it is \(0.05\) s. The NMS clock \(w=7\) frames is another layer: it suppresses nearby candidates even if the timing model produced two distinct zero-crossings. Thus the “theory of mind” is not anthropomorphic; it is the alignment of three clocks: the relative inter-event target clock, the model’s predicted zero-crossing clock, and the evaluator/NMS clock. The paper’s threshold example shows the gate in action: a peak near frame 10 “does not reach the predefined threshold of \(\Delta_h=0.5\)” and is rejected [PAGE 4].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto. The strongest physical cue in the paper is ball-direction reversal. The authors state: “Probably, the reversal of the ball’s direction provides the clearest signal for the example event detection task chosen” [PAGE 7]. That supports ball-center keypoints as the primary physical evidence. But the physical layer can veto any claim of universal frame accuracy when the ball is not visible. The paper explicitly warns: “there are viewpoint cases where the event is not visible and therefore the overall temporal precision suffers (e.g., frontal views in table tennis)” [PAGE 8]. If the ball center is NaN, the Keypoints Transformer masks it; if the event is physically occluded, the model cannot recover the exact contact frame from absent evidence. The 95% projection gate in viewpoint augmentation is also a physical-geometry veto: cameras that push too many keypoints outside the image are discarded [PAGE 5]. This prevents impossible synthetic views, but it does not guarantee event visibility.

Biomechanical veto. The biomechanical layer is weaker than intuition suggests. The paper’s conclusion is explicit: “The upper body pose of the table tennis player did not help in the case of ball-racket contact estimation, except in cases where the ball is not visible such as for frontal view recordings” [PAGE 8]. Table 1’s average supports NO over UB: 88.59 vs 86.28 on Latte-MV and 69.09 vs 66.97 on TTHQ using mask tokens and averaging over time-to-event and FFN variants [PAGE 7]. Therefore a biomechanical argument that “racket contact is a body action, so body keypoints must improve timing” is vetoed as a general claim. The only surviving biomechanical exception is the occluded/frontal case, and the paper does not provide a frontal-only quantitative table; it is a qualitative exception, not a proven universal rescue. Specific-cell reversals exist: UB cosine-like GELU with mask-all-NaN reaches 73.79 TTHQ [PAGE 8], so the veto is against the universal claim, not against every UB configuration.

Weather veto. No meteorological variable, wind vector, rain flag, humidity, temperature, or outdoor-scene model appears in pages 1–9. The dataset description is table-tennis broadcast video with static per-video cameras and controlled or semi-broadcast YouTube content [PAGE 6]. Therefore weather cannot be used as an explanatory layer or as a valid veto of EventNet’s reported metrics. A weather-based objection would be inert unless a new experiment introduced outdoor or airflow-corrupted footage. The relevant physical cross-layer variables are instead camera viewpoint, frame rate, ball visibility, keypoint NaN rate, and 3D projection validity. Those are the layers that can actually veto the paper’s claims.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
I define the verifiable reward as the signed metric delta on a fixed test set with fixed architecture, fixed \(T=29\), fixed \(\Delta_t=3\), and the paper’s three-seed protocol. A veto fires if the predicted sign reverses or if the absolute delta falls below the stated threshold. All three counterfactuals are directly checkable against Table 1 and Table 2 [PAGE 8].

1. Viewpoint-augmentation counterfactual. Intervention: keep NO, cosine-like, mask tokens, and fps augmentation fixed, but remove the 3D-reprojection viewpoint augmentation. Prediction from Table 2: TTHQ F1 should fall from 73.8 to 55.5, an absolute drop of about 18.3 points, while Latte-MV F1 should rise from 89.8 to 92.3 [PAGE 8]. Veto condition: if removing viewpoint augmentation does not produce a TTHQ drop of at least 10 absolute F1 points, or if Latte-MV does not rise by at least 1 point, then the paper’s claim that viewpoint augmentation is “highly effective to adapt to different viewpoints” [PAGE 7] is not reproduced in that counterfactual.

2. Relative-encoding counterfactual. Intervention: keep NO, ReLU, and mask tokens fixed, and replace relative linear with absolute linear. Prediction from Table 1: TTHQ F1 should fall from 73.08 to 65.49, an absolute drop of about 7.59 points, and Latte-MV should fall from 89.58 to 86.55, an absolute drop of about 3.03 points [PAGE 8]. Veto condition: if absolute linear matches or exceeds relative linear on TTHQ by more than 1 point, or if the TTHQ advantage of relative linear is below 2 points, then the paper’s claim that relative time-to-event encodings improve cross-domain timing is vetoed for that configuration.

3. Keypoint-set counterfactual. Intervention: keep relative linear, ReLU, and mask tokens fixed, and compare NO against UB. Prediction from Table 1: NO should beat UB on Latte-MV, 89.58 vs 85.35, and on TTHQ, 73.08 vs 66.96 [PAGE 8]. Veto condition: if UB exceeds NO on TTHQ by more than 1 absolute F1 point under this exact configuration, then the general biomechanical claim that upper-body pose does not help is vetoed. A weaker version of the veto can also be tested by averaging across FFN and NaN variants: the paper predicts NO over UB by 2.31 points on Latte-MV and 2.12 points on TTHQ [PAGE 7]; if UB wins the average by more than 1 point on TTHQ, the average-level conclusion fails.