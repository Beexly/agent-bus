---
source: "2026 - Acute Post-Activation Performance Enhancement (PAPE) Effects of A Ballistic Medicine Ball Throw Versus Maximal Strength Activation on Upper - H tter et al.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 29
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5892
---

<NATIVE_REASONING>
The user wants me to analyze a specific sports science research paper about PAPE effects. They have provided the full text of the paper. I need to produce a response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "DRIVE SOURCE: /GSE-Research/sports-research-papers/md/2026 - Acute Post-Activation Performance Enhancement (PAPE) Effects of A Ballistic Medicine Ball Throw Versus Maximal Strength Activation on Upper - H tter et al.md PAGES: 29". The provided text is indeed pages 903-914 (though the text says Journal of Sports Science and Medicine (2026) 25, 903-914, so 12 pages of content, but they say PAGES: 29 perhaps referring to the PDF page count including references? Anyway, I have the full text).

I need to cite exact [PAGE N] markers. Since the source text has page numbers like 903, 904, etc., I should reference those. However, the user might expect [PAGE 1], [PAGE 2] etc. relative to the provided document, or the actual page numbers. The instruction says "cite exact [PAGE N] markers and verbatim quotes." Given the source text includes printed page numbers (903-914), I should probably use those as [PAGE 903], etc., or perhaps sequential markers. Let's look at the text: it starts with page 903 (copyright), then 904, 905, etc. I'll cite using the printed page numbers in brackets like [PAGE 905] or maybe sequential [PAGE 1]... but better to use the actual printed numbers since they are exact. However, the instruction says "exact [PAGE N] markers". I'll use the printed page numbers visible in the text: [PAGE 903], [PAGE 904], etc.

Wait, the text shows "903" at the bottom of first page? Actually, the text starts with copyright and title, then "904" appears at top of second page section. Let's map:
- Title/abstract page: no number shown at top but it's page 903? Actually the first page shows "904" after abstract? Wait: The text shows:
"©Journal of Sports Science and Medicine (2026) 25, 903-914"
Then title, abstract...
Then "PAPE effects on push power" and "904" appears at top of next section.
So page 903 is title/abstract page. Page 904 is introduction start. Page 905 continues methods. Page 906 continues methods. Page 907 results start. Page 908 results tables. Page 909 discussion. Page 910 discussion continued. Page 911 discussion continued. Page 912 discussion limitations. Page 913 conclusion/references start. Page 914 references continued + key points + biography.

I need to be careful with verbatim quotes. I'll quote key sentences and cite page numbers.

Structure:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit. I need to reason through the study design, statistical issues, contradictions between formal significance and practical relevance, the gray zone of PAPE vs fatigue, the revision-stage analytical hierarchy (not pre-registered), the carryover analysis sensitivity, the TTPPO artifacts, etc. This should be a deep audit.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations, units, page citations, breakdown. I need to define:
- Difference-in-change contrast: Δ_HLBP(t) - Δ_BMT(t) where Δ_X(t) = X_post(t) - X_pre.
- Within-condition change: δ_X(t) = mean(X_post(t) - X_pre).
- ANOVA model: Y_ijk = μ + C_i + T_j + (C×T)_ij + S_k + ε_ijk (repeated measures).
- Holm-Bonferroni step-down: order p_(1) ≤ ... ≤ p_(6), reject H_(i) if p_(i) ≤ α/(7-i).
- Effect sizes: Cohen's dz = mean difference / SD of differences.
- Partial eta-squared: η²p = SS_effect / (SS_effect + SS_error).
- Units: W for PPO/APO, m·s⁻¹ for PV/AV, s for TTPPO/TTPV, kg for loads, % 1RM.
- Breakdown regimes: 5 min insufficient for 90% 1RM; BMT 5% below threshold; 10 min no potentiation; n=28 power dz=0.70 at Holm step; TTPPO detection artifacts <0.1s vs normal ~0.23-0.24s.
- Cite pages for each.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Trace PAP (Vandervoort 1983) -> PAPE distinction (Prieske 2020) -> reviews (Seitz & Haff 2016; Wilson 2013; Blazevich & Babault 2019; Krzysztofik 2021) -> Cormier 2022 taxonomy -> Finlay 2022 meta-analysis -> Tsoukos 2019/2021 -> Rappelt 2024 warm-up equivalence. Multi-week traps: training status, relative strength threshold 1.5 kg/kg (Smilios 2017), periodization, carryover across sessions separated by 72h-7 days, uneven randomization.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a more abstract section. "Crisis habit regression" likely refers to athletes/coaches regressing to high-load habits under pressure (crisis). "Counter-trap" is the BMT low-load trap (appears safe but yields no potentiation). "Clock" is the 5 vs 10 min recovery timing. I need to discuss the coach's theory of mind: anticipating athlete response, the recursive loop where coach imposes CA expecting PAPE, athlete fatigues, performance drops, coach misattributes to wrong CA, etc.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical: 1080 Quantum vs free weights friction/tension profile (page 912). Biomechanical: bench press throw kinematics, grip width, shoulder abduction ~45°, eccentric 0.5-0.6s. Weather: not applicable indoors, but environmental control (cycle ergometer warm-up 60W). Veto proof: what would veto a PAPE claim? Neuromuscular fatigue masking potentiation; Tillin & Bishop 2009 balance equation; lack of baseline neuromuscular state index; control condition not work/time matched; antagonist reciprocal inhibition.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need to propose 3 counterfactual scenarios that could be tested/verified, with predictions. E.g.:
1. Veto: Extend HLBP recovery to 8 min -> predict PPO/PV no longer significantly below BMT at 5/8 min, possible small PAPE.
2. Veto: Replace BMT 5% with 60-84% 1RM bench press throw -> predict significant PPO/APO enhancement vs CC at 5 min.
3. Veto: Add direct neuromuscular state measurement (e.g., M-wave or twitch interpolation) pre/post -> predict HLBP shows suppressed voluntary activation despite unchanged evoked properties, confirming fatigue-potentiation balance.
Or something like that. Must be verifiable and include predictions.

