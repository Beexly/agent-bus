---
source: "BUILD-NRT-016-canonical-external-id-table.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4825
---

<NATIVE_REASONING>
The user is asking me to process a source document about BUILD-NRT-016: Canonical external ID table for an NFL roster truth system. They want me to act as the GSE + GSI Frontier Reasoning Foundry and produce output with strict invariants:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios, state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes, cite [PAGE N] markers and verbatim quotes when source pages provided
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

Let me analyze the source text carefully:

PAGES: 1 - so I should cite [PAGE 1] for quotes.

Key elements from source:
- Duplicate Gate: EXTENSION, matched_existing_ids: BUILD-GV2-081, reason_not_duplicate: Canonical external ID table adds NFL roster/person evidence, reconciliation, validation, or remediation that existing generic cards do not define. parent_id: BUILD-GV2-081.
- Goal: Canonical external ID table for the NFL roster truth system.
- Why It Matters: Roster facts are trust infrastructure. Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions.
- Current Problem: visible workspace is docs/control lane, not full app checkout. Existing cards define generic freshness, data source QA, and player surfaces, but not fact-level NFL roster evidence, conflict handling, staff rules, or deploy gates.
- Source Proof Needed: SRC-007, SRC-008, SRC-011
- Product Surface: search/autocomplete
- Internal Surface: founder roster accuracy cockpit, data quality reports
- Data Model: ExternalPersonId, Person
- Ingestion Plan: read-only source adapters or fixture-based probes first. Store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs. Do not mutate production data.
- Reconciliation Plan: Compare official, open-data, and fallback records fact-by-fact. Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites.
- Validation Plan: roster:audit, roster:verify, roster:conflicts, roster:stale, and test:roster once implemented. Until then, validate with source inventory, fixtures, and generated JSONL/card checks.
- Public/Private Boundary: Public surfaces can show current fact, qualified status, and last verified timestamp. Founder/admin surfaces can show source weights, conflicts, parser errors, raw evidence links. Do not expose proprietary reconciliation logic.
- Legal / TOS Boundary: Use official/public sources only after terms and robots review. Do not scrape private, paywalled, login-gated, prohibited, or high-volume sources. Media/fantasy sources are fallback/corroboration unless legal approval upgrades them.
- Repo Context: Likely files: real shipping clone paths unknown in this workspace, docs/research/nfl-roster-truth. Files to avoid: production DB migrations, deployment config, secrets, live cron jobs, any source requiring credentials.
- Implementation Plan: 6 steps
- Acceptance Criteria: duplicate gate honored, every roster fact touched has source evidence design, conflicts visible internally, stale/unknown facts do not render as confirmed, no production DB mutation or deploy.
- Test Plan: Unit (normalization and scoring rules), Integration (adapter fixtures and reconciliation), Data validation (stale/conflict/no-mock checks), Regression (Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams).
- Rollback Plan: Remove new disabled script/types/docs, delete generated fixtures, leave existing production data untouched.
- Priority: P0, Difficulty: M
- Risks: Legal MEDIUM, Source MEDIUM, Maintenance MEDIUM. Primary trust risk is making a stale or conflicted fact look confirmed.
- Claude Code Prompt: instructions to execute BUILD-NRT-016.

Now I need to construct a response with the required XML sections. Since this is a docs/source card processing task rather than a sports prediction task per se, I need to apply the reasoning foundry framework to this canonical external ID table build.

