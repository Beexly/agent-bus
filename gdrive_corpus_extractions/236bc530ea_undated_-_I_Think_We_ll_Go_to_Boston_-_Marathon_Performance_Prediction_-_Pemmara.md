---
source: "undated - I Think We'll Go to Boston - Marathon Performance Prediction - Pemmaraju et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/undated"
pages: 17
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5737
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper about marathon performance prediction using Strava data. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations.

Let me parse the source carefully.

Source: Pemmaraju et al., "I Think We'll Go to Boston - Marathon Performance Prediction". MIT Sloan Sports Analytics Conference Research Paper Competition. Undated. 17 pages (though the markdown seems to go to page 20 of appendices? Actually text says pages 1-17 plus appendices to page 20? Wait, the markdown shows pages up to 20 in appendices? Let me check: It shows page numbers in text: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20. The user says PAGES: 17. But the source text includes appendix pages up to 20. I should cite based on the page numbers visible in the source text markers. The source text has explicit page breaks with numbers like "1", "2", etc. I will cite [PAGE N] where N corresponds to the page number shown in the source. However, the user says PAGES: 17. Maybe they mean the PDF has 17 pages? But the text shows appendix pages 18-20. I will cite the page numbers as they appear in the text (1-20) but note the user said 17? Actually the user wrote "PAGES: 17". I should probably cite within 1-17 range? But the text clearly shows page 18, 19, 20 in appendices. Hmm. The user might have miscounted or the source text includes extra pages. I will cite using the page numbers visible in the source text, e.g., [PAGE 1], [PAGE 2], etc. up to [PAGE 20] if needed, but since user said 17, maybe I should stick to [PAGE 1]-[PAGE 17] for main content and appendices? The source text shows page numbers at bottom: after page 17 it shows "18" "19" "20". I'll cite exactly what's visible. The user instruction: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I must cite [PAGE N].

Key content:

Dataset (PAGE 2): 356,618 marathons from 2016-2020, almost 40% of 2019 Boston field. 47 million activities preceding 6 months. 72 billion total points. Sampled at 1 point per second.

Features (PAGE 2-8): Principles A-I.
- A Training More
- B Consistency
- C Training Cycle Length (3-4 months)
- D Long Runs (glycogen stores 90-120 minutes, PAGE 2)
- E Workouts
- F Threshold / lactate threshold (LT)
- G Running Economy
- H Terrain
- I Demographics

Training Volume (PAGE 3): 6-month window chosen over 3 and 12 months because longer frames provided better results but not distinguishable; 6-month gave larger sample size.

Gradient-Adjusted Distance (GAD) (PAGE 3-4): effective distance accounting for elevation. Course Difficulty = Course GAD / Marathon Distance (26.22 miles). Equation (1) on PAGE 5.

Table on PAGE 5: Course difficulties for World Marathon Majors.
- New York: 290m gain, GAD 26.471, Difficulty 1.0096, Equivalent 3:00 -> 3:01:44
- Boston: 247m gain, GAD 26.446, Difficulty 1.0087, Equivalent 3:00 -> 3:01:33
- London: 65m, 26.295, 1.0029, 3:00:31
- Berlin: 84m, 26.285, 1.0025, 3:00:27
- Tokyo: 41m, 26.255, 1.0014, 3:00:15
- Chicago: 35m, 26.236, 1.0007, 3:00:07
- Twin Cities: 167m, 26.38, 1.0061, 3:01:06
- Santa Rosa: 118m, 26.33, 1.0042, 3:00:46

Best Efforts over Fixed Time/Distance (PAGE 4): best sub-stream of fixed distances/times. Best-effort curve.

Specific Race Course (PAGE 5): predict on any course. Doesn't encompass backloaded hills or weather.

Practicing Race Pace (PAGE 6): chicken-and-egg issue: at test time MP unknown, use previous best or ballpark estimate.

Workouts (PAGE 6): clustering lap buttons.

Aerobic Efficiency - HBPM (PAGE 7-8): Heartbeats Per Mile. Example: LT1=180 bpm, at 6:00/mile => HBPM=1080 beats/mile. 1 hour @ LT = 10800 heartbeats. LT2=150 bpm => HBPM=900 beats/mile, 9000 heartbeats. Athlete allotted budget of heartbeats. Find subsections encompassing this number of heartbeats. Privacy regulations prevent processing all heart rate data without consent; small sample showed promise.

Machine Learning Model (PAGE 8): Spark, XGBoost. GridSearchCV. Optimized for RMSE (minutes). Hardware: 60 AWS i3.2xlarge machines (8 CPUs, 40 GB each). XGBoost hyperparameters: max tree depth 8, min child weight 4, learning rate 0.03, gamma 0, estimators 2000.

Results (PAGE 9-10):
Table: Training Set (70%): 293,685, avg finish 3:44:01, mean error 0:01, RMSE 7:13, MAPE 2.2%, R^2 0.95.
Test Set (15%): 62,933, avg 3:43:56, mean error 0:03, RMSE 8:46, MAPE 2.7%, R^2 0.93.
Women: 12,443, 4:01:18, mean error 0:02, RMSE 8:03, MAPE 2.3%, R^2 0.93.
Men: 49,105, 3:39:27, mean error 0:03, RMSE 8:57, MAPE 2.8%, R^2 0.93.
Boston Qualifiers: 11,176, 3:04:18, mean error 1:59, RMSE 5:42, MAPE 2.0%, R^2 0.91.
Comparisons: Riegel + Runner's World RMSE 19:52. Vickers/Vertosick + FiveThirtyEight on Strava test set RMSE 15:02, MAPE 4.6%, R^2 0.80.

Feature Significance (PAGE 10-11): Gain metric. Best predictors: prior best efforts closest to lactate threshold (7 miles, 1 hour) rather than longest (half marathon). Specificity beats volume. Age less significant than gender or weight.

Case Studies (PAGE 11-14): Varun, Dave, Nikhil. Table on PAGE 11-12.
- Varun Boston 18 predicted 2:47:18 actual 2:48:54. Varun TC 19 predicted 2:34:06 actual 2:35:42.
- Nikhil Berlin 17 predicted 2:59:07 actual 2:58:57. Nikhil Boston 19 predicted 3:01:06 actual 2:58:41.
- Dave SR 18 predicted 3:00:38 actual 2:58:14. Dave Boston 19 predicted 2:58:08 actual 2:58:39.

Dave Boston cutoff issue (PAGE 14): qualified with 2:58:39 but cutoff 2:58:21. Goal 2:55 to guarantee entry.

Conclusion (PAGE 15): gear and weather not incorporated (available in Strava dataset). Future work.

Appendices: Feature list B (PAGE 17-18). Model hardware C (PAGE 19). Feature significance D (PAGE 20 - blank?).

Now structure response.

I need >=1000 words total across sections. THINK_TRACE >=400 words.

Section 1: THINK_TRACE (Deep multi-hop derivation & gray-zone audit). Must be >=400 words. I'll derive the HBPM metric mathematically, analyze the GAD course difficulty formula, examine feature leakage (chicken-and-egg with MP), discuss data leakage in training vs test split by athlete? Not mentioned but gray zone: 70/15/15 split presumably random by marathon, but athlete may appear multiple times? 356,618 marathons from 2016-2020, likely repeated athletes. Gray zone: athlete-level leakage not addressed. Also MAPE vs RMSE. The "best effort" features require knowing goal pace at test time, which is circular; they use previous best or ballpark. Gray zone: this introduces error propagation. Also heart rate privacy: only small sample could use HBPM, so feature importance may be biased toward non-HR features for general population. Also the model uses R^2 and RMSE in minutes; R^2 can be misleading with heteroscedastic errors across finish times. Also course difficulty doesn't capture backloaded hills or weather (explicitly stated PAGE 5). Also glycogen 90-120 min (PAGE 2) is a simplification. Also lactate threshold approximated by 1-hour all-out, but few athletes have that; they use percentages of HR sustained for shorter windows and highest HR over full hour (PAGE 7). Gray zone: HR drift, cardiac drift, temperature effects.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS. Formal LaTeX equations with units, page citations, breakdown. Include:
- Course Difficulty: \(D_c = \frac{\text{GAD}_c}{26.22 \text{ miles}}\) [PAGE 5]
- HBPM: \(\text{HBPM} = \frac{\text{HR}_{\text{avg}} \times t}{d}\) with units beats/mile. Example calculations [PAGE 7].
- Heartbeat budget: \(B = \text{HR}_{\text{LT}} \times 3600 \text{ s}\) (or 60 min) [PAGE 7].
- RMSE: \(\sqrt{\frac{1}{N}\sum (y_i - \hat{y}_i)^2}\) in minutes [PAGE 8-9].
- MAPE: \(\frac{100\%}{N}\sum \left|\frac{y_i - \hat{y}_i}{y_i}\right|\) [PAGE 9].
- R^2: \(1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}\) [PAGE 9].
- XGBoost objective maybe not given, but hyperparameters listed [PAGE 19]. I can state them as configuration not equation.
- GAD concept: effective distance [PAGE 3-4].
- 6-month window rationale [PAGE 3].

