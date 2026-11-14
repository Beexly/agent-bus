---
source: "p0462.txt"
folder: "/gpu-ocr-output/pages/James-1890-PrinciplesOfPsychology-Vol2"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4243
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on a provided source text (James 1890, Principles of Psychology Vol 2, page 452 as printed / page 462 of PDF perhaps). They require strict invariants:
1. ZERO BETTING LINES - no spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS - no fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
- THINK_TRACE (>=400 words)
- SOURCE_OPERATORS_AND_EQUATIONS
- RETROCAUSAL_GENEALOGY
- RECURSIVE_THEORY_OF_MIND
- CROSS_LAYER_VETO_ADJUDICATION
- RLVR_COUNTERFACTUAL_VETOES

Need to treat source text as psychological/philosophical text by William James (Principles of Psychology, Vol 2, chapter on Emotion likely). Need to discuss James-Lange theory, bodily feelings constituting emotion, etc.

Need to produce formal LaTeX equations, not toy equations. Could model emotion as functional of bodily state vector. Need units: SI/information/probability. Need breakdown regimes/singularities.

Need cite [PAGE N] markers. The source text header says "452 PSYCHOLOGY." and user says pages: 1, drive source p0462.txt. We can cite [PAGE 452] as printed page number, maybe also [PAGE p0462] but exact marker format [PAGE N]. Use [PAGE 452] since visible page number is 452. Verbatim quotes from source.

Need ensure no betting lines. This is psychology, no betting.

Need >=1000 words total across sections. THINK_TRACE >=400 words. Let's aim for substantial.

