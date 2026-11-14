---
source: "brand-guidelines.md"
folder: "/CorpusRoot/PC-offload/OneDrive/Documents/Galaxy Sports Edge Launch Ready/docs/brand"
pages: 3
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4887
---

<NATIVE_REASONING>
The user wants me to act as the GSE + GSI Frontier Reasoning Foundry and produce a response based on the provided source text (brand guidelines). They have strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided a brand guidelines document. They want me to process this through the "Foundry" persona with those sections. I need to make sure I do NOT mention betting lines/spreads/totals/moneylines/odds. The brand guidelines mention "Live odds in" but I should avoid repeating betting-specific terms? Actually invariant 1 says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." So I cannot say the word "odds" even though the source says "Live odds in". I must avoid that term entirely. I can refer to "market signals" or "calibrated signals" but not "odds".

Also no fake toy equations. I must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite [PAGE N] markers. But the source text provided doesn't have explicit page numbers like [PAGE 1], [PAGE 2], [PAGE 3]. It says PAGES: 3 and is a markdown document. I should infer page breaks or cite sections as pages? The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since there are no explicit page markers in the text, I need to be careful. Maybe I can treat the markdown sections as pages? Or I can say [PAGE 1] for brand essence, [PAGE 2] for voice/principles, [PAGE 3] for banned language/vocabulary/color/etc? That seems reasonable given PAGES: 3. I'll map roughly:

- Page 1: Header through Section 1 (Brand essence) maybe includes tagline, closer, core promise.
- Page 2: Sections 2-4 (Voice, five operating principles, banned language).
- Page 3: Sections 5-12 (Vocabulary, color system, typography, logo, surfaces, social, contact, enforcement).

I'll include verbatim quotes from those pages.

Word count: >= 1,000 words total across sections. THINK_TRACE alone >= 400 words.

Let's plan each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need to analyze the brand guidelines, derive implications, audit gray zones (e.g., "gated until honest", PERFORMANCE_STATS_ENABLED=true, "verified track record" banned but "published track record" only after flag; tension between marketing and compliance; color restraint rule vs desire for visual impact; typography variables defined but not imported; single founder reading every reply vs scalability). Must be >=400 words. No betting lines. Can discuss probability units? Maybe mention information-theoretic calibration but avoid "odds". I can use "probability" and "information" units.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. I need to define formal operators for the brand system. Since it's a brand doc, I can model brand consistency as a constraint satisfaction problem. Define a brand state vector, fidelity metric, etc. Use LaTeX. Cite [PAGE N]. Mention assumptions and breakdown regimes (e.g., when PERFORMANCE_STATS_ENABLED=false, Calibration Report is gated; when magenta overused, brand dilution singularity). No toy equations like Force/Fatigue. Must be formal.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Trace lineage of "show your work" to scientific reproducibility, Linear/Stripe design, etc. Multi-week traps: brand drift over weeks, gated performance report never shipped, color restraint erosion, founder bottleneck.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Model how the founder/team regresses under crisis (e.g., temptation to use banned language, loosen tests, ship without reasoning). Counter-trap: over-correction to robotic tone, suppressing urgency. Clock: build-time enforcement, release cadence.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. This is odd for a brand doc, but I can interpret "veto proof" as cross-layer constraints that veto brand violations. Physical: screen rendering, color contrast ratios (WCAG), typography loading. Biomechanical: reading cadence, em-dash as breath, sentence length, eye movement. Weather: metaphorical? Maybe "market weather" but avoid betting lines. Could interpret as external conditions affecting brand deployment (network latency, dark mode vs light mode, ambient lighting). Veto proof means if any layer fails, the copy/design is vetoed.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some internal acronym. I'll treat as verifiable counterfactual veto scenarios: e.g., if contributor uses "guaranteed", scanner rejects; if magenta used decoratively, design audit fails; if Calibration Report ships before PERFORMANCE_STATS_ENABLED=true, trust-claims test fails. Provide predictions for each.

Need to ensure total >= 1000 words. I'll aim for ~1500-2000 words.

Important: Do not mention spreads, totals, moneylines, odds. The source text says "Live odds in" and "market depth, line movement". I must not repeat "odds" or "line movement" if it implies betting lines. Actually "line movement" might be okay? Invariant says never mention spreads, totals, moneylines, or odds. "Line movement" could be interpreted as betting line movement. Safer to avoid "line movement" too. I'll paraphrase as "market signal drift" or "price-surface evolution" but avoid "odds". I can say "calibrated signals out" but not "live odds in". I'll avoid the phrase entirely.

