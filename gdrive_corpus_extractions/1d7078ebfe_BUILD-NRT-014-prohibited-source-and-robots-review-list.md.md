---
source: "BUILD-NRT-014-prohibited-source-and-robots-review-list.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3152
---

<NATIVE_REASONING>
The user has provided a source document about BUILD-NRT-014 (Prohibited source and robots review list) and wants me to act as the GSE + GSI Frontier Reasoning Foundry. I need to follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. Formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source text is 1 page (PAGES: 1). I need to cite [PAGE 1] markers and verbatim quotes.

Let me analyze the document:
- It's BUILD-NRT-014: Prohibited source and robots review list
- Duplicate gate: DEPENDENCY, matched_existing_ids: BUILD-GV2-098
- Goal: Prohibited source and robots review list for NFL roster truth system
- Roster facts are trust infrastructure
- Current problem: visible workspace is docs/control lane, not full app checkout
- Source proof needed: all public sources
- Data model: SourceRegistry
- Ingestion: read-only source adapters, fixture-based probes first, store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, evidence IDs
- Reconciliation: official current evidence wins unless stale/contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries.
- Validation: roster:audit, roster:verify, roster:conflicts, roster:stale, test:roster
- Public/Private Boundary: public shows current fact, qualified status, last verified timestamp. Founder/admin shows source weights, conflicts, parser errors, raw evidence links.
- Legal/TOS Boundary: official/public sources only after terms and robots review. No scrape private, paywalled, login-gated, prohibited, high-volume.
- Repo Context: docs/research/nfl-roster-truth. Files to avoid: production DB migrations, deployment config, secrets, live cron jobs, credential sources.
- Implementation Plan: 6 steps
- Acceptance Criteria: duplicate gate honored, source evidence design, conflicts visible internally, stale/unknown facts don't render confirmed, no production DB mutation/deploy.
- Test Plan: Unit integration data validation regression with Najee Harris and Rico Dowdle smoke tests.
- Rollback Plan: remove disabled script/types/docs, delete generated fixtures, leave production data untouched.
- Priority P0, Difficulty S, Risks MEDIUM.
- Claude Code Prompt: execute only BUILD-NRT-014.

I need to treat this as a reasoning exercise, not actually executing code (since I cannot access the file system). I should produce the XML sections with deep reasoning.

Key constraints:
- Zero betting lines: This document has nothing about betting, so easy to avoid.
- Zero toy equations: I need formal LaTeX equations. I can define source verification probability, conflict entropy, staleness decay, etc., with proper units and assumptions.
- Cite [PAGE 1] with verbatim quotes.

Let me structure:

<THINK_TRACE> (>=400 words)
- Multi-hop derivation: from source card to system properties
- Gray-zone audit: ambiguities in "all public sources", "robots review", "high-volume", stale vs fresh thresholds, duplicate gate dependency status
- Formal reasoning about conflict resolution monotonicity, staleness as function of time, evidence weight lattice

<SOURCE_OPERATORS_AND_EQUATIONS>
- Define SourceRegistry schema formally
- Define evidence freshness F(t) = exp(-λ(t - t_verified)) or similar with units
- Conflict operator C = argmax or ConflictRecord creation
- Robots.txt compliance predicate R(source) ∈ {0,1}
- Staleness operator S: fact rendered confirmed iff freshness > threshold AND no conflict
- Cite [PAGE 1] verbatim quotes
- Breakdown regimes: λ → ∞ (instant staleness), missing robots.txt, duplicate gate dependency unresolved

<RETROCAUSAL_GENEALOGY>
- Historical lineage: data provenance, source registry patterns, robots.txt (1994), NFL transaction reporting, Najee Harris/Rico Dowdle as regression anchors
- Multi-week traps: stale roster facts persisting across weeks, conflict silent overwrites, source freshness drift

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: under pressure, silent overwrite vs conflict record
- Counter-trap: treating fallback media as primary
- Clock: validation cadence vs transaction velocity (NFL trades, waivers, injuries)

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical layer: no production DB mutation
- Biomechanical: parser version drift, hash collision
- Weather: not really applicable but can frame as environmental source volatility
- Veto proof: any layer can veto deploy

