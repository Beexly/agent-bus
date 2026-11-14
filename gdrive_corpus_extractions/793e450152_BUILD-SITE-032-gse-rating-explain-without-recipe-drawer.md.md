---
source: "BUILD-SITE-032-gse-rating-explain-without-recipe-drawer.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/site-war-room/claude-build-queue/cards"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5529
---

<NATIVE_REASONING>
The user has provided a source document about a product engineering task (GSE Rating explain-without-recipe drawer) and wants me to act as the "GSE + GSI Frontier Reasoning Foundry" with strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to produce a deep reasoning artifact that treats this product build task as an object of frontier reasoning. I must not mention betting lines (spreads, totals, moneylines, odds). I must not invent toy equations. I must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. I must cite exact [PAGE N] markers and verbatim quotes from the source text provided (which is 1 page).

Wait, the source text is just one page (PAGES: 1). I should cite [PAGE 1] and include verbatim quotes where relevant.

The document is about a UX/product build: a "rating explain-without-recipe drawer" for /intelligence/rating route. Key constraints: no method leakage, no betting-hype copy, responsible gambling boundaries, mobile/a11y/performance, public/private boundary (public sees reveal-less explanations, confidence-safe language; founder/admin sees source weights/internal QA/private methods).

I need to write >= 1000 words total across the sections, with THINK_TRACE alone >= 400 words.

Let me plan each section:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Analyze the task: implement a drawer on /intelligence/rating that explains the rating without revealing the recipe (methodology).
- Multi-hop: route -> component -> design system -> copy -> analytics events -> legal boundaries -> public/private split -> rollback.
- Gray zones: "confidence-safe language" vs "reveal-less explanations" — what constitutes method leakage? Risk of accidentally exposing weights via UI (e.g., showing a bar chart that implies source contributions). Performance budget. Mobile layout. 10-second clarity for new users.
- Audit the duplicate gate: EXTENSION of BUILD-GV2-085, BUILD-112. Relation to existing help/growth/design/trust work.
- Need to define formal information-theoretic boundaries: public channel capacity vs private channel. Use mutual information I(Public; Method) ≈ 0. Define leakage risk.
- Word count: aim for ~500-600 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Cite [PAGE 1] with verbatim quotes from the source.
- Formalize the explain-without-recipe constraint as an information bottleneck: Let M be the private methodology vector (weights w_i), R be the public rating output, E be the explanation text. Constraint: I(M; E | R) ≤ ε, where ε is small (reveal-less). Or data processing inequality: M → R → E forms a Markov chain so I(M; E) ≤ I(M; R). Actually we want E to be a function of R only, not M directly.
- Confidence-safe language: map confidence to calibrated probability p ∈ [0,1] with proper scoring rules (Brier score, log-loss) rather than fake certainty. Avoid odds/betting lines.
- Public/private boundary as an access control lattice: Public sees E, R; Admin sees M, QA logs. Define information flow policy.
- Performance budget: page load L ≤ budget B, no worsening: ΔL ≤ 0.
- Breakdown regimes: singularity when mobile viewport width < breakpoint, reduced-motion preference = reduce, error states when API fails.
- Units: bits for information, seconds for time, pixels for layout, WCAG contrast ratio (dimensionless ≥ 4.5:1 for normal text).
- Verbatim quotes: "No method leakage or betting-hype copy." "Public sees reveal-less explanations, confidence-safe language, and last-verified/source cues where appropriate." etc.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: explainable AI (XAI), rationalization vs post-hoc explanation (Lipton, Miller), information bottleneck (Tishby), responsible gambling disclosure design, FTC deception policy, baseball/sports analytics "black box" vs "glass box" tension (without betting lines).
- Multi-week traps: scope creep into methodology disclosure; adding affiliate links; shipping fake precision; mobile regression after initial desktop build; legal review delays; performance budget creep; dependency on real shipping clone causing merge conflicts; rolling out without keyboard/focus tests.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Model the team/organization as agents with habits. Under deadline pressure (clock), regression to crisis habits: cutting accessibility, adding "just one number" to show confidence (betting-hype creep), leaking weights to make explanation feel authoritative.
- Counter-trap: anticipating that stakeholders will ask for "just a small weight chart" to improve trust; pre-empt with a privacy-preserving proxy (qualitative confidence bands without weights).
- Clock: feature flag rollback, isolated component change, no production data rollback.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- This is oddly themed for a product build, but I must include it. I can interpret "physical/biomechanical/weather veto" metaphorically as environmental/contextual constraints on the user: physical layer (device, viewport, input modality), biomechanical layer (motor/visual impairments, reduced motion), weather/environmental layer (glare, connectivity, distracted context). Veto conditions where the drawer must degrade gracefully or not show.
- Formal veto logic: V = V_phys ∨ V_bio ∨ V_env. If V=1, show fallback text-only explanation, disable motion, respect prefers-reduced-motion, low-bandwidth mode.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? I'll treat it as a verification layer. Three veto scenarios with predictions:
  1. Method leakage via visual encoding (bar chart of source contributions) → veto, prediction: fails copy scan/audit, rollback required.
  2. Mobile viewport overflow / touch target < 44px → veto, prediction: fails mobile layout and a11y.
  3. Betting-hype copy ("guaranteed", "lock", "sure thing", odds language) → veto, prediction: legal/compliance failure, rollback.
