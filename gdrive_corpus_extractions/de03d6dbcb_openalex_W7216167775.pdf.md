---
source: "openalex_W7216167775.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6352
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about "Unified Player Identification Across Field Sports Survey And Proposed Model" by Supreet Kaur and Dr. Dharamveer Sharma. The paper is about player detection in sports using computer vision techniques (face recognition, jersey number/bib detection, location tracking).

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided a "DRIVE SOURCE" path but then provided the full source text inline. I should cite page markers [PAGE N] from the inline text which clearly marks pages 1-18.

Let me structure this carefully.

First, let me understand the paper:
- Title: Unified Player Identification Across Field Sports Survey And Proposed Model
- Authors: Supreet Kaur, Dr. Dharamveer Sharma
- Journal: International Journal of Environmental Sciences, Vol. 11 No. 6, 2025
- Pages: 18 (2450-2467)

Key content:
1. Abstract: Player detection important for sports images/video analysis. AI used for game prediction, performance analysis, highlight generation, assistant coaching. Conventional techniques detect face/body then face recognition. Popular systems recognize jersey number/bib. Approaches track players based on locations. Proposed simple and robust automatic technique to estimate location of racing bib. Uses bib number and facial features. Tested on marathon photos. Achieves state-of-the-art results up to 97%.
2. Introduction: Sports industry growing. Automated detection/tracking expands. Systems use face recognition [1-6], jersey numbers/bib [9-20], tracking [21-33]. Location tracking [24][27]. Light bibs using VLC [33].
3. Related work: Mahmood et al [4] face detection in audience images, age/score/nationality. Viola-Jones [34], HOG, Haar [35], MTCNN [36], FaceNet [37], HOG+SVM [38]. Ben-Ami et al [18] marathon athlete bib numbers. Poignant et al [13] text videos. Shivakumar et al [15] multi-modal torso and text. Wrońska et al [7] and Liu et al [8] athlete numbers and face. Messelodi et al [14] preprocess image for text background.
4. Table 1: Various techniques.
5. Section 3: Various Approaches.
   - 3.1 Conventional Approach face recognition (Algorithm 1). Liu et al [1] American football. Haq et al [2] cricket. Ren et al [3] table tennis postures. Mahmood et al [4] augmented reality baseball.
   - 3.2 Conventional Approach Jersey Numbers/Bib number (Algorithm 2). Liu et al [8] JEDE. Rayhan et al [9] CNN racing bib. Messelodi et al [14] scene text recognition, black-on-white, Tesseract OCR. Shivakumar et al [15] HOG+SVM torso, Grab Cut, pictorial structural model, HOG text detection. Wrońska et al [7] contours, Tesseract OCR, face detection color quantization. Ben-Ami et al [18] Haar face detector, torso estimation formula (face height x 7/3 face width, 0.5 face height below face), stroke width transform (SWT), Tesseract OCR. F-score 0.57-0.63.
   - 3.3 Detecting location of player (Algorithm 4). Khan et al [19], Ballan et al [6], Bialkowski et al [24], Sebastian et al [20] spatial constellation histogram + CNN, accuracy 0.69 to 0.82.
   - 3.4 Other Approaches: Fu et al [33] LightBib VLC, average recall close to 90%.
   - 3.5 Table 2 comparative analysis.
6. Section 4: Novel Technique.
   - Algorithm: Face detection -> torso estimation -> bib localization -> OCR -> if bib not found use facial features.
   - Torso estimation formulas:
     - X_torso = X_face - W_face/2 ... (1)
     - Y_torso = Y_face + H_face ... (2)
     - W_torso = 2*W_face ... (3)
     - H_torso = 3*H_face ... (4)
   - CNN for text localization with 3 convolutional layers. Equation (5): G[m,n] = (f*h)[m,n] = sum sum h[j,k] f[m-j, n-k]
   - Trained on 16,000 images torso dataset. Accuracy 92.97% at 153 epochs.
   - Step 2: Facial features using FaceNet. 128-dimensional embedding. Triplet loss (anchor, positive, negative).
   - Step 3: Case 1 bib found -> Tesseract OCR.
   - Step 4: Case 2 bib not found -> facial features compared.
7. Section 4.2 Dataset and Evaluation: 30,000 images from marathon event. JPEG format. Duplicates removed. Bib localization training: 16,000 images. Tested on 4,000 images.
8. Section 4.2 Results and Discussion (mislabeled as 4.2 again): Table 3 comparison.
   - Haq et al [2] 2024: Haar + AdaBoost + LDA + PAL-AdaBoost, 91% accuracy.
   - Liu et al [8] 2023: 2-stage neural network, 87.9% player detection, 91.7% jersey number recognition.
   - Liu et al [12] 2022: FCN for 2-digit jersey, 91.65% AP.
   - Rayhan et al [9] 2020: YOLOv3, 83.0% precision, 81.5% recall, 82.2% F1.
   - Liu et al [16] 2019: R-CNN, 94.09% digit accuracy.
   - Proposed Work 2025: MTCNN face, 2D CNN bib localization, FaceNet face recognition, 97% player detection, 96% player recognition.
