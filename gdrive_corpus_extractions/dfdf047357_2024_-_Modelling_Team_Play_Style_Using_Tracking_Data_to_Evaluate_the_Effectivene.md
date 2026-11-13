---
source: "2024 - Modelling Team Play Style Using Tracking Data to Evaluate the Effectiveness of Variance in Tactical Behaviour - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Hudl StatsBomb/Research Competitions/2024"
pages: 16
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5786
---

<NATIVE_REASONING>
The user has provided a research paper on modelling team play style using tracking data to evaluate variance in tactical behaviour. They want me to act as the GSE + GSI Frontier Reasoning Foundry and produce a response with strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations. Use real LaTeX equations from the paper (Gower's Distance, Welch t-test, Ward's Method, game theory payoff matrix). Cite exact page markers and verbatim quotes where applicable. Total word count >= 1000 words across sections. Each section must be present and properly tagged.

Let me carefully extract the content:

Paper: "Modelling Team Play Style Using Tracking Data to Evaluate the Effectiveness of Variance in Tactical Behaviour" by Michael Gleeson, University College Dublin. 16 pages.

Key sections:
- Page 1: Definition, variables (basic, advanced like xG, net-OBV, expected pass completion, geometric like Balance Score), mitigation of team strength bias (xG per shot not per team), subsections: Early (0-25), Interim (25-75), Late (75+), Game-State (Winning/Draw/Losing), Context (previous period). Table 1 example. Citation 1 Sharland Klopp.
- Page 2: Gower's Distance formula. S_ij = sum(w_ijk s_ijk) / sum(w_ijk). Weights = 1. Binary s in {0,1}. Continuous s_ijk = 1 - |x_i - x_j| / R_k. Range [0,1], closer to 0 more similar, closer to 1 less similar. Citation 2 Gower 1971 Biometrics.
- Page 3: Dissimilarity matrix, S_ij = S_ji. Table 2 example. 2.1 Average Variance: S_v,t = sum_{i=1,j=1}^n s_ij / n. (Actually formula shown: S_v,t = (sum_{i=1,j=1}^n s_ij) / n). Bar chart colors: Red 0-25, Green 25-50, Blue 50-75, Purple 75+. Limitations: team-strength bias, manager bias (Chelsea multiple managers).
- Page 4: Table 3 snippet for Spurs opening 25 min matches vs Chelsea (A), West Ham (A), Leicester (H), Arsenal (A). Variables: Forward Pass per Possession %, Defensive Third xPC, Aerial Pass %, Game-State. Observations: vs Leicester (expected to win) 56% forward, 77% xPC. vs West Ham half backwards, risk-averse defensive third. vs Chelsea vs Arsenal comparison: negative vs Chelsea, 60% forward vs Arsenal, third aerial. No effect on score after 25 min.
- Page 5: Table 4 Arsenal fixtures across seasons. 22/23 vs 23/24. Conte vs Postecoglou. Postecoglou fewer aerial passes, safer passes, more forward passes per possession. Citation 3 Pogrund.
- Page 6: Between-team analysis vs Chelsea (A) and Spurs (A). Dissimilarity histograms. Mean dissimilarity vs Spurs 0.18, vs Chelsea 0.21. Welch Two Sample t-test. t = -13.206, p ≈ 0. Reject null. Boxplots: dissimilarity higher against Chelsea; teams winning away at Spurs/Chelsea have higher mean rolling dissimilarity; sample size too small.
- Page 7: Hierarchical clustering. Four clusters most accurate/interpretable. Ward's Method.
- Page 8: Ward's Method formula. r^2 = (sum_i sum_j sum_k ||X_ijk - x_..k||^2) - (sum_i sum_j sum_k ||X_ijk - x_i.k||^2) / (sum_i sum_j sum_k ||X_ijk - x_..k||^2). Actually need to parse from image text: r^2 = (ΣΣΣ||X_ijk - x_..k||^2) - (ΣΣΣ||X_ijk - x_i.k||^2) / (ΣΣΣ||X_ijk - x_..k||^2). Hmm, the rendering is messy. Dendrogram. cutree() in R. Four clusters ideal. Citations 5 Ward 1963 JASA, 6 Eberly, 7 Rdocumentation.
- Page 9: Table 5 Brentford clusters. Cluster 1 Positive, Cluster 2 Direct, Cluster 3 Passive, Cluster 4 Balanced. Mean Aerial Pass %: 17.5, 53.5, 29, 32.9. Mean xG per Shot: 0.083, 0.154, 0.058, 0.103. Mean Forward Pass %: 52.9, 59.8, 46.1, 50.7. Cluster 2 higher aerial, higher xG/shot, higher forward pass %. Brighton vs Brentford comparison in 50-75 min: Brentford >50% matches cluster 3; Brighton evenly distributed. Clustering numbers independent per team.
- Page 10: 22/23 historical seasons: Brighton 6th Europa, Brentford 9th highest ever. Brentford clustered highly in '3', broadly varied. 23/24 lost key players: Ivan Toney suspended first half, Brighton sold Caicedo and Mac Allister, no like-for-like replacements. Both lower half. Variance concentrated in two clusters. Thomas Frank quote about Plan B. Brentford employed Plan B more. Brighton fewer risky passes, more passes per possession. Dropoff in Cluster 2 frequency correlated to Toney suspension (6'4" striker, aerial option).
- Page 11: Game Theory section. Points won in final minutes. Simultaneous games. Drawing with 15 mins left. Matrix payoffs home/away (points won/lost from drawing position). Figure 12: Simultaneous Game (drawing at 75 minutes). Away Team D/S, Home Team D/S. Payoffs: (D,D) = (0.33, -0.22); (D,S) = (0.11, 0.11); (S,D) = (0.86, -0.43); (S,S) = (0.31, -0.06). Dissimilarly (D) = dissimilarity between 50-75 and 75+ above average. Similarly (S) = below average. Dominant strategy: S strictly dominates D for both. NE is (S,S) with payoffs (0.31, -0.06). Limitations: top 6 bias, small samples.
- Page 12: Clusters variables table: Mean Forward Pass %: C1 53.8, C2 53.6, C3 53.2, C4 41. Mean Aerial Pass %: C1 29.4, C2 17.4, C3 11.5, C4 55. Mean xG per Shot: C1 0.11, C2 0.12, C3 0.09, C4 0.10. Mean Attacking Balance Score: C1 -2.07, C2 -1.99, C3 -2.09, C4 -2.05. Frequency table for 50-75 vs 75+ clusters. Pairing points table: 
  - Row 1 (50-75 cluster 1): vs 75+ C1: 0.25, C2: 0.65, C3: 0.73, C4: 0.33
  - Row 2: vs C1: 0.25, C2: 0.625, C3: 1, C4: 0
  - Row 3: vs C1: 0, C2: 1.2, C3: 0.71, C4: 0
  - Row 4: vs C1: 0.22, C2: 0, C3: 0.2, C4: -0.3125
  Cluster 4 worst outcomes especially C4-C4. Clusters 2 and 3 successful but not credible due to low sample size. Variation (cluster differs between periods) positive correlation with outcome but inconclusive.
- Page 13-14: Conclusion. Too many variables. Variance positive correlation but needs more data. Brighton/Brentford lost quality -> varied less. Relegation teams comparison interesting. Cannot predict when to vary tactics. Reputation/Fabius Maximus anecdote. Citation 11 Hunt Britannica.
- Page 15: References 1-11.
- Page 16: Appendix definitions: Expected Pass Completion, OBV, xG. Variables used to cluster: Centralisation, Average Pass Length, Location of Opposition Entries into Final Third, Aerial Pass %, xPC Defensive Third, Passes in Final Third ending in Penalty Area %, Involvement of Midfielders per Possession, Average Net OBV per event, Concentration of Passes Defensive/Middle Third, Forward Passes % per Possession, xG per Shot, Defensive Balance Score, Attacking Balance Score, xPC Middle Third, Involvement of Goalkeeper per Possession.

Now I need to write the response. It must be >= 1000 words total across sections. The THINK_TRACE must be >= 400 words alone.

Constraints:
- No betting lines (spreads, totals, moneylines, odds). The paper mentions "points won/lost" which is fine; that's not betting. I must avoid any gambling terminology.
- No toy equations. Use real equations from the paper. Do not invent Force/Fatigue ratios.
- Formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes.

Let me structure:

<THINK_TRACE>
Deep multi-hop derivation & gray-zone audit (>=400 words).
I need to discuss:
- The Gower's Distance pipeline: mixed data types, normalization by range R_k, weights=1 assumption, similarity bounded [0,1], dissimilarity matrix symmetry S_ij = S_ji.
- Mean variance S_v,t computation and its limitation as a rough proxy (not true statistical variance, but mean pairwise dissimilarity).
- Hierarchical clustering with Ward's method minimizing within-cluster variance / maximizing r^2 proportion of variation explained. The cutree() choice of k=4.
- Game theory payoff matrix: simultaneous game at 75' given draw state. Payoffs in expected points (not betting odds). Dominant strategy S (similar) strictly dominates D (dissimilar). NE (S,S) payoff (0.31, -0.06). Note away team payoff negative? Actually (0.31, -0.06) means home gains 0.31, away loses 0.06 relative to draw? Need to be careful. The paper says "payoffs represent the points gained/lost per match." For away team, only chance to win points is if they do not change play style majorly. Wait, if NE is (S,S) with (0.31, -0.06), away gets -0.06? That seems odd but that's what paper says. Actually look: Home D, Away D: (0.33, -0.22). Home D, Away S: (0.11, 0.11). Home S, Away D: (0.86, -0.43). Home S, Away S: (0.31, -0.06). For away: if home plays D, away gets -0.22 (D) vs 0.11 (S) -> S better. If home plays S, away gets -0.43 (D) vs -0.06 (S) -> S better. So S strictly dominates for away too. NE (S,S). Away gets -0.06 at NE. That's the model's output.
- Gray zones: small sample size explicitly acknowledged [PAGE 11-12], top-6 bias [PAGE 11], manager bias [PAGE 4], team strength bias mitigated via xG per shot but residual bias remains [PAGE 1], clustering numbers independent per team so cross-team cluster labels are not comparable [PAGE 9], points-per-match table values derived from low frequency pairings [PAGE 12], causal claims explicitly inconclusive [PAGE 12-13].
- Breakdown regimes: Gower's distance fails when R_k = 0 (zero range continuous variable -> division by zero); Ward's method assumes Euclidean-ish geometry and can chameleon chain; Gower with mixed binary/continuous may distort if scales not calibrated; game theoretic NE collapses if payoff matrix not strictly dominant or sample < threshold; t-test assumes approximate normality and unequal variances (Welch) but n too small for power.

Need >=400 words in THINK_TRACE. I'll write substantial.

</SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, breakdown.
Include:
- Gower similarity: S_ij = ... verbatim from [PAGE 2].
- Continuous component: s_ijk = 1 - |x_i - x_j| / R_k [PAGE 2].
- Dissimilarity symmetry S_ij = S_ji [PAGE 3].
- Mean variance: S_v,t = (1/n) Σ_{i=1}^n Σ_{j=1}^n s_ij [PAGE 3]. Note this is mean pairwise dissimilarity, units dimensionless [0,1].
- Welch t-test: t = (x̄1 - x̄2) / sqrt(s1^2/n1 + s2^2/n2) [PAGE 7], t = -13.206, p ≈ 0.
- Ward's r^2 formula [PAGE 8] as best LaTeX reconstruction.
- Game theory payoff matrix [PAGE 11-12] in LaTeX bmatrix.
- Cluster variable table [PAGE 10, 12] as LaTeX matrix or tabular.
- Points pairing table [PAGE 12-13].
- Units: probabilities dimensionless, percentages dimensionless (0-100 or 0-1), xG in [0,1] expected goals per shot, xPC probability [0,1], balance score dimensionless player-count differential, minutes in min.
- Assumptions: weights w_ijk = 1 [PAGE 2]; game-state periods fixed [PAGE 1-2]; four clusters [PAGE 7-8]; simultaneous moves [PAGE 11].
- Singularity/breakdown: R_k = 0; n small; p-value ≈ 0 with n unknown; dominant strategy requires strict inequality; cluster labels non-transferable across teams [PAGE 9].

Need page citations for each equation.

</RETROCAUSAL_GENEALOGY>
Historical/scientific lineage & multi-week traps.
- Gower 1971 Biometrics [PAGE 2, ref 2].
- Ward 1963 JASA [PAGE 8, ref 5].
- Ruxton 2006 Behavioral Ecology Welch t-test [PAGE 7, ref 4].
- Policonomics simultaneous games [PAGE 11, ref 10].
- Goes-Smit et al. 2021 IMA Journal tracking data [PAGE 15 bibliography I].
- Shaw & Glickman 2019 dynamic analysis [PAGE 15 bibliography II].
- Sharland 2017 Klopp Plan B cliché [PAGE 1, ref 1].
- Fabius Maximus vs Hannibal, guerilla warfare, reputation risk [PAGE 13-14, ref 11].
- Conte vs Postecoglou at Spurs, tactical regime shift [PAGE 5, ref 3].
- Ivan Toney suspension, Brighton Caicedo/Mac Allister sales, managerial inertia [PAGE 10-11].
- Multi-week traps: manager mid-season change invalidates cluster stationarity; key player absence changes feasible action space; early-season vs late-season fatigue/squad rotation not modeled; game-state dependency means cluster distributions are conditional on score state, not unconditional tactical preference.

</RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under pressure (losing game-state), teams revert to known cluster (e.g., Brentford cluster 3 passive in 50-75 [PAGE 9]); stronger teams show more variance early [PAGE 4] but may regress under stress.
- Counter-trap: opponent anticipates your cluster switch; if you vary predictably (e.g., always direct in late minutes), opposition can press the aerial channel; Cluster 4 high aerial/low forward had worst outcomes especially C4->C4 [PAGE 12-13], suggesting predictable rigidity is exploitable.
- Clock: 25-75 interim vs 75+ late [PAGE 1-2]; game-state at 75' (draw) triggers simultaneous game [PAGE 11]; variation in final 15 min correlated with outcomes but causal clock mechanism unidentified [PAGE 12-13]; manager reputation/clock of job security (Fabius Maximus replaced after passive success) [PAGE 14].
- Theory of mind: coach models opponent's model of coach's style; if both play S (similar) NE, deviation to D is strictly dominated; however, if opponent misestimates your switching cost, a one-off D can punish—but data cannot identify when [PAGE 13].

</CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof.
Need to discuss what the paper does NOT include and thus cannot veto:
- Physical layer: player load, sprint distance, accelerations, muscle fatigue not in variables list [PAGE 16 appendix]. Veto: a cluster switch to high forward pass % requires explosive passing tempo; if players are above fatigue threshold, technical execution degrades. Paper cannot verify.
- Biomechanical: aerial pass % depends on striker jump height/heading effectiveness (Toney 6'4" [PAGE 10]); absence removes physical option, collapsing cluster 2 feasibility.
- Weather: not in data. Wind/rain affect pass completion xPC and aerial success; Gower's distance treats xPC as observed but does not condition on weather, so variance may reflect weather-driven noise rather than tactical intent.
- Adjudication: The paper explicitly states too many factors couldn't be included [PAGE 14]; therefore any tactical variance inference is vetoed unless physical/biomechanical state is held constant. Since it is not, the model is necessary-but-insufficient.
- No betting lines.

</RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions.
Need 3 verifiable scenarios. RLVR = Reinforcement Learning via Verifiable Rewards? Likely "verifiable" scenarios where the model's prediction can be falsified.
1. Zero-range variable: If a continuous variable has R_k = 0 (all teams identical in that feature), Gower's continuous term divides by zero. Prediction: the model breaks down; any distance matrix including such variable is undefined. Verifiable by checking feature variance across dataset.
2. Small-sample cluster pairing: The C3->C2 pairing yields 1.2 points per match [PAGE 12] from very few observations. Prediction: with out-of-sample matches, this payoff will regress toward the grand mean; cannot be used as a strategy. Verifiable by bootstrapping or holdout season.
3. Strict dominance collapse: If a new match context makes (D,D) payoff equal to or better than (S,S) for either player, the NE (S,S) is no longer strict. Prediction: when a team is already losing by multiple goals, the incentive to play D increases; the drawing-state assumption at 75' no longer holds. Verifiable by filtering to non-draw states at 75' and recomputing payoffs.

Also maybe 4th? User said 3. I'll do exactly 3 with clear predictions.

Word count: Need >=1000 total. THINK_TRACE >=400. I'll aim for THINK_TRACE ~500, SOURCE_OPERATORS ~350, RETRO ~250, RECURSIVE ~250, CROSS ~200, RLVR ~150. Total ~1700. Good.

I must not mention odds, spreads, moneylines, totals. I can mention "points" and "payoffs" and "probability" but not betting odds.

I need to use verbatim quotes with [PAGE N]. Let me pull exact quotes:
- [PAGE 1]: "instead of computing xG per team, I used xG per shot as a measure of the quality of shooting for each team."
- [PAGE 1]: "the best teams don't have a plan B, they just make plan A better"
- [PAGE 2]: "The weights are set to 1 in my analysis, as no variable is given greater importance over another."
- [PAGE 2]: "s_ijk always ranges between 0 and 1, with values closer to 0 representing more similar objects, and values closer to 1 representing less similar objects."
- [PAGE 3]: "S_v,t= sum_{i=1,j=1}^n s_ij / n"
- [PAGE 4]: "It's notable that the stronger teams also have more variance during the opening minutes of the match than the final minutes"
- [PAGE 9]: "Please note that the clustering numbers for each team, while they overlap, are independent of each other i.e: “Cluster 3” for Brentford could have very different variables compared to Brighton’s “Cluster 3”."
- [PAGE 11]: "As (S) strictly dominates (D) for both the Away Team and the Home Team, the NE is (S,S), with payoffs (0.31, -0.06)."
- [PAGE 12]: "Cluster 4 (High Mean Aerial Pass %, Low Mean Forward Pass%) returned the worst outcomes, especially when this cluster was identified in both the 50-75th minute and 75+ minute periods."
- [PAGE 12]: "Of course, these claims cannot be proven within this project due to the low sample size"
- [PAGE 13]: "My research indicates that a relationship might exist, but overall it is inconclusive."
- [PAGE 14]: "So many factors couldn’t be included in this project that would influence the variance in how teams play. Most notably of all, reputation."

Now writing. Use proper LaTeX. Use XML tags exactly. No markdown outside? The user wants exact XML sections. I'll output only the XML sections. Should I wrap in a root? They said "across these exact XML sections". I'll just output the six sections sequentially. No root tag required but maybe okay. To be safe, output only those six tags in order.

Check: ZERO TOY EQUATIONS. I must not invent Force/Fatigue. All equations must be from source or standard formal math clearly tied to source. The Ward's formula reconstruction should be careful. From page 8:
r^2 = (Σ_i Σ_j Σ_k ||X_ijk - x_..k||^2) - (Σ_i Σ_j Σ_k ||X_ijk - x_i.k||^2) / (Σ_i Σ_j Σ_k ||X_ijk - x_..k||^2)
Wait, the text shows:
r^2 = (
i Σ j Σ k Σ ||X_ijk - x_..k||^2
) − (
i Σ j Σ k Σ ||X_ijk - x_i.k||^2
)
(
i Σ j Σ k Σ ||X_ijk - x_..k||^2
)
This is ambiguous but likely:
r^2 = [ΣΣΣ ||X_ijk - x_..k||^2 − ΣΣΣ ||X_ijk - x_i.k||^2] / [ΣΣΣ ||X_ijk - x_..k||^2]
I'll present it with a note that it is reconstructed from the paper's notation and represents proportion of variation explained. I'll avoid claiming it's perfect if formatting is unclear, but provide the formal expression.

Welch t-test from page 7:
t = (x̄1 − x̄2) / sqrt( s1^2/n1 + s2^2/n2 )
t statistic -13.206, p ≈ 0.

Gower:
S_ij = [Σ_{k=1}^p w_ijk s_ijk] / [Σ_{k=1}^p w_ijk]
w_ijk = 1.
Binary s ∈ {0,1}. Continuous s_ijk = 1 − |x_i − x_j| / R_k.

Mean variance:
S_{v,t} = (1/n) Σ_{i=1}^n Σ_{j=1}^n s_ij. Actually paper shows denominator n, not n^2. I'll reproduce exactly: S_{v,t}= \frac{\sum_{i=1,j=1}^{n} s_{ij}}{n}.

Game matrix:
Away \ Home | D | S
D | (0.33, -0.22) | (0.11, 0.11)
S | (0.86, -0.43) | (0.31, -0.06)

Units: payoffs in expected points per match (dimensionless points). xG in goals per shot. xPC dimensionless probability. Balance score in players (count differential). Minutes in min.

Let's write.

Ensure THINK_TRACE >= 400 words. I'll count roughly. It will be long.

Let me draft each section carefully.

I'll avoid any mention of betting. Use "expected points" not odds.

Proceed to final.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs a play-style dissimilarity pipeline that begins with mixed-type feature vectors and ends with a game-theoretic equilibrium claim about late-match tactical stability. The first derivation hop is Gower’s Distance on [PAGE 2]. Because the feature space contains categorical variables (game-state, context), binary variables, and continuous variables with incompatible raw scales (some in [0,1], others in [1000,3000]), a raw Euclidean or Manhattan distance would be dominated by high-magnitude continuous features. Gower’s similarity for objects i and j across p variables is S_{ij} = \frac{\sum_{k=1}^{p} w_{ijk} s_{ijk}}{\sum_{k=1}^{p} w_{ijk}}, with all weights w_{ijk}=1 because “no variable is given greater importance over another” [PAGE 2]. For binary variables s_{ijk}\in\{0,1\}; for continuous variables s_{ijk}=1-\frac{|x_i-x_j|}{R_k}, where R_k is the observed range of variable k. This normalizes every partial similarity to the unit interval [0,1], with 0 denoting maximal similarity and 1 maximal dissimilarity [PAGE 2]. A critical breakdown regime appears if R_k=0 for any continuous feature: the term |x_i-x_j|/R_k is singular (division by zero), and the whole similarity coefficient becomes undefined unless that feature is dropped or regularized. The paper does not report handling this case.

The second hop converts pairwise similarities into an n\times n dissimilarity matrix where S_{ij}=S_{ji} by symmetry [PAGE 3], then computes a team-level “mean variance” S_{v,t}=\frac{\sum_{i=1,j=1}^{n}s_{ij}}{n} for each team v and time period t [PAGE 3]. Terminology matters here: this is not statistical variance in the moment-generating sense; it is the mean pairwise dissimilarity across all match-period objects for that team. Its range is [0,1], dimensionless. The bar-chart visualization splits matches into Early (0–25 min), Interim split as Green 25–50 and Blue 50–75, and Late 75+ [PAGE 4]. The paper immediately flags team-strength bias: stronger teams generate more shots, passes, and actions, which can inflate measured variance; stronger teams also show more variance early than late, plausibly a game-state effect [PAGE 4]. To mitigate, xG per shot is used rather than xG per team [PAGE 1], but residual strength bias remains in raw passing volumes.

The third hop applies Ward’s hierarchical clustering to the Gower dissimilarity matrix [PAGE 8]. Ward’s method maximizes r^2, the proportion of variation explained by a clustering, formulated as a ratio of between-cluster to total sum-of-squares over the dissimilarity geometry. Four clusters are selected via cutree() because the dendrogram shows four distinct branches [PAGE 8]. A gray-zone assumption is that cluster labels are team-local: “Cluster 3” for Brentford is not comparable to “Cluster 3” for Brighton [PAGE 9]. Cross-team cluster semantics are therefore not transportable without re-anchoring to variable centroids.

The fourth hop is a simultaneous-move game at the 75-minute mark conditional on a draw state [PAGE 11–12]. Strategies are D (dissimilar: 50–75 vs 75+ dissimilarity above average) and S (similar: below average). The payoff matrix in expected points per match is Home D / Away D = (0.33, -0.22); Home D / Away S = (0.11, 0.11); Home S / Away D = (0.86, -0.43); Home S / Away S = (0.31, -0.06). Strict dominance of S over D for both players yields the Nash equilibrium (S,S) with payoff (0.31, -0.06) [PAGE 11]. Breakdown regime: this equilibrium presupposes the payoff ordering is invariant and that the sample of draw-at-75’ matches is representative. The paper concedes top-6 strength bias, small samples, and that “these claims cannot be proven within this project due to the low sample size” [PAGE 12]. A Welch t-test comparing mean dissimilarity against Chelsea (0.21) versus Spurs (0.18) returns t=-13.206, p\approx0, rejecting equality of means [PAGE 7], but without reported n or variance, effect-size stability cannot be audited.

Overall gray-zone verdict: the formal chain Gower \rightarrow dissimilarity matrix \rightarrow Ward clustering \rightarrow conditional game matrix is internally coherent, but every causal claim about tactical variance improving outcomes is explicitly labeled inconclusive [PAGE 13]. The model identifies correlation and descriptive regime shifts; it cannot prescribe when to vary tactics [PAGE 14].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

1. Gower similarity operator [PAGE 2]:
\[
S_{ij}=\frac{\displaystyle\sum_{k=1}^{p} w_{ijk} s_{ijk}}{\displaystyle\sum_{k=1}^{p} w_{ijk}},\qquad w_{ijk}=1\ \forall i,j,k.
\]
Units: dimensionless similarity in [0,1]. Assumption: equal variable weighting. Binary component: s_{ijk}\in\{0,1\}. Continuous component:
\[
s_{ijk}=1-\frac{|x_i-x_j|}{R_k},\quad R_k=\max(x_k)-\min(x_k).
\]
Singularity/breakdown: if R_k=0, the continuous term is undefined (division by zero); feature must be excluded or bounded away from zero range.

2. Dissimilarity symmetry [PAGE 3]:
\[
S_{ij}=S_{ji},\qquad S_{ii}=0.
\]
The matrix is used to identify matches where play style is significantly dissimilar.

3. Team mean variance proxy [PAGE 3]:
\[
S_{v,t}=\frac{\displaystyle\sum_{i=1}^{n}\sum_{j=1}^{n} s_{ij}}{n}.
\]
Units: dimensionless mean pairwise dissimilarity in [0,1]. Not a statistical variance; interpreted as a rough index of within-team play-style dispersion across matches in period t.

4. Welch two-sample t-test [PAGE 7] for mean dissimilarity against Chelsea vs Spurs:
\[
t=\frac{\bar{x}_1-\bar{x}_2}{\sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}}},
\]
with reported t=-13.206, p\approx0. Means: 0.21 (Chelsea away) vs 0.18 (Spurs away) [PAGE 6]. Assumptions: independent samples, approximately normal distributions, unequal variances permitted. Breakdown: n_1,n_2 unreported; small-sample power and p-value reliability cannot be verified from text.