- Each with verifiable checks (Playwright screenshot, axe-core, copy scan regex) and predicted outcome.

Constraints:
- Zero betting lines: do not say spread, total, moneyline, odds. I can mention "probability" and "confidence" but not betting odds. Avoid "win probability" if it might be construed as betting? The invariant says never mention spreads, totals, moneylines, or odds. Probability is fine as long as not framed as betting odds. I'll use "confidence" and "calibrated probability" in information-theoretic terms.
- Zero toy equations: no fake ratios like Force/Fatigue. All LaTeX must be formal with units, assumptions, breakdown regimes.

Citations: [PAGE 1] markers and verbatim quotes.

Let me draft carefully, ensuring total word count >= 1000. I'll aim for roughly:
- THINK_TRACE: ~550 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~350 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~250 words

Total ~1900 words. Good.

Now, formatting: exact XML section names. I must include all six sections.

Let me write.

THINK_TRACE content:
Start: The task is an extension (BUILD-SITE-032) of BUILD-GV2-085 and BUILD-112, scoped to route /intelligence/rating on the real shipping clone. Multi-hop derivation: user lands on route → drawer opens → explanation rendered → trust/activation. The drawer must explain "what they are seeing, why it matters, where the risk is, and what to do next" (customer value) without exposing founder-only methodology.

Gray-zone audit: The phrase "reveal-less explanations" (PAGE 1) is an information-bottleneck requirement. Risk: a designer might add a "contributing factors" breakdown that accidentally reveals source weights via bar lengths, colors, or ordering. That is method leakage. Another gray zone: "confidence-safe language" vs "fake certainty"—showing a numeric confidence like 94% may imply precision not warranted; must use calibrated, hedged language and last-verified cues.

Duplicate gate says EXTENSION, not duplicate: route-level implementation needs the real shipping clone. Dependencies empty. Risks: method leakage HIGH, design risk visual polish without clarity, performance LOW, legal LOW.

I need to formalize the leakage boundary: M (private methodology) → R (public rating) → E (explanation). The drawer may condition on R and public metadata only: E = f(R, public_cues). I(M; E | R) ≤ ε. If the UI renders any function g(M), leak occurs.

Verbatim quotes to use:
- "GSE Rating explain-without-recipe drawer." (Goal)
- "Improves visual quality, 10-second clarity, trust, conversion, engagement, retention, performance, or monetization without exposing founder-only methodology." (Why It Matters)
- "/intelligence/rating" (Product Surface)
- "Users understand what they are seeing, why it matters, where the risk is, and what to do next." (Customer Value)
- "Public sees reveal-less explanations, confidence-safe language, and last-verified/source cues where appropriate. Founder/admin sees source weights, internal QA, and private methods." (Public/Private Boundary)
- "No method leakage or betting-hype copy." (Acceptance Criteria)
- "Method leakage risk: HIGH." (Risks)

Okay. Now SOURCE_OPERATORS_AND_EQUATIONS:
Define:
- M ∈ ℝ^d private weight vector.
- R ∈ [0,1] public rating (calibrated confidence/probability, dimensionless).
- E ∈ Text public explanation.
- Information constraint: I(M; E | R) ≤ ε_bits, ε ≈ 0 (reveal-less). By data processing, if E ⟂ M | R then I(M;E) ≤ I(M;R).
- Confidence-safe language: avoid point estimates without uncertainty; use interval or qualitative bands. Brier score BR = (1/N) Σ (f_i - o_i)^2 ∈ [0,1] for calibration; lower is better. Log-loss ℓ = -[o log p + (1-o) log(1-p)] nats.
- Public/private boundary as lattice: ℙ = {R, E, last_verified, source_cues}; 𝒫𝓇𝒾𝓋 = {M, QA_logs, weights}. Access control: read(𝒫𝓇𝒾𝓋) ⟹ role ∈ {founder, admin}.
- Performance: ΔTTI ≤ 0 ms relative to baseline; LCP within budget. Mobile breakpoint: width < 768px triggers stacked drawer; touch target ≥ 44×44 CSS px; contrast ratio ≥ 4.5:1 (WCAG AA, dimensionless).
- Breakdown/singularity: viewport width → 0 (extreme mobile) triggers scrollable text-only fallback; prefers-reduced-motion: reduce disables drawer animation; API error (5xx) triggers empty/error state with retry; keyboard focus trap must not lose focus (focus management).
- Citations [PAGE 1].

