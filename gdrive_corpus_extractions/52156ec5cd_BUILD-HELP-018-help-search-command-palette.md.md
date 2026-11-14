---
source: "BUILD-HELP-018-help-search-command-palette.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/help-education-ux/claude-build-queue/cards"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4122
---

<NATIVE_REASONING>
The user wants me to process a source document and produce a response following strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE 1] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - THINK_TRACE (>=400 words)
   - SOURCE_OPERATORS_AND_EQUATIONS
   - RETROCAUSAL_GENEALOGY
   - RECURSIVE_THEORY_OF_MIND
   - CROSS_LAYER_VETO_ADJUDICATION
   - RLVR_COUNTERFACTUAL_VETOES

The source text is a build card BUILD-HELP-018 about a help search command palette for Galaxy Sports Edge / GSN. It's essentially a product/UX documentation card. There are no betting lines in the source, so invariant 1 is easy. There are no equations in the source, so I need to be careful not to invent fake toy equations. I can introduce formal LaTeX for information theory, human-computer interaction metrics (e.g., Hick's Law, Fitts's Law, Shannon entropy, response time models) but must state assumptions, units, and breakdown regimes.

The user didn't ask a specific question beyond "DRIVE SOURCE..." so I should treat this as an analysis/expansion task using the foundry persona. I need to generate the six XML sections with total >= 1000 words, THINK_TRACE >= 400 words.

Key content from source [PAGE 1]:
- BUILD-HELP-018: Help search command palette
- Duplicate Gate: EXTENSION, matched BUILD-015, extends onboarding/help/video/copy queue with page-level teachability.
- Goal: Help search command palette.
- Why: Users need value in 10 seconds. GSE proprietary and complex; every major item needs immediate explanation, next action, trust-safe media/visual path.
- Product Surface: global
- User Value: know what seeing, why matters, how use, what next without manual.
- Internal Value: repeatable help asset pipeline.
- Legal/Method Boundary: No founder-only methodology leakage. No fake certainty. Promotions/risk surfaces need disclosures and responsible-play-safe copy.
- Implementation Plan: 5 steps.
- Acceptance Criteria: 5 bullets.
- Test Plan: visual screenshot QA, mobile readability, copy audit, reduced-motion check, help coverage scan.
- Rollback Plan: remove isolated component or hide behind feature flag. No data or billing changes.
- Priority P1, Difficulty M.
- Claude Code Prompt: execute only BUILD-HELP-018, verify repo root, branch, dirty state, framework, routes, design system first. Do not change billing, secrets, launch gates, proprietary methodology. Add help/education/readability improvement with mobile, accessibility, reduced-motion, human copy, screenshot QA. Report files changed, checks run, rollback.

I need to cite [PAGE 1] for verbatim quotes. Since only one page is provided, all citations are [PAGE 1].

Structure:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). Discuss the tension between proprietary complexity and 10-second comprehension, the extension relationship to BUILD-015, the legal/method boundary, the rollback plan as a safety boundary, the information-theoretic framing of 10-second comprehension, Hick's law for command palette, Fitts's law for search target acquisition, Shannon entropy of help copy, etc. Gray zones: "trust-safe media", "responsible-play-safe copy", "founder-only methodology leakage", "human copy". Avoid toy equations: use formal LaTeX with units (seconds, bits, bytes, pixels, Hertz maybe), assumptions, singularity/breakdown regimes (e.g., when cognitive load exceeds working memory capacity ~ 4±1 chunks, when search space cardinality N makes O(log N) fail due to prefix ambiguity, when reduced-motion disables CSS transitions at prefers-reduced-motion: reduce).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations. Define:
- T_comprehension <= 10 s (user value)
- Hick-Hyman law: RT = a + b log2(n+1) bits, where n is number of help topics; units seconds. Assumptions: equal probability, well-practiced. Breakdown: n > 100 or non-uniform distribution, prefix collisions.
- Fitts's law: MT = a + b log2(D/W + 1) for command palette activation target; D distance, W width; units seconds; breakdown when W < tactile target 44x44 dp or D > screen diagonal.
- Shannon entropy of help copy H(X) = - sum p(x) log2 p(x) bits; assume human copy reduces perplexity; breakdown when p(x) non-stationary across personas.
- Information rate of visual channel: C = B log2(1+S/N) maybe Shannon-Hartley, but keep it simple; B in Hz, S/N dimensionless. Breakdown when motion/animation increases S/N beyond reduced-motion tolerance.
- Feature flag rollback as binary operator R ∈ {0,1}; no data/billing changes implies ΔDB = 0, ΔBilling = 0.
Cite [PAGE 1] for each extracted requirement.

