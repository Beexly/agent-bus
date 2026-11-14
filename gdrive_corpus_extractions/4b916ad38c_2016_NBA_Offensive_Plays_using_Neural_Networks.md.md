---
source: "2016 NBA Offensive Plays using Neural Networks.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3601
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about classifying NBA offensive plays using neural networks. They've provided the full text of the paper (9 pages). I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "DRIVE SOURCE" and provided pages 9. I need to cite exact [PAGE N] markers. The source text has page numbers embedded (1 through 9).

Let me carefully map content to pages based on the page markers in the text:

Page 1: Title, Abstract, Introduction, Figure 1 mention, end of intro.
Page 2: Method section 2.1, 2.2, Figure 2 mention.
Page 3: Section 2.3 RNN, equations hidden unit, Figure 3.
Page 4: Section 2.4 ordering sequences and player embedding, Table 1, Figure 4.
Page 5: Section 2.5 sequence prediction, equations x̂t+1 = F(x1...xt), objective, joint optimization w*Cost_seq + Cost_class. Section 2.6 anytime prediction, Figure 5.
Page 6: Section 3 Experiments, 3.1 Classification performance, Table 2.
Page 7: Section 3.2 Adapting to new season (transfer learning), Table 3.
Page 8: Section 4 Conclusion, Acknowledgment.
Page 9: References.

I need to be careful: The text shows "2016 Research Papers Competition Presented by: [page number]" pattern.

Let me identify exact page citations:
- Page 1: Abstract, Introduction, "looking at moving dots from SportVU data representing player positions was enough for nearly perfect classification" [PAGE 1]
- Page 2: Section 2.1 pictorial representation, Section 2.2 standard NN, Figure 2 sequential representation.
- Page 3: Section 2.3 RNN, hidden unit equation, Pr(y|x), parameters θ, LSTM [PAGE 3]
- Page 4: Section 2.4 player embedding, Table 1, Figure 4 [PAGE 4]
- Page 5: Section 2.5 sequence prediction, x̂t+1 = F(x1, … xt), joint optimization θ = argmax_θ(w*Cost_seq + Cost_class) [PAGE 5]
- Page 6: Section 3.1, Table 2, base-rate 13.7%, NN 54.7%, RNN 65.6% [PAGE 6]
- Page 7: Section 3.2 transfer learning, Table 3, new 33.6%, transfer 53.7%, fine-tune 61.9% [PAGE 7]
- Page 8: Conclusion, 66% top-1 accuracy, 80% top-3 [PAGE 8]
- Page 9: References [PAGE 9]

Now I need to write comprehensive XML sections.

Constraints check:
- No betting lines whatsoever. No spreads, totals, moneylines, odds.
- No toy equations. Use formal LaTeX equations from the paper or proper formalism. State units, assumptions, singularity/breakdown regimes.
- >=1000 words total across sections. THINK_TRACE alone >=400 words.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words. I should derive the information flow: SportVU at 25 fps -> pictorial representation -> RNN/LSTM -> classification. Gray zones: limited labeled data (1435 sequences, 95 test), player position disambiguation ambiguity, cross-season transfer breakdown, "don't-know" threshold trade-offs, anytime prediction evidence accumulation. Breakdown regimes: time-outs, fouls, premature ends (mentioned page 1), transition offense filtered out. Multi-hop: tracking coordinates -> embeddings -> hidden state accumulation -> softmax class distribution -> sequence prediction auxiliary task -> joint optimization -> anytime prediction.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX.
- Input sequence x = (x1,...,xT), class label y in K strategies. Page 3.
- Hidden unit h_t = σ(W_in x_t + U h_{t-1}). Page 3.
- Pr(y|x) conditional distribution. Parameters θ = {W_in, W_out, b_in, b_out, U}. Page 3.
- LSTM variant.
- Sequence prediction: x̂_{t+1} = F(x1,...,xt), minimize Euclidean distance. Start after 2 seconds. Page 5.
- Joint objective: θ = argmax_θ(w * Cost_seq + Cost_class). Page 5. Note: argmax with cost is unusual (normally argmin), but I should quote what's there or note it. Actually the paper says argmax but it's minimizing cost; I should note this as a potential notation inconsistency/gray zone.
- Units: 25 frames per second SportVU; sequence prediction starts after 2 seconds; 4 seconds at 2.5 fps in Figure 2; 24-second shot clock (Page 5).
- Breakdown/singularity: plays ending prematurely due to time-outs/fouls; transition offense filtered; limited labels (1435 sequences for 11 classes, 95 test); cross-season distribution shift; threshold T=.4 vs T=.7 precision/recall trade-off.

