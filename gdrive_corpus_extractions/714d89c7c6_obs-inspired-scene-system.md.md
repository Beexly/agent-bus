---
source: "obs-inspired-scene-system.md"
folder: "/CorpusRoot/PC-offload/OneDrive/Documents/Galaxy Sports Edge Launch Ready/docs/design"
pages: 3
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6285
---

<NATIVE_REASONING>
The user wants me to analyze a source document about a Sports OS OBS-Inspired Scene System and produce a structured response with specific XML sections, strict invariants, and deep reasoning. Let me break down the requirements:

STRICT INVARIANTS:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided "PAGES: 3" but only one page of source text seems visible. However, I should treat the provided text as the source. I need to cite [PAGE N] markers. Since only one block of text is given, I'll reference it as [PAGE 1] perhaps, but the user said PAGES: 3. I should probably note that only one page was actually provided in the prompt, or infer page markers. To be safe, I'll cite [PAGE 1] for the visible text and note that Pages 2-3 were not included in the excerpt, or I can just use [PAGE 1] for all references since that's what's available. Actually, looking at the source text, it's a single markdown document. I'll cite [PAGE 1] as the location of the visible content.

Let me plan each section:

<THINK_TRACE> (>=400 words):
- Multi-hop derivation: OBS architecture -> Sports OS Media Studio -> claim governance -> data provenance tiers -> approval gates -> forbidden actions.
- Gray-zone audit: The document says "Doctrine only. No implementation." But it describes specific scene types and constraints. Gray zones: The line between "Market gravity meter (live odds context)" and forbidden betting lines? It says "live odds context from The Odds API" but invariant says zero betting lines. I must avoid mentioning spreads/totals/moneylines/odds in my output. Wait, invariant 1 says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." So I cannot use the word "odds" except perhaps to say it's forbidden? Actually, I should avoid mentioning them entirely. The source text mentions "odds" many times. I need to be careful not to reproduce betting lines. I can refer to "market movement data" or "line movement" but not "odds" if that counts as betting lines. The invariant says never mention spreads, totals, moneylines, or odds. So I must not say the word "odds". I'll use "market data" or "pricing context" or "line movement" (but line movement might imply odds). I'll use "market context data" or "The Odds API" as a proper noun source but maybe avoid saying "odds" as a concept. Actually "The Odds API" is a proper noun. I can cite it but not discuss betting lines. I'll be careful.
- Gray zones: Tier 5 exclusion but Scene 2 cockpit view is INTERNAL not public. Tension between transparency and redaction. Scene 5 investor demo win rate claims require ≥30 settled picks but no implementation exists yet—singularity/breakdown regime: cold start problem where no settled picks exist, making performance claims mathematically impossible (division by zero or insufficient sample size).
- Derivation of claim governance filter as a boolean predicate over text sources.

<SOURCE_OPERATORS_AND_EQUATIONS>:
- Formal LaTeX equations.
- Define claim governance scanner as function C: T -> {0,1} where T is text source.
- Define freshness function F: D -> R+ (timestamp delta) with threshold τ.
- Define data provenance predicate P: S -> {T1,T2,T3,T5,T6} -> {allow, deny}.
- Win rate claim rule: W = N_settled / N_total? No, that's a ratio. But invariant says zero toy equations. However, formal LaTeX equations are required. The win rate rule is ≥30 settled picks. That's a cardinality constraint, not a fake ratio. I can express it as |{p ∈ P : settled(p)}| ≥ 30.
- Units: timestamps in ISO 8601 / Unix epoch seconds (SI unit second). Transition duration in milliseconds (300–600 ms). Clip duration 30–90 seconds.
- Page citations: [PAGE 1] for the source text.
- Breakdown regimes: cold start (N_settled < 30), stale data (Δt > freshness threshold), T5/T6 data presence.

<RETROCAUSAL_GENEALOGY>:
- Historical lineage: OBS Studio (open-source broadcasting software) -> scene/source/filter/transition model -> applied to sports intelligence media.
- Multi-week traps: If implemented over multiple weeks without owner approval, risk of creep: auto-upload endpoints, T5 data leakage, win rate counter fabrication. Doctrine-only status means temporal gap between design and implementation where assumptions rot.
- Citation: [PAGE 1] status doctrine only.

<RECURSIVE_THEORY_OF_MIND>:
- Crisis habit regression: Under pressure to ship Media Studio, operator may bypass claim governance scanner or skip redaction of cockpit footage.
- Counter-trap: Mandatory pre-flight checklist, owner approval for cockpit footage, automated scanner tests.
- Clock: Transition duration 300–600ms; clip duration 30–90s; approval gates per clip per platform. Time pressure vs review depth.

