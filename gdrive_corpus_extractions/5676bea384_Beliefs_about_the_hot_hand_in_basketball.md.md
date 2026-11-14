---
source: "Beliefs_about_the_hot_hand_in_basketball.md"
folder: "/GSE-Research/sports-research-papers/md/randoms"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3788
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper about hot hand beliefs across the adult lifespan. They want me to act as the GSE + GSI Frontier Reasoning Foundry and follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

I need to carefully cite page markers. The source text appears to span pages 601-605 based on the headers/footers visible. Let me map content to pages:
- Page 601: Title, abstract, intro beginning
- Page 602: Intro continued, method
- Page 603: Results, general discussion beginning, Figure 1 caption
- Page 604: Discussion continued
- Page 605: Discussion end, references

Let me construct the response with formal academic depth, no betting lines, proper LaTeX, page citations, and the required XML structure.

Key content to extract:
- N=455, age range 22-90, M=46.96, SD=18.03
- 51.75% women, ethnicity breakdown
- Two questions: chance and pass
- Linear and quadratic effects significant for both questions
- Correlation between chance and pass: r=.41, p<.0001
- Interest: M=2.81, SD=1.58, negative correlation with age r=-.26
- Adults 70+ almost twice as likely as 40-49 to believe
- Gilovich et al. (1985) - independence of successive shots
- Heuristics vs adaptive views
- Availability heuristic (Tversky & Kahneman, 1974)
- Positivity effect (Mather & Carstensen, 2005)
- Cross-sectional design limitation
- Quadratic fit suggests middle-aged less likely
- Phil Jackson quote (age 65)

Now I need to write formal LaTeX equations. I should model belief as a function of age, perhaps:
- P(yes | age, interest, gender, ethnicity) via logistic regression or chi-square as reported
- Independence null: P(shot_{t+1} = make | shot_t = make) = P(shot_{t+1} = make) = base rate ~0.5
- Hot hand alternative: P(shot_{t+1} = make | streak) > base rate
- Belief operator: B(agent, proposition) 
- Age-weighted availability: A(age) = ∫ w(τ) · streak_memory(τ) dτ

I must avoid toy equations. These should be formal statistical/probabilistic formulations with units.

Structure:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). Discuss the causal inference problem: cross-sectional vs longitudinal, confounding by cohort effects, interest confounding, the independence assumption from Gilovich vs adaptive clumpy environments, the quadratic anomaly (middle-aged dip), base rate neglect vs availability, positivity effect. Gray zones: whether "adaptive" is post-hoc, whether the measure captures belief or strategic deference to perceived expertise, whether the explicit base rate instruction ("around about half the time their shots miss") creates a demand characteristic or anchoring.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, exact breakdown. Define belief operator, independence null hypothesis, logistic/chi-square models as reported (χ² values), correlation matrix, effect sizes (almost twice as likely = risk ratio ~2.0), units: dimensionless proportions, age in years, p-values, χ² statistics. Cite pages [601]-[605] with verbatim quotes where appropriate.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Gilovich, Vallone, Tversky (1985) Cognitive Psychology; Tversky & Kahneman (1974) Science; Burns (2004); Scheibehenne et al. (2011); Gigerenzer & Todd (1999); Wilke & Barrett (2009); Carlson & Shu (2007/2008 rule of three). Multi-week traps: if one treats this as static, misses lifespan trajectory; cohort effects masquerading as aging; cross-sectional cannot infer within-person change.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Older adults regress to heuristic under cognitive load/crisis; counter-trap is assuming younger adults are purely analytical (they may also believe but less); clock = lifespan development, middle age analytical peak, older adult availability bias. Theory of mind: coaches/players model each other's hot hand beliefs recursively (I think you think he's hot).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Shot independence is physical (no momentum transfer between discrete shots except psychological); weather doesn't change independence of Bernoulli trials absent environmental drift; biomechanical fatigue would induce negative correlation (hot hand false), not positive. Veto: if shot outcomes are physically independent, belief is epistemically vetoed regardless of adaptiveness.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable veto scenarios + predictions. Must be verifiable. Examples:
1. If we manipulate base-rate salience (explicitly stating 50% miss rate) and belief remains high in older adults, this vetoes pure ignorance hypothesis and supports heuristic/availability. Prediction: older adults maintain P(yes) > 0.5 despite base-rate prime.
2. If we use non-basketball clumpy stimuli (e.g., berry patches) vs basketball, and age effect persists only in basketball, vetoes general clumpy-environment adaptation and supports domain-specific availability. Prediction: age × domain interaction.
3. If we impose justification requirement or monetary-incentive accuracy (not betting lines, but accuracy reward) and age effect disappears, vetoes immutable heuristic and supports strategic/compensatory capacity. Prediction: age effect attenuates under accountability.
Need to phrase carefully without betting lines. "Monetary-incentive accuracy" is fine, not betting lines.

