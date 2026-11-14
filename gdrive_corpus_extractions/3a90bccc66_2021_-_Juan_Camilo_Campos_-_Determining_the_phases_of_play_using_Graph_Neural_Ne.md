---
source: "2021 - Juan Camilo Campos - Determining the phases of play using Graph Neural Network Embeddings - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2021"
pages: 8
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5305
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about determining phases of play using Graph Neural Network Embeddings (Pass2Vec by Juan Camilo Campos).

I need to follow STRICT INVARIANTS:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the source text provided seems to have page markers? Let me check the text. It has "**1**", "**2**", etc. at the bottom of pages, and the text says "**13**" at the end. But the user said PAGES: 8. The provided text seems to contain pages 1-13 based on the bold numbers, but maybe the user considers it 8 pages? Actually, looking at the text, there are page markers like **1**, **2**, **3**, **4**, **5**, **6**, **7**, **8**, **9**, **10**, **11**, **12**, **13**. But the user said PAGES: 8. This is confusing. I should cite exact [PAGE N] markers where available. The text has page numbers in bold like **1**, **2**, etc. I should use those.

Let me structure the response:

1. <THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words here. Analyze the Pass2Vec architecture, how embeddings capture spatial distribution, graph representation G(V,E,U), relation network edge block + global block, Word2vec skip-gram analogy, negative sampling, categorical cross-entropy, Adam optimizer, logistic regression for maintenance phase, accuracy 0.87, rule-based sequence detection (4 consecutive passes, own half, prob > 0.5). Gray zones: subjective phase definitions, StatsBomb360 on-screen player variability (variable node count), embedding evaluation lacks rigorous systematic test (admitted in Discussion), analogy result imperfect (Fig 9a initial location not right flank), small labeled sample (500 passes, 343 maintenance, 156 non-maintenance), training accuracy only (no test set reported), maintenance definition restricted to own half. Need to connect these hops.

2. <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations, units, page citations, verbatim quotes.
   - Graph definition: G(V, E, U) [Page 5]
   - Node attributes: player location, ball carrier flag, goalkeeper flag
   - Edge attributes: distance, angle, teammate flag
   - Global attributes: location, height, length, angle, body part [Page 5]
   - Word representation: “|Event name| |Event location| |Other attributes|” [Page 5]
   - Field split into 25 rectangles [Page 5]
   - GNN: relation network structure = edge block followed by global block [5], each block MLP with three layers [Page 5]
   - Output: dot product between pass embedding and weighted matrix rows, softmax [Page 5]
   - Training objective: minimize categorical cross-entropy loss using Adam [Page 6]
   - Hyperparameters: Window size 3, negative samples 5, lr 10^-3, batch 1024, epochs 15, min freq 5, embedding size 32 [Page 6, Table 1]
   - Cosine similarity for embedding quality [Page 7]
   - Analogy vector operation: X = vec("woman") - vec("man") + vec("king") [Page 8]
   - Logistic regression: 500 tagged passes, 343 maintenance, 156 non-maintenance, training accuracy 0.87 [Page 10]
   - Rule: at least four consecutive passes same team, all end in first half, probability > 0.5 [Page 10]
   - Data: 540 matches Bundesliga/La Liga 2020/2021, 521,037 passes, 98,584 possessions [Page 6]

3. <RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
   - Word2vec (Mikolov et al. 2013) [Page 2, Reference 2]
   - CBOW and Skip-gram architectures [Page 3]
   - Magdaci (2021) embedding language of football using NLP [Page 2, Reference 3]
   - Stöckl et al. (2021) GCN for defensive performance [Page 3, Reference 4]
   - Battaglia et al. (2018) relational inductive biases [Reference 5]
   - Stats Perform Playing Styles [Reference 1]
   - Multi-week traps: overfitting to single season (2020/2021), dataset shift across leagues (Bundesliga vs La Liga), broadcast image variability (camera FOV), variable player count causing graph size instability, no temporal modeling beyond window size 3 (short-term context only), possession definition dependency.