9. Conclusion: Limitations - depends on face detection, OCR, face recognition. Cases where face occluded but bib visible - athlete cannot be detected since face will not be detected (wait, this seems like a limitation of their system because they detect face first). Future work to overcome such scenarios.

Now, the sections I must produce:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). This should analyze the paper deeply, multi-hop reasoning, identify gray zones, contradictions, limitations. E.g., the proposed system detects face first (Step 1), then estimates torso, then bib. But conclusion says "cases have been found where face occluded but bib is clearly visible. In this situation athlete cannot be detected since face will not be detected." This is a fundamental architectural flaw - face-first dependency creates a single point of failure. Also Table 3 shows 97% detection but dataset is 30,000 marathon images - single domain, not "unified across field sports" despite title. The torso estimation formula assumes fixed proportions (2x width, 3x height of face) which breaks with varying poses, occlusions, camera angles. MTCNN requires frontal/near-frontal faces (Mahmood et al [4] noted this). FaceNet 128-dim embeddings. Triplet loss. The paper conflates "player detection" and "player recognition" metrics (97% vs 96%).

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. I need to reproduce the actual equations from the paper with proper LaTeX, cite pages.
- Equation (1): X_torso = X_face - W_face/2 [PAGE 12]
- Equation (2): Y_torso = Y_face + H_face [PAGE 12]
- Equation (3): W_torso = 2*W_face [PAGE 12]
- Equation (4): H_torso = 3*H_face [PAGE 12]
- Equation (5): G[m,n] = (f*h)[m,n] = Σ_j Σ_k h[j,k] f[m-j, n-k] [PAGE 13]
- FaceNet: 128-dimensional Euclidean embedding space. Triplet loss: anchor, positive, negative. [PAGE 14]
- CNN: 3 convolutional layers, stride, pooling. [PAGE 13]
- Dataset: 30,000 images marathon, JPEG. 16,000 training bib localization, 4,000 test. [PAGE 16]
- Metrics: 97% player detection, 96% player recognition. [PAGE 16]
- Comparisons from Table 3 with citations.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Trace lineage: Viola-Jones 2004 [34], FaceNet 2015 [37], Tesseract OCR 2007 [41], MTCNN 2016 [36], R-CNN, YOLOv3. Multi-week traps: dataset drift (marathon-only vs multi-sport), illumination variation, occlusion, jersey swapping (Wrońska et al double verification), temporal consistency across weeks of a season, re-identification after kit changes, etc.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a strange section but I need to interpret it in context of the paper/system. "Crisis habit regression" - when system fails (face occluded), does it regress to bib-only? But bib-only fails if bib occluded. "Counter-trap" - adversarial conditions (folded jersey, sponsor prints confused with numbers, jersey swapping). "Clock" - temporal tracking across frames, real-time constraints, frame rate (Vats et al 30 fps [25]). Crisis habit: system defaults to face detection first, which is the failure mode under occlusion.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical: camera resolution, motion blur, occlusion, pose. Biomechanical: player posture, torso visibility, arm movement covering bib. Weather: illumination, rain, fog, low luminance. Veto conditions: face not visible -> system fails (per conclusion). Bib folded/obscured -> OCR fails. Jersey swapped -> identity error. These are hard vetoes.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some counterfactual framework. I'll interpret as verifiable counterfactual veto scenarios where the system would fail, with predictions.
1. Scenario: Face fully occluded (helmet, hands, crowd), bib visible. Prediction: System outputs "not detected" despite bib being readable; veto triggers because Step 1 face detection fails before torso estimation.
2. Scenario: Bib folded/obscured by arm motion, face visible but low resolution (<20x20 pixels). Prediction: FaceNet fails (LBP/ AdaBoost limitations cited, face size below 20x20 problematic), OCR fails; double veto -> no identification.
3. Scenario: Two teammates swap jerseys/bibs mid-event. Prediction: System associates face features with wrong bib number, contaminating the trained dataset (Step 3 saves facial features to bib number x), causing persistent misidentification until dataset retraining.

I must ensure >= 1000 words total across sections. The THINK_TRACE alone must be >= 400 words.

Word count check: I'll aim for substantial depth.

No betting lines. No toy equations. Use real equations from source with [PAGE N] citations.

Let me draft carefully.