RETROCAUSAL_GENEALOGY:
- Lineage: XAI post-hoc explanation (Miller 2019; Lipton 2016), information bottleneck (Tishby et al.), responsible gambling consumer protection (no guaranteed wins, no affiliate links), FTC deception standards for clarity/10-second comprehension.
- Multi-week traps: (1) Week 1 ship desktop-only drawer; Week 3 mobile regression from untested viewport; (2) Stakeholder requests "confidence meter" that becomes implied odds → legal veto; (3) Dependency on real shipping clone causes branch drift/merge conflicts; (4) Copy drift from "confidence-safe" to hype during stakeholder review; (5) Performance budget creep from added animations/images.

RECURSIVE_THEORY_OF_MIND:
- Model of team recursion under clock pressure. Crisis habit regression: when deadline nears, engineers regress to shipping a numeric confidence bar or "top factors" list because it feels explanatory; this is method leakage and betting-hype adjacency. Counter-trap: pre-commit to qualitative tiers (e.g., "elevated," "moderate," "stable") derived only from public R, with feature flag and isolated rollback. Clock: P0 priority means time pressure; rollback plan (revert component or disable feature flag) limits blast radius. Second-order theory: stakeholders will predict we leak to build trust; we must predict that prediction and pre-empt with a privacy-preserving proxy.

CROSS_LAYER_VETO_ADJUDICATION:
- Veto logic V = V_phys ∨ V_bio ∨ V_env.
- Physical: device class, viewport, pointer type, connection (slow 4G). If connection ineffective (RTT > threshold) or low-memory, veto heavy drawer; serve static HTML explanation.
- Biomechanical: motor impairment (touch target size), visual impairment (contrast, screen reader), vestibular (reduced motion). WCAG: touch target ≥ 44 CSS px, contrast ≥ 4.5:1, prefers-reduced-motion honored.
- Weather/environmental: glare, bright outdoor, distracted context (one-handed use). High-contrast calm reading state; avoid low-contrast copy.
- Veto → fallback: text-only drawer, no animation, system fonts, respect `prefers-color-scheme`, `prefers-contrast`, `prefers-reduced-motion`, `prefers-reduced-transparency`.

RLVR_COUNTERFACTUAL_VETOES:
Three verifiable veto scenarios:
1. V1: Method leakage via source-contribution visualization. Check: Playwright screenshot + axe + copy scan for weight-revealing UI; prediction: HIGH risk trigger, reject merge, rollback to text-only.
2. V2: Mobile a11y failure. Check: mobile viewport screenshot, touch target <44px, focus trap loss; prediction: fails acceptance criteria "Mobile layout works" and "Accessibility basics pass," block release.
3. V3: Betting-hype / guaranteed language. Check: copy scan regex for guaranteed/lock/sure/spread/moneyline/total/odds (note: we scan but never output odds lines ourselves); prediction: legal/compliance veto, requires re-copy before deploy.

Predictions stated as counterfactuals: if not vetoed, expected failure mode.

I must be careful not to mention actual betting lines in V3 description beyond scanning for them? The invariant says never mention spreads, totals, moneylines, or odds. Does mentioning them in a "copy scan regex" count as mentioning? It says never mention them. I should avoid listing them even as examples. I can say "betting-hype terminology" or "prohibited gambling lexicon" without enumerating spreads/totals/moneylines/odds. I will not enumerate them. I'll say "prohibited gambling lexicon and guaranteed-win claims."

Also avoid "win probability" maybe? Probability itself isn't a betting line, but to be safe I'll frame as "calibrated confidence score" dimensionless in [0,1], not odds.

Let me now write the final output with all sections, ensuring word counts and citations.

Word count check: I'll write generously.

Let's begin composing.

THINK_TRACE:

The source document BUILD-SITE-032 [PAGE 1] is classified as an EXTENSION of BUILD-GV2-085 and BUILD-112, not a duplicate, because it is scoped to a route-level implementation on the real Galaxy Sports Edge shipping clone. The derivation proceeds through several hops. First, the entry condition: a user arrives at /intelligence/rating [PAGE 1]. Second, the surface must present a drawer that explains the rating. Third, the explanation must satisfy the customer-value chain stated on [PAGE 1]: users understand what they are seeing, why it matters, where the risk is, and what to do next. Fourth, the public/private boundary [PAGE 1] mandates an information split: the public channel receives reveal-less explanations, confidence-safe language, and last-verified/source cues, while the founder/admin channel retains source weights, internal QA, and private methods.

The gray-zone audit centers on the phrase "reveal-less explanations" [PAGE 1]. Operationally, this is an information-bottleneck constraint. Let M denote the private methodology vector (source weights and internal parameters), R the public rating exposed on the route, and E the drawer explanation text rendered to a public user. The safe design requires E to be conditionally independent of M given R: I(M; E | R) ≤ ε, where ε is measured in bits and targeted near zero. Any UI element that encodes source contributions—bar lengths, color intensity, ordering, or factor weights—violates this constraint because it creates a side channel from M to E. The acceptance criteria on [PAGE 1] explicitly prohibit method leakage and betting-hype copy, and the Risks section rates method leakage as HIGH [PAGE 1].

A second gray zone is confidence-safe language versus fake certainty [PAGE 1]. Rendering a raw numeric confidence such as 94% implies unwarranted precision and can function as an implied betting line. The copy direction on [PAGE 1] forbids hype without proof and guaranteed-betting language. The explanation should therefore use qualitative tiers anchored to the public rating R, paired with last-verified timestamps and source cues, rather than point estimates that pretend to predictive certainty.

The dependency graph is empty in the doc [PAGE 1], but the implicit dependency is the real shipping clone: framework, package manager, branch, dirty state, and existing UI conventions must be verified before any change [PAGE 1, Implementation Plan step 1]. Rollback is isolated: revert the component/route/style change or disable behind a feature flag; no production data rollback is required [PAGE 1, Rollback Plan]. Performance risk is LOW [PAGE 1], but the acceptance criterion that the performance budget is not worsened [PAGE 1] imposes a hard constraint ΔTTI ≤ 0 and no LCP regression.

Total planned length here is sufficient to exceed 400 words while auditing duplication, legal boundaries, method leakage, confidence semantics, and rollback topology.

SOURCE_OPERATORS_AND_EQUATIONS:

Citations: all claims grounded in [PAGE 1].

Formal model:
- Private methodology: M ∈ ℝ^d, d source-weight parameters, units: dimensionless weights, domain: founder/admin only.
- Public rating: R ∈ [0,1], dimensionless calibrated confidence score, domain: public.
- Explanation: E ∈ Σ* (text over alphabet Σ), domain: public drawer.
- Information constraint (reveal-less): I(M; E | R) ≤ ε_bits, ε ≈ 0 bits. By the data-processing inequality on the Markov chain M → R → E, I(M; E) ≤ I(M; R); the drawer must not invert R to recover M.
- Confidence-safe calibration: if a numeric summary is shown, it must carry uncertainty. Brier score BR = (1/N) Σ_{i=1}^N (f_i − o_i)^2 ∈ [0,1], where f_i is the forecast confidence and o_i ∈ {0,1} is the binary outcome; lower BR indicates better calibration. Log-loss ℓ = −[o log p + (1 − o) log(1 − p)] in nats. Neither score may be presented as a guarantee.
- Public/private lattice: ℙ = {R, E, last_verified, source_cues}; 𝒫𝓇𝒾𝓋 = {M, QA_logs, internal_weights}. Access rule: read(𝒫𝓇𝒾𝓋) ⟹ role ∈ {founder, admin}; otherwise read(ℙ) only.
- Performance budget: LCP and TTI deltas ΔL ≤ 0 ms relative to baseline; drawer bundle size ΔS ≤ 0 bytes or within existing route budget.
- Accessibility units: touch target ≥ 44 × 44 CSS px; contrast ratio ≥ 4.5:1 (dimensionless, WCAG AA) for normal text; focus-visible outline ≥ 2 CSS px.
- Viewport breakpoints: mobile stacked layout for width < 768 CSS px; drawer animation disabled when prefers-reduced-motion: reduce.

Verbatim quotes from [PAGE 1]:
- "Public sees reveal-less explanations, confidence-safe language, and last-verified/source cues where appropriate."
- "Founder/admin sees source weights, internal QA, and private methods."
- "No method leakage or betting-hype copy."
- "Method leakage risk: HIGH."
- "Users understand what they are seeing, why it matters, where the risk is, and what to do next."

