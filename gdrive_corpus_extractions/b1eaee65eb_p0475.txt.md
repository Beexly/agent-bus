---
source: "p0475.txt"
folder: "/gpu-ocr-output/pages/James-1890-PrinciplesOfPsychology-Vol2"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5129
---

<NATIVE_REASONING>
The user wants me to analyze a source text from James' Principles of Psychology Vol 2, page 465 (actually page 475 in the OCR output). I need to produce output with the specific XML sections and meet strict invariants:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

The source text is about emotions, acting, fatigue, visceral/organic expression, dissociation, facial mimicry, Prof. Sikorsky, James-Lange theory likely (peripheral feedback theory of emotion).

I need to be careful: no betting lines at all. No toy equations like Force/Fatigue. Must use formal LaTeX equations with proper units and assumptions.

Let me structure this.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to analyze the text deeply. Key points:
- Actors report emotional parts more fatiguing than physical/brain parts (Alma Murray, Howe, Forbes Robertson, Coleman).
- Othello leaves Coleman physically prostrate despite little physical exertion; Richard III no effect.
- Explanation: visceral/organic expression can be suppressed in some, not others; felt emotion depends on this.
- Coquelin and inwardly cold actors can dissociate completely.
- Sikorsky: facial mimicry produces no emotional excitement; artificial mimicry can be irreproachable expressively.
- Virtuosity in facial muscle control allows disregarding natural association, contracting isolatedly on either side.

This relates to James-Lange theory: emotion is the perception of bodily changes. If you suppress the organic/visceral response, you suppress felt emotion. The actors who can dissociate (like Coquelin) don't feel the emotion because they don't produce the bodily symptoms. Those who cannot (Coleman in Othello) get physically prostrated.

Gray zones: Is dissociation complete or partial? Can visceral responses be fully suppressed? The text says "in some men, but not in others." There's individual variation. The mirror practice develops virtuosity. But does suppressing facial expression eliminate all visceral response? James would say emotion is the bodily change itself; if you suppress the expression, you might dampen but not eliminate the emotion because the viscera still respond. However, the text suggests chief part of felt emotion depends on the visceral/organic part.

I should discuss the afferent feedback loop: stimulus -> bodily response -> perception of response = emotion. Facial feedback hypothesis. Breakdown when efferent control overrides afferent feedback (voluntary facial muscles decoupled from autonomic visceral response). Singularity: complete dissociation would require autonomic suppression, which is not under voluntary control; hence residual visceral arousal persists, creating the "lump in throat," perspiration, fatigue.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. I need to define operators:
- Let E(t) be felt emotional intensity (dimensionless, normalized [0,1] or in arbitrary units of felt affect).
- Let V(t) be visceral/organic response vector (heart rate, perspiration, salivation, etc.) with SI units (bpm, W/m² for sweat? actually perspiration rate kg/m²/s, etc.)
- Let F(t) be facial efferent motor command (dimensionless activation [0,1] per muscle group).
- Let A(t) be afferent feedback signal from viscera to CNS (unitless normalized or in neural firing rates Hz).

James-Lange formalization: E(t) = g( ∫₀ᵀ h(τ) V(t-τ) dτ ) + ε, where g is perceptual transduction, h is causal kernel. Units: V in physiological units, E in bits of affective information? Could use Shannon bits for felt emotion if we treat it as information. But must not invent fake ratios.

I can define an information-theoretic measure: I(E; V) mutual information between felt emotion and visceral state, in bits. Breakdown regime: when efferent facial control F decouples from V, I(E; V) → 0 if V is suppressed, but if autonomic V persists despite facial suppression, I(E; V) remains > 0 and E persists.

Also fatigue: F_phys from physical exertion vs F_emo from emotional expenditure. Forbes Robertson: fatigue ∝ emotion, not physical exertion. Could model fatigue accumulation dΦ/dt = α·‖V_emotional‖ + β·‖P_physical‖ where Φ is fatigue state (dimensionless or seconds of recovery), α >> β for emotional actors.

