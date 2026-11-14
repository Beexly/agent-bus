---
source: "BUILD-HELP-024-mobile-help-bottom-sheet.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/help-education-ux/claude-build-queue/cards"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3388
---

<NATIVE_REASONING>
The user is asking me to process a document source (BUILD-HELP-024: Mobile help bottom sheet) through the GSE + GSI Frontier Reasoning Foundry framework. They want me to produce output in specific XML sections with strict invariants.

Let me analyze what they've provided:
- Source text: A build card for mobile help bottom sheet
- Pages: 1
- They want me to act as GSE + GSI Frontier Reasoning Foundry

STRICT INVARIANTS:
1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

Wait, the user is asking me to apply this complex reasoning framework to what appears to be a product/build card about a mobile help bottom sheet. This is unusual because the foundry framework seems designed for sports analytics/GSE reasoning, but the source text is about UX/mobile help documentation.

I need to:
1. Treat the source document as "PAGE 1" since PAGES: 1 was specified
2. Cite [PAGE 1] markers and verbatim quotes from the source
3. Avoid betting lines entirely (the document mentions "risk surfaces" but no actual betting lines)
4. Avoid toy equations - if I use math, it must be formal LaTeX with SI/information/probability units, assumptions, breakdown regimes
5. Produce >=1000 words total across the 6 XML sections
6. THINK_TRACE must be >=400 words

Let me draft each section:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. I need to analyze the build card, identify gray zones (e.g., "human copy" is subjective, "10 seconds" is unmeasured, "media/visual slot" undefined, feature flag rollback implications, accessibility vs reduced-motion tension, proprietary methodology boundary). Multi-hop: source -> design system -> implementation -> QA -> rollback -> governance. Gray zones: "human" copy audit criteria, 10-second comprehension metric undefined, "trust-safe media" undefined, "responsible-play-safe copy" undefined, boundary between extension and duplicate (BUILD-113), feature flag vs component removal rollback scope.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. I can model comprehension time as a random variable T_c with units seconds, information entropy H of help text in bits, readability grade level R, reduced-motion preference m ∈ {0,1}. I can define an information rate I = H / T_c (bits/second). Singularity when T_c → 0 or H → ∞. Breakdown when readability exceeds target or when media slot fails to load. Cite [PAGE 1] for quotes like "Users need to find value in 10 seconds" and "10-second comprehension".

<RETROCAUSAL_GENEALOGY>: Historical lineage of help patterns: tooltips, modals, bottom sheets, progressive disclosure, onboarding tours, contextual help. Multi-week traps: shipping copy without QA, feature flag left on indefinitely, missing reduced-motion causing vestibular issues, "human copy" regressing to legalese over time, BUILD-113 extension drift causing duplication.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression (team reverts to long manuals under pressure), counter-trap (bottom sheet becomes dumping ground for all help text), clock (10-second window as forcing function). Theory of mind: new user model vs support team model vs product team model.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical (screen size, touch target ≥ 44x44 dp, reduced-motion OS preference), biomechanical (thumb zone, one-handed operation), weather (glare, bright sunlight reducing readability, low contrast). Veto proof: if contrast ratio < 4.5:1, veto. If touch target < 44dp, veto. If reduces motion not respected, veto.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable scenarios + predictions.
1. Reduced-motion preference ON but bottom sheet animates -> veto -> prediction: vestibular fail, QA screenshot mismatch.
2. Copy exceeds 10-second readability (Flesch-Kincaid > grade 8 or word count > ~50 words) -> veto -> prediction: new user fails comprehension.
3. Media/visual slot empty or broken -> veto -> prediction: trust note lacks visual path, acceptance criteria fail.

I need to make sure total word count >= 1000 across all sections. THINK_TRACE alone >= 400.

Let me estimate word counts:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~250 words
- RETROCAUSAL_GENEALOGY: ~200 words
- RECURSIVE_THEORY_OF_MIND: ~200 words
- CROSS_LAYER_VETO_ADJUDICATION: ~200 words
- RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total: ~1550 words. Good.

Citations: Since PAGES: 1, I'll cite [PAGE 1] and use verbatim quotes from the source text.

No betting lines: The source mentions "risk surfaces" and "responsible-play-safe copy" but I must not mention spreads/totals/moneylines/odds. I can mention risk disclosure in a general UX sense but no betting specifics.

