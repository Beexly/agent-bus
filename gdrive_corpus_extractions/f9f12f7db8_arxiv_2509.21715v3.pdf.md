---
source: "arxiv_2509.21715v3.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 10
model: baidu/ernie-5.5-flash-preview:free
words: 8720
---

<NATIVE_REASONING>
We need answer user's request. Need produce >=1000-word depth with exact XML sections. Need analyze source. User wants Drive Source etc. They expect maybe research reasoning on paper, not betting. Need follow invariants: no betting lines, no fake ratios. Need formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes. Cite exact page markers and verbatim quotes when source pages provided. Need include <THINK_TRACE> deep multi-hop derivation & gray-zone audit >=400 words. <SOURCE_OPERATORS_AND_EQUATIONS> formal LaTeX, units, page citations, breakdown. <RETROCAUSAL_GENEALOGY> historical/scientific lineage & multi-week traps. <RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock. <CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof. <RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

Need answer likely about MATR paper. Need ensure no betting lines. Need mention no odds. Need likely evaluate claims: MATR motion-aware transformer reduces query collisions, improves HOTA etc. Need maybe use RLVR? What is RLVR? Could be reinforcement learning verification? Counterfactual vetoes scenarios. Need produce 3 verifiable RLVR veto scenarios + predictions. Need be careful with facts.

Need cite exact [PAGE n] markers and verbatim quotes. Need include equations from paper: Eq 1 U_t-1^trk = Q + CrossAtt(SelfAtt(Q), M^t). Eq 2 Ltraj = 1/N sum_B sum_S sum_Ntrk L1(Yhat, Y). Eq 3 L_MAT = tau_traj L_traj + L_MOTR, tau_traj=5. Need discuss units: dimensionless losses, IoU [0,1], HOTA percent, parameters million, FLOPs percent. Need formal assumptions and singularities: if motion predictor fails under large displacements, query collision; threshold Tmiss=25 frames etc. Need cross-layer veto: physical/biomechanical/weather. For DanceTrack human dance biomechanics? Need maybe veto if no weather? Need prove physical veto: if input frame interval too large and occlusion, motion prediction not sufficient; BDD weather/low contrast. Need include exact quotes for weather? Page 5 says BDD100k has diverse scenarios in terms of object scales, weather conditions, and times of day. Page 8? Need cite.

Need ensure word count >=1000 across sections. THINK_TRACE >=400 words. Others maybe total >1000. Need no betting. Need not mention spreads/totals/moneylines/odds. Could mention "probability units" but no betting odds. Need avoid "odds" word? Invariant zero betting lines: never mention spreads, totals, moneylines, or odds. Avoid these words entirely. Use probabilities, likelihood ratios? "likelihood ratio" maybe okay? But avoid "odds". Also no "totals" maybe not. Need not mention "total"? It says zero betting lines: spreads, totals, moneylines, odds. Avoid those exact words. Use "sum", "count".

Need maybe "RLVR" unknown. We can define as counterfactual verification regime? Need likely use RLVR as "reinforcement learning verification rubric"? The prompt says RLVR_COUNTERFACTUAL_VETOES. Need produce three veto scenarios and predictions. Could frame as verification scenarios where claim would fail. Need verifiable: using dataset logs, metrics, ablation. Need predictions.

Need include "SI/information/probability units". Could say all metric scores are percentages, dimensionless; loss is mean absolute error in normalized box coordinates if coordinates normalized, units px if pixels. Need be precise: paper does not specify coordinate normalization? It predicts [x,y,w,h]; likely normalized? DETR uses normalized centers. But paper doesn't explicitly say. Need state assumption: if boxes are normalized [0,1], L1 dimensionless; if pixel, pixels. Need cite page 4: predicts [x,y,w,h]. Need not overclaim. Need include information units: query features embedding dimension D, memory features; attention cross entropy? Not in paper. We can mention no explicit information units; query tensors shape Ndet x D, PE Ndet x 4. Probability thresholds tau_det=0.7, tau_tau=0.5. Those are probabilities dimensionless [0,1]. Need use LaTeX.

Need multi-hop derivation: from MOTR query collision to MATR pre-update to reduced distance, then association. Could derive: Query distance d = 1 - IoU. If d high, Hungarian assigns wrong object. MAT reduces mean distance from 0.33 to 0.13. Improvement in AssA? Need link not causal exactly but observed. Need gray-zone: correlation vs causation, baseline improvements, extra data, R50 vs Swin. Need discuss FairMOT? Need mention DanceTrack table: MOTR 54.2? Wait table says MOTR E2E 40 params, HOTA 54.2? In page 5 Table 1: MOTR HOTA 54.2? It shows Methods Attributes Metrics E2E P(M) HOTA DetA AssA MOTA IDF1; MOTR ✓ 40 54.2 73.5 40.2 79.7 51.5. MATR-R50 42 69.4 81.5 59.1 91.0 72.6. MATR 43 71.3 82.6 61.6 91.9 75.3. MATR‡ 43 73.9 84.5 64.8 92.9 76.5. But text says MATR improves HOTA by more than 9 points over MOTR without additional data. 71.3-54.2 = 17.1? But baseline improvement table says MOTR baseline 54.2? Wait Table 2: MOTR HOTA 54.2; +Bl-IMP 58.8; +Bl-IMP+MAT 63.6? That's 5 epochs? Then text says compared to MOTR HOTA improves 9.4 points and MOTA 6.7, detection 3.6, association 12.5, IDF1 14.9. 54.2 to 63.6 = 9.4. So final full training maybe 71.3? Need careful: In ablation 5 epochs, MATR with baseline improvements 63.6 vs MOTR 54.2. Full DanceTrack final MATR 71.3. The text says MATR-R50 improves HOTA by 15.2 over MOTR? 69.4 - 54.2 = 15.2. But abstract says improves HOTA by more than 9 points over MOTR without additional data and reaches 71.3 with supplementary data. There is some inconsistency? Maybe MOTR full trained? Need mention gray zone: metric improvements are context dependent; ablation 5 epochs vs final training. Need not accuse. Need cite exact.

Need "multi-week traps" in retrocaual genealogy. Maybe discuss historical lineage: tracking-by-detection, Kalman, Hungarian, DETR, TrackFormer, MOTR, MATR. Multi-week traps: training instability, overfitting with DAB full, sequence length schedule, threshold choices, dataset scale. Need maybe "multi-week" as long-duration training traps: 20 epochs DanceTrack, 13 epochs BDD100k, decay schedules, convergence. Need mention page 6: training 20 epochs, decay every 8; SportsMOT same excluding extra datasets; BDD 13 epochs decay at epoch 11; 2.5 days and 7 days. Multi-week? 2.5 days not weeks, but could be research weeks. Need maybe "multi-week traps" as long horizon project traps: baselines, hyperparameter coupling, evaluation set leakage, extra data. Need cite.

Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Need interpret: crisis habit regression: when tracking fails (occlusion) model may revert to local detection/habit; counter-trap: MAT motion prediction anticipates future positions, preventing regression; clock: temporal thresholds Tmiss=25, sequence length 5, frame intervals 1-10. Need discuss inference thresholds. Need maybe "habit regression" as deterministic tracker behavior? Need include.

Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need prove when MATR would be vetoed: if object displacement exceeds motion model or encoder memory can't capture due to low visibility, occlusion, fast motion, weather. Need formal: if predicted position error e_t > decision margin, assignment error. Use IoU threshold tau_IoU=0.5, track confidence thresholds. For DanceTrack human motion can be fast but within frame resolution; for BDD weather (rain/fog/night) reduces detection confidence. Need cite page 5 weather, page 8 thresholds for BDD τdet=0.5 τtrk=0.5 Tmiss=10. Need physical: frame sampling random intervals 1-10 frames page 6; if large interval and high velocity, displacement > box size; linear/learned motion may underpredict; IoU zero. Need no fake equations. Use formal inequality: let b_t ground truth, b_t+1 predicted. If IoU(b_pred,b_gt)<tau then assignment risk. Could define d=1-IoU. MAT reduces mean d but not zero; page 2 mean 0.13 vs ideal 0.12.

