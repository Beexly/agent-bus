---
source: "2018 High Resolution Shot Capture - Systematic Biases.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 17
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 7394
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about basketball shot capture and systematic biases. I need to produce a response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios. Formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Let me carefully read the source text and plan each section.

Source: "2018 High Resolution Shot Capture - Systematic Biases.md" - Rachel Marty, UCSD. 17 pages (though the text provided seems to cover pages 1-10 or so based on the page numbers visible).

Key facts from source:
- 22 million shots captured by Noahlytics
- 5,649 individuals (NBA, WNBA, NCAA, high-school, etc.)
- Sensor hangs ~13 feet above basket
- Three attributes: Left-Right (inches, -9 to +9), Depth (inches, 0 front to 18 back), Angle (degrees, 36° flat to 55° arcing)
- Page 1: Abstract, Introduction
- Page 2: Section 1 continued
- Page 3: Section 2 Systematic Biases, Figure 2
- Page 4: Section 2.1 Left-Right biases corner 3-point. Right corner: 2.34 inches left of center. Left corner: 1.05 inches right. NBA player LR std dev ~4 inches from corner. Right corner sacrifice up to 4% shooting percentage, left corner up to 2%.
- Page 5: Section 2.2 Depth biases. 3-pointers shot 2 inches short of GMZ center. Shorter shots go deeper, longer shots go shorter. Mid-range ~11 inch Depth, long 2-point ~10 inch, 3-point ~9 inch Depth. 15-18 feet: mean Depth 10.1 inches, GMZ center 11.5 inches. 27-30 feet: mean Depth 7.8 inches, GMZ center 10.5 inches. Typical NBA 3-point 24-27 feet: ~1.5% decrease. Long 3-point 27-30 feet: 2.9% decrease.
- Page 6: Section 3 Ranking players. 18-22 feet shots. Players A (27,636 shots, 50%), B (25,031 shots, 58%), C (10,524 shots, 75%). Over 10 months. Sessions of 25, 100, 500 shots. Over 1,000 shots necessary to rank reliably.
- Page 7: Spatial rim pattern = 9 features: mean of each attribute (LR, Depth, Angle), std dev of each, spearman correlation between each pair. That's 3 means + 3 std devs + 3 correlations = 9. Plus raw percentage = 10 dimensions. Gradient Boosting Regression. Training set 2/3 players, test set 1/3. Down-sampled.
- Page 8: Model has half MSE of raw shooting percentage. Spearman rank increased correlation. Bias: predicts poor players upward, great players downward due to limited training range (30-90%).
- Page 9: Discussion. Conclusion.
- Page 10: Appendix Section 1: movement correlation. Excluded sessions with average movement > 2 feet. Appendix Section 2: training percentages between 30% and 90%, so model only predicts between those values.

I need to be careful with page citations. The text has page numbers visible: "2018 Research Papers Competition Presented by: 1", "2", "3", "4", "5", "6", "7", "8", "9", "10". The user says PAGES: 17 but only provided text up to page 10 essentially. I should cite [PAGE N] where N corresponds to the visible page numbers in the text.

Let me map content to pages:
- Page 1: Title, abstract, 1.1 Motivation (part), Data collection maybe? Actually page 1 ends with "...expose systematic miss patterns in the population." Wait, looking at text:
  - Page 1 marker appears after abstract/intro start? Let's trace:
  - Text starts with title/abstract.
  - Then "2018 Research Papers Competition Presented by: 1" appears after "...systematic miss patterns in" — wait no, looking carefully:
  - The text shows "2018 Research Papers Competition Presented by: 1" after the first paragraph of 1.1? Actually:
    - Title/abstract
    - 1. Introduction
    - 1.1 Motivation ... "reveals systematic miss patterns in" then page break "1"
  - Page 2 marker appears after Figure 1? Let's see: "2018 Research Papers Competition Presented by: 2" appears after Figure 1 caption.
  - Page 3 marker appears after Figure 2 caption? "2018 Research Papers Competition Presented by: 3" appears after Figure 2 caption text.
  - Page 4 marker appears after Section 2.2 text? "2018 Research Papers Competition Presented by: 4" appears after Figure 3 caption.
  - Page 5 marker appears after Section 3.1 text about Player A/B/C? "2018 Research Papers Competition Presented by: 5" appears after "...individuals." wait no.
  
Let me re-read carefully to map page breaks:

The text contains markers like:
"2018 
Research 
Papers 
Competition Presented 
by: 

1"
This appears after "...systematic miss patterns in" — actually looking at raw:
"...to expose systematic miss patterns in" then [PAGE 1]? No, the marker is:
"the population. Through unsupervised learning..." then later "2018 Research Papers Competition Presented by: 1". Actually it's placed after the first column? Let's look at the raw text flow:

After abstract and 1.1 Motivation paragraph 1-3, then "This paper is built upon..." then "We foresee..." then "1.2 Data collection..." then "1.3 High-resolution shot attributes..." then Figure 1 text... then "Figure 1: Visualizations..." then picture text... then "Figure 1: ... A) Left-Right attribute, B) Depth attribute and C) Angle attribute." then picture text... then "2018 Research Papers Competition Presented by: 2". So Page 2 marker is after Figure 1.

Then Section 2 starts. "2. Systematic Biases..." then "2.1 Reduced shooting percentage due to Left-Right biases..." then Figure 2 caption... then picture text... then "2018 Research Papers Competition Presented by: 3". So Page 3 marker after Figure 2.

Then text continues: "This systematic bias is particularly prominent for 3-point shots..." right corner 2.34 inches left, left corner 1.05 inches right... then "2.2 Reduced shooting percentage due to longer shots landing shorter..." then Figure 3 caption... then picture text... then "2018 Research Papers Competition Presented by: 4". So Page 4 marker after Figure 3.

