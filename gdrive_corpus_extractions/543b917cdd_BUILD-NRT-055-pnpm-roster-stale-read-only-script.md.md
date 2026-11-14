---
source: "BUILD-NRT-055-pnpm-roster-stale-read-only-script.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6063
---

<NATIVE_REASONING>
The user wants me to process a source text about a build card (BUILD-NRT-055) for a "pnpm roster:stale read-only script" in an NFL roster truth system.

I need to output a response with specific XML sections:
1. THINK_TRACE (>=400 words) - Deep multi-hop derivation & gray-zone audit
2. SOURCE_OPERATORS_AND_EQUATIONS - Formal LaTeX, units, page citations, breakdown
3. RETROCAUSAL_GENEALOGY - Historical/scientific lineage & multi-week traps
4. RECURSIVE_THEORY_OF_MIND - Crisis habit regression vs counter-trap vs clock
5. CROSS_LAYER_VETO_ADJUDICATION - Physical/biomechanical/weather veto proof
6. RLVR_COUNTERFACTUAL_VETOES - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes when source pages provided. Since there's 1 page/source text, I should cite [PAGE 1] and quote verbatim where relevant.
- >= 1,000-word depth across sections.

Let me analyze the source text deeply.

Source text summary:
- Build card BUILD-NRT-055: pnpm roster:stale read-only script
- Duplicate gate: EXTENSION, matched existing BUILD-GV2-099, extends generic freshness/player surface/data quality with roster-specific truth rules.
- Goal: pnpm roster:stale read-only script for NFL roster truth system.
- Why: Roster facts are trust infrastructure. Wrong team/number/status/staff role corrupts Player Lab, GSE Rating, search, content, customer trust, internal decisions.
- Current problem: visible workspace is docs/control lane, not full app checkout. Existing cards define generic freshness, data source QA, player surfaces, but not fact-level NFL roster evidence, conflict handling, staff rules, deploy gates.
- Source proof needed: source snapshots
- Product surface: CI/predeploy
- Internal surface: founder roster accuracy cockpit, data quality reports
- Data model: ValidationError
- Ingestion plan: read-only source adapters or fixture-based probes first. Store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, evidence IDs. Do not mutate production data.
- Reconciliation plan: Compare official, open-data, fallback records fact-by-fact. Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites.
- Validation plan: Run roster:audit, roster:verify, roster:conflicts, roster:stale, test:roster once implemented. Until then validate with source inventory, fixtures, generated JSONL/card checks.
- Public/private boundary: Public shows current fact, qualified status, last verified timestamp. Founder/admin shows source weights, conflicts, parser errors, raw evidence links. Do not expose proprietary reconciliation logic.
- Legal/TOS: official/public sources only after terms and robots review. No private, paywalled, login-gated, prohibited, high-volume sources. Media/fantasy fallback/corroboration unless legal approval upgrades them.
- Repo context: likely files unknown, docs/research/nfl-roster-truth. Avoid production DB migrations, deployment config, secrets, live cron jobs, credential sources.
- Implementation plan: 6 steps (verify repo, read card+matched IDs, smallest docs-first/type-only/disabled implementation, fixtures/low-volume probes, add validation/tests/rollback, report changed files/approvals).
- Acceptance criteria: duplicate gate honored, every roster fact touched has source evidence design, conflicts visible internally, stale/unknown facts do not render as confirmed, no production DB mutation or deploy.
- Test plan: unit normalization/scoring rules; integration adapter fixtures/reconciliation; data validation stale/conflict/no-mock checks; regression Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams.
- Rollback plan: remove new disabled script/types/docs, delete generated fixtures, leave production data untouched. Later DB work roll back through migration rollback and snapshot restore after backup verification.
- Priority P0, Difficulty M, Risks MEDIUM (Legal, Source, Maintenance). Primary trust risk: stale or conflicted fact looking confirmed.
- Claude Code prompt: execute only BUILD-NRT-055 in real GSN clone. Verify repo root, branch, dirty state, package manager, scripts, existing patterns. Read docs/research/nfl-roster-truth plus BUILD-GV2-099. No production data/secrets. No deploy. No scrape prohibited/paywalled/login-gated/high-volume. Build smallest safe docs-first/fixture-backed/type-only/disabled-by-default. Every public roster fact must have evidence, freshness, conflict handling, rollback. Run checks and report files changed, tests run, approvals needed, unknowns.

