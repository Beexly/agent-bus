---
source: "2024 - Evaluating plate discipline in Major League Baseball with Bayesian Additive Regression Trees - Yee et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Quantitative Analysis in Sports/2024"
pages: 23
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6806
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper about evaluating plate discipline in MLB using Bayesian Additive Regression Trees. The output must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to be very careful about the page citations. The source text includes page markers like "> **6 —**", "> **7 —**", etc. I should cite these as [PAGE 6], [PAGE 7], etc. Let me trace through the text to identify page numbers accurately.

Looking at the source:
- Abstract is on page 5 (J. Quant. Anal. Sports 2024; 20(1): 5–20)
- Page 6 marker appears after introduction start
- Page 7 marker after Figure 1 caption
- Page 8 marker after Figure 2 caption
- Page 9 marker after Related work discussion
- Page 10 marker after Uncertainty propagation section start
- Page 11 marker after Expected runs / Event probabilities
- Page 12 marker after Figure 4 / Batter evaluation case study
- Page 13 marker after Figure 5 discussion
- Page 14 marker after Figure 6 discussion
- Page 15 marker after Summary metrics / Table 1
- Page 16 marker after Figure 8 / expected runs lost
- Page 17 marker after Discussion / Limitations
- Page 18 marker after Appendix A.2
- Page 19 marker after Appendix A.3
- Page 20 marker end

I need to reference exact [PAGE N] markers. Let me map quotes to pages carefully:

- Page 5: Title, abstract, keywords, start of Introduction, motivating example (Kevan Smith). Actually looking at text: "J. Quant. Anal. Sports 2024; 20(1): 5–20" then abstract. Then "## **1 Introduction**". Then motivating example about Sept 5 2019 game. Then "> **6 —** R. Yee and S. K. Deshpande: Bayesian plate discipline". So the Smith example is on page 5-6. The text before the "> **6 —**" marker is page 5-6 boundary. Let's be careful: the marker "> **6 —**" appears after the Smith example discussion and traditional metrics paragraph start. So page 5 contains abstract, introduction start, motivating example. The marker "> **6 —**" appears right after "In this way, these" (cut off). So page 6 begins with "metrics reward batters...".

Wait, let me re-read:
```
Traditional plate discipline metrics compare the proportion of pitches batters swing at that are outside and inside the strike zone (Slowinski 2010). In this way, these 

> **6 —** R. Yee and S. K. Deshpande: Bayesian plate discipline 
```
So the break is mid-sentence. The text before the marker is end of page 5? Actually the marker indicates the page number at that point. So everything before "> **6 —**" is page 5. Everything after is page 6.

Then:
```
Figure 1: Kevan Smith swings at a fastball thrown just outside the lower right-hand corner of the strike zone.
```
This is on page 6? Actually Figure 1 appears after the page 6 marker.

Then:
```
> **7 —** R. Yee and S. K. Deshpande: Bayesian plate discipline **— 7**
```
Wait, the text says "> **7 —** R. Yee and S. K. Deshpande: Bayesian plate discipline **— 7**". So page 7 starts after that marker? Actually the marker appears after "elaborating on work begun in Deshpande and Wyner (2017)..." Let me look:

```
First, elaborating on work begun in Deshpande and Wyner (2017), we develop a Bayesian model of called strike probability that “borrows statistical strength” across umpires and players through flexible partial pooling of data. We demonstrate that this model, which is based on Bayesian additive regression trees [BART; (Chipman, George, and McCulloch 2010)] and accounts not only for pitch location but also player and umpire identities and game-state information, outperforms parametric and nonparametric competitors that only account for location. We develop a similar model for the probability that a batter makes contact. Finally, we developed a BART-based run expectancy model, which we call BARTxR, to predict the number of runs a team is expected to score following each pitch outcome as a function of in-game contextual variables like the count, number of outs, score differential, and baserunners. At a high-level BARTxR generalizes existing run expectancy measures like 

> R. Yee and S. K. Deshpande: Bayesian plate discipline **— 7**
```
Hmm, this marker is a bit garbled but indicates page 7. So page 7 contains the rest of contributions.

Then:
```
> **8 —** R. Yee and S. K. Deshpande: Bayesian plate discipline 
```
This appears after "Similarly, computing the expected number of runs scored after a take requires knowledge of... and the expected number of runs the batting team will score in the current half-inning after a called ball." Then Figure 2 caption. Then formal decomposition. So page 8 contains Figure 2, EVdiff definition, law of total expectation decomposition.

Then:
```
> **9 —** R. Yee and S. K. Deshpande: Bayesian plate discipline **— 9**
```
This appears after "Vock and Vock (2018)... make no attempt to determine the decision a batter _ought_ to make. In the context of Figure 2, these models try to predict which path a batter will follow. Our approach, in contrast, attempts to determine which path would most benefit the batter’s team." Then EAGLE discussion. So page 9 contains related work, EAGLE comparison, BART intro.

Then:
```
> **10 —** R. Yee and S. K. Deshpande: Bayesian plate discipline 
```
After BART intro and flexBART mention. Then Section 3 Modeling and uncertainty propagation. So page 10 contains BART details and start of Section 3.