Then text: "Last year, we reported..." wait no, 2.2 starts before page 4? Let me re-read:
- Page 3 ends after Figure 2 caption.
- Page 4 starts with "This systematic bias is particularly prominent..." No wait, the marker "2018 Research Papers Competition Presented by: 3" is after Figure 2 caption. Then the next text is "This systematic bias is particularly prominent for 3-point shots..." That text is on page 3? Actually the page marker appears at the bottom of page 3, so content after it is page 4? Or the marker indicates the page number of the preceding content? Typically in these dumps, the page number appears at the bottom of the page. So content before "1" is page 1, before "2" is page 2, etc.

Let's assume:
- Page 1: Title through "1.3 High-resolution shot attributes" up to before Figure 1? Or up to Figure 1? The marker "1" appears after "...systematic miss patterns in" wait no. Let's look at the exact raw:

"...to expose systematic miss patterns in 
the 
population. Through unsupervised learning, we explore the potential of high-resolution rim pattern data capture to augment shooter evaluation. Then, we train a spatial rim pattern-based supervised algorithm to rank shooter ability that outperforms conventional assessment approaches.

We foresee that this research will have long-term impact in the NBA by materially increasing shooting percentages and reforming shooter ranking methods. As more players adopt high-resolution data capture training methods, we predict that systematic shooting biases will be resolved. As more coaches adopt high-resolution shooting analysis approaches, players will be evaluated for draft or trade based upon quantitative assessment of shooting skill rather than inaccurate, small sample size evaluation.

1.2 Data collection..."

Then later "2018 Research Papers Competition Presented by: 1" appears. Actually in the raw text, I see:

"...systematic miss patterns in 
the 
population. Through unsupervised learning... [lots of text] ...small sample size evaluation.

1.2 Data collection..."

Wait, the page marker "1" appears after "...systematic miss patterns in"? Let me look at the provided text again:

"the 
population. Through 
unsupervised 
learning, 
we 
explore 
the 
potential 
of 
high-­‐resolution 
rim pattern 
data 
capture 
to 
augment 
shooter evaluation. 
Then, we 
train 
a 
spatial rim pattern-­‐based supervised 
algorithm 
to 
rank 
shooter 
ability 
that 
outperforms 
conventional 
assessment approaches. 

We 
foresee 
that 
this 
research 
will 
have 
long-­‐term 
impact 
in 
the 
NBA 
by 
materially 
increasing shooting 
percentages 
and 
reforming 
shooter 
ranking 
methods. 
As 
more 
players 
adopt 
high-­‐resolution 
data 
capture 
training 
methods, 
we 
predict 
that 
systematic 
shooting 
biases 
will 
be resolved. 
As 
more 
coaches 
adopt 
high-­‐resolution 
shooting 
analysis 
approaches, 
players 
will 
be evaluated 
for 
draft 
or 
trade 
based 
upon 
quantitative 
assessment 
of 
shooting 
skill 
rather 
than inaccurate, 
small 
sample 
size 
evaluation. 

### **1.2. Data 
collection**"

Then later I see: "2018 Research Papers Competition Presented by: 1" — wait, in the text provided, I see "2018 Research Papers Competition Presented by: 1" right after "...systematic miss patterns in"? No, looking at the user's text:

After "...reveals systematic miss patterns in" there is a line break then "the population..." then later near the end of that block I see:

"2018 
Research 
Papers 
Competition Presented 
by: 

1"

Actually the user's text shows:
"...systematic miss patterns in 

the 
population. Through..." 

and then later:
"2018 
Research 
Papers 
Competition Presented 
by: 

1"

It's hard to tell exactly where page breaks are because the text is continuous. But I can see page numbers 1 through 10 explicitly in the text. I'll cite them as they appear relative to content.

Key page assignments based on typical layout (page number at bottom):
- Page 1: Title, Abstract, Section 1 Introduction (1.1 Motivation), start of 1.2? Actually the marker "1" appears after the first big block including 1.1 and maybe 1.2 start? Let's look: the marker "1" appears after "...small sample size evaluation." which is end of 1.1. Then 1.2 starts. So Page 1 = Title/Abstract/1.1.
- Page 2: 1.2 Data collection, 1.3 Attributes, Figure 1. Marker "2" after Figure 1.
- Page 3: Section 2 Systematic Biases, 2.1 Left-Right biases, Figure 2. Marker "3" after Figure 2 caption.
- Page 4: Continuation of 2.1 (corner 3s), 2.2 Depth biases, Figure 3. Marker "4" after Figure 3 caption.
- Page 5: Continuation of 2.2 (GMZ, depth values), Section 3 Ranking, 3.1 Limitations, Players A/B/C. Marker "5" after "...individuals."? Actually marker "5" appears after "...referred to here as Player A, Player B and Player C."? Let's check: In text, after Section 3.1 text about three players, then "2018 Research Papers Competition Presented by: 5". Yes, page 5 marker after introducing Players A/B/C and before Figure 4? Actually Figure 4 is mentioned after.
- Page 6: Figure 4 caption, Section 3.1 continued (spatial rim pattern 9 features), t-SNE. Marker "6" after "...nine dimensions of measurement for each session."? Actually marker "6" appears after "...t-SNE dimension reduction technique."? Let's see: text has "...t-SNE is an unsupervised..." then marker "6"? In user text: "2018 Research Papers Competition Presented by: 6" appears after "...these rim pattern statistics give an additional nine dimensions of measurement for each session." then t-SNE paragraph. Actually the marker appears before t-SNE paragraph? Let's check: "...measurement for each session. T-distributed stochastic neighbor embedding (t-SNE)..." then later "2018 Research Papers Competition Presented by: 6". It seems page 6 contains end of 3.1 and start of t-SNE.
- Page 7: Figure 5, Section 3.2 Prediction model, Gradient Boosting, data set construction. Marker "7" after "...down-sampled to achieve an even distribution...".
- Page 8: Section 3.3 Ten-dimension model improves ranking, MSE, Spearman, bias. Marker "8" after "...will not be developed further in this paper."? Actually marker "8" appears after "...better than ever before using the ten-dimension prediction model."? Let's see: text ends page 8 with "...rank shooters on ability from small shot sessions better than ever before using the ten-dimension prediction model. There are methods to correct this bias..." then marker "8"? Actually user text shows "2018 Research Papers Competition Presented by: 8" after "...ability from small shot sessions better than ever before using the ten-dimension prediction model." Then continues with Discussion.
- Page 9: Discussion, Conclusion, Acknowledgements, Resources, References. Marker "9" after References? Actually marker "9" appears after References section? User text: "...JMLR 12, pp. 2825-2830, 2011.</mark> 

