---
source: "BUILD-HELP-021-galaxy-studios-storyboard-template.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/help-education-ux/claude-build-queue/cards"
pages: 1
model: nvidia_2:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3496
---

<NATIVE_REASONING>
The user has provided a source document about a storyboard template for Galaxy Studios (GSE - Galaxy Sports Edge). They want me to act as the GSE + GSI Frontier Reasoning Foundry and follow strict invariants.

Let me analyze the requirements:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios, must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes, cite exact [PAGE N] markers and verbatim quotes when source pages provided
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

The source text is 1 page (PAGES: 1). I need to cite [PAGE 1] markers and verbatim quotes.

Let me structure the response:

First, THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. I need to analyze the build-queue item BUILD-HELP-021, its relationship to BUILD-087, the 10-second comprehension requirement, the duplicate gate extension status, implementation plan, acceptance criteria, test plan, rollback plan, priority P0, difficulty S, Claude Code prompt constraints.

Gray zones to audit:
- "10-second comprehension" - how is this measured? What's the cognitive load model?
- "trust-safe media or visual path" - what defines trust-safe?
- "human copy" - how to verify human-sounding copy quantitatively?
- Extension of BUILD-087 - what exactly is being extended? Page-level teachability vs generic help docs.
- P0 priority with S difficulty - potential scope creep risk.
- Rollback plan says "remove isolated component/content entry or hide behind feature flag" - but if it's embedded in existing flows, rollback may not be clean.
- No founder-only methodology leakage - but what constitutes proprietary methodology in help copy?
- Mobile and reduced-motion behavior - implementation details unspecified.

Second, SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Need to define information-theoretic units for 10-second comprehension.
- Reading speed models: average adult reading ~200-250 WPM, but for UI scanning it's different.
- Information rate: bits per second.
- Hick's Law for decision time.
- Fitts's Law for mobile touch targets.
- WCAG reduced motion preferences.
- Cite [PAGE 1] with verbatim quotes from the source.

Third, RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Storyboard templates lineage: film/TV storyboarding (Disney, 1930s), instructional design (Gagne's 9 events, Merrill's First Principles), microlearning, progressive disclosure, onboarding UX (Samuel Hulick, UserOnboard), GSE/GSI context.
- Multi-week traps: help debt accumulation, copy localization debt, animation performance debt, analytics event schema drift, reduced-motion edge cases.

Fourth, RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- What happens under crisis/pressure? Teams revert to long help docs, skip QA, ignore reduced motion, add betting-style urgency (but no betting lines allowed).
- Counter-trap: over-engineering the template, adding too many fields, making it not "smallest help pattern."
- Clock: 10-second comprehension window, sprint clock, feature flag rollback window.

Fifth, CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical layer: mobile device constraints, screen size, touch target size (44x44 dp iOS, 48x48 dp Android), reduced motion OS settings.
- Biomechanical: thumb zone, reading distance, saccade duration, cognitive load.
- Weather: not directly applicable unless outdoor mobile use (glare, cold hands reducing touch precision), but can mention environmental context for mobile help consumption.
- Veto conditions: if any layer fails, the component ships hidden or removed per rollback plan.

Sixth, RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some internal GSE framework. I'll treat as verifiable reward scenarios.
- Scenario 1: 10-second comprehension failure (users take >10s to understand). Prediction: comprehension rate drops below threshold, rollback triggered.
- Scenario 2: Reduced-motion violation (animation plays despite prefers-reduced-motion). Prediction: accessibility audit failure, WCAG violation.
- Scenario 3: Help affordance missing or unclear next action. Prediction: support ticket volume increases, users don't complete next action.
- Each needs verifiable conditions and predictions.

Word count: Need >=1000 words total across sections, with THINK_TRACE >=400 words.

I must not mention betting lines. The domain is "Galaxy Sports Edge" which sounds like sports betting/sports media, but I must avoid all betting terminology per invariant 1. I'll focus purely on the help/education UX build item.

Let me draft carefully with citations [PAGE 1] and verbatim quotes.

