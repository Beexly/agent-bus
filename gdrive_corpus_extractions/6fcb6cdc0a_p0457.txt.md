---
source: "p0457.txt"
folder: "/gpu-ocr-output/pages/Tolman-1932-PurposiveBehaviorInAnimalsAndMen"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3734
---

<NATIVE_REASONING>
The user wants me to process a source text from Tolman's "Purposive Behavior in Animals and Men" (1932), page 457/426 (OCR text). I need to produce a response with specific XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
- >= 1,000-word depth across sections.

Source text analysis:
The text is from Tolman (1932), page 426 (OCR says 426 at top, but file name says p0457.txt). The text discusses:
- "This System qua System"
- Maps: only purposeful/causal maps are real maps; mysticism, idealism are "poems," "momentary attitudes, not expandable into complete maps"
- "Prediction and control are of the very essence of 'mappishness'"
- Section 10: "The Status of Raw Feels"
- Raw feels as "map-name" for side of mind which map theory ignores or reduces to impotency
- Scrap-Heap 1: Raw feels ignored; Lewis quote about ineffable differences not detectable through divergence in discrimination and relation
- Reference to Munsterberg: two sorts of maps possible - purposive and causal (Munsterberg Psychology, General and Applied, 1914)
- Tolman's opinion: complete purposive map is self-contradiction
- References: Sons 1929 Chapter IV, C.I. Lewis Mind and the World-Order

I need to treat this as a cognitive/behavioral theory source and build a rigorous reasoning trace around it, connecting to modern concepts (predictive processing, active inference, raw feels/qualia, behaviorism, purposivism vs causalism). I must avoid toy equations. Use formal LaTeX with proper units (bits, nats, seconds, meters, etc.) and state assumptions and breakdown regimes.

Since this is a single source text, I need to cite [PAGE 426] or [PAGE 457] based on what's visible. The OCR text header shows "426" at top. The file is p0457.txt. I'll cite as [PAGE 426] since that's the visible page number in the source text. Actually, the user says "SOURCE TEXT: 426" at top. I'll use [PAGE 426].

Let me structure the response carefully.

THINK_TRACE (>=400 words): Multi-hop derivation.
- Hop 1: Tolman's map theory. Mappishness = prediction and control. Maps must be expandable into complete maps. Mysticism/idealism are poems, not maps.
- Hop 2: Raw feels as scrap-heap category. The map theory reduces immediate reality to raw feels, which are epiphenomenal or ignored.
- Hop 3: Lewis's verificationist/behaviorist constraint: differences in immediate experience not detectable via divergence in discrimination/relation are ineffable, as good as non-existent for communication.
- Hop 4: Munsterberg's dual-map (purposive vs causal). Tolman rejects complete purposive map as self-contradiction.
- Hop 5: Synthesis: behaviorist purposive cognition requires behavioral discriminability; raw feels are theory-laden scrap; prediction/control require operationalizable variables.
- Gray-zone audit: Where does Tolman's behaviorism break down? At the hard problem of consciousness; at the boundary between first-person raw feels and third-person behavioral measures; at the assumption that all purposive maps must be behaviorally translatable. Singularity: when prediction and control fail to covary with felt states (e.g., locked-in, anesthesia awareness, blindsight).

SOURCE_OPERATORS_AND_EQUATIONS:
- Formalize map as a predictive coding/active inference generative model: p(o_{1:T} | a_{1:T}, m) where m is map/model.
- Mappishness functional: M[m] = E[log p(o_{t+1} | o_{1:t}, a_{1:t}, m)] + control term.
- Raw feels as epiphenomenal residual: r = o - \hat{o}|_m, but behaviorally inaccessible if no divergence in discrimination/relation.
- Information units: bits/nats for mutual information I(O;R|M)=0 under Lewis constraint.
- SI units: seconds for behavioral reaction times, meters for spatial navigation (rat maze), etc.
- Breakdown regimes: when I(O;R) > 0 but I(O;R|B) = 0 (behaviorally invisible qualia); when purposive map violates Markov causal closure.
- Cite [PAGE 426] with verbatim quotes: "Prediction and control are of the very essence of 'mappishness'", "raw feels" are our naturalistic "map-name", etc.

