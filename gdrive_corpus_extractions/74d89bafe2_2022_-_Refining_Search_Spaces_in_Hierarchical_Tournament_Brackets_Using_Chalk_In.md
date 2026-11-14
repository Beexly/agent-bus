---
source: "2022 - Refining Search Spaces in Hierarchical Tournament Brackets Using Chalk Index - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Carnegie Mellon Sports Analytics Conference/2022"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4459
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about "Chalk Index" for NCAA tournament brackets. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully read the source text and extract information, citing page numbers where possible. The source text appears to be from pages 1-10 of the PDF (the text shows page numbers 1-10 at the bottom).

Let me map content to pages:
- Page 1: Title, Abstract, Introduction start
- Page 2: Introduction continued, Section 2 Background (Tournament Bracket History, History of Bracket Prediction)
- Page 3: Section 2 continued, Section 3 Description of Data, Section 4 Methodology of Chalk Index start
- Page 4: Section 4.1 Calculation of Chalk Index, Figure 2 reference, Section 4.2 Logistic Regression
- Page 5: Logistic Regression continued, Section 5 Experiments, Generation Methods, Table 1, Algorithm 1 & 2
- Page 6: Section 5.2 Evaluation Metrics, Table 2, t-test
- Page 7: Section 6 Results, Table 3
- Page 8: Table 4, Table 5, Figure 3
- Page 9: Section 7 Future Extensions, Figure 4, Section 8 Conclusion
- Page 10: References

Wait, looking at the text markers:
- "2 TOUKMAJI..." appears after page 1 content
- "3 TOUKMAJI..." appears after some content
- "4 TOUKMAJI..." 
- "5 TOUKMAJI..."
- "6 TOUKMAJI..."
- "7 TOUKMAJI..."
- "8 TOUKMAJI..."
- "9 TOUKMAJI..."
- "10" at end

So page numbers seem to be:
- Abstract/Intro: Page 1
- Section 2: Page 2
- Section 3/4 start: Page 3
- Section 4.1/4.2: Page 4
- Section 5 start: Page 5
- Section 5.2: Page 6
- Section 6/Table 3: Page 7
- Tables 4-5: Page 8
- Section 7-8: Page 9
- References: Page 10

I need to be careful with citations. I'll use [PAGE N] format.

Key equations from the paper:
- Chalk Index formula: sum over rounds j of 2^(j-1) * sum over i of |α_ij - π_ij| (though the exact LaTeX in the image isn't fully visible, the text describes it: "absolute value of the difference between the seeds of the winners in each matchup, and multiply it by two raised to the power of one less than the round number")
- Logistic function: σ(β₀ + Σ βᵢxᵢ) though the exact equation image isn't shown, text mentions Equation 2
- Win percentage threshold: 763/1024 ≈ 0.745 (though text has some garbled OCR: "1024763≈0.745")
- Bracket Score: 1,2,4,8,16,32 points per round, max 192
- t-test formula mentioned but image not fully visible

Constraints: No betting lines. I must not mention spreads, totals, moneylines, or odds. I can mention probabilities, percentages, p-values, but not betting odds.

Let me structure the response:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). Discuss the Chalk Index derivation, the matrix representation, the search space reduction, gray zones like KenPom data bias via WayBackMachine, the assumption that seed = strength, the backward generation constraint, the fact that Stochastic Best Team Generation sometimes performs worse with Chalk Index (2021 p=0.629), etc.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations, units, page citations. Include:
- Total brackets: 2^63 ≈ 9.22×10^18 [PAGE 1]
- Chalk Index: γ_y = Σ_{j=1}^{log₂n} 2^(j-1) Σ_i |α_ij - π_ij| where α is Chalk, π is hypothesis, n teams, matrix size (n/2)×(log₂n) [PAGE 3-4]
- Four-team example Chalk Index = 8 [PAGE 4]
- Logistic: P(y=1|x) = 1/(1+e^{-(β₀+Σβᵢxᵢ)}) [PAGE 4]
- Win % threshold: 763/1024 ≈ 0.745 [PAGE 5]
- Bracket Score: max 192, 63 games [PAGE 6]
- t-test: two-sample independent t-test [PAGE 6]
- Table 1 records [PAGE 5]
- Results tables [PAGE 7-8]