Citations: [PAGE 465] for the quotes. Actually the page number in the text is 465 at top, but OCR file is p0475.txt. The text says "465" at top. The footnote references p.894 and p.496. I should cite [PAGE 465] for the main text, and maybe [PAGE 496] for Sikorsky quote (footnote dagger). The user said cite exact [PAGE N] markers. The source text header says 465. Footnote says P. 894 and ↑ P. 496. So Sikorsky quote is from page 496? The dagger footnote likely refers to page 496. I'll cite accordingly.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: William James (1890) Principles of Psychology, emotion theory; James-Lange theory (Carl Lange 1884). Peripheralist theory of emotion.
- Sikorsky 1887 Neurologisches Centralblatt on facial expression of insane.
- Coquelin (French actor, "l'art de jouer" / recommended distance, "demonstrative" vs "emotional" acting).
- Edwin Forrest, Macready, Charles Kean, Phelps, Brooke, Dillon - 19th century actors.
- Multi-week traps: In theatrical runs, emotional parts accumulate fatigue over weeks (Othello nightly). The "part of parts" leaves actor prostrate; cumulative visceral cost not recovered between performances if autonomic arousal is nightly. This is a multi-week trap: repeated emotional expenditure without sufficient parasympathetic recovery leads to allostatic load, burnout, voice loss ("lump in throat," inarticulateness).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under stress, actors revert to habitual embodied emotion (cannot suppress visceral response), e.g., Coleman cannot stop Othello fatigue despite experience.
- Counter-trap: The belief that one can dissociate (like Coquelin) may itself be a trap—suppressing facial expression does not eliminate autonomic visceral response; the actor may think they are safe but still accumulate physiological fatigue.
- Clock: Circadian/performance timing; emotional fatigue accumulates over the run (weeks), perspiration during Joseph Surface (little exertion), dry mouth requiring continual moistening. The body keeps score independent of conscious intent.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical veto: Autonomic nervous system (sympathetic activation) is not under direct voluntary control. You can contract facial muscles voluntarily (Sikorsky), but you cannot voluntarily stop sweating, salivation changes, heart rate, or adrenocortical response. Thus any claim that emotional fatigue is purely "mental" or can be fully suppressed is vetoed by the anatomy of the autonomic nervous system.
- Biomechanical: Facial musculature (7th cranial nerve, facial nerve) can be voluntarily isolated; but visceral effectors (sweat glands via sympathetic cholinergic fibers, salivation via autonomic) are not striated skeletal muscle under voluntary control. Therefore the "dissociation" is partial at best.
- Weather veto: Environmental thermoregulation interacts with emotional perspiration; ambient temperature/humidity confound the measurement of emotion-induced sweating. If an actor perspires profusely on stage, part may be environmental heat load, not purely emotional. Need to control for ambient conditions to isolate emotional sweat rate.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need 3 counterfactual veto scenarios with predictions.

Scenario 1: An actor trained in "cold" technique (Coquelin-style) performs Othello nightly for 4 weeks. Veto: If autonomic suppression is incomplete, predicted perspiration rate and heart rate remain elevated during performance despite subjectively reported "no emotion." Measurement: continuous ECG and skin conductance. Prediction: physiological arousal correlates with post-performance fatigue scores (r > 0.6), contradicting pure dissociation claim.

Scenario 2: Two actors, one emotionally expressive (Coleman-type), one dissociated (Coquelin-type), perform Richard III vs Othello under identical environmental conditions (22°C, 40% RH). Veto: If emotional fatigue is proportional to visceral response, the expressive actor shows greater cumulative fatigue (measured by reaction time, salivary cortisol) after Othello than after Richard III; the dissociated actor shows no such difference but still shows elevated sympathetic markers.

Scenario 3: Sikorsky-style facial mimicry experiment: subject contracts facial muscles in mimetic combinations while viewing neutral vs emotional stimuli. Veto: If facial feedback contributes to emotion, then voluntary fear-face configuration should increase amygdala response and subjective fear relative to neutral face configuration, but only if autonomic afferent feedback is intact; with sympathetic blockade (e.g., beta-blocker), the effect should be abolished. Prediction: facial feedback effect size on subjective affect drops to near zero under autonomic blockade, proving visceral dependence.

Need to ensure >= 1000 words total across XML sections. Let's aim for:
- THINK_TRACE: ~450-500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~350 words
- RETROCAUSAL_GENEALOGY: ~300 words
- RECURSIVE_THEORY_OF_MIND: ~300 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~250 words
Total ~1900 words. Good.

Need formal LaTeX equations. Use proper notation.

Let's draft carefully.

Important: Do not mention betting. No odds, spreads, moneylines, totals.

Check for toy equations: Avoid "Force / Fatigue". Use formal equations with definitions.

Let's write.

