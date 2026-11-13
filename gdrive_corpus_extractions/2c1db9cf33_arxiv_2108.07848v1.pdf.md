---
source: "arxiv_2108.07848v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 5
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3956
---

<NATIVE_REASONING>
The user wants a response based on the source paper about multi-task learning for jersey number recognition in ice hockey. The response must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations. Use real equations from the paper (cross-entropy, multi-task loss). Cite page markers [PAGE 1] etc. Word count >= 1000 total across sections. Need to be careful with word count.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words. Discuss the paper's methodology, the multi-task loss, the class imbalance (ratio 92), the weight optimization (α+β+γ=1), why digit-wise gets more weight, failure cases (occlusion, motion blur, folding, bounding boxes), the breakdown regimes (when holistic weight too high α=0.8 accuracy drops to 87.8%, when digit-wise too high β+γ=0.9 accuracy drops to 89%), the GPU memory constraint (ResNet50 couldn't fit batch size 100), class imbalance ratio 92:1, null class. Gray zones: dataset splits at game level but still possible temporal leakage? No, game level avoids in-game bias. However, annotations by two annotators, inter-annotator agreement not reported. Readable definition: both digits visible; partial occlusion included; unreadable if fully occluded/invisible. This creates label noise gray zone. The "not visible" class included in 81 classes. The softmax over 81 classes includes null. Digit vectors 11-dimensional (digits 0-9 plus absent). The holistic vector 81-dimensional (00-99? actually jersey numbers maybe 1-99 plus null = 81? 99 numbers + null = 100? Wait 81 classes. Maybe they only consider numbers that appear? The paper says 81 jersey number classes including null. So not all 1-99. That's a gray zone: out-of-vocabulary jersey numbers not in dataset would fail. Multi-task loss weighting α=0.3, β=0.35, γ=0.35. The digit-wise loss combined weight 0.7 > holistic 0.3. "slightly more than double" (0.7 vs 0.3 is 2.33x). The ablation shows complementarity.

Need to avoid fake ratios. Can mention the observed class imbalance ratio 92 from [PAGE 2]. Can mention accuracy numbers as empirical results, not invented.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations from the paper:
- Holistic cross-entropy: L = -∑_{i=1}^{81} y_i log p_i [PAGE 2]
- Digit 1: L1 = -∑_{j=1}^{11} y_j^1 log p_j^1 [PAGE 2]
- Digit 2: L2 = -∑_{k=1}^{11} y_k^2 log p_k^2 [PAGE 2]
- Total: L_tot = αL + βL1 + γL2, α+β+γ=1 [PAGE 2-3]
- Digit-wise total weight β+γ [PAGE 3]
- Input 300×300 pixels, ResNet34, 512-dim features [PAGE 2]
- Output dimensions: p ∈ R^81, p1,p2 ∈ R^11 [PAGE 2]
- Training: 10,000 iterations, Adam lr=0.001, L2 weight decay=0.001, lr decay factor 0.33 at iterations 2000,4000,6000,7000, batch size 100, single 1080Ti GPU [PAGE 3]
- Dataset: 54,251 images from 25 NHL games, 1280×720 resolution, splits: train 38,456 / val 6,770 / test 9,025 [PAGE 2-3]
- Class imbalance ratio 92 between most and least frequent class [PAGE 2]
- Results table: multi-task 89.6% acc, 91.2% F1; holistic 87.6%; digit-wise 88.1%; best weights α=0.3 β=0.35 γ=0.35 [PAGE 3-4]
- Backbone ablation: ResNet34 89.6%, ResNet18 89.1%, Mobilenetv2 87.9% [PAGE 4]
- Breakdown: ResNet50 couldn't fit batch size 100 on single GPU [PAGE 4]; α=0.8 gives 87.8% (lower); β+γ=0.9 gives 89.0% (lower than 89.6%) [PAGE 4]

<RETROCAUSAL_GENEALOGY>: Historical lineage. Hand-crafted features [13,14], Gerke et al. [2] first CNN for jersey number recognition, HOG vs CNN, Li et al. [7] STN + semi-supervised, Liu et al. [8] Faster R-CNN + pose keypoint, Gerke et al. [1] tactical role features, multi-task learning for digit/text recognition How et al. [5], Kim et al. [6] license plates. Multi-week traps: In sports analytics over multi-week horizons, jersey number recognition errors propagate to player tracking, lineup construction, tactical role assignment. If a model confuses 24 with 21 (Fig 5a), over a week of games that misattribution compounds in possession metrics. The paper is from MMSports '21, lineage from CVPR/ICCV workshops. The "trap" is assuming static jersey-to-player mapping across weeks when trades, call-ups, and number changes occur; also dataset from 25 NHL games may not generalize across seasons due to new players/numbers not in the 81 classes (OOD failure).

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Crisis habit regression: When the vision system encounters high motion blur or occlusion (crisis), it regresses to relying on the dominant holistic branch or the majority class because digit-wise branches are less certain. Counter-trap: The multi-task design is a counter-trap to over-reliance on holistic representation; by forcing digit-wise consistency, it prevents the network from memorizing holistic jersey templates that fail under occlusion. Clock: Training clock of 10,000 iterations with learning rate decay schedule; inference clock is per-frame broadcast video at real-time; the paper doesn't report latency/FPS, so deployment clock is unknown. Also the "clock" of game-level splits avoids in-game bias but ignores cross-game temporal dependencies (player substitutions, line changes).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical: bulky equipment and helmets occlude body characteristics, making jersey numbers primary ID [PAGE 1]. Biomechanical: players fold jerseys, kinks, self-occlusion cause misreads (Fig 5b,d) [PAGE 4]. Weather/environment: not explicitly discussed, but broadcast camera viewpoints, motion blur from fast-moving camera are environmental [PAGE 1,4]. Veto proof: The system should veto predictions when bounding box doesn't cover whole jersey (Fig 5c), when external occlusion covers digits (Fig 5a), when motion blur exceeds readability threshold. The paper includes partial occlusion images but marks fully occluded digits as unreadable; however no explicit confidence veto threshold is given. This is a gap: softmax outputs probabilities but no abstention mechanism. The null class handles absence but not ambiguous presence.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. Need 3 scenarios where the model should veto (abstain) and predictions of what happens if it doesn't.
1. Scenario: Bounding box excludes part of jersey (Fig 5c, actual 12 predicted 2). Veto rule: if jersey pixel coverage < threshold in bounding box, abstain. Prediction: without veto, systematic under-counting of digits; with veto, precision increases but recall drops for edge-positioned players.
2. Scenario: External occlusion of one digit (Fig 5a, actual 24 predicted 21). Veto rule: if occlusion mask overlaps >X% of jersey region, use digit-wise null for occluded digit rather than forcing classification. Prediction: prevents transposition errors (24→21) but requires occlusion detector.
3. Scenario: High motion blur from fast camera pan (Fig 5b/c context). Veto rule: if blur metric (e.g., Laplacian variance) below threshold, fall back to temporal smoothing across adjacent frames rather than single-frame classification. Prediction: single-frame accuracy 89.6% degrades under blur; temporal veto improves multi-game player ID consistency but adds latency.

Need to ensure total words >= 1000 across all sections. I'll aim for roughly 200-250 words per section except THINK_TRACE which needs >=400. Let's estimate:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~200 words
- RECURSIVE_THEORY_OF_MIND: ~200 words
- CROSS_LAYER_VETO_ADJUDICATION: ~200 words
- RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total ~1600 words. Good.

Need to include [PAGE N] markers and verbatim quotes where appropriate. The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should quote some text verbatim with page citations.

Let's draft carefully.

Important: No betting lines. No mention of odds, spreads, etc. This is a sports video paper, not betting. Fine.

No toy equations. Use only equations from paper. Don't invent Force/Fatigue ratios.

Use formal LaTeX.

Let's write.

THINK_TRACE section:

Start with derivation. The problem: player identification in ice hockey via jersey numbers. Bulky equipment occludes body features [PAGE 1]. Two representations: holistic (81 classes) and digit-wise (2×11 classes). Multi-task loss L_tot = αL + βL1 + γL2 with α+β+γ=1 [PAGE 3]. Why this works: improved regularization [PAGE 1, citing Ruder [10]]. The dataset: 54,251 images from 25 NHL games, 1280×720, splits game-level to avoid in-game bias [PAGE 2]. Class imbalance ratio 92:1 between most and least frequent class [PAGE 2]. This creates a gray zone: minority jersey numbers are under-represented; the macro F1 (91.2%) is close to accuracy (89.6%), suggesting balanced performance despite imbalance, but per-class breakdown is not given. Another gray zone: the 81 classes include a null class but do not cover all possible NHL jersey numbers; unseen numbers force misclassification into nearest seen class. The ablation shows α=0.8 (holistic dominant) yields 87.8% accuracy, while β+γ=0.7 yields 89.6%, demonstrating digit-wise loss carries more discriminative signal but needs holistic regularization; pushing β+γ to 0.9 drops accuracy to 89.0%, proving complementarity breaks down when holistic weight is too low. Breakdown regimes: (i) α too high → holistic overfits to jersey templates and fails under occlusion/folding; (ii) β+γ too high → digit branches ignore global number context, causing transposition errors like 24→21; (iii) batch size 100 on single 1080Ti GPU prevents ResNet50 testing, so deeper backbone scaling is capped by memory [PAGE 4]. Label noise gray zone: two annotators, no inter-annotator agreement reported; "readable" defined as both digits visible but partial occlusion included, introducing ambiguous labels.

I need to count words. Let me write more fully to exceed 400.

SOURCE_OPERATORS_AND_EQUATIONS: Include equations and units.

RETROCAUSAL_GENEALOGY: historical.

RECURSIVE_THEORY_OF_MIND: crisis habit regression etc.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Let's write the final output. Ensure XML tags exact. No markdown outside? User wants exact XML sections. I'll output only those sections in order.

Word count check: I'll write generously.

Let's begin.

THINK_TRACE: I'll write about 500 words.

SOURCE_OPERATORS_AND_EQUATIONS: ~350 words.

RETROCAUSAL_GENEALOGY: ~200 words.

RECURSIVE_THEORY_OF_MIND: ~200 words.

CROSS_LAYER_VETO_ADJUDICATION: ~200 words.

RLVR_COUNTERFACTUAL_VETOES: ~250 words.

Total ~1700. Safe.

Need verbatim quotes. I'll include:
[PAGE 1]: "Although approaches for some sports (e.g., basketball [12]) that identify players using body appearances, this is not achievable in ice hockey due to the players wearing bulky equipment and helmets that occlude body characteristics and skin color..."
[PAGE 2]: "The dataset is highly imbalanced such that the ratio between the most frequent and least frequent class is 92."
[PAGE 3]: "L_tot= α∗L + β∗L1 + γ∗L2 where α, β, γ denote weights given to each loss such that α+β+γ= 1."
[PAGE 4]: "We did not test bigger networks such as Resnet 50 since it could not fit a batch size of 100 on a single GPU."

Good.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit. The paper establishes that automated player identification in ice hockey broadcast video is uniquely constrained because bulky equipment and helmets occlude body characteristics and skin color, leaving jersey numbers as the primary visual identifier [PAGE 1]. This motivates a dual-representation learning problem: (1) a holistic classification over 81 jersey-number classes (including a null “not visible” class) and (2) two independent digit-wise classifications over 11 classes each (digits 0–9 plus absent) [PAGE 2]. The network extracts 512-dimensional pre-final features from a ResNet34 backbone processing 300 × 300 pixel inputs, then projects through three linear–softmax heads to produce probability vectors p ∈ ℝ⁸¹, p₁ ∈ ℝ¹¹, and p₂ ∈ ℝ¹¹ [PAGE 2].

The multi-hop causal chain is as follows. Because each jersey number is composed of two digits, digit-wise supervision provides finer-grained, compositional gradients that regularize the holistic head, while the holistic head enforces global number context that prevents the digit heads from making locally consistent but globally invalid predictions (e.g., predicting digits that never co-occur as a legal jersey). The total loss L_tot = αL + βL₁ + γL₂ with α + β + γ = 1 [PAGE 3] balances these objectives. The ablation study shows the optimum at α = 0.30, β = 0.35, γ = 0.35, giving test accuracy 89.6% and macro F1 91.2% [PAGE 4]. Notably, β + γ = 0.70 exceeds α = 0.30 by a factor of roughly 2.33, confirming that digit-wise loss carries the dominant discriminative signal; however, pushing β + γ to 0.90 collapses accuracy to 89.0%, and setting α = 0.80 collapses it to 87.8% [PAGE 4]. This is the complementarity singularity: the system breaks down toward pure holistic memorization when α is too high, and toward digit-wise context-blindness when α is too low.

Gray-zone audit. First, the dataset exhibits a class-imbalance ratio of 92 between the most and least frequent classes [PAGE 2], yet per-class recall for minority jerseys is not disclosed; macro F1 tracking accuracy closely (91.2% vs 89.6%) suggests the imbalance is mitigated but not eliminated. Second, the 81-class holistic vocabulary is a closed set derived from 25 NHL games; any jersey number outside this support forces a nearest-class misclassification, an out-of-distribution breakdown not addressed. Third, label construction contains an ambiguity gray zone: a digit is “unreadable” only when fully occluded or invisible, while partial occlusion and jersey kinks are retained as readable [PAGE 2], and two annotators labeled the data without reported inter-annotator agreement. Fourth, game-level splits prevent in-game bias but do not eliminate cross-game roster drift (trades, call-ups, number changes), creating a multi-week distribution-shift trap. Fifth, compute constraints cap architectural scaling: ResNet50 was not tested because batch size 100 could not fit on a single 1080Ti GPU [PAGE 4], meaning deeper-backbone gains remain unverified within this experimental regime.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and breakdown regimes extracted verbatim from the source.

Input and feature dimensions [PAGE 2]:
- Input image: 300 × 300 pixels (RGB).
- Backbone: ResNet34 [4]; pre-final feature dimension = 512.
- Holistic output: p ∈ ℝ⁸¹, probability distribution over 81 classes (80 visible jersey numbers + null class).
- Digit outputs: p₁, p₂ ∈ ℝ¹¹, probability distributions over digits 0–9 plus an absence class.

Loss functions (cross-entropy between one-hot ground truth and predicted distributions) [PAGE 2–3]:
1. Holistic loss:
   L = −∑_{i=1}^{81} y_i log p_i   (1)
2. First-digit loss:
   L₁ = −∑_{j=1}^{11} yⱼ¹ log pⱼ¹   (2)
3. Second-digit loss:
   L₂ = −∑_{k=1}^{11} yₖ² log pₖ²   (3)
where y, y₁, y₂ are ground-truth one-hot vectors and log is the natural logarithm (information units: nats).

Composite multi-task loss [PAGE 3]:
   L_tot = αL + βL₁ + γL₂,   subject to α + β + γ = 1.   (4)
The aggregate digit-wise weight is β + γ [PAGE 3].

Training hyperparameters [PAGE 3]:
- Optimizer: Adam; initial learning rate η₀ = 0.001.
- Weight decay: λ = 0.001 (L₂ regularization on parameters).
- Iterations: 10,000.
- Learning-rate schedule: multiply by 0.33 after iterations 2000, 4000, 6000, and 7000.
- Batch size: 100 on a single NVIDIA 1080Ti GPU.
- Data augmentation: color jittering with high hue values; affine transformations excluded because scaling can remove jersey visibility.

Dataset inventory [PAGE 2–3]:
- 54,251 player bounding boxes from 25 NHL games; source video resolution 1280 × 720 pixels.
- Splits (game-level to avoid in-game bias): Train 38,456; Validation 6,770; Test 9,025.
- Class imbalance: ratio between most frequent and least frequent class = 92 [PAGE 2].
- Readability rule: a number is readable when both digits are visible; partially occluded and motion-blurred images are included; fully occluded/invisible digits are unreadable [PAGE 2].

Empirical results [PAGE 3–5]:
- Holistic only: accuracy 87.6%, precision 90.9%, recall 87.7%, F1 88.7%.
- Digit-wise only: accuracy 88.1%, precision 92.5%, recall 88.1%, F1 89.9%.
- Multi-task optimal (α=0.30, β=0.35, γ=0.35): accuracy 89.6%, precision 93.6%, recall 89.6%, F1 91.2%.
- Backbone ablation (fixed optimal weights): Mobilenetv2 87.9% acc; ResNet18 89.1% acc; ResNet34 89.6% acc [PAGE 4].
- Breakdown regime: “We did not test bigger networks such as Resnet 50 since it could not fit a batch size of 100 on a single GPU” [PAGE 4].

Failure modes [PAGE 4, Fig. 5]: external occlusion (actual 24 → predicted 21), jersey folding (actual 16 → predicted 18), faulty bounding boxes excluding digits (actual 12 → predicted 2), and camera-viewpoint occlusion (actual 72 → predicted 77). These are physical-layer confusions, not label-noise artifacts alone.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage. Jersey-number recognition evolved from hand-crafted descriptors—HOG features and HSV color-space contour methods [13, 14]—to deep convolutional networks. Gerke et al. [2] were the first to apply CNNs to small, low-resolution jersey images, dramatically outperforming HOG [PAGE 2]. Subsequent work specialized the pipeline: Li et al. [7] introduced spatial transformer networks (STNs) with semi-supervised localization using human-annotated quadrangles; Liu et al. [8] proposed a pose-guided Faster R-CNN incorporating human keypoint supervision; and Gerke et al. [1] fused vision with tactical role assumptions (defender, winger, forward) because players follow non-random spatial patterns [PAGE 2]. The multi-task component draws on How et al. [5] (handwritten numeral recognition with scratchiness detection) and Kim et al. [6] (simultaneous license-plate detection, digit recognition, and character recognition) [PAGE 2].

Multi-week traps. Deploying this model across a season or playoff cycle introduces retro-causal distribution shifts not present in the static 25-game training corpus. Jersey numbers are not permanent player identifiers: trades, call-ups, and number changes reassign the number-to-player mapping week over week. A model trained on a fixed 81-class support will systematically misidentify players wearing unseen numbers, forcing them into the nearest seen class or the null class. Moreover, the game-level split prevents in-game bias but does not prevent cross-game roster drift; over a multi-week horizon, the prior over jersey classes shifts as rosters turn over, degrading the 89.6% test accuracy measured on the held-out four games. The paper’s lineage from MMSports ’21 and its reliance on broadcast 1280 × 720 footage also tie it to a specific camera-generation regime; newer broadcast resolutions or alternative camera angles would shift the motion-blur and occlusion statistics observed in Figure 2 and Figure 5.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock. Under crisis conditions—high motion blur from fast-moving cameras, external occlusion, jersey folding, or incomplete bounding boxes [PAGE 4]—the network faces a regression pressure toward its dominant branch. Because the digit-wise loss carries the larger weight (β + γ = 0.70 vs α = 0.30) and achieves higher standalone accuracy (88.1% vs 87.6%) [PAGE 4], the model’s crisis habit is to lean on digit-wise evidence. When one digit is occluded but the other is visible, the visible digit can anchor a wrong holistic inference (e.g., actual 24 predicted 21 because the “2” is correct and the occluded second digit is hallucinated), producing a transposition error. This is the crisis habit regression: under uncertainty, the system regresses to partial digit evidence and commits a globally invalid number.

The counter-trap is the multi-task architecture itself. By forcing the holistic head to agree with two digit heads, the design prevents over-reliance on holistic jersey templates that fail under occlusion or folding. The holistic term acts as a global consistency constraint, while the digit terms act as local evidence integrators. The optimal weight α = 0.30 is small precisely because holistic memorization is the trap; just enough holistic weight is retained to regularize without allowing the network to ignore digit-level contradictions.

The clock operates on two timescales. Training runs for 10,000 iterations with a step-decay learning-rate schedule at iterations 2000, 4000, 6000, and 7000 [PAGE 3], after which the model is frozen. Inference, however, must run on a per-frame broadcast-video clock whose latency and frame-rate the paper does not report. If the inference clock cannot match the game’s event clock (line changes, shifts, goals), player identification lags behind the actual on-ice state. The recursive theory of mind thus predicts that the model will regress to digit-wise anchoring under visual crisis, that the multi-task loss is the counter-trap to holistic overfitting, and that the frozen training clock mismatches the continuous game clock unless temporal smoothing or frame-level confidence vetoes are added.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof.

Physical layer: Ice hockey players wear bulky equipment and helmets that occlude body characteristics and skin color, making jersey numbers the sole reliable identifier [PAGE 1]. A veto at this layer must fire when the jersey region is not fully contained in the player bounding box (Fig. 5c: actual 12, predicted 2) or when camera viewpoint excludes part of the jersey (Fig. 5d: actual 72, predicted 77) [PAGE 4]. Without a geometric coverage veto, the model commits digit deletion errors.

Biomechanical layer: Jersey folding and kinks are common in real play and are explicitly included in the dataset [PAGE 2, Fig. 2]; Figure 5b shows actual 16 predicted as 18 due to folding [PAGE 4]. A biomechanical veto should trigger when local texture distortion exceeds a learned threshold, preventing the digit heads from treating a folded “6” as an “8.” The paper includes such images but provides no explicit distortion metric or abstention rule, so the network is forced to classify corrupted digits rather than veto.

Environmental layer: High motion blur from fast-moving cameras is identified as a core challenge [PAGE 1], and Figure 2(b–c) shows motion-blur examples [PAGE 2]. No weather variables (rain, snow, rink fog) are discussed because the data are indoor NHL broadcast video; however, arena lighting variability and camera pan speed function as environmental noise. A veto here would use single-frame blur metrics (e.g., Laplacian variance) or temporal consistency across adjacent frames to abstain when blur exceeds the readability regime.

Veto proof conclusion: The system lacks an explicit abstention mechanism. The null class handles absence of a jersey but not ambiguous presence. A veto layer should overlay the softmax outputs: if bounding-box coverage of the jersey < τ_geo, if occlusion overlap > τ_occ, or if blur metric < τ_blur, then output “unreadable” instead of a class. Prediction: such a veto would reduce the transposition and deletion errors in Figure 5, trading some recall for higher precision in downstream player tracking.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) veto scenarios, each with a falsifiable prediction.