2018 Research Papers Competition Presented by: 

9 

## Appendix". So Page 9 ends with References.
- Page 10: Appendix Section 1 and Section 2. Marker "10" at end.

Okay, I'll cite these page numbers.

Now, I need to write >= 1000 words total across sections, with THINK_TRACE >= 400 words.

Let's plan each section:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >= 400 words. I should discuss:
- Derivation of how Left-Right bias translates to percentage loss (integral over normal distribution truncated by hoop width).
- Depth bias as non-normal skewed distribution, median-based estimation.
- The 25-shot session problem: binomial sampling variance sigma = sqrt(p(1-p)/n). For n=25, p=0.5, sigma ≈ 0.1, meaning 95% CI ±20 percentage points. This explains overlap.
- The 9 features + raw = 10 dimensions. Gradient boosting assumptions.
- Gray zones: handoff not collected (handedness hypothesized but unmeasured), movement threshold (>2 feet excluded) introduces selection bias, training range 30-90% creates shrinkage/regression to mean at extremes, small sample size for ranking, stationarity assumption over 10 months.
- Multi-hop: Noah sensor height 13 ft -> projection geometry -> hoop plane attributes -> systematic bias -> percentage loss -> model correction -> ranking improvement -> draft/trade implications.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX.
- Define random variables: LR ∈ [-9, 9] inches, D ∈ [0, 18] inches, θ ∈ [36°, 55°].
- Hoop center origin: x_LR = 0, front rim D=0, back rim D=18.
- Make probability as function P_make(LR, D, θ) with GMZ region.
- Estimator for mean LR bias: μ̂_LR(s) = (1/N_s) Σ x_i for square s.
- Binomial variance: Var(ȳ) = p(1-p)/n for n-shot session.
- For n=25, p=0.5: σ_ȳ = √(0.25/25) = 0.10 (10 percentage points).
- Spearman rank correlation ρ between predicted and true ability.
- MSE comparison: MSE_model ≈ 0.5 MSE_raw.
- Breakdown regimes: n < 1000 shots unreliable; training p ∈ [0.30, 0.90] causes truncation bias (clipping) at extremes; movement > 2 ft excluded; non-normal Depth (skewed short) invalidates Gaussian assumption.
- Cite pages for values: Page 4 for 2.34", 1.05", 4%/2%, 4 inches std dev. Page 5 for 10.1"/7.8", 11.5"/10.5", 1.5%/2.9%. Page 6 for 9 features, 25/100/500/1000 shots. Page 7 for Gradient Boosting, 2/3 train, 1/3 test. Page 8 for half MSE, Spearman, bias inflation. Page 10 for 30-90% range, >2 ft movement exclusion.