<RETROCAUSAL_GENEALOGY>: Historical lineage. References: Liu/Luo/Shah CVPR 2009 action recognition; Kuehne et al. HMDB ICCV 2011; Goodfellow et al. Deep Learning; Hochreiter & Schmidhuber LSTM 1997. Multi-week traps: transfer across seasons (2013-14 to 2014-15), fine-tuning with 109 examples over 3 batches (~1 month each), model staleness as coaching/lineup changes occur over weeks.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is about the model's "theory of mind" of opponent plays. Crisis habit regression: under pressure, teams revert to base plays; counter-trap: model adapting to opponent adaptations; clock: shot clock 24 seconds, anytime prediction as clock pressure increases. The RNN accumulates evidence over time; distinguishing aspects occur at different times (HORNS early vs others late). Crisis = late clock, regression to simple plays, counter-trap = defense adjusting.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Indoor basketball, weather is controlled (veto: weather irrelevant). Physical: court dimensions fixed, 25 fps tracking, 3D ball position. Biomechanical: player movement constraints, screens, cuts, drives; position embedding based on shooting tendencies. Veto conditions: if play breaks down due to timeouts/fouls/premature end (Page 1), model invalid. If transition offense (filtered), veto. If insufficient evidence before shot clock expires, veto/"don't-know".

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
Rlevr? RLVR = Reinforcement Learning from Verifiable Rewards? Or just "verifiable". I'll treat as verifiable veto scenarios.
1. Timeout/foul interruption: If a play ends prematurely due to whistle before 2-second sequence prediction window, veto classification; prediction accuracy drops to base-rate (13.7% old season, 16.5% new season).
2. Cross-season without fine-tuning: Transfer model on new season data without fine-tuning yields 53.7% top-1 vs fine-tuned 61.9%; if lineup changes exceed embedding resolution capacity, veto transfer.
3. Threshold T=.7 "don't-know": If max Pr(y|x) < 0.7, withhold prediction; at T=.7 RNN precision 90.0%, recall 59.0% (old season). If recall requirement >59%, veto threshold.

Need to ensure no betting content. None here.

Word count: Need >=1000 words total. THINK_TRACE >=400. Let me aim for substantial content in each.

Let me write carefully with [PAGE N] citations and verbatim quotes where appropriate.

Verbatim quotes to use:
- Page 1: "looking at moving dots from SportVU data representing player positions was enough for nearly perfect classification"
- Page 1: "unless the play breaks down due to time-outs, fouls, or ended prematurely"
- Page 3: "The RNN learns to model Pr(y| x ) the conditional distribution over the class labels given the input sequence."
- Page 5: "𝜽= 𝑎𝑟𝑔𝑚𝑎𝑥𝜃(𝑤∗𝐶𝑜𝑠𝑡𝑠𝑒𝑞 + 𝐶𝑜𝑠𝑡𝑐𝑙𝑎𝑠𝑠)"
- Page 5: "the shot-clock is always 24-seconds in the NBA"
- Page 6: "For top-k accuracy, we just predicted based on the top-k most likely classes in our training set. For our 11-class dataset, the top-1 base-rate was 13.7% in the test set."
- Page 7: "The ‘new’ model, due to the much smaller training set, only achieved 33.6% accuracy."
- Page 8: "With more understanding towards the data representation, and corresponding changes to a more advanced RNN model, we were able to achieve 66% top-1 accuracy, and 80% top-3 accuracy on unseen examples."

