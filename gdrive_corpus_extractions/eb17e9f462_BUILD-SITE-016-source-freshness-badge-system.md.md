---
source: "BUILD-SITE-016-source-freshness-badge-system.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/site-war-room/claude-build-queue/cards"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3666
---

<NATIVE_REASONING>
The user is asking me to act as the GSE + GSI Frontier Reasoning Foundry and produce a response with specific XML sections, totaling at least 1,000 words. However, the input source text is about a software implementation card (BUILD-SITE-016: Source freshness badge system) for a website/product experience layer.

This is not a sports prediction, betting, or handicapping scenario. It's a technical/product implementation task. But my instructions say I must follow the STRICT INVARIANTS:
1. ZERO BETTING LINES - no spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS - formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes.
3. >= 1,000-word depth across the exact XML sections.

Wait, the user provided a source document about a "source freshness badge system" - this is essentially a product/UX engineering task. The sections I need to fill are:

<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to map this software implementation card into these analytical frames. This is a creative/adversarial reasoning task where I treat the "source freshness badge system" as an epistemic/information system and analyze it through these lenses.

Key constraints:
- No betting lines whatsoever.
- Formal LaTeX equations with units (SI/information/probability), assumptions, breakdown regimes.
- Exact [PAGE N] markers and verbatim quotes since source pages are provided (only 1 page).
- Total >= 1,000 words across sections.
- THINK_TRACE >= 400 words alone.

Since the source text is a single document page, I should cite [PAGE 1] and include verbatim quotes from it.

Let me plan each section:

**THINK_TRACE (>=400 words)**: Multi-hop derivation about implementing a source freshness badge system. Gray-zone audit: risks of method leakage, clarity vs polish, trust signals vs hype, accessibility vs visual performance. Derive from P0/S difficulty, the duplicate gate extensions (BUILD-GV2-020, BUILD-112), route/surface target (source/freshness), copy direction constraints (no fake certainty, no method leakage), public/private boundary, legal compliance. Discuss how freshness badges serve as information-theoretic trust anchors. Multi-hop: source freshness -> user trust -> conversion/retention -> support deflection -> PRO/ELITE value clarity. Gray zones: "last-verified/source cues where appropriate" vs founder/admin sees source weights; performance budget not worsened but cinematic design; mobile/reduced-motion/a11y empty/loading/error states.

**SOURCE_OPERATORS_AND_EQUATIONS**: Formal LaTeX. I can model freshness as information decay. Let $t$ be time since last verification (SI unit: seconds, s). Source freshness $F(t)$ as probability of information validity. Use exponential decay model: $F(t) = e^{-\lambda t}$ where $\lambda$ is decay rate (s$^{-1}$). Or badge threshold logic. Define information half-life $t_{1/2} = \ln(2)/\lambda$. Units: bits for information content (Shannon), seconds for time, dimensionless probability [0,1]. Assumptions: Poisson verification process, stationarity of source reliability. Breakdown regimes: $\lambda \to 0$ (stale source never expires, $F \to 1$), $\lambda \to \infty$ (instant decay, $F \to 0$ for $t>0$), clock skew $\Delta t_{clock}$ causing badge miscalibration. Cite [PAGE 1] for quotes like "last-verified/source cues where appropriate", "no fake certainty", "performance budget is not worsened".

**RETROCAUSAL_GENEALOGY**: Historical lineage of trust badges, freshness indicators (RSS pubDate, HTTP Last-Modified, ETag, "last updated" timestamps), epistemic labeling in journalism, sports intelligence command centers. Multi-week traps: shipping badge without backend verification pipeline creates "zombie freshness" (badge says fresh but data is stale), design debt from cinematic polish overriding clarity, dependency on BUILD-GV2-020/BUILD-112 not being ready causing route-level blockers, accessibility regressions from high-contrast cinematic states.

**RECURSIVE_THEORY_OF_MIND**: Crisis habit regression: under pressure, team might add fake certainty/hype copy (violates copy direction), expose founder weights (method leakage), or skip a11y/mobile to meet P0 deadline. Counter-trap: enforce copy scan, feature flag rollback, typecheck/lint/build gate. Clock: implementation plan steps 1-6 with rollback isolated; time pressure vs reversible change.

