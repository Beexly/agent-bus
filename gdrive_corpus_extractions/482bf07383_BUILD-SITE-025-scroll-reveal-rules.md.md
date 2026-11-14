---
source: "BUILD-SITE-025-scroll-reveal-rules.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/site-war-room/claude-build-queue/cards"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4846
---

<NATIVE_REASONING>
The user is asking me to act as the "GSE + GSI Frontier Reasoning Foundry" and process a document about "Scroll reveal rules" for a website build task. They want me to output specific XML sections with deep reasoning, equations, historical lineage, theory of mind, veto adjudication, and counterfactual vetoes.

However, looking at the source text, this is purely a software engineering / UX design task document about implementing scroll reveal rules on a website. There is no sports betting content, no games, no teams, no probabilities, no physical systems. It's about web development, accessibility, performance, and responsible gambling boundaries.

The strict invariants say:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
3. >= 1,000-WORD DEPTH across exact XML sections.

The challenge: The source text is a simple product spec (scroll reveal rules for a website). It doesn't contain physics, biomechanics, weather, or probability content that would naturally fit "FORMAL LaTeX equations, SI/information/probability units." If I invent fake equations for scroll reveal (like "reveal velocity = distance / time"), that might violate "ZERO TOY EQUATIONS" if they're fake ratios. But I can state legitimate formalisms: CSS timing functions, intersection observer thresholds, accessibility contrast ratios (WCAG), performance budgets in ms, information theory for clarity (Shannon entropy?), Fitts's Law for touch targets, Hick-Hyman Law for decision time. These are legitimate, not toy equations.

I need to cite exact [PAGE N] markers and verbatim quotes since source pages are provided. The text says PAGES: 1 and the source text is provided. So I should cite [PAGE 1] and quote verbatim from the provided text.

I must not mention betting lines. The document itself mentions "no casino/tout feel", "no guaranteed-betting language", "no live sportsbook/casino affiliate links". I can reference those as compliance boundaries but not as betting lines.

Structure required:
<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Total >= 1,000 words across these sections.

Let me draft each section carefully.

THINK_TRACE: Multi-hop derivation. Start from the document: scroll reveal rules. Hops: (1) duplicate gate extends HELP-008 (help/growth/design/trust), (2) product surface marketing/content, (3) customer value = understand what/why/risk/what to do next, (4) design direction = premium sports intelligence command center, cinematic but fast, high contrast, calm reading states, no casino/tout feel, (5) copy direction = human, direct, grounded, no fake certainty, no method leakage, no hype, (6) legal compliance = no affiliate links, no guaranteed wins, no irresponsible gambling, no minors, (7) implementation plan = verify clone, branch, dirty state, framework, package manager, UI conventions, locate route/component, smallest route-safe change, mobile/reduced-motion/a11y/empty/loading/error, typecheck/lint/build, screenshots, (8) acceptance criteria = 10-second clarity, mobile, a11y, no method leakage/betting hype, performance budget, isolated rollback, (9) test plan, (10) rollback plan.

