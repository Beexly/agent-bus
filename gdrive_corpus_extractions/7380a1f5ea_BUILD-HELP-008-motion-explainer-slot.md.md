---
source: "BUILD-HELP-008-motion-explainer-slot.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/help-education-ux/claude-build-queue/cards"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4543
---

<NATIVE_REASONING>
The user has provided a source document about a "Motion explainer slot" build task for GSE (Galaxy Sports Edge). They want me to act as the GSE + GSI Frontier Reasoning Foundry and produce output with specific XML sections:

1. THINK_TRACE (>=400 words) - Deep multi-hop derivation & gray-zone audit
2. SOURCE_OPERATORS_AND_EQUATIONS - Formal LaTeX, units, page citations, breakdown
3. RETROCAUSAL_GENEALOGY - Historical/scientific lineage & multi-week traps
4. RECURSIVE_THEORY_OF_MIND - Crisis habit regression vs counter-trap vs clock
5. CROSS_LAYER_VETO_ADJUDICATION - Physical/biomechanical/weather veto proof
6. RLVR_COUNTERFACTUAL_VETOES - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- >= 1,000-word depth across sections.
- Cite exact [PAGE N] markers and verbatim quotes when source pages provided.

Wait, the source text says PAGES: 1 and provides one page of markdown. I should cite [PAGE 1] and use verbatim quotes from it.

The source is about UX/help documentation for a motion explainer slot, not sports betting content per se, though GSE is Galaxy Sports Edge. I must be careful not to mention betting lines even implicitly.

I need to produce a rigorous reasoning document that treats the UX build as a formal system, applying information theory, cognitive load theory, human-computer interaction principles, etc. No toy equations. Real formalism: Shannon entropy, Hick's Law, Fitts's Law, cognitive load (intrinsic/extraneous/germane), accessibility (WCAG), reduced motion (prefers-reduced-motion media query), etc.

Let me structure this carefully.

THINK_TRACE (>=400 words): Multi-hop derivation.
- Hop 1: Source doc BUILD-HELP-008 [PAGE 1] specifies motion explainer slot with 10-second comprehension, next action, trust-safe media path.
- Hop 2: Map to cognitive architecture: 10 seconds ≈ working memory capacity window (Miller, Cowan), intrinsic load of proprietary complex cards.
- Hop 3: Implement help pattern: summary + next action + trust note + media/visual slot (verbatim from source).
- Hop 4: Accessibility constraints: mobile readability, reduced-motion behavior, WCAG 2.1/2.2, ARIA, no autoplay vestibular triggers.
- Hop 5: Analytics/QA: screenshot QA, copy audit, reduced-motion check, help coverage scan.
- Hop 6: Gray-zone audit: risk of leaking founder methodology (prohibited), risk of fake certainty (prohibited), risk of disclosure failures on promotions/risk surfaces. Rollback via feature flag, no data/billing changes.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- Information-theoretic comprehension bound: H(X) <= C * T where T=10s, channel capacity C in bits/s. Maybe use Hick's Law: RT = a + b log2(n). Fitts's Law for touch target: MT = a + b log2(D/W + 1). Cognitive load: CL_total = CL_intrinsic + CL_extraneous + CL_germane. Shannon entropy for help text redundancy. WCAG contrast ratio formalism (though that's a ratio, it's a real standard not a toy equation; but the user said zero toy equations, formal LaTeX equations are fine). I should frame units: bits, seconds, radians/second for motion, dB for audio, etc.
- Breakdown regimes: singularity when intrinsic load exceeds working memory (~4±1 chunks), when motion frequency exceeds vestibular threshold (~0.2-0.5 Hz can trigger discomfort), when tap target < 44x44 CSS pixels (Apple HIG) or 48x48 dp (Material).
- Citations: [PAGE 1] verbatim quotes.

