---
source: "arxiv_2609.10498v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 17
model: deepseek/deepseek-v4.1-flash-1017
words: 7751
---

<NATIVE_REASONING>
We need answer must be based on source text, exact XML sections. Need satisfy invariants: zero betting lines. No mention spreads/totals/moneylines/odds. We can mention no betting lines? Better avoid words maybe "No wagering constructs are used." The prompt asks GSE + GSI Frontier Reasoning Foundry, likely wants deep analysis. Must include >=1000 words across exact XML sections. THINK_TRACE >=400 words. Need formal LaTeX, units, page citations, breakdown. When source pages provided cite exact [PAGE N] markers and verbatim quotes. Need include >=1,000-word depth. Need all sections exact names. Need cross-layer veto physical/biomechanical/weather veto proof. This paper is about pose estimation. We need interpret "crisis habit regression vs counter-trap vs clock" likely sports reasoning framework but source is technical. Need avoid betting. We can discuss habits of crisis (model relying on ground contact) etc. "clock" temporal context. Need "multi-week traps" maybe historical/scientific lineage. We should be rigorous.

Need include SOURCE_OPERATORS_AND_EQUATIONS with formal LaTeX, units, page citations, breakdown. Need cite exact [PAGE N] and verbatim quotes. We can quote exact phrases from source. Need be careful quote exact. Need include equations: camera transforms Eq 1-2, root Eq 5, plane Eq7, ray Eq10, Eq15-18, residual Eq28-33, losses Eq35,39,41,43,44, metrics. Include units cm, m, mm, px, s^-1, m s^-2. Singularity/breakdown regimes: ray-ground denominator n^T d^w =0 parallel; λ* <=0 no forward intersection; airborne foot clearance >0 invalid assumption; occlusion/motion blur; camera calibration errors; depth ambiguity; temporal window stride; ground plane z=0; player small in image; etc. Need mention no betting lines. Could include "This is not a betting or odds analysis".

Need answer in XML tags only? It says use exact XML sections. We can put text within tags. Need perhaps include all sections. Must be >=1000 words. Let's construct with enough depth, maybe 2500-3500 words. Desired oververbosity 5; but requirement deep. Need ensure THINK_TRACE >=400 words. We can include exact quotes and page citations. Verbatim quotes: 
- [PAGE 1] abstract: "residual refinement reduces root error from 49 cm with geometry alone to 14 cm with a frame-wise MLP and 10 cm with a TCN, while a Transformer achieves a comparable 11 cm." Also "Failure analysis further identifies airborne motion as the main limitation of the ground-based geometric initialization."
- [PAGE 2] "the relative 3D pose produced by a strong monocular body model is already close to the corresponding camera-relative ground truth after self-centering. The dominant remaining error is therefore not the articulated pose itself, but the global camera-space translation of the player."
- [PAGE 4] dataset: "89 clips from eight different matches" and "2.41 million valid player–frame observations"; split. [PAGE 4] "training set contains 62 clips from six matches, the validation set contains 12 clips from the BRA_KOR match, and the test set contains 15 clips from the held-out ENG_FRA match."
- [PAGE 5] "The intersection is accepted only when the ray is not parallel to the plane, λ∗ i,t > 0, and the required observations are valid." Exact line breaks? Can quote with normalization? They require verbatim quotes. Need exact string maybe can include with [PAGE 5] and quote as in text; line breaks not important? Use exact words.
- [PAGE 5] "If the selected foot is airborne, the ray intersects the pitch at a point behind the true joint location."
- [PAGE 6] Eq 15 denominator; Page 6 has intersection equation. Actually page 5 ends Eq 13, page 6 includes Eq14-18 and figure. Wait source page 5 includes Sec 3.4 through Eq13; page 6 has figure and Eq14-18? Looking at text: after [PAGE 5] ends at "dw i,t = R⊤ t dc i,t. (13)" then [PAGE 6] starts "Step 1..." and includes eq 14-18 at bottom. So cite [PAGE 6] for Eq15-18. Good.
- [PAGE 9] main results Table 3: root error etc.
- [PAGE 10] airborne: "The error progressively increases with foot clearance, reaching approximately 15 cm at 10–13 cm clearance, 29 cm at 15–18 cm, and 37 cm in the highest-clearance interval." And geometry increases from 46 cm to almost one meter.
- [PAGE 15] temporal consistency Table 8: velocity error cm s−1, acceleration m s−2.
- [PAGE 16] throughput.
- [PAGE 16] camera axes: "depth remains the dominant source of localization error."
- [PAGE 14] "Temporal modeling is beneficial across all evaluated regimes, but the improvement is larger in difficult situations."
Need include exact [PAGE N]. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof." We need discuss physical veto: foot clearance, airborne, occlusion, motion blur, camera calibration, pitch plane, field markings, weather? Weather not in source. We can say the source provides no weather data; any weather claim is a vetoed extrapolation. Need "proof" means source-grounded veto rules. Cross-layer: physical (ground plane), biomechanical (airborne, high speed, lower-foot clearance, pelvis height), observational (small scale, motion blur, occlusion), calibration (intrinsics/extrinsics). Weather absent; cannot infer. Need mention no betting.

Need "RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions." Need design 3 scenarios where if data violates assumption, model prediction should be vetoed. Verifiable via source metrics. Examples:
1. Airborne/header high clearance >0.15 m: geometric init predicts behind true joint, root error high. Veto geometry-only (≥~29 cm at 15-18 cm; 37 cm highest); TCN still better but degraded; counterfactual if clearance near zero model trust higher. Prediction: TCN root error rises ~10 to ~37 cm as clearance rises. Veto if model claims <10 cm for clearance >0.15 m unless explicit contact/airborne model. Use [PAGE 10].
2. Ray-plane parallel/no forward intersection: denominator n^T d^w_i,t near 0 or λ* <=0. Geometry init invalid; must veto geometric initialization. Prediction: no valid q^w; need fallback. [PAGE 6]. Verifiable by computing denominator and λ*. 
3. Small player image scale/bbox height low: root error increases; veto confidence if bbox height below range. [PAGE 15/16] Figure 8 shows error improves with apparent size; [PAGE 15] "Performance progressively improves as the apparent player size increases." Prediction: worse at 0.08-0.09 bbox height vs 0.14. Need maybe exact values not numeric. Also high speed: [PAGE 15] error increases fastest motions. Could use [PAGE 15] Fig9. Maybe choose depth ambiguity: root error dominated by camera depth [PAGE16]. Veto confidence if no camera descriptor? Table 5 removal camera descriptor increases root error to 13.02 cm TCN; removing 2D+box 15.93. But scenario should be verifiable. We can include input ablation as counterfactual: removing camera descriptor raises TCN root error from 10.12 to 13.02 cm [PAGE 11/PAGE15]. But scenario should be RLVR veto: if input camera descriptor missing, model should veto/abstain from claiming full model performance. Prediction error ~13 cm. That's a good verifiable veto. Or "valid-joint mask missing" 10.75. Hmm.

