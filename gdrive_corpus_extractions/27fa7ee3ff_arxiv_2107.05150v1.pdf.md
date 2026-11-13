---
source: "arxiv_2107.05150v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 6
model: deepseek/deepseek-v4.1-flash-1017
words: 7784
---

<NATIVE_REASONING>
We need answer to user. Need follow instructions: GSE + GSI Frontier Reasoning Foundry. Need produce XML sections exact. Need >=1000 words depth. Source pages provided, cite exact [PAGE N] markers and verbatim quotes. Zero betting lines. Zero toy equations. Need derive from paper. Need be careful not mention betting. Need formal LaTeX equations, units, assumptions, singularity/breakdown regimes. Need multi-hop derivation, gray-zone audit, retrocausal genealogy, recursive theory of mind, cross-layer veto, RLVR counterfactual vetoes. The paper about CFTrack radar-camera fusion 3D MOT. We need perhaps interpret "DRIVE SOURCE" maybe a request to analyze. Need include source operators/equations. Need exact quotes. Need not invent fake ratios. We can state formal equations from paper, units. We need cite page markers and quotes. Need ≥1000 words across exact sections. Need XML tags. Need no betting lines. Need perhaps discuss "clock" etc from requested sections; can adapt to autonomous driving tracking, crisis habit regression vs counter-trap vs clock. Need "physical/biomechanical/weather veto proof" though no biomechanical in source; we can adjudicate physical/weather veto for radar/camera. Need "RLVR counterfactual vetoes" 3 verifiable scenarios + predictions. Need mention RLVR? We can define as reinforcement-learning-with-verifiable-rewards counterfactual audit. Need perhaps avoid unsupported claims. Need cite pages.

Let's parse paper key facts:

Page 1:
- Abstract: CFTrack end-to-end network joint detection and tracking based on radar-camera fusion; center-based radar-camera fusion detection; greedy association uses depth, velocity and 2D displacement; robust to occluded/overlapping; nuScenes 20.0 AMOTA; outperforms all vision-based 3D tracking methods and baseline LiDAR; online 35ms per image.
- Intro: MOT; occlusions/interactions; tracking-by-detection; radars long range robust adverse weather fog/snow; accurate velocity; less processing; CenterFusion; previous frame and detections; outputs 3D detection + tracking IDs; absolute velocity global coordinate; greedy similar CenterTrack but uses weighted cost depth velocity 2D displacement.

Page 2:
- contributions; 20.0% AMOTA, CenterTrack by factor 4, 28 fps.
- related work; online; 3D; AB3DMOT etc.

Page 3:
- Figure architecture; CenterFusion inputs image I ∈ R^{W×H×3}, radar detections P_i=(xi, yi, zi, vx_i, vy_i); coords vehicle x forward y left z upward.
- CenterNet heatmap \hat Y ∈ [0,1]^{W/R × H/R × C}; R downsampling; C categories; local maxima.
- ground truth Y Gaussian peak.
- frustum association; radar pillars; depth and velocity mapped to objects; separate heatmap channels concatenated; velocity vector estimated.
- focal loss equation. Need reproduce correctly. It appears:
L_i = 1/N \sum_{xyc} ((1-\hat Y_{xyc})^\alpha log(\hat Y_{xyc}) if Y_{xyc}=1; (1-Y_{xyc})^\beta (\hat Y_{xyc})^\alpha log(1-\hat Y_{xyc}) otherwise). The source has line break. Need quote exact? We can present LaTeX with cases. Need note source text maybe missing minus signs? Focal loss normally negative. The page text has no leading minus in displayed equation? It says "((1 −ˆYxyc)α log( ˆYxyc)" for Y=1 and "(1 −Yxyc)β( ˆYxyc)α log(1 −ˆYxyc)" otherwise. In standard focal loss there is minus. The paper might have omitted due formatting. We should not "correct" silently? We can say "as rendered in source [PAGE 3], the focal-loss expression is..." and present with minus? Need exact quote. Better quote verbatim text: "CenterFusion uses an objective function based on the focal loss, defined as: Li = 1 N X xyc ((1 −ˆYxyc)α log( ˆYxyc) Yxyc = 1 (1 −Yxyc)β( ˆYxyc)α log(1 −ˆYxyc) otherwise" [PAGE 3]. Then formal LaTeX with sign note: In standard focal loss a minus sign is implied by minimization; source rendering omits it. But don't invent. We can include exact and note. Need no toy equations. This is real.

- Problem formulation: inputs current and previous images I(t-1), I(t) ∈ R^{W×H×3}; radar P(t-1), P(t) ∈ R^{N×5}; tracked objects T(t-1)={b...}; b=(p,d,v,w,id); p∈R2 center, d depth, v∈R2 velocity, w∈[0,1] confidence, id integer. Goal T(t); consistent id; single deep network end-to-end.

Page 4:
- Detection network modified; previous detections single channel heatmap Gaussian; previous radar improves occlusion.
- estimates 2D displacement using concatenated radar and image features.
- Object association: a=(p,d,v,c); p∈Z2 pixels, d∈R depth, v∈R2 velocity, c∈C category. displacement output \hat D(t) ∈ R^{W/R × H/R × 2}; L1 loss.
- Cost:
Cost_{t,t-1} = α L_pixel + β L_depth + δ L_velocity if c_t=c_{t-1}; ∞ otherwise.
L_pixel=(x_t-x_{t-1})^2+(y_t-y_{t-1})^2
L_depth=(d_t-d_{t-1})^2
L_velocity=(vx_t-vx_{t-1})^2+(vy_t-vy_{t-1})^2
α,β,δ ∈ R+ tunable.
- For every detected object at p, look for prior detections within radius r from p - Dp. If unmatched prior detections, calculate cost; match lowest; new track for unmatched.
Need note units: L_pixel pixels^2; L_depth m^2 if depth meters; L_velocity (m/s)^2; cost units depend on α etc. αβδ units to normalize; cost is not physically same dimension unless weights carry units. This is gray-zone. Need formal discussion: weighted sum of heterogeneous units is dimensionally inconsistent unless α,β,δ absorb reciprocal units or inputs normalized. Paper does not specify units or normalization. This is a breakdown regime. Need mention singularity: cost=∞ for class mismatch; gating radius r; if no prior within radius, no match; if multiple same cost? Greedy tie-breaking unspecified. If α/β/δ scaling poor, depth/velocity can dominate. If radar depth/velocity missing/erroneous, cost becomes unreliable. If depth d=0? L_depth no singularity mathematically, but relative weighting? Actually no division. Singularity/breakdown: class mismatch infinite veto; no division. But "exact singularity/breakdown regimes" can state there is no algebraic singularity in cost except class-mismatch ∞. Runtime? not singular. Maybe focal loss has log(0) singularities: \log \hat Y when \hat Y=0 and Y=1; \log(1-\hat Y) when \hat Y=1. In implementation clamped. Need mention. Heatmap range [0,1], log singular at boundaries; practical epsilon. That is exact. Also downsampling R; W/R, H/R require divisibility/stride; boundary effects. Could mention.

