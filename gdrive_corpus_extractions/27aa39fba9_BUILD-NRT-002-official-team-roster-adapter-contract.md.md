---
source: "BUILD-NRT-002-official-team-roster-adapter-contract.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5440
---

<NATIVE_REASONING>
The user wants me to analyze a source document (a build card for an NFL roster adapter contract) and produce a response following strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided a source text about a software build card for an NFL roster adapter. But the sections requested (RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES) seem like they're from a sports analysis / betting context, but I cannot mention betting lines. The source text is about data engineering / roster truth.

I need to adapt. The user says "DRIVE SOURCE" and provides pages: 1, source text. I need to treat this as the sole source. I must cite [PAGE 1] markers and verbatim quotes.

I need to produce >= 1000 words across the sections. THINK_TRACE >= 400 words.

Constraints:
- No betting lines whatsoever.
- No toy equations. Use formal LaTeX, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite [PAGE 1] and verbatim quotes.

Let me plan the content.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Analyze BUILD-NRT-002 contract.
- Multi-hop: Duplicate gate depends on BUILD-071 (prerequisite). The card itself is a prerequisite dependency for roster truth implementation.
- Gray zones: "read-only source adapters or fixture-based probes first" vs eventual production adapters. "Official current evidence wins unless stale or contradicted by newer official transaction evidence" — what defines stale? No TTL specified. That's a breakdown regime.
- "Conflicts create ConflictRecord entries instead of silent overwrites" — but no scoring/weight function specified, so formal equation must be invented? No, I must not invent toy equations. I can define set-theoretic reconciliation using formal notation (not fake ratios). Use information units: bits, bytes, Shannon entropy? Or probability units for conflict likelihood.
- Legal/TOS boundary: official/public sources only after terms and robots review. Medium legal risk.
- Test plan smoke tests: Najee Harris and Rico Dowdle — compare rendered facts against current source evidence fixtures, not hardcoded replacement teams. This is a specific anti-hardcoding trap.

SOURCE_OPERATORS_AND_EQUATIONS:
- Formal LaTeX equations for data model: RosterSourceAdapter, RawSourceSnapshot, NormalizedRosterRecord.
- Define raw snapshot as tuple: s = (timestamp, URL, hash, parsed_record_count, parser_version, evidence_ids) ∈ T × U × H × ℕ × V × 2^E.
- Normalized record as partial function over facts with evidence design: every roster fact touched has source evidence design (Acceptance Criterion 2).
- Reconciliation: conflict predicate C(r_official, r_fallback) = 1 iff fields differ and official not newer than transaction evidence. Use temporal ordering t_official vs t_transaction.
- Stale fact predicate: S(f) = 1 iff now - t_verified > τ_stale, but τ_stale undefined → singularity/breakdown regime.
- Information units: hash entropy H(hash) ≥ 256 bits if SHA-256; parser version semantic versioning; record count ℕ.
- Cite [PAGE 1] for every claim from source.
- Verbatim quotes: "Official current evidence wins unless stale or contradicted by newer official transaction evidence." etc.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: NFL roster truth → Player Lab, GSE Rating, search, content, customer trust, internal decisions. Cite [PAGE 1].
- Multi-week traps: stale roster facts propagating across weeks; Najee Harris/Rico Dowdle smoke tests are anti-hardcoding but fixture staleness across NFL weeks (trades, cuts, IR, practice squad moves) creates multi-week drift.
- Staff rules: coaches, front office; role changes mid-season.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under pressure, engineers might revert to silent overwrites or hardcoded team replacements (explicitly forbidden in test plan). Counter-trap: ConflictRecord entries + visible internal conflicts. Clock: stale facts must not render as confirmed; freshness deadline is a temporal clock with undefined τ_stale.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- This section seems mismatched to software, but I must interpret: physical layer = servers/repo, biomechanical = human data entry/parser errors, weather = not applicable but can discuss environmental source outages (robots.txt, TOS, source downtime). Veto proof: disabled-by-default implementation, no production DB mutation, read-only adapters, rollback plan. Veto conditions: legal review not completed, dirty repo state, production data detected.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? I'll treat as verifiable reward/counterfactual vetoes.
- Scenario 1: Adapter attempts to mutate production DB → veto. Prediction: build blocked, rollback executed, zero rows affected.
- Scenario 2: Stale official fact (t_verified older than τ_stale) rendered as confirmed without conflict flag → veto. Prediction: stale/unknown facts do not render as confirmed; UI shows qualified status only.
- Scenario 3: Najee Harris fixture hardcoded to current team instead of comparing against source evidence fixture → veto. Prediction: test fails, hardcoded replacement detected, fixture re-grounded to evidence.

