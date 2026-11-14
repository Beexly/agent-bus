---
source: "BUILD-SITE-033-gse-rating-movement-reason-cards.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/site-war-room/claude-build-queue/cards"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4530
---

<NATIVE_REASONING>
The user wants me to process a source document about GSE Rating movement reason cards. They want me to act as the GSE + GSI Frontier Reasoning Foundry and follow strict invariants:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios, state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes, cite exact [PAGE N] markers and verbatim quotes when source pages provided
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions

Wait, the source text is about a website/product design task (GSE Rating movement reason cards), not sports science or physics. But the user wants me to apply these strict invariants which seem designed for sports analysis reasoning. I need to reconcile this.

The source is a build card for a website feature: rating movement reason cards. It's about UX design, product implementation, trust, conversion, etc. There's no sports betting content actually - it explicitly says no betting-hype copy, no guaranteed betting language.

I need to produce the XML sections with >=1000 words total, with THINK_TRACE >=400 words.

Since the source is about product design/UX, I should interpret the formal equations/information theory units appropriately - perhaps using information theory (bits, Shannon entropy), probability, confidence intervals, signal detection theory, etc. rather than fake physics ratios.

Let me plan:

THINK_TRACE (>=400 words): Deep multi-hop derivation about the design task. Gray-zone audit: method leakage risk is HIGH. Need to analyze how to implement reason cards without exposing founder methodology. Multi-hop: from business value (trust/conversion) -> copy direction (no fake certainty) -> public/private boundary -> implementation -> risks. Audit the tension between "10-second clarity" and "no method leakage."

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX using information theory. Define rating movement as a stochastic process. Use Shannon entropy H(X), mutual information I(R;M) between rating R and movement reason M. Confidence-safe language as bounded posterior P(M|R) < threshold. SI units: bits for information, seconds for latency, dimensionless for confidence scores. Page citations: [PAGE 1] since only 1 page provided. Breakdown regimes: when entropy too high (unexplainable movement), when mutual information too low (reasons uninformative), singularity at P=0 or P=1 (fake certainty).

RETROCAUSAL_GENEALOGY: Historical lineage - credit rating reason codes (FICO adverse action notices), FDA drug label "black box" warnings, nutrition labels, sports handicapping transparency, Efficient Market Hypothesis, Bayesian updating. Multi-week traps: recency bias, small sample overreaction, anchoring to opening lines (but careful - no betting lines mentioned; can mention opening ratings/odds? The invariant says no betting lines: spreads, totals, moneylines, odds. So avoid "odds" entirely. Talk about ratings, probabilities, confidence.)

RECURSIVE_THEORY_OF_MIND: Crisis habit regression - when users see rating movement, they regress to pattern-matching / gambling mindset (seeking sure things). Counter-trap: the design might accidentally create false confidence by over-explaining. Clock: session decay, attention economy, 10-second clarity requirement vs. deep explanation tension.

CROSS_LAYER_VETO_ADJUDICATION: Physical - device performance, mobile layout, reduced motion. Biomechanical - touch targets, reading distance, font size, accessibility (WCAG). Weather - not really applicable, but maybe "environmental context" like network conditions, signal strength. Veto proof: if any layer fails (a11y, mobile, performance), veto the ship.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios:
1. Copy scan detects "guaranteed" or betting-hype language -> veto, replace with confidence-safe language.
2. Method leakage detected (exposing source weights/internal QA) in public build -> veto, gate behind admin.
3. Performance budget worsened or a11y failure -> veto, rollback component.

Each with prediction: e.g., if scenario 1 occurs, predicted outcome is user trust erosion and legal/compliance risk, veto triggers replacement with "last verified" cues only.

Word count: Need >=1000 across sections, THINK_TRACE >=400. Let me aim for ~1300-1500 total.

Citations: Source is 1 page, so cite [PAGE 1] and include verbatim quotes from the source text.

Let me draft carefully.

THINK_TRACE: I need >=400 words. Let's write a thorough derivation.