Key considerations:
- NO betting lines: This document is about NFL roster truth / data engineering, not betting. So I won't mention any betting lines. I must ensure I don't inadvertently mention odds, spreads, etc.
- NO toy equations: I need formal LaTeX equations. I should define information-theoretic and probabilistic formalism for evidence reconciliation, conflict detection, staleness, etc. Use SI units where applicable (seconds for timestamps, bits for information, dimensionless probabilities).
- Cite [PAGE 1] with verbatim quotes since only 1 page provided.
- >= 1000 words total across sections, THINK_TRACE >= 400 words.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words. I'll discuss:
- The duplicate gate extension logic (BUILD-GV2-081 parent)
- Why canonical external ID table is trust infrastructure
- Multi-hop chain: SRC-007/008/011 → evidence IDs → ExternalPersonId → Person → ConflictRecord → public/private boundary
- Gray zones: "official current evidence wins unless stale" - what defines stale? The document doesn't define staleness threshold. That's a gray zone. "Media/fantasy sources are fallback/corroboration unless legal approval upgrades them" - gray zone on what constitutes legal approval. "read-only source adapters or fixture-based probes first" - gray zone on when to transition from fixtures to live adapters. "Do not expose proprietary reconciliation logic" vs "founder/admin surfaces can show source weights, conflicts" - tension between transparency and secrecy.
- Exact singularity/breakdown regimes: when official source is stale AND contradicted by newer non-official evidence; when hash collision occurs; when parser version mismatch; when evidence IDs missing.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
Define:
- Evidence record E = (t, u, h, n, v, id) where t timestamp [s], u URL, h hash [bits], n record count [dimensionless], v parser version [semver], id evidence ID.
- Person entity P with attributes team T, number j, status s, staff role r.
- ExternalPersonId mapping: φ: ExternalPersonId → Person
- ConflictRecord C when ∃ facts f1, f2 from sources S1, S2 with f1 ≠ f2 and timestamps t1, t2.
- Staleness predicate: stale(E) iff (t_now - t_E) > τ_stale [s]. τ_stale undefined in source → breakdown regime.
- Reconciliation operator: R: {E_official, E_open, E_fallback} → Fact × {confirmed, conflicted, stale, unknown}
- Probability of truth: Pr[fact | evidence] using source weights w_i ∈ [0,1], information content I = -log2(Pr) [bits].
- Verbatim quotes with [PAGE 1].

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: from generic freshness/QA/player surface cards (BUILD-GV2-081) to fact-level NFL roster evidence.
- Multi-week traps: stale roster facts persisting across weeks (e.g., Najee Harris, Rico Dowdle smoke tests mentioned - comparing rendered facts against current source evidence fixtures, not hardcoded replacement teams). The trap of hardcoding team affiliations that change via trades/cuts.
- Historical pattern: silent overwrites vs ConflictRecord entries.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under pressure, engineers might silently overwrite conflicts, mutate production DB, hardcode Najee Harris/Rico Dowdle teams.
- Counter-trap: ConflictRecord entries, fixtures, disabled-by-default implementation, rollback notes.
- Clock: staleness clock τ_stale, last verified timestamp, freshness decay. The clock of roster transactions (trades, cuts, signings) vs the clock of verification.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- This is tricky because the source is about data engineering, not physical sports. But I need to address veto layers. I can interpret:
  - Physical layer: server/storage integrity, hash verification (SHA-256), snapshot immutability.
  - Biomechanical layer: human data entry errors in roster sources (wrong number, wrong team, wrong status).
  - Weather layer: not directly applicable, but could metaphorically refer to external source volatility (source going down, robots.txt changes, TOS changes). Or actual weather affecting game postponements that affect roster status? Might be a stretch. Better to treat "weather" as environmental volatility in data pipelines (source outages, rate limits, TOS revocation).
- Veto proof: any layer can veto publication of a fact as confirmed.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need 3 counterfactual veto scenarios that are verifiable, with predictions.
1. Scenario: Stale official evidence contradicted by newer fallback evidence → veto rendering as confirmed. Prediction: system creates ConflictRecord, shows qualified status not confirmed.
2. Scenario: Missing source evidence ID or hash mismatch → veto ingestion. Prediction: record quarantined, not merged into Person table.
3. Scenario: Attempt to mutate production DB or deploy → veto by CI/CD gate / disabled-by-default flag. Prediction: build fails, no production mutation.

Need to ensure total words >= 1000. THINK_TRACE >= 400.

Let me write carefully with LaTeX equations and [PAGE 1] citations.

