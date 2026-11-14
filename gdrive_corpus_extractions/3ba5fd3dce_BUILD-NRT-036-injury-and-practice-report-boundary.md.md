---
source: "BUILD-NRT-036-injury-and-practice-report-boundary.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4509
---

<NATIVE_REASONING>
The user wants me to process a source document (BUILD-NRT-036: Injury and practice report boundary) and produce a structured reasoning output following strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios. Formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

I need to analyze the source text provided. The source text is page 1 of the build card. I should cite [PAGE 1] and include verbatim quotes where relevant.

Let me plan the response:

**<THINK_TRACE>**: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to reason about:
- The duplicate gate: EXTENSION of BUILD-GV2-049, not a duplicate. Links to existing generic freshness/player surface cards.
- The "Current Problem": docs/control lane, not full app checkout; missing fact-level NFL roster evidence, conflict handling, staff rules, deploy gates.
- Source Proof Needed: SRC-012 (not provided, but referenced).
- Product Surface: Player Lab, briefs. Internal: founder roster accuracy cockpit, data quality reports.
- Data Model: StatusAssignment, AvailabilityReport.
- Ingestion Plan: read-only adapters, fixture probes, raw snapshots with timestamp/URL/hash/record count/parser version/evidence IDs. No production mutation.
- Reconciliation: official > open-data > fallback; official wins unless stale/contradicted by newer official transaction evidence. Conflicts -> ConflictRecord, no silent overwrites.
- Validation: roster:audit, roster:verify, roster:conflicts, roster:stale, test:roster. Until then: source inventory, fixtures, JSONL/card checks.
- Public/Private Boundary: public shows current fact, qualified status, last verified timestamp. Founder/admin shows source weights, conflicts, parser errors, raw evidence links. No proprietary reconciliation logic exposed.
- Legal/TOS: official/public sources only after terms and robots review. No scraping private/paywalled/login-gated/prohibited/high-volume. Media/fantasy fallback/corroboration unless legal approves.
- Repo Context: likely files unknown, docs/research/nfl-roster-truth. Avoid prod DB migrations, deploy config, secrets, live cron, credential sources.
- Implementation Plan: 6 steps.
- Acceptance Criteria: duplicate gate honored, source evidence design, conflicts visible internally, stale/unknown not confirmed, no prod DB mutation/deploy.
- Test Plan: Unit normalization/scoring, Integration adapter fixtures/reconciliation, Data validation stale/conflict/no-mock, Regression Najee Harris and Rico Dowdle smoke tests against fixtures not hardcoded teams.
- Rollback: remove disabled script/types/docs, delete generated fixtures, leave prod data untouched. Later DB work: migration rollback + snapshot restore after backup verification.
- Priority P1, Difficulty M, Risks MEDIUM across legal/source/maintenance. Primary trust risk: stale or conflicted fact looking confirmed.
- Claude Code Prompt: execute only BUILD-NRT-036, verify repo root/branch/dirty state/package manager/scripts/patterns, read card + BUILD-GV2-049, no prod data/secrets, no deploy, no prohibited scraping, smallest safe docs-first/fixture-backed/type-only/disabled-by-default, every public roster fact evidence/freshness/conflict/rollback, run checks and report exact files changed/tests run/approvals/unknowns.

Gray-zone audit: SRC-012 not provided; repo root unknown; branch/dirty state unknown; BUILD-GV2-049 not provided; exact shipping clone paths unknown; media/fantasy source legal approval status unknown; parser versioning scheme undefined; stale threshold undefined; conflict visibility UI not specified; smoke test fixtures for Najee Harris/Rico Dowdle not provided.

