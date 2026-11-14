---
source: "arxiv_2406.01011v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 16
model: deepseek/deepseek-v4.1-flash-1017
words: 7014
---

<NATIVE_REASONING>
We need answer user. Need comply exact XML sections >=1000 words, deep. Need analyze source paper. Need no betting lines. Need formal LaTeX, units, page citations, breakdown regimes. Need cite exact [PAGE N] and verbatim quotes. Need discuss GSE/GSI? They provided "GSE + GSI Frontier Reasoning Foundry" likely expect rigorous analysis. Need not mention odds/spreads/etc. Need sections exact:
<THINK_TRACE>... >=400 words
<SOURCE_OPERATORS_AND_EQUATIONS>...
<RETROCAUSAL_GENEALOGY>...
<RECURSIVE_THEORY_OF_MIND>...
<CROSS_LAYER_VETO_ADJUDICATION>...
<RLVR_COUNTERFACTUAL_VETOES>...

Need answer 1000+ words total. Need focus on paper. We can analyze multi-object tracking radar. Need formal equations from paper with units, assumptions, singular/breakdown regimes. Cite pages. Need exact verbatim quotes maybe from source. Need page markers. Need maybe mention equations 1-10. Need units: meters, m/s, covariance m^2, inverse covariance m^-2, Mahalanobis squared dimensionless, log det term with covariance units? Actually ln|S^{-1}| dimension issue; in practice normalized. Need discuss singularities: S positive definite; if singular (e.g., zero measurement noise R=0 and degenerate covariance) inverse fails; log det -inf if S singular; if P_D=0 log term undefined/infinite; etc. Need mention HOTA sqrt DetA*AssA dimensionless [0,1], etc. Need breakdown regimes: radar sparse, false positives, temporal gaps causing track init/ID switches, low detection P_D; Mahalanobis false-positive attraction; A-LL with unknown P_D/R constant; ego motion variance; SLAM high variance; etc.

Need include retrocausal genealogy: historical lineage from Kalman 1960, Hungarian 1955, Mahalanobis 1936, Reid 1979, CLEAR MOT 2008, HOTA 2020, AB3DMOT 2020, SimpleTrack 2021, CenterPoint 2021, CasTrack 2022, imaging radar VoD 2022, etc. Multi-week traps? Need infer "historical/scientific lineage & multi-week traps" perhaps from general? Need discuss traps: overfitting to labeled object positions, assuming radar-like lidar, ignoring ego-motion, using Mahalanobis without P_D/measurement uncertainty, comparing only HOTA/MOTA etc. Multi-week traps in research: accumulating 5 frames, not accounting label test set withheld, using NMS pre-filter after detector NMS causing false positives, etc. Need be careful no invented facts.

Recursive theory of mind: "Crisis habit regression vs counter-trap vs clock." Need interpret as in crisis behavior regression: under stress, agents revert to habits. For paper: tracker under radar sparsity reverts to false positive association (Mahalanobis) or greedy matching; counter-trap = probabilistic association with unknown uncertainty causing worse; clock = temporal horizon / track age / detection gaps. Need discuss.

Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Here source says weather clear midday, low velocity <=30 km/h, range 52.6m, vulnerable road users. Need physical veto: radar independent of lighting and adverse weather per paper but dataset only clear; cannot claim weather robustness from VoD. Biomechanical? Pedestrian low point count, 12.51% mAP, low detectability; cyclist 30.76; car 36.28. Need "veto" prove any claim that radar tracking is robust under weather is vetoed by dataset scope. Biomechanical maybe vulnerable road users' motion/gait point sparsity; not simulated. Weather veto: all scenarios midday clear [PAGE 7], so adverse weather claim unsupported. Physical: ego velocity <=30 km/h, range 52.6m, so high-speed/long-range not tested. Cross-layer: detection layer limits tracking; probabilistic association cannot overcome missing P_D/uncertainty [PAGE 13]. Need mention no sensor fusion.

RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. Need design source-grounded counterfactuals with measurable predictions. Need "verifiable RLVR" perhaps reinforcement learning with verifiable rewards? We can state scenarios: (1) Add radar measurement uncertainty R and P_D from detector; prediction A-LL/Mahalanobis recovers or not? But need verifiable. Need 3 scenarios with predictions and veto conditions based on metrics. E.g., Scenario A: If detector provides calibrated covariance and P_D, then A-LL should beat IoU on radar HOTA; veto if A-LL HOTA not > IoU by some margin? Need avoid unsupported numeric threshold? We can define predictions based on paper: paper says full power not exploited due to unavailable uncertainty and P_D; so counterfactual: supplying them should change association. Prediction: false-positive track retention drops, DetA/AssA better. Veto: if no decrease in false positive tracks or IDS. Need maybe specify metrics: DetA, AssA, HOTA. Scenario 2: Weather/illumination; since paper says radar independent of lighting/adverse weather but VoD clear midday; counterfactual: evaluate under rain/fog/night; prediction if true radar robustness, tracking degradation less than lidar? But not in paper; need "veto proof" maybe cross-layer. Need not invent exact numbers. But RLVR asks predictions. Could make qualitative with measurable conditions. Need include "verify using [PAGE] claims". Scenario 3: Ego-motion variance: replace labeled with high-variance SLAM; paper shows HOTA drops 89.8 -> 61.25 [PAGE 9]. Prediction: if variance reduced via smoothing, HOTA recovers toward labeled; veto if no correlation with IDS. Need 3 verifiable. Need mention no betting. Good.

Need ensure exact sections and word count. Need maybe total ~2500-3500 words. Desired oververbose 5. We need answer with only XML sections? The instruction says ">= 1,000-WORD DEPTH across these exact XML sections:" and lists. We should output those sections. Could include no preamble. Need include page citations [PAGE N] and verbatim quotes. Need quote exact. Need avoid fake ratios. Formal equations with LaTeX and units. Need mention assumptions. Need exact singularity/breakdown regimes.

Let's plan content.