Then:
```
> **11 —** R. Yee and S. K. Deshpande: Bayesian plate discipline **— 11**
```
After "where _i_ indexes the pitch..." and Figure 4. Actually it appears after the BayesREx equation discussion. Wait:
```
> R. Yee and S. K. Deshpande: Bayesian plate discipline **— 11**

**Figure 3:** Out-of-sample mean-squared error relative to a BART model fit with , , and  for strike (a) and contact (b) probabilities.
```
Hmm, the page 11 marker appears before Figure 3? Let's trace:
```
We completed our prior specification with the weakly informative choice _𝜏_<sup>2</sup> _𝛽_<sup>= 100.</sup> Compared to REx, which estimates run expectancy in each bin independently, BayesREx“borrows strength” across bins. 

Figure 4 shows the mean-squared error results...
```
Wait, there's a page break marker "> **11 —**" before Figure 3? Let me re-read carefully:

```
Figure 3 shows the performance of each model relative to BART(, , ) (i.e. the BART model fit with , , and  as predictors). 

Unsurprisingly... Figures illustrating the relative performance of all other models tested can be found in Appendix A.1. 

**Expected runs.** We conducted a comprehensive comparison... where _i_ indexes the pitch... We completed our prior specification... Compared to REx... 

> R. Yee and S. K. Deshpande: Bayesian plate discipline **— 11**

**Figure 3:** ...
```
Actually looking at the raw text:
```
> **11 —** R. Yee and S. K. Deshpande: Bayesian plate discipline **— 11**


**Figure 3:** Out-of-sample mean-squared error relative to a BART model fit with , , and  for strike (a) and contact (b) probabilities.
```
This seems like page 11 marker appears right before Figure 3. But earlier in the text, Figure 3 is referenced in Section 4.1. Let me look at the sequence:

After Section 3.2:
```
## **4 Results** 

Code to download... 

### **4.1 Model validation** 

We performed several cross-validation studies... 

**Strike and contact probabilities.** We compared... Figure 3 shows...

> **11 —** R. Yee and S. K. Deshpande: Bayesian plate discipline **— 11**


**Figure 3:** ...
```
So page 11 contains Figure 3 and the start of expected runs validation. Then:
```
Figure 4 shows...
```
Actually Figure 4 appears after page 11 marker too? No:
```
We find REx and BayesREx models perform similarly... Figure 4 shows the mean-squared error results...

> **12 —** R. Yee and S. K. Deshpande: Bayesian plate discipline 
```
Wait, I see:
```
> **12 —** R. Yee and S. K. Deshpande: Bayesian plate discipline 


**Figure 4:** Out-of-sample mean-squared error relative to BARTxR for seven REx models and seven BayesREx models.
```
Hmm no, looking again:

```
Figure 4 shows the mean-squared error results of each candidate model relative to BARTxR in 10-fold crossvalidation... 

> **12 —** R. Yee and S. K. Deshpande: Bayesian plate discipline 


**Figure 5:** Pitches faced by Mike Trout...
```
Wait, the text says:
```
Figure 4 shows the mean-squared error results of each candidate model relative to BARTxR in 10-fold crossvalidation. We find REx and BayesREx models perform similarly for each combination of predictors... On average, BARTxR was more accurate than RE24 by 0.009 runs per pitch...

> **12 —** R. Yee and S. K. Deshpande: Bayesian plate discipline 


### **4.2 Batter evaluation case study** 
```
Actually looking at the raw text provided:
```
> **12 —** R. Yee and S. K. Deshpande: Bayesian plate discipline 


**Figure 4:** Out-of-sample mean-squared error relative to BARTxR for seven REx models and seven BayesREx models.
```
No, I need to read exactly what's in the prompt. Let me scroll through:

After page 11 marker and Figure 3:
```
Figure 3 shows the performance...
...
**Expected runs.** We conducted a comprehensive comparison...
...
Figure 4 shows the mean-squared error results...
...
> **12 —** R. Yee and S. K. Deshpande: Bayesian plate discipline 


**Figure 4:** Out-of-sample mean-squared error relative to BARTxR for seven REx models and seven BayesREx models.
```
Wait, I see in the prompt:
```
> **12 —** R. Yee and S. K. Deshpande: Bayesian plate discipline 


**Figure 4:** Out-of-sample mean-squared error relative to BARTxR for seven REx models and seven BayesREx models.
```
Actually the prompt text has:
```
> **12 —** R. Yee and S. K. Deshpande: Bayesian plate discipline 


**Figure 4:** Out-of-sample mean-squared error relative to BARTxR for seven REx models and seven BayesREx models.
```
No, looking at the prompt exactly:

After "Figure 3 shows..." text, then:
```
> **11 —** R. Yee and S. K. Deshpande: Bayesian plate discipline **— 11**


**Figure 3:** Out-of-sample mean-squared error relative to a BART model fit with , , and  for strike (a) and contact (b) probabilities.
```
Then text continues about expected runs, BayesREx equation, etc. Then:
```
> **12 —** R. Yee and S. K. Deshpande: Bayesian plate discipline 


**Figure 4:** Out-of-sample mean-squared error relative to BARTxR for seven REx models and seven BayesREx models.
```
Wait, I see:
```
Figure 4 shows the mean-squared error results of each candidate model relative to BARTxR in 10-fold crossvalidation. We find REx and BayesREx models perform similarly for each combination of predictors... On average, BARTxR was more accurate than RE24 by 0.009 runs per pitch and RE288 by 0.007 runs per pitch...

> **12 —** R. Yee and S. K. Deshpande: Bayesian plate discipline 


**Figure 4:** Out-of-sample mean-squared error relative to BARTxR for seven REx models and seven BayesREx models.
```
Hmm, it's confusing but I'll cite pages based on the markers I can see.

Actually, let me just carefully note the page markers as they appear in order:

1. Title/header: J. Quant. Anal. Sports 2024; 20(1): 5–20 (Page 5 start)
2. > **6 —** (after traditional metrics paragraph start)
3. > **7 —** (after BARTxR intro, before run expectancy details) - actually shows "**— 7**"
4. > **8 —** (after Figure 2, before formal decomposition)
5. > **9 —** (after related work discussion of EAGLE)
6. > **10 —** (after BART section intro, before Section 3)
7. > **11 —** (after BayesREx prior discussion, before Figure 3)
8. > **12 —** (after expected runs validation results, before Batter evaluation case study? Actually I see "> **12 —**" before Figure 5 maybe?)
9. > **13 —** (after Trout panel discussion)
10. > **14 —** (after Figure 6 discussion)
11. > **15 —** (after Table 1 / Figure 7 discussion)
12. > **16 —** (after Figure 8 / expected runs lost)
13. > **17 —** (after Discussion limitations)
14. > **18 —** (after Appendix A.2)
15. > **19 —** (after Appendix A.3)
16. > **20 —** (end)

I will cite pages as [PAGE 5], [PAGE 6], etc., using the markers I see. Even if my mapping is slightly off, I should use the explicit markers in the text. The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I must use [PAGE N] format.

Now let's construct the response.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
I need to derive the EVdiff equation from the paper, discuss the three-step BART framework, uncertainty propagation via posterior samples, the conditioning assumption E[R | S, P, L, swing, outcome] = E[R | S, swing, outcome], disjoint datasets (2019 taken for strike, 2019 swung for contact, 2015-2018 for runs), BART probit links, partial pooling, BARTxR vs RE24 improvements (0.009 runs/pitch MSE), Trout case study, aggregate metrics (69.4% xR_optimal vs 68.4% traditional), year-to-year correlations (~0.72-0.79), runs added/lost small differences (~0.1 expected runs), limitations (pitch type/velocity/spin not included, trajectory unavailable pre-swing, confounding across batters). Gray zones: the assumption that personnel/location don't affect run expectancy conditional on game state may break with pitcher-batter matchup effects; probit link vs logit; disjoint seasons introduce temporal drift; first-game wOBA uses previous season league average (cold start); credal intervals overlap heavily so individual batter ranking is noisy; xR_optimal depends on posterior mean but posterior can be symmetric near zero (low leverage).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations.
Define:
- S = game state (count, outs, baserunners, score differential, inning, top/bottom)
- P = personnel (batter, catcher, pitcher, umpire, handedness, wOBA quality)
- L = pitch location (plate_x, plate_z)
- swing ∈ {0,1}
- contact ∈ {0,1} if swing=1, NA otherwise
- strike ∈ {0,1} if swing=0, NA otherwise
- outcome = (contact, strike)
- gstate = post-outcome game-state category
- R = runs scored in remainder of half-inning

Equation (1) from paper (though text has blanks, I can reconstruct formally):
E[R | S, P, L, swing=1] = P(contact=1 | S,P,L,swing=1) * E[R | S,P,L,swing=1,contact=1] + P(contact=0 | S,P,L,swing=1) * E[R | S,P,L,swing=1,contact=0]

E[R | S, P, L, swing=0] = P(strike=1 | S,P,L,swing=0) * E[R | S,P,L,swing=0,strike=1] + P(strike=0 | S,P,L,swing=0) * E[R | S,P,L,swing=0,strike=0]

EVdiff = E[R | S,P,L,swing=1] - E[R | S,P,L,swing=0]

xR_optimal = 1{EVdiff > 0}

Uncertainty propagation: posterior samples θ^(s) ~ p(θ | data), compute EVdiff^(s) for each sample, probability swing optimal = (1/M) Σ 1{EVdiff^(s) > 0}. 90% CI from 5% and 95% quantiles.

BART: sum of binary regression trees, probit link for strike/contact. Disjoint datasets: N_taken = 380,654 (2019 taken), N_swung = 341,725 (2019 swung), N_runs = 2,853,912 (2015-2018).

BARTxR assumption: E[R | S, P, L, swing, outcome] = E[R | S, swing, outcome]. This is weaker than RE24's E[R | outs, baserunners].

RE24 comparison: BARTxR more accurate by 0.009 runs/pitch vs RE24 (1.8% MSE improvement), 0.007 vs RE288 (1.4%).

Units: runs (dimensionless count), probability [0,1], MSE in runs^2, credible intervals in probability or runs.

Breakdown regimes: when |EVdiff| ≈ 0 (low leverage), posterior symmetric around zero, decision uninformative; when posterior samples of xR_optimal are mixed, high uncertainty; small sample batters (<1000 pitches) excluded from app; cold start wOBA for first game.

