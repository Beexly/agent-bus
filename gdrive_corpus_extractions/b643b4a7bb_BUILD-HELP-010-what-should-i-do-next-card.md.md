---
source: "BUILD-HELP-010-what-should-i-do-next-card.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/help-education-ux/claude-build-queue/cards"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4981
---

<NATIVE_REASONING>
The user wants me to process a document card (BUILD-HELP-010) and produce a response following strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source text is a product/card spec for a "What should I do next card" - a help/education/UX component. It's not about sports betting at all, but about a UI help card. I need to treat this seriously and produce the XML sections with deep analysis, formalism, citations to [PAGE 1] since only 1 page is provided.

I need to be careful:
- No betting lines mentioned anywhere.
- No fake toy equations. If I use equations, they must be formal LaTeX with proper units and assumptions. Since this is a UX/help card spec, I can frame it in information theory, human-computer interaction, cognitive load, Fitts's Law, Hick's Law, readability metrics, etc. But I must not invent fake ratios. I can cite established models if I present them formally.
- Must cite [PAGE 1] and verbatim quotes from the source text.
- Must be >= 1000 words total across sections. THINK_TRACE alone >= 400 words.

Let me plan the content:

THINK_TRACE (>=400 words): Deep multi-hop derivation of what the card means, gray-zone audit (e.g., "trust-safe media", "responsible-play-safe copy", "method boundaries", proprietary vs generic). Analyze the tension between 10-second comprehension and complex proprietary system. Audit ambiguity in "smallest help pattern", "human copy", "media/visual slot". Multi-hop: user needs -> comprehension time -> trust -> disclosure -> implementation -> rollback.

SOURCE_OPERATORS_AND_EQUATIONS: Formalize the spec. Define:
- Comprehension time constraint: T_comp <= 10 s (from source)
- Information rate: H <= C * T (Shannon-Hartley analog for human channel? Careful not to be toy. Could present as an upper bound model with assumptions.)
- Hick's Law: T = a + b log2(n+1) for choice reaction time (established psych law, formal LaTeX, units seconds, bits).
- Fitts's Law for touch target: MT = a + b log2(2D/W) (established).
- Readability: Flesch-Kincaid grade level or similar (formal equation).
- Probability of successful next action: P_success as function of affordance clarity, etc. But must state assumptions and breakdown regimes (e.g., model breaks when n > working memory limit ~7±2, or when motion violates reduced-motion preferences).
- Cite [PAGE 1] for quotes.
- No fake ratios like Force/Fatigue.

RETROCAUSAL_GENEALOGY: Historical lineage of help cards, progressive disclosure, Jef Raskin, Don Norman, Apple Human Interface Guidelines, Clippy (negative lineage), Markdown help panels, GSE's own prior queues. Multi-week traps: shipping copy that ages out, media rot, feature flag debt, localization traps, accessibility regression over sprints.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (when users panic, they regress to old habits; the card must counter that), counter-trap (over-helping creates dependency or "banner blindness"), clock (10-second window as a deadline; recursive modeling of user modeling the system).

CROSS_LAYER_VETO_ADJUDICATION: Physical layer (screen size, touch target), biomechanical (reduced motion, vestibular, motor impairment), weather (outdoor glare, brightness, mobile context). Veto conditions: if any layer fails, the component must not ship or must degrade gracefully.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios with predictions:
1. Reduced-motion preference enabled + animated media slot -> vestibular trigger -> veto: disable animation, substitute static visual. Prediction: QA fails reduced-motion check if not handled.
2. Mobile viewport < 320px or touch target < 44x44 CSS px -> Fitts's Law violation -> veto: next action unreachable. Prediction: screenshot QA fails mobile readability.
3. Copy exceeds grade-level target or contains methodology leakage / betting-adjacent language -> trust boundary violation -> veto: copy audit fails. Prediction: help coverage scan flags non-human or proprietary-leakage copy.

Need to make sure no betting lines. The source mentions "responsible-play-safe copy" which implies gaming/gambling context, but I must not mention spreads/totals/moneylines/odds. I can mention "responsible-play" generally but avoid betting terminology.

Word count: Need >=1000 words. Let me allocate roughly:
- THINK_TRACE: 450-500 words
- SOURCE_OPERATORS_AND_EQUATIONS: 300-350 words
- RETROCAUSAL_GENEALOGY: 250-300 words
- RECURSIVE_THEORY_OF_MIND: 200-250 words
- CROSS_LAYER_VETO_ADJUDICATION: 200-250 words
- RLVR_COUNTERFACTUAL_VETOES: 200-250 words
Total should be well over 1000.

