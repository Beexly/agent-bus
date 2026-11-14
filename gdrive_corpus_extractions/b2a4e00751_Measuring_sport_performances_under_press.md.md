---
source: "Measuring_sport_performances_under_press.md"
folder: "/GSE-Research/sports-research-papers/md/randoms"
pages: 16
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4850
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "Measuring sport performances under pressure by classification trees with application to basketball shooting" by Metulini & Le Carre (2019). I need to produce a response with exact XML sections:

1. <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
2. <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
3. <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
4. <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
5. <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
6. <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Constraints:
- ZERO BETTING LINES: No spreads, totals, moneylines, odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes from source pages provided (pages 1-16).
- >= 1,000-word depth total across sections.

Let me carefully map the source text to page numbers. The text has page headers/footers:
- Page 1: Title page, abstract, intro start (R. METULINI AND M. LE CARRE 2)
- Page 2: Intro continues
- Page 3: Methodology, 2.1 Scoring probabilities, Equation (1) mention, tree discussion
- Page 4: Covariates definitions (shot.clock, sc.diff, miss.t, miss.pl, shot.type, time, poss.type, quarter)
- Page 5: TIM diagnostic, classification tree Equation (2), scoring probabilities phi_j, example
- Page 6: 2.2 Shooting performance index, x_ij - phi_j, Pi(T) formula mentioned
- Page 7: Application, BCL data, 47,849 shots, Figure 1
- Page 8: Figure 2, tree pruning, AUC 0.6617 vs 0.7084, 12 nodes vs 180 nodes, scoring probabilities details (FT made prev 0.7294, missed 0.6931; 2P time end 0.4145, middle end 0.4807, early middle regular 0.5116, reset 0.5911; early scoring diff < +7: 0.6063, > +7: 0.6953; 3P normal 0.3391, time end normal 0.3096, early 0.2160, middle end/early middle 0.3577)
- Page 9: Figure 3, performance index, quadrant examples BCL
- Page 10: BCL quadrant examples continued (top right: Sakota, Carter, Walker, Abromaitis, Strawberry; bottom left: Obasohan, Amagou, Maynor, Bryant; top left: Gelabale, Doornekamp, Vaughn; bottom right: McKissic, Minnerath, Odom)
- Page 11: NBA case study, miss.t not used, TIM Figure 4, pruned tree 11 nodes, AUC 0.658 vs 0.6638, Figure 5, FT made 0.7747, missed 0.7508; 2P time end 0.4432, middle end 0.4919, early middle 0.5284; early 2P scoring diff [-2,4] 0.5792, not in [-2,4] 0.6105; 3P normal fourth quarter 0.3537, other quarters 0.3764; time end 3P early 0.2340, middle/time end 0.3461
- Page 12: Figure 4, Figure 5 captions (actually page 11 has Figure 4, page 12 has Figure 5? Let's check text: "JOURNAL OF APPLIED STATISTICS 11" then Figure 4 caption, then "Figure 5." then "12 R. METULINI AND M. LE CARRE". So page 11 contains Figure 4 caption and start of Figure 5? Actually text flow: page 11 ends with "Figure 5." and page 12 starts with "12 R. METULINI AND M. LE CARRE" then continues with FT probabilities etc. Wait, looking at text:

Page 11 section:
"...Figure 4..."
"JOURNAL OF APPLIED STATISTICS 11"
"**Figure 4.** ... NBA data."
"**Figure 5.** ... NBA data."
"12 R. METULINI AND M. LE CARRE"

Then page 12 content: "FTs where the previous FT was made are scored with a probability of 0.7747..." etc.

Wait, the text says:
```
JOURNAL OF APPLIED STATISTICS 11


**Figure 4.** TIM diagnostic for the choice of thresholds for the numerical covariates. NBA data.


**Figure 5.** Classification tree with shotij on shot.clockij , sc.diff ij , miss.tij , miss.plij , shot.typeij , timeij , poss.typeij , quarterij . NBA data.

12 R. METULINI AND M. LE CARRE

FTs where the previous FT was made are scored with a probability of 0.7747; where the previous FT was missed, FT are scored with a probability of 0.7508.
```

So page 12 contains the NBA tree results. Page 13 contains Figure 6 caption and discussion start. Page 14 discussion continues. Page 15 conclusions, notes. Page 16 references end.

Let me assign page numbers based on the printed page numbers visible:
- Printed page 2: Introduction start, Oliver, Hollinger, etc.
- Printed page 3: Methodology 2.1, classification tree, logistic regression comparison, covariates intro
- Printed page 4: Covariate definitions (shot.clock, sc.diff, miss.t, miss.pl, shot.type, time, poss.type, quarter)
- Printed page 5: TIM diagnostic, Equation (1), Equation (2), phi_j, scoring probabilities example, "no player-specific covariates"
- Printed page 6: 2.2 Shooting performance index, x_ij - phi_j logic, Pi(T) formula
- Printed page 7: Application, BCL/NBA intro, court dimensions, game duration, 3.1 Data, BCL 47,849 shots, NBA 265,008 shots
- Printed page 8: 3.2 BCL case study, scoring probabilities, min node 0.8%, TIM Figure 1, thresholds, pruning, Figure 2, AUC 0.6617/0.7084, 12 nodes vs 180 nodes, tree results (FT 0.7294/0.6931, 2P time end 0.4145, middle end 0.4807, early middle regular 0.5116, reset 0.5911, early scoring diff <+7 0.6063, >+7 0.6953; 3P normal 0.3391, time end normal 0.3096, early 0.2160, middle/early middle 0.3577)
- Printed page 9: Figure 3 caption, performance index, quadrant explanation, examples top right/bottom left
- Printed page 10: BCL quadrant examples continued (M. Gelabale top left, S. McKissic bottom right)
- Printed page 11: 3.3 NBA case study, miss.t not used, TIM Figure 4, thresholds, pruned tree 11 nodes, AUC 0.658/0.6638, Figure 5
- Printed page 12: NBA tree results (FT 0.7747/0.7508, 2P time end 0.4432, middle end 0.4919, early middle 0.5284, early scoring diff [-2,4] 0.5792/not 0.6105, 3P normal Q4 0.3537/other 0.3764, time end 3P early 0.2340/middle or time end 0.3461)
- Printed page 13: NBA performance index, Figure 6 caption, top right (Curry, Durant, Irving, Towns, Paul, James), bottom left (Fox, Smith Jr., Wade, Jackson), top left (Tatum, George, McCollum), bottom right (Embid, Antetokounmpo, Green, Davis)
- Printed page 14: Discussion, 2P vs 3P, shot.clock effect, scoring difference effect, time end 3P, fourth quarter NBA, poss.type BCL only
- Printed page 15: Staff evaluation, quadrants recommendations, conclusions
- Printed page 16: Notes, Acknowledgments, Disclosure, Funding, ORCID, References start
- Printed page 16 (continued): References end

Wait, the text shows "JOURNAL OF APPLIED STATISTICS 15" then Notes, then "JOURNAL OF APPLIED STATISTICS 16" then references. So page 16 is references. The source text ends at page 16.

Now I need to write the response. I must be careful not to mention betting lines (spreads, totals, moneylines, odds). The paper mentions "odds" in the context of "Playing the Percentages" reference but I should avoid betting terminology. I won't mention any betting lines.

For equations:
- shot_ij ∈ {0,1}
- Classification tree CART
- φ_j = P(shot_ij = 1 | covariates)
- Pi(T) = (1/|J_T|) * Σ_{j∈J_T} (x_ij - φ_j) ... wait, the formula is shown as an image in the source, not rendered in text. I need to reconstruct it formally based on the text description. The text says:

"For each shot, the difference xij − φj can be used as a performance measure... the shooting performance index of player i for shot type T is defined as:" [formula image]

Then: "For T = 2P, the value Pi(T) assumes positive values if the player i along all the considered matches performed better at 2-point shooting compared to the average player..."

I need to state the formal LaTeX equation. Based on context, it's likely:
Pi_i(T) = (1/|J_T^i|) Σ_{j∈J_T^i} (x_ij - φ_j)

Or maybe normalized by number of shots. Since text says "normalizing the importance of each attempted shot" and "gives more importance...". I'll formulate:
\Pi_i(T) = \frac{1}{|J_T^{(i)}|} \sum_{j \in J_T^{(i)}} (x_{ij} - \phi_j)

where J_T^{(i)} is set of shots of type T attempted by player i, |J_T^{(i)}| ≥ threshold (25 for BCL, 300 for NBA).

Units: probability dimensionless [0,1], x_ij binary {0,1}, φ_j ∈ [0,1], time in seconds, score difference in points, shot clock in [0,24] seconds, miss.t ratio [0,1], miss.pl binary.

Breakdown regimes: tree instability, minimum node size 0.8% of total shots (BCL ~383 shots, NBA ~2120 shots), pruning vs unpruned AUC difference marginal (0.6617 vs 0.7084 BCL; 0.658 vs 0.6638 NBA). Singularity: when |J_T| < threshold, player excluded; when numerical covariates near thresholds, categorization instability; TIM threshold selection depends on heterogeneity decrease.

TIM diagnostic: sums decreases in heterogeneity index (Gini or entropy) across thresholds.

Retrocausal genealogy: lineage from Oliver (2004) Offensive Rating, Hollinger per-minute, Csataljay et al. FG percentage, Piette et al. offensive performance, Zuccolotto et al. high-pressure 2016 Olympics, Goldman & Rao pressure as marginal impact, Tango et al. high-pressure situations, Breiman CART 1984/2017, Hanley & McNeil ROC AUC. Multi-week traps: small-sample player indices, threshold arbitrariness (ad-hoc), miss.t missing in NBA, court dimension differences (28x15m vs 28.7x15.2m), game duration (40 vs 48 min), shot clock reset rules (24 vs 14 seconds), possession type effect only in BCL.

Recursive theory of mind: crisis habit regression (players regress under pressure, miss.pl previous shot missed affects FT probability), counter-trap (coach assumes clutch performer but index shows average), clock (shot clock expiration, quarter end, time remaining). Specifically: crisis habit regression = after missed shot, FT probability drops (0.7294->0.6931 BCL; 0.7747->0.7508 NBA); counter-trap = roster construction based on raw FG% rather than difficulty-adjusted index; clock = last 5 seconds 2P lower probability (0.4145 vs 0.4807 BCL; 0.4432 vs 0.4919 NBA), last minute quarter 3P lower (0.2160 early vs 0.3391 normal BCL; 0.2340 early vs 0.3461 late NBA).

Cross-layer veto: Physical layer - court dimensions, ball, rim height same but court size differs slightly; biomechanical - fatigue not modeled, shot clock pressure; weather - indoor sport, no weather veto, but arena altitude/humidity not in covariates. Veto proof: The model excludes defensive pressure, player spacing, shot distance beyond 2P/3P/FT, fatigue accumulation, travel/back-to-backs. Therefore any prediction that ignores these layers is vetoed.

RLVR counterfactual vetoes:
1. If a player's Pi(3P) > 0 but they attempt a 3P with shot.clock < 5s in Q4 with |sc.diff| ≤ 2, the model's φ_j is low (~0.23-0.35); veto: do not assign clutch value based on raw make, the index already discounts difficulty; prediction: such shots will underperform raw FG% expectations by ≥15 percentage points.
2. If a team substitutes a bottom-left quadrant player (Pi(2P)<0, Pi(3P)<0) into late-game possession despite index, veto: the model says give ball to top-right; prediction: negative index delta vs replacement.
3. If miss.t (team miss ratio) is excluded as in NBA due to data recording, veto: team-level pressure covariate missing; prediction: AUC may drop or sc.diff effect absorbs team miss variance; robustness check showed marginal AUC difference in BCL when miss.t had no relevant impact.

Word count: Need >=1000 words total. I'll write substantial sections.

Let me draft carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit.
I need to discuss the derivation chain:
1. shot_ij binary dependent.
2. Classification tree partitions feature space into regions R_m.
3. φ_j = proportion of made shots in terminal node (empirical probability).
4. Performance index centers observed outcome x_ij against expected φ_j.
5. Normalization by shot count.
Gray zones:
- Thresholds chosen by TIM are data-dependent; no closed-form stability guarantee.
- "Ad-hoc" shot thresholds (25 BCL, 300 NBA) create selection bias; survivorship.
- NBA miss.t missing due to recording; potential omitted variable bias correlated with sc.diff.
- Pruning to 12/11 nodes vs full tree: AUC difference marginal but full tree has 180/200 nodes; interpretability vs fidelity tradeoff.
- Court dimension and game duration differences between BCL/NBA mean covariates time and space are not perfectly comparable; time_ij in seconds to end of quarter differs because quarter length differs (10 vs 12 min), though both measured in seconds so scale is same but distribution differs.
- No defensive covariates, no shooter fatigue, no location within 2P/3P arcs.
- Causality: index is descriptive, not causal; players self-select into difficult shots.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- Define sample space, covariates vector Z_ij.
- Classification tree: \hat{\phi}(z) = \frac{1}{|N_m|} \sum_{(i,j) \in N_m} x_{ij} where N_m is terminal node.
- TIM: \Delta H(t) = H(parent) - [p_left H(left) + p_right H(right)].
- Pi_i(T) = \frac{1}{|J_T^{(i)}|} \sum_{j \in J_T^{(i)}} (x_{ij} - \hat{\phi}_j).
- Units: x \in \{0,1\}, \phi \in [0,1] dimensionless probability, shot.clock \in [0,24] s, sc.diff in points, time to end of quarter in seconds (0 to 600 or 720 depending league), miss.t \in [0,1], miss.pl \in \{0,1\}.
- Thresholds: BCL shot.clock categories etc. I don't have exact threshold values from Figure 1 because it's an image, but I can describe the TIM procedure. I won't invent specific threshold numbers not in text. I can cite the probabilities listed in text exactly.
- Breakdown: minimum node size 0.8% of N shots. BCL N=47,849 -> ~383 shots/node. NBA N=265,008 -> ~2,120 shots/node. If |J_T| < threshold, player excluded. AUC: BCL pruned 0.6617 vs full 0.7084; NBA pruned 0.658 vs full 0.6638.

RETROCAUSAL_GENEALOGY:
Lineage: Oliver [29] Offensive Rating (points per 100 possessions); Hollinger [13] per-minute rating; Csataljay et al. [6] FG% and game outcome; Piette et al. [33] offensive performance; Zuccolotto et al. [40] high-pressure 2016 Olympics; Goldman & Rao [10] pressure as marginal impact of point vs score margin/time; Tango et al. [37] high-pressure = result on the line; Breiman [2] CART; Hanley & McNeil [12] ROC/AUC. Multi-week traps: roster turnover, rookie effects (bottom left NBA includes rookies), small sample early season, shot threshold ad-hoc, league translation (Europe vs NBA), in-season fatigue/cumulative load not modeled.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: after miss.pl = 1 (previous missed), FT probability drops (BCL 0.7294->0.6931; NBA 0.7747->0.7508). This is a measurable crisis habit. Counter-trap: coach/GM reads raw FG% and gives ball to "hot hand" who is actually in easy-shot quadrant; index reveals top-right quadrant players should handle clutch. Clock: shot.clock end (<5s) reduces 2P probability (BCL 0.4145 vs 0.4807 middle; NBA 0.4432 vs 0.4919), quarter end 3P lower (BCL early 0.2160 vs normal 0.3391; NBA early time end 0.2340 vs middle/time end 0.3461; Q4 3P 0.3537 vs other quarters 0.3764 NBA). The interaction of clock and score margin defines pressure; players with positive Pi in late-clock nodes are true clutch performers.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: court dimensions (BCL 28x15m, NBA 28.7x15.2m), ball/rim same, game duration (40 vs 48 min). Veto: spatial covariates beyond shot.type are absent; no distance-to-basket within 2P/3P. Biomechanical layer: fatigue not measured; miss.t (team miss ratio) attempts to capture team poor performance but not individual fatigue; shot clock pressure as proxy for time pressure. Weather layer: indoor, null effect; however arena altitude and humidity unmodeled. Veto proof: any inference that treats Pi(T) as a complete player quality metric is vetoed because the paper explicitly states it does not provide global player assessment; it omits passing, rebounding, defense.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
Scenario 1: A player classified top-right in BCL (Pi(2P)>0, Pi(3P)>0) attempts a 2-point shot with shot.clock ≤ 5s and sc.diff ∈ [-2,2] (close game). The model assigns φ ≈ 0.4145 (time end 2P). Veto: reward should not be binary make/miss; index contribution x−φ is −0.4145 if missed, +0.5855 if made. Prediction: raw FG% overestimates clutch value by at least ~0.41 per attempt relative to index.
Scenario 2: NBA team uses a bottom-left player (D. Fox, D. Smith Jr., D. Wade, J. Jackson) in final possession instead of top-right (Curry, Durant, etc.) based on reputation. Veto: model's quadrant assignment implies expected negative index contribution. Prediction: the substitution lowers expected points per possession by at least the Pi(2P) or Pi(3P) gap between quadrants (unquantified in text but directionally negative).
Scenario 3: Analyst includes miss.t in NBA model despite recording issues. Veto: source explicitly states miss.t not used because BigDataBall recording made correct counting impossible, and note [4] says ignoring does not alter results. Prediction: including miss.t introduces measurement error; AUC change expected to remain marginal (<0.01) as in BCL robustness check, or degrade calibration.

I need to ensure total word count >= 1000. Let's write generously.

Also cite exact page markers [PAGE N]. Since the text shows printed page numbers, I should cite like [PAGE 3], [PAGE 4], etc. Let's map:
- Title/abstract: [PAGE 1] (though printed page 1 not shown, but it's the first page)
- Intro: [PAGE 2]
- Methodology start: [PAGE 3]
- Covariates: [PAGE 4]
- TIM/Equation/phi: [PAGE 5]
- Performance index: [PAGE 6]
- Application/Data: [PAGE 7]
- BCL tree/results: [PAGE 8]
- BCL Figure 3/index: [PAGE 9]
- BCL examples: [PAGE 10]
- NBA case study/TIM: [PAGE 11]
- NBA tree results: [PAGE 12]
- NBA index/quadrants: [PAGE 13]
- Discussion: [PAGE 14]
- Conclusions/Notes: [PAGE 15]
- References: [PAGE 16]

I will cite verbatim quotes where useful, but keep it concise enough. The user wants verbatim quotes when source pages are provided. I'll include some short quotes with [PAGE N].

Now write the response in the exact XML format. No markdown outside? The user specified exact XML sections. I'll output just the XML sections.

Let's ensure no betting terms: no spread, total, moneyline, odds. I will not use "odds" except maybe in reference title but better avoid. I'll say "probability" throughout.

Word count check: I'll aim for ~1500-2000 words total to be safe.

Let's write.

Section 1: THINK_TRACE (>=400 words)
Section 2: SOURCE_OPERATORS_AND_EQUATIONS
Section 3: RETROCAUSAL_GENEALOGY
Section 4: RECURSIVE_THEORY_OF_MIND
Section 5: CROSS_LAYER_VETO_ADJUDICATION
Section 6: RLVR_COUNTERFACTUAL_VETOES

I will write carefully.

Double-check the performance index formula. The text has an image for the formula. I should present a formal LaTeX reconstruction and label it as reconstructed from the textual definition on [PAGE 6], noting that the original is an image. That's honest and not a toy equation.

Equation:
\[
\Pi_i(T) = \frac{1}{\left| J_T^{(i)} \right|} \sum_{j \in J_T^{(i)}} \left( x_{ij} - \hat{\phi}_j \right)
\]
where \(J_T^{(i)} = \{ j : \text{shot.type}_{ij} = T \}\), \(|J_T^{(i)}| \ge 25\) (BCL) or \(\ge 300\) (NBA), \(x_{ij} \in \{0,1\}\), \(\hat{\phi}_j \in [0,1]\).

Classification tree terminal node probability:
\[
\hat{\phi}_j = \frac{1}{|N_m|}\sum_{(i,j) \in N_m} x_{ij}, \quad j \in N_m
\]

TIM heterogeneity decrease:
\[
\Delta H(t) = H(S) - \left[ \frac{|S_L|}{|S|} H(S_L) + \frac{|S_R|}{|S|} H(S_R) \right]
\]
where H is Gini impurity or entropy.

I'll mention AUC units: dimensionless [0,1].

Minimum node size: 0.8% of total shots. BCL: 0.008 * 47,849 ≈ 382.8 -> ~383. NBA: 0.008 * 265,008 ≈ 2,120.1 -> ~2,120.

Now writing.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds in four coupled hops. First, the dependent variable shot_ij is dichotomous: 1 if made, 0 otherwise [PAGE 3]. Second, a classification tree partitions the covariate space Z_ij = (shot.clock, sc.diff, miss.t, miss.pl, shot.type, time, poss.type, quarter) into terminal nodes N_m; within each node the scoring probability is estimated as the empirical frequency of made shots, \hat{\phi}_j = |N_m|^{-1} \sum_{(i,j)\in N_m} x_{ij} [PAGE 3, PAGE 5]. Third, because no player-specific covariates enter the tree, \hat{\phi}_j is shot-specific but player-invariant: all players attempting the same class of shot receive the same baseline difficulty weight [PAGE 5]. Fourth, the performance index recenters each realized outcome x_{ij} against its expected difficulty \hat{\phi}_j and normalizes by the player’s shot count in that category, yielding \Pi_i(T) = |J_T^{(i)}|^{-1} \sum_{j\in J_T^{(i)}} (x_{ij} - \hat{\phi}_j) [PAGE 6]. Positive values indicate difficulty-adjusted outperformance relative to the average player; negative values indicate underperformance.

Gray-zone audit: (1) The TIM diagnostic selects thresholds by summing heterogeneity decreases across all split points, but the resulting categorization is data-dependent and lacks a closed-form stability bound [PAGE 5, PAGE 7]. (2) Player inclusion uses “ad-hoc” thresholds—|J_T| ≥ 25 for BCL and ≥ 300 for NBA [PAGE 7, PAGE 9]—which induce survivorship bias and exclude low-volume shooters whose index would be unstable. (3) In the NBA application miss.t is dropped entirely because BigDataBall recording prevented correct team-miss counting [PAGE 11]; this is an omitted-variable gray zone, though Note 4 claims its BCL impact was negligible [PAGE 15]. (4) Pruning collapses ~180 nodes (BCL) and >200 nodes (NBA) to 12 and 11 terminal nodes; AUC loss is marginal (0.6617 vs 0.7084; 0.658 vs 0.6638), but interpretability is purchased at the cost of local resolution [PAGE 8, PAGE 11]. (5) League comparability is imperfect: BCL quarters are 10 minutes and NBA quarters 12 minutes, so time_ij (seconds to end of quarter) has different support and distributional pressure profiles across leagues [PAGE 7]; court size differs (28×15 m vs 28.7×15.2 m) [PAGE 7]; and possession-type effects appear only in BCL [PAGE 14]. (6) The model omits defensive pressure, shooter spacing, shot distance within the 2-point arc, individual fatigue, and back-to-back scheduling; the paper itself disclaims global player assessment [PAGE 2]. Any inference treating \Pi(T) as a complete player-quality scalar therefore sits in a gray zone and must be vetoed by cross-layer constraints.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let shot_{ij} \in \{0,1\} denote made/missed for player i on shot j [PAGE 3]. The covariate vector is Z_{ij} = (shot.clock_{ij}, sc.diff_{ij}, miss.t_{ij}, miss.pl_{ij}, shot.type_{ij}, time_{ij}, poss.type_{ij}, quarter_{ij}), with units: shot.clock \in [0,24] seconds [PAGE 4]; sc.diff in points [PAGE 4]; miss.t \in [0,1] ratio of team misses [PAGE 4]; miss.pl \in \{0,1\} indicator that the player’s previous shot was missed [PAGE 4]; shot.type \in \{2P,3P,FT\} categorical [PAGE 4]; time in seconds to end of quarter [PAGE 4]; poss.type \in \{original, reset\} [PAGE 4]; quarter \in \{1,2,3,4,5\} [PAGE 4].

Classification tree scoring probability in terminal node N_m:
\[
\hat{\phi}_j = \Pr(shot_{ij}=1 \mid Z_{ij}\in N_m) = \frac{1}{|N_m|}\sum_{(i,j)\in N_m} x_{ij}, \qquad \hat{\phi}_j \in [0,1]
\]
[PAGE 3, PAGE 5]. The tree uses CART partitioning [2] because logistic regression imposes a single global additive form that struggles with interacting covariates [PAGE 3].

TIM threshold diagnostic: for split t partitioning node S into S_L, S_R, the heterogeneity decrease is
\[
\Delta H(t) = H(S) - \left[ \frac{|S_L|}{|S|}H(S_L) + \frac{|S_R|}{|S|}H(S_R) \right]
\]
where H is node impurity (Gini or entropy). TIM sums \Delta H over all thresholds used in the tree to select categorization cut points for shot.clock.C, sc.diff.C, miss.t.C, shot.clock.C [PAGE 5].

Shooting performance index [formula reconstructed from [PAGE 6]; original appears as an image]:
\[
\Pi_i(T) = \frac{1}{|J_T^{(i)}|}\sum_{j\in J_T^{(i)}} \bigl(x_{ij} - \hat{\phi}_j\bigr),
\qquad J_T^{(i)} = \{j : shot.type_{ij} = T\}, \quad T\in\{2P,3P,FT\}.
\]
Units: dimensionless probability units; positive \Pi_i(T) means better-than-average difficulty-adjusted shooting [PAGE 6]. Inclusion requires |J_T^{(i)}| \ge 25 (BCL) or \ge 300 (NBA) [PAGE 7, PAGE 9].

Sample sizes and breakdown regimes: BCL N = 47,849 shots; NBA N = 265,008 shots [PAGE 7]. Minimum terminal-node size is 0.8% of total shots, i.e. approximately 383 shots/node (BCL) and 2,120 shots/node (NBA) [PAGE 8]. AUC values: BCL pruned 0.6617 vs unpruned 0.7084; NBA pruned 0.658 vs unpruned 0.6638 [PAGE 8, PAGE 11]. Singularity/breakdown: if |J_T^{(i)}| falls below the league-specific threshold, \Pi_i(T) is undefined and the player is excluded; if numerical covariates lie near TIM thresholds, small recording changes can reassign shots to different nodes and alter \hat{\phi}_j; if miss.t is missing (NBA), the pressure covariate set is incomplete and sc.diff may absorb team-level variance [PAGE 11, PAGE 15].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Oliver’s Offensive Rating—points scored per 100 possessions [PAGE 2]—and Hollinger’s per-minute refinement [PAGE 2]. It descends from Csataljay et al.’s link between field-goal percentage and game outcome [PAGE 2], Piette et al.’s offensive performance measure [PAGE 2], and Zuccolotto et al.’s high-pressure shooting index applied to the 2016 Olympics [PAGE 2]. The pressure construct draws on Goldman & Rao, who define pressure as the marginal impact of an additional point as a function of score margin and time remaining [PAGE 3], and Tango et al., who define high-pressure as situations where the result is on the line [PAGE 3]. Methodologically it inherits Breiman’s CART framework [PAGE 3, PAGE 16], with Hanley & McNeil’s ROC/AUC used for pruned-versus-full-tree robustness [PAGE 8, PAGE 11, PAGE 16].

Multi-week traps embedded in this genealogy: (1) roster churn means a player’s \Pi(T) estimated over a season may not transfer to the next week if role, minutes, or shot diet changes; (2) the NBA bottom-left quadrant is populated largely by rookies [PAGE 13], indicating a small-sample/experience trap where early-season noise masquerades as structural underperformance; (3) the “ad-hoc” shot-count thresholds [PAGE 7, PAGE 9] create a selection cliff across weeks—players crossing the 25- or 300-shot boundary enter or exit the index discontinuously; (4) league translation is non-stationary: BCL and NBA differ in court dimensions, quarter length, shot-clock reset rules (24 s vs 14 s after reset), and the presence of possession-type effects [PAGE 7, PAGE 14], so a European index value cannot be ported to an NBA roster decision without re-estimation; (5) cumulative fatigue and back-to-back load are absent from covariates, so a multi-week inference using \Pi(T) as a static player attribute will misattribute fatigue-driven decline to skill regression.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression is directly measurable in the free-throw splits: when the previous free throw was made, FT scoring probability is 0.7294 (BCL) and 0.7747 (NBA); after a miss it falls to 0.6931 (BCL) and 0.7508 (NBA) [PAGE 8, PAGE 12]. This is the recursive habit: a missed shot conditions the player’s next attempt, and the tree captures the resulting probability depression as miss.pl.

Counter-trap: coaching staff may read raw field-goal percentage and feed the ball to a “hot” or “clutch” reputation player who actually occupies a low-index quadrant because their volume comes from easy shots. The index reverses this: top-right quadrant players (positive \Pi(2P), positive \Pi(3P)) should handle the ball in crucial moments, while bottom-left players (negative both) should be traded or given less shooting responsibility if not rookies [PAGE 14]. A counter-trap error occurs when staff substitute a bottom-left player into a late possession based on reputation rather than \Pi(T); the model’s quadrant logic predicts negative expected contribution relative to league average.

Clock layer: shot-clock expiration and quarter end define the temporal pressure boundary. Two-point shots at time end (last ≈5 seconds) score at 0.4145 (BCL) and 0.4432 (NBA), versus 0.4807 (BCL) and 0.4919 (NBA) for middle-end shots [PAGE 8, PAGE 12]. Three-point shots attempted early in the quarter-end window score at 0.2160 (BCL) and 0.2340 (NBA), versus 0.3391 (BCL) and 0.3461 (NBA) in normal conditions [PAGE 8, PAGE 12]. In the NBA, fourth-quarter 3-pointers score at 0.3537 versus 0.3764 in other quarters [PAGE 12]. The recursive theory of mind therefore nests player habit (miss.pl), coach belief (raw-percentage counter-trap), and clock state (shot.clock, time, quarter) into a single pressure node; only players whose \Pi(T) remains positive in the late-clock, close-score-margin terminals are genuine clutch operators rather than beneficiaries of easy-shot selection.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: BCL court is 28×15 m; NBA is 28.7×15.2 m [PAGE 7]; game duration is 40 minutes (4×10) versus 48 minutes (4×12) [PAGE 7]; rim height and ball are standard but are not modeled as covariates. Veto: any spatial inference beyond shot.type (2P/3P/FT) is unidentifiable because distance-to-basket within the arc, defender distance, and release height are absent [PAGE 4].

Biomechanical layer: individual fatigue, minutes played, and game density are not covariates [PAGE 4]. The variable miss.t (team missed-shot ratio) attempts to proxy that the team has performed poorly [PAGE 3], but it is a team-level, game-to-date aggregate, not player-level biomechanical load, and it is dropped in the NBA [PAGE 11]. Veto: \Pi(T) cannot be used to diagnose fatigue-driven shooting collapse across a back-to-back or a congested week; the model has no within-player temporal fatigue state.

Weather layer: basketball is indoor, so ambient weather is null [PAGE 7]. However, arena altitude, humidity, and HVAC conditions are unmodeled and may interact with ball flight and player grip; the paper reports no such controls. Veto: cross-venue comparisons (e.g., BCL vs NBA) that ignore venue physics are not supported by the covariate set.

Adjudication proof: the index is explicitly a shooting-performance measure only, not a global player assessment [PAGE 2]. Therefore any decision rule that uses \Pi(T) to rank overall player value, allocate salary, or predict non-shooting outcomes (passing, rebounding, defense) is vetoed by the paper’s own scope limitation. The only non-vetoed use is difficulty-adjusted shot selection within the modeled covariate space.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1: A BCL player in the top-right quadrant (\Pi(2P)>0, \Pi(3P)>0) attempts a 2-point shot with shot.clock in the “time end” terminal and score margin within ±2 points. The tree assigns \hat{\phi} \approx 0.4145 for time-end 2P shots [PAGE 8]. If the shot is missed, the index contribution is x_{ij}-\hat{\phi}_j = -0.4145; if made, +0.5855. Veto: do not reward the player with binary clutch credit; the difficulty-adjusted expectation already discounts the make. Prediction: raw field-goal percentage will overestimate clutch value by at least ~0.41 expected index points per attempt relative to \Pi(2P) for this shot class.

Veto scenario 2: An NBA coaching staff substitutes a bottom-left quadrant player (e.g., D. Fox, D. Smith Jr., D. Wade, J. Jackson [PAGE 13]) into the final possession instead of a top-right player (Curry, Durant, Irving, Towns, Paul [PAGE 13]) based on reputation. Veto: the quadrant assignment implies negative difficulty-adjusted expectation for both 2P and 3P. Prediction: expected points per possession from that substitution will be lower than the league-average difficulty-adjusted baseline by at least the gap between the player’s \Pi(T) and zero, with directionally negative game impact in close-score, late-clock terminals.

Veto scenario 3: An analyst re-introduces miss.t into the NBA tree despite the source stating it could not be correctly counted from BigDataBall recordings [PAGE 11] and Note 4 asserting its exclusion does not alter results [PAGE 15]. Veto: measurement error in miss.t would inject team-level noise correlated with sc.diff and degrade the tree’s local probability estimates. Prediction: AUC will change by less than 0.01 (mirroring the BCL pruned-vs-full marginality of 0.6617 vs 0.7084 and NBA 0.658 vs 0.6638 [PAGE 8, PAGE 11]), but calibration of \hat{\phi}_j in close-score nodes will deteriorate because team-miss variance is misattributed to score margin.
</RLVR_COUNTERFACTUAL_VETOES>