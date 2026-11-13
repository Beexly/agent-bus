---
source: "arxiv_2205.10949v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 11
model: deepseek/deepseek-v4.1-flash-1017
words: 7582
---

<NATIVE_REASONING>
We need answer to user. Need interpret "DRIVE SOURCE" with paper. They want probably analysis? No explicit question besides source. We must produce required XML sections with >=1000 words depth, exact sections. Need use source citations [PAGE N], verbatim quotes. Must avoid betting lines. No mention spreads etc. Need formal LaTeX equations, units, assumptions, breakdown regimes. Need retrocausal genealogy, recursive theory of mind, cross-layer veto, RLVR counterfactual vetoes. It seems the "GSE+GSI Frontier Reasoning Foundry" likely expects a deep analysis of the paper, maybe evaluating tracking models. We need produce 6 sections. Need make sure at least 1000 words. Could be around 1800-2500 words. Need no betting. Need treat source as paper on hockey player tracking. Need maybe point out not about GSE? The term "DRIVE SOURCE" maybe asks to analyze source pages with specific framework. We can frame as evidence audit of paper's claims and metrics. Need exact quotes and page markers.

Let's parse paper thoroughly.

Paper: Evaluating deep tracking models for player tracking in broadcast ice hockey video. Vats et al. arxiv 2205.10949v1. Pages 11. Key content:
- Abstract: player tracking challenging due fast-paced nonlinear motion, occlusion, camera panning/zooming. Prior handcrafted. No public network architectures/training data/metrics. Compare state-of-art tracking.
- Intro: 1.8 million players; positioning important; prior MPF and bipartite matching; MPF particle merge/split identity loss; no prevention identity switches after occlusions; Cai et al. not broadcast but rink coords after manual homography.
- Related work: basketball, soccer. Need not cite all.
- Methodology: five algorithms: SORT, Deep SORT, Tracktor, FairMOT, MOT Neural Solver. Four online, one offline. TBD vs JDT. TBD steps detection, affinity, inference. Detection representation {x,y,w,h,I,t}. Graph formulation G=(V,E), V detections, E every pair connected; split into connected components trajectories; node/edge embeddings CNN; message passing classifies edge same trajectory.
- Dataset: 84 broadcast NHL clips, 30 fps, 1280x720, avg 36 sec, 25 games, annotations player/referee bboxes and identity name/jersey. CVAT. Split 58 train, 13 val, 13 test at game level: 17/4/4 games. Table 2: 84 videos, 91,807 frames, 773,545 bounding boxes. MOT16 etc. Max 12 players screen, usually less. Stathletes permission.
- Annotation: 15 annotators; 10.45 min per minute video; total 527 minutes (note inconsistency? 84 clips average 36 sec = 50.4 min; 10.45 min per min=526.68 min yes). Tight bbox. Linear interpolation. Same ground truth identity assigned across FOV exit/reentry unlike MOT. Occlusion bbox best guess full body. Quality control labels. Partial entries annotated. Revision.
- Results: detector Faster-RCNN ResNet50 FPN pretrained COCO fine-tuned. AP 70.2, AP50 95.9, AP75 87.5 (Table 4). Metrics CLEAR MOT and IDF1. FN/FP/IDSW definitions. IDF1 better for sports because identity preservation. Table 3:
SORT IDF1 53.7 MOTA 92.4 IDSW 673 FP 2403 FN 5826
Deep SORT 59.3 94.2 528 1881 4334
Tracktor 56.5 94.4 687 1706 4216
FairMOT 61.5 91.9 768 1179 7568
MOT Neural Solver 62.9 94.5 431 1653 4394
Best MOT Neural Solver highest MOTA 94.5 and IDF1 62.9.
- Discussion: MOTA all >90 because equation. Player detection high due large size, reasonable count. SORT least IDF1 highest IDSW due linear motion + IOU. Deep SORT better. JDT single network multi-task better than separate (FairMOT > Tracktor), but JDT not significant over Deep SORT; lower ID switches of Deep SORT. MOT Neural Solver highest IDF1 and lower IDSW due no linear motion assumption; graph edge classification. Table 5 per video. Failure analysis: severe occlusions and players out of FOV due camera panning/movement. Pan identity switch definition. Same team players identical with features unidentifiable from 720p bboxes: jersey color, helmet model, visor model, stick model, glove model, skate model, tape color. During pan switch, player going out can re-enter any other point. Assume ground truth accurate no missing annotations; significant time gap between consecutive annotated detections only when leaves FOV and returns. Tgt tracklet. Pan switch expected when (ti - tj) > δ. Total approx sum_G 1(ti - tj > δ). Proportion = sum / IDSWs. For video 9 30 ID switches IDF1 53.33; plot proportion vs δ 40-80; Fig 3 majority ~90% at δ=40 due camera panning. Fig 4 all videos at δ=40; on average 65% of identity switches. Model tackles minor occlusions and lack of detections. Primary errors pan-identity switches and cluttered scenes.
- Conclusion: linear motion trackers don't perform; MOT neural solver best; IDF1 better; main source pan-identity switches.
- References list.

Need produce sections.

Need maybe include formal LaTeX with units. We can derive equations from paper:
MOTA eq:
\[
\mathrm{MOTA} = 1 - \frac{\sum_t (FN_t + FP_t + IDSW_t)}{\sum_t GT_t}
\]
dimensionless ratio; numerator/denominator counts (objects). Assumptions: matching threshold? CLEAR MOT uses IoU threshold maybe not specified. Breakdown regimes: when detector FP+FN dominates, MOTA compressed near 1? Wait formula: MOTA = 1 - error/GT. If FN+FP+IDSW small, near 1. In paper all >90 because high detection accuracy. If GT_t small or zero, singular. Need exact singularity: denominator sum GT_t = 0 undefined; small GT amplifies. If FP+FN large > GT, MOTA negative. In paper high due large players.

IDF1 formula not in paper; cite metric [18]. Could state standard:
\[
IDF1 = \frac{2|IDTP|}{2|IDTP|+|IDFP|+|IDFN|}
\]
dimensionless. Or use identity precision/recall. We should not invent? It's standard from cited ref but paper doesn't state equation. We can mark "external standard metric, not displayed in source; paper only names IDF1 [18]." That satisfies formal.

