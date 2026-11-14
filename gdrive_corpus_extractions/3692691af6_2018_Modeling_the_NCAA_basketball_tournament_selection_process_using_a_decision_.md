---
source: "2018 Modeling the NCAA basketball tournament selection process using a decision tree - Shouvik Dutta and Sheldon H. Jacobson.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4597
---

<NATIVE_REASONING>
The user wants a deep analysis of the source paper about NCAA basketball tournament selection using a decision tree. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided a source text that seems to have page numbers 65-71 from the journal. I need to cite exact [PAGE N] markers. Since the source text shows pages 65, 66, 67, 68, 69, 70, 71, I should reference these.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words. Discuss the methodology: decision tree for at-large bids (36 teams), 32 automatic qualifiers. Pairwise comparison tournament among candidate teams (bubble teams). The tree conditions from Table 2. The RPI formula (0.25 WP + 0.5 OWP + 0.25 OOWP? Actually the paper doesn't give exact weights in the text shown but mentions WP, OWP, OOWP; the standard RPI is 0.25 WP + 0.50 OWP + 0.25 OOWP but I should only state what's in the paper or formalize it generally. The paper says: WP calculated with home=0.6, neutral=1, away=1.4. OWP average of opponent WP, OOWP average of opponent's OWP. It mentions 75% dependent on opponent strength. I should formalize: RPI = f(WP, OWP, OOWP) with location-weighted WP. Gray zones: committee human factors, Iona 2012 outlier, no single year perfect, overfitting risk when adapting to one year hurts others, ordinal conversion by year to avoid inter-year variation, margin of victory excluded, proprietary BPI/Sagarin formulas, Spearman correlations high (0.967-0.994). Need to audit singularity/breakdown: when RPI difference and Pomeroy difference both near thresholds, ties, teams outside bubble (seed 9 or better vs NIT 1/2 seeds), candidate pool definition.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Define RPI equation: RPI = w_WP WP + w_OWP OWP + w_OOWP OOWP. WP = (0.6 W_home + 1.0 W_neutral + 1.4 W_away) / G. OWP = (1/n) sum_j WP_j. OOWP = (1/n) sum_j OWP_j. Spearman correlation table values. Pairwise comparison: for each pair (i,j), decision tree outputs binary winner. Team score S_i = sum_{j != i} 1[T(i,j)=i]. Selection: top 36 at-large + 32 auto = 68. Conditions from Table 2 as logical operators. Units: RPI ordinal rank (unitless, 1..N), Pomeroy ordinal rank (unitless), counts (games, wins-losses), SOS min(SOS, non-conference SOS) lower=stronger. Breakdown regimes: ordinal conversion loses inter-year comparability; candidate pool excludes locks (seed <=9) and obvious non-bubble; decision tree is deterministic but committee is not; threshold sensitivity (e.g., RPI diff >45 vs >30 vs >15 vs >12).

<RETROCAUSAL_GENEALOGY>: Historical lineage: RPI (NCAA), BPI (ESPN 2013, Oliver), Pomeroy pythagorean (AdjO, AdjD per 100 possessions), Sagarin proprietary. Selection committee process (NCAA 2016): each member identifies 36 teams, all-but-two rule, ballots, ranked four at a time. Ezekowitz 2013, Stephens 2015 (RPI not determining factor), Katz 2016 (top-50 wins, 200+ losses). Multi-week traps: last 12 games tracked by ESPN; Selection Sunday timing; recency bias trap; strength of schedule trap for weak conferences; top-100 games trap.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret: selection committee members under cognitive load (Selection Sunday) regress to heuristic habits (RPI, top-50 wins). Counter-trap: decision tree mimics committee but assumes static weights; committee may adapt anti-inductively if model becomes public (Goodhart's law). Clock: Selection Sunday deadline, last 12 games window, tournament timing. Crisis habit regression: when uncertain, committee falls back on RPI despite public statements. Counter-trap: teams gaming metrics (scheduling top-100, managing last 12). Clock: ordinal conversion by year ignores cross-year momentum; selection occurs at fixed temporal node.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Since this is basketball selection, physical layer: player injuries (mentioned as future work), coach availability (mentioned in background as data available but unknown if used), road record (location weighting in WP accounts for home advantage but not travel fatigue biomechanically), weather (game cancellations? not in paper). Veto proof: The model explicitly excludes field goal percentage, three-point percentage, injury reports (though acknowledged as available), margin of violence. So any veto based on physical layer (injury to star player before Selection Sunday) is outside model scope. Biomechanical: player load, fatigue not in model. Weather: not relevant for indoor basketball but travel disruptions could affect road record; model uses home/neutral/away WP weights but not weather-induced cancellations.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just counterfactual vetoes. I'll create 3 scenarios:
1. Injury veto: Star player on bubble team injured in last 12 games. Model sees good last-12 record (pre-injury) and selects team; committee vetoes due to injury. Prediction: model false positive when injury occurs after last-12 window or during conference tournament.
2. SOS manipulation veto: Weak conference team schedules 5+ top-100 games late to satisfy "Difference in RPI Top 100 games played >5" but loses all; model may overvalue quantity; committee values quality/results. Prediction: false positive for team with high top-100 count but poor record in those games.
3. Recency collapse veto: Team strong early, collapses in last 12 games (diff <3 but trend negative). Model uses net wins-losses only, not trend; committee weighs trajectory. Prediction: model selects fading team over rising team with similar net record but better trajectory.

Need to ensure no betting lines. No spreads/totals/moneylines/odds. I can mention probabilities? The invariant says "SI/information/probability units" but also "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." I can mention probability in a non-betting sense but better avoid "odds" entirely. I'll avoid gambling terminology.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll aim for substantial each.

Citations: Use [PAGE 65], [PAGE 66], etc. Verbatim quotes where possible from source text.

Let's draft carefully.

Structure:
- Start with <THINK_TRACE>
- Then <SOURCE_OPERATORS_AND_EQUATIONS>
- Then <RETROCAUSAL_GENEALOGY>
- Then <RECURSIVE_THEORY_OF_MIND>
- Then <CROSS_LAYER_VETO_ADJUDICATION>
- Then <RLVR_COUNTERFACTUAL_VETOES>

I need to make sure I don't use fake ratios. I can use the actual correlations from Table 1: BPI-RPI 0.967 [PAGE 68], Pomeroy-RPI 0.965, Sagarin-RPI 0.968, Pomeroy-Sagarin 0.994, etc. These are sourced.

I should not invent Force/Fatigue ratios. Use formal LaTeX for RPI, Spearman correlation, pairwise score.

Let's write.

THINK_TRACE content (approx 500+ words):
- Multi-hop: 32 auto bids + 36 at-large = 68. Candidate pool: at-large teams seeded 10 or higher and NIT 1/2 seeds [PAGE 69]. Pairwise comparison: each team vs each other, winner gets victory, top by victories selected [PAGE 68]. Decision tree conditions ordered; early conditions more discriminatory [PAGE 71]. RPI appears in top conditions [PAGE 71].
- Gray-zone audit: ordinal conversion by year removes inter-year variation but sacrifices absolute scale [PAGE 67]. Last 12 games net score = wins - losses [PAGE 67]. Minimum SOS = min(SOS, non-conference SOS) [PAGE 67]. 75% of RPI dependent on opponent strength [PAGE 66]. Committee all-but-two rule [PAGE 66]. One error per year 2012-2016 [PAGE 69-70]. Iona 2012 anomaly [PAGE 70]. No single year perfect; adapting to one year degrades others [PAGE 70]. Proprietary BPI/Sagarin excluded due to high correlation [PAGE 68]. Human factor outside numbers [PAGE 70]. Breakdown: threshold collisions (e.g., RPI diff exactly 45), ties in pairwise victories, candidate pool exclusion of locks (seed <=9) means model untested on clear at-larges [PAGE 69]. Ordinal ranks make year-to-year transport non-stationary.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define G = total games. W_h, W_n, W_a. WP = (0.6 W_h + 1.0 W_n + 1.4 W_a)/G. [PAGE 66]
- OWP_i = (1/|O_i|) sum_{j in O_i} WP_j [PAGE 66]
- OOWP_i = (1/|O_i|) sum_{j in O_i} OWP_j [PAGE 66]
- RPI_i = f(WP_i, OWP_i, OOWP_i); paper states 75% opponent strength [PAGE 66] but doesn't give explicit weights in text; I can write general linear form RPI = w_1 WP + w_2 OWP + w_3 OOWP with w_2+w_3 = 0.75 approx? Better not invent exact weights if not in text. The text says "75% of the RPI value is dependent on opponent strength" so I can state w_OWP + w_OOWP = 0.75 as a sourced constraint, not invented. Actually standard RPI is 0.25/0.50/0.25 but since not explicitly in the provided text, I should be careful. I can say: The source identifies WP, OWP, OOWP components and notes opponent-strength terms comprise approximately 75% of RPI [PAGE 66]. I will not assert exact coefficients beyond what is stated.
- Spearman rho table values [PAGE 68].
- Pairwise score: S_i = sum_{j in C, j != i} 1[Tree(i,j) selects i], where C is candidate set [PAGE 68]. Selection set A = top 36 by S_i union 32 auto-qualifiers.
- Decision tree conditions as ordered logical predicates P_1...P_11 from Table 2 [PAGE 69]. Example: P_1: RPI_i - RPI_j > 45 => select i. etc.
- Breakdown regimes: ordinal transform phi_year(r) loses cardinality; threshold singularities at diff = 45, 30, 18, 15, 12, 90, 5, 3, 2, 0; candidate pool restriction to bubble teams means external validity on locks unknown; deterministic tree vs stochastic committee.

RETROCAUSAL_GENEALOGY:
- Lineage: RPI (NCAA, historical), Ezekowitz 2013 critique [PAGE 66], Pomeroy 2011/2012 [PAGE 66], BPI ESPN 2013 Oliver [PAGE 66], Sagarin proprietary [PAGE 66], NCAA 2016 selection protocol [PAGE 66], Katz 2016 top-50/200+ [PAGE 66], Stephens 2015 RPI statement [PAGE 66].
- Multi-week traps: last 12 games window is an ESPN-tracked statistic [PAGE 68]; Selection Sunday clock; committee ballots iterative [PAGE 66]; recency bias trap; strength-of-schedule trap for mid-majors [PAGE 66]; top-100 scheduling trap [PAGE 68].

RECURSIVE_THEORY_OF_MIND:
- Committee theory of mind: members model other members; all-but-two rule [PAGE 66] creates convergence pressure. Crisis habit regression: under time pressure (Selection Sunday), regress to RPI despite public de-emphasis [PAGE 71]. Counter-trap: if teams know tree, they schedule to game thresholds (top-100 count, last 12 net); committee may anti-inductively shift weights. Clock: ordinal year-locked ranks [PAGE 67] ignore pre-Season narrative; last-12 window fixed [PAGE 68]; pairwise tournament is static snapshot.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: injuries [PAGE 66 mentions injury reports as available data but unknown weighting; PAGE 71 future work], coach availability [PAGE 66]. Model excludes these -> veto proof only against modeled variables; any injury veto is out-of-distribution. Biomechanical: player fatigue, load management not in model; road record captured via location weights [PAGE 66] but not travel distance or back-to-backs. Weather: indoor sport, cancellations rare; not modeled. Veto adjudication: model veto is invalid if physical-layer shock (star injury, eligibility) occurs after data cutoff; model cannot condition on unobserved qualia.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Bubble team X has strong last-12 (net +4) but star player suffers season-ending injury in conference tournament after last-12 cutoff. Model selects X based on last-12 condition [PAGE 69 Table 2]; committee vetoes due to injury. Prediction: false positive rate increases in years with late-season injuries to bubble-team stars; model precision drops on teams with last-12 games within 7 days of Selection Sunday.
- Scenario 2: Mid-major Y plays 7 games vs top-100 (satisfying >5 differential) but loses all by large margin; model sees top-100 count and SOS condition; committee values results not just quantity. Prediction: false positive for high-exposure, low-result mid-majors; model over-selects teams with top-100 game count > opponent by >=5 but sub-.500 in those games.
- Scenario 3: Team Z collapses late (last 12 net 0, but trend from +6 to -6) vs Team W steady (last 12 net 0, trend flat). Model uses aggregate net only [PAGE 67], cannot distinguish trajectory; committee may weigh momentum. Prediction: model selection error when two bubble teams have identical last-12 net but divergent recent form; the team with negative trajectory is over-selected relative to committee.

Need to ensure no betting lines. I won't mention odds, spreads, etc.

Word count check: I'll write generously. Let's produce final answer.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s selection problem decomposes into three nested layers: (1) the structural constraint that 32 teams earn automatic bids via conference tournaments, leaving exactly 36 at-large slots for the committee [PAGE 65]; (2) the construction of a candidate pool consisting of at-large teams seeded ten or higher in the NCAA field plus one- and two-seeded NIT teams, which the authors treat as a reasonable proxy for the bubble [PAGE 69]; and (3) a pairwise comparison tournament in which every candidate team is compared against every other candidate team in the same year, the stronger team in each ordered pair receives one victory, and the teams with the most pairwise victories are selected [PAGE 68]. Because teams seeded nine or better are assumed to be safe and are excluded from the candidate universe, the model’s external validity is explicitly bounded to bubble-level discrimination; it makes no claim about clear at-large locks [PAGE 69].

The decision tree itself is an ordered sequence of logical conditions drawn from Table 2 [PAGE 69]. The earliest conditions—RPI difference greater than 45, difference of (RPI Top 50 Wins minus 200+ Losses) greater than 2, and RPI difference greater than 30—are the most discriminatory because they fire with minimal conditioning on prior nodes [PAGE 71]. RPI is therefore structurally privileged: it appears in two of the top three conditions and is implicit in a third because top-50 and 200+ designations are derived from RPI ranks [PAGE 71]. This creates a gray zone: the committee publicly states that RPI is not a determining factor [PAGE 66], yet the model recovers RPI as the dominant early splitter, suggesting either that RPI is a strong proxy for unobserved qualitative judgments or that the committee’s revealed behavior contradicts its stated protocol.

Several breakdown regimes and singularities are visible in the methodology. First, all ranking inputs—RPI, strength of schedule, and Pomeroy—are converted to ordinal values by year [PAGE 67]. This removes inter-year variation in absolute scale but destroys cardinal comparability across seasons; a 12-rank gap in 2012 is not the same information as a 12-rank gap in 2015 because the underlying distributions are discarded. Second, the pairwise score S_i = Σ_j 1[Tree(i,j) selects i] is deterministic and threshold-sensitive. At exact thresholds—RPI diff = 45, 30, 15, 12; Pomeroy diff = 18, 12; top-100 game diff = 5; last-12 diff = 3; SOS diff = 90; top-50-win-minus-200+loss diff = 2, 0—the tree can flip outputs on infinitesimal data perturbations [PAGE 69]. Third, the candidate pool excludes teams seeded nine or better, so the model is never stress-tested on teams with resumes far above the bubble; its accuracy claim (“all but one team”) applies only to the restricted set [PAGE 69–70].

Gray-zone audit of results: across 2012–2016 the model selected all but one team correctly each year, but the single error varied and sometimes involved a team ranked far below other excluded teams—most notably Iona in 2012, whose metrics were far worse than multiple excluded teams yet received an actual bid [PAGE 70]. The authors interpret this as evidence of a non-numeric human factor [PAGE 70]. A secondary gray zone is overfitting through adaptation: whenever the tree was tweaked to achieve perfect classification in one year, performance on the other years deteriorated significantly [PAGE 70]. This indicates the decision boundary is not stable across temporal folds and likely captures year-specific noise rather than a timeless selection invariant. Finally, proprietary rankings (BPI, Sagarin) were excluded because their pairwise Spearman correlations with RPI and Pomeroy exceeded 0.96 [PAGE 68], but the choice to retain Pomeroy alone rests on correlation magnitude, not on demonstrated causal or out-of-sample superiority.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Let G_i be the total games played by team i, and let W_{i,h}, W_{i,n}, W_{i,a} denote home, neutral, and away wins. Following the source’s location-weighted winning percentage [PAGE 66], define

WP_i = (0.6 W_{i,h} + 1.0 W_{i,n} + 1.4 W_{i,a}) / G_i,            (1)

where the coefficients 0.6, 1.0, and 1.4 are location weights reflecting the observed home-court influence [PAGE 66]. Units: dimensionless, bounded [0,1].

Let O_i be the set of opponents of team i. Opponents’ winning percentage and opponents’ opponents’ winning percentage are

OWP_i = (1 / |O_i|) Σ_{j ∈ O_i} WP_j,                                  (2)
OOWP_i = (1 / |O_i|) Σ_{j ∈ O_i} OWP_j.                               (3)

Units: dimensionless. The RPI is a functional RPI_i = F(WP_i, OWP_i, OOWP_i). The source does not print the exact scalar weights in the provided text, but it states explicitly that 75% of the RPI value is dependent on opponent strength because opponent terms enter through both OWP and OOWP [PAGE 66]. Thus, if F is linear, w_{OWP} + w_{OOWP} ≈ 0.75 as a sourced constraint, not an invented ratio.

Pairwise comparison operator: for candidate set C in year y and ordered pair (i,j), the decision tree T outputs a binary winner. The cumulative strength score is

S_i = Σ_{j ∈ C, j ≠ i} 1[T(i,j) = i],                                 (4)

where 1[·] is the indicator function. Teams are ranked by S_i descending; the at-large selection set comprises the highest-scoring teams up to 36 slots, combined with 32 automatic qualifiers to reach 68 [PAGE 65, 68].

Spearman correlation coefficients from Table 1 [PAGE 68] (unitless, ρ ∈ [–1,1]):
ρ(RPI, BPI) = 0.967; ρ(RPI, Pomeroy) = 0.965; ρ(RPI, Sagarin) = 0.968; ρ(BPI, Pomeroy) = 0.991; ρ(BPI, Sagarin) = 0.994; ρ(Pomeroy, Sagarin) = 0.994.

Preprocessing operators [PAGE 67]:
- Strength-of-schedule transform: mSOS_i = min(SOS_i, non-conference SOS_i), where lower values indicate stronger schedule. Units: ordinal rank within year.
- Last-12 games score: L12_i = W_{last12} – L_{last12}, dimensionless integer in [–12,12] [PAGE 67].
- Ordinal conversion: r_i^year = rank_{j ∈ C_y}(metric_{i}) so that cross-year absolute variation is removed [PAGE 67].

Decision-tree conditions (ordered predicates from Table 2 [PAGE 69]):
P_1: RPI_i – RPI_j > 45 ⇒ select i.
P_2: (Top50W_i – L200plus_i) – (Top50W_j – L200plus_j) > 2 ⇒ select i.
P_3: RPI_i – RPI_j > 30 ⇒ select i.
P_4: (RPI_i – RPI_j > 12) ∧ (Pomeroy_i – Pomeroy_j > 12) ⇒ select i.
P_5: Pomeroy_i – Pomeroy_j > 18 ⇒ select i.
P_6: Top100Games_i – Top100Games_j > 5 ⇒ select i.
P_7: (L12_i – L12_j > 3) ∧ (|RPI_i – RPI_j| < 15) ⇒ select i.
P_8: mSOS_j – mSOS_i > 90 ⇒ select i (stronger schedule).
P_9: RPI_i – RPI_j > 15 ⇒ select i.
P_10: (Top50W_i – L200plus_i) – (Top50W_j – L200plus_j) > 0 ⇒ select i.
P_11: Default: select team with better Pomeroy rank.

Singularity and breakdown regimes:
1. Threshold collisions: at exact differences of 45, 30, 18, 15, 12, 5, 3, 2, 0, or 90 in the respective units, infinitesimal measurement error changes the selected team [PAGE 69].
2. Ordinal non-stationarity: φ_year(·) discards cardinal information; model coefficients are not transportable across years without re-estimation [PAGE 67].
3. Candidate truncation bias: teams seeded ≤9 are excluded from pairwise evaluation; the model’s error rate is conditioned only on the bubble and cannot generalize to resumes far above the cutoff [PAGE 69].
4. Margin-of-victory exclusion: field-goal percentage, three-point percentage, and margin of victory are not used, so the model is blind to dominance within wins and losses [PAGE 68].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The methodological genealogy begins with the NCAA’s public selection protocol: each committee member submits 36 preferred teams and a consideration list; any team selected by all but two members enters, followed by iterative ballots, with teams added four at a time by rank [PAGE 66]. This creates a revealed-preference problem: the procedure is public, but the weighting of inputs is not. The paper’s chosen inputs descend from a specific lineage of public ratings. The Rating Percentage Index (RPI) is the ancestral metric, built from winning percentage, opponents’ winning percentage, and opponents’ opponents’ winning percentage, with location-weighted home/neutral/away outcomes [PAGE 66]. Ezekowitz (2013) publicly challenged RPI’s predictive value [PAGE 66]; Stephens (2015) reported committee statements that RPI is used for consideration but not as a determining factor [PAGE 66]. Despite this, Katz (2016) documented committee emphasis on top-50 wins (versus top-50 RPI opponents) and avoidance of 200+ losses [PAGE 66]. Because top-50 and 200+ classifications are RPI-derived, RPI remains embedded implicitly even when explicitly downplayed [PAGE 66].

Competing expert systems form the second branch: Pomeroy’s adjusted offensive and defensive efficiency per 100 possessions, combined into a Pythagorean rating [PAGE 66]; ESPN’s Basketball Power Index (BPI), introduced 2013 and proprietary, incorporating player availability, game closeness, pace, and strength of schedule [PAGE 66]; and Sagarin’s proprietary rankings [PAGE 66]. The authors empirically found BPI, Pomeroy, and Sagarin to be mutually redundant (Spearman ρ ≥ 0.961 versus RPI; ρ ≥ 0.991 among themselves) [PAGE 68], so they retained Pomeroy for parsimony and generalizability [PAGE 68].

Multi-week traps specific to the selection calendar include: (a) the last-12-games window, an ESPN-tracked statistic whose inclusion rests on recency intuition rather than a validated decay function [PAGE 68]; teams can intentionally schedule winnable games late to inflate L12_i, creating a scheduling trap. (b) Strength-of-schedule asymmetry: mid-major teams in weak conferences suffer RPI damage regardless of outcomes because conference opponents are weak, incentivizing non-conference strength-of-schedule investment that the model captures only via min(SOS, non-conference SOS) [PAGE 66–67]. (c) The Selection Sunday clock: ordinal conversion is performed within a year [PAGE 67], so the model treats Selection Sunday as a static snapshot and cannot incorporate cross-year momentum or late-season narrative shifts. (d) The ballot convergence trap: the all-but-two rule [PAGE 66] pressures committee members toward consensus, which the pairwise tree approximates but cannot reproduce when idiosyncratic member preferences break transitivity.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Recursive theory of mind models the committee as agents modeling one another’s judgments under time pressure. Crisis habit regression predicts that, when cognitive load peaks at Selection Sunday, members regress to the most cognitively available heuristic—RPI and RPI-derived credentials such as top-50 wins—despite public statements de-emphasizing RPI [PAGE 66, 71]. The decision tree captures this regression structurally by placing RPI conditions first [PAGE 69], but it assumes the habit is static. A counter-trap emerges if teams learn the tree: they can schedule ≥5 more top-100 games than rivals [PAGE 69], manage non-conference SOS to satisfy P_8 [PAGE 69], and front-load winnable games to optimize L12_i [PAGE 68]. If the committee observes such gaming, it may anti-inductively reweight or ignore metrics the model treats as decisive, violating the stationarity assumption embedded in the 2012–2016 tests [PAGE 70].

The clock operates on three time scales. First, the last-12-games window is a fixed horizontal slice ending near Selection Sunday; it cannot distinguish a team collapsing from +6 to –6 from a team steady at 0, because only the net wins–losses is retained [PAGE 67]. Second, the pairwise comparison is a one-shot tournament over the candidate pool [PAGE 68], whereas the real committee conducts multiple sequential ballots [PAGE 66]; path dependence and order effects are absent. Third, ordinal ranks are computed within-year [PAGE 67], so a team’s resume is evaluated against contemporaneous peers only, ignoring that the committee may carry cross-season priors about program prestige or coach history. In crisis-mode recursion, the model assumes committee members are Bayesian aggregators of the listed metrics, but the Iona 2012 anomaly—admitted despite far weaker metrics than excluded teams—indicates that out-of-model qualia (reputation, eye test, conference tournament performance outside the candidate window) can override the numeric profile [PAGE 70].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

The model’s domain is statistical and administrative; it does not represent the physical layer of basketball competition. Three veto layers lie outside its formal operators:

Physical layer: The source acknowledges that injury reports and coach availability are data points available to the committee, but states it is unknown whether or how they are weighted [PAGE 66]. The decision tree excludes them entirely [PAGE 68]. Therefore, any veto arising from a star player’s season-ending injury, suspension, or eligibility ruling after the data cutoff is out-of-distribution; the model cannot adjudicate it. Future work explicitly lists injuries as a missing input [PAGE 71].

Biomechanical layer: Player fatigue, back-to-back game load, travel distance, and minutes restrictions are not inputs. Home/neutral/away location weights in WP (0.6 / 1.0 / 1.4) capture the average outcome influence of venue [PAGE 66], but not the physiological cost of travel or short rest. A team with a strong road record generated through grueling travel is treated identically to one with a strong road record from regional proximity, so biomechanical vetoes are unrepresented.

Weather layer: NCAA basketball is indoors; weather-driven postponements are rare and not modeled. The source does not mention weather at all. Consequently, the model is weather-proof only by omission: it assumes all scheduled games occur and that location effects are stationary. If a conference tournament or key non-conference game were canceled or moved because of weather, the game-count denominators in WP and Top100Games would shift unpredictably, breaking the ordinal preprocessing [PAGE 67].

Veto adjudication rule: the decision tree is veto-proof only against violations of its own feature set. If a selection-relevant shock occurs in the physical, biomechanical, or weather layer after the last data update, the model’s output should be overridden by a committee veto; the model provides no formal mechanism to detect or incorporate such shocks.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards counterfactual veto scenarios with predictions.

Scenario 1 — Late-season star injury veto.
Setup: Bubble team A finishes its last 12 games at 8–4 (L12 = +4), satisfying P_7 against a similarly ranked rival with L12 = 0 and |RPI difference| < 15 [PAGE 69]. Three days before Selection Sunday, team A’s leading scorer suffers a season-ending injury in the conference tournament, after the last-12 window has closed. The model, using only the completed last-12 net score, selects team A [PAGE 69]. The committee, weighting post-window injury information, denies the bid. Verifiable signal: the injury is announced after the model’s data cutoff but before the bracket is released.
Prediction: In seasons where bubble teams suffer star-player injuries within seven days of Selection Sunday, the model’s false-positive rate will exceed its historical 1-in-5-year error rate, and precision on teams with high L12 scores will decline relative to baseline.

Scenario 2 — Top-100 exposure without results veto.
Setup: Mid-major team B plays seven games against top-100 RPI opponents, creating a differential of +5 or more versus its nearest rival and triggering P_6 [PAGE 69], but loses all seven games. The model treats top-100 game count as a positive strength signal; the committee weights results against those opponents, not merely exposure. Verifiable signal: team B’s record in top-100 games is sub-.500 despite satisfying the count threshold.
Prediction: The model will over-select mid-majors with top-100 game-count differentials ≥5 but losing records in those games; verifiable outcomes will show a cluster of false positives among teams whose top-100 exposure is high but whose point differential in those games is negative.

Scenario 3 — Trajectory-blind recency veto.
Setup: Team C ends its last 12 games at 6–6 (net 0) after collapsing from a 5–1 start to a 1–5 finish. Team D also ends 6–6 but is steady throughout. The model stores only net wins–losses, so L12_C = L12_D = 0 and P_7 does not distinguish them [PAGE 67, 69]. The committee weighs momentum and may prefer team D. Verifiable signal: within-team last-12 split (first six vs last six) diverges while aggregate net is identical.
Prediction: When two bubble teams share identical last-12 net scores but opposite recent trajectories, the model will randomly or arbitrarily select one via downstream tree conditions, producing a systematic error correlated with negative late-season form; the committee’s revealed choice will favor the team with positive trajectory in a majority of such cases.
</RLVR_COUNTERFACTUAL_VETOES>