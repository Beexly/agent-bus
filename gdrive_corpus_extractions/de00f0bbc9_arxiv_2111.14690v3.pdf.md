---
source: "arxiv_2111.14690v3.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 10
model: baidu/ernie-5.5-flash-preview:free
words: 4197
---

<NATIVE_REASONING>
The user is asking me to apply a specific analysis framework to a computer vision research paper (DanceTrack: Multi-Object Tracking in Uniform Appearance and Diverse Motion). The instructions come with a set of "STRICT INVARIANTS" and a required output format with specific XML sections.

Let me think about what's actually being asked here. The framework wants me to analyze this paper through a very specific lens involving:
- Formal LaTeX equations with units
- Page citations
- Multi-week traps
- Crisis habit regression
- RLVR counterfactual vetoes
- Physical/biomechanical/weather veto proofs

Now, let me be honest about what's going on. The framing "GSE + GSI Frontier Reasoning Foundry" with "BETTING LINES," "RLVR," "counterfactual vetoes," "predictive" analysis of what appears to be sports/trading-adjacent analysis — this seems to be a template designed for sports betting or prediction markets analysis, but here it's being applied to an academic paper about multi-object tracking (a computer vision dataset/benchmark paper).

There's an inherent mismatch. The DanceTrack paper is about computer vision — a benchmark dataset for tracking dancers. There are no "betting lines," there's no "crisis habit regression," there's no meaningful "weather veto" in the sports sense (though there is lighting/camera info), no "multi-week traps" in a betting sense.

The instructions themselves are somewhat contradictory with the source material. The invariants say "ZERO BETTING LINES" which is fine — I should never discuss betting. But the framework structure (RLVR counterfactual vetoes, retrocaudal genealogy, recursive theory of mind re: "crisis habit regression vs counter-trap vs clock") is heavily oriented toward prediction/betting/scouting contexts.

Let me think about how to respond authentically and helpfully.

The genuine task: Analyze this DanceTrack paper deeply. The paper IS analyzable. It contains:
- Formal equations (Eq 1: appearance similarity V, Eq 2: adjacent-frame IoU U, Eq 3: relative position switch frequency S)
- Page citations (I have all 10 pages)
- Historical lineage (SORT, DeepSORT, tracking-by-detection, Kalman filters, HOTA metrics)
- Genuine content about failure modes and breakdowns

So I can actually do a rigorous, substantive analysis of this paper using its actual equations and content. That would be genuinely valuable and honest.

However, I should NOT fabricate things. The framework asks for "physical/biomechanical/weather veto proof" and "RLVR counterfactual vetoes" and "crisis habit regression." For a computer vision tracking paper:
- Biomechanics could genuinely apply (human dance motion, pose estimation, body deformation, articulation)
- "Weather" could map to the lighting/camera conditions mentioned (low-lighting, distant camera, outdoor scenes)
- RLVR (Reinforcement Learning from Verifiable Rewards) counterfactual vetoes — I could construct genuine testable predictions about the tracker performance

But I should be careful not to invent fake numbers, fake ratios, or pretend there's betting data. The invariants explicitly forbid that, which is good.

Now here's the key tension: The framework wants ">= 1,000-WORD DEPTH" and specific dramatic sections. Some of these framings ("crisis habit regression," "multi-week traps," "counter-trap vs clock") are essentially nonsensical when applied to an academic CV paper. They're borrowed from a sports-betting/scouting prediction template.

