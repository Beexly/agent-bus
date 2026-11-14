---
source: "BUILD-NRT-015-canonical-person-universe-schema.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3373
---

<NATIVE_REASONING>
The user is asking me to act as the GSE + GSI Frontier Reasoning Foundry and produce a deep reasoning artifact based on the provided source text (BUILD-NRT-015 card). They want me to follow strict invariants:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive reasoning response. The source text is 1 page (PAGES: 1). I should cite [PAGE 1] markers and verbatim quotes from the source text.

Let me plan the content:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation about the canonical person universe schema. Gray-zone audit: the tension between "official current evidence wins unless stale or contradicted by newer official transaction evidence" vs conflict record creation; the read-only adapter constraint vs production data mutation; Najee Harris/Rico Dowdle smoke tests; founder roster accuracy cockpit; public/private boundary. Multi-hop: source evidence -> parsing -> snapshot -> reconciliation -> validation -> public rendering -> conflict visibility. Gray zones: "stale" undefined timebound, "contradicted" undefined threshold, staff rules not defined, "do not scrape high-volume" undefined volume threshold, real shipping clone paths unknown, dependency_ids empty but parent_id empty - namespace isolation risk.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations. I need to define:
- Person universe set U = {p_i}
- Evidence snapshot E = (timestamp, URL, hash, parsed record count, parser version, evidence IDs)
- Fact tuple f = (person_id, attribute, value, source, timestamp, confidence)
- Conflict predicate C(f_a, f_b) = 1 iff same person+attribute, different values, sources not identical, temporal overlap
- Staleness predicate S(f, t_now) = 1 iff t_now - t_verified > T_stale (undefined in source - breakdown regime)
- Reconciliation operator R: official current evidence wins unless stale or contradicted by newer official transaction evidence. Formalize as partial order.
- Information units: bits for hash (SHA-256 = 256 bits), timestamp (ISO 8601 / Unix epoch seconds), parser version (semantic versioning tuple).
- Probability units: maybe P(conflict | evidence) but avoid toy equations. State assumptions clearly.
- Page citations: [PAGE 1] with verbatim quotes.

<RETROCAUSAL_GENEALOGY>: Historical lineage - canonical person resolution in sports data (MLBAM, NFLGSIS, Sportradar, Opta), entity resolution theory (Fellegi-Sunter), Master Data Management (MDM), slowly changing dimensions (SCD Type 2), temporal databases. Multi-week traps: stale roster facts persisting across weeks, preseason vs regular season cuts, practice squad elevations, IR designations, COVID/seasonal anomalies, coaching staff changes mid-season.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression - when data breaks, founders revert to "trust the latest tweet/media report" habit; counter-trap is forcing ConflictRecord instead of silent overwrite; clock is the validation cadence (roster:audit, roster:verify etc.) vs real-time transaction velocity. Founder roster accuracy cockpit as the recursive loop.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical layer - no DB mutations, no deploy, read-only adapters. Biomechanical layer - not directly applicable but map to roster fact integrity (body of evidence). Weather veto - not applicable but can discuss environmental data source outages affecting ingestion. Formal veto proof: Veto set = {production DB mutation, deploy, prohibited scraping, high-volume source, credentials}. If any veto triggered, implementation halts.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable veto scenarios:
1. Source adapter attempts write to production DB -> veto, predict rollback via migration rollback + snapshot restore.
2. Stale fact rendered as confirmed without conflict record -> veto, predict trust infrastructure corruption.
3. Najee Harris/Rico Dowdle smoke test hardcodes replacement teams instead of comparing against fixtures -> veto, predict regression failure.

Total word count needs to be >= 1,000 words across sections. THINK_TRACE alone >= 400 words.

