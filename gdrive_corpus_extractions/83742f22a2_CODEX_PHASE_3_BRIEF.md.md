---
source: "CODEX_PHASE_3_BRIEF.md"
folder: "/CorpusRoot/PC-offload/OneDrive/Documents/Galaxy Sports Edge Launch Ready"
pages: 6
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5447
---

<NATIVE_REASONING>
The user has provided a source document (Codex Brief — Phase 3) and wants me to act as the GSE + GSI Frontier Reasoning Foundry. I need to produce a deep reasoning response following STRICT INVARIANTS:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- Never mention spreads, totals, moneylines, or odds. I must avoid betting terminology entirely.
- No fake toy equations. Use real formal LaTeX, SI units, information theory units (bits, nats), probability units, assumptions, exact singularity/breakdown regimes.
- Cite [PAGE N] markers and verbatim quotes from source pages. The source text is provided as one block but mentions "PAGES: 6". I need to treat the source text as having page markers. Since the user provided source text without explicit page breaks, I should infer page divisions or cite sections as pages. Wait, the user said "PAGES: 6" and "SOURCE TEXT:" followed by the markdown. I should probably divide the source into 6 logical pages and cite [PAGE 1] through [PAGE 6]. Let me estimate natural page breaks:

Page 1: Title, TL;DR, Phase 2 pre-shipped foundations (start)
Page 2: Phase 2 pre-shipped foundations continued, Phase 2 prerequisites, Phase 3 deliverables order, Step 0
Page 3: Step 1 Galaxy Studio v0
Page 4: Step 2 Game Intelligence Rooms v0
Page 5: Step 3 Twitter bot, Step 4 Discord bot
Page 6: Step 5 Model Journal, Step 6 Pre-mortem, Verification gate, Technical conventions, What Phase 3 does NOT touch, Open items, PR strategy

I need to cite exact [PAGE N] markers and verbatim quotes. Since the source text doesn't have explicit [PAGE N] markers, I will impose a 6-page pagination based on the content flow and cite accordingly, clearly indicating verbatim quotes.

Let me structure the response:

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. Discuss dependencies: Loss Autopsy schema unblocks Step 2 (Game Rooms Galaxy Memory slot), Twitter post-mortem, Model Journal. Pre-mortem pipeline wiring (Step 6) simplified by DEC-030 but must hook into publish path. Factor delta > 0.15 threshold. Compliance scanner as hard gate. Trust gates OFF. No auto-post endpoint in Studio. Thin-evidence refusal. Rate limits. 5-minute heartbeat. BullMQ. The interplay between Step 0, 2, 3, 4, 5, 6. Gray zones: "insufficient GameSignal" undefined threshold; "operationally-significant games" undefined; TTL 90 days reconsideration; compliance scanner rule coverage across templates; migrated schema backward compatibility; `MUTE_BOT=true` kill switch; no web sockets; polling/SSE. Potential singularity: if `PickSignalSnapshot` missing, Studio refuses; if `LossAutopsy` schema not landed, Phase 3 blocked.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Need real equations, not toy ratios. I can model:
- Information entropy of GameIntelligenceNode: H(N) = -Σ p(n) log p(n), units bits.
- Factor delta trigger: Δf = |f_t - f_{t-1}| > 0.15, where f ∈ [0,1] normalized factor score. Assumption: factor bounded in [0,1]. Breakdown if unbounded.
- Compliance scanner boolean: C(a) = ∧_{r∈R} r(a) ∈ {0,1}; if C(a)=0, refuse render/send.
- Pre-mortem persistence: P_m = Builder(Node_t) at t_published; stored as JSON blob.
- Rate limit process: N_posts(t) ≤ 20 per 24h; N_slate(t) ≤ 12 per 24h. Poisson/heartbeat process with λ = 1/300 s^-1.
- TTL: t_expire = t_create + 90 days (7,776,000 seconds).
- Trust gates: G ∈ {OFF} for PUBLIC_PICKS_ENABLED, etc. Boolean vector g = (0,0,0,0).
- Lens projection: projectForSurface(node, surface, viewer) → node_proj ∈ {FAN, BETTOR, ANALYST, CREATOR, FANTASY}.
- Bootstrap empty state: if |PickSignalSnapshot| = 0 ∨ |GameSignal| < τ_thin → refuse.

Units: seconds, days, bits, dimensionless probability [0,1], count.

Assumptions: Redis/BullMQ availability; Claude API deterministic enough; Prisma migration atomic; factor scores normalized [0,1]; tier projection monotonic.

Breakdown/singularity regimes: factor delta > 0.15 but snapshot missing (null pointer); compliance scanner rules.ts missing rule for new templateKind → false negative; `MUTE_BOT=true` cascades silence; db:migrate fails if `LossAutopsy` table exists partially; 5-minute heartbeat drift accumulates; Twitter API v2 rate limits independent of internal 20 ceiling.

Citations: [PAGE 1] TL;DR, [PAGE 2] Step 0, [PAGE 3] Step 1, [PAGE 4] Step 2, [PAGE 5] Steps 3-4, [PAGE 6] Steps 5-6 + verification.

