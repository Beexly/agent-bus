---
source: "2021 - Hadi Sotudeh - Potential Penetrative Pass (P3) - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2021"
pages: 5
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 7499
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about "Potential Penetrative Pass (P3)" by Hadi Sotudeh. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, looking at the source text, it appears to be a markdown rendering of a PDF with page markers embedded. Let me count pages based on the text:

Page 1: Introduction + Definitions + Figure 1 + email + **1**
Page 2: Figure 2 + Task + Data + Approach + text about Bundesliga + **2**
Page 3: Method 1 + Figure 3 + text + Table 1 + **3**
Page 4: Method 2 + Figure 4 + **4** + Figure 5 + Transfer learning + text + **5**
Page 5: Loss/AUC + Figure 6 + threshold + Figure 7 + Figure 8 + Figure 9 + text + **6** + Figure 10 + Applications + recruitment + figures + **8** ... wait, the page numbers in the text seem to jump or be embedded differently.

Let me re-read carefully:

The text has these page footer markers:
- **1** after email
- **2** after Approach paragraph
- **3** after Method 1 paragraph before Table 1
- **4** after Figure 4
- **5** after training details (8 epochs, GPU)
- **6** after Figure 8
- **7** after Figure 9
- **8** after Figures 11, 12, 13
- **9** after Figure 12? Wait no.
- **10** after Figure 14
- **11** after Figure 16
- **12** after Figure 17
- **13** References

Actually, looking at the structure:
- Page 1: Intro, Definitions, Figure 1, email, **1**
- Page 2: Figure 2, Task, Data, Approach, Bundesliga sentence, **2**
- Page 3: Method 1, Figure 3, text about event data, Table 1, **3**
- Page 4: Method 2, Figure 4, **4**, Figure 5, Transfer learning, ResNet, **5**
- Page 5: Training details (8 epochs), AUC 0.73, Figure 6, threshold 10.38%, Figure 7, Figure 8, **6**
- Page 6: Figure 9, confusion matrix numbers, Figure 10, Applications, recruitment, KPI, Figures 11-13, **8**
- Page 7: Figures 14, 15, **10**, dashboard P3 explorer, Figure 16, Figure 17, **11**
- Page 8: Discussion & Future Work, camera angle, body orientation, future work, references, **12**, **13**

Hmm, the page numbers don't perfectly align with sequential counting because figures may take space, but I should cite [PAGE N] based on the visible page number markers in the text. The user said "PAGES: 5" but the document actually seems longer based on the page footers. However, I should treat the provided text as the source and cite page markers as they appear.

Actually, re-reading: "PAGES: 5" might refer to the original PDF being 5 pages, but the markdown text shows page numbers up to 13. That's contradictory. Wait, maybe the page numbers in the text are not actual page numbers but just bold numbers? No, they look like page footers: **1**, **2**, etc.

But the user explicitly says "PAGES: 5". This might mean the source is 5 pages, but the extracted text includes page markers that go higher? Or perhaps "PAGES: 5" is just metadata. I should cite based on the visible markers like [PAGE 1], [PAGE 2], etc., as they appear in the text flow.

Let me map content to page markers:
- [PAGE 1]: Introduction, Definitions, Figure 1
- [PAGE 2]: Figure 2, Task, Data, Approach, Bundesliga matches info
- [PAGE 3]: Method 1, Figure 3, Table 1 intro
- [PAGE 4]: Figure 4, Method 2 start, Figure 5
- [PAGE 5]: Transfer learning, training details, Figure 6? Wait, **5** appears after "image shown in Figure 5..." no, let's look:

Text:
"...image shown in Figure 5. 

As the 360 data has only information... 

Since classifying an image...

To not start from scratch...

A�er training the model for 8 epochs with a GPU (Nvidia P100) for 2 hours, the training loss becomes 0.30 and the validation loss ends up at 0.33 which suggests that there is no serious overfitting to the training data. The validation AUC ROC is also 0.73, as shown in Figure 6, which is a significant improvement compared to the performance of the previous method. 

**5**"

So [PAGE 5] contains the transfer learning and training details up to AUC 0.73 and Figure 6 mention? Actually Figure 6 is mentioned before **5**. Then after **5**:

"Figure 6: CNN model AUC ROC on the validation set Since I am also interested..."

Wait, the **5** appears right before "Figure 6: CNN model..."? Let's check:

"...as shown in Figure 6, which is a significant improvement compared to the performance of the previous method. 

**5** 


Figure 6: CNN model AUC ROC on the validation set Since I am also interested..."

So **5** is a page break, then Figure 6 caption starts page 6? Or is **5** the page number at bottom of page 5? Typically in these extractions, the bold number is the page footer. So content before **5** is page 5, content after **5** is page 6.

