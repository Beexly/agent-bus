---
source: "BUILD-HELP-019-customer-confused-click-detector.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/help-education-ux/claude-build-queue/cards"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4257
---

<NATIVE_REASONING>
The user is presenting a source document (a build card) and expecting me to act as the "GSE + GSI Frontier Reasoning Foundry" with strict invariants. However, the source text is about a customer confused-click detector / help-education UX build card, not sports betting or gambling content.

Let me analyze what's being asked:

1. STRICT INVARIANTS:
   - ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
   - ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE 1] markers and verbatim quotes.
   - >= 1,000-WORD DEPTH across exact XML sections.

2. The source is one page (PAGES: 1) about BUILD-HELP-019.

3. I need to produce output in the exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the source text is about a UX help documentation build card, not about sports science, physics, or gambling. But the user wants me to apply the Frontier Reasoning Foundry framework to it. I need to treat the source document as the "ground truth" and analyze it through these lenses, even though some sections (like physical/biomechanical/weather veto) seem mismatched. I need to adapt them to the domain of software UX / documentation / build engineering.

Constraints:
- No betting lines (spreads, totals, moneylines, odds). Since this is a UX doc, there are none anyway, but I must be careful not to introduce them.
- No toy equations. I must state formal LaTeX equations with units, assumptions, breakdown regimes. Since this is about UX comprehension time, I can model comprehension latency, information density, etc., using information theory (Shannon entropy, bits/s), queuing theory, or human-computer interaction models (Hick's Law, Fitts's Law, KLM-GOMS). These are formal and legitimate, not "toy ratios." I must cite [PAGE 1] and verbatim quotes from the source.
- >= 1,000 words total across sections. THINK_TRACE alone >= 400 words.

Let me plan each section:

**<THINK_TRACE> (>=400 words)**
Deep multi-hop derivation:
- Source is BUILD-HELP-019, page 1.
- Duplicate gate: EXTENSION of BUILD-GV2-076. Relation: extends onboarding/help/video/copy queue with page-level teachability.
- Goal: confused-click detector.
- Why: users need value in 10 seconds. GSE proprietary and complex. Every major item needs immediate explanation, next action, trust-safe media/visual path.
- Product surface: all pages.
- User value: know what they're seeing, why it matters, how to use it, what to do next without manual.
- Internal value: repeatable help asset pipeline.
- Legal/method boundary: no founder-only methodology leakage, no fake certainty, disclosures, responsible-play-safe copy.
- Implementation: verify source/design system, add smallest help pattern, summary/next action/trust note/media slot, mobile/reduced-motion, analytics/QA.
- Acceptance: new user understands in 10 seconds, help affordance, human copy, media path, method boundaries protected.
- Test: visual QA, mobile readability, copy audit, reduced-motion, help coverage scan.
- Rollback: remove component or feature flag. No data/billing changes.
- Priority P1, Difficulty M.
- Claude Code prompt instructions.

Gray-zone audit: The "10 seconds" is a heuristic, not a formal SI unit with uncertainty bounds. "Human copy" is subjective. "All pages" is a scope singularity—what if a page has no help pattern? The boundary between "help pattern" and "founder-only methodology" is fuzzy. The rollback says "no data or billing changes" but analytics could imply data changes. Need to audit these gray zones.

**<SOURCE_OPERATORS_AND_EQUATIONS>**
Formal LaTeX equations:
- Model comprehension as information transmission. Let $C$ be comprehension event within time $T_{10} = 10\,\text{s}$.
- Information rate $R$ in bits/s from Hick-Hyman or Shannon. $H(X) = -\sum p(x) \log_2 p(x)$ bits.
- Comprehension probability $P(C|t) = 1 - e^{-\lambda t}$ perhaps? But careful not to invent fake ratios without assumptions. I can state it as a proposed model with assumptions and breakdown regimes.
- Fitts's Law for click target: $MT = a + b \log_2(1 + D/W)$.
- GOMS/KLM operators: $K$ (keystroke), $P$ (pointing), $H$ (homing), $D$ (drawing), $M$ (mental preparation), $R$ (response). Time $T = \sum t_i$.
- Breakdown regime: when $T_{help} > 10\,\text{s}$ or when cognitive load exceeds working memory ($7 \pm 2$ chunks, Miller).
- Units: seconds (s), bits, dimensionless probabilities, pixels (px) for Fitts.
- Citations: [PAGE 1] for quotes like "Users need to find value in 10 seconds."
- Exact singularity/breakdown: if design system doesn't exist, implementation step 1 fails; if "all pages" includes dynamic routes without server-side rendering, help affordance may not hydrate.