Need "RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps." Discuss lineage: camera-relative pose -> global root; SMPL, HybrIK, VideoPose3D, MotionBERT, Ray3D, GLAMR/SLAHMR/PACE, WHAM/TRAM/GVHMR/ProxyCap, WorldPose; sports field calibration TVCalib, No Bells, PnLCalib, BroadTrack; AthletePose3D. Multi-week traps: confusing local pose with global translation; trusting geometry initialization on airborne; using generic SLAM in low texture dynamic soccer; overfitting match-specific cameras; direct absolute root regression; architecture obsession vs temporal context; depth error; metric scale; evaluation alignment confusion (G-MPJPE vs PA-MPJPE not comparable). Need mention source quotes: [PAGE 3] "Although these metrics use different alignment protocols and are therefore not directly comparable" quote exact. [PAGE 2] "The dominant remaining error is therefore not the articulated pose itself, but the global camera-space translation of the player." Good.

Need "RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock." Interpret: crisis habit = reacting to failure by direct root regression or adding complexity; counter-trap = don't let network unlearn geometry; clock = temporal context. Use paper's ablation: direct root MLP 2.56 m, TCN 63 cm vs geometry 49 cm; residual reduces to 14/10. So crisis habit of "regress everything" is vetoed. Counter-trap: over-trust geometry when airborne; temporal model should correct but not fully remove ambiguity. Clock: temporal window 41 frames, stride 8, velocity/acceleration losses, temporal consistency. Need mention "availability of temporal context is more important than the specific choice between convolutional and attention-based modeling" [PAGE 9]. And recursive ToM: model's estimate of player state (airborne/grounded) must be recursive; if it assumes contact, it fails. Need maybe use "crisis habit regression" as a term: the model's habit under crisis is to fall back on ground-ray; counter-trap is to let the residual network hallucinate; clock is temporal evidence. Good.

Need "THINK_TRACE" deep multi-hop derivation & gray-zone audit >=400 words. We'll write ~600-800 words. Must include derivation chain: monocular pose gives relative skeleton; root translation missing; geometry ray-ground gives init; residual learns correction; temporal aggregation; metrics. Gray-zone audit: near-parallel ray, λ <=0, airborne foot, occlusion, calibration error, small bbox, high speed, depth ambiguity; match-disjoint split. Mention no betting lines. Include exact quotes/cites. We need ensure quotes are exact. We can quote "residual refinement reduces root error from 49 cm with geometry alone to 14 cm with a frame-wise MLP and 10 cm with a TCN, while a Transformer achieves a comparable 11 cm." That's exact from abstract. Good.

Need overall word count >1000. Let's plan final:

<THINK_TRACE> (maybe 700 words)
- Start: The source is not a wagering document; no betting lines. We analyze pose estimation.
- Derivation: Eq 1-2 transforms; relative pose Eq3; root addition Eq4; GT root Eq5; plane Eq7; selected lower-limb keypoint Eq8; ray Eq10; ray-plane Eq14-16; init Eq18; residual Eq28-33; temporal Eq29-32; aggregation Eq34; losses Eq35-44; metrics.
- Multi-hop: local pose already close after self-centering [PAGE2 quote]; so root is target. Geometry init is strong but biased by foot clearance; residual learns context; temporal improves; TCN vs Transformer comparable. 
- Gray-zone audit: exact singularities: n^T d^w =0, λ*<=0; airborne mis-grounding; occlusion/motion blur; camera calibration; small scale; depth ambiguity; match-disjoint generalization. Veto claims not supported. Include source quote [PAGE5] "If the selected foot is airborne..." and [PAGE10] numbers. Mention units.
- No invented ratios; all formal equations in next section.

<SOURCE_OPERATORS_AND_EQUATIONS>
Need formal LaTeX, units, page citations, breakdown. Include equations:
1. x^c = R_t x^w + t_t; x^w = R_t^T(x^c - t_t). R in SO(3), t m, x m.
2. root gt r = 1/2(...). m.
3. plane π: n^T x + b=0; n unitless, b m? Actually plane offset b has units m if n dimensionless and x m. Soccer z=0.
4. ray direction d^c = K^{-1} e / ||...||_2; K pixels? K has units? Intrinsics fx/fy in px, cx/cy px; e in px? normalized ray dimensionless. d^w = R^T d^c.
5. ray q^w(λ)=C_t+λ d^w, C_t=-R^T t_t (m). Intersection λ* = -(n^T C_t + b)/(n^T d^w) [m? λ dimension m if d unit], q^w m.
6. init r^c,init = q^c - \hat X^{rel}_{i,t,j*}; q^c=R_t q^w + t_t. m.
7. residual Δr^c,gt = r^c,gt - r^c,init; \hat r = r^init + Δ\hat r. m.
8. temporal Fθ: Δ\hat r^c_{i,1:T}=Fθ(f_{i,1:T}); h=Eθ(f); z=Gθ(h); Δ=Hθ(z). Features dimensionless/mixed; validity mask binary.
9. losses: Smooth L1, root, velocity, acceleration, camera 3D. Units: root m; velocity m/s; acceleration m/s^2; 3D m. β=1? They set β=1 but in normalized root coordinates? Need state β=1 in code? Eq36 says β=1, but they say root velocity acceleration losses evaluated in normalized root coordinates; camera consistency in metres. The equation has β=1; units follow transformed coordinates. State exactly.
10. metrics: root error cm, World MPJPE cm, Local MPJPE cm, reproj px. Throughput player-frames/s, video frames/s.
- Breakdown regimes: denominator zero; λ*≤0; airborne; calibration/distortion; occlusion; small player; depth; high speed; temporal window boundary; direct absolute regression. Include exact quotes.
- Cite pages [PAGE 5], [PAGE6], [PAGE9], [PAGE10], [PAGE15], [PAGE16].
Need mention "No betting lines" perhaps in intro. Do not mention odds. The invariant says never mention spreads/totals/moneylines/odds. "No betting lines" includes word lines? It says ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. We can say "No wagering constructs are used" avoid "betting lines". But the word "lines" might refer field lines. Fine. Avoid "odds". We can mention "field line markings" because that's not betting. The instruction says never mention spreads, totals, moneylines, or odds; saying "no betting lines" may technically mention betting lines. Better avoid phrase "betting lines". Just state "This analysis is confined to the source's pose-estimation content." Avoid "odds", "spread", "total", "moneyline". "line markings" is okay? It says betting lines, but field line markings are not betting. Fine.