Structure:

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit. Discuss James's argument: subtract bodily elements from emotion, residual is cognitive judgment only. Emotion = f(bodily changes). Multi-hop: premise 1 emotion has bodily manifestations; premise 2 imagination cannot sustain passion without them; premise 3 disembodied emotion is nonentity for humans; conclusion bodily feelings are constitutive not merely expressive. Gray zones: distinction between expression vs consequence; anesthesia thought experiment; pure spirits; intellectual realm; difference between feeling and cognition; possible artificial emotion without body; qualia; neuroscience (interoception, insular cortex, Damasio, LeDoux, appraisal theories). Breakdown: if bodily feedback eliminated (sympathectomy, spinal cord injury), does emotion vanish? Studies show mixed results (Hohmann 1966; critical of James-Lange). Need formalize.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Define state space. Let B ∈ R^n be vector of bodily variables (heart rate HR [bpm = min^-1], respiration RR [breaths/min], skin conductance S [µS], muscle tension T [N], visceral activity V [dimensionless activation 0-1], facial expression etc). Let C ∈ {0,1}^m cognitive appraisals (person merits chastisement, circumstances deplorable). Emotional state E ∈ [0,1]^k or probability simplex. James's constitutive hypothesis: E = Φ(B, C) with ∂E/∂B ≠ 0 and E(B=0, C) = C (pure cognition). More formal: P(E=e | B, C) = softmax(β_B·g(B) + β_C·c + β_BC·g(B)⊙c). But need avoid toy ratios. Use information units: mutual information I(E; B | C) measured in bits. Breakdown: if B is clamped to baseline (corporeal anesthesia), I(E; B | C) → 0 and emotional intensity collapses to cognitive judgment intensity only. Singularity: at B = B_rest and C empty, E undefined (no emotion object). Also if β_B → 0, disembodied cognition.
Need cite [PAGE 452] verbatim quotes.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical lineage: James 1884 "What is an Emotion?" (Mind), 1890 Principles Vol 2 ch XXV? Lange 1885. Later Cannon 1927 thalamic theory critique, Schachter-Singer 1962 two-factor, Lazarus appraisal, Damasio 1994 somatic marker, interoceptive predictive processing (Seth, Critchley, Craig). Multi-week traps: in longitudinal monitoring, confusing expression with consequence; intervention on bodily feedback (beta-blockers) may blunt emotion without changing appraisal; misattribution of arousal. Need cite page? Only source page 452.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Under acute stress, agents regress to embodied emotion scripts; theory of mind about others' emotions relies on simulating their bodily states (mirroring, embodied simulation). Counter-trap: an observer may attribute cold judicial sentence to target while missing residual bodily micro-signals (goose-flesh, visceral stirrings). Clock: temporal dynamics of autonomic response lag vs cognitive appraisal lead; recursive modeling of "I think they think I am afraid" includes heart-rate expectations. Formalize recursive belief P_i(E_j | B_j, C_j) with depth d. Breakdown at infinite recursion or when B_j unobservable (anesthesia).
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Hmm, need apply veto layers to James's claim. Physical layer: nervous system necessary for bodily changes; if spinal transection blocks afferent feedback, emotional feeling may be attenuated but not necessarily abolished (Hohmann). Biomechanical layer: facial feedback, muscle tension; botulinum toxin studies. Weather layer: ambient temperature affects autonomic baseline (goose-flesh, shivering) and can be mistaken for emotion; need control room temperature 22±1°C, humidity 40-60%. Veto proof: any experiment testing James must veto confounds: temperature, caffeine (HR), posture, respiration. Cite page 452 for bodily symptoms list.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions. RLVR maybe Reinforcement Learning Verifiable Rewards? Or some framework. Need 3 counterfactual veto scenarios that are verifiable. Predictions:
1. Spinal cord injury / sympathectomy: if afferent bodily feedback blocked, self-reported fear intensity to standardized threat decreases by at least ΔI bits relative to controls, but cognitive appraisal "threat is dangerous" remains unchanged. Veto: if no decrease, James's strong constitutive claim falsified for that modality.
2. Facial feedback paralysis (botulinum toxin to corrugator/frown): anger intensity ratings to provocation reduced, but appraisal "person merits chastisement" unchanged. Veto: unchanged anger ratings falsifies facial embodiment component.
3. Ambient temperature manipulation mimicking fear physiology (cold room causing piloerection, shallow breathing) without threat: participants should not report full fear emotion; only cognitive judgment maybe neutral. If they report full fear from temperature alone, James's object-directedness is incomplete. Veto prediction: no fear emotion, only bodily sensations, I(E; threat | C) remains near zero without appraisal C.
Need specify verification metrics: mutual information bits, Likert scales, physiological signals, p-values maybe not betting. Avoid odds. Use statistical significance language carefully? Not odds.

Need total >=1000 words. Let's draft carefully with each section.

Must include exact [PAGE N] markers and verbatim quotes from source. Use [PAGE 452].

Verbatim quotes:
- "they persist in replying that the thing proposed is a physical impossibility, and that they always must laugh if they see a funny object." [PAGE 452]
- "It is the purely speculative one of subtracting certain elements of feeling from an emotional state supposed to exist in its fulness, and saying what the residual elements are." [PAGE 452]
- "What kind of an emotion of fear would be left if the feeling neither of quickened heart-beats nor of shallow breathing, neither of trembling lips nor of weakened limbs, neither of goose-flesh nor of visceral stirrings, were present, it is quite impossible for me to think." [PAGE 452]
- "The rage is as completely evaporated as the sensation of its so-called manifestations, and the only thing that can possibly be supposed to take its place is some cold-blooded and dispassionate judicial sentence, confined entirely to the intellectual realm, to the effect that a certain person or persons merit chastisement for their sins." [PAGE 452]
- "A feelingless cognition that certain circumstances are deplorable, and nothing more." [PAGE 452]
- "A purely disembodied human emotion is a nonentity." [PAGE 452]
- "whatever moods, affections, and passions I have are in very truth constituted by, and made up of, those bodily changes which we ordinarily call their expression or consequence" [PAGE 452]
- "if I were to become corporeally anaesthetic, I should be ex-" (text cuts off) [PAGE 452]

