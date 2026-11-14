---
source: "2026 - Long-Term Effects of NASM-OPT Periodized Training on Lower-Limb Strength, Explosive Power, and Stretch-Shortening Cycle Function in Adolesce - Mo et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Sports Science and Medicine/2026"
pages: 23
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5785
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about NASM-OPT periodized training in adolescent athletes. I need to follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, this is a sports science paper about adolescent training. The user is asking me to analyze it as if I'm a "GSE + GSI Frontier Reasoning Foundry." This seems like a meta-cognitive analysis framework applied to scientific literature, not actual sports betting. The invariant about betting lines means I shouldn't invent gambling content. The paper itself doesn't contain betting lines, so that's fine.

I need to:
- Analyze the source text carefully
- Cite page markers [PAGE N] - since the text has page numbers visible (339-349), I can cite those.
- Extract formal equations from the paper: PSAP, EUR, Volume Load
- Do deep multi-hop derivation
- Cover all XML sections with sufficient word count (total >= 1000 words, THINK_TRACE >= 400 words)

Let me map out the paper content:

Paper: Mo et al. (2026), JSSM 25, 339-349.
Study: RCT, 42 adolescent athletes (20M, 22F), age 14.4 ± 1.2 years.
Groups: OPT (n=21) vs CON (n=21).
Duration: 26 weeks, 2x/week.
NASM-OPT phases: Stability (w1-4), Strength (w5-22: endurance/hypertrophy/maximal), Power (w23-26).
CON: Traditional linear periodization.
Outcomes: 1RM squat, CMJ, SJ, PSAP, EUR.
Results: OPT better in 1RM (133.1 vs 119.2 kg), CMJ (47.4 vs 39.8 cm), PSAP (10.63% vs 6.07%), EUR (1.11 vs 1.06). CON plateaued. Volume load: CON ~1.85x higher total volume (2,393,472 vs 1,294,494 kg).