Now, the sections need to be filled with sophisticated reasoning. This is a technical/audit reasoning task, not sports betting. I must avoid betting lines entirely.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Multi-hop: card references BUILD-GV2-099; extends generic freshness; roster-specific truth rules; data model ValidationError; ingestion read-only; reconciliation official wins unless stale; conflicts create ConflictRecord; public/private boundary; legal TOS; acceptance criteria; test plan with Najee Harris and Rico Dowdle smoke tests; rollback.
- Gray zones: "official current evidence wins unless stale" — staleness threshold undefined; "media/fantasy fallback unless legal approval upgrades them" — upgrade criteria undefined; "proprietary reconciliation logic" not exposed but internal founder cockpit sees source weights — potential information leakage; smallest disabled-by-default implementation vs P0 priority tension; docs/control lane not full app checkout means paths unknown; repo root verification required before any code; stale/unknown facts must not render as confirmed — default state logic needed; no production DB mutation or deploy — how to validate integration in CI without touching production? Fixture-based probes.
- Breakdown regimes: staleness singularity when timestamp delta exceeds official transaction evidence recency; conflict singularity when two official sources contradict at same timestamp; parser version drift; hash collision (negligible but mention SHA-256); evidence ID namespace collision.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations.
- Define evidence tuple E = (timestamp, URL, hash, record_count, parser_version, evidence_id). Units: timestamp [s] Unix epoch, URL [string], hash [bits] SHA-256 (256 bits), record_count [dimensionless count N ∈ ℕ₀], parser_version [semver string], evidence_id [UUID].
- Freshness predicate: Fresh(t, t_official, Δ_max) := (t_official - t ≤ Δ_max) ∧ ¬Stale(t). Staleness breakdown when t_official - t > Δ_max.
- Reconciliation operator: R(O, F, M) where O official, F open-data, M media/fallback. Fact f wins if argmax weight with staleness filter.
- ConflictRecord: C(f) = {(source_i, value_i, timestamp_i) | ∃ i≠j: value_i ≠ value_j ∧ timestamp_i ≈ timestamp_j}.
- ValidationError model: VE = {fact_id, expected, actual, source_weight, severity, timestamp}.
- Probability of false confirmation P(false confirm) = P(stale ∧ rendered confirmed) — must be 0 by acceptance criteria. Use indicator function I(rendered_confirmed ∧ (stale ∨ conflicted)) = 0.
- Information units: bits for hash, nats or bits for entropy of source weights? Keep it formal but not toy.
- Cite [PAGE 1] with verbatim quotes from source text.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: data quality / source freshness (BUILD-GV2-099), master data management, entity resolution, truth systems (e.g., Google Knowledge Vault, Wikidata), software CI/predeploy gates, read-only adapters (ETL without load), immutable snapshots (content-addressable storage, Git LFS, DVC), reconciliation patterns (positive/unlabeled learning? no, keep to data engineering), conflict-free replicated data types? Maybe mention CRDTs but carefully.
- Multi-week traps: NFL roster churn (waivers, IR, practice squad, cuts) means staleness accumulates over a season; a fact verified in Week 1 may be stale by Week 4; Najee Harris and Rico Dowdle smoke tests — team changes, status changes; hardcoded replacement teams trap; fixture drift; parser version drift; legal approval upgrade trap (media sources upgraded without re-review); public/private boundary leakage trap.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under pressure (P0, trust risk), team may revert to silent overwrites, hardcoded fixtures, production mutations, scraping prohibited sources to "fix" quickly.
- Counter-trap: the build card itself is a counter-trap — read-only, disabled-by-default, fixtures only, no deploy, explicit rollback. But the counter-trap can be subverted by "just this once" production data use.
- Clock: CI/predeploy gate means time pressure before deploy; staleness clock (Δ_max) vs deployment clock; regression smoke tests compare against current source evidence fixtures — clock of fixture freshness vs roster transaction clock.
- Founder roster accuracy cockpit: founder sees internal weights/conflicts — theory of mind: founder may demand faster reconciliation, bypassing legal review; must resist.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- This section asks for physical/biomechanical/weather veto proof. Since this is a data engineering build card, there are no physical/biomechanical/weather factors directly. But I can treat them as metaphorical/analogous veto layers or note null set. Better: interpret "cross-layer veto" as data pipeline layers: ingestion layer veto, reconciliation layer veto, validation layer veto, deploy layer veto. Physical layer = hardware/repo checkout; biomechanical = human operator (Claude Code/founder) actions; weather = environmental/external source volatility (site changes, robots.txt changes, TOS changes).
- Veto proof: each layer can veto. Ingestion: read-only adapter, no write to production. Reconciliation: conflict creates ConflictRecord, no silent overwrite. Validation: roster:stale must flag stale facts; stale/unknown do not render confirmed. Deploy: no deploy occurs; disabled-by-default. Legal: terms/robots review vetoes source inclusion.
- Breakdown: if legal review not done, source vetoed; if fixture stale beyond Δ_max, validation vetoes; if conflict unresolved, render qualified status not confirmed.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifier Rewards? Or some internal framework. I'll treat as verifier-based counterfactual veto scenarios.
1. Scenario: Stale official source renders confirmed fact. Veto: roster:stale check flags timestamp delta > Δ_max; prediction: public surface shows qualified status, not confirmed; founder cockpit shows stale warning. Verifiable: run roster:stale against fixture with old timestamp; assert exit code non-zero and no confirmed render.
2. Scenario: Conflicting official transaction evidence vs roster snapshot. Veto: ConflictRecord created, no silent overwrite; prediction: roster:conflicts returns entry; public render shows qualified status. Verifiable: fixture with two official sources same fact different values; assert ConflictRecord count > 0.
3. Scenario: Prohibited source ingestion (paywalled/login-gated) attempted in CI. Veto: legal/TOS boundary and adapter allowlist blocks; prediction: CI predeploy fails; no production mutation. Verifiable: run adapter fixture against disallowed URL; assert blocked and exit code non-zero.