<RETROCAUSAL_GENEALOGY> (~400 words)
- Lineage: SMPL, HybrIK, 4DHumans, Multi-HMR, SAM 3D Body; temporal VideoPose3D, MixSTE, MotionBERT; global Ray3D, GLAMR, SLAHMR, PACE, WHAM, TRAM, GVHMR, ProxyCap; sports calibration TVCalib, No Bells, PnLCalib, BroadTrack; WorldPose; AthletePose3D. Cite pages 1-4.
- Multi-week traps: (a) body-relative vs world-grounded confusion; source quote [PAGE1] "an accurate body-relative skeleton does not imply accurate localization"; (b) generic SLAM on soccer; (c) direct root regression; table 4; (d) geometry trust on airborne; (e) metric comparability G-MPJPE vs PA-MPJPE; [PAGE3] quote; (f) architecture churn vs temporal context; (g) match leakage; split [PAGE4]. Each trap has multi-week implication.

<RECURSIVE_THEORY_OF_MIND> (~400 words)
- Crisis habit regression: under failure, model may regress absolute root; source Table 4 shows bad. Counter-trap: don't over-correct geometry; residual should learn correction, but airborne ambiguity remains. Clock: temporal window 41 frames, stride 8, losses velocity/acceleration; temporal context matters more than backbone. Use source quotes [PAGE9], [PAGE10], [PAGE15]. Need "crisis habit regression vs counter-trap vs clock" explicit.

<CROSS_LAYER_VETO_ADJUDICATION> (~400 words)
- Physical veto: ray-plane denominator near zero; λ*<=0; plane assumption z=0; foot clearance. Biomechanical veto: airborne, high speed, pelvis height not contact. Weather veto: source no weather; cannot infer; any claim about wind/rain is unsupported and vetoed. Calibration/observational veto: occlusion, motion blur, small image scale, calibration errors. Provide proof using equations and metrics. Use exact quotes.

<RLVR_COUNTERFACTUAL_VETOES> (~400 words)
- Three scenarios with predictions:
  1. High foot clearance >0.15 m: veto geometry-only; predict root error ~29 cm at 15-18 cm, ~37 cm highest; TCN ~same trend but mitigated; if claimed <10 cm invalid. Cite [PAGE10].
  2. Ray-plane parallel/backward: denominator |n^T d^w| < ε or λ*≤0: veto geometric initialization; no valid q^w; predict fallback required; if model outputs init without flag invalid. Cite [PAGE6].
  3. Missing camera descriptor or small bbox/high speed? Need "3 verifiable RLVR veto scenarios + predictions." Use input ablation: remove camera descriptor: TCN root error 13.02 cm vs full 10.12; World MPJPE 15.39 vs 13.20 [PAGE11/PAGE15]. If camera descriptor absent, veto full-model accuracy claim; predict ~13 cm. Or use Transformer w/o camera descriptor 15.46. Good.
  Alternatively small bbox height <0.09 H: predict higher root error; but no exact numeric. Input ablation more verifiable. Scenario 3: remove 2D pose and bounding-box cues: TCN root 15.93, World MPJPE 18.20; Transformer 15.81/17.41 [PAGE15]. Veto if claiming 10-11 cm. Good. But then only 3. Need include exact predictions.
- Each scenario include trigger, veto, prediction, evidence.

Need exact XML closing tags? The prompt shows <RLVR_COUNTERFACTUAL_VETOES> with mismatch? It shows "<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>" Actually open/close same? It has <RLVR_COUNTERFACTUAL_VETOES> in opening and closing </RLVR_COUNTERFACTUAL_VETOES>. Yes. Need use exact names.

Need perhaps no markdown? XML only. We can use LaTeX inside. Good.

Need ensure no "toy equations" fake ratios. We can state all equations from source. We should not invent fake ratios like error reduction percent? We can compute %? The paper says "approximately 72%" reduction. That's source. We can mention. But avoid inventing. We can use exact. No fake ratios. We can state "geometry-only 48.58 cm vs TCN 10.12 cm" from Table 3. That's data, not fake. If we compute ratio, maybe okay? But to be safe, cite source's "approximately 72%" from [PAGE9]? Page 9 text says "Residual learning reduces the root error by approximately 72% relative to the geometry-based initialization even without temporal modeling." That's exact. Good.

Need "units" for equations. Need mention K pixels? Camera intrinsic matrix maps camera coordinates to pixel homogeneous coords; entries fx, fy in pixels, cx,cy pixels; k1,k2 radial distortion dimensionless. R unitless, t m. Points m. Plane n unitless, b m if x m. λ m if d unit. Smooth L1 units m for root if in meters; but paper says root/velocity/acceleration losses in normalized root coordinates, camera consistency in metres. State that. The equations as written have β=1; unit interpretation depends on normalized coordinates. Good.

Need "exact singularity/breakdown regimes." In SOURCE_OPERATORS: denominator zero. If n^T d^w = 0, ray parallel; if λ* <0, intersection behind camera; if selected joint airborne, q^w is behind true joint; if foot clearance >0, bias. If calibration bad, K/R/t errors; if distortion not inverted, ray error; if occlusion/blur, keypoint error; if small scale, depth error; if high speed, temporal blur; if window boundary, aggregation. If direct absolute regression, not singularity but failure. Good.

Need maybe mention "world coordinate system z=0" and "camera center C_t=-R_t^T t_t". Good.

Need "Fθ" composition. Need Eq 34 aggregation. Need Eq 35,39,41,43,44. Need metrics. Good.

Need be mindful that source text has page 5 vs page 6 for Eq15; cite [PAGE 6] for Eq15 and [PAGE5] for notation? The text on page 6 includes "Intersecting the ray with the pitch plane gives λ∗ = ..." Yes cite [PAGE6]. Page 5 includes Eq7-13. Good.

Need cite exact [PAGE N] markers. Use [PAGE 1], [PAGE 2], etc.

Potential issue: The user says "DRIVE SOURCE: ... PAGES: 17 SOURCE TEXT: ..." They expect answer grounded. No need to mention external. Good.

Need "ZERO BETTING LINES" We should not mention "betting" at all? The prompt itself mentions. To be safe, avoid words: spread, totals, moneylines, odds, betting, line? But "line markings" appears in source; if we mention "field line markings" is okay? It includes "line" but not betting. The invariant says never mention spreads, totals, moneylines, or odds. It doesn't forbid "line" generally. But "ZERO BETTING LINES" could be interpreted as no betting lines; saying "No betting lines" uses the phrase. Better not say "betting". Our answer can simply not mention any wagering. We can mention "field markings" instead of "line markings" to avoid line. But source has "line markings" and "field-segment". We can quote "standardized line markings"? If we quote exact, includes "line". That's okay because it's not betting. But maybe avoid. Use "pitch markings" paraphrase, no exact quote needed. However exact quotes include "pitch has known metric dimensions and standardized line markings." If we quote, it's field line markings. Safe.

