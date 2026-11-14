---
source: "BUILD-NRT-018-same-name-hard-no-merge-regression-tests.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5289
---

<NATIVE_REASONING>
The user wants me to process a drive source card about "Same-name hard no-merge regression tests" for an NFL roster truth system. They want me to act as the GSE + GSI Frontier Reasoning Foundry with strict invariants:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios, formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes, cite [PAGE N] markers and verbatim quotes when source pages provided
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words)</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions</RLVR_COUNTERFACTUAL_VETOES>

Wait, the source text is about NFL roster truth data engineering - duplicate gates, validation, reconciliation, no-merge regression tests. This is NOT about sports betting, physics, or biomechanics directly. However, the system prompt demands specific XML sections with specific content like "physical/biomechanical/weather veto proof" and "recursive theory of mind" and "retrocausal genealogy".

This is a bit of a mismatch - the source is a technical card about data engineering/regression tests, but the required output format demands physics-style analysis, game theory, and veto scenarios. I need to adapt: treat the roster truth system as the "system" being analyzed, apply formal methods to it, and create the required sections using the source material as the basis. I must NOT invent betting lines. I can invent formal LaTeX equations about data validation (information theory, probability of conflict, staleness decay), but must not make them "toy equations" - they need to be formal with units and breakdown regimes.

Let me carefully cite the source. The source says PAGES: 1 and SOURCE TEXT is one big markdown block. I should cite [PAGE 1] for quotes from it.

Key source quotes to use:
- "Roster facts are trust infrastructure. Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions."
- "Existing cards define generic freshness, data source QA, and player surfaces, but not fact-level NFL roster evidence, conflict handling, staff rules, or deploy gates."
- "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites."
- "Do not expose proprietary reconciliation logic."
- "Do not mutate production data."
- Regression: Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams.

I need to structure the response:

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. Discuss the no-merge regression problem: same-name entities in NFL rosters (e.g., two players with same name, or same name across time). The hard no-merge means you don't collapse distinct Person records into one just because names match. Gray zones: name collisions, Jr./Sr. suffixes, nicknames, name changes (marriage, legal), typos in source evidence, staff vs player same name. Multi-hop: source evidence → parsed record → Person entity → ValidationError → ConflictRecord → public/private boundary. The audit checks that stale/unknown facts don't render as confirmed. The gray zone is when official evidence is stale but no newer transaction exists—does the fact remain "current" or become "unknown"? The card says official wins unless stale or contradicted. Staleness threshold is undefined in the card → gray zone. Also fixtures are "Source Proof Needed" but not yet present → implementation risk.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define:
- Person record P = (id, name, team, number, status, staff_role, evidence_id, timestamp, hash, parser_version)
- Evidence set E = {e_i} with freshness f(e) = t_now - t_evidence
- Conflict predicate C(p_a, p_b) = 1 if same id? Actually same-name no-merge: if name match but evidence suggests distinct persons, do not merge. Define mergeability M(p_a, p_b) = 0 hard constraint when name_only_match = true and biometric/evidence_discriminant insufficient.
- Staleness operator S(e) = 1 if t_now - t_evidence > τ_stale. τ undefined in source → breakdown regime.
- Probability of false confirmation P_false = P(stale ∧ rendered_confirmed). Need to bound this.
- Information units: bits for evidence ID hash (SHA-256 = 256 bits), timestamp in ISO 8601 / Unix epoch seconds (SI unit s).
- ValidationError as a tuple.
- Breakdown: when τ_stale is not specified, the system cannot compute S(e) → singularity.
- Cite [PAGE 1] for the reconciliation rule.