Breakdown regimes: GAD linearity breaks down on extreme gradients (downhill too steep causes braking/eccentric loading, not modeled) [PAGE 4 mentions straight downhill fastest as long as gradient not too steep]. HBPM breaks down when HR data unavailable (privacy) or when LT misestimated due to cardiac drift [PAGE 7-8]. MP features circular at inference [PAGE 6]. Course difficulty ignores weather and hill placement [PAGE 5].

Section 3: RETROCAUSAL_GENEALOGY. Historical lineage: Bannister four-minute mile [PAGE 1], periodization Cold War [PAGE 1], Nike Breaking2 [PAGE 1], Bramble & Lieberman endurance running evolution [PAGE 1], glycogen studies Gonzalez et al. [PAGE 2 ref 7], Riegel formula [PAGE 10 ref 16], Smyth & Muniz-Pumares critical speed [PAGE 10 ref 10], VDOT [PAGE 11 ref 11], Altini & Amft [PAGE 10 ref 18], Outside Magazine critique [PAGE 10 ref 19]. Multi-week traps: 6-month window vs 3-4 month conventional cycle [PAGE 3]; glycogen 90-120 min [PAGE 2]; marathon peak age early-mid 30s vs other sports [PAGE 14]; consistency over long periods; Boston qualifier cutoff trap [PAGE 14].