4. <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
   - This is a bit abstract. Need to interpret in context of football analysis/AI. Crisis habit regression: teams reverting to safe maintenance under pressure. Counter-trap: opponent pressing to force errors in maintenance. Clock: match state/time pressure affecting phase transitions. Model's recursive limitation: specialist labels few examples, model learns specialist's bias, specialist then trusts model, creating feedback loop. Crisis habit regression = possession team regresses to backward passes to goalkeeper (maintenance) under pressure; counter-trap = pressing team forces turnover; clock = late-game game state changes maintenance definition (protecting lead vs chasing goal). The model doesn't encode match clock or score state explicitly (global attributes don't include score/time), so it cannot distinguish maintenance when protecting a lead vs early game.

5. <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
   - Physical: pitch dimensions, gravity on ball flight (height attribute), player velocity/orientation missing (future work [Page 12]).
   - Biomechanical: body part used (right foot vs left foot vs head), pass execution. No player fatigue, injury, sprint speed.
   - Weather: not in data. Broadcast image means camera field-of-view missing (admitted future work [Page 12]), weather/lighting affecting player detection not modeled.
   - Veto proof: The graph representation handles variable player count, but lacks physical constraints (offside line, ball physics), no weather, no biometrics.

6. <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
   - RLVR = Reinforcement Learning via Verifiable Rewards? Or just counterfactual vetoes. Need 3 scenarios.
   - Scenario 1: Variable on-screen player count < minimum (e.g., broadcast cuts off players). Veto: graph node count too low, embedding unreliable. Prediction: cosine similarity false positives/negatives increase; maintenance detection fails when defenders off-screen.
   - Scenario 2: Counter-attack with high transition speed but pass occurs in own half (violates maintenance rule's location constraint but semantically counter-attack). Veto: rule-based sequence filter (4 consecutive passes, own half) misclassifies counter-initiation as maintenance. Prediction: high false positive maintenance labels in transitional phases.
   - Scenario 3: Low possession team (Atletico-style) defends deep then counters; maintenance phase defined as own-half possession but team is actually surrendering territory intentionally. Veto: specialist definition mismatch; embedding similarity captures spatial context but not strategic intent. Prediction: logistic regression trained on specialist labels fails to generalize to different playing styles or match states.
   - Need verifiable + predictions.

Word count check: Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll aim for substantial depth in each.

Also strict: ZERO BETTING LINES. No mention of odds, spreads, etc. The paper mentions Atletico Madrid winning championship, possession, effectiveness. I must not turn this into betting advice.

ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Use real equations from paper: categorical cross-entropy, softmax, dot product, vector analogy. State units: embedding size 32 (dimensionless), learning rate 10^-3, batch size 1024 (samples), epochs 15 (dimensionless count), negative samples 5 (count), window size 3 (actions), cosine similarity [-1,1], probability [0,1], accuracy 0.87 (dimensionless ratio).

Exact singularity/breakdown regimes: When number of on-screen players varies (graph size variable), GNN handles it but if too few players are visible (broadcast occlusion), node attributes incomplete -> breakdown. When pass window size=3, longer-term phase context lost -> breakdown for phases developing over >3 actions. Logistic regression trained on only 500 labeled passes from own half -> breakdown when applied to attacking third or different field zones. Training accuracy only, no test set -> overfitting risk/breakdown in generalization.

Cite exact [PAGE N] markers. The page markers in the text are bold numbers. I'll cite them as [PAGE 5], etc.

Let me draft carefully.

THINK_TRACE (>=400 words):
Start with the core problem: no consensus on phases of play; subjective definitions. Campos proposes tool not model: Pass2Vec embeddings. Multi-hop derivation:
1. Data layer: StatsBomb360, 540 matches, 521,037 passes, 98,584 possessions. Possessions = sentences. Variable on-screen players -> graph needed.
2. Graph layer: G(V,E,U). Nodes = players with location + 2 flags. Edges = distance, angle, teammate flag. Global = pass execution attributes. This is a relational inductive bias.
3. Representation layer: Convert action to word: |Event name| |Event location| (25 rectangles) |Other attributes|. Example: “|Pass| |1,3| |Ground-Medium-Foot-E|”.
4. Model layer: GNN = relation network (edge block + global block), each MLP 3 layers. Output = pass embedding. Dot product with weighted matrix + softmax predicts context words (Skip-gram inspired). Training: negative sampling (5), Adam, categorical cross-entropy, 15 epochs, lr 1e-3, batch 1024, embedding dim 32.
5. Evaluation layer: Cosine similarity nearest neighbors; qualitative Figs 4-7 show clustering by phase (maintenance, build-up, counter-attack initiation). Analogy task (king-man+woman=queen adapted to passes) shows imperfect spatial reconstruction (Fig 9a initial location wrong; Fig 9b better).
6. Application layer: Logistic regression on 500 hand-tagged passes (343 maintenance, 156 non-maintenance), training acc 0.87. Rule: >=4 consecutive passes same team, all end in own half, p>0.5 -> maintenance.

Gray-zone audit: (i) Specialist labels create expert bias; model learns one person's definition, not ground truth. (ii) Only training accuracy reported; no validation/test split, no precision/recall. (iii) Maintenance restricted to own half; ignores midfield/attacking third maintenance. (iv) StatsBomb360 from broadcast image: camera FOV, variable player count, occlusion. (v) Window size 3 captures only immediate context; phases like sustained threat may unfold over longer sequences. (vi) Analogy arithmetic fails spatially (Fig 9a), suggesting vector space doesn't perfectly disentangle direction from formation. (vii) No score, time, or velocity/orientation features, so match-state conditional phases are invisible.

Need to weave this into >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with LaTeX.
- Graph: \( G = (V, E, U) \) [PAGE 5]
- Node attr: \( v_i = (x_i, y_i, \mathbb{1}_{\text{carrier}}, \mathbb{1}_{\text{GK}}) \)
- Edge attr: \( e_{ij} = (d_{ij}, \theta_{ij}, \mathbb{1}_{\text{teammate}}) \)
- Global attr: \( u = (x_{\text{start}}, y_{\text{start}}, h, \ell, \alpha, \text{body part}) \)
- Word: \( w = \texttt{"|Event name| |Event location| |Other attributes|"} \) [PAGE 5]
- Location: 25 rectangles [PAGE 5]
- GNN: edge block \( \phi_e \), global block \( \phi_u \), each MLP \( \text{MLP}: \mathbb{R}^{d_{in}} \to \mathbb{R}^{d_{out}} \) with 3 layers [PAGE 5]
- Prediction: \( \hat{p}(w_c | w) = \text{softmax}(E_w^\top W) \) where \( E_w \) is pass embedding, \( W \) weighted matrix [PAGE 5]
- Loss: \( \mathcal{L} = -\sum \log p(w_c | w) \) categorical cross-entropy, optimized by Adam [PAGE 6]
- Hyperparameters table: window=3, neg=5, lr=\(10^{-3}\), batch=1024, epochs=15, min freq=5, dim=32 [PAGE 6]
- Similarity: \( \text{cos}(a,b) = \frac{a \cdot b}{\|a\|\|b\|} \in [-1,1] \) [PAGE 7]
- Analogy: \( \mathbf{x} = \mathbf{v}(c) - \mathbf{v}(b) + \mathbf{v}(d) \) wait need to match paper. Paper: woman - man + king = queen. For passes: similar to b in same sense as c is to d? Actually Fig 8: What is pass a) similar to pass b) in same sense as pass c) is similar to pass d)? So vector: \( \vec{a} \approx \vec{b} - \vec{d} + \vec{c} \)? Let's be careful. The paper says: "What is the word that is similar to woman in the same sense as king is similar to man?" -> woman - man + king. For passes: pass a similar to pass b in same sense as pass c similar to pass d. That would be \( \vec{a} \approx \vec{b} - \vec{d} + \vec{c} \) if the relationship is b is to d as a is to c? Actually standard analogy: a is to b as c is to d -> a - b + c = d? No, king - man + woman = queen means king is to man as queen is to woman. So vector(king) - vector(man) + vector(woman) = vector(queen). For passes: pass b is to pass d as pass a is to pass c? The text: "What is the pass a) that is similar to the pass b) in the same sense as pass c) is similar to pass d)?" This is ambiguous but likely \( \vec{a} = \vec{b} - \vec{d} + \vec{c} \). I'll cite it verbatim and note the operation.