Need include verbatim quotes. We can use quotes exactly. Let's verify exact strings:

Page 1 abstract: "On match-disjoint evaluation sequences, residual refinement reduces root error from 49 cm with geometry alone to 14 cm with a frame-wise MLP and 10 cm with a TCN, while a Transformer achieves a comparable 11 cm. The resulting world-space MPJPE reaches 13.2 cm, and ablations show that residual prediction clearly outperforms direct global-root regression while temporal context matters more than the specific temporal backbone. Failure analysis further identifies airborne motion as the main limitation of the ground-based geometric initialization." Exact enough. We can quote parts.

Page 2: "The dominant remaining error is therefore not the articulated pose itself, but the global camera-space translation of the player." Exact.

Page 3: "Although these metrics use different alignment protocols and are therefore not directly comparable" exact? Text: "Although these metrics use different alignment protocols and are therefore not directly comparable, they highlight that accurate frame-wise body alignment does not by itself ensure an accurate trajectory in a common scene coordinate system." Yes.

Page 4: "Our processed subset comprises 89 clips from eight different matches, totaling approximately 2.41 million valid player–frame observations." Exact. "the training set contains 62 clips from six matches, the validation set contains 12 clips from the BRA_KOR match, and the test set contains 15 clips from the held-out ENG_FRA match." Exact? It says "the training set contains 62 clips from six matches, the validation set contains 12 clips from the BRA_KOR match, and the test set contains 15 clips from the held-out ENG_FRA match." Yes.

Page 5: "If the selected foot is airborne, the ray intersects the pitch at a point behind the true joint location." Exact. Actually page 5 text: "It is nevertheless only approximate. If the selected foot is airborne, the ray intersects the pitch at a point behind the true joint location." Good.

Page 6: "The intersection is accepted only when the ray is not parallel to the plane, λ∗ i,t > 0, and the required observations are valid." Exact? Text: "The intersection is accepted only when the ray is not parallel to the plane, λ∗ i,t > 0, and the required observations are valid." Yes.

Page 9: "Residual learning reduces the root error by approximately 72% relative to the geometry-based initialization even without temporal modeling." Exact. "the availability of temporal context is more important than the specific choice between convolutional and attention-based modeling." Exact? Page 9: "However, the nearly identical World MPJPE obtained by the two temporal architectures suggests that the availability of temporal context is more important than the specific choice between convolutional and attention-based modeling." Yes.

Page 10: "The error progressively increases with foot clearance, reaching approximately 15 cm at 10–13 cm clearance, 29 cm at 15–18 cm, and 37 cm in the highest-clearance interval." Exact. "Airborne motion therefore remains one of the main failure modes of the current approach" exact? Page 11? Actually page 10/11: "Airborne motion therefore remains one of the main failure modes of the current approach and motivates future refinements that explicitly model ground contact or airborne states." It appears page 11? In source, page 10 ends with "The error progressively increases..." and page 11 begins with Table 5? Wait source page 10 includes Table 3, Table 4, section 4.3.1, Figure 4, section 4.3.2 text. It ends with "When the player becomes" and page 11 begins "airborne, the corresponding image ray intersects..." Then Table 5. So quote from [PAGE 10] for numbers; [PAGE 11] for "Airborne motion therefore remains..." Actually page 11 text near bottom: "Airborne motion therefore remains one of the main failure modes of the current approach and motivates future refinements that explicitly model ground contact or airborne states." Yes [PAGE 11]. Good.

Page 15: "Performance progressively improves as the apparent player size increases." Exact? Page 15/16: "Performance progressively improves as the apparent player size increases." It is on page 15? Text: page 15 ends with "Performance pro- gressively improves as the apparent player size increases." Yes [PAGE15]. "Temporal modeling is beneficial across all evaluated regimes, but the improvement is larger in difficult situations." Exact on [PAGE14]? Page 14 A.4: "Temporal modeling is beneficial across all evaluated regimes, but the improvement is larger in difficult situations." Yes [PAGE14].

Page 16: "depth remains the dominant source of localization error." Exact? Page 15/16: "Temporal residual refinement strongly reduces all three components, but depth remains the dominant source of localization error." It appears page 16? Source page 15 ends "The geometry-based initialization is substantially more accurate in the lateral image-plane directions than along camera depth. Temporal residual refinement strongly reduces all three components, but depth remains the dominant source of localization error." Wait page 15 text: after A.8, "The geometry-based initialization is substantially more accurate in the lateral image-plane directions than along camera depth. Temporal residual refinement strongly reduces all three components, but depth remains the dominant source of localization error." This is at bottom of page 15? The source shows [PAGE 15] includes Table 7, Table 8, Figure 6, section A.7, and A.8 start. It ends with "The geometry-based initialization is substantially more accurate in the lateral image-plane directions than along camera depth. Temporal residual refinement strongly reduces all three components, but depth remains the dominant source of localization error." Actually the page break to [PAGE 16] occurs after that? Let's inspect: [PAGE 15] ends with "The geometry-based initialization is substantially more accurate in the lateral image-plane directions than along camera depth. Temporal residual refinement strongly reduces all three components, but depth remains the dominant source of localization error." Then [PAGE 16] starts "0.08..." figure. So quote [PAGE15]. But earlier I said [PAGE16]. Need be accurate. The text "depth remains..." is on [PAGE15]. Let's cite [PAGE15]. For throughput [PAGE16] and [PAGE17]. For Table 8 [PAGE15]. For Table 5 [PAGE11]/[PAGE15]. Table 5 on page 11. Table 7 on page 15. Good.

Page 16: "These measurements exclude upstream player tracking, camera calibration, and SAM3DBody inference." Exact. "mean training throughput was (2.95 ± 0.03) × 103, (25.5 ± 20.8) × 103, and (61.4 ± 25.5) × 103 input player-frames s−1 for the MLP, TCN, and Transformer, respectively." Note source uses 103 maybe 10^3 due formatting. Use exact with "× 10^3" maybe not verbatim. We can quote exact as "× 103" but it's likely superscript lost. Better paraphrase with unit. If quoting, use "input player-frames s−1". Good.

Need avoid overlong but enough. Let's draft.