I need to write >=1000 words total. Each section should be substantial. THINK_TRACE alone >=400 words.

I must cite [PAGE 1] and include verbatim quotes. Since the source text is one page, I'll cite [PAGE 1] frequently and quote exact phrases like "Roster facts are trust infrastructure", "Official current evidence wins unless stale or contradicted by newer official transaction evidence", "Conflicts create ConflictRecord entries instead of silent overwrites", "Do not mutate production data", "stale/unknown facts do not render as confirmed", "Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams", etc.

Zero betting lines: ensure no mention of spreads, totals, moneylines, odds. I can mention NFL teams/players (Najee Harris, Rico Dowdle) as they are in the source text — that's fine, not betting.

Zero toy equations: no Force/Fatigue ratios. Use formal set theory, predicate logic, information theory units (bits, seconds, counts). Avoid fake ratios.

Let me draft.

Structure:
- Brief intro maybe not needed, just jump into XML sections. The user wants exactly these XML sections. I'll output them in order.

Word count check: THINK_TRACE needs >=400. Total >=1000. I'll aim for ~1500-2000 total.

Let me write carefully.

THINK_TRACE draft:

The build card BUILD-NRT-055 sits in a duplicate-gate extension relationship to BUILD-GV2-099 [PAGE 1]. That matched existing card governs generic source freshness, player surface, and data quality work [PAGE 1]. NRT-055 does not replace it; it extends that namespace with NFL-roster-specific truth rules: fact-level evidence, conflict handling, staff rules, and deploy gates [PAGE 1]. The first multi-hop is therefore jurisdictional: any implementation must link back to GV2-099 rather than recreate generic freshness cards [PAGE 1], otherwise the duplicate gate is violated and the acceptance criterion "Duplicate gate is honored" fails [PAGE 1].

Second hop: the trust-infrastructure claim [PAGE 1] — "Roster facts are trust infrastructure. Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions" [PAGE 1] — imposes a zero-tolerance requirement on rendered confirmation. The acceptance criteria make this explicit: "Stale/unknown facts do not render as confirmed" [PAGE 1]. Operationally this means the public render layer must gate on an evidence freshness predicate and a conflict-null predicate before setting status = confirmed. If either predicate fails, the qualified status must be shown instead [PAGE 1].

Third hop: the ingestion/reconciliation boundary [PAGE 1]. The card mandates read-only source adapters or fixture-based probes first, raw source snapshots stored with timestamp, URL, hash, parsed record count, parser version, and evidence IDs, and no production mutation [PAGE 1]. Reconciliation compares official, open-data, and fallback records fact-by-fact; official current evidence wins unless stale or contradicted by newer official transaction evidence; conflicts create ConflictRecord entries instead of silent overwrites [PAGE 1]. This creates a gray zone: "stale" is referenced but no Δ_max (maximum allowable staleness interval) is defined in the card [PAGE 1]. Without a formal staleness threshold, the reconciliation operator cannot be deterministically implemented, and a fixture that is one second too old could either pass or fail depending on an undefined constant. That is a breakdown regime waiting to occur.

Fourth hop: legal/TOS boundary vs. fallback upgrade path [PAGE 1]. Media/fantasy sources are fallback/corroboration unless legal approval upgrades them [PAGE 1]. The upgrade criteria, review cadence, and revocation conditions are unspecified. If an unapproved media source is silently promoted during a roster crisis (e.g., a Week 3 depth-chart change), the system could render a conflicted fact as confirmed, violating the primary trust risk identified in the card [PAGE 1].

Fifth hop: regression smoke tests [PAGE 1]. Najee Harris and Rico Dowdle must compare rendered facts against current source evidence fixtures, not hardcoded replacement teams [PAGE 1]. This anti-hardcoding rule prevents the trap where a player's true current team is replaced by a stale hardcoded value after a trade or waiver move. Because the workspace is a docs/control lane, not a full app checkout [PAGE 1], real shipping clone paths are unknown [PAGE 1], so the first executable act must be repo-root verification before any script is written.

Gray-zone audit: The card is P0 priority with Medium difficulty [PAGE 1], yet demands a "smallest docs-first, type-only, or disabled-by-default implementation" [PAGE 1]. P0 urgency plus disabled-by-default creates a deployment-timing trap: if the script remains disabled through a predeploy window, the roster-truth gate it is meant to provide does not exist in CI/predeploy [PAGE 1], yet the product surface lists CI/predeploy [PAGE 1]. The veto chain must therefore include an explicit enablement approval step that cannot be bypassed by "crisis mode" regression to silent overwrites.

I think that's >400 words.

SOURCE_OPERATORS_AND_EQUATIONS draft:

Define the evidence tuple from [PAGE 1] ingestion plan:

e = (τ, u, h, n, v, ε) ∈ E
τ ∈ ℝ⁺ [s since Unix epoch] snapshot timestamp
u ∈ 𝒰 source URL, subject to terms/robots review [PAGE 1]
h ∈ {0,1}²⁵⁶ SHA-256 content hash [bits]
n ∈ ℕ₀ parsed record count [dimensionless]
v ∈ SemVer parser version [dimensionless string]
ε ∈ UUID evidence ID [dimensionless]

Do not mutate production data [PAGE 1].

Freshness predicate:
ℱ(e, τ_official, Δ_max) := [τ_official − τ ≤ Δ_max] ∧ ¬𝒮(τ, τ_official)
where 𝒮 is staleness. Breakdown/singularity when τ_official − τ > Δ_max or Δ_max is undefined. Since the card does not specify Δ_max [PAGE 1], the implementation must declare it as a configurable constant with units [s], default derived from NFL transaction cadence (e.g., waiver wire processing windows), and flag undefined Δ_max as a validation failure.

Reconciliation operator ℛ over source classes O (official), F (open data), M (media/fallback):
ℛ(f) = argmax_{s∈{O,F,M}} w(s) · 𝕀[ℱ(e_s)] · ¬𝒞(f,s)
where w(s) is source weight [dimensionless trust weight], 𝕀 is the freshness indicator, and 𝒞 is the conflict predicate.

Conflict predicate:
𝒞(f) := ∃ e_i, e_j : value(e_i) ≠ value(e_j) ∧ |τ_i − τ_j| ≤ δ_conflict
When 𝒞(f) = true, emit ConflictRecord c = {(source, value, τ)} instead of silent overwrite [PAGE 1].

ValidationError data model [PAGE 1]:
VE := {fact_id ∈ UUID, expected ∈ Value, actual ∈ Value, source_weight ∈ ℝ⁺, severity ∈ {low, medium, high, critical}, τ_detected ∈ ℝ⁺ [s]}

Public render constraint:
𝕀[rendered_confirmed(f) ∧ (𝒮(f) ∨ 𝒞(f))] = 0
[PAGE 1]: "Stale/unknown facts do not render as confirmed."

Source weight visibility boundary:
Public surface: current fact, qualified status, last verified timestamp [τ_last] [PAGE 1].
Founder/admin: source weights w(s), conflicts, parser errors, raw evidence links [PAGE 1]. Proprietary reconciliation logic not exposed [PAGE 1].

Citations: [PAGE 1] throughout with verbatim quotes: "Store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs. Do not mutate production data." [PAGE 1]; "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites." [PAGE 1]; "Do not expose proprietary reconciliation logic." [PAGE 1].

RETROCAUSAL_GENEALOGY draft:

Lineage: The card's parent BUILD-GV2-099 places it in a lineage of generic source-freshness and player-surface data-quality work [PAGE 1]. Scientifically, this descends from master-data-management and entity-resolution traditions (single source of truth, survivorship rules, conflict records) and from immutable-evidence engineering (content-addressed snapshots, hash-chained provenance, WORM-style raw evidence stores). The read-only adapter pattern mirrors extract-transform (without load) ETL and fixture-based testing used in CI/predeploy gates [PAGE 1].

NFL-specific multi-week traps: Roster truth decays with the transaction calendar. A fact verified at roster cutdown (Week 0) may be stale by Week 3 due to waivers, injured reserve, practice-squad elevations, or trades [PAGE 1 context: status/team/number/staff role]. The Najee Harris and Rico Dowdle smoke tests explicitly guard against hardcoded replacement teams [PAGE 1], because hardcoding encodes a Week-1 state into a Week-N render. Fixture drift is the inverse trap: a fixture that was current when captured becomes a stale source itself if not re-pulled under the read-only probe schedule [PAGE 1]. Parser-version drift (v changes) can re-parse the same raw snapshot into different records, breaking evidence ID stability [PAGE 1]. Legal upgrade trap: media/fantasy fallback sources may be informally upgraded during a crisis without documented legal approval, silently corrupting the source-weight hierarchy w(s) [PAGE 1]. Staleness trap: because Δ_max is unspecified [PAGE 1], a "current" fact may in fact be weeks old relative to the latest official transaction evidence, causing the system to render confirmed what should be qualified [PAGE 1].

RECURSIVE_THEORY_OF_MIND draft:

Crisis habit regression: Under P0 pressure and the stated primary trust risk (stale or conflicted fact looking confirmed) [PAGE 1], an operator or agent may regress to silent overwrites, hardcoded fixtures, production data peeks, or scraping prohibited sources to "ship fast" [PAGE 1]. These are exactly the behaviors the card forbids: no production DB mutation, no deploy, no prohibited/paywalled/login-gated/high-volume scraping [PAGE 1].

Counter-trap: BUILD-NRT-055 is itself a counter-trap. It mandates disabled-by-default or type-only implementation [PAGE 1], read-only adapters [PAGE 1], ConflictRecord instead of overwrite [PAGE 1], and rollback that deletes generated fixtures while leaving production untouched [PAGE 1]. The recursive risk is that the counter-trap gets disabled by default and never enabled: the CI/predeploy product surface [PAGE 1] then lacks the roster-truth gate, yet the team believes it exists.

