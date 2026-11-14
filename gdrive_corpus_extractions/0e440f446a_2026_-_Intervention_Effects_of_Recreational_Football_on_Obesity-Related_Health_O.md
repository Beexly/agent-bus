---
source: "2026 - Intervention Effects of Recreational Football on Obesity-Related Health Outcomes A Systematic Review and Meta-Analysis - Zhang et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Sports Science and Medicine/2026"
pages: 29
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4832
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper (a systematic review and meta-analysis on recreational football effects on obesity-related health outcomes) and produce output with strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations. Use formal LaTeX. Cite pages exactly. Ensure total word count across sections >= 1000 words. The THINK_TRACE alone needs >=400 words.

I need to parse the provided markdown source text carefully. It spans pages 459-475 (29 pages as stated? Actually the content shows pages 460-475, likely the PDF pages 459-475 in the journal, but the user says PAGES: 29, source text includes content up to 475. I need to cite exact page numbers as they appear in the text: 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475. Some content before 460 includes page 459 maybe in header but not numbered in text. I will cite visible page numbers like [PAGE 460], etc.

Let's extract key facts:

- Zhang et al. 2026, JSSM 25, 459-475.
- 16 RCTs, 387 participants (200 football, 187 control).
- Age 8 to 68.1 years.
- Predominantly children/adolescents and males.
- Outcomes: BMI, BFP, WC, LBM (primary); TG, TC, LDL-C, HDL-C, SBP, DBP (secondary).
- Results:
  - BMI: MD = -2.58 kg/m², 95% CI [-3.35, -1.81], P<0.00001, I²=10%, n=13 studies, participants 310 (Table 3, page 469). Moderate certainty.
  - BFP: MD = -2.95%, 95% CI [-4.45, -1.46], P=0.0001, I²=10%, n=13, participants 305. Moderate.
  - WC: MD = -8.15 cm, 95% CI [-11.60, -4.71], P<0.00001, I²=17%, n=5, participants 132. Moderate.
  - LBM: between-group MD = -3.00 kg, 95% CI [-5.87, -0.14], P=0.04, I²=74%, n=10, participants 210. Low certainty. Within-group pre-post: MD = +1.83 kg, 95% CI [0.71, 2.96], P=0.001.
  - SBP: MD = -6.62 mmHg, 95% CI [-10.16, -3.09], P=0.0002, I²=55%, n=6, participants 162. Low certainty.
  - DBP: MD = -2.60 mmHg, 95% CI [-4.56, -0.65], P=0.009, I²=0%, n=7, participants 178. Moderate.
  - TG: SMD = -0.57, 95% CI [-0.93, -0.20], P=0.002, I²=30%, n=5, participants 146. Low.
  - TC: SMD = -0.31, 95% CI [-0.62, 0.00], P=0.05, I²=29%, n=6, participants 172. Low.
  - LDL-C: SMD = -0.28, 95% CI [-0.59, 0.03], P=0.07, I²=20%, n=6, participants 168. Low.
  - HDL-C: SMD = 0.30, 95% CI [0.00, 0.60], P=0.05, I²=44%, n=7, participants 181. Low.

- Heterogeneity thresholds: I² 25% low, 50% moderate, 75% high. Fixed-effect if I² ≤ 50%, random-effects if I² > 50% (page 461).
- GRADE: downgrade for risk of bias, inconsistency (I² ≥50% one level, ≥75% two levels), indirectness, imprecision (total sample <400 or CI crosses line), publication bias (funnel asymmetry or Egger P<0.10).
- Total sample 387 <400, so imprecision downgrade applicable for many outcomes.
- Subgroup LBM: age <20: MD -2.31 kg, CI [-6.53, 1.90], P=0.28, I²=79%. Age ≥20: MD -4.28 kg, CI [-6.52, -2.05], P=0.0002, I²=0%. Chi²=0.66, df=1, P=0.42 (not significant). Training frequency <3 sessions/week: MD -5.42 kg, CI [-7.83, -3.01], P<0.0001, I²=0%. ≥3 sessions/week: MD -1.19 kg, CI [-4.65, 2.27], P=0.50, I²=71%. Chi²=3.87, df=1, P=0.05 (approached significance). (Pages 467-468).
- Sensitivity: Excluding Wang et al. (2023) for LBM reduced I² to 37% without changing direction. Excluding Seabra et al. (2016) for SBP reduced I² to 0% while remaining significant. (Page 467).
- Publication bias: Egger's test for LBM t=-2.61, df=8, P=0.0314 (significant), suggesting small-study effects. BMI t=0.65, df=12, P=0.5253. BFP t=1.66, df=11, P=0.1260. (Page 468).
- Intervention duration 3 to 6 months. Frequency 2-4 sessions/week. Session ~60 min. Intensity 50-83% HRmax. (Pages 463, 465 Table 2).
- Risk of bias: RoB 2. D1 randomization, D2 deviations, D3 missing data, D4 measurement, D5 selection of reported result. (Page 461, Supplementary Table S2 pages 474-475).
- Limitations: sample size <400, male and pediatric/adolescent dominance, no long-term follow-up, English language only. (Pages 471-472).

I must not mention betting lines. No toy equations. Use formal LaTeX for effect estimates, CIs, I², etc.

Structure:

<THINK_TRACE>
- Deep multi-hop derivation: how the meta-analysis moves from individual RCTs to pooled MD/SMD, the statistical model (fixed vs random effects based on I²), the GRADE downgrade logic, and the gray zones (LBM between-group vs within-group contradiction, subgroup frequency P=0.05 borderline, Egger's test for LBM with only 9 studies? Actually Egger's for LBM df=8 implies 9 studies? Wait n=10 studies for LBM, but Egger's df=8 implies maybe 9? Let's check: Egger's test for LBM t=-2.61, df=8, P=0.0314. df = k-2 typically, so k=10 studies. That's consistent with 10 studies for LBM. So Egger's performed because at least 10 studies available. Good.
- Gray-zone audit: total N=387 <400 triggers imprecision. The LBM between-group favors control (MD=-3.00 kg) but within-group favors intervention (+1.83 kg). This is a reversal paradox due to control group changes or regression to the mean. The subgroup by training frequency has Chi²=3.87, P=0.05 exactly borderline. Age subgroup not significant. Certainty moderate-to-low.
- Word count >=400.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal LaTeX equations for MD, SMD, CI, I², GRADE downgrade rules, RoB 2 domains.
- Units: kg/m², %, cm, kg, mmHg, SMD (unitless), sessions/week, min, %HRmax.
- Page citations for each statistic.
- Breakdown of included studies per outcome (n studies, participants).
- Singularity/breakdown regimes: I² > 50% random-effects; sample <400 imprecision; Egger's P<0.10 publication bias; LBM within-group vs between-group divergence.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
- Historical lineage: Andersen et al. 2014a/b, Bangsbo et al. 2014/2015, Krustrup et al. 2009/2016/2018, Milanović et al. 2019, Klein? Actually the paper cites these. The "Football for Health" concept, small-sided games, recreational football as disease prevention. Multi-week traps: intervention duration only 3-6 months, no long-term follow-up; training frequency dose-response ambiguity (<3 vs ≥3 sessions/week); comparator heterogeneity (daily activity vs sedentary vs health education); male/pediatric bias limiting generalization to adult women.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: participants with overweight/obesity may regress to sedentary habits post-intervention; no follow-up data means durability unknown. Counter-trap: the socially interactive nature of football may sustain participation (Krustrup et al. 2016; 2018; Milanović 2019), but evidence is short-term. Clock: intervention window 3-6 months; biological adaptation timelines for lipoprotein changes (Kraus et al. 2002; Leon & Sanchez 2001) may require larger volumes/longer durations, explaining null TC/LDL-C/HDL-C. The recursive loop: short-term RCT shows adiposity improvement, but without maintenance, obesity recurs; the meta-analysis cannot close the loop on durability.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical/biomechanical: intermittent high-intensity activity, multidirectional movement, acceleration/deceleration; injury risk in overweight/obese not systematically reported; weight-bearing impact on joints (not detailed but biomechanical load).
- Weather: outdoor football sessions subject to weather; not reported in included studies as a moderator; no data on temperature, humidity, air quality.
- Veto proof: The review's inclusion criterion required recreational football as sole intervention for ≥3 months, excluding combined diet/exercise, isolating the modality. However, lack of dietary control in some studies (e.g., Weintraub 2008 no dietary intervention; Vasconcellos 2016 no dietary intervention) is a confounding veto layer. Adherence variability (42% in Weintraub 2008 vs ≈100% in Vasconcellos 2021) is a physical exposure veto.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
- 3 verifiable RLVR (Reinforcement Learning via Verifiable Rewards?) counterfactual veto scenarios + predictions. Need to frame as scenarios where the model's output would be vetoed if conditions met.
  1. If a future RCT with N ≥ 400, low RoB, duration ≥12 months, shows no BMI reduction (MD CI crosses 0), then the current MD=-2.58 kg/m² is vetoed as small-study bias. Prediction: pooled BMI effect would shrink toward null.
  2. If a direct comparison trial isolates dietary control (isocaloric) and shows LBM between-group effect disappears (MD CI includes 0), then the within-group LBM gain (+1.83 kg) is vetoed as regression to the mean or control-group decline. Prediction: LBM certainty downgraded to very low.
  3. If a trial in adult females (≥50% female, age ≥20) with ≥3 sessions/week shows SBP effect heterogeneity I² > 75% and Egger's P<0.10, then the current SBP MD=-6.62 mmHg is vetoed for external validity. Prediction: SBP certainty remains low and effect not generalizable.
- Include formal verification criteria and predicted numerical bounds.

Need to ensure total words across all sections >= 1000. THINK_TRACE >= 400. I'll write generously.

Also strict: no betting lines. No fake ratios like Force/Fatigue. All equations formal.

Let's draft carefully with page citations. I must use [PAGE N] format exactly.

I need to be careful about page numbers. The text has page numbers like 460, 461, etc. I will cite them.

Let's check some exact quotes:

Page 460: "Sixteen RCTs involving 387 participants were included, with the available evidence derived predominantly from children/adolescents and male participants." (Abstract)
Page 460: "In the primary betweengroup meta-analyses, recreational football significantly improved body mass index (BMI), body fat percentage (BFP), waist circumference (WC), triglycerides (TG), systolic blood pressure (SBP), and diastolic blood pressure (DBP)."
Page 461: "Statistical heterogeneity was assessed using the I² statistic, with values of 25%, 50%, and 75% representing low, moderate, and high heterogeneity, respectively. A fixed-effect model was used when heterogeneity was low (I² ≤ 50%), whereas a random-effects model was applied when substantial heterogeneity was present (I² > 50%)."
Page 461: "Imprecision was downgraded when the total sample size was <400 participants or when the 95% CI crossed or approached the line of no effect."
Page 464/465: BMI stats. Page 465: "Pooled analyses showed significant reductions in BMI (MD = -2.58 kg/m², 95% CI: -3.35 to -1.81, P < 0.00001; I² = 10%, 13 studies...)"
Page 465: BFP stats. Page 465: WC stats.
Page 465-466: LBM stats: "For LBM, the primary between-group analysis favored the control group (MD = -3.00 kg, 95% CI: -5.87 to -0.14, P = 0.04), with substantial heterogeneity (I² = 74%, 10 studies...)"
Page 466: within-group LBM: "MD = +1.83 kg, 95% CI: 0.71 to 2.96, P = 0.001"
Page 466: SBP: "MD = -6.62 mmHg, 95% CI: -10.16 to -3.09, P = 0.0002; I² = 55%, 6 studies"
Page 466: DBP: "MD = -2.60 mmHg, 95% CI: -4.56 to -0.65, P = 0.009; I² = 0%, 7 studies"
Page 467: TG: "SMD = -0.57, 95% CI: -0.93 to -0.20, P = 0.002; I² = 30%, 5 studies"
Page 467: TC, LDL-C, HDL-C stats.
Page 467-468: Subgroup LBM details.
Page 468: Egger's test details.
Page 469: Table 3 certainty.
Page 463: Intervention characteristics duration 3-6 months, frequency 2-4 sessions/week, session ~60 min, intensity 50-83% HRmax.
Page 463 Table 2 details.

I need to ensure I don't exceed the source text but can reference it. No need to mention pages not visible? I'll cite visible ones.

Word count plan:
- THINK_TRACE: ~500 words.
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words.
- RETROCAUSAL_GENEALOGY: ~200 words.
- RECURSIVE_THEORY_OF_MIND: ~200 words.
- CROSS_LAYER_VETO_ADJUDICATION: ~200 words.
- RLVR_COUNTERFACTUAL_VETOES: ~200 words.
Total ~1600 words. Good.

Let's write.

Important: Use LaTeX properly. No toy equations. Use formal definitions.

For equations:
\[
\hat{\Delta}_{MD} = \bar{X}_{I} - \bar{X}_{C}, \quad SE(\hat{\Delta}_{MD}) = \sqrt{\frac{s_I^2}{n_I} + \frac{s_C^2}{n_C}}
\]
\[
CI_{95\%} = \hat{\Delta} \pm t_{1-\alpha/2, df} \cdot SE(\hat{\Delta})
\]
\[
I^2 = \max\left(0, \frac{Q - df}{Q}\right) \times 100\%
\]
Random effects if \(I^2 > 50\%\), fixed if \(I^2 \le 50\%\).
GRADE downgrade: \(C_{final} = C_{initial} - \sum \Delta_{domain}\), with \(\Delta \in \{1,2\}\) levels.
SMD:
\[
SMD = \frac{\bar{X}_I - \bar{X}_C}{S_{pooled}}, \quad S_{pooled} = \sqrt{\frac{(n_I-1)s_I^2 + (n_C-1)s_C^2}{n_I + n_C - 2}}
\]
Egger's regression: \(P < 0.10\) indicates small-study effects.
Breakdown regimes: \(N_{total} < 400\) triggers imprecision downgrade; \(I^2 \ge 75\%\) triggers two-level inconsistency downgrade; \(I^2 \in [50,75)\) triggers one-level; comparator heterogeneity undefined.

I will cite [PAGE 461] for the I² and GRADE rules. [PAGE 465] for BMI etc.

Now write the final answer with exact XML tags. No markdown outside? The user wants exact XML sections. I'll provide only the sections.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source is Zhang et al. (2026), Journal of Sports Science and Medicine 25, 459–475, a PRISMA 2020 systematic review and meta-analysis registered prospectively in PROSPERO (CRD420251054341) [PAGE 460]. The literature search was conducted 23 December 2025 across Web of Science, PubMed, Embase, Scopus, and SPORTDiscus, yielding 909 initial records; after deduplication and abstract/full-text screening, 16 RCTs comprising 387 participants (200 football, 187 control) were retained [PAGE 462]. The causal chain from study inclusion to pooled inference operates through four sequential operators: (1) effect-size extraction at the study–outcome level using mean difference (MD) for anthropometric and blood-pressure outcomes and standardized mean difference (SMD) for lipids [PAGE 461]; (2) heterogeneity stratification via the I² statistic with fixed-effect pooling for I² ≤ 50% and random-effects pooling for I² > 50% [PAGE 461]; (3) GRADE certainty assessment across risk of bias, inconsistency, indirectness, imprecision, and publication bias, with automatic downgrade when total N < 400 [PAGE 461]; and (4) subgroup/sensitivity interrogation to isolate moderators such as age (<20 vs ≥20 years) and training frequency (<3 vs ≥3 sessions/week) [PAGE 467].

Key derived quantities include BMI MD = −2.58 kg/m² (95% CI: −3.35 to −1.81; P < 0.00001; I² = 10%; n = 13 studies; N = 310) [PAGE 465], BFP MD = −2.95% (95% CI: −4.45 to −1.46; P = 0.0001; I² = 10%; n = 13; N = 305) [PAGE 465], WC MD = −8.15 cm (95% CI: −11.60 to −4.71; P < 0.00001; I² = 17%; n = 5; N = 132) [PAGE 465], SBP MD = −6.62 mmHg (95% CI: −10.16 to −3.09; P = 0.0002; I² = 55%; n = 6; N = 162) [PAGE 466], DBP MD = −2.60 mmHg (95% CI: −4.56 to −0.65; P = 0.009; I² = 0%; n = 7; N = 178) [PAGE 466], and TG SMD = −0.57 (95% CI: −0.93 to −0.20; P = 0.002; I² = 30%; n = 5; N = 146) [PAGE 467]. Lipid markers TC, LDL-C, and HDL-C were null [PAGE 467].

Gray-zone audit reveals three structural instabilities. First, the total sample N = 387 falls below the GRADE imprecision threshold of 400 participants, mandating downgrade across most outcomes despite statistical significance [PAGE 461]. Second, lean body mass (LBM) exhibits a reversal paradox: the between-group comparison favors control (MD = −3.00 kg, 95% CI: −5.87 to −0.14; P = 0.04; I² = 74%; n = 10; N = 210), while the supplementary within-group pre–post analysis favors intervention (MD = +1.83 kg, 95% CI: 0.71 to 2.96; P = 0.001) [PAGE 465–466]. This divergence indicates that control-group LBM may have declined or regressed to the mean, invalidating a simple within-group interpretation of intervention efficacy. Third, the training-frequency subgroup analysis for LBM produces a borderline test for subgroup differences (Chi² = 3.87, df = 1, P = 0.05), and Egger’s regression for LBM is statistically significant (t = −2.61, df = 8, P = 0.0314), signaling potential small-study effects despite only 10 contributing studies [PAGE 467–468]. Sensitivity analysis shows that excluding Wang et al. (2023) reduces LBM heterogeneity from I² = 74% to 37% without changing the pooled direction, while excluding Seabra et al. (2016) collapses SBP heterogeneity from I² = 55% to 0% [PAGE 467]. These operations demonstrate that the pooled estimates are not robust to single-study removal in the highest-heterogeneity outcomes, and the moderate-to-low certainty ratings are epistemically justified rather than conservative formalism.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Effect-size operators. For continuous outcomes reported in comparable units, the pooled mean difference is
\[
\hat{\Delta}_{MD} = \bar{X}_{I} - \bar{X}_{C}, \qquad SE(\hat{\Delta}_{MD}) = \sqrt{\frac{s_I^2}{n_I} + \frac{s_C^2}{n_C}},
\]
with 95% confidence interval
\[
CI_{95\%} = \hat{\Delta}_{MD} \pm t_{1-\alpha/2,\;df}\cdot SE(\hat{\Delta}_{MD}), \quad \alpha = 0.05.
\]
When scales differ across studies, the standardized mean difference is
\[
SMD = \frac{\bar{X}_{I} - \bar{X}_{C}}{S_{pooled}}, \qquad
S_{pooled} = \sqrt{\frac{(n_I-1)s_I^2 + (n_C-1)s_C^2}{n_I + n_C - 2}}.
\]
Units of observation: BMI in kg/m² [PAGE 465]; BFP in percentage points (%) [PAGE 465]; WC in cm [PAGE 465]; LBM in kg [PAGE 465]; SBP and DBP in mmHg [PAGE 466]; TG, TC, LDL-C, HDL-C expressed as unitless SMD [PAGE 467]. Intervention dose is recorded in sessions/week, minutes/session, and %HRmax [PAGE 463, Table 2].

Heterogeneity and model selection. Cochran’s Q and I² are computed as
\[
I^2 = \max\left(0,\; \frac{Q - df}{Q}\right)\times 100\%.
\]
Per the review’s pre-specified rule [PAGE 461]: fixed-effect model if \(I^2 \le 50\%\); random-effects model if \(I^2 > 50\%\). Breakdown regimes: substantial heterogeneity \(I^2 \ge 75\%\) triggers a two-level GRADE inconsistency downgrade; \(50\% \le I^2 < 75\%\) triggers one level [PAGE 461].

GRADE certainty operator. Initial certainty = high (RCTs only) [PAGE 461]. Final certainty
\[
C_{final} = C_{initial} - \sum_{d \in \{bias, inconsistency, indirectness, imprecision, publication\}} \Delta_d,
\quad \Delta_d \in \{0,1,2\}.
\]
Imprecision downgrade applies when total participants \(N < 400\) or when the 95% CI crosses/approaches the null [PAGE 461]. Publication-bias downgrade applies when funnel-plot asymmetry is observed or Egger’s regression yields \(P < 0.10\) [PAGE 461].

Outcome-level breakdown with citations:
- BMI: MD = −2.58 kg/m², 95% CI [−3.35, −1.81], P < 0.00001, I² = 10%, 13 studies, N = 310, Moderate certainty (downgraded for risk of bias) [PAGE 465; PAGE 469, Table 3].
- BFP: MD = −2.95%, 95% CI [−4.45, −1.46], P = 0.0001, I² = 10%, 13 studies, N = 305, Moderate [PAGE 465; PAGE 469].
- WC: MD = −8.15 cm, 95% CI [−11.60, −4.71], P < 0.00001, I² = 17%, 5 studies, N = 132, Moderate [PAGE 465; PAGE 469].
- LBM: between-group MD = −3.00 kg, 95% CI [−5.87, −0.14], P = 0.04, I² = 74%, 10 studies, N = 210, Low certainty (risk of bias, inconsistency, potential publication bias) [PAGE 465–466; PAGE 469]. Within-group pre–post MD = +1.83 kg, 95% CI [0.71, 2.96], P = 0.001 [PAGE 466].
- SBP: MD = −6.62 mmHg, 95% CI [−10.16, −3.09], P = 0.0002, I² = 55%, 6 studies, N = 162, Low (risk of bias; inconsistency) [PAGE 466; PAGE 469].
- DBP: MD = −2.60 mmHg, 95% CI [−4.56, −0.65], P = 0.009, I² = 0%, 7 studies, N = 178, Moderate [PAGE 466; PAGE 469].
- TG: SMD = −0.57, 95% CI [−0.93, −0.20], P = 0.002, I² = 30%, 5 studies, N = 146, Low (risk of bias; imprecision) [PAGE 467; PAGE 469].
- TC: SMD = −0.31, 95% CI [−0.62, 0.00], P = 0.05, I² = 29%, 6 studies, N = 172, Low [PAGE 467; PAGE 469].
- LDL-C: SMD = −0.28, 95% CI [−0.59, 0.03], P = 0.07, I² = 20%, 6 studies, N = 168, Low [PAGE 467; PAGE 469].
- HDL-C: SMD = 0.30, 95% CI [0.00, 0.60], P = 0.05, I² = 44%, 7 studies, N = 181, Low [PAGE 467; PAGE 469].

Publication-bias operator. Egger’s regression results: BMI t = 0.65, df = 12, P = 0.5253; BFP t = 1.66, df = 11, P = 0.1260; LBM t = −2.61, df = 8, P = 0.0314 [PAGE 468]. Because only LBM crosses P < 0.10, small-study effects are implicated solely for LBM [PAGE 468].

Singularity/breakdown regimes: (i) N_total = 387 < 400 invokes imprecision downgrade for all outcomes [PAGE 461]; (ii) LBM I² = 74% approaches the 75% high-heterogeneity boundary and subgroup Chi² P = 0.05 sits exactly at the nominal significance threshold, rendering moderator claims non-robust [PAGE 467–468]; (iii) the absence of long-term follow-up means the estimand is restricted to intervention-period effects, not durability [PAGE 471–472].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

The review embeds itself in the “Football for Health” lineage originating from Krustrup, Bangsbo, and colleagues, who established recreational football as a health-promoting activity through interdisciplinary studies of untrained men, children, and clinical populations [PAGE 460; PAGES 472–473 references]. Cited antecedents include Krustrup et al. (2009) on recreational soccer as effective health-promoting activity for untrained men; Bangsbo et al. (2014; 2015) on football for prevention and treatment of non-communicable diseases; Andersen et al. (2014a; 2014b; 2016) on football in type 2 diabetes and older adults; Hansen et al. (2013) on cardiovascular effects in overweight children; and Milanović et al. (2019) on broad-spectrum fitness benefits [PAGE 460; PAGES 472–473]. The conceptual claim is that intermittent high-intensity activity, multidirectional movement, and social interaction jointly produce adherence and physiological stimuli unattainable by conventional exercise [PAGE 460].

Multi-week traps are structurally embedded. First, all included interventions lasted only 3 to 6 months, with three-month protocols most common (n = 8) and six-month protocols next (n = 6) [PAGE 463]. Lipid physiology literature cited by the review (Kraus et al., 2002; Leon & Sanchez, 2001) indicates that meaningful LDL-C and HDL-C adaptation often requires larger exercise volumes and longer durations than those delivered here, which explains the null findings for conventional lipids despite significant TG reduction [PAGE 467; PAGES 472–473 references]. Second, training frequency ranged from 2 to 4 sessions/week, and the LBM subgroup analysis hints at a non-monotonic dose-response: <3 sessions/week produced MD = −5.42 kg (95% CI [−7.83, −3.01], P < 0.0001; I² = 0%), whereas ≥3 sessions/week produced MD = −1.19 kg (95% CI [−4.65, 2.27], P = 0.50; I² = 71%) [PAGE 467–468]. This paradox—lower frequency associated with larger between-group LBM reduction—likely reflects control-group deterioration in low-frequency trials rather than a true biological dose-response, and it cannot be resolved without longer follow-up. Third, the comparator layer is historically unstable: controls span “daily activities,” sedentary behavior, health education, and usual physical activity, with “daily activity” never consistently defined [PAGE 463]. Because the review excludes combined diet–exercise interventions to isolate football [PAGE 460], it inherits a temporal truncation problem: the intervention window ends at 3–6 months, but obesity is a chronic positive-energy-balance condition requiring lifelong modulation [PAGE 460]. No study reports post-intervention follow-up, so the causal genealogy is cut off precisely at the point where habit consolidation or relapse would determine public-health relevance [PAGE 471–472].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression. Participants with overweight or obesity enter the intervention during a crisis state (elevated adiposity, blood pressure, and triglycerides). The reviewed trials show short-term improvements in BMI, BFP, WC, TG, SBP, and DBP [PAGE 465–467], but the absence of follow-up data means the review cannot observe whether participants regress to pre-intervention habits once the structured football sessions cease [PAGE 471–472]. In recursive terms, the intervention is a finite-horizon perturbation of a chronic energy-balance system; without maintenance, the attractor dynamics of obesogenic behavior likely restore baseline adiposity. This is not merely a limitation but a structural blind spot: the meta-analysis estimates an intervention effect conditional on continued exposure, yet the target estimand for clinical practice is the durability of effect after exposure withdrawal.

Counter-trap. The counter-trap is the social-engagement hypothesis: because recreational football is game-based and socially interactive, it may promote sustained participation and cumulative training effects over time [PAGE 460; citing Krustrup et al. 2016; 2018; Milanović et al. 2019]. If true, the short RCT duration would underestimate real-world effectiveness because adherence would self-sustain beyond the protocol. However, the source data do not support this counter-trap empirically: adherence is heterogeneously reported (e.g., ≈42% attendance in Weintraub et al. 2008 versus ≈100% in Vasconcellos et al. 2021) [PAGE 464, Table 1], and no trial extends beyond six months [PAGE 463]. The counter-trap remains a theoretical possibility, not an evidenced one.

Clock. The operative clock is the intervention duration: 3 to 6 months [PAGE 463]. Biological adaptation timelines differ by outcome: adiposity and blood pressure respond within this window (significant MDs for BMI, BFP, WC, SBP, DBP) [PAGE 465–466], whereas lipoprotein remodeling (TC, LDL-C, HDL-C) may require larger volumes and longer exposure, consistent with the null lipid findings [PAGE 467; citing Kraus et al. 2002; Leon & Sanchez 2001, PAGES 472–473]. Recursively, the clock imposes a selection bias: only outcomes with fast time-constants appear statistically significant; slow-constant outcomes (lipids, LBM consistency, long-term weight maintenance) are underpowered or null by design. Thus the theory of mind for the evidence base is that it captures early-phase physiological responsiveness but is recursively blind to the maintenance phase where obesity treatment succeeds or fails.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof.

Physical layer. Recreational football involves repeated running, acceleration, deceleration, and changes of direction, increasing total energy expenditure and providing an adiposity-reducing stimulus [PAGE 470]. The included protocols prescribed sessions of approximately 60 minutes (n = 12) with some extending to 60–90 minutes [PAGE 463, Table 2], at intensities ranging from 50% to 83% of HRmax, with most studies reporting 70–83% HRmax [PAGE 463]. These doses are physically sufficient to produce the observed BMI and BFP reductions, but the review does not systematically capture musculoskeletal load, injury incidence, or joint stress in overweight/obese participants. Because no adverse-event data are extracted, a biomechanical injury veto cannot be falsified from the source text.

Biomechanical/adherence layer. Training adherence/exposure varies widely: attendance ≈42% in Weintraub et al. (2008) versus ≈100% in Vasconcellos et al. (2021) and Soares et al. (2023) [PAGE 464, Table 1]. Frequency ranged from 2 to 4 sessions/week [PAGE 463]. Because the primary pooled models weight studies by inverse variance without explicit adherence adjustment, the estimated MDs assume full protocol delivery. A veto condition is therefore triggered: if a future trial re-analyzes the same data using per-protocol or adherence-weighted effect sizes, the BMI MD of −2.58 kg/m² could attenuate toward null, particularly given that low adherence dilutes the intervention dose.

Weather and environmental layer. The source text contains no variables for temperature, humidity, precipitation, or air quality, and no subgroup analysis by season or climate zone is performed [PAGES 460–475]. Outdoor recreational football is inherently weather-sensitive; session cancellation or intensity modification due to weather would introduce unmeasured exposure error. Because the review includes studies from diverse geographic settings (South Korea, China, Europe) without climate covariates, a weather veto is structurally unverifiable but operationally present: any claim of transportability to extreme climates is unsupported.

Cross-layer adjudication. The review’s inclusion criterion—recreational football as the sole intervention for at least 3 months, with no combined diet or other exercise [PAGE 460]—is a veto against modality confounding. However, dietary control was inconsistently applied: some studies excluded relevant medications or recorded intake (Seabra et al. 2014; 2016; Knoepfli-Lenzin et al. 2010), whereas others provided no dietary intervention or monitoring (Weintraub et al. 2008; Vasconcellos et al. 2016; Soares et al. 2023) [PAGE 464, Table 1]. Thus the isolation veto is partially breached: unmeasured dietary confounding could explain part of the adiposity effect, particularly because total energy balance is the principal driver of obesity [PAGE 460]. The final adjudication: physical and biomechanical layers support plausibility but not proof; adherence heterogeneity introduces dose uncertainty; weather and dietary layers are unmeasured vetoes that cap certainty at moderate-to-low, exactly as rated by GRADE [PAGE 469].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR counterfactual veto scenarios and predictions.

Scenario 1 — Sample-size and small-study veto. Verifiable condition: a newly published, low-risk-of-bias RCT with N ≥ 400 (individual or aggregated) and duration ≥ 6 months reports a between-group BMI effect whose 95% CI includes zero (e.g., MD ∈ [−1.0, +0.5] kg/m²). Veto rule: if such evidence exists, the current pooled BMI MD = −2.58 kg/m² (95% CI [−3.35, −1.81]; N = 310) [PAGE 465] is vetoed as small-study bias amplified by the N < 400 imprecision threshold [PAGE 461]. Prediction: re-pooled BMI effect would shrink toward MD ≈ −1.0 to −1.5 kg/m² with widened CI crossing zero, and certainty would drop from Moderate to Low.

Scenario 2 — LBM within-group reversal veto. Verifiable condition: a direct randomized trial with isocaloric dietary control and blinded DXA assessment shows that the control group’s LBM change is not significantly different from zero while the intervention group gains LBM (within-group MD = +1.83 kg, 95% CI [0.71, 2.96] in the current review) [PAGE 466], but the between-group contrast remains non-significant (CI includes zero). Veto rule: if the between-group LBM contrast is null under strict dietary control, the current between-group LBM MD = −3.00 kg favoring control [PAGE 465–466] is vetoed as control-group decline artifact, and the within-group gain is reclassified as regression to the mean or measurement error rather than intervention effect. Prediction: LBM certainty would be downgraded from Low to Very Low; no claim of LBM benefit or harm would be supportable.

Scenario 3 — External-validity and frequency veto. Verifiable condition: a multicenter RCT in adult females (age ≥ 20 years, ≥ 50% female) using ≥ 3 sessions/week for ≥ 6 months reports SBP heterogeneity I² > 75% and Egger’s P < 0.10, with an effect estimate whose CI overlaps the current MD = −6.62 mmHg (95% CI [−10.16, −3.09]) only marginally [PAGE 466]. Veto rule: if the female/older-adult subgroup shows inconsistency and small-study effects, the current SBP finding is vetoed for generalizability beyond the predominantly male, pediatric/adolescent evidence base [PAGE 460; PAGE 471–472]. Prediction: SBP certainty remains Low; the pooled effect is restricted to male children/adolescents and cannot be extrapolated to adult women or older adults without new trials.
</RLVR_COUNTERFACTUAL_VETOES>