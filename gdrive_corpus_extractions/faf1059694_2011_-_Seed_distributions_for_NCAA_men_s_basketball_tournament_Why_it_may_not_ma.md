---
source: "2011 - Seed distributions for NCAA men's basketball tournament Why it may not matter who plays whom - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2011"
pages: 6
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4480
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about NCAA basketball tournament seed distributions. The paper is by Sheldon H. Jacobson et al. (2011), presented at the New England Symposium on Statistics in Sports.

Key constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important: The source text is provided as a markdown dump of a PDF. Page numbers are visible in the text (1, 2, 3... up to 32). I need to cite exact [PAGE N] markers. The user says "PAGES: 6" but the source text clearly goes from page 1 to 32. I should use the page numbers visible in the source text.

Let me structure my response:

THINK_TRACE: Deep derivation of the truncated geometric model, seed set geometry, independence assumptions across regions, method of moments estimation, chi-square goodness of fit, breakdown regimes (small sample sizes in subsets, non-identical Bernoulli probabilities, rule changes like 35-second clock and three-point arc expansion). Gray-zone audit: the assumption of constant probability p_j,r across positions, stationarity across years, independence between regions, tournament format changes (64 to 68 teams).

SOURCE_OPERATORS_AND_EQUATIONS:
- Define sets Z_{j,r}
- Truncated geometric PMF: P{Z=t} = κ p (1-p)^{i-1}
- Normalizing constant κ_{j,r} = 1/(1-(1-p)^{2^r}) for r=1,2,3
- κ_r = 1/(1-(1-p_{r,1})^{16}) for r=4,5,6
- Expected value E(Y(n,p)) = 1/p - n(1-p)^n / (1-(1-p)^n)
- Method of moments via bisection
- Chi-square goodness-of-fit
- Probability of seed combinations via product of geometric RVs and permutations
- Units: probability (dimensionless), years, seed positions (dimensionless integers)
- Page citations for each.

RETROCAUSAL_GENEALOGY:
- Lineage from Bernoulli trials, geometric distribution, Shishebor and Towhidi (2004), Jacobson and King (2009).
- Historical context: tournament since 1939, 64 teams since 1985, 68 in 2011 with play-ins.
- Multi-week traps: selection committee criteria changes, rule changes (35-second clock, three-point arc), non-stationarity of p_{j,r} over time, annual re-estimation requirement.

