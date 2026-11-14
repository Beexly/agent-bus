---
source: "Estimating locomotor demands during team play from broadcast-derived tracking data.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 13
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5597
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on a provided research paper about estimating locomotor demands from broadcast-derived tracking data. They have strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Important: The source text provided is a markdown version of a PDF with page numbers embedded. I need to cite exact [PAGE N] markers. Looking at the text, there are page numbers like "1", "2", etc. appearing in the flow. I need to map content to pages.

Let me trace pages:
- Page 1: Abstract, Introduction start, "1 Introduction", external load definitions, Halson (2014), internal/external load.
- Page 2: Optical tracking introduction, Prozone 1999, Cervone et al. (2016), Fernández et al. (2019), exclusivity and sparsity, broadcast-derived tracking, purpose of paper.
- Page 3: Data section, Chelsea FC 2014-15, 18 home games, 248 players, 10 Hz, 40x40m window, subtracks, 149,680 subtracks from 820 tracks, median subtrack length 17.0m, time 8.1s, Transfermarkt positions (defender 85, midfielder 85, forward 78), features constructed, Nadaraya-Watson smoother, accelerations >50 m/s² smoothed.
- Page 4: Player load metrics, Table 1 referenced, exploratory analysis, correlation between censored time and metrics, Pearson 0.596-0.998, MCAR assumption, scaling estimator Dc = Do * Tc/To (the text has some garbled LaTeX: Dc = Do TToc which clearly means Dc = Do * (Tc/To)), residuals negative, "players move faster when on camera."
- Page 5: Models section, linear regression model, gradient boosting xgboost, Table 1 content (metrics definitions).
- Page 6: Figure 1 (censored time vs acceleration), Figure 2 (residuals).
- Page 7: Models continued, subtrack vs game level, linear model no interactions, linear with interactions, random forest, training/test split (13 games train, 5 test, 361 train, 138 test), RMSPE and CV definitions.
- Page 8: Table 2 predictors, results intro, subtrack vs game level comparison.
- Page 9: Results continued, seven of eleven metrics linear with interactions best, random forest three cases, acceleration density linear no interactions best. CV <=0.10 for six models. Largest CV 0.31 for very high speed distance and time in velocity band [5.7, ∞). RMSPE total distance 183m, avg 3524m. Figure 3 residuals total distance. Position censoring: defenders most off camera, midfielders most in frame.
- Page 10: Top covariates, offscreen time top for all 11, offscreen distance and position in 8, velocity/acceleration entering/leaving in 4.
- Page 11: Figure 3, practical applications start.
- Page 12: Practical applications, RMSPE by position total distance: defenders 216, midfielders 164, forwards 160. Censoring rates: forwards 43.4%, midfielders 35.4%, defenders 52.5%. Player range 19.7 to 60.04%.
- Page 13: Table 3 (subtrack models) and Table 4 (game level models).
- Page 14: References start.
- Page 15-18: References continue.

Wait, looking at the text, after page 13 (Table 4), there's "16" then references. The page numbering in the text seems to go 1,2,3,4,5,6,7,8,9,10,11,12,13 then "16" (probably page 14 is missing or it's references starting page 16? Actually the text shows "16" then references list, then "17", "18". Let me look carefully.

The text:
- After Figure 3 caption: "12"
- Practical Applications section starts... then "13"
- Table 3 ... Table 4 ... then "16" then references.
- Then "17", "18" within references.

So pages 14-15 seem skipped in the markdown, but I should cite based on what's visible. The user said PAGES: 13 but the text includes references up to page 18. I should cite exact page markers visible in the text.

I need to be careful with verbatim quotes and [PAGE N] citations.

Now, the response must not mention betting. This is a sports science paper, so no betting content anyway.

ZERO TOY EQUATIONS: I must not invent fake ratios. I should use the actual equations from the paper:
- Scaling estimator: Dc = Do * (Tc / To) [from page 4]
- Linear model: yi = β0 + β1 Ti + β2 xi + εi [page 5]
- RMSPE = sqrt( (1/n) * sum(yi - ŷi)^2 ) [page 7]
- CV = RMSPE / ȳ [page 7]
- Velocity bands: [0,3.5), [3.5,5.7), [5.7, ∞) m/s [page 6 Table 1]
- Acceleration bands: [0.65,1.46), [1.46,2.77), [2.77, ∞) m/s² [page 6 Table 1]
- Pearson correlation range 0.596 to 0.998 [page 4]