Structure:
- Start with the object-level task: implement rating movement reason cards on /intelligence/rating.
- Hop 1: Business value -> trust/activation -> requires explanation of rating movement.
- Hop 2: Explanation creates method leakage risk (HIGH per source). Public/private boundary: public sees reveal-less explanations, confidence-safe language; founder/admin sees source weights.
- Hop 3: Copy direction - human, direct, grounded, no fake certainty, no method leakage, no hype without proof, no guaranteed-betting language. This constrains the semantic space of allowable copy.
- Hop 4: Design direction - premium command center, cinematic but fast, high contrast, calm reading states, no casino/tout feel. This constrains visual layer.
- Hop 5: Implementation constraints - route-safe smallest change, mobile, reduced motion, a11y, empty/loading/error, performance budget not worsened, rollback isolated.
- Gray-zone audit: The gray zone is between "users understand what they are seeing" (customer value) and "founder-only methodology" must not be exposed. If reason cards are too specific, they leak weights; if too vague, they fail 10-second clarity. Formalize as an information bottleneck.
- Breakdown: when dI/dt or explanation specificity crosses threshold, leakage occurs.

Let me write this out with verbatim quotes.

Verbatim quotes from source:
- "No method leakage or betting-hype copy." (Acceptance Criteria)
- "Public sees reveal-less explanations, confidence-safe language, and last-verified/source cues where appropriate. Founder/admin sees source weights, internal QA, and private methods." (Public/Private Boundary)
- "Method leakage risk: HIGH." (Risks)
- "Use route-specific events from 15-analytics-event-tracking-design.md. Avoid sensitive raw queries or payment data." (Data/Analytics Needed)
- "A new user understands the surface within 10 seconds." (Acceptance Criteria)

Now SOURCE_OPERATORS_AND_EQUATIONS:
Define:
- Rating state R_t ∈ ℝ at time t.
- Movement ΔR_t = R_t - R_{t-1}.
- Reason set 𝓜 = {m_1, ..., m_K} (public-facing reason labels).
- Public explanation E: ΔR → 𝓜 × [0,1] (reason label + confidence).
- Information constraint: I(ΔR; E) ≤ C_leak, where C_leak is the method leakage channel capacity (bits).
- Confidence-safe language: posterior P(m_k | ΔR) reported only if P ∈ [p_min, p_max] avoiding 0 and 1 to prevent false certainty.
- Latency constraint: T_render ≤ T_budget (performance budget).
- Units: bits (information), seconds (time), dimensionless [0,1] for confidence/probability.
- Singularity/breakdown: P → 1 (fake certainty, prohibited), H(ΔR | E) → 0 (over-specific explanation leaking method), H(E | ΔR) → high (reasons uninformative, fails 10-second clarity).
- Cite [PAGE 1].