Need "RLVR counterfactual vetoes" maybe define RLVR as "reproducibility/log-verification rubric"? Need produce three scenarios:
1) Fast-motion/large-gap veto: If video frame interval sampled > 10 or dancers change direction abruptly, MAT prediction error leads IoU <0.5; prediction: HOTA association drops, identity switches, especially if Tmiss=25 insufficient.
2) Weather/occlusion veto BDD: If fog/rain/night/low contrast, encoder memory low SNR; track confidence below τtrk=0.5 for >Tmiss=10 frames; prediction: mHOTA and mAssocA lower than reported, localization may survive? Need verifiable with adverse-weather subset.
3) Baseline/ablation reproducibility veto: If using MOTR without baseline improvements and only MAT added, or if full DAB increases parameters 42M to 49M and HOTA drops 69.4 to 67.6; prediction: adding motion module to weak baseline yields smaller gain than 9.4 points; need verify via Table 2 and page 3. Or if extra data omitted, MATR not reach 71.3? Actually 71.3 maybe with supplementary data? Abstract says 71.3 with supplementary data. Table 1 MATR 71.3 maybe with? Table has MATR‡ 73.9 with val set. Text says DanceTrack training data with CrowdHuman. Extra? It says without additional data? Page 6: combine DanceTrack training data with CrowdHuman. Is CrowdHuman extra? They follow standard practice. Need maybe third veto: if external detection/memory tricks are necessary, MATR's gain may not isolate MAT. But paper reports ablations.

Need ensure "3 verifiable RLVR veto scenarios + predictions". Could include exact verification method: logs, per-frame IoU, subset metrics.

Need final format exactly XML sections? User specified sections. We can output with those tags. Need ensure no extra outside? Probably okay. Need include THINK_TRACE etc. Need word count >=1000. Need maybe count approximate. Let's draft lengthy.

Need be careful with citations: Use [PAGE 1], [PAGE 2], etc. Need exact verbatim quotes. Need include quotes for key claims:
- Page 1: "which explicitly predicts object movements across frames to update track queries in advance."
- Page 1: "When a track query drifts from its ground-truth location, Hungarian matching may assign it to a different object that happens to be closer, resulting in identity switches and unstable training."
- Page 2: "MATR (ours, purple) concentrates track queries near ground truth by pre-moving them before decoding, while MOTR (cyan) exhibits a more dispersed distribution, often with large deviations (mean distance 0.33 vs. 0.12 for Hungarian matching). ... MATR ... mean distance (0.13)"
- Page 4: Eq 1? Need quote: "U t−1 trk = Qt−1 trk + CrossAtt(SelfAtt(Qt−1 trk ), M t)"
- Page 4: "To provide a complete representation, MAT predicts not only the bounding box center coordinates but also its width and height, denoted as [x, y, w, h]."
- Page 4: trajectory loss quote.
- Page 6: "τtraj = 5 is a fixed weighting coefficient"
- Page 5: "we use only the box propagation strategy from [37], rather than adopting the full DAB model. Fully incorporating DAB increases parameters from 42M to 49M, but unexpectedly reduces HOTA from 69.4 to 67.6." Wait page 3? It is PAGE 3 text? Actually in provided text: Page 3 contains baseline improvement: "It is important to note that we use only the box propagation strategy ... Fully incorporating DAB increases parameters from 42M to 49M, but unexpectedly reduces HOTA from 69.4 to 67.6." It's PAGE 3. Need cite [PAGE 3].
- Page 5: BDD weather: "highly diverse scenarios in terms of object scales, weather conditions, and times of day."
- Page 4 inference thresholds: "we set the thresholds to τdet = 0.7, τtrk = 0.5, and Tmiss = 25, unless otherwise specified." Page 4.
- Page 8 BDD thresholds: "During evaluation, we set thresholds to τdet = 0.5, τtrk = 0.5, and Tmiss = 10." Page 8.
- Page 6 training sequence: "the sequence length S is fixed at 5" and "batch containing a video clip of S frames sampled at random intervals from 1 to 10 frames." Page 6.
- Page 8 conclusion: "MATR mitigates query collisions through motion prediction but does not completely eliminate them." Good.

Need formal equations: 
1) MAT update: U = Q + CrossAtt(SelfAtt(Q), M^t). Dimensions: Q ∈ R^{N_trk × D}; M^t ∈ R^{N_mem × D}. Output same dimension. D embedding units. 
2) Trajectory loss: L_traj = 1/N Σ_{b=1}^B Σ_{s=1}^S Σ_{j=1}^{N_trk} ||ŷ_{b,s,j} - y_{b,s,j}||_1. If boxes normalized: dimensionless; if pixels: pixels. 
3) Total loss: L = τ_traj L_traj + L_MOTR, τ=5 dimensionless. 
4) Distance d = 1 - IoU, d∈[0,1]. Query collision condition: argmax Hungarian assignment a* = argmin cost; collision if a* ≠ identity. Could formal: for track query q_i and GT A, if IoU(q_i,A) < τ_IoU and IoU(q_i,B) > τ_IoU, collision risk. Use τ_IoU=0.5 training filter page 6? Actually tracked targets with IoU below τ_IoU=0.5 filtered out page 6. Figure uses IoU values. 
5) Inference occlusion: state inactive if p < τ_trk; remove if count consecutive frames > T_miss. Formal: if p_t<τ_trk for t∈{t_0,...,t_0+T_miss}, remove. Probability units.
6) Breakdown regime: when frame interval Δt leads displacement Δx; if predicted box b_{t+1} has IoU < τ_assign, tracker may lose. We can define assignment margin M = IoU(correct) - max_{wrong} IoU; collision if M ≤ 0. No fake. Could include.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include units and breakdown. Need no fake toy equations. Use formal.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. We can structure as proof: Lemma 1: If object velocity v and frame gap Δt produce displacement exceeding box scale, learned motion may fail; if d=1-IoU high. But don't invent exact velocity threshold unless from data? Can state condition. Use inequality: displacement ||Δp||_2 > α min(h,w) leads low IoU. α not specified; no fake numeric? Could say α is scene-dependent and must be calibrated; no exact threshold given by paper. That's okay. Need avoid toy ratio. But α is maybe a toy ratio? It's not equation from source, but formal assumption. Need maybe avoid invented ratios? Invariant zero toy equations: Never invent fake ratios (Force/Fatigue). State formal LaTeX equations, units, assumptions, exact singularity regimes. We can include α as assumption but not fake? Better use generic condition with IoU. We can say without source-specified α, no numeric physical threshold can be derived. But need physical veto proof: use geometry: if predicted box center error e > (h+w)/2? Could be formal. Need not rely on fake.

