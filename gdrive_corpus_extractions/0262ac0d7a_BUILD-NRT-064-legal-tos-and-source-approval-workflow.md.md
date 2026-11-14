---
source: "BUILD-NRT-064-legal-tos-and-source-approval-workflow.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4557
---

<NATIVE_REASONING>
The user wants me to process a source document (BUILD-NRT-064) and produce a structured response with specific XML sections, each with deep content. This is a reasoning/foundry task, not actual code execution. I must follow strict invariants:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS - no fake ratios. Use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite [PAGE N] markers and verbatim quotes since source pages are provided (PAGES: 1).
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

I need to treat the provided source text as PAGE 1. I should cite [PAGE 1] and include verbatim quotes where relevant.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation and gray-zone audit. Discuss the dependency on BUILD-GV2-092, legal TOS boundary, source approval workflow, reconciliation plan, validation plan, risks (stale/conflicted facts), Najee Harris and Rico Dowdle smoke tests, production mutation prohibition, disabled-by-default implementation. Gray zones: "official/public sources only after terms and robots review" - what counts as official? robots.txt review process? "Media/fantasy sources are fallback/corroboration unless legal approval upgrades them" - upgrade criteria undefined. "Stale or contradicted by newer official transaction evidence" - staleness threshold undefined. "Do not expose proprietary reconciliation logic" - tension with transparency. Minimum 400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Define SourceRegistry schema, evidence IDs, hash verification, freshness decay function, conflict scoring, staleness predicate. SI units: seconds for timestamps, bytes for hashes (SHA-256 = 256 bits), counts dimensionless. Probability units for source weights. Exact singularity/breakdown regimes: when official source is stale AND contradicted by fallback; when hash mismatch; when parser version mismatch; when robots.txt disallows; when no legal approval. Cite [PAGE 1]. Verbatim quotes from source.

<RETROCAUSAL_GENEALOGY>: Historical lineage of roster truth systems, source approval workflows, legal TOS in sports data, multi-week traps (stale roster facts propagating through Player Lab, GSE Rating, search, content). Cite the card's mention of Player Lab, GSE Rating, search, content, customer trust, internal decisions [PAGE 1]. Multi-week traps: injury designations, waiver claims, practice squad moves, preseason cuts, final roster cuts, Tuesday/Wednesday waiver wires, etc.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. How operators might regress under pressure to hardcode replacements (violating smoke test instruction), silent overwrites instead of ConflictRecord, exposing proprietary reconciliation logic, scraping prohibited sources to meet deadlines, skipping robots review. Counter-trap: evidence-first rendering, stale/unknown not confirmed, disabled-by-default. Clock: deploy gates, validation suite timing, Najee Harris/Rico Dowdle smoke tests.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. This is a bit odd for a legal/docs card, but I need to interpret: physical layer = repo/filesystem, production DB, migrations; biomechanical = human parsing/parser version errors; weather = external source volatility, rate limits, robots changes. Veto conditions that halt implementation.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable veto scenarios with predictions. E.g., (1) robots.txt disallows target source after probe -> veto ingestion, prediction: no data stored, fallback only; (2) official source stale and contradicted by fallback -> ConflictRecord created, no silent overwrite, prediction: public shows qualified status not confirmed; (3) Najee Harris smoke test renders fact against hardcoded replacement team -> test fails, rollback triggered, prediction: implementation rejected until fixture comparison passes.

Word count: Need >= 1000 words total across sections. THINK_TRACE >= 400 words. I'll aim for substantial depth in each.

No betting lines. No toy equations. Use real LaTeX.

Let me draft carefully, ensuring citations [PAGE 1] and verbatim quotes.

I'll structure the response with the XML sections exactly as named.

Let me write the content now.