RETROCAUSAL_GENEALOGY: Historical lineage: deterministic pre-mortem builder (DEC-030) from Phase 2; GateDecision Prisma model (DEC-029); Correlation query schema validator (DEC-031) Phase 5 early. Loss Autopsy deferred from Phase 0/2. Multi-week traps: OPEN-P3-A TTL reconsider after 30 days; OPEN-P3-C Elite email digest timing; OPEN-P3-D cross-post Phase 5+. The "reversed causality" trap: Game Rooms reference LossAutopsy before schema landed; pre-mortem wiring ships ahead of Steps 1-5 to unblock Game Rooms, creating dependency inversion where downstream (Step 2) gates upstream (Step 6). Also Phase 3 does not flip trust gates (Phase 4 conversation), creating a temporal lock: transparency surfaces exist but public stats/blog remain off, so Game Rooms read-only public projection cannot show performance stats.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: under production load, operators may revert to manual pick authoring when pre-mortem builder fails (best-effort publish still allowed). Counter-trap: cockpit surfaces missing pre-mortem for manual authoring, creating a work queue that never clears. Clock: 5-minute heartbeat vs Friday/Saturday/Sunday journal cadence vs 90-day TTL vs 24h rate limits. Multiple clocks interacting: heartbeat (300s), weekly journal (604,800s), TTL (7,776,000s), daily rate ceiling (86,400s). Mismatch causes stale drafts or missed settlement post-mortems if heartbeat misses `settledAt` window.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Step 2 includes Slate Weather context from SlateWeather for game's date plus per-game conditions. Weather veto: if severe weather flag in SlateWeather, certain templates (tiktok-reels-script, outdoor creator assets) should be vetoed by compliance scanner. Physical layer: mobile-first 390px, tap targets 44px+. Biomechanical: tap target size, readability. Weather veto proof: compliance scanner must include weather-derived rules; if `SlateWeather.severe = true`, Studio refuses thin-evidence? Actually Studio refuses on no PickSignalSnapshot. But weather context is a panel in Game Rooms. I need to articulate veto layers: 
1. Schema layer: LossAutopsy migration must succeed or Step 0 vetoes all subsequent steps.
2. Compliance layer: C(a)=0 vetoes render/send.
3. Trust gate layer: g=OFF vetoes public stats/blog.
4. Evidence layer: thin-evidence refusal vetoes Studio asset generation.
5. Weather/physical layer: severe weather from SlateWeather should trigger template suitability veto (e.g., outdoor shoot scripts).
6. Rate limit layer: N_posts ≥ 20 vetoes further posts.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions.
Scenario 1: LossAutopsy schema migration partially applied (table exists but enum missing). Prediction: Phase 3 verification gate condition 8 fails; Game Rooms Galaxy Memory slot crashes on `LossAutopsy.findMany`; PR-3.1 must rollback/re-migrate before PR-3.4.
Scenario 2: Compliance scanner `getRulesForTemplate` returns empty rule set for a new `templateKind` (e.g., sponsor-safe) due to import parity mismatch between Codex primary clone and Claude scratch clone. Prediction: AI-generated asset renders without brand-safety scan; production brand-safety scan (gate condition 10) returns hits; compliance scanner must be updated before Studio ship.
Scenario 3: Twitter bot heartbeat misses `Pick.settledAt` event due to BullMQ worker delay > 5-minute interval, causing settlement post to be skipped; simultaneously `MUTE_BOT=true` left on in production. Prediction: verification gate condition 5 (Twitter bot posted at least one event of each kind) fails; post-mortem thread absent; operator must audit `AgentRunLog` for success/failure metadata and clear MUTE_BOT.

Now, word count: need >=1,000 words total across sections. THINK_TRACE >=400 words. Others should be substantial.

Strict invariant: ZERO BETTING LINES. I must not say spreads, totals, moneylines, odds. I will avoid all gambling terminology. I can mention "picks", "slate", "game", "tier", "subscriber", etc. But no betting lines.

ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Use real formal LaTeX with proper units and assumptions.

Citations: [PAGE N] and verbatim quotes. Since the source text is given as one block, I'll create a logical 6-page split and cite it. I need to be careful to quote verbatim from the provided text.

Let me draft page splits:

PAGE 1: Header through TL;DR and start of Phase 2 pre-shipped foundations.
Quote: "Phase 3 turns the platform into a Sports Intelligence OS surface for creators + community."
Quote: "Six major deliverables, mostly parallel-shippable"

PAGE 2: Phase 2 pre-shipped foundations continued, Phase 2 prerequisites, Phase 3 deliverables order, Step 0.
Quote: "Deterministic pre-mortem builder is live (DEC-030)."
Quote: "Phase 3 cannot proceed without it because:"

PAGE 3: Step 1 Galaxy Studio v0.
Quote: "No auto-post endpoint. Hard-block by design."
Quote: "Thin-evidence refusal: when the input game has no PickSignalSnapshot or insufficient GameSignal, Studio refuses with "Evidence is thin — no asset generated.""