RETROCAUSAL_GENEALOGY: Historical lineage.
- Onboarding/help patterns: Clippy (Microsoft, 1997) failure mode (intrusive, no dismissal), overlay coach marks (Twitter, Facebook), empty state education.
- GSE context: extends BUILD-087 (matched existing id per [PAGE 1]), onboarding/help/video/copy queue.
- Multi-week traps: Week 1 novelty effect (users dismiss help), Week 3 help fatigue, Week 6 regression to manual support tickets. Historical trap: building help as afterthought vs repeatable pipeline.
- Cite source: [PAGE 1] "Internal Value: Galaxy Studios, support, product, and growth teams get a repeatable help asset pipeline instead of one-off explanations."

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under stress (e.g., user can't find value), users regress to support tickets or churn instead of using help affordance.
- Counter-trap: designing help that assumes user will read; counter-trap is progressive disclosure and 10-second comprehension.
- Clock: 10-second comprehension window; analytics events timed to T <= 10s; reduced motion respects OS clock/preference.
- Multi-agent theory of mind: product team models user, user models product intent, support team models both.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: mobile device constraints, screen size, touch target, reduced motion OS setting.
- Biomechanical layer: vestibular disorders, photosensitive epilepsy (WCAG 2.3: flashes < 3 Hz or below thresholds), fine motor control.
- Weather: not directly relevant to UI motion but could mention environmental context (glare, low light) affecting readability; keep it UI-relevant: ambient light sensor, dark mode.
- Veto proof: any layer can veto launch. E.g., if reduced-motion media query is ignored => vestibular veto. If contrast < 4.5:1 => visual veto. If tap target < 44px => motor veto.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some internal eval framework. I'll treat as verifiable counterfactual veto scenarios.
1. Scenario: Autoplay motion explainer without user gesture and without prefers-reduced-motion respect. Veto: triggers vestibular discomfort / violates WCAG. Prediction: support tickets increase > baseline, task completion drops.
2. Scenario: Help copy contains proprietary methodology or fake certainty ("guaranteed win"). Veto: legal/method boundary breach [PAGE 1]. Prediction: brand trust metric declines, legal review blocks release.
3. Scenario: Touch target < 44x44 CSS px or help affordance absent on mobile. Veto: accessibility regression. Prediction: mobile task failure rate rises, screenshot QA fails.

Word count: Need >=1000 words total across sections. I'll aim for roughly 180-250 words per section x 6 = ~1200-1500 words. THINK_TRACE >=400 words on its own.

Let me write this out with formal LaTeX. I need to avoid toy equations. Use real HCI/information theory formalisms.

Equations to include:
1. Hick-Hyman law: \( T_{\text{dec}} = a + b \log_2(n+1) \) where \(n\) is number of alternatives, units seconds. Assumptions: well-practiced choice, uniform probability. Breakdown: n→∞, or when alternatives are not equally probable (requires weighted Shannon entropy form).
2. Fitts's Law for touch: \( MT = a + b \log_2\left(\frac{D}{W} + 1\right) \) where MT movement time (s), D distance (px or cm), W target width (px or cm). Breakdown: W→0 (singularity), D→0.
3. Cognitive load: \( \mathcal{L}_{\text{total}} = \mathcal{L}_{\text{intrinsic}} + \mathcal{L}_{\text{extraneous}} + \mathcal{L}_{\text{germane}} \) (units: arbitrary cognitive units or chunks relative to working memory capacity \(C_{\text{WM}} \approx 4 \pm 1\) chunks). Breakdown: when \( \mathcal{L}_{\text{total}} > C_{\text{WM}} \), comprehension failure.
4. Information rate: \( R \le C \) where \(C\) is channel capacity (bits/s). For 10-second comprehension, required mutual information \( I(\text{card}; \text{user model}) \ge H(\text{card}) - \epsilon \) delivered within \(T=10\text{s}\), so average informational throughput \( \dot{I} \ge H(\text{card})/10\text{s} \).
5. Vestibular/motion: angular frequency \( \omega \) of motion; discomfort risk increases near \( f \in [0.2, 0.5]\text{Hz} \) and for accelerations \( a > a_{\text{thresh}} \). Reduced-motion media query: \( \text{prefers-reduced-motion: reduce} \Rightarrow \text{motion} := \emptyset \) or crossfade.
6. WCAG contrast: \( \frac{L_1 + 0.05}{L_2 + 0.05} \ge 4.5:1 \) for normal text (this is a real standard formula, not a toy ratio; but I need to be careful—it's a ratio but it's a formal standard. The instruction says "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." WCAG contrast is a real standard, so it's okay, but I'll frame it as a formal standard with units of relative luminance.)

Citations: Use [PAGE 1] and verbatim quotes like "Users need to find value in 10 seconds." etc.

Let me ensure no betting lines: no mention of spreads, totals, moneylines, odds. The source is GSE but about UX help. I won't mention sports betting markets at all.

Now draft sections.

THINK_TRACE: I'll write around 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Around 300-400 words with LaTeX.

RETROCAUSAL_GENEALOGY: Around 200-250 words.

RECURSIVE_THEORY_OF_MIND: Around 200-250 words.

CROSS_LAYER_VETO_ADJUDICATION: Around 200-250 words.

RLVR_COUNTERFACTUAL_VETOES: Around 250-300 words.

Total likely >1200 words. Good.

Let me write carefully.

I should make sure to cite [PAGE 1] multiple times and include verbatim quotes from the source:
- "Users need to find value in 10 seconds."
- "GSE is proprietary and complex, so every major item needs an immediate explanation, a next action, and a trust-safe media or visual path."
- "Include one short summary, one next action, one trust note, and one media/visual slot."
- "Add mobile and reduced-motion behavior."
- "Add analytics and QA checks where applicable."
- "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes."
- "No founder-only methodology leakage. No fake certainty. Promotions/risk surfaces need clear disclosures and responsible-play-safe copy."
- "matched_existing_ids: BUILD-087"
- "reason_not_duplicate: Motion explainer slot focuses on 10-second comprehension and contextual help coverage, not generic help docs."

OK let's compose.

I need to be careful that XML sections are exactly named:
<THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>

No other text outside these? The user said "across these exact XML sections." I should output only these sections, probably wrapped in a root or just the sections. I'll output just the six sections in order.

Word count check mentally: I'll write generously.

Let me draft THINK_TRACE:

Start with source: [PAGE 1] BUILD-HELP-008. Multi-hop.

Hop 1: Requirement extraction. Verbatim: "Users need to find value in 10 seconds." This sets a hard temporal bound T=10s on comprehension latency. The doc also states GSE is "proprietary and complex," implying high intrinsic cognitive load. Therefore the explainer must compress intrinsic load via a "short summary, one next action, one trust note, and one media/visual slot" [PAGE 1].

Hop 2: Cognitive architecture mapping. Working memory C_WM ~ 4±1 chunks. If the card's state space exceeds this, user cannot build a valid mental model in 10 seconds. The help pattern acts as an external working-memory extender: summary reduces H(card), next action collapses policy space to a single executable primitive, trust note reduces epistemic uncertainty, media/visual slot offloads verbal processing to visual channel (dual coding).

Hop 3: Implementation constraints from source. [PAGE 1] says "Add mobile and reduced-motion behavior." This invokes OS-level preference prefers-reduced-motion. Violation induces vestibular exposure. Also "help text sounds human" = register constraint, not machine translation or legalese.

Hop 4: Legal/method boundary. [PAGE 1]: "No founder-only methodology leakage. No fake certainty." This is a non-negotiable constraint. If the media slot reveals proprietary edge methodology, the build violates the method boundary and must be rolled back. Rollback: "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes." [PAGE 1]

Hop 5: QA/analytics loop. Visual screenshot QA, mobile readability, copy audit, reduced-motion check, help coverage scan. These are verification operators mapping to acceptance criteria: 10-second comprehension, help affordance, human copy, media path, method boundaries protected.

Gray-zone audit: The duplicate gate says EXTENSION of BUILD-087. Risk: scope creep into generic help docs, contradicting reason_not_duplicate [PAGE 1]. Another gray zone: analytics might capture PII or behavioral data that touches billing/launch gates—prohibited by "Do not change billing, secrets, launch gates." Must keep analytics event schema sterile (no user identifiers, no bet-related metadata).

OK that's solid.

SOURCE_OPERATORS_AND_EQUATIONS:

Define formalism.

Let C be the complex card state space with entropy H(C) in bits. The user channel capacity is γ (bits/s). Comprehension condition: H(C | Help) ≤ ε within T_max = 10 s. Therefore required throughput:

\[
\dot{I} = \frac{I(C; \mathcal{H})}{T} \geq \frac{H(C) - \epsilon}{10\,\text{s}}
\]

where \(\mathcal{H}\) is the help/medial explainer. Units bits/s. Assumptions: user attention is stationary over T; no interruption; help modality matched to sensory channel. Breakdown/singularity: if H(C) - ε > γ·10s, comprehension impossible within bound regardless of UI; requires reducing card complexity (simplify card) rather than improving help.

Hick-Hyman for next action selection among n alternatives:
\[
RT = a + b \log_2(n+1) \quad [\text{s}]
\]
Breakdown: n→∞; non-uniform priors require \(RT = a + b H(\{p_i\})\) weighted form. For the explainer, n must be collapsed to 1 (the single next action) so \(\log_2(2)=1\) bit decision cost.

Fitts's Law for mobile help affordance:
\[
MT = a + b \log_2\left(\frac{D}{W} + 1\right) \quad [\text{s}]
\]
D in CSS pixels or cm, W target width. Singularity W→0. Mobile veto: W < 44 CSS px (Apple HIG) or 48 dp (Material) fails motor accessibility.

Cognitive load:
\[
\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{in}} + \mathcal{L}_{\text{ex}} + \mathcal{L}_{\text{ge}}
\]
with working-memory saturation at \( \mathcal{L}_{\text{total}} > C_{\text{WM}} \approx 4\pm1 \) chunks. Extraneous load from motion must be minimized: angular frequency \( \omega = 2\pi f \); vestibular discomfort band \( f \in [0.2, 0.5]\,\text{Hz} \). On prefers-reduced-motion: reduce, set motion operator \( \mathcal{M} := \emptyset \) (crossfade or static).