Pan-identity switch equations:
\[
(t_i - t_j) > \delta
\]
where t units frames; δ threshold frames. Eq 3:
\[
\sum_G \mathbf{1}(t_i - t_j > \delta)
\]
count. Eq 4:
\[
\frac{\sum_G \mathbf{1}(t_i - t_j > \delta)}{\mathrm{IDSWs}}
\]
proportion dimensionless. Assumptions: annotations complete; no missing GT; consecutive detections gap only due FOV exit. Breakdown: if δ too low, normal detector dropouts/occlusions misclassified as pan; if δ too high, misses pan switches. Need note not symmetric? Since t_i, t_j consecutive order; should be \(t_i - t_j\) if i later than j. If reversed sign, no detection; must enforce ordered. Singularity: IDSWs=0 denominator zero. For video 9, 30 IDSWs and IDF1 53.33 per Table 5. At δ=40 frames = 1.333 s at 30 fps; if δ=80 frames = 2.667 s. Could compute. Pan proportion 90% for video 9, 65% all. Could mention units.

Detection AP:
\[
AP = \int_0^1 p(r)\,dr
\]
dimensionless, depends on IoU threshold. AP50 at IoU=0.5 etc. Paper reports AP70.2 AP50 95.9 AP75 87.5. Need caution AP not directly tracking.

Data stats: 91,807 frames; 773,545 bboxes. Average bboxes per frame = 773545/91807 ≈ 8.425? Let's compute. 91,807*8=734,456; remainder 39,089; /91,807=0.4258. ~8.43 boxes/frame. That includes players/referees. Max 12. Paper says max number players can be 12, usually less. Could mention. Average clip duration 36 s, total frames? 84 clips *36*30 = 90,720, close 91,807. Actually average maybe slightly >36. We can compute exact average frames = 91807/84 = 1092.94 frames; at 30 fps =36.431 s. Good.

Need "retrocausal genealogy"—historical/scientific lineage & multi-week traps. Interpret: trace methods lineage: SORT -> Deep SORT -> Tracktor/FairMOT -> MOT Neural Solver. Prior hockey: Okuma et al. MPF + Adaboost; Cai et al. bipartite matching. Basketball/soccer. Retrocausal? We can frame as reverse engineering why later metrics/claims emerged: the paper's conclusion "linear motion model fails" is retrocausally supported by older MPF identity loss and later graph solver. Multi-week traps: evaluating with MOTA alone, game-level split leakage, pan switches, annotation assumptions, detector/tracker confound, δ threshold sensitivity, identity persistence across FOV. Need maybe mention "multi-week traps" as pitfalls for a research program over weeks. We can list. Need not betting.

"Recursive theory of mind" — crisis habit regression vs counter-trap vs clock. Need adapt to this paper. Theory-of-mind maybe modeling annotator/player/tracker expectations. We can discuss: trackers' implicit "belief" via motion model; when player exits FOV, identity prior should persist; linear Kalman assumes local continuity; graph solver uses relational belief. Crisis habit regression: under occlusion/pan, models regress to nearest-detection/IOU habits. Counter-trap: annotators assign same ID across FOV exit; model may match wrong same-team player because appearance features unidentifiable. Clock: temporal gap δ and frame rate; panning clock. Need formalize belief state? Maybe not overdo. Need >= section but can be 200 words.

"Cross-layer veto adjudication" — Physical/biomechanical/weather veto proof. For hockey: physical layer: boards, occlusion, camera FOV, rink geometry; biomechanical: skating nonlinear acceleration, sharp turns, collisions; weather: indoor ice, no weather; but ice conditions? Broadcast lighting/glare? Need "weather veto proof" maybe no weather signal, indoor arena. We must adjudicate whether physical/biomechanical/weather can veto tracking performance. Need use source: fast-paced nonlinear motion, occlusions, boards, camera panning/zooming. Biomechanical: linear motion assumption invalid due sharp changes. Weather: indoor, not applicable; but ice/lighting not reported. Need state vetoes: physical occlusion and FOV exit are hard vetoes on appearance re-ID; biomechanical nonlinear motion vetoes constant velocity; weather not a documented causal layer. Need "proof" with equations? Maybe define occlusion event O, pan event P. A tracker identity assignment \(\hat{a}_{i,j}\) requires observable evidence. If player leaves FOV, evidence zero; posterior identity entropy increases. Could give equation:
\[
H(I_k \mid \mathcal{O}_{t:t+\Delta}) \to H(I_k)
\]
as no observations; identity prior not identifiable. But "zero toy equations" means don't invent fake ratios. We can use information theory: entropy units bits/nats. But careful: not in source. We can state as formal audit, not paper. Good.

"RLVR_COUNTERFACTUAL_VETOES" — 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement Learning with Verifiable Rewards? Likely yes. Need propose 3 counterfactual veto tests that can verify paper claims, with predictions. They must be verifiable, no betting. We can list:
1. δ-sweep counterfactual: recompute pan-identity proportion across δ 40–80 for all 13 test videos; prediction monotonic decrease; video 9 at δ=40 ~90%; average ~65%; if not, claim vetoed.
2. Motion-model ablation counterfactual: replace graph solver with linear Kalman/IOU but same detections; prediction SORT-like IDSW increase and IDF1 drop, supporting nonlinear motion. Need specific from Table 3: SORT IDF1 53.7 vs MOT Neural 62.9, IDSW 673 vs 431. Prediction under same detector: SORT IDSW > graph solver, IDF1 lower. If graph solver not better with same detections, veto linear-motion explanation.
3. Identity-preservation across FOV counterfactual: mask/remove all detections with gap >40 frames from evaluation or relabel re-entry players as new IDs; prediction pan switches vanish and IDF1 rises, showing pan is main error. Or test on clips with high panning vs low panning. Need 3. Could include detector confound: swap detector with higher AP but same trackers; prediction if MOTA dominated by detector, MOTA improves but IDF1 not necessarily. But need exactly 3. We can give 3, each with prediction and falsification.

Need "CROSS_LAYER_VETO_ADJUDICATION Physical/biomechanical/weather veto proof." Maybe cross-layer veto adjudication should be a section.

