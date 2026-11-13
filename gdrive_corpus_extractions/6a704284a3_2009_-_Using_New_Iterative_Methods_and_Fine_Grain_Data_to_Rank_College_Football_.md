---
source: "2009 - Using New Iterative Methods and Fine Grain Data to Rank College Football Teams - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2009"
pages: 33
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4426
---

<NATIVE_REASONING>
The user wants a deep reasoning output for a specific research paper about college football rankings. I need to follow strict invariants:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

No betting lines. No toy equations like Force/Fatigue. Need formal math where appropriate. Need page citations.

Let me carefully extract source facts:

- Paper: "Using New Iterative Methods and Fine Grain Data to Rank College Football Teams" by Maggie Wigness, Michael Rowell & Chadd Williams, Pacific University. NESSIS 2009. 33 pages.
- Page 2: BCS History, ranking since 1998, computer rankings no longer use scores, common data: Location, Date, Strength of Schedule, Outcome of a Game.
- Page 3: Importance - determines National Championship Bowl, breaks conference ties, influences bowl selections.
- Page 4: BCS Bowl Game Accuracy table 1998-2008. Correct 82, Incorrect 63, Accuracy 56.6%. p-value = 0.0673. "56.6% is not statistically significant". Assumption: higher ranked team should win.
- Page 5: Preliminary Results - Difference of Scores p-value < .01. Scores help rank teams. Table with score difference accuracy: 87 correct, 58 incorrect, 60.0% total. Yearly values listed.
- Page 6: Play-by-Play Method - finer grain data from play-by-play statistics. Stats should reflect team success, help predict outcome, indicate magnitude of win/loss.
- Page 7: Getting Statistics - web-crawler to download pages, parser extracted data into database.
- Page 8: URL example: http://web1.ncaa.org/d1mfb/driveSummary.jsp?expand=A&acadyr=2006&h=472&v=655&date=31-AUG-06&game=null
- Page 9: Only retrieved full sets for past 3 seasons (2006-2008 presumably). Ran over 40 statistics on 2007-2008 season. Results based on 32 bowl games that year.
- Pages 10-11: Table of play-by-play stats and accuracies. Many starred *Game Within 14 Points. Values like 3rd Down Conversions 65.6, Yards Per Play 59.4, 1st Down Per Set of Downs 68.8, etc.
- Page 12: BCS Comparison table. Play-by-Play stats % vs BCS Method 47.1. 2007-2008 season, games including at least 1 BCS-ranked team. *Game within 14 points.
- Page 13-15: Combination of Statistics. 4 play-by-play statistics did well in 2007-2008. Combined 3 statistics with weights. Ran all possible weight combinations on 3 years. Best combinations for 2008-2009 table: weights for 1st Down Per Set of Downs*, 1st Down Per Set of Downs in 1st Half*, 3rd Down Conversions. Overall accuracies: 82.4, 82.4, 85.3, 82.4, 76.5, 73.5. Combinations 73.3%, BCS 33.3% (probably for that year). Significantly better than BCS.
- Page 16: No combination worked consistently year to year. Look for another method.
- Page 17: Week-By-Week Learning - ran combinations week-by-week, kept best weights, averaged weights, used averages for overall ranks.
- Pages 18-20: Week-by-Week Results (graphs/tables not fully transcribed).
- Page 21: Comparison to BCS table 2006, 2007, 2008. Combination of Week-by-Week Learning: 58.8, 64.7, 53.3. Peak Combination: 70.6, 70.6, 73.3. BCS Method: 70.6, 47.1, 33.3. Accuracy based only on games including at least one BCS-ranked team.
- Page 22: Conclusions - evidence of accuracy using play-by-play; combinations more accurate than single statistic.
- Page 23: Future work - many other stats, more effective method for determining weights, URL.
- Page 25: Statistics to Pursue table 2006, 2007, 2008 with various accuracies.
- Page 26: Overview - Develop Rankings, Generate Game Values with Strength of Schedule, Generate Game Values, Team Value.
- Page 27: Similar Methods - iterative methods using statistics similar to BCS. Development of Game Values - Difference of scores.
- Pages 31-33: Combinations of Two - weight of Stat 1 * Game Value using Statistic 1 + (100 - Weight of Stat 1) * Game Value using Statistic 2. Add to get final game value. Combination Outcome * Close Game Statistic.

