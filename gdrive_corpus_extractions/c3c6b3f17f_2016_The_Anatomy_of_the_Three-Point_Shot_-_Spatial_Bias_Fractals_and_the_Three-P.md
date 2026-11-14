---
source: "2016 The Anatomy of the Three-Point Shot - Spatial Bias, Fractals and the Three-Point Line in the NBA - Pelechrinis.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 8
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4605
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about NBA three-point shots and produce a response following strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

The source text is provided inline. I need to treat it as pages 1-9 (8 pages content). The user says PAGES: 8 but the markdown shows NDSL page markers 1/9 through 9/9. I should cite [PAGE N] markers corresponding to the NDSL page numbers visible: 1/9, 2/9, ..., 9/9.

Let me map content to pages:
- Page 1/9: Abstract + Introduction start, Figure 1 mention.
- Page 2/9: Materials And Methods, Dataset description, tuple format, Figure 2 mention.
- Page 3/9: Fractal Dimension section, Equation (1).
- Page 4/9: Results, Section 3, Figure 3 description, discussion of zones, baseline 50% corners, 52% crest, Figure 4 mention.
- Page 5/9: Figure 4 description continued, Figure 5 description, Equation (2), court equity E(x,y), Fp GOUT = 0.66 * Fp GIN condition.
- Page 6/9: Section 3.2 Spatial Inefficiency, Table 1 with D2 values, theoretical dimensionality, ~30% reduction, Figure 6 mention.
- Page 7/9: Section 3.3 Data-driven Recommendations, Figure 7 description, discontinuity at 30 feet, p-value < 0.1, 9% change.
- Page 8/9: Discussion section.
- Page 9/9: References + S1 Appendix control case, Figure 8, mid-range 17-feet, 51.4% baseline.

Wait, user said PAGES: 8. But text shows up to 9/9. I will cite based on visible NDSL markers. I should be careful to cite exact page markers [PAGE 1] etc. corresponding to "NDSL 1/9" etc.

Now, content analysis:
- The paper analyzes NBA shot charts from 2014-15 and 2015-16 regular seasons.
- Finds statistically significant discontinuity in shot attempts between 1-feet zones just inside and outside three-point line.
- Field goal percentages just inside and just outside are statistically identical.
- Fractal correlation dimension D2 defined via C(r) ∝ r^D2.
- Table 1: Left Corner D2=0.67, Right Corner D2=0.70, Crest D2=1.17. Theoretical: [0.96,0.99], [0.97,0.99], [1.74,1.87]. ~30% reduction.
- Court equity E(x,y) = Fgp(x,y) * [(2*(1 - 1_3PT(x,y))) + (3 * 1_3PT(x,y))].
- For equity equality: Fp GOUT = 0.66 * Fp GIN.
- Discontinuity in FG% as function of distance only at 30 feet (p<0.1), 9% change.
- Control case: mid-range 17-feet arc, baseline 51.4%, no spatial bias.

I must not invent fake ratios. I can use the paper's own equations (1) and (2) which are formal. I must state assumptions and breakdown regimes.

No betting lines. So no mention of Vegas, spreads, etc. Even though it's sports research, I must avoid any betting terminology.

Word count: >= 1000 words total across sections. THINK_TRACE >= 400 words. I should aim for substantial depth in each.