Word count: Need >= 1000 words total across sections. THINK_TRACE >= 400. Let me aim for ~180-220 words per section on average, totaling >1000.

No betting lines. I will not mention any odds/spreads/moneylines/totals.

No toy equations. I will use formal LaTeX with sets, tuples, predicates, temporal logic. Units: seconds (s), bits, bytes, records, dimensionless boolean predicates. Assumptions and breakdown regimes explicitly stated.

Citations: [PAGE 1] since only 1 page. Verbatim quotes from source text.

Let's draft carefully.

THINK_TRACE draft:

The build card BUILD-NRT-002 is a dependency-gated artifact: duplicate_check_status is DEPENDENCY, matched_existing_ids is BUILD-071, and relation_to_existing states it is a "Prerequisite dependency for roster truth implementation" [PAGE 1]. The first multi-hop is therefore: BUILD-071 must be resolved before this adapter contract can be treated as authoritative, yet the card carries no parent_id or supersedes_id and an empty dependency_ids field, creating a gray zone in the dependency graph. The second hop is the evidence design mandate: "Every roster fact touched by the build has source evidence design" [PAGE 1], which forces a many-to-one mapping from facts to RawSourceSnapshot evidence IDs rather than free-floating strings. The third hop is the reconciliation rule: "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites" [PAGE 1]. This is a temporal priority operator with an undefined staleness threshold τ_stale; the exact breakdown regime occurs when now − t_verified exceeds an unspecified bound, because no TTL is specified in the card. A fourth hop is the public/private boundary: founder/admin surfaces may see source weights and parser errors, but "Do not expose proprietary reconciliation logic" [PAGE 1], meaning the internal conflict-scoring function must remain opaque while its outputs (ConflictRecord, stale flags) are visible. Gray-zone audit: the card mandates read-only adapters and fixture-based probes first, but does not specify the promotion path to live official sources, the robots.txt review artifact, or the terms-of-service signoff record. The smoke tests for Najee Harris and Rico Dowdle explicitly forbid hardcoded replacement teams and require comparison "against current source evidence fixtures" [PAGE 1], which is a counter-trap against regression to static roster assumptions. Risks are rated MEDIUM across legal, source, and maintenance, with the primary trust risk defined as "making a stale or conflicted fact look confirmed" [PAGE 1]. Implementation must remain docs-first, type-only, or disabled-by-default, with no production database mutation or deploy [PAGE 1]. Rollback removes new disabled scripts/types/docs and deletes generated fixtures, leaving existing production data untouched [PAGE 1]. This chain establishes that the card is a governance contract more than a coding specification, and its executable surface is intentionally minimal until legal and repo verifications close.

Word count check: roughly 260 words. Need >=400. Expand.

Add more about information theory: evidence IDs, hash, parser version. Add more about Najee Harris/Rico Dowdle as specific entities and multi-hop implications for player pages/team pages. Add more about conflict handling and stale facts. Add more about the dependency on BUILD-071 being unspecified. Add about validation commands roster:audit etc.

Let's expand THINK_TRACE to ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
Define sets:
- Let T be timestamps in seconds since Unix epoch, t ∈ T.
- Let U be URLs, u ∈ U.
- Let H be hash outputs, h ∈ H, with H = {0,1}^256 for SHA-256 (assumption).
- Let V be parser versions, v ∈ V with semiring structure (semver).
- Let E be evidence identifiers, e ∈ E.
- Let F be roster facts, f ∈ F (team, number, status, staff role).

RawSourceSnapshot: s = (t_s, u, h, n, v, E_s) where n ∈ ℕ₀ parsed record count, E_s ⊆ E evidence IDs.
NormalizedRosterRecord: r = (player_id, fact_type, value, t_verified, w_source, status_qualified, evidence_ref) where w_source ∈ [0,1] is source weight (dimensionless probability-like weight), status_qualified ∈ {current, qualified, stale, unknown, conflicted}.
Conflict predicate: Conf(r₁, r₂) = 1 iff fact_type(r₁)=fact_type(r₂) ∧ value(r₁)≠value(r₂) ∧ ¬(t_verified(r₁) > t_verified(r₂) ∧ source(r₁)=official). More precisely: official wins unless stale or contradicted by newer official transaction evidence.
Staleness: Stale(f) = 1 iff (now − t_verified(f)) > τ_stale. τ_stale undefined in card → singularity at τ_stale → ∞ or unspecified.
Reconciliation operator: R(O, X) where O is official record set, X is fallback set. Output normalized set N and conflict set C.
C = { (f_o, f_x) | Conf(f_o, f_x) = 1 }.
N = { f_o | f_o ∈ O ∧ ¬Stale(f_o) } ∪ { f_x | f_x ∈ X ∧ ¬∃ f_o ∈ O : fact_match(f_o, f_x) } ... careful with formalism but keep readable.

