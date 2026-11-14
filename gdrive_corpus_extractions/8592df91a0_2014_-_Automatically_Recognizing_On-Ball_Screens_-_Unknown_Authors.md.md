---
source: "2014 - Automatically Recognizing On-Ball Screens - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2014"
pages: 8
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6160
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source text (MIT Sloan 2014 paper on Automatically Recognizing On-Ball Screens). I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

I need to treat this as GSE + GSI Frontier Reasoning Foundry output. The paper is about computer vision / machine learning for basketball on-ball screens using SportVu tracking data.

Key facts from source:
- Authors: Armand McQueen, Jenna Wiens, John Guttag (MIT).
- Data: STATS SportVu, 2012-2013 NBA season. Position table: {x,y} of every player, {x,y,z} ball at 25 fps. Event table: play-by-play.
- Rule-based segmentation (Figure 1): IF ball-handler dribbling AND offensive player within 10 ft of ball-handler AND screener not in/near paint AND screener no more than 2 ft further from basket than ball-handler AND defensive player <= 12 ft from ball-handler AND basketball not in paint for >=13 consecutive frames AND ball-handler same every frame THEN identify as action.
- Action average length just over 1.5 seconds (Page 2).
- Sensitivity ~98%, PPV ~52% for rule-based alone on 21 quarters from 14 games (Page 2).
- Three action types (Figure 2, Page 2): Type 1 classic on-ball screen; Type 2 establishing half-court positions (no screen); Type 3 perimeter movement (may or may not screen).
- Labeling: +1/-1. Watched quarters, recorded times. Doubt excluded. Handoffs not screens. If action contained annotation between start/end, positive else negative (Page 2).
- 30 continuous features, then discretized into 5 binary features each = 150-dimensional vector (Page 3).
- Pairwise distance time series. Screen moment t* = argmin ||x_bh(t) - x_sc(t)|| (Page 3). Divides action into approach and departure.
- Five continuous features per pairwise distance: Table 1 garbled but text says 5 continuous values summarized each time series. Likely min, max, mean, maybe derivative features? Need to be careful not to invent. Source says "summarize each time series using 5 continuous values" but table is image/garbled. I should state only what is known: 5 continuous values per pair, 6 pairs? Actually text says "pairwise interactions between ball-handler, screener, on-ball defender and basket" => 4 entities => C(4,2)=6 pairs. 5 features each => 30 continuous features. Then 5 binary per continuous => 150-dim.
- SVM linear classifier: f(x) = w·x + b. LIBSVM. Cost parameter via 5-fold CV. Label via sign(w·x + b) (Page 3).
- Performance: mean AUROC 0.8309 across 200 random splits (Page 4). At 80% PPV threshold, 82% sensitivity (Page 4). Note abstract also says sensitivity 82% and PPV 80%.
- Team-specific classifiers: similarity not symmetric. Trained on same number examples. Figure 6a/b (Page 5). Similarity ranks vs GSW: 1 GSW, 2 BOS, 3 CHI, 3 HOU, 5 CLE, 6 PHO, 7 NYK, 8 OKC, 9 POR.
- Augmented Team-Specific: 9-team group (252 actions, 14+14 per team). Then 8-team group 224 actions (28 from each of 8 most similar). Reduce until single most similar team. Optimal classifier trained on 56% or less of available training data in almost every case (Page 5).
- GSW and HOU easier to classify due to spacing, few Type 3 actions. OKC harder due to Westbrook-Durant brush screens on perimeter, many Type 3. Classifier better at Type 1 vs Type 2 than Type 3 screen vs Type 3 non-screen. Secondary classifier on Type 3 might help (Page 5).
- Limitations: self-labeling, personnel changes, no personnel-specific classifiers due to data (Page 6).
- Appendix: Labeled games table (Page 9? Actually page 8/9 in text but labeled pages 8 and 9? The text shows page 8 then Appendix on page 9? Let's check markers. The text has page numbers embedded: page 1 title/abstract/intro; page 2 data segmentation; page 3 ML classifier; page 4 performance; page 5 improving classifier; page 6 limitations; page 7 references; page 8 appendix? Actually text says "2014 Research Paper Competition Presented by: 7" then references then "8" then appendix. The user says PAGES: 8. I will cite [PAGE 2], [PAGE 3], etc. based on visible page numbers in text: I see page markers "2", "3", "4", "5", "6", "7", "8", "9". I will use those.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll aim for substantial depth.

Constraints:
- No betting lines. This is about basketball analytics, not betting. Easy to avoid.
- No toy equations. Use real formalism from paper: SVM, AUROC definition, pairwise distance norm, screen moment argmin, sensitivity/PPV definitions. State units (feet, frames, seconds, Hz, dimensionless probabilities).
- Exact singularity/breakdown regimes: e.g., rule-based fails when PPV 52% due to Type 2/Type 3 confusion; classifier breaks down for OKC Type 3 brush screens; personnel changes mid-season invalidate stationarity; self-labeling introduces verification bias; small sample per team (27+27) leads to high variance; quintile discretization assumes feature distributions are sufficiently populated; linear SVM assumes linear separability in 150-dim quintile space; 25 fps temporal resolution aliases screens faster than 40ms; 10 ft / 2 ft / 12 ft thresholds are hard cutoffs with discontinuity at boundaries.
- Citations: [PAGE N] and verbatim quotes.

Let's outline sections.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. >=400 words. I'll derive the pipeline: raw SportVu 25Hz -> segmentation rule (conjunction of spatial/temporal predicates) -> action candidate -> labeling -> feature extraction (6 pairwise distance series, 5 summary stats each, quintile binarization -> 150-dim) -> linear SVM -> AUROC / sensitivity-PPV tradeoff -> team similarity via cross-test AUROC matrix -> augmented subset selection -> breakdown modes. Gray zones: Table 1 features are image-garbled (cannot verify exact 5 statistics), similarity is asymmetric and based on AUROC which may be unstable with small n (13 pos/13 neg per team test), "80% confidence that a positive label is correct (80% PPV)" phrasing conflates PPV with confidence, rule-based sensitivity 98% but PPV 52% means base rate of screens among actions is low, the screen moment argmin is non-unique if distance ties, 13 consecutive frames = 0.52s at 25fps, hard thresholds create measure-zero boundary singularities where a player at exactly 10.0 ft flips classification. Multi-hop: from raw pixels to strategic inference (spacing emphasis in GSW/HOU vs OKC brush screens). Word count target ~500-600.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Units. Page citations. Verbatim quotes. Breakdown regimes.
- Position table: p_i(t) ∈ ℝ², b(t) ∈ ℝ³, Δt = 1/25 s = 0.04 s [PAGE 2].
- Event table E = {(e_k, τ_k)} chronological [PAGE 2].
- Segmentation predicate S(t) = ∃ bh, sc, od, bb: Dribble(bh) ∧ ||p_sc - p_bh||₂ ≤ 10 ft ∧ sc ∉ Paint ∧ ||p_sc - Basket||₂ ≤ ||p_bh - Basket||₂ + 2 ft ∧ ∃ od: ||p_od - p_bh||₂ ≤ 12 ft ∧ bb ∉ Paint ∧ ∀ τ ∈ [t, t+12/25 s]: bh(τ) = bh [PAGE 2, Figure 1]. Action = maximal contiguous interval where S(t) true. Length ≈ 1.5 s [PAGE 2].
- Rule-only performance: Sensitivity ≈ 0.98, PPV ≈ 0.52 [PAGE 2]. Verbatim: "approximately 98% of all the on-ball screens were part of actions and approximately 52% of all actions contained an on-ball screen."
- Label y ∈ {+1, -1}; annotation overlap rule [PAGE 2].
- Pairwise distance d_{ab}(t) = ||p_a(t) - p_b(t)||₂ [PAGE 3]. Screen moment t* = argmin_t d_{bh,sc}(t) [PAGE 3]. Approach: t < t*, Departure: t > t*.
- Feature vector: 6 pairs × 5 summary statistics = 30 continuous; quintile binarization → 150 binary [PAGE 3]. Table 1 garbled, so I will not claim exact names of the 5 statistics beyond "5 continuous values" [PAGE 3].
- Classifier: h(x) = sign(wᵀx + b), w ∈ ℝ¹⁵⁰, b ∈ ℝ. Trained via LIBSVM, cost C selected by 5-fold CV [PAGE 3]. Decision function f(x) = wᵀx + b [PAGE 3].
- AUROC definition: P(f(x⁺) > f(x⁻)) for x⁺~P⁺, x⁻~P⁻; AUROC=0.5 random, 1.0 perfect [PAGE 4 footnote 2]. Mean AUROC = 0.8309 over 200 splits [PAGE 4].
- Operating point: PPV = 0.80 → Sensitivity = 0.82 [PAGE 4]. Verbatim: "If we set the threshold so that we have 80% confidence that a positive label is correct (80% PPV), we can identify 82% of the positively labeled actions (82% sensitivity)."
- Similarity: not symmetric. Team-specific classifier trained on n per team; cross-test AUROC matrix A_{ij} = AUROC(classifier trained on team i tested on team j) [PAGE 5, Appendix page 9]. Similarity rank of j wrt i = sort_j A_{ij} descending? Actually Figure 6b: similarity of each team with respect to GSW by sorting single-team classifier performance on GSW test set. So column GSW values sorted: GSW 0.8472, BOS 0.7820? Wait matrix rows=train? Let's inspect Appendix table: rows labeled TEST SETS? The table has rows BOS, CLE, ..., GLOBAL and columns BOS ... GLOBAL. Header says "CLAS SIFIERS" and row label "TEST SETS". It's ambiguous if rows are test and columns are classifiers or vice versa. But text says "We applied each classifier to each team’s test data. The resulting AUROCs ... Figure 6a... Figure 6b gives similarity of each team with respect to GSW... sorting single-team classifier performance on the GSW test set." So Figure 6b likely uses column GSW (classifier trained on GSW?) tested on each team? Or classifier trained on each team tested on GSW? The rank list: 1) GSW 2) BOS 3) CHI 3) HOU ... If sorting performance on GSW test set, then we look at how well each team's classifier performs on GSW test. Looking at row GSW? No. If rows are classifiers trained on that team and columns are test sets, then column GSW shows performance of each row's classifier on GSW test. Values in column GSW: BOS 0.7820, CLE 0.7718, CHI 0.7857, GSW 0.8472, HOU 0.8348, NYK 0.7654, OKC 0.7441, PHO 0.8024, POR 0.7671, GLOBAL 0.7966. Sorting descending: GSW 0.8472, HOU 0.8348, CHI 0.7857, BOS 0.7820, GLOBAL 0.7966? Wait GLOBAL 0.7966 would be 4th. But rank list excludes GLOBAL and has GSW, BOS, CHI, HOU, CLE, PHO, NYK, OKC, POR. Let's sort column GSW excluding GSW: BOS 0.7820, CLE 0.7718, CHI 0.7857, HOU 0.8348, NYK 0.7654, OKC 0.7441, PHO 0.8024, POR 0.7671. Descending: HOU 0.8348, PHO 0.8024, CHI 0.7857, BOS 0.7820, POR 0.7671, NYK 0.7654, CLE 0.7718? Actually 0.7718 > 0.7671. So: HOU, PHO, CHI, BOS, CLE, POR, NYK, OKC. That doesn't match rank list (GSW, BOS, CHI, HOU, CLE...). Maybe rows are test sets and columns are classifiers. Then row GSW shows performance of each column's classifier on GSW test. Column values for row GSW: BOS 0.8370, CLE 0.8238, CHI 0.8348, GSW 0.8472, HOU 0.8348, NYK 0.8129, OKC 0.8092, PHO 0.8172, POR 0.8019, GLOBAL 0.8250. Sorting classifiers by performance on GSW test: GSW 0.8472, BOS 0.8370, CHI 0.8348, HOU 0.8348, CLE 0.8238, GLOBAL 0.8250 (excluded), PHO 0.8172, NYK 0.8129, OKC 0.8092, POR 0.8019. Excluding GSW and GLOBAL: BOS, CHI, HOU (tie), CLE, PHO, NYK, OKC, POR. This roughly matches rank list: 1) GSW 2) BOS 3) CHI 3) HOU 5) CLE 6) PHO 7) NYK 8) OKC 9) POR. Yes! So rows = test sets, columns = classifiers trained on that team. Similarity of team j wrt GSW = A_{GSW, j} (classifier trained on j tested on GSW). Not symmetric because A_{i,j} ≠ A_{j,i} generally. Good, I can state this precisely citing Appendix page 9 and Page 5 text.
- Augmented: start 9 teams × 28 = 252. Then 8 teams × 28 = 224. Reduce by similarity. Optimal used ≤56% of available training data [PAGE 5]. Verbatim: "In almost every case the optimal classifier was trained on 56% or less of the available training data."
- Breakdown regimes: (1) Hard spatial thresholds create discontinuities at d = 10 ft, 2 ft, 12 ft; measurement noise σ_pos causes misclassification near boundaries. (2) 25 fps → 40 ms resolution; screen motions faster than ~80 ms may be aliased; 13-frame minimum = 0.52 s excludes very quick screens. (3) PPV 52% rule-only implies base rate of screens among candidates ≈ (sensitivity × prevalence) / PPV? Not given prevalence. But low PPV driven by Type 2/3. (4) Linear SVM in 150-dim quintile space assumes linear separability; small per-team n (27 pos/27 neg training) risks overfitting/high variance despite CV. (5) Self-labeling introduces verification bias; no inter-rater reliability reported. (6) Personnel non-stationarity: rosters change, invalidating team-specific classifier over season [PAGE 6].
- AUROC estimate uncertainty: 200 splits, mean 0.8309, no std dev reported; cannot compute confidence interval from source.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Van Gundy quote [PAGE 1] citing Abrams NYT 2009 [Ref 1]; pick-and-roll as endgame strategy. SportVu/player tracking era (2012-2013). Cortes & Vapnik 1995 SVM [Ref 2]. LIBSVM 2011 [Ref 3]. MIT prior work? Wiens/Guttag in ML for healthcare? Not in source, but can mention general ML lineage. The paper applies SVMs to spatiotemporal sports data.
- Multi-week traps: If one treats team offense as stationary across a season, personnel changes (injuries, trades) break classifier validity; the paper explicitly notes teams change personnel throughout game and season [PAGE 6]. A "multi-week trap" is assuming GSW/HOU similarity ranking from Nov 2012–Apr 2013 holds in playoffs or next season. Another trap: Type 3 actions (perimeter movement) are confusable; OKC's Westbrook-Durant brush screens exploit this [PAGE 5]. A secondary classifier on Type 3 is proposed but not built; relying on global classifier for OKC is a trap. The 80% PPV / 82% sensitivity operating point is threshold-dependent; moving threshold changes tradeoff [PAGE 4 Figure 5b]. Small sample per team (e.g., PHO 31 positive / 34 negative total in Appendix) means quintile discretization may have empty bins or unstable quantiles.
- Historical: Before automation, manual video review required significant labor [PAGE 1]. The paper automates part of that. Lineage from rule-based expert systems to ML classifier hybrid.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- This section is more abstract but must be grounded. "Crisis habit regression" = under pressure (game on the line), teams revert to pick-and-roll because it's hard to defend [PAGE 1 Van Gundy]. The classifier must recognize screens precisely in high-leverage moments; if it regresses to counting only Type 1, it misses Type 3 brush screens that OKC uses to force switches [PAGE 5].
- Counter-trap: Defense anticipates the screen moment t* and fights through or switches; offense counters with spacing (GSW/HOU) reducing Type 3 ambiguity [PAGE 5]. The ML classifier's feature extraction (pre-screen approach vs post-screen departure) models this temporal structure; a defender reading the same pairwise distance series could anticipate t*.
- Clock: 13 consecutive frames = 0.52 s minimum action length; shot clock and game clock not in data, but action length just over 1.5 s [PAGE 2]. The screen moment divides approach/departure; defensive recovery time is bounded by departure duration. If the offense executes faster than the classifier's temporal resolution (40 ms), the system fails. "Clock" also refers to the 2012-2013 season window; personnel changes over the season break stationarity [PAGE 6].
- Theory of mind: The offense models the defense's expectation of a screen; the defense models the offense's screen-setter selection (stationary time, approach timing, proximity) [PAGE 3 screener identification]. The classifier tries to infer the offense's intent from kinematics; if the offense varies screener identity (personnel-specific), the team-specific classifier regresses [PAGE 6].

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: Court geometry. Paint definition "near" via inset figure [PAGE 2 Figure 1] but exact region not specified in text—this is a gray zone. Distances in feet; basket position fixed. A screener exactly 2.0 ft further from basket than ball-handler is at boundary; noise vetoes detection.
- Biomechanical layer: Screener identified by stationary duration, early approach, proximity [PAGE 3]. A player who is stationary but injured or fatigued may not set a screen; the feature doesn't model physiological state. Ball-handler dribble event from Event table; if dribble event missed, no ball-handler, frame rejected [PAGE 3]. On-ball defender weighted by distance in first 11 frames (0.44 s) [PAGE 3]; if defender switches during that window, misidentification.
- Weather: Indoor NBA arena; weather not applicable. I should state explicitly that weather is a null set (indoor controlled environment, no weather veto). But HVAC/arena lighting could affect camera tracking? SportVu uses cameras, not affected by weather. I will note weather = ∅ for indoor arena; only camera occlusion/calibration as physical-layer veto (not in source, but can be framed as limitation). Better to stick to source: data from all arenas, indoor, no weather variable. The veto proof: no weather terms appear; the system is invariant to weather because it is indoor. However, arena-to-arena camera calibration differences could introduce domain shift—this is a physical-layer veto not quantified in source.
- Adjudication: Rule-based gate (Figure 1) is a hard veto: if any predicate fails, no action. Then ML classifier soft veto via decision threshold. The conjunction means high sensitivity (98%) but low PPV (52%) because the rule is permissive. The ML classifier raises PPV to 80% at 82% sensitivity by learning to exclude Type 2/3 [PAGE 2,4].

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning via Verifiable Rewards? Or just verifiable scenarios. I need 3 counterfactual veto scenarios with predictions. They should be verifiable (i.e., testable from source logic) and predictions about system failure/success.
1. Veto: Boundary singularity at screener distance = 10.0 ft from ball-handler. Suppose SportVu measurement error is ±0.5 ft. A true screen at 9.6 ft may be measured as 10.4 ft and rejected by rule. Prediction: In games with high camera calibration error or optical occlusion, rule-based sensitivity drops below 98%, and actions near the 10 ft boundary are systematically undercounted, inflating PPV artificially while missing screens. Verifiable by re-running segmentation with threshold 9.5 ft and 10.5 ft and measuring delta in action count and PPV.
2. Veto: OKC Type 3 brush screens. Counterfactual: If the classifier is restricted to Type 1 vs Type 2 only (excluding Type 3), sensitivity for OKC collapses because many OKC actions are Type 3 [PAGE 5]. Prediction: AUROC for OKC test set using global classifier will be significantly lower than for GSW; the Appendix matrix shows OKC column/row around 0.73-0.79 vs GSW 0.80-0.84. A Type-3-specific secondary classifier would be required; without it, OKC screens are under-detected in crunch time.
3. Veto: Personnel non-stationarity mid-season. Counterfactual: Train classifier on Nov–Dec 2012 GSW data, test on Mar–Apr 2013 GSW after a key rotation change (e.g., Andre Iguodala joined GSW in 2013? Actually that's 2013 offseason; but in-season changes happen). Paper says not enough data for personnel-specific classifiers [PAGE 6]. Prediction: Team-specific classifier performance degrades over weeks as personnel changes; AUROC on later quarters lower than on earlier quarters. Verifiable by splitting Appendix games by date and comparing cross-temporal AUROC.

Each needs prediction. I'll phrase clearly.

Word count: Need total >=1000. I'll write generously. Ensure no betting language. Ensure no fake equations. Use LaTeX. Cite [PAGE N].

Let's draft carefully.

I need to ensure exact XML section names. No extra sections.

Let's start writing.

THINK_TRACE: I'll write ~600 words. Cover derivation and gray zones.

SOURCE_OPERATORS_AND_EQUATIONS: LaTeX heavy. Include all equations. Cite pages. Mention Table 1 garbling. Breakdown regimes.

RETROCAUSAL_GENEALOGY: ~200-250 words.

RECURSIVE_THEORY_OF_MIND: ~200-250 words.

CROSS_LAYER_VETO_ADJUDICATION: ~200-250 words.

RLVR_COUNTERFACTUAL_VETOES: ~250-300 words with 3 scenarios.

Total should exceed 1000 easily.

No mention of odds/spreads/totals/moneylines.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's pipeline can be derived as a sequence of five nested operators acting on STATS SportVu spatio-temporal observations. At the base layer, the Position table provides player positions p_i(t) ∈ ℝ² and ball position b(t) ∈ ℝ³ at 25 Hz (Δt = 0.04 s), while the Event table supplies a chronology E = {(e_k, τ_k)} of dribbles, passes, fouls, shots, etc. [PAGE 2]. The first operator is a hard, deterministic segmentation gate (Figure 1) that admits a frame only if a conjunction of spatial and temporal predicates holds simultaneously: a ball-handler is dribbling; an offensive screener lies within 10 ft; the screener is outside the paint; the screener is no more than 2 ft farther from the basket than the ball-handler; an on-ball defender is within 12 ft; the ball is outside the paint; and this conjunction persists for at least 13 consecutive frames with an invariant ball-handler identity [PAGE 2]. Because the rule is permissive by design—intended to capture every possible screen while excluding isolation—the rule-only stage achieves sensitivity ≈ 0.98 but PPV ≈ 0.52 on 21 quarters from 14 games [PAGE 2]. That PPV floor is the first gray zone: roughly half of all admitted actions are non-screens, specifically Type 2 (half-court position establishment) and Type 3 (perimeter movement) as classified by manual inspection [PAGE 2, Figure 2].

The second operator is human annotation: each admitted action is labeled y ∈ {+1, −1} by overlaying recorded screen timestamps; doubtful screens and handoffs are excluded [PAGE 2]. The third operator extracts 30 continuous features from six pairwise distance time series d_ab(t) = ||p_a(t) − p_b(t)||₂ among ball-handler, screener, on-ball defender, and basket [PAGE 3]. The screen moment t* = argmin_t d_bh,sc(t) splits each action into approach and departure [PAGE 3]. Each of the six series is summarized by five continuous values (Table 1 contents are image-garbled in the source, so the exact statistics cannot be verified beyond "5 continuous values" [PAGE 3]), then quintile-binarized into a 150-dimensional binary vector [PAGE 3]. The fourth operator is a linear SVM h(x) = sign(wᵀx + b), w ∈ ℝ¹⁵⁰, trained with LIBSVM and a cost parameter selected by 5-fold cross-validation [PAGE 3]. The fifth operator is thresholding on the decision value f(x) = wᵀx + b to produce the sensitivity–PPV tradeoff; at PPV = 0.80, sensitivity = 0.82, with mean AUROC = 0.8309 across 200 random splits [PAGE 4].

Gray-zone audit: (1) The screen-moment argmin is non-unique under distance ties and is undefined if the ball-handler–screener distance never attains an interior minimum; (2) 13 frames equals 0.52 s, so screens resolving faster than roughly half a second are excluded by construction; (3) hard cutoffs at 10 ft, 2 ft, and 12 ft create measure-zero boundary singularities where sub-foot tracking noise flips the admission predicate; (4) per-team training sets contain only 27 positive and 27 negative examples, so quintile binarization may produce empty or unstable bins for rare teams such as PHO (31 positive, 34 negative total in the Appendix); (5) the similarity relation used for team-specific classifiers is explicitly non-symmetric [PAGE 5], and the Appendix AUROC matrix must be read with rows as test sets and columns as training teams to reproduce Figure 6b's GSW ranking (GSW, BOS, CHI, HOU, CLE, PHO, NYK, OKC, POR); (6) self-labeling without an outside expert introduces verification bias [PAGE 6]; and (7) roster turnover violates the stationarity assumption underlying team-specific classifiers, a breakdown regime the authors themselves flag [PAGE 6].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Data layers and units.**  
Position table: p_i(t) ∈ ℝ² for each of ten players, b(t) ∈ ℝ³ for the ball, sampling rate f_s = 25 Hz ⇒ Δt = 0.04 s [PAGE 2].  
Event table: E = {(e_k, τ_k)} ordered by τ_k; e_k ∈ {dribble, pass, shot, foul, …} [PAGE 2].

**Segmentation predicate (Figure 1, [PAGE 2]).**  
Let bh denote the ball-handler, sc the screener, od the on-ball defender, and bb the ball. An action begins at time t iff  
\[
S(t) \equiv \big[ \text{Dribble}(bh) \;\land\; \|p_{sc}(t) - p_{bh}(t)\|_2 \le 10\,\text{ft} \;\land\; sc \notin \text{Paint} \;\land\; \|p_{sc}(t) - p_{\text{basket}}\|_2 \le \|p_{bh}(t) - p_{\text{basket}}\|_2 + 2\,\text{ft} \;\land\; \exists\, od:\; \|p_{od}(t) - p_{bh}(t)\|_2 \le 12\,\text{ft} \;\land\; bb \notin \text{Paint} \;\land\; \forall \tau \in [t,\, t + 12\Delta t]:\; bh(\tau) = bh(t) \big].
\]  
An action is a maximal contiguous interval over which S(τ) = true. Average observed length ≈ 1.5 s [PAGE 2].  
Verbatim rule criterion: "there is a player who is dribbling the ball (i.e., the ball-handler) AND there is an offensive player within 10 feet of the ball-handler (i.e., the screener) AND the screener is not in or near the paint ... AND the screener is no more than 2 ft. further from the basket than the ball-handler is AND there is a defensive player <= 12 ft. from the ball-handler ... AND the basketball is not in the paint ... for >=13 consecutive frames AND the ball-handler is the same for every frame" [PAGE 2, Figure 1].

**Rule-only operating point ([PAGE 2]).**  
Sensitivity ≈ 0.98; PPV ≈ 0.52. Verbatim: "approximately 98% of all the on-ball screens were part of actions and approximately 52% of all actions contained an on-ball screen."

**Labeling operator ([PAGE 2]).**  
y = +1 iff a vetted screen annotation timestamp lies within the action's start–end interval; otherwise y = −1. Handoffs excluded; doubtful screens excluded.

**Pairwise distance and screen moment ([PAGE 3]).**  
\[
d_{ab}(t) = \|p_a(t) - p_b(t)\|_2, \qquad t^* = \arg\min_t d_{bh,sc}(t).
\]  
Approach: t < t*; Departure: t > t*. Six pairs among {bh, sc, od, basket}; five continuous summary values per pair; 30 continuous features; quintile discretization into five binary features each ⇒ x ∈ {0,1}¹⁵⁰ [PAGE 3]. Table 1's five statistics are rendered as image placeholders in the source and are therefore not verbatim recoverable [PAGE 3].

**Classifier ([PAGE 3]).**  
Dataset D = {(x_i, y_i)}_{i=1}^n, x_i ∈ ℝ¹⁵⁰, y_i ∈ {+1, −1}. Linear SVM decision function  
\[
f(x) = w^{\top}x + b, \qquad \hat{y} = \operatorname{sign}(f(x)),
\]  
with w ∈ ℝ¹⁵⁰, b ∈ ℝ. Cost parameter C chosen by 5-fold cross-validation via LIBSVM [PAGE 3].

**Performance metrics ([PAGE 4]).**  
AUROC definition: \(\operatorname{AUROC} = \Pr(f(x^+) > f(x^-))\) for x^+ ∼ P_+, x^- ∼ P_-; AUROC = 0.5 is chance, 1.0 is perfect [PAGE 4, footnote 2]. Mean AUROC = 0.8309 over 200 random train/test splits [PAGE 4]. Operating point: "If we set the threshold so that we have 80% confidence that a positive label is correct (80% PPV), we can identify 82% of the positively labeled actions (82% sensitivity)" [PAGE 4]. Verbatim abstract claim: sensitivity of 82% and positive predictive value of 80% [PAGE 1].

**Team similarity and augmented classifiers ([PAGE 5], Appendix [PAGE 9]).**  
Similarity is non-symmetric. Train classifier C_i on team i; test on team j's held-out set; entry A_{ij} = AUROC(C_i on test set j). Rows in Appendix matrix are test sets; columns are training teams. Similarity of team j with respect to GSW = sort_j A_{GSW,j} descending, yielding GSW, BOS, CHI (tie), HOU (tie), CLE, PHO, NYK, OKC, POR [PAGE 5, Appendix Page 9]. Augmented protocol: 9-team group (252 actions; 14 positive + 14 negative per team), then 8-team group (224 actions; 28 per team), pruning by similarity down to one team. Verbatim: "In almost every case the optimal classifier was trained on 56% or less of the available training data" [PAGE 5].

**Breakdown and singularity regimes.**  
1. Boundary singularity: at d = 10 ft, d = 12 ft, or Δ_d_basket = 2 ft exactly, sub-foot SportVu noise changes S(t); no error model is reported [PAGE 2, Figure 1].  
2. Temporal aliasing: 13-frame minimum = 0.52 s excludes screens with duration below this window; 25 Hz (40 ms) may alias rapid screen-setting kinematics [PAGE 2].  
3. Class confounding: Type 3 actions (perimeter movement, screen or no screen) are the dominant PPV killer; OKC's Westbrook–Durant perimeter brush screens generate many Type 3 instances, degrading OKC-specific performance relative to GSW/HOU [PAGE 5].  
4. Sample-size singularity: PHO total labeled actions = 31 positive / 34 negative; quintile edges estimated from such small sets are unstable [Appendix Page 9].  
5. Non-stationarity: personnel changes within a game and across a season invalidate team-specific classifier stationarity [PAGE 6].  
6. Labeling bias: self-labeled ground truth with no outside expert reliability study [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a lineage that begins with tactical basketball doctrine rather than statistics: Stan Van Gundy's declaration that the pick-and-roll is the endgame weapon because "you can't take away everything" [PAGE 1; citing Abrams, New York Times, 19 Nov. 2009]. That quote establishes the pick-and-roll as a high-leverage, crisis-time offensive primitive, which motivates automation: before SportVu, determining effective pick-and-roll execution required "a significant amount of manual labor for video/play review (or just a lot of coaching experience)" [PAGE 1]. The statistical-learning layer inherits directly from Cortes & Vapnik's support-vector networks (1995) and the LIBSVM implementation (Chang & Lin, 2011) [PAGE 3, References 2–3], transplanted from static classification into a spatio-temporal sports domain.

A multi-week trap is embedded in the temporal scope. The data are drawn from the 2012–2013 regular season across 14 games and 21 quarters [PAGE 2, Appendix Page 9]. The authors explicitly warn that "teams change personnel throughout the course of a game and over the course of a season," meaning that a team-specific classifier trained on November–December footage may regress by March–April if rotations, injuries, or acquisitions alter offensive personnel [PAGE 6]. Treating team offense as stationary across weeks is therefore a trap: the similarity rankings (GSW ≈ BOS ≈ CHI ≈ HOU) are valid only within that season's tracking window and should not be extrapolated to playoffs or subsequent seasons without re-estimation. A second trap is action-class conflation: the global classifier separates Type 1 (true screens) from Type 2 (non-screens) well, but struggles to separate Type 3 screens from Type 3 non-screens [PAGE 5]. A team like OKC, which deliberately runs perimeter brush screens to force switches, populates Type 3 heavily, so a system tuned on the global mix will systematically under-detect OKC's highest-value screens. The proposed remedy—a secondary classifier exclusively for Type 3 actions—is noted but not implemented, leaving a latent failure mode for teams whose offensive identity is built on ambiguous perimeter movement [PAGE 5].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind here concerns three nested agents: the offense, the defense, and the classifier attempting to infer the offense's intent from kinematics. Crisis habit regression: under endgame pressure, Van Gundy's logic implies offenses regress to the pick-and-roll because it is the hardest action to nullify completely [PAGE 1]. If the classifier itself regresses by counting only unambiguous Type 1 screens, it will miss the precise moments when crisis offenses are most likely to operate—especially Type 3 perimeter screens that OKC uses to force defensive switches [PAGE 5]. The offense models the defense's expectation of a screen at t* = argmin_t d_bh,sc(t); the defense models the offense's screener selection, which the paper operationalizes as a weighting of stationary duration, early approach, and proximity to the ball-handler [PAGE 3]. The classifier attempts to invert this model: from observed distance time series, infer whether a screen was intended.

Counter-trap: defenses can counter the screen by fighting through, switching, or hedging, and offenses counter the counter by manipulating spacing. GSW and HOU are easier to classify because their spacing emphasis reduces Type 3 ambiguity—perimeter players rarely approach one another, so the pairwise distance series contain cleaner screen signatures [PAGE 5]. OKC, by contrast, runs Westbrook–Durant brush screens that generate Type 3 actions indistinguishable from non-screen perimeter movement without finer features [PAGE 5]. The classifier's temporal decomposition into approach and departure is an implicit model of defensive reaction time: if the offense compresses the approach phase below the classifier's temporal resolution, the defense cannot recover in the departure window, and the classifier may also fail to localize t*.

Clock: two clocks bind the system. The micro-clock is the 13-frame / 0.52 s minimum action duration and the 40 ms sampling interval [PAGE 2]; any screen action faster than ~half a second is structurally excluded. The macro-clock is the 2012–2013 season window [PAGE 2, Appendix Page 9]; personnel turnover over weeks breaks the IID assumption between training and test splits drawn from the same season, let alone across seasons [PAGE 6]. A recursive system that ignores either clock—treating a November classifier as valid in April, or treating a 40 ms observation as sufficient for a sub-40 ms screen event—will regress to habit rather than adapt to the current offensive personnel.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. The court geometry is fixed: basket position, paint region, and dimensions are invariant within an NBA arena. The rule-based gate uses hard Euclidean thresholds in feet: 10 ft (ball-handler–screener), 2 ft (screener vs. ball-handler distance to basket), and 12 ft (defender–ball-handler) [PAGE 2, Figure 1]. The paint boundary and the phrase "in or near the paint" reference an inset figure not fully specified in text, creating an underspecified physical veto: a screener standing at the paint edge may be admitted or rejected depending on an unstated boundary convention. Measurement noise in SportVu positions, if comparable to tenths of a foot, can flip the admission predicate at these exact boundaries, generating measure-zero singularities where d = 10.0 ft exactly toggles S(t).

Biomechanical layer. The screener is identified not by a jersey role but by a composite of stationary duration, early approach timing, and proximity to the ball-handler [PAGE 3]. This is a behavioral proxy, not a physiological measurement; it cannot distinguish a deliberate screen from a stationary offensive player who happens to be near the ball-handler, nor can it detect fatigue or injury that alters screening intent. The on-ball defender is fixed as the closest defender during the first 11 frames (0.44 s), with heavier weight on early frames to account for being caught on the screen [PAGE 3]; if a defensive switch occurs within that window, the defender identity is misassigned and downstream pairwise features are corrupted. The ball-handler is taken from the most recent dribble event; if the Event table misses a dribble, the frame is rejected entirely [PAGE 3], introducing a sensor-event veto independent of spatial position.

Weather layer. NBA games occur in indoor arenas, so meteorological weather is a null set (∅) for this dataset: no temperature, wind, or precipitation terms appear in the Position or Event tables, and the paper reports no arena-to-arena environmental covariates [PAGE 2]. The only environmental variable is the arena itself, which could induce domain shift through camera calibration, lighting, or occlusion differences across venues; this physical-layer veto is acknowledged implicitly by the use of 14 games across multiple venues but is not quantified [PAGE 2, Appendix Page 9].

Adjudication. The rule-based algorithm is a hard conjunctive veto: failure of any predicate excludes the frame, which explains the high sensitivity (≈98%) and low PPV (≈52%) [PAGE 2]. The SVM is a soft veto operating on the 150-dimensional feature vector; raising the decision threshold trades sensitivity for PPV, reaching 82% sensitivity at 80% PPV [PAGE 4]. The correct adjudication order is therefore: physical spatial gate first (to reduce candidate volume), then biomechanical feature extraction, then the learned classifier as the final soft veto. Any single layer's failure propagates: a missed dribble event vetoes the frame before the SVM ever sees it; a boundary noise event misadmits a Type 2 action that the SVM must then reject; a mid-season roster change invalidates the team-specific weights entirely [PAGE 6].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Boundary singularity at the 10 ft admission threshold. Counterfactual: Suppose SportVu position error has standard deviation σ ≈ 0.5 ft and a true screen occurs with ball-handler–screener distance 9.6 ft. The measured distance may exceed 10 ft, causing the rule-based gate to reject the action before feature extraction. Prediction: Re-running the segmentation on the same 21 quarters with thresholds at 9.5 ft and 10.5 ft will produce a statistically significant change in admitted-action count and PPV; sensitivity will drop below the reported 98% for games with higher camera calibration error or occlusion, while PPV may rise spuriously because low-confidence boundary screens are systematically removed. Verifiable by comparing action counts and rule-only PPV across the perturbed thresholds on the Appendix game list [PAGE 9].

Scenario 2 — OKC Type 3 brush-screen collapse. Counterfactual: Restrict the classifier to Type 1 versus Type 2 discrimination only, excluding all Type 3 perimeter-movement actions from the test set. Prediction: For OKC, sensitivity will fall sharply because many Thunder actions are Type 3 Westbrook–Durant brush screens [PAGE 5]; the AUROC gap between OKC and GSW/HOU on the team-specific matrix will widen beyond the already observed spread (OKC column/row roughly 0.73–0.79 vs. GSW 0.80–0.84 in the Appendix [PAGE 9]). Without a dedicated Type 3 secondary classifier, OKC's highest-frequency screen actions will be under-detected, especially in endgame situations where brush screens are most likely [PAGE 1, 5].

Scenario 3 — Personnel non-stationarity across the season clock. Counterfactual: Train a team-specific classifier on GSW actions from November–December 2012 and test on GSW actions from March–April 2013, holding the feature pipeline fixed. Prediction: AUROC will degrade relative to the within-season random-split mean of 0.8309 [PAGE 4] because roster minutes and offensive personnel shifted over the macro-clock of the season [PAGE 6]. The degradation will be most acute for teams with mid-season trades or injuries; teams with stable rotations (e.g., those with fewer than 10 players logging meaningful minutes) will show smaller declines. Verifiable by splitting the Appendix games by date [PAGE 9] and computing cross-temporal AUROC for each team; a significant early-vs-late performance gap falsifies the stationarity assumption underlying team-specific classifiers.
</RLVR_COUNTERFACTUAL_VETOES>