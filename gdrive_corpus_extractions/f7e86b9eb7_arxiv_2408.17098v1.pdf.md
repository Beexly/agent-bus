---
source: "arxiv_2408.17098v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3771
---

<NATIVE_REASONING>
The user wants a rigorous analysis of the provided source PDF (arxiv_2408.17098v1.pdf, UTrack: Multi-Object Tracking with Uncertain Detections). I must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. (Not relevant to this paper, but I must ensure no gambling terminology.)
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive response. Since this is a computer vision paper about multi-object tracking, I need to map the concepts into the required sections carefully, without inventing fake equations. I must use real equations from the paper and cite pages.

Let me outline the content:

THINK_TRACE (>=400 words): Deep multi-hop derivation of UTrack's method. Gray-zone audit: limitations, assumptions (calibrated models, NMS variance validity, occlusion density causing inaccurate variance, phase disambiguation fails in crowded scenes, affine homography approximation validity conditions), singularity/breakdown regimes (high occlusion density MOT20, high-speed camera motion breaking affine approximation, epistemic vs aleatoric separation via pixel attacks).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the paper with page citations:
- Eq (1) relative error propagation [PAGE 4]
- Eq (2) rewrite in center coords [PAGE 4]
- Eq (3) phase disambiguator D_ij^p [PAGE 5]
- Eq (4) Bayes theorem for p [PAGE 5]
- Eq (5) phase angle [PAGE 6]
- Eq (6) size disambiguator [PAGE 6]
- Eq (7) state transition [PAGE 7]
- Eq (8) observation model [PAGE 7]
- R_t := diag(σ_x^2, σ_y^2, σ_w^2, σ_h^2)_t [PAGE 7]
- Eq (9) homography [PAGE 8]
- G(p) = ∂g/∂p [PAGE 8]
- Units: pixels, frame/FPS, radians for phase, dimensionless IoU, covariance matrices.

RETROCAUSAL_GENEALOGY: Historical lineage: SORT [5], Kalman filter [27], Hungarian algorithm [38], DeepSORT [58], ByteTrack [61], StrongSORT [14], BoT-SORT [2], OC-SORT [7], Deep OC-SORT [36], SparseTrack [32]. Uncertainty quantification lineage [1,3,30,49,55,60], probabilistic detectors [15,16], model ensembling [50], one-pixel attack [51]. Multi-week traps: seed sensitivity [43], lucky seed leading to better reported performance [PAGE 9], overfitting to validation, NMS variance estimation under occlusion, phase measurement buffer requirements.

RECURSIVE_THEORY_OF_MIND: This is a bit abstract. I need to interpret "crisis habit regression vs counter-trap vs clock" in the context of the tracker. Crisis habit regression: when tracker fails under occlusion/crowding, it reverts to baseline heuristics (e.g., ByteTrack baseline performs better in MOT20 because uncertainty estimation breaks down). Counter-trap: using phase disambiguation or size disambiguation to break identity switch traps. Clock: temporal buffer for phase oscillation, frame/FPS timing, rolling buffer [PAGE 6]. Also the cascade association temporal staging.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: camera motion homography exact vs affine approximation, validity conditions [PAGE 8] (rotations about optical axis, translations pointing to ground or perpendicular). Biomechanical: pedestrian bounding-box oscillation quasi-periodic motion, phase disambiguation [PAGE 5], width oscillation criteria (3σ threshold) [PAGE 6]. Weather: MOT17 distinct weather conditions [PAGE 9], but paper doesn't explicitly model weather; veto when weather degrades detection confidence/calibration.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions.
1. MOT20 high occlusion density (>~200 ped/frame) -> NMS variance estimation inaccurate -> U-Kalman/R_t measurement vetoed -> baseline ByteTrack better (as observed Fig 3c). Prediction: on MOT20-test with extreme occlusion, U-Kalman HOTA <= baseline ByteTrack HOTA unless NMS is modified for occlusion.
2. KITTI fast camera motion -> affine CMC approximation fails (perspective change not limited to optical-axis rotations/translations) -> homographic CMC required; if only affine used, tracking covariance transform is singular/inexact -> veto. Prediction: BoT-SORT affine CMC HOTA < UTrack homographic CMC HOTA on KITTI by >2 points (as Fig 4 shows).
3. DanceTrack / uniform appearance -> phase disambiguation requires oscillatory tracks; if buffer < one full oscillation period or FPS too low to resolve ω_i, phase estimate undefined (mod 2π singularity at low sample rate) -> phase disambiguator collapses to uniform -> no identity-switch reduction. Prediction: if buffer length < 2/f_osc seconds, D_ij^p → constant, AssA gain ≈ 0.

