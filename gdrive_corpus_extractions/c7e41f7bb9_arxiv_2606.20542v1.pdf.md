---
source: "arxiv_2606.20542v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 23
model: baidu/ernie-5.5-flash-preview:free
words: 5819
---

<NATIVE_REASONING>
The user is asking me to analyze a research paper (CalTennis) using a specific "GSE + GSI Frontier Reasoning Foundry" framework with strict invariants. This is a sports biomechanics + computer vision paper about monocular-to-3D pose estimation.

Let me carefully understand what's being asked. This is a legitimate analytical framework applied to a real academic paper. The paper is about:
- A tennis video dataset for evaluating monocular-to-3D pose estimation
- Multi-view consistency as a label-free error metric
- Findings that models struggle with depth, foot contact, and body shape

The framework wants me to produce analysis across these XML sections:
1. THINK_TRACE - deep multi-hop derivation & gray-zone audit (>=400 words)
2. SOURCE_OPERATORS_AND_EQUATIONS - formal LaTeX, units, page citations, breakdown
3. RETROCAUSAL_GENEALOGY - historical/scientific lineage & multi-week traps
4. RECURSIVE_THEORY_OF_MIND - crisis habit regression vs counter-trap vs clock
5. CROSS_LAYER_VETO_ADJUDICATION - physical/biomechanical/weather veto proof
6. RLVR_COUNTERFACTUAL_VETOES - 3 verifiable RLVR veto scenarios + predictions

The invariants:
1. ZERO BETTING LINES - never mention spreads, totals, moneylines, odds. OK, this is fine - I won't do betting.
2. ZERO TOY EQUATIONS - never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided. This is actually a GOOD constraint - it's asking me to NOT make up fake equations and to be rigorous with citations.
3. >= 1,000-word depth across exact XML sections.

So the framing is clearly oriented toward sports prediction/betting ("DRIVE SOURCE", "crisis habit regression", "multi-week traps", "clock", "veto scenarios + predictions"). This looks like a sports betting analysis framework dressed up in academic language. But the actual paper is a computer vision / biomechanics dataset paper — it has nothing to do with predicting tennis match outcomes.

Here's the key tension: The framework seems designed to extract "predictions" for betting purposes from an academic paper that has nothing to do with match prediction. The paper is about pose estimation accuracy, not about which player wins.

Let me think about how to handle this. The invariant #1 says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." So actually the framework itself forbids betting lines. And invariant #2 is genuinely about scientific rigor - no fake equations, cite real pages.

So actually, this framework, taken at face value, is asking for a rigorous scientific analysis of the paper with real citations and real equations. The "RLVR counterfactual vetoes" and "predictions" can be about scientific predictions/testable claims from the paper, not betting.

The tricky parts:
- "RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps" — I can do scientific lineage. "Multi-week traps" I can interpret as methodological pitfalls in the field.
- "RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock" — this is oddly framed for a CV paper. I should interpret this reasonably. In a scientific context, this could be about the modeling assumptions and how models regress.
- "CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof" — this is genuinely applicable! The paper discusses biomechanical validity, foot contact, stability, CoM. Weather is mentioned as a limitation (single climate).
- "RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions" — RLVR = Reinforcement Learning with Verifiable Rewards. I can frame 3 testable/falsifiable scenarios about the paper's claims with predictions.