RETROCAUSAL_GENEALOGY: Historical lineage.
- Slowinski (2010) traditional O-Swing%/Z-Swing% [PAGE 6]
- Deshpande and Wyner (2017) hierarchical Bayesian pitch framing [PAGE 7]
- Chipman, George, McCulloch (2010) BART [PAGE 9]
- Tango, Lichtman, Dolphin (2007) RE24 [PAGE 7]
- Arthur (2014a,b) strike probability then swing prediction [PAGE 9]
- Vock and Vock (2018) causal inference, g-computation [PAGE 9]
- Mould and Anderson (2022a,b) EAGLE model, gradient-boosted trees, no uncertainty propagation [PAGE 9-10]
- Murray (2021) multinomial logistic BART [PAGE 17]
- Brill, Deshpande, Wyner (2022) running wOBA [PAGE 5-6]
- Jensen, Shirley, Wyner (2009) Bayesball spatial aggregation [PAGE 17]
- Green and Daniels (2022) umpire adaptive heuristics [PAGE 6]
- Chen, Moskowitz, Shue (2016) umpire previous calls/gambler's fallacy [PAGE 6]
Multi-week traps: year-to-year correlation only moderate (~0.72-0.79), so a batter's xR_optimal% in one week is not stable; partial pooling shrinks extreme estimates toward mean, causing regression to the mean over multi-week windows; low-leverage pitches dominate early season counts, inflating apparent discipline without run impact.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under pressure (two strikes, close game), batters regress to swing-to-avoid-looking-strike habit, violating xR_optimal. Paper notes batters may be more aggressive with two strikes [PAGE 6].
- Counter-trap: pitcher targeting locations where batter consistently makes suboptimal decisions; batter anticipates and adjusts, creating a game-theoretic loop. Paper suggests pitchers can target locations where batter likely costs runs [PAGE 16-17].
- Clock: game-state clock (outs, inning, score differential) changes the value of contact vs take; with two outs and few baserunners, EVdiff compresses toward zero because expected runs from positive and negative outcomes converge [PAGE 14]. This temporal pressure means optimal decision is path-dependent on the inning clock, not just pitch location.
- Theory of mind: batter models umpire's strike zone (frameable catcher, umpire identity), umpire models batter's aggression, pitcher models batter's discipline. The BART partial pooling captures some of this via personnel effects in strike/contact models but not in run expectancy (strong assumption).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical veto: pitch trajectory is unavailable to batter before decision (paper acknowledges this limitation, [PAGE 17]); using plate_x/plate_z at front edge assumes perfect information that batter doesn't have at swing initiation. This is a physical information veto: the model conditions on L at plate crossing, but the batter decides earlier based on early trajectory.
- Biomechanical veto: contact probability model is binary (contact/miss), ignoring foul balls, launch quality, batted-ball distribution. A foul keeps the at-bat alive with same count (mostly) but is modeled as contact; a hard-hit out is same contact probability as weak grounder in run expectancy? BARTxR conditions on contact vs miss only, not hit quality. This is a biomechanical outcome aggregation veto.
- Weather veto: no weather/wind/air density variables in models [PAGE 17]. Fly ball run expectancy changes with wind/temp; not modeled.
- Umpire physical stance/catcher framing: partially captured by umpire/catcher identities but not biomechanics of framing.
- Verdict: The framework is not veto-proof; it assumes location at plate is sufficient and ignores pre-swing trajectory, pitch type/velocity/spin, and weather. Breakdown when pitch movement is late-breaking or environmental conditions alter flight.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning via Verifiable Rewards? Or just counterfactual veto scenarios. I'll frame as verifiable counterfactuals.
Scenario 1: Cold-start batter quality. For a batter's first game of season, wOBA set to league average from previous season [PAGE 5-6]. Veto: if a rookie or significantly improved batter faces a high-leverage pitch in game 1, the model's personnel quality is mis-specified, causing EVdiff bias. Prediction: EVdiff will be systematically biased toward league-average contact/strike propensities, underestimating true swing value for breakout batters in April.
Scenario 2: Two-out, bases-empty low leverage. Paper notes EVdiff ≈ 0 when two outs and few baserunners [PAGE 14]. Veto: if |EVdiff| < 0.01 runs, the posterior is symmetric; any swing/take decision is statistically indistinguishable. Prediction: xR_optimal classification accuracy will drop to ~50% (coin flip) in this regime despite model certainty metrics showing dark shading if misread; credible intervals will straddle zero.
Scenario 3: Disjoint temporal training for run expectancy. BARTxR trained on 2015-2018, applied to 2019 [PAGE 5-6]. Veto: offensive environment shifts (juiced ball, rule changes) between training and test years induce distribution shift. Prediction: run expectancy predictions will be miscalibrated in 2019 if run scoring environment differs by >0.05 runs/game from 2015-2018 mean; BARTxR's 0.009 runs/pitch advantage over RE24 may vanish under domain shift.

Each scenario needs verifiable prediction.

Word count: Must be >= 1000 words total across sections. I'll aim for ~1300-1500 words.

No betting lines. No toy equations. Use real equations from paper or formal reconstructions. Use [PAGE N] markers.

Let me draft carefully.

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

I need to ensure exact verbatim quotes where citing pages. I can quote short phrases.

Let's write.

THINK_TRACE: >400 words.
I'll derive the law of total expectation decomposition, discuss disjoint datasets, posterior propagation, the partial pooling assumption, Trout case study details (12.3% strike prob for Kevan Smith example actually; wait that's Smith not Trout. Trout case study is separate). Gray-zone audit: the xR_optimal decision is based on posterior mean of EVdiff, but when posterior is symmetric around zero, the sign is arbitrary. The paper itself says Trout swung at pitches inside zone where model said take, but model was uncertain (EVdiff concentrated around zero) [PAGE 13]. This is a gray zone. Also aggregate metrics: 69.4% vs 68.4% [PAGE 15], difference only 1 percentage point. Runs added best vs worst only 0.1 expected runs [PAGE 16]. These are small effect sizes. Year-to-year correlation moderate [PAGE 15 Table 1]. So multi-week stability is weak.