Section THINK_TRACE >=400 words:
- Parse paper's core: comparing TBD MOT on imaging radar, VoD, PointPillars, ego motion, probabilistic association.
- Multi-hop derivation:
  1. Detection quality bottleneck: Table 2 radar mAP-3D car 36.28, pedestrian 12.51, cyclist 30.76; lidar higher. This propagates to tracking. Need cite [PAGE 9] "roughly a third of cars and cyclists are detected correctly, only 12.51% of pedestrians".
  2. Tracking pipeline five modules [PAGE 4]. Similarity and assignment. AB3DMOT uses IoU+HA+KF/CV; AB3DMOT-MH Maha+greedy; CasTrack APC+PCGDA+KF/CA; SimpleTrack NMS+GIoU+HA+two-stage; CenterPoint LoM+L2+greedy.
  3. Ego motion: Table 3 labeled 89.8 HOTA vs stationary 89.11 vs SLAM 61.25; low variance and low ego speed. [PAGE 9] quote "difference between tracking utilizing the static ego motion assumption and the labeled motion is only 0.69 percentage points".
  4. Radar-specific failures: false positives single-frame; variance; temporal gaps [PAGE 11].
  5. Probabilistic association: Maha worse all metrics except car MOTP; A-LL better than Maha often but worse than IoU. Because P_D and R unknown constant. [PAGE 12-13].
- Gray-zone audit: HOTA is geometric mean; MOTA can be negative; SimpleTrack radar MOTA -32.06 due to false positives; not monotonic. DetA and AssA tradeoff. Labeled positions not perfect due ego motion and label uncertainty; tracks missed. Need not overclaim.
- "clock": frame gaps e.g., pedestrian observed frames 236 and 242 but not between, 4 frames; CasTrack/SimpleTrack retain ID, AB3DMOT reinitializes. Need cite [PAGE 10].
- Audit: no adverse weather, only clear midday; no high speed; range 52.6m; so cannot generalize. Good.

Section SOURCE_OPERATORS_AND_EQUATIONS:
Need list equations with LaTeX and units. Equations:
1 Mahalanobis squared:
\(d^2_{\mathrm{Maha},t+1} = (d_{t+1}-H\hat\mu_{t+1})^\top S_{t+1}^{-1}(d_{t+1}-H\hat\mu_{t+1})\).
Units: if d, Hμ in m (for position components), S in m^2, S^{-1} m^{-2}, product dimensionless. If mixed state includes velocity, block units; Mahalanobis is dimensionless after consistent units. Assumptions: S positive definite; Gaussian innovation; measurement and state in same units; H linear observation; independent noise. Breakdown: S singular -> inverse undefined; near-singular -> numerical blowup; non-Gaussian/multimodal -> distance not calibrated; P_D not included.
2 innovation covariance:
\(S_{t+1}=H \hat\Sigma_{t+1}H^\top + R\). Units m^2. R measurement noise covariance m^2. Assumption additive Gaussian measurement noise; H linear.
3 predicted covariance:
\(\hat\Sigma_{t+1}=A\Sigma_t A^\top + Q\). Units m^2. Q process noise covariance; A transition matrix dimensionless/appropriate. Breakdown if Q=0 and A singular or covariance collapse -> S singular; if Q too large -> smearing/association ambiguity.
4 predicted mean:
\(\hat\mu_{t+1}=A\mu_t\). Units m or m/s depending state.
5 A-LL squared:
\(d^2_{A-LL}=d^2_{\mathrm{Maha}} + \ln|S_{t+1}^{-1}| + n\ln(2\pi) - 2\ln(P_D)\).
Need units note: Mahalanobis dimensionless; ln|S^{-1}| should be dimensionless via unit normalization; n dimensionless; P_D dimensionless probability in (0,1]. Breakdown: P_D=0 -> ln undefined/infinite; P_D->0 -> penalty; S singular -> ln|S^{-1}| undefined/-∞; if S not normalized, log-det depends on units; if P_D constant and R unknown, term constant (paper assumption) so A-LL reduces to Maha plus const; if detector miscalibrated, false positive attraction. Cite eq (5) [PAGE 7] and quote "Due to \(P_D\) and R being unknown... assumed to be constant." Need exact.
6 MOTA:
\(\mathrm{MOTA}=1-\frac{FP_T+FN_T+IDS}{num_{gt}}\). Units counts dimensionless. Range ≤1 no lower bound. Breakdown when denominator zero; high false negatives -> negative; not normalized by detection accuracy? Mention.
7 MOTP:
\(\mathrm{MOTP}=\frac{\sum_i d_i}{c}\). d_i overlap (paper says overlap) dimensionless if IoU; if distance could be m; in paper likely overlap. c matches. Breakdown c=0. 
8 DetA:
\(\mathrm{DetA}=\frac{|TP_D|}{|TP_D|+|FN_D|+|FP_D|}\). dimensionless [0,1]; denominator zero.
9 AssA:
\(\mathrm{AssA}=\sum_{b\in\{TP_D\}}\frac{|TP_A(b)|}{|TP_A(b)|+|FN_A(b)|+|FP_A(b)|}\). dimensionless; denominator zero per b. Need note notation.
10 HOTA:
\(\mathrm{HOTA}=\sqrt{\mathrm{DetA}\cdot\mathrm{AssA}}\). dimensionless [0,1]. Breakdown if DetA or AssA negative? They are nonnegative. If zero, HOTA zero. HOTA sensitive to either.
Need perhaps include PointPillars mAP? No equation. Maybe Table 2 values. Need mention detection probability \(P_D\) not available. Need include exact quotes from pages.

Need use page citations exact. Could quote:
- [PAGE 1] "The tracking algorithm must overcome the limited detection quality while generating consistent tracks."
- [PAGE 2] "Radar sensors are independent of the lighting conditions, do not suffer significantly from adverse weather conditions, and supply a direct measurement of the relative radial velocity of targets while still being cost-effective."
- [PAGE 6] "The state prediction of the current track introduces some uncertainty in the track position, attributed to the use of the KF. However, this uncertainty is not considered in the similarity determination process"
- [PAGE 7] "Due to 𝑃𝐷 and 𝐑 being unknown for the utilized dataset and object detection method in this work, it is assumed to be constant."
- [PAGE 9] Table 3 values.
- [PAGE 11] "CasTrack is the most robust against these effects, represented by the best performance on the radar HOTA score"
- [PAGE 13] "the full power of the Mahalanobis and A-LL distance could not be exploited due to the non-availability of the measurement uncertainty and probability of detection"
Need exact enough. Note source has weird characters; quote verbatim? We can quote with original text approximate. They asked exact [PAGE N] markers and verbatim quotes. Need ensure quotes are verbatim from given. We'll copy exact text. Avoid quoting unneeded.

