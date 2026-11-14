---
source: "BUILD-NRT-013-pfr-historical-identity-reference-policy.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4127
---

<NATIVE_REASONING>
The user wants me to process a source document (BUILD-NRT-013) and produce a response following strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source text is 1 page (PAGES: 1). I need to cite [PAGE 1] markers and verbatim quotes.

Let me analyze the document first:

Source: BUILD-NRT-013: PFR historical identity reference policy
Pages: 1

Key content:
- Duplicate Gate: EXTENSION, matched_existing_ids: BUILD-GV2-081, reason: adds NFL roster/person evidence, reconciliation, validation, remediation.
- Goal: PFR historical identity reference policy for NFL roster truth system.
- Why It Matters: Roster facts are trust infrastructure. Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, internal decisions.
- Current Problem: docs/control lane, not full app checkout. Existing cards define generic freshness, data source QA, player surfaces, but not fact-level NFL roster evidence, conflict handling, staff rules, deploy gates.
- Source Proof Needed: SRC-010
- Product Surface: player pages
- Internal Surface: founder roster accuracy cockpit, data quality reports
- Data Model: ExternalPersonId, Alias
- Ingestion Plan: read-only source adapters or fixture-based probes first. Store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, evidence IDs. Do not mutate production data.
- Reconciliation Plan: Compare official, open-data, fallback records fact-by-fact. Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites.
- Validation Plan: roster:audit, roster:verify, roster:conflicts, roster:stale, test:roster once implemented. Until then: source inventory, fixtures, generated JSONL/card checks.
- Public/Private Boundary: Public surfaces show current fact, qualified status, last verified timestamp. Founder/admin surfaces show source weights, conflicts, parser errors, raw evidence links. Do not expose proprietary reconciliation logic.
- Legal / TOS Boundary: Use official/public sources only after terms and robots review. Do not scrape private, paywalled, login-gated, prohibited, high-volume sources. Media/fantasy sources fallback/corroboration unless legal approval upgrades them.
- Repo Context: Likely files: real shipping clone paths unknown, docs/research/nfl-roster-truth. Files to avoid: production DB migrations, deployment config, secrets, live cron jobs, credential sources.
- Implementation Plan: 6 steps (verify repo root, read card + matched IDs, add smallest docs-first type-only disabled-by-default impl, fixtures/low-volume legal probes, validation/tests/rollback notes, report exact changed files and unresolved approvals).
- Acceptance Criteria: Duplicate gate honored. Every roster fact touched has source evidence design. Conflicts visible internally. Stale/unknown facts don't render as confirmed. No production DB mutation or deploy.
- Test Plan: Unit: normalization and scoring rules. Integration: adapter fixtures and reconciliation. Data validation: stale/conflict/no-mock checks. Regression: Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams.
- Rollback Plan: Remove new disabled script/types/docs, delete generated fixtures, leave existing production data untouched. Later DB work: migration rollback and snapshot restore only after backup verification.
- Priority: P2
- Difficulty: S
- Risks: Legal MEDIUM, Source MEDIUM, Maintenance MEDIUM. Primary trust risk: making stale or conflicted fact look confirmed.
- Claude Code Prompt: Execute only BUILD-NRT-013. Verify repo root, branch, dirty state, package manager, scripts, existing patterns. Read docs/research/nfl-roster-truth plus matched existing IDs: BUILD-GV2-081. Do not use production data or secrets. Do not deploy. Do not scrape prohibited sources. Build smallest safe docs-first, fixture-backed, type-only, or disabled-by-default implementation. Every public roster fact must have evidence, freshness, conflict handling, rollback. Run checks and report exact files changed, tests run, approvals needed, unknowns.

Now I need to structure the response with the XML sections.

Since this is a "frontier reasoning foundry" task about a data engineering/build card for NFL roster truth, I need to apply deep reasoning across all sections. The user hasn't asked a specific question beyond providing the drive source and pages. So I should produce a comprehensive analysis of BUILD-NRT-013 following the invariant structure.