**CROSS_LAYER_VETO_ADJUDICATION**: Physical layer (repo clone, branch, dirty state, package manager, framework), biomechanical (mobile viewport, keyboard/focus, reduced motion), weather (metaphorically: environmental variability - network conditions, device diversity, screen readers). Veto proof: if any layer fails acceptance criteria (10-second clarity, mobile layout, a11y basics, no method leakage, performance budget), veto shipment.

**RLVR_COUNTERFACTUAL_VETOES**: 3 verifiable veto scenarios + predictions.
1. Scenario: Badge displays "verified" but source timestamp is older than $t_{max}$ due to missing backend hook. Prediction: Typecheck/lint/build pass but Playwright route probe fails freshness invariant; rollback via feature flag.
2. Scenario: Cinematic high-contrast badge reduces contrast ratio below WCAG AA on mobile reduced-motion. Prediction: a11y basics fail; keyboard/focus check fails; isolated component revert.
3. Scenario: Copy contains "guaranteed" or affiliate-adjacent language due to design direction drift. Prediction: copy scan flags legal/compliance boundary violation; no deploy until copy scrubbed.

Word count check: Need >= 1,000 words total. THINK_TRACE alone >= 400. I'll aim for roughly:
- THINK_TRACE: ~450-550 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~250-350 words
- RETROCAUSAL_GENEALOGY: ~200-250 words
- RECURSIVE_THEORY_OF_MIND: ~200-250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~200 words
- RLVR_COUNTERFACTUAL_VETOES: ~200-250 words
Total should exceed 1,000.

Let me write carefully, ensuring:
- No betting lines/spreads/totals/moneylines/odds.
- LaTeX equations with units.
- [PAGE 1] citations and verbatim quotes.
- Exact XML section tags.

Let me draft.

THINK_TRACE draft (aiming 450+ words):

Start with the card identity: BUILD-SITE-016, P0, difficulty S. Duplicate gate EXTENSION of BUILD-GV2-020 and BUILD-112. Route surface: source/freshness. The core problem: visible workspace does not expose runnable app; route-level implementation needs real shipping clone.

Multi-hop derivation:
1. Trust signal requirement: users need to know what they're seeing, why it matters, where risk is, what to do next (Customer Value). A freshness badge is an epistemic anchor.
2. Information decay: as time since last verification grows, probability that source data reflects current reality decays. Badge must encode this without fake certainty (Copy Direction).
3. Public/Private boundary: Public sees reveal-less explanations, confidence-safe language, last-verified/source cues. Founder/admin sees source weights, internal QA, private methods. This is an information asymmetry boundary that must be enforced at the component layer.
4. Legal/compliance: no live affiliate links, no guaranteed wins, no irresponsible gambling copy. The badge must not imply outcome certainty.
5. Performance: LOW performance risk per card, but budget must not be worsened. Cinematic but fast design direction creates tension.
6. Accessibility/mobile: mobile layout, reduced-motion, empty/loading/error states.

Gray-zone audit: The gray zone lies between "source cues where appropriate" and "source weights" — who decides appropriateness? Between cinematic polish and 10-second clarity — visual design could overwhelm signal. Between "no fake certainty" and badge semantics — a badge could accidentally certify staleness as freshness if backend verification is absent. Between rollback isolation and production data — card says no production data rollback needed, but feature flag state is production config.

I'll write this out in detail.

SOURCE_OPERATORS_AND_EQUATIONS:
Define:
- $t_v$: last verification timestamp (SI: s since Unix epoch)
- $t_c$: current client time (s)
- $\Delta t = t_c - t_v$ (s), age of source
- $\lambda$: source-decay hazard rate (s$^{-1}$)
- Freshness probability: $P(\text{valid} \mid \Delta t) = e^{-\lambda \Delta t}$
- Badge state $B \in \{\text{fresh}, \text{stale}, \text{unknown}\}$ with thresholds $\tau_f, \tau_s$ (s)
- $B = \text{fresh}$ if $\Delta t < \tau_f$, etc.
- Information content of badge: $I = -\log_2 P(B)$ (bits) — Shannon information.
- Half-life: $t_{1/2} = \ln 2 / \lambda$ (s)

