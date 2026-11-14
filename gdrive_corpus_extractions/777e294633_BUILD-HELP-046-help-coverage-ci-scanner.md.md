---
source: "BUILD-HELP-046-help-coverage-ci-scanner.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/help-education-ux/claude-build-queue/cards"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3688
---

<NATIVE_REASONING>
The user has provided a source document about a "Help coverage CI scanner" build task (BUILD-HELP-046) and wants me to act as the GSE + GSI Frontier Reasoning Foundry. I need to produce a response with specific XML sections:

1. <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
2. <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
3. <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
4. <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
5. <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
6. <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Constraints:
- ZERO BETTING LINES: No spreads, totals, moneylines, odds.
- ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes since source pages are provided (1 page).
- >= 1,000-word depth across sections.

Wait, the source text is about a help coverage CI scanner for Galaxy Sports Edge. But the sections seem more oriented toward sports modeling/biomechanics/weather vetoes. I need to adapt these sections to the provided source document while maintaining the required structure. The sections seem somewhat mismatched with the content (help coverage CI scanner), but I must fill them as requested.

Let me think about how to map each section:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit about the help coverage CI scanner. I can discuss the derivation from user value -> product surface -> implementation -> acceptance criteria. Gray zones: "10 seconds" comprehension metric, "human" copy, trust-safe media, mobile/reduced-motion, rollback safety.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. I can model comprehension time as a random variable T_comp with units seconds, P(T_comp <= 10s) >= target. Information entropy of help text. QA checks as operators. Page citation [PAGE 1] since only 1 page. Verbatim quotes from source.

RETROCAUSAL_GENEALOGY: Historical lineage of CI scanners, help systems, progressive disclosure, 10-second rule in UX (Nielsen Norman Group etc.), multi-week traps (feature creep, localization bloat, analytics instrumentation debt).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. How teams might regress under pressure (skip reduced motion, skip copy audit), counter-traps (over-engineering help system), clock (10-second comprehension deadline).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since this is software help UI, I can map: physical = device hardware constraints (screen size, touch targets), biomechanical = motor/reduced-motion, vestibular disorders, reading speed, weather = environmental context (glare, low light, outdoor mobile use). Veto conditions.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some internal GSE concept. I'll treat as verifiable reward scenarios where the help scanner fails. Three scenarios: (1) comprehension > 10s due to copy length, (2) reduced-motion violation causing vestibular trigger, (3) missing trust disclosure causing regulatory/legal veto. Predictions for each.

Need to ensure no betting lines. The source doesn't mention betting anyway, but I must be careful not to introduce odds/spreads/moneylines.

Need formal LaTeX equations, not toy ratios. So avoid "Force / Fatigue". Use real math: probability bounds, entropy H(X), Fitts' law maybe (MT = a + b log2(2D/W)), Hick-Hyman law (RT = a + b log2(n)), reading speed models. Units: seconds, bits, radians/second for motion, etc.

