---
source: "2026 - Perceiving and Predicting Dynamic Sports Spatiotemporal Intelligence in Vision Models for Egocentric Tennis Video - Braicu et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 8
model: deepseek/deepseek-v4.1-flash-1017
words: 8702
---

<NATIVE_REASONING>
The user wants a deep analysis of this paper using the exact XML sections. No betting lines. Must be ≥1000 words total, with THINK_TRACE ≥400 words. Must cite [PAGE N] markers and verbatim quotes. Need formal LaTeX equations with units, assumptions, singularity/breakdown regimes. Need retrotcausal genealogy, recursive theory of mind, cross-layer veto adjudication, RLVR counterfactual vetoes (3 verifiable scenarios + predictions).

This is a sports science / vision paper. Need to be careful: no betting content. Just technical analysis. Let's produce a rigorous document.

Let me gather key numbers from the paper:

- Dataset: 85 rallies, 53,155 egocentric frames, ~29.6 minutes, ego camera 29.97 fps, 3840×2160; 5 allocentric cameras, 29.97 or 59.94 fps, ≥5120×2880. 557 ego shots, 574 opponent shots; 328 forehands, 229 backhands. Free play 29 rallies, structured practice 56, four patterns.
- Annotation: 3 back cameras used for triangulation; downscale 1280×720; manual correction ball 30.5%, player 5.8%; median reprojection 2.1–4.4 px ball, 3.3–9.7 px player; ball 99.9%, player 100%, ego ball 2D 97.4%.
- Models: DINOv3 ViT-L/16 300M; SigLIP 2 So400M/16 400M; DA3-L ViT-L/14 300M; SAM 3 PE ViT-L+/14 450M; V-JEPA 2 ViT-L/16 300M; Qwen3-VL-4B (SigLIP2-L 300M vision tower), LFM2.5-VL-3B (SigLIP2 So400m NaFlex 400M), PLM-3B (Perception Encoder), LFM2.5-VL-450M (86M vision tower).
- Training: batch 32, 30 epochs, LR 1e-4 heads, 1e-5 backbone, LoRA language.
- Inputs: anchor frame + frame 0.1 s (3 frames) earlier. Seven heads, five targets. Horizon 12 future frames over 33 time steps (1.10 s). L2 weight 1.0, CE weight 0.1.
- Results: current 3D ball 0.54 m (PLM 3B VL) to 0.90 m (V-JEPA 2). Current 2D player 0.14–0.18. Future ball 0.91 (PLM 3B) to 1.27 (V-JEPA 2). Future player 0.34 (V-JEPA 2) to 0.40ish. Shot type 98.2–99.9%. Time to contact 141–149 ms. Ball at contact 0.95–1.08 m.
- Auxiliary inputs: SigLIP2 image only 0.51; depth 0.21; player+depth 0.19; ball+player+depth 0.23; ball alone 0.54 (degrades). MLP image-free: none –, ball 2.83, player 4.28, depth 2.39, ball+player 2.66, ball+depth 2.12, player+depth 1.24, all 1.07.
- History: GT MLP 1 frame 2.924; 2 frames 100 ms 0.297; 2 frames 300 ms 0.257; 4 frames 300 ms 0.238. SigLIP2: 1.02, 1.02, 1.08, 1.08. V-JEPA2: 2 frames 100ms 1.22, 2 frames 300ms 1.25, 4 frames 300ms 1.18.
- Backbone adaptation: LFM2.5-VL 3B frozen vs finetuned: current ball 0.96 vs 0.57; future ball 1.47 vs 0.98; current player 0.18 vs 0.16; future player 0.45 vs 0.36; shot 98.3 vs 99.4; TTC 162.0 vs 146.7 ms; ball at contact 1.225 vs 1.003.
- MDM: conditioning vector c_t ∈ R^11 with b*~, τ_next, m_next, τ_prev, m_prev, p_xy, sinψ, cosψ. 147 features motion, 24 joints, 6D rotations. Predicts 24 frames at 60 Hz (400 ms), executes first six (100ms), replans. LFM2.5-VL-450M 86M encoder, 100 Hz on RTX 5090.
- MDM results: recorded motion ball-racket 0.89 m [0.76,1.02] approach, 0.81 [0.69,0.92] min; MDM rec cond 1.11 [1.04,1.19], 0.98 [0.93,1.04], center 0.76, plane 35.97°, velocity 4.46 m/s; MDM vision cond 1.28 [1.12,1.42], 1.17 [1.04,1.33], center 0.95, plane 41.31°, velocity 5.38 m/s.

Need formal equations. Some can be derived from the paper's data/setup, not invent fake ratios. Let's produce legitimate equations:

1. Pinhole projection: \mathbf{p} = \pi(\mathbf{X}; K, [R|t]) = K [R|t] \tilde{\mathbf{X}}, pixel coordinates; reprojection error \epsilon = ||\mathbf{p}_{obs} - \pi(\hat{\mathbf{X}})||_2 in px, median 2.1–4.4 px ball.

2. DLT triangulation: for each view i, \mathbf{x}_i × (P_i \mathbf{X}) = 0, stack A X = 0, SVD. Assumption: at least 2 valid views. Breakdown when det(A^T A) → 0 (degenerate configuration, collinear cameras/points). Paper: "triangulation requires valid 2D detections in at least two views, otherwise the frame is left unlabeled" [PAGE 3].

3. Depth conditioning error: E(d) = (1/N) Σ || \hat{X}_3D - X_3D ||_2 in meters. With depth 0.21 vs 0.51.

4. Temporal velocity estimation finite difference: \hat{v}_t = (b_t - b_{t-Δ})/Δ, Δ = 0.1 s / 0.3 s. Breakdown as Δ → 0: noise amplification σ_v ≈ √2 σ_b/Δ. This explains why GT MLP with 1 frame 2.924 m vs 2 frames 0.297.

5. Contact time error: τ error in seconds; MAE. 141-149 ms. Threshold relative to human reaction/action time. We can refer to 100ms replanning.

6. Prediction horizon error growth: E(h) roughly monotone. We can state E(h) = E_0 + α h^β maybe with fit — but avoid inventing fake equation. Better define empirically: RMSE(h) = sqrt( (1/N) Σ || \hat{y}_{t+h} - y_{t+h} ||^2 ). Report monotone increase. Note the paper: "ball prediction error increases with the forecasting horizon" [PAGE 2].

7. Motion diffusion: standard DDPM loss L = E_{t,ε} [ || ε - ε_θ(x_t, t, c_t) ||^2 ], conditioning c_t ∈ R^11. Real-time replanning: 24 frames at 60 Hz => 400 ms horizon; execute 6 => 100 ms; control frequency 10 Hz.

8. SE(2) accumulation: p_{t+1} = p_t + R(ψ_t) Δp_local; ψ accumulation.

9. Information-theoretic depth: mutual information I(ball3D; representation) vs I(ball3D; depth). We can formalize without fake ratios: the ablation shows conditional entropy H(X_ball | Z_vis) > H(X_ball | Z_vis, D). Actually we can frame as: adding depth reduces MSE from 0.51 to 0.21, so I(X; D | Z) > 0. Use formal: MSE reduction Δ = E[(X - f(Z))²] - E[(X - f(Z,D))²] ≈ 0.51² - 0.21² = 0.216 m². That's legitimate arithmetic, not a fake ratio.

10. Occlusion / visibility: 97.4% ego ball available, so 2.6% missing. Breakdown regime: occlusion.

Need to be careful with "no betting lines" — none. Fine.