RETROCAUSAL_GENEALOGY: Historical lineage: command palettes (Cmd+K), Microsoft Ribbon (2007), Spotlight, Slack help, VS Code command palette; GSE onboarding/help/video/copy queue BUILD-015; page-level teachability; multi-week traps: rolling out global search without indexing all pages, ignoring reduced-motion, copy that sounds like legalese, founder methodology leaking into help text causing compliance issues, feature flag drift causing rollback failure.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Under launch pressure, devs may skip mobile QA, add modal that traps keyboard, copy written by engineers not human, analytics events that violate privacy, disable reduced-motion. Counter-trap: enforce QA checklist, design system token audit, copy audit by support, reduced-motion test. Clock: 10-second comprehension clock; P1 priority means time-boxed.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer (mobile viewport, touch target 44dp, reduced-motion media query), biomechanical layer (thumb zone, repetitive strain from palette overuse, visual saccade time ~200-300ms), weather veto (not applicable maybe network latency/poor signal as environmental veto), legal/method boundary veto. Prove each veto is satisfied or triggers rollback.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. E.g.:
1. Scenario: Command palette activation target W < 44dp on mobile => violates accessibility => veto. Prediction: QA fails mobile readability check; rollback via feature flag.
2. Scenario: Help copy contains proprietary methodology or odds-like certainty => violates Legal/Method Boundary => veto. Prediction: copy audit fails; content hidden behind flag.
3. Scenario: Analytics event fires before consent or tracks betting-adjacent behavior => veto under responsible-play-safe copy (no betting lines though). Prediction: privacy QA fails; component removed.
Or include reduced-motion: CSS transitions not disabled => veto. Prediction: reduced-motion check fails.

Need to ensure total words >= 1000. THINK_TRACE alone >=400. I'll aim for ~1500-2000 words total.

Important: Do not mention spreads, totals, moneylines, odds. The source mentions "Promotions/risk surfaces need clear disclosures and responsible-play-safe copy." I can reference responsible-play-safe copy but must not invent betting lines. Avoid "odds" entirely.

Must cite exact [PAGE 1] markers and verbatim quotes from source. Since only page 1 exists, I will cite [PAGE 1] after quotes.

Let's draft carefully.

Word count plan:
THINK_TRACE: ~550 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~400 words.
RETROCAUSAL_GENEALOGY: ~300 words.
RECURSIVE_THEORY_OF_MIND: ~300 words.
CROSS_LAYER_VETO_ADJUDICATION: ~350 words.
RLVR_COUNTERFACTUAL_VETOES: ~250 words.
Total ~2150 words. Good.

Need to be careful with LaTeX formatting. Use \( ... \) or \[ ... \]. State units: seconds (s), bits, dimensionless, pixels/dp.

Breakdown regimes:
- Hick-Hyman breakdown: n > ~50-100 equally likely items; non-uniform p_i violates equal-probability assumption; prefix ambiguity in search.
- Fitts breakdown: W < 44 dp (Apple HIG) or 48 dp (Material); D > max screen diagonal; dynamic small targets.
- Shannon entropy breakdown: non-stationary p(x) across user cohorts; copy not localized; human copy judged by perplexity PPL = 2^H.
- Rollback singularity: feature flag R=0 but component already persisted user preferences or local state; "No data or billing changes" means ΔDB = 0 ∧ ΔBilling = 0, but if help component writes analytics to localStorage, rollback must clear it or veto.

Let's write.

I must ensure XML sections are exactly named.

I will not use markdown code blocks for the XML? The user asked for exact XML sections. I'll output raw XML tags. It's fine to include LaTeX inside.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit for BUILD-HELP-018.

