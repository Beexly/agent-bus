---
source: "Special_Issue_Traumatic_Brain_InjuryChronic_Trauma.pdf"
folder: "/CorpusRoot"
pages: 3
model: deepseek/deepseek-v4.1-flash-1017
words: 5960
---

<NATIVE_REASONING>
The user wants a deep, multi-section analysis of this editorial PDF about TBI/CTE and Alzheimer's disease. Must be ≥1000 words, with the exact XML sections. Must avoid betting lines. Must cite [PAGE N] markers with verbatim quotes. Must include formal LaTeX equations with SI/information/probability units, assumptions, singularity/breakdown regimes. Must include ≥400 words in THINK_TRACE. Must have retrocausal genealogy, recursive theory of mind (crisis habit regression vs counter-trap vs clock), cross-layer veto adjudication (physical/biomechanical/weather veto proof), and RLVR counterfactual vetoes (3 verifiable scenarios + predictions).

Let me plan carefully.

The source is an MDPI editorial, 3 pages, listing 8 contributions. I need to derive formal operators from the text: rotational acceleration and tissue deformation → DAI; BBB disruption quantified by dextran/IgG extravasation; calcium-driven enzyme networks (calpain); HIF-1α context dependence; SDEA ω-3 ethanolamide restoring Arc, CA1 spine density, Ki-67; ISR/C99 model with suppressed Aβ production.

I should build equations:
1. Rotational acceleration → strain: ε = (Δv/L) or angular: ε_max ∝ α·r·Δt²... Let me be rigorous. For rotational head injury, the strain rate is ε̇ ≈ (r/L)·ω̇ = (r/L)·α where α is angular acceleration [rad/s²]. Units: strain rate s⁻¹. Cumulative damage: DAI threshold. Use a Weibull survival or cumulative strain damage measure (CSDM). Formal: CSDM = ∫ ... Actually, let me state:
- Kinematic operator: ε̇(t) = (r_eff/L_ax)·α(t), with r_eff [m], L_ax [m], α [rad s⁻²] → ε̇ [s⁻¹].
- Injury probability: P(DAI) = 1 − exp[−(∫₀^T (ε̇(t)/ε̇_c)^β dt)] — a Weibull/Poisson-process cumulative hazard. Units: dimensionless exponent; β dimensionless shape; ε̇_c critical strain rate [s⁻¹]. Breakdown: as ε̇_c → 0, P → 1 for any T > 0 (singularity); as β → ∞, step function.
2. BBB permeability operator: K_trans = (C_brain·V_brain)/(A_cap·∫C_plasma dt) — Patlak-like. Units: mL·g⁻¹·s⁻¹ or cm/s. Or simpler: percent extravasation E = (I_inj − I_ctrl)/I_ctrl × 100%. But that's a ratio of intensities (dimensionless), which is fine because it's measured, not invented. Must not invent fake ratios like Force/Fatigue. Measured extravasation index is legitimate.
3. Repetition dose-response: cumulative exposure dose D_N = Σ_{i=1}^{N} a_i^p t_i^q ... hmm, could be viewed as invented. Better to use the text's claim "dose-responsive manner with injury severity and repetition" and formalize as a hazard model with covariates: h(t) = h₀(t)·exp(β₁·N_injury + β₂·AIS + β₃·ApoE4). Cox proportional hazards — standard, unitless log-hazard. That's legitimate and cited to the text's "dose-responsive manner."
4. Calcium: calpain activation via Michaelis-Menten: v = V_max·[Ca²⁺]^n/(K_d^n + [Ca²⁺]^n), units mol L⁻¹ s⁻¹; Hill coefficient n; breakdown: n → ∞ step; K_d → 0 singular activation.
5. HIF-1α: switch-like response with severity/duration; a biphasic (hormetic) function: effect E(H,τ) = ... could use a non-monotonic Gaussian-like or difference of two Hill functions. Formal: E = A·(H^n/(K_1^n + H^n)) − B·(H^m/(K_2^m + H^m))·(τ/τ_ref). Units: dimensionless effect if A,B dimensionless; τ time. Breakdown: crossover H* where dE/dH = 0; therapy sign flips. This is exactly what the text describes ("protective in some contexts yet proinflammatory and neurotoxic in others... depend on severity and duration").
6. Information-theoretic: diagnostic channel capacity for ASL MRI detecting BBB dysfunction: C = B·log₂(1 + SNR) bits/s. Or mutual information I(X;Y) between injury state X and imaging signal Y. Units: bits. Breakdown: SNR → 0, C → 0.
7. ISR/C99: Aβ production suppressed — a flux balance: J_Aβ = k_cat·[C99]·f_ISR, where f_ISR ∈ [0,1] is a suppression factor. Units mol s⁻¹. Breakdown: f_ISR → 0 means extracellular-Aβ-targeted therapies have vanishing target engagement — a "target null space." That's a nice veto.

Retrocausal genealogy: the amyloid cascade hypothesis 1.0 (Hardy & Selkoe 1992), 2.0 (Volloch), ISR biology (Ron, Walter), TBI-CTE lineage (Omalu 2005; McKee), rotational acceleration physics (Holbourn 1943; Gurdjian; Ommaya & Gennarelli 1974), calcium/calpain (Schanne 1979 "calcium hypothesis of cell death"), HIF-1 (Semenza 1992). Also note editorial's received/accepted/published dates: 24/26/28 Feb 2026 — a 2-day review, which is a "clock" anomaly worth auditing. That's a nice gray-zone audit item: 48-hour acceptance. Not a betting line issue.

Multi-week traps: e.g., the "mild" injury label trap — Blaschke's model shows "mild" phenotype with measurable vascular compromise; the return-to-sport decision window (weeks), late-phase ASL requiring a delay of weeks post-injury; CTE latency of years-decades; the therapeutic window inversion for HIF-1 across weeks (early boost vs chronic suppress).