Section 4: RECURSIVE_THEORY_OF_MIND. Crisis habit regression vs counter-trap vs clock. This is a theoretical section about the athletes' psychology and model interaction. Crisis habit regression: under pressure, athletes revert to familiar habits (volume for Dave, speed for Nikhil). Counter-trap: model prescribes opposite of habit (Dave should do less volume more intensity; Nikhil more volume). Clock: race day cutoff, Boston qualification cutoff 2:58:21 vs Dave's 2:58:39 [PAGE 14]; 2:55 goal to guarantee entry; round boundary bands 3:00, 3:30, 4:00 [PAGE 10]. Recursive theory of mind: athlete anticipates model's prescription, model anticipates athlete's response, leading to fixed points or oscillatory training adjustments.

Section 5: CROSS_LAYER_VETO_ADJUDICATION. Physical/biomechanical/weather veto proof. Physical veto: course difficulty ignores backloaded hills (Boston miles 16-21) and weather [PAGE 5]. Biomechanical: running economy, weight effects, race weight complicated [PAGE 13]; downhill gradient too steep causes eccentric damage not captured by GAD linear scaling [PAGE 4]. Weather: Boston April fickle vs Berlin September [PAGE 5]; not in model (future work PAGE 15). Gear: shoes not incorporated [PAGE 15]. Heart rate privacy veto: HBPM only small sample [PAGE 8]. Lactate threshold estimation veto: no lab 1-hour all-out for most [PAGE 7].

Section 6: RLVR_COUNTERFACTUAL_VETOES. 3 verifiable RLVR (Reinforcement Learning via Verifiable Rewards?) counterfactual veto scenarios + predictions. Need 3 scenarios where model prediction would be vetoed and what the counterfactual prediction/outcome is. Must be verifiable (i.e., based on source facts).

Scenario 1: Heart rate data unavailable due to privacy -> HBPM feature vetoed -> model falls back to non-HR features -> prediction error increases by X? We can't invent exact numbers not in source. We can say: if HBPM is withheld for an athlete, the model loses a feature that showed promise on the small consenting sample [PAGE 8], so the RMSE for that athlete would likely exceed the cohort RMSE of 8:46 [PAGE 9], but exact delta is not provided. We can frame as a veto condition and prediction that error increases relative to 8:46 minutes RMSE on test set.

Scenario 2: Race day weather veto: Boston April weather notoriously fickle [PAGE 5]; model does not incorporate weather [PAGE 15]. If race day has heat/wind, the model's course-difficulty-scaled prediction (e.g., 3:01:33 for a 3:00 flat marathoner at Boston [PAGE 5]) will be optimistic; veto condition: WBGT above threshold -> predicted time invalid; counterfactual prediction: add positive bias (slower time) proportional to weather stress, exact magnitude not specified by source.

Scenario 3: Circular goal pace leak at inference: MP unknown at prediction time [PAGE 6]; model uses previous best or ballpark estimate. If athlete's fitness has changed (detraining or improvement) since previous best, the race-pace features are mis-specified -> veto: predictions based on stale MP; counterfactual: actual finish deviates from predicted by more than mean error 0:03 / RMSE 8:46 [PAGE 9], specifically the round-boundary clustering shows athletes target 3:00, 3:30 etc [PAGE 10], so stale MP causes systematic miss near round boundaries.

Need to avoid fake ratios. No invented Force/Fatigue. Keep units SI/information/probability. Use LaTeX.

Word count: Need >=1000 words total. THINK_TRACE alone >=400. I'll write substantial content in each.

Also strict invariant: ZERO BETTING LINES. Do not mention odds, spreads, moneylines, totals. This is a marathon paper, so likely no betting content anyway. I will not mention any betting terms.

ZEROTOY EQUATIONS: No fake ratios. All equations must be formal and cited. No invented ratios like Force/Fatigue.

Let's draft.

THINK_TRACE: >400 words. I'll write about 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Include equations and citations.

RETROCAUSAL_GENEALOGY: Historical lineage and multi-week traps.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions.

Let's ensure page citations match source. I'll cite [PAGE 1], [PAGE 2], [PAGE 3], [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 7], [PAGE 8], [PAGE 9], [PAGE 10], [PAGE 11], [PAGE 12], [PAGE 13], [PAGE 14], [PAGE 15], [PAGE 17], [PAGE 19]. The source text shows page numbers inline. I need to be careful: The page numbers appear as standalone numbers in the text flow, e.g., after Introduction text "1" then content continues. Actually the markdown shows:

"## 1. Introduction ... [PAGE 1 content] ... 1

... [PAGE 2 content] ... 2"

So the number "1" appears after page 1 content. I will cite [PAGE 1] for content on that page.

