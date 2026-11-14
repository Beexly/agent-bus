---
source: "p0496.txt"
folder: "/gpu-ocr-output/pages/James-1890-PrinciplesOfPsychology-Vol2"
pages: 1
model: nvidia_2:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3870
---

<NATIVE_REASONING>
The user wants me to analyze a source text from William James's "Principles of Psychology" Vol 2, page 486 (from the OCR output). They want me to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said PAGES: 1 and provided source text from page 486 (the text says 486 at bottom). I need to cite exact [PAGE N] markers. Since the source page is page 486, I should cite [PAGE 486]. The text is from Chapter XXVI (OCR says XXVL but it's likely XXVI) WILL.

I need to produce at least 1000 words total across these XML sections.

Let me plan:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need >=400 words. I need to analyze James's argument:
- Desire, wish, will are states of mind.
- If attainment seems impossible -> wish; if believed in power -> will.
- Only ends following immediately upon willing are movements of our own bodies.
- Other feelings/havings come as results of preliminary movements.
- Proposition: only direct outward effects of will are bodily movements.
- Mechanism of voluntary movements to be studied.
- Previous movements studied were automatic/reflex/unforeseen; now desired/intended beforehand.

Gray zones: The boundary between wish and will (belief in possibility), the immediacy of bodily movement vs. mediated external effects, the definition of "direct" outward effects, the role of preliminaries, the distinction between automatic/reflex and voluntary intended movement. Multi-hop: James -> ideomotor theory -> modern motor control -> forward models/efference copies -> sense of agency -> breakdown regimes (alien hand syndrome, utilization behavior, apraxia).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Need to formalize James's proposition. Let me define:
- Let \mathcal{W} be the set of willed states.
- Let \mathcal{B} be bodily movements.
- Let \mathcal{E} be external world states excluding body.
- James's thesis: \frac{\partial \mathcal{E}}{\partial t}\big|_{\text{will}} = 0 unless mediated by \mathcal{B}; i.e., direct causal influence of will on external states is zero: \delta \mathcal{E}/\delta \text{will} = 0 \text{ for } \mathcal{E} \notin \mathcal{B}.
- Use information theory: mutual information I(\text{will}; \text{external outcome}) \leq I(\text{will}; \text{bodily movement}) + I(\text{bodily movement}; \text{external outcome}) by data processing inequality.
- SI units: movement in meters (m), time in seconds (s), force in Newtons (N), etc.
- Breakdown regimes: when belief in power is false (wish vs will collapse), when bodily movement is paralyzed (will fails to produce movement), when external effects occur without movement (psychokinesis claims—James would reject; breakdown of his thesis).
- Citations: [PAGE 486] for quotes.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- James 1890, Principles of Psychology, Vol 2, Ch XXVI.
- Lineage: Scottish common sense philosophy? Voluntarism? Schopenhauer (World as Will and Representation, 1818/1844), but James is more empirical. Earlier: Descartes (mind-body dualism, pineal gland), voluntarism. Later: ideomotor action (William Carpenter 1852, James's teacher?), James-Lange theory? Actually ideomotor principle: idea of movement tends to produce it. Modern: ideomotor theory (Greenwald, 1970; Hommel, Müsseler, Aschersleben, Prinz 2001 Theory of Event Coding), forward models (Wolpert, Kawato), sense of agency (Haggard). Multi-week traps: in habit formation/behavioral interventions, the gap between willing and doing often spans weeks; people mistake immediate bodily movement possibility for long-term outcome control. The "trap" is assuming will acts directly on distal outcomes (e.g., "I will to lose weight") rather than on proximal bodily movements (eat less, move more). Multi-week because distal outcomes lag.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under stress, agents regress from intentional willed movement to automatic/reflex habits (the earlier movements James studied). This is a recursive loop: will -> intention -> crisis -> automaticity -> erosion of voluntary control.
- Counter-trap: using the knowledge that only bodily movements are direct to design implementation intentions (Gollwitzer) that specify bodily movements, not distal outcomes. "If situation X, then movement Y."
- Clock: temporal structure. Immediate bodily movement vs delayed external effect. The "clock" of volition operates on milliseconds for movement initiation (Libet-style readiness potential, though James predates it), but outcomes unfold over days/weeks. Mismatch causes akrasia.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical veto: paralysis, fatigue, musculoskeletal injury prevents movement despite will.
- Biomechanical: degrees of freedom, motor redundancy, Fitts's law (movement time = a + b log2(2D/W)), speed-accuracy tradeoff.
- Weather: environmental constraints (wind, rain, temperature) alter the mapping from movement to external effect; e.g., willing to throw a ball far but wind resistance changes outcome. James's "preliminary movements" assume an environment; weather vetoes break the assumed channel.
- Proof that veto is absolute: if movement cannot occur, external effect via that channel is null (P(E|do(will), no movement) = P(E|no will) by causal graph backdoor/frontdoor? Actually need to be careful: there could be other causes, but will's direct effect is blocked.)

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios. Need 3 scenarios, each verifiable, with predictions.
1. Spinal cord injury / paralysis: subject wills arm movement, no movement occurs, no external object movement results. Prediction: electromyography (EMG) silent, motion capture null, distal object unaffected despite intact verbal report of will.
2. Utilization behavior / alien hand: movement occurs without prior will/intention (automatic), demonstrating dissociation. Prediction: movement occurs without subjective report of willing; external effect happens but subject denies will.
3. Environmental veto (weather/physical barrier): subject wills to throw object through window; glass barrier or wind prevents effect. Prediction: bodily movement occurs (arm throws), but external outcome nullified by intermediate physical layer; will->movement intact, movement->outcome blocked.

Need word count >= 1000 across sections. Let's aim for:
- THINK_TRACE: ~450 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~250 words
- RETROCAUSAL_GENEALOGY: ~200 words
- RECURSIVE_THEORY_OF_MIND: ~200 words
- CROSS_LAYER_VETO_ADJUDICATION: ~150 words
- RLVR_COUNTERFACTUAL_VETOES: ~150 words
Total ~1400. Good.

Must include verbatim quotes with [PAGE 486].
Quotes from text:
- "If with the desire there goes a sense that attainment is not possible, we simply wish ; but if we believe that the end is in our power, we will that the desired feeling, having, or doing shall be real; and real it presently becomes..." [PAGE 486]
- "The only ends which follow immediately upon our willing seem to be movements of our own bodies." [PAGE 486]
- "so that we may start with the proposition that the only direct outward effects of our will are bodily movements." [PAGE 486]
- "The movements we have studied hitherto have been automatic and reflex, and (on the first occasion of their performance, at any rate) unforeseen by the agent. The movements to the study of which we now address ourselves, being desired and intended beforehand, are of course done" [PAGE 486]

Need to be careful: "The only ends which follow immediately upon our willing seem to be movements of our own bodies." Yes.

LaTeX equations:
1. Data processing inequality: I(W; E) ≤ I(W; M) where W = will/intention, M = movement, E = external effect.
2. Causal condition: P(E | do(W=w), M=m) = P(E | M=m) for E ∉ body, meaning will screens off external effect given movement (James's direct effect null).
3. Breakdown condition: If M = ∅ (no movement due to paralysis), then P(E | do(W=w), M=∅) = P(E | no intervention), so will cannot produce E directly.
4. Temporal discounting / clock: Outcome value V(t) = V0 e^{-kt}, movement at t0, effect at t1 > t0.

SI units: M in m (displacement), m/s (velocity), N (force), s (time). Information in bits. Probability dimensionless.

I must not mention betting lines. No spreads, totals, moneylines, odds. Avoid all gambling terminology.

Let's write.

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

I need to ensure total >= 1000 words. I'll write generously.

Let's draft content mentally.

THINK_TRACE: Start with James's textual analysis. Multi-hop:
Hop 1: Textual exegesis. Wish vs Will distinction depends on belief in possibility (epistemic/modal state). Quote.
Hop 2: The "only direct outward effects" claim. This is a strong modularity thesis: volition's causal graph has a single output node: the motor system.
Hop 3: Automatic/reflex vs intended. Prior chapter studied reflex; now voluntary. The contrast sets up a two-layer motor hierarchy.
Hop 4: Gray zones. (a) "Immediately" is vague—what about speech? Speech is bodily movement. (b) "Belief that the end is in our power"—false belief leads to willing failure (akrasia, paralysis). (c) Preliminaries—what counts as preliminary? (d) Social/institutional effects (willing a law to pass) are mediated by many bodies, not direct.
Hop 5: Modern formalization. Ideomotor theory: anticipatory representation of movement's sensory consequences triggers movement. Forward models predict sensory outcomes. Breakdown: alien hand, utilization behavior, apraxia, locked-in syndrome.
Word count target >400.

SOURCE_OPERATORS_AND_EQUATIONS:
Define variables:
- W_t ∈ {0,1}: binary will/intention at time t.
- M_t ∈ R^3: bodily movement vector (position in meters), velocity v = dM/dt (m/s), force F = m·a (N).
- E_t ∈ R^n: external environmental state vector excluding organism's body.
- t in seconds (s).
- Information in bits.

James's core axiom (from [PAGE 486]):
\frac{\delta E_t}{\delta W_{t-\Delta}} \bigg|_{\text{direct}} = 0 \quad \text{for } E_t \notin \{M\}
i.e., no direct functional dependence of external states on will except through M.

Equivalently, by the data processing inequality (Cover & Thomas):
I(W; E) \le I(W; M) + I(M; E \mid W) ... Actually DPI says if W -> M -> E forms a Markov chain, then I(W; E) ≤ I(W; M). James's claim implies W -> M -> E is the only path, so I(W; E | M) = 0 (conditional independence). Formal:
P(E_t | do(W=w), M=m) = P(E_t | M=m) \quad \forall E_t \notin \text{Body}.

Breakdown regimes:
- Motor execution failure: M = 0 despite W=1 (paralysis). Then E unaffected by W through this channel.
- Epistemic failure: agent believes end is possible when it is not (false power belief). W occurs but M cannot produce E.
- Temporal singularity: "immediately" breaks when effect latency exceeds agent's temporal binding window (~ seconds), causing sense-of-agency attenuation.

Citations [PAGE 486].

RETROCAUSAL_GENEALOGY:
James 1890, Chapter XXVI, Vol 2. Lineage:
- Descartes: mind moves body via pineal gland (dualist interaction problem).
- Schopenhauer: Will as metaphysical force, but James naturalizes it to bodily movement.
- Carpenter (1852) ideomotor reflex: idea of movement tends to excite it. James draws on this.
- Modern: Prinz et al. Theory of Event Coding (2001); Wolpert forward models.
Multi-week traps: The gap between willing (immediate movement) and distal outcomes (weeks later). In habit/behavior change, agents mistakenly treat distal outcomes as directly willed. When weeks pass without effect, they conclude "will failed" when actually the movement->outcome channel was weak or delayed. This is the "distal outcome trap."

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: Under acute stress, prefrontal/intentional control degrades; agent reverts to automatic/reflex movements studied in prior chapters (James's earlier movements). Recursive loop: Will -> intention -> stress/crisis -> automaticity -> will is bypassed.
Counter-trap: Implementation intentions specify concrete bodily movements ("if cue, then movement M") rather than distal outcomes. This respects James's single-output channel.
Clock: Movement initiation latency ~100-300 ms; external effects may occur at t+days/weeks. The agent's subjective clock binds W and M tightly but fails to bind W and distal E, causing temporal discounting and akrasia.

CROSS_LAYER_VETO_ADJUDICATION:
Three veto layers:
1. Physical: lesion, paralysis, fatigue. If motor neurons cannot fire, M=∅. Veto is absolute for that channel.
2. Biomechanical: Fitts's law MT = a + b·log2(2D/W). Even with will, movement speed/accuracy constrained by physics. Veto if required movement exceeds biomechanical envelope.
3. Weather/environment: wind, rain, temperature, barriers alter E given M. Example: willing a projectile to a target; crosswind vetoes outcome despite perfect movement.
Adjudication: If any layer returns null, the joint probability P(E | do(W)) collapses to baseline P(E), proving will has no bypass channel.

RLVR_COUNTERFACTUAL_VETOES:
Scenario 1: Complete spinal cord transection at C5. Subject wills right arm flexion. Prediction: EMG silence; motion capture null; no external object displacement; verbal report of will intact but causally inert. Verifiable via EEG/EMG/fMRI.
Scenario 2: Utilization behavior (frontal lesion). Subject sees a comb and uses it without intending to groom. Prediction: movement occurs and external effect (hair contact) happens, but subject denies prior W; demonstrates W is not necessary for M->E chain when automaticity captures motor channel. Verifiable via video + subjective report.
Scenario 3: Environmental barrier. Subject wills to throw a ball through an open window; unknown to subject, glass pane installed. Prediction: arm movement M is normal (velocity, trajectory), but E (ball entering room) is null; proves M->E layer can veto independently of W->M layer. Verifiable via high-speed camera and barrier sensor.

Now ensure no betting lines. I won't mention any gambling terms.

Check word counts. I'll write substantial paragraphs.

Also need exact [PAGE 486] markers. I'll cite them after quotes.

Let's write final output.
</NATIVE_REASONING>

<THINK_TRACE>
The source text is the opening of Chapter XXVI, "WILL," from William James, The Principles of Psychology, Vol. 2, specifically page 486 as marked at the foot of the OCR page [PAGE 486]. James begins by distinguishing desire, wish, and will through the agent's epistemic assessment of attainability: "If with the desire there goes a sense that attainment is not possible, we simply wish ; but if we believe that the end is in our power, we will that the desired feeling, having, or doing shall be real; and real it presently becomes, either immediately upon the willing or after certain preliminaries have been fulfilled" [PAGE 486]. This is the first hop: volition is not a raw affective state but a belief-indexed action commitment. The modal operator "in our power" does the metaphysical work, yet James never defines power; he merely indexes it to successful bodily execution.

The second hop advances to James's central, starkly modular thesis: "The only ends which follow immediately upon our willing seem to be movements of our own bodies. Whatever feelings and havings we may will to get, come in as results of preliminary movements which we make for the purpose" [PAGE 486]. He then states the proposition that organizes the chapter: "so that we may start with the proposition that the only direct outward effects of our will are bodily movements" [PAGE 486]. This is a claim of causal occlusion: the will has a single certified output port, the motor system; every other putative effect (possession of an object, alteration of another's mind, change in weather) is mediated by an antecedent bodily movement. The gray zone lies in the adverb "immediately." Speech is a bodily movement, but its perlocutionary uptake in a listener is not immediate in any physiological sense. Writing a check moves the hand immediately; the transfer of funds occurs through institutional intermediaries. James does not resolve what counts as a "preliminary" versus a "constitutive" movement, leaving a breakdown regime where the boundary between movement and effect is conventionally drawn rather than physically given.

The third hop contrasts the two motor registries James juxtaposes at the bottom of the page: "The movements we have studied hitherto have been automatic and reflex, and (on the first occasion of their performance, at any rate) unforeseen by the agent. The movements to the study of which we now address ourselves, being desired and intended beforehand, are of course done" [PAGE 486]. Here the chapter sets up a recursive tension: prior chapters treated reflex arcs as unforeseen and automatic; this chapter treats voluntary movement as desired and intended beforehand. The gray-zone audit asks what happens when these registries collapse into one another—when an intended movement becomes automatic through overlearning (habit), or when an automatic movement is retrospectively narrated as intended (confabulation). Modern ideomotor theory and forward-model motor control formalize exactly this boundary: anticipatory representations of sensory consequences trigger movement, and breakdowns appear as alien-hand syndrome, utilization behavior, or apraxia, where the W→M channel is either hijacked or severed without the subject's epistemic access matching the physiology. James's page thus contains, in embryo, the entire problem of sense of agency and the causal closure of the motor channel [PAGE 486].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(W_t \in \{0,1\}\) denote the presence of an act of will at time \(t\), measured dimensionless. Let \(M_t \in \mathbb{R}^3\) denote the position vector of a bodily part in meters (m), with velocity \(v_t = dM_t/dt\) in m/s and force \(F_t = m a_t\) in newtons (N). Let \(E_t \in \mathbb{R}^n\) denote an external environmental state vector excluding the organism's body, with time \(t\) in seconds (s). Mutual information is measured in bits.

James's axiom from [PAGE 486]—"the only direct outward effects of our will are bodily movements"—is formalized as a null direct functional dependence:
\[
\left. \frac{\delta E_t}{\delta W_{t-\Delta}} \right|_{\text{direct}} = 0 \quad \text{for all } E_t \notin \{M\},
\]
which implies a Markov chain \(W \rightarrow M \rightarrow E\) such that, conditional on the movement, the will provides no additional information about the external effect:
\[
P(E_t \mid do(W=w),\ M=m) = P(E_t \mid M=m) \quad \forall E_t \notin \text{Body}.
\]
Equivalently, by the data-processing inequality:
\[
I(W; E) \leq I(W; M),
\]
where equality holds only if the movement is a sufficient statistic for the will's external influence. Information units are bits; probabilities are dimensionless.

Breakdown and singularity regimes:
1. Motor execution failure: \(W=1\) but \(M = \varnothing\) (paralysis, fatigue, motor-neuron blockade). Then \(P(E \mid do(W=1), M=\varnothing) = P(E \mid \text{no intervention})\), so the will cannot produce \(E\) through this channel.
2. Epistemic power failure: the agent believes the end is "in our power" when it is not [PAGE 486]; \(W\) is issued but no available \(M\) can map to \(E\). This is the wish/will boundary collapsing into false volition.
3. Temporal singularity: James's "immediately" breaks when the latency between \(W\) and \(E\) exceeds the agent's temporal binding window (order seconds), dissociating the sense of agency from the outcome [PAGE 486].

All citations refer to page 486 of the provided OCR source [PAGE 486].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage runs from Descartes's interactionist dualism—where the immaterial will allegedly moves the body via the pineal gland—through Schopenhauer's metaphysical "World as Will," which James naturalizes by relocating will from ontology to motor output. The immediate scientific precursor is the ideomotor principle associated with William Carpenter (1852): the mere idea of a movement tends to excite that movement. James's chapter adopts this principle while stripping it of vitalism: willing is not a force injected into matter but the antecedent of bodily movement [PAGE 486]. Descendants include Greenwald's ideomotor action theory (1970s), Hommel et al.'s Theory of Event Coding (2001), and Wolpert's forward-model framework, all of which treat anticipated sensory consequences as the selective trigger of motor commands.

The multi-week trap is structural. Because James locates the direct effect of will in immediate bodily movement [PAGE 486], agents routinely misattribute distal outcomes to direct volition. In behavioral change over weeks—exercise adherence, skill acquisition, therapeutic exposure—the willing occurs at \(t_0\) as a bodily intention, but the valued outcome \(E\) arrives at \(t_0 + \text{weeks}\). When the week-scale effect is absent or delayed, the subject experiences a failure of will, even though the proximal \(W \rightarrow M\) channel functioned normally. The trap is to treat \(E\) as if it were an immediate end of willing, violating James's own proposition and producing learned helplessness or compulsive re-willing without movement recalibration.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression operates as a recursive collapse of James's two movement registers. Under acute stress, the intentional, "desired and intended beforehand" mode [PAGE 486] is inhibited, and the agent regresses to the automatic and reflex movements studied in prior chapters—unforeseen by the agent and stimulus-driven. The recursion is: \(W \rightarrow \text{intention} \rightarrow \text{crisis} \rightarrow \text{automaticity} \rightarrow \text{bypass of } W\). The subject may retrospectively narrate the automatic action as willed, generating a false theory of mind about their own agency.

The counter-trap is to respect James's single-output channel by forming implementation intentions over bodily movements rather than distal outcomes: "If cue \(C\) arises, then execute movement \(M\)." This collapses the gap between will and execution and prevents the agent from willing an abstraction that the motor system cannot directly instantiate [PAGE 486].

The clock introduces a temporal asymmetry. Movement initiation latency is on the order of 100–300 ms; the subjective binding of \(W\) to \(M\) is tight. But external effects \(E\) often unfold over minutes, days, or weeks. Because the agent's phenomenal clock binds \(W\) and \(M\) but not \(W\) and distal \(E\), the will subjectively feels "immediate" while its ecological consequences are deferred, producing akrasia: the will is present, the movement is available, but the outcome clock has not yet ticked, so the agent abandons the movement prematurely [PAGE 486].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Three veto layers can independently nullify the \(W \rightarrow E\) chain even when \(W=1\) [PAGE 486]. (1) Physical veto: spinal cord lesion, peripheral neuropathy, or profound fatigue sets \(M=\varnothing\). The joint probability collapses to \(P(E \mid do(W=1)) = P(E)\), proving no bypass channel exists. (2) Biomechanical veto: even with intact motor execution, Fitts's law \(MT = a + b \log_2(2D/W)\) constrains speed and accuracy; if the required displacement \(D\) exceeds the biomechanical envelope or the tolerance \(W\) is too small, the movement fails to produce the intended effect. Units: movement time in seconds, distance in meters, target width in meters. (3) Weather/environmental veto: wind, precipitation, temperature, or physical barriers alter \(E\) conditional on \(M\). A subject may will a throw, execute the movement perfectly, and yet a crosswind or glass pane vetoes the external outcome.

Adjudication rule: if any layer returns null, the direct effect of will on \(E\) is zero because James's architecture admits no \(W \rightarrow E\) edge unmediated by \(M\) [PAGE 486]. The veto is absolute at the layer where it occurs; upstream integrity of \(W\) cannot rescue downstream failure.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Complete motor paralysis (spinal transection). Counterfactual: subject wills right-arm flexion (\(W=1\)) but cannot move. Verifiable prediction: surface EMG is silent, motion capture records null displacement, and no external object is displaced despite intact verbal report of willing. Prediction: \(P(E \mid do(W=1), M=\varnothing) = P(E \mid \text{baseline})\).

Scenario 2 — Utilization behavior (frontal-lobe automaticity). Counterfactual: subject sees a grooming tool and uses it without prior intention. Verifiable prediction: movement \(M\) occurs and produces external effect \(E\) (contact with hair), but the subject denies \(W\) at \(t-\Delta\). This dissociates \(M\) from \(W\), showing the motor channel can be captured by perception alone. Prediction: \(I(W; M \mid E) < I(W; M)\) under automaticity.

Scenario 3 — Environmental barrier veto. Counterfactual: subject wills to project a ball through an open window; an unseen pane blocks egress. Verifiable prediction: high-speed video confirms normal arm kinematics (\(M\) intact, velocity within expected range), but the ball does not enter the room (\(E = \text{null}\)). Prediction: \(W \rightarrow M\) holds, \(M \rightarrow E\) is vetoed by the intermediate physical layer, so \(P(E \mid do(W=1)) = P(E)\). All three are falsifiable with EMG, motion capture, and barrier sensors.
</RLVR_COUNTERFACTUAL_VETOES>