Now write the response. Must be only the XML sections. No intro/outro outside tags presumably. The user said "across these exact XML sections". So output exactly those six XML blocks.

Let me ensure word counts. I'll write generously.

THINK_TRACE: Target ~500 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~300 words.
RETROCAUSAL_GENEALOGY: ~200 words.
RECURSIVE_THEORY_OF_MIND: ~200 words.
CROSS_LAYER_VETO_ADJUDICATION: ~200 words.
RLVR_COUNTERFACTUAL_VETOES: ~250 words.

Total ~1650 words. Good.

Let's draft.

Important: LaTeX formatting. Use proper math. Mention assumptions: stationary dynamics across time (Page 3), Markovian hidden state, balanced class distribution (Page 6), 25 fps sampling, Euclidean reconstruction loss, white noise injection to prevent memorization (Page 3).

Singularity/breakdown regimes:
- When play breaks down due to time-outs, fouls, or ends prematurely (Page 1).
- Transition offense excluded (Page 6).
- Cross-season transfer without fine-tuning degrades (Page 7).
- Small sample: 109 examples for new season training (Page 7).
- Threshold T=.7 yields low recall (59.0%) (Page 6).

Now write the final output.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The input pipeline begins with SportVU tracking data sampled at 25 frames per second, providing each player’s (x,y) court coordinates and the 3D ball position [PAGE 2]. Raw coordinates are rejected as a direct model input because Euclidean magnitude in the number system does not correspond to signal magnitude for a playcall; the authors therefore convert trajectories into a pictorial “foot-print” image representation [PAGE 2]. This is hop one: continuous spatio-temporal coordinates are discretized into an image-classification problem. Hop two addresses temporal structure: because foot-print images discard the order of player motions relative to each other and the ball, the input is separated into time steps with fainter “shadow” representations of previous frames, and uncorrelated white noise is added per frame to discourage memorization of uninformative coordinates [PAGE 3]. The resulting sequence x = (x1,...,xT) is mapped to a class label y among K offensive strategies through a recurrent architecture [PAGE 3].

Hop three is the recurrent hidden-state recursion. A typical RNN hidden unit at time t receives xt and accumulated evidence h_{t-1} through weight matrices W_in and U, with a nonlinear activation σ such as sigmoid or ReLU [PAGE 3]. The paper explicitly adopts an LSTM variant [PAGE 3]. The network models Pr(y|x), the conditional distribution over class labels given the input sequence, and learns parameters θ = {W_in, W_out, b_in, b_out, U} [PAGE 3]. Hop four introduces player-identity disambiguation: because the same play can be executed by different line-ups, a 10-dimensional embedding trained on shooting tendencies maps players to position-aware neighbors, resolving role ambiguity (e.g., Lou Williams, Terrence Ross, DeMar DeRozan shifting roles across line-ups) [PAGE 4].

Hop five is the auxiliary sequence-prediction task. With limited labelled examples, a classifier may succeed without understanding movement, so the shared encoder is also trained to predict x̂_{t+1} = F(x1,...,xt), minimizing Euclidean distance to ground truth, beginning after 2 seconds from the start frame [PAGE 5]. The joint objective combines sequence-prediction cost and classification cost with scalar weight w [PAGE 5]. Hop six is “anytime” prediction: because plays require variable setup time and distinguishing features may appear early (HORNS) or late, the RNN emits predictions at any frame, trading accumulated evidence against latency [PAGE 5].

