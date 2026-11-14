---
source: "BUILD-NRT-004-nfl-com-transaction-adapter-probe.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4742
---

<NATIVE_REASONING>
The user has provided a source document about a build card for an NFL.com transaction adapter probe. They want me to act as the GSE + GSI Frontier Reasoning Foundry and produce a response with specific XML sections, each with deep analysis, formal equations, page citations, etc.

Key constraints:
1. ZERO BETTING LINES - no spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE 1] markers and verbatim quotes since only 1 page is provided.
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to analyze the source text deeply. Since there's only 1 page, I'll cite [PAGE 1] throughout.

The document is about BUILD-NRT-004: NFL.com transaction adapter probe. It's a technical build card for a roster truth system.

Let me structure this:

THINK_TRACE (>=400 words): Deep multi-hop derivation of the system design, gray-zone audit of risks, ambiguity in source proof (SRC-004), duplicate gate extension, reconciliation conflicts, etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations for evidence scoring, conflict detection, staleness decay, etc. Units: bits, seconds, probability [0,1]. Page citations [PAGE 1]. Breakdown of singularity regimes (e.g., when conflict score = 1, when staleness exceeds threshold).

RETROCAUSAL_GENEALOGY: Historical lineage of roster truth systems, data provenance, multi-week traps (stale facts persisting across weeks).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (what happens when data quality fails under pressure), counter-trap (over-trusting official source), clock (freshness decay).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof - this is a bit odd for a data engineering card, but I need to interpret it as cross-layer validation vetoes: physical layer (database constraints), biomechanical (player status rules), weather (game postponements affecting roster transactions).

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards?) veto scenarios + predictions.

I must NOT mention betting lines. I must NOT invent fake ratios. All equations must be formal.

Let me draft carefully, ensuring word count is high enough. I'll aim for roughly 2000+ words total across sections to be safe.

Important: cite [PAGE 1] and verbatim quotes. The source text is all on page 1.

Let me plan the content:

THINK_TRACE:
- Multi-hop: Duplicate gate (EXTENSION of BUILD-GV2-098) -> Goal (NFL.com transaction adapter) -> Why it matters (trust infrastructure corrupts Player Lab, GSE Rating, search, content, customer trust, internal decisions) -> Current problem (docs/control lane, not full app checkout; missing fact-level NFL roster evidence, conflict handling, staff rules, deploy gates) -> Source proof needed SRC-004 -> Product surface (Player Lab, founder cockpit) -> Internal surface (founder roster accuracy cockpit, data quality reports) -> Data model (Transaction, SourceEvidence) -> Ingestion plan (read-only adapters/fixtures, raw snapshots with timestamp, URL, hash, parsed record count, parser version, evidence IDs; no production mutation) -> Reconciliation plan (official/open-data/fallback fact-by-fact; official wins unless stale/contradicted by newer official; conflicts -> ConflictRecord not silent overwrites) -> Validation plan (roster:audit, roster:verify, roster:conflicts, roster:stale, test:roster; interim source inventory, fixtures, JSONL/card checks) -> Public/Private boundary -> Legal/TOS boundary -> Repo context -> Implementation plan (6 steps) -> Acceptance criteria -> Test plan (Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams) -> Rollback plan -> Priority P0, Difficulty L, Risks MEDIUM.
- Gray-zone audit: "read-only source adapters or fixture-based probes first" is ambiguous about when to transition to live; "official current evidence wins unless stale" lacks quantitative staleness threshold; "staff rules" undefined; SRC-004 not provided in this page; "low-volume legal probes" undefined volume; package manager/branch unknown; real shipping clone paths unknown; hardcoded replacement teams prohibited in smoke tests but fixtures may drift; conflict visibility internally but proprietary reconciliation logic not exposed—boundary fuzzy.

