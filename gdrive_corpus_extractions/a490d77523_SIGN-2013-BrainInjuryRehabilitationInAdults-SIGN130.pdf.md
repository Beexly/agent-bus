---
source: "SIGN-2013-BrainInjuryRehabilitationInAdults-SIGN130.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-b-medical"
pages: 75
model: deepseek/deepseek-v4.1-flash-1017
words: 7739
---

<NATIVE_REASONING>
We need answer to user. They provided DRIVE SOURCE and pages. They want GSE+GSI Frontier Reasoning Foundry with strict XML sections, >=1000 words, no betting lines. Need likely analyze source? But prompt is weird: source is SIGN brain injury guideline. They ask sections: THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. Need produce deep multi-hop derivation & gray-zone audit citing exact pages and verbatim quotes. No betting lines. Need formal LaTeX equations, SI/information/probability units, assumptions, breakdown regimes. Need >=1000 words. Need probably treat source as evidence corpus for "GSE/GSI" maybe generalized semantic extraction? But no specific question. We need infer task: likely produce an analysis of the document, with source operators and equations, historical lineage, theory of mind, cross-layer veto, RLVR counterfactual vetoes. Must not mention odds/spreads/totals/moneylines. Need cite exact pages. Need be truthful: document is clinical guideline, not sports. We can frame as "evidence-grade synthesis operator over SIGN 130". Need avoid inventing fake ratios. Need define formal equations meaningful. Could use evidence-level mapping, diagnostic criteria probabilities, recovery time distributions, GCS thresholds, CRS-R. Need operators/equations. Need cite exact [PAGE N] and verbatim quotes. Need multiple sections. Must be >=1000 words. Desired oververbosity 5. Need maybe 1800-2500 words. Need include THINK_TRACE >=400 words. Other sections. Need no betting lines. Need mention no line/odds.

Need parse source. Key facts: SIGN 130 Brain injury rehabilitation adults March 2013. Levels of evidence 1++ to 4; grades A-D and GPP. Recommendations. Mild TBI WHO criteria, GCS 13-15, loss consciousness <=30 min, PTA <24h, etc [PAGE 15]. Reassurance settle within 3 months [PAGE 14,16]. Cognitive deficits not beyond 3 months except complicated [PAGE 16]. PTSD noncausal, mental state [PAGE17]. Cranial imaging not routine [PAGE17]. Antidepressants may be considered [PAGE18], CBT persistent [PAGE19]. Physical rehab: treadmill not preference [PAGE20]; repetitive task-oriented [PAGE21]; spasticity casting effects decay [PAGE22], BoNT [PAGE23], oral [PAGE24]. Cognitive: memory compensatory [PAGE27], attention strategy [PAGE27], executive metacognitive [PAGE28], holistic [PAGE28]. Behavior: exclude remediable causes [PAGE29], beta-blockers [PAGE30], CBT anxiety [PAGE32]. Communication SLT [PAGE36], instrumental dysphagia [PAGE36], oral hygiene no evidence [PAGE37]. Vocational [PAGE38-39]. MCS/VS definitions [PAGE40-41], CRS-R [PAGE41], amantadine [PAGE42]. Service delivery [PAGE44-45], discharge [PAGE48-50], telemedicine [PAGE47-48]. Need equations.

Potential formal operators:
- Evidence grade mapping: G: E→{A,B,C,D,GPP}. But not fake ratio; okay.
- Diagnostic criteria for MTBI as Boolean conjunction: MTBI = (GCS_30min ∈[13,15]) ∧ (LOC≤30 min ∨ PTA<24h ∨ confusion/disorientation ∨ transient neuro abnormalities) ∧ ¬(drugs/alcohol/etc) ∧ ¬(penetrating). Units: GCS dimensionless ordinal, LOC minutes, PTA hours.
- Recovery probability: P(symptom persists > t | uncomplicated MTBI) decreasing; guideline says overwhelming majority remit within 2-3 months. Could define S(t)=P(T_symptom>t), with S(90d) low for uncomplicated. Don't invent numbers. Could say qualitative.
- CRS-R assessment: ordered score, use for states of disordered consciousness. Formal: D_i(t)=CRS-R; diagnosis VS/MCS via criteria. Could define MCS if ∃ behavior b in set B_MCS with reproducible evidence; VS if no awareness and sleep-wake. Need no fake ratio.
- Spasticity treatment decay: casting effect Δθ(t) degrees, measured at t0, t1, t4wk; quote values: 22°, 11°, 2°. Equation: Δθ(t)=θ_control(t)-θ_cast(t), units degrees; p-values. Breakdown: effect lost after discontinuation. Cite PAGE22.
- BoNT effect: modified Ashworth 2.6→1.4 p=0.00003; walking velocity p=0.037 [PAGE23].
- Amantadine: CRS-R rate difference during 4 wk, lost by 6 wk [PAGE42].
- Discharge/community: percentages 47% vs 21% p=0.02 [PAGE46], Barthel 35% vs20% p<0.05 [PAGE46].
Need "information units" maybe use nats/bits? Could define evidence uncertainty H(E) in bits from GRADE? But avoid fake equations. We can state information-theoretic audit: H(X) = -Σ p log2 p, units bits; apply to diagnostic uncertainty? Is that okay? It's formal, not fake ratio. Need assumptions. Could mention not computed from source because probabilities not reported. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof." Since source is clinical, "weather" irrelevant. Need adjudicate physical/biomechanical veto: e.g., spasticity, contracture, gait, dysphagia aspiration, consciousness. Weather not in source; declare no weather-related evidence, so no veto can be sourced; avoid fabricating. Need "veto proof" as evidence-based gates: before behavior therapy exclude pain, urinary retention, constipation [PAGE29]; before walking aids assess harms [PAGE22]; treadmill not preferred [PAGE20]; instrumental dysphagia when bedside inadequate [PAGE36]; CRS-R required for consciousness [PAGE41]. This section should state physical/biomechanical vetoes override cognitive/behavioral recommendations if present. Weather: no source, so no adjudication; if environmental weather, no evidence in SIGN 130, veto cannot be admitted.

Need "RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock." Need interpret. In clinical context: patient insight/awareness, family/carer support, behavior. "Crisis habit regression" maybe regression to old habits under stress; "counter-trap" maybe avoid reinforcing agitation; "clock" maybe time since injury (3 months, 12 months, 6 weeks, etc). Need discuss recursive ToM: clinician models patient's model of their deficits, family models, etc. Cite self-awareness section [PAGE26-27], challenging behavior [PAGE29-30], family education [PAGE30], depression/anxiety [PAGE30-32], discharge [PAGE47]. Need use "clock" as temporal gates: 3 months MTBI reassurance [PAGE16], 12 months VS permanence traumatic [PAGE40], 6 weeks amantadine difference gone [PAGE42], 6 months incontinence 18% [PAGE25]. Formal maybe T_clock thresholds. Need no betting.