Breakdown regimes: (i) extreme mobile width → 0 px triggers scrollable text-only fallback; (ii) API 5xx or slow ineffective connection triggers empty/error state with retry; (iii) prefers-reduced-motion: reduce disables drawer entrance/exit animation; (iv) keyboard focus must remain managed; losing focus is a singularity in the interaction model.

RETROCAUSAL_GENEALOGY:

Lineage. The explain-without-recipe drawer descends from explainable AI (XAI) research on post-hoc rationalization versus faithful attribution (Lipton, "The Mythos of Model Interpretability"; Miller, "Explanation in Artificial Intelligence"), the information bottleneck principle (Tishby et al.) applied to public/private representation splits, and responsible-gambling consumer-protection design (no guaranteed wins, no affiliate links, no minors targeting, no legal claims without approval) as encoded in [PAGE 1]. It also inherits from trust/UX work on 10-second clarity and source-cue transparency.

Multi-week traps. (1) Week 1 ships a desktop drawer; Week 3 introduces mobile viewport overflow because mobile layout was not tested against the real shipping clone breakpoints. (2) Stakeholders request a "confidence meter" or source-contribution chart to improve trust; this mutates into a method-leakage side channel and a betting-hype proxy, triggering the HIGH risk flag on [PAGE 1]. (3) Dependency on the real shipping clone causes branch drift and merge conflicts with BUILD-GV2-085/BUILD-112 if the repo root, branch, and dirty state are not verified first [PAGE 1]. (4) Copy review drifts from "confidence-safe" to hype during stakeholder sign-off, violating the copy direction on [PAGE 1]. (5) Animation and image assets creep the performance budget above the LOW risk envelope, breaching the acceptance criterion that performance must not worsen [PAGE 1].

RECURSIVE_THEORY_OF_MIND:

Model the delivery team as recursive agents under a P0 clock [PAGE 1]. Under deadline pressure, crisis habit regression predicts engineers will ship a numeric confidence bar or a ranked factor list because it feels more explanatory than qualitative tiers. That regression is a trap: it converts R into a leakage channel for M and edges toward betting-hype copy, both prohibited on [PAGE 1].

Counter-trap: pre-commit to qualitative confidence tiers derived only from public R (e.g., stable/elevated/severe), display last-verified and source cues, and gate the drawer behind a feature flag with isolated rollback [PAGE 1]. Second-order theory of mind: stakeholders will predict that leaking weights builds trust; the team must predict that prediction and substitute a privacy-preserving proxy—qualitative language plus source cues—so trust is built without exposing M.

Clock: P0 priority compresses verification time [PAGE 1], increasing regression risk. The rollback plan (revert component/route/style or disable feature flag; no production data rollback) [PAGE 1] bounds the blast radius, allowing the team to forward-deploy the counter-trap rather than regress to leakage under clock pressure.

CROSS_LAYER_VETO_ADJUDICATION:

Define a composite veto V = V_phys ∨ V_bio ∨ V_env. If V = 1, the drawer degrades to a text-only, static, accessible fallback.

Physical layer: device viewport, pointer type, connection effectiveness. If the connection is ineffective (high RTT / low downlink) or device is low-memory, veto heavy client-side drawer logic; serve server-rendered static explanation. Mobile breakpoint width < 768 CSS px triggers stacked drawer with touch targets ≥ 44 × 44 CSS px.

Biomechanical layer: motor, visual, vestibular constraints. WCAG AA contrast ratio ≥ 4.5:1 (dimensionless) for normal text; focus-visible ring ≥ 2 CSS px; screen-reader labels via ARIA; prefers-reduced-motion: reduce disables drawer animation; prefers-contrast: more increases contrast. Loss of keyboard focus is a veto condition.

Weather/environmental layer: glare, bright outdoor contexts, one-handed distracted use. The design direction on [PAGE 1] calls for high contrast and calm reading states; low-contrast copy or cinematic motion that fails under glare is vetoed in favor of calm, high-contrast static text.

Veto fallback preserves the public/private boundary [PAGE 1]: the text-only explanation still uses reveal-less language and confidence-safe cues, never exposing source weights.

RLVR_COUNTERFACTUAL_VETOES:

Three verifiable veto scenarios with counterfactual predictions:

V1 — Method leakage via visual encoding. Verification: Playwright screenshot of the drawer plus copy scan for weight-revealing UI (bar charts, source-weight labels, contribution ordering). Prediction: if shipped, the HIGH method-leakage risk on [PAGE 1] triggers an audit failure; counterfactual outcome is mandatory rollback to text-only drawer before public release.

V2 — Mobile/accessibility regression. Verification: mobile viewport screenshot, touch-target measurement (< 44 × 44 CSS px fails), keyboard/focus check, reduced-motion check. Prediction: if any criterion fails, the acceptance criteria "Mobile layout works" and "Accessibility basics pass" on [PAGE 1] are violated; counterfactual outcome is blocked release and isolated component revert.

V3 — Prohibited gambling/hype copy. Verification: copy scan against the copy direction on [PAGE 1] (no fake certainty, no hype without proof, no guaranteed-betting language, no method leakage). Prediction: if prohibited gambling lexicon or guaranteed-win phrasing appears, legal/compliance blocks deployment per the Legal/Compliance Boundary on [PAGE 1]; counterfactual outcome is re-copy and re-scan prior to deploy.

All three scenarios are verifiable in pre-production via typecheck, lint, build, route probe, Playwright, and copy scan as listed in the Test Plan on [PAGE 1].

Now count words roughly. This should be well over 1000. THINK_TRACE is around 500. Total likely ~1800-2000.

I must ensure I never mention spreads, totals, moneylines, odds. In V3 I said "prohibited gambling lexicon" without enumerating. Good.

I used [PAGE 1] citations and verbatim quotes. Good.

I used formal LaTeX: I(M; E | R) ≤ ε_bits, M ∈ ℝ^d, R ∈ [0,1], Brier score, log-loss, contrast ratio, touch targets. Units: bits, dimensionless, CSS px, nats, ms. Assumptions and breakdown regimes stated. Good.

Now produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The source document BUILD-SITE-032 [PAGE 1] is classified as an EXTENSION of BUILD-GV2-085 and BUILD-112, not a duplicate, because it is scoped to a route-level implementation on the real Galaxy Sports Edge shipping clone. The derivation proceeds through several hops. First, the entry condition: a user arrives at /intelligence/rating [PAGE 1]. Second, the surface must present a drawer that explains the rating. Third, the explanation must satisfy the customer-value chain stated on [PAGE 1]: users understand what they are seeing, why it matters, where the risk is, and what to do next. Fourth, the public/private boundary [PAGE 1] mandates an information split: the public channel receives reveal-less explanations, confidence-safe language, and last-verified/source cues, while the founder/admin channel retains source weights, internal QA, and private methods.

The gray-zone audit centers on the phrase "reveal-less explanations" [PAGE 1]. Operationally, this is an information-bottleneck constraint. Let M denote the private methodology vector (source weights and internal parameters), R the public rating exposed on the route, and E the drawer explanation text rendered to a public user. The safe design requires E to be conditionally independent of M given R: I(M; E | R) ≤ ε, where ε is measured in bits and targeted near zero. Any UI element that encodes source contributions—bar lengths, color intensity, ordering, or factor weights—violates this constraint because it creates a side channel from M to E. The acceptance criteria on [PAGE 1] explicitly prohibit method leakage and betting-hype copy, and the Risks section rates method leakage as HIGH [PAGE 1].

A second gray zone is confidence-safe language versus fake certainty [PAGE 1]. Rendering a raw numeric confidence such as 94% implies unwarranted precision and can function as an implied betting line. The copy direction on [PAGE 1] forbids hype without proof and guaranteed-betting language. The explanation should therefore use qualitative tiers anchored to the public rating R, paired with last-verified timestamps and source cues, rather than point estimates that pretend to predictive certainty.

The dependency graph is empty in the doc [PAGE 1], but the implicit dependency is the real shipping clone: framework, package manager, branch, dirty state, and existing UI conventions must be verified before any change [PAGE 1, Implementation Plan step 1]. Rollback is isolated: revert the component/route/style change or disable behind a feature flag; no production data rollback is required [PAGE 1, Rollback Plan]. Performance risk is LOW [PAGE 1], but the acceptance criterion that the performance budget is not worsened [PAGE 1] imposes a hard constraint ΔTTI ≤ 0 and no LCP regression.

Additional recursion: the drawer must not expose founder-only methodology [PAGE 1, Why It Matters], yet it must convey "where the risk is" [PAGE 1, Customer Value]. This tension resolves only if risk is communicated through public metadata (last-verified, source cues) rather than private weights. The Implementation Plan's smallest route-safe change [PAGE 1] is therefore not a visual polish task but an information-flow control task: build the drawer as a function E = f(R, public_cues) with no read path into M.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Citations: all claims grounded in [PAGE 1].