Breakdown regimes: MCAR assumption violated; residuals increasingly negative as censoring increases; peak 1-second velocity always observed (100% within camera window) so omitted [page 7]; instantaneous accelerations >50 m/s² smoothed with Nadaraya-Watson [page 3].

Now let's structure each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the logical chain: broadcast data -> offscreen censoring -> scaling estimator -> MCAR violation -> gradient boosting models -> subtrack vs game level aggregation -> position-specific censoring -> practical limits. Also gray zones: "players move faster when on camera" means censored periods are not random; defenders censored 52.5% vs forwards 43.4% vs midfielders 35.4%; subtrack median 17m/8.1s; game-level models underperform subtrack aggregation; correlation metrics with censored time. Multi-hop: from raw coordinates to load metrics to prediction error to coaching decisions. Gray-zone audit: the MCAR assumption breakdown, the position bias, the high-speed metrics low correlation (0.599, 0.605), the peak velocity omission, the >50 m/s² noise.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Define external load: work completed independently of internal characteristics [PAGE 1].
- Scaling estimator: D_c = D_o * (T_c / T_o) [PAGE 4].
- Linear model: y_i = β_0 + β_1 T_i + β_2 x_i + ε_i, ε_i ~ N(0, σ²) [PAGE 5].
- RMSPE = sqrt( n^{-1} Σ (y_i - ŷ_i)^2 ) [PAGE 7].
- CV = RMSPE / ȳ [PAGE 7].
- Velocity bands v ∈ [0,3.5), [3.5,5.7), [5.7, ∞) m/s [PAGE 6].
- Acceleration bands a ∈ [0.65,1.46), [1.46,2.77), [2.77, ∞) m/s² [PAGE 6].
- Nadaraya-Watson kernel smoother for accelerations >50 m/s² [PAGE 3].
- Pearson ρ ∈ [0.596, 0.998] excluding peak velocity/acceleration density [PAGE 4].
- Sampling: 10 Hz, 40×40 m window [PAGE 3].
- Train/test: 13/5 games, n_train=361, n_test=138 [PAGE 7].
- Table 3/4 values with units.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Prozone 1999 [PAGE 2], Halson 2014 internal/external load [PAGE 1], GPS/LPS/accelerometer wearables [PAGE 1], Cervone et al. 2016 EPV basketball [PAGE 2], Fernández et al. 2019 EPV soccer [PAGE 2], Varley & Aughey 2013, Gabbett & Ullah 2012, Dwyer & Gabbett 2012 velocity bands, Johnston et al. 2014 acceleration bands [PAGE 6], Rubin 1974 MCAR [PAGE 4], Friedman 2001 gradient boosting [PAGE 7], Nadaraya 1964 / Watson 1964 smoothing [PAGE 3].
- Multi-week traps: accumulation of censoring bias across a season; defenders consistently censored more (52.5%) leading to systematic under/overestimation of load over weeks; injury risk miscalibration if offscreen load is misestimated; small-sample high-speed metrics (CV 0.31) require multi-week aggregation to stabilize.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- This is a bit abstract. Crisis habit regression: when practitioners face missing data, they regress to simple scaling estimator (time-ratio) which fails under non-MCAR. Counter-trap: using gradient boosting with subtrack-level features and boundary velocities/accelerations to outperform naive scaling. Clock: the 8.1s median subtrack duration and 10Hz sampling create a temporal window; predictions degrade as percent censored increases (Figure 3, residuals spread to ±500m at 50% censored [PAGE 9]); the "clock" is the match clock and the censoring clock.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical veto: instantaneous accelerations >50 m/s² are physically unrealistic for humans; smoothed [PAGE 3]. Biomechanical: peak x-second velocity always captured on-camera (100%), so offscreen peak velocity prediction unnecessary [PAGE 7]. Weather: not explicitly in paper, but broadcast camera window occlusion can be weather-related? Not in source. I should stick to what's in paper: camera frame occlusion is the veto layer. Physical layer: 40x40m window centered on camera track; players outside unobserved [PAGE 3]. Biomechanical: defenders cover different distances (RMSPE 216 vs 164 vs 160 [PAGE 12]) due to position-specific movement patterns. Veto conditions: if censoring >50%, residuals range ±500m vs empirical SD 1506m [PAGE 9]; if high-speed distance or very high speed band (CV 0.31, correlation 0.599/0.605 with censored time [PAGE 9]), model confidence low.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- Scenario 1: A defender with >60% censored time (max observed 60.04% [PAGE 12]) and high-speed distance prediction. Veto: correlation 0.599 too weak; scaling estimator invalid; predicted VHD error RMSPE 42.8m (subtrack RF) but CV 0.31 means relative error high. Prediction: model output should be vetoed for individual-game high-stakes load decisions; use only aggregated multi-game trends.
- Scenario 2: Offscreen subtrack with boundary velocity change > threshold (e.g., entering/exiting camera window with high acceleration). Veto: if average absolute acceleration in preceding/following 2s is extreme, Nadaraya-Watson smoothing may mask true impulsive loads; raw >50 m/s² indicates sensor/computer vision artifact. Prediction: exclude subtrack or flag for manual review; do not use for acceleration density.
- Scenario 3: Game-level model vs subtrack-level aggregation disagreement. Veto: Table 4 shows game-level models uniformly worse (e.g., total distance RMSPE 267.1 linear w/ int vs 183.0 subtrack RF [PAGE 9,13]). If a practitioner uses game-level direct prediction instead of subtrack aggregation, veto; prediction error increases by ~46% for total distance (267.1 vs 183.0).