PAGE 4: Step 2 Game Intelligence Rooms v0.
Quote: "Model Court panel is NOT included in this step — that's Phase 4. Game Rooms v0 ships read-only."
Quote: "Bootstrap-state behavior: "Evidence is thin — check back near game time" empty state."

PAGE 5: Step 3 Twitter bot, Step 4 Discord bot.
Quote: "Rate limits per spec: max 12 slate-state posts per day, 20 total daily ceiling."
Quote: "Hard refusals enforced: never post paid picks, never post engagement bait, never post outcome predictions."

PAGE 6: Step 5 Model Journal, Step 6 Pre-mortem, Verification gate, Technical conventions, etc.
Quote: "Phase 3 is "done" when: ... 11 ..."
Quote: "Trust gates stay OFF: PUBLIC_PICKS_ENABLED, PERFORMANCE_STATS_ENABLED, OUTCOME_LEARNING_ENABLED, PUBLIC_BLOG_ENABLED remain off in Phase 3."

Now compose the response.

Need to ensure LaTeX is proper. Use \( ... \) or \[ ... \]. Mention SI units: seconds (s), days (d), bits, dimensionless [0,1].

Let's write THINK_TRACE first. It needs >=400 words. I'll write maybe 500-600 words.

THINK_TRACE content:
- Multi-hop dependency graph: Step 0 (Loss Autopsy schema) is a hard prerequisite for Step 2 (Game Rooms Galaxy Memory slot), Step 3 (Twitter post-mortem thread), Step 5 (Model Journal references autopsies). This creates a serial bottleneck despite "mostly parallel-shippable" TL;DR.
- Pre-mortem pipeline wiring (Step 6) simplified by DEC-030 but must hook into `Pick.publishedAt` transition. Factor delta > 0.15 triggers re-run. If builder fails, pick still publishes (best-effort), but missing pre-mortem surfaces in cockpit for manual authoring. This is a degradation mode, not a hard stop.
- Compliance scanner as universal veto: every AI-generated surface output before render/send. `getRulesForTemplate(templateKind)`. Hard refusals in Twitter/Discord: never post paid picks, engagement bait, outcome predictions.
- Trust gates OFF: four boolean locks remain off, meaning transparency surfaces are read-only and cannot expose performance stats or public blog. This creates a "semi-transparent" regime: Game Rooms public projection shows intelligence but not outcomes/learning.
- Thin-evidence refusal: Studio requires `PickSignalSnapshot` or sufficient `GameSignal`; otherwise "Evidence is thin — no asset generated." Game Rooms bootstrap empty state similar. This is an information-admission control.
- Rate limits and heartbeat: 5-minute BullMQ heartbeat, λ = 1/300 s⁻¹. Daily ceiling 20 posts, slate-state sub-ceiling 12. `MUTE_BOT=true` global kill switch.
- Gray zones: "insufficient GameSignal" threshold τ_thin is not numerically specified. "Operationally-significant games" for gate decisions is undefined. TTL 90 days (7,776,000 s) to be reconsidered after 30 days. Template/prompt code parity between Codex primary clone and Claude scratch clone (IMP-003) risks semantic divergence.
- Singularity: if `LossAutopsy` schema not landed, Steps 2, 3, 5 cannot function. If migration partially applies, `LossAutopsy.findMany` crashes.
- No web sockets; polling/SSE only. Mobile-first 390px, 44px tap targets.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
Definitions:
- Let \( \mathcal{N} \) be a GameIntelligenceNode.
- Entropy \( H(\mathcal{N}) = -\sum_{i} p_i \log_2 p_i \) [bits].
- Factor vector \( \mathbf{f} \in [0,1]^k \). Trigger \( \Delta f_j = |f_{j,t} - f_{j,t-1}| > 0.15 \). Assumption: each factor normalized to [0,1]. Breakdown if factor unbounded or missing (NaN).
- Compliance predicate \( C(a; \tau) = \bigwedge_{r \in \mathcal{R}(\tau)} r(a) \in \{0,1\} \). If \( C=0 \), render/send vetoed.
- Pre-mortem persistence \( \mathcal{M} = \text{Builder}(\mathcal{N}_{t_{pub}}) \), stored as JSON at \( t_{pre} \).
- Rate process: posts \( N(t) \) with \( N(t) \le 20 \) per 86,400 s; slate-state \( N_{slate}(t) \le 12 \) per 86,400 s. Heartbeat interval \( \tau_h = 300 \) s.
- TTL: \( t_{exp} = t_{create} + 7{,}776{,}000 \) s (90 days).
- Trust gate vector \( \mathbf{g} = (g_1,g_2,g_3,g_4) = (0,0,0,0) \).
- Lens projection \( \Pi(\mathcal{N}, s, v) \to \mathcal{N}_{proj} \in \{ \text{FAN, BETTOR, ANALYST, CREATOR, FANTASY} \} \).
- Thin-evidence predicate \( T(\mathcal{N}) = \mathbb{I}[|\text{PickSignalSnapshot}| = 0 \lor |\text{GameSignal}| < \tau_{thin}] \). If \( T=1 \), refuse.