<RETROCAUSAL_GENEALOGY>: Historical lineage.
- Goldsberry 2012 MIT Sloan Courtvision (Ref [1], Page 1/2).
- Marty & Lucey 2017 MIT Sloan (Ref [3], Page 3/4) - prior GMZ work.
- Van der Maaten & Hinton 2008 t-SNE (Ref [6], Page 9).
- Pedregosa et al. 2011 scikit-learn (Ref [7], Page 9).
- Multi-week traps: If a coach adjusts based on a single 25-shot session, regression to mean will make any intervention look effective or ineffective randomly. Over weeks, small-sample noise averages out but the "hot hand" fallacy may persist. The paper tracks players over 10 months (Page 5), showing true ability emerges only with thousands of shots.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under pressure, players revert to ingrained spatial biases (e.g., right corner left bias). The system captures this but doesn't yet collect handedness (Page 4).
- Counter-trap: Coaches seeing a player shoot poorly in a 25-shot session might bench them, but the paper shows overlap is high; this is a counter-trap because raw percentage misranks. The ten-dimension model counters this by using rim patterns.
- Clock: 10-month tracking (Page 5); sessions accumulate; >1000 shots needed for reliable ranking (Page 6). The "clock" is the accumulation of stationary shots over time.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical: Sensor at ~13 ft (Page 2), hoop plane geometry defines attribute bounds. No weather (indoor). Biomechanical: shooter movement >2 ft excluded (Page 10) because movement correlates with percentage; this is a biomechanical veto layer. Attribute physical limits: LR ±9", D 0-18", angle 36-55° (Page 2). These are hard physical bounds, not statistical artifacts. Veto: any shot outside physical sensor calibration or hoop geometry is invalid; bank shots ignored in non-bank analysis (Page 4).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning via Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios where the model's prediction would be vetoed.
1. Scenario: Player attempts bank shots from 45-degree regions. Veto: exclude bank shots (Page 3/4). Prediction: if included, mean Depth would appear artificially deep (>18") and bias estimates invalid.
2. Scenario: Player movement >2 ft between shots (Page 10). Veto: session invalidated. Prediction: raw shooting percentage would drop significantly due to movement correlation, creating false negative ranking.
3. Scenario: Player true shooting percentage outside [30%, 90%] training range (Page 10). Veto: model output clipped/truncated. Prediction: poor shooter (<30%) predicted upward, great shooter (>90%) predicted downward; rank order preserved but absolute error inflated.

Need to ensure no betting lines. The paper discusses shooting percentage, player ranking, drafting, trading. I must avoid mentioning odds, spreads, etc. I can mention drafting/trading as team roster decisions but not betting.

Word count: Need >= 1000 words total. THINK_TRACE alone >= 400. I'll aim for ~150-200 words per other section, totaling well over 1000.

Let's write carefully with LaTeX.

Need verbatim quotes and [PAGE N] markers. I'll quote exact phrases.

Verbatim quotes to use:
- "over 22 million shots captured in high-resolution by Noahlytics" [PAGE 1]
- "Left-Right value of -9”, a straight shot has a Left-Right value of 0” and a shot which lands on the rightmost part of the hoop has a Left-Right value of +9”." [PAGE 2]
- "Depth value of 0” and a shot which lands directly on the back of the hoop has a Depth value of 18”." [PAGE 2]
- "players shooting from the right corner shoot 2.34 inches left of the hoop center" [PAGE 4]
- "players shooting from the left corner shoot 1.05 inches right of the hoop center" [PAGE 4]
- "an NBA player with average Left-Right distribution is sacrificing up to 4% of shooting percentage from the right corner and up to 2% of shooting percentage from the left corner." [PAGE 4]
- "mean Depth value decreases as shots get longer, from 10.1 inches at 15-18 feet to 7.8 inches at 27-30 feet" [PAGE 5]
- "center of the GMZ region remains more constant, only shifting from 11.5 inches at 15-18 feet to 10.5 inches at 27-30 feet" [PAGE 5]
- "Sessions of over 1,000 shots are necessary to rank shooters reliably." [PAGE 6]
- "the spatial rim pattern is defined as the following nine features: the mean for each shot attribute..., the standard deviation for each shot attribute and spearman correlation between each pair of shot attributes." [PAGE 6]
- "the model has half the mean squared error of raw shooting percentage" [PAGE 8]
- "training data only has players with overall shooting percentages between 30% and 90%" [PAGE 10]
- "we excluded all sessions with an average movement of greater than two feet" [PAGE 10]

I need to make sure page numbers align. Let's verify approximate page assignments:
- Page 1: Abstract, 1.1. Yes.
- Page 2: 1.2, 1.3, Figure 1. Yes.
- Page 3: Section 2, 2.1, Figure 2. Yes.
- Page 4: rest of 2.1, 2.2 start, Figure 3. Wait, in the text, Figure 3 is on page 4? Let's check: After Figure 2 caption, marker 3. Then text "This systematic bias is particularly prominent..." which is still 2.1. Then "2.2 Reduced shooting percentage..." then Figure 3 caption, then marker 4. So Page 4 contains Figure 3 and 2.2 start. Actually the marker 4 appears after Figure 3 caption. So Page 4 includes 2.1 corner details and 2.2 start? Let's look at raw:

"...(Figure 2B). On average, players shooting from the left corner shoot 1.05 inches right of the hoop center (Figure 2C). An average NBA player shoots with Left-Right standard deviation of about 4 inches from the corner 3-point distance. Using this standard deviation, we simulated Left-Right distributions with different Left-Right averages. Thus, we could estimate shooting percentage loss at each suboptimal Left-Right value for an average NBA player. Given these distributions, an NBA player with average Left-Right distribution is sacrificing up to 4% of shooting percentage from the right corner and up to 2% of shooting percentage from the left corner. Notably, the bias in the right corner is much more extreme. While the Noahlytics system does not currently collect data on the handedness of the shooters, we hypothesize this difference is due to a much higher percentage of right-handed shooters.

### 2.2 Reduced shooting percentage due to longer shots landing shorter in the hoop

Last year, we reported that 3-point shots are most likely to score when shot at the center of the Guaranteed Make Zone (GMZ)..."

Then Figure 3 caption. Then marker 4. So all that 2.1 corner stuff is on Page 3? Wait marker 3 appeared after Figure 2 caption. Then the corner text follows. So Page 3 contains Figure 2 and start of corner text. Then marker 4 appears after Figure 3 caption. So Page 4 contains the rest of corner text? That seems odd because usually page marker is at bottom. But in these dumps, it's not always perfect. I'll cite conservatively: corner values [PAGE 4] because the text says "Figure 2B" and "Figure 2C" which are on page 3 per caption, but the numeric values appear after. Actually the values appear after Figure 2 caption in the flow, so they might be on page 3 or 4. I'll cite [PAGE 3] for Figure 2B/C reference and [PAGE 4] for the explicit 2.34/1.05 values if they appear after marker 3. Wait, looking at user text: marker 3 appears right after Figure 2 caption text. Then immediately: "This systematic bias is particularly prominent...". So that text is on Page 3 (after the page number marker? No, usually page number is at bottom). But the user put marker 3 before that text. I'll assume content after marker 3 is Page 4? Actually if marker 3 is at bottom of page 3, then content after is page 4. But the text flow suggests it's continuous. To be safe, I'll cite values as [PAGE 3] or [PAGE 4] depending on where they physically appear. Given uncertainty, I can cite a range or just pick the page where the header appears. But the instruction says "cite exact [PAGE N] markers". I should use the page numbers visible in the text. Since I see "2018 Research Papers Competition Presented by: 3" then text, I'll treat subsequent text until next marker as page 3? No, that would put corner values on page 3. Actually the marker might be a header at top of page? "Presented by: 1" looks like a footer. Let's just cite logically:

- Abstract/intro: [PAGE 1]
- Attributes definitions: [PAGE 2]
- Figure 2 & systematic LR bias intro: [PAGE 3]
- Corner values 2.34/1.05, 4%/2%: [PAGE 4] (since they appear after marker 3 but before marker 4? Actually they appear before 2.2 which is before Figure 3 and marker 4. Hmm.)
- Figure 3 & Depth values: [PAGE 5] (marker 4 after Figure 3, then text continues about Depth values 10.1/7.8 on next page?)

This is getting messy. Let's look at the raw text sequence more carefully:

Text segment:
"...systematic miss patterns in
the
population. Through unsupervised learning...
...
small sample size evaluation.

### 1.2. Data collection
...
### 1.3. High-resolution shot attributes
...
Figure 1: Visualizations...
...
2018 Research Papers Competition Presented by: 2"

So Page 2 marker is after Figure 1.

Next:
"## 2. Systematic Biases
...
### 2.1 Reduced shooting percentage due to Left-Right biases...
...
Figure 2: Systematic Left-Right Biases...
...
2018 Research Papers Competition Presented by: 3"

So Page 3 marker after Figure 2.

Next:
"This systematic bias is particularly prominent for 3-point shots...
...
### 2.2 Reduced shooting percentage due to longer shots...
...
Figure 3: Systematic Depth Biases...
...
2018 Research Papers Competition Presented by: 4"

So Page 4 marker after Figure 3. That means the corner values (2.34, 1.05, 4%, 2%) appear between marker 3 and marker 4, so they are on Page 4? Wait, if marker 3 is at bottom of page 3, content after is page 4. But typically page number is at bottom, so content before marker 3 is page 3. The content between marker 2 and marker 3 is page 2? No, marker 2 was after Figure 1. Then Section 2 starts. That would be page 3? But marker 3 is after Figure 2. So content between marker 2 and marker 3 is page 3? Actually if marker N is at bottom of page N, then:
- Content before marker 1: Page 1
- Content between marker 1 and 2: Page 2
- Content between marker 2 and 3: Page 3
- Content between marker 3 and 4: Page 4
etc.

But the text starts before marker 1. So:
- Title/Abstract/1.1 up to "...systematic miss patterns in" -> Page 1? Then marker 1 appears? Actually marker 1 appears much later in my reading. Let me look again at user's text:

After 1.1 Motivation paragraph 3 ("...small sample size evaluation."), then 1.2 Data collection, 1.3 Attributes, Figure 1. Then marker "2". Wait, where is marker 1? In the user text I see "2018 Research Papers Competition Presented by: 1" after "...systematic miss patterns in"? Let's search the text:

The user text shows:
"...to expose systematic miss patterns in 

the 
population. Through 
unsupervised 
learning, 
we 
explore 
the 
potential 
of 
high-­‐resolution 
rim pattern 
data 
capture 
to 
augment 
shooter evaluation. 
Then, we 
train 
a 
spatial rim pattern-­‐based supervised 
algorithm 
to 
rank 
shooter 
ability 
that 
outperforms 
conventional 
assessment approaches. 

We 
foresee 
that 
this 
research 
will 
have 
long-­‐term 
impact 
in 
the 
NBA 
by 
materially 
increasing shooting 
percentages 
and 
reforming 
shooter 
ranking 
methods. 
As 
more 
players 
adopt 
high-­‐resolution 
data 
capture 
training 
methods, 
we 
predict 
that 
systematic 
shooting 
biases 
will 
be resolved. 
As 
more 
coaches 
adopt 
high-­‐resolution 
shooting 
analysis 
approaches, 
players 
will 
be evaluated 
for 
draft 
or 
trade 
based 
upon 
quantitative 
assessment 
of 
shooting 
skill 
rather 
than inaccurate, 
small 
sample 
size 
evaluation. 

### **1.2. Data 
collection**"

Then later after Figure 1 caption:
"2018 
Research 
Papers 
Competition Presented 
by: 

2"

I don't see marker 1 explicitly in the provided snippet? Actually I do see it earlier:
"the 
population. Through ... [then eventually] ...small sample size evaluation.

### **1.2. Data 
collection**"

Wait, looking at the very beginning of user text, after abstract and intro, there is:

"2018 
Research 
Papers 
Competition Presented 
by: 

1"

I think it's there but hard to spot. Let's assume standard pagination:
- Page 1: Title, Abstract, Section 1 Introduction including 1.1, maybe part of 1.2? But given marker 2 is after Figure 1, Page 2 likely includes 1.2, 1.3, Figure 1.
- So Page 1 includes up to end of 1.1.
- Page 2 includes 1.2, 1.3, Figure 1.
- Page 3 includes Section 2, 2.1, Figure 2.
- Page 4 includes rest of 2.1 (corner values), 2.2, Figure 3.
- Page 5 includes rest of 2.2 (Depth values), Section 3, 3.1, Players A/B/C.
- Page 6 includes Figure 4, rest of 3.1 (9 features), t-SNE.
- Page 7 includes Figure 5, Section 3.2.
- Page 8 includes Section 3.3.
- Page 9 includes Discussion, Conclusion, References.
- Page 10 includes Appendix.

This mapping seems consistent. I'll use it.

Now writing.

THINK_TRACE (>=400 words): I'll write a dense multi-hop derivation.

Structure:
1. Data pipeline: 22M shots, 5,649 shooters, sensor at 13ft -> projection to hoop plane -> LR, D, theta.
2. Measurement model: LR ∈ [-9,9] inches, D ∈ [0,18] inches. Hoop center at (0, ~9 inches depth?). Actually front rim D=0, back D=18, center ~9.
3. Systematic bias derivation: Population mean LR ≠ 0 at specific squares. Corner bias shifts distribution away from center. Make probability P(make|x) is maximized at x=0 (center) and drops off near edges ±9. If μ_LR = +2.34 inches (right corner shooting left of center means negative? Actually right corner players shoot 2.34 inches left of center, so mean LR = -2.34 inches if left is negative. Wait: leftmost part is -9, rightmost +9. Shooting left of center means negative LR. Right corner players shoot left of center, so mean LR = -2.34 inches. Left corner shoot right of center, mean LR = +1.05 inches.
4. Percentage loss: integrate over normal distribution N(μ, σ=4"). Loss = P_optimal - P_actual. Paper simulates this: up to 4% right corner, 2% left.
5. Depth bias: longer shots land shorter (D decreases). 15-18ft: mean D=10.1 vs GMZ center 11.5. 27-30ft: mean D=7.8 vs GMZ 10.5. Skewed short (non-normal), so median-based estimation.
6. Small sample ranking: Binomial variance for n=25, p=0.5 is σ = sqrt(p(1-p)/n) = 0.10. Overlap between players A (50%), B (58%), C (75%) is huge at n=25. Need >1000 shots for reliable ranking.
7. Model: 10-dim vector [p_raw, means, stds, correlations]. Gradient boosting. MSE halved. Spearman improved. But training range [30%, 90%] causes truncation/shrinkage bias at extremes.
8. Gray zones: handedness not collected (hypothesized but unmeasured); movement >2ft excluded (selection bias); stationarity over 10 months assumed; bank shots excluded from non-bank analysis; GMZ defined from prior work.

Gray-zone audit: The causal claim "bias causes percentage loss" relies on simulation assuming normal LR and known σ; Depth is explicitly non-normal so Gaussian assumption invalid there. The ranking model's causal validity requires that rim patterns are stable traits, not state-dependent. Crisis moments could shift patterns.

I'll write this in prose with equations inline.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX block.

Equations:
- Attribute space: \(\mathcal{A} = \{LR, D, \theta\}\)
- \(LR \in [-9, 9]\) inches; \(D \in [0, 18]\) inches; \(\theta \in [36^\circ, 55^\circ]\)
- Hoop center: \(c = (LR=0, D=9)\) approximately (midpoint).
- Sample mean per court square \(s\): \(\hat{\mu}_{LR}(s) = \frac{1}{N_s}\sum_{i \in s} x_i^{LR}\)
- Binomial session proportion: \(\hat{p} = \frac{K}{n}, K \sim \text{Binomial}(n, p)\)
- Variance: \(\text{Var}(\hat{p}) = \frac{p(1-p)}{n}\)
- For \(n=25, p=0.5\): \(\sigma_{\hat{p}} = \sqrt{0.25/25} = 0.10\) (10 percentage points)
- Feature vector: \(\mathbf{f} = [\hat{p}, \mu_{LR}, \mu_D, \mu_\theta, \sigma_{LR}, \sigma_D, \sigma_\theta, \rho_{LR,D}, \rho_{LR,\theta}, \rho_{D,\theta}] \in \mathbb{R}^{10}\)
- Gradient Boosting Regression: \(\hat{p}_{ens} = \sum_{m=1}^M \eta h_m(\mathbf{f})\)
- MSE reduction: \(\text{MSE}_{\text{model}} \approx \frac{1}{2} \text{MSE}_{\text{raw}}\)
- Spearman \(\rho\) between predicted and cumulative true percentage.
- Breakdown regimes: \(n < 1000\) unreliable; \(p_{\text{train}} \in [0.30, 0.90]\) causes clipping bias; movement \(>2\) ft excluded; Depth distribution non-normal (skewed short).

Cite pages for each value.

RETROCAUSAL_GENEALOGY: 
- Goldsberry 2012 Courtvision -> spatial shot charts [PAGE 1]
- Marty & Lucey 2017 GMZ -> prior depth bias [PAGE 3/4]
- t-SNE 2008, scikit-learn 2011 [PAGE 9]
- Multi-week trap: A coach observing a 25-shot slump might change mechanics; but due to binomial noise, the slump may reverse spontaneously (regression to mean), falsely validating the change. Over 10 months [PAGE 5], true skill emerges only after thousands of shots. The "causal arrow" from intervention to outcome is confounded by sampling variance.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under pressure, players revert to systematic spatial biases (e.g., right-corner left bias [PAGE 4]). This is a first-order habit.
- Counter-trap: The ten-dimension model is designed to avoid the trap of ranking by raw 25-shot percentage [PAGE 6]. A coach might think Player A is better than Player C on a given day due to variance; the model counters this.
- Clock: 10-month longitudinal data [PAGE 5]; >1000 shots needed [PAGE 6]; the model's reliability is a function of accumulated stationary shots over time.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Sensor height ~13 ft [PAGE 2]; hoop plane geometry imposes hard bounds LR ±9", D 0-18", angle 36-55° [PAGE 2]. Any measurement outside these bounds is a sensor veto.
- Biomechanical layer: Shooter movement >2 ft between shots excluded [PAGE 10] because movement negatively correlates with percentage [Appendix Page 10]. This veto removes non-stationary shot contexts.
- Weather layer: Indoor capture; no weather vars in paper. Veto: outdoor environmental effects not modeled; external validity limited to indoor controlled environments.
- Bank shot veto: Bank shots (trajectory past rim without backboard) appear as extreme Depth and are excluded from non-bank analysis [PAGE 4]. Including them would bias mean Depth deeper.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.
1. Bank shot contamination: If bank shots included in Depth analysis, mean D would shift >18" (physically impossible for direct shot). Veto: exclude bank-shot regions [PAGE 3/4]. Prediction: estimated Depth bias would be overestimated by several inches; make-percentage loss attribution would be invalid.
2. Movement-contaminated session: Player averages >2 ft movement between shots in a 25-shot session. Veto: session excluded [PAGE 10]. Prediction: raw percentage would be depressed by movement-shot correlation, causing false negative rank (player appears worse than true ability).
3. Extreme shooter outside training range: Player true p = 0.95 (>90% max training). Veto: model output clipped to ≤0.90 [PAGE 10]. Prediction: Spearman rank preserved locally but absolute MSE inflated; great shooter deflated toward mean, poor shooter (<30%) inflated upward. Rank order among extremes compressed.

Now let's draft with attention to word count and formatting.

I need to ensure no betting lines. I will not mention odds, spreads, etc.

Let's write.

Word count estimation:
THINK_TRACE: ~500 words
SOURCE_OPERATORS: ~250 words
RETROCAUSAL: ~150 words
RECURSIVE: ~150 words
CROSS_LAYER: ~150 words
RLVR: ~200 words
Total ~1400 words. Good.

Make sure to use verbatim quotes with quotation marks and page citations.

Let's write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's causal chain runs from sensor physics to roster decisions through four measurable hops. Hop one is geometric capture: the Noahlytics sensor hangs roughly 13 feet above the basket and records every shot's interaction with the hoop plane, producing three continuous attributes—Left-Right in inches over [-9, +9], Depth in inches over [0, 18], and entry Angle in degrees over [36°, 55°]—defined from the shooter's perspective so that the near rim is always the front [PAGE 2]. Hop two is population bias extraction: the 22 million shots are binned into six-inch by six-inch court squares, and per-square means reveal that non-bank shots display a cross-court symmetry where the right side of the floor shoots left of center and the left side shoots right of center [PAGE 3]. This is invisible in raw percentage because the population-level Left-Right mean is exactly zero [PAGE 3]. Hop three converts bias into expected percentage loss. For corner threes, the paper reports that right-corner shooters average 2.34 inches left of hoop center and left-corner shooters average 1.05 inches right of center, with an average NBA Left-Right standard deviation near 4 inches from that distance [PAGE 4]. Simulating distributions around these means yields an estimated sacrifice of up to 4% shooting percentage from the right corner and up to 2% from the left corner [PAGE 4]. Hop four is the ranking layer: conventional assessment uses a single shooting percentage from a limited sample, but the paper shows that for players A, B, and C (true long-run percentages of 50%, 58%, and 75% over 10 months and tens of thousands of shots), 25-shot sessions overlap so heavily that confident ranking is impossible; sessions of over 1,000 shots are necessary for reliable ordering [PAGE 5][PAGE 6]. The proposed repair augments raw percentage with nine spatial rim-pattern statistics—the mean and standard deviation of each of Left-Right, Depth, and Angle, plus the three pairwise Spearman correlations—creating a ten-dimensional input to a Gradient Boosting Regression that halves mean squared error and improves Spearman rank correlation against the gold standard of cumulative percentage [PAGE 6][PAGE 8].

Gray-zone audit. The claim that Left-Right bias causes percentage loss relies on a Gaussian simulation with σ ≈ 4 inches, yet the paper explicitly states Depth distributions are non-normal and skewed short, so a Gaussian Depth model would be invalid; the authors therefore use median Depth variation rather than mean [PAGE 4][PAGE 5]. Handedness is never measured, so the asymmetry between right-corner (2.34 inches) and left-corner (1.05 inches) bias is attributed to an unobserved confounder—a higher percentage of right-handed shooters—rather than directly identified [PAGE 4]. Stationarity is assumed across a 10-month window despite possible coaching, fatigue, or mechanical drift [PAGE 5]. Sessions with average inter-shot movement greater than two feet are excluded because movement correlates negatively with percentage, but this exclusion introduces selection bias: players who move more are systematically removed, potentially biasing the training population toward stationary shooters [PAGE 10]. Finally, the model's output is bounded by the training range of 30% to 90%, which clips predictions for shooters outside that interval and induces regression-to-the-mean shrinkage at both extremes [PAGE 8][PAGE 10].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(x^{LR}\) denote Left-Right entry position measured in inches from hoop center, \(x^{D}\) entry Depth in inches from front rim, and \(x^{\theta}\) entry Angle in degrees. From the hoop-plane attribute definitions:

\[
x^{LR} \in [-9,\,+9]\ \text{inches},\qquad -9\ \text{is leftmost},\ 0\ \text{is straight},\ +9\ \text{is rightmost}
\]

\[
x^{D} \in [0,\,18]\ \text{inches},\qquad 0\ \text{is front rim},\ 18\ \text{is back rim}
\]

\[
x^{\theta} \in [36^\circ,\,55^\circ]
\]

[PAGE 2] For any court square \(s\) tiled at six-inch by six-inch resolution, the population mean Left-Right bias is the estimator

\[
\hat{\mu}_{LR}(s) = \frac{1}{N_s}\sum_{i\in s} x_i^{LR}
\]

[PAGE 3] The paper reports the realized corner means

\[
\hat{\mu}_{LR}(\text{right corner}) = -2.34\ \text{inches},\qquad \hat{\mu}_{LR}(\text{left corner}) = +1.05\ \text{inches}
\]

with an average NBA corner standard deviation of about \(4\) inches, producing simulated percentage losses of up to \(4\%\) and \(2\%\) respectively [PAGE 4]. For Depth, longer-range non-bank shots exhibit shorter entry depth:

\[
\hat{\mu}_{D}(15\text{–}18\text{ ft}) = 10.1\ \text{inches},\quad \hat{\mu}_{D}(27\text{–}30\text{ ft}) = 7.8\ \text{inches}
\]

while the Guaranteed Make Zone (GMZ) center moves only from \(11.5\) to \(10.5\) inches over the same span [PAGE 5]. Because Depth is skewed short, the paper estimates percentage loss by varying median Depth rather than assuming normality [PAGE 5].

For a single \(n\)-shot session with true ability \(p\), raw percentage \(\hat{p}=K/n\) with \(K\sim\text{Binomial}(n,p)\) has sampling variance

\[
\operatorname{Var}(\hat{p}) = \frac{p(1-p)}{n},\qquad \sigma_{\hat{p}} = \sqrt{\frac{p(1-p)}{n}}.
\]

At \(n=25\) and \(p=0.50\), \(\sigma_{\hat{p}} = \sqrt{0.25/25} = 0.10\), i.e., a 10-percentage-point standard error, which explains the heavy overlap among Players A, B, and C at small \(n\) [PAGE 5][PAGE 6]. Reliable ranking requires sessions exceeding \(1{,}000\) shots [PAGE 6].

The shooter feature vector is

\[
\mathbf{f} = \big[\hat{p},\ \mu_{LR},\ \mu_{D},\ \mu_{\theta},\ \sigma_{LR},\ \sigma_{D},\ \sigma_{\theta},\ \rho_{LR,D},\ \rho_{LR,\theta},\ \rho_{D,\theta}\big] \in \mathbb{R}^{10},
\]

[PAGE 6] trained with Gradient Boosting Regression to minimize a differentiable loss, with \(2/3\) of players in the training set and \(1/3\) in the test set, down-sampled for percentage balance [PAGE 7]. Performance is summarized by

\[
\text{MSE}_{\text{model}} \approx \frac{1}{2}\text{MSE}_{\text{raw}},\qquad \rho_{\text{Spearman}}(\hat{p}_{\text{model}}, p_{\text{cumulative}}) > \rho_{\text{Spearman}}(\hat{p}_{\text{raw}}, p_{\text{cumulative}})
\]

[PAGE 8]. Breakdown regimes: \(n<1000\) shots yields unreliable ranking; training percentages are truncated to \(p\in[0.30,0.90]\), clipping extreme shooters [PAGE 10]; and sessions with mean inter-shot movement \(>2\) feet are excluded [PAGE 10].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a direct methodological lineage from Kirk Goldsberry's 2012 MIT Sloan "Courtvision" work, which introduced spatial shot charts and moved evaluation beyond summary percentages [PAGE 1][Reference 1, PAGE 9]. Marty and Lucey's 2017 MIT Sloan paper established the Guaranteed Make Zone (GMZ) and identified a population bias for three-pointers shot two inches short of GMZ center [PAGE 3][Reference 3, PAGE 9]. The current study extends that work by disaggregating Depth bias by shot distance and by embedding the nine-dimensional spatial rim pattern into a supervised ranker. The unsupervised clustering layer uses t-SNE (van der Maaten & Hinton, 2008) and scikit-learn (Pedregosa et al., 2011) to visualize session-level feature vectors without player labels [PAGE 6][References 6–7, PAGE 9].

Multi-week trap: Because a 25-shot session has a standard error near 10 percentage points at \(p=0.5\), a coach who changes a shooter's mechanics after one bad week is likely reacting to binomial noise. The paper tracks Players A, B, and C over 10 months and tens of thousands of shots precisely to show that true ordering only stabilizes after large cumulative samples [PAGE 5]. A counterfactual intervention made after a single 25-shot slump would frequently be "validated" by spontaneous regression to the mean, creating a false causal attribution that persists for weeks until the larger sample reasserts the true ranking.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under game pressure, shooters are hypothesized to regress to ingrained spatial habits rather than optimal GMZ targeting. The documented right-corner bias of 2.34 inches left of center and left-corner bias of 1.05 inches right of center represent population-level crisis habits that are invisible to the naked eye but measurable at high resolution [PAGE 4]. Because handedness is uncollected, the model cannot yet condition these habits on shooter laterality, leaving a latent-state ambiguity in high-pressure moments.

Counter-trap: The conventional trap is ranking players by raw percentage from a 25-shot session, where Players A (50%), B (58%), and C (75%) overlap so extensively that any given day's ranking can invert the true order [PAGE 5][PAGE 6]. The ten-dimension model is the counter-trap: it uses spatial rim-pattern statistics to predict true ability from the same small sample, ranking Player C as better and Player A as poorer despite daily variance [PAGE 8]. A coach who benches Player C after one poor 25-shot session falls into the raw-percentage trap; the model rescues the ranking by conditioning on means, variances, and correlations of entry attributes rather than made/missed counts alone.

Clock: The reliability of the ranker is a function of accumulated stationary shots over time. The longitudinal window is 10 months [PAGE 5]; the data construction requires more than 1,000 stationary shots per player in the 18–22 foot band [PAGE 7]; and the paper states that sessions of over 1,000 shots are necessary for reliable ranking [PAGE 6]. Thus the "clock" is the accumulation of in-distribution, low-movement shots, not the calendar date of a single workout.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The sensor geometry fixes hard observational bounds. The camera hangs roughly 13 feet above the basket [PAGE 2], and entry attributes are bounded by hoop physics: Left-Right \(\in[-9,+9]\) inches, Depth \(\in[0,18]\) inches, Angle \(\in[36^\circ,55^\circ]\) [PAGE 2]. Any observation outside these ranges fails sensor calibration and is vetoed before statistical analysis.

Biomechanical layer: Shooter movement between shots is a confound. The appendix defines movement as mean distance between consecutive shots and finds a significant negative Spearman correlation with shooting percentage [PAGE 10]. Sessions averaging more than two feet of movement are excluded [PAGE 10], which is a biomechanical veto that removes non-stationary shot contexts (e.g., off-the-dribble or transition attempts) from the stationary 18–22 foot analysis.

Bank-shot trajectory layer: Bank shots are defined as shots whose trajectory would proceed past the rim without the backboard [PAGE 4]. In Depth and Left-Right heat maps they appear as extreme outliers emanating at 45 degrees from the hoop [PAGE 3][PAGE 4]. Including them in non-bank Depth means would shift estimates beyond the physical back rim (\(>18\) inches) and invalidate the GMZ comparison, so they are excluded [PAGE 3][PAGE 4].

Weather/exogenous layer: The capture environment is indoor and controlled; no weather variables exist in the dataset. Consequently, any generalization to outdoor wind, humidity, or lighting conditions is vetoed by absence of covariates; the model's external validity is restricted to the same controlled sensor geometry and indoor lighting.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Bank-shot contamination of Depth means. If bank-shot regions were included in the Depth bias analysis, shots that would travel past the rim without the backboard would register as \(x^{D}>18\) inches, violating the physical Depth bound [PAGE 2]. Verifiable veto: exclude all bank-shot trajectories before computing mean Depth per court square [PAGE 3][PAGE 4]. Prediction: including bank shots would artificially deepen mean Depth by several inches in the 45-degree zones and invert the observed relationship that longer shots land shorter in the hoop.

Veto Scenario 2 — Movement-contaminated 25-shot session. Consider a shooter whose average inter-shot distance exceeds two feet in a single 25-shot session. Verifiable veto: drop the session from training and inference because movement correlates negatively with percentage [PAGE 10]. Prediction: retaining the session would depress raw percentage below true ability, producing a false-negative rank (the shooter appears worse than their cumulative percentage) and inflating residual error in the ten-dimension model.

Veto Scenario 3 — Shooter outside the training percentage range. The model is trained only on players with cumulative percentages between 30% and 90% [PAGE 10]. Verifiable veto: clip or reject predictions for any shooter whose true \(p<0.30\) or \(p>0.90\). Prediction: for a great shooter at \(p=0.95\), the model will deflate the prediction toward the training ceiling (~0.90); for a poor shooter at \(p=0.25\), it will inflate toward ~0.30. Spearman rank may remain locally monotonic, but mean squared error increases and rank-order separation at the extremes is compressed.
</RLVR_COUNTERFACTUAL_VETOES>