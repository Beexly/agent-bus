---
source: "NICE-2025-RehabilitationChronicNeurologicalDisorders-AcquiredBrainInjury-NG252.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-b-medical"
pages: 145
model: deepseek/deepseek-v4.1-flash-1017
words: 8362
---

<NATIVE_REASONING>
The user has provided a massive NICE guideline (NG252) on rehabilitation for chronic neurological disorders. They want me to produce a structured analysis with these XML sections. This is not a betting-related task — it's a medical guideline. The system prompt mentions "ZERO BETTING LINES" — so no betting content at all. Good. The prompt says this is a "GSE + GSI Frontier Reasoning Foundry" but the content is a clinical guideline. I should just produce a deep, rigorous analysis of the guideline using the requested XML structure.

Wait — the invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." This suggests the system is normally oriented to sports/event forecasting but here the source is a medical guideline. So I should treat this as a "drive source" analysis — extracting operators, equations, etc., from the guideline.

The challenge: the guideline is clinical, not mathematical. But the prompt demands "formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I need to construct legitimate formal models of rehabilitation as a dynamical system — this is defensible: rehabilitation dose-response, fatigue-energy conservation, functional capacity trajectories. I must avoid "toy equations" like Force/Fatigue. So I need to build equations grounded in actual constructs from the guideline: e.g., exercise dose D = f × T × I (frequency, duration, intensity) — that's actually what NICE recommends ("agree a clinically relevant exercise dose (frequency, duration and intensity)" on page 46). That's a real operator from the text, not invented.

I can build:
1. Rehabilitation dose vector: \(\vec{D} = (f, \tau, I)\) with units Hz, s, and intensity in metabolic equivalents or %1RM.
2. Functional capacity trajectory: \(F(t)\) with drift and response to dose — but I need to be careful: a "toy equation" would be inventing fake ratios. A legitimate model: \( \dot{F} = -\lambda F + \beta \cdot u(t) \cdot \eta(t) + \sigma \xi(t)\) — a stochastic Ornstein-Uhlenbeck with controlled input. Units: F in standardized functional score (0-100 or z-units), λ in s^-1, β in score per dose unit.
3. Fatigue: energy conservation — battery model \(E(t)\), pacing constraint \(\int_0^T P(t)dt \le E_0 + \rho T\).
4. Cognitive assessment: sensitivity/specificity, but better: signal detection theory d' for standard tests vs functional assessment — that's legitimate.
5. Treadmill gait training frequency: the guideline says high-frequency led to worse outcomes than low/intermediate in Parkinson's — so a non-monotonic dose-response with an optimum. I can formalize \( \Delta G(f) = a f - b f^2 \) with breakdown at \(f > a/2b\).
6. Single point of contact: coordination — could model as a Markov chain of referral transitions, or information-theoretic: reduction in entropy of care pathway.
7. Time-to-assessment: queueing theory M/M/c — capacity and responsiveness (rec 1.4.4 "capacity and expertise to respond in a timely and proportionate way"). Little's law L = λW. Units: patients, referrals/day, days.
8. Errorless vs error-based learning: learning curve \(p_n = 1 - (1-\alpha)^n\) vs \(p_n\) with error correction. Could formalize as a two-parameter model.
9. Vestibular: canalith repositioning — could use a physical model of otoconia, but maybe simpler: vestibular adaptation with time constant.
10. 24-hour postural management: pressure-time integral \( \int P dt \) (mmHg·h) — that's a real clinical metric for pressure injury risk. Legit.
11. Spasticity/contracture: torque-angle, \( \int T dt \) etc.

Singularity/breakdown regimes: e.g., when dose exceeds tolerance, when λ→0 (no recovery), when demand λ exceeds service capacity μc → queue blow-up (utilization ρ = λ/(cμ) → 1). That's a genuine singularity: M/M/c queue diverges as ρ→1. Good.

Also the "RETROCAUSAL_GENEALOGY" — historical/scientific lineage. I can trace: WHO ICF (2001), British Society of Rehabilitation Medicine definition, Rusk/Howard Rusk's 1940s-50s rehabilitation medicine, the Bobath approach, evidence-based rehab, NICE stroke guideline 2013/2023, MS guideline fatigue (1.5.3–1.5.16), errorless learning from Baddeley & Wilson 1994, pacing/energy conservation from MS fatigue management, motor learning theory (schema theory, Schmidt), self-determination theory (Deci & Ryan), social context theory, motivational interviewing (Miller & Rollnick), positive behaviour support (ABA lineage), treadmill gait training (Hesse 1990s, Lokomat 1999), FES for drop foot (NICE IPG), vestibular rehab (Cawthorne-Cooksey 1940s), canalith repositioning (Epley 1992), 24-hour postural management (UK consensus), serial casting.

"Multi-week traps" — the prompt wants "multi-week traps" in the genealogy. In a betting context that means long-running narratives. Here: I can talk about the multi-year lag in guideline uptake (e.g., fatigue being "often overlooked" — page 111, 112), the decades-long gap between errorless learning evidence and practice, the "rehabilitation only when symptoms affect function" trap (page 90), the enteral feeding overuse trap ("NHS tends to use enteral feeding before strictly necessary" page 126).

"RECURSIVE_THEORY_OF_MIND" — crisis habit regression vs counter-trap vs clock. I'll reframe: clinician/clinician-team belief modeling under time pressure — the "clock" being the diagnostic odyssey (some diagnoses take years — page 96). Habit regression: practitioners default to biomedical/visible-symptom focus (page 93, 100 "bias towards assessment of biomedical functioning"). Counter-trap: the guideline's explicit countermeasures.

"CROSS_LAYER_VETO_ADJUDICATION" — physical/biomechanical/weather veto proof. Weather? That's odd for a clinical guideline — but I can address environmental factors: ICF environmental factors, rural travel barriers, online options (page 71, 134), and for the "weather" layer — outdoor physical activity, seasonal/viral triggers, and the fact that weather is a *non-veto* here: the guideline's telehealth/online options (1.3.7, 1.10.4, 1.24.7) explicitly neutralize geographic/weather vetoes. That's an honest adjudication: weather vetoes transport but not rehabilitation because of telehealth provisions. Good — I'll do that carefully and cite pages.

"RLVR_COUNTERFACTUAL_VETOES" — 3 verifiable RLVR (reinforcement learning from verifiable rewards) veto scenarios + predictions. I'll construct three testable counterfactuals with falsifiable predictions keyed to specific recommendation numbers and page cites.

Word count: need ≥1000 words total, with THINK_TRACE ≥400 words. I'll write substantially more.

Citations: must use exact [PAGE N] markers and verbatim quotes. Let me collect good quotes:

- p.7: "This guideline covers rehabilitation in all settings for children, young people and adults with a chronic neurological disorder, neurological impairment or disabling neurological symptoms due to acquired brain injury, acquired spinal cord injury, acquired peripheral nerve disorder, functional neurological disorder or progressive neurological disease."
- p.81: WHO definition: "a set of interventions designed to optimise functioning and reduce disability in individuals with health conditions in interaction with their environment"
- p.81: BSRM: "a process of assessment, treatment and management with ongoing evaluation by which the individual and their family/carers are supported to achieve their maximum potential for physical, cognitive, social and psychological function, participation in society and quality of living"
- p.46 (1.15.1): "agree a clinically relevant exercise dose (frequency, duration and intensity)"
- p.45 (1.14.7): pacing and other energy-conservation strategies, CBT, appropriate physical activity
- p.49 (1.16.10): "If the person has a progressive neurological condition, think about low- or intermediate-frequency treadmill gait training over a longer period"
- p.115: "high-frequency training led to worse outcomes than low and intermediate frequency in people with Parkinson's disease"
- p.116: "exercise capacity will decrease quickly once treadmill gait training has stopped"
- p.50 (1.16.13): neuromuscular electrical stimulation; 1.16.14 functional electrical stimulation
- p.55 (1.18.10): "For people with a functional neurological disorder consider replacing standard cognitive tests with observation and dynamic testing."
- p.56 (1.18.8) domains list
- p.63 (1.21.8): errorless/error-based
- p.76: errorless learning definition
- p.45: fatigue
- p.53 (1.17.17) positive behaviour support
- p.49 (1.16.8): 24-hour postural management, "at risk of skin breakdown, pain, sleep disturbance, respiratory dysfunction or muscle or joint contracture"
- p.15 (1.3.7) telehealth
- p.16 (1.4.4) capacity to respond timely and proportionately
- p.20 (1.6.3) urgent equipment
- p.96 (rationale): "some diagnoses can take years to establish"
- p.90: "rehabilitation is often only considered when symptoms start to affect functioning and only provided in the short term for specific symptoms"
- p.110: "people with a chronic neurological disorder may often persevere with pain or be prescribed analgesia that is ineffective"
- p.126: "the NHS tends to use enteral feeding before strictly necessary" — actually p.126 says "the NHS tends to use enteral feeding before strictly necessary. They agreed enteral feeding should be a last resort." Let me check: page 126 "However, the committee highlighted that it could reduce a person's autonomy and that the NHS tends to use enteral feeding before strictly necessary." Yes p.126.
- p.114: "using orthotics, splints or serial or removal casting without careful consideration can worsen symptoms and reinforce unhelpful beliefs"
- p.122: "cognitive function may appear adequate but still fall below the levels the person previously had"
- p.107: complex case management economics, "A US study that showed cost reductions because of reduced accident and emergency (A&E) visits and hospital admissions"
- p.83: single point of contact "must remain even when the person is not receiving rehabilitation"
- p.79: key contact "should remain in place even when the person is not receiving active rehabilitation"
- p.93: "healthcare practitioners often focus on physical and visible symptoms, and some have prejudged ideas about how certain disorders and injuries will respond to rehabilitation treatments"
- p.100: "bias towards assessment of biomedical functioning, with less importance given to assessment of emotional wellbeing and mental health, and cognitive impairments"
- p.104: "rehabilitation is for managing disability rather than optimising or maintaining functioning"
- p.113: dose-frequency "optimising muscle strength and physical functioning, but they need to be of the correct frequency, duration and intensity. They agreed that this is often overlooked."
- p.139: variation
- p.7: excluded stroke in adults, cerebral palsy, dementia, epilepsy.
- p.143-144 exclusions.
- p.87 rec 3: tDCS/TMS research recommendation.
- p.89 rec 9: complex case management research.

OK. Now the equations. I must be careful to make them formal and honest, labeling which are (a) directly implied by guideline quantities, (b) standard biophysical/queueing models, (c) modeling constructs I define with explicit assumptions. That protects against "toy equation" accusation.

Let me draft the LaTeX.

**Operator 1: Rehabilitation dose vector.**
\[
\vec{D}_{j} = (f_j,\ \tau_j,\ I_j), \quad [f_j]=\text{Hz (sessions}\cdot\text{wk}^{-1}),\ [\tau_j]=\text{min},\ [I_j]=\%\text{VO}_{2\text{max}} \text{ or } \%1\text{RM}
\]
Cumulative dose: \( \mathcal{D}_j(t) = \int_0^t f_j(s)\,\tau_j(s)\,I_j(s)\,ds \), units MET·h or kg·reps.

This is grounded in 1.15.1 [PAGE 46].

**Operator 2: Functional trajectory (controlled OU process).**
\[
dF_i = \big[-\lambda_i (F_i - F_i^{\infty}) + \sum_j \beta_{ij} u_j(t)\big]dt + \sigma_i dW_t
\]
\(F_i\): ICF-domain score (z-units, dimensionless), \(\lambda_i\): recovery/disuse rate (wk⁻¹), \(\beta_{ij}\): coupling (z per MET·h), \(u_j\): dose rate. Singularity: \(\lambda_i \to 0\) (irreversible) — recovery plateau; \(\beta_{ij}<0\) → harmful dose.

**Operator 3: Non-monotonic dose-response (treadmill frequency).**
\[
\Delta G(f) = a f - b f^{2}, \quad f^{*} = a/(2b),\quad \frac{\partial^2 \Delta G}{\partial f^2} = -2b < 0
\]
Breakdown/inversion regime: \(f > a/b\) gives \(\Delta G < 0\). Cite [PAGE 49], [PAGE 115]. Units: a in m·(session⁻¹), b in m·session⁻².

**Operator 4: Detraining decay after withdrawal.**
\[
F(t) = F_{\text{end}} e^{-\lambda_{\text{det}}(t-t_{\text{end}})}
\]
Cite [PAGE 116] "exercise capacity will decrease quickly once treadmill gait training has stopped." Half-life \(t_{1/2} = \ln 2/\lambda_{\text{det}}\).

**Operator 5: Energy conservation / pacing constraint.**
\[
\int_{t_0}^{t_0+T} P(t)\,dt \le E_{\text{avail}}(t_0) + \rho T, \quad [P]=\text{W or MET}, [E]=\text{MET}\cdot\text{h}
\]
with \(E_{\text{avail}}\) fluctuating; pacing = choose \(P(t)\) to maximize weighted goal achievement \(\sum_k w_k \mathbb{1}[\text{task }k \text{ completed}]\) subject to constraint. Cite [PAGE 44-45] fatigue, [PAGE 45] 1.14.7, [PAGE 111-112] adult vs child energy conservation.

**Operator 6: Service capacity / queueing.**
M/M/c: \( \rho = \lambda/(c\mu) \), \(W_q = \frac{C(c,\rho)}{c\mu - \lambda} + \frac{1}{\mu}\). Singularity at \(\lambda \uparrow c\mu\): \(W_q \to \infty\). Units: λ referrals·day⁻¹, μ day⁻¹, W in days. Cite [PAGE 16] 1.4.4, [PAGE 15] 1.4.2 self-referral (increases λ), [PAGE 95] "Ensuring ongoing access, re-access and self-referral could increase pressure on existing services."

That's a genuine and important gray-zone: the guideline simultaneously increases λ (self-referral, open access) and demands responsiveness — a designed capacity trap. Cite [PAGE 95].

**Operator 7: Information-theoretic coordination gain.**
Single point of contact reduces pathway entropy: \(H(\text{pathway}) = -\sum_k p_k \log p_k\), bits; or mutual information \(I(X;Y)\) between need-state and service-received. Cite p.83, p.79, p.107.

Maybe better: define coordination deficit \(\Delta H = H(\text{service received} \mid \text{need}) - H_{\min}\). Justify with definitions.