Units: seconds for time, bits for hash entropy (H(h) = 256 bits assumption), dimensionless weights in [0,1], count in records.

Breakdown regimes:
1. τ_stale unspecified → cannot compute Stale(f) → all facts neither confirmed nor stale; renders as unknown/qualified only.
2. Source requires credentials/paywall → adapter prohibited (legal/TOS boundary).
3. Production DB mutation detected → hard veto; rollback only.
4. Parser version mismatch between snapshot and current adapter → normalization undefined; quarantine snapshot.

Cite [PAGE 1] after each clause tied to source. Use verbatim quotes.

RETROCAUSAL_GENEALOGY: lineage from roster facts to Player Lab, GSE Rating, search, content, customer trust, internal decisions [PAGE 1]. Historical lineage: generic freshness/source QA/player surfaces exist but not fact-level NFL roster evidence [PAGE 1]. Multi-week traps: NFL roster changes weekly (trades, waivers, IR, practice squad elevations). Najee Harris and Rico Dowdle smoke tests compare against fixtures; if fixtures age across weeks without refresh, rendered facts drift from current source evidence. Staff rules: coaching/front-office staff roles change mid-season; card mentions "staff rules" as missing [PAGE 1]. Multi-week trap: a fact verified in week 3 may be stale by week 6; without τ_stale the system cannot auto-downgrade. The "current problem" states visible workspace is docs/control lane, not full app checkout [PAGE 1]—a lineage gap between control docs and runtime.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: under deploy pressure, engineer may hardcode team assignments (explicitly forbidden: "not hardcoded replacement teams" [PAGE 1]) or silently overwrite conflicts. Counter-trap: ConflictRecord entries and visible internal conflicts; founder roster accuracy cockpit sees source weights, conflicts, parser errors [PAGE 1]. Clock: stale/unknown facts must not render as confirmed; public shows "current fact, qualified status, and last verified timestamp" [PAGE 1]. The clock is t_verified with undefined τ_stale, so the veto is manual until legal/freshness signoff.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: repo root, branch, dirty state, package manager must be verified before implementation [PAGE 1]. Veto if dirty state or unknown repo root.
- Biomechanical/human layer: parser errors, manual data entry, source misreads. Adapter must record parser errors internally but not expose logic publicly [PAGE 1].
- Weather/environment: source outages, robots.txt blocks, TOS changes, high-volume source prohibition [PAGE 1]. Veto if source requires login, paywall, credentials, or high-volume scraping without approval.
- Veto proof: disabled-by-default implementation; read-only adapters; no production DB mutation; rollback removes generated fixtures and leaves production untouched [PAGE 1].

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. Scenario: Adapter script attempts INSERT/UPDATE on production roster table. Veto trigger: pre-deploy static analysis or migration guard detects DML. Prediction: build halts, zero production rows modified, rollback plan executed (remove disabled script/types/docs, delete fixtures), existing production data untouched [PAGE 1]. Verifiable: git diff shows no migration files; database checksum unchanged.
2. Scenario: Stale official fact with t_verified older than operational freshness bound is rendered as confirmed on public player page without qualified/stale status. Veto trigger: roster:stale validation flags record; public renderer checks status_qualified ∈ {stale, unknown} before confirming. Prediction: public surface shows qualified status and last verified timestamp only; no confirmed badge [PAGE 1]. Verifiable: test:roster and roster:stale return nonzero for stale fixture.
3. Scenario: Najee Harris or Rico Dowdle smoke test hardcodes current team instead of comparing rendered facts to source evidence fixture. Veto trigger: test comparator detects literal team string in test source rather than fixture lookup. Prediction: test:roster fails; fixture re-grounded to current source evidence; no hardcoded replacement teams [PAGE 1]. Verifiable: test output diff shows fixture-based assertion, not hardcoded replacement.

I need to ensure total word count >= 1000. Let's estimate:
THINK_TRACE: ~500 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~300 words.
RETROCAUSAL_GENEALOGY: ~200 words.
RECURSIVE_THEORY_OF_MIND: ~180 words.
CROSS_LAYER_VETO_ADJUDICATION: ~180 words.
RLVR_COUNTERFACTUAL_VETOES: ~200 words.
Total ~1560 words. Good.