Citations: Use [PAGE 1] for all source references. Include verbatim quotes like "Users need to find value in 10 seconds" and "Users know what they are seeing, why it matters, how to use it, and what to do next without reading a manual."

Let me draft carefully.

THINK_TRACE draft:

Start with the source card's duplicate gate: NET_NEW. The card claims distinct help/aesthetic coverage system not present. Multi-hop: from 10-second comprehension to trust-safe media to rollback feasibility.

Gray zones: "trust-safe media or visual path" is undefined. "responsible-play-safe copy" suggests gaming/gambling regulatory context but no specifics. "No founder-only methodology leakage" implies proprietary IP boundaries. "smallest help pattern" is under-specified. Implementation plan step 2 says "Add or specify" - ambiguous whether to create new or reuse.

Derivation chain:
1. GSE is proprietary and complex -> user cannot rely on intuition.
2. Therefore every major item needs immediate explanation, next action, trust-safe media.
3. If comprehension > 10s, user abandons or misuses.
4. Therefore component must enforce budget T_comp <= 10 s.
5. This requires progressive disclosure: summary (what), next action (how), trust note (why safe), media (visual anchor).
6. Rollback must be isolated (component/content entry or feature flag) because no data/billing changes - confirms it's presentational only.

Gray-zone audit: The spec does not define measurement method for 10 seconds (eye-tracking? first-click? task completion?). It does not define "human" copy readability threshold. It does not specify what "trust-safe" means legally beyond disclosures. These are audit risks.

I'll aim for ~450 words.

SOURCE_OPERATORS_AND_EQUATIONS:

Formalize with established HCI laws.

Operators:
- O_summary: maps item -> short summary, units: information (bits) constrained by readability grade G <= 8 (assumption).
- O_next: maps context -> single next action, cardinality |A_next| = 1 to avoid Hick's Law penalty.
- O_trust: maps item -> disclosure/responsible-play note, binary safe/unsafe.
- O_media: maps item -> visual/motion slot, with reduced-motion degrade.

