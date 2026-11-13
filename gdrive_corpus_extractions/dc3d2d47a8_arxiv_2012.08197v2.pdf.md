---
source: "arxiv_2012.08197v2.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 12
model: baidu/ernie-5.5-flash-preview:free
words: 8333
---

<NATIVE_REASONING>
We need answer user request. Need produce final with specified XML sections, >=1000 words, six exact sections: THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. Need obey strict invariants: no betting lines, no spreads/totals/moneylines/odds. No toy equations. Formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes. When source pages provided, cite exact [PAGE N] markers and verbatim quotes.

We need analyze user: They provided a PDF source of paper "Seeing Behind Objects for 3D Multi-Object Tracking in RGB-D Sequences". The task? They only gave "DRIVE SOURCE ... PAGES ... SOURCE TEXT". Likely want output reasoning sections. We need construct a rigorous analysis around the source, maybe infer tracking performance? But no explicit question besides system-style prompt. We need generate the required sections. Need avoid betting lines. Since this is computer vision, no betting anyway. Need probably provide formal equations from source: detection losses, Procrustes, MOTA, assignment IoU thresholds. Need mention units: voxels, meters? The paper uses voxel units, cm thresholds. Need exact page citations and verbatim quotes. Need ensure >=1000 words across sections. Need include exact XML tags. Need no invented fake ratios. Need maybe discuss singularities: Procrustes when covariance rank deficient, symmetry ambiguities, small point sets, TSDF empty, IoU zero, Hungarian assignment ambiguous, completion mask all zero/one, BCE numerical. Need cite pages.

Need maybe incorporate "GSE + GSI Frontier Reasoning Foundry" but no betting. Need not mention odds/spreads. Use formal equations with units. Need be careful not to include "totals" as betting? Avoid word totals maybe? The invariant says never mention spreads, totals, moneylines, or odds. We can mention total? It says never mention totals? It says "spreads, totals, moneylines, or odds." We should avoid the exact word "totals" maybe. Use "aggregate" instead. But source includes "total"? We can avoid. Also no "odds". Fine.

Need ensure all citations exact [PAGE N]. Verbatim quotes maybe enough. Need cite exact page markers. Need not quote entire long. Need formal LaTeX. Need include assumptions and breakdown regimes.

Need produce at least 1000 words. Need count roughly. Let's plan.

Sections:
<THINK_TRACE> deep multi-hop derivation & gray-zone audit >=400 words. Need include derivation of how completion helps tracking: observed correspondences insufficient under occlusion; completion adds predicted occupancy mask m_k and NOCS c_k; pose via Procrustes; tracklet association via canonical IoU; MOTA equation; thresholds. Gray-zone: completion error can create false correspondences; symmetry minima; matching threshold 0.3; running average 4:1; detection errors. Need >400 words. Use citations.

<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown. Include equations: BCE, smooth-L1 center/extents, CE, l1 correspondence, Procrustes objective, SVD solution, MOTA, IoU association, running average. Units: voxel units, meters/cm. Assumptions. Singularity/breakdown: covariance rank <3, degenerate coplanar/linear points, det negative, scale zero, empty TSDF, all zero mask, IoU undefined when union zero, assignment ties, threshold 25cm, matching 0.3. Need exact quotes: "optimize for the object rotation and scale under the correspondences using a differentiable Procrustes analysis" [PAGE 4]. "A match is considered positive if its ℓ2 distance to ground truth center is less than 25cm." [PAGE 5]. "We reject any matches with 3D IoU below 0.3" [PAGE 4]. etc.

<RETROCAUSAL_GENEALOGY> historical/scientific lineage and multi-week traps. Discuss Kinectfusion TSDF [PAGE 1? references page 9? But cite text pages maybe], RevealNet [PAGE 2], Co-Fusion, MID-Fusion, MaskFusion [PAGE 2], NOCS [PAGE 4], Umeyama Procrustes [PAGE 4], Hungarian [PAGE 4], MOTA [PAGE 5]. Multi-week traps: relying only on observed geometry, surfel drift, octree occlusion, detection failures, completion hallucination.

<RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock. Need maybe model adversary? Crisis habit regression: method assumes objects rigid and parallel to ground [PAGE 5], real dynamic sequences no GT [PAGE 8]. Counter-trap: completion overfits synthetic categories; real ScanNet fine-tune. Clock: training schedule 100K +250K, 72 hours [PAGE 5], frame-by-frame greedy tracklets then global reassociation [PAGE 4]. Need recursive: how method anticipates occlusion, how evaluator can trick.

<CROSS_LAYER_VETO_ADJUDICATION> physical/biomechanical/weather veto proof. For RGB-D: depth sensor noise, motion blur, IR interference, lighting, transparent/specular surfaces, occlusion. Veto proof: if depth missing or TSDF empty, detection/completion cannot be supported; if object non-rigid or articulated, rigidity assumption fails; if symmetry ambiguous, rotation not identifiable; if motion > correspondence overlap, observed correspondences insufficient, but completion may help only if learned prior matches. Use formal: Fisher information of correspondences? Could include probability. Need avoid toy equations. Formal: observation model D(x) = ... with noise; detection if objectness posterior > threshold; pose variance lower bound from Hessian J^T J. Breakdown when rank deficient. Need cite? Source doesn't provide sensor noise, but can state assumptions and cite paper's TSDF representation [PAGE 2], dynamic sequences [PAGE 8]. Need exact quotes? Maybe "Each RGB-D frame ... represented by a sparse grid Si ... TSDF Di" [PAGE 2]. "objects moving over time" [PAGE 2]. We can state physical veto based on source's assumptions.

<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions. Need maybe RLVR? Could mean reinforcement learning verifier? Need produce 3 counterfactual veto scenarios and predictions. Must be verifiable. E.g. 1) Completion mask empty due to cropped TSDF outside sensor volume -> no pose, IoU zero, tracking break. Prediction: track ID switch after occlusion beyond depth frustum. 2) Symmetric object (chair/table) with ambiguous rotation -> Procrustes multiple minima; if symmetry not provided at test, rotation error > threshold; MOTA drop if translation okay but identity/rotation fails? MOTA only center distance 25cm, so rotation may not affect MOTA if center correct. Need predict pose error but MOTA maybe stable. 3) Fast camera/object motion leaves only partial observed geometry and completion prior mis-hallucinates backside -> canonical IoU low, match below 0.3, track split. Need predictions: ablation: no completion lowers MOTA by ~6.7% mean on DYNSYNTH [PAGE 8], so veto scenario where completion prior invalid should reduce performance to no-completion level. Need formal? Could include probability bounds.

Need ensure no betting lines. Avoid terms "spread", "total", "odds". Maybe avoid word "totals" entirely. Use "mean MOTA". Source has "total"? Not needed.