Page 5:
- Table I: Ours Cam+Rad time 35ms AMOTA 0.200 AMOTP 1.292 MOTAR 0.353 MOTA 0.151 MOTP 0.766 Recall 0.420. CenterTrack cam 45 ms 0.046 etc. Need quote "AMOTA score of 20.0%, improving the vision-based CenterTrack algorithm by about 15% (by a factor of 4) and the LiDAR-based CenterTrack algorithm by 9.2%." [PAGE 5].
- Per class: CFTrack Car .546, Truck .000, Bus .107, Trailer .075, Pedest .346, Motor .206, Bicycle .114. Outperforms in Car, Ped, Motorcycle, Bicycle; AB3DMOT+Megvii better in Truck, Bus, Trailer; large objects harder to associate radar detections -> lower depth velocity. This is important gray-zone.
- runtime 35ms per image (28 fps).
- Conclusion only radar+image tracking on benchmark.

Page 6 references.

Need answer with XML sections. Need at least 1000 words. Need exact tags. We can produce maybe 1800-2500 words. Desired oververbosity 5. Need satisfy depth. Need ensure sections exact names. Need include <THINK_TRACE> >=400 words. Need include all sections. Could include quotes inside. Need no betting lines. Need maybe mention "no betting" not necessary. Need no odds.

Need think about "GSE + GSI Frontier Reasoning Foundry" maybe expected to treat as "gray-zone audit" and "multi-hop derivation". Need phrase "Drive source" as paper. We can frame as "Source-grounded operator extraction".

Need not mention odds. Need no fake ratios. Formal equations only from source and standard definitions. We can define AMOTA/MOTAR from page 4 exactly. Need quote:
"MOTAR = max(0, 1 − IDSr + FPr + FNr − (1 −r) ∗ P / (r ∗ P))" Actually page 4 text:
MOTAR = max(0, 1 −IDSr + FPr + FNr −(1 −r) ∗P
r ∗P
)
AMOTA =
1
n −1
X
r∈{ 1/(n−1), 2/(n−1),...,1}
MOTAR
Need interpret: MOTAR = max(0, 1 - (IDS_r + FP_r + FN_r - (1-r)*P)/(r*P)). The text line break: "1 −IDSr + FPr + FNr −(1 −r) ∗P / r ∗P". Standard sAMOTA formula: MOTAR = max(0, 1 - (IDS_r + FP_r + FN_r - (1-r)P)/(rP)). Yes. Need present with parentheses and cite [PAGE 4]. Could note source rendering is compressed; standard reading. Need not correct? We can state "as printed [PAGE 4], with the conventional grouping ..." But be precise.

Need "SOURCE_OPERATORS_AND_EQUATIONS": list operators: input tensors, heatmap, focal loss, tracked object tuple, displacement, cost, gating, AMOTA. Include LaTeX, units, assumptions, exact singularity/breakdown. Need cite exact markers and verbatim quotes. Use quotes from pages. Need avoid too long? Need ≥1000 words. We can quote short.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage & multi-week traps. Need connect to CenterNet/CenterFusion/CenterTrack/AB3DMOT, tracking-by-detection, online vs batch, sensor fusion. Retrocausal genealogy: how later performance (AMOTA 20) is "caused" by earlier design choices; traps: benchmark overfitting, per-class large-object failure, dimensional weighting, weather/occlusion. Multi-week traps maybe "multi-week traps" could refer to research project traps over weeks. We can describe traps: treating AMOTA improvement as universal, ignoring per-class Truck/Bus/Trailer zeros, not normalizing cost units, not testing adverse weather despite radar claim, not controlling calibration/time sync. Need mention pages. Good.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. This sounds from a framework maybe about decision under crisis. Need adapt: In autonomous tracking, recursive theory-of-mind can be framed as tracker's model of other agents? Paper doesn't do ToM. Need state source does not model mental states; it tracks physical objects. Crisis habit regression: under occlusion, model falls back to prior/velocity extrapolation; counter-trap: over-trusting radar depth/velocity when multipath/static returns; clock: frame timing, online constraint, previous frame, 35 ms. Need not invent. Need keep grounded: It uses previous frame/detections and greedy association; no recursive mental-state modeling. "Recursive theory of mind" maybe required by prompt. We can say "For this source, the ToM layer is minimal: the tracker models object persistence and motion, not intentions." Then discuss regression to CenterTrack-like visual displacement when radar unreliable; counter-trap = adding depth/velocity can hurt large objects; clock = online frame clock and latency. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Need address physical: radar long range robust to fog/snow quote [PAGE 1]; camera occlusion; radar velocity; vehicle coordinate; large object radar association failure [PAGE 5]. Biomechanical: no biomechanical layer in source; pedestrian class 0.346 AMOTA; cannot infer gait/biomechanics. Weather: radar robust adverse weather claim, but paper does not report weather-stratified results; so weather veto not proven, only asserted. Need "veto proof" = what conditions veto the tracking claim. Use exact quotes. Need no unsupported. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need define RLVR: reinforcement-learning with verifiable rewards; counterfactual vetoes. We can make three scenarios with testable predictions:
1. Remove radar depth/velocity from cost (set β=δ=0 or ablate radar) -> AMOTA should drop vs 0.200, especially Pedestrian/occluded; verify on nuScenes val. Prediction: CFTrack degrades toward CenterTrack-like 0.046? Not exactly because detection still radar. Better: ablate association terms only should reduce AMOTA and increase IDS. Verifiable by re-running code/metric. But we don't have code? It's plausible. Need "verifiable" via published metrics and dataset. Prediction: AMOTA <20.0; per-class pedestrian <0.346. 
2. Shuffle radar velocity/depth channels or randomize radar points within frustum -> cost noisy; prediction AMOTA drops and IDS increases; Truck/Bus/Trailer may not drop because already low/zero? Actually large objects radar association issue. Verify by ablation. 
3. Weather/adverse condition stratification: on fog/snow/rain subsets, camera-only baseline should degrade more than radar-fusion; CFTrack should retain higher recall; if not, weather robustness claim vetoed. Prediction: recall drop smaller for CFTrack than CenterTrack under fog/snow; if equal, veto. Need exact "verifiable" metric. 
Maybe 3 scenarios: class mismatch ∞ gate; radius r; weighting. But need predictions. Let's craft detailed.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need maybe "biomechanical" not in paper; state no biomechanical proof; only pedestrian category. Good.

Need "RETROCAUSAL_GENEALOGY" multi-week traps: maybe "multi-week" means traps that unfold over weeks. We can mention "multi-week trap 1: chasing AMOTA by adding modalities without ablating unit normalization; trap 2: mistaking per-class large-object failure for weather; trap 3: ignoring latency/clock drift; trap 4: using benchmark test set repeatedly." Need cite.