Word count: Need >=1000 words total across sections. Think trace >=400 words. I'll aim for substantial depth.

No betting lines: I must not mention spreads, totals, moneylines, odds. I can mention probabilities but not betting odds.

Let me draft carefully.

Page citations: The source has page numbers 601-605 visible. I'll cite as [PAGE 601], etc. Verbatim quotes in quotation marks.

Let's write.

THINK_TRACE section needs to be deep multi-hop. I'll discuss:
- The paper's central claim: older adults endorse hot hand more.
- Mechanism 1: heuristics & biases (cognitive decline → more heuristic)
- Mechanism 2: adaptive clumpy-environment learning (life experience → streaks exist in nature)
- The data: linear and quadratic age effects significant. Quadratic means inverted U or U? They say middle-aged slightly less likely, so quadratic fits better—perhaps U-shaped or inverted? They say middle-age adults may be slightly less likely relative to young and older, which suggests a U-shape (high young, low middle, high old) or they mean older highest. Actually they say "middle-age adults may be slightly less likely to endorse beliefs in the hot hand, relative to young and older adults" — so young and old high, middle low: U-shaped (convex). But they say quadratic function fits slightly better. I should note the ambiguity.
- Confound: interest in basketball negatively correlated with age, but controlling for interest didn't remove age effect. However, after controlling for gender/ethnicity, age on interest was not significant. When interest included as covariate, age effect remained significant. So age effect robust to interest.
- Cross-sectional limitation: cannot speak to within-person change; cohort effects.
- Gray zone: Is the "pass" question measuring belief or strategic advice? They are correlated r=.41 but distinct. Middle-aged showed marked differences between belief and pass option—dissociation.
- Base rate: participants told ~50% miss rate. If they still say yes, they are overriding explicit base rate. This is base-rate neglect or they interpret conditional probability differently.
- Singularity/breakdown: The independence assumption breaks down if player physiology/psychology changes within game (fatigue, confidence, defensive adjustment). Gilovich found independence in aggregate data, but conditional on streak, defensive attention may increase. So the physical layer has veto conditions.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math.
Let:
- \(a \in [22,90]\) years, units: year
- \(Y_i \in \{0,1\}\) belief response (yes=1)
- \(X_i \in \{\text{chance}, \text{pass}\}\)
- Null independence: \(P(S_{t+1}=1 | S_t=1, \dots, S_{t-k}=1) = P(S_{t+1}=1) = \pi \approx 0.5\) [PAGE 601, "players’ successive shots are independent events"; "around about half the time their shots miss"]
- Alternative belief: \(B_i(a) = \mathbb{I}[P(S_{t+1}=1 | \text{streak}) > P(S_{t+1}=1 | \text{miss streak})]\)
- Model as reported: \(\chi^2_{\text{linear}} = 11.56, p = .0007\); \(\chi^2_{\text{quadratic}} = 12.70, p = .0004\) for chance [PAGE 602]. Pass: \(\chi^2_{\text{linear}} = 7.98, p=.0047\); \(\chi^2_{\text{quadratic}} = 9.03, p=.0027\) [PAGE 602].
- Correlation: \(r = .41, p < .0001\) [PAGE 602].
- Risk ratio approximation: adults 70+ almost twice as likely as 40–49 [PAGE 603]: \(RR \approx 2.0\).
- Interest: \(r_{\text{age,interest}} = -0.26, p < .0001\) [PAGE 602]; \(M=2.81, SD=1.58\) [PAGE 602].
- Availability operator: \(A(a) = \int_{-\infty}^{a} w(a-\tau) \cdot \mathbb{I}[\text{streak observed at } \tau] d\tau\) with \(w\) recency/experience weighting. Breakdown: if environment is truly i.i.d., \(A(a)\) does not predict \(P(S_{t+1})\); singularity at \(\pi = 0.5\) where streak length distribution is geometric with \(P(L=k) = (1-\pi)\pi^k\).