<RETROCAUSAL_GENEALOGY>: Historical lineage: Warren Buffett 2014 billion dollar bracket [PAGE 1-2], Google Kaggle 2014 March Machine Learning Madness [PAGE 2], Balance Optimization Subset Selection [3], ESPN BPI [11], KenPom [12], NCAA selection committee [10]. Multi-week traps: data leakage from KenPom updates during tournament, WayBackMachine mitigation [PAGE 1,3], 2020 COVID cancellation [PAGE 1,3], training 1985-2016 testing 2017-2022 [PAGE 3].

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Discuss how participants regress to chalk under pressure, counter-trap is anti-chalk (picking upsets), clock is tournament progression. The paper's stochastic component respects the 74.5% historical baseline but Chalk Index constraint can hurt when actual variance deviates (e.g., 2021 stochastic + chalk index p=0.629 not significant, mean slightly lower).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. This is tricky since it's basketball analytics. I need to discuss physical constraints: team roster availability, injuries, travel, venue (neutral court), fatigue across single-elimination, home court (none in tournament), weather (minimal indoor), referee assignments. Veto proof means identifying conditions where the model breaks: player injury (biomechanical), COVID protocols (2020), referee bias, altitude/travel (biomechanical/physical).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios. Three scenarios:
1. Key player injury after bracket lock but before game: veto Chalk Index constraint because seed strength assumption breaks. Prediction: model overestimates higher seed.
2. 2020-style cancellation/pause: veto entire bracket generation due to null set. Prediction: no valid bracket.
3. Extreme upset year (e.g., 2018 UMBC over Virginia): Chalk Index sampling from historical distribution fails because realized Chalk Index is out-of-sample extreme. Prediction: Chalk Index constrained brackets underperform unconstrained.

I need to ensure >=1000 words total across sections. Each section should be substantial. THINK_TRACE >=400 words alone.

Let me write carefully, avoiding any betting terminology. Use "probability," "win percentage," "p-value," "expected value" but not "odds," "spread," "moneyline," "total," "line."

Word count check: I'll aim for ~1500+ words total.

Let me draft each section.

THINK_TRACE (>=400 words):
Deep multi-hop derivation. Start with combinatorial explosion: 2^63 brackets. Chalk index as a regularizer on search space. Matrix representation: bracket as (n/2) x log2 n matrix. Element-wise subtraction between hypothesis π and chalk α. Round weighting 2^(j-1) means later rounds matter more. The metric induces a prior over brackets. Gray zones: KenPom data updated during tournament creates look-ahead bias; WayBackMachine used to get pre-tournament snapshots but archival fidelity is untested. Assumption that lower seed = stronger team is committee-dependent (NCAA) vs empirical (NBA), creating a distribution shift. Stochastic Best Team Generation uses 763/1024 = 74.5% as threshold from 1985-2016, but applying to 2017-2022 assumes stationarity. The backward generation algorithm (champion first, propagate wins) creates conditional dependencies that violate independent game assumptions. Results show Random + Chalk Index massive gains (p < 1e-18), Logistic + Chalk Index massive gains (p < 1e-6), but Stochastic + Chalk Index mostly loses or is neutral (2021 p=0.629). Gray zone: when the stochastic method already approximates the chalk distribution, adding Chalk Index is redundant or harmful because it over-constrains to historical quantiles. Also, t-test assumes independent samples but brackets generated hierarchically are correlated.