Assumptions: independent verification events, constant $\lambda$, synchronized clocks ($\Delta t_{clock} \approx 0$).
Breakdown regimes: clock skew $|\Delta t_{clock}| > \tau_f$ invalidates badge; $\lambda \to 0$ means badge never ages (zombie freshness); missing verification endpoint makes $\Delta t$ undefined (division by zero / NaN regime).

Cite [PAGE 1] with quotes: "last-verified/source cues where appropriate", "no fake certainty", "performance budget is not worsened".

RETROCAUSAL_GENEALOGY:
Lineage: HTTP caching headers (Last-Modified, ETag), RSS <lastBuildDate>, "last updated" patterns in journalism, Wikipedia revision timestamps, financial data "as of" stamps, sports intelligence "as of" lines. Multi-week traps: Week 1 shipping badge without backend API causes stale cache; Week 2 design polish increases LCP/CLS; Week 3 accessibility regression from custom badge component; Week 4 method leakage via source weights in DOM. Dependencies on BUILD-GV2-020/BUILD-112.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: P0 pressure leads to copying "verified" language from other contexts, adding guaranteed-win adjacent copy, exposing admin weights to public, skipping reduced-motion. Counter-trap: copy scan, typecheck/lint/build gate, isolated feature flag, before/after screenshots. Clock: implementation plan has 6 sequential steps; rollback is isolated component/revert; time budget is short because difficulty S but priority P0.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: verify repo root, branch, dirty state, package manager, framework. If dirty state or wrong branch -> veto.
Biomechanical layer: mobile viewport, keyboard/focus, reduced motion. If contrast ratio < 4.5:1 or focus trap -> veto.
Weather layer (environmental variability): network latency, device pixel ratio, screen reader announcement. If badge causes layout shift on slow 3G -> veto.
Veto proof: acceptance criteria are hard gates; any single failure blocks shipment.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios as above with formal predictions.

Let me make sure word counts are sufficient. I'll write substantial prose.

I need to be careful: The prompt says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I must include [PAGE 1] and quote verbatim from the source text.

Let me check for any banned content: no betting lines. The source mentions "sports intelligence command center" and "sports-native signal language" and "no casino/tout feel" and "no guaranteed-betting language" and "no live sportsbook/casino affiliate links". I must not mention odds, spreads, etc. I won't.

Now let's compose the final output with exact XML tags. No markdown outside? The user wants exact XML sections. I'll provide only the XML sections.

Let's write.

Word counting rough estimate: I'll write long enough. Let's go section by section.

I'll now produce the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The execution object is BUILD-SITE-016: Source freshness badge system, classified P0 with difficulty S, governed by an EXTENSION duplicate gate matched against BUILD-GV2-020 and BUILD-112 [PAGE 1]. The route-level surface is explicitly scoped to source/freshness within the real shipping clone, not a sandbox or mock environment [PAGE 1]. The first multi-hop is therefore environmental: before any UI change, the agent must verify repo root, branch, dirty state, package manager, framework, and existing UI conventions [PAGE 1]. A dirty tree or wrong branch invalidates the isolated-change premise because rollback must remain component-scoped and not touch production DB, billing, secrets, launch gates, or live affiliate config [PAGE 1].

Second hop: the information-theoretic function of the badge. Customer Value states that users must understand what they are seeing, why it matters, where the risk is, and what to do next [PAGE 1]. A freshness badge is an epistemic anchor that converts hidden source age into a visible confidence-safe cue. The Public/Private Boundary mandates that the public sees reveal-less explanations, confidence-safe language, and last-verified/source cues where appropriate, while founder/admin sees source weights, internal QA, and private methods [PAGE 1]. This creates a hard information-asymmetry boundary inside the component layer: the badge must never leak founder weights or private methodology to the client [PAGE 1].

