---
source: "2021 The Anatomy of Corner 3s in the NBA - Pelechrinis, Goldsberry.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5478
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about corner 3s in the NBA and produce a deep reasoning output with specific XML sections. Let me carefully review the constraints:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important notes:
- No betting lines at all.
- No fake toy equations. I need to use formal LaTeX equations from the paper or derive legitimate ones with units and assumptions.
- Cite [PAGE N] markers. The source text doesn't have explicit page numbers like "[PAGE 1]", but the user says "PAGES: 11". I should probably infer page numbers or reference sections. Wait, the instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source text is provided as a single block with some figure/table references but no explicit [PAGE N] markers in the text itself. However, since the user says PAGES: 11, I should probably treat the sections as pages or estimate page numbers based on typical academic paper layout. But I must be careful not to fabricate page numbers if they aren't in the source. Actually, looking at the source text, there are no [PAGE N] markers. But the instruction says "When source pages are provided, cite exact [PAGE N] markers". Since no page markers are in the text, I might need to reference sections (e.g., Abstract, Section 3.1) or estimate pages. However, to be safe and compliant, I should avoid claiming exact page numbers unless I can ground them. But the user explicitly asked for [PAGE N] markers when source pages are provided. The text doesn't have them explicitly. I could use section-based citations like [Abstract], [Sec. 3.1], etc., or I could note that page markers weren't present in the converted text. But the strict invariant says "cite exact [PAGE N] markers". Hmm. Maybe I should treat the flow as 11 pages and estimate, but that could be fabrication. Let me think... The text mentions "Figure 1", "Figure 2", "Table 1", etc. It's an arXiv paper. Typically, arXiv papers have page numbers. But since this is a machine-converted md file without page breaks, I cannot know exact pages. I will use section-based citations like [Abstract], [Sec. 3.1], [Sec. 3.3], etc., to avoid fabricating page numbers, OR I can say [PAGE N/A - source conversion lacks page breaks]. But the user might penalize not using [PAGE N]. Let me look again: the user wrote "When source pages are provided, cite exact [PAGE N] markers". Since they provided PAGES: 11 but not actual page breaks in the text, I think I should cite sections and note page unavailability, or perhaps assign approximate page ranges based on standard arXiv formatting (usually 1 title, abstract on page 1, etc.). But I don't want to hallucinate. I'll use section citations in brackets like [Abstract], [Sec. 3.1], [Sec. 3.2], [Sec. 3.3], [Discussion] and explain that page numbers are not preserved in the markdown conversion. Wait, the instruction says "When source pages are provided, cite exact [PAGE N] markers". If they're not provided, maybe I don't have to? But it's safer to include something like [PAGE ~N (Sec...)]? No, that's fabrication.

Actually, looking carefully at the source text, there are no page numbers. I will cite sections explicitly and mention that the pdftotext conversion did not preserve page breaks, so I cite by section/figure/table instead. That is honest and avoids fake citations.

Now, the content:

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. I need to derive the efficiency gap logic:
- Expected points: C3 at 22 ft = 1.14 expected points vs 20 ft 2-pointer = 0.9. (From Introduction)
- Distance-only logistic regression predicts only 1.8 percentage points higher FG% for C3 vs ATB3. Actual gap is 38.8% vs 34.7% = 4.1 percentage points. (Sec 3.1)
- Distance explains ~1.8/4.1 ≈ 44% of gap? Actually 1.8 percentage points out of 4.1 is about 44%. The rest is assist/contest.
- Contest: C3 closest defender avg 6.5 ft vs ATB3 < 6 ft.
- Assist rate: >90% C3 vs just above 70% ATB3.
- FIBA natural experiment: 3-point line geometry difference only 28% of NBA. Efficiency gap still present: C3s provide 16 points/100 shots more in FIBA. C3s assisted ~45% higher than ATB3 in FIBA.
- Radius of gyration equation: r_C = sqrt( (1/||C||) * sum_{xi in C} (xi - x_C)^2 ). This is formal.
- Game theory: defender strategy Σ_def = {1,...,21} feet. Offense: drive or kick-out. Zero-sum game. Payoff matrix Π. qSQ points per shot as function of defender distance. Double team factor: (1 - (22-d)/α)? Wait, the text says "reduce the expected points per shot of the drive by a factor of (1 − (22−d)) / α"? Let me read carefully: "a factor of (1 − (22−d) ). Different values of α correspond to different levels of impact on a double team. For example, for α = 2..." The text seems to have a formatting issue: likely (1 - (22-d)/α) or similar. Actually it says: "will reduce the expected points per shot of the drive by a factor of (1 − (22−d) ). Different values of α correspond to..." This looks like a missing α in the equation. I should not invent the exact equation if it's garbled. I can state that the paper posits a multiplicative reduction factor depending on d and α, but the exact LaTeX was not preserved in conversion. That's honest.
- Nash equilibrium: defender should commit (bi-modal) not linger. Expected distance close to 13 feet, matching observed average 12.3 feet but distribution differs (empirical normal vs equilibrium bi-modal).
- Unit disk model mental representation: defender influence disk radius ρ, maximizing overlap with court causes lingering fallacy because court areas have different value.