Word count: >=1000 words across sections. THINK_TRACE alone >=400 words. I'll aim for substantial depth in each.

Constraints: No betting lines. No toy equations. Use real SI units. Cite page numbers.

Let's draft carefully.

I need to ensure verbatim quotes are exact from the text. Let me pull some quotes:

Page 903 abstract: "Neither conditioning activity produced acute performance enhancement under the investigated protocols, suggesting that the fatigue induced by two sets at 90% 1RM outweighed any potential potentiation effects within that timeframe."

Page 904: "Although various studies on upper body PAPE effects exist, comparisons of opposite intensities of the power spectrum (5% and 90% of 1RM) in the upper body still remain rare."

Page 904: "It was hypothesized that the high-load, low-velocity HLBP condition at 90% of 1RM would produce greater improvements in peak and average power output compared to the low-load BMT condition."

Page 905: "It should be stated explicitly that this primary/exploratory hierarchy was not documented in a dated protocol or analysis plan predating inspection of the data."

Page 905: "With n = 28 and power = 0.80, the smallest detectable effect is dz = 0.55 for a two-sided test at α = 0.05 and dz = 0.70 for a two-sided test at the most stringent Holm step (α = 0.05/6 = 0.0083)"

Page 906 Table 2 details.

Page 907: "For PPO, the change from baseline to 5 min differed significantly between HLBP and BMT: the mean difference in change was -97.7 W (95% CI -159.4 to -35.9), dz = -0.61 (95% CI -1.04 to -0.19), Holm-adjusted p = 0.016"

Page 908: "Neither intervention produced an acute performance enhancement."

Page 909: "It is probable that the high neural cost of this specific CA generated a level of fatigue that masked a potential PAPE enhancement at the 5-minute mark."

Page 910: "The 90% 1RM load utilized in this study likely exceeded this range, generating excessive acute fatigue rather than optimal pre-activation."

Page 911: "relative strength of 1.17 ± 0.15 kg/kg body mass fell below this threshold."

Page 912: "It was observed as well, that benching with the Quantum strings felt significantly more difficult than performing the same exercise with free weights."

Page 912: "Finally, one limitation concerns the absence of device-specific reliability data."

Page 913 conclusion: "For practitioners and coaches who require a performance peak specifically at the 5-minute mark, the study therefore suggests a necessary trade-off: either the volume or the intensity of the conditioning activity must be reduced, or the recovery interval after it must be extended."

Now, the sections.

I must not mention betting. This is a sports science paper, so no issue.

Let's write.

THINK_TRACE: >400 words. I'll write about 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define model, contrasts, corrections, power, units, breakdown regimes. Cite pages.

RETROCAUSAL_GENEALOGY: Historical lineage. Multi-week traps: randomization imbalance across weeks, carryover, training age, relative strength threshold.

RECURSIVE_THEORY_OF_MIND: Coach-athlete recursive modeling. Crisis habit regression: under time pressure (5 min clock), coach defaults to high load (90% 1RM) because "heavy = potent." Counter-trap: BMT looks specific but is subthreshold. Clock: 5-min post-test itself may be fatiguing; 10-min shows only baseline recovery.

CROSS_LAYER_VETO_ADJUDICATION: Physical (Quantum friction), biomechanical (kinematics), weather (indoor climate, no weather but thermal control via warm-up). Veto criteria: absence of baseline neuromuscular index, active control not work-matched, TTPPO artifacts.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios. Format:
Scenario 1: ... Verification: ... Prediction: ...
Scenario 2: ...
Scenario 3: ...

Make sure total words >=1000. Let's estimate: THINK_TRACE 500, SOURCE 300, RETRO 250, RECURSIVE 250, CROSS 250, RLVR 200 = ~1750. Good.

Need to be careful: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I will not invent fake ratios. I'll use real statistical formulas.

Also "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." So I need to explicitly state assumptions and breakdown regimes.

Let's begin drafting each section.