Clock layering: There are three clocks. (1) The staleness clock τ_official − τ versus Δ_max [PAGE 1]. (2) The fixture-freshness clock: how often source snapshots are re-pulled against live legal sources [PAGE 1]. (3) The predeploy clock: time available before CI/predeploy gates the script must pass [PAGE 1]. If the staleness clock expires while the script remains disabled, the founder roster accuracy cockpit [PAGE 1] shows a false sense of coverage.

Theory of mind for the founder/admin user: The founder cockpit exposes source weights, conflicts, parser errors, and raw evidence links [PAGE 1]. A founder under deadline pressure may demand that reconciliation logic be exposed or that a conflicted fact be force-confirmed [PAGE 1]. The build card's public/private boundary [PAGE 1] — do not expose proprietary reconciliation logic — is the procedural counter-pressure that must be maintained even when the founder requests transparency.

CROSS_LAYER_VETO_ADJUDICATION draft:

Layer 1 — Physical/repo layer (checkout state): Veto if repo root, branch, dirty state, package manager (pnpm), or existing scripts cannot be verified [PAGE 1: implementation plan step 1]. Unknown real shipping clone paths [PAGE 1] mean any path assumption is a veto until confirmed.

Layer 2 — Biomechanical/operator layer (human and agent action): Veto on production DB mutation, deployment config changes, secrets access, live cron jobs, credentialed sources [PAGE 1: Files to avoid; Implementation plan]. The operator (Claude Code per prompt) must not deploy or mutate production data [PAGE 1].

Layer 3 — Legal/TOS layer (environmental/external "weather"): Source volatility acts like weather: robots.txt changes, terms-of-service updates, paywall erection, login gating [PAGE 1]. Veto any source that fails terms and robots review [PAGE 1]. Media/fantasy fallback is vetoed unless legal approval upgrades it [PAGE 1].

Layer 4 — Ingestion layer: Veto on write attempts to production [PAGE 1]; veto on missing hash h or evidence ID ε [PAGE 1]; veto on parser version drift without recorded v [PAGE 1].

Layer 5 — Reconciliation layer: Veto on silent overwrite when 𝒞(f) = true [PAGE 1]; emit ConflictRecord instead [PAGE 1]; veto on official evidence that is stale relative to newer official transaction evidence [PAGE 1].

Layer 6 — Validation/render layer: Veto on rendered_confirmed(f) when 𝒮(f) ∨ 𝒞(f) [PAGE 1]. Public surface shows qualified status [PAGE 1].

Layer 7 — Deploy layer: Veto on deploy; script remains disabled-by-default until explicit approval [PAGE 1].

Veto proof summary: Every layer can independently block the path from raw fixture to public confirmed fact. A single-layer failure (e.g., legal review passed but staleness Δ_max undefined) does not authorize confirmation; the most restrictive predicate governs.

RLVR_COUNTERFACTUAL_VETOES draft:

Scenario 1 — Stale official source rendered confirmed.
Setup: Fixture snapshot e_official with τ such that τ_now − τ > Δ_max (Δ_max defined per source operators). Counterfactual: without the roster:stale veto, the public surface renders status = confirmed.
Veto: roster:stale check evaluates ¬𝒮 and blocks confirmation; public surface shows qualified status with last verified timestamp [PAGE 1].
Prediction: `pnpm roster:stale` exits non-zero; `roster:verify` returns ValidationError entries with severity high; no confirmed render for the fixture fact.
Verifiable: run against fixture; assert exit code ≠ 0 and rendered status ≠ confirmed.

Scenario 2 — Conflicting official transaction evidence.
Setup: Two official snapshots e₁, e₂ for the same roster fact with value₁ ≠ value₂ and |τ₁ − τ₂| ≤ δ_conflict (e.g., a trade reported by two official feeds with different effective teams).
Counterfactual: silent overwrite keeps the last-processed value.
Veto: reconciliation operator ℛ sets 𝒞(f) = true and creates ConflictRecord c [PAGE 1]; no silent overwrite [PAGE 1].
Prediction: `roster:conflicts` returns c with both source/value/τ entries; public render shows qualified status; founder cockpit shows conflict [PAGE 1].
Verifiable: insert dual-official fixture; assert ConflictRecord count = 1 and no value silently overwritten.

Scenario 3 — Prohibited source ingestion attempted in CI.
Setup: Adapter fixture targets a paywalled/login-gated/high-volume URL that has not passed terms/robots review [PAGE 1].
Counterfactual: ingestion proceeds and populates raw snapshots from the prohibited source.
Veto: Legal/TOS boundary vetoes source inclusion; read-only adapter allowlist blocks the URL [PAGE 1].
Prediction: CI/predeploy step fails; no raw snapshot stored; production data untouched [PAGE 1].
Verifiable: run adapter against disallowed fixture URL; assert blocked and exit code non-zero; assert production DB unchanged.

Each scenario is verifiable via fixture-based probes without production data [PAGE 1].

Now I need to make sure total words >= 1000. THINK_TRACE ~450. SOURCE_OPERATORS ~400. RETROCAUSAL ~300. RECURSIVE ~300. CROSS_LAYER ~300. RLVR ~300. Total ~2050. Good.

