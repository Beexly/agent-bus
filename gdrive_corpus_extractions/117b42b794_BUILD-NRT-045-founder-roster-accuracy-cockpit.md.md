---
source: "BUILD-NRT-045-founder-roster-accuracy-cockpit.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 2
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4042
---

<NATIVE_REASONING>
The user wants me to analyze the provided source document and produce a response following the strict invariants:

1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS - no invented fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided a "DRIVE SOURCE" which is a build card for a "Founder roster accuracy cockpit" for NFL roster truth system. This is a technical/software/build document, not sports betting content. But I must still follow the invariants: no betting lines, formal LaTeX equations, page citations, etc.

The source text appears to be from "PAGES: 2" but only one page of content is shown (the markdown). I need to cite exact [PAGE N] markers. Since the source text provided is page 1 (and possibly page 2 isn't shown), I should cite [PAGE 1] for the provided content. If I reference things not in the provided text, I should be careful.

Let me structure the response:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit. I need to think through the build card, dependencies, risks, data model, reconciliation plan, etc. Multi-hop: from card -> duplicate gate -> parent IDs -> existing cards -> freshness/player surface -> roster truth -> conflict handling -> public/private boundary -> legal/TOS -> implementation plan -> acceptance criteria -> test plan -> rollback. Gray-zone audit: where does this card sit between docs-only and production? What's ambiguous? "Likely files: real shipping clone paths unknown" - that's a gray zone. "disabled-by-default implementation" - ambiguous. Source weights not exposed publicly but reconciliation logic proprietary - where is the boundary? etc.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations. I need to define formal operators for:
- VerificationRun
- ConflictRecord
- ValidationError
- Source evidence design
- Freshness staleness function
- Conflict detection operator
- Official evidence precedence
- Staleness threshold
Units: SI/information/probability units. Bits for information entropy, seconds for timestamps, probability for confidence, etc.
Assumptions: read-only adapters, official current evidence wins unless stale, etc.
Exact singularity/breakdown regimes: when official source is stale AND contradicted by newer official transaction evidence? When parser version mismatches? When hash collision? When source is paywalled?
Page citations: [PAGE 1] for the provided markdown. Since only page 1 is given, I'll cite that.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Lineage of data quality, source freshness, master data management (MDM), entity resolution, conflict-free replicated data types (CRDTs), last-write-wins vs vector clocks. Multi-week traps: stale roster facts persisting across weeks, Najee Harris/Rico Dowdle smoke tests, injury reserve, practice squad moves, preseason cuts, final roster cuts, waiver claims.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Crisis habit regression: when a data incident happens, teams revert to manual overrides/silent overwrites. Counter-trap: building ConflictRecord instead of silent overwrite. Clock: freshness timestamp decay, staleness as function of time since last verification.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. This is odd for a data build card, but I need to interpret it. Physical layer: server/storage, network, repo filesystem. Biomechanical: human operators (founder/admin), manual entry errors, clipboard. Weather: not applicable directly, but metaphorically external source volatility, rate limiting, source outages. Veto proof: conditions under which the build must be vetoed (production DB mutation, deploy, scraping prohibited sources, stale fact rendered as confirmed).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some internal framework. I need to create 3 counterfactual veto scenarios that are verifiable, with predictions. Examples:
1. If a production DB migration is attempted, veto -> prediction: build halts, no schema change.
2. If a stale fact (last_verified > T_stale) is rendered as confirmed without conflict flag, veto -> prediction: public surface shows "unverified" or stale badge.
3. If a prohibited/paywalled source is scraped, veto -> prediction: adapter returns 403 or is disabled, no raw evidence stored.

I need to ensure >= 1000 words total across all sections. THINK_TRACE alone >=400 words. Let me make sure all sections are substantial.

Also must not mention betting lines. The document mentions NFL players Najee Harris and Rico Dowdle, but that's fine as long as no odds/spreads.

Let me draft carefully.

Word count planning:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~200 words
- RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total ~1700 words. Good.

Citations: Use [PAGE 1] since the provided source text is page 1 of 2 (the user says PAGES: 2 but only provides one block). I'll cite [PAGE 1] for all verbatim quotes and references to the card content. I should not fabricate [PAGE 2] content.

Verbatim quotes from source:
- "Roster facts are trust infrastructure. Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions." [PAGE 1]
- "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites." [PAGE 1]
- "Do not mutate production data." [PAGE 1]
- "Public surfaces can show current fact, qualified status, and last verified timestamp. Founder/admin surfaces can show source weights, conflicts, parser errors, and raw evidence links." [PAGE 1]
- "Use official/public sources only after terms and robots review. Do not scrape private, paywalled, login-gated, prohibited, or high-volume sources." [PAGE 1]
- "Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams." [PAGE 1]

Now LaTeX equations:

Let $\mathcal{S} = \{s_1, \dots, s_n\}$ be source adapters.
Let $r \in \mathcal{R}$ be a roster fact (team, number, status, staff role).
Evidence record: $E = (r, s, t_v, h, c, v_p)$ where $t_v \in \mathbb{R}^+$ is verification timestamp (seconds since Unix epoch), $h \in \{0,1\}^{256}$ is SHA-256 hash, $c \in \mathbb{N}$ parsed record count, $v_p \in \Sigma^*$ parser version.

Freshness predicate: $\Phi_{\text{stale}}(t_v, t_{\text{now}}, \tau) = \mathbb{1}[t_{\text{now}} - t_v > \tau]$ where $\tau$ is staleness horizon (seconds).

Conflict operator: $\mathcal{C}(r, E_{\text{official}}, E_{\text{fallback}}) = \text{ConflictRecord}$ if $\text{value}(E_{\text{official}}) \neq \text{value}(E_{\text{fallback}}) \land \neg \Phi_{\text{stale}}(t_{v,\text{official}}, t_{\text{now}}, \tau)$.

Precedence: $\text{winner} = \begin{cases} E_{\text{official}} & \text{if } \neg \Phi_{\text{stale}} \land \neg \text{contradicted by newer official} \\ E_{\text{newer official}} & \text{if newer official transaction exists} \\ \text{unset/conflict} & \text{otherwise} \end{cases}$

Information units: entropy $H(X)$ in bits; timestamp in SI seconds; confidence $p \in [0,1]$.

Singularity/breakdown: when $t_v$ is null (unknown), when hash $h$ mismatches on re-parse (parser version drift), when source is paywalled (robots/TOS violation), when two official sources contradict with equal recency (temporal singularity at $\Delta t = 0$).

OK, now writing the sections. I must ensure no markdown outside the XML sections? The user asked for exact XML sections. I'll wrap everything in those tags. I can have a brief intro? Better to just output the XML sections directly to be safe.

Let's write.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit.
Start with duplicate gate: EXTENSION, matched BUILD-GV2-096, BUILD-GV2-098. Multi-hop: card extends generic freshness/player surface work with roster-specific truth rules. It adds VerificationRun, ConflictRecord, ValidationError. The gray zone: "Likely files: real shipping clone paths unknown in this workspace" - unknown repo root. "smallest docs-first, type-only, or disabled-by-default implementation" - ambiguous modality. Another gray zone: source weights internal but reconciliation logic proprietary - where exactly is the boundary? Legal risk MEDIUM: terms/robots review required before use; media/fantasy fallback unless legal approval. Maintenance risk MEDIUM: stale/conflicted fact looking confirmed is primary trust risk. Test plan uses Najee Harris and Rico Dowdle smoke tests against fixtures, not hardcoded teams - this avoids a specific trap of hardcoding player-to-team mappings that rot after trades/cuts. Rollback: remove disabled script/types/docs, delete fixtures, no prod data mutation. Gray zone: if later DB work is needed, rollback via migration rollback and snapshot restore only after backup verification - conditional on future state not defined here.

I'll write >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX, units, citations, breakdown. Define sets, functions, precedence, staleness, conflict, validation. Cite [PAGE 1].

RETROCAUSAL_GENEALOGY: lineage from MDM, entity resolution, last-write-wins, vector clocks, CRDTs, source freshness cards BUILD-GV2-096/098. Multi-week traps: NFL roster churn (final cuts, waiver, IR, practice squad), Najee Harris/Rico Dowdle examples, stale status persisting across weeks.

RECURSIVE_THEORY_OF_MIND: crisis habit regression (silent overwrite under pressure), counter-trap (ConflictRecord instead of silent overwrite), clock (freshness timestamp decay $t_{now} - t_v$).

CROSS_LAYER_VETO_ADJUDICATION: physical (filesystem, repo root, no prod DB migration), biomechanical (founder/admin manual override, clipboard errors), weather (external source volatility, rate limits, outages, robots.txt). Veto conditions.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios with predictions. Make them verifiable.

Let's produce the final output. Ensure word count. I'll count roughly as I write.

I should not include any betting content. Good.

Let's write the response now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit of BUILD-NRT-045.

The card is a P0, difficulty L (low) build for a "Founder roster accuracy cockpit" inside the NFL roster truth namespace. Its duplicate-gate status is EXTENSION, matched against BUILD-GV2-096 and BUILD-GV2-098, which are existing generic source-freshness and player-surface cards. The first multi-hop is therefore structural: this card does not recreate generic freshness or player-surface logic; it links back to those cards and adds roster-specific truth rules, fact-level NFL roster evidence, conflict handling, staff rules, and deploy gates. The "Why It Matters" section states verbatim that "Roster facts are trust infrastructure. Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions" [PAGE 1]. That is a trust-infrastructure claim, not a performance claim, so the derivation must treat every roster fact as a provenance-bearing tuple rather than a display string.

The second multi-hop is the data model. Three entities are defined: VerificationRun, ConflictRecord, ValidationError. The ingestion plan mandates read-only source adapters or fixture-based probes first, raw source snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs, and an explicit prohibition on mutating production data [PAGE 1]. The reconciliation plan specifies that official current evidence wins unless stale or contradicted by newer official transaction evidence, and that conflicts create ConflictRecord entries instead of silent overwrites [PAGE 1]. This last clause is the architectural counter-trap to the common failure mode of last-write-wins silent overwrite.

The third multi-hop is the public/private boundary. Public surfaces may show current fact, qualified status, and last verified timestamp. Founder/admin surfaces may show source weights, conflicts, parser errors, and raw evidence links. Proprietary reconciliation logic must not be exposed [PAGE 1]. This creates an information-asymmetry requirement: the internal operator sees the conflict graph and evidence weights; the public sees only a resolved, qualified fact with a timestamp.

Gray zones are significant. The repo context admits "Likely files: real shipping clone paths unknown in this workspace" [PAGE 1], meaning the implementation path is not yet bound to a real checkout. The implementation plan authorizes a "smallest docs-first, type-only, or disabled-by-default implementation" [PAGE 1], which is a tri-modal authorization with no decision rule for selecting among docs-first, type-only, or disabled-by-default. That is a gray-zone execution risk: without a gate, a downstream implementer could interpret "type-only" as sufficient to satisfy acceptance criteria while the cockpit remains non-executable. Another gray zone is the legal boundary: official/public sources are allowed only after terms and robots review; media/fantasy sources are fallback/corroboration unless legal approval upgrades them [PAGE 1]. No approval status is recorded in the card, so the current legal clearance is unknown.

Risks are rated MEDIUM across legal, source, and maintenance, with the primary trust risk being "making a stale or conflicted fact look confirmed" [PAGE 1]. The acceptance criteria convert that into testable constraints: duplicate gate honored, source evidence design for every touched fact, conflicts visible internally, stale/unknown facts not rendered as confirmed, and no production database mutation or deploy [PAGE 1]. The test plan explicitly names Najee Harris and Rico Dowdle smoke tests comparing rendered facts against current source evidence fixtures rather than hardcoded replacement teams [PAGE 1], which is a deliberate anti-fragility measure against roster churn (trades, cuts, IR moves) that would rot hardcoded mappings.

Rollback is bounded: remove new disabled script/types/docs, delete generated fixtures, leave existing production data untouched; later DB work only via migration rollback and snapshot restore after backup verification [PAGE 1]. The open unknowns are repo root/branch/dirty state, package manager, existing app patterns, exact file paths, and pending legal approvals for source use. All of these must be resolved before any code beyond docs/types/fixtures is introduced.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, assumptions, and breakdown regimes for BUILD-NRT-045, grounded in the source text [PAGE 1].

Let $\mathcal{R}$ be the set of roster facts, where each $r \in \mathcal{R}$ is a tuple of attributes (team, number, status, staff role). Let $\mathcal{S}$ be the set of read-only source adapters, partitioned into official $\mathcal{S}_{\text{off}} \subset \mathcal{S}$, open-data $\mathcal{S}_{\text{open}} \subset \mathcal{S}$, and fallback/corroboration $\mathcal{S}_{\text{fb}} \subset \mathcal{S}$. Media and fantasy sources belong to $\mathcal{S}_{\text{fb}}$ unless legal approval upgrades them [PAGE 1].

An evidence record is a tuple
$$E = (r, s, t_v, h, c, v_p, \mathsf{url}) \in \mathcal{E}$$
where:
- $t_v \in \mathbb{R}_{\ge 0}$ is the verification timestamp in SI seconds since the Unix epoch,
- $h \in \{0,1\}^{256}$ is the SHA-256 content hash of the raw source snapshot,
- $c \in \mathbb{N}$ is the parsed record count,
- $v_p \in \Sigma^*$ is the parser version string,
- $\mathsf{url} \in \Sigma^*$ is the source URL after robots/terms review.

A VerificationRun produces a set $\mathcal{E}_{\text{run}} \subset \mathcal{E}$ with associated run metadata. Freshness is defined by a staleness horizon $\tau \in \mathbb{R}_{>0}$ (seconds). The staleness predicate is
$$\Phi_{\text{stale}}(t_v, t_{\text{now}}; \tau) = \mathbb{1}\!\left[t_{\text{now}} - t_v > \tau\right]$$
where $t_{\text{now}} - t_v$ is measured in SI seconds. If $t_v$ is null or missing, the fact is unknown and must not render as confirmed [PAGE 1].

Conflict detection between two evidence records $E_a, E_b$ for the same fact $r$ is the operator
$$\mathcal{C}(E_a, E_b) = 
\begin{cases}
\mathsf{ConflictRecord}, & \text{if } \operatorname{val}(E_a) \neq \operatorname{val}(E_b) \land \neg \Phi_{\text{stale}}(t_{v,a}; \tau) \land \neg \Phi_{\text{stale}}(t_{v,b}; \tau),\\
\varnothing, & \text{otherwise.}
\end{cases}$$

Reconciliation precedence is the partial function
$$\operatorname{resolve}(r, \mathcal{E}_r) = 
\begin{cases}
E_{\text{newer official}}, & \text{if } \exists E \in \mathcal{E}_r \cap \mathcal{S}_{\text{off}} \text{ that is newer official transaction evidence contradicting current official},\\
E_{\text{official}}, & \text{if } \exists E \in \mathcal{E}_r \cap \mathcal{S}_{\text{off}} \text{ current and not stale},\\
\mathsf{unset}, & \text{if all evidence is stale or unknown},\\
\mathsf{conflict}, & \text{if } \mathcal{C} \neq \varnothing \text{ and no authoritative winner exists.}
\end{cases}$$
This implements the card rule: "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites" [PAGE 1].

Information-theoretic units: source snapshot entropy $H(E)$ measured in bits; confidence in a resolved fact $p \in [0,1]$ is a probability derived from source weight and recency, not displayed publicly. Source weights $w_s \in [0,1]$ are internal-only [PAGE 1].

Singularity and breakdown regimes:
1. Temporal singularity: when two official records carry identical timestamps ($\Delta t = 0$) and contradictory values, precedence is undefined; a ConflictRecord must be created and no silent overwrite may occur.
2. Parser-version drift: when re-parsing the same hash $h$ yields a different $c$ or $\operatorname{val}(r)$ under a new $v_p$, the evidence record is flagged as a ValidationError and prior derived facts are suspect.
3. Legal/TOS boundary: if robots or terms review fails for a source, the adapter must return a disabled state; scraping private, paywalled, login-gated, prohibited, or high-volume sources is prohibited [PAGE 1].
4. Null-timestamp regime: if $t_v = \text{null}$, the fact is stale by definition and must render as unverified or unknown, never confirmed.

All citations refer to [PAGE 1], the provided build card text.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps specific to NFL roster truth.

The card's lineage traces to master-data management (MDM) and entity-resolution practice, where the central problem is maintaining a single authoritative version of a fact across multiple source systems. The reconciliation rule—official current evidence wins unless stale or contradicted by newer official transaction evidence, with conflicts materialized as ConflictRecord rather than silent overwrite—is a deliberate rejection of last-write-wins semantics in favor of an explicit conflict log. This is genealogically related to vector-clock and CRDT (conflict-free replicated data type) literature, where concurrent updates are detected rather than discarded. It also descends from source-freshness and data-quality work represented by the parent IDs BUILD-GV2-096 and BUILD-GV2-098 [PAGE 1]. Where those cards define generic freshness and player-surface QA, BUILD-NRT-045 specializes to NFL roster truth: team, number, status, staff role [PAGE 1].

Multi-week traps arise from the velocity of NFL roster churn. Between training camp and Week 1, teams reduce from 90 to 53 players, place players on injured reserve, move players to and from the practice squad, and process waiver claims. A fact that was current in Week 1 (e.g., "Player X is on the 53-man roster") can become false by Week 3 without any transaction visible to a stale cache. The card anticipates this by requiring freshness timestamps and stale-fact suppression: "Stale/unknown facts do not render as confirmed" [PAGE 1]. The Najee Harris and Rico Dowdle smoke tests are the operational embodiment of this anti-trap: rendered facts must be compared against current source evidence fixtures, not hardcoded replacement teams [PAGE 1]. Hardcoding a player-to-team mapping is exactly the failure mode that produces multi-week rot after a trade or cut.

Another retro-causal trap is status ambiguity. A player listed as "questionable" or "doubtful" on an injury report is not the same as a roster status (active, IR, PUP, exempt, suspended). Staff-role facts (coordinator changes, position coaches) also churn mid-season and can corrupt search and content if stale. The card's staff-rule requirement closes this loop [PAGE 1]. The genealogical lesson is that roster truth is not a static lookup table; it is a time-series of verified events, and the cockpit must be able to answer "what was true as of time T" as well as "what is true now."

Multi-week traps also include source degradation: an official source may change its URL, robots policy, or terms of service mid-season. The ingestion plan's requirement to store URL, hash, and parser version per snapshot [PAGE 1] provides the audit trail needed to detect when a source adapter silently returns a different schema. Without that lineage, a stale fact rendered as confirmed becomes untraceable.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Recursive theory of mind here models the organization's response to a roster-data crisis (e.g., a wrong team or status displayed on Player Lab or GSE Rating). Crisis habit regression is the tendency, under pressure, to revert to the fastest available write path: a manual SQL update, a silent overwrite of the roster fact, or a hardcoded patch that bypasses the evidence pipeline. That regression directly violates the card's core constraint: "Conflicts create ConflictRecord entries instead of silent overwrites" [PAGE 1]. If the organization regresses, the conflict graph disappears, source weights are ignored, and stale facts can be re-confirmed without an audit trail.

The counter-trap is the cockpit itself: VerificationRun, ConflictRecord, and ValidationError entities make the conflict visible internally before any public surface updates [PAGE 1]. Under this model, an operator facing a discrepancy is routed to record a ConflictRecord and inspect source weights, parser errors, and raw evidence links on the founder/admin surface [PAGE 1]. The public surface, by contrast, shows only current fact, qualified status, and last verified timestamp [PAGE 1]. This creates a recursive check: the operator must consciously choose to resolve a conflict rather than silently overwrite it, and the resolution is timestamped and evidenced.

The clock is the freshness decay function $\Phi_{\text{stale}}(t_v, t_{\text{now}}; \tau) = \mathbb{1}[t_{\text{now}} - t_v > \tau]$. It is an autonomous, non-human veto: regardless of operator intent, once $t_{\text{now}} - t_v > \tau$, the fact is stale and must not render as confirmed [PAGE 1]. The clock does not fatigue, does not succumb to pressure, and cannot be socially engineered into a silent overwrite. It provides the external constraint that makes the counter-trap stable over recursion: even if an operator regresses and attempts to confirm a stale fact, the clock (and the stale/unknown rendering rule [PAGE 1]) blocks public confirmation.

The failure mode to watch is clock tampering: backdating $t_v$ or extending $\tau$ beyond operational reason to keep a fact "fresh." That is why parser version, hash, and raw evidence links are retained [PAGE 1]; they make tampering detectable. The recursive loop is therefore: crisis occurs → operator tempted to regress → counter-trap forces ConflictRecord and evidence review → clock enforces staleness → public surface remains qualified and timestamped → trust preserved.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto conditions for the build.

Physical layer: The implementation is constrained to docs, types, fixtures, or disabled-by-default scripts. Production database migrations, deployment configuration, secrets, live cron jobs, and credential-requiring sources are explicitly files to avoid [PAGE 1]. Veto condition V1: any pull request that touches production DB migrations or deployment config must be vetoed. No production database mutation or deploy occurs [PAGE 1]. Physical verification includes confirming repo root, branch, dirty state, package manager, and existing app files before writing anything [PAGE 1].

Biomechanical layer: Human operators (founders/admins) are the source of manual-entry errors, clipboard mistakes, and the crisis habit regression described above. Veto condition V2: if an admin surface allows direct editing of a resolved roster fact without creating a VerificationRun or ConflictRecord, that code path must be disabled or removed. The card requires founder/admin surfaces to show source weights, conflicts, parser errors, and raw evidence links—not to permit silent fact mutation [PAGE 1].

Environmental/weather layer: External source volatility is the metaphorical weather. Official sources may go offline, change robots.txt, or alter terms of service; open-data sources may rate-limit; fallback media/fantasy sources are only corroboration unless legally upgraded [PAGE 1]. Veto condition V3: any adapter targeting a private, paywalled, login-gated, prohibited, or high-volume source must be blocked before ingestion. Source weights and raw evidence links are internal-only; proprietary reconciliation logic must not be exposed publicly [PAGE 1].

Veto adjudication order: V1 (physical/no-prod) is absolute and checked first. V3 (legal/source admissibility) is checked second, before any adapter runs. V2 (biomechanical/no-silent-write) is checked third, at code review for admin surfaces. If any veto fires, the build stops at the docs-first/fixture-backed stage and no public roster fact is rendered without evidence, freshness, and conflict handling [PAGE 1].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) veto scenarios, each with a prediction.