**<SOURCE_OPERATORS_AND_EQUATIONS>**: Formal LaTeX, units, page citations, breakdown.
- Define evidence trust score maybe as a formal information-theoretic quantity. But avoid toy equations. Use Shannon entropy or probability units properly.
- Let E be set of evidence records. Each record e_i has source s_i, timestamp t_i, hash h_i, parsed count c_i, parser version v_i, evidence ID id_i.
- Freshness staleness: Δt = t_now - t_last_verified. Units: seconds (SI). Staleness regime: Δt > τ_stale → stale.
- Conflict detection: For roster fact f, records r_a, r_b with values v_a ≠ v_b. ConflictRecord C(f) = {(r_a, r_b) | v_a ≠ v_b ∧ ¬(r_a supersedes r_b)}.
- Reconciliation precedence operator: Official current evidence wins unless stale or contradicted by newer official transaction evidence. Let O = official records, F = fallback. Value(f) = argmax precedence with staleness check.
- Probability of truth P(f | E) using Bayesian update maybe? But must be formal, not toy. Could define source weight w_s ∈ [0,1] as probability of accuracy, but that's not a fake ratio—it's a probability unit. However user said no toy equations like Force/Fatigue. A Bayesian source weighting is formal if assumptions stated.
- Singularity/breakdown: If all sources stale (Δt > τ_stale for all e ∈ E), truth value undefined → ⊥. If conflict set non-empty and no supersession relation, render unknown/qualified, not confirmed.
- Cite [PAGE 1] for quotes. Verbatim quotes from source text.

**<RETROCAUSAL_GENEALOGY>**: Historical/scientific lineage & multi-week traps.
- Lineage: NFL injury/practice report tradition (Wednesday/Friday reports), official transaction wire, GSN generic freshness cards (BUILD-GV2-049), Player Lab, GSE Rating.
- Multi-week traps: stale status persisting across weeks, practice-report participation misread as game availability, IR/designate-for-return confusion, number/team changes not propagated, quiet downgrades (questionable → out) not reflected in public cache, fixture drift where smoke tests for Najee Harris/Rico Dowdle hardcode old teams.

**<RECURSIVE_THEORY_OF_MIND>**: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under pressure, engineers might silently overwrite conflicts, expose raw reconciliation logic, or mutate prod to "fix" a VIP player status quickly. This regresses to pre-card habits.
- Counter-trap: The card explicitly mandates ConflictRecord, no silent overwrites, disabled-by-default, read-only adapters. The counter-trap is to treat any "urgent" roster fact correction as a fixture update, not a prod mutation.
- Clock: Staleness clock Δt vs verification cadence. If verification interval T_verify > τ_stale, facts render stale. The clock also governs regression risk: the longer since last roster:stale run, the higher probability a rendered fact is stale.

**<CROSS_LAYER_VETO_ADJUDICATION>**: Physical/biomechanical/weather veto proof.
- This is about roster truth, not game physics, but I can adapt: Physical layer = repo/filesystem, server, DB. Biomechanical = human data entry, parser errors, manual overrides. Weather = not applicable directly, but "source weather" = external source volatility (site changes, robots.txt changes, TOS changes).
- Veto proof: Any change to production data is vetoed by Acceptance Criteria and Rollback Plan. Any public rendering of conflicting/stale fact is vetoed by reconciliation plan. Any scraping of prohibited source is vetoed by Legal/TOS Boundary. Any exposure of proprietary reconciliation logic is vetoed by Public/Private Boundary.

**<RLVR_COUNTERFACTUAL_VETOES>**: 3 verifiable RLVR veto scenarios + predictions.
- Scenario 1: Engineer attempts to directly UPDATE StatusAssignment in production DB to fix Najee Harris team after a trade, bypassing adapter. VETO: No production DB mutation. Prediction: Build fails acceptance; rollback required; no deploy.
- Scenario 2: Public brief renders Rico Dowdle as "active" because latest fixture shows practice participation, despite official report listing him as questionable and conflict unresolved. VETO: Stale/unknown facts do not render as confirmed; conflicts create ConflictRecord. Prediction: Public surface shows qualified status + last verified timestamp, not confirmed active; internal cockpit shows conflict.
- Scenario 3: Adapter scrapes a paywalled/fantasy source at high volume to fill evidence gap for SRC-012 without legal approval. VETO: Legal/TOS boundary; official/public only after terms and robots review. Prediction: Adapter disabled/blocked; fixture-based probe used instead; legal approval needed before source upgrade.
- Each scenario needs to be verifiable and include prediction.

Word count: Need >=1000 words total across sections, with THINK_TRACE >=400 words.

I need to be careful about verbatim quotes and [PAGE 1] citations. I'll quote key phrases and cite [PAGE 1].

Let's draft carefully.

I must NOT mention betting lines. I won't.

I must NOT invent fake ratios. I'll use formal set-theoretic and information-theoretic notation with SI units (seconds, bits if needed, dimensionless probabilities). I'll state assumptions and breakdown regimes.

Let's write the sections.