Need to ensure word count >= 1000 total across sections. THINK_TRACE alone >=400. I'll aim for substantial length in each.

No betting lines. No fake equations. Use exact quotes and page markers.

Let's draft carefully.

Important: The user said "DRIVE SOURCE" but provided the text directly. I will cite [PAGE N] as requested.

I need to be careful with LaTeX formatting inside XML. It should be fine.

Let's write.

Structure:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I will ensure no mentions of betting. I will use formal tone.

Let's start composing.

THINK_TRACE: >400 words. I'll write about 500-600 words.

Key points:
- Multi-hop derivation: Detector outputs (x,y,w,h,s). Confidence s captures classification variability only if calibrated, not regression variance. Paper measures sample variance of predicted boxes during NMS per object [PAGE 3-4]. This yields σ_x, σ_y, σ_w, σ_h.
- Propagate to IoU relative error Δ = δA∩/A∩ using error propagation [PAGE 4, Eq 1-2].
- IoU intervals overlap → tie → disambiguator D_ij [PAGE 5]. Phase disambiguator uses oscillatory width motion; size disambiguator uses standardized area Gaussian similarity [PAGE 5-6].
- Kalman filter: R_t normally heuristic/parametric; UTrack measures R_t = diag(σ^2...) from NMS [PAGE 7]. U-Kalman.
- CMC: exact homography vs affine approximation [PAGE 8]. Breakdown if perspective change involves non-optical-axis rotations or translations not aligned [PAGE 8].
- Gray zones: calibrated model assumption [PAGE 3]; NMS variance under high occlusion MOT20 [PAGE 12]; phase requires buffer and period detection [PAGE 6]; epistemic uncertainty probed by two-pixel attacks [PAGE 8-9]; seed sensitivity [PAGE 9, 11]; singularity: IoU=0 with camera motion shift [PAGE 12]; affine homography invalid for high-speed motion [PAGE 8].

SOURCE_OPERATORS_AND_EQUATIONS: List equations with page numbers and units. Quote verbatim where helpful.

RETROCAUSAL_GENEALOGY: Cite SORT [5], Kalman [27], Hungarian [38], DeepSORT [58], ByteTrack [61], BoT-SORT [2], OC-SORT [7], Deep OC-SORT [36], SparseTrack [32], UQ references [1,3,30,49,55,60], one-pixel attack [51], seed paper [43]. Multi-week traps: validation overfitting, lucky seeds, NMS variance under occlusion, phase buffer warm-up, CMC approximation drift over long sequences.

RECURSIVE_THEORY_OF_MIND: Interpret tracker as agent. Crisis habit regression: under MOT20 crowding, uncertainty estimation fails, tracker regresses to baseline ByteTrack behavior (identity switches increase). Counter-trap: phase/size disambiguation breaks identity switch ties during occlusion. Clock: rolling buffer width history, phase update t0→t after each oscillation, frame/FPS time base. Also cascade association temporal bins.

CROSS_LAYER_VETO_ADJUDICATION: Physical: homography exact vs affine validity [PAGE 8]. Biomechanical: pedestrian width oscillation quasi-periodic, 3σ change criterion [PAGE 6]. Weather: MOT17 weather conditions [PAGE 9] but no explicit weather model; veto if detection calibration degrades under adverse weather because calibrated confidence assumption fails [PAGE 3].

