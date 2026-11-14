---
source: "BUILD-NRT-001-roster-source-inventory-and-tos-matrix.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4936
---

<NATIVE_REASONING>
The user wants me to process a source document about an NFL roster truth system build card (BUILD-NRT-001). They want me to act as the "GSE + GSI Frontier Reasoning Foundry" with strict invariants:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to produce >= 1,000 words total across these sections. The THINK_TRACE alone needs >= 400 words.

The source text is 1 page (PAGES: 1). I need to cite exact [PAGE 1] markers and verbatim quotes.

Let me analyze the source document content:
- BUILD-NRT-001: Roster source inventory and TOS matrix
- Duplicate check status: DEPENDENCY, matched_existing_ids: BUILD-GV2-098
- Goal: Roster source inventory and TOS matrix for NFL roster truth system
- Source Proof Needed: SRC-001, SRC-002, SRC-006
- Product Surface: internal data quality
- Ingestion Plan: read-only source adapters or fixture-based probes first. Store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, evidence IDs. Do not mutate production data.
- Reconciliation Plan: Compare official, open-data, fallback records fact-by-fact. Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites.
- Validation Plan: roster:audit, roster:verify, roster:conflicts, roster:stale, test:roster
- Public/Private Boundary details
- Legal/TOS Boundary: official/public sources only after terms and robots review
- Implementation Plan steps 1-6
- Acceptance Criteria
- Test Plan: Unit, Integration, Data validation, Regression (Najee Harris and Rico Dowdle smoke tests)
- Rollback Plan
- Priority P0, Difficulty S, Risks MEDIUM

I must NOT mention betting lines. This is about NFL roster data infrastructure, not betting, so that's easy.

I must NOT invent toy equations. I need formal LaTeX equations. Since this is about data engineering/roster truth, I can formulate:
- A conflict detection operator
- A staleness function
- A source weighting/trust function
- Information-theoretic units (bits, Shannon entropy) for evidence
- Probability units for source reliability
- Formal set definitions for roster facts

I need to cite [PAGE 1] and include verbatim quotes from the source text.

Let me plan the sections:

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. I need to trace the dependency from BUILD-NRT-001 to BUILD-GV2-098, analyze the reconciliation plan, the legal/TOS boundary, the Najee Harris and Rico Dowdle smoke tests, the rollback plan, etc. Audit gray zones: "official current evidence wins unless stale or contradicted" - what defines stale? How is "contradicted" measured? The document says "Source risk: MEDIUM" but doesn't define staleness thresholds. That's a gray zone. Also "media/fantasy sources are fallback/corroboration unless legal approval upgrades them" - this creates a two-tier evidence system with undefined upgrade criteria.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations.
- Define roster fact space F = {(player_id, attribute, value, t, source_id, evidence_id)}
- SourceRegistry S: mapping source_id -> (url, hash, timestamp, parser_version, record_count, terms_status)
- Conflict operator: C(f1, f2) = 1 if value differs and sources conflict
- Staleness operator: τ(f) = t_now - t_evidence; stale if τ > Δ_max (undefined in source - breakdown regime)
- Trust/reliability: R(source) ∈ [0,1] probability units; Shannon entropy H(S) = -Σ p log p bits
- Reconciliation: argmax over source weights with ConflictRecord creation
- Units: seconds for timestamps, SHA-256 hashes, bits for information, probability for reliability