THINK_TRACE: I'll write a deep multi-hop derivation. I'll cover the duplicate gate extension relationship, the missing fact-level layer, the precedence operator, the staleness clock, the public/private boundary, legal constraints, and the regression traps. I'll include gray-zone audit: unknown SRC-012, unknown repo root, unknown BUILD-GV2-049 contents, undefined τ_stale, undefined parser versioning, etc.

I'll aim for maybe 500-600 words in THINK_TRACE alone.

SOURCE_OPERATORS_AND_EQUATIONS: Formal definitions.

Let E = {e_1, ..., e_n} be raw snapshot set. Each e_i = (timestamp t_i, URL u_i, hash h_i, count c_i, parser version v_i, evidence ID id_i). Units: t_i in Unix seconds (SI s), h_i ∈ {0,1}^256 (SHA-256), c_i ∈ ℕ, v_i ∈ SemVer, id_i ∈ Σ*.

Freshness predicate: Stale(e_i) ⇔ (t_now − t_i) > τ_stale, where τ_stale ∈ ℝ⁺ s. Breakdown: if ∀e_i ∈ E, Stale(e_i), then rendered status = ⊥ (unknown), not confirmed.

Conflict: For fact f, values val(e_i, f). ConflictRecord C(f) = { (e_a, e_b) | val(e_a,f) ≠ val(e_b,f) ∧ ¬Supersedes(e_a,e_b) ∧ ¬Supersedes(e_b,e_a) }. Supersedes relation defined by official transaction evidence newer than existing.

Precedence: Prec(e) = 2 if official, 1 if open-data, 0 if fallback. But must avoid fake ratio? A discrete precedence rank is fine, not a ratio. However user said no toy equations like Force/Fatigue. A rank function is formal.

Truth render rule: RenderConfirmed(f) ⇔ ∃e* ∈ E : ¬Stale(e*) ∧ Prec(e*) = max_{e∈E} Prec(e) ∧ C(f) = ∅ ∧ val(e*,f) defined. Otherwise RenderQualified(f) or RenderUnknown(f).

Source weight w_s ∈ [0,1] as probability of factual accuracy, dimensionless. Bayesian update: P(f=true | E) ∝ P(E | f=true) P(f=true). Assumptions: source independence, conditionally accurate. Breakdown: correlated sources (same wire feed) violate independence; posterior meaningless if P(f=true) prior undefined.

Singularity: If E = ∅ or all e_i Stale or C(f) ≠ ∅ without supersession resolution, then no confirmed fact; public shows "last verified timestamp" only or qualified status.

Cite [PAGE 1] for every textual basis.

RETROCAUSAL_GENEALOGY: lineage and traps.

RECURSIVE_THEORY_OF_MIND: crisis habit regression etc.

CROSS_LAYER_VETO_ADJUDICATION: vetoes.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios with predictions.

Total words: I'll ensure >1000.

Let's write it out. I'll make sure to include verbatim quotes with [PAGE 1].

Quotes to use:
- "Roster facts are trust infrastructure."
- "Existing cards define generic freshness, data source QA, and player surfaces, but not fact-level NFL roster evidence, conflict handling, staff rules, or deploy gates."
- "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites."
- "Do not mutate production data."
- "Public surfaces can show current fact, qualified status, and last verified timestamp. Founder/admin surfaces can show source weights, conflicts, parser errors, and raw evidence links."
- "Use official/public sources only after terms and robots review. Do not scrape private, paywalled, login-gated, prohibited, or high-volume sources."
- "No production database mutation or deploy occurs."
- Regression: "Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams."

Alright, compose.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The card BUILD-NRT-036 is flagged P1, difficulty M, with MEDIUM legal, source, and maintenance risk. Its first hop is the Duplicate Gate: duplicate_check_status is EXTENSION, matched_existing_ids is BUILD-GV2-049, and the reason_not_duplicate states that this card "adds NFL roster/person evidence, reconciliation, validation, or remediation that existing generic cards do not define." [PAGE 1] This means BUILD-GV2-049 supplies generic freshness, data-source QA, and player-surface scaffolding, but BUILD-NRT-036 must add the fact-level NFL roster layer: StatusAssignment and AvailabilityReport as the data model, conflict handling as ConflictRecord entries, staff rules, and deploy gates. [PAGE 1] The parent_id linkage is critical: any implementation must not recreate generic freshness cards; it must link back to them and remain inside the NFL roster truth namespace. [PAGE 1]

