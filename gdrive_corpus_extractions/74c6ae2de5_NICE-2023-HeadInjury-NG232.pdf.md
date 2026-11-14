---
source: "NICE-2023-HeadInjury-NG232.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-b-medical"
pages: 76
model: deepseek/deepseek-v4.1-flash-1017
words: 9346
---

<NATIVE_REASONING>
The user has given me a source document (NICE NG232 Head Injury guideline) and asked me to produce an analysis with specific XML sections. The framing is odd — "GSE + GSI Frontier Reasoning Foundry" with betting-related invariants ("ZERO BETTING LINES"), "RLVR counterfactual vetoes" — this looks like a prompt template designed for sports betting prediction analysis, but the source is a medical guideline about head injury.

I need to make a judgment call here. The task asks me to produce a deep analysis of the NICE head injury guideline. There's no actual betting question here — it's a medical guideline. The "invariants" mention betting lines, spreads, totals, moneylines. I should not fabricate betting content, nor should I produce sports betting analysis from a medical guideline.

The most sensible interpretation: produce a rigorous, deep analytical document about the NICE NG232 head injury guideline, structured according to the requested XML sections, treating the safety-critical clinical decision logic with the same rigor the prompt demands. I'll adapt the sections to the medical domain honestly — no betting lines, no fake equations. I'll use formal LaTeX where appropriate (e.g., decision rule thresholds, GCS scoring, sensitivity/specificity definitions, tranexamic acid dosing).

Key constraints:
- Zero betting lines: fine, I won't mention any.
- No toy equations: use real formal notation, SI units, cite pages with [PAGE N] and verbatim quotes.
- ≥1000 words across exact XML sections.
- THINK_TRACE ≥400 words.
- Must include all six XML sections.

Let me plan content.

**THINK_TRACE** (≥400 words): Multi-hop derivation on the gray zones of NG232. Key gray zones:
1. GCS 13-15 mild TBI: 95% present with GCS ≥13 [PAGE 73], yet 0.2% die [PAGE 73] — the base-rate/specificity problem. Decision rules prioritize sensitivity, so specificity is poor [PAGE 57]. The clinical decision problem is a signal-detection problem: high sensitivity → low specificity → many negative CTs; but CT radiation matters esp. under 16 [PAGE 63].
2. The "consider" vs "offer" downgrade for anticoagulated patients [PAGE 21, PAGE 59-60] — a directive-strength change with resource implications.
3. Timing paradoxes: CT within 1 hour vs 8 hours; "within the hour if presenting >8 hours after injury" [PAGE 19].
4. The 2-hour GCS <15 criterion [PAGE 19] vs 1.9.11 observation schedule.
5. Tranexamic acid: 2 g bolus within 2 hours, GCS ≤12, no active extracranial bleeding [PAGE 13-14]; off-label in March 2023 [PAGE 14]; economic model, mortality benefit but no difference in disability [PAGE 53-55].
6. Under-16 dose 15-30 mg/kg derived from adult 2 g ÷ 70 kg = 28.6 mg/kg [PAGE 55] — a unit-conversion-derived extrapolation.
7. Hypopituitarism: any severity, immediate to months [PAGE 33, PAGE 42]; acute cortisol stress confounds testing [PAGE 69].
8. Isolated simple linear non-displaced skull fracture — dischargeable [PAGE 31, PAGE 66-67].
9. Cervical spine: CT replaces X-ray in ≥16 [PAGE 23-24, PAGE 64]; under 16, 3-view X-ray first [PAGE 25-26].
10. Radiology report within 1 hour [PAGE 22, PAGE 26].
11. Observation frequency schedule: half-hourly ×2h, hourly ×4h, then 2-hourly [PAGE 34]; revert on deterioration [PAGE 34].
12. Two-person confirmation of deterioration to reduce interobserver variability [PAGE 35].
13. Second CT/MRI if GCS <15 after 24h with normal CT [PAGE 35].
14. Safeguarding: 25-30% of under-2 hospitalizations due to abuse [PAGE 73].
15. Direct access from community to imaging: do NOT [PAGE 14, PAGE 55-56].
16. Transport: direct to major trauma centre [PAGE 13], but evidence uncertain, RCT from 2012 [PAGE 52-53].

Multi-week traps: 
- Retrograde amnesia >30 min threshold [PAGE 19]; amnesia unassessable in preverbal/<5 [PAGE 8, 9, 20].
- "More than 1 episode of vomiting" (16+) vs "3 or more discrete episodes" (under 16) [PAGE 19, PAGE 20] vs "any vomiting" for referral [PAGE 8].
- "More than 1 of these risk factors" for under-16 second-tier → CT within 1 hour; exactly 1 → observe 4 hours [PAGE 20-21].
- Falls >1 m or >5 stairs (16+) vs >3 m (under 16) [PAGE 19, PAGE 20].
- GCS <14 initially vs <15 for babies under 1 year [PAGE 20].

**SOURCE_OPERATORS_AND_EQUATIONS**: Formal math.
- GCS composition: G = E + V + M, E∈{1..4}, V∈{1..5}, M∈{1..6}, G∈{3..15} [PAGE 41-42].
- Severity classes: mild 13-15, moderate 9-12, severe ≤8 [PAGE 42].
- Sensitivity/specificity definitions in LaTeX; PPV/NPV with prevalence; the biomarker specificity argument [PAGE 63].
- TXA dosing: adult 2 g IV bolus; paediatric 15-30 mg/kg, max 2 g [PAGE 13]; derived 2000 mg / 70 kg = 28.6 mg/kg [PAGE 55].
- Timing constraints: t_CT ≤ t_risk + 1 h; ≤ t_injury + 8 h for medium-risk; ≤ t_presentation + 1 h if >8 h [PAGE 19].
- Observation schedule as piecewise function [PAGE 34].
- Neuronal/physiological: ICP, MAP, CPP = MAP − ICP; PaO2 >13 kPa, PaCO2 4.5-5.0 kPa, MAP ≥80 mmHg [PAGE 30]. Cite. Note NICE doesn't give CPP equation explicitly but gives MAP and PaCO2 targets. Actually CPP equation isn't in the source; I must be careful — I can state it as standard physiology but must flag it's not in the source. Better: use only what's in the source, and where I introduce standard physiology, label it as external standard physiology not from NG232.
- Hyponatraemia, hypotension as hypopituitarism triggers [PAGE 33].
- Radiation: minimize dose while maintaining diagnostic adequacy [PAGE 18].
- Diagnostic test math: Bayes, PPV as function of prevalence π.
- Break-down regimes: specificity collapse at high sensitivity; the "consider" directive; TXA in mild TBI uncertain [PAGE 55]; biomarker thresholds not transferable across assays [PAGE 63].

I should note singularity/breakdown regimes honestly: e.g., when prevalence π → 0, PPV → 0 regardless of specificity; the mild TBI population is large with small PCS incidence [PAGE 63]. That's a genuine breakdown.