Need "SOURCE_OPERATORS_AND_EQUATIONS" with formal LaTeX, units, page citations, breakdown. Include equations with exact quotes. Need cite exact [PAGE N] markers and verbatim quotes. We need use quotes verbatim. Let's identify quotes:
- [PAGE 1] Abstract: "Player tracking is a challenging problem since the motion of players in hockey is fast-paced and non-linear. There is also significant player-player and player-board occlusion, camera panning and zooming in hockey broadcast video." Exact.
- [PAGE 2] TBD: "TBD consists of three steps: (1) detecting objects ... (2) calculating affinity ... (3) inference - linking player detections using calculated affinities to produce tracks."
- [PAGE 3] graph: "The problem of tracking is posed as splitting the graph into disconnected components where each component is a trajectory Ti." and "The message passing algorithm classifies whether an edge between two nodes in the graph belongs to the same player trajectory."
- [PAGE 3] dataset: "84 broadcast NHL game clips with a frame rate of 30 frames per second (fps) and resolution of 1280 × 720 pixels. The average clip duration is 36 seconds."
- [PAGE 5] annotation: "The average time taken to annotate one minute of video is 10.45 minutes. The total time taken to annotate all 84 videos is 527 minutes." Also "the same ground truth identity was assigned to a player leaving camera FOV at a particular frame and re-entering after some time."
- [PAGE 6] Table 3 numbers. Need exact table. We can cite not quote all.
- [PAGE 6] "The MOT Neural Solver model obtains the highest MOTA score of 94.5 and IDF1 score of 62.9 on the test videos."
- [PAGE 7] Eq 1 quote maybe: "MOTA = 1 − Σt(FNt + FPt + IDSWt) / ΣtGTt" (not exact text with equation). Cite [PAGE 7].
- [PAGE 7] "Since false positives (FP) and false negatives (FN) heavily rely on the performance of the player detector, the MOTA metric highly depends on the performance of the detector."
- [PAGE 8] failure: "The major sources of identity switches are severe occlusions and players going out of the camera FOV (due to camera panning and/or player movement)." [PAGE 8].
- [PAGE 8] "players of the same team look identical with features such as, jersey color, helmet model, visor model, stick model, glove model, skate model, tape color etc unidentifiable from bounding boxes cropped from 720p broadcast clips."
- [PAGE 8-9] pan identity equation. [PAGE 9] "On average, pan identity switches account for 65% of identity switches in the videos."
- [PAGE 9] "trackers with a linear motion model do not perform well on hockey dataset, evident by the high number of identity switches occurring in models with linear motion assumption." [PAGE 9].

Need exact page markers. Page 9 includes eq and conclusion. Page 8 includes failure. Page 7 MOTA. Page 6 Table 3. Page 5 Table 2? Actually Table 2 is page 5. Page 4 dataset split. Page 3 Table 1. Page 2 methodology. Page 1 abstract/intro. Good.

Need "ZERO TOY EQUATIONS" means avoid fake ratios like Force/Fatigue. We can use only source equations and standard metric definitions. Need label any derived quantities as derived with units. E.g., average boxes/frame = 773,545 boxes / 91,807 frames ≈ 8.43 boxes frame^{-1}; that's a legitimate ratio of counts with units. But "toy equations" maybe not. It's fine as derived data audit. Need not overinvent. Entropy equation maybe formal but not source; could be okay if stated as audit formalism. But to be safe, keep to source equations plus standard IDF1 and AP. Use units and assumptions.

Need "RETROCAUSAL_GENEALOGY" maybe 250 words. Mention historical lineage: Okuma MPF, Cai bipartite, SORT, Deep SORT, Tracktor, FairMOT, MOT Neural Solver. "Retrocausal" can mean later graph-based result reframes earlier failures: particle merge/split identity loss [PAGE 1] and bipartite matching [PAGE 1] are precursors to identity switch metrics. Multi-week traps:
- Game-level split needed; paper does at game level [PAGE 4], but still only 4 test games. Trap: clip-level leakage.
- MOTA saturation >90 due detector; trap: optimizing MOTA.
- Pan-identity switch confounded with annotation convention assigning same ID across FOV exit [PAGE 5], so model must re-ID without appearance; trap: treating as tracker failure without controlling FOV.
- δ threshold sensitivity: 40-80 frames, 65% at 40; trap: fixed δ.
- Referee annotations: dataset includes referees but tracking players? Trap: class ambiguity.
- 720p and identical uniforms; appearance features weak.
- "MOT Neural Solver re-trained" on hockey; other models maybe? The paper says compare five; probably all retrained? It says best using MOT Neural Solver re-trained. Need not claim others not retrained. Could mention training protocol not fully detailed.

Need "RECURSIVE_THEORY_OF_MIND" — perhaps discuss tracker's implicit model of player intention; annotator's model; analyst's model. Crisis habit regression: under occlusion, tracker falls back to IOU/nearest neighbor; counter-trap: assigning same ID across exit is a counterfactual trap because re-entry can occur anywhere; clock: frame gap threshold δ. Need maybe formal:
Let \(I_k\) be identity. Tracker belief \(b_t(I_k)\). Observation likelihood \(p(o_t|I_k)\) collapses when bbox unidentifiable; transition prior \(p(I_k|I_{k,t-1})\) dominates. Under pan, transition is non-Markovian with FOV exit/re-entry; a Kalman filter's Gaussian velocity prior is wrong. Graph message passing can propagate identity via edge classification but still limited by visual evidence. Crisis habit regression = model reverts to linear motion. Counter-trap = same uniform and same team; re-entry at any screen coordinate. Clock = δ in frames and 30 fps; 40 frames = 1.33 s; 80 = 2.67 s. Need mention no explicit player intent available; theory-of-mind is about modeling occluded agent continuity and annotator conventions. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" — maybe table? XML sections can include lists and math. Need "Physical/biomechanical/weather veto proof." We'll include:
- Physical: rink boards and player-player occlusion; camera FOV panning. Veto if occlusion duration > δ or player leaves FOV; appearance re-ID evidence absent. Source quotes.
- Biomechanical: skating nonlinear acceleration, sharp turns; linear motion model invalid. Source quote "fast-paced and non-linear" and "Sharp changes in player motion often leads to identity switches" [PAGE 8]. Veto on constant-velocity Kalman when acceleration magnitude large relative to frame displacement? Could formalize kinematic condition: if residual \(\|x_{t+1} - (x_t + v_t \Delta t)\|\) exceeds bbox scale, linear model fails. Units pixels. But avoid fake? It's a legitimate residual. Maybe not necessary.
- Weather: indoor NHL broadcast; no weather covariate in dataset; cannot adjudicate. Ice quality/lighting maybe not reported; weather veto not supported. Need state not a causal layer in paper.

