---
source: "2017 - From Sports to Science Using Basketball Analytics to Broaden the Appeal of Math and Science Among Youth - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2017"
pages: 15
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3590
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper from the MIT Sloan Sports Analytics Conference 2017. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided a source document. It's 15 pages (though the text seems to end around page 14 based on the page markers, but I should treat it as the full document). The paper is about using basketball analytics to broaden STEM appeal among youth.

Let me carefully note page citations. The text has page markers like "2017 Research Papers Competition Presented by: 1", "2", etc. up to 14. I need to cite exact [PAGE N] markers.

Let me map content to pages:
- Page 1: Abstract, Introduction start
- Page 2: Introduction continued (out of school STEM, robotics clubs, participation stats)
- Page 3: Intro continued (NBA analytics, tracking data, heat maps, Goldsberry), Methods Overview
- Page 4: Methods continued (evaluation, survey, outcomes, statistical analysis)
- Page 5: Results Outcome 1, demographics table
- Page 6: Outcome 2, Training concept questions, Table 2 reference
- Page 7: Outcome 2 continued, Q6 Q8 Q12 Q9 Q15, Figure 3 reference, combined metric p-value 5.8187e-13, Cronbach alpha 0.800
- Page 8: Figure 4 reference
- Page 9: Outcome 3, Table 3 reference, Q4 Q7 Q13 Q14, student quote
- Page 10: Combined STEM metric p-value 1.4326e-10, Cronbach alpha 0.816, Figure 6 reference
- Page 11: Summary, interest development stages (Maltese et al., 2014)
- Page 12: Discussion
- Page 13: Discussion continued, Conclusion start
- Page 14: Conclusion continued, References start
- Page 15: References continued (though text shows references up to page 14/15)

Wait, looking at the text, the last page marker shown is "2017 Research Papers Competition Presented by: 14" and then references. But the user says PAGES: 15. I should cite pages based on what's visible.