No toy equations: I'll use proper information theory / human-computer interaction formalisms with units (bits, seconds, dp, contrast ratio dimensionless, grade level dimensionless). I'll state assumptions and breakdown regimes explicitly.

Let me write this carefully.

THINK_TRACE content plan:
- Start by confirming source: PAGE 1, build card BUILD-HELP-024.
- Multi-hop derivation: Goal (mobile help bottom sheet) -> Why It Matters (10-second value, proprietary complexity) -> Product Surface (mobile) -> User Value (know what/why/how/next) -> Implementation (5 steps) -> Acceptance (5 criteria) -> Test/QA -> Rollback (feature flag or removal, no billing).
- Gray-zone audit: "10 seconds" undefined measurement; "human copy" subjective; "trust-safe media" undefined; "responsible-play-safe copy" undefined boundary; duplicate gate says EXTENSION of BUILD-113 but relation is vague; rollback "remove isolated component or hide behind feature flag" creates state divergence risk; analytics unspecified; design system verification step depends on repo state not in source.
- Recursive implications: If bottom sheet becomes generic help doc, it violates reason_not_duplicate; if feature flag never removed, technical debt; if copy leaks founder methodology, legal boundary violated.

SOURCE_OPERATORS_AND_EQUATIONS:
Define:
- T_c: comprehension time [s], target T_c ≤ 10 [s]
- H: information entropy of help copy [bits], H = -Σ p_i log2 p_i
- R: readability grade level [dimensionless], target R ≤ 8 (implicit)
- A: touch target area [dp²], A ≥ 44×44 = 1936 dp² (WCAG/AA touch target)
- C: contrast ratio [dimensionless], C ≥ 4.5:1 for normal text
- m: reduced-motion preference m ∈ {0,1}, if m=1 then animation duration τ → 0 or replaced by fade/cut
- Information rate ρ = H / T_c [bits/s], breakdown as T_c → 0⁺ (ρ → ∞, unattainable) or H → ∞ (ρ undefined without bounded T_c)
- Acceptance predicate: Φ = (T_c ≤ 10) ∧ (help_affordance ∅) ∧ (human_copy) ∧ (media_path ≠ ∅) ∧ (method_boundary_protected)
Cite [PAGE 1] quotes.

RETROCAUSAL_GENEALOGY:
- Lineage: paper manuals -> help tooltips (1980s UI) -> modal overlays -> bottom sheets (material design) -> contextual progressive disclosure.
- Multi-week traps: Week 1 ship copy without audit; Week 2 feature flag left on; Week 3 reduced-motion ignored; Week 4 BUILD-113 extension drift duplicates content; Week 5 legal disclosure missing.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under launch pressure, team writes long manual instead of bottom sheet.
- Counter-trap: bottom sheet becomes dumping ground for all help, violating 10-second comprehension.
- Clock: 10-second window as forcing function for truncation.
- Nested models: user model ("I need to know what this is"), support model ("deflect tickets"), product model ("ship P0"), legal model ("no liability").

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: screen width w < 320dp, viewport occlusion > 30%, touch target < 44dp.
- Biomechanical: thumb zone reach, one-handed operation, reduced-motion (vestibular).
- Weather/environment: glare reduces contrast, bright sunlight requires C ≥ 7:1 perhaps, low bandwidth media fails.
- Veto proof: V_physical = (w < 320) ∨ (occlusion > 0.3) ∨ (A < 1936 dp²) → VETO. V_bio = (m=1 ∧ τ > 0) → VETO. V_env = (C < 4.5) → VETO.

RLVR_COUNTERFACTUAL_VETOES:
1. Scenario: reduced-motion ON, bottom sheet slides up with 300ms ease. Veto: accessibility violation. Prediction: QA screenshot QA fails reduced-motion check; user reports nausea; rollback to feature flag off.
2. Scenario: copy is 120 words, Flesch-Kincaid grade 12. Veto: fails 10-second comprehension. Prediction: new user does not understand item; help coverage scan shows drop-off.
3. Scenario: media slot references deleted asset or external URL blocked. Veto: no visual/example path. Prediction: acceptance criterion "video, motion, table, visual, or example path" fails; trust note lacks visual path.

Now I need to ensure I don't mention betting lines. The source mentions "risk surfaces" - I can discuss this as general product risk without betting terminology. No spreads, totals, moneylines, odds.

Word count check: I'll aim for substantial prose.

Let me write the final output with proper XML tags exactly as specified.