Gray-zone audit. The data filter retains only 1,435 sequences across 11 classes from an original 7,481, discarding transition offense, after-timeout, and in-bound plays; 95 sequences are held as an unseen test set [PAGE 6]. Breakdown regimes are explicit: unless a play breaks down due to time-outs, fouls, or ends prematurely, moving dots alone were sufficient for nearly perfect human classification [PAGE 1]. Cross-season transfer introduces distribution shift: a model trained on 2013-2014 applied directly to 2014-2015 achieves 53.7% top-1 versus 61.9% after fine-tuning on only 109 new examples [PAGE 7]. Thresholding creates a precision-recall singularity: at T=0.7 the RNN yields 90.0% precision but only 59.0% recall on the original season [PAGE 6], meaning withholding low-confidence predictions sacrifices coverage. The joint objective is written as argmax over a summed cost, a notation tension because costs are conventionally minimized [PAGE 5]. These regimes define where the model’s assumptions—stationary player dynamics across time, balanced class batches, sufficient labelled history—cease to hold.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Input sequence and label space [PAGE 3]:
x = (x_1, ..., x_T), y ∈ {1,...,K}, where x_t encodes SportVU player coordinates at time step t and y is the offensive strategy class.

RNN hidden-state recursion [PAGE 3]:
h_t = σ(W_in x_t + U h_{t-1})
The algorithm is stationary across time; only accumulated evidence changes.

Conditional distribution and parameter set [PAGE 3]:
Pr(y | x), θ = {W_in, W_out, b_in, b_out, U}
Training set: {(x^1, y^1), ..., (x^N, y^N)}. LSTM units are employed [PAGE 3].

Player-position embedding [PAGE 4]:
Autoencoder maps each player to a 10-dimensional embedding space from shooting tendencies; position is resolved from coordinates and embedding-space neighbors. Table 1 demonstrates role reassignment across Toronto Raptors line-ups [PAGE 4].

Sequence prediction auxiliary task [PAGE 5]:
x̂_{t+1} = F(x_1, ..., x_t)
Objective: minimize Euclidean distance between prediction and ground truth; sequence prediction starts after 2 seconds from the start frame.

Joint optimization [PAGE 5]:
θ = argmax_θ ( w · Cost_seq + Cost_class )
where w is a scalar weight. Note: written as argmax over costs, which is notationally inverse to standard minimization conventions.

Temporal and physical units [PAGE 2, PAGE 5]:
SportVU sampling rate: 25 frames per second. Figure 2 sequential representation spans 4 seconds at 2.5 frames per second. NBA shot clock: 24 seconds [PAGE 5].

Evaluation metrics [PAGE 6]:
Top-1 accuracy, top-k accuracy, precision/recall at thresholds T = 0.4 and T = 0.7. Base-rate for 11 classes: 13.7% top-1 [PAGE 6].

Performance values [PAGE 6, PAGE 7]:
Original season test set: NN 54.7% top-1; RNN 65.6% top-1, 80.6% top-3; at T=0.7, RNN precision 90.0%, recall 59.0% [PAGE 6]. New season (2014-2015), 327 labelled strategies, 109 training examples: new model 33.6% top-1; transfer 53.7% top-1; fine-tune 61.9% top-1 [PAGE 7].

Breakdown and singularity regimes:
1. Play breakdown due to time-outs, fouls, or premature termination invalidates dot-pattern classification assumptions [PAGE 1].
2. Transition offense is conceptually and technically segregated from half-court strategies and excluded [PAGE 6].
3. Cross-season distribution shift degrades direct transfer; fine-tuning with ~1 month of data (one of three chronological batches) recovers performance [PAGE 7].
4. At T=0.7, high precision coincides with 59.0% recall, establishing a coverage-confidence singularity [PAGE 6].
5. Limited labelled data (95 unseen test sequences; 109 new-season training sequences) creates high-variance regimes for the “new” model [PAGE 6, PAGE 7].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week adaptation traps.