RLVR_COUNTERFACTUAL_VETOES: Three scenarios as above. Each with veto condition, mechanism, and prediction (quantitative where possible from paper: e.g., UTrack 55.8 HOTA vs BoT-SORT 53.8 on DanceTrack; MOT20 baseline better; KITTI homographic boost).

Word count check: I'll write generously.

Let's produce final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds in four coupled hops. Hop 1: the detector emits (x, y, w, h, s) per object; the confidence score s is only a calibrated estimate of class probability, so it encodes classification variability but not regression variance [PAGE 3]. Hop 2: UTrack extracts aleatoric localization uncertainty by measuring the sample variance of bounding-box parameters during non-maximum suppression (NMS), producing σ_x, σ_y, σ_w, σ_h per detection [PAGE 3–4]. Hop 3: these variances propagate into the association geometry. Because the tracker matches via IoU, the paper derives the relative error Δ := δA_∩ / A_∩ of the intersection area A_∩ = (x_r − x̃_l)(y_r − ỹ_l) using the addition rule for relative errors, Eq. (1)–(2) [PAGE 4]. This converts a point IoU into an interval IoU_ij ± Δ_ij. Hop 4: when intervals for two detections j and k overlap against track T_i, the Hungarian matcher faces a tie; UTrack resolves it with a disambiguator D_ij that enforces a permutation P(J) = argsort(D_ij) over the tied set J [PAGE 5]. Two disambiguators are instantiated: a phase disambiguator D_ij^p = p(X_osc^ij | X_ped^ij) C(ϕ_i, ϕ_j) with C = ½[1 + cos(ϕ_i − ϕ_j)] [PAGE 5, Eq. 3], and a size disambiguator D_ij^s = exp[−½(ã_Ti − ã_dj)²] [PAGE 6, Eq. 6]. Separately, the measured variances are injected as the Kalman observation covariance R_t := diag(σ_x², σ_y², σ_w², σ_h²)_t, replacing heuristic or parametric choices [PAGE 7, Eq. 7–8].

Gray-zone audit. The method rests on the calibrated-model assumption: “for calibrated models… the confidence score is then an estimate of such a probability” [PAGE 3]. If calibration drifts under distribution shift, σ estimates from NMS no longer correspond to true observation noise. A second gray zone is NMS variance estimation under heavy occlusion: in MOT20, with pedestrian densities of ~62–246 per frame, “the NMS procedure itself might lead to inaccurate variance estimations due to the high occlusion density,” explaining why the baseline sometimes outperforms uncertainty-enhanced variants [PAGE 12]. A third is the phase tracker: phase ϕ_i = (ω_i t) mod 2π is computed from a rolling buffer of widths w_i(t), with oscillation declared only when w_max − w_min > 3σ̄_w and |w̄(t) − w̄(t_0)| < σ̄_w [PAGE 6]. If the buffer is shorter than one oscillation period or the FPS is too low to resolve ω_i, the phase estimate is undefined—a mod-2π singularity at low temporal sampling. Fourth, camera motion compensation (CMC) uses an exact homography g(p) = (H_1 p + h_2)/(h_3^T p + h_4) [PAGE 8, Eq. 9], but the affine shortcut H_1;8×8 = I_4×4 ⊗ H_1 is valid only for rotations about the optical axis and translations aligned with the ground plane or optical axis; for high-speed autonomous-driving motion this approximation “may fail” [PAGE 8]. Fifth, epistemic uncertainty is approximated cheaply via random two-pixel input attacks [PAGE 8–9], a proxy that does not fully subtract model-specification uncertainty. Finally, result variance across random seeds is acknowledged as a confound: “sometimes a lucky seed can lead to better reported performance” [PAGE 9], mitigated by 20 seeds per configuration (5 for DanceTrack) [PAGE 11].

Breakdown/singularity regimes: (i) IoU → 0 under large camera-motion-induced displacement, making IoU-based association degenerate unless disambiguation or CMC rescues it [PAGE 12]; (ii) affine homography invalid for large perspective changes, causing covariance transform error [PAGE 8]; (iii) phase disambiguation fails in crowded scenes where oscillations cannot be measured [PAGE 12]; (iv) NMS variance collapses or becomes biased under occlusion densities above the MOT20 range [PAGE 12].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All equations below are verbatim from the source; units are SI-compatible image coordinates (pixels), time (seconds via frame/FPS), phase (radians), and dimensionless probabilities/IoU.