The source card [PAGE 1] defines a global help search command palette whose explicit acceptance criterion is that "A new user understands the item in 10 seconds" [PAGE 1]. This is a hard cognitive-budget constraint, not a soft preference. In information-processing terms, the 10-second ceiling imposes an upper bound on the mutual information a user can extract from the help affordance before task abandonment. Let T_comprehension denote the measured time-to-understand. The requirement is T_comprehension ≤ 10 s with probability approaching 1 across the target user population. Exceeding this boundary triggers the card's own failure mode: users do not know what they are seeing, why it matters, how to use it, or what to do next [PAGE 1].

The duplicate gate marks BUILD-HELP-018 as EXTENSION relative to matched_existing_ids BUILD-015 [PAGE 1], extending an existing onboarding/help/video/copy queue item with page-level teachability. This is a critical gray zone: extension must not become duplication, nor may it import founder-only methodology [PAGE 1]. The gray-zone boundary is therefore two-sided. On one side, reusing BUILD-015 assets risks surfacing proprietary GSN methodology inside a global help surface, violating the Legal / Method Boundary clause that reads "No founder-only methodology leakage. No fake certainty" [PAGE 1]. On the other side, building a standalone palette from scratch risks missing the "repeatable help asset pipeline" internal value [PAGE 1], producing one-off explanations that fail the acceptance criterion "The help text sounds human" [PAGE 1]. The derivation must therefore treat BUILD-015 as a structural template while quarantining any founder-specific heuristics behind a review gate.

The implementation plan [PAGE 1] prescribes five ordered operations: verify real app source and design system; add the smallest help pattern; include summary, next action, trust note, and media/visual slot; add mobile and reduced-motion behavior; add analytics and QA. Each operation maps to a formal veto layer. Step 2's "smallest help pattern" implies a minimal-cardinality search index, which directly activates Hick-Hyman search-time dynamics: adding more help topics increases decision time logarithmically, but only under the assumption of uniform topic probability and unambiguous prefix matching. If the command palette indexes N topics with non-uniform access probabilities, the effective information load exceeds log2(N) and the 10-second budget can collapse. Step 4's mobile and reduced-motion requirement introduces a biomechanical singularity: on small-viewport devices, if the activation target width W falls below the accessible touch-target floor (approximately 44–48 dp depending on design system), Fitts's law movement time diverges as W approaches the minimum resolvable target, and users with motor impairment cannot reliably activate the palette. Reduced-motion is not decorative; when the operating system signals prefers-reduced-motion: reduce, any CSS transition or motion media slot must be suppressed or replaced with a static equivalent, otherwise the visual path violates accessibility and the acceptance criterion "There is a video, motion, table, visual, or example path" [PAGE 1] becomes a liability rather than an asset.

The rollback plan [PAGE 1] states: "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes." This defines a clean failure manifold. Let R ∈ {0,1} be the rollback feature-flag state. The invariant is ΔDatabase = 0 ∧ ΔBilling = 0 for all transitions R: 1 → 0. The gray zone is local client-side state: if the help component writes analytics, dismissed-tool-tip flags, or local-search history to browser storage, a pure component removal leaves orphaned state. The rollback is only clean if the component is stateless with respect to persistence, or if the rollback procedure explicitly clears the isolated local entries. Otherwise the "no data changes" claim is falsified by client-side residue.

Legal and responsible-play boundaries [PAGE 1] require "clear disclosures and responsible-play-safe copy" on promotions/risk surfaces. Because this is a global help surface, any help entry adjacent to risk-oriented features must not imply outcome certainty, must not leak proprietary edge methodology, and must not use language that could be construed as a probabilistic guarantee. The phrase "trust-safe media or visual path" [PAGE 1] therefore functions as a compliance filter: media must illustrate functionality, not suggest predictive superiority.

Synthesis: BUILD-HELP-018 is executable only if the command palette treats the 10-second comprehension clock as a hard constraint, extends rather than duplicates BUILD-015, quarantines founder methodology, enforces accessible touch targets and reduced-motion fallbacks, scopes analytics under consent-safe events, and implements a rollback that clears local client residue. All subsequent sections formalize these derivations.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, assumptions, and breakdown regimes derived from [PAGE 1].