I need to be careful not to mention betting lines. No spreads, totals, moneylines, odds. I can mention Najee Harris and Rico Dowdle as smoke tests (they're in the source text). I can mention NFL roster, player pages, staff pages. No betting.

I need formal LaTeX equations, not toy equations. Avoid invented ratios like Force/Fatigue. Use set theory, temporal logic, information theory.

Let me draft carefully with citations [PAGE 1] and verbatim quotes.

Verbatim quotes from source:
- "duplicate_check_status: NET_NEW"
- "matched_existing_ids: none"
- "Canonical person universe schema adds NFL roster/person evidence, reconciliation, validation, or remediation that existing generic cards do not define."
- "Roster facts are trust infrastructure. Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions."
- "The visible workspace is a docs/control lane, not a full app checkout."
- "Existing cards define generic freshness, data source QA, and player surfaces, but not fact-level NFL roster evidence, conflict handling, staff rules, or deploy gates."
- "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites."
- "Store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs. Do not mutate production data."
- "Public surfaces can show current fact, qualified status, and last verified timestamp. Founder/admin surfaces can show source weights, conflicts, parser errors, and raw evidence links. Do not expose proprietary reconciliation logic."
- "Do not scrape private, paywalled, login-gated, prohibited, or high-volume sources."
- "Stale/unknown facts do not render as confirmed."
- "No production database mutation or deploy occurs."
- "Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams."
- Priority P0, Difficulty M.

Now let's write. I'll aim for substantial depth.

Structure:
1. THINK_TRACE (~500-600 words)
2. SOURCE_OPERATORS_AND_EQUATIONS (~300-400 words)
3. RETROCAUSAL_GENEALOGY (~200-300 words)
4. RECURSIVE_THEORY_OF_MIND (~200-300 words)
5. CROSS_LAYER_VETO_ADJUDICATION (~150-250 words)
6. RLVR_COUNTERFACTUAL_VETOES (~200-300 words)

Total should exceed 1,000 words.

Let me write in LaTeX where appropriate.

Equations to include:
- Universe: \mathbb{U} = \{ p \mid p \in \text{Person} \cup \text{PlayerProfile} \cup \text{StaffProfile} \}
- Evidence snapshot: e = (\tau, \nu, h, n, \nu_p, \mathcal{E}) where \tau is timestamp, \nu is URL, h is hash (256-bit), n is parsed record count (dimensionless count), \nu_p is parser version, \mathcal{E} is evidence ID set.
- Fact: f = (p, a, v, s, \tau_v, c) where p \in \mathbb{U}, a attribute, v value, s source, \tau_v verification timestamp, c confidence/probability in [0,1].
- Conflict: C(f_i, f_j) = \mathbb{I}[p_i=p_j \land a_i=a_j \land v_i \neq v_j \land s_i \neq s_j]
- Staleness: S(f, \tau_{\text{now}}) = \mathbb{I}[\tau_{\text{now}} - \tau_v > T_{\text{stale}}] — note T_stale undefined in source, breakdown regime.
- Reconciliation order: f_{\text{official}} \succ f_{\text{open}} \succ f_{\text{fallback}} unless S or newer official transaction.
- ConflictRecord: \mathcal{R} = \{ (f_a, f_b, \tau_{\text{detected}}, \text{status}=\text{open}) \mid C(f_a,f_b)=1 \}

Units:
- timestamp: Unix epoch seconds (s) or ISO 8601
- hash: 256 bits (SHA-256)
- record count: dimensionless integer \in \mathbb{N}_0
- confidence: probability \in [0,1]
- parser version: semantic versioning tuple (dimensionless)

Breakdown regimes: T_stale undefined -> staleness undecidable; source paths unknown -> cannot verify repo root; no production DB access -> cannot run integration against live data; legal review pending for media/fantasy fallback upgrades.

Now write the response. Ensure no betting language. Ensure >=1000 words. Ensure exact XML tags.

Let me compose.
</NATIVE_REASONING>

<THINK_TRACE>
The build card BUILD-NRT-015 requests a canonical person universe schema for an NFL roster truth system, and the derivation proceeds through several dependent hops that must be audited for gray-zone exposure before any implementation step is taken.

Hop 1: Duplicate gate and namespace isolation. The card states duplicate_check_status: NET_NEW with matched_existing_ids: none and reason_not_duplicate that the capability adds "NFL roster/person evidence, reconciliation, validation, or remediation that existing generic cards do not define" [PAGE 1]. Because parent_id and dependency_ids are both empty, the schema is intentionally isolated in the NFL roster truth namespace with instructions to "link back to existing generic source/freshness cards instead of recreating them" [PAGE 1]. The gray zone here is transitive dependency risk: if generic freshness cards later change their person model, this schema has no declared dependency to trigger revalidation, creating a silent drift vector.

Hop 2: Trust infrastructure and corruption surface. The source asserts verbatim: "Roster facts are trust infrastructure. Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions" [PAGE 1]. Multi-hop consequence: a single stale team assignment propagates through Player Lab and GSE Rating before reaching customer-facing search and content. Because the visible workspace is described as "a docs/control lane, not a full app checkout" [PAGE 1], there is no production runtime to observe this corruption in situ; validation must therefore be fixture-simulated rather than live-observed.

Hop 3: Reconciliation formalism and its undefined boundary. The card states: "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites" [PAGE 1]. This defines a partial order over evidence classes (official > open-data > fallback), but leaves two critical predicates undefined: (a) the staleness horizon T_stale after which "official current evidence" loses priority, and (b) the contradiction threshold for "contradicted by newer official transaction evidence." Without these, the reconciliation operator is partially specified. A fact can be neither officially stale nor officially contradicted yet still be wrong, and the card provides no default quarantine rule for that indeterminate zone.

Hop 4: Evidence snapshot design and immutability. The ingestion plan requires raw source snapshots with "timestamp, URL, hash, parsed record count, parser version, and evidence IDs" and explicitly commands "Do not mutate production data" [PAGE 1]. This is a write-once evidence ledger pattern. The gray zone is parser version drift: if parser_version changes but historical snapshots are not re-parsed, the hash and record count become non-comparable across versions, breaking longitudinal audit.

Hop 5: Public/private boundary and information leakage. Public surfaces may show "current fact, qualified status, and last verified timestamp," while founder/admin surfaces may show "source weights, conflicts, parser errors, and raw evidence links," with the instruction "Do not expose proprietary reconciliation logic" [PAGE 1]. The gray zone is the boundary between "qualified status" and internal conflict state: if a public qualified status implicitly reveals that a conflict exists (e.g., by showing "pending" vs "confirmed"), the proprietary reconciliation logic is partially leaked through the UI contract.

Hop 6: Legal/TOS and ingestion surface. Only official/public sources after terms and robots review; no scraping of "private, paywalled, login-gated, prohibited, or high-volume sources"; media/fantasy sources are fallback/corroboration unless legally upgraded [PAGE 1]. The gray zone is the undefined volume threshold for "high-volume" and the absence of a documented robots-review artifact, meaning the first probe could violate the constraint before the review is recorded.

Hop 7: Smoke tests and regression anchoring. Najee Harris and Rico Dowdle smoke tests must "compare rendered facts against current source evidence fixtures, not hardcoded replacement teams" [PAGE 1]. This prevents the counter-trap of baking in a known transaction (e.g., a trade or release) as a hardcoded expected value, which would pass after the fact but fail to detect upstream source regression.

Overall audit: the card is P0, difficulty M, with MEDIUM legal, source, and maintenance risk. The primary trust risk is making a stale or conflicted fact look confirmed [PAGE 1]. Because real shipping clone paths are unknown, the first implementation hop must be repository discovery before any type or fixture work.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the canonical person universe be defined over [PAGE 1] as the disjoint union of the three data-model entities:

\mathbb{U} = \{ p \mid p \in \text{Person} \sqcup \text{PlayerProfile} \sqcup \text{StaffProfile} \}

Each evidence snapshot e ingested by a read-only adapter is a tuple:

e = (\tau, \nu, h, n, \nu_{\text{parser}}, \mathcal{E})

where:
- \tau is the capture timestamp in Unix epoch seconds (s) or ISO 8601,
- \nu is the source URL (string, subject to robots/terms review per [PAGE 1]),
- h is the content hash, 256 bits if SHA-256 is used,
- n is the parsed record count, a dimensionless integer n \in \mathbb{N}_0,
- \nu_{\text{parser}} is the parser version, a semantic versioning tuple,
- \mathcal{E} is the set of evidence IDs extracted from the source.

Per [PAGE 1], raw snapshots are stored with these fields and production data is never mutated.

A roster fact f is a typed tuple:

f = (p, a, v, s, \tau_v, c)

where p \in \mathbb{U}, a is the attribute (team, jersey number, status, staff role, etc.), v is the value, s is the source class \{official, open-data, fallback\}, \tau_v is the last-verified timestamp, and c is a confidence probability c \in [0,1]. Units: \tau_v in seconds since epoch; c dimensionless probability.

Define the conflict predicate between two facts:

C(f_i, f_j) = \mathbb{I}[p_i = p_j \land a_i = a_j \land v_i \neq v_j \land s_i \neq s_j]

When C(f_i, f_j) = 1, the reconciliation plan [PAGE 1] mandates a ConflictRecord entry rather than silent overwrite:

\mathcal{R} \ni (f_a, f_b, \tau_{\text{detected}}, \text{status}=\text{open})

Define staleness with an as-yet-undefined horizon:

S(f, \tau_{\text{now}}) = \mathbb{I}[\tau_{\text{now}} - \tau_v > T_{\text{stale}}]

Breakdown regime: T_stale is not specified in [PAGE 1]. Until a value is set in days (d) or seconds (s), staleness is undecidable and any fact near the boundary is in the gray zone. Per [PAGE 1], stale/unknown facts must not render as confirmed.

Reconciliation priority is a partial order:

f_{\text{official}} \succ f_{\text{open}} \succ f_{\text{fallback}}

unless S(f, \tau_{\text{now}}) = 1 or a newer official transaction evidence exists with \tau_v' > \tau_v. Public rendering shows only (current fact, qualified status, \tau_v); founder/admin surfaces may expose source weights, conflicts, parser errors, and raw evidence links, but not proprietary reconciliation logic [PAGE 1].

Validation operators to be implemented: roster:audit, roster:verify, roster:conflicts, roster:stale, test:roster. Until implemented, validation is via source inventory, fixtures, and generated JSONL/card checks [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The canonical person universe schema draws on a long lineage of entity-resolution and master-data-management practice. In sports-data engineering, the problem of uniquely identifying a person across teams, leagues, and role transitions mirrors the historical evolution of league central registries (e.g., NFLGSIS, MLBAM) and third-party entity-resolution services (Sportradar, Opta). The theoretical foundation is the Fellegi-Sunter model of record linkage, extended here to a temporal roster context where the same person may hold multiple statuses across a season (active, injured reserve, practice squad, suspended).

The slowly-changing-dimension (SCD Type 2) pattern is directly relevant: each person record carries effective timestamps so that historical team or number assignments remain queryable while current facts are distinguished. The BUILD-NRT-015 card adopts a simplified variant: raw snapshots are immutable, conflicts create ConflictRecord entries, and stale facts do not render as confirmed [PAGE 1]. This is a bitemporal-lite design valid only if T_stale and conflict thresholds are eventually pinned.

Multi-week traps arise because NFL roster truth is not static. Week 1 roster cuts, preseason-to-regular-season transitions, in-season waiver claims, practice-squad elevations, and mid-season coaching staff changes all generate fact volatility that a static schema would misrepresent. If the staleness horizon T_stale is set too long, a player cut in Week 3 remains "current" on public pages through Week 6, corrupting Player Lab and GSE Rating per [PAGE 1]. If set too short, normal transaction latency (official NFL transaction wire vs. open-data propagation) creates artificial conflicts. The card's smoke-test anchors—Najee Harris and Rico Dowdle—are chosen because both have documented transaction histories that exercise roster-boundary behavior, but the fixtures must represent current source evidence rather than hardcoded team replacements [PAGE 1].

Staff rules are explicitly noted as absent from existing cards [PAGE 1], which introduces a second genealogical risk: coach and front-office turnover often lags player transaction reporting, so staff truth may decay on a different timescale than player truth. A unified person universe must allow role-specific staleness horizons rather than one global T_stale.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The founder roster accuracy cockpit described in [PAGE 1] is a recursive control loop in which human operators observe system state and adjust ingestion weights. The crisis habit regression is the tendency, under data pressure, to privilege the most recent visible signal—typically a media or social report—over the official evidence hierarchy, effectively collapsing s_{\text{official}} \succ s_{\text{open}} \succ s_{\text{fallback}} into s_{\text{loudest}} \succ all others. This habit is dangerous because [PAGE 1] designates media/fantasy sources as fallback/corroboration only unless legal approval upgrades them.

The counter-trap is the mandatory ConflictRecord. By forcing conflicts into an internal visible structure instead of allowing silent overwrites [PAGE 1], the system makes the regression legible: when a founder sees two conflicting facts for the same person and attribute, the UI must expose the conflict rather than auto-resolve toward the newest tweet. The clock is the validation cadence: roster:audit, roster:verify, roster:conflicts, roster:stale, and test:roster [PAGE 1] must execute on a schedule shorter than the transaction velocity of the NFL offseason and waiver wire. If validation lapses, the cockpit loses situational awareness and stale facts begin rendering as confirmed—the primary trust risk identified in [PAGE 1].

Recursion closes through the public/private boundary: public consumers see only current fact, qualified status, and \tau_v, while founders see source weights and conflicts. If the public surface ever implies conflict state through its qualified-status taxonomy, the founder's mental model of what is "internal" leaks outward, breaking the boundary. The theory-of-mind model assumes founders will not hardcode smoke-test expectations for Najee Harris and Rico Dowdle; if they do, the regression becomes self-confirming and blind to upstream fixture drift [PAGE 1].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Veto layers are evaluated before any code path touches the real repository. The physical layer veto is absolute: no production database mutations, no deployment, no live cron execution, and no access to secrets or credentials [PAGE 1]. Any script that issues a WRITE, INSERT, UPDATE, or DDL against production is vetoed; rollback proceeds only through migration rollback and snapshot restore after backup verification [PAGE 1].

The biomechanical layer maps to roster-fact integrity: the "body of evidence" must not be moved or forged. The hash h (256 bits) and evidence IDs \mathcal{E} in each snapshot [PAGE 1] provide tamper evidence. A veto fires if a parser normalizes or cleans a raw value before snapshotting, because the parsed record count n and hash h would then describe a transformed artifact rather than source truth.

The weather/environmental layer is indirect: source outages, robots.txt changes, or terms-of-service updates can make an official source temporarily unavailable. Under [PAGE 1], fallback to media/fantasy sources requires legal approval; absent that approval, ingestion must halt rather than downgrade silently. The veto condition is therefore:

V = \{ \text{production DB mutation}, \text{deploy}, \text{prohibited source}, \text{high-volume scrape}, \text{credential use}, \text{missing TOS/robots review} \}

If any v \in V is true, the implementation remains docs-first, type-only, or disabled-by-default per [PAGE 1]. Adjudication order: legal/TOS review precedes adapter construction; fixture-backed probes precede live probes; disabled-by-default precedes enabled rendering.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: A source adapter attempts a production database write during fixture-backed integration testing.
Veto trigger: physical-layer violation of "Do not mutate production data" [PAGE 1].
Verifiable check: git diff shows no migration files or production schema changes; database connection strings are absent from the new code path.
Prediction: If unvetoed, the rollback plan requires migration rollback and snapshot restore after backup verification [PAGE 1]; if vetoed, the build remains disabled-by-default and no production state changes.

Scenario 2: A stale fact for Najee Harris or Rico Dowdle renders on a public player page as "confirmed" because the roster:stale check has not yet been implemented or T_stale is undefined.
Veto trigger: violation of "Stale/unknown facts do not render as confirmed" [PAGE 1].
Verifiable check: public rendered facts carry \tau_v and qualified status; a query against fixtures shows \tau_{\text{now}} - \tau_v > T_stale for at least one fact while UI displays confirmed status.
Prediction: Without the veto, trust infrastructure corruption propagates to Player Lab and GSE Rating per [PAGE 1]; with the veto, the fact is withheld or marked qualified/unconfirmed until roster:stale passes.

Scenario 3: The smoke test hardcodes a replacement team for Najee Harris or Rico Dowdle instead of comparing rendered facts against current source evidence fixtures.
Veto trigger: violation of the regression-test contract in [PAGE 1].
Verifiable check: test source contains no literal team assignments for these players; assertions reference fixture-loaded evidence records only.
Prediction: If unvetoed, the test passes after a known transaction but regresses silently when source fixtures update; if vetoed, the test fails on fixture drift and forces reconciliation review before deployment.
</RLVR_COUNTERFACTUAL_VETOES>