Verbatim quotes to use:
- "Roster facts are trust infrastructure." [PAGE 1]
- "Official current evidence wins unless stale or contradicted by newer official transaction evidence." [PAGE 1]
- "Conflicts create ConflictRecord entries instead of silent overwrites." [PAGE 1]
- "Do not mutate production data." [PAGE 1]
- "Stale/unknown facts do not render as confirmed." [PAGE 1]
- "Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams." [PAGE 1]
- "Primary trust risk is making a stale or conflicted fact look confirmed." [PAGE 1]

Let me draft the content now.

Word count check: I'll aim for roughly:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~200 words
- RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total: ~1700 words. Good.

Make sure no betting lines. The document mentions NFL but not betting. I'll avoid any gambling terminology.

LaTeX equations:
1. Evidence snapshot tuple: $E = (t, u, h, n, v, \epsilon)$
2. Staleness predicate: $\text{stale}(E) \iff (t_{\text{now}} - t_E) > \tau_{\text{stale}}$
3. Reconciliation: $R(\mathcal{E}) = (f^*, \kappa)$ where $\kappa \in \{\text{confirmed}, \text{conflicted}, \text{stale}, \text{unknown}\}$
4. Conflict indicator: $\mathbb{I}_{\text{conflict}} = \mathbb{I}[\exists E_i, E_j \in \mathcal{E}: f_i \neq f_j \land \neg \text{stale}(E_i) \land \neg \text{stale}(E_j)]$
5. Source-weighted truth probability: $\Pr[f \mid \mathcal{E}] = \sigma\left(\sum_i w_i \cdot \mathbb{I}[f_i = f]\right)$ maybe too toy-like? It's a formal logistic-ish aggregation but could be seen as a ratio. Better to frame as information accumulation: $I(f) = \sum_i w_i \cdot h(E_i)$ bits. Or use Dempster-Shafer? Keep it simple and formal.
6. Hash integrity: $H(E_{\text{parsed}}) = h$ verification.

Units: seconds [s] for timestamps, bits [bit] for hashes/information, dimensionless for probabilities and counts.

Singularity/breakdown regimes:
- $\tau_{\text{stale}}$ undefined → staleness uncomputable (breakdown)
- $h$ mismatch → parser corruption or source mutation (singularity)
- $w_i$ proprietary and hidden → audit cannot verify weights (breakdown)
- Official source stale AND no newer official transaction → limbo state

Let's write it out. I need to be careful with XML validity - no unescaped & or < in text. I'll avoid those characters or escape them.

Also, the user said "STRICT INVARIANTS" - I must follow them exactly.

Structure:
```
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
```

Let me compose the full text.

THINK_TRACE draft:

The source card BUILD-NRT-016 [PAGE 1] is a docs-first build directive for a canonical external ID table inside an NFL roster truth system. Its duplicate gate is not a rejection but an EXTENSION of BUILD-GV2-081, meaning the generic freshness, data source QA, and player-surface work already exists at a higher abstraction layer, but lacks fact-level NFL roster evidence, conflict handling, staff rules, and deploy gates [PAGE 1]. The multi-hop derivation starts at the trust claim: “Roster facts are trust infrastructure” [PAGE 1]. A wrong team, number, status, or staff role cascades into Player Lab, GSE Rating, search, content, customer trust, and internal decisions [PAGE 1]. Therefore the ExternalPersonId to Person mapping is not a convenience join; it is a trust anchor.

Gray-zone audit. First, the reconciliation rule “Official current evidence wins unless stale or contradicted by newer official transaction evidence” [PAGE 1] leaves $\tau_{\text{stale}}$ undefined. There is no page in the source that specifies how many seconds, hours, or days render an official record stale. This is a breakdown regime: if the staleness clock is not parameterized, the system cannot mechanically distinguish “current” from “stale,” and a human must inject a threshold, creating an unmodeled dependency. Second, “Media/fantasy sources are fallback/corroboration unless legal approval upgrades them” [PAGE 1] defines a permission boundary but not an evidence-weight function. Without formal $w_i \in [0,1]$ source weights, the admin surface cannot display defensible source weights, and the public boundary cannot reliably suppress conflicted facts. Third, “Do not mutate production data” [PAGE 1] is hard, but the path from fixture-based probes to read-only adapters to production ingestion is unwritten; the gray zone is the promotion criteria that would allow a disabled-by-default script to touch live data.