Source-extracted requirements (verbatim, [PAGE 1]):
- "Users need to find value in 10 seconds." → comprehension-time hard ceiling.
- "every major item needs an immediate explanation, a next action, and a trust-safe media or visual path." → four-field help tuple.
- "No founder-only methodology leakage. No fake certainty." → method-boundary filter.
- "Promotions/risk surfaces need clear disclosures and responsible-play-safe copy." → compliance filter.
- Acceptance: "A new user understands the item in 10 seconds." → T_comprehension ≤ 10 s.
- Acceptance: "The item has a help affordance." → activation target must exist.
- Acceptance: "The help text sounds human." → copy-perplexity and tone constraint.
- Acceptance: "There is a video, motion, table, visual, or example path." → media slot required.
- Acceptance: "Method boundaries are protected." → founder-methodology quarantine.
- Rollback: "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes." → R ∈ {0,1}, ΔDB = 0, ΔBilling = 0.
- Test: "visual screenshot QA, mobile readability checks, copy audit, reduced-motion check, and help coverage scan." → verification suite.

Formal model. Let T_comprehension be time-to-understand in seconds (s). The acceptance criterion is:

P(T_comprehension ≤ 10 s) ≥ 1 − ε,   ε ≪ 1

where ε is the acceptable failure probability for new users. This is not a toy ratio; it is a bounded service-level objective on a latent human-performance variable.

Search activation and topic selection follow the Hick-Hyman law. If the command palette presents n help topics with selection probabilities p_i, mean reaction time RT in seconds is:

RT = a + b · H,   H = − Σ_{i=1}^{n} p_i log_2(p_i)   [bits]

where a is intercept (s), b is information-processing rate (s/bit), and H is Shannon entropy of the topic distribution. Under uniform p_i = 1/n, H = log_2(n). Assumptions: well-practiced users, unambiguous labels, no prefix collisions, and motor-independent decision. Breakdown regime: n ≳ 50–100 equally likely topics, non-stationary p_i across user cohorts, or search-prefix ambiguity causing re-typing; in these regimes RT exceeds the 10 s budget because H grows beyond the channel capacity of working memory (approximately 4 ± 1 chunks).

Target acquisition for the palette trigger follows Fitts's law. Movement time MT in seconds is:

MT = a_F + b_F log_2(D/W + 1)

where D is distance from current cursor/focus to the help affordance (pixels or dp), W is target width (dp), and a_F, b_F are device-dependent constants (s). Assumptions: static target, no occlusion, pointer within reachable viewport. Breakdown regime: W < 44–48 dp on mobile (violating accessible touch-target floor), D greater than the maximum screen diagonal, or dynamic target that moves under the pointer. In the singular limit W → 0, MT → ∞, meaning the help affordance is effectively unreachable.

Reduced-motion handling. Let M ∈ {0,1} indicate whether the OS requests reduced motion (M = 1 for prefers-reduced-motion: reduce). Any animation or motion media slot A(t) must satisfy:

M = 1 ⇒ A(t) ≡ static equivalent

Breakdown: if CSS transitions or motion media play when M = 1, the accessibility acceptance criterion fails and the visual path becomes a veto trigger rather than a support path.

Human-copy constraint. Let H_copy denote copy perplexity estimated by a language model over the help text, measured in bits per word. Human-sounding copy implies low surprise relative to a support-tone reference distribution q(w):

H_copy = − Σ_w p(w) log_2 q(w)

Breakdown: if H_copy exceeds the threshold for legalistic or engineering jargon, the acceptance criterion "help text sounds human" fails. Copy audit is the operational measurement.

Rollback invariant. Let R be the feature-flag state. The rollback plan requires:

R: 1 → 0 ⇒ Component removed OR hidden, ΔDatabase = 0, ΔBilling = 0

Client-side residue singularity: if localStorage, IndexedDB, or cookies store dismissed-help state, the rollback must include a clear() operation, otherwise ΔDatabase ≠ 0 in the client-side sense and the rollback is incomplete.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The command-palette help pattern descends from a well-documented lineage of global affordances. The modern Ctrl/Cmd+K command palette traces to early launcher interfaces and was popularized by developer tools (VS Code, Slack, Spotlight), where a global keyboard shortcut exposes a searchable index of actions. GSE's BUILD-015, referenced in the duplicate gate as the existing onboarding/help/video/copy queue item [PAGE 1], establishes the prior artifact: a help asset pipeline built around explanation, next action, and media. BUILD-HELP-018 extends that lineage by adding page-level teachability and a command-palette surface [PAGE 1].

