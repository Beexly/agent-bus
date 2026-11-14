---
source: "2015 - Who Is Responsible For A Called Strike - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2015"
pages: 12
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5690
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about pitch framing ("Who Is Responsible For A Called Strike?" by Joe Rosales and Scott Spratt, MIT Sloan 2015). I need to produce output with specific XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes from source.
- >= 1,000-word depth across sections.

Let me carefully extract data from the source text provided.

Source details:
- Paper: "Who Is Responsible For A Called Strike?" by Joe Rosales, Scott Spratt, Baseball Info Solutions.
- MIT Sloan Sports Analytics Conference Research Paper Competition 2015.
- Pages: 12 pages total (based on the text, page numbers 1-9 visible in text, but user says PAGES: 12).
- Data period: 2010-2013 (four years), rolling four-year basis.
- 2014 season results in Table 13.
- Methodology:
  - 7 contextual variables: Pitch Location, Batter Handedness, Pitcher Handedness, Ball/Strike Count, Pitch Type, Command, Home/Road.
  - Bucketing: Pitch Location ~1 inch x 1 inch grid.
  - Table 1: Count effects. 3-0: +5.6%, 0-1: -3.2%, etc.
  - Table 2: Command horizontal distance groups.
    - Group 1 (<3.8 inches): +2.8%
    - Group 2 (3.8-7.6): -0.3%
    - Group 3 (7.6-10.4): -2.9%
    - Group 4 (>10.4): -8.6%
  - Tables 3-6: Batter/Pitcher handedness, pitch type, home/road small effects.
  - Tables 7-8: Batter/Pitcher handedness by half plate.
  - Tables 9-11: After adjusting for location, count, command, batter handedness.
  - Basis: expected strike percentage P(strike | location, count, command, batter handedness).
  - Strike Zone Plus/Minus calculation:
    - If called strike: credit = +(1 - p)
    - If called ball: debit = -(p)
    - Example: p=0.43, strike called -> +0.57 SZPM points; ball called -> -0.43 points.
  - Iterative method:
    - Iteration 1: divide evenly among 4 parties.
    - Iteration 2: compute Plus/Minus Per Pitch for each player, subtract from pitch total to get neutral environment portion, distribute evenly, add individual contribution.
    - Repeat ~10 iterations until convergence.
    - Final regression: add 250 league average pitches to smooth small samples.
  - Run value: average difference in run expectancy between ball and strike = 0.1189 runs. Applied as final step.
  - Independence test: "with or without you" correlation.
    - Pitcher with specific catcher vs all other catchers: correlation 0.80 (>=100 pitches), 0.91 (>=500 pitches).
    - Catcher with specific pitcher vs all other catchers with that pitcher: correlation -0.04 (100), -0.03 (500).
    - Even division baseline: 0.19 for both.
  - Even/Odd Year Correlation Test (Table 12):
    - Pitchers: 0.46
    - Catchers: 0.86
    - Batters: 0.50
    - Umpires: 0.77
    - Sample: at least 500 called pitches in both sets (2010+2012 vs 2011+2013).
  - Results Table 13: 2014 Strike Zone Runs Saved leaders/trailers.
    - Top catchers: Zunino 16, Conger 16, Montero 15, Lucroy 14, Posey 11.
    - Bottom catchers: Ellis -7, Castillo -9, Suzuki -15, Saltalamacchia -16, Navarro -17.
    - Top umpires: Kulpa 12, Miller 12, Eddings 12, Hernandez 11, O'Nora 10.
    - Bottom umpires: Marquez -8, Gibson -8, Buckminster -9, Hallion -9, Schrieber -16.
  - Valuation: elite framing catchers worth ~16 runs by SZPM, vs ~24 runs by other systems. 16 runs ~ $11-12 million.
  - Sign conventions: positive good for catchers/pitchers; positive bad for batters (more strikes called); positive = pitcher-friendly umpire.