THINK_TRACE (>=400 words):
- Multi-hop derivation: The paper's pipeline is face -> torso -> bib -> OCR -> identity; fallback face -> FaceNet -> SVM. Each hop depends on the previous. Hop 1 (MTCNN face detection) is a hard gate. Hop 2 (torso estimation) uses fixed anthropometric ratios from face bounding box. Hop 3 (CNN text localization) searches within estimated torso. Hop 4 (Tesseract OCR) reads digits. Hop 5 (FaceNet) produces 128-d embeddings. Hop 6 (SVM) classifies.
- Gray-zone audit: The title claims "Unified Player Identification Across Field Sports" but evaluation is exclusively marathon bibs (30,000 images, one event). The 97% detection/96% recognition are not decomposed by sport, pose, or illumination. There is an internal contradiction: the abstract claims robustness to "varied player counts in varied positions and illumination settings," yet the conclusion admits the system cannot detect an athlete if the face is occluded even when the bib is clear—because the architecture mandates face detection first (Algorithm 3, Step 2; Section 4, Step 1). This creates a single-point-of-failure topology. The torso formulas (Eq. 1-4) assume a rigid proportional relationship between face and torso (W_torso = 2*W_face, H_torso = 3*H_face) that breaks under non-frontal poses, occlusion, or extreme camera angles where the face bounding box is unreliable. MTCNN itself requires frontal or near-frontal faces for high accuracy (Mahmood et al. [4], [PAGE 5]), so profile views degrade the entire cascade. Table 3 compares against methods tested on cricket, soccer, basketball, NHL, etc., but the proposed work's marathon-only dataset cannot legitimately claim state-of-the-art across field sports without cross-domain validation. The "97%" figure conflates detection (localization) with recognition (identity), and no confidence intervals or variance across epochs beyond 153 are reported. Multi-week trap: a model trained on one marathon's lighting and bib design will not generalize to a different event weeks later without retraining, because bib placement, font, color contrast, and illumination distribution shift.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with LaTeX and page citations. Include dataset sizes, metrics, computational details. Mention breakdown regimes.

RETROCAUSAL_GENEALOGY:
Trace: Viola & Jones 2004 [34] Haar cascades; Wilson et al. [35] Haar classifiers; Zhang et al. 2016 MTCNN [36]; Schroff et al. 2015 FaceNet [37] triplet loss, 128-d embedding; Smith 2007 Tesseract [41]; Liu & Bhanu 2019 Pose-guided R-CNN [16]; Rayhan 2020 YOLOv3 [9]; Ben-Ami 2012 SWT [18]; Fu et al. 2015 LightBib VLC [33]. Historical lineage moves from holistic face -> local text -> multimodal fusion -> hardware-assisted VLC. Multi-week traps: dataset drift across a season, kit changes, lighting drift, player re-identification after haircut/aging (embedding drift), camera calibration changes (Farin et al. [31]).

RECURSIVE_THEORY_OF_MIND:
Interpret as: When the system faces a crisis (occlusion), what is its habitual regression? It regresses to face-first gating, which is precisely the failing component. Counter-trap: adversarial conditions like sponsor print confusion, jersey swaps, partial bib occlusion cause OCR to output wrong digits; the system then saves wrong face embeddings to wrong bib IDs (dataset poisoning). Clock: real-time constraints (frame rate, inference latency), temporal consistency across frames (temporal frames suggested by Shivakumar et al [15] but not implemented), tracking IDs across a game.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer veto: resolution below 20x20 pixels (AdaBoost better than PCA/LBP but still limited), motion blur, occlusion, camera angle (profile vs frontal), illumination (low luminance). If face not visible, system fails [PAGE 17 conclusion].
- Biomechanical layer veto: torso not visible (back turned, arms crossed over chest), bent posture invalidating rectangular torso estimation Eq 1-4, jersey number overlapping sponsor prints, folded jersey.
- Weather/environmental layer veto: rain, fog, uneven lighting, shadows on bib causing OCR failure, night games with artificial lighting creating glare.
Veto proof: No layer can compensate when upstream gate (face detection) fails because architecture lacks a bib-first standalone path in the inference algorithm (despite conclusion acknowledging need for future work).

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
1. Counterfactual: Face occluded (e.g., player wears cap/helmet, hand over face, or crowd obstruction), bib fully visible and legible. Veto condition: Algorithm Step 1 face detection returns null -> torso estimation Eq 1-4 cannot execute -> no bib localization -> identity = null. Prediction: System reports athlete absent despite bib being readable; false negative rate approaches 100% for fully occluded faces.
2. Counterfactual: Face visible but below 20x20 pixels (distant zoom-out), bib legible. Veto condition: MTCNN detection confidence drops; FaceNet embedding unreliable (LBP fails below 20x20 per Mahmood et al [40] cited [PAGE 6]). Prediction: OCR may read bib correctly but system cannot associate face to bib for dataset formation; if using bib-only path, recognition succeeds, but the proposed architecture forces face first so it may still fail. Prediction: identification accuracy collapses below 50% at sub-20px face scale.
3. Counterfactual: Jersey/bib swap between two athletes mid-event. Veto condition: Step 3 saves facial features of Athlete A under bib number of Athlete B; dataset contamination. Prediction: Subsequent queries for Athlete B return Athlete A's face embedding; misidentification persists until manual dataset purge, error rate bounded by swap frequency.

Now I need to write it all with XML tags exactly as specified. Total words >= 1000. THINK_TRACE >= 400.

I need to be careful about exact page citations. The text has page headers like [PAGE 1 of 18] etc. I will cite [PAGE N] where N is the page number.