Third hop: the copy and legal boundary. Copy Direction prohibits fake certainty, method leakage, hype without proof, and guaranteed-betting language [PAGE 1]. Legal / Compliance Boundary prohibits live sportsbook/casino affiliate links, guaranteed wins, irresponsible gambling copy, minors targeting, and unapproved legal claims [PAGE 1]. A freshness badge is therefore semantically dangerous if it implies outcome validity rather than temporal recency. The badge must signal "source last verified at time t" without implying "this source predicts future results." That distinction is the narrowest gray zone in the card: the phrase "last-verified/source cues where appropriate" [PAGE 1] leaves "appropriate" to implementation judgment, which is exactly where fake certainty can creep in through visual styling (e.g., a green checkmark that reads as certification).

Fourth hop: performance and accessibility constraints. Performance risk is rated LOW, but the acceptance criterion states the performance budget must not be worsened [PAGE 1]. Design Direction calls for cinematic but fast, high contrast, calm reading states [PAGE 1]. Cinematic treatments risk layout shift, heavy animation, or contrast choices that pass in design review but fail WCAG on mobile reduced-motion. Acceptance Criteria require mobile layout, accessibility basics, and empty/loading/error states [PAGE 1]. Test Plan adds Playwright screenshot, mobile viewport screenshot, keyboard/focus check, reduced-motion check, and copy scan [PAGE 1].

Gray-zone audit: (1) The boundary between public "source cues" and private "source weights" is unowned at the route level; if the component fetches weights to decide badge color, method leakage becomes probable. (2) "Cinematic but fast" is a tension; a badge that delays first paint or shifts layout violates the performance budget despite LOW theoretical risk. (3) "No fake certainty" conflicts with any badge that uses binary fresh/stale semantics without uncertainty intervals, because real sources can be stale but still accurate, or fresh but wrong. (4) Rollback isolation assumes no production data rollback is needed [PAGE 1], yet a feature flag itself is production configuration; if the flag defaults on and the badge is defective, the rollback is still isolated to the UI layer, but user trust damage is not technically reversible.

Derivation conclusion: the smallest route-safe change is a read-only badge component keyed to a last-verified timestamp from an existing route endpoint, rendered behind a feature flag, with no new API surface, no raw sensitive queries, and no payment data [PAGE 1]. Every downstream decision—color, icon, threshold, animation—must be audited against the no-fake-certainty and accessibility gates before typecheck/lint/build.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let source age be defined on the shipping clone as the elapsed SI time between the last server-side verification timestamp and the client render time:

\[
\Delta t = t_c - t_v \quad [\mathrm{s}]
\]

where \(t_v\) is the last-verified source timestamp and \(t_c\) is client time, both in seconds since the Unix epoch. Because [PAGE 1] requires public exposure of "last-verified/source cues where appropriate" and forbids fake certainty [PAGE 1], the badge must encode temporal uncertainty, not outcome validity.

Model source validity as an exponential survival function with hazard rate \(\lambda\) [s\(^{-1}\)]:

\[
P(\text{source valid} \mid \Delta t) = e^{-\lambda \Delta t}
\]

Assumptions: (i) verification events form a homogeneous Poisson process; (ii) \(\lambda\) is constant over the badge display window; (iii) client and server clocks are synchronized within tolerance \(\delta t_{\text{clock}}\) such that \(|\Delta t_{\text{clock}}| \ll \tau_f\), where \(\tau_f\) is the freshness threshold in seconds.

The information content of the badge state \(B \in \{\text{fresh}, \text{stale}, \text{unknown}\}\) is measured in Shannon bits:

\[
I(B) = -\log_2 P(B) \quad [\mathrm{bits}]
\]

Badge thresholds are defined in seconds:

\[
B = 
\begin{cases}
\text{fresh} & \Delta t < \tau_f \\
\text{stale} & \tau_f \leq \Delta t < \tau_s \\
\text{unknown} & \Delta t \geq \tau_s \ \text{or verification endpoint unreachable}
\end{cases}
\quad [\mathrm{s}]
\]

Source information half-life:

\[
t_{1/2} = \frac{\ln 2}{\lambda} \quad [\mathrm{s}]
\]

Breakdown and singularity regimes:
- Clock-skew singularity: if \(|\Delta t_{\text{clock}}| > \tau_f\), the badge reports freshness relative to a wrong reference frame; validity is undefined until NTP/sync is restored.
- Zero-hazard regime: \(\lambda \to 0\) implies \(P(\text{valid} \mid \Delta t) \to 1\) for all finite \(\Delta t\), producing zombie freshness where a badge never ages despite stale data.
- Missing-endpoint regime: if the verification route returns no timestamp, \(\Delta t\) is NaN and the badge must degrade to "unknown" rather than default to fresh, per the no-fake-certainty rule [PAGE 1].
- Performance regime: the card rates performance risk LOW and requires the budget not be worsened [PAGE 1]; any badge operation adding \(>16\) ms to the route critical path or causing cumulative layout shift violates the acceptance criterion.

Source citation: [PAGE 1] states "last-verified/source cues where appropriate" [PAGE 1], "no fake certainty" [PAGE 1], "Public sees reveal-less explanations, confidence-safe language" [PAGE 1], and "Founder/admin sees source weights, internal QA, and private methods" [PAGE 1]. The acceptance criterion "Performance budget is not worsened" [PAGE 1] bounds the computational complexity of the badge render to \(O(1)\) with respect to source list size.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The source freshness badge sits in a lineage of temporal trust indicators that predate Galaxy Sports Edge. In network protocol design, HTTP Last-Modified and ETag headers [RFC 7232/7233 lineage] expose resource freshness to clients; RSS feeds publish <lastBuildDate> and <pubDate> so consumers know staleness; journalism and Wikipedia expose "last updated" and revision timestamps as accountability devices; financial terminals display "as of" stamps to prevent acting on obsolete quotes. Sports intelligence contexts similarly require "as of" framing because lineup, weather, and market data decay over time. BUILD-SITE-016 extends BUILD-GV2-020 and BUILD-112 [PAGE 1] from design/help/growth/trust work into a route-level site implementation, meaning the badge inherits the trust architecture of those ancestors but must localize it to source/freshness.

Multi-week traps are visible in the dependency structure. Week 1 trap: shipping the badge component before the backend verification pipeline exists produces a UI that displays "fresh" from a hardcoded or client-side timestamp, violating "no fake certainty" and "last-verified/source cues where appropriate" [PAGE 1]. Week 2 trap: the cinematic design direction [PAGE 1] encourages motion and high-contrast polish that can increase LCP or CLS, breaching the performance budget acceptance criterion [PAGE 1]. Week 3 trap: mobile and reduced-motion variants are deferred as "as relevant" in the Implementation Plan [PAGE 1], but the Test Plan mandates mobile viewport and reduced-motion checks [PAGE 1]; deferral creates an accessibility debt that surfaces only at Playwright screenshot time. Week 4 trap: the Public/Private Boundary [PAGE 1] is easiest to violate when the component needs source weights to choose badge color; exposing weights to the DOM leaks founder methodology [PAGE 1] and converts a P0 trust feature into a compliance liability. Because the duplicate gate is EXTENSION [PAGE 1], the badge must not rebuild existing help/growth/design tokens; linking rather than duplicating is both a consistency and a rollback-safety requirement.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression under P0 pressure follows a predictable recursion. The implementer, facing difficulty S but priority P0 [PAGE 1], is likely to regress to shipping patterns from prior cards: copying "verified" badge language from non-GSN contexts, using green checkmarks or shield icons that imply certification rather than recency, reading source weights into the client to decide badge state, and deferring reduced-motion or keyboard focus handling to a "fast follow" that never arrives. Each regression directly violates Copy Direction ("no fake certainty," "no hype without proof," "no guaranteed-betting language") [PAGE 1] and the Public/Private Boundary ("Founder/admin sees source weights" while public does not) [PAGE 1].