THINK_TRACE content:
The source passage is a cluster of actor testimonies about emotional fatigue. Key testimonies: Alma Murray - playing with heart more fatiguing than brain; adventuress less taxing than sympathetic heroine; muscular exertion little to do with it. Mr. Howe - emotion induces perspiration more than physical exertion; Joseph Surface little exertion but profuse perspiration. Forbes Robertson - fatigue proportional to emotion, not physical exertion. Coleman - Othello leaves physically prostrate despite husbanding resources; tried every pigment; Forrest, Kean, Phelps, Brooke, Dillon same; Richard III no effect.

Multi-hop derivation: (1) Emotional parts produce autonomic/visceral responses (perspiration, dry mouth, lump in throat, prostration). (2) These responses are not proportionate to skeletal muscle work. (3) Therefore fatigue is driven by organic/visceral expenditure, not mechanical work. (4) The discrepancy among actors is explained by ability to suppress visceral/organic expression. Some (Coquelin, cold actors) can dissociate; others cannot. (5) Felt emotion depends on visceral/organic part (James-Lange: emotion = perception of bodily changes). (6) Sikorsky shows voluntary facial mimicry can be devoid of emotional excitement; virtuosity allows isolated facial muscle contraction disregarding natural association.

Gray-zone audit: The text claims "chief part of felt emotion depends" on visceral/organic expression. But it does not establish complete eliminability. The actors who are "inwardly cold" may still have autonomic responses they do not report or perceive. The dissociation may be at the level of facial efferent expression, not at the level of visceral afferent feedback. The singularity: complete emotional anesthesia would require blocking autonomic afference, which mirror practice cannot do. Thus "artificial" mimicry may be expressive without being felt, but the actor who must actually undergo the emotion (Othello) cannot opt out of the sympathetic discharge. The boundary between suppressed expression and suppressed feeling is porous and individual.

I will cite [PAGE 465] throughout.

SOURCE_OPERATORS_AND_EQUATIONS:
Define variables:
- \(E(t)\in[0,1]\): normalized felt emotional intensity (dimensionless affective state).
- \(\mathbf{V}(t) = [HR(t), \rho_{sw}(t), S(t), P_{sal}(t)]^T\): visceral state vector. \(HR\) in bpm; \(\rho_{sw}\) perspiration mass flux \(kg \cdot m^{-2} \cdot s^{-1}\); \(S\) skin conductance \(\mu S\); \(P_{sal}\) salivation rate \(mL \cdot min^{-1}\).
- \(\mathbf{F}(t) \in [0,1]^N\): facial efferent motor commands for \(N\) facial muscle groups (dimensionless activation).
- \(A(t)\): afferent visceral feedback to CNS (normalized or Hz).

James-Lange operator:
\[ E(t) = \mathcal{G}\left( \int_{0}^{t} \mathcal{H}(t-\tau) \, \mathbf{w}^{T}\mathbf{V}(\tau) \, d\tau \right) + \eta(t) \]
where \(\mathcal{G}\) is perceptual transduction, \(\mathcal{H}\) causal temporal kernel (s), \(\mathbf{w}\) weighting vector, \(\eta\) noise. Units: argument of \(\mathcal{G}\) dimensionless after weighting; output \(E\) dimensionless.

Fatigue accumulation:
\[ \frac{d\Phi}{dt} = \alpha \|\mathbf{V}_{emo}(t)\|_2 + \beta \|\mathbf{P}_{phys}(t)\|_2 \]
where \(\Phi\) is fatigue state (dimensionless, 0-1 recovery debt), \(\mathbf{P}_{phys}\) mechanical power \(W\), \(\alpha \gg \beta\) empirically (Forbes Robertson). Breakdown regime: when \(\|\mathbf{V}_{emo}\| \gg \|\mathbf{P}_{phys}\\), emotional fatigue dominates.

Dissociation decoupling:
Sikorsky: \(\mathbf{F}(t)\) can be voluntarily specified independently of natural emotional coupling:
\[ \mathbf{F}(t) = \mathcal{C}(\mathbf{m}) \neq \mathcal{K}(\mathbf{V}_{emo}(t)) \]
where \(\mathcal{C}\) is conscious mimicry controller, \(\mathcal{K}\) is natural emotional coupling. However, autonomic \(\mathbf{V}_{emo}\) remains:
\[ \mathbf{V}_{auto}(t) = \mathcal{S}(stimulus) \neq 0 \]
even if \(\mathbf{F}\) is suppressed. Singularity: complete emotional veto requires \(\mathbf{V}_{auto} \to 0\), which is not under voluntary facial control; thus \(E(t)\) persists if afferent feedback \(\mathbf{V}_{auto}\) is intact.