Detector output and calibration assumption [PAGE 3]:
Object detector models output (x, y, w, h, s) per detected object, with confidence score s ∈ [0, 1]. “For calibrated models [23], in which the observed accuracy of the predictor matches its mean confidence, the confidence score is then an estimate of such a probability.” Assumption: s captures classification variability only, not regression variance.

Empirical variance via NMS [PAGE 3–4]:
“The variance measurement is performed (Fig. 1a) by obtaining the sample variance of all predicted bounding boxes (per object) during non-maximum-supression (NMS) [21].” Output: σ_a for a ∈ {x, y, w, h}, units pixels.

Relative IoU error propagation [PAGE 4, Eq. 1–2]:
Δ := δA_∩ / A_∩ ≃ δA_∩ / A_∩, with A_∩ = (x_r − x̃_l)(y_r − ỹ_l).
\frac{\delta A_{\cap}}{A_{\cap}} = \frac{\delta (x_r - \tilde{x}_l)}{x_r - \tilde{x}_l} + \frac{\delta (y_r - \tilde{y}_l)}{y_r - \tilde{y}_l}  (1)
Center-coordinate rewrite [PAGE 4, Eq. 2]:
\delta (x_r - \tilde{x}_l) = \delta x - \delta \tilde{x} + \tfrac{1}{2}(\delta w + \delta \tilde{w}), \quad
\delta (y_r - \tilde{y}_l) = \delta y - \delta \tilde{y} + \tfrac{1}{2}(\delta h + \delta \tilde{h})
Uncertainty δa taken as standard deviation σ_a measured from NMS [PAGE 4].

Disambiguator definition [PAGE 5, Definition 1]:
Given overlapping IoU intervals IoU_ij ± Δ_ij over J = {j_1, …, j_m}, a disambiguator D_ij defines permutation P(J) = argsort(D_ij)_{j∈J}. Dimensionless similarity in [0, 1].

Phase disambiguator [PAGE 5, Eq. 3–4]:
D_{ij}^{p} = p(X_{ij}^{\text{osc}} | X_{ij}^{\text{ped}})\, C(\phi_i, \phi_j), \quad C(\phi_i,\phi_j) = \tfrac{1}{2}[1 + \cos(\phi_i - \phi_j)]
D^p_{ij} = 1 for in-phase oscillation, 0 for out-of-phase. Bayes estimate [PAGE 5, Eq. 4]:
p(X_{ij}^{\text{osc}} | X_{ij}^{\text{ped}}) = \frac{X_{ij}^{\text{osc}}\, p(X_{ij}^{\text{osc}})}{X_{ij}^{\text{osc}} p(X_{ij}^{\text{osc}}) + (1 - X_{ij}^{\text{osc}})(1 - p(X_{ij}^{\text{osc}}))}

Phase prediction [PAGE 6, Eq. 5]:
Oscillation detected if w_max^i − w_min^i > 3\bar{\sigma}_{w^i} and |\bar{w}_i(t) − \bar{w}_i(t_0)| < \bar{\sigma}_{w^i}. After each oscillation, t_0 → t.
\phi_i = (\omega_i t) \bmod 2\pi, \quad t = \text{frame} / \text{FPS}
Units: ϕ in radians, t in seconds.

Size disambiguator [PAGE 6, Eq. 6]:
\tilde{a}_{T_i} = (a_{T_i} - \mu_T)/\sigma_T, \quad \tilde{a}_{d_j} = (a_{d_j} - \mu_d)/\sigma_d
D_{ij}^{s} = \exp\left[-\tfrac{1}{2}(\tilde{a}_{T_i} - \tilde{a}_{d_j})^2\right]
Dimensionless standard-normal-kernel similarity over bounding-box areas (pixels²).