Let's draft each section.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need to derive the implications of the paper's findings, audit assumptions (shot chart data from NBA API, two seasons, confidence level alpha=0.05, fractal dimension range limits, uniform reshuffling baseline, indicator function, court equity definition, 30 feet discontinuity p<0.1 not <0.05, etc.). Gray zones: machine-converted text missing equations/tables, pdftotext reflow may distort figures, D2 computed on point cloud of shot locations within narrow zones (1-foot bands), sample sizes not given, p-values for Figure 4 not explicitly stated except "statistically significant", Figure 7 discontinuity at 30ft with p<0.1 (marginal), court dimensions change needed for 30ft line, player adaptation could erase discontinuity, control case baseline 51.4% but confidence intervals overlap. Multi-hop: from spatial bias -> identical FG% -> expected points disparity -> fractal dimensionality reduction -> recommended 30ft line -> practical vetoes (court dimensions, adaptation, league objectives). Word count >400.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Include Equation (1): C(r) ∝ r^{D_2}, r_1 ≤ r ≤ r_2. Units: C(r) dimensionless fraction, r in feet (shot distance units from Location X/Y), D_2 dimensionless. Equation (2): E(x,y) = Fgp(x,y) · [(2·(1 − 𝟙_{3PT}(x,y))) + (3·𝟙_{3PT}(x,y))]. Units: E in expected points per shot (dimensionless points), Fgp dimensionless [0,1], indicator dimensionless. Condition: Fp_{OUT} = 0.66 · Fp_{IN}. Derivation: For equal equity, 2·Fp_IN = 3·Fp_OUT => Fp_OUT = (2/3) Fp_IN ≈ 0.66 Fp_IN. Table 1 values. Assumptions: alpha=0.05 [PAGE 5], two seasons 2014-15, 2015-16 [PAGE 2], shot distance from basket, corner line 22 ft, crest 23.9 ft [PAGE 4], 1-foot zones, baseline fractions 50% corner, 52% crest [PAGE 4], theoretical dimensionality from uniform reshuffling [PAGE 6], breakdown: D2 scaling only valid r1 to r2 [PAGE 3], finite point sets [PAGE 3], 30ft discontinuity p<0.1 not meeting alpha=0.05 [PAGE 7], court dimensions must change [PAGE 7], control case 17ft arc baseline 51.4% [PAGE 9]. Exact page citations.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage. Cite references: Schroeder 1991 fractals; Reich et al. 2006 spatial analysis; Goldsberry 2012 CourtVision; Chang et al. 2014 Quantifying Shot Quality. NBA three-point line history: introduced, shortened in 1995 (mentioned in intro [PAGE 1]), Warriors 2014-16 [PAGE 1]. Multi-week traps: if league tests 30ft line, players adapt over weeks/months, discontinuity disappears; short-term remedy vs long-term solution. Lineage of expected points and court equity. The "rational agent" behavior: players bias outside line because equal difficulty, higher reward. This is a historical inefficiency exploited.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Coaches/players regress to habit of taking just-outside-3s when crisis (need points). Counter-trap: defense could exploit by guarding just outside line more, but since FG% identical, offense still prefers 3 points. Clock: end-of-game shot selection, 3-pointers more valuable late; the inefficiency interacts with game clock (not explicitly in paper but theoretical extension). Crisis habit regression: under pressure, teams revert to high-efficiency mid-range? Actually paper says mid-range has no bias (control case). So regression to mid-range under crisis would not exploit the 3-line inefficiency. Counter-trap: if offense keeps shooting just outside, defense may overcommit, creating open just-inside 2s, but equity math says they need 66% FG% inside to match outside 3s at same FG%. Since FG% identical, inside shots are worse value. Clock management: in final possessions, 3-point bias becomes more pronounced.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Indoor arena, controlled climate => weather veto not applicable (or negligible). Physical: court dimensions, 30ft line requires wider court [PAGE 7], backboard dimensions, rim height constant. Biomechanical: shooting from 30ft vs 23.9ft changes release angle, velocity, fatigue over 82-game season + playoffs (multi-week), but paper doesn't examine biomechanics. Veto proof: because data is from controlled indoor environment, weather cannot veto; physical court dimensions are fixed by league; biomechanical adaptation is plausible but unmodeled. Need to state exactly what can and cannot veto the recommendation.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Or some framework. I need 3 scenarios where the paper's recommendation (move line to 30ft or alter equity) is vetoed, with counterfactual predictions.
1. Player adaptation veto: If NBA moves line to 30ft, within N weeks shooters recalibrate, D2 returns toward theoretical, spatial bias re-emerges at new line. Prediction: no lasting equity gain; D2 reduction recurs at new boundary.
2. Court dimension veto: 30ft line requires court widening; if arena width cannot expand, corner threes remain at 22ft or geometry breaks, creating asymmetric equity; prediction: corner vs crest discrepancy worsens, theoretical dimensionality for corners [0.96,0.99] remains violated.
3. Statistical threshold veto: The only observed FG% discontinuity is at 30ft with p<0.1, failing the paper's own alpha=0.05 standard [PAGE 5]; thus no statistically significant break at 30ft under required confidence. Prediction: any line relocation based on this signal risks overfitting noise; observed 9% change may vanish with additional seasons.