5. Ward’s method criterion [PAGE 8], proportion of variation explained:
\[
r^2=\frac{\displaystyle\sum_i\sum_j\sum_k \|X_{ijk}-x_{\cdot\cdot k}\|^2-\displaystyle\sum_i\sum_j\sum_k \|X_{ijk}-x_{i\cdot k}\|^2}{\displaystyle\sum_i\sum_j\sum_k \|X_{ijk}-x_{\cdot\cdot k}\|^2}.
\]
Units: dimensionless proportion in [0,1]. Four clusters chosen via cutree() because the dendrogram exhibits four branches [PAGE 8].

6. Cluster variable summary [PAGE 10, 12] in dimensionless percentages or probabilities:
| Cluster | Mean Forward Pass % | Mean Aerial Pass % | Mean xG per Shot | Mean Attacking Balance Score |
|---|---|---|---|---|
| 1 | 53.8 | 29.4 | 0.11 | -2.07 |
| 2 | 53.6 | 17.4 | 0.12 | -1.99 |
| 3 | 53.2 | 11.5 | 0.09 | -2.09 |
| 4 | 41.0 | 55.0 | 0.10 | -2.05 |

xG is expected goals per shot, a probability in [0,1]. xPC is expected pass completion, a probability in [0,1]. Balance score is a player-count differential (dimensionless integer-scaled value).