Gray-zone audit: Method leakage risk MEDIUM (from doc), Performance risk MEDIUM, Design risk visual polish without clarity. Legal LOW. Need to ensure scroll reveal doesn't leak proprietary founder methodology via animation sequencing that hints at internal weights. Avoid revealing "source weights" to public. Public sees reveal-less explanations, confidence-safe language, last-verified/source cues. Founder/admin sees source weights, internal QA, private methods. So scroll reveal must not animate private method indicators into public view. Also avoid reducing motion preferences being ignored (vestibular disorders). Performance: IntersectionObserver, lazy loading, CSS transforms/opacity (compositor-only), avoid layout thrashing.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. I can use:
- Intersection Observer threshold: \( \tau \in [0,1] \), entry ratio \( r(t) = \frac{A_{\text{visible}}(t)}{A_{\text{total}}} \), trigger when \( r(t) \ge \tau \).
- CSS transition timing: cubic-bezier \( B(t) = (1-t)^3 P_0 + 3(1-t)^2 t P_1 + 3(1-t) t^2 P_2 + t^3 P_3 \), with \( P_0=(0,0), P_3=(1,1) \), ease-out typical \( P_1=(0.25,0.1), P_2=(0.25,1) \) or similar. Units: seconds, dimensionless ratio.
- Reduced motion: \( \text{prefers-reduced-motion} = \text{reduce} \implies \Delta \text{opacity} \to 1, \Delta \text{transform} \to \text{identity} \) (skip reveal animation, show content immediately).
- WCAG contrast: \( \text{CR} = \frac{L_1 + 0.05}{L_2 + 0.05} \ge 4.5:1 \) for normal text, \( \ge 3:1 \) for large text (WCAG 2.1 AA). Luminance \( L = 0.2126 R + 0.7152 G + 0.0722 B \) (linearized). Units: dimensionless ratio.
- Performance budget: frame budget \( \Delta t_{\text{frame}} \le 16.67 \text{ ms} \) (60 Hz), interaction to next paint \( \le 100 \text{ ms} \) (INN/INP), LCP \( \le 2.5 \text{ s} \). Scroll reveal must not increase main-thread task duration beyond \( \Delta t_{\text{task}} \le 50 \text{ ms} \) to avoid INP degradation.
- Information clarity: 10-second clarity metric. Maybe Shannon entropy reduction? \( H(X) = -\sum p(x) \log_2 p(x) \) bits. But that's maybe toy-ish. Better to keep it simple: time-to-understand \( T_{10} \le 10 \text{ s} \).
- Hick-Hyman Law: \( T = a + b \log_2(n+1) \) for decision time with n choices. Relevant for menu/reveal complexity. Units: seconds.
- Fitts's Law: \( MT = a + b \log_2(D/W + 1) \) for touch targets. Mobile layout.

Units: SI seconds, meters (viewport px converted to CSS px dimensionless), dimensionless ratios, bits for information if used.

Singularity/breakdown regimes:
- IntersectionObserver threshold singularity at \( \tau = 0 \) (immediate fire) or \( \tau = 1 \) (fully visible only); if element never enters viewport due to fixed positioning, \( r(t) \) never reaches \( \tau \) (reveal starvation).
- Reduced motion media query mismatch: if JS assumes animation but user prefers reduced motion, parity violation.
- Contrast singularity: \( L_1 = L_2 \implies \text{CR} = 1:1 \) (invisible text).
- Layout thrashing: forced reflow each frame \( O(n) \) layout per scroll event \( \to \) \( \Omega(n \cdot f) \) where f is scroll frequency; breakdown at >60Hz scroll events without requestAnimationFrame/throttle.
- Preferred reduced motion + scroll reveal conflict: animation skipped but content hidden by CSS until reveal -> content inaccessible if JS fails. Breakdown: reveal state coupled solely to JS class without noscript fallback.

Cite [PAGE 1] with verbatim quotes. Example quotes: "Duplicate Gate", "Scroll reveal rules.", "Premium sports intelligence command center: cinematic but fast, high contrast, calm reading states, strong hierarchy, sports-native signal language, no casino/tout feel." etc.