Now I need to structure the response.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Derive the expected strike probability conditioning.
- Derive the iterative update rule formally.
- Audit gray zones: sample size bucketing, rolling four-year basis, independence assumption, interaction effects, regression to 250 pitches, run value averaging across counts (no clutch framing), sign inversion for batters/umpires, command measurement (horizontal distance only after finding vertical less important), target setting data from 2010.
- Mention exact quotes and page numbers.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Define probability space: \mathcal{P} = (Location, Count, Command, BatterHandedness).
- Basis: \hat{p}_{l,c,k,b} = N_{strike}(l,c,k,b) / N_{total}(l,c,k,b).
- Units: probability (dimensionless, [0,1]).
- SZPM per pitch: if y=1 (strike), credit = 1 - \hat{p}; if y=0 (ball), credit = -\hat{p}. Units: extra strikes (dimensionless points).
- Iterative update: Let i index participants {catcher, pitcher, batter, umpire}. Let r^{(t)}_{p} be Plus/Minus Per Pitch. Neutral portion N = (1-\hat{p}) - \sum_i r^{(t)}_i (if strike) or (-\hat{p}) - \sum_i r^{(t)}_i (if ball). Then each gets r^{(t)}_i + N/4.
- Convergence criterion: ||r^{(t+1)} - r^{(t)}|| < \epsilon, ~10 iterations.
- Regression: SZRS_{final} = (SZPM_{raw} + 250 * 0) / (N_p + 250) * N_p * 0.1189? Actually need to be careful. They regress each player's Strike Zone Plus/Minus by adding 250 league average pitches. League average is 0 extra strikes per pitch. So regressed total = raw total / (1 + 250/N_p)? Wait, they said "regressing each player's Strike Zone Plus/Minus by a certain number of league average pitches. Based on our research, 250 is the optimal number..." So if raw SZPM total is S over N pitches, regressed = (S + 250*0) / (N + 250) * N? Or maybe they just add 250 pitches of average performance to the total count before computing rate? The text says "regressing each player's Strike Zone Plus/Minus by a certain number of league average pitches." Likely they shrink the rate toward zero: \tilde{r} = (S) / (N + 250). Then total runs = \tilde{r} * N * 0.1189? Or maybe SZRS = regressed rate * actual pitches * 0.1189. I should present this carefully, noting the ambiguity but formalizing a reasonable shrinkage estimator: \hat{r}_{shrink} = S / (N + \lambda), \lambda=250. Units: runs.
- Run value: \Delta RE = 0.1189 runs per converted ball/strike.
- Breakdown/singularity: bucket empty when N_{bucket} < threshold; command horizontal distance buckets; singularity at N_p=0 (regression saves); independence breakdown if pitcher-catcher battery fixed (correlation test addresses).
- Cite pages: Page 1 (Abstract), Page 2 (Tables 1-2), Page 3 (Tables 3-6), Page 3 (Tables 7-8), Page 4 (Tables 9-11), Page 4-5 (Calculation), Page 5 (Iteration), Page 6 (Run Value, Independence Test), Page 6-7 (Even/Odd), Page 7-8 (Results Table 13), Page 8 (Conclusion).
Wait, the text has page numbers embedded: "2", "3", "4", "5", "6", "7", "8", "9". I should cite these as [PAGE 2], etc. The user says source pages: 12. I will cite visible page numbers in the text.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Matthew Carruth's Catcher Report (StatCorner), Mike Fast's measurement (Baseball Prospectus 2011), Pavlidis & Brooks Regressed Probabilistic Model (2014).
- Moneyball/Oakland Athletics reference.
- Retrocausal framing: how past framing credit (2010-2013 basis) influences present (2014) valuation; rolling 4-year basis creates look-ahead/look-back coupling.
- Multi-week traps: small sample early season (regression to 250 pitches), umpire assignment non-random, pitcher-catcher battery persistence causing spurious correlation if not iterated.
- Multi-week: even/odd year correlation stability, catcher sample size advantage.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: when a catcher/pitcher is in a slump (negative SZPM), the iterative model regresses toward league average but preserves individual tendency; umpires with high volume stabilize faster.
- Counter-trap: batter sign inversion (positive SZRS bad for batter), umpire sign (positive pitcher-friendly); naive reading of Table 13 without sign convention is a trap.
- Clock: rolling four-year basis moving forward; convergence after ~10 iterations; even/odd year test is a temporal clock.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: pitch location grid ~1 inch x 1 inch; command horizontal distance buckets in inches (3.8, 7.6, 10.4). Biomechanical: pitcher command to target, catcher target setting.
- Weather: not mentioned in source; no weather variable among 7. Veto: cannot claim weather effects from this paper.
- Home/Road effect small (+0.2%/-0.2%) after adjustments, so park/weather confounds minimal but not eliminated.
- Veto proof: any model claiming vertical command matters is vetoed by Table 2 finding (horizontal mattered more than vertical). Any model ignoring batter handedness by plate half is vetoed by Tables 7-8.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
Need 3 verifiable counterfactual veto scenarios. These should be testable predictions that could veto the model if false.
1. If a pitcher with consistent high SZPM is paired with a new catcher, his SZPM should remain high (independence). Prediction: correlation >=0.80 for >=100 pitches. Veto if correlation drops to near 0 (like naive even split 0.19).
2. If a batter's SZRS is positive, it means more strikes called while batting (bad for batter). Prediction: batters with positive SZRS should have lower wOBA or higher strikeout rates conditional on pitch location/count, controlling for quality. Veto if positive SZRS batters show no disadvantage or better outcomes.
3. If the rolling 4-year basis drifts, umpire correlations should persist year-to-year. Prediction: even/odd year umpire correlation >=0.77. Veto if umpire consistency collapses (<0.3) suggesting call randomness rather than umpire tendency.
Alternatively:
- Command bucket boundary at 3.8 inches: pitches just below vs just above should show discontinuous jump in strike probability from +2.8% to -0.3%. Veto if smooth gradient without bucket effect.
- Batter handedness by half plate: RHB on left half should get +1.7% vs LHB on left half -4.0%. Veto if the difference disappears when controlling for location/count.
I'll write 3 clear scenarios with predictions and veto conditions.