Potential issue: "formal LaTeX equations" inside XML. Need escape ampersands? XML text can contain &? Avoid ampersands. Use "and" not &, because XML. Use < >? LaTeX uses < in inequalities; XML tags might parse? We are outputting text, not machine parsed? But to be safe, use words or \lt. Use \leq? Fine. Avoid raw & in LaTeX like \text{World MPJPE} &? No. Use no ampersand. Use \( \) or $$. The XML sections contain LaTeX with < maybe not. We can use \leq instead of < in equations. Need avoid raw `&`. Good.

Need use "SO(3)" etc.

Need mention "Eq. (18)" etc.

Let's write THINK_TRACE with ~700 words. Need ensure >=400. Count roughly. We'll write robust.

Potential need to mention "GSE + GSI Frontier Reasoning Foundry" maybe not. Not necessary.

Let's compose final in XML tags. Need not include markdown. Use exact tags.

Need maybe include "No wagering constructs" to satisfy? We can start "Scope: pose-estimation only; no wagering constructs are used." That doesn't mention forbidden terms. Good.

Let's ensure all sections have enough. Overall ~3500 words. It's okay.

Let's craft.

Need be careful with "weather veto proof": Source has no weather. We can state "The corpus provides no wind, rain, temperature, or surface-friction measurements; therefore any weather-mediated adjustment to root error is outside the source and is vetoed as unsupported." This is not a fake equation. Good.

Need "biomechanical veto proof": lower-foot clearance is primary; pelvis height less direct. Quote [PAGE16?] "Unlike lower-foot clearance, pelvis height does not provide a direct indicator of ground contact." Where is that? Page 16 A.9: "Unlike lower-foot clearance, pelvis height does not provide a direct indicator of ground contact. It varies with player morphology..." Yes [PAGE16]. Good. Use exact quote. Great.

Need "physical veto proof": plane z=0 and ray-plane denominator. Good.

Need "crisis habit regression vs counter-trap vs clock": Make subsections in paragraph form. Use terms.

Need "multi-week traps": We can enumerate as "Trap 1..." but XML no issue.

Let's ensure exact quote "an accurate body-relative skeleton does not imply accurate localization in the surrounding scene" from page 1. Exact: "However, an accurate body-relative skeleton does not imply accurate localization in the surrounding scene." Yes.

Need "The challenge becomes even more pronounced in broadcast soccer." maybe not.

Need "WorldPose ... G-MPJPE values 18,888.9 and 8,334.1 mm, per-meter drifts 53.3 and 17.6 cm/m" from page 3. Could mention as lineage trap. Good.

Need "camera calibration from field markings" etc.

Need "formal equations" include Eq 15 with denominator. For singularity: n^T d^w = 0. Since d^w unit, n unit, denominator dimensionless? λ* units m because numerator m. Good. If d not unit? Eq10 normalized so d unit. Good.

Need "Kt^-1 e" units: K^{-1} has inverse pixel? e homogeneous pixel; resulting vector dimensionless up to scale. Normalized. Good.

Need "plane offset b" unit m if n unit and x m. Good.

Need "C_t=-R_t^T t_t" units m.

Need "r^c,init = q^c - \hat X^{rel}_{i,t,j*}" units m. Good.

Need "root error ||r^c - r^c,gt||_2" cm.

Need "World MPJPE" mean per-joint Euclidean in world m; reported cm.

Need "Local MPJPE" after removing root translation. Good.

Need "Reprojection error" px.

Need "Smooth L1" with β=1; units? If input normalized, normalized units; camera consistency m. State "The paper states root, velocity, and acceleration losses are evaluated in normalized root coordinates; camera-space consistency is in metres. Thus the numeric β=1 is dimensionless in those normalized coordinates; the physical metric is carried by the denormalization and the camera-consistency term." That's precise.

Need "training throughput" units player-frames s^-1; video frames s^-1. Good.

Need "RLVR" maybe "reinforcement learning with verifiable rewards" but we can treat as verification scenario. We don't need define. But maybe mention "verifiable reward veto" not betting. Good.

Need "predictions" in scenarios. Use "Prediction:" explicit.

Need "cross-layer veto adjudication" maybe include table? XML text. Fine.

Need "RETROCAUSAL_GENEALOGY" maybe "retrocausal" means historical lineage. We can say "Retrocausal reading: the present architecture is legible as a response to earlier failures." Good.

Let's draft final now. Need ensure no XML-invalid raw `&`; avoid. Use "and" instead. LaTeX `\text{}` okay. Use `\hat` etc. Use `\top` not `^T`? Fine.

Need avoid raw `<` in equations. Use `\lt`. For `|e| \lt \beta` okay. For `\lambda^*_{i,t} \gt 0`. Good. Use `\le`? Fine.

Need no ampersand in "Q&A". Avoid.

Let's write. 

</NATIVE_REASONING>

<THINK_TRACE>
Scope: this is a pose-estimation and geometric-reconstruction analysis only; no wagering constructs are used. The source’s central move is a decomposition: the upstream monocular body model supplies a self-centered relative skeleton, while the paper learns only the global camera-space root translation. This is motivated by the empirical observation that “The dominant remaining error is therefore not the articulated pose itself, but the global camera-space translation of the player” [PAGE 2]. The derivation chain is therefore: camera transform Eq. (1) and inverse Eq. (2); relative pose Eq. (3); global camera-space joints by adding one root Eq. (4); ground-truth root as hip midpoint Eq. (5); pitch plane Eq. (7); lower-limb keypoint selection Eq. (8); normalized camera ray Eq. (10); world ray Eq. (13); ray-plane intersection Eq. (15); camera-space intersection Eq. (17); geometry-initialized root Eq. (18); residual target Eq. (28); temporal residual prediction Eq. (29); refined root Eq. (33); and world reconstruction Eq. (45). The learned temporal model is not asked to regenerate articulation; it is asked to estimate a correction to a metric geometric prior. This is why direct absolute-root regression is a trap: Table 4 reports 256.00 cm root error for the absolute-root MLP and 63.05 cm for the absolute-root TCN, whereas geometry alone is 48.58 cm and residual TCN is 10.12 cm [PAGE 9, PAGE 10]. The paper’s own summary is exact: “Residual learning reduces the root error by approximately 72% relative to the geometry-based initialization even without temporal modeling” [PAGE 9].