Let's verify some quotes:
- PAGE 2: "356,618 marathons from 2016-2020 (including almost 40% of the entire 2019 Boston Marathon field!" -> verbatim.
- PAGE 2: "47 million activities"
- PAGE 2: "72 billion total points"
- PAGE 2: "human body can generally sustain itself without nourishment on glycogen stores for 90 to 120 minutes"
- PAGE 3: "We thus went with a 6-month window as this provided a larger sample size of athletes who had 6 months of training data."
- PAGE 4: GAD examples.
- PAGE 5: Equation (1): Course Difficulty = Course GAD / Marathon Distance (26.22 miles). Table values.
- PAGE 5: "It also does not encompass the weather, which is notoriously fickle in Boston in April compared to Berlin in September."
- PAGE 6: chicken-and-egg issue, test time uses previous best or ballpark estimate.
- PAGE 7: HBPM definitions and example.
- PAGE 8: privacy regulations, small sample.
- PAGE 8: XGBoost, GridSearchCV, RMSE optimized.
- PAGE 9: Figure 4, Table results.
- PAGE 10: Outside Magazine quote.
- PAGE 10: feature importance, gain, best predictors 7 miles/1 hour.
- PAGE 11: case studies table begins.
- PAGE 13: Varun demographics weight.
- PAGE 14: Dave cutoff 2:58:21 vs 2:58:39.
- PAGE 15: conclusion, gear and weather not incorporated.
- PAGE 17: Appendix B feature list start.
- PAGE 19: hardware and XGBoost hyperparameters.

Now write. Need to be careful not to use toy equations. All equations must be real and cited.

Let's compose.

THINK_TRACE (approx 500 words):

Start: The paper constructs a supervised regression problem... Multi-hop: raw GPS streams at 1 Hz [PAGE 2] -> 72 billion points -> Spark feature extraction [PAGE 8] -> XGBoost [PAGE 8]. Derive HBPM from lactate threshold physiology [PAGE 7]. Gray-zone audit: (1) athlete-level leakage unknown because split is by marathon not athlete [PAGE 9]; (2) circular MP features [PAGE 6]; (3) HBPM privacy veto [PAGE 8]; (4) GAD linear scaling ignores hill placement and weather [PAGE 5]; (5) R^2 heterogeneity across speed bins [PAGE 9-10]. I'll expand.

SOURCE_OPERATORS_AND_EQUATIONS:

Equation block with LaTeX.
1. Course Difficulty Index: \(\mathcal{D}_{c} = \frac{\mathrm{GAD}_{c}}{L_{\mathrm{mar}}}\), where \(L_{\mathrm{mar}} = 26.22\) miles, dimensionless [PAGE 5, Eq. 1].
2. GAD: effective distance \(d_{\mathrm{eff}} = \int \kappa(\nabla h)\, ds\) — but source doesn't give formula, just concept [PAGE 3-4]. I should not invent formula. I can state that GAD is computed from full-fidelity distance/elevation streams but the exact kernel \(\kappa\) is not published in the provided text; this is a breakdown regime. Better to not invent. I can cite that GAD normalizes training and races wrt elevation [PAGE 3-4].
3. HBPM: \(\mathrm{HBPM} = \frac{\overline{\mathrm{HR}}\cdot \Delta t}{d}\) [beats/mile] [PAGE 7]. Heartbeat budget: \(B_{\mathrm{LT}} = \mathrm{HR}_{\mathrm{LT}} \times 3600\ \mathrm{s}\) [beats] for a 1-hour all-out effort [PAGE 7]. Example: \(180\,\mathrm{bpm}\times60\,\mathrm{min}=10{,}800\) beats; at 6:00/mile, \(10{,}800/10\,\mathrm{mi}=1{,}080\) beats/mile [PAGE 7].
4. Error metrics: RMSE \(=\sqrt{N^{-1}\sum_{i=1}^{N}(y_i-\hat y_i)^2}\) [minutes] [PAGE 8-9]. MAPE \(=100\%\cdot N^{-1}\sum |(y_i-\hat y_i)/y_i|\) [PAGE 9]. \(R^2 = 1 - \frac{\sum (y_i-\hat y_i)^2}{\sum (y_i-\bar y)^2}\) [dimensionless] [PAGE 9].
5. XGBoost hyperparameters: depth 8, min child weight 4, \(\eta=0.03\), \(\gamma=0\), \(n_{\mathrm{est}}=2000\) [PAGE 19]. These are configuration, not equations.

Breakdown regimes: GAD linearity invalid when downhill gradient exceeds braking tolerance [PAGE 4]; HBPM undefined without HR consent [PAGE 8]; MP features require known goal pace, unavailable at inference, so previous best or ballpark is used [PAGE 6]; course difficulty excludes weather and backloaded hill sequencing [PAGE 5]; glycogen ceiling 90–120 min is a population average, not individual [PAGE 2].

RETROCAUSAL_GENEALOGY:

Lineage: Bannister [PAGE 1], periodization Cold War [PAGE 1], Nike Breaking2 [PAGE 1], Bramble & Lieberman [PAGE 1 ref 4], Gonzalez glycogen [PAGE 2 ref 7], Riegel [PAGE 10 ref 16], Smyth & Muniz-Pumares critical speed [PAGE 10 ref 10], VDOT [PAGE 11 ref 11], Altini & Amft [PAGE 10 ref 18], Outside Magazine population vs individual critique [PAGE 10 ref 19]. Multi-week traps: 3-4 month cycle vs 6-month data window [PAGE 3]; glycogen 90-120 min [PAGE 2]; marathon peak age early-mid 30s vs other sports [PAGE 14]; Boston qualification cutoff recursion [PAGE 14]; round-boundary psychological bands [PAGE 10].

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: Dave favors mileage/long runs [PAGE 13-14]; Nikhil favors pace-specific accumulated distance [PAGE 13-14]. Under crisis (cutoff fear), each regresses to habit. Counter-trap: model prescribes Dave more intensity/less volume, Nikhil more volume [PAGE 14]. Clock: Boston cutoff 2:58:21 vs Dave's 2:58:39 [PAGE 14]; goal 2:55 to guarantee entry [PAGE 14]; round boundaries 3:00, 3:30, 4:00 [PAGE 10]. Recursive ToM: athlete models model's prescription, model anticipates athlete's training response, fixed point where prescription matches feasible adaptation within the 6-month window [PAGE 3].

CROSS_LAYER_VETO_ADJUDICATION:

Physical veto: GAD linear difficulty [PAGE 5] ignores that Boston's hills are backloaded miles 16-21 [PAGE 5]; downhill too steep causes eccentric loading not captured [PAGE 4]. Biomechanical veto: running economy and weight [PAGE 2, 13]; race weight complicated [PAGE 13]. Weather veto: not in model [PAGE 15]; Boston April vs Berlin September [PAGE 5]. Gear veto: shoes not incorporated [PAGE 15]. Physiological veto: LT estimated from sub-hour windows because few have 1-hour all-out [PAGE 7]; HR privacy [PAGE 8]. Each veto is a hard constraint: if violated, prediction domain is invalid.

RLVR_COUNTERFACTUAL_VETOES:

Need 3 verifiable veto scenarios + predictions.

Scenario 1 (HR privacy veto): Athlete lacks consented HR data -> HBPM feature unavailable [PAGE 8]. Veto condition: \(\mathrm{HR}_{\mathrm{consent}} = \emptyset\). Counterfactual prediction: model must rely on non-HR features only; because HBPM showed promise on the small consenting sample [PAGE 8], the per-athlete error is expected to exceed the cohort test RMSE of 8:46 [mm:ss] [PAGE 9], but the exact increment is not bounded by the source.

Scenario 2 (Weather veto): Race day in Boston April with adverse weather [PAGE 5]; model excludes weather [PAGE 15]. Veto condition: weather outside historical race-day envelope used for training. Counterfactual prediction: course-difficulty-only output (e.g., 3:01:33 for a 3:00 flat marathoner [PAGE 5]) is an optimistic lower bound; actual finish time shifts slower by an unbounded weather penalty because no weather coefficient exists in the feature set [PAGE 15].

Scenario 3 (Circular MP veto): At inference, goal pace MP is unknown [PAGE 6]; model substitutes previous best or ballpark estimate. Veto condition: athlete's current fitness differs from previous best by more than the feature's stability window. Counterfactual prediction: race-pace specificity features are miscalibrated; prediction error exceeds mean error 0:03 [mm:ss] and risks missing round-boundary targets (3:00, 3:30, 4:00) [PAGE 10] because the clustered bands show athletes manage to exact minute barriers [PAGE 10].

Each scenario is verifiable from source pages and includes a prediction (directional, not invented exact number).

Now ensure total word count >= 1000. I'll write generously. Also no betting terms.

Let's check if I accidentally used a toy equation. No Force/Fatigue. All equations formal.

Citations: Use [PAGE N] exactly.

Word count estimation: THINK_TRACE ~500. SOURCE_OPERATORS ~300. RETRO ~200. RECURSIVE ~200. CROSS ~200. RLVR ~200. Total ~1600. Good.

Need to ensure XML sections exact names. No extra sections outside? The user said across these exact XML sections. I should output only these sections? Probably can have some intro but safest to output exactly the sections in order. I'll output just the six XML sections.

Make sure THINK_TRACE >= 400 words. I'll count roughly.

THINK_TRACE draft:

"The paper frames marathon prediction as a distributed supervised regression over raw Strava activity streams..." I'll write ~500 words.

Let's write carefully.

One nuance: The source says "Pages: 17" but content goes to 20. I'll cite up to [PAGE 20] if needed, but I don't need 20. I'll cite [PAGE 19] for hardware.

Also include verbatim quotes where useful. I can include short quotes.

Let's draft final output.

Need to ensure LaTeX renders correctly. Use \( ... \) or \[ ... \]. I'll use inline and display.

No betting lines. Check: no "spread", "total", "moneyline", "odds". Fine.

Let's write.

For THINK_TRACE, deep multi-hop derivation:
1. Raw streams: GPS coordinates, speed, moving/resting times, elevation, HR, step rate at 1 Hz [PAGE 2]. 72 billion points.
2. Spark parallelization [PAGE 8].
3. Feature derivation from principles A-I [PAGE 2].
4. GAD [PAGE 3-4].
5. HBPM from LT [PAGE 7].
6. XGBoost regression [PAGE 8-9].
Gray zones: repeated athletes across marathons (356,618 marathons 2016-2020) could appear in both train and test if split is random by marathon [PAGE 9]; the paper does not state athlete-level stratification. This is a leakage gray zone. Also MP circularity [PAGE 6]. Also HBPM limited sample [PAGE 8]. Also R^2 can be high while individual errors matter [PAGE 10 Outside quote]. Also MAPE vs RMSE. Also course difficulty ignores backloaded hills [PAGE 5].