SOURCE_OPERATORS_AND_EQUATIONS:
Define:
- Evidence record E = (t, u, h, c, v, id) where t timestamp, u URL, h hash, c parsed record count, v parser version, id evidence ID. [PAGE 1] ingestion plan.
- Fact F with team, number, status, staff role.
- Staleness operator: S(F, t_now) = t_now - t_verified. Units: seconds (SI). Breakdown when S > τ_stale (singularity: stale fact rendered as confirmed violates acceptance criterion).
- Conflict operator: C(F_official, F_fallback) = 1 if F_official ≠ F_fallback and t_fallback > t_official? Actually official wins unless stale or contradicted by newer official transaction evidence. So conflict if official evidence E_off and newer official E_off' contradict. Or fallback contradicts official but official is stale.
- Truth score T(F) ∈ [0,1] probability units. Not a fake ratio—it's a Bayesian posterior or evidence weight. Let's formalize: T(F) = σ(Σ w_i * I(E_i supports F)) maybe too simplistic. Better: define evidence weight w(E) based on source tier (official=1, open-data=α, fallback=β) with 0≤β≤α≤1. But I must avoid toy equations. I'll present it as a formal weighted evidence aggregation with assumptions and breakdown regimes.
- ConflictRecord creation: if ∃ E_a, E_b with same fact key but divergent values and ¬(stale(E_a) ∧ newer(E_b)), then create ConflictRecord.
- Public render gate: render(F) = confirmed iff T(F) ≥ θ_confirmed ∧ ¬stale(F) ∧ ¬conflicted(F). Else qualified/unknown.
- Units: timestamp in Unix seconds (SI), hash SHA-256 bits (256 bits), record count dimensionless count, probability dimensionless [0,1].

RETROCAUSAL_GENEALOGY:
- Lineage: NFL roster truth → Player Lab → GSE Rating → search/content/customer trust/internal decisions. Historical data provenance, official transactions as ground truth.
- Multi-week traps: stale status (IR, PUP, suspension) persisting across game weeks; number changes not propagated; staff role changes (coaching) not reflected; duplicate player entries across extensions (BUILD-GV2-098 extension).
- Najee Harris and Rico Dowdle smoke tests: specific players used to detect regressions across weeks.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under data incident, engineers may revert to silent overwrites (violating conflict handling), or hardcode replacement teams (violating smoke test rule), or scrape prohibited sources (violating legal).
- Counter-trap: over-reliance on "official current evidence wins" leading to ignoring newer open-data corrections when official is stale; or assuming read-only adapters remain safe when they eventually write.
- Clock: staleness decay τ_stale; freshness timestamp t_verified; the clock determines when a fact transitions from confirmed to qualified/unknown.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer veto: database constraints, no production migration, no secret exposure, read-only adapters.
- Biomechanical layer veto: player status rules (IR/PUP/NFI), number eligibility, staff role conflict with roster limits; a fact that violates physical roster constraints is vetoed.
- Weather layer: game postponements/cancellations affect transaction timestamps and roster moves (e.g., COVID, weather postponements), creating artificial staleness or conflict windows.
- Adjudication: veto hierarchy—legal/TOS > physical integrity > conflict visibility > public render.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR veto scenarios + predictions.
Scenario 1: Silent overwrite of conflicted fact. Veto: ConflictRecord must be created; prediction: system rejects write, audit log shows ConflictRecord, no silent overwrite.
Scenario 2: Stale fact rendered confirmed beyond τ_stale. Veto: public render gate blocks; prediction: fact shows qualified status with last verified timestamp, not confirmed.
Scenario 3: Hardcoded replacement team in smoke test (e.g., Najee Harris hardcoded to a team instead of fixture comparison). Veto: test harness compares rendered facts against current source evidence fixtures; prediction: test fails if hardcoded values mismatch fixture, CI blocks deploy.
Maybe a 4th: production DB mutation attempted. But requirement says 3.

Now I need to write this with formal LaTeX, page citations [PAGE 1], verbatim quotes.

Verbatim quotes from [PAGE 1]:
- "Roster facts are trust infrastructure."
- "Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions."
- "Use read-only source adapters or fixture-based probes first. Store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs. Do not mutate production data."
- "Compare official, open-data, and fallback records fact-by-fact. Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites."
- "Do not expose proprietary reconciliation logic."
- "Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams."
- "Remove new disabled script/types/docs, delete generated fixtures, and leave existing production data untouched."

I need to ensure no betting lines. None here.

Word count: THINK_TRACE must be >=400 words. Total >=1000 words. I'll write substantial content.

Let's draft.

Structure of final output:
<THINK_TRACE>
... (~500-700 words)
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
... (~400-500 words with LaTeX)
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
... (~250-350 words)
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
... (~250-350 words)
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
... (~250-350 words)
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
... (~250-350 words, 3 scenarios)
</RLVR_COUNTERFACTUAL_VETOES>

I must be careful with LaTeX formatting. Use proper equations.

Let's write it out.

