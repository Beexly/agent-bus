---
source: "2021 - Quantifying Hitter Plate Discipline in Major League Baseball - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Carnegie Mellon Sports Analytics Conference/2021"
pages: 7
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4196
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about quantifying hitter plate discipline in MLB, specifically the EAGLE metric. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully analyze the source text and produce a rigorous response.

Key elements from source:
- Paper: "Quantifying Hitter Plate Discipline in Major League Baseball" from Carnegie Mellon Sports Analytics Conference 2021
- Pages: 7 (though text shows pages 1-10, user says PAGES: 7)
- Uses Statcast data 2017-2021 (abstract says 2017-2021, methods says 2019-2020 for scraping - need to note this discrepancy)
- xgboost model to predict likelihood of each possible outcome from swing and not swinging
- Expected runs scored in inning
- EAGLE: Expected Additional runs Gained by Looking/swinging Estimate
- Decision tree: take (ball/strike) vs swing (miss, foul, out, single, double, triple, home run) = 9 outcomes
- Run expectancy from baseballR package
- Logistic model for strike probability: AUC 0.976, variables x, z, x^2, z^2, x*z, top/bottom of strikezone
- xgboost classification for swing outcomes
- Table 1 shows confusion matrix of outcome probabilities
- EAGLE formula: difference between decision taken and other choice, averaged over all pitches
- Correlations: EAGLE vs walk rate 0.563, EAGLE vs O% 0.683, EAGLE vs OPS 0.461, O% vs OPS -0.104
- 10th percentile EAGLE -> OPS .705 current, .739 next year; 90th percentile -> .808 current, .795 next year
- Best/worst players tables
- Limitations: run expectancy doesn't account for current hitter ability; uses full-season stats (predictive limitation)
- Visual function references: Laby et al. [5], Liu et al. [6], Kutscher et al. [7] fatigue after stimulants banned 2005

I need to be careful with page citations. The source text has page markers at bottom: page 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. But user says PAGES: 7. I should cite [PAGE N] based on the visible page numbers in the text. Since the text shows page numbers 1-10, I'll cite those exact markers where content appears.

Wait, the user says "PAGES: 7" but the source text has 10 pages visible. I should cite exact page markers from the text. Let me map content to pages:

Page 1: Abstract, Introduction start, plate discipline intro, O-Swing/Z-Swing flaws, visual function intro
Page 2: Methods start, decision tree, Figure 1, run expectancy, baseballR package, nine outcomes
Page 3: Model variables, pitch info, situational variables, batter/pitcher ability stats, zone-grouped stats, logistic model for strike probability AUC 0.976
Page 4: Figure 2, xgboost model, confusion matrix Table 1 description
Page 5: Table 1, combining outputs, EAGLE definition, example swing 0.2 vs take -0.05
Page 6: Results start, EAGLE vs walk rate 0.563, EAGLE vs O% 0.683, Figure 3, Figure 4, Tables 2 and 3 (best/worst), stability Figure 5
Page 7: EAGLE vs OPS, correlation .461 vs O% vs OPS -.104, percentiles OPS .705/.808 current, .739/.795 next year, Figure 6
Page 8: Conclusions, limitations, applications
Page 9: References start
Page 10: References end

Wait, looking at the text, page numbers appear at bottom of sections. Let me trace:
- After abstract/intro: "1" appears
- After methods start: "2" appears
- After model variables: "3" appears
- After logistic model: "4" appears
- After Table 1: "5" appears
- After results start/stability: "6" appears
- After EAGLE vs OPS: "7" appears
- After conclusions: "8" appears
- References: "9" appears
- End: "10" appears

So I'll cite [PAGE 1] through [PAGE 10] as appropriate.

Now for the XML sections:

1. THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. I need to derive the EAGLE metric mathematically, discuss gray zones (discrepancy between abstract 2017-2021 vs methods 2019-2020, run expectancy limitations, xgboost confusion matrix interpretation, EAGLE not measuring actual outcomes, etc.)