Kalman filter with measured observation noise [PAGE 7, Eq. 7–8]:
\bm{\bar{x}}_t = \bm{F}_t \bm{\bar{x}}_{t-1} + \bm{w}_t, \quad \bm{w}_t \sim \mathcal{N}(\mathbf{0}, \bm{Q}_t)
\bm{z}_t = \bm{H}_t \bm{\bar{x}}_t + \bm{o}_t, \quad \bm{o}_t \sim \mathcal{N}(\mathbf{0}, \bm{R}_t)
State s_t = (x_t, y_t, w_t, h_t) in pixels; augmented state \bar{x}_t = (s_t, \dot{s}_t) is 8-dimensional [PAGE 8]. UTrack measures \bm{R}_t := \text{diag}(\sigma_x^2, \sigma_y^2, \sigma_w^2, \sigma_h^2)_t during NMS [PAGE 7], units pixels².

Camera motion compensation [PAGE 8, Eq. 9]:
\bm{p}_t = g(\bm{p}_{t-1}) = \frac{\bm{H}_1 \bm{p}_{t-1} + \bm{h}_2}{\bm{h}_3^T \bm{p}_{t-1} + h_4}
Velocity transform \bm{v}_t = G(\bm{p}_{t-1})\bm{v}_{t-1}; covariance \bm{K}_t = G(\bar{\bm{p}}_{t-1}) \bm{K}_{t-1} G^T(\bar{\bm{p}}_{t-1}), with G(\bm{p}) = \partial g / \partial \bm{p}. Affine approximation \bm{H}_{1;8\times8} = \bm{I}_{4\times4} \otimes \bm{H}_1 valid only for optical-axis rotations and axis-aligned translations [PAGE 8]. Exact homography used for KITTI high-speed motion [PAGE 8, 13].

Metrics [PAGE 10]: HOTA (primary), IDF1, CLEAR MOTA; DetA and AssA components. Higher is better. All dimensionless percentages.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Scientific lineage. UTrack descends from the tracking-by-detection paradigm and the Simple Online and Realtime Tracking (SORT) family [PAGE 2, ref. 5], which combines an object detector, a Kalman filter [ref. 27], and the Hungarian algorithm [ref. 38]. The genealogy branches into DeepSORT [ref. 58] (appearance embeddings to reduce identity switches), ByteTrack [ref. 61] (associate every detection box via cascade association by confidence score), StrongSORT [ref. 14], BoT-SORT [ref. 2] (ByteTrack + camera motion compensation + re-ID), OC-SORT [ref. 7] (re-update to fix occlusion-accumulated noise), Deep OC-SORT [ref. 36], and SparseTrack [ref. 32] (pseudo-depth scene decomposition). UTrack positions itself within this family by retaining the SORT skeleton while injecting measured aleatoric uncertainty, rather than training extra appearance embeddings [PAGE 13–14].

Uncertainty-quantification lineage. The paper cites broad UQ necessity in AI [PAGE 1, refs. 1,3,30,49,55,60] and prior work on probabilistic detectors [refs. 15,16] whose computational cost precludes online use [PAGE 1–2]. UTrack’s contribution is post-hoc uncertainty extraction from a black-box real-time detector (YOLOv8), aligning with “building uncertainty models on top of black-box predictors” [PAGE 2, refs. 6,46,50]. Epistemic uncertainty is proxied via random two-pixel attacks rather than expensive model ensembling [ref. 50] [PAGE 8–9].