Make sure to include verbatim quotes with [PAGE 1].

Quotes to use:
- "Users need to find value in 10 seconds." [PAGE 1]
- "GSE is proprietary and complex, so every major item needs an immediate explanation, a next action, and a trust-safe media or visual path." [PAGE 1]
- "Mobile help bottom sheet focuses on 10-second comprehension and contextual help coverage, not generic help docs." [PAGE 1]
- "Remove the isolated component/content entry or hide it behind a feature flag. No data or billing changes." [PAGE 1]
- "No founder-only methodology leakage. No fake certainty." [PAGE 1]
- "Promotions/risk surfaces need clear disclosures and responsible-play-safe copy." [PAGE 1]

Now write it out. I'll ensure THINK_TRACE is well over 400 words.

Let me draft:

THINK_TRACE:
(~550 words)

SOURCE_OPERATORS_AND_EQUATIONS:
(~300 words with LaTeX)

RETROCAUSAL_GENEALOGY:
(~220 words)

RECURSIVE_THEORY_OF_MIND:
(~220 words)

CROSS_LAYER_VETO_ADJUDICATION:
(~220 words)

RLVR_COUNTERFACTUAL_VETOES:
(~220 words)

Total ~1730 words. Good.

I need to be careful that equations are formal LaTeX and not toy ratios. I'll use information theory and HCI metrics with proper units.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The source artifact is BUILD-HELP-024, a P0 mobile build card classified as difficulty M, housed under /GSN/Galaxy Sports Edge/docs/research/help-education-ux/claude-build-queue/cards/ and flagged PAGES: 1. The card requests execution of a mobile help bottom sheet: a contextual, 10-second comprehension unit consisting of one short summary, one next action, one trust note, and one media/visual slot, with mobile and reduced-motion behavior, analytics, QA, and a rollback path that touches no data or billing.

Multi-hop derivation proceeds as follows. Hop 1: The Duplicate Gate [PAGE 1] marks this as EXTENSION, matched to BUILD-113, because it extends an existing onboarding/help/video/copy queue item rather than duplicating it. The stated discriminator is page-level teachability and 10-second comprehension versus generic help docs [PAGE 1]. Hop 2: The Goal and Why It Matters [PAGE 1] establish that GSE is proprietary and complex; therefore every major item needs an immediate explanation, a next action, and a trust-safe media or visual path [PAGE 1]. Hop 3: The User Value [PAGE 1] specifies four knowledge states a user must reach without reading a manual: what they are seeing, why it matters, how to use it, and what to do next. Hop 4: Implementation Plan [PAGE 1] sequences verification of real app source and design system, minimal pattern specification, inclusion of the four content slots, mobile/reduced-motion behavior, and analytics/QA. Hop 5: Acceptance Criteria [PAGE 1] convert this into testable propositions: 10-second comprehension, a help affordance, human-sounding copy, a media/visual/example path, and protected method boundaries. Hop 6: Test Plan [PAGE 1] prescribes visual screenshot QA, mobile readability checks, copy audit, reduced-motion check, and help coverage scan. Hop 7: Rollback Plan [PAGE 1] permits removal of the isolated component or feature-flag gating, explicitly excluding data or billing changes.

Gray-zone audit reveals several underspecified regimes. First, “10 seconds” [PAGE 1] is stated as a comprehension ceiling but no measurement instrument, sampling population, or pass/fail threshold is defined in the source; it is an operational target without an observability contract. Second, “human” copy [PAGE 1] is subjective; the copy audit criterion lacks a readability grade target, forbidden-lexicon list, or tone rubric, creating a regression risk where legal or product review could reinsert dense methodology language. Third, “trust-safe media or visual path” [PAGE 1] and “responsible-play-safe copy” [PAGE 1] are boundary conditions without defined disclosure standards; the Legal / Method Boundary [PAGE 1] prohibits founder-only methodology leakage and fake certainty but does not enumerate which statements constitute leakage. Fourth, the Duplicate Gate reason [PAGE 1] asserts this is not generic help docs, yet nothing prevents the bottom sheet from drifting into a generic help dump over subsequent weeks, which would collapse the distinction from BUILD-113. Fifth, rollback via feature flag [PAGE 1] introduces state divergence: a stale flag could leave dead code or a disabled help affordance in production, violating the acceptance criterion that the item has a help affordance. Sixth, analytics and QA checks are marked “where applicable” [PAGE 1], which is non-deterministic and leaves instrumentation scope to implementer discretion. These gray zones must be resolved before execution to avoid shipping an unmeetable acceptance criterion.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(T_c\) denote comprehension time in seconds \([s]\). The source requirement [PAGE 1] imposes \(T_c \le 10\,[s]\) for a new user. Let \(H\) be the Shannon information entropy of the help copy in bits \([\text{bits}]\), defined by \(H = -\sum_{i} p_i \log_2 p_i\) over the copy’s semantic units. The effective information rate delivered by the bottom sheet is \(\rho = H / T_c \,[\text{bits/s}]\). This operator has two breakdown regimes: as \(T_c \to 0^{+}\), \(\rho \to \infty\), which is physically unattainable and signals an ill-posed comprehension target; as \(H \to \infty\) without a bounded \(T_c\), \(\rho\) becomes undefined, which corresponds to the generic-help-docs drift mode warned against in the Duplicate Gate [PAGE 1].