Recursive theory of mind: model the clinician/athlete/PI/editor as agents with beliefs. "Crisis habit regression" — under uncertainty agents regress to single-cause habits (e.g., "Aβ is the cause," "rest until asymptomatic"). "Counter-trap" — the trap of over-correcting: attributing all neurodegeneration to trauma, or banning return-to-play entirely. "Clock" — the decision clock: the timing pressure (return to sport, therapeutic window, publication clock) distorts inference. Formalize with a Bayesian agent: posterior over hypothesis H given evidence E. Use P(H|E) = P(E|H)P(H)/P(E). Define a "habit regression" operator as a prior collapse: P_t(H) → δ(H − H_habit) as stress/stakes increase, i.e., inverse temperature β_decision → ∞. That's a formal and legitimate softmax/Bayesian decision formalization, not a toy equation.

Cross-layer veto adjudication: physical (rotational acceleration threshold, strain rate), biomechanical (axonal strain tolerance ~ 0.15-0.20 strain; white matter shear), weather/environment (hypoxia at altitude — HIF-1 coupling; barometric pressure; temperature effects on cerebral autoregulation; heat and dehydration). A veto proof: if the physical layer's strain integral is below the injury threshold, no downstream molecular claim can be attributed to trauma in that instance — a "no-injury null veto." Conversely if BBB extravasation index is below the imaging noise floor, the ASL-based claim cannot be adjudicated — an "instrument veto."

RLVR counterfactual vetoes: 3 verifiable scenarios with predictions. RLVR = reinforcement learning with verifiable rewards. So each scenario should have a checkable outcome. E.g.:
V1: Re-run Blaschke CBI model with N=1 vs N=5 impacts; prediction: extravasation index monotonic increasing, and if not, the BBB-frequency claim is vetoed.
V2: HIF-1 modulation timing: apply HIF-1 stabilizer at day 1 vs day 30 post-injury in a chronic hypoxia model; prediction: benefit in early, harm in late; sign reversal at crossover H*.
V3: ASL MRI late-phase: prediction that late-phase (weeks) ASL detects hypoperfusion where acute ASL does not — measurable AUC; if AUC_acute ≥ AUC_late, the return-to-sport claim is vetoed.
V4 maybe: SDEA Arc restoration — if Arc rescue is absent, multi-target claim vetoed.

Also need numbers? Avoid inventing fake data. I can give equation structure with unit placeholders, and note that numeric parameter values are not given in the source — that's honest.

Let me be careful about "ZERO TOY EQUATIONS" — no invented ratios. All equations should be standard physics/biology/information theory with units.

Now, quotes with [PAGE N]. Let me collect verbatim quotes:

Page 1:
- "interest has grown in clarifying the relationship between brain trauma and subsequent neurodegeneration"
- "TBI/CTE and Alzheimer's disease share clinical features and histopathological changes that warrant careful consideration"
- "the physics of head trauma, especially rotational acceleration and tissue deformation, to diffuse axonal injury (DAI) and white matter vulnerability"
- "dementia risk rising in a dose-responsive manner with injury severity and repetition and moderated by factors such as ApoE4"
- "The disruption of BBB, which becomes evident as a result of the administered dextran and IgG extravasation, correlates with functional deficits and increases with injury frequency"
- "links 'mild' injury phenotypes to measurable vascular compromise"
- "late-phase perfusion analysis by 3D arterial spin labeling (ASL) MRI"
- "improve predictions about when it is safe for athletes with mild traumatic brain injury (mTBI) to return to sport"

Page 2:
- "calcium homeostasis as a shared vulnerability across TBI and AD"
- "calpain positioned as a key regulator"
- "combined inhibition of selected calcium-dependent enzymes or downstream targets"
- "HIF-1 can be protective in some contexts yet proinflammatory and neurotoxic in others"
- "Its effects likely depend on the severity and duration of hypoxia"
- "boosting HIF-1 in early disease or mild hypoxia ... but potentially suppressing it in chronic hypoxia or advanced AD"
- "SDEA reduces astrocytic reactivity, restores Arc expression, improves CA1 dendritic spine density and morphology, and partially rescues dentate gyrus proliferative activity (Ki-67)"
- "overlapping neuropathological features ... while emphasizing differences, including BBB-related damage patterns"
- "proteolytic A-beta production is suppressed in AD-affected neurons under ISR conditions"
- "skepticism that extracellular A-beta-focused approaches will reverse symptomatic disease"

Page 3: list of contributions, disclaimer.

Also the date anomaly: "Received: 24 February 2026 / Accepted: 26 February 2026 / Published: 28 February 2026" [PAGE 1].

Word count: need ≥1000 words across sections. THINK_TRACE ≥400. Let's aim for ~2200-2800 total.

Let me write it.

Structure:

<THINK_TRACE> — ≥400 words. Multi-hop derivation: from head kinematics → strain → DAI → BBB → calcium → HIF-1 → ISR → clinical phenotype. Gray-zone audit: the "mild" label, the 2-day review clock, the conflation of cause vs. comorbidity, the Aβ suppression paradox, editorial's own hedge ("may influence"), the missing quantitative thresholds, the 8 contributions being reviews/models not a single dataset.

<SOURCE_OPERATORS_AND_EQUATIONS> — equations with LaTeX, units, assumptions, breakdown regimes, page citations.

<RETROCAUSAL_GENEALOGY> — lineage: Holbourn 1943, Ommaya & Gennarelli 1974, Schanne 1979 calcium hypothesis, Semenza 1992 HIF-1, Hardy & Selkoe 1992 amyloid cascade, Omalu 2005 CTE, McKee 2013, Volloch ISR. Multi-week traps.

<RECURSIVE_THEORY_OF_ME...</...>

<CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

Let me write with care and precision.