Need cite exact [PAGE N] and verbatim quotes. Need use [PAGE 1] etc. Need maybe quote: "we observe that having the complete geometry of objects aids in their tracking" [PAGE 1]. "By hallucinating unseen regions of objects" [PAGE 1]. "We employ the Hungarian algorithm [18] to find the optimal assignment of proposals to tracklets, and reject any matches with 3D IoU below 0.3." [PAGE 4]. "A match is considered positive if its ℓ2 distance to ground truth center is less than 25cm." [PAGE 5]. "We focus on detecting and tracking objects of 10 class categories..." [PAGE 5]. Need exact quotes maybe with minor escaping. Need ensure page markers. Good.

Need maybe mention "MOTA = 1 - (sum m_t + fp_t + mm_t)/(sum g_t)" [PAGE 5]. Need formal LaTeX.

Need maybe include "SI/information/probability units". The paper uses voxel units, centimeters. We can assign: C(v), D(v) in voxel units; after scaling maybe meters? The paper doesn't specify voxel physical size. Need state: if voxel pitch Δx in m, lengths in m = n_v Δx. Probability losses dimensionless; BCE in nats if natural log or bits if log2; cross-entropy in nats. MOTA dimensionless ratio; translation error in cm/m. Need no toy equations.

Need exact section names. Ensure final only those sections? Probably yes. Could include XML sections only. Need >=1,000 words. Let's draft with enough depth. Need no Markdown? Fine.

Let's compose each section lengthy.

Important: STRICT INVARIANT 2: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We must include citations for claims from source. Need not cite every sentence but enough. Need formal LaTeX equations. Need state assumptions and exact singularity/breakdown regimes.

Potential issue: "ZERO BETTING LINES" no spreads/totals/moneylines/odds. Avoid "total" maybe. In MOTA equation, "sum" okay. Avoid "odds". Avoid "spread". Could use "distribution" but not betting.

Need maybe not mention "Toy equations". We'll present formal equations from paper. Avoid invented Force/Fatigue.

Need maybe include "RLVR" but not defined. Could interpret as reinforcement learning verifier or recursive logic verification. Need provide 3 verifiable scenarios. Fine.

Let's make word count. THINK_TRACE maybe 600 words. SOURCE_OPERATORS maybe 700. Others 200-300 each. Total >1000. Need not too huge but okay.

Let's draft carefully.

THINK_TRACE:
- Multi-hop: RGB-D -> TSDF -> sparse features -> detection -> crop -> completion -> canonical coordinates -> Procrustes -> tracking association.
- Derivation: observed geometry O_t subset of complete geometry G_t. Correspondence set under observed may shrink when occlusion/view change. Complete geometry predicted C_hat_t provides superset. Association uses canonical mask IoU. Probability of persistent match increases with intersection volume relative union. But errors in completion add false positives.
- Gray-zone: if completion hallucination wrong, can associate different objects; if symmetry, rotation ambiguous; if threshold 0.3; if center match <25cm. Need mention detection mAP and completion mAP low for bookshelf/cabinet [PAGE 11]. Cite Table 4? "bookshelf 12.5" etc. We can cite [PAGE 11]. Need verbatim? Could quote Table values? "bookshelf 12.5" etc. Maybe exact quote not easy. But we can say Table 4 lists bookshelf mAP as 12.5 [PAGE 11]. Need not verbatim? Requirement says when source pages provided, cite exact markers and verbatim quotes. For each claim maybe include quote. We can include quotes from page 11? "Table 4. 3D Detection results on DYNSYNTH and ScanNet with Scan2CAD targets at mAP@0.5." [PAGE 11]. Good.
- Need 400 words. Let's make ~650.

SOURCE_OPERATORS_AND_EQUATIONS:
- Input representation quote: "Each RGB-D frame of the sequence is represented by a sparse grid Si of surface voxels and a dense truncated signed distance field (TSDF) Di." [PAGE 2]. Units: Si voxel indices; Di signed distance in meters if depth in m and voxel scale Δx. Need define.
- Detection equations: Lo, Lc, Ld, Ls as given. Use LaTeX. Units: O(v) [0,1], C(v), D(v) voxel units; BCE in nats/bits; smooth-L1 dimensionless if normalized or voxel units; with weighting 0.1 [PAGE 5]. Need quote: "We weight the object center and extent loss, Lc and Ld by 0.1, as they are evaluated in voxel units with have larger absolute value." [PAGE 5] (has grammar). Good.
- Clustering: mean-shift 20 steps, 8 voxel radius, clusters <50 filtered [PAGE 4]. Quote maybe.
- Completion: binary mask m_k, BCE with target occupancy grid. Quote: "predict the complete object geometry mk as a binary mask trained by binary cross entropy with the target occupancy grid." [PAGE 4]. Probability in [0,1], BCE nats.
- Correspondences: c_k grid of 3D coordinates in canonical space; l1 loss where target geometry exists [PAGE 4]. Units canonical units maybe normalized coordinates; if physical, meters.
- Pose: equations 1 and 2. Need include. Quote: "optimize for the object rotation and scale under the correspondences using a differentiable Procrustes analysis." [PAGE 4]. Need define Po, Pn in R^{3×N}; µ, σ^2; SVD. Assumptions: correspondences known, rigid transform plus scale, no reflection, nonzero variance σ_n, full rank covariance. Breakdown: rank deficient covariance (collinear/coplanar points), σ_n=0, det(UV^T) handling reflection, symmetry causing multiple minima. Use S=diag(1,1,det(UV^T)).
- Tracking association: Hungarian, bounding box 3D IoU threshold 0.3; canonical mask IoU threshold 0.3; running average 4:1 [PAGE 4]. Define IoU = V_intersection/V_union. Breakdown when V_union=0; threshold.
- MOTA: equation; match if ℓ2 center <25cm [PAGE 5]. Units: dimensionless; errors counts. Breakdown: if gt count zero? undefined; if all misses etc.
- Evaluation: detection mAP@0.5 [PAGE 11], completion mAP@0.25 [PAGE 11].