Need "THINK_TRACE" >=400 words. Need deep multi-hop derivation & gray-zone audit. We can write around 600-800 words. Need include derivation chain:
1. Inputs: current and previous image/radar/prev tracks.
2. Detection: CenterNet heatmap local maxima; CenterFusion frustum associates radar pillars to preliminary boxes; depth/velocity heatmaps fused; regression heads.
3. Displacement regression head trained L1; output \hat D.
4. Association: for each current detection a, compute p - \hat D_p; search prior detections within radius r; compute cost with class gate; match min cost; new track if none.
5. Metrics: AMOTA average recall-normalized MOTA; values.
6. Gray-zone: dimensional weights αβδ; no units; no normalization; class gate; radius; tie; radar association to large objects; occlusion; weather claim not stratified; previous frame dependence; latency; per-class zeros; paper says "by a factor of 4" but 0.200 vs 0.046 = 4.35, yes; "improving by about 15%" ambiguous: 20.0 - 4.6 = 15.4 percentage points; not 15% relative. Note.
7. Audit: source says "outperforms all vision-based 3D tracking methods" but table only compares some published works; no exhaustive. "only tracking algorithm based on radar and image information" at time. Need careful.

Need exact quotes. We can include quotes with [PAGE N]. Need not overquote. Need "verbatim quotes" maybe multiple.

Need no betting lines. Don't mention spreads etc.

Need XML only? User asks exact XML sections. We should output only XML tags and content, no markdown? Could include LaTeX. Fine. Need ensure no extra text outside. We can include equations with \(...\) or display. XML content can include < and >? LaTeX uses < maybe okay but XML tags? Need avoid raw < inside content except tags. Use \le or \leq instead of <. Use LaTeX with \in, etc. Avoid `<` characters in text because XML. Use `\lt`? Better use `\leq`, `\geq`, `\to`, `\infty`. Avoid "<" in equations. Use `\mathbb{R}`. Avoid ampersand? Use `\&`? In XML, ampersand must be escaped. Avoid "&" in text. Use "and". Need if using `\alpha` etc okay. Need no raw `<` in text. Need escape if necessary. Use "<=?" No. We'll avoid.

Need ensure tags are exact:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need maybe output all content within root? Not asked. Just sections. Could include no root. Fine.

Need word count. Let's draft around 2500 words. Need be concise but depth. Need not exceed too much. Desired oververbosity 5. But requirements >=1000 words. We'll aim ~2200 words.

Let's construct.

THINK_TRACE (>=400 words):
Write detailed. Include "multi-hop derivation: [PAGE 1] ... [PAGE 3] ... [PAGE 4] ... [PAGE 5]". Use quotes. We need exact quotes. Example: "The proposed greedy algorithm uses the depth, velocity and 2D displacement of the detected objects to associate them through time" [PAGE 1]. "The local maxima in the estimated heatmap \hat Y correspond to the centers of detected objects in the image" [PAGE 3]. "For every detected object at position p, we look for prior detections within a radius r from p −Dp" [PAGE 4]. "AMOTA score of 20.0%" [PAGE 5]. Need mention dimension audit. "The cost is a weighted sum ... α,β,δ ∈ R+ are tunable parameters" [PAGE 4]. This is dimensionally heterogeneous unless weights absorb units; source does not say. "No algebraic singularity except class gate; focal log singular at 0/1." Good.

SOURCE_OPERATORS_AND_EQUATIONS:
List with equations. Need formal LaTeX. Include units:
- Image tensor \(I^{(t)} \in \mathbb{R}^{W \times H \times 3}\) dimensionless pixel array; W,H pixels.
- Radar \(P_i=(x_i,y_i,z_i,v^i_x,v^i_y)\); x,y,z in meters; v in m/s. Actually paper doesn't specify units but radar coordinates likely m and m/s. State assumed SI from vehicle coordinate; source does not print units. Need "assumption".
- Heatmap \(\hat Y \in [0,1]^{W/R \times H/R \times C}\) dimensionless probability.
- Focal loss. Need exact. Use cases. If source omitted minus, maybe write:
\[
L_i = \frac{1}{N}\sum_{xyc}
\begin{cases}
(1-\hat Y_{xyc})^\alpha \log(\hat Y_{xyc}), & Y_{xyc}=1,\\
(1-Y_{xyc})^\beta(\hat Y_{xyc})^\alpha \log(1-\hat Y_{xyc}), & \text{otherwise},
\end{cases}
\]
as rendered [PAGE 3]; standard focal-loss minimization uses negative sign. Hmm if I include as rendered without minus, it's negative log? Actually log(\hat Y) is negative, so without minus it's negative loss, minimization would push? But paper likely had minus in original but text extraction dropped. We can say "the extracted text renders the cases without a leading minus; the standard focal-loss form is \(-\frac{1}{N}\sum...\)." But user wants exact source quotes. We can quote and then formal. Need maybe not overcomplicate. State "as printed [PAGE 3], the expression is ...; a leading minus is conventional and sign-critical." This is a gray-zone. Good.

- Track tuple \(b=(p,d,v,w,id)\); p∈R^2 (pixels? in problem formulation p∈R2 center location not explicitly pixels; later detection a p∈Z2 pixels). depth d∈R (m), v∈R2 (m/s), w∈[0,1], id integer. 
- Displacement \(\hat D^{(t)} \in \mathbb{R}^{W/R \times H/R \times 2}\), L1 loss, units pixels? Actually displacement of center on image, units pixels. 
- Cost:
\[
C_{t,t-1} =
\begin{cases}
\alpha L_{pixel}+\beta L_{depth}+\delta L_{velocity}, & c_t=c_{t-1},\\
+\infty, & c_t\ne c_{t-1},
\end{cases}
\]
\[
L_{pixel}=(x_t-x_{t-1})^2+(y_t-y_{t-1})^2,\quad
L_{depth}=(d_t-d_{t-1})^2,\quad
L_{velocity}=(v^x_t-v^x_{t-1})^2+(v^y_t-v^y_{t-1})^2.
\]
Units: \(L_{pixel}\) px^2, \(L_{depth}\) m^2, \(L_{velocity}\) (m/s)^2. α,β,δ must carry units \(1/px^2\), \(1/m^2\), \(1/(m/s)^2\) to make C dimensionless; paper only states \(\alpha,\beta,\delta\in\mathbb{R}^+\). This is a dimensional gray zone.
- Gating: search radius r from \(p-\hat D_p\); r in pixels; no match -> new track. Exact quote.
- MOTAR and AMOTA equations. Need use standard grouping. Define IDS_r, FP_r, FN_r counts dimensionless, P total objects, r recall. AMOTA average over n-1 thresholds. Units dimensionless. Quote.
- Runtime 35 ms per image = 28 fps; not equation? \(f=1/0.035 s \approx 28.6 s^{-1}\), but paper says 28 fps. This is not toy? It's real. Include units.