THINK_TRACE content:
Start by stating this is a docs-first, fixture-backed probe for NFL roster truth. Multi-hop: duplicate gate EXTENSION of BUILD-GV2-098 means it doesn't recreate generic freshness/player surface work but adds roster-specific truth rules. The "Why It Matters" quote establishes trust infrastructure. Current problem: workspace is docs/control lane, not full app checkout; missing fact-level NFL roster evidence, conflict handling, staff rules, deploy gates. Source proof SRC-004 needed but not present on this page—gray zone. Data model: Transaction, SourceEvidence. Ingestion: read-only adapters/fixtures, raw snapshots (timestamp, URL, hash, parsed record count, parser version, evidence IDs), no production mutation. Reconciliation: official/open-data/fallback fact-by-fact; official wins unless stale or contradicted by newer official transaction evidence; conflicts -> ConflictRecord not silent overwrites. Validation: roster:audit, roster:verify, roster:conflicts, roster:stale, test:roster; interim source inventory/fixtures/JSONL/card checks. Public/Private boundary: public shows current fact, qualified status, last verified timestamp; founder/admin shows source weights, conflicts, parser errors, raw evidence links; no proprietary reconciliation logic. Legal/TOS: official/public sources after terms/robots review; no scraping private/paywalled/login-gated/prohibited/high-volume; media/fantasy fallback unless legal approval. Repo context: likely files unknown, avoid prod DB migrations/deploy config/secrets/live cron/credential sources. Implementation plan 6 steps. Acceptance criteria: duplicate gate honored, source evidence design for every roster fact, conflicts visible internally, stale/unknown not rendered confirmed, no prod DB mutation/deploy. Test plan: unit normalization/scoring; integration adapter fixtures/reconciliation; data validation stale/conflict/no-mock; regression Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams. Rollback: remove disabled script/types/docs, delete generated fixtures, leave prod data untouched; later DB rollback via migration rollback and snapshot restore after backup verification. Priority P0, Difficulty L, Risks MEDIUM.

Gray-zone audit: staleness threshold τ_stale undefined; "staff rules" undefined; "low-volume" undefined; transition from fixture to live adapter ambiguous; SRC-004 missing; smoke test fixture drift risk; conflict visibility internally vs proprietary logic not exposed—boundary fuzzy; read-only adapters could evolve to write; Najee Harris/Rico Dowdle fixtures may become stale themselves.

SOURCE_OPERATORS_AND_EQUATIONS:
Define evidence tuple E = (t_E, u_E, h_E, c_E, v_E, id_E) ∈ T × U × H × ℕ × V × ID. t_E ∈ ℝ (Unix seconds, SI), u_E ∈ U (URL string), h_E ∈ {0,1}^{256} (SHA-256), c_E ∈ ℕ (parsed record count), v_E ∈ V (parser version string), id_E ∈ ID. Source: [PAGE 1] Ingestion Plan.

Fact key k = (player_id, attribute) where attribute ∈ {team, number, status, staff_role}. Fact value f_k.

Evidence tier weight: w: SourceTier → [0,1], with w(official)=1.0, w(open-data)=α, w(fallback)=β, 0 ≤ β ≤ α ≤ 1. Assumption: tiers are mutually exclusive and legally vetted. Breakdown: if α or β not set by legal review, weight undefined (singularity).

Staleness operator: Δ(t_now, t_verified) = t_now - t_verified [seconds]. Stale predicate: Stale(F) ≡ Δ(t_now, t_verified(F)) > τ_stale. τ_stale ∈ ℝ⁺ seconds, must be defined per attribute (e.g., status vs number). Breakdown/singularity: if τ_stale = ∞ or undefined, stale facts render as confirmed, violating acceptance criterion.

Truth/confirmation gate: RenderConfirmed(F) ≡ ¬Stale(F) ∧ ¬Conflicted(F) ∧ EvidenceSufficient(F). EvidenceSufficient(F) ≡ ∃ E_official : Supports(E_official, F) ∧ ¬Stale(E_official). Otherwise render Qualified or Unknown.

Conflict operator: ConflictRecord created iff ∃ E_a, E_b with same fact key k, Value(E_a) ≠ Value(E_b), and ¬(Stale(E_a) ∧ NewerOfficial(E_b, E_a)). That is, conflicts are not silently overwritten [PAGE 1] Reconciliation Plan.

