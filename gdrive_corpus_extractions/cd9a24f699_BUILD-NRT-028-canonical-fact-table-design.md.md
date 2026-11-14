---
source: "BUILD-NRT-028-canonical-fact-table-design.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4810
---

<NATIVE_REASONING>
The user has provided a source document about "Canonical fact table design" for an NFL roster truth system. They want me to act as the GSE + GSI Frontier Reasoning Foundry and produce a response following strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE 1] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis of this canonical fact table design document, adhering to all constraints.

Key content from source:
- BUILD-NRT-028 Canonical fact table design
- NFL roster truth system
- Data model: CanonicalFact, ConfidenceScore
- Reconciliation: official > open-data > fallback; conflicts create ConflictRecord
- Validation: roster:audit, roster:verify, roster:conflicts, roster:stale, test:roster
- Public/private boundary: public shows current fact, qualified status, last verified timestamp; founder/admin shows source weights, conflicts, parser errors, raw evidence links
- Legal: official/public only after terms/robots review; no scraping private/paywalled/login-gated/prohibited/high-volume
- Implementation: docs-first, type-only, disabled-by-default; fixtures or low-volume legal probes
- Acceptance: duplicate gate honored, source evidence design, conflicts visible internally, stale/unknown not confirmed, no prod DB mutation/deploy
- Test plan: unit normalization/scoring; integration adapter fixtures/reconciliation; data validation stale/conflict/no-mock; regression Najee Harris and Rico Dowdle smoke tests
- Rollback: remove new disabled script/types/docs, delete generated fixtures, leave prod data untouched
- Priority P0, Difficulty M, Risks MEDIUM

I must not mention betting lines. I can mention Najee Harris and Rico Dowdle as smoke test subjects (they are NFL players, not betting lines).

I need >= 1000 words total across sections, with THINK_TRACE alone >= 400 words.

Structure:
- <THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Discuss the document's architecture, evidence chain, reconciliation logic, confidence scoring, legal boundaries, public/private split, deployment gates, regression tests with Najee Harris/Rico Dowdle, rollback semantics. Gray zones: "official current evidence wins unless stale or contradicted by newer official transaction evidence" — ambiguity in staleness definition; "qualified status" undefined; "source weights" not quantified; parser version provenance; fixture vs production drift; smoke tests comparing rendered facts against fixtures "not hardcoded replacement teams" implies team assignment volatility risk; no explicit CI gating; legal risk MEDIUM but no specific TOS checklist.
- <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations. Define CanonicalFact tuple, ConfidenceScore as probability in [0,1], evidence weight, staleness decay function, conflict detection operator, reconciliation operator. Units: bits/shannons for information, seconds for timestamps, probability dimensionless. Cite [PAGE 1] with verbatim quotes. Breakdown regimes: timestamp singularity, hash collision, source weight singularity, conflict non-determinism, stale threshold singularity.
- <RETROCAUSAL_GENEALOGY>: Historical lineage: master data management, canonical fact tables, conflict-free replicated data types, temporal databases (valid time/transaction time), NFL transaction wire, GSN Player Lab/GSE Rating dependency chain. Multi-week traps: roster churn (cuts, IR, practice squad), number changes, staff role changes, stale facts propagating through search/content/customer trust, regression test fixture drift across weeks, Najee Harris/Rico Dowdle team assignment changes as trap examples.
- <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression (team under pressure reverts to silent overwrites, hardcoded replacements, prod mutation), counter-trap (ConflictRecord, disabled-by-default, fixtures only), clock (staleness as temporal deadline, last verified timestamp, validation cadence roster:stale). Founder cockpit as second-order monitoring.
- <CROSS_LAYER_VETO_ADJUDICATION>: Physical layer (no prod DB mutation, no deploy, read-only adapters), biomechanical layer (parser version, hash integrity, snapshot immutability), weather veto proof (metaphorical/external disruption: source TOS changes, robots.txt updates, paywall erection, source outage — treat as veto conditions halting ingestion). This section needs to address veto proof: conditions under which the build must stop.
- <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? I'll treat as verifiable reward scenarios. Scenario 1: stale official evidence contradicted by newer transaction evidence — veto public render as confirmed. Prediction: ConflictRecord created, public shows qualified status not confirmed. Scenario 2: paywalled/login-gated source probe attempted — veto ingestion. Prediction: disabled-by-default script does not run, no credentials touched. Scenario 3: smoke test fixture mismatch for Najee Harris/Rico Dowdle (rendered fact != fixture) — veto acceptance. Prediction: test:roster fails, build blocked, rollback triggered.