Verbatim quotes from source:
- "Users need to find value in 10 seconds."
- "GSE is proprietary and complex, so every major item needs an immediate explanation, a next action, and a trust-safe media or visual path."
- "duplicate_check_status: EXTENSION"
- "matched_existing_ids: BUILD-087"
- "relation_to_existing: Extends existing onboarding/help/video/copy queue item with page-level teachability."
- "reason_not_duplicate: Galaxy Studios storyboard template focuses on 10-second comprehension and contextual help coverage, not generic help docs."
- "A new user understands the item in 10 seconds."
- "The item has a help affordance."
- "The help text sounds human."
- "There is a video, motion, table, visual, or example path."
- "Method boundaries are protected."
- "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes."
- "Priority: P0"
- "Difficulty: S"

Now let me write the equations.

Information theory / comprehension model:
- Let T_comp be comprehension time. Requirement: T_comp ≤ 10 s [PAGE 1].
- Information content H(X) in bits (Shannon entropy). Average reading comprehension rate R ≈ 250 words/minute ≈ 4.17 words/s. For a help item of W words, T_read = W / R.
- But scanning is not reading. Use glanceable information rate. Define channel capacity C in bits/s for peripheral + foveal UI parsing.
- Hick-Hyman Law: decision time T = a + b log2(n+1) where n is number of choices/help paths. To keep T small, n must be small (one next action).
- Fitts's Law: MT = a + b log2(D/W + 1) for mobile touch targets.
- Web Content Accessibility Guidelines: prefers-reduced-motion media query.

Singularity/breakdown regimes:
- If W > R × 10 s ≈ 41.7 words (assuming pure reading), the item cannot be read in 10s; must rely on visual/media path [PAGE 1: "There is a video, motion, table, visual, or example path."]
- If n (choices) > threshold, Hick's law causes T > 10s.
- If reduced-motion preference is ignored, accessibility veto triggers.
- If feature flag rollback fails to hide component, partial shipment persists.

Units: seconds (s), words, bits, bits/s, words per minute (WPM), dp (density-independent pixels), Hz for motion/refresh, dimensionless log for Hick's law.

Now I'll compose the full response with XML sections.

Need to ensure total >= 1000 words. THINK_TRACE alone >= 400. Let me aim for ~1500+ words total.

Let me write THINK_TRACE first (~500 words):

THINK_TRACE:
- Multi-hop derivation: The item is an EXTENSION of BUILD-087 (onboarding/help/video/copy queue). It adds page-level teachability. The "Why It Matters" states 10-second value discovery. GSE proprietary/complex. Immediate explanation, next action, trust-safe media/visual path.
- Gray-zone audit:
  1. 10-second comprehension is not operationalized. No metric (task completion? time-to-first-action? comprehension quiz?).
  2. "Trust-safe media" undefined—does it mean no autoplay, no betting imagery? (but avoid betting lines)
  3. "Human copy" is subjective; no copy audit rubric provided.
  4. Extension vs duplicate: relies on BUILD-087 existing; if BUILD-087 scope changes, this template may conflict.
  5. P0 + Difficulty S suggests rapid ship; risk of skipping QA under pressure.
  6. Rollback says "remove isolated component" but if integrated into design system tokens, removal may leave orphan references.
  7. Claude Code prompt says verify repo root, branch, dirty state, framework, routes, design system first—pre-flight audit required.
  8. No founder-only methodology leakage: help text must not encode proprietary GSE models, only surface-level explanations.

I'll write this out fully.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define variables and equations with LaTeX.
- Cite [PAGE 1].
- Include verbatim quotes.

RETROCAUSAL_GENEALOGY:
- Storyboard lineage (Disney 1930s), instructional design, microlearning, progressive disclosure, GSE/GSI onboarding lineage BUILD-087.
- Multi-week traps: help debt, localization debt, motion debt, analytics schema drift, feature flag rot.

RECURSIVE_THEORY_OF_MIND:
- Crisis regression: under ship pressure, team writes long FAQ instead of 10-second block; skips mobile QA; ignores reduced motion; adds multiple CTAs violating "one next action."
- Counter-trap: over-specifying template with 12 fields, making it unusable for content ops.
- Clock: 10-second user clock vs sprint clock vs rollback window.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: mobile screen dimensions, touch targets 44dp/48dp, contrast ratios WCAG 2.1 AA (4.5:1 normal text).
- Biomechanical: saccade ~20-30ms, fixation ~200-300ms, thumb zone, reading distance 30-40cm.
- Weather/environmental: outdoor glare, low-light, cold hands affecting touch precision; help must remain legible under reduced motion and brightness constraints.
- Veto proof: if any layer fails QA, item ships behind flag or removed per rollback [PAGE 1].

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: T_comp > 10s measured by unmoderated comprehension test. Verifiable: p95 time-to-understand > 10s. Prediction: rollback triggered, support tickets rise.
- Scenario 2: reduced-motion violation. Verifiable: prefers-reduced-motion: reduce active but animation plays. Prediction: WCAG audit fail, accessibility veto.
- Scenario 3: missing help affordance / no clear next action. Verifiable: task completion rate < threshold, next-action CTA click-through < baseline. Prediction: users stall, item hidden by feature flag.