Maybe derive geometric IoU bound for axis-aligned boxes: For same size boxes displaced by dx, dy, IoU = intersection / union. If displacement exceeds half widths, IoU ≤? Let's derive exact: Two axis-aligned boxes same width w height h, centers displaced by dx, dy. Intersection area = max(0,w-|dx|)*max(0,h-|dy|). Union = 2wh - intersection. IoU = A/(2wh-A). If |dx|≥w or |dy|≥h, A=0 => IoU=0. If displacement small, IoU high. We can present formal. Units: pixels. This is a valid geometric proof. Then if motion predictor error e_x,e_y leads displacement beyond w/h, IoU=0, query collision. This is not toy, it's geometry. Need mention assumptions: axis-aligned boxes, same size, no scale change; real boxes vary but singularity holds approximately. Breakdown regime: |e_x|≥w or |e_y|≥h. For normalized coordinates, same. Need tie to paper's distance 1-IoU and cluster at distance=1 [PAGE 2]. Quote: "many MOTR points cluster at distance = 1 (IoU = 0)". Good.

Weather veto: Low visibility reduces backbone feature confidence; detection score p_t falls below τ_trk or τ_det. If p_t<τ_trk for T_miss frames, remove. Formal probability. Need cite BDD weather [PAGE 5], thresholds [PAGE 8]. No exact weather model. Need state no source provides adverse-weather subset metric; veto is conditional.

Biomechanical veto: DanceTrack human motion can be non-smooth; MAT predicts future position with sequence-level supervision but only one decoder layer; if trajectory has abrupt direction change beyond learned motion prior, prediction error increases. Need cite page 5 DanceTrack "uniform appearances and diverse, complex motions". Page 1: "complex object motions and crowded scenes". Page 8: MAT does not eliminate collisions. Need formal: if true future position b_{t+1} lies outside MAT's predicted distribution support due to abrupt pose/occlusion, L1 error high; if IoU < τ_assign. Need no exact distribution. Could define risk R = P(IoU(ŷ_{t+1}, y_{t+1}) < τ). Without data cannot compute. Need mention.

Need "RETROCAUSAL_GENEALOGY" historical lineage & multi-week traps. Need discuss SORT, DeepSORT, Kalman, DETR, TrackFormer, MOTR, DAB-DETR, MATR. Multi-week traps: (1) copying MOTR without baseline improvements misattributes gains; (2) using full DAB worsens HOTA [PAGE 3]; (3) training with fixed sequence length and random drop track queries [PAGE 3]; (4) thresholds and extra data affect results; (5) benchmark differences (DanceTrack uniform appearance vs SportsMOT athletes only vs BDD categories). Need include citations.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. Need maybe interpret as model's policy under failure: detection queries habitually match nearest box; MAT counter-trap pre-moves; clock thresholds control removal. Need discuss:
- Habit regression: when track query drifts, Hungarian matching assigns to closer wrong object, identity switch [PAGE 1]. Detection queries also get noisy gradients.
- Counter-trap: MAT updates features and positions before decoder, reduces distance [PAGE 2], consistent training.
- Clock: sequence length S=5 [PAGE 6], Tmiss=25 default [PAGE 4], Tmiss=10 BDD [PAGE 8], frame intervals 1-10 [PAGE 6]. If clock too slow (large gaps) motion prediction misses; if too fast (short gaps) less occlusion but maybe less motion learning. Need mention no exact crisis habit empirical beyond metrics.

Need "RLVR_COUNTERFACTUAL_VETOES": Need 3 verifiable scenarios. Need maybe define RLVR: "counterfactual verification using recorded logs and ablation re-runs". But avoid making up acronym? User asked. We can say "For RLVR-style counterfactual veto analysis". Need scenarios:
1) High-displacement counterfactual: Hold DanceTrack model, increase sampled frame interval from 1-10 to >10 or evaluate on fast-motion subset. Prediction: track query distance d rises, AssA falls, HOTA reduction; verify by logging per-track IoU before decoder and assignment cost. Need no numeric predicted exact unless can derive? Could predict qualitative and perhaps if IoU=0 when displacement exceeds box size. Could include verifiable thresholds: if predicted center error exceeds box half-extent, IoU can approach 0. Need maybe "veto if mean d > 0.33"? But not necessarily. Better: veto if mean d returns toward MOTR 0.33. Need exact from source. 
2) Adverse weather BDD counterfactual: evaluate BDD100k fog/rain/night subset; track confidence below τtrk=0.5 for >10 frames -> removal. Prediction: mAssocA and mHOTA drop below full-set values; verify by confidence logs. Need note no subset numbers in source.
3) Ablation/baseline counterfactual: train MOTR with only MAT without baseline improvements or with full DAB. Source says full DAB reduces HOTA from 69.4 to 67.6 [PAGE 3]; Table 2 baseline improvements add 4.6 HOTA, MAT adds further to 9.4 over MOTR in 5 epochs [PAGE 6]. Prediction: if remove baseline improvements, gain over MOTR will be less than 9.4 points; if use full DAB, HOTA decreases. Verifiable by reproducing Table 2 and page 3. Need maybe third is extra data: If remove CrowdHuman/supplementary DanceTrack val, MATR may not reach 71.3/73.9. But source says MATR-R50 69.4 without? It says MATR-R50 (ours) 69.4, MATR 71.3 likely with CrowdHuman? Page 6 says combine DanceTrack with CrowdHuman. Page 5 Table 1 has MATR‡ with val set 73.9. Could be third. But ablation third more verifiable.

Need ensure no forbidden words. Search mentally: don't write "odds", "totals", "moneylines", "spreads". Avoid "total"? It says never mention spreads, totals, moneylines, or odds. The word "total" maybe as adjective? Better avoid "total" entirely. Use "sum", "overall", "cumulative". But equation has "total number of trackers" in source quote. If quoting source, it includes "total"? Invariant says never mention totals? Probably means betting totals, but to be safe avoid word "total" except maybe verbatim? The source quote includes "total number of trackers" if we quote Eq 2. We can avoid quoting that part or use "cumulative number". But need verbatim quotes for equations? We can paraphrase and cite. Need avoid word "totals". Also avoid "odds". "probability units" okay. "likelihood" okay. "overall" okay. "entire" okay. "aggregate" okay. Need avoid "spread". "variance"? okay. "dispersion"? okay.

Need maybe use "count" instead of total. In equations, N is number, not total. Use "N". Good.

Need ensure word count. Let's draft with sections. Need maybe use bullets but within XML tags. Need final only XML sections. Need no markdown? It's okay. Need include equations in LaTeX. Need maybe ensure all tags closed.

