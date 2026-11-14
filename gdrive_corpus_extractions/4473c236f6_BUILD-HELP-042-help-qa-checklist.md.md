---
source: "BUILD-HELP-042-help-qa-checklist.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/help-education-ux/claude-build-queue/cards"
pages: 1
model: nvidia_2:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5004
---

<NATIVE_REASONING>
The user has provided a source document about a "Help QA checklist" for Galaxy Sports Edge (GSE) / GSN. They want me to act as the GSE + GSI Frontier Reasoning Foundry and follow strict invariants.

Let me analyze what's being asked:

1. STRICT INVARIANTS:
   - ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
   - ZERO TOY EQUATIONS: No fake ratios like Force / Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
   - >= 1,000-WORD DEPTH across exact XML sections:
     - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
     - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
     - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
     - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
     - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
     - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided a source document about a Help QA checklist, but the invariant requirements ask for things like betting lines (which are forbidden), toy equations, biomechanical/weather vetoes, RLVR veto scenarios, etc. This seems like a mismatch - the source text is about a help QA checklist for a product, but the required output sections seem to be designed for sports analysis or physical systems.

I need to reconcile these. The user wants me to process this source document through the GSE + GSI Frontier Reasoning Foundry framework. I must:
- Not mention betting lines (spreads, totals, moneylines, odds) - easy since the source doesn't have them.
- Not invent fake ratios. Use formal LaTeX, SI/information/probability units, assumptions, breakdown regimes.
- Cite [PAGE 1] since only 1 page is provided.
- Produce >= 1000 words across the exact XML sections.

The challenge is that sections like <CROSS_LAYER_VETO_ADJUDICATION> (physical/biomechanical/weather veto proof) and <RETROCAUSAL_GENEALOGY> (historical/scientific lineage) seem odd for a help QA checklist document. However, I must treat this as a "frontier reasoning" exercise where I apply the foundry's analytical framework to the source document. I can interpret these sections metaphorically or technically in the context of software/documentation systems:

- THINK_TRACE: Deep multi-hop derivation about the help QA checklist, gray-zone audit (e.g., what counts as "human copy," boundary between help and methodology leakage).
- SOURCE_OPERATORS_AND_EQUATIONS: Formalize the 10-second comprehension requirement, information theory (bits, Shannon entropy), readability metrics, Flesch-Kincaid, Hick's Law, etc. Use LaTeX. Cite [PAGE 1].
- RETROCAUSAL_GENEALOGY: Historical lineage of help systems, QA checklists, documentation patterns (e.g., minimalism, Carroll's minimalism, John Carroll, IBM, Apple HIG), multi-week traps (rollback debt, feature flag accumulation).
- RECURSIVE_THEORY_OF_MIND: Crisis habit regression (teams reverting to one-off explanations under deadline pressure), counter-trap (over-documentation causing cognitive load), clock (10-second comprehension window).
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof - reinterpret as software layers: physical (device hardware, screen size, motion sensors), biomechanical (thumb zone, motor control, reduced motion), weather (network conditions, environmental context). Veto proof means identifying conditions where the help pattern must be vetoed.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards?) veto scenarios + predictions. For example: (1) reduced-motion preference vetoes animation, (2) mobile readability fails at small viewport, (3) proprietary methodology leakage triggers legal veto.

I need to make sure I don't mention betting lines. The source doesn't have them, so that's fine.

I need to ensure >= 1000 words total across sections, with THINK_TRACE >= 400 words.

Let me plan the content:

**<THINK_TRACE> (>=400 words)**
- Multi-hop derivation: The source doc (BUILD-HELP-042) specifies a 10-second comprehension requirement. Hop 1: Users need value in 10 seconds (from "Why It Matters"). Hop 2: This implies an information throughput bound. Hop 3: The help pattern must include summary, next action, trust note, media/visual (from Implementation Plan). Hop 4: Acceptance Criteria map to testable properties (10-second understanding, help affordance, human copy, media path, method boundaries). Gray-zone audit: "human copy" is subjective; "method boundaries" could leak proprietary methodology if the help text explains too much; "trust-safe media" needs definition; feature flag rollback vs isolated component removal. Also gray zone: distinguishing "help/aesthetic coverage system" from generic help docs (duplicate gate). The duplicate gate says NET_NEW because it focuses on 10-second comprehension and contextual help coverage, not generic help docs. But gray zone: where does contextual help end and generic documentation begin?