- Logistic regression: \( P(\text{maintenance} | \mathbf{e}) = \sigma(\mathbf{w}^\top \mathbf{e} + b) \), training set N=500, n_maintenance=343, n_non=156, acc=0.87 [PAGE 10]
- Rule: \( \exists \text{seq}: |P| \ge 4 \land \forall p \in P, \text{team}(p)=t \land \text{end}(p) \in \text{own half} \land P(\text{maint}|p) > 0.5 \Rightarrow \text{maintenance phase} \) [PAGE 10]

Breakdown regimes:
- Graph size singularity: if on-screen players \( |V| < 2 \) or occluded, edge attributes undefined/distance missing.
- Window singularity: phase requiring >3 sequential actions cannot be captured by skip-gram context.
- Data shift: embedding trained on 2020/2021 Bundesliga+La Liga may not transfer to other leagues/seasons without retraining.
- Label scarcity: 500 labeled passes is small; logistic regression decision boundary high variance.

RETROCAUSAL_GENEALOGY:
- Lineage: Word2vec (Mikolov 2013) [PAGE 2], Skip-gram/CBOW [PAGE 3], Magdaci football NLP embeddings [PAGE 2], Stöckl et al. GCN defensive behavior [PAGE 3], Battaglia et al. relational inductive biases [PAGE 5], Stats Perform playing styles [PAGE 1].
- Multi-week traps: Single season 2020/2021; two leagues only; broadcast camera variance week-to-week; no model retraining schedule; specialist labeling fatigue over weeks; concept drift as teams change tactics; maintenance definition static but match state (score, minute) changes optimal phase.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under pressure (crisis), possession team regresses to maintenance (backward passes to GK, safe possession). Model sees embeddings cluster backward passes to GK as maintenance [PAGE 7 Fig 6].
- Counter-trap: Pressing opponent forces turnover in own half; what specialist labels as maintenance may actually be a trap to lure press then counter. Embedding captures spatial distribution but not intent/trap.
- Clock: Match clock and score not in global attributes. Maintenance at 90th minute protecting lead ≠ maintenance at 10th minute building from back. Model lacks temporal state, so it cannot regress habit by game state.
- Recursive loop: Specialist labels 500 passes -> model trained -> model suggests similar passes -> specialist labels those -> confirmation bias narrows phase definition. No counterfactual "what if the specialist is wrong" module.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: pitch geometry, gravity (pass height), ball length/angle are global attrs. Missing: player velocity/orientation [PAGE 12 future work]. Weather not captured.
- Biomechanical: body part (foot/head), ground vs high pass. Missing: fatigue, sprint speed, injury status.
- Weather/Environment: broadcast image quality, rain/fog affecting player detection; camera field-of-view missing [PAGE 12].
- Veto proof: The GNN handles variable |V| but cannot veto physically impossible passes (e.g., pass length > human kicking range) because no physics layer. It cannot veto offside because offside line not a graph attribute. It cannot veto weather-induced visibility loss.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable veto scenarios + predictions.
Scenario 1: Occlusion/Broadcast veto. If fewer than, say, 4 on-screen players are visible during a defensive turnover in the final third, the graph edge set is incomplete. Veto: reject embedding generation or flag low confidence. Prediction: maintenance detection recall drops sharply for sequences with camera pans/cuts; nearest-neighbor cosine similarity will pair passes with dissimilar defensive pressure because missing defenders alter edge distance distribution.
Scenario 2: Context-window veto. If a phase of play (e.g., sustained-threat) unfolds over 6+ consecutive passes but the model window size is 3, the skip-gram objective only sees local triads. Veto: do not assign phase label when sequence length > window and no global phase state is tracked. Prediction: false negatives for long build-up sequences; the model will mislabel the final pass of a 7-pass buildup as isolated maintenance because earlier context is dropped.
Scenario 3: Match-state veto. Since global attributes exclude score, minute, and red cards, the same spatial embedding (e.g., backward pass to GK) is labeled maintenance regardless of game state. Veto: suppress maintenance classification when score differential >1 and minute >75 unless possession duration > threshold. Prediction: in late-game leading scenarios, the model will over-label safe possession as maintenance even when the specialist's intent is time-wasting, not buildup; conversely, in trailing scenarios, it will under-label build-up in own half as maintenance because the spatial pattern matches safe play but the strategic intent is desperation.