<CROSS_LAYER_VETO_ADJUDICATION>:
- Physical/biomechanical/weather veto proof. This is a bit odd for a media system document, but I need to address it. Perhaps: physical layer = no OBS SDK/capture library dependency (hardware veto). Biomechanical = operator review cannot be automated away (human-in-the-loop). Weather = not directly applicable, but data freshness as environmental veto (stale data from external API). I'll interpret creatively but formally.
- Veto proof: The document explicitly forbids OBS API integration, auto-recording, auto-upload. These are cross-layer vetoes that cannot be overridden by lower layers.

<RLVR_COUNTERFACTUAL_VETOES>:
- 3 verifiable RLVR veto scenarios + predictions.
- Scenario 1: Auto-upload endpoint detected in apps/web/ or workers/ -> P0 violation -> system must not deploy.
- Scenario 2: Claim governance scanner bypassed for a text source -> media output blocked.
- Scenario 3: T5/T6 data detected in scene source -> validation failure, source removed.
- Predictions: If veto triggered, publication halted; if not, compliance maintained.

Word count: Need >= 1000 words total across sections. THINK_TRACE alone >=400. I'll aim for substantial depth.

Important: I must NOT mention spreads, totals, moneylines, or odds. I need to scrub the word "odds" from my output except perhaps when quoting? The invariant says "Never mention spreads, totals, moneylines, or odds." So I cannot even quote them? To be safe, I will avoid the word "odds" entirely. I'll refer to "The Odds API" as "[licensed market data API]" or just "licensed data API" to avoid saying the word. Actually the source text says "Market gravity meter (live odds context from The Odds API)". I can paraphrase as "live market context from a licensed third-party API" without saying odds. I will not use the forbidden terms.

Also, no fake ratios. I can use set cardinality constraints and boolean functions, which are formal, not toy ratios.

Let me draft each section carefully.

THINK_TRACE (>=400 words):
Start with multi-hop derivation:
1. OBS Studio scene = named arrangement of sources.
2. Sports OS equivalent = Intelligence Brief Layout = named arrangement of data panels.
3. Source = Data Panel / Live Feed.
4. Filter = Claim Governance Layer runs on every text source before display.
5. Therefore, every text panel must pass C(text) = 1 before rendering.

Derive approval gate composition:
- New scene type: Operator approval.
- Cockpit footage public: Owner case-by-case.
- Win rate claims: Owner approval + ≥30 settled picks.
- Publishing: Operator per clip per platform.

Gray-zone audit:
- "Doctrine only. No implementation." creates a temporal gray zone: design exists without runtime enforcement. Risk of implementation drift.
- Scene 2 Evidence Drawer is INTERNAL, not for public distribution. Gray zone: blurred/redacted cockpit footage for public clips requires owner approval; redaction quality is subjective.
- Scene 3 Market Gravity Explainer may describe line movement but may NOT claim line movement alone constitutes a "sharp money" signal. Gray zone: distinguishing descriptive context from causal signal claims is linguistically subtle; scanner may have false negatives.
- Win rate rule ≥30 settled picks creates a cold-start singularity: before 30 settled picks, the set is empty, so performance statistics are undefined. Any displayed win rate in that regime is a fabrication by definition.
- T5/T6 exclusion vs Scene 1 pick card panel top 3 active picks: if the Signal Ledger marks a pick WITHHELD or UNRESOLVED, it is forbidden; but if a Tier 5 signal informs a pick indirectly, is that T5 data appearing? The rule says no T5 data may appear in media output, but provenance tracking of inferred signals is not specified.

Breakdown regimes:
- N_settled < 30: win rate claims mathematically undefined.
- Δt_freshness > τ: stale data must be labeled or removed.
- Presence of T5/T6 in Source Acquisition Mesh: hard deny.

I'll write this in ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS:
Formal definitions:
Let S be the set of scene sources. Each source s ∈ S has provenance π(s) ∈ {T1, T2, T3, T5, T6}.
Provenance predicate: Π(s) = 1 iff π(s) ∈ {T1, T2, T3}. If Π(s) = 0, source is excluded.
Text governance: For text source t, scanner C(t) ∈ {0,1}. Hard requirement: C(t) = 1 for all displayed text. C cannot be disabled.
Freshness: For live data d with timestamp τ_d and render time τ_now, age Δt = τ_now - τ_d. Freshness filter F(d) = 1 iff Δt ≤ Δt_max. If F(d) = 0, label stale or remove.
Win rate claim admissibility: A(w) = 1 iff |{p ∈ P : settled(p) ∧ model(p) = m ∧ window(p) = W}| ≥ 30. Otherwise A(w) = 0.
Transition duration: δ_transition ∈ [300, 600] ms.
Clip duration: δ_clip ∈ [30, 90] s.

Units: seconds (SI), milliseconds (SI derived), dimensionless boolean predicates, cardinality count (unitless count).
Page citations: [PAGE 1] for all source references since only page 1 text is provided. I'll note that Pages 2-3 were not included in the provided excerpt but the doctrine is contiguous on Page 1.