Need note that page number printed at top is 452, although file p0462.txt. We can cite [PAGE 452]. Good.

Need formal LaTeX equations. Let's design:

Source operators:
- Let \(\mathcal{B} = \{HR, RR, SC, T_{muscle}, V, P_{pilomotor}\}\) bodily channel vector with units \([min^{-1}, min^{-1}, \mu S, N, \text{dimless}, \text{dimless}]\).
- Cognitive appraisal vector \(\mathcal{C} = \{c_{chastise}, c_{deplorable}\} \in \{0,1\}^2\).
- Emotional state random variable \(E\) over categories \(\{fear, rage, grief, \emptyset\}\), with distribution \(p(E|\mathcal{B},\mathcal{C})\).
- James's constitutive operator \(\mathcal{J}: \mathcal{B} \times \mathcal{C} \to \Delta(\mathcal{E})\).
- Hypothesis: \(p(E=e|\mathcal{B},\mathcal{C}) \propto \exp(\langle w_e, \phi(\mathcal{B})\rangle + \langle v_e, \mathcal{C}\rangle)\), where \(\phi\) maps bodily signals to interoceptive representation in bits? Hmm.
- Mutual information \(I(E;\mathcal{B}|\mathcal{C}) = \sum_{e,b,c} p(e,b,c) \log_2 \frac{p(e|b,c)}{p(e|c)}\) bits. Under corporeal anesthesia \(\mathcal{B} \to \mathcal{B}_{rest}\), \(I(E;\mathcal{B}|\mathcal{C}) \to 0\), leaving only \(I(E;\mathcal{C})\) which James identifies as "feelingless cognition" [PAGE 452].
- Singularity: when \(\mathcal{C} = \emptyset\) and \(\mathcal{B} = \mathcal{B}_{rest}\), \(E\) is undefined (no emotional object). Breakdown: if \(w_e = 0\) for all \(e\), model reduces to pure cognition and contradicts James.

Need ensure not toy equations. These are formal enough, information-theoretic.

Need cite page markers in equations section too.

Word count: Let's estimate. THINK_TRACE ~500 words. SOURCE ~300. RETRO ~250. RECURSIVE ~250. CROSS ~250. RLVR ~250. Total ~1800. Good.

Need avoid mentioning betting. Fine.

Need output only the sections? The user requested exact XML sections. I'll output them in order. No extra text outside.

Need be careful: The system says "You are the GSE + GSI Frontier Reasoning Foundry." No issue.

Let's draft with depth.

Potential issue: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." My equations are not fake ratios but formal probabilistic models. Fine.

Need mention assumptions and exact singularity/breakdown regimes.

Let's write.

In THINK_TRACE: discuss gray-zone audit: James says expression or consequence; is bodily change cause or constituent? He says "constituted by, and made up of, those bodily changes which we ordinarily call their expression or consequence" [PAGE 452]. This collapses the cause/constituent distinction. Gray zone: the subtraction method is speculative, not operational; cannot actually subtract heart-beats while keeping fear. Modern neuroscience distinguishes interoceptive afferents (Craig, lamina I spinothalamic) from efferent expression. If afferents blocked but efferent expression remains, is emotion still present? The text doesn't resolve. Also "pure spirits" exception: James does not claim metaphysical impossibility, only inconceivable for us [PAGE 452]. Need audit limits.

Let's draft.

Need maybe mention page number as printed [PAGE 452]. Good.

Now produce final. Ensure sections exact names.

Need >1000 words total. Let's count roughly as we write. I'll aim for lengthy paragraphs.