Make sure not to mention any betting terms. No spread, total, moneyline, odds. Check carefully. "Odds" might slip in; avoid. "Line" avoid. "Chalk" avoid.

Make sure to cite [PAGE 1] and include verbatim quotes. Since source is one page, [PAGE 1] is correct.

Let's write final output with exact XML tags. No markdown outside? The user asked for XML sections. I'll provide only the XML sections, perhaps with a brief intro? Better to just provide the sections to be safe, but an intro isn't forbidden. I'll provide just the sections as requested.

Check LaTeX: use \( ... \) or $$ ... $$. I'll use inline and display math. Ensure formal.

Check "SI/information/probability units": seconds (SI), bits (information), dimensionless [0,1] (probability-like weight), records (count). Good.

Check "exact singularity/breakdown regimes": τ_stale undefined, source requiring credentials, production mutation, parser version mismatch.

Check verbatim quotes: I'll quote several phrases exactly from source.

Let's draft the final text.

THINK_TRACE content (expanded):

The card BUILD-NRT-002 sits in a dependency gray zone: duplicate_check_status is DEPENDENCY, matched_existing_ids is BUILD-071, and relation_to_existing calls it a "Prerequisite dependency for roster truth implementation" [PAGE 1]. Yet parent_id, supersedes_id, and dependency_ids are all empty, so the multi-hop resolution chain cannot be mechanically verified from this page alone; BUILD-071 must be read and reconciled before the adapter contract can be treated as executable rather than declarative.

The second hop is the evidence-design acceptance criterion: "Every roster fact touched by the build has source evidence design" [PAGE 1]. This forces every public fact—team, number, status, staff role—onto a many-to-one evidence graph rooted in RawSourceSnapshot evidence IDs, rather than permitting free-floating strings. The third hop is the reconciliation operator: "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites" [PAGE 1]. Because no staleness TTL τ_stale is specified anywhere on the page, the exact breakdown regime occurs at the singularity where now − t_verified exceeds an unspecified bound; at that point the system cannot algorithmically downgrade a fact to stale, so the only safe render state is qualified or unknown, never confirmed.

A fourth hop is the public/private boundary. Public player pages and team pages may show current fact, qualified status, and last verified timestamp, but founder/admin surfaces may show source weights, conflicts, parser errors, and raw evidence links, while the card explicitly commands: "Do not expose proprietary reconciliation logic" [PAGE 1]. The internal conflict-scoring function must therefore remain a black box whose outputs (ConflictRecord, stale flags) are visible but whose weights are hidden.

The fifth hop is the smoke-test anti-regression trap. The test plan requires Najee Harris and Rico Dowdle smoke tests that "compare rendered facts against current source evidence fixtures, not hardcoded replacement teams" [PAGE 1]. This is a direct counter-trap to the crisis habit of baking in known player-team mappings, which would fail the moment a trade, waiver, or practice-squad move occurs. Because the visible workspace is a docs/control lane, "not a full app checkout" [PAGE 1], there is no runtime repository against which to validate the adapter until real repo root, branch, dirty state, package manager, and existing app files are verified.

Gray-zone audit: the card mandates read-only source adapters or fixture-based probes first and prohibits production database mutation and deploy [PAGE 1], yet it does not specify the promotion path to live official sources, the robots.txt review artifact, or the terms-of-service signoff record required by "Use official/public sources only after terms and robots review" [PAGE 1]. Risks are MEDIUM across legal, source, and maintenance, with the primary trust risk defined as "making a stale or conflicted fact look confirmed" [PAGE 1]. Implementation must remain docs-first, type-only, or disabled-by-default, and rollback must delete generated fixtures and leave existing production data untouched [PAGE 1]. This chain establishes BUILD-NRT-002 as a governance contract whose executable surface is intentionally minimal until legal and repo verifications close.

Word count check: roughly 420 words. Good, meets >=400.

Now SOURCE_OPERATORS_AND_EQUATIONS.

Define mathematical notation.

Let \(T = \mathbb{R}_{\ge 0}\) be Unix timestamps in seconds (SI unit s).
Let \(U\) be the set of URLs.
Let \(H = \{0,1\}^{256}\) be SHA-256 hash outputs (information unit bits; entropy \(H(h) = 256\) bits under assumption of collision-resistant SHA-256).
Let \(V\) be parser versions with semantic-version ordering.
Let \(E\) be evidence identifiers.
Let \(\mathcal{F}\) be roster facts (team, jersey number, status, staff role).