RETROCAUSAL_GENEALOGY: Historical lineage. NFL roster truth systems, source registries, data lineage. Multi-week traps: injuries, trades, practice squad moves, roster cuts that make a fact valid in week N but stale in week N+1. Najee Harris (Pittsburgh Steelers RB, though he moved to Buffalo in 2025? Actually Najee Harris signed with Buffalo Bills in 2025 free agency. But I should be careful not to assert current facts without source. The document mentions them as smoke tests comparing against fixtures, not hardcoded replacement teams.)

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is about what happens when data quality breaks down during a crisis (e.g., roster cutdown day, trade deadline). Crisis habit regression = reverting to silent overwrites or unverified sources under pressure. Counter-trap = forcing ConflictRecord creation even under time pressure. Clock = staleness ticking, freeze windows before games.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Hmm, this section is usually about physical constraints. For roster data, I can adapt: "physical" = server/storage constraints, "biomechanical" = human data entry limits, "weather" = external disruptions (weather affecting data collection? or NFL game postponements affecting roster status?). I need to make it a veto proof - conditions under which the build must be vetoed. E.g., if legal/TOS review not complete (veto), if production DB mutation detected (veto), if scraping prohibited sources (veto).

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? I need 3 scenarios:
1. Silent overwrite of conflicted Najee Harris team fact -> veto triggered by ConflictRecord absence.
2. Stale Rico Dowdle status rendered as confirmed -> veto by stale check.
3. Scraping paywalled source despite robots.txt prohibition -> veto by legal/TOS boundary.

Each with prediction of what happens if not vetoed.

Word count: Need >=1000 words total. THINK_TRACE >=400 words.

Let me write carefully with LaTeX equations.

Let me draft:

THINK_TRACE: 
- Start with duplicate gate: DEPENDENCY on BUILD-GV2-098. Multi-hop: NRT-001 depends on GV2-098 which is prerequisite for roster truth implementation. NRT-001 adds NFL roster/person evidence not defined by generic cards.
- Gray zone 1: Staleness definition. Quote: "Official current evidence wins unless stale or contradicted by newer official transaction evidence." No Δ_max given. This is a singularity/breakdown regime: without a defined staleness horizon, "stale" is uncomputable.
- Gray zone 2: Conflict definition. "Conflicts create ConflictRecord entries instead of silent overwrites." But no formal equality test on values (e.g., team abbreviation vs full name, jersey number formatting).
- Gray zone 3: Legal/TOS upgrade path for media/fantasy sources. "Media/fantasy sources are fallback/corroboration unless legal approval upgrades them." No criteria for upgrade.
- Gray zone 4: Regression smoke tests for Najee Harris and Rico Dowdle. "compare rendered facts against current source evidence fixtures, not hardcoded replacement teams." Risk of fixture drift.
- Multi-hop: Ingestion -> raw snapshots -> reconciliation -> validation -> public/private boundary. Each hop has failure modes.
- Word count target: 400+.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define formal notation.
- LaTeX equations for:
  1. Source snapshot record: \mathcal{S} = \{ (s_i, \text{url}_i, h_i, t_i, v_i, n_i, e_i) \}
  2. Roster fact: f = (p, a, \nu, \tau, s, e)
  3. Staleness: \Delta(t) = t_{\text{now}} - t_{\text{evidence}}; \text{stale}(f) \iff \Delta(t) > \Delta_{\max}
  4. Conflict: \text{conflict}(f_1, f_2) \iff (p_1=p_2 \wedge a_1=a_2) \wedge (\nu_1 \neq \nu_2) \wedge \neg \text{dom}(s_1, s_2, t_1, t_2)
  5. Dominance: \text{dom} \iff (s = \text{official} \wedge t_1 \ge t_2) \vee ...
  6. Trust/reliability probability: \rho(s) \in [0,1]
  7. Information content: I(f) = -\log_2 P(f) bits
  8. Entropy of source: H(S) = -\sum \rho \log_2 \rho bits
- Units: seconds, SHA-256 (256 bits), probability dimensionless, bits.
- Assumptions: official source has higher prior, timestamps synchronized, hash immutable.
- Breakdown regimes: \Delta_{\max} undefined -> stale uncomputable; \rho undefined -> trust uncomputable; hash collision (negligible but nonzero).
- Page citations [PAGE 1].