Also, no fake ratios. Formal LaTeX equations only. I'll define equations like:

Let $\mathcal{B} = \{b_i\}_{i=1}^{N}$ be the set of brand tokens...
Fidelity $\Phi = \frac{1}{|\mathcal{C}|}\sum_{c\in\mathcal{C}} \mathbb{I}[\text{scanner}(c) = \text{PASS}]$
Units: dimensionless [0,1].
Breakdown: $\Phi \to 0$ when `PERFORMANCE_STATS_ENABLED` false and copy implies verification.

Another equation for color luminance contrast:
$L_{rel} = 0.2126 R + 0.7152 G + 0.0722 B$ (sRGB relative luminance)
Contrast ratio $C = \frac{L_1 + 0.05}{L_2 + 0.05}$ dimensionless.
Breakdown: $C < 4.5:1$ for normal text violates WCAG AA, triggering physical-layer veto.

Another for sentence cadence:
Let $S = \{s_j\}$ be sentences in paragraph $p$. Cadence variance $\sigma_p^2 = \frac{1}{|S|}\sum (|s_j| - \bar{|s|})^2$ measured in tokens. Breakdown: $\sigma_p^2 < \epsilon$ yields monotonic cadence (banned by brand voice).

These are formal, not toy ratios.

Citations: [PAGE 1], [PAGE 2], [PAGE 3]. I need to map content.

Let's define page mapping explicitly at start of SOURCE_OPERATORS_AND_EQUATIONS or in THINK_TRACE. Since the user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I'll state: [PAGE 1] = header through Section 1; [PAGE 2] = Sections 2–4; [PAGE 3] = Sections 5–12.

Verbatim quotes:
- [PAGE 1]: "If I can't show my work, I don't publish."
- [PAGE 1]: "Find the signal before the market moves."
- [PAGE 2]: "Calibrated. Precise. Always acquiring."
- [PAGE 2]: "Intelligence isn't loud. It's on frequency."
- [PAGE 2]: "If I have to wait, I wait. That's the whole point."
- [PAGE 2]: "GUARANTEED WINS! Subscribe NOW!"
- [PAGE 3]: "verified track record | Implies third-party verification (none exists yet) | 'published track record' (only after PERFORMANCE_STATS_ENABLED=true)"
- [PAGE 3]: "Magenta is the brand's strongest signal and reads as cheap when used decoratively."
- [PAGE 3]: "If you ship copy that trips a test, fix the copy — don't loosen the test."

Need to be careful: The source text is all in one block. I will treat sections as pages. That's acceptable.

Now word count. Let's draft.

THINK_TRACE (>=400 words): I'll write a thorough analysis.

SOURCE_OPERATORS_AND_EQUATIONS: Include LaTeX, units, page citations, breakdown regimes. Maybe ~300-400 words.

RETROCAUSAL_GENEALOGY: ~200 words.

RECURSIVE_THEORY_OF_MIND: ~200 words.

CROSS_LAYER_VETO_ADJUDICATION: ~200 words.

RLVR_COUNTERFACTUAL_VETOES: ~200 words.

Total should exceed 1000 easily.

Let's write carefully, ensuring no banned words. Avoid "odds". Avoid "spreads", "totals", "moneylines". Avoid "lock", "sure thing", etc. in my own copy? The invariant says never mention betting lines. Banned language section is about customer-facing copy, but I should still avoid using those terms as examples unless quoting? Quoting is fine if it's verbatim from source, but I should minimize. I can quote "GUARANTEED WINS! Subscribe NOW!" from [PAGE 2] because it's a verbatim quote from the source. That's okay.

I will not generate any betting advice.

Let's compose.

THINK_TRACE:

Start with mapping pages. Then multi-hop derivation:
1. Core promise "If I can't show my work, I don't publish." [PAGE 1] creates an epistemic gate.
2. This gate binds to Voice: first-person singular, calibrated, precise. [PAGE 2]
3. Voice binds to five pillars, especially Discipline and Precision. [PAGE 2]
4. Discipline binds to build-time enforcement: tests must pass, don't loosen tests. [PAGE 3]
5. Gray zones: PERFORMANCE_STATS_ENABLED flag, gated Calibration Report, "published track record" only after flag true. Tension between marketing desire for social proof and trust-claim scanner. [PAGE 3]
6. Color restraint: magenta strongest signal, cheap if decorative. Restraint rule vs campaign pressure to use magenta wash. [PAGE 3]
7. Typography: variables defined but not imported (Big Shoulders Display, etc.) creating latent design debt. [PAGE 3]
8. Founder bottleneck: one front door, founder reads every reply. Scalability singularity. [PAGE 3]
9. Banned language list creates a constrained vocabulary space; substitutions must preserve meaning without certainty claims. [PAGE 2]

I'll write this in narrative form, >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS:

Define formalism.

Let $\mathcal{D}$ be the document set, $|\mathcal{D}|=3$ pages.
Page mapping:
- $[P_1]$: header, tagline, closer, monogram, Section 1 (Brand essence).
- $[P_2]$: Sections 2–4 (Voice, five operating principles, banned language).
- $[P_3]$: Sections 5–12 (Vocabulary, color, typography, logo, surfaces, social, contact, enforcement).

Define brand compliance operator $\hat{\mathcal{C}}: \text{Copy} \to \{0,1\}$.
$\hat{\mathcal{C}}(x) = 1 \iff \forall t \in \mathcal{T}_{\text{banned}}, t \notin x \land \text{scanner}(x) = \text{PASS}$.
Units: dimensionless binary.
Breakdown: $\hat{\mathcal{C}}=0$ if any banned token appears (e.g., "guaranteed", "lock", "sure thing") per [PAGE 2].

Define calibration-report gate operator $\hat{\mathcal{G}}_{\text{CR}}$:
$\hat{\mathcal{G}}_{\text{CR}} = \mathbb{I}[\text{PERFORMANCE\_STATS\_ENABLED} = \text{true}]$.
Breakdown: If flag false, any copy claiming "verified track record" violates [PAGE 3] banned-language substitution table and triggers `trust-claims.test.ts`.

Define luminance contrast operator for color layer:
For sRGB channel $i \in \{R,G,B\}$, linearize $c_i = \begin{cases} c_{i,\text{srgb}}/12.92 & c_{i,\text{srgb}} \le 0.03928 \\ ((c_{i,\text{srgb}}+0.055)/1.055)^{2.4} & \text{otherwise} \end{cases}$.
Relative luminance $L = 0.2126 R + 0.7152 G + 0.0722 B$, units $\text{cd/m}^2$ normalized $[0,1]$.
Contrast ratio $\Gamma = \frac{L_{\text{light}} + 0.05}{L_{\text{dark}} + 0.05}$, dimensionless.
Physical-layer veto: $\Gamma < 4.5$ for normal text (WCAG AA) or $\Gamma < 3.0$ for large text invalidates Obsidian/Ion pairs on [PAGE 3].

Define sentence cadence variance operator:
For paragraph $p$ with sentence lengths $\ell_j$ in tokens, $\bar{\ell} = \frac{1}{n}\sum_j \ell_j$, $\sigma_p^2 = \frac{1}{n}\sum_j (\ell_j - \bar{\ell})^2$.
Voice-layer breakdown: $\sigma_p^2 < \epsilon_{\text{cadence}}$ produces monotonically weighted paragraphs, violating [PAGE 2] sentence cadence rule.

Assumptions: Brand state is static between builds; scanner word boundaries are exact; page mapping is stable.

Singularity/breakdown regimes: When $\text{PERFORMANCE\_STATS\_ENABLED}\to \text{false}$ while marketing copy implies verification, trust-claim registry diverges. When magenta usage fraction $f_{\text{mag}} > f_{\text{crit}}$ (restraint rule), brand equity decays nonlinearly.

That should cover formal LaTeX, units, page citations, breakdown.

RETROCAUSAL_GENEALOGY:

Lineage: "show your work" -> reproducible science, notebook culture, open-source changelogs. Linear/Stripe voice -> developer-tool aesthetic. "Intelligence isn't loud" -> signal processing, low-probability-of-intercept comms. Five pillars -> Toyota Production System discipline, DevOps gating. Calibration Report -> forecasting calibration literature (Brier score, reliability diagrams) but gated.