Raw source snapshot operator:
\[
\mathcal{S}(t_s, u, h, n, v, E_s) = (t_s \in T,\ u \in U,\ h \in H,\ n \in \mathbb{N}_0,\ v \in V,\ E_s \subseteq E)
\]
where \(n\) is parsed record count (unit: records).

Normalized roster record:
\[
r = (\text{player\_id},\ \phi \in \mathcal{F},\ \text{value},\ t_{\text{verified}} \in T,\ w_{\text{source}} \in [0,1],\ \sigma \in \{\text{current},\text{qualified},\text{stale},\text{unknown},\text{conflicted}\},\ e_{\text{ref}} \in E)
\]
\(w_{\text{source}}\) is a dimensionless source weight, interpreted as an epistemic probability mass, not a betting line.

Conflict predicate:
\[
\operatorname{Conf}(r_a, r_b) = 1 \iff \phi_a = \phi_b \land \text{value}_a \neq \text{value}_b \land \neg \bigl(t_{\text{verified},a} > t_{\text{verified},b} \land \text{source}_a = \text{official}\bigr)
\]
Official-wins rule reconciled as:
\[
r^\star = 
\begin{cases}
r_{\text{official}} & \text{if } \neg \operatorname{Stale}(r_{\text{official}}) \land \neg \exists r_{\text{txn}} : t_{\text{txn}} > t_{\text{official}} \land \operatorname{Conf}(r_{\text{official}}, r_{\text{txn}})\\
\text{ConflictRecord} & \text{if } \operatorname{Conf} = 1\\
r_{\text{fallback}} & \text{if official absent or stale}
\end{cases}
\]
Staleness predicate:
\[
\operatorname{Stale}(r) = 1 \iff (t_{\text{now}} - t_{\text{verified}}) > \tau_{\text{stale}}
\]
Breakdown regime: \(\tau_{\text{stale}}\) is unspecified on [PAGE 1], so \(\operatorname{Stale}\) is undefined; the system must render \(\sigma \in \{\text{qualified},\text{unknown}\}\) rather than confirmed.

Validation operators:
\[
\text{roster:audit},\ \text{roster:verify},\ \text{roster:conflicts},\ \text{roster:stale},\ \text{test:roster}
\]
return boolean or ConflictRecord sets; no production mutation.

Citations and quotes: quote "Official current evidence wins unless stale or contradicted by newer official transaction evidence." [PAGE 1]; quote "Conflicts create ConflictRecord entries instead of silent overwrites." [PAGE 1]; quote "Do not expose proprietary reconciliation logic." [PAGE 1]; quote "Every roster fact touched by the build has source evidence design." [PAGE 1].

Units and assumptions listed.

Breakdown regimes listed explicitly.

That's maybe 250-300 words. Good.

RETROCAUSAL_GENEALOGY (~200 words):
Lineage: roster facts are trust infrastructure for Player Lab, GSE Rating, search, content, customer trust, internal decisions [PAGE 1]. Existing cards cover generic freshness, source QA, player surfaces but not "fact-level NFL roster evidence, conflict handling, staff rules, or deploy gates" [PAGE 1]. This is a lineage gap: control docs exist, runtime does not.

Multi-week traps: NFL rosters change weekly (trades, cuts, IR, practice squad). Najee Harris/Rico Dowdle fixtures must be current per week; stale fixture across weeks causes rendered fact drift. Staff rules (coaches, front office) change mid-season; missing staff rules is a current problem [PAGE 1]. Staleness singularity: without τ_stale, week-old facts remain confirmed indefinitely, violating "Stale/unknown facts do not render as confirmed" [PAGE 1].

RECURSIVE_THEORY_OF_MIND (~180 words):
Crisis habit regression: under deploy pressure, engineer may hardcode team assignments or silently overwrite conflicts. Explicitly forbidden: smoke tests "not hardcoded replacement teams" [PAGE 1]; conflicts create ConflictRecord "instead of silent overwrites" [PAGE 1].
Counter-trap: founder roster accuracy cockpit and data quality reports expose source weights, conflicts, parser errors, raw evidence links [PAGE 1]; public sees qualified status and last verified timestamp only.
Clock: staleness is a temporal clock \(t_{\text{now}} - t_{\text{verified}}\) with undefined \(\tau_{\text{stale}}\); until freshness signoff, clock default is veto (do not render confirmed).