Historical traps in this genealogy appear across multi-week rollouts. First, the "global surface without index completeness" trap: a command palette ships globally but only indexes a subset of pages, so users search for help that does not exist and conclude the product is undocumented. This directly contradicts the card's goal that users know what they are seeing without reading a manual [PAGE 1]. Second, the "copy drift" trap: engineering writes help text that is accurate but inhuman, failing the human-copy acceptance criterion and the Legal / Method Boundary by accidentally exposing internal shorthand or founder methodology [PAGE 1]. Third, the "motion trap": animated help media that cannot be disabled under prefers-reduced-motion, creating accessibility regressions that surface only in QA or post-launch. Fourth, the "feature-flag ghost" trap: the component is hidden behind a flag but client-side help state (dismissed tooltips, search history) persists, so rollback does not actually restore a clean state, violating the "no data changes" clause [PAGE 1].

The multi-week trap specific to GSE is that P1 priority and Difficulty M compress the verification window. Because the product surface is global [PAGE 1], a defect in the command palette propagates across every route rather than remaining isolated. The genealogical lesson is that help infrastructure must be treated as core navigation, not decorative content: if the palette fails, users lose the primary mechanism for understanding proprietary complexity, and the 10-second comprehension clock fails globally [PAGE 1].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Recursive theory of mind here models the nesting of expectations: what the user expects the help system to communicate, what the builder expects the user to understand, and what the reviewer expects the builder to verify. Under launch pressure, crisis habit regression dominates. Developers regress to shipping the command palette as a plain input field with an unstyled dropdown, skipping the design-system verification required by Step 1 [PAGE 1]. They write copy in the voice of API documentation rather than human support, failing "help text sounds human" [PAGE 1]. They bind analytics events that fire on every keystroke, creating privacy and performance surface that was not approved in the implementation plan [PAGE 1]. They omit reduced-motion fallbacks because the motion media slot seems optional, failing Step 4 and the accessibility acceptance criterion [PAGE 1].

The counter-trap is to reverse the recursive model: build from the user's 10-second clock backward. If a new user opens the palette, the first frame must contain a short summary [PAGE 1]; the second interaction must offer a next action [PAGE 1]; the third layer must provide a trust note and media slot [PAGE 1]. At every recursive layer, the builder asks: "If I were the user with no manual, would I know what I am seeing, why it matters, how to use it, and what to do next?" [PAGE 1] This is the user-value clause unpacked into a cognitive walkthrough.

The clock is both the acceptance criterion and the forcing function. T_comprehension ≤ 10 s is not a design aspiration; it is the boundary condition that determines whether the feature ships. Under P1 priority, the clock compresses the QA window: visual screenshot QA, mobile readability, copy audit, reduced-motion check, and help coverage scan must all complete before rollout [PAGE 1]. The recursive counter-pressure is that extending BUILD-015 [PAGE 1] tempts reuse of legacy copy that may contain founder methodology; the theory of mind must anticipate the reviewer's objection that method boundaries are being violated [PAGE 1], and preempt it with a quarantine review before any text reaches the palette.

Recursive depth limit: three layers. Layer 1: user sees palette. Layer 2: user trusts palette. Layer 3: user acts on next action without manual. If any layer exceeds the time budget or fails the human-copy test, the entire recursive chain collapses and the rollback flag R must engage [PAGE 1].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto. The global surface [PAGE 1] spans desktop and mobile viewports. The help affordance must satisfy accessible touch-target minimums: W ≥ 44 dp (Apple HIG) or 48 dp (Material) on mobile. If the palette trigger falls below this width, the Fitts's law singularity W → small makes MT diverge [PAGE 1 implementation plan, step 4]. Veto condition: mobile readability check fails or touch target < 44 dp. Proof required: screenshot QA on smallest supported breakpoint with measured target dimensions.