Equations from text:
- PSAP = (CMJ - SJ) × SJ⁻¹ × 100%  [Note: text says "(CMJ - SJ) × SJ - 1 × 100%" but this is likely a formatting artifact; standard PSAP = ((CMJ - SJ)/SJ) × 100. I need to be careful about verbatim quotes vs formal correction. The text literally shows: PSAP = (CMJ - SJ) × SJ - 1 × 100%. I should quote verbatim but maybe note dimensional interpretation. Actually looking at source: "PSAP = (CMJ - SJ) × SJ - 1 × 100% EUR = CMJ × SJ - 1". This looks like OCR/formatting errors where division got lost. Standard formula: PSAP = ((CMJ - SJ) / SJ) * 100%, EUR = CMJ / SJ. I will state formal LaTeX with proper operators and cite the page where the garbled text appears, noting the likely intended dimensional form. The invariant says "ZERO TOY EQUATIONS: Never invent fake ratios... State formal LaTeX equations..." So I should present the formally correct version but acknowledge the source text's typography.]

Actually, I need to be careful. The text says:
"PSAP = (CMJ - SJ) × SJ - 1 × 100% EUR = CMJ × SJ - 1"
This is almost certainly a PDF extraction issue where fraction bars became multiplication or minus signs. I should present the formal LaTeX:
PSAP = ((h_CMJ - h_SJ) / h_SJ) × 100 [%]
EUR = h_CMJ / h_SJ [dimensionless]
Volume Load = 1RM × (%1RM) × repetitions [kg]
And cite [PAGE 341] or wherever it appears.

Let me check page numbers:
- Page 339: Title, abstract
- Page 340: Introduction, Figure 1
- Page 341: Methods, Table 1, training program structure, Table 2
- Page 342: Test program, equations, data analysis
- Page 343: Results, Table 3, Table 4, Table 5
- Page 344: Table 6 continued, PSAP/EUR discussion
- Page 345: Discussion
- Page 346: Discussion continued
- Page 347: Limitations, Implications
- Page 348: References
- Page 349: Key points, Author biography

Wait, looking at the text markers:
- "340" appears after introduction text.
- "341" appears before Table 1.
- "342" appears after Table 2.
- "343" appears after Table 4 / before Table 5? Actually "Mo et al. 343" then Table 5.
- "344" appears before Table 6? Actually Table 6 is on page 344.
- "345" appears after Figure 3.
- "346" appears in discussion.
- "347" appears in limitations.
- "348" appears in references.
- "349" appears at end.

Equations are on page 342 (under Test program, Vertical jump tests).
Volume Load equation is also page 342.

Now for the XML sections:

1. THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
   - Analyze causal chain: NASM-OPT sequencing -> stability -> strength -> power -> SSC indices.
   - Gray zones: PSAP/EUR are indirect ratios; squat jump compliance; bone age vs PHV; volume non-equivalence confounds model comparison; sex pooling; single sport school; short 26-week macrocycle for adolescents.
   - Multi-hop: Volume Load = f(1RM, %1RM, reps). OPT lower volume but higher output -> efficiency. But because volume wasn't equated, cannot isolate periodization architecture from dose. That's a major confound.
   - The EUR change: 1.07 to 1.11 is tiny (0.04). SD 0.03 to 0.01. Is this biologically meaningful or just statistical significance from low variance? Need to audit.
   - PSAP 10.63 ± 0.94 post vs baseline 6.21 ± 2.56. Huge drop in SD post? Suspicious. Maybe ceiling effect or measurement artifact.
   - CON group PSAP decreased from 7.40 to 6.07 (p=0.12), EUR 1.07 to 1.06 (p=0.08). Both trending down, nonsignificant.
   - CON 1RM: baseline 94.0 -> post 119.2 (+26.8%). OPT: 99.0 -> 133.1 (+34.4%). Both large.
   - CON actually had higher 1RM at 10 weeks (107.24 vs 103.95) and 16 weeks (116.43 vs 113.19), but OPT overtook at 22 weeks (132.76 vs 118.71). This temporal crossover is critical.
   - Gray zone: The claim "OPT maintained improvements whereas CON plateaued" is supported by phase data but CON was ahead mid-cycle. This suggests timing of peak matters.
   - Sample size n=21 per group, power for interactions? Not reported.
   - Multiple comparisons across 6 time points x 5 outcomes without adjustment for family-wise error across outcomes? Bonferroni only post-hoc within ANOVA.

2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
   - PSAP equation
   - EUR equation
   - Volume Load equation
   - Repeated-measures ANOVA model: Y_{ijk} = μ + G_i + T_j + (G×T)_{ij} + ε_{ijk}
   - Cohen's d / ES interpretation thresholds.
   - Shapiro-Wilk, Mauchly's, Greenhouse-Geisser.
   - Units: kg, cm, %, dimensionless, weeks, kg·reps (volume load).
   - Page citations: [PAGE 342] for equations, [PAGE 343] for Table 5, etc.
   - Breakdown of exact values from tables.

3. RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
   - Lineage: Selye GAS (1976), Stone et al. (2007), Bompa & Buzzichelli (2019), Cunanan et al. (2018), NASM OPT model.
   - McGuigan et al. (2006) EUR reference ~1.1. Bobbert et al. (1996) CMJ vs SJ.
   - LTAD model, Lloyd & Oliver (2012), Faigenbaum & Myer (2010).
   - Multi-week traps: 26 weeks is short for adolescent longitudinal development; PHV timing unmeasured means intervention could coincide with growth spurts confounding adaptation; bone age range 12.8-16.2 spans pre-PHV to post-PHV, huge heterogeneity; phase transitions at weeks 4/22/26 might not align with individual biological windows.
   - Reference thresholds PSAP 8-12%, EUR ~1.1 from McGuigan & Suchomel—applied to adolescents though originally adult/elite? Gray zone.

4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
   - "Crisis habit regression": Coaches under pressure may revert to high-load linear models (CON) when early gains appear (CON ahead at weeks 10-16), abandoning periodized stability work.
   - Counter-trap: OPT's delayed divergence means if competition is at week 16, CON might be preferred; if at week 26+, OPT wins. The "clock" is the competition calendar vs macrocycle end.
   - Recursive ToM: Coach anticipates athlete's fatigue; athlete anticipates coach's program change; if coach switches models mid-cycle based on week-16 data, they create a new confound and violate periodization fidelity.
   - Crisis: If athlete plateaus at week 16 (CON pattern), regression to "more volume/intensity" habit increases injury risk rather than switching to OPT-style variation.

5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
   - Physical veto: Squat depth criterion (proximal femoral head aligned with patella) visual inspection only—inter-rater reliability not reported. Veto if depth invalid.
   - Biomechanical: SJ no-dip instruction verified visually only; subvisual unweighting ≤2% body mass (Agar-Newman 2025) deemed negligible, but if >2%, PSAP/EUR biased. Veto if force plate not used.
   - Weather: Indoor training/school setting; no environmental variation reported. However, Guangdong climate—humidity/temperature not controlled; could affect warm-up and jump performance. No weather data in methods. Veto if seasonal confound exists across 26 weeks (Nov 2025-Feb 2026 received/accepted dates, but intervention timing not specified relative to seasons).
   - Biological: Bone age vs PHV/PWV not measured. Maturity status is a veto for generalizability across adolescent sub-stages.

6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
   Scenario 1: Volume-equated rematch. If total volume load is equated between OPT and CON, does OPT still win? Prediction: Between-group effect size for 1RM drops from large (ES ~4.04 within OPT, but between-group difference at post: 133.1 vs 119.2) to small/non-significant because OPT advantage partly driven by exercise sequencing and PAP rather than pure dose; with equated volume, CON's higher intensity may match OPT strength gains but not SSC indices.
   Scenario 2: Direct neuromuscular measurement veto. If EMG/force plate replaces PSAP/EUR as primary outcome, does the SSC claim hold? Prediction: PSAP/EUR changes may not replicate as direct motor unit recruitment or elastic energy changes; the EUR change of +0.04 may be below measurement error of jump mats, leading to null mechanistic finding.
   Scenario 3: Biological maturity stratification veto. If re-randomized and stratified by PHV offset (years from peak height velocity) rather than bone age quartile, does OPT effect persist? Prediction: Early-PHV athletes may not tolerate OPT's power phase or may respond differently; the observed OPT advantage may be confined to late-PHV or post-PHV subgroup, causing subgroup × model interaction that nullifies main effect in pooled analysis.

Word count: Need >= 1000 total across sections. THINK_TRACE alone >= 400. I'll write substantial content in each.

Citations: Use [PAGE 342] style. The source text has page numbers embedded. I'll reference exact pages where content appears.

Betting lines invariant: No mention of odds, spreads, etc. This paper doesn't have any, so easy to avoid.

Toy equations invariant: I will not invent Force/Fatigue ratios. I'll use the actual equations from the paper but formalized in LaTeX.

Let me draft carefully.

THINK_TRACE: I need >= 400 words. Let's aim for ~500-600.
Source Operators: ~250-300 words.
Retrocausal: ~200 words.
Recursive ToM: ~200 words.
Cross-layer veto: ~200 words.
RLVR: ~200 words.
Total should exceed 1000.

Let me write.

---

THINK_TRACE:

Deep multi-hop derivation:
The study's central causal claim is that NASM-OPT's sequential architecture (stability → strength → power) yields superior neuromuscular efficiency compared with traditional linear periodization, despite ~1.85× lower cumulative volume load. This claim rests on a chain of inferences. First, volume load is defined as 1RM × %1RM × repetitions, yielding units of kg·reps per phase. The CON group accumulated 2,393,472 kg versus OPT's 1,294,494 kg across the macrocycle [PAGE 343], yet OPT achieved larger post-intervention gains in squat 1RM (133.1 ± 21.4 vs 119.2 ± 18.0 kg) and CMJ (47.4 ± 5.8 vs 39.8 ± 4.0 cm) [PAGE 339 abstract; PAGE 343 Table 5]. The efficiency inference—that adaptation per unit volume is higher in OPT—requires assuming volume load is the appropriate dose metric. However, the authors explicitly state total training volume differed intentionally due to programming philosophy [PAGE 341], which introduces a dose confound: one cannot isolate periodization architecture from absolute mechanical dose.

Gray-zone audit: The temporal pattern reveals a mid-cycle inversion. At week 10, CON led OPT in 1RM (107.24 vs 103.95 kg) and at week 16 (116.43 vs 113.19 kg), but by week 22 OPT overtook (132.76 vs 118.71 kg) [PAGE 344 Table 6]. Thus the claim that CON plateaued while OPT improved continuously is phase-contingent; if the competitive clock stopped at week 16, traditional periodization would appear superior for maximal strength. The SSC indices rest on indirect ratios: PSAP = ((CMJ − SJ)/SJ) × 100 and EUR = CMJ/SJ, derived solely from jump height [PAGE 342]. Because these are dimensionless performance proxies, not direct neuromuscular measures, their significance (p < 0.01) may reflect low within-group variance (OPT post PSAP SD 0.94%) rather than large biological effect. The EUR change from 1.07 ± 0.03 to 1.11 ± 0.01 is a 0.04 absolute shift; whether this crosses a meaningful threshold for adolescent SSC function is unresolved, especially since the reference value of ~1.1 derives from adult/elite literature (McGuigan et al., 2006; Suchomel et al., 2016) cited on [PAGE 342].

Additional gray zones: Maturity was indexed by bone age (Greulich–Pyle) without PHV/PWV [PAGE 340], yet the sample spans biological ages 12.8–16.2 years, a window straddling peak height velocity. Squat-jump compliance was verified by visual observation only; subvisual unweighting ≤2% body mass is claimed negligible based on Agar-Newman et al. (2025) [PAGE 347], but no force-plate data confirm this. Sex-stratified analysis found no interaction, but the study was underpowered to detect sex-specific effects within each model [PAGE 343].

I should count words. This looks like ~350 words. Let me expand a bit more to ensure >= 400.

I'll add more about the ANOVA assumptions and the volume-load table discrepancies.

Table 4 volume loads: OPT stabilization 74,880; SE 339,228; H 661,871; MS 218,515. CON: 213,192; 647,676; 1,068,960; 463,644 [PAGE 343]. Note the power phase volume is missing from Table 4 text but referenced in Figure 2. The sum stated in text: OPT 1,294,494 vs CON 2,393,472 kg [PAGE 343]. But adding visible OPT phase values: 74,880 + 339,228 + 661,871 + 218,515 = 1,294,494 exactly. So power phase volume for OPT is apparently zero or omitted? Wait, the power phase includes complex training but maybe volume load formula only applied to resistance exercises. CON sum: 213,192 + 647,676 + 1,068,960 + 463,644 = 2,393,472 exactly. So Table 4 only lists four phases but text says all phases; power phase not shown or maybe included elsewhere. This is a gray zone: the power phase (weeks 23-26) volume is not tabulated despite being part of the macrocycle. Yet the text claims total volume across all phases. This suggests either power phase volume was negligible under the formula or an omission.

Good, that's a strong audit point.

---

SOURCE_OPERATORS_AND_EQUATIONS:

Formal LaTeX:
- Volume Load: \( VL_{phase} = 1RM \times (\%1RM) \times N_{reps} \) [kg·reps], where %1RM is expressed as a decimal fraction [PAGE 342].
- PSAP: \( \text{PSAP} = \left( \frac{h_{CMJ} - h_{SJ}}{h_{SJ}} \right) \times 100 \ [\%] \), where \( h \) is optimal jump height in cm [PAGE 342]. Verbatim source rendering appears as "PSAP = (CMJ - SJ) × SJ - 1 × 100%" due to typographic extraction, but dimensional analysis requires division by SJ.
- EUR: \( \text{EUR} = \frac{h_{CMJ}}{h_{SJ}} \ [\text{dimensionless}] \) [PAGE 342]. Source rendering: "EUR = CMJ × SJ - 1".
- Statistical model: \( Y_{ijk} = \mu + G_i + T_j + (G \times T)_{ij} + \epsilon_{ijk} \), with repeated measures across \( t \in \{0, 4, 10, 16, 22, 26\} \) weeks, \( \alpha = 0.05 \), Bonferroni post hoc [PAGE 342].
- Cohen's ES thresholds: small \( d = 0.2 \), medium \( 0.5 \), large \( 0.8 \) [PAGE 342].

Units and exact values:
- 1RM: kg. OPT post 133.1 ± 21.4; CON post 119.2 ± 18.0 [PAGE 343 Table 5].
- CMJ: cm. OPT post 47.4 ± 5.76; CON post 39.8 ± 3.99 [PAGE 343 Table 5].
- PSAP: %. OPT post 10.63 ± 0.94; CON post 6.07 ± 2.36 [PAGE 343 Table 5].
- EUR: dimensionless. OPT post 1.11 ± 0.01; CON post 1.06 ± 0.03 [PAGE 343 Table 5].
- Volume load totals: OPT 1,294,494 kg; CON 2,393,472 kg; ratio ≈ 1.85 [PAGE 343].

Breakdown and singularity: EUR is singular as \( h_{SJ} \to 0 \); PSAP undefined at \( h_{SJ} = 0 \). With adolescent SJ heights ~31–43 cm, no singularity occurred, but measurement noise in SJ denominator propagates nonlinearly into PSAP.

This section ~300 words.

---

RETROCAUSAL_GENEALOGY:

Historical lineage:
- General Adaptation Syndrome: Selye (1976), Stone et al. (2007), Cunanan et al. (2018) underpin periodization as planned variation to avoid accommodation [PAGE 346].
- NASM-OPT model: three levels (stability, strength, power) with linear progressive elements; emphasis on movement quality before load [PAGE 340].
- LTAD / Youth Physical Development: Lloyd & Oliver (2012), Faigenbaum & Myer (2010), Granacher et al. (2016) [PAGE 340].
- SSC metrics: Bobbert et al. (1996) CMJ > SJ; McGuigan et al. (2006) EUR reference ~1.1; Schmarzo & Dyke (2017) PSAP ~10% [PAGE 342].

Multi-week traps:
1. Maturation trap: Bone age range 12.8–16.2 years means participants span pre-, circa-, and post-PHV. A fixed 26-week macrocycle cannot align phase transitions with individual biological windows; adaptation observed at week 22 may reflect maturation rather than periodization [PAGE 340].
2. Mid-cycle trap: CON led at weeks 10–16 for 1RM and CMJ (e.g., CMJ 40.12 vs 37.42 cm at week 16) [PAGE 344 Table 6]. A coach terminating at week 16 would falsely conclude traditional periodization is superior, illustrating that retrospective evaluation depends on arbitrary endpoint selection.
3. Dose architecture trap: Volume was not equated; OPT used lower loads/higher reps early, CON higher loads later [PAGE 341]. Therefore the study cannot disentangle periodization sequencing from total mechanical dose, a confound inherited from comparisons of non-equated periodization models (Williams et al., 2017) [PAGE 340].

This section ~220 words.

---

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: Under performance pressure at week 16, when CON group showed superior 1RM and CMJ values [PAGE 344], a coach may regress to the habitual linear model—high load, low repetition—and abandon OPT's stabilization phase in subsequent cycles. This is crisis-driven habit regression: short-term metric salience overrides long-term architectural logic.

Counter-trap: OPT's advantage emerges only late (weeks 22–26). If the competitive clock fixes a major event at week 16, the rational counter-trap is to select CON for acute strength expression, despite weaker SSC indices. However, switching models mid-macrocycle based on week-16 data violates periodization fidelity and creates a new confound (hybrid programming).

Recursive theory of mind: Coach models athlete fatigue; athlete models coach's likely program change. If coach anticipates athlete plateau and increases load (CON habit), athlete may overreach; if coach anticipates this and prescribes OPT variation, athlete adapts but only if competition timing permits the delayed divergence. The clock (competition calendar) thus recursively constrains both agent's model of the other. Misalignment of clock and macrocycle produces the central decision trap.

This section ~200 words.

---

CROSS_LAYER_VETO_ADJUDICATION:

Physical layer veto: Squat depth validity relied on visual inspection by two coaches from the sagittal plane, with proximal femoral head aligned horizontally to patella [PAGE 342]. No inter-rater reliability (ICC/Kappa) is reported. Veto: if depth criterion was inconsistently applied, 1RM values are not comparable across time or groups.

Biomechanical layer veto: SJ concentric-only condition was policed by verbal cue and visual monitoring only [PAGE 342]. The authors concede subvisual unweighting may occur but cite Agar-Newman et al. (2025) that ≤2% body mass unweighting does not meaningfully alter height [PAGE 347]. Without force-plate or linear transducer data, PSAP and EUR remain vulnerable to unmeasured dip contamination. Veto: if any trial had unweighting >2%, PSAP inflation and EUR distortion propagate to the group means.

Physiological maturity layer veto: Bone age (Greulich–Pyle) was measured, but PHV/PWV were not [PAGE 340]. Biological maturity is a known effect modifier for youth resistance response [Lloyd et al., 2015a, p. 340]. Veto: generalization to all adolescents (10–19 years) is invalid because the sample is narrow in biological age and single-sport.

Weather/environment layer: Intervention occurred indoors at a Youth Competitive Sports School in Guangdong; no ambient temperature, humidity, or seasonal control is reported across the 26-week macrocycle [PAGE 341]. Given jump performance sensitivity to warm-up and thermal state, unrecorded seasonal drift is a potential confound. Veto: no environmental data means ecological validity cannot be verified.

These vetoes are not triggered by reported evidence, but they define the evidentiary boundary: the study is internally valid for its specific sample and conditions only if depth, jump purity, and environmental stability held.

This section ~230 words.

---

RLVR_COUNTERFACTUAL_VETOES:

Scenario 1 (Volume-equated replication): Re-run the 26-week RCT with total volume load equated between OPT and CON while preserving phase sequencing. RLVR check: measure volume load per session and terminate groups at matched cumulative kg·reps. Prediction: OPT's between-group advantage in 1RM and CMJ will attenuate (effect size likely falls below Cohen's large threshold) because part of the observed benefit stems from lower fatigue accumulation rather than periodization architecture per se; however, PSAP and EUR may remain superior in OPT if stability-to-power sequencing specifically enhances SSC timing independent of dose.