Let me ensure no betting terms. Words like "spread", "total", "moneyline", "odds", "wager", "bet" are forbidden. I will not use them.

Let me check word counts as I write. I'll aim for substantial depth.

I need to be careful: The system says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I'll use [PAGE 1] and quote verbatim.

Let's write the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The source document BUILD-HELP-021 [PAGE 1] is an extension queue item, not a net-new build. The duplicate check returns status EXTENSION, matched_existing_ids BUILD-087, and reason_not_duplicate states it "focuses on 10-second comprehension and contextual help coverage, not generic help docs" [PAGE 1]. Multi-hop derivation begins there: BUILD-087 presumably established an onboarding/help/video/copy pipeline, and BUILD-HELP-021 layers page-level teachability onto that surface. The "Why It Matters" block asserts that "Users need to find value in 10 seconds" and that "GSE is proprietary and complex, so every major item needs an immediate explanation, a next action, and a trust-safe media or visual path" [PAGE 1]. Those three requirements—explanation, next action, trust-safe media/visual path—become the invariant constraints of the storyboard template.

Gray-zone audit: First, "10 seconds" is not operationalized. The acceptance criteria say "A new user understands the item in 10 seconds" [PAGE 1], but no measurement method is specified (time-on-task? comprehension quiz? first-action latency?). Without a defined dependent variable and sampling regime, QA cannot pass or fail the item objectively. Second, "trust-safe media or visual path" is undefined; it could mean non-autoplaying video, no flashing content, no promoter imagery, or responsible-copy guardrails, but the document leaves the boundary to the implementer. Third, "help text sounds human" [PAGE 1] is subjective; no copy-audit rubric, reading-grade target, or tone lexicon is provided. Fourth, the extension relationship to BUILD-087 creates coupling risk: if the parent onboarding queue item changes its copy pattern or media slot, this template may inherit contradictions. Fifth, Priority P0 with Difficulty S implies ship-now pressure, which historically drives regression toward long-form FAQs—the very thing the 10-second requirement prohibits. Sixth, the rollback plan says to "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes" [PAGE 1]; if the help entry is embedded inside shared design-system tokens or routes, an "isolated component" removal may leave orphan references or partial states. Seventh, the Claude Code pre-flight mandate (verify repo root, branch, dirty state, framework, routes, design system) is necessary but not sufficient: it does not include a reduced-motion pre-check or an analytics schema freeze, both of which are in the implementation plan [PAGE 1].

Breakdown regimes emerge from these gray zones. If word count exceeds the glanceable budget for a 10-second window, comprehension fails by construction. If more than one next action is present, decision latency rises under Hick-Hyman logic and the "one next action" invariant [PAGE 1] breaks. If reduced-motion behavior is not implemented at the OS media-query level, the accessibility veto triggers and the item cannot ship in its default state. Each of these regimes maps to a verifiable veto in the RLVR section below.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(T_{\text{comp}}\) denote user comprehension time in seconds. The acceptance criterion from [PAGE 1] is:
\[
T_{\text{comp}} \le 10\ \text{s}
\]
for a new user encountering the help item for the first time.

Model adult glanceable processing as an information channel. Let \(W\) be the word count of the help summary, \(R\) the effective scanning rate in words per second, and \(H(X)\) the Shannon information content of the item in bits. For continuous prose, \(R \approx 250\ \text{WPM} / 60 \approx 4.17\ \text{words/s}\); for scannable UI copy, effective \(R\) is higher because fixations target keywords and headers. A pure-reading upper bound gives:
\[
T_{\text{read}} = \frac{W}{R} \le 10\ \text{s} \implies W \le 10R \approx 41.7\ \text{words}
\]
at \(R=4.17\ \text{words/s}\). Thus any item exceeding roughly 42 words of mandatory reading violates the 10-second budget unless the user acquires the meaning through the video/motion/table/visual/example path required by [PAGE 1]: "There is a video, motion, table, visual, or example path."