For equations, I'll number them.

Let me draft the equations content:

**E1. Rotational kinematics → axonal strain rate.**
For a head rotating about an axis at perpendicular distance $r$ [m] from a white-matter tract of length $L$ [m]:
$$\dot{\varepsilon}(t) \;=\; \frac{r}{L}\,\alpha(t), \qquad [\dot\varepsilon]=\mathrm{s^{-1}},\; [\alpha]=\mathrm{rad\,s^{-2}}$$
Assumption: rigid-body head, small strain, linear strain gradient, tract aligned with the tangential acceleration. Breakdown: (i) $L\to 0$ (point-limit / no anatomical length scale) → $\dot\varepsilon \to \infty$, singularity, the continuum assumption fails at axonal caliber (~1 µm); (ii) large strain $\varepsilon > 0.2$ → geometric nonlinearity, linearization invalid.

**E2. Cumulative DAI hazard.**
$$\mathcal{D} = \int_0^T \left(\frac{\dot\varepsilon(t)}{\dot\varepsilon_c}\right)^{\beta} dt, \qquad P_{\mathrm{DAI}} = 1-e^{-\mathcal{D}}$$
$[\mathcal D]$ dimensionless (hazard integral, like a Poisson mean count); $\beta$ dimensionless Weibull shape; $\dot\varepsilon_c$ [s⁻¹]. Breakdown: $\dot\varepsilon_c \to 0^+$ → $\mathcal D\to\infty$ for any nonzero exposure (total-vulnerability singularity); $\beta\to\infty$ → deterministic step threshold; $T\to\infty$ with residual $\dot\varepsilon>0$ gives unbounded hazard, unphysical — requires a repair term $-\kappa \mathcal D$.

Add repair: $\dot{\mathcal D} = (\dot\varepsilon/\dot\varepsilon_c)^\beta - \kappa\mathcal D$, $\kappa$ [s⁻¹].

That's good — gives a repair rate, which maps to "stage specific therapeutic interventions."

**E3. Repetition/severity dose-response as a proportional-hazard model.**
$$h(t) = h_0(t)\exp\!\left(\beta_1 N + \beta_2 s + \beta_3 g\right)$$
$N$ = number of injuries (count), $s$ = severity scalar (e.g., AIS grade, ordinal), $g\in\{0,1\}$ ApoE4 carrier indicator, $h$ [time⁻¹]. Cite page 1 "dose-responsive manner... moderated by factors such as ApoE4." Breakdown: proportional hazards fails if $\beta_1$ itself varies with time (sensitization); non-identifiability when $N$ and $s$ are collinear (severe injuries counted as few, many mild ones) — collinearity singularity in the design matrix.

**E4. BBB transfer constant (Patlak).**
$$K^{\mathrm{trans}} = \frac{C_{\mathrm{tissue}}(T)-V_p C_{\mathrm{plasma}}(T)}{\int_0^T C_{\mathrm{plasma}}(t)\,dt},\quad [K^{\mathrm{trans}}]=\mathrm{mL\,g^{-1}\,s^{-1}}$$
Cite dextran/IgG extravasation [PAGE 1]. Breakdown: $T$ too short (late-phase requirement) → denominator → 0, $K^{\mathrm{trans}}$ ill-posed, infinite variance. This is a real singularity tied to the source's "late-phase" emphasis.

Also extravasation index: $\mathrm{EI} = (S_{\mathrm{inj}}-S_{\mathrm{ctrl}})/S_{\mathrm{ctrl}}$ — hmm, is that a fake ratio? No, it's a measured contrast ratio, standard. But to be safe I'll present it as the measured fractional signal change with units of percent, and note it's an empirical observable not a theoretical construct. Fine.

**E5. Calcium–calpain Hill activation.**
$$v_{\mathrm{calpain}} = \frac{V_{\max}\,[\mathrm{Ca^{2+}}]^{n}}{K_d^{\,n}+[\mathrm{Ca^{2+}}]^{n}},\quad [v]=\mathrm{mol\,L^{-1}\,s^{-1}}$$
Breakdown: $K_d\to 0$ → step at zero calcium (always-on protease, singularity); $n\to\infty$ → switch; physiological $n\approx 2$–$3$. Also downstream: tau hyperphosphorylation balance $d[\tau_p]/dt = k_{\mathrm{kin}}[\tau][\mathrm{kinase}] - k_{\mathrm{phos}}[\mathrm{PP}][\tau_p]$ — steady state ratio, breakdown when phosphatase capacity saturates.

**E6. HIF-1 biphasic (hormetic) response.**
$$E(H,\tau)= A\frac{H^{n_1}}{K_1^{n_1}+H^{n_1}} \;-\; B\,\frac{\tau}{\tau_0}\frac{H^{n_2}}{K_2^{n_2}+H^{n_2}}$$
$H$ = hypoxia severity (e.g., $p\mathrm{O_2}^{-1}$ or fraction of time below threshold), $\tau$ [s] duration. $E$ dimensionless (net survival effect). Crossover $H^*$ solves $E=0$; sign of $dE/dH$ flips — matching "boosting HIF-1 in early disease or mild hypoxia... suppressing it in chronic hypoxia." Breakdown: $\tau/\tau_0 \to$ large → the second term dominates for all $H$, so any HIF-1 elevation is net-toxic — a monotone-collapse regime where the "boost early" rule inverts.

**E7. Information capacity of the imaging channel (ASL MRI).**
$$C = B\log_2(1+\mathrm{SNR}),\quad [C]=\mathrm{bit\,s^{-1}}$$
Or detection-theoretic: $d' = \frac{\mu_1-\mu_0}{\sigma}$, and $\mathrm{AUC} = \Phi(d'/\sqrt2)$. Breakdown: $\mathrm{SNR}\to 0$ → $C\to0$; if effect size $\Delta\mu$ below the scan-rescan noise, the return-to-sport decision has no information — an instrument veto.