CROSS_LAYER_VETO_ADJUDICATION (~180 words):
Physical layer: verify repo root, branch, dirty state, package manager, scripts, existing patterns [PAGE 1]. Veto if dirty state or unknown root.
Biomechanical/human layer: parser errors and manual roster entry errors; record internally, never expose proprietary logic publicly [PAGE 1]. Veto if parser version mismatch between snapshot and adapter (normalization undefined).
Environmental/weather-analog layer: source outages, robots.txt blocks, TOS changes; use official/public sources only after terms and robots review; do not scrape private, paywalled, login-gated, prohibited, high-volume [PAGE 1]. Veto if credentials required or legal review pending.
Veto proof: disabled-by-default implementation; read-only adapters/fixture probes; no production DB mutation or deploy [PAGE 1]; rollback removes new disabled script/types/docs, deletes generated fixtures, leaves production untouched [PAGE 1].

RLVR_COUNTERFACTUAL_VETOES (~200 words):
3 scenarios.
Scenario 1: Production mutation. Veto: adapter attempts INSERT/UPDATE on production roster table. Trigger: static DML guard / migration review. Prediction: build halts; zero production rows modified; rollback removes script/types/docs and deletes fixtures; existing production data untouched [PAGE 1]. Verifiable via git diff (no migrations) and database checksum unchanged.
Scenario 2: Stale confirmed render. Veto: stale official fact with old t_verified rendered as confirmed on public page without qualified status. Trigger: roster:stale and roster:audit. Prediction: public surface shows qualified status and last verified timestamp only; no confirmed badge [PAGE 1]. Verifiable via test:roster returning nonzero for stale fixture.
Scenario 3: Hardcoded smoke test. Veto: Najee Harris or Rico Dowdle test uses literal current team instead of fixture lookup. Trigger: test comparator source inspection. Prediction: test:roster fails; fixture re-grounded to current source evidence; no hardcoded replacement teams [PAGE 1]. Verifiable via test output diff showing fixture-based assertion.

Total likely >1200 words. Good.

Now ensure no markdown code blocks? XML sections can contain LaTeX. I'll just write.

Double check for banned words: spread, total, moneyline, odds, line. None. "Probability mass" is okay (not betting). "Weight" is okay.

Make sure citations [PAGE 1] appear. Good.

Now produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The card BUILD-NRT-002 sits in a dependency gray zone: duplicate_check_status is DEPENDENCY, matched_existing_ids is BUILD-071, and relation_to_existing calls it a "Prerequisite dependency for roster truth implementation" [PAGE 1]. Yet parent_id, supersedes_id, and dependency_ids are all empty, so the multi-hop resolution chain cannot be mechanically verified from this page alone; BUILD-071 must be read and reconciled before the adapter contract can be treated as executable rather than declarative.

The second hop is the evidence-design acceptance criterion: "Every roster fact touched by the build has source evidence design" [PAGE 1]. This forces every public fact—team, number, status, staff role—onto a many-to-one evidence graph rooted in RawSourceSnapshot evidence IDs, rather than permitting free-floating strings. The third hop is the reconciliation operator: "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites" [PAGE 1]. Because no staleness TTL τ_stale is specified anywhere on the page, the exact breakdown regime occurs at the singularity where now − t_verified exceeds an unspecified bound; at that point the system cannot algorithmically downgrade a fact to stale, so the only safe render state is qualified or unknown, never confirmed.

A fourth hop is the public/private boundary. Public player pages and team pages may show current fact, qualified status, and last verified timestamp, but founder/admin surfaces may show source weights, conflicts, parser errors, and raw evidence links, while the card explicitly commands: "Do not expose proprietary reconciliation logic" [PAGE 1]. The internal conflict-scoring function must therefore remain a black box whose outputs (ConflictRecord, stale flags) are visible but whose weights are hidden.

A fifth hop is the smoke-test anti-regression trap. The test plan requires Najee Harris and Rico Dowdle smoke tests that "compare rendered facts against current source evidence fixtures, not hardcoded replacement teams" [PAGE 1]. This is a direct counter-trap to the crisis habit of baking in known player-team mappings, which would fail the moment a trade, waiver, or practice-squad move occurs. Because the visible workspace is a docs/control lane, "not a full app checkout" [PAGE 1], there is no runtime repository against which to validate the adapter until real repo root, branch, dirty state, package manager, and existing app files are verified.