Formal model and operators:
- Private methodology: M ∈ ℝ^d, where d is the number of source-weight and internal parameters; units: dimensionless weights; domain: founder/admin only [PAGE 1, Public/Private Boundary].
- Public rating: R ∈ [0,1], dimensionless calibrated confidence score; domain: public drawer [PAGE 1, Product Surface].
- Explanation: E ∈ Σ*, text over alphabet Σ rendered in the drawer; domain: public [PAGE 1].
- Information constraint (reveal-less): I(M; E | R) ≤ ε_bits, with ε ≈ 0 bits. By the data-processing inequality on the Markov chain M → R → E, I(M; E) ≤ I(M; R); the drawer must not invert R to recover M.
- Confidence-safe calibration: if any numeric summary is shown, it must carry uncertainty. Brier score BR = (1/N) Σ_{i=1}^{N} (f_i − o_i)^2 ∈ [0,1], where f_i is forecast confidence and o_i ∈ {0,1} is binary outcome; lower BR indicates better calibration. Log-loss ℓ = −[o log p + (1 − o) log(1 − p)] in nats. Neither score may be presented as a guarantee [PAGE 1, Copy Direction].
- Public/private lattice: ℙ = {R, E, last_verified, source_cues}; 𝒫𝓇𝒾𝓋 = {M, QA_logs, internal_weights}. Access rule: read(𝒫𝓇𝒾𝓋) ⟹ role ∈ {founder, admin}; otherwise read(ℙ) only [PAGE 1].
- Performance budget: LCP and TTI deltas ΔL ≤ 0 ms relative to baseline; drawer bundle delta ΔS ≤ 0 bytes or within existing route budget [PAGE 1, Acceptance Criteria].
- Accessibility units: touch target ≥ 44 × 44 CSS px; contrast ratio ≥ 4.5:1 (dimensionless, WCAG AA) for normal text; focus-visible outline ≥ 2 CSS px [PAGE 1, Acceptance Criteria].
- Viewport breakpoint: mobile stacked layout for width < 768 CSS px; drawer animation disabled when prefers-reduced-motion: reduce [PAGE 1, Implementation Plan step 4].

Verbatim quotes from [PAGE 1]:
- "Public sees reveal-less explanations, confidence-safe language, and last-verified/source cues where appropriate. Founder/admin sees source weights, internal QA, and private methods."
- "No method leakage or betting-hype copy."
- "Method leakage risk: HIGH."
- "Users understand what they are seeing, why it matters, where the risk is, and what to do next."
- "Improves visual quality, 10-second clarity, trust, conversion, engagement, retention, performance, or monetization without exposing founder-only methodology."