**E8. ISR / C99 flux with suppressed Aβ.**
$$J_{\mathrm{A\beta}} = k_{\mathrm{cat}}\,[\mathrm{C99}]\,\phi_{\mathrm{ISR}},\quad \phi_{\mathrm{ISR}}\in[0,1]$$
$[J]=\mathrm{mol\,s^{-1}}$. Cite page 2 "proteolytic A-beta production is suppressed." Breakdown: $\phi_{\mathrm{ISR}}\to 0$ → target engagement of extracellular-Aβ therapies vanishes; the therapeutic "lever arm" $\partial J/\partial(\text{anti-A}\beta\ \text{dose}) \to 0$ — a target null-space veto.

Good. Then a synthesis: chain rule of the causal cascade.

$$\frac{dP_{\mathrm{AD}}}{dt} = \sum_i \frac{\partial P}{\partial x_i}\dot x_i$$ — partial sensitivity decomposition, units time⁻¹. Maybe skip or include briefly.

Units and assumptions table would be nice but text form is fine.

Now writing. Keep it rigorous, avoid betting.

Word budget: THINK_TRACE ~550 words, others ~300-500 each. Total ~2500.

Let me write the final answer. I'll include the sections exactly as named.

One more: "CROSS_LAYER_VETO_ADJUDICATION" must include "Physical/biomechanical/weather veto proof." So include weather explicitly: hypoxia/altitude, ambient temperature, barometric pressure, dehydration — and how these are confounders or vetoes. E.g., at altitude, hypoxemia raises HIF-1 tone independent of trauma → a "weather veto" on attributing HIF-1 signal to TBI. Also heat strain raises core temp and BBB permeability independently → veto on BBB attribution. Proof structure: if the exposure-matched control group does not control for environmental covariates, the causal estimand is not identified.

Also cross-layer: physical layer (kinematics) vetoes molecular attribution; biomechanical layer (strain tolerance) vetoes "mild" label; weather layer vetoes HIF/BBB attribution.

Let me write it now.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a three-page editorial front-matter for an MDPI *International Journal of Molecular Sciences* Special Issue [PAGE 1: “Special Issue: ‘Traumatic Brain Injury/Chronic Traumatic Encephalopathy as Cause of Alzheimer’s Disease: Physics and Molecular Biology in the Genesis of Neurodegeneration?’”]. It is not a primary dataset; it is a curated map of eight contributions. My derivation therefore has to move from (a) explicit textual claims, to (b) the operators those claims presuppose, to (c) the regimes in which those operators break — and only then to (d) adjudication.

Hop 1 — kinematics. The editorial states that Katramadou et al. connect “the physics of head trauma, especially rotational acceleration and tissue deformation, to diffuse axonal injury (DAI) and white matter vulnerability” [PAGE 1]. The minimal formal object here is not “force” but *strain rate*: a head rotating with angular acceleration α about an axis displaced from a tract of length L produces a tangential strain rate ε̇ ≈ (r/L)·α. This is the Holbourn–Ommaya lineage (see genealogy) and it immediately supplies a unit-bearing operator with two singularities: L → 0 (no anatomical length scale; the continuum fails at axonal caliber) and large strain where linearization fails.

Hop 2 — cumulative dose. The editorial says dementia risk rises “in a dose-responsive manner with injury severity and repetition and moderated by factors such as ApoE4” [PAGE 1]. “Dose-responsive” plus “repetition” plus “moderated” is, formally, a proportional-hazards statement: a baseline hazard h₀(t) multiplied by exp(β₁N + β₂s + β₃g). That is not a toy ratio; it is the canonical survival model with a time⁻¹ hazard and dimensionless log-hazard coefficients. Its breakdown regime is collinearity between N and severity s — the design-matrix singularity that makes many-mild vs. few-severe unidentifiable.

Hop 3 — barrier. Blaschke et al. show BBB disruption “evident as a result of the administered dextran and IgG extravasation,” which “correlates with functional deficits and increases with injury frequency” [PAGE 1], linking “‘mild’ injury phenotypes to measurable vascular compromise” [PAGE 1]. The presupposed operator is the Patlak transfer constant K^trans, whose denominator is the plasma-time integral. Joseph’s contribution — “late-phase perfusion analysis by 3D arterial spin labeling (ASL) MRI” [PAGE 1] — is precisely a statement about that denominator: late-phase imaging exists because K^trans is ill-conditioned when T is short. This is a beautiful internal consistency check across contributions 2 and 3, and it is also the instrument-veto lever for the return-to-sport claim (“when it is safe for athletes with mild traumatic brain injury (mTBI) to return to sport” [PAGE 1]).

Hop 4 — ion and oxygen. Neuschmid et al. treat “calcium homeostasis as a shared vulnerability across TBI and AD,” with “calpain positioned as a key regulator” [PAGE 2]. Calpain activation is a Hill function of [Ca²⁺] with K_d → 0 as an always-on singularity. Mitroshina and Vedunova state that “HIF-1 can be protective in some contexts yet proinflammatory and neurotoxic in others” and that “its effects likely depend on the severity and duration of hypoxia” [PAGE 2]. Severity-and-duration, sign-flipping — that is a *biphasic* operator, and it is the single most important gray-zone object in the editorial, because it converts a monotone “more HIF-1 is good/bad” heuristic into a crossover problem.

Hop 5 — the theory-revision hop. Volloch and Rits-Volloch claim that “proteolytic A-beta production is suppressed in AD-affected neurons under ISR conditions” [PAGE 2] and voice “skepticism that extracellular A-beta-focused approaches will reverse symptomatic disease” [PAGE 2]. Formally this is a suppression factor φ_ISR ∈ [0,1] multiplying the Aβ flux. As φ_ISR → 0 the *derivative* of Aβ flux with respect to anti-Aβ dose also → 0: target engagement collapses. This is the cleanest falsifiable veto in the entire document.