Need to ensure >=1000 words total across sections. THINK_TRACE alone >=400 words.

Word count check: I'll aim for substantial depth in each section.

Citations: Use [PAGE N] exactly as page markers appear in text. Since the text has page numbers inline like "1", "2", etc., I will reference them.

Let's draft carefully.

Important: No betting lines. No toy equations. Use real equations from source.

I will write the response in the required XML sections.

Need to ensure I don't violate "ZERO TOY EQUATIONS" by making up equations. All equations must be from the paper or standard definitions explicitly cited.

Let's write.

For THINK_TRACE:
Start with data generation: 18 Chelsea home games, 10 Hz, 248 players. The camera window 40x40m creates censoring. 149,680 subtracks. Median subtrack 17m/8.1s.
First hop: raw coordinates -> instantaneous velocity/acceleration at 0.1s intervals. Noise: >50 m/s² smoothed via Nadaraya-Watson.
Second hop: external load metrics defined in Table 1: distance bands, velocity bands, acceleration bands.
Third hop: missingness mechanism. MCAR assumption Dc/Do = Tc/To -> scaling estimator. But residuals show systematic bias: players move faster on camera. Pearson correlations with censored time 0.596-0.998 (except peak velocity/acc density).
Fourth hop: model architecture. Linear y_i = β0 + β1 Ti + β2 xi + ε. Gradient boosting xgboost. Two estimation levels: subtrack then aggregate vs direct game-level. Subtrack aggregation outperforms (Table 3 vs 4).
Fifth hop: feature importance. Offscreen time top for all 11 metrics. Position bias: defenders censored 52.5%, midfielders 35.4%, forwards 43.4%.
Gray-zone audit: The MCAR violation is the central gray zone. The "players move faster on camera" finding implies censoring is informative, not random. Peak velocity always observed (100%) creates a structural break: no offscreen peak velocity model needed. High-speed metrics have low correlation with censored time (0.599, 0.605) and highest CV 0.31. Breakdown: percent censored >50% leads to residual spread ±500m vs SD 1506m. Multi-week trap: if you naively apply scaling per game, defenders' loads are systematically misestimated each week, accumulating error in periodization.

Word count should be >400.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX blocks with citations.

RETROCAUSAL_GENEALOGY: Cite Prozone 1999 [PAGE 2], Halson 2014 [PAGE 1], Rubin 1974 [PAGE 4], Friedman 2001 [PAGE 7], etc. Multi-week traps: rolling 7-day load monitoring, acute:chronic workload ratio implications (though not in paper, I can mention the concept generally but carefully not invent equations). I can say: if weekly load is summed from daily biased estimates, defenders accumulate error.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression = falling back to scaling estimator when data missing. Counter-trap = gradient boosting with boundary features. Clock = median subtrack 8.1s, 10Hz, match duration; censoring percentage over 90 minutes.

CROSS_LAYER_VETO_ADJUDICATION: Physical: >50 m/s² unrealistic. Biomechanical: peak velocity always on camera; position-specific RMSPE. Camera window: 40x40m. Veto proof conditions.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios as above.

Let's write it out. I need to be mindful of length. I'll produce a comprehensive response.

One concern: The user says "PAGES: 13" but the text includes page numbers up to 18. I'll cite the page numbers visible in the source text: [PAGE 1], [PAGE 2], ..., [PAGE 13], and references [PAGE 16]-[PAGE 18] if needed. But primarily 1-13.