I should double check no betting lines: none. No toy equations: I use formal predicates and set notation with units. Good.

Citations: [PAGE 1] used throughout. Verbatim quotes included.

One thing: The prompt says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I have done that.

Also "STRICT INVARIANTS" mention ">= 1,000-WORD DEPTH across these exact XML sections". I'll ensure the output contains exactly the sections requested, in order. I won't add extra sections outside them, or maybe a minimal wrapper is fine. Better to just output the sections directly.

Let me refine wording to hit word counts and sound like the GSE + GSI Frontier Reasoning Foundry persona — rigorous, formal, audit-oriented.

I'll write it out now.
</NATIVE_REASONING>

<THINK_TRACE>
The build card BUILD-NRT-055 occupies a duplicate-gate extension relationship to BUILD-GV2-099 [PAGE 1]. That matched existing card governs generic source freshness, player surface, and data quality work [PAGE 1]. NRT-055 explicitly does not supersede or replace it; it extends the namespace with NFL-roster-specific truth rules: fact-level evidence, conflict handling, staff rules, and deploy gates [PAGE 1]. The first multi-hop is therefore jurisdictional: any implementation must link back to GV2-099 instead of recreating generic freshness cards [PAGE 1], otherwise the acceptance criterion "Duplicate gate is honored" fails [PAGE 1].

Second hop: the trust-infrastructure claim [PAGE 1]. Verbatim from the card: "Roster facts are trust infrastructure. Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions" [PAGE 1]. This imposes a zero-tolerance requirement on rendered confirmation, operationalized by the acceptance criterion "Stale/unknown facts do not render as confirmed" [PAGE 1]. Operationally, the public render layer must gate on both a freshness predicate and a conflict-null predicate before assigning status = confirmed. If either predicate fails, the public surface must show qualified status rather than confirmed [PAGE 1].

Third hop: the ingestion-to-reconciliation boundary [PAGE 1]. The card mandates read-only source adapters or fixture-based probes first; raw source snapshots must be stored with timestamp, URL, hash, parsed record count, parser version, and evidence IDs; and production data must not be mutated [PAGE 1]. Verbatim: "Store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs. Do not mutate production data." [PAGE 1]. Reconciliation compares official, open-data, and fallback records fact-by-fact; official current evidence wins unless stale or contradicted by newer official transaction evidence; conflicts create ConflictRecord entries instead of silent overwrites [PAGE 1]. Verbatim: "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites." [PAGE 1]. This creates a gray zone: "stale" is referenced but no maximum allowable staleness interval (Δ_max) is defined anywhere in the card [PAGE 1]. Without a formal Δ_max, the reconciliation operator cannot be deterministically implemented; a fixture one second beyond an unstated threshold could either pass or fail depending on an undocumented constant. That is a breakdown regime.

Fourth hop: legal/TOS boundary versus the fallback upgrade path [PAGE 1]. Verbatim: "Media/fantasy sources are fallback/corroboration unless legal approval upgrades them." [PAGE 1]. The upgrade criteria, review cadence, and revocation conditions are unspecified. If an unapproved media source is silently promoted during a roster transaction window, the system can render a conflicted fact as confirmed, which is precisely the primary trust risk identified in the card [PAGE 1]: "Primary trust risk is making a stale or conflicted fact look confirmed." [PAGE 1].

Fifth hop: regression smoke tests [PAGE 1]. Verbatim: "Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams." [PAGE 1]. This anti-hardcoding rule prevents the trap where a player's true current team is replaced by a stale hardcoded value after a trade, waiver, or status move. Because the workspace is a docs/control lane, not a full app checkout [PAGE 1], and "real shipping clone paths [are] unknown in this workspace" [PAGE 1], the first executable act must be repo-root, branch, dirty-state, and package-manager verification before any script is written [PAGE 1].

