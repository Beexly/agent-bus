---
source: "2026 - Blood Flow Restriction Training Reduces Hemodynamic Load and Improves Cardiovascular Biomarkers in Runners with Exercise-Induced Hypertensio - Kim et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Sports Science and Medicine/2026"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3910
---

<NATIVE_REASONING>
The user wants a deep, frontier-reasoning analysis of a provided sports science paper. I must follow strict invariants:
1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS - no fake ratios. Use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

I need to analyze the Kim et al. 2026 JSSM paper on BFR training in runners with exercise-induced hypertension.

Key content from source:
- 28 male runners with EIH (mean age 57.4 ± 6.5 years)
- BFRTg n=16, non-BFRTg n=12
- EIH defined as maximal SBP ≥210 mmHg during GXT (Allison et al., 1999) [PAGE 1-2]
- BFR training: twice weekly, 20 min, 8 weeks, 50-60% HRR, KAATSU C3 device, thigh cuffs ≈5 cm width, pressures up to 250 mmHg constant mode [PAGE 4]
- Outcomes: ET-1 decreased 1.32±0.23 to 1.14±0.33 pg/mL (p<0.05), hs-CRP 0.93±0.82 to 0.39±0.23 (p<0.05), NT-proBNP 32.3±27.2 to 24.0±18.6 (p<0.05), NO no significant change [PAGE 5-6]
- SBPmax decreased 223.8±9.0 to 182.2±16.6 mmHg [PAGE 6 Table 3]
- VO2max increased 45.5±9.5 to 49.6±7.9 ml/kg/min [PAGE 6 Table 3]
- RPP and PP reduced [PAGE 5-6 Table 4]
- Non-randomized group allocation [PAGE 2]
- Secondary analysis, no a priori sample size calculation [PAGE 2]
- Limitations: cuff pressure not individualized to AOP, medication not strictly standardized, etc. [PAGE 7-8]