Let's verify page assignments precisely from the text:
- "1" appears after abstract? Actually the text shows "1" then "Introduction". Let's trace:
Abstract ends, then "1 Introduction". So [PAGE 1] contains Abstract and start of Introduction.
- "2" appears after paragraph about tracking data usefulness. So [PAGE 2] contains exclusivity/sparsity and purpose.
- "3" appears after "Each " and before "time the track...". Wait, looking: "Each " then page break? The text shows "3" then "time the track transverses...". So [PAGE 3] contains data description, subtracks, features, smoothing.
- "4" appears after "The first is that there is a very strong..." So [PAGE 4] contains exploratory analysis, MCAR, scaling estimator.
- "5" appears after Table 1 and before models? Actually text shows "5" then Table 1? Let's look: Table 1 is shown, then "6" then Figure 1. Wait the text flow:
"...gradient boosting (Friedman, 2001) as implemented by the `xgboost` package ... within ... `R` ... Gradient boosting is an ideal tool ... several" then "5" then Table 1? No, looking carefully:

The text has:
"...where i indexes..." (linear model equation)
"The remaining models ... gradient boosting ... several" 
"5" 
"Table 1: External load metric ..."

So page 5 contains the linear model equation and start of models, then Table 1? Actually Table 1 might be on page 5 or 6. Then "6" then Figure 1 caption. Then Figure 2 on page 7? The text shows "7" before Figure 2 caption? Let's re-read:

After Table 1:
"6"
"<!-- Start of picture text --> Censored Time vs. Censored Acceleration ... Figure 1 ..."

So Figure 1 is on page 6? Then:
"7"
"#### Scaled Estimator Residuals vs. Percent of Censored Data ... Figure 2 ..."

So Figure 2 is page 7.

Then:
"8"
"#### Scaled Estimator..." no wait, page 8 starts with "The predictors included...". Let's look:

After Figure 2 caption, text says "8" then "The predictors included in the various models are denoted in Table 2...". Actually looking:
"...yielding very accurate predictions..." then "5" then Table 1? I'm getting confused. Let me just use the page numbers as they appear in sequence and cite content that is clearly on those pages based on the surrounding text. The exact mapping isn't critical as long as I cite [PAGE N] for content that is near that marker. I will use page markers that are visibly adjacent.

Better approach: cite [PAGE N] where N is the number appearing in the text nearest the content.

Content mapping:
- Abstract & intro definitions: [PAGE 1]
- Prozone 1999, Cervone, Fernández, exclusivity/sparsity: [PAGE 2]
- Data: Chelsea, 10Hz, 40x40m, subtracks, Nadaraya-Watson >50m/s²: [PAGE 3]
- Correlations, MCAR, scaling estimator, "players move faster": [PAGE 4]
- Linear model equation, gradient boosting intro, Table 1: [PAGE 5] (the "5" marker appears right before Table 1)
- Figure 1: [PAGE 6]
- Figure 2: [PAGE 7]
- Models comparison, train/test split, RMSPE/CV: [PAGE 8]? Actually "8" appears before Table 2. Let's see: text has "8" then "The predictors included..." then Table 2. So [PAGE 8] has Table 2 and model setup? Wait, RMSPE/CV definitions appear before "8"? Let's check:

"...reserving the final five games for testing, which results in 361 playermatch observations in the training set and 138 player-match observations in the test set. We assess model performance by comparing root mean square predictive error (RMSPE), defined RMSPE = ..., where ... and the coefficient of variation (CV), defined CV = ..."

Then "The predictors included in the various models are denoted in Table 2. All numeric variables were centered..."

Then "8"

So RMSPE/CV and train/test are on page 7 or 8? The "7" marker was before Figure 2. Then after Figure 2, there's "8". But the text flow shows Figure 2 caption ends, then "8" then predictors. But the RMSPE/CV paragraph appears before Table 2 in the text, but after Figure 2? Actually the order in the markdown is:

"...yielding very accurate predictions; ... Additionally, as implemented in `xgboost` it is extremely fast..."

Then "5"

Then Table 1

Then "6"

Then Figure 1

Then "7"

Then Figure 2 caption

Then text continues: "#### Scaled Estimator Residuals..." wait no.

Let me look at the raw text again:

After Table 1:
```
6 


<!-- Start of picture text -->
Censored Time vs. Censored Acceleration
...
<!-- End of picture text -->

Figure 1: ...
```

Then:
```
7 


#### Scaled Estimator Residuals vs. Percent of Censored Data 


<!-- Start of picture text -->
Scaled Estimator Residuals vs. Percent of Censored Data
...
<!-- End of picture text -->

Figure 2: ...
```