Need to ensure no betting lines. The Atletico mention is about playing style, not betting. Fine.

Word count: I need to make sure total >= 1000 words. Let's estimate:
THINK_TRACE: ~500 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~400 words.
RETROCAUSAL_GENEALOGY: ~250 words.
RECURSIVE_THEORY_OF_MIND: ~250 words.
CROSS_LAYER_VETO_ADJUDICATION: ~200 words.
RLVR_COUNTERFACTUAL_VETOES: ~250 words.
Total ~1850. Good.

Need to use exact XML section tags. No markdown outside? I can put content inside tags. Should be fine.

Citations: Use [PAGE N] exactly as in text. The page numbers visible: 1,2,3,4,5,6,7,8,9,10,11,12,13. I'll reference accordingly.

Let's write.

Double-check no toy equations. All equations are from paper or standard math (cosine similarity, softmax, logistic regression). No invented Force/Fatigue ratios.

Zero betting lines: confirmed.

Proceed to final output.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central derivation is a multi-hop abstraction chain that converts raw event-stream football data into phase-of-play labels without ever defining the phases ex ante. Hop one begins at the data layer: StatsBomb360 event data for 540 Bundesliga and La Liga matches from the 2020/2021 season, yielding 521,037 passes and 98,584 ball possessions [PAGE 6]. Because a possession is treated as a sentence and each on-ball action as a word, the variable number of visible players per event makes fixed-width feature vectors impossible; the paper therefore adopts a graph representation G(V, E, U) [PAGE 5]. Hop two constructs the graph: nodes are players with location, ball-carrier flag, and goalkeeper flag; edges carry distance, angle, and a teammate flag; global attributes encode pass execution—location, height, length, angle, and body part [PAGE 5]. This is a direct application of relational inductive biases [PAGE 5], but it contains a gray zone: the graph is built only from on-screen players captured by broadcast cameras, so occlusions, camera cuts, and varying field-of-view silently change |V| between actions.