RETROCAUSAL_GENEALOGY:
- Lineage: Fair Credit Reporting Act adverse action reason codes (specific reasons for credit denial), FDA structured product labeling, Bayesian forecasting (de Finetti, Dawid), information design (Tufte, Few), sports intelligence transparency.
- Multi-week traps: recency weighting trap (overvaluing last week's movement), sample-size trap (explaining noise as signal), anchor drift (users anchor to initial rating and perceive all movement as threat/opportunity), explanation debt (each reason card creates expectation of future explanation; if missing, trust drops).

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under uncertainty (rating movement), users regress to pattern-seeking, treating the card as a tip/signal rather than information. This is the "tout feel" the design direction prohibits.
- Counter-trap: Over-designing the reason card (cinematic, strong signal language) can inadvertently mimic a betting tout, triggering the very casino feel prohibited.
- Clock: 10-second clarity is a hard attentional boundary; beyond it, session abandonment rises. Also mobile session length constraints.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: device screen size, network latency, render performance. Veto if T_render > budget or layout breaks on mobile viewport.
- Biomechanical layer: touch target ≥48×48 CSS px, reading distance ~40cm, font size ≥16px body, WCAG 2.1 AA contrast, reduced-motion prefers reduced motion. Veto if a11y fails.
- Weather/environmental layer: low signal, bright glare (outdoor mobile use), one-handed use. Veto if low-contrast "calm reading states" become unreadable in glare or if motion animations trigger vestibular disorders.
- Adjudication: any layer veto blocks ship; rollback isolated to component.

RLVR_COUNTERFACTUAL_VETOES:
Scenario 1: Copy scan flags "guaranteed," "lock," "sure thing," or implied win. Prediction: trust erosion + legal/compliance breach. Veto action: replace with confidence-safe language, last-verified cue only. Verifiable: automated copy scan + human review.
Scenario 2: Public build exposes source weights/internal QA/private methodology. Prediction: method leakage (HIGH risk), competitive harm. Veto: gate private data behind admin feature flag; public sees reveal-less explanation. Verifiable: code review + build artifact scan.
Scenario 3: Performance budget worsened / a11y failure (keyboard focus, contrast, mobile). Prediction: activation drop, accessibility exclusion. Veto: revert isolated component or disable feature flag. Verifiable: Lighthouse/a11y audit + Playwright screenshot.

Each scenario needs prediction. Good.

Now word count management. THINK_TRACE needs to be >=400 words by itself. Total >=1000.

Let me estimate:
THINK_TRACE: ~450-550 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~250-350 words.
RETROCAUSAL_GENEALOGY: ~200-300 words.
RECURSIVE_THEORY_OF_MIND: ~200-300 words.
CROSS_LAYER_VETO_ADJUDICATION: ~150-250 words.
RLVR_COUNTERFACTUAL_VETOES: ~200-300 words.
Total ~1450-2000. Good.

I must not mention spreads, totals, moneylines, odds. I will avoid "odds" completely. Use "ratings," "probability," "confidence," "signal."

No fake equations like Force/Fatigue. Use real information theory: Shannon entropy, mutual information, channel capacity, posterior probability. Units: bits, seconds, dimensionless.

Cite [PAGE 1] and verbatim quotes.

Let me write the final output with proper XML tags exactly as specified.

Make sure not to use markdown code fences that break XML? The user wants exact XML sections. I'll output raw XML tags with content inside. I can use LaTeX inline with \( ... \) or $$ ... $$ inside the XML. That should be fine.

Let me write it now, carefully ensuring word count.

I'll draft THINK_TRACE first:

---

<THINK_TRACE>
The object-level artifact is BUILD-SITE-033, scoped to the /intelligence/rating route in the Galaxy Sports Edge shipping clone. The first derivation hop is the customer-value statement: users must understand what they are seeing, why it matters, where the risk is, and what to do next. That requirement collapses into a 10-second clarity bound: a new user must comprehend the surface within ten seconds. The second hop is the copy constraint, which is unusually restrictive: human, direct, grounded, no fake certainty, no method leakage, no hype without proof, no guaranteed-betting language. The third hop is the public/private boundary: public users see reveal-less explanations and confidence-safe language plus last-verified/source cues; founder/admin sees source weights, internal QA, and private methods. The fourth hop is the risk register: method leakage risk is rated HIGH; legal risk LOW; performance risk LOW; design risk is visual polish without clarity.

The gray zone sits between explanation sufficiency and secrecy. If the reason card names too many inputs, it back-calculates source weights and leaks founder methodology. If it names too few, it violates the 10-second clarity acceptance criterion and leaves the user unable to locate risk or next steps. This is an information-bottleneck problem: the public explanation channel must transmit just enough mutual information between the observed rating movement and a set of actionable reasons, while keeping the leakage channel to the private weighting model below capacity. Because the acceptance criteria explicitly forbid method leakage and betting-hype copy, any card that implies a deterministic edge—"rating moved because X guarantees Y"—fails by design. The cinematic command-center design direction adds a second-order hazard: high-contrast signal language can visually mimic a tout service, triggering the prohibited casino/tout feel even when the copy is clean.

Multi-hop audit conclusion: the smallest route-safe change must be a component that renders a bounded reason label with a calibrated confidence band, a last-verified timestamp, and an error/empty state, gated so that source weights never ship to the public bundle. The rollback boundary is isolated to the component or a feature flag, satisfying the rollback plan. Every downstream check—typecheck, lint, Playwright screenshot, keyboard focus, reduced motion—serves as a veto gate on this narrow channel.
</THINK_TRACE>

That's probably ~400 words. Let me count roughly: yes around 380-420. I'll expand slightly to be safe.

SOURCE_OPERATORS_AND_EQUATIONS:

Formalism. Let rating at time t be R_t ∈ ℝ. Observed movement ΔR_t = R_t − R_{t−1}. Public reason vocabulary 𝓜 = {m₁ … m_K}, where each m_k is a reveal-less explanation string approved under the copy direction. The public explanation operator E maps movement to a tuple: E(ΔR_t) = (m_k, ĉ_t, τ_t) ∈ 𝓜 × [0,1] × 𝕋, where ĉ_t is a confidence-safe scalar and τ_t is a last-verified/source cue timestamp.

Information constraint (method-leakage bound): I(ΔR_t; E) ≤ C_leak, measured in bits. C_leak is the maximum admissible mutual information between raw movement and public explanation before source weights become inferable. Confidence-safe reporting operates on a truncated posterior: p̂(m_k | ΔR_t) is rendered only when p_min ≤ p̂ ≤ p_max, with p_min > 0 and p_max < 1 to exclude the false-certainty singularity at p → 0 or p → 1. Units: information in bits (Shannon), confidence dimensionless in [0,1], latency τ_render in seconds.

Breakdown/singularity regimes: (1) H(ΔR_t | E) → 0 implies the explanation is over-specified and leaks the private weighting model (method-leakage failure). (2) H(E | ΔR_t) → H(E) implies reasons are uninformative and the 10-second clarity criterion fails. (3) p̂ → 1 creates fake certainty, prohibited by copy direction and acceptance criteria. Performance: T_render + T_hydrate ≤ T_budget so the performance budget is not worsened.

Citations: all constraints trace to [PAGE 1], including verbatim "No method leakage or betting-hype copy" (Acceptance Criteria), "Public sees reveal-less explanations, confidence-safe language" (Public/Private Boundary), and "Method leakage risk: HIGH" (Risks).

RETROCAUSAL_GENEALOGY:

Lineage. The reason-card pattern descends from regulated disclosure design: Fair Credit Reporting Act adverse-action reason codes, which require specific, non-mysterious explanations for score changes; structured product labeling in pharmaceuticals; and Bayesian forecasting literature (de Finetti; Dawid) in which predictions are accompanied by calibrated probabilities rather than deterministic claims. In sports intelligence specifically, the ancestor is the shift from tout-style "lock" language to signal-plus-uncertainty displays, driven by trust and conversion metrics rather than by wagering outcomes.

Multi-week traps. Trap A: recency-weighting regression—users interpret the most recent rating movement as the dominant signal and disregard the longer trajectory, so a single week's reason card is overweighted. Trap B: sample-size noise attribution—explaining a movement that is within random fluctuation as though it had a determinate cause, violating "no hype without proof." Trap C: anchor drift—users fixate on the initial rating and treat every subsequent movement as a threat or opportunity, generating emotional churn that harms retention. Trap D: explanation debt—once a reason card appears for movement in week N, users expect one in week N+1; absence is read as opacity, degrading trust. These traps operate over multi-week horizons and must be guarded by the empty/loading/error states and confidence-safe language specified in the build card.

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression. When a user observes rating movement, uncertainty triggers a regression to pattern-seeking: the user treats the reason card as a tip or a sure thing rather than as calibrated information. This is exactly the casino/tout feel the design direction prohibits. Under stress (rapid rating change, mobile context, low signal), the working-memory load rises and the user is more likely to convert a probabilistic reason into a deterministic expectation.

Counter-trap. The design itself can spring the trap: cinematic motion, strong hierarchy, and "sports-native signal language" may visually overstate confidence, causing users to regress even when the copy is conservative. The counter-trap is therefore a symmetric constraint on the visual layer—calm reading states, high contrast without alarm colors, and no animation that implies urgency.

Clock. The 10-second clarity bound is a hard attentional clock. Beyond roughly ten seconds, session abandonment probability rises non-linearly, particularly on mobile viewports where the kill criterion is swipe-away. The component must therefore hydrate and paint within the performance budget and present its reason, risk, and next-step within a single glanceable unit.

CROSS_LAYER_VETO_ADJUDICATION:

Physical layer: device class, viewport dimensions, network latency, and render budget. Veto condition: layout breaks on mobile viewport or T_render exceeds the performance budget. Biomechanical layer: touch targets ≥48×48 CSS px, body font ≥16 px at ~40 cm reading distance, WCAG 2.1 AA contrast ratios, keyboard focus visibility, and reduced-motion preference honored. Veto condition: any accessibility basic fails. Weather/environmental layer: outdoor glare, one-handed use, low-bandwidth or high-latency connections, and vestibular sensitivity to motion. Veto condition: calm reading states become unreadable under glare or reduced-motion is violated. Adjudication rule: any single layer veto blocks shipment; rollback is isolated to the component or feature flag, requiring no production data rollback.

RLVR_COUNTERFACTUAL_VETOES:

Scenario 1 (Copy violation): Automated copy scan or human review detects prohibited tokens such as guaranteed outcomes, "lock," "sure thing," or implied winning language. Prediction: trust erosion and legal/compliance breach; users treat the card as betting advice. Veto action: block deploy, replace copy with confidence-safe language and last-verified/source cues only; re-scan. Verifiable: copy scan diff + acceptance-criteria scan.

Scenario 2 (Method leakage): Public bundle or route response exposes source weights, internal QA values, or private methodology fields. Prediction: HIGH method-leakage risk realized; competitive harm and founder-only methodology exposure. Veto action: gate private fields behind admin feature flag; public receives reveal-less explanation; revert build artifact. Verifiable: build-artifact scan + route-probe inspection.

Scenario 3 (Performance/a11y regression): Lighthouse, Playwright screenshot, or keyboard/focus check shows mobile layout failure, contrast failure, or performance budget worsened. Prediction: activation drop, accessibility exclusion, and higher support deflection (opposite of business value). Veto action: revert isolated component/style change or disable feature flag; capture before/after screenshots for record. Verifiable: typecheck/lint/build + mobile viewport screenshot + a11y audit.

All scenarios reference [PAGE 1] acceptance criteria and test plan.

---

Let me now refine and expand to ensure word counts. I'll produce the final answer. Need to ensure no mention of "odds" or betting lines. I used "betting advice" in Scenario 1 prediction—should I avoid? The invariant says zero betting lines: never mention spreads, totals, moneylines, or odds. "Betting advice" is not a line, but to be safe I'll rephrase to "wagering-direction language" or just "decision language." Actually, "betting-hype copy" is in the source itself, and I quoted it. The invariant is about me not generating betting lines. Quoting the source's "betting-hype copy" is fine since it's a verbatim quote from [PAGE 1]. But I should avoid generating new betting line terminology. I'll keep quotes but avoid generating new odds/spread/moneyline/total terms.

Also "wagering" might be borderline but not a line. I'll use "gambling-direction" or just keep it neutral: "users treat the card as a deterministic recommendation." That's safer.

Let me check word counts more carefully by writing it out fully.

THINK_TRACE target >=400 words. I'll write ~480.

Total target >=1000. I'll aim ~1600.

Let me compose the final response.

One thing: "exact [PAGE N] markers" - source has PAGES: 1, so [PAGE 1]. Good. Verbatim quotes included.

No markdown code block wrapping? The user specified exact XML sections. I'll output just the XML content. I can include LaTeX. Fine.

Let me write the final output now.
</NATIVE_REASONING>

<THINK_TRACE>
The object-level artifact is BUILD-SITE-033, scoped to the /intelligence/rating route in the Galaxy Sports Edge shipping clone. The first derivation hop is the customer-value statement: users must understand what they are seeing, why it matters, where the risk is, and what to do next. That requirement collapses into a hard 10-second clarity bound drawn directly from the acceptance criteria: “A new user understands the surface within 10 seconds.” [PAGE 1] The second hop is the copy-direction constraint, which is unusually restrictive: “Human, direct, grounded, no fake certainty, no method leakage, no hype without proof, no guaranteed-betting language.” [PAGE 1] The third hop is the public/private boundary: public users receive reveal-less explanations, confidence-safe language, and last-verified/source cues, while founder/admin sees source weights, internal QA, and private methods. [PAGE 1] The fourth hop is the risk register: design risk is visual polish without clarity; performance risk is LOW; legal risk is LOW; and method leakage risk is rated HIGH. [PAGE 1]

The gray zone sits between explanation sufficiency and secrecy. If the reason card names too many inputs or specific signals, a user can back-calculate source weights and leak founder-only methodology, violating the HIGH-severity method-leakage boundary. If the card names too few inputs, it violates the 10-second clarity acceptance criterion and leaves the user unable to locate risk or determine next steps. This is an information-bottleneck problem: the public explanation channel must transmit just enough mutual information between observed rating movement and a set of actionable reasons, while keeping the leakage channel to the private weighting model below capacity. Because the acceptance criteria explicitly forbid method leakage and betting-hype copy, any card that implies a deterministic edge fails by design; “No method leakage or betting-hype copy” is a non-negotiable gate. [PAGE 1]

The cinematic command-center design direction adds a second-order hazard: high-contrast signal language can visually mimic a tout service, triggering the prohibited casino/tout feel even when the copy text is clean. Therefore the smallest route-safe change must be a component that renders a bounded reason label with a calibrated confidence band, a last-verified timestamp, and explicit empty/loading/error states, with source weights gated so they never ship to the public bundle. The rollback boundary is isolated to the component or a feature flag, satisfying the rollback plan and requiring no production data rollback. [PAGE 1] Every downstream check—typecheck, lint, build, Playwright screenshot, mobile viewport screenshot, keyboard/focus check, reduced-motion check, and copy scan—serves as a veto gate on this narrow channel. Multi-hop conclusion: ship only a reversible, reason-label component whose public surface is information-theoretically bounded and whose private inputs remain behind the admin boundary.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the rating at time t be R_t ∈ ℝ. Observed movement is ΔR_t = R_t − R_{t−1}. The public reason vocabulary is 𝓜 = {m₁, …, m_K}, where each m_k is a reveal-less explanation string approved under the copy direction. The public explanation operator E maps movement to a tuple: E(ΔR_t) = (m_k, ĉ_t, τ_t) ∈ 𝓜 × [0,1] × 𝕋, where ĉ_t is a confidence-safe scalar, τ_t is a last-verified/source-cue timestamp, and 𝕋 is the time domain.

Information constraint (method-leakage bound): I(ΔR_t; E) ≤ C_leak, measured in bits. C_leak is the maximum admissible mutual information between raw movement and public explanation before source weights become inferable by a public user. [PAGE 1] Confidence-safe reporting operates on a truncated posterior: p̂(m_k | ΔR_t) is rendered only when p_min ≤ p̂ ≤ p_max, with p_min > 0 and p_max < 1 to exclude the false-certainty singularity at p̂ → 0 or p̂ → 1. Units: information in bits (Shannon); confidence dimensionless in [0,1]; latency τ_render in seconds; touch-target size in CSS pixels.

Breakdown and singularity regimes: (1) H(ΔR_t | E) → 0 implies the explanation is over-specified and leaks the private weighting model (method-leakage failure, HIGH risk). [PAGE 1] (2) H(E | ΔR_t) → H(E) implies reasons are uninformative and the 10-second clarity acceptance criterion fails. (3) p̂ → 1 creates fake certainty, explicitly prohibited by the copy direction and acceptance criteria. [PAGE 1] Performance constraint: T_render + T_hydrate ≤ T_budget so the performance budget is not worsened. [PAGE 1] All constraints trace to [PAGE 1], including verbatim “No method leakage or betting-hype copy” (Acceptance Criteria), “Public sees reveal-less explanations, confidence-safe language” (Public/Private Boundary), and “Method leakage risk: HIGH” (Risks).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The reason-card pattern descends from regulated disclosure design: Fair Credit Reporting Act adverse-action reason codes, which require specific, non-mysterious explanations for score changes; structured product labeling in pharmaceuticals; and Bayesian forecasting literature (de Finetti; Dawid) in which predictions are accompanied by calibrated probabilities rather than deterministic claims. In sports intelligence specifically, the ancestor is the shift from tout-style deterministic language to signal-plus-uncertainty displays, driven by trust, activation, and retention metrics rather than by wagering outcomes. [PAGE 1]

Multi-week traps. Trap A is recency-weighting regression: users interpret the most recent rating movement as the dominant signal and disregard the longer trajectory, so a single week’s reason card is overweighted. Trap B is sample-size noise attribution: explaining a movement that is within random fluctuation as though it had a determinate cause, violating “no hype without proof.” [PAGE 1] Trap C is anchor drift: users fixate on the initial rating and treat every subsequent movement as a threat or opportunity, generating emotional churn that harms retention and time on site. [PAGE 1] Trap D is explanation debt: once a reason card appears for movement in week N, users expect one in week N+1; absence is read as opacity, degrading trust and support deflection. [PAGE 1] These traps operate over multi-week horizons and must be guarded by the empty/loading/error states and confidence-safe language specified in the build card.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when a user observes rating movement, uncertainty triggers a regression to pattern-seeking; the user treats the reason card as a tip or deterministic recommendation rather than as calibrated information. This is precisely the casino/tout feel the design direction prohibits: “Premium sports intelligence command center: cinematic but fast, high contrast, calm reading states, strong hierarchy, sports-native signal language, no casino/tout feel.” [PAGE 1] Under stress—rapid rating change, mobile context, low bandwidth—working-memory load rises and the user is more likely to convert a probabilistic reason into a deterministic expectation.

Counter-trap: the design itself can spring the trap. Cinematic motion, strong hierarchy, and signal language may visually overstate confidence, causing regression even when the copy is conservative. The counter-trap is therefore a symmetric constraint on the visual layer: calm reading states, high contrast without alarm colors, and no animation implying urgency.

Clock: the 10-second clarity bound is a hard attentional clock. Beyond roughly ten seconds, session-abandonment probability rises non-linearly, particularly on mobile viewports where the kill criterion is swipe-away. The component must hydrate and paint within the performance budget and present its reason, risk, and next step within a single glanceable unit, consistent with “Better activation, more time on site, clearer PRO/ELITE value.” [PAGE 1]
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: device class, viewport dimensions, network latency, and render budget. Veto condition: layout breaks on mobile viewport or T_render exceeds the performance budget. Biomechanical layer: touch targets ≥48×48 CSS px, body font ≥16 px at ~40 cm reading distance, WCAG 2.1 AA contrast ratios, visible keyboard focus, and reduced-motion preference honored. Veto condition: any accessibility basic fails. Weather/environmental layer: outdoor glare, one-handed use, low-bandwidth or high-latency connections, and vestibular sensitivity to motion. Veto condition: calm reading states become unreadable under glare or reduced-motion is violated. Adjudication rule: any single layer veto blocks shipment; rollback is isolated to the component or feature flag and requires no production data rollback. [PAGE 1]
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (copy violation): Automated copy scan or human review detects prohibited tokens such as guaranteed outcomes, “lock,” “sure thing,” or implied winning language. Prediction: trust erosion and legal/compliance breach; users treat the card as a deterministic recommendation. Veto action: block deploy, replace copy with confidence-safe language and last-verified/source cues only, then re-scan. Verifiable via copy-scan diff and acceptance-criteria scan against [PAGE 1].

Scenario 2 (method leakage): Public bundle or route response exposes source weights, internal QA values, or private methodology fields. Prediction: HIGH method-leakage risk is realized, causing competitive harm and founder-only methodology exposure. Veto action: gate private fields behind an admin feature flag; public receives reveal-less explanation; revert the build artifact. Verifiable via build-artifact scan and route-probe inspection against the public/private boundary in [PAGE 1].

Scenario 3 (performance/a11y regression): Lighthouse, Playwright screenshot, or keyboard/focus check shows mobile layout failure, contrast failure, keyboard-focus loss, or performance budget worsened. Prediction: activation drop, accessibility exclusion, and higher support deflection, the opposite of the stated business value. Veto action: revert the isolated component/style change or disable the feature flag; capture before/after screenshots for the record. Verifiable via typecheck/lint/build, mobile viewport screenshot, and a11y audit per the test plan in [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>