Then:
```
8 


#### Scaled Estimator Residuals vs. Percent of Censored Data 
```
Wait no, the text shows:

After Figure 2:
```
8 


The predictors included in the various models are denoted in Table 2...
```

Actually looking at user's text:

```
7 


#### Scaled Estimator Residuals vs. Percent of Censored Data 


<!-- Start of picture text -->
...
<!-- End of picture text -->

Figure 2: Residuals for the scaling estimator in Section 2.2 versus the percentage of data that is censored. ...
```

Then:
```
8 


The predictors included in the various models are denoted in Table 2...
```

Wait, I see "8" before "The predictors included..."? Let me scroll up in my mind. The user text:

```
Figure 2: Residuals for the scaling estimator in Section 2.2 versus the percentage of data that is censored. The scaling estimator consistently underestimates the amount of time spent in the slowest velocity band, whereas it consistently overestimates values for the other load metrics, resulting in negative residuals. This is clear evidence that the way players move on camera differs systematically from how they move offscreen.


8 


The predictors included in the various models are denoted in Table 2. All numeric variables were centered and scaled...
```

Yes. So page 8 contains Table 2 discussion? But Table 2 appears later after "10". Let's see:

Actually, the text after page 8 marker:
"The predictors included in the various models are denoted in Table 2. All numeric variables were centered and scaled so that they have a mean of 0 and standard deviation of 1, which, for the linear models, allows us to determine relative significance of each predictor in the model simply by comparing the size of their associated coefficients.

Here we briefly note that 100% of the peak x -second velocity values ..."

Then:
```
9 


## **3 Results** 
```

So page 8 has the note about peak velocity and centering/scaling.

Then page 9 has Results start, Table 3 discussion, CV values, RMSPE total distance 183m, Figure 3 residuals, position censoring demarcation.

Then page 10 has top covariates tally.

Then page 11 has Figure 3 and Practical Applications start? Actually:

```
11 


Figure 3: Residuals for total distance predictions versus percent of total data that is censored.
```

Then Practical Applications section starts after Figure 3? The text shows:

```
## **4 Practical Applications** 

Broadcast-derived tracking data has tremendous potential...

One consideration when applying our results is how estimate accuracy varies by position... RMSPE for defenders, midfielders, and forwards is 216, 164, and 160... censoring rates... forwards 43.4... midfielders 35.4... defenders 52.5... ranging from 19.7 to 60.04 percent...
```

Then:
```
13 


Table 3: ... Table 4: ...
```

Then:
```
16 


- Borresen...
```

So page 12 has Practical Applications content? Actually the "12" marker appears before Practical Applications? Let's check:

After Figure 3 (page 11), the text shows:
```
12 


## **4 Practical Applications** 
```

Wait, looking:
```
11 


Figure 3: Residuals for total distance predictions versus percent of total data that is censored.


12 


## **4 Practical Applications** 
```

Yes, page 12 has Practical Applications.

Then page 13 has Table 3 and Table 4.

Then page 16+ references.

Okay, I will cite accordingly.

Now let's write the response. I need to make sure total words >= 1000. I'll write generously.

I must not mention betting. This is fine.

Let's begin drafting each section.

THINK_TRACE: I'll write ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: LaTeX heavy, with citations.

RETROCAUSAL_GENEALOGY: ~200 words.

RECURSIVE_THEORY_OF_MIND: ~200 words.

CROSS_LAYER_VETO_ADJUDICATION: ~200 words.

RLVR_COUNTERFACTUAL_VETOES: ~200 words.

Total should exceed 1000.

Let's write.

For verbatim quotes, I need to include exact text from source within quotes and cite page.

Example: "players move faster when on camera" [PAGE 4].

Another: "the assumption that data is MCAR is incorrect" [PAGE 4].

Another: "100% of the peak x -second velocity values in the 18 games in our data set occur within the camera window" [PAGE 8].

Another: "players on average travel 3524 meters in each game" [PAGE 9].

I'll include several.

Now drafting.