SOURCE_OPERATORS_AND_EQUATIONS:
Formal LaTeX.
- N_brackets = 2^(n-1) for n teams? Actually for 64 teams, 63 games, 2^63. [PAGE 1]
- Matrix size: (n/2) × (log₂ n). [PAGE 3]
- Chalk Index: γ_y = Σ_{j=1}^{R} 2^{j-1} Σ_{i=1}^{n/2^j?} |α_{ij} - π_{ij}|. Need to be careful. Text says "sum of these values for all games for a year y". Matrix rows are teams in that round. In round j, there are n/2^j games? Actually matrix is (n/2) x (log2 n) where each column j is a round and each row i is a team in that round. But number of teams halves each round. The description is a bit ambiguous but I'll state it as given: α and π are matrices of size (n/2) × (log₂ n). Chalk Index = Σ_j 2^{j-1} Σ_i |α_{ij} - π_{ij}|. [PAGE 3-4]
- Four-team example yields γ = 8. [PAGE 4]
- Logistic: p = 1 / (1 + exp(-(β₀ + Σ_{k=1}^m β_k x_k))). [PAGE 4]
- Win percentage threshold: w = 763 / (763 + 261) = 763/1024 ≈ 0.7451. [PAGE 5]
- Bracket Score: S = Σ_{r=1}^6 2^{r-1} · c_r where c_r ∈ {0,1} is correct prediction count in round r? Actually points per correct prediction: round r gives 2^{r-1} points. Max score = Σ 32·2^{r-1}? No, table shows 32 points per round, total 192. So max per round is 32 regardless of round because number of games halves and points double. S_max = 192. [PAGE 6]
- t-test: t = (μ₁ - μ₂) / sqrt(σ₁²/n₁ + σ₂²/n₂). [PAGE 6]
Units: bracket score in points (dimensionless points), Chalk Index in seed-difference-weighted units (seed-rank units × round weight), probability in [0,1], p-value dimensionless.

RETROCAUSAL_GENEALOGY:
Historical lineage: Buffett 2014 [PAGE 1-2], Google Kaggle 2014 [PAGE 2], Dutta et al. BOSS [3], ESPN BPI [11], KenPom [12], Matthews et al. PageRank [9]. Multi-week traps: temporal leakage from KenPom mid-tournament updates mitigated by WayBackMachine but not fully verifiable [PAGE 1,3]; 2020 null tournament creates gap in time series [PAGE 1,3]; training/test split 1985-2016 vs 2017-2022 assumes ergodicity across regime changes (transfer portal, NIL, one-and-done) [PAGE 3]; committee seeding vs empirical ranking creates stationarity trap [PAGE 7 Future Extensions].

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under pressure, bracket pickers regress to chalk (lower seeds). Counter-trap: picking upsets to differentiate in pools. Clock: single-elimination temporal pressure means no regression to mean over series; one game eliminates. The paper models crisis habit via 74.5% chalk baseline. Counter-trap is the stochastic deviation (25.5% upset rate). Clock effect: backward induction in Algorithm 1/2 means later-round errors propagate backward, amplifying early mistakes. When Chalk Index constraint is added, it resamples until historical chalk-index match, effectively imposing a macro-structure that may conflict with micro-level logistic predictions (e.g., logistic says upset but chalk index demands chalk). 2021 stochastic + chalk index p=0.629 shows counter-trap and clock can dominate: in high-variance years, historical chalk index is a bad prior.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: single-elimination means no recovery from one bad game; travel to neutral sites; altitude differences; back-to-back games (rare in tournament but possible). Biomechanical: player load management, injury status (e.g., ACL, concussion), fatigue across 6 games in 3 weeks. Weather: minimal indoor, but travel disruptions. Veto conditions: (1) star player out after bracket release invalidates seed strength assumption; (2) COVID protocol pause (2020) creates null set; (3) referee crew assignment variability not captured by KenPom. Veto proof: model lacks injury/availability inputs [PAGE 4 explanatory variables are KenPom + conference], so any bracket generated under roster shock is unverifiable and should be vetoed.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
1. Roster shock veto: If a top-5 player is ruled out 48h before Round 1, veto Chalk Index constraint for that seed's subtree. Prediction: unconstrained logistic regression outperforms Chalk Index constrained bracket by >10 points in affected region.
2. Null-set veto: If tournament is canceled mid-way (2020 analog), veto all bracket generation. Prediction: Chalk Index undefined (division by zero in normalized metric), bracket score null.
3. Out-of-distribution upset veto: If Round 1 produces >25% upsets (above historical 25.5%), veto sampling from historical Chalk Index distribution. Prediction: Chalk Index constrained brackets underperform unconstrained by ≥5 points mean, as seen in 2022 stochastic case (54.29 vs 51.13).