"RLVR_COUNTERFACTUAL_VETOES" — 3 scenarios. Need include predictions with exact numbers from paper where possible. "verifiable" means tests can be run on dataset. Use Table 3/5. Need avoid betting language. We can say "Prediction: ..." not "bet".

Need answer overall maybe start with "Source audit: ..." The required XML sections exact. We can include all six. Need ensure >=1000 words. We can write ~2000 words. Need be concise enough but deep.

Need no betting lines. Avoid words like odds, spreads, moneyline. Fine.

Need maybe mention "GSE/GSI" not defined. We can frame as "GSE/GSI readout" but not necessary. The user likely expects this exact format. We should not ask clarifying. We'll produce.

Need count words maybe ~2500. That's okay. But desired oververbosity 5; however system requires >=1000. We'll aim ~2000-2500.

Let's draft.

Structure:

<THINK_TRACE>
Deep multi-hop derivation & gray-zone audit (>=400 words). Need at least 400 words. We'll write maybe 600. Include:
- The source is a benchmark/evaluation paper, not a physical model. Its causal chain: detector -> affinity -> inference -> metrics -> failure analysis. Multi-hop: dataset construction (84 clips, 91,807 frames, 773,545 boxes) -> detector AP 70.2 -> trackers -> MOTA/IDF1 -> pan-switch decomposition. 
- Gray-zone audit: MOTA high >90 but IDF1 53.7-62.9; MOTA is detector-dominated. Table 3: FairMOT highest IDF1 among JDT? Actually FairMOT 61.5, Tracktor 56.5; FairMOT has lower MOTA 91.9 due FN 7568. Graph solver best IDF1 62.9, MOTA 94.5, IDSW 431. Need note not all metrics agree; FairMOT FP lowest 1179 but FN highest 7568. Deep SORT IDSW 528 vs Tracktor 687; paper says JDT no significant improvement over deep SORT. Gray: "best" depends metric: MOTA best 94.5 MOT Neural; IDF1 best 62.9; FP best FairMOT 1179; FN best Tracktor 4216? Wait Tracktor FN 4216, MOT Neural 4394, Deep SORT 4334; Tracktor FN lowest 4216. IDSW best MOT Neural 431. So no single dominance except MOT Neural on key metrics. 
- Annotation assumption: same ID across FOV re-entry [PAGE 5] makes pan switches hard; δ assumption. The paper's inferred pan proportion depends on "no missing annotations" and δ. Eq 4 denominator zero if no IDSW.
- Metric singularities: GT_t=0; IDSW=0; AP integration. 
- Need not overdo.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal equations with units and citations. Include MOTA eq with quote [PAGE 7]. IDF1 standard [PAGE 6] and [ref 18] but no equation in source. AP. Pan eq [PAGE 9]. Derived stats.
- Breakdown regimes.

<RETROCAUSAL_GENEALOGY>
- Lineage and traps.

<RECURSIVE_THEORY_OF_MIND>
- Tracker/annotator beliefs, crisis habit, counter-trap, clock.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical, biomechanical, weather.

<RLVR_COUNTERFACTUAL_VETOES>
- 3 scenarios.

Need exact quotes. We'll include quotes with [PAGE N]. Need not quote every. Use quotation marks. Let's ensure verbatim. The source text has "fast-paced and non-linear" (with hyphen). "signiﬁcant" uses ligature fi in source; we can normalize to "significant" but verbatim maybe exact with ligature? Better quote exact words but can use normal "significant" maybe okay. They asked verbatim quotes; use exact string as rendered? The text has "signiﬁcant" with fi ligature. We can include as "significant" but it's not verbatim character. To be safe, quote exact phrase with Unicode ligature? We can write "signiﬁcant player-player and player-board occlusion" (using ﬁ). Good. Also "aﬃnity" ligature; maybe avoid quoting those. Use quotes from pages that are plain. Page 5: "The average time taken to annotate one minute of video is 10.45 minutes." exact. Page 6: "The MOT Neural Solver model obtains the highest MOTA score of 94.5 and IDF1 score of 62.9 on the test videos." exact. Page 8: "The major sources of identity switches are severe occlusions and players going out of the camera FOV (due to camera panning and/or player movement)." exact. Page 9: "On average, pan identity switches account for 65% of identity switches in the videos." exact. Page 9: "trackers with a linear motion model do not perform well on hockey dataset" exact lower? Source: "From the performance of trackers we infer that trackers with a linear motion model do not perform well on hockey dataset". Good. Page 3: "The problem of tracking is posed as splitting the graph into disconnected components where each component is a trajectory Ti." exact (Ti italic). Page 3: "The message passing algorithm classiﬁes whether an edge between two nodes in the graph belongs to the same player trajectory." exact with ligature. Page 1: "Player tracking is a challenging problem since the motion of players in hockey is fast-paced and non-linear." exact. Page 1: "There is also signiﬁcant player-player and player-board occlusion, camera panning and zooming in hockey broadcast video." exact with ligature.
Page 7: "Since false positives (FP) and false negatives (FN) heavily rely on the performance of the player detector, the MOTA metric highly depends on the performance of the detector." exact.
Page 8: "players of the same team look identical with features such as, jersey color, helmet model, visor model, stick model, glove model, skate model, tape color etc unidentiﬁable from bounding boxes cropped from 720p broadcast clips." exact with ligature.
Page 4: "58 clips are used for training, 13 clips for validation, and 13 clips for testing." exact.
Page 5: "the same ground truth identity was assigned to a player leaving camera FOV at a particular frame and re-entering after some time." exact.
Page 9: "(ti −tj) > δ" exact? It appears equation. We'll write.

Need maybe mention Table 2: "84, 91, 807, 773, 545" exact. Page 5 Table 2. Page 3 dataset says 84 clips. Good.

Need "units": MOTA dimensionless; IDF1 dimensionless; AP dimensionless; δ frames; timestamps frames; fps s^-1; resolution pixels; AP in percent? Paper uses 70.2 likely percentage. We can state reported as percent. Counts are objects/events. Need not use SI for info but can mention "bits" only if entropy. Maybe avoid entropy to reduce risk. But "information/probability units" requirement says state SI/information/probability units. We can use probability units? We can say all metrics are dimensionless proportions; counts have units of detections/events. For AP integral dimensionless. No need entropy. But maybe "information units" can be nats if we include likelihood? To satisfy, maybe include "Information-theoretic note: identity ambiguity can be expressed in nats/bits; not reported in source." But that might be extra. The instruction: "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." So for each equation state units. Good.