WCAG contrast for human-readable copy:
\[
\frac{L_{\text{light}} + 0.05}{L_{\text{dark}} + 0.05} \ge 4.5
\]
dimensionless relative luminance ratio; normal text. Breakdown at <4.5:1 for 14pt/18px.

Page citation: [PAGE 1] for all requirements sourced from the build doc.

RETROCAUSAL_GENEALOGY:

Lineage: Microsoft Clippy (1997) failure—intrusive, agency-less, no dismissal; modern empty-state/coach-mark patterns (Twitter/X onboarding tours, Facebook tooltips). GSE's own BUILD-087 (matched_existing_ids [PAGE 1]) establishes onboarding/help/video/copy queue. BUILD-HELP-008 extends this with page-level teachability and 10-second comprehension.

Historical traps across weeks:
- Week 1: Novelty effect; users click help once, then ignore. Metric decay expected.
- Week 3: Help fatigue; if copy is not human or next action is vague, users dismiss and never return.
- Week 6: Regression to support tickets and churn; help coverage scan [PAGE 1] must detect dark patterns where help affordance exists but is non-functional.

Trap: building one-off explanations instead of repeatable pipeline [PAGE 1] Internal Value. This creates tech debt and inconsistent help voice.

RECURSIVE_THEORY_OF_MIND:

Three agents: Product (P), User (U), Support (S).
P models U as needing 10-second comprehension. U models P's intent via the help affordance. S models both when tickets arrive.

Crisis habit regression: Under cognitive stress (card too complex, motion triggers discomfort), U regresses to lowest-effort habit: close app, contact support, or churn. This regresses the system to human support, bypassing the automated help layer.

Counter-trap: Designers may assume "if we build help, users will use it." Counter-trap: users only use help if trust note is present and next action is singular and visible within T_max. Without trust, help is perceived as marketing.

Clock: The 10-second clock is the dominant constraint. Analytics events must be timestamped: help_impression at t0, comprehension_signal at t1 ≤ t0+10s. Reduced-motion preference acts as a system-level clock interrupt: if OS signals reduce, motion layer halts immediately.

CROSS_LAYER_VETO_ADJUDICATION:

Physical layer: device screen density, ambient light, touch target size. Veto if contrast < WCAG 4.5:1 or tap target <44px.

Biomechanical layer: vestibular disorders, photosensitive epilepsy (WCAG 2.3 flash thresholds <3 Hz or general flash limits), fine motor impairment. Veto if autoplay motion in [0.2,0.5] Hz band or flashes exceed thresholds. Reduced-motion media query is a hard veto override.

Weather/environmental layer: Not a betting variable; here interpreted as ambient operating context (glare, low-light, motion-in-transit). Dark mode and readable copy required; if environmental luminance makes copy unreadable, visual veto.

Adjudication: Any layer veto = no launch. Rollback via feature flag per [PAGE 1].

RLVR_COUNTERFACTUAL_VETOES:

1. Scenario A: Autoplay motion explainer on card load without respects prefers-reduced-motion: reduce. Veto trigger: vestibular/biosignal. Prediction: task completion rate drops ≥15% for affected cohort; support tickets citing "motion sickness" or "distraction" rise; screenshot QA fails reduced-motion check.

2. Scenario B: Help copy includes proprietary edge methodology or deterministic language (fake certainty). Veto trigger: [PAGE 1] method boundary. Prediction: legal/review blocks release; brand trust metric declines; if shipped, responsible-play disclosure failure.

3. Scenario C: Mobile help affordance absent or target <44 CSS px; no next action within 10s. Veto trigger: accessibility/usability. Prediction: mobile task failure rises; help coverage scan reports missing affordance; copy audit flags non-human register.

Each scenario is verifiable via QA and analytics event logs.

Now I need to count words. I'll write it out fully and ensure each section is substantial. THINK_TRACE needs >=400 words by itself. Let me expand THINK_TRACE to be safe.

Let me write the final output now. I'll make sure LaTeX is valid. I'll avoid markdown code blocks inside XML? It's fine to include LaTeX inline.

Also note: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I must include [PAGE 1] and verbatim quotes. I'll do that.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The source document is BUILD-HELP-008: Motion explainer slot, a single-page build specification for Galaxy Sports Edge [PAGE 1]. The first multi-hop derivation is requirements extraction. Verbatim from [PAGE 1]: "Users need to find value in 10 seconds." This establishes a hard temporal upper bound on comprehension latency, T_max = 10 s. The same page states that GSE is "proprietary and complex," which implies high intrinsic cognitive load for every major card, and therefore "every major item needs an immediate explanation, a next action, and a trust-safe media or visual path" [PAGE 1]. Hop two maps this requirement onto human cognitive architecture. Working memory capacity C_WM is approximately 4 ± 1 chunks. If a complex card's state space exceeds C_WM, a user cannot construct a valid mental model within the 10-second window. The specified help pattern—"one short summary, one next action, one trust note, and one media/visual slot" [PAGE 1]—functions as an external working-memory extender: the summary compresses card entropy, the single next action collapses the policy space to one executable primitive, the trust note reduces epistemic uncertainty, and the media/visual slot offloads processing from the verbal channel to the visual channel (dual coding), thereby lowering extraneous load.

Hop three addresses implementation constraints explicitly enumerated in [PAGE 1]: "Add mobile and reduced-motion behavior." This invokes the operating-system media query prefers-reduced-motion: reduce. If the build ignores this signal, it exposes vestibular-vulnerable users to discomfort and violates accessibility acceptance criteria. The same page requires that "help text sounds human," which is a register constraint excluding legalese, machine-translation cadence, or promotional hyperbole. Hop four concerns the legal and method boundary. [PAGE 1] prohibits "founder-only methodology leakage" and "fake certainty," and requires that "Promotions/risk surfaces need clear disclosures and responsible-play-safe copy." If the media/visual slot reveals proprietary GSE methodology or implies deterministic outcomes, the build violates its own boundary and must be rolled back. The rollback plan is explicit: "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes" [PAGE 1]. This means the help component must be isolatable; it cannot write to billing tables, alter secrets, or toggle launch gates.

Hop five closes the loop with QA and analytics. [PAGE 1] lists "visual screenshot QA, mobile readability checks, copy audit, reduced-motion check, and help coverage scan." Each maps to an acceptance criterion: 10-second comprehension, help affordance, human copy, media/visual path, and protected method boundaries. Gray-zone audit reveals two risks. First, the duplicate gate flags this as an EXTENSION of matched_existing_ids: BUILD-087, with reason_not_duplicate stating the motion explainer focuses on "10-second comprehension and contextual help coverage, not generic help docs" [PAGE 1]. Scope creep into generic help documentation would contradict this boundary and create one-off explanations rather than the repeatable pipeline promised in the Internal Value section. Second, analytics instrumentation must remain sterile: it may not capture user identifiers, bet-related metadata, or any signal that touches billing, secrets, or launch gates, because the Claude Code prompt forbids changes to those surfaces. The help coverage scan must therefore measure presence and latency of help affordances, not user behavior that could be repurposed for profiling.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let C denote the state space of a complex GSE card, with Shannon entropy H(C) measured in bits. Let the user's sensory-cognitive channel capacity be γ in bits/s. The comprehension condition imposed by [PAGE 1] is that, within T_max = 10 s, the residual uncertainty after exposure to the help explainer H must fall below a tolerance ε:

\[
H(C \mid \mathcal{H}) \leq \varepsilon, \qquad T \leq T_{\text{max}} = 10\,\text{s}
\]

Therefore the required average informational throughput of the explainer is:

\[
\dot{I} = \frac{I(C; \mathcal{H})}{T} \geq \frac{H(C) - \varepsilon}{10\,\text{s}} \quad [\text{bits/s}]
\]

Assumptions: attention is stationary over the 10-second window; no interruption occurs; the help modality is matched to the user's sensory channel. Singularity/breakdown regime: if H(C) − ε > γ · 10 s, comprehension is impossible within the bound regardless of UI polish; the card itself must be simplified rather than the help layer improved.

For the single next action prescribed by [PAGE 1], the Hick–Hyman choice-reaction time among n alternatives is:

\[
RT = a + b \log_2(n+1) \quad [\text{s}]
\]

The explainer must collapse n to 1 so that \log_2(2) = 1 bit of decision cost; breakdown occurs as n → ∞ or when priors are non-uniform, requiring the weighted entropy form RT = a + b H({p_i}).

For the mobile help affordance, Fitts's Law gives movement time:

\[
MT = a + b \log_2\left(\frac{D}{W} + 1\right) \quad [\text{s}]
\]

where D is distance in CSS pixels or centimeters and W is target width in the same units. Singularity: W → 0. Accessibility veto threshold: W < 44 CSS px (Apple HIG) or 48 dp (Material) fails motor accessibility on mobile.

Cognitive load decomposition, with units of working-memory chunks relative to C_WM ≈ 4 ± 1:

\[
\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{intrinsic}} + \mathcal{L}_{\text{extraneous}} + \mathcal{L}_{\text{germane}}
\]

Breakdown: \mathcal{L}_{\text{total}} > C_{\text{WM}} produces comprehension failure. Extraneous load from motion is parameterized by angular frequency \omega = 2\pi f; the vestibular discomfort band is f ∈ [0.2, 0.5] Hz. On prefers-reduced-motion: reduce, the motion operator is set to \mathcal{M} := \emptyset (static or crossfade only).

Visual readability for human copy follows the WCAG relative-luminance contrast formalism:

\[
\frac{L_{\text{light}} + 0.05}{L_{\text{dark}} + 0.05} \geq 4.5
\]

dimensionless, for normal text; breakdown (visual veto) occurs below 4.5:1. All requirements above are sourced from [PAGE 1], including the verbatim mandates "Add mobile and reduced-motion behavior," "one short summary, one next action, one trust note, and one media/visual slot," and the rollback constraint "No data or billing changes."
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The motion explainer slot sits in a historical lineage of contextual help and onboarding patterns. The earliest prominent failure mode was Microsoft Clippy (1997): an intrusive, agent-like helper with no graceful dismissal, high extraneous load, and low user agency. Modern descendants include empty-state coach marks, product tours, and tooltip overlays used by major social platforms. Within GSE, BUILD-HELP-008 explicitly extends existing onboarding/help/video/copy queue item BUILD-087, as recorded in the duplicate gate: matched_existing_ids: BUILD-087 [PAGE 1]. The stated relation is an extension with page-level teachability, and the reason_not_duplicate insists the motion explainer focuses on "10-second comprehension and contextual help coverage, not generic help docs" [PAGE 1]. This distinguishes it from generic documentation and anchors it to a specific product surface: all complex cards.

Multi-week traps emerge from this lineage. Week 1 typically shows a novelty effect: users click the help affordance once, then ignore it, causing engagement metrics to decay even if comprehension is initially high. Week 3 brings help fatigue: if the copy does not "sound human" [PAGE 1] or the next action is vague, users dismiss the explainer and do not return to it. Week 6 produces regression to support tickets and churn, which the mandated "help coverage scan" [PAGE 1] must detect by identifying dark patterns where a help affordance exists visually but is non-functional or missing a next action. A structural trap warned against in the Internal Value section is building one-off explanations instead of a repeatable help asset pipeline for Galaxy Studios, support, product, and growth teams [PAGE 1]. Without a pipeline, voice, timing, and media quality diverge across cards, eroding the trust-safe path the spec requires.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Three agents recursively model one another: Product (P), User (U), and Support (S). P models U as needing comprehension within T_max = 10 s and builds the help affordance accordingly. U models P's intent through the presence or absence of a trust note, a singular next action, and a media/visual slot. S models both P and U when support tickets arrive, inferring whether the help layer failed or was never consulted.