Word count: Need >= 1000 words total, THINK_TRACE >= 400 words. I'll aim for roughly 1800-2200 words total to be safe.

Citations: [PAGE 1] markers and verbatim quotes from the source text. I'll quote key phrases.

No betting lines anywhere. No toy equations. Use real formalism: set theory, probability, information theory, temporal logic.

Let me draft carefully.

THINK_TRACE (>=400 words):

Start: The card BUILD-NRT-028 defines a canonical fact table for NFL roster truth. Multi-hop derivation: roster facts -> trust infrastructure -> Player Lab, GSE Rating, search, content, customer trust, internal decisions. If wrong team/number/status/staff role corrupts downstream, then fact-level evidence is a prerequisite, not an optimization.

Gray-zone audit:
1. Staleness: "Official current evidence wins unless stale or contradicted by newer official transaction evidence." No staleness threshold (seconds/hours/games) is specified. This is a semantic hole. Without T_stale, reconciliation is under-specified; two implementers could choose different windows and produce different canonical facts from identical inputs. Singularity at T_stale = 0 (everything stale) or infinity (nothing stale).
2. ConflictRecord: created instead of silent overwrites, but no resolution SLA, no escalation path, no automatic tie-break beyond "newer official transaction evidence." If two official sources conflict with equal timestamp, operator unspecified.
3. ConfidenceScore: data model listed but no formula, range, units, or calibration method. Is it probability [0,1]? Dempster-Shafer mass? Information-theoretic weight? Unspecified.
4. Qualified status: public surface shows "current fact, qualified status, last verified timestamp" but "qualified status" is undefined—enum? boolean? derivation from confidence?
5. Source weights: founder/admin can show source weights, but weights are not defined, bounded, or audited in the card.
6. Regression smoke tests: Najee Harris and Rico Dowdle compared against fixtures "not hardcoded replacement teams." Implies team assignment is volatile (trades/cuts), so fixtures must be versioned and re-verified each build window; fixture drift across NFL weeks is a multi-week trap.
7. Legal: terms and robots review required, but no checklist, approver, or re-review cadence. MEDIUM legal risk with no gate definition.
8. Deployment: disabled-by-default, no prod mutation, no deploy—good, but no CI gating or branch protection mentioned; rollback is manual file deletion, not transactional.

These gray zones mean the design is necessary but not sufficient for safe shipping.

SOURCE_OPERATORS_AND_EQUATIONS:

Define from [PAGE 1]. Verbatim quotes:
- "Compare official, open-data, and fallback records fact-by-fact. Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites."
- "Store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs."
- "Public surfaces can show current fact, qualified status, and last verified timestamp."
- Data model: CanonicalFact, ConfidenceScore.

Formalism:
Let F be the set of roster facts. A CanonicalFact c ∈ F is a tuple:
c = (entity_id, attribute, value, t_verified, τ_conf, E, σ_conflict, w_source)
where:
- entity_id ∈ NFL player/staff identifier universe
- attribute ∈ {team, jersey_number, status, staff_role, ...}
- value ∈ V_attribute
- t_verified ∈ ℝ⁺ (UNIX seconds since epoch, SI unit s)
- τ_conf ∈ [0,1] ⊂ ℝ (dimensionless probability/confidence)
- E = {e_i} set of evidence IDs
- σ_conflict ∈ {0,1} conflict flag
- w_source ∈ ℝ⁺ source weight (information units, shannons/bits)