Write it out.

SOURCE_OPERATORS_AND_EQUATIONS: include equations.

RETROCAUSAL_GENEALOGY: mention multi-week traps explicitly.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION: veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

I will now produce final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper frames marathon prediction as a large-scale supervised regression over raw Strava activity streams sampled at 1 reading per second, yielding 72 billion total points across 47 million pretraining activities and 356,618 marathons from 2016-2020 [PAGE 2]. The first multi-hop is physical-signal ingestion: GPS coordinates, speed, moving/resting time, elevation, heart rate, and step rate are materialized through Apache Spark into 41 engineered features [PAGE 2, PAGE 8]. The second hop is physiological translation: training principles A-I (Training More, Consistency, Training Cycle Length, Long Runs, Workouts, Threshold, Running Economy, Terrain, Demographics) are converted into volume, gradient-adjusted distance (GAD), best-effort curves, race-pace specificity, workout clustering, and Heartbeats Per Mile (HBPM) [PAGE 2-8]. The third hop is model inference: XGBoost with grid-search cross-validation optimizes root-mean-squared error (RMSE) in minutes on a 70/15/15 train-validation-test split [PAGE 8-9].

Gray-zone audit reveals several breakdown regimes. First, the split is described by marathons, not athletes; because 356,618 marathons span 2016-2020, the same individual can plausibly contribute multiple races, and the text does not state athlete-level stratification, so train/test leakage through repeated subjects is an unverified gray zone [PAGE 2, PAGE 9]. Second, the race-pace specificity features suffer a chicken-and-egg circularity at inference: goal pace (MP) is the target being predicted, so test-time features must be computed from a previous best or ballpark estimate rather than the true race MP [PAGE 6]. Third, HBPM requires heart-rate data, but privacy regulations confined that feature to a small consenting sample, meaning the general population model operates without its most physiologically direct efficiency signal [PAGE 8]. Fourth, GAD course difficulty is a linear ratio of GAD to 26.22 miles and explicitly does not encode where hills occur on a course or weather conditions [PAGE 5]; Boston’s backloaded miles 16-21 and April weather volatility are therefore excluded from the difficulty scalar [PAGE 5]. Fifth, the authors cite Outside Magazine’s observation that population-level error metrics can be poor for individual decisions, yet they still report MAPE and R² alongside RMSE; R² can remain high while per-athlete errors remain decision-relevant [PAGE 10]. Sixth, the glycogen ceiling of 90-120 minutes is treated as a uniform bound despite inter-individual variation [PAGE 2]. These gray zones define the boundary between the paper’s population-level validity and its individual-prescription claims.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations extracted or implied from the source, with SI/information/probability units and page citations:

1. Gradient-Adjusted Distance (GAD) and course difficulty. GAD is the effective distance of a run or course accounting for elevation gradient, computed from full-fidelity distance and elevation streams [PAGE 3-4]. The published course-difficulty index is
\[
\mathcal{D}_{c} = \frac{\mathrm{GAD}_{c}}{L_{\mathrm{mar}}}, \qquad L_{\mathrm{mar}} = 26.22\ \mathrm{miles},
\]
which is dimensionless [PAGE 5, Equation (1)]. Example values: Boston \(\mathrm{GAD}=26.446\) miles, \(\mathcal{D}=1.0087\), equivalent 3:00 flat-marathon time \(3{:}01{:}33\); Chicago \(\mathrm{GAD}=26.236\) miles, \(\mathcal{D}=1.0007\), equivalent \(3{:}00{:}07\) [PAGE 5, Figure 3]. Breakdown regime: the linear ratio assumes elevation cost is additive and distance-independent; it does not encode hill placement (e.g., backloaded Boston miles 16-21) or weather [PAGE 5], and steep downhill gradients introduce eccentric braking costs not represented by a simple distance inflation [PAGE 4].

2. Heartbeats Per Mile (HBPM) and lactate-threshold budget. For an athlete with lactate-threshold heart rate \(\mathrm{HR}_{\mathrm{LT}}\) [beats/min], the one-hour all-out heartbeat budget is
\[
B_{\mathrm{LT}} = \mathrm{HR}_{\mathrm{LT}} \times 60\ \mathrm{min} \quad [\mathrm{beats}].
\]
HBPM for a segment of duration \(\Delta t\) [min] and distance \(d\) [miles] at average heart rate \(\overline{\mathrm{HR}}\) [beats/min] is
\[
\mathrm{HBPM} = \frac{\overline{\mathrm{HR}}\,\Delta t}{d} \quad [\mathrm{beats/mile}].
\]
Worked example from the text: \(\mathrm{HR}_{\mathrm{LT}}=180\ \mathrm{bpm}\Rightarrow B_{\mathrm{LT}}=10{,}800\) beats; at 6:00/mile, 60 minutes covers 10 miles, so \(\mathrm{HBPM}=1{,}080\ \mathrm{beats/mile}\) [PAGE 7]. For \(\mathrm{HR}_{\mathrm{LT}}=150\ \mathrm{bpm}\), \(B_{\mathrm{LT}}=9{,}000\) beats; at 7:00/mile and 150 bpm, 72 minutes covers 10.3 miles [PAGE 7]. Breakdown regime: HBPM is undefined for athletes without consented heart-rate streams; the authors state privacy rules limited HBPM to a small sample [PAGE 8]. Lactate threshold itself is estimated from sub-hour windows or the highest heart rate sustained for a full hour because few athletes possess a laboratory-measured one-hour all-out effort [PAGE 7].