**<SOURCE_OPERATORS_AND_EQUATIONS>**
- Formalize 10-second comprehension: T_comprehend <= 10 s.
- Information theory: H(X) <= C * T, where C is channel capacity (bits/sec). For reading, average ~200-250 wpm, but for comprehension with visuals, maybe less. Use bits: N_bits <= R_read * T_10s.
- Readability: Flesch-Kincaid Grade Level GL <= 8 (human copy, accessible).
- Hick's Law: T_decision = a + b * log2(n+1) for next action choices; n should be small (ideally 1 primary next action).
- Trust note probability: P_trust = f(disclosure, disclosure_presence). Binary disclosure variable.
- Media/visual slot: mutual information I(Visual; Text) should be high (redundancy for accessibility).
- Reduced-motion: prefers-reduced-motion media query -> motion_op = 0.
- Units: seconds (s), bits, words per minute (wpm), grade level (dimensionless), pixels (px), contrast ratio (dimensionless, WCAG 4.5:1).
- Page citation: [PAGE 1] for all source quotes.
- Verbatim quotes: "Users need to find value in 10 seconds", "one short summary, one next action, one trust note, and one media/visual slot", etc.
- Breakdown regimes: singularity when T_comprehend > 10s; when n_next_actions > 1 causes paralysis; when reduced-motion is ignored causing vestibular issues; when method boundary leaks proprietary IP.

**<RETROCAUSAL_GENEALOGY>**
- Historical lineage: Minimalist documentation (John Carroll, 1990s), Apple Human Interface Guidelines, Microsoft Manual of Style, GOV.UK design principles (user needs), content design (Sarah Richards). Help affordance traces to Don Norman (affordances, 1988). Progressive disclosure. QA checklist lineage from software release QA.
- Multi-week traps: Feature flag debt (flags left indefinitely), component bloat (adding help patterns without removal criteria), copy drift (help text becomes outdated as UI changes), analytics phantom metrics (tracking without decision rules), accessibility regression (new components break screen readers).

**<RECURSIVE_THEORY_OF_MIND>**
- Crisis habit regression: Under deadline pressure, product/support teams revert to one-off explanations, long FAQ documents, founder-only methodology leaks (because quick fixes feel faster). This regresses to pre-checklist state.
- Counter-trap: Over-correcting by adding help to every surface, creating "help clutter" and increasing cognitive load; or making help text so cautious it becomes useless.
- Clock: The 10-second comprehension window is the forcing function. If the team cannot verify comprehension in 10 seconds, the item fails acceptance. The clock creates a deadline pressure that triggers regression.