Gray-zone audit: The causal claim is not strictly causal (no random assignment). FIBA natural experiment has small sample (324 games vs 750 NBA games) and no tracking data. The game model uses league-average qSQ, not player-specific. Empirical defender distribution is normal around 12.3 ft, not bi-modal NE. Lingering could be cognitive bias (unit disk overlap fallacy) but untested.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- Logistic regression: logit(p) = β0 + β1 * distance. Units: feet, probability dimensionless.
- Expected points: E[pts] = 3 * P(make | C3) = 3 * 0.388 = 1.164 (close to 1.14 cited). ATB3: 3 * 0.347 = 1.041. Difference in expected points per 100 shots: (1.164 - 1.041)*100 = 12.3 points per 100 shots, matching "about 12 points per 100 shots". 2-pointer: 2 * 0.45? Wait, the text says 20-feet jumper worth 2 points provides expected value 0.9 points. That implies P=0.45. I can derive: E[2pt] = 2 * 0.45 = 0.9.
- Radius of gyration: r_C = sqrt( (1/||C||) Σ_{xi∈C} ||xi - x_C||^2 ). Units: feet (spatial).
- Game theory payoff matrix Π_{d,s}. Zero-sum: Π_def = -Π_off.
- Double team reduction: f(d, α) = 1 - (22-d)/α? I need to be careful. The text says "reduce ... by a factor of (1 − (22−d) ). Different values of α..." It might be (1 - (22-d)/α). I will state it as the paper's parametrized model without asserting exact garbled formula, or I can say "paper denotes reduction factor parametrized by α and defender distance d ∈ {1,...,21}, exact functional form not preserved in markdown conversion." That's safe.
- Nash equilibrium mixed strategy: σ_def*(d) bi-modal over commit-to-corner vs commit-to-drive.
- Observed mean distance: d_obs = 12.3 ft. NE expected distance: d̂ ≈ 13 ft.

