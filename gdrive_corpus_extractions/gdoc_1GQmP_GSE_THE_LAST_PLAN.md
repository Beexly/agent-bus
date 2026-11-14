---
source: "GSE — THE LAST PLAN"
folder: "/CorpusRoot"
pages: 67
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4720
---

<NATIVE_REASONING>
The user wants me to review a complex web build project for "Charcuterie Chick" and produce a deep analysis with specific XML sections. Let me break down what's needed:

1. **STRICT INVARIANTS:**
   - ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
   - ZERO TOY EQUATIONS: No fake ratios. Formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
   - >= 1,000-WORD DEPTH across exact XML sections:
     - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
     - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
     - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
     - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
     - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
     - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user pasted a huge context about Charcuterie Chick website build. They want me to "see what you can improve with everything you just did... see what you missed or forgot..." and then there's a massive review text. Actually looking carefully, the user message contains:

1. First part: "this is from my other coding agent / repo - please do as much as you can as intelligently as you can and as autonomously as you can" followed by THE PLAN text.
2. Then assistant output (the build-ready execution).
3. Then user says "see what you can improve with everything you just did... see what you missed or forgot.... Done — the plan's builder pass..." and then a huge review from another agent.

Wait, actually the conversation structure is:
- User: huge PLAN text
- Assistant: build-ready execution response
- User: "see what you can improve..." + another agent's status + huge review text from yet another agent.

Now I need to respond as the GSE + GSI Frontier Reasoning Foundry with the strict invariants and XML sections.

This is NOT about betting. It's about a website build for a charcuterie business. I must not mention betting lines. I must provide formal analysis.

Let me map the user's input to what I need to do:

The user wants me to review everything that was done (the PLAN, the builder pass, the review findings) and produce a deep reasoning output in the required XML format.

Key facts from context:
- Project: Charcuterie Chick website, 3 concepts/samples, 15 HTML pages
- Branch issues: live deploys from bcdafbb, linked branch claude/nice-franklin-kpjbpf is stale/old copy
- P0 issues: meta descriptions not updated (only OG), proof links point to own site not listings, sample 3 says "Four tables" instead of "Five", S8 captions/alt text mostly missing, hidden form/tables/footers, missing H1s, leftover kill-list copy
- P1: JSON-LD missing except FAQ, canonical/sitemap/robots/OG hygiene, CateringService vs FoodEstablishment
- P2: conversion, measurement, form fields, analytics, etc.
- FACTS.md is single source of truth
- No betting content anywhere - this is a catering website

I need to write >= 1000 words across the sections, with THINK_TRACE >= 400 words.

Let me think about how to apply the "GSE + GSI Frontier Reasoning Foundry" framework to this non-betting, non-sports context. The framework seems designed for betting analysis but the user explicitly says ZERO BETTING LINES. So I should treat this as a general systems/engineering reasoning task, applying the same rigor to software deployment, SEO, schema, content strategy.

I should not invent fake ratios. I can use real math from the text: (2000+229)*1.18 = 2630.22. That's verified arithmetic, not a toy equation. I should present it formally.

Units: USD, dollars, minutes, guests, reviews (count), miles, pixels (480x640, 640x480, 662x823, 1200x630), character counts (155 meta cap, 60 title cap).

Page citations: The user provided source text with references to PLAN sections, FACTS.md, ASSETS.md, QUOTE.md, SEO.md, SAMPLES.md, GitHub URLs. I should cite these as [PAGE N] or section references? The instruction says "cite exact [PAGE N] markers and verbatim quotes." But the source text isn't paginated in the traditional sense. However, the user's text references things like PLAN 4.1, PLAN 6.2, PLAN S1, etc. I should use the markers provided in the text. Since there are no explicit page numbers, I can use section markers like [PLAN 4.1], [PLAN S1], [PLAN 6.2], [FACTS.md], [ASSETS.md], [QUOTE.md], [SEO.md], [SAMPLES.md], or treat the GitHub blob references as pages. Actually, the instruction says "[PAGE N]" but since I don't have page numbers, I should probably use the closest equivalent: section identifiers from the plan document. Let me use [PLAN §4.1], [PLAN §S1], etc., or just cite the document sections clearly. Wait, the user's text uses "PLAN 4.1", "PLAN S1", etc. I can cite those as [PLAN 4.1], [PLAN S1], [PLAN 6.2], etc.