Gray-zone audit. First, the review clock: “Received: 24 February 2026; Accepted: 26 February 2026; Published: 28 February 2026” [PAGE 1] — a 48-hour received-to-accepted interval on a multi-author editorial. That is a governance anomaly, not a scientific one, but it matters because editorial synthesis inherits the unreviewed priors of its contributors. Second, the causal hedge: the title asks whether TBI/CTE is a “Cause of Alzheimer’s Disease,” but the body says TBI/CTE “may influence later neurodegenerative processes, potentially culminating in a clinical diagnosis of Alzheimer’s disease” [PAGE 1] and that the entities “share clinical features and histopathological changes” [PAGE 1]. Sharing features is *not* causation; the editorial itself concedes the identification problem. Third, the “mild” label is explicitly porus — “‘mild’ injury phenotypes” with “measurable vascular compromise” [PAGE 1] means the clinical severity lexicon and the biomechanical dose are decoupled. Fourth, the ApoE4 moderator appears once, with no operator attached; in a hazard model it is a covariate, in a mechanism it is a modifier of clearance, and the editorial does not adjudicate which. Fifth, the ISR claim and the amyloid-cascade framing in contributions 1–7 are in tension; an editorial that lists both without a discriminating experiment is a *holding pattern*, not a synthesis. All five are audit findings I carry forward into the veto sections.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**E1 — Rotational kinematics to axonal strain rate.** For a rigid-head rotation with angular acceleration α [rad·s⁻²] about an axis at perpendicular distance r [m] from a tract of length L [m]:
$$\dot{\varepsilon}(t)=\frac{r}{L}\,\alpha(t),\qquad [\dot{\varepsilon}]=\mathrm{s^{-1}}$$
The editorial grounds this in “rotational acceleration and tissue deformation” as the route to “diffuse axonal injury (DAI) and white matter vulnerability” [PAGE 1]. *Assumptions:* rigid skull, small strain, tract aligned with tangential acceleration. *Breakdown:* L → 0 (singularity; continuum invalid at ~1 µm axonal caliber); ε > 0.2 (geometric nonlinearity; linearization fails).

**E2 — Cumulative DAI hazard with repair.** Defining the hazard integral $\mathcal{D}$ (dimensionless, a Poisson-mean):
$$\dot{\mathcal{D}}=\left(\frac{\dot{\varepsilon}(t)}{\dot{\varepsilon}_{c}}\right)^{\beta}-\kappa\,\mathcal{D},\qquad P_{\mathrm{DAI}}(T)=1-e^{-\mathcal{D}(T)}$$
with critical strain rate ε̇_c [s⁻¹], Weibull shape β (dimensionless), repair rate κ [s⁻¹]. *Breakdown regimes:* ε̇_c → 0⁺ gives $\mathcal{D}\to\infty$ for any nonzero exposure (total-vulnerability singularity); β → ∞ collapses the distribution to a deterministic step threshold; κ = 0 with residual ε̇ > 0 makes $\mathcal{D}$ unbounded in T, which is unphysical and is exactly where “stage specific therapeutic interventions” [PAGE 1] enter the model as a nonzero κ.

**E3 — Repetition/severity dose-response.** Cox proportional hazards:
$$h(t)=h_{0}(t)\exp\!\big(\beta_{1}N+\beta_{2}s+\beta_{3}g\big),\qquad [h]=\mathrm{time^{-1}}$$
N = injury count, s = severity (ordinal, e.g. AIS), g ∈ {0,1} = ApoE4 carrier. This formalizes “dementia risk rising in a dose-responsive manner with injury severity and repetition and moderated by factors such as ApoE4” [PAGE 1]. *Breakdown:* the design-matrix singularity when N and s are collinear (many-mild vs. few-severe); non-proportionality if β₁ is itself time-varying (sensitization), in which case the exponential factorization is invalid.

**E4 — Blood–brain barrier transfer constant.** Patlak-type:
$$K^{\mathrm{trans}}=\frac{C_{\mathrm{tissue}}(T)-V_{p}\,C_{\mathrm{plasma}}(T)}{\int_{0}^{T}C_{\mathrm{plasma}}(t)\,dt},\qquad [K^{\mathrm{trans}}]=\mathrm{mL\,g^{-1}\,s^{-1}}$$
The measured observable is fractional signal change from dextran/IgG extravasation, which “correlates with functional deficits and increases with injury frequency” [PAGE 1]. *Breakdown:* as T → 0 the denominator vanishes — K^trans is ill-posed with divergent variance. This is the formal reason the editorial’s third contribution insists on “late-phase perfusion analysis by 3D arterial spin labeling (ASL) MRI” [PAGE 1].

**E5 — Calcium–calpain activation.** Hill kinetics:
$$v_{\mathrm{calpain}}=\frac{V_{\max}\,[\mathrm{Ca^{2+}}]^{n}}{K_{d}^{\,n}+[\mathrm{Ca^{2+}}]^{n}},\qquad [v]=\mathrm{mol\,L^{-1}\,s^{-1}}$$
Grounding: “calcium homeostasis as a shared vulnerability across TBI and AD” with “calpain positioned as a key regulator” [PAGE 2]. *Breakdown:* K_d → 0 (always-on protease singularity); n → ∞ (switch collapse); phosphatase saturation, at which point the phospho-tau steady state $[\tau_{p}]^{*}=k_{\mathrm{kin}}[\tau][\mathrm{kinase}]/(k_{\mathrm{phos}}[\mathrm{PP}])$ diverges and “tau hyperphosphorylation” [PAGE 2] becomes irreversible.