Important: The user says "DRIVE SOURCE" and gives pages. I must cite exact [PAGE N] markers and verbatim quotes.

Now structure:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation and gray-zone audit. Discuss the chain from BCS binary outcome (56.6%, p=0.0673) -> score difference (p<.01, 60.0%) -> play-by-play granularity (up to 68.8% individual, combinations up to 85.3% on small bowl sample) -> week-by-week weight averaging -> instability across years (no consistent combination) -> the "close game within 14 points" filter as a selection/gray zone. Audit gray zones: small N (32 bowl games, some subset with BCS teams), multiple comparisons over 40+ statistics and weight grids (family-wise error, winner's curse), non-stationarity across seasons, leakage via using in-season data to predict bowls (temporal overlap?), deterministic ranking assumption (higher ranked should win) vs stochastic reality. Also note p=0.0673 is marginally non-significant at alpha=0.05, but score difference p<.01 is significant. Gray zone: accuracy metrics are classification accuracy on imbalanced/selected samples, not proper scoring rules; no calibration, no Brier score, no confidence intervals beyond p-values. Mention singularity/breakdown: when sample N small (bowl subsets), binomial standard error sqrt(p(1-p)/n) is large; e.g., n=17 (BCS games 2007-08?), SE ~12%, so 73.3% vs 33.3% difference may not be robust. Need to be careful not to invent fake ratios. Use binomial SE formula formally.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Define binary prediction operator: \hat{y}_{ij} = \mathbb{1}[r_i > r_j] where r is rank. Accuracy A = (1/N) \sum \mathbb{1}[\hat{y}_{ij} = y_{ij}]. BCS: N=145 (82+63), A_BCS=0.566, p=0.0673 under H0: p=0.5 (binomial test). Score diff: N=145 (87+58), A=0.600, p<.01. Play-by-play individual: e.g., 1st Down Per Set of Downs* = 68.8% on 32 bowl games (n=32, SE = sqrt(0.688*0.312/32) ≈ 0.082). Combination: weighted sum S_{ij} = w_1 V^{(1)}_{ij} + w_2 V^{(2)}_{ij} + w_3 V^{(3)}_{ij}, w_k \in [0,1], \sum w_k = 1, V^{(k)} game value from statistic k. Week-by-week: \bar{w}_k = (1/T) \sum_{t=1}^T w_k^{(t)}. Breakdown regimes: n_bowl small (32), n_BCS subset smaller (~17 for 2007-08?), multiple testing over 40+ stats => family-wise error inflation; non-stationarity: weights optimized on 2006-2008 fail to transfer (page 16). Units: accuracy dimensionless [0,1], p-value dimensionless probability, weights dimensionless percentages. Cite pages exactly.

<RETROCAUSAL_GENEALOGY>: Historical lineage: BCS computer rankings (1998, page 2), removal of margin of victory/scores (page 2), Wigness et al. reintroducing fine-grained play-by-play to recover information discarded by BCS (pages 4-6). Multi-week traps: week-by-week learning (page 17) risks overfitting to weekly noise; averaging weights assumes ergodicity/stationarity across the season (page 16 explicitly says no combination worked consistently year to year). The "close game within 14 points" filter (* on pages 10-12, 14-15, 25) creates a retrospective conditioning trap: conditioning on margin \le 14 is a post-game collider/selection that can induce spurious predictive relationships because close games are a non-random subset (selection on outcome-adjacent variable). Also the bowl-game-only evaluation (pages 4, 9, 12, 21) is a small, non-representative end-of-season sample; teams self-select into bowls based on prior performance, inducing selection bias.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but must map to the paper context. Crisis habit regression: under pressure (BCS national championship implications, page 3), committees/regress to simple heuristics (win/loss only, no scores). Counter-trap: the paper's iterative fine-grained method is a counter to the BCS simplification, but risks its own overfitting trap (weight optimization on 3 years, page 13-15). Clock: the week-by-week learning (page 17) is a clocked adaptation—weights update weekly, but bowl predictions happen after the clock stops (regular season ends), creating a mismatch between training clock (weekly) and evaluation clock (bowls). Teams/coaches may regress to conservative habits in close games (<14 points), which the starred stats attempt to capture, but this is a crisis-habit regression that may not generalize to blowouts or bowls with different motivation.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Need to argue what the model cannot see: play-by-play stats from NCAA drive summary (page 8 URL) do not capture weather (wind, precipitation, temperature), biomechanical factors (player fatigue, injury, snap counts), physical turf/stadium effects, travel/location (page 2 mentions Location as common data but play-by-play model may not incorporate it), altitude, etc. Since rankings rely solely on extracted play-by-play counts (downs, conversions, yards per play), any game where weather or biomechanical state dominates (e.g., severe wind suppressing passing, high altitude, short-week travel, key injuries) is a veto layer: the statistical model lacks causal nodes for these, so its accuracy breaks down. Formal veto: if \exists exogenous layer L \in {weather, biomechanical injury, travel fatigue} not in feature set X, and L \not\perp Y | X, then conditional independence fails and the model is misspecified. Because pages 6-7 only mention web-crawled drive summary stats, there is no evidence of weather/biomechanical covariates.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. Need 3 counterfactual veto scenarios that are verifiable (falsifiable). Each with prediction.

1. Veto: Close-game filter (*Game within 14 points) creates selection bias. Counterfactual: re-run the best combination weights from page 15 (10/10/80 = 85.3%) on all games regardless of margin; prediction: accuracy drops significantly below 85.3% and likely toward or below BCS ~47-58% because close-game-specific downs/conversions don't generalize to blowouts. Verifiable by checking page 12 vs page 10 unstarred values (e.g., 3rd Down Conversions 65.6% overall vs 64.7% BCS comparison; but need to note starred vs unstarred). Actually page 10 lists unstarred and starred mixed. But we can state prediction.

2. Veto: Week-by-week weight averaging assumes stationarity; page 16 says no combination worked consistently year to year. Counterfactual: apply 2007-08 optimized weights to 2008-09 bowl games without re-optimizing; prediction: accuracy collapses from peak 73.3% (page 15/21) to near chance (50%) or below BCS because weights are non-stationary. Verifiable via page 16 and page 21 (Peak Combination requires re-optimization per year).

3. Veto: Omission of weather/location/biomechanical covariates. Counterfactual: compare prediction accuracy for games played in extreme weather (e.g., temperature < freezing, precipitation, high wind) vs domed/neutral warm-weather bowls; prediction: model accuracy is significantly lower in adverse exogenous conditions because drive-summary stats (page 7-8) contain no weather layer. Verifiable by merging NCAA drive summaries with weather records (NOAA) for the 32 bowl games (page 9 says 32 bowl games) and stratifying.

Need to ensure no betting lines. No mention of spreads, totals, moneylines, odds. The paper mentions "Accuracy" which is fine. Avoid "odds" entirely. Avoid "spread". Avoid "moneyline". Avoid "total" as betting total. Use "accuracy", "proportion", "binomial test", "p-value".

Need >=1000 words total across sections. THINK_TRACE alone >=400. Let's aim for each section substantial.

Word count estimation: THINK_TRACE ~500, SOURCE ~300, RETRO ~250, RECURSIVE ~250, CROSS ~250, RLVR ~250. Total ~1800. Good.

Need exact XML section names. Must be well-formed XML-ish (not necessarily parsed but use tags). I'll wrap everything in those tags in order. The user specified exact sections. I will output only those sections in order.

Need verbatim quotes and [PAGE N] citations. I'll include quotes like "56.6% is not statistically significant" [PAGE 4], "p-value = 0.0673" [PAGE 4], etc.

Let's draft carefully.

LaTeX equations:
- Binary ranking predictor: \hat{y}_{ij} = \mathbf{1}\{r_i > r_j\}
- Accuracy: A = \frac{1}{N}\sum_{(i,j)\in\mathcal{G}} \mathbf{1}\{\hat{y}_{ij} = y_{ij}\}, y_{ij}\in\{0,1\}.
- Binomial standard error: \sigma_A = \sqrt{\frac{A(1-A)}{N}}. For N=32, A=0.688, sigma ~0.082.
- Weighted game value: V_{ij} = \sum_{k=1}^{K} w_k V^{(k)}_{ij}, w_k\ge0, \sum w_k=1. For two stats: V_{ij} = \lambda V^{(1)}_{ij} + (1-\lambda)V^{(2)}_{ij}, \lambda\in[0,1] (page 31).
- Week-by-week averaged weights: \bar{w}_k = \frac{1}{T}\sum_{t=1}^{T} w_k^{(t)} (page 17).
- Null hypothesis for BCS: H_0: p=0.5 vs H_1: p>0.5; p=0.0673 > 0.05, fail to reject (page 4). Score difference p<.01 reject (page 5).
- Multiple comparisons: m=40+ statistics (page 9), family-wise error rate FWER = 1-(1-\alpha)^m \approx 1 for m large at \alpha=0.05. Don't fake; it's a standard bound. Could mention Bonferroni but careful: it's formal. Fine.

Singularity/breakdown regimes:
- N_bowl = 32 (page 9) => standard error ~8-9%, so differences of a few percentage points are not statistically resolvable.
- BCS-subsample N smaller (page 12, 21) => even larger SE.
- Non-stationarity across years (page 16) => weights overfit to 2006-2008 and fail out-of-sample.
- Conditioning on margin \le 14 points (*) => collider/selection bias; breaks when games are blowouts or neutral-site bowls with different motivation.

Make sure not to say "odds". Use "probability".

Citations: [PAGE 4], [PAGE 5], etc.

Let's write.

Need to be careful: The user asked "DRIVE SOURCE" maybe meaning use that source. I will.

Now produce final. Ensure sections exact names. No extra text outside? Probably okay to just output the sections. I'll output exactly the six sections in order.

Check word counts mentally:
THINK_TRACE: I'll write around 550 words.
SOURCE_OPERATORS_AND_EQUATIONS: around 350 words.
RETROCAUSAL_GENEALOGY: around 300 words.
RECURSIVE_THEORY_OF_MIND: around 300 words.
CROSS_LAYER_VETO_ADJUDICATION: around 300 words.
RLVR_COUNTERFACTUAL_VETOES: around 300 words.
Total ~2100. Good.

Let's ensure no toy equations. All equations are formal statistical ones from the paper or standard definitions. No invented "Force/Fatigue" ratios.

One concern: "RLVR" might be a specific term the user expects. I'll treat it as "Reinforcement Learning from Verifiable Rewards" or simply "verifiable reward" scenarios. I'll phrase as counterfactual veto scenarios that are verifiable/falsifiable. Provide predictions.

Now write final answer.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s inferential chain begins with the BCS computer-ranking failure mode: using only location, date, strength of schedule, and binary outcome [PAGE 2], the BCS correctly picked 82 of 145 bowl games from 1998–2008, accuracy 56.6%, which the authors explicitly state is “not statistically significant” with p-value = 0.0673 under the assumption that the higher-ranked team should win [PAGE 4]. Because 0.0673 exceeds the conventional alpha = 0.05 threshold, the null hypothesis of a coin-flip predictor cannot be rejected; the BCS ranking signal is therefore statistically weak at the bowl-game level. The first hop upward is the introduction of margin information: “Difference of Scores” yields p-value < .01 and 60.0% accuracy over the same 145-game window [PAGE 5], rejecting the null and establishing that score detail carries predictive information the BCS discards.

The second hop is granularity: play-by-play drive-summary data crawled from NCAA pages [PAGE 7][PAGE 8] are used to compute over 40 statistics across three seasons [PAGE 9]. The best individual statistics reach 68.8% (1st Down Per Set of Downs) [PAGE 10], but the evaluation universe shrinks to 32 bowl games [PAGE 9], and to a smaller BCS-involved subset [PAGE 12]. With N = 32, the binomial standard error around an observed accuracy A is sigma_A = sqrt[A(1-A)/N], which for A = 0.688 is approximately 0.082; an 8–9 percentage-point margin of error means apparent gaps between 65.6% and 68.8% are statistically indistinguishable. The third hop is weight optimization: the authors combine three statistics with weights summing to 100%, search all combinations across three years, and report a peak of 85.3% for weights 10/10/80 on 2008–2009 bowl games [PAGE 15]. This is a classic multiple-comparisons trap: scanning dozens of statistics and weight grids inflates family-wise error, so the reported peak is almost certainly a winner’s-curse estimate.

Gray-zone audit. (1) Selection/collider bias: many statistics are starred “Game Within 14 Points” [PAGE 10][PAGE 14][PAGE 15][PAGE 25], conditioning the analysis on ex-post margin. Conditioning on a post-game outcome-adjacent variable induces spurious associations and invalidates extrapolation to blowouts or neutral-site bowls where motivation differs. (2) Temporal non-stationarity: the authors admit “No combination of statistics worked consistently from year to year” [PAGE 16], yet they average week-by-week weights [PAGE 17], implicitly assuming ergodicity across a single season and across 2006–2008, an assumption the data reject. (3) Small-sample inference: bowl-only subsets (N = 32, or fewer when restricted to BCS-ranked teams [PAGE 12][PAGE 21]) yield standard errors too large to distinguish 73.3% from chance or from the BCS’s 33.3% in a given year. (4) Missing causal layers: the pipeline ingests only parsed drive summaries [PAGE 7], with no weather, injury, travel, altitude, or biomechanical covariates, so conditional independence between the feature set and outcome given those omitted layers is implausible. (5) Deterministic decision rule: the evaluation assumes \hat{y}_{ij} = 1{r_i > r_j}, i.e., higher rank always implies win [PAGE 4], which discards probabilistic calibration entirely. Breakdown regime: whenever N_bowl is small, margin-conditioning is active, or exogenous physical layers dominate, the reported accuracy peaks are not stable out-of-sample estimators; they are in-sample descriptive statistics on a selected end-of-season tournament.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Define a binary game outcome y_{ij} ∈ {0,1} for team i versus team j, and a ranking score r_i. The deterministic predictor used throughout the source is
\hat{y}_{ij} = \mathbf{1}\{ r_i > r_j \},
which is the literal “higher ranked team should win” assumption [PAGE 4]. Accuracy over a set \mathcal{G} of N games is
A = \frac{1}{N} \sum_{(i,j)\in\mathcal{G}} \mathbf{1}\{ \hat{y}_{ij} = y_{ij} }, \quad A \in [0,1] \text{ (dimensionless proportion).}

BCS operator [PAGE 4]: N = 145 (82 correct, 63 incorrect), A_BCS = 82/145 ≈ 0.566. Binomial test of H_0: p = 0.5 versus H_1: p > 0.5 gives p = 0.0673; since p > 0.05, H_0 is not rejected. Score-difference operator [PAGE 5]: N = 145 (87 correct, 58 incorrect), A_{diff} = 87/145 = 0.600, p < 0.01; H_0 rejected.

Play-by-play game-value operator [PAGE 6][PAGE 9]: let V^{(k)}_{ij} be the game value derived from statistic k (e.g., 3rd down conversions, yards per play, first downs per set of downs). A weighted combination across K statistics is
V_{ij} = \sum_{k=1}^{K} w_k V^{(k)}_{ij}, \quad w_k \in [0,1], \quad \sum_{k=1}^{K} w_k = 1.
For two statistics [PAGE 31]: V_{ij} = \lambda V^{(1)}_{ij} + (1 - \lambda) V^{(2)}_{ij}, \lambda \in [0,1], where the source describes “Weight of Stat 1 * Game Value using Statistic 1 + (100 - Weight of Stat 1) * Game Value using Statistic 2.” Units of V are arbitrary ranking units internal to the method, not probabilities, and are not calibrated to win probabilities anywhere in the text.

Week-by-week learning operator [PAGE 17]: best weights w_k^{(t)} are stored each week t = 1,\dots,T and averaged:
\bar{w}_k = \frac{1}{T} \sum_{t=1}^{T} w_k^{(t)},
then used for overall ranks. This assumes stationarity of optimal weights across the season, which [PAGE 16] explicitly denies year-over-year.

Breakdown / singularity regimes. (i) Small-sample binomial regime: N_bowl = 32 [PAGE 9] gives sigma_A ≈ 0.085 near A = 0.5 and ≈ 0.082 near A = 0.688; differences under roughly 16–17 percentage points are not statistically resolvable at the 95% level. BCS-restricted subsets are smaller still [PAGE 12][PAGE 21], widening sigma further. (ii) Multiple-comparisons regime: over 40 statistics were run [PAGE 9] and all weight combinations were searched [PAGE 13]; the family-wise error rate under independent tests at alpha = 0.05 is FWER = 1 - (1 - 0.05)^m, which approaches 1 as m grows, invalidating unadjusted peak accuracy claims. (iii) Non-stationarity regime: [PAGE 16] states no combination worked consistently from year to year, so \bar{w}_k optimized on 2006–2008 has no guaranteed transport to a new season. (iv) Selection regime: conditioning on margin ≤ 14 points (starred statistics [PAGE 10][PAGE 14][PAGE 15][PAGE 25]) restricts the sample to a non-random subset of games and breaks external validity for blowouts and bowl motivation effects.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

The paper descends directly from the BCS computer-ranking lineage established in 1998 [PAGE 2], which deliberately removed scores from computer rankings and relied on location, date, strength of schedule, and outcome only [PAGE 2]. Wigness, Rowell, and Williams treat that deletion as an information loss: the BCS’s 56.6% bowl accuracy (p = 0.0673) [PAGE 4] motivates reintroducing margin [PAGE 5] and then play-by-play granularity [PAGE 6]. Scientifically, this is a move from coarse ordinal classification to fine-grained feature engineering, analogous to replacing win/loss with expected-points or drive-success models in later sports analytics, though here the endpoint remains a deterministic accuracy count rather than a calibrated probability model.

The multi-week trap is central. The authors pivot from static combinations [PAGE 13–15] to “Week-By-Week Learning” [PAGE 17], tracking best weights each week and averaging them [PAGE 17]. This creates two nested traps. First, weekly weight optimization is a sequential multiple-testing problem: each week offers a new opportunity to overfit noise in that week’s small sample of games, and averaging those weights does not remove the selection bias introduced by picking the “best” weights weekly. Second, because [PAGE 16] shows cross-year inconsistency, the week-by-week procedure assumes within-season stationarity that the authors’ own results undermine; the clock of weekly updates does not align with the evaluation clock of post-season bowls, where team motivation, player opt-outs, and preparation time differ from regular-season games [PAGE 3 context]. The retrospective conditioning on “Game Within 14 Points” [PAGE 10] is a further retrocausal trap: ex-post margin is used to select features whose predictive validity is then claimed ex-ante, reversing the direction of inference.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

The recursive theory of mind here concerns what decision-makers (BCS committees, coaches, and the modelers themselves) do under crisis. Under BCS crisis—national-championship access, conference tie-breaks, bowl selections [PAGE 3]—the habit regression is toward parsimony: strip out scores, use only outcome and strength of schedule [PAGE 2], producing the weak 56.6% signal [PAGE 4]. That is a crisis-driven simplification bias: when stakes are high, the system regresses to legible, explainable, but low-information rules.

The paper’s counter-trap is to reintroduce information (score difference [PAGE 5], then 40+ play-by-play statistics [PAGE 9]) and to optimize weights adaptively [PAGE 13–17]. But this counter-trap contains its own regression: under the pressure to “beat the BCS” [PAGE 15 shows combinations “significantly better than the BCS Method”], the modelers regress to a search heuristic—grid-searching weights until a peak appears on 32 bowl games [PAGE 9][PAGE 15]. That is an overfitting reflex masquerading as methodological rigor.

The clock distinguishes the two regimes. The BCS clock is slow and annual: rankings are computed season-long and evaluated at bowl season [PAGE 2–4]. The play-by-play clock is weekly [PAGE 17], with weights re-estimated each week and averaged. Because the prediction target (bowl outcomes) occurs only after the regular-season clock stops [PAGE 9], the weekly adaptation loop is optimizing a proxy target (weekly game prediction) that may not transfer to the bowl target, especially given the documented lack of year-to-year consistency [PAGE 16]. Thus the recursive loop is: crisis induces simplification (BCS), counter-trap induces complexity (fine-grain weekly search), and the clock mismatch between weekly fitting and bowl evaluation determines whether the complexity generalizes or merely memorizes.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

The source’s feature extraction layer is limited to web-crawled NCAA drive-summary play-by-play statistics [PAGE 7][PAGE 8], parsed into a database [PAGE 7]. The only contextual game data mentioned in the BCS-common layer are Location, Date, Strength of Schedule, and Outcome [PAGE 2], and the play-by-play models described on pages 6–15 contain no explicit weather, biomechanical, injury, travel, altitude, or surface covariates. Therefore a formal veto condition applies: let X be the play-by-play feature vector and let L ∈ {weather, biomechanical state, injury status, travel fatigue, altitude} be an exogenous physical layer. If L is not independent of the outcome Y conditional on X — formally, Y \not\perp L | X — then the ranking model is misspecified and its accuracy claims are vetoed for games where L dominates.

Physical/weather veto: Bowl games occur in late December and January across climates; wind, precipitation, and temperature directly suppress passing efficiency, third-down conversion rates, and yards per play [PAGE 10 stats], yet none of these appear in the crawled drive summaries [PAGE 7–8]. A cold, windy outdoor bowl can depress the very statistics (e.g., yards per play, third-down conversions [PAGE 10]) that the model weights most heavily [PAGE 15], producing systematic error uncorrected by the model.

Biomechanical/injury veto: Play-by-play aggregates conceal player availability and fatigue. A team missing its starting quarterback or offensive line will exhibit worse first-down-per-set and red-zone performance [PAGE 10–11], but the database records only the observed statistic, not the biomechanical cause. The model therefore conflates personnel-driven performance decay with stable team quality.

Cross-layer adjudication rule: any game in which an exogenous layer L materially shifts the conditional distribution of Y given X is outside the model’s domain of validity. Because the source provides no adjustment for weather, injuries, or travel, every bowl-game accuracy figure [PAGE 4][PAGE 5][PAGE 9][PAGE 12][PAGE 15][PAGE 21] is conditional on an unobserved physical layer and cannot be treated as a causal or transportable ranking proof. The model is proven only within the narrow manifold of NCAA drive summaries for the 2006–2008 seasons [PAGE 9], not across the full physical game layer.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with predictions. RLVR here denotes reinforcement-style evaluation against verifiable, falsifiable outcomes; no betting lines, spreads, totals, or odds are referenced.

Veto Scenario 1 — Removal of the close-game condition. Counterfactual: Re-estimate the best 2008–2009 combination (weights 10/10/80, reported accuracy 85.3% [PAGE 15]) on the same bowl games without restricting to “Game Within 14 Points” [PAGE 10][PAGE 14][PAGE 15]. Verification source: page 15 reports the conditional peak; page 10 lists unconditioned individual statistics (e.g., 3rd Down Conversions 65.6%, 1st Down Per Set of Downs 68.8%) that can be re-combined over all 32 bowl games [PAGE 9]. Prediction: out-of-sample accuracy on the unconditioned set falls materially below 85.3%, likely toward the 47–65% range seen for BCS-involved games [PAGE 12][PAGE 21], because close-game down/conversion features are selected on ex-post margin and do not generalize to blowouts.

Veto Scenario 2 — Cross-year weight transport without re-optimization. Counterfactual: Take the 2007–2008 peak combination weights (page 12 reports BCS-method 47.1% and play-by-play statistics up to 70.6% for BCS games [PAGE 12]) and apply them unchanged to 2008–2009 bowl games, rather than re-searching weights as [PAGE 13–15] does. Verification source: page 16 explicitly states “No combination of statistics worked consistently from year to year,” and page 21 shows the BCS Method itself varying from 70.6% (2006) to 47.1% (2007) to 33.3% (2008) [PAGE 21]. Prediction: accuracy collapses from the reported peak of 73.3% [PAGE 15][PAGE 21] to near or below the chance line (50%), demonstrating that the weight grid is memorizing year-specific noise rather than learning stable team parameters.

Veto Scenario 3 — Exogenous weather stratification. Counterfactual: Merge the 32 bowl games [PAGE 9] with historical weather observations for each bowl site and stratify accuracy by adverse versus benign conditions (e.g., temperature below freezing, precipitation, or sustained wind versus domed/warm-weather sites). Verification source: play-by-play inputs come solely from NCAA drive summaries [PAGE 7–8] and contain no weather fields; page 10’s statistics (yards per play, third-down conversions, first downs per set of downs) are physically sensitive to weather. Prediction: model accuracy is significantly lower in adverse-weather games than in benign/dome games, and the gap is large enough to veto any claim that play-by-play statistics alone are a sufficient ranking layer across all bowl environments.
</RLVR_COUNTERFACTUAL_VETOES>