Breakdown/singularity:
- Cold start: N_settled < 30 => A(w) = 0, division undefined if attempting ratio.
- Stale data singularity: Δt → ∞ => F(d) = 0.
- T5/T6 contamination: Π(s) = 0 => source excluded regardless of other filters.

RETROCAUSAL_GENEALOGY:
- Lineage: OBS Studio (2012+, open-source) -> scene/source/filter/transition -> Sports OS Media Studio doctrine.
- Cross-reference chain: media-studio-doctrine.md, stitch-agent-workflow.md, claim-governance.md, media-automation-risk-policy.md.
- Multi-week traps: Week 1: operator manual review scales poorly. Week 2: temptation to auto-approve scanner. Week 3: cockpit footage leakage via insufficient redaction. Week 4: win rate counter faked to satisfy investor demo pressure.
- Doctrine-only status means no runtime guardrails yet; the gap between document and code is the trap window.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under launch pressure, operator may skip per-clip platform review or disable scanner to meet deadline.
- Counter-trap: Nested approval gates: Owner for cockpit footage and win rate claims; Operator for new scenes and publishing. Scanner cannot be disabled.
- Clock: 300–600ms transitions enforce deliberate pacing; 30–90s clips enforce brevity; per-clip per-platform publishing creates friction that counters auto-upload impulse.
- Theory of mind: Operator models audience trust; if scanner fails, trust collapses recursively because future clips are presumed compromised.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer veto: No OBS SDK, capture library, or streaming API dependency. This is a hardware/OS boundary veto.
- Biomechanical layer veto: Operator must individually review each clip; cannot be automated. Human cognition is the rate-limiting step.
- Environmental/data layer veto: Freshness filter flags stale data; claim governance blocks forbidden vocabulary; brand safety blocks casino imagery/sportsbook logos.
- Adjudication: If any veto fires, media output does not transition from Draft to Published. No override path exists in doctrine. The "Preview / Program = Draft / Published" mapping means Program state requires all filters passed.

RLVR_COUNTERFACTUAL_VETOES:
Scenario 1: An endpoint POST /media/auto-upload appears in apps/web/ or workers/.
Veto: P0 violation. System must not deploy. Prediction: Validation expectation #2 fails; deployment blocked until endpoint removed.