RETROCAUSAL_GENEALOGY: Historical lineage. The card extends BUILD-071 (generic freshness/player surface/data quality). Lineage: generic source freshness → NFL roster truth → fact-level evidence → conflict handling → staff rules → deploy gates. Multi-week traps: if a player is traded in week 3, stale week 1 roster fact renders as confirmed; same-name rookie vs veteran confusion; practice squad vs active roster flips weekly. The "retrocausal" aspect: later transaction evidence retroactively invalidates earlier roster state; the system must not silently overwrite but create ConflictRecord. Historical precedent: data merge bugs in sports data where same-name players got collapsed (e.g., two Mark Smiths). Multi-week trap: a stale fact from week 1 persists through week 17 because no transaction touched that player, making it look confirmed when it's actually unknown/stale.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under pressure (founder roster accuracy cockpit showing conflict), engineers might revert to silent overwrite or hardcode team assignments (the card explicitly warns against hardcoded replacement teams in Najee Harris/Rico Dowdle smoke tests).
- Counter-trap: the test suite itself is the counter-trap—fixture-based smoke tests comparing rendered facts against current source evidence, not hardcoded teams. The disabled-by-default implementation prevents accidental production mutation.
- Clock: staleness clock ticking since last evidence timestamp; regression tests must run before clock exceeds τ_stale; CI clock vs data freshness clock.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This section is odd for a data card, but I can interpret "layers" as data pipeline layers: ingestion, parsing, reconciliation, validation, rendering. Vetoes:
- Ingestion layer veto: source requires credentials / paywalled / robots.txt prohibited → veto ingestion (card: legal/TOS boundary).
- Parsing layer veto: parser version mismatch or hash mismatch → veto parse, raise ValidationError.
- Reconciliation layer veto: conflict detected → veto silent overwrite, create ConflictRecord.
- Rendering layer veto: stale/unknown fact → veto public display as confirmed; show qualified status only.
- No physical/biomechanical/weather vetoes apply because this is a data system, not an on-field athletic model; however, weather could indirectly affect game status (postponement) which affects roster status evidence. I should note the absence of biomechanical/weather relevance explicitly to avoid fabricating toy equations. Or map "weather" to "data weather" (storms of conflicting evidence). I'll be honest: no physical/biomechanical/weather operators exist in this source domain; vetoes are informational/legal.

RLVR_COUNTERFACTUAL_VAVOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifier Rewards? Or some internal acronym. I'll treat it as "verifier-based counterfactual vetoes."
Scenario 1: Najee Harris smoke test. Fixture shows Steelers, but a trade fixture is injected. Prediction: veto hardcoded Steelers; rendered fact updates or conflict raised; no silent merge.
Scenario 2: Rico Dowdle same-name collision. Two Person records with same name, different evidence IDs. Prediction: no-merge holds; both persist with separate evidence IDs; public UI shows qualified status/disambiguation.
Scenario 3: Stale official evidence with no newer transaction. τ exceeded. Prediction: fact does not render as confirmed; ConflictRecord or stale flag; founder cockpit shows source weights but public does not.
Each must be verifiable: exact files changed, tests run, assertions.

I need to ensure >=1000 words total across sections. THINK_TRACE alone >=400. Let me aim for ~1500-2000 words total.

Word count check: I'll write generously.

No betting lines: absolutely none. No mentions of spreads etc.

No toy equations: My equations must be formal, with definitions, units, and breakdown regimes. I will define them carefully.

Citations: Use [PAGE 1] since the source is one page. Verbatim quotes in quotation marks.

Let's draft.

THINK_TRACE:
Start with the problem: same-name hard no-merge. Multi-hop derivation:
1. Source evidence e arrives via read-only adapter. [PAGE 1] says store raw snapshots with timestamp, URL, hash, parsed record count, parser version, evidence IDs.
2. Parse to Person record. Person is in data model. ValidationError also in data model.
3. Reconciliation: compare official/open-data/fallback. Official wins unless stale or contradicted by newer official transaction evidence. Conflicts → ConflictRecord, not silent overwrite.
4. Same-name hard no-merge: if two records share name but lack discriminating evidence (birth date, college, draft year, transaction history), M=0. Do not merge.
5. Rendering: public shows current fact, qualified status, last verified timestamp. Founder/admin shows source weights, conflicts, parser errors, raw evidence links.
Gray zones:
- τ_stale is not defined in the card. Staleness operator cannot be evaluated. Breakdown regime.
- "Official current evidence wins unless stale" — if stale and no newer official transaction exists, does fact become unknown? Card says stale/unknown facts do not render as confirmed. So it should be downgraded, but the mechanism (stale flag vs ConflictRecord vs removal) is unspecified.
- Name collision discrimination: what evidence counts as sufficient to keep separate? Card doesn't specify discriminants (e.g., GSIS ID, college, birthdate). Gray zone.
- Staff rules: card mentions staff rules as missing but doesn't define them.
- Regression smoke tests: Najee Harris and Rico Dowdle. They compare rendered facts against fixtures, not hardcoded teams. This guards against crisis habit regression where an engineer hardcodes "Steelers" for Harris after a trade.
Trust risk: making stale/conflicted fact look confirmed.