For the single next action, apply the Hick-Hyman decision law. Let \(n\) be the number of mutually exclusive help paths or CTAs offered. Mean decision time:
\[
T_{\text{dec}} = a + b \log_2(n+1)
\]
where \(a\) is onset latency and \(b\) is the information-processing rate constant (~150 ms/bit for simple choices). To preserve \(T_{\text{dec}} + T_{\text{read}} \le 10\ \text{s}\), \(n\) must remain small; the storyboard template enforces one next action per [PAGE 1], bounding \(n \approx 1\) and \(\log_2(2)=1\) bit, minimizing \(T_{\text{dec}}\).

Mobile touch targeting uses Fitts's law. Let \(D\) be the distance to the help affordance and \(W_t\) the target width in density-independent pixels (dp). Movement time:
\[
MT = a + b \log_2\left(\frac{D}{W_t} + 1\right)
\]
iOS guidance suggests \(W_t \ge 44\ \text{dp}\), Android \(W_t \ge 48\ \text{dp}\). If \(W_t\) falls below these thresholds under reduced-motion or mobile layouts, the physical layer veto applies.

Reduced motion is governed by the user-preference media query:
\[
\text{@media (prefers-reduced-motion: reduce)}
\]
When this evaluates true, all non-essential animation, motion, and auto-playing media in the help slot must be suppressed or replaced with a static equivalent. Violation is a binary accessibility veto.

Singularity/breakdown regimes:
1. \(W > 41.7\) words with no visual/media substitute: \(T_{\text{comp}} > 10\ \text{s}\), hard failure of the core criterion [PAGE 1].
2. \(n > 1\) competing next actions: decision time grows unbounded relative to the 10 s clock, violating "immediate explanation, a next action" [PAGE 1].
3. `prefers-reduced-motion: reduce` honored in OS but animation persists: WCAG failure, shipment veto.
4. Help copy encodes founder-only proprietary methodology: breach of "No founder-only methodology leakage" [PAGE 1], requiring copy rewrite before rollout.

Citations: [PAGE 1], verbatim: "Users need to find value in 10 seconds"; "every major item needs an immediate explanation, a next action, and a trust-safe media or visual path"; "A new user understands the item in 10 seconds"; "The item has a help affordance"; "The help text sounds human"; "There is a video, motion, table, visual, or example path"; "Method boundaries are protected"; "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes"; "Priority: P0"; "Difficulty: S".
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The storyboard template draws on a century-spanning lineage. Film storyboarding originated at Walt Disney Studios in the early 1930s to pre-visualize narrative beats before expensive production, establishing the principle that a viewer must grasp scene intent within seconds. That lineage migrated into instructional design through Gagné's Nine Events of Instruction (1965), particularly Event 2 (informing learners of objectives) and Event 9 (enhancing retention and transfer), and through Merrill's First Principles (problem-centered, activation, demonstration, application, integration). In software UX, the direct ancestors are progressive disclosure (Nielsen, early 2000s), microlearning, and the modern user-onboarding canon represented by Samuel Hulick's UserOnboard teardowns, where the "first 10 seconds" determine activation. Within GSE/GSI, BUILD-087 is the immediate parent: an onboarding/help/video/copy queue item that this template extends with page-level teachability [PAGE 1].

Multi-week traps derive from that lineage. Week 1 trap: content ops treats the storyboard as a generic help doc, violating the reason_not_duplicate clause and bloating the item beyond 10-second comprehension [PAGE 1]. Week 2 trap: localization ships translated copy without re-measuring \(T_{\text{comp}}\); translated text expansion breaks the word budget and mobile layout. Week 3 trap: motion debt accumulates—autoplaying video or animated examples ship without `prefers-reduced-motion` handling, triggering accessibility veto. Week 4 trap: analytics schema drift; the help coverage scan [PAGE 1] lacks event definitions for comprehension success, so the team cannot distinguish a 10-second win from a 10-second bounce. Week 5+ trap: feature-flag rot; the rollback plan [PAGE 1] relies on hiding the component, but if the flag is never retired, dead code paths persist in routes and design-system references, undermining the "isolated component" assumption.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when the P0 ship date approaches [PAGE 1], the team will regress to familiar patterns—writing a long explanatory paragraph, adding a second CTA ("Learn more" plus "Get started"), embedding a founder-only methodology shortcut in the copy, and skipping reduced-motion QA. This regresses the item into the generic help-doc space that BUILD-HELP-021 explicitly avoids [PAGE 1].