RETROCAUSAL_GENEALOGY:
- Lineage: static reconstruction (KinectFusion, VoxelHashing, BundleFusion) [PAGE 1? Actually references pages 1,2,9], object SLAM, Co-Fusion/MID-Fusion/MaskFusion [PAGE 2], RevealNet seeing behind [PAGE 2], NOCS canonical space [PAGE 4], Umeyama Procrustes [PAGE 4], Hungarian [PAGE 4], CLEAR MOT [PAGE 5]. Need cite quotes: "Hou et al. [15] propose to jointly detect objects as well as infer their complete geometry beyond the observed geometry" [PAGE 2]. "Co-Fusion [24], MID-Fusion [33], and MaskFusion [25] demonstrated dense object tracking and reconstruction" [PAGE 2]. "similar to the normalized object coordinate space of [31]" [PAGE 4]. "According to [29]" [PAGE 4]. "We employ the Hungarian algorithm [18]" [PAGE 4]. "adopt the Multiple Object Tracking Accuracy metric [2]" [PAGE 5].
- Multi-week traps: optimizing only IoU without completion; completion hallucination bias; evaluating MOTA only center threshold hides rotation errors; synthetic train/real fine-tune domain shift; threshold 0.3 brittle; 4:1 running average lag.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: system trained on dynamic synthetic and ScanNet static; expects rigid objects moving parallel to ground. Quote: "Each sequence contains camera trajectories and an object moving parallel to the ground" [PAGE 5]. In real captured sequences no GT, fine-tune [PAGE 8]. If crisis (fast motion, occlusion), habit: fall back to observed geometry? Ablation shows no completion worse. Counter-trap: evaluator can exploit symmetry or low completion mAP categories. Clock: training schedule and runtime? Training 72 hours [PAGE 5]; tracking greedy sequential then global reassociation [PAGE 4]. Need recursive prediction: if adversary hides object longer than tracklet memory? The canonical reconstructions updated running average; if missing many frames, stale canonical geometry may misassociate.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical veto: RGB-D depth has missing/noise; TSDF only observed; completion only prior, cannot guarantee unobserved true geometry. Quote: "we crop the TSDF volume using the respective bounding box" [PAGE 2]; "hallucinating unseen regions" [PAGE 1]. Formal observation model: depth z_t(u) = z_true + ε, ε ~ N(0, σ_z^2) if valid; invalid with probability p_missing. TSDF update. Detection requires objectness. Pose Fisher information: J = ∂r/∂ξ, covariance ≈ σ^2 (J^T J)^{-1}; rank deficiency veto if λ_min(J^T J) ≈ 0. Biomechanical? For furniture rigid assumption; non-rigid/deformable object violates. Weather/IR: sunlight IR interference for Structure Sensor? Source captured with Structure Sensor mounted to iPad [PAGE 8]. We can state veto if IR corrupted. Need no fake equation? Formal enough. Need cite physical? Source doesn't discuss weather, but can say beyond source's assumed RGB-D capture. Need maybe not overstate.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 scenarios + predictions. Formal verifiable:
1. Null completion veto: object cropped TSDF empty or completion mask predicted empty. Equation: if sum m_k = 0 or V_union=0, canonical IoU undefined/0; no match; MOTA loses target. Prediction: in ablated no-completion or low completion mAP classes (bookshelf/cabinet), MOTA collapses; Table shows completion mAP low 12.7, 11.4 [PAGE 11] and Ours mean MOTA 42.3 vs no compl 35.6 [PAGE 5]. Actually "Ours" 42.3, "Ours (no compl.)" 35.6. Good. Need quote "Utilizing object completion with canonical correspondences matching further improves the tracking performance by 6.7% mean MOTA" [PAGE 8]. Wait source says 6.7? It says "further improves ... by 6.7% mean MOTA and achieves best results (42.3% mean MOTA)." Abstract says 6.5 improvement. We can cite. Prediction: if completion prior fails, performance should fall to no-completion.
2. Symmetry ambiguity veto: object symmetric, canonical correspondences map multiple rotations. Procrustes objective has multiple minima; rotation error minimum chosen. If translation correct, MOTA match under 25cm may pass, but pose metric degrades. Prediction: med rot error increases while MOTA may not; test with symmetric categories (table/chair) vs asymmetric. Source says "objects possessing symmetry can result in ambiguous target rotations" [PAGE 4]. Need verify. 
3. Occlusion/view-change prior mismatch veto: if object appears from novel view not in training, completion hallucination wrong, canonical reconstruction IoU below 0.3. Prediction: Hungarian rejects match, creates new tracklet, identity switch; MOTA decreases; can be measured by increasing camera angular displacement until association fails. Source: "reject any matches with 3D IoU below 0.3" [PAGE 4], "matching objects based on their canonical correspondences ... higher matching accuracy" [PAGE 4].

Need maybe include probability equations: P_match = f(IoU). Could formalize threshold: match if IoU >= τ=0.3; if completion error ε_c changes predicted mask, ΔIoU. But avoid toy. Could use formal set: A = predicted canonical occupied set, B = track canonical set; IoU = |A∩B|/|A∪B|. If false positive volume F, true positive T, miss M, IoU=(T)/(T+M+F). Match veto if T/(T+M+F)<0.3. That's formal, not toy. Good.

Need final word count. Let's draft. Need ensure XML tags exactly. Maybe no extra text outside. Use LaTeX within plain text. Need ensure no markdown? Fine.

Potential issue: ">= 1,000-WORD DEPTH across these exact XML sections" means total across sections. We'll ensure >1000. Let's estimate: THINK_TRACE ~650, SOURCE ~900, others ~250 each = 2300. Good.

Need no prohibited words. Search mentally: "total" maybe in "total"? Avoid. "spread" avoid. "odds" avoid. "moneyline" avoid. "totals" avoid. "aggregate" okay. In equations maybe "sum" okay. Avoid "total loss". Use "objective".

Need be careful with phrase "loss terms" okay. "BCE" includes "entropy". Fine.

Let's write final. Ensure citations exact [PAGE N]. Need verbatim quotes with quotation marks. Could include [PAGE 5] quote. Need not quote every claim but enough. Need maybe source page numbers are 1-12. Good.

Let's draft final in detail.

Check equations:
L_o = BCE(O, O_t) etc. Use \begin{aligned}. Good.
Smooth L1 definitions. For center/extents, paper uses absolute voxel coordinate errors? It says 1/2(C-Ct)^2 if |...|<=0.5, else |...|-1/2. But no delta? We can state as source. Units: if C in voxels, loss in voxel^2 for quadratic region and voxel for linear; weighted by 0.1 to manage scale [PAGE 5]. Good.
Completion BCE: L_m = - E_{x}[m_t(x) log m_hat(x) + (1-m_t) log(1-m_hat(x))], units nats if natural log. Source says trained by binary cross entropy [PAGE 4]. Good.
Correspondence L_c = ||c_k - c_t||_1 over target geometry [PAGE 4]. Units canonical coordinates.
Pose: objective: min_{c,R,t} ||P_o - (c R P_n + t)||_F^2? Source equation uses norm unspecified. We can state Frobenius. SVD of cross-covariance H = (P_o-μ_o)(P_n-μ_n)^T = U D V^T. S = diag(1,1,det(UV^T)). c* = tr(DS)/σ_n^2? Source says σn variance? It says variances σ_i, c* = 1/σ_n tr(DS). If σ_n is variance? They say variances σ_i of Pi, then c*=1/σ_n tr(DS). Actually Umeyama uses σ_p^2. We can preserve. Need note if σ_n=0 singular.
Tracking: running average with 4:1 weighting: C_t = (4 C_{t-1} + c_t)/5? Source: "use a 4:1 weighting for the running mean" [PAGE 4]. We can formalize as \bar{C}_t = (4 \bar{C}_{t-1} + C_t^{new})/5 if new detection weight 1. Assumption. But if no new? Fine.
MOTA: MOTA = 1 - (Σ m_t + fp_t + mm_t)/(Σ g_t). Units dimensionless. Match if center ℓ2 <0.25 m. Good.
Detection mAP@0.5, completion mAP@0.25. Good.