Write >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
Define notation:
- Person P ∈ ℙ: P = (pid, name, team, jersey_number, status, staff_role, eid, t_obs, hash, parser_ver)
- eid: evidence ID, hash: SHA-256 digest (256 bits), t_obs: Unix epoch seconds (s).
- Evidence freshness age: a(e) = t_now − t_obs(e) [s]
- Staleness predicate: S(e; τ) = 1[a(e) > τ] where τ is staleness horizon [s]. Source does not specify τ → undefined operator.
- Mergeability: M(P_i, P_j) = 1[name_i = name_j ∧ D(P_i,P_j) ≥ δ] else 0. Hard no-merge: M=0 when name match but discriminant D below threshold δ. D is a vector of discriminants (GSIS ID, birthdate, college, draft class). δ undefined → breakdown.
- Conflict operator: C(P_i, P_j) = 1[P_i.fact ≠ P_j.fact ∧ same entity] → create ConflictRecord. Silent overwrite prohibited.
- False confirmation probability: P_FC = P(S(e)=0 ∧ rendered_confirmed). System must enforce P_FC = 0 by design (validation gates).
- ValidationError V = (pid, fact, rule, severity, eid, t_raised).
Units: seconds for time, bits for hash, dimensionless for predicates. Breakdown: τ and δ unspecified; parser version drift; hash collision (negligible for SHA-256 but nonzero).
Cite [PAGE 1] for each operator origin.

RETROCAUSAL_GENEALOGY:
Historical/scientific lineage:
- BUILD-071 (parent) defined generic freshness, data source QA, player surfaces. [PAGE 1]
- BUILD-NRT-018 extends into NFL roster truth namespace with fact-level evidence, conflict handling, staff rules, deploy gates. [PAGE 1]
- Lineage: database integrity (entity resolution, no silent overwrites) → source freshness → NFL roster truth → regression fixtures.
- Scientific lineage: record linkage theory (Fellegi-Sunter), conflict-free replicated data types (CRDTs) concepts (conflict visibility), temporal databases (valid time vs transaction time).
- Multi-week traps:
  Week 1: Player A on Team X. Week 4: traded to Team Y. If no new evidence ingested for Player A between week 4 and week 17, week 1 fact may render as confirmed unless staleness gate fires.
  Same-name trap: veteran "Rico Dowdle" vs rookie with same name; merge bug collapses careers.
  Staff trap: coach changes teams; staff role stale.
  Retrocausal: week 17 transaction retroactively invalidates week 1 roster state; system must not overwrite week 1 evidence but keep raw snapshot and add ConflictRecord. The "cause" (trade) arrives after the "effect" (roster display), requiring temporal consistency.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: when founder cockpit shows conflicts, engineers under pressure may (a) silent-overwrite to clear conflicts, (b) hardcode team for smoke-test players (Najee Harris → Steelers, Rico Dowdle → Cowboys/Dolphins depending on fixture), (c) promote fixtures to production. The card explicitly forbids hardcoded replacement teams and production mutation.