3. Error metrics optimized and reported. The model minimizes RMSE,
\[
\mathrm{RMSE} = \sqrt{\frac{1}{N}\sum_{i=1}^{N}(y_i-\hat y_i)^2} \quad [\mathrm{minutes}],
\]
on finish time in minutes [PAGE 8-9]. Reported test-set performance: \(N=62{,}933\), mean error \(0{:}03\), RMSE \(8{:}46\) [mm:ss], MAPE \(2.7\%\), \(R^2=0.93\) [PAGE 9]. MAPE is
\[
\mathrm{MAPE} = \frac{100\%}{N}\sum_{i=1}^{N}\left|\frac{y_i-\hat y_i}{y_i}\right|.
\]
The coefficient of determination is
\[
R^2 = 1 - \frac{\sum_{i=1}^{N}(y_i-\hat y_i)^2}{\sum_{i=1}^{N}(y_i-\bar y)^2},
\]
dimensionless [PAGE 9]. Comparison baselines: Riegel + Runner’s World RMSE \(19{:}52\) [PAGE 9]; Vickers/Vertosick + FiveThirtyEight run on the Strava test set RMSE \(15{:}02\), MAPE \(4.6\%\), \(R^2=0.80\) [PAGE 9].

4. XGBoost configuration (not a derived equation, but a formal operator set) [PAGE 19]: max tree depth \(8\), minimum child weight \(4\), learning rate \(\eta=0.03\), gamma \(\gamma=0\), number of estimators \(2{,}000\), hardware \(60\) AWS i3.2xlarge machines (8 CPUs, 40 GB memory each). Breakdown regime: tree depth and estimator count impose a finite functional class; extrapolation beyond the feature support of the 6-month training window is not governed by these hyperparameters.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Cold War periodization and Roger Bannister’s sub-four-minute mile, which the authors cite as the foundational quest to link training to performance [PAGE 1], followed by Nike’s Breaking2 marginal-gain program [PAGE 1]. Evolutionary anthropology supplies the species-level rationale via Bramble and Lieberman’s endurance-running adaptation argument [PAGE 1, ref 4]. The physiological substrate for long-run features is the glycogen ceiling of 90-120 minutes drawn from Gonzalez et al. [PAGE 2, ref 7]. Methodologically, the paper descends from prior prediction literature: Peter Riegel’s formula and Runner’s World predictors [PAGE 10, ref 16], Vickers and Vertosick’s empirical race-time study [PAGE 10, ref 17], Smyth and Muniz-Pumares’ critical-speed extraction from raw training data [PAGE 10, ref 10], and Altini and Amft’s non-invasive physiological feature work [PAGE 10, ref 18]. The Outside Magazine critique that population error metrics are poor for individual decisions is explicitly internalized as the motivation for minute-level precision [PAGE 10, ref 19].

Multi-week traps structure the feature engineering. The conventional wisdom of a three-to-four-month marathon-specific cycle is tested against three-, six-, and twelve-month windows; six months is selected because it balances predictive performance with sample size [PAGE 3]. The 90-120-minute glycogen bound creates a trap for long-run prescription: few athletes run the full 26.2 miles in training, so the model infers endurance from runs over 90 and 120 minutes instead [PAGE 2]. Demographically, the authors note marathon peak occurs in the early-to-mid 30s, later than most other running events, implying that sustained mileage over years matters more than youthful speed [PAGE 14]. A race-specific temporal trap is the Boston qualification cutoff: Dave ran 2:58:39 at Boston 2019 but missed entry because the eventual cutoff was 2:58:21, driving his subsequent 2:55 goal to guarantee admission [PAGE 14]. Finally, psychological round-boundary clustering at 3:00, 3:30, 4:00, etc., reveals that athletes manage to minute-scale barriers across a race lasting hundreds of minutes [PAGE 10]. Each trap recurs across training cycles: an athlete who overcorrects after a missed cutoff enters the next 6-month window with a recalibrated but potentially mis-specified feature vector.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes how Dave and Nikhil respond to performance pressure. Dave’s training history is dominated by mileage and long runs (Training More, Long Runs); under the crisis of missing the Boston cutoff by 18 seconds, his habit regresses toward accumulating time on feet [PAGE 13-14]. Nikhil’s habit regresses toward pace-specific accumulation: he ran in the lower 10-15% for mileage but logged high cumulative distance around marathon pace [PAGE 13-14]. The model acts as a counter-trap by prescribing the opposite of each athlete’s crisis habit: Dave is advised to reduce pure volume and instead spend miles at faster speeds (Workouts, Threshold, Running Economy), while Nikhil is advised to increase mileage across long and medium-long runs [PAGE 14]. 