**Operator 8: Signal detection for cognitive testing.**
\(d' = z(H) - z(F)\), criterion \(c = -\frac{1}{2}[z(H)+z(F)]\). Dynamic testing increases \(d'\) by reducing within-person variance; for FND, single-session standard test has high \(d'\) variance → measurement invalidity. Cite [PAGE 55] 1.18.10, [PAGE 121-122] "assessing inconsistencies in cognitive performance".

**Operator 9: Pressure–time integral for 24-h postural management.**
\[
\Pi = \int_0^{24\text{h}} P_{\text{interface}}(t)\,dt \quad [\Pi]=\text{mmHg}\cdot\text{h}
\]
Threshold for tissue damage; cite [PAGE 49] 1.16.8.

**Operator 10: Errorless vs error-based learning.**
Errorless: \(p_n = 1-(1-\alpha)^n\) with \(\alpha\) per-trial acquisition; error-based: \(p_n = \frac{1}{1+e^{-(\gamma_0+\gamma_1 n)}}\) logistic with errors feeding correction, requires intact error-monitoring (ACC/executive). Breakdown when executive function impaired → error-based produces error reinforcement. Cite [PAGE 63] 1.21.8, [PAGE 76] definitions, [PAGE 128].

**Operator 11: Spasticity/serial casting harm threshold.**
Harms: cite [PAGE 49] 1.16.7 and [PAGE 114]. Formalize as a sign-flip in the treatment effect: \(\partial F/\partial u < 0\) in FND subpopulation.

**Operator 12: Screening test for dysphagia / urgency.**
Severity-conditioned triage: \(t_{\text{assess}} \le \tau_{\text{urgent}}\) if severity \(S > S^*\). Cite [PAGE 58] 1.19.3.

Good. Now word counts. THINK_TRACE ≥400 words — I'll write ~700-900.

Let me also address the "gray-zone audit" explicitly: where the guideline is silent or self-tensioned. E.g., 
- No numerical dose thresholds given (the guideline says "agree a clinically relevant exercise dose" without specifying) — a genuine evidence gap.
- Complex case management: no cost-effectiveness evidence (p.107, p.89 rec 9) — the guideline recommends it anyway based on committee experience. Gray zone.
- 24-hour postural management: "No evidence was identified" (p.115) — recommendation from expertise.
- Fatigue in children: research rec 6.
- tDCS/TMS: research rec only (p.87).
- The guideline excludes stroke >16 (p.143) but includes stroke <16 (p.142) — a discontinuity at age 16 that creates a boundary condition/trap.
- FND: potential harms of equipment/casting (p.49 1.16.7, p.63 1.21.5, p.114) — the guideline explicitly names iatrogenic risk. That's a "veto" layer.

Now the CROSS_LAYER_VETO_ADJUDICATION: I'll structure as vetoes:
V1 physical/biomechanical: contracture, skin breakdown, respiratory dysfunction — 24h postural management vetoes aggressive mobility loading; pressure-time integral.
V2 biomechanical/orthotic: serial casting in FND — veto.
V3 environmental/weather: travel, rural, outdoor activity — partially vetoed by telehealth but not fully; the "weather" layer operates through (a) transport disruption, (b) seasonal infection risk in acquired brain injury from infection causes (p.141-142), (c) outdoor exercise feasibility. The guideline's counter is 1.3.7 telehealth [PAGE 15], 1.10.4 [PAGE 32], 1.24.7 [PAGE 71].
V4 service-layer veto: capacity ρ→1.
V5 informational veto: cognitive/communication impairment excluding people from assessment — 1.8.20 "Do not exclude someone from any aspect of holistic needs assessment based on their communication, memory, learning or other cognitive difficulties." [PAGE 26] That's an explicit anti-veto.

The adjudication: which layer dominates? Deterministic physical constraints (contracture, aspiration) veto; weather does not veto because of substitution options; capacity veto is real but elastic.

RLVR_COUNTERFACTUAL_VETOES: three scenarios with verifiable predictions.
1. Treadmill frequency inversion: if a service deploys high-frequency (≥5 sessions/wk) treadmill training in progressive disease, predict worse mobility outcomes than 2-3/wk — verifiable via timed gait speed, 6MWT. Veto the high-frequency protocol. Cite [PAGE 49], [PAGE 115].
2. Self-referral without capacity: if 1.4.2 is implemented without c·μ increase, predict W_q blow-up and deterioration in time-to-assessment — verifiable via referral-to-assessment interval. Veto the "open access alone" implementation. Cite [PAGE 15], [PAGE 95], [PAGE 16].
3. Dynamic testing substitution in FND: if standard cognitive tests retained for FND, predict higher false-positive cognitive impairment and iatrogenic reinforcement — verifiable via test-retest inconsistency and patient-reported validation. Veto standard-test-only pathway. Cite [PAGE 55], [PAGE 121].

Each with a prediction and a falsifier.

Now let me be careful about the "no betting lines" invariant — I will not mention any. Fine.

Also "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." So I must not write something like "Capacity/Fatigue index." I'll make sure every equation has named, unit-bearing quantities and cites.

Let me write it now. I'll aim for substantial length, maybe 2500-3500 words.

Note on units: F in z-units is dimensionless — but the invariant says "SI/information/probability units." I'll give units consistently: dose in MET·h (1 MET = 3.5 mL O2·kg⁻¹·min⁻¹ = 58.2 W·m⁻²), time in days/weeks, information in bits/nats, probabilities dimensionless in [0,1], d' in standard deviation units (dimensionless), pressure-time in mmHg·h, force in N, torque in N·m.

Let me write.

I should double check quotes verbatim.

p.46: "agree a clinically relevant exercise dose (frequency, duration and intensity)." Yes.
p.113: "exercise and physical activity programmes are important for optimising muscle strength and physical functioning, but they need to be of the correct frequency, duration and intensity. They agreed that this is often overlooked." Yes.
p.49: "If the person has a progressive neurological condition, think about low- or intermediate-frequency treadmill gait training over a longer period to optimise their mobility and exercise capacity." Yes.
p.115: "Evidence on different frequencies of treadmill training showed that high-frequency training led to worse outcomes than low and intermediate frequency in people with Parkinson's disease." Yes.
p.116: "The committee recognised that exercise capacity will decrease quickly once treadmill gait training has stopped." Yes — page 116.
p.115: "No evidence was identified for 24-hour postural management strategies." Yes.
p.49: 1.16.8 "Consider 24-hour postural management strategies ... if the person is: not able, or is less able, to sit up or stand up unaided or move independently, and at risk of skin breakdown, pain, sleep disturbance, respiratory dysfunction or muscle or joint contracture." Yes.
p.55: "For people with a functional neurological disorder consider replacing standard cognitive tests with observation and dynamic testing." Yes.
p.121-122: "Dynamic testing ensures that cognitive function is assessed over time and under varying conditions, rather than relying on a single performance of a standard test. It is, therefore, useful for assessing inconsistencies in cognitive performance, which is particularly relevant for this population." Yes p.121-122.
p.122: "They noted that cognitive function may appear adequate but still fall below the levels the person previously had." Yes.
p.63: 1.21.8 "When delivering skills-based learning or task-based training, use error-based or errorless techniques depending on the person's sensory, perceptual, motor planning and cognitive strengths and weaknesses and the skill or task the training is focusing on." Yes.
p.76: "Errorless learning is an instructional method aimed at preventing mistakes during the learning process." Yes.
p.128: "Errorless learning supports those with memory impairments and boosts confidence, while error-based learning enhances critical thinking and decision-making." Yes.
p.107: "This analysis included a US study that showed cost reductions because of reduced accident and emergency (A&E) visits and hospital admissions." Yes.
p.83: "A single point of contact must remain even when the person is not receiving rehabilitation, to ensure access to services as needs emerge." Yes.
p.79: "This contact should remain in place even when the person is not receiving active rehabilitation." Yes.
p.95: "Ensuring ongoing access, re-access and self-referral could increase pressure on existing services." Yes.
p.16: 1.4.4 "Ensure rehabilitation services have the capacity and expertise to respond in a timely and proportionate way to people who have: changing needs outside of planned interventions; rapidly emerging needs." Yes.
p.15: 1.4.2 "Set up simple referral and re-referral (including self-referral) mechanisms..." Yes.
p.15: 1.3.7 telehealth. Yes.
p.32: 1.10.4 "may include telehealth, where appropriate." Yes.
p.71: 1.24.7 online options. Yes.
p.26: 1.8.20 "Do not exclude someone from any aspect of holistic needs assessment based on their communication, memory, learning or other cognitive difficulties." Yes.
p.90: "Evidence found that rehabilitation is often only considered when symptoms start to affect functioning and only provided in the short term for specific symptoms." Yes.
p.93: "It also showed that healthcare practitioners often focus on physical and visible symptoms, and some have prejudged ideas about how certain disorders and injuries will respond to rehabilitation treatments." Yes.
p.100: "Evidence highlighted a bias towards assessment of biomedical functioning, with less importance given to assessment of emotional wellbeing and mental health, and cognitive impairments." Yes.
p.104: "stemming from the belief that rehabilitation is for managing disability rather than optimising or maintaining functioning." Yes.
p.110: "people with a chronic neurological disorder may often persevere with pain or be prescribed analgesia that is ineffective." Yes.
p.126: "the NHS tends to use enteral feeding before strictly necessary. They agreed enteral feeding should be a last resort." Yes.
p.114: "using orthotics, splints or serial or removal casting without careful consideration can worsen symptoms and reinforce unhelpful beliefs." Yes.
p.45: 1.14.7 pacing, CBT, physical activity. Yes.
p.45/44: fatigue assessment. Yes.
p.96: "However, an early needs assessment is crucial as some diagnoses can take years to establish." Yes (p.96).
p.7: scope. Yes.
p.142: stroke in under-16s included. p.143: "Stroke in overs 16s" excluded.
p.81: WHO and BSRM definitions. Yes.
p.139: "there is wide variation in the delivery of rehabilitation interventions to people with these long-term conditions." Yes p.139.

Good. Now write.

Structure word budget: THINK_TRACE ~800, SOURCE_OPERATORS ~900, RETROCAUSAL ~450, RECURSIVE_TOM ~400, CROSS_LAYER ~450, RLVR ~450. Total ~3450. Good.

Let me write carefully with LaTeX.

One more: "multi-week traps" in RETROCAUSAL_GENEALOGY — I'll interpret as slow-moving multi-year implementation traps: e.g., fatigue overlooking (decades), the "short-term specific-symptom" model, errorless learning lag, the diagnostic odyssey.

Write now.
</NATIVE_REASONING>

<THINK_TRACE>

**Step 0 — Scope lock.** The drive source is a 145-page NICE guideline (NG252, published 15 October 2025) covering rehabilitation "in all settings for children, young people and adults with a chronic neurological disorder, neurological impairment or disabling neurological symptoms due to acquired brain injury, acquired spinal cord injury, acquired peripheral nerve disorder, functional neurological disorder or progressive neurological disease" [PAGE 7]. It explicitly excludes adult stroke, cerebral palsy, dementia and epilepsy [PAGE 7], [PAGE 143]. Therefore no operator may be imported from the adult stroke evidence base except where NG252 itself cross-references it (e.g. recommendation 1.23.4 imports "recommendation 1.16.4 in NICE's guideline on stroke rehabilitation in adults" [PAGE 69]) — and where it does, that import must be flagged as an *external* operator with a boundary condition, not as NG252-native content.

**Step 1 — What kind of system is this?** NG252 is not a dosing formulary. It is a *coordination-and-trajectory* guideline: it governs (a) who is assigned to whom and when (single point of contact, key worker, complex case manager, initial contact for rehabilitation), (b) how a whole-person assessment is composed from domain assessments, and (c) how a multi-domain intervention plan is dosed, sequenced and reviewed over a lifelong horizon. The formal objects are therefore: a state vector over ICF domains, a controlled stochastic process with domain couplings, a dose vector with a non-monotonic response surface, a queueing/dispatch layer, and an information-coordination layer. I construct each explicitly and mark provenance.

**Step 2 — Multi-hop derivation chain 1 (dose → capacity → decay).** The guideline mandates an exercise programme that "take[s] into account their executive function and levels of fatigue and pain" and requires the clinician to "agree a clinically relevant exercise dose (frequency, duration and intensity)" [PAGE 46]. The rationale section adds that programmes "need to be of the correct frequency, duration and intensity" and that "this is often overlooked" [PAGE 113]. Hop 1: dose is a *three-component vector*, not a scalar — frequency, session duration, intensity are independently modifiable and independently constrained. Hop 2: because the guideline separately warns on treadmill training that "high-frequency training led to worse outcomes than low and intermediate frequency in people with Parkinson's disease" and that this "could be extrapolated to other types of progressive neurological disease" [PAGE 115], the frequency response cannot be monotone increasing. Hop 3: a monotone-decreasing marginal-return curvature (quadratic) is the *minimal* model consistent with an interior optimum; it yields a strict interior maximum and an inversion regime. Hop 4: the guideline separately states that "exercise capacity will decrease quickly once treadmill gait training has stopped" [PAGE 116], which is an exponential detraining term with a half-life. Hop 5: the joint system is therefore a driven OU process whose input is a bounded non-monotone dose function and whose free response is exponential decay — a system with *two* failure modes: under-dosing (input below maintenance threshold) and over-frequency dosing (input in the inverted branch). Neither is a "toy ratio"; both are named, unit-bearing terms.

**Step 3 — Multi-hop derivation chain 2 (the capacity trap).** Recommendation 1.4.2 mandates "simple referral and re-referral (including self-referral) mechanisms that allow people with a chronic neurological disorder to access rehabilitation needs assessments, interventions and support when they need it, including after they have been discharged" [PAGE 15]. Recommendation 1.4.4 simultaneously mandates that services "have the capacity and expertise to respond in a timely and proportionate way" to "changing needs outside of planned interventions" and "rapidly emerging needs" [PAGE 16]. The committee's own impact analysis concedes: "Ensuring ongoing access, re-access and self-referral could increase pressure on existing services" [PAGE 95]. Hop 1: 1.4.2 raises the arrival rate λ. Hop 2: 1.4.4 is a service-level constraint on waiting time W_q. Hop 3: in any work-conserving multi-server system, W_q is a strictly increasing convex function of utilisation ρ = λ/(cμ), diverging as ρ ↑ 1. Hop 4: therefore 1.4.2 and 1.4.4 are *jointly infeasible* unless c or μ increases; the guideline does not quantify the required increase. This is a genuine gray-zone: the guideline asserts a design goal without a resource identity.

**Step 4 — Multi-hop derivation chain 3 (the iatrogenic sign-flip).** Three separate recommendations name harm from the *same* class of intervention: "Take into account the potential harms of inappropriate use of interventions if these might limit the possibility or extent of recovery, (for example, serial or removal casting), particularly for people with a functional neurological disorder" [PAGE 49]; "Take into account the potential harms of inappropriate use of equipment, compensatory aids, assistive devices and adaptive approaches if these might limit the possibility or extent of recovery, particularly for people with a functional neurological disorder" [PAGE 63]; and the rationale: "using orthotics, splints or serial or removal casting without careful consideration can worsen symptoms and reinforce unhelpful beliefs" [PAGE 114]. Hop 1: the standard monotone assumption ∂F/∂u > 0 fails for a named subpopulation. Hop 2: the sign flip is not a dosage magnitude issue but a *belief-and-attention* mechanism — the guideline's own FND operators are "acknowledge the presence and impact of symptoms while redirecting attention away from them" [PAGE 46] and "avoid reinforcing beliefs that there is structural damage or disease to the nervous system" [PAGE 39]. Hop 3: any device that foregrounds structural deficit therefore acts as a negative-dose input on the same latent variable the therapy is trying to move. Hop 4: this makes FND a *veto layer*, not a severity modifier — the intervention is contraindicated-by-mechanism, not merely reduced in dose.

**Step 5 — Gray-zone audit (explicit gaps).** (i) No numeric dose thresholds anywhere; the guideline repeatedly says "clinically relevant" without a number [PAGE 46]. (ii) 24-hour postural management: "No evidence was identified for 24-hour postural management strategies" — the recommendation rests on committee expertise [PAGE 115]. (iii) Complex case management: "Given the lack of evidence about the cost effectiveness of complex case management, economic analysis aimed to estimate the required health benefits" [PAGE 107], and a research recommendation is issued for exactly this [PAGE 89]. (iv) tDCS/TMS: "current evidence is insufficient to recommend their use" — research recommendation only [PAGE 123], [PAGE 87]. (v) Fatigue in children and young people: research recommendation 6 [PAGE 88]. (vi) A hard discontinuity at age 16: "stroke in under-16s" is included [PAGE 142] but "Stroke in overs 16s" is excluded [PAGE 143] — a boundary condition that manufactures a handover trap at transition. (vii) The guideline's own definitional split between "initial contact," "lead practitioner," and "single point of contact" is tripartite and temporally ordered [PAGE 77], [PAGE 79], [PAGE 83] — implementers routinely collapse these, which is the single largest fidelity failure mode.

**Step 6 — Adjudication stance.** Deterministic physical constraints (contracture, skin breakdown, aspiration, respiratory dysfunction) veto absolutely. Weather/geography does not veto, because NG252 supplies substitution operators (telehealth [PAGE 15], telehealth within the plan [PAGE 32], online social participation [PAGE 71]). Capacity vetoes probabilistically and is elastic. Informational exclusion is explicitly prohibited by the guideline itself [PAGE 26].

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**Notation and unit discipline.** \(F_i\) = functional status in ICF domain \(i\), expressed in standardised z-units (dimensionless, \(\sigma\)-scaled). \(u_j(t)\) = rehabilitation dose rate for intervention class \(j\). \(\lambda_i\) = spontaneous drift/recovery rate, \([ \lambda_i ] = \mathrm{wk^{-1}}\). \(\beta_{ij}\) = cross-domain coupling coefficient, \([ \beta_{ij} ] = \mathrm{z \cdot (MET \cdot h)^{-1}}\). \(P\) = metabolic power, \([P] = \mathrm{MET}\) (1 MET = \(3.5\ \mathrm{mL\ O_2 \cdot kg^{-1} \cdot min^{-1}} = 58.2\ \mathrm{W \cdot m^{-2}}\)). \([\Pi] = \mathrm{mmHg \cdot h}\). Information quantities in bits.

---

### (1) Dose vector operator — native to NG252

Recommendation 1.15.1: "agree a clinically relevant exercise dose (frequency, duration and intensity)" [PAGE 46].

\[
\vec{D}_j=(f_j,\ \tau_j,\ I_j),\qquad [f_j]=\mathrm{wk^{-1}},\quad [\tau_j]=\mathrm{min},\quad [I_j]=\%\,\mathrm{VO_{2max}}\ \text{or}\ \%\,1\mathrm{RM}
\]

Cumulative dose:

\[
\mathcal{D}_j(t)=\int_{0}^{t} f_j(s)\,\tau_j(s)\,I_j(s)\,ds,\qquad [\mathcal{D}_j]=\mathrm{MET\cdot h}
\]

*Assumption A1:* dose components are independently modifiable by the prescriber. *Assumption A2:* \(\mathcal{D}_j\) is additive across sessions up to the tolerance bound in (5). *Breakdown:* any component set to zero (e.g. \(f_j=0\) after supervised training ends) collapses the input term and the system reverts to free decay (4). The guideline explicitly flags the neglect of this vector: programmes "need to be of the correct frequency, duration and intensity. They agreed that this is often overlooked" [PAGE 113].

---

### (2) Controlled multi-domain trajectory operator

\[
dF_i=\Big[-\lambda_i\big(F_i-F_i^{\infty}\big)+\sum_{j}\beta_{ij}\,u_j(t)\Big]dt+\sigma_i\,dW_t
\]

*Interpretation:* \(\lambda_i\) is the rate at which an untreated domain relaxes toward its natural ceiling \(F_i^{\infty}\); \(\sum_j \beta_{ij} u_j\) is the therapeutic drive; \(\sigma_i dW_t\) is within-person fluctuation.

*Grounding:* the guideline requires assessment of how functioning "varies… at different times of the day and from day to day… over the longer term" [PAGE 25], which is precisely the \(\sigma_i\) and \(\lambda_i\) terms; and it requires that plans "aim to improve, maintain or reduce deterioration in functioning over time" [PAGE 27], which is the sign of the bracket.

*Singularity regimes:*
- \(\lambda_i\to 0\): **irreversible plateau** — no spontaneous recovery, so \(F_i\) tracks only the integral of dose and decays to zero once dose stops. This is the formal signature of the progressive-disease case.
- \(\beta_{ij}<0\): **iatrogenic coupling** — the domain worsens with dose. This is not hypothetical: it is mandated as a consideration twice [PAGE 49], [PAGE 63] and explained mechanistically at [PAGE 114].
- Coupling cascade: if \(|\beta_{ij}|\) is large, single-domain targeting produces unintended cross-domain motion. The committee states the clinical version directly: "addressing isolated symptoms, such as gait difficulties, without considering others, like fatigue or executive dysfunction, may negatively impact adherence to the rehabilitation plan" [PAGE 99].

---

### (3) Non-monotone frequency response (treadmill model)

Evidence: "high-frequency training led to worse outcomes than low and intermediate frequency in people with Parkinson's disease," and the committee "agreed this could be extrapolated to other types of progressive neurological disease" [PAGE 115]; recommendation 1.16.10 accordingly directs "low- or intermediate-frequency treadmill gait training over a longer period" [PAGE 49].

Minimal curvature-consistent form:

\[
\Delta G(f)=a f-b f^{2},\qquad a>0,\ b>0
\]
\[
[\,\Delta G\,]=\mathrm{m},\quad [a]=\mathrm{m\cdot session^{-1}},\quad [b]=\mathrm{m\cdot session^{-2}}
\]
\[
f^{*}=\frac{a}{2b},\qquad \left.\frac{\partial \Delta G}{\partial f}\right|_{f^{*}}=0,\qquad \frac{\partial^{2}\Delta G}{\partial f^{2}}=-2b<0
\]

*Inversion regime:* \(f>a/b\Rightarrow \Delta G(f)<0\). This is the exact formal content of the committee's extrapolation — high frequency is not merely less efficient, it is **net negative** past the inversion point. *Breakdown of the operator itself:* for non-progressive conditions the inversion point may not be reachable within feasible clinical frequency, so the model degenerates to monotone increasing; the guideline's restriction of the recommendation to progressive disease [PAGE 49] is the correct scoping.

---

### (4) Detraining decay operator

"Exercise capacity will decrease quickly once treadmill gait training has stopped" [PAGE 116].

\[
F(t)=F_{\text{end}}\exp\!\big[-\lambda_{\text{det}}(t-t_{\text{end}})\big],\qquad [\lambda_{\text{det}}]=\mathrm{wk^{-1}}
\]
\[
t_{1/2}=\frac{\ln 2}{\lambda_{\text{det}}}
\]

The recommendation "support the person to maintain their exercise capacity, as appropriate" [PAGE 50] is the control term that prevents this decay; its absence is the breakdown condition. Note the compound trap: (3) and (4) jointly mean the *optimal* protocol is moderate-frequency, indefinitely sustained — not high-frequency, time-limited.

---

### (5) Energy-conservation / pacing feasibility operator

Fatigue is to be managed with "pacing and other energy-conservation strategies" [PAGE 45], assessed "when the person is feeling at both their best and worst" [PAGE 44].

\[
\int_{t_0}^{t_0+T}P(t)\,dt\ \le\ E_{\text{avail}}(t_0)+\rho T
\]
\[
[P]=\mathrm{MET},\quad [E_{\text{avail}}]=\mathrm{MET\cdot h},\quad [\rho]=\mathrm{MET}\ (\text{recovery rate})
\]

\[
\max_{\{P(t)\}}\ \sum_{k} w_k\,\mathbf{1}\!\left[\text{task }k\text{ completed}\right]\quad \text{s.t. the constraint above}
\]

*Breakdown:* when \(\rho\to 0\) (no within-day recovery) and \(E_{\text{avail}}\) is small, the feasible set contains only trivial tasks; the only remaining lever is task *substitution*, which is why the guideline directs the approach to "prioritise what is important to the person" [PAGE 45]. The age-dependence of the operator is explicit: "For adults, this often involves helping them to choose between competing priorities and balancing between activities whereas, for children and young people, it is more about planning breaks and opting out of certain activities" [PAGE 111–112].

---

### (6) Service-capacity / queueing operator

Requirement: services must "respond in a timely and proportionate way" to emerging need [PAGE 16], while self-referral is opened [PAGE 15]. The committee concedes this "could increase pressure on existing services" [PAGE 95].

\[
\rho=\frac{\lambda}{c\mu},\qquad W_q=\frac{C(c,\rho)}{c\mu-\lambda}+\frac{1}{\mu}
\]
\[
[\lambda]=\mathrm{referrals\cdot day^{-1}},\quad [\mu]=\mathrm{day^{-1}},\quad [W_q]=\mathrm{day}
\]

*Exact singularity:* \(W_q\to\infty\) as \(\lambda\uparrow c\mu\), i.e. \(\rho\to 1^{-}\). *Consequence:* 1.4.2 (raises λ) and 1.4.4 (bounds \(W_q\)) are jointly satisfiable only if \(c\mu\) rises commensurately. The guideline supplies no such identity. This is the sharpest formal gray zone in the document.

---

### (7) Coordination-information operator

A single point of contact "must remain even when the person is not receiving rehabilitation, to ensure access to services as needs emerge" [PAGE 83]; the key contact "should remain in place even when the person is not receiving active rehabilitation" [PAGE 79].

Let \(N\) = latent need state, \(S\) = service actually received. Coordination deficit:

\[
\Delta H = H(S\mid N)-H_{\min},\qquad [\Delta H]=\mathrm{bits}
\]

The single-point-of-contact operator is designed to drive \(\Delta H\to 0\) by maintaining the channel when the therapeutic channel is closed. *Breakdown:* \(\Delta H\) rises at every service boundary — the committee documents exactly this: "information on support needs is often lost when changes happened, such as when a child moves to a different school of college or their teacher changes" [PAGE 130], and "poor communication and coordination led to practitioners not having correct, up-to-date information when treating a person and so providing ineffective or untimely treatments" [PAGE 105].

---

### (8) Cognitive-assessment validity operator (signal detection)

"For people with a functional neurological disorder consider replacing standard cognitive tests with observation and dynamic testing" [PAGE 55]; dynamic testing is "useful for assessing inconsistencies in cognitive performance" [PAGE 121–122].

\[
d'=z\big(H\big)-z\big(F\big),\qquad c=-\tfrac{1}{2}\big[z(H)+z(F)\big]
\]

\(d'\) in standard-deviation units (dimensionless). For a single-session standard test in FND, within-person variance inflates and \(d'\) is estimated from one draw — the estimate is *unbiased only under the assumption of a stationary latent trait*, which the guideline rejects for this population. Dynamic testing replaces the point estimate with a distribution over occasions, restoring identifiability. Additional validity threat: "cognitive function may appear adequate but still fall below the levels the person previously had" [PAGE 122] — the correct reference class is the premorbid state, not the population norm.

---

### (9) 24-hour postural-management operator

Indication: unable to sit/stand unaided **and** "at risk of skin breakdown, pain, sleep disturbance, respiratory dysfunction or muscle or joint contracture" [PAGE 49].

\[
\Pi=\int_{0}^{24\,\mathrm{h}}P_{\text{interface}}(t)\,dt,\qquad [\Pi]=\mathrm{mmHg\cdot h}
\]

Tissue-viability requires \(\Pi<\Pi_{\text{crit}}\) (interface-pressure–time threshold). *Singularity:* as \(\Pi\to\Pi_{\text{crit}}\), the constraint set on positioning frequency becomes empty for any fixed repositioning interval; the only resolution is mechanical redistribution (specialist seating, bed system). Note the guideline's own evidence caveat: "No evidence was identified for 24-hour postural management strategies" [PAGE 115] — the operator is physically sound but clinically uncalibrated.

---

### (10) Errorless vs error-based learning operator

"When delivering skills-based learning or task-based training, use error-based or errorless techniques depending on the person's sensory, perceptual, motor planning and cognitive strengths and weaknesses" [PAGE 63].

Errorless (acquisition without error):
\[
p_n=1-(1-\alpha)^{n},\qquad [\alpha]=\mathrm{ trial^{-1}}
\]

Error-based (logistic with error-correction gain):
\[
p_n=\frac{1}{1+\exp[-(\gamma_0+\gamma_1 n)]}
\]

*Breakdown:* the error-based form presupposes intact error *detection* and *correction* — i.e. intact executive function. Where executive function is impaired, \(\gamma_1\to 0\) or negative, and each error is *consolidated* rather than corrected. The committee states the selection rule in behavioural terms: "Errorless learning supports those with memory impairments and boosts confidence, while error-based learning enhances critical thinking and decision-making" [PAGE 128]. Definitional anchor: "Errorless learning is an instructional method aimed at preventing mistakes during the learning process" [PAGE 76].

---

### (11) Dysphagia triage operator

"Do this urgently if the person has a severe speech, language or communication impairment" [PAGE 58]; dysphagia assessment must be by "a registered practitioner trained in dysphagia" [PAGE 59].

\[
t_{\text{assess}}\le \tau_{\text{urgent}}\quad \Longleftrightarrow\quad S\ge S^{*}
\]

*Breakdown:* if the trained-practitioner pool is capacity-limited (see operator 6), the triage inequality cannot be met for all \(S\ge S^{*}\), and the clinical consequence is aspiration risk. This is where the queueing layer (6) and the safety layer (11) collide — the only place in the document where a capacity failure is directly life-threatening. Related restraint on the escalation path: "the NHS tends to use enteral feeding before strictly necessary. They agreed enteral feeding should be a last resort" [PAGE 126].

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

**Lineage of the definitional operator.** NG252's core definition is imported, not invented: "Rehabilitation is defined by the World Health Organisation as 'a set of interventions designed to optimise functioning and reduce disability in individuals with health conditions in interaction with their environment'" [PAGE 81], immediately followed by the British Society of Rehabilitation Medicine definition — "a process of assessment, treatment and management with ongoing evaluation by which the individual and their family/carers are supported to achieve their maximum potential for physical, cognitive, social and psychological function, participation in society and quality of living" [PAGE 81]. The first is the ICF-lineage (functioning/disability/context), the second is the Rusk-lineage (process, team, family, potential). NG252 is a *fusion document*: every recommendation carries both a function-restoration reading and a participation reading, and the two diverge exactly where prognosis is poor — hence recommendation 1.10.3: "Focus on interventions for optimising or maintaining the person's functioning and abilities, even when they have a time-limited prognosis or the potential for improvement appears to be limited" [PAGE 32].

**Lineage of the learning operators.** Errorless learning descends from memory-rehabilitation work in amnesia; NG252 carries only the operational residue, not the citation trail — the definitions on [PAGE 76] and the selection rule on [PAGE 128]. Retrocausally, this creates a *translation lag*: the technique is standard in acquired brain injury but the guideline has to re-derive it for occupational therapy [PAGE 63], suggesting it had not propagated into general rehabilitation practice.

**Lineage of the pacing operator.** Pacing/energy conservation arrives in NG252 via a cross-reference: "Follow the recommendations on fatigue in the section on symptom management and rehabilitation in NICE's guideline on multiple sclerosis in adults (recommendations 1.5.3 to 1.5.16 and 1.5.19 to 1.5.23)" [PAGE 44]. That is a *borrowed operator with a changed domain of applicability* — an import from a relapsing-remitting disease into progressive, static-acquired and functional conditions. The committee itself notes the paediatric divergence [PAGE 111–112] and issues research recommendation 6 for children [PAGE 88], which is the formal admission that the import is unvalidated at the boundary.

**Lineage of the technology operators.** Treadmill gait training, robot-assisted gait, neuromuscular electrical stimulation, functional electrical stimulation for drop foot, gaming/virtual reality, and vestibular canalith repositioning are all listed together in section 1.16 [PAGE 48–50]. Each carries a distinct evidence maturity: treadmill training has frequency-stratified trial evidence [PAGE 115]; robotics has "some benefit" but availability-gated [PAGE 115]; tDCS/TMS is explicitly *pre-recommendation* — "current evidence is insufficient to recommend their use" [PAGE 123], escalated only to research recommendation 3 [PAGE 87]. The genealogy is a maturity gradient, and the guideline's discipline is that only the mature end becomes a recommendation.

**Multi-week (multi-year) traps.** Four slow traps are documented in the source itself, each with a decade-scale half-life:

1. *The short-course trap.* "rehabilitation is often only considered when symptoms start to affect functioning and only provided in the short term for specific symptoms" [PAGE 90] — despite people "saying they needed long-term follow-up or regular reviews" [PAGE 90]. Countermeasure: lifelong design [PAGE 11] and the persistent single point of contact [PAGE 83].
2. *The visible-symptom trap.* "healthcare practitioners often focus on physical and visible symptoms, and some have prejudged ideas about how certain disorders and injuries will respond to rehabilitation treatments" [PAGE 93]; and "a bias towards assessment of biomedical functioning, with less importance given to assessment of emotional wellbeing and mental health, and cognitive impairments" [PAGE 100].
3. *The disability-management frame trap.* Access is blocked "stemming from the belief that rehabilitation is for managing disability rather than optimising or maintaining functioning" [PAGE 104].
4. *The diagnostic-odyssey trap.* "an early needs assessment is crucial as some diagnoses can take years to establish" [PAGE 96] — which is why 1.7.1 permits assessment "based on symptoms or impairment (even if a chronic neurological disorder is suspected but not yet confirmed)" [PAGE 20–21].

These four are not independent; they compound. A patient with an unconfirmed functional neurological disorder, invisible cognitive symptoms, and a poor prognosis hits all four simultaneously — which is exactly the population the guideline's anti-exclusion clause is written for.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

**The clinician's belief state under clock pressure.** Model the practitioner as holding a prior over "will this person benefit from rehabilitation?" The guideline names the prior's failure mode explicitly: practitioners hold "prejudged ideas about how certain disorders and injuries will respond to rehabilitation treatments" [PAGE 93], rooted in "the belief that rehabilitation is for managing disability rather than optimising or maintaining functioning" [PAGE 104]. This prior is *self-confirming*: low expected benefit → low referral → low observed benefit → prior strengthened. That is the recursive loop, and it is a belief-updating pathology, not an information deficit.

**Habit regression under crisis.** Under time pressure the practitioner regresses to the biomedical/visible-symptom assessment habit [PAGE 100]. The formal signature: the practitioner collapses the multi-domain state vector (operator 2) onto its most legible coordinate. The guideline's counter is structural rather than exhortative — it forces the full vector by mandating the domain list [PAGE 24–25] and by prohibiting the shortcut: "Do not exclude someone from any aspect of holistic needs assessment based on their communication, memory, learning or other cognitive difficulties" [PAGE 26].

**The clock.** Three distinct clocks operate. (i) The *diagnostic clock* — "some diagnoses can take years to establish" [PAGE 96] — which argues for acting before confirmation [PAGE 20–21]. (ii) The *discharge clock* — equipment must be arranged "at the earliest opportunity… to support their rehabilitation and prevent delays to discharge" [PAGE 20]. (iii) The *developmental clock* — goals must be "frequently adjust[ed]… in response to their growth and developmental stage" [PAGE 27] and follow-up "planned for children at key neurodevelopmental stages" [PAGE 33]. The trap is that (i) and (ii) push toward speed while (iii) pushes toward scheduled re-opening; a service optimised for (ii) will systematically fail (iii).

**Counter-trap design.** The guideline's counter-traps are:
- *Named human channel* — a single point of contact "must remain even when the person is not receiving rehabilitation" [PAGE 83]. This externalises memory of the person from the practitioner to the system.
- *Reversibility* — "Enable the person to opt in and opt out of services for emotional health and mental wellbeing, as needed, in order to manage their fluctuating needs" [PAGE 53]. Fluctuation is treated as a design parameter, not non-adherence.
- *Explicit honesty* — "Goal setting was found to be more realistic when there were honest discussions about the potential for goals not to be achieved" [PAGE 103], paired with "discuss the potential for both positive and negative outcomes" [PAGE 27]. Honesty is the mechanism that prevents the self-confirming prior from ossifying.
- *Time as a resource* — "Allow sufficient time during consultations… for goal setting, and later for rehabilitation planning" [PAGE 27]. The guideline explicitly prices the cognitive work.
- *Consent to involve* — "Make sure the other people agree to their role in helping to deliver rehabilitation" [PAGE 23], preventing the assumption that family is a free resource.

**Where the recursion bites hardest.** Recommendation 1.11.2 requires assessing "the person's ability, or that of their family or carers, if appropriate, to self-manage their rehabilitation" [PAGE 34] — a meta-assessment. The recursion: the assessor's judgement of capacity determines the level of support, which determines the observed capacity. A person given a key contact may appear more capable than the same person given nothing, purely because the channel exists. NG252 handles this with 1.11.3: "Review the person's ability to self-manage their rehabilitation if significant difficulties are observed or reported, and change the type of single point of contact, if needed" [PAGE 34–35] — i.e. re-estimate, don't lock in.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

**Layer 1 — Biomechanical/tissue veto (absolute).** Pressure–time integral \(\Pi\) [PAGE 49]; contracture; respiratory dysfunction. If \(\Pi\to\Pi_{\text{crit}}\), no mobility-loading protocol may proceed unchanged: positioning must dominate. This layer vetoes operator (3) and (1) absolutely — dose is irrelevant if tissue viability fails. Verdict: **hard veto, non-negotiable**.

**Layer 2 — Iatrogenic-mechanism veto (absolute, population-specific).** In functional neurological disorder, casting/splinting/compensatory aids/adaptive approaches can "limit the possibility or extent of recovery" [PAGE 49], [PAGE 63] and "can worsen symptoms and reinforce unhelpful beliefs" [PAGE 114]. This is not a severity modifier — it is a sign inversion on \(\beta_{ij}\). Verdict: **hard veto for the named intervention classes in the named population**; the guideline's positive alternative is goal-oriented movement with attention redirected away from symptoms [PAGE 46].

**Layer 3 — Airway/swallowing veto (absolute).** Dysphagia with aspiration risk overrides scheduling convenience: urgent assessment required for severe impairment [PAGE 58], dysphagia-trained practitioner required [PAGE 59], and enteral feeding only "when absolutely necessary" with consent or best interests [PAGE 60]. Verdict: **hard veto on any delay logic**.

**Layer 4 — Environmental/weather veto (soft, substituted).** Weather and geography act on transport, outdoor activity, and in-person attendance. NG252 does *not* treat this as a veto; it supplies substitution operators at three levels: service-level telehealth "including via telehealth" for restricted specialist availability [PAGE 15]; plan-level delivery "may include telehealth, where appropriate" [PAGE 32]; and participation-level "Consider online options for social activities if in-person activities are scarce, for example, in rural areas, or if travel is challenging" [PAGE 71]. **Adjudication:** weather vetoes *a specific delivery mode*, never the rehabilitation goal. The veto is discharged by mode substitution, not by goal abandonment.

**Layer 5 — Capacity veto (elastic, quantified).** \(\rho\to 1^{-}\) in operator (6) [PAGE 95], [PAGE 16]. This veto is real and worsens precisely where demand is generated by the guideline's own access recommendations. **Adjudication:** capacity vetoes *timeliness*, not *entitlement* — the guideline's answer is stratified intensity via the three-tier single-point-of-contact model [PAGE 34–35] and, where warranted, complex case management with documented utilisation savings [PAGE 107].

**Layer 6 — Informational exclusion veto (prohibited by source).** "Do not exclude someone from any aspect of holistic needs assessment based on their communication, memory, learning or other cognitive difficulties" [PAGE 26]. **Verdict:** this layer is *not permitted to veto*; the guideline converts it into a reasonable-adjustment obligation [PAGE 26].

**Final adjudication order:** L3 (airway) ≻ L2 (iatrogenic) ≻ L1 (tissue) ≻ L5 (capacity) ≻ L4 (weather) ≻ L6 (information, non-veto). Weather is the weakest layer because it is the only one with an explicit substitution pathway in the source.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

**Veto 1 — High-frequency treadmill protocol in progressive neurological disease.**
*Rule violated:* 1.16.10 directs "low- or intermediate-frequency treadmill gait training over a longer period" for progressive conditions [PAGE 49], grounded in the finding that "high-frequency training led to worse outcomes than low and intermediate frequency in people with Parkinson's disease" and that this "could be extrapolated" [PAGE 115].
*Counterfactual:* a service deploys ≥5 sessions/week treadmill training in a progressive cohort.
*Prediction (verifiable):* at matched cumulative dose \(\mathcal{D}\) (operator 1), the high-frequency arm shows inferior change in timed gait speed and 6-minute walk distance versus the 2–3×/week arm, and the sign of \(\Delta G\) crosses zero past \(f^{*}=a/2b\) (operator 3). Additional prediction from operator (4): the high-frequency arm's advantage, if any, decays with observed half-life \(t_{1/2}=\ln 2/\lambda_{\text{det}}\) after cessation [PAGE 116], so between-group difference inverts at follow-up.
*Falsifier:* monotone increasing benefit with no inversion at any feasible frequency, sustained after cessation.

---

**Veto 2 — Open self-referral implemented without capacity expansion.**
*Rule pair:* 1.4.2 mandates self-referral and post-discharge re-referral [PAGE 15]; 1.4.4 mandates timely, proportionate response [PAGE 16]; the impact analysis concedes this "could increase pressure on existing services" [PAGE 95].
*Counterfactual:* implement 1.4.2 with unchanged \(c\mu\).
*Prediction (verifiable):* referral-to-assessment interval \(W_q\) rises superlinearly with \(\lambda\), with the convex signature of \(W_q=C(c,\rho)/(c\mu-\lambda)+1/\mu\); urgent dysphagia and severe-communication triage (operator 11) breaches increase first, because they compete for the same practitioner pool [PAGE 58–59]; and the *newly* self-referred cohort shows longer intervals than the pre-existing cohort.
*Falsifier:* \(W_q\) flat or falling after self-referral introduction with no staffing change.

---

**Veto 3 — Standard cognitive testing retained as the sole instrument in functional neurological disorder.**
*Rule violated:* "For people with a functional neurological disorder consider replacing standard cognitive tests with observation and dynamic testing" [PAGE 55]; dynamic testing is required because it assesses "inconsistencies in cognitive performance" [PAGE 121–122].
*Counterfactual:* a neuropsychology service keeps single-occasion standard tests as the sole basis for a cognitive diagnosis in FND.
*Prediction (verifiable):* (a) test–retest inconsistency across occasions exceeds the standard error assumed by the instrument; (b) the rate of "objective cognitive impairment" labels is higher than in a dynamic-testing pathway at equivalent functional status; (c) downstream harms rise — specifically, inappropriate compensatory aids and casting/splinting, which the guideline names as capable of worsening symptoms and reinforcing unhelpful beliefs [PAGE 114], [PAGE 63]; (d) patient-reported invalidation increases, matching the documented complaint that assessment content was found "patronising" [PAGE 122].
*Falsifier:* single-occasion standard testing yields stable, replicable classifications in FND with no excess iatrogenic equipment provision.

---

**Cross-veto interaction note.** Vetoes 2 and 3 interact through operator (6): the additional practitioner time that dynamic testing requires [PAGE 123] draws from the same \(\mu\) that self-referral is loading, so a service adopting Veto 3's countermeasure without capacity relief will fail Veto 2's prediction simultaneously. NG252 anticipates the mitigation — "sharing expertise between specialist and community rehabilitation services should mitigate the lack of expertise and need for additional training" [PAGE 129] — but does not quantify it. Any implementation claim that both can be satisfied at constant \(c\mu\) is formally refuted by the \(\rho\to 1^{-}\) divergence.