Important constraints:
- No betting lines whatsoever.
- No toy equations. I must use formal LaTeX. I should not invent fake ratios like Force/Fatigue. I can use actual equations from the paper (Wilcoxon signed-rank test, Cronbach's alpha, shooting percentage, efficiency metric).
- I need verbatim quotes with page citations.
- >= 1000 words total across sections.
- THINK_TRACE >= 400 words.

Let me structure the response:

<THINK_TRACE>
Deep multi-hop derivation:
- The paper's causal chain: basketball interest -> data collection -> heat maps -> self-efficacy in basketball -> STEM interest/awareness -> potential STEM career pipeline.
- Multi-hop: non-self-selected sample (outcome 1) is crucial because it avoids selection bias that plagues robotics clubs (citing page 2 about self-selection). This is a gray zone: the paper claims causality from a single-session clinic (pre/post design) but lacks longitudinal follow-up. The interest development model (Maltese et al., 2014, page 11) has four stages; the clinic only addresses situational interest.
- Gray-zone audit: The paper uses Wilcoxon signed-rank (non-parametric) because Likert data is ordinal, not interval (page 4). This is methodologically sound but the effect sizes aren't reported, only p-values. With n=98 matched pairs (page 5), small shifts can be significant. Cronbach's alpha 0.800 and 0.816 (pages 7, 10) indicate internal consistency but not validity.
- Breakdown regime: The intervention is one hour (page 11 mentions "hourlong shooting analytics clinic"), so maintenance of interest beyond situational stage is untested. Fatigue was noted as experimental error by players (page 12), which is a data quality threat.
- No betting content. All math is formal: p-values, alpha, Likert scales.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX:
- Shooting percentage: \( P_{\text{make}}(x,y) = \frac{N_{\text{makes}}(x,y)}{N_{\text{attempts}}(x,y)} \), unitless probability [0,1], per location (x,y).
- Efficiency metric: \( E(x,y) = P_{\text{make}}(x,y) \cdot V(x,y) \), where \( V(x,y) \in \{2,3\} \) points, units points per shot [0,3].
- Wilcoxon signed-rank test statistic: \( W = \sum_{i: D_i > 0} R_i \) or signed ranks, null hypothesis of zero median difference, ordinal Likert scale data (1-5), non-parametric, no normality assumption.
- Cronbach's alpha: \( \alpha = \frac{K}{K-1} \left( 1 - \frac{\sum_{i=1}^K \sigma_{Y_i}^2}{\sigma_X^2} \right) \), where K items, acceptable 0.7-0.8, good 0.8-0.9 (page 4 citing George & Mallery, 2003).
- Reported p-values: basketball self-efficacy combined metric \( p = 5.8187 \times 10^{-13} \), alpha = 0.800 (page 7). STEM interest combined metric \( p = 1.4326 \times 10^{-10} \), alpha = 0.816 (page 10). Note: text says Wilcoxon rank sum test on page 10 but earlier says signed-rank; likely a typo in source.
- Sample: N=98 matched pre/post tests (page 5). Demographics: 35% female, 53% African American or Latino, 62% urban high school districts >50% economically disadvantaged (page 5).
- Breakdown/singularity: Single-session, no longitudinal tracking; ceiling effects on Q15 (>85% pretest said analytics important, page 7); Q9 minimal change due to high baseline (page 7). Fatigue as experimental error from 140 shots/session (page 12).

Citations: [PAGE 1]...[PAGE 14] etc.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage: From Franks et al. 2015 (Counterpoints), Goldsberry 2012 (Courtvision), Drazan et al. 2016 (Harmonious Integration), Eglash & Garvey 2014 (Basins of Attraction). The paper builds on NBA player tracking (SportsVUE/SportVU) but democratizes via pen-and-paper shooting percentage and heat maps.
Multi-week traps: Robotics clubs suffer self-selection (page 2, citing Karp & Schneider 2011, Gottfried & Williams 2013). The paper attempts to solve this by embedding STEM in basketball. However, the multi-week trap is that without sustained exposure (weeks/months), situational interest decays (Maltese et al. 2014, page 11). The pipeline from clinic to STEM career is speculative; no multi-week data is presented.
Historical trajectory: Informal STEM learning (Bell et al. 2009, page 2) -> robotics as model (Melchior et al. 2005, page 2) -> sports analytics as alternative venue for non-self-selected youth.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: When a youth athlete misses shots, do they revert to "just practice more" (habit) or use heat map data (analytics)? The clinic aims to shift the crisis response from generic effort to spatial diagnostics.
Counter-trap: Coaches might dismiss data ("can't argue with that data" is the positive version; negative version is distrust of analytics). Players might see analytics as extra work, not training.
Clock: The intervention is one session; the "clock" is the decay of situational interest. Without reinforcement over weeks, the pre/post shift may regress to baseline. The theory of mind: participants model coaches as authority figures who validate data; if coach endorsement wanes, effect decays.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Basketball shooting is biomechanical; fatigue degrades form over 140 shots (page 12 players complained fatigue introduced "experimental error"). Veto: if shooter fatigue > threshold, heat map validity collapses because location-specific percentages conflate skill with fatigue.
Biomechanical layer: Shooting mechanics vary by location (mid-range vs corner 3). Heat maps aggregate makes/attempts but not release angle, arc, or defender presence (no tracking data in youth setting).
Weather layer: Indoor vs outdoor courts, wind (if outdoor), lighting. Not discussed in paper but relevant veto: outdoor clinic with wind invalidates spatial percentage maps.
Adjudication: The paper acknowledges fatigue as error (page 12) but does not model it. No weather controls mentioned. Physical veto is active: fatigue confounds the independent variable (location) with the dependent variable (make percentage).

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios:
1. Veto: If a replication collects data only on made shots (not attempts) per location, then \( P_{\text{make}} \) is undefined because denominator is missing. Prediction: heat maps will show 100% at all attempted locations, producing false proficiency and zero diagnostic value. Verifiable by checking raw data sheets for attempt counts.
2. Veto: If the same 14 locations are used for all players regardless of position/age, then a 10-year-old and a 16-year-old are compared on identical 3-point distances. Prediction: younger players will show artificially low efficiency at all locations beyond 15 feet, causing the efficiency metric \( E \) to collapse toward 0 and mislabeling normal developmental limitation as skill weakness. Verifiable by stratifying by age/height.
3. Veto: If the Wilcoxon signed-rank test is applied to Likert data treated as interval (despite the paper's correct ordinal justification) but with multiple comparisons uncorrected across 15 questions, family-wise error rate inflates. Prediction: at least one of the 15 "significant" shifts is a false positive (expected ~0.75 false positives at alpha=0.05 without correction). Verifiable by applying Bonferroni or Holm-Bonferroni correction to the reported p-values.
4. Bonus: If no matched pre/post pairs are used (independent samples), the Wilcoxon signed-rank assumption is violated. Prediction: p-values are invalid. Verifiable by checking for 98 matched pairs (paper claims matched, page 5).

I need exactly 3, I'll provide 3 clear ones plus maybe note the matched pairs as part of one.

Wait, the user wants "3 verifiable RLVR veto scenarios + predictions." I'll provide 3.

Word count: Need >= 1000 words total across all sections. THINK_TRACE >= 400 words. Let me make sure each section is substantial.

Let me draft carefully, ensuring no betting lines. The word "odds" appears in the source? Not really, but I won't mention it. No spreads, totals, moneylines.

Page citations: I need to use [PAGE N] format. Let me assign page numbers based on the markers in the text. The text shows markers like "2017 Research Papers Competition Presented by: 1" etc. I'll refer to these as [PAGE 1] through [PAGE 14]. Since the user says PAGES: 15, but I only see up to page 14 in the text provided, I'll cite up to [PAGE 14] and note references continue. Actually the last page marker is 14, but references go to page 14/15. I'll cite [PAGE 14] for references.

Let me write the content now. I need to be verbose enough to hit 1000 words.

THINK_TRACE content (>=400 words):
I'll write about the causal inference, multi-hop steps, gray zones, lack of longitudinal data, fatigue confound, ordinal data handling, p-value fishing without effect sizes, etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations.

RETROCAUSAL_GENEALOGY: Historical lineage, multi-week traps.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression, counter-trap, clock.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Total word count check:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS: ~300 words
- RETROCAUSAL: ~250 words
- RECURSIVE: ~250 words
- CROSS_LAYER: ~200 words
- RLVR: ~250 words
Total: ~1750 words. Good.

Let me ensure LaTeX is proper and no fake ratios. I'll cite pages for quotes.

Verbatim quotes I can use:
- Page 2: "Voluntary extracurricular programs tend to have a strong self-selection of students."
- Page 5: "Over 50% of students reported that they did not enjoy using STEM outside of school."
- Page 5: "over 70% of students reported that they wanted to play basketball in college."
- Page 7: "p value of 5.8187e-13"
- Page 10: "P value of 1.4326e-10"
- Page 11: "hourlong shooting analytics clinic"
- Page 12: "taking 140 shots in one session introduced fatigue as 'experimental error'"
- Page 7: "can't argue with that data"
- Page 1: "shallow connection" regarding parabolic motion
- Page 4: "we cannot assume our data is normally distributed or that it has an interval scale"

I'll weave these in.

Now I'll produce the final output with exactly the required XML sections.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s core inference chain is multi-hop and rests on a single-session pre/post design. Hop 1: because basketball participation is broadly popular among underrepresented youth while STEM out-of-school programs suffer from self-selection bias [PAGE 2], embedding analytics inside a basketball clinic captures a non-self-selected sample [PAGE 5]. Hop 2: data collection (10 shots at 14 locations) feeds personalized heat maps that convert ordinal shooting outcomes into spatial diagnostic feedback [PAGE 3]. Hop 3: this feedback raises basketball self-efficacy, measured by 15 Likert-style questions analyzed with Wilcoxon signed-rank tests because the data are ordinal and normality/interval assumptions cannot be made [PAGE 4]. Hop 4: elevated basketball self-efficacy generalizes into STEM interest and awareness, producing a statistically significant combined-metric shift (p = 1.4326e-10) [PAGE 10]. The gray-zone problem is that each hop is supported only by cross-sectional pre/post movement within one hour [PAGE 11], not by longitudinal tracking through Maltese et al.’s four-stage interest model [PAGE 11]. Therefore the paper demonstrates situational interest, not maintained or individual interest.

A second gray zone is statistical: the authors correctly avoid parametric tests on Likert data [PAGE 4], yet they report p-values without effect sizes for individual items. With N = 98 matched pairs [PAGE 5], even trivial distributional shifts can yield p < 0.05. Cronbach’s alpha values of 0.800 and 0.816 establish internal consistency within the basketball-training and STEM constructs [PAGE 7], [PAGE 10], but internal consistency is not construct validity. The clinic is explicitly described as “hourlong” [PAGE 11], which creates a breakdown regime: interest decay is expected after the situational stage unless reinforced over weeks or months, and no multi-week data exist. A physical confound is also admitted by participants themselves: “taking 140 shots in one session introduced fatigue as ‘experimental error’ to the collected data” [PAGE 12]. Fatigue conflates location-specific shooting percentage with shooter exhaustion, threatening the validity of the heat maps as pure skill diagnostics. Finally, ceiling effects limit further gains: Q15 showed >85% pre-test endorsement that analytics are important to professionals [PAGE 7], and Q9 had high baseline positivity, leaving little room for improvement [PAGE 7]. None of these issues invalidate the premise, but they delimit the causal claim to short-term attitude shifts within a single exposure, not to durable STEM pipeline entry.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper defines two heat-map outputs. First, location-specific shooting percentage is
\[
P_{\text{make}}(x,y) = \frac{N_{\text{makes}}(x,y)}{N_{\text{attempts}}(x,y)}, \quad P_{\text{make}} \in [0,1],
\]
a unitless probability estimated per court location \((x,y)\) [PAGE 3]. Second, the point-efficiency metric weights percentage by shot value:
\[
E(x,y) = P_{\text{make}}(x,y) \cdot V(x,y), \quad V(x,y) \in \{2,3\}\ \text{points}, \quad E(x,y) \in [0,3]\ \text{points per shot},
\]
where \(x,y\) denote spatial coordinates relative to the basket [PAGE 3].

Inference uses the Wilcoxon signed-rank test on ordinal 5-point Likert responses \(D_i = \text{post}_i - \text{pre}_i\). Because the authors state “we cannot assume our data is normally distributed or that it has an interval scale” [PAGE 4], the signed-rank statistic
\[
W = \sum_{i: D_i > 0} R_i - \sum_{i: D_i < 0} R_i
\]
operates on ranks of signed differences, not raw interval values. Reliability is quantified with Cronbach’s alpha:
\[
\alpha = \frac{K}{K-1} \left( 1 - \frac{\sum_{j=1}^{K} \sigma_{Y_j}^2}{\sigma_X^2} \right),
\]
with \(K\) items; values 0.7–0.8 are acceptable and 0.8–0.9 good [PAGE 4, citing George & Mallery, 2003]. Reported combined-metric results are \(p = 5.8187 \times 10^{-13}\), \(\alpha = 0.800\) for basketball self-efficacy [PAGE 7], and \(p = 1.4326 \times 10^{-10}\), \(\alpha = 0.816\) for STEM interest [PAGE 10]. The text on page 10 says “Wilcoxon rank sum test” for the STEM metric, which appears to be a source inconsistency given the paired pre/post design elsewhere [PAGE 4].

Sample and demographic parameters: \(N = 98\) matched pre/post tests [PAGE 5]; 35% female; 53% African American or Latino; 62% from urban high school districts serving over 50% economically disadvantaged students [PAGE 5]. Drill structure: groups of 4–5 per basket, 10 shots at 14 locations, rotating rebounding/passing/shooting/data-entry roles to limit fatigue [PAGE 3]. Breakdown and singularity regimes: (1) one-hour exposure means no maintenance beyond situational interest [PAGE 11]; (2) fatigue after 140 shots/session injects error into location-level percentages [PAGE 12]; (3) ceiling effects on Q15 (>85% pre-test importance of analytics) and Q9 cap measurable gains [PAGE 7]; (4) no multiple-comparison correction is reported across 15 Likert items, inflating family-wise error risk [PAGE 6]–[PAGE 9].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage traces from advanced NBA analytics to grassroots STEM outreach. It cites Goldsberry’s Courtvision and the Franks et al. (2015) defensive metrics work as examples of graphical analytics that penetrated media and team decision-making [PAGE 3], [PAGE 14]. However, the authors explicitly reject the “shallow connection” of deriving parabolic projectile motion in favor of applied shooting analytics tied to performance [PAGE 1]. The intellectual predecessors include Drazan, Cooke, & Eglash (2016) on harmonious integration of STEM and generative justice, and Eglash & Garvey (2014) on basins of attraction [PAGE 1], [PAGE 14], suggesting a genealogy in which cultural-context STEM (e.g., cornrow curves, skateboarding physics) is repurposed through basketball shot charts.

The critical multi-week trap is self-selection. The paper notes that voluntary robotics and LEGO programs attract only students already interested in STEM [PAGE 2], citing Karp & Schneider (2011) and Gottfried & Williams (2013) [PAGE 2], [PAGE 14]. Basketball is proposed as the Trojan horse because “participation in sports is far more popular among underrepresented students” [PAGE 2]. Yet the trap re-emerges temporally: the clinic produces situational interest but offers no mechanism for maintained situational interest, emerging identity-based interest, or individual intrinsic interest [PAGE 11, citing Maltese et al., 2014]. Without recurring exposure across weeks or months, the pre/post attitude shift may regress. The paper’s own discussion concedes this is “the just the first step” and calls for longer-term exposure [PAGE 11]. Thus the historical arc moves from elite NBA tracking data to accessible pen-and-paper heat maps, but the temporal arc from one clinic to a STEM career remains unsubstantiated and is the primary multi-week vulnerability.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind concerns how a youth athlete updates their self-model when facing a shooting crisis (a cold streak or missed shot) after the clinic. Pre-treatment, the crisis habit regression is generic: “I need to work on my footwork and form” [PAGE 7]. Post-treatment, the counter-trap is spatial specificity: “I need to work on mid range and 3 pointers” [PAGE 7]. The athlete models the coach as a data-validated authority; one memorable coach-player exchange produced “can’t argue with that data” regarding a power forward shooting corner threes [PAGE 12]. This indicates successful transfer of epistemic authority from coach intuition to personal heat-map evidence.

The clock layer is decisive: the intervention is one hour [PAGE 11]. If the athlete does not encounter reinforcing heat-map feedback in subsequent practices, the recursive loop collapses. The athlete regresses to the pre-treatment habit of attributing variance to effort or form rather than to location-specific efficiency \(E(x,y)\). A counter-trap to the counter-trap is coach skepticism: if a coach dismisses analytics, the athlete’s new self-model lacks external validation and decays faster. The theory-of-mind nesting is therefore athlete → model of coach → model of data → model of self as analyst. Without repeated clock cycles (weekly clinics, updated heat maps), the fixed point of this recursion is the pre-treatment default: basketball improvement is physical repetition, not analytical diagnosis.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The drill requires 140 shots per session across 14 locations [PAGE 3], [PAGE 12]. Participants explicitly identified fatigue as “experimental error” [PAGE 12]. This is an active veto: if shooter fatigue degrades release mechanics late in the session, location-specific \(P_{\text{make}}(x,y)\) conflates skill with exhaustion, and the heat map no longer isolates spatial shooting proficiency.

Biomechanical layer: Youth players vary in height, strength, and release mechanics. The fixed 14-location pattern does not adjust for developmental differences; a younger player’s 3-point attempt may be near their maximum range while an older player’s is a comfortable set shot [PAGE 3]. Because the efficiency metric \(E(x,y)\) uses a uniform point value \(V(x,y) \in \{2,3\}\) without biomechanical normalization, the heat map may label normal developmental limitation as a skill weakness.

Weather layer: Not discussed in the source, but applicable as an external veto. Outdoor clinics introduce wind, lighting variance, and surface inconsistency that violate the stationarity assumption implicit in comparing percentages across locations [PAGE 3]. Indoor courts control these variables, but the paper does not specify venue constraints.

Adjudication: The physical veto (fatigue) is the most severe because it is acknowledged in the text [PAGE 12] yet unmodeled. No randomization of location order, rest intervals, or fatigue covariates is reported. Therefore the heat-map outputs are conditionally valid only under low-fatigue, short-duration shooting blocks; under high-shot-volume conditions, the spatial diagnostic claim breaks down.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Missing attempt denominators. If a replication records only made baskets per location and omits \(N_{\text{attempts}}(x,y)\), then \(P_{\text{make}}(x,y)\) is undefined because the denominator is zero or missing. Prediction: every attempted location will be rendered as 100% made, collapsing spatial variance and producing false proficiency maps with zero diagnostic value. Verifiable by auditing raw data-entry sheets for attempt counts alongside makes [PAGE 3].

Veto Scenario 2 — Age/position-invariant locations. If all players, regardless of age or position, shoot from the identical 14 locations, then younger or shorter players face \(V(x,y)=3\)-point distances near or beyond their physiological range. Prediction: the efficiency metric \(E(x,y)\) will artificially approach zero for younger cohorts at long locations, causing the model to misclassify developmental range limits as shooting deficiencies rather than age-appropriate constraints. Verifiable by stratifying heat-map outputs by age, height, or position and testing for systematic location-by-age interaction effects [PAGE 3], [PAGE 5].

Veto Scenario 3 — Uncorrected multiple comparisons across Likert items. The paper tests 15 individual Likert questions plus two combined metrics without reporting Bonferroni, Holm-Bonferroni, or false-discovery-rate correction [PAGE 6]–[PAGE 9]. Prediction: at least one of the nominally significant item-level shifts (expected \(\approx 0.75\) false positives at \(\alpha = 0.05\) across 15 tests) is a Type I error, and the reported combined-metric \(p\)-values may capitalize on chance. Verifiable by re-computing adjusted \(p\)-values from the reported item-level Wilcoxon statistics and confirming whether significance survives family-wise error control [PAGE 4], [PAGE 6]–[PAGE 9].
</RLVR_COUNTERFACTUAL_VETOES>