RETROCAUSAL_GENEALOGY:
- Historical lineage: source registries in data engineering, NFL GSIS (official NFL stats system), roster APIs. The concept of ConflictRecord is reminiscent of version control (git merge conflicts) and distributed databases (vector clocks, CRDTs).
- Multi-week traps: NFL calendar. Week 1 roster vs Week 18. Players move: active/injured reserve/practice squad. Najee Harris team change (if applicable in fixture context). Rico Dowdle status changes. A fact true in week N is not causally guaranteed in week N+k without re-verification. The "clock" of NFL transactions means staleness accumulates faster around trade deadline, cutdown days, free agency.
- Cite [PAGE 1] for Najee Harris/Rico Dowdle mention.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under pressure (roster cutdown to 53, trade deadline), engineers may revert to silent overwrites to "fix quickly" rather than creating ConflictRecords. This regresses to the bad behavior the card forbids.
- Counter-trap: forcing ConflictRecord creation even when it slows deployment, treating every discrepancy as a conflict needing human review, causing backlog.
- Clock: staleness is a ticking clock; every second after a transaction, the fact decays. Freeze windows before kickoff where no roster changes should render.
- Theory of mind: what does the founder cockpit user believe? They believe facts are current. If the system shows a confirmed stale fact, trust is corrupted. The build must anticipate user expectations and prevent the "confirmed but wrong" state.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: storage/compute limits for snapshots; do not mutate production DB. Veto if any production DB migration detected.
- Biomechanical layer: human review capacity for ConflictRecords. Veto if conflict queue exceeds human review bandwidth before deploy.
- Weather layer: external disruptions (NFL game postponements, weather-related schedule changes) affecting transaction volume and staleness rates. Veto if external legal/TOS review incomplete.
- Veto proof: a formal conjunction of preconditions that must all hold; failure of any triggers veto.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Silent overwrite of Najee Harris team fact. Prediction: rendered fact shows old team, user trust loss. Veto: ConflictRecord missing.
- Scenario 2: Stale Rico Dowdle status rendered as confirmed. Prediction: search/content shows incorrect status. Veto: stale check passes despite \Delta > \Delta_{\max}.
- Scenario 3: Scraping prohibited/paywalled source. Prediction: TOS violation, legal risk. Veto: robots/terms review not logged.
- Each: condition, verification method, prediction if not vetoed.

I need to ensure total word count >= 1000. Let me be generous with each section.

Also must not mention betting lines. No issue.

Must not invent toy equations. I will clearly label these as formal definitions for this data system, not fake physics ratios.

Let me write the response now. I'll aim for around 1300-1600 words total to be safe.

Let me count roughly as I write. THINK_TRACE needs to be substantial.

I need to include exact [PAGE 1] citations and verbatim quotes. I'll quote several passages.

Verbatim quotes I'll use:
- "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites."
- "Media/fantasy sources are fallback/corroboration unless legal approval upgrades them."
- "Regression: Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams."
- "Primary trust risk is making a stale or conflicted fact look confirmed."
- "Do not mutate production data."
- "Use official/public sources only after terms and robots review. Do not scrape private, paywalled, login-gated, prohibited, or high-volume sources."

Now write.

Structure:

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

I'll write detailed content.

Let me make sure THINK_TRACE is >= 400 words. I'll write maybe 500-600 words there.

Let me draft THINK_TRACE:

"The duplicate gate on [PAGE 1] reports duplicate_check_status: DEPENDENCY with matched_existing_ids: BUILD-GV2-098..."

I'll trace dependencies:
1. NRT-001 depends on GV2-098 (generic source/freshness cards).
2. NRT-001 adds NFL roster/person evidence.
3. Ingestion plan requires read-only adapters/fixture probes.
4. Reconciliation compares official/open-data/fallback.
5. Validation commands.
6. Public/private boundary.
7. Legal/TOS boundary.

Gray zones:
- Staleness horizon undefined: "unless stale" but no Δ_max.
- Conflict equality undefined: what counts as different value? (team abbreviation vs name)
- Legal upgrade path undefined for media/fantasy.
- Fixture drift risk in smoke tests.
- "Do not mutate production data" but no mechanism to enforce at code level.

This should be 400+ words.

SOURCE_OPERATORS_AND_EQUATIONS:
Define sets and functions. Use LaTeX.