Let me map:
- Content before **1**: Page 1
- Between **1** and **2**: Page 2
- Between **2** and **3**: Page 3
- Between **3** and **4**: Page 4
- Between **4** and **5**: Page 5
- Between **5** and **6**: Page 6
- Between **6** and **7**: Page 7
- Between **7** and **8**: Page 8
- Between **8** and **9**: Page 9 (but I don't see **9**)
- Between **9** and **10**: Page 10
- Between **10** and **11**: Page 11
- Between **11** and **12**: Page 12
- After **12**: Page 13 (References)

Wait, I see **8**, then **10**, then **11**, then **12**, then **13**. I don't see **9** explicitly. Let me check:
"...Figures 11, 12, and 13 show this KPI calculated for players in each group. 

**8** 


Figure 11: P3 Percentage results of the LaLiga defenders 


Figure 12: P3 Percentage results of the LaLiga midfielders 


**9** 


Figure 13: P3 Percentage results of the LaLiga U23 players 

I can do the same analysis at the team level..."

Ah, **9** is there! After Figure 12 caption. Then:

"...Figure 14: P3 Percentage results for how the top 10 LaLiga teams attack 

**10** 


Figure 15: P3 Percentage results for how the top 10 LaLiga teams defend 

For the Performance & Opponent Analysis application... P3 explorer... Figure 16... **11** ... Figure 17... **12** ... Discussion... References **13**"

Okay so page mapping:
- Page 1: Intro, Definitions, Figure 1
- Page 2: Figure 2, Task, Data, Approach, Bundesliga dataset info (245 matches, 79,000 P3 moments, 80/20 split)
- Page 3: Method 1, Figure 3, Table 1 (ML algorithms results)
- Page 4: Method 2 start, Figure 4, Figure 5 (P3 image representation)
- Page 5: Pitch control, Voronoi, Transfer Learning, ResNet-34, ImageNet, training 8 epochs, GPU P100, loss 0.30/0.33, AUC 0.73, Figure 6 mention
- Page 6: Figure 6 caption, threshold 10.38%, Figure 7, Figure 8, Figure 9 mention
- Page 7: Confusion matrix details (9,351 non-penetrative correct, 1,244 penetrative correct, 601 false neg, 4,780 false pos), Figure 10, Applications start, recruitment, P3 Percentage KPI, Figures 11-13 mention
- Page 8: Figure 11, Figure 12, **9**? Wait, **8** is before Figure 11. Let's re-check:

Text: "Figures 11, 12, and 13 show this KPI calculated for players in each group. 

**8** 


Figure 11: P3 Percentage results of the LaLiga defenders 


Figure 12: P3 Percentage results of the LaLiga midfielders 


**9** 

Figure 13..."

So Page 8 has text ending with Figures 11-13 mention, then page footer **8**. Page 9 has Figure 11 caption, Figure 12 caption, footer **9**. Wait that doesn't make sense because Figure 11 and 12 are on page 9? Or the footer **8** means the previous content is page 8, then Figure 11/12 are on page 9? Usually the number at the bottom indicates the page number of the content above it. So:

Content up to **8** = Page 8
Content after **8** up to **9** = Page 9
Content after **9** up to **10** = Page 10
etc.

So:
- Page 8: Applications recruitment, KPI, "Figures 11, 12, and 13 show..."
- Page 9: Figure 11 caption, Figure 12 caption
- Page 10: Figure 13 caption, team level analysis, Barcelona 32%, Sevilla 52%, limitations, Figure 14 caption? Wait:

Text: "**9** 


Figure 13: P3 Percentage results of the LaLiga U23 players 

I can do the same analysis at the team level for the performance & opponent analysis application. As shown in Figures 14 and 15, Barcelona FC plays a penentrative pass 32% of the time they can and they are on top of the league in that aspect. In addition, Sevilla FC only gives 52 penentrative pass opportunities per match to their opponents and they are the best defending team based on this metric. One should consider the limitations of this KPI such as the camera angle biases and off-camera players that can make the convex hull calculation wrong. These limitations are elaborated in the “discussion” section later. 


Figure 14: P3 Percentage results for how the top 10 LaLiga teams attack 

**10** 


Figure 15: P3 Percentage results for how the top 10 LaLiga teams defend"

So after **9**: Figure 13 caption, team analysis text, Figure 14 caption, then footer **10**. So Page 9 contains Figure 13 caption + team analysis text + Figure 14 caption? No, **10** is the footer for Page 10. So content between **9** and **10** is Page 10? Or is **9** the footer for Page 9?

Standard interpretation: The bold number is centered at bottom, indicating the page number of the page just ended. So:
- Content before **1** = Page 1
- Content between **1** and **2** = Page 2
- ...
- Content between **9** and **10** = Page 10

Wait, if **1** is at end of Page 1, then content after **1** is Page 2. Yes.

So:
- Page 1: Intro + Definitions + Figure 1 + email
- Page 2: Figure 2 + Task + Data + Approach + Bundesliga sentence
- Page 3: Method 1 + Figure 3 + text + Table 1 (actually Table 1 might be on page 4? No, Table 1 is right after text on what looks like page 3 based on **3** appearing after intro to Table 1? Let's check: "Table 1 shows the results... **3**" so Table 1 caption is before **3**? Actually:

"This data also has passer-dependent information... Table 1 shows the results of some well-known ML algorithms trained on the event features a�er conducting hyper-parameter tuning. 

**3** 


Table 1: Results of the ML algorithms trained solely on event features"

So Page 3 contains text leading to Table 1, footer **3**, then Table 1 caption starts Page 4? No, Table 1 is right after **3**. That's odd. Usually the footer comes at the very bottom. But in this markdown, **3** appears before Table 1. Maybe **3** is page 3 footer, and Table 1 is on page 4? Or the extraction is messy.

I should not overthink exact page mapping. I'll cite approximate page markers based on where they appear. The user wants exact [PAGE N] markers. I'll use the numbers as they appear in sequence: [PAGE 1] through [PAGE 13] as indicated by the bold footers.

Now, regarding the content analysis:

The paper is about P3 (Potential Penetrative Pass). Key elements:
- Definition: pass moment with foot, teammate inside convex hull of opponent players in front of ball (excluding GK). Ignore passes in first 3rd of defense and last 4th of pitch.
- Task: Given P3 moment, probability it becomes penetrative pass (binary classification).
- Data: StatsBomb 360 & event datasets, Bundesliga & LaLiga 2020-2021, top 10 teams. Bundesliga: 245 matches, 79,000 P3 moments, 80/20 train/val. Imbalanced: 88% not penetrative.
- Method 1: ML on event features only (Random Forest, XGBoost, LGBM, CatBoost, Extra Tree). AUC ROC ~0.54-0.56 (poor, barely better than baseline 0.5).
- Method 2: CNN on image representation of P3 moment (from 360 + event data). Image: blue team possession bottom-to-top, red off-ball top-to-bottom, black passer. Enriched with pitch control (Voronoi), green target convex hull. Transfer learning: ResNet-34 pre-trained on ImageNet, fine-tuned. 8 epochs, GPU Nvidia P100, 2 hours. Train loss 0.30, val loss 0.33. Val AUC ROC 0.73.
- Threshold: closest point to (1,0) on ROC -> probability >= 10.38% classified as penetrative.
- Probability distribution: rarely >60%, median around 10%.
- Confusion matrix on validation set (15,976 images): 9,351 TN, 1,244 TP, 601 FN, 4,780 FP.
- Applications: Player recruitment (P3 Percentage KPI), Performance & Opponent Analysis (team level: Barcelona 32% attack, Sevilla 52 opportunities conceded per match defend), Media (P3 explorer dashboard).
- Limitations: Camera angle biases, off-camera players affecting convex hull, no body orientation data.

Now I need to write the response with the exact XML sections.

Constraints:
- Zero betting lines: No mention of spreads, totals, moneylines, odds. I must avoid any gambling terminology.
- Zero toy equations: No fake ratios like Force/Fatigue. Must use formal LaTeX, SI units, information/probability units, assumptions, singularity/breakdown regimes.
- >=1000 words total across sections.
- THINK_TRACE >= 400 words.

Let me plan the content:

<THINK_TRACE> (>=400 words)
- Deep multi-hop derivation of the P3 problem: from definition to convex hull geometry, to binary classification, to class imbalance, to AUC ROC choice, to image representation, to transfer learning, to threshold selection, to confusion matrix, to KPI (P3 Percentage), to applications.
- Gray-zone audit: data leakage avoidance (body type, end location excluded), camera angle bias, off-camera players, class imbalance (88% negative), threshold at 10.38% (very low, implying high false positive rate), confusion matrix shows 4,780 FP vs 1,244 TP (precision ~20.6%), AUC 0.73 is decent but threshold choice is questionable because baseline probability is ~12% (88% negative), so 10.38% threshold is almost the prior. This means the model is barely distinguishing. The "closest to (1,0)" threshold on an imbalanced dataset with AUC 0.73 might be mathematically valid but practically problematic because the predicted probabilities are clustered near the prior (median ~10%). Calibration plot issues.
- Multi-hop: convex hull definition -> computational geometry -> image encoding -> CNN inductive bias -> transfer learning from ImageNet (natural images) to synthetic sports plots (domain shift) -> fine-tuning only 8 epochs may be insufficient or may overfit to low-level features -> validation on temporal split (first 80% matches, last 20% matches) assumes stationarity across the season, which may break due to tactical evolution, injuries, etc.
- Singularity/breakdown: when off-ball players are not visible (camera angle), convex hull is wrong; when passer body orientation is opposite, P3 potential is illusory; when pass is in excluded zones (first 3rd defense, last 4th pitch), P3 undefined; when dataset imbalance is extreme, accuracy is meaningless (they correctly avoided it), but AUC can still be optimistic if score distributions overlap heavily.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal definitions:
  - P3 moment: $\exists p_r \in \text{Teammates} : p_r \in \text{ConvHull}(\{o_i\}_{i=1}^N \setminus \{GK\})$ where $o_i$ are opponent players in front of ball.
  - Spatial exclusion: pass location $x \notin \text{FirstThird}_{\text{def}} \cup \text{LastFourth}_{\text{pitch}}$.
  - Binary classifier: $f_\theta: X \mapsto [0,1]$, $Y = \mathbb{1}[f_\theta(X) \ge \tau]$.
  - AUC ROC: $\int_0^1 TPR(FPR^{-1}(u)) du$ or Mann-Whitney U statistic equivalence.
  - Class prior: $P(Y=1) = 0.12$, $P(Y=0) = 0.88$ (since 88% not penetrative).
  - Threshold: $\tau = \arg\min_{\tau} \sqrt{(1-TPR(\tau))^2 + (0-FPR(\tau))^2} = 0.1038$.
  - Confusion matrix counts: $N_{val} = 15,976$; $TN=9,351$, $TP=1,244$, $FN=601$, $FP=4,780$.
  - Derived metrics: Precision $= TP/(TP+FP) = 1,244 / (1,244 + 4,780) \approx 0.2065$ (20.65%). Recall $= TP/(TP+FN) = 1,244 / 1,845 \approx 0.674$. FPR $= FP/(FP+TN) = 4,780 / 14,131 \approx 0.338$.
  - Pitch control via Voronoi: $VC_i(x) = \mathbb{1}[\|x - p_i\| < \|x - p_j\| \forall j \neq i]$ (simplified).
  - Units: probabilities dimensionless [0,1]; pitch dimensions in meters (SI); epochs dimensionless; GPU hours in time [h]; matches count dimensionless; P3 moments count dimensionless.
  - Page citations: [PAGE 2] for data description, [PAGE 3] for Method 1 and class imbalance, [PAGE 5] for transfer learning and training, [PAGE 6] for threshold and confusion matrix setup, [PAGE 7] for confusion matrix values, [PAGE 8]-[PAGE 10] for applications and KPI.
  - Breakdown regimes: camera angle singularity (off-camera opponents), body orientation unobservability (missing state variable), temporal non-stationarity (train/val split by match order), domain shift (ImageNet natural images vs. synthetic pitch control plots).

<RETROCAUSAL_GENEALOGY>
- Historical lineage: Michalczyk (2020) on line-breaking passes [PAGE 1]; Spearman (2016) pitch control [PAGE 4/5]; Bozinovski & Fulgosi (1976) transfer learning [PAGE 5]; He et al. (2016) ResNet [PAGE 5]; Deng et al. (2009) ImageNet [PAGE 5].
- Multi-week traps: The Bundesliga train/validation split uses first 80% of matches chronologically, last 20% for validation. Over a 2020-2021 season (~34 matchdays for Bundesliga), this creates a temporal gap. Tactical adaptations, managerial changes, injuries, and fixture congestion can cause distribution shift between early-season training and late-season validation. A model trained on August-October data may fail on February-May data due to evolving pressing structures, which directly invalidates the i.i.d. assumption implicitly required for AUC generalization. Also, applying to LaLiga (different league, different style) after training on Bundesliga is a cross-distribution transfer with no reported domain adaptation.

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: When a team faces a defensive block (crisis), habitual regression to safe backward/sideways passes reduces P3 opportunities. The model may learn that low-probability P3 moments are common because passers regress to safe options under pressure.
- Counter-trap: Opponents anticipating P3 attempts may shift their defensive convex hull to shrink available receiving space, making the model's potential penetrative pass overestimated. The convex hull is computed from visible opponent positions; if opponents deliberately leave a passing lane open as a trap, the model sees a P3 moment but it is a tactical bait.
- Clock: Match clock effects (score state, time remaining) are not in the features. A team leading late may avoid penetrative passes despite high P3 probability, while a trailing team may force them. The model ignores game state, causing systematic miscalibration relative to match context. The 10.38% threshold does not account for time-decay of possession value.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical layer: Pitch dimensions (FIFA standard 105m x 68m), convex hull computed in Euclidean plane $\mathbb{R}^2$. Breakdown if camera perspective distorts distances (homography error).
- Biomechanical layer: Passer body orientation missing from StatsBomb 360 [PAGE 12 discussion]. A player facing away from the target convex hull cannot physically execute the pass without a touch, making P3 label physically infeasible despite geometric possibility. Veto: $V_{bio} = \mathbb{1}[\theta_{passer} \notin \mathcal{C}_{hull}]$ where $\theta$ is orientation angle.
- Weather layer: Not addressed in source. Rain/wind affect ball trajectory and first touch, but P3 definition is purely spatial-temporal at pass moment. No weather veto implemented; this is a gap because a penetrative pass on a wet pitch has higher interception risk due to reduced ball control friction coefficient.
- Adjudication: The geometric P3 definition is necessary but not sufficient. Physical veto (orientation) and environmental veto (weather, pitch state) can invalidate the "potential" label. The model's AUC 0.73 reflects geometric predictability only; physical realizability remains unmodeled.

<RLVR_COUNTERFACTUAL_VETOES>
Need 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards?) veto scenarios + predictions. RLVR likely means we can verify outcomes. I'll create scenarios where the model's prediction is vetoed by observable counterfactuals.

Scenario 1: Camera angle occlusion. A P3 moment where the off-ball team has players outside camera frame but physically positioned to intercept. Model outputs high probability (e.g., >0.5), ground truth is non-penetrative because the hidden opponent cuts the pass. Prediction: Precision drops below 15% when >30% of opponent players are off-camera.

Scenario 2: Body orientation veto. Passer's body faces away from the convex hull target. Model predicts penetrative (prob >= 10.38%), but pass goes backward/sideways. Prediction: False positive rate increases by >= 20 percentage points for passes where passer angle to target > 90 degrees (if orientation data were available).

Scenario 3: Game state / score clock veto. Match minute > 75, leading team by 1 goal. High P3 probability moment but team chooses retention. Model flags as penetrative candidate, actual play is conservative. Prediction: Positive predictive value declines monotonically with match clock in leading teams; at minute 85+, PPV <= 0.10 despite model threshold.

These should be verifiable with tracking/event data.

Now I need to ensure:
- No betting terms. Avoid "odds", "spread", "money line", "total", "handicap", "juice", "vig", "over/under". I can use "probability", "likelihood", "AUC", "threshold", "precision", "recall".
- No toy equations. All equations must be formal and justified.
- Cite page markers [PAGE N].
- Word count >= 1000 across sections.

Let me draft carefully, checking word counts.

THINK_TRACE needs >=400 words. I'll write substantial content there.

Total word count across all sections should be >1000. I'll aim for ~1500-2000 words total to be safe.

Let's write.

Important: The user said "PAGES: 5" but the document clearly has page markers up to 13. I will cite based on the visible page markers in the text provided. I won't mention the discrepancy unless needed, but I'll use [PAGE 1], [PAGE 2], etc.

I must not say "odds". I can say "probability" or "likelihood".

Let me start writing.

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

No other text outside these tags? The user said "across these exact XML sections". I should probably only output these sections. I'll output exactly these XML sections.

Let's draft content.

THINK_TRACE (~500 words):

Multi-hop derivation: Start with Michalczyk's claim that forward movement is necessary to score [PAGE 1]. Sotudeh operationalizes this by defining P3: a pass is a potential penetrative pass if a teammate lies inside the convex hull formed by opponents ahead of the ball (excluding GK), restricted to the middle zones of pitch [PAGE 1-2]. This converts a continuous spatiotemporal event into a binary geometric predicate. Because the downstream label (penetrative vs not) is only observed after the pass, the feature set must exclude post-event attributes like pass end location and passer footedness to avoid data leakage [PAGE 3]. The class imbalance is severe: 88% of P3 moments are non-penetrative [PAGE 3], rendering accuracy a degenerate metric; AUC ROC is selected precisely because it integrates performance over all decision thresholds and is invariant to class prior [PAGE 3]. Event-only models plateau at AUC ~0.55 [PAGE 3], indicating that scalar event features (pressure, location) contain almost no discriminative information beyond the prior.

The CNN method introduces an image representation: blue possession team bottom-to-top, red off-ball top-to-bottom, black passer, Voronoi pitch control, green convex hull [PAGE 4-5]. Transfer learning from ImageNet via ResNet-34 assumes low-level edge and texture features transfer to synthetic pitch-control plots [PAGE 5]. After 8 epochs on an Nvidia P100, validation AUC reaches 0.73 [PAGE 5]. However, the threshold selection—closest point to (1,0) on ROC—yields $\tau = 0.1038$ [PAGE 6], which is nearly identical to the empirical positive rate (~12%). This implies the model is not sharply separating classes; rather, it is shifting probability mass slightly around the prior. The confusion matrix confirms this: 4,780 false positives vs 1,244 true positives on 15,976 validation images [PAGE 7], yielding precision ~20.7%. The model’s probability distribution rarely exceeds 60% and the median is near 10% [PAGE 6], suggesting severe score compression.

Gray-zone audit: The convex hull depends on camera visibility. Off-camera opponents distort the hull, making P3 undefined or wrong [PAGE 2 discussion]. Body orientation is absent from 360 data [PAGE 12], so a geometrically valid P3 moment may be physically impossible if the passer faces away. The train/validation split uses the first 80% of Bundesliga matches chronologically [PAGE 2], which risks temporal non-stationarity across a 34-matchday season. Applying the Bundesliga-trained model to LaLiga introduces cross-league distribution shift with no domain adaptation reported. These breakdown regimes mean the reported AUC 0.73 is an upper bound only under ideal visibility and stationary conditions.

SOURCE_OPERATORS_AND_EQUATIONS (~400 words):

Formalism.

Definition P3: Let $\mathcal{O} = \{o_1, ..., o_N\}$ be opponent field players (excluding goalkeeper) positioned anterior to the ball carrier at pass time $t$. The opponent convex hull is $\mathcal{C}_{\text{opp}}(t) = \text{Conv}(\{o_i \in \mathcal{O} : y_{o_i} > y_{\text{ball}}\})$ in pitch coordinates $(x,y) \in [0,L_x] \times [0,L_y]$, with $L_x \approx 105$ m, $L_y \approx 68$ m (SI units). A P3 moment exists iff $\exists r \in \mathcal{T} \setminus \{ \text{passer} \}$ such that $r(t) \in \mathcal{C}_{\text{opp}}(t)$, subject to $x_{\text{pass}} \notin Z_{\text{def,1st}} \cup Z_{\text{last4th}}$ [PAGE 1-2].

Classifier: $f_\theta: \mathcal{X} \to [0,1]$, $\hat{Y} = \mathbb{1}[f_\theta(X) \ge \tau]$. Output unit: probability (dimensionless). AUC ROC: $A = \int_0^1 \text{TPR}(u) \, d(\text{FPR}(u))$, equivalently the Mann-Whitney U statistic normalized by $N_+ N_-$. Prior: $\pi_+ = 0.12$, $\pi_- = 0.88$ [PAGE 3].

Threshold: $\tau^* = \arg\min_{\tau} \sqrt{(1 - \text{TPR}(\tau))^2 + \text{FPR}(\tau)^2} = 0.1038$ [PAGE 6].

Confusion matrix on validation set ($N=15,976$) [PAGE 7]: $TN=9,351$, $TP=1,244$, $FN=601$, $FP=4,780$. Precision $= 1,244/(1,244+4,780) \approx 0.2065$. Recall $= 1,244/(1,244+601) \approx 0.674$. FPR $= 4,780/(4,780+9,351) \approx 0.338$.

Pitch control via Voronoi: $V_i(x) = \{x \in \mathcal{P} : \|x - p_i\|_2 < \|x - p_j\|_2 \, \forall j \neq i\}$ [PAGE 5]. Image tensor dimensions: height $\times$ width $\times$ channels (RGB encoding of team control, hull, players). Training: 8 epochs, Nvidia P100, 2 hours; loss $\mathcal{L}_{\text{train}}=0.30$, $\mathcal{L}_{\text{val}}=0.33$ [PAGE 5].

Breakdown/singularity: $\mathcal{C}_{\text{opp}}$ is undefined if $N_{\text{visible}} < 3$ (hull degenerates to line/point) or if camera occlusion removes anterior opponents [PAGE 2 discussion]. $f_\theta$ assumes stationarity between temporal train/val splits; breaks under tactical drift. Domain shift: ImageNet natural images $\neq$ synthetic pitch-control plots.

RETROCAUSAL_GENEALOGY (~300 words):

Historical lineage: The intellectual ancestry traces to Michalczyk (2020) on the impact of line-breaking passes [PAGE 1], Spearman (2016) on pitch control [PAGE 4/5], Bozinovski & Fulgosi (1976) on transfer learning [PAGE 5], He et al. (2016) Residual Networks [PAGE 5], and Deng et al. (2009) ImageNet [PAGE 5]. Sotudeh stitches these together: pitch control supplies the spatial context, transfer learning supplies the visual prior, and line-breaking pass theory supplies the footballing motivation.

Multi-week traps: The Bundesliga season spans roughly 34 matchdays across ~8 months. Using the first 80% of matches for training and last 20% for validation [PAGE 2] creates a temporal gap of several weeks. During that interval, managerial tactics, player injuries, suspensions, and fixture congestion alter the distribution of P3 moments. A model trained on early-season, low-pressure matches may systematically misjudge late-season, high-stakes encounters where opponents defend deeper and passers take fewer risks. This violates the exchangeability assumption behind standard AUC estimation. Furthermore, applying the model to LaLiga [PAGE 8-10] is a zero-shot cross-league transfer; Spanish possession-oriented football differs structurally from Bundesliga transitions, so the convex hull geometry and pass success rates likely shift without recalibration. These are multi-week traps: the validation window does not capture seasonal distribution drift, and the deployment league does not match the training league.

RECURSIVE_THEORY_OF_MIND (~300 words):

Crisis habit regression: When a team is under sustained pressure (a crisis state), passers habitually regress to conservative, lateral, or backward passes to retain possession. The P3 model, trained on aggregate geometry, may assign high potential to a pass because a teammate sits in the opponent convex hull, yet the passer’s crisis habit regresses to safety, yielding a non-penetrative outcome. This is a systematic false positive source not encoded in event features [PAGE 3].

Counter-trap: Opponents can deliberately manipulate their defensive shape to create a geometric P3 moment that is a tactical trap. By leaving a passing lane seemingly open inside the convex hull, the defending team invites a penetrative pass into a pre-arranged pressing trap. The model sees an open receiving teammate inside the hull and outputs high probability, but the pass is intercepted because the “opportunity” was bait. This recursive deception means the model’s input (player positions) is adversarially conditioned by the opponent’s expectation of the model’s output.

Clock: Match clock and score state are absent from the feature set. A team leading by one goal in the 85th minute has negative expected value from a risky penetrative pass, whereas a trailing team in the 60th minute has positive expected value. The model’s static 10.38% threshold cannot modulate for game-state utility. Consequently, the same spatial P3 moment receives identical probability regardless of whether the clock reads 12:00 or 88:00, producing miscalibrated decisions in late-game contexts.

CROSS_LAYER_VETO_ADJUDICATION (~300 words):

Physical layer: Pitch coordinates live in Euclidean space $\mathbb{R}^2$ with standard dimensions $105 \text{ m} \times 68 \text{ m}$. The convex hull operator assumes exact player coordinates; broadcast camera homography introduces pixel-to-meter projection error. Singularity: if fewer than three anterior opponents are visible, $\mathcal{C}_{\text{opp}}$ collapses and P3 is geometrically undefined [PAGE 2 discussion].

Biomechanical layer: StatsBomb 360 lacks body orientation [PAGE 12]. Let $\phi_p$ be the passer’s facing angle and $\vec{d}$ the vector from passer to the centroid of $\mathcal{C}_{\text{opp}}$. A physically viable penetrative pass requires $\cos(\phi_p - \angle \vec{d}) > 0$ (roughly facing the target). Without this state variable, the model labels geometrically possible but biomechanically infeasible passes as P3 positives. Veto operator: $\mathcal{V}_{\text{bio}} = \mathbb{1}[\text{passer orientation points away from hull}]$. This can convert a model true positive into a physical false positive.

Weather layer: The source does not model precipitation, wind, or pitch friction. A penetrative pass on a wet surface has reduced first-touch reliability and higher interception probability due to altered ball-surface interaction coefficients. No weather veto exists in the paper; this is an unadjudicated environmental layer that can invalidate the “potential” label independent of geometry.

Adjudication: The P3 label is necessary but not sufficient for a successful penetrative pass. Physical veto (orientation), environmental veto (weather), and geometric singularity (occlusion) form a veto stack. The reported AUC 0.73 measures geometric predictability only; it does not account for biomechanical realizability or atmospheric modulation.

RLVR_COUNTERFACTUAL_VETOES (~300 words):

Three verifiable veto scenarios:

1. Camera occlusion veto. Scenario: Off-ball team has 3+ defenders, but one or more lie outside the TV broadcast frame at pass time. Model computes hull from visible subset, finds teammate inside, outputs $p \ge 0.1038$. Verification: With full freeze-frame (all 22 players), the hidden opponent lies on the pass trajectory and intercepts. Prediction: When $>30\%$ of anterior defenders are off-camera, the model’s precision drops below 0.15 because geometric openness is an artifact of partial observability.

2. Body orientation veto. Scenario: Passer’s hips face the sideline, away from the opponent convex hull, yet a teammate occupies space inside the hull. Model outputs high penetrative probability based on position alone. Verification: Orientation data (from optical tracking) shows passer cannot play forward without first touching. Prediction: False positive rate increases by at least 20 percentage points for passes where passer-to-target angular deviation exceeds $90^\circ$; the model’s AUC would collapse if orientation were included as a hard gate.

3. Game-state clock veto. Scenario: Minute 84, team leading 1–0. A midfielder has a P3 moment with $p=0.35$. Model classifies as penetrable. Verification: The team retains possession sideways; expected goal value of the risky pass is negative given score state. Prediction: Positive predictive value declines monotonically with match clock for leading teams; beyond minute 80, PPV falls below 0.10 despite model probabilities, because utility maximization overrides geometric potential.

These are verifiable with event + tracking data and score-state logs.

Now check word count. Each section seems adequate. Total likely >1200 words.

Check for betting terms: I used "probability", "likelihood", "AUC", "threshold", "precision", "recall", "false positive rate". No "odds", "spread", "moneyline", "total", "handicap". Good.

Check for toy equations: All equations are formal, defined, with assumptions. No Force/Fatigue nonsense. Good.

Page citations: I used [PAGE 1], [PAGE 2], [PAGE 3], [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 7], [PAGE 8], [PAGE 10], [PAGE 12]. Need to make sure they correspond reasonably to the text. Let me verify some:

- [PAGE 1] for Intro/Definitions: Yes, page 1 has Intro and Definitions.
- [PAGE 2] for Data (245 matches, 79,000 P3 moments): Yes, page 2.
- [PAGE 3] for Method 1, class imbalance 88%: Yes, page 3.
- [PAGE 4] for Figure 4 / 360 data: Yes, page 4.
- [PAGE 5] for Transfer learning, ResNet, training: Yes, page 5.
- [PAGE 6] for threshold 10.38%, Figure 6/7/8: Yes, page 6.
- [PAGE 7] for confusion matrix values: Yes, page 7.
- [PAGE 8] for Applications / recruitment / LaLiga team level: Page 8 starts applications, recruitment. Yes.
- [PAGE 10] for Figure 15 / defending / dashboard: Page 10 has Figure 15 and defender analysis. Yes.
- [PAGE 12] for Discussion body orientation: Page 12 has discussion. Yes.

Looks fine.

Word count check: Let me estimate roughly.
THINK_TRACE: ~450 words.
SOURCE_OPERATORS: ~350 words.
RETROCAUSAL: ~300 words.
RECURSIVE: ~300 words.
CROSS_LAYER: ~300 words.
RLVR: ~300 words.
Total ~2000 words. Good.

One thing: The user said "PAGES: 5" but the document text clearly has more. I should not contradict the user, but I should cite what's in the text. The user might have meant something else. I'll just cite page markers found in text.

Also, I need to ensure I do not mention "odds" anywhere. Let me scan my draft mentally... I see "probability", "likelihood" not used. Good.

One more check: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I have units: meters for pitch, probability dimensionless, epochs dimensionless, hours for time. Assumptions stated. Singularity/breakdown regimes: camera occlusion, N_visible < 3, temporal non-stationarity, domain shift. Good.

I will now produce the final output with only the XML sections.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds in multiple hops from football theory to operational classifier behavior. First, Michalczyk (2020) establishes that forward progression is necessary to score goals [PAGE 1]; Sotudeh formalizes this by defining a Potential Penetrative Pass (P3) as a pass moment in which at least one teammate lies inside the convex hull formed by opponent field players anterior to the ball, excluding the goalkeeper [PAGE 1]. Passes in the first third of the defensive half and the last fourth of the pitch are excluded [PAGE 1]. This reduces a continuous spatiotemporal football event to a binary geometric predicate: given a passing moment X, predict whether the pass becomes penetrative Y [PAGE 2].

Because the ground truth (penetrative or not) is only realized after the pass is executed, post-event features such as pass end location and passer footedness must be excluded to prevent data leakage [PAGE 3]. The dataset is severely imbalanced: 88% of P3 moments are non-penetrative [PAGE 3]. Under this prior, accuracy is degenerate because a classifier predicting “non-penetrative” for every instance achieves 88% accuracy; therefore AUC ROC is used, as it integrates true positive rate over false positive rate across all thresholds and is invariant to class prevalence [PAGE 3].

Event-only machine learning models (Random Forest, XGBoost, LGBM, CatBoost, Extra Trees) achieve validation AUC ROC of approximately 0.54–0.56 [PAGE 3], indicating that scalar event features carry almost no discriminative signal beyond the class prior. The CNN method instead constructs an image representation of each P3 moment: the possessing team is blue and moves bottom-to-top, the off-ball team is red and moves top-to-bottom, the passer is black, pitch control is rendered via Voronoi diagrams, and the target convex hull is drawn in green [PAGE 4–5]. Transfer learning from ImageNet through a pretrained ResNet-34 is applied, assuming that low-level edge and texture features transfer from natural photographs to synthetic pitch-control plots [PAGE 5]. After 8 epochs on an Nvidia P100 GPU, training loss reaches 0.30 and validation loss 0.33, with validation AUC ROC of 0.73 [PAGE 5].

The decision threshold is chosen as the point on the ROC curve closest to (1,0) in Euclidean distance, yielding tau = 0.1038 [PAGE 6]. This threshold is nearly identical to the empirical positive base rate (roughly 12%), which is a gray-zone warning: the model is not sharply separating classes but is instead shifting probability mass slightly around the prior. The validation probability distribution rarely exceeds 60% and the median sits near 10% [PAGE 6]. On 15,976 validation images, the confusion matrix records 9,351 true negatives, 1,244 true positives, 601 false negatives, and 4,780 false positives [PAGE 7], implying precision of approximately 20.7%.

Audit of breakdown regimes: the convex hull depends entirely on camera-visible opponents; off-camera defenders distort the hull and can make the P3 label geometrically wrong [PAGE 2 discussion]. Body orientation is absent from StatsBomb 360 [PAGE 12 discussion], so a geometrically valid P3 moment may be biomechanically impossible if the passer faces away from the target. The training/validation split uses the first 80% of Bundesliga matches chronologically and the last 20% for validation [PAGE 2], imposing a temporal gap across a season; tactical drift, injuries, and fixture congestion can violate stationarity between the splits. Deploying the Bundesliga-trained model on LaLiga matches [PAGE 8–10] constitutes a zero-shot cross-league transfer with no reported domain adaptation. These factors imply that the reported AUC of 0.73 is an upper bound valid only under full visibility, fixed body-orientation priors, and stationary seasonal distributions.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let pitch coordinates be $(x,y)\in[0,L_x]\times[0,L_y]$ with SI units $L_x\approx105\,\mathrm{m}$ and $L_y\approx68\,\mathrm{m}$. Let $\mathcal{O}=\{o_1,\dots,o_N\}$ be the set of opponent field players excluding the goalkeeper, and let anterior opponents satisfy $y_{o_i}>y_{\text{ball}}$. The opponent convex hull at pass time $t$ is
$$\mathcal{C}_{\text{opp}}(t)=\operatorname{Conv}\bigl(\{o_i\in\mathcal{O}: y_{o_i}(t)>y_{\text{ball}}(t)\}\bigr)\subset\mathbb{R}^2.$$
A P3 moment exists iff
$$\exists r\in\mathcal{T}\setminus\{\text{passer}\}\quad\text{s.t.}\quad r(t)\in\mathcal{C}_{\text{opp}}(t),$$
subject to the spatial exclusion $x_{\text{pass}}\notin Z_{\text{def,1st}}\cup Z_{\text{last4th}}$ [PAGE 1–2].

The classifier is a map $f_\theta:\mathcal{X}\to[0,1]$, where the output unit is probability (dimensionless), and the decision rule is
$$\hat{Y}=\mathbb{1}\!\bigl[f_\theta(X)\ge\tau\bigr].$$
AUC ROC is defined as
$$A=\int_0^1 \mathrm{TPR}\!\bigl(\mathrm{FPR}^{-1}(u)\bigr)\,du,$$
equivalently the normalized Mann–Whitney U statistic over positive and negative sets. The class prior is $\pi_+=0.12$ and $\pi_-=0.88$ [PAGE 3].

The operating threshold is selected by
$$\tau^*=\arg\min_{\tau}\sqrt{\bigl(1-\mathrm{TPR}(\tau)\bigr)^2+\bigl(0-\mathrm{FPR}(\tau)\bigr)^2}=0.1038$$
[PAGE 6]. On the validation set of $N=15{,}976$ images [PAGE 7], the counts are
$$TN=9{,}351,\quad TP=1{,}244,\quad FN=601,\quad FP=4{,}780.$$
Derived information metrics: precision $=TP/(TP+FP)\approx0.2065$; recall $=TP/(TP+FN)\approx0.674$; false positive rate $=FP/(FP+TN)\approx0.338$.

Pitch control is approximated by Voronoi cells
$$V_i(\mathbf{x})=\{\mathbf{x}\in\mathcal{P}:\|\mathbf{x}-\mathbf{p}_i\|_2<\|\mathbf{x}-\mathbf{p}_j\|_2\;\forall j\neq i\}$$
[PAGE 5]. The CNN ingests an RGB-encoded image tensor whose channels represent team spatial control, convex hull, and player locations. Training hyperparameters: 8 epochs, Nvidia P100 GPU, 2 hours; $\mathcal{L}_{\text{train}}=0.30$, $\mathcal{L}_{\text{val}}=0.33$ [PAGE 5].

Singularity and breakdown regimes: (i) if fewer than three anterior opponents are visible, $\mathcal{C}_{\text{opp}}$ degenerates to a line or point and P3 is geometrically undefined [PAGE 2 discussion]; (ii) camera occlusion removes defenders from $\mathcal{O}$, biasing the hull; (iii) the temporal train/validation split assumes exchangeability across the season, which breaks under tactical drift; (iv) ImageNet natural-image statistics do not match synthetic pitch-control plot statistics, creating domain shift between pretraining and fine-tuning [PAGE 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage of the P3 framework stacks multiple historical contributions. Michalczyk (2020) motivates the need for line-breaking, forward-progressive passes in goal scoring [PAGE 1]. Spearman (2016) supplies the pitch-control formalism used to enrich the image representation [PAGE 4–5]. Bozinovski & Fulgosi (1976) provide the transfer-learning foundation [PAGE 5]; He et al. (2016) supply the ResNet-34 architecture [PAGE 5]; Deng et al. (2009) supply ImageNet, the source domain for pretrained weights [PAGE 5]. Sotudeh combines these by wrapping pitch control inside a transfer-learned computer-vision pipeline to answer a football-specific question.

A multi-week trap is embedded in the validation design. The Bundesliga season spans approximately 34 matchdays over roughly eight months. Splitting the data by match chronology—first 80% for training, last 20% for validation [PAGE 2]—creates a temporal gap of several weeks between the training and validation distributions. Across that interval, managerial tactics, injuries, suspensions, and fixture congestion alter the frequency and spatial geometry of P3 moments. A model trained on early-season matches may systematically fail on late-season matches where opponents defend deeper and passers take fewer risks, violating the stationarity assumption required for the reported validation AUC to generalize.

A second multi-week trap arises in deployment. After training on Bundesliga data, the model is applied to 284 LaLiga matches [PAGE 8–10]. This is a zero-shot cross-league transfer: Spanish possession-oriented football exhibits different pressing structures, defensive line heights, and pass-selection cultures than the Bundesliga. Because no domain adaptation or recalibration is reported, the convex-hull geometry and pass-success base rates in LaLiga may shift the model’s operating characteristics without detection. The validation AUC of 0.73 therefore does not guarantee equivalent performance on LaLiga, and the P3 Percentage KPI computed there [PAGE 8–10] may reflect league-specific style rather than transferable penetrative quality.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: When a team is under sustained defensive pressure, passers habitually regress to conservative lateral or backward passes to preserve possession. The P3 model, trained primarily on static spatial geometry, may assign high penetrative probability to a moment because a teammate occupies space inside the opponent convex hull, yet the passer’s crisis habit regresses to safety and the pass is not penetrative. This generates systematic false positives that are invisible to event-only features [PAGE 3] and to the image representation unless body language and pressing intensity are encoded.

Counter-trap: Opponents can adversarially manipulate their defensive shape to manufacture a geometric P3 moment that is a tactical bait. By deliberately leaving a passing lane open inside the computed convex hull, the defending team invites a penetrative pass into a pre-arranged pressing trap. The model sees an open receiver inside the hull and outputs high probability, but the pass is intercepted because the apparent opportunity was intentionally conceded. Here the input state (player positions) is recursively conditioned by the opponent’s expectation of how the model—or a human analyst—would interpret that same geometry.

Clock: Match clock and score state are absent from the feature set. A team leading by one goal in the 85th minute has negative expected value from a risky penetrative pass, whereas a trailing team in the 60th minute may have positive expected value. The model’s static threshold $\tau=0.1038$ [PAGE 6] cannot modulate for game-state utility. Consequently, identical spatial P3 moments receive identical probability regardless of whether the clock reads 12:00 or 88:00, producing miscalibrated decisions in late-game contexts where possession value is time-dependent.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Pitch geometry operates in Euclidean space $\mathbb{R}^2$ with standard dimensions $105\,\mathrm{m}\times68\,\mathrm{m}$. The convex-hull operator assumes exact player coordinates, but broadcast-camera homography introduces pixel-to-meter projection error. Singularity arises when fewer than three anterior opponents are visible, causing $\mathcal{C}_{\text{opp}}$ to collapse [PAGE 2 discussion].

Biomechanical layer: StatsBomb 360 does not include player body orientation [PAGE 12 discussion]. Let $\phi_p$ be the passer’s facing angle and $\vec{d}$ the vector from passer to the centroid of $\mathcal{C}_{\text{opp}}$. A physically viable forward penetrative pass roughly requires $\cos(\phi_p-\angle\vec{d})>0$, i.e., the passer is oriented toward the target region. Without this state variable, the model labels geometrically possible but biomechanically infeasible passes as P3 positives. A hard veto operator would be
$$\mathcal{V}_{\text{bio}}=\mathbb{1}\!\bigl[\text{passer orientation points away from }\mathcal{C}_{\text{opp}}\bigr].$$
This veto can convert a model true positive into a physical false positive.

Weather layer: The source does not model precipitation, wind, or pitch friction [PAGE 1–12]. A penetrative pass on a wet surface has altered ball-surface interaction, reducing first-touch reliability and elevating interception probability. No weather veto is implemented, which is an unadjudicated environmental layer that can invalidate the “potential” label independent of spatial geometry.

Adjudication: The P3 label is necessary but not sufficient for a successful penetrative pass. The veto stack comprises geometric singularity (camera occlusion), biomechanical infeasibility (passer orientation), and environmental modulation (weather/pitch state). The reported validation AUC of 0.73 [PAGE 5] quantifies geometric predictability only; it does not account for biomechanical realizability or atmospheric effects.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Camera occlusion veto. Counterfactual: Off-ball defenders exist outside the TV broadcast frame at pass time. The model computes the convex hull from visible players only, finds a teammate inside the truncated hull, and outputs $p\ge0.1038$. Verifiable condition: With full freeze-frame data (all 22 players), a hidden opponent lies on the pass trajectory and intercepts. Prediction: When more than 30% of anterior defenders are off-camera, the model’s precision falls below 0.15 because geometric openness is an artifact of partial observability.

Scenario 2 — Body orientation veto. Counterfactual: The passer’s hips face the sideline, away from the opponent convex hull, while a teammate occupies space inside the hull. The position-only model outputs high penetrative probability. Verifiable condition: Optical-tracking orientation data shows the passer cannot play forward without first taking a touch. Prediction: For passes where passer-to-target angular deviation exceeds 90 degrees, the false positive rate increases by at least 20 percentage points relative to the baseline confusion matrix; including orientation as a hard gate would collapse the current AUC because many current true positives are physically unrealizable.

Scenario 3 — Game-state clock veto. Counterfactual: Minute 84, team leading by one goal. A midfielder generates a P3 moment with model probability $p=0.35$. Verifiable condition: The team retains possession via a sideways pass; expected goal value of the risky forward pass is negative given the score state. Prediction: Positive predictive value declines monotonically with match clock for leading teams; beyond minute 80, PPV falls below 0.10 despite model probabilities exceeding the 10.38% threshold, because utility maximization overrides geometric potential in late-game states.
</RLVR_COUNTERFACTUAL_VETOES>