7. Simultaneous game payoff matrix [PAGE 11–12], payoffs in expected points per match, conditional on draw at 75 minutes:
Rows = Home (D,S), Columns = Away (D,S).
\[
\begin{bmatrix}
(0.33,\,-0.22) & (0.11,\,0.11)\\
(0.86,\,-0.43) & (0.31,\,-0.06)
\end{bmatrix}
\]
D = play style dissimilar between 50–75 and 75+ above average; S = below average. Strict dominance of S for both players gives NE (S,S) \to (0.31,-0.06). Breakdown: valid only for draw-state at 75’; top-6 strength bias and small samples acknowledged [PAGE 11].

8. Cluster-pairing points table [PAGE 12–13], rows = 50–75 cluster, columns = 75+ cluster, entries = points gained per match:
\[
\begin{bmatrix}
0.25 & 0.65 & 0.73 & 0.33\\
0.25 & 0.625 & 1.00 & 0\\
0 & 1.20 & 0.71 & 0\\
0.22 & 0 & 0.20 & -0.3125
\end{bmatrix}
\]
Cluster 4\to4 yields -0.3125, the worst observed pairing [PAGE 12–13]. Breakdown: low cell counts; not credible as causal evidence [PAGE 12].

Appendix variable inventory [PAGE 16] includes Expected Pass Completion (probability), OBV (change in scoring probability, dimensionless), xG (probability), Aerial Pass %, Forward Passes %, Balance Scores (player count differentials), and concentration metrics. No weather, biomechanical load, or fatigue variables are included.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week inference traps.