RETROCAUSAL_GENEALOGY: Historical lineage. Scroll reveal origins: early web "reveal on scroll" via jQuery Waypoints (2011-ish), CSS animations, Intersection Observer API (2016+, W3C), material design motion (Google, 2014), iOS parallax/reveal, progressive disclosure. Multi-week traps: Week 1 animation polish over clarity; Week 2 performance regression from un-throttled scroll handlers; Week 3 accessibility lawsuits/reduced motion complaints; Week 4 method leakage via animation sequence hinting at internal model confidence. Also "cinematic but fast" tension — Apple's Human Interface Guidelines, BMW/iDrive, Bloomberg Terminal (command center aesthetic). Sports-native signal language lineage: ESPN, NCAA, Opta, StatsBomb visual language.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but applies to the dev team/product org. Crisis habit regression: under pressure (launch clock), team regresses to adding more animation, more reveals, "wow" factor (casino-like) to boost conversion, violating "no casino/tout feel" and "no hype without proof." Counter-trap: over-correcting by removing all motion, making site static and dead, hurting engagement. Clock: P2 priority, S difficulty; rollout must fit sprint clock; isolated rollback. Theory of mind: what does the new user think? They see reveals and think "this is hiding something" or "this is a tout site." What does the founder/admin think? They need private method visibility separate from public. Recursive: user sees reveal -> infers method exists -> if reveal timing correlates with content importance, user reverse-engineers priority/method leakage. Counter-trap to that: uniform reveal timing, content-first HTML, progressive enhancement.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since it's a website, physical layer = device hardware (refresh rate, CPU, thermal throttling, battery). Biomechanical = vestibular disorders, motor impairment, touch target size, screen reader. Weather = not directly applicable, but ambient light / outdoor readability (high contrast design direction addresses glare). Veto proof: if any layer fails, veto the change.
- Physical: low-end mobile (e.g., 2018 Android), thermal throttling -> JS main thread blocked -> IntersectionObserver delayed -> reveal never fires or jank. Veto if frame time > 16.67ms sustained.
- Biomechanical: prefers-reduced-motion: reject reveal animation; show immediately. WCAG contrast fail (<4.5:1) -> veto. Touch target < 44x44 css px (Apple HIG) / 48x48 dp (Material) -> veto mobile layout.
- Weather/ambient: high contrast for outdoor glare; if contrast insufficient in bright ambient (lux > 10,000), veto. The design direction says high contrast.
Decision: Adjudicate by layer priority: safety/a11y > performance > visual polish. If any veto fires, implement static fallback (reveal-less explanations per public boundary).

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some internal eval. Need 3 scenarios that are verifiable (testable) and counterfactual (what if we did X instead). Predictions.
Scenario 1: Remove reduced-motion branch. Counterfactual: animation always plays. Verification: Playwright reduced-motion check, `prefers-reduced-motion: reduce` media query. Prediction: violates a11y acceptance, causes vestibular distress, fails WCAG 2.1 animation guidance, increases bounce among motion-sensitive users by measurable pct (verifiable via lab testing).
Scenario 2: Scroll reveal driven by scroll event listener with getBoundingClientRect each frame (no IntersectionObserver). Counterfactual: main-thread layout thrashing. Verification: Chrome DevTools Performance, Long Task API, frame budget. Prediction: INP > 200ms on mid-tier mobile, LCP degraded, fails performance budget, MEDIUM risk realized.
Scenario 3: Public reveal sequence leaks internal priority weights by animating "PRO/ELITE" gated content sooner than public content. Counterfactual: uniform reveal timing, public content parity. Verification: screenshot diff public vs admin view, copy scan for method leakage. Prediction: method leakage risk MEDIUM realized, violates Public/Private Boundary, erodes trust, potential compliance issue.

I need to ensure total word count >= 1,000 words. Let me estimate each section ~200-250 words. Six sections -> 1,200-1,500 words. Good.

Citations: Use [PAGE 1] markers and verbatim quotes. Since the whole source is page 1, I'll cite [PAGE 1] frequently and quote exact phrases like "no casino/tout feel", "Method leakage risk: MEDIUM", "10-second clarity", etc.

No betting lines: I will not mention spreads/totals/moneylines/odds. I can mention "sportsbook" only in the context of the document's prohibition ("no live sportsbook/casino affiliate links") — that's quoting the source, not offering betting lines. Should be fine, but to be safe I'll just reference "affiliate links" generally or quote the document's legal boundary.

Zero toy equations: The equations I use are real formalisms (IntersectionObserver, cubic-bezier, WCAG contrast, Fitts/Hick-Hyman, frame budgets). I must state assumptions and breakdown regimes explicitly. No fake ratios like Force/Fatigue.

Let me write it out.

Word count check: I'll aim for rich prose.

Let me draft each section now, keeping XML tags exact.

THINK_TRACE >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX with units, page citations, breakdown.

RETROCAUSAL_GENEALOGY.

RECURSIVE_THEORY_OF_MIND.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.

No extra sections. No mention of betting odds. Let's go.

Need to be careful: The prompt says "STRICT INVARIANTS" and the user provided a source doc. I should output only the XML sections? Probably best to output the sections directly. No preamble. Just the XML blocks.

Let me write.

---

THINK_TRACE:

Word target 400+. Content: derive from duplicate gate -> HELP-008 extension -> route-level surface -> product surface marketing/content -> customer value chain (understand what/why/risk/what to do next) -> design direction constraints (cinematic but fast, high contrast, calm reading states, no casino/tout feel) -> copy constraints (human, direct, grounded, no fake certainty, no method leakage, no hype without proof) -> legal boundary (no affiliate links, no guaranteed wins, no irresponsible gambling, no minors) -> implementation plan hops (verify clone root/branch/dirty/framework/package manager/UI conventions -> locate route/component -> smallest route-safe change -> mobile/reduced-motion/a11y/empty/loading/error -> typecheck/lint/build -> screenshots) -> acceptance (10s clarity, mobile, a11y, no method leakage/betting-hype copy, performance budget, isolated rollback) -> test/rollback -> risks (design MEDIUM perf? actually design risk visual polish without clarity; performance MEDIUM; legal LOW; method leakage MEDIUM). Gray-zone audit: scroll reveal sits at boundary of public/private; animating reveal order can leak source weights (founder/admin sees source weights, public sees reveal-less explanations). Reveal timing as side channel: if high-confidence content reveals earlier, users infer internal ranking. Mitigation: content-first DOM, uniform reveal \( \tau \), progressive enhancement. Performance gray-zone: IntersectionObserver is efficient but polyfill or scroll fallback can throttle main thread. Reduced-motion gray-zone: skipping animation must not leave content hidden (opacity=0 with no JS fallback). Legal gray-zone: "clearer PRO/ELITE value" could drift into gated hype; copy scan required.

Good.

SOURCE_OPERATORS_AND_EQUATIONS: Include LaTeX blocks and verbatim quotes with [PAGE 1].