Let me write equations:

Let \mathcal{P} be player IDs, \mathcal{A} attributes (team, jersey, status, staff_role), \mathcal{V} values, \mathcal{T} timestamps in seconds since Unix epoch, \mathcal{S} source IDs, \mathcal{E} evidence IDs.

A roster fact: f = (p, a, v, τ, s, e) ∈ \mathcal{F} = \mathcal{P} × \mathcal{A} × \mathcal{V} × \mathcal{T} × \mathcal{S} × \mathcal{E}.

Source snapshot record: σ = (s, u, h, τ_cap, v_parser, n_records, e_ids) where h = SHA-256(raw_payload) ∈ {0,1}^{256}.

Staleness operator: Δ(f) = τ_now − τ_evidence. stale(f) ⇔ Δ(f) > Δ_max. [PAGE 1] does not specify Δ_max → breakdown regime.

Conflict operator: conflict(f_i, f_j) ⇔ p_i = p_j ∧ a_i = a_j ∧ v_i ≠ v_j ∧ ¬dominates(s_i, τ_i, s_j, τ_j).

Dominance: dominates(s_i, τ_i, s_j, τ_j) ⇔ (s_i = official ∧ s_j ≠ official ∧ τ_i ≥ τ_j − ε) ∨ (s_i = official ∧ s_j = official ∧ τ_i > τ_j).

Source reliability probability: ρ(s) ∈ [0,1], dimensionless.

Information content: I(f|s) = −log₂ P(f|s) bits.

Source entropy: H(𝒮) = −Σ_{s∈𝒮} ρ(s) log₂ ρ(s) bits.

Reconciliation output: \hat{f} = argmax_{f∈candidates} ρ(s) subject to ¬stale(f); if conflict detected, emit ConflictRecord(c) where c = (f_i, f_j, τ_discover, resolution_status ∈ {open, resolved, overridden}).

Units: seconds (s), SHA-256 bits, probability dimensionless, bits (Shannon), count dimensionless.

Assumptions: clock synchronization, canonical value normalization before comparison, official source has higher prior ρ.

Breakdown: Δ_max undefined; ρ undefined; normalization collisions (e.g., "PIT" vs "Pittsburgh"); hash collision probability ≈ 2^{-256} but nonzero.

Citations [PAGE 1].

RETROCAUSAL_GENEALOGY:
- Lineage: SourceRegistry pattern mirrors data catalogs (Apache Atlas, Amundsen), ConflictRecord mirrors git merge conflicts and distributed database conflict-free replicated data types. NFL official roster source historically GSIS.
- Multi-week traps: NFL transaction clock. Free agency, waivers, IR, practice squad. Fact at week N decays. Najee Harris and Rico Dowdle smoke tests [PAGE 1] are designed to catch fixture drift across weeks. The causal graph: transaction at time t changes roster state; if snapshot at t+Δ not refreshed, rendered fact is counterfactual relative to ground truth.
- Multi-week trap: a fact verified in preseason may be false by Week 1; staleness accumulates nonlinearly around cutdown days (August) and trade deadline (October/November).

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under roster cutdown pressure, engineer may skip ConflictRecord and silently overwrite to "meet deploy deadline." This regresses to pre-NRT-001 behavior.
- Counter-trap: over-reliance on ConflictRecord creates review backlog; every minor formatting difference (number with/without leading zero) creates conflict, slowing pipeline.
- Clock: staleness clock ticks continuously; freeze windows before games where roster render must be consistent. Founder cockpit user expects "current fact, qualified status, last verified timestamp" [PAGE 1]. If system violates this expectation, trust model collapses.
- Recursive depth: user trusts system; system trusts source; source trust depends on TOS/robots review. If any layer regresses, the whole belief chain breaks.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: raw snapshot storage; no production DB mutation [PAGE 1]. Veto if any migration/deploy config touched.
- Biomechanical layer: human ConflictReview capacity. Veto if conflict queue > reviewer throughput before deploy.
- Weather/external layer: NFL schedule disruptions (weather postponements) increase transaction volatility and staleness rate. Legal/TOS review incomplete [PAGE 1]: "Use official/public sources only after terms and robots review." Veto until review logged.
- Formal veto: V = ¬(P_physical ∧ B_biomechanical ∧ W_weather ∧ L_legal). If V=1, halt.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Najee Harris team silent overwrite. Condition: conflict(f_old, f_new) detected but no ConflictRecord created. Verification: query ConflictRecord table for player Najee Harris and attribute team; expect non-empty. Prediction if not vetoed: rendered fact shows superseded team; founder cockpit shows false confidence.
- Scenario 2: Rico Dowdle stale confirmed. Condition: stale(f) true but public surface renders "current fact" without qualified status. Verification: roster:stale returns Dowdle record with Δ > Δ_max yet rendered timestamp label absent "verified" qualification. Prediction if not vetoed: search/content displays incorrect status as confirmed.
- Scenario 3: Prohibited source ingestion. Condition: adapter pulls from paywalled/login-gated source without terms/robots review logged. Verification: source registry terms_status field empty or "pending" while parsed record count > 0 from that source. Prediction if not vetoed: TOS violation, legal risk MEDIUM becomes realized, raw evidence contains non-public data.