Let's outline:
<THINK_TRACE>
- Restate problem: query collision in DETR MOT.
- Multi-hop: MOTR track queries and detection queries share decoder; track query drift; Hungarian assigns wrong; loss corrupts.
- MAT introduces explicit motion prediction before decoder; uses encoder memory; updates feature and position; supervised by trajectory L1 across sequence; reduces d=1-IoU.
- Evaluate evidence: Table 2, Table 1, SportsMOT, BDD. Discuss gray zones: baseline improvements, parameters, extra data, 5-epoch ablation vs final, R50 vs Swin, correlation not isolated causation, thresholds, no per-motion subset.
- Audit possible failure: fast motion, occlusion, weather, threshold removal, fixed sequence length.
Need >=400 words. Let's write ~600.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Define operators, equations, units, citations, breakdown.
- Eq 1, Eq 2, Eq 3.
- Query collision formal.
- Geometric IoU singularity.
- Inference probability thresholds.
- Assumptions, breakdown.

Need maybe include exact page citations and verbatim quotes. Use many quotes.

<RETROCAUSAL_GENEALOGY>
- Lineage: SORT Kalman Hungarian, DeepSORT, ByteTrack, DETR, TrackFormer, MOTR, DAB-DETR, MATR.
- Multi-week traps: baseline confounding, DAB full, sequence length, augmentation drop track queries, thresholds, extra data, benchmark differences.

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: Hungarian nearest; counter-trap: MAT pre-move; clock: S=5, intervals 1-10, Tmiss 25/10; analysis.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical/biomechanical/weather veto proof. Include geometric lemma. Need maybe use exact quotes.

<RLVR_COUNTERFACTUAL_VETOES>
- 3 scenarios with verification and predictions.

Need ensure no "odds". Also no "totals". Avoid "total" in text. Use "cumulative". In equation quote maybe source says "N denotes the total number" but I can paraphrase. Need not quote that exact phrase. But need verbatim quotes for page citations. Use safe quotes without forbidden words. Check quotes: Page 1 "which explicitly predicts object movements across frames to update track queries in advance." safe. Page 1 "When a track query drifts from its ground-truth location, Hungarian matching may assign it to a different object that happens to be closer, resulting in identity switches and unstable training." safe. Page 2 "many MOTR points cluster at distance = 1 (IoU = 0)" safe. Page 2 mean distance quote safe. Page 3 DAB quote safe? "Fully incorporating DAB increases parameters from 42M to 49M, but unexpectedly reduces HOTA from 69.4 to 67.6." safe. Page 4 thresholds quote safe. Page 5 weather quote safe. Page 6 training quote safe. Page 8 conclusion quote safe. Avoid source quote with "total". Good.

Need include SI units: meters? Pixels, frames, seconds. If video frame rate fps unknown. Could define Δt = k / fps seconds where k is frame interval 1-10. But fps not given. We can state if fps f_s, time gap = k/f_s s. Need not invent f_s. Use variable. Physical displacement v Δt. This is formal. Units: pixels/frame if velocity in px/frame; or m/s with camera calibration. No calibration in paper. Need mention not provided.

Need maybe information units: embedding dimension D, memory tokens N_mem, attention matrix sizes. Could state CrossAtt produces a tensor in R^{N_trk × D}; no explicit bit units because learned continuous features. If quantized, bits would be log2 cardinality, but not in paper. Need not overdo.

Need "probability units": thresholds τdet, τtrk are scalar probabilities in [0,1]. HOTA metrics percentages; parameter counts million; FLOPs +5% dimensionless relative.

Need "singularities/breakdown regimes": IoU=0, query collision, threshold removal, training instability if track query drift, if displacement > box extent, if confidence low, if extra data absent? Need exact.

Need maybe include "Assumptions": axis-aligned boxes for geometric proof; boxes normalized or pixels; Hungarian assignment cost primarily IoU; MAT can approximate motion but not guarantee; encoder memory sufficiently informative; thresholds fixed.

Need maybe cite [PAGE 2] for Hungarian assignment strict and IoU examples: red box 0.1 IoU with A, 0.7 with B. Good.

Need ensure final word count >1000. Let's estimate: THINK_TRACE 600, SOURCE 600, RETRO 350, TO MIND 300, VETO 450, RLVR 450 => 2750. Good.

Potential issue: user says ">= 1,000-WORD DEPTH across these exact XML sections" maybe total across sections. We satisfy.

Need no external info? Use only source. Can discuss general known but tie to source. Need maybe not cite outside. Good.

Let's craft carefully.

Need think about RLVR: Could be "Reinforcement Learning with Verifiable Rewards"? Counterfactual vetoes. Need maybe phrase: "RLVR-style verification requires a falsifiable log and a metric." Need not define too much.

Need avoid "betting". Good.

Let's write final.

Double-check forbidden words: "totals" maybe not. "odds" not. "spread" not. "moneylines" not. "totals" maybe if "total" appears? I will avoid "total" entirely. Use "overall" maybe okay. "entire" okay. "cumulative" okay. "sum" okay. "aggregate" okay. "count" okay.

Need check quotes: "the total number of trackers" not used. Equation 2 I can write with N as denominator; say "N is the cumulative number of trackers used for normalization" not quote. Good.

Need maybe mention "HOTA is a higher-order metric" from page 5? safe.

Need include exact page markers [PAGE n]. Good.

Potential issue: The source page 1 has "MATR improves HOTA by more than 9 points over MOTR without additional data and reaches a new state-of-the-art score of 71.3 with supplementary data." Need quote? safe. Use.

Need note: Table 1 MOTR HOTA 54.2, MATR-R50 69.4, MATR 71.3. But abstract says 71.3 with supplementary data; Table MATR maybe with supplementary? The text page 2 says DanceTrack MATR improves HOTA by more than 9 points over MOTR without additional data, and reaches 71.3 when supplementary data are included. But Table 1 MATR 71.3 maybe includes supplementary? Could be. Need gray zone: "supplementary data" and CrowdHuman. Page 6 says combine DanceTrack with CrowdHuman following standard practice. Need not resolve fully. Mention as gray-zone.

Need maybe mention parameter counts: MOTR 40M, MATR-R50 42M, MATR 43M, MOTRv2 94M, MOTRv3 103M. Source page 5 Table 1. Page 6 says +1M params +5% FLOPs vs MOTR. Need cite page 6.

Need formal equation for query collision cost? Hungarian matching uses cost. Paper doesn't give cost formula. Could write generic: assignment a* = argmin_{a∈Π} C(Q,a), with C based on classification and box distance in DETR. But source not exact. Could state assumed DETR-style cost. Need not invent exact. Maybe avoid. Use IoU condition from figure. Good.

Need maybe mention "filter outputs of Transformer Decoder" and inactive trajectory. Quote page 4. Good.

Need ensure "SOURCE_OPERATORS_AND_EQUATIONS" includes page citations for every equation. Eq1 page 4. Eq2 page 4. Eq3 page 6. Distance page 2. Thresholds page 4, page 8. DAB page 3. Training page 6. Good.

Need maybe include "SI units" explicitly: pixels, frames, seconds. For L1: if normalized, dimensionless; if pixels, pixel units. For attention: feature dimensions D dimensionless learned units. For thresholds: probability [0,1]. For parameters: 10^6 scalar parameters. FLOPs percent dimensionless. Good.