Scenario 2 (Direct neuromuscular substitution): Replace PSAP/EUR with force-plate-derived eccentric utilization (force-time integral ratio) and EMG motor-unit recruitment as primary outcomes. RLVR check: blind analysts to group assignment; require pre-registered minimal detectable change for EUR > 0.03. Prediction: The observed EUR shift of +0.04 [PAGE 343] may fall within jump-mat measurement error, yielding a null mechanistic result; PSAP's rise to 10.63% may not correspond to increased elastic energy storage but to altered SJ technique (reduced concentric-only height).

Scenario 3 (Maturity-stratified randomization): Re-randomize with stratification by years from PHV rather than bone age quartile, and test group × maturity-status interaction. RLVR check: include early-PHV (≤ -0.5 years from PHV) and late-PHV (≥ +0.5 years) subgroups. Prediction: OPT's benefit will be concentrated in post-PHV athletes; early-PHV athletes may show no group difference or a CON advantage because their neuromuscular systems cannot tolerate power-phase plyometrics, producing a significant interaction that nullifies the pooled main effect.

This section ~220 words.

Now word count check:
THINK_TRACE: Let me count roughly. I'll write it fully.
SOURCE: ~300.
Retrocausal: ~220.
Recursive: ~200.
Cross-layer: ~230.
RLVR: ~220.
Total: ~1470 words. Good.