Verbatim quotes: I should quote exact strings from the text where relevant.

Let me structure the response:

**THINK_TRACE (>=400 words):** Deep multi-hop derivation & gray-zone audit.
- Trace the divergence between live Vercel deploy (bcdafbb) and the linked GitHub branch (claude/nice-franklin-kpjbpf).
- Analyze P0-P2 issues dependency graph.
- Gray zones: street address confirmation, Hablo español, units on 8 prices, tax base, Trish, dietary promises, one event per day, delivery/cleanup, build_*.py overwrite risk, quarantined Grok files, IMG_7724 logo ambiguity.
- Multi-hop: If meta descriptions are wrong, GEO answer engines ingest stale "gathering" language; if S8 alt text is mood copy, image search lever fails; if JSON-LD missing, rich results absent; if form hidden, quote flow broken; if build scripts overwrite, all fixes revert.
- Formalize the inconsistency: live title matches PLAN but meta doesn't; visible FAQ wording differs from PLAN S6 in 3 variants; sample 3 body says "Four tables" vs FACTS says five; sample 1 H2 paraphrased vs PLAN exact.

**SOURCE_OPERATORS_AND_EQUATIONS:** Formal LaTeX, units, page citations, breakdown.
- Arithmetic: $E_{HG,75} = (P_{HG,75} + S) \times (1 + \tau) = (2000 + 229) \times 1.18 = 2630.22$ USD.
- Price range: $p \in \{24, 26, 30, 38\}$ USD/person, $n \ge 50$ guests.
- Holy Grail: $P_{HG,75} = 2000$ USD for $n=75$, $P_{HG,150} = 3500$ USD for $n=150$.
- Setup fee $S = 229$ USD, tax rate $\tau = 0.18$, extra time $e = 3$ USD/person/0.5 hr.
- Character constraints: $|\text{meta}| \le 155$ chars, $|\text{title}| \approx 60$ chars.
- Image dimensions: $480 \times 640$ px (grazing/board/table/sips), $640 \times 480$ px (cart), $662 \times 823$ px (tricia), OG $1200 \times 630$ px.
- Citation markers: [PLAN 4.1], [PLAN S1], [PLAN S8], [PLAN 5.2], [FACTS.md], [ASSETS.md], [QUOTE.md], [SEO.md], [SAMPLES.md], [PLAN 6.2].
- Breakdown regimes: build script overwrite singularity, hidden form DOM singularity, no-JS extraction failure regime, 480px upscale breakdown regime.

**RETROCAUSAL_GENEALOGY:** Historical/scientific lineage & multi-week traps.
- Lineage: STATE.md, FACTS.md, QUOTE.md, GAPS.md, PLAN 2026-09-17, builder pass bcdafbb, review pass, current request.
- Multi-week traps: legacy build_*..py scripts, Shopify stock files ($0.00 prices), quarantined Grok/Imagine hashes, stale branch overwriting live, SEO.md suggesting 6 cities vs FACTS 4 cities, Appendix A items not in FACTS.
- Temporal causality: fixes applied to live but not merged to branch means future deploys from branch resurrect old copy (retrocausal contamination).

**RECURSIVE_THEORY_OF_MIND:** Crisis habit regression vs counter-trap vs clock.
- The builders/agents regress to crisis habits: mechanical copy swaps without verifying meta, JSON-LD, alt text; hiding content behind JS/hidden attributes; paraphrasing exact strings despite "Do not paraphrase" rule.
- Counter-trap: assume live = correct; trust OG description as meta proxy; assume branch matches live.
- Clock: deploy clock vs merge clock; if merge doesn't happen before next deploy, stale branch overwrites live. Quote $600 timeline 7 days; $150 one-pager 2 days.

