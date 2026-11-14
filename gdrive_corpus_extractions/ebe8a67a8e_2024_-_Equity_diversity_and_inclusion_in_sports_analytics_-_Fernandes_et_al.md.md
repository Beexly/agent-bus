---
source: "2024 - Equity, diversity, and inclusion in sports analytics - Fernandes et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Quantitative Analysis in Sports/2024"
pages: 29
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 8218
---

<NATIVE_REASONING>
The user wants a deep reasoning output for a specific source paper: "Equity, diversity, and inclusion in sports analytics" by Fernandes et al., published in J. Quant. Anal. Sports 2024. The user has provided the full text of the paper (pages 87-111, 29 pages).

I need to produce output with exactly these XML sections:
1. <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
2. <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
3. <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
4. <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
5. <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
6. <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes.
- >= 1,000-WORD DEPTH across these exact XML sections.
- When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.

Important: The source text contains page markers like "> **88 —** C. Fernandes et al.: Equity, diversity, and inclusion in sports analytics". I need to map content to page numbers. The text seems to be pages 87-111. I'll reference pages like [PAGE 88], [PAGE 89], etc. based on the markers in the text.

Let me plan the content:

<THINK_TRACE>: Multi-hop derivation. Need to discuss:
- The dominant group: young (72.0% <35), White (69.5%), heterosexual (89.7%), male (82.0%). Intersection: 33.0% have all features.
- Pay disparity: management males $138.0K ± 57.2 vs females $108.3K ± 30.3; difference ~$30K (27%). Non-management males $82.7K vs females $67.5K (~$15K or 23%). White management $139.1K vs racialized $122.3K (~$17K or 14%).
- Discrimination: females 38.2% vs males 8.1% (nearly 5x). 12.9% overall experienced discrimination. Sexual discrimination: 11/13 were females; racial/ethnic: 6/13 racialized.
- Workplace satisfaction: females "strongly agreed" less on equitable support, workload, voice, taken seriously. 36.3% females vs 9.8% males "strongly agreed" they must work harder to be valued equally.
- Statistical underpowering: Mann-Whitney U and permutation tests failed to reject null due to small samples (females n=35, racialized n=69, White n=162). Yet Appendix B shows zero-probability event that females earn more than males on average under uniform distribution assumptions (P = 0.5^53 ≈ 0; conservative x calculation yields probability ~0).
- Limitations: voluntary response, anonymity prevents team/league attribution, small sample sizes, bucketed salary data (midpoints), >$200K assumed $250K.
- Gray zones: self-reported sex assigned at birth vs gender identity; race categories collapsed into White vs racialized (heterogeneous); "P.N.T.A" handling; cross-tabulations with very small n (intern n=4, researcher n=6, executive n=7); COVID recall bias (prior to COVID vs since COVID).

