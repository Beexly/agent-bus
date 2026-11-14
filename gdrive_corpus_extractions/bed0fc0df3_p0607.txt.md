---
source: "p0607.txt"
folder: "/gpu-ocr-output/pages/James-1890-PrinciplesOfPsychology-Vol2"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4835
---

<NATIVE_REASONING>
The user wants me to analyze a source text about hypnotism from James's Principles of Psychology Vol 2 (1890), page 607. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. (Not relevant to this text, but keep in mind)
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to produce at least 1000 words total across these sections. The source is page 607 (the text says "597" at top but the file is p0607.txt and user says pages: 1). Wait, the text shows "597" but user says p0607.txt. I should cite [PAGE 607] or [PAGE 597]? The user says "DRIVE SOURCE: /gpu-ocr-output/pages/James-1890-PrinciplesOfPsychology-Vol2/p0607.txt" and "PAGES: 1". The text itself has "597" at the top which might be the actual page number in the book, but the file is p0607. I'll cite as [PAGE 607] since that's the file/page identifier given, but maybe mention the printed folio 597. Actually, to be safe and accurate to the user's source, I'll cite [PAGE 607] and note the printed folio 597 if relevant. But the invariant says cite exact [PAGE N] markers. Since user says pages: 1 and file p0607, I'll use [PAGE 607]. Or maybe [PAGE 597] because that's what's printed. Hmm. I think I should use [PAGE 607] as per the file naming, but perhaps reference both. Let's use [PAGE 607] consistently since that's the OCR output page.

Now, the content: It's about hypnotism, Charcot's neuro-muscular hyperexcitability, lethargic state, somnambulic state, cutaneo-muscular hyperexcitability, catalepsy, hemilethargy, magnet/metal approach transferring half-states, echolalia, aphasia, imitation movements, Heidenhain's stroking of vertebral column, flushed face, cold eyes, dilated pupils, dilated retinas (text cuts off).

I need to treat this as a scientific/physiological text. The user wants formal LaTeX equations, SI units, assumptions, singularity/breakdown regimes. Since this is 19th-century psychology, I need to map the described phenomena to modern formalisms carefully without inventing fake ratios. I can use information theory, control theory, neuroscience formalisms (e.g., neural mass models, stochastic differential equations, Markov states) but must label assumptions and breakdown regimes. I must not invent toy equations like Force/Fatigue. I can state formal equations like:

- State transition: S_{t+1} = f(S_t, u_t, θ) + ε_t, where S ∈ {lethargy, catalepsy, somnambulism, hemilethargy...}
- Probability of state transition under stimulus: P(S_{t+1}=s' | S_t=s, stimulus=stim) = softmax(...)
- Neuromuscular hyperexcitability as gain parameter g_NM in a reflex arc: F_muscle = g_NM * I_stimulus, with breakdown when g_NM → ∞ (tetanus) or sensory blockade.
- Cutaneo-muscular hyperexcitability as spatial gain field over dermatomes.
- Information-theoretic: mutual information between operator suggestion and patient response I(Suggestion; Response) increases in somnambulic state.
- Hemispheric lateralization: left/right body states as coupled oscillators with coupling coefficient k; magnet approach flips k sign or transfers state.

I need to be careful: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." So I cannot make up ad hoc ratios. But I can use standard formalisms if clearly labeled as modern reinterpretation with assumptions and breakdown regimes.

Also need verbatim quotes from the source. I'll quote several passages exactly.

Let's plan sections:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Discuss the text: Charcot's Salpêtrière school, three states (lethargy, catalepsy, somnambulism), neuro-muscular vs cutaneo-muscular hyperexcitability, hemispheric dissociation, suggestion, automaticity.
- Multi-hop: pressure on eyeballs → lethargy → eye opening → catalepsy → half-body catalepsy → rubbing head side → hemilethargic/hemicataleptic/hemisomnambulic → magnet/metal transfers side → echolalia from cervical/epigastric pressure → aphasia from speech-centre rubbing → imitation from occipital pressure → Heidenhain vertebral stroking → autonomic signs (flushed face, cold hands, dilated pupils).
- Gray-zone audit: 19th-century localizationism vs modern distributed networks; "magnetic" influence as social contagion/expectancy; absence of control conditions; single-patient case studies (the "she" suggests female hysterics); no blinding; physiological measures absent; dilated pupil as autonomic proxy but no quantification.
- Breakdown: The taxonomy collapses under modern nosology (dissociative disorders, functional neurological disorder, response expectancy). The "magnet" effect likely an expectancy/attentional shift, not physical field.
- Word count target: 400+.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Define state space S = {L, C, Som, Hemi-L, Hemi-C, Hemi-Som, Tetanus}.
- Stimulus operators: P_eye (pressure on closed eyeballs), F_head_top (friction top of head), G_small_obj (fixed gaze), T_skin (gentle touch/blow), M_magnet (approach of magnet/metal), P_cerv (pressure lower cervical vertebrae), P_epig (pressure epigastrium), R_speech (rubbing head over speech centre), P_occip (pressure behind occiput), V_stroke (stroking vertebral column).
- State transitions with LaTeX: P(S_{t+1}=s' | S_t=s, op=o) etc.
- Hyperexcitability gains: g_NM, g_CM as dimensionless gain factors multiplying afferent input. Equation: R_muscle(t) = g · ∫ h(τ) I_afferent(t-τ) dτ. Units: g dimensionless, I in spikes/s or arbitrary afferent units, R in % MVC or arbitrary tension. Breakdown: g → ∞ yields tonic contraction/tetanus (loss of dynamic range); sensory deafferentation yields catalepsy (resistance to passive movement).
- Information: I(X;Y) in bits between suggestion and response; somnambulic state increases channel capacity but also susceptibility.
- Hemispheric coupling: left/right body states as coupled bistable units with coupling J; magnet approach applies symmetry-breaking field B_mag causing state transfer: Δs_side = -∂H/∂s, H = -J s_L s_R - B_mag(s_L + s_R). Units: J, B in dimensionless energy units (kBT). Breakdown: J=0 leads independent half-states; B_mag too strong causes global transfer.
- Cite [PAGE 607] and verbatim quotes.
- Exact singularity/breakdown regimes: fixed gaze primary induction fails if attention cannot be sustained (breakdown of fixation); top-of-head friction fails if patient not in preceding conditions; magnet transfer fails if no lateralized state exists.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Mesmer (animal magnetism), Puységur (somnambulism, crisis), Charcot (Salpêtrière, hysteria, hypnosis stages), Heidenhain (reflexology, vertebral stimulation), James (Pragmatism, stream of consciousness), later: Janet, Freud, Pavlov, Hull, Erickson, modern neuroscience of suggestibility (fMRI, default mode network).
- Multi-week traps: In historical context, "multi-week" could refer to the chronicity of hysterical states, the persistence of post-hypnotic suggestions, the risk of iatrogenic entrenchment if suggestions repeated over weeks; the trap of reifying state labels as stable entities rather than transient attractors; the trap of expecting linear dose-response across sessions (habituation vs sensitization).
- Must be careful with "multi-week traps" - interpret as historical traps that unfold over weeks/months of treatment or research, e.g., kindling of suggestibility, dependence on operator, extinction curves.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under stress/hypnotic induction, patient regresses to automatic, habitual motor patterns (echolalia, imitation) as a low-level control mode regresses to earlier developmental/phylogenetic habits.
- Counter-trap: Operator's suggestion creates a counter-habit; patient may resist or over-comply; the "counter-trap" is the second-order expectation that one should respond, producing pseudo-response.
- Clock: Temporal structure of induction—latency, duration, decay of post-hypnotic effects; circadian/sleep-wake coupling; the "clock" as the metronomic rhythm of fixation objects (e.g., swinging watch, though not explicitly mentioned here, fixed gaze implies temporal entrainment).
- Formalize: habit strength H(t) follows dH/dt = α·S(t) - β·H(t); regression occurs when β (extinction) is low and α (suggestibility) high under dissociation. Counter-trap when meta-expectation M(t) suppresses H(t).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical veto: Pressure on eyeballs can induce lethargy via trigeminal-vagal afferents (oculocardiac reflex) but cannot selectively open one eye to induce hemic catalepsy without intact cortical motor pathways; lesion in corpus callosum or motor cortex required for true hemiplegic catalepsy, not mere rubbing.
- Biomechanical veto: "General tetanus" from cutaneous touch requires sustained motor neuron firing beyond physiological refractory periods; impossible from gentle blowing unless pre-existing hyperexcitability; tetanus (spasmodic) vs tetanus (infection) distinction.
- Weather veto: No atmospheric variables in source; cannot claim barometric/humidity effects; any such claim is external and vetoed by absence of data.
- Autonomic veto: Flushed face/cold hands/dilated pupils are consistent with sympathetic arousal but cannot be localized to speech centre rubbing without vascular imaging; breakdown: cutaneous vasomotor responses are diffusely mediated.
- Formal veto logic: Veto V = ∨_i v_i where v_i are physical impossibility predicates; if V=1, phenomenon cannot be explained by cited stimulus alone.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. Need 3 scenarios where a counterfactual intervention vetoes the claimed causal link.
Scenario 1: Sham pressure on lower cervical vertebrae vs real pressure; prediction: echolalia occurs at equal rates in both if expectancy-driven; veto if real pressure significantly increases echolalia beyond sham (p<0.01, measured by sound repetition frequency in Hz).
Scenario 2: Rubbing head over speech centre (Broca's area) vs rubbing occipital control site in awake non-hypnotized subjects; prediction: aphasia only if hypnosis + suggestion, not from rubbing alone; veto if rubbing alone causes aphasia (would imply direct lesion-like effect, physically implausible).
Scenario 3: Magnet approach vs non-magnetic metal of identical appearance (blinded); prediction: half-state transfer occurs equally if expectancy; veto if only ferromagnetic material produces transfer (suggesting physical field, but likely vetoed by physics—magnetic fields too weak at skin to affect neural firing).
- Include verifiable metrics: repetition rate (sounds/min), speech articulation score (0-10), laterality index via fMRI/EEG, duration of state (seconds).
- Predictions under null (expectancy) vs alternative (direct physiological).

Need total words >= 1000. Each section needs substantial content. THINK_TRACE >= 400. Others should be long enough to reach total 1000+.

No betting lines. No fake ratios. Use formal LaTeX.

Let's start drafting. Need XML sections exactly. I will write them in order.

Ensure verbatim quotes are exact from source text.

Quotes to use:
- "Charcot calls this symptom by the name of neuro-muscular hyperexcitability."
- "The lethargic state may be primarily brought on by fixedly looking at anything, or by pressure on the closed eyeballs."
- "Friction on the top of the head will make the patient pass from either of the two preceding conditions into the somnambulic state, in which she is alert, talkative, and susceptible to all the suggestions of the operator."
- "In this state the accurately limited muscular contractions characteristic of lethargy do not follow upon the above-described manipulations, but instead of them there is a tendency to rigidity of entire regions of the body, which may upon occasion develop into general tetanus, and which is brought about by gently touching the skin or blowing upon it."
- "M. Charcot calls this by the name of cutaneo-muscular hyperexcitability."
- "Opening the eyes of a patient in lethargy causes her to pass into catalepsy."
- "If one eye only be opened, the corresponding half of the body becomes cataleptic, whilst the other half remains in lethargy."
- "The approach of a magnet (or certain metals) to the skin causes these half-states (and many others) to be transferred to the opposite sidles." [typo sidles in source, I should quote verbatim including typo or use [sic].]
- "Automatic repetition of every sound heard (‘echolalia') is said to be produced by pressure on the lower cervical vertebræ or on the epigastrium."
- "Aphasia is brought about by rubbing the head over the region of the speech-centre."
- "Pressure belhind the occiput determines movements of imitation." [typo belhind]
- "Heidenhain describes a number of curious automatic tendencies to movement, which are brought about by stroking various portions of the vertebral column."
- "Certain other symptoms have been frequently noticed, such as a flushed face and cold hands, brilliant and congested eyes, dilated pupils. Dilated reti-" [text cuts off]

I'll cite [PAGE 607] after quotes.

Now write the response. Must be purely these XML sections? The user asks for them. I'll output only the XML sections, no extra text outside.

Need to count words roughly. Let's aim for ~250-350 words per section except THINK_TRACE which is 400+. Total ~1600-2000 words.

Let's write carefully.

Section 1: THINK_TRACE (>=400 words). I'll do multi-hop:
1. Source describes Charcot's three-stage hypnosis model.
2. Lethargy induced by fixation/eyeball pressure; characterized by neuro-muscular hyperexcitability (tonic contraction of muscles supplied by pressed nerve trunk).
3. Transition to somnambulism via head-top friction; somnambulic patient alert, talkative, suggestible; cutaneo-muscular hyperexcitability (regional rigidity, general tetanus from touch/blow).
4. Catalepsy from eye-opening in lethargy; unilateral eye opening → hemiplegic catalepsy contralateral? Actually corresponding half. This implies crossed or ipsilateral representation? James notes corresponding half becomes cataleptic.
5. Lateral transfer by magnet/metal → suggests body schema / hemispheric lateralization is labile under suggestion.
6. Specific autonomic/motor signs: echolalia (cervical/epigastric pressure), aphasia (speech-centre rubbing), imitation (occipital pressure), Heidenhain vertebral stroking, autonomic signs.
Gray-zone audit: single-sex patient ("she"), no control, no blinding, pre-physiological instrumentation, reification of "states" as entities, "magnet" as physical cause vs expectancy. Modern translation: functional neurological disorder, response expectancy, dissociative attention, sensorimotor gating.
Breakdown: taxonomy singularity when g_NM saturates; state labels fail under mixed presentations; no quantitative thresholds.

I'll write it out.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS.
Define state space, operators, equations with LaTeX.
Use:
\mathcal{S} = \{L, C, Som, HL, HC, HSom, Tet\}
Stimulus operators as set \mathcal{O}.
Transition kernel:
\pi(s' \mid s, o) = \frac{\exp(\beta \cdot Q(s,o,s'))}{\sum_{s''} \exp(\beta \cdot Q(s,o,s''))}
where Q is state-action value in dimensionless log-odds units, \beta is inverse temperature (suggestibility gain). Assumption: Markovian state transitions within a session. Breakdown: non-Markovian hysteresis if post-hypnotic suggestion persists beyond session (multi-session memory).
Hyperexcitability:
T_{muscle}(t) = g_{NM} \int_{0}^{\infty} h(\tau) I_{afferent}(t-\tau) d\tau
Units: T in N·m or %MVC; g_{NM} dimensionless; I in spikes·s^{-1}; h in s. Breakdown: g_{NM} \to \infty yields tonic contraction (loss of dynamical range); sensory blockade I=0 yields flaccidity not catalepsy.
Cutaneo-muscular:
R_{region}(\mathbf{x}) = g_{CM} \cdot S_{skin}(\mathbf{x}) \cdot \mathbb{I}[\mathbf{x} \in \text{dermatome}]
Breakdown: general tetanus when g_{CM} globally saturates and haptic threshold \theta_{touch} \to 0.
Hemispheric coupling:
\mathcal{H} = -J s_L s_R - B_{mag}(s_L + s_R)
s_{L,R} \in \{-1,+1\}; J, B dimensionless (k_B T units). Magnet approach applies B_{mag} causing state transfer. Breakdown: J=0 isolates halves; B_{mag} \gg J forces global transfer.
Information:
I(Sugg; Resp) = \sum p(s,r) \log_2 \frac{p(s,r)}{p(s)p(r)} \quad [\text{bits}]
Somnambulic state increases channel capacity but reduces noise immunity.
Citations [PAGE 607].

Section 3: RETROCAUSAL_GENEALOGY.
Lineage: Mesmer → Puységur → Charcot → Heidenhain → James → Janet/Freud → Pavlov → modern.
Multi-week traps: chronic suggestibility, post-hypnotic persistence, iatrogenic entrenchment, extinction/recovery curves, operator dependency.
Word count.

Section 4: RECURSIVE_THEORY_OF_MIND.
Habit regression equation: dH/dt = \alpha \cdot D(t) - \lambda H(t), D dissociation level.
Counter-trap: meta-expectation M.
Clock: \tau_{induction}, \tau_{decay}.

Section 5: CROSS_LAYER_VETO_ADJUDICATION.
Physical, biomechanical, weather vetoes. Formal veto predicate.

Section 6: RLVR_COUNTERFACTUAL_VETOES.
Three scenarios with verifiable metrics and predictions.

Let's ensure no betting language.

I will now produce the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The source passage [PAGE 607] presents William James's summary of Charcot's Salpêtrière hypnotism taxonomy, structured around three primary states—lethargy, catalepsy, and somnambulism—and a set of stimulus-specific operators that purportedly shift a subject between them. A multi-hop derivation begins with the afferent trigger: fixed gaze or pressure on closed eyeballs induces lethargy, during which pressure on a nerve-trunk produces tonic contraction of the muscles supplied by that trunk. James quotes Charcot's label for this as "neuro-muscular hyperexcitability" [PAGE 607]. The second hop is the transition operator: friction on the top of the head moves the patient from lethargy or its precursor into the somnambulic state, described as alert, talkative, and "susceptible to all the suggestions of the operator" [PAGE 607]. In somnambulism, the focal, accurately limited contractions of lethargy are replaced by regional rigidity that may generalize into "general tetanus" evoked by gentle cutaneous touch or blowing, which Charcot terms "cutaneo-muscular hyperexcitability" [PAGE 607].

The third hop concerns lateralization and state transfer. Opening one eye of a lethargic patient produces catalepsy in the corresponding half of the body while the other half remains lethargic [PAGE 607]. Rubbing one side of the head yields hemilethargy, hemicatalepsy, or hemisomnambulism. Most strikingly, "the approach of a magnet (or certain metals) to the skin causes these half-states (and many others) to be transferred to the opposite sidles" [PAGE 607; original reads "sidles"]. This sequence implies that the hypnotic state is not a global scalar but a laterally dissociated vector over body schema, whose symmetry can be broken by an exogenous approach stimulus.

The fourth hop maps specific operators to specific symptoms: pressure on lower cervical vertebrae or epigastrium generates echolalia [PAGE 607]; rubbing over the speech-centre produces aphasia [PAGE 607]; pressure behind the occiput determines imitation movements [PAGE 607]; stroking the vertebral column generates Heidenhain's automatic tendencies [PAGE 607]; autonomic signs include flushed face, cold hands, congested eyes, and dilated pupils [PAGE 607].

Gray-zone audit. The text exhibits at least four epistemic fragilities. First, the subject is consistently referred to as "she" [PAGE 607], reflecting the Salpêtrière hysteria cohort; no male or neutral baseline is provided, so sex-linked susceptibility is confounded with state induction. Second, there are no control conditions, no blinding of the operator, and no quantification of stimulus intensity (e.g., pressure in kPa, gaze duration in seconds, magnetic flux density in tesla). Third, the taxonomy reifies transient states—lethargy, catalepsy, somnambulism—as natural kinds rather than metastable attractors in a suggestion-coupled sensorimotor system. Fourth, the "magnet" explanation invokes a physical field mechanism without establishing field strength or neural coupling, violating the breakdown regime that any claimed magneto-neural effect must exceed thermal noise (k_B T) and neuronal threshold (~10–20 mV depolarization) at the relevant spatial scale; no such calculation appears in the source.

Modern translation. Contemporary frameworks would recode these phenomena as dissociative attention, response expectancy, functional neurological symptom disorder, and sensorimotor gating failure. The "states" become low-dimensional manifolds in a coupled neural-mass model; the "operators" become priors over precision weighting in predictive processing. However, the source lacks the temporal resolution (millisecond EEG/fMRI), the spatial resolution (cortical localization), and the statistical controls (randomization, counterbalancing) necessary to distinguish genuine neurophysiological hyperexcitability from expectancy-driven compliance. The singularity regime is reached when hyperexcitability gain g → ∞, producing tetanus and collapsing the dynamic range of motor response; below threshold, no state transition occurs. The text sits at the pre-instrumental boundary of psychophysics, rich in phenomenology but impoverished in formal causal identification.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the hypnotic state space be \mathcal{S} = \{L, C, Som, HL, HC, HSom, Tet\}, where L = lethargy, C = catalepsy, Som = somnambulism, HL/HC/HSom = hemi-lethargy/hemi-catalepsy/hemi-somnambulism, and Tet = general tetanus [PAGE 607]. Define the operator set \mathcal{O} = \{P_{\text{eyes}}, F_{\text{head}}, G_{\text{gaze}}, T_{\text{skin}}, M_{\text{mag}}, P_{\text{cerv}}, P_{\text{epig}}, R_{\text{speech}}, P_{\text{occip}}, V_{\text{vert}}\}, corresponding respectively to pressure on closed eyeballs, friction on top of head, fixed gaze on small object, gentle skin touch/blow, approach of magnet/metal, pressure on lower cervical vertebrae, pressure on epigastrium, rubbing head over speech-centre, pressure behind occiput, and vertebral stroking [PAGE 607].

Transition kernel (assumption: first-order Markov within a single session). The conditional probability of state s_{t+1} given current state s_t and operator o_t is:

\pi(s_{t+1} = s' \mid s_t = s, o_t = o) = \frac{\exp(\beta \cdot Q(s, o, s'))}{\sum_{s'' \in \mathcal{S}} \exp(\beta \cdot Q(s, o, s''))}