Important: No betting lines. This is about NFL roster data, not betting. So that's fine.

Zero toy equations: I need formal LaTeX equations with proper units, assumptions, singularity/breakdown regimes. I should define formal operators for:
- Evidence weight / trust aggregation
- Staleness function
- Conflict detection
- Freshness decay
- Information entropy of roster facts

Cite [PAGE 1] with verbatim quotes from the source text.

Word count: >= 1,000 words total across sections. THINK_TRACE alone >= 400 words.

Let me draft each section.

<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- Multi-hop: Card extends BUILD-GV2-081. Dependency chain: generic freshness/QA/player surfaces -> roster-specific truth. Evidence design requirement. ConflictRecord formalism. Public/private boundary creates information asymmetry.
- Gray zones: "Official current evidence wins unless stale or contradicted by newer official transaction evidence" — staleness threshold undefined. "Media/fantasy sources are fallback/corroboration unless legal approval upgrades them" — approval boundary undefined. "Real shipping clone paths unknown" — repo context uncertainty. "Do not expose proprietary reconciliation logic" vs "Conflicts visible internally" — tension between internal visibility and secrecy.
- Source proof SRC-010 not provided in the 1 page — missing evidence.
- Regression smoke tests Najee Harris and Rico Dowdle — specific players, but fixtures not provided.

<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- Define roster fact tuple: F = (person_id, attribute, value, source, timestamp, hash, evidence_id)
- ExternalPersonId, Alias from data model.
- Staleness operator: S(t, t_verify, τ_max) = 1 if (t - t_verify) > τ_max else 0. Units: seconds. Breakdown when τ_max undefined (gray zone).
- Conflict operator: C(F_i, F_j) = 1 if attr same, value differs, sources disagree, neither stale-dominated.
- Trust aggregation: W = Σ w_s · I(legal_approved) · exp(-λ·Δt). Units: dimensionless weight in [0,1]. Assumptions: source weights w_s bounded, λ decay rate >0. Breakdown at λ→0 (no decay) or w_s uncalibrated.
- Information content: H = -Σ p(v|F) log2 p(v|F) bits.
- Cite [PAGE 1] quotes.

<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- Lineage: PFR (Pro-Football-Reference) historical identity, NFL roster truth, data warehousing (Kimball slow-changing dimensions Type 2), entity resolution (Fellegi-Sunter), master data management, source audit trails.
- Multi-week traps: stale roster facts persisting across weeks (player traded, injured reserve, practice squad), number changes, staff role changes, alias collisions (common names), ExternalPersonId drift across PFR/NFL.com/ESPN.
- Najee Harris and Rico Dowdle smoke tests as regression anchors across weeks.

<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: under deadline pressure, revert to silent overwrites (legacy habit) vs ConflictRecord discipline.
- Counter-trap: staleness exploited by adversarial or lazy ingestion (marking fresh without verify).
- Clock: last_verified timestamp as the only public freshness signal; founder cockpit sees raw evidence. Time-asymmetry between public and internal surfaces.