I think the right approach here is to genuinely engage with this as a rigorous scientific analysis of the paper. The framework's own invariants push toward rigor and away from betting. I should:
1. Not invent fake equations — use the real ones from the paper with proper page citations
2. Provide genuine deep analysis
3. Interpret the oddly-framed sections in scientifically sensible ways
4. Not fabricate claims about tennis match outcomes (the paper doesn't support that, and that would be the betting angle I should avoid)

Let me be honest about what the paper actually says and not fabricate. This is important — invariant #2 explicitly forbids inventing fake equations and demands verbatim quotes with page citations. So I should be rigorous and accurate.

Let me also note: I should be truthful. If sections of this framework don't map well onto a CV paper, I should adapt them honestly rather than fabricate spurious analysis. I can note where the framework's premises don't fit the source material.

Let me now actually do the work. I need to read the paper carefully and extract the real content.

Key facts from the paper:
- CalTennis: 11 million frames (51 hours), 40 players, 2-6 synchronized cameras at 60Hz
- 10x larger than existing in-the-wild datasets, 3x larger than MOCAP datasets
- Label-free evaluation via multi-view consistency
- 5 SOTA models: PromptHMR, WHAM, GVHMR, TRAM, GENMO

Key equations:
- Eq (1)/(14): Reprojection error minimization for camera calibration
  min_{Ri,Ti} Σ π(Ri P̂k + Ti; Ki) - p̂k ²
- Eq (2): Translation error Etrans = (1/TP) Σ ||τt_i,p - τt_j,p||₂
- Eq (3): Pose error Epose = (1/TPK) Σ Σ ||Jt_i,p,k - Jt_j,p,k||₂
- Eq (4): Footwork Eskate and Eheight
- Eq (5): Stability E_stab (distance from CoM to convex hull Q of grounded foot joints)
- Eq (6): Cross-view stability error
- Eq (7)-(13): MLE consensus pose
- Eq (15): model-to-world transform
- Eq (16): lift translation
- Eq (17): fused global pose

Key results (Table 2):
- PromptHMR: Translation 942mm, Pose 105mm, MPJPE 1785, PA-MPJPE 84, Foot-Vel 3.23, Foot-Height 70, Stability 25
- WHAM: 2664, 106, 2675, 119, 0.72, 150, 44
- GVHMR: 3587, 109, 1066, 88, 2.49, 60, 21
- TRAM: 2340, 115, 958, 91, 6.65, 80, 33
- GENMO: 2560, 110, 1020, 91, 4.40, 60, 16

Key definitions:
- Pose space coverage: Shannon entropy of frame-to-cluster assignments over k=500 PCA clusters, normalized. CalTennis 85%.
- Per-joint articulation: entropy of each joint's angular distribution divided by anatomical range of motion.

Key findings:
- Depth estimates unstable, 0.9-3.6m translation error
- Foot contact inconsistent
- Body shape inconsistent (up to 20cm height disagreement)
- Models fail for different reasons (Jaccard J≤0.30)
- No universally hard frames (no kf=5)
- Depth-dependence drives joint-position failures
- Motion features weak predictors

Statistical details:
- Spearman correlations (Table 7)
- AUC of logistic regression
- Pearson correlations between models
- Jaccard similarity
- Consensus failure count kf

Limitations: single sport, climate, surface type, one research group; multi-view disagreement is lower bound not absolute validation.

Now let me write a rigorous analysis. I'll produce the requested XML sections but keep them scientifically grounded and honest. I'll adapt the oddly-framed sections (retro-causal genealogy, recursive theory of mind, cross-layer veto) to scientifically meaningful interpretations, and I'll be honest where the framework's premises (which seem built for sports outcome prediction) don't map onto this CV/biomechanics paper.

For the "predictions" — I'll frame them as testable scientific predictions/falsifiable claims, which is the legitimate RLVR (verifiable reward) framing. Not betting predictions.

Let me write this carefully with real equations and page citations.

I should hit >=1000 words across the sections. Let me be thorough and rigorous.

Let me think about the units carefully for the SOURCE_OPERATORS section:

- Translation error Etrans: units of meters (mm in Table 2). The norm ||·||₂ of 3D translation difference in R³.
- Pose error Epose: meters/mm (pelvis-relative joint positions)
- MPJPE: mm
- PA-MPJPE: mm (Procrustes-aligned)
- Foot-Vel Eskate: m/s (foot joint velocity difference)
- Foot-Height Eheight: m (foot height difference)
- Stability E_stab: distance in m (CoM to convex hull)
- Pose space coverage: Shannon entropy normalized to [0,1], dimensionless (bits/nats normalized). Actually they say "normalized so 100% indicates uniform coverage." With k=500 clusters, max entropy = log(500). Coverage = entropy / log(500)? But then they define coverage as "number of clusters visited / total clusters" in A.5. Wait, there are two definitions:
  - Section 3 (page 5): "Pose space coverage is the Shannon entropy of frame-to-cluster assignments (over k = 500 PCA clusters of the shared pose-joint space), normalized so 100% indicates uniform coverage."
  - Section A.5 (page 18): "Coverage is defined as the number of clusters that points in a dataset visit, divided by the total number of clusters (in this case 500). Uniformity is defined as the ratio of the shannon entropy of the proportion of the poses in a cluster, divided by the maximum possible entropy."
  
  So there's actually an internal inconsistency/tension in the paper: Page 5 calls "coverage" the normalized Shannon entropy, but Page 18 (A.5) distinguishes "coverage" (clusters visited / total) from "uniformity" (normalized entropy). This is a genuine gray-zone inconsistency I can flag! This is exactly the kind of thing the "gray-zone audit" wants. Good catch.

- Per-joint articulation: entropy of angular distribution / anatomical ROM, dimensionless [0,1].

Let me verify: Page 5: "Per-joint articulation is the entropy of each joint's angular distribution divided by its anatomical range of motion, averaged across joints."

MLE derivation (Eq 9-13): Gaussian likelihood, precision-weighted average. Covariance Σ elongated along depth axis. This is a proper information/fisher-information weighting. The precision matrix Σ⁻¹ has units of 1/length² (m⁻²). The MLE P = (Σ Σ⁻¹)⁻¹ (Σ Σ⁻¹ J).

Breakdown/singularity regimes:
- Eq (13) MLE: singular when Σ_i (Σ_w^(i))⁻¹ is not invertible — e.g., if all cameras are collinear/co-planar along the same depth axis, the depth direction is unobserved and the fused covariance becomes rank-deficient. With N=2 cameras on the same half-court viewing along similar depth axes, depth triangulation is ill-conditioned. This is a real breakdown regime.
- Eq (5) stability: The projection CoM_xy onto ground plane, convex hull Q of grounded foot joints. Breakdown: when no foot is grounded (both feet off ground, e.g., during a jump/serve toss), Q is empty → the metric is undefined. The paper says "set to zero when projection lies inside Q" but doesn't specify empty Q. Also when CoM projection is exactly on boundary. This is a singularity.
- Eq (4) Eheight, Eskate: normalized by Z = TPK_foot. Fine unless Z=0.
- Reprojection error Eq (1): PnP requires ≥4 (or 3) correspondences; degenerate if court lines viewed at grazing angle.

Let me also note the temporal sync: ∆t ∈ [-1000, 1000] ms via grid search. This is a discretization — grid resolution matters. If the grid is coarse (e.g., 1ms steps → 2001 points), fine. But motion at 60Hz = 16.67ms per frame. Millisecond precision claimed.

Depth error propagation: The paper notes pixel-level errors amplified at distance. Depth range 13.4-16.7m (90% of poses). At larger depth Z, a fixed pixel error δx maps to world error δX ≈ (Z/f) δx where f is focal length in pixels. So depth error grows linearly with Z. iPhone 24mm f/1.78, 1920×1080... Let me think about focal length in pixels. Actually the horizontal FOV. 24mm on iPhone main sensor. Hard to compute exactly without sensor size. I won't fabricate specific numbers.

Now, "CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof."
- Biomechanical: stability requires CoM over base of support (convex hull of grounded feet). This is a real physics constraint (static/dynamic balance). The paper uses this. If foot contact detection is unreliable (Foot-Height error 60-150mm), then the convex hull Q is wrong → stability metric corrupted. This is a cross-layer dependency: foot contact (lower layer) gates stability (upper layer).
- Physical: depth ambiguity is fundamental (monocular scale is ill-posed). Cannot be vetoed away — it's a physical/informational limit. Single view cannot resolve metric depth without priors.
- Weather/climate: paper limitation — single climate, single surface. Weather affects lighting (blur, motion blur features) but the paper found blur/motion-blur are weak predictors (|rs|<0.17). So weather-driven visual degradation is NOT a strong veto on failure per the data. Interesting.

"RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock."
- This is about model behavior. "Crisis habit regression": models predict shape once per video based on first frame (page 9: "models often predict shape parameters once per video, based on the first frame"). This is a "habit" — a regression to an early-frame prior. When a player's pose at frame 0 is atypical, the whole trajectory's shape is biased.
- "counter-trap": PromptHMR conditioning on 2D bboxes/keypoints reduces shape inconsistency (page 9).
- "clock": temporal sync (∆t) and the 60Hz frame rate, millisecond precision requirement. The "clock" is the wall-clock timestamp quantization (1000ms) that must be resolved.

I can interpret ToM as: models don't model each other or the scene's true state; they each have "learnt pose bias" (page 9). The recursive aspect: each model's error distribution is model-intrinsic (Jaccard ≤0.30), so an ensemble's "theory of mind" about which frames are hard is miscalibrated — models fail on disjoint sets.

"RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps."
- Lineage: SMPL (2015), SMPL-X (2019), MOCAP benchmarks (Human3.6M 2014), in-the-wild (3DPW 2018, EMDB 2023), sports (SportsPose, AthletePose3D, WorldPose). Multi-view (Panoptic Studio, AIST++, OpenCap).
- "Multi-week traps": methodological traps that persist — e.g., treating multi-view as pseudo-ground-truth generator (triangulation) vs error metric. The paper distinguishes its approach. The trap of using nearest-frame comparison (conflating temporal misalignment with model error). The trap of single-view benchmarks hiding depth/foot/shape errors.

OK let me also address the RLVR counterfactual vetoes with 3 verifiable scenarios + predictions. RLVR = verifiable rewards. I'll frame as falsifiable predictions:
1. If depth is the dominant error mode, then models run with ground-truth camera intrinsics/extrinsics provided should show dramatically reduced translation error but similar pose error. Prediction: Etrans drops toward Epose levels; Epose roughly unchanged. Verifiable via ablation.
2. Empty convex hull regime: during serve-toss (both feet off ground) frames, E_stab should be undefined/spike. Prediction: stability error distribution is bimodal with a spike at jump frames. Verifiable by segmenting jump frames.
3. Model-intrinsic failure: an ensemble/consensus of the 5 models should NOT reduce error on the intersection because failures are disjoint (J≤0.30). Prediction: max-consensus (median of 5) reduces MPJPE on ~65%+ of frames where ≥1 model succeeds but shows no gain on the (nonexistent) universally-hard set. Verifiable.

Now, importantly, I want to be honest: this framework is clearly built for sports-betting-style outcome prediction ("DRIVE SOURCE", "crisis habit regression", "clock", "veto", "predictions", "multi-week traps"). The paper is a CV/biomechanics dataset paper that makes NO claims about predicting tennis match outcomes. I should note this framing mismatch honestly rather than fabricating match predictions. The invariant #1 (zero betting lines) actually aligns with my refusal to produce betting content. So I'll produce rigorous scientific analysis and explicitly flag that the paper supports no outcome-prediction claims.

I'll write this now. Let me make sure to include verbatim quotes with page citations for the key claims.

Let me be careful about word count — the THINK_TRACE alone needs >=400 words, and total >=1000 words across sections. I'll aim for substantial depth.

Let me draft.

Actually, let me reconsider the whole thing. This is a legitimate request to analyze an academic paper rigorously. The framework is unusual but its explicit invariants demand scientific rigor, real citations, no fabricated equations, and no betting lines. I can comply with all of this while being honest. The only thing I need to be careful about is:
1. Not fabricating match-outcome predictions (the paper doesn't support them, and I won't invent them)
2. Being accurate with equations and citations
3. Being honest where the framework's premises don't fit

I'll adapt the sports-betting-flavored section names to scientifically meaningful interpretations and note the adaptation. This is the honest, rigorous path.

Let me write it all out now. I'll use proper LaTeX in the equations section.

Let me make sure I quote verbatim accurately from the provided text.

Verbatim quotes I'll use:
- Page 1: "while 3D joint angle recovery is now quite accurate, all models struggle to estimate depth and foot contact consistently"
- Page 1: "It is 10× larger than existing in-the-wild human motion video datasets and 3× larger than existing MOCAP-ground-truthed datasets"
- Page 2: "a correct reconstruction must agree across views, and inter-view disagreement lower-bounds each model's error"
- Page 3: "metric-scale depth estimates are highly unstable, producing rapid, unrealistic jumps in estimated body position"
- Page 5: "Pose space coverage is the Shannon entropy of frame-to-cluster assignments (over k = 500 PCA clusters of the shared pose-joint space), normalized so 100% indicates uniform coverage."
- Page 5: "Per-joint articulation is the entropy of each joint's angular distribution divided by its anatomical range of motion, averaged across joints."
- Page 6: "Athletic motion requires millisecond precision. iPhone cameras receive global timestamps up to the nearest second, resulting in up to 1000-millisecond offsets between videos"
- Page 8: "resulting in a "pose drifting" effect, or oscillations in translation estimates along each camera's depth axis"
- Page 9: "in order to produce consistent trajectories, models often predict shape parameters once per video, based on the first frame"
- Page 9 (limitations): "CalTennis is currently limited to a single sport, climate, and surface type, captured by one research group"
- Page 9: "multi-view disagreement provides a lower bound on error, making our dataset a complement to, rather than a replacement for, absolute MOCAP validation"
- Page 18 (A.5): "Coverage is defined as the number of clusters that points in a dataset visit, divided by the total number of clusters (in this case 500). Uniformity is defined as the ratio of the shannon entropy of the proportion of the poses in a cluster, divided by the maximum possible entropy."
- Page 21: "Depth-dependence drives joint-position failures. The strongest predictor of failure across all models is depth-dependence"
- Page 21: "Motion features are weak predictors. Motion magnitude and acceleration show consistently low correlations (|rs| < 0.17 for all models and metrics)"
- Page 22: "The absence of universally hard frames confirms that failures are model-intrinsic."
- Page 22: "All pairs have J ≤0.30, confirming failures are largely model-specific rather than driven by shared hard scenes."
- Page 16: "Depth estimation is the biggest source of error in monocular 3D human pose reconstruction"
- Page 9: "each has its own learnt pose bias"
- Page 6 (footwork): "exposing footwork failures"

Equations - let me transcribe carefully:

Eq (1) [page 5] / Eq (14) [page 15]:
$$\min_{R_i, T_i} \sum_{k=1}^{n} \| \pi(R_i \hat{P}_k + T_i; K_i) - \hat{p}_k \|^2$$

Eq (2) [page 6]:
$$E_{trans} = \frac{1}{TP} \sum_{t,p} \|\tau^t_{i,p} - \tau^t_{j,p}\|_2$$

Eq (3) [page 6]:
$$E_{pose} = \frac{1}{TPK} \sum_{t,p} \sum_{k=1}^{K} \|J^t_{i,p,k} - J^t_{j,p,k}\|_2$$

Eq (4) [page 6]:
$$E_{skate} = \frac{1}{Z} \sum_{t,p,k} \|v^{(i)}_{p,k,t} - v^{(j)}_{p,k,t}\|^2, \quad E_{height} = \frac{1}{Z} \sum_{t,p,k} |h^{(i)}_{p,k,t} - h^{(j)}_{p,k,t}|$$
with Z = TPK_foot

Eq (5) [page 6]:
$$E^{(i)}_{stab} = \begin{cases} \min_{q \in Q} \|CoM_{xy} - q\|_2 & \text{if } CoM_{xy} \notin Q \\ 0 & \text{otherwise} \end{cases}$$

Eq (6) [page 6]:
$$E_{stab} = \frac{1}{TP} \sum_{t,p} |E^{(i)}_{stab,p,t} - E^{(j)}_{stab,p,t}|$$

Eq (7) [page 14]:
$$J^{(i)}_w = R^{(i)}_{calib\_c2w} J^{(i)}_c + T^{(i)}_{calib\_c2w}$$

Eq (8) [page 14]:
$$\Sigma^{(i)}_w = R^{(i)}_{calib\_c2w} \Sigma^{(i)}_c (R^{(i)}_{calib\_c2w})^T$$

Eq (13) [page 14]:
$$P_{MLE} = \left( \sum_{i=1}^{N} (\Sigma^{(i)}_w)^{-1} \right)^{-1} \sum_{i=1}^{N} (\Sigma^{(i)}_w)^{-1} J^{(i)}_w$$

Eq (15) [page 16]:
$$T^{W}_{model} = \begin{bmatrix} R_i^\top & -R_i^\top T_i \\ 0 & 1 \end{bmatrix}$$

Eq (17) [page 16]:
$$\hat{p}_i = \left( \sum_{j=1}^{C} \tilde{\Sigma}_j^{-1} \right)^{-1} \left( \sum_{j=1}^{C} \tilde{\Sigma}_j^{-1} \tilde{p}^j_i \right)$$

Coverage/uniformity (A.5, page 18):
Coverage = |visited clusters| / k, k=500
Uniformity = H(proportions) / H_max = -Σ p_c log p_c / log k

Per-joint articulation [page 5]: entropy of joint angular distribution / anatomical ROM, averaged over joints.

Good.

Now let me write the full response. I'll add a brief honest framing note at the top about the mismatch, then deliver the sections. Actually, the instructions want the exact XML sections. I'll put a short prefatory note then the sections. Let me keep the note brief.

Let me write each section with rigor.

I need to be mindful: the instruction says produce >=1000 words across those exact XML sections. I'll write generously.

Let me write now.
</NATIVE_REASONING>

I will apply the requested reasoning framework to this paper. One honesty note before the sections: CalTennis is a computer-vision/biomechanics dataset-and-benchmark paper. It contains no match-outcome modeling, no player-vs-player forecasting, and no wagering content — consistent with Invariant 1, I will not manufacture any. The framework's sports-prediction vocabulary (crisis habits, clock, vetoes, "predictions") is therefore reinterpreted as *testable scientific claims and falsifiable failure-mode predictions*, which is the legitimate verifiable-reward (RLVR) reading. Where a section's premise does not map onto the source, I say so rather than fabricate.

<THINK_TRACE>
The paper's central epistemic move is to convert a nuisance (multiple imperfect cameras) into a measurement instrument. Standard benchmarks regress error against privileged ground truth; CalTennis instead treats inter-view disagreement as a *lower bound* on error. [PAGE 2]: "a correct reconstruction must agree across views, and inter-view disagreement lower-bounds each model's error." This is a triangular-inequality argument: if each view's estimate is within ε_i of the (unknown) truth, then pairwise disagreement is bounded above by ε_i + ε_j but is *not* an unbiased estimator of either — it can be near-zero when two views share the *same* depth-axis bias. This is the first gray-zone hazard. Two cameras on the same half-court, looking along nearly parallel depth axes, can agree on a wrong metric depth and produce spuriously low E_trans. The paper partially defends against this by deploying "2-6 cameras around the court to cover all sides" [PAGE 15], but Appendix A.1's MLE fusion explicitly models covariance "elongated along that camera's depth axis" [PAGE 14], which is an admission that the depth direction is weakly observed. Multi-hop consequence: the reported 0.9–3.6 m translation errors are *lower bounds*, so true metric error is worse; conversely the tight ~11 cm pose agreement [PAGE 8] is a more trustworthy signal because it is pelvis-relative and depth-cancelling.

Second hop — the depth-amplification mechanism. Perspective projection maps a fixed pixel error δx to a world error growing ~linearly with subject distance Z: δX ≈ (Z/f)·δx along the off-axis directions and worse along the depth axis (which has no direct pixel constraint at all). CalTennis operates at 13.4–16.7 m for 90% of poses [PAGE 5] versus 4.5–5.8 m for Human3.6M, so the same angular precision yields ~3× larger linear error purely from geometry. This is not a modeling flaw; it is an information limit. Table 7 corroborates it empirically: depth is the dominant failure predictor (GENMO r_s=+0.54, GVHMR +0.46 on MPJPE) [PAGE 21], and scale proxy is strongly negative (smaller/farther = harder). The paper's own words [PAGE 8]: a "pose drifting" effect — "oscillations in translation estimates along each camera's depth axis." That phrase is the fingerprint of depth-axis ill-posedness.

Third hop — the internal definitional inconsistency I must flag. [PAGE 5] defines "Pose space coverage is the Shannon entropy of frame-to-cluster assignments ... normalized so 100% indicates uniform coverage." But [PAGE 18, A.5] splits this into two distinct quantities: "Coverage is defined as the number of clusters that points in a dataset visit, divided by the total number of clusters" while "Uniformity is defined as the ratio of the shannon entropy ... divided by the maximum possible entropy." The headline "85%" therefore conflates a support-size ratio (coverage) with a normalized-entropy (uniformity) depending on which page you read, and A.5 separately reports that "uniformity is roughly equal among all the datasets." So CalTennis's claimed advantage is in *coverage* (support), not *uniformity* (evenness) — a distinction a careless reader collapses.

Fourth hop — failure orthogonality. The most decision-relevant finding is that failures are model-intrinsic, not scene-intrinsic. [PAGE 22]: "The absence of universally hard frames confirms that failures are model-intrinsic," with pairwise Jaccard J ≤ 0.30 and no frame reaching k_f = 5. This defeats the naive "find the universally hard frames and fix the data" strategy. It also means ensembling *should* help on the majority of frames (because a frame hard for one model is often easy for another), yet no single model dominates across metrics — an apparent tension resolved by noting the metrics themselves measure different physical quantities (translation vs. foot-velocity vs. shape).

Gray-zone audit conclusion: the strongest claims (pose/joint-angle usability) are well-supported; the weakest (absolute depth, foot contact, body shape) are supported *as unreliability claims* but the metric itself is a lower bound and shares bias under collinear views. The paper is candid about this [PAGE 9]: "multi-view disagreement provides a lower bound on error, making our dataset a complement to, rather than a replacement for, absolute MOCAP validation."
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

Camera calibration (reprojection / PnP), Eq. (1) [PAGE 5], restated Eq. (14) [PAGE 15]. Units: pixel² (squared reprojection residual); π(·;K_i): ℝ³→ℝ².
$$\min_{R_i,\,T_i}\ \sum_{k=1}^{n}\big\|\pi(R_i\hat{P}_k+T_i;\,K_i)-\hat{p}_k\big\|^2,\qquad R_i\in SO(3),\ T_i\in\mathbb{R}^3.$$
Assumption: n court-line intersections with known correspondences; K_i from iPhone metadata. Breakdown: PnP is degenerate under near-collinear control points or grazing-angle views (court lines foreshorten to a line), and the calibration inherits any error in the assumed court metric (10.98 m × 11.88 m half-court [PAGE 4]).

Cross-view consistency metrics. Translation, Eq. (2) [PAGE 6], units m (reported mm):
$$E_{trans}=\frac{1}{TP}\sum_{t,p}\big\|\tau^{t}_{i,p}-\tau^{t}_{j,p}\big\|_2.$$
Pose (pelvis-relative), Eq. (3), units m:
$$E_{pose}=\frac{1}{TPK}\sum_{t,p}\sum_{k=1}^{K}\big\|J^{t}_{i,p,k}-J^{t}_{j,p,k}\big\|_2.$$
Footwork, Eq. (4): skate velocity in m/s (squared L2), height in m; normalizer Z = TP·K_foot:
$$E_{skate}=\frac{1}{Z}\sum_{t,p,k}\big\|v^{(i)}_{p,k,t}-v^{(j)}_{p,k,t}\big\|^{2},\qquad E_{height}=\frac{1}{Z}\sum_{t,p,k}\big|h^{(i)}_{p,k,t}-h^{(j)}_{p,k,t}\big|.$$

Stability (robotics-derived, McGhee & Frank 1968 [ref 29]), Eq. (5)–(6). CoM_xy is the ground-plane-projected center of mass; Q = convex hull of *grounded* foot joints; units m:
$$E^{(i)}_{stab}=\begin{cases}\min_{q\in Q}\lVert CoM_{xy}-q\rVert_2 & CoM_{xy}\notin Q\\[2pt]0 & \text{otherwise}\end{cases},\qquad E_{stab}=\frac{1}{TP}\sum_{t,p}\big|E^{(i)}_{stab,p,t}-E^{(j)}_{stab,p,t}\big|.$$
Singularity/breakdown: (a) if no foot is grounded, the grounded set is empty and Q is undefined (e.g., serve toss / jump apex); the paper specifies only the inside-Q case, leaving the empty-Q regime unhandled. (b) The metric is exactly 0 for a large class of poses (any balanced stance), so it has a degenerate point mass at 0 and is insensitive to *how much* margin exists — a boundary non-smoothness.

Spatial fusion / MLE consensus, Eq. (7)–(13) [PAGE 14]. Lift and covariance transport:
$$J^{(i)}_w=R^{(i)}_{c2w}J^{(i)}_c+T^{(i)}_{c2w},\qquad \Sigma^{(i)}_w=R^{(i)}_{c2w}\,\Sigma^{(i)}_c\,(R^{(i)}_{c2w})^{\!\top}.$$
Gaussian likelihood with depth-elongated Σ_c; closed-form precision-weighted mean:
$$P_{MLE}=\Big(\sum_{i=1}^{N}(\Sigma^{(i)}_w)^{-1}\Big)^{-1}\sum_{i=1}^{N}(\Sigma^{(i)}_w)^{-1}J^{(i)}_w.$$
Information units: precision Σ⁻¹ has units m⁻². Breakdown/singularity: P_MLE is undefined when the summed precision matrix ∑(Σ_w^(i))⁻¹ is rank-deficient — precisely the case where all cameras observe the scene along near-parallel depth axes, so the depth eigen-direction of every Σ⁻¹ is ~0 and the fused covariance diverges along depth. This is the formal statement of "depth is ill-posed" [PAGE 3] and explains the "pose drifting" along the depth axis [PAGE 8]. Model-to-world transform, Eq. (15): rigid inverse $T^{W}_{model}=[\,R_i^\top\ -R_i^\top T_i;\ 0\ 1\,]$; Eq. (17) is the per-person version of Eq. (13).

Temporal operator. Global offset Δt ∈ [−1000, 1000] ms chosen by grid search to minimize cross-view disagreement, with linear pose interpolation for missing timestamps [PAGE 16]. Units: ms; frame period at 60 Hz = 16.67 ms. Breakdown: grid-search minimizer can lock onto a spurious Δt when two views are near-symmetric (e.g., mirror-image court positions), and linear interpolation of joint angles ignores the S O(3) manifold structure of θ, introducing bias at high angular velocity.

Diversity operators. Pose-space coverage = |visited clusters|/k with k=500 PCA clusters [PAGE 18]; uniformity = normalized Shannon entropy $H/\log k$ (nats/bits, dimensionless). Per-joint articulation = entropy of each joint's angular histogram divided by documented anatomical range of motion, averaged over joints [PAGE 5]. Failure statistics: failure label D^m_f = 1 if error in top 30% for model m; Spearman r_s; logistic AUC; Jaccard $J=\lvert A\cap B\rvert/\lvert A\cup B\rvert$ [PAGE 20–23].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Scientific lineage is cleanly traceable through the reference graph. The representation layer descends from SMPL [ref 28, 2015] to SMPL-X [ref 32, 2019]; the paper is "agnostic to the representation" [PAGE 3]. Ground-truth lineage: Human3.6M [ref 13] (lab, 4 m × 3 m, ToF) → in-the-wild-but-instrumented 3DPW [ref 42, IMUs] and EMDB [ref 19, EM sensors] → contact-focused RICH [ref 11, laser scan] and HI4D [ref 51, 4D scans] → sports-specific SportsPose [ref 12] and AthletePose3D [ref 50] → the closest relative WorldPose [ref 14]. Multi-view lineage: CMU Panoptic Studio [ref 16, 500+ cameras] and AIST++ [ref 26] at the heavy end, OpenCap [ref 41, two smartphones] at the lightweight clinical end. CalTennis self-positions between OpenCap's controlled clinic and broadcast-scale WorldPose: consumer phones on ~$40 tripods [PAGE 4], differing in three stated ways [PAGE 4]: (1) accessible hardware, (2) disagreement-as-error-metric instead of triangulated pseudo-truth, (3) footwork/stroke articulation over locomotion.

The "multi-week traps" (persistent methodological pitfalls this lineage keeps re-incurring) are three. Trap 1 — pseudo-ground-truth laundering: prior multi-view work "use[s] additional views ... to generate ground truth rather than evaluate it" [PAGE 3]; triangulating views to fabricate labels bakes the triangulation prior into the supposed truth, so errors orthogonal to that prior become invisible. CalTennis deliberately refuses this. Trap 2 — nearest-frame comparison: comparing closest timestamps "conflate[s] model error with temporal misalignment" [PAGE 6], a subtle contaminant at millisecond athletic timescales. Trap 3 — single-clip shape priors: "in order to produce consistent trajectories, models often predict shape parameters once per video, based on the first frame" [PAGE 9]; this retro-causally propagates a frame-0 estimate across the entire clip, so an atypical opening pose biases the whole reconstruction — a temporal ancestor contaminating all descendants. Each trap has a documented failure signature in this very paper, which is the point of cataloguing them.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Reframed for a CV paper: this section concerns whether the evaluated models hold any implicit "model" of the true scene state and of each other's competence — and they do not, which is measurable. Three regimes:

Crisis-habit regression (prior collapse under stress). The models' dominant coping habit when depth is ambiguous is to regress to a learned prior rather than to evidence. Evidence: the first-frame shape prior [PAGE 9] and the fact that depth-elongated covariance means the likelihood is nearly flat along depth, so the posterior is prior-dominated in exactly the "crisis" (far, dynamic, occluded) frames. [PAGE 8]: high-disagreement frames "correspond to poses in motion, or in which the depth scale from one view is unclear"; low-disagreement frames are "stationary, 'neutral' poses." The habit is thus *situationally* triggered, not uniform.

Counter-trap (conditioning as a partial fix). PromptHMR's conditioning on 2D bounding boxes and keypoints is the countermeasure: it "achieves the highest multi-view consistency, likely due to its conditioning on 2D bounding boxes and keypoints" [PAGE 9] and leads translation/pose/PA-MPJPE [PAGE 7]. But this is a *translation* of the problem, not a solution — it anchors the root but inherits PromptHMR's worst-in-class foot-sliding (3.23 m/s) and stability (25 mm) and its heavy quadratic-in-frames runtime [PAGE 18–19].

Clock (temporal reference as adversarial variable). The literal clock is the ±1000 ms wall-time quantization [PAGE 6] resolved by Δt grid search; the recursive risk is that the *evaluation instrument itself* has a tunable degree of freedom (Δt) that, if mis-set, silently inflates or deflates every consistency metric. Because failures are model-intrinsic and disjoint (J ≤ 0.30, no k_f = 5 [PAGE 22]), no model has a correct "theory of mind" about where the others fail: an ensemble cannot know a priori which member to trust on a given frame, because trust is frame-specific and geometry-driven for some models (GVHMR/GENMO) and stochastic for others (TRAM re-ID/trajectory breaks [PAGE 21]).
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto (un-overridable). Monocular metric depth is information-theoretically underdetermined from a single view; no downstream layer can recover it without a prior or a second view. This is proven by the paper's own Eq. (13) breakdown (rank-deficient summed precision along a shared depth axis) and stated flatly: "Because estimating depth is ill-posed, most approaches run SLAM or camera calibration steps and learn body priors" [PAGE 3], and "Depth estimation is the biggest source of error" [PAGE 16]. Veto stands: any claim of reliable absolute depth/stride-length from these models is physically inadmissible.

Biomechanical veto (layer-coupling). Stability (Eq. 5) is *gated* by foot-contact correctness: Q is built from grounded feet, so an error in the lower-layer foot-ground classifier corrupts the upper-layer balance metric. Empirically foot height disagrees by 60–150 mm across views (Table 2 [PAGE 7]) and foot-contact detection is "inconsistent across frames and views" [PAGE 3]. Therefore E_stab inherits foot-contact error multiplicatively, not additively — a genuine cross-layer veto on any balance/weight-transfer inference. The paper concedes exactly this ordering of trust [PAGE 9]: a coach reading stroke technique can trust models "more than a clinician reading weight transfer, and far more than a biomechanist measuring ground reaction forces from video alone."

Weather/climate veto (weak, data-refuted). Naively one expects lighting/weather (glare, shadow, blur) to be a dominant failure driver, but the data veto that expectation: motion magnitude and acceleration are weak (|r_s| < 0.17) [PAGE 21], and blur / motion-blur columns in Table 7 are near-zero (e.g., PromptHMR blur r_s = 0.034, GENMO 0.091). The binding limitation is not weather per se but its downstream effect on *depth and scale* cues. The paper's actual climate limitation is scope, not physics: "limited to a single sport, climate, and surface type" [PAGE 9], with replication by other teams "not yet ... verified."
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three falsifiable, verifiable-reward scenarios, each with a checkable prediction and a veto condition.

Veto 1 — Depth-anchoring ablation. Counterfactual: if depth ambiguity is the dominant error mode (not pose estimation per se), then supplying ground-truth K_i and extrinsics (bypassing each model's own camera estimation) should sharply cut E_trans while leaving E_pose nearly unchanged, since E_pose is already depth-cancelled at ~11 cm [PAGE 8]. Prediction: E_trans falls toward E_pose's order of magnitude; ΔE_pose ≈ 0. Verifiable via the released code + calibration. Falsifier: if E_pose also drops materially, the "depth-only" hypothesis is vetoed. Supporting prior: Table 7 shows depth/camera-distance/scale dominate MPJPE but not PA-MPJPE (max |r_s| ≤ 0.21) [PAGE 21].

Veto 2 — Empty-hull stability spike. Counterfactual: during both-feet-airborne frames (serve toss, jump), Q is empty and Eq. (5) is undefined. Prediction: the empirical E_stab distribution is a point mass at 0 plus a heavy tail concentrated in airborne segments; conditioning the stability analysis on detected-contact frames should collapse the tail. Verifiable by segmenting foot-contact frames from the 60 Hz video. Falsifier: if E_stab is smooth and unimodal with no airborne concentration, the empty-hull breakdown claim is vetoed.

Veto 3 — Ensemble non-improvement on the (empty) hard-core. Counterfactual: because failures are model-intrinsic (J ≤ 0.30, no k_f = 5 [PAGE 22]), a median/max-consensus of the five models should reduce MPJPE on the ~65% of frames where ≥1 model succeeds, but there exists *no* universally-hard subset to fail on. Prediction: consensus MPJPE < min over single models on the bulk of frames; the k_f = 5 bin stays empty as more models are added (already 0.0% for four metrics [PAGE 22]). Verifiable from per-frame error tensors. Falsifier: emergence of a stable k_f = 5 population would veto the "failures are disjoint/model-intrinsic" thesis and imply shared hard scenes.

Cross-cutting honesty caveat (not a hedge — a scope bound): none of these scenarios concerns match outcomes, player ranking, or wagering; the source contains no such signal, and per Invariant 1 I generate none.
</RLVR_COUNTERFACTUAL_VETOES>

Summary: the paper's robust, physically-defensible results are (a) joint-angle/pose consistency is now decent (~11 cm cross-view), and (b) absolute depth, foot contact, and body shape remain unreliable across all five models, with failures that are model-intrinsic rather than scene-driven. The load-bearing caveats are that multi-view disagreement is only a lower bound and shares bias under collinear views (Eq. 13 singularity), the "coverage" metric is defined inconsistently across [PAGE 5] and [PAGE 18], and stability inherits foot-contact error. I flagged these rather than smoothing them over, and I did not extrapolate any outcome/prediction claim the data does not support.