Crisis habit regression occurs when U experiences cognitive overload or vestibular discomfort: under stress, U regresses to the lowest-effort habit—closing the app, contacting support, or churning—thereby bypassing the automated help layer entirely and collapsing the system back to human-mediated resolution. The counter-trap is the designer's assumption that "if we build help, users will use it." Users use help only when the trust note is present, the next action is singular and visible within the 10-second clock, and the media path is trust-safe per [PAGE 1]. Without trust, the explainer is perceived as promotional noise and is dismissed.

The clock is the dominant recursive constraint. Analytics events must be timestamped: help_impression at t_0 and a comprehension signal (e.g., next-action tap or scroll-past) at t_1, with the pass condition t_1 − t_0 ≤ 10 s. The reduced-motion preference acts as a system-level interrupt: when the OS signals prefers-reduced-motion: reduce, the motion layer halts immediately, overriding any scheduled animation. If the clock is exceeded or the interrupt is ignored, the recursive model breaks: U no longer believes P can deliver value in 10 seconds, and the help affordance loses its affordance status, becoming decorative rather than functional.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: device screen density, ambient luminance, and touch-target geometry. A visual veto triggers if WCAG contrast falls below the formal threshold (L_light + 0.05)/(L_dark + 0.05) < 4.5 for normal text, or if the help affordance tap target W < 44 CSS px on mobile, violating Fitts's Law motor-accessibility bounds. Biomechanical layer: vestibular disorders, photosensitive epilepsy, and fine-motor impairment. A hard veto triggers if autoplay motion occupies the discomfort band f ∈ [0.2, 0.5] Hz, if flashes exceed WCAG 2.3 thresholds, or if the build ignores prefers-reduced-motion: reduce, which is a non-negotiable override per [PAGE 1] ("Add mobile and reduced-motion behavior"). Weather/environmental layer: interpreted here as ambient operating context—glare, low-light, and use-in-transit—rather than any meteorological betting variable. If environmental luminance renders copy unreadable despite dark-mode support, a visual/readability veto applies.

Adjudication rule: any single layer veto blocks launch. The rollback path specified in [PAGE 1] is to remove the isolated component/content entry or hide it behind a feature flag, with no data or billing changes. Because the component must be isolatable, the veto mechanism does not require regression of adjacent surfaces; the feature flag or content removal is sufficient to restore the pre-build state across physical, biomechanical, and environmental layers simultaneously.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario A: The motion explainer autoplays on card load without consulting prefers-reduced-motion: reduce, exposing vestibular-vulnerable users to motion in the f ∈ [0.2, 0.5] Hz discomfort band. Veto trigger: biomechanical/accessibility layer plus explicit [PAGE 1] reduced-motion requirement. Verifiable prediction: screenshot QA fails the reduced-motion check; task completion within T_max = 10 s drops by at least 15% for the affected cohort; support tickets citing motion discomfort or distraction increase above baseline.

Scenario B: The media/visual slot or summary copy leaks founder-only GSE methodology or uses deterministic/fake-certainty language, breaching the [PAGE 1] method boundary ("No founder-only methodology leakage. No fake certainty.") Veto trigger: legal/method-boundary layer. Verifiable prediction: legal and responsible-play review blocks release; if shipped despite review, brand-trust metrics decline and disclosure obligations on promotions/risk surfaces are unmet.

Scenario C: The mobile help affordance is absent, the target width W < 44 CSS px, or no singular next action is visible within 10 seconds. Veto trigger: physical/motor layer and Hick-Hyman decision-cost bound. Verifiable prediction: the help coverage scan reports a missing or non-functional affordance; mobile task-failure rate rises; copy audit flags non-human register; the feature-flag rollback restores baseline without data or billing impact, consistent with the [PAGE 1] rollback plan.
</RLVR_COUNTERFACTUAL_VETOES>