- Counter-trap: the test suite is the counter-trap. Disabled-by-default implementation, fixture-backed probes, smoke tests compare rendered facts vs current source evidence fixtures. The "counter" is procedural: no hardcoded teams; evidence-first rendering.
- Clock: two clocks. Data clock: t_now − t_obs for each evidence. CI clock: regression suite must run before staleness horizon τ elapses; otherwise tests validate stale fixtures. The smoke tests must be re-run weekly aligned with NFL transaction window (Tuesday/Wednesday waivers, etc.).

CROSS_LAYER_VETO_ADJUDICATION:
Layers and vetoes:
1. Legal/TOS layer: veto if source is paywalled, login-gated, robots-prohibited, high-volume without approval. [PAGE 1]
2. Ingestion layer: veto if no read-only adapter available; require raw snapshot storage before parsing.
3. Parsing layer: veto if parser_version mismatch or hash mismatch; emit ValidationError.
4. Reconciliation layer: veto silent overwrite on conflict; emit ConflictRecord.
5. Rendering layer: veto public confirmed status if S(e)=1 or status unknown; show qualified status only.
Physical/biomechanical/weather: not applicable to this data-domain; no physical/biomechanical/weather operators exist in source. Weather could indirectly alter game status (postponement) → roster status evidence changes, but this is outside card scope. I will state this explicitly to avoid fabricating.

RLVR_COUNTERFACTUAL_VETOES:
Three verifiable scenarios.
Scenario 1: Najee Harris trade injection.
- Fixture: current evidence fixture lists Harris on Steelers (pre-trade). Counterfactual fixture injects official trade transaction to new team with later timestamp.
- Veto: system must not render hardcoded Steelers; must either update to new team with new evidence or raise ConflictRecord if conflict persists.
- Verifiable assertion: rendered fact.team ≠ "hardcoded Steelers"; evidence ID changes to trade transaction eid; ValidationError or ConflictRecord count increases by exactly 1.
- Prediction: pass if no-merge and evidence-follows-transaction hold; fail if UI still shows Steelers or silent overwrite occurs.
Scenario 2: Rico Dowdle same-name collision.
- Fixture: two Person records, same name "Rico Dowdle", distinct evidence IDs (e.g., one active RB, one practice squad or different team/era).
- Veto: no merge despite identical name string. Both records persist with separate pid and eid.
- Verifiable assertion: count(Person where name="Rico Dowdle") == 2; merge_notes or ConflictRecord indicates name collision resolved by evidence, not name collapsing.
- Prediction: pass if both render with qualified status/disambiguation; fail if only one record survives.
Scenario 3: Stale official evidence without newer transaction.
- Fixture: official evidence timestamp older than τ (staleness horizon to be defined in follow-up), no newer official transaction.
- Veto: fact does not render as confirmed; public shows qualified status + last verified timestamp; founder cockpit shows stale flag.
- Verifiable assertion: public rendering field confirmed == false; status == "qualified" or "stale"; no ConflictRecord required unless contradicted by another source.
- Prediction: pass if stale gate downgrades fact; fail if stale fact renders as confirmed.
Each scenario references [PAGE 1] acceptance criteria: regression smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams; stale/unknown facts do not render as confirmed.

I need to ensure total words >= 1000. THINK_TRACE >= 400. Let me count roughly as I write.

I will not mention any betting. I will use formal LaTeX. I will cite [PAGE 1] with verbatim quotes.

Let's write it out fully.

One caution: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source is one page. I'll cite [PAGE 1] liberally.

Let's write the final response.
</NATIVE_REASONING>

<THINK_TRACE>
The drive source is BUILD-NRT-018, a P0, difficulty-M card for the Galaxy Sports Edge NFL roster truth system. Its core mandate is "same-name hard no-merge regression tests." I begin with a multi-hop derivation of what that means operationally and where the gray zones live.

Hop 1 — Ingestion boundary. [PAGE 1] states: "Use read-only source adapters or fixture-based probes first. Store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs. Do not mutate production data." This establishes a write-once evidence layer: every roster fact is anchored to an immutable snapshot (timestamp in Unix seconds, URL, cryptographic hash, parser version). The production-mutation prohibition is a hard system boundary, not a preference.