2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations, units, page citations, breakdown. I need to write out:
- Run expectancy RE(state)
- Decision value V_swing, V_take
- EAGLE per pitch and season average
- Logistic strike probability model
- xgboost classification
- Correlation coefficients
- Units: runs (dimensionless expected value), probabilities [0,1], AUC unitless, OPS dimensionless
- Breakdown regimes: small sample, non-stationarity, full-season stats leakage for prediction

3. RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Trace from expected points added (football) [8], baseballR [9], meta-analytics [10], Vock & Vock causal inference [4], McShane et al. [3], visual function [5,6,7], fatigue after 2005 stimulant ban. Multi-week traps: fatigue accumulates over season, visual decline, trailing 100 games vs full season.

4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is about hitters under pressure regressing to habits, counter-traps (pitchers exploiting known EAGLE weaknesses), clock (game situation, pace, fatigue over season). Need to connect to paper's limitations.

5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: exit velocity, launch angle, barrel%. Biomechanical: visual function, oculomotor, fatigue. Weather: not directly in paper but pitch movement (spin rate, horizontal/vertical movement) affected by weather; strikezone top/bottom by batter height. Need to argue veto conditions.

6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need 3 counterfactual veto scenarios where EAGLE would fail or be vetoed, with predictions.

Word count: >=1000 words total across sections, with THINK_TRACE >=400 words.

Let me start drafting carefully. I must avoid betting lines completely. No spreads, totals, moneylines, odds. I can mention probabilities but not betting odds.

I need to be precise with LaTeX. Let's formulate:

State space: $s = (c, o, b)$ where $c$ = count, $o$ = outs, $b$ = base runners.
Run expectancy: $RE(s) \in \mathbb{R}$ (expected runs, unit: runs).
For pitch $i$, pre-decision state $s_i$.

Take branch: $Y_i^{take} \in \{ball, strike\}$.
$P(strike | x_i, z_i, top_i, bottom_i)$ via logistic regression:
$\text{logit}(P(strike_i)) = \beta_0 + \beta_1 x_i + \beta_2 z_i + \beta_3 x_i^2 + \beta_4 z_i^2 + \beta_5 x_i z_i + \beta_6 top_i + \beta_7 bottom_i$
AUC = 0.976 [PAGE 3].

Swing branch: $Y_i^{swing} \in \{miss, foul, out, 1B, 2B, 3B, HR\}$.
$xgboost$ outputs $\hat{p}_{ik} = P(Y_i^{swing} = k | \text{features})$.

Change in run expectancy: $\Delta RE_{ik} = RE(s_{ik}) - RE(s_i)$.

Expected run value:
$V^{take}_i = \sum_{j \in \{ball, strike\}} P(Y_j^{take}) \Delta RE_{ij}$
$V^{swing}_i = \sum_{k \in \{miss,\dots,HR\}} \hat{p}_{ik} \Delta RE_{ik}$

EAGLE per pitch: $e_i = V^{chosen}_i - V^{other}_i$ where chosen is swing or take.
Season EAGLE: $\bar{e} = \frac{1}{N} \sum_{i=1}^N e_i$ [PAGE 5].

Units: runs per pitch, averaged over pitches. Correlation coefficients unitless. OPS unitless.

Breakdown: small $N$ (rookie, limited PAs), non-stationarity (pitcher quality changes), full-season feature leakage (predictive model uses current season stats to predict same-season OPS; for next-year need trailing 100 games) [PAGE 8].

Now THINK_TRACE >=400 words. I'll write a deep derivation and audit gray zones:
- Abstract claims 2017-2021 but Methods says data scraped 2019-2020 [PAGE 3]; results mention 2016-2019 [PAGE 6]. Temporal mismatch gray zone.
- EAGLE is counterfactual: measures decision quality, not actual outcome [PAGE 5]. This means a good decision can have bad outcome (weak contact on good pitch) and vice versa. Gray zone: separates process from outcome but may undervalue hitters who damage good pitches.
- Run expectancy limitation: doesn't account for current hitter ability, underestimates good hitters, overestimates bad [PAGE 8]. This creates state-dependent bias.
- xgboost confusion matrix: rows = predicted, columns = actual? Table 1 description: "true outcomes being the columns and the average predicted probabilities given in the rows" [PAGE 4]. This is a transposed confusion matrix / probability calibration table. Gray zone: diagonal dominance is modest (e.g., actual miss row predicts miss 0.41, foul 0.33), showing high outcome entropy; swing outcome prediction is noisy.
- EAGLE vs OPS correlation .461 vs O% vs OPS -.104 [PAGE 7]. But OPS correlation doesn't imply causation; EAGLE may proxy for overall hitting ability because better hitters see better pitches or have better count management.
- Percentile OPS projections: 10th .705 current/.739 next, 90th .808 current/.795 next [PAGE 7]. Note regression to mean: 90th percentile drops next year, 10th rises. Suggests EAGLE has predictive skill but also mean reversion.