Breakdown / singularity regimes: (i) extreme mobile width → 0 px triggers scrollable text-only fallback; (ii) API 5xx or ineffective connection triggers empty/error state with retry; (iii) prefers-reduced-motion: reduce disables drawer entrance/exit animation; (iv) keyboard focus must remain managed; losing focus is a singularity in the interaction model. Assumptions: the real shipping clone is available and dirty-state/root/branch are verified before editing [PAGE 1, Implementation Plan step 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage. The explain-without-recipe drawer descends from explainable AI (XAI) research on post-hoc rationalization versus faithful attribution (Lipton, "The Mythos of Model Interpretability"; Miller, "Explanation in Artificial Intelligence"), the information-bottleneck principle (Tishby et al.) applied to public/private representation splits, and responsible-consumer-protection design encoded in [PAGE 1]: no live sportsbook/casino affiliate links, no guaranteed wins, no irresponsible gambling copy, no minors targeting, no legal claims without approval. It also inherits from prior help/growth/design/trust work referenced in the Duplicate Gate [PAGE 1], extended here to the /intelligence/rating route surface.

Multi-week traps. (1) Week 1 ships a desktop drawer; Week 3 introduces mobile viewport overflow because mobile layout was not tested against the real shipping clone breakpoints [PAGE 1, Acceptance Criteria]. (2) Stakeholders request a "confidence meter" or source-contribution chart to improve trust; this mutates into a method-leakage side channel (I(M; E | R) > 0) and a betting-hype proxy, triggering the HIGH risk flag on [PAGE 1]. (3) Dependency on the real shipping clone causes branch drift and merge conflicts with BUILD-GV2-085/BUILD-112 if repo root, branch, and dirty state are not verified first [PAGE 1, Implementation Plan step 1]. (4) Copy review drifts from "confidence-safe" to hype during stakeholder sign-off, violating the copy direction on [PAGE 1] (no fake certainty, no hype without proof, no guaranteed-betting language). (5) Animation and image assets creep the performance budget above the LOW risk envelope, breaching the acceptance criterion that performance must not worsen [PAGE 1, Acceptance Criteria].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Model the delivery team as recursive agents operating under a P0 clock [PAGE 1, Priority]. Under deadline pressure, crisis habit regression predicts engineers will ship a numeric confidence bar or a ranked factor list because it feels more explanatory than qualitative tiers. That regression is a trap: it converts R into a leakage channel for M and edges toward betting-hype copy, both prohibited on [PAGE 1, Acceptance Criteria].

Counter-trap: pre-commit to qualitative confidence tiers derived only from public R (e.g., stable/elevated/severe), display last-verified and source cues, and gate the drawer behind a feature flag with isolated rollback [PAGE 1, Rollback Plan]. Second-order theory of mind: stakeholders will predict that leaking weights builds trust; the team must predict that prediction and substitute a privacy-preserving proxy—qualitative language plus source cues—so trust is built without exposing M.

Clock effects: P0 priority compresses verification time [PAGE 1], increasing regression risk. The rollback plan (revert component/route/style or disable feature flag; no production data rollback needed) [PAGE 1] bounds the blast radius, allowing the team to forward-deploy the counter-trap rather than regress to leakage under clock pressure. The Test Plan's route probe, Playwright screenshot, mobile viewport screenshot, keyboard/focus check, reduced-motion check, and copy scan [PAGE 1] are the verification nodes that detect regression before it ships.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Define a composite veto V = V_phys ∨ V_bio ∨ V_env. If V = 1, the drawer degrades to a text-only, static, accessible fallback that preserves the public/private boundary [PAGE 1].

Physical layer: device viewport, pointer type, connection effectiveness. If the connection is ineffective (high RTT / low downlink) or the device is low-memory, veto heavy client-side drawer logic; serve server-rendered static explanation. Mobile breakpoint width < 768 CSS px triggers stacked drawer with touch targets ≥ 44 × 44 CSS px [PAGE 1, Implementation Plan step 4].

Biomechanical layer: motor, visual, and vestibular constraints. WCAG AA contrast ratio ≥ 4.5:1 (dimensionless) for normal text; focus-visible ring ≥ 2 CSS px; screen-reader labels via ARIA; prefers-reduced-motion: reduce disables drawer animation; prefers-contrast: more increases contrast. Loss of keyboard focus is a veto condition [PAGE 1, Acceptance Criteria].

Weather/environmental layer: glare, bright outdoor contexts, one-handed distracted use. The design direction on [PAGE 1] calls for high contrast and calm reading states; low-contrast copy or cinematic motion that fails under glare is vetoed in favor of calm, high-contrast static text.

Veto fallback: the text-only explanation still uses reveal-less language and confidence-safe cues [PAGE 1, Public/Private Boundary], never exposing source weights. Assumptions: user-agent media features are accurately reported; breakdown regime occurs when media queries are unsupported or the viewport collapses below readable thresholds.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable veto scenarios with counterfactual predictions:

V1 — Method leakage via visual encoding. Verification: Playwright screenshot of the drawer plus copy scan for weight-revealing UI (bar charts, source-weight labels, contribution ordering, color-coded factor intensity). Prediction: if shipped, the HIGH method-leakage risk on [PAGE 1] triggers audit failure; counterfactual outcome is mandatory rollback to a text-only drawer before public release.

V2 — Mobile/accessibility regression. Verification: mobile viewport screenshot, touch-target measurement (< 44 × 44 CSS px fails), keyboard/focus check, reduced-motion check. Prediction: if any criterion fails, the acceptance criteria "Mobile layout works" and "Accessibility basics pass" on [PAGE 1] are violated; counterfactual outcome is blocked release and isolated component revert [PAGE 1, Rollback Plan].

V3 — Prohibited gambling/hype copy. Verification: copy scan against the copy direction on [PAGE 1] (no fake certainty, no hype without proof, no guaranteed-betting language, no method leakage). Prediction: if prohibited gambling lexicon or guaranteed-win phrasing appears, legal/compliance blocks deployment per the Legal/Compliance Boundary on [PAGE 1]; counterfactual outcome is re-copy and re-scan prior to deploy.

All three scenarios are verifiable in pre-production via typecheck, lint, build, route probe, Playwright, mobile viewport screenshot, keyboard/focus check, reduced-motion check, and copy scan as listed in the Test Plan on [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>