Scenario 2: Claim governance scanner returns C(t) = 0 for a pick card panel text, but the scene renders it anyway.
Veto: Media output bypasses scanner (P0 per codex audit #3). Prediction: Scene blocked from Publishing; operator must revise text or remove source.

Scenario 3: A scene source s has π(s) = T5 (community signal).
Veto: Provenance predicate Π(s) = 0. Prediction: Source excluded from all scenes; if detected in rendered clip, clip is quashed and source risk review triggered.

Need to ensure no betting lines words. Avoid "odds", "spread", "total", "moneyline". I will not use them.

Word count check: I need >1000 words total. Let's allocate:
THINK_TRACE: ~500 words
SOURCE_OPERATORS_AND_EQUATIONS: ~250 words
RETROCAUSAL_GENEALOGY: ~150 words
RECURSIVE_THEORY_OF_MIND: ~150 words
CROSS_LAYER_VETO_ADJUDICATION: ~150 words
RLVR_COUNTERFACTUAL_VETOES: ~150 words
Total ~1350 words. Good.

Citations: Use [PAGE 1] since that's the only page text available. I can say "[PAGE 1]" after quotes or references. The prompt said PAGES: 3 but only gave one text block. I'll reference [PAGE 1] consistently.

Verbatim quotes: I should include some short verbatim quotes from the source text with [PAGE 1]. Examples:
- "Doctrine only. No implementation."
- "No T5 or T6 data may appear in media output."
- "Duration: 300–600ms"
- "Cannot be disabled"

Let's write it out.

Need to ensure exact XML section names are used. No extra sections. The output should be just the XML sections.

Let me draft carefully, watching for the word "odds". I will not type it.

Drafting THINK_TRACE:

The source document establishes a closed architectural derivation from OBS Studio's scene/source/filter/transition model to Sports OS's future Media Studio. The first hop maps an OBS Scene to an Intelligence Brief Layout: a named arrangement of data panels for a recording session [PAGE 1]. The second hop maps an OBS Source to a Data Panel / Live Feed: an individual data surface such as a picks table or evidence chain [PAGE 1]. The third hop maps an OBS Filter to a Claim Governance Layer that runs on every text source before it appears in media [PAGE 1]. Because the Claim Governance Filter is listed with a hard requirement of "Yes — cannot be disabled" [PAGE 1], the composition yields a mandatory boolean gate: no text panel may render unless the scanner returns a pass state.

A gray-zone audit reveals three fracture points. First, the document is marked "Doctrine only. No implementation. Architecture reference for future Media Studio build" [PAGE 1]. This creates a temporal vacuum: the design exists, but no runtime enforcement, no auto-recording endpoint, and no OBS SDK dependency currently exists [PAGE 1]. The risk is implementation drift, where a future build introduces capture libraries or auto-upload routes contrary to the Forbidden Actions list. Second, Scene 2's Evidence Drawer is explicitly labeled "cockpit view — INTERNAL, not for public distribution" [PAGE 1]. Any public use requires blurring or redaction of API keys, authentication identifiers, internal reliability scores, and user account data [PAGE 1]. The boundary between sufficient redaction and residual leakage is not formally quantified, leaving operator judgment as the sole control. Third, Scene 3's Market Gravity Explainer may describe line movement as context but may not claim that line movement alone constitutes a "sharp money" signal [PAGE 1]. The scanner must distinguish descriptive explanation from causal signal attribution, a linguistically subtle boundary prone to false negatives.

Breakdown regimes follow from the cardinality constraint on win rate claims. The document states win rate claims require ≥30 settled picks in the defined window [PAGE 1]. If the settled-pick set cardinality is less than 30, the win rate is mathematically undefined; any displayed percentage in that regime is a fabrication by construction. Similarly, the Freshness Filter flags data when the age Δt exceeds the allowable threshold, requiring stale data to be labeled or removed [PAGE 1]. Provenance excludes T5 and T6 data absolutely: "No T5 or T6 data may appear in media output" [PAGE 1]. These are hard singularities, not tunable parameters.

That's about 350 words. I need to expand to >400. I'll add more on multi-hop derivation of approval gates and forbidden actions.

Continue in same section:
The approval gates compose into a layered access-control model. New scene types require Operator approval; cockpit footage in public clips requires Owner approval case-by-case; any scene with win rate performance claims requires Owner approval; publishing to external platforms requires Operator approval per clip per platform; adding external data sources requires Owner plus source risk review [PAGE 1]. These gates are not independent: a win rate claim in an Investor Demo (Scene 5) simultaneously triggers the Owner gate and the ≥30 settled-pick cardinality rule [PAGE 1]. The Forbidden Actions list reinforces negative constraints: no OBS API integration, no auto-recording, no auto-upload, no Tier 5 data, no performance statistics without claim governance, no copyrighted broadcast footage, no unredacted cockpit identifiers, no casino imagery or sportsbook logos, and no faked win rate counters or animated confidence scores [PAGE 1].

The gray-zone interaction between Scene 1's "Market gravity meter (live market context from a licensed third-party API)" [PAGE 1] and the prohibition on betting-line display requires care: the source may display licensed market context with attribution, but the scene must not present spreads, totals, moneylines, or wagering odds as actionable data. Because this is doctrine rather than code, the precise filter vocabulary is deferred to claim-governance.md, creating a dependency gray zone: the scene system cannot be validated in isolation without the referenced governance document.

Now roughly 500 words. Good.

SOURCE_OPERATORS_AND_EQUATIONS section:

Define sets and functions. Let P be the set of all picks. Let settled(p) be a predicate. Let model version m and window W be defined. Win rate admissibility:
A(p, m, W) = 1 ⇔ |{p' ∈ P : settled(p') ∧ version(p') = m ∧ window(p') = W}| ≥ 30
Units: cardinality is a dimensionless count; the threshold 30 is a count of settled records.

Provenance predicate:
Let π(s) ∈ {T1,T2,T3,T5,T6} denote the source tier of panel s.
Π(s) = 1 ⇔ π(s) ∈ {T1,T2,T3}; else Π(s) = 0.
If Π(s) = 0, the source is excluded from all scenes [PAGE 1].

Claim governance scanner:
For text source t, C(t) ∈ {0,1}. Hard requirement: C(t) = 1 for every rendered text source; C cannot be disabled [PAGE 1].

Freshness filter:
For live datum d with reference timestamp τ_d and render time τ_now ∈ ℝ (seconds since Unix epoch), age Δt = τ_now − τ_d measured in seconds. Let Δt_max be the maximum allowable age. F(d) = 1 ⇔ Δt ≤ Δt_max. If F(d) = 0, the datum must be labeled stale or removed [PAGE 1].

Transition timing:
Scene transition duration δ ∈ [300, 600] ms, matching the design motion standard [PAGE 1]. Styles limited to fade or horizontal slide; celebratory wipes and win-sound transitions are forbidden [PAGE 1].

Clip duration:
Social clip duration δ_clip ∈ [30, 90] seconds [PAGE 1].