The gray-zone audit begins with the ray-plane intersection. Eq. (15) is singular when \(n^{\top} d^{w}_{i,t}=0\), i.e. when the viewing ray is parallel to the pitch plane. Even when the denominator is nonzero, the intersection is accepted only if \(\lambda^{*}_{i,t}\gt 0\) and observations are valid; the source states: “The intersection is accepted only when the ray is not parallel to the plane, \(\lambda^{*}_{i,t} \gt 0\), and the required observations are valid” [PAGE 6]. A second gray zone is the contact assumption. Eq. (18) assumes the selected lower-limb joint is on the pitch. The source states: “If the selected foot is airborne, the ray intersects the pitch at a point behind the true joint location” [PAGE 5]. That bias is not a small nuisance: Fig. 5a and the text report approximately 15 cm root error at 10–13 cm foot clearance, 29 cm at 15–18 cm, and 37 cm in the highest-clearance interval for the TCN; geometry initialization rises from about 46 cm for grounded configurations to almost one meter at the largest clearances [PAGE 10]. The paper explicitly identifies airborne motion as a main limitation [PAGE 1, PAGE 11].

A third gray zone is observation quality. The source notes occlusion, motion blur, imperfect keypoint localization, and relative-pose error as bias sources [PAGE 5]. Small players are harder: “Performance progressively improves as the apparent player size increases” [PAGE 15]. Fast motion is harder, and camera depth remains dominant: “depth remains the dominant source of localization error” [PAGE 15]. A fourth gray zone is calibration: the method assumes camera intrinsics, extrinsics, and distortion are available or supplied upstream [PAGE 4]. It does not solve field registration as its primary contribution; it consumes calibrated geometry. Therefore calibration error propagates into the ray, the ground intersection, and the root. A fifth gray zone is evaluation: the match-disjoint split uses 62 training clips from six matches, 12 validation clips from BRA_KOR, and 15 test clips from ENG_FRA [PAGE 4]; this is strong evidence against match-specific leakage, but it does not prove stadium-weather or league-wide generalization. The gray-zone audit therefore vetoes any claim that geometry-only initialization is universally reliable, and it also vetoes any claim that the residual network removes the airborne ambiguity entirely. The correct reading is conditional: geometry is strong when contact and calibration hold; temporal residual refinement mitigates bias but does not abolish it.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units. All 3D points are in metres unless noted. Camera rotation \(R_t \in SO(3)\) is dimensionless; translation \(t_t \in \mathbb{R}^3\) is in metres; intrinsic matrix \(K_t \in \mathbb{R}^{3\times3}\) has focal terms \(f_{x,t}, f_{y,t}\) in pixels and principal point \(c_{x,t}, c_{y,t}\) in pixels; radial distortion \(k_t \in \mathbb{R}^2\) is dimensionless. World-to-camera and inverse transforms are
\[
x^{c}_{i,t,j}=R_t x^{w}_{i,t,j}+t_t,\qquad
x^{w}_{i,t,j}=R_t^{\top}\left(x^{c}_{i,t,j}-t_t\right),
\]
as in Eq. (1) and Eq. (2) [PAGE 5]. The upstream relative pose is \(\hat{X}^{rel}_{i,t}\in\mathbb{R}^{J\times3}\) in the camera frame, with global camera-space joints
\[
\hat{x}^{c}_{i,t,j}=\hat{x}^{rel}_{i,t,j}+\hat{r}^{c}_{i,t},
\]
Eq. (4) [PAGE 5]. The ground-truth root is the hip midpoint
\[
r^{c,gt}_{i,t}=\frac{1}{2}\left(x^{c,gt}_{i,t,j_L}+x^{c,gt}_{i,t,j_R}\right),
\]
Eq. (5) [PAGE 5]. The pitch plane is
\[
\pi:\ n^{\top}x+b=0,
\]
Eq. (7), with unit normal \(n\) dimensionless and offset \(b\) in metres when \(x\) is in metres; in the soccer-field frame this can be \(z=0\) [PAGE 5]. The selected lower-limb keypoint is
\[
j^{*}_{i,t}=\arg\max_{j\in J_{cand}} v_{i,t,j},
\]
Eq. (8) [PAGE 5]. With homogeneous image point \(e_{i,t}\), the normalized camera ray is
\[
d^{c}_{i,t}=\frac{K_t^{-1}e_{i,t}}{\left\lVert K_t^{-1}e_{i,t}\right\rVert_2},
\]
Eq. (10), and the world ray is \(d^{w}_{i,t}=R_t^{\top}d^{c}_{i,t}\), Eq. (13) [PAGE 5]. The camera center is \(C_t=-R_t^{\top}t_t\) in metres, Eq. (11) [PAGE 5]. Points along the world ray are
\[
q^{w}_{i,t}(\lambda)=C_t+\lambda d^{w}_{i,t},
\]
Eq. (14); intersection with the plane gives
\[
\lambda^{*}_{i,t}=-\frac{n^{\top}C_t+b}{n^{\top}d^{w}_{i,t}},\qquad
q^{w}_{i,t}=C_t+\lambda^{*}_{i,t}d^{w}_{i,t},
\]
Eq. (15) and Eq. (16) [PAGE 6]. The camera-space intersection is \(q^{c}_{i,t}=R_t q^{w}_{i,t}+t_t\), Eq. (17), and the initialized root is
\[
r^{c,init}_{i,t}=q^{c}_{i,t}-\hat{x}^{rel}_{i,t,j^{*}},
\]
Eq. (18) [PAGE 6]. The ground-truth residual and prediction are
\[
\Delta r^{c,gt}_{i,t}=r^{c,gt}_{i,t}-r^{c,init}_{i,t},\qquad
\Delta\hat{r}^{c}_{i,1:T}=F_{\theta}(f_{i,1:T}),
\]
Eq. (28) and Eq. (29); the refined root is
\[
\hat{r}^{c}_{i,t}=r^{c,init}_{i,t}+\Delta\hat{r}^{c}_{i,t},
\]
Eq. (33) [PAGE 7]. The temporal model is the composition \(h_{i,t}=E_{\theta}(f_{i,t})\), \(z_{i,1:T}=G_{\theta}(h_{i,1:T})\), \(\Delta\hat{r}^{c}_{i,t}=H_{\theta}(z_{i,t})\), Eq. (30) to Eq. (32) [PAGE 7]. Overlapping windows are averaged by Eq. (34) [PAGE 7].