THINK_TRACE:
- Start with design: within-subject crossover, n=28 trained males, 3 conditions.
- Gray zone: confirmatory family hierarchy decided at revision stage, not pre-registered. This is a analytical gray zone.
- The contrast HLBP vs BMT at 5 min: difference-in-change -97.7 W, p=0.016 Holm. But this is driven by HLBP decrement (-67.1 W) not BMT increment (+30.6 W). BMT CI includes zero [-5.3, 66.5]. So formal significance is a subtraction artifact.
- Practical relevance: absolute changes small (~3.9% PPO, ~2.7% PV). Authors admit limited practical relevance.
- Power: sensitivity dz=0.70 at Holm step; significant effects dz=-0.61 and -0.65 are close to threshold, risk of overestimation (winner's curse).
- TTPPO artifacts: two values <0.1s vs normal 0.23-0.24s, sphericity violation, but exploratory.
- Carryover: 18 tests, low sensitivity (6-11 per cell), nominal significance not surviving correction. Absence of evidence not evidence of absence.
- Period effects: baseline comparable across sessions, no period effects detected.
- Multi-hop derivation: fatigue-potentiation balance (Tillin & Bishop 2009) -> HLBP neural cost > recovery at 5 min -> performance drop. BMT stimulus too weak (5% 1RM) -> no change. CC active but not work-matched -> moving reference.
- Conclusion: neither PAPE, just fatigue vs null.

I'll write this in detail.

SOURCE_OPERATORS_AND_EQUATIONS:
Define:
- Let i ∈ {HLBP, BMT, CC}, t ∈ {pre, 5, 10}, k = 1..28.
- Repeated measures ANOVA: \(Y_{ikt} = \mu + \alpha_i + \beta_t + (\alpha\beta)_{it} + s_k + \epsilon_{ikt}\).
- Difference-in-change: \(D_i(t) = \bar{Y}_{i,t} - \bar{Y}_{i,\text{pre}}\). Contrast: \(C(t) = D_{\text{HLBP}}(t) - D_{\text{BMT}}(t)\).
- Units: PPO/APO in W (J·s⁻¹), PV/AV in m·s⁻¹, TTPPO/TTPV in s, load in kg and % 1RM.
- Holm-Bonferroni: sort \(p_{(1)}\le...\le p_{(6)}\), reject if \(p_{(i)}\le \alpha/(7-i)\), α=0.05.
- Effect size: \(d_z = \frac{\bar{D}}{s_D}\), CI via noncentral t.
- Partial eta-squared: \(\eta^2_p = \frac{SS_{\text{effect}}}{SS_{\text{effect}} + SS_{\text{error}}}\).
- Power: n=28, α=0.05, 1-β=0.80, correlation 0.5, ε=1, f=0.25 -> N=28 (page 905). Sensitivity for contrasts: dz=0.55 at α=0.05, dz=0.70 at Holm α=0.0083 (page 905).
- Breakdown regimes: (1) HLBP at 90% 1RM with 5-min rest -> fatigue dominates (PPO -67.1 W, p=0.010, page 909). (2) BMT at 5% 1RM -> subthreshold stimulus, ΔPPO +30.6 W CI includes 0 (page 907 Table 5). (3) 10-min post -> no contrast significant, HLBP partial recovery only (page 908). (4) TTPPO detection floor ~0.07-0.09 s vs biological ~0.23-0.24 s (page 907).
- Cite pages for values.

RETROCAUSAL_GENEALOGY:
- Lineage: PAP definition (Vandervoort et al., 1983, electrically-evoked twitch) vs PAPE (Prieske et al., 2020, voluntary performance). Page 904.
- Reviews: Seitz & Haff (2016) high intensity/plyometric best lower body; Krzysztofik et al. (2021) upper body optimal 60-84% 1RM; Wilson et al. (2013) same window. Page 904.
- Taxonomy: Cormier et al. (2022) complex vs contrast. Page 904.
- Meta-analysis: Finlay et al. (2022) ES 0.06-1.34, pooled moderate at ≥80% 1RM. Page 905.
- Direct bench press throw evidence: Tsoukos et al. (2019) 60% 1RM velocity loss 10%, enhancement 4-12 min; Tsoukos et al. (2021) 80% 1RM broad window. Page 910.
- Warm-up equivalence: Rappelt et al. (2024) no difference vs warm-up for CMJ. Page 911.
- Multi-week traps: sessions separated by 72h-7 days (page 904); uneven order distribution (page 905): HLBP-CC-BMT n=6, etc. Carryover examined only sessions 2-3, 6-11 per cell, low sensitivity (page 908). Relative strength threshold ≥1.5 kg/kg (Smilios 2017) vs sample 1.17 ± 0.15 (page 911). Training experience 8.11 ± 3.68 years (page 905 Table 1). Sex limitation: males only (page 912).

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under competitive time pressure (5-min clock), coach regresses to high-load habit (90% 1RM) assuming mechanical tension guarantees potentiation. This is a System 1 heuristic: heavy = potent.
- Counter-trap: BMT at 5% 1RM appears specific and low-fatigue, but falls below potentiation threshold; it is a null trap disguised as ballistic specificity.
- Clock: The 5-min post-test interval is itself a decision node. The study shows HLBP impairs at 5 min; only partial PV recovery by 10 min (page 908). The coach's model of time-to-potentiation (5-10 min per Blazevich & Babault 2019) is falsified for this protocol.
- Recursive loop: Coach observes drop after HLBP, attributes to "insufficient rest" rather than excessive load, plans to increase rest but keep load; fails to consider that load itself exceeds upper-body optimal window (60-84%). Meanwhile BMT yields no signal, so coach abandons ballistic CA entirely, missing that the issue was stimulus intensity not modality.
- Theory of mind: Coach models athlete neuromuscular state as latent variable; without direct measurement (no baseline index, page 909), the coach's posterior over PAPE vs fatigue is unidentifiable from performance alone.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: 1080 Quantum motorized cables; friction/tension profile differs from free weights (page 912: "benching with the Quantum strings felt significantly more difficult"). This is a physical veto on ecological validity.
- Biomechanical layer: Bench press throw kinematics fixed (grip one fist outside shoulder width, forearms vertical at chest, shoulder abduction ~45°, eccentric 0.5-0.6s, page 906). Throwing barbell of Smith machine as high as possible. 40% 1RM test load. These are controlled but equipment-specific.
- Weather layer: Indoor lab, cycle ergometer warm-up 60W, 70-80 rpm (page 905). No weather variability; thermal state standardized but not measured post-warm-up.
- Veto adjudication: What would invalidate a PAPE claim?
  1. Absence of direct neuromuscular state index (page 909): cannot distinguish PAPE from warm-up or fatigue.
  2. Active control not work/time-matched (page 912): CC average power declined -20.6 W at 5 min, CC PPO +40.8 W at 10 min; reference itself moving.
  3. TTPPO artifacts <0.1s (page 907): device detection floor violates timing assumptions.
  4. Familiarization only one session (page 912): learning effects not fully eliminated, especially unique Quantum resistance.
- Conclusion: The null result is robust to these vetoes (no enhancement), but the significant HLBP vs BMT contrast is fragile because it relies on a moving control and unmeasured baseline state.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios with predictions.
1. Scenario: Recovery extension veto. Protocol identical but HLBP rest extended to 8 min post-condition (per Bevan et al. 2009/Kilduff 2007 optimal 7-8 min) before testing at 8 min. Verification: Measure PPO/PV at 8 min. Prediction: If fatigue-potentiation balance model holds, HLBP PPO and PV will not differ significantly from BMT at 8 min (|Δ| < MDC, likely within ±20 W / ±0.02 m/s), and the 5-min deficit will be abolished. A residual positive HLBP > BMT contrast would support delayed PAPE; absence supports pure fatigue decay.
2. Scenario: Intensity window veto. Replace BMT 5% 1RM with bench press throw at 70% 1RM (within Krzysztofik 2021 upper-body 60-84% window) for 2 sets of 3 reps, 5-min rest, test at 5 min. Verification: Contrast this moderate-load CA vs CC for PPO/APO/PV. Prediction: Moderate load will produce a statistically significant positive PPO change vs CC (dz > 0.55, p < 0.05 unadjusted), unlike the 5% BMT null (page 907 Table 5: BMT ΔPPO +30.6 W, CI includes zero). This verifies that the null was load-specific, not modality-specific.
3. Scenario: Neuromuscular state measurement veto. Add baseline and post-condition twitch interpolation / EMG voluntary activation ratio before each test. Verification: Compare voluntary activation % and M-wave amplitude across conditions at 5 min. Prediction: HLBP will show suppressed voluntary activation (e.g., ≥3% decline) with unchanged evoked twitch properties, confirming fatigue masking (Tillin & Bishop 2009 balance). BMT will show no change in activation or evoked properties. If HLBP shows enhanced twitch phosphorylation markers without performance gain, PAPE is present but behaviorally masked by fatigue.

Ensure all sections have page citations. Use [PAGE 903] etc.

Check word count mentally: likely >1000.

One thing: The user said "PAGES: 29". The text provided covers pages 903-914. I will reference those page numbers.

I must not mention betting. Fine.

I must not invent fake ratios. I'll use actual reported statistics.

Let's write the final output with exact XML tags. No markdown outside? Probably fine to just output the XML sections. I'll wrap them.

Need to ensure each section is properly closed.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The study is a randomized within-subject crossover trial with n = 28 trained male athletes (age 24.86 ± 2.62 years; bench press 1RM 101 ± 16 kg; relative strength 1.17 ± 0.15 kg/kg body mass; training experience 8.11 ± 3.68 years) [PAGE 903, TABLE 1 PAGE 905]. Each participant completed High-Load Bench Press (HLBP; 2 sets of 2–3 reps at 90% 1RM, one repetition in reserve), Ballistic Medicine-Ball Throw (BMT; 2 sets of 4 throws at 5% bench-press 1RM), and an active Control Condition (CC; one-arm dumbbell row, 2 × 8 per side at 3–4 RIR), with bench press throw testing at 40% 1RM on the 1080 Quantum system at baseline, 5 min, and 10 min post-conditioning [PAGE 904, TABLE 2 PAGE 906]. The confirmatory family comprised six contrasts: three outcomes (PPO, APO, PV) × two time points, tested via difference-in-change between HLBP and BMT with Holm-Bonferroni correction [PAGE 903, PAGE 905].

Deep multi-hop derivation reveals several gray-zone vulnerabilities. First, the analytical hierarchy (confirmatory vs exploratory) was a revision-stage decision, not pre-registered in a dated protocol [PAGE 905]. This weakens the inferential protection normally afforded by multiplicity adjustment because the family definition was aligned to the data after inspection. Second, the statistically significant HLBP-vs-BMT contrasts at 5 min (PPO: −97.7 W, 95% CI −159.4 to −35.9, dz = −0.61, Holm p = 0.016; PV: −0.086 m·s⁻¹, dz = −0.65, Holm p = 0.011) [PAGE 907] are driven almost entirely by HLBP deterioration rather than BMT improvement: HLBP changed −67.1 W (≈3.9%) and −0.071 m·s⁻¹ (≈2.7%) relative to baseline, whereas BMT changed +30.6 W (95% CI −5.3 to 66.5) and +0.015 m·s⁻¹ (CI crosses zero) [PAGE 907, TABLE 5 PAGE 907]. BMT did not differ from its own baseline or from CC [PAGE 903]. Thus the formal “support” for the second hypothesis is a subtraction artifact: BMT looks superior only because HLBP fatigued.

Third, sensitivity is borderline. With n = 28, the smallest detectable effect at the most stringent Holm step (α = 0.05/6 = 0.0083) is dz = 0.70 [PAGE 905]. The two significant contrasts sit at dz = −0.61 and −0.65, adjacent to the detection boundary, raising winner’s-curse and overestimation concerns; the non-significant 10-min contrasts (dz ≈ −0.37, −0.38) and APO contrasts (dz ≈ −0.34, −0.30) fall below it [PAGE 907]. Fourth, carryover was examined in only 6–11 participants per cell across sessions two and three, with two nominal p-values (0.031, 0.048) that did not survive correction; the authors correctly caution that absence of detected carryover is not evidence of its absence [PAGE 908]. Fifth, TTPPO contains residual repetition-detection artifacts (0.092 s and 0.071 s versus a biological cluster around 0.23–0.24 s) that drove a sphericity violation, yet were retained descriptively because the outcome is exploratory [PAGE 906, TABLE 3 PAGE 907]. Sixth, the active control was neither work- nor time-matched to the experimental conditions; CC average power declined −20.6 W at 5 min and CC PPO rose +40.8 W at 10 min, making the reference itself non-stationary [PAGE 912].

The fatigue-potentiation balance model (Tillin & Bishop, 2009) predicts that net voluntary output equals potentiation minus fatigue [PAGE 908]. HLBP at 90% 1RM generated sufficient neural cost to induce measurable performance decrements at 5 min, with only partial PV recovery by 10 min (dz = 0.55) and no supra-baseline spike [PAGE 908]. BMT at 5% 1RM remained below an effective stimulus threshold, consistent with Krzysztofik et al.’s (2021) upper-body window of 60–84% 1RM [PAGE 904, PAGE 910]. Consequently, neither CA produced PAPE; the result is a null finding for enhancement and a fatigue finding for HLBP, with absolute changes too small for practical relevance despite moderate standardized effects [PAGE 903].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(i \in \{\text{HLBP}, \text{BMT}, \text{CC}\}\), \(t \in \{\text{pre}, 5\text{ min}, 10\text{ min}\}\), and \(k = 1,\dots,28\). The repeated-measures ANOVA operator is
\[
Y_{ikt} = \mu + \alpha_i + \beta_t + (\alpha\beta)_{it} + s_k + \varepsilon_{ikt},
\]
where \(Y\) is measured in SI units: PPO and APO in watts (W = J·s⁻¹), PV and AV in metres per second (m·s⁻¹), TTPPO and TTPV in seconds (s), and conditioning load in kilograms (kg) or percentage of one-repetition maximum (% 1RM) [PAGE 903, TABLE 3 PAGE 907]. Sphericity was assessed with Mauchly’s test; where violated, Greenhouse–Geisser \(\varepsilon\) corrected fractional degrees of freedom [PAGE 905].

The difference-in-change contrast operator for confirmatory outcome \(Y\) at time \(t\) is
\[
C_Y(t) = \big[\bar{Y}_{\text{HLBP},t} - \bar{Y}_{\text{HLBP},\text{pre}}\big] - \big[\bar{Y}_{\text{BMT},t} - \bar{Y}_{\text{BMT},\text{pre}}\big],
\]
reported as raw mean difference with unadjusted 95% CI and Cohen’s \(d_z = \bar{D}/s_D\), where \(D\) is the within-participant paired difference [PAGE 905]. The Holm–Bonferroni step-down procedure orders \(p_{(1)} \le \cdots \le p_{(6)}\) across the six confirmatory tests and rejects \(H_{(i)}\) if \(p_{(i)} \le \alpha/(7-i)\), with \(\alpha = 0.05\); CIs are unadjusted and therefore not simultaneous [PAGE 905]. Partial eta-squared is computed as \(\eta^2_p = SS_{\text{effect}}/(SS_{\text{effect}} + SS_{\text{error}})\) [PAGE 904, TABLE 4 PAGE 908].

A priori G*Power specification: F test, repeated measures within factors, groups = 1, measurements = 3, correlation = 0.5, nonsphericity \(\varepsilon = 1\), effect size \(f = 0.25\), \(\alpha = 0.05\), power = 0.80, returning total \(N = 28\) (actual power 0.813) [PAGE 905]. Sensitivity for the hypothesis-testing contrasts: with \(n = 28\), power = 0.80, the smallest detectable effect is \(d_z = 0.55\) at \(\alpha = 0.05\) and \(d_z = 0.70\) at the most stringent Holm step [PAGE 905].

Reported confirmatory estimates at 5 min [PAGE 907, TABLE 6 PAGE 907]:
- PPO: \(C_{\text{PPO}}(5) = -97.7\) W, 95% CI \([-159.4, -35.9]\), \(d_z = -0.61\) \([-1.04, -0.19]\), \(p_{\text{Holm}} = 0.016\).
- PV: \(C_{\text{PV}}(5) = -0.086\) m·s⁻¹, 95% CI \([-0.137, -0.035]\), \(d_z = -0.65\) \([-1.08, -0.23]\), \(p_{\text{Holm}} = 0.011\).
- APO: non-significant at both time points (\(p_{\text{Holm}} = 0.223\)) [PAGE 908].

Within-condition HLBP changes at 5 min [PAGE 907, TABLE 5 PAGE 907]:
- PPO: \(\Delta = -67.1\) W, 95% CI \([-109.6, -24.5]\), \(d_z = -0.61\).
- PV: \(\Delta = -0.071\) m·s⁻¹, 95% CI \([-0.109, -0.034]\), \(d_z = -0.74\).
BMT within-condition changes at 5 min: PPO \(+30.6\) W \([-5.3, 66.5]\); PV \(+0.015\) m·s⁻¹ \([-0.011, 0.041]\) [PAGE 907, TABLE 5 PAGE 907].

Exact breakdown/singularity regimes:
1. HLBP fatigue regime: two sets at 90% 1RM with 5-min rest produced PPO and PV decrements at 5 min (omnibus Condition × Time \(F(4,108) = 2.96, p = 0.023\) for PPO; \(F(4,108) = 4.16, p = 0.004\) for PV) [PAGE 908]. Recovery interval insufficient; potentiation masked by neural fatigue [PAGE 909].
2. BMT subthreshold regime: 5% 1RM ballistic load produced no within-condition change and no contrast with CC (all unadjusted \(p \ge 0.06\)) [PAGE 908]; stimulus below effective upper-body window [PAGE 910].
3. 10-min null regime: no contrast significant for PPO or PV (\(p_{\text{Holm}} = 0.223\)); HLBP partial PV recovery only (\(+0.036\) m·s⁻¹, \(p = 0.022\)) without potentiation [PAGE 908].
4. TTPPO detection floor: two artifacts at 0.092 s (CC pre) and 0.071 s (HLBP 5 min) vs biological minimum cluster \(\approx 0.23\)–0.24 s; sphericity violated (\(p < 0.001\)), Greenhouse–Geisser \(\varepsilon = 0.60\) [PAGE 906, PAGE 907].
5. Power boundary: significant contrasts (\(d_z = -0.61, -0.65\)) lie near the Holm-step sensitivity floor (\(d_z = 0.70\)); non-significant contrasts (\(d_z \approx -0.30\) to \(-0.38\)) are underpowered [PAGE 905, PAGE 907].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s theoretical lineage traces PAP to electrically evoked twitch force/torque (Vandervoort et al., 1983) and PAPE to maximal voluntary strength, power, or speed following a conditioning contraction (Prieske et al., 2020), with the distinction operationalized because the present study measured voluntary performance only, not evoked contractile properties [PAGE 904, PAGE 908]. The review genealogy cited includes Seitz & Haff (2016), who identified high-intensity and plyometric conditioning as largest-effect CA types for lower body; Krzysztofik et al. (2021) and Wilson et al. (2013), who placed the upper-body effective intensity window at approximately 60–84% 1RM; and Blazevich & Babault (2019) on PAP versus PAPE time courses [PAGE 904]. Terminology follows Cormier et al. (2022), separating contrast training (alternating high- and low-load intensities) from ascending/descending complex training and the French Contrast Method [PAGE 904]. The a priori effect-size anchor is Finlay et al. (2022), whose meta-analysis of bench-press conditioning activities on ballistic bench press throw power reported ES = 0.06–1.34 across seven studies and characterized ≥80% 1RM bench-press conditioning as producing moderate pooled effects [PAGE 905].

Direct bench-press-throw evidence cited as boundary conditions: Tsoukos et al. (2019) found velocity enhancement between the fourth and twelfth minute only after a 60% 1RM set terminated at 10% velocity loss, while Tsoukos et al. (2021) showed a heavy 80% 1RM load elicited potentiation across a broad fourth-to-twelfth-minute window [PAGE 910]. The authors infer that fatigue, determined jointly by load and volume rather than load alone, governs outcome [PAGE 910]. Rappelt et al. (2024) provide a parallel warm-up-equivalence genealogy: isometric PAPE protocols did not increase CMJ height beyond a standardized 5-minute warm-up, raising the possibility that PAPE overlaps functionally with warm-up-induced readiness [PAGE 911].

Multi-week traps embedded in the design. Sessions were separated by at least 72 hours and no more than 7 days to preserve training status [PAGE 904]. Randomization to condition order was individually random rather than block-balanced, producing uneven sequence representation: HLBP-CC-BMT (n = 6), BMT-CC-HLBP (n = 6), BMT-HLBP-CC (n = 5), CC-BMT-HLBP (n = 5), HLBP-BMT-CC (n = 3), CC-HLBP-BMT (n = 3) [PAGE 905]. Period effects were tested and found absent for baseline values and baseline-to-5-min changes within each condition [PAGE 908], but first-order carryover was examined only across sessions two and three in 18 tests with 6–11 participants per cell; two nominal significances did not survive multiplicity correction, and low sensitivity means absence of evidence is not evidence of absence [PAGE 908]. The relative-strength determinant is another longitudinal trap: participants averaged 1.17 ± 0.15 kg/kg body mass, below the ≥1.5 kg/kg threshold associated with strong positive power changes after 5-minute rest in Smilios et al. (2017), though that benchmark derives from a different population [PAGE 911]. Training experience (8.11 ± 3.68 years) was considerable but homogeneous to males, limiting generalization to female athletes given reported sex differences in load-power relationships [PAGE 905, PAGE 912]. Finally, only one familiarization session was used, potentially insufficient to eliminate learning effects on the unique 1080 Quantum resistance profile [PAGE 912].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The coach-athlete recursive loop in this study can be decomposed into three nodes: crisis habit regression, counter-trap, and clock. Crisis habit regression occurs when, under competitive time pressure (the 5-minute post-conditioning clock), the coach regresses to the high-load heuristic: 90% 1RM bench press is assumed to maximize mechanical tension and motor-unit recruitment and therefore to guarantee potentiation [PAGE 904]. This System 1 prior treats “heavy” as synonymous with “effective,” despite the upper-body literature indicating the optimal PAPE window is 60–84% 1RM [PAGE 904]. The recursive failure is that the coach observes the post-HLBP decrement (−67.1 W PPO, −0.071 m·s⁻¹ PV at 5 min) [PAGE 907] and attributes it to insufficient rest rather than to excessive load, planning to extend recovery while preserving intensity—when the load itself likely exceeded the fatigue-potentiation balance point [PAGE 910].

The counter-trap is the BMT condition. A ballistic medicine-ball throw at 5% 1RM appears specific, low-fatigue, and velocity-oriented, matching the second hypothesis that high-velocity nature should improve peak barbell velocity [PAGE 904]. However, the load remained below an effective threshold: BMT changed neither from its own baseline nor relative to CC (+30.6 W PPO CI includes zero; +0.015 m·s⁻¹ PV CI includes zero) [PAGE 907]. The counter-trap is therefore a null disguised as specificity: the coach abandons ballistic conditioning entirely because no signal emerged, failing to recognize that the modality was not the problem—the stimulus intensity was.

The clock node formalizes the 5- versus 10-minute decision. The study’s design tests at 5 and 10 min post-conditioning, assuming the PAPE window lies between them [PAGE 908]. Empirically, HLBP impaired performance at 5 min and showed only partial PV recovery by 10 min without exceeding baseline; BMT was flat at both time points [PAGE 908]. Moreover, the authors note the 5-min post-test itself may have acted as an additional fatiguing stimulus, blunting any expected potentiation at 10 min [PAGE 909]. The coach’s latent model of athlete neuromuscular state is unidentifiable because no index of baseline neuromuscular readiness was collected [PAGE 909]; consequently, the coach’s posterior over “PAPE present but masked by fatigue” versus “no PAPE existed” cannot be updated from performance alone. The recursive theory of mind thus collapses: the coach models the athlete as a potentiation-ready system, the athlete responds as a fatigue-limited system, and the clock (5 min vs 10 min) provides insufficient resolution to arbitrate between the two without direct physiological measurement.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: The 1080 Quantum motorized-cable system imposes a resistance profile that participants described as “significantly more difficult” than free-weight bench pressing, attributed to mechanical friction or string tension characteristics [PAGE 912]. This is a physical veto on ecological validity: power values generated on the Quantum system may not transfer to free-weight or barbell-based ballistic pressing, so any PAPE claim is bounded to this specific ergometer.

Biomechanical layer veto: The bench press throw protocol was rigidly standardized—grip one fist outside shoulder width, forearms vertical at chest contact, shoulder abduction approximately 45°, eccentric phase approximately 0.5–0.6 s, concentric phase with maximum intent, throwing the Smith-machine barbell as high as possible—at 40% of 1RM [PAGE 906]. These constraints reduce biological variability but bind the result to a narrow kinematic envelope; deviations in grip, shoulder angle, or eccentric duration in applied settings would shift the force-velocity operating point and invalidate direct extrapolation.

Weather/environmental layer veto: Testing occurred indoors under controlled conditions; the general warm-up was 5 min at 60 W on a cycle ergometer at 70–80 rpm, followed by specific bench press warm-up sets [PAGE 905]. Ambient temperature and humidity are not reported as variables, and no weather effect is possible in this laboratory setting. However, thermal state was standardized pre-baseline but never quantified post-warm-up, leaving pre-intervention neuromuscular readiness as an unmeasured latent variable [PAGE 909].

Veto adjudication criteria for invalidating a PAPE inference:
1. Absence of direct neuromuscular state measurement: no evoked twitch, M-wave, or voluntary activation index was collected before or after warm-up or conditioning [PAGE 909]. Therefore PAPE cannot be distinguished from warm-up-induced readiness or from fatigue masking.
2. Non-neutral active control: the CC (one-arm dumbbell row) was neither work- nor time-matched to HLBP or BMT [PAGE 912]. CC average power declined −20.6 W at 5 min and CC PPO increased +40.8 W at 10 min [PAGE 912, TABLE 5 PAGE 907]; the reference is itself moving, so a “no difference from CC” result for BMT does not confirm an unpotentiated state.
3. TTPPO detection artifacts: sub-0.1 s values (0.092 s and 0.071 s) versus a biological cluster around 0.23–0.24 s indicate repetition-detection floor effects that compromise timing assumptions [PAGE 906, PAGE 907].
4. Single familiarization: one session may not eliminate learning effects on the Quantum’s unique resistance profile [PAGE 912].

Adjudication outcome: The null result (neither HLBP nor BMT enhanced performance relative to baseline or CC) [PAGE 903] survives these vetoes robustly. However, the statistically significant HLBP-vs-BMT difference-in-change at 5 min is fragile because it rests on HLBP fatigue rather than BMT potentiation, on a moving control reference, and on an unmeasured baseline neuromuscular state. A valid PAPE claim would require either a fully passive control or direct quantification of neuromuscular readiness at each time point [PAGE 912].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Recovery-extension veto. Protocol: identical HLBP (2 × 2–3 reps at 90% 1RM, 1 RIR) but post-conditioning testing delayed to 8 minutes rather than 5 minutes, consistent with the 7–8 minute optimal recovery window cited for loads above 85% 1RM [PAGE 910]. Verification: measure PPO and PV at 8 minutes post-HLBP and compare to BMT at 5 minutes using the same difference-in-change operator. Prediction: Under the fatigue-potentiation balance model (Tillin & Bishop, 2009) [PAGE 908], the HLBP–BMT contrast at 8 minutes will be statistically null (|mean difference| below the minimal detectable change; approximately within ±20 W for PPO and ±0.02 m·s⁻¹ for PV), and no contrast will favor HLBP. A statistically significant positive HLBP > BMC contrast at 8 minutes would falsify the pure-fatigue account and support delayed PAPE.

Scenario 2 — Intensity-window veto. Protocol: replace BMT at 5% 1RM with a bench press throw at 70% 1RM (within Krzysztofik et al.’s upper-body 60–84% 1RM window) for 2 sets of 3 repetitions, 5-minute rest, tested at 5 minutes; contrast against the same active CC. Verification: test the confirmatory contrast for PPO, APO, and PV at 5 minutes with Holm correction. Prediction: The moderate-load condition will produce a statistically significant positive PPO change relative to CC (detectable effect \(d_z \ge 0.55\) at unadjusted α = 0.05; [PAGE 905]), unlike the 5% BMT null result (+30.6 W, CI crossing zero) [PAGE 907]. A null result here would falsify the load-window explanation and implicate modality or volume instead.

Scenario 3 — Neuromuscular-state measurement veto. Protocol: add baseline and post-conditioning twitch interpolation or EMG-based voluntary activation ratio before each bench press throw test. Verification: compare voluntary activation percentage and evoked M-wave amplitude across HLBP, BMT, and CC at 5 minutes. Prediction: HLBP will show suppressed voluntary activation (e.g., ≥3% decline) with unchanged evoked twitch properties, confirming that fatigue masked any potentiation at the behavioral level [PAGE 908, PAGE 909]. BMT will show no change in activation or evoked properties. If HLBP shows enhanced twitch phosphorylation markers without a corresponding performance gain, PAPE is present but behaviorally masked; if no physiological change is detected, the null is genuine and not a measurement artifact.
</RLVR_COUNTERFACTUAL_VETOES>