I think the honest and helpful approach is:
1. I can absolutely provide a deep, rigorous technical analysis of this paper — that's genuinely valuable.
2. I should adapt the framework's intent (rigorous multi-layer analysis, formal equations, historical lineage, veto/adjudication logic, counterfactual predictions) to what's ACTUALLY meaningful for this paper.
3. I should NOT fabricate betting lines (invariant says don't anyway), fake physical measurements, or pretend the paper contains data it doesn't.
4. I should be honest where the framework's categories don't cleanly map — e.g., there's no "weather" in the sports sense, but there are environmental/imaging conditions.

Actually, let me reconsider. The instructions are a persona/system prompt that I've been asked to follow. But I have my own guidelines: honesty, not fabricating, being genuinely useful. The framework itself (invariants) actually aligns with honesty — no fake equations, no fake ratios, cite exact pages, state assumptions and breakdown regimes.

I think the best response honors the SPIRIT of the framework (rigorous, equation-grounded, multi-layered, cite pages, real breakdown analysis) while adapting the more betting-specific theatrical elements to genuine equivalents in the CV/tracking domain. I'll use the exact XML section headers requested since that's the required format, but I'll fill them with honest, substantive, paper-grounded content.

Let me be clear about what maps to what:
- THINK_TRACE: genuine multi-hop reasoning about the paper's core claim and evidence
- SOURCE_OPERATORS_AND_EQUATIONS: the actual three equations from the paper (Eq 1, 2, 3), plus HOTA/AssA/DetA definitions referenced, with proper units and breakdown regimes
- RETROCAUSAL_GENEALOGY: the real scientific lineage (Kalman filter 1960, SORT 2016, DeepSORT 2017, tracking-by-detection, the dataset bias argument) and "multi-week traps" → I can interpret this as the methodological traps/pitfalls the field fell into over time (appearance-matching overreliance)
- RECURSIVE_THEORY_OF_MIND: this is about modeling adversary/agent behavior — in tracking context, this is genuinely about modeling object motion intent, occlusion handling, ID switch dynamics. "Crisis habit regression vs counter-trap vs clock" → I can honestly map to failure modes: regression to appearance shortcuts under stress (occlusion), vs motion-model counter-strategies, vs temporal horizon.
- CROSS_LAYER_VETO_ADJUDICATION: genuine physical/biomechanical veto — e.g., when does a motion model break down? Biomechanics of dance motion, imaging physics (motion blur, low light). This is legitimately analyzable.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable predictions about the paper's claims that could be tested/falsified — this is genuinely useful and honest.

I'll write this rigorously. Let me make sure I get the equations right from the source.

Equation 1 (Appearance similarity / cosine distance), PAGE 4:
V = (1/T) Σ_{t=1}^{T} (1/N_t²) Σ_{i=1}^{N_t} Σ_{j≠i} (1 − cos⟨F(B_i^t), F(B_j^t)⟩)

where T = number of frames, N_t = number of objects on frame t, ⟨·⟩ = angle between vectors. Units: dimensionless (cosine distance ∈ [0,2], but for normalized features ∈ [0,2], typically small).

Equation 2 (IoU on adjacent frames), PAGE 4:
U = (1/(N(T−1))) Σ_{i=1}^{N} Σ_{t=1}^{T−1} IoU(B_i^t, B_i^{t+1})

Units: dimensionless, ∈ [0,1].

Equation 3 (Frequency of relative position switch), PAGE 4:
S = (Σ_i Σ_{j≠i} Σ_{t=1}^{T−1} sw(B_i^t, B_j^t, B_i^{t+1}, B_j^{t+1})) / (2N(T−1)(N−1))

where sw is indicator =1 if two objects swap left-right or top-down relative position on adjacent frames, else 0. Only overlapping objects counted. Units: dimensionless frequency.

The normalization factor 2N(T−1)(N−1): The number of ordered pairs (i,j) with j≠i is N(N−1). Over T−1 transitions. So N(N−1)(T−1) ordered transitions. But denominator has 2N(T−1)(N−1) = 2·N(N−1)(T−1). The factor 2 accounts for double-counting since a swap between i and j is counted in both (i,j) and (j,i) ordered pairs. So S ∈ [0,1] roughly, empirically ≤ ~0.02 per Figure 3(c).

Now the HOTA family (PAGE 5, ref [22]): HOTA combines DetA and AssA. HOTA = sqrt(DetA · AssA) integrated over association thresholds α. DetA = detection accuracy (TPR-like), AssA = association accuracy. MOTA and IDF1 also reported. These are the paper's evaluation metrics.

Let me now think about the oracle analysis (Table 2, PAGE 6):
- MOT17 with IoU only: HOTA 98.1, near perfect → association not the bottleneck
- DanceTrack with IoU only: HOTA 72.8, DetA 98.9 (detection fine), AssA 53.6 (association is bottleneck)
- Adding appearance or motion to IoU doesn't help on DanceTrack; appearance makes it worse (HOTA 68.0 when appearance added vs 72.8 IoU-only)

Benchmark (Table 3, PAGE 7): all SOTA trackers drop from MOT17 to DanceTrack. E.g., ByteTrack: MOT17 HOTA 63.1 → DanceTrack 47.7. OC-SORT best on DanceTrack at 55.1. Notably MOTA/DetA higher on DanceTrack than MOT17 for most → detection not the problem, association is.

Association strategy (Table 4, PAGE 7): with YOLOX detector. IoU 44.7, SORT 47.8, DeepSORT 45.8 (worse than SORT — appearance hurts), MOTDT 39.2, BYTE 47.1, OC-SORT 52.1 (best).

Motion models (Table 5, PAGE 7): None(IoU) 44.7, Kalman 47.8, LSTM 51.6. Motion models help.

Modalities (Table 6, PAGE 8): mask, pose, depth. Pose gives biggest boost (+3.7 HOTA). Depth from KITTI hurts due to domain shift.

Change log (PAGE 10): versions and updates.

Good, I have solid grounding. Now let me write.

I want to make sure I hit >= 1000 words total across the sections, with THINK_TRACE >= 400 words.

Let me be honest in framing: I'll note that this is a computer-vision benchmark paper and I'm mapping the analytical framework to genuinely applicable constructs (biomechanics of dance motion, imaging physics as the "weather/environmental" layer, falsifiable performance predictions as the RLVR vetoes). I won't fabricate betting data or fake numbers. This respects both the format request and honesty.

Let me write each section carefully and with genuine technical depth.

For THINK_TRACE (>=400 words): multi-hop derivation about the central claim — that DanceTrack isolates association as the bottleneck. I'll trace: detection metrics high (DetA, MOTA), association metrics low (AssA, IDF1), therefore the failure is in association, therefore appearance-cue reliance is the culprit, therefore motion modeling is the path. Gray-zone audit: where does this reasoning have holes? E.g., "IoU-only wins on DanceTrack oracle" seems to contradict "motion modeling helps" — reconcile. Also the domain-shift depth result. Also that oracle uses GT boxes so it's an upper bound; real detectors have errors that interact with association.

For SOURCE_OPERATORS_AND_EQUATIONS: state the three equations in LaTeX with units, assumptions, singularity/breakdown regimes, cite pages. E.g., Eq 3 normalization singularity when N=1 (no pairs), breakdown when N_t varies (Eq 1 uses N_t² per-frame normalization vs a global). HOTA definition and its regime.

For RETROCAUSAL_GENEALOGY: Kalman 1960 [ref 18], SORT 2016 [ref 3], DeepSORT 2017 [ref 34], the re-ID paradigm (JDE, FairMOT, QDTrack), HOTA 2021 [ref 22] correcting MOTA bias. The "multi-week trap" = the field's multi-year overreliance on appearance matching, benchmark bias in MOT15/17/20, driving datasets (KITTI, BDD100K, Waymo) with regular motion. This is genuine.

For RECURSIVE_THEORY_OF_MIND: In tracking, "theory of mind" maps to modeling the motion intent of targets to predict future position for association. Crisis = occlusion/crossover (frequent in DanceTrack per Fig 3c). "Habit regression" = trackers regress to appearance cue under stress. "Counter-trap" = motion models (Kalman/LSTM/OC-SORT observation-centric). "Clock" = temporal horizon / frame rate (20 FPS DanceTrack), how far ahead prediction must extrapolate.

For CROSS_LAYER_VETO_ADJUDICATION: genuine physical/biomechanical/imaging vetoes. Biomechanics: human articulation violates rigid-body/constant-velocity Kalman assumptions → motion model breakdown during sharp direction changes. Imaging: low-light (Fig 2b), motion blur at large-range motion, distant camera → small pixel extent → re-ID feature degradation. These "veto" naive approaches.

For RLVR_COUNTERFACTUAL_VETOES: 3 falsifiable predictions with testable outcomes:
1. If appearance is truly non-discriminative, then removing appearance from any tracker should not hurt (and often help) on DanceTrack, while on MOT17 it should hurt. (Supported by Table 2, Table 4 DeepSORT.) Prediction: an oracle test.
2. Motion model that captures non-linearity (OC-SORT observation-centric, LSTM) should outperform linear Kalman by a margin correlated with S (switch frequency). Falsifiable: correlate per-video ΔHOTA with per-video S.
3. Pose > mask > box in fine-grained benefit, because keypoints survive partial occlusion better. Falsifiable: measure association accuracy as a function of occlusion ratio.

I'll give concrete numeric predictions grounded in the tables and note how to falsify them.

Let me write it all now. I'll aim for rigor and honesty, and I'll keep the theatrical framing minimal but present since that's the requested format. I'll write in English (source is English).

Let me make sure the total is well over 1000 words. Let me draft.

One more consideration: I should not fabricate specific numbers not in the paper. When I give predictions, I'll frame them as predictions (testable), not as facts. Good.

Let me write.
</NATIVE_REASONING>

I'll analyze this genuinely. Note up front: DanceTrack (arXiv:2111.14690v3) is a computer-vision benchmark paper about multi-object tracking of dancers — it contains no betting/odds content, and the invariants rightly forbid inventing any. I'm mapping the framework's analytical intent onto what is actually verifiable in the source: its three formal metrics (Eqs. 1–3, PAGE 4), its oracle and benchmark tables (PAGE 6–8), and real breakdown regimes. Where the source does not support a quantity, I say so rather than fabricate one.

<THINK_TRACE>
The paper's central inferential chain is a bottleneck-isolation argument, and it is worth reconstructing as a multi-hop derivation because the hops are where it is strong and where it is soft.

Hop 1 — Decompose tracking into localization and association. The authors run an oracle experiment (Table 2, PAGE 6) that substitutes ground-truth boxes for detections, so DetA and MOTA are pinned near 100 by construction. This is the correct experimental design to separate the two error sources: if detection is fixed at ceiling, any residual error is attributable to association.

Hop 2 — Read the residuals. On MOT17, IoU-only association already yields HOTA 98.1, AssA 97.3 (PAGE 6). Association is essentially solved there. On DanceTrack, IoU-only gives DetA 98.9 but AssA 53.6, HOTA 72.8. The gap between ~99 detection and ~54 association is the paper's smoking gun: the failure is in association, not localization.

Hop 3 — Falsify the dominant cue. If association is the bottleneck and appearance matching is the incumbent solution, then adding appearance should help. It does not: on DanceTrack, adding appearance to IoU drops HOTA from 72.8 to 68.0 and AssA to 47.4 (Table 2). Appearance is not neutral; it is actively harmful. This is corroborated qualitatively by the t-SNE entanglement of re-ID features (Figure 4, PAGE 6) and quantitatively by the low cosine distance V (Eq. 1, PAGE 4; Figure 3a).

Hop 4 — Localize the remedy. In the full benchmark (Table 3, PAGE 7), detection metrics (MOTA, DetA) are frequently higher on DanceTrack than MOT17, yet HOTA/IDF1/AssA collapse (e.g., ByteTrack HOTA 63.1→47.7). So the prescription is: invest in association and motion, not detection.

Gray-zone audit — three tension points a careful reader must resolve:

(1) Apparent contradiction. The oracle says "IoU-only is best on DanceTrack" (Table 2), yet Table 5 says motion models (Kalman 47.8, LSTM 51.6) beat IoU-only (44.7). These are consistent once you note the layers: Table 2 uses ground-truth boxes (association is already near its ceiling with raw geometry, and *parametric* motion adds noise), whereas Table 5 uses YOLOX detections with real fragmentation, where temporal propagation recovers lost boxes. The benefit of motion modeling is conditional on detection imperfection.

(2) "DeepSORT worse than SORT" (Table 4: 45.8 vs 47.8). This is the appearance-is-harmful claim restated at the algorithm level; it is internally coherent with Hop 3, not an anomaly.

(3) Domain-shift contamination. The depth result (Table 6c) shows KITTI-derived depth *hurts* (−2.5 HOTA baseline) yet *helps* relative to the joint-trained baseline (+0.7 AssA). The sign flips depending on the reference model, which the authors attribute to KITTI being vehicle-dominant (PAGE 8). This is the softest evidence in the paper and is explicitly hedged; it should not be over-read.

Net: the argument survives audit. The one structural caveat is that the oracle upper-bounds association under *perfect* boxes, so it slightly understates how detection error and association error compound in the private setting.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All three operators are dimensionless dataset descriptors, not predictive estimators. I state each with its normalization, domain, and singularity regime.

1) Appearance similarity (cosine distance), Eq. (1), [PAGE 4], quoted verbatim:
"V = (1/T) Σ_{t=1}^{T} (1/N_t^2) Σ_{i} Σ_{j≠i} (1 − cos⟨F(B_i^t), F(B_j^t)⟩)"
- Units: dimensionless. For L2-normalized re-ID features, cos⟨·⟩ ∈ [−1,1], so the summand ∈ [0,2]; empirically small (Figure 3a shows bins ≲ 0.3). Lower V ⇒ higher confusability.
- Assumptions: features F(·) from a fixed pre-trained re-ID model [ref 26]; per-frame normalization by N_t² (ordered pairs, self-pairs contributing 0).
- Breakdown/singularity: N_t = 0 (empty frame) makes the inner term 0/0; the per-frame 1/N_t² means frames with few objects are up-weighted relative to a global 1/(Σ N_t)² scheme — a deliberate but consequential choice. V is a *static confusability* measure; it does not model temporal drift of F.

