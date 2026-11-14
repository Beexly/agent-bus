---
source: "2020 Predicting plays in the National Football League - Craig Joash Fernandes, Ronen Yakubov, Yuze Li, Amrit Kumar Prasad and Timothy C.Y. Chan.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4292
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source paper: "Predicting plays in the National Football League" (Fernandes et al., 2020). The response must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY> Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

I need to write a comprehensive response. Let me structure it carefully.

Key facts from source:
- Paper: Fernandes, Yakubov, Li, Prasad, Chan (2020), Journal of Sports Analytics 6 (2020) 35–43.
- Data: 2013–2014 to 2016–2017 NFL regular seasons, 1034 games, 130,344 pass/rush plays.
- Play-by-play from NFLsavant.com; Madden ratings from maddenratings.weebly.com.
- Features: year, quarter, minute, second, down, yards to go, yard line, offensive formation (shotgun, wildcat, under center, huddle). Derived: previous play, home/away, point differential, in-game/in-season passing proportion, in-game completion proportion, average yards gained for pass/rush.
- Madden position group scores: QB, RB, WR, OL, DL, LB, CB, S.
- Baseline: 58.9% pass rate (naive predict-pass).
- Table 1: pass proportion by down (1st 0.496, 2nd 0.585, 3rd 0.793, 4th 0.670); game scenario (Losing 0.656, Tied 0.558, Winning 0.513); Madden rating bins.
- Models: CART 73.3%, KNN 71.3%, RF 74.7%, NN 75.3%. False negative rates: CART 11.9%, KNN 6.7%, RF 11.1%, NN 10.6%.
- Simple interpretable tree: 3 variables (down, yards to go, point differential), 10 splits, accuracy 65.3% = 86% of NN accuracy.
- Table 3 accuracies by quarter (Q1 60.3, Q2 60.6, Q3 62.4, Q4 73.1), down (1st 58.8, 2nd 58.7, 3rd 84.2, 4th 83.4), yard line (stable ~64%), game scenario (Losing 66.6, Tied 60.6, Winning 62.9), yards to go (1-4 66.7, 5-8 66.4, 9-12 61.2, 13-16 77.9, 17+ 76.0).
- Secondary model with offensive formation: 72.3% accuracy (96% of NN).
- Team-specific trees: range 64.7% (Buffalo Bills) to 82.5% (Dallas Cowboys). Average 73.0%. Coaching changes associated with poorer accuracy.
- Robustness: random team assignment 50 times, average 71.5% (70.3-72.8%), min avg 68.9%, max avg 74.3%.
- Future work: exact players, injuries, weather, media comments, personnel on field, human expert comparison, sequential training, head-to-head tailoring.

Important: No betting lines. No toy equations. Use real formalism where needed (e.g., Bayes, confusion matrix, entropy, VC dimension, sample complexity, etc.) but grounded in the paper.