Scenario 1 — Bounding-box exclusion veto.
Condition: The player bounding box does not fully contain the jersey number (verified by jersey-pixel coverage < 90% within the box). Example from source: actual 12 predicted 2 because digits are cut off [PAGE 4, Fig. 5c].
Veto action: Abstain from jersey classification and flag “incomplete bounding box.”
Prediction: Without veto, the model commits systematic under-counting of the second digit for players near frame edges; with veto, precision on fully visible jerseys rises above 93.6% while recall drops proportionally to the fraction of edge-case players. The trade-off is measurable on the existing test set by masking examples with incomplete boxes.

Scenario 2 — Occlusion-induced transposition veto.
Condition: An external occlusion mask overlaps more than 30% of either digit region (verified by segmentation overlay). Example from source: actual 24 predicted 21 due to external occlusion [PAGE 4, Fig. 5a].
Veto action: Do not force a holistic class; instead classify only the visible digit and mark the occluded digit as absent/null, or abstain entirely.
Prediction: Without veto, transposition errors (tens digit correct, units digit hallucinated) inflate the confusion between numbers sharing a leading digit (e.g., 21 vs 24, 16 vs 18). With veto, the confusion matrix shows reduced off-diagonal mass among numbers sharing the visible digit, at the cost of increased null-class rate for occluded instances.

Scenario 3 — Motion-blur temporal veto.
Condition: Single-frame blur metric (e.g., Laplacian variance) falls below a dataset-calibrated threshold during fast camera pans (source identifies fast-moving-camera motion blur as a primary failure mode [PAGE 1, 4]).
Veto action: Suppress the single-frame prediction and propagate the most recent high-confidence jersey label forward for a bounded window (e.g., ≤ 5 frames) until a sharp frame reappears.
Prediction: Without veto, accuracy on blurred frames degrades well below the 89.6% test average, causing player-identity switches during fast breaks. With veto, short-term identity consistency improves and the number of spurious player-ID switches per game decreases, but end-to-end latency increases by the veto window length. Both effects are verifiable on held-out broadcast clips with annotated blur frames.
</RLVR_COUNTERFACTUAL_VETOES>