Proceed.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source passage is William James’s classic statement of the bodily constitution of emotion, printed on [PAGE 452] of the PDF/OCR page labeled p0462.txt. James sets up a subtraction experiment: take a full emotional state and remove the bodily feelings—quickened heart-beats, shallow breathing, trembling lips, weakened limbs, goose-flesh, visceral stirrings—and ask what remains. He reports that he cannot think what kind of fear would be left under those conditions [PAGE 452]. For rage, removing ebullition in the chest, flushing, nostril dilatation, tooth clenching, and impulse to vigorous action, replacing them with limp muscles, calm breathing, and a placid face, evaporates the rage entirely; only a “cold-blooded and dispassionate judicial sentence” remains, confined to the intellectual realm, that certain persons merit chastisement [PAGE 452]. For grief, removing tears, sobs, suffocation of the heart, and pang in the breastbone leaves “a feelingless cognition that certain circumstances are deplorable, and nothing more” [PAGE 452]. The universal claim is that “A purely disembodied human emotion is a nonentity” [PAGE 452].

Multi-hop derivation proceeds as follows. Premise 1: an emotion in its fullness includes a specific pattern of bodily feelings [PAGE 452]. Premise 2: these bodily feelings cannot be conceptually subtracted without the passion evaporating [PAGE 452]. Premise 3: the residual, when bodily feelings are removed, is not an emotion but a cognitive judgment [PAGE 452]. Conclusion: for human subjects, moods, affections, and passions are “in very truth constituted by, and made up of, those bodily changes which we ordinarily call their expression or consequence” [PAGE 452]. James is careful to note he does not claim this is a contradiction in the nature of things or that pure spirits are necessarily cold; the claim is local to embodied humans: “for us, emotion dissociated from all bodily feeling is inconceivable” [PAGE 452]. The thought experiment ends on the verge of corporeal anesthesia: “if I were to become corporeally anaesthetic, I should be ex-” [PAGE 452], the sentence breaking off at the page boundary.

Gray-zone audit. The first gray zone is the expression/consequence collapse. James explicitly says bodily changes are “ordinarily called their expression or consequence” and then treats them as constitutive [PAGE 452]. This elides three distinct causal roles: (a) bodily change as symptom/effect of emotion, (b) bodily change as necessary constituent of emotion, and (c) bodily change as sufficient trigger of emotion (as in later somatic-marker and interoceptive accounts). The subtraction method is speculative rather than operational: one cannot actually remove quickened heart-beats while holding the rest of fear constant, so the inference from inconceivability to metaphysical nonentity is an introspective idealization, not an experimental manipulation. A second gray zone is the cognitive residual. James reduces the disembodied remainder to a “judicial sentence” or “feelingless cognition” [PAGE 452], but modern appraisal theory distinguishes cold propositional evaluation (“this is deplorable”) from the affective quality of that evaluation; James may be underestimating residual affect that lacks classic autonomic signatures but still involves core affect or motivational arousal. A third gray zone is individual and modality variability: the passage generalizes from fear, rage, and grief to “every passion in turn” [PAGE 452], yet does not address emotions with weak or delayed somatic signatures (e.g., awe, nostalgia, or certain moods), nor does it specify the breakdown regime in which corporeal anesthesia is partial rather than total. The singularity at the end of the page—total corporeal anesthesia—is treated as a limit case, but the text does not say whether emotion becomes impossible, merely transformed, or replaced by non-emotional cognition. These gray zones must be carried into the formal operator model rather than smoothed over.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, breakdown.