RETROCAUSAL_GENEALOGY: jQuery Waypoints (~2011), Intersection Observer (W3C Editor's Draft 2015, widespread 2017+), CSS @prefers-reduced-motion (Media Queries Level 5), material design motion, Bloomberg Terminal / HFT command center aesthetic (high contrast, dense signal), sports broadcast graphics (ESPN, NBC Sports) signal language, Apple HIG reduce motion. Multi-week traps: W1 polish-over-clarity, W2 perf regression, W3 a11y complaint, W4 method leakage via sequence. Also "scroll reveal" as pattern was hijacked by tout/casino landing pages (countdown timers, fake urgency) — GSN explicitly avoids this ("no casino/tout feel").

RECURSIVE_THEORY_OF_MIND: User model: new user lands, sees reveal, forms belief in <10s. If reveal feels manipulative, trust drops. If reveal is too slow, they leave. If reveal is absent, site feels static. Admin/founder model: needs private QA weights hidden. Recursive loop: reveal order -> user infers confidence ranking -> user treats site as tout -> brand damage. Counter-trap: static everything -> no engagement benefit. Clock: P2/S, isolated rollback, sprint-bound. Crisis regression: under launch pressure, add more reveals, staggered delays, "premium" parallax; violates "cinematic but fast" and "calm reading states."

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: device refresh 60/90/120Hz, thermal throttling, battery saver. Breakdown: main thread blocked > 50ms tasks causes INP degradation; reveal never fires on low-end if IO polyfill missing. Biomechanical: vestibular disorder (prefers-reduced-motion), motor impairment (touch target), screen reader (announce revealed content, aria-live). Weather/ambient: bright outdoor glare, high contrast requirement; if contrast ratio < 4.5:1 normal text, veto. Adjudication rule: safety/a11y veto overrides perf; perf veto overrides visual polish. If any veto fires, ship static reveal-less explanation (per public boundary: "Public sees reveal-less explanations").

RLVR_COUNTERFACTUAL_VETOES: Three scenarios, each verifiable, each with prediction.

Let's write it all out fully now. I'll keep track of words roughly.

I need to ensure LaTeX is valid-ish. I'll use inline \( ... \) and display \[ ... \].

Citations: [PAGE 1].

Verbatim quotes: include several exact strings from source.

Let's produce the final.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit for BUILD-SITE-025 Scroll reveal rules.

Hop 1: Duplicate gate. The card is an EXTENSION of HELP-008, scoped to route-level site implementation under the world-class website/product experience layer, per [PAGE 1] "duplicate_check_status: EXTENSION" and "relation_to_existing: Extends existing design/help/growth/trust work with route-level site implementation." This is not a duplicate because it carries a concrete route/surface target: marketing/content.

Hop 2: Goal to problem. The goal is "Scroll reveal rules" [PAGE 1]. The current problem states the visible workspace does not expose the runnable app and that route-level implementation needs the real shipping clone. Multi-hop implication: scroll reveal cannot be specified in abstraction; it must attach to a real route/component in the shipping clone, verified against root, branch, dirty state, framework, package manager, and UI conventions [PAGE 1] Implementation Plan step 1.

Hop 3: Product surface to customer value. Surface is marketing/content [PAGE 1]. Customer value chain: users understand what they are seeing, why it matters, where the risk is, and what to do next [PAGE 1]. This maps directly to the 10-second clarity acceptance criterion. The design direction imposes "Premium sports intelligence command center: cinematic but fast, high contrast, calm reading states, strong hierarchy, sports-native signal language, no casino/tout feel" [PAGE 1]. Copy direction adds "Human, direct, grounded, no fake certainty, no method leakage, no hype without proof, no guaranteed-betting language" [PAGE 1].

Hop 4: Public/Private boundary to legal. Public sees reveal-less explanations, confidence-safe language, and last-verified/source cues. Founder/admin sees source weights, internal QA, and private methods [PAGE 1]. Legal/compliance: no live sportsbook/casino affiliate links, no guaranteed wins, no irresponsible gambling copy, no minors targeting, no legal claims without approval [PAGE 1]. These constraints mean scroll reveal must never function as a side channel for private method weights into the public view.

Gray-zone audit. Risk ratings per [PAGE 1]: Design risk = visual polish without clarity; Performance risk = MEDIUM; Legal risk = LOW; Method leakage risk = MEDIUM. The gray zones are: (a) reveal ordering as leakage—if animated reveal sequence correlates with internal confidence or source weights, public users can reverse-engineer priority, violating the Public/Private boundary; (b) reduced-motion parity—skipping animation must not leave content trapped at opacity:0 behind a JS-only reveal class, or a11y fails; (c) performance—IntersectionObserver is efficient, but a scroll-event fallback with getBoundingClientRect on every frame causes layout thrashing and INP degradation, realizing the MEDIUM performance risk; (d) copy drift—"clearer PRO/ELITE value" can slide into guaranteed-betting language or hype without proof, triggering the legal boundary. Mitigation strategy: content-first HTML, uniform reveal threshold \( \tau \), progressive enhancement, reduced-motion immediate-show fallback, compositor-only transform/opacity, isolated rollback via feature flag or component revert. No production data rollback needed [PAGE 1] Rollback Plan.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes for scroll-reveal implementation.

Intersection Observer trigger operator. Let \( A_{\text{total}} \) be the element bounding-box area and \( A_{\text{visible}}(t) \) the intersecting viewport area at time \( t \). The entry ratio is
\[
r(t) = \frac{A_{\text{visible}}(t)}{A_{\text{total}}}, \qquad r(t) \in [0,1].
\]
The reveal fires when \( r(t) \ge \tau \), where threshold \( \tau \in [0,1] \) is dimensionless. Default assumption: \( \tau = 0.10 \) (10% visible) unless route-specific analytics from 15-analytics-event-tracking-design.md [PAGE 1] justify a route-specific value. Units: ratio (dimensionless); time in seconds (s).

CSS timing operator. Reveal transition uses compositor-only properties (opacity, transform) with cubic-bezier
\[
B(u) = (1-u)^3 P_0 + 3(1-u)^2 u P_1 + 3(1-u) u^2 P_2 + u^3 P_3,
\]
where \( u \in [0,1] \) is normalized time, \( P_0=(0,0) \), \( P_3=(1,1) \), and calm reading states imply an ease-out profile such as \( P_1=(0.25,0.10),\ P_2=(0.25,1.00) \). Duration assumption: \( \Delta t_{\text{reveal}} \le 400\text{ ms} \) to preserve "cinematic but fast" [PAGE 1]. Units: seconds, dimensionless Bezier coordinates.

Reduced-motion operator. Media query \( M = \text{prefers-reduced-motion: reduce} \). If \( M \) is true, the reveal operator collapses to identity:
\[
\text{opacity} \to 1,\qquad \text{transform} \to \text{translate}(0,0)\text{ scale}(1),
\]
with content shown immediately rather than animated. Breakdown regime: if reveal state is held solely in a JS-added class without noscript/static fallback, reduced-motion users receive permanently hidden content (reveal starvation).

WCAG contrast operator. Relative luminance \( L = 0.2126R_{\text{lin}} + 0.7152G_{\text{lin}} + 0.0722B_{\text{lin}} \), linearized per sRGB. Contrast ratio
\[
\text{CR} = \frac{L_{\text{light}} + 0.05}{L_{\text{dark}} + 0.05}.
\]
Requirement: \( \text{CR} \ge 4.5:1 \) for normal text, \( \ge 3:1 \) for large text (WCAG 2.1 AA). Singularity: \( L_{\text{light}} = L_{\text{dark}} \implies \text{CR} = 1:1 \) (invisible text; veto). Design direction explicitly requires high contrast [PAGE 1].

Performance budget operator. Frame budget at 60 Hz: \( \Delta t_{\text{frame}} \le 16.67\text{ ms} \). Main-thread task budget to protect INP: \( \Delta t_{\text{task}} \le 50\text{ ms} \). LCP target \( \le 2.5\text{ s} \). Scroll reveal must not add forced reflow per scroll event; cost model without IntersectionObserver is \( O(n \cdot f) \) layout work per second for \( n \) observed elements at scroll frequency \( f \), which exceeds budget when \( f \gtrsim 30\text{ Hz} \) on mid-tier mobile. Units: seconds, milliseconds, Hertz.

Mobile touch target. Fitts's Law movement time \( MT = a + b\log_2(D/W + 1) \), with \( D \) distance and \( W \) target width. Minimum touch target assumption: \( W \ge 44\text{ css px} \) (Apple HIG) / \( 48\text{ dp} \) (Material) on mobile layout. Units: CSS pixels, dimensionless log argument.

Breakdown/regime summary [PAGE 1]: (1) \( \tau = 0 \) fires immediately (no reveal); \( \tau = 1 \) requires full visibility (reveal may never fire for fixed/sticky elements); (2) main-thread block \( >50\text{ ms} \) sustained violates performance budget (MEDIUM risk); (3) \( \text{CR} < 4.5:1 \) fails accessibility basics (veto); (4) missing reduced-motion branch violates accessibility basics and the "calm reading states" direction.

Verbatim anchors [PAGE 1]: "no casino/tout feel", "no method leakage", "Performance risk: MEDIUM", "Method leakage risk: MEDIUM", "Public sees reveal-less explanations, confidence-safe language, and last-verified/source cues where appropriate."
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage of scroll reveal, and the multi-week trap structure specific to BUILD-SITE-025.

Lineage. Scroll reveal descends from three intersecting traditions. (1) Early web progressive disclosure: jQuery Waypoints (circa 2011) and scroll-triggered CSS classes, which bound reveal to scroll position via main-thread listeners. (2) The Intersection Observer API (W3C, widespread browser support from 2017 onward), which moves visibility detection off the main thread and is the correct primitive for a shipping clone per the implementation plan's requirement to verify framework and UI conventions before touching the route [PAGE 1]. (3) Motion and command-center aesthetics: Bloomberg Terminal high-contrast density, Apple Human Interface Guidelines reduce-motion, and Google Material Design motion principles (responsive, deliberate, coherent). The design direction's "Premium sports intelligence command center" [PAGE 1] directly inherits from financial/operational command-center visual language—high contrast, strong hierarchy, calm reading states—not from casino landing-page design.

Sports-native signal lineage. Sports broadcast graphics (network overlays, Opta/StatsBomb-style signal annotations) and modern sports intelligence products use reveal to manage information density: show base state first, layer detail on user context or scroll progress. GSN's requirement for "sports-native signal language" [PAGE 1] means reveal timing should track user information needs, not marketing urgency.

Multi-week traps. Week 1 trap: animation polish over clarity. Team adds staggered delays, parallax layers, and easing experiments to feel "cinematic," violating "calm reading states" and the 10-second clarity criterion [PAGE 1]. Week 2 trap: performance regression. A scroll-event listener with getBoundingClientRect replaces IntersectionObserver, causing layout thrashing on mid-tier mobile; MEDIUM performance risk is realized [PAGE 1]. Week 3 trap: accessibility complaint. Reduced-motion is not handled; vestibular users see jarring motion or, worse, content hidden behind a failed JS reveal; accessibility basics fail [PAGE 1]. Week 4 trap: method leakage. Reveal sequence accidentally exposes source weights or internal QA ordering to public users, violating "Public sees reveal-less explanations" and the MEDIUM method-leakage risk [PAGE 1]. Cross-week trap: "clearer PRO/ELITE value" drifts into gated hype or guaranteed-betting language, breaching the legal/compliance boundary [PAGE 1]. The genealogical safeguard is to treat scroll reveal as progressive enhancement over a static, accessible, contrast-compliant base, exactly matching the document's "reveal-less explanations" public boundary.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock dynamics for the build team and end users.

End-user model recursion. A new user lands on the route. Within 10 seconds [PAGE 1], they form a recursive belief: (a) if reveals feel staggered in a patterned way, the user infers hidden ranking or source weights, concluding the site is a "tout" or casino-style experience—directly violating "no casino/tout feel" and "no hype without proof" [PAGE 1]; (b) if reveals are slow or janky, the user believes the app is broken and leaves, harming activation and time on site [PAGE 1]; (c) if reveals are absent but content is clear, the user understands what they are seeing, why it matters, where the risk is, and what to do next [PAGE 1]. The user then models the admin: "The founder sees source weights; I do not." If the public reveal order correlates with those hidden weights, the user's model of the admin becomes adversarial (information asymmetry), eroding trust and support deflection value [PAGE 1].

Admin/founder model recursion. The founder needs private QA, source weights, and methods visible only internally [PAGE 1]. If the build team conflates admin preview with public reveal, the public surface leaks private methodology. Recursive counter-loop: admin tests reveal locally, sees polished sequence, assumes public parity, ships leakage.

Crisis habit regression. Under launch-clock pressure (P2 priority, S difficulty [PAGE 1]), the team regresses to "more motion equals premium": additional reveal stages, longer delays, staggered fades, parallax. This regresses into the casino/tout aesthetic the design direction explicitly bans [PAGE 1]. It also increases main-thread work and risks the MEDIUM performance budget [PAGE 1].

Counter-trap. The opposite over-correction is to ship zero motion: a static, dead surface that satisfies accessibility and performance but forfeits engagement, retention, and the "cinematic but fast" quality goal [PAGE 1]. The counter-trap is equally dangerous because the business value explicitly includes more time on site and clearer PRO/ELITE value [PAGE 1].

Clock. The clock is the isolated rollback window [PAGE 1]. Because rollback is component/route-scoped or feature-flaggable with no production data rollback [PAGE 1], the team can operate on a sprint clock rather than a deploy clock. Decision rule: ship the smallest route-safe change [PAGE 1] with uniform reveal threshold \( \tau \), content-first DOM, and static fallback; if any acceptance criterion fails at the clock boundary, roll back the isolated change rather than patching around it. Recursive stability requires that the reveal never become a signal channel for private weights, because once users infer hidden ordering, trust is expensive to restore.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, weather/ambient, and legal veto proof for scroll reveal. Adjudication hierarchy: safety/accessibility veto > performance veto > visual-polish veto. Any single fired veto forces the static fallback (reveal-less explanations per the public boundary [PAGE 1]).

Physical layer (device/hardware). Assumptions: 60–120 Hz refresh, main-thread availability, battery-saver or thermal-throttled states on mid-tier and low-end mobile. Veto condition: sustained main-thread task \( \Delta t_{\text{task}} > 50\text{ ms} \) or frame budget \( \Delta t_{\text{frame}} > 16.67\text{ ms} \) caused by reveal logic. Breakdown regime: an IntersectionObserver polyfill or scroll-event fallback on a thermally throttled device produces reveal starvation or jank; the change is vetoed and the static base ships. No production data is touched, satisfying the rollback plan [PAGE 1].

Biomechanical layer (user physiology). Assumptions: vestibular disorder susceptibility, motor impairment, screen-reader users. Veto conditions: (1) prefers-reduced-motion: reduce is present and reveal animation is not collapsed to immediate display (accessibility basics fail); (2) touch targets below \( W \ge 44\text{ css px} \) on mobile [PAGE 1] mobile layout acceptance; (3) revealed content not announced to assistive technology (missing aria-live or focus management). Breakdown regime: opacity:0 content revealed only by JS class, with no static fallback, leaves reduced-motion or screen-reader users with invisible content; veto fires.

Weather/ambient layer (environmental). Assumptions: outdoor use, glare, variable ambient luminance (up to \( >10{,}000\text{ lux} \) direct sunlight). Veto condition: contrast ratio \( \text{CR} < 4.5:1 \) normal text or \( <3:1 \) large text under measured ambient conditions, violating the high-contrast design direction [PAGE 1]. Singularity: \( L_{\text{light}} = L_{\text{dark}} \implies \text{CR} = 1:1 \), invisible text; automatic veto. The "high contrast, calm reading states" requirement [PAGE 1] makes this a hard gate, not a soft preference.

Legal/compliance layer. Veto conditions: any live sportsbook/casino affiliate link, guaranteed-wins copy, irresponsible gambling copy, minors targeting, or unapproved legal claims [PAGE 1]. Scroll reveal itself carries LOW legal risk [PAGE 1], but if reveal sequencing emphasizes PRO/ELITE upsell beyond confidence-safe language, it breaches the public/private boundary and copy direction [PAGE 1].

Adjudication outcome for BUILD-SITE-025: proceed only with IntersectionObserver-based reveal, compositor-only opacity/transform, reduced-motion identity fallback, WCAG AA contrast, mobile touch-target compliance, and static noscript base. If any layer vetoes, revert the isolated component/style change or disable behind feature flag [PAGE 1].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR counterfactual veto scenarios with predictions.

Scenario 1: Remove reduced-motion branch; always play reveal animation. Counterfactual: the reveal operator ignores \( M = \text{prefers-reduced-motion: reduce} \). Verification: Playwright test injecting \( \text{prefers-reduced-motion: reduce} \), asserting revealed content is visible without animation and no opacity:0 trap remains; keyboard/focus check; reduced-motion check per Test Plan [PAGE 1]. Prediction: accessibility basics fail [PAGE 1]; motion-sensitive users experience vestibular distress; the site violates WCAG 2.1 animation guidance and the "calm reading states" direction [PAGE 1]; expected measurable increase in bounce and support deflection among affected users, converting the LOW legal risk into an active compliance exposure.

Scenario 2: Replace IntersectionObserver with a scroll-event listener calling getBoundingClientRect on every scroll tick. Counterfactual: reveal detection runs on the main thread at scroll frequency \( f \). Verification: Chrome DevTools Performance trace and Long Task API during route scroll; assert \( \Delta t_{\text{task}} \le 50\text{ ms} \) and no sustained frame budget breach; confirm performance budget is not worsened [PAGE 1] Acceptance Criteria. Prediction: MEDIUM performance risk is realized [PAGE 1]; on mid-tier mobile \( f \gtrsim 30\text{ Hz} \) with \( n \) observed elements yields \( O(n \cdot f) \) layout work, degrading INP and LCP; the build fails the performance gate and must roll back the isolated route/component change [PAGE 1].

Scenario 3: Reveal sequence leaks internal priority by animating gated PRO/ELITE content before public content. Counterfactual: public reveal timing correlates with hidden source weights or admin QA ordering. Verification: screenshot diff between public and admin views; copy scan for method leakage and betting-hype copy per Test Plan [PAGE 1]; confirm no method leakage and no guaranteed-betting language [PAGE 1] Acceptance Criteria. Prediction: MEDIUM method-leakage risk is realized [PAGE 1]; users reverse-engineer hidden ranking, perceive the surface as a tout/casino experience [PAGE 1], trust and activation decline; the Public/Private boundary is breached, requiring immediate feature-flag disable and revert [PAGE 1] Rollback Plan.
</RLVR_COUNTERFACTUAL_VETOES>