THINK_TRACE (>=400 words):
Start with duplicate gate: DEPENDENCY, matched_existing_ids BUILD-GV2-092, prerequisite dependency. Reason not duplicate: adds NFL roster/person evidence, reconciliation, validation, remediation not defined by existing generic cards. Multi-hop: if we treat roster facts as trust infrastructure, errors propagate to Player Lab, GSE Rating, search, content, customer trust, internal decisions [PAGE 1]. Gray-zone audit: "official/current evidence wins unless stale or contradicted by newer official transaction evidence" - staleness undefined; "terms and robots review" - review authority undefined; "media/fantasy sources are fallback/corroboration unless legal approval upgrades them" - upgrade criteria undefined; "Do not expose proprietary reconciliation logic" - conflicts with internal founder cockpit needing source weights. Risks: MEDIUM legal/source/maintenance. Primary trust risk: stale/conflicted fact looks confirmed [PAGE 1]. Implementation constraints: read-only adapters, fixture-based probes, raw snapshots with timestamp/URL/hash/record count/parser version/evidence IDs, no production mutation. Smoke tests: Najee Harris and Rico Dowdle compare rendered facts against fixtures, not hardcoded replacement teams. Acceptance criteria: duplicate gate honored, evidence design for every fact, conflicts visible, stale/unknown not confirmed, no DB mutation/deploy.

SOURCE_OPERATORS_AND_EQUATIONS:
Define SourceRegistry S = {s_i}. Each source has URL u_i, robots status r_i ∈ {ALLOW, DISALLOW, UNKNOWN}, TOS status t_i ∈ {APPROVED, PENDING, PROHIBITED}, weight w_i ∈ [0,1] (dimensionless probability/trust). Evidence record e = (fact_id, source_id, value, timestamp τ, hash h = SHA-256(raw) ∈ {0,1}^{256}, count n ∈ ℕ, parser_version v ∈ SemVer, evidence_id). Freshness predicate: Fresh(e) iff (τ_now - τ_e) ≤ Δ_stale. Δ_stale undefined → breakdown regime. Conflict: C(f) = {e_a, e_b | value_a ≠ value_b, same fact_id}. Resolution: Official current wins unless stale or contradicted by newer official transaction evidence. Formal: Winner = argmax with priority official ∧ ¬stale ∧ newer_transaction. Else ConflictRecord. Breakdown: hash mismatch h_computed ≠ h_stored → integrity failure; parser version drift v_current ≠ v_recorded → parse uncertainty; robots DISALLOW → ingestion veto; no TOS approval → source veto.

RETROCAUSAL_GENEALOGY:
Lineage: generic freshness cards, data source QA, player surfaces → NFL roster truth namespace. Historical traps: preseason roster cuts (final 53), waiver wire (Tuesday/Wednesday), practice squad elevations, injured reserve, suspensions, COVID/reserve lists. Multi-week trap: a stale Week 1 status propagates through Player Lab and GSE Rating for weeks if not reconciled; a wrong team assignment corrupts search and content. Founder roster accuracy cockpit and data quality reports are internal surfaces. Public/private boundary: public shows current fact, qualified status, last verified timestamp; founder/admin shows source weights, conflicts, parser errors, raw evidence links [PAGE 1].

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under deadline pressure, operator hardcodes Najee Harris/Rico Dowdle team (explicitly forbidden), silent overwrite instead of ConflictRecord, scrapes paywalled source to fill gap, skips robots review. Counter-trap: fixture comparison, disabled-by-default, evidence-first, stale/unknown not rendered as confirmed. Clock: validation suite (roster:audit, verify, conflicts, stale, test:roster) must run before any enablement; rollback removes scripts/types/docs, deletes fixtures, leaves production untouched.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: repo root verification, dirty state, package manager, no production DB migrations/deployment config/secrets/live cron. Biomechanical layer: parser errors, normalization/scoring rule mismatches, human evidence misreading. Weather layer: external source volatility, rate limiting, robots.txt changes, high-volume source prohibition. Veto proof: any violation halts; rollback plan.

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios:
1. Robots.txt DISALLOW after low-volume probe → veto ingestion. Prediction: raw snapshot not stored; source marked PENDING/PROHIBITED; fallback only.
2. Official source stale AND contradicted by newer official transaction → ConflictRecord created; public renders qualified status not confirmed. Prediction: no silent overwrite; founder cockpit shows conflict.
3. Smoke test renders Najee Harris/Rico Dowdle fact vs hardcoded replacement team → mismatch → test fails → rollback. Prediction: implementation rejected until fixture comparison passes.