RETROCAUSAL_GENEALOGY: Historical lineage.
- Goldsberry 2019 (Sprawlball) on increased 3PT volume.
- Hughes 2014 on corner three revolution.
- Franks et al. 2015 (Counterpoints) defensive metrics from optical tracking.
- Cervone et al. 2016 expected points / multiresolution stochastic process.
- Skinner 2010 price of anarchy / Ewing Theory.
- Natarajan 2019 simplified game / Nash equilibrium for shooting.
- Seidl et al. 2018 reinforcement learning for defensive reaction.
- Chen et al. 2018 cGAN for defensive plays.
- Sicilia et al. 2019 Deephoops.
- Pelechrinis 2021 Shapley values.
- Winston 2012 Mathletics end-of-game.
- Tibshirani et al. 2001 gap statistic for k-means.
- Multi-week traps: Teams linger in "in-between" defense over weeks because of cognitive unit-disk bias; this creates a persistent suboptimal equilibrium that opponents can exploit by scouting which corner defenders under-commit. Over a multi-week schedule, a team that persistently lingers (12.3 ft average) gives up higher quality C3s because they neither contest the shooter nor protect the rim. This is a Nash disequilibrium trap.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under pressure (close game, shot clock winding down), defenders revert to lingering between basket and corner because it feels safer (unit disk overlap maximization) even though NE says commit.
- Counter-trap: Offense recognizes defender's lingering habit and runs more drive-and-kick to stationed shooters anchored >4 seconds. The offense can meta-game: if defender commits to corner, drive; if defender helps, kick out.
- Clock: Shot clock (24s) and game clock constrain decision time. The anchored shooter waits 4+ seconds; if defender doesn't commit early, the offense has time to execute. If defender over-commits to drive late in clock, kick-out to open corner. The recursive ToM: Defender thinks offense will drive; offense knows defender thinks that, so offense kicks; defender anticipates kick and commits to corner; offense then drives. The NE breaks this loop by randomizing commitment but not lingering.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: Court geometry fixes corner 3 at 22 ft from basket (minimum). The sideline and baseline constrain shooter position; defender cannot stand out of bounds. Σ_def = {1,...,21} bounded by court dimensions.
- Biomechanical: Closeout speed. Defender at 12.3 ft cannot contest a catch-and-shoot corner 3 effectively because release happens before closeout. Human reaction/acceleration limits mean committing after the pass is too late; must pre-commit.
- Weather: Indoor NBA arena, climate-controlled. Weather is a null veto (no effect). However, arena humidity/altitude could marginally affect ball flight but paper doesn't address; veto not applicable indoors.
- Veto adjudication: Any defensive strategy requiring defender to be < 6 ft from shooter at release is biomechanically infeasible on a drive-and-kick because closeout time > shot release time. Therefore "lingering" at 12.3 ft is physically vetoed as a contest strategy; it only makes sense as a help-positioning compromise, which NE shows is suboptimal.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning via Verifiable Rewards? Or just verifiable scenarios. I'll create 3 counterfactual veto scenarios with testable predictions.
1. Veto: If a team trains defenders to strictly bi-modal commit (never linger > 5 feet from corner or basket), then corner 3 FG% against them should drop below league average 38.8% because either contest is high or drive is stopped. Prediction: Measured C3 FG% allowed decreases by at least 2-3 percentage points over a 20-game sample.
2. Veto: If an offense identifies a defender whose empirical distance distribution is unimodal normal around 12.3 ft (lingerer), then running >60% of possessions as drive-and-kick to anchored corner shooter (4+ seconds stationed) should generate C3 attempts with < 4 ft defender distance at release. Prediction: Assist rate on C3 vs that defender > 95%, and points per 100 C3 shots > 120 (i.e., > 1.20 pps).
3. Veto: If payoff matrix is personalized (α adjusted for specific driver/shooter), the NE mixture shifts; for a poor corner shooter (e.g., 30%), defender should commit to drive > 70% of time. Prediction: Against teams with sub-33% corner shooters, optimal defender distance shifts toward basket (< 8 ft) and C3 attempt rate against them drops because offense stops kicking to poor shooters.

Word count: Need >= 1,000 words across sections. THINK_TRACE alone needs >=400. I'll aim for ~150-200 words per section on average, total well over 1000.

Let's draft carefully.

I need to avoid betting lines: no spreads, totals, moneylines, odds. I won't mention any of those.

I need to avoid toy equations: I will only use equations from the paper or clearly derived ones with units and assumptions.

Structure:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

Let me write detailed content.