Scenario 1 (Production DB mutation attempt): A downstream implementer adds a migration script to alter the production roster table directly, bypassing VerificationRun. Verifiable condition: `git diff` contains files under production migration paths or executes DDL against the production database. Veto: build is disabled; migration file is removed. Prediction: zero production tables are altered, zero rows are inserted/updated/deleted in production, and the acceptance criterion "No production database mutation or deploy occurs" [PAGE 1] remains true.

Scenario 2 (Stale fact rendered as confirmed): The public surface displays a roster fact with $t_v$ such that $t_{\text{now}} - t_v > \tau$ and no ConflictRecord exists, while the UI label reads "confirmed." Verifiable condition: a unit test queries the public renderer with a fixture where $t_v$ is older than the staleness horizon $\tau$ and asserts the rendered status is "stale"/"unverified" rather than "confirmed." Veto: the rendering path is blocked until stale facts render as non-confirmed. Prediction: for every stale fixture, the public output contains a qualified status and last verified timestamp but never the token "confirmed" without supporting non-stale evidence [PAGE 1].

Scenario 3 (Prohibited source ingestion): An adapter is configured to scrape a paywalled or login-gated media source after terms/robots review has failed. Verifiable condition: the adapter source URL appears in the prohibited/paywalled/login-gated set or returns HTTP 401/403 during fixture probe. Veto: adapter is disabled by default; no raw snapshot with hash $h$ and parser version $v_p$ is stored from that source. Prediction: the evidence store $\mathcal{E}$ contains zero records with $\mathsf{url}$ from prohibited sources, and the legal risk rating remains MEDIUM rather than escalating to HIGH due to unauthorized scraping [PAGE 1].

Each scenario is falsifiable by fixture-based checks and by repository inspection, satisfying the card's test plan of unit, integration, data-validation, and regression smoke tests using Najee Harris and Rico Dowdle fixtures rather than hardcoded teams [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>