---
source: "2024 - Modelling Team Play Style Using Tracking Data to Evaluate the Effectiveness of Variance in Tactical Behaviour - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2024"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4654
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about modeling team play style using tracking data to evaluate variance in tactical behavior. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided pages 1-16 in the source text, but said PAGES: 11. Let me look at the page markers. The text shows page numbers 1 through 16 at various points. The user says PAGES: 11 but provides text that goes to page 16. I should cite based on the visible page markers in the text. The page markers appear as bold numbers: **1**, **2**, **3**, etc. I need to cite exact [PAGE N] markers.

Let me structure the response carefully.

First, understand the paper:
- Author: Michael Gleeson, University College Dublin
- Title: Modelling Team Play Style Using Tracking Data to Evaluate the Effectiveness of Variance in Tactical Behaviour
- Uses tracking and event data
- Variables: passes completed per possession, pass accuracy, xG, net-OBV, expected pass completion, Balance Score
- Mitigates team strength bias by using xG per shot instead of xG per team
- Time periods: Early (0-25), Interim (25-75), Late (75-end)
- Game-state: Winning, Draw, Losing
- Context: previous period game state
- Gower's Distance for mixed categorical/numerical data
- Similarity S defined, weights w=1
- For binary s=1 or 0; for continuous s_ijk = 1 - |x_iR - x_kj| / R_k where R_k is range
- Gower's Distance dissimilarity matrix
- Average variance computation (equation shown as image text, garbled)
- Hierarchical clustering with Ward's Method
- 4 clusters: Positive, Direct, Passive, Balanced
- Game theory analysis for final minutes (drawing at 75 min)
- Payoff matrix for Home/Away teams playing Dissimilarly (D) or Similarly (S)
- NE is (S,S) with payoffs (0.31, -0.06) - wait, the matrix shows for Away Team columns D,S and Home Team rows D,S:
  - (D,D): (0.33, -0.22)
  - (D,S): (0.11, 0.11)
  - (S,D): (0.86, -0.43)
  - (S,S): (0.31, -0.06)
  Wait, let me re-read:
  |||Away|Team||
  ||3837317|**D**|**S**||
  |Home|**D**|(**0.33, -0.22**)|(**0.11,0.11**)|
  |Team|**S**|(**0.86, -0.43**)|(**0.31, -0.06**)|

  Actually the formatting is messy. It says Home Team rows, Away Team columns. Payoffs are (home, away).
  - D,D: (0.33, -0.22)
  - D,S: (0.11, 0.11)
  - S,D: (0.86, -0.43)
  - S,S: (0.31, -0.06)

  The text says: "As (S) strictly dominates (D) for both the Away Team and the Home Team, the NE is (S,S), with payoffs (0.31, -0.06)."

- Cluster frequency table and points gained per match table for cluster pairings between 50-75 min and 75+ min periods.
- Conclusion: variance may have positive correlation but inconclusive due to small sample size.

Important: No betting lines. Don't mention odds, spreads, moneylines. The payoff matrix uses "points won/lost" which is fine as it's game theory payoffs in points, not betting odds. But I must be careful not to frame them as betting odds.

No toy equations. I must state formal LaTeX equations, units, assumptions, breakdown regimes. Cite exact page markers [PAGE N].

Word count: >=1,000 words total across sections. THINK_TRACE needs >=400 words.