The methodological genealogy begins with Gower (1971), “A General Coefficient of Similarity and Some of Its Properties,” Biometrics 27(4), 857–871 [PAGE 2, ref 2], which provides the mixed-type similarity coefficient central to the entire analysis. Ward (1963), “Hierarchical Grouping to Optimize an Objective Function,” JASA 58, 236–244 [PAGE 8, ref 5], supplies the agglomerative clustering criterion later operationalized through r^2 maximization and the cutree() function in R [PAGE 8, ref 7]. The unequal-variance t-test draws on Ruxton (2006), Behavioral Ecology 17(4), 688–690 [PAGE 7, ref 4]. The game-theoretic frame cites Policonomics (2017) on simultaneous games [PAGE 11, ref 10]. Broader tracking-data lineage appears in the bibliography: Goes-Smit et al. (2021), IMA Journal of Management Mathematics, on tactical features from position tracking [PAGE 15, biblio I], and Shaw & Glickman (2019) on dynamic team strategy [PAGE 15, biblio II].

The tactical narrative is anchored in a managerial cliché cited from Sharland (2017): “the best teams don’t have a plan B, they just make plan A better” [PAGE 1, ref 1]. The paper’s own longitudinal case studies show regime shifts tied to personnel rather than pure tactical choice: Conte versus Postecoglou at Spurs, with Postecoglou deploying fewer aerial passes, safer passes, and more forward passes per possession [PAGE 5, ref 3]; Brentford’s Ivan Toney suspension correlated with a dropoff in Cluster 2 (direct, high aerial) frequency [PAGE 10]; Brighton’s sale of Caicedo and Mac Allister without like-for-like replacements associated with reduced tactical variance and a lower-half finish [PAGE 10]. Thomas Frank’s public comments on Brentford’s “Plan B” suggest the cluster shifts reflect explicit managerial habit changes under squad constraints [PAGE 10–11, ref 9].