The second hop identifies the current problem as a workspace gap: the visible workspace is a docs/control lane, not a full app checkout, and existing cards do not define fact-level NFL roster evidence, conflict handling, staff rules, or deploy gates. [PAGE 1] Because SRC-012 is listed under Source Proof Needed but is not present in the provided page, the evidence base for the build is incomplete; the implementation must treat SRC-012 as an unresolved approval/unknown until the source page is furnished. [PAGE 1]

The third hop is the ingestion and reconciliation contract. Read-only source adapters or fixture-based probes first; store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs; do not mutate production data. [PAGE 1] Reconciliation compares official, open-data, and fallback records fact-by-fact. "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites." [PAGE 1] This establishes a non-commutative precedence operator: official > open-data > fallback, gated by a staleness clock τ_stale and by newer official transaction evidence. If all evidence is stale or a conflict lacks supersession resolution, the fact must not render as confirmed; it must be qualified or unknown internally and externally. [PAGE 1]

The fourth hop is the public/private and legal boundary. Public surfaces may show current fact, qualified status, and last verified timestamp only. Founder/admin surfaces may show source weights, conflicts, parser errors, and raw evidence links. Proprietary reconciliation logic must not be exposed. [PAGE 1] Legally, only official/public sources after terms and robots review; no scraping of private, paywalled, login-gated, prohibited, or high-volume sources; media/fantasy sources are fallback/corroboration unless legal approval upgrades them. [PAGE 1] The primary trust risk is explicitly stated: making a stale or conflicted fact look confirmed. [PAGE 1]

Gray-zone audit: exact shipping clone repo paths are unknown ("real shipping clone paths unknown in this workspace"); branch, dirty state, package manager, and existing app files must be verified before any typing or disabled script is added; BUILD-GV2-049 contents are not provided, so the generic freshness contract it defines cannot be audited here; SRC-012 is missing; τ_stale (staleness threshold in seconds) is not numerically defined; parser versioning scheme is unspecified; smoke-test fixtures for Najee Harris and Rico Dowdle are not provided, so the regression test cannot yet assert against current source evidence rather than hardcoded replacement teams. [PAGE 1] These unknowns are implementation blockers, not reasoning blockers: the design can be specified as type-only/disabled-by-default, but no file edits or test runs can be committed in this session without the real repo checkout.

No betting lines, spreads, totals, moneylines, or odds are referenced anywhere in this trace or source. No toy ratios are invented; all formalisms below are set-theoretic, information-theoretic, or SI-unit staleness predicates with stated breakdown regimes.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, assumptions, and breakdown regimes, grounded in [PAGE 1].

Let the evidence snapshot set be E = {e₁, …, eₙ}. Each raw snapshot eᵢ is a tuple
eᵢ = (tᵢ, uᵢ, hᵢ, cᵢ, vᵢ, idᵢ)
where tᵢ ∈ ℝ⁺ is the ingestion timestamp in Unix seconds (SI unit s), uᵢ is the source URL, hᵢ ∈ {0,1}²⁵⁶ is the content hash (SHA-256), cᵢ ∈ ℕ is the parsed record count, vᵢ is the parser version (semantic versioning assumed), and idᵢ is the evidence identifier. [PAGE 1] mandates storing exactly these fields and prohibits production data mutation.

Staleness predicate:
Stale(eᵢ) ⇔ (t_now − tᵢ) > τ_stale, τ_stale ∈ ℝ⁺ s.
Breakdown/singularity: if ∀eᵢ ∈ E, Stale(eᵢ), then no roster fact may render as confirmed; the rendered value is ⊥ (unknown) or qualified with last_verified timestamp only. [PAGE 1] explicitly forbids stale/unknown facts rendering as confirmed.

Precedence rank (discrete, not a ratio):
Prec(e) = 2 if official, 1 if open-data, 0 if fallback/media.
Reconciliation operator for roster fact f:
Value(f) = val(e*, f), where e* = argmax_{e∈E} Prec(e), subject to ¬Stale(e*) and absence of a newer official transaction evidence record contradicting e*. [PAGE 1]