Gray-zone audit: the card mandates read-only source adapters or fixture-based probes first and prohibits production database mutation and deploy [PAGE 1], yet it does not specify the promotion path to live official sources, the robots.txt review artifact, or the terms-of-service signoff record required by "Use official/public sources only after terms and robots review" [PAGE 1]. Risks are MEDIUM across legal, source, and maintenance, with the primary trust risk defined as "making a stale or conflicted fact look confirmed" [PAGE 1]. Implementation must remain docs-first, type-only, or disabled-by-default, and rollback must delete generated fixtures and leave existing production data untouched [PAGE 1]. This chain establishes BUILD-NRT-002 as a governance contract whose executable surface is intentionally minimal until legal and repo verifications close.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators for BUILD-NRT-002, grounded in [PAGE 1].

Let T = ℝ≥0 be Unix timestamps in seconds (SI unit s). Let U be the set of URLs. Let H = {0,1}256 be SHA-256 hash outputs (information unit bits; entropy H(h) = 256 bits under the assumption of collision-resistant SHA-256). Let V be parser versions with semantic-version ordering. Let E be evidence identifiers. Let 𝓕 be roster facts: team, jersey number, status, staff role.

Raw source snapshot operator:
S(t_s, u, h, n, v, E_s) = (t_s ∈ T, u ∈ U, h ∈ H, n ∈ ℕ₀, v ∈ V, E_s ⊆ E)
where n is parsed record count (unit: records), and E_s links the snapshot to its evidence IDs.

Normalized roster record:
r = (player_id, φ ∈ 𝓕, value, t_verified ∈ T, w_source ∈ [0,1], σ ∈ {current, qualified, stale, unknown, conflicted}, e_ref ∈ E)
w_source is a dimensionless source weight, interpreted as an epistemic probability mass in [0,1], not a betting line or implied probability market quote.

Conflict predicate:
Conf(r_a, r_b) = 1 iff φ_a = φ_b ∧ value_a ≠ value_b ∧ ¬(t_verified,a > t_verified,b ∧ source_a = official)

Reconciliation rule, quoting [PAGE 1]: "Official current evidence wins unless stale or contradicted by newer official transaction evidence." Conflicts create ConflictRecord entries instead of silent overwrites [PAGE 1]. Operationally:
r* = r_official if ¬Stale(r_official) ∧ ∄ r_txn : t_txn > t_official ∧ Conf(r_official, r_txn);
r* = ConflictRecord if Conf = 1;
r* = r_fallback if official is absent or stale.

Staleness predicate:
Stale(r) = 1 iff (t_now − t_verified) > τ_stale
Breakdown regime: τ_stale is unspecified on [PAGE 1], so Stale is undefined at the singularity τ_stale → unspecified; the system must render σ ∈ {qualified, unknown} rather than confirmed.

Validation operators mandated on [PAGE 1]: roster:audit, roster:verify, roster:conflicts, roster:stale, test:roster. Acceptance criterion: "Every roster fact touched by the build has source evidence design" [PAGE 1]. Public/private boundary: "Do not expose proprietary reconciliation logic" [PAGE 1].

Assumptions: SHA-256 hash entropy is 256 bits; semantic versioning admits a strict ordering on V; source weights are normalized to [0,1]. Breakdown regimes: (1) τ_stale undefined ⇒ no automated staleness downgrade; (2) source requires credentials, paywall, login, or high-volume access ⇒ adapter prohibited per legal/TOS boundary [PAGE 1]; (3) production DB mutation detected ⇒ hard veto and rollback [PAGE 1]; (4) parser version mismatch between snapshot and adapter ⇒ normalization undefined; quarantine snapshot.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage: roster facts are "trust infrastructure" for Player Lab, GSE Rating, search, content, customer trust, and internal decisions [PAGE 1]. Existing cards define generic freshness, data source QA, and player surfaces, but not "fact-level NFL roster evidence, conflict handling, staff rules, or deploy gates" [PAGE 1]. This is a lineage gap between the docs/control lane and runtime reality: the workspace is explicitly "a docs/control lane, not a full app checkout" [PAGE 1], so historical precedent for production roster adapters is absent from this namespace.