Need maybe include "information units" in source operators: If memory M has N_mem tokens each D dims, raw tensor size N_mem*D scalar values; if quantized to b bits, information = b*N_mem*D bits. But not in paper; can state optional. Need avoid fake. Good.

Need maybe include "exact singularity/breakdown regimes": Eq1 breaks if CrossAtt cannot align due to non-differentiable? It is differentiable. Breakdown if encoder memory lacks object due to occlusion; query update may extrapolate wrong. Eq2 breaks if predicted boxes have zero overlap? L1 stable, unlike IoU; that's why chosen. Quote page 4: "trajectory supervision must remain stable even when boxes have little or no overlap". Need cite. Eq3 weighting if τtraj too high could overfit trajectory; source fixed 5. Not a breakdown but assumption.

Need maybe mention "no toy equations". Our geometric IoU is formal.

Let's draft. Need ensure no accidental forbidden words. I'll scan after drafting.

Draft:

<THINK_TRACE>
... (write). Need 400+ words. Let's compose in final.

Need maybe use "cumulative" not total. "entire sequence" okay. "overall" okay.

Potential word "totals" in "total" not. Avoid.

Let's write final now. Ensure XML tags exact. final only.

</NATIVE_REASONING>

<THINK_TRACE>
The core reasoning chain in the paper is a multi-hop failure-mode analysis followed by a surgical architectural correction. The first hop is the identification of “query collisions” inside DETR-style multi-object tracking. In MOTR, track queries and detection queries are processed jointly inside the same Transformer Decoder layer. Track queries are supposed to preserve object identity across frames, while detection queries are reassigned through Hungarian matching. The paper states that “When a track query drifts from its ground-truth location, Hungarian matching may assign it to a different object that happens to be closer, resulting in identity switches and unstable training” [PAGE 1]. This creates two coupled defects: identity drift for the track query, and noisy gradients for detection queries because the decoder must reconcile two conflicting assignment logics.

The second hop is the proposed remedy: explicit motion prediction before decoding. MATR introduces a Motion-Aware Transformer module that predicts future object position from the current frame’s encoder memory and updates track-query features and positional embeddings before they enter the main decoder. The paper says MATR “explicitly predicts object movements across frames to update track queries in advance” [PAGE 1]. This is not a post-hoc filter like a Kalman filter; it is a learned, differentiable module trained end-to-end with the tracker. The mechanism is formalized as an additive query update: the previous track query is refined by self-attention and then aligned to the current encoder memory through cross-attention [PAGE 4].

The third hop is the supervision design. MAT is not merely allowed to hallucinate motion; it is trained with a trajectory loss over the full sequence. The loss is L1, not IoU-based, because trajectory supervision must remain stable even when boxes have little or no overlap across frames, such as during fast motion or occlusion [PAGE 4]. This choice matters: IoU-based losses become degenerate when overlap approaches zero, whereas L1 directly penalizes coordinate and scale deviations. The paper explicitly predicts “[x, y, w, h]” rather than only centers, which aligns feature and positional embeddings in the same coordinate frame [PAGE 4].

The fourth hop is the empirical evidence. On DanceTrack, the authors report that MATR improves HOTA by more than 9 points over MOTR without additional data and reaches a state-of-the-art score of 71.3 with supplementary data [PAGE 1]. The ablation table shows that baseline improvements alone raise HOTA from 54.2 to 58.8, and adding MAT raises HOTA to 63.6 in the five-epoch ablation setting [PAGE 6]. The paper attributes the gain to reduced query drift: “MATR concentrates track queries near ground truth by pre-moving them before decoding, while MOTR exhibits a more dispersed distribution” [PAGE 2]. The distance statistic d = 1 − IoU falls from a mean of 0.33 for MOTR to 0.13 for MATR, approaching the Hungarian-matched detection-query reference of 0.12 [PAGE 2].

The gray-zone audit requires separating correlation from mechanism. The paper shows that motion-aware updates co-occur with better association, but the final gains are also entangled with baseline improvements, backbone choice, extra data, sequence length, dropout, thresholds, and dataset-specific training schedules. For example, MATR-R50 reaches 69.4 HOTA with 42M parameters, while MATR with Swin-Tiny reaches 71.3 HOTA with 43M parameters, and MATR‡ reaches 73.9 HOTA after additionally training on the DanceTrack validation set [PAGE 5]. The paper also warns that fully incorporating DAB increases parameters from 42M to 49M but reduces HOTA from 69.4 to 67.6 [PAGE 3]. Thus the causal claim “motion prediction improves tracking” is plausible but must be adjudicated against confounders. The safest inference is that MAT reduces a documented failure mode—query drift—while the architecture and training recipe provide additional, interacting improvements.

A further gray-zone issue is the definition of “collision.” The paper uses IoU-based geometric evidence: a track query can have 0.1 IoU with its true object but 0.7 IoU with another object, causing Hungarian matching to assign it incorrectly [PAGE 2]. This is a geometric assignment failure, but it is also an optimization failure: once a wrong assignment enters the loss, the decoder receives gradients that can corrupt both tracking and detection representations. MATR does not remove all collisions; the conclusion explicitly says “MATR mitigates query collisions through motion prediction but does not completely eliminate them” [PAGE 8]. Therefore, the correct theoretical status is not “collision-free tracking,” but “collision-rate reduction via predictive pre-alignment.”

Finally, the breakdown regimes are visible in the paper’s own limits. Large inter-frame motion can drive distance toward 1, meaning IoU approaches 0 [PAGE 2]. Occlusion can reduce track confidence below τtrk, after which the tracker retains the embedding temporarily and then removes it after Tmiss consecutive frames [PAGE 4]. For BDD100k, the threshold regime is different: τdet = 0.5, τtrk = 0.5, and Tmiss = 10 [PAGE 8]. The model therefore depends on a temporal clock, a confidence probability, and a motion prior. If any of those fail—because the object changes direction abruptly, disappears behind another object, or appears under adverse weather—the motion-aware update can become a source of confidently wrong prediction rather than a corrective mechanism.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
1. MAT query-update operator.

The paper defines the Motion-Aware Transformer update as:

\[
U^{trk}_{t-1}
=
Q^{trk}_{t-1}
+
\operatorname{CrossAtt}
\left(
\operatorname{SelfAtt}(Q^{trk}_{t-1}),
M^t
\right)
\tag{1}
\]

Source: [PAGE 4].  
Interpretation and units:

- \(Q^{trk}_{t-1}\) is the track-query tensor from the previous frame.
- \(U^{trk}_{t-1}\) is the updated track query entering the main decoder.
- \(M^t\) is the Transformer Encoder memory for the current image.
- If the embedding dimension is \(D\), then each query vector lies in \(\mathbb{R}^{D}\).
- Self-attention operates over track queries; cross-attention aligns those queries to the current-frame memory.
- The output remains in the same learned embedding space, so no explicit physical unit such as meters or pixels is assigned to the feature update itself. The positional component, however, is later associated with boxes \([x,y,w,h]\), which can be interpreted as pixel coordinates or normalized coordinates depending on implementation.

2. Track-query trajectory loss.

The paper’s trajectory loss is:

\[
L_{traj}
=
\frac{1}{N}
\sum_{b=1}^{B}
\sum_{s=1}^{S}
\sum_{j=1}^{N_{trk}}
L_1
\left(
\widetilde{Y}_{bbox},
Y_{bbox}
\right)
\tag{2}
\]

Source: [PAGE 4].  
The paper states that MAT predicts “not only the bounding box center coordinates but also its width and height, denoted as \([x, y, w, h]\)” [PAGE 4].

Units and assumptions:

- If box coordinates are normalized to \([0,1]\), then \(L_{traj}\) is dimensionless.
- If box coordinates are in pixels, then \(L_{traj}\) has units of pixels, averaged over predictions.
- \(B\) is batch size, \(S\) is sequence length, and \(N_{trk}\) is the number of trackers per batch.
- \(N\) is the normalization count over trackers.
- The loss is L1, not IoU-based, because “trajectory supervision must remain stable even when boxes have little or no overlap across frames” [PAGE 4].

3. Overall MATR loss.

The overall training objective is:

\[
L_{MATR}
=
\tau_{traj} L_{traj}
+
L_{MOTR}
\tag{3}
\]

Source: [PAGE 6].  
The paper says “\(\tau_{traj} = 5\) is a fixed weighting coefficient, and \(L_{MOTR}\) is retained exactly as in MOTR” [PAGE 6].

Units:

- \(\tau_{traj}\) is dimensionless.
- \(L_{traj}\) and \(L_{MOTR}\) are scalar losses.
- The weighting means trajectory prediction is not a minor auxiliary term; it is a first-class training signal.

4. Query-collision distance and IoU.

The paper visualizes track-query distance as:

\[
d = 1 - \operatorname{IoU}
\]

with \(d \in [0,1]\).  
It reports that MOTR has mean distance 0.33, MATR has mean distance 0.13, and Hungarian-matched detection queries have reference distance 0.12 [PAGE 2]. It also says “many MOTR points cluster at distance = 1 (IoU = 0)” [PAGE 2].

This distance is dimensionless. The singularity is exact:

\[
d = 1
\quad
\Longleftrightarrow
\quad
\operatorname{IoU}=0
\]

At this singularity, a track query has no overlap with its intended ground-truth box. If another object has higher overlap, Hungarian-style assignment can bind the query to the wrong object [PAGE 2].

5. Geometric breakdown condition.

For axis-aligned boxes of width \(w\) and height \(h\), if a predicted box is displaced from the true box by center error \((\Delta x, \Delta y)\), the intersection area is:

\[
A_{\cap}
=
\max(0, w - |\Delta x|)
\cdot
\max(0, h - |\Delta y|)
\]

and the IoU is:

\[
\operatorname{IoU}
=
\frac{A_{\cap}}
{2wh - A_{\cap}}
\]

assuming equal box size.  
Breakdown regime:

\[
|\Delta x| \ge w
\quad
\text{or}
\quad
|\Delta y| \ge h
\quad
\Longrightarrow
\quad
A_{\cap}=0
\quad
\Longrightarrow
\quad
\operatorname{IoU}=0
\]

This is a geometric proof that large center prediction error produces total localization overlap collapse. The paper’s empirical distance histogram supports the existence of this regime [PAGE 2].

6. Confidence and temporal-removal operators.

During inference, if a tracked object’s confidence falls below a threshold, it is retained temporarily; if it remains below threshold for more than \(T_{miss}\) consecutive frames, it is permanently removed [PAGE 4].

Formal condition:

\[
p_t < \tau_{trk}
\quad
\text{for consecutive frames}
\quad
t_0, t_0+1, \ldots, t_0+T_{miss}
\]

then the trajectory is removed.

Default thresholds from the paper:

\[
\tau_{det}=0.7,
\quad
\tau_{trk}=0.5,
\quad
T_{miss}=25
\]

Source: [PAGE 4].

For BDD100k:

\[
\tau_{det}=0.5,
\quad
\tau_{trk}=0.5,
\quad
T_{miss}=10
\]

Source: [PAGE 8].

Units:

- \(\tau_{det}\) and \(\tau_{trk}\) are probabilities in \([0,1]\).
- \(T_{miss}\) is measured in frames.
- If the video frame rate is \(f\) frames per second, then the wall-clock duration of \(T_{miss}\) frames is \(T_{miss}/f\) seconds.

7. Training sequence operator.

The paper uses:

\[
S = 5
\]

for the sequence length and samples clips with random intervals from 1 to 10 frames [PAGE 6].  
If the interval is \(k\) frames and frame rate is \(f\), the temporal gap is:

\[
\Delta t = \frac{k}{f}
\]

with \(k \in \{1, \ldots, 10\}\).  
The paper does not specify \(f\), so no exact seconds can be derived without dataset metadata.

8. Baseline and parameter breakdown.

The paper states:

“Fully incorporating DAB increases parameters from 42M to 49M, but unexpectedly reduces HOTA from 69.4 to 67.6.” [PAGE 3]

This establishes a breakdown regime: increasing model capacity without matching augmentation or regularization can degrade performance.  
Units:

- Parameters are measured in millions of scalar weights.
- HOTA is reported as a percentage-like scalar metric, dimensionless but conventionally presented as a score out of 100.
- The +1M parameter and +5% FLOPs overhead claim for MATR relative to MOTR is also dimensionless relative cost [PAGE 6].

9. Metric operators.

The paper evaluates with HOTA, DetA, AssA, MOTA, IDF1, TETA, mTETA, mHOTA, mLocA, mAssocA, and mAssA [PAGE 5].  
These are scalar benchmark scores. They are not physical SI units. They are dimensionless evaluation quantities, usually reported as percentages or normalized scores.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage leading to MATR is a migration from handcrafted filtering to learned query propagation.

First generation: tracking-by-detection.  
SORT uses the Hungarian algorithm for assignment and a Kalman filter to predict object positions, matching detections using IoU [PAGE 2]. DeepSORT adds learned appearance embeddings compared by cosine distance [PAGE 2]. JDE, FairMOT, and Unicorn jointly train detection and appearance embeddings [PAGE 2]. ByteTrack uses high- and low-confidence detections [PAGE 2]. BoT-SORT refines Kalman-filter state, adds camera-motion compensation, and integrates Re-ID features [PAGE 2]. The historical pattern is clear: detection quality and motion prediction quality determine association quality.

Second generation: query-based end-to-end tracking.  
DETR replaced handcrafted post-processing with an end-to-end formulation [PAGE 1]. TrackFormer extended DETR by propagating detection queries as track queries [PAGE 1]. MOTR introduced a Temporal Aggregation Network to update track queries between frames [PAGE 1]. This established query propagation as the dominant strategy in end-to-end MOT.

Third generation: memory, detection enhancement, and external detectors.  
MeMOT uses short- and long-term memory banks [PAGE 3]. MeMOTR incorporates historical frame information [PAGE 3]. MOTRv2 integrates a YOLOX detector [PAGE 3]. MOTRv3 introduces release-fetch supervision, pseudo labels, and query grouping with disturbance [PAGE 3]. These methods improve performance but often increase architectural complexity or parameter count.

Fourth generation: MATR.  
MATR retains the end-to-end Transformer paradigm but adds explicit motion prediction. It is historically positioned as a corrective operator inside the query-propagation lineage: instead of relying only on self-attention or external detection tricks, it predicts future position before the main decoder processes the query.