Section RETROCAUSAL_GENEALOGY:
Historical lineage:
- Mahalanobis 1936 [PAGE 16 ref 24] generalized distance.
- Hungarian 1955 [PAGE 16 ref 27] assignment.
- Kalman 1960 [PAGE 16 ref 26].
- Reid 1979 [PAGE 16 ref 29] joint association probability.
- CLEAR MOT 2008 [PAGE 15 ref 11].
- HOTA 2020 [PAGE 15 ref 10].
- AB3DMOT 2020 [PAGE 15 ref 5], Chiu prob 3D MOT 2020/2021 [PAGE 15 ref 31/4], CenterPoint 2021 [PAGE 15 ref 8], SimpleTrack 2021 [PAGE 15 ref 7], CasTrack 2022 [PAGE 15 ref 6], VoD 2022 [PAGE 15 ref 1], Altendorfer 2016 A-LL [PAGE 15 ref 3].
Need "retrocausal" genealogy: how later radar MOT inherits assumptions from lidar/camera and classical tracking; the paper reverses causality? E.g., probabilistic association was derived for model-based tracking with known P_D/R (Reid/Altendorfer), but applied to non-probabilistic DNN detectors, so historical assumption fails. This is a retrocausal trap: using Mahalanobis/A-LL in DNN TBD without calibrated uncertainty. Multi-week traps: 
1. Benchmark trap: using labeled object positions as upper bound but ignoring label noise/ego-motion; Table 3 shows even labeled yields 89.8 AB3DMOT vs 98.78 SimpleTrack.
2. Metric trap: optimizing HOTA while MOTA can be negative; SimpleTrack radar MOTA -32.06.
3. Sensor transfer trap: lidar pre-processing (NMS) imported to radar fails.
4. Weather generalization trap: "independent of adverse weather" from radar physics but dataset clear.
5. Accumulation trap: 5-frame accumulation improves detection but may induce lag; paper uses it [PAGE 7].
Need maybe "multi-week traps" means over multiple weeks of research? We can phrase as traps that persist across experimental cycles. Good.

Section RECURSIVE_THEORY_OF_MIND:
"Crisis habit regression vs counter-trap vs clock." Need define:
- Crisis habit regression: When radar detections sparse/noisy, tracker falls back to habitual matching: AB3DMOT/CenterPoint rely on IoU/L2 and reinitialize after gaps; SimpleTrack NMS habit produces false positives; Mahalanobis habit assigns false positives to keep tracks alive. Under crisis (low P_D, high FP), regression is to keep tracks alive or detach? Need source: AB3DMOT fails when not detected multiple frames; CasTrack PCGDA adjusts search range; SimpleTrack two-stage keeps low-confidence. 
- Counter-trap: probabilistic association intended to counter uncertainty but can be counter-productive because unknown R/P_D and false positives with large covariance have small Mahalanobis; A-LL less pronounced. The "counter-trap" is assuming more math = better. Need cite [PAGE 6-7] Altendorfer limitation: detections sizeable mean offset and significant covariance have small Mahalanobis distance and might be matched even when measurement with smaller mean offset/variance present.
- Clock: temporal horizon/track age/detection gap. In paper, pedestrian observed frame 236 and 242, not in between (4 frames); CasTrack/SimpleTrack retain same track, AB3DMOT initializes new track. Life cycle management count-based vs two-stage. Need discuss recursion: tracker's beliefs about object existence depend on its own past associations; false positive association extends track life, causing IDS when true detection returns; low-confidence second stage reduces ID switches. 
- Theory of mind: model of detector's reliability: detector does not report uncertainty/P_D; tracker must infer. If it assumes high P_D, it trusts false positives; if low P_D, it drops true detections. CasTrack uses prediction confidence-guided association to adjust search radius. Need mention "clock" as latency/temporal validation: false positives single-frame vs lidar consistent over frames [PAGE 11]. A counter-trap would be to require multi-frame persistence for radar false positives; but then true sparse objects delayed. Need not propose too much. 
Need include exact section.

Section CROSS_LAYER_VETO_ADJUDICATION:
"Physical/biomechanical/weather veto proof." Need proof by veto:
- Physical sensor-layer veto: Radar point cloud sparsity limits detection; Table 2 radar mAP-3D pedestrian 12.51% vs lidar 50.81%; "roughly a third of cars and cyclists are detected correctly" [PAGE 8-9]. Veto any claim that association alone can solve radar MOT. Cross-layer: detection uncertainty not passed to tracker; Mahalanobis/A-LL cannot use full probability [PAGE 13]. 
- Biomechanical/vulnerable road user veto: pedestrians low point count; "relatively low number of targets per pedestrian, making them hard to detect" [PAGE 8]. Their motion/gait? Paper doesn't analyze biomechanics; veto any claim of biomechanical tracking robustness. Cyclists 30.76 mAP-3D, pedestrians 12.51; tracking DetA class-wise: pedestrian IoU 14.92, HOTA 21.67; car 39.92; cyclist 42.14 [PAGE 13 Table 5]. So pedestrian tracking weak. 
- Weather/illumination veto: Paper claims radar independent of lighting/adverse weather [PAGE 2], but dataset "All scenarios are recorded during midday under clear weather conditions" [PAGE 7]. Therefore cannot infer adverse-weather performance from this experiment. Also max speed 30 km/h and range 52.6m [PAGE 7]. Veto any high-speed/long-range/weather generalization. 
- Ego-motion physical veto: SLAM high variance causes HOTA 61.25 vs labeled 89.8 [PAGE 9]; low max ego velocity ~30 km/h keeps ego influence low [PAGE 9]. So physical platform and motion regime bound results. 
- Need "proof" perhaps state: If claim C requires condition X not satisfied by source, veto. Provide adjudication table? Could use bullet list.

Section RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions. Need "RLVR" maybe "reinforcement learning with verifiable rewards" but we can frame as counterfactual tests with measurable reward/verifier. Need avoid betting. Let's craft:

Scenario 1: Calibrated probabilistic detector.
Intervention: Add uncertainty heads to PointPillars or provide per-detection R and P_D (as paper future work [PAGE 14] "adding uncertainty heads [30]" and [PAGE 13] limitation). Verifier: repeat Table 5 radar class-wise; compute HOTA, DetA, AssA, IDS, false-positive track count. Prediction: A-LL distance should outperform IoU on overall HOTA and reduce false-positive track retention/IDS relative to Mahalanobis; Mahalanobis should remain vulnerable to large-covariance false positives. Veto: if A-LL HOTA ≤ IoU HOTA and no reduction in false-positive-associated tracks under calibrated inputs, then the paper's causal claim that missing P_D/R limits probabilistic association is falsified for this detector. Need not specific numeric threshold. Maybe prediction "A-LL > Maha" because A-LL includes log-det and P_D penalty; paper already sometimes better. Need say "at least for car and cyclist classes". Verifiable.
Scenario 2: Temporal persistence gating for radar false positives.
Intervention: Add multi-frame persistence filter or track score before association; since radar false positives single-frame vs lidar consistent [PAGE 11]. Prediction: reduces FP tracks and IDS, increases DetA/AssA/HOTA for AB3DMOT and CenterPoint, but may delay true sparse detections (pedestrian track initiation). Veto: if false-positive rate does not decrease or if recall/DetA drops without HOTA gain. Measurable. Need maybe not source? It's derived. Good.
Scenario 3: Ego-motion smoothing under SLAM variance.
Intervention: Use labeled or smoothed ego motion vs raw SLAM; paper Table 3. Prediction: HOTA recovers toward labeled (89.8) and IDS drops when ego-motion variance is reduced; if not, variance is not the dominant cause. Veto: if smoothing does not improve HOTA/IDS despite lower frame-to-frame variance. Need cite [PAGE 9].
Alternative scenario: Cross-sensor weather/night. But paper lacks. Could be scenario 3: Adverse weather counterfactual. Prediction radar tracking degradation less than lidar under rain/fog? But not verifiable from source; but can be future. Need "verifiable" maybe with dataset. However better to use paper's future work: radar radial velocity in KF. Intervention: feed radial velocity measurement into KF; prediction reduces position error/track IDS under missed detections; veto if no improvement. But paper didn't test. Yet source says advantage should be considered [PAGE 14]. That is a good counterfactual. Need 3 scenarios. Use calibrated uncertainty, radial velocity, ego motion smoothing. Or false-positive persistence. Need 3. Need predictions with metrics. Good.

Need ensure no betting lines. No mention odds, spreads, moneyline. Good.

Need maybe define "GSE/GSI" not needed. We can mention "source-grounded" and "gray-zone". Fine.

Need maintain exact XML tags. No markdown outside. Need answer with sections.

Need total >1000 words. We'll produce ~3000. Need include exact XML section names. The content can have bullets and equations. Need not escape XML? LaTeX may include < or >? We can avoid angle brackets. Use \le, \ge instead of <. XML content includes ampersands? Use \& maybe. Avoid raw & in text? XML allows? Better escape & as &amp; if used. But sections are custom; likely okay? To be safe, use "and" not &. Avoid < >. LaTeX uses \top, no angle. Use \{ \} okay. Quotes with [PAGE]. Use Unicode maybe. XML should be well-formed if we include \(...\) no issue. Use &? Avoid. Use "≤" maybe okay. Use \( \) okay. Need not include XML declaration.

Need ensure "verbatim quotes" exact. Let's extract exact from source:
- [PAGE 1] "The tracking algorithm must overcome the limited detection quality while generating consistent tracks." Yes.
- [PAGE 2] "Radar sensors are independent of the lighting conditions, do not suffer significantly from adverse weather conditions, and supply a direct measurement of the relative radial velocity of targets while still being cost-effective." Exact.
- [PAGE 6] "The state prediction of the current track introduces some uncertainty in the track position, attributed to the use of the KF. However, this uncertainty is not considered in the similarity determination process" exact.
- [PAGE 7] "Due to 𝑃𝐷 and 𝐑 being unknown for the utilized dataset and object detection method in this work, it is assumed to be constant." Source uses 𝑃𝐷 and 𝐑; we can quote with P_D and R? Verbatim? It says "Due to 𝑃𝐷 and 𝐑 being unknown..." We'll copy exact maybe with unicode. 
- [PAGE 8] "This is due to the high noise of the radar targets and a relatively low number of targets per pedestrian, making them hard to detect." exact.
- [PAGE 9] "difference between tracking utilizing the static ego motion assumption and the labeled motion is only 0.69 percentage points for the HOTA metric" exact? Source: "It can be observed that the difference between tracking utilizing the static ego motion assumption and the labeled motion is only 0.69 percentage points for the HOTA metric." Good.
- [PAGE 9] "the dataset's low maximum ego velocity of approximately 30km/h, keeping the influence of ego motion on the objects low." exact.
- [PAGE 10] "The pedestrian with the stroller on the far right of the image is observed in frame 236 and frame 242 but not in the frames in between." exact.
- [PAGE 11] "One is the larger number of false positives that only appear in single frames." exact.
- [PAGE 11] "CasTrack is the most robust against these effects, represented by the best performance on the radar HOTA score" exact.
- [PAGE 13] "the full power of the Mahalanobis and A-LL distance could not be exploited due to the non-availability of the measurement uncertainty and probability of detection" exact? Source: "However, this evaluation is limited since the full power of the Mahalanobis and A-LL distance could not be exploited due to the non-availability of the measurement uncertainty and probability of detection from the utilized object detector." Good.
- [PAGE 7] "All scenarios are recorded during midday under clear weather conditions." exact.
- [PAGE 7] "provided sensor data and labeled objects are limited to a range of 52.6m." exact? "Therefore, the provided sensor data and labeled objects are limited to a range of 52.6m." Good.

Need mention Table 3 values exact: Labeled 89.8, Stationary 89.11, SLAM 61.25. Table 4 values. Table 5 values. Need cite.

Need discuss units. Good.

Let's draft.

Need ensure section THINK_TRACE >=400 words. We'll aim ~700. All sections total >2000.

Potential issue: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." We won't.

Need maybe avoid "score" betting? It's fine; "score" as metric. No betting lines.