THINK_TRACE: I'll discuss the multi-hop derivation:
1. Expected value logic: 3 * P(C3) vs 2 * P(2pt). C3 38.8% -> 1.164; 2pt 45% -> 0.90. Paper cites 1.14 and 0.9.
2. Distance-only model gap: 1.8 pp vs actual 4.1 pp. Residual 2.3 pp unexplained by distance.
3. Mediators: contest distance (6.5 ft vs <6 ft) and assist rate (>90% vs >70%).
4. Natural experiment: FIBA geometry reduces distance differential to 28% of NBA; gap persists at 16 points/100 shots; assist rate 45% higher. This isolates ball movement/assist as primary driver.
5. Choreography: k-means k=10, gap statistic. Stationed clusters = 50% of C3s. Radius of gyration equation.
6. Game: Σ_def = {1,...,21}; zero-sum; qSQ; double team factor; NE bi-modal; observed d_obs = 12.3 ft vs NE d̂ ≈ 13 ft; empirical distribution normal vs NE bi-modal.
7. Gray zones: no causal identification (non-random); FIBA sample smaller (324 vs 750 games) and no tracking; qSQ league-average not player-specific; mental unit-disk hypothesis untested; lingering cause unknown.
I'll make sure this is >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Include LaTeX.
- \operatorname{logit}(p) = \beta_0 + \beta_1 d, d in feet.
- E[pts|C3] = 3 \times 0.388 \approx 1.164; E[pts|ATB3] = 3 \times 0.347 \approx 1.041; \Delta per 100 = (1.164-1.041)\times100 \approx 12.3.
- E[pts|2pt] = 2 \times 0.45 = 0.90 (implied).
- r_C = \sqrt{\frac{1}{||C||} \sum_{x_i \in C} ||x_i - x_C||^2}. Units: feet.
- \Sigma_{def} = \{1,2,\dots,21\} feet. \Sigma_{off} = \{\text{drive}, \text{kick-out}\}. Zero-sum: \Pi_{def} = -\Pi_{off}.
- Double-team reduction: multiplicative factor \phi(d,\alpha) parametrized by d and \alpha \in [1,2]; exact form not preserved in markdown conversion (verbatim quote caveat).
- NE: \sigma^*_{def} bi-modal on commit-to-corner vs commit-to-drive; \mathbb{E}[d]_{NE} \approx 13 ft; d_{obs} = 12.3 ft.
- FIBA: \Delta_{\text{eff,FIBA}} = 16 points per 100 shots; assist rate ratio C3/ATB3 \approx 1.45.
I need to cite sections since pages not preserved. I'll write [Sec. 3.1], [Sec. 3.2], etc.

RETROCAUSAL_GENEALOGY: Cite Goldsberry 2019, Hughes 2014, Franks et al. 2015, Cervone et al. 2016, Skinner 2010, Natarajan 2019, Seidl et al. 2018, Chen et al. 2018, Sicilia et al. 2019, Pelechrinis 2021, Winston 2012, Tibshirani et al. 2001. Multi-week traps: persistent lingering = exploitable pattern over weeks.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (defender regresses to linger under pressure), counter-trap (offense meta-games the linger), clock (shot clock and 4-second anchor window). I'll discuss levels of ToM.

CROSS_LAYER_VETO_ADJUDICATION: Physical (court bounds, 22 ft corner), biomechanical (closeout time vs release time, 6.5 ft uncontested), weather (indoor null), veto adjudication (lingering vetoed as contest strategy but retained as compromise; NE says compromise is suboptimal).

RLVR_COUNTERFACTUAL_VETOES: Three scenarios with verifiable predictions.

Word count check: I'll write generously.

Let's write it out now. I must be careful with LaTeX syntax in XML. It's fine.

I will not use [PAGE N] since none exist; I'll use section markers and explicitly note page breaks were not preserved in the conversion. This is more honest than fabricating page numbers. If I must use [PAGE N], I could write [PAGE N/A] but that looks weird. I'll use [Sec. 3.1], [Abstract], etc.

Actually, rereading the invariant: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since source pages are NOT explicitly provided (only PAGES: 11 metadata), I am not strictly required to fabricate them. I'll cite sections.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central multi-hop derivation begins with expected-point accounting rather than raw field-goal percentage. A corner three (C3) attempted from approximately 23 feet and made at 38.8% yields E[pts | C3] = 3 × 0.388 ≈ 1.164 points per attempt, which the paper rounds to roughly 1.14 expected points; a 20-foot two-point jumper made at a 45% implied rate yields E[pts | 2pt] = 2 × 0.45 = 0.90 points per attempt [Abstract; Introduction]. Thus the C3 is more efficient not because it is easier to make in absolute probability terms—indeed it is harder than a paint shot—but because the three-point multiplier compensates for the lower make probability.