Citations for each equation tying to pages.

RETROCAUSAL_GENEALOGY: Historical lineage and multi-week traps.
- DEC-028 Phase 2 verification gate (1,427 tests, 115 files). DEC-029 GateDecision Prisma model. DEC-030 deterministic pre-mortem builder. DEC-031 correlation query schema validator (Phase 5 early).
- Loss Autopsy deferred from Phase 0/2. Reversed causality: Step 2 needs schema from Step 0; Step 6 (pre-mortem) ships ahead of Steps 1-5 to unblock Game Rooms.
- Multi-week traps: OPEN-P3-A TTL reconsider after 30 days (~2,592,000 s). OPEN-P3-C Elite email digest timing tied to Phase 4 calibration. OPEN-P3-D cross-post to Threads/IG/FB deferred to Phase 5+.
- Trust gates remain OFF until Phase 4 conversation, creating a temporal lock: intelligence surfaces ship without public performance stats or blog.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under production load, when pre-mortem builder fails, operators may revert to manual authoring or skip pre-mortem because "pick still publishes." This regresses to ad-hoc cockpit authoring.
- Counter-trap: cockpit surfaces missing pre-mortem for manual authoring create a work queue that never clears because best-effort publish removes urgency.
- Clock interactions: heartbeat 300 s vs weekly journal 604,800 s vs TTL 7,776,000 s vs daily rate 86,400 s. Mismatch causes stale drafts or missed settlement post-mortems if heartbeat poll misses `settledAt` window.
- Recursive modeling: the Twitter bot models audience engagement but is forbidden from engagement bait; the Model Journal models past performance but trust gates block public stats; each layer models the other with asymmetric information.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Layer 1 schema: LossAutopsy migration vetoes all downstream.
- Layer 2 compliance: \( C(a;\tau)=0 \) vetoes render/send. Brand-safety scan zero hits required (gate condition 10).
- Layer 3 trust gates: \( \mathbf{g}=\mathbf{0} \) vetoes public stats/blog.
- Layer 4 evidence: thin-evidence refusal vetoes Studio/Game Rooms bootstrap.
- Layer 5 weather/physical: SlateWeather severe flag should veto outdoor templates (tiktok-reels-script, sponsor-safe shoots) in Studio; mobile-first 390px, 44px tap targets are biomechanical vetoes for UI.
- Layer 6 rate: \( N(t) \ge 20 \) vetoes further Twitter posts; `MUTE_BOT=true` is a global administrative veto.
- Adjudication order: schema → compliance → trust gate → evidence → weather/physical → rate. A veto at any layer halts the surface.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions.
Scenario 1: Partial LossAutopsy migration. Prediction: condition 8 fails; Game Rooms crash; PR-3.1 rollback.
Scenario 2: Compliance scanner empty rule set for new templateKind due to scratch-clone parity drift. Prediction: unscanned asset renders; brand-safety scan hits >0; gate condition 10 fails.
Scenario 3: BullMQ heartbeat delay > 300 s misses `settledAt`; `MUTE_BOT=true` left on. Prediction: condition 5 fails; no settlement/post-mortem posts; AgentRunLog audit required.

Now I must ensure no betting terms. Words like "picks" are in the source and fine (not a betting line). "Slate" is fine. "Settlement" is fine. "Odds" is banned. I won't use it. "Spreads", "totals", "moneylines" banned.

Word count check: THINK_TRACE alone will be >400. Total will easily exceed 1,000.

Let's write it out carefully with XML sections exactly as named.

I must not include any text outside the XML sections? The user says ">= 1,000-WORD DEPTH across these exact XML sections". I should output only the XML sections, no extra preamble. Or maybe a brief intro is okay but safer to output only the sections. I'll output only the six sections.

Need verbatim quotes and [PAGE N]. I'll include them in SOURCE_OPERATORS_AND_EQUATIONS and THINK_TRACE.

Let me draft the content now.

Page citations mapping (logical):
[PAGE 1] = Title through end of TL;DR / start Phase 2 foundations.
[PAGE 2] = Phase 2 foundations detail, prerequisites, deliverables order, Step 0.
[PAGE 3] = Step 1 Galaxy Studio v0.
[PAGE 4] = Step 2 Game Intelligence Rooms v0.
[PAGE 5] = Step 3 Twitter bot, Step 4 Discord bot.
[PAGE 6] = Step 5 Model Journal, Step 6 Pre-mortem, Verification gate, conventions, exclusions, open items, PR strategy.

I'll weave these citations throughout.

Now compose final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The dependency graph for Phase 3 is serial at its root despite the TL;DR's claim that the six deliverables are "mostly parallel-shippable" [PAGE 1]. Step 0 — landing the Loss Autopsy schema — is a hard prerequisite because Game Rooms reference `LossAutopsy` in the Galaxy Memory slot post-settlement, the Loss Room sub-archive depends on `LossAutopsy.findMany`, the Twitter bot post-mortem thread references autopsy content, and the Model Journal weekly essay references autopsies [PAGE 2]. If the migration does not land, Steps 2, 3, and 5 cannot function, creating a reversed-causality bottleneck: downstream surfaces gate upstream schema work.

