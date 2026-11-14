---
source: "2025 - A Comps-Based Approach for Interpreting Tree-Based Predictions with an Application to the NFL Draft - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2025"
pages: 2
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5214
---

<NATIVE_REASONING>
The user wants me to analyze a source document about a comps-based approach for interpreting tree-based predictions with an application to the NFL Draft. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source text provided seems to be page 1 of 2 (the user says PAGES: 2 but only provides one block). I need to cite exact [PAGE N] markers. Since the source text doesn't explicitly have page breaks marked, I'll treat the provided content as [PAGE 1] based on the header information. Wait, the user said PAGES: 2 but the text provided looks like it could be a single page. I need to be careful - I should only cite what I can verify. The text says "<!-- source: ... -->" and then content. I'll cite [PAGE 1] for the content provided. If there's a second page not provided, I shouldn't fabricate it. However, the user explicitly says PAGES: 2. I should work with what's given. I can note that only [PAGE 1] content is visible in the provided text, or I can assume the text spans pages. Actually, looking at the text, it seems complete but dense. I will cite [PAGE 1] for all verbatim quotes since that's what's provided.

Let me structure this:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need >=400 words. Discuss:
- Random forest as adaptive k-NN (Lin & Jeon 2006)
- Bootstrap sampling, terminal nodes, similarity scores
- QBR regression to zero (shrinkage for small samples)
- Multicollinearity >= 0.94 between yards, TDs, completions
- Test RMSE 8.61, explains 43.7% variance
- Comps for Cam Ward (37.0), Dillon Gabriel (34.6), Shedeur Sanders (33.2), Jaxson Dart (24.0)
- Similarity scores listed (Manziel, Mariota, Mayfield, etc.)
- Gray zones: interpretability vs black box, front office non-quantifiable info, regression to zero assumptions, small sample QBR instability, leaf co-occurrence as similarity measure breakdown when trees are deep/overfit, multicollinearity inflating variable importance, k-NN curse of dimensionality in college QB stats space, similarity scores as proportions (sum to 1?) actually they seem to be percentages listed (2.3%, etc.) but there are 10 comps listed per player with percentages around 1-2%, which don't sum to 100, so maybe top 10 shown.
- Exact singularity/breakdown regimes: when |T| = 0 (empty leaf), when bootstrap sample has zero occurrences n=0, when similarity denominator sum is zero, when QBR regression to zero introduces bias for players with few NFL seasons.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations.
- Define x_i in R^p (the source has garbled math: ℝ^# ∈ ℝ the !... x"). I'll reconstruct formally.
- Bootstrap samples b = 1...B
- n_{i,b} number of times observation i appears in bootstrap sample b
- T_{i,b} terminal node of observation i in tree b
- |T| number of observations in node with repetition
- Tree prediction: ŷ_b(x') = sum over i [ w_{i,b} * y_i ] where w_{i,b} = (n_{i,b} / |T_{i,b}|) * I(T_{i,b}(x') = T_{i,b}(x_i)) ... need to reconstruct from garbled text.
- RF prediction: ŷ(x') = (1/B) sum_b ŷ_b(x')
- Similarity score: w_i = (1/B) sum_b [ n_{i,b} / |T_{i,b}| * I(T_{i,b} = T'_{i,b}) ]
- Or from text: similarity score interpreted as w between query x' and training x_i.
- Units: QBR is unitless (EPA-based rating), RMSE in QBR points, variance explained dimensionless (0-1 or %).
- Citations: [PAGE 1] for all.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lin & Jeon (2006) JASA random forests and adaptive nearest neighbors
- Burke (2016) ESPN Total QBR based on EPA
- Breiman (2001) random forests (implied)
- k-NN history (Cover & Hart 1967)
- treecomp R package, github.com/elisabethmill/treecomp
- NESSIS 2025 conference
- Multi-week traps: draft capital allocation over multiple weeks, comps-based anchoring causing front offices to overweight historical archetypes, regression to zero masking breakout seniors, multicollinearity causing redundant variable weighting across weeks of scouting.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under draft pressure, GMs regress to familiar comps (Manziel, Mayfield, Lawrence) rather than model output.
- Counter-trap: using comps to justify non-quantifiable overrides (intangibles, leadership, system fit).
- Clock: draft clock pressure reduces time for tree traversal, forces heuristic comp selection, similarity scores become post-hoc rationalization.
- Theory of mind: front office thinks other teams value comps similarly, leading to draft order gaming; model thinks similarity = predictive weight, human thinks similarity = narrative comparability.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical layer: throwing mechanics, hand size, arm length not in dataset (only passing/rushing stats, awards, SOS). Veto if biomechanical red flags exist despite high similarity score.
- Biomechanical layer: injury history not included; shoulder/ACL history can veto high QBR projection.
- Weather layer: college weather (dome vs outdoor) not explicitly separated from SOS; cold-weather performance not modeled; outdoor vs dome splits can veto QBR comps (e.g., dome QBR inflates).
- Veto proof: model lacks these features, so any comp prediction must be overruled if physical/biomechanical/weather evidence contradicts statistical neighborhood.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- Scenario 1: High similarity to Johnny Manziel (2.3% for Cam Ward) but poor pro-day measurables/arm length -> veto prediction, actual NFL QBR falls >2 RMSE below projected.
- Scenario 2: Regression to zero applied to small-sample senior (e.g., one-year starter) -> veto if model overweights final-season Heisman voting without adjusting for sample size, actual QBR regresses harder than model.
- Scenario 3: Multicollinearity >=0.94 among passing stats causes variable importance instability -> veto when passing yards/TDs/completions move together but rushing stats diverge, model misattributes success to passing when mobility was driver; actual QBR drops when pocket passing required.

Word count: Need >=1000 words total across sections. I'll make sure each section is substantial.

Important: No betting lines. No fake ratios. Formal LaTeX only. Cite [PAGE 1] (and maybe note [PAGE 2] if I infer, but I only have one block. I should be honest: the provided text appears to be [PAGE 1] of the source; I will cite [PAGE 1] for all quotes. If the user insists on pages 2, I cannot invent page 2 content. I'll cite [PAGE 1] throughout.

Let me verify verbatim quotes from source:
- "Random Forests are a powerful machine learning prediction model, but like other “black box” algorithms, their results are difficult to interpret." [PAGE 1]
- "In sports, interpretability is crucial because it builds trust for the user in the predictions, and front offices need to consider non-quantifiable information in their decision-making." [PAGE 1]
- "We aim to use the k-NN properties of random forests to add interpretability to the QBR predictions produced for quarterback prospects in the form of “player comps”." [PAGE 1]
- "The random forest model achieved a test RMSE of 8.61, explaining 43.7% of the variance in regressed NFL QBR." [PAGE 1]
- "High multicollinearity exists between some variables (e.g., yards, touchdowns, and completions per season are all pairwise correlated at ≥ 0.94)." [PAGE 1]
- Cam Ward: 37.0; Dillon Gabriel: 34.6; Shedeur Sanders: 33.2; Jaxson Dart: 24.0 [PAGE 1]
- Comp lists [PAGE 1]
- Response Variable: Average NFL QBR across seasons (0 for players who never played in the NFL) [PAGE 1]
- 2,099 quarterbacks [PAGE 1]

I need to be careful with the garbled LaTeX in source. I'll present clean formal LaTeX and note it's reconstructed from [PAGE 1].

Word count check: I'll aim for ~1500+ words total.

Let me draft each section.

THINK_TRACE (>=400 words):
Start with multi-hop derivation:
1. Source establishes RF as adaptive k-NN per Lin & Jeon (2006).
2. Bootstrap sampling creates B trees; each observation i has n_{i,b} appearances.
3. Terminal node membership defines custom neighborhood.
4. Similarity score = co-occurrence frequency in leaves weighted by inverse node size.
5. Prediction = weighted average of training QBRs.
6. Applied to 2025 NFL Draft QBs: Ward 37.0, Gabriel 34.6, Sanders 33.2, Dart 24.0.
7. Comps listed: Ward -> Manziel 2.3%, Mariota 2.3%, Mayfield 2.2%, Rivers 2.1%, Lawrence 2.0%, Leinart 2.0%, Wilson 2.0%, Jackson 1.9%, Watson 1.9%, Keenum 1.9%. Gabriel -> Rudolph 2.0%, Haskins 1.9%, Pickett 1.9%, Stroud 1.9%, Luck 1.9%, Nix 1.9%, Lawrence 1.9%, Young 1.6%. Sanders -> Rudolph 1.9%, Pickett 1.9%, Rivers 1.9%, Roethlisberger 1.8%, Wilson 1.8%, Boykin 1.8%, Moore 1.7%, Rodgers 1.7%, Luck 1.7%, Stroud 1.7%. Dart -> Bridgewater 1.9%, Boyd 1.6%, Russell Wilson 1.5%, Beck 1.5%, Maye 1.4%, Terrell 1.4%, Hogan 1.2%, Bortles 1.2%, Howell 1.2%, Mahomes 1.1%.

Gray-zone audit:
- Interpretability claim vs black box: k-NN interpretation adds post-hoc comparables but doesn't expose feature splits.
- Regression to zero: "We regressed each player's QBR/season to zero" - this is shrinkage but amount unspecified. Breakdown when NFL sample size is small (1-2 seasons), high variance QBR gets pulled to zero, biasing prospect projections downward for limited NFL data.
- Multicollinearity >=0.94 means variable importance cannot isolate causal driver; passing yards/TDs/completions are redundant.
- Comps percentages are small (1-2% top 10), suggesting diffuse similarity or top-10 truncation; doesn't sum to 100, so unlisted comps carry remaining weight.
- RMSE 8.61 on QBR scale where typical range maybe 0-100; error is substantial relative to differences between prospects (e.g., Ward 37 vs Dart 24 = 13 points, only 1.5x RMSE).
- Breakdown regimes: |T| = 0 empty leaf; sum of weights = 0; bootstrap sample excludes all similar players; QBR regression to zero with zero NFL attempts (y=0 for never played) conflates non-selection with poor performance.
- Front office non-quantifiable info creates a feedback loop: model informs draft, draft changes playing time, playing time changes observed QBR, violating i.i.d. assumption between training and draft-year prospects.

That's plenty. I'll write it out.

SOURCE_OPERATORS_AND_EQUATIONS:
Formal math:
- Let \mathcal{D} = \{(\vec{x}_i, y_i)\}_{i=1}^{N}, N=2,099, \vec{x}_i \in \mathbb{R}^p, y_i \in \mathbb{R} (regressed NFL QBR).
- y_i = 0 for players with no NFL snaps.
- Bootstrap: \mathcal{D}_b \sim \text{Uniform}(\mathcal{D}) with replacement, b=1,...,B.
- n_{i,b} = count of observation i in \mathcal{D}_b.
- Tree b partitions feature space; leaf \ell_{i,b} contains observation i; |\ell_{i,b}| = cardinality with repetition.
- For query \vec{x}', leaf assignment \ell'_{b} = \text{leaf}_b(\vec{x}').
- Tree prediction: \hat{y}_b(\vec{x}') = \frac{\sum_{i=1}^N n_{i,b} \cdot y_i \cdot \mathbb{I}[\ell_{i,b} = \ell'_b]}{\sum_{i=1}^N n_{i,b} \cdot \mathbb{I}[\ell_{i,b} = \ell'_b]}.
- RF prediction: \hat{y}_{RF}(\vec{x}') = \frac{1}{B}\sum_{b=1}^B \hat{y}_b(\vec{x}').
- Similarity weight: w_i(\vec{x}') = \frac{1}{B}\sum_{b=1}^B \frac{n_{i,b}}{|\ell_{i,b}|} \mathbb{I}[\ell_{i,b} = \ell'_b] ... wait the source says w = n / |T| * I... but then average across trees? Let me look at garbled text: "w where w = ... " It's messy. I'll present a clean version and say it's the normalized co-occurrence weight.
- Units: QBR dimensionless (EPA-derived rating), RMSE in QBR points (absolute), variance explained R^2 \in [0,1] = 0.437, similarity scores dimensionless proportions (percent).
- Singularity: denominator \sum n_{i,b} I[...] = 0 when no training point shares leaf -> undefined prediction; occurs with deep trees or sparse feature space.
- Multicollinearity: \rho(\text{yards}, \text{TDs}) \ge 0.94, etc. [PAGE 1].

RETROCAUSAL_GENEALOGY:
- Lin & Jeon (2006) JASA 101(474): 578-590 [PAGE 1].
- Burke (2016) ESPN Total QBR/EPA [PAGE 1].
- Breiman (2001) Random Forests (statistical lineage, implicit).
- Cover & Hart (1967) k-NN nearest neighbor pattern classification.
- NESSIS 2025 conference venue [PAGE 1].
- Rice University kinesiology + sport management [PAGE 1].
- treecomp R package [PAGE 1].
- Multi-week traps: NFL draft prep spans months; comps-based anchoring in week 1 creates confirmation bias; weekly scout reports overweight recent pro-day performance not in college stats; regression to zero means late-season injuries/small samples distort senior comps; multicollinearity causes week-to-week variable importance instability as new stats arrive.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under draft clock, GM defaults to comp narrative ("next Manziel") rather than model leaf weights.
- Counter-trap: front office uses comp list to justify trading up/down based on non-model intangibles (leadership, system).
- Clock: 15-minute (first round) or shorter pick windows force heuristic retrieval of top comps; similarity score becomes social proof not statistical estimate.
- Theory of mind recursion: Team A thinks Team B values Ward-Manziel comp, so trades up; Team B knows Team A thinks that, so bluffs. Model assumes comp similarity = predictive weight; humans treat comp similarity = draft market comparability.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: throwing velocity, release point, hand size, arm length absent from \vec{x}. Veto if physical measurables outside NFL threshold despite high similarity to successful comp.
- Biomechanical layer: shoulder/ACL/surgery history absent. Veto if medical red flag exists for high-QBR comp (e.g., comp had clean college but pro injury).
- Weather layer: dome vs outdoor not separated from strength of schedule. Cold-weather QBR depression unmodeled; outdoor passer compared to dome comp can veto projection.
- Proof: Since \vec{x} contains only passing/rushing stats, awards, SOS, conference, team, games played, any veto condition orthogonal to these features renders model prediction non-identifiable and must be overridden.

RLVR_COUNTERFACTUAL_VETOES:
1. Scenario: Ward-Manziel similarity 2.3% top comp, but Ward's pro-day hand size < 9 inches and tape shows inconsistent footwork. Veto model QBR 37.0. Prediction: actual NFL QBR < 37.0 - 8.61 = 28.39 in first two seasons (more than 1 RMSE below projection).
2. Scenario: Regression-to-zero applied to one-year starter with inflated final-season QBR due to small sample; Heisman voting overweighted. Veto if final-season attempts < 200. Prediction: actual NFL QBR shrinks toward zero by >40% relative to model, falling below 20.0.
3. Scenario: Multicollinearity \rho \ge 0.94 among passing yards/TDs/completions causes model to attribute success to passing volume when rushing was driver (dual-threat QB). Veto when rushing TDs > passing TDs but model comps are pocket passers. Prediction: actual NFL QBR drops >10 points below projected when required to play from pocket under pressure.

Word count: I'll expand each to hit >1000 total.

Let me make sure to avoid any mention of betting lines (spreads, totals, moneylines, odds). I will not mention any gambling terms.

I need to include verbatim quotes with [PAGE 1]. Since only one page is provided, I'll cite [PAGE 1] consistently.

Let's write it out fully now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source text (available content treated as [PAGE 1]) establishes a chain of inference from raw college quarterback statistics to a projected NFL QBR via random forests interpreted as data-adaptive k-nearest neighbors. Hop one: the data layer contains 2,099 quarterback player-seasons with team, conference, strength of schedule, games played, passing statistics (attempts, completions, touchdowns, interceptions), rushing statistics (attempts, yards, touchdowns), awards (All-America designation, Heisman voting), and NFL outcomes (passing attempts and Total QBR; Burke, 2016). QBR is regressed to zero per season to mitigate small-sample inflation, though the shrinkage target and regularization strength are not specified in the text. Hop two: B bootstrap samples are drawn; each observation i appears n_{i,b} times in bootstrap sample b. Each observation falls into a terminal node T_{i,b} in tree b with cardinality |T_{i,b}| counted with repetition. Hop three: for a query prospect \vec{x}', each tree returns a leaf-specific average of training outcomes y_i weighted by co-occurrence in the same terminal node; the forest averages across B trees. Hop four: this produces a similarity weight w_i for every historical quarterback, which the authors rank to generate “player comps.” Hop five: the top four 2025 NFL Draft prospects receive projected average NFL QBR values of Cam Ward: 37.0; Dillon Gabriel: 34.6; Shedeur Sanders: 33.2; Jaxson Dart: 24.0 ([PAGE 1]). The corresponding comp lists are printed with similarity percentages (e.g., Ward’s top comps: Johnny Manziel 2.3%, Marcus Mariota 2.3%, Baker Mayfield 2.2%; Gabriel: Mason Rudolph 2.0%, Dwayne Haskins 1.9%; Sanders: Rudolph 1.9%, Pickett 1.9%; Dart: Teddy Bridgewater 1.9%, Tajh Boyd 1.6%) ([PAGE 1]).

Gray-zone audit: (1) Interpretability is claimed as a trust-building mechanism for front offices that must weigh non-quantifiable information, yet the k-NN reframing only exposes post-hoc neighbor lists, not the internal split criteria of individual trees ([PAGE 1]). The similarity score is therefore an interpretability veneer over a still-black-box ensemble. (2) Regression to zero introduces bias when NFL sample size is small: a quarterback with one strong partial season is pulled toward zero, but the degree of shrinkage is unstated, making the response variable y_i a hybrid of performance and exposure rather than a pure rate. (3) Test RMSE is 8.61 QBR points and the model explains 43.7% of variance ([PAGE 1]); given that Ward’s projection exceeds Dart’s by 13.0 QBR points, that gap is only about 1.5 RMSE units, meaning the statistical separation between top-tier and mid-tier projections is within one standard error of the model. (4) Pairwise correlations among passing yards, touchdowns, and completions are ≥ 0.94 ([PAGE 1]), so variable importance cannot isolate which passing statistic drives the projection; the model may be stable in prediction but unstable in attribution. (5) Similarity percentages for the top ten comps per prospect sum to roughly 17–20%, implying the remaining weight is distributed across unlisted historical players or that the displayed list is truncated; the text does not state whether weights sum to one across the full training set. (6) Exact breakdown regimes: denominator ∑_i n_{i,b}·𝕀[T_{i,b}=T'_{b}] equals zero when no training observation shares the query’s leaf, producing an undefined tree prediction; this occurs under deep trees, sparse high-dimensional feature space, or bootstrap samples that exclude the relevant college archetype. (7) Players who never played in the NFL are assigned y=0 ([PAGE 1]), conflating non-selection with zero performance and violating the missing-at-random assumption for draft-eligible prospects who never enter the league. (8) Because draft decisions alter playing time, and playing time alters observed NFL QBR, the training distribution and the post-draft counterfactual distribution are not identically distributed; the model treats comp similarity as transportable across draft classes, which fails if NFL offensive schemes or rule enforcement shift between the training era and the prospect’s entry year.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and exact equations reconstructed from [PAGE 1].

Let the training dataset be \mathcal{D} = \{(\vec{x}_i, y_i)\}_{i=1}^{N}, where N = 2,099 quarterback player-seasons, \vec{x}_i \in \mathbb{R}^{p} is the feature vector (passing attempts, completions, yards, touchdowns, interceptions; rushing attempts, yards, touchdowns; strength of schedule; games played; conference; team; awards), and y_i \in \mathbb{R} is the regressed average NFL QBR across seasons, with y_i = 0 for players who never played in the NFL ([PAGE 1]). QBR is dimensionless because it is derived from expected points added (EPA) and share of team EPA ([PAGE 1]; Burke, 2016).

Bootstrap operator: for b = 1,\dots,B, draw \mathcal{D}_b by sampling N observations from \mathcal{D} with replacement. Let n_{i,b} \in \mathbb{Z}_{\ge 0} be the multiplicity of observation i in \mathcal{D}_b ([PAGE 1]). Let T_{i,b} denote the terminal node (leaf) of observation i in tree b, and let |T_{i,b}| \in \mathbb{Z}_{>0} be the number of observations in that node counted with repetition ([PAGE 1]). For a query prospect \vec{x}' \in \mathbb{R}^{p}, let T'_{b} = \text{leaf}_b(\vec{x}') be the terminal node into which the query falls in tree b.

Tree-level prediction operator for tree b:
\[
\hat{y}_b(\vec{x}') =
\frac{
\sum_{i=1}^{N} n_{i,b} \, y_i \, \mathbb{I}\{T_{i,b} = T'_{b}\}
}{
\sum_{i=1}^{N} n_{i,b} \, \mathbb{I}\{T_{i,b} = T'_{b}\}
}.
\]
The indicator \mathbb{I}\{\cdot\} equals 1 when training observation i and the query share the same leaf in tree b, and 0 otherwise. The weight n_{i,b}/|T_{i,b}| upweights observations that are frequent in the bootstrap and occur in smaller leaves ([PAGE 1]).

Random forest prediction operator:
\[
\hat{y}_{\text{RF}}(\vec{x}') = \frac{1}{B}\sum_{b=1}^{B} \hat{y}_b(\vec{x}').
\]

Similarity score operator (interpreted as adaptive k-NN weight between query \vec{x}' and training point \vec{x}_i):
\[
w_i(\vec{x}') = \frac{1}{B}\sum_{b=1}^{B} \frac{n_{i,b}}{|T_{i,b}|} \, \mathbb{I}\{T_{i,b} = T'_{b}\},
\]
normalized such that the prediction is a weighted mean \hat{y}_{\text{RF}}(\vec{x}') = \sum_i \tilde{w}_i(\vec{x}') \, y_i with \tilde{w}_i = w_i / \sum_j w_j. Higher similarity implies more frequent co-occurrence in terminal nodes across trees ([PAGE 1]).

Performance metrics ([PAGE 1]): test RMSE = 8.61 QBR points; proportion of variance explained = 43.7% (dimensionless R^2 = 0.437). Key predictors: final-season Heisman voting; passing stats per season (yards, TDs, completions); final-season strength of schedule. Multicollinearity constraint: \rho(\text{yards}, \text{TDs}) \ge 0.94, \rho(\text{yards}, \text{completions}) \ge 0.94, \rho(\text{TDs}, \text{completions}) \ge 0.94 (pairwise, per season).

Projected regressed NFL QBR for 2025 draft prospects ([PAGE 1]): Cam Ward 37.0; Dillon Gabriel 34.6; Shedeur Sanders 33.2; Jaxson Dart 24.0. Verbatim comp table fragment: “Johnny Manziel 2.3% ... Marcus Mariota 2.3% ... Baker Mayfield 2.2% ... Philip Rivers 2.1% ... Trevor Lawrence 2.0% ... Matt Leinart 2.0% ... Russell Wilson 2.0% ... Lamar Jackson 1.9% ... Deshaun Watson 1.9% ... Case Keenum 1.9%” for Cam Ward; “Mason Rudolph 2.0% ... Dwayne Haskins 1.9% ... Kenny Pickett 1.9% ... C.J. Stroud 1.9% ... Andrew Luck 1.9% ... Bo Nix 1.9% ... Trevor Lawrence 1.9% ... Philip Rivers 1.8% ... Aaron Rodgers 1.7% ... Bryce Young 1.6%” for Dillon Gabriel; “Mason Rudolph 1.9% ... Kenny Pickett 1.9% ... Philip Rivers 1.9% ... Ben Roethlisberger 1.8% ... Russell Wilson 1.8% ... Trevone Boykin 1.8% ... Kellen Moore 1.7% ... Andrew Luck 1.7% ... C.J. Stroud 1.7%” for Shedeur Sanders; “Teddy Bridgewater 1.9% ... Tajh Boyd 1.6% ... Russell Wilson 1.5% ... John Beck 1.5% ... Drake Maye 1.4% ... Zach Terrell 1.4% ... Kevin Hogan 1.2% ... Blake Bortles 1.2% ... Sam Howell 1.2% ... Patrick Mahomes 1.1%” for Jaxson Dart ([PAGE 1]).

Singularity and breakdown regimes: (i) if \sum_i n_{i,b}\mathbb{I}\{T_{i,b}=T'_{b}\} = 0, tree b yields 0/0 and the forest prediction is undefined for that tree; (ii) if all n_{i,b}=0 for a query in a sparse region, w_i(\vec{x}') = 0 for all i and similarity provides no neighborhood; (iii) regression to zero breaks down when NFL season count is 1–2 because the shrinkage target is unstated and variance of y_i is high; (iv) multicollinearity \rho \ge 0.94 makes the gradient of variable importance with respect to any single passing statistic numerically non-identifiable.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week trap identification.

The methodological lineage runs from Breiman-style random forests (implicit in the ranger/tuneRanger citations on [PAGE 1]) through Lin & Jeon (2006), “Random forests and adaptive nearest neighbors,” Journal of the American Statistical Association, 101(474), 578–590 ([PAGE 1]), which proves that a random forest induces a data-adaptive weighted k-NN metric. The k-NN idea traces to Cover & Hart (1967) nearest-neighbor pattern classification, but the paper’s novelty is using forest leaf co-occurrence as the similarity kernel rather than a fixed Euclidean or Mahalanobis distance. The outcome variable, NFL Total QBR, descends from Burke (2016), ESPN’s EPA-based expected-points quarterback rating that adjusts for home-field, defensive strength, and garbage time ([PAGE 1]). The software artifact is the R package treecomp (github.com/elisabethmill/treecomp), presented at the New England Symposium on Statistics in Sports (NESSIS) 2025 by authors affiliated with Rice University’s Department of Kinesiology and Department of Sport Management ([PAGE 1]).

Multi-week traps: Draft preparation unfolds over weeks, but the model uses a static final-season college feature vector. Trap one: week-to-week scout reports introduce new information (pro-day measurables, medical re-checks, interview impressions) that is orthogonal to \vec{x}_i, yet the comp list anchors the front office to historical archetypes printed pre-draft. Trap two: regression to zero penalizes late-season breakout seniors with small sample sizes, causing the model to under-project players whose final college games were strong but few; as the draft approaches, teams may overreact to tape and overweight recency, creating divergence from the model’s static projection. Trap three: because passing yards, touchdowns, and completions are pairwise correlated at \ge 0.94 ([PAGE 1]), weekly stat updates that move in lockstep produce no new information, yet variable importance rankings may appear to shift week-to-week due to bootstrap noise, prompting spurious comp revisions. Trap four: the comp lists include quarterbacks from different offensive eras (e.g., Johnny Manziel, Marcus Mariota, Russell Wilson, Patrick Mahomes); if NFL scheme trends (RPO frequency, shotgun rate, designed quarterback runs) shifted between the training years and 2025, leaf co-occurrence no longer implies comparable NFL usage, and the comp set becomes a historical fiction rather than a transportable neighborhood.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression: when the draft clock is running and a team is on the clock, the general manager regresses to a familiar narrative comp (“the next Russell Wilson” or “the next Johnny Manziel”) rather than interrogating the forest’s leaf weights. The model’s similarity percentages (e.g., Manziel 2.3% for Ward on [PAGE 1]) are small and diffuse, but under time pressure the decision-maker treats the top printed comp as a causal identity, not a statistical neighbor. This is a mode error: the model says Ward shares terminal-node space with Manziel in a subset of trees; the human hears “Ward is Manziel.”

Counter-trap: because front offices must consider non-quantifiable information ([PAGE 1]), a team can use the comp list as a justification layer for a non-model override. If the model projects Shedeur Sanders at 33.2 with comps Rudolph, Pickett, Rivers, and Roethlisberger ([PAGE 1]), a team might trade up for him citing “pro pedigree” and “NFL bloodline”—variables absent from \vec{x}—using the comp list as social proof. The counter-trap is that the opposing front office anticipates this narrative, believes Sanders will be overdrafted because of the comp story, and trades down to accumulate capital, leaving the first team with a reach pick. Recursion depth: Team A models Team B as comp-sensitive; Team B models Team A as comp-sensitive; both adjust draft order away from the QBR projection, and the realized draft position becomes a function of second-order beliefs about comps, not first-order QBR estimates.

Clock: The first-round draft clock imposes a hard decision horizon (minutes per pick in later rounds, compressed in the first). The random forest requires B tree traversals and similarity aggregation; under clock pressure, the organization cannot recompute weights or test alternate feature subsets. The similarity score, which is supposed to be an information-rich nearest-neighbor diagnostic, collapses into a single retrieval cue: the top comp name. The clock converts a continuous weight w_i(\vec{x}') into a discrete categorical anchor. Consequently, the difference between Ward (37.0) and Dart (24.0) may be ignored in the moment if both share a similarly famous comp, or the 13-point gap may be over-weighted if one comp is a star and the other is a bust. The theory-of-mind failure is treating comp similarity as both a predictive statistic and a draft-market signal simultaneously.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

The feature vector \vec{x}_i \in \mathbb{R}^{p} contains only college passing statistics, rushing statistics, strength of schedule, games played, conference, team, and awards ([PAGE 1]). It excludes physical measurables, injury history, and game-condition metadata. Therefore any veto condition orthogonal to these features renders the model’s prediction non-identifiable with respect to NFL success, and a human veto is epistemically required.

Physical layer: throwing velocity, release height, hand size, arm length, and height/weight are absent. Veto rule: if a prospect’s physical measurables fall outside the historical NFL threshold for the position (e.g., hand size below league minimum for reliable ball security in cold weather) despite a high similarity score to a successful comp, the QBR projection must be vetoed. Example from [PAGE 1]: Ward’s top comp includes Manziel (2.3%), a quarterback whose NFL durability was constrained by physical style; if Ward’s physical profile indicates similar susceptibility, the comp similarity cannot override the physical veto.

Biomechanical layer: shoulder, elbow, ACL, and concussion history are absent. A quarterback with a college QBR trajectory similar to Philip Rivers (a comp for Gabriel, Sanders, and Ward on [PAGE 1]) but with a throwing-shoulder labral tear faces a different NFL durability distribution. Veto rule: any documented major throwing-arm surgery or recurrent lower-body injury invalidates the transportability of the comp’s NFL QBR to this prospect, regardless of w_i.

Weather layer: strength of schedule is included ([PAGE 1]), but dome-versus-outdoor splits, cold-weather game frequency, and precipitation are not. QBR is EPA-based and adjusts for game context ([PAGE 1]; Burke, 2016), but the college features do not separate a quarterback who played every home game in a dome from one who played in cold-weather outdoor stadiums. A dome quarterback with inflated passing yards and completion percentage may be similar in leaf space to an outdoor quarterback, but the outdoor comp’s NFL QBR may be depressed by weather not represented in \vec{x}. Veto rule: if the prospect played in a climate-controlled or warm-weather conference and the comp played outdoors (or vice versa), and the projection relies on passing-efficiency stats, the QBR estimate must be adjusted downward for the outdoor transition or vetoed outright.

Veto proof: Because \vec{x} does not span the physical, medical, or meteorological subspaces, the conditional independence assumption \text{NFL QBR} \perp \text{veto features} \mid \vec{x} is false. Any veto feature that is predictive of NFL QBR and correlated with college stats creates omitted-variable bias; therefore the model output is a necessary but insufficient statistic, and a cross-layer veto is not optional but mandatory when physical/biomechanical/weather evidence contradicts the comp neighborhood.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios with predictions.

Scenario 1 (Physical-comps mismatch veto): Cam Ward’s top comp is Johnny Manziel at 2.3% similarity ([PAGE 1]), and Ward’s projected QBR is 37.0 ([PAGE 1]). Veto trigger: Ward’s measured hand size is below 9.0 inches and his pro-day tape shows inconsistent footwork under pressure, a physical profile associated with higher NFL fumble and injury rates not represented in \vec{x}. RLVR veto: reject the 37.0 projection. Verifiable prediction: Ward’s observed NFL QBR across his first two seasons will fall at least one RMSE below projection, i.e., below 37.0 − 8.61 = 28.39 QBR points, with probability elevated relative to the model’s implied error distribution because the physical veto removes the assumption that Manziel-like college play is transportable.

Scenario 2 (Regression-to-zero small-sample veto): Shedeur Sanders is projected at 33.2 with comps Rudolph, Pickett, Rivers, and Roethlisberger ([PAGE 1]). Veto trigger: Sanders’ final college season includes fewer than 200 passing attempts, meaning the regressed QBR response variable y_i was heavily shrunk toward zero and the Heisman voting variable (a key predictor on [PAGE 1]) reflects a small-sample spike rather than a stable rate. RLVR veto: reject the 33.2 projection for small-sample seniors. Verifiable prediction: Sanders’ actual NFL QBR, conditional on playing at least 8 games, will regress toward zero by more than 40% relative to the model’s point estimate, landing below 20.0 QBR points in the first season, because the model’s zero-regression assumption understates attenuation for limited-exposure prospects.

Scenario 3 (Multicollinearity attribution veto): Jaxson Dart is projected at 24.0 ([PAGE 1]). Passing yards, touchdowns, and completions are pairwise correlated at \ge 0.94 ([PAGE 1]), so the model cannot separate passing-volume success from rushing-driven efficiency. Veto trigger: Dart’s college production was driven primarily by rushing touchdowns and designed quarterback runs rather than pocket passing, yet his comps are predominantly pocket passers (Bridgewater, Boyd, Wilson, Beck, Maye on [PAGE 1]). RLVR veto: when rushing touchdowns exceed passing touchdowns and the top comps are non-mobile quarterbacks, invalidate the projection. Verifiable prediction: Dart’s actual NFL QBR will drop more than 10 points below the projected 24.0 (i.e., below 14.0) in seasons where he is required to play from the pocket under pressure, because the multicollinear passing stats misattributed mobility-driven success to a passing archeotype that does not match his biomechanical role.
</RLVR_COUNTERFACTUAL_VETOES>