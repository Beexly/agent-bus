---
source: "BUILD-HELP-032-return-user-what-s-new-coachmark.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/help-education-ux/claude-build-queue/cards"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5007
---

<NATIVE_REASONING>
The user is asking me to act as the "GSE + GSI Frontier Reasoning Foundry" and process a source document about a build task (BUILD-HELP-032: Return-user what's new coachmark). However, there's a mismatch: the user provided a product/build spec document, but the system prompt requires me to output specific XML sections with deep reasoning, formal equations, historical lineage, theory of mind, veto adjudication, and RLVR counterfactual vetoes.

This is a bit unusual because the source text is a software build ticket/documentation, not a sports analysis or scientific paper. But I need to follow the STRICT INVARIANTS:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>

I need to treat the source document as "PAGES: 1" and cite [PAGE 1] with verbatim quotes. I need to analyze this build ticket through the lens of the Frontier Reasoning Foundry, which seems to be a meta-reasoning framework applied to whatever input is given.

Since this is a help/education UX build task, I should analyze it formally:
- Information theory: comprehension time, entropy of UI, mutual information between coachmark and user action
- Human factors: 10-second comprehension constraint, Fitts's Law, Hick's Law, reduced motion accessibility
- Software engineering: feature flags, rollback, QA, analytics
- Biomechanical/physical: mobile readability, touch targets, reduced motion (vestibular disorders)
- Recursive theory of mind: user modeling, what the user thinks the coachmark means, crisis habit regression (users reverting to old habits when confused), counter-traps (dark patterns vs trust-safe copy), clock (10-second window)

Let me structure this carefully.

Page citation: [PAGE 1] since only 1 page. Verbatim quotes from the source text.

Key verbatim quotes to use:
- "Users need to find value in 10 seconds."
- "GSE is proprietary and complex, so every major item needs an immediate explanation, a next action, and a trust-safe media or visual path."
- "home" and "Player Lab" as product surfaces.
- "No founder-only methodology leakage. No fake certainty."
- "A new user understands the item in 10 seconds."
- "Priority: P1", "Difficulty: S"
- "Rollback Plan: Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes."

Formal equations: I can use information theory and human-computer interaction formalisms, but NOT toy equations. I should use real formalisms:
- Shannon entropy: H(X) = -Σ p(x) log₂ p(x)
- Channel capacity / comprehension rate: C = B log₂(1 + S/N) maybe not appropriate but can frame as information rate.
- Hick's Law: T = b log₂(n + 1) for decision time.
- Fitts's Law: MT = a + b log₂(D/W + 1) for movement time.
- Accessibility: reduced motion preference media query: @media (prefers-reduced-motion: reduce)
- Probability of successful comprehension within time t: P(T_comprehension ≤ 10s) ≥ threshold (maybe 0.90 or similar, but must state assumptions).
- Feature flag gating: indicator function 1[flag_enabled] for rollback.

Breakdown regimes: when cognitive load exceeds working memory (Miller's 7±2, or Cowan's 4±1), when animation triggers vestibular disorders, when copy readability exceeds grade level, when 10-second window is violated.

I need >=1000 words total across sections. THINK_TRACE alone >=400 words.

Let me draft each section.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss:
- The 10-second comprehension constraint as a hard real-time cognitive deadline.
- Multi-hop: User sees coachmark → parses copy → maps to mental model → identifies next action → executes. Each hop consumes time and working memory.
- Gray zones: "trust-safe media" ambiguity, "human copy" subjectivity, "10 seconds" measurement methodology (start/end events), "proprietary and complex" boundary vs "No founder-only methodology leakage."
- Potential failure modes: coachmark becomes noise, banner blindness, motion sickness from animations, disclosure requirements conflicting with brevity.
- Cite [PAGE 1].

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- Define comprehension random variable T_c.
- Constraint: P(T_c ≤ τ) ≥ 1 - α, τ = 10 s.
- Information density: I = H(X) / T_c bits/second (Shannon).
- Hick-Hyman law for choice reaction time if multiple next actions: T = b log₂(n+1). Here n should be 1 (one next action).
- Fitts's Law for touch target: MT = a + b log₂(D/W + 1).
- Accessibility constraint: prefers-reduced-motion → motion amplitude A → 0 or static fallback.
- Rollback operator: R = 1[¬feature_flag] · Remove(component).
- Breakdown regimes: cognitive overload when H(X) > C_working_memory, motion sickness when frequency f in vestibular range ~0.2-0.5 Hz, etc.
- Units: seconds, bits, bits/second, dimensionless log terms, radians or pixels for visual angle maybe.
- Cite [PAGE 1].

RETROCAUSAL_GENEALOGY: Historical lineage.
- Coachmarks/overlays lineage: Microsoft Clippy (1997), early mobile onboarding tours, Material Design component guidance, Apple HIG.
- Help affordance lineage: tooltips, inline help, progressive disclosure (Carroll 1990 minimal manual).
- Multi-week traps: if deployed without feature flag, becomes technical debt; if copy not audited, accumulates "help debt"; if media missing, accessibility scan fails; repeated coachmarks cause banner blindness over weeks (habituation).
- Cite [PAGE 1] for product surface and acceptance criteria.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- User's model: "This is an interruption" vs "This is helpful."
- First-order: User reads coachmark. Second-order: User thinks about what the designer wants them to do. Third-order: User wonders if coachmark is a dark pattern/ad.
- Crisis habit regression: When confused under time pressure, users revert to previous interaction habits (e.g., closing overlay without reading), ignoring coachmark.
- Counter-trap: Designing coachmark to look like a system alert to force attention (manipulative) vs trust-safe copy (transparent). The counter-trap is using urgency language to bypass comprehension.
- Clock: 10-second hard deadline. If user hasn't comprehended by t=10s, value is lost; coachmark becomes an obstruction (increases T_c for primary task).
- Cite [PAGE 1].

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical layer: Mobile screen dimensions, touch target size ≥ 9mm (≈44px iOS, 48dp Android), contrast ratio WCAG 2.1 AA 4.5:1.
- Biomechanical layer: Reduced motion for vestibular disorders, animation duration, no flashing >3Hz (seizure risk).
- Weather/environmental layer: Glare, sunlight readability, low brightness, one-handed use (thumb zone), mobility context (walking).
- Veto conditions: any layer fails → component does not ship.
- Cite [PAGE 1] for mobile and reduced-motion behavior.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- Scenario 1: Animation triggers vestibular discomfort. Prediction: increased support tickets mentioning dizziness/motion, reduced-motion QA failure.
- Scenario 2: Copy exceeds 10-second comprehension (measured by time-to-dismiss or task completion). Prediction: P(T_c > 10s) > 0.20 violates acceptance criterion.
- Scenario 3: Missing trust disclosure or "human copy" fails audit. Prediction: legal/method boundary violation, rollback required.
- Each with verifiable checks and predictions.

Total word count needs to be >=1000 across sections. Let me write extensively.

Need to be careful: "ZERO TOY EQUATIONS" means no fake ratios like Force/Fatigue. But formal LaTeX equations from information theory/HCI are fine if stated with assumptions and units.

Also "Never mention spreads, totals, moneylines, or odds." The source is about coachmarks, so betting lines shouldn't appear anyway. I won't mention them.

Citations: [PAGE 1] with verbatim quotes. Since only 1 page provided, I'll cite [PAGE 1] throughout.

Let me start writing.

Word count check: I'll aim for ~1500-2000 words total to be safe.

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

I need to include exact [PAGE 1] markers and verbatim quotes.

Let me draft content now.

---

THINK_TRACE draft:

The source document BUILD-HELP-032 specifies a return-user "what's new" coachmark for GSE. Hard constraints from [PAGE 1]: "Users need to find value in 10 seconds." and "GSE is proprietary and complex, so every major item needs an immediate explanation, a next action, and a trust-safe media or visual path."

Multi-hop derivation:
Hop 1: Perception. The user must detect the coachmark on home or Player Lab surfaces. This is governed by visual salience and contrast. If the coachmark blends into the design system, detection latency T_detect dominates.
Hop 2: Parsing. The copy must be "human" (verbatim from acceptance criteria [PAGE 1]). Reading speed for mobile is approximately 200-250 WPM but skimming is faster. For a 10-second budget, copy length must be bounded. Let L be character count. At average mobile skimming rate v_s ≈ 4-5 characters/second (conservative under divided attention), L_max ≈ v_s × 10 s ≈ 40-50 characters for pure reading, leaving no time for interpretation. Therefore the summary must be shorter, or the user must already recognize keywords.
Hop 3: Semantic mapping. The user maps the new item to an existing mental model of GSE. Because GSE is proprietary and complex [PAGE 1], the mapping is nontrivial. If the coachmark references founder-only methodology, it violates the legal/method boundary: "No founder-only methodology leakage. No fake certainty." [PAGE 1]
Hop 4: Action selection. One next action must be specified [PAGE 1]. Hick-Hyman law: if more than one action is presented, decision time increases logarithmically with n. n=1 is the only safe choice under a 10-second deadline.
Hop 5: Execution. The user performs the next action on home or Player Lab.

Gray-zone audit:
- "trust-safe media or visual path": What defines trust-safe? Is it the absence of betting-promotion language? Responsible-play-safe copy? The boundary is undefined in [PAGE 1] except by reference to disclosures.
- "10 seconds": Measured from what event? Coachmark render? First paint? User gaze fixation? Without an operational definition, QA cannot verify acceptance criterion "A new user understands the item in 10 seconds." [PAGE 1]
- "human copy": Subjective. Copy audit per test plan [PAGE 1] mitigates but does not formalize.
- Rollback: "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes." [PAGE 1] This is clean because the coachmark is additive UI with no persistence layer dependency specified.

Potential failure: Coachmark becomes banner blindness after repeated exposure. Multi-week trap: if shown every session, users develop motor habit to dismiss without reading (crisis habit regression).

Word count so far: maybe ~350 words. Need >=400 for THINK_TRACE alone. I'll expand on information bottleneck and cognitive load.

SOURCE_OPERATORS_AND_EQUATIONS:
Define formal operators:
- Comprehension time T_c (seconds).
- Hard real-time constraint: P(T_c ≤ τ) ≥ 1 - α, with τ = 10 s [PAGE 1]. Assume α ≤ 0.10 (90% comprehension within deadline) unless product specifies otherwise.
- Shannon entropy of coachmark content X: H(X) = -Σ_{x∈X} p(x) log₂ p(x) [bits]. This is the information load.
- Effective comprehension rate: R_c = H(X) / E[T_c] [bits/second]. For successful onboarding, R_c must not exceed the user's channel capacity under divided attention C_u.
- Hick-Hyman decision time for n candidate next actions: T_H = b log₂(n + 1) [seconds], where b ≈ 0.15 s/bit for simple choice [assumption]. Requirement n = 1 → T_H = b log₂(2) = b ≈ 0.15 s, negligible. If n ≥ 2, T_H grows and jeopardizes the 10 s budget.
- Fitts's Law for touch target selection: MT = a + b log₂(D/W + 1) [seconds], where D is distance to target center, W is target width [pixels or mm]. Mobile accessibility requires W ≥ 44 pt (iOS) or 48 dp (Android), roughly 9 mm physical.
- Reduced-motion operator: M(prefers-reduced-motion) = { static fallback if true; animated if false }. Animation frequency f must avoid vestibular band [0.2, 0.5] Hz and flash threshold < 3 Hz to prevent photosensitive epilepsy [biomechanical assumption].
- Rollback operator: R(component) = 1[¬feature_flag_enabled] · Remove(component) ∨ Hide(component). Idempotent; no data/billing side effects per [PAGE 1].
Breakdown regimes:
1. Cognitive overload: H(X) > C_u × τ. The user cannot absorb the information in time.
2. Choice paralysis: n > 1 causing T_H to consume disproportionate τ.
3. Vestibular seizure: animation parameters violate reduced-motion or flash thresholds.
4. Readability failure: copy readability grade level > target (e.g., > grade 8) causing parsing time to exceed budget.
Cite [PAGE 1] for quotes.

RETROCAUSAL_GENEALOGY:
- Lineage: coachmarks descend from Microsoft Agent/Clippy (1997-2001) and early web tooltip patterns; modernized by mobile onboarding tours (Slack, Duolingo, Material Design component guides). GSE's use on home and Player Lab [PAGE 1] places it in the "progressive disclosure" tradition (Carroll, Minimal Manual, 1990), where help is contextual rather than manual-based.
- Historical failure mode: Clippy failed because it was persistent, unactionable, and violated user agency. BUILD-HELP-032 avoids this by specifying one next action, isolated component, and feature-flag rollback [PAGE 1].
- Multi-week traps:
  Week 1-2: Novelty effect; users read coachmark. 
  Week 3-6: Habituation; users dismiss automatically. If coachmark reappears on every login (return-user context), it becomes an annoyance and increases task time.
  Week 6+: "Help debt" accumulates if copy isn't updated with product changes; stale coachmarks mislead users, eroding trust.
- The document's requirement for QA checks and test plan [PAGE 1] is the countermeasure, but without a scheduled sunset or impression cap, the trap remains.

RECURSIVE_THEORY_OF_MIND:
- Zero-order: The system displays a coachmark.
- First-order: The user perceives "something new is here."
- Second-order: The user infers "the product team wants me to do X."
- Third-order: The user asks "is this an ad, a dark pattern, or genuine help?" The trust-safe copy and responsible-play disclosure [PAGE 1] must resolve this negatively.
- Crisis habit regression: Under time pressure (the 10-second clock [PAGE 1]) and complexity [PAGE 1], users regress to previously learned motor routines: swipe away, tap outside, or ignore overlays. If the coachmark interrupts a high-frequency task on home or Player Lab, regression probability approaches 1.
- Counter-trap: A malicious designer could make the coachmark look like a system-critical alert to force compliance (urgency bias). The counter-trap here is exactly that manipulation disguised as help. BUILD-HELP-032's "trust-safe" and "human copy" requirements are the antidote, but only if copy audit enforces non-urgency tone [PAGE 1].
- Clock: τ = 10 s is a hard real-time deadline. After τ, the coachmark is not merely useless; it is an obstruction that increases total task latency and triggers regression.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Mobile surfaces [PAGE 1] imply constrained viewport. Veto if touch target < 44 pt/48 dp or contrast ratio < 4.5:1 (WCAG AA). Veto if coachmark occludes primary navigation on home or Player Lab.
- Biomechanical layer: Reduced-motion behavior required [PAGE 1]. Veto if animation does not respect prefers-reduced-motion: reduce. Veto if motion frequency induces vestibular discomfort or if autoplay media lacks pause controls.
- Weather/environmental layer: Sunlight glare, low brightness, one-handed thumb zone, walking gait. Veto if copy legibility falls below threshold under outdoor luminance (< 3:1 contrast in bright ambient light) or if target lies outside thumb-reachable zone.
- Veto adjudication: Any single layer veto blocks shipment. The rollback plan [PAGE 1] supports clean removal.

RLVR_COUNTERFACTUAL_VETOES:
Scenario 1: Vestibular trigger. The coachmark uses a sliding/fading animation with frequency f ≈ 0.3 Hz that violates reduced-motion preferences. Verifiable check: automated reduced-motion QA per test plan [PAGE 1] fails; user reports dizziness. Prediction: support tickets citing motion sickness increase; accessibility audit blocks release.
Scenario 2: Comprehension deadline violation. Copy length L exceeds H(X)/R_c such that P(T_c > 10 s) > 0.20. Verifiable check: screenshot QA and timing study show median comprehension > 10 s. Prediction: acceptance criterion "new user understands item in 10 seconds" fails [PAGE 1]; rollback required.
Scenario 3: Method boundary leakage. Copy references proprietary founder methodology or implies fake certainty (e.g., guaranteed outcomes). Verifiable check: copy audit flags non-human or method-leaking language [PAGE 1]. Prediction: legal/method boundary violation; immediate rollback behind feature flag, no billing impact [PAGE 1].

I need to ensure total word count >= 1000. Let me estimate. THINK_TRACE ~450, SOURCE_OPERATORS ~450, RETROCAUSAL ~300, RECURSIVE ~350, CROSS_LAYER ~250, RLVR ~250. Total ~2050. Good.

I must not mention betting lines. None present.

I need exact XML section names. I will use them exactly.

Let me write the final response carefully, with LaTeX, [PAGE 1] citations, verbatim quotes.

One thing: The prompt says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I have one page, so [PAGE 1]. I should include verbatim quotes in quotes and cite after.

Let me compose the final output now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit of BUILD-HELP-032.

The source document [PAGE 1] defines a return-user "what's new" coachmark for GSE with a hard real-time cognitive deadline: "Users need to find value in 10 seconds." It further states [PAGE 1], "GSE is proprietary and complex, so every major item needs an immediate explanation, a next action, and a trust-safe media or visual path." I decompose this into five serial cognitive hops, each consuming finite working-memory and time.

Hop 1, detection: the user must perceive the coachmark on either the home or Player Lab surface [PAGE 1]. Detection latency T_detect depends on visual salience, contrast, and occlusion of primary navigation. If the design system is not verified first—as required by Implementation Plan step 1, "Verify real app source and existing design system" [PAGE 1]—the coachmark may blend into background chrome and never enter focal attention.

Hop 2, parsing: copy must be "human" per the Acceptance Criteria [PAGE 1]. Reading on mobile under divided attention occurs at roughly 3–5 characters per second during skimming. For a 10-second budget, pure transcription consumes nearly the entire window; therefore the short summary must exploit keyword recognition rather than linear reading. The Implementation Plan demands "one short summary, one next action, one trust note, and one media/visual slot" [PAGE 1], which imposes a strict upper bound on information density.

Hop 3, semantic mapping: because GSE is "proprietary and complex" [PAGE 1], the user must map the new item to an existing mental model. This is where the legal/method boundary bites. The document explicitly forbids "founder-only methodology leakage" and "fake certainty" [PAGE 1]. If the coachmark references proprietary GSE internals or implies guaranteed outcomes, it violates the method boundary and cannot be made trust-safe by styling alone.

Hop 4, action selection: exactly one next action is specified [PAGE 1]. This is not arbitrary; it follows from the Hick-Hyman decision-time relation. Offering n candidate actions increases decision time logarithmically, and under a 10-second deadline any n > 1 risks consuming the budget before execution.

Hop 5, execution: the user performs the next action. If any earlier hop overruns, the 10-second acceptance criterion—"A new user understands the item in 10 seconds" [PAGE 1]—fails, and the coachmark becomes an obstruction rather than a help affordance.

Gray-zone audit: First, "trust-safe media or visual path" is under-specified [PAGE 1]. Trust-safe could mean absence of betting-promotion language, presence of responsible-play disclosures, or both; the document ties it to "clear disclosures and responsible-play-safe copy" [PAGE 1] but does not operationalize the test. Second, the 10-second clock lacks a defined start event (render, first paint, gaze fixation, or dismiss?). Without an operational definition, the Test Plan's "mobile readability checks" cannot verify the acceptance criterion. Third, "human copy" is subjective; the copy audit in the Test Plan mitigates but does not formalize the criterion. Fourth, rollback is clean: "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes" [PAGE 1], because the coachmark is additive UI with no declared persistence dependency.

The principal multi-week trap is banner blindness: a return-user coachmark shown every session trains a motor habit of dismissal without reading, converting help into noise. This is the crisis habit regression discussed in later sections. The document's P1 priority and S difficulty [PAGE 1] signal urgency, but urgency must not excuse skipping reduced-motion QA or copy audit, both mandated in the Test Plan [PAGE 1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, assumptions, and breakdown regimes, with citations to [PAGE 1].

Let T_c be the comprehension time random variable in seconds. The core acceptance criterion [PAGE 1], "A new user understands the item in 10 seconds," is expressed as a hard real-time constraint:

\[
P(T_c \le \tau) \ge 1 - \alpha, \qquad \tau = 10\ \text{s},
\]

where \(\alpha\) is the acceptable failure probability. Assumption: product targets \(\alpha \le 0.10\), i.e., at least 90% of new users comprehend within 10 s. If \(\alpha\) is not specified, the constraint is unverifiable.

Let X be the coachmark content random variable (summary text, next action, trust note, media). Its Shannon entropy is

\[
H(X) = -\sum_{x \in \mathcal{X}} p(x) \log_2 p(x)\ \text{bits}.
\]

This is the information load the user must absorb. The effective comprehension rate is

\[
R_c = \frac{H(X)}{\mathbb{E}[T_c]}\ \text{bits/second}.
\]

For successful onboarding, \(R_c\) must not exceed the user's divided-attention channel capacity \(C_u\). Breakdown regime 1 (cognitive overload): if \(H(X) > C_u \cdot \tau\), comprehension within the deadline is information-theoretically impossible regardless of UI polish.

The Implementation Plan requires exactly one next action [PAGE 1]. For n candidate actions, Hick-Hyman choice reaction time is

\[
T_H = b \log_2(n + 1)\ \text{s},
\]

with \(b \approx 0.15\ \text{s/bit}\) under simple-choice assumptions. For n = 1, \(T_H \approx 0.15\ \text{s}\), negligible. For n \(\ge\) 2, \(T_H\) grows and jeopardizes \(\tau\). Breakdown regime 2 (choice paralysis): any coachmark presenting more than one action violates the spirit of [PAGE 1] and risks deadline overrun.

Touch-target acquisition on mobile home and Player Lab surfaces follows Fitts's Law:

\[
MT = a + b \log_2\left(\frac{D}{W} + 1\right)\ \text{s},
\]

where D is distance to target center and W is target width. Accessibility assumption: \(W \ge 44\ \text{pt}\) (iOS) or \(48\ \text{dp}\) (Android), approximately 9 mm physical width. Contrast assumption: WCAG 2.1 AA minimum 4.5:1 for body copy.

Reduced-motion operator: let \(m \in \{\text{reduce}, \text{no-preference}\}\) be the user's `prefers-reduced-motion` setting. Then

\[
\mathcal{M}(m) = 
\begin{cases}
\text{static fallback}, & m = \text{reduce},\\
\text{animated media}, & m = \text{no-preference}.
\end{cases}
\]

Biomechanical assumption: animation frequency \(f\) must avoid the vestibular discomfort band \([0.2, 0.5]\ \text{Hz}\) and the photosensitive seizure flash threshold of 3 Hz. Autoplay media requires user-controllable pause.

Rollback operator: because the plan isolates the component with no data or billing changes [PAGE 1],

\[
R(\text{component}) = \mathbf{1}[\neg \text{feature\_flag\_enabled}] \cdot \bigl(\text{Remove}(\text{component}) \lor \text{Hide}(\text{component})\bigr).
\]

This is idempotent and reversible.

Breakdown regimes summary: (1) cognitive overload when \(H(X) > C_u \tau\); (2) choice paralysis when n > 1; (3) vestibular/seizure risk when animation parameters violate reduced-motion or flash constraints; (4) readability failure when copy grade level or length pushes \(\mathbb{E}[T_c] > \tau\). All citations and quotes refer to [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage of the coachmark pattern, and multi-week deployment traps.

The return-user coachmark descends from three lineages. First, the intelligent-agent/overlay tradition: Microsoft Clippy and Office Assistants (1997–2001) introduced contextual, in-UI help but failed because they were persistent, unactionable, and violated user agency. BUILD-HELP-032 avoids the direct failure mode by specifying an isolated component with feature-flag rollback [PAGE 1] and exactly one next action [PAGE 1], so the user is not trapped in an unwanted interaction loop.

Second, the mobile onboarding tour tradition (early iOS/Android walkthroughs, Slack, Duolingo) established progressive disclosure: help appears at the moment of relevance rather than in a separate manual. This matches [PAGE 1], "Users know what they are seeing, why it matters, how to use it, and what to do next without reading a manual," and the User Value section [PAGE 1]. GSE's placement on home and Player Lab [PAGE 1] situates the coachmark in contextual help rather than generic documentation, consistent with Carroll's Minimal Manual theory (1990), where training material is task-coupled and minimal.

Third, the design-system help-affordance lineage (tooltips, inline help, Material Design component guidance) requires a help affordance and media/visual slot [PAGE 1, Acceptance Criteria]. The document's requirement for video, motion, table, visual, or example path [PAGE 1] continues the dual-coding tradition: text plus visual improves retention under low attention.

Multi-week traps:
Weeks 1–2: Novelty effect. Return users notice the coachmark and comprehension is high because the change is salient.
Weeks 3–6: Habituation. Because this is a return-user coachmark [PAGE 1], repeat exposure trains automatic dismissal. Users develop a motor habit of tapping away without reading, precisely the crisis habit regression modeled later. The coachmark shifts from help to obstruction, increasing task latency on home and Player Lab.
Weeks 6–12: Help debt. If GSE evolves and the coachmark copy is not updated, the "what's new" claim becomes stale [PAGE 1]. Stale context erodes trust, especially given the requirement for trust-safe copy and responsible-play disclosures [PAGE 1].

The Test Plan's visual screenshot QA, mobile readability checks, copy audit, reduced-motion check, and help coverage scan [PAGE 1] are countermeasures, but they are point-in-time checks. Without a scheduled sunset, impression cap, or version-gating tied to product releases, the multi-week habituation and staleness traps remain unmitigated by the document as written.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus the 10-second clock.

Zero-order: the system renders a coachmark on home or Player Lab [PAGE 1].
First-order: the user perceives "something new has appeared on the screen."
Second-order: the user infers "the product team wants me to notice this item and take an action."
Third-order: the user evaluates intent: "Is this genuine help, an advertisement, or a dark pattern?" The trust-safe copy and responsible-play-safe disclosure requirements [PAGE 1] exist to answer this question in the negative.

Crisis habit regression: under time pressure (\(\tau = 10\ \text{s}\) [PAGE 1]) and product complexity [PAGE 1], users regress to previously learned motor routines when confused. For an overlay-style coachmark, the regressed habit is dismissal: swipe away, tap outside, or tap a close button without parsing the summary. Regression probability approaches 1 when (a) the coachmark interrupts a high-frequency task, (b) the copy is not immediately scannable, or (c) the user has seen the coachmark before. Once regression occurs, the "next action" [PAGE 1] is never taken, and the acceptance criterion fails.

Counter-trap: a manipulator could design the coachmark to look like a system-critical alert or time-sensitive notification, hijacking urgency bias to force attention. This is the dark-pattern counter-trap: using the form of help to extract compliance. BUILD-HELP-032's explicit boundary—"No fake certainty" [PAGE 1], "trust-safe media or visual path" [PAGE 1], "human copy" [PAGE 1]—is the designed countermeasure. However, the counter-trap remains latent unless the copy audit in the Test Plan [PAGE 1] enforces a non-urgent, transparent tone and verifies that disclosures are present without being coercive.

The clock: \(\tau = 10\ \text{s}\) is a hard deadline, not a soft preference. From the user's perspective, if comprehension is not achieved by t = 10 s, the coachmark has failed its value proposition [PAGE 1]. After that point it is pure occlusion: it delays the primary task on home or Player Lab, increases total interaction time, and strengthens the regressed dismissal habit for future exposures. The recursive danger is that each failed 10-second exposure makes the next exposure more likely to be dismissed unread, collapsing the help channel over time.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto layers; any single veto blocks shipment.

Physical layer (viewport and input): The product surface is mobile home and Player Lab [PAGE 1]. Veto conditions: touch target width < 44 pt / 48 dp (~9 mm); color contrast ratio < 4.5:1 (WCAG 2.1 AA) for body copy and trust note; coachmark occludes primary navigation or core task affordances; viewport coverage so large that the user cannot locate the dismiss control without scrolling.

Biomechanical layer (motor and vestibular): Implementation Plan step 4 requires mobile and reduced-motion behavior [PAGE 1]. Veto conditions: animation does not honor `prefers-reduced-motion: reduce`; motion frequency f in the vestibular discomfort band [0.2, 0.5] Hz; autoplay media without pause controls; flashing content at or above 3 Hz (photosensitive seizure risk); tap target placed outside the thumb-reachable zone for one-handed use.

Environmental/weather layer (context of use): Mobile use implies variable luminance, glare, motion, and single-hand posture. Veto conditions: copy legibility falls below threshold under outdoor sunlight (effective contrast < 3:1 at high ambient luminance); text size too small for low-brightness screens; animation that competes with walking gait or vehicle motion and induces nausea; no fallback when media fails to load on constrained networks.

Veto adjudication logic: Let V_phys, V_bio, V_env be boolean veto predicates. The shipment predicate is

\[
S = \neg V_{\text{phys}} \land \neg V_{\text{bio}} \land \neg V_{\text{env}}.
\]

If any V = true, the component does not ship. Because rollback is a feature-flag hide or isolated removal with no data or billing changes [PAGE 1], a vetoed build can be rolled forward to a previous state without side effects. The Test Plan's reduced-motion check and mobile readability checks [PAGE 1] are the operational gates for V_bio and V_phys respectively; environmental QA (glare, sunlight, one-handed reach) must be added to make the layer complete.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) counterfactual veto scenarios with predictions.

Scenario 1: Vestibular violation. Counterfactual: the coachmark ships with a looping slide/fade animation at f ≈ 0.3 Hz that does not respect `prefers-reduced-motion: reduce`. Verifiable check: automated reduced-motion QA per Test Plan [PAGE 1] fails; manual accessibility audit flags vestibular risk; user support tickets mention dizziness or nausea. Prediction: release is blocked by accessibility gate; if shipped anyway, support volume for motion-related complaints increases measurably within two weeks, and a forced rollback via feature flag [PAGE 1] is triggered.

Scenario 2: Comprehension deadline violation. Counterfactual: copy length L is too long for the 10 s budget, such that \(P(T_c > 10\ \text{s}) > 0.20\) based on timed user studies. Verifiable check: screenshot QA and timing study show median comprehension exceeds 10 s [PAGE 1 acceptance criterion]. Prediction: acceptance criterion "A new user understands the item in 10 seconds" fails [PAGE 1]; the copy audit flags the text as non-human or over-dense; rollback is required with no data or billing impact [PAGE 1].

Scenario 3: Method-boundary leakage. Counterfactual: the coachmark references proprietary founder-only methodology or implies certainty/guarantees ("fake certainty"), violating [PAGE 1]. Verifiable check: copy audit identifies method-leaking language or non-responsible-play-safe copy [PAGE 1]; legal review flags missing disclosures. Prediction: immediate method-boundary violation; component is hidden behind feature flag or removed [PAGE 1]; no billing changes occur because the rollback plan isolates content only [PAGE 1]. Repeat occurrences indicate a process failure in the copy-audit pipeline, requiring a pre-publication checklist tied to the Legal / Method Boundary section [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>