Need to ensure no betting lines. No mentions of odds/spreads/moneylines. Fine.

Need exact [PAGE N] markers and verbatim quotes where applicable. I have several. I'll add verbatim quotes sparingly.

Verbatim quote examples:
- "PSAP = (CMJ - SJ) × SJ - 1 × 100%" [PAGE 342]
- "EUR = CMJ × SJ - 1" [PAGE 342]
- "Volume Load = 1RM × %1RM × repetitions" [PAGE 342]
- "approximately 1.85 - fold lower" [PAGE 345]
- "no statistically significant interaction effect of sex" [PAGE 343]

I'll include these.

Let's write the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The study's central causal chain runs from NASM-OPT's sequential architecture—stability (weeks 1–4) to strength (weeks 5–22, subdivided into endurance/hypertrophy/maximal) to power (weeks 23–26)—to superior neuromuscular efficiency, defined as greater adaptation per unit of mechanical dose. The dose metric is explicitly defined as Volume Load = 1RM × %1RM × repetitions [PAGE 342], producing units of kg·reps per phase. The CON group accumulated 2,393,472 kg across the macrocycle versus 1,294,494 kg for OPT, an approximately 1.85-fold difference [PAGE 343], yet OPT posted higher final values in squat 1RM (133.1 ± 21.4 vs 119.2 ± 18.0 kg) and CMJ (47.4 ± 5.8 vs 39.8 vs 4.0 cm) [PAGE 343 Table 5]. The efficiency inference therefore depends on treating volume load as the sole relevant dose denominator. This is a gray zone because the authors state total volume differed intentionally due to programming philosophy [PAGE 341], meaning periodization architecture is confounded with absolute mechanical exposure; one cannot isolate sequencing effects from dose effects without an equated-volume arm.