Biomechanical layer veto. Reduced-motion is a biomechanical accessibility requirement, not a preference. When prefers-reduced-motion: reduce is active, all CSS transitions, motion media, and animated examples in the help slot must be replaced by static equivalents [PAGE 1, step 4]. If motion plays anyway, users with vestibular disorders experience adverse effects, and the acceptance criterion "There is a video, motion, table, visual, or example path" becomes an accessibility violation rather than a support path. Veto condition: reduced-motion check fails.

Environmental / network layer veto. Although weather is not literally applicable to a software help palette, the environmental analog is poor network and low-device capability. The command palette must not block the main thread while indexing help topics; search must be debounced and local-first where possible. If the palette index is fetched remotely and blocks rendering, the 10-second comprehension clock fails on slow connections. Veto condition: time-to-interactive for palette activation exceeds a threshold compatible with T_comprehension ≤ 10 s.

Legal / method boundary veto. The card explicitly prohibits founder-only methodology leakage and fake certainty [PAGE 1]. Any help entry adjacent to promotions or risk surfaces must carry clear disclosures and responsible-play-safe copy [PAGE 1]. If a help summary implies outcome certainty, references proprietary GSN edge methodology, or omits required disclosures, the component is vetoed before merge. Veto condition: copy audit detects methodology leakage or certainty language.

Adjudication order. Vetoes are evaluated in this priority: (1) legal/method boundary, because non-compliance cannot be rolled back by CSS; (2) physical/biomechanical accessibility, because these are hard exclusion criteria; (3) environmental/performance, because they determine whether the 10-second clock can be met; (4) content quality (human copy, media slot). A single veto in layers 1–2 triggers immediate rollback via R: 1 → 0 [PAGE 1]. A veto in layer 3 triggers a fix-before-ship gate. A veto in layer 4 triggers copy/media revision without code rollback.

Rollback proof. Because the plan forbids data and billing changes [PAGE 1], each veto must be resolved by component removal or feature-flag hide, with client-side help state cleared where present. If the rollback itself cannot restore a clean client state, the veto escalates to a blocker requiring a hotfix patch rather than a flag toggle.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios with predictions, each mapped to [PAGE 1] acceptance criteria and the rollback invariant.

Scenario 1: Accessible touch-target violation on mobile.
Setup: The command palette activation button ships at 32 dp width on the smallest supported mobile breakpoint, below the 44 dp accessible floor. The reduced-motion media query is correctly implemented, and copy passes audit.
Veto trigger: Mobile readability check and physical-layer Fitts's law check fail because W < 44 dp causes MT to approach the singular regime where reliable activation is improbable for users with motor impairment [PAGE 1, implementation plan step 4].
Prediction: QA fails the mobile readability check. The component is hidden behind the feature flag (R: 1 → 0) or removed. No data or billing changes occur because the component is stateless with respect to persistence [PAGE 1, rollback plan].

Scenario 2: Founder methodology leakage in help copy.
Setup: A help summary for a proprietary GSE feature includes internal shorthand that reveals founder-only edge methodology, violating "No founder-only methodology leakage" and "No fake certainty" [PAGE 1]. The UI, motion, and mobile behavior are compliant.
Veto trigger: Copy audit detects methodology leakage. The acceptance criterion "Method boundaries are protected" fails [PAGE 1].
Prediction: The help text is quarantined and the affected content entry is removed or hidden behind the feature flag. Because no database or billing writes are associated with help copy [PAGE 1, rollback plan], rollback is clean; prediction is zero data mutation.

Scenario 3: Motion media plays under prefers-reduced-motion.
Setup: The trust-safe media slot includes an auto-playing animated example that does not respect prefers-reduced-motion: reduce. All other acceptance criteria pass.
Veto trigger: Reduced-motion check fails. The visual path becomes an accessibility barrier rather than a support path [PAGE 1, acceptance criteria].
Prediction: The animation is replaced with a static equivalent or the media slot is disabled under M = 1. If the component cannot be conditionally rendered safely, it is removed behind the feature flag. Rollback satisfies ΔDatabase = 0 and ΔBilling = 0 [PAGE 1], with the only residual risk being client-side dismissed-state cookies, which must be cleared as part of the rollback procedure to preserve the no-data-changes invariant.
</RLVR_COUNTERFACTUAL_VETOES>