Each scenario includes prediction.

Now I'll write it all out fully, ensuring word count. Let's go.

I need to be careful: total words across all sections >= 1000. I'll write generously.

Also note: the user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since PAGES: 1, I'll use [PAGE 1] throughout.

Let me write the final response.
</NATIVE_REASONING>

<THINK_TRACE>
The duplicate gate on [PAGE 1] establishes BUILD-NRT-001 as a DEPENDENCY on BUILD-GV2-098, meaning the roster truth implementation cannot proceed without first resolving the generic source/freshness cards that GV2-098 represents. The multi-hop chain is therefore: GV2-098 (generic freshness and source QA) → NRT-001 (NFL roster/person evidence, conflict handling, staff rules, deploy gates) → Player Lab, GSE Rating, search, content, and founder cockpit consumption. Each hop introduces a distinct failure surface. At hop one, the card explicitly states that existing cards "define generic freshness, data source QA, and player surfaces, but not fact-level NFL roster evidence, conflict handling, staff rules, or deploy gates" [PAGE 1]. This means NRT-001 must extend, not recreate, GV2-098 patterns, yet the card provides no field-level mapping between generic freshness fields and NFL roster attributes (team, number, status, staff role), leaving a semantic integration gap.

The ingestion plan mandates read-only source adapters or fixture-based probes, storing raw snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs, while prohibiting production data mutation [PAGE 1]. The gray zone here is enforcement: the card states "Do not mutate production data" as policy, but specifies no pre-commit hook, database read-only guard, or transaction sandbox that would make the prohibition mechanically verifiable rather than merely declarative.

The reconciliation plan contains the most consequential under-specification. [PAGE 1] states verbatim: "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites." Two variables are left undefined: the staleness horizon (Δ_max after which "official current evidence" becomes "stale") and the equality predicate for value comparison (e.g., whether "PIT" and "Pittsburgh" count as conflicting values or canonical equivalents). Without Δ_max, the stale() predicate is uncomputable; without normalization rules, conflict(f₁, f₂) cannot be deterministically evaluated. This is a breakdown regime: the system can accept raw snapshots but cannot yet issue a deterministic conflict verdict.

The Legal/TOS boundary adds another gray zone. [PAGE 1] says: "Media/fantasy sources are fallback/corroboration unless legal approval upgrades them." No upgrade criteria, review SLA, or source-weight transition function is defined, so a fallback source remains in a permanent probationary state with no path to primary status documented in the card.

The regression smoke tests name Najee Harris and Rico Dowdle and require that rendered facts be compared "against current source evidence fixtures, not hardcoded replacement teams" [PAGE 1]. This introduces a fixture-drift trap: if the fixture for Harris reflects a preseason team assignment and the source evidence updates after a transaction, the test will pass against a stale fixture while production renders a confirmed but incorrect fact—the exact trust risk the card identifies as primary: "making a stale or conflicted fact look confirmed" [PAGE 1].