Training uses axis-weighted Smooth L1:
\[
L_{root}=\frac{1}{N_r\Omega}\sum_{i,t}v_{i,t}\sum_{a\in\{x,y,z\}}\omega_a\rho_{\beta}\left(\hat{r}^{c}_{i,t,a}-r^{c,gt}_{i,t,a}\right),
\]
Eq. (35), with
\[
\rho_{\beta}(e)=
\begin{cases}
\frac{e^2}{2\beta}, & |e|\lt \beta,\\
|e|-\frac{\beta}{2}, & |e|\ge \beta,
\end{cases}
\quad \beta=1,
\]
Eq. (36) [PAGE 8]. Velocity and acceleration losses use first and second differences:
\[
L_{vel}=\frac{1}{3N_v}\sum_{i,t}m^{v}_{i,t}\sum_{a}\rho_{\beta}\left(\hat{v}_{i,t,a}-v^{gt}_{i,t,a}\right),
\]
Eq. (39), and
\[
L_{acc}=\frac{1}{3N_a}\sum_{i,t}m^{a}_{i,t}\sum_{a}\rho_{\beta}\left(\hat{a}_{i,t,a}-a^{gt}_{i,t,a}\right),
\]
Eq. (41) [PAGE 8]. The camera-space consistency term is Eq. (43), and the overall objective is
\[
L=\lambda_{root}L_{root}+\lambda_{vel}L_{vel}+\lambda_{acc}L_{acc}+\lambda_{cam3D}L_{cam3D},
\]
Eq. (44) [PAGE 8]. The paper states root, velocity, and acceleration losses are evaluated in normalized root coordinates, while camera-space consistency is in metres [PAGE 8]. Thus the physical metric is carried by denormalization and the metre-based consistency term. Metrics are root error in cm, World MPJPE in cm, Local MPJPE in cm after removing root translation, and reprojection error in pixels [PAGE 9]. Throughput is reported in input player-frames s\(^{-1}\) and video frames s\(^{-1}\) [PAGE 16].

Breakdown and singularity regimes. (1) \(n^{\top}d^{w}_{i,t}=0\): ray parallel to the pitch plane; Eq. (15) is singular and the initialization must be rejected, consistent with the acceptance condition [PAGE 6]. (2) \(\lambda^{*}_{i,t}\le 0\): intersection behind the camera or non-forward; reject. (3) Selected joint airborne: the ray intersects behind the true joint, biasing Eq. (18); this is the dominant failure mode, with root error rising to approximately 29 cm at 15–18 cm clearance and 37 cm at highest clearance for the TCN [PAGE 10]. (4) Occlusion, motion blur, bad keypoints, or relative-pose error: corrupt \(e_{i,t}\) and \(\hat{x}^{rel}\), propagating into Eq. (10) and Eq. (18) [PAGE 5]. (5) Calibration error in \(K_t, R_t, t_t, k_t\): corrupts ray, camera center, and world transform [PAGE 4, PAGE 5]. (6) Small player scale: localization worsens as apparent size decreases [PAGE 15]. (7) High speed: larger frame-to-frame displacement and motion blur increase error [PAGE 15]. (8) Camera-depth ambiguity: depth remains the dominant error axis [PAGE 15]. (9) Direct absolute-root regression: not a mathematical singularity but an empirical breakdown, with 256.00 cm MLP and 63.05 cm TCN versus 10.12 cm residual TCN [PAGE 9, PAGE 10].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Retrocausally, Field Converter is legible as a correction to a long lineage that optimized body articulation while leaving world translation underdetermined. The lineage runs from SMPL’s compact body representation [PAGE 2] through HybrIK, 4DHumans, Multi-HMR, and SAM 3D Body for body and mesh recovery [PAGE 1, PAGE 3], and from VideoPose3D, MixSTE, and MotionBERT for temporal body pose [PAGE 1, PAGE 3]. That lineage solved local pose but not shared metric localization: “an accurate body-relative skeleton does not imply accurate localization in the surrounding scene” [PAGE 1]. The global branch then appears: Ray3D for calibrated camera rays, GLAMR, SLAHMR, and PACE for camera-human motion, and WHAM, TRAM, GVHMR, and ProxyCap for world-grounded motion and contact priors [PAGE 1, PAGE 3]. WorldPose made the local-to-global gap explicit, reporting large scene-level errors and G-MPJPE values of 18,888.9 mm for GLAMR and 8,334.1 mm for SLAHMR, with per-metre drifts of 53.3 and 17.6 cm/m [PAGE 3]. The paper’s sports-specific branch then uses TVCalib, No Bells Just Whistles, PnLCalib, and BroadTrack for field registration and broadcast-camera estimation [PAGE 2, PAGE 4]. Field Converter’s historical novelty is not “better body pose”; it is the allocation of geometry to initialization and learning to residual correction.

Multi-week traps. Trap 1: conflating local pose accuracy with world grounding. The paper’s Local MPJPE is 7.74 cm for every variant, while World MPJPE is 48.36 cm for geometry and 13.20 cm for TCN [PAGE 9]; a team can spend weeks improving local pose and see no world-space gain. Trap 2: direct absolute-root regression. Table 4’s 256.00 cm MLP and 63.05 cm TCN versus 10.12 cm residual TCN [PAGE 10] is a hard veto against “just regress the root” instincts. Trap 3: generic SLAM or visual odometry in soccer. The source explains that the pitch has weakly textured regions, dynamic players and spectators, and varying focal length [PAGE 2], so a generic SLAM assumption can consume weeks before failing. Trap 4: over-trusting geometry when the foot is airborne. The 46 cm to almost one metre geometry-initialization trend with clearance [PAGE 10] is a multi-week warning: a geometry-only dashboard will look acceptable on grounded frames and fail on headers and jumps. Trap 5: metric-comparability confusion. The source warns that G-MPJPE and PA-MPJPE use different alignment protocols and “are therefore not directly comparable” [PAGE 3]. Trap 6: architecture churn. TCN and Transformer are 10.12 cm and 11.04 cm root error, with World MPJPE 13.20 cm and 13.21 cm [PAGE 9]; the paper concludes that temporal context matters more than the specific temporal backbone [PAGE 9]. Trap 7: match leakage. The strict split has no match in more than one split [PAGE 4], preventing match-specific camera trajectories and stadium geometry from inflating results. Trap 8: treating pelvis height as a contact proxy. The source states that “Unlike lower-foot clearance, pelvis height does not provide a direct indicator of ground contact” [PAGE 16]; weeks can be lost trying to infer contact from pelvis height alone.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. Under distributional stress, the naive habit is to let the network regress the full global root. The paper’s evidence says this habit fails: absolute-root MLP is 256.00 cm and absolute-root TCN is 63.05 cm, while geometry alone is 48.58 cm and residual TCN is 10.12 cm [PAGE 9, PAGE 10]. The crisis habit is therefore “throw away the geometric prior and learn everything”; the source vetoes it. The better habit is to preserve the metric prior and learn only its context-dependent error.

Counter-trap. The opposite trap is over-trusting the geometric initialization. Geometry is strong when the selected lower-limb joint is grounded and calibration is good, but it is biased when the player is airborne: “If the selected foot is airborne, the ray intersects the pitch at a point behind the true joint location” [PAGE 5]. The temporal residual model mitigates this, but the paper is explicit that airborne motion remains a main failure mode [PAGE 11]. A recursive theory of mind must therefore represent the player’s latent state—grounded versus airborne—and must not treat the ray-ground intersection as an unconditional observation. The model’s “belief” about contact is the hidden variable that governs whether Eq. (18) is trustworthy.