Public fact rendering: PublicView(F) = (f_k, status ∈ {Confirmed, Qualified, Unknown}, t_verified). Founder/Admin view adds (weights, conflicts, parser errors, raw evidence links) but not proprietary reconciliation logic [PAGE 1] Public/Private Boundary.

No betting lines. No toy ratios.

RETROCAUSAL_GENEALOGY:
Historical lineage: roster truth as trust infrastructure; NFL transactions as ground truth events; Player Lab, GSE Rating, search, content, customer trust, internal decisions downstream. BUILD-GV2-098 parent provides generic freshness/player surface; this card extends with roster-specific truth rules. Multi-week traps: (1) status staleness across game weeks (IR/PUP/suspension not cleared); (2) jersey number changes not propagated mid-season; (3) staff role changes (coaching moves) not reflected; (4) duplicate player identities across extensions causing evidence collision; (5) fixture drift where Najee Harris/Rico Dowdle smoke test fixtures age and no longer match current source evidence, causing false regression passes/fails. These traps are multi-week because a single stale transaction can corrupt downstream ratings for an entire season window.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under incident pressure, engineers may regress to silent overwrites (violating ConflictRecord rule), hardcode replacement teams in smoke tests (explicitly prohibited), or scrape prohibited high-volume sources to "fix" data quickly. Counter-trap: over-trusting "official current evidence wins" while ignoring that official evidence may be stale relative to newer open-data observations, or assuming read-only adapters remain read-only after deployment. Clock: the freshness clock Δ(t_now, t_verified) determines status transitions; if the clock is not monitored, facts silently expire from Confirmed to Qualified without alerting. The system must model the operator's belief state: believing a fact is confirmed when it is merely qualified is a first-order error; believing the reconciliation logic is public when it is private is a boundary error.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer veto: no production DB mutations, no deployment config changes, no secrets, no live cron jobs, no credential-requiring sources [PAGE 1] Repo Context/Rollback. Any attempted migration or write is vetoed.
Biomechanical layer veto: player status constraints (IR/PUP/NFI roster limits), number uniqueness within team, staff role vs roster slot constraints. A fact asserting two active players with same number on same team, or a staff role exceeding roster limits, is physically impossible and vetoed at validation (roster:audit, roster:verify).
Weather layer: game postponements (weather, emergencies) shift transaction windows and create artificial staleness or conflict clusters around rescheduled games; weather-related roster moves (e.g., practice squad activations for postponed games) must not be misread as permanent status changes.
Adjudication hierarchy: Legal/TOS veto > Physical integrity veto > Conflict visibility veto > Public render gate. A fact must pass all layers before rendering as Confirmed.

RLVR_COUNTERFACTUAL_VETOES:
Scenario 1: Silent overwrite of conflicted fact. Counterfactual: adapter receives official transaction saying Player X Team A, then newer fallback says Team B, and system silently updates to Team B without ConflictRecord. Veto: Reconciliation plan mandates ConflictRecord instead of silent overwrite [PAGE 1]. Verifiable prediction: integration test roster:conflicts asserts ConflictRecord count increases and no UPDATE ... SET team without conflict row; audit log shows conflict entry.
Scenario 2: Stale fact rendered confirmed. Counterfactual: player status fact last verified 45 days ago (τ_stale = 7 days for status) still renders as Confirmed on Player Lab. Veto: acceptance criterion "Stale/unknown facts do not render as confirmed" [PAGE 1]. Verifiable prediction: data validation roster:stale flags fact; public render gate returns Qualified with last verified timestamp, not Confirmed.
Scenario 3: Hardcoded replacement team in smoke test. Counterfactual: Najee Harris smoke test hardcodes "Pittsburgh Steelers" instead of comparing rendered fact to current source evidence fixture. Veto: test plan explicitly requires comparison against current source evidence fixtures, not hardcoded replacement teams [PAGE 1]. Verifiable prediction: CI test fails if test source contains hardcoded team strings; test harness diffs rendered fact against fixture JSONL.
Predictions: if all vetoes enforced, zero silent overwrites, zero stale-confirmed public facts, zero hardcoded regression smoke tests pass; if any veto fails, corresponding acceptance criterion is violated and P0 build is blocked.

Now let me write this fully, ensuring word count.

I need to count words roughly. THINK_TRACE needs >=400 words. Total >=1000. I'll write generously.

Let's compose the final response.

One check: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." My equations are formal evidence operators, not fake ratios. Good.

"State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I have seconds, bits, [0,1] probability/dimensionless. Good.