RETROCAUSAL_GENEALOGY:
- Lineage: Expected Points Added (EPA) in football [8] -> run expectancy in baseball. baseballR [9] for run expectancy matrices. Meta-analytics [10] for stability. Vock & Vock [4] causal inference/g-computation for plate discipline effect on OPS (+0.068 OPS). McShane et al. [3] hierarchical Bayesian hitting metrics. Visual function lineage: Laby et al. [5] visual function and batting performance; Liu et al. [6] oculomotor abilities; Kutscher et al. [7] fatigue/seasonal decline post-2005 stimulant ban.
- Multi-week traps: fatigue accumulates over weeks/months; visual function declines over season [PAGE 1]; using full-season stats for prediction leaks future information or misses recent form [PAGE 8]; trailing 100 games recommended but not implemented. Multi-week trap: early-season EAGLE may be high due to fresh vision, late-season declines due to fatigue, causing false stability if sampled only at endpoints.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under high leverage (late innings, close count), hitters regress to habitual chase or take patterns. EAGLE averages over all pitches, masking crisis-specific decay.
- Counter-trap: Pitchers with scouting reports can exploit a hitter's EAGLE profile (e.g., high chase on sliders low-away) by pitching to weaknesses. EAGLE is hitter-centric, not adaptive to pitcher counter-strategy.
- Clock: Game clock/pitch clock? Not in MLB 2021. But "clock" = game situation clock (outs, inning, count) and seasonal clock (fatigue over weeks). EAGLE incorporates count/outs/runners but not time-of-day, weather, or days-off.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Pitch velocity, spin rate, movement, exit velocity, launch angle, barrel percentage. These are physical inputs to xgboost. Veto: if spin rate or movement data is missing/mis-calibrated (Statcast calibration drift), swing outcome probabilities are unreliable.
- Biomechanical layer: Visual function, oculomotor abilities, batter height (strikezone top/bottom). Veto: if visual acuity declines (fatigue) or strikezone top/bottom mis-estimated for unusual batter height, logistic strike model degrades (AUC 0.976 is league average, not individual).
- Weather layer: Not explicitly modeled. Air density affects pitch movement and carry; humidity affects grip. Veto: extreme weather (high heat/humidity, cold) alters pitch movement distribution not captured by x,z,spin features if Statcast movement is raw not adjusted.
- Adjudication: EAGLE should be vetoed when physical sensor calibration is suspect, biomechanical state (visual fatigue) is off-baseline, or weather regime shifts pitch physics outside training distribution.

RLVR_COUNTERFACTUAL_VETOES: Need 3 verifiable scenarios + predictions.
Scenario 1: Rookie with <100 PAs. Full-season batter ability stats (BA, OBP, SLG) are high variance. EAGLE prediction of future OPS unstable. Prediction: EAGLE-OPS correlation drops below 0.20 for rookies; veto if PAs < 150.
Scenario 2: Late-season fatigue (September). Visual function decline [PAGE 1]. EAGLE computed over full season masks August/September decay. Prediction: September EAGLE is 15-25% lower than April EAGLE for same hitter; using full-season EAGLE to predict October postseason performance overestimates discipline by ~0.015 runs/pitch.
Scenario 3: Extreme weather / calibration drift. Statcast spin rate or movement outlier (e.g., cold month with high drag). xgboost trained on 2019-2020 distribution sees OOD pitch. Prediction: swing outcome probability entropy increases; EAGLE standard error doubles; veto if feature z-score > 3.0 on movement/spin.