Need maybe mention "SI units": convert voxel units to meters: if voxel pitch δ (m voxel^{-1}), length L = n δ. Depth sensor depth z in m. Translation error in cm converted to m: 25 cm = 0.25 m. Completion mask probabilities dimensionless. Information units: BCE/CE in nats if natural log, bits if log2; paper doesn't specify log base. Good.

Breakdown regimes:
- Detection: objectness threshold? Source not specify threshold, but positive objectness for mean-shift. If no positive voxels, no proposal. If cluster <50 filtered [PAGE 4].
- Completion: if crop TSDF lacks surface, f'_k absent, output may be uncalibrated; if mask collapses to 0 or 1, BCE gradient vanishes? BCE with saturated logits gradient small. Good.
- Correspondence: l1 evaluated only where target geometry exists; at unobserved regions no supervision, error unconstrained.
- Pose: rank deficiency: covariance rank <3; if points collinear/coplanar, rotation not fully observable; if symmetry, multiple rotations; if scale c*=0 or negative? c constrained R+ but SVD may produce small scale.
- Association: IoU undefined if union zero; threshold 0.3; if canonical reconstructions stale.
- MOTA: if gt count zero undefined; if all objects missed MOTA negative? Could be negative if FP > gt? MOTA can be negative. Good.

Need final answer only XML sections. Ensure no analysis outside. Let's write.

Double-check prohibited: "totals" not used. "spread" not. "odds" not. "moneyline" not. "betting" not. Good.

Potential issue: "RECURSIVE_THEORY_OF_MIND" maybe need "Crisis habit regression vs counter-trap vs clock". Include explicitly.

Potential issue: "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need proof style. We'll include lemma-like.

Potential issue: "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions. Include numbered list.

Need maybe not mention "RLVR" if unknown? But section required. We'll use.

Let's compose final. Ensure word count. Use long paragraphs. Need exact XML closing tags. Final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central reasoning chain is a multi-hop correction of a standard dynamic-object tracking pipeline. A conventional RGB-D tracker first detects an object, then estimates correspondences only from the currently observed surface. The paper states this limitation directly: prior methods “only consider the observed geometry of the objects, and so tracking objects under faster object or camera motion can result in insufficient overlap of observed geometry to find reliable correspondences, resulting in tracking failure” [PAGE 2]. The proposed system changes the hypothesis space: instead of asking, “Which surface points are visible now?” it asks, “What complete object shape is most probable given the observed crop, and where does every voxel of that completed shape lie in canonical coordinates?” This shift is grounded in the claim that “having the complete geometry of objects aids in their tracking” [PAGE 1] and that the method learns to “see behind objects” by “hallucinating unseen regions of objects” [PAGE 1].

The formal dependency chain is: RGB-D frame → sparse surface grid and TSDF → object detection → crop features and TSDF → completion mask → canonical dense coordinates → differentiable Procrustes pose → frame-level tracklet proposal → canonical geometry association → multi-object tracklets. The paper summarizes the architecture as predicting “the complete object geometry beyond the view observation as well as dense correspondences a canonical space” [PAGE 3]. The tracking gain is then explained through correspondence persistence: “By predicting correspondences not only in observed regions but also unobserved areas, we can provide strong correspondence overlap under strong object or camera motion, enabling robust dynamic object tracking” [PAGE 3].

The gray-zone audit begins with detection. The network predicts objectness, center offset, extents, and semantic class, and then uses mean-shift clustering: “We perform a mean-shift clustering (20 steps, with 8 voxel radius) on the predicted center coordinates of the voxels which produce a positive objectness score. From the resulting instance clusters, we filter out small clusters of less than 50 elements” [PAGE 4]. This creates a brittle boundary: if detection recall collapses under heavy occlusion or fast motion, the downstream completion and correspondence modules never receive a valid crop. The paper’s detection table shows this vulnerability: on DYNSYNTH, some classes have low detection mAP, for example bookshelf and cabinet, as reported in “Table 4. 3D Detection results on DYNSYNTH and ScanNet with Scan2CAD targets at mAP@0.5” [PAGE 11]. The system can compensate for missing observed geometry only after detection succeeds.

A second gray zone is the epistemology of completion. The completion head predicts a binary occupancy mask, trained with binary cross entropy: “predict the complete object geometry mk as a binary mask trained by binary cross entropy with the target occupancy grid” [PAGE 4]. This is not direct observation; it is a learned prior over unseen regions. The gain reported in the paper is therefore conditional on the prior being correct. The ablation says: “Utilizing object completion with canonical correspondences matching further improves the tracking performance by 6.7% mean MOTA and achieves best results (42.3% mean MOTA)” [PAGE 8]. The counterfactual is equally important: if the hallucinated geometry is wrong, the canonical correspondence field can inject false matches. The paper acknowledges the mechanism but not every failure mode: “we can obtain correspondences that are more reliably persist across a sequence” [PAGE 8]. “More reliably” is probabilistic, not guaranteed.

A third gray zone is pose identifiability. The method optimizes “object rotation and scale under the correspondences using a differentiable Procrustes analysis” [PAGE 4]. This assumes a rigid object, known or predicted correspondences, and a nondegenerate point configuration. The paper explicitly notes symmetry trouble: “objects possessing symmetry can result in ambiguous target rotations, we take the minimum rotation error between the predicted rotation and the possible valid rotations based on the object symmetry” [PAGE 4]. This means that rotation can be underdetermined even when translation is recoverable. The MOTA metric, however, uses only center-distance matching: “A match is considered positive if its ℓ2 distance to ground truth center is less than 25cm” [PAGE 5]. Therefore, a tracker can pass MOTA while still producing ambiguous or inaccurate orientation, especially for symmetric furniture.

A fourth gray zone is association hysteresis. After sequential greedy association, the method performs a second pass using canonical reconstruction IoU: “For all tracklets and all non-assigned proposals, we compute pairwise distances using a 3D volumetric IoU of the canonical representations (binarized at threshold 0.5). We again compute the optimal assignment and reject a matching if this mask IoU is below 0.3” [PAGE 4]. The threshold 0.3 is a hard decision boundary. If the completed canonical geometry is partially wrong, the volumetric IoU can fall below the threshold even for the same physical object. Conversely, if two objects share similar canonical shapes, the IoU can exceed threshold for the wrong object. The method reduces this risk with a running average: “The canonical object reconstruction for a tracklet is then updated as a running average of the canonical reconstructions for each object detection in that tracklet; we use a 4:1 weighting for the running mean” [PAGE 4]. This creates temporal inertia: a stale canonical model may either stabilize a true track or lock in an early hallucination.