Breakdown regimes:
- class mismatch infinity exact.
- no search candidate within r.
- focal loss log singular at \(\hat Y=0\) with Y=1 and \(\hat Y=1\) with Y=0; implementation clamp.
- dimensional weights no normalization; if α,β,δ not calibrated, cost dominated by one term.
- radar association large objects: quote [PAGE 5].
- occlusion previous frame and radar; if radar missing, fallback visual; source doesn't quantify.
- W/R, H/R stride; local maxima; no subpixel? Maybe.

Need "SOURCE_OPERATORS_AND_EQUATIONS" not too long but detailed.

RETROCAUSAL_GENEALOGY:
Need historical lineage:
- CenterNet (objects as points) [PAGE 3 ref 30] -> CenterFusion [PAGE 3] -> CenterTrack [PAGE 2 ref 3] -> CFTrack. Tracking-by-detection vs joint. Online vs batch. AB3DMOT Kalman+Hungarian. DeepSORT. Argoverse map. Need cite pages.
- Retrocausal: CFTrack's 20.0 AMOTA is not a property of a single head; it is produced by lineage decisions: center heatmap localization, radar frustum fusion, displacement regression, greedy association with depth/velocity. Changing one upstream operator changes downstream association.
- Multi-week traps:
  * "AMOTA-only trap": optimizing 20.0 while per-class Truck=0.000, Bus=0.107, Trailer=0.075; large objects. [PAGE 5]
  * "modality-triumph trap": radar claim robust adverse weather [PAGE 1] but no weather-stratified evaluation; cannot infer.
  * "unit/weight trap": αβδ unspecified; repeated tuning over weeks can overfit val.
  * "benchmark leakage trap": test set comparisons; no exhaustive all methods.
  * "latency trap": 35ms but hardware specific; previous frame dependence; time sync.
Need mention "multi-week" explicitly.