Hop 2 — Entity resolution and the no-merge constraint. The card is titled "same-name hard no-merge." In roster truth, a name string is not a key. Two Person records may share "Najee Harris" or "Rico Dowdle" yet refer to different individuals (rookie vs. veteran, same-name across eras, suffixes, nicknames, or data-entry collisions). The hard no-merge rule means the mergeability operator M(P_i, P_j) must evaluate to 0 whenever the only matching attribute is the name string and the discriminant vector D (GSIS identifier, birthdate, college, draft class, transaction history) is insufficient. Silently collapsing two distinct Person records into one would corrupt Player Lab, GSE Rating, search, and content, exactly as [PAGE 1] warns: "Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions."

Hop 3 — Reconciliation and conflict visibility. [PAGE 1] says: "Compare official, open-data, and fallback records fact-by-fact. Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites." This creates a temporal logic: official evidence has priority, but priority is conditional on freshness and non-contradiction. When two evidence records disagree on the same fact for the same entity, the system must emit a ConflictRecord rather than overwrite. This is an append-only conflict ledger, preserving auditability.

Hop 4 — Public/private boundary and staleness. Public surfaces may show "current fact, qualified status, and last verified timestamp," while founder/admin surfaces see source weights, conflicts, parser errors, and raw evidence links. Critically, [PAGE 1] acceptance criteria demand: "Stale/unknown facts do not render as confirmed." This means a stale timestamp must downgrade a fact's public status to qualified/unconfirmed, not silently promote it. The gray zone here is severe: [PAGE 1] never defines the staleness horizon τ (in seconds). Without τ, the staleness predicate S(e; τ) = 1[age(e) > τ] is an undefined operator, and the system cannot algorithmically decide whether an official fact has aged out. That is a specification singularity: the acceptance criterion is testable in principle but unimplementable in practice until τ is ratified.

Hop 5 — Regression surface. The test plan names two smoke tests: Najee Harris and Rico Dowdle. [PAGE 1] insists they "compare rendered facts against current source evidence fixtures, not hardcoded replacement teams." This is a direct guard against crisis habit regression: under pressure, an engineer might hardcode Harris to the Steelers or Dowdle to a prior team to make a failing test go green. The fixture-driven design forbids that. It also implies the fixtures themselves are the source-proof artifact ("Source Proof Needed: fixtures"), yet [PAGE 1] lists fixtures under "Source Proof Needed" rather than "Source Proof Provided," meaning the fixture corpus is currently absent and must be authored as part of the build.

Gray-zone audit summary:
1. Staleness horizon τ is unspecified → breakdown regime for freshness gating.
2. Discriminant threshold δ for same-name separation is unspecified → breakdown regime for no-merge.
3. Staff rules are acknowledged as missing but undefined → staff-fact conflict handling is unwritten.
4. The reconciliation logic is proprietary and must not be exposed publicly → private founder cockpit must carry it, but the card gives no schema for source weights.
5. No production database migration or deploy may occur → validation is limited to disabled-by-default scripts, type-only stubs, and fixture probes.

The primary trust risk identified in [PAGE 1] is "making a stale or conflicted fact look confirmed." Every operator below is designed to bound that risk to zero by construction.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let ℙ be the set of Person records. For each p ∈ ℙ, define the formal record:

p = (pid, name, team, jersey_number, status, staff_role, eid, t_obs, hash, parser_ver)

where:
- pid ∈ ℕ is the internal person identifier, not derived from name.
- name ∈ Σ* is the display name string (non-unique, non-key).
- team ∈ Teams ∪ {∅}; jersey_number ∈ ℕ₀; status ∈ {active, inactive, injured_reserve, practice_suspended, free_agent, unknown}; staff_role ∈ {coach, scout, front_office, ∅}.
- eid ∈ EvidenceID is the evidence identifier binding p to a raw snapshot.
- t_obs ∈ ℝ is the observation timestamp in Unix epoch seconds [s].
- hash ∈ {0,1}²⁵⁶ is the SHA-256 digest of the raw source snapshot [bits].
- parser_ver ∈ SemVer is the parser version [dimensionless].

