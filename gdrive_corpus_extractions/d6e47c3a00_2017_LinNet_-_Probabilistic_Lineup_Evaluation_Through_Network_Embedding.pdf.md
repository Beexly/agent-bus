---
source: "2017 LinNet - Probabilistic Lineup Evaluation Through Network Embedding.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4212
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper (LinNet: Probabilistic Lineup Evaluation Through Network Embedding) and produce output with specific XML sections, adhering to strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully read the source text provided (10 pages) and produce a rigorous, technical analysis.

Key content from paper:
- LinNet: matchup network G=(V,E,W), nodes are lineups, edge i->j iff lineup j outperformed lineup i. Weight = performance margin (point margin per minute). [PAGE 1]
- node2vec embedding f: V -> R^d. Optimization: max_f sum_u log(Pr[NR(u)|f(u)]). [PAGE 2, Eq 1]
- node2vec params p=0.5, q=3, 3000 walks, 3500 hops, d=128. [PAGE 3]
- Unnormalized transition probability pi_ux = alpha * pq(v,x) * w_ux. [PAGE 3]
- Bradley-Terry model: Pr(lambda_i > lambda_j | pi_i, pi_j) = e^(pi_i - pi_j) / (1 + e^(pi_i - pi_j)). [PAGE 3, Eq 2]
- Difference in ability: sum_{r=1}^k alpha_r (z_ir - z_jr) + U, U ~ N(0, sigma^2). [PAGE 3, Eq 3]
- Unseen lineups: weighted average based on common players similarity sigma_lambda_i, lambda_j (0 to 4). x_lambda_i = (sum sigma * x_j) / (sum sigma). [PAGE 3-4, Eq 4]
- Baselines: PageRank r = D(D - alpha A)^-1 1 [PAGE 4, Eq 5]. APM regression y = a^T p [PAGE 5, Eq 6], lineup rating rho_lambda_i = average APM [Eq 7].
- Dataset: NBA 2007-08 to 2011-12, 5 seasons. Aggregate info: total time, total point differential, players of each lineup. [PAGE 5]
- Evaluation: 80% train, 20% test. Metrics: accuracy, Brier score, calibration curves. [PAGE 6]
- Accuracy: LinNet 67%, APM 55%, PageRank 53%. [PAGE 6]
- Brier score beta = 1/N sum (pi_i - y_i)^2. LinNet beta=0.19, reference climatology beta_base=0.25. [PAGE 6]
- Calibration: linear fit intercept 0.1, slope 0.85. [PAGE 8]
- Team rating r(tau) = weighted average of p_lambda_i by minutes gamma_i. [PAGE 8, Eq 9]
- Correlation with win-loss: r=0.53, explains 27% variability (R^2 presumably). Outliers: 2008-09 Cavaliers, 2011-12 Nets. [PAGE 8-9]
- Limitations: short matchups reliability, unseen lineups heuristic. [PAGE 9]

Now I need to structure this into the required XML sections with >=1000 words total, and THINK_TRACE >=400 words.

Important: No betting lines. I can mention probabilities, accuracy, Brier score, but NOT spreads, totals, moneylines, odds. I must be careful not to use the word "odds" in a betting context. Probabilities are fine since they are information-theoretic/probability units, not betting odds.