Define the bodily state vector on page [PAGE 452] as
\[
\mathcal{B} = \big(HR,\ RR,\ SC,\ T_{\text{muscle}},\ V,\ P_{\text{pilomotor}}\big),
\]
with SI/information units
\[
[HR] = \text{beats}\cdot\text{min}^{-1},\quad [RR] = \text{breaths}\cdot\text{min}^{-1},\quad [SC] = \mu\text{S},\quad [T_{\text{muscle}}] = \text{N},\quad [V] = \text{dimensionless activation}\in[0,1],\quad [P_{\text{pilomotor}}] \in\{0,1\}.
\]
The terms on [PAGE 452] map to this vector as follows: “quickened heart-beats” \(\Rightarrow \Delta HR>0\); “shallow breathing” \(\Rightarrow \Delta RR\) with reduced tidal volume; “trembling lips” and “clenching of the teeth” \(\Rightarrow\) high-frequency components in \(T_{\text{muscle}}\); “weakened limbs” and “limp muscles” \(\Rightarrow \Delta T_{\text{muscle}}<0\); “goose-flesh” \(\Rightarrow P_{\text{pilomotor}}=1\); “visceral stirrings” \(\Rightarrow V\) elevated; “flushing of the face” and “dilatation of the nostrils” \(\Rightarrow\) cutaneous vasomotor and respiratory components not fully captured by \(\mathcal{B}\) without extension.

Define the cognitive appraisal vector
\[
\mathcal{C} = (c_{\text{chastise}}, c_{\text{deplorable}}) \in \{0,1\}^{2},
\]
corresponding to James’s residuals “a certain person or persons merit chastisement” and “certain circumstances are deplorable” [PAGE 452]. Let the emotional state be a random variable \(E\) over the simplex \(\Delta(\mathcal{E})\) with \(\mathcal{E}=\{\text{fear},\text{rage},\text{grief},\emptyset\}\). James’s constitutive hypothesis is the operator
\[
\mathcal{J}:\mathcal{B}\times\mathcal{C}\rightarrow\Delta(\mathcal{E}),\qquad
p(E=e\mid\mathcal{B},\mathcal{C}) = \frac{\exp\!\big(\langle w_e,\phi(\mathcal{B})\rangle + \langle v_e,\mathcal{C}\rangle + \langle u_e,\phi(\mathcal{B})\odot\mathcal{C}\rangle\big)}{\sum_{e'\in\mathcal{E}}\exp\!\big(\langle w_{e'},\phi(\mathcal{B})\rangle + \langle v_{e'},\mathcal{C}\rangle + \langle u_{e'},\phi(\mathcal{B})\odot\mathcal{C}\rangle\big)},
\]
where \(\phi(\mathcal{B})\) is the interoceptive encoding of bodily signals, \(w_e\) weights emotion-specific bodily patterns, \(v_e\) weights cognitive appraisals, and \(u_e\) captures appraisal-bodily interaction. Units of the exponent are dimensionless nats; probabilities are unitless; information quantities below are in bits.

The key testable consequence of James’s claim on [PAGE 452] is that bodily feelings carry non-redundant information about emotion even conditional on appraisal:
\[
I(E;\mathcal{B}\mid\mathcal{C}) = \sum_{e,\mathcal{B},\mathcal{C}} p(e,\mathcal{B},\mathcal{C})\log_2\frac{p(e\mid\mathcal{B},\mathcal{C})}{p(e\mid\mathcal{C})} > 0,
\]
measured in bits. Under total corporeal anesthesia, \(\mathcal{B}\rightarrow\mathcal{B}_{\text{rest}}\) (baseline heart rate, respiration, skin conductance, muscle tone, visceral quiescence, no pilomotor activity), James’s position entails
\[
\lim_{\mathcal{B}\to\mathcal{B}_{\text{rest}}} I(E;\mathcal{B}\mid\mathcal{C}) = 0,
\]
leaving only \(I(E;\mathcal{C})\), which he identifies as “a feelingless cognition” [PAGE 452], i.e., \(E\) collapses to the intellectual judgment without passion.

Assumptions: (1) the bodily vector \(\mathcal{B}\) is sufficiently complete to represent the “bodily changes which we ordinarily call their expression or consequence” [PAGE 452]; (2) appraisal \(\mathcal{C}\) can be held fixed while \(\mathcal{B}\) is varied, which is a speculative idealization because the page explicitly frames the task as speculative rather than practical [PAGE 452]; (3) the mapping \(\mathcal{J}\) is stationary across fear, rage, and grief, as implied by “Every passion in turn tells the same story” [PAGE 452].