The final reasoning layer is metric causality. MOTA is defined as “MOTA = 1 − (Σt(mt + fpt + mmet))/(Σt gt)” and is intended to capture misses, false positives, and mismatches [PAGE 5]. The paper’s improvement claim is tied to this metric: “our joint object completion and tracking provides notably improved performance over state of the art by 6.5% in MOTA” [PAGE 1]. However, MOTA’s 25 cm center-match rule means the metric rewards stable centroids more than perfect orientation or full shape accuracy. Thus, the strongest verifiable interpretation is not “completion solves all tracking,” but rather: completion increases the probability of persistent center-level association under partial observation, while introducing new failure modes when the learned geometry prior is invalid, symmetric, or poorly calibrated.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The input representation is formally a pair of spatial structures per RGB-D frame. The paper states: “Each RGB-D frame of the sequence is represented by a sparse grid Si of surface voxels and a dense truncated signed distance ﬁeld (TSDF) Di” [PAGE 2]. Let the voxel pitch be \( \delta \) with SI unit meters per voxel, \( \delta \,[\mathrm{m/voxel}] \). A voxel index \( \mathbf{x}\in\mathbb{Z}^3 \) corresponds to a physical location \( \mathbf{p} = \mathbf{o} + \delta \mathbf{x} \), where \( \mathbf{o} \) is the sensor-origin offset. The TSDF value \( D(\mathbf{x}) \) is a signed distance in meters if the depth map is metric; otherwise it is in depth-sensor units. The paper’s pipeline uses this representation because the TSDF is obtained “by back-projecting the observed depth values, following volumetric fusion” [PAGE 2].

Object detection uses four heads. For each voxel \( v \), the network predicts objectness \(O(v)\in[0,1]\), center offset \(C(v)\in\mathbb{R}^3\), extent \(D(v)\in\mathbb{R}^3\), and semantic class \(S(v)\). The loss terms are given as:

\[
L_o = \mathrm{BCE}(O, O_t)
\]

\[
L_c =
\begin{cases}
\frac{1}{2}(C-C_t)^2, & |C-C_t| \le 0.5,\\
|C-C_t| - \frac{1}{2}, & \text{otherwise},
\end{cases}
\]

\[
L_d =
\begin{cases}
\frac{1}{2}(D-D_t)^2, & |D-D_t| \le 0.5,\\
|D-D_t| - \frac{1}{2}, & \text{otherwise},
\end{cases}
\]

\[
L_s = \mathrm{CE}(S, S_t).
\]

Here \(O_t\) is a binary target objectness mask, and \(C_t, D_t, S_t\) are target center, extent, and class labels defined inside the target object geometry [PAGE 3]. Units: \(O\) is dimensionless probability; \(C\) and \(D\) are in voxel units as used by the network; \(L_c\) and \(L_d\) have voxel-squared units in the quadratic region and voxel units in the linear region. The paper explicitly weights these terms because of scale: “We weight the object center and extent loss, Lc and Ld by 0.1, as they are evaluated in voxel units with have larger absolute value” [PAGE 5]. If natural logarithms are used, BCE and CE are in nats; if base-2 logarithms are used, they are in bits. The paper does not specify the logarithm base.

After voxel-wise prediction, instance proposals are formed by clustering: “mean-shift clustering (20 steps, with 8 voxel radius)” followed by filtering “small clusters of less than 50 elements” [PAGE 4]. Let \( \mathcal{V}^+ = \{v : O(v) > \tau_o\} \) be the positive-objectness voxel set. The clustering operator \( \mathcal{M}_{\mathrm{ms}}(\mathcal{V}^+; r=8, N=20) \) produces clusters \( \{Q_i\} \), and the filtering operator keeps clusters with \( |Q_i| \ge 50 \). The exact positive threshold \( \tau_o \) is not specified in the provided text, which is a reproducibility gray zone.

For each object proposal \(k\), sparse features and TSDF are fused: “we crop the corresponding sparse features fk from F as well as the dense TSDF grid D. We map the sparse cropped features densely and add the matching TSDF values over the feature channels to obtain f′k” [PAGE 4]. Formally, if \(F_k\) is the cropped sparse feature tensor and \(D_k\) is the cropped TSDF, the dense fused feature can be written schematically as

\[
f'_k(\mathbf{x}) = \uparrow F_k(\mathbf{x}) + \phi(D_k(\mathbf{x})),
\]

where \( \uparrow \) denotes dense mapping or interpolation and \( \phi \) is the channel-wise embedding of TSDF values. The paper does not specify \( \phi \) in the main text, referring instead to the supplemental architecture [PAGE 3].

Object completion predicts a dense binary occupancy mask. The paper states that the network predicts “the complete object geometry mk as a binary mask trained by binary cross entropy with the target occupancy grid” [PAGE 4]. Let \( \hat{m}_k(\mathbf{x})\in[0,1] \) be the predicted occupancy probability at voxel \( \mathbf{x} \), and \(m_{t,k}(\mathbf{x})\in\{0,1\}\) be the target occupancy. Then

\[
L_m =
-\sum_{\mathbf{x}}
\left[
m_{t,k}(\mathbf{x})\log \hat{m}_k(\mathbf{x})
+
(1-m_{t,k}(\mathbf{x}))\log(1-\hat{m}_k(\mathbf{x}))
\right].
\]

Units: \(L_m\) is dimensionless if probabilities are dimensionless, but numerically it is measured in nats or bits depending on logarithm base. Breakdown regime: if the predicted mask saturates at 0 or 1 for all voxels, gradients vanish; if the cropped TSDF contains no valid surface evidence, the completion head is unconstrained by observation and must rely entirely on learned category priors.

The correspondence head predicts a canonical coordinate map. The paper says: “We predict for each object a dense correspondence mapping ck to its canonical space, similar to the normalized object coordinate space of [31]” [PAGE 4]. Let \(c_k(\mathbf{x})\in\mathbb{R}^3\) be the predicted canonical coordinate for object voxel \( \mathbf{x} \). The supervision is an \( \ell_1 \) loss evaluated where target geometry exists:

\[
L_{\mathrm{corr}} =
\sum_{\mathbf{x}\in\Omega_{t,k}}
\|c_k(\mathbf{x}) - c_{t,k}(\mathbf{x})\|_1,
\]

where \( \Omega_{t,k} \) is the target occupied voxel set for object \(k\). The paper states: “We apply an l1 loss to the ck, evaluated only where target object geometry exists” [PAGE 4]. Units: canonical coordinates may be normalized dimensionless coordinates or metric coordinates in meters, depending on the canonical-space definition. Breakdown regime: unobserved regions receive no direct correspondence supervision, so errors there are controlled only indirectly by the completion prior and pose optimization.

Pose estimation uses differentiable Procrustes analysis. The source equation is:

\[
c^*, R^*, t^* :=
\arg\min_{c\in\mathbb{R}_+, R\in SO(3), t\in\mathbb{R}^3}
\|P_o - (cR \cdot P_n + t)\|.
\]

The paper describes this as optimizing “object rotation and scale under the correspondences using a differentiable Procrustes analysis” [PAGE 4]. Let \(P_o\in\mathbb{R}^{3\times N}\) be predicted object coordinates in the current frame and \(P_n\in\mathbb{R}^{3\times N}\) be their canonical coordinates. Define means

\[
\mu_o = \frac{1}{N}\sum_{i=1}^N P_{o,i},
\qquad
\mu_n = \frac{1}{N}\sum_{i=1}^N P_{n,i},
\]

and variances

\[
\sigma_o^2 = \frac{1}{N}\sum_{i=1}^N \|P_{o,i}-\mu_o\|^2,
\qquad
\sigma_n^2 = \frac{1}{N}\sum_{i=1}^N \|P_{n,i}-\mu_n\|^2.
\]

The cross-covariance matrix is

\[
H = (P_o-\mu_o)(P_n-\mu_n)^T.
\]

Its SVD is

\[
H = UDV^T.
\]

With

\[
S = \mathrm{diag}(1,1,\det(UV^T)),
\]

the paper reports the Umeyama solution:

\[
c^* = \frac{1}{\sigma_n}\operatorname{tr}(DS),
\qquad
R^* = USV^T,
\qquad
t^* = \mu_o - c^*R^*\mu_n.
\]

This is from the paper’s equation labeled (2), citing [29] [PAGE 4]. Units: \(c^*\) is dimensionless if \(P_o\) and \(P_n\) share the same physical unit; otherwise it converts canonical units to object units. \(R^*\) is dimensionless and belongs to \(SO(3)\). \(t^*\) has the same length unit as \(P_o\), for example meters.

The pose optimization has exact singularity regimes. First, if \( \sigma_n = 0 \), the canonical points have zero variance and \(c^*\) is undefined. Second, if \(H\) is rank deficient, the rotation is not uniquely determined. This occurs when corresponding points are collinear, coplanar, or nearly coplanar. Third, if symmetry creates multiple valid correspondences, the objective has multiple minima; the paper handles this by taking “the minimum rotation error between the predicted rotation and the possible valid rotations based on the object symmetry” [PAGE 4]. Fourth, if the estimated point set contains fewer than three non-collinear correspondences, full 3D rotation is underconstrained. Fifth, if \( \det(UV^T) < 0 \), the reflection correction \(S\) prevents an invalid rotation but may indicate noisy or mismatched correspondences.

Tracking association uses two gates. First, frame-by-frame greedy association uses 3D bounding-box IoU. The paper states: “We employ the Hungarian algorithm [18] to find the optimal assignment of proposals to tracklets, and reject any matches with 3D IoU below 0.3” [PAGE 4]. Let \(B_i\) and \(B_j\) be two axis-aligned or oriented 3D boxes. Their IoU is

\[
\mathrm{IoU}(B_i,B_j) =
\frac{\operatorname{vol}(B_i \cap B_j)}
{\operatorname{vol}(B_i \cup B_j)}.
\]

If \( \operatorname{vol}(B_i \cup B_j)=0 \), IoU is undefined; in implementation it should be treated as zero. The matching rule is

\[
a_{ij} =
\begin{cases}
1, & \mathrm{IoU}(B_i,B_j)\ge 0.3,\\
0, & \text{otherwise}.
\end{cases}
\]

Second, a later reassociation uses canonical volumetric IoU. The paper states: “For all tracklets and all non-assigned proposals, we compute pairwise distances using a 3D volumetric IoU of the canonical representations (binarized at threshold 0.5). We again compute the optimal assignment and reject a matching if this mask IoU is below 0.3” [PAGE 4]. Let \(A_i\) and \(A_j\) be binary canonical occupied sets. Then

\[
\mathrm{IoU}_{\mathrm{can}}(A_i,A_j) =
\frac{|A_i \cap A_j|}
{|A_i \cup A_j|}.
\]

The tracklet canonical reconstruction is updated as a running average with 4:1 weighting. A formal discrete update is

\[
\bar{C}_t =
\frac{4\bar{C}_{t-1} + C_t^{\mathrm{new}}}{5},
\]

assuming a new detection is present and each update receives weight one against four prior units. The paper says: “we use a 4:1 weighting for the running mean for all our experiments” [PAGE 4]. Breakdown regime: if detections are missing for many frames, the running average becomes stale; if a single erroneous canonical reconstruction enters early, the inertia can preserve the error.

The evaluation metric is MOTA. The paper writes:

\[
\mathrm{MOTA} =
1 -
\frac{
\sum_t (m_t + fp_t + mm_t)
}{
\sum_t g_t
}.
\]

The paper defines \(m_t\), \(fp_t\), and \(mm_t\) as “number of misses, of false positives and of mismatches at time t” [PAGE 5]. The metric is dimensionless. The matching rule is explicitly metric: “A match is considered positive if its ℓ2 distance to ground truth center is less than 25cm” [PAGE 5]. In SI units, the threshold is \(0.25\,\mathrm{m}\). Breakdown regimes: if \( \sum_t g_t = 0 \), MOTA is undefined; if false positives exceed ground-truth positives, MOTA can become negative; if center translation is accurate but rotation is wrong, MOTA may remain high because the metric does not include orientation error.

Additional evaluation operators include detection mAP and completion mAP. The appendix says: “Table 4. 3D Detection results on DYNSYNTH and ScanNet with Scan2CAD targets at mAP@0.5” [PAGE 11]. It also says: “Table 5. Instance Completion results on DYNSYNTH and ScanNet with Scan2CAD targets at mAP@0.25” [PAGE 11]. Detection mAP uses a 3D IoU threshold of 0.5, while completion mAP uses a mesh IoU threshold of 0.25. These thresholds create a hierarchy: detection must be sufficiently localized before completion can improve tracking, and completion must be sufficiently accurate before canonical association can reduce identity switches.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is a convergence of static RGB-D reconstruction, object-level SLAM, dense dynamic tracking, object completion, and canonical pose estimation. The static reconstruction lineage supplies the TSDF representation. The paper says: “In the context of static scenes, significant progress has been made in RGB-D tracking and reconstruction” [PAGE 1]. It then contrasts this with dynamic scenes: “the assumption of a static environment significantly limits applicability to real-world environments which are often dynamic, with objects moving over time” [PAGE 1]. This is the historical break: the method inherits the representational tools of KinectFusion-style volumetric fusion but rejects the static-world assumption.