SOURCE_OPERATORS_AND_EQUATIONS: LaTeX. I'll write out the equations. I need to cite pages for where these appear or are implied. The paper's Equation (1) is mentioned but the actual LaTeX is blank in the source text ("we need to compute ... we can decompose ... as [blank]"). However, I can formally reconstruct based on the text description. I'll state it's a formal reconstruction of the paper's Equation (1) and law of total expectation as described on [PAGE 8]. I'll be careful not to claim it's verbatim if it's blank, but I can present the formal structure described.

Units: runs, probability, runs/pitch.

Breakdown regimes: |EVdiff| ≈ 0; small sample batters; disjoint season domain shift.

RETROCAUSAL_GENEALOGY: trace from Slowinski 2010 to present, mention multi-week traps (year-to-year correlation decay, regression to mean via partial pooling).

RECURSIVE_THEORY_OF_MIND: crisis habit regression (two-strike aggression), counter-trap (pitcher exploitation), clock (inning state compresses EVdiff). Use terms carefully.

CROSS_LAYER_VETO_ADJUDICATION: physical (trajectory unavailable pre-swing), biomechanical (binary contact vs miss ignores hit quality/foul), weather (no environmental covariates). Verdict: not veto-proof.

RLVR_COUNTERFACTUAL_VETOES: three scenarios with predictions.

Word count check: I'll write generously.

Let's begin drafting. I must not mention betting lines. No spreads, totals, moneylines, odds. I can mention probability, credible intervals, expected runs. That's fine.

Make sure to cite [PAGE N] exactly. I'll reference pages where I saw markers.

Double-check page numbers from text:
- Page 5: Abstract, intro, Smith example (partially), traditional metrics start.
- Page 6: traditional metrics continued, contributions start, data/notation start (S, P, L definitions), swing/contact/strike definitions, wOBA running estimate.
- Page 7: contributions continued, BARTxR intro, RE24 generalization.
- Page 8: Figure 2, expected runs decomposition, EVdiff definition, law of total expectation.
- Page 9: related work (Arthur, Vock & Vock, EAGLE), BART intro.
- Page 10: BART details, flexBART, Section 3 uncertainty propagation start.
- Page 11: expected runs model assumptions (conditional independence), event probabilities (probit), Section 4.1 validation start, Figure 3.
- Page 12: expected runs validation results (BARTxR vs RE24), Figure 4, Batter evaluation case study start, Trout Figure 5.
- Page 13: Trout panels (b) and (c), uncertainty, low-and-away pitches.
- Page 14: Figure 6, two outs/few baserunners intuition, summary metrics start.
- Page 15: aggregate metrics (69.4%, 68.4%), Luplow/Alfaro, Figure 7, Table 1 year-to-year correlation.
- Page 16: expected runs added/lost, Figure 8, McCutchen/Alfaro, Discussion start.
- Page 17: Discussion implications, limitations (pitch type/velocity/spin, trajectory, functional predictors), future work.
- Page 18: Appendix A.2 stability, Table 1 mention.
- Page 19: Appendix A.3 figures 10-12.
- Page 20: end references.

I'll use these.

Now write the final output. Ensure word count >= 1000. Let's target around 1400.

I must be careful with LaTeX formatting: use \( \) or \[ \]. Use proper notation.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs a three-stage Bayesian decision pipeline. At pitch time t, the information state is tripled: game state S (count, outs, baserunners, score differential, inning, half-inning) [PAGE 5–6], personnel P (batter, catcher, pitcher, umpire, handedness, running wOBA quality) [PAGE 5–6], and pitch location L (plate_x, plate_z at the front edge of home plate) [PAGE 5–6]. The binary swing action a ∈ {0,1} branches into four terminal leaves shown in Figure 2 [PAGE 8]. If a = 1, the batter either makes contact (c = 1) or misses (c = 0). If a = 0, the umpire calls strike (s = 1) or ball (s = 0). Let R denote runs scored in the remainder of the half-inning. The optimal action maximizes E[R | S, P, L, a]. By the law of total expectation [PAGE 8], the swing value is E[R | S, P, L, a = 1] = P(c = 1 | S, P, L, a = 1) · E[R | S, P, L, a = 1, c = 1] + P(c = 0 | S, P, L, a = 1) · E[R | S, P, L, a = 1, c = 0]. The take value is E[R | S, P, L, a = 0] = P(s = 1 | S, P, L, a = 0) · E[R | S, P, L, a = 0, s = 1] + P(s = 0 | S, P, L, a = 0) · E[R | S, P, L, a = 0, s = 0]. The decision contrast is EVdiff = E[R | S, P, L, a = 1] − E[R | S, P, L, a = 0], and xR_optimal = 1{EVdiff > 0} [PAGE 8]. Because the three component models are fit on disjoint pitch subsets—380,654 taken pitches in 2019 for the strike model, 341,725 swung pitches in 2019 for the contact model, and 2,853,912 pitches from 2015–2018 for BARTxR [PAGE 5–6]—posterior draws can be multiplied and summed without covariance contamination [PAGE 10].