Breakdown/singularity:
Cold start: |{p : settled(p)}| < 30 ⇒ A = 0; win rate claims are undefined.
Stale data: Δt → ∞ ⇒ F(d) = 0.
Tier contamination: π(s) ∈ {T5,T6} ⇒ Π(s) = 0 regardless of freshness or governance state.
Citations [PAGE 1].

Need to mention units explicitly: seconds, milliseconds, dimensionless counts.

RETROCAUSAL_GENEALOGY:

Historical lineage: The document explicitly adopts OBS Studio's broadcast composition model—scenes, sources, filters, transitions, preview/program, recording, scene collections—and translates each into Sports OS media primitives [PAGE 1]. OBS is an open-source streaming and recording platform whose scene list and source visibility toggles provide the conceptual template for named Intelligence Brief Layouts and Data Panels [PAGE 1].

Cross-reference dependencies chain through media-studio-doctrine.md (media output rules and approval gates), stitch-agent-workflow.md (content assembly), claim-governance.md (forbidden vocabulary), and media-automation-risk-policy.md (automation boundaries) [PAGE 1]. The doctrine sits upstream of implementation but depends on downstream documents for scanner vocabulary and automation limits.

Multi-week traps: Week 1, manual per-clip review creates throughput pressure. Week 2, the temptation arises to auto-approve scanner outputs or batch-approve platform publishing. Week 3, cockpit footage redaction standards may erode under deadline pressure, risking unredacted API keys or internal reliability scores in public clips [PAGE 1]. Week 4, investor-demo pressure may induce fabrication of win rate counters or animated confidence scores, both explicitly forbidden [PAGE 1]. Because the document is doctrine only, no runtime guardrails exist yet; the interval between design approval and code merge is the vulnerability window where these traps can harden into system behavior.

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: Under launch pressure, the operator may regress to skipping the per-clip, per-platform publishing review, or may attempt to bypass the claim governance scanner to meet a release deadline [PAGE 1]. The model of the operator assumes disciplined gatekeeping, but crisis conditions degrade that model into heuristic shortcuts.

Counter-trap: The approval architecture is deliberately non-automatable at critical nodes. Owner approval is required for cockpit footage in public clips and for any win-rate performance claim; Operator approval is required per clip per platform [PAGE 1]. These human-in-the-loop gates impose latency that counters the impulse to auto-publish. The Claim Governance Filter cannot be disabled [PAGE 1], removing the operator's ability to self-exempt during a crisis.

Clock: Transition durations of 300–600 ms enforce a deliberate, non-celebratory pacing between brief sections [PAGE 1]. Social clips are bounded to 30–90 seconds, preventing extended unmonitored footage [PAGE 1]. The Draft/Program mapping (Preview/Program = Draft/Published) means Program state is reached only after all filters pass [PAGE 1], making the clock an enforcement mechanism rather than a convenience.

Recursive theory of mind: The operator must model audience trust as a recursive state. If the scanner fails once, future clips are presumed compromised by viewers, collapsing the trust layer. Therefore the operator's model of the audience models the operator's own compliance, creating a fixed-point requirement: the system must behave as if every future audience member is auditing every past filter decision.

CROSS_LAYER_VETO_ADJUDICATION:

Physical layer: The document forbids integration of OBS API, streaming SDK, or any capture library into the app [PAGE 1]. This is a hard physical/OS boundary veto; no code path may instantiate a capture device or streaming session.

Biomechanical layer: All media output is reviewed by the operator before external distribution [PAGE 1]. Automation cannot replace human review; the operator's visual and cognitive inspection is the rate-limiting biomechanical gate between Draft and Program.

Environmental/data layer: The Freshness Filter rejects stale data [PAGE 1]. The Brand Safety Filter blocks casino imagery, sportsbook logos, and betting slip graphics [PAGE 1]. The Claim Governance Filter blocks forbidden vocabulary [PAGE 1].

Adjudication proof: If any veto fires—missing timestamp, T5 provenance, scanner failure, brand-safety violation—the source is labeled, removed, or the scene is blocked from Publishing. No override path is defined in doctrine. The transition from Draft to Published is therefore a conjunctive condition: C(t)=1 ∧ Π(s)=1 ∧ F(d)=1 ∧ brand-safety=1 for all sources in the scene. Violation of any conjunct yields a vetoed state.

RLVR_COUNTERFACTUAL_VETOES:

Scenario 1: A route POST /media/auto-upload is introduced in apps/web/ or workers/.
Veto condition: Codex Audit Requirement #2 confirms no auto-upload endpoint may exist [PAGE 1]. This is a P0 violation.
Prediction: The build fails validation; deployment is blocked until the endpoint is removed and no auto-record/auto-stream route remains.

Scenario 2: A text source t is rendered in a scene despite C(t)=0 (claim governance scanner fail).
Veto condition: Codex Audit Requirement #3 states no media output may bypass the claim governance scanner [PAGE 1].
Prediction: The scene cannot transition from Draft to Published. The operator must revise the text, remove the source, or fail the clip. Published state probability = 0 until C(t)=1.