Need to ensure no betting lines. No spreads/totals/moneylines/odds. I can mention probabilities but not betting odds.

Need >=1000 words total. I'll aim for substantial each section.

Let's draft carefully.

Word count estimate:
- THINK_TRACE: ~400-500 words.
- SOURCE_OPERATORS: ~300-400 words.
- RETROCAUSAL: ~200-300 words.
- RECURSIVE: ~200-300 words.
- CROSS_LAYER: ~200 words.
- RLVR: ~200 words.
Total ~1500+. Good.

Need to include verbatim quotes and [PAGE N] markers.

Quotes I can use:
- Page 1: "We call our system Strike Zone Plus/Minus"
- Page 2: "Pitches closest to the glove were called strikes 2.8 percent more often than average, while pitches farthest from the glove were called strikes 8.6 percent less often than average."
- Page 2: "The two variables that showed the most significant variation were Count and Command."
- Page 4: "For example, if a pitch is thrown ... we estimate there to be a 43 percent chance that the pitch will be called a strike. Therefore, if the umpire calls the pitch a strike, then there are plus-0.57 Strike Zone Plus/Minus points..."
- Page 5: "Normally, this takes about 10 iterations."
- Page 6: "The average difference in run expectancy between a ball and a strike amounts to .1189 runs"
- Page 6: correlation 0.80 and 0.91.
- Page 6: Table 12 correlations.
- Page 8: "Sixteen runs is worth about $11-12 million in the current market." (No betting lines, just market valuation mention; okay since it's not a betting line, it's player valuation. But to be safe, avoid framing as betting. It's fine as market value.)

Wait, invariant 1: ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. The "$11-12 million" is free agent market valuation, not a betting line. It's fine. I should not convert runs to win probability or betting odds.

Now formal LaTeX. I must not invent fake ratios. I'll use real derived quantities from the paper.

Equations:
1. Basis probability: \hat{\pi}_{g} = \frac{n_{g,\text{strike}}}{n_{g}} for bucket g = (\ell, c, k, h).
2. SZPM credit: \phi_p(y, \hat{\pi}_g) = \begin{cases} 1 - \hat{\pi}_g & y=\text{strike} \\ -\hat{\pi}_g & y=\text{ball} \end{cases}
3. Iterative update: Let participants \mathcal{A}=\{C,Pt,Bt,U\}. Let \bar{r}^{(t)}_a = S^{(t)}_a / N_a. Neutral residual \eta_p = \phi_p - \sum_{a\in\mathcal{A}} \bar{r}^{(t)}_a. New assignment: \Delta^{(t+1)}_{p,a} = \bar{r}^{(t)}_a + \eta_p / 4.
4. Convergence: \max_a |S^{(t+1)}_a - S^{(t)}_a| < \epsilon. ~10 iterations.
5. Shrinkage: \tilde{r}_a = S_a / (N_a + \lambda), \lambda=250 league-average pitches. SZRS_a = \tilde{r}_a \cdot N_a \cdot 0.1189? Actually, I need to be careful: They regress the total by adding league average pitches. If they add 250 average pitches (value 0), the new rate is S/(N+250). Then total runs saved = rate * N? Or maybe rate * (N+250)? The text says "regressing each player's Strike Zone Plus/Minus by a certain number of league average pitches." Common approach: shrink estimate toward mean: \hat{\theta} = (S + \lambda \theta_0)/(N+\lambda). With \theta_0=0. Then SZRS = \hat{\theta} * N * 0.1189? Or maybe SZRS = \hat{\theta} * (N+\lambda) * 0.1189? I'll formalize as \text{SZRS}_a = \frac{S_a}{N_a + 250} \cdot N_a \cdot 0.1189 and note this is one coherent shrinkage reading; alternatively the league-average pitches may be added to the denominator only. I will flag the operational ambiguity as a gray zone. Good.

Singularity/breakdown: N_a = 0 -> undefined; shrinkage fixes N_a small. Empty buckets g with n_g=0 -> cannot estimate \hat{\pi}_g; need smoothing or coarser grid. Independence breakdown when battery (pitcher-catcher) is fixed and N_{pair} small -> correlation test mitigates.

Units: \hat{\pi} dimensionless [0,1]. \phi in "extra strikes" (dimensionless points). SZRS in runs. \Delta RE = 0.1189 runs/pitch conversion. Command distance in inches.

Page citations: I need to map page numbers to content. The text shows page numbers 2 through 9. Page 1 is abstract/intro start but not numbered in snippet? It starts with title then abstract. The first visible page number is "2" after Table 2. So I'll cite [PAGE 1] for abstract/intro (implicitly first page), [PAGE 2] for tables 1-2 and count/command, [PAGE 3] for tables 3-8, [PAGE 4] for tables 9-11 and calculation start, [PAGE 5] for iteration and regression, [PAGE 6] for run value and independence test, [PAGE 7] for even/odd and results, [PAGE 8] for conclusion and table 13 discussion? Wait Table 13 is on page 7? The text shows Table 13 then page 7 text. Then conclusion on page 8. Let's check:
- After Table 11, text says "3" then Table 9, 10, 11. Then "4" page header? Actually the text flow:
"...Therefore, we are confident..." then page break "3"? Let's look:
After Table 6, text continues to page 3? The snippet shows:
"3 
**Table 9: ...**"
So page 3 contains Tables 9-11? Wait, before that:
Page 2 had Tables 1-2 and text about count/command. Then Tables 3-6. Then text about half plate. Then Tables 7-8. Then text about next significant variable. Then page break "3" then Tables 9-11.
Then "Therefore, we are confident..." then page break? Actually after Table 11, text says "Therefore, we are confident..." and then next section "The Basis..." Then page break "4"? Let's trace:
The text after Table 11: "Therefore, we are confident that we are adjusting for all of the most significant variables." Then section "The Basis for Determining..." Then "### Calculating Strike Zone Plus/Minus". Then example. Then page break "4"? Let's see: "4" appears before "are constrained by the idea...". So page 4 has the iterative method start and critique of other methodologies.
Then page 5 has iteration details and "Normally, this takes about 10 iterations." and regression.
Then page 6 has Run Value and Independence Test.
Then page 7 has Even/Odd Year Correlation Test? Wait, after Independence Test text: "Just to drive the point home..." then page break "6"? Actually the text shows "6" before "Just to drive the point home..."? Let's check:
The text: "...we used the numbers that one would get if the Plus/Minus credit for each pitch were simply divided evenly between each player. With the threshold set to 100 pitches, both the correlation... came out to 0.19. As we expected... Therefore, we know that we have significantly improved..."
Then page break "6"? Actually I see "6" then "Even/Odd Year Correlation Test". Wait, looking at the raw text:
"...0.19. As we expected, the pitchers’ correlation is much stronger than this after our iterative adjustments, and the catchers’ correlation is much weaker. Therefore, we know that we have significantly improved the accuracy of our measurement by using our iterative approach.
6 
### Even/Odd Year Correlation Test..."
So page 6 starts with Even/Odd Year test? But earlier page 6 had Independence Test? Let's check earlier:
"...we performed a couple of variations on a 'with or without you' correlation test..."
This is on page 6? The text shows:
"...called strikes."
Then "6"? No, looking at raw:
"...The first part of our test has us confident..."
Then page break? Actually raw text:
"...relationship continues to strengthen. Therefore, the first part of our test has us confident that our system is truly measuring the performance of each player independently.
For the second part of our test..."
Then later:
"...0.19. As we expected... Therefore, we know that we have significantly improved the accuracy of our measurement by using our iterative approach.
6 
### Even/Odd Year Correlation Test"
So page 5 ended with regression? Let's look:
"### **Run Value**
In order to state each player's impact..."
Then "The average difference in run expectancy between a ball and a strike amounts to .1189 runs..."
Then "### **Independence Test**"
...
Then page break "6"? Actually I see "6" before Even/Odd. Hmm.
Wait the raw text:
"...the average difference in run expectancy between a ball and a strike amounts to .1189 runs, which we will apply as the final step.
### **Independence Test**
...
we performed a couple of variations...
...
Therefore, the first part of our test has us confident...
For the second part of our test...
...
0.19. As we expected... Therefore, we know that we have significantly improved the accuracy of our measurement by using our iterative approach.
6 
### Even/Odd Year Correlation Test"
So page 5 contained Run Value and Independence Test? Then page 6 starts with Even/Odd Year Correlation Test? But Table 12 is on page 7? Let's check:
After Table 12: "The even/odd year correlation for catchers is extremely high..." then page break "7" then Results.
Actually raw text:
"Table 12 below shows the correlation for each of the four types of participants.
**Table 12: ...**
...
Overall, these results demonstrate that Strike Zone Plus/Minus is doing an excellent job of measuring a meaningful skill.
## **Results**
Applying our run value...
**Table 13: ...**
...
7
An important point to note..."
So page 7 contains Table 13 and sign convention discussion. Page 8 continues results discussion and conclusion? Actually after Table 13 text: "An important point to note..." then page break "8"? Let's check:
"...batter's case, most don't even give him a thought..." No that's earlier.
After Table 13 text about sign convention: "These results show why quantifying pitch framing for catchers is so much more important..." then page break? Then Conclusion section. The text shows "8" before Conclusion? Let's check raw:
"...fortunes of a team.
## **Conclusion**
Expanded use of instant replay..."
Wait, where is page 8? The raw shows:
"...These results show why quantifying pitch framing for catchers is so much more important than for anyone else. On a per pitch basis, catchers, pitchers, batters, and umpires all fall within the same range in terms of how much impact they have on getting extra strikes called. However, on aggregate, catchers are involved in so many more pitches than either pitchers or batters that their skills actually have a far more meaningful impact on the overall fortunes of a team.
## **Conclusion**"
Then conclusion text. Then "8" appears before References? Let's see:
"Sixteen runs is worth about $11-12 million in the current market... References ... 9". So page 9 is references. Page 8 must contain conclusion and part of results discussion? Actually raw text:
"...free agent market.
We have seen some evidence...
...
8
## References"
Hmm. Let's map conservatively:
- [PAGE 1]: Abstract, Intro.
- [PAGE 2]: Tables 1-2, count/command significance.
- [PAGE 3]: Tables 3-8, batter/pitcher handedness half plate.
- [PAGE 4]: Tables 9-11, basis determination, calculation start.
- [PAGE 5]: Iterative calculation detail, convergence ~10 iterations, regression 250 pitches.
- [PAGE 6]: Run value .1189, Independence Test correlations 0.80/0.91, -0.04/-0.03, naive 0.19.
- [PAGE 7]: Even/Odd Year Table 12, Results Table 13, sign conventions.
- [PAGE 8]: Conclusion, market valuation $11-12M, Molina/Conger examples.
- [PAGE 9]: References.

But user says pages: 12. There may be 12 pages but text extraction shows up to 9. I'll cite up to [PAGE 9] and maybe [PAGE 12] doesn't exist in text. I will not cite pages not visible. I can say [PAGE 1] through [PAGE 9] based on visible numbering. To be safe, I'll cite [PAGE N] where N corresponds to visible page numbers in the source text.

Now write the response. Need XML sections exactly as specified. No markdown outside? I'll just output the XML sections with content inside.

Need to ensure >=1000 words across sections. Let's count roughly as I write.

I will avoid any mention of betting odds/spreads/totals/moneylines. I will mention probabilities but not as betting odds.

Let's draft.

THINK_TRACE:
- Start with derivation of expected strike probability.
- Gray-zone audit: bucket sparsity, rolling basis, command vertical vs horizontal, sign inversion, regression constant, run value averaging across counts (no clutch), independence assumption and battery overlap, sample size thresholds.
- Use >400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
- LaTeX equations.
- Units.
- Page citations.
- Breakdown of tables.
- Singularity/breakdown regimes.

RETROCAUSAL_GENEALOGY:
- Carruth, Fast, Pavlidis & Brooks.
- Rolling 4-year basis as retrocausal coupling (2010-2013 informs 2014).
- Multi-week traps: small sample early season, battery persistence, umpire assignment.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression (shrinkage).
- Counter-trap (sign inversion for batters/umpires).
- Clock (rolling basis, 10 iterations, even/odd year).

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: location grid inches, command buckets inches.
- Biomechanical: target setting, command.
- Weather: absent; home/road tiny effect.
- Vetoes: vertical command, ignoring handedness/plate half.

RLVR_COUNTERFACTUAL_VETOES:
- 3 scenarios with predictions and veto conditions.

Let's write carefully with citations.

I need to ensure formal LaTeX is correct. I'll use inline math.

Let's begin.

Word count check: I'll write generously.

One thing: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I must include [PAGE N] and quotes. I'll include several.

Let's draft each section.

THINK_TRACE:
"Deep multi-hop derivation..." 400+ words.

I'll write it now.

Make sure to not use markdown code blocks unless inside XML? It's fine.

Let's go.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation begins with the conditioning set for the expected strike probability. The authors define seven contextual variables—Pitch Location, Batter Handedness, Pitcher Handedness, Ball/Strike Count, Pitch Type, Command, Home/Road [PAGE 2]—and sequentially bucket pitches to isolate the marginal contribution of each active participant. The first hop is spatial: pitches are binned on a grid approximately one inch by one inch by Pitch Location, which establishes the geometric prior for the strike zone. The second hop conditions on Count: Table 1 shows that a 3-0 count is +5.6 percent relative to average strike probability while an 0-1 count is −3.2 percent [PAGE 2], demonstrating that count is a first-order modifier of the umpire’s conditional strike tendency. The third hop conditions on Command, operationalized as horizontal distance from the catcher’s target; Table 2 shows pitches within 3.8 inches of the glove are +2.8 percent, while pitches beyond 10.4 inches are −8.6 percent [PAGE 2]. The authors explicitly reject vertical distance as a primary command variable because horizontal distance mattered more [PAGE 2]. The fourth hop adds Batter Handedness, but only after discovering that aggregate handedness effects were masked by plate-side cancellation: Table 7 reveals RHB on the left half of the plate (pitcher’s POV) yields +1.7 percent while LHB on the same half yields −4.0 percent [PAGE 3]. After these four conditioners—location, count, command, batter handedness—the authors stop because bucket sizes approach the minimum viable sample given four years of data [PAGE 4].

Gray-zone audit. (1) Bucket singularity: as the grid refines to ~1 inch × 1 inch crossed with count, command bands, and batter handedness, many cells contain zero or few pitches; the paper does not state a minimum n_g for a valid basis cell, creating an underspecified breakdown regime at low n_g. (2) Rolling four-year basis: the strike percentages are always reflective of pitch results going back exactly four years [PAGE 4], which introduces a retrocausal coupling where 2010–2013 data sets the prior for 2014 evaluations, but no decay function is specified for obsolescence within the window. (3) Command measurement error: command is derived from catcher target setting beginning in 2010; if target location is misrecorded, the horizontal distance bins in Table 2 inherit systematic bias. (4) Run-value averaging: the authors average run expectancy differences across all counts into 0.1189 runs because they found no evidence of “clutch framing” [PAGE 6], but this erases count-dependent leverage (e.g., converting a 3-2 ball to a strike has different run consequences than a 0-0 conversion) and assumes linearity of the value function across counts. (5) Regression shrinkage: adding 250 league-average pitches to each player’s total [PAGE 5] stabilizes small samples but the exact shrinkage formula (whether 250 enters the denominator only or also contributes zero-value numerator mass) is not algebraically specified, leaving ambiguity in the final SZRS scaling. (6) Independence: the “with or without you” test confirms pitcher performance is stable across catchers (r=0.80 at 100 pitches, r=0.91 at 500) while catcher performance across pitchers is uncorrelated (r=−0.04, −0.03) [PAGE 6], yet pitcher–catcher battery persistence remains a confound for pairs below the pitch thresholds. These gray zones define the exact singularity and breakdown regimes where Strike Zone Plus/Minus should not be naively extrapolated.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let a pitch be indexed by p and let its conditioning bucket be g=(ell,c,k,h), where ell is the ~1 inch × 1 inch location bin, c is the ball–strike count, k is the horizontal command band from Table 2, and h is batter handedness possibly interacted with plate half [PAGE 2–4]. The basis strike probability is
\hat{\pi}_g = \frac{n_{g,\text{called strike}}}{n_g},
dimensionless, in [0,1], estimated from 2010–2013 data [PAGE 4].

For realized call y_p\in\{0,1\} (0=ball, 1=strike), the Strike Zone Plus/Minus credit for the pitch is
\phi_p = \begin{cases}
1-\hat{\pi}_g, & y_p=1 \text{ (called strike)},\\
-\hat{\pi}_g, & y_p=0 \text{ (called ball)}.
\end{cases}
Units: “extra strikes,” dimensionless points. Example from text: \hat{\pi}_g=0.43 implies +0.57 points if called a strike and −0.43 points if called a ball [PAGE 4].

Iterative credit division over participants \mathcal A=\{C,\text{pitcher},\text{batter},\text{umpire}\}. Let r^{(t)}_a = S^{(t)}_a/N_a be participant a’s Plus/Minus Per Pitch after iteration t. The neutral residual for pitch p is
\eta_p^{(t)} = \phi_p - \sum_{a\in\mathcal A} r^{(t)}_a,
and the updated assignment is
\Delta^{(t+1)}_{p,a} = r^{(t)}_a + \frac{\eta_p^{(t)}}{4}.
Convergence is declared when \max_a |S^{(t+1)}_a - S^{(t)}_a|<\epsilon, normally after about 10 iterations [PAGE 5].

Final shrinkage: \tilde r_a = S_a/(N_a+250), where 250 league-average pitches (zero value) are added [PAGE 5]. Runs saved: \mathrm{SZRS}_a = \tilde r_a \cdot N_a \cdot 0.1189, where 0.1189 runs is the average run-expectancy difference between a ball and a strike [PAGE 6]. Units: runs.

Breakdown/singularity regimes: n_g=0 makes \hat\pi_g undefined; N_a=0 makes r_a undefined (shrinkage partially regularizes N_a small but not zero); bucket coarsening is required when 1 inch × 1 inch location cells are empty. Independence breaks down for fixed pitcher–catcher batteries below the 100/500-pitch thresholds, where the naive even-split correlation collapses to 0.19 for both parties [PAGE 6].

Table 12 even/odd-year correlations (2010+2012 vs 2011+2013, minimum 500 called pitches per set): Pitchers 0.46, Catchers 0.86, Batters 0.50, Umpires 0.77 [PAGE 7]. Table 13 2014 Strike Zone Runs Saved: top catchers M. Zunino 16, H. Conger 16; bottom catchers D. Navarro −17, J. Saltalamacchia −16; top umpires R. Kulpa 12, B. Miller 12; bottom umpire P. Schrieber −16 [PAGE 7]. Sign convention: positive is good for catchers/pitchers, bad for batters (more strikes called), and pitcher-friendly for umpires [PAGE 7].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage sits in the public pitch-framing tradition of Matthew Carruth’s Catcher Report (StatCorner), Mike Fast’s catcher-extra-strikes measurement at Baseball Prospectus (2011), and Harry Pavlidis and Dan Brooks’s Regressed Probabilistic Model (2014) [PAGE 1]. The retrocausal feature is the rolling four-year basis: 2010–2013 called-pitch data are used to construct the expected-strike basis that then values 2014 performance [PAGE 4]. This creates a look-back window whose trailing edge continuously reweights present credit; a catcher’s 2014 SZRS is partly a function of umpire calling standards and batter behavior from up to four years prior, meaning the metric is not contemporaneously isolated.

Multi-week traps embedded in the design. First, early-season small samples: a catcher with few called pitches in April is heavily regressed by the 250-pitch league-average shrinkage [PAGE 5], so week-to-week SZRS swings are dampened but not eliminated, creating a false-stability trap for analysts who overread small-n movement. Second, battery persistence: if a pitcher throws most of his pitches to one catcher, naive models attribute shared credit to both [PAGE 6]; the iterative method addresses this, but only above the pitch thresholds, so platoon or injury-driven battery changes mid-season can still leak credit across participants for several weeks until iterations reconverge. Third, umpire assignment is not random across home/road or opponent quality; although Home/Road shows only +0.2%/−0.2% after adjustment [PAGE 4], umpire–team scheduling correlations over a multi-week stretch can masquerade as catcher framing skill if the basis does not fully absorb umpire-specific count tendencies. Fourth, the even/odd-year test (Table 12) is a multi-week consistency probe: catchers (r=0.86) and umpires (r=0.77) show high year-over-year stability because of pitch volume, while pitchers (r=0.46) and batters (r=0.50) are noisier [PAGE 7]. A trap is to treat a single 2014 table leader (e.g., Zunino at 16 runs [PAGE 7]) as a stable talent estimate without checking even/odd persistence or battery overlap.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression is the shrinkage operator itself: when a participant’s raw SZPM is extreme but N_a is small, the model regresses toward the league-average pitch (zero value) by adding 250 league-average pitches [PAGE 5]. This is a recursive habit correction—after a bad stretch (negative SZPM), the next iteration pulls the estimate back toward zero rather than allowing the crisis to compound. The counter-trap is sign inversion: Table 13’s positive batter values are undesirable because they mean more strikes were called while that batter was at the plate, and positive umpire values mean pitcher-friendly strike zones [PAGE 7]. A recursive theory-of-mind failure occurs when an analyst reads the table without flipping the batter sign, concluding that Me. Cabrera (+3) is a “good” framing batter when the model defines that as a disadvantage [PAGE 7]. The clock is dual: convergence requires roughly 10 iterations [PAGE 5], and the rolling four-year basis retires the oldest year as each new day arrives [PAGE 4]. Thus the model’s internal clock ticks at the pitch level (iteration convergence) and at the calendar level (basis refresh). A participant who improves mid-season will see their SZPM lag true ability until enough new pitches overwrite the regressed prior, while a declining participant benefits from the same lag. The even/odd-year correlation table functions as a second clock: if catchers’ r=0.86 decays in subsequent seasons, the stationarity assumption behind the four-year basis fails, and the metric’s crisis-regression becomes maladaptive.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: pitch location is gridded at approximately one inch by one inch [PAGE 2], and command is measured in horizontal inches from the catcher’s target with bands at <3.8, 3.8–7.6, 7.6–10.4, and >10.4 inches [PAGE 2]. Biomechanical layer: the catcher sets a pre-pitch target (charted since 2010) and the pitcher’s command is the miss distance from that target [PAGE 2]; the authors found horizontal miss matters more than vertical miss for expected strike percentage [PAGE 2]. Weather layer: no weather variable is among the seven investigated variables [PAGE 2]; Home/Road shows only +0.2% home / −0.2% road after full adjustment [PAGE 4], so park/weather confounds are statistically small but not proven absent.

Veto proofs. (1) Any model claiming vertical command distance is a primary predictor is vetoed by Table 2: the authors explicitly state horizontal distance mattered more than vertical [PAGE 2]. (2) Any model aggregating batter handedness across the whole plate is vetoed by Tables 7–8: aggregate batter handedness is only +0.1%/−0.1% [PAGE 3], but split by plate half it ranges from −4.0% to +2.0% [PAGE 3], showing cancellation masks a real interaction. (3) Any model treating umpire, pitcher, and batter as mere context for catcher framing is vetoed by the independence tests: pitcher consistency across catchers is r=0.80–0.91 while catcher consistency across pitchers is r≈0 [PAGE 6], and the naive even-split baseline yields only r=0.19 for both [PAGE 6]. (4) Weather cannot be invoked to explain home/road residuals because the paper does not measure temperature, humidity, or wind; the home/road variable is a proxy at best and its effect is minimal after adjustment [PAGE 4].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Pitcher–catcher independence under battery change. Verifiable setup: take a pitcher with SZPM>0 who switches primary catchers mid-season. Prediction: his Plus/Minus Per Pitch with the new catcher should correlate at r≥0.80 with his historical performance with all other catchers (minimum 100 pitches in each sample), mirroring the Stults/Hundley-style test [PAGE 6]. Veto condition: if the correlation falls to the naive even-split baseline of r≈0.19 [PAGE 6], the iterative model has failed to separate pitcher skill from catcher credit, and pitcher SZRS is not independently measured.

Scenario 2 — Batter sign convention and outcomes. Verifiable setup: compare batters with positive 2014 SZRS (more strikes called while batting, e.g., Me. Cabrera +3) against batters with negative SZRS (fewer strikes called, e.g., D. Pedroia −4) [PAGE 7], controlling for pitch location, count, and batter quality. Prediction: positive-SZRS batters should exhibit worse count outcomes (lower walk rate, higher strikeout rate conditional on observed location) because positive SZRS is defined as unfavorable for batters [PAGE 7]. Veto condition: if positive-SZRS batters show no disadvantage or better outcomes than negative-SZRS batters after controls, the batter sign convention or the batter-effect estimation is inverted or invalid.

Scenario 3 — Umpire temporal stability and basis drift. Verifiable setup: recompute umpire even/odd-year correlations on a later split (e.g., 2012+2014 vs 2013+2015) using the same rolling four-year basis logic [PAGE 4, PAGE 7]. Prediction: umpire correlation should remain high, r≥0.77, because umpires accumulate many pitches and their personal standards are stable [PAGE 7]. Veto condition: if umpire correlation collapses below r≈0.30, the strike zone is not a stable umpire-specific parameter and the four-year basis is capturing random year-to-year calling noise rather than a durable tendency, invalidating the umpire component of SZRS.
</RLVR_COUNTERFACTUAL_VETOES>