**E6 — Biphasic HIF-1 response (the central gray-zone operator).**
$$E(H,\tau)=A\,\frac{H^{n_{1}}}{K_{1}^{n_{1}}+H^{n_{1}}}-B\,\frac{\tau}{\tau_{0}}\,\frac{H^{n_{2}}}{K_{2}^{n_{2}}+H^{n_{2}}}$$
H = hypoxia severity, τ [s] = duration, E = net survival effect (dimensionless, positive = protective). Grounding: “HIF-1 can be protective in some contexts yet proinflammatory and neurotoxic in others” and “its effects likely depend on the severity and duration of hypoxia” [PAGE 2]. The crossover H*(τ) solves E = 0; ∂E/∂H changes sign there, which is exactly the editorial’s rule: “boosting HIF-1 in early disease or mild hypoxia … but potentially suppressing it in chronic hypoxia or advanced AD where harmful effects may dominate” [PAGE 2]. *Breakdown:* as τ/τ₀ → ∞ the second term dominates for all H, E becomes monotone decreasing, and the “boost early” rule inverts globally — a regime in which every HIF-1 stabilizer is net-toxic.

**E7 — Imaging channel capacity and return-to-sport identifiability.**
$$C=B\log_{2}(1+\mathrm{SNR}),\quad [C]=\mathrm{bit\,s^{-1}};\qquad \mathrm{AUC}=\Phi\!\left(\frac{\mu_{1}-\mu_{0}}{\sigma\sqrt{2}}\right)$$
Grounding: “improve predictions about when it is safe for athletes with mild traumatic brain injury (mTBI) to return to sport” [PAGE 1]. *Breakdown:* SNR → 0 ⇒ C → 0; if Δμ = μ₁ − μ₀ falls below scan–rescan σ, the decision carries zero information and the return-to-sport claim is not adjudicable — an instrument veto, not a clinical one.

**E8 — ISR suppression of Aβ flux (target null-space).**
$$J_{\mathrm{A\beta}}=k_{\mathrm{cat}}\,[\mathrm{C99}]\,\phi_{\mathrm{ISR}},\qquad \phi_{\mathrm{ISR}}\in[0,1],\quad [J]=\mathrm{mol\,s^{-1}}$$
$$\frac{\partial J_{\mathrm{A\beta}}}{\partial(\text{anti-A}\beta\ \text{dose})}\xrightarrow{\ \phi_{\mathrm{ISR}}\to 0\ }0$$
Grounding: “proteolytic A-beta production is suppressed in AD-affected neurons under ISR conditions” [PAGE 2] and “skepticism that extracellular A-beta-focused approaches will reverse symptomatic disease” [PAGE 2]. *Breakdown:* φ_ISR → 0 is a genuine null-space singularity — infinitely large dose produces zero flux change. Any trial that does not measure φ_ISR cannot distinguish “drug failed” from “target absent.”

**Unit and assumption ledger.** Strain rate s⁻¹; hazard time⁻¹; K^trans mL·g⁻¹·s⁻¹; calpain velocity mol·L⁻¹·s⁻¹; HIF effect dimensionless with τ in s; channel capacity bit·s⁻¹; Aβ flux mol·s⁻¹. No parameter values are supplied by the editorial for ε̇_c, β, κ, K_d, n, A, B, K₁, K₂, or φ_ISR; every numeric instantiation below is therefore a *design prediction for a counterfactual*, not a reported measurement.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

The editorial’s eight contributions are not a new tree; they are eight branches grafted onto five older trunks, and reading them retrocausally exposes which claims are load-bearing and which are decorative.

*Trunk 1 — rotational biomechanics.* Holbourn’s 1943 physical model of head injury established that angular, not linear, acceleration is the dominant driver of cerebral shear; Ommaya and Gennarelli’s 1974 primate work supplied the angular-acceleration–to–DAI dose mapping. The editorial’s first contribution is a direct descendant: “the physics of head trauma, especially rotational acceleration and tissue deformation” [PAGE 1]. Retrocausal consequence: any TBI claim in this issue that does not specify angular kinematics is downstream of an unmeasured exposure — a genealogical gap, not a gap in the contributing author’s competence.

*Trunk 2 — the calcium hypothesis of cell death.* Schanne et al. (1979) proposed calcium influx as the final common path of toxic cell death; the calpain literature of the 1980s–90s supplied the protease. The editorial’s fourth contribution, “calcium-driven enzyme networks (kinases, phosphatases, proteases)” [PAGE 2], is a 45-year-old trunk with new bark. The retrocausal trap: because calcium is a *common* path, it is also a *non-specific* path — a calpain inhibitor that works in TBI will also be confounded in AD, and the editorial’s proposed “combined inhibition of selected calcium-dependent enzymes” [PAGE 2] inherits all of the pathway-redundancy failures of the 1990s stroke trials.

*Trunk 3 — HIF-1 and oxygen homeostasis.* Semenza’s 1992 identification of HIF-1 as the hypoxia-inducible transcription factor created a monotone prior (“more HIF-1 = better adaptation”) that took two decades to unseat. The editorial explicitly unseats it: “protective in some contexts yet proinflammatory and neurotoxic in others” [PAGE 2]. This is the most scientifically mature sentence in the document, and it is mature precisely because it is *retrocausal* — it reads the early literature’s failures back into a corrected operator (E6).

*Trunk 4 — the amyloid cascade and its revision.* Hardy and Selkoe (1992) made Aβ the prime mover; Volloch and Rits-Volloch’s “Amyloid Cascade Hypothesis 2.0” and now the C99/ISR formulation [PAGE 2] are the third-generation revision. The editorial flags the revision but does not resolve the conflict with contributions 1–7, which still speak in “protein aggregation” and “amyloid-β accumulation” terms [PAGE 1, PAGE 2]. This is the document’s largest unresolved genealogical debt.