The counter-trap is to reverse the theory of mind: treat the badge as an untrusted component until the copy scan, typecheck/lint/build, route probe, Playwright screenshot, mobile viewport screenshot, keyboard/focus check, reduced-motion check, and accessibility basics all pass [PAGE 1]. The clock is the Implementation Plan's six steps [PAGE 1]: verify clone root/branch/dirty/framework/pm; locate route/component; implement smallest route-safe change; add mobile/reduced-motion/a11y/empty-loading-error states; run checks; capture screenshots. Because rollback is isolated to a component/revert or feature-flag disable [PAGE 1], the time pressure of P0 should not justify skipping any step; the isolated rollback means the cost of catching a defect pre-deploy is lower than the cost of a post-deploy trust or compliance incident. Recursive depth: the implementer must model the reviewer modeling the user—if the user sees a badge that reads as a guarantee, the trust asset becomes a liability; therefore the component must be designed to be misread as "data is current" at worst, never as "this prediction is certain."
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: the shipping clone must be verified for root, branch, dirty state, framework, package manager, and existing UI conventions [PAGE 1]. Veto condition: uncommitted changes, wrong branch, or unrecognized framework block all downstream work because rollback isolation depends on a clean, known tree.

Biomechanical layer veto: mobile layout, keyboard/focus, and reduced-motion states are acceptance criteria [PAGE 1]. Veto condition: contrast ratio below WCAG AA on the badge, focus trap or missing focus outline, animation that respects not `prefers-reduced-motion`, or layout shift on mobile viewport. Because Design Direction requires high contrast and calm reading states [PAGE 1], any badge animation that competes for attention violates the design intent before it violates a metric.

Weather layer (environmental variability) veto: network latency, device pixel ratio, screen-reader announcement, and empty/loading/error states vary by deployment environment [PAGE 1]. Veto condition: the badge blocks route render while waiting for a source timestamp, causing a loading state longer than the route's existing baseline, or the badge announces "fresh" to a screen reader when the underlying data is unknown. Empty and error states must degrade gracefully [PAGE 1]; a missing timestamp must render "unknown," not a silent fallback to fresh [PAGE 1].

Veto adjudication rule: any single layer failure blocks shipment. The rollback plan [PAGE 1] is intentionally narrow—revert isolated component/route/style or disable behind feature flag—so a veto pre-deploy is cheaper than a rollback post-deploy. No production data rollback is needed [PAGE 1] because the change is presentational and read-only.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Backend verification endpoint absent. The badge component is built to read `last_verified` from the route, but the endpoint returns no timestamp in the shipping clone. Counterfactual prediction: typecheck, lint, and build pass because the component type-checks against an optional timestamp; however, the Playwright route probe fails the freshness invariant because the badge either renders "unknown" (correct degradation) or falls back to client `Date.now()` (fake certainty violation [PAGE 1]). Veto trigger: copy scan or route probe detects client-generated freshness. Resolution: disable behind feature flag until the backend supplies `t_v`; do not ship client-side clock as source truth.

Scenario 2: Cinematic contrast regression on mobile. The badge uses a high-contrast animated glow per Design Direction [PAGE 1]. Counterfactual prediction: the mobile viewport screenshot passes at desktop breakpoints but fails WCAG contrast on small screens, and the reduced-motion check fails because the glow animates despite `prefers-reduced-motion: reduce`. Veto trigger: keyboard/focus check and accessibility basics fail. Resolution: revert to static badge token from existing design system; link to BUILD-GV2-020/BUILD-112 tokens rather than inventing new motion [PAGE 1].

Scenario 3: Copy drift into guaranteed-betting language. The badge microcopy includes "verified winner" or "source confirmed" phrasing borrowed from sports-tout patterns. Counterfactual prediction: the copy scan flags the phrase as violating Copy Direction ("no fake certainty," "no guaranteed-betting language") [PAGE 1] and Legal / Compliance Boundary ("no guaranteed wins") [PAGE 1]. Veto trigger: legal compliance scan before typecheck/lint/build completes. Resolution: replace with temporal-only copy such as "Last verified <timestamp>" or "Source age: <Δt> s"; no outcome-certainty language is permitted in any variant [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>