Make sure word count is high. I'll write generously.

Let me ensure no betting lines appear. None needed.

Let me ensure formal LaTeX equations are present, not toy ratios. Use proper notation.

Citations: [PAGE 1] throughout. Verbatim quotes: quote exact phrases from source text.

Now write final output with XML sections.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit for BUILD-NRT-064.

The card opens with a duplicate gate whose status is DEPENDENCY, matched_existing_ids BUILD-GV2-092, and relation_to_existing described as a "Prerequisite dependency for roster truth implementation" [PAGE 1]. The reason_not_duplicate field states that this card "adds NFL roster/person evidence, reconciliation, validation, or remediation that existing generic cards do not define" [PAGE 1]. Multi-hop inference: because existing cards cover only generic freshness, data source QA, and player surfaces, BUILD-NRT-064 must not be collapsed into BUILD-GV2-092; it introduces fact-level NFL roster evidence and conflict handling inside the NFL roster truth namespace, with a link-back requirement to generic source/freshness cards rather than recreation [PAGE 1].

Goal and trust infrastructure. The goal is a Legal TOS and source approval workflow for the NFL roster truth system [PAGE 1]. The "Why It Matters" section declares roster facts are "trust infrastructure," and that wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions [PAGE 1]. This establishes a causal chain: a single fact error at the SourceRegistry layer cascades upward into consumer-facing rating and search surfaces, then into customer trust and internal founder decisions. The gray zone here is the absence of a quantified staleness threshold or error-propagation bound; the card names the risk but does not define the maximum allowable lag between a transaction event and evidence reconciliation.

Current problem and product surface. The visible workspace is described as a docs/control lane, not a full app checkout [PAGE 1]. Existing cards define generic freshness and QA but not fact-level NFL roster evidence, conflict handling, staff rules, or deploy gates [PAGE 1]. Product surface is internal governance; internal surfaces are the founder roster accuracy cockpit and data quality reports [PAGE 1]. The data model is SourceRegistry [PAGE 1]. This means the implementation boundary is deliberately narrow: governance, cockpit reporting, and data-quality telemetry, not public feature shipping.

Source proof and ingestion constraints. Source proof needed is "all sources" [PAGE 1]. The ingestion plan mandates read-only source adapters or fixture-based probes first; raw source snapshots must store timestamp, URL, hash, parsed record count, parser version, and evidence IDs; production data must not be mutated [PAGE 1]. Gray-zone audit: "Use official/public sources only after terms and robots review" [PAGE 1], but the card does not name the reviewing authority, the robots.txt re-check cadence, or the escalation path when a source transitions from ALLOW to DISALLOW mid-build. Similarly, "Media/fantasy sources are fallback/corroboration unless legal approval upgrades them" [PAGE 1] defines a role but not the upgrade criteria, evidentiary standard, or approval timestamp format.

Reconciliation and validation. Compare official, open-data, and fallback records fact-by-fact [PAGE 1]. Official current evidence wins unless stale or contradicted by newer official transaction evidence [PAGE 1]. Conflicts create ConflictRecord entries instead of silent overwrites [PAGE 1]. Validation commands are roster:audit, roster:verify, roster:conflicts, roster:stale, and test:roster once implemented; until then, source inventory, fixtures, and generated JSONL/card checks [PAGE 1]. Gray zone: "stale" is never bounded in seconds, games, or transactions, creating a breakdown regime where an official source is older than a fallback but the card gives no decision rule for that exact overlap.

Public/private and legal/TOS boundary. Public surfaces can show current fact, qualified status, and last verified timestamp [PAGE 1]. Founder/admin surfaces can show source weights, conflicts, parser errors, and raw evidence links [PAGE 1]. Proprietary reconciliation logic must not be exposed [PAGE 1]. Legal/TOS: official/public sources only after terms and robots review; do not scrape private, paywalled, login-gated, prohibited, or high-volume sources [PAGE 1]. Tension: the founder cockpit needs source weights internally, yet reconciliation logic is proprietary—adjudication must separate weight display from algorithm disclosure.