Hop three translates each action into a discrete “word” using the template “|Event name| |Event location| |Other attributes|,” where the field is partitioned into 25 rectangles [PAGE 5]. An example is “|Pass| |1,3| |Ground-Medium-Foot-E|” [PAGE 5]. Hop four trains a Graph Neural Network—specifically an edge block followed by a global block, each a three-layer MLP [PAGE 5]—to produce a 32-dimensional pass embedding. The architecture is Skip-gram inspired: given a target pass, the model predicts surrounding actions within a window size of 3, using 5 negative samples, a learning rate of 10^-3, batch size 1024, and 15 epochs, minimizing categorical cross-entropy with Adam [PAGE 6, Table 1]. Hop five evaluates embeddings via cosine similarity nearest neighbors and a pass analogy task adapted from Word2vec (king − man + woman = queen) [PAGE 8]. The analogy result is imperfect: the top retrieved pass places the initial location outside the expected right flank, though the second-nearest result matches the expected spatial pattern [PAGE 9], revealing that the vector space does not perfectly disentangle pass direction from player formation.

Hop six applies the embeddings to phase detection. A football specialist hand-tags approximately 500 passes ending in the team’s own half: 343 maintenance, 156 non-maintenance [PAGE 10]. A logistic regression reaches a training accuracy of 0.87 [PAGE 10]. A rule then flags maintenance when at least four consecutive passes by the same team all end in the own half and each carries a predicted probability above 0.5 [PAGE 10].

Gray-zone audit. (i) Label scarcity and expert bias: 500 tagged passes from one specialist’s definition creates high variance and no test-set accuracy, so the 0.87 figure cannot be trusted as generalization error [PAGE 10]. (ii) Spatial restriction: maintenance is defined only within the own half [PAGE 10], excluding midfield and attacking-third possession phases that specialists might also call maintenance. (iii) Temporal myopia: the window size of 3 captures only immediate context [PAGE 6], so phases that develop over longer sequences (sustained threat, prolonged build-up) are invisible to the embedding objective. (iv) Sensor fragility: StatsBomb360 derives player positions from broadcast images; variable camera field-of-view and player occlusion are acknowledged as limitations [PAGE 12]. (v) Missing state: no score, match clock, red-card state, or player velocity/orientation is included [PAGE 12], so the model cannot distinguish maintenance while protecting a lead in the 88th minute from maintenance while building from the back in the 10th minute. (vi) Analogy breakdown: Fig. 9a shows the vector arithmetic retrieves a pass whose initial location violates the expected constraint [PAGE 9], meaning the embedding space mixes directional and configurational semantics.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations extracted from the source, with page citations.

