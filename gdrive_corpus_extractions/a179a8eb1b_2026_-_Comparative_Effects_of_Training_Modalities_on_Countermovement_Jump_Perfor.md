---
source: "2026 - Comparative Effects of Training Modalities on Countermovement Jump Performance in Soccer Players A Systematic Review and Network Meta-Analys - Dong et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Sports Science and Medicine/In Press/2026"
pages: 13
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4244
---

<NATIVE_REASONING>
The user has provided a full source text of a 13-page systematic review and network meta-analysis (NMA) paper about training modalities and countermovement jump (CMJ) performance in soccer players. I need to produce a response that strictly follows the system's invariants:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting content allowed. This is about sports science training modalities, so betting content is naturally absent, but I must be careful not to mention odds/spreads/etc.

The response must be exactly those XML sections (presumably plus maybe a brief intro/outro, but safer to stick to the sections). I need >=1000 words total depth across sections, with THINK_TRACE >=400 words.

Let me structure:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need >=400 words. Discuss:
- NMA model: random-effects frequentist NMA using netmeta in R 4.4.1, Paule-Mandel τ², MDs in cm, 95% CIs.
- Network geometry: 8 nodes (CBT, PT, FT, HIIT, RST, SSG, STG, TST), 29 RCTs, n=450.
- Most comparisons against TST; active-active limited. Table 3 direct comparisons counts.
- Transitivity/similarity assumptions: comparable participant characteristics, dose, outcome measurement, control conditions. Heterogeneity I²=32.4% moderate. No significant global/local inconsistency (design-by-treatment, node-splitting).
- Primary result: CBT vs TST MD=4.92 cm, 95% CI [3.02, 6.83], P-score=0.98. Followed by FT and PT. SSG, STG, RST, HIIT not significant (CIs include null).
- Active-active: CBT vs PT MD=2.04 cm p=0.047; CBT vs STG MD=3.32 cm p=0.004; CBT vs FT MD=1.74 cm p=0.178 (NS); FT vs PT MD=0.30 cm p=0.771 (NS); FT vs STG MD=1.58 cm p=0.075 (NS); PT vs STG MD=1.28 cm p=0.152 (NS).
- Subgroups: males/youth/Tier2 = CBT highest; females/adults = PT highest; Tier3 = FT highest.
- Certainty: CINeMA low to moderate; downgrades for within-study bias and imprecision. RoB2: 3 low risk, 26 some concerns, 0 high risk.
- Publication bias: funnel asymmetry, Egger's t=3.69, p=0.0007 → small-study effects, effects may be overestimated.
- Gray zones: reliance on indirect evidence for key contrasts (CBT vs FT, FT vs PT). Node sizes small (CBT k=5, n=54; FT k=5, n=78). Heterogeneity higher in some subgroups (e.g., Tier 2). Protocol details (intensity, volume, progression) inconsistently reported. No grey literature/trial registry search → publication bias risk. Baseline values comparable so change scores not analyzed. Same unit cm so MD not SMD.
- Singularity/breakdown: If transitivity violated (different populations/doses), NMA estimates invalid. If τ² → ∞ or common heterogeneity assumption fails, random-effects model breaks down. If indirect estimates dominate active-active nodes, rankings unstable. Small-study effects (Egger's p=0.0007) mean effect inflation possible.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations, units, page citations.
- Define MD = μ_i - μ_j in cm. Random-effects NMA model: y_k = θ_{t_k} - θ_{c_k} + ε_k, ε_k ~ N(0, σ_k² + τ²). τ² via Paule-Mandel. P-score definition. I² = 100% × (Q - df)/Q. CINeMA domains.
- Cite [PAGE 1], [PAGE 2], [PAGE 3], [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 7], etc.
- Units: cm for CMJ height; MD cm; 95% CI cm; τ² in cm²; I² dimensionless %; P-score [0,1].
- Breakdown regimes: I² thresholds, small-study effects, indirectness.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Wisløff et al. 2004 (squat strength-sprint/jump correlation), Cormie et al. 2011 (RFD, SSC), Markovic et al. 2004 (CMJ reliability), Gathercole et al. 2015 (CMJ validity), Ramirez-Campillo et al. 2020 (PT), Zghal et al. 2019 (CBT), Raya-González et al. 2022 (FT), Chaimani & Salanti 2012 / Chaimani et al. 2019 (NMA methods), Dias et al. 2018, Rücker & Schwarzer 2015 (P-scores), Nikolakopoulou et al. 2020 (CINeMA), McKay et al. 2021 (tier classification).
- Multi-week traps: intervention durations range 2-12 weeks (Table 2). Short durations (2-4 weeks) may not capture chronic adaptations; long durations (10-12 weeks) risk detraining/confounding with in-season match load. Frequency 1-5 sessions/week. Tier 2 vs Tier 3 strength reserves. The "1.5× body mass back squat threshold" from Suchomel et al. 2016 cited on page 8/9. Underpowered subgroups, fragmented comparisons. Publication bias from small studies overestimating effects.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This section is more conceptual/metacognitive. Need to interpret as "crisis habit regression" (falling back to familiar TST under pressure), "counter-trap" (over-indexing on highest P-score CBT without checking indirectness/certainty), "clock" (time-course/duration mismatches: 2-12 week interventions vs seasonal periodization). How a coach/analyst might regress to TST habit during crisis (injury, fixture congestion), the counter-trap of blindly adopting CBT because P-score=0.98 despite low-moderate certainty, and the clock of needing 4-8+ weeks for adaptations while match calendar compresses windows.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical/biomechanical vetoes: CMJ height is proxy not direct match performance [PAGE 1]. SSC efficiency, RFD, maximal strength determinants [PAGE 1]. FT eccentric overload requires strength reserves; not suitable for low-strength athletes [PAGE 8-9]. PT requires adequate strength foundation; back squat 1.5× BM threshold [PAGE 8]. STG heterogeneous protocols [PAGE 9]. HIIT/RST/SSG target metabolic/sport-specific skills not CMJ-specific neuromuscular qualities [PAGE 7-8].
- Weather veto: outdoor soccer training modalities affected by weather (temperature, surface, wind) — CMJ testing typically indoor lab/controlled but training outdoors subject to environmental modifiers; not directly addressed in paper but a veto layer.
- Adjudication: rank interventions only when direct evidence + moderate certainty + biomechanical plausibility align; otherwise veto.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. Need 3 counterfactual veto scenarios that are verifiable, with predictions.
  1. Veto: If a future head-to-head RCT directly compares CBT vs FT in Tier 3 male soccer players over ≥8 weeks and finds no significant CMJ difference (MD CI includes 0), then the NMA ranking of CBT > FT is vetoed. Prediction: current indirect CBT vs FT MD=1.74 cm (p=0.178) would be attenuated toward null; P-score for CBT drops below FT in Tier 3.
  2. Veto: If Egger's test small-study effects are confirmed via contour-enhanced funnel plot with registered protocols showing null results in large trials, veto CBT overall superiority. Prediction: true MD CBT vs TST < 3.02 cm lower CI bound; likely closer to 2-3 cm.
  3. Veto: If a direct PT vs FT trial in adult female soccer players (the subgroup where PT ranked highest) shows FT superior or equal, veto sex-based PT prescription. Prediction: PT's apparent female advantage is an artifact of indirect comparisons through TST; PT vs FT MD near 0 (current FT vs PT MD=0.30 cm, p=0.771 overall).

Need to ensure >=1000 words total. Let's aim for each section substantial. No betting lines.

Need exact [PAGE N] markers and verbatim quotes where source pages provided. I should quote some exact phrases from the text.

Let me draft carefully.

THINK_TRACE (>=400 words): I'll write a thorough audit.

Let me count approximate words as I write. Need total >=1000 across all sections. THINK_TRACE alone >=400.

I'll write it now.

Important: Do not mention any betting terms. No "odds", "spread", "total", "moneyline". The paper doesn't have these anyway.

Citations: [PAGE 1], [PAGE 2], etc. Verbatim quotes: use quotation marks with page markers.

Let's compose.

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

I'll make each section detailed. Let's write.

I need to ensure LaTeX is formal. Equations:

Model: For study k comparing treatment t to control c:
y_{kc} = \theta_t - \theta_c + \omega_{kc} + \varepsilon_{kc}
where \omega_{kc} \sim N(0, \tau^2) (random study/treatment effect deviation), \varepsilon_{kc} \sim N(0, \sigma_{kc}^2). Common heterogeneity \tau^2 estimated via Paule-Mandel.

MD_{t,c} = \bar{X}_{t,post} - \bar{X}_{c,post} in cm.

P-score: P_t = (1/(M-1)) \sum_{c \neq t} \Phi( (\theta_t - \theta_c) / SE_{t,c} ) or mean certainty that t is better than c. Higher = better.

I^2 = 100\% \times \frac{Q - df}{Q}.

CINeMA six domains.

Breakdown: transitivity assumption, common \tau^2, consistency.

Units: CMJ height cm; MD cm; 95% CI cm; \tau^2 cm^2; P-score unitless [0,1]; I^2 %.

Let's write the content.

I'll ensure verbatim quotes from source:
- Page 1: "Combined training (CBT) was ranked highest in effect estimates in CMJ performance compared with traditional soccer training (TST) (MD = 4.92, 95% CI: 3.02 - 6.83, P-score = 0.98)"
- Page 5: "CBT demonstrated a significant advantage over PT (MD = 2.04 cm, p = 0.047) and STG (MD = 3.32 cm, p = 0.004), whereas the comparison between CBT and FT was not statistically significant (MD = 1.74 cm, p = 0.178)."
- Page 7: "The funnel plot showed slight asymmetry, and Egger's regression test suggested potential small-study effects (t = 3.69, p = 0.0007)."
- Page 4: "Youth players were defined as ≤18 years, whereas adult players were defined as >18 years."
- Page 8: "a back squat strength of at least 1.5 times body mass has been suggested as a potential threshold (Suchomel et al., 2016)."

Good. Now writing.

I need to be careful about word count. Let's aim for THINK_TRACE ~700 words, SOURCE_OPERATORS ~500, RETRO ~400, RECURSIVE ~300, CROSS ~300, RLVR ~300. Total >2500 easily.

Let's proceed.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source is a 13-page frequentist random-effects network meta-analysis (NMA) by Dong et al. (2026), Journal of Sports Science and Medicine 25, 701–713, synthesizing 29 randomized controlled trials (n = 450) across eight intervention nodes: combined training (CBT), plyometric training (PT), flywheel resistance training (FT), traditional strength training (STG), high-intensity interval training (HIIT), repeated sprint training (RST), small-sided games (SSG), and traditional soccer training (TST) as the reference comparator [PAGE 1], [PAGE 2], [PAGE 3]. The analytical chain is as follows. Searches were run through 28 November 2025 across PubMed, Web of Science, Embase, EBSCO, and Cochrane; clinical-trial registries and grey literature were not searched, which the authors explicitly acknowledge may increase publication bias [PAGE 2]. Eligibility required RCTs in healthy soccer players reporting countermovement jump (CMJ) height, with baseline values generally comparable between arms so change-score sensitivity analyses were not performed; because all studies used centimeters, mean differences (MDs) rather than standardized mean differences were used [PAGE 3].

Network geometry is sparse and hub-and-spoke: TST appears in 20 studies (n = 240 participants), whereas direct active–active head-to-head trials are rare—only one CBT vs PT trial, one CBT vs STG trial, three FT vs STG trials, and so on [PAGE 5, Table 3]. Consequently, several active–active contrasts rely partly on indirect evidence through TST. The authors state: "Most direct comparisons involved TST as the comparator, whereas direct head-to-head comparisons between active interventions were relatively limited" [PAGE 5]. Estimated between-study heterogeneity is moderate (I² = 32.4%; τ² via Paule–Mandel), global inconsistency via design-by-treatment interaction and local inconsistency via node-splitting were not significant [PAGE 1], [PAGE 5]. The primary effect is CBT vs TST: MD = 4.92 cm, 95% CI [3.02, 6.83], P-score = 0.98 [PAGE 1], [PAGE 6]. FT and PT follow; SSG, STG, RST, HIIT CIs include the null [PAGE 6].

Gray zones are substantial. First, certainty via CINeMA is predominantly low-to-moderate, downgraded mainly for within-study bias and imprecision [PAGE 6], [PAGE 7]. RoB 2 found 0 high-risk studies but 26 of 29 with "some concerns" (89.7%) and only 3 low risk [PAGE 6]. Second, publication-bias signals are present: funnel-plot asymmetry and Egger’s regression t = 3.69, p = 0.0007, indicating small-study effects and possible inflation of treatment effects and rankings [PAGE 7]. Third, the key active–active contrasts supporting the hierarchy are statistically fragile: CBT vs FT MD = 1.74 cm, p = 0.178 (non-significant); FT vs PT MD = 0.30 cm, p = 0.771; FT vs STG MD = 1.58 cm, p = 0.075; PT vs STG MD = 1.28 cm, p = 0.152 [PAGE 5]. The only statistically significant active–active gaps are CBT vs PT (MD = 2.04 cm, p = 0.047) and CBT vs STG (MD = 3.32 cm, p = 0.004) [PAGE 5]. Fourth, subgroup samples are tiny: CBT node k = 5, n = 54; FT node k = 5, n = 78; Tier 2 heterogeneity was higher than global [PAGE 5], [PAGE 9]. Fifth, intervention reporting was inconsistent—intensity, volume, and progression were not uniformly documented, and STG protocols were heterogeneous [PAGE 9]. Sixth, transitivity assumptions (comparable participants, dose, outcome measurement, control conditions) underpin every indirect estimate; if violated, the NMA rankings are not transportable [PAGE 2].

Singularity/breakdown regimes: (a) if τ² → large relative to effect scale or the common-heterogeneity assumption fails across dissimilar comparisons, the random-effects NMA loses precision and ranking stability; (b) if transitivity fails—e.g., youth CBT trials are not exchangeable with adult FT trials—indirect estimates become biased and P-scores meaningless; (c) if small-study effects are genuine, the pooled MD of 4.92 cm for CBT vs TST is an upper bound and the true effect may lie near or below the CI lower limit of 3.02 cm; (d) if direct CBT vs FT and FT vs PT trials accumulate and contradict the indirect network, the current ranking collapses. The paper appropriately frames rankings as "comparative estimates rather than definitive evidence of superiority" [PAGE 7].

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Let study k compare active intervention t against control c. The frequentist random-effects NMA (R 4.4.1, netmeta 3.0-0; Paule–Mandel τ²) is specified as:

y_{k} = (\theta_t - \theta_c) + \omega_{k} + \varepsilon_{k},
\quad \omega_{k} \sim \mathcal{N}(0,\tau^2), \quad \varepsilon_{k} \sim \mathcal{N}(0,\sigma_k^2)

where y_k is the observed post-intervention mean difference in CMJ height (unit: cm), \theta_t and \theta_c are node-specific effects relative to the common reference TST, \tau^2 is the common between-study heterogeneity variance (unit: cm²), and \sigma_k^2 is the within-study sampling variance. Because all included studies report CMJ height in the same unit (cm), MDs are computed from post-intervention values:

\text{MD}_{t,c} = \bar{X}_{t,\text{post}} - \bar{X}_{c,\text{post}} \quad [\text{cm}],

with 95% confidence intervals \text{MD}_{t,c} \pm 1.96 \cdot \text{SE}_{t,c} [\text{cm}] [PAGE 3], [PAGE 6]. Heterogeneity is quantified by I²:

I^2 = 100\% \times \frac{Q - df}{Q} \quad [\text{dimensionless, \%}],

reported as I² = 32.4% (moderate) [PAGE 1], [PAGE 5]. Intervention ranking uses P-scores, defined as the mean extent of certainty that treatment t is better than each competing intervention c:

P_t = \frac{1}{M-1}\sum_{c \neq t} \Pr(\theta_t > \theta_c \mid \text{data}) \quad [\text{unitless, } [0,1]],

with higher values indicating greater effectiveness; CBT P-score = 0.98 [PAGE 2], [PAGE 3], [PAGE 6]. Evidence certainty is assessed with CINeMA across six domains: within-study bias, reporting bias, indirectness, imprecision, heterogeneity, and incoherence [PAGE 3], [PAGE 6].

Verbatim effect estimates from the source:
- Primary: "CBT showed the largest improvement compared with TST (MD = 4.92, 95% CI: 3.02 - 6.83, P-score = 0.98)" [PAGE 6].
- Active–active: "CBT demonstrated a significant advantage over PT (MD = 2.04 cm, p = 0.047) and STG (MD = 3.32 cm, p = 0.004), whereas the comparison between CBT and FT was not statistically significant (MD = 1.74 cm, p = 0.178). No significant differences were observed between FT and PT (MD = 0.30 cm, p = 0.771), FT and STG (MD = 1.58 cm, p = 0.075), or PT and STG (MD = 1.28 cm, p = 0.152)" [PAGE 5].
- Subgroup node definitions: "Youth players were defined as ≤18 years, whereas adult players were defined as >18 years" [PAGE 4]; Tier 2 = trained/developmental, Tier 3 = highly trained/national level [PAGE 4], [PAGE 5].
- Publication bias: "The funnel plot showed slight asymmetry, and Egger's regression test suggested potential small-study effects (t = 3.69, p = 0.0007)" [PAGE 7].
- Risk of bias: "3 (10.3%) were rated as low risk of bias and 26 (89.7%) as having some concerns. No studies were classified as high risk of bias" [PAGE 6].

Breakdown / singularity regimes:
1. Transitivity failure: NMA validity rests on similarity of participant characteristics, intervention dose, outcome measurement, and control conditions across studies [PAGE 2]. If youth CBT trials (mean age ~12–16 years) are not exchangeable with adult FT trials (mean age ~23–26 years), indirect active–active contrasts are biased [PAGE 5, Table 2].
2. Common-heterogeneity collapse: if τ² is not common across comparisons (e.g., PT trials homogeneous, CBT trials highly heterogeneous), the single τ² assumption misstates uncertainty for specific nodes [PAGE 3], [PAGE 9].
3. Small-stake inflation: Egger’s p = 0.0007 implies effect overestimation in small trials; the lower CI bound 3.02 cm may itself be optimistic [PAGE 7].
4. Indirectness singularity: when an active–active estimate (e.g., CBT vs FT) is supported primarily by indirect paths through TST with few contributing studies (CBT k=5, FT k=5), the P-score ranking is fragile to the addition of one direct head-to-head RCT [PAGE 5].

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week exposure traps.

The paper's mechanistic genealogy traces to Wisløff et al. (2004), cited for the strong correlation between maximal squat strength and sprint/vertical-jump performance in elite soccer players [PAGE 1]; Cormie et al. (2011) and Maffiuletti et al. (2016), cited for the neuromuscular determinants of CMJ—maximal strength, rate of force development (RFD), intermuscular coordination, and stretch–shortening cycle (SSC) efficiency [PAGE 1]; Markovic et al. (2004) and Gathercole et al. (2015), establishing CMJ as a valid and reliable field indicator of lower-limb explosive performance rather than a direct match-performance measure [PAGE 1], [PAGE 8]. Modality-specific antecedents include traditional strength training (STG) as the maximal-force foundation [PAGE 1], plyometric training (PT) for SSC efficiency and RFD per Ramirez-Campillo et al. (2020) [PAGE 1], combined training (CBT) for complementary force and rapid-force-expression adaptations per Zghal et al. (2019) [PAGE 1], and flywheel training (FT) for eccentric overload and SSC utilization per Raya-González et al. (2022) [PAGE 1]. Methodologically, the NMA rests on Chaimani and Salanti (2012), Chaimani et al. (2019), and Dias et al. (2018) for direct/indirect evidence integration and transitivity assumptions [PAGE 2]; Rücker and Schwarzer (2015) for P-score ranking without resampling [PAGE 3]; Nikolakopoulou et al. (2020) for CINeMA confidence ratings [PAGE 3]; and McKay et al. (2021) for the Tier 2/3 participant classification framework [PAGE 4].

Multi-week traps are embedded in the intervention duration distribution (Table 2): trials span 2 to 12 weeks, with frequencies of 1–5 sessions/week [PAGE 5]. Short-duration arms (2–4 weeks: Gallego-Sendarrubias 2021 CBT vs STG, 2 weeks; Gómez 2023 CBT vs HIIT, 4 weeks; Mujika 2009 HIIT vs STG, 7 weeks with 1 session/week) may capture acute neuromuscular potentiation rather than chronic structural adaptation, while long arms (10–12 weeks: Nonnato 2022 PT vs TST, 12 weeks; Sedano Campo 2009 PT vs STG, 12 weeks; Fischetti 2019 PT vs TST, 12 weeks) risk confounding with in-season match load, detraining, and maturation in youth cohorts [PAGE 5]. The paper notes a suggested strength threshold—a back squat of at least 1.5 times body mass—before emphasizing explosive power training [PAGE 8]. Athletes below that threshold may show attenuated PT responses because force-production capacity limits SSC expression [PAGE 8], [PAGE 9]. Thus, prescribing PT to youth or low-strength Tier 2 athletes without first establishing a strength base risks a null or negative adaptation trajectory, whereas FT's eccentric overload demands substantial strength reserves and may be inappropriate below Tier 3 [PAGE 8], [PAGE 9]. The temporal mismatch between fixed trial durations and the competitive calendar (fixture congestion, off-season vs in-season) is an unmodeled effect modifier: a modality effective over 8 controlled weeks may degrade under match-fatigue accumulation, and the paper does not report longitudinal retention or follow-up outcomes [PAGE 9].

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock dynamics.

This section models how a strength-and-conditioning decision-maker recursively reasons about the evidence under pressure. Crisis habit regression: under match congestion, injury waves, or poor jump-testing outputs, a coach tends to regress to traditional soccer training (TST) or generic strength work because it is socially legible and requires no new equipment; the paper shows STG and HIIT/RST/SSG did not demonstrate significant CMJ improvements, yet their institutional inertia remains high [PAGE 6], [PAGE 7]. Counter-trap: the most salient finding—CBT P-score = 0.98 vs TST—induces an over-correction in which CBT is adopted universally as "best," ignoring that the CBT vs FT active–active contrast was non-significant (MD = 1.74 cm, p = 0.178), that CINeMA certainty is low-to-moderate, and that small-study effects (Egger's p = 0.0007) may inflate the 4.92 cm estimate [PAGE 5], [PAGE 6], [PAGE 7]. The counter-trap is therefore to treat the P-score ranking as a definitive prescription rather than a comparative estimate with fragile indirect support [PAGE 7]. Clock: interventions are bounded by 4–12 week windows, but soccer periodization operates on micro/meso/macro cycles; a 4-week CBT block may show CMJ gains that do not persist across a 10-month season, and a 12-week FT block for Tier 3 athletes may collide with competitive peaking [PAGE 5], [PAGE 9]. The recursive loop is: crisis triggers regression to TST; evidence salience triggers counter-trap over-adoption of CBT; the clock imposes duration constraints that neither regression nor counter-trap respects. A robust decision rule is to select modality only when (i) direct or consistent indirect evidence exists, (ii) biomechanical plausibility matches the athlete's strength reserve (e.g., 1.5× body-mass squat threshold before PT), and (iii) the implementation window fits the periodization clock without fixture conflict [PAGE 8], [PAGE 9].

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof.

Physical layer: CMJ height is explicitly a proxy measure of lower-limb explosive capability, not a direct measure of soccer match performance [PAGE 1]. Therefore, any recommendation that equates CMJ gains with match outcome improvement is vetoed at the physical layer. CMJ is governed by maximal strength, RFD, intermuscular coordination, and SSC efficiency; modalities that do not target these determinants lack a physical pathway to CMJ adaptation [PAGE 1].

Biomechanical layer vetoes:
- FT (flywheel, eccentric overload) is mechanically appropriate only for athletes with substantial strength reserves and advanced neuromuscular adaptation; applying it to low-strength or youth athletes without that foundation violates the loading principle and may exceed tissue tolerance [PAGE 8], [PAGE 9].
- PT depends on the athlete's existing strength capacity; a back-squat threshold of roughly 1.5× body mass is cited as a prerequisite for effective explosive training [PAGE 8]. Below this, PT may produce attenuated responses [PAGE 9].
- STG protocols were heterogeneous across studies and lacked standardized prescriptions, so STG's null CMJ result may reflect dosing failure rather than physiological inefficacy; nevertheless, as a CMJ-specific intervention it fails the biomechanical specificity test [PAGE 7], [PAGE 9].
- HIIT, RST, and SSG primarily target metabolic conditioning, repeated-sprint ability, or sport-specific skills rather than the maximal-force/RFD/SSC qualities required for CMJ; their non-significant CMJ effects are biomechanically expected [PAGE 1], [PAGE 7], [PAGE 8].

Weather/environmental layer veto: CMJ testing is typically conducted indoors on force mats or jump mats under controlled conditions, but soccer training for CBT/PT/FT/HIIT/RST/SSG occurs outdoors on grass or turf, subject to temperature, surface stiffness, wind, and precipitation. The review extracted intervention duration and frequency but not environmental modifiers; therefore, outdoor prescription of plyometric or flywheel sessions in cold/wet conditions introduces uncontrolled mechanical and injury risk not addressed in the network [PAGE 5], [PAGE 9].

Adjudication rule: an intervention may be advanced only if it passes all three layers simultaneously—direct or well-supported indirect CMJ effect, biomechanical plausibility for the target athlete's strength/training tier, and feasible outdoor implementation under expected environmental conditions. CBT passes for youth/Tier 2/male athletes given moderate certainty and combined force+SSC stimulus; FT passes only for Tier 3 athletes with high strength reserves; PT passes for adults/females only when strength foundation is documented; STG, HIIT, RST, SSG are vetoed as primary CMJ interventions [PAGE 4], [PAGE 6], [PAGE 8], [PAGE 9].

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with predictions.

Scenario 1 (direct CBT vs FT veto). Verifiable condition: a future high-quality RCT directly compares CBT versus FT in Tier 3 male soccer players over ≥8 weeks with standardized intensity/volume reporting, and the 95% CI for CMJ MD includes 0 (or FT is superior). Prediction: under this outcome, the current indirect CBT-over-FT ranking (MD = 1.74 cm, p = 0.178) collapses; the P-score for CBT falls below FT in the Tier 3 stratum, and the paper's subgroup claim that "FT ranked highest in Tier 3 athletes" is reinforced while the overall CBT supremacy claim is downgraded from comparative estimate to unsupported hierarchy.

Scenario 2 (small-study-effect veto). Verifiable condition: contour-enhanced funnel analysis or prospective trial-registry data reveal that large, preregistered CBT trials report null or near-null CMJ effects while only small unpublished or negative trials remain missing, such that a bias-adjusted estimate places the CBT-vs-TST MD below 3.02 cm (the current CI lower bound) with CI including 0. Prediction: the advertised MD = 4.92 cm (95% CI: 3.02–6.83) is an upper-bound inflation; true population effect is likely closer to 1.5–3.0 cm, and CBT's P-score = 0.98 cannot be defended as a decision threshold.

Scenario 3 (sex-subgroup PT veto). Verifiable condition: a direct head-to-head RCT in adult female soccer players compares PT versus FT (or PT versus CBT) and shows FT or CBT superior or statistically equivalent to PT (CI for MD includes 0 or favors the comparator), contradicting the subgroup claim that PT ranked highest in females. Prediction: because the overall FT-vs-PT estimate is already near-null (MD = 0.30 cm, p = 0.771) and rests partly on indirect evidence, the female PT advantage is an artifact of sparse indirect paths through TST; the veto removes sex-specific PT prescription from Table 4 until direct female active–active evidence accumulates [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 9].

</RLVR_COUNTERFACTUAL_VETOES>