Let \(R\) be the readability grade level \([\text{dimensionless}]\); a human-copy audit should enforce \(R \le 8\) for general mobile comprehension, though the source does not state this explicitly. Let \(A\) be the touch-target area \([\text{dp}^2]\); accessibility requires \(A \ge 44 \times 44 = 1936\,[\text{dp}^2]\). Let \(C\) be the luminance contrast ratio \([\text{dimensionless}]\); WCAG AA requires \(C \ge 4.5:1\) for normal text, with a higher environmental floor under glare. Let \(m \in \{0,1\}\) be the reduced-motion OS preference; if \(m=1\), any entrance animation duration \(\tau\) must satisfy \(\tau \to 0\) or be replaced by a cut/fade, otherwise the reduced-motion check [PAGE 1] fails.

Define the acceptance predicate \(\Phi\) as \(\Phi = (T_c \le 10) \land (\text{help affordance} \neq \emptyset) \land (\text{copy human}) \land (\text{media/visual path} \neq \emptyset) \land (\text{method boundary protected})\). Verbally, the source states “Users need to find value in 10 seconds” [PAGE 1] and “Mobile help bottom sheet focuses on 10-second comprehension and contextual help coverage, not generic help docs” [PAGE 1]. The rollback operator is \(\mathcal{R} = \text{remove component} \lor \text{hide behind feature flag}\), with the constraint \(\Delta\text{billing} = 0 \land \Delta\text{data} = 0\) [PAGE 1]. Exact citation: [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The mobile help bottom sheet belongs to a historical lineage of contextual assistance patterns: printed software manuals (1970s–1980s), help tooltips and status-bar hints (early graphical UIs), modal onboarding wizards (2000s), progressive-disclosure overlays (early 2010s), and material-design bottom sheets (mid-2010s to present). Each generation trades off information density against interruption cost. The bottom sheet specifically inherits the “peek” affordance—partially occluding the primary task while remaining dismissible—which suits the GSE requirement that users grasp value without leaving the current screen [PAGE 1].

Multi-week trap forecast: Week 1 post-ship, copy is written by product without a copy audit and drifts from “human” tone into explanatory manual prose, violating the 10-second comprehension target [PAGE 1]. Week 2, the feature flag used for rollback [PAGE 1] is never removed, creating a permanent conditional code path and potentially a dormant help affordance that fails the acceptance criterion that the item has a help affordance [PAGE 1]. Week 3, reduced-motion behavior [PAGE 1] is deprioritized behind animation polish, exposing vestibular users to triggering motion. Week 4, the bottom sheet accumulates additional help topics because it is the only visible help surface, collapsing into the generic help docs that the Duplicate Gate explicitly excludes [PAGE 1]. Week 5, legal or risk review inserts disclosure language that crosses into founder-only methodology leakage or fake certainty, breaching the Legal / Method Boundary [PAGE 1]. Each trap is retrospectively visible in the source text: the 10-second ceiling, the human-copy requirement, the method boundary, and the duplicate distinction are all pre-load-bearing constraints that will fracture if not guarded.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Three nested agent models interact around this build card. The new user model expects: “I need to know what I am seeing, why it matters, how to use it, and what to do next” [PAGE 1], within roughly ten seconds, without reading a manual. The support/product model expects: “deflect tickets, ship a P0, create a repeatable help asset pipeline” [PAGE 1]. The legal/risk model expects: “clear disclosures, no founder-only methodology leakage, no fake certainty, responsible-play-safe copy” [PAGE 1].

Crisis habit regression occurs when launch pressure compresses the implementation timeline; the team regresses from the minimal four-slot bottom sheet [PAGE 1] to a long-form embedded help module or a link to an external manual, because long-form writing feels safer than designing for compression. The counter-trap is the inverse: the bottom sheet becomes a dumping ground for every help topic, onboarding step, legal disclosure, and promotional message, destroying the 10-second comprehension guarantee [PAGE 1] and converting the asset into generic help docs, which the Duplicate Gate forbids [PAGE 1].

The clock is the explicit 10-second comprehension window [PAGE 1]. It functions as a forcing function: copy must be truncated, media must be immediately legible, and the next action must be obvious. Recursive theory of mind predicts that under deadline stress, the product team will model the user as more patient than they are, while the user will model the bottom sheet as another advertisement or legal wall and dismiss it. The acceptance criterion “A new user understands the item in 10 seconds” [PAGE 1] is therefore not merely a usability target but a coordination device that aligns the user, support, product, and legal models around a single measurable commitment.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: viewport width \(w < 320\,[\text{dp}]\) forces either horizontal scrolling or excessive occlusion; bottom-sheet height occluding \(>30\%\) of the primary task violates the contextual-help intent [PAGE 1]. Touch target area \(A < 1936\,[\text{dp}^2]\) (below \(44 \times 44\,[\text{dp}]\)) fails accessibility and the help-affordance criterion [PAGE 1]. Biomechanical layer: one-handed thumb-zone reach must place the dismiss and next-action targets within easy reach; if the sheet requires two-handed interaction or precision grip, the mobile surface requirement [PAGE 1] is violated. Weather/environmental layer: bright sunlight or screen glare reduces effective contrast; if \(C < 4.5:1\) under normal conditions or \(C < 7:1\) under high-glare conditions, the trust-safe visual path [PAGE 1] becomes unreadable. Low-bandwidth or offline states that break the media/visual slot [PAGE 1] also trigger veto because the acceptance criterion requires a video, motion, table, visual, or example path [PAGE 1].

Veto proof: define \(V_{\text{phys}} = (w < 320) \lor (\text{occlusion} > 0.30) \lor (A < 1936)\); define \(V_{\text{bio}} = (m = 1) \land (\tau > 0)\); define \(V_{\text{env}} = (C < 4.5)\). If any \(V\) is true, the build is vetoed. The reduced-motion check [PAGE 1] maps directly onto \(V_{\text{bio}}\): an animated slide-up with \(\tau = 300\,[ms]\) when \(m=1\) is an automatic accessibility veto. The copy audit [PAGE 1] maps onto \(V_{\text{env}}\) indirectly: dense, low-contrast legal copy fails both readability and contrast. No betting lines, spreads, totals, moneylines, or odds enter this adjudication; the only risk-surface reference is the general requirement for clear disclosures and responsible-play-safe copy [PAGE 1], treated as a content-boundary constraint rather than a quantitative wagering parameter.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Reduced-motion preference is enabled (\(m=1\)) and the bottom sheet enters with a 300 ms ease-out slide (\(\tau = 300\,[ms] > 0\)). Veto: violates \(V_{\text{bio}}\) and the reduced-motion check [PAGE 1]. Prediction: visual screenshot QA and reduced-motion check fail; a subset of users reports vestibular discomfort; the component must be gated off behind the feature flag per rollback plan [PAGE 1], resulting in zero help affordance until fixed.

Scenario 2: Copy length is 120 words with a Flesch-Kincaid grade level of 12 (\(R = 12\)), exceeding the implicit human-comprehension target. Veto: \(T_c\) will exceed 10 s for the average new user, failing “A new user understands the item in 10 seconds” [PAGE 1]. Prediction: help coverage scan shows early drop-off; support ticket volume for this surface does not decline; the item is treated as a failed acceptance criterion and removed or rewritten.

Scenario 3: The media/visual slot references a deleted asset or an externally blocked URL, leaving the bottom sheet with text only. Veto: violates “There is a video, motion, table, visual, or example path” and “trust-safe media or visual path” [PAGE 1]. Prediction: copy audit may pass, but QA flags missing media; trust note lacks visual reinforcement; new users cannot verify the item’s credibility within 10 seconds [PAGE 1], so the bottom sheet is rolled back via component removal or feature flag with no data or billing changes [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>