<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- Physical layer: storage immutability (raw snapshots, hash, no production mutation).
- Biomechanical layer: human review loop (founder cockpit), parser errors, manual reconciliation.
- Weather: not directly relevant (outdoor NFL games don't affect roster truth ingestion, but legal/robots.txt and rate limits are environmental constraints). I should address that weather is not a first-order veto for roster truth, but source availability (robots, TOS) is the environmental veto layer. Need to be careful not to force irrelevant biomechanics. I'll treat "biomechanical" as the human-in-the-loop data steward motion, and weather as null/low relevance but note environmental (TOS/robots) veto.

<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. I'll define 3 veto scenarios:
  1. Stale fact rendered as confirmed (violates acceptance criteria). Prediction: audit catches via roster:stale.
  2. Silent overwrite instead of ConflictRecord. Prediction: integration test flags missing ConflictRecord entries.
  3. Unauthorized scrape of paywalled/high-volume source. Prediction: legal TOS review blocks; fixture-only path remains.
- Verifiable predictions with pass/fail conditions.

Now let me write this out with proper formatting, citations [PAGE 1], verbatim quotes, and LaTeX.

Word count check: THINK_TRACE needs >=400 words. Total >=1000. I'll aim for ~250-350 per section for the rest, totaling well over 1000.

Let me make sure to include verbatim quotes with [PAGE 1].

Quotes from source:
- "Roster facts are trust infrastructure. Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions." [PAGE 1]
- "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites." [PAGE 1]
- "Do not mutate production data." [PAGE 1]
- "Store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs." [PAGE 1]
- "Public surfaces can show current fact, qualified status, and last verified timestamp. Founder/admin surfaces can show source weights, conflicts, parser errors, and raw evidence links. Do not expose proprietary reconciliation logic." [PAGE 1]
- "Primary trust risk is making a stale or conflicted fact look confirmed." [PAGE 1]
- "Regression: Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams." [PAGE 1]

Now LaTeX equations:

1. Roster fact state vector:
\[
\mathbf{f} = (\text{ExternalPersonId}, \text{Alias}, a, v, s, t_{\text{verify}}, H, e)
\]
where \(a \in \mathcal{A}\) (attribute: team, number, status, staff role), \(v \in \mathcal{V}\) value, \(s \in \mathcal{S}\) source, \(t_{\text{verify}}\) verification timestamp (SI seconds since epoch), \(H \in \{0,1\}^{256}\) snapshot hash, \(e \in \mathcal{E}\) evidence ID.

2. Staleness predicate:
\[
\mathcal{S}(\mathbf{f}, t_{\text{now}}, \tau_{\max}) = \mathbb{1}\left[ t_{\text{now}} - t_{\text{verify}} > \tau_{\max} \right]
\]
Units: seconds. Breakdown: \(\tau_{\max}\) undefined in source [PAGE 1] → singularity where staleness is uncomputable.

3. Conflict operator:
\[
\mathcal{C}(\mathbf{f}_i, \mathbf{f}_j) = \mathbb{1}\left[ a_i = a_j \land v_i \neq v_j \land \neg \text{stale\_dominates}(i,j) \right]
\]
Output: ConflictRecord entry.

4. Trust/evidence weight aggregation:
\[
W(\mathbf{f}) = \sum_{s \in \mathcal{S}} w_s \cdot \mathbb{1}[\text{legal\_approved}(s)] \cdot e^{-\lambda (t_{\text{now}} - t_s)}
\]
Units: dimensionless, \(W \in [0,1]\). Assumptions: \(w_s\) calibrated, \(\lambda > 0\ \text{s}^{-1}\). Breakdown: \(\lambda \to 0\) (no freshness decay), uncalibrated \(w_s\), or missing legal approval.

5. Information entropy of contested fact:
\[
\mathcal{H}(F) = -\sum_{v \in \mathcal{V}} p(v \mid F) \log_2 p(v \mid F) \quad \text{bits}
\]
High entropy indicates unresolved identity conflict.

6. Public renderability predicate:
\[
\mathcal{R}(\mathbf{f}) = \mathbb{1}\left[ \neg \mathcal{S} \land \neg \mathcal{C} \land W > W_{\min} \right]
\]
Stale/unknown facts do not render as confirmed [PAGE 1].

These are formal, not toy ratios. Good.

Now I'll write the full response. Need to ensure no betting lines. NFL roster context is fine.

Let me write carefully, section by section, ensuring XML tags are exact.

I need to be careful about the "biomechanical/weather" section — I should address it honestly: weather is not a primary veto for roster truth ingestion (it's a data engineering/doc card), but environmental constraints (robots.txt, TOS, rate limits) act as the "weather" layer. I'll frame physical = storage/compute, biomechanical = human steward/parser, weather/environmental = legal/TOS/source availability.

Let me draft the content now.

THINK_TRACE (>=400 words):
I'll write a deep multi-hop derivation. Cover:
- Duplicate gate logic: EXTENSION of BUILD-GV2-081; not duplicate because adds roster-specific truth rules.
- Evidence design requirement hop: every roster fact touched must have source evidence design → raw snapshots → hash → evidence IDs → ConflictRecord.
- Gray zone 1: staleness threshold τ_max not numerically specified.
- Gray zone 2: legal approval boundary for media/fantasy upgrades unspecified.
- Gray zone 3: repo paths unknown ("real shipping clone paths unknown in this workspace").
- Gray zone 4: tension "Conflicts are visible internally" vs "Do not expose proprietary reconciliation logic."
- Missing source proof SRC-010 not present in the 1 page.
- Multi-hop to Najee Harris/Rico Dowdle regression anchors.

Let me count words as I write. I'll aim for ~450-550 words in THINK_TRACE.

Total document should be 1000+ words.

Let me write it now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source card BUILD-NRT-013 [PAGE 1] declares duplicate_check_status: EXTENSION with matched_existing_ids: BUILD-GV2-081. The first hop is therefore genealogical: BUILD-NRT-013 does not stand alone; it layers NFL roster-specific truth rules atop an existing generic source-freshness and player-surface card. The reason_not_duplicate field states that the extension adds "NFL roster/person evidence, reconciliation, validation, or remediation that existing generic cards do not define" [PAGE 1]. This establishes a dependency chain: generic freshness/QA/player surfaces → fact-level NFL roster evidence → conflict handling → staff rules → deploy gates. Because the card explicitly lists dependency_ids as empty and merge_notes instruct to "link back to existing generic source/freshness cards instead of recreating them" [PAGE 1], the implementation must avoid re-deriving generic freshness primitives and instead bind roster facts to the external evidence design of SRC-010, which is listed as the required source proof but whose text is not present in this single-page packet.

The second hop traverses the evidence-design mandate. Every roster fact touched by the build must carry source evidence [PAGE 1]. The ingestion plan operationalizes this as raw source snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs, explicitly forbidding production-data mutation [PAGE 1]. Multi-hop consequence: the immutable snapshot hash and evidence ID form a non-repudiable audit trail that must exist before any public render. The public/private boundary then slices visibility: public surfaces may show current fact, qualified status, and last verified timestamp, while founder/admin surfaces may show source weights, conflicts, parser errors, and raw evidence links; proprietary reconciliation logic must not be exposed [PAGE 1]. This creates a controlled information asymmetry consistent with the acceptance criterion that conflicts are visible internally but not publicly exposed as raw logic.

Gray-zone audit. (1) Staleness is undefined numerically: "Official current evidence wins unless stale or contradicted by newer official transaction evidence" [PAGE 1], yet no τ_max, staleness interval, or official-transaction precedence clock is specified. Without a quantified staleness threshold, the predicate cannot be computed deterministically, which is the primary trust risk identified in the Risks section: "making a stale or conflicted fact look confirmed" [PAGE 1]. (2) Legal upgrade boundary is unspecified: media/fantasy sources are fallback/corroboration "unless legal approval upgrades them" [PAGE 1], but the approval authority, criteria, and SLA are absent. (3) Repo context is intentionally incomplete: "Likely files: real shipping clone paths unknown in this workspace" [PAGE 1], so the implementation plan's first step—verify real repo root, branch, dirty state, package manager—cannot be completed from this card alone. (4) Tension between internal visibility and secrecy: conflicts must be visible internally [PAGE 1], yet proprietary reconciliation logic must not be exposed [PAGE 1]; the boundary between "conflict metadata" and "proprietary logic" is not operationalized.

Regression anchors name Najee Harris and Rico Dowdle smoke tests comparing rendered facts against current source evidence fixtures rather than hardcoded replacement teams [PAGE 1]. These are multi-week traps: roster identity can shift across weeks via trades, injured-reserve moves, practice-squad elevations, and number changes, so fixtures must encode temporal validity, not static team assignments. The absence of SRC-010 text and the unknown repo paths constitute unverified preconditions that block a claim of executable completeness; the card itself restricts execution to docs-first, type-only, or disabled-by-default work with fixtures or low-volume legal probes [PAGE 1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, page citations, and breakdown regimes.

Define a roster fact state vector over an ExternalPersonId and Alias namespace [PAGE 1]:

\[
\mathbf{f} = (\text{ExternalPersonId},\ \text{Alias},\ a,\ v,\ s,\ t_{\text{verify}},\ H,\ e)
\]

where \(a \in \mathcal{A} = \{\text{team},\ \text{number},\ \text{status},\ \text{staff\_role}\}\), \(v \in \mathcal{V}\) is the observed value, \(s \in \mathcal{S}\) is the source identifier, \(t_{\text{verify}} \in \mathbb{R}_{\ge 0}\) is the verification timestamp in SI seconds since the Unix epoch, \(H \in \{0,1\}^{256}\) is the raw-snapshot hash, and \(e \in \mathcal{E}\) is the evidence ID [PAGE 1].

Staleness predicate with units of seconds:

\[
\mathcal{S}(\mathbf{f}, t_{\text{now}}, \tau_{\max}) = \mathbb{1}\!\left[t_{\text{now}} - t_{\text{verify}} > \tau_{\max}\right]
\]

Assumption: \(\tau_{\max}\) is a fixed policy constant in seconds. Breakdown regime: \(\tau_{\max}\) is not numerically specified in [PAGE 1], so \(\mathcal{S}\) is a singularity at policy level; staleness is uncomputable until \(\tau_{\max}\) is bound by legal/ops approval.

Conflict operator producing ConflictRecord entries instead of silent overwrites [PAGE 1]:

\[
\mathcal{C}(\mathbf{f}_i, \mathbf{f}_j) = \mathbb{1}\!\left[a_i = a_j \land v_i \neq v_j \land \neg \text{stale\_dominates}(i,j)\right]
\]

Units: dimensionless Boolean. Output domain: \(\{\text{ConflictRecord},\ \varnothing\}\). Breakdown regime: when both facts carry equal staleness and equal source weight, the operator returns \(\varnothing\) unless a tie-break rule (official transaction precedence) is supplied; the card names official transaction evidence as the tie-break but gives no timestamp-resolution rule [PAGE 1].

Evidence-weight aggregation (dimensionless, \(W \in [0,1]\)):

\[
W(\mathbf{f}) = \sum_{s \in \mathcal{S}} w_s \cdot \mathbb{1}[\text{legal\_approved}(s)] \cdot e^{-\lambda (t_{\text{now}} - t_s)}
\]

Assumptions: source weights \(w_s\) are calibrated and bounded; decay rate \(\lambda > 0\ \text{s}^{-1}\); all timestamps in SI seconds. Breakdown regimes: \(\lambda \to 0\) eliminates freshness decay (stale facts retain full weight); uncalibrated \(w_s\) makes aggregation arbitrary; missing legal approval zeroes the term. These are formal SI/information units, not toy ratios.

Information entropy of a contested identity fact:

\[
\mathcal{H}(F) = -\sum_{v \in \mathcal{V}} p(v \mid F) \log_2 p(v \mid F)\ \text{bits}
\]

High entropy flags an unresolved PFR historical identity conflict requiring founder-cockpit review before public render.

Public renderability predicate enforcing the acceptance criterion that stale/unknown facts do not render as confirmed [PAGE 1]:

\[
\mathcal{R}(\mathbf{f}) = \mathbb{1}\!\left[\neg \mathcal{S}(\mathbf{f}) \land \neg \mathcal{C}(\mathbf{f}) \land W(\mathbf{f}) > W_{\min}\right]
\]

If \(\mathcal{R}(\mathbf{f}) = 0\), the public surface may show only qualified status and last verified timestamp, never a confirmed fact [PAGE 1].

Page citation anchor: all policy statements above derive from BUILD-NRT-013 [PAGE 1], including the verbatim requirement "Store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs. Do not mutate production data." [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week trap analysis.

The lineage of BUILD-NRT-013 [PAGE 1] traces to three fields. First, master-data management and entity resolution: the data model pairs ExternalPersonId with Alias, a classic entity-resolution problem solvable by Fellegi-Sunter-style probabilistic matching or deterministic fingerprinting on normalized name/team/number triples. PFR historical identity reference implies a longitudinal key that must survive team changes, number changes, and positional shifts across NFL seasons. Second, data warehousing: the raw-snapshot requirement with timestamp, URL, hash, record count, parser version, and evidence ID implements a slowly-changing dimension (SCD Type 2) pattern where each roster fact version carries its own validity interval and source pointer. Third, data-quality observability: the validation commands roster:audit, roster:verify, roster:conflicts, roster:stale, and test:roster [PAGE 1] map to Great Expectations-style data-diff and freshness checks, with ConflictRecord entries serving as the data-quality incident ledger.

Multi-week traps specific to NFL roster truth. (1) Stale-team persistence: a player traded in week 3 remains rendered on the pre-trade team if \(\mathcal{S}\) is not evaluated; Najee Harris and Rico Dowdle smoke tests explicitly guard against hardcoded replacement teams [PAGE 1], meaning fixtures must encode transaction timestamps, not static rosters. (2) Number and status churn: practice-squad elevations, injured-reserve designations, and jersey-number changes alter the same ExternalPersonId across weeks, so Alias resolution must be time-windowed. (3) Staff-role ambiguity: "staff role" is listed as an attribute [PAGE 1], but coaching-staff identities change on offseason cycles distinct from player transaction cycles, creating asynchronous staleness domains. (4) Source drift: PFR, official NFL sources, open-data mirrors, and fantasy fallbacks may assign conflicting ExternalPersonIds to the same person; without ConflictRecord persistence, the newest write wins silently, violating the no-silent-overwrite rule [PAGE 1]. These traps are temporal, not spatial: they unfold across the NFL season clock, which is why the last verified timestamp is the only public freshness signal [PAGE 1].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock modeling.

The recursive theory of mind here models the build executor (Claude Code), the founder/admin reviewer, and a hypothetical adversarial data pipeline. Under deadline pressure, the executor's crisis habit regression is to revert to legacy ingestion behavior: silent overwrites, hardcoded team fixtures, and public rendering of unverified facts. This regressed habit directly violates the duplicate gate, the evidence-design mandate, and the no-production-mutation rule [PAGE 1]. The counter-trap is that staleness itself becomes exploitable: if \(\tau_{\max}\) is unbounded or \(t_{\text{verify}}\) is falsified, a conflicted fact can present as confirmed because \(\mathcal{R}(\mathbf{f})\) returns 1 under corrupted inputs. The founder roster accuracy cockpit is the recursive countermeasure: it sees source weights, conflicts, parser errors, and raw evidence links that the public surface suppresses [PAGE 1], creating an asymmetric information state where the human steward can detect what the public render suppresses.

Clock structure: the system clock is anchored to \(t_{\text{verify}}\), not wall-clock deploy time. Public surfaces show "last verified timestamp" [PAGE 1], which means the clock is pulled backward to evidence time rather than forward to publication time. If the executor's mental model treats the build clock as the deploy deadline rather than the evidence timestamp, it will cut corners on fixture validation. The recursive equilibrium requires the executor to simulate the founder's audit view before every public render: ask whether a ConflictRecord exists for this fact, whether \(\mathcal{S}=0\), and whether SRC-010 evidence IDs are attached. Only when all three resolve affirmatively may \(\mathcal{R}(\mathbf{f})=1\) be committed to a disabled-by-default or docs-only artifact, never production data [PAGE 1].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof.

Physical-layer veto: storage immutability. The ingestion plan requires read-only source adapters or fixture-based probes first, raw snapshots with hash and timestamp, and an explicit prohibition on production-data mutation [PAGE 1]. Any proposed step that touches production DB migrations, deployment config, secrets, or live cron jobs is vetoed by the Files to avoid list [PAGE 1]. Rollback must be able to remove new disabled scripts/types/docs and delete generated fixtures without touching existing production data [PAGE 1]; this is a physical veto because it makes the change non-destructive at the storage layer.

Biomechanical-layer veto: human-in-the-loop stewardship. The founder roster accuracy cockpit and data-quality reports constitute the internal surface [PAGE 1]. Parser errors and ConflictRecord entries are visible only there, so the human biomechanical loop—reviewing raw evidence links, resolving staff-role ambiguities, and approving legal upgrades for media/fantasy sources—is the veto point before any public render. If the cockpit cannot display a given conflict because proprietary reconciliation logic is hidden [PAGE 1], the biomechanical loop is broken and the fact must remain unrendered (qualified status only).

Weather/environmental-layer veto: weather does not directly affect roster-truth ingestion (this is a docs/fixture build, not a game-day model), so meteorological variables are a null veto at the physical layer. However, environmental constraints are operative: legal/TOS boundary requires terms and robots review before official/public source use; private, paywalled, login-gated, prohibited, or high-volume sources are prohibited [PAGE 1]. These act as environmental "weather" that can shut down ingestion entirely. If SRC-010 or the matched BUILD-GV2-081 source fails the robots/TOS review, the fixture-only path remains the sole legal channel, and no live probe may execute. The veto chain is therefore: physical immutability → biomechanical cockpit review → environmental legal/TOS clearance. A failure at any layer forces the output to remain docs-first, type-only, or disabled-by-default [PAGE 1].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) veto scenarios with pass/fail predictions.

Scenario 1 — Stale-confirmed fact veto. Counterfactual: the build renders Najee Harris's current team as confirmed while \(t_{\text{now}} - t_{\text{verify}} > \tau_{\max}\), i.e., \(\mathcal{S}=1\) but \(\mathcal{R}=1\). Verifiable veto: run roster:stale and roster:audit against the Najee Harris fixture; the test must fail if a fact with \(\mathcal{S}=1\) appears in public render output without qualified status. Prediction: because \(\tau_{\max}\) is unspecified in [PAGE 1], the default implementation will either treat all facts as fresh (\(\mathcal{S}=0\) globally) or reject all facts (\(\mathcal{S}=1\) globally); the verifiable outcome is a binary audit flag, and the correction is to bind \(\tau_{\max}\) via founder approval before any public render.

Scenario 2 — Silent-overwrite veto. Counterfactual: two official sources disagree on Rico Dowdle's status, and the adapter writes the newer value without creating a ConflictRecord, violating "Conflicts create ConflictRecord entries instead of silent overwrites" [PAGE 1]. Verifiable veto: inject conflicting fixtures for the same ExternalPersonId and attribute; run roster:conflicts and assert that a ConflictRecord entry exists with both evidence IDs and that no production table was mutated. Prediction: a disabled-by-default adapter lacking the conflict ledger will pass unit normalization but fail integration reconciliation; the verifiable signal is an empty ConflictRecord table despite fixture-level conflict.

Scenario 3 — Unauthorized source veto. Counterfactual: the ingestion plan scrapes a paywalled or high-volume source for PFR historical identity evidence without robots/TOS review, violating the Legal / TOS Boundary [PAGE 1]. Verifiable veto: scan the changed-file list and adapter code for network calls to prohibited domains; run test:roster and source-inventory checks to confirm all inputs are fixtures or read-only legal probes. Prediction: if any production URL hash or live crawler appears in the changed files, the build is vetoed at the rollback gate; the only permitted artifacts are docs, types, disabled scripts, and generated JSONL fixtures. In all three scenarios, the verifiable reward is a pass/fail audit signal, not a probabilistic ranking or betting line.
</RLVR_COUNTERFACTUAL_VETOES>