Graph definition (directed graph) [PAGE 5]:
\[
G = (V, E, U)
\]
where V = nodes (players), E = edges (player relationships), U = global attributes.

Node attributes [PAGE 5]:
\[
v_i = (x_i, y_i,\ \mathbb{1}_{\text{carrier}},\ \mathbb{1}_{\text{goalkeeper}})
\]
Units: location in pitch coordinates (meters relative to field origin), flags are binary dimensionless.

Edge attributes [PAGE 5]:
\[
e_{ij} = (d_{ij},\ \theta_{ij},\ \mathbb{1}_{\text{teammate}})
\]
where \(d_{ij}\) is Euclidean distance in meters and \(\theta_{ij}\) is the angle in radians between player vectors.

Global attributes (pass execution) [PAGE 5]:
\[
u = (x_{\text{start}}, y_{\text{start}}, h,\ \ell,\ \alpha,\ \text{body part})
\]
Units: start location in meters, height \(h\) categorical (ground/high), length \(\ell\) in meters, angle \(\alpha\) in radians, body part categorical.

Action-to-word representation [PAGE 5]:
\[
w = \texttt{"|Event name| }\ |\text{Event location}|\ |\text{Other attributes}|"}
\]
Event location quantized into 25 rectangles [PAGE 5]. Example verbatim: “|Pass| |1,3| |Ground-Medium-Foot-E|” [PAGE 5].

GNN architecture [PAGE 5]: relation network = edge block followed by global block; each block is a multilayer perceptron with three layers. Let \(\phi_e: \mathbb{R}^{d_e} \to \mathbb{R}^{d_h}\) and \(\phi_u: \mathbb{R}^{d_u} \to \mathbb{R}^{32}\) be the edge and global MLPs. The output of the global block is the 32-dimensional pass embedding \(\mathbf{e} \in \mathbb{R}^{32}\).

Prediction head [PAGE 5]: dot product between pass embedding \(\mathbf{e}\) and each row of weighted matrix \(W\), followed by softmax:
\[
\hat{p}(w_c \mid w) = \text{softmax}(\mathbf{e}^\top W)_c
\]
Dimensionless probability in [0,1].

Training objective [PAGE 6]: minimize categorical cross-entropy using Adam:
\[
\mathcal{L} = -\sum_{(w, w_c)} \log \hat{p}(w_c \mid w)
\]
with negative sampling (5 negative samples per positive context) [PAGE 6].

Hyperparameters [PAGE 6, Table 1]: window size = 3 actions; number of negative samples = 5; initial learning rate = \(10^{-3}\); batch size = 1024 samples; number of epochs = 15; minimum word frequency = 5; embedding size = 32 dimensions.

Embedding similarity [PAGE 7]: cosine similarity
\[
\text{cos}(\mathbf{a}, \mathbf{b}) = \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{a}\| \|\mathbf{b}\|} \in [-1, 1]
\]
used to retrieve nearest-neighbor passes.

Word2vec analogy adapted to passes [PAGE 8]: verbatim vector form “vec(‘woman’) − vec(‘man’) + vec(‘king’)”. For passes, the relation “a is similar to b in the same sense as c is similar to d” implies an offset vector of the form \(\mathbf{x} \approx \mathbf{v}(b) - \mathbf{v}(d) + \mathbf{v}(c)\) [PAGE 8].

Logistic regression classifier [PAGE 10]: training set N = 500 tagged passes, with 343 maintenance and 156 non-maintenance; reported training accuracy = 0.87 (dimensionless). Model:
\[
P(\text{maintenance} \mid \mathbf{e}) = \sigma(\mathbf{w}^\top \mathbf{e} + b), \quad \sigma(z) = \frac{1}{1 + e^{-z}}
\]

Decision rule for phase identification [PAGE 10]: a sequence is classified as maintenance if
\[
|P| \ge 4 \;\land\; \forall p \in P:\; \text{team}(p) = t \;\land\; \text{end}(p) \in \text{own half} \;\land\; P(\text{maintenance} \mid p) > 0.5
\]
Probability threshold is dimensionless in (0,1).