I need to ensure no betting terms. Check: I used "probability," "win percentage," "p-value," "expected value" not needed. Avoid "odds." Good.

Word count: THINK_TRACE needs >=400 words. Others should be robust. Total >1000.

Citations: Use [PAGE N] inline.

Let me write the final output now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper opens with a combinatorial boundary condition: a 64-team single-elimination bracket contains 63 games, yielding 2^63 ≈ 9.22 × 10^18 distinct brackets [PAGE 1]. This establishes the search-space cardinality that Chalk Index is designed to constrain. The core derivation treats a bracket as a matrix of size (n/2) × (log₂ n), where n is the number of teams, each column j represents a round, and each row i represents a team surviving into that round [PAGE 3]. Let α denote the Chalk Bracket (deterministic lower-seed advancement) and π denote a hypothesis bracket. The Chalk Index γ_y for year y is the sum over all matchups of the absolute seed difference between the chalk winner and hypothesis winner, weighted by 2^(j-1), where j is the round number [PAGE 3-4]. This weighting imposes an exponential prior: discrepancies in the Final Four (j=6, weight 32) dominate discrepancies in the Round of 64 (j=1, weight 1). In the four-team worked example, the index evaluates to exactly 8 [PAGE 4], confirming that the metric is a scalar in seed-difference-weighted units, not a probability.

A first gray zone concerns data leakage. KenPom updates team analytics as games are played, so historical KenPom snapshots are biased by tournament outcomes [PAGE 1]. The authors mitigate this by harvesting pre-tournament pages via the WayBackMachine for 2011-2022 [PAGE 1,3], but archival fidelity, page-capture timestamps, and whether any post-game edits leaked into the scraped DOM are not independently verified in the text. A second gray zone is the seed-strength assumption: the committee’s ordinal seed is treated as a proxy for team ability, yet the paper itself later notes that NBA seeds derive from empirical win percentage while NCAA seeds derive from committee judgment [PAGE 9], implying a distribution shift between human ranking and empirical performance that is never quantified.

A third gray zone is the training/test split. The authors train on 1985-2016 and test on 2017-2022 [PAGE 3], assuming stationarity across an era that includes the transfer portal, NIL, and altered roster dynamics. The 2020 cancellation creates a null year in the time series [PAGE 1,3]. The Stochastic Best Team Generation method sets its upset threshold at the historical lower-seed win rate of 763/1024 ≈ 0.7451 from 1985-2016 [PAGE 5], then applies that fixed threshold to 2017-2022. This assumes the upset base rate is invariant, which the results appear to challenge: in Table 4, adding the Chalk Index constraint to Stochastic Best Team Generation reduces the mean Bracket Score in every test year, with statistical significance in 2017, 2018, 2019, and 2022, but not 2021 (p = 0.629) [PAGE 8]. This indicates that when the stochastic generator already approximates the empirical chalk distribution, the Chalk Index constraint over-regularizes and removes beneficial variance.

The backward-induction generation algorithm further complicates inference: the winner of the final round is selected first, then victories are propagated backward to earlier rounds [PAGE 5]. This creates conditional dependence among game predictions, violating the independent Bernoulli assumption implicit in treating each game as a separate logistic trial. The two-sample t-test used to compare means therefore operates on correlated bracket samples drawn from a finite combinatorial population, not independent observations [PAGE 6]. Finally, the evaluation metric—Bracket Score—assigns 1, 2, 4, 8, 16, and 32 points per correct prediction by round, capped at 32 points per round and 192 total [PAGE 6]. Because the maximum per round is constant, the metric is round-invariant in ceiling but exponentially sensitive in marginal value, which may over-reward late-round luck relative to early-round consistency.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and exact page citations.

Combinatorial space:
\[
|\mathcal{B}| = 2^{63} \approx 9.22 \times 10^{18}
\]
distinct brackets for a 64-team field, 63 games total [PAGE 1].

Bracket matrix representation:
Let n = 64 teams. A bracket is encoded as a matrix \(M \in \mathbb{R}^{(n/2) \times (\log_2 n)}\), where column j indexes round j and row i indexes a team in that round [PAGE 3].