Pre-mortem pipeline wiring (Step 6) is simplified by DEC-030, which landed the deterministic builder and composer logic during Phase 2 [PAGE 2]. The remaining work is hooking the existing builder into the `Pick.publishedAt` transition and persisting `Pick.preMortemContent`. A re-run trigger fires when an underlying `PickSignalSnapshot` factor moves by more than 0.15 before settlement. Critically, the design is best-effort: if generation fails, the pick still publishes, and the missing pre-mortem surfaces in the cockpit for manual authoring [PAGE 6]. This is a degradation mode, not a hard stop, but it creates a crisis habit regression risk — operators may normalize to manual authoring because the publish path does not block on pre-mortem completion.

The compliance scanner operates as a universal veto layer. Every AI-generated surface output must pass `apps/web/lib/compliance-scanner/rules.ts` via `getRulesForTemplate(templateKind)` before render or send [PAGE 3]. Twitter and Discord bots enforce hard refusals: never post paid picks, never post engagement bait, never post outcome predictions [PAGE 5]. Trust gates remain OFF (`PUBLIC_PICKS_ENABLED`, `PERFORMANCE_STATS_ENABLED`, `OUTCOME_LEARNING_ENABLED`, `PUBLIC_BLOG_ENABLED`), meaning Phase 3 ships intelligence surfaces without public performance statistics or a public blog — a "semi-transparent" regime locked until the Phase 4 conversation [PAGE 6].

Evidence admission controls are equally important. Studio refuses with "Evidence is thin — no asset generated" when the input game has no `PickSignalSnapshot` or insufficient `GameSignal` [PAGE 3]. Game Rooms v0 displays a bootstrap empty state: "Evidence is thin — check back near game time" [PAGE 4]. The threshold `τ_thin` for "insufficient GameSignal" is not numerically specified in the brief, which is a gray zone. Likewise, "operationally-significant games" that trigger Twitter bot gate-decision posts is undefined [PAGE 5].

Temporal and rate constraints couple the subsystems. The Twitter and Discord workers run on a 5-minute BullMQ heartbeat (`τ_h = 300 s`). Daily rate caps are 20 total posts and 12 slate-state posts, with a `MUTE_BOT=true` global kill switch [PAGE 5]. The Model Journal runs on a Friday/Saturday/Sunday cadence with an ISO-week lookback, creating a clock mismatch between the 300-second heartbeat and the 604,800-second weekly cycle [PAGE 6]. Creator assets carry a default TTL of 90 days (`7,776,000 s`), to be reconsidered after 30 days of usage [PAGE 1, PAGE 3].

Singularity regimes include: (1) partial `LossAutopsy` migration causing `LossAutopsy.findMany` to crash in Game Rooms and the Loss Room sub-archive; (2) compliance-scanner rule-set drift between Codex's primary clone and Claude's AI Sports scratch clone (IMP-003 parity risk), allowing unscanned assets to render; (3) heartbeat drift causing a missed `Pick.settledAt` event, suppressing settlement posts and post-mortem threads. No WebSockets are permitted in Phase 3; surfaces must use polling or SSE [PAGE 6]. Mobile-first design at 390 px with 44 px tap targets is a biomechanical constraint applied to every new surface [PAGE 6].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units for Phase 3 execution.

Let \(\mathcal{N}\) denote a `GameIntelligenceNode` projected from the Intelligence Graph. Let \(\mathcal{S}\) denote a `PickSignalSnapshot` history and \(\mathcal{G}\) denote `GameSignal` for a given game.

**Information entropy of an intelligence node.**  
Assuming the node partitions evidence into discrete evidence classes \(i\) with probabilities \(p_i \in [0,1]\), \(\sum_i p_i = 1\):
\[
H(\mathcal{N}) = -\sum_i p_i \log_2 p_i \quad \text{[bits]}.
\]
This quantifies evidence density used by the thin-evidence refusal. Source: Step 1 thin-evidence refusal [PAGE 3] and Step 2 bootstrap empty state [PAGE 4].

**Factor-delta re-run trigger (pre-mortem pipeline).**  
Let factor \(j\) be a normalized score \(f_j \in [0,1]\). The re-run condition invoked when a `PickSignalSnapshot` factor moves before settlement is:
\[
\Delta f_j = \left| f_{j,t} - f_{j,t-1} \right| > 0.15.
\]
Assumption: every factor is bounded in \([0,1]\); breakdown regime occurs if a factor is unbounded, NaN, or absent, in which case \(\Delta f_j\) is undefined and the builder must not fire. Source: Step 6 re-run logic [PAGE 6] and DEC-030 pre-mortem builder [PAGE 2].