Multi-week traps. (1) Seed sensitivity: Picard’s observation that a lucky seed can inflate reported performance [ref. 43] is explicitly acknowledged [PAGE 9]; the authors run 20 seeds per configuration (5 for DanceTrack) [PAGE 11], but a multi-week validation campaign could still overfit to a favorable seed realization on MOT17 validation. (2) NMS variance decay: variance estimates are computed per object from overlapping NMS boxes; under sustained occlusion the set of overlapping boxes shrinks or becomes inconsistent, so σ_a becomes a biased estimator of true localization error—an effect that compounds week-over-week as trackers are re-tuned on increasingly crowded validation subsets. (3) Phase-buffer cold start: the rolling width buffer requires multiple frames to declare an oscillation and update t_0 → t [PAGE 6]; in the first seconds of a new sequence the phase disambiguator is uninitialized, creating an early-trajectory trap where identity associations default to raw IoU. (4) CMC approximation drift: the affine homography shortcut accumulates error under persistent non-axis-aligned camera motion [PAGE 8], so a tracker validated on short clips may degrade on longer autonomous-driving sequences where perspective changes violate the rotation/translation alignment assumption. (5) Calibration drift: the entire method assumes calibrated confidence scores [PAGE 3]; across weeks of deployment, sensor temperature changes or lens fouling can break calibration, silently invalidating the σ_a → R_t mapping.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Modeling the tracker as a recursive agent with beliefs about its own observations: Crisis habit regression occurs when the uncertainty subsystem itself becomes unreliable. Under MOT20 crowding (~62–246 pedestrians/frame), “the baseline tends to perform better in this dataset” [PAGE 12] because NMS-derived σ_a is inaccurate and U-Kalman’s measured R_t mis-specifies observation noise; the tracker regresses to its crisis habit—plain IoU association without uncertainty weighting. In that regime, adding uncertainty is worse than ignoring it, so the rational policy is to veto U-Kalman and fall back to ByteTrack’s baseline Kalman settings.

Counter-trap. The phase and size disambiguators are counter-traps to the identity-switch trap that springs during occlusion. When two detections have overlapping IoU intervals against one track [PAGE 5], a baseline tracker arbitrarily picks one, risking an identity switch. UTrack’s phase disambiguator exploits quasi-periodic bounding-box width oscillation from pedestrian gait [PAGE 5–6], while the size disambiguator exploits short-term area consistency [PAGE 6]. These external similarity quantities break ties in the Hungarian assignment, reducing identity switches (assessed via AssA and IDF1) [PAGE 10]. The counter-trap succeeds on DanceTrack, where phase disambiguation “went from being the worse to being the second best method” [PAGE 12], and fails on MOT20 where oscillations cannot be measured amid occlusion [PAGE 12].

Clock. The tracker’s internal clock is the rolling buffer of widths w_i(t) sampled at t = frame/FPS [PAGE 6]. Phase is advanced by ω_i t mod 2π, with t_0 reset after each detected oscillation [PAGE 6]. Cascade association also stages time: detections are binned by confidence score or pseudo-depth, and unmatched detections from bin r are added to bin r−1 in a cascade [PAGE 7, 10]. The clock thus operates at three grains: frame-level NMS variance, buffer-level phase period (seconds), and bin-level cascade epochs. A counter-trap only fires if the clock has resolved at least one full oscillation period; otherwise ϕ_i is undefined and D_ij^p collapses to a constant, removing the phase-based identity-protection signal.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. The homography transformation law is exact in Eq. (9) [PAGE 8], but the affine simplification used by BoT-SORT and SparseTrack is “only valid if the perspective change only involves rotations about the optical axis of the camera, and translations with this axis either pointing directly to the ground plane or perpendicular to it” [PAGE 8]. Veto condition: if the camera undergoes high-speed motion with pitch/roll components or non-axis-aligned translation (as in KITTI autonomous driving, “large pixel displacements from frame to frame, brought about by fast camera motions” [PAGE 9]), the affine covariance transform is physically invalid; the tracker must use the exact homography on center and corner pixels plus G_xy propagation [PAGE 8]. Evidence: on KITTI, homographic CMC significantly boosts HOTA and IDF1 over affine CMC [PAGE 13, Fig. 4].

Biomechanical layer. Pedestrian bounding-box width exhibits “noisy quasi-periodic motion” [PAGE 5]. The oscillation detector requires w_max − w_min > 3σ̄_w and return-to-initial-state |w̄(t) − w̄(t_0)| < σ̄_w [PAGE 6]. Veto condition: if the subject is not oscillating (e.g., standing still, occluded, or non-pedestrian class), X_osc^i = 0 and D_ij^p = 0 [PAGE 5, Eq. 3]; the phase disambiguator must be gated by pedestrian classification and oscillation detection, otherwise it injects zero similarity and cannot disambiguate. DanceTrack validates this layer: synchronized choreography with uniform appearance makes phase cues decisive [PAGE 9, 12].