Need "exact singularity/breakdown regimes" for equations. We'll provide explicit.

Need "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX with units page citations. We can enumerate. Need not use fake ratios.

Let's compose.

Need maybe include "source operators" meaning operators: association, prediction, update, covariance, likelihood, metrics. We'll label.

Let's produce final only XML sections. Ensure no Markdown? Bullets okay inside XML. Need maybe use CDATA? Not necessary. Use Unicode ≤ maybe okay. Need escape ampersand. We'll avoid "&". Use "and". In LaTeX, use \(\mathrm{HOTA} = \sqrt{\mathrm{DetA}\cdot\mathrm{AssA}}\). The `\cdot` okay. Use `_` in LaTeX. Avoid raw `<`. Use "less than" words. Good.

Let's write. 
Need be careful with XML: `<` in text? Avoid "P_D < 1" use "P_D \in (0,1]". Avoid raw `<`. Use `>`? Avoid. Use words. Use `\[` okay. Use `&` in LaTeX matrices? Don't use matrices. Good. Use `\hat{\mu}`. Fine.

Let's final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a tracking-by-detection (TBD) study, not a sensor-fusion study and not a weather-robustness study. Its causal chain is: imaging-radar point-cloud sparsity and noise limit the detector; the detector’s misses and false positives limit the tracker; the tracker’s association and life-cycle rules determine whether sparse true detections are maintained or whether false positives are absorbed into tracks. The paper states this chain explicitly: “The tracking algorithm must overcome the limited detection quality while generating consistent tracks” [PAGE 1]. The experiments use the View-of-Delft dataset with lidar, 3+1D imaging radar, and annotations [PAGE 7], and the detector is PointPillars in OpenPCDet [PAGE 8]. The first multi-hop consequence is that radar tracking results cannot be interpreted as a pure association-algorithm contest: they are jointly constrained by radar detection quality. Table 2 shows radar mAP-3D values of 36.28 for car, 12.51 for pedestrian, and 30.76 for cyclist, versus lidar values of 49.95, 50.81, and 65.86 respectively [PAGE 9]. The paper explains the pedestrian case: “This is due to the high noise of the radar targets and a relatively low number of targets per pedestrian, making them hard to detect” [PAGE 8]. Therefore, any claim that a better association metric alone solves radar MOT is vetoed by the detection layer.

The second hop is the tracker architecture. The paper decomposes TBD into pre-processing, track prediction, similarity determination, track assignment, and life-cycle management [PAGE 4]. The five compared methods differ exactly at these interfaces: AB3DMOT uses prediction-confidence-score filtering, Kalman filter with constant velocity, IoU, Hungarian assignment, and count-based life cycle; AB3DMOT-MH swaps in Mahalanobis distance and greedy assignment; CasTrack uses Kalman filter with constant acceleration, aggregated pairwise cost, prediction-confidence-guided data association, and count-based life cycle; SimpleTrack uses NMS pre-processing, GIoU, Hungarian assignment, and two-stage life-cycle association; CenterPoint uses learned object motion plus constant velocity, L2 distance, greedy assignment, and count-based life cycle [PAGE 5, Table 1]. The important cross-layer point is that the similarity metric is not independent of the detector. A distance such as Mahalanobis is meaningful only when the innovation covariance \(S_{t+1}\) and detection probability \(P_D\) are calibrated; the paper explicitly assumes them constant because they are unknown: “Due to \(P_D\) and \(\mathbf{R}\) being unknown for the utilized dataset and object detection method in this work, it is assumed to be constant” [PAGE 7].

The third hop is temporal failure. The paper’s qualitative example is a pedestrian with a stroller observed in frame 236 and frame 242 but absent in between; CasTrack and SimpleTrack keep the same track, while AB3DMOT initializes a new track [PAGE 10]. This is a clock problem: the tracker’s existence belief must persist across detection gaps, but persistence also creates an opportunity for false-positive absorption. The paper says radar has “a larger number of false positives that only appear in single frames” [PAGE 11], whereas lidar false positives remain more consistent over frames. Therefore, a tracker that keeps tracks alive by matching any nearby detection is vulnerable to single-frame radar clutter. This is why the Mahalanobis experiment degrades: active tracks “frequently assign false positive detections to their trajectory when no true positive object detection is present” [PAGE 12]. The A-LL distance reduces but does not remove this effect, because the missing \(P_D\) and \(\mathbf{R}\) are replaced by constants.

The fourth hop is ego motion. Table 3 gives HOTA 89.8 for labeled ego motion, 89.11 for stationary ego assumption, and 61.25 for SLAM estimation on AB3DMOT with labeled object positions [PAGE 9]. The paper notes that the difference between stationary and labeled ego motion is “only 0.69 percentage points for the HOTA metric” and that the dataset’s “low maximum ego velocity of approximately 30km/h” keeps ego influence low [PAGE 9]. The SLAM result shows the opposite regime: higher frame-to-frame variance causes the Kalman filter to fail to estimate object speed accurately, producing many ID switches and false assignments [PAGE 9]. Thus, the gray-zone audit must separate low-variance ego motion from high-variance ego motion; a tracking result obtained under labeled or stationary ego motion does not transfer automatically to noisy online ego-motion estimation.

The fifth hop is metric interpretation. HOTA is \(\sqrt{\mathrm{DetA}\cdot\mathrm{AssA}}\) [PAGE 8], so it collapses if either detection accuracy or association accuracy is poor. MOTA is \(1-(FP_T+FN_T+IDS)/num_{gt}\) [PAGE 7], which has no lower bound and can become negative; Table 4 reports SimpleTrack radar MOTA of \(-32.06\) [PAGE 10]. Therefore, a tracker can have a moderate HOTA while having terrible MOTA due to false positives, or a high MOTP while retaining false tracks. The paper’s conclusion that CasTrack is best on radar HOTA and DetA is source-supported: “CasTrack is the most robust against these effects, represented by the best performance on the radar HOTA score” [PAGE 11]. But the deeper audit is that CasTrack’s advantage is not proof that probabilistic association is superior; the paper’s probabilistic experiments show that Mahalanobis is worse on all metrics except car MOTP, and A-LL is better than Mahalanobis in many cases but still limited by uncalibrated uncertainty [PAGE 12–13].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines the probabilistic association operators as follows. All covariance expressions assume a linear Gaussian state-space model, consistent SI units, positive-definite innovation covariance, and additive independent measurement and process noise. Where the paper treats \(P_D\) and \(\mathbf{R}\) as constants, the corresponding probabilistic terms are not identifiable from the detector output.