Repo context and implementation plan. Likely files are unknown in this workspace under docs/research/nfl-roster-truth [PAGE 1]. Files to avoid: production DB migrations, deployment config, secrets, live cron jobs, credential-requiring sources [PAGE 1]. Implementation steps: verify repo root/branch/dirty state/package manager; read this card and BUILD-GV2-092; smallest docs-first/type-only/disabled-by-default implementation; fixtures or low-volume legal probes only; validation/tests and rollback notes; report exact changed files and unresolved approvals [PAGE 1].

Acceptance criteria and test plan. Duplicate gate honored; every roster fact touched has source evidence design; conflicts visible internally; stale/unknown facts do not render as confirmed; no production database mutation or deploy [PAGE 1]. Unit tests: normalization and scoring rules. Integration: adapter fixtures and reconciliation. Data validation: stale/conflict/no-mock checks. Regression: Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, explicitly not hardcoded replacement teams [PAGE 1]. This last point is a critical anti-regression trap: hardcoding a team for either player would pass a naive assertion while violating the evidence-design requirement.

Rollback and risk. Rollback removes new disabled script/types/docs, deletes generated fixtures, and leaves existing production data untouched; later DB work rolls back through migration rollback and snapshot restore only after backup verification [PAGE 1]. Priority P0, difficulty S [PAGE 1]. Risks: Legal MEDIUM, Source MEDIUM, Maintenance MEDIUM [PAGE 1]. Primary trust risk: making a stale or conflicted fact look confirmed [PAGE 1].

Overall gray-zone summary: the card is rigorous on prohibitions (no production mutation, no scraping, no silent overwrites) but underspecified on positive decision procedures (staleness Δ, robots re-check interval, legal upgrade criteria, conflict weighting). The implementation must therefore be disabled-by-default with explicit approval gates, exactly as the card prescribes.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, assumptions, and breakdown regimes for BUILD-NRT-064 [PAGE 1].

SourceRegistry operator. Let the SourceRegistry be a finite set
\[
\mathcal{S} = \{s_i\}_{i=1}^{N}, \quad N \in \mathbb{N},
\]
where each source \(s_i\) carries the tuple
\[
s_i = (u_i,\ r_i,\ t_i,\ w_i),\quad u_i\in\Sigma^*,\ r_i\in\{\text{ALLOW},\text{DISALLOW},\text{UNKNOWN}\},\ t_i\in\{\text{APPROVED},\text{PENDING},\text{PROHIBITED}\},\ w_i\in[0,1].
\]
Here \(u_i\) is a URL string over alphabet \(\Sigma\); \(r_i\) is the robots.txt review status; \(t_i\) is the terms-of-service status; \(w_i\) is a dimensionless source-trust weight in the unit interval \([0,1]\), interpreted as a Bayesian prior probability that a fact from \(s_i\) is correct prior to reconciliation. \(w_i\) is not a betting line, odds, spread, or total; it is an internal governance weight visible only on founder/admin surfaces per the public/private boundary [PAGE 1].

Evidence record operator. Each raw snapshot stored by the read-only adapter is an evidence record
\[
e = (\text{fact\_id},\ i,\ \text{value},\ \tau,\ h,\ n,\ v,\ \text{evidence\_id}),
\]
with units and domains:
- \(\tau \in \mathbb{R}_{\ge 0}\) in seconds since Unix epoch (SI unit: s);
- \(h = \text{SHA-256}(\text{raw}) \in \{0,1\}^{256}\), a 256-bit hash;
- \(n \in \mathbb{N}_0\) parsed record count, dimensionless;
- \(v \in \text{SemVer}\) parser version string;
- \(\text{evidence\_id}\) a UUIDv4 identifier;
- \(\text{fact\_id}\) references a roster fact (team, number, status, staff role) [PAGE 1].