RETROCAUSAL_GENEALOGY:
- Lineage: Tolman (1932) purposive behaviorism -> cognitive maps -> O'Keefe & Nadel (1978) place cells -> Moser grid cells -> modern predictive processing (Friston active inference).
- Behaviorism (Watson 1913) -> Tolman's molar purposivism -> Hullian drive reduction -> modern reinforcement learning.
- Munsterberg (1914) purposive vs causal maps -> dual-process theory -> System 1/System 2.
- C.I. Lewis (1929) Mind and the World-Order -> conceptual pragmatism -> verificationism -> operationalism.
- Multi-week traps: in animal behavior experiments, extinction curves, spontaneous recovery, latent learning; Tolman's latent learning experiments showed learning without reinforcement, challenging pure behaviorism. Trap: assuming raw feels don't matter because they don't alter behavior in the short term, but they may modulate long-term exploration-exploitation tradeoffs (multi-week).

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under stress, organisms revert to habitual (model-free) behavior rather than deliberative (model-based) map-based control. Tolman's rats in maze: when usual path blocked, they use cognitive map (purposive), but under crisis may regress to habit.
- Counter-trap: the observer (scientist) also regresses to behaviorist habit, denying raw feels; this is a second-order recursive trap.
- Clock: timescale separation. Habit operates on fast timescale (seconds); map-based deliberation on slower timescale (minutes-hours); raw feels may integrate over weeks (mood, stress). Recursive ToM: animal models trainer's model of animal; trainer models animal's model of trainer.
- Formalize: two-timescale dynamical system with fast habit variable h(t) and slow map variable m(t); crisis triggers \dot{h} > \dot{m}.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: energy constraints on neural computation (Landauer limit, ATP per spike). If map requires more energy than available, veto.
- Biomechanical layer: musculoskeletal limits. A rat cannot execute a map path requiring jump beyond biomechanical capability.
- Weather/environmental layer: sensory degradation (fog, noise) reduces mutual information I(O;S) below threshold for map updates.
- Veto proof: define veto function V = 1 if any layer constraint violated; else 0. Show conjunction of necessary conditions.
- Example: Tolman's rat maze. Physical: maze walls; Biomechanical: running speed; Weather: not applicable in lab but analog is lighting/odor cues.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Anesthesia awareness / locked-in. Raw feels present but behaviorally undetectable. Lewis constraint says as good as non-existent, but phenomenologically real. Prediction: I(O;R|B)=0 yet R ≠ ∅. Veto: behavioral measures cannot rule out conscious states.
- Scenario 2: Blindsight. Subject reports no visual feel but discriminates behaviorally. Shows raw feels are not necessary for discrimination/relation. Prediction: I(O;V|B) > 0 but V (report) = 0.
- Scenario 3: Latent learning extinction. Tolman's rats learn maze without reward; map exists but behavior not expressed until reward introduced. Counterfactual: if raw feels were necessary for map, no learning without reinforcement; but learning occurs. Prediction: map m can be updated with p(o|a,m) even when reinforcement signal r=0.

Word count: Need >= 1000 words across sections. I'll aim for ~1300-1500 words total.

Let me draft carefully, ensuring no betting language. No spreads, totals, moneylines, odds. Avoid any gambling terminology entirely.

Use LaTeX equations properly. Use [PAGE 426] citations.

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

Need to ensure I don't mention anything about sports betting. The user said "DRIVE SOURCE" but the content is Tolman psychology. I should treat this purely as a reasoning task on the source text.

Let's write detailed content.

THINK_TRACE content (~350-450 words):
Start with close reading of the page. Identify Tolman's claim: mappishness requires prediction and control; mysticism/idealism are poems not maps. Then raw feels as scrap heap. Lewis quote. Munsterberg dual map. Tolman rejects complete purposive map. Multi-hop: from semantics of maps to epistemology of raw feels to behavioral operationalism to the self-contradiction of purposive maps. Gray zones: behaviorist verificationism excludes first-person ontology; breakdown when behavior and phenomenology dissociate. Mention [PAGE 426].

SOURCE_OPERATORS_AND_EQUATIONS:
Define map M as generative model. Formal equations with units.
Breakdown regimes listed.

RETROCAUSAL_GENEALOGY:
Historical lineage, multi-week traps (latent learning, extinction, spontaneous recovery).

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression, counter-trap, clock. Two-timescale equations maybe.