2) Adjacent-frame IoU, Eq. (2), [PAGE 4], quoted:
"U = (1/(N(T−1))) Σ_{i=1}^{N} Σ_{t=1}^{T−1} IoU(B_i^t, B_i^{t+1})"
- Units: dimensionless, U ∈ [0,1]. Low U ⇒ fast motion or low frame rate.
- Assumptions: fixed object count N across the window; identity-consistent boxes.
- Breakdown: requires 1-1 identity correspondence between frames, which is exactly what breaks under crossover/occlusion — so U is well-defined on *annotated* tracks but ill-posed at the moment association fails. Empirically DanceTrack ≈ MOT17/MOT20 (Figure 3b), which is the authors' control showing motion *speed* is not the anomaly.

3) Frequency of relative-position switch, Eq. (3), [PAGE 4], quoted:
"S = (Σ_i Σ_{j≠i} Σ_{t=1}^{T−1} sw(B_i^t, B_j^t, B_i^{t+1}, B_j^{t+1})) / (2N(T−1)(N−1))"
- sw(·) = 1 iff objects i,j swap left–right or top–down relative order (by box-center comparison) on adjacent frames, restricted to overlapping pairs; else 0.
- Units: dimensionless frequency. Denominator 2N(T−1)(N−1) = 2 × [# ordered pairs N(N−1)] × [transitions T−1]; the factor 2 corrects double counting since a swap registers for both (i,j) and (j,i). Hence S ∈ [0,1], empirically ≤ ~0.02 (Figure 3c).
- Singularity: N ≤ 1 ⇒ zero denominator (no pairs). Conditioning on *overlap only* means S measures crossover among spatially proximate pairs, not global trajectory churn. This is the paper's signature motion-diversity metric and the quantity its whole "non-linear motion" claim rests on.

Evaluation operators (referenced, not re-derived): HOTA [ref 22, PAGE 5], HOTA_α = √(|TP|·(|TP|+|FN|+|FP|)) integrated over association thresholds α; DetA = detection accuracy, AssA = association accuracy, with HOTA ≈ √(DetA·AssA). MOTA and IDF1 reported as legacy/association references. Units: all percentages.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage of the motion-vs-appearance tension, from the reference graph (PAGE 9–10):

- 1960: Kalman filter [ref 18] — the linear-Gaussian state estimator that becomes the default motion prior. Its constant-velocity assumption is the historical seed of every downstream failure mode in this paper.
- 2016: SORT [ref 3] operationalizes Kalman motion + Hungarian association, no appearance.
- 2017: DeepSORT [ref 34] grafts a deep appearance metric onto SORT. This is the fork in the road: the field thereafter drifted toward appearance.
- 2016–2021: the re-ID-dominant paradigm — JDE [ref 33], FairMOT [ref 41], QDTrack [ref 25] (contrastive, "highly sensitive appearance comparison"), then transformer trackers TransTrack [ref 29], TrackFormer [ref 23], MOTR [ref 39] passing tracklet features as queries. The paper's thesis is that this lineage over-fit to benchmark bias.
- 2021: HOTA [ref 22] corrects MOTA's detection bias — necessary precondition, because you cannot *see* that association is the bottleneck until the metric stops rewarding detection.
- 2022: OC-SORT [ref 5] returns to observation-centric, purely motion-based association for non-linear motion; it tops DanceTrack (Table 3, HOTA 55.1; Table 4, 52.1).

The "multi-week (here: multi-year) trap" is the benchmark-distribution lock-in: MOT15/17/20 [refs 19,24,11] and driving sets KITTI/BDD100K/Waymo [refs 15,38,30] feature distinguishable appearance and near-linear motion (PAGE 2 explicitly: driving motion is "even more regular ... lanes and traffic rules"). Methods optimized on these inherited an appearance shortcut that is invisible on-distribution. DanceTrack is engineered to be off-distribution for that shortcut: uniform appearance (V low) + high crossover (S high) while holding speed constant (U comparable). The genealogy is therefore not "new algorithm beats old" but "new *stressor* exposes a shared blind spot."
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Reframed honestly for tracking: "theory of mind" = the tracker's model of a target's future state to associate across frames; the "adversary" is the target's own non-linear motion plus co-occluding peers.

- Crisis (habit regression): DanceTrack's crisis regime is dense crossover + full occlusion (PAGE 3: full-body box for partial occlusion; fully occluded → dropped, identity preserved). Under this stress, appearance-trained trackers regress to their dominant learned habit — appearance matching — precisely when it is least reliable, producing the DeepSORT<SORT inversion (Table 4). This is habit regression under distribution shift: the policy defaults to its highest-certainty cue even when that cue's signal-to-noise has collapsed (t-SNE entanglement, Figure 4).
- Counter-trap: the deliberate counter-move is to demote appearance and elevate temporal dynamics. OC-SORT's observation-centric update (re-anchor on last real observation rather than a drifted Kalman prediction) and LSTM motion (Table 5, HOTA 51.6 vs IoU 44.7) are the counter-traps. They work by refusing the appearance reflex and instead propagating an explicit motion hypothesis through the occlusion gap.
- Clock (temporal horizon): DanceTrack runs 20 FPS (Table 1), vs MOT17's 30. The relevant "clock" is the extrapolation horizon across a fully-occluded gap: identity is preserved through occlusion (PAGE 3) but no box exists, so the motion model must integrate forward for k frames. Error grows with horizon and with the non-linearity captured by S. This yields the operative trade: a longer confident hold (clock tolerance) recovers fragmented tracks (the ByteTrack "high-tolerance" rationale, PAGE 7) but risks identity swaps when S is high. The optimal clock is a function of per-video switch frequency — long holds are cheap where S≈0 and dangerous where S is large. This is the closest honest analog to a "habit vs counter-trap vs clock" trilemma, and it is empirically decidable (see vetoes).
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical / biomechanical / imaging veto proof — the layers that can override an algorithmic preference:

1) Biomechanical veto on linear motion models. The Kalman/constant-velocity prior [ref 18] assumes near-constant velocity over the prediction step. Human dance motion is articulated and non-rigid: sharp direction reversals (spins, jumps, level changes; PAGE 4 "extremely diverse body gestures, frequent pose variation"). At a reversal, the true acceleration is large and the linear extrapolation error scales with the second derivative of position; the veto is that any purely linear predictor has provable bias at the reversal instant, which coincides with peak crossover (Eq. 3 sw=1). This *forces* the appearance-vs-motion adjudication: neither raw IoU (no temporal memory) nor constant-velocity Kalman (wrong at reversals) suffices; observation-centric or learned non-linear models are required.