Evidence snapshot e = (url, t_capture, h, n_parsed, v_parser, raw_hash) with h ∈ {0,1}²⁵⁶ (SHA-256 hash space), n_parsed ∈ ℕ, v_parser ∈ SemVer.

Staleness predicate: S(t_verified, t_now, T_stale) = 1 if (t_now - t_verified) > T_stale else 0. [PAGE 1] mentions staleness but gives no T_stale value, so T_stale is a free parameter with singularity regimes: T_stale → 0 (all facts stale, public renders nothing confirmed), T_stale → ∞ (nothing stale, stale facts render as confirmed—primary trust risk per card).

Reconciliation operator ℛ over sources O (official), D (open-data), Fb (fallback):
ℛ: (r_O, r_D, r_Fb) → (c*, C)
where C = {ConflictRecord} if ∃ r_i, r_j : value(r_i) ≠ value(r_j) ∧ ¬stale(r_i) ∧ ¬stale(r_j)
Official priority: c* = r_O if ¬S(r_O) ∧ ¬∃ r_O' : t(r_O') > t(r_O) ∧ transaction(r_O')
else c* = r_D else c* = r_Fb with τ_conf discounted.

Confidence score: τ_conf = σ(Σ_i w_i · I(e_i matches c*)) where σ is sigmoid, I is indicator, w_i in bits; but this is my formalization, not from card—must state assumptions explicitly. The card does not define τ_conf computation, so I mark it as assumption A1.

Breakdown regimes:
- Timestamp singularity: t_verified missing or epoch 0 → fact treated as unknown/stale; must not render as confirmed (acceptance criterion).
- Hash collision: h collision probability ~2⁻¹²⁸ for SHA-256 birthday bound; treat as evidence integrity failure, quarantine snapshot.
- Parser version drift: v_parser changes → n_parsed may change without source change; re-parse required, else confidence uncalibrated.
- Conflict non-determinism: equal timestamps from two official sources → ℛ undefined without tie-break; manual founder cockpit review required (private surface).
- Stale/unknown rendering: acceptance criterion says stale/unknown facts do not render as confirmed; violation occurs if τ_conf threshold not applied or S not checked.

Units: timestamps in seconds (SI), confidence dimensionless [0,1], source weight in shannons (information), hash bits. No betting odds anywhere.

RETROCAUSAL_GENEALOGY:

Historical/scientific lineage:
- Canonical fact tables descend from master data management (MDM) and canonical data models in enterprise data architecture (Inmon, Kimball; late 20th century).
- ConflictRecord pattern mirrors conflict-free replicated data types (CRDTs) and operational transformation; explicit conflict persistence rather than last-write-wins silently.
- Temporal databases: valid time vs transaction time (Snodgrass; 1990s); t_verified is transaction-time capture, roster attribute is valid-time fact. Staleness is valid-time expiration.
- NFL-specific lineage: transaction wire, waiver wire, practice squad moves, IR designations; GSE Rating and Player Lab depend on current team/status. Historically, wrong team assignment corrupts rating models (garbage-in-garbage-out).
- GSN/GSI context: docs/control lane, not full app checkout; generic freshness/source QA cards exist but no fact-level roster evidence.

Multi-week traps (NFL season cadence):
- Week-to-week roster churn: cuts (final roster reductions), waiver claims, practice squad elevations, IR, PUP. A fact valid in Week 1 can be false by Week 3.
- Jersey number changes (rare but possible with new NFL number rules).
- Staff role changes (coaching firings, promotions) mid-season.
- Trade deadline (Week ~8) creates mass team reassignments; Najee Harris and Rico Dowdle smoke tests specifically guard against hardcoded replacement teams—implying these players have undergone or could undergo team changes.
- Fixture drift: if fixtures are captured in Week 2 and run in Week 5, rendered facts mismatch fixtures even with correct code; test must re-fetch or re-verify against current source evidence fixtures, not hardcode.
- Staleness compounding: without re-ingestion cadence, τ_conf decays; roster:stale must run weekly or per transaction event.
- Retrocausal trap: a downstream system (GSE Rating) consuming a stale fact at Week N retroactively invalidates its own historical outputs; the fact table must record t_verified so audits can attribute error windows.

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: Under pressure (missing roster fact before a content publish, founder cockpit showing conflict), teams tend to regress to silent overwrites, hardcoded replacement teams, or direct production DB mutation to "fix it fast." The card explicitly prohibits: "Do not mutate production data," "Do not deploy," "Conflicts create ConflictRecord entries instead of silent overwrites." This is the counter-trap: institutionalizing conflict visibility and disabled-by-default deployment.

Counter-trap details:
- Docs-first/type-only/disabled-by-default: code exists but cannot execute in prod by default.
- Fixture-based probes: no live ingestion unless legal-approved.
- ConflictRecord: makes disagreement visible internally rather than resolving silently.
- Public/private boundary: founder/admin sees weights, conflicts, parser errors; public sees only qualified status and timestamp—prevents premature public commitment to uncertain facts.

Clock: Staleness is a temporal deadline. t_verified + T_stale defines the validity window. roster:stale is the cron-like check (but no live cron—avoid live cron jobs per repo context). The clock forces re-verification; if the build does not re-ingest before T_stale expires, facts become unknown and must not render as confirmed. The recursion: crisis → regression (silent fix) → counter-trap (ConflictRecord, no deploy) → clock (staleness re-arms the crisis) → repeat. The founder roster accuracy cockpit is the second-order observer that breaks the recursion by reviewing conflicts before they propagate.

CITE: [PAGE 1] "Do not mutate production data or deploy occurs" (acceptance criteria), "Conflicts create ConflictRecord entries instead of silent overwrites."

CROSS_LAYER_VETO_ADJUDICATION:

Veto proof across layers:
Physical layer: No production DB migrations, deployment config, secrets, live cron jobs. Read-only source adapters or fixture-based probes only. Veto condition: any implementation path requiring write access to production DB or credentials is an automatic hard veto; implementation must remain disabled-by-default.

Biomechanical layer (data integrity): Raw snapshot immutability via hash h ∈ {0,1}²⁵⁶; parser version v_parser pinned; parsed record count n_parsed logged. Veto condition: hash mismatch or parser version drift without re-parse invalidates evidence; ingestion halts and parser error is logged to founder/admin surface only (never public).

Weather veto proof (external disruption layer): "Weather" here means environmental volatility: source TOS changes, robots.txt updates, paywall erection, login gating, source outage, high-volume detection. Card: "Use official/public sources only after terms and robots review. Do not scrape private, paywalled, login-gated, prohibited, or high-volume sources." Veto condition: if any target source fails terms/robots review or becomes paywalled/login-gated, that adapter is vetoed; media/fantasy sources remain fallback/corroboration unless legal approval upgrades them. No exception for "just this once."

Adjudication order: Physical veto > Biomechanical veto > Weather veto. If all pass, the disabled-by-default script may run in fixture mode only. Public render gate: τ_conf must exceed threshold AND ¬stale AND ¬σ_conflict; otherwise public shows qualified status/unconfirmed.

RLVR_COUNTERFACTUAL_VETOES:

RLVR = verifiable reward scenarios. Three scenarios with predictions:

Scenario 1: Stale official fact contradicted by newer official transaction evidence.
Setup: CanonicalFact for player X team = Team A, t_verified = T_old. Newer official transaction evidence at T_new > T_old shows trade to Team B. T_old is within T_stale window but contradicted by newer transaction evidence.
Veto: Public render of "Team A, confirmed" is vetoed. ℛ selects newer official evidence; ConflictRecord created between old and new official records.
Prediction: test:roster and roster:conflicts detect conflict; public surface shows Team B with qualified status and last verified T_new, or unconfirmed until verified; founder cockpit shows ConflictRecord and source weights. No silent overwrite.

Scenario 2: Probe attempts a paywalled/login-gated source.
Setup: Implementation step 4 considers low-volume legal probes; a contributor adds an adapter to a prohibited/high-volume or login-gated source.
Veto: Legal/TOS boundary vetoes the adapter before execution. Disabled-by-default flag prevents cron-like execution. No credentials touched, no production mutation.
Prediction: Repo check (scripts, existing patterns) flags adapter as non-compliant; CI/test:roster does not invoke it; build passes only with legal-approved official/public sources. If invoked, parser error logged internally, raw evidence link not exposed publicly.

Scenario 3: Smoke test fixture mismatch for Najee Harris / Rico Dowdle.
Setup: Regression test compares rendered facts against current source evidence fixtures. Fixture says Najee Harris = Team A (current source evidence); rendered fact says Team B (hardcoded replacement team or stale cache).
Veto: Acceptance criterion violated ("not hardcoded replacement teams"). test:roster regression fails; build blocked; rollback triggered.
Prediction: Unit/integration tests pass but regression smoke test fails; exact changed files reported; rollback = remove disabled script/types/docs, delete generated fixtures, leave prod data untouched. Build cannot merge until fixture is regenerated from legal source evidence and rendered facts match.

All predictions are verifiable by running the test plan enumerated on [PAGE 1]: unit (normalization and scoring rules), integration (adapter fixtures and reconciliation), data validation (stale/conflict/no-mock checks), regression (Najee Harris and Rico Dowdle smoke tests).

Now check word counts. I need to write it out fully. Let me compose the final response with all six sections. Ensure [PAGE 1] citations and verbatim quotes. Ensure no betting lines. Ensure >=1000 words total, THINK_TRACE >=400.

Let me estimate: THINK_TRACE ~600 words. SOURCE_OPERATORS_AND_EQUATIONS ~450. RETROCAUSAL_GENEALOGY ~350. RECURSIVE_THEORY_OF_MIND ~300. CROSS_LAYER_VETO_ADJUDICATION ~300. RLVR ~350. Total ~2350. Good.

Write in final channel only. No mention of odds/spreads/moneylines/totals.

Let me draft precisely.

Be careful with LaTeX formatting: use \( ... \) or $$ ... $$. Use proper symbols.

Include verbatim quotes with quotation marks and [PAGE 1].

Proceed.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit of BUILD-NRT-028.

The card makes a strong architectural claim: "Roster facts are trust infrastructure. Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions" [PAGE 1]. Multi-hop derivation: roster fact error → downstream model/feature corruption → customer-facing trust loss. Because Player Lab and GSE Rating consume current team/status/staff role, a stale or wrong canonical fact is not a local display bug; it is a retrograde input error that poisons derived ratings and search surfaces. Therefore fact-level evidence, freshness, and conflict handling are preconditions for any downstream system, not optimizations.

Gray-zone audit. First, staleness is under-specified. The card says "Official current evidence wins unless stale or contradicted by newer official transaction evidence" [PAGE 1], but nowhere defines T_stale in seconds, games, or weeks. Without a bounded staleness window, two implementers can reconcile identical sources into different canonical facts. Singularity regimes: T_stale → 0 renders every fact stale (public shows nothing confirmed); T_stale → ∞ renders stale facts as confirmed, which is exactly the "primary trust risk" the card names [PAGE 1]. Second, ConflictRecord creation is mandated ("Conflicts create ConflictRecord entries instead of silent overwrites" [PAGE 1]) but no tie-break exists for equal-timestamp official conflicts, no escalation SLA, and no automatic resolution beyond "newer official transaction evidence." Third, ConfidenceScore appears in the data model with no formula, range, units, or calibration; τ_conf could be probability [0,1], Dempster-Shafer mass, or weighted information score, and the card does not say which. Fourth, "qualified status" is surfaced publicly ("current fact, qualified status, and last verified timestamp" [PAGE 1]) but left undefined—boolean, enum, or derived from confidence? Fifth, "source weights" are visible to founder/admin but unbounded and unaudited. Sixth, the Najee Harris and Rico Dowdle smoke tests compare rendered facts against fixtures "not hardcoded replacement teams" [PAGE 1], which implicitly acknowledges team-assignment volatility (trades, cuts, waiver claims) and creates a fixture-drift trap across NFL weeks. Seventh, legal review is required ("terms and robots review" [PAGE 1]) but no approver, checklist, or re-review cadence is named despite MEDIUM legal risk. Eighth, deployment controls are strong—"No production database mutation or deploy occurs" [PAGE 1]—but there is no CI gating or branch protection mentioned, and rollback is manual file deletion rather than transactional.

Conclusion: BUILD-NRT-028 is directionally correct and P0, but it ships as a skeleton. The formal operators below instantiate its missing quantifications; the veto layers below enforce its deployment and legal boundaries.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators for the canonical fact table, with units and [PAGE 1] citations.

Verbatim source anchors [PAGE 1]: "Compare official, open-data, and fallback records fact-by-fact. Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites."; "Store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs."; "Public surfaces can show current fact, qualified status, and last verified timestamp."; Acceptance criteria: "Stale/unknown facts do not render as confirmed" and "No production database mutation or deploy occurs" [PAGE 1].

Let 𝔉 be the universe of roster facts. A CanonicalFact c ∈ 𝔉 is the tuple
\[ c = (e, a, v, t_v, \tau_c, E, \sigma_\kappa, w_s) \]
where e ∈ NFL entity identifier space (player or staff); a ∈ Attribute = {team, jersey_number, status, staff_role, ...}; v ∈ Value_a; t_v ∈ ℝ⁺ is last-verified timestamp in SI seconds since UNIX epoch; τ_c ∈ [0,1] ⊂ ℝ is dimensionless confidence (assumption A1: interpreted as a probability of correctness, not defined on [PAGE 1]); E = {e_i} is the set of evidence IDs; σ_κ ∈ {0,1} is the conflict flag; w_s ∈ ℝ⁺ is source weight measured in shannons (information units, bits).

Evidence snapshot e_i is formalized as
\[ e_i = (\text{url}_i, t_{c,i}, h_i, n_i, \nu_i) \]
with t_{c,i} ∈ ℝ⁺ seconds, h_i ∈ {0,1}^{256} the SHA-256 content hash, n_i ∈ ℕ parsed record count, and \nu_i pinned semantic-parser version.

Staleness predicate (assumption A2; card gives operator but not threshold):
\[ S(t_v, t_\text{now}, T_\text{stale}) = \mathbb{1}[(t_\text{now} - t_v) > T_\text{stale}] \]
T_stale is a free parameter in seconds. Breakdown regimes: T_stale → 0 (all facts stale; public renders nothing confirmed) and T_stale → ∞ (nothing stale; primary trust risk of confirmed-stale facts [PAGE 1]).

Evidence source classes from [PAGE 1]: O = official, D = open-data, F = fallback/corroboration (media/fantasy only unless legal-approved). Reconciliation operator ℛ:
\[ \mathcal{R}:(r_O, r_D, r_F) \mapsto (c^\*, \mathcal{C}) \]
\[ c^\* = r_O \quad \text{if } \neg S(r_O) \land \nexists r_O' : (t(r_O') > t(r_O) \land \text{transaction}(r_O')) \]
else highest-confidence non-stale record from D, else F; \mathcal{C} = \{\text{ConflictRecord}\} if \exists r_i,r_j : v(r_i) \neq v(r_j) \land \neg S(r_i) \land \neg S(r_j).

Public render gate G_pub (derivation of acceptance criterion "stale/unknown facts do not render as confirmed"):
\[ G_\text{pub}(c) = \mathbb{1}[\neg S(c) \land \neg \sigma_\kappa(c) \land \tau_c(c) \ge \theta_\tau] \]
\theta_\tau is unspecified on [PAGE 1] (assumption A3). If G_pub = 0, public surface shows qualified status / unconfirmed, never a confirmed wrong fact.

Breakdown and singularity regimes: timestamp singularity (t_v missing or epoch 0) forces unknown, not confirmed; hash collision (birthday bound ≈ 2^{-128} for SHA-256) quarantines the snapshot; parser-version drift \nu changes n_i without source change, requiring re-parse or confidence is uncalibrated; equal-timestamp official conflict leaves ℛ undefined until founder-cockpit manual review (private surface only). No betting lines, odds, spreads, totals, or moneylines appear in any operator.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week NFL traps.

Lineage. Canonical fact tables descend from enterprise master-data management and Kimball/Inmon canonical modeling: a single version of truth keyed by entity and attribute, with explicit source lineage. The ConflictRecord pattern is the roster-truth analogue of conflict persistence in CRDTs and operational-transformation systems: disagreements are materialized rather than resolved by silent last-write-wins. Temporal-database theory (Snodgrass; valid time vs transaction time) maps directly onto the card: t_v is transaction-time capture, while team/status/staff_role are valid-time roster facts; staleness is valid-time expiration. GSN/GSI-specific lineage: Player Lab and GSE Rating already consume roster state; the card notes existing generic freshness, source-QA, and player-surface cards exist in a docs/control lane but not fact-level NFL roster evidence [PAGE 1]. The canonical fact table is therefore the missing trust layer between raw transaction-wire feeds and downstream ratings/search.

Multi-week traps. NFL roster truth is high-velocity: final cutdowns, waiver claims, practice-squad elevations, IR/PUP designations, and trade-deadline moves can invalidate a fact within one week. A CanonicalFact verified in Week 2 may be false by Week 4, so T_stale cannot be season-static; roster:stale must be re-armed per transaction event or per week. Jersey-number changes under current NFL numbering rules and mid-season staff firings/promotions compound the same staleness problem. The Najee Harris and Rico Dowdle regression smoke tests ("compare rendered facts against current source evidence fixtures, not hardcoded replacement teams" [PAGE 1]) expose the team-assignment volatility trap: if fixtures are captured in one NFL week and executed in another, rendered facts mismatch fixtures even when code is correct, producing false regression failures. Fixtures must therefore be versioned by capture week and re-verified against current legal source evidence before each build window. Retrocausal trap: if GSE Rating consumes a stale team fact at week N, its historical outputs are retroactively corrupted; t_v and ConflictRecord are the audit trail that lets the founder roster accuracy cockpit attribute error windows and remediate.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock.

Crisis habit regression. Under publish pressure—missing roster fact before content goes live, or founder cockpit flashing a conflict—engineering teams habitually regress to silent overwrites, hardcoded replacement teams, or direct production database mutation to "fix it fast." BUILD-NRT-028 explicitly interdicts this regression: "Conflicts create ConflictRecord entries instead of silent overwrites" [PAGE 1], and acceptance criteria forbid production mutation and deploy [PAGE 1]. The regression is a first-order impulse to restore consistency by destroying evidence; the card's design makes that impulse structurally unavailable.

Counter-trap. The counter-trap institutionalizes visible disagreement and disabled execution: docs-first, type-only, or disabled-by-default implementation; read-only adapters and fixture-based probes; ConflictRecord materialization; and a public/private boundary where founder/admin sees source weights, conflicts, parser errors, and raw evidence links while public sees only current fact, qualified status, and last verified timestamp [PAGE 1]. This prevents a conflicted fact from being laundered into public surfaces as confirmed. The founder roster accuracy cockpit is the second-order observer that reviews conflicts before they propagate to Player Lab, GSE Rating, search, or content.

Clock. Staleness is the recursive clock: t_v + T_stale defines each fact's validity window; when the clock expires, the fact becomes unknown and G_pub = 0 [PAGE 1]. roster:stale is the verification pulse that re-arms the clock, but repo context forbids live cron jobs, so staleness checks must be invoked through the validation suite rather than unattended production scheduling. Recursion: crisis triggers regression impulse; counter-trap blocks silent repair and raises ConflictRecord; clock expiry re-arms staleness and re-triggers the crisis unless the cockpit reviews and re-verifies. The cockpit breaks the loop by converting conflict from an incident into a governed remediation event. All of this remains non-betting; no odds, lines, or wagering concepts enter the theory of mind.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof.

Physical layer veto. Repo context forbids production DB migrations, deployment config, secrets, live cron jobs, and credential-requiring sources [PAGE 1]. Any implementation path requiring write access to production data or deploy execution is an automatic hard veto; the build must remain disabled-by-default and fixture-backed. Veto condition: write intent detected → halt, remove script/types/docs, leave production untouched (rollback plan on [PAGE 1]).

Biomechanical (data-integrity) layer veto. Raw snapshots are immutable: hash h_i ∈ {0,1}^{256}, parser version \nu_i pinned, parsed record count n_i logged. Veto conditions: SHA-256 mismatch between snapshot and stored hash; parser-version drift without re-parse; missing t_v or epoch-zero timestamp. On veto, ingestion halts and parser errors are logged to the founder/admin surface only; raw evidence links are never exposed publicly [PAGE 1].

Weather veto proof (environmental disruption). "Weather" here denotes source-environment volatility: terms-of-service changes, robots.txt updates, paywall erection, login gating, prohibition, or high-volume detection. The card mandates: "Use official/public sources only after terms and robots review. Do not scrape private, paywalled, login-gated, prohibited, or high-volume sources" [PAGE 1]. Media/fantasy sources are fallback/corroboration unless legal approval upgrades them [PAGE 1]. Veto condition: any target source failing terms/robots review, or becoming paywalled/login-gated, is adapter-vetoed before execution; no "just this once" exception. Disabled-by-default flag guarantees no unattended probe can bypass the legal gate.

Adjudication order: physical veto > biomechanical veto > weather veto. Only if all three pass may the disabled-by-default script execute in fixture mode. Public render additionally requires G_pub = 1: non-stale, non-conflicted, and confidence above threshold [PAGE 1]; otherwise public shows qualified status/unconfirmed and never a confirmed stale fact.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement-learning-from-verifiable-reward) counterfactual veto scenarios with predictions, all checkable against the test plan on [PAGE 1]: unit (normalization and scoring rules), integration (adapter fixtures and reconciliation), data validation (stale/conflict/no-mock checks), regression (Najee Harris and Rico Dowdle smoke tests vs fixtures, not hardcoded replacement teams).

Scenario 1: Stale official fact contradicted by newer official transaction evidence. Counterfactual: CanonicalFact for player X records Team A at t_v = T_old; newer official transaction evidence at T_new > T_old records a trade to Team B, with T_old still inside the nominal T_stale window. Veto: public confirmation of "Team A" is vetoed; ℛ selects the newer official transaction record, creates ConflictRecord between old and new official evidence, and does not silently overwrite [PAGE 1]. Prediction: roster:conflicts and test:roster surface the ConflictRecord; founder cockpit shows source weights and parser trail; public renders Team B with qualified status and last verified T_new, or unconfirmed until G_pub = 1. Verifiable by running reconciliation integration tests against fixture pairs.

Scenario 2: Adapter targets a paywalled/login-gated source. Counterfactual: a contributor adds a low-volume probe to a prohibited or credentials-gated source during implementation step 4 [PAGE 1]. Veto: legal/TOS boundary vetoes the adapter before execution; disabled-by-default prevents any cron-like invocation; no production mutation, no secrets touched [PAGE 1]. Prediction: repo pattern review flags non-compliance; CI does not invoke the adapter; if mistakenly invoked, parser error is logged internally and raw evidence links stay private. Build passes only with legal-approved official/public sources. Verifiable by inspecting changed files and adapter inventory.

Scenario 3: Najee Harris / Rico Dowdle regression smoke-test mismatch. Counterfactual: regression fixture lists current source-evidence team for Najee Harris (or Rico Dowdle), but rendered fact returns a hardcoded replacement team or stale cached value, violating "not hardcoded replacement teams" [PAGE 1]. Veto: acceptance criterion failed; test:roster regression blocks the build. Prediction: unit and integration tests pass, regression fails; exact changed files are reported; rollback removes new disabled script/types/docs, deletes generated fixtures, and leaves production data untouched [PAGE 1]. Build cannot merge until fixture is regenerated from current legal source evidence and rendered facts match. Verifiable by executing the regression suite and confirming the failure mode before remediation.
</RLVR_COUNTERFACTUAL_VETOES>