Finally, the rollback plan instructs removal of disabled scripts, types, and docs, deletion of generated fixtures, and leaving production data untouched [PAGE 1]. However, because no migration or deploy is to occur in this build, the rollback is effectively a no-op for production; the real risk is orphaned fixture data or type definitions left in the workspace, which could be accidentally imported by a later build. The audit chain therefore ends not with a production rollback but with a workspace hygiene check, which the card does not explicitly enumerate as an acceptance criterion.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \mathcal{P} be the set of player identifiers, \mathcal{A} the set of roster attributes (team, jersey number, status, staff role), \mathcal{V} the value domain, \mathcal{T} = \mathbb{R}_{\ge 0} timestamps in seconds since the Unix epoch, \mathcal{S} the source registry, and \mathcal{E} the set of evidence identifiers.

A roster fact is a tuple
f = (p, a, v, \tau, s, e) \in \mathcal{F} = \mathcal{P} \times \mathcal{A} \times \mathcal{V} \times \mathcal{T} \times \mathcal{S} \times \mathcal{E},
where p is the player, a is the attribute, v is the value, \tau is the evidence timestamp, s is the source, and e is the evidence ID. [PAGE 1] requires every public roster fact to carry evidence, freshness, and conflict handling; this tuple makes those components explicit.

A raw source snapshot is
\sigma = (s, u, h, \tau_{cap}, v_{parser}, n_{records}, e_{ids}),
where u is the source URL, h = SHA\text{-}256(raw\_payload) \in \{0,1\}^{256} is the content hash, \tau_{cap} is the capture timestamp in seconds, v_{parser} is the parser version string, n_{records} \in \mathbb{N} is the parsed record count, and e_{ids} \subseteq \mathcal{E} are extracted evidence IDs. [PAGE 1] specifies exactly these fields for stored snapshots.

Staleness operator. Define the age of evidence
\Delta(f) = \tau_{now} - \tau_{evidence} \quad [\text{seconds}].
A fact is stale iff
\text{stale}(f) \iff \Delta(f) > \Delta_{max}.
Critical breakdown: [PAGE 1] never specifies \Delta_{max}; therefore stale() is currently undefined and cannot be implemented as a hard gate. Assumption: \Delta_{max} must be supplied by the governance layer before roster:stale can return a boolean rather than null.

Conflict operator. Two facts conflict iff
\text{conflict}(f_i, f_j) \iff (p_i = p_j) \wedge (a_i = a_j) \wedge (v_i \neq v_j) \wedge \neg \text{dominates}(s_i, \tau_i, s_j, \tau_j),
where dominance encodes the [PAGE 1] rule that official current evidence wins:
\text{dominates}(s_i, \tau_i, s_j, \tau_j) \iff
\bigl(s_i = \text{official} \wedge s_j \neq \text{official} \wedge \tau_i \ge \tau_j - \varepsilon\bigr)
\vee
\bigl(s_i = \text{official} \wedge s_j = \text{official} \wedge \tau_i > \tau_j\right),
with \varepsilon a small clock-skew tolerance in seconds. If conflict(f_i, f_j) holds, the system must emit
c = (f_i, f_j, \tau_{discover}, \rho_{resolution}) \in \mathcal{C} = \text{ConflictRecord},
with \rho_{resolution} \in \{\text{open}, \text{resolved}, \text{overridden}\}, rather than performing a silent overwrite [PAGE 1].

Source trust and information units. Assign each source a reliability probability
\rho(s) \in [0,1]
(dimensionless). The information content of a fact conditioned on its source is
I(f \mid s) = -\log_2 P(f \mid s) \quad [\text{bits}],
and the entropy of the source distribution is
H(\mathcal{S}) = -\sum_{s \in \mathcal{S}} \rho(s) \log_2 \rho(s) \quad [\text{bits}].
Assumption: \rho(s) is assigned after terms/robots review; unreviewed sources have \rho(s) = 0 and are excluded from reconciliation [PAGE 1].