**CROSS_LAYER_VETO_ADJUDICATION:** Physical/biomechanical/weather veto proof.
- Not literally weather, but I can interpret layers: HTML layer, CSS/JS layer, schema layer, deploy layer, branch layer.
- Physical veto: 480px assets cannot support hero/print without upscaling (physical resolution limit); must not upscale, must crop or reshoot.
- Biomechanical: Tricia's voice constraints (first person, no semicolons, no em-dashes, short sentences) as human-readable constraints.
- Weather veto proof: none applicable, but I can discuss environmental constraints (Vercel demo domain vs final charcuteriechick.ai domain switch).
- Adjudication: FACT.md is single source of truth; if not in FACTS, ask Tricia; do not infer.

**RLVR_COUNTERFACTUAL_VETOES:** 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? I'll frame as verifiable rejection scenarios.
1. Scenario: Deploy from claude/nice-franklin-kpjbpf without merging bcdafbb. Prediction: live reverts to old titles/metas/nav/kill-list copy; all SEO fixes nullified. Verifiable: grep for "Gather" nav or "A reason to gather" title post-deploy.
2. Scenario: Publish meta descriptions containing banned word "gathering" or "enquiry". Prediction: GEO answer engines and Google index stale voice; violates PLAN kill list #15. Verifiable: grep meta for banned tokens returns non-zero.
3. Scenario: Upscale 480px Shopify photos to hero size or reuse quarantined Grok hashes. Prediction: visual defect, pixelation, or AI-generated content flag; violates ASSETS.md hard rule. Verifiable: image hash matches quarantined set or natural width < 1200 for OG.
4. (Bonus) Scenario: Leave enquire form `hidden=""` or tables behind scroll trigger. Prediction: no-JS crawlers and users cannot access quote flow; QUOTE.md requires online quote start. Verifiable: DOM inspection shows `hidden` attribute or empty extraction.

Need to ensure >= 1000 words total. THINK_TRACE alone >= 400. Let me aim for substantial depth.

Also strict invariant: ZERO BETTING LINES. No mention of spreads, totals, moneylines, odds. This content has none anyway.

ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Use real verified math from the text with units.

Cite exact [PAGE N] markers: Since the source text doesn't have page numbers, I'll use section markers from the PLAN document like [PLAN §4.1], [PLAN §S1], etc. and reference file names. I'll be explicit.

Verbatim quotes: I'll quote exact strings like "Grazing tables from $24 a person", "I set it, I serve it for 90 minutes, you talk to your guests.", etc.

Let me draft carefully.

Word count check: I need to write a lot. Let me ensure each section is substantial.

THINK_TRACE: I'll write ~500-600 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~300-400 words with LaTeX.
RETROCAUSAL_GENEALOGY: ~200-300 words.
RECURSIVE_THEORY_OF_MIND: ~200-300 words.
CROSS_LAYER_VETO_ADJUDICATION: ~200-300 words.
RLVR_COUNTERFACTUAL_VETOES: ~200-300 words.

Total should exceed 1000 words.

Let me write it now.

I must not mention betting. I'll treat "veto" as software/deployment rejection, not betting.

Let me check if any part of the text mentions betting... No, it's all about a charcuterie website. Good.

Let me compose the final response with the exact XML tags.

I need to be careful with LaTeX formatting. Use proper LaTeX syntax.

Let me start writing.

---

THINK_TRACE:

The current state exhibits a branch–deploy divergence that creates a retrocausal overwrite risk: live Vercel deploys originate from commit bcdafbb, while the linked branch claude/nice-franklin-kpjbpf retains pre-Plan copy (concept 3 title “A reason to gather | The Chick Goodies,” nav “Gather / The menu / In good company / Meet Tricia / Make it yours,” H1 “Good food. Better company.”). Any deploy from the linked branch resurrects deprecated copy, nullifying the SEO pass. This is a multi-hop dependency: commit identity → live domain → crawled index → GEO answer ingestion. If the merge/rebase does not precede the next deploy, the live site’s corrected titles (PLAN §4.1) are overwritten by stale meta containing banned tokens “gathering” and “enquiry” (PLAN kill list #14, #15).

Gray-zone audit reveals eleven owner-confirmation items deliberately withheld per PLAN §8: street address printing, units for the eight cart/sweets/sips prices, tax base on the 18% rate, first-person Spanish (“Hablo español”), the “Trish” nickname, one-event-per-day and delivery/setup/cleanup service claims, dietary and cuisine promises, the two WeddingWire listing errors ($150 stations; “The Catering Chick” name), and confirmation of Appendix A lines (“Your budget, your taste, your way,” cart doubling as taco/candy cart, Knot headline). Printing any of these before FACTS.md inclusion violates the single-source-of-truth rule. Additionally, ASSETS.md imposes a physical ceiling: real photos top out at 480 × 640 px (graze/board/table/sips), 640 × 480 px (cart), 662 × 823 px (tricia); upscaling 480 px files for hero or OG use breaks the no-upscale rule and demands reshoot at JPEG long edge ≥ 2000 px.

A third gray zone is the FAQ wording triad: PLAN §S6 reads “No. It sends me a note.” while live samples show “No. Once you send the draft ... I receive your note.” and “No. You send me the note from your own email or phone.” Three variants across samples violate the PLAN’s word-for-word mirroring rule for FAQPage JSON-LD. The hidden form attribute `hidden=""` on sample 1 enquire.html removes the quote entry point from no-JS extraction and from crawlers, directly contradicting QUOTE.md’s requirement that the $2,000–$3,500 order starts online. The “Four tables” body on sample 3 Block 01 contradicts FACTS.md’s five-table enumeration (Graze $24, Standard $26, Super $30, Grand $38, Holy Grail $2,000/75, $3,500/150). The S8 caption layer is nearly absent: mood captions (“Something to share,” “The gathering table,” “Raise a glass”) persist on samples 1–3, and the lightbox JavaScript overwrites per-photo alt on open, so the displayed alt no longer equals the S8 literal. Finally, legacy build_*.py scripts present a silent overwrite singularity: if rerun, they regenerate old titles, metas, canonicals, and OG tags, erasing all direct HTML edits unless disabled or guarded.

SOURCE_OPERATORS_AND_EQUATIONS:

Formal arithmetic from PLAN §5.2 and [STATE verified total]:
Let \(P_{HG,75} = 2000\) USD, \(S = 229\) USD, \(\tau = 0.18\).
\[
E_{HG,75} = (P_{HG,75} + S)(1 + \tau) = (2000 + 229)(1.18) = 2630.22 \text{ USD}.
\]
Per-person tables: \(p \in \{24, 26, 30, 38\}\) USD/person, eligible quantity \(n \ge 50\) guests [PLAN §4.4, §5.2]. Holy Grail offers: \((2000 \text{ USD}, n=75)\), \((3500 \text{ USD}, n=150)\). Extra service time: \(e = 3\) USD per person per half hour. Tax-inclusive flag: \(valueAddedTaxIncluded = \mathrm{false}\) on every Offer [PLAN §4.4].

SEO character constraints: \(|\text{meta description}| \le 155\) characters, \(|\text{title}| \approx 60\) characters [PLAN §4.1]. Image dimensions: \(480 \times 640\) px (graze/board/table/sips), \(640 \times 480\) px (cart), \(662 \times 823\) px (tricia), OG/Twitter preview \(1200 \times 630\) px [ASSETS.md; SEO.md]. No image may carry price \(0\) [PLAN §4.4 hard rule].

Citation markers: [PLAN §4.1] titles/metas; [PLAN §S1] proof block; [PLAN §S8] literal captions; [PLAN §S6] FAQ verbatim; [PLAN §6.2] copy-swap order; [PLAN §8] NEEDS TRICIA; [FACTS.md] single source; [ASSETS.md] photo provenance and quarantined hashes; [QUOTE.md] $150 one-pager and $600 full-site scope; [SEO.md] discovery requirements; [SAMPLES.md] sample direction hierarchy.

Breakdown regimes: (1) hidden-form singularity — DOM attribute `hidden=""` makes form invisible to no-JS crawlers; (2) scroll-trigger singularity — sample 1 menu tables hidden on load produce blank band under tab row [PLAN 2.1 QA note]; (3) 480-pixel upscale breakdown — enlarging native 480 px assets for hero/OG violates ASSETS.md; (4) branch-deploy overwrite — undeployed merge allows stale branch to clobber live corrections.

RETROCAUSAL_GENEALOGY:

Lineage: STATE.md → FACTS.md → QUOTE.md → GAPS.md → PLAN (2026-09-17) → builder pass bcdafbb → review pass → current request. The Plan codifies voice rules (first person, no semicolons, no em-dashes, “party” not “gathering,” kill list #1–15). The builder pass executed copy swaps, title/meta/OG, FAQPage JSON-LD, sitemap/robots, and alt fixes, but left meta descriptions stale and omitted FoodEstablishment/makesOffer/hasMenu/Person schema. The linked branch claude/nice-franklin-kpjbpf diverged before these fixes, so it embodies a retrocausal state: if checked out and deployed, it overwrites the future (live corrected site) with the past (pre-Plan copy). Multi-week traps include (a) legacy build_*.py scripts that would regenerate deprecated metadata if rerun, (b) Shopify stock files carrying $0.00 prices and banned dietary claims, (c) quarantined Grok/Imagine hashes byte-identical to AI output, removed 2026-09-15, (d) SEO.md’s six-city service-area target (Magnolia, Cypress, Klein) conflicting with FACTS.md’s four markets (Tomball, The Woodlands, Spring, Conroe), and (e) Appendix A listing observations not yet in FACTS.md. The precedence rule is explicit: FACTS.md over SEO.md; unverified values require Tricia confirmation, never inference.

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: the builder agents regressed to mechanical execution—swapping body copy while assuming OG description could proxy for meta, hiding the enquire form behind `hidden=""`, leaving tables behind scroll triggers, and paraphrasing exact Plan strings (“I set the table…” instead of “I set it, I serve it for 90 minutes…”). This is a habit of treating visible copy as the only contract and treating structured data, meta, and alt as decorative. Counter-trap: assuming that because titles match PLAN §4.1, the SEO pass is complete; or assuming the linked branch reflects live because “the plan’s builder pass is complete.” The clock variable: live deploys already occurred under bcdafbb; the next deploy from the unmerged branch would execute a rollback. The quote-flow clock also matters: the $150 one-pager ships in 2 days, the $600 full site in 7 days [QUOTE.md]. If branch reconciliation and meta fixes do not precede those dates, the client views a site with stale meta, kill-list copy, and hidden forms under the guise of a finished build.

CROSS_LAYER_VETO_ADJUDICATION:

Layer 1 — HTML/semantic: veto any page lacking exactly one H1; sample 3 story and gallery currently skip H1 (eyebrow then H2). Sample 3 enquire lacks H1 in extraction. Veto heading skips (H1 → H2 without intermediate levels is acceptable; H2 → H4 is not). Layer 2 — DOM/JS: veto `hidden=""` on the enquire form and scroll-triggered table blocks; these break no-JS extraction and crawler access [QUOTE.md; PLAN 2.1 QA]. Layer 3 — Schema: veto absence of `@graph` FoodEstablishment with stable `@id`, makesOffer for all eight prices plus setup and extra time, hasMenu on menu.html, Person on story.html, and FAQPage word-for-word matching visible FAQ. Omit geo, hours, aggregateRating, review, ReserveAction, OrderAction [PLAN §4.4; FACTS.md]. Layer 4 — Deploy/domain: veto mixed HOST tokens; Vercel demo host must switch to `https://www.charcuteriechick.ai/` for canonical, og:url, JSON-LD url/image, robots, sitemap on paid build [PLAN; SAMPLES.md]. Layer 5 — Assets/physical: veto upscaling 480 px photos; veto any quarantined Grok hash; veto Shopify stock files (Shrimp, Link_5–Link_10, taco, cake). Layer 6 — Voice/biomechanical: veto semicolons, em-dashes, exclamation marks, “gathering/occasion/experience/your people,” third-person bio, and mirrored pairs [PLAN Voice Bible rules 1–15]. Adjudication order: FACTS.md single source overrides all layers; any value absent from FACTS.md is a Tricia ask, not an engineering inference.

RLVR_COUNTERFACTUAL_VETOES:

Scenario A (branch overwrite veto). Counterfactual: deploy from claude/nice-franklin-kpjbpf without merging bcdafbb. Verifiable prediction: post-deploy grep for “Gather” in nav or “A reason to gather” in title returns nonzero; concept 3 meta reverts to duplicated gathering text; sample 1 nav reverts to “The atelier / The menu / The collection / Meet Tricia / Enquire.” Reward signal: zero occurrences of banned nav/title tokens on live. Veto condition: merge or rebase required before any deploy.

Scenario B (meta-description token veto). Counterfactual: publish meta descriptions containing “gathering,” “enquiry,” “occasion,” or “collection.” Verifiable prediction: search-engine index and GEO answer engines ingest template voice; PLAN kill list #14 and #15 violated; sample 3’s duplicated meta persists. Reward signal: `grep -Ri "gathering\\|occasion\\|enquir\\|collection\\|atelier\\|centrepiece" clients/chick-goodies/samples/*/*.html` returns zero outside historical notes. Veto condition: every `<meta name="description">` must byte-match the OG/correct PLAN §4.1 string on its page.

Scenario C (asset resolution veto). Counterfactual: upscale native 480 × 640 px photos for hero/OG or inject any quarantined Grok/Imagine hash. Verifiable prediction: hero images exhibit pixelation above phone size; image hash matches removed set; OG lacks 1200 × 630 preview. Reward signal: all image `width`/`height` attributes match native ASSETS.md dimensions or reshoot ≥ 2000 px long edge; no byte-identical Grok file present. Veto condition: no upscaled 480 px asset in hero/OG context; no quarantined hash in git working tree.

I should make sure total word count > 1000. Let me estimate: THINK_TRACE ~550, SOURCE ~350, RETRO ~250, RECURSIVE ~250, CROSS ~300, RLVR ~300. Total ~2000. Good.

I need to ensure no betting language. None present.

I need to ensure formal LaTeX equations. Included.

I need exact verbatim quotes. Included several.

I need [PAGE N] markers. Since there are no pages, I used section markers like [PLAN §4.1]. I think that's acceptable given the source. I should maybe explicitly note "no printed page numbers exist; section/file markers used as page equivalents." But the instruction says cite exact [PAGE N] markers. I'll use the closest thing: [PLAN §4.1], [PLAN §S1], etc. and reference files. That should satisfy.

Let me finalize the response.
</NATIVE_REASONING>

<THINK_TRACE>
The current state exhibits a branch–deploy divergence that creates a retrocausal overwrite risk: live Vercel deploys originate from commit bcdafbb, while the linked branch claude/nice-franklin-kpjbpf retains pre-Plan copy (concept 3 title “A reason to gather | The Chick Goodies,” nav “Gather / The menu / In good company / Meet Tricia / Make it yours,” H1 “Good food. Better company.”). Any deploy from the linked branch resurrects deprecated copy, nullifying the SEO pass. This is a multi-hop dependency: commit identity → live domain → crawled index → GEO answer ingestion. If the merge/rebase does not precede the next deploy, the live site’s corrected titles (PLAN §4.1) are overwritten by stale meta containing banned tokens “gathering” and “enquiry” (PLAN kill list #14, #15).

Gray-zone audit reveals eleven owner-confirmation items deliberately withheld per PLAN §8: street address printing, units for the eight cart/sweets/sips prices, tax base on the 18% rate, first-person Spanish (“Hablo español”), the “Trish” nickname, one-event-per-day and delivery/setup/cleanup service claims, dietary and cuisine promises, the two WeddingWire listing errors ($150 stations; “The Catering Chick” name), and confirmation of Appendix A lines (“Your budget, your taste, your way,” cart doubling as taco/candy cart, Knot headline). Printing any of these before FACTS.md inclusion violates the single-source-of-truth rule. Additionally, ASSETS.md imposes a physical ceiling: real photos top out at 480 × 640 px (graze/board/table/sips), 640 × 480 px (cart), 662 × 823 px (tricia); upscaling 480 px files for hero or OG use breaks the no-upscale rule and demands reshoot at JPEG long edge ≥ 2000 px.

A third gray zone is the FAQ wording triad: PLAN §S6 reads “No. It sends me a note.” while live samples show “No. Once you send the draft … I receive your note.” and “No. You send me the note from your own email or phone.” Three variants across samples violate the PLAN’s word-for-word mirroring rule for FAQPage JSON-LD. The hidden form attribute `hidden=""` on sample 1 enquire.html removes the quote entry point from no-JS extraction and from crawlers, directly contradicting QUOTE.md’s requirement that the $2,000–$3,500 order starts online. The “Four tables” body on sample 3 Block 01 contradicts FACTS.md’s five-table enumeration (Graze $24, Standard $26, Super $30, Grand $38, Holy Grail $2,000/75, $3,500/150). The S8 caption layer is nearly absent: mood captions (“Something to share,” “The gathering table,” “Raise a glass”) persist on samples 1–3, and the lightbox JavaScript overwrites per-photo alt on open, so the displayed alt no longer equals the S8 literal. Finally, legacy build_*.py scripts present a silent overwrite singularity: if rerun, they regenerate old titles, metas, canonicals, and OG tags, erasing all direct HTML edits unless disabled or guarded.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal arithmetic from PLAN §5.2 and [STATE verified total]:
Let \(P_{HG,75} = 2000\) USD, \(S = 229\) USD, \(\tau = 0.18\).
\[
E_{HG,75} = (P_{HG,75} + S)(1 + \tau) = (2000 + 229)(1.18) = 2630.22 \text{ USD}.
\]
Per-person tables: \(p \in \{24, 26, 30, 38\}\) USD/person, eligible quantity \(n \ge 50\) guests [PLAN §4.4, §5.2]. Holy Grail offers: \((2000 \text{ USD}, n=75)\), \((3500 \text{ USD}, n=150)\). Extra service time: \(e = 3\) USD per person per half hour. Tax-inclusive flag: \(valueAddedTaxIncluded = \mathrm{false}\) on every Offer [PLAN §4.4].

SEO character constraints: \(|\text{meta description}| \le 155\) characters, \(|\text{title}| \approx 60\) characters [PLAN §4.1]. Image dimensions: \(480 \times 640\) px (graze/board/table/sips), \(640 \times 480\) px (cart), \(662 \times 823\) px (tricia), OG/Twitter preview \(1200 \times 630\) px [ASSETS.md; SEO.md]. No image may carry price \(0\) [PLAN §4.4 hard rule].

Citation markers: [PLAN §4.1] titles/metas; [PLAN §S1] proof block; [PLAN §S8] literal captions; [PLAN §S6] FAQ verbatim; [PLAN §6.2] copy-swap order; [PLAN §8] NEEDS TRICIA; [FACTS.md] single source; [ASSETS.md] photo provenance and quarantined hashes; [QUOTE.md] $150 one-pager and $600 full-site scope; [SEO.md] discovery requirements; [SAMPLES.md] sample direction hierarchy.

Breakdown regimes: (1) hidden-form singularity — DOM attribute `hidden=""` makes form invisible to no-JS crawlers; (2) scroll-trigger singularity — sample 1 menu tables hidden on load produce blank band under tab row [PLAN 2.1 QA note]; (3) 480-pixel upscale breakdown — enlarging native 480 px assets for hero/OG violates ASSETS.md; (4) branch-deploy overwrite — undeployed merge allows stale branch to clobber live corrections.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage: STATE.md → FACTS.md → QUOTE.md → GAPS.md → PLAN (2026-09-17) → builder pass bcdafbb → review pass → current request. The Plan codifies voice rules (first person, no semicolons, no em-dashes, “party” not “gathering,” kill list #1–15). The builder pass executed copy swaps, title/meta/OG, FAQPage JSON-LD, sitemap/robots, and alt fixes, but left meta descriptions stale and omitted FoodEstablishment/makesOffer/hasMenu/Person schema. The linked branch claude/nice-franklin-kpjbpf diverged before these fixes, so it embodies a retrocausal state: if checked out and deployed, it overwrites the future (live corrected site) with the past (pre-Plan copy). Multi-week traps include (a) legacy build_*.py scripts that would regenerate deprecated metadata if rerun, (b) Shopify stock files carrying $0.00 prices and banned dietary claims, (c) quarantined Grok/Imagine hashes byte-identical to AI output, removed 2026-09-15, (d) SEO.md’s six-city service-area target (Magnolia, Cypress, Klein) conflicting with FACTS.md’s four markets (Tomball, The Woodlands, Spring, Conroe), and (e) Appendix A listing observations not yet in FACTS.md. The precedence rule is explicit: FACTS.md over SEO.md; unverified values require Tricia confirmation, never inference.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: the builder agents regressed to mechanical execution—swapping body copy while assuming OG description could proxy for meta, hiding the enquire form behind `hidden=""`, leaving tables behind scroll triggers, and paraphrasing exact Plan strings (“I set the table…” instead of “I set it, I serve it for 90 minutes…”). This is a habit of treating visible copy as the only contract and treating structured data, meta, and alt as decorative. Counter-trap: assuming that because titles match PLAN §4.1, the SEO pass is complete; or assuming the linked branch reflects live because “the plan’s builder pass is complete.” The clock variable: live deploys already occurred under bcdafbb; the next deploy from the unmerged branch would execute a rollback. The quote-flow clock also matters: the $150 one-pager ships in 2 days, the $600 full site in 7 days [QUOTE.md]. If branch reconciliation and meta fixes do not precede those dates, the client views a site with stale meta, kill-list copy, and hidden forms under the guise of a finished build.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Layer 1 — HTML/semantic: veto any page lacking exactly one H1; sample 3 story and gallery currently skip H1 (eyebrow then H2). Sample 3 enquire lacks H1 in extraction. Veto heading skips. Layer 2 — DOM/JS: veto `hidden=""` on the enquire form and scroll-triggered table blocks; these break no-JS extraction and crawler access [QUOTE.md; PLAN 2.1 QA]. Layer 3 — Schema: veto absence of `@graph` FoodEstablishment with stable `@id`, makesOffer for all eight prices plus setup and extra time, hasMenu on menu.html, Person on story.html, and FAQPage word-for-word matching visible FAQ. Omit geo, hours, aggregateRating, review, ReserveAction, OrderAction [PLAN §4.4; FACTS.md]. Layer 4 — Deploy/domain: veto mixed HOST tokens; Vercel demo host must switch to `https://www.charcuteriechick.ai/` for canonical, og:url, JSON-LD url/image, robots, sitemap on paid build [PLAN; SAMPLES.md]. Layer 5 — Assets/physical: veto upscaling 480 px photos; veto any quarantined Grok hash; veto Shopify stock files (Shrimp, Link_5–Link_10, taco, cake). Layer 6 — Voice/biomechanical: veto semicolons, em-dashes, exclamation marks, “gathering/occasion/experience/your people,” third-person bio, and mirrored pairs [PLAN Voice Bible rules 1–15]. Adjudication order: FACTS.md single source overrides all layers; any value absent from FACTS.md is a Tricia ask, not an engineering inference.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario A (branch overwrite veto). Counterfactual: deploy from claude/nice-franklin-kpjbpf without merging bcdafbb. Verifiable prediction: post-deploy grep for “Gather” in nav or “A reason to gather” in title returns nonzero; concept 3 meta reverts to duplicated gathering text; sample 1 nav reverts to “The atelier / The menu / The collection / Meet Tricia / Enquire.” Reward signal: zero occurrences of banned nav/title tokens on live. Veto condition: merge or rebase required before any deploy.

Scenario B (meta-description token veto). Counterfactual: publish meta descriptions containing “gathering,” “enquiry,” “occasion,” or “collection.” Verifiable prediction: search-engine index and GEO answer engines ingest template voice; PLAN kill list #14 and #15 violated; sample 3’s duplicated meta persists. Reward signal: recursive token scan returns zero outside historical notes. Veto condition: every `<meta name="description">` must byte-match the OG/correct PLAN §4.1 string on its page.

Scenario C (asset resolution veto). Counterfactual: upscale native 480 × 640 px photos for hero/OG or inject any quarantined Grok/Imagine hash. Verifiable prediction: hero images exhibit pixelation above phone size; image hash matches removed set; OG lacks 1200 × 630 preview. Reward signal: all image width/height attributes match native ASSETS.md dimensions or reshoot ≥ 2000 px long edge; no byte-identical Grok file present. Veto condition: no upscaled 480 px asset in hero/OG context; no quarantined hash in git working tree.
</RLVR_COUNTERFACTUAL_VETOES>