Wait, I need to make sure I don't invent fake ratios. These predictions are framed as testable hypotheses, not fake equations. That's fine.

Word count: Need >=1000 words total. THINK_TRACE alone >=400. Let me ensure each section is substantial.

Let me draft now, being careful with citations and verbatim quotes where useful.

I need to cite exact [PAGE N] markers. The text has page numbers embedded. I'll use them.

Verbatim quotes:
- "EAGLE does not measure the actual outcomes of the swing - EAGLE does not measure hitting ability, simply the ability to swing at the best pitches." [PAGE 5]
- "the run expectancy metric doesn’t account for current hitter ability, thus underestimating the current run expectancy for good hitters, and overestimating it for bad hitters." [PAGE 8]
- "our prediction models use full-seasons hitting and pitching statistics, which is fine for an explanatory model, but if we would like to use EAGLE as a predictive tool, we would need to convert those to averages over the trailing 100 games of plate appearances" [PAGE 8]
- "Over the season, eye-quality declines, probably due to fatigue, an effect that was pronounced after stimulants were banned in 2005" [PAGE 1]
- "The model has an AUC of 0.976" [PAGE 3]
- Table 1 description: "true outcomes being the columns and the average predicted probabilities given in the rows" [PAGE 4]

Now let's write. I'll aim for about 1300-1500 words total to be safe.

Structure:
<THINK_TRACE> ... (~450 words) </THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS> ... (~350 words) </SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY> ... (~250 words) </RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND> ... (~200 words) </RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION> ... (~250 words) </CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES> ... (~200 words) </RLVR_COUNTERFACTUAL_VETOES>

Total should exceed 1000.

Let me write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
The EAGLE metric is constructed as a counterfactual decision-value difference at the pitch level, not as an outcome-based hitting stat. Let $s_i = (c_i, o_i, b_i)$ denote the pre-pitch state: count $c_i$, outs $o_i$, and base-runner configuration $b_i$. The run-expectancy operator $RE: \mathcal{S} \rightarrow \mathbb{R}$ maps each state to expected runs scored for the remainder of the inning, drawn from the baseballR package [PAGE 2]. For every pitch $i$, the hitter faces a binary action $a_i \in \{swing, take\}$. Under $take$, there are exactly two terminal events: called ball or called strike, each producing a successor state $s'_{i,j}$ and a run-expectancy delta $\Delta RE_{i,j} = RE(s'_{i,j}) - RE(s_i)$. Under $swing$, the terminal space expands to seven events $\{miss, foul, out, 1B, 2B, 3B, HR\}$, each with its own $\Delta RE_{i,k}$. The expected run value of taking is $V^{take}_i = \sum_{j\in\{ball,strike\}} P(Y_j^{take}\mid x_i,z_i,top_i,bottom_i)\,\Delta RE_{i,j}$; the expected run value of swinging is $V^{swing}_i = \sum_{k} \hat{p}_{ik}\,\Delta RE_{i,k}$, where $\hat{p}_{ik}$ are xgboost class probabilities [PAGE 4-5]. EAGLE for pitch $i$ is $e_i = V^{chosen}_i - V^{other}_i$, and seasonal EAGLE is $\bar{e} = N^{-1}\sum_{i=1}^{N} e_i$ [PAGE 5]. The authors explicitly state that EAGLE “does not measure the actual outcomes of the swing… simply the ability to swing at the best pitches” [PAGE 5].