Need "RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps." Discuss lineage: WHO task force MTBI 2004, Giacino MCS 2002, CRS-R 2010, amantadine NEJM 2012, SIGN 110/118/119, ERABI, BSRM/RCP. Multi-week traps: early gains don't persist (casting 4 weeks, amantadine 6 weeks, intensive rehab early gains no LOS difference, telephone counseling inconsistent), litigation poor prognostic factor, recall bias, post-concussional syndrome not specific. Cite pages. Need mention "multi-week traps" as temporal decay/regression to mean and confounding.

Need "RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions." Need define RLVR? Reinforcement Learning from Verifiable Rewards? We need create 3 scenarios with verifiable predictions. Must not be betting. Scenarios: 1) MTBI case with non-specific symptoms <3 months: if model recommends routine cranial imaging/cognitive assessment, veto by guideline B recommendation [PAGE17]; prediction: compliant answer recommends reassurance, no routine imaging. 2) Severe TBI with focal spasticity: if model recommends oral baclofen first-line over BoNT despite focal spasticity, veto? Actually BoNT may be considered [PAGE23], oral may be considered [PAGE24]. Prediction: answer includes MDT and BoNT where focal. 3) Vegetative state assessment: if model asserts diagnosis without CRS-R or calls "persistent" too early, veto by CRS-R B [PAGE41] and permanence >12 months traumatic [PAGE40]. 4) Treadmill training preference: veto [PAGE20]. Need 3. Predictions verifiable by matching recommendations and citations. Use "RLVR" with reward function: R = 1 if output contains guideline-concordant recommendation and no prohibited claim. Need maybe formal: Veto indicator V=1 if claim conflicts with level B/D recommendation. Units: Boolean, no odds. Great.

Need THINK_TRACE >=400 words. Could include deep derivation. Need include page citations and verbatim quotes. Need ensure all sections present exactly XML tags. Need maybe no markdown? XML sections with content. Need at least 1000 words. Need no betting lines. Need mention "ZERO BETTING LINES" maybe not necessary. Need avoid fake ratios. Formal LaTeX equations. Need cite exact [PAGE N] markers and verbatim quotes. Need use quotes from source exactly. Need ensure quotes accurate. Let's compile exact quotes with page numbers:

PAGE14: "Patients presenting with non-specific symptoms following mild traumatic brain injury should be reassured that the symptoms are benign and likely to settle within three months." [PAGE 14] (Key rec). Actually page 14 is page 8? Source says PAGE 14 of 75 has section 2 key recommendations and quote. Good.

PAGE15: WHO definition quote: "Mild traumatic brain injury is an acute brain injury resulting from mechanical energy to the head from external force. Operational criteria for clinical identification include: (i). One or more of the following: confusion or disorientation, loss of consciousness for 30 minutes or less, post-traumatic amnesia for less than 24 hours, and/or other transient neurological abnormalities such as focal signs, seizure, and intracranial lesion not requiring surgery; AND (ii). GCS score of 13-15 after 30 minutes post head injury or later upon presentation for health care." [PAGE 15]. Good.

PAGE16: "In the overwhelming majority of cases symptoms will remit within two to three months of injury." and "In adults, evidence consistently suggests there are no MTBI-attributable cognitive deficits beyond three months after injury. However, those with complicated MTBI, ie with associated skull fractures or intracranial lesions may have significant cognitive deficits." [PAGE 16]. Also "Cranial imaging is not routinely recommended for the assessment of post-acute mild brain injury, but should be considered in an atypical case." [PAGE 17] actually PAGE17. Need cite.

PAGE17: "Referral for cognitive (psychometric) assessment is not routinely recommended after MTBI." and "If a cognitive assessment has been conducted clinicians should be aware that false positives can occur and that results may be unreliable in the absence of effort testing." [PAGE 17]. "As PTSD and other psychiatric disorders may contribute..." [PAGE17]. "Cranial imaging is not routinely recommended..." [PAGE17]. Good.

PAGE18: "Antidepressants may be considered for symptom relief after MTBI." [PAGE18]. "Referral for cognitive behavioural therapy following MTBI may be considered in patients with persistent symptoms who fail to respond to reassurance and encouragement from a general practitioner after three months." [PAGE19] actually PAGE19. Need cite PAGE19.