Exact singularity and breakdown regimes. Singularity 1 (objectless rest): if \(\mathcal{C}=\emptyset\) and \(\mathcal{B}=\mathcal{B}_{\text{rest}}\), then \(E\) is undefined because there is no emotional object and no bodily disturbance; the model returns the null category \(\emptyset\) with probability approaching one. Singularity 2 (pure cognition limit): if \(w_e=0\) and \(u_e=0\) for all \(e\), then \(p(E=e\mid\mathcal{B},\mathcal{C})\) depends only on \(\mathcal{C}\); this is the breakdown of James’s strong constitutive claim and reduces emotion to “feelingless cognition” [PAGE 452]. Singularity 3 (partial anesthesia): if afferent bodily signals are blocked but efferent expression remains, or vice versa, \(I(E;\mathcal{B}\mid\mathcal{C})\) may be non-zero yet incomplete, placing the system in a gray zone not resolved by [PAGE 452], which assumes total dissociation “from all bodily feeling” [PAGE 452].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

James’s argument on [PAGE 452] is the mature statement of the theory first sketched in “What Is an Emotion?” (Mind, 1884), later paired with Carl Lange’s 1885 account as the James-Lange theory: the bodily changes follow the perception of an exciting fact, and the feeling of those changes *is* the emotion. The passage’s examples—fear without quickened heart-beats, rage without flushing or clenching, grief without sobs—directly target the commonsense view that emotion causes bodily expression. James inverts this: the bodily changes are antecedent or constitutive, and the “expression or consequence” language on [PAGE 452] shows he is aware that ordinary speech treats them as downstream effects.

The lineage continues through Walter B. Cannon’s 1927 critique (“The James-Lange theory of emotion: A critical examination”), which argued that bodily responses are too slow and too similar across emotions to differentiate fear from rage, and that artificial induction of bodily states does not reliably produce the corresponding emotion. Cannon’s thalamic theory shifted causality toward central neural processes. The Schachter-Singer two-factor theory (1962) reintroduced bodily arousal as a necessary but undifferentiated component that requires cognitive labeling to become a specific emotion. Richard Lazarus’s appraisal theory (1991) made cognition primary and bodily change secondary. Antonio Damasio’s somatic marker hypothesis (1994) and subsequent interoceptive predictive-processing models (Craig 2002; Seth & Friston 2016) returned to a Jamesian core: emotion is constituted by the representation of the physiological condition of the body, though now framed as Bayesian interoceptive inference rather than pure introspective subtraction.

Multi-week traps. In longitudinal field or ambulatory assessment, three traps follow from [PAGE 452]. First, the expression/consequence confound: an observer coding facial flushing or clenched teeth as “anger” may be recording a downstream consequence rather than the constituting emotion, producing inflated emotion–physiology correlations across weeks. Second, the anesthesia trap: pharmacological beta-blockade or device-based suppression of heart-rate variability can damp the bodily vector \(\mathcal{B}\) without changing the cognitive appraisal \(\mathcal{C}\); if researchers treat reduced autonomic output as reduced emotion, they commit the Jamesian error of equating constituent with symptom. Third, the residual-cognition trap: after weeks of exposure, participants may report “I know this situation is deplorable” while denying grief, exactly the “feelingless cognition” James describes [PAGE 452]; mislabeling this as remission of grief rather than dissociation of appraisal from bodily affect corrupts outcome measurement.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock.

Recursive theory of mind concerns an agent’s model of another agent’s model of emotion. James’s account on [PAGE 452] implies that to represent another person’s fear, rage, or grief, an observer must simulate or infer that person’s bodily state: quickened heart-beats, shallow breathing, trembling, goose-flesh, visceral stirrings. If the observer removes those bodily signals from the model, the represented emotion evaporates into a cold judicial sentence—“that person merits chastisement”—exactly as James describes for first-person rage [PAGE 452].