The clock layer imposes hard deadlines that make the recursion acute. The Boston cutoff of 2:58:21 versus Dave’s 2:58:39 actual time creates a 18-second recursive gap: the model’s prescription must close a gap smaller than the typical round-boundary psychological band [PAGE 10, PAGE 14]. The shared 2:55 goal is set to guarantee entry, converting a probabilistic qualification risk into a deterministic time target [PAGE 14]. The observed clustering of actual finish times at round boundaries (3:00, 3:30, 4:00) indicates that athletes’ pacing references are discrete, not continuous, so the model’s continuous RMSE-optimal output must be interpreted against these self-imposed clocks [PAGE 10].

Recursive theory of mind closes the loop: the athlete anticipates what the model will prescribe, adjusts training accordingly, and the model must anticipate that adjustment when estimating future fitness. A fixed point is reached only when the prescribed feature deltas (e.g., Varun’s mileage raised to the 2:25-2:30 average, shifting his prediction to 2:32:12) are physiologically attainable within the six-month adaptation window without triggering injury or burnout [PAGE 13-14]. If the athlete’s crisis habit regression outruns the model’s counter-trap, the system oscillates between volume-dominant and intensity-dominant cycles rather than converging on the goal time.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto: The course-difficulty index \(\mathcal{D}_{c}=\mathrm{GAD}_{c}/26.22\) is a scalar that explicitly ignores where elevation occurs on the course [PAGE 5]. Boston’s Heartbreak Hill at miles 16-21 arrives on tired legs and is worse than the same elevation gain early in the race [PAGE 5]; therefore any prediction that treats Boston’s \(\mathcal{D}=1.0087\) as a complete course veto is invalidated for pacing strategy. Steep downhill gradients also exceed the “not too steep” bound mentioned in the text, introducing eccentric loading and braking cost not represented by GAD [PAGE 4]. This is a hard physical veto: course difficulty alone cannot predict time on a backloaded or steep-descent course.

Biomechanical veto: Running economy and body mass enter as demographic and physiological modifiers [PAGE 2, Principle G and I]. The authors caution that race weight is complicated—lighter weight lowers energy expenditure but must not jeopardize biomechanical, nutritional, and psychological health [PAGE 13]. Thus a prescription that lowers weight without checking biomechanical health is vetoed at the individual layer even if the feature importance table ranks weight above age [PAGE 10-11].

Weather veto: The authors state the model does not incorporate weather and that Boston’s April weather is notoriously fickle compared with Berlin in September [PAGE 5, PAGE 15]. Since weather is absent from the 41 features [PAGE 17-18], any race-day prediction under non-representative conditions (heat, wind, precipitation) is vetoed by the environmental layer. Gear veto: running-shoe technology is likewise absent despite the cited innovation arms race [PAGE 15, ref 20-21], so footwear changes between training and race day constitute an unmodeled veto.

Physiological veto: Lactate threshold is estimated from sub-hour heart-rate windows because few athletes have a measured one-hour all-out effort [PAGE 7]. HBPM is unavailable for the non-consenting majority [PAGE 8]. When either LT or HBPM is missing, the aerobic-efficiency layer is vetoed and the model must rely on volume and best-effort proxies, degrading individual precision below the cohort RMSE of 8:46 minutes [PAGE 9].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Heart-rate privacy veto. Veto condition: an athlete does not consent to heart-rate processing, so HBPM is null [PAGE 8]. Counterfactual prediction: the model must generate a finish-time estimate using only non-HR features. Because HBPM showed promise on the small consenting subsample [PAGE 8], the per-athlete error is expected to exceed the reported test-set RMSE of 8 minutes 46 seconds [PAGE 9]; the exact increment is not bounded by the source, but the direction is a degradation in individual precision relative to the 2.7% MAPE cohort.

Scenario 2 — Weather-envelope veto. Veto condition: race-day weather falls outside the conditions implicitly encoded in the training features, because weather is not a model input [PAGE 15] and Boston’s April weather is explicitly excluded from course difficulty [PAGE 5]. Counterfactual prediction: for a flat-course 3:00 marathoner, the Boston difficulty-scaled output of 3:01:33 [PAGE 5] is an optimistic lower bound; under adverse April weather the actual finish time shifts slower by an unbounded penalty, since no weather coefficient exists in the feature set to absorb the shift.

Scenario 3 — Circular goal-pace veto. Veto condition: at inference, marathon pace (MP) is unknown and must be replaced by a previous best or ballpark estimate [PAGE 6]. If the athlete’s current fitness has drifted from that estimate, the race-pace specificity features (longest distance around MP, cumulative distance around MP, etc.) are mis-specified [PAGE 6]. Counterfactual prediction: finish-time error exceeds the test-set mean error of 3 seconds and risks missing discrete round-boundary targets such as 3:00, 3:30, or 4:00 [PAGE 10], because athletes cluster at these minute barriers and a stale MP biases the specificity features away from the true race-effort duration.
</RLVR_COUNTERFACTUAL_VETOES>