A second lineage is object-level perception. The paper notes that prior work has segmented observed geometry into semantic instances and, more importantly, that “Hou et al. [15] propose to jointly detect objects as well as infer their complete geometry beyond the observed geometry, achieving improved instance segmentation performance; however, their method still focuses on static environments” [PAGE 2]. This is the direct conceptual ancestor: completion beyond the observed view is repurposed from segmentation to dynamic tracking.

A third lineage is dense object tracking. The paper reviews Co-Fusion, MID-Fusion, and MaskFusion: “Co-Fusion [24], MID-Fusion [33], and MaskFusion [25] demonstrated dense object tracking and reconstruction, with promising results for dynamic object tracking, but can still suffer noticeably from occlusions and view changes, as only observed geometry is considered” [PAGE 2]. The retro-causal trap here is that these systems create strong local reconstructions but weak global persistence under occlusion. Their failure mode is not lack of reconstruction; it is lack of unobserved geometry.

A fourth lineage is canonical object coordinates. The correspondence representation is explicitly linked to normalized object coordinate space: “similar to the normalized object coordinate space of [31]” [PAGE 4]. This imports category-level canonicalization into multi-object tracking. The trap is that canonical space can align shape priors, but it can also align wrong instances if the predicted canonical geometry is ambiguous.

A fifth lineage is rigid pose estimation. The differentiable Procrustes step is attributed to Umeyama: “According to [29], with S = diag(1, 1, det(UV T )), we obtain the optima” [PAGE 4]. This connects the method to classical least-squares transformation estimation. The historical risk is that classical Procrustes assumes correct correspondences; deep correspondence prediction does not remove that assumption, it merely moves the risk into the network.

A sixth lineage is data association. The paper uses the Hungarian algorithm: “We employ the Hungarian algorithm [18] to find the optimal assignment of proposals to tracklets” [PAGE 4]. This imports a formal assignment framework into tracking. The multi-week trap is threshold brittleness: a hard IoU cutoff at 0.3 can create identity fragmentation when completion error reduces canonical overlap.

A seventh lineage is tracking evaluation. The paper adopts CLEAR MOT metrics: “we adopt the Multiple Object Tracking Accuracy metric [2]” [PAGE 5]. The historical consequence is that the paper’s headline improvement is tied to center-based matching. This is not a flaw in MOTA itself, but it shapes interpretation: the method’s reported advantage is strongest for maintaining object centers and identities under occlusion, not necessarily for perfectly reconstructing unobserved surfaces.

The multi-week traps visible in the genealogy are: first, using completion as a universal fix without checking detection and completion confidence; second, assuming canonical alignment solves correspondence when symmetry creates multiple valid canonical mappings; third, assuming a running average stabilizes identity when the underlying completion prior is systematically biased; fourth, interpreting MOTA gains as full geometric correctness when the metric’s matching threshold is only 25 cm center distance [PAGE 5].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind here is that the tracker implicitly models other objects, the camera, and the evaluator’s occlusion process, but only within learned priors. The system’s “habit” is to convert partial RGB-D evidence into a complete object hypothesis. The paper states the motivating intuition: “humans can effectively track objects by leveraging prior knowledge of the underlying object geometry, which helps to constrain the problem even under notable view changes or significant occlusions” [PAGE 2]. The system tries to imitate that habit by learning a category-level prior over complete geometry.

In a crisis regime, such as rapid object motion, strong occlusion, or abrupt camera movement, the observed surface overlap collapses. The habit regression is to fall back to the learned completion prior. The paper’s ablation supports this: without completion, association by canonical correspondences loses performance, and full completion plus correspondence matching is best. It reports: “Utilizing object completion with canonical correspondences matching further improves the tracking performance by 6.7% mean MOTA” [PAGE 8]. The recursive prediction is that under increasing occlusion, the benefit of completion rises until the completion prior becomes invalid.

The counter-trap is that an adversary or natural distribution shift can exploit the prior. If an object is seen from a viewpoint not represented in training, the completion head may hallucinate the wrong backside geometry. Then canonical correspondences become misleading. The paper’s safeguard is the hard IoU gate: “reject a matching if this mask IoU is below 0.3” [PAGE 4]. But this safeguard is also a failure surface: if the wrong completion still yields canonical IoU above 0.3, the system can lock onto a wrong tracklet. If the correct completion yields IoU below 0.3 due to small misalignment, the system can split one object into multiple tracklets.

The clock layer has three time constants. First, the training clock: “we first train the object detection backbone for 100K iterations, and then introduce the object completion and correspondence prediction along with the differentiable pose optimization, training the full model end-to-end for another 250K iterations until convergence. Full training takes approximately 72 hours” [PAGE 5]. This means the completion prior is stabilized only after a long training schedule. A short training budget would likely increase hallucination errors.

Second, the tracklet update clock: the canonical reconstruction is updated as a running average with 4:1 weighting [PAGE 4]. This creates memory with a characteristic decay. If an object is missing for several frames, the canonical model may remain stale. If the object reappears from a different view, the stale model may either help by providing a stable target or hurt by resisting the new evidence.

Third, the association clock: the method first performs greedy sequential association, then a global reassociation pass for unmatched proposals [PAGE 4]. This two-stage clock allows recovery from early greedy mistakes, but only if the canonical reconstruction is sufficiently accurate. The recursive prediction is: early errors are recoverable when completion is accurate; late errors become persistent when the running canonical model has already committed to a wrong shape.

The evaluator’s theory of mind must therefore distinguish three regimes: observation-limited, prior-limited, and threshold-limited. In observation-limited crisis, completion helps most. In prior-limited crisis, completion can hurt. In threshold-limited crisis, the canonical IoU cutoff decides whether the tracker creates a new identity or reconnects an old one.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A physical veto applies when the sensor observation cannot support the geometric claim required by the pipeline. The paper’s pipeline depends on RGB-D frames converted into sparse surface voxels and TSDF: “Each RGB-D frame of the sequence is represented by a sparse grid Si of surface voxels and a dense truncated signed distance ﬁeld (TSDF) Di” [PAGE 2]. If depth values are missing, noisy beyond the sensor model, or corrupted by reflective surfaces, the TSDF crop may contain insufficient evidence. In that regime, the completion head cannot be verified against observation; it becomes a category prior. Formal veto condition: let \( \Omega_{\mathrm{obs},k} \) be the observed valid voxel support for object \(k\). If \( |\Omega_{\mathrm{obs},k}| < N_{\min} \), the pose estimator lacks a minimal correspondence set. For full 3D rotation, at least three non-collinear correspondences are required; if the observed set is smaller or degenerate, the Procrustes problem is rank deficient.

A biomechanical or rigidity veto applies when the object violates the rigid-motion assumption. The paper focuses on “rigidly moving objects over time” [PAGE 1] and formulates pose as a single scale, rotation, and translation [PAGE 4]. If an object deforms, articulates, or changes topology, a single rigid transform cannot explain the frame-to-frame change. The veto is formal: if the true deformation field \( \mathbf{u}(\mathbf{x},t) \) is not representable as \( cR(t)\mathbf{x}+t(t) \), then the rigid pose residual has irreducible error. The paper’s training and evaluation setup reduces this risk by focusing on furniture categories and synthetic sequences where “an object moving parallel to the ground” is specified [PAGE 5]. However, real objects such as chairs with moving parts or soft objects can break the assumption.