Multi-week project traps are visible in the paper’s design choices.

Trap 1: baseline contamination.  
If one compares MATR against a weak MOTR baseline, the gain may be over-attributed to motion prediction. The paper reduces this risk by adding baseline improvements such as DAB-style box propagation and improved training strategies [PAGE 2]. The ablation shows that baseline improvements alone add 4.6 HOTA points, while MAT adds further gains [PAGE 6].

Trap 2: model-size illusion.  
Larger models can appear superior without being more sample-efficient. The paper reports that fully incorporating DAB increases parameters from 42M to 49M but reduces HOTA from 69.4 to 67.6 [PAGE 3]. This is a warning that capacity expansion can overfit or destabilize training when augmentation and convergence conditions are not matched.

Trap 3: convergence instability.  
MOTR gradually increased sequence length during training to address convergence challenges, whereas MATR maintains fixed sequence length without reported stability issues [PAGE 3]. A multi-week training trap is to assume that longer temporal context always helps. If the decoder cannot exploit the context, longer sequences can increase optimization difficulty.

Trap 4: temporal threshold coupling.  
The inference thresholds τdet, τtrk, and Tmiss determine whether uncertain trajectories survive. Defaults are τdet = 0.7, τtrk = 0.5, and Tmiss = 25 [PAGE 4], but BDD100k uses τdet = 0.5, τtrk = 0.5, and Tmiss = 10 [PAGE 8]. A multi-week trap is to transfer DanceTrack thresholds to driving videos without adjusting for category density, camera motion, and weather.

Trap 5: dataset annotation mismatch.  
SportsMOT annotations cover only athletes and exclude spectators, which differs from datasets such as CrowdHuman [PAGE 7]. A model trained with extra human crowd data may need filtering or annotation alignment; otherwise, false detections can corrupt end-to-end association.

Trap 6: supplementary data leakage into perceived architectural gain.  
The paper reports MATR results with DanceTrack training combined with CrowdHuman [PAGE 6], and separately notes that MATR‡ is trained additionally on the DanceTrack validation set [PAGE 5]. The historical trap is to compare a data-augmented method against a data-restricted baseline and conclude that the architecture alone is responsible for the gain.

The genealogical lesson is that MATR is not a radical replacement of the field. It is a targeted patch for a failure mode that emerged after query propagation became dominant: the decoder was forced to mix identity-preserving track queries with identity-agnostic detection queries. MATR introduces a predictive interface between those two regimes.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A useful way to audit MATR is to model the tracker as an agent with three interacting control layers: habit regression, counter-trap prediction, and temporal clocking.

Crisis habit regression.  
When a track query drifts, the system’s default habit is to rely on the assignment rule available inside the decoder. The paper describes the failure as follows: “When a track query drifts from its ground-truth location, Hungarian matching may assign it to a different object that happens to be closer, resulting in identity switches and unstable training” [PAGE 1]. This is a regression to nearest-geometry behavior. In a crowded scene, nearest geometry is not identity-preserving. The tracker effectively says: if the intended object is not close enough, choose the object that is closest. That is a brittle habit under high motion.

The paper’s example makes this explicit: a track query may have 0.1 IoU with its true object but 0.7 IoU with another object, causing an incorrect assignment under strict Hungarian matching [PAGE 2]. The habit regression is therefore not a low-level pixel error; it is an assignment-level identity failure.

Counter-trap mechanism.  
MATR’s counter-trap is to move the query toward its expected future position before the main decoder makes an assignment decision. The paper says MATR updates track queries “both feature and position” and predicts future positions in advance [PAGE 3][PAGE 4]. This changes the input distribution to the decoder: instead of receiving a stale query that may be closer to the wrong object, the decoder receives a query that has already been displaced according to a learned motion model.

The counter-trap has two components:

1. Feature counter-trap.  
Self-attention refines the query internally, and cross-attention aligns it to the current encoder memory [PAGE 4]. This helps the query encode “where this object is likely to be now,” not merely “where it was before.”

2. Positional counter-trap.  
The module predicts \([x, y, w, h]\), so the positional embedding is not left unchanged. The paper argues that leaving positional embeddings unchanged can cause a mismatch between feature and positional information [PAGE 4]. MATR therefore synchronizes feature space and positional space.

Temporal clock.  
MATR is governed by several clocks:

- Sequence length \(S=5\) during training [PAGE 6].
- Random inter-frame sampling from 1 to 10 frames [PAGE 6].
- Inference occlusion clock \(T_{miss}=25\) frames by default [PAGE 4].
- BDD100k occlusion clock \(T_{miss}=10\) frames [PAGE 8].

These clocks define how much history the model can exploit and how long uncertain tracks are allowed to persist.

Interaction between habit, counter-trap, and clock.  
If the clock is too slow relative to object motion—e.g., large gaps between sampled frames—the counter-trap may predict a position that is plausible for the learned motion prior but wrong for an abrupt direction change. If the clock is too aggressive in removing tracks, the tracker may lose objects during short occlusions. If the habit regression dominates, the model will assign queries to nearby wrong objects. If the counter-trap dominates without sufficient confidence control, the model may generate confidently wrong trajectories.

The paper’s conclusion acknowledges that the counter-trap is incomplete: “MATR mitigates query collisions through motion prediction but does not completely eliminate them” [PAGE 8]. This is the correct epistemic position. MATR does not create an omniscient theory of object identity. It creates a better prior over short-term motion, reducing the frequency with which the decoder’s default assignment habit encounters a catastrophic geometry.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto occurs when a lower physical layer invalidates an upper algorithmic claim. For MATR, the relevant layers are physical motion, biomechanical plausibility, imaging weather, and assignment geometry.

1. Physical veto: displacement beyond box support.

Let a track query’s predicted box at time \(t+1\) have center error \((\Delta x, \Delta y)\) relative to the true object center. For axis-aligned boxes of width \(w\) and height \(h\), if:

\[
|\Delta x| \ge w
\quad
\text{or}
\quad
|\Delta y| \ge h
\]

then the intersection area becomes zero, so:

\[
\operatorname{IoU}=0
\]

This is an exact geometric singularity. The paper’s distance metric confirms that MOTR often reaches this regime: “many MOTR points cluster at distance = 1 (IoU = 0)” [PAGE 2]. MATR reduces the average distance to 0.13, but it does not prove that the zero-IoU regime is eliminated [PAGE 2]. Therefore, any claim that motion prediction universally solves query collisions is vetoed by the geometric possibility of displacement beyond box support.

Physical assumptions:

- Boxes are treated as axis-aligned for the geometric proof.
- Real detections may be rotated, scale-varying, or non-axis-aligned, but the singularity condition remains qualitatively valid: sufficiently large center error causes overlap collapse.
- The paper does not provide camera calibration, object velocity in meters per second, or exact frame rate. Therefore, no physical threshold in seconds can be derived from the paper alone.

2. Biomechanical veto: dance motion can violate short-term extrapolability.