The paper’s intellectual ancestry lies in computer-vision action recognition: Liu, Luo, and Shah (CVPR 2009) on realistic actions “in the wild,” and Kuehne et al. (HMDB, ICCV 2011) on large-scale human-motion video databases [PAGE 1, PAGE 9]. Unlike those approaches, which require elaborate, video-specific computer vision pipelines, this work leverages SportVU coordinates so that playcalls are identifiable from the evolution of player positions alone [PAGE 1]. The deep-learning foundation cites Goodfellow, Courville, and Bengio’s Deep Learning text [PAGE 4, PAGE 9], and the temporal engine explicitly uses Hochreiter and Schmidhuber’s LSTM (Neural Computation 1997) [PAGE 3, PAGE 9]. The genealogical step from static image classification to RNN sequence modeling is the critical innovation: playcalls are dynamic interactions among five players, not static poses [PAGE 1].

Multi-week trap structure emerges in Section 3.2. The experiment simulates early-season scarcity by dividing the first three months of 2014-2015 into three chronological batches, using one for training, one for validation, and one for testing—roughly one month each [PAGE 7]. This creates a temporal causality trap: strategies may persist across seasons barring major coaching changes, but line-ups change, and the representation learned from 2013-2014 must be re-anchored to new personnel. The direct “transfer” model scores 53.7% top-1, slightly worse than on the old dataset, consistent with play evolution; the “fine-tune” model recovers to 61.9% using only 109 examples [PAGE 7]. A multi-week trap therefore exists: if coaching schematics or personnel drift beyond the capacity of the 10-dimensional player embedding to resolve roles, transfer accuracy decays gradually week by week rather than failing abruptly, producing a false sense of stability until a mid-season coaching change or trade triggers abrupt distribution shift. The paper’s “anytime” mechanism partially mitigates this by allowing predictions as evidence accumulates, but it cannot recover from representational obsolescence without new labelled data [PAGE 5, PAGE 7].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock dynamics.

The RNN’s theory of mind is recursive because it must model not only offensive execution but the defensive reactions that alter it. The paper notes that offensive strategies are complex and dynamic, executed with multiple variations as the defense reacts [PAGE 1]. Three nested regimes follow.

Crisis habit regression. Under clock pressure, teams regress to high-frequency base plays; the base-rate classifier simply guesses the most likely class, achieving 13.7% top-1 on the original 11-class test set [PAGE 6]. When the shot clock winds down (24 seconds in the NBA [PAGE 5]), offensive entropy collapses toward habitual sets, and the model’s prior over class labels dominates. The RNN counteracts this by accumulating evidence over time, but in crisis time there is insufficient temporal depth for the hidden state h_t to separate similar plays.

Counter-trap. Because the model shares an encoder between classification and sequence prediction [PAGE 5], it implicitly learns a forward model of player movement. A defensive counter-trap—showing one coverage then rotating—manifests as a divergence between predicted x̂_{t+1} and actual trajectory. The Euclidean sequence-prediction loss detects this divergence, but only if the defensive deviation occurs after the 2-second sequence-prediction start window [PAGE 5]. Early deception (before 2 seconds) is invisible to the auxiliary task, creating a recursive blind spot: the offense can bait the model’s internal forward model during setup, then execute a different play in the final frames.

Clock. The “anytime” prediction framework explicitly recognizes that distinguishing aspects occur at different times: HORNS is evident from initial setup, while other plays resolve only in the last few frames [PAGE 5, Figure 5 caption]. Training history shows that early in learning the model delays prediction to accumulate evidence; as learning progresses it requires less time [PAGE 5]. Clock pressure thus forces a precision-recall trade-off: at T=0.7 precision is 90.0% but recall falls to 59.0%, meaning late-clock crises trigger frequent “don’t-know” outputs [PAGE 6]. The recursive theory of mind must therefore regress to base-rate habits under crisis, defend against counter-traps via sequence prediction, and respect the shot-clock as a hard truncation on evidence accumulation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Weather veto: null. NBA games are indoor, climate-controlled; SportVU operates identically regardless of external weather. No atmospheric term enters the equations; the only temporal unit is frames per second [PAGE 2]. Weather is therefore a standing veto with zero probability of modulation.