Need "breakdown regimes": 
- MOTA: denominator zero; negative if errors > GT; saturated near 1 when FP+FN small; detector dominated. 
- IDF1: denominator zero if no true/false IDs; not sensitive to localization? Standard. 
- AP: IoU threshold; undefined if no positives; class imbalance.
- Pan proportion: IDSWs=0; δ choice; missing annotations; consecutive ordering; if player re-enters within δ, undercount; if normal occlusion > δ, overcount.
- Dataset split: game-level prevents leakage; small test 4 games. 
- Graph solver: every pair connected -> O(n^2) edges; n detections; memory/time. Could mention? Units? Not necessary.

Need "RLVR" maybe define in section: "Verifiable-reward counterfactual vetoes (RLVR): each scenario must produce a binary pass/fail from public/available annotations." Good.

Need ensure no betting. Fine.

Need not mention "spreads" etc.

Let's write with exact XML tags. Need include all sections. The user didn't ask for preamble; we can start directly with XML. Ensure tags are present exactly. Use markdown? Within XML can use LaTeX. Fine.

Let's compose.

Potential word count:
THINK_TRACE ~600
SOURCE ~600
RETRO ~300
RECURSIVE ~300
CROSS ~300
RLVR ~350
Total ~2450. Good.

Need avoid "toy equations". Our derived average boxes/frame is okay. We can label "derived audit quantity, not a model". Maybe include:
\[
\bar b = \frac{773\,545\ \text{boxes}}{91\,807\ \text{frames}} \approx 8.43\ \text{boxes frame}^{-1}
\]
This is a ratio of counts, but legitimate. No fake ratios. Good.

Need maybe mention "Table 5 video 9: IDF1 53.33, ID-switches 30, duration 29 sec" from page 8. It says video #9 IDF1 53.33, ID-switches 30, duration 29. Good. At δ=40 frames = 1.33 s. For video 9 90% at δ=40. Average 65%. 
Need compute "40 frames at 30 fps = 1.333 s; 80 frames = 2.667 s." Good.

Need "cross-layer veto proof" maybe use "veto" terms: 
- Physical veto: if \(E_{\text{obs}}(t)=0\) for identity over gap, no appearance likelihood; tracker must use prior. It cannot be fully adjudicated by algorithm. 
- Biomechanical veto: constant velocity residual. 
- Weather veto: no weather variable in dataset; indoor NHL; not a valid explanatory layer. 
Need "proof" maybe "source-supported proof": quotes.

Need "multi-week traps" in retrocausal: mention longitudinal experiment traps: 
1. Optimizing MOTA for weeks saturates.
2. Clip-level split leaks same game.
3. Fixed δ.
4. Treating annotator ID continuity as physical continuity.
5. Detector upgrades confound tracker comparison.
6. Uniform appearance features. 
Good.

Need "crisis habit regression vs counter-trap vs clock" in recursive theory of mind. Define:
- Crisis habit regression: under occlusion/pan, tracker reverts to last velocity/IOU/nearest box; this is the "habit" seen in SORT. Source says SORT least IDF1 due linear motion model and simple IOU [PAGE 7].
- Counter-trap: assigning same identity across FOV exit is a trap because same-team appearance is unidentifiable; any re-entry location possible. The annotator's convention is correct for continuity but creates a hard re-ID problem; a model that assumes spatial continuity is trapped.
- Clock: δ threshold and camera pan timing. The clock is not just frame index; it is the gap duration. 40 frames = 1.33s; 80=2.67s. 
- Recursive ToM: tracker models player as continuous agent; annotator models player identity across absence; analyst models tracker failure. Need align beliefs. 
Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include direct quotes and formal equations. Let's write equations carefully.