*Trunk 5 — CTE as a clinicopathological entity.* Omalu’s 2005 case series and McKee’s subsequent cohort work created the CTE diagnosis; Pszczołowska et al. now “explicitly explore CTE in relation to AD, highlighting overlapping neuropathological features … while emphasizing differences, including BBB-related damage patterns” [PAGE 2]. Retrocausally, the CTE literature’s central weakness — ascertainment bias from convenience autopsies of former athletes — is inherited wholesale by any claim that TBI *causes* AD.

**Multi-week traps.** (i) *The label trap:* the editorial’s own scare quotes around “‘mild’ injury phenotypes” [PAGE 1] signal that clinical severity labels and biomechanical dose decouple over the weeks in which symptoms resolve — a patient can be “asymptomatic” while K^trans remains elevated. (ii) *The late-phase trap:* ASL’s diagnostic value is asserted for “late-phase perfusion analysis” [PAGE 1], meaning the informative window is weeks, not hours; an acute scan that is normal cannot exonerate the barrier. (iii) *The HIF-1 window inversion:* E6’s crossover H*(τ) means a therapy that is correct at week 1 is wrong at week 12; the editorial states this explicitly [PAGE 2] and it is the single most consequential multi-week trap in the issue. (iv) *The CTE latency trap:* decades-long latency makes any within-season exposure metric a proxy for an unobservable cumulative integral. (v) *The publication clock:* the 2-day received-to-accepted interval [PAGE 1] compresses editorial synthesis below the multi-week timescale on which contributors’ disagreements would normally surface.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