Multi-week traps: (1) Managerial mid-season turnover invalidates cluster stationarity; a team’s 22/23 cluster centroids are not comparable to its 23/24 centroids because the optimization target (head coach preferences) changed [PAGE 5]. (2) Key-player absence collapses the feasible action space: Toney’s height and aerial presence made Cluster 2 viable; without it, the cluster distribution mechanically contracts regardless of coaching intent [PAGE 10]. (3) Game-state conditioning means observed variance is partly a reactive function of score (winning/drawing/losing) rather than an unconditional stylistic preference [PAGE 1–2]. (4) Early-season variance may reflect fitness and integration noise, while late-minute variance reflects end-game urgency; the fixed 25/75-minute cut imposes artificial stationarity within periods that may not hold across a multi-week macrocycle.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap structure, and clock dynamics.

Crisis habit regression: when a team is losing or protecting a lead, the model’s clustering suggests a reversion to a dominant local attractor rather than sustained exploration. Brentford’s 50–75-minute period was over 50% Cluster 3 (Passive) in 22/23 [PAGE 9], implying that under interim-game-state pressure the team collapsed into a low-risk, low-forward-pass regime. Stronger teams showed higher opening-minute variance but not necessarily late-minute variance [PAGE 4], consistent with regression to a conserved “plan A” when match stress rises. The recursive layer is that the opponent observes this regression and can pre-position defensive shape to nullify the expected passive build-up.