I need to be careful with LaTeX syntax. Use $$ or \( \). Since it's XML, backslashes are fine.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's core derivation proceeds through four linked hops. First, raw broadcast coordinates are sampled at 10 Hz inside a 40 × 40 m camera window [PAGE 3]. Players outside the window are censored, producing 149,680 subtracks from 820 original player tracks across 18 Chelsea home games [PAGE 3]. The median subtrack is only 17.0 m and 8.1 s long, which means most offscreen intervals are brief but numerous [PAGE 3]. Second, instantaneous kinematics are computed at 0.1 s intervals; raw accelerations above 50 m s⁻² are treated as noise and smoothed with a Nadaraya–Watson kernel [PAGE 3]. These kinematics feed the external-load taxonomy in Table 1: distance bands, velocity bands [0, 3.5), [3.5, 5.7), [5.7, ∞) m s⁻¹, and acceleration bands [0.65, 1.46), [1.46, 2.77), [2.77, ∞) m s⁻² [PAGE 6]. Third, the missingness mechanism is examined. Under missing completely at random (MCAR), the ratio of observed to censored distance equals observed to censored time, yielding the scaling estimator D_c = D_o · (T_c / T_o) [PAGE 4]. However, residuals show this assumption fails: as censored percentage rises, residuals turn increasingly negative for most metrics, which the authors summarize as "players move faster when on camera" [PAGE 4]. Correlations between censored time and censored metrics range from ρ = 0.596 to 0.998 once goalkeepers are removed, with peak velocity and acceleration density as exceptions [PAGE 4]. Fourth, prediction architecture is tested. A baseline linear model y_i = β₀ + β₁T_i + β₂x_i + ε_i is compared with gradient-boosting models fit by xgboost [PAGE 5, PAGE 7]. Two estimation levels are compared: subtrack-level prediction followed by aggregation versus direct game-level prediction. Subtrack aggregation uniformly dominates; for total distance, the subtrack random forest achieves RMSPE = 183.0 m versus 267.1 m for the best game-level linear model with interactions [PAGE 9, PAGE 13].

Gray-zone audit centers on three breakdown regimes. (1) MCAR violation: censoring is position-structured. Defenders are censored 52.5 % of playing time, midfielders 35.4 %, and forwards 43.4 %, with player-level censoring spanning 19.7 % to 60.04 % [PAGE 12]. Because defenders spend more time off-camera, any time-ratio scaling will systematically mis-estimate their weekly load accumulation. (2) High-speed sparse metrics: very high speed distance and time in velocity band [5.7, ∞) correlate only ρ ≈ 0.599–0.605 with censored time and carry the largest coefficients of variation, CV = 0.31, despite low absolute RMSPE (6.4 s and 42.8 m) [PAGE 9, PAGE 13]. These metrics are statistically fragile for single-game decisions. (3) Structural omission: 100 % of peak x-second velocity values occur inside the camera window, so offscreen peak velocity is not modeled [PAGE 8]. Multi-week traps emerge if a practitioner stacks daily biased estimates into acute:chronic workload ratios: defenders' censored minutes compound week over week, inflating apparent offscreen load error and potentially misdirecting recovery prescriptions. The temporal "clock" is unforgiving: at 50 % censored data, total-distance residuals spread roughly (−500, 500) m against an empirical response standard deviation of 1506 m [PAGE 9], meaning uncertainty remains large even when the model is nominally unbiased.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units from the source:

External load definition (Halson, 2014): "the work completed by the athlete, measured independently of his or her internal characteristics" [PAGE 1]. Units: mechanical work and kinematic load in SI.

Scaling estimator under MCAR [PAGE 4]:
\[
\frac{D_o}{D_c} = \frac{T_o}{T_c}
\quad\Longrightarrow\quad
\hat{D}_c = D_o \frac{T_c}{T_o}
\]
where \(D_o\) is observed distance, \(D_c\) is censored distance, \(T_o\) is observed time, and \(T_c\) is censored time. Units: meters and seconds.

Baseline linear model [PAGE 5]:
\[
y_i = \beta_0 + \beta_1 T_i + \beta_2 x_i + \epsilon_i,\qquad \epsilon_i \sim \mathcal{N}(0,\sigma^2)
\]
where \(i\) indexes player-match, \(y_i\) is the censored game-level metric, \(T_i\) is censored time (seconds), \(x_i\) is the observed game-level metric, and \(\epsilon_i\) is Gaussian error.

Gradient boosting (Friedman, 2001; Chen & Guestrin, 2016) via `xgboost` [PAGE 5, PAGE 7]; no closed-form equation is provided in the source, so the ensemble is treated as a black-box functional \(\hat{y} = \mathcal{F}_{\text{GBM}}(\mathbf{X})\).