Reconciliation output. The rendered fact is
\hat{f} = \arg\max_{f \in \text{candidates}} \rho(s) \quad \text{subject to} \quad \neg \text{stale}(f),
with ties broken by newer \tau. If no non-stale candidate exists, the fact must render as unknown/qualified, never confirmed [PAGE 1].

Breakdown regimes and singularities: (1) \Delta_{max} undefined \Rightarrow stale() uncomputable; (2) \rho(s) undefined for unreviewed sources \Rightarrow argmax over an empty set; (3) value normalization collisions (e.g., "PIT" vs "Pittsburgh") \Rightarrow false negatives in conflict detection; (4) SHA-256 collision probability \approx 2^{-256}, negligible but nonzero, meaning hash-based duplicate detection is not information-theoretically perfect. Units used throughout: seconds for time, SHA-256 bits for content integrity, dimensionless probability for source reliability, and Shannon bits for information entropy. All citations refer to [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The SourceRegistry pattern in BUILD-NRT-001 descends from data-catalog and data-lineage systems (e.g., Apache Atlas, Amundsen) and from the conflict-reconciliation traditions of distributed databases and version control. The ConflictRecord construct is isomorphic to a git merge conflict: two divergent writes to the same (player, attribute) key are not auto-resolved but exposed for human or policy adjudication [PAGE 1]. In NFL-specific lineage, the official roster source historically traces to the NFL's GSIS and league transaction wire; open-data and fallback sources form a secondary evidentiary layer that the card permits only as corroboration until legal approval upgrades them [PAGE 1].

The central multi-week trap is the NFL transaction clock. A roster fact verified in Week N is not causally guaranteed to remain true in Week N+k because of free agency signings, waiver claims, injured-reserve designations, practice-squad moves, and roster cutdowns. The card's smoke tests for Najee Harris and Rico Dowdle explicitly guard against this by comparing rendered facts against current source evidence fixtures rather than hardcoded replacement teams [PAGE 1]. This acknowledges that a player's team or status is a time-indexed proposition, not an immutable property. The retro-causal hazard: if a fixture is captured at t₀ and the source evidence changes at t₁ > t₀, any system that renders the t₀ fact as "current" at t₂ > t₁ is presenting a counterfactual as ground truth. Staleness accumulates nonlinearly around high-volatility windows (preseason cutdown to 53, the trade deadline, and post-week waiver processing), which means \Delta_{max} should arguably be smaller near those boundaries even though [PAGE 1] provides no calendar-aware staleness function.

The historical trap is also organizational. Generic freshness cards (GV2-098) likely treat staleness as a uniform timestamp threshold. NRT-001 must break from that uniformity because NFL roster truth is event-driven: a single transaction can invalidate thousands of derived facts (depth charts, search indexes, content tags). The dependency on GV2-098 therefore risks importing a stale-agnostic freshness model into a domain where staleness is the default state between transactions.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. Under roster-cutdown pressure or trade-deadline urgency, an engineer is likely to regress to the pre-NRT-001 habit of silently overwriting a disputed fact to "keep the pipeline moving." [PAGE 1] explicitly forbids silent overwrites and requires ConflictRecord entries, but the card offers no circuit breaker that halts deployment when the conflict queue exceeds human review capacity. The regression is therefore not merely possible; it is the path of least resistance during a crisis, and it directly produces the primary trust risk identified on [PAGE 1]: "making a stale or conflicted fact look confirmed."

Counter-trap. The opposite failure is over-reliance on ConflictRecord creation. If every minor representation difference—jersey number stored as "5" versus "05", team stored as "ARI" versus "Arizona Cardinals"—is flagged as a conflict requiring founder review, the ConflictRecord backlog grows faster than it can be cleared. The counter-trap paradoxically delays the very data quality the build exists to protect, because the founder roster accuracy cockpit becomes a queue of low-signal conflicts rather than a decision tool.

The clock. Staleness is a continuous clock: \Delta(f) = \tau_{now} - \tau_{evidence} increases every second after a transaction [PAGE 1]. Around kickoff, a freeze window is required so that rendered facts do not change mid-game, yet [PAGE 1] defines no such freeze. The recursive theory of mind runs three layers deep: the founder/user trusts the cockpit to show "current fact, qualified status, and last verified timestamp" [PAGE 1]; the system trusts the SourceRegistry to supply \rho(s) and timestamps; and the SourceRegistry trusts the legal/TOS review gate to have cleared each source [PAGE 1]. If any layer regresses—silent overwrite, unreviewed source, missing \Delta_{max}—the user's belief that a rendered fact is current becomes unjustified, and trust collapses recursively from the top down.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto. The build prohibits production database mutations, deployment config changes, secrets, and live cron jobs [PAGE 1]. Any proposed diff that touches migrations, deploy config, or credentials is an automatic physical veto. Raw snapshot storage is permitted only as append-only fixtures with hash verification; in-place updates to existing production records violate the read-only adapter principle on [PAGE 1].

Biomechanical layer veto. Human review capacity for ConflictRecords is the biomechanical constraint. If the reconciliation adapter generates conflicts at a rate exceeding the founder/admin team's ability to adjudicate them before a deploy window, the system must veto promotion to the founder cockpit. [PAGE 1] restricts proprietary reconciliation logic, source weights, and raw evidence links to internal surfaces; exposing an unadjudicated conflict backlog to the founder cockpit would violate the public/private boundary and create a false impression of data quality.

Weather/external layer veto. External NFL schedule disruptions (weather postponements, game rescheduling) change transaction volume and compress staleness horizons. More critically, the legal/TOS boundary on [PAGE 1] states: "Use official/public sources only after terms and robots review. Do not scrape private, paywalled, login-gated, prohibited, or high-volume sources." Until terms and robots review is logged for each source in SourceRegistry, the legal layer issues a veto. The formal veto predicate is
V = \neg \bigl(P_{\text{physical}} \wedge B_{\text{biomechanical}} \wedge W_{\text{weather/external}} \wedge L_{\text{legal/TOS}}\bigr).
If V = 1 (any layer fails), the build must not proceed to adapter implementation or fixture generation beyond read-only probes.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Najee Harris silent-overwrite conflict. Condition: an adapter ingests a newer official transaction showing a team change for Najee Harris, but the renderer writes the new value directly over the old without creating a ConflictRecord [PAGE 1]. Verification: query the ConflictRecord store for player = Najee Harris and attribute = team; expect at least one open record with \tau_{discover} after the transaction timestamp. Prediction if not vetoed: the founder cockpit and search surface render the superseded team as a confirmed current fact, violating the smoke-test requirement to compare against fixtures rather than hardcoded teams [PAGE 1] and corrupting Player Lab and GSE Rating inputs.

Scenario 2: Rico Dowdle stale confirmation. Condition: roster:stale returns a Rico Dowdle status record with \Delta(f) > \Delta_{max}, but the public surface renders it as a "current fact" without a qualified status or last-verified timestamp [PAGE 1]. Verification: run roster:stale and confirm it flags Dowdle; then inspect the rendered public fact for the absence of any "verified" qualification label. Prediction if not vetoed: content and customer-facing displays show an incorrect status as confirmed, realizing the primary trust risk on [PAGE 1] and causing downstream search corruption.

Scenario 3: Prohibited source ingestion. Condition: an adapter pulls parsed records from a paywalled, login-gated, or robots-disallowed source without a logged terms/robots review in SourceRegistry [PAGE 1]. Verification: inspect SourceRegistry for terms_status = "reviewed" and robots_ok = true for every source with n_records > 0; any source with parsed records and missing review is a veto. Prediction if not vetoed: raw snapshots contain non-public evidence, exposing the system to MEDIUM legal risk that becomes realized, and evidence IDs link to sources the founder cockpit is not authorized to display, breaching the public/private boundary [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>