MOTA:
\[
\mathrm{MOTA}=1-\frac{\sum_{t}(FN_t+FP_t+IDSW_t)}{\sum_t GT_t}
\]
where \(FN_t, FP_t, IDSW_t, GT_t\) are counts at frame t. Units: dimensionless; numerator/denominator counts of objects/events. Assumption: one-to-one matching per frame with some IoU threshold (CLEAR MOT; paper doesn't state threshold). Breakdown: \(\sum_t GT_t=0\) undefined; if numerator > denominator, MOTA<0; if detector errors dominate, MOTA tracks detector not identity. Paper says all >90 [PAGE 7] because detection high.
IDF1:
\[
\mathrm{IDF1}=\frac{2\,IDTP}{2\,IDTP+IDFP+IDFN}
\]
dimensionless. Standard from [18]; paper names it [PAGE 6]. Assumption: global identity matching. Breakdown denominator zero; not localization-sensitive? It is identity-based. 
AP:
\[
AP=\int_0^1 p(r)\,dr
\]
dimensionless. AP50/AP75 at IoU 0.5/0.75. Paper reports 70.2/95.9/87.5 [PAGE 7 Table 4]. Breakdown: no positives; IoU threshold changes.
Pan eq:
\[
(t_i-t_j)>\delta
\]
with t in frames, δ in frames. Eq 3 count:
\[
N_{\text{pan}}(\delta)=\sum_{G}\mathbf{1}(t_i-t_j>\delta)
\]
units: count of events. Eq 4:
\[
P_{\text{pan}}(\delta)=\frac{N_{\text{pan}}(\delta)}{IDSWs}
\]
dimensionless. Assumptions: ground truth complete; gap only due FOV exit; ordered consecutive detections. Breakdown: IDSWs=0; δ too small/large; missing annotations; re-entry within δ. 
Derived:
\[
\bar b=773545/91807\approx8.43
\]
boxes/frame. 
Maybe detection AP percentage: 70.2 means 0.702? Paper uses percent. State "reported in percent".

Need "exact singularity/breakdown regimes" for each. Good.

Need "RETROCAUSAL_GENEALOGY" with lineage. Let's write.

Need "CROSS_LAYER_VETO_ADJUDICATION" with physical/biomechanical/weather. Could include bullets. Need maybe "weather veto proof" phrase. We'll say "Weather veto: not applicable/unsupported; indoor NHL broadcast; no weather variable; any weather-based explanation is vetoed by absence of evidence, not by a positive null result." That's strong.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 scenarios. Let's design precise:
1. δ-sweep replay on all 13 test videos, recompute Eq 4 for δ=40,50,60,70,80. Prediction: video 9 proportion at δ=40 ≈0.90 and aggregate ≈0.65 at δ=40; proportion nonincreasing in δ. Veto if aggregate not near 0.65 or ordering fails; inspect annotation gaps. This verifies pan claim.
2. Same-detector tracker swap: freeze Faster-RCNN detections (AP 70.2) and run SORT vs MOT Neural Solver on identical detections. Prediction: SORT IDSW > 431? Wait Table 3 SORT IDSW 673 vs MOT 431; IDF1 SORT 53.7 vs 62.9. With same detections, prediction graph solver lower IDSW and higher IDF1; if not, linear-motion explanation vetoed. This verifies motion model claim. Need note paper's Table 3 may not be same detector? The paper says player detection performed using Faster-RCNN; likely all trackers use same detector? Tracktor/FairMOT are JDT; maybe not. But counterfactual controls detector. Good.
3. FOV-gap relabel/masking: create two evaluation variants: (a) keep same ID across FOV re-entry (paper convention); (b) assign new ID after gap >40 frames. Prediction: IDF1 increases and IDSW drops in variant (b), and residual errors remain from occlusion/clutter; if not, pan-switch claim vetoed. Or test on low-pan vs high-pan clips. Need exact prediction: video 9 (30 IDSW, IDF1 53.33) should improve most; aggregate IDF1 should rise above 62.9 baseline. But no exact number. We can say "rank correlation: clips with higher Eq 4 proportion have lower IDF1." This is verifiable from Table 5. Let's check Table 5: video 9 IDF1 53.33, IDSW 30; video 7 IDF1 49.02, IDSW 59; video 12 IDF1 87.41, IDSW 14. Correlation likely negative. Prediction: negative correlation between IDSW and IDF1, and pan proportion highest in low-IDF1 clips. If no, veto. Good.
Need maybe "3 verifiable RLVR veto scenarios + predictions". We'll list exactly 3 with "Veto if".

Need no betting lines. Good.

Need mention "GSE/GSI" maybe not. Could say "GSE/GSI readout" at start? Not necessary.

Let's produce final. Ensure XML tags. Use ampersands escaped? XML section content includes `&`? Avoid or use `&amp;`. We might use "player-player" no ampersand. "FP+FN" plus okay. Need if using `<` in text? We use \(\delta < 40\)? XML may parse. Avoid raw `<` and `>`? In text, equations with `>` maybe okay? XML tags not strict? It's not a parser necessarily. But to be safe, use LaTeX with `\gt` or `>`? XML content with `>` is allowed; `<` is not. We can avoid `<` by using `\lt`. Use `\( \delta \lt 40 \)`? In LaTeX, `\lt` not standard but okay. Better use `\(\delta<40\)` would include `<` which may confuse XML. Use words "below 40". For equations, use `\leq`, `\geq` no `<`. For `>` in equation, `>` is allowed in XML text (only `<` and `&` are problematic). `>` is fine. But `&` in LaTeX? We use `\sum_{t}` no ampersand. Avoid `&`. Good. For "FP+FN" plus fine. For quotes with `&`? No. Use "and" instead of ampersand. 
Need if using `\(t_i-t_j>\delta\)` has `>` okay. 
Need XML tag `<SOURCE_OPERATORS_AND_EQUATIONS>` content includes `\[` and `\]`; okay. `\text{boxes frame}^{-1}` okay. No `<`.
Need avoid raw `>=`? okay.

Let's write.

Need maybe mention "PAGE 11 references" not relevant. Fine.

Let's ensure word count. We'll write substantive.

Potential final:

<THINK_TRACE>
The source is an evaluation paper... 
[long]
</THINK_TRACE>

Let's draft with enough detail.

Need quote exact: "signiﬁcant" with ligature. I'll include Unicode ligature. "classiﬁes" etc. Use them. Ensure not accidentally use normal. Good.

Let's now write final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is not a physical model of hockey; it is an evaluation paper whose causal chain runs from dataset construction to detector quality to tracker association to metric aggregation to a failure decomposition. The first multi-hop step is dataset construction: the authors build “84 broadcast NHL game clips with a frame rate of 30 frames per second (fps) and resolution of 1280 × 720 pixels” [PAGE 3], split at the game level into “58 clips are used for training, 13 clips for validation, and 13 clips for testing” [PAGE 4]. Table 2 reports 91,807 frames and 773,545 bounding boxes [PAGE 5], so a derived audit quantity is \(773{,}545/91{,}807 \approx 8.43\) boxes per frame, consistent with the paper’s statement that “the maximum number of players on the screen can be 12, with usually less than 12 players actually in broadcast camera FOV” [PAGE 4]. The second step is detector quality: the Faster-RCNN/ResNet50-FPN detector obtains AP 70.2, AP50 95.9, and AP75 87.5 [PAGE 7, Table 4]. The third step is association: five trackers are compared, with MOT Neural Solver obtaining “the highest MOTA score of 94.5 and IDF1 score of 62.9 on the test videos” [PAGE 6]. The fourth step is metric interpretation: MOTA is high for all methods because it is detector-dominated, while IDF1 separates identity preservation. The fifth step is failure decomposition: the paper defines pan-identity switches by a temporal gap threshold and concludes that “On average, pan identity switches account for 65% of identity switches in the videos” [PAGE 9].

The gray-zone audit is that “best” is not metric-free. In Table 3, MOT Neural Solver is best on IDF1 62.9 and ID-switches 431, and also MOTA 94.5; but FairMOT has the fewest false positives at 1179 while suffering the most false negatives at 7568 and the most ID-switches at 768 [PAGE 6]. Tracktor has fewer false negatives than MOT Neural Solver, 4216 versus 4394, but a lower IDF1 of 56.5 and more ID-switches, 687 versus 431 [PAGE 6]. Thus the paper’s conclusion is defensible for identity-preserving tracking, but it would be overclaimed as universal detector superiority. A second gray zone is the annotation convention: “the same ground truth identity was assigned to a player leaving camera FOV at a particular frame and re-entering after some time” [PAGE 5]. This is correct for continuity analysis, but it makes re-identification depend on features the paper itself says are unavailable: “players of the same team look identical with features such as, jersey color, helmet model, visor model, stick model, glove model, skate model, tape color etc unidentiﬁable from bounding boxes cropped from 720p broadcast clips” [PAGE 8]. A third gray zone is the pan-switch estimator’s assumption: the authors assume “the ground truth annotations are accurate and there are no missing annotations in the ground truth” [PAGE 8]. If that assumption fails, Eq. 4 misattributes detector dropouts or annotation gaps to camera panning. A fourth gray zone is metric singularity: MOTA is undefined when \(\sum_t GT_t=0\), and the pan proportion is undefined when IDSWs=0. The paper reports video 9 as IDF1 53.33 with 30 ID-switches [PAGE 8, Table 5], so the δ-sweep in Fig. 3 is a meaningful audit, but the aggregate 65% is not a universal constant; it is conditioned on δ=40 frames, i.e. 1.33 s at 30 fps.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper’s formal operators are metric operators, not physical force laws. All reported tracking scores are dimensionless proportions or percentages; counts are in objects or events; frame timestamps are in frames, and at 30 fps one frame is \(1/30\) s.

1. MOTA. The paper defines
\[
\mathrm{MOTA}=1-\frac{\sum_t\left(FN_t+FP_t+IDSW_t\right)}{\sum_t GT_t},
\]
where \(t\) is frame index, \(GT_t\) is the number of ground-truth objects, and \(FN_t\), \(FP_t\), \(IDSW_t\) are counts at frame \(t\) [PAGE 7]. Units: numerator and denominator are counts of objects/events; MOTA is dimensionless and reported in percent. Assumption: a per-frame detection-to-ground-truth matching exists, normally with an IoU threshold from CLEAR MOT [PAGE 6]. Breakdown regimes: denominator \(\sum_t GT_t=0\) is undefined; if errors exceed ground-truth count, MOTA can be negative; if detector errors dominate, MOTA measures detection more than identity. The paper states exactly this: “Since false positives (FP) and false negatives (FN) heavily rely on the performance of the player detector, the MOTA metric highly depends on the performance of the detector” [PAGE 7]. This explains why “the MOTA score of all methods is above 90%” [PAGE 7].

2. IDF1. The paper names IDF1 [PAGE 6] and cites the standard identity metric [18], but does not display its equation. The standard form is
\[
\mathrm{IDF1}=\frac{2\,IDTP}{2\,IDTP+IDFP+IDFN},
\]
where IDTP, IDFP, and IDFN are identity-level true-positive, false-positive, and false-negative counts after global identity matching. Units: counts in the denominator, dimensionless result. Breakdown regimes: denominator zero when no identity matches and no identity errors exist; IDF1 is insensitive to pure localization error except insofar as localization changes identity matching. The paper argues “For sports player tracking, the IDF1 is considered a better accuracy measure than Multi Object Tracking accuracy (MOTA) since it measures how consistently the identity of a tracked object is preserved” [PAGE 6].

3. Average precision. The detector uses
\[
AP=\int_0^1 p(r)\,dr,
\]
with AP50 and AP75 evaluated at IoU thresholds 0.5 and 0.75. Units: dimensionless; reported in percent. Assumption: precision-recall curve over detections at a fixed IoU criterion. Breakdown regimes: AP is undefined without positive examples; AP changes strongly with IoU threshold, which is why AP50=95.9 and AP75=87.5 differ while AP=70.2 [PAGE 7, Table 4].

4. Pan-identity switch operator. The paper defines a pan-identity switch as expected when
\[
(t_i-t_j)>\delta,
\]
where \(t_i\) and \(t_j\) are timestamps in frames of two consecutive ground-truth detections and \(\delta\) is a threshold in frames [PAGE 9]. The count is
\[
N_{\mathrm{pan}}(\delta)=\sum_G \mathbf{1}\!\left(t_i-t_j>\delta\right),
\]
with units of events, and the reported proportion is
\[
P_{\mathrm{pan}}(\delta)=\frac{\sum_G \mathbf{1}\!\left(t_i-t_j>\delta\right)}{\mathrm{IDSWs}},
\]
dimensionless [PAGE 9]. Assumptions: consecutive annotations are ordered; ground truth is complete; a large gap occurs only because the player leaves and re-enters the camera FOV; re-entry identity is preserved by annotation. Breakdown regimes: IDSWs=0 makes the proportion undefined; δ too small classifies normal detector dropouts or short occlusions as pan switches; δ too large misses real pan switches; missing annotations create false gaps. The paper uses δ from 40 to 80 frames [PAGE 9]; at 30 fps those are 1.33 s to 2.67 s. It reports 90% for video 9 at δ=40 and 65% on average at δ=40 [PAGE 8-9].

5. Graph-tracking operator. The MOT Neural Solver models tracking as an undirected graph \(G=(V,E)\), where \(V\) is the set of \(n\) detections and \(E\) connects pairs so missed detections can be recovered. The paper states: “The problem of tracking is posed as splitting the graph into disconnected components where each component is a trajectory Ti” [PAGE 3]. After CNN node/edge embeddings, “The message passing algorithm classiﬁes whether an edge between two nodes in the graph belongs to the same player trajectory” [PAGE 3]. Units: nodes and edges are counts; edge labels are probabilities or binary classes. Breakdown regime: with \(n\) detections, all-pairs edges scale as \(O(n^2)\); hockey’s small on-screen player count limits this cost, but cluttered scenes and long gaps increase ambiguous edges.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is visible in reverse. Earlier hockey work used handcrafted detection and re-identification: Okuma et al. combined a particle filter with mixture particle filter and Adaboost, but the paper notes that “the particles merge and split in the process and leads to loss of identities” and the method had “no mechanism to prevent identity switches and lost identities of players after occlusions” [PAGE 1]. Cai et al. improved association with bipartite matching but performed tracking in rink coordinates after manual homography rather than on broadcast video [PAGE 1-2]. Read retrocausally, those failures predict the later metric emphasis: if identity loss is the persistent failure, IDF1 and ID-switch counts are the right audit variables, not just MOTA. The later lineage is SORT with Kalman filtering and IoU re-identification, Deep SORT with deep CNN re-identification, Tracktor and FairMOT as joint detection-and-tracking, and MOT Neural Solver as graph edge classification [PAGE 3, Table 1]. The paper’s conclusion that “trackers with a linear motion model do not perform well on hockey dataset” [PAGE 9] is a retrocausal explanation of why SORT obtains the least IDF1 and highest ID-switches in Table 3 [PAGE 6].

Multi-week traps for a research program are: (1) optimizing MOTA alone, because it saturates above 90% and is detector-dominated [PAGE 7]; (2) splitting clips rather than games, which the authors avoid by game-level split [PAGE 4]; (3) fixing δ without a sensitivity sweep, since the 65% pan share is δ-dependent [PAGE 9]; (4) treating the annotation convention of same ID across FOV exit as a physically observable identity cue, when the paper says uniform features are unidentifiable at 720p [PAGE 8]; (5) upgrading the detector and attributing the gain to the tracker, which MOTA’s structure invites [PAGE 7]; and (6) evaluating only four test games, since the test split is 13 clips from 4 games [PAGE 4]. These are not speculative: each follows directly from the paper’s reported construction and metric definitions.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The tracker’s implicit theory of mind is a belief that a player is a continuously existing agent with locally smooth motion. Under normal play that belief is useful. In crisis—occlusion by boards or players, or camera panning—the habit regresses to the last velocity, the nearest detection, or the highest IoU. The paper documents this regression: SORT obtains “the least IDF1 score and the highest number of identity switches” due to “the linear motion model assumption and simple IOU score for re-identification” [PAGE 7]. Deep SORT improves by adding deep appearance features, but the appearance channel is weak in hockey because same-team players share jersey, helmet, visor, stick, glove, skate, and tape appearance [PAGE 8]. The counter-trap is the FOV re-entry problem: the annotator correctly assigns the same identity after a player leaves and re-enters [PAGE 5], but the model cannot know where the player will re-enter, and “a player going out of the camera FOV at a particular point in screen coordinates can re-enter at any other point” [PAGE 8]. A model that treats screen-space continuity as identity continuity is trapped by the camera operator’s pan, not by the player’s physics. The clock is the gap duration: Eq. 2 uses \((t_i-t_j)>\delta\), and the reported audit uses δ=40 to 80 frames [PAGE 9]. At 30 fps, 40 frames is 1.33 s and 80 frames is 2.67 s. Thus the recursive layer has three agents: the player, whose identity persists off-camera; the annotator, who encodes that persistence; and the tracker, which must infer it from sparse, uniform, pan-truncated evidence. The paper’s best model, MOT Neural Solver, succeeds partly because it does not impose a linear-motion belief; it classifies graph edges instead [PAGE 3, PAGE 8-9]. But it still has no theory of the camera operator’s pan or the player’s off-screen intention, so pan-identity switches remain the dominant error.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto. The physical layer is rink geometry, boards, player-player occlusion, and broadcast camera FOV. The paper’s abstract states: “There is also signiﬁcant player-player and player-board occlusion, camera panning and zooming in hockey broadcast video” [PAGE 1]. When a player leaves the FOV, the observation likelihood for that identity is absent; no tracker can recover appearance evidence that was never captured. The paper’s failure analysis states: “The major sources of identity switches are severe occlusions and players going out of the camera FOV (due to camera panning and/or player movement)” [PAGE 8]. This is a hard physical veto on re-identification, not a model-hyperparameter issue. Biomechanical veto. Hockey motion is “fast-paced and non-linear” [PAGE 1], and the paper notes that “Sharp changes in player motion often leads to identity switches” [PAGE 8]. A constant-velocity Kalman prior is therefore vetoed whenever acceleration and turning residuals exceed the scale of the detection box between frames; the paper’s empirical evidence is that linear-motion trackers have high ID-switch counts and lower IDF1 [PAGE 7, PAGE 9]. Weather veto. The dataset is indoor NHL broadcast video; the paper reports no weather covariate, no ice-temperature measurement, and no outdoor venue variable. A weather explanation is therefore not supported by the source and should be vetoed by absence of evidence. The only environmental layers the paper actually adjudicates are camera pan/zoom, occlusion, clutter, and 720p appearance limits [PAGE 8]. Cross-layer adjudication therefore yields: physical occlusion and FOV exit dominate; biomechanical nonlinearity invalidates linear motion; weather is not a documented causal layer in this corpus.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR here means verifiable-reward counterfactual checks: each scenario must yield a binary pass/fail from the released annotations and reported tables, not from a narrative. Three veto scenarios follow.

1. δ-sweep replay. Recompute Eq. 4 for all 13 test videos at δ=40, 50, 60, 70, and 80 frames. Prediction: video 9 has approximately 90% pan-identity switches at δ=40, and the all-video average is approximately 65% at δ=40, with the proportion nonincreasing as δ increases [PAGE 8-9]. Veto if the aggregate is far from 65% at δ=40, if video 9 does not approach 90%, or if the proportion rises with δ. This directly tests the paper’s central failure claim and exposes annotation-gap sensitivity.

2. Same-detector tracker swap. Freeze the Faster-RCNN detections and compare SORT against MOT Neural Solver on identical detections. Prediction: SORT will have more ID-switches than 431 and lower IDF1 than 62.9, matching the reported SORT IDF1 53.7 and ID-switches 673 versus MOT Neural Solver 62.9 and 431 [PAGE 6]. Veto if the graph solver does not reduce ID-switches or raise IDF1 under the frozen detector. This isolates the linear-motion explanation from detector quality, which MOTA otherwise confounds [PAGE 7].

3. FOV-gap relabel/masking test. Create two evaluation variants: (a) the paper’s convention, preserving identity across FOV exit and re-entry [PAGE 5]; (b) assigning a new identity after any gap greater than 40 frames. Prediction: variant (b) sharply reduces ID-switches and raises IDF1, especially for video 9, which has 30 ID-switches and IDF1 53.33 [PAGE 8, Table 5]; residual errors should remain from occlusion and clutter. Veto if the gain is negligible or if high-IDF1 clips show no relationship to gap frequency. A supporting rank test is that clips with higher Eq. 4 pan proportions should have lower IDF1 and more ID-switches, as suggested by video 9 versus video 12, which has IDF1 87.41 and only 14 ID-switches [PAGE 8, Table 5]. If that relationship fails, the “panning is the main cause” conclusion is vetoed.
</RLVR_COUNTERFACTUAL_VETOES>