Let me map equations to pages:
- Eq 1-4: [PAGE 12] (the torso estimation formulas are on page 2461 which is page 12 of 18). Yes, Page 12 shows equations (1)-(4).
- Eq 5: [PAGE 13] (page 2462).
- FaceNet 128-dim: [PAGE 14].
- Dataset 30,000 / 16,000 / 4,000: [PAGE 16].
- Table 3 results: [PAGE 16].
- Conclusion limitation face occluded: [PAGE 17].
- MTCNN three stages: [PAGE 12].
- Ben-Ami torso formula (face height x 7/3 face width): [PAGE 8] mentions this older formula, but the proposed work uses Eq 1-4 on page 12. I should distinguish. The proposed work uses Eq 1-4. Ben-Ami [18] uses 3.(face height) X 7/3.(face width) at 0.5.(face height) below face [PAGE 8].

I will cite precisely.

Now word count. I'll write generously.

Let's begin composing.

Important: No mention of betting. No invented ratios like Force/Fatigue. All equations must be from source.

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

I will ensure each section is substantial.

Let me draft THINK_TRACE first (~500 words):

The proposed architecture is a serial cascade: (1) MTCNN face detection, (2) torso bounding-box estimation via Eqs. (1)–(4), (3) 2D-CNN bib/text localization, (4) Tesseract OCR digit recognition, (5) identity resolution by bib match or, on bib failure, FaceNet 128-dimensional embedding compared via SVM against a per-bib face gallery. Because Step 1 gates every downstream operation, the graph has a single point of failure: if MTCNN returns no face, the torso is never estimated, the CNN search region is never defined, and the OCR engine never executes, even when the bib is perfectly legible. This contradicts the abstract's claim of robustness across "varied positions and illumination" and is explicitly confirmed in the conclusion: "cases have been found where face occluded but bib is clearly visible. In this situation athlete cannot be detected since face will not be detected" [PAGE 17]. 

The torso estimation Eqs. (1)–(4) impose a rigid anthropometric prior: X_torso = X_face − W_face/2, Y_torso = Y_face + H_face, W_torso = 2·W_face, H_torso = 3·H_face [PAGE 12]. These equations assume the face bounding box is reliable and that torso width and height scale linearly with face dimensions. This breaks under profile views, extreme camera angles, occlusion of the jaw or forehead, motion blur, and athletes bending or jumping during competition. MTCNN itself requires frontal or near-frontal faces for high accuracy [PAGE 5], so the cascade inherits that angular constraint. The gray zone is therefore not merely measurement noise but structural: the system cannot fall back to bib-only recognition because no bib-first inference path exists in Algorithm 3 or Section 4.

Evaluation validity is another gray zone. Table 3 reports 97% player detection and 96% player recognition [PAGE 16], yet the dataset is exclusively 30,000 marathon images from a single event, with 16,000 used for bib-localization training and 4,000 held out [PAGE 16]. The title promises unification "across field sports," but no cricket, basketball, soccer, or football cross-domain results are presented; the comparisons in Table 3 borrow metrics from heterogeneous datasets (Haq et al. cricket 91% [PAGE 16]; Liu et al. [8] 87.9% player detection [PAGE 16]) without a common test set. Consequently, the claimed state-of-the-art result cannot be generalized beyond marathon bibs under the specific lighting and camera geometry of that one event. A multi-week trap emerges: bib font, size, placement, contrast, and illumination distribution shift from one race to the next, so a model frozen after 153 epochs [PAGE 13] will suffer dataset drift unless retrained per event.

Face recognition fallback uses FaceNet's triplet loss (anchor, positive, negative) projecting faces into a 128-D Euclidean space where similarity is inverse to distance [PAGE 14]. The SVM classifier then maps embeddings to identities. However, if a jersey is swapped between teammates, Step 3 saves Athlete A's embedding under Athlete B's bib number, poisoning the gallery. Because the dataset is built online from bib-verified detections, a single swap propagates error to all future queries for that bib. The paper acknowledges jersey-swap failure for bib-only methods [PAGE 9] but does not mitigate it in the proposed fusion architecture.

Good, that's around 450 words.

Now SOURCE_OPERATORS_AND_EQUATIONS. I'll present formal LaTeX blocks and breakdown.

Torso estimation [PAGE 12]:
X_{torso} = X_{face} - \frac{W_{face}}{2} \tag{1}
Y_{torso} = Y_{face} + H_{face} \tag{2}
W_{torso} = 2 \cdot W_{face} \tag{3}
H_{torso} = 3 \cdot H_{face} \tag{4}

Convolution [PAGE 13]:
G[m,n] = (f * h)[m,n] = \sum_{j}\sum_{k} h[j,k] \, f[m-j, n-k] \tag{5}

FaceNet [PAGE 14]:
\phi: \mathcal{I}_{face} \rightarrow \mathbb{R}^{128}, \quad d(\phi(a), \phi(p)) < d(\phi(a), \phi(n)) + \alpha
Triplet loss with margin \alpha. Face similarity inversely correlated with Euclidean distance in embedding space.

Ben-Ami legacy torso [PAGE 8] (for contrast):
Bounding box: 3 \cdot H_{face} \times \frac{7}{3} \cdot W_{face}, located at 0.5 \cdot H_{face} below face.