Conflict relation:
Supersedes(e_a, e_b) ⇔ e_a is newer official transaction evidence contradicting e_b.
ConflictRecord set for fact f:
C(f) = { (e_a, e_b) | val(e_a, f) ≠ val(e_b, f) ∧ ¬Supersedes(e_a, e_b) ∧ ¬Supersedes(e_b, e_a) }.
Render rule:
RenderConfirmed(f) ⇔ ∃e* ∈ E : ¬Stale(e*) ∧ Prec(e*) = max_{e∈E} Prec(e) ∧ C(f) = ∅.
If C(f) ≠ ∅, the system must emit ConflictRecord entries internally and must not silently overwrite; public rendering degrades to qualified status or unknown. [PAGE 1]

Information-theoretic source weight (dimensionless probability, [0,1]):
w_s = P(source s reports fact correctly | source class s), with Bayesian update
P(f=true | E) ∝ P(E | f=true) ⋅ P(f=true).
Assumptions: source reports conditionally independent given f; prior P(f=true) defined; no correlated wire-feed duplication counted as independent evidence. Breakdown: if sources share a single upstream feed (perfect correlation), independence fails and the posterior is not identifiable; if P(f=true) prior is undefined, no probability can be computed and the fact remains unconfirmed. [PAGE 1] supports source weights on founder/admin surfaces only.

Public/private exposure boundary:
Public(f) ⊆ {current fact, qualified status, last_verified timestamp}.
Admin(f) ⊇ {source weights, conflicts C(f), parser errors, raw evidence links}.
Proprietary reconciliation algorithm ∉ Public(f). [PAGE 1]

Legal admissibility predicate:
Admissible(s) ⇔ (official ∨ public) ∧ terms_reviewed ∧ robots_allowed ∧ ¬paywalled ∧ ¬login_gated ∧ ¬prohibited ∧ ¬high_volume.
Media/fantasy sources: fallback/corroboration only unless legal approval sets Admissible(s) := true. [PAGE 1]

Acceptance criteria formalization:
(1) Duplicate gate honored: no recreation of BUILD-GV2-049 generic cards. (2) ∀ roster fact f touched, ∃ evidence design with idᵢ, tᵢ, hᵢ, cᵢ, vᵢ. (3) Conflicts visible internally: C(f) ≠ ∅ ⇒ ConflictRecord persisted and admin-visible. (4) Stale/unknown not confirmed: ¬RenderConfirmed(f) if Stale(e*) or C(f) ≠ ∅ unresolved. (5) Zero production DB mutation and zero deploy. [PAGE 1]

Regression smoke-test formalization (Najee Harris, Rico Dowdle):
Assert rendered_fact(player) ≡ fixture_evidence(player), where fixture_evidence is generated from current source fixtures; hardcoded replacement teams are prohibited as test oracles. [PAGE 1]
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week trap analysis.

The lineage of BUILD-NRT-036 traces through three strata. First, the NFL injury and practice-report tradition itself: official Wednesday and Friday practice reports, the transaction wire, injured-reserve and designate-for-return designations, and roster-cut deadlines. These are temporal artifacts with explicit staleness—a Wednesday practice report decays in evidentiary value by kickoff Sunday, and a practice-limitation designation is not a game-availability confirmation. Second, the GSN generic infrastructure stratum represented by BUILD-GV2-049, which supplies source freshness, data-source QA, and player surfaces but deliberately stops short of fact-level NFL roster evidence, conflict handling, staff rules, and deploy gates. [PAGE 1] Third, the consumer stratum: Player Lab and briefs (product surface) and the founder roster accuracy cockpit plus data quality reports (internal surface). [PAGE 1] The causal arrow runs from raw official transaction evidence through read-only adapters, through the ConflictRecord reconciliation layer, to either a confirmed public fact or a qualified/unknown public status, with internal admin visibility of the evidence chain.

Multi-week traps specific to this boundary:

1. Stale status persistence across game weeks. A player marked questionable in Week 3 may remain rendered as questionable in Week 4 if the roster:stale validation has not run or if τ_stale is set too long relative to the NFL transaction cadence. Because the primary trust risk is making a stale fact look confirmed, [PAGE 1] a multi-week stale cache is the highest-severity failure mode.

2. Practice-participation conflation. A limited practice report midweek is evidence of availability trend, not a confirmed game status. If the reconciliation layer weights practice-report evidence equal to official inactive/active declarations, the system will downgrade confidence improperly or, worse, render a limited practitioner as confirmed active.