1. Squared Mahalanobis distance [PAGE 6, Eq. (1)]:
\[
d^{2}_{\mathrm{Maha},t+1}
=
\left(\mathbf{d}_{t+1}-\mathbf{H}\hat{\mu}_{t+1}\right)^{\top}
\mathbf{S}_{t+1}^{-1}
\left(\mathbf{d}_{t+1}-\mathbf{H}\hat{\mu}_{t+1}\right).
\]
Units: if the measured position components of \(\mathbf{d}_{t+1}\) and \(\mathbf{H}\hat{\mu}_{t+1}\) are in metres, then \(\mathbf{S}_{t+1}\) is in \(\mathrm{m}^2\), \(\mathbf{S}_{t+1}^{-1}\) is in \(\mathrm{m}^{-2}\), and the quadratic form is dimensionless. If the state includes velocity, the covariance blocks must be unit-consistent; the scalar result remains dimensionless. Assumptions: \(\mathbf{S}_{t+1}\) is symmetric positive definite; the innovation is approximately Gaussian; \(\mathbf{H}\) is the linear observation operator. Breakdown regimes: \(\mathbf{S}_{t+1}\) singular gives an undefined inverse; near-singular \(\mathbf{S}_{t+1}\) gives numerical blow-up and arbitrary associations; strongly non-Gaussian or multimodal detection errors make the distance non-calibrated; unmodeled \(P_D\) means the distance does not penalize missed-detection probability.

2. Innovation covariance [PAGE 6, Eq. (2)]:
\[
\mathbf{S}_{t+1}
=
\mathbf{H}\hat{\Sigma}_{t+1}\mathbf{H}^{\top}
+
\mathbf{R}.
\]
Units: \(\mathbf{S}_{t+1}\) and \(\mathbf{R}\) are in \(\mathrm{m}^2\) for position measurements; \(\hat{\Sigma}_{t+1}\) is the predicted state covariance in corresponding squared state units. Assumptions: measurement noise is additive and independent of state; \(\mathbf{H}\) is linear. Breakdown: \(\mathbf{R}=0\) with a degenerate predicted covariance makes \(\mathbf{S}_{t+1}\) singular; overly large \(\mathbf{R}\) inflates the gate and admits false positives; overly small \(\mathbf{R}\) makes the filter overconfident and rejects valid sparse radar detections.

3. Predicted state covariance [PAGE 6, Eq. (3)]:
\[
\hat{\Sigma}_{t+1}
=
\mathbf{A}\Sigma_t\mathbf{A}^{\top}
+
\mathbf{Q}.
\]
Units: squared state units; for position states, \(\mathrm{m}^2\); for velocity states, \((\mathrm{m/s})^2\). \(\mathbf{Q}\) is the process-noise covariance in the same squared units. Assumptions: linear transition \(\mathbf{A}\) and additive process noise. Breakdown: \(\mathbf{Q}=0\) plus a singular or contracting \(\mathbf{A}\) can collapse covariance and make association overconfident; very large \(\mathbf{Q}\) smears the predicted distribution and increases ambiguous matches.

4. Predicted state mean [PAGE 6, Eq. (4)]:
\[
\hat{\mu}_{t+1}
=
\mathbf{A}\mu_t.
\]
Units: state units, for example metres for position and metres per second for velocity. Assumptions: linear motion model. Breakdown: constant-velocity or constant-acceleration mismatch during manoeuvres produces biased predictions; the paper notes that constant velocity “results in a notable position error when an object remains unobserved over an extended duration” [PAGE 5].

5. Association log-likelihood squared distance [PAGE 7, Eq. (5)]:
\[
d^{2}_{A-LL}
=
d^{2}_{\mathrm{Maha}}
+
\ln\left|\mathbf{S}_{t+1}^{-1}\right|
+
n\ln(2\pi)
-
2\ln(P_D).
\]
Units: \(d^{2}_{\mathrm{Maha}}\) is dimensionless; \(n\) is dimensionless; \(P_D\) is a dimensionless probability in \((0,1]\). The log-determinant term is dimensionally meaningful only after unit normalization of the covariance or after working in a fixed unit system; otherwise it changes with the choice of metres versus centimetres. Assumptions: \(P_D\) is the true-positive detection probability for the track given the predicted object; \(\mathbf{S}_{t+1}\) is positive definite; the association likelihood is Gaussian. Breakdown regimes: \(P_D=0\) makes \(\ln(P_D)\) undefined and sends the distance to an infinite penalty; \(P_D\) approaching zero makes the term strongly negative or positive depending on sign convention and can dominate the Mahalanobis term; singular \(\mathbf{S}_{t+1}\) makes \(\ln|\mathbf{S}_{t+1}^{-1}|\) undefined; uncalibrated \(P_D\) and \(\mathbf{R}\) turn the “probabilistic” distance into a heuristic. The paper explicitly states: “Due to \(P_D\) and \(\mathbf{R}\) being unknown for the utilized dataset and object detection method in this work, it is assumed to be constant” [PAGE 7]. Therefore, in this implementation the \(P_D\) and log-determinant terms are not fully identifiable.

6. MOTA [PAGE 7, Eq. (6)]:
\[
\mathrm{MOTA}
=
1-\frac{FP_T+FN_T+IDS}{num_{gt}}.
\]
Units: all terms are counts; MOTA is dimensionless. Assumptions: ground-truth object count and track-error counts are consistently defined. Breakdown: \(num_{gt}=0\) is undefined; the metric has a strict upper bound below 1 and no lower bound, as the paper notes [PAGE 7], so large false-positive counts can produce negative values, as in SimpleTrack radar MOTA \(-32.06\) [PAGE 10].

7. MOTP [PAGE 8, Eq. (7)]:
\[
\mathrm{MOTP}
=
\frac{\sum_i d_i}{c}.
\]
Units: if \(d_i\) is an overlap, MOTP is dimensionless; if \(d_i\) were a positional error, it would be in metres. The paper describes \(d_i\) as overlap and \(c\) as the number of matches. Breakdown: \(c=0\) is undefined; MOTP can remain high while false tracks persist, so it is not a standalone quality proof.