Multi-week traps: Week 1 launch enthusiasm leads to magenta overuse; Week 3 contributor submits "lock of the day" copy; Week 6 founder bottleneck causes delayed replies; Week 8 pressure to publish "verified track record" before flag enabled; Week 12 typography variables remain unimported, design debt accrues. These are retro-causal because early laxity determines later failure modes.

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: Under launch pressure, founder shifts from "I publish a calibrated signal" to "we always win" (banned) or ships without reasoning to meet deadline. The first-person singular slips to plural "our team" to diffuse responsibility.

Counter-trap: Over-correction into robotic, emotionless tone that abandons "breath" em-dashes and quiet confidence, becoming indistinguishable from a black-box AI product (which the brand isn't).

Clock: Build-time tests act as the clock. If `public-copy-scanner.test.ts` fails, shipping halts. The clock resets with each PR; the regressed habit must be caught before the gate, not after.

CROSS_LAYER_VETO_ADJUDICATION:

Physical layer: Screen rendering, dark-mode contrast, color tokens (#050608 obsidian, #F6F7FA ion white). Contrast ratio equation above. Veto if $\Gamma$ out of spec.
Biomechanical layer: Reading cadence, em-dash as breath, sentence length variation. Veto if paragraphs uniform length; if punctuation becomes question-led (brand is period-led).
Weather layer: Ambient lighting / viewing conditions (sun glare, night mode) affecting ion-white legibility; network latency delaying Signal Feed reasoning attachment; cold-start font loading (Google Fonts @import) causing layout shift. Veto if telemetry layer shows unreadable telemetry or missing reasoning attachment.
Veto proof: Any layer failure $\to$ $\hat{\mathcal{C}}=0$ and build blocks.

RLVR_COUNTERFACTUAL_VETOES:

Scenario 1: Contributor writes "Our AI has cracked the code" in Signal Feed intro. Verifiable veto: `metadata-banned-phrases.test.ts` or `public-copy-scanner.test.ts` catches banned phrase. Prediction: PR rejected; contributor must replace with "The model favors" or omit; rescan passes.
Scenario 2: Designer applies Ion Magenta #FF2DD6 as hero background wash. Verifiable veto: design-tokens audit / visual regression test flags $f_{\text{mag}} > f_{\text{crit}}$. Prediction: build fails; magenta restricted to live dot/Eclipse Gate vignette; cyan default restored.
Scenario 3: Marketing drafts Calibration Report landing page claiming "verified track record" while `PERFORMANCE_STATS_ENABLED=false`. Verifiable veto: `trust-claims.test.ts` fails claim registry integrity. Prediction: page blocked until flag true and copy changed to "published track record"; otherwise permanent gating.

Need to ensure total words > 1000. Let's estimate: THINK_TRACE ~500, SOURCE ~400, others ~200 each = ~1600. Good.

Now, write it all in the exact XML sections. No markdown outside? The user wants exact XML sections. I'll output only those sections, maybe a brief intro? Better to just output the sections to be safe. But I should include everything inside. No extra text.

Check for "odds": I must not use it. The source says "Live odds in". I will not repeat it. I will not use "line movement" either. I'll use "market signal drift" or "surface evolution".

Check for "lock": I might mention "lock of the day" as banned example in quote, that's fine as verbatim from source. But I should not use it as my own term.

Check for fake equations: My equations are formal LaTeX with definitions. Good.

Citations: [PAGE 1], [PAGE 2], [PAGE 3]. I need to make sure I reference them correctly.

Verbatim quotes: include several.

Let's draft carefully.

Word count check: I'll write generously.

---

THINK_TRACE draft:

The source document is a single-source-of-truth brand specification for Galaxy Sports Edge, distributed across three logical pages. Page mapping: [PAGE 1] contains the header, tagline ("Find the signal before the market moves"), closer ("We detect. You decide"), monogram (GSE), and Section 1 (Brand essence). [PAGE 2] contains Section 2 (Voice), Section 3 (the five operating principles), and Section 4 (Banned language). [PAGE 3] contains Sections 5–12 (Vocabulary, Color system, Typography, Logo & mark, Surfaces, Social channels, Contact, Build-time enforcement).

The core hop begins at [PAGE 1] with the verbatim epistemic promise: "If I can't show my work, I don't publish." This is not marketing flourish; it is a publication gate. Because the platform publishes calibrated signals with reasoning attached, every output must expose its factor breakdown. That gate forces first-person singular ownership ("I built this." "I publish this.") on [PAGE 2], which in turn binds to the five operating principles on [PAGE 2]: Intelligence, Precision, Advantage, Discipline, Results. Discipline is the load-bearing pillar for build-time enforcement: "If you ship copy that trips a test, fix the copy — don't loosen the test." [PAGE 3].

The gray zone lives in the gap between marketing ambition and verification state. On [PAGE 3], the banned-language table explicitly bars "verified track record" because no third-party verification exists yet, permitting only "published track record" after `PERFORMANCE_STATS_ENABLED=true`. This creates a conditional truth regime: claims about the Calibration Report are probabilistically gated on a build flag. A second gray zone is color restraint. [PAGE 3] states that Ion Magenta is the strongest signal and reads as cheap when used decoratively, reserving it for live-state indicators and Eclipse Gate callouts. Campaign pressure to use magenta as a wash directly contradicts the restraint rule, producing a brand-dilution singularity. A third gray zone is typography debt: Big Shoulders Display, Syne, and Instrument Serif are defined in CSS variables but not imported, so authoring against `--f-arch` or `--f-editorial` is a latent failure waiting for a variable update. [PAGE 3].

Finally, the founder bottleneck on [PAGE 3]—one front door, founder reads every reply—creates a scalability singularity. If reply volume grows linearly, founder attention becomes the scarce resource, threatening the voice's quiet confidence. Each of these gray zones must be audited before the brand can scale without violating its own trust-claim scanner.

Word count: let's count roughly. It's probably around 350 words. Need >=400. I'll expand a bit more on the multi-hop derivation and gray-zone audit.

Expansion: Add more on how the banned-language substitution table constrains semantic space, how "guaranteed" maps to uncertainty, how the five pillars ladder to surfaces, how the Calibration Report gating interacts with Results pillar, etc.

Let's rewrite THINK_TRACE to be ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: Need formal LaTeX. Use `\[ \]` or `\( \)`. Ensure units and assumptions.

RETROCAUSAL_GENEALOGY: trace lineage.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

I will now produce the final output. Ensure no mention of odds/spreads/totals/moneylines. Ensure total word count > 1000.

One concern: The user might expect me to actually analyze sports content? No, they provided brand guidelines and want me to run it through the Foundry persona. So this is a meta-reasoning exercise about the brand doc itself.

Let's write.

---

Detailed drafting:

<THINK_TRACE>
...
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I will not add any preamble.

Now, ensure verbatim quotes are exact from source:

- "If I can't show my work, I don't publish." [PAGE 1]
- "Find the signal before the market moves." [PAGE 1]
- "We detect. You decide." [PAGE 1]
- "Calibrated. Precise. Always acquiring." [PAGE 2]
- "Intelligence isn't loud. It's on frequency." [PAGE 2]
- "If I have to wait, I wait. That's the whole point." [PAGE 2]
- "GUARANTEED WINS! Subscribe NOW!" [PAGE 2]
- "verified track record | Implies third-party verification (none exists yet) | 'published track record' (only after PERFORMANCE_STATS_ENABLED=true)" [PAGE 3]
- "Magenta is the brand's strongest signal and reads as cheap when used decoratively." [PAGE 3]
- "If you ship copy that trips a test, fix the copy — don't loosen the test." [PAGE 3]

All good.

Let's write final.
</NATIVE_REASONING>

<THINK_TRACE>
The source document is the Galaxy Sports Edge brand guidelines, a single source of truth distributed across three logical pages. Page mapping: [PAGE 1] contains the header, owner, domain, tagline ("Find the signal before the market moves"), closer ("We detect. You decide"), monogram (GSE), and Section 1 (Brand essence). [PAGE 2] contains Section 2 (Voice), Section 3 (the five operating principles), and Section 4 (Banned language). [PAGE 3] contains Sections 5–12 (Vocabulary, Color system, Typography, Logo & mark, Surfaces, Social channels, Contact, Build-time enforcement).

The multi-hop derivation begins at [PAGE 1] with the verbatim epistemic promise: "If I can't show my work, I don't publish." This is a publication gate, not a slogan. Because the platform emits calibrated signals with reasoning attached, every publishable artifact must expose its factor breakdown. That gate forces first-person singular ownership on [PAGE 2] ("I built this." "I publish this."), which binds to the five operating principles on [PAGE 2]: Intelligence, Precision, Advantage, Discipline, Results. Discipline is the load-bearing pillar for build-time enforcement: "If you ship copy that trips a test, fix the copy — don't loosen the test." [PAGE 3].

The gray zone resides in the gap between marketing ambition and verification state. On [PAGE 3], the banned-language table bars "verified track record" because no third-party verification exists yet, permitting only "published track record" after `PERFORMANCE_STATS_ENABLED=true`. This creates a conditional truth regime: claims about the Calibration Report are gated on a build flag. A second gray zone is color restraint. [PAGE 3] states that Ion Magenta is the brand's strongest signal and reads as cheap when used decoratively, reserving it for live-state indicators and Eclipse Gate callouts. Campaign pressure to deploy magenta as a background wash directly contradicts the restraint rule, producing a brand-dilution singularity. A third gray zone is typography debt: Big Shoulders Display, Syne, and Instrument Serif are defined in CSS variables but not imported, so authoring against `--f-arch` or `--f-editorial` is a latent failure awaiting a variable update. [PAGE 3].

A fourth gray zone is the founder bottleneck on [PAGE 3]: one front door (`hq@galaxysportsedge.com`), with the founder reading every reply. If inbound volume scales linearly, founder attention becomes the scarce resource, threatening the voice's quiet confidence and period-led cadence. The banned-language substitution table on [PAGE 2] further constrains the semantic space: "guaranteed" must become "the data suggests," "lock" becomes "high-confidence signal," and "sure thing" becomes "calibrated signal." Each substitution preserves denotation while stripping certainty. The five pillars ladder to surfaces on [PAGE 3]: Intelligence to ingestion/coverage, Precision to scoring/calibration, Advantage to edge/timing, Discipline to gates/readiness/refusal to ship, and Results to the gated Calibration Report track record. If any draft fails to ladder to one pillar, the brand requires a rewrite or kill decision.

Audit conclusion: the system is coherent only if the gating logic (`PERFORMANCE_STATS_ENABLED`), the color restraint threshold, the typography import state, and the founder bottleneck are all treated as hard constraints rather than aspirational guidelines. Violating any one collapses the trust-claim scanner invariant.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the document corpus be $\mathcal{D} = \{P_1, P_2, P_3\}$, where $[P_1]$ covers header through Section 1, $[P_2]$ covers Sections 2–4, and $[P_3]$ covers Sections 5–12.

**Brand compliance operator.** Define $\hat{\mathcal{C}}: \text{Copy} \to \{0,1\}$ such that
\[
\hat{\mathcal{C}}(x) = 1 \iff \forall t \in \mathcal{T}_{\text{banned}},\ t \notin x \;\land\; \text{scanner}(x) = \text{PASS},
\]
where $\mathcal{T}_{\text{banned}} = \{\text{guaranteed, lock, sure thing, risk-free, easy money, can't lose, verified track record, thousands of bettors, trusted by serious bettors, guaranteed profit, winning, free money}\}$ per the banned-language table on [PAGE 2]. Units: dimensionless binary. Breakdown regime: $\hat{\mathcal{C}} = 0$ if any banned token appears at word boundary, triggering `public-copy-scanner.test.ts` or `metadata-banned-phrases.test.ts`.

**Calibration-report gate operator.** Let $F \in \{\text{true},\text{false}\}$ be the value of `PERFORMANCE_STATS_ENABLED`. Define
\[
\hat{\mathcal{G}}_{\text{CR}} = \mathbb{I}[F = \text{true}].
\]
On [PAGE 3], "verified track record" is banned unless $F = \text{true}$, in which case "published track record" is permitted. Units: dimensionless indicator. Breakdown regime: if $F = \text{false}$ and copy implies third-party verification, `trust-claims.test.ts` fails claim-registry integrity.

**Physical color-contrast operator.** For sRGB channel $c_i \in \{R,G,B\}$, linearize
\[
c_i = \begin{cases}
c_{i,\text{srgb}}/12.92 & c_{i,\text{srgb}} \le 0.03928,\\
\bigl((c_{i,\text{srgb}} + 0.055)/1.055\bigr)^{2.4} & \text{otherwise}.
\end{cases}
\]
Relative luminance $L = 0.2126 R + 0.7152 G + 0.0722 B$, normalized to $[0,1]$. Contrast ratio
\[
\Gamma = \frac{L_{\text{light}} + 0.05}{L_{\text{dark}} + 0.05},
\]
dimensionless. Applying [PAGE 3] tokens (Obsidian Black #050608, Ion White #F6F7FA), WCAG AA requires $\Gamma \ge 4.5$ for normal text and $\Gamma \ge 3.0$ for large text. Breakdown regime: $\Gamma < 4.5$ invalidates the Obsidian/Ion text-on-background pair and triggers a physical-layer veto.

**Voice cadence operator.** For paragraph $p$ with sentence lengths $\ell_j$ in tokens, $\bar{\ell} = n^{-1}\sum_j \ell_j$ and
\[
\sigma_p^2 = \frac{1}{n}\sum_{j=1}^{n} (\ell_j - \bar{\ell})^2.
\]
Units: tokens$^2$. Breakdown regime: $\sigma_p^2 < \epsilon_{\text{cadence}}$ yields monotonically weighted paragraphs, violating the [PAGE 2] sentence-cadence rule (mix short and long sentences; no five-sentence paragraphs of identical length and weight).

**Magenta restraint operator.** Let $f_{\text{mag}}$ be the fractional surface area of Ion Magenta (#FF2DD6) in a composition. The [PAGE 3] restraint rule imposes a critical threshold $f_{\text{crit}}$ such that $f_{\text{mag}} > f_{\text{crit}}$ causes the brand to read as cheap. Units: dimensionless fraction. Breakdown regime: decorative magenta wash triggers design-audit failure; magenta is reserved for live-state indicators, Eclipse Gate callouts, and one vignette anchor per hero composition.

Assumptions: brand state is static between builds; scanner word boundaries are exact; page mapping is stable; WCAG contrast algorithms apply to the Obsidian/Ion pair. Singularity: when $F \to \text{false}$ while marketing copy implies verification, the trust-claim registry diverges; when $f_{\text{mag}} > f_{\text{crit}}$, brand equity decays nonlinearly.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The brand's intellectual lineage traces to reproducible science and open-source engineering culture. The command "If I can't show my work, I don't publish" [PAGE 1] descends from laboratory notebook norms, computational reproducibility standards, and public-changelog discipline. The voice on [PAGE 2]—"Calibrated. Precise. Always acquiring." and "Intelligence isn't loud. It's on frequency."—echoes developer-tool aesthetics (Linear, Stripe) and signal-processing low-intercept communication rather than broadcast sports media. The five operating principles on [PAGE 2] map onto lean manufacturing and DevOps gating: Intelligence to source coverage, Precision to calibration scoring, Advantage to timing, Discipline to readiness gates, and Results to a gated Calibration Report.

Multi-week traps are encoded in the gap between aspiration and enforcement. Week 1 launch enthusiasm typically pressures the team to deploy Ion Magenta decoratively, violating the [PAGE 3] restraint rule before visual regression tests catch it. Week 3 contributors often submit tout-service slang ("lock of the day," "guaranteed wins") [PAGE 2], which the scanner must reject. Week 6 the founder bottleneck on [PAGE 3] (one inbox, founder reads every reply) begins to degrade response latency, risking voice drift from first-person singular to corporate plural. Week 8 commercial pressure mounts to publish a "verified track record" [PAGE 3] before `PERFORMANCE_STATS_ENABLED=true`, directly tripping `trust-claims.test.ts`. Week 12 the unimported typography variables (Big Shoulders Display, Syne, Instrument Serif) [PAGE 3] accumulate design debt if authors reference `--f-arch` or `--f-editorial` prematurely. These traps are retro-causal: early laxity in any layer determines later brand-collapse modes that appear sudden but were latent from the outset.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Under crisis—launch deadline, investor inquiry, or competitive mimicry—the founder/team regresses to banned habits. The first-person singular ("I publish a calibrated signal — not a tout") slips to plural diffusion ("our team," "we always win") [PAGE 2], which the scanner flags. The calibrated tone collapses into exclamation-led certainty ("GUARANTEED WINS! Subscribe NOW!") [PAGE 2], violating period-led, question-free cadence. This regression is driven by emotional urgency overriding the Discipline pillar: process over emotion [PAGE 2].

The counter-trap is over-correction into robotic sterility. In avoiding all tout language, the brand may strip em-dashes as breath, flatten sentence cadence, and abandon quiet confidence, becoming indistinguishable from the black-box "AI picks" product it explicitly rejects on [PAGE 1]. The counter-trap is detected when copy no longer reads like Linear or Stripe but like a disclaimer wall.

The clock is the build-time enforcement layer on [PAGE 3]: `homepage-content.test.ts`, `public-copy-scanner.test.ts`, `metadata-banned-phrases.test.ts`, `trust-claims.test.ts`, `no-fake-percentages.test.ts`, and `content-templates-scan.test.ts`. Each PR is a clock cycle; if any test trips, shipping halts. The regressed habit must be caught before the gate, not after. The clock does not forgive intent; it only passes copy that satisfies the scanner. Thus recursive theory of mind requires modeling both the regression impulse (certainty under pressure) and the counter-trap (sterility under fear), with the test suite as the arbiter that resolves the oscillation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. Surface rendering must satisfy the contrast operator $\Gamma$ derived on [PAGE 3]. Obsidian Black (#050608) background with Ion White (#F6F7FA) text must maintain $\Gamma \ge 4.5$ for body copy under sRGB linearization. If ambient lighting (sun glare, night mode, low-quality panels) reduces effective contrast below threshold, the physical layer vetoes the composition. Orbital Cyan (#00E5FF) as default data accent and Soft Ultraviolet (#7A5CFF) as depth wash must not introduce $\Gamma < 3.0$ for large UI text.

Biomechanical layer. Reading cadence is governed by the [PAGE 2] voice rules: em-dashes as breath, no question-led openings, period-led rhythm, and mixed sentence length. The operator $\sigma_p^2$ from [SOURCE_OPERATORS_AND_EQUATIONS] quantifies paragraph variance. If a paragraph emits five equal-weight sentences or uniform length, the biomechanical layer vetoes for monotonic fatigue. Eye-tracking load from magenta overuse ($f_{\text{mag}} > f_{\text{crit}}$) also triggers veto because the strongest signal reads as cheap and disrupts visual hierarchy [PAGE 3].

Weather layer. External deployment conditions include network latency delaying Signal Feed reasoning attachment, cold-start Google Fonts loading (Exo 2, Inter, JetBrains Mono) causing layout shift, and dark-mode versus light-mode telemetry visibility. If telemetry layer (code, telemetry, eyebrows in JetBrains Mono) fails to render before signal content, the cross-layer veto blocks publication because "reasoning attached" is a physical precondition of the brand promise [PAGE 1].

Veto proof: $\hat{\mathcal{C}} = 0$ if any layer fails. Physical contrast failure, biomechanical cadence collapse, or weather-induced missing reasoning all map to scanner rejection. The build does not ship until all layers pass.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: A contributor drafts a Signal Feed intro containing the verbatim banned phrase "Our AI has cracked the code." Verifiable veto: `public-copy-scanner.test.ts` and `metadata-banned-phrases.test.ts` detect the certainty claim on [PAGE 2]. Prediction: the PR is rejected; the contributor must replace the phrase with "the model favors" or omit the claim; upon resubmission, scanner returns PASS and $\hat{\mathcal{C}} = 1$.

Scenario 2: A designer applies Ion Magenta (#FF2DD6) as a full hero-background wash rather than a single vignette anchor. Verifiable veto: visual-regression / design-token audit measures $f_{\text{mag}} > f_{\text{crit}}$ per the restraint rule on [PAGE 3]. Prediction: the build fails; magenta is rolled back to live-state indicators, Eclipse Gate callouts, and one anchor; Orbital Cyan is restored as default data accent; $f_{\text{mag}}$ falls below threshold and $\hat{\mathcal{C}} = 1$.

Scenario 3: Marketing drafts a Calibration Report landing page claiming "verified track record" while `PERFORMANCE_STATS_ENABLED=false`. Verifiable veto: `trust-claims.test.ts` fails claim-registry integrity because [PAGE 3] permits only "published track record" after the flag is true. Prediction: the page is blocked until the flag is enabled and the copy is substituted; if the flag remains false, the Calibration Report surface remains gated indefinitely and no accuracy percentage may be hardcoded per `no-fake-percentages.test.ts`.
</RLVR_COUNTERFACTUAL_VETOES>