**RETROCAUSAL_GENEALOGY**: Historical lineage — CG176 (2003), updated 2007, 2014, 2023 [PAGE 76]. CCHR (Canadian CT Head Rule) for 16+ [PAGE 57]; CHALICE for under 16, with PECARN and CATCH-7 compared [PAGE 58]. NEXUS 2 [PAGE 57]. CRASH-3 and pre-hospital TXA trials (implied: "1 trial was in a pre-hospital setting and the other in a hospital setting" [PAGE 53]) — CRASH-3 is hospital, and the pre-hospital 2 g bolus is likely the CRASH-3/... actually the 2g pre-hospital bolus trial is likely "CRASH-3" no — it's the pre-hospital TXA trial in TBI (likely the "ROTATE"/"CRASH-3" — the 2 g pre-hospital bolus within 2 hours is consistent with the CRASH-3 protocol? No, CRASH-3 used 1 g bolus + 1 g infusion over 8 h. The pre-hospital 2 g bolus is the "CRASH-3" no... It's likely the trial published 2022 in Lancet Neurology (the "Prehospital TXA for TBI" — actually it's the CRASH-3... hmm). I should not name trials not in the source. I'll describe them as "the pre-hospital 2 g bolus RCT" and "the hospital 1 g bolus + 8 h infusion RCT" citing PAGE 53-54, and note CRASH-3's design matches the latter but avoid asserting attribution. Actually the source says "a 1 g bolus dose of tranexamic acid was given within 3 hours of injury, followed by an 8-hour intravenous infusion of 1 g" — that's exactly CRASH-3. And "single 2 g bolus dose... within 2 hours" pre-hospital — that's the "Prehospital Tranexamic Acid for Severe TBI" trial. I can mention these as likely correspondences with appropriate hedging ("consistent with the design of CRASH-3"), but the instruction says cite exact page markers and verbatim quotes. I'll quote the design and note it's consistent with CRASH-3's published protocol, flagged as external knowledge.

Also: 2012 trauma reorganization in UK [PAGE 53]; St John Ambulance / police advice 2003 [PAGE 7]; National Paediatric Neuroscience Benchmarking Group [PAGE 12]; JRCalc [PAGE 12]; APLS/EPLS, ATLS/ETC, ITLS, PHTLS, ATNC, TNCC [PAGE 11-12].

Multi-week traps in genealogy: guidelines propagate; the 2014 wording change "history of" → "current" [PAGE 59]; March 2025 removal of andexanet alfa link (TA697) [PAGE 76]; Oct 2023 added closed/penetrating definitions [PAGE 76]; Aug 2023 4-hour observation from time of injury clarification [PAGE 76]; July 2023 anticoagulant OR antiplatelet clarification [PAGE 76].

**RECURSIVE_THEORY_OF_MIND**: Crisis habit regression vs counter-trap vs clock. Frame as: clinician under time pressure defaults to habit (e.g., "GCS 15, discharge") — crisis habit regression. Counter-trap: the guideline's own anti-habit machinery — two-person confirmation [PAGE 35], 15-minute assessment [PAGE 15], reassessment of low-risk triaged patients [PAGE 16], return-visit review with senior clinician [PAGE 16], "only assume depressed conscious level is due to intoxication after important TBI excluded" [PAGE 15]. Clock: the 1-hour / 2-hour / 4-hour / 8-hour / 24-hour / 48-hour / weeks-to-months hypopituitarism clock [PAGE 19, 20-21, 34, 35, 39, 33]. Also carer-side theory of mind: family/carer continuing concern as a formal referral trigger [PAGE 9, PAGE 10]; "continuing concern by helpline staff" [PAGE 8]. Patient under-reporting in dementia [PAGE 61]. Preverbal children — amnesia unassessable [PAGE 8, 20].

**CROSS_LAYER_VETO_ADJUDICATION**: Physical/biomechanical/weather veto proof. Adapt to: biomechanical mechanism thresholds as vetoes — fall >1 m or >5 stairs (16+) [PAGE 19]; >3 m (under 16) [PAGE 20]; axial load (diving) [PAGE 24, 25]; ejection, rollover, motorised recreational vehicles, bicycle collision [PAGE 24]. Environmental: "no one is able to observe the injured person at home" [PAGE 10]; "appropriate support structures for safe discharge... competent supervision at home" [PAGE 36-37]; custodial settings [PAGE 37]; weather isn't in the source — I should note that honestly: NG232 contains no meteorological criteria; the nearest analogue is transport/logistics ("no other way of safely transporting" [PAGE 7]). That's an honest "no evidence" veto adjudication.

Physiological vetoes: persistent hypotension despite resuscitation → do not transport until cause identified and stabilised [PAGE 29]; PaO2 <13 kPa or PaCO2 >6 kPa → intubate [PAGE 29]; GCS ≤8 → intubate for transfer [PAGE 29]; deteriorating motor score ≥1 point → intubate before journey [PAGE 29-30].

Biomechanical veto: isolated simple linear non-displaced skull fracture is NOT clinically important unless on anticoagulant/antiplatelet [PAGE 31, 42-43].

**RLVR_COUNTERFACTUAL_VETOES**: 3 verifiable scenarios with predictions. Make them falsifiable against the guideline text, not betting. Each: scenario, the counterfactual, the predicted guideline-concordant action, and the observable that would verify.

Scenario 1: Adult, GCS 15 at 2 h, on apixaban, no LOC, no amnesia, no other indication. Guideline: "consider" CT within 8 h [PAGE 21]; risk assessment and shared decision making may allow discharge without CT [PAGE 59]. Prediction: documentation of risk assessment + shared decision; if discharged, written advice and supervision [PAGE 38-39]. Verification: audit of discharge documentation.

Scenario 2: Child 3 years, one risk factor from 1.5.11 (e.g., LOC 6 minutes witnessed), GCS 15, no other. Guideline: observe minimum 4 h from time of injury [PAGE 20-21]; CT within 1 h only if GCS <15, further vomiting, or further abnormal drowsiness. Prediction: no immediate CT; 4-hour observation; time-stamped observation chart. Note the Aug 2023 clarification [PAGE 76].

Scenario 3: Adult GCS 13, no extracranial bleeding, presents 90 minutes post-injury. Guideline: CT within 1 h [PAGE 19]; consider TXA 2 g bolus ASAP within 2 h of injury, before imaging [PAGE 13-14]. Prediction: both actions; TXA before CT is the falsifiable ordering.

Maybe a 4th: GCS 15 but persistent vomiting >1 episode → CT within 1 hour [PAGE 19]. Or neck: 16+ with neck pain, cannot rotate 45° → CT c-spine within 1 h [PAGE 24].

I'll do 3 primary with sub-predictions.

Word count: need ≥1000 total across sections but realistically I'll write much more. THINK_TRACE ≥400.

Let me be careful about verbatim quotes and page numbers. I'll pull exact phrases.

Quotes I can use verbatim:
- [PAGE 6]: "a head injury is defined as any trauma to the head other than superficial injuries to the face."
- [PAGE 19]: "do a CT head scan within 1 hour of any of these risk factors being identified"
- [PAGE 19]: "more than 30 minutes' retrograde amnesia of events immediately before the head injury"
- [PAGE 19]: "do a CT head scan within 8 hours of the head injury, or within the hour in someone presenting more than 8 hours after the injury"
- [PAGE 20]: "at 2 hours after the injury, a GCS score of less than 15"
- [PAGE 20]: "for babies under 1 year, a bruise, swelling or laceration of more than 5 cm on the head"
- [PAGE 20]: "do a CT head scan within 1 hour of the risk factors being identified" (for >1 risk factor)
- [PAGE 21]: "Observe people under 16 who have sustained a head injury but have only 1 of the risk factors in recommendation 1.5.11 for a minimum of 4 hours from the time of injury."
- [PAGE 21]: "consider doing a CT head scan"
- [PAGE 14]: "In March 2023, these were off-label uses of tranexamic acid."
- [PAGE 13]: "a 2 g intravenous bolus injection of tranexamic acid for people 16 and over"
- [PAGE 13]: "a 15 mg/kg to 30 mg/kg (up to a maximum of 2 g) intravenous bolus injection of tranexamic acid for people under 16"
- [PAGE 14]: "Give the tranexamic acid as soon as possible within 2 hours of the injury, in the pre-hospital or hospital setting and before imaging."
- [PAGE 55]: "based on the average weight of people 16 and over being 70 kg, a 2 g dose of tranexamic acid for people 16 and over would equate to a 30 mg/kg dose for people under 16"
- [PAGE 42]: "Mild traumatic brain injury is a GCS score of 13 to 15." etc.
- [PAGE 41]: "The scores in each element of the GCS are summed to give the overall GCS score, which ranges from 3 (unresponsive in all domains) to 15"
- [PAGE 34]: "half-hourly for 2 hours, then 1 hourly for 4 hours, then 2 hourly"
- [PAGE 35]: "a sustained (that is, for at least 30 minutes) drop of 1 point in GCS score"
- [PAGE 35]: "To reduce interobserver variability and unnecessary referrals, get a second member of staff competent in observations to confirm deterioration before involving the supervising doctor."
- [PAGE 35]: "If a person has had a normal CT scan but does not have a GCS score of 15 after 24 hours of observation, consider a further CT or MRI scan"
- [PAGE 30]: "Aim for a PaO2 of more than 13 kPa, and a PaCO2 of 4.5 kPa to 5.0 kPa" and "Maintain the mean arterial pressure at 80 mmHg or more"
- [PAGE 29]: "Do not transport someone with persistent hypotension, despite resuscitation, until the cause has been identified and they are stabilised."
- [PAGE 29]: "hypoxaemia (PaO2 less than 13 kPa on oxygen) or hypercarbia (PaCO2 more than 6 kPa)"
- [PAGE 57]: "its specificity values are poor"
- [PAGE 57]: "specificity values of decision rules are often low because they prioritise very high sensitivity"
- [PAGE 63]: "the population with a mild head injury is large but only a small proportion go on to develop post-concussion syndrome"
- [PAGE 63]: "the specificity values were not high enough across the evidence"
- [PAGE 63]: "accuracy differed quite widely between different studies looking at the same biomarker test measured with different assays on different platforms"
- [PAGE 73]: "As few as 0.2% of people attending emergency departments with a head injury die because of their injury."
- [PAGE 73]: "95% present with a normal or minimally impaired conscious level"
- [PAGE 73]: "in 25% to 30% of children under 2 who are hospitalised with a head injury, it is caused by abuse"
- [PAGE 31]: "an isolated simple linear non-displaced skull fracture is unlikely to be a clinically important abnormality unless they are taking anticoagulant or antiplatelet medication"
- [PAGE 42-43]: isolated simple linear non-displaced skull fracture definition.
- [PAGE 15]: "Only assume a depressed conscious level is due to intoxication after an important traumatic brain injury has been excluded."
- [PAGE 15]: "within a maximum of 15 minutes of arrival at hospital"
- [PAGE 22]: "Make a provisional written radiology report available within 1 hour of a CT scan."
- [PAGE 39]: "write to their GP within 48 hours of discharge"
- [PAGE 24]: "safe assessment of range of neck movement shows that the person cannot actively rotate their neck 45 degrees to the left and right"
- [PAGE 14]: "Do not refer people who have had a head injury for neuroimaging by direct access from the community."
- [PAGE 10]: "no one is able to observe the injured person at home"
- [PAGE 8]: "continuing concern by helpline staff about the diagnosis"
- [PAGE 10]: "continuing concern by the injured person, or their family or carer, about the diagnosis"
- [PAGE 33]: "any severity of head injury can cause pituitary dysfunction"
- [PAGE 69]: "testing in the emergency department may not be useful because the acute injury phase stimulates cortisol secretion"
- [PAGE 61]: "people with dementia may under-report or may be unaware of symptoms such as loss of consciousness or amnesia"
- [PAGE 8]: "it will not be possible to assess amnesia in children who are preverbal and is unlikely to be possible in children under 5"
- [PAGE 76]: changelog items.
- [PAGE 18]: "make every effort to minimise radiation dose during imaging of the head and cervical spine, while ensuring that image quality and coverage is sufficient to achieve an adequate diagnostic study"
- [PAGE 37]: "Only transfer people with any degree of head injury to their home if there is somebody suitable at home to supervise them."

Good.

Now note the weather veto: I must handle honestly. NG232 has no meteorological parameters. I'll state that explicitly as a cross-layer veto gap and identify the closest proxy layers (transport feasibility, supervision availability). Being honest here is important for the integrity.

Also the "ZERO BETTING LINES" invariant — I should probably acknowledge briefly that this source is a clinical guideline with no wagering content, and the analysis proceeds on the clinical decision layer. A short note at the top is fine, or I can put it in THINK_TRACE. I'll add a brief framing note before the XML. Actually, the answer should probably just be the XML. But a one-line note about scope remapping is defensible. I'll include a short preamble outside the XML.

Let me now write. Target maybe 3000-4000 words total. Let's be substantive but efficient.

Let me draft.

---

Structure:

Brief preamble (2-3 lines).

<THINK_TRACE> — ≥400 words, aim ~800.

<SOURCE_OPERATORS_AND_EQUATIONS> — LaTeX, units, page cites, breakdown regimes.

<RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

Let me write it well.

For LaTeX I'll use display math with $$ and inline $...$.

Let me write the operators section carefully:

1. GCS as a direct sum:
$$G = E + V + M,\quad E\in\{1,2,3,4\},\; V\in\{1,\dots,5\}, M\in\{1,\dots,6\},\; G\in[3,15]_{\mathbb{Z}}$$
Cite [PAGE 41], [PAGE 11] for E4 V4 M5 formatting. Units: dimensionless ordinal.

2. Severity partition:
$$\text{mild}: G\in\{13,14,15\},\ \text{moderate}: G\in\{9,10,11,12\},\ \text{severe}: G\le 8$$
[PAGE 42]

3. Diagnostic accuracy operators. Let $D\in\{0,1\}$ disease, $T\in\{0,1\}$ test positive.
$$\mathrm{Sens}=\Pr(T=1\mid D=1),\quad \mathrm{Spec}=\Pr(T=0\mid D=0)$$
$$\mathrm{PPV}=\frac{\pi\,\mathrm{Sens}}{\pi\,\mathrm{Sens}+(1-\pi)(1-\mathrm{Spec})},\quad \pi=\Pr(D=1)$$
Breakdown: $\mathrm{PPV}\to 0$ as $\pi\to 0$ for fixed Spec<1. With $\pi = 0.002$ mortality [PAGE 73] and large mild population [PAGE 63], even Spec = 0.95 gives PPV ≈ 0.002·Sens/(0.002·Sens + 0.998·0.05) ≈ 0.037 — 3.7%. That's a genuinely computed number. Let me compute: 0.002*0.99 = 0.00198; denominator 0.00198 + 0.998*0.05 = 0.00198+0.0499 = 0.05188; PPV = 3.8%. Yes. Good illustration of why specificity is binding [PAGE 63].

Note: π for "clinically important TBI" isn't given directly in source; mortality 0.2% is. I'll frame with a stated assumption.

4. Timing constraints as interval operators:
$$t_{\text{scan}} \le t_{\text{risk identified}} + 1\,\text{h} \quad [\text{PAGE 19, 20}]$$
$$t_{\text{scan}} \le t_{\text{injury}} + 8\,\text{h}\ \text{(16+, LOC/amnesia + medium risk)} \quad[\text{PAGE 19}]$$
$$t_{\text{scan}} \le t_{\text{arrival}} + 1\,\text{h}\ \text{if } t_{\text{arrival}} - t_{\text{injury}} > 8\,\text{h} \quad[\text{PAGE 19}]$$
$$t_{\text{report}} \le t_{\text{scan}} + 1\,\text{h} \quad[\text{PAGE 22, 26}]$$

5. Observation frequency piecewise:
$$f(t)=\begin{cases} 2\ \text{h}^{-1} & 0\le t<2\,\text{h}\\ 1\ \text{h}^{-1} & 2\le t<6\,\text{h}\\ 0.5\ \text{h}^{-1} & t\ge 6\,\text{h}\end{cases}$$
[PAGE 34]. Units: h⁻¹. Breakdown: reset to $f=2$ on deterioration [PAGE 34].

6. TXA dose:
$$D_{\text{adult}} = 2\,\text{g IV bolus},\quad D_{\text{paed}} = \min(30\,[\text{mg/kg}]\cdot m,\ 2\,\text{g}),\ m \text{ in kg}$$
[PAGE 13]. Derived equivalence: $2000\,\text{mg}/70\,\text{kg} = 28.57\,\text{mg/kg}$ [PAGE 55].
Constraint: $t_{\text{TXA}} - t_{\text{injury}} \le 2\,\text{h}$ and $t_{\text{TXA}} < t_{\text{imaging}}$ [PAGE 14].
Gate: $G \le 12$ and no active extracranial bleeding [PAGE 13].
Units note: mg/kg is mass-per-mass, dimensionless ratio × 10⁶ ppm essentially; keep it simple.
Breakdown: no RCT data under 16 [PAGE 55]; mild TBI benefit uncertain [PAGE 55].

7. Physiological targets (transfer):
$$\text{PaO}_2 > 13\,\text{kPa},\quad \text{PaCO}_2 \in [4.5, 5.0]\,\text{kPa},\quad \overline{P}_{a} \ge 80\,\text{mmHg}$$
[PAGE 30]. Conversion: 1 kPa = 7.5006 mmHg; 13 kPa ≈ 97.5 mmHg, 6 kPa ≈ 45 mmHg, 4.5-5.0 kPa ≈ 33.8-37.5 mmHg. Give these.

Cerebral perfusion pressure: $\mathrm{CPP} = \overline{P}_{a} - \mathrm{ICP}$ — flag as external standard physiology, not stated in NG232; NG232 only supplies the MAP floor. Honest.

8. Threshold operators for mechanism (biomechanical veto):
$$h_{\text{fall}} > 1\,\text{m} \ \text{or}\ n_{\text{stairs}} > 5 \quad (16+) \quad[\text{PAGE 19}]$$
$$h_{\text{fall}} > 3\,\text{m} \quad (<16) \quad[\text{PAGE 20}]$$
Units: m, count.

9. Isolated fracture classifier:
$$\mathcal{F}_{\text{simple}} = \{\text{single linear},\ \text{non-displaced},\ \text{single line},\ \text{does not cross sutures}\}$$
[PAGE 42-43]

Breakdown/singularity regimes list.

OK. Write it.

For RLVR counterfactuals, I need "3 verifiable RLVR veto scenarios + predictions." RLVR = reinforcement learning with verifiable rewards. So: scenario, the reward-verifiable observable, the veto (action that must not occur), and prediction.

Let me write those as: Veto 1 — TXA-after-imaging ordering. Veto 2 — CT-before-observation in single-risk-factor child. Veto 3 — discharge without supervision / without GCS 15.

Actually make them crisp and auditable.

Now write. Keep formatting clean, use headers within XML tags? The tags are the sections; inside I can use bold subheads and lists.

Length check: I'll aim for a good thorough document.

One more: the instruction says ">= 1,000-WORD DEPTH across these exact XML sections". So the XML sections collectively ≥1000 words. I'll far exceed.

Write now.
</NATIVE_REASONING>

Scope note: the supplied drive source is a clinical practice guideline (NICE NG232), not a wagering market. No betting lines, spreads, totals, moneylines, or odds exist in this document and none are introduced below. The requested analytical scaffolding is therefore remapped onto the guideline's actual decision layer: diagnostic test operators, timing constraints, dose arithmetic, directive strength, and mechanical/physiological vetoes. Every factual claim is anchored to a `[PAGE N]` marker with verbatim quotation.

<THINK_TRACE>

**Hop 1 — Establish the base rate before touching any rule.** NG232 states at [PAGE 73]: *"As few as 0.2% of people attending emergency departments with a head injury die because of their injury"* and *"95% present with a normal or minimally impaired conscious level, that is, a Glasgow Coma Scale (GCS) score of 13 or more."* This is the governing prior. It means every downstream decision rule is operating in a low-prevalence, high-volume regime. The document is explicit that this is the central engineering problem: *"This means emergency departments need to identify the small number who will go on to have serious acute intracranial complications"* [PAGE 73].

**Hop 2 — Derive the consequence for test design.** Because prevalence $\pi$ is small, positive predictive value is dominated by the false-positive term $(1-\pi)(1-\text{Spec})$, not by sensitivity. NG232 concedes this directly for the adult rule: the Canadian CT Head Rule *"has good sensitivity when used as intended but that its specificity values are poor"*, and *"specificity values of decision rules are often low because they prioritise very high sensitivity"* [PAGE 57]. The guideline then refuses to switch rules for people under 16 on the grounds that *"the specificity values for CHALICE are much better than for other rules assessed"* while sensitivity remains *"still over 90% for clinically important injuries and neurosurgical outcomes"* [PAGE 58]. So the committee's revealed preference function weights specificity more heavily than a naive sensitivity-maximising reader would predict. That is a non-obvious inversion and it is the single most important interpretive key to the whole document.

**Hop 3 — Trace where the inversion is enforced operationally.** It appears as radiation stewardship at [PAGE 18]: *"make every effort to minimise radiation dose during imaging of the head and cervical spine, while ensuring that image quality and coverage is sufficient to achieve an adequate diagnostic study"*. It appears again as the biomarker verdict at [PAGE 63]: *"the specificity values were not high enough across the evidence"* and *"the specificity values were equally as important as the sensitivity values, given the consequences of unnecessary radiation from CT scans. They thought this was particularly important in people under 16."* And it appears as the post-concussion-syndrome reasoning at [PAGE 63]: *"the population with a mild head injury is large but only a small proportion go on to develop post-concussion syndrome. So, false positives would have a negative effect on resources."* Three independent instantiations of the same operator — this is a coherent design philosophy, not three ad hoc rulings.

**Hop 4 — Locate the grey zone the philosophy creates.** The cost of high specificity is missed injury. NG232 does not resolve this; it defers it to observation. Recommendation 1.5.12 [PAGE 20–21] is the clearest artefact: a child with exactly one second-tier risk factor is *not* scanned, but *"Observe people under 16 who have sustained a head injury but have only 1 of the risk factors in recommendation 1.5.11 for a minimum of 4 hours from the time of injury."* The rule converts a diagnostic uncertainty into a temporal test — a repeat-measurement design where the observation period is the assay. This is why the August 2023 amendment mattered enough to log: *"We amended recommendation 1.5.12 to make it clear that the 4-hour timeframe for observation is from the time of injury"* [PAGE 76]. The clock origin is load-bearing because a child arriving 3 hours post-injury satisfies the observation requirement in 1 hour, not 4.

**Hop 5 — Audit the directive-strength gradient.** NG232 uses a graded vocabulary and every downgrade is a resource decision. The anticoagulation recommendation moved from "offer" to *"consider doing a CT head scan"* [PAGE 21], and the rationale is candid: *"Weakening the recommendation for people with a head injury who are on anticoagulants but have no other indication for imaging from 'offer' to 'consider' is expected to result in fewer scans. But expanding the recommendation to include people with a head injury who are on clopidogrel, prasugrel or ticagrelor is expected to result in more scans. It is uncertain whether this will lead to an overall increase or decrease in scanning"* [PAGE 62]. This is an explicit admission that the net effect direction is unknown. Any downstream audit that assumes a monotone effect is mis-specified.

**Hop 6 — Find the unit-conversion dependency.** The paediatric tranexamic acid dose is not derived from paediatric evidence — there is none. It is derived by back-converting an adult fixed dose through an assumed body mass: *"based on the average weight of people 16 and over being 70 kg, a 2 g dose of tranexamic acid for people 16 and over would equate to a 30 mg/kg dose for people under 16. So, they concluded that a dose range of 15 mg/kg to 30 mg/kg was appropriate for people under 16"* [PAGE 55]. The arithmetic gives $2000/70 = 28.57$ mg/kg, rounded up to a 30 mg/kg ceiling. This is a legitimate but fragile extrapolation: it assumes linear mass scaling of a drug whose pharmacodynamics are not established as mass-linear in children, and it is flagged as off-label — *"In March 2023, these were off-label uses of tranexamic acid"* [PAGE 14].

**Hop 7 — Identify the false-negative corridors (multi-week traps).** Four traps sit in the text and each is verifiable:
(a) *Amnesia is structurally unmeasurable in the youngest patients* — *"it will not be possible to assess amnesia in children who are preverbal and is unlikely to be possible in children under 5"* [PAGE 8, repeated PAGE 20]. A decision rule keyed to amnesia silently returns "absent" rather than "unknown", which is a missing-data-as-negative-value error baked into the guidance itself.
(b) *Vomiting thresholds are non-monotone across ages* — "any vomiting episodes" for referral [PAGE 8], "more than 1 episode" for adult 1-hour CT [PAGE 19], "3 or more discrete episodes" for paediatric second-tier CT [PAGE 20].
(c) *Fall height thresholds differ by age* — "$>1$ m or 5 stairs" for 16+ [PAGE 19] versus "$>3$ m" for under 16 [PAGE 20].
(d) *Pre-injury baseline GCS is not 15 for everyone* — *"people with dementia, underlying chronic neurological disorders or learning disabilities"* may have a lower baseline [PAGE 11], and discharge requires return to *"their pre-injury baseline"* [PAGE 31, PAGE 37].

**Hop 8 — Close the loop on the clock.** The document carries at least seven distinct time constants: 1 hour (CT/report) [PAGE 19, 22], 2 hours (GCS recheck, TXA window) [PAGE 19, 14], 4 hours (paediatric observation, unexplained confusion) [PAGE 21, 17], 8 hours (medium-risk CT) [PAGE 19], 15 minutes (initial ED assessment) [PAGE 15], 24 hours (repeat imaging) [PAGE 35], 48 hours (GP letter) [PAGE 39], and an unbounded weeks-to-months endocrine window [PAGE 33]. Mis-assigning the wrong clock to the wrong risk tier is the dominant procedural failure mode and is invisible in any single-page read.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**Operator 1 — GCS as an additive ordinal composite.** NG232 defines the structure at [PAGE 41]: *"The scale has 3 domains: eye opening, verbal and motor responses... The scores in each element of the GCS are summed to give the overall GCS score, which ranges from 3 (unresponsive in all domains) to 15."*

$$G = E + V + M,\qquad E\in\{1,2,3,4\},\; V\in\{1,\dots,5\},\; M\in\{1,\dots,6\}$$
$$G\in\{3,4,\dots,15\}_{\mathbb{Z}},\qquad \dim(G)=1\ \text{(dimensionless ordinal)}$$

Reporting convention is mandated as a vector, not a scalar: *"describe a person with a GCS score of 13 based on scores of 4 on eye opening, 4 on verbal response and 5 on motor response as E4, V4, M5"* [PAGE 11]. **Assumption:** additivity is a clinical convenience, not a measurement axiom; the components are non-commensurable and the guideline itself weights them asymmetrically (see Operator 6). **Breakdown regime:** in preverbal children the verbal domain is undefined and is replaced — *"include a 'grimace' alternative to the verbal score"* [PAGE 11]; and where pre-injury baseline $G_0<15$, the operative target is $G_0$ not 15 [PAGE 11, PAGE 31].

**Operator 2 — Severity partition.**

$$\text{mild}: G\in\{13,14,15\};\quad \text{moderate}: G\in\{9,10,11,12\};\quad \text{severe}: G\le 8$$
[PAGE 42 — verbatim: *"Mild traumatic brain injury is a GCS score of 13 to 15. Moderate traumatic brain injury is a GCS score of 9 to 12. Severe traumatic brain injury is a GCS score of 8 or less."*]

**Operator 3 — Diagnostic accuracy and the prevalence singularity.** With $D\in\{0,1\}$ the disease indicator, $T\in\{0,1\}$ the test result, and prevalence $\pi=\Pr(D=1)$:

$$\mathrm{Sens}=\Pr(T{=}1\mid D{=}1),\qquad \mathrm{Spec}=\Pr(T{=}0\mid D{=}0)$$
$$\mathrm{PPV}(\pi)=\frac{\pi\,\mathrm{Sens}}{\pi\,\mathrm{Sens}+(1-\pi)(1-\mathrm{Spec})}$$

**Singularity:** $\mathrm{PPV}\to 0$ as $\pi\to 0$ for any $\mathrm{Spec}<1$, independent of $\mathrm{Sens}$. This is the formal statement of [PAGE 63]: *"the population with a mild head injury is large but only a small proportion go on to develop post-concussion syndrome."* **Worked instance (assumption stated):** taking $\pi=0.002$ from the mortality figure at [PAGE 73], $\mathrm{Sens}=0.99$, $\mathrm{Spec}=0.95$:

$$\mathrm{PPV}=\frac{(0.002)(0.99)}{(0.002)(0.99)+(0.998)(0.05)}=\frac{0.00198}{0.05188}\approx 3.8\%$$

Ninety-six percent of positives are false. This is precisely why the committee demanded *"high specificity"* for post-concussion biomarkers [PAGE 63] rather than high sensitivity, and why it rejected the biomarker evidence base: *"accuracy differed quite widely between different studies looking at the same biomarker test measured with different assays on different platforms"* [PAGE 63] — a between-assay variance term that makes any pooled $\mathrm{Spec}$ estimate non-transferable.

**Operator 4 — Timing constraints (interval operators).** Units: hours, referenced to four distinct origins.

$$t_{\text{scan}}-t_{\text{risk identified}}\le 1\,\text{h}\quad\text{(16+ tier 1;\ <16 tier 1 and tier 2)}$$
[PAGE 19, PAGE 20]
$$t_{\text{scan}}-t_{\text{injury}}\le 8\,\text{h}\quad\text{(16+ with LOC/amnesia + medium risk)}$$
$$t_{\text{scan}}-t_{\text{arrival}}\le 1\,\text{h}\quad\text{if } t_{\text{arrival}}-t_{\text{injury}}>8\,\text{h}$$
[PAGE 19 — verbatim: *"do a CT head scan within 8 hours of the head injury, or within the hour in someone presenting more than 8 hours after the injury"*]
$$t_{\text{report}}-t_{\text{scan}}\le 1\,\text{h}\quad\text{[PAGE 22, PAGE 26]}$$
$$t_{\text{GP letter}}-t_{\text{discharge}}\le 48\,\text{h}\quad\text{[PAGE 39]}$$

**Breakdown:** the 8-hour and 1-hour clauses switch origin mid-sentence; a system that timestamps everything from arrival will systematically breach the 8-hour limb for late presenters and will systematically under-treat the early presenter.

**Operator 5 — Observation as a piecewise frequency schedule.**

$$f(t)=\begin{cases} 2.0\ \mathrm{h^{-1}} & 0\le t<2\ \mathrm{h}\\ 1.0\ \mathrm{h^{-1}} & 2\le t<6\ \mathrm{h}\\ 0.5\ \mathrm{h^{-1}} & t\ge 6\ \mathrm{h}\end{cases}\qquad t=\text{time since initial ED assessment}$$
[PAGE 34 — verbatim: *"half-hourly for 2 hours, then 1 hourly for 4 hours, then 2 hourly"*]
Reset law: *"Revert to half-hourly observations and follow the original frequency schedule for people with a GCS score of 15 who deteriorate"* [PAGE 34]. **Unit note:** $f$ has units of inverse hours; integrated count over 6 hours is $2(2)+1(4)=8$ observations, then $0.5\ \mathrm{h^{-1}}$ thereafter.

**Operator 6 — Deterioration detector with asymmetric domain weighting.** Let $\Delta E,\Delta V,\Delta M$ be signed changes from the reference record.

$$\text{trigger}=\big[\Delta M\le -2\big]\ \lor\ \big[(\Delta E\le -3)\lor(\Delta V\le -3)\big]\ \lor\ \big[\Delta M\le -1\ \text{sustained}\ \ge 30\ \text{min}\big]$$
[PAGE 35 — verbatim: *"a sustained (that is, for at least 30 minutes) drop of 1 point in GCS score (give more weight to a drop of 1 point in the motor response score of the GCS score)"; and "any drop of 3 or more points in the eye opening or verbal response scores of the GCS score, or 2 or more points in the motor response score"*]

The weighting is explicit: motor change is the sensitive channel, eye/verbal is the specific channel. **Breakdown:** the 30-minute sustainment clause requires continuous documentation; where the observation interval is already $0.5\ \mathrm{h^{-1}}$, the sustainment window is exactly one sampling interval wide — a resolution limit where a genuine 1-point motor drop can be missed by aliasing.

**Operator 7 — Tranexamic acid dosing.**

$$D_{16+}=2\ \mathrm{g}\ \text{IV bolus}$$
$$D_{<16}=\min\!\big(30\ \mathrm{mg\,kg^{-1}}\cdot m,\ 2\ \mathrm{g}\big),\qquad m=\text{body mass in kg}$$
[PAGE 13 — verbatim: *"a 2 g intravenous bolus injection of tranexamic acid for people 16 and over"* and *"a 15 mg/kg to 30 mg/kg (up to a maximum of 2 g) intravenous bolus injection"*]

Gate conditions: $G\le 12$ **and** no active extracranial bleeding **and** $t_{\text{TXA}}-t_{\text{injury}}\le 2\ \mathrm{h}$ **and** $t_{\text{TXA}}<t_{\text{imaging}}$ [PAGE 13–14 — *"Give the tranexamic acid as soon as possible within 2 hours of the injury, in the pre-hospital or hospital setting and before imaging."*]

Paediatric equivalence derivation [PAGE 55]:
$$\frac{2000\ \mathrm{mg}}{70\ \mathrm{kg}}=28.57\ \mathrm{mg\,kg^{-1}}\ \Rightarrow\ \text{ceiling rounded to }30\ \mathrm{mg\,kg^{-1}}$$

**Breakdown regimes:** (i) no paediatric RCT evidence exists — *"Because of a lack of trial evidence for tranexamic use in people under 16, the committee used extrapolated evidence from the trials in adults"* [PAGE 55]; (ii) the dose is off-label [PAGE 14]; (iii) mild TBI benefit is unresolved — *"it is less clear whether the benefits of tranexamic acid outweigh the potential risk of blood clots"* [PAGE 55].

**Operator 8 — Physiological transfer targets.** Units converted to both kPa and mmHg ($1\ \mathrm{kPa}=7.5006\ \mathrm{mmHg}$).

$$\mathrm{PaO_2}>13\ \mathrm{kPa}\ (\approx 97.5\ \mathrm{mmHg}),\qquad \mathrm{PaCO_2}\in[4.5,5.0]\ \mathrm{kPa}\ (\approx 33.8\text{–}37.5\ \mathrm{mmHg})$$
$$\overline{P}_{a}\ge 80\ \mathrm{mmHg}$$
[PAGE 30 — verbatim: *"Aim for a PaO2 of more than 13 kPa, and a PaCO2 of 4.5 kPa to 5.0 kPa, unless there is clinical or radiological evidence of raised intracranial pressure, in which case more aggressive hyperventilation is justified"* and *"Maintain the mean arterial pressure at 80 mmHg or more by infusion of fluid and vasopressors"*]

Intubation trigger from blood gases [PAGE 29]: $\mathrm{PaO_2}<13\ \mathrm{kPa}$ on oxygen **or** $\mathrm{PaCO_2}>6\ \mathrm{kPa}$ ($\approx 45\ \mathrm{mmHg}$). **External physics (not stated in NG232, flagged as such):** cerebral perfusion pressure is conventionally $\mathrm{CPP}=\overline{P}_{a}-\mathrm{ICP}$; NG232 supplies only the $\overline{P}_{a}$ floor and does not state the CPP relation, so no CPP threshold should be attributed to this source.

**Operator 9 — Biomechanical veto thresholds.**

$$h_{\text{fall}}>1\ \mathrm{m}\ \lor\ n_{\text{stairs}}>5\quad(16+)\qquad\text{[PAGE 19]}$$
$$h_{\text{fall}}>3\ \mathrm{m}\quad(<16)\qquad\text{[PAGE 20]}$$
Additional 16+ cervical spine qualifiers: *"an axial load to the head such as from diving, a high-speed motor vehicle collision, a rollover motor accident, ejection from a motor vehicle, an accident involving motorised recreational vehicles or a bicycle collision"* [PAGE 24]. **Breakdown:** the 1 m and 3 m thresholds are age-stratified by a factor of 3 with no stated derivation; a mechanism near the boundary is therefore assigned opposite verdicts purely by date of birth.

**Operator 10 — Isolated simple linear non-displaced skull fracture classifier.**

$$\mathcal{F}_{\text{simple}}=\{x:\ \text{single},\ \text{linear},\ \text{non-displaced},\ \text{does not cross sutures}\}$$
[PAGE 42–43 — verbatim: *"A single or solitary linear fracture that does not exhibit any inward or outward displacement, does not consist of multiple fracture lines and does not involve or cross the normal sutures of the skull."*]
Verdict operator [PAGE 31]: *"an isolated simple linear non-displaced skull fracture is unlikely to be a clinically important abnormality unless they are taking anticoagulant or antiplatelet medication."*

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

The document is a palimpsest. Its own front matter declares the lineage: *"This guideline replaces CG176. This guideline is the basis of QS74"* [PAGE 5]. Each recommendation carries an inheritance tag, and the tags are the genealogy: `[2003]`, `[2007]`, `[2014]`, `[2023]`, and hybrids such as `[2003, amended 2007, 2014 and 2023]` [PAGE 7]. The update log makes the inheritance rules explicit: *"For recommendations [2003, amended 2023], [2007, amended 2023] and [2014, amended 2023], we have made changes that could affect the intent without reviewing the evidence"* [PAGE 76]. That sentence is remarkable — it is a formal admission that intent-level mutation occurred without evidentiary review. Any longitudinal audit of this guideline must therefore treat `amended` tags as version discontinuities, not cosmetic edits.

**Layer 1 — Pre-hospital (2003 substrate).** The community referral criteria at 1.2.2–1.2.4 [PAGE 7–9] are tagged `[2003, amended 2007, 2014 and 2023]`, i.e. four generations of revision on a 2003 chassis. The originating concern is visible in the addressees: *"Public health literature and other non-medical sources of advice (for example, St John Ambulance and police officers)"* [PAGE 7]. The "continuing concern by the professional" escape hatch [PAGE 9] is a 2003-era human-factors safety valve that has survived four revisions unchanged in function.

**Layer 2 — Adult imaging: the Canadian CT Head Rule lineage.** The committee is unambiguous about intellectual parentage: *"the existing recommendations for clinical decision rules for head imaging in people 16 and over were largely based on the Canadian CT Head Rule (CCHR)"* [PAGE 57], with *"some modifications aimed at improving sensitivity."* The competing lineage is named too: *"Limited evidence showed that the NEXUS 2 decision rule has specificity values similar to those of the CCHR"* [PAGE 57]. The 2023 decision was explicitly conservative — *"there was insufficient evidence to support changing the clinical decision rule recommendations"* [PAGE 58] — supported by cost-effectiveness modelling in which CCHR dominated. Retro-causally, this means the 2023 adult imaging criteria are a 2001-era rule wearing 2023 clothing.

**Layer 3 — Paediatric imaging: CHALICE with drift.** *"the existing recommendations for clinical decision rules for head imaging in people under 16 were largely based on the CHALICE rules with some modifications"* [PAGE 58], and the modifications are characterised as *"based on current practice and experience allowing for the option of an observation period with imaging if the condition of some people deteriorated, rather than immediate imaging."* The alternatives were considered and rejected on stated grounds: PECARN and CATCH-7 *"may have slightly better sensitivity values"* but CHALICE's specificity is *"much better"*; PECARN is dismissed as *"vaguer and does not give timings"* [PAGE 58]. The rejection criterion — absence of explicit timing — is the same criterion that makes Operator 4 the operational core of the modern guideline.

**Layer 4 — Tranexamic acid: a genuinely new 2023 graft.** Two RCTs underpin it [PAGE 53]: *"One trial was in a pre-hospital (out-of-hospital) setting and the other was in a hospital setting."* The hospital arm's design — *"a 1 g bolus dose of tranexamic acid was given within 3 hours of injury, followed by an 8-hour intravenous infusion of 1 g"* [PAGE 54] — is structurally the CRASH-3 protocol (flagged as external attribution, not stated in NG232). The pre-hospital arm used *"a single 2 g bolus dose... within 2 hours"* [PAGE 53]. NICE chose the pre-hospital regimen because *"the benefits of tranexamic acid were found to be greater when it was given earlier"* [PAGE 54]. Note the divergence: NG232's recommended adult dose is 2 g bolus, not the 1 g + 8 h infusion, and the stated reason is timing economics rather than a head-to-head comparison.

**Layer 5 — Institutional embedding.** The assessment standards are borrowed, not invented: ATLS/ETC, ITLS, PHTLS, ATNC, TNCC, and the *"Joint Royal Colleges Ambulance Service Liaison Committee Clinical Practice Guidelines for Head Trauma"* [PAGE 11–12]; paediatric equivalents APLS/EPLS, PPHLS, PEPP [PAGE 12]; and *"best practice in paediatric coma observation and recording, as detailed by the National Paediatric Neuroscience Benchmarking Group"* [PAGE 12]. Transfer standards borrow from *"the NHS England service specification for paediatric intensive care retrieval (transport) and the Paediatric Critical Care Society quality standards"* [PAGE 30].

**Multi-week traps embedded in the genealogy.**
1. **The 2012 trauma reorganisation trap.** The transport evidence is time-stale by the committee's own admission: *"the data collection for the RCT was in 2012. This was when trauma care was reorganised in the UK... So, the evidence does not reflect the recent trauma care system"* [PAGE 53]. Anyone citing the transport RCT as current evidence is citing a pre-reorganisation system.
2. **The "history of" → "current" wording trap.** *"they changed the recommendation wording from 'history of bleeding or clotting disorders' to 'current bleeding or clotting disorders'"* [PAGE 59–60], applied to all ages for *"a consistent message"* even though the paediatric rationale (disorders resolving in months) does not transfer to adults.
3. **The andexanet alfa trap.** *"March 2025: We removed the link to NICE technology appraisal guidance on andexanet alfa (TA697) from recommendation 1.5.13 because the guidance has been updated and no longer applies"* [PAGE 76]. A reader using a pre-March-2025 copy will follow a dead reversal pathway.
4. **The aspirin-monotherapy carve-out.** Repeated parenthetically five times — *"current anticoagulant or antiplatelet (except aspirin monotherapy) treatment"* [PAGE 8, 9, 21] — and justified at [PAGE 60]: *"the risk of intracranial haemorrhage is low with aspirin."* Deleting the parenthesis inverts the recommendation.
5. **The 24-hour extrapolation trap.** All CT criteria were validated for presentations within 24 hours; the committee extended them by judgement: *"because of a lack of evidence, the committee agreed that these could be extrapolated to people presenting more than 24 hours after a head injury"* [PAGE 62]. This is an acknowledged unwarranted extension and is logged as research recommendation 8 [PAGE 50].

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

**The habitual attractor.** The crisis habit in head injury is single-observation discharge: GCS 15 observed once, symptomatic complaint discounted, patient sent home. NG232 is engineered against this, and its anti-habit machinery is visible in five places. First, the 15-minute floor: *"Ensure a trained member of staff assesses anyone presenting to an emergency department with a head injury within a maximum of 15 minutes of arrival"* [PAGE 15]. Second, mandatory re-examination of the ostensibly well: *"Anyone triaged to be at low risk... should be re-examined by an emergency department clinician"* [PAGE 16]. Third, the anti-discounting rule for intoxication: *"Only assume a depressed conscious level is due to intoxication after an important traumatic brain injury has been excluded"* [PAGE 15]. Fourth, the return-visit rule: *"Review people who return to an emergency department with any persistent complaint relating to the initial head injury and discuss them with a senior clinician"* [PAGE 16]. Fifth, the two-person confirmation rule, whose stated purpose is statistical: *"To reduce interobserver variability and unnecessary referrals, get a second member of staff competent in observations to confirm deterioration before involving the supervising doctor"* [PAGE 35], with an explicit escape when the second observer is unavailable.

**Counter-trap: the guideline anticipates its own misuse.** The two-person rule is a rare example of a guideline pre-empting the failure mode its own alarms would create. Unchecked, a deterioration trigger in a low-prevalence population generates mostly false positives (Operator 3), so alarms are ignored — the classic alarm-fatigue collapse. The second-observer requirement is a specificity filter inserted at the human layer rather than the test layer. Similarly, the sustainment clause — *"a sustained (that is, for at least 30 minutes) drop of 1 point"* [PAGE 35] — is a debounce filter. The document is, in effect, doing signal processing through staffing.

**Counter-trap 2: the "consider" directive.** Where evidence is weak the guideline deliberately weakens the verb. Recommendation 1.5.13 uses *"consider doing a CT head scan"* [PAGE 21] and the rationale concedes directional uncertainty: *"It is uncertain whether this will lead to an overall increase or decrease in scanning"* [PAGE 62]. A reader who recurses on "consider" as permission will under-scan; a reader who recurses on it as obligation will over-scan. The guideline's intended reading is the middle one stated at [PAGE 59]: *"if there are no risk factors and after shared decision making, they could be discharged safely without a CT scan, with the usual discharge advice."* Shared decision making is the load-bearing clause, not the scan.

**Theory of mind across the competency gap.** NG232 models the patient as an unreliable narrator in three explicitly enumerated ways:
- **Preverbal children:** *"it will not be possible to assess amnesia in children who are preverbal and is unlikely to be possible in children under 5"* [PAGE 8, PAGE 20].
- **Pre-injury cognitive impairment:** *"people with dementia may under-report or may be unaware of symptoms such as loss of consciousness or amnesia. It is also difficult to differentiate head injury symptoms from the pre-existing dementia in these people"* [PAGE 61]. And at [PAGE 70]: *"people with pre-existing conditions affecting cognition are less likely to recognise and to raise an alarm about the early signs of a late intracranial bleed."*
- **Under-5 behavioural expression:** *"irritability or altered behaviour (easily distracted, not themselves, no concentration, no interest in things around them), particularly in babies and children under 5"* [PAGE 8] — the symptom is behavioural, so the observer must be a competent proxy.

**The carer as sensor.** The most distinctive theory-of-mind operator in NG232 is that lay concern is a formal criterion, not a soft signal. *"continuing concern by helpline staff about the diagnosis"* [PAGE 8]; *"continuing concern by the injured person, or their family or carer, about the diagnosis"* [PAGE 10]; and *"no one is able to observe the injured person at home"* [PAGE 10] — absence of an observer is itself a risk factor. The guideline thereby treats the social network as an instrument with measurable sensitivity, and treats its absence as a positive test result.

**The clock as the tie-breaker.** When habit and counter-trap conflict, NG232 resolves via timestamps, not opinion. The decisive asymmetries:
- A normal CT does not terminate the episode: *"If a person has had a normal CT scan but does not have a GCS score of 15 after 24 hours of observation, consider a further CT or MRI scan"* [PAGE 35].
- Discharge is gated on state, not on imaging: *"Do not discharge people presenting with a head injury until their GCS score is 15 or, in preverbal and non-verbal children, consciousness is normal"* [PAGE 37].
- Discharge is gated on supervision, not on state alone: *"Only transfer people with any degree of head injury to their home if there is somebody suitable at home to supervise them"* [PAGE 37].
- The endocrine clock runs longest and slowest: *"any severity of head injury can cause pituitary dysfunction. This may present immediately, hours, weeks or months after the injury"* [PAGE 33].

**Regression risk that survives all of the above.** The child with exactly one second-tier risk factor [PAGE 20–21] is the highest-regression node in the document: the clinician has done the assessment, found a finding, and the guideline says *do not scan* — observe. In a busy department the 4-hour observation is the first thing to be compressed. The August 2023 clarification that the window runs *"from the time of injury"* [PAGE 76] is precisely a defence against that compression, because it removes the excuse that the clock had not started.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

**Layer A — Physiological vetoes (hard, non-negotiable).** These override transfer urgency.
- *"Do not transport someone with persistent hypotension, despite resuscitation, until the cause has been identified and they are stabilised"* [PAGE 29]. The veto is absolute and explicitly outranks urgency: *"Although it is understood that transfer is often urgent, complete the initial resuscitation and stabilisation of the person, and establish comprehensive monitoring before transfer, to avoid complications during the journey"* [PAGE 29].
- Gas-exchange veto [PAGE 29]: $\mathrm{PaO_2}<13\ \mathrm{kPa}$ on oxygen or $\mathrm{PaCO_2}>6\ \mathrm{kPa}$ mandates intubation and ventilation.
- Airway veto [PAGE 29]: $G\le 8$, loss of protective laryngeal reflexes, irregular respirations.
- Pre-emptive intubation veto before the journey for *"significantly deteriorating conscious level (1 or more points on the motor score), even if not coma"*, unstable facial skeleton fractures, copious oral bleeding, seizures [PAGE 29–30].
- Pain as a physiological veto: *"Manage pain effectively because it can lead to a rise in intracranial pressure"* [PAGE 12, repeated PAGE 16], with named mechanical interventions — reassurance, splinting limb fractures, catheterising a full bladder.

**Layer B — Biomechanical vetoes (mechanism energy).** Mechanism substitutes for measured energy and is thresholded by age: $>1$ m or $>5$ stairs at 16+ [PAGE 19]; $>3$ m under 16 [PAGE 20]. The cervical spine list adds vector-specific mechanisms — *"an axial load to the head such as from diving"*, rollover, ejection, motorised recreational vehicles, bicycle collision [PAGE 24]. The reverse veto also exists: a *"simple rear-end motor vehicle collision"* is a low-risk feature permitting safe range-of-movement assessment [PAGE 23]. And the mechanical classifier can be overridden by material properties of the patient rather than the impact: *"a condition predisposing them to a higher risk of injury to the cervical spine (for example, axial spondyloarthritis)"* [PAGE 24], with paediatric additions of *"collagen vascular disease, osteogenesis imperfecta"* [PAGE 25].

**Layer C — Structural vetoes on the imaging pathway.** CT availability is a veto on the local pathway, not on the indication: *"Arrange transfer to a suitable hospital for people with indications for a CT scan who present to a hospital where CT scans are not available"* [PAGE 18], with the network obligation at [PAGE 18]. Direct community access is vetoed outright: *"Do not refer people who have had a head injury for neuroimaging by direct access from the community"* [PAGE 14], reasoned at [PAGE 56] on timeliness and interpretability grounds. And plain skull X-ray is vetoed for diagnosis: *"Do not use plain X-rays of the skull to diagnose important traumatic brain injury before a discussion with a neuroscience unit"*, with the safeguarding exception for skeletal survey [PAGE 18]. In the cervical spine, X-ray is displaced by CT at 16+ [PAGE 64] but retained first-line under 16 under defined conditions [PAGE 25–26], on radiation grounds [PAGE 64].

**Layer D — Social/environmental vetoes (the closest available analogue to a "weather" layer).** NG232 contains **no meteorological criteria whatsoever** — no temperature, wind, precipitation, visibility, or seasonal parameter appears anywhere in pages 1–76. This is a genuine evidentiary gap and is adjudicated as such: the weather layer is *vacuous* for this source and must not be fabricated. The functional substitutes the document does supply are:
- Observability: *"no one is able to observe the injured person at home"* [PAGE 10].
- Supervision capacity: *"appropriate support structures for safe discharge to the community and for subsequent care (for example, competent supervision at home)"* [PAGE 36–37].
- Transport feasibility as a clinical criterion in its own right: *"there is no other way of safely transporting the person to the hospital emergency department"* [PAGE 7]; and *"The referring professional should determine if an ambulance is needed, based on the person's clinical condition. If an ambulance is not needed, provided the person is accompanied, public transport or being driven in a car are appropriate means of transport"* [PAGE 10], with a mandatory competent adult escort [PAGE 10].
- Custodial setting as a distinct environment requiring equivalent safeguards [PAGE 37, PAGE 70].

**Layer E — Safeguarding veto (overrides all clinical calculus).** *"Consider or suspect abuse, neglect or other safeguarding issues as a contributory factor to, or cause of, a head injury"* [PAGE 16]; *"Involve a clinician with training in safeguarding in the initial assessment"* [PAGE 16–17]. The base rate is stated: *"in 25% to 30% of children under 2 who are hospitalised with a head injury, it is caused by abuse"* [PAGE 73]. Suspicion of non-accidental injury is itself a 1-hour CT criterion [PAGE 20] and a documented admission indication [PAGE 31].

**Adjudication rule.** When layers conflict, the ordering derivable from the text is: **A (physiology) > E (safeguarding) > B (biomechanics) > C (structural pathway) > D (social logistics)**. Evidence for A outranking transfer: [PAGE 29]. For E outranking imaging timing: non-accidental injury sits in the 1-hour tier [PAGE 20]. For C outranking convenience: transfer to a CT-capable hospital is mandated rather than deferred [PAGE 18]. Layer D never outranks a clinical indication — it only gates discharge destination, never the decision to investigate.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

Each scenario is a closed, machine-checkable episode: inputs are drawn only from variables NG232 names; the label is the guideline-mandated action; the veto is the specific action that must be scored as failure.

---

**Veto 1 — The anticoagulated low-risk adult: the "consider" trap.**

*State:* Age 74. Fall from standing (not >1 m, not >5 stairs). No loss of consciousness. No amnesia. $G=15$ at 2 hours. On apixaban. No other risk factor. Lives with a competent spouse.

*Guideline operators engaged:* No tier-1 factor [PAGE 19]. No tier-2 factor — no $G<15$ at 2 h, no age-65-plus-plus-LOC/amnesia combination, since there is no LOC or amnesia [PAGE 19]. However $G$ at 2 h is 15 and there is no LOC/amnesia, so the medium-risk limb is not triggered by age alone. Anticoagulation limb: *"consider doing a CT head scan: within 8 hours of the injury... if it is difficult to do a risk assessment or if the person might not return"* [PAGE 21].

*Mandated action:* Documented risk assessment plus shared decision making. Either scan within 8 hours, or discharge without scanning with written and verbal advice [PAGE 38] and confirmed supervision. The rationale text is explicit: *"they could be discharged safely without a CT scan, with the usual discharge advice"* [PAGE 59].

*Veto:* Automatic mandatory scanning scored as the only correct action; **and** automatic discharge without documented risk assessment. Both are failures.

*Prediction (falsifiable):* In a prospective audit of ≥200 such presentations, ≥60% of records will show either a CT or an explicit shared-decision note, and the remainder will be split between undocumented discharge and admission for observation. A finding of ≤20% documentation of shared decision making falsifies the claim that this recommendation is operable as written.

---

**Veto 2 — The single-risk-factor toddler: the observation clock.**

*State:* Age 3 years. Witnessed loss of consciousness lasting 6 minutes. $G=15$ throughout. No vomiting. No drowsiness. No seizure. No focal deficit. No skull fracture signs. No safeguarding concern.

*Guideline operators engaged:* Recommendation 1.5.11 requires **more than 1** risk factor for a 1-hour CT. Here there is exactly one — the >5-minute LOC [PAGE 20]. *"Observe people under 16 who have sustained a head injury but have only 1 of the risk factors in recommendation 1.5.11 for a minimum of 4 hours from the time of injury"* [PAGE 21]. Escalation to 1-hour CT occurs only if, during observation, there is *"a GCS score of less than 15"*, *"further vomiting"*, or *"a further episode of abnormal drowsiness"* [PAGE 21].

*Mandated action:* No immediate CT. Structured observation. Observation window measured from time of injury, not time of arrival (August 2023 amendment, [PAGE 76]). If the child arrived 3 hours post-injury with $G=15$, the minimum window is satisfied by 1 further hour, but *"use clinical judgement to determine whether a longer period of observation is needed"* [PAGE 21].

*Veto:* Immediate CT on a single risk factor. Equally, discharge without completing the observation window. Equally, starting the 4-hour clock at arrival rather than injury — a directly contradicted clock origin [PAGE 76].

*Prediction (falsifiable):* In a paediatric ED audit, the modal disposition for this exact phenotype will be observation, not CT. A rate of immediate CT exceeding 30% in this phenotype indicates the guideline's tier-2 threshold is being ignored. Additionally, the median documented observation duration should be ≥4 hours from injury time; a median below ~3 hours indicates clock-origin drift.

---

**Veto 3 — Tranexamic acid sequencing: time and order.**

*State:* Age 34. Road traffic collision. $G=13$ at scene. No external haemorrhage. Paramedic