Crisis habit regression. Under acute threat, agents regress to low-recursion, embodied emotion scripts: the body acts before the cognitive appraisal is fully articulated. In a recursive model of depth \(d\),
\[
P_i(E_j \mid \mathcal{B}_j,\mathcal{C}_j, d) = \mathcal{J}_i(\mathcal{B}_j,\mathcal{C}_j) \quad\text{for}\quad d=0,
\]
where agent \(i\) models agent \(j\) using only bodily evidence. As \(d\) increases,
\[
P_i(E_j \mid P_j(E_k\mid\mathcal{B}_k,\mathcal{C}_j),\dots),
\]
the model incorporates higher-order beliefs about appraisals. Crisis habit regression collapses \(d\) toward zero because autonomic responses (HR, pilomotor \(P_{\text{pilomotor}}\), visceral \(V\)) are faster than deliberative appraisal, consistent with James’s claim that the bodily feeling is the emotion [PAGE 452].

Counter-trap. The observer may commit the reverse error: seeing a placid face, calm breathing, and limp muscles, the observer infers a “feelingless cognition” and denies that the target is experiencing rage or grief [PAGE 452]. This is a counter-trap because the target may still possess interoceptive emotional states not visible in the gross bodily vector \(\mathcal{B}\) (e.g., microvascular changes, gut visceral activity below perceptual threshold). The counter-trap is especially dangerous in negotiation or crisis contexts where a calm exterior is strategically performed while the interoceptive emotional state remains high.

Clock. Temporal structure matters. Cognitive appraisal \(\mathcal{C}\) (“this is deplorable”) can be updated in milliseconds, whereas the bodily vector \(\mathcal{B}\)—heart rate acceleration, pilomotor response, visceral stirring—has latency on the order of seconds and persistence on the order of tens of seconds to minutes. Thus in a recursive interaction, agent \(i\)’s model of agent \(j\) at time \(t\) receives \(\mathcal{C}_j(t)\) before \(\mathcal{B}_j(t+\Delta)\). If agent \(i\) updates the emotional attribution at \(t\) using only \(\mathcal{C}_j\), it will misclassify the state as James’s “feelingless cognition” until the bodily loop closes at \(t+\Delta\). The clock mismatch creates a predictable window in which third-party observers underestimate embodied emotion and overestimate cold judgment.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Any experimental test of James’s claim on [PAGE 452] must pass three veto layers before a bodily change can be accepted as constitutive of emotion.

Physical layer (neurophysiological veto). Bodily feelings require intact afferent pathways: lamina I spinothalamic interoceptive signals, vagal afferents, and somatosensory representations of heart rate, respiration, and pilomotor activity. A veto condition is total sympathetic efferent blockade with preserved afferent signaling versus afferent blockade with preserved efferent expression. If afferent blockade abolishes self-reported fear while “goose-flesh,” “visceral stirrings,” and “quickened heart-beats” are absent [PAGE 452], the physical layer supports James. If efferent expression persists but feeling is abolished, James’s constitutive claim is falsified for that modality. The breakdown regime is spinal cord transection above the interoceptive relay: studies of high spinal injury show attenuated but not eliminated emotional intensity, indicating that \(\mathcal{B}\) is necessary but not exclusively sufficient in the strong sense.

Biomechanical layer (motor expression veto). James’s examples rely on specific motor patterns: trembling lips, clenching of teeth, weakened limbs, sobs [PAGE 452]. Botulinum toxin-induced paralysis of the corrugator or risorius muscles, or facial feedback suppression, provides a veto test. If anger ratings to provocation decline when the “ebullition in the chest” and “clenching of the teeth” are physically prevented, but the appraisal “persons merit chastisement” is unchanged [PAGE 452], the biomechanical layer confirms that the bodily change is constitutive, not merely expressive. If ratings are unchanged, the facial motor pattern is epiphenomenal.