A second gray zone is temporal inversion. Table 6 shows CON leading OPT in 1RM at week 10 (107.24 vs 103.95 kg) and week 16 (116.43 vs 113.19 kg), while CMJ at week 16 favors CON (40.12 vs 37.42 cm) [PAGE 344]. OPT only overtakes at week 22 (1RM: 132.76 vs 118.71 kg) and post-intervention [PAGE 344]. Thus the narrative that "CON plateaued whereas OPT improved continuously" is endpoint-contingent: if the competitive clock stopped at week 16, traditional periodization would appear superior for maximal dynamic strength. The claim of sustained OPT adaptation is only defensible when the macrocycle terminates at week 26.

A third gray zone concerns the indirect SSC indices. PSAP and EUR are derived exclusively from jump heights [PAGE 342]. The source text renders them typographically as "PSAP = (CMJ - SJ) × SJ - 1 × 100%" and "EUR = CMJ × SJ - 1" [PAGE 342], but dimensional analysis requires division by SJ: PSAP = ((h_CMJ − h_SJ)/h_SJ) × 100 [%], EUR = h_CMJ/h_SJ [dimensionless]. The EUR change in OPT is from 1.07 ± 0.03 to 1.11 ± 0.01, an absolute shift of 0.04 [PAGE 343 Table 5]. Given that the reference value of ~1.1 is imported from adult/elite literature (McGuigan et al., 2006; Suchomel et al., 2016) [PAGE 342], the biological significance of a 0.04 shift in adolescents is unverified. The post-intervention PSAP SD collapses to 0.94% [PAGE 343 Table 5], raising the possibility that statistical significance reflects restricted variance rather than a large physiological effect.