Freshness predicate and staleness breakdown. Define the age operator
\[
\operatorname{age}(e) = \tau_{\text{now}} - \tau_e \quad [\text{s}].
\]
The staleness predicate is
\[
\text{Stale}(e) \iff \operatorname{age}(e) > \Delta_{\text{stale}},
\]
where \(\Delta_{\text{stale}}\) is undefined in the source text [PAGE 1]. This is an exact breakdown regime: if \(\Delta_{\text{stale}}\) is not supplied by legal/source approval, the predicate is undefined and every freshness check is a partial function. The card's risk statement identifies the primary trust risk as "making a stale or conflicted fact look confirmed" [PAGE 1]; therefore the implementation must treat \(\text{Stale}(e) = \text{true}\) (or unknown) as a veto on rendering the fact as confirmed.

Hash integrity operator. On storage, verify
\[
h_{\text{computed}} = \text{SHA-256}(\text{raw}_{\text{stored}}) \stackrel{?}{=} h_{\text{stored}}.
\]
Breakdown regime: \(h_{\text{computed}} \neq h_{\text{stored}}\) triggers an integrity-failure veto; the snapshot is quarantined, not used for reconciliation, and a parser error is logged for founder/admin visibility [PAGE 1].

Parser-version drift operator. Let \(v_{\text{current}}\) be the adapter parser version and \(v_{\text{recorded}}\) the version stored with the evidence. Drift predicate
\[
\text{Drift}(e) \iff v_{\text{current}} \neq v_{\text{recorded}}.
\]
Breakdown: drift invalidates the parsed record count \(n\) and the semantic interpretation of \(\text{value}\); evidence must be reprocessed under \(v_{\text{current}}\) or flagged.

Conflict operator. For a fact \(f\), let \(\mathcal{E}(f) = \{e : e.\text{fact\_id}=f\}\). A conflict exists iff
\[
\exists e_a,e_b\in\mathcal{E}(f) : e_a.\text{value} \neq e_b.\text{value}.
\]
The card mandates: "Conflicts create ConflictRecord entries instead of silent overwrites" [PAGE 1]. Formal resolution rule: official current evidence wins unless stale or contradicted by newer official transaction evidence. Let \(\mathcal{O}\subseteq\mathcal{S}\) be official sources with \(t_i=\text{APPROVED}\). Define priority order:
\[
\operatorname{Resolve}(f) =
\begin{cases}
e^* \in \mathcal{E}(f)\cap\mathcal{O} : \neg\text{Stale}(e^*) \land \nexists e'\in\mathcal{E}(f)\cap\mathcal{O} : \tau_{e'} > \tau_{e^*}, & \text{if such } e^* \text{ exists},\\
\text{ConflictRecord}(f), & \text{otherwise}.
\end{cases}
\]
Breakdown regime: if the only official evidence is stale and the only newer evidence is non-official fallback, the rule does not specify whether fallback may override; the safe default is ConflictRecord and "qualified status" rather than confirmed public rendering [PAGE 1].

TOS/robots ingestion veto. A source adapter may probe only if
\[
\text{Veto}(s_i) \iff (r_i=\text{DISALLOW}) \lor (t_i\neq\text{APPROVED}) \lor (\text{high-volume}(s_i)) \lor (\text{paywalled/login-gated/private}(s_i)).
\]
If \(\text{Veto}(s_i)=\text{true}\), no raw snapshot is stored; the source is recorded as PENDING or PROHIBITED and media/fantasy fallback is permitted only as corroboration unless legal approval upgrades it [PAGE 1].

Validation command operators (pre-deploy, disabled-by-default):
\[
\{\text{roster:audit},\ \text{roster:verify},\ \text{roster:conflicts},\ \text{roster:stale},\ \text{test:roster}\}.
\]
Each returns a Boolean pass/fail and a JSONL artifact. The Najee Harris and Rico Dowdle regression smoke tests assert
\[
\text{rendered\_fact}(p) = \text{fixture\_fact}(p),\quad p\in\{\text{Najee Harris},\text{Rico Dowdle}\},
\]
against current source evidence fixtures, explicitly prohibiting hardcoded replacement teams [PAGE 1].