2) Imaging-physics veto on appearance cues. Re-ID features F(·) degrade with (a) low photon count in low-light/distant-camera scenes (Figure 2b, PAGE 4), and (b) motion blur and small pixel extent under large-range motion. Both shrink the effective feature margin, which is exactly why V is low (Eq. 1) and why t-SNE features entangle (Figure 4). The veto: below a resolution/illumination threshold, appearance carries insufficient mutual information to disambiguate uniformly-dressed targets, so any appearance-weighted cost matrix has expected association error bounded away from zero. This is why DeepSORT cannot beat SORT here.

3) Cross-layer adjudication outcome. Detection is *not* vetoed — DetA/MOTA are high on DanceTrack (Tables 2, 3). So the binding constraint is association under biomechanical non-linearity and appearance information starvation. The adjudicated conclusion matches the paper's: fine-grained geometry (pose/segmentation, Table 6) and explicit non-linear temporal models are the admissible layers; appearance re-weighting and vehicle-domain depth (KITTI, Table 6c) are vetoed by domain shift.

Where the source is silent: DanceTrack provides only boxes + IDs, no pose/mask/depth (PAGE 5, "Limitation"). So any pose/biomechanical claim beyond bounding-box kinematics is inferred via joint-training proxies (COCO pose/mask), not measured natively — an assumption, not a measured quantity.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three falsifiable, verifier-checkable predictions derived strictly from the paper's data, each with a kill condition:

VETO 1 — Appearance ablation sign flip.
Claim: appearance cues are non-discriminative on DanceTrack and discriminative on MOT17.
Test: for any tracker, compare AssA with vs without its appearance term on both sets.
Prediction: ΔAssA_appearance ≤ 0 on DanceTrack, ΔAssA_appearance > 0 on MOT17.
Grounding: Table 2 (AssA 53.6 IoU-only → 47.4 +appearance on DanceTrack; MOT17 stays ~97+); Table 4 (DeepSORT 45.8 < SORT 47.8).
Kill condition: any appearance-augmented tracker that raises DanceTrack AssA above its appearance-free counterpart under oracle boxes.

VETO 2 — Motion-gain correlates with switch frequency S.
Claim: the benefit of a non-linear/temporal model over IoU-only scales with per-video S (Eq. 3).
Test: compute per-video ΔHOTA(OC-SORT − IoU) and per-video S; regress.
Prediction: positive correlation, r > 0; near-zero slope on low-S MOT17-style videos.
Grounding: Tables 4–5 aggregate margins (OC-SORT +7.4 HOTA over IoU; LSTM +6.9 over IoU) coexist with high DanceTrack S (Figure 3c) and near-zero MOT17 headroom (Table 2).
Kill condition: r ≤ 0, or large motion-model gains on videos with S ≈ 0 (which would indicate the gain comes from detection recovery, not motion modeling — an alternative explanation to rule out).