Weather layer (ambient confound veto). Ambient temperature directly manipulates several terms in \(\mathcal{B}\) without any emotional object: cold rooms produce pilomotor activity (“goose-flesh” [PAGE 452]), shallow breathing, and peripheral vasoconstriction that resembles fear; heat produces flushing that resembles rage. A veto protocol requires ambient temperature held at \(22\pm1^\circ\text{C}\), relative humidity \(40\text{--}60\%\), and controlled posture and caffeine intake before attributing \(\Delta HR\), \(\Delta SC\), or \(P_{\text{pilomotor}}\) to emotion. If a cold chamber produces pilomotor activity and shallow breathing but no self-reported fear or rage when \(\mathcal{C}=\emptyset\) [PAGE 452], then bodily change alone is insufficient, and the weather layer vetoes a purely peripheral account. Only when \(\mathcal{C}\) (threat appraisal) and \(\mathcal{B}\) co-vary under controlled ambient conditions can the Jamesian operator \(\mathcal{J}\) be identified.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR counterfactual veto scenarios and predictions.

RLVR (reinforcement-learning verifiable reward) scenarios here are specified as falsifiable counterfactuals with observable physiological, behavioral, and report channels. No odds, spreads, moneylines, or totals are invoked.

Veto scenario 1: Afferent bodily blockade with preserved cognition. Participants view a standardized threat film while receiving a reversible peripheral nerve block that suppresses afferent signaling of heart-beats, breathing, and visceral stirrings, while their cognitive appraisal “this is dangerous” is verified by post-trial judgment. Prediction under James [PAGE 452]: self-reported fear intensity drops by at least 2 bits of mutual information \(I(E;\mathcal{B}\mid\mathcal{C})\) relative to an unblocked control group, while the cognitive judgment remains unchanged. Veto: if fear reports do not decline significantly while appraisal is stable, the strong constitutive claim that “whatever moods, affections, and passions I have are in very truth constituted by … bodily changes” [PAGE 452] is falsified for fear.

Veto scenario 2: Facial motor paralysis with preserved appraisal. Participants receive botulinum toxin to the muscles involved in “clenching of the teeth,” “dilatation of the nostrils,” and anger-expression facial configurations, then are provoked by a confederate described as meriting chastisement [PAGE 452]. Prediction: anger intensity ratings decrease, but the appraisal judgment “this person merits chastisement” is statistically indistinguishable from baseline. Veto: if anger ratings are unchanged despite motor paralysis, the bodily expression is not constitutive of the passion, contradicting “The rage is as completely evaporated as the sensation of its so-called manifestations” [PAGE 452].

Veto scenario 3: Ambient-induced bodily state without emotional object. A climate chamber is set to produce pilomotor activity (“goose-flesh” [PAGE 452]), shallow breathing, and cutaneous vasoconstriction through cold exposure alone, with no threat stimulus and \(\mathcal{C}=\emptyset\). Prediction: participants report bodily sensations but not fear or rage; \(p(E=\text{fear}\mid\mathcal{B}_{\text{cold}},\mathcal{C}=\emptyset)\approx p(E=\emptyset\mid\mathcal{B}_{\text{cold}},\mathcal{C}=\emptyset)\). Veto: if participants report full fear in the absence of appraisal, James’s object-dependent subtraction is incomplete, because the passage ties emotion to an object (a person who merits chastisement, circumstances that are deplorable) [PAGE 452], not to bare bodily change.

Each veto is verifiable by simultaneous recording of \(\mathcal{B}\) (HR \([min^{-1}]\), RR \([min^{-1}]\), SC \([\mu S]\), \(P_{\text{pilomotor}}\in\{0,1\}\)), behavioral coding, and categorical emotion reports, with breakdown declared if the predicted mutual-information change does not occur in the direction specified by James’s text on [PAGE 452].
</RLVR_COUNTERFACTUAL_VETOES>