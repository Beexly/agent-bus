---
source: "undated - Detection of tactical patterns using semi-supervised graph neural networks - Anzer et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/undated"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6645
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on a specific source paper about detecting tactical patterns using semi-supervised graph neural networks (Anzer et al.). I need to produce the exact XML sections with >= 1000 words total depth, following strict invariants:

1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations like Force/Fatigue. Need formal math.

Let me structure this carefully.

The source is 18 pages (the provided markdown shows pages 1-15, but user says PAGES: 18; I should cite page markers from the provided text. The text has page numbers at bottom: 1, 2, 3... up to 15 visible. I will cite [PAGE N] based on visible page numbers in the text. The user says PAGES: 18 but provided text seems to end at page 15. I should cite only what's visible or reference page numbers as they appear. Actually the markdown shows page footers: 1, 2, 3... 15. I'll cite those exact numbers. If I need to reference beyond, I can say [PAGE 15] etc. But I should stick to visible page markers: [PAGE 1] through [PAGE 15] as they appear in the text.

Let's extract key facts:

- Paper: "Detection of tactical patterns using semi-supervised graph neural networks" by Gabriel Anzer, Pascal Bauer, Ulf Brefeld, Dennis Fassmeyer.
- Affiliations: Hertha BSC Berlin, Tübingen University, DFB-Akademie, Leuphana University Lüneburg.
- Challenge (I): Supervised learning needs many manually annotated situations. Pairs of situations and labels. Function approximator. [PAGE 1]
- Challenge (II): Permutation problem in multi-agent scenarios. Agnostic to ordering of players. In-/equivariant w.r.t. ordering. Existing approaches oversimplify by breaking high-dimensional spatiotemporal input into lower-dimensional hand-crafted features. [PAGE 1]
- Challenge (III): Number of players involved unknown beforehand, varies. Power set π(X) size 2^|X|. Soccer has 2^22 = 4,194,304 subsets per frame, infeasible. Basketball 2^10 = 1,024 tractable. [PAGE 1, footnote 1]
- Requirements: (I) little manual effort, (II) in-/equivariant to player ordering, (III) identify relevant subgroups automatically. [PAGE 1]
- Semi-supervised learning: labeled scarce, unlabeled abundant. GNNs capture equivariance and subgroups. [PAGE 1]
- Proposed: semi-supervised sequential variational autoencoder (VA) for detecting tactical patterns on team-, group-, player-levels. GNN remedies permutation problems, focuses attention on arbitrary subgroups including opponents. Sequential and order equivariant generalization of semi-supervised VAEs [16]-[18], or semi-supervised extension of [19]. [PAGE 1-2]
- Tasks: overlapping runs (2 attackers vs 1 defender), chances without a shot. [PAGE 2]
- Data: 14 matches of tracking and event data of German National team played in 2021, including four at European Championship. Tracking data Chyronhego TRACAB System Generation 5, 25 fps. Event data Sportec Solutions AG. Synchronized per Anzer et al [21]. [PAGE 2]
- Overlapping run definition: separated 2v1 situation, one attacker in possession dribbling toward defender, second attacker runs past at high speed toward opposing goal line, creates new passing option. [PAGE 2]
- Labeling: professional match analyst hand-labeled all overlapping run situations (32 total) of four matches. Both overlapping and overlapped player annotated, only former used as input. Two matches independently labeled by second analyst from Bundesliga club. Inter-annotator agreement: 22 out of 26 scenes = 84.61%. [PAGE 2, PAGE 6]
- Preprocessing: align manual timestamps to tracking frames. Context window around identified frame. Expert annotations denote start, additionally annotate next 10 frames. Tracking data split into chunks. Sliding window length 50 with 50% overlap for unsupervised. Supervised: positive sequences with contextual window around active label timestep, random negative samples same size. Trajectories centered and normalized to [-1,1] in x and y. Converted to velocity by subtracting consecutive coordinates. [PAGE 3]
- Method: Kingma et al [18] M2 model. VAEs parametrize generative model (encoder) and variational distribution (decoder), reconstruct input via low-dimensional bottleneck z. M2 integrates discrete label y into data generation alongside continuous z. Objective divided into supervised and unsupervised. Unlabeled: label treated as unobserved latent variable. Inference for labels. Variational distribution on y used for classifying new data. [PAGE 4]
- Sequential: VRNN framework Chung et al [18] (note: citation says [18] but likely [18] in paper refers to Chung? Actually text says "VRNN framework proposed by Chung et al. [18]" but earlier Kingma et al [18] too—seems like citation numbering quirk in source. I'll cite as written). VRNN = VAE at each timestep conditioned on previous RNN hidden state. SequentialM2 = VRNN + M2. [PAGE 4]
- RNN hidden state h_{t-1} encodes selective summary of previous time steps and latent variables. Used as additional functional input for encoding/decoding. Training criterion = M2 objective summed over each timestep. [PAGE 4]
- Multi-agent: GAT [28] integrated. Nodes = players. Aggregation permutation invariant (mean/sum). Attention assigns weights to neighborhood nodes. Multi-head attention. k-nearest neighbor approach to obviate direct influence of distant players (Figure 2). Stacking GNN layers increases receptive field. Skip connections from Xu et al [25]: final feature representation aggregated from all node embeddings of previous layers. [PAGE 5]
- At each timestep, GNN updates recurrent player states considering neighborhood info. Hidden states serve as input to all encoding/decoding modules. [PAGE 5]
- Empirical Setup: 4 distinct soccer games from German national team. Two concatenated for training, one for model selection, one for testing. Each game ~140,000 timesteps. x/y coordinates of players. Per-match average of 8 manually provided overlapping situations and 3 chance without shot situations. Parameters optimized and saved when weight config improves best AUC on validation game. Results on test game after 100 epochs. PyTorch [29]. [PAGE 6]
- Learning Tasks: Overlapping runs. 32 overlapping runs from four matches tagged manually, including info of two players. Two matches labeled independently by second expert, 22 out of 26 scenes, pairwise inter-annotator agreement 84.61%. [PAGE 6]
- Second task: detecting individual patterns using chance without shot event from event data. [PAGE 6]
- Metrics: AUC aggregates TP/FP for thresholds. Issues: labels only for individual timestamps not broad sequences; detecting unlabeled event couple frames off unproblematic. Highly unbalanced label distribution may make AUC overly optimistic. Also report F1-score on test set for contiguous game sections. Components per [17], ground on probability estimates for frames. Model outputs agent probabilities; test game probabilities = max probability across agent dimension for each timestep. [PAGE 6]
- Baselines: DetNet fully supervised sequential baseline. RNN logic + GNN. Binary cross-entropy loss on randomly sampled segments length 50. Rule-based detection by professional match-analysts. Conditions: ball possession distance < 2m, offensive third > 17.5m in opposing half, outside lane distance to vertical midline > 17m. Teammate passed by ball possessor on side of closest sideline: two consecutive frames t and t+1 where overlapping player passed behind ball possessing player in vertical direction with speed > 10 km/h. Context +/- two seconds. Compute F1. [PAGE 7]
- Table 1 results:
  - Overlapping run: DetNet AUC 0.62, F1 -; Rule-based AUC -, F1 0.31; SequentialM2 AUC 0.93, F1 0.4.
  - Chance without shot: DetNet AUC 0.69, F1 -; SequentialM2 AUC 0.98, F1 0.37. [PAGE 7]
- Figure 3: TP example for agent label “chance without shot”. ~7 seconds excerpt from validation game. Red vertical line ground-truth. Blue vertical line probability amplitude. Snapshots for blue (left) and red (right). [PAGE 8]
- Practical Application: Figure 4 excerpt of tactical match report. Overlapping runs plotted at location, playing direction normalized. Jersey numbers, color indicates received pass (green) or not (red). Percentage near center compares number per side with historical team average. Timecodes in Hudl Sportscode XML. [PAGE 9]
- Figure 4: Opening match Group F Euro 2021 in Munich. Gosens (20) left German side and Pavard (4) right French side overlapped twice but never received ball. French higher diversity, four different players on left attacking side. Germany two overlapping runs right side with Müller (25) and Ginter (4) receiving ball. German team conducted 23% less than typical. [PAGE 9]
- Table 2: Frequency of overlapping runs for German National Team Season 2021/2022. Matrix rows = players performing, columns = who overlapped most. Sané, Havertz, Müller overlapped frequently. Pairing Sané and Ginter creates many. Defensive wingbacks Gosens, Baku usually overlapping runners. Kimmich involved 8 times overlapping, 6 times overlapped. [PAGE 10]
- Player recruitment: wingback with strong offensive drive, frequency of supporting winger through overlapping runs as indicator. Augment with pitch control, xG [21]. [PAGE 10]
- Conclusion: semi-supervised GNN for pattern detection. Works with few labeled points, outperforms fully supervised. Flexibility granularity, reduced labeling effort. Future: new patterns, other team sports like basketball. [PAGE 11]
- Appendix: Modeling Movement Patterns. Validate additional functionality by modeling future agent behavior. Public basketball dataset STATS SportVU, 2016 NBA regular season, >1200 games. Game segment 50 timesteps at 5 fps, 11 agents (10 players + ball). Preprocessed multi-agent trajectories. Weakly supervised: location-based goals, grid macro-areas, stationary points below speed threshold. SequentialM2 maximizes supervised part where supervision = inferred long-term grid locations. [PAGE 14]
- Table 3: Mean L2-error, Final L2-error. Prediction interval 40 and 30 timesteps, observation/burn-in 10 and 20. SequentialM2 exceeds SOTA nearly all scenarios. Defensive lower complexity. [PAGE 14]
- Figure 5: offensive rollout, observe 10 timesteps predict 40. [PAGE 15]

Now I need to write the six sections. Must be >= 1000 words total. THINK_TRACE must be >=400 words alone.

I need formal LaTeX equations. I should derive the SequentialM2 objective formally, not invent fake ratios. I can write the VAE ELBO, M2 objective, VRNN extension, GNN message passing, attention coefficients, etc. These are formal equations from the paper's described methodology, not toy ratios. I must be careful not to invent fake ratios like Force/Fatigue. Using standard equations from the paper (ELBO, cross-entropy, AUC, F1) is fine.

Units: fps (25 Hz), frames, meters (pitch dimensions implied 17.5m, 17m, 2m), km/h (10 km/h), seconds, probability (dimensionless [0,1]), AUC (dimensionless), F1 (dimensionless), L2-error (pixels or normalized coordinate units, but paper doesn't specify units for L2; I'll say normalized coordinate units or arbitrary spatial units). Timesteps. Epochs.

Breakdown regimes: singularity when |X|=22 leading to 2^22 subsets (combinatorial explosion). k-NN graph oversmoothing if depth too high? They mention k-NN alleviates oversmoothing. Breakdown when label scarcity extreme? Semi-supervised assumption breaks if unlabeled distribution differs (covariate shift). RNN vanishing gradients for long sequences? 140,000 timesteps per game but chunks of 50. The context window +/- 2 seconds = 50 frames at 25 fps. Sliding window length 50 with 50% overlap = 25 frame stride.

I need to cite exact [PAGE N] markers and verbatim quotes. Since I'm an AI, I should quote from the provided text and cite page numbers as they appear. The page numbers in the text are at the bottom of each page section. I'll reference them.

Structure:

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit. >=400 words.
Discuss:
- Permutation invariance and power set combinatorial explosion (2^22 = 4,194,304).
- Why hand-crafted features fail (dimensionality collapse).
- Semi-supervised VAE (M2) objective decomposition.
- Sequential extension via VRNN: hidden state h_{t-1} as conditioning.
- GNN multi-agent: GAT attention, k-NN, receptive field growth with depth, skip connections.
- Labeling protocol: 32 overlapping runs, 84.61% inter-annotator agreement, context window +10 frames, normalization [-1,1], velocity conversion.
- Evaluation asymmetry: AUC optimism under class imbalance; F1 on contiguous sections; max over agent dimension.
- Baselines: DetNet cross-entropy, rule-based speed threshold 10 km/h, spatial zones (17.5m, 17m, 2m).
- Gray zones: small sample (4 games, 140k timesteps each but only ~8 overlapping runs per match average), expert annotation ambiguity, synchronization video clock to tracking frame, rule-based baseline F1 0.31 vs SequentialM2 0.40 (modest absolute gain despite large AUC gap), chance without shot F1 0.37. The gap between AUC and F1 suggests threshold sensitivity.
- Breakdown regimes: combinatorial subset explosion at N=22; graph oversmoothing if k-NN too small or depth insufficient; non-stationarity across opponents; frame-rate mismatch 25 fps tracking vs video clock labels.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, breakdown.
Write equations:
- Power set size: |π(X)| = 2^{|X|}; for soccer |X|=22 → 4,194,304 subsets/frame [PAGE 1].
- VAE ELBO: log p(x) >= E_{q(z|x)}[log p(x|z)] - KL(q(z|x)||p(z)). Bottleneck z ∈ R^d.
- M2 semi-supervised objective: J = J_sup + J_unsup. For labeled (x,y): reconstruction + classification regularization. For unlabeled: y latent, infer q(y|x).
- VRNN/SequentialM2: at each timestep t, h_t = RNN(h_{t-1}, x_t, z_t, y_t). Objective sum over t: L = Σ_t L_M2(x_t, y_t | h_{t-1}).
- GNN message passing: m_{i→t}^{(l)} = Σ_{j∈N(i)} α_{ij}^{(l)} W^{(l)} h_j^{(l-1)}. Attention α via single-layer NN across node pairs, multi-head concatenation. k-NN adjacency A_{ij} = 1 if j ∈ k-NN(i).
- Skip connection: H^{(final)} = ⊕_{l=0}^{L} H^{(l)} (Xu et al jumping knowledge).
- Preprocessing: x'_t = (x_t - μ)/σ scaled to [-1,1]; v_t = x_t - x_{t-1}. Units: normalized pitch coordinates (dimensionless), velocity in normalized coordinate units per frame (or convert: 25 fps, 10 km/h ≈ 2.78 m/s → 0.111 m/frame).
- Metrics: AUC = ∫ TPR(FPR^{-1}(u)) du. F1 = 2PR/(P+R). Test probability p_t = max_i p_t^{(i)} over agent dimension.
- Rule-based conditions: d(player,ball) < 2 m; offensive third x > 17.5 m; outside lane |y| > 17 m; speed > 10 km/h; context ±2 s = ±50 frames at 25 fps.
- Table 1 values: SequentialM2 overlapping AUC 0.93, F1 0.40; chance AUC 0.98, F1 0.37; DetNet AUC 0.62/0.69; Rule-based F1 0.31.
- Inter-annotator: 22/26 = 0.8461.
- Training: 2 games train, 1 validation, 1 test; ~140,000 timesteps/game; 100 epochs; PyTorch.
- Breakdown: combinatorial singularity at N=22; class imbalance (8 overlapping runs per match avg over ~140k timesteps → base rate ~5.7e-5); context window ambiguity; basketball appendix dataset 5 fps, 11 agents.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage & multi-week traps.
Lineage:
- Kempe et al. 2015 tactical patterns basketball [1]; Grunz et al. 2012 self-organizing maps soccer [3]; Wang et al. 2015 topic model soccer [2].
- Bauer & Anzer counterpressing [4], [5]; Anzer et al. goals origins [8]; Hobbs et al. transitions [9]; Power et al. set-pieces [10]; Shaw & Gopaladesikan corner kicks [11].
- Fassmeyer et al. 2021 automatic labeling [17], team patterns, counterattacks [9].
- Kingma et al. 2014 semi-supervised VAEs [16], [22]; Rezende et al. 2014 stochastic backprop [23]; Chung et al. 2015 VRNN [18]; Kipf et al. 2018 neural relational inference [26]; Xu et al. 2018 jumping knowledge [25]; Veličković et al. 2018 GAT [28].
- Trajectory forecasting: STGAT [30], Social-Ways [31], Weak-Supervision [33], DAG-Net [32], C-VAE [34].
Multi-week traps:
- Label decay: expert annotations from video footage clock need synchronization; over weeks, drift in clock alignment degrades labels.
- Inter-annotator agreement 84.61% means 15.39% label noise persists across multi-week labeling campaigns; small N=32 limits statistical power.
- Opponent analysis over a season (Table 2 season 2021/2022) risks non-stationarity: player roles change (Kimmich 3 matches as defensive back, rest central defender), so role-based priors stale within weeks.
- Rule-based detectors brittle to tactical evolution: 10 km/h threshold and fixed spatial zones (17.5m, 17m) may fail as defensive lines shift over a multi-week tournament.
- Unlabeled data surplus helps regularization but if opponent tactics shift week-to-week, the unsupervised prior may encode outdated manifold, causing negative transfer.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock.
This is a more abstract section. Need to interpret through the lens of the paper but keep rigorous. "Crisis habit regression" = under pressure, analysts revert to manual video tagging (habit) because automated tools fail or are untrusted. "Counter-trap" = the model's semi-supervised design avoids the trap of over-reliance on scarce labels by using unlabeled tracking data as regularization. "Clock" = synchronization of video clock to tracking frames (25 fps), context windows, temporal dynamics.
Discuss:
- Crisis: when a match analyst faces an upcoming opponent with no labels, habit regression to manual tagging consumes time; SequentialM2 reduces labeling effort.
- Counter-trap: the trap is fully supervised DetNet overfitting on few positives (AUC 0.62 vs 0.93). Counter-trap is using unsupervised reconstruction as regularizer (M2) so unlabeled data shapes latent space.
- Clock: temporal alignment. Video footage clock to tracking frame. Context window +10 frames (~0.4 s at 25 fps). Rule-based +/- 2 seconds = 50 frames. RNN hidden state h_{t-1} acts as a temporal clock, encoding selective summary. Sequential dependence means the model's internal clock must match event annotation clock; misalignment causes label noise.
- Recursive theory of mind: modeling opponents' intentions (who overlaps, who is overlapped) requires inferring latent goals of other agents. The GAT attention weights α_{ij} represent the model's belief about which nearby players influence a focal player—akin to theory of mind over agent interactions. In crisis (high-stakes match prep), coaching staff may regress to intuitive reads of player roles rather than the attention-weighted graph; the counter-trap is trusting the matrix (Table 2) that revealed Kimmich's unexpected involvement (8 overlapping, 6 overlapped) despite his primary role as central defender.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof.
Need to evaluate physical constraints that could veto the method's outputs.
- Physical: pitch dimensions, speed thresholds. Rule-based uses 10 km/h (~2.78 m/s) for overlapping runner. At 25 fps, that's 0.111 m/frame. Tracking accuracy of TRACAB Gen 5 evaluated in [20] (PLoS One). If localization error exceeds passing window, false positives/negatives.
- Biomechanical: player acceleration/deceleration. High-speed run past ball carrier. Velocity computed by subtracting consecutive coordinates; no loss if initial position known. However, numerical differentiation amplifies noise; at 25 fps, high-frequency jitter can corrupt velocity estimates. The model normalizes to [-1,1] and uses velocity; if sampling rate drops or occlusion occurs, velocity discontinuities break the Markov assumption of the RNN/GNN.
- Weather: not explicitly in paper, but optical tracking (TRACAB) can be affected by weather conditions (rain, fog) though not stated. I must be careful not to invent. I can say "No weather variables are present in the data pipeline [PAGE 2]; thus weather cannot be explicitly adjudicated, constituting a silent veto risk if optical degradation occurs." That's honest.
- Cross-layer veto: Data layer (tracking/event sync), Model layer (permutation equivariance), Decision layer (analyst import into Hudl Sportscode XML).
- Veto conditions: if k-NN graph disconnects a relevant off-ball player (e.g., overlapping runner starts outside k-NN but enters later), deeper layers needed; receptive field grows with depth but vanishing gradients/oversmoothing risk. If event label timestamp is ambiguous (video clock), context window ±10 frames may be insufficient for slow-developing chances without shot.
- Adjudication: The method passes veto if AUC remains high (0.93/0.98) despite small labels; fails veto if F1 remains low (0.40/0.37) indicating precision/recall trade-off unsuitable for real-time alerting.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning via Verifiable Rewards? Or just verifiable scenarios. I'll frame as counterfactual veto scenarios: if condition X, then prediction Y, and this is verifiable from the paper's setup.
Scenario 1: Label scarcity veto. If the number of labeled overlapping runs drops below the inter-annotator stable threshold (e.g., <20 total, or <10 per class), then DetNet AUC will fall below 0.70 while SequentialM2 stays above 0.85 because unsupervised reconstruction regularizes. Verifiable: paper shows DetNet 0.62 with 32 labels; predict degradation curve.
Scenario 2: Temporal misalignment veto. If the video-footage clock offset exceeds the context window (i.e., >10 frames ≈ 0.4 s at 25 fps), then expert-labeled positive frames will fall outside the annotated context, causing false negatives and F1 collapse below 0.20. Verifiable: paper annotates next 10 frames because start is ambiguous; predict failure if drift >10 frames.
Scenario 3: Graph topology veto. If k-NN is set too small (e.g., k=1) or distant opponents are excluded such that the overlapping runner (initially far from ball carrier) is not in the receptive field within L layers, then the model cannot propagate the runner's influence; AUC for overlapping runs drops to rule-based level (~0.5 AUC equivalent / F1 ~0.31). Verifiable: paper uses k-NN and stacking to increase receptive field; predict ablation where k too small removes long-range dependency and performance reverts to baseline.
Add predictions with numbers where possible.

Need to ensure total words >= 1000. Let's estimate. THINK_TRACE ~500. SOURCE_OPERATORS ~400. Others ~200 each. Should be fine.

Strict formatting: exact XML section names. No markdown code blocks around them? I'll output raw XML-style tags. No betting lines.

Check for any mention of betting: none.

Check for toy equations: I'm using real formal equations from ML literature as described in the paper. Not fake ratios.

Citations: [PAGE N] format. I need to make sure I cite page numbers that exist in the text. The text shows page numbers 1-15 at bottoms. I'll cite [PAGE 1], [PAGE 2], etc.

Let's draft carefully.

Word count check: I need to be verbose enough.

Let's write.

One concern: The user said PAGES: 18 but source text only shows up to page 15. I will not cite beyond [PAGE 15] except maybe refer to appendix as [PAGE 14]-[PAGE 15]. That's fine.

Also need verbatim quotes. I'll include short quoted phrases with page cites.

Let's begin drafting each section.

THINK_TRACE:

Start with derivation. Multi-hop:
1. Problem decomposition: The task is not classification of fixed-length feature vectors but detection over variable-sized subsets of agents in a permutation-invariant spatiotemporal stream.
2. Combinatorial barrier: |π(X)| = 2^|X|. Soccer N=22 → 4,194,304 subsets per frame, infeasible. This forces the model to identify relevant subgroups automatically rather than enumerate.
3. Semi-supervised relief: only 32 overlapping runs across 4 matches (~8 per match), but ~140,000 unlabeled timesteps per match. Unlabeled data abundance vs label scarcity.
4. M2 objective: combines reconstruction (unsupervised) with classification (supervised), preventing overfitting seen in DetNet.
5. Sequential extension: VRNN, RNN hidden state h_{t-1} conditions each timestep's VAE, summing objective over t.
6. Multi-agent GNN: GAT attention, k-NN, receptive field, skip connections.
7. Gray-zone audit: annotation protocol (context window +10 frames), normalization [-1,1], velocity, AUC/F1 divergence, baseline weakness.

I'll write it in a continuous narrative >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS:

List equations with LaTeX. Units. Page citations. Breakdown regimes.

RETROCAUSAL_GENEALOGY:

Citations to [PAGE 1] references. Lineage from self-organizing maps to GNNs. Multi-week traps: label drift, role non-stationarity, rule brittleness.

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression = manual tagging under pressure. Counter-trap = M2 regularization. Clock = sync and RNN hidden state. Theory of mind via attention weights.

CROSS_LAYER_VETO_ADJUDICATION:

Physical/biomechanical/weather. Veto conditions.

RLVR_COUNTERFACTUAL_VETOES:

Three scenarios with if-then predictions and verification path.

Let's write the final output now. I'll aim for around 1400-1600 words total to be safe.

Need to ensure no fake equations like Force/Fatigue. All equations are standard.

LaTeX formatting: use $$ or \( \). I'll use display style where appropriate.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds through four nested hops: (1) the combinatorial barrier of multi-agent subset enumeration, (2) the semi-supervised variational objective as regularizer against label scarcity, (3) the sequential and graph-structured extension that imports temporal and relational inductive biases, and (4) the empirical gray zones where the paper’s reported metrics diverge from operational utility.

Hop 1 begins with the permutation problem and the power-set singularity. The source states that for soccer there are 2^22 = 4,194,304 possible player subsets per frame, which is “clearly infeasible” [PAGE 1]. This means any detector that enumerates coalitions exhaustively suffers a combinatorial singularity at N=22. The paper’s requirement (III)—automatically identifying relevant subgroups—is therefore not a convenience but a computational necessity. Existing approaches that collapse high-dimensional spatiotemporal tracking data into hand-crafted low-dimensional features fail precisely because they cannot traverse this subset space without imposing arbitrary ordering or fixed group size [PAGE 1].

Hop 2 addresses label economy. The German National team dataset supplies roughly 140,000 timesteps per match at 25 fps [PAGE 6], yet only about eight overlapping-run situations per match on average [PAGE 6], and only 32 total hand-labeled overlapping runs across four matches [PAGE 2], [PAGE 6]. A fully supervised detector such as DetNet, optimized with binary cross-entropy on randomly sampled length-50 segments, overfits this sparse positive class (AUC 0.62) [PAGE 7]. The M2 semi-supervised objective counters this by treating unlabeled label information as a latent variable and using reconstruction loss as a regularizer, effectively letting the abundant unlabeled tracking stream shape the latent space [PAGE 4].

Hop 3 elevates the static M2 principle to a sequential variational autoencoder (SequentialM2) by adopting the VRNN recipe: at each timestep t, the RNN hidden state h_{t-1} encodes a selective summary of previous steps and latent variables, and the M2 objective is summed over every timestep [PAGE 4]. A graph attention network then enforces permutation invariance while allowing attention weights to route messages through k-nearest-neighbor neighborhoods; stacking layers expands the receptive field, and jumping-knowledge skip connections aggregate embeddings across depths [PAGE 5]. The result is an order-equivariant processor that can attend to arbitrary subgroups, including opponents, without enumerating the power set [PAGE 1], [PAGE 5].

The gray-zone audit centers on three fractures. First, the annotation pipeline itself is noisy: expert annotations arrive on a video-footage clock and must be synchronized to tracking frames; because timing is coarse, the authors annotate the identified frame plus the next 10 frames as positive [PAGE 3]. Second, the inter-annotator agreement is 84.61% (22 of 26 scenes), implying a persistent ~15% label-noise floor even before model training [PAGE 2], [PAGE 6]. Third, the performance metrics are decoupled: SequentialM2 achieves AUC 0.93 on overlapping runs but only F1 0.40, and AUC 0.98 on chances without shot but F1 0.37 [PAGE 7]. The large AUC–F1 gap indicates that while the model ranks true situations highly, its operating point yields modest precision/recall for contiguous game sections, which is the regime a video analyst actually faces when importing Hudl Sportscode XML timecodes [PAGE 9]. The rule-based baseline (F1 0.31) is brittle because it hard-codes a 10 km/h speed threshold and fixed spatial zones (2 m ball proximity, 17.5 m offensive third, 17 m outside lane) [PAGE 7]; these thresholds lack invariance to tactical evolution across weeks or opponents.

Breakdown regimes: (a) combinatorial singularity at N=22 if subgroup discovery fails; (b) class-imbalance collapse when positives fall below roughly 5.7e-5 base rate (8 events per 140,000 timesteps); (c) temporal misalignment if video-to-tracking clock drift exceeds the +/- 10-frame context window (~0.4 s at 25 fps); and (d) graph receptive-field failure if k-NN is too shallow to capture an overlapping runner who begins outside the ball carrier’s immediate neighborhood.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**Power-set and permutation operator.** For a player set X, |π(X)| = 2^{|X|}. Soccer: |X| = 22 ⇒ 4,194,304 subsets per frame; basketball: |X| = 10 ⇒ 1,024 subsets [PAGE 1]. This singularity motivates GNN-based subgroup discovery rather than enumeration.

**VAE / M2 objective.** Let x ∈ R^{T×D} be normalized trajectory coordinates, z ∈ R^d the continuous bottleneck, y ∈ {0,1}^L the discrete tactical label. The variational lower bound decomposes as  
log p(x) ≥ E_{q(z|x)}[log p(x|z)] − D_{KL}(q(z|x)‖p(z)).  
In the M2 semi-supervised extension, y joins the generative process alongside z. For labeled pairs (x,y):  
J_{sup}(x,y) = E_{q(z|x,y)}[log p(x|z,y)] − D_{KL}(q(z|x,y)‖p(z|y)) + log p(y),  
acting as a regularized classification objective where reconstruction regularizes the classifier [PAGE 4]. For unlabeled x, y is treated as an unobserved latent variable; q(y|x) is inferred and used at test time for classification [PAGE 4].

**Sequential extension (SequentialM2 = VRNN + M2).** At timestep t, h_t = RNN(h_{t-1}, x_t, z_t, y_t), where h_{t-1} is the hidden-state summary of past latents and observations [PAGE 4]. The total criterion is the M2 objective summed over the sequence:  
J_{seq} = Σ_{t=1}^{T} J_{M2}(x_t, y_t | h_{t-1}).  
Units: x is normalized to [-1, 1] in x- and y-direction (dimensionless pitch coordinates) [PAGE 3]; velocity is v_t = x_t − x_{t-1} (normalized coordinate units per frame at 25 fps) [PAGE 3].

**Multi-agent graph operator.** Nodes i correspond to players. Message passing at layer l:  
m_i^{(l)} = Σ_{j∈N(i)} α_{ij}^{(l)} W^{(l)} h_j^{(l-1)},  
with attention coefficients α_{ij}^{(l)} computed by a single-layer network over node pairs and stabilized via multi-head concatenation [PAGE 5]. The adjacency uses k-nearest neighbors to exclude direct influence of distant players [PAGE 5], [PAGE 5 Figure 2]. Receptive field grows with depth L; jump-knowledge skip connections aggregate H^{(final)} = ⊕_{l=0}^{L} H^{(l)} [PAGE 5].

**Evaluation metrics.** AUC aggregates TP and FP over thresholds: AUC = ∫_0^1 TPR(FPR^{-1}(u)) du. Because labels exist only at individual timestamps and the test distribution is highly unbalanced, AUC can be optimistic; the paper therefore also reports F1 = 2PR/(P+R) on contiguous sections, where test probability p_t = max_i p_t^{(i)} across the agent dimension [PAGE 6].

**Rule-based baseline operator.** Positive if d(player, ball) < 2 m, position in offensive third (> 17.5 m into opposing half), outside lane (distance to vertical midline > 17 m), and a teammate passes behind the ball carrier in vertical pitch direction with speed > 10 km/h across two consecutive frames, with +/- 2 s context (= +/- 50 frames at 25 fps) [PAGE 7].

**Reported values.** SequentialM2: overlapping-run AUC 0.93, F1 0.40; chance-without-shot AUC 0.98, F1 0.37 [PAGE 7 Table 1]. DetNet: AUC 0.62 / 0.69 [PAGE 7]. Rule-based: F1 0.31 [PAGE 7]. Inter-annotator agreement: 22/26 = 84.61% [PAGE 2], [PAGE 6]. Training split: 2 games train, 1 validation, 1 test; ~140,000 timesteps/game; best AUC on validation; 100 epochs; PyTorch [PAGE 6].

**Breakdown regimes.** (i) Combinatorial explosion at N=22 if no subgroup is selected. (ii) Semi-supervised regularization fails under covariate shift if unlabeled tracking manifold differs from labeled match contexts across opponents. (iii) Temporal label ambiguity when video-footage-clock offset exceeds the +10 frame annotation window. (iv) Graph oversmoothing if k-NN is too restrictive or depth insufficient to propagate off-ball runner influence.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is a chain of representational abstractions moving from hand-engineered pattern mining to permutation-equivariant deep generative modeling. Early tactical detection relied on self-organizing maps in basketball [Kempe et al., 2015, cited on PAGE 1] and soccer [Grunz et al., 2012, cited on PAGE 1], and on enhanced topic models for professional soccer teams [Wang et al., 2015, cited on PAGE 1]. These methods required feature engineering and were vulnerable to the oversimplification the authors critique [PAGE 1]. The event-driven line—counterpressing [Bauer & Anzer, 2021, cited PAGE 1], goal origins [Anzer et al., 2021, cited PAGE 1], transitions [Hobbs et al., 2018, cited PAGE 1], set pieces [Power et al., 2018; Shaw & Gopaladesikan, 2021, cited PAGE 1]—demonstrated that synchronized positional and event data could save analyst time, but remained supervised and task-specific.

The generative turn arrives through Kingma et al.’s semi-supervised deep generative models [16, 22] and Rezende et al.’s stochastic backpropagation [23], which introduced the M2 principle of integrating discrete labels y into the data-generation process alongside continuous latents z [PAGE 4]. Chung et al.’s VRNN [18] extended VAEs to sequential data by conditioning each timestep’s VAE on an RNN hidden state [PAGE 4]. SequentialM2 is presented as the union VRNN + M2 [PAGE 4]. On the relational side, Battaglia et al.’s relational inductive biases [13], Kipf et al.’s neural relational inference [26], GraphSAGE [27], and Veličković et al.’s graph attention networks [28] supply the permutation-equivariant substrate [PAGE 1], [PAGE 5]. Xu et al.’s jumping-knowledge networks [25] justify the skip-connection aggregation across layers [PAGE 5]. Fassmeyer et al.’s prior work on automatically labeling soccer situations [17] is the direct antecedent: it showed team-pattern detection useful for counterattacks [9] but was tailored to team-level patterns; the present paper is “the first to explore arbitrary tactical patterns, involving small groups of players” such as overlapping runs and chances without shot [PAGE 2].

Multi-week traps emerge when this lineage is deployed operationally. First, label non-stationarity: Table 2 tracks overlapping-run frequencies for the German National Team across the 2021/2022 season [PAGE 10], yet player roles shift within weeks—Joshua Kimmich appears in only three matches as defensive back and the rest as central defender, yet is involved in 8 overlapping and 6 overlapped situations [PAGE 10]. A role-based prior learned in week 1 becomes stale by week 4. Second, inter-annotator decay: the 84.61% pairwise agreement [PAGE 2], [PAGE 6] means that a multi-week labeling campaign accumulates roughly 15% irreducible label noise, which can corrupt the supervised term of the M2 objective if not continuously re-adjudicated. Third, rule-based brittleness: the hand-crafted detector fixes a 10 km/h threshold and static pitch zones [PAGE 7]; as defensive lines and playing styles shift over a tournament, these constants cease to match the observable manifold, causing silent false-negative drift. Fourth, unsupervised prior contamination: the model’s regularization draws on unlabeled tracking data from previous matches [PAGE 4]; if an opponent changes formation mid-tournament, the unsupervised reconstruction term may encode the old manifold and produce negative transfer on the new one.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of match-analysis staff, under temporal pressure before an opponent match, to abandon automated tools and revert to manual video tagging—the very repetitive, subjective workload the paper seeks to reduce [PAGE 1]. When a coaching staff faces an unfamiliar opponent with zero labeled overlapping runs, the habit loop is to assign an expert to scrub footage frame by frame. SequentialM2 attacks this habit by requiring only “little manual effort” [PAGE 1] and by leveraging unlabeled tracking data as a regularizer, so the cold-start problem is softened rather than hard [PAGE 4].

The counter-trap is the fully supervised baseline DetNet, which treats every non-interest frame as negative and optimizes binary cross-entropy on short sampled segments [PAGE 7]. Its AUC of 0.62 on overlapping runs [PAGE 7] reveals the trap: with only ~8 labeled positives per match, a purely supervised classifier overfits the noise floor and fails to generalize. SequentialM2’s counter-trap is the M2 decomposition, where the unsupervised reconstruction loss acts as a data-dependent regularizer on the classifier, preventing the decision boundary from collapsing to the majority class [PAGE 4]. The empirical contrast—DetNet AUC 0.62 vs SequentialM2 AUC 0.93 [PAGE 7]—is the signature of escaping the trap.

The clock operates at two layers. The external clock is the video-footage timestamp that must be synchronized to the 25 fps tracking stream [PAGE 2], [PAGE 3]; because expert annotations denote only the start of an overlapping situation, the authors annotate the next 10 frames (~0.4 s) to absorb ambiguity [PAGE 3]. The internal clock is the RNN hidden state h_{t-1}, which carries a selective summary of previous latents and observations into the current VAE [PAGE 4]. If the external synchronization drifts beyond the context window, or if the internal RNN clock cannot resolve sub-second coordination between ball carrier and overlapping runner, the temporal theory of mind breaks down.

Recursive theory of mind enters through the graph attention coefficients α_{ij}^{(l)} [PAGE 5]. These weights are the model’s learned belief about which nearby nodes—teammates, opponents, or the ball—causally influence a focal player’s embedding at layer l. Detecting an overlapping run requires inferring the latent intent of the runner (to create a passing option) and the defender’s dilemma (defend runner or dribbler) [PAGE 2]. The attention mechanism operationalizes this multi-agent theory of mind without hand-coded rules. In practice, however, coaching staff may regress to intuitive role reads—expecting only wingbacks to overlap [PAGE 10]—while the model’s attention matrix reveals counterintuitive structure, such as Kimmich’s heavy involvement despite his primary central-defender role [PAGE 10]. The recursive loop is: does the staff trust the attention-weighted graph over prior role assumptions, especially under match-preparation time pressure? The paper’s practical export to Hudl Sportscode XML [PAGE 9] operationalizes this trust by handing the coach a ranked candidate set rather than a black-box verdict.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Veto adjudication examines three layers: physical tracking, biomechanical signal, and environmental/operational context.

Physical layer. Tracking data come from the Chyronhego TRACAB System (Generation 5), sampled at 25 frames per second [PAGE 2]. The paper cites [20] for football-specific validity of optical tracking [PAGE 2], but provides no error covariance in the text. If localization error exceeds the spatial precision needed to separate a ball carrier from an overlapping runner (the rule-based baseline uses 2 m ball proximity and 10 km/h speed [PAGE 7]), the graph node positions carry jitter that corrupts velocity estimates v_t = x_t − x_{t-1} [PAGE 3]. A veto condition: if positional noise σ_x satisfies σ_x · 25 fps > 0.1 m/frame, velocity signs flip stochastically, breaking the Markov assumption embedded in the RNN/GNN transition.

Biomechanical layer. Overlapping runs are defined by high-speed running past the ball carrier toward the goal line [PAGE 2]. The model receives normalized coordinates in [-1, 1] and derived velocities [PAGE 3], but no explicit acceleration, jerk, or fatigue state. Because velocity is computed by finite differencing consecutive coordinates [PAGE 3], high-frequency noise is amplified; at 25 fps, a single mis-tracked frame produces a velocity outlier that the recurrent state must absorb. If a player occludes or the tracker drops a frame for more than the burn-in/context window, the velocity discontinuity can push the latent z outside the support learned during training, producing a false-negative detection for that timestep.

Weather/environmental layer. The source text contains no weather variables, precipitation, wind, or turf-state fields [PAGE 2]–[PAGE 15]. TRACAB is an optical video-tracking system [PAGE 2], so adverse visibility is a latent physical risk, but because it is not modeled, it constitutes a silent veto: the method cannot adjudicate weather-induced tracking degradation, and any systematic drop in detection quality during rain or fog would be unattributable within the paper’s formalism.

Cross-layer veto rule. The method passes veto if it retains AUC ≥ 0.90 while reducing analyst labeling effort; it fails veto if F1 remains ≤ 0.40 on contiguous sections [PAGE 7] because the precision-recall operating point is too weak for real-time alerting. A hard veto triggers when k-NN depth is insufficient to propagate an off-ball runner’s influence into the ball carrier’s node embedding before the 10-frame context window closes [PAGE 5], because then the subgroup of interest is topologically severed from the decision computation.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Label-scarcity veto). If labeled overlapping-run situations are reduced from 32 to fewer than 16 across the four training/representative matches, while unlabeled tracking volume (~140,000 timesteps per match [PAGE 6]) remains fixed, then DetNet’s AUC will fall below 0.70 due to overfitting on the binary cross-entropy objective, whereas SequentialM2 will remain above 0.85 because the unsupervised reconstruction term continues to regularize the latent space [PAGE 4], [PAGE 7]. Verifiable: retrain DetNet on a random half of the 32 labeled scenes and compare test AUC against SequentialM2 trained on the same half; the paper’s baseline already shows DetNet at 0.62 with full labels [PAGE 7], so halving labels should push it into the 0.55–0.65 range, while SequentialM2’s semi-supervised objective degrades more gracefully.

Scenario 2 (Temporal-misalignment veto). If the video-footage-to-tracking synchronization offset exceeds the +10 frame annotation context (~0.4 s at 25 fps [PAGE 3]), then expert-labeled positive frames will fall outside the annotated context window, converting true positives into false negatives. Under this condition, SequentialM2’s F1 on overlapping runs will collapse below 0.20 even if AUC remains above 0.80, because F1 is computed on contiguous sections and penalizes temporal misalignment heavily [PAGE 6], [PAGE 7]. Verifiable: synthetically shift the expert labels by ±15 frames (±0.6 s) relative to the tracking stream and recompute F1; the paper’s dependence on a short context window makes this a sharp failure boundary.

Scenario 3 (Graph-topology veto). If the k-nearest-neighbor graph is ablated to k=1 or the number of GNN layers is reduced to one, so that the receptive field cannot reach an overlapping runner who begins outside the ball carrier’s immediate neighborhood, then the model cannot propagate the runner’s high-speed trajectory into the focal player’s embedding [PAGE 5]. Prediction: overlapping-run AUC will revert toward the rule-based operating regime (approximately 0.5–0.6 AUC-equivalent / F1 ≈ 0.31) [PAGE 7], because the model loses the ability to attend to the off-ball subgroup that defines the tactical pattern. Verifiable: run an ablation on the validation game with k=1 and L=1; compare against the full model’s AUC 0.93 / F1 0.40 [PAGE 7] and against the rule-based F1 0.31 [PAGE 7]. A drop to within one standard deviation of the rule-based baseline confirms the topology veto.
</RLVR_COUNTERFACTUAL_VETOES>