Equations (formal, not toy):
Hick-Hyman law for choice RT: T_RT = a + b log_2(N + 1), where T_RT in seconds, N = number of choices, a,b empirically fit constants. Breakdown: N > 7 (Miller's working memory limit) or N = 0 (no affordance). Since card mandates one next action, N=1 minimizes T_RT.

Fitts's Law for touch: MT = a + b log_2(2D/W), MT in seconds, D distance to target center, W target width. Mobile viewport constraint: W >= 44 CSS px (Apple HIG) or 48 dp (Material). Breakdown: W < threshold or D off-screen.

Flesch-Kincaid grade level: G = 0.39 (W/S) + 11.8 (Syl/W) - 15.59, where W words, S sentences, Syl syllables. Assumption: target G <= 8 for general audience. Breakdown: G > 10 indicates likely failure of "human" and "10-second" criteria.

Comprehension time bound: T_comp = T_read + T_decide + T_act <= 10 s. Assumption: serial cognitive stages, no parallel speedup. Breakdown: if any stage exceeds budget, component fails acceptance.

Cite [PAGE 1] for quotes: "Users need to find value in 10 seconds." and "Users know what they are seeing, why it matters, how to use it, and what to do next without reading a manual." and "Add mobile and reduced-motion behavior."

This section ~300 words.

RETROCAUSAL_GENEALOGY: Lineage from Jef Raskin's humane interface, Don Norman's affordances, progressive disclosure (Nielsen Norman Group), Clippy as anti-pattern (intrusive help), Apple HIG help buttons, material design chips/tooltips. GSE's own queue prior lacks this system per duplicate gate. Multi-week traps: copy drift as features ship, media rot (video links break), localization expanding text beyond 10s budget, feature flag debt becoming permanent, accessibility regression when design system updates, "responsible-play" regulatory copy changing by jurisdiction.

~280 words.

RECURSIVE_THEORY_OF_MIND: User models system; system models user. Crisis habit regression: under stress/time pressure, users revert to previously learned habits (e.g., skipping help, guessing clicks). The card must interrupt regression with immediate affordance. Counter-trap: over-explanation creates banner blindness; users learn to ignore card, then miss real next actions. Clock: 10-second hard deadline creates recursive pressure: user asks "should I read this?" within first 2s; if not answered, they bounce. Recursive depth: Level 0 (what is this), Level 1 (why does it matter to me), Level 2 (what do I click), Level 3 (is this safe/trustworthy). Card must resolve all four levels within budget or user abandons.

~240 words.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: screen dimensions, pixel density, viewport. Veto if media slot cannot render within viewport without horizontal scroll.
- Biomechanical layer: touch target size, motor impairment, reduced-motion preference (vestibular disorders). Veto if animation cannot be paused/replaced with static; if tap target < 44x44 CSS px.
- Weather/environment layer: outdoor glare, low brightness, one-handed mobile use. Veto if color contrast < WCAG AA (4.5:1) or if visual relies solely on color/hue.
Adjudication: any single layer veto blocks ship; fallback is static text-only summary with next action link, preserving core value.

~240 words.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.

Scenario 1: Reduced-motion. User has prefers-reduced-motion: reduce. Build implements animated GIF in media slot. Veto: animation triggers vestibular distress; component violates accessibility acceptance. Prediction: screenshot QA passes but reduced-motion check fails; fix = swap to static SVG or CSS still frame; rollback via feature flag.

Scenario 2: Mobile touch target. "Next action" button rendered as text link 20px tall on 320px width screen. Fitts's Law violation: W too small, D too large. Veto: mobile readability/fails acceptance. Prediction: QA finds touch target undersized; fix = minimum 44x44 CSS px with padding; rollback hides component.

Scenario 3: Copy audit / methodology leakage. Summary includes proprietary founder methodology or betting-adjacent odds language (but I shouldn't mention odds... I'll say "proprietary algorithmic detail" or "risk surface without disclosure"). Veto: legal/method boundary breach; trust note missing. Prediction: copy audit flags non-human or leakage; fix = rewrite to plain language with disclosure; rollback removes content entry.

Each scenario: condition, veto trigger, verification, prediction.

~280 words.

Now check word counts. I'll write generously to ensure >1000 total.

Also important: No toy equations. I must explicitly say these are established models with assumptions/breakdowns, not invented ratios. Avoid anything like "Force/Fatigue." Use standard HCI.

Need to ensure I don't mention betting lines. I can reference "responsible-play-safe copy" from source but not spreads/totals/moneylines/odds.

Citations: Use [PAGE 1] everywhere quoting source.

Let's write.

Need exact XML section names. No markdown code fences around XML? Just output the sections. I'll put them in order.

Let me draft the full text now, monitoring length.

THINK_TRACE:

The source document [PAGE 1] is a build card, BUILD-HELP-010, titled "What should I do next card." Its duplicate gate returns NET_NEW with no matched existing IDs, asserting that no prior queue contains a distinct help/aesthetic coverage system. The first multi-hop inference is therefore structural: GSE lacks a repeatable, presentational help layer, and this card is the seed. Because the card applies to "all pages" per Product Surface, any derivation must scale globally, not locally.

The user-value chain is explicit: "Users need to find value in 10 seconds" [PAGE 1]. Given that GSE is described as proprietary and complex, unaided intuition is insufficient. The implication is a hard cognitive budget: T_comp ≤ 10 s. Within that budget, the user must resolve four nested questions, which the source phrases as "Users know what they are seeing, why it matters, how to use it, and what to do next without reading a manual" [PAGE 1]. These map to identity, relevance, operability, and next action. A missing answer at any node forces the user to exit the 10-second window or to guess, both of which constitute failure under the acceptance criteria.

The internal-value chain creates a pipeline obligation: "Galaxy Studios, support, product, and growth teams get a repeatable help asset pipeline instead of one-off explanations" [PAGE 1]. This means the component cannot be a bespoke copy-paste; it must be a specifiable pattern with slots for summary, next action, trust note, and media. The gray zone here is the phrase "Add or specify the smallest help pattern for the target surface" [PAGE 1]. "Smallest" is undefined: is it measured by character count, cognitive load, DOM nodes, or localization strings? Without an operator, implementation risk is high.

The legal/method boundary introduces regulatory and IP gray zones. "No founder-only methodology leakage" [PAGE 1] means proprietary algorithms must remain opaque; "Promotions/risk surfaces need clear disclosures and responsible-play-safe copy" [PAGE 1] places the card inside a compliance-sensitive layer. Because responsible-play language varies by jurisdiction and by product surface, the trust note cannot be hardcoded globally without a localization and legal-review operator. Rollback is intentionally safe: "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes" [PAGE 1]. This confirms the card is presentational only, which simplifies veto adjudication but raises a trap: if the feature flag becomes permanent debt, the "smallest help pattern" may fossilize into stale copy.

Audit summary: the specification is strong on outcomes (10-second comprehension, human copy, media slot) and weak on measurement instrumentation (no eye-tracking, first-click, or grade-level thresholds are cited). The next sections formalize the measurable operators.

Word count check: roughly 330 words. Need >=400 for THINK_TRACE alone. I should expand. Let me add more detail on derivation chains, gray zones, and implications.

Expanded THINK_TRACE (~480 words):

... Add discussion of "help affordance", "media/visual slot", test plan mapping, rollback implications, etc.

Let me rewrite THINK_TRACE more fully.

SOURCE_OPERATORS_AND_EQUATIONS: Need formal LaTeX.

I'll write:

Let the card be a tuple C = (S, A, T, M) where S ∈ ℒ_summary, A ∈ ℒ_action (|A|=1), T ∈ ℒ_trust, M ∈ ℳ_media ∪ {∅}. [PAGE 1] requires exactly one short summary, one next action, one trust note, and one media/visual slot.

Comprehension budget:
T_comp = T_read + T_decide + T_act ≤ 10 s. [PAGE 1]
Assumptions: serial processing, fixed saccade and fixation costs, no parallel speedup. Breakdown: if T_read > 10 s due to localization expansion or low literacy, acceptance fails.

Hick-Hyman choice law:
T_RT = a + b log₂(N + 1), T_RT [s], N ∈ ℕ₀ choices.
Assumptions: a,b > 0 empirically fit; N includes every interactive element on the card. Because the spec mandates one next action, N=1 is optimal; N=0 yields no affordance and violates "The item has a help affordance" [PAGE 1]. Breakdown: N > 7 ± 2 approaches working-memory saturation; logarithmic model becomes unreliable for expert chunking.

Fitts's Law for mobile touch target:
MT = a + b log₂(2D/W), MT [s], D [m] distance to target center, W [m] target width.
Mobile constraint: W ≥ 44 CSS px (≈ 0.010–0.015 m depending on pixel ratio). Breakdown: W below threshold or D off-screen makes next action unreachable, violating "Users know ... what to do next" [PAGE 1].

Flesch-Kincaid grade level:
G = 0.39(W/S) + 11.8(Syl/W) − 15.59, where W = word count, S = sentence count, Syll = syllable count.
Assumption: target G ≤ 8 for 10-second general-audience comprehension. Breakdown: G > 10 predicts failure of "help text sounds human" and "human copy" acceptance criteria [PAGE 1].

Reduced-motion operator:
M_reduced = static(M) if prefers-reduced-motion = reduce else M.
Breakdown: if M is inherently temporal (video with no static fallback), the operator is undefined and the component must degrade to S ∪ A ∪ T only.

Citations: [PAGE 1].

This section ~280 words.

RETROCAUSAL_GENEALOGY ~280 words.

RECURSIVE_THEORY_OF_MIND ~240 words.

CROSS_LAYER_VETO_ADJUDICATION ~240 words.

RLVR ~300 words.

Total: 480 + 280 + 280 + 240 + 240 + 300 = 1820 words. Good.

Now ensure no betting lines. I will not write "spread," "total," "moneyline," or "odds." I might write "risk surfaces" quoting the source but not define them as betting terms.

Need to ensure I don't invent fake ratios. All equations cited are established (Hick-Hyman, Fitts, Flesch-Kincaid) and I state assumptions/breakdowns.

Let's write the final response. Use exact XML tags.

I will write continuously without markdown code block for XML, just the tags.

Double-check quotes from source:
- "Users need to find value in 10 seconds." (Why It Matters)
- "Users know what they are seeing, why it matters, how to use it, and what to do next without reading a manual." (User Value)
- "Add mobile and reduced-motion behavior." (Implementation Plan)
- "No founder-only methodology leakage. No fake certainty. Promotions/risk surfaces need clear disclosures and responsible-play-safe copy." (Legal / Method Boundary)
- "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes." (Rollback Plan)
- "A new user understands the item in 10 seconds." (Acceptance Criteria)
- "The item has a help affordance." (Acceptance Criteria)
- "The help text sounds human." (Acceptance Criteria)

Good.

Now produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The source document [PAGE 1] is build card BUILD-HELP-010, "What should I do next card." Its duplicate gate returns NET_NEW with matched_existing_ids: none, and it asserts that no prior queue contains a distinct help/aesthetic coverage system. The first multi-hop inference is therefore structural: GSE lacks a repeatable, presentational help layer, and this card is the intended seed. Because the card applies to "all pages" per Product Surface [PAGE 1], any derivation must scale globally rather than exist as a one-off component.

The user-value chain is explicit: "Users need to find value in 10 seconds" [PAGE 1]. Given that GSE is described as proprietary and complex [PAGE 1], unaided intuition is insufficient. The implication is a hard cognitive budget: T_comp ≤ 10 s. Within that budget, the user must resolve four nested questions, which the source phrases as "Users know what they are seeing, why it matters, how to use it, and what to do next without reading a manual" [PAGE 1]. These map to identity (what am I seeing), relevance (why does it matter), operability (how do I use it), and next action (what do I do now). A missing answer at any node forces the user to exit the 10-second window or to guess, both of which constitute failure under the acceptance criteria.

The internal-value chain creates a pipeline obligation: "Galaxy Studios, support, product, and growth teams get a repeatable help asset pipeline instead of one-off explanations" [PAGE 1]. This means the component cannot be a bespoke copy-paste; it must be a specifiable pattern with slots for summary, next action, trust note, and media. The gray zone here is Implementation Plan step 2: "Add or specify the smallest help pattern for the target surface" [PAGE 1]. "Smallest" is undefined. Is it measured by character count, cognitive load, DOM nodes, or localization string length? Without an operator, implementation risk is high, and QA cannot verify minimality objectively.

The legal/method boundary introduces regulatory and IP gray zones. "No founder-only methodology leakage. No fake certainty. Promotions/risk surfaces need clear disclosures and responsible-play-safe copy" [PAGE 1] places the card inside a compliance-sensitive layer. Because responsible-play language varies by jurisdiction and by product surface, the trust note cannot be hardcoded globally without a localization and legal-review operator. Rollback is intentionally safe: "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes" [PAGE 1]. This confirms the card is presentational only, which simplifies veto adjudication but raises a trap: if the feature flag becomes permanent debt, the "smallest help pattern" may fossilize into stale copy that no longer meets the 10-second criterion.

Audit summary: the specification is strong on outcomes (10-second comprehension, human copy, media slot, help affordance) and weak on measurement instrumentation (no eye-tracking, first-click, or grade-level thresholds are cited [PAGE 1]). Test Plan items—visual screenshot QA, mobile readability checks, copy audit, reduced-motion check, help coverage scan—are necessary but insufficient without quantified pass thresholds. The next sections formalize the measurable operators and derive veto regimes from them.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Source basis: all quotations and constraints below are drawn from [PAGE 1].

Formal card tuple: Let C = (S, A, T, M), where S ∈ 𝒳_summary is a short summary, A ∈ 𝒳_action is exactly one next action so that |A| = 1, T ∈ 𝒳_trust is a trust/responsible-play note, and M ∈ 𝒳_media ∪ {∅} is one video, motion, table, visual, or example path [PAGE 1]. Acceptance requires T_comp ≤ 10 s [PAGE 1: "A new user understands the item in 10 seconds."], a help affordance [PAGE 1], human-sounding copy [PAGE 1], and protected method boundaries [PAGE 1].

Comprehension-time bound (serial cognitive stages):
T_comp = T_read + T_decide + T_act ≤ 10 s, [T_comp] = s.
Assumptions: reading, decision, and action are serial; no parallel speedup; fixed saccade/fixation costs. Breakdown regime: if localization expansion or low literacy pushes T_read above the budget, the component fails acceptance regardless of M quality [PAGE 1].

Hick–Hyman choice-reaction law for the single next action:
T_RT = a + b log₂(N + 1), [T_RT] = s, N ∈ ℕ₀.
Here N is the number of competing interactive choices presented by the card. Because [PAGE 1] mandates exactly one next action, N = 1 is the design optimum. N = 0 yields no affordance and violates "The item has a help affordance" [PAGE 1]. Assumptions: a, b > 0 are empirically fit constants; choices are equiprobable and unchunked. Breakdown regime: N > 7 ± 2 approaches working-memory saturation [Miller], and the logarithmic approximation becomes unreliable under expert chunking or high stress.

Fitts's Law for mobile touch targeting of the next action:
MT = a + b log₂(2D/W), [MT] = s, [D] = m, [W] = m.
Mobile constraint: W ≥ 44 CSS px (approximately 0.010–0.015 m depending on device pixel ratio) to satisfy mobile readability and reduced-motion behavior [PAGE 1]. Breakdown regime: if W falls below threshold or D places the target off-screen, the next action is biomechanically unreachable and "Users know ... what to do next" [PAGE 1] fails.

Flesch–Kincaid grade-level operator for human copy:
G = 0.39 (W/S) + 11.8 (Syll/W) − 15.59,
where W = word count, S = sentence count, Syll = syllable count; [G] = grade level (dimensionless U.S. school grade). Assumption: target G ≤ 8 for general-audience 10-second comprehension. Breakdown regime: G > 10 predicts failure of "The help text sounds human" [PAGE 1] and of the 10-second bound because decoding load dominates T_read.

Reduced-motion operator:
M_reduced = static(M) if prefers-reduced-motion = reduce, else M.
Breakdown regime: if M is intrinsically temporal (e.g., video with no static poster frame), M_reduced is undefined and the component must degrade gracefully to (S, A, T, ∅) to preserve core value [PAGE 1: "Add mobile and reduced-motion behavior."].

Method-boundary operator:
leak(S, A, T, M) = 1 if content contains founder-only methodology, undisclosed promotions/risk surfaces, or non-responsible-play-safe copy; else 0 [PAGE 1]. Requirement: leak ≡ 0 before ship.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of BUILD-HELP-010 reaches back to Jef Raskin's humane-interface thesis and Don Norman's theory of affordances, both of which argue that a system should make its own state and next action visible without requiring the user to consult a manual. That maps directly to [PAGE 1]: "Users know what they are seeing, why it matters, how to use it, and what to do next without reading a manual." The progressive-disclosure tradition (Nielsen Norman Group) supplies the "smallest help pattern" instinct: show only enough to act, then reveal depth on demand. The anti-lineage is Clippy and intrusive tooltips: help that interrupts, cannot be dismissed, or outlives its usefulness creates banner blindness and trains users to ignore all future cards.

GSE's own queue history, per the duplicate gate [PAGE 1], contains no prior help/aesthetic coverage system, so BUILD-HELP-010 is not refining an existing pattern but founding one. Multi-week traps emerge immediately. Copy drift: as product surfaces ship new features, a summary written in week 1 may describe obsolete UI by week 4, violating the 10-second truthfulness budget. Media rot: video or motion assets linked in M may break, be delisted, or exceed bandwidth budgets, silently turning M into ∅ and degrading comprehension. Localization expansion: translated text often runs 30–50% longer than English, inflating T_read and T_comp beyond 10 s [PAGE 1] unless the summary operator enforces length budgets per locale. Feature-flag debt: the rollback plan [PAGE 1] permits hiding the component behind a flag, but flags frequently become permanent, converting a "smallest help pattern" into unmaintained technical debt. Regulatory drift: "responsible-play-safe copy" [PAGE 1] is jurisdiction-sensitive; a trust note approved in one market may violate disclosure rules in another, requiring a legal-review re-operator on every release cycle. These traps are retro-causal in the sense that failures in week 6 are already encoded by week-1 decisions about where copy, media, and trust notes live in the content model.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The user and the card model each other recursively. Level 0: the user asks "What is this?" The card answers with S [PAGE 1]. Level 1: the user asks "Why does it matter to me?" The card answers with T and relevance cues [PAGE 1]. Level 2: the user asks "What do I click?" The card answers with A [PAGE 1]. Level 3: the user asks "Is this safe to proceed?" The card answers with disclosures and responsible-play-safe copy [PAGE 1]. If any level is unresolved within the first ~2 seconds of the 10-second window, the user bounces; the acceptance criterion "A new user understands the item in 10 seconds" [PAGE 1] is therefore a hard deadline on recursive grounding.

Crisis habit regression: under time pressure or confusion, users regress to previously learned habits—skipping help text, guessing taps, or abandoning the page [PAGE 1 implies complexity requires immediate explanation]. The card must interrupt regression by presenting A as a visually dominant, single affordance within the first fixation. Counter-trap: over-explanation. If S, T, and M are too dense, the user learns that the card is noise and develops banner blindness; on subsequent visits, even genuine next actions are ignored. The counter-trap is mitigated by enforcing |A| = 1 and G ≤ 8 so the card remains cheap to parse. Clock pressure: the 10-second limit [PAGE 1] acts as a recursive forcing function. Because the user models the system as "will this waste my time?" before reading, the card's visual hierarchy must answer identity and relevance before the user decides whether to invest the remaining seconds. If M autoplays or delays layout, it steals clock from S and A, collapsing the recursive model. Design implication: the card must render S and A synchronously with first paint; M may enhance but must not gate the first two levels of the theory-of-mind stack.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer (device and viewport): The card targets "all pages" [PAGE 1], including mobile. Veto condition: if the media/visual slot M cannot render within the viewport without horizontal scroll, or if the summary S wraps such that T_read exceeds the 10 s budget at the smallest supported breakpoint, the component is vetoed for that surface. Verification: screenshot QA across breakpoints [PAGE 1: Test Plan].

Biomechanical layer (touch and motion): Veto condition: if the next-action target A violates Fitts's Law with W < 44 CSS px or if M contains motion that cannot be replaced by a static fallback under prefers-reduced-motion [PAGE 1], the component fails accessibility. Users with vestibular or motor impairments must not be forced into animated media or microscopic tap targets. Breakdown regime: an inherently temporal video with no poster frame makes M_reduced undefined, forcing degradation to (S, A, T, ∅).

Weather/environmental layer (glare, brightness, one-handed mobile use): Veto condition: if color contrast falls below WCAG AA (4.5:1) or if meaning is conveyed solely by hue, outdoor glare renders the card unreadable. Verification: mobile readability checks under high-ambient-light simulation [PAGE 1: Test Plan].

Adjudication rule: any single layer veto blocks ship for that surface; there is no trade-off that permits a failed physical layer to be "compensated" by a better trust note. The fallback path is the static tuple (S, A, T, ∅), which preserves the core acceptance criteria—10-second comprehension, help affordance, human copy—without media [PAGE 1: Rollback Plan confirms presentational-only scope, no data or billing changes].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Reduced-motion violation. Condition: the build implements M as an auto-playing animated GIF. A quality-assurance user has prefers-reduced-motion: reduce set at the OS level. Veto trigger: animation cannot be paused or substituted with a static frame, so M_reduced is undefined [SOURCE_OPERATORS_AND_EQUATIONS]. Verification: the reduced-motion check in Test Plan [PAGE 1] fails. Prediction: the component ships with a vestibular trigger; QA logs a blocked accessibility defect; the required fix is to replace the animated slot with a static SVG or poster frame and gate animation behind the motion preference. Rollback: hide the media slot behind a feature flag [PAGE 1].

Scenario 2 — Mobile Fitts's Law violation. Condition: the "next action" A is rendered as a 20-px-tall text link on a 320-px-wide mobile viewport, with D large because the summary S is long. Veto trigger: W < 44 CSS px makes MT exceed the action budget within T_comp ≤ 10 s [SOURCE_OPERATORS_AND_EQUATIONS]. Verification: mobile readability and screenshot QA [PAGE 1] flag an unreachable tap target. Prediction: users mis-tap or abandon; acceptance criterion "what to do next" [PAGE 1] fails. Required fix: pad A to minimum 44 × 44 CSS px and shorten S so D remains within thumb zone. Rollback: remove the isolated component entry [PAGE 1].

Scenario 3 — Method-boundary / copy audit violation. Condition: the summary S includes undisclosed founder-only methodology or promotional risk-surface language without the required responsible-play-safe disclosure [PAGE 1]. Veto trigger: leak(S, A, T, M) = 1 [SOURCE_OPERATORS_AND_EQUATIONS]. Verification: copy audit [PAGE 1: Test Plan] detects non-human or proprietary-leakage language. Prediction: legal blocks release; growth cannot use the asset in campaigns; trust erodes because "No fake certainty" [PAGE 1] is breached. Required fix: rewrite S to plain-language, human copy at G ≤ 8 with a compliant trust note T. Rollback: hide the content entry behind a feature flag with no data or billing impact [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>