I need to produce formal LaTeX equations. Real equations relevant to this:
- Rate-pressure product: RPP = SBP × HR (units mmHg·bpm). The paper says values divided by 100 for presentation [PAGE 6 Table 4 note].
- Pulse pressure: PP = SBP - DBP (mmHg).
- Karvonen formula: HR_target = HR_rest + %HRR × (HR_max - HR_rest) [PAGE 4 mentions Karvonen formula].
- Hemodynamic load/work: myocardial oxygen demand proxy ∝ RPP.
- Endothelin-1 → vasoconstriction, NF-κB → IL-6 → hs-CRP pathway (from Discussion [PAGE 7]).
- VO2max in ml/kg/min.
- Blood pressure mmHg.
- ET-1 pg/mL, hs-CRP mg/L presumably (units not explicitly stated but standard), NT-proBNP pg/mL or pg/mL? Paper says 32.3 ± 27.2 pre to 24.0 ± 18.6 post. Units not explicitly in text but likely pg/mL for NT-proBNP and mg/L for hs-CRP. I should be careful not to invent units if not stated, but I can note them as reported or standard. The paper says CV for ET-1 reference range 0.401-2.83 pg/mL [PAGE 5]. hs-CRP and NT-proBNP CV <5% [PAGE 5]. NO levels: 78.7 ± 59.2 to 63.9 ± 64.6 (units not stated, likely μmol/L or similar but I won't invent). I'll cite what's there.

Breakdown regimes/singularity:
- Cuff pressure 250 mmHg constant mode limited to 20 consecutive minutes [PAGE 4].
- If capillary refill >3 seconds (skin color doesn't return white→red within 3s), pressure lowered 250→230 mmHg [PAGE 4].
- EIH threshold SBP ≥210 mmHg [PAGE 1-2].
- BFR pressure not individualized to AOP (arterial occlusion pressure) [PAGE 7-8].
- Sample size secondary analysis, no a priori power [PAGE 2].
- p < 0.05 significance, Bonferroni correction post-hoc [PAGE 4].

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400 words.

I must not mention betting. This is a sports science paper about hypertension, not betting, so easy to avoid.

Structure:
<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit. Discuss causal chain: BFR → ischemia-reperfusion → shear stress → eNOS → endothelial function → ↓ET-1 → ↓NF-κB/IL-6 → ↓hs-CRP; ↓SBPmax → ↓RPP → ↓myocardial O2 demand → ↓NT-proBNP. Gray zones: non-randomized allocation, secondary analysis, fixed cuff pressure not AOP, medication confounding, NO null result despite ET-1 drop, small N, multiple comparisons (4 biomarkers) Type I error, circadian control (evening sessions), habitual training not standardized, pre-analytical variables. Audit the statistics: interaction effects, partial eta squared values, Table 3/4 discrepancies (DBPrest values appear duplicated/copy-paste errors? Note: Table 3 shows DBPrest BFRTg post 84.7±7.3 and non-BFRTg post 87.0±4.5 which matches Table 3 but also appears as HRmax post? Wait Table 3 has some weird rows: HRmax BFRTg 161.6→159.1, non-BFRTg 162.5→164.5; DBPrest BFRTg 82.1→84.7, non-BFRTg 78.7→87.0; but then DBPmax BFRTg 82.1→84.7 which seems identical to DBPrest row? That looks like a table typo in source. I should flag this as gray-zone/data integrity issue without being overly accusatory—note apparent row duplication between DBPrest and DBPmax for BFRTg post values [PAGE 6]. Also RRPP non-BFRTg pre 124.9±96.4 seems huge SD vs mean, likely typo [PAGE 5-6]. These are gray zones.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX:
- RPP = SBP × HR [mmHg·bpm], presented scaled by 10^-2.
- PP = SBP - DBP [mmHg].
- HR_T = HR_R + φ(HR_M - HR_R), φ ∈ {0.50, 0.60}.
- Two-way repeated measures ANOVA model: Y_ijk = μ + α_i + β_j + (αβ)_ij + ε_ijk.
- Partial eta squared: η_p² = SS_effect / (SS_effect + SS_error).
- Shapiro-Wilk normality; Mann-Whitney U / Wilcoxon if violated.
- Bonferroni-adjusted alpha.
- Endothelin-1 → NF-κB → IL-6 → hepatic hs-CRP synthesis (causal chain, not equation but formal).
- Units: mmHg, bpm, ml·kg⁻¹·min⁻¹, pg/mL, mg/L (hs-CRP standard), seconds, cm, kg.
- Page citations: [PAGE 1], [PAGE 2], [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 7], [PAGE 8].
- Breakdown regimes: SBP ≥210 mmHg defines EIH [PAGE 1]; cuff pressure safety abort if capillary refill >3s, 250→230 mmHg [PAGE 4]; constant mode ≤20 min [PAGE 4]; no AOP individualization [PAGE 7-8]; N=28 secondary analysis no a priori power [PAGE 2]; p<0.05 threshold [PAGE 4].

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical lineage: Allison et al. 1999 EIH definition [PAGE 1]; Gottdiener et al. 1990 LVH [PAGE 1]; Singh et al. 1999 Framingham [PAGE 1]; Schultz et al. 2013 meta-analysis [PAGE 1]; Weiss et al. 2010 [PAGE 1]; Kim et al. 2020 coronary plaque [PAGE 1]; Abe et al. 2006 KAATSU walk [PAGE 4 references]; Shimizu et al. 2016 BFR endothelial function [PAGE 1, 7]; Patterson et al. 2019 BFR guidelines [PAGE 4, 7]; Lüscher & Barton 2000 endothelin [PAGE 7]; Dhaun et al. 2012 ET-1/NF-κB/IL-6 [PAGE 7]; Ridker 2016 hs-CRP [PAGE 7]; Kim et al. 2025a prior cohort [PAGE 2]; Kim et al. 2025b acute exercise biomarkers [PAGE 7]. Multi-week traps: 8-week duration may be insufficient for structural vascular remodeling; biomarker half-lives (NT-proBNP, hs-CRP) vs acute exercise confounding; the transition from week 2 cyclic to constant mode at 250 mmHg represents a step-change in ischemic load not titrated to individual AOP [PAGE 4]; decay of adaptation post-intervention not measured (no follow-up), so "retrocausal" implication—that prior biomarker elevations predicted current risk—cannot be confirmed longitudinally.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: middle-aged runners with EIH have entrenched high-volume endurance training habits; when confronted with EIH diagnosis, habitual response is to push through or maintain ≥30 min sessions >2x/week [PAGE 3 inclusion criteria]. BFR introduces a counter-trap: low-intensity (40-60% HRR) treadmill with occlusion, which violates the athlete's "more intensity = better" schema. The recursive ToM: coach/athlete models the intervention as "easy" and thus potentially ineffective; the physiological reality is that metabolic stress under partial occlusion drives adaptation at low external load. Clock: sessions fixed 18:00-21:00 to control circadian rhythm [PAGE 4]; blood draws 08:00-10:00 fasted [PAGE 4]; 48h between sessions; 8-week horizon. Crisis regression risk: if athlete perceives BFR as insufficient stimulus, they may revert to habitual high-intensity running, reintroducing hemodynamic load (↑SBPmax, ↑RPP) and biomarker rebound (↑ET-1, ↑NT-proBNP as seen in Kim et al. 2012, 2013, 2025b [PAGE 7]).

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof:
- Indoor ambient temperature ~23°C, RH 40-50% [PAGE 4]; weather veto: none (indoor treadmill), eliminating thermal/vasomotor confounding.
- Biomechanical: treadmill Bruce protocol, 3-min stages [PAGE 3]; cuff on proximal upper thigh, width ≈5 cm [PAGE 4]; narrow-width cuff may require higher pressure to achieve occlusion [implicit]; fixed pressure 150-260 mmHg not individualized to Doppler AOP [PAGE 7-8] is a biomechanical veto candidate—over-occlusion risk in smaller arteries, under-occlusion in larger.
- Physical: no adverse events [PAGE 4]; capillary refill safety check >3s abort [PAGE 4].
- Veto adjudication: The fixed-pressure protocol passes safety (no adverse events) but fails precision veto (not AOP-based). Medication layer: antihypertensive use not standardized [PAGE 8], residual confounding veto applies to SBPmax and biomarker outcomes. Biomarker layer: single time-point NO, no FMD [PAGE 8] is a measurement veto.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions:
1. Veto: Re-run analysis with AOP-individualized cuff pressure (e.g., 80% AOP) instead of fixed 250 mmHg constant mode. Prediction: ET-1 and NT-proBNP reductions in BFRTg attenuate or become non-significant because fixed 250 mmHg may have been supra-therapeutic for some and sub-therapeutic for others; the observed interaction (η_p² = 0.178 for ET-1 [PAGE 6]) would shrink.
2. Veto: Exclude participants on antihypertensive medication (5 in BFRTg, 3 in non-BFRTg had hypertension [PAGE 3 Table 1]) and re-test SBPmax interaction. Prediction: SBPmax reduction in BFRTg (223.8→182.2 mmHg [PAGE 6]) diminishes because medication-induced BP lowering confounds the training effect; Time×Group p may rise above 0.05.
3. Veto: Extend washout/control period to 16 weeks with no training change in non-BFRTg and add follow-up at 12 weeks post-intervention. Prediction: Non-BFRTg NT-proBNP increase (20.2→38.0 [PAGE 6]) reflects regression to mean or seasonal variation; with longer control, BFRTg NT-proBNP benefit may not persist beyond 8 weeks, indicating acute hemodynamic unloading rather than structural remodeling.

I need to ensure total word count >=1000. Let's draft carefully. Also need verbatim quotes? The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include a few verbatim quotes with page markers.

Let me start writing.

Need to be careful: Table 3 note says RRPP and MRPP values divided by 100 for presentation [PAGE 6]. So actual RPP values are 100× table values? Wait table note: "RRPP and MRPP values were divided by 100 for presentation". So table shows 132.0 but actual is 13200 mmHg·bpm? That seems odd because SBP×HR ≈ 223×161 ≈ 35900. Divided by 100 = 359. Table shows MRPP 362.2. Yes, so table values are actual/100. I'll note this scaling.

Let's write.

Word count estimation: THINK_TRACE needs >=400 words. Other sections substantial. Total >1000.

I'll avoid any betting language.

Let's compose the response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs a causal chain that runs from an exogenous mechanical stimulus (external pneumatic cuff pressure on the thigh) to systemic circulating biomarkers. Step 1: BFR at 50–60% HRR with thigh cuff pressures cycling between roughly 150–300 mmHg and holding at ≈250 mmHg creates transient limb ischemia during low-intensity treadmill walking/jogging [PAGE 4]. Step 2: Ischemia–reperfusion cycles elevate shear stress on the vascular endothelium, which the authors argue increases eNOS activity and endothelial function [PAGE 7, citing Green et al., 2017; Shimizu et al., 2016]. Step 3: Improved endothelial regulation suppresses endothelin-1 (ET-1), a potent vasoconstrictor that drives vascular smooth-muscle proliferation and activates NF-κB, thereby increasing IL-6 and hepatic hs-CRP synthesis [PAGE 7, citing Lüscher & Barton, 2000; Dhaun et al., 2012; Ridker, 2016]. Step 4: Lower maximal systolic blood pressure (SBPmax) reduces rate-pressure product (RPP = SBP × HR), an index of myocardial oxygen demand, which in turn lowers myocardial wall stress reflected by NT-proBNP [PAGE 6–7]. The reported effect sizes are non-trivial: ET-1 Time×Group interaction p = 0.025, η_p² = 0.178; hs-CRP p = 0.047, η_p² = 0.143; NT-proBNP p = 0.007, η_p² = 0.250 [PAGE 6, Figures 2–4]. SBPmax fell from 223.8 ± 9.0 to 182.2 mmHg in BFRTg versus 219.0 → 212.0 mmHg in controls [PAGE 6, Table 3].

Gray-zone audit reveals multiple threats to the strength of that chain. First, group allocation was explicitly non-randomized: participants who chose the BFR program were assigned to BFRTg (n=16), decliners formed non-BFRTg (n=12) [PAGE 2]. Second, this is a secondary analysis with no a priori sample-size calculation; N=28 is the residue of exclusions from an initial 72 volunteers [PAGE 2]. Third, Table 3 contains apparent transcription anomalies: DBPrest and DBPmax rows for BFRTg post-values are identical (84.7 ± 7.3), and non-BFRTg RRPP pre-intervention is listed as 124.9 ± 96.4, a standard deviation larger than the mean [PAGE 5–6, Table 3]. Fourth, four biomarkers were tested without correction explicitly described beyond Bonferroni post-hocs, raising Type-I error risk acknowledged by the authors [PAGE 8]. Fifth, antihypertensive medication use was not standardized (hypertension prevalence: 31.3% BFRTg vs 25.0% non-BFRTg), leaving residual confounding on SBPmax and RPP [PAGE 3, Table 1; PAGE 8]. Sixth, cuff pressure was fixed or progressively increased to 250 mmHg without individualization to Doppler-derived arterial occlusion pressure (AOP), contrary to current BFR guidelines [PAGE 7–8]. Seventh, NO did not change significantly (interaction p = 0.481, η_p² = 0.019) despite ET-1 falling [PAGE 6, Figure 5], which the authors rationalize by citing dissociation between basal NO metabolites and endothelial function [PAGE 7–8]. These gray zones do not falsify the findings, but they delimit the causal claim to an exploratory, hypothesis-generating secondary analysis rather than a confirmatory efficacy trial.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

Formal operators and units extracted from the source, with page citations.

Hemodynamic operators:
\[
\text{RPP} = \text{SBP} \times \text{HR} \quad [\text{mmHg}\cdot\text{bpm}]
\]
The manuscript notes that RRPP and MRPP tabular values were divided by 100 for presentation [PAGE 6, Table 4 note]; thus the displayed maximal RPP of 362.2 corresponds to approximately 36,220 mmHg·bpm pre-intervention in BFRTg.

\[
\text{PP} = \text{SBP} - \text{DBP} \quad [\text{mmHg}]
\]

Training intensity prescription via the Karvonen formula [PAGE 4]:
\[
\text{HR}_{\text{target}} = \text{HR}_{\text{rest}} + \phi \left( \text{HR}_{\text{max}} - \text{HR}_{\text{rest}} \right), \quad \phi \in \{0.50,\, 0.60\}
\]
Sessions: 20 min, twice weekly, 8 weeks, at least 48 h apart, 18:00–21:00, ambient ≈23°C, RH ≈40–50% [PAGE 4].

Pressure-mode safety rule (biomechanical abort criterion) [PAGE 4]:
\[
\text{if } t_{\text{capillary refill}} > 3\text{ s} \Rightarrow P_{\text{cuff}}: 250 \rightarrow 230\text{ mmHg}
\]
Constant-mode occlusion capped at 20 consecutive minutes [PAGE 4].

EIH diagnostic threshold [PAGE 1–2]:
\[
\text{SBP}_{\text{max}} \ge 210\text{ mmHg during GXT (Bruce protocol)}
\]

Statistical model: two-way repeated-measures ANOVA [PAGE 4]:
\[
Y_{ijk} = \mu + \alpha_i + \beta_j + (\alpha\beta)_{ij} + \varepsilon_{ijk}
\]
with partial eta squared:
\[
\eta_p^2 = \frac{SS_{\text{effect}}}{SS_{\text{effect}} + SS_{\text{error}}}
\]
Normality via Shapiro–Wilk; fallback to Mann–Whitney U / Wilcoxon signed-rank; Bonferroni-corrected post-hocs; significance \(p < 0.05\) [PAGE 4].

Biochemical pathway (formalized as a directed dependency, not a toy ratio) [PAGE 7]:
\[
\text{ET-1} \rightarrow \text{NF-}\kappa\text{B} \rightarrow \text{IL-6} \rightarrow \text{hepatic hs-CRP synthesis}
\]
ET-1 assay reference range 0.401–2.83 pg/mL, CV 6.7% [PAGE 5]; hs-CRP and NT-proBNP CV < 5% [PAGE 5].

Breakdown / singularity regimes:
1. Diagnostic singularity: SBPmax ≥210 mmHg defines EIH [PAGE 1].
2. Cuff-pressure singularity: fixed 250 mmHg constant mode not individualized to AOP [PAGE 7–8].
3. Safety singularity: capillary refill >3 s triggers pressure reduction [PAGE 4].
4. Statistical singularity: secondary analysis, N=28, no a priori power; underpowered for small biomarker effects [PAGE 2, 8].
5. Temporal singularity: biomarkers measured at a single pre/post time point; NO single time point only; no FMD [PAGE 8].

Verbatim anchors: "Participants whose maximal systolic blood pressure (SBP) increased to ≥210 mmHg during the GXT were classified as having exercise-induced hypertension" [PAGE 2]; "No adverse events were observed during the intervention period" [PAGE 4]; "the sample size may have been insufficient to detect small effect sizes for certain biomarkers" [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

Historical and scientific lineage. The EIH construct traces to Allison et al. (1999), defining exercise-induced systemic hypertension via exaggerated SBP response and linking it to prognosis [PAGE 1]. Gottdiener et al. (1990) tied exaggerated exercise pressure to left ventricular hypertrophy [PAGE 1]; Singh et al. (1999) framed treadmill blood-pressure response as a predictor of new-onset hypertension [PAGE 1]; Schultz et al. (2013) and Weiss et al. (2010) connected EIH to cardiovascular events and mortality [PAGE 1]. In the athletic subpopulation, Kim et al. (2020) documented coronary artery plaque in middle-aged male marathon runners with EIH [PAGE 1]; Gwag et al. (2024) associated excessive pressure rise with cardiovascular remodeling [PAGE 1–2]. The present work builds directly on Kim et al. (2025a), the prior cohort in which BFR reduced maximal exercise blood pressure and myocardial workload in runners with EIH [PAGE 2], and Kim et al. (2025b) on acute exercise bouts elevating NT-proBNP and superoxide dismutase in this population [PAGE 7].

BFR lineage: Abe et al. (2006) established KAATSU walk training with restricted venous flow [PAGE 4 references]; Shimizu et al. (2016) showed low-intensity BFR improves vascular endothelial function in the elderly [PAGE 1, 7]; Patterson et al. (2019) provided methodological and safety guidelines, including AOP-based pressure prescription [PAGE 4, 7]. Endothelial-inflammation lineage: Lüscher & Barton (2000) on endothelin receptor antagonism and atherosclerosis [PAGE 7]; Dhaun et al. (2012) on ET-1 activating NF-κB and IL-6 [PAGE 7]; Ridker (2016) on IL-6 to hs-CRP to atheroprotection [PAGE 7].

Multi-week traps embedded in the design. The intervention spans exactly 8 weeks [PAGE 4], which is sufficient for acute hemodynamic unloading but may be below the timescale required for structural arterial remodeling or sustained biomarker normalization. The pressure protocol itself changes discontinuously across weeks: Week 1 uses low-cycle adaptation (≈150→220 mmHg), Week 2 introduces constant-mode ≈250 mmHg for 10 min, and Weeks 3–8 add ≈15 min of constant 250 mmHg after a brief cyclic sequence [PAGE 4, Table 2]. This step-function increase in ischemic load is not titrated to individual AOP, creating a "dosage cliff" in week 2–3 that may recruit different physiological subsystems across participants. Biomarker half-lives and acute-exercise confounding are unaddressed: NT-proBNP and hs-CRP can fluctuate with recent training load, hydration, and circadian phase [PAGE 8]. Because no follow-up beyond post-intervention is reported, the retro-causal implication—that prior marathon-related biomarker elevations (Kim et al., 2012, 2013, 2025b [PAGE 7]) are reversible via BFR—remains inferential rather than demonstrated.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

Crisis habit regression. The cohort comprises experienced middle-aged endurance runners (mean 15.5–18.2 years running, 54–66 marathons, 80+ min/day) whose habitual schema equates training value with external load and duration [PAGE 3, Table 1]. An EIH diagnosis (SBPmax ≥210 mmHg [PAGE 2]) creates a crisis: continuing habitual high-volume running risks repeated myocardial wall stress, evidenced by prior work showing NT-proBNP surges after marathons and 100-km races in EIH athletes [PAGE 7]. The standard athlete regression under crisis is to either persist unchanged or self-prescribe pharmacological RAAS blockade, neither of which was systematically standardized here [PAGE 1, 8].

Counter-trap introduced by BFR. The intervention prescribes low external intensity (40–60% HRR [PAGE 4]) combined with high localized cuff pressure (up to 250 mmHg [PAGE 4]). This violates the athlete's intuitive model that cardiovascular benefit requires high metabolic rate or high running speed. The recursive theory of mind operates at two levels: (1) the athlete/coach may perceive BFR as an "easy" placebo and therefore under-adhere or covertly add high-intensity sessions, reintroducing hemodynamic load; (2) the investigator assumes that metabolic stress under partial occlusion can substitute for high external load, an assumption that depends on the ischemic stimulus being individually titrated—a condition not met because pressure was not AOP-individualized [PAGE 7–8].

Clock layer. All training occurred 18:00–21:00 to control circadian variation in exercise response [PAGE 4]; blood draws occurred 08:00–10:00 after an overnight fast [PAGE 4]; sessions were spaced ≥48 h apart [PAGE 4]. This temporal regimentation is a defensive clock against diurnal and recovery confounding, but it does not constrain weekend habitual training, which was not strictly standardized [PAGE 8]. If a participant regresses to crisis habit—resuming high-intensity interval training or long runs between BFR sessions—the observed reductions in SBPmax, RPP, and NT-proBNP may reflect the subtraction of habitual load rather than an additive BFR effect, especially since non-BFRTg maintained habitual routines [PAGE 3].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

Physical layer. Testing and training occurred indoors on a motorized treadmill at ≈23°C and 40–50% RH [PAGE 4], which constitutes a weather veto: thermal stress, humidity-driven plasma-volume shifts, and cold-pressor-like vascular responses are excluded as confounders. The Bruce protocol with 3-minute stages and breath-by-breath gas analysis (Quark CPET) [PAGE 3] standardizes the physical stimulus for GXT.

Biomechanical layer. Cuffs were narrow-width (≈5 cm) KAATSU pneumatic thigh cuffs [PAGE 4]. Narrow cuffs require higher absolute pressure to occlude deeper femoral vasculature than wide cuffs, yet the protocol applied fixed pressures (150–300 mmHg cyclic, 250 mmHg constant) without Doppler-derived AOP individualization [PAGE 7–8]. This is a live biomechanical veto: for runners with larger thigh circumference, 250 mmHg may under-occlude (insufficient stimulus), while for smaller runners it may over-occlude (excessive ischemia risk). The capillary-refill safety check (>3 s abort, 250→230 mmHg [PAGE 4]) mitigates acute risk but does not resolve inter-individual dosing heterogeneity. No adverse events were observed [PAGE 4], which passes a safety veto but not a precision veto.

Physiological/pharmacological layer. Antihypertensive medication use and blood-pressure control were not strictly standardized [PAGE 8]; Table 1 shows hypertension in 31.3% of BFRTg vs 25.0% of non-BFRTg [PAGE 3]. This is a residual-confounding veto on the primary hemodynamic outcome (SBPmax) and on ET-1/hs-CRP/NT-proBNP, because medication can independently lower pressure and inflammation.

Biomarker measurement layer. NO was assessed at a single time point; no flow-mediated dilation (FMD) or dynamic NO-metabolite response was included [PAGE 8]. Pre-analytical variables (hydration, centrifugation delays, storage) were not fully controlled [PAGE 8]. These constitute measurement vetoes that weaken the claim of improved endothelial function specifically via NO.

Veto adjudication summary. The indoor environmental controls and safety monitoring pass physical and acute-safety vetoes. The fixed-pressure, non-AOP, non-randomized, medicated-cohort design fails precision and causal-isolation vetoes. Therefore the paper's conclusion is best adjudicated as "plausible signal requiring confirmation in an AOP-individualized, randomized, medication-stratified trial" rather than established efficacy.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

Three verifiable counterfactual veto scenarios with falsifiable predictions:

Veto Scenario 1 — AOP individualization counterfactual. Re-analyze or re-run the trial replacing fixed 250 mmHg constant-mode pressure with pressure set at a fixed percentage of Doppler-derived arterial occlusion pressure (e.g., 40–80% AOP per Patterson et al., 2019 [PAGE 7]). Verifiable procedure: measure limb occlusion pressure at baseline for each runner; prescribe cuff pressure relative to that individual threshold; repeat the 8-week protocol. Prediction: the BFRTg Time×Group interaction for ET-1 (p = 0.025, η_p² = 0.178 [PAGE 6]) will attenuate toward null or become non-significant, because fixed 250 mmHg was likely supra-therapeutic for some participants and sub-therapeutic for others, inflating apparent between-group separation through dosing heterogeneity rather than a uniform biological effect.

Veto Scenario 2 — Medication-stratification counterfactual. Exclude all participants using antihypertensive medication or stratify by medication status; the baseline Table 1 shows 5 of 16 BFRTg and 3 of 12 non-BFRTg had hypertension [PAGE 3]. Verifiable procedure: re-run the two-way repeated-measures ANOVA on SBPmax and RPP in the medication-free subsample only. Prediction: the BFRTg SBPmax reduction (223.8 ± 9.0 → 182.2 ± 16.6 mmHg [PAGE 6, Table 3]) will shrink substantially, and the Time×Group interaction p-value will exceed 0.05, indicating that part of the observed hemodynamic benefit was confounded by pharmacological blood-pressure lowering rather than BFR training alone.

Veto Scenario 3 — Extended-control durability counterfactual. Extend the observation window to 16 weeks with the non-BFRTg maintaining habitual training, then add a 12-week post-intervention follow-up for BFRTg with no further BFR. Verifiable procedure: measure SBPmax, RPP, ET-1, hs-CRP, and NT-proBNP at baseline, week 8, and week 20. Prediction: the non-BFRTg NT-proBNP increase (20.2 ± 15.7 → 38.0 ± 39.6 [PAGE 6]) reflects regression-to-mean or seasonal variation rather than a true training effect; with an extended control period, the between-group NT-proBNP separation (p = 0.007, η_p² = 0.250 [PAGE 6]) will narrow at follow-up, showing that BFR produced transient hemodynamic unloading without durable structural myocardial adaptation.
</RLVR_COUNTERFACTUAL_VETOES>