RECURSIVE_THEORY_OF_MIND:
- "Crisis habit regression": when underdogs win early, public regresses to picking chalk (higher seeds).
- Counter-trap: model shows seed differences shrink in later rounds; 89% of champions seeded 3 or better, but upsets happen (VCU #8 in 2011).
- Clock: tournament clock (single-elimination, 6 rounds) imposes absorbing Markov-like structure; late-round conditioning changes information sets.
- Theory of mind: bracket pickers model other pickers (public consensus) vs true win probabilities; ESPN bracket data (5.9M brackets) shows herd behavior around seeds.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: basketball game duration, shot clock, three-point line, court dimensions affect possession variance but not modeled.
- Biomechanical layer: player fatigue, injury, travel across regions not in model.
- Weather veto: neutral sites, indoor arena, minimal weather impact (unlike football).
- Veto proof: model assumes constant p against any seed in a round; physical factors violate stationarity but are exogenous to seed-distribution math.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable veto scenarios + predictions.
1. Small sample veto: In Round 1 Set 8 ({8,9}), sample size is only 26 games (one per year). If p estimate has high variance, chi-square test lacks power. Prediction: model fails to reject fit for rare seed combos even when misspecified due to low N.
2. Rule change veto: Introduction of 35-second shot clock or three-point arc expansion alters p_{j,r} non-stationarily. Prediction: pre-2000 estimates biased for post-2000 tournaments; 2011 Final Four (3,4,8,11) extreme outlier probability 1/121,000 illustrates model's inability to condition on structural breaks.
3. Independence veto: Four regions treated as independent geometric RVs, but selection committee places teams by geography/conference, creating correlated strengths. Prediction: seed combinations spanning regions (e.g., two #1 seeds from same conference) have joint probability misestimated by product rule.

Need to be careful: NO BETTING LINES. The paper mentions "Odds against" but I must not mention spreads, totals, moneylines, or odds. I can refer to probabilities and expected frequencies but not use the word "odds" in a betting sense? The constraint says "Never mention spreads, totals, moneylines, or odds." So I should avoid the word "odds" entirely or be very careful. I'll avoid it.

Also need to ensure >1000 words total across sections. Each section needs substantial content. THINK_TRACE >=400 words.

Let me draft carefully with page citations.

Page mapping from source text:
Page 1: Title, intro, 8 teams 1939, 64 since 1985, 68 in 2011, $2.25B wagered (avoid betting mention or mention carefully as context but not betting lines).
Page 2: Predicting game winners, predictors.
Page 3: Tournament structure, selection committee, 37 at-large, 31 conference champions, 4 regions of 16, seed 1-16, geography/conference issues.
Page 4: Round 1 format, seed k plays 17-k.
Page 5: Bracket visualization, if best teams win seed k plays 9-k in second round.
Page 6: If best teams win second round, seed k plays 5-k in third round.
Page 7: More bracket viz.
Page 8: More bracket viz.
Page 9: Final Four, four regional winners, any seed can play any seed in theory.
Page 10: Is it best to pick better seed, seed differences large more predictable.
Page 11: Predictions by round, 70% round 4 seeded 3 or better, 76% round 5, 83% round 6, 89% champions seeded 3 or better, r_th r, Jacobson and King (2009).
Page 12: Goals, historical performance, model seed distributions, Chi-square goodness-of-fit, data 1985-2010.
Page 13: Statistical requirements, 1,638 total games (63 games over 26 years), play-in not included, sample sizes drop, random sample assumptions, constant probability.
Page 14: The Math Behind The Numbers.
Page 15: Geometric distribution definition, P{Y=k} = (1-p)^{k-1}p.
Page 16: Key Theorem, Shishebor and Towhidi (2004), N&S condition.
Page 17: Sets of seeds in each round, round r definitions, sets listed.
Page 18: Truncated geometric distribution, PMF with kappa, ranges for i,j,r, coefficients.
Page 19: Table of p values round 1-3.
Page 20: Probability of seed combinations, R(r) = 2^{6-r}, four independent geometric RV's for r=1,2,3,4, two for r=5, one for r=6, product of probabilities and permutations.
Page 21: Estimates for p, method of moments, expected value formula, bisection algorithm, table round 3-6 p values.
Page 22: The Final Four section header.
Page 23: Seed frequency in Final Four table, delta_n, Stddid M? (looks garbled), anarze easure.
Page 24: Final Four seed combinations, probability, expected frequency, scenario table.
Page 25: Most likely Final Four seed combinations table, 1,1,2,3 probability 0.066 expected 15 years, etc.
Page 26: Final Four seed combination odds table (avoid word odds? I'll call it probability table), one or more 16 probability 0.000756 expected 1307 years, etc.
Page 27: 2011 Final Four, UConn #3 winning NC .0306, ESPN brackets.
Page 28: Kentucky #4 .0150, Butler #8 .00347, VCU #8 (actually #11? text says #8 but VCU was #11, text says VCU #8 winning NC .000102, expected assuming #11 seeds equally likely 600).
Page 29: Conclusions and limitations, truncated geometric fits best in later rounds, rule changes (35-second clock, three-point arc), selection committee criteria, update p annually.
Page 30: March Madness header, website.
Page 31: Website functionality.
Page 32: Thank you.

I need to cite pages as [PAGE N].

Now write the response. Must be formal LaTeX where appropriate.

Let's ensure no toy equations. I won't invent Force/Fatigue. All equations from source.

Word count: Need >1000 words total. I'll aim for ~1500-2000 words.

Let's write.

THINK_TRACE: I'll derive the truncated geometric PMF, explain the conditioning structure, the independence across regions, the method of moments, the chi-square GOF, and audit gray zones: stationarity, constant p, small samples, play-in exclusion, non-identical teams within seeds. ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal equations with page cites. ~400 words.

RETROCAUSAL_GENEALOGY: Lineage from Bernoulli/Geometric, Shishebor & Towhidi 2004, Jacobson & King 2009, tournament history 1939/1985/2011, multi-week traps (rule changes, committee criteria, annual re-estimation). ~300 words.

RECURSIVE_THEORY_OF_MIND: Public chalk bias, counter-trap of late-round seed convergence, clock as single-elimination filter, herd behavior in ESPN brackets. ~300 words.

CROSS_LAYER_VETO_ADJUDICATION: Physical (shot clock, court, possession), biomechanical (fatigue, injury), weather (neutral indoor sites), veto proof arguments. ~250 words.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios with verifiable predictions. ~300 words.

Total well over 1000.

Let's be careful with LaTeX formatting inside XML. It should be fine.

Check constraint: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." I will not use those words. I will refer to probabilities, expected frequencies, and implied likelihoods only. The source text uses "Odds against" but I won't repeat that phrase; I'll paraphrase as "implied rarity" or just use probability values.

Also "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include some verbatim quotes with page citations.

Let's draft.

Important: The XML sections must be exactly named. I'll produce them in order.

Word count check: I'll write generously.

Let's begin.

THINK_TRACE content:
- Multi-hop derivation: The paper models each region's advancement as a sequence of Bernoulli trials. For set j in round r, there are 2^r possible seed positions. The geometric distribution counts trials until first success, but truncated at n=min(2^r,16) because only so many seeds can occupy a set. The PMF is P(Z=t) = κ p (1-p)^{i-1}. The normalizing κ ensures sum to 1 over finite support. Independence across four regions means product measure for joint seed combinations. Method of moments equates observed mean seed position to E(Y) = 1/p - n(1-p)^n/(1-(1-p)^n). Solved by bisection because no closed form. Chi-square GOF compares observed vs expected frequencies.
- Gray-zone audit: The assumption that each seed has constant p against any other seed in a round is strong; in reality team quality within a seed varies yearly. Sample sizes collapse when conditioning on seed and round (e.g., Round 1 has 8 sets × 4 regions = 32 games per year, but subsets smaller). Play-in games excluded, so 2011's 68-team format not fully represented. Non-stationarity from rule changes means p_{j,r} must be re-estimated annually; using 1985-2010 pooled data may blend distinct regimes. The "any seed can play any seed in theory" claim ignores selection committee constraints (geography, conference). Breakdown regime: when n(1-p)^n is non-negligible relative to 1, truncation bias matters; when sample count < expected cell count for chi-square, test invalid.

SOURCE_OPERATORS_AND_EQUATIONS:
- Set definitions [PAGE 17]: Z_{j,r}, t = i-th element.
- PMF [PAGE 18]: P{Z=t} = κ_{j,r} p_{j,r} (1-p_{j,r})^{i-1}, i=1,...,min(2^r,16), j=1,...,max(2^{4-r},1), r=1,...,6.
- κ_{j,r} = [1-(1-p_{j,r})^{2^r}]^{-1} for r=1,2,3; κ_r = [1-(1-p_{r,1})^{16}]^{-1} for r=4,5,6.
- Expected value [PAGE 21]: E(Y(n,p)) = 1/p - n(1-p)^n / [1-(1-p)^n].
- Number of teams winning round r: R(r) = 2^{6-r} [PAGE 20].
- Joint probability: product over regions of geometric probabilities times number of distinct permutations [PAGE 20].
- Chi-square GOF [PAGE 12, 29].
- p estimates table [PAGE 21]: round 3 set 1 p=.684, set 2 p=.455; round 4 p=.400; round 5 p=.456; round 6 p=.510.

Units: probabilities dimensionless [0,1], seed indices dimensionless integers, years dimensionless count, games count.

RETROCAUSAL_GENEALOGY:
- Lineage: Bernoulli trials -> geometric distribution -> truncated geometric -> tournament seed sets. Cites Shishebor and Towhidi (2004) [PAGE 16]. Jacobson and King (2009) focus on top three seeds [PAGE 11].
- Historical arc: 1939 (8 teams), 1985 (64 teams), 2011 (68 teams + play-ins) [PAGE 1].
- Multi-week traps: selection committee criteria changes; 35-second clock; three-point arc expansion [PAGE 29]. These alter the underlying win probability process, making pooled 1985-2010 estimates a mixture distribution. Annual re-estimation required [PAGE 29]. The model's stationarity assumption breaks across rule-change boundaries.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: After early upsets, public regresses to "pick the better seed" heuristic [PAGE 10]. This is attractive because simple [PAGE 2].
- Counter-trap: Seed differences shrink by round; 70% Elite Eight seeded 3 or better, 89% champions seeded 3 or better [PAGE 11]. Yet 2011 Final Four had seeds 3,4,8,11 (or 8/11 per text), an extreme tail event under the fitted model [PAGE 27-28]. The model assigns low probability but does not forbid it.
- Clock: Single-elimination bracket acts as a sequential filter; conditioning on survival to round r changes the information set and the effective sample of teams [PAGE 3, 11]. Teams with worse seeds face stronger opponents earlier [PAGE 11].
- Theory of mind: Bracket pickers model not just team strength but other pickers' consensus (ESPN 5.9M brackets) [PAGE 27-28]. Expected picks under uniform seed assumption vs actual picks reveal herding (e.g., UConn #3 chosen by 279,308 vs expected 181,000).

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: The model is aspatial; it ignores court dimensions, shot clock duration (35 seconds mentioned as rule change [PAGE 29]), and three-point arc geometry. These affect possession-level variance but are averaged into p_{j,r}.
- Biomechanical layer: Player fatigue, injury status, and travel load across regions are not state variables. Single-elimination means one poor game eliminates; the geometric model assumes i.i.d. Bernoulli trials, which is violated if fatigue accumulates across rounds within a region.
- Weather veto: Tournament played at neutral indoor sites [implicit in structure], so weather is a null veto; unlike outdoor sports, precipitation/wind do not alter the seed transition kernel.
- Veto proof: The cross-layer veto does not invalidate the truncated geometric math per se; it bounds its domain of validity to periods with stable rules and to seed-distribution forecasting rather than individual game outcomes. Breakdown when physical/biomechanical shocks are large and correlated within a region (e.g., key injury before Sweet 16).

RLVR_COUNTERFACTUAL_VETOES:
1. Sample-size veto: Round 1 Set 8 ({8,9}) has only 26 total games across 1985-2010 [PAGE 13: 1,638 total games; 8 sets per round implies sparse subsets]. Chi-square expected cell counts may fall below 5. Prediction: The model will fail to reject goodness-of-fit for rare seed sets even when the true p is time-varying, because statistical power vanishes.
2. Non-stationarity veto: The 35-second shot clock and three-point arc expansion changed scoring dynamics [PAGE 29]. Prediction: p_{j,r} estimates pooled over 1985-2010 will be systematically biased for post-rule-change tournaments; the model cannot assign accurate probability to the 2011 Final Four (seeds 3,4,8,11) because it was calibrated on a pre-expansion regime that did not include play-in teams like VCU [PAGE 1, 27].
3. Independence veto: Four regions are modeled as independent geometric RVs [PAGE 20], but selection committee places teams using geography and conference affiliation [PAGE 3], inducing dependence. Prediction: Joint seed combinations containing two teams from the same conference in different regions will have product-rule probabilities that misstate true co-occurrence; e.g., the probability of two #1 seeds meeting in the Final Four is over/under-estimated relative to the product of marginals because committee constraints limit certain region pairings.

I should make sure each section is clearly delimited and the total is >1000 words.

Let's write it out fully now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs a truncated geometric model for seed advancement in the NCAA men’s basketball tournament. The derivation proceeds in hops. Hop 1: define the sample space. In round r, the bracket imposes non-overlapping sets of possible seeds. For r=1, each set contains two seeds {k, 17-k}; for r=2, four seeds; for r=3, eight seeds; for r=4,5,6, a single set of 16 possible seeds [PAGE 17]. Hop 2: model advancement within a set as a sequence of Bernoulli trials until the first "success," where success means a seed position advances. The geometric distribution gives P{Y=k} = (1-p)^{k-1}p for k=1,2,... [PAGE 15]. Because the tournament truncates the support to the finite number of available seed positions, the authors truncate the geometric distribution and renormalize via κ so that probabilities sum to one [PAGE 18]. Hop 3: write the truncated PMF. For set j in round r, position i, P{Z=t} = κ_{j,r} p_{j,r} (1-p_{j,r})^{i-1}, with i bounded by min{2^r,16} and j bounded by max{2^{4-r},1} [PAGE 18]. The normalizing constant is κ_{j,r} = [1-(1-p_{j,r})^{2^r}]^{-1} for r=1,2,3 and κ_r = [1-(1-p_{r,1})^{16}]^{-1} for r=4,5,6 [PAGE 18]. Hop 4: joint seed combinations. Because four regions are treated as independent, the probability of a combination is the product of four geometric probabilities (r=1,2,3,4), two (r=5), or one (r=6), multiplied by the number of distinct permutations of seeds across regions [PAGE 20]. Hop 5: parameter estimation. p_{j,r} is estimated by method of moments, equating observed mean seed position to E(Y(n,p)) = 1/p - n(1-p)^n/[1-(1-p)^n], solved via bisection [PAGE 21]. Hop 6: validation by chi-square goodness-of-fit against 1,638 historical games from 1985–2010 [PAGE 12, 13, 29].

Gray-zone audit. The stationarity assumption is fragile: the paper explicitly notes that rule changes (35-second clock, three-point arc expansion) and selection-committee criteria changes may shift p_{j,r} over time, requiring annual re-estimation [PAGE 29]. Pooling 26 years mixes pre- and post-rule-change regimes. The constant-p assumption—each seed has the same probability of winning against any other seed in a specified round—ignores within-seed heterogeneity in team quality [PAGE 13]. Sample-size collapse is severe when conditioning on seed and round; with 63 games per year over 26 years, subsets based on seeds and rounds become dramatically small [PAGE 13], threatening chi-square validity where expected cell counts fall below standard thresholds. Play-in games are excluded, so the 2011 expansion to 68 teams is only partially represented [PAGE 1, 13]. The claim that "any seed can play against any seed in theory" [PAGE 9] is bracketed by committee constraints: geography and conference affiliation affect region placement [PAGE 3], which induces cross-region dependence not captured by independent geometric RVs [PAGE 20]. Breakdown regimes occur when n(1-p)^n is non-negligible relative to one (truncation bias), when cell counts are too sparse for hypothesis testing, or when structural breaks invalidate pooled parameter estimates.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and exact page citations.

Set definition [PAGE 17]: Let Z_{j,r} denote the j-th set in round r, and let t be the i-th element i_{j,r} within that set. Rounds r=1,2,3 have 2^{4-r} non-overlapping sets of 2^r possible winners; rounds r=4,5,6 have one set of 16.

Truncated geometric PMF [PAGE 18]:
P\{Z = t\} = \kappa_{j,r} \, p_{j,r} \, (1-p_{j,r})^{i-1},
with i = 1,2,\ldots,\min\{2^r,16\}, j = 1,2,\ldots,\max\{2^{4-r},1\}, r = 1,2,\ldots,6. Probability is dimensionless on [0,1]; seed position i and round r are dimensionless integer indices.

Normalizing coefficients [PAGE 18]:
\kappa_{j,r} = \frac{1}{1-(1-p_{j,r})^{2^r}} \quad \text{for } r=1,2,3,\quad
\kappa_r = \frac{1}{1-(1-p_{r,1})^{16}} \quad \text{for } r=4,5,6.

Expected value of truncated geometric [PAGE 21]:
E[Y(n,p)] = \frac{1}{p} - \frac{n(1-p)^n}{1-(1-p)^n}.
Units: expected seed position is dimensionless; n is the finite support size.

Number of teams winning round r [PAGE 20]:
R(r) = 2^{6-r}, \quad r = 1,2,\ldots,6.
Unit: count of teams.

Joint combination operator [PAGE 20]: Probability of seed combinations is computed as the product of probabilities of each seed appearing in that round times the number of distinct permutations that seeds can assume across four regions. Independent geometric RV count: four for r=1,2,3,4; two for r=5; one for r=6.

Goodness-of-fit [PAGE 12, 29]: Chi-square test comparing observed versus expected seed frequencies; distribution fits closest in later rounds (Elite Eight onward).

Estimated parameters [PAGE 21]: Round 3 (Elite Eight), set 1 p=0.684, set 2 p=0.455; Round 4 (Final Four), p=0.400; Round 5 (National Final), p=0.456; Round 6 (National Champion), p=0.510. All p values are dimensionless win-probability parameters estimated by iterative bisection using average seed position over 1985–2010 [PAGE 21].

Data scope [PAGE 13]: 1,638 total games (63 games over 26 years); play-in and First Four games excluded. Sample sizes drop dramatically when subsets are taken by seed and round.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

Lineage. The model descends from classical Bernoulli-trial theory: Shishebor and Towhidi (2004) provide the necessary and sufficient condition for a geometric random variable, namely P\{X_i=1 | \sum_{h=1}^{i-1} X_h = 0\} = p for all i [PAGE 16]. Jacobson and King (2009) previously focused on the top three seeds [PAGE 11]. The present paper extends that lineage to all seeds and all rounds via truncated geometric distributions and set-based combinatorics [PAGE 17–20].

Tournament history. The NCAA Men’s Division I Basketball Tournament began in 1939 with 8 teams; since 1985, 64 teams participate annually; in 2011 it expanded to 68 teams with four play-in games [PAGE 1]. The data span 1985–2010 [PAGE 12], i.e., the 64-team era only, which is a bounded historical window before the structural expansion analyzed in the very year of the paper.

Multi-week traps. Three interlocking traps threaten temporal extrapolation. First, rule changes: the introduction of the 35-second clock and expansion of the three-point arc alter game dynamics and thus the underlying p_{j,r} [PAGE 29]. Second, selection-committee criteria changes modify how teams are seeded and placed [PAGE 29]. Third, the requirement that p_{j,r} be updated annually after each tournament [PAGE 29] means that a static 1985–2010 parameter vector is already stale by 2011. These are not minor footnotes; they define the breakdown regime where pooled estimates become a mixture across distinct rule regimes, and where the "constant probability" assumption [PAGE 13] fails across years. The 2011 Final Four itself—featuring seeds 3, 4, 8, and 11 per the paper’s narrative—illustrates a tail event whose probability is computed under a stationary model that cannot condition on the 68-team play-in expansion or post-arc-expansion stylistic shifts [PAGE 27–28].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and the tournament clock.

Crisis habit regression. When early rounds produce upsets, public forecasting regresses to the simplest heuristic: "pick the better seed" [PAGE 10]. The paper notes this method is attractive because of its simplicity [PAGE 2], but it asks whether it provides good predictions [PAGE 10]. This is a crisis habit: under uncertainty, agents revert to seed order rather than re-estimating conditional win probabilities.

Counter-trap. The counter-trap is that seed differences shrink as the tournament progresses [PAGE 11]. The paper reports 70% of Round 4 (Elite Eight) teams seeded No. 3 or better, 76% in Round 5 (National Semi-final), 83% in Round 6 (National Final), and 89% of champions seeded No. 3 or better [PAGE 11]. Yet the model does not eliminate tail events; the 2011 Final Four combination was assigned low probability under the fitted seed distribution [PAGE 27–28], demonstrating that low-probability seed paths remain within the support of the truncated geometric model.

The clock. Single elimination imposes an absorbing sequential filter: to appear in round r, a team must have won its preceding r−1 games [PAGE 11]. Teams with worse seeds face more skilled competition earlier [PAGE 11], so conditioning on survival changes the information set at each round. The geometric formulation treats each seed position’s advancement as a Bernoulli trial with constant p within a round, but the tournament clock—six rounds, one loss eliminates—means later-round probabilities are conditional on early-round outcomes, violating unconditional independence across rounds if team quality is persistent.

Recursive theory of mind. Bracket pickers do not model team strength in isolation; they model other pickers. The paper contrasts actual ESPN bracket selections with expected counts assuming all seeds of a given number are equally likely [PAGE 27–28]. For example, UConn (No. 3) was chosen by 279,308 brackets versus an expected 181,000 under uniformity [PAGE 27]; Kentucky (No. 4) by 107,249 versus 89,000 [PAGE 28]. This reveals herd behavior around seed reputation. A second-order theory of mind recognizes that public brackets cluster on chalk seeds, creating a feedback where contrarian seed combinations have lower selection frequency but not necessarily lower win probability.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Physical layer. The truncated geometric model is aspatial and atemporal below the round level. It does not encode court dimensions, shot-clock duration (the 35-second clock is cited only as a rule change [PAGE 29]), three-point arc geometry, or possession-level variance. These physical factors enter only indirectly through the estimated p_{j,r}. A veto here is partial: physical constants do not invalidate the combinatorial PMF, but they mean p_{j,r} is an effective parameter that absorbs arena and rule physics rather than a structural primitive.

Biomechanical layer. Player fatigue, injury status, load management, and travel across regions are absent from the state vector [PAGE 3 notes geography affects placement; no player-level covariates are modeled]. The i.i.d. Bernoulli assumption [PAGE 13, 16] is violated if fatigue accumulates across games within a region or if a key injury arrives between rounds. The breakdown regime is large, correlated biomechanical shocks inside a single region (e.g., a star player lost before the Sweet 16), which would shift the realized seed path away from the fitted distribution without changing p_{j,r}.

Weather veto. The tournament is conducted at neutral sites in indoor arenas, so precipitation, wind, and temperature do not modulate the seed-transition kernel. Unlike outdoor sports, weather is a null veto for this model; its exclusion is justified by the competition structure rather than by an assumption of insensitivity.

Veto proof. The cross-layer veto does not falsify the truncated geometric mathematics; it bounds the domain of validity. The model remains valid for seed-distribution forecasting over periods of stable rules and stable selection criteria, provided sample sizes per cell support chi-square testing. It breaks down when physical/biomechanical shocks are large and region-correlated, or when structural rule changes induce non-stationarity in p_{j,r} [PAGE 29].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions.

Veto 1: Sample-size insufficiency. Round 1 contains eight sets per region and four regions, but historical coverage is only 1,638 games across 1985–2010 [PAGE 13]. When subsets are taken by seed and round, sample sizes drop dramatically [PAGE 13]. For rare sets (e.g., Round 1, set {8,9}), expected chi-square cell counts can fall below the standard validity threshold. Prediction: The model will fail to reject goodness-of-fit for rare seed sets even when the true p_{j,r} is time-varying, because statistical power vanishes; a held-out year with a shifted p in a sparse set will not produce a significant chi-square deviation.

Veto 2: Non-stationarity from rule changes. The paper identifies the 35-second clock and three-point arc expansion as rule changes that may impact seed-winning probabilities, and states that p_{j,r} must be updated annually [PAGE 29]. The calibration window 1985–2010 spans both pre- and post-change regimes. Prediction: Parameter estimates pooled over the full window will be systematically biased for tournaments after the last major rule change; specifically, the model cannot assign a well-calibrated probability to the 2011 Final Four seed configuration (seeds 3, 4, 8, and 11 [PAGE 27–28]) because it was estimated on a 64-team, pre-expansion regime that did not include play-in teams such as VCU [PAGE 1].

Veto 3: Cross-region independence violation. The model uses four independent geometric RVs per set for rounds 1–4 [PAGE 20], but the selection committee explicitly considers geography and conference affiliation when placing teams in regions [PAGE 3]. This induces dependence between region compositions that the product rule ignores. Prediction: Joint seed combinations containing two teams from the same conference placed in different regions will have joint probabilities misestimated by the product of marginals; the probability of two No. 1 seeds meeting in the Final Four will deviate from the product-form prediction because committee constraints limit certain region pairings, an effect detectable by comparing modeled versus observed co-occurrence frequencies in held-out years.
</RLVR_COUNTERFACTUAL_VETOES>