Multi-week traps: NFL rosters change weekly through trades, waivers, injured-reserve moves, and practice-squad elevations. Najee Harris and Rico Dowdle smoke tests must "compare rendered facts against current source evidence fixtures" each validation cycle [PAGE 1]; a fixture verified in Week 3 that is not refreshed by Week 6 becomes a stale fact rendered as confirmed, violating the acceptance criterion that "Stale/unknown facts do not render as confirmed" [PAGE 1]. Staff rules are another multi-week trap: coaching and front-office roles change mid-season, yet staff rules are listed among the missing capabilities in the Current Problem section [PAGE 1]. Without a defined τ_stale, the temporal chain from t_verified to t_now has no automatic off-ramp, so multi-week drift accumulates invisibly unless roster:stale and roster:conflicts are executed on every refresh cycle.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under deploy pressure, an engineer may regress to silent overwrite of conflicting roster facts or hardcode known player-team mappings (e.g., Najee Harris or Rico Dowdle onto a current team literal). Both are explicitly forbidden: smoke tests must compare "against current source evidence fixtures, not hardcoded replacement teams" [PAGE 1], and conflicts must create ConflictRecord entries "instead of silent overwrites" [PAGE 1].

Counter-trap: the founder roster accuracy cockpit and data quality reports expose source weights, conflicts, parser errors, and raw evidence links internally [PAGE 1], while public surfaces are limited to current fact, qualified status, and last verified timestamp. This asymmetry forces the crisis impulse toward transparency: any hidden reconciliation logic remains unexposed [PAGE 1], and any conflict is surfaced as an internal ConflictRecord rather than collapsed silently.

Clock: staleness is a temporal clock t_now − t_verified with an undefined τ_stale [PAGE 1]. Until legal and freshness signoff close, the clock defaults to veto: public renderers must not promote qualified or unknown facts to confirmed. The regression-versus-counter-trap boundary is therefore policed by the validation suite roster:audit, roster:verify, roster:conflicts, roster:stale, and test:roster [PAGE 1], which runs only after implementation and currently stands in for fixture-based and JSONL/card checks.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: before implementation, verify real repo root, branch, dirty state, package manager, scripts, and existing app files [PAGE 1]. Veto condition: dirty repository state or unverifiable repo root halts the build; no production database migrations, deployment config, secrets, live cron jobs, or credential-requiring sources may be touched [PAGE 1].

Biomechanical/human layer: parser errors and manual roster-entry errors are internal observables, recorded in parser error logs and raw evidence links, but never exposed as proprietary reconciliation logic publicly [PAGE 1]. Veto condition: parser version mismatch between RawSourceSnapshot and the current adapter makes normalization undefined; the snapshot is quarantined rather than forced into NormalizedRosterRecord.

Environmental/weather-analog layer: official/public sources are used only after terms and robots review; private, paywalled, login-gated, prohibited, or high-volume sources are prohibited [PAGE 1]. Veto condition: any source requiring credentials, legal review pending, robots.txt block, or source outage disables that adapter path; media/fantasy sources remain fallback/corroboration unless legal approval upgrades them [PAGE 1].

Veto proof: the implementation is smallest, docs-first, type-only, or disabled-by-default [PAGE 1]; adapters are read-only or fixture-based [PAGE 1]; no production data mutation or deploy occurs [PAGE 1]. Rollback removes new disabled scripts/types/docs, deletes generated fixtures, and leaves existing production data untouched [PAGE 1], providing a hard physical veto against persistence of unverified roster facts.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable veto scenarios with counterfactual predictions, all tied to [PAGE 1].

Scenario 1 — Production mutation veto. Counterfactual: an adapter script attempts INSERT or UPDATE against the production roster table. Veto trigger: pre-deploy static analysis or migration guard detects DML. Prediction: build halts; zero production rows modified; rollback executes per plan (remove new disabled script/types/docs, delete generated fixtures, existing production data untouched) [PAGE 1]. Verifiable by git diff showing no migration files and by an unchanged production database checksum.

Scenario 2 — Stale-confirmed render veto. Counterfactual: a stale official fact with t_verified older than the operational freshness bound is rendered as confirmed on a public player page without qualified or stale status. Veto trigger: roster:stale and roster:audit flag the record; the public renderer checks σ ∈ {stale, unknown} before confirming. Prediction: public surface shows qualified status and last verified timestamp only; no confirmed badge is rendered [PAGE 1]. Verifiable by test:roster and roster:stale returning nonzero on a stale fixture.

Scenario 3 — Hardcoded smoke-test veto. Counterfactual: the Najee Harris or Rico Dowdle smoke test contains a literal current team string instead of a lookup against the current source evidence fixture. Veto trigger: test-comparator source inspection detects hardcoded replacement team. Prediction: test:roster fails; the fixture is re-grounded to current source evidence; no hardcoded replacement teams are accepted [PAGE 1]. Verifiable by test output diff showing fixture-based assertions rather than hardcoded team strings.
</RLVR_COUNTERFACTUAL_VETOES>