Singularity and breakdown regimes. (i) Hash mismatch: if $H(E_{\text{parsed}}) \neq h$, the snapshot is corrupt or the source mutated mid-ingest; the pipeline must halt rather than normalize. (ii) Evidence ID absence: $\epsilon = \varnothing$ means no remediation path exists, so the fact must render as unknown, not confirmed. (iii) Dual non-stale contradiction: two official sources with $t_i, t_j$ both within the freshness window but $f_i \neq f_j$ creates an irreducible ConflictRecord; silent overwrite is a vetoed outcome [PAGE 1]. These regimes are where the card’s trust risk materializes: “Primary trust risk is making a stale or conflicted fact look confirmed” [PAGE 1].

I think that's enough for THINK_TRACE but I need >=400 words. Let me expand a bit more on the multi-hop chain and the Najee Harris/Rico Dowdle regression trap.

Expansion: The regression test named in the acceptance criteria is a multi-week trap detector. “Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams” [PAGE 1]. This means the build must resist the habit of baking last week’s roster into code. If Harris or Dowdle changes teams via trade, waiver, or free agency, a hardcoded fixture becomes a stale fact that renders as confirmed. The canonical external ID table prevents this by requiring every roster fact touched by the build to carry source evidence design [PAGE 1]. The multi-hop chain is: source snapshot $(t, u, h, n, v, \epsilon)$ → parsed record → ExternalPersonId → Person attribute $(T, j, s, r)$ → ConflictRecord if contradicted → public display only as “current fact, qualified status, last verified timestamp” [PAGE 1]. Any break in this chain—missing hash, missing evidence ID, missing parser version—triggers a veto at the ingestion gate.

That should push THINK_TRACE well over 400 words.

SOURCE_OPERATORS_AND_EQUATIONS: formal definitions.

Let me write LaTeX:
- Evidence record: $E = (t_E, u_E, h_E, n_E, v_E, \epsilon_E)$ where $t_E$ [s since epoch], $u_E$ [URL string], $h_E \in \{0,1\}^{256}$ [bits], $n_E \in \mathbb{N}$ [dimensionless count], $v_E$ [parser version semver], $\epsilon_E$ [evidence ID].
- Person: $P = (\text{ExternalPersonId}, T, j, s, r, t_{\text{verified}})$ where $T$ team, $j$ jersey number, $s$ status, $r$ staff role, $t_{\text{verified}}$ [s].
- Mapping: $\phi: \text{ExternalPersonId} \to P$ partial function.
- Staleness: $\text{stale}(E) \iff (t_{\text{now}} - t_E) > \tau_{\text{stale}}$, $\tau_{\text{stale}}$ [s] undefined in source [PAGE 1].
- Reconciliation output: $R(\mathcal{E}) = (f^*, \kappa)$, $\kappa \in \{\text{confirmed}, \text{conflicted}, \text{stale}, \text{unknown}\}$.
- Conflict: $C = \{E_i, E_j\} \subset \mathcal{E} : f_i \neq f_j \land \neg \text{stale}(E_i) \land \neg \text{stale}(E_j)$.
- Integrity: accept $E$ iff $H(\text{parsed}(E)) = h_E$ and $\epsilon_E \neq \varnothing$.
- Information: $I(E) = -\log_2 \Pr[\text{source authentic}]$ [bits], accumulated $I_{\text{total}} = \sum_i w_i I(E_i)$.

Page citation: all quotes [PAGE 1].

Breakdown: $\tau_{\text{stale}}$ unparameterized; $w_i$ hidden; $h_E$ collision.