Citations: [PAGE 465] for actor quotes; [PAGE 496] for Sikorsky quote (footnote dagger). Also page 894 referenced but not in text maybe.

RETROCAUSAL_GENEALOGY:
- 1884: Carl Lange proposes peripheral theory of emotion.
- 1890: James, Principles Vol 2, ch on Emotions, synthesizes James-Lange: bodily changes follow perception, and feeling of those changes IS the emotion.
- 1887: Sikorsky, Neurologisches Centralblatt, facial expression of insane; voluntary mimicry without emotion.
- Coquelin: actor's "recommended distance," art of suggestion vs emotional contagion.
- 19th c. acting lineage: Macready, Forrest, Kean, Phelps, Brooke, Dillon, Coleman—empirical observation that tragic emotional roles (Othello) exact physical toll.
- Multi-week trap: Nightly repetition of Othello over a run accumulates sympathetic discharge without commensurate parasympathetic recovery. Each performance is an acute visceral expenditure; over weeks, allostatic load increases, leading to cumulative prostration, voice loss ("continually moisten my mouth"), and inability to keep makeup on ("pigment would not stay on face" due to perspiration). This is a multi-week trap because the cost is not apparent in a single rehearsal but compounds across the run; actors who "husband resources" still succumb because the autonomic response is involuntary.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under performance crisis (opening night, Othello), actors regress to habitual embodied emotional response. Coleman, despite experience and resource-husbanding, cannot prevent prostration. The nervous system defaults to the well-worn affective-motor script.
- Counter-trap: The actor who believes dissociation is complete (Coquelin-style coldness) falls into a counter-trap: suppressing visible facial expression does not suppress internal visceral arousal. The subjective report of "no emotional excitement" (Sikorsky) may reflect perceptual decoupling, not physiological absence. The trap is mistaking expressive control for emotional absence.
- Clock: The physiological clock runs independently of the theatrical clock. Perspiration during Joseph Surface (minimal exertion) demonstrates that emotional autonomic activation operates on its own time course, unrelated to mechanical work. Nightly performances entrain circadian sympathetic activation; recovery between shows may be insufficient if the run exceeds the parasympathetic reset window (multi-week trap).