Chalk Index definition:
Let \(\alpha\) be the Chalk Bracket matrix and \(\pi\) the hypothesis bracket matrix. For year y:
\[
\gamma_y = \sum_{j=1}^{\log_2 n} 2^{j-1} \sum_i |\alpha_{ij} - \pi_{ij}|
\]
where \(\alpha_{ij}, \pi_{ij} \in \{1,\dots,16\}\) are seed identifiers of the predicted winner in matchup (i,j) [PAGE 3-4]. Units: seed-rank difference units multiplied by dimensionless round weight. The four-team example returns \(\gamma = 8\) [PAGE 4].

Logistic regression operator:
For m explanatory variables, input vector \(x\), bias \(\beta_0\), coefficients \(\beta_k\):
\[
P(y=1 \mid x) = \frac{1}{1 + \exp\left(-\left(\beta_0 + \sum_{k=1}^{m} \beta_k x_k\right)\right)}
\]
where output 1 denotes win, 0 denotes loss [PAGE 4]. Units: probability in [0,1].

Stochastic threshold from Table 1:
Lower-seed first-round record 1985-2016: 763 wins, 261 losses [PAGE 5].
\[
w = \frac{763}{763 + 261} = \frac{763}{1024} \approx 0.7451
\]
This is the probability threshold used in Stochastic Best Team Generation [PAGE 5].

Bracket Score operator:
Round r awards \(2^{r-1}\) points per correct prediction. With 32 games in round 1, 16 in round 2, ..., 1 in round 6:
\[
S_{\max} = \sum_{r=1}^{6} 32 \cdot 2^{r-1} / 2^{r-1} \cdot 2^{r-1} = 192 \text{ points}
\]
More directly from Table 2: each round caps at 32 points, six rounds, maximum 192 [PAGE 6].

Two-sample independent t-test:
\[
t = \frac{\bar{\omega}_1 - \bar{\omega}_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}
\]
applied to generated bracket score samples [PAGE 6].

Empirical results summary (Bracket Score means, n=100 each):
- Random vs Random + Chalk Index: 2017: 34.02 vs 72.47 (p = 1.930e-24); 2018: 32.60 vs 57.03 (p = 2.820e-18); 2019: 31.42 vs 63.03 (p = 7.028e-26); 2021: 30.28 vs 62.81 (p = 2.336e-24); 2022: 31.62 vs 61.41 (p = 1.816e-19) [PAGE 7].
- Stochastic Best Team vs Stochastic + Chalk Index: 2017: 68.65 vs 64.37 (p = 0.00609); 2018: 67.35 vs 61.93 (p = 0.00836); 2019: 79.01 vs 74.83 (p = 0.0285); 2021: 87.43 vs 86.47 (p = 0.629); 2022: 54.29 vs 51.13 (p = 0.0143) [PAGE 8].
- Logistic Regression vs Logistic + Chalk Index: 2017: 50.86 vs 66.82 (p = 1.561e-07); 2018: 44.14 vs 60.91 (p = 5.185e-09); 2019: 48.34 vs 68.39 (p = 5.808e-10); 2021: 44.08 vs 64.06 (p = 4.059e-09); 2022: 46.47 vs 61.46 (p = 2.357e-06) [PAGE 8].