"When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Only page 1, so [PAGE 1] with quotes.

No betting lines. None.

Let's write.

I'll make sure to include verbatim quotes in each section where appropriate.

Word count estimate:
THINK_TRACE: ~650 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~450 words.
RETROCAUSAL_GENEALOGY: ~300 words.
RECURSIVE_THEORY_OF_MIND: ~300 words.
CROSS_LAYER_VETO_ADJUDICATION: ~300 words.
RLVR_COUNTERFACTUAL_VETOES: ~350 words.
Total ~2350 words. Good.

Now produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The build card BUILD-NRT-004 is a docs-first, fixture-backed probe for an NFL.com transaction adapter within the NFL roster truth namespace. The duplicate gate returns EXTENSION and matches existing ID BUILD-GV2-098; the card explicitly states it extends existing source freshness/player surface/data quality work with roster-specific truth rules rather than recreating generic cards [PAGE 1]. This creates a multi-hop dependency: the new adapter must not duplicate generic freshness or player surface logic, but must layer NFL roster evidence, conflict handling, staff rules, and deploy gates on top of BUILD-GV2-098.

The "Why It Matters" section establishes the trust boundary with the verbatim claim: "Roster facts are trust infrastructure. Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions" [PAGE 1]. This means every fact about team, jersey number, status (e.g., IR, PUP, suspension), or staff role is a trust-critical primitive that flows into downstream products: Player Lab and the founder cockpit are the product surface; the founder roster accuracy cockpit and data quality reports are the internal surface [PAGE 1].

The current problem is a workspace mismatch: the visible workspace is a docs/control lane, not a full app checkout, and existing cards define generic freshness, data source QA, and player surfaces but not fact-level NFL roster evidence, conflict handling, staff rules, or deploy gates [PAGE 1]. Source proof SRC-004 is required but is not present on this page, which is a gray zone: the adapter cannot be verified against the actual source contract until SRC-004 is produced.

The ingestion plan mandates read-only source adapters or fixture-based probes first; raw source snapshots must store timestamp, URL, hash, parsed record count, parser version, and evidence IDs; and production data must not be mutated [PAGE 1]. The reconciliation plan specifies a fact-by-fact comparison across official, open-data, and fallback records: "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites" [PAGE 1]. The validation plan names five commands—roster:audit, roster:verify, roster:conflicts, roster:stale, and test:roster—with interim validation via source inventory, fixtures, and generated JSONL/card checks until implementation [PAGE 1].

The public/private boundary restricts public surfaces to current fact, qualified status, and last verified timestamp, while founder/admin surfaces may show source weights, conflicts, parser errors, and raw evidence links; proprietary reconciliation logic must not be exposed [PAGE 1]. The legal/TOS boundary permits only official/public sources after terms and robots review, prohibiting scraping of private, paywalled, login-gated, prohibited, or high-volume sources; media and fantasy sources are fallback/corroboration unless legally upgraded [PAGE 1].