Dataset [PAGE 16]:
N_{total} = 30,000 (marathon, JPEG, duplicates removed)
N_{train,bib} = 16,000 (labeled torso crops)
N_{test} = 4,000
Epochs to stability = 153, accuracy 92.97% on bib localization [PAGE 13]

Metrics [PAGE 16]:
Proposed: 97% player detection, 96% player recognition.
Comparators from Table 3:
Haq et al. [2] 2024: 91% accuracy.
Liu et al. [8] 2023: 87.9% player detection, 91.7% jersey number recognition.
Liu et al. [12] 2022: 91.65% AP.
Rayhan et al. [9] 2020: 83.0% precision, 81.5% recall, 82.2% F1.
Liu et al. [16] 2019: 94.09% digit accuracy.

Breakdown regimes:
- Face size < 20×20 px: LBP fails; AdaBoost superior but still constrained [PAGE 6].
- Occluded face: system null output regardless of bib visibility [PAGE 17].
- Folded/obscured bib: OCR failure; system fails [PAGE 9, PAGE 17].
- Jersey swap: gallery contamination; persistent mis-ID [PAGE 9, inference].

I will write this out formally.

RETROCAUSAL_GENEALOGY:
Trace lineage chronologically:
- Viola & Jones (2004) robust real-time face detection, Haar-like features, AdaBoost cascade [PAGE 4, ref 34].
- Wilson et al. (2006) improved facial feature detection using Haar classifiers [PAGE 5, ref 35].
- Zhang et al. (2016) MTCNN joint face detection and alignment via cascaded CNN (P-Net, R-Net, O-Net) [PAGE 12, ref 36].
- Schroff et al. (2015) FaceNet, 128-D embedding, triplet loss (anchor, positive, negative), LFW benchmarks [PAGE 14, ref 37].
- Smith (2007) Tesseract OCR overview [PAGE 7, PAGE 8, ref 41].
- Liu & Bhanu (2019) Pose-guided R-CNN for jersey number recognition [PAGE 16, ref 16].
- Rayhan et al. (2020) YOLOv3 for racing bib digits [PAGE 16, ref 9].
- Ben-Ami et al. (2012) stroke width transform for bib detection [PAGE 8, ref 18].
- Fu et al. (2015) LightBib visible light communications (VLC) for marathoner ID [PAGE 10, ref 33].

Historical arc: holistic face → local text/OCR → multimodal torso+text → hardware-assisted VLC → proposed face+bib fusion. Multi-week traps: dataset drift across a single season (bib design changes, lighting seasonality, camera calibration drift), player appearance drift (haircuts, aging, facial hair) degrading FaceNet embeddings, jersey reassignments, and temporal non-stationarity of OCR fonts. Without weekly re-validation, the 97% metric is a point-in-time estimate, not a stable operating characteristic.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: when the cascade encounters occlusion, the system's habitual regression is to fail at Gate 1 (MTCNN face detection) and return null, because no bib-first path exists. It does not regress gracefully to OCR-only; it halts.
Counter-trap: adversarial conditions that exploit the fusion logic. (1) Sponsor print or jersey fold creates text-like regions in the estimated torso box; CNN localizes false text; Tesseract outputs garbage or wrong digit; the system then saves the athlete's face under the wrong bib number, corrupting the gallery. (2) Two athletes swap jerseys; Step 3 binds Face A to Bib B permanently until manual purge. (3) Low-resolution face (<20×20 px) forces reliance on bib, but architecture demands face first, so both paths are blocked.
Clock: temporal constraints. Real-time tracking at 30 fps (Vats et al. [25], NHL) [PAGE 3] requires inference latency below one frame interval; MTCNN + 2D-CNN + FaceNet + SVM serial execution may exceed this, causing track drops. Temporal frame aggregation (suggested by Shivakumar et al. [15] but unimplemented [PAGE 8]) could smooth detections, but the current system is frame-independent and thus vulnerable to single-frame occlusion.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: sensor resolution and optics. If the face bounding box is below reliable detection threshold (approx. 20×20 px for LBP failure context [PAGE 6]), MTCNN confidence collapses. Motion blur during sprinting degrades both face and text edges. Camera pose (profile vs frontal) invalidates Eq. 1–4 rectangular torso assumption.
Biomechanical layer: athlete kinematics. Arms crossing the chest occlude the bib; bending forward changes torso aspect ratio away from W_torso = 2·W_face, H_torso = 3·H_face; running posture may place the bib outside the estimated box; jersey number partially hidden by folds creates OCR segmentation errors.
Weather/environmental layer: illumination and atmosphere. Low luminance prevents feature extraction [PAGE 17]; rain or fog reduces contrast on black-on-white bibs; night-game artificial lighting creates specular glare on bib surfaces; shadows cause uneven saturation, defeating Messelodi-style unsaturated-color region selection [PAGE 8].
Veto adjudication: any single layer veto propagates to system null because the cascade is AND-gated (face AND torso AND bib AND OCR). No veto is rescueable by a parallel path in the current design. The conclusion explicitly calls this a limitation and reserves remediation for future work [PAGE 17].

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
Scenario 1: Fully occluded face, legible bib. Verifiable condition: face pixel region null; bib text region high confidence. Veto: Gate 1 returns null → Eqs. 1–4 undefined → no search region → OCR never runs. Prediction: false negative; system outputs "athlete not present" despite bib readability. Expected detection rate → 0% for this subset.
Scenario 2: Face visible but < 20×20 px; bib legible. Verifiable condition: face bounding box area < 400 px²; OCR confidence > threshold. Veto: MTCNN low confidence; FaceNet embedding unreliable (LBP/AdaBoost domain [PAGE 6]); architecture still requires face first. Prediction: identification accuracy collapses; if forced bib-only path existed it would succeed, but serial design yields null or misassociation.
Scenario 3: Mid-event jersey/bib swap between two athletes. Verifiable condition: Athlete A's face embedded under Athlete B's bib in gallery; subsequent query for B returns A. Veto: dataset contamination at Step 3; no re-verification mechanism. Prediction: persistent misidentification bounded below by swap frequency; error remains until manual gallery purge and retraining.