Additional gray zones include maturity assessment limited to Greulich–Pyle bone age without PHV/PWV [PAGE 340], despite the sample spanning biological ages 12.8–16.2 years and thus straddling peak height velocity; squat-jump "no dip" compliance verified by visual observation only, with no force-plate confirmation that subvisual unweighting remained under the ≤2% body-mass threshold deemed negligible by Agar-Newman et al. (2025) [PAGE 347]; and no reported sex-stratified power, leaving the possibility of undetected sex-specific responses within each model [PAGE 343]. Finally, Table 4 tabulates volume load for only four phases (stabilization, strength endurance, hypertrophy, maximal strength), summing exactly to the stated totals for both groups [PAGE 343], yet the power phase (weeks 23–26) volume is not separately reported, creating an evidentiary gap in the total-dose calculation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units extracted from the source:

1. Volume load dose operator: \( VL_{\text{phase}} = 1RM \times (\%1RM) \times N_{\text{reps}} \), units kg·reps per phase, where %1RM is inserted as a decimal fraction [PAGE 342]. Reported phase totals (kg): OPT stabilization 74,880; strength endurance 339,228; hypertrophy 661,871; maximal strength 218,515; CON stabilization 213,192; strength endurance 647,676; hypertrophy 1,068,960; maximal strength 463,644 [PAGE 343]. Cumulative macrocycle totals: OPT 1,294,494 kg; CON 2,393,472 kg; ratio ≈ 1.85 [PAGE 343].