where Q(s,o,s') is a dimensionless state-operator-value and \beta > 0 is an inverse-temperature gain indexing suggestibility (units: dimensionless, interpreted in k_B T^{-1} if cast as an energy landscape). Breakdown regime: if post-hypnotic suggestions persist across sessions, the process is non-Markovian and \pi must be augmented with a memory trace m_t; the single-session kernel then fails.

Neuro-muscular hyperexcitability [PAGE 607]. Let I_{\text{afferent}}(t) \in \mathbb{R}^{+} be afferent impulse frequency (spikes \cdot s^{-1}) from a pressed nerve-trunk, h(\tau) a causal reflex kernel (units: s), and g_{NM} a dimensionless gain. Muscle tension output:

T_{\text{muscle}}(t) = g_{NM} \int_{0}^{\infty} h(\tau) \, I_{\text{afferent}}(t - \tau) \, d\tau \quad [\text{N} \cdot \text{m or \%MVC}]

Assumption: linear time-invariant reflex arc below saturation. Breakdown: g_{NM} \to \infty yields unbounded tonic contraction (loss of dynamical range); I_{\text{afferent}} = 0 (complete sensory blockade) predicts flaccidity, not catalepsy, so catalepsy requires an additional central motor-inhibition term not specified in the source.

Cutaneo-muscular hyperexcitability [PAGE 607]. For skin position \mathbf{x} \in \mathbb{R}^{2}, let S_{\text{skin}}(\mathbf{x},t) \in \{0,1\} indicate gentle touch or blow above threshold \theta_{\text{touch}}. Regional rigidity:

R_{\text{region}}(\mathbf{x},t) = g_{CM} \cdot S_{\text{skin}}(\mathbf{x},t) \cdot \mathbb{I}[\mathbf{x} \in \mathcal{D}]

where g_{CM} is dimensionless gain, \mathcal{D} is a dermatomal or body-region mask, and \mathbb{I} is the indicator function. Breakdown: global tetanus occurs when g_{CM} saturates across all \mathcal{D} and \theta_{\text{touch}} \to 0, such that subthreshold stimuli trigger full rigidity.

Hemispheric / half-state coupling. Let s_L, s_R \in \{-1,+1\} denote the state of left and right body halves. An Ising-like Hamiltonian captures lateral dissociation:

\mathcal{H}(s_L, s_R) = -J \, s_L s_R - B_{\text{mag}}(s_L + s_R)

where J (inter-half coupling) and B_{\text{mag}} (magnet/metal approach field) are dimensionless in units of k_B T. Opening one eye or rubbing one side applies a local bias; "the approach of a magnet ... causes these half-states ... to be transferred to the opposite sidles" [PAGE 607] corresponds to a sign-reversing pulse in B_{\text{mag}} that flips s_L \leftrightarrow s_R. Breakdown: J = 0 isolates halves (no transfer possible); |B_{\text{mag}}| \gg |J| forces global transfer, erasing half-state differentiation.

Information-theoretic susceptibility. In somnambulism, the patient is "susceptible to all the suggestions of the operator" [PAGE 607]. Model suggestion X and response Y as discrete channels:

I(X; Y) = \sum_{x \in \mathcal{X}} \sum_{y \in \mathcal{Y}} p(x,y) \log_2 \frac{p(x,y)}{p(x)p(y)} \quad [\text{bits}]

Assumption: somnambulic state increases channel capacity C = \max_{p(x)} I(X;Y) but simultaneously reduces noise immunity, raising false-alarm response rate. Breakdown: if the subject is not somnambulic, C collapses toward baseline and suggestions fail to drive reliable motor or speech output.

All equations above are modern formal reinterpretations of [PAGE 607]; the source itself provides no SI measurements, no gain constants, and no statistical thresholds.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of the passage [PAGE 607] runs from Mesmer's "animal magnetism" (late 18th century), through Puységur's identification of somnambulism and the "crisis" state (1780s), to Charcot's Salpêtrière nosology of hysteria and hypnotic stages (1880s–1890s), then to Heidenhain's reflexological vertebral stimulation, and finally to James's own synthesis in Principles of Psychology. James situates Charcot's findings within a broader associationist and physiological psychology tradition, while implicitly contesting the notion that these symptoms are "independent of mental expectation" [PAGE 607]. The subsequent intellectual descendants include Janet's dissociation theory, Freud's early hypnotic work and later abandonment of it, Pavlovian conditioning accounts of suggestion, and modern cognitive neuroscience of hypnotic responsivity (default-mode network coupling, prefrontal-parietal control, and predictive processing).

Multi-week traps. Three historical traps unfold over weeks to months rather than minutes. (1) The expectancy-entrenchment trap: repeated operator suggestions over multiple sessions can convert a transient state into a chronic functional pattern, iatrogenically stabilizing what was originally a labile hypnotic attractor. (2) The extinction-recovery trap: post-hypnotic suggestions may appear to vanish after days or weeks, then spontaneously recover under contextual renewal, mimicking a "cure" that is actually latent suppression. (3) The operator-dependency trap: the subject's responsiveness becomes bound to a specific operator's ritual (gaze fixation, head friction, magnet approach), such that transfer to a new clinician fails after a multi-week interval, producing an apparent loss of treatability that is really a context-shift failure. James's text offers no longitudinal data, so these traps remain inferential; the breakdown regime is any design lacking repeated-measures counterbalancing across weeks and blinded operator rotation.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. Under hypnotic induction, the subject's executive control regresses to automatic, lower-level motor schemas. The pressure-induced echolalia [PAGE 607] and imitation movements triggered by occipital pressure [PAGE 607] are instances of this regression: the subject repeats heard sounds or imitates observed actions without reflective mediation. Formally, let habit strength H(t) \in [0,1] obey

\frac{dH}{dt} = \alpha \cdot D(t) - \lambda H(t)

where D(t) \in [0,1] is dissociation depth induced by the operator, \alpha is the habit-acquisition rate under suggestion (s^{-1}), and \lambda is the extinction rate (s^{-1}). In crisis states, D(t) is high and \lambda is suppressed, so H(t) asymptotes near 1 and the habit becomes expressed involuntarily.

Counter-trap. The second-order expectation that one "should" respond to the operator creates a counter-habit C(t) that competes with H(t):

\frac{dC}{dt} = \gamma \cdot M(t) - \mu C(t)

where M(t) is meta-expectation of compliance and \gamma, \mu are rates. The counter-trap is triggered when C(t) overrides genuine automaticity, producing pseudo-somnambulism: the subject performs suggestibility because she believes a somnambulic subject ought to comply. Breakdown: if M(t) is removed (blinded operator, concealed suggestion), C(t) decays and true automaticity (or its absence) is revealed.

Clock. The temporal structure of induction functions as a clock. Fixation on a small object [PAGE 607] entrains attention at a characteristic frequency \omega_{\text{fix}}; head friction and stroking are discrete pulses at intervals \Delta t. State duration \tau_{\text{state}} and post-hypnotic decay \tau_{\text{decay}} define the clock's phase space. A prediction: if the inter-operator interval exceeds \tau_{\text{decay}}, the subject returns to baseline and the induction must be re-initiated; no evidence in [PAGE 607] addresses multi-day retention, so the clock constant remains uncalibrated.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto. Pressure on the closed eyeballs can modulate brainstem autonomic tone via trigeminal-vagal afferents (e.g., oculocardiac reflex), but it cannot by itself generate the somnambulic "alert, talkative" state [PAGE 607] without intact ascending reticular and cortical systems. A physical veto predicate v_{\text{phys}} = 1 if the proposed afferent route lacks a known polysynaptic pathway to cortical speech and motor planning networks. For the claim that rubbing the head over the speech-centre causes aphasia [PAGE 607], v_{\text{phys}} = 1 unless the rubbing produces mechanical tissue perturbation comparable to a lesion (force in newtons over cortical surface area in m^2, with strain exceeding axonal failure thresholds); surface friction cannot depolarize or silence Broca's region directly.

Biomechanical veto. General tetanus from "gently touching the skin or blowing upon it" [PAGE 607] requires sustained high-frequency motor-unit firing across entire body regions. The biomechanical veto v_{\text{bio}} = 1 if peripheral afferent input alone cannot overcome motor-neuron refractory periods (~1 ms) and force-frequency summation limits; tetanus (sustained contraction) at the whole-body level implies central hyperexcitability or pre-existing spasticity, not cutaneous touch. The source conflates "tetanus" as a physiological contraction state with possible pathogenic meaning; no tetanus toxin or infection mechanism is mentioned, so the term is used purely biomechanically.

Weather veto. The source contains no atmospheric variables (barometric pressure, humidity, temperature, geomagnetic activity). Any claim that weather modulates these hypnotic states is externally imported and is vetoed by v_{\text{weather}} = 1 for lack of data in [PAGE 607] and absence of a plausible transduction pathway from meteorology to hemispheric catalepsy.

Autonomic veto. Flushed face, cold hands, congested eyes, and dilated pupils [PAGE 607] are consistent with sympathetic arousal but are diffusely mediated by the hypothalamus and autonomic plexus. They cannot be localized to speech-centre rubbing or occipital pressure without vascular imaging; the autonomic veto v_{\text{auto}} = 1 unless regional blood-flow changes (e.g., laser Doppler, flux in arbitrary perfusion units) are shown to be topographically specific to the rubbed region.

Adjudication rule. Let the composite veto V = v_{\text{phys}} \lor v_{\text{bio}} \lor v_{\text{weather}} \lor v_{\text{auto}}. If V = 1, the cited stimulus is insufficient to explain the symptom; a central, expectancy, or social-contagion mechanism must be admitted. For nearly every operator in [PAGE 607], V = 1 under modern physiological constraints.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR (reinforcement learning from verifiable rewards) requires counterfactual interventions with observable, quantifiable outcomes. Three veto scenarios:

Scenario 1: Echogenicity under sham vs. real cervical pressure. Intervention: blindfolded subjects receive either veridical pressure on the lower cervical vertebrae (operator claims echolalia trigger [PAGE 607]) or sham pressure at a non-cervical control site, with operator and subject blinded to condition. Verifiable metric: echolalia rate E = N_{\text{repeated sounds}} / N_{\text{heard sounds}} (dimensionless, [0,1]) and mean repetition latency \bar{\ell} (seconds). Prediction under the expectancy null: E_{\text{real}} \approx E_{\text{sham}} and \bar{\ell}_{\text{real}} \approx \bar{\ell}_{\text{sham}}. Veto condition: if E_{\text{real}} > E_{\text{sham}} by > 2 standard errors (p < 0.01, two-tailed), the direct physiological claim gains support; if not, the source claim is vetoed as expectancy-driven.

Scenario 2: Speech-centre rubbing vs. occipital control in waking subjects. Intervention: subjects are not hypnotized; the experimenter rubs the head over Broca's region (speech-centre [PAGE 607]) or over occipital cortex (control). Verifiable metric: aphasia score A \in [0,10] (0 = fluent speech, 10 = no speech) and picture-naming latency (seconds). Prediction under the physical null: A_{\text{speech}} \approx A_{\text{occipital}} \approx 0 because surface rubbing cannot reversibly abolish language. Veto condition: if A_{\text{speech}} > 2 while A_{\text{occipital}} = 0, the claim survives physical veto; if both remain near zero, the source claim is vetoed as requiring hypnotic set rather than local mechanical effect.

Scenario 3: Magnet vs. matched non-magnetic metal. Intervention: approaching a ferromagnet and an identically appearing non-magnetic metal (e.g., painted aluminum) to the skin of a subject exhibiting a half-state [PAGE 607], double-blinded. Verifiable metric: laterality transfer count N_{\text{flip}} (number of half-state side switches per minute) and skin-surface field measurement B (tesla) from a magnetometer. Prediction under the physical null: B_{\text{magnet}} > B_{\text{control}} but N_{\text{flip,magnet}} \approx N_{\text{flip,control}} because physiologically relevant neural modulation requires field gradients far exceeding those achievable by a hand-held magnet at skin distance. Veto condition: if N_{\text{flip,magnet}} \gg N_{\text{flip,control}} and correlates with B, the source's magnetic claim is partially vindicated; if N_{\text{flip}} is equal across conditions despite B differences, the claim is vetoed as suggestibility.
</RLVR_COUNTERFACTUAL_VETOES>