Gray-zone audit. First, a temporal mismatch exists: the abstract claims Statcast data from 2017–2021, while Methods states data were scraped from 2019–2020 seasons [PAGE 3], and Results tables list 2016–2019 [PAGE 6]. This is not a typo-level discrepancy; it changes which pitching/hitting environments are in the training distribution. Second, the logistic strike model achieves AUC = 0.976 using pitch coordinates and strike-zone top/bottom [PAGE 3], but AUC is a population ranking metric; it does not guarantee calibration for extreme batters (e.g., unusually tall or short hitters whose personal strike-zone boundaries deviate from league-average top/bottom). Third, Table 1 is not a standard confusion matrix: “true outcomes being the columns and the average predicted probabilities given in the rows” [PAGE 4]. Diagonal entries are modest (e.g., actual miss rows predict miss at 0.4098 and foul at 0.3284), indicating high conditional entropy in swing outcomes. xgboost therefore ranks outcomes but cannot sharply resolve them, propagating uncertainty into $V^{swing}_i$. Fourth, EAGLE correlates with OPS at 0.461 while O% correlates at -0.104 [PAGE 7], yet OPS itself is a function of outcomes EAGLE excludes, so part of this correlation may reflect the fact that better hitters generate better counts and see more hittable pitches—a selection effect the paper does not fully disentangle. Finally, the authors admit run expectancy “doesn’t account for current hitter ability,” systematically biasing value estimates for good and bad hitters [PAGE 8], and that full-season statistics used as features leak explanatory information into what the authors frame as prediction; they recommend trailing-100-game averages instead [PAGE 8]. These gray zones imply EAGLE is strongest as a process diagnostic and weaker as a blanket forecasting tool without stratification by sample size, visual fatigue, and environmental calibration.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units:

State space: $s_i=(c_i,o_i,b_i)\in\mathcal{S}$. Run expectancy $RE(s_i)$ is measured in runs (expected value dimension), non-negative, bounded by roughly 0 to 4.5 depending on base-out state [PAGE 2].

Logistic strike-probability model [PAGE 3]:
\[
\text{logit}\bigl(P(Y_i^{take}=strike)\bigr) = \beta_0 + \beta_1 x_i + \beta_2 z_i + \beta_3 x_i^2 + \beta_4 z_i^2 + \beta_5 (x_i z_i) + \beta_6\,top_i + \beta_7\,bottom_i,
\]
where $x_i,z_i$ are plate-crossing coordinates (feet), $top_i,bottom_i$ are batter-specific strike-zone boundaries (feet). Reported AUC = 0.976 (unitless, rank-discrimination only). Breakdown regime: individual batters whose physical strike-zone deviates substantially from league-average top/bottom are mis-calibrated because the model uses league-average zone boundaries as features rather than a batter-specific latent zone.

Swing-outcome xgboost operator [PAGE 4]:
\[
\hat{\mathbf{p}}_i = \text{xgboost}(\text{pitch}_{i}, \text{situation}_i, \text{pitcher}_{i}, \text{batter}_{i}) \in \Delta^{6},
\]
mapping to the 7-simplex over $\{miss, foul, out, 1B, 2B, 3B, HR\}$. Input units: velocity (mph), spin rate (rpm), horizontal/vertical movement (inches), effective velocity (mph), count (categorical), outs $\{0,1,2\}$, handedness (binary), season BA/OBP/SLG (proportions), IP/ERA/GB-FB/WHIP/K%/BB% (mixed units). Confusion structure from Table 1 [PAGE 5]: for actual $miss$, predicted $P(miss)=0.4097761$, $P(foul)=0.3283625$; for actual $homerun$, predicted $P(homerun)=0.05232918$. High off-diagonal mass implies outcome entropy is large; $V^{swing}$ inherits this variance.

Decision values [PAGE 5]:
\[
V^{take}_i = \sum_{j\in\{ball,strike\}} P(Y_j^{take}\mid\cdot)\,\Delta RE_{i,j},\qquad
V^{swing}_i = \sum_{k} \hat{p}_{ik}\,\Delta RE_{i,k}.
\]
Units of both: runs per pitch. EAGLE pitch-level:
\[
e_i = V^{a_i}_i - V^{\neg a_i}_i,\qquad \bar{e} = \frac{1}{N}\sum_{i=1}^{N} e_i,
\]
unit: average runs gained per pitch by decision quality. Example from text [PAGE 5]: if swinging yields 0.2 expected runs and taking yields -0.05, then $e^{swing}=0.25$ and $e^{take}=-0.25$.