**Compliance predicate.**  
For asset \(a\) and template kind \(\tau\), let \(\mathcal{R}(\tau)\) be the rule set returned by `getRulesForTemplate(templateKind)`. Each rule \(r: a \to \{0,1\}\). The composite predicate is:
\[
C(a; \tau) = \bigwedge_{r \in \mathcal{R}(\tau)} r(a) \in \{0,1\}.
\]
If \(C(a; \tau) = 0\), render or send is vetoed. Hard refusals for bots map to specific rules prohibiting paid picks, engagement bait, and outcome predictions [PAGE 5]. Source: compliance scanner enforcement [PAGE 3], [PAGE 5], [PAGE 6].

**Pre-mortem persistence.**  
At pick publication time \(t_{pub}\), the deterministic builder produces:
\[
\mathcal{M} = \text{Builder}(\mathcal{N}_{t_{pub}}),
\]
persisted as `Pick.preMortemContent` (JSON) with `preMortemAt = t_{pub}` and `preMortemVersion`. If generation fails, \(\mathcal{M} = \varnothing\) and the pick still publishes (best-effort). Source: Step 6 hook into publish path [PAGE 6]; DEC-030 [PAGE 2].

**Rate-limit process (Twitter and Discord bots).**  
Workers execute on a BullMQ heartbeat \(\tau_h = 300 \text{ s}\). Let \(N(t)\) be posts in the trailing \(86{,}400 \text{ s}\) (1 day). The constraints are:
\[
N(t) \le 20, \qquad N_{\text{slate}}(t) \le 12 \quad \text{per } 86{,}400 \text{ s}.
\]
The `MUTE_BOT=true` flag is a global administrative override that forces \(N(t) = 0\). Source: Step 3 rate limits [PAGE 5]; Step 4 shared rate limits [PAGE 5].

**Creator asset TTL.**  
Default TTL per `OPEN-STUDIO-2`:
\[
t_{\text{exp}} = t_{\text{create}} + 90 \text{ days} = t_{\text{create}} + 7{,}776{,}000 \text{ s}.
\]
Reconsideration trigger after 30 days of usage (\(2{,}592{,}000 \text{ s}\)). Source: TL;DR and OPEN-P3-A [PAGE 1]; Step 1 schema [PAGE 3].

**Trust-gate vector.**  
Four trust gates remain OFF in Phase 3:
\[
\mathbf{g} = \big( \text{PUBLIC\_PICKS\_ENABLED}, \text{PERFORMANCE\_STATS\_ENABLED}, \text{OUTCOME\_LEARNING\_ENABLED}, \text{PUBLIC\_BLOG\_ENABLED} \big) = (0,0,0,0).
\]
No Phase 3 work flips these; that is a Phase 4 conversation. Source: Technical conventions [PAGE 6].

**Lens projection for Game Rooms.**  
\[
\Pi(\mathcal{N}, s, v) \to \mathcal{N}_{\text{proj}} \in \{ \text{FANTASY, FAN, BETTOR, CREATOR, ANALYST} \}.
\]
The projection reorders panels but does not change underlying data. Default lens: BETTOR for Pro/Elite, FAN for FREE on a published pick, ANALYST for cockpit. Source: Step 2 lens switcher [PAGE 4].

**Thin-evidence refusal predicate.**  
\[
T(\mathcal{N}) = \mathbb{I}\big[ |\mathcal{S}| = 0 \lor |\mathcal{G}| < \tau_{\text{thin}} \big].
\]
If \(T(\mathcal{N}) = 1\), Studio refuses with "Evidence is thin — no asset generated," and Game Rooms render the bootstrap empty state. \(\tau_{\text{thin}}\) is unspecified in the source; this is an under-constrained parameter requiring operational definition. Source: Step 1 [PAGE 3]; Step 2 [PAGE 4].

**Verification gate for Phase 3 → Phase 4.**  
Eleven boolean conditions \(v_k \in \{0,1\}\), \(k=1,\dots,11\). Phase 3 is done iff \(\prod_{k=1}^{11} v_k = 1\). Critical path includes condition 8 (Loss Autopsy schema landed; at least one authored autopsy exists) and condition 5 (Twitter bot posted at least one event of each kind in production). Source: Verification gate [PAGE 6].