Rollback operator. Let \(F_{\text{new}}\) be the set of new disabled script/types/docs files and \(F_{\text{fix}}\) generated fixtures. Rollback:
\[
\text{Rollback} = (F_{\text{prod}}\cap F_{\text{new}}=\emptyset) \land (F_{\text{fix}}\ \text{deleted}) \land (\text{production DB untouched}).
\]
For later DB work, migration rollback and snapshot restore occur only after backup verification [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage of roster-truth source approval, and multi-week traps.

The lineage of BUILD-NRT-064 descends from generic data-freshness and source-QA cards in the Galaxy Sports Edge namespace, specifically the prerequisite dependency BUILD-GV2-092 identified in the duplicate gate [PAGE 1]. Those generic cards established source freshness, QA patterns, and player surfaces, but they stopped at the surface layer; they did not define fact-level NFL roster evidence, conflict handling, staff rules, or deploy gates [PAGE 1]. BUILD-NRT-064 therefore represents a namespace specialization: moving from generic player surfaces into NFL roster truth, where person evidence (team, number, status, staff role) is treated as trust infrastructure [PAGE 1].

Scientific lineage. The design mirrors evidence-registry patterns found in distributed systems and data provenance: immutable raw snapshots with content-addressable hashes (SHA-256), timestamped evidence IDs, parser-version pinning, and conflict records rather than last-write-wins. These patterns are intended to prevent silent overwrite corruption, which the card identifies as the mechanism by which wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions [PAGE 1].

Historical NFL roster traps. The multi-week hazard structure is central to why this build is P0. NFL roster truth is not static across a season; it undergoes high-frequency phase transitions:
- Preseason to final 53-man roster cuts (late August), where a large fraction of roster facts change simultaneously;
- Waiver wire processing (typically Tuesday/Wednesday during the season), where claimed players change team affiliation within 24 hours;
- Practice-squad elevations and standard contract promotions, which alter status week-to-week;
- Injured reserve, physically unable to perform, and reserve/suspended lists, which change status without changing team;
- Transaction evidence (official NFL transactions) that may contradict open-data or media reports.

A stale Week 1 status fact that is never reconciled propagates through Player Lab and GSE Rating for the remainder of the season, corrupting search and content surfaces and eroding customer trust [PAGE 1]. This is the retro-causal trap: a small ingestion error at week \(t\) becomes a high-magnitude trust failure at week \(t+k\) because downstream systems cache the confirmed fact. BUILD-NRT-064 interrupts this chain by requiring source evidence design for every fact, visible internal conflicts, and a prohibition on rendering stale or unknown facts as confirmed [PAGE 1].

Founder cockpit and data-quality reports. The internal surfaces—founder roster accuracy cockpit and data quality reports—are the feedback layer that detects retro-causal drift. By exposing source weights, conflicts, parser errors, and raw evidence links internally while showing only current fact, qualified status, and last verified timestamp publicly [PAGE 1], the system creates an observability boundary: operators can see conflict density and staleness before customers see a wrong roster fact.

Multi-week trap summary. The card does not define \(\Delta_{\text{stale}}\), which means the trap window is open-ended. Without a legal-approved staleness bound, a roster fact can remain "current evidence" across multiple weeks while ground truth has changed via waiver or IR. The implementation plan's fixture-based probe mandate and the Najee Harris/Rico Dowdle smoke tests are anti-trap controls: they force comparison against current source evidence fixtures rather than allowing hardcoded, stale team assignments to persist [PAGE 1].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock pressure for the operator executing BUILD-NRT-064.

Operator model. The executor (Claude Code in the GSN shipping clone) faces a docs-first, disabled-by-default mandate with explicit prohibitions: no production data, no secrets, no deployment, no scraping of prohibited/paywalled/login-gated/high-volume sources, and no hardcoded replacement teams in smoke tests [PAGE 1]. Under recursive theory of mind, we model the operator's own crisis habits, the counter-traps embedded in the card, and the clock governing deploy gates.

Crisis habit regression. When under deadline pressure or when fixtures are incomplete, an operator tends to regress to three failure modes:
1. Hardcoding the Najee Harris or Rico Dowdle team in the regression smoke test to make it pass quickly. This directly violates the test plan: "compare rendered facts against current source evidence fixtures, not hardcoded replacement teams" [PAGE 1]. The regression is attractive because it yields a green test without building the adapter fixture pipeline.
2. Silent overwrite instead of ConflictRecord when official and fallback records disagree. The card explicitly forbids this: "Conflicts create ConflictRecord entries instead of silent overwrites" [PAGE 1]. A tired operator may choose the last-write-wins path to unblock downstream rendering.
3. Scraping a paywalled or high-volume source to fill an evidence gap, violating the legal/TOS boundary: "Do not scrape private, paywalled, login-gated, prohibited, or high-volume sources" [PAGE 1].

Each regression habit produces a local optimization (green test, unblocked UI, filled gap) at the cost of the global trust invariant: stale or conflicted facts must not render as confirmed [PAGE 1].

Counter-trap. The card's counter-traps are structural. First, the duplicate gate is DEPENDENCY on BUILD-GV2-092, forcing the operator to read matched existing IDs before building, which breaks the habit of starting from scratch [PAGE 1]. Second, the implementation must be "the smallest docs-first, type-only, or disabled-by-default implementation," which prevents a rushed production enablement [PAGE 1]. Third, fixtures or low-volume legal probes only, with read-only adapters, create a physical barrier to scraping [PAGE 1]. Fourth, the smoke-test fixture comparison is an adversarial test: it fails if the operator hardcodes teams, forcing evidence-first behavior [PAGE 1]. Fifth, rollback is explicitly defined and production data is untouched, lowering the cost of aborting a regressed implementation [PAGE 1].

Clock. The clock is the sequence of validation commands and the deploy gate. The operator must run roster:audit, roster:verify, roster:conflicts, roster:stale, and test:roster once implemented [PAGE 1]. Until those pass, the implementation remains disabled-by-default. The clock expires only when: exact changed files are reported, unresolved approvals are listed, and no production database mutation or deploy has occurred [PAGE 1]. If the clock is exceeded—i.e., the operator attempts to deploy before conflict and stale checks pass—the build violates its own acceptance criteria and must be rolled back.

Recursive stability condition. The implementation is recursively stable iff the operator's crisis habits are contained by the disabled-by-default boundary and the smoke-test fixture comparison is adversarial enough to catch hardcoding. If either boundary collapses, the trust infrastructure failure mode (stale/conflicted fact rendered as confirmed) becomes reachable [PAGE 1].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather-layer vetoes with proof conditions.

Physical layer (repository and infrastructure). The card requires verification of repo root, branch, dirty state, package manager, scripts, and existing patterns before any work [PAGE 1]. Files to avoid: production DB migrations, deployment config, secrets, live cron jobs, and credential-requiring sources [PAGE 1]. Veto condition V_phys:
\[
V_{\text{phys}} = \text{dirty\_state}\neq\text{clean} \lor \text{branch}\neq\text{target} \lor \exists f\in F_{\text{changed}} : f\in\{\text{migrations, config, secrets, cron}\}.
\]
If \(V_{\text{phys}}\) is true, all file writes halt. Proof: the rollback plan leaves existing production data untouched, so any physical-layer violation is recoverable only if detected before deployment [PAGE 1].

Biomechanical layer (human parsing and evidence handling). This layer covers the operator's reading of source text, normalization rules, scoring rules, and evidence ID assignment. Unit tests cover normalization and scoring rules [PAGE 1]. Veto condition V_bio:
\[
V_{\text{bio}} = \text{parser\_version\_drift} \lor \text{hash\_mismatch} \lor \text{evidence\_id\_collision}.
\]
SHA-256 hash mismatch (\(h_{\text{computed}}\neq h_{\text{stored}}\)) quarantines the snapshot; parser-version drift invalidates parsed record counts [PAGE 1]. Biomechanical vetoes are logged as parser errors visible on founder/admin surfaces but not exposed publicly, consistent with the public/private boundary [PAGE 1].

Weather layer (external source volatility). External conditions include robots.txt status transitions, rate limiting, source paywalling, and high-volume source detection. Veto condition V_weather:
\[
V_{\text{weather}} = (r_i=\text{DISALLOW}) \lor (t_i\neq\text{APPROVED}) \lor \text{high-volume}(s_i).
\]
If any source in the ingestion plan trips V_weather, that source adapter is disabled; media/fantasy fallback remains permissible only as corroboration absent legal approval [PAGE 1]. The weather layer is non-stationary: a source approved today may be disallowed after a robots.txt change, so re-check cadence is an unresolved approval [PAGE 1].

Cross-layer adjudication rule. Implementation proceeds only if
\[
\neg V_{\text{phys}} \land \neg V_{\text{bio}} \land \neg V_{\text{weather}}.
\]
Any single layer veto aborts the build; rollback removes new disabled script/types/docs and deletes generated fixtures [PAGE 1]. The proof of veto soundness rests on the acceptance criteria: no production database mutation, no deploy, stale/unknown facts not rendered as confirmed, and conflicts visible internally [PAGE 1].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifier rewards) counterfactual veto scenarios with predictions.