Weather/environment layer. MOT17 contains “distinct weather conditions” [PAGE 9], yet UTrack does not model weather explicitly. Because the method assumes calibrated detector confidence [PAGE 3], adverse weather (rain, fog, low light) that degrades detector calibration invalidates the σ_a → R_t mapping and the interpretation of s as class probability. Veto condition: if operating outside the calibration regime in which “observed accuracy matches mean confidence” [PAGE 3], the observation noise covariance R_t is not trustworthy, and the tracker should fall back to heuristic R_t or disable U-Kalman. The paper does not quantify this weather veto; it is a derived operational constraint.

Adjudication summary: A deployment stack should (1) verify camera-motion regime before choosing affine vs. homographic CMC; (2) gate phase disambiguation on oscillation detection and pedestrian class; (3) monitor detector calibration before trusting measured R_t; and (4) disable uncertainty-weighted association in extreme occlusion densities where NMS variance is unreliable [PAGE 12].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable veto scenarios, each with a mechanism and a falsifiable prediction grounded in the paper’s reported numbers.

Veto 1 — MOT20 extreme-occlusion regime. Condition: validation/test subset with pedestrian density at the upper MOT20 range (~200–246 per frame) and heavy mutual occlusion. Mechanism: “the NMS procedure itself might lead to inaccurate variance estimations due to the high occlusion density,” and “the baseline tends to perform better in this dataset” [PAGE 12]. The U-Kalman R_t = diag(σ²) becomes a biased observation-noise model, degrading Kalman gating. Prediction: On an MOT20 split filtered to the densest 20% of frames, ByteTrack baseline HOTA will exceed UTrack + U-Kalman HOTA by at least the gap observed in Fig. 3c, and IDF1 will not improve. Veto is triggered if U-Kalman AssA ≤ baseline AssA.

Veto 2 — KITTI affine-CMC regime. Condition: KITTI sequences processed with only the affine homography approximation H_{1;8×8} = I ⊗ H_1 rather than the exact transformation Eq. (9). Mechanism: fast camera motion produces large perspective changes violating the optical-axis rotation/axis-aligned translation assumption [PAGE 8]; covariance K_t is transformed with the wrong Jacobian G, so state uncertainty is misaligned with the image plane. Prediction: BoT-SORT with affine CMC will record lower HOTA and IDF1 on KITTI than UTrack with homographic CMC; Fig. 4 shows the homographic variant “significantly boosts in both HOTA and IDF1” [PAGE 13]. Quantitatively, the veto predicts KITTI HOTA gap > 1.0 point in favor of exact homography (consistent with Fig. 4 axes spanning ~59.5–62.5 HOTA).

Veto 3 — DanceTrack sub-Nyquist phase sampling. Condition: a track buffer shorter than one full pedestrian oscillation period, or frame rate too low to resolve ω_i (i.e., sampling below 2× oscillation frequency). Mechanism: phase ϕ_i = (ω_i t) mod 2π requires multiple completed oscillations to estimate ω_i and update t_0 → t [PAGE 6]; if the buffer cannot capture a full period, X_osc^i cannot be reliably set to 1, so D_ij^p = p(X_osc|X_ped) C(ϕ_i,ϕ_j) collapses toward an uninformative constant. Prediction: On DanceTrack sequences downsampled to < 5 FPS or with buffer length < 2/f_osc seconds, phase disambiguation will yield no AssA gain over baseline; in the paper’s full-rate DanceTrack results, phase disambiguation is “the second best method” and UTrack achieves HOTA 55.8 vs. BoT-SORT 53.8 [PAGE 14, Table 1], so the veto predicts AssA gain drops from ~+2 points to ≈ 0 under sub-Nyquist sampling.
</RLVR_COUNTERFACTUAL_VETOES>