I need to make sure each XML section is present and substantial. Total >= 1000 words. THINK_TRACE >= 400 words.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation and gray-zone audit. Discuss the chain from raw play-by-play to derived features to model selection. Gray zones: Madden ratings are subjective and lagged (previous season), classification of QB scrambles as passes, static vs dynamic variables, 40-second play clock / 25-second radio window constraint, false negative vs false positive asymmetry for defense, team-specific small sample issues, coaching changes confounding, robustness shuffle test limitations (random assignment destroys team identity but preserves marginal distributions), temporal drift across 4 seasons, feature importance in RF vs NN opacity, 86% and 96% capture ratios being relative not absolute. Also discuss singularity/breakdown: when yards-to-go bins sparse, when team-specific data too thin (1/32 of data), when point differential collapses in blowouts, when formation variable unavailable pre-snap, when QB rating bin [95,99] for WR/HB is n/a (Table 1 shows n/a). Use verbatim quotes and [PAGE N] citations. Pages in source: The text shows page headers 35, 36, 37, 38, 39, 40, 41, 42, 43. I'll cite accordingly.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Define prediction task: Y ∈ {0,1} (rush=0, pass=1). Feature vector X. Empirical risk minimization. Accuracy = (TP+TN)/N. FNR = FN/(FN+TP) for pass class? Need to be careful: they define false negative as predict run when it is a pass. So if positive class = pass, FNR = FN / (FN + TP). False positive = predict pass when run = FP / (FP + TN). Baseline accuracy = P(Y=1) = 0.589. Neural network accuracy 75.3%, FNR 10.6%. Simple tree accuracy 65.3%, capture ratio = 65.3/75.3 = 0.867 ≈ 86%. Secondary tree 72.3%, capture = 72.3/75.3 = 0.960 ≈ 96%. Team-specific range [64.7%, 82.5%]. Random shuffle null: mean 71.5%, CI-ish [70.3,72.8]. Discuss breakdown regimes: small n_team ≈ 130344/32 ≈ 4073 plays per team, but further split by down/yards/differential leads to sparse leaves; VC dimension of tree with 10 splits and 3 variables; Madden rating bins [95,99] missing for WR/HB (n/a). Units: accuracy dimensionless probability [0,1], time in seconds, yards in yards, down ordinal {1,2,3,4}. Page citations.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Alamar (2013) in-game prediction; Lee, Chen & Lakshman (2016) gradient boosting/random forests 75.9%; Burton & Dickey (2015) logistic regression 75.0%; Mulholland & Jensen (2014) tight ends; Dhar (2011) WRs; Alamar & Gould (2008) linemen; Berri & Simmons (2009) QB draft. Multi-week traps: coaching changes over 4 years, offseason roster turnover, Madden ratings based on previous season (lagged by one season), temporal non-stationarity, opponent-specific tailoring data sparsity. The paper explicitly notes future work: sequential training over season, hybrid model, head-to-head models. These are traps because predictive validity decays as personnel/scheme change.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Defensive coordinator's decision under 40-second play clock, 25-second radio window. Crisis habit: defense regresses to base tendencies (e.g., predict pass on 3rd down because 79.3% pass rate). Counter-trap: offense knows defense expects pass on 3rd-and-long, so runs; or uses formation to disguise. The model's static variables are observable by offense too, so offense can game the tree. Clock: 40 seconds snap window, radio cutoff at 25 seconds leaves only 15 seconds for coach-to-MLB communication and adjustment. Theory of mind recursion: Level 0 (run base rates), Level 1 (use model to predict), Level 2 (offense anticipates model, counter-predicts), Level 3 (defense anticipates counter-trap, randomizes). The simple tree, being memorizable and public in principle, is vulnerable to Level 2 exploitation unless mixed with deception.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. The paper explicitly excludes weather (future work mentions it). Physical layer: yard line, down, distance are geometric constraints. Biomechanical: QB release time, WR route depth, OL pass protection vs run blocking—not in model except via Madden ratings aggregate. Weather veto: wind, precipitation, temperature affect passing proportion but absent from features; in extreme weather, pass probability drops, making tree predictions (trained on all-weather data) systematically biased. Surface/turf not included. The veto proof: any prediction must be overridden when physical layer signals violate model assumptions (e.g., high wind, cold, injury to key QB not captured by Madden rating). Since paper excludes these, model has incomplete veto coverage.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just counterfactual vetoes. Need 3 scenarios that are verifiable (can be checked against data/logic) and predictions.

Scenario 1: 3rd down, yards-to-go 13-16, offense losing by 7, Q4. Model predicts pass with high leaf majority (from Table 3, 3rd down accuracy 84.2%, yards-to-go 13-16 accuracy 77.9%). Veto: if starting QB has Madden rating <75 or is injured (not in model), veto pass prediction, switch to rush. Prediction: actual pass rate drops below model-implied leaf proportion; tree overestimates pass.

Scenario 2: Team-specific model for Dallas Cowboys (82.5%) vs Buffalo Bills (64.7%). Veto: after a head-coaching change mid-season, team-specific model trained on pre-change data becomes stale. Prediction: post-change accuracy falls toward null shuffle range (70.3-72.8% average) or below Bills baseline because coaching change breaks habit.