Need >=400 words in THINK_TRACE. I'll write a thorough multi-hop derivation connecting demographic dominance -> pay gaps -> discrimination -> satisfaction -> statistical power -> robustness checks -> limitations.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX.
- Define survey sample N=233.
- Demographics: p_male = 191/233 = 0.820, p_white = 162/233 = 0.695, p_hetero = 209/233 = 0.897, p_age<35 = 167/233? Wait, Table 1: <19 (1), 20-24 (31), 25-29 (73), 30-34 (63) = 168. 168/233 = 0.721 ~72.0%. Yes.
- Intersection: 33.0% have all four features.
- Salary gap management: Δ_s = μ_male - μ_female = 138.0 - 108.3 = 29.7 ≈ $30K; relative gap = 29.7/138.0 = 0.215? Wait paper says 27%. Let me check: 30/138 = 21.7%, but paper says roughly $30,000 (27%). Maybe they computed relative to female? 30/108.3 = 27.7%. Or maybe they used slightly different numbers. I'll state as reported: approximately $30K or 27% more. Actually 138/108.3 = 1.274, so male is 27.4% more than female. Yes, (138-108.3)/108.3 = 0.274. So relative to female baseline.
- Race gap management: (139.1-122.3)/122.3 = 0.137 ~14%. Yes.
- Non-management: (82.7-67.5)/67.5 = 0.225 ~23%.
- Discrimination rates: P(D|F) = 0.382, P(D|M) = 0.081. Ratio = 4.72.
- Work harder: P(S_AGREE|F) = 0.363, P(S_AGREE|M) = 0.098. Ratio = 3.70.
- Leaving due to isolation: "agree" or "strongly agree": 35.3% vs 17.4% (2x). "strongly agree": 14.7% vs 3.8% (~4x).
- Statistical tests: Mann-Whitney U, permutation test, alpha=0.05, Bonferroni correction. Failed to reject H0: μ_group1 = μ_group2 vs H1: μ_nondominant < μ_dominant. Underpowered.
- Appendix B robustness: uniform distribution over pay bands width $25K. P(all males bottom half, females top half) = 0.5^n where n=53 (management males+females: 49+6=55? Wait paper says 0.5^53 ≈ 0. Let me check Table 3: Management Male n=49, Female n=6, total 55. But paper says 0.5^53. Maybe they excluded something? Or n=53 refers to something else. Let's just cite what's written: "0.5^53 ≈ 0". Actually they say "plugging in the data we have for males and females in management positions (i.e., Table 3), this probability is 0.5^53 ≈ 0". Table 3 management n: male 49, female 6 = 55. Maybe they excluded P.N.T.A or something. I'll cite verbatim.
- Conservative reversal threshold x: solve for largest x such that if male = L_i + x and female = U_i - x, then female avg > male avg. They report x = 44,444/53? Wait text says "our x = 44, 44 53 so the probability is 25000 ≈ 0". The text is garbled in the PDF extraction. It says "our _x_ = 44, 44 53 so the probability is 25000 ≈ 0". Probably x = 44,444/53? No, let's look: "our _x_ = 44, 44 53" maybe means x ≈ $444? Actually width is $25K. The probability is (x/25000)^53 or something. If x is small relative to 25000, probability ≈ 0. I'll describe it formally without getting bogged down in the garbled text: they compute x such that P = (x / 25000)^53 ≈ 0.
- Units: USD ($,000's), percentages (%), counts (n), odds ratios (dimensionless), p-values, 95% CI.

Need page citations: [PAGE 88] abstract, [PAGE 89] Table 1, [PAGE 90] methods, [PAGE 91] Table 2, [PAGE 92] Table 3, [PAGE 93] Table 4, [PAGE 94] discrimination, [PAGE 95] satisfaction, [PAGE 96] leaving job, [PAGE 97] race satisfaction, [PAGE 98] logistic regression, [PAGE 102] COVID, [PAGE 103] discussion, [PAGE 104] limitations, [PAGE 105] recommendations, [PAGE 107] Appendix B, [PAGE 108] Appendix C.

<RETROCAUSAL_GENEALOGY>: Historical lineage.
- STEM diversity literature: Built In 2021; Funk and Parker 2018 (Pew).
- Discrimination in sports: Ayala 2020; Cunningham, Wicker, and Walker 2021; Kahn 1991; Mervosh and Caron 2019.
- Sports analytics preliminary: Benbow 2021 (Boston Globe).
- EDI definitions: Built In 2021; University of Toronto 2019.
- Well-being/EDI: Findler, Wind, and Barak 2007; Wronski 2021.
- Hiring discrimination meta-analysis: Quillian et al. 2017 (PNAS).
- Canadian librarians with disabilities: Oud 2018.
- Organizational benefits: Dixon-Fyle et al. 2020; Richard, Triana, and Li 2021; Saxena 2014.
- Pew STEM: females ~50% of STEM vs 15% here; Black ~9% STEM vs 1.7% here.
- Pew gender pay gap 2020: females earn 84% of males; here females management earned 78% of males.
- Intersectionality: Collins and Bilge 2020.
- COVID/gender: Burns et al. 2021; Dunatchik et al. 2021; Lyttelton, Zang, and Musick 2020.
- Multi-week traps: The survey was open April 12-June 4, 2021; tweet May 24, 2021. Temporal clustering of responses. Recall bias for "prior to COVID" (pre-March 2020) vs since COVID. The "multi-week trap" could refer to the window effect: responses concentrated after SSAC tweet, creating a non-stationary sample over the 8-week window; also longitudinal recall across pre-pandemic and pandemic periods creates a retrospective bias. Also small n in senior roles creates a survivorship trap across career weeks/years.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- This section is more abstract. I need to interpret the findings through a recursive theory of mind lens: how individuals in the dominant group model others, how marginalized individuals model the dominant group, crisis habit regression (under stress, people revert to exclusionary habits), counter-trap (EDI initiatives as counter-measures that may be gamed), and clock (temporal dynamics, tenure, aging out of the field).
- Dominant group (young, White, male, heterosexual) occupies senior roles; as they age, do they stay? Figure 2 shows proportion of female/racialized decreases with age. This is a "clock" effect: the pipeline leaks over time.
- Crisis habit regression: when organizations face pressure (e.g., public scrutiny after Benbow 2021), they may perform EDI signaling (conference speakers, scholarships) without structural change; under stress, hiring reverts to homophily (clone the dominant group).
- Counter-trap: salary transparency (Recommendation 2) can be a counter-trap if it reveals gaps but lacks enforcement; EDI office (Rec 3) can become a compliance theater if not executive-backed.
- Theory of mind: females report similar satisfaction with compensation fairness despite lower pay—suggests a recursive miscalibration where marginalized individuals internalize dominant-group norms (false consensus or adaptive preference formation). Males may underestimate discrimination because they don't experience it (theory of mind failure). The "voice" and "taken seriously" gaps indicate a breakdown in mutual modeling: dominant group doesn't model marginalized colleagues as credible sources.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- This section is odd for a sports analytics EDI paper. I need to interpret "veto proof" as factors that would veto or invalidate conclusions if present.
- Physical layer: survey is online via Microsoft Forms; requires digital access, literacy, time. No physical venue, weather, or biomechanical constraints apply to data collection (unlike on-field performance). Therefore physical/weather vetoes are null: the study is immune to game-day weather, stadium conditions, biomechanical fatigue, etc.
- Biomechanical layer: respondents are analysts, not athletes; no biomechanical load, injury, or physical performance metric enters the salary/discrimination models. So biomechanical veto is inapplicable.
- However, the veto adjudication must address what *would* invalidate the pay gap claims: if salary buckets are too wide (midpoint assumption), if >$200K assumption ($250K) is wrong, if non-response bias is systematic (e.g., only dissatisfied females responded), if anonymity prevents verifying league/team, if small n makes statistical tests underpowered (Type II error).
- "Weather veto proof": Since data collection is asynchronous and digital, meteorological conditions during April-June 2021 cannot bias response rates differentially by geography in a measurable way (though not tracked). So no weather confound.
- Exact breakdown regime: The Mann-Whitney U test breaks down when n_female_management = 6 and n_racialized_management = 15; the permutation test lacks exchangeability under non-response bias. The midpoint imputation breaks down if salary distributions within bands are skewed (right tail >$200K).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need to create 3 counterfactual veto scenarios where the main conclusion (e.g., "males earn more than females in management" or "females experience more discrimination") would be vetoed/reversed, and give predictions.

Scenario 1: Salary midpoint assumption veto. If actual salaries within the >$200K band are not uniform but concentrated at the lower bound for males and upper bound for females (contrary to assumption), the pay gap could shrink or reverse. Prediction: If we obtain exact payroll data and find that the 6 females in management are all clustered near $250K while males are spread across bands, the mean female management salary could exceed $138K, nullifying the $30K gap. Verifiability: HR payroll records from the 27 professional organizations.

Scenario 2: Non-response bias veto. If the 35 females who responded are disproportionately those who experienced discrimination (self-selection), while satisfied females did not respond, then the population discrimination rate for females is lower than 38.2%, and the "nearly five times" claim is inflated. Prediction: A census of all sports analytics employees (not voluntary) would show P(D|F) closer to P(D|M) ≈ 8-12%, reducing the odds ratio below 2. Verifiability: Mandatory administrative climate survey with 100% response.

Scenario 3: Collapsed race category veto. If "racialized" aggregates E/SE Asian (17), S Asian (14), Latinx (5), Black (4), Middle Eastern (3), Mixed (20), and the pay gap between White and racialized is driven entirely by one subgroup (e.g., Black/Latinx low salaries) while E/SE Asian salaries equal or exceed White, then the binary White vs racialized contrast is a statistical artifact. Prediction: Disaggregating by specific race would show no significant White vs E/SE Asian gap, and the overall $17K gap would decompose into subgroup-specific effects; the omnibus race coefficient in a regression would become insignificant after controlling for field of study (stats/math vs kinesiology). Verifiability: Larger sample with racial subgroup identifiers and department controls.

Need to ensure total word count >= 1000 across all sections. I'll aim for substantial length.

Also strict invariant: ZERO BETTING LINES. No mention of spreads, totals, moneylines, odds. I can mention "odds ratio" because that's a statistical term from the paper, but not betting odds. The paper uses "odds ratio" in logistic regression. That's fine; it's not a betting line.

ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. All equations must be formal LaTeX with SI/probability units. I'll use proper notation.

Let's draft carefully.

Word count estimation: I'll write generously.

Let's begin.

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

I need to include exact [PAGE N] markers and verbatim quotes in SOURCE_OPERATORS_AND_EQUATIONS especially, but also elsewhere where appropriate. The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include them throughout, but definitely in the equations section.

Let's map pages precisely from the text:
- Page 87: Title/abstract start? The text starts with J. Quant. Anal. Sports 2024; 20(2): 87–111. Then abstract. The first page marker shown is "> **88 —**" after abstract. So abstract is on page 87 (implied). Actually the text says "87–111". Then abstract. Then "> **88 —**" appears after the first paragraph of introduction? Let's look: After abstract, there's "Corresponding author..." then "## 1 Introduction". Then text... then "> **88 —** C. Fernandes et al..." appears after "individuals reported higher levels of well-being..." That quote is on page 88. Then "> C. Fernandes et al.: Equity, diversity, and inclusion in sports analytics **— 89**" appears after dissemination paragraph. So page 89 starts after that. Then Table 1 is on page 90? Wait, Table 1 appears before the "> **90 —**" marker? Let's check: Table 1 is shown, then "> **90 —**" marker. Actually the marker "> **90 —**" appears after Table 1? Let's re-read:

"...**Table 1:** Personal-related demographics..." Table content. Then "> **90 —** C. Fernandes et al..." So Table 1 is on page 89? Or 90? The marker indicates page 90 starts after Table 1. Typically the page number at top. Let's infer: The text flows. The marker "> **88 —**" appears mid-Introduction. Then "> C. Fernandes et al.: Equity, diversity, and inclusion in sports analytics **— 89**" appears after the dissemination paragraph (end of page 88/start of 89?). Then Table 1 appears after that. Then "> **90 —**" appears after Table 1 and before "We received a total of 260 survey responses." So Table 1 is likely on page 89 or 90. The marker style "> **90 —**" suggests page 90 header. Let's just assign based on where the marker appears: content before a marker belongs to the previous page. I'll cite conservatively: Table 1 [PAGE 89], Table 2 [PAGE 91] (since marker "> C. Fernandes et al.: Equity... **— 91**" appears before Table 2? Let's check: After Table 1, there's "> **90 —**" then text, then Table 2, then "> C. Fernandes et al.: Equity... **— 91**". So Table 2 is on page 90 or 91? The marker "— 91" appears after Table 2? Actually the text shows Table 2, then "> C. Fernandes et al.: Equity, diversity, and inclusion in sports analytics **— 91**". That suggests Table 2 is on page 90, and page 91 starts after it. Hmm.

Given the ambiguity, I will cite page ranges or approximate pages based on the visible markers, using [PAGE 88], [PAGE 89], etc. as they appear in the text stream. It's acceptable as long as I reference the markers that are present.

Visible markers in order:
- > **88 —** (after "individuals reported higher levels...")
- > C. Fernandes et al.: Equity... **— 89** (after dissemination paragraph)
- > **90 —** (after Table 1)
- > C. Fernandes et al.: Equity... **— 91** (after Table 2? Actually appears after Table 2? Let's look: The text shows Table 2, then "> C. Fernandes et al.: Equity, diversity, and inclusion in sports analytics **— 91**" then text about professional sports. Wait no, after Table 2 there's text "The majority of respondents worked for professional sports teams (54.1 %)..." then "> **92 —**" appears. Then Figure 1, Figure 2, Figure 3, Table 3. Then "> C. Fernandes et al.: Equity... **— 93**" appears after Table 3 and text. Then Table 4. Then text. Then "> **94 —**" appears. Then Figure 4. Then text about discrimination. Then "> **95 —**" appears. Then Figure 5, Figure 6. Then "> **96 —**" appears. Then Figure 7. Then text. Then "> **97 —**" appears. Then Figure 8. Then text. Then "> **98 —**" appears. Then Figure 9. Then text. Then "> C. Fernandes et al.: Equity... **— 99**" appears. Then Figure 10. Then text. Then "> **100 —**" appears. Then Figure 11. Then text. Then "> **101 —**" appears. Then text. Then "> **102 —**" appears. Then Figure 12. Then text. Then "> **103 —**" appears. Then Figure 13. Then text. Then "> C. Fernandes et al.: Equity... **— 104**" appears. Then text. Then "> **105 —**" appears. Then Recommendations. Then "> C. Fernandes et al.: Equity... **— 106**" appears? Actually after recommendations there's "> C. Fernandes et al.: Equity, diversity, and inclusion in sports analytics **— 105**" then Acknowledgments. Then Appendix A. Then "> **106 —**" appears. Then Appendix A content. Then Appendix B. Then "> C. Fernandes et al.: Equity... **— 107**" appears. Then Appendix B continues. Then Appendix C. Then "> **108 —**" appears. Then Appendix C continues. Then "> C. Fernandes et al.: Equity... **— 109**" appears. Then Section 3 questions. Then "> **110 —**" appears. Then questions 24-27. Then References. Then "> C. Fernandes et al.: Equity... **— 111**" appears at end.

Okay, I'll cite these page numbers as they appear. For content that falls between markers, I'll use the nearest preceding page number or range.

Now let's write.

THINK_TRACE: Need >=400 words. I'll write about 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. I'll include:
- N = 233.
- Demographic proportions as equations.
- Salary gap equations with units USD.
- Discrimination conditional probabilities.
- Likert scale ordinal coding (1=Strongly Disagree to 5=Strongly Agree).
- Mann-Whitney U test statement.
- Appendix B uniform distribution probability: P = (1/2)^n.
- Logistic regression odds ratio: OR = 3.2, p=0.02, 95% CI [1.2, 11.2].
- Breakdown regimes.

Need verbatim quotes and page citations.

RETROCAUSAL_GENEALOGY: Historical lineage, multi-week traps. Discuss the survey window (April 12 - June 4, 2021), SSAC tweet May 24, temporal clustering, recall bias pre/post COVID, lineage from STEM EDI literature to sports analytics, intersectionality.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Discuss dominant group modeling, adaptive preferences, salary transparency as counter-trap, EDI office, clock = career tenure/aging.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Digital survey nullifies weather. Breakdown regimes: small n, bucketed salaries, anonymity.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios with predictions.

Make sure no betting lines. I will not mention any betting terms.

Word count: I need to ensure >=1000 words total. I'll write detailed sections.

Let's draft now.

I must be careful with LaTeX formatting inside XML. It should be fine.

Let's write the content.

THINK_TRACE:

Start with multi-hop derivation:
1. Dominant group constitution: N=233. p_male = 191/233 = 0.820 [PAGE 89, Table 1]. p_white = 162/233 = 0.695. p_hetero = 209/233 = 0.897. p_age<35 = (1+31+73+63)/233 = 168/233 = 0.721. Intersection = 33.0% [PAGE 90].
2. Pay disparity: management male mean $138.0K ± 57.2 (n=49), female $108.3K ± 30.3 (n=6) [PAGE 92, Table 3]. Δ = 29.7K ≈ $30K. Relative to female baseline: 29.7/108.3 = 0.274 ≈ 27%. Race: White $139.1K vs racialized $122.3K, Δ=16.8K, relative = 13.7% ≈ 14%.
3. Discrimination: overall 12.9% [PAGE 94]. P(D|F)=0.382, P(D|M)=0.081. Ratio ≈ 4.72. Sexual discrimination: 11/13 females [PAGE 94]. Racial/ethnic: 6/13 racialized [PAGE 94].
4. Satisfaction/voice: 36.3% females vs 9.8% males "strongly agreed" work harder to be valued equally [PAGE 96]. Leaving due to isolation: "agree"/"strongly agree" 35.3% vs 17.4%; "strongly agree" 14.7% vs 3.8% [PAGE 96].
5. Statistical inference: Mann-Whitney U and permutation tests, alpha=0.05, Bonferroni; all failed to reject H0 because underpowered (small n for females/racialized in senior roles) [PAGE 93].
6. Robustness: Appendix B uniform pay-band assumption yields P(females earn more) ≈ 0 via (0.5)^53 and conservative x-threshold calculation [PAGE 107]. Yet midpoint imputation and >$200K → $250K assumption are singularities if distributions are skewed.
7. Gray zones: Sex assigned at birth vs gender identity conflation [PAGE 108, Q10/Q11]; race collapsed into White vs racialized despite heterogeneity (Black n=4, Latinx n=5, Middle Eastern n=3) [PAGE 89, Table 1]; anonymity prevents league/team attribution [PAGE 89]; voluntary response may attract EDI-motivated respondents [PAGE 104].

This is multi-hop: from descriptive stats to pay gaps to discrimination to satisfaction to statistical power to robustness to measurement validity.

Gray-zone audit: The paper acknowledges tests underpowered yet asserts "zero-probability event" via conservative bounding. The tension between frequentist non-significance and Bayesian/robust bounding is a gray zone. Also cross-tab cells with n=4 (interns) make Figure 3 unstable. COVID recall period "prior to COVID" vs "since COVID" creates a retrospective bifurcation that may conflate pandemic effects with pre-existing trends.

Word count should be >400.

SOURCE_OPERATORS_AND_EQUATIONS:

Formal notation:
- Let \(\mathcal{R} = \{1,\dots,233\}\) be respondent set.
- \(S_i \in \{M,F,PNT A\}\), \(R_i \in \{W, \text{racialized}\}\), \(A_i \in \{\text{<35}, \ge 35\}\), \(H_i \in \{\text{hetero}, \text{LGBTQP}\}\).
- \(\hat{p}_M = 191/233 = 0.820\), etc.
- Salary: \(Y_i\) in USD. Buckets \(B_k\). Midpoint \(\tilde{y}_k\). For >$200K, \(\tilde{y}=250{,}000\). Mean \(\bar{y}_{g,j} = \frac{1}{n_{g,j}}\sum_{i \in g,j} \tilde{y}_{k(i)}\). Units: thousands of USD ($,000's).
- Gap: \(\Delta_{M,F}^{\text{mgmt}} = 138.0 - 108.3 = 29.7\) ($,000's). Relative \(r = \Delta / \bar{y}_{F,\text{mgmt}} = 0.274\).
- Discrimination indicator \(D_i \in \{0,1\}\). \(\hat{P}(D|F) = 0.382\), \(\hat{P}(D|M) = 0.081\). Likelihood ratio \(LR = 4.72\).
- Likert ordinal coding: \(L \in \{1,2,3,4,5\}\) mapped to Strongly Disagree ... Strongly Agree.
- Hypothesis test: \(H_0: \mu_{dom} = \mu_{non\text{-}dom}\) vs \(H_1: \mu_{non\text{-}dom} < \mu_{dom}\). Mann-Whitney U, permutation, \(\alpha=0.05\), Bonferroni. All fail to reject [PAGE 93]. Power \(\approx 0\) due to \(n_{F,\text{mgmt}}=6\).
- Appendix B: \(P(\text{all males bottom half, females top half}) = (1/2)^{53} \approx 0\) [PAGE 107]. Conservative reversal threshold \(x^*\): solve \(\bar{y}_F(x) > \bar{y}_M(x)\) where \(y_{M,i}=L_{k(i)}+x, y_{F,i}=U_{k(i)}-x\). Reported \(P \approx (x^*/25000)^{53} \approx 0\).
- Logistic regression: \(\text{OR}_{\text{White vs racialized}} = 3.2\), \(p=0.02\), 95% CI [1.2, 11.2] for disagreement on "I have a voice" [PAGE 98]. Adjusted OR = 3.0, p=0.01, 95% CI [1.3, 6.9] controlling for sex.
- Breakdown/singularity: \(n_{F,\text{mgmt}}=6\) violates asymptotic normality of U-test; bucket width \(w=\$25{,}000\) induces quantization error \(\epsilon \le w/2\); anonymity prevents cluster-robust SE by team/league.

Include verbatim quotes:
[PAGE 92] "males earned more than females at both the management (on average approximately $30 K or 27 % more) and non-management levels..."
[PAGE 94] "Females experienced discrimination nearly five times more than males (38.2 % vs. 8.1 %)."
[PAGE 96] "36.3 % of females strongly agreed that they have to work harder than others to be valued equally, compared to 9.8 % of males."
[PAGE 107] "it is essentially a zero-probability event that female respondents earn more than male respondents, on average."

RETROCAUSAL_GENEALOGY:
- Lineage: STEM EDI literature (Built In 2021; Funk & Parker 2018) → discrimination in sports (Kahn 1991; Ayala 2020; Cunningham et al. 2021) → sports analytics anecdote (Benbow 2021) → this paper as first formal EDI evaluation [PAGE 87].
- Definitions: equity, diversity, inclusion from Built In 2021; U of T 2019 [PAGE 88].
- Benefits literature: Findler et al. 2007; Wronski 2021; Dixon-Fyle et al. 2020; Richard et al. 2021; Saxena 2014 [PAGE 88].
- Hiring discrimination: Quillian et al. 2017 PNAS meta-analysis [PAGE 88].
- Canadian disability: Oud 2018 [PAGE 88].
- Pew comparisons: females 50% STEM vs 15% here; Black 9% STEM vs 1.7% here [PAGE 103]. Gender pay gap 84% vs 78% here [PAGE 103].
- Intersectionality: Collins & Bilge 2020 [PAGE 104].
- Multi-week traps: Survey open April 12–June 4, 2021 (8 weeks) [PAGE 89]. SSAC tweet May 24, 2021 to ~34.6K followers caused a temporal response spike [PAGE 89]. This creates a non-stationary sample: early vs late responders may differ in EDI salience. Recall bias: items reference "12 months prior to COVID" (pre-March 2020) vs "since COVID" [PAGE 102, Appendix C Q19/Q27], producing a retrospective bifurcation where pandemic effects are confounded with pre-existing climate. Multi-week trap: a respondent's answer in week 6 may be influenced by external events (e.g., George Floyd protests, 2020-2021) not captured, creating a time-varying confound.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under institutional stress (public scrutiny after Benbow 2021), dominant-group hiring managers revert to homophily—cloning the young-White-male profile—because it reduces perceived risk. This regresses the pipeline despite EDI rhetoric.
- Counter-trap: Recommendation 2 (salary transparency) can be gamed: transparency without enforcement lets firms publish median gaps while preserving mean gaps via bucketing or band manipulation. Recommendation 3 (EDI office) can become compliance theater if lacking executive support [PAGE 105].
- Clock: Figure 2 shows racialized/female share declines with age; only intern level has parity [PAGE 90-92]. This is an aging-out clock: marginalized analysts exit before reaching senior roles, so the cross-section at any time underrepresents cumulative attrition.
- Theory of mind failure: Females report similar satisfaction with compensation fairness despite earning 27% less [PAGE 103], indicating adaptive preference formation—internalizing the dominant group's valuation model. Males underestimate discrimination (8.1% experienced vs 38.2% for females) because they do not simulate marginalized colleagues' experiences; the "voice" and "taken seriously" gaps [PAGE 95] show a breakdown in reciprocal modeling: dominant group does not grant epistemic authority to non-dominant members.
- Recursive loop: Low representation → fewer role models → marginalized individuals anticipate exclusion → self-select out → lower representation. This is a self-fulfilling prophecy sustained by recursive beliefs about who "belongs."

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Data collection via Microsoft Forms, anonymous, asynchronous [PAGE 89]. No physical venue, game-day weather, stadium altitude, or travel fatigue enters the response mechanism. Therefore meteorological and physical-layer vetoes are null: \(\partial \text{Response} / \partial \text{Weather} = 0\) by design.
- Biomechanical layer: Respondents are analytics personnel, not athletes. No biomechanical load, injury status, or physical performance metric is a covariate in salary or discrimination models. Biomechanical veto is inapplicable.
- What *would* veto conclusions: (1) Systematic non-response bias: if dissatisfied females over-respond, \(P(D|F)\) is inflated; if satisfied females under-respond, the gap shrinks. (2) Salary quantization: midpoint imputation assumes uniform density within $25K bands; if actual distributions are skewed right within bands, \(\bar{y}\) estimates are biased. The >$200K → $250K assumption is a singularity: if true values are unbounded (e.g., $500K+), the gap could be understated or overstated depending on group membership in the tail. (3) Anonymity: prevents verifying organization, so league-specific effects cannot be isolated; a single team with extreme pay practices could drive the aggregate gap. (4) Small-n breakdown: \(n_{F,\text{mgmt}}=6\), \(n_{\text{racialized},\text{mgmt}}=15\) means Mann-Whitney U lacks power; the permutation test assumes exchangeability that voluntary sampling violates.
- Adjudication: The paper's conservative Appendix B bounding [PAGE 107] partially addresses the salary quantization veto, but cannot address non-response or anonymity vetoes. Conclusion: the directional finding (male > female pay in management) is robust to uniform-distribution assumptions but not to non-response bias; the statistical non-significance is a power artifact, not evidence of equivalence.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Payroll exactness veto. Counterfactual: obtain exact (non-bucketed) payroll from the 27 professional organizations. If the 6 females in management are concentrated at the upper edge of their bands while males are spread, the mean female salary could exceed $138K. Prediction: The $30K/27% gap narrows to <$5K or reverses; the Mann-Whitney U p-value rises above 0.05; the Appendix B zero-probability claim is falsified because the uniform-density assumption fails.
- Scenario 2: Mandatory census veto. Counterfactual: a mandatory, 100%-response climate survey of all sports analytics employees (not voluntary). Prediction: The female discrimination rate drops from 38.2% toward the male baseline (8–12%) because the voluntary sample over-selects EDI-motivated or aggrieved respondents; the "nearly five times" odds ratio collapses below 2.0; the "work harder to be valued equally" strong-agree gap (36.3% vs 9.8%) attenuates by at least half.
- Scenario 3: Racial disaggregation veto. Counterfactual: replace the binary White vs racialized contrast with specific subgroups (Black, Latinx, E/SE Asian, S Asian, Middle Eastern, Mixed) and control for field of study (stats/math vs kinesiology). Prediction: The omnibus White–racialized $17K/14% management gap decomposes; E/SE Asian salaries match or exceed White salaries, while Black and Latinx salaries drive the negative contrast. After controlling for technical field, the race coefficient becomes statistically indistinguishable from zero, falsifying the binary race narrative.

Now I need to assemble into XML. Ensure word count total >=1000. Let's estimate: THINK_TRACE ~500 words, SOURCE_OPERATORS ~400 words, RETROCAUSAL ~300, RECURSIVE ~300, CROSS_LAYER ~250, RLVR ~250. Total ~2000. Good.

I need to be careful about verbatim quotes and page markers. I will include them in SOURCE_OPERATORS_AND_EQUATIONS and THINK_TRACE as appropriate.

Let's write carefully, ensuring XML is well-formed. No stray ampersands or unescaped characters. LaTeX with < or > might be problematic? In XML text, < and > must be escaped. But inside LaTeX, I might use \leq, \geq instead of <, > to avoid XML parsing issues. I'll avoid raw < and > in text, or escape them. Since this is a raw text response, I'll just use words or LaTeX commands like \lt, \gt, or avoid them. I'll use "less than" phrasing or \leq.

Also avoid betting lines: no "spreads, totals, moneylines, or odds". I will mention "odds ratio" which is statistical, but I'll clarify it's not betting odds. Actually the instruction says "Never mention spreads, totals, moneylines, or odds." The word "odds" alone might trigger. But "odds ratio" is a technical term from the source. To be safe, I can write "odds ratio (statistical, not wagering)". But the instruction says zero betting lines. I think mentioning "odds ratio" as a statistical measure from the paper is fine because it's not a betting line. However, to be extremely safe, I might refer to it as "logistic regression odds ratio" and not use the word "odds" alone. I'll include it because it's verbatim from the source [PAGE 98]. It's not a betting line.

Let's ensure no toy equations. All equations are from the paper or formal definitions.

Now let's produce the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds through seven linked hops, each constrained by the paper’s own reported statistics and methodological caveats.

Hop 1 — Constitution of the dominant group. The included sample comprises N = 233 respondents [PAGE 89, Table 1]. The marginal prevalences are: male \(\hat{p}_M = 191/233 = 0.820\); White \(\hat{p}_W = 162/233 = 0.695\); heterosexual \(\hat{p}_{Het} = 209/233 = 0.897\); younger than 35 years \(\hat{p}_{A<35} = (1+31+73+63)/233 = 168/233 \approx 0.721\) [PAGE 89–90]. The intersection—respondents possessing all four dominant features—is 33.0% of the sample, the largest single combination [PAGE 90]. This defines the reference class against which all gaps are measured.

Hop 2 — Pay disparity in professional sports. Restricting to the n = 126 professional-sports subset [PAGE 90], Table 3 reports management means of \(\$138.0\)K \(\pm 57.2\)K for males (n = 49) versus \(\$108.3\)K \(\pm 30.3\)K for females (n = 6) [PAGE 92]. The absolute gap is \(\Delta_{M,F}^{\text{mgmt}} = 29.7\)K, which the authors characterize as roughly \(\$30\)K or 27% relative to the female baseline [PAGE 92]. White management personnel average \(\$139.1\)K versus \(\$122.3\)K for racialized personnel, a \(\$16.8\)K or approximately 14% gap [PAGE 92]. Non-management gaps are smaller: \(\$15\)K (23%) by sex and \(\$5\)K (7%) by race [PAGE 92].

Hop 3 — Discrimination and satisfaction. Overall, 12.9% of respondents experienced discrimination in the prior 12 months [PAGE 94]. Conditional rates diverge sharply by sex: \(\hat{P}(D|F) = 0.382\) versus \(\hat{P}(D|M) = 0.081\), a likelihood ratio of approximately 4.72, described by the authors as “nearly five times” [PAGE 94]. Of 13 respondents citing sexual discrimination, 11 were female; of 13 citing racial/ethnic discrimination, 6 were racialized [PAGE 94]. On workplace experience, 36.3% of females “strongly agreed” they must work harder than others to be valued equally, compared with 9.8% of males [PAGE 96]. Females were also twice as likely to have considered leaving due to isolation or feeling unwelcome when combining “agree” and “strongly agree” (35.3% vs. 17.4%), and nearly four times as likely when restricted to “strongly agree” (14.7% vs. 3.8%) [PAGE 96].

Hop 4 — Statistical inference and power. For every comparison in Tables 3 and 4, the authors ran Mann–Whitney U and permutation tests at \(\alpha = 0.05\) with Bonferroni correction; all failed to reject \(H_0: \mu_{\text{dominant}} = \mu_{\text{non-dominant}}\) [PAGE 93]. The authors attribute this to underpowering, specifically the small counts of females and racialized individuals in senior roles (e.g., n = 6 females in management) [PAGE 93]. Thus non-significance here is a power artifact, not evidence of equivalence.

Hop 5 — Robustness bounding. Appendix B stress-tests the management salary gap under a uniform-distribution assumption across pay bands. The probability that all males fall in the bottom half and all females in the top half of every band is \((1/2)^{53} \approx 0\) [PAGE 107]. A conservative reversal threshold \(x^*\) is derived such that if males earned \(L_i + x\) and females \(U_i - x\) within each band \(i\), the female mean would exceed the male mean; the resulting probability remains approximately zero [PAGE 107]. The authors conclude it is “essentially a zero-probability event that female respondents earn more than male respondents, on average” [PAGE 107].

Hop 6 — Gray-zone audit. Three gray zones threaten the chain. First, measurement: sex is captured as “biological sex assigned at birth” while gender is captured separately [PAGE 108, Appendix C Q10–Q11], yet the analysis sometimes collapses these constructs [PAGE 89–90]. Second, race is collapsed into a binary White versus “racialized” category despite a highly heterogeneous subgroup pool (Black n = 4, Latinx n = 5, Middle Eastern n = 3, Mixed race n = 20) [PAGE 89, Table 1], which masks subgroup heterogeneity and inflates Type II error in stratified tests. Third, anonymity prevents attribution to specific teams or leagues [PAGE 89], so a single organization’s pay structure cannot be ruled out as a driver of the aggregate gap.

Hop 7 — Temporal and recall structure. The survey ran from April 12 to June 4, 2021 [PAGE 89], with an MIT Sloan Sports Analytics Conference tweet on May 24, 2021 generating the largest response spike [PAGE 89]. This creates a non-stationary response window: early and late respondents may differ in EDI salience. Retrospective items reference “the 12 months prior to COVID” versus conditions “since COVID began” [PAGE 102; Appendix C Q19, Q27], producing a bifurcated recall frame in which pandemic effects are confounded with pre-existing climate. These are multi-week traps: the survey’s eight-week field period and the pre/post-pandemic recall split mean that cross-sectional differences cannot be cleanly assigned to static demographic effects alone.

Gray-zone conclusion: The directional findings (male pay premium, female discrimination and exclusion risk) are descriptively robust and survive conservative distributional bounding for salaries, but the frequentist hypothesis tests are underpowered, the race binary is coarse, and non-response bias remains unquantified. The claim of a “zero-probability event” rests on a uniform pay-band assumption that is violated if within-band salaries are skewed or if the >$200K tail is mis-specified as a flat $250K midpoint [PAGE 107].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(\mathcal{R} = \{1,\dots,N\}\) with \(N = 233\) included respondents [PAGE 89]. Define indicator variables for respondent \(i\):

\[
S_i = \mathbb{1}\{\text{sex} = \text{Male}\}, \quad
R_i = \mathbb{1}\{\text{race} = \text{White}\}, \quad
H_i = \mathbb{1}\{\text{sexual orientation} = \text{Heterosexual}\}, \quad
A_i = \mathbb{1}\{\text{age} < 35\}.
\]

From Table 1 [PAGE 89–90]:

\[
\hat{p}_M = \frac{191}{233} = 0.820,\quad
\hat{p}_W = \frac{162}{233} = 0.695,\quad
\hat{p}_{Het} = \frac{209}{233} = 0.897,\quad
\hat{p}_{A<35} = \frac{168}{233} \approx 0.721.
\]

The joint dominant-group prevalence is reported as 33.0% [PAGE 90]. Salary \(Y\) is measured in thousands of USD ($,000’s) and collected in ordered buckets \(B_k\) of width \(\$25\)K, except the open-ended top bucket [PAGE 92; Appendix C Q8, PAGE 108]. The midpoint operator is \(\tilde{y}_k = \text{midpoint}(B_k)\), with the top bucket \(>\$200\)K imputed as \(\tilde{y} = 250\) ($,000’s) [PAGE 92]. For stratum \(g\) and job class \(j\):

\[
\bar{y}_{g,j} = \frac{1}{n_{g,j}} \sum_{i \in g \cap j} \tilde{y}_{k(i)}.
\]

Management salary gap by sex [PAGE 92, Table 3]:

\[
\Delta_{M,F}^{\text{mgmt}} = \bar{y}_{M,\text{mgmt}} - \bar{y}_{F,\text{mgmt}} = 138.0 - 108.3 = 29.7\;(\$,\text{000’s}),
\]

with relative gap referenced to the female baseline:

\[
r_{M,F}^{\text{mgmt}} = \frac{29.7}{108.3} \approx 0.274 \;\; (27\%).
\]

Management salary gap by race [PAGE 92, Table 3]:

\[
\Delta_{W,\text{rac}}^{\text{mgmt}} = 139.1 - 122.3 = 16.8\;(\$,\text{000’s}), \quad
r_{W,\text{rac}}^{\text{mgmt}} = \frac{16.8}{122.3} \approx 0.137 \;\; (14\%).
\]

Discrimination indicator \(D_i \in \{0,1\}\). Conditional prevalence [PAGE 94]:

\[
\hat{P}(D \mid S=0) = 0.382,\qquad
\hat{P}(D \mid S=1) = 0.081,\qquad
\text{likelihood ratio} \approx \frac{0.382}{0.081} \approx 4.72.
\]

Likert-scale items are ordinally coded \(L \in \{1,2,3,4,5\}\) mapped to Strongly Disagree through Strongly Agree [PAGE 108–110, Appendix C]. The “work harder” strong-agreement contrast [PAGE 96]:

\[
\hat{P}(L=5 \mid \text{Female}) = 0.363,\qquad
\hat{P}(L=5 \mid \text{Male}) = 0.098.
\]

Frequentist testing framework [PAGE 93]:

\[
H_0: \mu_{\text{dominant}} = \mu_{\text{non-dominant}}
\quad\text{vs.}\quad
H_1: \mu_{\text{non-dominant}} < \mu_{\text{dominant}},
\]

evaluated with Mann–Whitney U and permutation tests at \(\alpha = 0.05\), Bonferroni-corrected; all comparisons fail to reject \(H_0\) because of low power [PAGE 93].

Appendix B robustness operator [PAGE 107]: under uniform density within each pay band, the probability that all males occupy the lower half and all females the upper half of every band is

\[
P_{\text{uniform}} = \left(\frac{1}{2}\right)^{53} \approx 0.
\]

A conservative reversal threshold \(x^*\) solves for the largest \(x\) such that assigning males \(L_{k(i)} + x\) and females \(U_{k(i)} - x\) within each band \(i\) yields \(\bar{y}_F(x) > \bar{y}_M(x)\); the induced probability remains approximately zero [PAGE 107].

Logistic regression for “I have a voice in decision making” disagreement [PAGE 98]:

\[
\text{OR}_{\text{White vs. racialized}} = 3.2,\quad p = 0.02,\quad 95\%\,\text{CI} = [1.2,\;11.2],
\]

and after adjustment for sex:

\[
\text{OR}_{\text{adjusted}} = 3.0,\quad p = 0.01,\quad 95\%\,\text{CI} = [1.3,\;6.9].
\]

Verbatim source anchors:

[PAGE 92] “males earned more than females at both the management (on average approximately $30 K or 27 % more) and non-management levels (on average approximately $15 K or 23 % more).”

[PAGE 94] “Females experienced discrimination nearly five times more than males (38.2 % vs. 8.1 %).”

[PAGE 96] “36.3 % of females strongly agreed that they have to work harder than others to be valued equally, compared to 9.8 % of males.”

[PAGE 107] “it is essentially a zero-probability event that female respondents earn more than male respondents, on average.”

Breakdown/singularity regimes: (i) \(n_{F,\text{management}} = 6\) invalidates asymptotic normality of the Mann–Whitney U statistic [PAGE 93]; (ii) bucket width \(w = \$25\)K introduces quantization error bounded by \(w/2 = \$12.5\)K per observation; (iii) the \(>\$200\)K \(\mapsto\) \(\$250\)K imputation is a singularity if the true tail is heavy-tailed or group-specific [PAGE 92]; (iv) anonymity blocks cluster-robust standard errors by team or league [PAGE 89].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper positions itself as the first formal evaluation of equity, diversity, and inclusion (EDI) in sports analytics, but its intellectual lineage is deep [PAGE 87]. It descends from three literatures. First, the STEM workforce literature: Built In (2021) and Funk and Parker (2018) document persistent underrepresentation in STEM, which the authors import to define the analytic problem [PAGE 87–88]. Second, sports-specific discrimination studies: Kahn (1991) on professional sports discrimination, Ayala (2020), Cunningham, Wicker, and Walker (2021), and Mervosh and Caron (2019) on exclusion of marginalized athletes and coaches, and Benbow (2021) on the overwhelmingly White and male sports analytics community [PAGE 87]. Third, EDI definitional and benefits literature: Built In (2021) and University of Toronto (2019) supply the equity/diversity/inclusion definitions; Findler, Wind, and Barak (2007) and Wronski (2021) link EDI to well-being; Dixon-Fyle et al. (2020), Richard, Triana, and Li (2021), and Saxena (2014) link workforce diversity to performance; Quillian et al. (2017) provides the hiring-discrimination meta-analysis; Oud (2018) examines disability and workplace satisfaction among Canadian librarians [PAGE 88].

Comparative benchmarks anchor the paper’s historical claim that sports analytics is “critically lacking in diversity, even in comparison to STEM in general” [PAGE 103]. Funk and Parker (2018) report females at roughly 50% of STEM jobs versus 15% in this sample; Black employees hold roughly 9% of STEM jobs versus 1.7% here [PAGE 103]. The gender pay gap benchmark from Barrosa and Brown (2021)—females earning 84% of male median earnings—is contrasted with the 78% female-to-male management earnings ratio observed here [PAGE 103].

Intersectionality enters theoretically through Collins and Bilge (2020), used to explain why individuals experience multiple, non-additive forms of discrimination [PAGE 104]. The COVID-era discussion draws on Burns et al. (2021), Dunatchik et al. (2021), and Lyttelton, Zang, and Musick (2020) to speculate about remote-work gender inequities [PAGE 104].

The multi-week traps are structural rather than merely historical. The survey was live from April 12 to June 4, 2021—an eight-week window [PAGE 89]. The MIT Sloan Sports Analytics Conference tweet of May 24, 2021, reaching approximately 34.6K followers, generated the largest single influx of responses [PAGE 89]. This temporal concentration creates a non-stationary sample: respondents who answered before versus after the tweet may differ systematically in EDI awareness, network density, or workplace grievance salience. Because the study cannot track forwards beyond its initial email list [PAGE 89], the response curve is unobserved and cannot be reweighted.

A second temporal trap is the retrospective bifurcation built into the instrument. Items ask about “the 12 months prior to COVID” and separately about conditions “since COVID began” [PAGE 102; Appendix C Q19, Q20, Q21, Q25, Q26, Q27]. This forces respondents to reconstruct a pre-pandemic baseline from memory while simultaneously evaluating pandemic-era conditions, conflating trend with level shift. Any observed sex or race differences in “changes since COVID” [PAGE 102–103] are therefore not cleanly attributable to the pandemic; they may reflect differential recall, differential survivorship in the workforce during 2020–2021, or differential propensity to answer voluntary surveys during a crisis. The multi-week field period compounds this: external events occurring between April and June 2021 could differentially motivate response by demographic group, but the design captures none of it.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The findings can be modeled as a recursive theory-of-mind system with three interacting layers: crisis habit regression, counter-trap, and clock.

Crisis habit regression. Under institutional stress—such as public scrutiny following Benbow (2021) or internal pressure to demonstrate EDI commitment—dominant-group hiring managers regress to homophily. They replicate the young-White-male profile because it is cognitively cheap and socially legible within the existing network. This regression is visible in Figure 3: at every non-intern job level in professional sports, males comprise 85–100% of respondents and Whites comprise 66–85% [PAGE 92]. The intern level is the sole exception, showing racialized-majority representation (75%) and sex parity, but the cell sizes are tiny (four interns) [PAGE 92]. The regression therefore operates as a funnel: entry is porous, seniority is filtered.

Counter-trap. The paper’s recommendations contain built-in counter-traps. Recommendation 2 proposes salary transparency so females can negotiate more equitably [PAGE 105]. Transparency without enforcement is a counter-trap: an organization can publish median band data that obscures mean gaps, or can adjust band midpoints to shrink reported gaps while preserving structural advantage. Recommendation 3 proposes a dedicated EDI office [PAGE 105]; absent executive-level support, this office becomes compliance theater that logs incidents without altering workload, voice, or compensation distributions [PAGE 95–97]. The counter-trap is recursive because the dominant group models the marginalized group’s demands as satisfiable by symbolic concessions, while the marginalized group models the dominant group’s concessions as non-binding—a mutual misalignment of expectations.

Clock. The age-by-sex/race cross-tabulation (Figure 2) implements a demographic clock [PAGE 92]. As age increases, the proportion of female and racialized employees decreases; the 40+ category has fewer than 1% of professional-sports respondents [PAGE 90–92]. This is not a static pipeline but an aging-out process: marginalized analysts who enter at the intern or staff level do not accumulate into director and executive cohorts at the same rate as White male peers. The clock is recursive because low senior representation reduces visible role models, which increases anticipated exclusion among junior marginalized staff, which increases attrition, which further reduces senior representation.

Theory-of-mind failure. Females report satisfaction with compensation processes similar to males despite earning 27% less in management [PAGE 103]. This indicates adaptive preference formation: marginalized agents internalize the dominant group’s valuation model and fail to register the pay gap as unfair. Conversely, males underestimate female discrimination (8.1% experienced versus 38.2% for females) [PAGE 94], showing a failure to simulate the marginalized colleague’s epistemic state. The “voice” and “taken seriously” gaps in Figure 7 [PAGE 95–96] are the sharpest evidence: dominant-group members do not grant non-dominant members equal credibility in decision-making, so the recursive model of “whose input matters” never converges.

The full recursion is self-fulfilling: dominant-group members believe the field is meritocratic because they do not observe exclusion; marginalized members observe exclusion and either adapt their preferences downward or exit; exit reduces marginalized seniority; low seniority confirms the dominant group’s belief that the field naturally skews young, White, and male. Breaking this loop requires interrupting at least one link—pay transparency with enforcement, executive-backed EDI authority, or clock intervention (retention and promotion targets)—not merely more measurement.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. Data collection occurred via Microsoft Forms, anonymous and asynchronous, with no requirement to attend a physical venue, stadium, or event [PAGE 89]. Weather, stadium altitude, travel fatigue, and game-day conditions are therefore exogenous to the response mechanism. The partial derivative of response probability with respect to meteorological or physical-layer variables is identically zero by design; no weather veto is operative.

Biomechanical layer. Respondents are sports analytics personnel, not athletes. No biomechanical load, injury status, range-of-motion, or athletic performance metric appears as a covariate in the salary, discrimination, or satisfaction models [PAGE 87–111]. A biomechanical veto is inapplicable: there is no physiological mediator between demographic group and observed pay or climate outcomes in this dataset.

Adjudication of analytic vetoes. Although physical and biomechanical vetoes are null, four analytic vetoes remain live:

1. Non-response bias veto. Because the survey was voluntary [PAGE 89, 104], the sample may over-select individuals with strong EDI views or grievances. If dissatisfied females responded at a higher rate than satisfied females, \(\hat{P}(D|F) = 0.382\) is inflated relative to the population; if satisfied females under-responded, the gap shrinks. This veto cannot be ruled out from the anonymized data [PAGE 89].

2. Salary quantization veto. Midpoint imputation assumes uniform density within each $25K band [PAGE 92; Appendix B, PAGE 107]. If within-band salaries are right-skewed or differ by group, \(\bar{y}\) estimates are biased. The open top band mapped to $250K is a singularity: if top-band earners are predominantly male and earn substantially more than $250K, the male management mean is understated and the gap is understated; if top-band earners include high-earning females, the gap is overstated.

3. Anonymity veto. The research team cannot confirm which teams or leagues responded, nor identify non-respondents [PAGE 89]. A single organization with idiosyncratic pay practices could drive the aggregate management gap; the analysis cannot cluster by employer or perform fixed-effects decomposition.

4. Small-n breakdown. The Mann–Whitney U and permutation tests are underpowered at \(n_{F,\text{management}} = 6\) and \(n_{\text{racialized},\text{management}} = 15\) [PAGE 93]. Non-rejection of \(H_0\) is a power artifact, not equivalence. Appendix B’s conservative bounding [PAGE 107] neutralizes the uniform-distribution salary veto but cannot address non-response or anonymity vetoes.

Verdict: The directional claim (male pay premium in management; elevated female discrimination and exclusion risk) is robust to salary-distribution assumptions under conservative bounding but is not robust to non-response bias or single-org dominance. Statistical non-significance in the paper’s hypothesis tests is a veto of inferential certainty, not a veto of the descriptive pattern.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Exact payroll veto. Counterfactual: replace bucketed salary self-reports with exact, organization-verified payroll for all 27 professional sports organizations. Verifiable prediction: If the six females in management are concentrated at the upper edge of their pay bands while males are distributed across bands, the mean female management salary could exceed $138K. The reported gap of approximately $30K (27%) would narrow to under $5K or reverse sign; the Mann–Whitney U test would fail to reject equality at \(\alpha = 0.05\); and Appendix B’s claim of a zero-probability event under uniformity would be falsified because the uniform-density assumption would be empirically violated.

Scenario 2 — Mandatory census veto. Counterfactual: administer a mandatory, 100%-response workplace climate census to the full sports analytics employee population, eliminating voluntary self-selection. Verifiable prediction: The female discrimination rate would fall from 38.2% toward the male baseline of approximately 8–12%, because the voluntary sample over-selects EDI-motivated or aggrieved respondents. The “nearly five times” likelihood ratio would collapse below 2.0, and the strong-agree gap on “must work harder to be valued equally” (36.3% vs. 9.8%) would attenuate by at least half. Under this census, the odds ratio for disagreement on “I have a voice in decision making” would no longer be statistically significant at \(p < 0.05\).

Scenario 3 — Racial disaggregation veto. Counterfactual: replace the binary White versus racialized contrast with specific subgroups (Black, Latinx, East/Southeast Asian, South Asian, Middle Eastern, Mixed) and control for field of study (statistics/math versus kinesiology/sport science). Verifiable prediction: The omnibus White–racialized management gap of approximately $17K (14%) would decompose. East/Southeast Asian salaries would match or exceed White salaries, while Black and Latinx salaries would drive the negative contrast. After controlling for technical field, the race coefficient in a linear model for log salary would become statistically indistinguishable from zero, falsifying the binary race narrative and revealing field-of-science segregation, not race per se, as the primary salary stratifier.
</RLVR_COUNTERFACTUAL_VETOES>