2. Pre-stretch augmentation percentage: \( \text{PSAP} = \left( \frac{h_{\text{CMJ}} - h_{\text{SJ}}}{h_{\text{SJ}}} \right) \times 100 \ [\%] \), where \( h \) denotes optimal jump height in cm [PAGE 342]. Verbatim source rendering contains typographic compression: "PSAP = (CMJ - SJ) × SJ - 1 × 100%" [PAGE 342]. Singularity/breakdown: undefined as \( h_{\text{SJ}} \to 0 \); measurement noise in the SJ denominator propagates nonlinearly into PSAP. Observed adolescent SJ range ~30–43 cm, so no singularity occurred empirically, but the ratio remains sensitive to SJ technique.

3. Eccentric utilization ratio: \( \text{EUR} = \frac{h_{\text{CMJ}}}{h_{\text{SJ}}} \ [\text{dimensionless}] \) [PAGE 342]. Verbatim source rendering: "EUR = CMJ × SJ - 1" [PAGE 342]. Breakdown: undefined as \( h_{\text{SJ}} \to 0 \). Reference thresholds adopted: PSAP ≈ 10% (range 8–12%) and EUR ≈ 1.1, cited as balanced SSC/concentric contributions from McGuigan et al. (2006) and Suchomel et al. (2016) [PAGE 342].

4. Inferential model: two-way repeated-measures ANOVA, \( Y_{ijk} = \mu + G_i + T_j + (G \times T)_{ij} + \epsilon_{ijk} \), with \( G \in \{\text{OPT}, \text{CON}\} \), \( T \in \{0, 4, 10, 16, 22, 26\} \) weeks, \( \alpha = 0.05 \), Bonferroni post hoc; sphericity evaluated by Mauchly’s test with Greenhouse–Geisser adjustment if violated [PAGE 342]. Effect sizes interpreted by Cohen’s thresholds: small \( d = 0.2 \), medium \( 0.5 \), large \( 0.8 \) [PAGE 342].

5. Primary outcome values (mean ± SD) [PAGE 343 Table 5]:
- Squat 1RM (kg): OPT post 133.1 ± 21.4; CON post 119.2 ± 18.0; within-group ES 4.04 vs 4.39.
- CMJ (cm): OPT post 47.4 ± 5.76; CON post 39.8 ± 3.99; ES 3.55 vs 2.42.
- SJ (cm): OPT post 42.9 ± 5.17; CON post 37.8 ± 4.03; ES 3.17 vs 2.97.
- PSAP (%): OPT post 10.63 ± 0.94; CON post 6.07 ± 2.36 (p = 0.12); ES 1.62 vs 0.36.
- EUR: OPT post 1.11 ± 0.01; CON post 1.06 ± 0.03 (p = 0.08); ES 1.11 vs 0.40.

No betting lines, spreads, totals, moneylines, or odds are present in or inferred from this source.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage of the NASM-OPT model traces to the General Adaptation Syndrome formalized by Selye (1976) and operationalized for resistance training by Stone et al. (2007) and Cunanan et al. (2018), all cited on [PAGE 346] as the theoretical foundation for periodization as planned variation to prevent accommodation and overtraining. The OPT model itself—organizing training into stability, strength, and power levels with an explicit movement-quality-first progression—is positioned against Bompa and Buzzichelli (2019), Buford et al. (2007), and Turner (2011) on [PAGE 340]. The adolescent application draws on the Long-Term Athlete Development model and the Youth Physical Development Model of Lloyd & Oliver (2012), supported by Faigenbaum & Myer (2010) and Granacher et al. (2016) [PAGE 340]. SSC indices derive from Bobbert et al. (1996), who established CMJ > SJ height, and McGuigan et al. (2006), who popularized EUR ≈ 1.1 [PAGE 342].

Three multi-week traps are embedded in this lineage. First, the maturation trap: the study uses bone age (Greulich–Pyle) rather than PHV/PWV [PAGE 340], yet the 12.8–16.2 year biological range spans pre-, circa-, and post-peak-height-velocity states. A fixed 26-week macrocycle cannot align phase transitions with individual maturation windows; observed week-22 divergence may reflect biological maturation rather than periodization architecture. Second, the mid-cycle trap: CON led OPT in 1RM and CMJ at weeks 10 and 16 [PAGE 344 Table 6]. Any evaluation anchored to week 16 would retroactively favor traditional periodization, demonstrating that causal attribution flips depending on the arbitrary endpoint selected by the coach or analyst. Third, the dose-architecture trap: total volume was deliberately unequal [PAGE 341], so the study inherits the confound identified in Williams et al. (2017) [PAGE 340]—one cannot determine whether OPT's superiority arises from sequencing or from lower accumulated fatigue. These traps imply that the historical narrative of "progressive overload is superior" is underdetermined by the data without volume-equated and maturity-stratified replication.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression occurs when a coach, observing CON's week-16 lead in 1RM (116.43 vs 113.19 kg) and CMJ (40.12 vs 37.42 cm) [PAGE 344], regresses to the habitual linear model—high load, low repetition, continuous intensity escalation—and abandons OPT's stabilization-to-power sequencing in the next macrocycle. This is crisis-driven because short-term metric salience overrides the long-term architectural logic that produced delayed divergence at weeks 22–26.