Performance metrics [PAGE 7]:
\[
\text{RMSPE} = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y}_i)^2},\qquad
\text{CV} = \frac{\text{RMSPE}}{\bar y},\qquad
\bar y = \frac{1}{n}\sum_{i=1}^{n} y_i.
\]
Units of RMSPE match the response (meters for distance, seconds for time, m s⁻² for acceleration); CV is dimensionless.

Sampling and observation geometry [PAGE 3]: 10 measurements per second; camera window \(40 \times 40\) m centered on the interpolated camera track; subtrack split at window boundary crossings. Median subtrack length 17.0 m (range 0.0–830.1 m); median duration 8.1 s (range 0.1–556.7 s) [PAGE 3].

Kinematic noise filter [PAGE 3]: instantaneous accelerations \(> 50\ \text{m s}^{-2}\) are unrealistic and are smoothed using a Nadaraya–Watson kernel smoother [Nadaraya, 1964; Watson, 1964].

Velocity bands [PAGE 6]: \(v \in [0,3.5),\ [3.5,5.7),\ [5.7,\infty)\) m s⁻¹. Acceleration bands [PAGE 6]: \(a \in [0.65,1.46),\ [1.46,2.77),\ [2.77,\infty)\) m s⁻².

Pearson correlations [PAGE 4]: once goalkeepers are removed, \(\rho \in [0.596,\,0.998]\) between censored subtrack time and most censored load metrics; exceptions are peak velocity and acceleration density.

Train/test split [PAGE 7]: 13 games for training (\(n = 361\) player-match observations), 5 games for testing (\(n = 138\)). All numeric predictors centered and scaled to mean 0, standard deviation 1 [PAGE 8].

Key result values [PAGE 9, PAGE 13]: total distance subtrack random forest RMSPE = 183.0 m, CV = 0.05; average match distance 3524 m [PAGE 9]. Very high speed distance subtrack random forest RMSPE = 42.8 m, CV = 0.31 [PAGE 13]. Time in velocity band \([5.7,\infty)\) subtrack random forest RMSPE = 6.4 s, CV = 0.31 [PAGE 13]. Position-specific total distance RMSPE: defenders 216 m, midfielders 164 m, forwards 160 m [PAGE 12].