VETO 3 — Fine-grained cue ordering under occlusion.
Claim: association robustness orders pose > mask > box, and the ordering is driven by survival of discriminative structure under partial occlusion.
Test: bin association accuracy (AssA) by occlusion ratio; compare box vs +mask vs +pose.
Prediction: the pose-over-box margin widens as occlusion ratio increases (pose keypoints persist where box extent collapses); margins compress at low occlusion.
Grounding: Table 6 (pose +3.7 HOTA, mask +1.2/1.1, with the paper's stated mechanism: "when most areas of a human body are occluded, bounding box usually can not provide reliable output while the pose estimation model ... shows higher robustness," PAGE 7).
Kill condition: pose margin flat or shrinking with occlusion, or box matching pose at high occlusion.

Meta-prediction (integration): because detection is not the binding constraint (VETO-consistent across Tables 2–3), a tracker that keeps detection fixed and only improves association should show HOTA gains that appear almost entirely in AssA, not DetA. Falsifier: a DanceTrack method whose HOTA gain is carried by DetA rather than AssA would contradict the paper's core decomposition.
</RLVR_COUNTERFACTUAL_VETOES>

Bottom line: the paper's verifiable core is a clean bottleneck-isolation result — detection is near-solved on DanceTrack, association is not, appearance cues are net-negative under uniform appearance, and non-linear motion modeling is the admissible lever. Its softest evidence is the KITTI-depth domain-shift result, which it appropriately hedges. Every quantitative claim above is traceable to Eqs. 1–3 (PAGE 4), the oracle/benchmark tables (PAGE 6–8), or the reference lineage (PAGE 9–10); I have introduced no numbers the source does not contain.