Source citation: [PAGE 1] "Store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs."

Evidence age operator (SI unit seconds):
a(e; t_now) = t_now − t_obs(e) [s]

Staleness predicate (undefined until τ is specified):
S(e; τ) = 1 if a(e; t_now) > τ, else 0 [dimensionless]

Breakdown regime: [PAGE 1] does not specify τ. Therefore S is a partial function; for any evidence e, staleness cannot be decided, and the acceptance criterion "stale/unknown facts do not render as confirmed" cannot be enforced automatically.

Mergeability operator with hard no-merge on name collision:
Let D(p_i, p_j) = (δ_gsis, δ_birthdate, δ_college, δ_draft, δ_transaction) be the discriminant vector between two records. Let θ ∈ [0,1]⁵ be the required discriminant threshold vector.

M(p_i, p_j) = 1 if name(p_i) = name(p_j) ∧ D(p_i, p_j) ≥ θ, else 0.

Hard no-merge constraint: M(p_i, p_j) = 0 whenever name(p_i) = name(p_j) ∧ D(p_i, p_j) < θ. Distinct Person records sharing a name must never be collapsed.

Breakdown regime: θ is unspecified in [PAGE 1]. The discriminant vector components and their weights are undefined, so same-name separation cannot be computed.

Conflict operator:
C(p_i, p_j) = 1 if pid(p_i) = pid(p_j) ∧ fact(p_i) ≠ fact(p_j) ∧ ¬S(e_i) ∧ ¬S(e_j), else 0.

When C = 1, the system must emit ConflictRecord(pid, fact_a, fact_b, eid_a, eid_b, t_raised) and must not perform a silent overwrite. Source: [PAGE 1] "Conflicts create ConflictRecord entries instead of silent overwrites."

ValidationError tuple:
V = (pid, fact_field, rule_id, severity, eid, t_raised) [dimensionless categorical fields + seconds]

False-confirmation probability bound:
P_FC = Pr[rendered_confirmed(p) ∧ (S(e; τ) = 1 ∨ status(p) = unknown)].
System requirement: P_FC = 0 by construction via rendering-layer veto (see CROSS_LAYER_VETO_ADJUDICATION).

Units summary: time [s], hash digest [bits], predicates dimensionless, counts in records. No betting lines, spreads, totals, moneylines, or odds appear anywhere in this formalism.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of BUILD-NRT-018 is explicitly documented in its duplicate gate. It extends BUILD-071, which covered generic source freshness, data source QA, and player surfaces. [PAGE 1]: "Same-name hard no-merge regression tests adds NFL roster/person evidence, reconciliation, validation, or remediation that existing generic cards do not define." The genealogy is therefore: generic freshness/QA → NFL roster truth namespace → fact-level evidence → conflict handling → staff rules → deploy gates. Each link adds a stricter invariant: generic cards did not define fact-level NFL roster evidence, conflict handling, or staff rules, so NRT-018 is an extension, not a duplicate.

Scientific lineage draws from three domains:
1. Record linkage / entity resolution (Fellegi-Sunter framework): the decision to merge or not merge two records based on comparing fields (name, birthdate, identifier) and applying match thresholds. The hard no-merge rule is a deterministic override of probabilistic linkage when discriminant evidence is below threshold.
2. Temporal databases: valid time (when a fact was true in the NFL roster world) versus transaction time (when the evidence was recorded in the system). [PAGE 1] requires storing raw snapshots with timestamps, which supports bitemporal queries. A trade occurring in Week 4 retroactively invalidates a Week 1 roster state; the Week 1 evidence must remain as a raw snapshot while the Week 4 transaction evidence becomes the current official fact. This is retrocausality in data form: later-arriving transaction evidence changes the interpretation of earlier roster states without mutating the earlier evidence.
3. Conflict-free / conflict-visible replication: rather than converging by silent overwrite, the system creates ConflictRecord entries, preserving both versions for founder/admin inspection.