"Retrocausal genealogy" — historical/scientific lineage: from TrackNet (2019), Vid2Player (2021), broadcast video learning, Ego4D (2022), SpatialVLM (2024), VLM4D (2025), DINOv3, SigLIP 2, V-JEPA 2, Depth Anything 3, SAM 3, PerceptionLM, LoRA, MDM (2023), DartControl (2025), humanoid tennis (2026). Multi-week traps: e.g., the "longer history helps" prior from video modeling is falsified; the "bigger VLM better" prior falsified by Qwen3-VL 4B trailing PLM 3B and 450M being competitive; "2D ball pixel helps" prior falsified (0.51→0.54). These are traps that would waste weeks.

"Recursive theory of mind" — crisis habit regression vs counter-trap vs clock. This is the meta-cognitive section: how a research team under deadline might regress to habitual fixes (add more data, bigger model, longer history) vs counter-traps (ablation-first) vs clock (real-time 100Hz constraint). We can frame as a recursive belief model: researcher's belief about model capability, model's implicit belief about scene (prior over ball trajectory), and the clock. Need to interpret "theory of mind" as modeling the opponent/player intent: stroke anticipation (forehand/backhand) is a read of the opponent's intention; contact anticipation is a read of the player's own future. Recursive: the ego player models the opponent modeling them. Use the paper's tasks: stroke type prediction 98–99.9% is near-saturated, so intention is legible from kinematics; but the MDM conditioning shows the model must infer its own future contact.

"Cross-layer veto adjudication" — physical/biomechanical/weather veto proof. The dataset is outdoor, so wind, sun glare, court surface. Biomechanical: racket-ball contact 0.89 m mismatch in recorded motion — a physical veto on evaluation validity. Human reaction time ~200 ms vs TTC error 141-149 ms — timing veto: error is comparable to the entire action window. Camera motion: ego camera 29.97 fps vs 60 Hz motion; 100 ms replan. Ball speed: tennis ball 30-60 m/s serve; at 0.91 m future error over 1.1 s, that is comparable to ball travel. Actually 1.1 s ball travel at 30 m/s = 33 m, so error 0.91 m is ~3% — fine. We can state ball speed v and error rate \dot{e}. Avoid fake ratios? We can compute physical quantities straightforwardly: at v = 30 m/s, a 0.14 s timing error corresponds to 4.2 m of ball travel — that's a legitimate kinematic computation, not a fake invented ratio. That's a strong physical veto: the reported mean contact-time error of 141–149 ms translates to ~4.2–4.5 m of ball displacement at 30 m/s, which exceeds racket reach. Important. This is arguably the paper's key hidden weakness: contact time error ~0.14 s vs ball speed means large spatial error. But note the ball position at contact error is 0.95–1.08 m, which is better than v·τ error because time and position errors may be correlated. Still, physical veto.

Let's compute: 30 m/s × 0.141 s = 4.23 m. Yes. At 20 m/s: 2.8 m. So the timing error is physically enormous unless the position estimate compensates. But ball position at contact is ~1.0 m, so the system is not simply v·τ. Still, the coupling matters.

"RLVR counterfactual vetoes" — 3 verifiable scenarios + predictions. RLVR = reinforcement learning with verifiable rewards. We need scenarios with measurable outcomes that would falsify claims. E.g.:

1. Depth-ablation veto: retrain SigLIP2 with depth on a new split where depth is corrupted/permuted. Prediction: if depth is truly causal, permuting depth across frames should restore error to ~0.51 m; if the model learned a shortcut correlating depth with ball position, permuted-depth error stays low. Measurable: MSE. Threshold: >0.45 m.