Total words should be well over 1000.

Let me write the final output. Ensure XML tags exact. No markdown code blocks around LaTeX? I can use LaTeX inline. It's fine.

I will not use any betting terminology. I will not invent fake ratios.

Double check: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I am only using equations from source. Good.

Citations: [PAGE N] format. Good.

Let's assemble.
</NATIVE_REASONING>

<THINK_TRACE>
The proposed architecture is a serial, AND-gated cascade: (1) MTCNN face detection, (2) torso bounding-box estimation via Eqs. (1)–(4), (3) 2D-CNN bib/text localization inside the estimated torso box, (4) Tesseract OCR digit recognition, and (5) identity resolution either by bib-number match or, on bib failure, by FaceNet 128-dimensional embedding compared through an SVM against a per-bib face gallery. Because Step 1 gates every downstream operation, the system graph has a single point of structural failure: if MTCNN returns no face, the torso is never estimated, the CNN search region is never defined, and the OCR engine never executes—even when the racing bib is perfectly legible. This contradicts the abstract's claim of robustness across "varied player counts in varied positions and illumination settings" and is explicitly confirmed in the conclusion: "cases have been found where face occluded but bib is clearly visible. In this situation athlete cannot be detected since face will not be detected" [PAGE 17]. The gray zone is therefore not merely measurement noise but topological: no bib-first inference path exists in Algorithm 3 or Section 4, so the architecture cannot regress gracefully to OCR-only recognition under facial occlusion.

The torso estimation Eqs. (1)–(4) impose a rigid anthropometric prior: X_torso = X_face − W_face/2, Y_torso = Y_face + H_face, W_torso = 2·W_face, and H_torso = 3·H_face [PAGE 12]. These equations assume the face bounding box is reliable and that torso width and height scale linearly and isotropically with face dimensions. This breaks under profile views, extreme camera angles, occlusion of the jaw or forehead, motion blur, and athletes bending, jumping, or crossing arms during competition. MTCNN itself requires frontal or near-frontal faces for high accuracy [PAGE 5], so the cascade inherits that angular constraint. Evaluation validity compounds the problem: Table 3 reports 97% player detection and 96% player recognition [PAGE 16], yet the dataset is exclusively 30,000 marathon images from a single event, with 16,000 images used for bib-localization training and 4,000 held out [PAGE 16]. The title promises unification "across field sports," but no cricket, basketball, soccer, or football cross-domain results are presented; the comparisons in Table 3 borrow metrics from heterogeneous datasets (Haq et al. cricket 91% [PAGE 16]; Liu et al. [8] 87.9% player detection [PAGE 16]) without a common test set. Consequently, the claimed state-of-the-art result cannot be generalized beyond marathon bibs under the specific lighting and camera geometry of that one event.

A multi-week trap emerges from dataset stationarity assumptions. Bib font, size, placement, contrast, and illumination distribution shift from one race to the next, so a model frozen after 153 epochs [PAGE 13] will suffer dataset drift unless retrained per event. The face-recognition fallback uses FaceNet's triplet loss (anchor, positive, negative) projecting faces into a 128-D Euclidean space where similarity is inverse to distance [PAGE 14], followed by an SVM classifier. However, if a jersey is swapped between teammates, Step 3 saves Athlete A's embedding under Athlete B's bib number, poisoning the gallery. Because the dataset is built online from bib-verified detections, a single swap propagates error to all future queries for that bib. The paper acknowledges jersey-swap failure for bib-only methods [PAGE 9] but does not mitigate it in the proposed fusion architecture. Finally, the "97%" figure conflates detection (localization) with recognition (identity), and no confidence intervals or variance across epochs are reported, making the metric a point estimate rather than a stable operating characteristic.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Torso estimation from face bounding box, proposed method [PAGE 12]:

X_{torso} = X_{face} - \frac{W_{face}}{2} \tag{1}

Y_{torso} = Y_{face} + H_{face} \tag{2}

W_{torso} = 2 \cdot W_{face} \tag{3}

H_{torso} = 3 \cdot H_{face} \tag{4}

Units: pixel coordinates (X, Y) and pixel dimensions (W, H). Assumption: face bounding box is accurate and frontal; torso aspect ratio is fixed relative to face.