RETROCAUSAL_GENEALOGY:
- Lineage: BUILD-GV2-081 (generic freshness/source QA/player surface) → BUILD-NRT-016 (fact-level NFL roster evidence). The genealogy moves from generic to domain-specific.
- Historical pattern: silent overwrites in legacy data pipelines vs ConflictRecord entries here.
- Multi-week traps: NFL rosters churn weekly (cuts, trades, IR, practice squad). Hardcoding team affiliations is a temporal trap. Najee Harris and Rico Dowdle smoke tests are temporal canaries.
- Retrocausal angle: the build is designed now to prevent future confidence in stale facts; the “last verified timestamp” is a backward-looking anchor that limits forward harm.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under incident pressure, engineers revert to silent overwrite, direct DB mutation, hardcoded team assignment, skipping conflict records.
- Counter-trap: disabled-by-default implementation, fixture-backed validation, ConflictRecord entries, rollback plan, no production DB mutation.
- Clock: staleness clock $t_{\text{now}} - t_E$; transaction clock (NFL trade deadline, waiver wire); verification clock (last verified timestamp public display). When the staleness clock outpaces the transaction clock without verification, trust decays.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: storage immutability, SHA-256 hash verification $h_E$, snapshot integrity. Veto if hash mismatch.
- Biomechanical/human layer: source data entry errors (wrong jersey number, wrong status, wrong staff role), parser misreads. Veto if normalization fails or evidence ID missing.
- Weather/environmental layer: source volatility (robots.txt changes, TOS revocation, source outage, rate limiting). Veto if legal/robots review not passed or source becomes prohibited/high-volume.
- Adjudication: any layer veto → fact renders as unknown/conflicted, never confirmed. Public boundary hides weights but shows qualified status [PAGE 1].

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Official source stale ($\tau_{\text{stale}}$ exceeded) and contradicted by newer fallback. Verifiable check: query reconciliation output $\kappa$. Prediction: $\kappa = \text{conflicted}$; ConflictRecord created; public shows qualified status not confirmed.
- Scenario 2: Snapshot hash mismatch $H(\text{parsed}) \neq h_E$ or missing evidence ID $\epsilon_E = \varnothing$. Verifiable check: ingestion gate rejects record; no row in Person table. Prediction: record quarantined, parser error logged in admin surface only, no public render.
- Scenario 3: CI/CD attempts to promote disabled script to production or run migration. Verifiable check: disabled-by-default flag and pre-deploy gate block; git diff shows only docs/types/fixtures. Prediction: zero production DB mutations, deploy aborted, rollback notes executed.

Need to make sure all sections are present and words >= 1000 total. I'll write generously.

Also ensure I don't use < or & unescaped. I'll avoid ampersands.

Let me write the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The source card BUILD-NRT-016 [PAGE 1] is a docs-first build directive for a canonical external ID table inside an NFL roster truth system. Its duplicate gate is not a rejection but an EXTENSION of BUILD-GV2-081, meaning the generic freshness, data source QA, and player-surface work already exists at a higher abstraction layer, but lacks fact-level NFL roster evidence, conflict handling, staff rules, and deploy gates [PAGE 1]. The multi-hop derivation starts at the trust claim: “Roster facts are trust infrastructure” [PAGE 1]. A wrong team, number, status, or staff role cascades into Player Lab, GSE Rating, search, content, customer trust, and internal decisions [PAGE 1]. Therefore the ExternalPersonId to Person mapping is not a convenience join; it is a trust anchor whose failure mode is silent corruption of downstream surfaces.

Gray-zone audit. First, the reconciliation rule “Official current evidence wins unless stale or contradicted by newer official transaction evidence” [PAGE 1] leaves the staleness threshold $\tau_{\text{stale}}$ undefined. No page in the source specifies how many seconds, hours, or days render an official record stale. This is a breakdown regime: if the staleness clock is not parameterized, the system cannot mechanically distinguish “current” from “stale,” and a human must inject a threshold, creating an unmodeled dependency outside the card’s formal boundary. Second, “Media/fantasy sources are fallback/corroboration unless legal approval upgrades them” [PAGE 1] defines a permission boundary but not an evidence-weight function. Without formal source weights $w_i \in [0,1]$, the founder/admin cockpit cannot display defensible source weights, and the public boundary cannot reliably suppress conflicted facts while still showing “qualified status.” Third, “Do not mutate production data” [PAGE 1] is hard, but the promotion path from fixture-based probes to read-only adapters to live ingestion is unwritten; the gray zone is the exact criteria that would allow a disabled-by-default script to touch production data, which the acceptance criteria explicitly forbid [PAGE 1].