Breakdown/singularity regimes: MCAR assumption violated when censoring is position-dependent [PAGE 4]; subtrack duration approaching zero creates degenerate velocity/acceleration estimates [PAGE 3]; censored percentage above 50 % widens residual spread to approximately ±500 m for total distance [PAGE 9]; peak velocity is always observed on-camera, making offscreen peak-velocity prediction structurally unnecessary [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage traces from optical tracking's introduction to soccer by Prozone in 1999 [PAGE 2], through the internal/external load taxonomy formalized by Halson (2014) [PAGE 1], to modern possession-value frameworks by Cervone et al. (2016) in basketball and Fernández et al. (2019) in soccer [PAGE 2]. The methodological ancestry of the imputation problem includes Rubin's (1974) characterization of incomplete-data problems and the MCAR assumption [PAGE 4], Nadaraya–Watson regression smoothing (1964) [PAGE 3], and Friedman's gradient boosting (2001) as implemented by xgboost [PAGE 5, PAGE 7]. Domain-specific band definitions derive from Dwyer and Gabbett (2012) for velocity zones and Johnston et al. (2014) for acceleration zones [PAGE 6].

Multi-week traps arise because the paper's censoring structure is not random across the fixture list. Defenders are off-camera 52.5 % of the time versus 35.4 % for midfielders and 43.4 % for forwards [PAGE 12]. If a performance staff applies the naive scaling estimator week after week, defenders' accumulated offscreen load will be systematically biased relative to midfielders and forwards, distorting acute:chronic workload calculations and injury-risk models that assume comparable measurement fidelity across positions. The sparse high-speed metrics (CV = 0.31) require multi-week aggregation to stabilize; single-game estimates of very high speed distance or time above 5.7 m s⁻¹ are too noisy for week-to-week prescription [PAGE 9, PAGE 13]. Additionally, because peak velocity is always captured inside the camera window [PAGE 8], any longitudinal monitoring system that treats offscreen peak velocity as a predicted variable introduces a structural mismatch: the modeled quantity does not exist in the observed data-generating process, creating a silent failure mode across a microcycle.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression occurs when a practitioner, confronted with missing broadcast tracks, falls back to the time-ratio scaling estimator because it is intuitive and requires no software stack [PAGE 4]. That habit is the default trap: it assumes MCAR and ignores the documented finding that residuals grow more negative as censored percentage increases, i.e., "players move faster when on camera" [PAGE 4]. The counter-trap is the paper's recommended architecture: subtrack-level gradient boosting with boundary kinematics (average velocity and average absolute acceleration in the 2 seconds before and after each subtrack), position, offscreen distance, and observed game-level load metrics, then aggregation to game level [PAGE 8, PAGE 10]. This outperforms direct game-level prediction in every metric [PAGE 9, PAGE 13].

The clock operates on two scales. The micro-clock is the median subtrack duration of 8.1 s at 10 Hz sampling [PAGE 3]; predictions are most reliable when offscreen windows are short and bracketed by observed on-camera kinematics. The macro-clock is the 90-minute match: as percent censored approaches 50 %, total-distance residuals spread to roughly (−500, 500) m against an empirical standard deviation of 1506 m [PAGE 9], so error compounds over the match. A recursive theory of mind for the analyst must therefore ask: "Does the coach think the offscreen number is measured, when it is modeled?" If the answer is yes, the model output should be treated as a scenario, not a fact. The habit regression is strongest under time pressure (pre-match team selection, post-match load reporting); the counter-trap requires the subtrack aggregation pipeline and position-aware interpretation of RMSPE by role [PAGE 12].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: instantaneous accelerations exceeding 50 m s⁻² are biomechanically implausible for soccer players and are explicitly smoothed by Nadaraya–Watson regression [PAGE 3]. Any pipeline that passes raw unsmoothed accelerations into acceleration density or total acceleration violates physical plausibility and should be vetoed.

Biomechanical layer veto: 100 % of peak x-second velocity values (x = 1, 3, 5, 10 s) occur within the camera window [PAGE 8]. Therefore, predicting offscreen peak velocity is not merely inaccurate—it is structurally undefined in this data-generating process. A model that outputs offscreen peak velocity should be vetoed automatically.

Positional/biomechanical load veto: total-distance RMSPE differs by position—defenders 216 m, midfielders 164 m, forwards 160 m—driven by censoring rates of 52.5 %, 35.4 %, and 43.4 % respectively [PAGE 12]. If a single global error tolerance is applied across positions, defenders will systematically exceed it. Veto condition: position-specific prediction intervals must be used; a universal ±5 % tolerance is invalid for defenders.

Weather/occlusion layer: the paper does not model weather, but the camera-window construct means any occlusion—tactical camera framing, broadcast cutaways, or stadium infrastructure—creates censoring identical to weather-induced visibility loss. Veto condition: when a subtrack's exit and re-entry points are separated by large Euclidean distance relative to the 8.1 s median duration, the offscreen path is under-constrained and load prediction should be downgraded.

Veto proof summary: The model is valid only when (a) accelerations are kernel-smoothed, (b) peak velocity is excluded from offscreen targets, (c) position-specific censoring rates are accounted for, and (d) subtrack aggregation—not direct game-level regression—is used for prediction [PAGE 9, PAGE 13].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — High-speed sparse metric on a high-censoring player.
Setup: A defender with 60.04 % censored match time (the observed maximum) [PAGE 12] is assigned a predicted very high speed distance (>5.7 m s⁻¹). Veto rule: The correlation between censored time and this metric is only ρ = 0.599 [PAGE 9], and the best model carries CV = 0.31 [PAGE 13]. Prediction: Veto the single-game estimate for any load-management decision; the relative error is too large. Use only multi-game rolling averages where the CV is diluted by √N.

Scenario 2 — Boundary acceleration discontinuity.
Setup: A subtrack exits and re-enters the camera window with average absolute acceleration in the preceding/following 2 s that implies raw unsmoothed spikes > 50 m s⁻² [PAGE 3]. Veto rule: Raw accelerations above 50 m s⁻² are physically unrealistic and were smoothed in the source; feeding them into acceleration density or total acceleration violates the noise model. Prediction: Flag the subtrack for manual review or impute from adjacent subtracks; do not propagate to game-level acceleration load.

Scenario 3 — Game-level direct prediction vs. subtrack aggregation.
Setup: A practitioner bypasses subtrack-level modeling and regresses total distance directly at game level using the linear model with interactions. Veto rule: Table 4 shows the game-level linear model with interactions yields RMSPE = 267.1 m for total distance, whereas subtrack random forest aggregation yields RMSPE = 183.0 m [PAGE 9, PAGE 13]. Prediction: Veto the game-level direct estimate; it increases total-distance error by approximately 46 % relative to the subtrack aggregation standard. The model output should be rejected for individual-player load reporting.
</RLVR_COUNTERFACTUAL_VETOES>