2. History-length veto: train image encoder with 1 vs 4 frames on a synthetic sequence where the ball's future depends on velocity only (no scene context), e.g., occluded court with randomized background. Prediction: paper claims longer histories don't help because models exploit scene context; if true, in a context-free (blank background, no court lines) setting, multi-frame should help (approach GT MLP's 0.30 m) — actually the paper predicts representations rely on scene context, so removing context should hurt single-frame more than multi-frame. Verifiable: single-frame error rises more than multi-frame. If instead multi-frame still doesn't help, the claim "representations exploit scene context" is wrong and something else (e.g., tubelet token pooling) is at fault.

3. Real-time closed-loop veto: run the MDM with vision conditioning in a closed loop where generated motion changes the camera view (re-render ego camera from generated motion), rather than replaying recorded video. Prediction: contact error degrades beyond open-loop 1.28 m because distribution shift; measurable ball-racket min distance. Threshold: >1.5 m. The paper acknowledges this limitation: "Its observations therefore follow the recorded player's camera trajectory and do not change in response to the generated character's movement" [PAGE 7].

4. Could also add a calibration veto: freeze vs finetune — freeze degrades ball to 0.96 m. A verifiable reward: linear probe from frozen features should recover ball 3D if information is present; failure indicates information absence, not adaptation. We can make that a scenario too, but need exactly 3. Let's pick the strongest 3.

Need ≥1000 words total, THINK_TRACE ≥400 words. I'll write generously, maybe ~2500-3500 words.

Citations: exact [PAGE N] markers and verbatim quotes. I must quote exactly from the source. Let me pick accurate quotes:

- [PAGE 1]: "The best performing models achieve mean current-frame localization errors of 0.14 m for the ego player and 0.54 m for the ball, future forecasting errors of 0.34 m for the ego player and 0.91 m for the ball over 1.1 s, and a mean contact-time prediction error of 0.14 s."
- [PAGE 1]: "Longer image histories do not improve ball forecasting, indicating that representations exploit scene context rather than rely solely on inter-frame motion."
- [PAGE 2]: "Longer conditioning histories do not improve 3D position inference; in fact, image encoders achieve identical ball forecasting performance with only one conditioning frame, relying instead on other spatial correlations to predict future motion."
- [PAGE 3]: "triangulation requires valid 2D detections in at least two views, otherwise the frame is left unlabeled."
- [PAGE 3]: "Manual corrections were required for the ball and player annotations in approximately 30.5% and 5.8% of frames, respectively."
- [PAGE 3]: "median reprojection errors across the three views span 2.1–4.4 px for the ball and 3.3–9.7 px for the player."
- [PAGE 4]: "Each model receives two images as input: the current “anchor” frame and one preceding frame 0.1 s (3 frames) earlier."
- [PAGE 4]: "Shot-type accuracy is near-saturated for all models (98.2 to 99.9%), and time-to-contact errors fall within a narrow range of 141 to 149 ms"
- [PAGE 5]: "depth reduces error from 0.51 m (image only) to 0.21 m, and combining it with player yields the lowest error (0.19 m)."
- [PAGE 5]: "ball and player alone provide no benefit, and adding ball slightly degrades the combinations."
- [PAGE 5]: "from a single position it cannot forecast (2.92 m error), but a second position 100 ms earlier suffices to estimate velocity and reduces error to 0.30 m"
- [PAGE 6]: "freezing degrades every task: the error of current ball position rises from 0.57 to 0.96 m, and future ball position from 0.98 to 1.47 m."
- [PAGE 6]: "Its compact 86M-parameter encoder enables real-time visual conditioning at 100 Hz on an RTX 5090"
- [PAGE 6]: conditioning vector equation.
- [PAGE 7]: "Its observations therefore follow the recorded player’s camera trajectory and do not change in response to the generated character’s movement."
- [PAGE 7]: "even recorded motion has a mean ball–racket distance of 0.89 m at annotated contact (Table IV). This mismatch limits both motion learning and evaluation."
- [PAGE 7]: "The demonstration also remains kinematic, without a policy for physical execution in simulation or reality."

Good.

Now structure.

THINK_TRACE: ≥400 words, deep multi-hop derivation & gray-zone audit. I'll do a step-by-step: (i) what is measured, (ii) how errors compose across coordinate frames, (iii) the depth result as an information argument, (iv) the history paradox, (v) the timing-physics coupling, (vi) the closed-loop gap, (vii) gray zones/uncertainties (annotation noise floor, seed variance, split size 16 test rallies, no confidence intervals for Table I? Table I has ± std over seeds), (viii) what would change the conclusion.

Let me be careful about "gray-zone audit": identify claims that are borderline: 98% shot accuracy with 328 forehands/229 backhands and only 16 test rallies — near saturation may reflect base rate; the test set has ~16 rallies, ~200 shots, so 1% is 2 shots. The V-JEPA 2 99.9% vs 98.2% spread is ~1.7% = a few examples. Also "0.14 m" player localization is at the foot-ground contact point, not center of mass; the label itself is bottom-center of bbox, so error floor is annotation convention. Also current-frame ball 0.54 m vs ball radius 0.033 m — still 16× ball diameter. And "on par with expected ball motion across 1–2 frames" — at 30 m/s and 29.97 fps, one frame = 1.0 m, so 0.54 m is sub-frame. Good derivation.

Let me compute frame displacement: 30 m/s / 29.97 fps = 1.001 m per frame. So 0.54 m ≈ 0.54 frame. Player: sprint 5 m/s / 29.97 = 0.167 m/frame; 0.14 m ≈ 0.84 frame. The paper says "expected player motion across 3–7 frames" — hmm, 0.34 m future player error: 0.34/0.167 = 2 frames. Maybe they use typical player motion 0.05–0.1 m/frame. Don't over-claim; just note the paper says 1–2 frames for ball and 3–7 frames for player.

Actually the paper: "We consistently observe 3D ball prediction errors and 2D ego player localization errors that are on par with expected ball motion across 1–2 frames and expected player motion across 3–7 frames" [PAGE 2]. Fine.

SOURCES_OPERATORS_AND_EQUATIONS: formal LaTeX with units. Let's write about 8 equations.

Eq 1: Pinhole + reprojection.
Eq 2: DLT.
Eq 3: 3D error metric (RMSE m).
Eq 4: Finite-difference velocity and noise propagation.
Eq 5: Multi-task loss.
Eq 6: Contact-time MAE and physical displacement coupling.
Eq 7: Diffusion loss + conditioning vector.
Eq 8: SE(2) replanning recursion / receding horizon.
Eq 9: Mutual information / conditional entropy of depth.

Include assumptions and breakdown regimes for each. Cite pages.

RETROCAUSAL_GENEALOGY: lineage. TrackNet 2019 → ball tracking; Vid2Player 2021 → broadcast learning; Zhang 2023 physically simulated tennis; Ego4D 2022; R3M/PaLM-E; SpatialVLM 2024; VLM4D 2025; DINOv3; SigLIP2; V-JEPA2 2025; DA3 2026; SAM3 2026; PerceptionLM; LoRA; MDM 2023; DartControl 2025; humanoid tennis 2026 refs [3],[4],[16]. Multi-week traps: (1) scaling history, (2) scaling model size, (3) adding 2D ball pixel as auxiliary, (4) trusting allocentric triangulation as ground truth without accounting for 2.1–9.7 px reprojection, (5) freezing encoders as "efficient adaptation", (6) open-loop evaluation of closed-loop system. Each trap with weeks estimate.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. Define three agents: researcher R, model M, opponent O. Recursive belief: R models M modeling O modeling R. Stroke anticipation is a second-order inference. Crisis habit regression: under deadline, team reverts to "more data, bigger model, longer context" — all falsified here. Counter-trap: ablations that make the model's implicit prior explicit (depth injection, history sweep, frozen probe). Clock: 100 Hz, 100 ms replan, 141 ms TTC error. The clock is the arbiter: a 141 ms error at 30 m/s = 4.2 m. Recursive ToM failure mode: the model predicts the player's contact using the same representation that predicts the ball, so errors are correlated, not independent — the MDM's replanning assumes refinement, but the paper shows accuracy improves closer to contact (Fig 3), which is a genuine recursive improvement. However, if the vision model is confidently wrong, the MDM commits. Counter-trap: mask-based conditioning m_next, m_prev gives the model an explicit "I don't know" channel — a theory-of-mind primitive (knowledge state). Nice.

CROSS_LAYER_VETO_ADJUDICATION: physical, biomechanical, weather. 
- Physical: ball speed × TTC error = meters; 0.54 m current ball error vs 0.067 m ball diameter; 1.0 m ball-at-contact error vs racket head ~0.3 m. Veto.
- Biomechanical: recorded motion itself has 0.89 m ball-racket distance at contact — the label/motion capture is not accurate enough to adjudicate. Racket plane error 36–41°, velocity 4.5–5.4 m/s. Human racket swing angular velocity can be 10-20 rad/s; 41° plane error is large.
- Weather/outdoor: sun, wind, shadows. The dataset is outdoor [PAGE 3]. Sun glare can saturate the ball; wind affects ball trajectory (Magnus + drag). No wind measurement reported — a confound. Also the court is half-court with 4 corner cameras + 1 high; occlusion by the ego player's body.
- Sensor: ego camera 29.97 fps, motion capture 60 Hz, MDM replan 10 Hz. Aliasing: ball at 30 m/s moves 1.0 m per ego frame; motion blur.
- Adjudication rule: a claim survives only if the error is below the physical action tolerance AND the label noise floor is below the claimed effect. Depth effect 0.51→0.21 (0.30 m) exceeds reprojection noise (~4.4 px, which at court scale is maybe 0.05 m), so it survives. History effect 1.02→1.08 (0.06 m) is within seed std (±0.05), so it's a null, not a harm — important nuance: the paper says "no benefit," not "degrades," and the ±0.05 overlaps.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios with measurable predictions and thresholds.

Scenario A: Depth permutation / counterfactual depth. Train SigLIP2 with true depth vs shuffled depth vs zero depth. Prediction if causal: shuffled depth error ≈ image-only 0.51 m; true depth 0.21 m. Threshold: shuffle < 0.40 m rejects causality.

Scenario B: Context ablation for history paradox. Replace court background with uniform texture / randomize camera pose; test 1-frame vs 4-frame. Prediction: if scene context is the substitute for motion, 1-frame error rises sharply (≥1.3 m) while 4-frame stays ~1.1 m, closing the gap. If both stay ~1.0, the "scene context" explanation is wrong.

Scenario C: Closed-loop re-render. Feed MDM-generated motion back to render the ego view instead of replaying recorded video. Prediction: contact error rises from 1.28 m to >1.5 m and min ball-racket distance >1.4 m; if it stays within 1.3 m, the open-loop evaluation is not a fatal limitation. Also measure time-to-contact drift.

Maybe a 4th: frozen-probe information test — but exactly 3, so use 3. Could fold the frozen test into scenario A? No, keep three.

Add "verifiable reward" definition: R = 1[metric ≤ threshold] or negative MSE.

Need to keep no betting content. Fine.

Also the system prompt says "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." So all equations must be physically/statistically meaningful. Good.

Let me draft.

Word count: aim ~3000. THINK_TRACE ~700.

I'll include a brief header noting the document is a technical audit, no wagering content. Maybe not necessary; just start.

Format: exact XML tags. Let's write.

Careful with LaTeX in XML — fine, no escaping needed except < >. Avoid < in text. Use \lt or words. In LaTeX, use \leq instead of ≤? Unicode is fine but inside math better use \le. I'll use \le.

Let's write THINK_TRACE.

Draft THINK_TRACE (~700 words):

"Step 1 — establish the measurement chain..." etc. Multi-hop.

Hop 1: label generation. 2D anchors → manual correction (30.5% ball) → DLT triangulation → 3D labels. The error floor of every downstream metric is set here. Median reprojection 2.1–4.4 px. At the downscaled 1280×720, with court ~23.77 m long projected across maybe 1000 px, 4.4 px ≈ 0.10 m at the far court, less near. So the label noise is order 0.1 m. Compare: depth ablation effect 0.30 m > noise; history effect 0.06 m < noise. This is the key adjudication.

Hop 2: ego projection. Labels are allocentric 3D; targets for the ego model are 3D positions in court frame. The ego model must infer court-frame 3D from a moving camera with unknown extrinsics at test time (camera pose not given). This is the crux: the ego encoder must implicitly do SLAM/visual odometry. "0.54 m" is therefore a composite of depth error, camera pose error, and detection error. Multi-hop: if camera rotation error is δθ, then at range r the position error is r δθ. For r = 10 m and δθ = 3° = 0.052 rad, error = 0.52 m — exactly the observed ball error. That's a strong derivation: the ball error is consistent with ~3° head-pose error, not with ball detection per se. This is a great insight. But is it a "toy equation"? No, it's the standard lever-arm relation. Good. And player at r ~ 5-10 m with 0.14 m error implies δθ ~ 0.8-1.6°, because the player is larger and planar-constrained. Interesting: planar constraint reduces error. Good hop.

Hop 3: future. 1.1 s horizon, error 0.91 m. If constant-velocity from GT with 2 frames gives 0.30 m, then the image model's 1.02 m at 1 frame and 1.02 at 2 frames means it's not doing finite differences. Where does 1.02 come from? Possibly it predicts the mean trajectory (regression to the mean). A constant-velocity baseline from GT is 0.30 m, so the image model is 3.4× worse than a trivial baseline given the same information. That's a major finding the paper underplays: the "scene context" prior is worse than physics. This is multi-hop: the paper frames 1.02 m as impressive vs 2.92 m single-position, but the correct baseline is the 2-frame GT MLP at 0.30 m. So the representation loses the velocity information that is trivially available from two detections. This is a gray-zone audit point.

Wait — careful: GT MLP gets ground-truth 3D positions at 100 ms, the image model gets pixels. The image model must estimate position then velocity. Its position error is ~0.54–0.60 m; finite-differencing two such estimates with independent noise gives √2 × 0.57 ≈ 0.81 m velocity-position noise per 0.1 s, i.e., huge velocity noise. So 1.02 m future error is actually consistent with compounding. Good: error propagation explains it. And the low correlation over 0.1 s means differencing is bad. So the paper's "scene context" explanation is one hypothesis; error propagation is a competing, simpler one. That's a genuine gray zone. Nice.

Hop 4: timing. 141–149 ms MAE. At 25 m/s, 3.5–3.7 m. The ball-at-contact error is only 1.0 m, so the model's time and space errors are correlated (it effectively predicts a point on the trajectory, and time error slides along the trajectory). If the trajectory is nearly straight, a time error τ maps to a position error vτ along the path; to get 1.0 m position error with 0.14 s time error requires effective speed 7 m/s — much lower than ball speed. So the contact position and time estimates are not consistent with a single ballistic trajectory. That's a consistency veto: the pair (b*, τ) should satisfy b* ≈ b_t + v τ. If not, the MDM conditioning is internally inconsistent. This is a strong, verifiable audit. Good.

Hop 5: closed loop. The MDM replans every 100 ms with a 400 ms horizon. The vision stream is open-loop replay. In a closed loop, the camera moves with the generated body, so the input distribution shifts. Also 100 ms at 60 Hz = 6 frames, but the vision model runs at 100 Hz = 10 ms, so vision is not the bottleneck; motion generation at 60 Hz is. The clock: 400 ms horizon, 100 ms commit — a 4:1 receding horizon ratio.

Hop 6: statistics. 16 test rallies, 3 seeds. ± values are seed std, not rally-level CI. Rally-level clustering inflates variance. A 0.01 m difference (e.g., 0.54 vs 0.55) is not meaningful. Only effects > ~0.1 m or >2% accuracy should be trusted.

Good. That's a rich THINK_TRACE.

Now equations section.

Eq (1) projection:
\[
\mathbf{p}_{i,t} = \pi\!\left(\mathbf{X}_t;\, K_i, [R_i \mid \mathbf{t}_i]\right) = \frac{1}{Z_i}\left(K_i [R_i \mid \mathbf{t}_i]\, \tilde{\mathbf{X}}_t\right)_{1:2}, \quad [\text{px}]
\]
with \tilde{X} homogeneous. Assumption pinhole, linear FOV. Breakdown: radial distortion, rolling shutter (ego camera panning fast), Z_i → 0 (point at camera plane), motion blur.

Eq (2) DLT:
\[
A(\mathbf{X})\,\mathbf{X} = \mathbf{0}, \quad A \in \mathbb{R}^{2n \times 4}, \quad \mathbf{X} = \arg\min_{\|\mathbf{X}\|=1} \|A\mathbf{X}\|_2
\]
via SVD. n ≥ 2. Breakdown: rank(A) < 4, cameras and point coplanar/collinear; near-degenerate when σ_4/σ_1 → 0. Paper requires ≥2 views.

Eq (3) RMSE:
\[
\mathrm{RMSE}_{3D} = \sqrt{\frac{1}{N}\sum_{k=1}^{N} \|\hat{\mathbf{b}}_k - \mathbf{b}_k\|_2^2}\ [\mathrm{m}]
\]
Assumption: Euclidean court frame, isotropic error. Breakdown: if error anisotropic (depth direction dominant), RMSE hides along-axis bias.

Eq (4) lever arm:
\[
\|\delta \mathbf{p}\| \approx r\,\|\delta \boldsymbol{\theta}\| + \|\delta \mathbf{r}\|, \quad [\mathrm{m}]
\]
r in m, δθ in rad. Breakdown: small-angle only; at large δθ, use exact rotation.

Eq (5) finite difference:
\[
\hat{\mathbf{v}}_t = \frac{\hat{\mathbf{b}}_t - \hat{\mathbf{b}}_{t-\Delta}}{\Delta}, \quad \sigma_v \approx \frac{\sqrt{2}\,\sigma_b}{\Delta}\ [\mathrm{m\,s^{-1}}]
\]
Δ = 0.1 s or 0.3 s. With σ_b = 0.57 m, σ_v ≈ 8.1 m/s at Δ = 0.1 s — comparable to ball speed, so velocity is unidentifiable. Breakdown: Δ → 0.

That's a legitimate propagation, assuming independent errors. Good.

Eq (6) multi-task loss:
\[
\mathcal{L} = \sum_{j \in \mathcal{C}} \|\hat{\mathbf{y}}_j - \mathbf{y}_j\|_2^2 + 0.1 \cdot \mathrm{CE}(\hat{\mathbf{s}}, \mathbf{s})
\]
Paper: L2 weight 1.0, CE weight 0.1.

Eq (7) diffusion:
\[
\mathcal{L}_{\mathrm{MDM}} = \mathbb{E}_{n,\epsilon,c_t}\left[\|\epsilon - \epsilon_\theta(\mathbf{x}_n, n, c_t)\|_2^2\right], \quad c_t \in \mathbb{R}^{11}
\]
with the 11-dim vector from Eq. 1 of the paper. Breakdown: conditioning masking m_next = 0; mode collapse to mean motion; error accumulation over receding horizon.

Eq (8) receding horizon:
\[
\mathbf{x}_{t+1:t+H} \sim p_\theta(\cdot \mid c_t), \quad \text{execute } \mathbf{x}_{t+1:t+K}, \quad K=6, H=24, f=60\,\mathrm{Hz}
\]
so 100 ms commit, 400 ms horizon.

Eq (9) info:
\[
\Delta_{\mathrm{depth}} = \mathrm{MSE}(\hat{\mathbf{b}} \mid Z) - \mathrm{MSE}(\hat{\mathbf{b}} \mid Z, D) = 0.51^2 - 0.21^2 = 0.216\ \mathrm{m^2}
\]
and conditional MI: I(B; D | Z) > 0. This is legitimate.

Eq (10) contact consistency:
\[
\mathbf{b}^* \approx \mathbf{b}_t + \hat{\mathbf{v}}_t \,\tau_t
\]
check residual. Good.

Now write everything. Keep citations inline.

For the genealogy, mention years from references: TrackNet 2019, Vid2Player 2021, Zhang 2023, Ego4D 2022, R3M 2023, PaLM-E 2023, SpatialVLM 2024, VLM4D 2025, DINOv3 2026, SigLIP2 2025, V-JEPA2 2025, DA3 2026, SAM3 2026, MDM 2023, DartControl 2025, humanoid tennis 2026. Good.

Multi-week traps: quantify as "would consume 2–6 weeks" — that's fine, not betting.

Let me now write final. Ensure XML sections exact. Total word count >1000 easily.

One more check on the "no betting lines" rule — I will not mention odds, spreads, totals, moneylines. I mention "bet" nowhere.

Write it.
</NATIVE_REASONING>

<THINK_TRACE>
The audit proceeds as a chain of measurement transformations, because every headline number in this paper is the endpoint of at least four transformations: 2D pixel anchor → manual correction → multi-view triangulation → court-frame 3D label → ego-frame regression target. The first hop sets the error floor for everything downstream. The authors report that after downscaling to 1280×720 they obtain initial anchors with an off-the-shelf tracker and detector, then correct them manually, and that “Manual corrections were required for the ball and player annotations in approximately 30.5% and 5.8% of frames, respectively” [PAGE 3]. They further report that “median reprojection errors across the three views span 2.1–4.4 px for the ball and 3.3–9.7 px for the player” [PAGE 3]. A 4.4 px median residual on a court-scale projection is order 0.05–0.15 m depending on range; that is the label noise floor. This single fact adjudicates most of the paper's ablations: any claimed effect smaller than roughly 0.1 m is inside the noise, whereas the depth effect (0.51 m → 0.21 m) is three to six times the floor and therefore survives.

The second hop is the one the paper does not make explicit. The ego model receives only egocentric pixels; the target is a court-frame 3D coordinate. Therefore the network must implicitly solve head pose, court registration, and metric depth simultaneously. The standard lever-arm relation gives position error ≈ range × angular error. At a 10 m ball range, a 3° head-pose error (0.052 rad) produces 0.52 m of positional error — essentially the reported 0.54 m current-frame ball error [PAGE 1, PAGE 5]. This is not proof that pose error is the cause, but it is a competing explanation that the paper never rules out. The player error is much smaller (0.14 m), which is consistent with the planar ground-contact constraint used in annotation and with the player subtending a larger, more stable visual solid angle; the paper states that “the ego player localization uses a planar constraint to recover the foot-ground contact point on the 2D court plane” [PAGE 3]. So the asymmetry between ball and player accuracy may be a geometry artifact rather than a representation property.

The third hop is temporal. The paper's central negative result is that “Longer image histories do not improve ball forecasting, indicating that representations exploit scene context rather than rely solely on inter-frame motion” [PAGE 1]. The evidence is Table III: SigLIP 2 gives 1.02 m with one frame and 1.08 m with four frames, while a ground-truth-position MLP drops from 2.92 m to 0.30 m with a single 100 ms displacement [PAGE 5]. The authors interpret the flat image-model curve as scene-context reliance. A simpler competing hypothesis is error propagation: if per-frame position error is σ_b ≈ 0.57 m and errors are roughly independent across a 0.1 s gap, finite-difference velocity noise is √2·σ_b/Δ ≈ 8 m/s, which is the same order as the ball's own speed. Under that hypothesis, differencing two noisy positions is useless regardless of scene context, and the flat curve is expected. The paper's own auxiliary-input ablation supports the propagation account: “ball and player alone provide no benefit, and adding ball slightly degrades the combinations” [PAGE 5], i.e., the 2D ball pixel is redundant with the visual token stream and does not supply clean metric displacement.

The fourth hop is the timing–geometry consistency check. The reported contact-time error is 141–149 ms and the ball-at-contact error is 0.95–1.08 m [PAGE 4, Table I]. If the model's contact point and contact time were mutually consistent with a single ballistic trajectory, the residual would satisfy b* ≈ b_t + v τ. At a plausible 25–30 m/s ball speed, a 0.14 s timing error alone implies 3.5–4.2 m of along-track displacement, which is three to four times the reported contact-position error. The only way both numbers can be true is if the time and position errors are strongly correlated — the model effectively predicts a point on the trajectory and its time label slides along the same path. That correlation is never measured. It matters because the diffusion model consumes exactly this pair, (b*, τ), as conditioning, and correlated errors mean the conditioning is internally inconsistent rather than merely noisy.

The fifth hop is the closed-loop gap. The receding-horizon controller commits 6 of 24 generated frames at 60 Hz, i.e., a 100 ms commit inside a 400 ms horizon [PAGE 7]. Vision runs at 100 Hz on an RTX 5090 [PAGE 6], so perception is not the bottleneck; motion generation and the 141 ms timing error are. Critically, “Its observations therefore follow the recorded player's camera trajectory and do not change in response to the generated character's movement” [PAGE 7]. The evaluation is therefore open-loop in the perception channel while claiming a closed-loop control result. The biomechanical floor compounds this: “even recorded motion has a mean ball–racket distance of 0.89 m at annotated contact” [PAGE 7], which means the ground-truth motion itself cannot define a successful contact tightly enough to adjudicate a 1.0–1.3 m model error.

The gray-zone audit yields four claims that are weaker than presented and two that are stronger. Weaker: (i) the scene-context explanation for flat history curves, because error propagation is unexcluded; (ii) the near-saturated stroke accuracy of 98.2–99.9%, since with 16 test rallies and roughly 200 ego shots a 1.7% spread is a handful of frames, and the class prior alone (328 forehands vs 229 backhands) gives a strong baseline; (iii) the cross-model rankings at the 0.01–0.05 m level, which sit inside seed variance; (iv) the claim of real-time viability, which is open-loop. Stronger: (i) the depth ablation, whose 0.30 m effect is far above the label floor and is corroborated by the image-free MLP control; (ii) the frozen-versus-finetuned result, where current ball error rises from 0.57 to 0.96 m [PAGE 6], a large, directionally unambiguous information-access finding. The decisive unresolved question is whether the representation is depth-poor or pose-poor; the paper's ablations can distinguish these only if camera pose is supplied as an auxiliary input, which was not done.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**1. Projection operator (label formation).** For camera i, frame t, homogeneous point X̃:
\[
\mathbf{p}_{i,t}=\pi\!\left(\mathbf{X}_t;K_i,[R_i\mid\mathbf{t}_i]\right)
=\Big(K_i[R_i\mid\mathbf{t}_i]\tilde{\mathbf{X}}_t\Big)_{1:2}\Big/Z_{i,t},
\qquad [\mathrm{px}]
\]
with reprojection residual \(\epsilon_{i,t}=\|\mathbf{p}^{\mathrm{obs}}_{i,t}-\pi(\hat{\mathbf{X}}_t)\|_2\) in px. Assumptions: pinhole model with linear field of view, globally shuttered sensors, static intrinsics. The authors state calibration “was performed in post-processing with a pinhole camera model, since all cameras use a linear field of view” [PAGE 3]. Breakdown regimes: \(Z_{i,t}\to 0\) (point at the camera plane); strong radial distortion; rolling-shutter skew under fast head rotation; motion blur at 29.97 fps. Reported median residuals are 2.1–4.4 px for the ball and 3.3–9.7 px for the player [PAGE 3].

**2. Triangulation operator (DLT).** Stacking the cross-product constraints,
\[
A(\hat{\mathbf{X}})\,\mathbf{X}=\mathbf{0},\qquad
A\in\mathbb{R}^{2n\times 4},\qquad
\hat{\mathbf{X}}=\arg\min_{\|\mathbf{X}\|_2=1}\|A\mathbf{X}\|_2 ,
\]
solved by SVD, with \(n\ge 2\) valid views. Assumption: independent, zero-mean pixel noise; calibrated extrinsics. Breakdown: \(\operatorname{rank}(A)\lt 4\) when the point and camera centers are coplanar or collinear, or when \(\sigma_4/\sigma_1\to 0\) (near-degenerate configuration). The paper enforces the operational version of this: “triangulation requires valid 2D detections in at least two views, otherwise the frame is left unlabeled” [PAGE 3]. Coverage is 99.9% for the ball and 100% for the player; the egocentric 2D ball is present in 97.4% of frames, with the remainder attributed to occlusion [PAGE 3].

**3. Localization risk functional.**
\[
\mathrm{RMSE}_{3D}=\sqrt{\frac{1}{N}\sum_{k=1}^{N}\|\hat{\mathbf{b}}_k-\mathbf{b}_k\|_2^2}\quad[\mathrm{m}],
\]
and analogously for the 2D player in metres on the court plane. Assumption: isotropic Euclidean error in a single court frame. Breakdown: anisotropic error (depth-dominant) is hidden by the norm; a model biased along the court's long axis can report a respectable RMSE while failing geometrically. Reported ranges: current ball 0.54–0.90 m, future ball 0.91–1.27 m, current player 0.14–0.18 m, future player 0.34–0.40 m [PAGE 5, Table I].

**4. Lever-arm / pose-coupling relation.**
\[
\|\delta\mathbf{p}\|\;\approx\; r\,\|\delta\boldsymbol{\theta}\| \;+\;\|\delta\mathbf{r}\|,\qquad [\mathrm{m}]
\]
with range \(r\) in m and orientation error \(\delta\boldsymbol{\theta}\) in rad. Assumption: small-angle regime, rigid camera-to-court transform. Breakdown: at \(\|\delta\boldsymbol{\theta}\|\gtrsim 0.2\) rad the linearization fails and the exact rotation must be used; also, \(r\) is unknown at test time, so the error is state-dependent. This relation supplies the competing explanation for the 0.54 m ball error (≈3° head-pose error at 10 m) and for why the planar-constrained player error is smaller.

**5. Finite-difference velocity and its noise amplification.**
\[
\hat{\mathbf{v}}_t=\frac{\hat{\mathbf{b}}_t-\hat{\mathbf{b}}_{t-\Delta}}{\Delta},
\qquad
\sigma_v\approx\frac{\sqrt{2}\,\sigma_b}{\Delta}\quad[\mathrm{m\,s^{-1}}].
\]
With \(\sigma_b\approx0.57\) m and \(\Delta=0.1\) s, \(\sigma_v\approx8\ \mathrm{m\,s^{-1}}\), comparable to rally ball speeds. Assumptions: independent per-frame errors, constant velocity over \(\Delta\). Breakdown: \(\Delta\to0\) gives divergent noise; \(\Delta\) too large violates constant velocity. The ground-truth MLP’s 2.92 m → 0.30 m improvement from one extra point [PAGE 5] is exactly the regime where this estimator is well conditioned, whereas the image models are in the divergent regime.

**6. Joint multi-task objective.**
\[
\mathcal{L}=\sum_{j\in\mathcal{C}}\|\hat{\mathbf{y}}_j-\mathbf{y}_j\|_2^2
\;+\;0.1\,\mathrm{CE}(\hat{\mathbf{s}},\mathbf{s}),
\]
with L2 weight 1.0 for continuous targets and cross-entropy weight 0.1 for stroke type [PAGE 4]. Assumption: shared encoder, task heads with cross-attention from learnable queries. Breakdown: the 10:1 weight ratio lets the continuous losses dominate gradient magnitude; near-saturated classification (98.2–99.9%) contributes little signal and its gradient is mostly noise.

**7. Diffusion motion objective and conditioning vector.** With \(\mathbf{x}_n\) the noised motion and \(c_t\in\mathbb{R}^{11}\),
\[
\mathcal{L}_{\mathrm{MDM}}=\mathbb{E}_{n,\epsilon,c_t}\Big[\big\|\epsilon-\epsilon_\theta(\mathbf{x}_n,n,c_t)\big\|_2^2\Big],
\]
\[
c_t=\big[\tilde{\mathbf{b}}^{*}_t,\ \tau^{\mathrm{next}}_t,\ m^{\mathrm{next}}_t,\ \tau^{\mathrm{prev}}_t,\ m^{\mathrm{prev}}_t,\ \mathbf{p}^{xy}_t,\ \sin\psi_t,\ \cos\psi_t\big],
\]
exactly as printed [PAGE 6, Eq. 1]. Assumption: annotated states are available at training time and vision estimates at test time. Breakdown: when \(m^{\mathrm{next}}_t=0\) the model must marginalize over an unknown contact, which is not a trained distribution; masked conditioning can collapse toward the mean motion; errors in \(\tau^{\mathrm{next}}_t\) and \(\tilde{\mathbf{b}}^{*}_t\) are correlated, so the conditioning is internally inconsistent rather than merely noisy.

**8. Receding-horizon execution law.**
\[
\mathbf{x}_{t+1:t+H}\sim p_\theta\!\left(\cdot\mid c_t\right),\qquad
\text{execute }\mathbf{x}_{t+1:t+K},
\]
with \(H=24\), \(K=6\), \(f=60\ \mathrm{Hz}\), giving a 400 ms horizon and a 100 ms commit [PAGE 7]. Assumption: the next conditioning update arrives within the commit window. Breakdown: if perception latency or timing error exceeds \(K/f\), the executed chunk is stale; accumulated pelvis/heading drift corrupts the local SE(2) frame.

**9. Depth information gain.**
\[
\Delta_{\mathrm{depth}}
=\mathrm{MSE}(\hat{\mathbf{b}}\mid Z)-\mathrm{MSE}(\hat{\mathbf{b}}\mid Z,D)
=0.51^2-0.21^2=0.216\ \mathrm{m^2},
\]
and equivalently \(I(B;D\mid Z)>0\). This is the paper's most defensible quantitative claim: “depth reduces error from 0.51 m (image only) to 0.21 m, and combining it with player yields the lowest error (0.19 m)” [PAGE 5]. The image-free control confirms the direction but not sufficiency: its best combination still errs by 1.07 m [PAGE 5, Table II]. Breakdown: if depth is estimated from the same monocular stream, its errors are correlated with the encoder's, and the gain is partially self-referential.

**10. Contact consistency residual.**
\[
\rho_t=\big\|\mathbf{b}^{*}-\big(\mathbf{b}_t+\hat{\mathbf{v}}_t\,\tau_t\big)\big\|_2\quad[\mathrm{m}].
\]
This is not reported. Given 0.14 s timing error and 25–30 m/s ball speed, consistency requires \(\rho_t\) to absorb 3.5–4.2 m unless time and space errors are correlated. The absence of \(\rho_t\) is a genuine measurement gap in the conditioning pipeline.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper's lineage is a convergence of three previously separate research lines, and the convergence explains both its strengths and its blind spots.

*Line 1 — ball tracking in broadcast and fixed-camera sports video.* TrackNet [18] established high-speed tiny-object tracking from fixed cameras; RacketVision [19] unified ball-and-racket analysis across racket sports; Xiao et al. [17] fused multi-camera asynchronous localization with factor graphs and human pose. This line supplies the annotation pipeline's DNA: detect in 2D, triangulate in 3D, smooth. Its inherited assumption is that the camera is static and calibrated, which is precisely what fails in the egocentric setting. The paper's 30.5% manual ball correction rate [PAGE 3] is the visible cost of transplanting that assumption onto a moving head-mounted view.

*Line 2 — learning from video to motion.* Vid2Player [20] and Zhang et al. [21] learned controllable or physically simulated tennis from broadcast video; MDM [27], Human Motion Diffusion as a Generative Prior [43], and DartControl [44] supplied the conditional diffusion machinery. The paper's Eq. 1 conditioning vector is a direct descendant of MDM's style/action conditioning, re-specified with tennis semantics (next-contact mask, previous-contact timing, heading). The lineage trap is that MDM was validated on mocap with millimetre-accurate contacts; here the "recorded motion" itself has an 0.89 m ball–racket gap [PAGE 7], so the generative prior is being trained against a target that is not physically achievable.

*Line 3 — egocentric and embodied foundation representations.* Ego4D [9] defined the egocentric forecasting agenda; R3M [10] and PaLM-E [11] argued for pretrained visual representations as robot substrates; SpatialVLM [6], SpatialRGPT [8], and VLM4D [7] probed spatial and spatiotemporal reasoning in VLMs; DINOv3 [32], SigLIP 2 [33], V-JEPA 2 [13], Depth Anything 3 [34], SAM 3 [35], and Perception Encoder [36] supplied the encoders; LoRA [40] supplied the adaptation budget. The paper's key contribution is to hold capacity roughly fixed (300–450M ViT-L class) and vary the training paradigm instead — a genuinely informative design that the broader scaling literature rarely performs.

**Multi-week traps.** Five traps in this lineage would each consume weeks of a research cycle. (1) *The history-scaling trap.* Video-model intuition says more frames help; Table III shows 1.02 → 1.08 m from one to four frames [PAGE 5], and V-JEPA 2 goes 1.22 → 1.18 m. A team following intuition would spend 3–5 weeks building a longer-context pipeline for no gain. (2) *The model-size trap.* Qwen3-VL 4B trails PLM 3B on ball localization (0.69 vs 0.54 m) and the 450M model is within 0.09 m of the best [PAGE 5]. Two to four weeks of scaling would likely produce nothing. (3) *The auxiliary-2D trap.* Injecting the ball's 2D pixel position *degrades* error from 0.51 to 0.54 m and degrades combinations [PAGE 5]. A team would spend 2–3 weeks plumbing a detector into the head before discovering redundancy. (4) *The frozen-encoder trap.* Freezing looks like the efficient choice; it raises current ball error from 0.57 to 0.96 m [PAGE 6]. Two weeks lost to a "compute-saving" ablation that destroys the main task. (5) *The open-loop trap.* The diffusion evaluation replays recorded video [PAGE 7]; a team could spend 4–6 weeks tuning an MDM against a perception stream that will never occur on a real robot. The retrocausal lesson is that the paper's negative results are more valuable than its positive ones, because each negative closes a branch that the field's priors would otherwise keep open.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Three agents are coupled here: the researcher \(R\), the vision model \(M\), and the opposing player \(O\). The tasks instantiate a nested belief hierarchy. Stroke anticipation is \(R\) inferring \(M\)'s inference of \(O\)'s intention; contact anticipation is \(M\) inferring the ego player's own future state; the diffusion controller is \(R\) trusting \(M\)'s belief about a contact that has not yet occurred. The paper's near-saturated stroke accuracy (98.2–99.9%) says that first-order intention is highly legible from kinematics — forehand versus backhand is written in the shoulder and hip before contact. But legibility is not understanding: a base-rate classifier on 328 forehands and 229 backhands already achieves roughly 59%, and with 16 test rallies the residual error is a few frames. The recursive content is thin at the first level.

The deeper recursion is in the contact estimate. The model must represent "the ball will be *here* at *this* time," and the controller must represent "the model's representation will improve as contact approaches." The paper provides evidence that this second-order belief is true: Figure 3 shows current ball error and contact error improving as the ball nears the player [PAGE 6], and the receding-horizon design exploits it by replanning every 100 ms [PAGE 7]. This is a rare case where the meta-belief (estimates refine near contact) is empirically validated rather than assumed.

**Crisis habit regression.** Under deadline pressure, teams regress to four habits, all of which this paper falsifies: add data, add parameters, add context, add auxiliary sensors. The data habit is not directly tested but the 85-rally, 53,155-frame corpus is already small enough that rally-level split variance dominates; the parameter habit is refuted by Qwen3-VL 4B underperforming PLM 3B; the context habit is refuted by Table III; the sensor habit is *partially* vindicated — depth works (0.51 → 0.21 m) while 2D ball position does not. The correct regression target is therefore not "more inputs" but "the right metric input," and the paper's ablation grid is the instrument that distinguishes them.

**Counter-trap.** The counter-trap is to make the model's implicit prior explicit and then break it. Three moves do this: inject ground-truth depth to see whether the encoder was depth-poor (it was); freeze the backbone to see whether the information was latent (it was not, for the ball); and mask the conditioning (\(m^{\mathrm{next}}_t=0\)) to give the controller an explicit "I do not know the contact" state [PAGE 6]. That mask is a theory-of-mind primitive — a knowledge-state variable rather than a point estimate. The paper includes it but does not ablate it, which is the single most interesting missing experiment: a controller that knows it does not know should hedge, and hedging is exactly what a 141–149 ms timing error demands.

**The clock.** The clock is the final arbiter and it is unforgiving. A 141–149 ms mean timing error at 25–30 m/s corresponds to 3.5–4.5 m of ball travel. The 100 ms commit window is shorter than the timing error, so the controller can execute a full chunk before its own error estimate has converged. Recursively, this means \(R\)'s belief about \(M\)'s reliability must itself be time-varying: confidence should rise near contact, and the replanning scheme implicitly assumes it does. If confidence rises but accuracy does not, the system becomes *more* committed exactly when it should hedge — the characteristic failure of recursive self-trust.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A claim survives only if it clears three independent veto layers: physical scale, biomechanical fidelity, and environmental/sensor confounds.

**Physical veto.** The ball's diameter is 0.067 m and a racket head is roughly 0.3 m across. The best current-frame ball error is 0.54 m — eight ball diameters and nearly two racket heads. The future error is 0.91 m over 1.1 s, and the ball-at-contact error is 0.95–1.08 m [PAGE 5, Table I], i.e., three racket heads at the moment of contact. Meanwhile the timing error of 141–149 ms at 25–30 m/s maps to 3.5–4.5 m of along-track travel. These two numbers cannot both describe the same trajectory unless time and position errors are strongly correlated, and that correlation is never reported. The physical veto therefore fires on the *conditioning pair*, not on the individual metrics: the pair \((\tilde{\mathbf{b}}^{*}_t,\tau^{\mathrm{next}}_t)\) is not demonstrably consistent with a ballistic path, and the diffusion model consumes exactly that pair. A secondary physical veto: at 29.97 fps and 30 m/s, inter-frame ball displacement is ~1.0 m, so the 0.54 m current error is sub-frame — genuinely good — but it also means frame-to-frame association is ambiguous and any finite-difference velocity estimate is aliased.

**Biomechanical veto.** The evaluation target is compromised before the model is judged. The authors state that “even recorded motion has a mean ball–racket distance of 0.89 m at annotated contact” [PAGE 7]. If the ground truth has an 0.89 m contact gap, then an MDM with a 1.11–1.28 m gap is being separated from truth by a margin smaller than the truth's own defect. Racket-plane orientation errors of 35.97° (recorded conditioning) and 41.31° (vision conditioning), with velocity errors of 4.46 and 5.38 m/s [PAGE 7, Table IV], are large relative to the angular precision needed to return a ball: a few degrees of face error changes the rebound direction substantially. The demonstration is explicitly kinematic — “without a policy for physical execution in simulation or reality” [PAGE 7] — so no contact dynamics, no impulse, no grip, no fatigue. The biomechanical layer therefore vetoes any claim of *tennis* competence while permitting the narrower claim of *kinematic trajectory imitation*.

**Weather and sensor veto.** The dataset is outdoor [PAGE 3], with four eye-level corner cameras and one elevated rear camera. No wind speed, solar azimuth, shadow map, or surface-state measurement is reported. Wind alters drag and Magnus forces over a 1.1 s horizon; sun glare and hard shadows can saturate the ball or split it into specular highlights; an outdoor court's background texture differs from indoor benchmarks. The ego camera records at 3840×2160 and 29.97 fps [PAGE 3] while the motion capture runs at 60 Hz and the diffusion model generates at 60 Hz [PAGE 7] — three asynchronous clocks. Head-mounted cameras also exhibit rolling-shutter skew under rapid rotation, which the pinhole model does not represent. Finally, the ego view loses the ball entirely in 2.6% of frames (“the remainder are occlusions” [PAGE 3]), and the 5.8% manual player correction rate indicates that even the large-object channel is not clean.

**Adjudication.** The depth effect (0.30 m, or 0.216 m² in MSE) clears all three layers and is corroborated by an image-free control. The history effect (0.06 m) does not clear the annotation floor and sits inside seed variance (±0.05), so it must be read as a null result, not as evidence of harm. The cross-model rankings at 0.01–0.05 m do not clear the floor. The MDM's 0.17 m degradation from recorded to vision conditioning (1.11 → 1.28 m) is smaller than the 0.89 m ground-truth defect, so it is not interpretable as a perception penalty. The one claim that clears every layer is the frozen-versus-finetuned gap for 3D ball localization: 0.57 → 0.96 m [PAGE 6], a 0.39 m effect that is large, directional, and mechanistically interpretable as missing metric-depth information.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Each scenario defines a verifiable reward \(R=-\mathrm{MSE}\) (or \(R=\mathbf{1}[\text{metric}\le\text{threshold}]\)) computable from held-out rallies without human judgement, so it can drive RLVR directly.

**Veto 1 — Depth causality under permutation.** *Intervention:* retrain SigLIP 2 with the anchor-frame ball head under three depth conditions: true depth, depth permuted across frames within each rally, and depth zeroed. *Claim under test:* the depth gain is geometric information, not a shortcut correlating depth magnitude with court position. *Prediction:* true depth ≈ 0.21 m; permuted depth ≈ 0.50–0.55 m (back to the image-only 0.51 m); zeroed depth ≈ 0.51 m. *Threshold:* if permuted depth stays below 0.35 m, the causal claim is rejected and the gain is a positional prior. *Secondary prediction:* the image-free MLP control should show the same ordering, since it cannot exploit visual shortcuts; Table II already shows it gains most from depth (2.39 m alone, 1.07 m with all inputs) [PAGE 5]. *Verification cost:* three training runs at the reported 4–24 h scale [PAGE 4].

**Veto 2 — Context ablation to discriminate scene-context from noise propagation.** *Intervention:* re-render the ego frames with the court lines, net, and background replaced by uniform noise, preserving only the ball and player sprites and the true camera trajectory. Train one-frame and four-frame SigLIP 2 heads on this context-free variant. *Claim under test:* “representations exploit scene context rather than rely solely on inter-frame motion” [PAGE 1]. *Prediction if the claim is true:* the one-frame model should degrade sharply (from 1.02 m to at least 1.30 m) while the four-frame model should hold near 1.05–1.15 m, closing or reversing the gap. *Prediction if the competing noise-propagation account is true:* both conditions should sit near 1.0–1.1 m with no gap, because the limiting factor is per-frame position noise, not missing context. *Threshold:* a gap smaller than 0.10 m in the context-free condition rejects the scene-context explanation. *Bonus verifiable signal:* report \(\hat{\mathbf{v}}_t\) directly and correlate it with ground-truth velocity; the paper's account predicts near-zero correlation, the propagation account predicts correlation bounded by \(\sigma_b/\Delta\).

**Veto 3 — Closed-loop re-render of the egocentric camera.** *Intervention:* instead of replaying recorded video, render the ego camera from the MDM-generated skeletal motion at each replanning step, so the visual input depends on the generated body. Hold the vision checkpoint fixed and compare against the open-loop rollout on the same 16 test sequences. *Claim under test:* that vision-conditioned motion generation is viable for real-time robot control, notwithstanding the acknowledged limitation that observations “do not change in response to the generated character's movement” [PAGE 7]. *Prediction:* ball–racket minimum distance degrades from 1.17 m to at least 1.50 m, racket-center error from 0.95 m to at least 1.20 m, and time-to-contact error grows by at least 40 ms, because the rendered view violates the training distribution (the recorded camera trajectory is the only one the encoder ever saw). *Threshold:* if the closed-loop minimum distance stays within 0.15 m of open-loop, the open-loop evaluation is exonerated and the real-time claim stands. *Verification:* fully automatic given the existing motion and camera calibration; bootstrap 95% confidence intervals over contacts as in Table IV [PAGE 7].

A fourth signal worth logging alongside these three is the contact-consistency residual \(\rho_t\) defined above. It requires no new training, only arithmetic on existing predictions, and it would immediately reveal whether the \((\tilde{\mathbf{b}}^{*}_t,\tau^{\mathrm{next}}_t)\) pair is physically coherent. If \(\rho_t\) exceeds 1.0 m on most frames, the diffusion conditioning is not a trajectory sample and the real-time pipeline claim should be withdrawn independent of Vetoes 1–3.
</RLVR_COUNTERFACTUAL_VETOES>