RECURSIVE_THEORY_OF_MIND:
Need maybe "Crisis habit regression vs counter-trap vs clock." Explain:
- Source does not model other agents' beliefs/intentions; its recursive loop is only self-conditioning on previous detections and previous frame. So ToM is "object-level persistence model", not mental-state recursion.
- Crisis habit regression: under occlusion/overlap, tracker regresses to visual displacement prior (CenterTrack-like) when radar depth/velocity unavailable/unreliable. This is habit. Quote [PAGE 1] "occluded and overlapping objects" and [PAGE 4] previous radar improves occlusion.
- Counter-trap: dense radar returns from large objects create false associations; adding depth/velocity can be counterproductive; per-class large object underperformance [PAGE 5]. Also class gate infinity may discard correct re-ID across class? categories fixed.
- Clock: online frame clock, only current/previous; 35 ms; no future frames [PAGE 2 "does not require any knowledge from future frames"]. Time sync and latency. Recursive ToM must respect clock: no future knowledge, identity preserved only consecutive frames, if object leaves frame associations not re-established [PAGE 3? It says "without re-establishing associations if the object leaves the frame" [PAGE 3? Actually page 3 under IV: "We follow CenterTrack [3] and approach the tracking problem from a local perspective, where an object’s identity is preserved across consecutive frames without re-establishing associations if the object leaves the frame." [PAGE 3]. Good.
- Maybe "crisis habit regression" as "when occlusion crisis, tracker uses previous detections and radar; if radar fails, it falls back to displacement." Counter-trap: don't over-trust radar velocity in large-object multipath. Clock: 35 ms budget. Need keep source-grounded.

CROSS_LAYER_VETO_ADJUDICATION:
Need "Physical/biomechanical/weather veto proof."
- Physical: radar long range, adverse weather; radar gives velocity; camera occlusion; depth/velocity. But physical veto: if radar returns not associated due frustum and closest pillar only, multiple radar pillars inside frustum closest kept others discarded [PAGE 3]. This can veto depth/velocity for large objects. Also radar coordinate vehicle x forward y left z upward.
- Biomechanical: no biomechanical sensor or gait model; pedestrian class AMOTA 0.346 [PAGE 5]; cannot prove biomechanical tracking. Veto any claim of biomechanical intent.
- Weather: source asserts radars "very robust to adverse weather conditions such as fog and snow" [PAGE 1]. But no weather-stratified table; so weather robustness is a literature-level assertion, not proven by experiments. Veto strong weather claim. Need maybe "fog/snow" exact quote.
- Cross-layer veto: physical sensor model can veto association if radar pillars are sparse/misassociated; biomechanical layer absent; weather layer not evaluated. The only cross-layer proof is metric-level: AMOTA 0.200 and runtime 35ms [PAGE 5]. Good.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 scenarios with predictions:
1. Association ablation: keep detection, set β=δ=0 or replace cost with L_pixel only. Verifiable by rerun on nuScenes val/test with same detector. Prediction: AMOTA decreases from 0.200; IDS_r increases; pedestrian/occluded classes drop most; if no drop, claim that depth/velocity association matters is vetoed. Need cite cost [PAGE 4] and claim [PAGE 1]. 
2. Radar perturbation: shuffle radar velocity/depth channels or drop previous radar \(P^{(t-1)}\). Prediction: displacement error increases, AMOTA drops, especially occlusion; large object classes may remain low or not improve; if metrics unchanged, radar fusion contribution vetoed. Need cite previous radar [PAGE 4] and displacement [PAGE 4].
3. Weather/occlusion stratified test: evaluate on nuScenes subsets with fog/snow/rain/night or synthetic occlusion; compare CFTrack vs CenterTrack. Prediction: CFTrack recall advantage larger under occlusion/adverse weather; if equal or worse, weather/occlusion robustness claim vetoed. Need cite [PAGE 1] radar robust adverse weather and [PAGE 1] occluded/overlapping. Also runtime maybe not.
Need "verifiable RLVR veto scenarios" maybe formulate as reward: reward = +1 if metric difference exceeds threshold; -1 if not. Predictions explicit. Need no betting lines. Fine.

Need "ZERO BETTING LINES" – avoid any gambling language. We can say "no odds" not needed. Avoid "bet". Use "veto". Good.

Need ensure "ZERO TOY EQUATIONS" – only real equations from source and standard. Don't invent ratios like force/fatigue. We can mention no invented ratios. Good.

Need include "SI/information/probability units" in SOURCE. We can state units. Information/probability: heatmap probability dimensionless; AMOTA dimensionless; focal loss nats? Log base unspecified. If natural log, loss in nats. Source doesn't specify log base. We can say log base unspecified; if natural log, units nats; if base 2, bits. That's formal. Good.

Need "exact singularity/breakdown regimes" in SOURCE. Include.

Need page citations exact [PAGE N]. Use [PAGE 1], [PAGE 3], etc. Need not cite every sentence but enough.

Need be careful XML with quotes. Use straight quotes or curly? Fine. Ampersand avoid. Use "and" not &.

Need no raw less-than. In equations, use \(\mathbb{R}^{W \times H \times 3}\) no < . For intervals [0,1] okay. Use `\ne` not !=. Good. Avoid `&` in LaTeX cases? In LaTeX cases environment uses `&`, which is ampersand; XML would require `&amp;`. Better avoid cases with alignment &; use `\begin{cases} ... \end{cases}` but alignment needs `&`. Could escape as `&amp;`. Or avoid cases and write piecewise in text. But equations with `&` must be escaped. XML content can include `&amp;` and render? It will be parsed. To be safe, avoid `&` entirely. Use `\begin{array}{ll}` needs & too. We can write piecewise using `\left\{` and `\begin{array}{l}` no alignment? `\begin{array}{l} ... \\ ... \end{array}` no ampersand. Good. Or use `\begin{cases}` with `&` escaped. Let's avoid ampersand.

For LaTeX `Y_{xyc}=1` no issue. Use `\text{otherwise}`. We need cases:
\[
L_i=\frac{1}{N}\sum_{xyc}
\left\{
\begin{array}{l}
(1-\hat Y_{xyc})^\alpha \log(\hat Y_{xyc}), \quad Y_{xyc}=1,\\
(1-Y_{xyc})^\beta(\hat Y_{xyc})^\alpha \log(1-\hat Y_{xyc}), \quad \text{otherwise}.
\end{array}
\right.
\]
No ampersand. Good.

For cost piecewise:
\[
C_{t,t-1}=
\left\{
\begin{array}{l}
\alpha L_{\mathrm{pixel}}+\beta L_{\mathrm{depth}}+\delta L_{\mathrm{velocity}}, \quad c_t=c_{t-1},\\
+\infty, \quad c_t\ne c_{t-1}.
\end{array}
\right.
\]
Good.

Need maybe `\mathrm{ID}S_r`? Use `\mathrm{IDS}_r`. Fine.

Need word count. Let's draft. Need ensure XML tags not nested weird. We can include display equations. No markdown headings maybe okay. Use plain text in tags.

Let's start writing THINK_TRACE. Need at least 400 words. I'll write ~700. Need mention "multi-hop derivation" chain. Ensure no extra outside.

Potential issue: "DRIVE SOURCE" maybe user expects a "drive source" analysis not paper summary. We can call "source". Good.

Let's compose final. Need not mention "I". Use third person.

Need "verbatim quotes": Use exact quote fragments. Ensure quote text matches source. For page 1: "The proposed greedy algorithm uses the depth, velocity and 2D displacement of the detected objects to associate them through time." Exact. "Radars are capable of detecting objects at much longer range compared to LiDAR and cameras, while being very robust to adverse weather conditions such as fog and snow." Exact. "This makes our tracking algorithm very robust to occluded and overlapping objects" exact from abstract? It says "This makes our tracking algorithm very robust to occluded and overlapping objects, as the depth and velocity information can help the network in distinguishing them." Good.
Page 3: "The local maxima in the estimated heatmap ˆY correspond to the centers of detected objects in the image." Use \hat Y but quote as source. "A frustum is then formed around each detected object, and radar pillars inside the frustum are associated with that object. If there are multiple radar pillars inside the frustum, the closest one is kept and others are discarded." Exact. Good.
Page 4: "For every detected object at position p, we look for prior detections within a radius r from p −Dp." Exact (Dp maybe \hat D? Source says p −Dp). "α, β, δ ∈R+, are tunable parameters." Exact.
Page 5: "CFTrack significantly outperforms all the other methods in the Car, Pedestrian, Motorcycle and Bicycle categories, while AB3DMOT with the Megvii detector performs better in the Truck, Bus and Trailer categories." Exact. "Note that all categories where CFTrack is outperformed are large objects, namely Truck, Bus and Trailer." Exact. "One explanation could be the fact that it is more difficult for the underlying fusion algorithm to correctly associate many radar detections obtained from these large objects to their corresponding 3D bounding boxes, resulting in lower accuracy in estimated depth and velocity for these objects." Exact. Good.

Need "MOTAR" quote: "MOTAR = max(0, 1 −IDSr + FPr + FNr −(1 −r) ∗P r ∗P )" page 4. Good.

Need "online with runtime 35ms per image" quote page 1; page 5 "35ms per image (28 fps)". Good.

Need "source pages provided" cite.

Need "CROSS_LAYER_VETO_ADJUDICATION" mention "biomechanical" absent. Good.

Need "RETROCAUSAL_GENEALOGY" mention "multi-week traps" explicitly. Good.

Need "RECURSIVE_THEORY_OF_MIND" mention "crisis habit regression vs counter-trap vs clock" exactly. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 scenarios. Good.

Need avoid "spreads, totals, moneylines, odds" entirely. "weighted" okay. "cost" okay.

Need not mention "bet" anywhere. Avoid word "bet" even in "between"? "between" contains bet? It's fine? The invariant says never mention betting lines, not substring. But avoid gambling terms. "between" okay. But "bet" substring in "between" could trigger? Probably not. We can use "among" maybe. Avoid "betting". Fine.

Need maybe "AMOTA" no issue.

Let's write final in XML. Ensure all tags. Word count likely >1000.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a six-page paper on CFTrack, a radar-camera 3D multi-object tracking system. The multi-hop derivation begins at [PAGE 1], where the abstract states: “The proposed greedy algorithm uses the depth, velocity and 2D displacement of the detected objects to associate them through time.” That sentence is the hinge: the tracker is not merely a detector plus a nearest-neighbor matcher; it is a detector whose fused radar-camera features are used to estimate displacement, and an association rule that combines three heterogeneous signals. The next hop is [PAGE 3], where CenterFusion’s inputs are formalized as an image \(I \in \mathbb{R}^{W \times H \times 3}\) and radar detections \(P_i=(x_i,y_i,z_i,v^i_x,v^i_y)\), with vehicle coordinates “where x is forward, y is to the left and z is upward from the drivers point of view.” CenterFusion produces a center heatmap \(\hat Y \in [0,1]^{W/R \times H/R \times C}\), and [PAGE 3] says: “The local maxima in the estimated heatmap \(\hat Y\) correspond to the centers of detected objects in the image.” Radar pillars are formed into frusta around preliminary detections; [PAGE 3] states: “If there are multiple radar pillars inside the frustum, the closest one is kept and others are discarded.” This is a critical upstream operator because it determines which radar depth and velocity values reach the fusion features. If the closest pillar is not the object’s dominant return, the downstream depth and velocity estimates are corrupted before tracking begins.

The third hop is the displacement head at [PAGE 4]: CFTrack estimates “the 2D displacement of the detected objects between the current and previous frames, using the concatenated radar and image features.” The output is \(\hat D^{(t)} \in \mathbb{R}^{W/R \times H/R \times 2}\), trained with an L1 loss. The fourth hop is the association cost at [PAGE 4]. For detections \(a=(p,d,v,c)\), the cost is a class-gated weighted sum of pixel displacement squared, depth difference squared, and velocity difference squared. The paper states: “For every detected object at position p, we look for prior detections within a radius r from p −Dp.” If no unmatched prior detection lies in that radius, a new track is created. If candidates exist, the minimum-cost prior detection is matched. The fifth hop is the evaluation: [PAGE 5] reports “20.0% AMOTA” and “35ms per image (28 fps)” for the camera-plus-radar model, outperforming CenterTrack and AB3DMOT variants in the table.

The gray-zone audit is where the derivation becomes fragile. First, the cost is a sum of \(L_{\mathrm{pixel}}\) in squared pixels, \(L_{\mathrm{depth}}\) in squared metres, and \(L_{\mathrm{velocity}}\) in squared metres per second squared. The paper only says “\(\alpha,\beta,\delta \in \mathbb{R}^+\), are tunable parameters” [PAGE 4]. It does not state normalization, units, or calibration. Unless the weights absorb reciprocal units, the sum is dimensionally heterogeneous. This is not a toy ratio; it is a real engineering ambiguity that can make one term dominate. Second, the class gate is exact: if \(c_t \ne c_{t-1}\), the cost is \(+\infty\). That is a hard veto, not a soft penalty. Third, the search radius \(r\) is a hard gate; a correct prior detection just outside \(r\) is unreachable. Fourth, the focal loss at [PAGE 3] has logarithmic boundary singularities at \(\hat Y=0\) when \(Y=1\) and at \(\hat Y=1\) when \(Y=0\); practical implementations clamp, but the source does not specify the clamp. Fifth, the paper claims robustness to occlusion and adverse weather, but the tables are aggregate and per-class; no weather-stratified evaluation appears. Sixth, the per-class result at [PAGE 5] contains a revealing exception: “CFTrack significantly outperforms all the other methods in the Car, Pedestrian, Motorcycle and Bicycle categories, while AB3DMOT with the Megvii detector performs better in the Truck, Bus and Trailer categories.” The paper’s own explanation is that “it is more difficult for the underlying fusion algorithm to correctly associate many radar detections obtained from these large objects to their corresponding 3D bounding boxes, resulting in lower accuracy in estimated depth and velocity for these objects.” That is a direct gray-zone veto on any claim that radar depth and velocity are universally helpful. The tracking claim is therefore conditional: strong on the reported aggregate and on several small-object classes, weaker on large objects and unproven under weather stratification.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines the image input and radar input at [PAGE 3]: “CenterFusion takes an image \(I \in \mathbb{R}^{W \times H \times 3}\) and a set of radar detections \(P_i=(x_i,y_i,z_i,v^i_x,v^i_y)\).” The coordinates \((x_i,y_i,z_i)\) are positions in the vehicle coordinate system; the paper states “x is forward, y is to the left and z is upward from the drivers point of view” [PAGE 3]. The source does not print explicit units, but in SI usage these are metres and metres per second; that is an assumption, not a verbatim claim. The heatmap operator is \(\hat Y \in [0,1]^{W/R \times H/R \times C}\), where \(R\) is the down-sampling factor and \(C\) is the number of object categories; \(\hat Y\) is dimensionless probability. [PAGE 3] states that ground-truth peaks are Gaussian-shaped and that “The local maxima in the estimated heatmap \(\hat Y\) correspond to the centers of detected objects in the image.”

The focal-loss operator is rendered at [PAGE 3] as:
\[
L_i=\frac{1}{N}\sum_{xyc}
\left\{
\begin{array}{l}
(1-\hat Y_{xyc})^\alpha \log(\hat Y_{xyc}), \quad Y_{xyc}=1,\\
(1-Y_{xyc})^\beta(\hat Y_{xyc})^\alpha \log(1-\hat Y_{xyc}), \quad \text{otherwise}.
\end{array}
\right.
\]
The extracted text prints this without a leading minus sign; standard focal-loss minimization uses \(-\frac{1}{N}\sum\), so the sign is a source-rendering gray zone. The logarithm base is not stated. If natural log is used, the loss is in nats; if base 2, in bits; otherwise the unit is log-base dependent. The exact singularities are \(\log(0)\) when \(\hat Y=0\) with \(Y=1\), and \(\log(0)\) when \(\hat Y=1\) with \(Y=0\). Practical code must clamp \(\hat Y\) away from 0 and 1, but the paper does not specify the clamp.

The tracked object representation is \(b=(p,d,v,w,id)\) at [PAGE 3], with \(p \in \mathbb{R}^2\) as center location, \(d \in \mathbb{R}\) as depth, \(v \in \mathbb{R}^2\) as velocity, \(w \in [0,1]\) as detection confidence, and \(id\) as an integer identity. In the association section [PAGE 4], the detection representation is \(a=(p,d,v,c)\) with \(p \in \mathbb{Z}^2\) in pixels, \(d \in \mathbb{R}\) as depth, \(v \in \mathbb{R}^2\) as velocity, and \(c \in C\) as category. The displacement head is \(\hat D^{(t)} \in \mathbb{R}^{W/R \times H/R \times 2}\), trained by L1 loss [PAGE 4]. Its units are pixels if the center coordinates are pixel coordinates; the paper does not separately restate that unit.

The association cost at [PAGE 4] is:
\[
C_{t,t-1}=
\left\{
\begin{array}{l}
\alpha L_{\mathrm{pixel}}+\beta L_{\mathrm{depth}}+\delta L_{\mathrm{velocity}}, \quad c_t=c_{t-1},\\
+\infty, \quad c_t\ne c_{t-1},
\end{array}
\right.
\]
with
\[
L_{\mathrm{pixel}}=(x_t-x_{t-1})^2+(y_t-y_{t-1})^2,
\]
\[
L_{\mathrm{depth}}=(d_t-d_{t-1})^2,
\]
\[
L_{\mathrm{velocity}}=(v^x_t-v^x_{t-1})^2+(v^y_t-v^y_{t-1})^2.
\]
The units are: \(L_{\mathrm{pixel}}\) in \(\mathrm{pixel}^2\), \(L_{\mathrm{depth}}\) in \(\mathrm{m}^2\), and \(L_{\mathrm{velocity}}\) in \((\mathrm{m}/\mathrm{s})^2\). The source states only “\(\alpha, \beta, \delta \in \mathbb{R}^+\), are tunable parameters” [PAGE 4]. For \(C_{t,t-1}\) to be dimensionless, the weights must carry reciprocal units \(1/\mathrm{pixel}^2\), \(1/\mathrm{m}^2\), and \(1/(\mathrm{m}/\mathrm{s})^2\), or the features must be normalized. The source does not specify either. The exact singularity is the class-mismatch gate \(C_{t,t-1}=+\infty\) when \(c_t \ne c_{t-1}\). The exact gating breakdown is the search rule: “For every detected object at position p, we look for prior detections within a radius r from p −Dp” [PAGE 4]; if no unmatched prior detection lies in that radius, a new track is created. There is no division in the cost, so no finite-value singularity occurs there.

The evaluation equations are given at [PAGE 4]:
\[
\mathrm{MOTAR}_r=\max\left(0,\;1-\frac{\mathrm{IDS}_r+\mathrm{FP}_r+\mathrm{FN}_r-(1-r)P}{rP}\right),
\]
\[
\mathrm{AMOTA}=\frac{1}{n-1}\sum_{r\in\{\frac{1}{n-1},\frac{2}{n-1},\ldots,1\}}\mathrm{MOTAR}_r.
\]
Here \(r\) is the recall threshold, \(\mathrm{IDS}_r\) is the number of identity switches, \(\mathrm{FP}_r\) is false positives, \(\mathrm{FN}_r\) is false negatives, and \(P\) is the total number of annotated objects. All are dimensionless counts; AMOTA is dimensionless. The source’s printed MOTAR line is compressed, but the denominator grouping \(rP\) is the standard reading and matches the variables listed at [PAGE 4]. The reported aggregate at [PAGE 5] is \(\mathrm{AMOTA}=0.200\), \(\mathrm{AMOTP}=1.292\), \(\mathrm{MOTAR}=0.353\), \(\mathrm{MOTA}=0.151\), \(\mathrm{MOTP}=0.766\), and \(\mathrm{Recall}=0.420\). Runtime is “35ms per image (28 fps)” [PAGE 5], which is \(f=1/(0.035\,\mathrm{s})\approx 28.6\,\mathrm{s}^{-1}\), not exactly 28 fps because of rounding.

Breakdown regimes are therefore explicit: class mismatch gives \(+\infty\); no candidate within radius \(r\) forces a new track; unnormalized \(\alpha,\beta,\delta\) allow one squared term to dominate; focal-loss boundary values are logarithmic singularities unless clamped; and radar frustum association discards all but the closest pillar, which can corrupt depth and velocity for large objects. The paper itself exposes this last regime at [PAGE 5]: “it is more difficult for the underlying fusion algorithm to correctly associate many radar detections obtained from these large objects to their corresponding 3D bounding boxes, resulting in lower accuracy in estimated depth and velocity for these objects.”
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is visible in the references and text. [PAGE 3] grounds the detector in CenterNet: “CenterFusion first uses a center point detection method called CenterNet [30] to detect the centerpoint of objects by estimating a heatmap.” CenterFusion [7] supplies the radar-camera frustum fusion and velocity estimation; CenterTrack [3] supplies the local tracking perspective and greedy displacement association. [PAGE 1] says CFTrack is “based on CenterFusion” and uses “a simple greedy algorithm similar to CenterTrack.” The retrocausal genealogy is thus: CenterNet’s center-point representation makes object identity a point-localization problem; CenterFusion’s frustum association makes radar depth and velocity available as fused heatmap channels; CenterTrack’s displacement head makes consecutive-frame association a regression problem; CFTrack then adds depth and velocity to the cost. The final 20.0 AMOTA at [PAGE 5] is not caused by one operator alone but by this stacked lineage. Remove the center heatmap and the displacement head has no stable object anchor; remove the frustum association and the depth/velocity terms lose their radar source; remove the greedy class-gated cost and the fused features do not affect association.

The historical contrast is also explicit. [PAGE 2] separates tracking-by-detection from joint detection and tracking, and separates batch from online methods. CFTrack is online: [PAGE 2] states “Our proposed algorithm is an online method and does not require any knowledge from future frames.” AB3DMOT is described at [PAGE 2] as using “LiDAR point clouds for object detection and a combination of Kalman filter and the Hungarian algorithm for state estimation and data association.” CFTrack instead uses a learned displacement head and greedy cost. That contrast matters because it explains why the paper’s comparison to AB3DMOT is not a pure sensor comparison: it is also a comparison of association architectures.

Multi-week traps are numerous. The first is the AMOTA-only trap. [PAGE 5] reports 20.0 AMOTA, but the per-class table shows Truck \(0.000\), Bus \(0.107\), and Trailer \(0.075\) for CFTrack, while AB3DMOT with Megvii is better on those large classes. A multi-week optimization that chases aggregate AMOTA can silently accept large-object regression. The second is the modality-triumph trap. [PAGE 1] says radars are “very robust to adverse weather conditions such as fog and snow,” but the experiments do not present weather-stratified results. A multi-week project can mistake a literature-level radar property for a measured CFTrack property. The third is the unit/weight trap. The cost’s \(\alpha,\beta,\delta\) are tunable but unit-unqualified [PAGE 4]; repeated tuning can overfit validation without learning a physically calibrated cost. The fourth is the benchmark-scope trap. [PAGE 5] compares to published works including CenterTrack and AB3DMOT variants, but “outperforms all vision-based 3D tracking methods” is a claim about the benchmark table, not an exhaustive proof over all possible methods. The fifth is the latency trap. “35ms per image (28 fps)” [PAGE 5] is hardware-specific; the paper reports training on Quadro P5000 GPUs and runtime on a TITAN X GPU [PAGE 5]. A multi-week deployment that ignores hardware, sensor synchronization, and calibration can lose the claimed real-time behavior. The sixth is the local-identity trap. [PAGE 3] states identity is preserved “across consecutive frames without re-establishing associations if the object leaves the frame.” Long occlusions or frame drops therefore create identity-loss regimes that aggregate AMOTA can hide.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The source does not model beliefs, intentions, or recursive mental states. Its “theory of mind” is minimal and object-level: it models object persistence, displacement, depth, velocity, and category across consecutive frames. The recursive loop is self-conditioning on the previous frame and previous detections, not on another agent’s model of the tracker. [PAGE 3] states the network takes “the current and previous image frames,” “the current and previous radar detections,” and “the tracked objects from the previous frame.” [PAGE 4] adds that previous detections are represented as “a single channel heatmap using a 2D Gaussian kernel.” That is a recursive temporal prior, but it is not social cognition.

Crisis habit regression appears when occlusion or overlap defeats the current visual evidence. The abstract’s claim is that depth and velocity “can help the network in distinguishing” occluded and overlapping objects [PAGE 1]. If radar depth or velocity is missing or misassociated, the tracker regresses toward the CenterTrack-like habit: use 2D displacement and pixel proximity. [PAGE 4] says previous radar “further improves the ability of network to detect objects even if the visual evidence is not present due to occlusion.” That is the intended counter-habit. The failure mode is that the same prior can become a habit trap: if the previous detection is wrong, the Gaussian previous-detection heatmap and the displacement head can propagate the error forward. The source does not quantify this regression, so it is a gray-zone risk rather than a measured result.

The counter-trap is over-trusting radar depth and velocity. [PAGE 5] reports that CFTrack is outperformed on “Truck, Bus and Trailer,” and the paper’s explanation is that “it is more difficult for the underlying fusion algorithm to correctly associate many radar detections obtained from these large objects.” In a recursive tracking loop, more radar returns can create more candidate pillars, but the frustum rule keeps only the closest and discards others [PAGE 3]. The counter-trap is therefore not “add more radar”; it is “add radar with correct frustum association and calibrated depth/velocity weighting.” The class gate \(C_{t,t-1}=+\infty\) for \(c_t\ne c_{t-1}\) [PAGE 4] is another counter-trap: it prevents cross-class identity switches, but it also prevents recovery if the detector’s class flips under occlusion. The tracker’s recursive model cannot reason about why the class flipped; it only applies the hard veto.

The clock is the online constraint. [PAGE 2] states the method “does not require any knowledge from future frames.” [PAGE 3] states identity is preserved “across consecutive frames without re-establishing associations if the object leaves the frame.” [PAGE 5] reports 35 ms per image. The clock therefore forbids batch-level global optimization and forbids re-identification after long absences. A recursive theory-of-mind for this system must respect that clock: the tracker can only use current and previous inputs, and its “memory” is a one-frame prior plus track IDs. When the clock slips, or when frames are dropped, the displacement and velocity priors become stale. The paper does not report latency under load, sensor time offset, or frame-drop stress, so the clock layer is a deployment veto: the 35 ms claim is necessary but not sufficient for real-time recursive tracking.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical-layer veto: radar supplies range and velocity, while camera supplies dense semantics. [PAGE 1] states radars are “capable of detecting objects at much longer range compared to LiDAR and cameras, while being very robust to adverse weather conditions such as fog and snow.” [PAGE 1] also states radars “provide accurate velocity information for every detected object.” These are physical advantages, but the paper’s own fusion rule creates a physical veto: [PAGE 3] says “If there are multiple radar pillars inside the frustum, the closest one is kept and others are discarded.” For large objects such as trucks, buses, and trailers, the closest pillar may not represent the object center or its dominant motion. [PAGE 5] confirms the consequence: these are exactly the categories where CFTrack is outperformed. Physical radar presence is therefore not enough; frustum-pillar selection can veto the depth and velocity benefit.

Biomechanical-layer veto: the source contains no biomechanical sensor, gait model, or pedestrian dynamics model. The only pedestrian evidence is the per-class AMOTA at [PAGE 5]: Pedestrian \(0.346\) for CFTrack. That is a tracking metric, not a biomechanical proof. Any claim about pedestrian intent, gait phase, or musculoskeletal state is outside the source and must be vetoed. The tracker models a point, depth, velocity, and category; it does not model joints, forces, fatigue, or body mechanics.

Weather-layer veto: [PAGE 1] asserts radar robustness to “fog and snow,” but the experiments at [PAGE 5] do not stratify by weather. The reported metrics are aggregate nuScenes test-set results. Therefore the weather claim is inherited from radar literature, not demonstrated for CFTrack’s full stack. A weather veto should be applied to any strong claim that CFTrack is proven robust in fog or snow. The correct statement is narrower: the source asserts radar’s physical robustness and reports aggregate benchmark performance; it does not report a fog/snow ablation. The same logic applies to occlusion: [PAGE 1] claims robustness to “occluded and overlapping objects,” and [PAGE 4] says previous radar helps when “visual evidence is not present due to occlusion,” but the tables do not isolate occlusion levels. The occlusion claim is mechanistically plausible, not experimentally stratified.

The cross-layer adjudication is therefore: physical radar range and velocity are real operators; biomechanical inference is absent; weather robustness is asserted but not measured; and the fusion’s closest-pillar rule can invert the physical benefit for large objects. The only cross-layer proof offered by the source is metric-level and conditional: 20.0 AMOTA and 35 ms per image on nuScenes [PAGE 5], with per-class exceptions on Truck, Bus, and Trailer.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR here means reinforcement-learning with verifiable rewards: a counterfactual is accepted only if a rerun on the same data and detector produces a verifiable metric change. Three veto scenarios follow.

Scenario 1: Association-term ablation. Keep the CFTrack detector and displacement head fixed, but replace the cost at [PAGE 4] with \(C_{t,t-1}=L_{\mathrm{pixel}}\) only, equivalent to setting \(\beta=\delta=0\). Verifiable prediction: AMOTA should fall below the reported \(0.200\), and identity switches \(\mathrm{IDS}_r\) should rise, especially for Pedestrian and occluded/overlapping cases. If AMOTA and IDS are unchanged, the paper’s claim that depth and velocity association improve tracking would be vetoed. The source supports the prediction mechanistically: [PAGE 1] says the greedy algorithm uses “depth, velocity and 2D displacement,” and [PAGE 4] defines all three terms. This is a clean counterfactual because it changes only the association cost, not the detector.

Scenario 2: Radar-prior perturbation. Keep the architecture but shuffle radar velocity and depth channels within each frame, or remove the previous radar detections \(P^{(t-1)}\). Verifiable prediction: displacement error should increase, AMOTA should drop from \(0.200\), and occlusion-sensitive classes should degrade most. The source states at [PAGE 4] that previous radar “further improves the ability of network to detect objects even if the visual evidence is not present due to occlusion,” and that the displacement head uses “concatenated radar and image features.” If shuffled radar produces no measurable drop, the claimed radar contribution to displacement and occlusion handling is vetoed. A secondary prediction is that large-object classes may not improve even with radar, because [PAGE 5] already identifies large-object radar association as the weak regime.

Scenario 3: Weather and occlusion stratification. Evaluate CFTrack and a camera-only CenterTrack-style baseline on identical nuScenes subsets stratified by fog, rain, snow, night, and synthetic occlusion. Verifiable prediction: CFTrack’s recall and AMOTA advantage should be larger in fog/snow/occlusion subsets than in clear conditions, because [PAGE 1] claims radar robustness to “fog and snow” and robustness to “occluded and overlapping objects.” If the advantage is equal or reversed under fog/snow/occlusion, the weather and occlusion robustness claims are vetoed as unproven for this system. This scenario is verifiable because the metric definitions at [PAGE 4] are fixed, and the per-class table at [PAGE 5] gives a baseline for expected heterogeneity. A final guard: any RLVR reward must not optimize AMOTA alone, because the per-class Truck \(0.000\), Bus \(0.107\), and Trailer \(0.075\) values at [PAGE 5] show that aggregate reward can hide large-object failure.
</RLVR_COUNTERFACTUAL_VETOES>