8. Detection accuracy [PAGE 8, Eq. (8)]:
\[
\mathrm{DetA}
=
\frac{|TP_D|}{|TP_D|+|FN_D|+|FP_D|}.
\]
Units: counts cancel; dimensionless in \([0,1]\). Breakdown: zero denominator is undefined; class imbalance and sparse radar points make pedestrian DetA especially sensitive.

9. Association accuracy [PAGE 8, Eq. (9)]:
\[
\mathrm{AssA}
=
\sum_{b\in\{TP_D\}}
\frac{|TP_A(b)|}{|TP_A(b)|+|FN_A(b)|+|FP_A(b)|}.
\]
Units: dimensionless. Breakdown: a zero denominator for any \(b\) is undefined; AssA penalizes ID switches and false associations but does not by itself measure localization error.

10. HOTA [PAGE 8, Eq. (10)]:
\[
\mathrm{HOTA}
=
\sqrt{\mathrm{DetA}\cdot\mathrm{AssA}}.
\]
Units: dimensionless in \([0,1]\). Breakdown: if either DetA or AssA is zero, HOTA is zero; HOTA is a geometric compromise and does not distinguish a detector-limited failure from an association-limited failure. This is why the paper’s conclusion must be read with Table 2: radar pedestrian mAP-3D is only 12.51 [PAGE 9], and class-wise radar HOTA for pedestrian is only 21.67 under IoU association [PAGE 13, Table 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is classical tracking imported into learned 3D perception. Mahalanobis distance dates to 1936 [PAGE 16, ref. 24]; the Hungarian assignment to 1955 [PAGE 16, ref. 27]; the Kalman filter to 1960 [PAGE 16, ref. 26]; and joint probabilistic measurement-to-track association to Reid in 1979 [PAGE 16, ref. 29]. The A-LL distance used here is inherited from Altendorfer and Wirkert’s 2016 argument that association log-likelihood should replace bare Mahalanobis distance [PAGE 15, ref. 3]. The evaluation lineage is CLEAR MOT in 2008 [PAGE 15, ref. 11] and HOTA in 2020 [PAGE 15, ref. 10]. The modern TBD lineage is AB3DMOT in 2020 [PAGE 15, ref. 5], probabilistic 3D MOT by Chiu et al. in 2020–2021 [PAGE 15, refs. 31 and 4], CenterPoint in 2021 [PAGE 15, ref. 8], SimpleTrack in 2021 [PAGE 15, ref. 7], CasTrack in 2022 [PAGE 15, ref. 6], and the View-of-Delft imaging-radar dataset in 2022 [PAGE 15, ref. 1].

The retrocausal trap is that later radar MOT inherits assumptions from earlier lidar and camera MOT. Mahalanobis and A-LL were formulated for model-based tracking where measurement covariance and detection probability are available. In this paper’s DNN TBD pipeline, those quantities are absent; the paper states that “the full power of the Mahalanobis and A-LL distance could not be exploited due to the non-availability of the measurement uncertainty and probability of detection” [PAGE 13]. Thus, the historical operator is applied outside its original measurement contract. A second historical trap is the lidar habit of NMS-only pre-processing. SimpleTrack uses NMS pre-processing [PAGE 5], but the detector already uses NMS in its output stage; the paper reports that this “results in many false positive detections, which lead to a low DetA score” [PAGE 10]. A third trap is benchmark transfer: labeled object positions look like an upper bound, but even with labeled positions AB3DMOT HOTA is 89.80 while CasTrack is 97.25 and SimpleTrack is 98.78 [PAGE 10, Table 4], because ego-motion uncertainty, label uncertainty, and out-of-frame objects remain [PAGE 9–10]. A fourth trap is metric transfer: MOTA can be negative, so selecting a tracker by MOTA alone can reward a low-false-positive but overly conservative tracker or punish a high-detection tracker. A fifth trap is weather generalization: radar physics is described as independent of lighting and adverse weather [PAGE 2], but the dataset is “recorded during midday under clear weather conditions” [PAGE 7]. These traps persist across multi-week experimental cycles because each local metric can improve while the underlying measurement contract remains unfulfilled.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The crisis habit regression is visible when the tracker confronts sparse radar detections. AB3DMOT’s habit is short-horizon IoU matching with constant velocity and count-based deletion; when an object disappears for multiple frames, AB3DMOT “fails to assign objects to tracks when they are not detected for multiple frames” [PAGE 10]. CenterPoint’s habit is L2 plus greedy assignment and learned motion; it also struggles with temporal gaps [PAGE 11]. SimpleTrack’s habit is NMS pre-processing plus two-stage association; the NMS habit suppresses too little after the detector’s own NMS and produces false positives [PAGE 10]. CasTrack’s counter-habit is prediction-confidence-guided data association with a dynamic search range and constant acceleration [PAGE 5–6], which is why it is “the most robust against these effects” on radar HOTA [PAGE 11]. In crisis, the regression is not random: each tracker reverts to its fixed similarity and life-cycle prior.

The counter-trap is probabilistic association without calibrated probability. The intention is to counter uncertainty by using Mahalanobis or A-LL distance, but the paper shows that Mahalanobis is worse on all considered metrics except car MOTP [PAGE 12]. The mechanism is a recursive belief trap: a false positive with a large covariance can have a small Mahalanobis distance, so the track absorbs it, which keeps the track alive, which makes the next false positive more likely to be absorbed. The paper’s cited limitation is exact: detections with “a sizeable mean offset to the actual object and a significant covariance, have a small Mahalobis distance and might therefore be matched to a track” [PAGE 6–7]. A-LL adds a log-determinant penalty and a \(P_D\) term, which helps in many cases, but because \(P_D\) and \(\mathbf{R}\) are constant, the counter-trap is only partially defused [PAGE 7, 13].

The clock dimension is track age and detection gap. The pedestrian observed at frame 236 and frame 242 but not in between is the canonical clock test: CasTrack and SimpleTrack preserve identity across four missing frames, while AB3DMOT reinitializes [PAGE 10]. The tracker’s theory of mind about the detector must therefore include a temporal reliability model: radar false positives are often single-frame, while lidar false positives are more persistent [PAGE 11]. If the tracker believes a detection is reliable without temporal corroboration, it will absorb clutter; if it demands long persistence, it will drop sparse but true pedestrians. The correct recursive policy is not “always trust” or “always gate”; it is to estimate detector reliability, track age, and gap duration jointly. The paper’s two-stage SimpleTrack life cycle is one such counter-trap: it keeps unmatched tracks alive when a low-confidence detection matches, reducing identifier switches [PAGE 6], but its NMS pre-processing undermines the same goal by admitting false positives [PAGE 10]. The clock therefore adjudicates between crisis regression and counter-trap: a short gap rewards persistence, a long gap rewards deletion, and a single-frame radar false positive rewards skepticism.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical sensor-layer veto: the radar point cloud is too sparse for the detector to support association-only claims. Table 2 gives radar mAP-3D of 36.28 for car, 12.51 for pedestrian, and 30.76 for cyclist, compared with lidar 49.95, 50.81, and 65.86 [PAGE 9]. The paper states that “roughly a third of cars and cyclists are detected correctly” and only “12.51% of pedestrians” [PAGE 8–9]. Therefore, any claim that Mahalanobis, A-LL, or a better life-cycle rule can by itself solve radar MOT is vetoed: the detector’s false negatives and false positives enter the association gate before the tracker can act.

Biomechanical and vulnerable-road-user veto: pedestrian tracking is the weakest class because the sensor returns few points per pedestrian and the radar targets are noisy. The paper says “a relatively low number of targets per pedestrian, making them hard to detect” [PAGE 8]. Table 5 shows pedestrian radar HOTA 21.67, DetA 14.92, AssA 31.79 under IoU, versus car HOTA 39.92 and cyclist HOTA 42.14 [PAGE 13]. Therefore, a claim of biomechanical gait tracking or robust pedestrian intent inference is vetoed by the measurement layer; the paper does not estimate joint kinematics, gait phase, or body pose from radar. The only supported claim is bounding-box tracking of vulnerable road users at low speed, with pedestrian performance limited by point sparsity.

Weather and illumination veto: the paper’s background says radar is “independent of the lighting conditions” and does “not suffer significantly from adverse weather conditions” [PAGE 2], but the experiment is explicitly clear-weather midday data: “All scenarios are recorded during midday under clear weather conditions” [PAGE 7]. Therefore, this paper cannot prove rain, fog, snow, or night robustness. The correct adjudication is: radar physics suggests a weather advantage, but the VoD experiment does not test it, so any adverse-weather tracking claim is vetoed as an overgeneralization. The same veto applies to speed and range: the dataset is inner-city traffic “at low velocities of up to 30 km/h” and objects are “limited to a range of 52.6m” [PAGE 7]. High-speed, long-range, and highway tracking claims are outside the evidence.

Ego-motion physical veto: Table 3 shows HOTA 89.8 with labeled ego motion, 89.11 with stationary ego assumption, and 61.25 with SLAM estimation [PAGE 9]. The paper explains that SLAM has higher frame-to-frame variance and the Kalman filter cannot estimate object speed accurately, producing many ID switches [PAGE 9]. Therefore, a claim that the tracker is ego-motion-independent is vetoed for high-variance ego motion; the stationary result is only valid because the dataset’s maximum ego velocity is approximately 30 km/h [PAGE 9]. Cross-layer adjudication must therefore condition every tracking claim on: radar detection quality, ego-motion variance, object class point density, and temporal gap length. If any of these conditions is outside the source’s tested regime, the claim is not proven by this paper.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Calibrated probabilistic detector counterfactual. Intervention: add uncertainty heads or otherwise provide per-detection measurement covariance \(\mathbf{R}\) and detection probability \(P_D\), as the paper’s future work suggests: “adding uncertainty heads [30]” and allowing “a proper use of the probabilistic association distance” [PAGE 14]. Verifier: rerun the Table 5 radar class-wise comparison with identical tracks, splits, and metrics; measure HOTA, DetA, AssA, MOTA, MOTP, ID-switch count, and false-positive-track retention for IoU, Mahalanobis, and A-LL. Prediction: with calibrated \(\mathbf{R}\) and \(P_D\), A-LL should reduce false-positive track retention and ID switches relative to its constant-parameter version, and should outperform bare Mahalanobis on HOTA and AssA for car and cyclist classes. Veto: if calibrated A-LL fails to improve HOTA or AssA over IoU and fails to reduce false-positive-associated tracks, then the paper’s causal claim that missing \(P_D\) and \(\mathbf{R}\) limit probabilistic association is falsified for this detector.

Scenario 2: Radar radial-velocity fusion counterfactual. Intervention: feed the radar’s direct radial-velocity measurement into the Kalman filter or use it to cross-check the predicted motion, as the paper proposes [PAGE 14]. Verifier: compare the same tracker with and without radial-velocity input on radar sequences; measure position RMSE, MOTP, ID switches, and track fragmentation across detection gaps. Prediction: radial-velocity input should reduce speed-estimation error during missed detections and should lower ID switches for moving cars and cyclists, while giving little benefit to stationary or nearly stationary pedestrians. Veto: if radial-velocity input does not reduce speed error or ID switches in moving-object strata, then the proposed physics-informed improvement is not supported.

Scenario 3: Ego-motion variance counterfactual. Intervention: replace raw SLAM ego motion with labeled ego motion or with a smoothed ego-motion estimate that has lower frame-to-frame variance. Verifier: repeat the Table 3 AB3DMOT labeled-object-position experiment and measure HOTA, DetA, AssA, MOTA, and ID switches. Prediction: HOTA should recover from the SLAM value of 61.25 toward the labeled value of 89.8, and ID switches should fall, because the paper attributes the SLAM degradation to higher variance and Kalman-filter speed-estimation failure [PAGE 9]. Veto: if lower ego-motion variance does not improve HOTA or ID switches, then ego-motion variance is not the dominant causal factor in that regime. These three counterfactuals are verifiable because each has a pre-specified intervention, a measured outcome, and a falsification condition tied to the paper’s own operators and metrics.
</RLVR_COUNTERFACTUAL_VETOES>