3. Roster transaction lag. Trades, waivers, and practice-squad moves change team and number. If StatusAssignment is not re-validated against newer official transaction evidence, a player renders under a prior team number. The Najee Harris and Rico Dowdle smoke tests exist precisely to prevent hardcoded replacement-team fixtures from masking this. [PAGE 1]

4. Fixture drift. Because implementation must be fixture-backed and disabled-by-default, fixtures themselves can become stale. A fixture generated in Week 2 and never refreshed will fail the roster:stale check but, if the check is not wired into CI, will silently persist as a false source of truth.

5. Staff-rule leakage. The card mentions staff rules as a gap in existing cards. Coaching-staff role changes (e.g., coordinator firing) are roster-adjacent facts; if staff facts bypass the ConflictRecord path, internal cockpit trust erodes.

These are multi-week traps because they compound over the NFL season: a single stale seed fact, left unreconciled, corrupts downstream Player Lab ratings, brief content, search, customer trust, and internal decisions across all subsequent weeks. [PAGE 1]
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap architecture, and the staleness clock.

Crisis habit regression. Under production pressure—e.g., a VIP player is traded or downgraded to out hours before kickoff—an engineer's regressed habit is to bypass the adapter layer and directly mutate the StatusAssignment or AvailabilityReport table in the production database to "fix" the display. This regresses to pre-card behavior: silent overwrites, no ConflictRecord, no source hash, no timestamp, no parser version, and a public surface that presents a confirmed fact with zero evidence design. [PAGE 1] The habit also manifests as exposing raw reconciliation logic or source weights on public briefs to justify a rushed correction, violating the public/private boundary. [PAGE 1]

Counter-trap. BUILD-NRT-036 installs a hard counter-trap: every implementation must be docs-first, type-only, or disabled-by-default; ingestion uses read-only adapters or fixture-based probes; production data is never mutated; conflicts produce ConflictRecord entries instead of silent overwrites. [PAGE 1] The counter-trap converts an urgent roster correction into a controlled fixture update or adapter adjustment, followed by roster:audit, roster:verify, roster:conflicts, and roster:stale validation, never a live SQL UPDATE. The founder/admin cockpit absorbs the diagnostic load (source weights, conflicts, parser errors, raw evidence links) so the public surface never needs to expose the messy evidence chain. [PAGE 1]

Clock. The governing temporal object is the staleness clock Δt = t_now − t_last_verified, measured in seconds. The system is safe only while Δt ≤ τ_stale for the winning evidence record and while roster:stale runs at an interval T_verify < τ_stale. If T_verify ≥ τ_stale, there exists a window in which a fact is technically stale but still rendered as confirmed because the stale check has not yet fired. The clock also determines regression risk: the longer the interval since the last roster:audit or roster:conflicts run, the higher the conditional probability that an engineer will experience the "urgent fix" impulse and regress to direct mutation. Thus the validation cadence is not administrative overhead; it is the clock that suppresses the crisis habit.

Recursive theory-of-mind structure: the engineer models the founder modeling the customer trusting the brief; the founder models the data-quality report modeling the conflict; the data-quality report models the adapter modeling the official source. Each layer must preserve evidence provenance, or the recursion collapses into an ungrounded confirmed fact.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof.

Physical layer veto (repository and infrastructure). The Acceptance Criteria explicitly veto any production database migration, deployment config change, secret injection, live cron job, or production DB mutation. [PAGE 1] The Rollback Plan reinforces this: remove new disabled scripts/types/docs, delete generated fixtures, and leave existing production data untouched; later DB work only through migration rollback and snapshot restore after backup verification. [PAGE 1] Any attempted file write to production DB paths is vetoed at the physical layer by the build contract itself.

Biomechanical layer veto (human and parser agency). The human data-entry/parser layer is vetoed from silent overwrite by the ConflictRecord mandate: "Conflicts create ConflictRecord entries instead of silent overwrites." [PAGE 1] Parser errors must be routed to founder/admin surfaces, not swallowed. [PAGE 1] Manual override of a roster fact without an evidence ID, hash, timestamp, and parser version is biomechanically impossible under the type-only/disabled-by-default constraint because no write path exists in the initial implementation.