Counter-trap: the equal and opposite failure is over-specification. Content ops may demand a 12-field storyboard template (audience, persona, compliance disclaimer, legal review, video variants, motion variants, table fallback, example code, etc.), which violates the "smallest help pattern" implementation step [PAGE 1] and raises authoring friction so high that teams bypass the template entirely.

Clock recursion: three clocks interact. The user clock is \(T_{\text{comp}} \le 10\ \text{s}\) [PAGE 1]. The sprint clock is the P0 release cadence. The rollback clock is the feature-flag window before the component becomes structurally embedded in routes and design tokens. Under recursive theory of mind, the implementer must predict that under pressure, the sprint clock will compress the user clock. The counter-strategy is to hard-code the 10-second word budget, one-next-action constraint, and reduced-motion gate into the template itself so that crisis cannot inject violations without breaking the build or QA gate.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The help item renders on mobile viewports. Touch targets for the help affordance and next action must satisfy \(W_t \ge 44\ \text{dp}\) (iOS) or \(W_t \ge 48\ \text{dp}\) (Android). Contrast must meet WCAG 2.1 AA minimums (4.5:1 for normal text, 3:1 for large text). If the visual/media slot uses video, it must not rely on autoplay with audio; a silent preview or static fallback is required for trust-safe media [PAGE 1].

Biomechanical layer: Saccadic fixation cycles are ~200–300 ms; a user can complete only a few fixations within a 10-second comprehension window. The help summary must fit within 2–3 fixations, supporting the ~42-word reading budget derived above. Thumb-zone reachability governs placement of the next action on mobile: bottom-center or bottom-side placement lowers MT under Fitts's law. Reading distance is typically 30–40 cm; font size must scale so body copy is legible at that distance without zoom.

Environmental/weather layer: Mobile help is consumed outdoors under variable glare and in low light. Cold or wet hands reduce touch precision and increase effective \(D\) in Fitts's law; larger targets and high contrast compensate. Glare reduces perceived contrast, so the trust-safe media path must not depend on low-contrast video thumbnails. These are not edge cases for a mobile-first help surface; they are default operating conditions.

Veto adjudication: If the physical layer fails (target too small, contrast insufficient), the component ships hidden behind a feature flag per rollback plan [PAGE 1]. If the biomechanical layer fails (fixation budget exceeded, thumb unreachable), copy is trimmed or the visual path is promoted. If environmental conditions are unmet (glare-washed media), a static example or table replaces motion. No layer may ship a violation; the rollback plan—"Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes" [PAGE 1]—is the enforcement mechanism.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Comprehension-time breach. Verifiable condition: unmoderated comprehension test with \(N \ge 20\) new users; \(p95(T_{\text{comp}}) > 10\ \text{s}\) measured via time-to-first-successful-next-action or timed recall quiz. RLVR veto: item fails acceptance criterion "A new user understands the item in 10 seconds" [PAGE 1]. Prediction: support ticket volume for the affected surface increases by >15% within two weeks of ship; rollback executed within 72 hours.

Scenario 2 — Reduced-motion violation. Verifiable condition: device/user agent with `prefers-reduced-motion: reduce` active; automated accessibility audit detects animation, autoplaying video, or motion in the help/media slot. RLVR veto: WCAG failure and breach of implementation plan requirement to "Add mobile and reduced-motion behavior" [PAGE 1]. Prediction: accessibility regression blocks release; the component remains hidden behind feature flag until static fallback is deployed.

Scenario 3 — Missing help affordance / ambiguous next action. Verifiable condition: task-completion rate on the help-affordance click-through \(< 60\%\) or next-action CTA click-through \(< 40\%\) of baseline in staged rollout; copy audit flags non-human or jargon-heavy text. RLVR veto: breaches "The item has a help affordance," "The help text sounds human," and "one next action" constraints [PAGE 1]. Prediction: users stall at the surface, bounce to support channels, and the entry is removed or flag-hidden per rollback plan [PAGE 1]; template fields are revised before resubmission.
</RLVR_COUNTERFACTUAL_VETOES>