Gray-zone audit: The card is P0 priority with Medium difficulty [PAGE 1], yet demands a "smallest docs-first, type-only, or disabled-by-default implementation" [PAGE 1]. P0 urgency plus disabled-by-default creates a deployment-timing trap: if the script remains disabled through a CI/predeploy window, the roster-truth gate the product surface lists [PAGE 1] does not actually exist, yet the team may believe coverage is active. The veto chain must therefore include an explicit, auditable enablement approval step that cannot be bypassed by crisis-mode regression to silent overwrites. Additional gray zones include the undefined staleness threshold Δ_max, the undefined source-weight upgrade criteria for media fallbacks, and the tension between exposing source weights and conflicts in the founder cockpit [PAGE 1] while withholding proprietary reconciliation logic [PAGE 1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Define the evidence tuple from the ingestion plan on [PAGE 1]:

e = (τ, u, h, n, v, ε) ∈ E

τ ∈ ℝ⁺ [s since Unix epoch] — snapshot timestamp  
u ∈ 𝒰 — source URL, admitted only after terms and robots review [PAGE 1]  
h ∈ {0,1}²⁵⁶ [bits] — SHA-256 content hash  
n ∈ ℕ₀ [dimensionless count] — parsed record count  
v ∈ SemVer [dimensionless string] — parser version  
ε ∈ UUID [dimensionless] — evidence ID  

Constraint: do not mutate production data [PAGE 1].

Freshness predicate:
ℱ(e, τ_official, Δ_max) := [τ_official − τ ≤ Δ_max] ∧ ¬𝒮(τ, τ_official)

where 𝒮 denotes staleness. Breakdown/singularity occurs when τ_official − τ > Δ_max or when Δ_max is undefined. Because the card does not specify Δ_max [PAGE 1], the implementation must declare Δ_max as a configurable constant with units [s], defaulted from NFL transaction cadence, and must treat an undefined Δ_max as a validation failure rather than silently assuming freshness.

Reconciliation operator ℛ over source classes O (official), F (open data), M (media/fallback):

ℛ(f) = argmax_{s∈{O,F,M}} w(s) · 𝕀[ℱ(e_s)] · ¬𝒞(f,s)

where w(s) ∈ ℝ⁺ [dimensionless trust weight], 𝕀 is the freshness indicator, and 𝒞 is the conflict predicate.

Conflict predicate:
𝒞(f) := ∃ e_i, e_j : value(e_i) ≠ value(e_j) ∧ |τ_i − τ_j| ≤ δ_conflict

When 𝒞(f) = true, emit ConflictRecord c = {(source, value, τ)} instead of silent overwrite [PAGE 1].

ValidationError data model [PAGE 1]:
VE := {fact_id ∈ UUID, expected ∈ Value, actual ∈ Value, source_weight ∈ ℝ⁺, severity ∈ {low, medium, high, critical}, τ_detected ∈ ℝ⁺ [s]}

Public render constraint (information-theoretic zero-tolerance):
𝕀[rendered_confirmed(f) ∧ (𝒮(f) ∨ 𝒞(f))] = 0

[PAGE 1]: "Stale/unknown facts do not render as confirmed."

Public/private boundary [PAGE 1]:
- Public surface: current fact, qualified status, last verified timestamp τ_last [s].  
- Founder/admin surface: source weights w(s), conflicts, parser errors, raw evidence links.  
- Do not expose proprietary reconciliation logic [PAGE 1].

Legal/TOS source admissibility [PAGE 1]:
Use official/public sources only after terms and robots review. Prohibited: private, paywalled, login-gated, prohibited, or high-volume sources requiring credentials. Media/fantasy are fallback/corroboration unless legal approval upgrades them [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage: BUILD-NRT-055's parent is BUILD-GV2-099 [PAGE 1], placing it in a genealogy of generic source-freshness, player-surface, and data-quality work [PAGE 1]. Scientifically, this descends from master-data-management and entity-resolution traditions — single source of truth, survivorship rules, and conflict records — and from immutable-evidence engineering, including content-addressed snapshots, hash-chained provenance, and write-once raw evidence stores. The read-only adapter pattern mirrors extract-transform (without load) ETL used behind CI/predeploy gates [PAGE 1].

NFL-specific multi-week traps: Roster truth decays with the transaction calendar. A team, number, status, or staff-role fact verified at roster cutdown may be stale by Week 3 because of waivers, injured-reserve moves, practice-squad elevations, or trades [PAGE 1 context]. The Najee Harris and Rico Dowdle smoke tests explicitly guard against hardcoded replacement teams [PAGE 1], because hardcoding encodes a Week-1 state into a Week-N render. Fixture drift is the inverse trap: a fixture captured as current becomes a stale source itself if not re-pulled under the read-only probe schedule [PAGE 1]. Parser-version drift (v changes) can re-parse an identical raw snapshot into different records, breaking evidence-ID stability ε [PAGE 1]. The legal-upgrade trap: media/fallback sources may be informally upgraded during a roster crisis without documented legal approval, silently corrupting the source-weight hierarchy w(s) [PAGE 1]. The staleness trap: because Δ_max is unspecified [PAGE 1], a "current" fact may in fact be weeks old relative to the latest official transaction evidence, causing the system to render confirmed what should be qualified — the exact primary trust risk [PAGE 1].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under P0 pressure and the stated primary trust risk — "making a stale or conflicted fact look confirmed" [PAGE 1] — an operator or agent may regress to silent overwrites, hardcoded fixtures, production-data peeks, or scraping prohibited/paywalled/login-gated/high-volume sources to "ship fast." These are precisely the behaviors the card forbids: no production DB mutation, no deploy, no credentialed or prohibited sources [PAGE 1].

Counter-trap: BUILD-NRT-055 is itself a counter-trap. It mandates a disabled-by-default or type-only implementation [PAGE 1], read-only adapters [PAGE 1], ConflictRecord instead of silent overwrite [PAGE 1], and rollback that deletes generated fixtures while leaving production data untouched [PAGE 1]. The recursive risk is that the counter-trap remains disabled by default and is never enabled: the CI/predeploy product surface [PAGE 1] then lacks the roster-truth gate, yet the organization believes coverage exists.

Clock layering: Three clocks operate simultaneously. (1) The staleness clock: τ_official − τ versus Δ_max [PAGE 1]. (2) The fixture-freshness clock: how often source snapshots are re-pulled against live, legally reviewed sources [PAGE 1]. (3) The predeploy clock: time available before CI/predeploy gates the script must pass [PAGE 1]. If the staleness clock expires while the script remains disabled, the founder roster accuracy cockpit [PAGE 1] projects a false sense of coverage.

Theory of mind for the founder/admin user: The founder cockpit exposes source weights, conflicts, parser errors, and raw evidence links [PAGE 1]. A founder under deadline pressure may demand that proprietary reconciliation logic be exposed or that a conflicted fact be force-confirmed [PAGE 1]. The public/private boundary — "Do not expose proprietary reconciliation logic" [PAGE 1] — is the procedural counter-pressure that must be maintained even when transparency is requested, because exposing the weighting algorithm could allow internal or external actors to game source selection.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Layer 1 — Physical/repo layer (checkout state): Veto if repo root, branch, dirty state, package manager (pnpm), or existing scripts cannot be verified [PAGE 1: Implementation Plan step 1]. Unknown real shipping clone paths [PAGE 1] mean any path assumption is a veto until confirmed.

Layer 2 — Biomechanical/operator layer (human and agent action): Veto on production DB mutations, deployment-config changes, secrets access, live cron jobs, and credentialed sources [PAGE 1: Files to avoid; Implementation Plan]. The executing agent must not deploy or mutate production data [PAGE 1].

Layer 3 — Legal/TOS layer (environmental/external "weather"): Source volatility acts like weather — robots.txt changes, terms-of-service updates, paywall erection, login gating [PAGE 1]. Veto any source that fails terms and robots review [PAGE 1]. Media/fantasy fallback is vetoed unless legal approval upgrades it [PAGE 1].

Layer 4 — Ingestion layer: Veto on any write attempt to production [PAGE 1]; veto on missing hash h or evidence ID ε [PAGE 1]; veto on parser-version drift without recorded v [PAGE 1].

Layer 5 — Reconciliation layer: Veto on silent overwrite when 𝒞(f) = true [PAGE 1]; emit ConflictRecord instead [PAGE 1]; veto on official evidence that is stale relative to newer official transaction evidence [PAGE 1].

Layer 6 — Validation/render layer: Veto on rendered_confirmed(f) when 𝒮(f) ∨ 𝒞(f) [PAGE 1]. Public surface shows qualified status with last verified timestamp [PAGE 1].

Layer 7 — Deploy layer: Veto on deploy; the script remains disabled-by-default until explicit enablement approval [PAGE 1].

Veto proof: Every layer can independently block the path from raw fixture to public confirmed fact. A single-layer failure — for example, legal review passed but Δ_max remains undefined — does not authorize confirmation; the most restrictive predicate governs, and the fact renders as qualified or unknown, never confirmed [PAGE 1].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Stale official source rendered confirmed.
Setup: Fixture snapshot e_official with τ such that τ_now − τ > Δ_max (Δ_max defined per SOURCE_OPERATORS_AND_EQUATIONS). Counterfactual without the roster:stale veto: public surface renders status = confirmed.
Veto: roster:stale evaluates ¬𝒮 and blocks confirmation; public surface shows qualified status with last verified timestamp [PAGE 1].
Prediction: `pnpm roster:stale` exits non-zero; `roster:verify` returns ValidationError entries with severity high; no confirmed render for the fixture fact.
Verifiable: run against the stale fixture; assert exit code ≠ 0 and rendered status ≠ confirmed; no production mutation [PAGE 1].

Scenario 2 — Conflicting official transaction evidence.
Setup: Two official snapshots e₁, e₂ for the same roster fact with value₁ ≠ value₂ and |τ₁ − τ₂| ≤ δ_conflict (e.g., competing official feeds reporting different effective teams for the same transaction). Counterfactual without the conflict veto: silent overwrite retains the last-processed value.
Veto: reconciliation operator ℛ sets 𝒞(f) = true and creates ConflictRecord c = {(source, value, τ)} instead of silent overwrite [PAGE 1].
Prediction: `roster:conflicts` returns c with both source/value/τ entries; public render shows qualified status; founder cockpit shows the conflict [PAGE 1].
Verifiable: insert dual-official fixture; assert ConflictRecord count = 1, no value silently overwritten, and rendered status ≠ confirmed.

Scenario 3 — Prohibited source ingestion attempted in CI.
Setup: Adapter fixture targets a paywalled, login-gated, or high-volume URL that has not passed terms and robots review [PAGE 1]. Counterfactual without the legal/TOS veto: ingestion proceeds and populates raw snapshots from the prohibited source.
Veto: legal/TOS boundary vetoes source inclusion; read-only adapter allowlist blocks the URL [PAGE 1].
Prediction: CI/predeploy step fails; no raw snapshot stored; production data untouched [PAGE 1].
Verifiable: run adapter against disallowed fixture URL; assert blocked, exit code non-zero, and production DB unchanged by checksum comparison before/after.

All three scenarios are verifiable via fixture-based probes without production data, secrets, or deployment [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>