Counter-trap: if a team varies predictably—switching into a high-aerial, low-forward Cluster 4 profile in the final minutes—the opposition can anticipate the long-ball transition and crowd the aerial channel. The data show Cluster 4\to4 returned -0.3125 points per match, the worst pairing in the sample [PAGE 12–13], which is consistent with a predictable rigidity trap: the variation itself is exploitable because the target cluster is known. Conversely, unpredictable shifts (2 to 3, or 3 to 2) show positive point entries (1.00 and 1.20) but rest on tiny cell counts [PAGE 12–13], so the counter-trap advantage cannot be separated from sampling noise.

Clock dynamics: the analysis hard-codes three temporal regimes—Early (0–25), Interim (25–75), Late (75+) [PAGE 1–2]—and then isolates the simultaneous game at the 75-minute mark conditional on a draw [PAGE 11]. The clock is treated as an exogenous state trigger: at 75’, both teams choose D or S simultaneously, and the NE prescribes similarity (S) for both [PAGE 11]. However, the model cannot identify the optimal switching time inside the 75+ window [PAGE 13], nor can it handle non-draw states at 75’ where the payoff matrix would be recomputed. Managerial reputation adds a second clock: job-security incentives may favor low-variance, visibly “brave” tactics even when higher variance is expected-point superior, as illustrated by the Fabius Maximus analogy of passive success punished by political replacement [PAGE 14]. Thus the theory-of-mind loop is coach \leftrightarrow opponent \leftrightarrow owner/fans, with the match clock forcing a terminal decision under incomplete information about the opponent’s switching cost.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