Physical layer vetoes. Court geometry and the 24-second shot clock bound the input domain [PAGE 5]. If a play is an after-timeout or in-bound sequence, distinct markers in SportVU raw data segregate it from normal half-court play; the model is vetoed from classifying these as standard offensive strategies [PAGE 6]. Transition offense is excluded because its nature differs drastically from half-court strategies [PAGE 6]. If a play breaks down due to time-outs, fouls, or ends prematurely, the moving-dot assumptions fail and human experts themselves cannot classify reliably [PAGE 1]; this is a hard physical veto.

Biomechanical layer vetoes. Player-position disambiguation depends on a 10-dimensional embedding of shooting tendencies (range, pre-shot movement) [PAGE 4]. If a lineup contains players whose embeddings are too close or whose roles are undefined by the training distribution, position resolution fails and the input ordering collapses into the random SportVU identifier order shown in Figure 1 [PAGE 1]. Screens, cuts, drives, and pick-and-rolls are recognized through coordinate evolution, but if defenders physically disrupt these primitives such that trajectories no longer resemble the training manifold, the LSTM hidden state h_t receives evidence inconsistent with any class, pushing Pr(y|x) below threshold.

Adjudication order. (1) Weather: pass (null veto). (2) Physical: veto timeouts/fouls/premature ends, transition, after-timeout, in-bounds [PAGE 1, PAGE 6]. (3) Biomechanical: veto if embedding cannot resolve positions or if trajectories exit the play manifold [PAGE 4]. (4) Confidence: if max_y Pr(y|x) < T, output “don’t-know”; at T=0.7 this preserves 90.0% precision at 59.0% recall [PAGE 6]. A prediction is emitted only when all layers pass and confidence exceeds threshold.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions.

Scenario 1: Premature play termination. Verifiable condition: whistle (time-out, foul, or shot-clock violation) occurs before the 2-second sequence-prediction start window [PAGE 5, PAGE 1]. Veto: suppress classification; reward signal is null because the ground-truth playcall is undefined or truncated. Prediction: classification accuracy collapses to the base-rate prior (13.7% top-1 on 11 classes [PAGE 6]); if forced, the model will overfit to the initial setup frames (e.g., HORNS) and misclassify late-developing plays. Falsifiable: held-out sequences with whistle events before t=2s should exhibit top-1 accuracy statistically indistinguishable from 0.137.

Scenario 2: Cross-season transfer without fine-tuning under roster churn. Verifiable condition: apply the 2013-2014-trained model to 2014-2015 data with zero new examples [PAGE 7]. Veto: if lineup changes alter the player-embedding neighborhood structure beyond the resolution of the 10D space [PAGE 4], withhold transfer predictions. Prediction: top-1 accuracy remains near 53.7% only if role distributions are stable; if two or more primary ball-handlers swap positional roles, accuracy should drop below the 46.1% gap between transfer (53.7%) and fine-tune (61.9%) [PAGE 7], approaching the “new” model floor of 33.6% [PAGE 7]. Falsifiable: compare transfer accuracy on line-ups with unchanged vs. changed primary initiators.

Scenario 3: Confidence-threshold recall crisis. Verifiable condition: deployment requires recall > 59.0% at T=0.7 [PAGE 6]. Veto: if operational recall requirement exceeds the measured 59.0%, the threshold must be lowered to T=0.4, where recall is 91.8% but precision falls to 72.7% [PAGE 6]. Prediction: at T=0.4, the model will produce 27.3% false-positive play labels among predictions; in a scouting context retrieving examples from 5 games, roughly 1 in 4 retrieved clips will be erroneous (the paper states about 10% erroneous at higher thresholds [PAGE 6]). Falsifiable: operate at T=0.4 on a labeled test set and measure false discovery rate; expect it to exceed the T=0.7 rate by a factor consistent with the precision drop from 90.0% to 72.7%.
</RLVR_COUNTERFACTUAL_VETOES>