Let me draft each section.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to analyze the paper's methodology, identify gray zones, derive implications. Multi-hop: from data collection -> Gower's distance -> clustering -> game theory -> conclusions. Gray zones: small sample size, team strength bias, manager bias, cluster labels being team-specific, game theory payoff interpretation, causal ambiguity.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. I need to write out Gower's similarity, Ward's method objective, t-test formula, payoff matrix as LaTeX, cluster definitions. Units: dimensionless similarity [0,1], minutes, percentages (%), xG (dimensionless probability), points (dimensionless count). Page citations for each.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage. Gower 1971, Ward 1963, Ruxton 2006, Fabius Maximus historical analogy, Klopp/Plan B cliché, Conte vs Postecoglou at Spurs. Multi-week traps: managerial changes mid-season, key player suspensions (Ivan Toney), key player sales (Caicedo, Mac Allister), tactical inertia vs adaptation over a season.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. How managers regress to habits under crisis (losing key players), counter-trap (opponents anticipating variance), clock (time periods: early/interim/late, final 15 minutes). The 75-minute clock as decision node.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. The paper doesn't mention weather, biomechanics, or physical layers explicitly, but I can discuss what would veto the findings: pitch dimensions, weather effects on aerial passes, player fatigue/biomechanical load in late minutes, RED zones. Since the paper is silent, I must note absence as a limitation/veto layer.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some counterfactual framework. I'll interpret as verifiable counterfactual veto scenarios. Need 3 scenarios with predictions. Must be verifiable (falsifiable). Examples:
  1. If a team in Cluster 4 (high aerial, low forward) maintains Cluster 4 in both 50-75 and 75+ while drawing at 75, predicted points delta <= -0.3125 (from table), veto if actual points > 0.
  2. If a team switches from Cluster 1 to Cluster 4 in final 15 while drawing, predicted negative outcome per table (-0.3125 for 4,4? Wait table shows points gained per match within cluster pairing. Row=50-75 cluster, Col=75+ cluster? Let's check table:
  
  Table: "50-75 Minute Clusters" rows, "75th Minute Clusters" columns? Actually header is messy:
  |||5|**1**|**2**|**3**|**4**||
  ||**1**|0.25|0.65|0.73|0.33||
  |75th Minute|**2**|0.25|0.625|1|0||
  |Clusters|**3**|0|1.2|0.71|0||
  ||**4**|0.22|0|0.2|-0.3125||

  Wait, the header says "5 0-75 Minute Clusters" then "75th Minute Clusters". So rows are 50-75 clusters, columns are 75+ clusters? Or vice versa? The text says "pairings of clusters between the 50-75th minute and 75th minute periods". And "Cluster 4 returned the worst outcomes, especially when this cluster was identified in both the 50-75th minute and 75th minute periods." The cell (4,4) is -0.3125. So yes, row 4 col 4 = -0.3125. So rows=50-75, cols=75+.

  Scenario 1: Team drawing at 75, row=4, col=4. Predicted points = -0.3125. Veto if observed points > 0 in a holdout set.
  Scenario 2: Welch t-test p≈0 for Chelsea vs Spurs dissimilarity means (0.21 vs 0.18). Veto if replication on a different season yields p > 0.05.
  Scenario 3: Ward's method k=4 selected. Veto if silhouette score or gap statistic prefers k != 4 on same data with standardized variables.

Need to ensure no betting lines. Points gained/lost is fine.

Word count: Need to be verbose enough. Let's aim for ~200-300 words per section for the 5 non-think sections, and 500+ for think trace.

Let me write carefully with exact page citations. The page markers in the text are bold numbers like **1**, **2**, etc. I'll cite them as [PAGE 1], [PAGE 2], etc.

Note: The source text goes up to page 16, but user said PAGES: 11. I will cite based on visible page numbers in the text. Since the text shows pages 1-16, I'll reference those visible page markers. I should not say "page 11" if the content is on page 16. I'll use the markers present.

Let's compose.

THINK_TRACE: I'll discuss the pipeline: raw tracking/event -> feature engineering (xG per shot to mitigate strength bias) -> temporal subsectioning (Early/Interim/Late) -> game-state annotation -> Gower's distance for mixed data -> dissimilarity matrix -> average variance -> Ward's hierarchical clustering -> k=4 clusters -> cluster semantics (Brentford table) -> game theory payoff matrix for draw-at-75 -> NE (S,S) -> cluster pairing points table. Gray zones: small n for cluster pairings, manager bias (Conte/Postecoglou), team strength bias despite xG/shot normalization, cluster labels non-transferable across teams, causal inference blocked by observational design, no weather/biomechanical controls, payoff matrix values likely empirical frequencies not theoretical utilities. Multi-hop: from Ivan Toney suspension -> reduced Cluster 2 frequency -> lower variance -> poorer league position (Brentford 23/24). Also from defensive third xPC and forward pass % -> tactical risk posture.

SOURCE_OPERATORS_AND_EQUATIONS:
- Gower similarity: S_ijk ... need to reconstruct from text. Text says: "s_ijk always ranges between 0 and 1, with values closer to 0 representing more similar objects..." and continuous: s_ijk = 1 - |x_iR - x_kj| / R_k. Wait, the text has garbled math: "s𝑖𝑗𝑘 = 1 − <u>|𝑥𝑖𝑅−𝑥𝑘 𝑗|</u> ~~,~~ where 𝑅𝑘 is the range". I'll formalize properly.
- Gower's Distance D = 1 - S or similar? Actually Gower's distance is often 1 - similarity, but the text uses S as similarity/dissimilarity? It says "values closer to 0 representing more similar objects, and values closer to 1 representing less similar objects." So S here is actually a dissimilarity coefficient despite being called similarity. I'll note that.
- Average variance: S_v,t = (1/n^2) sum sum s_ij (from garbled image text).
- Welch t-test: t = (mean1 - mean2) / sqrt(s1^2/n1 + s2^2/n2).
- Payoff matrix LaTeX.
- Ward's criterion: maximize r = proportion of variation explained.

RETROCAUSAL_GENEALOGY:
- Gower 1971 Biometrics [PAGE 2]
- Ward 1963 JASA [PAGE 8]
- Ruxton 2006 Behavioral Ecology [PAGE 7]
- Sharland 2017 Klopp Plan B [PAGE 1]
- Conte vs Postecoglou [PAGE 5]
- Ivan Toney suspension [PAGE 10]
- Brighton sales [PAGE 10]
- Fabius Maximus [PAGE 14]
- Multi-week traps: managerial mid-season change, key player absence, fixture congestion? Not mentioned but can infer late-period fatigue.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: When losing key players (Toney, Caicedo, Mac Allister), teams regress to fewer clusters, less variance [PAGE 10].
- Counter-trap: Opponents may anticipate a team's "Plan A" if variance is low; high variance makes scouting harder but execution risk higher.
- Clock: 75-minute threshold is the decision node for final-15 game theory. Early vs Interim vs Late periods [PAGE 1].

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: pitch dimensions not controlled; aerial pass % affected by pitch width/grass length.
- Biomechanical: player sprint distance, high-intensity actions in final 15 not in data; fatigue could force cluster shifts unrelated to tactical intent.
- Weather: rain/wind affects aerial pass % and xPC; absent from model.
- Veto rule: If weather or red-card events co-occur with cluster 4 in final 15, the tactical variance effect is confounded.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
1. Holdout cluster (4,4) veto.
2. Welch t-test replication veto.
3. Cluster number k=4 stability veto.

Make predictions specific and falsifiable.

Let's write now. Ensure total words >= 1000. I'll write richly.

Check for betting language: avoid "odds", "spread", "moneyline", "total", "line", "handicap". Use "points", "payoffs", "probability", "dissimilarity".

Let's draft.

---

THINK_TRACE (>=400 words):

Start: The paper constructs a pipeline... Multi-hop 1: data ingestion... Multi-hop 2: Gower's distance... Multi-hop 3: Ward's clustering... Multi-hop 4: game theory... Gray-zone audit: small sample, non-transferable clusters, observational causality, manager bias, team strength bias despite xG/shot, missing physical layers, clock endogeneity.

Word count target: ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX blocks with citations.

RETROCAUSAL_GENEALOGY: Lineage and traps.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression, counter-trap, clock.

CROSS_LAYER_VETO_ADJUDICATION: Veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Total words will exceed 1000.

Let's write carefully. I'll include [PAGE N] citations throughout. Since the source text has pages up to 16, I'll reference them. The user said PAGES: 11 but the text clearly has more; I will cite exactly what appears.

Double-check equations from text:

Text: "For Gower's Distance, the Similarity S is defined as:" but equation image missing/garbled. Then text: "If the variable is binary, the value of s is either 1 or 0. If the variable is continuous, s_ijk = 1 − |x_iR − x_kj| / R_k, where R_k is the range of the kth variable. s_ijk always ranges between 0 and 1, with values closer to 0 representing more similar objects, and values closer to 1 representing less similar objects."

Actually standard Gower similarity is: s_ijk = 1 - |x_ij - x_kj| / R_j for continuous, and for binary it's 1 if match else 0 (or sometimes 0/1 for presence/absence). The text seems to define s as a dissimilarity component (0=similar, 1=dissimilar), then averages. I'll present it as given but note the sign convention.

Average variance equation from image: garbled but looks like S_v,t = (1/n) sum_{i=1}^n sum_{j=1}^n s_ij / n ? I'll represent as double sum normalized by n^2.

Ward's method: maximise r, proportion of variation explained.

t-test: Welch's t = (x̄1 - x̄2)/sqrt(s1²/n1 + s2²/n2).

Payoff matrix:

\[
\begin{array}{c|cc}
 & D & S \\
\hline
D & (0.33, -0.22) & (0.11, 0.11) \\
S & (0.86, -0.43) & (0.31, -0.06)
\end{array}
\]

Rows = Home Team, Cols = Away Team, payoffs = (Home, Away) points. NE = (S,S).

Cluster pairing points table:

Rows = 50-75 cluster, Cols = 75+ cluster:
[ [0.25, 0.65, 0.73, 0.33],
  [0.25, 0.625, 1, 0],
  [0, 1.2, 0.71, 0],
  [0.22, 0, 0.2, -0.3125] ]

Units: points gained per match.

Okay, let's compose final output.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's analytical chain proceeds through four dependent transformations, each introducing a distinct gray zone that constrains causal inference. First, raw tracking and event streams are reduced to a mixed-type feature vector: categorical game-state and context variables share space with continuous geometric and expected-value metrics (xG per shot, defensive-third xPC, forward-pass percentage, aerial-pass percentage, attacking/defensive balance scores) [PAGE 1][PAGE 2][PAGE 16]. A deliberate strength-bias mitigation step replaces team-level xG with xG per shot, thereby attempting to isolate shot quality from shot volume [PAGE 1]. However, this normalization does not remove roster-quality heterogeneity; it merely re-scales it, so the subsequent distance comparisons remain confounded by squad depth and managerial quality.

Second, matches are subsectioned into Early (0–25 min), Interim (25–75 min), and Late (75 min to end) periods, each annotated with contemporaneous game-state (Winning/Draw/Losing) and the previous period's game-state as context [PAGE 1]. This creates a panel structure in which temporal autocorrelation and game-state endogeneity are present but unmodelled: a team trailing at the 70th minute may shift cluster not by tactical choice but because game-state forces risk-taking, and the model cannot disentangle intention from constraint.

Third, Gower's Distance is applied to the mixed-type data. The similarity component s_ijk is bounded to [0,1], with continuous variables scaled by their observed range R_k and binary variables assigned exact match/mismatch scores; weights w are fixed at 1, implying no variable is privileged a priori [PAGE 2]. The resulting pairwise dissimilarity matrix S is symmetric and used to compute an average variance S_v,t per team per period [PAGE 3]. Because s_ijk is defined such that 0 indicates greater similarity and 1 indicates greater dissimilarity, the paper's label "Similarity" is a misnomer; the coefficient functions as a normalized Manhattan-style dissimilarity on range-standardized continuous axes and a Hamming-style penalty on categorical axes. This convention propagates into the clustering stage without a sensitivity analysis for alternative weightings or range-standardization methods.

Fourth, Ward's hierarchical clustering partitions the dissimilarity matrix into four clusters, selected via maximization of the proportion of variation explained r and visual dendrogram inspection [PAGE 8]. Cluster labels (Positive, Direct, Passive, Balanced) are team-specific: Brentford's Cluster 3 is not semantically identical to Brighton's Cluster 3 [PAGE 9]. This non-transferability blocks cross-team generalization of cluster semantics. The Brentford case table shows Cluster 2 (Direct) has mean aerial pass % 53.5%, mean xG per shot 0.154, and mean forward pass % 59.8%, while Cluster 3 (Passive) shows aerial 29%, xG per shot 0.058, forward 46.1% [PAGE 9]. These intra-team differences are large, yet the paper offers no permutation test to establish whether cluster separation exceeds what would arise from random temporal subsampling.

The final layer is a simultaneous-move game-theoretic model for matches drawing at the 75th minute. Strategies are Dissimilar (D) versus Similar (S), defined by whether the inter-period dissimilarity exceeds the period-specific average [PAGE 11][PAGE 12]. The empirical payoff matrix yields a strict dominance of S over D for both players, producing Nash equilibrium (S,S) with payoffs (0.31, –0.06) points [PAGE 11]. A subsequent cluster-pairing table maps 50–75-minute clusters against 75th-minute clusters to points gained per match, with the (4,4) cell returning –0.3125, interpreted as the worst outcome [PAGE 13]. Gray zones here are severe: sample sizes per cell are extremely small (the frequency table shows counts as low as 2, 3, 5, 6), so individual cell values are high-variance estimates; no confidence intervals or Bayesian shrinkage are reported; and the payoff entries are descriptive frequencies, not structural utilities, so the strict-dominance claim is an artifact of the observed sample rather than a theorem about tactical incentives.

Managerial and roster shocks constitute the strongest retro-causal traps. Antonio Conte's replacement by Ange Postecoglou at Tottenham altered aerial-pass frequency, forward-pass volume, and safety preferences across derby fixtures [PAGE 5]. Brentford's 23/24 decline coincides with Ivan Toney's suspension and Brighton's loss of Caicedo and Mac Allister; both teams show concentration of variance into fewer clusters and lower league finishes [PAGE 10]. The paper treats these as contextual narratives but does not model manager fixed effects or player-availability covariates, so observed reductions in play-style variance may be consequences of squad degradation rather than independent tactical choices.

In sum, the derivation is internally coherent but externally fragile: Gower's distance is applied without weight sensitivity; clustering is descriptively selected; game-theoretic payoffs are estimated from a thin panel; and no physical, biomechanical, or weather layer is present to veto tactical attribution when cluster shifts co-occur with fatigue, red cards, or meteorological events.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Gower mixed-type dissimilarity (per variable component)**  
For variable k comparing observations i and j, with range \(R_k\):

\[
s_{ijk} =
\begin{cases}
\displaystyle 1 - \frac{|x_{ik} - x_{jk}|}{R_k}, & \text{continuous } k \\[6pt]
\mathbf{1}\{x_{ik} = x_{jk}\}, & \text{binary } k
\end{cases}
\]

Unit: dimensionless, \(s_{ijk} \in [0,1]\), where 0 denotes maximal similarity and 1 denotes maximal dissimilarity per the paper's sign convention [PAGE 2]. Weights \(w_{ijk}=1\) for all i,j,k [PAGE 2].

**Aggregate Gower dissimilarity between two match-period observations i and j**  
\[
S_{ij} = \frac{\sum_{k=1}^{p} w_{ijk}\, s_{ijk}}{\sum_{k=1}^{p} w_{ijk}}, \qquad S_{ij}\in[0,1]
\]
The matrix \(S\) is symmetric (\(S_{ij}=S_{ji}\)) with zero diagonal [PAGE 2][PAGE 3].

**Average variance per team v in period t**  
From the garbled image text on page 3, reconstructed as a normalized double sum over the n match-period observations in the team-period block:

\[
\overline{S}_{v,t} = \frac{1}{n^2}\sum_{i=1}^{n}\sum_{j=1}^{n} S_{ij}
\]
Unit: dimensionless dissimilarity units. Higher values indicate greater within-team play-style dispersion across matches in that period [PAGE 3].

**Welch two-sample t-test for dissimilarity means**  
Comparing teams playing away at Chelsea versus away at Spurs:

\[
t = \frac{\bar{x}_{\text{Chelsea}} - \bar{x}_{\text{Spurs}}}
{\sqrt{\dfrac{s^2_{\text{Chelsea}}}{n_{\text{Chelsea}}} + \dfrac{s^2_{\text{Spurs}}}{n_{\text{Spures}}}}},
\quad
\bar{x}_{\text{Chelsea}} = 0.21,\;\; \bar{x}_{\text{Spurs}} = 0.18
\]
Computed \(t = -13.206\), \(p \approx 0\), rejecting \(H_0: \mu_{\text{Chelsea}} - \mu_{\text{Spurs}} = 0\) [PAGE 6][PAGE 7]. Assumptions: independent dissimilarity observations, approximately normal within-group distributions, unequal variances permitted. Breakdown regime: small within-group n and non-normal dissimilarity distributions invalidate the approximation.

**Ward's hierarchical clustering objective**  
Maximize \(r\), the proportion of variation explained by a given partition [PAGE 8]. At each agglomeration, merge the pair of clusters that minimizes the increase in total within-cluster error sum of squares; equivalently maximize the between-cluster sum of squares relative to total sum of squares.

**Simultaneous-move payoff matrix (drawing at 75 minutes)**  
Rows = Home Team action; Columns = Away Team action. Payoffs = (Home points, Away points) relative to a draw starting point:

\[
\begin{array}{c|cc}
 & \text{Away } D & \text{Away } S \\
\hline
\text{Home } D & (0.33,\;-0.22) & (0.11,\;0.11) \\
\text{Home } S & (0.86,\;-0.43) & (0.31,\;-0.06)
\end{array}
\]

Unit: expected points gained or lost per match [PAGE 11]. Strategy D = inter-period dissimilarity above average; S = below average [PAGE 11]. Strict dominance of S over D for both players implies Nash equilibrium \((S,S)\) with payoff \((0.31,\,-0.06)\) [PAGE 11].

**Cluster-pairing points table**  
Rows = cluster in 50–75 minute period; Columns = cluster in 75th-minute period. Entries = points gained per match [PAGE 13]:

\[
P =
\begin{bmatrix}
0.25 & 0.65 & 0.73 & 0.33\\
0.25 & 0.625 & 1.00 & 0\\
0 & 1.20 & 0.71 & 0\\
0.22 & 0 & 0.20 & -0.3125
\end{bmatrix}
\]

Cell (4,4) = –0.3125 denotes the worst observed outcome when Cluster 4 (high aerial pass %, low forward pass %) persists across both windows [PAGE 13].

**Brentford cluster means [PAGE 9]**

\[
\begin{array}{l|cccc}
\text{Variable} & \text{Cluster 1 (Positive)} & \text{Cluster 2 (Direct)} & \text{Cluster 3 (Passive)} & \text{Cluster 4 (Balanced)}\\
\hline
\text{Mean Aerial Pass \%} & 17.5\% & 53.5\% & 29\% & 32.9\%\\
\text{Mean xG per Shot} & 0.083 & 0.154 & 0.058 & 0.103\\
\text{Mean Forward Pass \% per Possession} & 52.9\% & 59.8\% & 46.1\% & 50.7\%
\end{array}
\]

**Page citations**: variable definitions and temporal subsections [PAGE 1]; Gower's distance and weights [PAGE 2]; average variance [PAGE 3]; Tottenham dissimilarity graph and Table 3 [PAGE 4]; Conte/Postecoglou derby comparison [PAGE 5]; Welch t-test and Chelsea/Spurs means [PAGE 6][PAGE 7]; Ward's method and k=4 selection [PAGE 8]; Brentford cluster table [PAGE 9]; Ivan Toney and Brighton key-player departures [PAGE 10]; game-theoretic matrix [PAGE 11]; cluster definitions and pairing frequencies [PAGE 12][PAGE 13]; conclusion and Fabius Maximus analogy [PAGE 14]; variable appendix [PAGE 16].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage begins with Gower (1971), whose general coefficient of similarity was explicitly designed for mixed nominal and continuous data [PAGE 2]. The paper inherits Gower's range-standardization for continuous variables, which creates a sensitivity trap: if a variable's range is driven by a single outlier match (e.g., an unusually long passing sequence), all continuous dissimilarities are compressed, distorting cluster boundaries. Ward (1963) supplies the agglomerative criterion, maximizing the proportion of variation explained r [PAGE 8]. Ruxton (2006) justifies the Welch t-test under unequal variances [PAGE 7]. The football-specific intellectual antecedent is the Klopp "Plan B" cliché, cited to frame the research question as whether teams possess multiple plans or merely refine one [PAGE 1].

The multi-week traps are rooted in personnel and managerial stability rather than fixture congestion. Tottenham's 22/23–23/24 transition from Antonio Conte to Ange Postecoglou is documented as a structural break in tactical approach: fewer aerial passes, safer passes, more forward passes per possession [PAGE 5]. Because cluster labels are team-specific and not anchored to a universal tactical ontology, a pre/post-managerial comparison within Spurs cannot be ported to Brentford or Brighton without re-estimating the cluster space [PAGE 5][PAGE 9]. Brentford's 23/24 season is a second trap: Ivan Toney's suspension removes a 6'4" aerial focal point, directly depressing Cluster 2 (Direct) frequency and mean aerial pass % [PAGE 10]. Brighton's sale of Caicedo and Mac Allister removes midfield progression quality, leading to fewer risky midfield passes and more passes per possession, i.e., a shift toward lower-variance, lower-risk clusters [PAGE 10].

The historical analogy to Fabius Maximus and Hannibal introduces a political-economy trap: passive or variance-minimizing tactics may be socially penalized even when statistically superior, creating a principal-agent distortion in which managers avoid cluster-switching to preserve reputation [PAGE 14]. This means observed tactical inertia may be a reputation-preservation equilibrium rather than a performance-maximizing equilibrium, a confounder the paper acknowledges but does not model.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression operates through the roster-shock channel: when elite attackers or midfielders are removed (Toney; Caicedo/Mac Allister), teams regress from high-variance multi-cluster regimes into one or two dominant clusters, reducing tactical entropy [PAGE 9][PAGE 10]. The regression is not merely statistical; it is behavioral. Thomas Frank's Brentford reportedly leaned harder on a "Plan B" after losing Toney, implying that the coaching staff consciously reduced variance under crisis rather than exploring the cluster space [PAGE 10].

The counter-trap is opponent anticipation. If a team is observed to remain in a single cluster across the 50–75 minute and 75th-minute windows, opposing coaches can pre-load defensive adjustments for that known profile. The game-theoretic matrix formalizes this: when drawing at 75 minutes, playing Similarly (S) strictly dominates playing Dissimilarly (D), suggesting that predictability in the final 15 minutes extracts more points than surprise [PAGE 11]. However, this equilibrium is sample-fragile; in a larger dataset, D might become a profitable mixed-strategy component if opponents overfit to S.

The clock layer is the 75-minute threshold that triggers the simultaneous game [PAGE 11]. This is an exogenous institutional clock, not a physiological one: the model partitions the match into Early, Interim, and Late periods [PAGE 1], but the game-theoretic payoff is computed only for the state "drawing with fifteen minutes left." The recursive theory of mind therefore nests three levels: (1) the manager predicts the opponent's cluster in the final window; (2) the opponent predicts that the manager is predicting; (3) the clock truncates the recursion at t=75 minutes, after which payoff accrual is linear in points and the horizon is too short for a second reversal. Because the paper does not model discounting or fatigue accumulation within the final 15 minutes, the clock is treated as a hard boundary rather than a decaying opportunity set.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: pitch dimensions and grass length are not controlled in the source data. Aerial pass % and defensive-third xPC are sensitive to pitch width and surface friction; a narrow pitch mechanically reduces the feasible set of aerial passes, potentially reclassifying matches into Cluster 4 (high aerial %) or away from it independent of tactical intent [PAGE 9][PAGE 16]. Veto rule: if pitch width varies by more than 5% across the compared matches, cluster assignments in aerial-pass variables are invalidated.

Biomechanical layer veto: player high-speed running distance, sprint count, and accumulated load in the 50–75 versus 75+ minute windows are absent [PAGE 16]. Fatigue can force a team out of Cluster 2 (Direct, high forward-pass volume) into Cluster 3 (Passive) not by tactical choice but by physiological constraint. Veto rule: if mean player load in the final 15 minutes exceeds the match average by more than one standard deviation, cluster transitions are confounded by fatigue and cannot be attributed to tactical variance.

Weather layer veto: precipitation and wind speed directly degrade expected pass completion (xPC) and aerial-pass success [PAGE 16]. The paper's game-theoretic matrix pools all weather conditions into the same payoff cell. Veto rule: matches played in wind speeds above 20 km/h or precipitation above 2 mm/h are excluded from the (S,S) dominance inference, because environmental noise inflates dissimilarity and biases the D/S classification.

Cross-layer adjudication result: no veto is triggered by the paper's internal text because these layers are unmeasured. However, any replication that overlays pitch, load, and weather data will likely attenuate the estimated effect of tactical variance on points, and may reverse the strict dominance of S over D in adverse-weather subsamples. The paper's conclusion that variance "could have a positive correlation" is therefore an upper-bound estimate conditional on absent physical controls [PAGE 13][PAGE 14].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Cluster (4,4) points veto.  
Verification: In an independent holdout season, identify all matches where a team drawing at the 75th minute is classified in Cluster 4 during both the 50–75 minute window and the 75th-minute window.  
Prediction: Mean points gained per match in this cell must be ≤ –0.3125 (the observed cell value) [PAGE 13].  
Veto: If observed mean points > 0, the cluster-pairing payoff table is not transportable and the (4,4) cell is a small-sample artifact.

Scenario 2 — Welch t-test replication veto.  
Verification: Recompute the dissimilarity means for teams playing away at Chelsea versus away at Spurs on a different two-season Premier League tracking-data panel, using identical variable subsets and Gower weighting w=1.  
Prediction: The difference in means (0.21 vs 0.18) remains statistically significant at α=0.05 with Welch's t-test [PAGE 6][PAGE 7].  
Veto: If p > 0.05 in the replication, the Chelsea/Spurs dissimilarity gap is dataset-specific and the strict game-theoretic inference loses external validity.

Scenario 3 — Ward cluster-number k=4 veto.  
Verification: Apply Ward's hierarchical clustering to the same Gower dissimilarity matrix using silhouette width and gap statistic as selection criteria, without relying on dendrogram visual inspection.  
Prediction: The optimal number of clusters remains k=4 [PAGE 8].  
Veto: If silhouette or gap statistics select k ≠ 4 (e.g., k=3 or k=5), the four-cluster ontology (Positive/Direct/Passive/Balanced) is not robust and the Brentford/Brighton cluster-frequency comparisons are unstable.
</RLVR_COUNTERFACTUAL_VETOES>