Assumptions and exact singularity/breakdown regimes: e.g., when screen width < 320px, when motion preference = reduce, when cognitive load exceeds working memory capacity (Miller's 7±2 chunks), etc.

Cite [PAGE 1] and verbatim quotes.

Word count: >= 1,000 words total across XML sections. THINK_TRACE alone >= 400 words.

Let me draft carefully.

Structure:

<THINK_TRACE>
(>=400 words) Multi-hop derivation:
- Hop 1: Goal -> User Value: proprietary complexity requires immediate explanation, next action, trust-safe media path.
- Hop 2: Product Surface CI -> Implementation Plan steps 1-5 map to acceptance criteria.
- Hop 3: Acceptance criteria -> Test Plan -> Rollback Plan forms a closed safety loop.
- Gray zones: "10 seconds" is not operationally defined in source; no baseline measurement instrument specified. "Human" copy is subjective; no rubric or citation to plain-language standards (e.g., CDC Clear Communication, Nielsen Norman). Trust-safe media undefined; legal boundary mentions disclosures but no template. Analytics "where applicable" is non-committal. Rollback says no data/billing changes but adding analytics may touch data pipeline—potential contradiction.
- Derive that the scanner is a CI gate (go/no-go) rather than a runtime component.
- Discuss information-theoretic limit: if help text entropy exceeds user channel capacity in 10s, failure.
- Gray-zone audit: duplicate gate says NET_NEW but relation to existing says "Distinct help/aesthetic coverage system not present in prior queues"—could overlap with design system help patterns; needs repo verification (step 1).
Word count target ~500-600.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
- Cite [PAGE 1] with verbatim quotes.
- Formal operators: Comprehension time T_c ~ distribution. Constraint: P(T_c <= 10 s) >= 0.95 (assumed target, not in source—must flag as assumption).
- Information content: Help text H_help <= C_channel * T_window where C_channel ~ reading rate (bits/s). Reading rate assumption ~ 200-250 wpm English prose -> ~ 8-10 bits/s? Actually reading speed in words per minute; can convert to bits using Shannon entropy of English ~1-1.2 bits/char. Maybe keep simpler: N_words <= WPM * (10/60). If WPM = 250, N_words <= ~42 words for 10s. But that's toy-ish? It's a formal bound with assumptions. I should present it as an assumption with breakdown regime: when N_words > 40 or sentence complexity > grade 8, the 10s bound likely fails.
- LaTeX for Fitts' law for touch targets: MT = a + b log2(2D/W). Units seconds. Breakdown when W < 9mm (touch target) or D too large on mobile.
- Reduced motion: vestibular stimulus frequency f_mo must satisfy f_mo < f_threshold or motion reduced. Breakdown when prefers-reduced-motion: reduce and CSS animation !important overrides.
- QA operator: Screenshot QA passes iff structural similarity SSIM >= threshold vs baseline and no overlap of help affordance with interactive elements.
- Singularity/breakdown: CI scanner becomes vacuous if no testable threshold; rollback via feature flag fails if flag not wired.
- Verbatim quotes: "Users need to find value in 10 seconds." etc.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
- Historical lineage: 10-second rule / 8-second attention (Microsoft study), Nielsen Norman Group usability, progressive disclosure (Carroll minimalism), CI linting (ESLint, stylelint), design system tokens.
- Multi-week traps: Week 1 copy written by product not UX writing; Week 2 animation added without reduced-motion fallback; Week 3 analytics events proliferate without schema; Week 4 localization strings break layout; Week 5 legal disclosure copy changes require re-scan; Week 6 "smallest help pattern" expands to full help center (scope creep). Also trap: scanner becomes rubber-stamp because acceptance criteria subjective ("human" copy).
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: Under launch pressure, team skips mobile readability check, keeps autoplay motion, uses jargon copy ("CI scanner", "proprietary methodology"), omits trust note.
- Counter-trap: Over-correct by building a full help-authoring CMS, multi-language workflow, video production pipeline—violates "smallest help pattern" and rollback simplicity.
- Clock: 10-second comprehension deadline acts as a forcing function; if CI scan is not integrated into PR merge gate within 2 weeks, it becomes post-launch audit and is ignored.
- Recursive ToM: Product assumes users read; support assumes users contact; growth assumes users convert. The scanner must model each agent's model of the user.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical layer: device screen density, viewport width < 320px (breakdown), touch target < 48x48 dp (breakdown), sunlight legibility contrast < 4.5:1.
- Biomechanical layer: vestibular disorders, reduced-motion preference, fine motor impairment, reading speed below average (low literacy), cognitive load. Veto if animation respects not prefers-reduced-motion.
- Weather/environmental layer: mobile outdoor use, glare, low brightness, one-handed thumb zone. Veto if help media requires audio without captions (sound-off env) or relies on hover (no hover on mobile).
- Veto proof: The CI scanner itself must be subject to these vetoes; if any layer fails, merge is blocked regardless of other layers passing.
- No betting lines.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Copy length exceeds 10-second channel capacity. Prediction: CI blocks merge; if bypassed, user task success rate drops below 80% and support tickets for that feature rise >2x within 2 weeks. Verifiable via screenshot QA + word count + readability grade <= 8.
Scenario 2: Reduced-motion violation. Prediction: CSS transition/animation runs despite prefers-reduced-motion: reduce; vestibular-triggered user aborts task; WCAG 2.3.3 failure; measurable via automated axe-core or puppeteer check; block rate should be 100% for violations.
Scenario 3: Missing trust-safe disclosure / legal boundary. Prediction: Help media promotes feature without responsible-play-safe copy or disclosure; legal veto triggers rollback; regulatory exposure if found in production; verifiable via copy audit keyword scan for disclosure terms and human sign-off.
Need exactly 3 verifiable RLVR veto scenarios + predictions.

Now ensure word count >= 1000 total. I'll write generously.

Also must avoid fake ratios. I'll avoid anything like "Force/Fatigue". All equations will be formal with units.

Need to cite [PAGE 1] and verbatim quotes. Since only one page provided, every reference is [PAGE 1].

Let's write. I'll aim for THINK_TRACE ~600 words, SOURCE ~350 words, RETRO ~250, RTM ~250, CROSS ~250, RLVR ~200. Total ~1900. Safe.

Be careful with LaTeX formatting inside XML. It's fine.

No betting lines—check. No toy equations—check. Formal LaTeX yes.

Let's produce the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

Hop 1: From goal to user value. The source states the goal is a "Help coverage CI scanner" and the user value is that "Users know what they are seeing, why it matters, how to use it, and what to do next without reading a manual." [PAGE 1] The "Why It Matters" clause supplies the operational urgency: "Users need to find value in 10 seconds. GSE is proprietary and complex, so every major item needs an immediate explanation, a next action, and a trust-safe media or visual path." [PAGE 1] This establishes a time-bounded comprehension constraint: the help affordance must resolve user uncertainty within a 10-second window, or the user abandons the item before reaching the next action.

Hop 2: From product surface to implementation plan. Product surface is CI. [PAGE 1] The implementation plan is a five-step linear derivation: (1) verify real app source and existing design system; (2) add/specify the smallest help pattern for the target surface; (3) include one short summary, one next action, one trust note, and one media/visual slot; (4) add mobile and reduced-motion behavior; (5) add analytics and QA checks where applicable. [PAGE 1] Each step maps one-to-one onto an acceptance criterion: step 2 onto "The item has a help affordance"; step 3 onto "The help text sounds human" and the video/motion/table/visual/example path requirement; step 4 onto mobile and reduced-motion QA; step 5 onto analytics/QA. The rollback plan—remove the isolated component/content entry or hide it behind a feature flag, with no data or billing changes—closes the loop by making the change reversible at the content layer without touching billing or secrets, consistent with the Claude Code prompt's explicit prohibition. [PAGE 1]

Hop 3: From acceptance criteria to test plan and legal boundary. Acceptance criteria require a new user to understand the item in 10 seconds, a human-sounding copy, a media/visual path, and protected method boundaries. [PAGE 1] The test plan operationalizes these as visual screenshot QA, mobile readability checks, copy audit, reduced-motion check, and help coverage scan. [PAGE 1] The legal/method boundary prohibits founder-only methodology leakage, fake certainty, and requires clear disclosures and responsible-play-safe copy on promotions/risk surfaces. [PAGE 1]

Gray-zone audit. The source leaves several parameters formally undefined. "10 seconds" is stated as a user-experience requirement but no baseline measurement instrument, sampling population, or pass/fail threshold is specified; it is a heuristic, not a derived SLA. "Human" copy is subjective and lacks a rubric (e.g., plain-language grade level, sentence-length cap, jargon exclusion list). "Trust-safe media or visual path" and "responsible-play-safe copy" are not defined by template or example, creating a legal interpretation gray zone. The duplicate gate claims NET_NEW with no matched existing IDs, yet the implementation plan requires verifying the existing design system first, which implies potential overlap with help/aesthetic patterns that may already exist in prior queues; this tension must be resolved in step 1 before any component is added. Finally, "analytics and QA checks where applicable" is non-committal: applicability is not defined, so the CI scanner risks becoming a no-op gate if no team owns the threshold definition. These gray zones do not invalidate the build, but they define the exact regimes in which the scanner degenerates into a rubber-stamp: whenever copy length, motion preferences, or disclosure requirements are not numerically bounded, acceptance becomes auditor-dependent rather than rule-dependent.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

All references below cite [PAGE 1] of the provided source. Verbatim quotes are included verbatim.

Let \(T_c\) be user comprehension time for a help-covered item, measured in seconds (s). The source requirement is
\[
\Pr(T_c \le 10\,\text{s}) \ge \tau,
\]
where \(\tau\) is a target reliability that the source does not numerically specify; I adopt \(\tau = 0.95\) as a working assumption, not as a source-claimed value. Breakdown regime: if no instrumented baseline for \(T_c\) exists, the inequality is unverifiable and the CI gate reduces to a subjective audit.

Let \(N_w\) be the word count of the short summary plus next action plus trust note. Assuming an adult English prose reading rate \(R \approx 250\) words per minute (wpm), the channel capacity over the 10-second window is
\[
N_{w,\max} = R \cdot \frac{10\,\text{s}}{60\,\text{s/min}} \approx 41.7 \text{ words}.
\]
Thus a sufficient condition for the time budget is \(N_w \lesssim 40\) words, assuming no density penalty from jargon. Breakdown regime: if \(N_w > 40\) or if readability grade exceeds approximately grade 8, the 10-second bound is likely violated regardless of visual design. This is a channel-capacity bound, not a toy ratio.

For mobile touch targets on the help affordance, Fitts' law gives movement time
\[
MT = a + b \log_2\!\left(\frac{2D}{W}\right) \quad \text{[seconds]},
\]
where \(D\) is distance to target center and \(W\) is target width. Accessibility convention sets \(W \ge 48\) dp and \(D\) minimized within the thumb zone. Breakdown regime: \(W < 48\) dp or placement outside reachable viewport on small screens (\(<320\) px width) induces motor-error veto.

Reduced-motion operator: let \(f_{\text{anim}}\) be the dominant frequency of CSS/SMIL motion in the media slot, measured in hertz (Hz). If the user preference is prefers-reduced-motion: reduce, then the rendered motion amplitude must satisfy \(A_{\text{rendered}} \approx 0\). Breakdown regime: any non-zero \(f_{\text{anim}}\) with \(A_{\text{rendered}} > 0\) under reduced-motion preference is a WCAG 2.3.3-class failure and an automatic CI veto.

Information-content operator: let \(H_{\text{help}}\) be the Shannon entropy of the help text in bits, and \(C_{\text{user}}\) the user channel capacity in bits/s. Then
\[
H_{\text{help}} \le C_{\text{user}} \cdot 10\,\text{s}.
\]
Breakdown regime: when proprietary terminology raises \(H_{\text{help}}\) above the bound, the item cannot be understood in 10 seconds and the scanner should fail.

QA screenshot operator: structural similarity \(\text{SSIM}(I_{\text{candidate}}, I_{\text{baseline}}) \ge \theta_{\text{SSIM}}\) with no overlap between help affordance and interactive elements. Breakdown regime: SSIM below threshold or bounding-box intersection \(>0\) triggers visual QA failure.

Verbatim source quotes: "Users need to find value in 10 seconds." [PAGE 1]; "GSE is proprietary and complex, so every major item needs an immediate explanation, a next action, and a trust-safe media or visual path." [PAGE 1]; "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes." [PAGE 1]; "No founder-only methodology leakage. No fake certainty. Promotions/risk surfaces need clear disclosures and responsible-play-safe copy." [PAGE 1]

Singularity/breakdown of the scanner itself: if step 1 (verify real app source and design system) is skipped, the "smallest help pattern" may duplicate existing components, violating the duplicate-gate NET_NEW claim. If analytics are instrumented without a schema, the rollback promise of "no data changes" is contradicted. These are the exact regimes where the CI scanner transitions from a safety gate to process theater.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

Lineage. The 10-second comprehension requirement descends from the "eight-second attention" literature popularized by Microsoft's 2015 attention-span study and from Nielsen Norman Group research on users' willingness to abandon pages that do not communicate value within the first several seconds. The structural template—short summary, next action, trust note, media/visual slot—derives from Carroll's minimalism and progressive-disclosure design patterns, where users receive just enough information to act, with deeper detail available on demand. The CI-scanner form factor descends from automated linting and design-system enforcement tools (e.g., ESLint, stylelint, Storybook addons) that block merges violating accessibility or copy standards. The "human copy" audit reflects the plain-language movement and UX-writing practice of reading copy aloud to detect jargon.

Multi-week traps. Week 1 trap: product writes the copy instead of a UX writer, producing "GSE is proprietary and complex" jargon that fails the human-copy criterion. Week 2 trap: a motion designer adds an autoplay video to satisfy the media/visual slot without respecting prefers-reduced-motion, creating a vestibular barrier. Week 3 trap: analytics events are added ad hoc ("where applicable"), creating schema drift and contradicting the no-data-changes rollback promise. Week 4 trap: localization strings expand the help card beyond mobile viewport bounds, breaking readability checks. Week 5 trap: legal requires new disclosure language on promotions/risk surfaces, but the copy audit lacks a disclosure keyword list, so the change ships unvetted. Week 6 trap: the "smallest help pattern" scope-creeps into a full help-authoring CMS, video production pipeline, and multi-language workflow, violating the minimal implementation plan and making rollback non-trivial. The ultimate trap is scanner vacuity: because acceptance criteria include the subjective phrase "help text sounds human," teams may rubber-stamp every PR, rendering the CI gate a pass-through rather than a veto mechanism.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression. Under launch pressure, the implementing team is likely to regress to crisis habits: skip mobile readability checks because "desktop looks fine," retain autoplay motion because "the video is important," write copy in engineer voice ("CI scanner initializes help coverage module") because it is faster, and omit the trust note because legal review is slow. Each regression is a first-order model of the user as a patient, expert reader who tolerates friction—a model that contradicts the source's premise that users need value in 10 seconds.

Counter-trap. The counter-regression is over-correction: the team builds a full help-content management system, multi-locale workflow, video production pipeline, and A/B-testing harness to "guarantee" compliance. This is the scope-creep trap identified above; it violates "smallest help pattern," complicates rollback beyond a feature flag, and delays the scanner past its useful integration window.

Clock. The 10-second comprehension deadline is also a project clock: if the CI scanner is not wired into the PR merge gate within the first two weeks of the build, it becomes a post-launch audit and is ignored by shipping teams. The recursive theory of mind here requires modeling three nested agents: Product assumes users will read; Support assumes users will contact help; Growth assumes users will convert. The help scanner must model each agent's model of the end user and force alignment: if Product's copy exceeds the 10-second channel capacity, Support tickets rise; if Growth promotes without responsible-play-safe copy, regulatory exposure arises. The scanner's recursion terminates only when all three agent-models converge on a single item that satisfies summary + next action + trust note + media within the time budget.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto layers.

Physical layer (device/hardware). Viewport width below 320 px collapses the media/visual slot and makes the help affordance unreadable; touch targets below 48×48 dp violate motor targeting bounds under Fitts' law; screen density below approximately 160 dpi reduces glyph legibility. Veto condition: any of these physical constraints unmet on target mobile devices blocks merge.

Biomechanical layer (user body). Vestibular disorders and photosensitivity make autoplay motion a barrier; fine-motor impairment increases \(MT\) under Fitts' law; low literacy or cognitive load reduces \(C_{\text{user}}\), tightening the entropy bound. Veto condition: prefers-reduced-motion: reduce is present and any animation renders with non-zero amplitude; or contrast ratio below 4.5:1 for normal text; or absence of captions on audio/video media in sound-off environments.

Weather/environmental layer (context of use). Outdoor mobile use in glare reduces effective contrast; one-handed thumb-zone reachability limits placement of the help affordance; low-battery or low-brightness modes dim media slots. Veto condition: help content relies on hover states (unavailable on touch), requires audio without captions, or places the affordance outside the thumb zone on large phones.

Veto adjudication proof. The CI scanner itself is subject to these layers: it is not sufficient for the copy to pass if the motion violates biomechanics, nor for motion to pass if physical screen constraints fail. The veto order is (1) legal/method boundary (disclosures, responsible-play-safe copy), (2) biomechanical (reduced motion, captions, contrast), (3) physical (viewport, touch target), (4) environmental (audio dependency, hover reliance). Any single layer failure is sufficient to block the merge regardless of passage in other layers, providing a veto-proof safety property consistent with the rollback plan's isolation guarantee.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) veto scenarios with counterfactual predictions.

Scenario 1 — Comprehension-time breach. Counterfactual: the help summary plus next action plus trust note contains 78 words (above the ~40-word channel capacity) and is written at grade 12 readability. Verifiable reward: automated word-count and readability check fails; CI blocks merge. Prediction: if bypassed, measured user task success for the covered item falls below 80% and related support tickets increase by more than 2x within two weeks of launch, because the 10-second channel bound is physically exceeded.

Scenario 2 — Reduced-motion violation. Counterfactual: a CSS animation with \(f_{\text{anim}} = 2.5\,\text{Hz}\) and amplitude \(A = 12\) px runs in the media slot while the user has prefers-reduced-motion: reduce set. Verifiable reward: automated puppeteer/axe-core check detects non-zero rendered motion under reduced-motion preference; CI blocks merge with 100% detection rate for this pattern. Prediction: if bypassed, vestibular-sensitive users abort the task, producing a measurable WCAG 2.3.3 failure and a spike in accessibility complaints within one week.

Scenario 3 — Missing trust/legal disclosure. Counterfactual: the help card promotes a risk surface without a clear disclosure or responsible-play-safe copy, violating the legal/method boundary. Verifiable reward: copy-audit keyword scan for required disclosure terms returns null; human legal sign-off is absent; CI blocks merge. Prediction: if bypassed, the item ships with unvetted promotional language, creating regulatory exposure and forcing a post-launch rollback via feature flag, contradicting the "no data or billing changes" simplicity guarantee because the rollback must now address public-facing compliance rather than isolated content.
</RLVR_COUNTERFACTUAL_VETOES>