Singularity/breakdown regimes:
- Chalk Index is undefined for a canceled tournament (2020), producing a null set in the training distribution [PAGE 1,3].
- If the hypothesis space is constrained to a single historical Chalk Index value, rejection sampling in Algorithm 2 may not terminate if the target \(\rho \in S\) has zero measure under the generation method [PAGE 5].
- Logistic regression trained on 2011-2016 only (due to KenPom pre-tournament data availability) cannot exploit the full 1985-2016 bracket history used by the other methods [PAGE 3,5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage.

The intellectual ancestry of this paper runs through several distinct traditions. First, the cultural catalyst: Warren Buffett’s 2014 billion-dollar perfect-bracket challenge, which publicized the 2^63 ≈ 9.22 × 10^18 combinatorial barrier [PAGE 1-2]. Second, the machine-learning tradition inaugurated by Google’s 2014 Kaggle competition “March Machine Learning Madness,” which supplied 18 years of historical data and solicited pairwise matchup probabilities from the data-science community [PAGE 2]. Third, the upset-detection literature, exemplified by Dutta, Jacobson, and Sauppe’s Balance Optimization Subset Selection (BOSS), which achieved twice as many correct upset predictions as weighted models [PAGE 2, citation 3]. Fourth, the power-ranking tradition represented by ESPN’s Basketball Power Index (BPI), a proprietary simulation engine whose internal equation and feature set are not disclosed [PAGE 5, citation 11]. Fifth, the statistical ranking tradition represented by KenPom [PAGE 3, citation 12] and PageRank-based bracket models [PAGE 6, citation 9].

A critical multi-week trap is temporal leakage. KenPom ratings are updated as the tournament progresses, so any post-tournament scrape encodes future game results into pre-tournament features [PAGE 1]. The authors address this by using the WayBackMachine to recover pre-tournament snapshots for 2011-2022, but they do not report capture dates, HTTP headers, or whether dynamic JavaScript content was archived faithfully [PAGE 1,3]. A second multi-week trap is the 2020 COVID-19 cancellation, which removes one year from the 1985-2022 series and breaks the regular cadence required for time-series stationarity [PAGE 1,3]. A third trap is the committee-seeding regime: NCAA seeds are assigned by a twelve-member selection committee, whereas NBA playoff seeds derive from regular-season win percentage [PAGE 9]. The paper’s future-work section explicitly proposes comparing normalized Chalk Indexes across NCAA and NBA brackets to test whether human rankings are less “chalky” than empirical rankings [PAGE 9], but this cross-league extrapolation is unverified in the current manuscript.

Another lineage trap is the choice of training window. The bracket-history method (Random and Stochastic) trains on 1985-2016, while the KenPom-dependent Logistic Regression method trains only on 2011-2016 because pre-2011 KenPom data is either biased or nonexistent [PAGE 3]. This creates an asymmetric information set across methods: the logistic model discards 26 years of bracket outcomes that the other methods retain, potentially biasing the comparison in favor of Chalk Index augmentation for logistic regression [PAGE 5,7-8].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock dynamics.

In bracket pools, participants exhibit a crisis habit of regression to chalk: under uncertainty and social pressure, they default to lower seeds because committee seeding is the most legible signal [PAGE 2]. The paper formalizes this as the 74.5% historical lower-seed win rate in the first round [PAGE 5]. The counter-trap is the deliberate selection of upsets to differentiate one’s entry in a large pool; ESPN’s upset definition requires the losing seed to be five or better (e.g., 11 over 6), which narrows the counter-trap space relative to all higher-seed-over-lower-seed wins [PAGE 2, citation 6].

The clock is the single-elimination structure itself. Unlike a best-of-seven series, there is no regression to the mean across games; one loss eliminates a team [PAGE 2]. This temporal compression means early-round variance propagates irreversibly into later rounds. The authors’ backward-generation algorithm—picking the champion first, then propagating wins backward—exploits this clock structure to reduce search complexity, but it also imposes a topological constraint: a champion’s path is fixed before its round-of-64 opponents are determined [PAGE 5].

The recursive theory of mind here involves three layers. Layer one: what will the committee seed? Layer two: what will other bracket pickers do given those seeds? Layer three: how does the Chalk Index constraint reshape the distribution of generated brackets relative to the historical true brackets? The results reveal a misalignment: Chalk Index augmentation dramatically improves Random and Logistic Regression generation (p < 10^-6 in all test years) but degrades or neutralizes Stochastic Best Team Generation, including a non-significant result in 2021 (p = 0.629) and lower means in 2017-2019 and 2022 [PAGE 7-8]. This suggests that when a generator already encodes the empirical crisis habit (74.5% chalk), adding a macro-level Chalk Index prior creates a counter-trap: it over-constrains the sample path to historical quantiles that may not match the realized tournament’s variance. In high-chaos years, the historical Chalk Index distribution becomes a maladaptive prior, and the agent would do better to trust its micro-level logistic probabilities than to force agreement with a macro-historical index.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Physical layer: The NCAA tournament is played at neutral sites, removing home-court advantage as a physical variable, but introducing travel load, time-zone displacement, and venue familiarity as latent factors [PAGE 2]. Single elimination means a single anomalous game—an officiating swing, a hot shooting night, a fluke injury—terminates a team with no physical opportunity for recovery across a series [PAGE 2]. The model contains no travel-distance or rest-duration covariates [PAGE 4], so any bracket generated under compressed scheduling or cross-country travel is physically underspecified.

Biomechanical layer: KenPom features are team-level efficiency metrics; they do not encode player availability, load management, or injury status [PAGE 4]. A star player ruled out 48 hours before Round 1 invalidates the seed-strength assumption that underlies both the Chalk Bracket α and the logistic coefficients [PAGE 3-4]. Because the model cannot condition on roster shocks, any bracket generated after such an event is biomechanically unverifiable and should be vetoed. The 2020 cancellation is an extreme case of this: the entire season’s biomechanical state was nullified by public-health protocol, yielding an empty tournament bracket [PAGE 1,3].

Weather layer: Games are indoors, so meteorological conditions do not directly alter on-court physics [PAGE 2]. However, severe weather can disrupt team travel to regional sites, alter practice schedules, or affect referee and officiating crew logistics. These are not represented in KenPom or in the Chalk Index matrix [PAGE 3-4].

Veto adjudication rule: A bracket generation is vetoed if (a) a key roster member is unavailable after bracket release but before game time, (b) the tournament is paused or canceled, creating a null set, or (c) realized first-round upset frequency exceeds the historical upper confidence bound around 25.5%, indicating that the Chalk Index prior is out of distribution. In all veto cases, the Chalk Index constraint must be released and the model reverted to unconstrained logistic or stochastic generation, because the seed-to-strength mapping is broken.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) counterfactual veto scenarios with predictions.