**<RETROCAUSAL_GENEALOGY>**
Historical/scientific lineage:
- Onboarding/help queues (BUILD-GV2-076) -> extends to page-level teachability.
- Lineage: minimalist documentation (Carroll's Minimalism), progressive disclosure, Don Norman's affordances, Steve Krug "Don't Make Me Think," HEART framework (Google), information scent (Pirolli & Card).
- Multi-week traps: Week 1: copy written but not localized; Week 2: media slot becomes orphaned video; Week 3: analytics events fire but no dashboard; Week 4: reduced-motion ignored causing vestibular triggers; Week 5: "all pages" scope creep means help modals block critical paths; Week 6: legal disclosures missing on promo pages.
- Counter-traps: feature flags, QA gates, copy audits.

**<RECURSIVE_THEORY_OF_MIND>**
Crisis habit regression vs counter-trap vs clock:
- Under pressure (crisis), devs regress to shipping copy without QA, skipping reduced-motion or mobile checks. Habit regression: "ship first, fix later."
- Counter-trap: treating the 10-second rule as a hard deadline rather than a heuristic, leading to oversimplified copy that removes necessary nuance (especially on legal/risk surfaces).
- Clock: the rollout clock vs comprehension clock. If feature flag toggle happens after 10 seconds of user confusion, the detector has failed. The "clock" is the user's session timeline: $t=0$ page load, $t<10$ comprehension required.
- Recursive ToM: product thinks user is confused; user thinks product is opaque; support thinks ticket volume will drop; growth thinks conversion will rise. Each layer models the other.

**<CROSS_LAYER_VETO_ADJUDICATION>**
Physical/biomechanical/weather veto proof:
- Since this is software UX, "physical" = hardware constraints (mobile screen size, touch target size >= 44x44 dp per Apple/Google), "biomechanical" = motor impairment, tremor, reduced motion/vestibular disorders, "weather" = environmental (glare, low light, network latency affecting media load).
- Veto conditions: if touch target < 44dp, veto. If reduced-motion preference is on and animation is mandatory, veto. If media/visual slot fails to load on 3G within 2s, fallback to static text required. If copy audit fails human-soundness, veto.
- Weather equivalent: network weather (latency $L$, bandwidth $B$). Video slot requires $B > B_{min}$ else static image/text.

**<RLVR_COUNTERFACTUAL_VETOES>**
3 verifiable RLVR veto scenarios + predictions:
1. Scenario: Reduced-motion user visits page with autoplay video in help slot. Veto: component must respect `prefers-reduced-motion`. Prediction: if not respected, accessibility audit fails and WCAG violation occurs; fallback static text must appear.
2. Scenario: Mobile viewport < 360px width; help modal covers next action CTA. Veto: layout must not occlude primary action. Prediction: if occluded, confused-click metric increases >20% (wait, can't mention percentages as betting odds? No, percentages are fine, just not betting odds). Actually, I should avoid fake precision. Prediction: completion rate for next action drops measurably; QA screenshot shows overlap.
3. Scenario: Legal/risk page lacks responsible-play disclosure in trust note. Veto: legal review required before publish. Prediction: if published without disclosure, compliance veto triggers rollback; no data/billing changes per rollback plan.

Word count: Need >= 1000 words across sections. THINK_TRACE >= 400. Let me ensure each section is substantial.

Also must cite exact [PAGE 1] markers and verbatim quotes from source. Since there is only 1 page, I will cite [PAGE 1] frequently and quote verbatim.

No betting lines: I will not mention spreads, totals, moneylines, odds. The source mentions "responsible-play-safe copy" which is fine; I won't turn it into betting odds.

No toy equations: I'll use real formalisms (Shannon entropy, Hick-Hyman, Fitts's Law, KLM-GOMS, exponential decay for comprehension probability) with clearly stated assumptions and breakdown regimes. These are not "invented fake ratios"; they are established models adapted to the domain, with explicit caveats.

Structure of response:
- The XML sections exactly as named.
- No extra text outside? The user said "across these exact XML sections." I should output only the XML sections, likely. I'll wrap them in a root maybe? The user listed sections; I'll output them sequentially. It's safest to output just the sections as requested, perhaps wrapped in <analysis> or just raw. I'll output the sections directly.

Let me draft carefully, aiming for depth and word count.

THINK_TRACE draft (~500 words):
- Start with document identification: BUILD-HELP-019, [PAGE 1].
- Verbatim quotes: "Users need to find value in 10 seconds." "GSE is proprietary and complex, so every major item needs an immediate explanation, a next action, and a trust-safe media or visual path." "all pages." "No founder-only methodology leakage. No fake certainty."
- Multi-hop: Duplicate gate says EXTENSION of BUILD-GV2-076. That means this isn't standalone; it layers onto existing onboarding/help/video/copy queue. The relation is page-level teachability. This creates a dependency: if BUILD-GV2-076 is unstable, BUILD-HELP-019 inherits instability. The "Customer confused-click detector" implies telemetry: detecting clicks that indicate confusion (rage clicks, rapid back-and-forth, misclicks). But the acceptance criteria say "A new user understands the item in 10 seconds," which is a comprehension SLA, not purely a click detector. There's a semantic gray zone between "detect confused clicks" and "prevent confusion via help."
- Gray zone audit: "10 seconds" is stated without variance, distribution, or measurement instrument. Is it mean, median, p95? Without this, the acceptance criterion is unfalsifiable. "Human copy" is subjective; no rubric provided. "All pages" is a scope singularity: pages rendered client-side, 404s, error states, modals—does the help pattern attach to route or component? The rollback says "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes." But step 5 of implementation says "Add analytics and QA checks where applicable." Analytics implies data emission; if analytics writes to a billing-relevant dataset or affects launch gates, the rollback constraint may conflict. Need to clarify boundary.
- Also legal/method boundary: responsible-play-safe copy suggests the product touches regulated or sensitive domains (sports edge/proprietary). But no betting lines allowed in my output; I will treat "responsible-play" as generic trust/safety language and not expand into gambling mechanics.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define comprehension channel. Let source text be random variable X with entropy H(X) [bits]. User cognitive channel capacity C_user [bits/s]. Minimum comprehension time $T_{min} = H(X) / C_user$. Assumption: serial processing, no parallel chunking. Breakdown: if H(X) > C_user * 10 s, then 10-second SLA is physically impossible without reducing H(X) (simplification) or increasing C_user (training). Cite [PAGE 1] "Users need to find value in 10 seconds."
- Hick-Hyman law for decision time among n help choices: $T_{decision} = a + b \log_2(n+1)$ [s]. If multiple help affordances compete, n should be minimized. Breakdown: n > 7 ± 2 overloads working memory (Miller).
- Fitts's Law for help affordance activation: $MT = a + b \log_2(1 + D/W)$ [s], D = distance to help icon [px], W = target width [px]. Mobile constraint: W >= 44 dp (biomechanical). Breakdown: if W < 44 dp or D too large on small screens, MT exceeds budget.
- KLM-GOMS: total task time $T = \sum t_i$ over operators K, P, H, M, R. For help lookup: M (mental) + P (point to help) + K (read) + R (respond). If T > 10 s, fail.
- Comprehension survival model (optional but formal): $P(T_c \le 10) = 1 - e^{-\lambda 10}$ where $\lambda$ is comprehension rate [s^-1]. Assumptions: exponential, memoryless. Breakdown: non-exponential if user must re-read or context-switch; then model invalid.
- Units: seconds (s), bits, bits/s, pixels/px, density-independent pixels (dp), dimensionless probability.
- Page citations [PAGE 1] and verbatim quotes.

RETROCAUSAL_GENEALOGY:
- Lineage from BUILD-GV2-076 (existing queue). Historical: John Carroll's Minimal Manual (1990), Don Norman affordances, Steve Krug, Google HEART, Information Foraging Theory.
- Multi-week traps: enumerate weeks 1-6 as above.
- Why retro-causal: future failure modes (support tickets, compliance) reach back to shape current component design.

RECURSIVE_THEORY_OF_MIND:
- Layers: Engineer models Product; Product models User; User models System; Support models User; Growth models Conversion.
- Crisis habit regression: under deadline, engineer ships copy without copy audit; regression to "write once, never localize."
- Counter-trap: 10-second rule becomes a proxy for removing necessary legal/nuance text, causing compliance failures.
- Clock: $t_{load}=0$, $t_{comprehend} \le 10$. If help hydration happens at $t=12$ due to lazy-loading, the clock has already failed. Predictive coding: user expects help at first paint.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: device pixel ratio, screen width < 360px, touch target size. Veto if help target < 44x44 dp.
- Biomechanical layer: vestibular disorders, motor tremor, screen reader. Veto if `prefers-reduced-motion` not honored or ARIA missing.
- Environmental/weather layer: network latency $L$, bandwidth $B$. If video slot requires $B > B_{min}$ and user on 3G ($B < B_{min}$), fallback to static required.
- Adjudication: veto hierarchy: Legal > Accessibility > Performance > Copy. If any veto fires, rollback via feature flag per rollback plan.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Reduced-motion + mandatory animation. Veto condition met. Prediction: static fallback rendered; WCAG AA met; no layout shift.
- Scenario 2: Mobile occlusion: help modal covers next-action CTA on <=360px. Veto condition met. Prediction: CTA unreachable; screenshot QA fails; component hidden until layout fix.
- Scenario 3: Legal disclosure missing on risk surface. Veto condition met. Prediction: legal review blocks publish; rollback triggered; no data/billing changes.

Need to ensure total words >= 1000. Let me be generous with each section.

Also remember: "When source pages are provided, cite exact [PAGE 1] markers and verbatim quotes." I must include [PAGE 1] and quotes like "Users need to find value in 10 seconds." exactly.

I will not mention betting odds/spreads/totals/moneylines anywhere.

Let's write.

I need to watch out for "zero toy equations." My equations must be formal, with units and assumptions/breakdown. I'll preface them as "formal HCI/information-theoretic operators" not invented ratios.

Let's compose the final output.
</NATIVE_REASONING>

<THINK_TRACE>
Document identification: BUILD-HELP-019, "Customer confused-click detector," single source page [PAGE 1]. The card is marked EXTENSION in the duplicate gate, matched to BUILD-GV2-076, extending an existing onboarding/help/video/copy queue item with page-level teachability. This dependency is a first-order multi-hop constraint: BUILD-HELP-019 cannot ship in a stable state if BUILD-GV2-076 is unstable, because the new component inherits the existing queue's versioning, design-system tokens, and asset pipeline.

The core claim on [PAGE 1] is verbatim: "Users need to find value in 10 seconds." That phrase is the governing service-level objective, yet it is stated as a bare scalar with no distribution (mean, median, p95), no variance bound, and no instrument definition. Without those, the acceptance criterion "A new user understands the item in 10 seconds" is unfalsifiable in QA. A second verbatim anchor states: "GSE is proprietary and complex, so every major item needs an immediate explanation, a next action, and a trust-safe media or visual path." This imposes a four-part content contract per major item: explanation, next action, trust note, media/visual slot. A third anchor defines product surface as "- all pages," which creates a scope singularity: every route, error state, 404, modal, and client-side hydration boundary must either carry the pattern or be explicitly excluded. The card does not define the exclusion register.

Gray-zone audit. The term "confused-click detector" implies telemetry—rage clicks, rapid back-and-forth, misclicks—but the acceptance criteria pivot to comprehension SLA and help affordance rather than click detection. This is a semantic gray zone: the detector is framed as preventive (help before confusion) rather than reactive (detect after confusion). Legal/method boundary text on [PAGE 1] reads: "No founder-only methodology leakage. No fake certainty. Promotions/risk surfaces need clear disclosures and responsible-play-safe copy." This restricts what can be embedded in help slots, especially on risk surfaces, but does not enumerate which proprietary models are excluded. The rollback plan states: "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes." Implementation step 5, however, directs adding "analytics and QA checks where applicable." If analytics writes to a dataset that feeds launch gates or billing attribution, the rollback constraint and the analytics requirement are in tension until the data boundary is audited.

Another gray zone is copy audit: "The help text sounds human" has no rubric, locale matrix, or reading-grade ceiling. "Human" is a latent-variable judgment, not a measurable acceptance test. The reduced-motion requirement introduces a binary accessibility branch that must be tested against `prefers-reduced-motion`; if the media/visual slot is a mandatory animation, the component violates the accessibility acceptance path and must roll back. Finally, "all pages" intersects with the legal boundary: promotional and risk surfaces require disclosures, so a generic help template injected uniformly could either omit required disclosures (compliance veto) or overload low-risk pages with unnecessary legal text (friction veto). These gray zones must be resolved before the P1, difficulty-M work is considered shippable.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators for the help/education detector, with SI/information-theoretic units, assumptions, and breakdown regimes.

Let the page content presented to a new user be modeled as a discrete source X with Shannon entropy
\[ H(X) = -\sum_{i} p(x_i) \log_2 p(x_i) \quad [\text{bits}] . \]
The user's cognitive channel capacity is denoted C_user [bits/s]. Under the serial-processing assumption (no parallel chunking of unrelated UI elements), the minimum comprehension latency is
\[ T_{\min} = \frac{H(X)}{C_{\text{user}}} \quad [\text{s}] . \]
Assumption: H(X) is measured after stripping navigation chrome, leaving only the item's explanation, next action, trust note, and media alt-text. Breakdown regime: if \( T_{\min} > 10\,[s] \), the 10-second comprehension mandate on [PAGE 1] ("Users need to find value in 10 seconds") is physically unattainable without reducing H(X) (simplification, progressive disclosure) or increasing C_user (prior training). The card gives no value for C_user, so T_min is currently an unbounded latent variable.

Help affordance activation is governed by Fitts's law:
\[ MT = a + b \log_2\!\left(1 + \frac{D}{W}\right) \quad [\text{s}] , \]
where D is the distance from the user's focal point to the help target [px] and W is the target width [px]. Mobile constraint: W >= 44 density-independent pixels [dp] per touch-target biomechanical standards. Breakdown: on viewports narrower than 360 dp, if D is large or W < 44 dp, movement time consumes the 10-second budget before comprehension begins.

Decision time among competing help affordances follows the Hick-Hyman form:
\[ T_{\text{decision}} = a + b \log_2(n+1) \quad [\text{s}] , \]
where n is the number of mutually exclusive help entry points on the page. Breakdown: n > 7 ± 2 overloads working memory; since [PAGE 1] demands "one short summary, one next action, one trust note, and one media/visual slot," n must be kept to a single primary help affordance per item.

Task-level execution uses the KLM-GOMS operator sum:
\[ T_{\text{task}} = \sum_{k} t_k \quad [\text{s}] ,\quad t_k \in \{K,P,H,M,R\} , \]
where K = keystroke, P = pointing, H = homing, M = mental preparation, R = response [Card, Moran, Newell]. For help lookup: M (locate help) + P (activate target) + K/M (read summary) + R (execute next action). If T_task > 10 s, the acceptance criterion fails.

A proposed comprehension survival model:
\[ P(T_c \le 10) = 1 - e^{-\lambda \cdot 10} \quad [\text{dimensionless}] , \]
with comprehension rate \(\lambda\) [s^-1]. Assumptions: exponential, memoryless comprehension, no re-reading, no context switch. Breakdown: invalid if the user must re-read copy, switch tabs, or wait for media to load; in those regimes T_c is heavy-tailed and the exponential model underestimates failure probability.

Units used throughout: seconds [s], bits, bits/s, pixels [px], density-independent pixels [dp], dimensionless probability. All page references cite [PAGE 1], the sole source page provided. No betting lines, spreads, totals, moneylines, or odds are referenced in any operator.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of BUILD-HELP-019 extends backward from BUILD-GV2-076, the existing onboarding/help/video/copy queue item named in the duplicate gate on [PAGE 1]. That queue itself descends from minimalist technical-communication tradition: Carroll's Minimal Manual theory (error-focused, immediate usability), Normanian affordance design (visible help affordances), Krug's "Don't Make Me Think" heuristic, and information-foraging theory (Pirolli & Card), where users abandon pages when information scent falls below a threshold. The "10 seconds" imperative is a modern product-layer translation of the same principle: if the user does not perceive value within the attention horizon, the session terminates.

Multi-week failure traps reach forward into the present design. Week 1 trap: copy is written in English only and never localized, violating the "human copy" acceptance criterion across locales. Week 2 trap: the media/visual slot becomes an orphaned video hosted outside the design system, breaking on mobile or failing reduced-motion checks. Week 3 trap: analytics events are instrumented but no dashboard exists, so support and growth cannot observe whether confused clicks declined. Week 4 trap: reduced-motion is implemented as a CSS class but not wired to `prefers-reduced-motion`, producing vestibular triggers on motion-prone pages. Week 5 trap: "all pages" scope creep injects help modals into error states and checkouts, occluding primary actions and violating the trust-safe boundary on risk surfaces. Week 6 trap: legal disclosures required on promotions/risk surfaces are omitted from the generic trust note, triggering a compliance rollback.

The retro-causal insight is that these future failure modes should shape the component's current contract: feature-flag gating, a static fallback for media, localization strings at authoring time, ARIA landmarks, and a legal-review gate before any help slot is published on a risk surface.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Layered modeling of the system: The engineer models the product manager as wanting fast shipment; the product manager models the end user as needing comprehension within 10 seconds; the end user models the interface as either trustworthy or opaque; support models the user as generating tickets when help is absent; growth models conversion as rising when friction falls. Each layer contains a recursive assumption about the other.

Crisis habit regression: under deadline pressure, the engineer regresses to shipping static copy without the copy audit, mobile readability check, or reduced-motion test. This regressed habit produces help text that "sounds human" to the author but fails the accessibility and localization acceptance criteria on [PAGE 1]. The regression is self-reinforcing because the rollback plan ("hide it behind a feature flag") makes the cost of shipping appear low, encouraging further regression.

Counter-trap: the 10-second rule is inverted into a justification for stripping necessary legal, risk, or methodology nuance from help copy in order to meet the time budget. On promotions/risk surfaces, [PAGE 1] explicitly requires "clear disclosures and responsible-play-safe copy." Oversimplifying to beat the clock creates a compliance vulnerability that the rollback plan must then resolve.

Clock model: define t_load = 0 at page first paint. The comprehension clock requires T_c <= 10 s. If the help component is lazy-loaded and hydrates at t_hydrate > 10 s, the user has already passed the attention horizon before the help affordance exists. Predictive coding means the user expects help at first paint; a delayed help slot is perceived as absence. The component therefore must be synchronous-critical or server-injected on all pages within the first render to avoid clock failure.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: viewport width < 360 dp or touch-target width W < 44 dp for the help affordance. Fitts's law shows movement time grows as W shrinks; on small mobile screens a sub-44 dp target violates biomechanical accessibility standards and triggers an immediate veto. The component must not ship until W >= 44 dp and D is minimized.

Biomechanical layer veto: `prefers-reduced-motion: reduce` is active and the media/visual slot contains mandatory animation. Vestibular-disorder users cannot parse the visual path, violating the reduced-motion acceptance criterion on [PAGE 1]. Veto unless a static fallback (table, image, or text example) is rendered instead.

Environmental/weather-analog layer veto: network conditions emulate adverse weather. Bandwidth B below the threshold required to load the media/visual slot within the comprehension budget causes the help path to fail. Let B_min be the minimum bandwidth for media slot render within 2 s. If measured B < B_min (e.g., constrained 3G), the component must degrade to static text/table; otherwise the visual path is absent and the item violates the media/visual acceptance criterion.

Adjudication hierarchy: Legal/disclosure veto > Accessibility veto > Performance veto > Copy/human-soundness veto. If any layer fires, the rollback plan on [PAGE 1] is invoked: remove the isolated component/content entry or hide it behind a feature flag, with no data or billing changes. Because analytics instrumentation is part of implementation step 5, any analytics event that touches launch-gate or billing datasets must be scoped out before rollback is considered clean.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: A user with `prefers-reduced-motion` opens a page whose help slot contains an autoplay animated explainer. Veto condition: the animation is mandatory and no static fallback exists. Prediction: the component fails WCAG reduced-motion requirements; QA flags the media/visual slot; rollback hides the entry behind a feature flag until a static table/image/text fallback is substituted.

Scenario 2: On a mobile viewport of 320 dp width, the help modal is positioned absolute and occludes the next-action CTA required by [PAGE 1] ("one next action"). Veto condition: layout overlap makes the next action unreachable. Prediction: screenshot QA shows CTA coverage; confused-click metric rises because users tap the help modal instead of the primary action; the component is rolled back or reflowed so the help affordance never covers the next action.

Scenario 3: The help pattern is injected onto a promotions/risk surface without the clear disclosure and responsible-play-safe copy mandated by the legal/method boundary on [PAGE 1]. Veto condition: legal review absent; trust note lacks required disclosure language. Prediction: compliance blocks publication; if already feature-flagged on, the rollback plan removes the content entry with no data or billing changes; the help slot remains dark on risk surfaces until approved copy exists.
</RLVR_COUNTERFACTUAL_VETOES>