DanceTrack is described as containing “uniform appearances and diverse, complex motions” [PAGE 5]. Human dance motion can include abrupt stops, spins, limb occlusion, and rapid direction changes. A learned motion module trained on sequence-level L1 loss is likely to predict smooth short-horizon displacement. If the true motion is non-smooth, the predicted box may satisfy the learned motion prior but fail geometric overlap with the true box.

Formal risk condition:

\[
\operatorname{IoU}
\left(
\widehat{b}_{t+1},
b_{t+1}
\right)
<
\tau_{assign}
\]

where \(\widehat{b}_{t+1}\) is the predicted box and \(b_{t+1}\) is the ground-truth box.  
If \(\tau_{assign}\) is high, the tracker may discard a correct track; if low, it may accept a wrong track. The paper does not provide a single assignment threshold for MAT during training beyond filtering tracked targets with IoU below \(\tau_{IoU}=0.5\) [PAGE 6].

The biomechanical veto is therefore conditional: if dance motion contains abrupt transitions that violate the module’s learned motion distribution, MAT’s predictive update can amplify error rather than reduce it. The paper’s own qualitative examples show MATR succeeding in crossing and occlusion cases [PAGE 8], but qualitative success does not prove universal biomechanical coverage.

3. Weather veto: low-visibility driving scenes.

BDD100k is described as having “highly diverse scenarios in terms of object scales, weather conditions, and times of day” [PAGE 5]. Weather affects the encoder memory \(M^t\). If rain, fog, darkness, glare, or motion blur reduces feature quality, the cross-attention alignment in Eq. (1) may attend to weak or ambiguous memory. The resulting query update may be poorly conditioned.

Formal probabilistic veto:

If the detection confidence \(p_t\) falls below \(\tau_{trk}\) for more than \(T_{miss}\) consecutive frames, the trajectory is removed [PAGE 4]. For BDD100k:

\[
\tau_{trk}=0.5,
\quad
T_{miss}=10
\]

[Page 8].  
Thus, under adverse weather, if confidence remains below 0.5 for 10 frames, the tracker loses the object. This is not a speculative failure; it is built into the inference rule.

The weather veto does not say MATR fails everywhere in bad weather. It says MATR cannot guarantee preservation when the visual evidence supporting the encoder memory falls below the model’s confidence regime. The motion prior can continue predicting, but without sufficient visual support, prediction becomes unsupported extrapolation.

4. Cross-layer adjudication.

The upper-layer claim is: explicit motion prediction reduces query collisions and improves association.  
The lower-layer veto is: if predicted displacement causes zero overlap, or if confidence falls below threshold for too long, the assignment or removal process fails regardless of the motion module.

Therefore, the valid adjudication is:

- MATR is effective when the motion predictor reduces \(d=1-\operatorname{IoU}\) enough to keep the correct object as the preferred assignment.
- MATR is vulnerable when the physical displacement exceeds box support, when biomechanical motion violates the learned prior, or when weather/occlusion reduces confidence below temporal thresholds.
- The paper supports the first claim with mean-distance reduction and benchmark gains [PAGE 2][PAGE 5][PAGE 7][PAGE 8].
- The paper also supports the vulnerability claim by stating that collisions are mitigated, not completely eliminated [PAGE 8].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Veto scenario: high-displacement fast-motion counterfactual.

Counterfactual setup.  
Take the DanceTrack-trained MATR model and evaluate or train with frame intervals larger than the reported 1-to-10-frame sampling range [PAGE 6], or evaluate specifically on clips with abrupt direction changes and fast limb motion.

Why it is verifiable.  
One can log per-track distance:

\[
d_t = 1 - \operatorname{IoU}
\left(
\widehat{b}_t,
b_t
\right)
\]

before and after MAT update. The paper already provides the diagnostic distribution of this distance [PAGE 2]. If the high-displacement subset pushes mean \(d\) back toward the MOTR regime near 0.33, the counterfactual veto is confirmed.

Prediction.  
If inter-frame displacement becomes large relative to object box size, MAT’s predicted box will more often enter the geometric singularity where:

\[
\operatorname{IoU}=0
\]

or near-zero. Association accuracy, especially AssA and IDF1, should degrade more sharply than DetA. The model may still localize visible objects, but it will increasingly confuse identities when multiple similar-looking dancers cross paths.

2. Veto scenario: adverse-weather BDD100k counterfactual.

Counterfactual setup.  
Evaluate BDD100k subsets with rain, fog, night, glare, or motion blur, while holding model weights and thresholds fixed at:

\[
\tau_{det}=0.5,
\quad
\tau_{trk}=0.5,
\quad
T_{miss}=10
\]

[Page 8].

Why it is verifiable.  
One can inspect per-frame track confidence \(p_t\). If adverse weather reduces \(p_t\), the temporal removal rule becomes active:

\[
p_t < 0.5
\quad
\text{for more than 10 consecutive frames}
\]

This is directly testable from confidence logs.

Prediction.  
mAssocA and mHOTA should fall relative to all-scene BDD100k results. Localization may also fall, but association should be especially sensitive because the motion module depends on encoder memory quality. If memory is degraded, cross-attention has weaker evidence to disambiguate similar objects. The counterfactual veto is confirmed if the adverse-weather subset shows lower mAssocA and higher trajectory fragmentation than the full evaluation set.

3. Veto scenario: baseline-ablation counterfactual.

Counterfactual setup.  
Train two models:  
A) MOTR with MAT added but without the paper’s baseline improvements.  
B) MOTR with baseline improvements but no MAT.  
Then compare against the paper’s reported ablation where baseline improvements alone raise HOTA from 54.2 to 58.8, and adding MAT raises HOTA to 63.6 [PAGE 6].

Why it is verifiable.  
The paper already provides the relevant ablation structure [PAGE 6] and the warning that full DAB integration can reduce HOTA from 69.4 to 67.6 [PAGE 3]. Re-running these conditions is a direct reproducibility test.

Prediction.  
If baseline improvements are removed, the marginal gain from MAT alone should be smaller than the reported combined gain. If full DAB is added without the paper’s regularization and augmentation choices, HOTA should decrease or fail to improve, consistent with the reported drop from 69.4 to 67.6 [PAGE 3]. The veto is confirmed if MAT’s benefit is not additive across all baseline conditions, which would show that the motion module’s effect is entangled with training recipe, capacity control, and data augmentation.

4. Additional counterfactual audit: supplementary-data veto.

Counterfactual setup.  
Evaluate MATR without CrowdHuman or DanceTrack validation supplementation and compare against the reported MATR and MATR‡ results: 71.3 HOTA and 73.9 HOTA, respectively [PAGE 5]. The paper also states that DanceTrack training combines DanceTrack data with CrowdHuman [PAGE 6].

Why it is verifiable.  
The benchmark table separates MATR-R50, MATR, and MATR‡ [PAGE 5]. If the no-extra-data condition fails to approach the reported numbers, the architectural gain is not separable from data scale.

Prediction.  
Without supplementary data, MATR should remain stronger than MOTR but may not reach the highest reported score. The association metrics should remain improved relative to MOTR, but HOTA may be lower if detection recall and category coverage depend on extra data. This counterfactual does not refute MATR; it refines the causal claim: motion-aware query updating improves association, while supplementary data and baseline improvements jointly determine the final benchmark ceiling.
</RLVR_COUNTERFACTUAL_VETOES>