<RLVR_COUNTERFACTUAL_VETOES>
- 3 verifiable scenarios with predictions
- Example: Scenario 1: robots.txt disallows NFL source → veto ingestion, prediction: fixture only
- Scenario 2: ConflictRecord exists for Najee Harris team → public renders qualified/unconfirmed, not confirmed
- Scenario 3: stale threshold exceeded for Rico Dowdle status → does not render confirmed, triggers roster:stale alert

Word count: need >= 1000 words total across sections, with THINK_TRACE >= 400 words.

Let me write this carefully, ensuring formal LaTeX, units, assumptions, singularity/breakdown regimes, [PAGE 1] citations and verbatim quotes.

Verbatim quotes from [PAGE 1]:
- "Roster facts are trust infrastructure."
- "Official current evidence wins unless stale or contradicted by newer official transaction evidence."
- "Conflicts create ConflictRecord entries instead of silent overwrites."
- "Use official/public sources only after terms and robots review."
- "Do not scrape private, paywalled, login-gated, prohibited, or high-volume sources."
- "Stale/unknown facts do not render as confirmed."
- "No production database mutation or deploy occurs."
- "Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams."

Equations:
Let me define:
- SourceRegistry: S = {s_i} where each s_i = (url, hash_t, timestamp, record_count, parser_version, evidence_ids)
- Freshness: φ(s_i, t_now) = t_now - t_verified(s_i) [seconds]
- Staleness predicate: σ(s_i, t_now) = 1 iff φ > τ_stale [seconds]
- Evidence trust weight: ω(s_i) ∈ [0,1] dimensionless, official > open-data > fallback
- Conflict operator: given facts f_a from s_a, f_b from s_b about same entity attribute:
  if t_verified(s_b) > t_verified(s_a) and s_b is official transaction: f_winner = f_b, create ConflictRecord(f_a, f_b, t_conflict)
  else if conflict and no temporal resolution: create ConflictRecord, render status = qualified/unconfirmed
- Public render predicate: ρ(f) = 1 iff ¬σ ∧ ¬conflict(f) ∧ ω(source) ≥ ω_min
- Robots compliance: R(s) = 1 iff robots.txt permits path ∧ terms accepted
- Ingestion gate: Γ(s) = R(s) ∧ ¬paywalled(s) ∧ ¬login_gated(s) ∧ volume(s) < V_max

Breakdown regimes:
- τ_stale → 0: all facts stale immediately (singularity)
- ω_min → 1: no public facts render
- R(s) = 0: ingestion veto, fixture-only mode
- Duplicate gate DEPENDENCY unresolved: BUILD-GV2-098 not merged, cardinality risk

Now let me draft the content. I need to be careful to not mention betting lines at all.

Let me write each section with substantial depth.

THINK_TRACE >= 400 words. I'll aim for ~500-600 words there.

Total >= 1000 words across all sections.

Let's write.

I'll structure the response with the exact XML tags.

Make sure to include [PAGE 1] citations after quotes and facts drawn from the source.

Let's compose carefully.
</NATIVE_REASONING>

<THINK_TRACE>
The source card BUILD-NRT-014 [PAGE 1] establishes a dependency relationship, not a duplicate: "duplicate_check_status: DEPENDENCY / matched_existing_ids: BUILD-GV2-098 / reason_not_duplicate: Prohibited source and robots review list adds NFL roster/person evidence, reconciliation, validation, or remediation that existing generic cards do not define." This means the roster-truth namespace cannot treat BUILD-NRT-014 as replaceable by generic freshness or source-QA cards. The first multi-hop inference is that any implementation must preserve the generic cards as dependencies while adding fact-level NFL roster evidence, conflict handling, staff rules, and deploy gates specific to the NFL domain.

A second hop follows from the trust-infrastructure claim: "Roster facts are trust infrastructure. Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions" [PAGE 1]. Because the corruption surface spans downstream consumer systems (Player Lab, GSE Rating), the staleness and conflict operators must be defined at the fact granularity, not the source granularity. A single stale "status" fact for one player can invalidate a GSE Rating computation that aggregates across many players; therefore the validation predicate must be fact-level and must prevent stale/unknown facts from rendering as confirmed [PAGE 1].