A weather, illumination, or sensor-modality veto applies when the depth modality is degraded. The real-world dynamic captures use “a Structure Sensor mounted to an iPad” [PAGE 8]. Structured-light or IR-based depth can fail under strong sunlight, IR interference, low texture, transparent surfaces, or specular materials. The source text does not provide a sensor-noise model, but the pipeline’s dependence on depth implies that if the depth map is invalid, the TSDF and sparse surface grid lose support. The paper’s own framing acknowledges that the method “hallucinates” unseen regions [PAGE 1], which makes it especially sensitive to cases where the observed region is also unreliable.

A symmetry veto is a geometric identifiability veto. The paper explicitly states: “objects possessing symmetry can result in ambiguous target rotations” [PAGE 4]. If an object has rotational symmetry, multiple rotations produce the same canonical geometry. The Procrustes objective may have multiple global minima or near-minima. The system mitigates this by using known symmetry: “we take the minimum rotation error between the predicted rotation and the possible valid rotations based on the object symmetry” [PAGE 4]. But if symmetry labels are absent, incorrect, or continuous rather than discrete, rotation may remain unresolved. This does not necessarily veto translation tracking, because MOTA’s center threshold can still be satisfied [PAGE 5], but it vetoes claims of full pose correctness.

A completion-error veto applies when the predicted complete geometry creates false canonical overlap. Let \( \hat{G}_k \) be the predicted canonical occupied set and \(G_i\) be a tracklet’s canonical occupied set. The association operator accepts a match only if

\[
\frac{|\hat{G}_k \cap G_i|}{|\hat{G}_k \cup G_i|} \ge 0.3.
\]

If completion hallucinates occupied voxels in regions that do not match the true object, the numerator may increase for the wrong object or decrease for the true object. The veto condition is therefore not merely low completion quality, but completion error that changes the sign of the association inequality. The paper’s running average can either suppress or amplify this error depending on the 4:1 update dynamics [PAGE 4].

The final adjudication is layered. Physical depth failure vetoes the observation layer. Rigidity failure vetoes the motion model. Symmetry vetoes the rotation layer. Completion error vetoes the association layer. MOTA center matching may remain partially robust under rotation vetoes, but it cannot compensate for detection loss, missing depth, or canonical mask collapse. Therefore, the method’s strongest valid domain is rigid, detectable, sufficiently observed or strongly prior-consistent objects under RGB-D conditions where depth is reliable enough to initialize and constrain completion.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Null-completion veto. Suppose the cropped TSDF for a detected object contains too few valid voxels, or the completion head predicts an empty or near-empty occupancy mask. Let \( \hat{m}_k(\mathbf{x}) \) be the predicted occupancy probability and define the binary completion set \( \hat{G}_k = \{\mathbf{x} : \hat{m}_k(\mathbf{x}) \ge 0.5\} \). If \( |\hat{G}_k| \approx 0 \), canonical correspondence extraction collapses. The pose optimizer receives too few points, and canonical IoU becomes undefined or zero. The paper’s association rule rejects matches below 0.3: “reject a matching if this mask IoU is below 0.3” [PAGE 4]. Prediction: the tracker will create a new tracklet or lose the object during that interval. This is verifiable by ablating completion or by measuring completion mAP. The paper reports completion mAP as “Table 5. Instance Completion results on DYNSYNTH and ScanNet with Scan2CAD targets at mAP@0.25” [PAGE 11], with low values for some classes, for example bookshelf and cabinet. Prediction: classes with low completion mAP should show larger MOTA degradation when completion is removed than classes with high completion mAP. The paper’s ablation supports the direction of this prediction: “Utilizing object completion with canonical correspondences matching further improves the tracking performance by 6.7% mean MOTA” [PAGE 8].

Scenario 2: Symmetry-ambiguity veto. Suppose the object is symmetric, and the canonical correspondence field admits two or more rotations that satisfy the Procrustes objective nearly equally well. The paper states: “objects possessing symmetry can result in ambiguous target rotations” [PAGE 4]. If the system lacks the correct symmetry label, it may choose the wrong rotation even though the object center is correct. Because MOTA uses center distance, the paper says: “A match is considered positive if its ℓ2 distance to ground truth center is less than 25cm” [PAGE 5]. Prediction: MOTA may remain relatively stable while median rotation error increases. This is verifiable by comparing symmetric and asymmetric classes, or by comparing pose error with and without symmetry handling. The paper’s pose tables show that completion reduces rotation and translation error: on DYNSYNTH, “Ours (no compl.)” has 7.4° and 15.4 cm, while “Ours” has 5.7° and 12.3 cm [PAGE 8]. Prediction: if symmetry ambiguity is artificially increased by removing symmetry constraints, rotation error should increase more than center-based MOTA.

Scenario 3: Canonical-prior-mismatch veto. Suppose an object appears from a novel view not well represented by the learned completion prior. The observed crop may support one shape, but the completion head hallucinates a different backside geometry. The canonical reconstruction for the proposal then has low volumetric IoU with the correct tracklet. The paper’s second-pass association computes “a 3D volumetric IoU of the canonical representations (binarized at threshold 0.5)” and rejects matches below 0.3 [PAGE 4]. Formal condition: let \(A\) be the correct canonical occupied set and \(B\) be the hallucinated set. If

\[
\frac{|A\cap B|}{|A\cup B|} < 0.3,
\]

the match is rejected. Prediction: the tracker will split one physical object into multiple tracklets, increasing misses and mismatches in MOTA. This is verifiable by increasing viewpoint disparity between frames or by testing on categories with low completion mAP. The paper’s detection and completion tables provide measurable proxies: “Table 4. 3D Detection results on DYNSYNTH and ScanNet with Scan2CAD targets at mAP@0.5” [PAGE 11] and “Table 5. Instance Completion results on DYNSYNTH and ScanNet with Scan2CAD targets at mAP@0.25” [PAGE 11]. Prediction: the largest tracking failure under view-change stress should occur where detection mAP and completion mAP are jointly low, because both the crop and the canonical prior are weak.

These three vetoes are verifiable because each maps to a measurable operator: empty completion maps to completion mAP and pose collapse; symmetry ambiguity maps to rotation error versus center-based MOTA; canonical mismatch maps to canonical IoU rejection and identity fragmentation. They also respect the paper’s own formalism: the Procrustes objective requires valid correspondences [PAGE 4], the association step requires canonical IoU above 0.3 [PAGE 4], and MOTA requires center-distance matching below 0.25 m [PAGE 5].
</RLVR_COUNTERFACTUAL_VETOES>