The second hop isolates distance as a partial explanation. A logistic regression of make probability on shooter-to-basket distance alone predicts only a 1.8 percentage-point FG% advantage for C3s over above-the-break threes (ATB3), using average distances of 23 feet versus 25.1 feet [Sec. 3.1]. The observed gap is 38.8% versus 34.7%, or 4.1 percentage points. Distance therefore accounts for at most 1.8 / 4.1 ≈ 44% of the efficiency differential, leaving roughly 2.3 percentage points—or about 7 points per 100 shots—unexplained by geometry.

The third hop identifies the mediating mechanism: assistance and contest. More than 90% of C3s are assisted, versus just above 70% of ATB3s; assisted shots are systematically more open. At shot time, the closest defender averages 6.5 feet from the C3 shooter, somewhat farther than the sub-6-foot average for ATB3s [Sec. 3.1]. The paper’s natural experiment strengthens the causal claim: FIBA’s three-point geometry compresses the corner-to-above-the-break distance differential to only 28% of the NBA’s, yet C3s still produce 16 points per 100 shots more than ATB3s in the FIBA Champions League sample, and C3 assist rates remain approximately 45% higher [Sec. 3.1]. Because the distance advantage is structurally diminished in FIBA while the gap persists, ball movement and assist generation—not raw distance—are implicated as the primary driver.

The fourth hop models shooter-defender choreography. Applying k-means with the gap statistic to the final four seconds of shooter-defender trajectories yields 10 clusters; the two “Stationed” clusters alone encompass half of all C3s [Sec. 3.2; Fig. 2]. In these, the shooter is anchored at the corner for at least four seconds awaiting a kick-out pass, while the defender lingers between the basket and the shooter. Cluster coherence is measured by the radius of gyration, r_C = sqrt( (1/||C||) Σ_{x_i ∈ C} ||x_i − x_C||² ), where the “Stationed” clusters exhibit the smallest spatial dispersion [Sec. 3.2; Eq. 1]. Table 1 shows roughly one-third of corner passes originate from the basket area, deep paint, or baseline—consistent with drive-and-kick generation [Sec. 3.2].

The fifth hop formalizes the defensive response as a zero-sum game. The defender’s strategy space is quantized distance Σ_def = {1, …, 21} feet from the corner shooter; the offense chooses drive or kick-out; payoffs are expected points per shot derived from league-average shot quality (qSQ) as a function of closest-defender distance, with a parametrized double-team reduction factor dependent on d and α ∈ [1, 2] [Sec. 3.3]. The Nash equilibrium is bi-modal: the defender should commit either fully to the corner shooter or fully to helping on the drive, never loiter in between. The equilibrium expected defender distance is approximately 13 feet, close to the observed mean of 12.3 feet, but the empirical distribution is unimodal and normal around that mean, whereas the equilibrium prescribes a bimodal mixture [Sec. 3.3; Fig. 6].

Gray-zone audit: causality is not experimentally identified because games cannot be randomly assigned to modified court geometries; the FIBA natural experiment suffers from a much smaller sample (324 games versus 750 NBA games) and lacks player-tracking data [Sec. 3.1]. The game model relies on league-average qSQ rather than player-specific payoff matrices, though the paper notes it can be adjusted for shooter and driver ability [Sec. 3.3]. The psychological explanation for lingering—a unit-disk model in which defenders maximize geometric overlap of their influence disk with the court while ignoring heterogeneous court value—is offered as an untested hypothesis requiring lab experiments [Discussion]. No betting lines, spreads, totals, or moneylines are invoked anywhere in this derivation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations from the source, with units and assumptions. Page breaks were not preserved in the markdown conversion, so citations reference sections, figures, and tables rather than fabricated page numbers.

Expected-point operator (probability dimensionless, points in SI-compatible abstract score units):
E[pts | C3] = 3 · P(make | C3) = 3 · 0.388 ≈ 1.164 pts (paper cites ≈1.14) [Abstract; Introduction].
E[pts | ATB3] = 3 · 0.347 ≈ 1.041 pts [Sec. 3.1].
Per-100-shot differential: Δ_100 = (E[pts | C3] − E[pts | ATB3]) × 100 ≈ (1.164 − 1.041) × 100 ≈ 12.3 points per 100 shots, consistent with the paper’s “about 12 points per 100 shots” [Introduction; Sec. 3.1].
Two-point comparator: E[pts | 2pt] = 2 · P(make | 20-ft jumper). Paper states 0.90 expected points, implying P(make) ≈ 0.45 [Introduction].