**<CROSS_LAYER_VETO_ADJUDICATION>**
- Physical layer: Device screen size (< 360px width), low DPI, small touch targets. Veto if help affordance cannot be tapped (WCAG 2.4.11 focus appearance, 2.5.5 target size 24x24 CSS px).
- Biomechanical layer: Thumb zone reachability, motor impairment, reduced motion (vestibular disorders). Veto if animation/parallax triggers motion sickness without reduced-motion alternative.
- Weather/Environmental layer: Reinterpret as environmental context: low light (glare), bright sunlight (contrast), high cognitive load (walking, distracted), poor network (video won't load). Veto if media/visual slot depends on high-bandwidth video with no fallback table/example/text.
- Veto proof: The system must have a fallback path (text example or table) when visual media fails. Veto conditions must be explicit in QA.

**<RLVR_COUNTERFACTUAL_VETOES>**
- 3 verifiable veto scenarios:
  1. Reduced-motion preference set at OS level; component plays autoplay animation. VETO: Animation must respect prefers-reduced-motion; fallback to static visual. Prediction: Without fix, fails accessibility audit and causes vestibular harm.
  2. Mobile viewport width <= 320px; help text wraps such that next action CTA is below fold or tap target < 44x44 pt (iOS) / 48x48 dp (Android). VETO: Component hidden or restructured. Prediction: Comprehension time exceeds 10s; user abandons.
  3. Help copy references proprietary founder methodology or internal algorithms. VETO: Legal/method boundary violation; content must be removed or replaced with non-proprietary summary. Prediction: Rollback triggered via feature flag; no data/billing changes.

Need to ensure total words >= 1000. Let me draft carefully, ensuring each section is substantial.

Also, I must include [PAGE 1] citations and verbatim quotes from the source.

The source text quotes I can use:
- "Users need to find value in 10 seconds."
- "GSE is proprietary and complex, so every major item needs an immediate explanation, a next action, and a trust-safe media or visual path."
- "Add or specify the smallest help pattern for the target surface."
- "Include one short summary, one next action, one trust note, and one media/visual slot."
- "A new user understands the item in 10 seconds."
- "The item has a help affordance."
- "The help text sounds human."
- "There is a video, motion, table, visual, or example path."
- "Method boundaries are protected."
- "duplicate_check_status: NET_NEW"
- "Help QA checklist focuses on 10-second comprehension and contextual help coverage, not generic help docs."
- "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes."
- "Run visual screenshot QA, mobile readability checks, copy audit, reduced-motion check, and help coverage scan."

No betting lines. No toy equations like Force/Fatigue. Use real formalisms: Shannon entropy, Hick's Law, Fitts's Law (touch targets), WCAG contrast ratios, Flesch-Kincaid.

Let's write it out.

Word count planning:
- THINK_TRACE: ~450-500 words.
- SOURCE_OPERATORS_AND_EQUATIONS: ~300-350 words.
- RETROCAUSAL_GENEALOGY: ~200-250 words.
- RECURSIVE_THEORY_OF_MIND: ~200-250 words.
- CROSS_LAYER_VETO_ADJUDICATION: ~200-250 words.
- RLVR_COUNTERFACTUAL_VETOES: ~200-250 words.
Total: ~1600-1850 words. Good.

I need to be careful about LaTeX formatting inside XML. It should be fine.

Let me write the final response. I'll wrap everything in the required XML sections. No extra text outside? The user said "across these exact XML sections" - I'll provide only those sections, or maybe a brief intro? Better to provide exactly the sections to be safe, but the user might expect just the sections. I'll provide the sections directly.

Let me draft each section.

**THINK_TRACE**:
Start by stating this is a deep multi-hop derivation on BUILD-HELP-042 [PAGE 1]. Hop through: goal -> why it matters -> implementation -> acceptance -> test -> rollback. Derive constraints. Gray-zone audit: "human copy" subjectivity, "trust-safe media" ambiguity, "method boundaries" vs proprietary leakage, duplicate gate NET_NEW vs generic help docs ambiguity. Discuss 10-second window as a hard real-time constraint. Mention that rollback plan says no data or billing changes, which isolates the blast radius. Gray zone: feature flag vs isolated component removal creates two rollback paths; if both exist, which takes precedence? Also gray zone: analytics and QA checks "where applicable" is non-deterministic.

**SOURCE_OPERATORS_AND_EQUATIONS**:
Define variables and equations.
- Comprehension time: \( T_{\text{comp}} \le 10\ \text{s} \) [PAGE 1].
- Reading channel: \( N_{\text{bits}} \le R_{\text{read}} \cdot T_{\text{comp}} \), where \( R_{\text{read}} \) in bits/s. For plain English prose, effective information rate ~ 10-50 bits/s (cite as assumption, not from source). With visual channel: \( I(\text{Visual};\text{Text}) \ge \tau \) (redundancy).
- Hick's Law for next action: \( T_{\text{action}} = a + b \log_2(n+1) \). To keep within 10s, \( n \le 1 \) primary next action [PAGE 1: "one next action"].
- Readability: Flesch-Kincaid Grade Level \( GL \le 8 \), assumed for "human" and accessible copy.
- Touch target: \( A_{\text{tap}} \ge 48 \times 48\ \text{dp} \) (Android) or \( 44 \times 44\ \text{pt} \) (iOS), assumption based on platform guidelines, not source.
- Contrast: \( CR \ge 4.5:1 \) for normal text (WCAG assumption).
- Reduced-motion: \( M_{\text{enabled}} = 0 \) if \( \text{prefers-reduced-motion} = \text{reduce} \).
- Trust note: binary disclosure variable \( D \in \{0,1\} \), require \( D=1 \) for promotions/risk surfaces [PAGE 1: Legal/Method Boundary].
- Singularity/breakdown: \( T_{\text{comp}} > 10\ \text{s} \) => fail acceptance. \( n > 1 \) => decision paralysis. Missing \( D \) on risk surface => legal veto. \( M_{\text{enabled}} = 1 \) under reduced-motion => accessibility veto.
Cite [PAGE 1] after quotes.

**RETROCAUSAL_GENEALOGY**:
Lineage: Carroll's Minimalism (1990), Norman's affordances (1988), Apple HIG, GOV.UK content design, progressive disclosure, release QA checklists. Multi-week traps: feature flag debt, help-component bloat, copy drift, analytics without decision rules, accessibility regression. Explain how the "10-second comprehension" requirement is a modern instantiation of minimalist training documentation.

**RECURSIVE_THEORY_OF_MIND**:
Crisis habit regression: under deadline, teams write long FAQs, leak methodology, skip visual path. Counter-trap: help clutter, over-disclosure, redundant media. Clock: 10-second window is the forcing function; if not met, recursive regression occurs. Model as fixed-point: compliance must be re-verified each release cycle or system drifts back to one-off explanations.

**CROSS_LAYER_VETO_ADJUDICATION**:
Physical: screen width < 360 px, low DPI, target size. Biomechanical: thumb zone, vestibular, motor. Weather/environmental: sunlight glare, low light, distracted walking, poor network. Veto proof: fallback table/example/text when video fails; reduced-motion static alternative; large tap targets. Explicit veto conditions.

**RLVR_COUNTERFACTUAL_VETOES**:
Three scenarios with predictions.

Let me now write the actual text, watching word counts.

I will not use markdown headers outside XML. I'll just output the XML sections.

Let's write.

Section 1: THINK_TRACE (>=400 words)

Section 2: SOURCE_OPERATORS_AND_EQUATIONS

Section 3: RETROCAUSAL_GENEALOGY

Section 4: RECURSIVE_THEORY_OF_MIND

Section 5: CROSS_LAYER_VETO_ADJUDICATION

Section 6: RLVR_COUNTERFACTUAL_VETOES

Make sure to cite [PAGE 1] for source claims.

Double check for betting lines: none.

Double check for toy equations: No Force/Fatigue. Using Hick's Law, Shannon-style bounds, WCAG, Flesch-Kincaid. These are real formalisms, not invented fake ratios. I should state assumptions clearly.

Let's write the content now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit of BUILD-HELP-042 [PAGE 1].

Hop 1: Goal and scope. The document defines a Help QA checklist for release QA [PAGE 1]. Its surface is narrow: every major item on the product surface needs an immediate explanation, a next action, and a trust-safe media or visual path [PAGE 1]. This is not a generic documentation mandate; the duplicate gate explicitly classifies the item as NET_NEW because the distinguishing factor is 10-second comprehension and contextual help coverage [PAGE 1].

Hop 2: The 10-second constraint as a hard real-time bound. The source states, "Users need to find value in 10 seconds" [PAGE 1]. The acceptance criterion restates this as "A new user understands the item in 10 seconds" [PAGE 1]. Because GSE is described as proprietary and complex [PAGE 1], the help layer cannot be a manual substitute; it must be a bounded, surface-local affordance. Derivation: if comprehension time T_comp exceeds 10 seconds, the acceptance criterion fails by definition. There is no grace period specified, which makes T_comp = 10 s a singularity boundary for pass/fail QA.

Hop 3: Component anatomy. Implementation Plan step 3 mandates "one short summary, one next action, one trust note, and one media/visual slot" [PAGE 1]. This is a four-tuple: (summary, next_action, trust_note, media_or_visual). The acceptance criteria decompose the tuple into testable propositions: help affordance exists; copy sounds human; a video, motion, table, visual, or example path is present; method boundaries are protected [PAGE 1]. The "human" criterion is not formally operationalized in the source, creating a gray zone between copy audit and subjective tone judgment.

Hop 4: Gray-zone audit. Gray zone A: "trust-safe media or visual path" [PAGE 1] is undefined. Does trust-safe mean no autoplay, no deceptive thumbnails, no personalized data in visuals, or all three? The Legal / Method Boundary section requires clear disclosures and responsible-play-safe copy on promotions/risk surfaces [PAGE 1], but it does not specify which surfaces are risk surfaces or what disclosure text must contain. Gray zone B: method-boundary protection [PAGE 1] prohibits founder-only methodology leakage [PAGE 1], yet the summary must explain a proprietary, complex system [PAGE 1]. The boundary between "immediate explanation" and "methodology leakage" is not drawn. Gray zone C: rollback offers two paths—remove the isolated component/content entry or hide it behind a feature flag [PAGE 1]. No precedence rule is given if both exist. Gray zone D: analytics and QA checks are added "where applicable" [PAGE 1], which is non-deterministic and creates audit escape hatches. Gray zone E: the duplicate gate claims distinction from generic help docs based on 10-second comprehension and contextual coverage [PAGE 1], but no threshold is provided for when contextual help becomes generic documentation, so future queues could argue overlap.

Hop 5: Test and rollback topology. Test Plan requires visual screenshot QA, mobile readability checks, copy audit, reduced-motion check, and help coverage scan [PAGE 1]. Rollback Plan explicitly excludes data and billing changes [PAGE 1], which isolates blast radius to UI/content only. This makes the component safely revertible but also means no telemetry backfill or financial reconciliation is required on removal. The foundry notes that if the help pattern is tied to a release gate rather than a feature flag, rollback may require a full release train rollback, contradicting the "isolated component" simplicity unless feature flags are used at the component level.

Conclusion: BUILD-HELP-042 establishes a bounded, testable help pattern with a strict 10-second comprehension clock, but several acceptance criteria (human copy, trust-safe media, method boundary, where-applicable analytics) lack operational thresholds, creating gray zones that must be resolved during implementation to avoid audit ambiguity.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes for BUILD-HELP-042 [PAGE 1].

All source references cite [PAGE 1], the sole provided page.

1. Comprehension-time operator. Let T_comp be the time for a new user to understand an item. Source acceptance criterion: "A new user understands the item in 10 seconds" [PAGE 1].
   Formal constraint:
   \[
   T_{\text{comp}} \le 10\ \text{s}
   \]
   Unit: seconds (s). Singularity/breakdown regime: T_comp > 10 s implies immediate acceptance failure. No grace period or averaging across users is specified in the source.

2. Information-channel bound. Let R_read be the effective human reading/information channel in bits per second (bits/s), and let N_bits be the information content of the help tuple (summary + next action + trust note + media caption). Assumption: R_read is operator-defined, not provided in source; a conservative plain-prose estimate is on the order of 10–50 bits/s depending on literacy and layout. Then:
   \[
   N_{\text{bits}} \le R_{\text{read}} \cdot T_{\text{comp}} \le R_{\text{read}} \cdot 10\ \text{s}
   \]
   Unit: bits. Breakdown regime: if N_bits exceeds this bound, comprehension cannot complete within the clock regardless of copy quality.

3. Visual-text redundancy. Let V be the media/visual slot content and T be the text summary. For accessibility and comprehension resilience, mutual information should satisfy:
   \[
   I(V;T) \ge \tau
   \]
   where \(\tau\) is a minimum redundancy threshold (dimensionless, in bits) set by QA. Source requires "a video, motion, table, visual, or example path" [PAGE 1], implying V must exist in at least one modality. Breakdown regime: I(V;T) ≈ 0 means the visual is decorative and provides no comprehension support.

4. Next-action selection (Hick's Law). Let n be the number of equally salient next actions offered. Decision time:
   \[
   T_{\text{action}} = a + b \log_2(n+1)
   \]
   Units: seconds (s); a and b are empirically fitted constants (s). Source mandates "one next action" [PAGE 1], implying n = 1 for the primary path. Breakdown regime: n > 1 introduces decision paralysis and risks violating T_comp ≤ 10 s.

5. Readability and human copy. Let GL be Flesch-Kincaid grade level (dimensionless). Assumption: "help text sounds human" [PAGE 1] maps to GL ≤ 8 for general consumer comprehension, with short sentences and active voice. Breakdown regime: GL > 10 or passive-voice density above threshold triggers copy-audit fail.

6. Touch-target biomechanics. Let A_tap be the help affordance tap area. Assumption (platform guidance, not source): A_tap ≥ 48 × 48 dp (Android) or 44 × 44 pt (iOS). Unit: density-independent pixels (dp) or points (pt). Breakdown regime: A_tap < minimum causes missed taps on mobile, failing mobile readability and help-affordance criteria.

7. Contrast ratio. Let CR be luminance contrast ratio between help text and background (dimensionless). Assumption: CR ≥ 4.5:1 for normal text per WCAG. Breakdown regime: CR < 4.5 fails mobile readability and reduced-motion/accessibility scan.

8. Reduced-motion operator. Let m ∈ {0,1} indicate whether animation/parallax is enabled. Let p ∈ {0,1} indicate the OS prefers-reduced-motion setting. Constraint:
   \[
   m = 0 \quad \text{if} \quad p = 1
   \]
   Unit: boolean. Source requires "Add mobile and reduced-motion behavior" [PAGE 1] and test plan includes "reduced-motion check" [PAGE 1]. Breakdown regime: m = 1 when p = 1 is an accessibility veto.

9. Trust/disclosure operator. Let D ∈ {0,1} indicate presence of a clear disclosure on promotions/risk surfaces. Source: "Promotions/risk surfaces need clear disclosures and responsible-play-safe copy" [PAGE 1]. Constraint: D = 1 on all risk surfaces. Breakdown regime: D = 0 on a promotion surface triggers legal/method-boundary veto.

10. Method-boundary operator. Let L ∈ {0,1} indicate leakage of founder-only methodology. Source: "No founder-only methodology leakage" [PAGE 1]. Constraint: L = 0. Breakdown regime: L = 1 requires content removal or feature-flag hide per Rollback Plan [PAGE 1]; no data or billing changes are involved.

Verbatim source anchors used above [PAGE 1]: "Users need to find value in 10 seconds"; "one short summary, one next action, one trust note, and one media/visual slot"; "A new user understands the item in 10 seconds"; "The item has a help affordance"; "The help text sounds human"; "There is a video, motion, table, visual, or example path"; "Method boundaries are protected"; "Add mobile and reduced-motion behavior"; "No founder-only methodology leakage"; "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes."
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage of the help QA checklist pattern, and multi-week operational traps.

The 10-second comprehension requirement descends from minimalist technical communication theory. John Carroll's minimalism (1990) argued that users learn software by doing, not by reading manuals, and that documentation should support immediate task completion with minimal reading load. BUILD-HELP-042 operationalizes this by demanding that every major item carry an immediate explanation, a next action, and a visual path [PAGE 1], echoing Carroll's principle that training materials must be tied to concrete user goals rather than abstract system description.

The "help affordance" criterion [PAGE 1] traces to Donald Norman's theory of affordances and signifiers (The Design of Everyday Things, 1988), where a perceived affordance tells the user what action is possible. The checklist converts this into a release-QA gate: if the item lacks a visible help entry point, it fails acceptance.

Progressive disclosure, originating in early graphical user interface research and codified in Apple's Human Interface Guidelines and later GOV.UK content design principles, underlies the requirement for "the smallest help pattern for the target surface" [PAGE 1]. The intent is to reveal only what is needed at the moment of decision, avoiding information overload.

Multi-week traps specific to this queue:

Trap 1 — Feature-flag debt. The Rollback Plan permits hiding content behind a feature flag [PAGE 1]. Over weeks, teams may forget to remove flags, leaving dead help components in the codebase. Because rollback excludes data and billing changes [PAGE 1], there is no automatic cleanup trigger, so flags can persist indefinitely.

Trap 2 — Help-component bloat. The implementation plan says to add the smallest help pattern [PAGE 1], but without a removal cadence, each release can accrete new tooltips, modals, and visual slots. Over multiple weeks, the cumulative cognitive load violates the 10-second clock even if each individual component passes QA.

Trap 3 — Copy drift. Help text that sounds human at authoring time [PAGE 1] becomes stale as the UI changes. Without a scheduled copy audit tied to release cycles, the human-copy acceptance criterion degrades silently.

Trap 4 — Analytics without decision rules. Step 5 adds analytics "where applicable" [PAGE 1]. Over weeks, this produces telemetry dashboards with no pre-defined pass/fail thresholds, so QA cannot determine whether comprehension actually occurred within 10 seconds.

Trap 5 — Accessibility regression. Reduced-motion behavior is required [PAGE 1], but new animations added by other teams can override component-level settings, causing the reduced-motion check to fail in production weeks after initial QA pass.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and the 10-second clock as a forcing function.

Crisis habit regression. When product, support, and growth teams face a release deadline, the recursive habit is to revert to one-off explanations [PAGE 1: Internal Value describes the current state as "one-off explanations"]. Under pressure, writers produce long FAQ documents, embed proprietary methodology directly in UI copy to save time, and skip the media/visual slot because producing a video or table takes longer than writing a paragraph. This regresses the system to the pre-checklist state that BUILD-HELP-042 was designed to replace: Galaxy Studios, support, product, and growth teams lose the repeatable help asset pipeline and return to ad-hoc explanations [PAGE 1].

Counter-trap. The opposite over-correction is help clutter. A team that fears failing the 10-second criterion may add help patterns to every surface, duplicate the summary in multiple modalities, and stack trust notes and next actions. This increases n in Hick's Law [SOURCE_OPERATORS_AND_EQUATIONS] and raises N_bits beyond the information-channel bound for T_comp ≤ 10 s. The counter-trap converts a comprehension aid into a cognitive-load barrier, making the item harder to understand, not easier.

The clock. The 10-second comprehension window [PAGE 1] functions as a hard clock that terminates recursive regression. If the team cannot demonstrate that a new user understands the item within 10 seconds, the acceptance criterion fails [PAGE 1], and the item must be removed or flagged [PAGE 1]. The clock forces a fixed-point evaluation each release: either the four-tuple (summary, next action, trust note, media/visual) is verified within the bound, or the component does not ship. Because rollback carries no data or billing changes [PAGE 1], the cost of failing the clock is low, which should encourage compliance; however, the absence of an automated comprehension timer means teams may self-report T_comp without measurement, allowing regression to hide behind unverified claims.

Recursive model. Let C_t be compliance at release t. C_t = 1 if all six acceptance criteria pass and T_comp ≤ 10 s; otherwise C_t = 0 and rollback executes. Without a measurement hook in the test plan [PAGE 1], C_t is unobserved between releases, and the system drifts toward C = 0. The foundry prescribes instrumenting the clock so that compliance is observable, not assumed.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof for the help QA pattern.

Physical layer (device and display). Minimum supported viewport width, screen density, and touch-surface geometry determine whether the help affordance is physically reachable. If the target screen width is below ~360 CSS pixels, a side-panel help pattern may collapse or push the next action below the fold. Veto condition: if the help affordance or next-action CTA cannot be fully visible and tappable within the smallest supported viewport without horizontal scrolling, the component is vetoed for that breakpoint. Assumption: platform minimum touch target of 48 × 48 dp / 44 × 44 pt applies; source does not specify dimensions, so this is an external constraint imposed on implementation.

Biomechanical layer (motor and vestibular). Reduced-motion behavior is explicitly required [PAGE 1], and the test plan includes a reduced-motion check [PAGE 1]. Users with vestibular disorders may experience nausea from motion, parallax, or autoplay video. Veto condition: if the media/visual slot plays animation when the operating system signals prefers-reduced-motion, the component fails accessibility and is vetoed until a static fallback (table, visual, or example path) is substituted. Motor impairment also requires that help affordances be large enough and spaced enough to activate without precision grip; undersized tap targets trigger a biomechanical veto.

Environmental layer (weather-analog context). "Weather" here denotes the user's situational context: bright sunlight causing glare, low-light environments, distracted walking, and poor network bandwidth. A video media slot [PAGE 1] is bandwidth-dependent and may fail to load on constrained networks. Veto condition: if the media/visual slot depends on a high-bandwidth video with no text, table, or static-image fallback, the component is vetoed for low-bandwidth or offline states. Glare and low light impose a contrast-ratio veto: if help text contrast falls below 4.5:1 under ambient-light variation, the item fails mobile readability.

Veto proof architecture. Each help component must declare its fallback chain explicitly: (1) primary media/visual, (2) static alternative, (3) text-only example or table. The QA check must verify all three links in the chain under reduced-motion, small-viewport, low-contrast, and offline conditions. Because rollback removes or feature-flags the isolated component without data or billing changes [PAGE 1], a vetoed layer can be disabled independently of the host feature, satisfying the Rollback Plan's isolation guarantee.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable Reinforcement Learning from Verifiable Rewards (RLVR) veto scenarios with counterfactual predictions.

Scenario 1: Reduced-motion override.
Setup: A user has prefers-reduced-motion enabled at the OS level. The help component's media slot contains an autoplay animated illustration that does not respect the setting.
Veto rule: m = 1 while p = 1 violates the reduced-motion operator [SOURCE_OPERATORS_AND_EQUATIONS]. The component is vetoed and replaced with a static visual or table.
Counterfactual prediction: If the veto is not enforced, the accessibility audit fails and the user experiences vestibular discomfort. With the veto, comprehension shifts to the static fallback path and T_comp remains measurable within the 10-second clock; without it, T_comp becomes undefined because the user aborts the interaction.

Scenario 2: Mobile viewport tap-target failure.
Setup: The help affordance is rendered as a 32 × 32 dp icon-link on a 320 dp-wide mobile viewport, below the assumed 48 × 48 dp minimum.
Veto rule: A_tap < 48 × 48 dp triggers a biomechanical/physical veto. The help entry point is hidden or restyled until the target meets the minimum.
Counterfactual prediction: If shipped, mobile users miss the affordance, the help coverage scan fails, and the item does not meet the "item has a help affordance" criterion [PAGE 1]. With the veto, the affordance is resized and the screenshot QA and mobile readability checks pass; without it, rollback via feature flag is required post-release, incurring a hotfix cycle.

Scenario 3: Proprietary methodology leakage.
Setup: The help summary for a complex GSE feature includes a description of the founder-only proprietary algorithm to explain "why it matters" [PAGE 1].
Veto rule: L = 1 (founder-only methodology leakage) triggers a method-boundary veto [SOURCE_OPERATORS_AND_EQUATIONS]. The content is removed or hidden behind a feature flag per the Rollback Plan [PAGE 1]; no data or billing changes occur.
Counterfactual prediction: If shipped, the Legal / Method Boundary is breached [PAGE 1], requiring emergency content removal and potential reputational risk. With the veto, the summary is rewritten to a non-proprietary immediate explanation that preserves the next action and trust note; T_comp remains within 10 seconds because the removed content was not required for comprehension. Counterfactual outcome: the duplicate gate's NET_NEW status [PAGE 1] is preserved because the help pattern remains distinct from generic documentation while staying within legal boundaries.
</RLVR_COUNTERFACTUAL_VETOES>