CROSS_LAYER_VETO_ADJUDICATION:
Physical, biomechanical, weather/environmental veto. Formal veto function.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios with predictions.

Make sure total words >= 1000. I'll write generously.

Check for any toy equations: I won't invent Force/Fatigue. I'll use real information theory and control theory equations with proper units (nats, bits, seconds, meters, Joules).

Check citations: [PAGE 426] and verbatim quotes from text.

Verbatim quotes to use:
- "Prediction and control are of the very essence of 'mappishness'"
- "The other maps, i.e., mysticism, idealism, etc., seem to us to be not maps but poems. They are momentary attitudes, not expandable into complete maps"
- "Raw feels" are our naturalistic "map-name" for a side of mind which our map theory ignores, or reduces to impotency
- "Aw, forget it"
- "a difference which no language or behavior could convey is, for purposes of communication, as good as non-existent"
- "anything like a complete purposive map ... is really a self-contradiction"

Cite [PAGE 426] after each.

Now write the final response.
</NATIVE_REASONING>

<THINK_TRACE>
The source page ([PAGE 426], Tolman 1932, *Purposive Behavior in Animals and Men*) presents a tightly coupled argument about the ontology of "maps," the epistemic status of "raw feels," and the boundary between purposive and causal explanation. The first hop is semantic: Tolman stipulates that only systems capable of prediction and control qualify as "mappish." Mysticism and idealism are demoted to "poems"—"momentary attitudes, not expandable into complete maps" ([PAGE 426]). This is a strong verificationist constraint: a map is not a metaphor; it must be an expandable, complete structure supporting anticipatory control. The second hop locates "raw feels" within this architecture. They are not denied outright, but are relegated to a "scrap-heap": a naturalistic map-name for whatever the map theory ignores or reduces to impotency ([PAGE 426]). Tolman then considers Scrap-Heap 1, in which raw feels are simply ignored as scientific will-o'-the-wisps, citing C. I. Lewis's retort that any difference in immediate experience undetectable through divergence in discrimination and relation is ineffable and "for purposes of communication, as good as non-existent" ([PAGE 426]). The third hop brings in Münsterberg's distinction between purposive and causal maps ([PAGE 426]), which Tolman rejects: a complete purposive map, in Münsterberg's sense, is "really a self-contradiction" ([PAGE 426]).

Multi-hop synthesis: Tolman is constructing a behaviorally anchored epistemology in which the only admissible maps are those whose variables are operationally translatable into discrimination, relation, prediction, and control. Raw feels survive only as a residual category—epiphenomenal scraps—unless they covary with measurable behavioral divergence. The gray zone emerges precisely where this covariation fails. If an organism exhibits a change in immediate experience without any corresponding divergence in discrimination, relation, language, or behavior, Tolman's framework has no constitutive place for it. The breakdown regime is therefore dissociation: states in which phenomenology and behavior are decoupled (e.g., anesthesia awareness, locked-in syndromes, blindsight, or latent learning in which a map is constructed but not yet expressed in performance). A second gray zone concerns the self-contradiction of the "complete purposive map." If purposive maps necessarily invoke teleological primitives that cannot be reduced to causal-mechanical chains without regress, then the behaviorist program either (a) eliminates purposivity entirely, or (b) admits an irreducible explanatory gap. Tolman chooses (a) in principle while retaining purposive language as a heuristic, creating an internal tension between the eliminative scrap-heap treatment of raw feels and the irreducibly purposive vocabulary of rat navigation in maze experiments.

Audit of assumptions: (1) behavioral discriminability is necessary and sufficient for scientific reality; (2) prediction and control are co-extensive with mappishness; (3) purposive and causal maps cannot be fully unified without contradiction. Each assumption is fragile under modern predictive-processing and active-inference formalisms, where generative models can represent counterfactual sensory consequences without immediate motor expression, and where "raw feels" may be formalized as precision-weighted prediction-error residuals rather than behavioral scraps. The source thus anticipates, but does not resolve, the hard problem of the explanatory gap between first-person states and third-person behavioral maps.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let a cognitive map be formalized as a generative model \(m\) over observation sequences \(o_{1:T}\) conditioned on action sequences \(a_{1:T}\):