Scenario 3: Pre-snap formation variable unavailable (e.g., offense uses no-huddle, shifts late). Base model (without formation) accuracy 65.3%. Veto: if defensive coordinator cannot observe formation before radio cutoff (25s), must use base model, accepting 7 percentage point drop relative to secondary model (72.3%). Prediction: defensive stop probability decreases because pre-snap read degraded; false negative rate for pass rises above base model's implied rate.

Need to ensure no betting language. Avoid "spread", "moneyline", "odds", "total". Use "accuracy", "probability", "rate", "proportion".

Word count: Need >=1000 total across sections. THINK_TRACE alone >=400. I'll aim for roughly 180-220 words per section average, but THINK_TRACE longer.

Let's write carefully with citations. Page citations from the markdown: page headers show 35 (abstract/intro start), 36, 37, 38, 39, 40, 41, 42, 43. I'll cite as [PAGE 35], etc.

Need verbatim quotes where citing exact pages. I can quote short phrases.

Let's begin drafting.

Structure:

THINK_TRACE (>=400 words):
- Multi-hop: raw features → derived features → model comparison → interpretable tree → team-specific → robustness.
- Cite pages.
- Gray zones: Madden subjectivity/lag, QB scramble classification, static variable constraint (40s/25s clock), false negative asymmetry, team-specific sample size, shuffle null limitations, n/a bins, capture ratios relative.
- Breakdown regimes: sparse leaves, blowout point differentials, pre-snap formation unavailability, weather/physical layer absence.
- Verbatim quotes: "maximum of 40 seconds" [PAGE 39? Actually page 39 in text? Let's check: "In the NFL, the offense has a maximum of 40 seconds..." appears on page 39? The source text shows page 38 then 39. The sentence is on page 39? Let's see: after page 38 header, text continues. The 40 seconds text is in section 5. It appears before page 39 header? Actually the markdown shows page 38 header, then Table 2, then section 5 begins. The 40 seconds sentence is in section 5. Then page 39 header. So it's likely page 38 or 39. I'll cite [PAGE 38-39] or just [PAGE 38] if unsure, but better to cite where it appears. The text segment: "In the NFL, the offense has a maximum of 40 seconds in which they can snap the ball. Within the first 25 seconds, the defensive coordinator can communicate..." This is in Section 5, which starts on page 38 and continues to 39. I'll cite [PAGE 38] and [PAGE 39] carefully. Actually, looking at the markdown: after Table 2 on page 38, Section 5 starts. The text runs into page 39. I can cite [PAGE 38] for start of Section 5 and [PAGE 39] for Table 3. For the 40 seconds quote, I'll say [PAGE 38] since that's where section 5 begins. But to be safe, I can cite [PAGE 38–39]. The user asked for exact [PAGE N] markers. I'll use single page numbers where confident: [PAGE 35] abstract, [PAGE 36] data description, [PAGE 37] Table 1 and EDA, [PAGE 38] Table 2 and models, [PAGE 39] simple model and Table 3, [PAGE 40] team-specific, [PAGE 41] robustness and Fig 5, [PAGE 42] future work, [PAGE 43] conclusion/appendix. Need to align with actual content.

Let's map content to pages based on headers in markdown:
- Page 35: Title, abstract, keywords, start of Introduction.
- Page 36: Introduction continued, Literature review start.
- Page 37: Literature review continued, Section 3 Data, 3.1 sources, 3.1.1 play-by-play.
- Page 38: 3.1.2 Madden ratings, 3.2 derived features, 3.3 EDA, Table 1, Section 4 models, Table 2.
- Page 39: Section 5 interpretable model, Table 3, Figs 1-2, discussion of secondary model.
- Page 40: Figs 3-4, Section 6 team-specific trees.
- Page 41: Fig 5, robustness check.
- Page 42: Section 7 future work.
- Page 43: Section 8 conclusion, references, Appendix, Fig 6.

I'll cite accordingly.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math.
- Let \mathcal{D} = {(x_i, y_i)}_{i=1}^{N}, N=130,344, y_i ∈ {0,1} where 1 = pass, 0 = rush.
- P(Y=1) = 0.589 [PAGE 37].
- Accuracy: Acc = (1/N) Σ 1[ŷ_i = y_i].
- FNR (pass as positive): FNR = FN/(TP+FN). They report NN FNR 10.6% [PAGE 38].
- Capture ratio: ρ = Acc_tree / Acc_NN = 65.3/75.3 ≈ 0.867 [PAGE 39].
- Secondary: ρ_sec = 72.3/75.3 ≈ 0.960 [PAGE 39].
- Team-specific: Acc_team ∈ [0.647, 0.825], mean 0.730 [PAGE 40-41].
- Null shuffle: Acc_null ~ 71.5% (70.3–72.8) over 50 reps [PAGE 41].
- Decision tree with depth/splits: VC dimension bound. For tree with L leaves, VC dim ≈ O(L log L) or for axis-aligned splits with d features and s splits, VC dim bounded. Use formal statement: For a classification tree with s internal nodes and p=3 features, the hypothesis space H has VC dimension bounded by O(s log(p s)) [not from paper, but formal]. Assumptions: i.i.d. plays within season, stationarity across 2013-2017. Breakdown: non-stationarity due to coaching changes, Madden rating lag one season, sparse conditional cells P(Y=1 | X=x) when n_x small.
- Units: accuracy dimensionless [0,1], distance in yards, time in seconds, down ordinal {1,2,3,4}, point differential in points.

RETROCAUSAL_GENEALOGY: As above.
RECURSIVE_THEORY_OF_MIND: As above.
CROSS_LAYER_VETO_ADJUDICATION: As above.
RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Need total words >=1000. Let's write generously.

Ensure no mention of betting. Use "probability", "likelihood", "rate".

Let's draft now.

I must be careful to include verbatim quotes with page citations. I'll pull exact phrases from source:

- "1034 games and 130,344 pass/rush plays in total" [PAGE 35 abstract or PAGE 36? The abstract says this on page 35. Section 3.1.1 repeats on page 37.] I'll cite [PAGE 35].
- "the offense has a maximum of 40 seconds in which they can snap the ball. Within the first 25 seconds, the defensive coordinator can communicate, via a one-way radio, to the middle linebacker." [PAGE 38-39]. I'll cite [PAGE 38] since section starts there.
- "predict run when it is a pass" definition [PAGE 38].
- "captures 86% of the accuracy" [PAGE 39? Actually abstract page 35 says 86%, section 5 page 39 says 86%.]
- "58.9% of plays were passing plays" [PAGE 37].
- Table 1 values [PAGE 37].
- Dallas Cowboys 82.5%, Buffalo Bills 64.7% [PAGE 40].
- Random assigned each play... 50 times... average team accuracy 71.5% [PAGE 41].
- Madden 14 based on 2012-13 season used to predict 2013-14 [PAGE 37].

Good.

Now, write the response. It should be purely the XML sections. No extra text outside.

Word count check: I'll write generously. THINK_TRACE ~500 words. Others ~200-250 each. Total ~1600+.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds in four nested hops. Hop 1: raw ingestion. The authors obtain play-by-play data from NFLsavant.com for the 2013–2014 through 2016–2017 regular seasons, comprising 1,034 games and 130,344 pass/rush plays [PAGE 35]. For each play they record year, quarter, minute, second, down, yards to go for first down, yard line, and offensive formation (shotgun, wildcat, under center, huddle or no huddle) [PAGE 36]. Intended passes that devolve into quarterback scrambles are retained in the passing class, a labeling convention that compresses quarterback-run ambiguity into the positive class [PAGE 36]. Hop 2: feature augmentation. Madden NFL player ratings (2014–2017 versions) are merged in; each version is built from the prior season’s performance, so Madden 14 ratings (2012–13 basis) forecast the 2013–14 season, imposing a one-season temporal lag [PAGE 37]. Eight position-group scores are computed by averaging the top-ranked players required by the offensive formation and a 4–3 defensive alignment, deliberately excluding rarely used backups [PAGE 37]. Derived play-level features include previous play, home/away, point differential, in-game and in-season passing proportion, in-game completion proportion, and average yards gained per pass/rush [PAGE 37]. Hop 3: accuracy ceiling. Four complex models are tuned by repeated 10-fold cross-validation over 15 iterations: CART (73.3%), KNN (71.3%), random forest (74.7%), and neural network (75.3%) [PAGE 38]. The neural network also posts a 10.6% false negative rate, defined as predicting a rush when the play is a pass [PAGE 38]. The baseline naïve rule—predict pass on every play—achieves 58.9% because 58.9% of all plays are passes [PAGE 37]. Hop 4: interpretability under a hard clock. Because the offense has a maximum of 40 seconds to snap and the defensive coordinator may use the one-way radio to the middle linebacker only within the first 25 seconds, the simple model is restricted to static, instantly observable variables: quarter, down, minute, yards to go, previous yards gained, and point differential [PAGE 38–39]. The selected classification tree uses three variables—down, yards to go, point differential—and ten splits, reaching 65.3% accuracy, or 86% of the neural network’s 75.3% [PAGE 39]. Adding offensive formation yields a secondary pre-snap tree at 72.3%, or 96% of the neural network [PAGE 39]. Team-specific trees range from 64.7% (Buffalo Bills) to 82.5% (Dallas Cowboys), mean 73.0% [PAGE 40]. A robustness shuffle randomly reassigns plays to teams 50 times; the null ensemble averages 71.5% (range 70.3%–72.8%), indicating the true spread is not noise [PAGE 41].

Gray-zone audit: (1) Madden ratings are subjective, aggregated, and lagged by one season, so they cannot capture mid-season injuries or schematic drift [PAGE 37]. (2) The 3-vs-10-split tree’s static variables are observable by the offense as well, so the model is not secret; an offense can game a memorized tree by varying formation or personnel [PAGE 38–39]. (3) False negatives are declared more costly than false positives because a defense expecting a pass can adjust to a run more readily than vice versa [PAGE 38]. (4) Team-specific cells are sparse: roughly 130,344 / 32 ≈ 4,073 plays per team before conditioning on down, distance, and score, so leaf-level proportions become unstable [PAGE 40]. (5) Table 1 shows missing Madden entries for WR and HB in the [95, 99] bin (n/a), creating an unsupported rating regime [PAGE 37]. (6) The paper explicitly reserves weather, exact personnel, injuries, and media comments for future work, meaning the model lacks physical-layer veto inputs [PAGE 42]. Breakdown/singularity regimes: severe weather suppresses passing below the all-condition baseline; blowout point differentials make score-driven leaves degenerate; late no-huddle formations arrive after the 25-second radio cutoff, forcing the defense to use the weaker base tree; and coaching changes invalidate team-specific priors mid-season [PAGE 38–42].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the play space be \(\mathcal{D}=\{(x_i,y_i)\}_{i=1}^{N}\) with \(N=130{,}344\) plays, \(y_i\in\{0,1\}\) where \(y=1\) denotes a pass and \(y=0\) a rush [PAGE 35–36]. The naïve marginal is \(P(Y=1)=0.589\) [PAGE 37]. A classifier \(h:\mathcal{X}\to\{0,1\}\) is scored by accuracy
\[
\operatorname{Acc}(h)=\frac{1}{N}\sum_{i=1}^{N}\mathbb{1}\{\hat y_i=y_i\},
\]
and, treating pass as the positive class, the false negative rate is
\[
\operatorname{FNR}=\frac{\#\{i:\hat y_i=0,\;y_i=1\}}{\#\{i:y_i=1\}}.
\]
The neural network achieves \(\operatorname{Acc}=0.753\) and \(\operatorname{FNR}=0.106\) [PAGE 38]. The simple tree achieves \(\operatorname{Acc}=0.653\), giving capture ratio
\[
\rho=\frac{0.653}{0.753}\approx 0.867\approx 86\%,
\]
and the formation-augmented secondary tree achieves \(\operatorname{Acc}=0.723\), so
\[
\rho_{\mathrm{sec}}=\frac{0.723}{0.753}\approx 0.960\approx 96\%
\]
[PAGE 39]. Team-specific accuracies satisfy \(\operatorname{Acc}_{\mathrm{team}}\in[0.647,\,0.825]\) with mean \(0.730\) [PAGE 40–41]. The shuffle null constructs \(\mathcal{D}'\) by randomly permuting team labels across plays and re-fits 32 trees; over 50 repetitions \(\overline{\operatorname{Acc}}_{\mathrm{null}}=0.715\) with spread \([0.703,\,0.728]\), mean minimum \(0.689\), and mean maximum \(0.743\) [PAGE 41]. Units are dimensionless probability for accuracy and FNR; yards for distance; seconds for game clock; ordinal \(\{1,2,3,4\}\) for down; points for differential. Assumptions: exchangeability of plays within the four-season window, stationarity of offensive tendencies, and one-season lag validity for Madden ratings [PAGE 37]. Breakdown regimes: (i) sparse-condition singularity where \(n(x)\) is small for team-specific leaves, making \(P(Y=1\mid X=x)\) high-variance; (ii) temporal non-stationarity under coaching changes or mid-season injuries, which the static Madden rating cannot track [PAGE 37, 40]; (iii) observation deadline singularity when formation arrives after \(t=25\) s into the 40-s play clock, reverting the defense to the 65.3% base tree instead of the 72.3% secondary tree [PAGE 38–39].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a lineage of in-game sports analytics that begins with Alamar’s general argument that prediction is increasingly popular for in-game decisions [PAGE 36]. The most direct predecessors are Burton and Dickey (2015), who used logistic regression on 2011–2015 data split by quarter and score state to reach 75.0% accuracy, and Lee, Chen, and Lakshman (2016), who combined play-by-play data with Madden ratings via gradient boosting and random forests to reach 75.9% [PAGE 36]. Fernandes et al. match this ceiling with a neural network at 75.3% while adding false negative rates that the earlier studies did not report [PAGE 38]. Earlier player-projection work—Mulholland and Jensen (2014) on tight ends, Dhar (2011) on wide receivers, Alamar and Gould (2008) on offensive linemen, and Berri and Simmons (2009) on quarterback draft valuation—established that Madden-style ratings capture real but subjective domain knowledge [PAGE 36]. The multi-week traps are explicit in the paper’s own limitations. Madden ratings are computed from the previous season, so a player’s breakout or collapse in Week 3 is invisible to the model until the next annual rating update [PAGE 37]. Coaching changes across the four-year window correlate with poorer team-specific predictability because play-calling style and tendency shift with staff [PAGE 40]. Offseason roster turnover and in-season injuries similarly violate the stationarity assumption, yet the paper leaves dynamic, sequentially updated training to future work [PAGE 42]. Head-to-head tailoring—e.g., a Patriots model trained only on Patriots–Jets games—is noted as desirable but data-sparse, which would push leaf counts into singularity [PAGE 42]. Thus the model’s historical validity decays over a multi-week horizon precisely where a defensive coordinator needs it most: after a coaching change, after a key injury, or after the offense has had film to study the defensive team’s own predictable tendencies.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The decision environment is a bounded-rationality game with a hard clock: the offense has at most 40 s to snap, and the defensive coordinator’s one-way radio to the middle linebacker closes after 25 s, leaving roughly 15 s for communication and adjustment [PAGE 38–39]. This induces recursive theory-of-mind layers. Level 0 is habit regression: the defense defaults to base rates, such as passing on 79.3% of third-down plays and 65.6% of the time when losing [PAGE 37, Table 1]. Level 1 is model deployment: the defensive coordinator runs the classification tree and predicts pass or rush based on down, yards to go, and point differential [PAGE 39]. Level 2 is the counter-trap: because the tree is static, memorizable, and uses only variables visible before the snap, the offense can infer which leaf the defense occupies and choose the minority play in that leaf, or shift formation late to invalidate the pre-snap read [PAGE 38–39]. Level 3 is meta-randomization: the defense anticipates the counter-trap and deliberately violates the tree in selected situations to restore unpredictability. The paper’s model does not prescribe such randomization; it offers only leaf-level majority-class proportions as confidence measures, leaving the coach to decide how heavily to trust the model [PAGE 39]. The clock is the binding constraint: any recursion deeper than Level 1 consumes the 25-second radio window. If the offensive formation is concealed until after the cutoff, the defense must fall back from the 72.3% secondary tree to the 65.3% base tree, a 7-percentage-point degradation that a Level-2 offense can exploit by varying tempo [PAGE 39]. Crisis habit regression therefore regresses to base rates exactly when the model is most needed, and the counter-trap is available to whichever side observes the other’s decision rule first.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: yard line, down, and yards-to-go are geometric constraints on the play tree [PAGE 37, Table 3]. The model is fairly stable across yard lines (63.7%–64.9%) but strongly distance-dependent: accuracy falls to 61.2% at 9–12 yards to go and rises to 77.9% at 13–16 yards and 76.0% at 17+ [PAGE 39, Table 3]. Biomechanical layer: quarterback release time, wide-receiver route depth, offensive-line pass-protection versus run-blocking stance, and defensive-front alignment are not features except indirectly through aggregated Madden position-group scores [PAGE 37]. Weather layer: temperature, wind, and precipitation are absent from the feature set; the paper lists them as future work [PAGE 42]. Veto proof: any prediction must be overridden when the physical layer contradicts the model’s all-weather, average-personnel training distribution. In high wind or cold, the empirical pass proportion should fall below the model’s leaf estimate because the model was trained on conditions including dome and warm-weather games; failing to veto produces systematically overestimated pass probability. Similarly, a starting-quarterback injury not yet reflected in Madden ratings, or a key pass-rusher absence, invalidates the position-group score [PAGE 37, 42]. Because the simple tree is restricted to static variables, it cannot ingest an in-game injury report or a weather update within the 25-second window [PAGE 38–39]. Therefore the veto authority rests with the human defensive coordinator, who must suppress the model output when biomechanical or weather evidence shifts the base rate outside the tree’s training envelope. The paper provides no algorithm for this veto, which is itself a structural limitation for real-time adoption [PAGE 42].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (injury/ratings mismatch veto): Third down, 13–16 yards to go, offense trailing by 7 in the fourth quarter. The tree’s joint conditions imply a high pass leaf (third-down accuracy 84.2%; 13–16 yards accuracy 77.9%) [PAGE 39, Table 3]. Verifiable veto: if the starting quarterback’s Madden rating is in the lowest bin [70, 74] (pass proportion 0.591) or the quarterback is injured and inactive, the model’s pass leaf is overfitted to a healthy starter. Prediction: the observed pass rate in this cell drops below the leaf majority proportion, and the tree’s false negative rate for pass rises above its nominal 10.6% because the defense over-commits to pass defense.

Scenario 2 (coaching-change staleness veto): A team-specific tree trained on four seasons of Dallas Cowboys data achieves 82.5% accuracy [PAGE 40]. Verifiable veto: after a mid-season head-coaching or offensive-coordinator change, the pre-change training distribution no longer represents the current play-caller. Prediction: post-change accuracy collapses toward the shuffle-null mean of 71.5% (70.3%–72.8%) or toward the Buffalo Bills floor of 64.7%, because the old tree encodes the departed coach’s habits [PAGE 40–41].

Scenario 3 (formation-deadline veto): The secondary pre-snap tree reaches 72.3% accuracy only when offensive formation is observed before the 25-second radio cutoff; otherwise the defense must use the 65.3% base tree [PAGE 38–39]. Verifiable veto: in no-huddle or late-shift situations where formation is not fixed until after \(t=25\) s, the defensive coordinator is forbidden from using the formation-augmented tree. Prediction: defensive stop probability falls by approximately the 7-percentage-point gap between the secondary and base models, and the pass false negative rate increases because the base tree’s down/distance/score splits are less discriminating than the formation-augmented splits.
</RLVR_COUNTERFACTUAL_VETOES>