Clock. The clock is temporal context. The TCN uses 41-frame windows with stride 8 and velocity and acceleration losses [PAGE 7, PAGE 8]; Table 8 shows root velocity error 131.9 cm s\(^{-1}\) for the MLP versus 100.6 cm s\(^{-1}\) for TCN and 101.9 cm s\(^{-1}\) for Transformer, and acceleration error 48.3 m s\(^{-2}\) versus 39.6 and 39.0 m s\(^{-2}\) [PAGE 15]. The clock matters most when instantaneous observations are ambiguous: “Temporal modeling is beneficial across all evaluated regimes, but the improvement is larger in difficult situations” [PAGE 14]. The recursive lesson is that the model should use neighboring frames to infer whether the current root is geometrically plausible, rather than trusting a single-frame ray intersection. Crisis habit says “regress more”; counter-trap says “trust geometry absolutely”; clock says “use temporal evidence to decide when geometry is valid.” The paper’s comparison supports the clock: temporal context improves root error from 13.63 cm for MLP to 10.12 cm for TCN, and World MPJPE from 15.76 cm to 13.20 cm [PAGE 9].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto. The physical layer vetoes any claim that the ray-ground construction is universally valid. Eq. (15) has a denominator \(n^{\top}d^{w}_{i,t}\); when it is zero, the ray is parallel to the plane and the intersection is undefined. The source’s acceptance rule is explicit: “The intersection is accepted only when the ray is not parallel to the plane, \(\lambda^{*}_{i,t} \gt 0\), and the required observations are valid” [PAGE 6]. A physical veto must also reject non-forward intersections and invalid observations. The pitch plane \(z=0\) is a modeling assumption; if the field model or camera calibration is wrong, Eq. (18) inherits the error. The physical proof is therefore algebraic and observational: denominator zero or non-positive \(\lambda^{*}\) invalidates the initialization; foot clearance invalidates the contact assumption.

Biomechanical veto. The dominant biomechanical veto is airborne motion. The source reports TCN root error increasing from about 10 cm when the lower foot is close to the ground to approximately 15 cm at 10–13 cm clearance, 29 cm at 15–18 cm, and 37 cm at the highest clearance; geometry initialization rises from approximately 46 cm to almost one metre [PAGE 10]. This is a biomechanical veto because the lower-limb joint is no longer a ground-contact landmark. Pelvis height is not an acceptable substitute: “Unlike lower-foot clearance, pelvis height does not provide a direct indicator of ground contact” [PAGE 16]. High-speed motion is a secondary biomechanical veto because larger frame-to-frame displacement and motion blur degrade instantaneous keypoints [PAGE 15]. The correct adjudication is: grounded low-clearance frames can use geometry with residual refinement; high-clearance or high-speed frames require explicit contact-state modeling or abstention from narrow error claims.

Weather veto. The source provides no wind, rain, temperature, surface-friction, or lighting measurements. Any weather-mediated adjustment to root error is therefore unsupported by this corpus and is vetoed. The only admissible weather-adjacent statement is that the method depends on camera calibration and image quality, which could in principle be affected by environmental conditions, but the paper does not quantify that. No weather equation should be invented.

Calibration and observational veto. The method assumes time-varying intrinsics, extrinsics, and radial distortion from annotations or upstream calibration [PAGE 4]. If \(K_t, R_t, t_t, k_t\) are wrong, the ray in Eq. (10), the camera center in Eq. (11), and the world transform in Eq. (45) are wrong. Occlusion, motion blur, imperfect keypoints, and relative-pose error are also named bias sources [PAGE 5]. Small apparent player size worsens localization [PAGE 15], and camera depth remains the dominant error axis [PAGE 15]. The cross-layer proof is thus: physical validity of the ray-plane intersection, biomechanical validity of the contact assumption, calibration validity of the camera model, and observational validity of the keypoints must all hold before a low-error claim is admissible. If any layer is vetoed, the correct output is a conditional estimate, not a point claim.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: high lower-foot clearance. Trigger: ground-truth lower-foot clearance is in the 15–18 cm bin or higher. Veto: reject any claim that geometry-only initialization is accurate; reject any claim that the residual model has eliminated airborne ambiguity. Prediction: TCN root error should rise from the roughly 10 cm grounded regime to approximately 29 cm at 15–18 cm clearance and approximately 37 cm in the highest-clearance interval; geometry initialization should rise from approximately 46 cm to almost one metre [PAGE 10]. Verifiable check: bin player-frames by clearance and compare root error; if a system reports sub-10 cm error for the high-clearance bin without an explicit contact/airborne model, the claim is vetoed by the source’s reported trend. This is the strongest counterfactual because it directly contradicts the contact assumption in Eq. (18).

Scenario 2: ray-plane singularity or backward intersection. Trigger: \(|n^{\top}d^{w}_{i,t}|\) is below a numerical tolerance, or \(\lambda^{*}_{i,t}\le 0\), or the required observations are invalid. Veto: reject the geometric initialization for that player-frame; Eq. (15) is singular or non-forward, and Eq. (18) must not be used as a trusted prior. Prediction: the system must flag the frame and fall back to a temporal or learned estimate; if it silently outputs \(r^{c,init}\), the output is invalid. Verifiable check: compute \(n^{\top}d^{w}_{i,t}\) and \(\lambda^{*}_{i,t}\) from the calibrated camera and selected keypoint; the source’s acceptance condition is explicit [PAGE 6]. This scenario is a mathematical veto, not a heuristic.

Scenario 3: missing camera descriptor or missing image-space pose and box cues. Trigger: the input feature vector omits \(f^{cam}_{t}\), or omits \(f^{2D}_{i,t}\) and \(f^{box}_{i,t}\). Veto: reject full-model accuracy claims of 10–11 cm root error. Prediction: for the TCN, removing the camera descriptor increases root error from 10.12 cm to 13.02 cm and World MPJPE from 13.20 cm to 15.39 cm; removing 2D pose and box cues increases root error to 15.93 cm and World MPJPE to 18.20 cm [PAGE 11, PAGE 15]. For the Transformer, removing the camera descriptor gives 15.46 cm root error and 17.25 cm World MPJPE, while removing 2D pose and box cues gives 15.81 cm and 17.41 cm [PAGE 15]. Verifiable check: run the same ablation or inspect the feature vector; if the camera or image-space descriptors are absent, the full-model error claim is vetoed and the expected error band is the ablated band. These three scenarios are independently checkable from the source’s equations, acceptance rules, and reported tables.
</RLVR_COUNTERFACTUAL_VETOES>