Gray-zone audit: (1) The run-expectancy conditioning assumption E[R | S, P, L, a, outcome] = E[R | S, a, outcome] [PAGE 10–11] is strong. It strips pitcher–batter matchup and location from the run branch, which breaks when a specific batter–pump pair generates non-exchangeable exit velocities or when location directly alters defensive positioning. (2) Posterior uncertainty is summarized by the proportion of draws with EVdiff > 0 and a 90% credible interval from the 5% and 95% quantiles [PAGE 10]. When the posterior is symmetric around zero—common inside the zone with two outs and empty bases [PAGE 13–14]—the sign of EVdiff is a coin flip, yet the model may still shade a pitch dark if the user misreads certainty as magnitude. (3) Aggregate effects are tiny: league-wide xR_optimal adherence is 69.4% versus 68.4% under the traditional heuristic [PAGE 15], and the best-to-worst batter spread in expected runs added is only about 0.1 runs per season [PAGE 16]. Credible intervals overlap heavily [PAGE 16, 19], so individual batter rankings are statistically fragile. (4) Year-to-year correlations for the xR_optimal proportion are only ~0.72–0.79 [PAGE 15 Table 1], implying multi-week regression to the mean under partial pooling; a batter who looks disciplined in week 3 is not reliably disciplined in week 7. These are the breakdown regimes: low leverage (|EVdiff| ≈ 0), cold-start personnel quality (first game uses prior-season league average wOBA [PAGE 5–6]), and temporal domain shift (BARTxR trained on 2015–2018 but applied to 2019 [PAGE 5–6]).
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and breakdown regimes.

Notation:
- \(\mathcal{S} = \{\text{count, outs, baserunners, score differential, inning, half-inning}\}\) (categorical/discrete game state) [PAGE 5–6].
- \(\mathcal{P} = \{\text{batter, catcher, pitcher, umpire, handedness, running wOBA}\}\) (personnel and quality covariates) [PAGE 5–6].
- \(\mathcal{L} = (\text{plate\_x}, \text{plate\_z})\) in feet or normalized Statcast coordinates at the front edge of home plate [PAGE 5–6].
- \(a = \text{swing} \in \{0,1\}\); \(c = \text{contact} \in \{0,1\}\) if \(a=1\), else NA; \(s = \text{strike} \in \{0,1\}\) if \(a=0\), else NA [PAGE 6].
- \(R =\) runs scored by batting team in remainder of half-inning (unit: runs, dimensionless count) [PAGE 8].

Component models (BART with probit links; fit via flexBART) [PAGE 9–10]:
1. Called-strike probability: \(\pi_s(\mathcal{S}, \mathcal{P}, \mathcal{L}) = P(s = 1 \mid \mathcal{S}, \mathcal{P}, \mathcal{L}, a = 0)\), fit on 380,654 taken 2019 pitches [PAGE 5–6].
2. Contact probability: \(\pi_c(\mathcal{S}, \mathcal{P}, \mathcal{L}) = P(c = 1 \mid \mathcal{S}, \mathcal{P}, \mathcal{L}, a = 1)\), fit on 341,725 swung 2019 pitches [PAGE 5–6].
3. Run expectancy: \(\mu(\mathcal{S}, a, o) = E[R \mid \mathcal{S}, a, o]\) under the conditional-independence restriction \(E[R \mid \mathcal{S}, \mathcal{P}, \mathcal{L}, a, o] = E[R \mid \mathcal{S}, a, o]\), fit on 2,853,912 pitches from 2015–2018 (BARTxR) [PAGE 10–11].

Law of total expectation (formal reconstruction of the paper’s Equation (1) structure as described on [PAGE 8]):
\[
E[R \mid \mathcal{S}, \mathcal{P}, \mathcal{L}, a = 1] =
\pi_c \cdot \mu(\mathcal{S}, 1, c{=}1) + (1 - \pi_c) \cdot \mu(\mathcal{S}, 1, c{=}0),
\]
\[
E[R \mid \mathcal{S}, \mathcal{P}, \mathcal{L}, a = 0] =
\pi_s \cdot \mu(\mathcal{S}, 0, s{=}1) + (1 - \pi_s) \cdot \mu(\mathcal{S}, 0, s{=}0).
\]

Decision contrast and optimal rule:
\[
\text{EVdiff} = E[R \mid \mathcal{S}, \mathcal{P}, \mathcal{L}, a = 1] - E[R \mid \mathcal{S}, \mathcal{P}, \mathcal{L}, a = 0] \quad [\text{runs}],
\]
\[
xR_{\text{optimal}} = \mathbb{1}\{\text{EVdiff} > 0\}.
\]

Uncertainty propagation [PAGE 10]: draw posterior samples \(\theta^{(m)}\), \(m = 1,\dots,M\), from the independent BART posteriors. Compute \(\text{EVdiff}^{(m)}\) for each draw by substituting the sampled intermediate probabilities and run expectancies. Then
\[
P(a = 1 \text{ optimal} \mid \text{data}) = \frac{1}{M}\sum_{m=1}^{M} \mathbb{1}\{\text{EVdiff}^{(m)} > 0\},
\]
and the 90% credible interval for EVdiff is the \([0.05, 0.95]\) empirical quantile of \(\{\text{EVdiff}^{(m)}\}\) [PAGE 10].

Validation metrics [PAGE 11–12]: out-of-sample mean squared error (Brier score) for probabilities in \(P^2\); run-expectancy MSE in \(\text{runs}^2\). BARTxR improves MSE by 0.009 runs/pitch versus RE24 (1.8% relative) and 0.007 runs/pitch versus RE288 (1.4% relative) [PAGE 12].

Aggregate summaries [PAGE 15–16]:
- Proportion xR_optimal: league mean 69.4% (90% CI reported per batter); traditional heuristic adherence 68.4%.
- Expected runs added: \(\sum_{i} \text{EVdiff}_i\) over the season; best–worst spread ≈ 0.1 expected runs [PAGE 16].
- Runs lost: \(\sum_i \min(0, \text{EVdiff}_i)\) for suboptimal choices [PAGE 16].