The counter-trap is clock-dependent: if the competitive calendar fixes a major event at week 16, selecting CON for acute maximal strength expression is rational, despite its inferior terminal PSAP and EUR. However, switching models mid-macrocycle based on week-16 data creates hybrid programming that violates periodization fidelity and introduces a new confound.

Recursive theory of mind enters because the coach models the athlete's fatigue and adaptation trajectory, while the athlete implicitly models the coach's likely program changes. If the coach anticipates an athlete plateau and increases load (CON habit), the athlete may overreach; if the coach anticipates this and prescribes OPT variation, adaptation occurs only if the competition clock permits the delayed OPT divergence. Misalignment between the competition clock and the 26-week macrocycle produces the central decision trap: optimizing for week-16 metrics sacrifices week-26 SSC and strength gains, while optimizing for week 26 risks underperformance at earlier competitions. The model therefore cannot be evaluated outside the temporal context of the competitive season.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Squat depth validity relied on visual inspection by two coaches from the sagittal plane, requiring the proximal femoral head to align horizontally with the patella [PAGE 342]. No inter-rater reliability coefficient (ICC or Kappa) is reported. Veto condition: if depth criterion application varied across time points or groups, 1RM values are not comparable, invalidating the primary strength outcome.

Biomechanical layer: The squat jump concentric-only condition was enforced via standardized verbal cues and visual monitoring only [PAGE 342]. The authors concede possible subvisual unweighting but cite Agar-Newman et al. (2025) that amplitudes ≤2% body mass do not meaningfully alter jump height [PAGE 347]. Without force plate or linear transducer data, PSAP and EUR remain exposed to undetected dip contamination. Veto condition: if any trial contained unweighting >2% body mass, PSAP inflation and EUR distortion propagate into group means, undermining the SSC-function claim.

Physiological maturity layer: Bone age was assessed, but PHV/PWV were not directly quantified [PAGE 340]. Biological maturity is a known effect modifier for youth resistance-training response [Lloyd et al., 2015a, p. 340]. Veto condition: generalization to all adolescents aged 10–19 years is invalid because the sample is narrow in biological age and drawn from a single sports school specializing in badminton and wrestling.

Weather/environment layer: Training occurred indoors at a Youth Competitive Sports School in Guangdong across a 26-week macrocycle; ambient temperature, humidity, and seasonal variation are not reported or controlled [PAGE 341]. Jump performance is sensitive to warm-up and thermal state. Veto condition: absence of environmental data means ecological validity cannot be verified, and seasonal drift across late 2025 to early 2026 (manuscript received November 2025, accepted February 2026) is an unmeasured confound.

None of these vetoes is triggered by reported evidence; they define the boundary conditions under which the study's internal validity holds.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Volume-equated replication: Re-run the 26-week RCT while equating cumulative volume load between OPT and CON, preserving phase sequencing but terminating each group at matched total kg·reps. RLVR check: session-by-session volume load monitoring with pre-registered equivalence margin of 5%. Prediction: OPT's between-group advantage in 1RM and CMJ will attenuate below Cohen's large threshold because part of the observed benefit stems from lower fatigue accumulation rather than periodization architecture per se; however, PSAP and EUR may remain superior in OPT if stability-to-power sequencing enhances SSC timing independent of dose.

Scenario 2 — Direct neuromuscular substitution: Replace PSAP and EUR with force-plate eccentric-utilization (force-time integral ratio) and EMG motor-unit recruitment as primary outcomes, with analysts blinded to group. RLVR check: pre-register minimal detectable change for EUR at 0.03, exceeding the observed +0.04 shift [PAGE 343]. Prediction: The jump-mat-derived EUR change may fall within measurement error, yielding a null mechanistic result; PSAP's rise to 10.63% may reflect altered squat-jump technique (reduced concentric-only height) rather than increased elastic energy storage.

Scenario 3 — Maturity-stratified randomization: Re-randomize with stratification by years from PHV rather than bone age quartile, and test group × maturity-status interaction across early-PHV (≤ −0.5 years) and late-PHV (≥ +0.5 years) subgroups. RLVR check: powered to detect interaction effects at α = 0.05. Prediction: OPT's benefit will concentrate in post-PHV athletes; early-PHV athletes may show no group difference or a CON advantage because their neuromuscular systems cannot tolerate power-phase plyometrics, producing a significant interaction that nullifies the pooled main effect reported at [PAGE 343].
</RLVR_COUNTERFACTUAL_VETOES>