PAGE20: "Patients with TBI receiving gait training should not undergo treadmill training in preference to conventional overground training." [PAGE20]. Good.
PAGE21: "Repetitive task-oriented activities are recommended for improving functional ability, such as sit-to-stand or fine motor control." [PAGE21]. Good.
PAGE22: casting quote: "One trial (n=26) showed that casting reduced elbow flexion contracture by an average of 22 degrees (95% confidence interval (CI) 13 to 31 degrees; p<0.001) compared with the positioning (control) group. One day later this effect had decreased to 11 degrees (95% CI, 0 to 21 degrees; p=0.052). The effect had almost completely disappeared at the four-week follow up (mean 2 degrees, 95% CI -13 to 17 degrees; p=0.782)." [PAGE22]. Also "Casts, splints and passive stretching may be considered in cases where contracture and deformity are progressive." [PAGE23? Actually PAGE23 top? Wait page 22 ends with references? Let's see PAGE22 has 4.2.1 and quote, then PAGE23 begins "One further RCT..." and has recommendation C at top? Actually PAGE22 bottom includes "1++ 2+ 3 1+"? Wait recommendation "Casts, splints and passive stretching may be considered..." is on PAGE23? Source PAGE23 starts "| 17 One further RCT..." then after BoNT? Wait PAGE22 includes section 4.2.1 and casting quote, then PAGE23 includes "One further RCT (n=35)..." and "Hand splinting..." and then C recommendation. So cite PAGE23 for recommendation. But quote casting is PAGE22. Good.
PAGE23: "BoNT may be considered to reduce tone and deformity in patients with focal spasticity." and "BoNT should be used in a multidisciplinary setting..." [PAGE23]. Good.
PAGE24: "Oral baclofen or tizanidine may be considered for treatment of spasticity." [PAGE24].
PAGE25: "Up to 62% of patients will have urinary incontinence issues at admission, reducing to 18% at six months post injury." [PAGE25]. Good.
PAGE27: memory quote: "Patients with memory impairment after TBI should be trained in the use of compensatory memory strategies with a clear focus on improving everyday functioning rather than underlying memory impairment." [PAGE27]. Attention: "Patients with attention impairment in the post-acute phase after TBI should be given strategy training relating to the management of attention problems in personally relevant functional situations." [PAGE27].
PAGE28: "Patients with TBI and deficits in executive functioning should be trained in meta-cognitive strategies..." [PAGE28]. "In the post-acute setting interventions for cognitive deficits should be applied in the context of a comprehensive/holistic neuropsychological rehabilitation programme." [PAGE28].
PAGE29: "After acquired brain injury medically remediable causes of agitation should be excluded before therapies are started." [PAGE29]. Also list pain, urinary retention, constipation. Good.
PAGE30: "propranolol or pindolol may be considered as a first line treatment option for moderate levels of agitation/aggression." Actually text has "B or pindolol may be considered..." likely missing "propranolol"? Source: "B or pindolol may be considered..." It likely says "Propranolol or pindolol..." but OCR lost. We can quote "or pindolol may be considered as a first line treatment option for moderate levels of agitation/aggression" with bracket? Better avoid exact quote issue; cite recommendation. It says "There was some evidence that the beta-blockers propranolol and pindolol can reduce aggressive behaviour." [PAGE30]. Good.
PAGE32: "Cognitive behavioural therapy should be considered for the treatment of acute stress disorder following mild TBI." and "Cognitive behavioural therapy should be considered for the treatment of anxiety symptoms following mild to moderate TBI, as part of a broader neurorehabilitation programme." [PAGE32].
PAGE36: "Patients with communication deficits post TBI should be referred to speech and language therapy for assessment and management of their communication impairments." [PAGE36]. "Instrumental assessment of dysphagia in patients post TBI should be considered where:" [PAGE36]. Good.
PAGE37: "It is not possible to make a recommendation on the basis of the evidence. However, common sense dictates that thorough oral hygiene in TBI patients would be beneficial for oral comfort and dental health." [PAGE37].
PAGE39: "Early in the rehabilitation pathway patients should be asked about vocational activities and liaison initiated with employers." [PAGE39].
PAGE40: VS definition and permanence: "It has been proposed that the issue of permanence of the VS may be raised when a patient has remained in the VS for more than 12 months after a traumatic brain injury and more than three months after a brain injury of non-traumatic cause" [PAGE40]. Good.
PAGE41: "The Coma Recovery Scale - Revised should be used to assess patients in states of disordered consciousness." [PAGE41]. Good.
PAGE42: amantadine: "Amantadine may be considered as a means of facilitating recovery of consciousness in patients following severe brain injury." [PAGE42]. And "at the six week point there was no significant difference between the two groups in CRS-R scores." [PAGE42]. Good.
PAGE44: "For optimal outcomes, higher intensity rehabilitation featuring early intervention should be delivered by specialist multidisciplinary teams." [PAGE44]. Good.
PAGE46: "At completion of treatment, significantly more patients in the neuropsychological rehabilitation programme group were engaged in community based employment than in the standard rehabilitation group (47% v. 21%; p=0.02)." [PAGE46]. Good. "Barthel Index (35% v. 20%, p<0.05)" [PAGE46]. Good.
PAGE47: telemedicine? "Where further rehabilitation is indicated for patients with brain injury who are discharged from inpatient care, it may be offered by telephone or face-to-face methods..." [PAGE48? Actually PAGE48 top? Source PAGE48 includes 10.3.3 and recommendation at bottom? Wait PAGE48 contains "Where further rehabilitation is indicated..." at PAGE48? Let's check: PAGE48 starts "42 | The authors..." then "Where further rehabilitation is indicated..." at bottom of PAGE48? Yes PAGE48 has recommendation. But I can cite PAGE48. Good.
PAGE48: "Planned discharge from inpatient rehabilitation to home for patients who have experienced an ABI provides beneficial outcomes and should be an integrated part of treatment programmes." [PAGE49? Wait source PAGE49 has "Planned discharge..." at top? Actually PAGE49 starts "43 | Evidence has also..." then "D Planned discharge..." yes PAGE49. But key rec page 14 also has same. Use PAGE49.
PAGE49: "Planned discharge from inpatient rehabilitation to home..." [PAGE49]. Good.

Need cross-layer veto weather: no weather in source. We can say "No weather variable appears in SIGN 130; therefore no source-grounded weather veto exists. A weather claim would be an out-of-source layer and must be rejected rather than fabricated." Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" with formal LaTeX. Need maybe define:
1. Evidence mapping \(\mathcal{G}: \mathcal{E}\to\{A,B,C,D,\mathrm{GPP}\}\). \(E=1^{++}\) etc. But grade mapping is not numeric. Use partial order. Units: categorical. Assumption: SIGN page 2. Breakdown: does not encode clinical importance; page 2 says grade doesn't reflect clinical importance.
2. MTBI Boolean:
\[
\mathrm{MTBI} = [\mathrm{GCS}_{30} \in \{13,14,15\}] \land [\mathrm{LOC}\le 30\ \mathrm{min} \lor \mathrm{PTA}<24\ \mathrm{h} \lor \mathrm{C} \lor \mathrm{TNA}] \land \neg(\mathrm{toxic}/\mathrm{metabolic}/\mathrm{penetrating})
\]
with C confusion/disorientation, TNA transient neurological abnormalities. Units: GCS ordinal, LOC min, PTA h. Assumptions: after 30 min or later. Breakdown: complicated mild with skull fracture/haematoma not generally mild [PAGE15].
3. Recovery survival \(S_{\mathrm{MTBI}}(t)=P(T_{\mathrm{symptom}}>t)\). Guideline qualitative: \(S(90d)\ll1\) for uncomplicated. Units: probability dimensionless, t days. Breakdown: complicated MTBI and litigation etc.
4. Diagnostic uncertainty entropy \(H(D)=-\sum_d p_d \log_2 p_d\) bits. Assumptions: probabilities calibrated; not computed. Breakdown: if p not known.
5. Spasticity effect decay: \(\Delta\theta(t)=\theta_{\mathrm{control}}(t)-\theta_{\mathrm{cast}}(t)\) degrees. Values \(22,11,2\) at end, 1 day, 4 weeks. Breakdown: effect not preserved after discontinuation.
6. CRS-R state gate: \(D(t)=\mathrm{VS}\) if no awareness, no reproducible purposeful responses, sleep-wake, etc; \(D(t)=\mathrm{MCS}\) if any B_MCS. Use indicator. Units: categorical/ordinal. Breakdown: misdiagnosis up to 40% [PAGE40].
7. RLVR reward: \(R_{\mathrm{RLVR}}=1\) if \(C_{\mathrm{rec}}\land\neg C_{\mathrm{viol}}\) else 0. Units Boolean. Not fake ratio.
Need be careful "no toy equations" - these are formal and tied to source. Good.

Need "information units" maybe one equation with bits. No fake ratios. Good.

Need "THINK_TRACE" deep multi-hop derivation & gray-zone audit >=400 words. We can write ~700 words. It should include page citations and quotes. Need be dense.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. ~250 words.

Need "RECURSIVE_THEORY_OF_MIND" Crisis habit regression vs counter-trap vs clock. ~250 words. Need mention "crisis habit regression" maybe: under crisis, clinicians/patients revert to pre-injury habits or defensive habits; guideline says exclude remediable causes before therapy; family education; self-awareness deficits. "Counter-trap": don't counter aggression with confrontation; use positive behavior and exclude causes. "Clock": temporal windows.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. ~250 words. Need cite.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 scenarios + predictions. ~300 words. Need verifiable. Need maybe include exact reward. Good.

Need ensure total >=1000 words. Probably 2000. Need no betting lines. Need not mention "odds". Avoid words "bet", "line", "spread", "total", "moneyline" except "no betting lines"? The invariant says never mention spreads, totals, moneylines, odds. It says ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. So avoid those words entirely. Do not say "no betting lines" maybe okay but contains "betting lines" not "odds"? But safer avoid all those terms. Use "clinical decision". Avoid "total". Use "sum" not total? "total" might be okay but avoid. Need not mention "odds". Good.

Need final answer only XML sections? The user specified exact XML sections. We can output only those tags. Need maybe include all sections. Need no extra preamble. Need include LaTeX. Need use quotes. Need preserve exact page markers. Need mention source page citations.

Let's draft.

Potential THINK_TRACE content:

- Start with source as SIGN 130, 2013, 75 pages. Not a sports corpus. The first derivation: what is the admissible inference space? Page 2 gives evidence hierarchy. Page 7-12 define ABI/TBI and methodological limits. Page 15 WHO MTBI. Page 14 key rec. Page 16 prognosis. Page 17 imaging. Page 18-19 treatment. Page 20-25 physical. Page 26-28 cognitive. Page 29-32 behavior. Page 36-37 communication. Page 39 vocational. Page 40-42 MCS/VS. Page 44-49 service. 
- Multi-hop: For a mild TBI query, first gate is diagnostic criteria [PAGE15]; if GCS 13-15 and criteria, then triage to reassurance [PAGE14]; but must exclude complicated mild (skull fracture, haematoma) [PAGE15] and atypical imaging [PAGE17]; if persistent >3 months, consider CBT [PAGE19] and mental state [PAGE17]; avoid routine cognitive assessment [PAGE17]. 
- Gray-zone audit: The guideline uses "mild" by GCS but says severity symptoms may not correlate perfectly [PAGE9]. That is a gray zone. It also says "categorically" imposed on dimensional severity [PAGE15]. Need quote: "Clinicians need to be aware that this imposes a categorical definition for convenience of clinical decision making on a dimension of severity." [PAGE15]. This is important. 
- Another gray zone: evidence levels vs grades. Page 2 says grade of recommendation relates to strength of evidence not clinical importance. So cannot infer clinical priority from grade alone. 
- Another: "lack of evidence is not synonymous with evidence for no clinical effect" [PAGE11]. Important for negative recommendations. 
- Methodological limits: RCTs difficult, blinding impossible, heterogeneous outcomes [PAGE10-11]. So any formal operator must represent uncertainty, not deterministic truth. 
- Need derive operator: \(D_{\mathrm{MTBI}}\) with conjunction. Then \(R_{\mathrm{manage}}\) as mapping. 
- Need audit singularity/breakdown regimes: complicated MTBI, penetrating, drugs/alcohol, language barrier; if any, Boolean criteria fail; don't apply routine reassurance blindly. Also for VS/MCS: misdiagnosis up to 40% [PAGE40]; CRS-R required [PAGE41]. 
- Need mention "weather" absent. 
- Maybe include "clock" windows: 3 months, 6 weeks, 12 months, 4 weeks. 
- Need word count >400. Good.

SOURCE_OPERATORS_AND_EQUATIONS: Need formal LaTeX. Can include bullets. Use exact citations. Need mention SI units: min, h, degrees, probability, bits, ordinal GCS/CRS-R. No fake ratios. Need "breakdown regimes". Good.

Let's write section with equations:

1. Evidence-grade operator:
\[
\mathcal{G}: \mathcal{E}\to\{A,B,C,D,\mathrm{GPP}\},\quad \mathcal{G}(1^{++})=A,\ldots
\]
Actually mapping not exactly: A requires at least one 1++ or body 1+. Don't oversimplify. Better:
\[
A \Leftarrow (1^{++}\ \text{or consistent }1^{+}),\quad B \Leftarrow (2^{++}\ \text{or extrapolated }1^{++}/1^{+}),\ldots
\]
Cite page2. Units categorical. Breakdown: "grade... does not reflect clinical importance" [PAGE2].
2. MTBI Boolean as above. Cite PAGE15. Breakdown complicated mild.
3. \(S(t)\) equation. Cite PAGE16. Units probability. We can state no numeric estimate from source. Breakdown: complicated MTBI.
4. \(H(D)\) bits. Not computed.
5. Casting effect \(\Delta\theta(t)\). Cite PAGE22. Values.
6. CRS-R gate:
\[
\mathrm{MCS}(t)=1 \iff \exists b\in B_{\mathrm{MCS}}: b(t)=1 \ \text{reproducibly}
\]
\[
\mathrm{VS}(t)=1 \iff \neg \mathrm{Awareness} \land \neg \mathrm{ReproduciblePurposeful} \land \mathrm{SleepWake}
\]
Cite PAGE40-41. Breakdown: up to 40% misdiagnosis [PAGE40].
7. RLVR reward:
\[
R_{\mathrm{RLVR}} = \mathbf{1}[C_{\mathrm{rec}}\land \neg C_{\mathrm{viol}}]
\]
Boolean. Good.

Need exact quotes with page citations. Good.

RETROCAUSAL_GENEALOGY: Could mention lineage:
- SIGN 110 early head injury first 72h [PAGE7] quote "SIGN 110 ... focused on management ... first 72 hours" and SIGN 118 stroke rehab [PAGE7].
- WHO Task Force MTBI definitions [PAGE15].
- Giacino MCS definition [PAGE40-41].
- CRS-R [PAGE41].
- Amantadine NEJM 2012 [PAGE42].
- ERABI [PAGE44? Actually PAGE44 says Evidence Based Review...].
- BSRM/RCP community service [PAGE45].
Multi-week traps:
- casting effect lost by 4 weeks [PAGE22].
- amantadine advantage lost by 6 weeks [PAGE42].
- intensive rehab early gains no LOS difference [PAGE44].
- telephone counseling inconsistent [PAGE48? Actually PAGE47-48].
- litigation poor prognostic factor [PAGE16-17].
- recall bias [PAGE16].
Need mention "retrocausal" as how later guideline recommendations retro-justify earlier evidence classifications; but not overcomplicate. Need cite.

RECURSIVE_THEORY_OF_MIND: Need interpret "crisis habit regression vs counter-trap vs clock." We'll define:
- Crisis habit regression: Under acute stress, patient/family may regress to pre-injury habits or defensive attributions; guideline warns "Using 'post-concussional syndrome' as a diagnostic term may imply a mechanism of neuronal damage that is not supported" [PAGE16], and says personal/social factors determine disability in prolonged cases [PAGE16]. So clinician should not mirror catastrophic attribution. 
- Counter-trap: In agitation, don't counter with confrontation; exclude pain/urinary retention/constipation [PAGE29]; give family education [PAGE30]; use beta-blockers for moderate agitation/aggression [PAGE30]; CBT for anxiety [PAGE32]. 
- Clock: temporal windows: 3 months for MTBI symptoms [PAGE14,16]; 6 weeks amantadine [PAGE42]; 4 weeks casting [PAGE22]; 12 months VS permanence traumatic [PAGE40]. 
- Recursive ToM: patient may lack insight [PAGE26-27]; clinician must model patient's model; family/carer support [PAGE40,45]. Need mention "self awareness and insight" limited evidence [PAGE26-27]. Good.

CROSS_LAYER_VETO_ADJUDICATION: Need physical/biomechanical/weather veto proof. We'll state:
- Physical/biomechanical vetoes are source-grounded: before behavior therapy, exclude pain, urinary retention, constipation [PAGE29]; walking aids only after full assessment of benefits/harms [PAGE22]; treadmill not preferred [PAGE20]; instrumental dysphagia when bedside inadequate [PAGE36]; CRS-R for consciousness [PAGE41]. 
- Weather: no source data; cannot adjudicate; reject any weather-based veto as unsupported. 
- "Veto proof": If a recommendation conflicts with a higher-priority safety gate, veto. Formal:
\[
V_{\mathrm{physical}}=1 \iff \exists c\in C_{\mathrm{remediable}} \ \text{or unsafe swallowing} \ \text{or unsafe mobility}
\]
Then behavioral/cognitive plan delayed. Cite. 
Need avoid fake ratio. Good.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios:
1. MTBI imaging/cognitive assessment. Claim: "Routine MRI and neuropsych testing for all post-acute MTBI" -> veto because [PAGE17] "Cranial imaging is not routinely recommended..." and "Referral for cognitive (psychometric) assessment is not routinely recommended..." Prediction: compliant output should recommend reassurance [PAGE14], symptom review, mental state if >3 months [PAGE17], CBT if persistent after reassurance [PAGE19]; no routine imaging/testing unless atypical.
2. Treadmill preference. Claim: "Use body-weight supported treadmill training as first-line gait training in TBI" -> veto [PAGE20] "should not undergo treadmill training in preference to conventional overground training." Prediction: output recommends conventional overground and repetitive task-oriented [PAGE21].
3. VS diagnosis/persistence. Claim: "Diagnose persistent vegetative state at 3 months after traumatic TBI without CRS-R" -> veto [PAGE41] CRS-R should be used; permanence >12 months traumatic [PAGE40]. Prediction: output requires CRS-R and uses 12-month traumatic threshold, notes misdiagnosis up to 40% [PAGE40].
Maybe 3. Could include amantadine claim? But need 3. Good.

Need maybe include "verifiable predictions" with exact match conditions. Good.

Need ensure not too long? Desired oververbosity 5. But requirement >=1000 words. We can produce ~2200 words. Fine.

Need no markdown headings outside XML. Use XML tags exactly. The sections can have paragraphs with LaTeX. Need include quotes. Need maybe escape ampersand? XML content can include &? We can avoid ampersands. Use "and". Avoid `<` in text? LaTeX uses `<` maybe okay? In XML, `<` must be escaped if not part of tag. To be safe, use \(\le\), \(\ge\), \(\in\). Avoid raw `<`. In equations, use \(\mathrm{PTA}<24\) contains `<` which is invalid XML if not escaped. Need escape as `&lt;` or use \(\mathrm{PTA}\lt 24\). In LaTeX, `\lt` works? Maybe better use `\mathrm{PTA}\le 23.99`? But exact is less than 24 hours. Could write \(\mathrm{PTA}<24\,\mathrm{h}\) with `&lt;`. But XML parser? It might accept if not strict? Better use `\mathrm{PTA}\;\text{is under}\;24\,\mathrm{h}` no `<`. For p-values, use \(p&lt;0.001\)? Avoid raw `<` by using `p=0.00003` or "less than". Use `p \le 0.001`? But source says p<0.001. Could use `p\,\text{under}\,0.001`. Fine. Avoid raw `&` too. Use "and". Good.

Need use quotes with vertical bars? Fine. Need not escape apostrophes. Need ensure no `&` in text. Use "and" instead. Good.

Need maybe use `\(\Delta\theta\)` okay.

Need maybe mention "SI units" explicitly. Good.

Let's write final with XML tags. Need not include markdown code fences. Ensure no raw `<` in text except tags. In equations, avoid `<` and `>`. Use `\le`, `\ge`. For p<0.05 use `p=0.04`? No source p<0.05. Use `p\,\text{under}\,0.05`. Good. For 95% CI use `95\%`. Good.

Need include "PAGE 9" quote about severity not correlate: "severity of symptoms associated with an injury may not correlate perfectly with severity of injury as defined by GCS" [PAGE 9]. Good.

Need include page 11 quote "a lack of evidence is not synonymous with evidence for no clinical effect" [PAGE 11]. Good.

Need include page 15 quote "imposes a categorical definition for convenience..." [PAGE 15]. Good.

Need include page 2 quote "The grade of recommendation relates to the strength of the evidence..." [PAGE 2]. Good.

Need include page 10 about RCTs? Maybe not.

Need ensure "THINK_TRACE" >=400 words. Let's count roughly. We'll write 5 paragraphs ~700 words. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" maybe 700 words. Total >2000.

Let's compose.

Potential issue: "GSE + GSI Frontier Reasoning Foundry" might expect "GSE/GSI" operators. We can mention "GSE" and "GSI" in THINK_TRACE? But no definition. Maybe we can define as "grounded source extraction" and "graded source inference" without inventing? Could say "I treat GSE as grounded source extraction and GSI as graded source inference over the SIGN evidence hierarchy." Is that okay? Not fake equation. Good. Use in THINK_TRACE.

Need "gray-zone audit" in THINK_TRACE. Good.

Need "recursive theory of mind" maybe clinical not sports. Good.

Let's draft final.

Need no "odds" etc. Good.

Final content. 

</NATIVE_REASONING>

<THINK_TRACE>
I treat GSE as grounded source extraction from SIGN 130 and GSI as graded source inference over its evidence hierarchy. The first derivation is therefore not a clinical guess but an admissibility test: which propositions can be licensed by the document, at which grade, and under which breakdown conditions. SIGN 130 is a national clinical guideline, March 2013, 75 pages [PAGE 1]. Its grade key says: “The grade of recommendation relates to the strength of the evidence on which the recommendation is based. It does not reflect the clinical importance of the recommendation.” [PAGE 2]. That immediately blocks a common gray-zone error: a grade D recommendation is not necessarily clinically trivial, and a grade B recommendation is not automatically a mandate for every patient. The inference operator must preserve both evidence strength and clinical-context caveats.

The second hop is diagnostic. For mild traumatic brain injury, the WHO operational criteria are explicit: “Mild traumatic brain injury is an acute brain injury resulting from mechanical energy to the head from external force. Operational criteria for clinical identification include: (i). One or more of the following: confusion or disorientation, loss of consciousness for 30 minutes or less, post-traumatic amnesia for less than 24 hours, and/or other transient neurological abnormalities such as focal signs, seizure, and intracranial lesion not requiring surgery; AND (ii). GCS score of 13-15 after 30 minutes post head injury or later upon presentation for health care.” [PAGE 15]. This is a conjunction, not a vibe. A patient who has GCS 13-15 but whose symptoms are due to drugs, alcohol, medications, other injuries, language barrier, coexisting medical conditions, or penetrating craniocerebral injury does not satisfy the operational definition [PAGE 15]. The guideline also warns that this “imposes a categorical definition for convenience of clinical decision making on a dimension of severity” [PAGE 15]. That is a formal gray zone: the boundary is categorical, the underlying severity is dimensional.

The third hop is prognostic. For uncomplicated mild traumatic brain injury, the guideline says: “In the overwhelming majority of cases symptoms will remit within two to three months of injury.” [PAGE 16]. The key recommendation states: “Patients presenting with non-specific symptoms following mild traumatic brain injury should be reassured that the symptoms are benign and likely to settle within three months.” [PAGE 14]. But this reassurance is conditional. Complicated mild injury, skull fracture, substantive haematoma, seizures, or intracranial lesion may fall outside the routine mild pathway [PAGE 15]. Also, “In adults, evidence consistently suggests there are no MTBI-attributable cognitive deficits beyond three months after injury. However, those with complicated MTBI, ie with associated skull fractures or intracranial lesions may have significant cognitive deficits.” [PAGE 16]. So the operator must branch: uncomplicated MTBI goes to reassurance and gradual return; complicated MTBI goes to closer assessment.

The fourth hop is the imaging and cognitive-testing gray zone. The guideline says: “Cranial imaging is not routinely recommended for the assessment of post-acute mild brain injury, but should be considered in an atypical case.” [PAGE 17]. It also says: “Referral for cognitive (psychometric) assessment is not routinely recommended after MTBI.” [PAGE 17]. If cognitive testing is done, “false positives can occur and that results may be unreliable in the absence of effort testing.” [PAGE 17]. This is a veto against over-testing, but not against clinical vigilance: new-onset focal neurological signs or deteriorating consciousness should trigger further investigation [PAGE 17]. The gray-zone audit must not turn “not routinely recommended” into “never indicated.”

The fifth hop is the evidence-base limitation. SIGN 130 states: “a lack of evidence is not synonymous with evidence for no clinical effect” [PAGE 11]. It also says rehabilitation interventions are hard to blind, often multifactorial, and often target multiple outcomes at activity and participation levels [PAGE 10]. Therefore GSI cannot treat a negative recommendation as a universal prohibition. It must distinguish “evidence does not support routine use” from “evidence proves harm.” The same logic applies to communication therapy, vocational rehabilitation, and consciousness interventions: the guideline often says evidence is insufficient, not that treatment is ineffective [PAGE 36, PAGE 39, PAGE 42].

The sixth hop is the severity-boundary and misdiagnosis audit. The guideline notes that “severity of symptoms associated with an injury may not correlate perfectly with severity of injury as defined by GCS” [PAGE 9]. For disorders of consciousness, it reports that “up to 40% of patients considered to be in a chronic or persistent vegetative state were actually demonstrating behavioural responses consistent with the MCS” [PAGE 40]. That is a high-stakes gray zone. The guideline therefore recommends: “The Coma Recovery Scale - Revised should be used to assess patients in states of disordered consciousness.” [PAGE 41]. This is a source-grounded veto against casual diagnosis without a validated scale. The temporal boundary is also explicit: permanence of the vegetative state may be raised after more than 12 months after traumatic brain injury and more than three months after non-traumatic cause [PAGE 40]. Before those clocks, “permanent” is not a licensed inference.

Finally, the cross-layer audit. Physical and biomechanical factors can veto behavioral or cognitive plans. Before treating agitation as a primary brain-injury behavior, the guideline says “medically remediable causes of agitation should be excluded before therapies are started” [PAGE 29], including pain, urinary retention, and constipation [PAGE 29]. Walking aids are not automatic: they “should be considered only after a full assessment of the potential benefits and harms” [PAGE 22]. Treadmill training is explicitly not preferred over conventional overground training for TBI gait training [PAGE 20]. Dysphagia requires instrumental assessment when bedside assessment is insufficient [PAGE 36]. These are physical and biomechanical veto layers. No weather variable appears in SIGN 130; a weather-based veto would be out-of-source and must be rejected rather than invented.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal source operators use categorical, ordinal, probability, and Boolean units. No pseudo-ratio is introduced. The evidence-grade operator is categorical:
\[
\mathcal{G}:\mathcal{E}\to\{A,B,C,D,\mathrm{GPP}\},
\]
where \(\mathcal{E}\) is the evidence body and the mapping follows SIGN page 2. For example, grade A requires at least one \(1^{++}\) meta-analysis, systematic review, or RCT directly applicable to the target population, or a consistent body of \(1^{+}\) evidence; grade B includes \(2^{++}\) evidence or extrapolated \(1^{++}/1^{+}\) evidence; grade C includes \(2^{+}\) evidence; grade D includes level 3 or 4 evidence or extrapolated \(2^{+}\) evidence [PAGE 2]. The operator’s unit is categorical. Its breakdown regime is explicit: “The grade of recommendation relates to the strength of the evidence on which the recommendation is based. It does not reflect the clinical importance of the recommendation.” [PAGE 2].

The MTBI diagnostic operator is a Boolean conjunction:
\[
\mathrm{MTBI}=
[\mathrm{GCS}_{30}\in\{13,14,15\}]
\land
[\mathrm{LOC}\le 30\,\mathrm{min}
\lor
\mathrm{PTA}\;\text{under}\;24\,\mathrm{h}
\lor
\mathrm{C}
\lor
\mathrm{TNA}]
\land
\neg[\mathrm{toxic},\mathrm{metabolic},\mathrm{penetrating}],
\]
where \(\mathrm{LOC}\) is loss of consciousness in minutes, \(\mathrm{PTA}\) is post-traumatic amnesia in hours, \(\mathrm{C}\) is confusion or disorientation, and \(\mathrm{TNA}\) is transient neurological abnormality [PAGE 15]. GCS is an ordinal score; LOC and PTA use time units. Assumption: the GCS criterion is applied after 30 minutes post injury or later at presentation [PAGE 15]. Breakdown regime: complicated mild injury with skull fracture or substantive haematoma is not generally considered mild [PAGE 15], and alternative causes such as drugs, alcohol, other injuries, language barrier, or coexisting medical conditions invalidate the operational criteria [PAGE 15].

The recovery-probability operator is:
\[
S_{\mathrm{MTBI}}(t)=P(T_{\mathrm{symptom}}>t\mid \mathrm{uncomplicated\ MTBI}),
\]
with \(t\) in days and \(S\) dimensionless probability. The source does not provide a numeric survival curve, but it states: “In the overwhelming majority of cases symptoms will remit within two to three months of injury.” [PAGE 16]. Assumption: uncomplicated MTBI, no litigation, no complicated intracranial pathology. Breakdown regime: complicated MTBI, skull fracture, intracranial lesion, or atypical progression [PAGE 15, PAGE 17]. The guideline also warns that “litigation has been consistently identified as a poor prognostic factor” [PAGE 16] and that recall bias can misattribute pre-existing symptoms to MTBI [PAGE 16].

The diagnostic-uncertainty audit uses Shannon entropy:
\[
H(D)=-\sum_{d} p_d\log_2 p_d,
\]
in bits, where \(D\) is the diagnostic state and \(p_d\) is its calibrated probability. This is not computed from SIGN 130 because the source does not report full probability distributions for most states. Its role is to prevent false precision. Breakdown regime: if \(p_d\) is not calibrated, \(H(D)\) is not interpretable. The source supports this caution with the statement that false positives on cognitive testing can occur and that “results may be unreliable in the absence of effort testing” [PAGE 17].

The spasticity-effect operator is:
\[
\Delta\theta(t)=\theta_{\mathrm{control}}(t)-\theta_{\mathrm{cast}}(t),
\]
in degrees. The source reports that casting reduced elbow flexion contracture by an average of 22 degrees, with 95% CI 13 to 31 degrees and \(p\) under 0.001; one day later the effect decreased to 11 degrees, with 95% CI 0 to 21 degrees and \(p=0.052\); at four-week follow-up the mean was 2 degrees, with 95% CI minus 13 to 17 degrees and \(p=0.782\) [PAGE 22]. Assumption: short-term casting effect compared with positioning. Breakdown regime: the effect “had almost completely disappeared at the four-week follow up” [PAGE 22]. Therefore the operator must not extrapolate a short-term gain into a durable contracture-prevention claim.

The consciousness-state gate is:
\[
\mathrm{MCS}(t)=1 \iff \exists b\in B_{\mathrm{MCS}}: b(t)=1\ \text{reproducibly},
\]
where \(B_{\mathrm{MCS}}\) includes following simple commands, gestural or verbal yes/no responses, intelligible verbalization, or purposeful behavior contingent on environmental stimuli [PAGE 41]. The VS gate requires no evidence of awareness, no sustained reproducible purposeful responses, no language comprehension or expression, intermittent wakefulness with sleep-wake cycles, preserved hypothalamic and brain-stem autonomic function, incontinence, and variably preserved cranial and spinal reflexes [PAGE 40]. The source recommends: “The Coma Recovery Scale - Revised should be used to assess patients in states of disordered consciousness.” [PAGE 41]. Breakdown regime: misdiagnosis is substantial, with up to 40% of patients considered vegetative actually showing MCS-consistent responses [PAGE 40].

The RLVR-style verifiable reward can be written as a Boolean:
\[
R_{\mathrm{RLVR}}=\mathbf{1}[C_{\mathrm{rec}}\land\neg C_{\mathrm{viol}}],
\]
where \(C_{\mathrm{rec}}\) is presence of a guideline-concordant recommendation and \(C_{\mathrm{viol}}\) is a source-conflicting claim. The unit is Boolean, not a ratio. Assumption: the checker can match claims to exact page-grounded recommendations. Breakdown regime: paraphrases that invert “not routinely recommended” into “never indicated” must be treated as violations.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
SIGN 130 sits in a lineage of Scottish and international guideline work. It is explicitly a companion to SIGN 110, which “focused on the management of the patient in the first 72 hours following an acute injury,” while SIGN 130 covers “the longer term rehabilitation of adults in the post-acute period” [PAGE 7]. It also cross-links to SIGN 118 on stroke rehabilitation and SIGN 119 on dysphagia [PAGE 7]. Its MTBI definition comes from the WHO Collaborating Centre Task Force lineage [PAGE 15], and its consciousness definitions draw on the Giacino minimal-consciousness criteria [PAGE 40-41]. The CRS-R recommendation [PAGE 41] and the amantadine trial evidence [PAGE 42] place the guideline after the 2010 assessment-scale review and the 2012 placebo-controlled amantadine trial. The vocational and community sections reflect the ERABI modular review and British Society of Rehabilitation Medicine and Royal College of Physicians guidance [PAGE 44-45].

The retrocausal trap is that later evidence can make earlier recommendations look more confident than they were. The guideline is candid about this. It states: “a lack of evidence is not synonymous with evidence for no clinical effect” [PAGE 11]. It also reports that many rehabilitation studies are single-case or small case series, and that RCTs are difficult because of blinding, heterogeneity, and ethical constraints [PAGE 10]. Thus a later reader should not retroactively convert “insufficient evidence” into “proven ineffective.” The source’s own negative statements must be read as evidence-limited, not as absolute prohibitions.

Multi-week traps are explicit. Casting produced a 22-degree average reduction at the end of treatment, but the effect fell to 11 degrees one day later and to 2 degrees at four weeks [PAGE 22]. Amantadine produced a faster CRS-R recovery during four weeks of treatment, but “at the six week point there was no significant difference between the two groups in CRS-R scores” [PAGE 42]. Intensive rehabilitation produced early gains in some patients, but “no significant difference was found between the two groups beyond three months” and early gains “did not impact on overall length of stay” [PAGE 44]. Telephone counselling trials were inconsistent: one found no significant benefit at six months, another found benefit in more severe injury at one year, and a larger multicentre trial found no effect [PAGE 47-48]. These are multi-week decay and replication traps. They require the GSI operator to separate immediate post-treatment effects from durable functional outcomes.

Another historical trap is the label “post-concussional syndrome.” The guideline warns: “Using ‘post-concussional syndrome’ as a diagnostic term may imply a mechanism of neuronal damage that is not supported by the available evidence.” [PAGE 16]. It notes that such symptoms are non-specific and occur after other physical trauma, chronic pain, chronic fatigue, and mood disorders [PAGE 16]. The lineage therefore moves away from a simple brain-damage label toward a biopsychosocial formulation. That is a critical retrocausal correction: older causal language must not be imported into a current reading of SIGN 130.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression appears when the patient, family, or clinician retreats to pre-injury assumptions under stress. SIGN 130’s self-awareness section says lack of insight is “not a unitary construct but is complex involving interacting neurocognitive, psychological and social factors” [PAGE 26], and the evidence for treating poor insight is insufficient [PAGE 27]. A recursive clinician therefore cannot assume that the patient’s self-model matches the clinician’s model. The family may also regress to catastrophic attributions, especially if the label “post-concussional syndrome” implies neuronal damage that the evidence does not support [PAGE 16]. The countermeasure is a shared formulation: explain that non-specific symptoms are benign and likely to settle within three months [PAGE 14], while still screening for mood disorder, PTSD symptoms, and alternative diagnoses when symptoms persist [PAGE 17].

Counter-trap logic applies most sharply to agitation. The guideline says medically remediable causes should be excluded before therapies are started, including pain, urinary retention, and constipation [PAGE 29]. A counter-trap is to avoid mirroring aggression with confrontation or over-attribution to brain injury. The family and key social-network members should receive education about appropriate management of behaviour and emotion [PAGE 30]. For moderate agitation or aggression, beta-blockers such as propranolol and pindolol have some evidence [PAGE 30]. For anxiety after mild to moderate TBI, CBT should be considered as part of broader neurorehabilitation [PAGE 32]. Recursive theory of mind here means the clinician models the patient’s arousal, threat appraisal, and communication ability, and models the family’s fear and fatigue, rather than treating the behavior as a single brain-lesion output.

The clock is the third regulator. Different clocks license different inferences. The MTBI clock is three months: reassurance is key, and symptoms are likely to settle within three months [PAGE 14, PAGE 16]. The CBT clock for persistent MTBI symptoms is also three months, after failure of reassurance and encouragement from a general practitioner [PAGE 19]. The casting clock is four weeks, by which the effect has almost disappeared [PAGE 22]. The amantadine clock is six weeks, by which the between-group difference is no longer significant [PAGE 42]. The vegetative-state permanence clock is more than 12 months after traumatic injury and more than three months after non-traumatic cause [PAGE 40]. These clocks prevent both premature pessimism and premature closure. A recursive clinician asks: what does the patient believe now, what does the family believe now, and which clock is currently governing the decision?
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical and biomechanical vetoes are source-grounded and take precedence over behavioral or cognitive plans when safety is at stake. The strongest example is agitation: “After acquired brain injury medically remediable causes of agitation should be excluded before therapies are started.” [PAGE 29]. The listed causes include pain, urinary retention, and constipation [PAGE 29]. Thus a plan that begins with contingency management before excluding these causes is vetoed by the physical layer. A second example is mobility: walking aids “should be considered only after a full assessment of the potential benefits and harms of the walking aid in relation to the individual patient’s physical status and cognitive ability.” [PAGE 22]. A third is gait training: “Patients with TBI receiving gait training should not undergo treadmill training in preference to conventional overground training.” [PAGE 20]. A fourth is swallowing: instrumental assessment of dysphagia should be considered when bedside assessment indicates possible pharyngeal-stage problems, when the risks of proceeding on bedside assessment outweigh benefits, or when bedside assessment alone does not permit an adequate swallowing plan [PAGE 36]. These are biomechanical and safety vetoes, not stylistic preferences.

The adjudication rule can be stated as a Boolean gate:
\[
V_{\mathrm{physical}}=1 \iff
\exists c\in C_{\mathrm{remediable}}
\ \text{or unsafe swallowing}
\ \text{or unsafe mobility}.
\]
When \(V_{\mathrm{physical}}=1\), the behavioral or cognitive intervention is deferred or modified until the physical cause is addressed. The unit is Boolean. Assumption: the clinician has performed the relevant physical assessment. Breakdown regime: if the physical assessment is incomplete, the veto cannot be safely cleared. This matches the guideline’s warning that “medically remediable causes of agitation should be excluded before therapies are started” [PAGE 29].

Weather has no source-grounded role in SIGN 130. No weather variable, meteorological exposure, or environmental temperature threshold is specified in the provided pages. Therefore a weather-based veto would be an out-of-source layer and must be rejected as unsupported. The correct adjudication is not to invent a weather threshold but to state that the document does not license one. If a downstream system introduces weather, it must be marked as an external variable, not as SIGN 130 evidence.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: A model claims that all post-acute MTBI patients should receive routine cranial imaging and routine psychometric testing. Veto: SIGN 130 states, “Cranial imaging is not routinely recommended for the assessment of post-acute mild brain injury, but should be considered in an atypical case.” [PAGE 17]. It also states, “Referral for cognitive (psychometric) assessment is not routinely recommended after MTBI.” [PAGE 17]. Prediction: a compliant output will recommend reassurance for non-specific symptoms [PAGE 14], clinical review for atypical or deteriorating features [PAGE 17], mental-state examination when symptoms persist beyond three months [PAGE 17], and CBT only after failure of reassurance and encouragement from a general practitioner after three months [PAGE 19]. The verifier can check for the exact phrases “not routinely recommended” and “atypical case.”

Scenario 2: A model claims that body-weight-supported treadmill training should be first-line gait training for TBI. Veto: “Patients with TBI receiving gait training should not undergo treadmill training in preference to conventional overground training.” [PAGE 20]. Prediction: a compliant output will recommend conventional overground training and repetitive task-oriented activities for functional ability, such as sit-to-stand or fine motor control [PAGE 21]. The verifier can check for the negation “should not undergo treadmill training in preference to conventional overground training” and for the positive recommendation of repetitive task-oriented activities.

Scenario 3: A model claims that a patient can be diagnosed as being in a permanent vegetative state three months after traumatic brain injury without using the Coma Recovery Scale-Revised. Veto: “The Coma Recovery Scale - Revised should be used to assess patients in states of disordered consciousness.” [PAGE 41]. The permanence clock is also violated: permanence “may be raised when a patient has remained in the VS for more than 12 months after a traumatic brain injury and more than three months after a brain injury of non-traumatic cause” [PAGE 40]. Prediction: a compliant output will require CRS-R assessment, will not declare permanence before the 12-month traumatic threshold, and will acknowledge that up to 40% of patients considered vegetative may show MCS-consistent responses [PAGE 40]. The verifier can check for CRS-R, the 12-month traumatic threshold, and the misdiagnosis warning.

These three scenarios are verifiable because each has a page-grounded contradiction and a page-grounded replacement. The reward is Boolean: a response earns credit only when it contains the recommendation and excludes the violating claim. No numeric probability is invented, and no unsupported causal mechanism is added.
</RLVR_COUNTERFACTUAL_VETOES>