I need to cite exact [PAGE N] markers and verbatim quotes.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. >=400 words.
- Derive how LinNet goes from raw lineup matchup data to latent features to Bradley-Terry probability.
- Multi-hop: matchup network -> node2vec (2nd order random walks) -> latent space -> logistic regression / Bradley-Terry -> probability.
- Gray zones: unseen lineup heuristic is ad-hoc weighted average; short matchups (< few minutes) create reliability issues; per-minute margin may not scale; team rating explains only 27% of win-loss variance; correlation r=0.53; coaching/injuries mean best lineup not always used; node2vec parameters p=0.5, q=3 chosen for structural equivalence not proximity; dimensionality d=128 diminishing returns.
- Singularity/breakdown: if a lineup has zero edges (never played), embedding undefined; if similarity sum is zero for unseen lineup (no common players with any seen lineup), Eq 4 denominator is zero -> singularity; if matchup duration is too short, point margin per minute has high variance (small sample noise); Bradley-Terry assumes transitivity and independent comparisons, which may fail in networked lineup data.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- List equations with page numbers.
- Eq 1 node2vec objective [PAGE 2]
- Eq 2 Bradley-Terry [PAGE 3]
- Eq 3 ability difference [PAGE 3]
- Eq 4 unseen lineup feature [PAGE 4]
- Eq 5 PageRank [PAGE 4]
- Eq 6 APM regression [PAGE 5]
- Eq 7 lineup APM average [PAGE 5]
- Eq 8 Brier score [PAGE 6]
- Eq 9 team rating [PAGE 8]
- Transition probability piecewise [PAGE 3]
- Units: point margin per minute (points/min), latent dimension d dimensionless (128), walks count 3000, hops 3500, probability unitless [0,1], Brier score unitless [0,1], accuracy unitless %, minutes (48 min game).
- Assumptions: edge direction definition (note potential confusion: paper abstract says edge from j to i if lambda_i outperformed lambda_j, but Definition 1.1 says edge e_i,j points from i to j iff lineup j outperformed lineup i. Need to flag this directional inconsistency as a gray zone).
- Breakdown regimes: d < ~100 no benefit over baselines; d > 128 diminishing returns; short matchups; unseen lineups with zero overlap.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: node2vec (Grover & Leskovec 2016) [PAGE 3 ref 1], Bradley-Terry (Agresti 2007) [ref 2], SportsNetRank (Pelechrinis et al 2016) [ref 3], Brier (1950) [ref 4], Mason (2004) climatology [ref 5].
- Plus/minus tradition in NBA. APM controls for teammates/opponents.
- Multi-week traps: overfitting to a single season's network topology; assuming stationarity across weeks when injuries/rotations change lineup distribution; using 80/20 split within season may leak temporal information if matchups are not temporally partitioned (random split vs time-split). The paper uses 80% of matchups randomly? It says "build each model using 80% of the matchups and evaluate on remaining 20%". If not time-ordered, this is a leakage trap (future matchups in training). This is a critical multi-week trap.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- This is a more abstract section. Need to interpret through the lens of the paper.
- Crisis habit regression: coaches under pressure revert to known lineups (star lineups), reducing exploration of the matchup network, causing the network to become sparse or biased toward historical edges. LinNet's embedding assumes observed edges reflect performance, but if crisis coaching reduces lineup variety, the network doesn't cover the counterfactual space.
- Counter-trap: opponent anticipates your crisis lineup and deploys a specific counter-lineup; LinNet's pairwise probability doesn't account for sequential adaptation within a game (coach A sees coach B's lineup and adjusts). The model is static, not dynamic game-theoretic.
- Clock: matchup duration (total time) is a covariate in team rating (gamma_i weights by minutes), but short matchups (< few possessions) create high-variance margin-per-minute estimates. The clock (possession clock, game clock) means a lineup performing well for 2 minutes may not sustain over 48. LinNet explicitly notes this limitation [PAGE 9].
- Need to write this in the requested voice/conceptual frame.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- This section should discuss factors outside the model that would veto its predictions.
- Physical: player fatigue, load management, injuries (lineup unavailable). Paper mentions injuries and availability [PAGE 8].
- Biomechanical: player-specific exertion, recovery time between games (back-to-backs), which affects whether a lineup can be fielded or perform at embedded level.
- Weather: NBA is indoor, so weather is largely irrelevant, but travel (time zones) and arena altitude could be minor; however, the model takes no external features, only lineup matchup performance [PAGE 1 abstract]. So any veto factor not in the lineup identity/matchup history is excluded by design.
- "Veto proof" means showing what the model cannot see and thus cannot predict. Since input is only lineups' matchup performances, no sport-specific features [PAGE 1]. Therefore a veto layer (injury report, fatigue, travel) is external and would invalidate a prediction if active.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. The user likely wants concrete, falsifiable scenarios where LinNet would fail.
- Scenario 1: Unseen lineup with zero player overlap with any historical lineup for that team. Eq 4 denominator sum is zero -> singularity. Prediction: LinNet cannot produce a latent vector; model fails or defaults to prior.
- Scenario 2: Matchup duration below threshold (e.g., < 2 minutes / < 4 possessions). Per-minute margin has high variance; LinNet's edge weight unreliable. Prediction: accuracy drops significantly below 67% for short-duration matchups; calibration curve deviates from y=x (overconfident).
- Scenario 3: Temporal distribution shift / roster change mid-season (trade deadline, injury). Training on 80% of matchups includes lineups that no longer exist; test set contains new lineups not represented in network. Prediction: out-of-sample accuracy collapses toward climatology (50%) or PageRank/APM baseline levels; Brier score rises toward 0.25.
- Must include verifiable predictions (metrics: accuracy, Brier score, calibration slope/intercept).

Word count: Need >=1000 words total. THINK_TRACE >=400 words. I'll aim for roughly:
- THINK_TRACE: ~450 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~350 words
- RETROCAUSAL_GENEALOGY: ~300 words
- RECURSIVE_THEORY_OF_MIND: ~300 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~250 words
Total ~1900 words. Safe.

Need to be careful with "odds" - do not use it. Use "probability" or "likelihood". Also avoid "spread", "total", "moneyline".

Need verbatim quotes and [PAGE N] citations. I'll quote key phrases.

Let's write.

Check THINK_TRACE word count as I draft. I need to make sure it's over 400 words.

Drafting THINK_TRACE:

The derivation proceeds through four distinct transformations... etc. I'll write detailed paragraphs.

Also note the directional inconsistency: Abstract says edge from j to i exists if lambda_i outperformed lambda_j. Definition 1.1 says edge e_i,j points from i to j iff lineup j outperformed lineup i. These are actually consistent if read carefully? Abstract: edge from node j to node i exists if lineup lambda_i has outperformed lineup lambda_j. So j -> i means i beat j. Definition: e_i,j points from i to j iff lineup j outperformed lineup i. So i -> j means j beat i. These are opposite! If j->i means i beat j, then i->j means j beat i. Definition says i->j iff j outperformed i. So i->j means j beat i. Wait, that's the same: j->i means i beat j. i->j means j beat i. So if i beats j, edge is j->i (from loser to winner?). Let's parse carefully.

Abstract: "an edge from node j to node i exists if lineup λi has outperformed lineup λj." So winner is i, edge is j -> i (loser points to winner). Definition 1.1: "An edge e_i,j ∈ E points from node i ∈ V to node j ∈ V iff lineup j has outperformed lineup i." So if j outperformed i, edge i -> j (loser points to winner). So both say loser points to winner. Wait: abstract says edge from j to i if i outperformed j. So j (loser) -> i (winner). Definition says edge from i to j if j outperformed i. So i (loser) -> j (winner). These are consistent if we just relabel indices: the direction is from the underperformed lineup to the outperforming lineup. However, the notation in abstract uses j as source and i as target when i wins, while definition uses i as source and j as target when j wins. It's consistent directionally (loser -> winner) but the index naming is swapped between abstract and definition. It's a minor notational gray zone but worth flagging.

Actually, let's check: abstract: edge from node j to node i exists if lineup λi has outperformed lineup λj. Source = j, target = i. Condition: i outperformed j. So edge points from the worse lineup to the better lineup. Definition: edge e_i,j points from node i to node j iff lineup j has outperformed lineup i. Source = i, target = j. Condition: j outperformed i. Again source is worse, target is better. So direction is consistently worse -> better. The variable names are just swapped. Fine.

But wait, the unnormalized transition probability π_ux = α_pq(v,x) · w_ux. If edges point from worse to better, then random walks flow from bad lineups to good lineups. This means good lineups are sinks (high in-degree). Node2vec will embed nodes based on this flow. Structural equivalence is targeted (p=0.5, q=3), not homophily. So lineups with similar connection patterns (e.g., both beat the same set of opponents) embed close together.

I'll mention this in THINK_TRACE.

Now writing all sections.

Ensure no mention of betting odds/spreads/totals/moneylines. I will use "probability", "accuracy", "Brier score", "calibration".

Let's produce final answer with exact XML tags.

One thing: The user said "STRICT INVARIANTS" and listed sections. I must output ONLY the XML sections? Or can I have an intro? The prompt says "across these exact XML sections". I'll output just the sections to be safe, wrapped in a root maybe? The user didn't specify a root. I'll just output the six sections sequentially. Probably fine.

Need to cite page markers like [PAGE 1], [PAGE 2], etc.

Let's draft carefully.

I need to ensure THINK_TRACE is >=400 words. I'll count mentally. It will be substantial.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
LinNet's derivation is a four-stage transformation of raw lineup matchup logs into calibrated win probabilities. Stage one constructs the weighted directed matchup network G = (V, E, W). Each node v ∈ V represents a unique five-player lineup. According to Definition 1.1 on [PAGE 1], an edge e_{i,j} points from node i to node j iff lineup j has outperformed lineup i, and the edge weight w_{i,j} equals the performance margin (point margin per minute). A gray-zone notational tension exists between the abstract and Definition 1.1 regarding index ordering (the abstract describes an edge from j to i when λi outperforms λj, while Definition 1.1 describes an edge from i to j when λj outperforms λi); both imply a loser-to-winner direction, but the variable naming is inverted, which creates ambiguity when implementing the adjacency matrix orientation without inspecting the code.

Stage two projects V into a latent space via node2vec. The optimization in Eq. (1) on [PAGE 2] maximizes the log-likelihood of observing a node's network neighborhood conditioned on its embedding: max_f Σ_{u∈V} log(Pr[N_R(u) | f(u)]). The random-walk transition is second-order and biased by parameters p and q. On [PAGE 3], the unnormalized transition probability π_{u,x} = α_{pq}(v,x) · w_{u,x} is given piecewise: 1/p if d_{ux}=0 (return), 1 if d_{ux}=1 (local step), and 1/q if d_{ux}=2 (in-out step). LinNet selects p = 0.5 and q = 3 to target structurally equivalent nodes rather than proximate ones, generating 3,000 walks of 3,500 hops each and setting latent dimensionality d = 128. This means the embedding captures role-based similarity (e.g., two lineups that both defeat the same opponent classes) rather than direct edge proximity.

Stage three applies the Bradley-Terry model on top of the embedding. Eq. (2) on [PAGE 3] defines Pr(λi ≻ λj | π_i, π_j) = e^{π_i - π_j} / (1 + e^{π_i - π_j}). Eq. (3) expresses ability difference as Σ_{r=1}^k α_r(z_{ir} - z_{jr}) + U, where U ~ N(0, σ^2) and z vectors are the learned latent features x_{λi}. This is a generalized linear model with Gaussian noise on the logit scale.

Stage four handles previously unseen lineups. Eq. (4) on [PAGE 4] assigns x_{λi} as a weighted average of seen lineups, weighted by the number of common players σ_{λi,λj}, which ranges from 0 to 4. The authors explicitly call this a heuristic [PAGE 4].

Gray-zone audit: (1) Singularity — if an unseen lineup shares zero players with all historical lineups for its team, the denominator in Eq. (4) is zero and the feature vector is undefined. (2) Reliability — the paper itself warns on [PAGE 9] that matchups lasting only a few minutes or possessions create noisy per-minute margins; there is no minimum-duration filter in the network construction, so edges can be generated from 30-second garbage-time stints. (3) Stationarity — the train/test split uses 80% and 20% of matchups without confirming temporal ordering [PAGE 6], risking leakage if future lineups appear in training. (4) Transitivity — Bradley-Terry assumes independent pairwise comparisons, but lineup matchups are nested within games and teams, violating independence. (5) Variance explained — the team rating in Eq. (9) on [PAGE 8] correlates with win-loss at r = 0.53 but explains only 27% of variability [PAGE 8-9], indicating substantial unmodeled coaching and availability variance. Breakdown regime: embedding dimensionality below ~100 offers no baseline advantage, while d > 128 yields diminishing returns [PAGE 7, Figure 5].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations extracted verbatim with page citations:

[PAGE 1] Definition 1.1: Matchup network G = (V, E, W); edge e_{i,j} ∈ E points from node i to node j iff lineup j outperformed lineup i; weight w_{i,j} = performance margin (point margin per minute).

[PAGE 2] Eq. (1) node2vec objective: max_f Σ_{u∈V} log(Pr[N_R(u) | f(u)]). Units: f : V → ℝ^d, d dimensionless (set to 128).

[PAGE 3] Transition probability: π_{u,x} = { 1/p if d_{ux} = 0; 1 if d_{ux} = 1; 1/q if d_{ux} = 2 }. Parameters used: p = 0.5, q = 3, 3,000 walks, 3,500 hops per walk.

[PAGE 3] Eq. (2) Bradley-Terry: Pr(λi ≻ λj | π_i, π_j) = e^{π_i - π_j} / (1 + e^{π_i - π_j}). Output unit: probability in [0, 1].

[PAGE 3] Eq. (3) Ability difference: Σ_{r=1}^k α_r(z_{ir} - z_{jr}) + U, U ∼ N(0, σ^2). Explanatory variables z are latent features x_{λi}.

[PAGE 4] Eq. (4) Unseen lineup heuristic: x_{λi} = (Σ_{λj∈L_T} σ_{λi,λj} · x_j) / (Σ_{λj∈L_T} σ_{λi,λj}). Similarity σ ∈ {0,1,2,3,4} counts common players.

[PAGE 4] Eq. (5) PageRank baseline: r = D(D - αA)^{-1}1, with α = 0.85 and d_{ii} = max(1, k_{i,out}).

[PAGE 5] Eq. (6) APM regression: y = a^T p, where p_n = +1 for home lineup players, -1 for visiting, 0 otherwise. Dependent variable y = point differential per 48 minutes.

[PAGE 5] Eq. (7) Lineup APM rating: ρ_{λi} = (1/5) Σ_{p_n ∈ λi} a_{p_n}.

[PAGE 6] Eq. (8) Brier score: β = (1/N) Σ_{i=1}^N (π_i - y_i)^2. LinNet average β = 0.19; climatology reference β_base = 0.25 (probability 0.5 assigned to every observation).

[PAGE 8] Eq. (9) Team rating: r(τ) = (Σ_{λi∈L_τ} γ_i · p_{λi}) / (Σ_{λi∈L_τ} γ_i), where γ_i = total minutes lineup λi played and p_{λi} = average probability of outperforming opponent lineups.

Reported performance metrics [PAGE 6]: LinNet accuracy 67%, APM 55%, PageRank 53%. Calibration curve [PAGE 8]: linear fit intercept 0.1, slope 0.85 relative to y = x. Team rating vs. win-loss [PAGE 8-9]: correlation coefficient 0.53 (p < 0.0001), R^2 ≈ 0.27, outliers 2008-09 Cavaliers and 2011-12 Nets. Dataset [PAGE 5]: NBA seasons 2007-08 through 2011-12; inputs are total matchup time, total point differential, and player rosters for each lineup pair.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
LinNet descends from three distinct lineages. First, the network-embedding layer inherits directly from node2vec (Grover & Leskovec, 2016) [PAGE 3, reference 1], which itself generalizes Skip-gram language models to graph nodes via biased random walks. LinNet's specific contribution is to treat lineups as nodes and matchup performance margins as edge weights, a topology-first representation requiring no sport-specific features [PAGE 1]. Second, the Bradley-Terry layer traces to classical paired-comparison theory (Agresti, 2007) [PAGE 3, reference 2], repurposed here to map latent embedding differences onto win probabilities. Third, the evaluation lineage includes SportsNetRank (Pelechrinis et al., 2016) [PAGE 4, reference 3], which demonstrated that network-based team rankings outperform win-loss percentage, and the Brier score verification framework (Brier, 1950; Mason, 2004) [PAGE 6, references 4-5] used for calibration.

The critical multi-week trap lies in temporal stationarity. The paper trains on 80% of matchups and tests on the remaining 20% within each season [PAGE 6]. If that split is random rather than chronologically ordered, future matchups (including lineups created by mid-season trades or injuries) leak into training, inflating the reported 67% accuracy. A genuine multi-week deployment would face roster turnover: by Week 10, the set of observed lineups L differs materially from Week 1. LinNet's unseen-lineup heuristic (Eq. 4, [PAGE 4]) mitigates this only partially, because it assumes latent features can be approximated by player overlap, which breaks when a team introduces an entirely new player via trade. The historical lineage therefore contains a built-in fragility: the method is inductive on observed network topology, but NBA lineup networks are non-stationary across weeks due to injuries, load management, and tactical rotation shifts. Any retrospective validation that ignores this temporal drift risks overestimating out-of-season generalization.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes how coaches under pressure revert to a narrow set of trusted lineups, shrinking the effective support of the matchup network. LinNet's edge set G is built from observed lineup pairings [PAGE 5]; if coaches stop experimenting during high-stakes stretches, the network becomes sparse and biased toward historical star combinations, which degrades node2vec's ability to learn structurally equivalent alternatives. The model then assigns probabilities based on a graph that no longer represents the feasible counterfactual space.

The counter-trap is dynamic opponent adjustment. LinNet outputs a static pairwise probability Pr(λi ≻ λj) [PAGE 3, Eq. 2] that assumes both lineups are fixed. In an actual game, Coach A deploys λi, Coach B observes and counters with λj, and the matchup unfolds as a sequential game. Because LinNet has no game-state or clock-dependent layer, it cannot model in-game counter-picking. A lineup that is embedded as strong against a static opponent may collapse when the opponent intentionally switches defensive schemes mid-matchup.

The clock layer concerns matchup duration. LinNet weights edges by point margin per minute [PAGE 1], but the paper explicitly notes that short matchups of only a few minutes or possessions create reliability issues [PAGE 9], and team ratings weight lineups by total minutes γ_i [PAGE 8, Eq. 9]. This means a lineup that dominates for a two-minute spur receives equal network standing with one that sustains performance over ten minutes, unless duration is externally filtered. The possession clock (24 seconds) and game clock (48 minutes) impose physical limits on how much evidence a single edge contributes; LinNet does not model fatigue accumulation across a game, so a lineup's embedded ability may not reflect its fourth-quarter performance. Recursively, if a coach believes LinNet favors a particular lineup, they may overplay it, accelerating fatigue and invalidating the very edge weights that justified its selection.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
LinNet's input layer is minimal: only lineup identities and matchup performance margins (point margin per minute) are required [PAGE 1, Abstract]. This genericity is also its vulnerability. A physical veto arises from player availability and injury: the paper acknowledges that a lineup can be unavailable due to injuries, which breaks the correlation between LinNet team ratings and win-loss records [PAGE 8]. If a star player is ruled out, the lineup node λi may not exist in G, and Eq. (4) on [PAGE 4] must synthesize its features from partial overlap; this is not veto-proof because zero-overlap yields a zero denominator.

A biomechanical veto arises from fatigue and load management. The model contains no minutes-played, back-to-back, or recovery variable in the edge weight or embedding. A lineup that performed well in its first appearance may be physically incapable of repeating that performance in a second game 24 hours later. Because node2vec treats each edge as static evidence of performance [PAGE 2-3], embedded ability does not decay with cumulative load, producing false positives for fatigued lineups.

Weather is largely inapplicable because NBA games are indoor; however, travel and arena altitude constitute environmental covariates absent from the model. Since LinNet explicitly rejects sport-specific features [PAGE 1], it cannot adjust for east-to-west travel or high-altitude venues. Any cross-layer veto system must therefore pre-filter LinNet outputs using external signals (injury reports, load metrics, travel schedules). If any veto flag is active, the predicted probability from Eq. (2) should be disregarded or regressed toward the climatological baseline of 0.5 [PAGE 6]. The model is not veto-proof; it is veto-blind by design.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios:

Scenario 1: Zero-overlap unseen lineup. Construct a test matchup where team T fields a lineup sharing zero players with any lineup T used during the 80% training window. Under Eq. (4) on [PAGE 4], the denominator Σσ_{λi,λj} = 0, creating a singularity. Prediction: LinNet cannot compute x_{λi}; if the implementation defaults to a null vector or prior, accuracy for these instances collapses to the climatological baseline (50% accuracy, Brier score ≈ 0.25 [PAGE 6]), and calibration slope deviates significantly from the reported 0.85 [PAGE 8].

Scenario 2: Ultra-short matchup duration. Select test matchups where total time on court is below 2 minutes (approximately 4 possessions). Because edge weights are point margin per minute [PAGE 1], small-sample noise dominates; the paper warns on [PAGE 9] that such matchups create reliability issues. Prediction: accuracy for this stratum drops well below the aggregate 67%, likely toward 50-55%, and Brier score rises above 0.19, with the calibration curve exhibiting overconfidence (predicted probabilities far from observed frequencies).

Scenario 3: Mid-season roster regime shift. Partition data temporally: train on Weeks 1-10 of a season, test on Weeks 11-20 after a major trade or injury alters the team's lineup distribution. This violates the i.i.d. assumption implicit in the random 80/20 split on [PAGE 6]. Prediction: out-of-sample accuracy falls from 67% toward the PageRank baseline of 53% or APM baseline of 55%, and Brier score approaches 0.25, demonstrating that LinNet's static embedding cannot track non-stationary lineup distributions without retraining.
</RLVR_COUNTERFACTUAL_VETOES>