Environmental/weather layer veto (source volatility). Although NFL roster truth is not meteorological, the source environment behaves like weather: robots.txt changes, terms-of-service updates, paywall deployment, and high-volume throttling can change admissibility mid-build. [PAGE 1] The Legal/TOS Boundary vetoes scraping of private, paywalled, login-gated, prohibited, or high-volume sources and requires terms and robots review before official/public source use. [PAGE 1] Media/fantasy sources are environmental noise—fallback/corroboration only—until legal approval upgrades admissibility. [PAGE 1] Any adapter that ignores a robots.txt disallow or a paywall is vetoed by the legal predicate Admissible(s).

Adjudication order. When layers conflict, the veto priority is: (1) Legal/TOS boundary (no illegal scraping), (2) No production mutation (data integrity), (3) ConflictRecord over silent overwrite (evidence integrity), (4) Public/private boundary (no proprietary logic leakage), (5) Staleness clock (no confirmed stale facts). A vetoed action at any higher layer cannot be overridden by a lower-layer convenience. For example, an engineer cannot justify a production DB mutation because a conflict is "obvious"; the conflict must become a ConflictRecord and the fix must travel through the fixture/adapter path.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) counterfactual veto scenarios with predictions. Each scenario specifies a trigger, the veto rule from [PAGE 1], the verification method, and the predicted outcome if the system is correctly implemented versus if it fails.

Scenario 1: Direct production mutation to fix a traded player.
Trigger: Najee Harris is traded; an engineer attempts an UPDATE on production StatusAssignment to set his current team before the adapter has ingested the official transaction, bypassing fixture-based probes.
Veto rule: "Do not mutate production data." [PAGE 1] and Acceptance Criterion: "No production database mutation or deploy occurs." [PAGE 1]
Verification: git diff shows zero changes to production DB migration files; database connection logs contain no UPDATE statements against StatusAssignment; the build reports exact changed files limited to docs/types/disabled scripts.
Prediction if passed: Build is rejected at CI gate; the team must use the read-only adapter or fixture probe to ingest the official trade evidence, create a ConflictRecord if the old team record contradicts the new one, and only then allow roster:verify to confirm the new team. Prediction if failed: public brief shows confirmed new team with no evidence ID or hash, violating evidence-design acceptance and creating a stale/conflicted fact rendered as confirmed.

Scenario 2: Public rendering of an unresolved conflict as confirmed.
Trigger: Rico Dowdle appears in a practice-report fixture as limited and in an official game-status feed as questionable; the two records conflict on availability and no Supersedes relation resolves it. The brief component nonetheless renders "active: confirmed."
Veto rule: "Stale/unknown facts do not render as confirmed" and "Conflicts create ConflictRecord entries instead of silent overwrites." [PAGE 1]
Verification: Unit test roster:conflicts asserts C(f) ≠ ∅ for Dowdle's availability fact; integration test confirms public render returns qualified status with last_verified timestamp and no confirmed boolean; admin cockpit displays the ConflictRecord pair and source weights.
Prediction if passed: Public surface shows qualified status, not confirmed active; internal surfaces expose the conflict. Prediction if failed: customer-facing brief displays confirmed active status based on a weaker practice-report record while the official feed says questionable; the primary trust risk of [PAGE 1] is realized.

Scenario 3: Prohibited source scraping to close an evidence gap.
Trigger: SRC-012 evidence is missing; to fill the gap for a high-profile player, the adapter is configured to scrape a paywalled fantasy source at high volume without legal approval or robots review.
Veto rule: "Use official/public sources only after terms and robots review. Do not scrape private, paywalled, login-gated, prohibited, or high-volume sources." [PAGE 1] Media/fantasy sources are fallback/corroboration unless legal approval upgrades them. [PAGE 1]
Verification: source inventory audit lists adapter target URLs; each is checked against Admissible(s) predicate; CI fails if any target is paywalled/login-gated/high-volume without legal approval flag; the build falls back to fixture-based probes or leaves the fact unconfirmed.
Prediction if passed: Adapter remains disabled or read-only; the roster fact for the affected player shows qualified status or unknown with last_verified timestamp; legal approval ticket is recorded as an unresolved approval in the build report. Prediction if failed: high-volume scraping of a prohibited source occurs, creating legal risk (MEDIUM per card) [PAGE 1] and corrupting source-weight integrity because the source class is inadmissible.
</RLVR_COUNTERFACTUAL_VETOES>