The paper’s variable inventory [PAGE 16] contains no physical-load metrics (total distance, high-speed running, accelerations, decelerations), no biomechanical parameters (striker jump height, heading contact efficiency, pass velocity), and no weather covariates (wind speed, precipitation, temperature). Consequently, three veto layers apply to any inference that tactical variance causes outcome changes.

Physical layer veto: A shift into Cluster 2 (higher forward pass %, higher xG per shot) requires sustained passing tempo and positional rotation [PAGE 9]. If accumulated match load degrades technical execution below a threshold, the observed forward-pass percentage may fall not because of tactical choice but because of physical incapacity. The model cannot condition on load, so a measured decrease in variance late in matches may be a physical fatigue veto rather than a tactical decision. Since the data do not include load, the causal claim “variance improves outcomes” is vetoed unless physical state is held constant.

Biomechanical layer veto: Cluster 2’s high Mean Aerial Pass % (53.5% for Brentford) and high xG per shot (0.154) [PAGE 9] are structurally dependent on aerial duellists. Ivan Toney’s 6’4” frame provided a specific biomechanical option in the air; his suspension removed that option and the cluster’s frequency dropped [PAGE 10]. The model treats Aerial Pass % as an observed number but cannot re-simulate the cluster under a different player morphotype. Any cross-team comparison of aerial-variance strategy is therefore vetoed by personnel mismatch.