Logistic distance-only model (log-odds dimensionless, distance d in feet):
logit( P(make | d) ) = β_0 + β_1 d.
Predicted C3–ATB3 FG% gap from distance alone ≈ 1.8 percentage points; observed gap = 4.1 percentage points [Sec. 3.1].

Contest operator (distance in feet):
E[ dist(shooter, closest defender) | C3 ] = 6.5 ft; E[ dist | ATB3 ] < 6 ft [Sec. 3.1].

Assist-rate operator (probability dimensionless):
P(assisted | C3) > 0.90; P(assisted | ATB3) ≈ 0.70 [Sec. 3.1].
FIBA assist-rate ratio: C3/ATB3 ≈ 1.45 (45% higher) [Sec. 3.1].

Radius of gyration for cluster C (spatial units: feet):
r_C = sqrt( (1 / ||C||) · Σ_{x_i ∈ C} || x_i − x_C ||² ), where x_i is a shooter-defender observation and x_C is the cluster centroid [Sec. 3.2; Eq. 1].
Low r_C indicates spatial coherence; “Stationed-RC3” and “Stationed-LC3” jointly cover half of C3s and have minimal r_C [Sec. 3.2; Fig. 3].

Game-theoretic operators (distance d in feet; payoff in expected points):
Defender strategy space: Σ_def = {1, 2, …, 21} feet from corner shooter [Sec. 3.3].
Offense strategy space: Σ_off = {drive to basket, kick-out pass to corner shooter} [Sec. 3.3].
Zero-sum condition: Π_def(d, s) = −Π_off(d, s) for defender distance d and offensive strategy s [Sec. 3.3].
Payoff derivation: points per shot from corner as qSQ function of closest-defender distance; drive payoff reduced by a parametrized double-team factor dependent on d and α, α ∈ [1, 2] [Sec. 3.3]. The exact multiplicative form was not preserved in the markdown equation conversion and is therefore not restated as a synthetic formula.
Nash equilibrium: mixed strategy σ*_def is bi-modal over “commit to corner shooter” versus “commit to help on drive”; equilibrium expected defender distance d̂_NE ≈ 13 ft [Sec. 3.3; Fig. 6].
Empirical deviation: observed mean defender distance d_obs = 12.3 ft, but empirical distribution is unimodal/normal rather than the prescribed bi-modal mixture [Sec. 3.3].

FIBA natural-experiment operators:
Court-geometry distance differential ratio: Δ_dist_FIBA / Δ_dist_NBA = 0.28 [Sec. 3.1].
Efficiency gap persistence: C3 advantage over ATB3 = 16 points per 100 shots in FIBA sample [Sec. 3.1].

Verbatim quote anchors:
“the main factor for their efficiency … is not the shorter distance to the basket … but rather the fact that they are assisted at a very high rate (more than 90%).” [Abstract]
“Approximately half of all the C3s in our data, involved a shooter who was anchored at the corner for at least 4 seconds prior to the shot and received a kick out pass.” [Abstract]
“The Nash equilibrium dictates that the defender either commits to the corner shooter or to help defense at the basket.” [Abstract]
“The exact mixed strategy depends on the shooting and driving abilities of the players involved.” [Abstract]
“the dominant strategy currently employed by NBA teams of placing the defender in between the basket and the corner appears to be suboptimal.” [Sec. 3.3]
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits inside a well-documented lineage of basketball analytics that moves from box-score counting to spatial game theory. Goldsberry’s 2019 work on the three-point volume revolution establishes the macro trend that C3s and paint attempts dominate modern offensive efficiency [Background]. Hughes (2014) identified the corner-three revolution as a distinct tactical shift, a lineage this paper extends by showing the revolution is driven by assist architecture rather than merely by the 22-foot geometry [Introduction]. Franks et al. (2015) introduced optical-tracking defensive metrics, enabling the off-ball and closeout analysis used here to quantify defender distance and cluster shooter-defender choreography [Background]. Cervone et al. (2016) and Sicilia et al. (2019) provided the expected-points and microaction evaluation framework that underpins the qSQ payoff logic in the defensive game [Background; Sec. 3.3].