\[
p_m(o_{1:T} \mid a_{1:T}) = \prod_{t=1}^{T} p_m(o_t \mid o_{1:t-1}, a_{1:t}, m)
\]

Units: probabilities are dimensionless; information is measured in nats (natural log) or bits (base-2 log). Time \(t\) is measured in seconds [s]; spatial maze coordinates in meters [m].

Tolman's mappishness criterion ([PAGE 426]) defines a map-quality functional:

\[
\mathcal{M}[m] = \mathbb{E}_{p_m}\!\left[ \sum_{t=1}^{T} \log p_m(o_{t+1} \mid o_{1:t}, a_{1:t}, m) \right] + \lambda \, \mathcal{C}[m]
\]

where \(\mathcal{C}[m]\) is a control term quantifying the ability to steer \(o_{t+1}\) into a target region via \(a_t\), and \(\lambda\) trades off prediction against control. A "poem" (mysticism, idealism) has \(\mathcal{M}[m] \to -\infty\) because it is not expandable into complete predictive-control structure ([PAGE 426]).

Raw feels \(r\) enter as a residual:

\[
r_t = o_t - \hat{o}_t|_m, \qquad \hat{o}_t|_m = \mathbb{E}_{p_m}[o_t \mid o_{1:t-1}, a_{1:t}]
\]

Lewis's constraint ([PAGE 426]) imposes:

\[
I(O; R \mid B, M) = 0 \quad \text{whenever} \quad \nexists \text{ divergence in discrimination, relation, language, or behavior}
\]

where \(I(\cdot;\cdot \mid \cdot)\) is conditional mutual information in bits, \(O\) is observation, \(R\) is raw-feel state, \(B\) is behavioral output, and \(M\) is the map. If \(I(O;R \mid B,M) = 0\), raw feels are behaviorally invisible and, per Tolman-Lewis verificationism, "as good as non-existent" for communication ([PAGE 426]).

Münsterberg's dual-map distinction ([PAGE 426]) yields two operator classes: causal \(K\) and purposive \(P\). Tolman's rejection ([PAGE 426]) implies:

\[
\nexists m : P(m) \text{ is complete} \land K(m) \text{ is causally closed} \land P(m) \equiv K(m)
\]