2D-CNN convolution operator for bib localization [PAGE 13]:

G[m,n] = (f * h)[m,n] = \sum_{j}\sum_{k} h[j,k] \, f[m-j, n-k] \tag{5}

Units: f is the input torso image; h is the kernel/filter; G[m,n] is the output feature map at row m, column n. Stride and pooling downsample feature maps; no fake ratios are introduced.

Ben-Ami et al. [18] legacy torso estimate for contrast [PAGE 8]:

Bounding box: 3 \cdot H_{face} \times \frac{7}{3} \cdot W_{face}, located at 0.5 \cdot H_{face} below the face.

FaceNet embedding space [PAGE 14]:

\phi: \mathcal{I}_{face} \rightarrow \mathbb{R}^{128}, \qquad d(\phi(a), \phi(p)) + \alpha \le d(\phi(a), \phi(n))

Triplet loss with margin \alpha; anchor a, positive p (same identity), negative n (different identity). Face similarity increases as Euclidean distance in embedding space decreases. Verification (1:1), recognition (1:N), and clustering are supported without retraining for new identities.

Dataset and experimental protocol [PAGE 16]:

N_{total} = 30,000 images (single marathon event, JPEG format, duplicates removed).
N_{train, bib} = 16,000 labeled torso crops for bib-localization training.
N_{test} = 4,000 held-out images.
Bib-localization CNN: 3 convolutional layers; trained for 153 epochs until stability; reported accuracy 92.97% [PAGE 13].

Performance metrics from Table 3 [PAGE 16]:

Proposed work (2025): 97% player detection; 96% player recognition.
Haq et al. [2] (2024): 91% accuracy (PAL-AdaBoost).
Liu et al. [8] (2023): 87.9% player detection; 91.7% jersey number recognition.
Liu et al. [12] (2022): 91.65% AP for jersey digit detection.
Rayhan et al. [9] (2020): 83.0% precision, 81.5% recall, 82.2% F1-score.
Liu et al. [16] (2019): 94.09% digit accuracy (R-CNN).

Breakdown regimes explicitly stated in source:
- Face below ~20×20 pixels: LBP fails to classify; AdaBoost superior but still constrained [PAGE 6].
- Occluded face: system null output regardless of bib visibility [PAGE 17].
- Folded, partially obscured, or sponsor-confused jersey/bib: OCR failure; methodology fails [PAGE 9; PAGE 17].
- Jersey swap between athletes: identity-to-bib binding errors; persistent gallery contamination [PAGE 9].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage traces from holistic appearance models to local text and finally to hardware-assisted and fused modalities. Viola & Jones (2004) established robust real-time face detection using Haar-like features and AdaBoost cascades [PAGE 4, ref. 34]. Wilson et al. (2006) refined facial-feature detection with Haar classifiers [PAGE 5, ref. 35]. Zhang et al. (2016) introduced MTCNN, a cascaded CNN (P-Net, R-Net, O-Net) for joint face detection and alignment [PAGE 12, ref. 36]. Schroff et al. (2015) developed FaceNet, mapping faces to a 128-D Euclidean embedding via triplet loss (anchor, positive, negative) [PAGE 14, ref. 37]. Smith (2007) provided the Tesseract OCR foundation used throughout the bibliography for digit transcription [PAGE 7; PAGE 8, ref. 41]. On the text side, Liu & Bhanu (2019) proposed pose-guided R-CNN for jersey-number recognition [PAGE 16, ref. 16], while Rayhan et al. (2020) applied YOLOv3 to racing-bib digit detection [PAGE 16, ref. 9]. Ben-Ami et al. (2012) used stroke-width transform (SWT) for bib localization anchored to a face-derived torso box [PAGE 8, ref. 18]. Fu et al. (2015) departed from vision-only approaches with LightBib, using visible-light communications (VLC) and frequency-shift keying to transmit runner IDs from light strips, achieving average recall near 90% for five runners [PAGE 10, ref. 33].

The historical arc is therefore: holistic face → local text/OCR → multimodal torso+text fusion → hardware-assisted VLC → the present face+bib fusion. Each generation inherited the failure modes of its predecessor. Multi-week traps are intrinsic to this lineage. First, dataset drift: a model trained on one marathon's bib design, font, and illumination will not generalize to the next event weeks later without retraining, because contrast, placement, and camera geometry shift. Second, player appearance drift: haircuts, aging, facial hair, and lighting changes degrade FaceNet embedding stability, meaning a 128-D gallery built in week 1 becomes stale by week 4. Third, jersey and bib reassignment: team kits change mid-season, and swapped bibs create persistent binding errors because the system saves facial features to bib numbers online [PAGE 12; PAGE 9]. Fourth, camera calibration drift across a season alters the validity of the fixed torso ratios in Eqs. (1)–(4), since lens choice, mounting height, and zoom level change the projected face-to-torso scale. Without weekly re-validation against a held-out set from the current event, the 97% detection figure is a point-in-time estimate, not a stable operating characteristic across the competitive calendar.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when the cascade encounters a crisis such as facial occlusion, the system's habitual regression is to halt at Gate 1 (MTCNN face detection) and return a null result. It does not fall back gracefully to a bib-only path, because Algorithm 3 and Section 4 make face detection a precondition for torso estimation Eqs. (1)–(4) and therefore for all downstream OCR and embedding operations [PAGE 8; PAGE 12]. The crisis response is thus a hard stop, not a graceful degradation.