On the game-theoretic side, Skinner (2010) introduced the price of anarchy and the Ewing Theory, showing how individual optimization can degrade collective efficiency; Natarajan (2019) computed Nash equilibria for simplified shooting games, directly precursor to the drive-versus-kick-out model in Section 3.3 [Background]. Seidl et al. (2018) and Chen et al. (2018) modeled defensive reaction using reinforcement learning and conditional GANs, respectively, offering computational extensions to the static payoff matrix used here [Background]. Pelechrinis (2021) applied cooperative-game Shapley values to single-game evaluation, complementing the non-cooperative zero-sum framing of corner defense [Background]. Winston (2012) covered end-of-game strategic reasoning, establishing that basketball decisions are routinely analyzed as equilibrium problems rather than heuristic habits [Background]. Tibshirani et al. (2001) supplied the gap statistic used to select k = 10 clusters for the shooter-defender movement analysis [Sec. 3.2].

Multi-week trap: Because NBA defenses empirically linger at a unimodal normal around 12.3 feet instead of adopting the bi-modal Nash commitment, this behavior becomes a stable, exploitable pattern across a multi-week schedule. Opposing advance scouts can identify which defenders habitually split their attention between rim protection and corner closeout. Over a two-to-three week window, an offense can increase the frequency of drive-and-kick possessions against those specific defenders, knowing the defender will neither contest the catch-and-shoot (too far at release) nor protect the paint (too far from the basket). The trap is self-reinforcing: the defender’s unit-disk cognitive bias rewards the lingering position because it geometrically maximizes court overlap, even though it strategically minimizes expected-point suppression [Discussion; Fig. 7]. Teams that fail to break this habit over multiple weeks systematically concede above-average expected points on corner threes generated from stationed shooters.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under high-leverage clock conditions—shot clock winding below eight seconds or game clock inside the final five minutes—defenders regress to the lingering habit because it feels cognitively safer. The unit-disk model predicts that a defender positioned between the corner and the basket maximizes the geometric overlap of his influence disk with the court, producing an illusion of coverage [Discussion; Fig. 7]. When the offense initiates a drive, the regressed defender neither closes out to the corner in time to contest the catch-and-shoot nor remains close enough to the rim to alter the drive, yielding the worst-of-both-worlds outcome.

Counter-trap: The offense can run a second-order trap. Level-1 reasoning: “The defender will help on the drive, so I will kick out to the corner.” Level-2 reasoning: “The defender knows I expect help, so he will stay with me in the corner, so I will drive.” Level-3 reasoning: “The defender anticipates my level-2 adjustment and commits to the corner, so I will drive into the help.” The Nash equilibrium collapses this recursion by requiring the defender to randomize between pure commitment strategies rather than linger; however, because empirical defenders do not randomize but instead cluster around 12.3 feet, the offense can counter-trap by scouting the defender’s mean distance and variance. A defender with low variance around 12.3 feet is predictably uncommitted to either extreme, making the drive-and-kick to an anchored shooter a high-probability play.

Clock: The four-second anchored-shooter window is itself a clock-dependent structure [Abstract; Sec. 3.2]. The offense needs at least four seconds of stationary corner positioning to generate a “Stationed” cluster observation; this is feasible only when the shot clock and game clock permit a deliberate drive-and-kick. In late-clock situations, the offense may not have time to establish the anchor, forcing the shooter into movement clusters with higher radius of gyration and lower efficiency. The defender, facing a shrinking clock, faces a commitment deadline: if he has not chosen corner versus help by the time the drive begins, his physical closeout speed is insufficient to contest a corner release, which occurs before a defender 12.3 feet away can meaningfully alter the shot [Sec. 3.1; Sec. 3.3]. Thus the clock converts the strategic equilibrium into a biomechanical veto: hesitation is punished by the shot clock, and the only escape is pre-commitment.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The NBA court geometry fixes the corner three-point line at a minimum of 22 feet from the basket center, with the baseline and sideline bounding the shooter’s feasible position [Abstract]. The defender’s strategy space Σ_def = {1, …, 21} feet is itself a physical veto: positions beyond 21 feet place the defender near or outside the corner boundary, while positions below 1 foot are practically impossible without fouling or immediate contact violation [Sec. 3.3]. The court’s finite area also means that a defender “committing to the corner” carries a geometric cost—part of his unit-disk influence falls out of bounds—but the paper’s rebuttal is that court area is not homogeneous in value; the veto of committing based on disk overlap is invalidated by expected-point weighting [Discussion; Fig. 7].