Correlational results [PAGE 7]: $\rho(EAGLE, BB\%) = 0.563$; $\rho(EAGLE, O\%) = 0.683$; $\rho(EAGLE, OPS) = 0.461$ versus $\rho(O\%, OPS) = -0.104$. Percentile projections: 10th-percentile EAGLE $\rightarrow$ OPS 0.705 (current) / 0.739 (next year); 90th-percentile EAGLE $\rightarrow$ OPS 0.808 (current) / 0.795 (next year). OPS is unitless on a base scale roughly 0.500–1.100.

Breakdown/singularity regimes: (1) Small-$N$ singularity: batters with few plate appearances have high-variance $\hat{p}_{ik}$ and unstable seasonal $\bar{e}$. (2) Feature-leakage singularity: using full-season BA/OBP/SLG as predictors of same-season OPS creates explanatory, not predictive, validity; requires trailing-100-game averages for out-of-sample use [PAGE 8]. (3) State-dependence singularity: run expectancy omits hitter identity, under-valuing good hitters and over-valuing bad hitters in identical base-out-count states [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
EAGLE descends from the expected-points-added tradition in football, cited via Yurko, Ventura, and Horowitz’s nflwar framework [8] [PAGE 2], translated into baseball run expectancy through the baseballR package [9] [PAGE 2]. The causal inference lineage runs through Vock and Vock’s g-computation application to plate discipline, which estimated that improving O% and Z% could add 0.068 to OPS [4] [PAGE 1], and McShane et al.’s hierarchical Bayesian variable selection for hitting metrics [3] [PAGE 1]. The visual-motor lineage is deeper: Laby et al. found visual function predicts batting productivity but not contact rates [5] [PAGE 1]; Liu et al. showed oculomotor abilities predict professional batting performance [6] [PAGE 1]; and Kutscher et al. documented declining plate discipline over the season, exacerbated after the 2005 stimulant ban [7] [PAGE 1]. EAGLE therefore inherits a multi-decade debate over whether “plate discipline” is primarily a visual/oculomotor skill or a learned decision policy.

Multi-week traps. The paper’s own stability claim rests on year-over-year EAGLE correlation [PAGE 6], yet Kutscher et al. document within-season fatigue decay [7] [PAGE 1]. A hitter may show stable April–October endpoints while deteriorating through July–August; EAGLE averaged across the full season masks this intra-seasonal trajectory. A second multi-week trap is the feature construction: full-season 2019–2020 statistics are used both to train outcome probabilities and to evaluate the same seasons [PAGE 3, 8], creating a look-ahead bias that collapses when applied to early-season or in-season decisions. The authors explicitly concede that for prediction, full-season aggregates should be replaced by trailing-100-game plate-appearance averages [PAGE 8], but the published results do not implement that correction. A third trap is the visual-fatigue confound: if eye quality declines over the course of a season [PAGE 1], then a hitter’s EAGLE in September is not drawn from the same distribution as April, violating the stationarity assumption implicit in year-over-year stability charts.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. Under high-leverage states (late innings, close scores, two-strike counts), hitters do not optimize a static expected-runs objective; they regress to idiosyncratic crisis habits—expanding the zone, chasing off-speed pitches, or taking grooved fastballs out of fear. EAGLE averages $e_i$ over all pitches [PAGE 5], so a hitter who is disciplined in neutral counts but collapses with runners in scoring position receives the same seasonal scalar as one who is uniformly average. The metric therefore cannot isolate the recursive loop in which pressure degrades decision policy.

Counter-trap. EAGLE is hitter-centric and static: it summarizes how well a batter selects pitches but does not model the pitcher’s adaptive response. Once a hitter’s EAGLE profile is known (e.g., high chase rate on low-away sliders, low whiff rate on elevated fastballs), opposing pitchers can pitch to the measured weakness. This creates a game-theoretic counter-trap in which EAGLE’s explanatory value erodes over a series or season as scouting reports adjust. The paper acknowledges EAGLE could be used for scouting and planning how to pitch to each hitter [PAGE 8], but it does not model the resulting equilibrium shift.

Clock. Two clocks operate. The situational clock—count, outs, inning, runners—is embedded in run expectancy [PAGE 2]. The biological clock—seasonal visual fatigue and recovery [PAGE 1]—is not. EAGLE treats each pitch’s decision value as exchangeable within a season, ignoring whether the decision occurred in game 20 or game 140, after a day off or on the third game of a series. Without a time-decay or fatigue term, EAGLE overstates the stationarity of the decision policy it claims to measure.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. Pitch inputs include velocity, spin rate, horizontal/vertical movement, and effective velocity [PAGE 3]; swing outcomes depend on exit velocity, launch angle, and barrel percentage aggregated by Statcast zone [PAGE 3]. Veto condition: if Statcast calibration drifts (e.g., spin-rate sensor bias or movement-coordinate shift) across a homestand, the xgboost input distribution shifts out of the 2019–2020 training manifold, invalidating $\hat{p}_{ik}$. Because Table 1 already shows high off-diagonal probability mass [PAGE 5], additional sensor noise can push swing-outcome entropy beyond the regime where expected-run calculus is meaningful.

Biomechanical layer. The strike model uses batter-specific strike-zone top and bottom [PAGE 3], and the visual literature establishes that oculomotor and visual-function abilities determine pitch-selection accuracy independent of contact skill [5, 6] [PAGE 1]. Veto condition: for batters with documented visual decline (mid-to-late season fatigue [7] [PAGE 1]) or extreme anthropometry (strike-zone top/bottom far from league average), the logistic strike model’s AUC of 0.976 [PAGE 3] is a population average, not an individual guarantee. A mis-estimated zone boundary flips the take/swing value differential at the margin.

Weather layer. The model conditions on raw pitch location and movement but does not include air density, temperature, humidity, or wind [PAGE 3]. These alter pitch trajectory between release and plate and change batted-ball carry. Veto condition: extreme weather regimes (cold early-season games, high-humidity summer nights) move the physical pitch distribution outside the conditional range learned by xgboost; expected run values computed from mis-modeled pitch physics inherit a systematic bias.

Adjudication rule. EAGLE should be vetoed for a given hitter–game when any layer fails: (a) physical sensor z-score $>3.0$ on spin/movement, (b) biomechanical state off visual baseline (documented fatigue or atypical strike-zone anatomy), or (c) weather regime outside training envelope. Under veto, the decision value $e_i$ is not a valid estimate of runs gained by looking/swinging and should be replaced by a conservative prior or excluded from player-evaluation aggregates.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios:

Scenario 1 — Rookie small-sample singularity. A debutant with fewer than 100 plate appearances has season BA/OBP/SLG features drawn from a high-variance binomial process. Because xgboost conditions on these full-season batter-ability statistics [PAGE 3], the model’s swing-outcome probabilities are unstable, and seasonal EAGLE $\bar{e}$ has a standard error exceeding the interquartile range of established hitters. Verification: compute EAGLE split-half reliability (first 50 PAs vs. second 50 PAs); prediction: split-half correlation falls below 0.20, and the veto triggers automatically at PA < 150, reverting to a league-average decision prior.

Scenario 2 — Late-season visual-fatigue regime. Based on Kutscher et al.’s finding that plate discipline declines over the season, especially post-2005 [7] [PAGE 1], compare April EAGLE to September EAGLE for the same hitter. Verification: regress monthly EAGLE on days since season start controlling for opponent quality. Prediction: September EAGLE is 15–25% lower than April EAGLE for hitters above age 30; using full-season EAGLE to project postseason performance overestimates discipline value by roughly 0.010–0.020 runs per pitch. Veto: exclude September plate appearances from postseason projection models.

Scenario 3 — Out-of-distribution pitch physics. A cold-weather series produces spin rates and vertical movement beyond the 2019–2020 training envelope. Verification: flag pitches where movement or spin z-scores exceed 3.0 relative to the training distribution and compute EAGLE only on flagged vs. unflagged subsets. Prediction: flagged pitches exhibit double the standard error of $V^{swing}$ and EAGLE correlations with subsequent OPS drop by at least half. Veto: any game with >10% of pitches flagged as out-of-distribution has its EAGLE values suppressed from player-evaluation leaderboards.
</RLVR_COUNTERFACTUAL_VETOES>