No toy ratios are used. All quantities carry SI or information-theoretic units (seconds, days, bits, dimensionless \([0,1]\)). Page citations refer to the six-page logical pagination of `CODEX_PHASE_3_BRIEF.md` [PAGE 1] through [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The Phase 3 architecture is a lineage of deferred decisions and pre-shipped foundations. Phase 2 verification gate DEC-028 passed with 1,427 tests across 115 files, establishing the test baseline that Phase 3 must preserve [PAGE 2]. From Phase 2, Codex inherited three artifacts: the deterministic pre-mortem builder (DEC-030), the `GateDecision` Prisma model (DEC-029), and the correlation query schema validator scaffold (DEC-031) [PAGE 2]. DEC-030 is the most consequential for Phase 3 because it collapses Step 6 from "implement builder" to "wire existing builder into publish path," but it also implants a dependency: Game Rooms v0 reads `Pick.preMortemContent` for the "What Would Change Our Mind" panel [PAGE 4]. Therefore Step 6 ships ahead of Steps 1–5 to unblock Step 2, inverting the nominal numerical order.

The Loss Autopsy schema was originally queued from `CODEX_PICKUP_2026-05-22_LOSS_AUTOPSY_AND_PROMO_WIRE.md` and deferred during Phase 2 [PAGE 2]. It is now Step 0, a serial choke point. Game Rooms reference `LossAutopsy` in the Galaxy Memory slot post-settlement; the Loss Room sub-archive depends on `LossAutopsy.findMany` with a derived-from-Pick fallback; the Twitter bot post-mortem thread and the Model Journal both reference autopsy content [PAGE 2]. This creates reversed causality: a schema deferred from Phase 0/2 now gates the entire creator/community surface of Phase 3.

Template/prompt code parity (IMP-003) is a cross-temporal trap. Codex's primary-clone implementations are canonical for Phase 2 needs, but Phase 3 surfaces (Studio templates, Twitter/Discord bot templates, Model Court prompts, compliance scanner rules, Model Journal prompts) may be pulled from Claude's AI Sports scratch clone or re-implemented from `docs/product/*-spec.md` [PAGE 2]. Semantic divergence between the two codebases is a multi-week trap: if `getRulesForTemplate` behaves differently across clones, compliance outcomes will diverge between generation-time scan and production brand-safety audit.

Open items create explicit future traps. OPEN-P3-A requires reconsidering the 90-day `CreatorAsset` TTL after 30 days of usage [PAGE 1]. OPEN-P3-C ties the Elite email digest for Model Journal to whether Phase 4 calibration training expands digest content, meaning the digest may ship with diminished scope or be delayed [PAGE 1]. OPEN-P3-D defers cross-posting to Threads/IG/FB to Phase 5+ [PAGE 1]. Trust gates remain OFF until Phase 4, so Game Rooms, Studio, and Journal ship into an information environment where public performance statistics and public blogs are prohibited by configuration, not by code [PAGE 6]. This is a retrospective lock: transparency surfaces exist but cannot display outcomes or learning, producing an asymmetry between intelligence depth and public accountability that will need to be resolved before Phase 4's autonomous loop.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression emerges from the best-effort pre-mortem design. When the deterministic builder fails at `Pick.publishedAt`, the pick still publishes and the missing pre-mortem is queued for manual cockpit authoring [PAGE 6]. Under production load, operators are likely to regress to ad-hoc manual authoring or to skip pre-mortems entirely because the publish path does not block. This regresses the system toward the pre-DEC-030 state where pre-mortems were not deterministic, eroding the Phase 2 investment.

The counter-trap is the unacknowledged work queue. Because missing pre-mortems "surface in cockpit for manual authoring" but carry no enforcement deadline, the cockpit backlog can grow without urgency. Game Rooms v0 will render panels with absent or stale "What Would Change Our Mind" content, and the Loss Room cross-reference comparator (DEC-030's `compare.ts` shape) will have no pre-mortem to compare against the actual loss reason [PAGE 6]. The system thus models itself as having pre-mortem coverage while operatively lacking it.

Clock interactions exacerbate the recursion. The Twitter/Discord heartbeat runs at \(\tau_h = 300 \text{ s}\), while the Model Journal pipe runs Friday afternoon, drafting Saturday, publishing Sunday, with a Monday Twitter teaser [PAGE 6]. The Creator Asset TTL is \(7{,}776{,}000 \text{ s}\) (90 days), and the daily rate ceiling resets every \(86{,}400 \text{ s}\) [PAGE 3, PAGE 5]. These clocks are incommensurate: a settlement event occurring just after a heartbeat poll may be missed until the next cycle, delaying settlement embeds and post-mortem threads. If `MUTE_BOT=true` is left enabled in production, the Twitter bot cannot satisfy verification gate condition 5 (at least one event of each kind posted), and the Discord bot's settlement embeds are similarly suppressed [PAGE 5, PAGE 6].

Recursive modeling across layers is asymmetric. The Twitter bot models its audience but is forbidden from engagement bait; the Model Journal models past performance but trust gates block public statistics; Studio models creator assets but cannot auto-post. Each layer reasons about the others with incomplete information. The Model Court panel is explicitly excluded from Game Rooms v0 and deferred to Phase 4, so the read-only Room cannot yet close the loop between pre-mortem prediction and post-settlement autopsy [PAGE 4]. This is a deliberate open loop: the system predicts what would change its mind, records the loss, but does not yet adjudicate the prediction against the outcome in public view.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Veto layers must be adjudicated in strict order before any Phase 3 surface renders or sends.

Layer 1 — Schema migration (foundational veto). The `LossAutopsy` model, `LossAutopsyStatus` enum, and `LossRootCause` enum must land in `packages/db/prisma/schema.prisma`, followed by `db:generate` and `db:migrate -- --name add_loss_autopsy` [PAGE 2]. If migration is partial or fails, Step 0 vetoes Steps 2, 3, and 5 because `LossAutopsy.findMany` is referenced by Game Rooms, the Loss Room sub-archive, Twitter post-mortems, and the Model Journal. This is a hard singularity: no partial degrade path exists.

Layer 2 — Compliance scanner (content veto). Every AI-generated output passes `apps/web/lib/compliance-scanner/rules.ts` via `getRulesForTemplate(templateKind)` before render or send [PAGE 3]. The predicate \(C(a;\tau) = \bigwedge r(a)\) must equal 1. Twitter and Discord bots add hard refusals: no paid picks, no engagement bait, no outcome predictions [PAGE 5]. A brand-safety scan against production HTML must return zero hits (verification condition 10) [PAGE 6]. This layer vetoes unscanned Studio assets, bot posts, and Journal drafts.

Layer 3 — Trust gates (publication veto). \(\mathbf{g} = (0,0,0,0)\) for `PUBLIC_PICKS_ENABLED`, `PERFORMANCE_STATS_ENABLED`, `OUTCOME_LEARNING_ENABLED`, `PUBLIC_BLOG_ENABLED` [PAGE 6]. This vetoes public exposure of outcomes and learning, keeping Game Rooms v0 read-only and the Model Journal public surface stripped of performance statistics until Phase 4.

Layer 4 — Evidence admission (surface veto). Studio refuses when \(T(\mathcal{N})=1\) — no `PickSignalSnapshot` or insufficient `GameSignal` [PAGE 3]. Game Rooms render the bootstrap empty state "Evidence is thin — check back near game time" [PAGE 4]. This vetoes generation and display when evidentiary support is below threshold.

Layer 5 — Weather and physical/biomechanical constraints (UI veto). Step 2 renders Slate Weather context from `SlateWeather` for the game's date plus per-game conditions [PAGE 4]. Severe weather flags should trigger template-suitability vetoes in Studio for outdoor production templates (e.g., tiktok-reels-script, sponsor-safe shoots), although the brief does not yet encode this rule — it is a gap requiring scanner-rule extension. All new surfaces must work at 390 px with 44 px tap targets [PAGE 6]; fixed-layout elements that violate mobile-first constraints are biomechanical vetoes.

Layer 6 — Rate and administrative control (stream veto). \(N(t) \le 20\) posts per \(86{,}400 \text{ s}\), \(N_{\text{slate}}(t) \le 12\) per day, heartbeat \(\tau_h = 300 \text{ s}\) [PAGE 5]. `MUTE_BOT=true` is a global administrative veto forcing \(N(t)=0\) [PAGE 5]. No WebSockets unless approved; Phase 3 uses polling or SSE [PAGE 6].

Adjudication order: schema → compliance → trust gate → evidence → weather/physical → rate. A veto at any layer halts the surface; downstream layers are not evaluated.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards (RLVR) veto scenarios with counterfactual predictions.

Scenario 1 — Partial Loss Autopsy migration.  
Setup: `db:migrate -- --name add_loss_autopsy` creates the `LossAutopsy` table but fails to apply `LossAutopsyStatus` or `LossRootCause` enums due to a partially applied migration.  
Verification signal: `LossAutopsy.findMany` throws a Prisma `InvalidRelation` or unknown-enum error when Game Rooms attempt to populate the Galaxy Memory slot post-settlement [PAGE 2, PAGE 4].  
Prediction: Verification gate condition 8 fails; PR-3.4 (Game Intelligence Rooms) cannot reach production green; PR-3.1 must be rolled back and re-migrated before any downstream step proceeds. The system enters a blocked state until schema integrity is restored.

Scenario 2 — Compliance-scanner rule-set drift across clones.  
Setup: Codex's primary clone and Claude's AI Sports scratch clone diverge on `getRulesForTemplate(templateKind)` for the `sponsor-safe` template kind (IMP-003 parity risk) [PAGE 2, PAGE 3]. Studio generates a sponsor-safe asset that passes the primary-clone scanner but would fail Claude's scratch-clone rules.  
Verification signal: Production brand-safety scan against `/cockpit/studio` HTML returns hits > 0, violating verification condition 10 [PAGE 6].  
Prediction: At least one Creator Asset renders without a valid brand-safety scan; PR-3.3 (Galaxy Studio) fails its studio-\* evals; the compliance scanner rule set must be unified across clones before Studio ships.

Scenario 3 — Heartbeat delay combined with administrative mute.  
Setup: The BullMQ heartbeat for the Twitter bot is delayed beyond \(\tau_h = 300 \text{ s}\), causing it to miss a `Pick.settledAt` transition for a free-tier pick [PAGE 5]. Simultaneously, `MUTE_BOT=true` is left enabled in production.  
Verification signal: `AgentRunLog` shows success/failure metadata with zero settlement posts; verification gate condition 5 (Twitter bot posted at least one event of each kind in production) fails [PAGE 5, PAGE 6].  
Prediction: No settlement post or post-mortem thread is published for that event; the Discord bot mirror is likewise silent. Operator must audit `AgentRunLog`, clear `MUTE_BOT`, and backfill the missed settlement window before Phase 3 verification can pass.
</RLVR_COUNTERFACTUAL_VETOES>