Multi-week traps inherent in NFL roster truth:
- Week 1 to Week 17 staleness trap: A player signed in Week 1 may have no transaction all season. If the ingestion pipeline does not re-verify, the Week 1 fact can age past τ and still render as confirmed because no newer official transaction contradicts it. [PAGE 1] says official evidence wins "unless stale," but without τ the system cannot detect this trap.
- Same-name trap across seasons: A veteran "Rico Dowdle" and a rookie camp invitee with the same name may coexist. A merge bug collapses them, attributing the veteran's snaps to the rookie or vice versa. The hard no-merge regression test must hold across weekly roster cuts (final 53-man roster, practice squad elevations, waiver claims).
- Staff-role trap: A position coach changes teams in Week 6. Staff facts stale faster than player facts because coaching carousel moves are frequent and less centrally governed than player transactions.
- Fixture drift trap: The Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures. If fixtures are not refreshed weekly alongside NFL transaction windows (waivers, trades, suspensions), the tests validate stale fixtures rather than current truth, producing false green results.

The retrocausal hazard: because the trade (cause) arrives after the roster display (effect), the system must preserve historical evidence snapshots while presenting the corrected current fact. A silent overwrite would destroy the audit trail needed to prove the old fact was once official and is now superseded.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: When the founder roster accuracy cockpit displays a ConflictRecord count above zero, an engineer under deadline pressure will tend to regress to the fastest clearing action: silently overwrite the conflict to make the dashboard green, hardcode a known team for a smoke-test player (e.g., hardcoding Najee Harris to Pittsburgh or Rico Dowdle to a prior fixture team), or promote a disabled fixture script into production. [PAGE 1] explicitly anticipates this: its regression tests "compare rendered facts against current source evidence fixtures, not hardcoded replacement teams," and its rollback plan prohibits production database mutation and deploy. The crisis habit is to treat the test suite as a formatting problem to be solved by hardcoding; the correct theory of mind treats the test suite as a evidence boundary that must not be crossed.

Counter-trap: The counter-trap is procedural and structural. The build is "docs-first, type-only, or disabled-by-default," which means the regression harness cannot accidentally execute against production. Fixture-based probes are read-only. The smoke-test assertions are relational: rendered fact equals fixture evidence, not a hardcoded string. By making the implementation disabled-by-default, the system forces an explicit opt-in gate before any roster fact is rendered as confirmed, giving the founder cockpit time to review source weights and parser errors before public exposure.

Clock: Two clocks govern the recursion. First, the data freshness clock: a(e; t_now) = t_now − t_obs(e) ticks continuously for every evidence record. Once a(e) exceeds the unspecified staleness horizon τ, the fact must downgrade from confirmed to qualified/stale. Because τ is not defined in [PAGE 1], this clock is currently uncalibrated, and the system has no automatic ticking mechanism to enforce the acceptance criterion. Second, the CI clock: the roster:audit, roster:verify, roster:conflicts, roster:stale, and test:roster checks must run frequently enough that fixtures do not age past the NFL transaction cadence. If the regression suite runs monthly but waivers occur weekly, the tests validate a stale world. The recursion is therefore: crisis → hardcode/overwrite → dashboard green → stale fact confirmed → trust corruption. The counter-recursion is: fixture refresh aligned to transaction window → disabled-by-default validation → evidence-match assertion → conflict visibility → no production mutation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The card describes an information pipeline, not an on-field athletic model, so physical, biomechanical, and weather operators do not appear in [PAGE 1] and are explicitly out of scope. I will not fabricate toy equations linking weather to roster status. Instead, the veto layers are informational, legal, and syntactic:

Layer 1 — Legal/TOS veto. [PAGE 1]: "Use official/public sources only after terms and robots review. Do not scrape private, paywalled, login-gated, prohibited, or high-volume sources." Any source failing this review is vetoed at ingestion; media/fantasy sources remain fallback/corroboration only unless legal approval upgrades them.