Breakdown / singularity regimes:
- Low leverage: \(|\text{EVdiff}| \approx 0\) runs; posterior symmetric about zero; \(P(a=1 \text{ optimal}) \approx 0.5\), decision uninformative despite dark shading in certainty plots [PAGE 13–14].
- Cold start: first game of season uses prior-season league-average wOBA for all players; personnel quality mis-specified until enough games accumulate [PAGE 5–6].
- Temporal domain shift: BARTxR trained on 2015–2018, deployed on 2019; offensive-environment drift invalidates the run-expectancy conditional distribution [PAGE 5–6, 17].
- Small-sample exclusion: Shiny app and summary metrics restrict to batters with ≥ 1000 pitches in 2019; lower-volume batters have no reliable xR_optimal estimate [PAGE 14–15].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The intellectual genealogy begins with traditional plate discipline: Slowinski (2010) defines O-Swing% and Z-Swing% under the implicit assumption that every pitch inside the zone should be swung at and every pitch outside taken [PAGE 6]. This paper explicitly rejects that rulebook rigidity, citing umpire non-adherence to the official strike zone, catcher framing (Deshpande and Wyner 2017 [PAGE 6–7]), batter age/ability bias (Kim and King 2014; Mills 2014 [PAGE 6]), umpire sequential dependence (Chen, Moskowitz, and Shue 2016 [PAGE 6]), and league review effects (Mills 2017 [PAGE 6]).

Methodologically, the framework descends from Chipman, George, and McCulloch (2010) BART [PAGE 9], adapted here through flexBART for high-cardinality categorical personnel [PAGE 9–10]. The called-strike model extends Deshpande and Wyner (2017)’s hierarchical Bayesian pitch-framing partial pooling across umpires and players [PAGE 7]. The run-expectancy model generalizes Tango, Lichtman, and Dolphin (2007) RE24, which conditions only on outs and baserunners [PAGE 7]; BARTxR weakens that to conditioning on the full game state \(\mathcal{S}\) while dropping \(\mathcal{P}\) and \(\mathcal{L}\) from the run branch [PAGE 10–11].

Competing decision frameworks are Arthur (2014a), who models strike probability then predicts swing behavior without optimizing run value, and Vock and Vock (2018), who use causal g-computation to ask “what if batter A imitated batter B?” but not what the batter ought to do [PAGE 9]. Most proximate is Mould and Anderson (2022a,b)’s EAGLE model, which also uses tree-based intermediate probabilities and a run-expectancy layer but (i) uses gradient-boosted trees rather than BART and (ii) makes no attempt to propagate uncertainty from intermediate estimates to the final decision [PAGE 9–10]. Yee and Deshpande’s key differentiator is Bayesian uncertainty propagation: posterior samples of strike probability, contact probability, and run expectancy are composed to yield a posterior over EVdiff and xR_optimal [PAGE 10].

Future methodological branches cited include Murray (2021) multinomial logistic BART for post-contact outcomes (foul, out, single, etc.) [PAGE 17] and Jensen, Shirley, and Wyner (2009) spatial aggregation for fielding, proposed as a template for marginalizing EVdiff over location and game state [PAGE 17].

Multi-week traps: Table 1 shows year-to-year correlations of roughly 0.72–0.79 for the xR_optimal proportion and traditional metrics [PAGE 15]. Because BART partial pooling shrinks extreme batters toward the league mean, a batter who appears highly disciplined in a three-week window will regress toward 69.4% in the next three-week window absent a true skill change. The league-wide gap between xR_optimal adherence (69.4%) and traditional adherence (68.4%) is only one percentage point [PAGE 15], so week-over-week fluctuations in either metric are dominated by noise and pitch-context confounding rather than discipline changes. The runs-added spread between best and worst batters is ≈ 0.1 expected runs over a full season [PAGE 16], meaning a multi-week sample contains almost no signal for ranking individual batters. Any system that gates playing time or coaching intervention on short-run plate-discipline rankings will overfit sampling variance.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and the game clock.

Crisis habit regression: batters do not optimize expected runs in isolation. The paper notes batters may be more aggressive with two strikes to avoid striking out looking [PAGE 6]. In a high-leverage crisis (late innings, close score, two strikes), the habitual policy shifts from run maximization to strike-avoidance. The BART contact model captures average contact propensity, but it does not model the batter’s own crisis utility function (e.g., chasing a home-run record, as Aaron Judge did in 2022 [PAGE 16–17]). Thus the regressed policy under crisis is systematically suboptimal relative to xR_optimal, not because of poor contact probability but because the objective itself has changed.

Counter-trap: the paper states pitchers can use the model to target locations where a batter is likely to make suboptimal swing decisions [PAGE 16–17]. This creates a recursive loop: the batter forms a belief about the pitcher’s targeting distribution, the pitcher forms a belief about the batter’s xR_optimal map, and both update. Because the model’s strike and contact probabilities condition on pitcher and batter identities [PAGE 5–6, 9], partial pooling already embeds some of this mutual modeling at the population level. However, the run-expectancy branch explicitly strips personnel and location [PAGE 10–11], so it cannot represent the counter-trap value of a pitch that induces a swing at a location where the batter’s contact probability is low but the pitcher’s expected run suppression is high. A full recursive theory of mind would require a dynamic game-theoretic layer absent here.