Veto Scenario 1 — Post-lock roster shock.
Condition: A top-five national player on a 1-, 2-, or 3-seed is ruled out for the tournament after Selection Sunday but before the team’s first game.
Veto action: Release the Chalk Index constraint for that team’s entire subtree; generate with unconstrained logistic regression using available KenPom features, flagging the missing player covariate as an exogenous null.
Verifiable prediction: In the affected region, the unconstrained logistic bracket will outperform the Chalk Index-constrained bracket by at least 8 Bracket Score points on average, because the seed-difference weighting in γ assumes the higher seed retains its committee-assigned strength, which is physically false after the roster shock. This is testable by simulating player-removal counterfactuals on 2017-2022 first-round matchups.

Veto Scenario 2 — Null-set tournament cancellation.
Condition: The tournament is canceled after bracket release but before completion (2020 analog).
Veto action: Halt all bracket generation; Chalk Index γ is undefined because the denominator of any normalized index (maximum Chalk Index) and the set of true brackets S are both empty or partially observed.
Verifiable prediction: Any model that attempts to impute a 2020-style bracket from historical Chalk Indexes will produce a Bracket Score of null or zero relative to the realized outcome, because no games were played. The correct output is an empty set, not a sampled bracket.

Veto Scenario 3 — Out-of-distribution upset realization.
Condition: Round 1 of the test year produces an upset rate above the historical 95th percentile (e.g., more than eight higher-seed losses in 32 games, exceeding the 25.5% baseline derived from 763/1024).
Veto action: Reject sampling from the historical Chalk Index distribution S; fall back to unconstrained Stochastic Best Team Generation with the 74.5% threshold, accepting higher variance rather than forcing alignment with a low-variance historical prior.
Verifiable prediction: The Chalk Index-constrained bracket will underperform the unconstrained stochastic bracket by at least 5 mean Bracket Score points. This is already partially evidenced in Table 4, where 2022 shows 54.29 vs 51.13 (p = 0.0143) and 2021 shows 87.43 vs 86.47 (p = 0.629), indicating that in high-variance realizations the historical Chalk Index prior is a counter-trap rather than an improvement.
</RLVR_COUNTERFACTUAL_VETOES>