RETROCAUSAL_GENEALOGY: Trace from Tversky & Kahneman (1974) availability, Gilovich et al. (1985) hot hand misperception of random sequences, Burns (2004) adaptiveness, Gigerenzer & Todd (1999) ecological rationality, Scheibehenne et al. (2011) clumpy resources, Wilke & Barrett (2009) cognitive adaptation. Multi-week traps: cross-sectional snapshot cannot distinguish aging from cohort; treating belief as purely fallacious ignores potential adaptiveness; assuming middle-age analytical peak is stable across contexts.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: under cognitive load/time pressure, older adults regress to availability heuristic; counter-trap: younger adults are not immune—Gilovich found believers among experts/fans [PAGE 602]; clock: developmental trajectory (mean age 46.96, SD 18.03) spans emerging adulthood to old age. Nested beliefs: coach believes player is hot; player believes coach will pass; defender believes hot hand and adjusts coverage; this creates game-theoretic fixed point where belief alters shot selection and defensive allocation, potentially inducing dependence even if baseline shots independent.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: basketball shots are discrete biomechanical events; absent state carryover (hot hands don't change ball physics), conditional probability equals base rate [PAGE 601 independence]. Biomechanical veto: fatigue induces negative serial correlation (made shot → fatigue → lower next probability), which is the opposite of hot hand; thus hot hand belief is physically vetoed for within-game shooting unless psychological state dominates. Weather: rain/wind affects all players similarly but does not create positive streak dependence in a single player's shots absent non-stationarity. Epistemic veto: belief may be adaptively useful for shot allocation (pass to best shooter) even if statistically false; this is a strategy-layer exception, not a probability-layer validation.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. Base-rate override manipulation: Explicitly prime \(\pi = 0.5\) miss rate before each trial. Veto condition: if older adults' \(P(Y=1)\) does not significantly decline relative to no-prime condition, pure ignorance/base-rate-unawareness is vetoed; heuristic persistence confirmed. Prediction: age effect remains significant; \(P(Y_{\text{older}}=1) > 0.5\).
2. Domain-transfer counterfactual: Use matched non-sports clumpy prediction (e.g., whether next berry patch has fruit after previous patches had fruit). Veto condition: if age effect vanishes outside basketball, general clumpy-environment learning is vetoed; domain-specific availability/sports schema is supported. Prediction: significant age × domain interaction; older adults show elevated belief only in basketball.
3. Accountability/justification counterfactual: Require written justification and offer accuracy-contingent reward (not wagering). Veto condition: if age × question interaction disappears under accountability, the effect is not an immutable cognitive bias but a low-effort default; compensatory analytic capacity is intact. Prediction: older adults' \(P(Y=1)\) converges toward younger adults; quadratic age effect attenuated.

All predictions are verifiable via within-subject experimental manipulation.

Word count check: I need to ensure total >=1000 words. I'll write generously.

Also must avoid betting lines entirely. No mention of odds, spreads, etc. I will use "probability", "proportion", "risk ratio" but not "odds".

Let's write the final output with exact XML tags. No extra sections outside. Ensure LaTeX is formal. Cite [PAGE N] markers. Include verbatim quotes.

I need to be careful: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source text has page numbers embedded (601, 602, etc.). I will cite those.

Let me compose the response now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper reports a cross-sectional lifespan study (N = 455, age 22–90, M = 46.96, SD = 18.03) testing endorsement of the basketball “hot hand” across two questions: whether a player has a better chance after making previous shots (chance), and whether it is important to pass to a streak shooter (pass) [PAGE 602]. The central result is that older adults endorse the hot hand more than younger adults; adults 70+ were “almost twice as likely to believe in the hot hand as adults age 40–49” [PAGE 603]. Both linear and quadratic age terms were significant for chance (χ²_linear = 11.56, p = .0007; χ²_quadratic = 12.70, p = .0004) and pass (χ²_linear = 7.98, p = .0047; χ²_quadratic = 9.03, p = .0027), and the two judgments correlated at r = .41, p < .0001 [PAGE 602].

Multi-hop derivation proceeds as follows. First, the statistical null is shot independence: P(S_{t+1}=make | S_t=make, ..., S_{t-k}=make) = P(S_{t+1}=make) ≈ 0.5, because the prompt explicitly tells participants that “around about half the time their shots miss” [PAGE 602] and Gilovich et al. (1985) showed successive shots are independent events [PAGE 601]. Any belief that P(next make | streak) > P(next make | miss-streak) is therefore, under the null, a misperception of a random sequence [PAGE 601]. Second, the paper offers two non-exclusive mechanisms for age-related escalation. Mechanism A (heuristics-and-biases): age-related cognitive decline increases reliance on accessible heuristics, producing decision bias [PAGE 602–603]. Mechanism B (adaptive/ecological): life experience with clumpy environments (e.g., resource distributions) yields a general expectation of streaks that misapplies to basketball, where shots are independent [PAGE 602; Scheibehenne et al., 2011; Wilke & Barrett, 2009]. Both predict older-adult elevation, but for different reasons.

Gray-zone audit: (1) Cross-sectional design cannot separate aging from cohort effects; the authors explicitly qualify that results “cannot directly speak to how beliefs in the hot hand necessarily change with age, at the individual level” [PAGE 604]. (2) Interest in basketball declines with age (r = -0.26, p < .0001; M = 2.81, SD = 1.58) [PAGE 602], yet age effects survive controlling for interest, gender, and ethnicity, so interest does not fully mediate. (3) The “pass” question may tap strategic deference to perceived current form rather than pure probability belief; the correlation of .41 [PAGE 602] indicates partial dissociation, and middle-aged adults showed “marked differences between the belief in the hot hand and the option of passing the ball” [PAGE 604], suggesting belief and behavioral advice can decouple. (4) The explicit base-rate prime (~50% miss) creates a potential demand characteristic: participants who answer “yes” despite this information are either overriding base rates (base-rate neglect) or interpreting the player as an exception to the population average. (5) The quadratic fit hints at a U-shaped or curvilinear pattern with middle-aged adults slightly lower, which neither pure heuristic-increase nor pure adaptive-experience models straightforwardly predict [PAGE 604]. Breakdown regimes occur where shot outcomes are not independent—e.g., defensive adjustment to a streaky shooter, within-game fatigue, or psychological state-dependence—because then the independence null itself is violated and the belief may cease to be fallacious [PAGE 601; Gilovich et al., 1985 analysis found independence in aggregate, but conditional dependence can be induced by strategic context].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(a \in [22,90]\) denote participant age in years [PAGE 602]. Define the binary belief response \(Y_i \in \{0,1\}\) for question \(q \in \{\text{chance}, \text{pass}\}\). The statistical independence null from Gilovich et al. (1985) is formalized as:

\[
H_0:\quad \Pr(S_{t+1}=1 \mid S_t=1, S_{t-1}=1, \dots, S_{t-k}=1) = \Pr(S_{t+1}=1) = \pi,
\]

where \(\pi \approx 0.5\) is the population make-rate, consistent with the prompt that “around about half the time their shots miss” [PAGE 602]. The hot-hand alternative belief held by participant \(i\) is:

\[
B_i(a,q) = \mathbb{I}\!\left[ \Pr(S_{t+1}=1 \mid \text{streak of } k \text{ makes}) > \Pr(S_{t+1}=1 \mid \text{streak of } k \text{ misses}) \right].
\]

Age effects were tested with linear and quadratic terms. For the chance question: \(\chi^2_{\text{linear}} = 11.56, p = .0007\); \(\chi^2_{\text{quadratic}} = 12.70, p = .0004\) [PAGE 602]. For the pass question: \(\chi^2_{\text{linear}} = 7.98, p = .0047\); \(\chi^2_{\text{quadratic}} = 9.03, p = .0027\) [PAGE 602]. The inter-judgment correlation was \(r = .41, p < .0001\) [PAGE 602]. Age–interest correlation: \(r = -0.26, p < .0001\), with \(M = 2.81, SD = 1.58\) on a 6-point scale [PAGE 602]. The reported descriptive contrast is that adults aged 70+ were “almost twice as likely to believe in the hot hand as adults age 40–49” [PAGE 603], implying an approximate risk ratio \(RR \approx 2.0\) (dimensionless).

An availability operator over lifespan \(a\) can be written as:

\[
\mathcal{A}(a) = \int_{0}^{a} w(a-\tau)\, \mathbb{I}[\text{streak event observed at age } \tau] \, d\tau,
\]

where \(w(\cdot)\) is a recency/experience weighting kernel. Breakdown/singularity regime: if shots are i.i.d. Bernoulli(\(\pi\)), streak length \(L\) follows \(P(L=k) = (1-\pi)\pi^k\), and \(\mathcal{A}(a)\) carries zero predictive information about \(S_{t+1}\); the belief operator \(B_i\) is then epistemically decoupled from outcome probability [PAGE 601–602]. Units: age in years; probabilities dimensionless; \(\chi^2\) values dimensionless test statistics; \(r\) dimensionless Pearson correlation.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage runs from Tversky and Kahneman (1974), “Judgment under uncertainty: Heuristics and biases” [PAGE 605], which introduced the availability heuristic, to Gilovich, Vallone, and Tversky (1985), “The hot hand in basketball: On the misperception of random sequences,” which established successive-shot independence in basketball [PAGE 601, 605]. The present paper inherits the fallacy framing but tests a developmental boundary condition: does endorsement increase with adult age? It further engages the ecological-rationality counter-lineage—Gigerenzer and Todd (1999), “Fast and frugal heuristics”; Burns (2004), “Heuristics as beliefs and as behaviors: The adaptiveness of the ‘hot hand’”; Scheibehenne, Wilke, and Todd (2011), “Expectations of clumpy resources influence predictions of sequential events”; and Wilke and Barrett (2009), “The hot hand phenomenon as a cognitive adaptation to clumped resources” [PAGE 602–603, 605]. Under this view, belief in streaks is adaptive where environmental resources are spatially or temporally clumped, and older adults, having “lived longer and experienced or witnessed more streaklike behavior,” may rationally extrapolate clumpiness to basketball even when shots are independent [PAGE 603].

Multi-week traps: (a) A cross-sectional age difference is not an aging trajectory; cohort effects (different historical exposure to basketball analytics, media narratives, or coaching philosophies such as Phil Jackson’s “ride the hot hand” remark at age 65 [PAGE 601]) may masquerade as within-person change. (b) Treating hot-hand belief as uniformly fallacious ignores the conditional-adaptiveness literature: if streaks ever predict shooting percentage (e.g., via defensive slacking or shooter confidence), passing to a streaky player can be a dominant heuristic even under aggregate independence [PAGE 603]. (c) Assuming the quadratic age effect is stable across contexts risks overgeneralizing a U-shaped or curvilinear pattern that the authors themselves note “would not necessarily” be predicted by either theory [PAGE 604]. (d) Conflating the “chance” probability judgment with the “pass” strategic judgment collapses two layers—epistemic belief and decision advice—that dissociate in middle age [PAGE 604].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under cognitive load, time pressure, or reduced analytical resources, older adults are predicted to regress from effortful statistical reasoning (shot independence, base-rate use) to the accessible availability heuristic, \(\mathcal{A}(a)\), because streak memories are highly available and emotionally positive (positivity effect; Mather & Carstensen, 2005 [PAGE 603]). Counter-trap: younger adults are not immune to the fallacy—Gilovich et al. (1985) found hot-hand belief even among dedicated fans, collegiate players, and NBA players [PAGE 602]—so the age effect is a gradient of reliance, not a presence/absence boundary. Clock: the sample mean age is 46.96 years (SD = 18.03), spanning emerging adulthood to old age [PAGE 602], so the developmental clock places middle-aged adults at a putative analytical peak (lower endorsement), with older adults shifting back toward heuristic reliance.

Nested theory-of-mind loop: A coach models whether a player is hot; the player models whether the coach will pass to him; the defender models whether the offense will feed the hot hand and adjusts coverage accordingly. This creates a recursive fixed point in which the belief itself alters shot allocation and defensive attention, potentially inducing conditional dependence in realized shooting even if the mechanical null of independence holds absent strategic response [PAGE 602; pass question]. Older adults’ stronger endorsement therefore propagates through a social-cognitive network: they are more likely to advise passing to the streaky player (“pass” question), which in a real game changes the shooter’s opportunity structure and the defender’s allocation, making the belief self-confirming at the decision layer while remaining false at the probability layer.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Basketball shots are discrete biomechanical events. Absent carryover state (muscle memory persisting across shots, fatigue accumulation, or psychological momentum), the physics of the ball and the shooter’s release render successive shots conditionally independent given player skill and defensive pressure; this is the independence null confirmed by Gilovich et al. (1985) [PAGE 601]. Biomechanical veto: fatigue produces negative serial autocorrelation (a made shot is followed by slight physiological depletion, lowering \(P(\text{next make})\)), which is the sign-opposite of the hot hand; therefore within-game shooting is physically vetoed from supporting positive streak dependence unless psychological state dominates [PAGE 601]. Weather layer: environmental factors (wind, humidity, court conditions) affect all shooters non-specifically but do not generate positive streak autocorrelation for an individual shooter absent non-stationarity; weather is therefore a common-cause confound, not a hot-hand generator.

Epistemic/strategic veto proof: The belief may remain adaptively useful for shot selection (pass to the currently most accurate shooter) even while being statistically false under independence [PAGE 603]. This is a strategy-layer exception, not a probability-layer validation. Formal veto: Let \(\pi_i\) be player \(i\)’s true stationary make probability. If \(\Pr(S_{t+1}=1 \mid \text{streak}) = \pi_i\) for all streak lengths, then any policy that conditions passing on streak history has expected value no greater than a policy conditioning on \(\pi_i\) alone; the hot-hand belief is strictly dominated by base-rate use at the probability layer. The veto is breached only if streak history covaries with an unobserved time-varying parameter (e.g., defensive lapse, shooter confidence), which violates the stationarity assumption [PAGE 601–602].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Base-rate salience override. Manipulation: Before each trial, explicitly restate \(\pi = 0.5\) miss-rate and the independence of shots. Veto condition: If older adults’ endorsement probability \(P(Y=1 \mid a \ge 70)\) does not decline significantly relative to a no-prime control, then pure ignorance or base-rate unawareness is vetoed; the effect is attributed to heuristic availability rather than missing statistical information. Prediction: Age effect on chance and pass questions remains significant (\(\chi^2_{\text{linear}} > 7.98, p < .0047\)); \(P(Y=1 \mid a \ge 70) > 0.5\) despite explicit base-rate prime.

Veto Scenario 2 — Domain-transfer counterfactual. Manipulation: Administer matched clumpy-environment prediction trials outside basketball (e.g., whether the next berry patch contains fruit given recent patches had fruit), holding response format constant. Veto condition: If the age endorsement effect vanishes in the non-sports domain, general clumpy-environment learning is vetoed and domain-specific sports-schema availability is supported. Prediction: Significant age \(\times\) domain interaction; older adults show elevated belief only in basketball (\(RR_{\text{basketball}} \approx 2.0\) for 70+ vs 40–49), with null age effect in berry-patch domain.

Veto Scenario 3 — Accountability and accuracy incentive. Manipulation: Require written justification for each response and provide an accuracy-contingent reward for correctly identifying shot independence (no wagering lines, spreads, or odds; purely epistemic reward). Veto condition: If the quadratic age effect and the chance–pass dissociation disappear under accountability, the hot-hand endorsement is not an immutable cognitive bias but a low-effort default that older adults can override when compensatory analytic processing is recruited. Prediction: Age effect attenuated (\(|\chi^2_{\text{quadratic}}|\) reduced by at least 50%); middle-aged and older adults converge toward younger-adult endorsement rates; chance–pass correlation drops from \(r = .41\) toward zero under justification.
</RLVR_COUNTERFACTUAL_VETOES>