The gray-zone audit centers on three underspecified boundaries. First, "all public sources" under Source Proof Needed lacks a source-weight hierarchy; without an explicit weight lattice ω(s_i) ∈ [0,1], reconciliation cannot deterministically prefer official over open-data over fallback [PAGE 1]. Second, "official current evidence wins unless stale or contradicted by newer official transaction evidence" [PAGE 1] defines a temporal priority rule but gives no staleness threshold τ_stale in SI units (seconds), creating a breakdown regime where τ_stale → 0 renders every fact stale immediately, while τ_stale → ∞ permits permanent stale confirmation. Third, "high-volume sources" in the legal/TOS boundary is undefined; without a volume cap V_max (records/hour), the ingestion gate Γ(s) cannot reject a legal but abusive scrape [PAGE 1].

The reconciliation operator must satisfy monotonicity: newer official transaction evidence overrides older official evidence, but conflicts that lack temporal resolution produce ConflictRecord entries rather than silent overwrites [PAGE 1]. This non-destructive conflict preservation is the critical trust guardrail. The ingestion plan's read-only constraint ("Do not mutate production data") and the rollback plan ("leave existing production data untouched") impose a physical veto at the storage layer: any implementation step that issues INSERT/UPDATE/DELETE against the production roster table is an automatic veto scenario.

The Najee Harris and Rico Dowdle smoke tests [PAGE 1] serve as regression anchors because they compare rendered facts against source evidence fixtures rather than hardcoded replacement teams, preventing the counter-trap of encoding known-trade outcomes into test expectations. Multi-week traps emerge when a Week 3 trade or waiver claim is not re-verified before Week 4 rendering; the stale operator σ(s, t_now) must fire on transaction-velocity timescales (NFL trades, waivers, injury designations), not on generic content-refresh cadences.