Breakdown/singularity regimes:
1. **Behavioral-phenomenological dissociation**: \(I(O;R) > 0\) but \(I(O;R \mid B) = 0\). Raw feels exist phenomenologically but violate the Lewis-Tolman operational constraint.
2. **Purposive-causal non-commutativity**: \([P, K] \neq 0\) when teleological goal states cannot be reduced to mechanical transition kernels without infinite regress.
3. **Latent-learning expression gap**: map \(m\) is updated (\(p_m\) changes) while reinforcement signal \(R_{\text{rew}} = 0\) and behavioral policy \(\pi(a \mid o)\) remains unchanged, decoupling model acquisition from performance ([PAGE 426] context: purposive maps without immediate behavioral manifestation).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage on [PAGE 426] runs from Tolman (1932) backward to Münsterberg (1914) and C. I. Lewis (1929), and forward to modern cognitive neuroscience. Münsterberg's *Psychology, General and Applied* (New York: D. Appleton and Company, 1914) posited two sorts of maps—purposive and causal ([PAGE 426]). Tolman inherits this dualism but collapses it: a complete purposive map is self-contradictory ([PAGE 426]), a move that aligns him with the behaviorist wave initiated by Watson (1913) while preserving a molar, purposive vocabulary distinct from Hullian molecular drive reduction. C. I. Lewis's *Mind and the World-Order* (New York: Charles Scribner's Sons, 1929; cited on [PAGE 426]) supplies the verificationist premise: undetectable experiential differences are ineffable and communicationally null. This is conceptual pragmatism radicalized into operationalism.

Forward lineage: Tolman's latent-learning rats demonstrated that a cognitive map can be built without reinforcement, a result that broke the strict stimulus-response behaviorism of his era and prefigured O'Keefe and Nadel's (1978) cognitive-map theory, the discovery of place cells, and Moser's grid cells. In the predictive-processing era, Tolman's map \(m\) maps onto a generative model in active inference (Friston et al.), where prediction and control are unified through the minimization of expected free energy. His scrap-heap treatment of raw feels anticipates modern debates over whether qualia are epiphenomenal residuals or precision-weighted prediction errors.

Multi-week traps: Tolman's experimental logic implies timescale separation. Map acquisition in latent learning can occur over days-to-weeks without behavioral expression; the map exists but is not performed until incentive is introduced ([PAGE 426] implication). A multi-week trap in modern experimental design is to infer the absence of a cognitive map from the absence of behavior within a short observation window. Extinction curves and spontaneous recovery likewise show that a suppressed map can re-emerge weeks later, violating any assumption that behavior at time \(t\) fully reveals the state of \(m\) at time \(t\). Another trap is the regression to habit under stress: when the usual maze path is blocked, rats may initially regress to habitual motor sequences before re-engaging the map-based detour, meaning short-term behavioral measures conflate habit and map use.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression operates as a first-order recursive trap in Tolman's framework. Under pressure—blocked path, predator, time constraint—the organism's behavioral control shifts from slow, map-based deliberation \(m(t)\) to fast, stimulus-response habit \(h(t)\). The recursive structure arises because the observer-scientist, committed to Tolman's behaviorist map theory on [PAGE 426], is tempted to regress to a second-order habit: denying the reality of raw feels whenever they fail to produce immediate behavioral divergence. This is the counter-trap: the theorist's own "map" of the animal becomes a poem—a momentary attitude not expandable into complete prediction and control—because it excludes first-person states that may govern long-term exploration-exploitation tradeoffs.

Formalize the two-timescale dynamical system:

\[
\dot{m} = \alpha_m \, \nabla_m \mathcal{F}[m, o, a], \qquad \dot{h} = \alpha_h \, \delta_{\text{rew}} \, e_h
\]

with \(\alpha_m \ll \alpha_h\) (map updates slow, habit updates fast), \(\mathcal{F}\) free energy, and \(\delta_{\text{rew}}\) reward prediction error. During crisis, a gating variable \(g \in [0,1]\) shifts control:

\[
a_t = g \, \pi_m(a \mid o, m) + (1-g) \, \pi_h(a \mid o, h), \qquad \dot{g} = -\kappa \, \text{stress}(t)
\]

As stress increases, \(g \to 0\) and habit dominates. The clock of the system is set by \(\tau_m = 1/\alpha_m\) (minutes to weeks for map consolidation) versus \(\tau_h = 1/\alpha_h\) (seconds to minutes for habit expression). Raw feels, if they modulate \(\alpha_m\) or \(\kappa\) over weeks (e.g., chronic stress altering map plasticity), operate on a third, slower clock \(\tau_r \gg \tau_m\). Recursive theory of mind enters when the animal models the trainer's model of the animal: the rat's map \(m_{\text{rat}}\) includes a term for the experimenter's expected contingencies, and the experimenter's map \(m_{\text{exp}}\) includes a term for the rat's supposed map. If both parties exclude raw feels from their maps per [PAGE 426], they enter a mutual scrap-heap regression: each treats the other's inner states as ineffable poems, and the coupling term \(I(m_{\text{rat}}; m_{\text{exp}})\) collapses to behavioral observables only.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A map \(m\) is physically admissible only if it survives veto at three layers. Define the veto operator:

\[
V[m] = V_{\text{phys}} \land V_{\text{bio}} \land V_{\text{env}}, \qquad V_i \in \{0,1\}
\]

If \(V[m] = 0\), the map is inadmissible regardless of its predictive elegance.

**Physical layer.** Neural computation of the map obeys Landauer's bound: erasing one bit of map-state costs at least \(k_B T \ln 2\) joules [J], where \(k_B = 1.380649 \times 10^{-23} \, \text{J/K}\) and \(T\) is tissue temperature [K]. If the map's required information update \(\Delta I[m]\) per second exceeds the available metabolic power \(P_{\text{brain}}\) [W]:

\[
V_{\text{phys}} = \begin{cases} 1 & \text{if } \Delta I[m] \, k_B T \ln 2 \leq P_{\text{brain}} \\ 0 & \text{otherwise} \end{cases}
\]

For a rat navigating a maze ([PAGE 426] context), a high-resolution map requiring gigabit-per-second updates would veto itself on energetic grounds.

**Biomechanical layer.** The map specifies a trajectory \(x(t) \in \mathbb{R}^3\). Executability requires that the commanded velocity \(\dot{x}\) and acceleration \(\ddot{x}\) remain within musculoskeletal bounds:

\[
V_{\text{bio}} = \begin{cases} 1 & \text{if } \|\dot{x}(t)\| \leq v_{\max} \land \|\ddot{x}(t)\| \leq a_{\max} \quad \forall t \\ 0 & \text{otherwise} \end{cases}
\]

with \(v_{\max}, a_{\max}\) in [m/s] and [m/s²]. A Tolman-style rat map proposing a jump across a gap wider than the rat's maximal leap distance is vetoed biomechanically, even if predictively coherent.

**Weather/environmental layer.** In natural (non-lab) extensions of Tolman's paradigm, sensory observations \(o\) are degraded by environmental noise. Let \(S\) be the true state and \(O\) the sensed observation. The map update requires mutual information \(I(S; O)\) above a threshold \(\theta\):

\[
V_{\text{env}} = \begin{cases} 1 & \text{if } I(S; O \mid \text{weather}) \geq \theta \\ 0 & \text{if } I(S; O \mid \text{weather}) < \theta \end{cases}
\]

Fog, rain, wind-generated auditory masking, or odor turbulence reduce \(I(S; O)\) below \(\theta\), vetoing map-dependent navigation. In Tolman's laboratory setting ([PAGE 426]), the analog is controlled lighting and olfactory cue integrity; if cues are removed, the purposive map cannot be corrected.

Veto proof: Because \(V[m]\) is a conjunction, a single layer failure falsifies behavioral executability. Prediction and control ([PAGE 426]) are necessary but not sufficient; physical power, biomechanical limits, and environmental information flow constitute independent hard constraints that no amount of mappishness can override.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Scenario 1: Anesthesia awareness / locked-in state.**
Counterfactual: A subject exhibits raw feels \(R \neq \emptyset\) but produces zero behavioral divergence \(B = \varnothing\) (no language, no discrimination report, no motor output).
Veto: Per Tolman-Lewis on [PAGE 426], "a difference which no language or behavior could convey is, for purposes of communication, as good as non-existent." Formal veto: \(I(O; R \mid B) = 0 \Rightarrow R\) is excluded from the map.
RLVR prediction: If a future neural interface decodes \(R\) directly from cortex while \(B\) remains null, the Tolman-Lewis veto is falsified; \(I(O; R) > 0\) despite \(I(O; R \mid B) = 0\). The map must be extended to include a phenomenological channel orthogonal to behavior.

**Scenario 2: Blindsight.**
Counterfactual: A patient with cortical blindness reports no visual raw feel (\(V = \emptyset\)) yet discriminates visual stimuli above chance (\(I(O; B \mid V) > 0\)).
Veto: Tolman's scrap-heap logic places visual awareness in the scrap heap when behavior does not report it; however, behavior here succeeds without the feel.
RLVR prediction: Dissociation confirms raw feels are not necessary for discrimination or relation. The map \(m\) can support prediction and control (\(M[m] > 0\)) while the visual-quale variable is pruned. Prediction: patients will navigate obstacles guided by \(m\) while denying visual experience, demonstrating that "mappishness" does not require conscious maps.

**Scenario 3: Latent learning without reinforcement.**
Counterfactual: Tolman's rats explore a maze for days with no reward (\(R_{\text{rew}} = 0\)), then a reward is introduced and they immediately run the optimal path.
Veto: A pure behaviorist map requiring reinforcement for every update vetoes map acquisition during the non-rewarded phase. Formal veto: \(\Delta p_m = 0\) when \(\delta_{\text{rew}} = 0\).
RLVR prediction: Latent learning falsifies the veto; \(\Delta p_m \neq 0\) despite \(\delta_{\text{rew}} = 0\). The map updates via prediction error on sensory transitions alone, not reward. This establishes that purposive maps can be constructed offline and expressed behaviorally only when incentive alters the control gate \(g\) in the recursive model above. Prediction: neural replay during rest will correlate with subsequent path optimality, decoupling map consolidation from immediate behavior.
</RLVR_COUNTERFACTUAL_VETOES>