Scenario 3: A scene source s has provenance π(s) = T5 (community signal).
Veto condition: Source Rules state no T5 or T6 data may appear in media output [PAGE 1]. Provenance predicate Π(s)=0.
Prediction: The source is excluded from the scene at composition time. If the clip is rendered with T5 data, it is quashed pre-publication and a source risk review is triggered before the source may be re-added.

This looks solid. I need to make sure total words >= 1000. Let me estimate:
THINK_TRACE: ~520
SOURCE_OPERATORS_AND_EQUATIONS: ~280
RETROCAUSAL_GENEALOGY: ~180
RECURSIVE_THEORY_OF_MIND: ~180
CROSS_LAYER_VETO_ADJUDICATION: ~180
RLVR_COUNTERFACTUAL_VETOES: ~180
Total ~1520. Good.

I must not mention spreads, totals, moneylines, or odds. Let me scan my draft mentally: I used "licensed third-party API" instead of odds. I didn't use the forbidden words. I used "line movement" but not "odds". I should avoid "line movement" maybe? The invariant only lists spreads, totals, moneylines, or odds. "Line movement" is not explicitly banned, but to be extra safe I can keep it since it's not in the list. However, the source text says "line movement" and "odds". I will not say "odds". I'll say "market context" or "line movement" if needed. In THINK_TRACE I wrote "Market gravity meter (live market context from a licensed third-party API)" — good.

Check for toy equations: I used set cardinality, boolean predicates, interval notation. These are formal, not fake ratios like Force/Fatigue. Good.

SI units: seconds, milliseconds. Good.

Assumptions: I assumed Unix epoch seconds for timestamps. That's a stated assumption.

Exact singularity/breakdown regimes: cold start, stale data, tier contamination. Good.

Page citations: [PAGE 1] used throughout. Good.

Verbatim quotes: I included several quoted phrases with [PAGE 1]. Let me make sure they are verbatim from source:
- "Doctrine only. No implementation." — yes from source.
- "No T5 or T6 data may appear in media output." — yes.
- "Duration: 300–600ms" — source says "Duration: 300–600ms (matches design motion standard from `DESIGN.md`)" — I quoted part.
- "Yes — cannot be disabled" — source table says "Yes — cannot be disabled".
- "cockpit view — INTERNAL, not for public distribution" — yes.
- "Cannot be disabled" — yes.

All good. I'll now produce final output with exact XML tags. No markdown outside tags needed, but I can just output the XML sections. The user asked for exact XML sections. I'll provide them sequentially.

One final check: the user said "STRICT INVARIANTS... >= 1,000-WORD DEPTH across these exact XML sections". I'll ensure word count is high. I will write generously.

Let's write the final response.
</NATIVE_REASONING>

<THINK_TRACE>
The source document establishes a closed architectural derivation from OBS Studio's broadcast composition model to Sports OS's future Media Studio. The first hop maps an OBS Scene to an Intelligence Brief Layout: a named arrangement of data panels for a recording session [PAGE 1]. The second hop maps an OBS Source to a Data Panel / Live Feed: an individual data surface such as a picks table, evidence chain, or market context panel [PAGE 1]. The third hop maps an OBS Filter to a Claim Governance Layer that executes on every text source before that source is permitted to appear in media [PAGE 1]. Because the Claim Governance Filter is assigned a hard requirement of "Yes — cannot be disabled" [PAGE 1], the composition yields a mandatory boolean gate: no text panel may render unless the scanner returns a pass state. A fourth hop maps Preview / Program to Draft / Published, meaning the Program state is reachable only after operator review has converted the draft into finalized media [PAGE 1].

A gray-zone audit exposes three fracture points. First, the document carries the status "Doctrine only. No implementation. Architecture reference for future Media Studio build" [PAGE 1]. This status creates a temporal vacuum: the design is specified, but no runtime enforcement, no OBS SDK dependency, and no auto-recording endpoint currently exists [PAGE 1]. The risk is implementation drift, where a future engineering build introduces capture libraries, streaming SDKs, or auto-upload routes that the Forbidden Actions list explicitly prohibits [PAGE 1]. Second, Scene 2's Evidence Drawer is labeled "cockpit view — INTERNAL, not for public distribution" [PAGE 1]. Any public use of cockpit footage requires blurring or redaction of API keys, authentication identifiers, internal source reliability scores, and user account data [PAGE 1]. The threshold for "sufficient redaction" is not formally quantified, leaving operator judgment as the sole control and creating a leakage gray zone. Third, Scene 3's Market Gravity Explainer may describe what line movement means and how Sports OS uses it as context, but it may not claim that line movement alone constitutes a "sharp money" signal [PAGE 1]. The claim governance scanner must distinguish descriptive explanation from causal signal attribution, a linguistically subtle boundary that is prone to false negatives and depends on the vocabulary in claim-governance.md.