Model the agents in this document: the athlete, the team physician, the bench scientist, the contributing reviewer, the editor. Each holds a posterior over a hypothesis space ℋ = {trauma-causal, amyloid-causal, shared-vulnerability, coincidence}. Bayesian update is:
$$P_{t+1}(H)=\frac{P(E_{t}\mid H)\,P_{t}(H)}{\sum_{H'}P(E_{t}\mid H')\,P_{t}(H')}$$

**Crisis habit regression** is what happens to that update under stakes and time pressure. Formalize the decision as a softmax with inverse temperature β_d:
$$\pi(a)=\frac{\exp(\beta_{d}\,U(a))}{\sum_{a'}\exp(\beta_{d}\,U(a'))},\qquad \lim_{\beta_{d}\to\infty}\pi=\delta(a-a^{\star})$$
As β_d → ∞ (a crisis: sideline decision, family meeting, grant deadline), the agent’s policy collapses to a single action — the *habit*. The habits visible in this editorial’s domain are: “Aβ is the cause, so anti-Aβ is the answer” (the amyloid habit), “rest until asymptomatic, then return” (the return-to-play habit), “one severe injury is worse than many mild ones” (the severity habit). Each habit is a point-mass prior that E1–E8 show to be wrong in identifiable regions: the amyloid habit fails wherever φ_ISR → 0 (E8); the return-to-play habit fails wherever K^trans is elevated but symptoms are not (E4, late phase); the severity habit fails because E2’s hazard integral weights repetition through β and E3’s collinearity makes N and s non-separable.

**Counter-trap.** The corrective failure mode is symmetric. Having learned that trauma matters, the agent over-corrects to a trauma-monocausal prior and treats *any* neurodegeneration in a contact-sport athlete as CTE. This is a prior collapse in the opposite direction, and it is dangerous because CTE has no in-vivo diagnostic — the editorial’s contribution 7 speaks of “overlapping neuropathological features” [PAGE 2], which is precisely the condition under which a confident diagnosis is unfalsifiable. The counter-trap is not a rhetorical hazard; it is a formal one: a point-mass prior makes $P(E\mid H)$ irrelevant, so no evidence can move the agent, and the recursion in the update equation above terminates.

**Clock.** The third agent-level object is temporal. Three clocks compete: the *biological repair clock* (κ in E2, weeks), the *imaging clock* (the T in E4’s denominator, weeks for late-phase ASL), and the *institutional clock* (the 2-day editorial turnaround [PAGE 1], and the return-to-sport calendar). Recursive theory of mind requires that each agent model the *other’s* clock. The athlete models the physician as wanting to clear them (so minimizes symptoms); the physician models the athlete as minimizing symptoms (so discounts the report); the editor models reviewers as having already conceded the special issue’s premise (so does not solicit the disconfirming contribution). The editorial’s own hedge — “may influence,” “potentially culminating,” “possible link” [PAGE 1] — is the linguistic trace of an editor who knows the clock is faster than the evidence. The correct counter-move is not more hedging but an explicit discriminating experiment, of the type instantiated in the RLVR section below.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

A veto is a lower-layer constraint that renders an upper-layer claim non-adjudicable regardless of how well the upper layer is argued. Four layers apply here.

**Physical veto (kinematic).** If the reconstructed angular kinematics for an exposure yield $\mathcal{D}(T) \ll 1$ in E2 — i.e., the strain-rate integral is orders of magnitude below the DAI threshold — then no molecular claim about that exposure is admissible. The mechanism is simple: E1 and E2 are the *input* to every downstream cascade in the editorial (“These primary insults trigger secondary cascades” [PAGE 1]). An exposure with no primary insult cannot have triggered a secondary cascade. This veto is proof-like because it is monotone: lowering ε̇ can only lower $\mathcal{D}$.

**Biomechanical veto (tissue tolerance).** White-matter shear tolerance is finite. Where E1 predicts ε below tolerance but the clinical record says “mild TBI,” the correct inference is that the clinical label is wrong, not that the tissue tolerated an impossible strain. The editorial supplies the supporting observation: “‘mild’ injury phenotypes” with “measurable vascular compromise” [PAGE 1]. The veto therefore runs *upward*: the biomechanical layer can overrule the clinical severity lexicon, and it can overrule any molecular claim that presumes a graded, monotone relationship between the label and the biology.

**Weather/environmental veto.** Three environmental covariates generate the same signals as the pathology under study. (i) *Hypoxia/altitude:* ambient hypoxia raises HIF-1 tone independently of trauma; because E6 is biphasic, altitude exposure can move a subject across H*(τ) with no injury at all. Any HIF-1 claim without altitude/SpO₂ control is confounded, and by E6’s crossover the confounding is *sign-flipping*, not merely additive. (ii) *Thermal strain:* hyperthermia and dehydration alter cerebral autoregulation and barrier integrity, mimicking E4’s extravasation signal. (iii) *Circadian and activity state:* CBF varies with posture, sleep, and recent exercise, which directly enters the denominator of E4. The veto proof is an identification argument: if the exposure-matched control group is not matched on these three covariates, the causal estimand is not identified, and no amount of molecular mechanism can recover it. This is a genuine “weather veto” — the environment, not the injury, can produce the readout.

**Instrument veto.** E7 gives the formal condition: when the effect size Δμ falls below scan–rescan σ, C → 0 bits·s⁻¹ and the return-to-sport recommendation “when it is safe for athletes with mild traumatic brain injury (mTBI) to return to sport” [PAGE 1] carries no information. This veto is orthogonal to the others: the biology may be perfectly real and the measurement still non-adjudicable.

**Adjudication order.** Physical → biomechanical → weather → instrument. The ordering is not arbitrary: each layer’s output is the next layer’s input, so a failure at layer k invalidates all claims at layers > k but never the reverse. Applied to the editorial, contributions 1 and 2 survive layers 1–2; contribution 3 is exposed at layer 4; contribution 5 is exposed at layer 3; contributions 7 and 8 are exposed at layer 1 only if their causal framing is taken literally, which the editorial’s own hedges (“may influence”) suggest it should not be.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

Each scenario is specified so that a verifiable reward can be computed from raw outputs, independent of the hypothesis being tested. Predictions are stated in advance and are falsifiable.

**V1 — BBB frequency-dose monotonicity (E4, contribution 2).** *Design:* closed-head concussive injury in the Blaschke model, randomized to N = 1, 3, 5 impacts, with dextran and IgG extravasation quantified blind, plus a sham arm. *Verifiable reward:* Spearman ρ between N and extravasation index, with a pre-registered threshold of ρ ≥ 0.8 and non-overlapping 95% CIs between N = 1 and N = 5. *Prediction:* ρ ≥ 0.8, monotone increase, consistent with “increases with injury frequency” [PAGE 1]. *Veto condition:* if ρ < 0.5 or if the N = 1 vs. N = 5 CIs overlap, the frequency-dependence claim is vetoed and the “dose-responsive” language in the editorial must be withdrawn for the barrier endpoint specifically. *Secondary check:* the sham arm must show extravasation below the assay’s limit of detection; if not, the assay, not the biology, is the finding.

**V2 — HIF-1 timing inversion (E6, contribution 5).** *Design:* chronic hypoxic exposure with HIF-1 stabilization initiated at day 1 versus day 30, four arms (early/vehicle × late/vehicle), with the crossover H* estimated from a dose–response at each timepoint. *Verifiable reward:* the sign of the between-arm difference in a pre-specified neuronal-survival endpoint, tested with a two-sided interaction term (time-of-initiation × HIF-1 status). *Prediction:* positive effect at day 1, negative at day 30, interaction term significant — the direct instantiation of “boosting HIF-1 in early disease or mild hypoxia … but potentially suppressing it in chronic hypoxia or advanced AD” [PAGE 2]. *Veto condition:* if the interaction term is null, E6 collapses to a monotone operator, and the editorial’s context-dependence claim is vetoed. *Singularity warning:* if τ/τ₀ is allowed to grow without bound, the second term of E6 dominates and the predicted late-arm harm becomes arbitrarily large — an unphysical prediction that must be capped by a floor on E.

**V3 — ISR suppression and anti-Aβ target engagement (E8, contribution 8).** *Design:* in an ISR-active neuronal preparation, measure C99, φ_ISR (via an ISR reporter), and Aβ flux; then titrate an extracellular-Aβ-directed agent across three decades of dose. *Verifiable reward:* the slope $\partial J_{\mathrm{A\beta}}/\partial(\text{dose})$ estimated with a pre-registered equivalence margin around zero. *Prediction:* as φ_ISR → 0, the slope is statistically equivalent to zero — “proteolytic A-beta production is suppressed” [PAGE 2] implies no target to engage. *Veto condition:* if the slope is significantly nonzero at low φ_ISR, the suppression claim is vetoed and the “skepticism that extracellular A-beta-focused approaches will reverse symptomatic disease” [PAGE 2] loses its mechanistic basis. *Corollary prediction:* in the same preparation, an ISR-modulating arm should move the flux, providing a positive control that distinguishes “null target” from “null assay.”

**V4 (auxiliary) — Late-phase ASL information content (E7, contribution 3).** *Design:* serial 3D ASL at acute (<72 h) and late (≥3 weeks) timepoints in mTBI, with a return-to-sport outcome at 6 weeks. *Verifiable reward:* AUC for predicting delayed return, computed separately per timepoint, with DeLong’s test for the difference. *Prediction:* AUC_late > AUC_acute, per “late-phase perfusion analysis” [PAGE 1]. *Veto condition:* if AUC_acute ≥ AUC_late, the late-phase rationale is vetoed and the instrument veto (E7) binds — the recommendation cannot be issued at the precision claimed.

**Cross-scenario consistency requirement.** V1–V4 must be run with the weather covariates of the previous section (SpO₂/altitude, core temperature, posture/activity) recorded, or their rewards are computed on a confounded estimand. This is the operational meaning of the cross-layer veto: the RLVR signal is only verifiable if the lower layers were held fixed.
</RLVR_COUNTERFACTUAL_VETOES>