CROSS_LAYER_VETO_ADJUDICATION:
- Physical veto: Autonomic effectors (sweat glands, salivary glands, cardiac pacemaker, adrenals) are not innervated by voluntary somatic motor neurons. No amount of facial muscle virtuosity (Sikorsky) can veto sympathetic cholinergic sweating or adrenocortical output. Therefore any theory that emotional fatigue can be abolished by "cold" dissociation is vetoed at the physical layer.
- Biomechanical veto: Facial muscles are striated, innervated by CN VII, and can be isolated (Sikorsky's unilateral contraction). But visceral smooth muscle and glandular epithelium are not under this control. The "natural association" between facial expression and visceral state can be severed at the efferent face level but not at the afferent visceral level. Hence the felt emotion (which depends on visceral afference) survives facial suppression.
- Weather veto: Environmental thermoregulation confounds emotional perspiration. Profuse sweating on stage (Howe's Joseph Surface) may partly reflect ambient temperature, stage lighting heat load, and costume. To isolate emotion-induced sweat, one must measure \(\rho_{sw}\) under controlled ambient conditions (e.g., 22°C, 40% RH) and subtract thermoregulatory baseline. Without this veto, the attribution of perspiration solely to emotion is unsupported.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable veto scenarios + predictions.

Scenario 1 (Autonomic dissociation test): Counterfactual: A "cold" actor performs Othello nightly for 4 weeks while wearing continuous ECG, EDA, and a sweat-rate patch. Veto condition: If subjective report claims zero emotion but autonomic markers (HR, EDA, \(\rho_{sw}\)) remain significantly elevated above baseline during performance, the pure dissociation hypothesis is vetoed. Prediction: Elevated sympathetic markers will persist nightly; post-show cortisol and fatigue scores will correlate with integrated \(\int \mathbf{V}_{emo} dt\), not with reported subjective emotion. The actor will show cumulative prostration despite claiming inward coldness.

Scenario 2 (Facial feedback vs visceral blockade): Counterfactual: Subjects perform Sikorsky-type fear-face mimicry under two conditions: (a) intact autonomic system; (b) beta-adrenergic blockade (e.g., propranolol) reducing visceral afference. Veto: If voluntary facial configuration produces increased subjective fear in (a) but the effect is abolished in (b), the facial-feedback effect is vetoed as dependent on visceral afference. Prediction: \(\Delta E_{\text{face}} > 0\) in placebo; \(\Delta E_{\text{face}} \approx 0\) under blockade, proving that artificial mimicry alone cannot generate emotion without visceral feedback.

Scenario 3 (Environmental confound): Counterfactual: Two actors perform the same low-exertion role (Joseph Surface) in identical costumes under (a) cool stage (18°C) and (b) hot stage (28°C). Veto: If perspiration rate \(\rho_{sw}\) scales with ambient temperature rather than emotional content, the claim that "emotion induces perspiration more than physical exertion" is confounded. Prediction: \(\rho_{sw}\) will be significantly higher in hot condition even with identical emotional instruction; the emotional residual after subtracting thermoregulatory baseline will be smaller than raw Howe testimony suggests. Verification via weighted sweat mass balance.

Need to ensure no toy equations. The equations are formal with units. Good.

Word count: Let's estimate. I'll write generously to exceed 1000 words. Each section robust.

Also need to cite [PAGE N] exactly. The text has page header 465. Footnote: P. 894 and ↑ P. 496. So Sikorsky quote likely from page 496 of the original? Actually the dagger footnote text says "↑ P. 496." So I cite [PAGE 496] for Sikorsky's mirror practice statement. The main actor quotes are on [PAGE 465].

Let's compose final output with XML sections exactly as named.

I must not include anything outside the XML sections? The user said "across these exact XML sections." I should output only those sections, or maybe an intro? Better to output just the six XML sections to be safe. But the system says desired oververbosity 5. I'll output exactly the six sections.

Check: >= 1000-word depth across these exact XML sections. I'll make sure total is high.

Let's write carefully with LaTeX.

Word count estimation:
THINK_TRACE: I'll write ~500 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~300.
RETROCAUSAL_GENEALOGY: ~300.
RECURSIVE_THEORY_OF_MIND: ~300.
CROSS_LAYER_VETO_ADJUDICATION: ~250.
RLVR_COUNTERFACTUAL_VETOES: ~250.
Total ~1900.

Good.

Now, ensure no betting terms. None present.

Ensure equations are LaTeX formatted. Use \[ ... \] and inline \( ... \).

Let's draft.

Potential issue: The user says "STRICT INVARIANTS... When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include verbatim quotes with page citations.

I will include quotes like: "Playing with the brain," says Miss Alma Murray, 'is far less fatiguing than playing with the heart.' [PAGE 465].

Also "I always perspired profusely while acting Joseph Surface, which requires little or no exertion.'... 'I suffer from fatigue,' writes Mr. Forbes Robertson, 'in proportion to the amount of emotion I may have been called upon to go through, and not from physical exertion.' [PAGE 465]."

And Sikorsky: "When I contract my facial muscles in any mimetic combination, I feel no emotional excitement, so that the mimicry is in the fullest sense of the word artificial..." [PAGE 496].

Also: "the viscral and organic part of the expression can be suppressed in some men, but not in others, and on this it is probable that the chief part of the felt emotion depends." [PAGE 465]. Note: text says "viscral" typo for "visceral"; I can quote as-is or correct? Verbatim: "viscral". I'll quote verbatim.

Coleman: "this is the one part, the part of parts, which always leaves me physically prostrate." [PAGE 465].

Also: "Though I have played Othello... husband my resources as I may..." [PAGE 465].

Let's write now.
</NATIVE_REASONING>

<THINK_TRACE>
The passage from James's Principles of Psychology, Vol. 2, [PAGE 465] presents a cluster of actor testimonies that converge on a single physiological claim: emotional expenditure produces fatigue and autonomic discharge disproportionate to skeletal-muscular work. Miss Alma Murray distinguishes "playing with the brain" from "playing with the heart," asserting the latter is far more fatiguing and that an adventuress taxes the physique less than a sympathetic heroine; she adds that muscular exertion has comparatively little to do with it [PAGE 465]. Mr. Howe reports profuse perspiration while acting Joseph Surface, a role requiring little or no physical exertion [PAGE 465]. Mr. Forbes Robertson states fatigue comes "in proportion to the amount of emotion I may have been called upon to go through, and not from physical exertion" [PAGE 465]. Mr. Coleman describes Othello as "the part of parts, which always leaves me physically prostrate," despite husbanding his resources, while Richard III leaves him untouched; he cites Forrest, Kean, Phelps, Brooke, and Dillon as similarly overcome by Othello [PAGE 465]. The recurring somatic markers are dry mouth requiring continual moistening, a "lump" in the throat, profuse perspiration that defeats stage makeup, and post-performance prostration.

The multi-hop derivation proceeds as follows. First, emotional roles trigger autonomic and visceral responses—sympathetic sweating, salivation changes, cardiovascular arousal—that are not mechanically linked to external work output. Second, because the magnitude of these responses tracks the emotional content of the part rather than the physical load, fatigue must be modeled as an organic/visceral debt, not a mechanical one. Third, James explains the inter-actor discrepancy by proposing that the visceral and organic component of expression can be suppressed in some individuals but not in others, and that the chief part of felt emotion depends on this organic component [PAGE 465]. Fourth, actors such as Coquelin, described as inwardly cold, can achieve a complete dissociation between expressive behavior and felt excitement. Fifth, Prof. Sikorsky's mirror practice demonstrates that voluntary facial mimicry can be executed without any accompanying emotional excitement, and his virtuosity permits isolated contraction of facial muscle groups on either side of the face, disregarding their natural associative grouping [PAGE 496].

Gray-zone audit: the text does not establish that visceral suppression is complete or permanent. Sikorsky's artificial mimicry is expressive but unfelt at the facial-efferent level; it does not prove that autonomic viscera (sweat glands, heart, adrenals) are simultaneously silenced. The actors who remain "inwardly cold" may still be generating subcortical sympathetic discharge that they fail to perceive or report. The singularity occurs where complete emotional anesthesia would require blocking afferent visceral feedback, a feat beyond voluntary facial control. Thus the boundary between suppressed expression and suppressed feeling is porous: an actor can look unmoved while still accumulating the physiological debt that Coleman describes as prostration. The exhaustion reported after Othello is therefore not contradicted by Coquelin's cold technique; it reveals the limit of efferent control over autonomic afference.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Define the following formal operators and state variables with SI/information units.

Let \(E(t) \in [0,1]\) be normalized felt emotional intensity (dimensionless affective state, 0 = none, 1 = maximal). Let the visceral state vector be
\[
\mathbf{V}(t) = \begin{bmatrix} HR(t) \\ \rho_{sw}(t) \\ S(t) \\ P_{sal}(t) \end{bmatrix},
\]
where \(HR\) is heart rate in beats per minute (bpm), \(\rho_{sw}\) is perspiration mass flux in \(\mathrm{kg \cdot m^{-2} \cdot s^{-1}}\), \(S\) is skin conductance in microsiemens (\(\mu\mathrm{S}\)), and \(P_{sal}\) is salivation rate in \(\mathrm{mL \cdot min^{-1}}\). Let \(\mathbf{F}(t) \in [0,1]^N\) denote voluntary efferent activation of \(N\) facial muscle groups (dimensionless), and let \(A(t)\) be afferent visceral feedback to the central nervous system (normalized or neural firing rate in Hz).

The James-Lange perception operator is formalized as
\[
E(t) = \mathcal{G}\!\left( \int_{0}^{t} \mathcal{H}(t-\tau)\,\mathbf{w}^{T}\mathbf{V}(\tau)\,d\tau \right) + \eta(t),
\]
where \(\mathcal{G}\) is a perceptual transduction function, \(\mathcal{H}\) is a causal temporal kernel with units of seconds, \(\mathbf{w}\) is a modality-weighting vector, and \(\eta(t)\) is observation noise. The argument of \(\mathcal{G}\) is dimensionless after weighting, so \(E(t)\) remains a unitless affective probability/intensity.

Fatigue accumulation is modeled by
\[
\frac{d\Phi}{dt} = \alpha\,\|\mathbf{V}_{emo}(t)\|_2 + \beta\,\|\mathbf{P}_{phys}(t)\|_2,
\]
where \(\Phi\) is a dimensionless fatigue/recovery-debt state (\(0\) to \(1\)), \(\mathbf{P}_{phys}\) is mechanical power in watts (\(\mathrm{W}\)), and empirical testimony [PAGE 465] implies \(\alpha \gg \beta\) for emotional actors: visceral emotional load dominates mechanical load. The breakdown regime is \(\|\mathbf{V}_{emo}\|_2 \gg \|\mathbf{P}_{phys}\|_2\), under which emotional fatigue is the primary determinant of \(\Phi\).

Sikorsky's dissociation is expressed as a decoupling of efferent facial command from natural emotional coupling:
\[
\mathbf{F}(t) = \mathcal{C}(\mathbf{m}) \neq \mathcal{K}(\mathbf{V}_{emo}(t)),
\]
where \(\mathcal{C}\) is a conscious mimicry controller and \(\mathcal{K}\) is the natural emotion-to-face mapping [PAGE 496]. However, the autonomic visceral subsystem remains driven by the stimulus:
\[
\mathbf{V}_{auto}(t) = \mathcal{S}(\text{stimulus}) \neq 0,
\]
even when \(\mathbf{F}\) is artificially suppressed or isolated unilaterally. The singularity for total emotional veto would require \(\mathbf{V}_{auto} \to 0\), which is not under voluntary somatic control; consequently, if afferent feedback \(A(t)\) remains intact, \(E(t)\) persists despite facial artificiality. Citations: actor testimony and the visceral/organic suppression claim appear on [PAGE 465]; Sikorsky's mirror-practice quotation appears on [PAGE 496].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The theoretical lineage begins with Carl Lange's 1884 peripheralist proposal that emotion is the perception of bodily changes, which William James synthesized in The Principles of Psychology (1890), Volume 2, chapter on "The Emotions" [PAGE 465]. James's core claim—that the feeling of bodily changes as they occur IS the emotion—directly accounts for the actor testimony: if Othello produces sympathetic discharge, perspiration, and dry mouth, then the perception of those changes constitutes the felt exhaustion, regardless of stage blocking or line memorization. Sikorsky's 1887 article in the Neurologisches Centralblatt on the facial expression of the insane [PAGE 496] extends this by showing that voluntary mimicry can be severed from felt excitement, anticipating the modern facial-feedback debate while isolating the efferent face from the afferent viscera.

The acting tradition cited by James—Macready, Edwin Forrest, Charles Kean, Phelps, Brooke, Dillon, and Coleman—represents an empirical, pre-laboratory observation that tragic emotional roles exact a cumulative somatic tax. Coleman's Othello, performed since age seventeen, still leaves him "physically prostrate" despite resource-husbanding [PAGE 465]. This establishes a multi-week trap: in a theatrical run, the same high-visceral role is repeated nightly. Each performance deposits sympathetic and adrenocortical debt; if parasympathetic recovery between shows is incomplete, allostatic load accumulates across weeks. The trap is invisible in any single rehearsal because the cost is systemic and delayed, not local and acute. It manifests as the inability to keep pigment on the face (perspiration defeats makeup), the need to continually moisten the mouth, and the "lump" that threatens articulation [PAGE 465]. Actors who can dissociate facial expression (Coquelin-type) may evade the subjective sense of emotion, but they do not necessarily evade the multi-week visceral accumulation, because the autonomic clock runs on a slower integration window than the performance clock.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of the nervous system, under performance pressure, to revert to the most deeply embodied affective-motor script. Coleman, despite decades of experience and conscious efforts to "husband [his] resources," cannot prevent Othello from leaving him prostrate [PAGE 465]. The crisis (the role, the audience, the narrative identification) reactivates the habitual visceromotor pattern; top-down intention cannot overwrite the autonomic reflex arc once it is engaged.

The counter-trap is the belief that expressive dissociation equals emotional absence. Sikorsky reports no emotional excitement during voluntary facial mimicry [PAGE 496], and Coquelin-type actors claim inward coldness. Yet the visceral subsystem—sweat glands, salivary inhibition, cardiac acceleration—is not under facial-efferent command. An actor who believes he is "cold" may still be accumulating \(\int \mathbf{V}_{emo} dt\) debt; the subjective report is a perceptual decoupling, not a physiological shutdown. The trap is mistaking control of the mask for control of the organism.

The clock operates on two timescales. The theatrical clock is discrete: rehearsal, performance, curtain. The physiological clock is continuous and integrates emotional arousal across the run. Howe's profuse perspiration during Joseph Surface—a role with little exertion [PAGE 465]—shows that autonomic activation does not wait for mechanical work; it is triggered by the emotional contingency itself. Nightly repetition therefore creates a circadian sympathetic bias. If the inter-performance interval is shorter than the parasympathetic reset window, fatigue compounds (Forbes Robertson's proportionality claim [PAGE 465]). The crisis habit regresses every night, the counter-trap reassures the actor that he is fine, and the clock keeps scoring the debt until the body enforces collection through prostration.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto: Autonomic effectors—eccrine and apocrine sweat glands, salivary glands, the sinoatrial node, and the adrenal medulla—are innervated by autonomic (sympathetic/parasympathetic) fibers, not by voluntary somatic motor neurons. No amount of facial-muscle virtuosity, such as Sikorsky's isolated unilateral contractions [PAGE 496], can veto sympathetic cholinergic sweating or adrenocortical output. Therefore any theory that emotional fatigue can be abolished by purely "cold" cognitive or expressive dissociation is vetoed at the physical layer: the viscera continue to respond regardless of the actor's declared inward state.

Biomechanical veto: The facial musculature is striated and innervated by the facial nerve (CN VII), permitting the voluntary, isolated contractions Sikorsky describes [PAGE 496]. However, visceral smooth muscle and glandular epithelium are not under this somatic control. The "natural association" between facial expression and visceral state can be severed at the efferent face, but not at the afferent visceral layer. Since James's theory locates the chief part of felt emotion in the organic/visceral component [PAGE 465], facial suppression alone cannot eliminate \(E(t)\) while \(\mathbf{V}_{auto}\) remains active.

Weather veto: Environmental thermoregulation confounds the attribution of perspiration to emotion. Howe's report of profuse sweating during the low-exertion role of Joseph Surface [PAGE 465] may partly reflect stage lighting heat load, costume insulation, and ambient temperature. To isolate emotion-induced perspiration, one must measure \(\rho_{sw}\) under controlled ambient conditions (e.g., \(22^\circ\mathrm{C}\), 40% relative humidity) and subtract a thermoregulatory baseline. Without this environmental veto, raw observations of stage perspiration cannot be causally assigned to emotional versus thermal load. The same veto applies to Coleman's makeup failure: perspiration that defeats pigment may be a mixture of emotional sympathetic discharge and thermoregulatory response to hot stage lights.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Autonomic dissociation under repeated performance: Counterfactual: A self-described "cold" actor (Coquelin-type) performs Othello nightly for four weeks while wearing continuous ECG, electrodermal activity (EDA), and a sweat-rate patch measuring \(\rho_{sw}\). Veto: If the actor subjectively reports zero emotion but autonomic markers (HR, EDA, \(\rho_{sw}\)) remain significantly elevated above resting baseline during each performance, the pure-dissociation hypothesis is vetoed. Prediction: Integrated visceral load \(\int_0^T \|\mathbf{V}_{emo}(t)\|_2 dt\) will correlate with post-performance fatigue scores and salivary cortisol (\(r > 0.6\)), and the actor will show cumulative prostration despite claiming inward coldness. Verifiable via nightly physiological logs and post-run fatigue inventories.

Scenario 2 — Facial feedback versus visceral blockade: Counterfactual: Subjects execute Sikorsky-type fear-face mimicry under two pharmacological conditions: (a) placebo with intact autonomic afference; (b) beta-adrenergic blockade (e.g., propranolol) that attenuates visceral afferent feedback. Veto: If voluntary facial configuration increases subjective fear \(E(t)\) in condition (a) but the effect is abolished in condition (b), the claim that artificial mimicry alone generates emotion is vetoed. Prediction: \(\Delta E_{\text{face}} > 0\) under placebo; \(\Delta E_{\text{face}} \approx 0\) under blockade. This proves that the affective output of facial expression depends on intact visceral feedback, consistent with James's organic dependency claim [PAGE 465].

Scenario 3 — Environmental confound of emotional perspiration: Counterfactual: Two actors perform the same low-exertion role (Joseph Surface) in identical costumes under (a) cool stage conditions (\(18^\circ\mathrm{C}\), 40% RH) and (b) hot stage conditions (\(28^\circ\mathrm{C}\), 40% RH), with identical emotional instruction. Veto: If perspiration mass flux \(\rho_{sw}\) scales significantly with ambient temperature rather than emotional content, Howe's attribution of sweating to emotion alone [PAGE 465] is confounded. Prediction: \(\rho_{sw}\) will be higher in the hot condition; after subtracting the thermoregulatory baseline, the emotional residual will be smaller than the raw testimony suggests. Verifiable via weighted sweat-mass balance and climate-controlled stage measurement.
</RLVR_COUNTERFACTUAL_VETOES>