Breakdown regimes follow from hard cardinality and threshold constraints. The document states that win rate claims require at least 30 settled picks in the defined window [PAGE 1]. If the cardinality of the settled-pick set is less than 30, the win rate is mathematically undefined; any percentage displayed in that regime is a fabrication by construction. The Freshness Filter requires that any live or near-live data display a timestamp confirming its last update, and stale data must be labeled or removed [PAGE 1]. Provenance excludes T5 and T6 data absolutely: "No T5 or T6 data may appear in media output" [PAGE 1]. These are singularities, not tunable parameters. The approval gates compose into a layered access-control model: new scene types need Operator approval; cockpit footage in public clips needs Owner approval case-by-case; any scene with win rate performance claims needs Owner approval; publishing to external platforms needs Operator approval per clip per platform; and adding an external data source needs Owner approval plus a source risk review [PAGE 1]. These gates are conjunctive. An Investor Demo (Scene 5) that presents pick performance data simultaneously triggers the Owner gate and the ≥30 settled-pick cardinality rule, and it must not use fabricated statistics [PAGE 1]. The Forbidden Actions list reinforces negative constraints across the stack: no OBS API integration, no auto-recording, no auto-upload, no Tier 5 data, no performance statistics without claim governance, no copyrighted broadcast footage, no unredacted cockpit identifiers, no casino imagery or sportsbook logos, and no faked win rate counters or animated confidence scores [PAGE 1]. A dependency gray zone exists between the scene system and claim-governance.md: because the scanner vocabulary is deferred to a separate document, the scene architecture cannot be fully validated in isolation [PAGE 1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let P be the set of all picks, and let settled(p) be a boolean predicate indicating whether pick p has reached a settled state. Let m denote a defined model version and W a defined time window. Win-rate claim admissibility is expressed as a cardinality constraint over P:

A(p, m, W) = 1 ⇔ |{p′ ∈ P : settled(p′) ∧ version(p′) = m ∧ window(p′) = W}| ≥ 30

Units: the threshold 30 is a dimensionless count of settled records; if the count is below 30, A = 0 and any win-rate percentage is undefined by construction [PAGE 1].

Let π(s) ∈ {T1, T2, T3, T5, T6} denote the acquisition-tier provenance of scene source s. The provenance predicate is:

Π(s) = 1 ⇔ π(s) ∈ {T1, T2, T3}; otherwise Π(s) = 0.

If Π(s) = 0, the source is excluded from every scene regardless of other filter states [PAGE 1].

For any text source t, the claim governance scanner produces C(t) ∈ {0, 1}. The hard requirement is C(t) = 1 for all rendered text; the filter cannot be disabled [PAGE 1].

For live datum d with reference timestamp τ_d and render time τ_now measured in seconds since the Unix epoch, data age is Δt = τ_now − τ_d in SI seconds. Let Δt_max be the maximum permissible age. The freshness predicate is:

F(d) = 1 ⇔ Δt ≤ Δt_max; if F(d) = 0, the datum must be labeled stale or removed [PAGE 1].

Scene transition duration δ is constrained to the interval:

δ ∈ [300, 600] ms

per the design motion standard, permitting only fade or horizontal slide styles [PAGE 1]. Social clip duration δ_clip is bounded to:

δ_clip ∈ [30, 90] seconds [PAGE 1].

Singularity and breakdown regimes:
1. Cold start: |{p : settled(p)}| < 30 ⇒ A = 0; win-rate claims are mathematically invalid.
2. Stale data: Δt → ∞ ⇒ F(d) = 0; the datum cannot appear unlabeled.
3. Tier contamination: π(s) ∈ {T5, T6} ⇒ Π(s) = 0, overriding freshness or governance states.

All page references refer to the provided doctrine text [PAGE 1]; pages 2–3 of the source document were not included in the supplied excerpt, so no additional page markers are available from the prompt.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage runs directly from OBS Studio, the open-source broadcasting and recording platform, into Sports OS doctrine. OBS provides a scene list, per-source visibility toggles, position and size controls, filters, and a preview/program recording model [PAGE 1]. Sports OS translates each primitive: Scene becomes Intelligence Brief Layout, Source becomes Data Panel / Live Feed, Filter becomes Claim Governance Layer, Transition becomes Scene Switch, Preview/Program becomes Draft/Published, Recording becomes Media Output, and Scene Collection becomes Brief Template Library [PAGE 1]. The document sits inside a cross-reference chain that includes media-studio-doctrine.md for media output rules and approval gates, stitch-agent-workflow.md for content assembly, claim-governance.md for forbidden vocabulary, and media-automation-risk-policy.md for automation boundaries [PAGE 1].

Multi-week traps emerge from the gap between doctrine and implementation. Week 1: manual per-clip operator review creates throughput pressure, encouraging shortcuts. Week 2: the temptation arises to auto-approve scanner outputs or to batch-approve publishing across platforms, bypassing the per-clip, per-platform gate [PAGE 1]. Week 3: cockpit footage redaction standards may erode under deadline pressure, risking unredacted API keys, authentication identifiers, internal reliability scores, or user account data in public clips [PAGE 1]. Week 4: investor-demo pressure may induce fabrication of win-rate counters, animated confidence scores, or pick outcome simulations, all explicitly forbidden [PAGE 1]. Because the document is doctrine only, no runtime guardrails exist yet [PAGE 1]; the interval between architectural approval and code merge is the vulnerability window in which these traps can harden into shipped behavior.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the operator's degradation under launch pressure. The operator may regress to skipping the per-clip, per-platform publishing review, or to disabling or bypassing the claim governance scanner in order to meet a release deadline [PAGE 1]. The baseline model assumes disciplined gatekeeping at every Draft-to-Program transition, but crisis conditions collapse that model into heuristic shortcuts.

The counter-trap is built into the architecture as non-automatable human-in-the-loop gates. Owner approval is required for cockpit footage in public clips and for any scene containing win-rate performance claims; Operator approval is required for new scene types and for publishing to each external platform [PAGE 1]. The Claim Governance Filter cannot be disabled [PAGE 1], removing the operator's ability to self-exempt during a crisis. These gates impose deliberate latency that counters the auto-publish impulse.

The clock functions as an enforcement mechanism. Scene transitions are limited to 300–600 ms using only fade or horizontal slide, preventing celebratory wipes or win-sound effects [PAGE 1]. Social clips are bounded to 30–90 seconds, limiting the duration of any single unmonitored media artifact [PAGE 1]. The Draft/Program mapping means that Program state is reached only after every filter passes [PAGE 1]; time is therefore not a convenience but a conjunctive requirement.

Recursive theory of mind requires the operator to model audience trust as a recursive fixed point. If the claim governance scanner fails once, future clips are presumed compromised by viewers, collapsing the public trust layer. Consequently, the operator's model of the audience must itself model the operator's compliance: the system must behave as if every future audience member is auditing every past filter decision [PAGE 1]. Stability exists only at the fixed point where the operator believes the audience believes the filters are always active.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: The document forbids integration of the OBS API, any streaming SDK, or any capture library into the application [PAGE 1]. This is a hard physical and operating-system boundary; no code path may instantiate a capture device, streaming session, or recording pipeline.

Biomechanical layer veto: All media output must be reviewed by the operator before external distribution [PAGE 1]. Automation cannot replace human inspection; the operator's visual and cognitive review is the rate-limiting biomechanical gate between Draft and Published.

Environmental and data layer veto: The Freshness Filter rejects data whose age exceeds the threshold [PAGE 1]. The Brand Safety Filter blocks casino imagery, sportsbook logos, and betting slip graphics [PAGE 1]. The Claim Governance Filter blocks forbidden vocabulary [PAGE 1].

Adjudication proof: If any veto fires—missing timestamp, T5 or T6 provenance, scanner failure, brand-safety violation—the affected source is labeled stale, removed, or the entire scene is blocked from Publishing. No override path is defined in doctrine. The transition from Draft to Program is therefore a conjunctive condition:

C(t) = 1 ∧ Π(s) = 1 ∧ F(d) = 1 ∧ BrandSafety(s) = 1

for every source s and text t in the scene. Violation of any conjunct yields a vetoed state that cannot be resolved by lower layers [PAGE 1].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: A route POST /media/auto-upload appears in apps/web/ or workers/.
Veto condition: Codex Audit Requirement #2 confirms that no auto-upload endpoint may exist [PAGE 1]; this is classified as a P0 violation.
Prediction: The build fails validation; deployment is blocked until the endpoint is removed and no auto-record or auto-stream route remains in the codebase.

Scenario 2: A text source t is rendered in a scene although C(t) = 0 under the claim governance scanner.
Veto condition: Codex Audit Requirement #3 states that no media output may bypass the claim governance scanner [PAGE 1].
Prediction: The scene cannot transition from Draft to Published. The operator must revise the text, remove the source, or abandon the clip; the probability of a Published state is zero until C(t) = 1.

Scenario 3: A scene source s has provenance π(s) = T5, indicating community-sourced data.
Veto condition: Source Rules state that no T5 or T6 data may appear in media output [PAGE 1], so Π(s) = 0.
Prediction: The source is excluded from scene composition at build time. If a clip is nevertheless rendered with T5 data, it is quashed before external distribution and a source risk review is triggered before the source may be re-admitted [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>