These are verifiable: check p-values, measure D2 over time after rule change, measure court width.

Need to ensure total words >= 1000. Let's estimate. I'll write generously.

Also strict invariant: cite exact [PAGE N] markers and verbatim quotes when source pages provided. I should include some verbatim quotes with page citations.

Let's find exact quotes:
- [PAGE 1]: "Even though it might have taken some time, the three-point line ultimately changed the way the game is played as evidenced by the increase in the three-point shot attempts over the years."
- [PAGE 1]: "This marks a clear inefficiency of the game, since two shots with an apparent equal difficulty are rewarded differently!" (Actually that sentence is on page 1? Let's check: the abstract/intro flows. The sentence appears in the text block after Figure 1, still page 1? The marker "1/9" is after the intro paragraph. Wait: "NDSL 1/9" appears after the first paragraph? Let's re-read source text structure.

Source text structure:
- Header info, abstract.
- "## Introduction"
- Text... Figure 1...
- "NDSL 1/9" appears after "3PT Attempts per Game ... Figure 1. There is a stable increasing trend..." Actually looking at raw: after Figure 1 description, there is "NDSL 1/9". Then "3PT distance changes ..." Wait, let me parse carefully.

The raw text:
```
## Introduction

During last two-seasons... [text]
...
77948716/

NDSL

1/9

3PT distance changes

3PT Attempts per Game

...

Figure 1. There is a stable increasing trend...

However, simply comparing aggregate numbers cannot reveal...

## Materials And Methods

In this section we will briefly describe... [text]
...
NDSL

2/9

## 2. Data

... [text] ... Figure 2 ...

NDSL@Pitt

Figure 2. ...

NDSL

3/9

## Results

...
NDSL

4/9

...
Figure 5...
...
Equation (2)...
...
NDSL

5/9

## 3.2 Spatial Inefficiency
...
Table 1...
...
NDSL

6/9

## 3.3 Data-driven Recommendations
...
Figure 7...
...
NDSL

7/9

## Discussion
...
NDSL

8/9

## References
...
Supporting Information S1 Appendix...
...
NDSL

9/9
```

Hmm, the page markers seem offset. Let's map by the "NDSL N/9" markers:
- After the block ending with Figure 1 and before "3PT distance changes"? Actually "NDSL 1/9" appears before "3PT distance changes" text? The raw shows:

```
77948716/

NDSL

1/9

3PT distance changes

3PT Attempts per Game
```

So page 1/9 includes intro text up to Figure 1 maybe. Then page 2/9 appears after Methods description and before "## 2. Data"? Wait:

```
## Materials And Methods

In this section... [text]
...
Location X,

NDSL

2/9

## 2. Data

```

Actually the header says "## Materials And Methods" then later "## 2. Data". It seems page 2/9 covers Methods + start of Data. Then page 3/9 after Figure 2. Then page 4/9 after Figure 3/4 area. Then page 5/9 after Figure 5 and Equation 2. Then page 6/9 after Table 1 and Figure 6. Then page 7/9 after Figure 7. Then page 8/9 after Discussion. Then page 9/9 References + Appendix.

I will cite [PAGE 1] through [PAGE 9] based on these markers. I must be careful not to overstate exact page content if uncertain, but I can cite approximate. The user provided the text with markers, so I can reference them.

Let's draft.

THINK_TRACE (>400 words): I'll write about 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Include LaTeX, units, page citations. Around 250-300 words.

RETROCAUSAL_GENEALOGY: Around 200 words.

RECURSIVE_THEORY_OF_MIND: Around 200 words.

CROSS_LAYER_VETO_ADJUDICATION: Around 200 words.

RLVR_COUNTERFACTUAL_VETOES: Around 200 words.

Total likely >1400 words. Good.

Need to ensure no betting lines. I will not mention odds, spreads, etc.

Let's write carefully.

I need to include verbatim quotes. Example:
- Page 1: "two shots with an apparent equal difficulty are rewarded differently!"
- Page 2: tuple format includes "Shot Distance, Location X, Location Y, Shot Made Flag".
- Page 3: Equation (1) "C(r) ∝ r^{D_2}".
- Page 5: Equation (2).
- Page 6: Table 1 values.
- Page 7: "The only distance where there is a discontinuity (p-value < 0.1) in the field goal percentage is 30 feet."
- Page 9: control case baseline 51.4%.

I'll cite [PAGE N] after quotes and data points.

Let's compose.

Need to ensure LaTeX is formal. Use \boldsymbol{x} maybe? Keep simple.

Equation (1):
\[
C(r) \propto r^{D_2}, \qquad r_1 \le r \le r_2
\]
where \(C(r)\) is dimensionless fraction of point pairs within distance \(r\), \(r\) measured in feet from shot coordinates \((X,Y)\), \(D_2\) dimensionless correlation dimension.

Equation (2):
\[
E(x,y) = \operatorname{Fgp}(x,y)\cdot \left[2\cdot\bigl(1-\mathbb{1}_{3PT}(x,y)\bigr) + 3\cdot\mathbb{1}_{3PT}(x,y)\right]
\]
Units: expected points per attempt, dimensionless.

Equity equality condition:
\[
\operatorname{Fp}_{\mathrm{OUT}} = \frac{2}{3}\operatorname{Fp}_{\mathrm{IN}} \approx 0.66\,\operatorname{Fp}_{\mathrm{IN}}.
\]

Table 1:
\[
\begin{array}{c|c|c}
\text{Position} & D_2 & \text{Theoretical } D_2 \\
\hline
\text{Left Corner} & 0.67 & [0.96,0.99] \\
\text{Right Corner} & 0.70 & [0.97,0.99] \\
\text{Crest} & 1.17 & [1.74,1.87]
\end{array}
\]

Breakdown regimes:
- Finite shot-cloud: Equation (1) valid only \(r_1 \le r \le r_2\), not all scales [PAGE 3].
- Confidence: \(\alpha=0.05\) unless specified [PAGE 5].
- 30 ft discontinuity: \(p<0.1\), below \(\alpha=0.05\) threshold [PAGE 7], so not confirmatory under stated regime.
- 1-foot zones: narrow bands around 22 ft corners and 23.9 ft crest [PAGE 4].

Now write the sections.

I will not use markdown headings outside XML, just the XML sections as requested. The user said "across these exact XML sections". So output only those sections.

Let's draft content now.

---

THINK_TRACE:

Start: The source document reports an empirical discontinuity in NBA shot-chart behavior around the three-point line...

Derive multi-hop:
1. Data: NBA API shot charts 2014-15, 2015-16; tuple includes Shot Distance, Location X/Y, Shot Made Flag [PAGE 2].
2. Distance PDF shows local maxima near basket and ~24 ft; but two distances (22 ft corners, 23.9 ft crest) make raw distance ambiguous [PAGE 4].
3. Therefore authors define 1-foot bands just inside/outside line. Corner baseline 50%, crest baseline 52% due to arc geometry [PAGE 4].
4. Observed fraction of 3PT attempts in outer zone is 35-40% higher than baseline, statistically significant [PAGE 4].
5. FG% identical inside vs outside [PAGE 5].
6. Expected points: inside 2pt shot value = 2*Fgp_IN; outside 3pt = 3*Fgp_OUT. Since Fgp_IN ≈ Fgp_OUT, outside yields 1.5x expected points, i.e., 33% more points (actually 3/2 = 1.5, so 50% more expected points; the paper says "rewarded with 33% more points" which refers to 3 vs 2 being 50% more, but 3 is 33% greater than 2 relative to 3? Let's not correct paper, just cite).
7. Court equity E(x,y) defined [PAGE 5]. Equal equity requires Fp_OUT = 0.66 Fp_IN. Since actual Fp_OUT ≈ Fp_IN, inside zone is undervalued; court equity E(x,y) lower inside.
8. Fractal D2 measured: corners ~0.67-0.70 vs expected ~0.96-0.99; crest 1.17 vs expected 1.74-1.87 [PAGE 6]. Approx 30% reduction in dimensionality [PAGE 6].
9. Recommendation: line should be at statistically significant FG% discontinuity. Only candidate 30 ft, p<0.1, 9% change [PAGE 7], but p<0.1 fails own alpha=0.05 [PAGE 5].
10. Control case: 17 ft mid-range arc, baseline 51.4%, no bias, confidence intervals include baseline [PAGE 9], confirming bias is specific to three-point line geometry/reward structure, not generic arc effect.

Gray-zone audit: machine-converted text, equations/tables not preserved [PAGE 2 header note]; exact sample sizes per zone not reported; p-values for Figure 4 not numerically given, only "statistically significant"; Figure 7 uses p<0.1 (liberal) while paper states alpha=0.05; player adaptation could erase any new discontinuity; court widening required for 30 ft line [PAGE 7]; league objectives may not match constant equity [PAGE 8].

This is >400 words.

SOURCE_OPERATORS_AND_EQUATIONS: as above with citations.

RETROCAUSAL_GENEALOGY: Schroeder 1991 [PAGE 9 ref], Reich et al. 2006 [PAGE 9], Goldsberry 2012 [PAGE 9], Chang et al. 2014 [PAGE 9]. NBA line history: 1995 shortening [PAGE 1], Warriors era [PAGE 1]. Multi-week traps: adaptation timeline.

RECURSIVE_THEORY_OF_MIND: crisis habit regression, counter-trap, clock.

CROSS_LAYER_VETO_ADJUDICATION: indoor climate, court dimensions, biomechanics.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Let's write it out fully now, ensuring word count.

I will produce the final answer with the six XML tags in order.

Double check: no betting terms. Words like "odds" must be avoided. I will use "probability", "confidence", "p-value", "statistically significant". Avoid "moneyline", "spread", "total".

Also avoid "fake ratios". I can use the paper's 0.66 factor because it's derived from 2/3 expected points, not invented. I'll present it as derivation.

Let's ensure verbatim quotes with page markers.

Quote page 1: "two shots with an apparent equal difficulty are rewarded differently!"
Quote page 2: tuple format "<Game ID, Game Event ID, Player ID, Player Name, Team ID, Team Name, Period, Minutes Remaining, Seconds Remaining, Event Type, Action Type, Shot Type, Shot Zone, Shot Distance, Location X, Location Y, Shot Made Flag>".
Quote page 5: Equation (2).
Quote page 7: "The only distance where there is a discontinuity (p-value < 0.1) in the field goal percentage is 30 feet."
Quote page 9: baseline 51.4%.

Alright, composing final.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s causal chain begins with the data-generating process: NBA API shot charts for the 2014-15 and 2015-16 regular seasons, each record a tuple containing Shot Distance, Location X, Location Y, and Shot Made Flag [PAGE 2]. From this point cloud the authors first inspect the marginal distance density, which shows local maxima near the basket and near 24 feet, but raw distance is ambiguous because the corner three-point line is 22 feet while the crest is 23.9 feet [PAGE 4]. To resolve this, they define one-foot bands immediately inside and immediately outside the line. Under a null of no spatial bias, the expected share of attempts in the outer band is 50% for the straight-line corners and 52% for the curved crest, the latter reflecting the larger inner area of an annulus sector [PAGE 4].

The first hop of inference is that observed three-point attempt shares exceed these baselines by 35-40% in all locations and both seasons, with statistical significance reported at the alpha = 0.05 level unless otherwise specified [PAGE 4][PAGE 5]. The second hop is the field-goal-percentage comparison: Figure 5 shows no statistically significant difference between just-inside and just-outside percentages [PAGE 5]. Combining hops one and two yields the expected-points disparity captured in Equation (2): a two-point attempt just inside yields 2·Fgp_IN expected points, while a three-point attempt just outside yields 3·Fgp_OUT. Because Fgp_IN ≈ Fgp_OUT, the outside shot delivers roughly 1.5× the expected value of the inside shot; the paper phrases this as the inside shot being rewarded with 33% fewer points for equal difficulty, quoting “two shots with an apparent equal difficulty are rewarded differently!” [PAGE 1][PAGE 5].

The third hop translates this into spatial inefficiency via court equity E(x,y) and fractal correlation dimension D2. Equal equity requires Fp_OUT = 0.66·Fp_IN [PAGE 5]. Since the empirical condition is instead Fp_OUT ≈ Fp_IN, the inner zone is systematically undervalued, and players rationally migrate outward. Table 1 quantifies the resulting underuse of space: observed D2 is 0.67 (left corner), 0.70 (right corner), and 1.17 (crest), versus theoretical uniform-distribution bounds of [0.96,0.99], [0.97,0.99], and [1.74,1.87], respectively—an approximately 30% reduction in effective dimensionality [PAGE 6].

The fourth hop is the policy recommendation. The authors argue the three-point line should sit where field-goal percentage exhibits a statistically significant discontinuity. Scanning FG% by distance, the only candidate is 30 feet, where a 9% change is observed with p-value < 0.1 [PAGE 7]. This is a gray-zone failure: the paper’s own stated confidence level is alpha = 0.05 [PAGE 5], so p < 0.1 does not meet the regime it adopts elsewhere. Additional gray zones include the machine-converted source, which warns that equations, tables, and figures are not preserved [PAGE 2 header], the absence of per-zone sample sizes, the absence of exact p-values for Figure 4 beyond “statistically significant,” and the acknowledgment that players may adapt to any new line, erasing the discontinuity, and that court widening would be required for a 30-foot geometry [PAGE 7][PAGE 8]. A control case at the 17-foot mid-range arc shows baseline 51.4% and overlapping confidence intervals, confirming the bias is specific to the three-point reward structure rather than a generic arc artifact [PAGE 9].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and exact page citations.

Dataset operator: shot-chart point cloud S = {s_i} drawn from NBA API, seasons 2014-15 and 2015-16; each s_i = <Game ID, Game Event ID, Player ID, Player Name, Team ID, Team Name, Period, Minutes Remaining, Seconds Remaining, Event Type, Action Type, Shot Type, Shot Zone, Shot Distance, Location X, Location Y, Shot Made Flag> [PAGE 2]. Shot Distance and Location X/Y are in feet; Shot Made Flag is binary {0,1}.

Fractal correlation dimension operator: for cloud S and scale r, C(r) = fraction of unordered point pairs with Euclidean separation ≤ r. The scaling law is
\[
C(r) \propto r^{D_2}, \qquad r_1 \le r \le r_2
\tag{1}
\]
where C(r) is dimensionless, r is measured in feet from shot coordinates, and D2 is dimensionless. Breakdown regime: Equation (1) holds only over a finite scale range [r1, r2], not all r, because real shot sets are finite [PAGE 3]. Topological court dimension is 2; effective shooting dimension is reduced because locations are not exploited uniformly [PAGE 6].

Court-equity operator: for location (x,y),
\[
E(x,y) = \operatorname{Fgp}(x,y)\cdot\Bigl[2\cdot\bigl(1-\mathbb{1}_{3PT}(x,y)\bigr) + 3\cdot\mathbb{1}_{3PT}(x,y)\Bigr]
\tag{2}
\]
where E is expected points per attempt (dimensionless points), Fgp ∈ [0,1] is field-goal probability, and 𝟙_{3PT} is the three-point indicator. Equal equity between inside (IN) and outside (OUT) one-foot bands requires
\[
2\cdot \operatorname{Fp}_{\mathrm{IN}} = 3\cdot \operatorname{Fp}_{\mathrm{OUT}}
\quad\Longrightarrow\quad
\operatorname{Fp}_{\mathrm{OUT}} = \frac{2}{3}\operatorname{Fp}_{\mathrm{IN}} \approx 0.66\,\operatorname{Fp}_{\mathrm{IN}}.
\]
Empirically Fp_OUT ≈ Fp_IN [PAGE 5], violating equal equity.

Empirical table values [PAGE 6]:
\[
\begin{array}{c|c|c}
\text{Position} & D_2\ \text{(observed)} & D_2\ \text{(theoretical uniform)}\\
\hline
\text{Left Corner} & 0.67 & [0.96,\,0.99]\\
\text{Right Corner} & 0.70 & [0.97,\,0.99]\\
\text{Crest} & 1.17 & [1.74,\,1.87]
\end{array}
\]
Reported reduction: approximately 30% in dimensionality across corners and crest [PAGE 6].

Discontinuity scan: FG% vs. distance is smooth except at 30 feet, where a 9% change appears with p-value < 0.1 [PAGE 7]. This lies below the paper’s standard alpha = 0.05 threshold [PAGE 5], so it is not confirmatory under the stated regime. Control case: 17-foot mid-range arc, expected outer-zone fraction 51.4%, observed confidence intervals include baseline, so no spatial bias [PAGE 9].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage runs from geometric measure theory to basketball spatial analytics. The paper explicitly inherits the correlation-dimension formalism from Schroeder’s fractals text [PAGE 9], and it situates shot-chart analysis within Reich et al. (2006), Goldsberry’s CourtVision (2012), and Chang et al.’s shot-quality work (2014) [PAGE 9]. Historically, the NBA three-point line itself is a designed intervention: its introduction altered shot volumes, and the 1995 season produced a notable spike when the line was shortened [PAGE 1]. The 2014-16 Golden State Warriors volume is offered as the modern inflection point [PAGE 1].

The multi-week trap is adaptation. The authors acknowledge that moving the line to 30 feet would not permanently restore equity because players evolve and could adapt to the new distance, causing the discontinuity to decay over a season or playoff cycle [PAGE 7][PAGE 8]. This creates a retrocausal loop: the league observes an inefficiency at the current line, considers relocation, but the very act of relocating changes the incentive landscape such that the measured discontinuity at the old line ceases to predict behavior at the new line. The control case at 17 feet reinforces that the bias is not an innate property of arcs generally, but a consequence of the discontinuous 2-vs-3 reward at the specific current geometry [PAGE 9]. Any long-term fix must therefore account for the timescale of shooter recalibration, which the paper treats as an open problem rather than a solved parameter.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under pressure (close score, shot clock winding down, playoff elimination), offensive decision-makers regress to locally reinforced habits. The data show players already over-weight the outer one-foot band relative to the inner band because equal difficulty yields higher expected points [PAGE 4][PAGE 5]. In crisis states, this regresses further toward the three-point line because the marginal value of an extra point is highest when the score differential is small.

Counter-trap: the defense can exploit the offense’s rigid boundary bias by over-guard­ing the outer band, but since the field-goal percentages are statistically identical inside and outside [PAGE 5], the offense does not lose efficiency by remaining just outside; the defense cannot induce a percentage penalty for crossing inward. The counter-trap only bites if the offense irrationally retreats to mid-range, but the control case shows mid-range zones lack the spatial bias entirely, so there is no equilibrium incentive to regress there [PAGE 9].

Clock interaction: the paper does not model game clock explicitly, but the equity function E(x,y) is time-invariant. In end-of-game clock states, the expected-value gap between 2·Fp_IN and 3·Fp_OUT becomes more salient because each possession is rarer; thus the spatial bias should intensify under clock pressure rather than dissipate. The recursive theory predicts that late-game shot charts will exhibit an even steeper attempt-density cliff at the line than the season average, because the utility of the third point rises nonlinearly as remaining possessions fall.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: NBA games are played indoors under controlled climate, so weather (wind, humidity, temperature) is a null veto; it cannot invalidate the shot-chart statistics [PAGE 2][PAGE 7]. The binding physical constraint is court geometry: a 30-foot line would require court-dimension changes, especially width, so that corner threes remain geometrically consistent [PAGE 7]. Existing arenas have fixed footprints; widening is not trivially reversible and creates a hard physical veto unless new construction or neutral-site rules are adopted.

Biomechanical layer: moving the line from 23.9 feet (crest) or 22 feet (corner) to 30 feet alters release velocity, release angle, and shot arc over an 82-game season plus playoffs. The paper does not model biomechanical fatigue, joint loading, or shooting-form adaptation [PAGE 2][PAGE 7]. Thus a biomechanical veto is plausible but unquantified in the source: shooters may experience increased fatigue or altered shot mechanics at 30 feet, which could suppress three-point volume independently of equity considerations.

Verdict: the weather veto is void (indoor controlled environment). The physical court-dimension veto is active and enforceable absent league-wide arena modification. The biomechanical veto is latent: not modeled, not falsified by the paper, but sufficient to recommend development-league testing before full adoption, exactly as the Discussion proposes [PAGE 8].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-via-verifiable-rewards (RLVR) veto scenarios, each with a counterfactual prediction:

Veto 1 — Player adaptation veto. If the NBA relocates the three-point line to 30 feet, shooters will recalibrate release mechanics within one to two seasons. Prediction: the observed FG% discontinuity at 30 feet (9% change, p < 0.1 [PAGE 7]) will decay toward zero; the fractal D2 reduction (~30% [PAGE 6]) will re-emerge at the new boundary, so effective dimensionality returns to the biased regime and no lasting equity gain is achieved. Verification: measure post-rule-change D2 and attempt-density cliff at the new line over 24 months.

Veto 2 — Arena-geometry veto. If arena widths cannot be expanded to support a 30-foot crest line while retaining 22-foot corners, the corner/crest asymmetry is preserved or worsened. Prediction: theoretical dimensionality for corners remains [0.96, 0.99] while observed stays near 0.67–0.70 [PAGE 6], and the equity condition Fp_OUT = 0.66·Fp_IN [PAGE 5] remains violated selectively in corners, producing location-dependent expected-point distortion rather than uniform court equity. Verification: compare pre- and post-change corner-vs-crest D2 gaps and attempt fractions.

Veto 3 — Statistical-threshold veto. The paper’s own confidence standard is alpha = 0.05 [PAGE 5], yet the only detected FG% discontinuity is at 30 feet with p < 0.1 [PAGE 7]. Prediction: treating this as a genuine structural break is a Type-I error under the stated regime; adding one or two additional seasons will likely wash out the 9% change, and any line relocation based on it will overfit noise rather than a stable difficulty discontinuity. Verification: re-run the distance-scan with seasons 2016-17 and 2017-18 and test whether the 30-foot p-value remains below 0.05.
</RLVR_COUNTERFACTUAL_VETOES>