Clock: the game-state clock is outs, inning, score differential, and baserunners [PAGE 5–6]. The paper’s most intuitive clock effect appears in the Mike Trout case study: low-and-away pitches where xR_optimal = swing occur with two outs and few baserunners, whereas identical-looking locations with no outs elicit xR_optimal = take [PAGE 14]. The explanation is that expected runs from a good outcome and a bad outcome converge when the half-inning is nearly over; EVdiff compresses toward zero. Thus the optimal decision is path-dependent on the clock, not solely on pitch location. A batter using a static “swing at strikes, take at balls” heuristic ignores this clock compression and will make systematic errors in late-inning, low-run-expectancy states. The model’s posterior certainty can be high even when |EVdiff| is small [PAGE 13], so certainty ≠ importance under clock pressure.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto layers.

Physical veto (information timing): the strike and contact models condition on \(\mathcal{L}\), the pitch location as it crosses the front edge of home plate [PAGE 5–6]. The authors acknowledge this is physically unrealistic: a batter decides to swing before the pitch reaches the plate, based on early trajectory, not terminal location [PAGE 17]. A late-breaking slider or a pitch with deceptive tunneling can cross the plate in the zone but be un-hittable at swing initiation, or vice versa. VERDICT: veto not proven. The model is exposed to physical information leakage because \(\mathcal{L}\) is ex post available to the statistician but not to the batter at decision time.

Biomechanical veto (outcome aggregation): the contact model is binary (contact vs. miss) [PAGE 6, 9–10]. It collapses foul balls, weak pop-ups, line drives, and home runs into a single contact state. BARTxR then conditions on contact vs. miss only, not on batted-ball quality [PAGE 10–11]. A foul ball with two strikes preserves the at-bat; a hard-hit out and a weakly grounded out have identical run value only if the defensive outcome is identical, which it is not. This aggregation veto breaks when launch angle, exit velocity, or foul-tip frequency systematically vary by batter and location. The paper acknowledges this limitation and proposes augmenting the contact branch with multinomial post-contact outcomes via Murray (2021) [PAGE 17].

Weather veto: no weather, wind, temperature, or air-density covariates appear in any of the three BART models [PAGE 17]. Run expectancy for fly balls and the probability of extra-base hits are physically sensitive to atmospheric conditions; omitting them leaves environmental variance in the error term. In domed versus open-air games, or high-altitude versus sea-level parks, the same pitch location and game state can produce different run distributions.

Umpire/catcher biomechanics: catcher framing and umpire identity enter the strike model through personnel partial pooling [PAGE 7], but the physical biomechanics of framing (glove movement, receiving angle) are not modeled. VERDICT: the framework is not veto-proof. It holds only when pitch trajectory at the plate is a sufficient statistic for pre-swing information, when contact can be treated as a homogeneous state, and when environmental conditions are exchangeable across the training and test periods. Breakdown is expected in late-movement pitch regimes, extreme weather, or when batters exhibit strong launch-quality conditioning.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios and predictions.

Scenario 1: Cold-start personnel quality veto.
Setup: A batter’s first game of the 2019 season. Per the data construction, wOBA quality is set to the prior-season league average for every player before their first game [PAGE 5–6]. Construct a counterfactual in which a breakout rookie or a significantly improved batter faces a high-leverage pitch (e.g., two outs, bases loaded, tie game, bottom 9th) in that first game. Veto condition: if the true batter-specific contact or strike probability differs from the league-average-implied value by more than the posterior standard deviation, EVdiff is biased. Prediction: the model’s posterior mean contact probability will be shrunk toward the league mean, causing EVdiff to understate the value of swinging for above-average breakout batters and overstate it for below-average batters in April. Verifiable by comparing first-game EVdiff signs against post-season adjusted EVdiff for the same pitch types; a systematic sign flip rate above the nominal 5% level falsifies the cold-start assumption.

Scenario 2: Low-leverage symmetry veto.
Setup: Two outs, bases empty, any count, pitch near the zone edge. The paper notes that expected runs from good and bad outcomes converge in this state, making EVdiff ≈ 0 [PAGE 14]. Veto condition: define the veto region \(\{i : |\text{EVdiff}_i| < 0.01 \text{ runs}\}\). In this region, \(P(a = 1 \text{ optimal})\) should be statistically indistinguishable from 0.5 and the 90% credible interval should straddle zero. Prediction: any classifier that labels xR_optimal with confidence > 0.7 in this region is overconfident; empirical calibration will show Brier-score degradation and reliability-curve deviation from the diagonal. Verifiable by holding out all 2019 pitches meeting the two-out/bases-empty criterion, computing posterior calibration, and testing whether the observed frequency of swing-optimal draws equals 0.5 within sampling error.

Scenario 3: Temporal domain-shift veto.
Setup: BARTxR is trained on 2015–2018 pitches and applied to 2019 [PAGE 5–6]. Construct a counterfactual in which the 2019 offensive environment (home-run rate, league wOBA, run environment) shifts by more than 0.05 runs per game relative to the 2015–2018 training mean. Veto condition: run-expectancy predictions \(\mu(\mathcal{S}, a, o)\) become miscalibrated because the conditional distribution \(P(R \mid \mathcal{S}, a, o)\) has shifted. Prediction: the 0.009 runs/pitch MSE advantage of BARTxR over RE24 [PAGE 12] will shrink or reverse on 2019 data if the run environment differs materially from training. Verifiable by retraining BARTxR on 2015–2017 and testing on 2018 versus 2019; if out-of-sample MSE increases significantly from 2018 to 2019 while in-sample fit remains stable, temporal domain shift is confirmed and the 2019 plate-discipline rankings are not transportable.
</RLVR_COUNTERFACTUAL_VETOES>