Layer 2 — Ingestion veto. If no read-only adapter exists, or if the source requires credentials, the adapter is vetoed and a fixture probe is used instead. Raw snapshots must be stored with timestamp, URL, hash, parsed record count, parser version, and evidence IDs before parsing proceeds.

Layer 3 — Parsing veto. If parser_ver does not match the expected version, or if hash verification fails against the stored raw snapshot, the parse is vetoed and a ValidationError is emitted with severity calibrated to the mismatch class.

Layer 4 — Reconciliation veto. On fact conflict C(p_i, p_j) = 1, silent overwrite is vetoed. A ConflictRecord entry is created instead. [PAGE 1]: "Conflicts create ConflictRecord entries instead of silent overwrites."

Layer 5 — Rendering veto. Public rendering may show current fact, qualified status, and last verified timestamp only. If S(e; τ) = 1 or status = unknown, the confirmed flag is vetoed; the fact renders as qualified/unconfirmed. Founder/admin surfaces may show source weights, conflicts, parser errors, and raw evidence links, but proprietary reconciliation logic must not be exposed publicly.

No physical/biomechanical/weather veto applies. Weather could indirectly alter a game status (postponement), which would then change roster-status evidence, but that causal chain is outside the source document's scope and would require a separate game-operations domain model. Admitting this absence is preferable to inventing a weather coefficient.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR here denotes verifier-reward counterfactual vetoes: hypothetical fixture injections that must be blocked or correctly handled by the regression harness. Three verifiable scenarios follow, each tied to [PAGE 1].

Scenario 1 — Najee Harris trade injection (hardcoded-team veto).
Counterfactual fixture: current source evidence lists Najee Harris on Team A with t_obs = T₁. A counterfactual official trade transaction arrives with t_obs = T₂ > T₁, listing Harris on Team B.
Veto: The system must not render a hardcoded Team A for Harris. It must either update the rendered fact to Team B using the new evidence eid, or emit a ConflictRecord if the conflict cannot be auto-resolved.
Verifiable assertion: rendered fact.team ≠ hardcoded prior team; new eid equals the trade transaction evidence ID; ValidationError or ConflictRecord count changes by exactly +1 relative to baseline.
Prediction: Pass if evidence-follows-transaction holds and no hardcoded team string survives; Fail if UI still displays Team A or if a silent overwrite occurs without ConflictRecord.

Scenario 2 — Rico Dowdle same-name collision (no-merge veto).
Counterfactual fixture: two Person records share name string "Rico Dowdle" but possess distinct evidence IDs (eid₁ ≠ eid₂), distinct GSIS identifiers, and potentially different teams or statuses.
Veto: The mergeability operator M must return 0 because discriminant evidence below θ does not justify collapse. Both records persist with separate pid values.
Verifiable assertion: count(Person where name = "Rico Dowdle") = 2 after ingestion; each record retains its own eid; no single merged record absorbs both evidence streams; public rendering disambiguates via qualified status or shows both with separate last-verified timestamps.
Prediction: Pass if both same-name records survive with separate evidence lineage; Fail if only one record survives or if name-string matching alone triggers a merge.

Scenario 3 — Stale official evidence without newer transaction (false-confirmation veto).
Counterfactual fixture: an official roster fact has age a(e) > τ (once τ is defined) and no newer official transaction contradicts it. There is no open-data or fallback evidence to override it.
Veto: Per acceptance criterion "stale/unknown facts do not render as confirmed," the fact must downgrade to qualified/unconfirmed status in public rendering, displaying only the last verified timestamp.
Verifiable assertion: public rendering field confirmed == false; status == qualified or stale; founder cockpit shows stale flag and source weight; no ConflictRecord is required unless contradicted by another source, but no confirmed badge may appear.
Prediction: Pass if stale gate downgrades the fact before public render; Fail if the stale fact renders as confirmed, constituting the primary trust risk identified in [PAGE 1].

All three scenarios are verifiable by running test:roster with fixture injection and asserting exact changed fields, ConflictRecord counts, and public-rendering flags. No production database mutation occurs during verification.
</RLVR_COUNTERFACTUAL_VETOES>