Exact singularity / breakdown regimes:
1. Graph size singularity: if broadcast occlusion reduces visible on-screen players below the minimum needed to define edges, distance and angle attributes are undefined or noisy; the GNN’s permutation invariance does not compensate for missing nodes [PAGE 5, PAGE 12].
2. Window singularity: phases requiring more than 3 sequential actions for contextual discrimination cannot be represented by the Skip-gram-style objective [PAGE 6].
3. Data-scarcity singularity: 500 labeled passes is insufficient to estimate a stable logistic-regression boundary across all pitch zones; no test set is reported [PAGE 10].
4. Distribution-shift singularity: embeddings trained on 2020/2021 Bundesliga and La Liga only may not transfer to other leagues, seasons, or camera setups without retraining [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of Pass2Vec traces through four distinct methodological waves. First is distributional semantics from NLP: Mikolov et al. (2013) Word2vec, with CBOW and Skip-gram architectures, which posits that words appearing in similar contexts have similar embeddings [PAGE 2, PAGE 3]. Second is football NLP: Magdaci (2021) embedded football actions using Word2vec on public StatsBomb data, but that earlier work lacked player-location information at event time [PAGE 2]. Third is graph representation learning: Stöckl et al. (2021) used a Graph Convolutional Network to model defensive behavior in soccer, showing GNNs extend beyond defense to other tasks [PAGE 3, Reference 4]. Fourth is relational inductive bias: Battaglia et al. (2018) formalized edge blocks and global blocks in graph networks [PAGE 5, Reference 5]. Campos unifies these by treating ball possessions as sentences, passes as words, and the freeze-frame spatial distribution as graph structure [PAGE 3, PAGE 6].

The domain concept of phases of play itself derives from specialist taxonomies—maintenance, build-up, sustained-threat, counter-attack—cited to Stats Perform Playing Styles [PAGE 1, Reference 1]. The paper explicitly rejects consensus definitions, noting that counter-attack depends on subjective “transition speed” and “defensive-shape recovery” [PAGE 1]. Therefore the genealogy is not from a ground-truth phase label upward, but from an unsupervised embedding space downward to a specialist-facing labeling tool.

Multi-week traps embedded in this lineage include: (a) single-season, two-league data (2020/2021 Bundesliga and La Liga) creates temporal concept drift; a model deployed in week 3 of a new season faces different tactical trends, press intensities, and broadcast camera calibrations [PAGE 6]. (b) The StatsBomb360 freeze-frame data comes from broadcast images, so camera field-of-view and player occlusion vary week to week and stadium to stadium, injecting non-stationarity into node counts and edge distances [PAGE 5, PAGE 12]. (c) The specialist labeling interface assumes stable expert definitions across weeks, but a coach’s notion of “maintenance” changes with score state, red cards, and fixture importance—none of which are in the global attributes [PAGE 10, PAGE 12]. (d) Because the embeddings are trained unsupervised on all passes but evaluated only via qualitative nearest-neighbor inspection and a small labeled maintenance set, there is no longitudinal audit of embedding drift across matchweeks [PAGE 7, PAGE 10].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The paper sets up a recursive specialist-model loop with three interacting pressures: crisis habit regression, counter-trap, and clock.

Crisis habit regression: under pressure, possession teams regress to safe maintenance behaviors—backward passes to the goalkeeper, short lateral circulation inside the own half [PAGE 7, Figure 6]. The embedding space clusters these passes together because their spatial distributions (defensive shape settled, ball carrier near goal) are similar [PAGE 7]. The danger is that the model learns the crisis habit as the canonical definition of maintenance, then reinforces it: the specialist labels backward passes as maintenance, the model retrieves similar backward passes, and the specialist labels those too, narrowing the phase definition into a self-confirming loop [PAGE 10].

Counter-trap: an opponent may deliberately allow possession in the own half to lure the pressing team forward, then spring a counter-attack after a forced turnover. Spatially, the pre-turnover passes resemble maintenance (safe, own half, settled defense), but strategically they are bait. The Pass2Vec embedding captures player locations and pass geometry, not intent or trap design [PAGE 5]. Therefore a maintenance classifier trained on spatial embeddings cannot distinguish genuine possession security from a tactical trap, and the rule requiring four consecutive passes in the own half may mislabel a trap sequence as maintenance [PAGE 10].

Clock: match time and score are absent from global attributes [PAGE 5, PAGE 12]. Maintenance at minute 10 while building from the back is strategically different from maintenance at minute 88 while protecting a one-goal lead, yet the embedding and logistic regression treat identical spatial patterns identically [PAGE 10]. Without clock and score state, the model cannot regress crisis habits conditionally on game state; it applies the same maintenance prior regardless of whether the team is chasing a goal or running down the clock.

Recursive theory of mind failure: the specialist believes the model discovers phases, but the model only discovers what the specialist labels [PAGE 1, PAGE 10]. There is no counterfactual module asking “what if the specialist’s maintenance label is wrong under this match state?” Thus the recursion converges to the specialist’s static, context-free definition rather than to an adaptive, game-state-aware phase ontology.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the graph encodes pass length, height, angle, and start location, which implicitly respect pitch geometry and ballistics [PAGE 5]. However, there is no physics engine to veto impossible passes (e.g., length exceeding human kicking range, height inconsistent with body part), no offside line attribute, and no gravity or drag model. Player velocity and orientation are explicitly listed as future improvements, meaning the current model cannot veto physically inconsistent player arrangements [PAGE 12].

Biomechanical layer: body part used (right foot, left foot, head) and ground vs. high pass are global attributes [PAGE 5]. Missing are fatigue, sprint speed, acceleration, injury status, and muscle load. A pass executed by a fatigued defender under pressure may have the same spatial embedding as one by a rested player, but the biomechanical risk and phase interpretation differ. No veto exists for biomechanical impossibility or fatigue-induced error.

Weather and environmental layer: the data originates from broadcast images, so rain, fog, stadium lighting, and camera field-of-view directly affect whether on-screen players are detected [PAGE 5, PAGE 12]. Weather is not an attribute, and camera field-of-view is acknowledged as missing global information [PAGE 12]. Therefore a heavy-rain match with reduced visibility and camera occlusion will produce sparser graphs and degraded embeddings, but the model has no weather-aware veto to suppress low-confidence phase calls.

Veto adjudication outcome: the GNN’s permutation invariance handles variable |V|, but it cannot veto structurally incomplete graphs caused by broadcast cuts, nor physically impossible passes, nor weather-corrupted detections. The only partial veto is the minimum word frequency of 5 during training, which excludes rare action words from the vocabulary but does not protect inference-time predictions from sensor failure [PAGE 6].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-via-verifiable-rewards (RLVR) counterfactual veto scenarios with testable predictions:

Scenario 1 — Broadcast occlusion veto. If a defensive turnover in the final third is captured with fewer than four visible on-screen players (camera cut or panic pan), the edge set E is incomplete and distance/angle attributes are missing or noisy. Veto: reject embedding generation or assign an “occluded” flag and exclude from phase classification. Verification: compare maintenance-phase recall on sequences with full camera coverage versus sequences containing known broadcast cuts. Prediction: recall for maintenance detection drops significantly on occluded sequences, and nearest-neighbor cosine similarity will pair passes with dissimilar defensive pressure because missing defenders systematically shrink edge-distance distributions [PAGE 5, PAGE 12].

Scenario 2 — Context-window veto. If a build-up phase unfolds over six or more consecutive passes but the Skip-gram window is fixed at three, the model never observes the full phase context. Veto: do not assign a phase label to any pass in a sequence longer than the window unless a separate temporal aggregation layer is added. Verification: hold out all build-up sequences longer than five passes and measure classification accuracy. Prediction: false negatives for long build-up sequences will rise; the model will mislabel the terminal pass of a seven-pass build-up as isolated maintenance because earlier context is outside the window [PAGE 6].

Scenario 3 — Match-state veto. Since score, minute, and red-card state are not global attributes, the same spatial embedding (e.g., a backward pass to the goalkeeper) receives the same maintenance probability at minute 10 and minute 88. Veto: suppress maintenance classification when the score differential exceeds one goal and the clock is past the 75th minute unless possession duration exceeds a threshold, on the grounds that late-game safe possession is time management, not buildup maintenance. Verification: apply the trained logistic regression to late-game leading and trailing scenarios and compare against specialist labels conditioned on match state. Prediction: the model will over-label safe possession as maintenance when leading late (false positives for time-wasting) and under-label own-half build-up when trailing late (false negatives for desperation play), because spatial pattern alone cannot encode strategic intent under clock pressure [PAGE 10, PAGE 12].
</RLVR_COUNTERFACTUAL_VETOES>