Gray-zone audit reveals several underspecified regimes. The staleness threshold τ_stale is never quantified; "staff rules" are referenced but not defined; "low-volume legal probes" lacks a volume bound; the transition from fixture-based probe to live read-only adapter is not gated; SRC-004 is absent; and the Najee Harris/Rico Dowdle smoke-test fixtures risk silent drift if they are not regenerated against current source evidence [PAGE 1]. The rollback plan is conservative: remove new disabled scripts/types/docs, delete generated fixtures, leave production data untouched, and for later database work use migration rollback and snapshot restore only after backup verification [PAGE 1]. Priority is P0, difficulty L, with medium legal, source, and maintenance risk; the primary trust risk is making a stale or conflicted fact look confirmed [PAGE 1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Define the evidence tuple for every raw source snapshot as:

E = (t_E, u_E, h_E, c_E, v_E, id_E) ∈ 𝕋 × 𝕌 × ℍ × ℕ × 𝕍 × 𝕀

where t_E ∈ 𝕋 = ℝ is the Unix timestamp in SI seconds; u_E ∈ 𝕌 is the source URL string; h_E ∈ ℍ = {0,1}^{256} is the SHA-256 content hash in bits; c_E ∈ ℕ is the parsed record count (dimensionless); v_E ∈ 𝕍 is the parser version string; id_E ∈ 𝕀 is the evidence identifier [PAGE 1] Ingestion Plan.

A roster fact is keyed by k = (player_id, attribute) with attribute ∈ {team, number, status, staff_role} and value f_k. Source tier weights are assigned by a legal-vetted tier function:

w : SourceTier → [0,1], w(official) = 1.0, w(open-data) = α, w(fallback) = β, 0 ≤ β ≤ α ≤ 1

The units of w are dimensionless probability weights, not betting odds or ratios. Assumption: tiers are mutually exclusive and each source has passed terms/robots review. Breakdown regime: if α or β is unset because legal review is pending, w is undefined (singularity), and the fact must render as Unknown rather than Confirmed.

Staleness is governed by the SI-second operator:

Δ(t_now, t_verified) = t_now − t_verified [seconds]

Stale(F) ≡ Δ(t_now, t_verified(F)) > τ_stale

τ_stale ∈ ℝ⁺ seconds is attribute-specific (e.g., status may have a shorter τ_stale than jersey number). Exact singularity: if τ_stale is undefined or set to ∞, a stale fact can render as Confirmed, directly violating the acceptance criterion "Stale/unknown facts do not render as confirmed" [PAGE 1] Acceptance Criteria.

The public confirmation gate is:

RenderConfirmed(F) ≡ ¬Stale(F) ∧ ¬Conflicted(F) ∧ EvidenceSufficient(F)

EvidenceSufficient(F) ≡ ∃ E_official : Supports(E_official, F) ∧ ¬Stale(E_official)

If the gate fails, PublicView(F) returns (f_k, status ∈ {Qualified, Unknown}, t_verified) [PAGE 1] Public/Private Boundary.

Conflict detection is formalized as:

ConflictRecord created ⟺ ∃ E_a, E_b : Key(E_a) = Key(E_b) = k ∧ Value(E_a) ≠ Value(E_b) ∧ ¬[Stale(E_a) ∧ NewerOfficial(E_b, E_a)]

This encodes the reconciliation rule: official current evidence wins unless stale or contradicted by newer official transaction evidence, and conflicts create ConflictRecord entries instead of silent overwrites [PAGE 1] Reconciliation Plan. No probability mass is silently reassigned; the conflict is persisted for founder/admin inspection.

Founder/admin views may expose (w, conflicts, parser errors, raw evidence links) but not proprietary reconciliation logic [PAGE 1] Public/Private Boundary.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of this card traces through BUILD-GV2-098, which handles generic source freshness, data source QA, and player surfaces [PAGE 1] Duplicate Gate. BUILD-NRT-004 extends that namespace with NFL roster-specific truth rules, inserting the Transaction and SourceEvidence data models into the causal chain that feeds Player Lab, GSE Rating, search, content, customer trust, and internal decisions [PAGE 1] Why It Matters. Historically, roster truth systems degrade through multi-week traps rather than single-event failures: (1) status staleness, where a player placed on IR or PUP remains rendered as active across multiple game weeks because t_verified is not refreshed; (2) jersey-number changes that fail to propagate mid-season, corrupting search and Player Lab display; (3) staff role changes (coaching moves, front-office transitions) that are absent because the card's scope notes staff rules are currently undefined [PAGE 1] Current Problem; (4) duplicate player identities across extensions, where BUILD-GV2-098 and BUILD-NRT-004 surface conflicting evidence IDs for the same athlete; and (5) fixture drift in the Najee Harris and Rico Dowdle smoke tests, where rendered facts are compared against aging source evidence fixtures rather than current source evidence, causing false regression passes or failures [PAGE 1] Test Plan. These traps are multi-week because one stale transaction can corrupt downstream GSE Rating and search results for an entire season window before roster:stale or roster:conflicts surfaces the divergence [PAGE 1] Validation Plan.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Under crisis conditions, the engineering habit regression is to restore service by silent overwrite: a conflicting transaction arrives, and the operator updates the fact row without creating a ConflictRecord, violating the explicit prohibition on silent overwrites [PAGE 1] Reconciliation Plan. A second regression is hardcoding replacement teams in smoke tests—for example, asserting Najee Harris belongs to a specific team string rather than diffing rendered facts against current source evidence fixtures [PAGE 1] Test Plan. A third is scraping prohibited, paywalled, login-gated, or high-volume sources to "fix" data quickly, breaching the legal/TOS boundary [PAGE 1] Legal / TOS Boundary.

The counter-trap is over-trusting the reconciliation rule "Official current evidence wins unless stale" while failing to define τ_stale, thereby allowing an official but outdated fact to outrank a newer open-data correction. Another counter-trap is assuming read-only adapters remain read-only after deployment, when the implementation plan's step 3 (smallest docs-first, type-only, or disabled-by-default implementation) could evolve into a write path without a fresh deploy gate review [PAGE 1] Implementation Plan.

The clock is the staleness operator Δ(t_now, t_verified) in SI seconds. If the clock is not monitored, facts quietly transition from Confirmed to Qualified without an alert, and the founder roster accuracy cockpit may display a last verified timestamp that implies currency while the underlying fact has exceeded τ_stale. The recursive theory of mind must model two belief states: (1) the operator believes a fact is Confirmed when it is merely Qualified (first-order trust error), and (2) the operator believes reconciliation logic is public when it is restricted to founder/admin surfaces (boundary error) [PAGE 1] Public/Private Boundary.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: No production database mutation, no deployment config change, no secrets, no live cron jobs, and no credential-requiring sources are permitted [PAGE 1] Repo Context / Rollback Plan. Any migration, write, or deploy attempted by the adapter is vetoed at the physical layer; rollback consists of removing disabled scripts/types/docs and deleting generated fixtures while leaving existing production data untouched [PAGE 1] Rollback Plan.

Biomechanical layer veto: Roster facts must satisfy physical team constraints. A fact assigning the same jersey number to two active players on one team, placing a player on IR while simultaneously marking them active, or assigning a staff role beyond roster-slot limits is physically impossible and must be rejected by roster:audit and roster:verify [PAGE 1] Validation Plan. The data model attributes team, number, status, and staff role are therefore constrained by NFL roster mechanics, not free-form text [PAGE 1] Why It Matters.

Weather layer: Game postponements or emergency relocations shift transaction windows and can generate artificial conflict clusters around rescheduled games. Weather-related practice-squad activations or roster moves tied to a postponed contest must not be misread as permanent status changes; otherwise the conflict detector could manufacture spurious ConflictRecords or the staleness clock could expire during a postponement gap.

Adjudication hierarchy: Legal/TOS veto supersedes physical integrity veto, which supersedes conflict visibility veto, which supersedes the public render gate. A roster fact renders as Confirmed only if it survives all four layers: legally sourced, physically consistent, conflict-resolved or conflict-recorded, and within the freshness window τ_stale [PAGE 1] Acceptance Criteria.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Silent overwrite of a conflicted fact. Counterfactual: the adapter receives an official transaction assigning Player X to Team A, then ingests a fallback record assigning Player X to Team B, and silently updates the fact row to Team B without persisting a ConflictRecord. Veto: The reconciliation plan explicitly mandates ConflictRecord entries instead of silent overwrites [PAGE 1] Reconciliation Plan. Verifiable prediction: Integration test roster:conflicts asserts that the ConflictRecord count increases by exactly one and that no UPDATE statement modifies the fact row without a corresponding conflict row; the audit log shows the conflict entry and the public render remains Qualified until resolved.

Scenario 2 — Stale fact rendered as Confirmed. Counterfactual: a player status fact (e.g., Injured Reserve) was last verified 45 days ago while τ_stale for status is 7 days, yet Player Lab displays the fact as Confirmed. Veto: Acceptance criteria require that stale or unknown facts do not render as confirmed [PAGE 1] Acceptance Criteria. Verifiable prediction: Data validation command roster:stale flags the fact; the public render gate returns status = Qualified with the last verified timestamp, never Confirmed; the founder cockpit shows the age in seconds exceeding τ_stale.

Scenario 3 — Hardcoded replacement team in smoke test. Counterfactual: The Najee Harris or Rico Dowdle regression test contains a hardcoded team string (e.g., "Pittsburgh Steelers") rather than comparing the rendered fact against current source evidence fixtures. Veto: The test plan requires smoke tests to compare rendered facts against current source evidence fixtures, not hardcoded replacement teams [PAGE 1] Test Plan. Verifiable prediction: CI test harness parses the test source for hardcoded team literals and fails the build if any are present; the test output diffs rendered fact JSONL against the fixture JSONL and blocks on mismatch. If all three vetoes are enforced, the build produces zero silent overwrites, zero stale-confirmed public facts, and zero hardcoded regression passes; if any veto fails, the corresponding P0 acceptance criterion is violated and the build is blocked [PAGE 1] Priority / Acceptance Criteria.
</RLVR_COUNTERFACTUAL_VETOES>