Finally, the duplicate-gate dependency on BUILD-GV2-098 means that until that prerequisite is resolved, BUILD-NRT-014 has unresolved approval dependency risk. The implementation must remain docs-first, type-only, or disabled-by-default, with no production database mutation or deploy [PAGE 1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the SourceRegistry contain source entries indexed by i:

s_i = (url_i, hash_i, t_i, n_i, v_i, E_i)

where url_i is the source URL string, hash_i is the raw snapshot content hash (SHA-256, 256 bits), t_i ∈ ℝ is the verification timestamp in Unix seconds (s), n_i ∈ ℕ is the parsed record count (dimensionless count), v_i is the parser version string (semantic version), and E_i ⊂ ℕ is the set of evidence IDs (dimensionless identifiers). This formalization follows the ingestion plan: "Store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs" [PAGE 1].

Define source age at evaluation time t_now:

φ(s_i, t_now) = t_now - t_i [s]

Define staleness predicate with threshold τ_stale [s]:

σ(s_i, t_now) = 1 iff φ(s_i, t_now) > τ_stale, else 0

Assume τ_stale is configurable per source class (official, open-data, fallback). Breakdown regime: τ_stale → 0 s ⇒ σ ≡ 1 for all entries (total staleness singularity); τ_stale → ∞ s ⇒ σ ≡ 0 (no staleness detection, permanent stale confirmation risk).

Assign evidence trust weight:

ω(s_i) ∈ [0,1], dimensionless, with partial order ω_official > ω_open-data > ω_fallback.

Define robots/terms compliance predicate:

R(s_i) = 1 iff robots.txt permits the fetch path ∧ terms of service accepted ∧ ¬paywalled(s_i) ∧ ¬login_gated(s_i) ∧ volume_rate(s_i) < V_max [records/hour]

else R(s_i) = 0. This implements: "Use official/public sources only after terms and robots review. Do not scrape private, paywalled, login-gated, prohibited, or high-volume sources" [PAGE 1]. Breakdown regime: V_max undefined ⇒ ingestion gate cannot reject high-volume legal sources; R(s_i) = 0 ⇒ fixture-only ingestion mode (disabled-by-default).

Conflict operator for two facts f_a, f_b about the same entity attribute from sources s_a, s_b:

If R(s_a)=0 or R(s_b)=0: veto ingestion for the non-compliant source.
Else if t_b > t_a and s_b is official transaction evidence: f_winner = f_b; create ConflictRecord(f_a, f_b, t_conflict=t_now).
Else if conflict without temporal resolution: create ConflictRecord(f_a, f_b, t_conflict=t_now); render status = qualified/unconfirmed, not confirmed.

This encodes: "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites" [PAGE 1].

Public render predicate for fact f with source s:

ρ(f) = 1 iff ¬σ(s, t_now) ∧ ¬conflict_pending(f) ∧ ω(s) ≥ ω_min ∧ R(s) = 1

Else ρ(f) = 0 and the fact renders as unconfirmed/qualified with last verified timestamp t_i. Public surfaces show "current fact, qualified status, and last verified timestamp" [PAGE 1]; founder/admin surfaces may expose source weights, conflicts, parser errors, and raw evidence links, but not proprietary reconciliation logic [PAGE 1].

Acceptance-criterion invariant: no fact with ρ(f)=0 shall render as confirmed; stale/unknown facts do not render as confirmed [PAGE 1]; no production database mutation or deploy occurs [PAGE 1].

Validation tests: roster:audit, roster:verify, roster:conflicts, roster:stale, test:roster [PAGE 1]. Regression smoke tests for Najee Harris and Rico Dowdle compare rendered facts against current source evidence fixtures, not hardcoded replacement teams [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The source card sits in a lineage of data-provenance and robots-exclusion standards. Robots.txt originated in 1994 as a web crawler consent mechanism; BUILD-NRT-014 extends that principle into NFL roster ingestion by requiring "terms and robots review" before any public source use [PAGE 1]. The SourceRegistry pattern echoes append-only event sourcing and immutable raw snapshots (timestamp, URL, hash, parser version, evidence IDs) [PAGE 1], a design intended to make roster truth auditable even when downstream reconciliations change.

Within the GSE/GSI domain, the prerequisite dependency BUILD-GV2-098 represents a generic source/freshness layer. BUILD-NRT-014 does not supersede it; rather, it adds NFL-specific fact-level evidence, conflict handling, staff rules, and deploy gates [PAGE 1]. This creates a multi-week trap: if BUILD-GV2-098 remains unresolved, BUILD-NRT-014 cannot safely graduate from docs-first/type-only to live ingestion because the duplicate gate is honored as a hard dependency [PAGE 1].

The Najee Harris and Rico Dowdle anchors [PAGE 1] are historically loaded. Both are running backs whose team/status facts change via trades, waivers, or injury designations—high-velocity NFL transaction events. A roster-truth system that caches their facts without re-verification across a transaction window (e.g., between waiver cutdowns and Week 1) will emit stale confirmed facts. The card's validation plan explicitly targets this by requiring roster:stale and fixture-based regression rather than hardcoded expected teams [PAGE 1].

Another historical trap is the "silent overwrite" anti-pattern: generic cards may define freshness and QA but not conflict handling [PAGE 1]. Without ConflictRecord entries, a newer fallback source could quietly overwrite an older official fact, corrupting Player Lab and GSE Rating downstream [PAGE 1]. BUILD-NRT-014 breaks this trap by making conflicts visible internally [PAGE 1].

Multi-week risk also arises from source freshness drift: official NFL transaction evidence may arrive after a fantasy/media fallback has already updated a player's team. The temporal priority rule ("newer official transaction evidence wins") [PAGE 1] requires the system to re-open previously confirmed facts when newer official evidence arrives, which conflicts with a "set-and-forget" publication cadence.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis-habit regression: when roster pressure mounts (pre-game roster release, late-breaking trade, injury wave), operators regress to the simplest habit—overwrite the fact with the newest available signal, regardless of source class. BUILD-NRT-014's reconciliation plan explicitly forbids silent overwrites and mandates ConflictRecord entries [PAGE 1]. A system designer who regresses to overwrite behavior would violate the core acceptance criterion that conflicts are visible internally [PAGE 1].

Counter-trap: treating media/fallback sources as primary. The card designates media/fantasy sources as fallback/corroboration "unless legal approval upgrades them" [PAGE 1]. Under time pressure, an operator might promote a fantasy site's breaking news over an unconfirmed official signal, especially if the official source is slow to publish. The counter-trap is that official evidence must retain temporal priority even when it arrives later, because the rule states newer official transaction evidence contradicts older evidence [PAGE 1].

Clock: NFL transaction velocity operates on sub-daily timescales (waivers at 4 p.m. ET, trade deadline moves, in-season injury designations). The validation clock must therefore run roster:audit, roster:verify, roster:conflicts, and roster:stale at a frequency shorter than the transaction window, or stale facts will persist across weeks [PAGE 1]. A weekly validation cadence is insufficient for a trust infrastructure feeding Player Lab and GSE Rating [PAGE 1]. The staleness threshold τ_stale [s] must be set below the inter-transaction interval for high-volatility positions (RB, WR, QB status).

Recursive model of the operator: they believe "fresh = correct" and will rush to publish new facts. The system must instead enforce "fresh ∧ official ∧ ¬conflict ∧ robots-compliant = confirmed" [PAGE 1]. Any deviation—especially rendering a stale/unknown fact as confirmed—is a critical trust failure [PAGE 1].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: The implementation plan and rollback plan prohibit production database mutation and deployment [PAGE 1]. Files to avoid include production DB migrations, deployment config, secrets, live cron jobs, and credential-requiring sources [PAGE 1]. Any proposed step that touches these layers is vetoed outright; the build must remain docs-first, type-only, or disabled-by-default using fixtures or low-volume legal probes [PAGE 1].

Biomechanical layer veto: Parser version drift (v_i changes) alters n_i and E_i without changing url_i or hash_i, creating apparent record-count deltas that are actually parsing artifacts. The SourceRegistry must treat (url_i, hash_i, v_i) as a composite key; a parser version bump invalidates prior parsed records and requires re-parse of the frozen snapshot, not mutation of production evidence. Hash collisions (2^-256 probability per pair) are treated as breakdown regime: if hash_i repeats for different content, the evidence ID binding is suspect and the snapshot must be quarantined.

Weather layer: not meteorological, but environmental source volatility. NFL official sources may be temporarily unreachable, paywalled after a terms change, or rate-limited. The ingestion gate Γ(s) = R(s) ∧ ¬paywalled ∧ ¬login_gated ∧ volume < V_max [PAGE 1] must be re-evaluated per probe; a source that passes R(s_i)=1 today may fail tomorrow, triggering a fallback to fixtures and a stale-flag on affected facts until re-ingestion succeeds.

Adjudication order: (1) Robots/terms compliance R(s_i); (2) volume/paywall/login-gated exclusion; (3) duplicate-gate dependency BUILD-GV2-098 status; (4) staleness σ(s_i, t_now); (5) conflict visibility via ConflictRecord. A veto at any layer blocks public confirmation ρ(f)=0 and routes the fact to founder/admin review with qualified status and last verified timestamp [PAGE 1].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Robots.txt disallows the official NFL roster path, but a fantasy aggregator mirrors the same fact.
Veto: R(s_official)=0 ⇒ ingestion veto for the official source; fallback source permitted only as corroboration, not primary [PAGE 1].
Prediction: Public rendering for Najee Harris shows status = qualified/unconfirmed with last verified timestamp from the last compliant fixture; no fact renders as confirmed until robots/terms review is resolved [PAGE 1]. Roster:stale test fires after τ_stale elapses without compliant re-verification.

Scenario 2: ConflictRecord exists for Rico Dowdle's team because official transaction evidence (newer, t_b > t_a) contradicts an older open-data record.
Veto: Conflict is visible internally; public fact remains unconfirmed/qualified [PAGE 1]. Silent overwrite is forbidden.
Prediction: GSE Rating and Player Lab consume the unconfirmed status, not the newer team, until reconciliation approves; roster:conflicts test returns the ConflictRecord entry; founder cockpit displays source weights and parser evidence [PAGE 1].

Scenario 3: τ_stale misconfigured to ∞ s, or production migration is attempted.
Veto: σ never fires, permitting permanent stale confirmation; physical layer veto blocks migration [PAGE 1].
Prediction: test:roster and roster:stale checks fail; rollback plan executes—remove disabled scripts/types/docs, delete generated fixtures, leave production data untouched [PAGE 1]. No deploy occurs; BUILD-NRT-014 remains in disabled-by-default state pending BUILD-GV2-098 resolution and legal approval [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>