Scenario 1: Robots.txt transition after low-volume probe. Counterfactual: the operator completes a fixture-based probe of an official/public source, but before storing the raw snapshot, the source's robots.txt is observed as DISALLOW or the TOS status is PENDING rather than APPROVED. Veto: \(V_{\text{weather}}=\text{true}\); the raw snapshot (timestamp, URL, hash, record count, parser version, evidence ID) is not stored; the source is recorded as PENDING/PROHIBITED; no fact derived from it is rendered as confirmed [PAGE 1]. Prediction: the SourceRegistry contains no evidence_id for that URL; public rendering for affected facts falls back to "qualified status" with last verified timestamp from the last approved source, or no fact at all; founder cockpit logs a source-weight exclusion and a robots/TOS veto entry. Verifiable via integration adapter fixtures and the roster:stale/roster:conflicts checks [PAGE 1].

Scenario 2: Stale official evidence contradicted by newer fallback. Counterfactual: official current evidence for Najee Harris's team is stale (\(\operatorname{age}(e)>\Delta_{\text{stale}}\)), while a newer open-data or media fallback reports a different team after a waiver transaction. Veto: the resolution rule cannot select the official evidence because it is stale, and it cannot silently overwrite with fallback because conflicts must create ConflictRecord entries [PAGE 1]. Prediction: a ConflictRecord is created for the fact; public rendering displays the current fact only with qualified status, not confirmed; founder/admin surfaces show source weights, the conflict, parser errors if any, and raw evidence links [PAGE 1]. Verifiable via roster:conflicts and roster:audit outputs and the JSONL/card check artifacts [PAGE 1]. This directly mitigates the primary trust risk: "making a stale or conflicted fact look confirmed" [PAGE 1].

Scenario 3: Smoke-test hardcoding detected by fixture comparison. Counterfactual: under schedule pressure, the operator hardcodes Rico Dowdle's rendered team in the regression test instead of comparing against current source evidence fixtures. Veto: the test:roster assertion \(\text{rendered\_fact}(\text{Rico Dowdle}) = \text{fixture\_fact}(\text{Rico Dowdle})\) fails because the fixture contains the evidence-derived team while the test asserts a hardcoded replacement team [PAGE 1]. Prediction: the build is rejected at the regression gate; rollback removes the new disabled script/types/docs and deletes generated fixtures; production data remains untouched [PAGE 1]. Verifiable by running test:roster and comparing the exact changed files report against the implementation plan [PAGE 1].

Composite prediction. Across all three scenarios, the invariant holds: no production database mutation, no deploy, stale/unknown facts do not render as confirmed, and conflicts remain visible internally [PAGE 1]. Unresolved approvals after the build: exact staleness bound \(\Delta_{\text{stale}}\), robots.txt re-check cadence, legal upgrade criteria for media/fantasy sources, and the reviewing authority for terms-and-robots review [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>