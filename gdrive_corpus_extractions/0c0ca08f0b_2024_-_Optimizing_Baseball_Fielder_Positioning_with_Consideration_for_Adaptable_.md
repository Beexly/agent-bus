---
source: "2024 - Optimizing Baseball Fielder Positioning with Consideration for Adaptable Hitters - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2024"
pages: 21
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6297
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source paper about optimizing baseball fielder positioning with adaptable hitters. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully extract page numbers. The source text has page markers like "1", "2", ... "26" embedded in the text. I need to cite exact [PAGE N] markers.

Let me map content to pages based on the page numbers visible in the text:

Page 1: Introduction start, equations (1) and (2) mentioned but rendered as blanks? The text shows "identifying a p* that satisfies" then blank image likely. Page 1 ends with "1" at bottom? Actually looking:
- Page 1: Introduction, equations referenced, ends with page number "1"
- Page 2: Section 2 start, h,v,s definitions, Figure 1 mention, independence assumptions
- Page 3: Figure 2, Figure 3 mention, joint distribution factorization
- Page 4: Section 2.1, Beta mixture details, page number 4? Wait let's look carefully.

Actually the text has page breaks indicated by numbers alone on lines:
"1" after intro paragraph? Let's trace:

After intro paragraph: "1" appears.
Then Section 2 starts.
"2" appears after paragraph about N.
"3" appears after Figure 3 discussion? Actually:
- "Figure 3..." then "4" appears? Let's re-read.

The text:
"...Thus, hitters with little ball-in-play data... Section 2..." then "4" appears? Let's look:

Page markers I see:
"1" (after intro equations discussion)
"2" (after Section 2 intro paragraph ending "...we create our own model.")
"3" (after Figure 3 discussion and factorization equation? Actually "3" appears after "Thus, hitters..."? Let's check sequence.)

Let's parse sequentially:

Text starts. Page 1 content includes intro, equations (1) and (2) references. At end of intro before Section 2: "1". So Page 1.

Section 2. "Denote h, v, s...". Paragraph ends "...we create our own model." Then "2". So Page 2.

"Denote h, v, s..." continues? Actually after "2" we have "Denote ℎ _,_ 𝑣 _,_ and 𝑠..." Wait that seems redundant. Let's look: After "2" there is "Denote ℎ _,_ 𝑣 _,_ and 𝑠 as the horizontal spray angle..." So Page 2 contains Section 2 start and maybe more.

Then Figure 1 discussion. "3" appears after Figure 1? The text: "Figure 1: ... Next, the relationship... Figure 2... Figure 3...". Then "3" appears after paragraph about Figure 3? Let's see: "Figure 3: ... This suggests that exit speed is conditionally independent...". Then "4" appears. So Page 3 contains Figure 2 and 3 discussion and factorization.

Page 4: "4" then Section 2.1 starts? Actually after "4" we have "Figure 4 shows..."? Wait: "4" appears, then "Figure 4 shows the histogram...". Hmm let's check exact sequence:

After factorization equation: "The following subsections present models... 4". Then "Figure 4 shows...". So Page 4 starts with subsection 2.1? Actually: "4 [newline] Figure 4 shows..." That seems like page 4 contains end of Section 2 intro and start of 2.1? Wait no, before "4" we had text about hierarchical model. Let's re-examine:

"Thus, the joint probability distribution of ℎ _,_ 𝑣 _,_ and 𝑠 can be written as: [equation] where the first equality follows from... The following subsections present models for the distributions... In each case a Bayesian hierarchical model is used. This provides individual hitter distributions... Thus, hitters with little ball-in-play data... Section 2..." Then "4". So page 3 ends with that paragraph? Then page 4 starts with "Figure 4 shows..."? No, before "4" there might be a missing image. Actually after "Section 2" there might be figure. Let's not overcomplicate. I need to cite page numbers roughly where content appears. Since the user provided page numbers inline, I can cite them as they appear.

Let's list page numbers I see in order:
1 (after intro)
2 (after Section 2 opening paragraph)
3 (after Figure 3 / independence discussion)
4 (after hierarchical intro / before Figure 4)
5 (after Figure 4 / Beta mixture discussion)
6 (after hierarchical model spray angle equations)
7 (after Figure 5 / priors discussion)
8 (after exit speed hierarchical model / before Figure 6? Actually "8" appears before Figure 6? Let's see: "8 [newline] Figure 6: Histograms..." so Page 8 has Figure 6.)
9 (after exit speed subsection / before Figure 7)
10 (after ground ball model equation (9))
11 (after Figure 9 discussion)
12 (after Figure 11 / Tropicana Field assumption)
13 (after "For the remainder of this paper we assume the batters and defenses are playing in Tropicana Field.")
14 (after Figure 12 discussion)
15 (after overall out model equation / before final preparations?)
16 (after projected SGD constraints list)
17 (after optimization results testing paragraph)
18 (after Section 4 intro / before approximate equilibria)
19 (after Figure 15 / shift-beaters)
20 (after McCormick equilibrium discussion)
21 (after Figure 17 / bunt distribution)
22 (after Figure 18 / Santana discussion)
23 (after Santana discussion / before Rangers model / Gallo)
24 (after Gallo discussion)
25 (after Conclusion / References start)
26 (after References end)

I need to be careful: The page numbers appear as standalone numbers. I will cite them as [PAGE N] where N corresponds.

Now, content requirements:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). Must discuss derivation of the joint distribution, the game-theoretic equilibrium, gradient optimization, projected constraints, wOBA-affine relationship, etc. Also audit gray zones: proprietary Texas Rangers data not disclosed, assumption of Tropicana Field, public vs proprietary starting positions, batter adaptation modeling limitations, etc.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. Need to write out equations from paper:
- Joint factorization: p(h,v,s) = p(h) p(v|h) p(s|v) [PAGE 3]
- Spray angle mixture: p_i(h) ~ π_i1·Beta(α_i1, β_i1) + π_i2·Beta(α_i2, β_i2) [PAGE 6]
- Launch angle: v ~ N(μ_i1, σ_i1) if h<0, N(μ_i2, σ_i2) if h≥0 [PAGE 7]
- Exit speed transformed: z = s_max - s, gamma distributions for four launch angle types [PAGE 8]
- Ground ball out model: f_gb(b,p) = σ(-2.78 -0.15 a* + 5.87 b̃ -1.32 b̃²) [PAGE 10]
- Non-ground ball: f_¬gb = σ(δ̃) where δ̃ = hang time - time to landing spot at 27 ft/s [PAGE 13? Actually page 13? Let's check: Equation appears after page 12? The text shows equation then "13" maybe. Let's check sequence: After Tropicana Field paragraph "13" appears? Actually: "For the remainder... Tropicana Field. [newline] 13 [newline] The model of non-ground ball outs is learned... equation". Wait the text shows: "where once again σ is the sigmoid function... [newline] Figure 12... [newline] 14". Let's look: After the non-ground ball equation, there is "Figure 12 shows..." then "14". Actually page numbers: after Tropicana assumption there is "13"? Let's re-read:

"...we assume the batters and defenses are playing in Tropicana Field. [newline] 13 [newline] The model of non-ground ball outs is learned using logistic regression. Denote δ7...". Wait the text actually shows:

"For the remainder of this paper we assume the batters and defenses are playing in Tropicana Field.

13

The model of non-ground ball outs is learned using logistic regression..."

Yes, so equation for non-ground ball is on Page 13.

- Total probability: f(b,p) = 1_gb(b) f_gb + 1_¬gb(b) f_¬gb [PAGE 14? Actually text shows equation then "14"? Let's check: "Applying the law of total probability, we have [equation] where 1_gb... [newline] The last equality... [newline] The last piece... [newline] 14"? Hmm. Let's see: After overall out model equation, there is "14"? Actually text: "where 𝟙gb(𝑏) is the indicator function, [equation]. The last equality in (11)... [newline] The last piece... [newline] 14"? Wait I see "14" after Figure 12 discussion? Let's trace carefully.

From text:
"Figure 12 shows a calibration plot... [newline] As with the ground ball out model... [newline] 14 [newline] 3.3. Final Preparations for Optimization... [newline] We can now define the overall out model f... [equation] where 1_gb... [equation] The last equality...". Hmm maybe page 14 starts with 3.3. Let's check sequence:

After non-ground ball model equation: "Figure 12 shows... [newline] ...makes well-calibrated predictions. Additionally, f¬gb incentivizes fielders... [newline] 14 [newline] 3.3. Final Preparations...". So Page 14 contains end of 3.2 and start of 3.3? Actually page 14 seems to contain 3.3. Wait there is "14" before 3.3? Let's look: "The last piece... [newline] where wOBA weights... [newline] 15 [newline] 3.4. Optimization..." Hmm no.

Let's re-read the section:

After non-ground ball equation:
"Figure 12 shows a calibration plot... [newline] ...makes well-calibrated predictions. Additionally, f¬gb incentivizes fielders to increase the difference... Thus, this model will place fielders into positions that will help them catch more batted balls in the air.

14

3.3. Final Preparations for Optimization

We can now define the overall out model f used in our optimization objective functions (1) and (2). Applying the law of total probability, we have

[equation]

where 1_gb(b) is the indicator function,

[equation]

The last equality in (11) results because we know whether b is a ground ball or not... The last piece of formulating (2) is to define f_woba... [newline] 15"

Wait maybe page 15 is after f_woba equation? Let's check: After f_woba definition: "We used the wOBA weights from 2023: w1B = 0.883... [newline] Note that the wOBA weight of an out is always 0... [newline] 15? No, the text shows:

"We used the wOBA weights from 2023: w1B = 0.883, w2B = 1.244, w3B = 1.569, and wHR = 2.004 [6].

Note that the wOBA weight of an out is always 0, so we could calculate the expected wOBA of a batted ball without the condition that it is not an out as

[equation]

where p(o|b) is the probability of an out on batted ball b. Substituting f(b,p) in for p(o|b) reveals how we derived the minimize expected wOBA objective function (2).

16? No, next is 3.4 Optimization..."

Actually after that paragraph: "3.4. Optimization with Gradient Descent... Let b=... [newline] 15". Hmm maybe page 15 is where 3.4 starts. Let's look: "where f(b,p) ... (2).

15

3.4. Optimization with Gradient Descent". Yes, so page 15 starts with 3.4.

Then approximate solutions equations (13) and (14) appear, then "16"? Let's check: "We use mini-batch stochastic gradient descent... [newline] When we draw batted ball samples... [newline] Figure 13... [newline] Recall that P! is... [newline] 16 [newline] 1. The first baseman must be within 40 feet...". So page 16 contains constraints list.

Then after constraints: "We also allow for the option to relax... [newline] When comparing... [newline] 17 [newline] 3.5. Optimization Results". So page 17 contains 3.5 start.

Then results, "17" again? Actually after testing paragraph: "We ultimately had 62,552 plays left for testing. [newline] Using our positioning... [newline] 17? No, page number might be 17 then 18? Let's see: "As a final check... [newline] 18 [newline] 4. Strategizing Against Adaptable Hitters". So page 18 starts Section 4.

Then Section 4 content, approximate equilibria equations (15) and (16) maybe on page 18? Text: "Applying (15)... [newline] 18 [newline] ... To find these approximate equilibria..." Wait the text shows: "where b is the sample... [newline] Likewise, the approximate equilibria when the objective function is wOBA in (4) are... [newline] 18 [newline] To find these approximate equilibria...". So page 18 contains end of approximate equilibria and start of solution method.

Then Section 4.1 Shift-Beaters: "19 [newline] Figure 15...". So page 19 has Figure 15.

Then "20 [newline] It is not true in general...". Page 20 has McCormick results and transition to 4.2.

Then "21 [newline] Figure 17...". Page 21 has bunt distribution.

Then "22 [newline] Figure 18...". Page 22 has Santana figure.

Then "23 [newline] Admittedly we are not convinced... [newline] Consider Joey Gallo...". Page 23 has Gallo intro.

Then "24 [newline] expected batting average... [newline] 5. Conclusion". Page 24 has Gallo results and conclusion start.

Then "25 [newline] References". Page 25 references start.

Then "26 [newline] [end references]". Page 26 references end.

I need to be reasonably accurate but not obsessive. I'll cite [PAGE N] for key equations.

Now sections:

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Discuss lineage: Tango, Lichtman, Dolphin's The Book [30] cited [PAGE 22], Carleton [13] shift critique, Easton & Becker integer programming [15], Harris et al. swing shift [17], Powers batted-ball distribution [28], Alan Nathan trajectory calculator [19], XGBoost [5], pybaseball [8,10,22], MLB shift ban rule [4], Tropicana Field dome [PAGE 12], multi-week traps: batter adaptation over time, shift-beater identification from 2021-2022 data [PAGE 19], bunting threat equilibria, defensive commitment before batter observation (Stackelberg game), sequential game timing.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Discuss defense commits first (crisis habit: extreme shift), batter observes and best-responds (pull vs oppo, bunt vs swing), defense anticipates this recursion (counter-trap: move third baseman shallower), clock: pitch-by-pitch or at-bat timing, whether batter can reliably execute bunt under pressure, regression to mean if batter abandons bunt after early failures, equilibrium vs dominant strategy.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Discuss physical veto: Tropicana Field dome assumption (consistent atmosphere), Coors Field would break trajectory model [PAGE 13], biomechanical: 27 ft/s sprint speed assumption, 40 ft first baseman constraint, 95 ft dirt infield constraint, two infielders either side of second base [PAGE 16], exit speed transformation z = s_max - s requiring positive support, gamma distribution, launch angle type thresholds (ground ball v≤10, etc.) [PAGE 3], weather veto: dome vs outdoor wind/temp/humidity, air density effects on hang time and distance [PAGE 12-13], proprietary data veto: public average starting positions vs actual starting positions, Texas Rangers proprietary model gave expected BA 0.292 vs 0.319 public [PAGE 17], third baseman depth too deep for bunts in public model [PAGE 23].

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? I need to propose 3 scenarios where the model's predictions would be vetoed/falsified, with predictions. Must be verifiable. Examples:
1. If a pull-heavy left-handed batter actually bunts > X% against shifted defense, the equilibrium predicted (swing away) is vetoed because bunt expected BA is much higher (0.453 vs 0.268 for Santana [PAGE 22]). Prediction: public shift vs no-shift data will show bunting BA > 0.40 against extreme third-base-side shift.
2. If weather deviates from Tropicana dome (e.g., Coors Field high altitude), the XGBoost hang-time/landing-distance model trained on Tropicana will systematically over/under-predict catch probability; veto if calibration error > 5% on holdout from outdoor park. Prediction: out probability error correlates with air density.
3. If batter adaptation set 𝒟 includes more than two actions (e.g., full spray angle continuum), the two-action equilibrium collapses; the optimizer may become least-exploitable but computationally intractable; veto if gradient descent fails to converge for |𝒟| > 50. Prediction: with 90 spray-angle actions, equilibrium converges to uniform coverage but expected outs drop by >10% vs fixed-historical positioning.

I need to avoid betting lines entirely. No odds, spreads, moneylines, totals.

Need formal LaTeX equations with units. Must state assumptions and exact singularity/breakdown regimes.

Word count: >= 1000 words total across sections. THINK_TRACE alone >=400 words.

Let's draft carefully.

I need to include verbatim quotes where citing pages. E.g., "The ball time to fielder plot shows that for low times..." [PAGE 11].

Let's write the response with XML sections exactly as specified. No extra sections.

I need to ensure no fake toy equations. Use real equations from paper. Define units: degrees for angles, ft/s for speed, seconds for time, feet for distance, probability dimensionless [0,1], wOBA dimensionless.

Let's compose.

THINK_TRACE >=400 words. I'll write maybe 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Include LaTeX blocks. Cite pages.

RETROCAUSAL_GENEALOGY: historical lineage, multi-week traps.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions.

Let's ensure total >1000 words. I'll aim for ~1500-2000 words.

Be careful: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I won't invent any.

Also: "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I need to include assumptions and breakdown regimes for equations.

Let's draft each section.

THINK_TRACE:
- Multi-hop derivation: batter-specific joint distribution p(h,v,s) factorized via chain rule and conditional independence s ⟂ h | v [PAGE 3].
- Spray angle modeled as 2-component beta mixture on [0,1] after shifting/scaling; hierarchical priors shared across batters [PAGE 5-6].
- Launch angle conditional on spray side: normals with empirically estimated priors (pulled mean 5.1°, sd 5.2°; oppo mean 21.0°, sd 5.7°) [PAGE 7].
- Exit speed transformed z = s_max - s to right-skew; gamma per launch-angle type (GB, LD, FB, PU) [PAGE 8].
- Out model f splits ground vs non-ground; ground ball logistic regression with features a* (angle difference) and b̃ (ball time to fielder = depth / exit speed) [PAGE 10-11].
- Non-ground ball logistic regression with δ = hang time - time to landing spot at 27 ft/s [PAGE 13].
- Overall f via law of total probability [PAGE 14].
- wOBA affine to runs; expected wOBA minimization equivalent to runs minimization [PAGE 1, 14].
- Optimization via projected SGD with 2023 shift-ban constraints [PAGE 16].
- Sequential zero-sum game: defense commits p, batter observes and selects d ∈ 𝒟; equilibrium conditions (3)-(4) [PAGE 1-2, 18].
- Gray-zone audit: proprietary Rangers data not disclosed; public model expected BA 0.319 vs actual 0.293 discrepancy [PAGE 17]; Tropicana Field assumption limits generalizability to Coors Field [PAGE 13]; batter action set 𝒟 limited to {pull, oppo} or {bunt, swing}, not full continuum [PAGE 18]; public model underestimates bunt depth relationship [PAGE 23]; equilibrium assumes perfect batter observation and instant best-response [PAGE 18].

SOURCE_OPERATORS_AND_EQUATIONS:
Write equations.

RETROCAUSAL_GENEALOGY:
- Lineage: Carleton [13] shift skepticism; Tango et al. The Book [30] bunt threat quote; Easton & Becker [15] integer programming; Harris et al. [17]; Powers [28] batted-ball distribution; Alan Nathan trajectory calculator [19]; MLB shift ban rule [4] effective 2023; pybaseball/Statcast 2018-2022 [PAGE 2]; 2023 ball tracking data [PAGE 10].
- Multi-week traps: shift-beater identification uses 2021-2022 data [PAGE 19]; batter adaptation may lag or regress; bunting threat requires repeated reps; defensive equilibrium may induce batter to swing away more often but bunt threat persists; if defense over-adjusts to bunt, swing-away BA rises (Santana 0.272 vs 0.268 blue [PAGE 22]); multi-week selection bias: only hitters with 100+ shifted/non-shifted balls considered [PAGE 19].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: defense defaults to extreme pull-side shift because historically effective; batter's crisis habit is to keep pulling; regression to historical tendency unless counter-incentivized.
- Counter-trap: defense anticipates bunt and moves third baseman shallower; batter observes and switches back to swing away; equilibrium yields higher BA than naive shift but lower than unadjusted shift (Gallo 0.226 vs 0.223 blue? Wait text says 0.226 equilibrium vs 0.223 blue swing away? Actually text: "when he swings away against the blue defense the expected average is 0.223. In the equilibrium, Gallo's optimal strategy is to swing away, which gives an expected batting average of 0.226." So equilibrium BA slightly higher than blue swing away because third baseman moved shallower, making swing away slightly more productive? Actually moving third baseman shallower might open gaps. Anyway.)
- Clock: at-bat timing; batter must decide bunt before pitch; defense sets positioning before pitch; recursive depth limited by game clock and pitch clock; if batter hesitates, bunt threat loses credibility.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: Tropicana Field dome, consistent atmosphere; breakdown at Coors Field due to air density [PAGE 12-13].
- Biomechanical: 27 ft/s MLB average sprint speed; if fielder speed differs, δ changes linearly; 40 ft first baseman constraint; 95 ft dirt infield; two infielders either side of second base [PAGE 16]; breakdown if fielder cannot reach depth due to reaction time not modeled.
- Weather: dome vs outdoor wind, temperature, humidity; XGBoost trained on Tropicana may mispredict hang time/landing distance [PAGE 12].
- Proprietary data veto: public average starting positions produce expected BA 0.319 vs actual 0.293 [PAGE 17]; proprietary model fixes this; public model underestimates bunt fielding depth relationship [PAGE 23].

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
1. Bunt execution veto: If Santana/Gallo-type pull-heavy LH batter bunts against shifted defense and achieves BA > 0.40, the model's assumption that bunt is a credible threat is validated; however if equilibrium defense does not move third baseman enough (public model too deep), the predicted equilibrium swing-away BA of 0.272 [PAGE 22] will be vetoed by observed higher BA. Prediction: actual BA against equilibrium positioning will exceed 0.30 if third baseman depth > 90 ft.
2. Weather/trajectory veto: Apply Tropicana-trained XGBoost hang-time model to Coors Field; if calibration error > 0.05 in out probability, the non-ground ball out model breaks down because air density changes drag [PAGE 13]. Prediction: systematic overestimation of catch probability at altitude by >7%.
3. Action-set cardinality veto: If batter's 𝒟 expands beyond two actions to a continuum of spray angles (90 discrete actions mentioned [PAGE 18]), the gradient-based equilibrium may fail to converge or yield least-exploitable uniform positioning; veto if expected outs drop >10% relative to fixed-historical baseline. Prediction: with full spray-angle adaptation, equilibrium expected outs decrease by at least 0.12 per batted ball versus static positioning.

Need to ensure units are clear.

Now write final answer with exact XML tags. No markdown outside? The user wants XML sections. I can include LaTeX inside. I'll write plain text with LaTeX.

Word count check: THINK_TRACE needs >=400 words. I'll write maybe 500. Total definitely >1000.

Let's ensure I don't mention betting. No spreads, totals, moneylines, odds. I won't.

Citations: Use [PAGE N] exactly.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds through four nested hops: (1) estimation of a batter-specific joint distribution over batted-ball kinematics, (2) construction of trajectory-conditioned out and wOBA models, (3) continuous constrained optimization of fielder coordinates, and (4) a Stackelberg zero-sum equilibrium in which the batter observes the defense before selecting a batted-ball distribution.

First hop. The joint density p(h,v,s) over horizontal spray angle h (degrees), vertical launch angle v (degrees), and exit speed s (ft/s) is factorized by the chain rule and the conditional-independence assumption s ⟂ h | v, giving p(h,v,s) = p(h) p(v|h) p(s|v) [PAGE 3]. The paper supports this with Figure 2 and Figure 3 showing exit-speed dependence on launch angle and conditional independence from spray angle given launch angle [PAGE 3]. Horizontal spray angle is pre-processed by sign-flipping for left-handed batters, truncating to [-55°,55°], and shifting/scaling to [0,1] so a beta mixture is applicable [PAGE 4]. The estimated population density is 0.4·Beta(3,9) + 0.6·Beta(3,2) [PAGE 5]. Batter-specific parameters are drawn from hierarchical priors and estimated by ADVI; switch hitters receive separate left- and right-handed fits [PAGE 6].

Second hop. Launch angle is modeled as two normals conditional on spray side: pulled (h<0) and opposite-field (h≥0) [PAGE 7]. Empirical priors are normal for means (pulled 5.1°, sd 5.2°; oppo 21.0°, sd 5.7°) and gamma for standard deviations [PAGE 7]. Exit speed is left-skewed, so it is transformed by z = s_max − s to induce right skew and fit gamma distributions separately for ground balls (v≤10°), line drives (10°<v≤25°), fly balls (25°<v≤50°), and pop-ups (v>50°) [PAGE 3, PAGE 8]. The out model f(b,p) separates ground balls from non-ground balls because ground-ball outs require a throw to first base. The ground-ball logistic regression uses a* (minimum absolute spray-angle difference to the nearest infielder, degrees) and b̃ (ball time to fielder = fielder depth / exit speed, seconds): f_gb(b,p) = σ(−2.78 − 0.15a* + 5.87b̃ − 1.32b̃²) [PAGE 10]. Figure 9 shows that low ball time to fielder (shallow fielder or hard-hit ball) improves log odds by playing deeper, while large time (deep fielder or weak contact) improves log odds by playing shallower [PAGE 11]. The non-ground-ball model uses δ̃ = hang time − (time for fielder to reach landing spot at 27 ft/s), seconds, in a logistic regression [PAGE 13]. The full out model applies the law of total probability with indicator 𝟙_gb(b) ∈ {0,1} [PAGE 14]. Expected wOBA is affine to runs, and because wOBA of an out is zero, minimizing expected wOBA is equivalent to minimizing expected runs [PAGE 1, PAGE 14].

Third hop. Optimization uses mini-batch stochastic gradient descent with momentum over samples b = [b₁,…,b_N] drawn from each batter’s estimated distribution [PAGE 15]. The admissible set P is constrained by the 2023 MLB shift ban: first baseman within 40 ft of first base, all infielders within 95 ft of the pitching rubber, and exactly two infielders on either side of second base; violations are projected back by preserving relative angle or depth while snapping to the boundary [PAGE 16]. The paper reports that wOBA-optimized positioning beats out-optimized positioning on both expected outs and expected wOBA [PAGE 16]. Testing on 62,552 2023 batted balls at Tropicana Field yields expected BA 0.305 vs 0.320 for MLB average and expected wOBA 0.308 vs 0.321, preventing roughly 938 hits and 675 runs [PAGE 17]. A proprietary Texas Rangers model removes the public starting-position bias: expected BA on average positions falls from 0.319 (public) to 0.292 (proprietary), close to actual 0.293, and optimal proprietary positions reach 0.281 [PAGE 17].

Fourth hop. The sequential game models batter adaptability: defense commits to p ∈ P first, batter observes p and selects d ∈ 𝒟 to minimize outs or maximize runs [PAGE 1, PAGE 18]. Equilibrium conditions (3) and (4) reverse max/min roles depending on objective [PAGE 1–2]. Approximate equilibria are computed by sampling from each d ∈ 𝒟 and taking min over 𝒟 for outs or max over 𝒟 for wOBA at each gradient step [PAGE 18]. Two case studies are examined. For shift-beater Chas McCormick, 𝒟 = {d_oppo, d_pull}; the pull strategy dominates, so the equilibrium equals the pull-defense and expected BA is 0.274 [PAGE 20]. For Carlos Santana and Joey Gallo, 𝒟 = {d_bunt, d_swing}; bunting against an extreme shift yields very high expected BA (Santana 0.453 vs 0.268 swing against blue; Gallo 0.574 vs 0.223 swing against blue), forcing the defense to move the third baseman shallower, after which swinging away is optimal in equilibrium (Santana 0.272, Gallo 0.226) [PAGE 22, PAGE 24].

Gray-zone audit. The public out model assumes average starting positions rather than actual fielder locations, producing a material expected-BA discrepancy (0.319 vs actual 0.293) that only the undisclosed Rangers proprietary model resolves [PAGE 17]. The trajectory and hang-time models are trained exclusively at Tropicana Field, a dome with consistent atmosphere; the paper explicitly notes they may be less predictive at Coors Field [PAGE 13]. The batter action set 𝒟 is artificially small ({pull, oppo} or {bunt, swing}) despite the paper acknowledging a continuum of up to 90 spray-angle actions [PAGE 18]. Equilibrium computation assumes perfect, costless batter observation and instantaneous best-response, ignoring execution error, pitch sequencing, and the pitch clock. The public model also underestimates the relationship between third-baseman depth and bunt out probability, admitted as a shortcoming [PAGE 23]. These are not betting concerns but structural identifiability and external-validity limits.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Joint kinematic density (dimensionless probability density over h ∈ [-55°,55°], v ∈ ℝ, s ∈ (0,∞)):
p(h,v,s) = p(h) p(v|h) p(s|v) \quad \text{by } s \perp h \mid v \text{ [PAGE 3]}

Batter-specific spray-angle mixture after shifting/scaling to u ∈ [0,1] (dimensionless):
p_i(h) \sim \pi_{i1}\cdot\mathrm{Beta}(\alpha_{i1},\beta_{i1}) + \pi_{i2}\cdot\mathrm{Beta}(\alpha_{i2},\beta_{i2}) \quad \text{[PAGE 6]}
Population anchor: 0.4\cdot\mathrm{Beta}(3,9) + 0.6\cdot\mathrm{Beta}(3,2) \text{ [PAGE 5]}

Launch-angle conditional normals (v in degrees):
v \sim \begin{cases}
\mathcal{N}(\mu_{i1},\sigma_{i1}) & h<0 \text{ (pulled)}\\
\mathcal{N}(\mu_{i2},\sigma_{i2}) & h\ge 0 \text{ (oppo)}
\end{cases}
\quad \text{priors: } \mu \sim \mathcal{N}([5.1,21.0],[5.2,5.7]),\ \sigma \sim \mathrm{Gamma}([137.9,76.8],[5.4,2.9]) \text{ [PAGE 7]}

Exit-speed transform (z in ft/s): z = s_{\max} - s, then z \sim \mathrm{Gamma}(\alpha,\beta) per launch-angle type \{GB, LD, FB, PU\} \text{ [PAGE 3, PAGE 8]}

Ground-ball out model (probability dimensionless [0,1]):
f_{gb}(b,p) = \sigma(-2.78 - 0.15a^* + 5.87\tilde b - 1.32\tilde b^2), \quad \sigma(x) = \frac{1}{1+e^{-x}}
where a^* is minimum absolute spray-angle difference to nearest infielder (degrees), \tilde b = \text{depth}/\text{exit speed} (seconds) [PAGE 10]

Non-ground-ball out model:
f_{\neg gb}(b,p) = \sigma(\tilde\delta), \quad \tilde\delta = \text{hang time} - \frac{\text{distance to landing spot}}{27\ \mathrm{ft/s}} \text{ [PAGE 13]}

Overall out model via law of total probability (probability dimensionless):
f(b,p) = \mathbb{1}_{gb}(b) f_{gb}(b,p) + \mathbb{1}_{\neg gb}(b) f_{\neg gb}(b,p), \quad \mathbb{1}_{gb}(b)\in\{0,1\} \text{ [PAGE 14]}

Expected wOBA given not-out (dimensionless wOBA units):
\mathbb{E}[\mathrm{wOBA}\mid b,\neg\text{out}] = w_{1B}p(1B\mid b) + w_{2B}p(2B\mid b) + w_{3B}p(3B\mid b) + w_{HR}p(HR\mid b)
with 2023 weights w_{1B}=0.883, w_{2B}=1.244, w_{3B}=1.569, w_{HR}=2.004 [PAGE 14]. Because wOBA(\text{out})=0 and wOBA is affine to runs [29], minimizing expected wOBA is equivalent to minimizing expected runs [PAGE 1, PAGE 14].

Optimization update (approximate):
\hat p^* = \arg\max_{p\in P} \frac{1}{N}\sum_{j=1}^N f(b_j,p) \quad \text{or} \quad \arg\min_{p\in P} \frac{1}{N}\sum_{j=1}^N f_{\mathrm{woba}}(b_j,p)
with projected gradient descent enforcing: first baseman \le 40 ft from first base; infielders \le 95 ft from rubber; two infielders per side of second base [PAGE 16]. Units: feet.

Game equilibrium (expected-outs objective):
(p^*,d^*) = \arg\max_{p\in P}\min_{d\in\mathcal D} \mathbb{E}_{b\sim d}[f(b,p)] \quad \text{[PAGE 1–2, PAGE 18]}
Expected-runs objective reverses max/min: batter maximizes, defense minimizes [PAGE 1–2].

Breakdown/singularity regimes: gamma exit-speed support requires s < s_{\max} so z>0; if exit speed equals s_{\max} the transform degenerates. Logistic models saturate as a^*\to\infty or \tilde\delta\to\pm\infty, yielding out probabilities near 0 or 1. The Tropicana Field atmospheric assumption breaks at non-dome venues where air density alters drag and hang time [PAGE 13]. The public starting-position proxy breaks when actual fielder placement deviates from average, as shown by the 0.026 expected-BA gap vs actual [PAGE 17].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Carleton’s skepticism that extreme shifts materially suppress offense [13, cited PAGE 1], and it directly answers the concern that hitters observe and adapt to defensive alignment. The strategic quote from Tango, Lichtman, and Dolphin’s The Book—“The batting team must sometimes attempt a [bunt] to keep the defense from playing all the way back” [30, cited PAGE 22]—provides the historical justification for modeling bunting as a credible counter-threat rather than a rare sacrifice tactic. Earlier spatial optimization work (Easton & Becker integer programming [15]; Harris et al. “Swing Shift” [17]; Montes outfield clustering [26]; Murray et al. geographical systems [27]) optimized over discrete or continuous space but generally treated batted-ball tendencies as fixed. Powers’ batted-ball probability distribution [28] and the Alan Nathan trajectory calculator [19] supply the physical kinematics underlying the spray/launch/exit-speed joint model. The data pipeline relies on Statcast via pybaseball for 2018–2022 [PAGE 2] and 2023 ball-tracking data after the MLB shift-ban rule took effect [PAGE 10, PAGE 16].

Multi-week traps emerge in the adaptation modeling. Shift-beater identification uses only 2021–2022 plate appearances with at least 100 shifted and 100 non-shifted balls in play, producing a survivor-biased list (Josh Bell, Josh Rojas, Chas McCormick, Adam Frazier, Tyler O’Neill) [PAGE 19]. A hitter labeled a shift-beater in a two-year window may regress toward historical pull tendencies once the defensive sample stabilizes, especially if opposite-field contact quality is lower. The bunting equilibrium creates a recursive selection trap: if pull-heavy left-handers begin bunting against shifts with high success, defenses will concede ground by playing the third baseman shallower; that concession slightly improves swing-away outcomes (Santana equilibrium BA 0.272 vs 0.268 against the pure shift; Gallo 0.226 vs 0.223) [PAGE 22, PAGE 24], which may then reduce the batter’s incentive to bunt, allowing the defense to creep back toward the extreme shift. Over weeks, this oscillates unless the batter maintains a credible bunt threat with sufficient execution reps. The paper’s equilibrium assumes the batter observes positioning before every plate appearance and best-responds instantly, but in-season adaptation is slower, noisy, and bounded by the pitch clock and limited spring-training practice time for bunting against live defense.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the defense’s default: when facing a known pull hitter, the coaching staff regresses to an extreme shift because historical data shows it suppresses pull-side production. The batter’s reciprocal crisis habit is to keep pulling, because that is the swing mechanics under which the hitter has the most confidence. The model formalizes this as the batter choosing d_pull over d_oppo even when the defense shades to the pull side; for McCormick, pull dominates oppo across both blue and orange defensive alignments, so expected BA is 0.274 under either defense [PAGE 20]. The counter-trap is the defense’s second-order move: anticipating that the batter will exploit an open side, the defense pre-emptively concedes a small amount of swing-away territory to defend the bunt. Against Santana, the equilibrium moves the third baseman only slightly shallower and closer to the line, preserving most of the shift while removing the bunt lane [PAGE 22]. Against Gallo, using the proprietary Rangers out model, the third baseman moves to a depth judged reasonable for fielding bunts, and the equilibrium expected BA on swing-away is 0.226 versus 0.223 against the unadjusted blue shift [PAGE 24].

The clock layer bounds the recursion. Positioning is set before the pitch; the batter decides bunt versus swing during the at-bat, under pitch-clock constraints and with limited ability to disguise intent. If the batter hesitates, the bunt threat loses credibility because the defense can recover or because the bunt is poorly executed against a shifted but alert infield. The model assumes perfect observability of p by the batter and instantaneous argmax over 𝒟 [PAGE 18], but real-world recursion depth is finite: defense commits, batter observes, defense may adjust between batters but not mid-pitch. Thus the equilibrium is a one-shot Stackelberg outcome, not an infinitely repeated game. If the batter regresses to crisis-hit pulling after a few failed bunts, the defense’s counter-trap becomes over-correction: the third baseman plays too shallow, opening swing-away holes and raising expected BA above the static-shift baseline. The model’s warning—that a willingness to bunt “forces the fielders to adjust to the equilibrium positioning” and thereby yields more hits on swings away [PAGE 24]—is precisely this recursive clock-bounded trap.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. The trajectory and hang-time models are trained exclusively on Tropicana Field, a dome with consistent atmospheric conditions; the paper states the models may be less predictive at Coors Field because air density changes drag on the batted ball [PAGE 12–13]. Veto: if applied outdoors without retraining, the XGBoost hang-time/landing-distance predictions will systematically mis-estimate catch probability at altitude or in high humidity. Breakdown regime: outdoor parks with air density differing from the dome by more than the training distribution’s coverage.

Biomechanical layer. The non-ground-ball model assumes the closest fielder moves at 27 ft/s, the MLB average sprint speed [PAGE 13]. If actual fielder sprint speed differs by even 1 ft/s, δ̃ shifts by distance/27² seconds, moving the logistic input and flipping out probability near the decision boundary. The 2023 shift-ban constraints impose hard geometric vetoes: first baseman within 40 ft of first base, every infielder within 95 ft of the pitching rubber, and exactly two infielders on either side of second base [PAGE 16]. A fielder whose reaction time or acceleration cannot reach the projected depth by ball arrival violates the implicit kinematic feasibility of the model; the optimizer may place fielders at admissible coordinates that are biomechanically unreachable in the available ball time.

Weather layer. Dome assumption removes wind, temperature, and humidity variance. Any outdoor game introduces crosswind that alters spray angle and hang time independently of the batter’s intent, invalidating the conditional independence s ⟂ h | v if wind correlates with spray direction. Veto: wind speed > 5 mph with cross-field component breaks the indoor-trained mapping from (h,v,s) to landing coordinates.

Proprietary-data veto. The public average-starting-position out model yields expected BA 0.319 vs actual 0.293 on the test set, a 0.026 gap [PAGE 17]. The undisclosed Texas Rangers model eliminates this bias (0.292 expected vs 0.293 actual) and improves optimal expected BA to 0.281 [PAGE 17]. The public model also underestimates how third-baseman depth affects bunt out probability, admitted as a shortcoming [PAGE 23]. Veto: any positioning derived from the public model against bunters is unreliable until the depth–out likelihood relationship is retrained on actual starting-position data.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Bunt execution veto. Take a pull-heavy left-handed batter of the Santana/Gallo type facing an extreme shift. The model predicts that bunting yields expected BA 0.453 (Santana) or 0.574 (Gallo) against the unadjusted shift, but only 0.272 or 0.226 in equilibrium because the defense concedes depth [PAGE 22, PAGE 24]. Verifiable veto: if in actual games such a batter bunts against the shift and achieves observed BA ≤ 0.30, the premise that the bunt is a high-value credible threat is falsified, and the equilibrium third-baseman depth is unnecessarily conservative. Prediction: against a shift that leaves the third-base side open, a practiced left-handed bunter will post bunt BA > 0.40, forcing the third baseman shallower; if the third baseman remains deeper than approximately 90 ft from home, observed bunt BA will exceed 0.45.

Scenario 2 — Atmospheric generalization veto. Deploy the Tropicana-trained XGBoost hang-time and landing-distance model at Coors Field or another high-altitude, outdoor venue without retraining. Verifiable veto: if the calibration error on out probability exceeds 0.05 (absolute) relative to a holdout set from that venue, the physical assumption of consistent dome atmosphere is violated. Prediction: at Coors Field, the model will overestimate catch probability for fly balls by at least 7% because lower air density increases carry distance and hang time beyond the dome-trained range [PAGE 13].

Scenario 3 — Action-set cardinality veto. The paper notes an “omnipotent” batter could choose among 90 discrete spray-angle actions, but all computed equilibria use |𝒟| = 2 [PAGE 18]. Verifiable veto: if gradient-based equilibrium computation fails to converge or yields expected outs more than 10% below the fixed-historical baseline when |𝒟| ≥ 20, the small-action-set assumption is structurally inadequate. Prediction: with a continuum of spray-angle responses, the least-exploitable defense approaches uniform coverage across the pull-oppo spectrum, reducing expected outs per batted ball by at least 0.12 relative to the optimized two-action equilibrium and eliminating the shift’s run-prevention benefit.
</RLVR_COUNTERFACTUAL_VETOES>