Weather layer veto: Expected Pass Completion (xPC) and Aerial Pass % are environmental-sensitive observables. Wind and rain alter pass completion probability and aerial-ball behavior, but Gower’s Distance treats xPC as an a-contextual feature [PAGE 2]. A team may appear to vary its play style between matches when the variation is actually weather-driven noise in pass completion and aerial success. Because weather is not in the feature set, the dissimilarity matrix cannot disentangle tactical intent from atmospheric confounding.

Adjudication: The paper explicitly states that “so many factors couldn’t be included” and names reputation as the most notable omission [PAGE 14]. Under cross-layer adjudication, the model is necessary but insufficient: it can describe clustering and correlate late-match similarity with expected points, but it cannot veto physical, biomechanical, or weather confounds. Any operational use of the variance findings must first condition on held-constant player availability, load state, and weather; otherwise the observed tactical variance is not identified as a causal treatment.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning via verifiable rewards) veto scenarios with falsifiable predictions.

Veto Scenario 1 — Zero-range singularity in Gower’s continuous term.
Condition: A continuous feature k has R_k=0 across the analysis window (all teams identical on that variable).
Verification: Compute feature-wise ranges across all match-period objects; flag any R_k=0.
Prediction: The paper’s Gower similarity s_{ijk}=1-|x_i-x_j|/R_k is undefined for that feature, making the full dissimilarity matrix and all downstream Ward clusters computationally invalid unless the feature is excluded. If such a feature exists in the dataset, any reported cluster assignment that includes it is not reproducible.

Veto Scenario 2 — Small-sample cluster-pairing payoff regression.
Condition: The C3\toC2 pairing reports 1.20 points per match [PAGE 12], but the underlying cell count is not reported and the adjacent C2 row shows a maximum of 1.00 with several zeros.
Verification: Extract the raw frequency table of 50–75 versus 75+ cluster pairings [PAGE 12] and compute bootstrap confidence intervals for each cell’s mean points per match using match-level resampling.
Prediction: The 1.20 and 1.00 entries will have wide intervals overlapping the grand mean; out-of-sample holdout matches from a subsequent season will not reproduce a positive edge for C3\toC2. The pairing payoff is not a verifiable strategic advantage.

Veto Scenario 3 — Strict-dominance collapse outside the draw-at-75’ state.
Condition: The NE (S,S) relies on S strictly dominating D for both teams in the draw-state payoff matrix [PAGE 11].
Verification: Filter matches to non-draw game states at the 75-minute mark (winning or losing), recompute the 2x2 payoff matrix in expected points, and test whether D weakly or strictly dominates S for either player.
Prediction: When a team is losing by two or more goals at 75’, the incentive to play Dissimilarly (D) increases because the status quo (similarity) is expected to yield a loss; the (S,S) equilibrium will no longer be strict, and the paper’s prescription to “not change play style majorly” will fail. This falsifies the generalizability of the NE beyond the narrow draw-state condition.
</RLVR_COUNTERFACTUAL_VETOES>