Singularity and breakdown regimes. (i) Hash mismatch: if $H(E_{\text{parsed}}) \neq h_E$, the snapshot is corrupt or the source mutated mid-ingest; the pipeline must halt rather than normalize. (ii) Evidence ID absence: $\epsilon_E = \varnothing$ means no remediation path exists, so the fact must render as unknown, not confirmed. (iii) Dual non-stale contradiction: two official sources with timestamps $t_i, t_j$ both inside the freshness window but $f_i \neq f_j$ creates an irreducible ConflictRecord; silent overwrite is a vetoed outcome [PAGE 1]. These regimes are where the card’s stated trust risk materializes: “Primary trust risk is making a stale or conflicted fact look confirmed” [PAGE 1].

The regression test named in the acceptance criteria is a multi-week trap detector. “Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams” [PAGE 1]. This means the build must resist the habit of baking last week’s roster into code. If Harris or Dowdle changes teams via trade, waiver, or free agency, a hardcoded fixture becomes a stale fact that renders as confirmed. The canonical external ID table prevents this by requiring every roster fact touched by the build to carry source evidence design [PAGE 1]. The multi-hop chain is: source snapshot $(t_E, u_E, h_E, n_E, v_E, \epsilon_E)$ $\to$ parsed record $\to$ ExternalPersonId $\to$ Person attribute $(T, j, s, r)$ $\to$ ConflictRecord if contradicted $\to$ public display only as “current fact, qualified status, and last verified timestamp” [PAGE 1]. Any break in this chain—missing hash, missing evidence ID, missing parser version—triggers a veto at the ingestion gate before any fact reaches search/autocomplete or the founder roster accuracy cockpit [PAGE 1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All citations below refer to [PAGE 1], the only page supplied.

Evidence snapshot record:
$$E = (t_E, u_E, h_E, n_E, v_E, \epsilon_E)$$
where $t_E$ is capture time [s since epoch], $u_E$ is source URL [string], $h_E \in \{0,1\}^{256}$ is content hash [bits], $n_E \in \mathbb{N}$ is parsed record count [dimensionless], $v_E$ is parser version [semver, dimensionless], and $\epsilon_E$ is evidence ID [string]. Ingestion stores raw snapshots read-only and does not mutate production data [PAGE 1].

Person entity:
$$P = (\text{ExternalPersonId}, T, j, s, r, t_{\text{verified}})$$
where $T$ is team [categorical], $j$ is jersey number [dimensionless integer], $s$ is status [categorical], $r$ is staff role [categorical], and $t_{\text{verified}}$ is last verified timestamp [s]. The canonical mapping is a partial function $\phi: \text{ExternalPersonId} \rightharpoonup P$.

Staleness predicate (breakdown: $\tau_{\text{stale}}$ is not defined in source [PAGE 1]):
$$\text{stale}(E) \iff (t_{\text{now}} - t_E) > \tau_{\text{stale}}, \quad \tau_{\text{stale}} \text{ [s], undefined}$$

Reconciliation operator over official, open-data, and fallback records [PAGE 1]:
$$R(\mathcal{E}) = (f^*, \kappa), \quad \kappa \in \{\text{confirmed}, \text{conflicted}, \text{stale}, \text{unknown}\}$$
Official current evidence wins unless stale or contradicted by newer official transaction evidence [PAGE 1].

Conflict indicator:
$$\mathbb{I}_{\text{conflict}} = \mathbb{I}\Big[\exists E_i, E_j \in \mathcal{E}: f_i \neq f_j \land \neg \text{stale}(E_i) \land \neg \text{stale}(E_j)\Big]$$
When $\mathbb{I}_{\text{conflict}} = 1$, a ConflictRecord entry is created instead of a silent overwrite [PAGE 1].

Snapshot integrity gate:
$$\text{accept}(E) \iff H(\text{parsed}(E)) = h_E \land \epsilon_E \neq \varnothing$$

Information accumulation (source weights hidden/proprietary per public/private boundary [PAGE 1]):
$$I_{\text{total}}(f) = \sum_i w_i \cdot I(E_i), \quad I(E_i) = -\log_2 \Pr[\text{source authentic}] \text{ [bits]}, \quad w_i \in [0,1] \text{ [dimensionless]}$$

Units inventory: time [s], hash entropy [bits], record count [dimensionless], probability [dimensionless], source weight [dimensionless]. Breakdown regimes: (a) $\tau_{\text{stale}}$ unparameterized makes staleness uncomputable; (b) $w_i$ not exposed externally prevents independent audit of admin source weights; (c) $h_E$ collision or mismatch halts ingestion; (d) $\epsilon_E = \varnothing$ forces unknown rendering.

Verbatim anchors: “Roster facts are trust infrastructure” [PAGE 1]; “Official current evidence wins unless stale or contradicted by newer official transaction evidence” [PAGE 1]; “Conflicts create ConflictRecord entries instead of silent overwrites” [PAGE 1]; “Do not mutate production data” [PAGE 1]; “Stale/unknown facts do not render as confirmed” [PAGE 1]; “Primary trust risk is making a stale or conflicted fact look confirmed” [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage runs from BUILD-GV2-081, the parent card covering generic freshness, data source QA, and player surfaces, to BUILD-NRT-016, which adds NFL-roster-specific fact evidence, conflict handling, staff rules, and deploy gates [PAGE 1]. Scientifically, this is a move from generic entity freshness to domain-specific person-identity reconciliation: ExternalPersonId must be anchored to a Person with team, number, status, and staff role, rather than treated as an opaque string. The retro-causal design intent is to prevent future confidence in present errors: by mandating evidence IDs, hashes, parser versions, and timestamps at ingestion, the build creates a backward-looking audit trail that limits forward harm when rosters churn.

Multi-week traps are central. NFL rosters are not static; trades, waiver claims, cuts, injured-reserve moves, and practice-squad promotions change team affiliation $T$ and status $s$ on a weekly cadence. The smoke tests for Najee Harris and Rico Dowdle are temporal canaries: they compare rendered facts against current source evidence fixtures, explicitly not hardcoded replacement teams [PAGE 1]. A legacy system would hardcode last week’s team and render it as confirmed indefinitely. BUILD-NRT-016 blocks that pattern by tying every public roster fact to a last verified timestamp and qualified status, with source weights and conflicts visible only to founder/admin surfaces [PAGE 1].

Another historical trap is the silent-overwrite pipeline, where a newer record simply replaces an older one without recording that a contradiction occurred. This card inverts that legacy behavior: conflicts create ConflictRecord entries instead of silent overwrites [PAGE 1]. The genealogical hazard is that existing generic freshness cards may already define overwrite semantics; linking back to them instead of recreating them [PAGE 1] means the build must ensure roster-specific conflict rules override any generic default that would silently discard evidence.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under incident pressure—such as a missing starter before kickoff or a search-autocomplete outage—engineers tend to regress to three unsafe habits: (1) silently overwrite the conflicted roster fact to restore service; (2) mutate the production database directly to fix a wrong team or number; (3) hardcode the Najee Harris or Rico Dowdle team association as a hotfix. All three violate the acceptance criteria [PAGE 1].

Counter-trap: the build installs recursive guards against each habit. Silent overwrite is countered by mandatory ConflictRecord entries [PAGE 1]. Direct DB mutation is countered by the read-only adapter/fixture-first ingestion plan and the explicit “Do not mutate production data” rule [PAGE 1]. Hardcoding is countered by the regression smoke tests that compare rendered facts to current fixtures, not replacement teams [PAGE 1]. The disabled-by-default implementation and rollback plan (remove scripts/types/docs, delete generated fixtures, leave production data untouched) form a second-order counter-trap: even if the first-order guard fails, the system can be rolled to a pre-build state without production migration rollback unless backup verification passes [PAGE 1].

Clock layer: three clocks interact. The staleness clock $(t_{\text{now}} - t_E)$ competes against $\tau_{\text{stale}}$ [s, undefined]. The NFL transaction clock (trade deadline, waiver wire, cutdown dates) changes $T$ and $s$ exogenously. The verification clock, exposed publicly as “last verified timestamp,” bounds how long a fact may be shown without re-evidence [PAGE 1]. If the staleness clock outpaces the verification clock while the transaction clock has ticked, a confirmed fact becomes a stale lie. The theory of mind here is that the operator assumes “current” means “correct,” but the model must treat “current” as merely “last verified at $t_{\text{verified}}$” unless re-checked against source evidence [PAGE 1].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: storage and snapshot integrity. Every raw source snapshot carries $h_E \in \{0,1\}^{256}$ [bits], URL, timestamp, record count, parser version, and evidence ID [PAGE 1]. If $H(\text{parsed}(E)) \neq h_E$, the physical layer vetoes ingestion; the record is quarantined and never enters the Person table. This is a hash-integrity hard stop, not a soft warning.

Biomechanical/human layer veto: source-entry and parser error. Roster sources contain human error: wrong jersey number $j$, wrong team $T$, wrong status $s$, or wrong staff role $r$ [PAGE 1]. Parser misreads or normalization failures trigger parser errors visible only on founder/admin surfaces [PAGE 1]. If normalization or scoring rules fail unit checks, the fact is blocked from public render. The validation suite roster:audit, roster:verify, roster:conflicts, roster:stale, and test:roster [PAGE 1] acts as the biomechanical audit layer before any fact reaches search/autocomplete [PAGE 1].

Weather/environmental layer veto: source volatility and legal boundary. Official/public sources must pass terms and robots review before use [PAGE 1]. Private, paywalled, login-gated, prohibited, or high-volume sources are excluded [PAGE 1]. Media/fantasy sources remain fallback/corroboration unless legal approval upgrades them [PAGE 1]. If a source’s robots.txt changes, its TOS is revoked, or it becomes high-volume, the environmental layer vetoes further ingestion from that source. The public/private boundary enforces information asymmetry: public surfaces show current fact, qualified status, and last verified timestamp, while source weights, conflicts, parser errors, and raw evidence links remain founder/admin-only; proprietary reconciliation logic is never exposed [PAGE 1].

Adjudication rule: any layer veto forces $\kappa \in \{\text{conflicted}, \text{stale}, \text{unknown}\}$; no fact renders as confirmed unless all layers pass and evidence is current. Stale/unknown facts do not render as confirmed [PAGE 1].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Stale official evidence contradicted by newer fallback evidence. Verifiable check: run roster:conflicts and query reconciliation output $\kappa$ for the affected ExternalPersonId. Prediction: $\kappa = \text{conflicted}$; a ConflictRecord entry is created; the public surface shows qualified status, not confirmed fact; admin shows both source records and weights [PAGE 1].

Scenario 2: Snapshot integrity failure or missing evidence ID. Verifiable check: compute $H(\text{parsed}(E))$ and compare to stored $h_E$; verify $\epsilon_E \neq \varnothing$. Prediction: ingestion gate rejects the record; no row is inserted into Person or ExternalPersonId; parser error is logged to admin surface only; no public render occurs [PAGE 1].

Scenario 3: Production mutation or deploy attempt. Verifiable check: confirm disabled-by-default flag is set, CI/CD pre-deploy gate blocks promotion, and git diff contains only docs/types/fixtures with no migration or secret changes. Prediction: zero production database mutations; deploy is aborted; rollback executes by removing new scripts/types/docs and deleting generated fixtures while existing production data remains untouched [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>