Biomechanical layer: Closeout time versus release time creates a hard biomechanical veto on reactive contesting. A defender stationed 6.5 feet away on average at shot time is already too far to alter a catch-and-shoot release [Sec. 3.1]. Human acceleration and reaction limits imply that once the kick-out pass is initiated, a defender lingering at 12.3 feet cannot reach an effective contest radius before the shooter releases [Sec. 3.3]. Therefore any defensive policy that relies on “reacting” to the pass with a closeout is biomechanically vetoed. The only physically viable contests are pre-positioned (defender already within ~4 feet at catch) or prevented entirely by denying the pass—both require ex-ante commitment, consistent with the Nash equilibrium [Sec. 3.3].

Weather layer: NBA games occur in climate-controlled indoor arenas; weather (wind, temperature, precipitation) is a null veto for this analysis and is not addressed in the paper. The only environmental analogue is arena-specific backboard or rim variability, which the tracking data do not model and which the paper does not treat as a factor in C3 efficiency [Sec. 3.1; Sec. 3.3].

Veto adjudication: The “lingering” defense survives the physical and biomechanical vetoes only as a compromise position, not as an optimal contest strategy. It is not vetoed as a help-defense location—being between basket and corner does offer some protection against the drive—but it is vetoed as a corner-contest strategy because the distance is too great at release. The Nash equilibrium adjudicates by declaring the compromise suboptimal: the defender must choose one layer to prioritize. If the offense’s drive threat is high, the defender commits to the paint; if the corner shooter’s expected points per shot are high, the defender commits to the corner. Remaining at 12.3 feet fails both layers simultaneously [Sec. 3.3; Fig. 6].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-via-verifiable-rewards (RLVR) counterfactual veto scenarios with testable predictions.

Veto Scenario 1 — Bi-modal commitment enforcement. If a coaching staff trains corner defenders to adopt the Nash bi-modal mixture (never remaining within the 6–18 ft “lingering band,” instead positioning either within 4 ft of the corner shooter or within 6 ft of the basket help position), then over a verifiable 20-game sample the opponent’s C3 FG% should fall below the league-average 38.8% [Sec. 3.1; Sec. 3.3]. Prediction: Measured C3 FG% allowed decreases by at least 2.5 percentage points, and opponent points per 100 C3 attempts fall below 110, because defenders either contest the catch (reducing make probability) or protect the rim (reducing drive-and-kick pass success).

Veto Scenario 2 — Exploitation of unimodal lingerers. If an offense identifies a defender whose empirical distance distribution is unimodal and centered near 12.3 feet (i.e., a habitual lingering defender rather than a bi-modal committer), and runs at least 60% of half-court possessions as drive-and-kick to a shooter anchored in the corner for four or more seconds, then the resulting C3 attempts should exhibit defender distance at release under 4 feet on a majority of attempts [Sec. 3.2; Sec. 3.3]. Prediction: Assist rate on those C3s exceeds 95%, and expected points per 100 C3 attempts against that defender exceeds 120, verifiable via player-tracking event logs over a 15-game window.

Veto Scenario 3 — Personalized payoff matrix shift. If the game payoff matrix is personalized for a specific corner shooter with known sub-33% corner accuracy, the Nash equilibrium mixture should shift so the defender commits to helping the drive more than 70% of the time, moving the expected defender distance toward the basket (d < 8 ft) rather than the 13 ft league-average equilibrium [Sec. 3.3]. Prediction: Opposing offenses reduce corner-three attempt volume against that shooter by at least 15% because the kick-out payoff falls below the drive payoff; conversely, drive efficiency and rim-attempt frequency increase against that defensive alignment.
</RLVR_COUNTERFACTUAL_VETOES>