Counter-trap: adversarial conditions that exploit the fusion logic rather than merely defeating one module. (1) Sponsor print, folds, or partial occlusion inside the estimated torso box cause the 2D-CNN to localize false text regions; Tesseract then outputs a garbage or incorrect digit, and Step 3 saves the athlete's genuine face embedding under the wrong bib number, corrupting the trained gallery [PAGE 12; PAGE 9]. (2) Two athletes swap jerseys or bibs mid-event; the architecture binds Face A to Bib B permanently until manual gallery purge, so every subsequent query for Bib B returns Athlete A's identity [PAGE 9]. (3) A distant, low-resolution face below 20×20 pixels coincides with a legible bib; because the serial design still requires face detection first, the bib cannot rescue the identification [PAGE 6; PAGE 17]. These counter-traps are not random noise but structural consequences of the face-first gating and online dataset construction.

Clock: the system operates frame-by-frame with no explicit temporal aggregation. Vats et al. [25] process NHL broadcast at 30 frames per second at 1280×720 resolution [PAGE 3], implying that real-time tracking requires total inference latency below one frame interval (~33 ms). The serial execution of MTCNN, torso estimation, 2D-CNN localization, Tesseract OCR, FaceNet embedding, and SVM classification likely exceeds that budget, causing track drops during fast motion. Shivakumar et al. [15] suggest exploring temporal frames to improve text detection and recognition, but the proposed model does not implement temporal smoothing [PAGE 8]. Consequently, a single occluded frame breaks the track, and there is no clock-aware mechanism to bridge short-term occlusion using prior player location.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: sensor resolution and optics. If the face bounding box falls below the reliable detection regime (approximately 20×20 pixels, where LBP-based recognition already fails and even AdaBoost is constrained [PAGE 6]), MTCNN confidence collapses and Eqs. (1)–(4) cannot be seeded. Motion blur during sprinting degrades both facial edges and bib-text strokes. Extreme camera pose (profile rather than frontal) invalidates the rectangular torso assumption because the face box no longer projects to the chest plane.

Biomechanical layer veto: athlete kinematics. Arms crossing the chest occlude the bib; bending forward or jumping changes torso aspect ratio away from W_torso = 2·W_face and H_torso = 3·H_face; running posture can place the bib outside the estimated box; jersey folds partially hide digits, creating OCR segmentation errors. These are not correctable by upstream face detection because the torso box is derived from the face, not from body kinematics.

Weather/environmental layer veto: illumination and atmosphere. Low luminance prevents facial-feature extraction and is explicitly cited as a failure mode [PAGE 17]. Rain or fog reduces contrast on black-on-white bibs, defeating the unsaturated-color-region pre-processing used by Messelodi et al. [14] [PAGE 8]. Night-game artificial lighting creates specular glare on bib surfaces, and shadows produce uneven saturation that confuses text-background segmentation [PAGE 8].

Veto adjudication: the cascade is AND-gated—face AND torso AND bib AND OCR must all succeed. Any single layer veto propagates to a system null, and no veto is rescueable by a parallel path in the current design. The conclusion explicitly names this dependency on face detection, OCR, and face-recognition performance as a limitation and reserves remediation for future work [PAGE 17]. Therefore the system is not veto-proof; it is veto-fragile at the entry gate.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Fully occluded face, fully legible bib. Verifiable condition: MTCNN returns null face region; bib text region has high localization confidence. Veto logic: Gate 1 returns null → Eqs. (1)–(4) undefined → no torso search region → 2D-CNN and Tesseract never execute. Prediction: false negative; the system reports the athlete as absent despite the bib being readable. Expected detection rate for this subset approaches 0%.

Scenario 2: Visible but sub-critical face (< 20×20 pixels), legible bib. Verifiable condition: face bounding box area < 400 px²; OCR confidence above operating threshold. Veto logic: MTCNN confidence low; FaceNet embedding unreliable because LBP fails below 20×20 and even AdaBoost is constrained [PAGE 6]; architecture still requires face first, so the bib cannot rescue identification. Prediction: identification accuracy collapses below 50% for this scale regime; if a bib-only parallel path existed it would succeed, but the serial design yields null or misassociation.

Scenario 3: Mid-event jersey/bib swap between two athletes. Verifiable condition: Athlete A's face embedding is stored under Athlete B's bib number in the gallery; a subsequent query for Athlete B returns Athlete A's identity. Veto logic: Step 3 saves facial features to the bib number without a re-verification or consistency check, causing persistent gallery contamination [PAGE 12; PAGE 9]. Prediction: misidentification error remains bounded below by the swap frequency and persists until manual gallery purge and retraining; no automatic counter-trap exists in the current algorithm.
</RLVR_COUNTERFACTUAL_VETOES>