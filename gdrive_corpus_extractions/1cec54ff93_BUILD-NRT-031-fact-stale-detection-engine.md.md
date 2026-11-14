---
source: "BUILD-NRT-031-fact-stale-detection-engine.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3318
---

<NATIVE_REASONING>
The user wants me to process BUILD-NRT-031: Fact stale detection engine. This is NOT a sports betting scenario - it's a software engineering/build card about NFL roster data freshness and stale detection. The GSE + GSI Frontier Reasoning Foundry instructions apply with strict invariants:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - no fake ratios, formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes, cite exact [PAGE N] markers and verbatim quotes when source pages provided
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words)</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis of this build card. Let me structure this carefully.

Key facts from source:
- Card ID: BUILD-NRT-031
- Duplicate gate: EXTENSION, matched BUILD-GV2-056, BUILD-GV2-099
- Parent: BUILD-GV2-056
- Priority P0, Difficulty M
- Risks: Legal MEDIUM, Source MEDIUM, Maintenance MEDIUM
- Primary trust risk: stale or conflicted fact looking confirmed
- Test Plan: Unit (normalization/scoring), Integration (adapter fixtures/reconciliation), Data validation (stale/conflict/no-mock), Regression (Najee Harris and Rico Dowdle smoke tests vs fixtures, not hardcoded replacement teams)
- Implementation: docs-first, type-only, disabled-by-default, fixtures/low-volume legal probes
- No production DB mutation, no deploy
- Data Model: ValidationError, SourceSnapshot
- Ingestion: read-only adapters, store raw snapshots with timestamp, URL, hash, parsed record count, parser version, evidence IDs
- Reconciliation: official > open-data > fallback; official current wins unless stale/contradicted by newer official transaction evidence; conflicts -> ConflictRecord
- Validation commands: roster:audit, roster:verify, roster:conflicts, roster:stale, test:roster
- Public/Private boundary: public shows current fact, qualified status, last verified timestamp; founder/admin shows source weights, conflicts, parser errors, raw evidence links
- Legal/TOS: official/public only after terms/robots review; no private/paywalled/login-gated/prohibited/high-volume; media/fantasy fallback/corroboration unless legal upgrade

I need to be careful about:
- No betting lines (none present anyway)
- No toy equations - I must use formal LaTeX, proper units (seconds, bytes, Shannon bits, probability), assumptions, singularity/breakdown regimes
- Cite [PAGE 1] since only 1 page provided
- >= 1000 words total across XML sections, THINK_TRACE >= 400 words

Let me draft each section.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. I'll discuss the stale detection engine architecture, the tension between official evidence priority and staleness, the gray zones (media vs official conflict, "current evidence wins unless stale" circularity, Najee Harris/Rico Dowdle regression traps), evidence design requirements, stale threshold singularity, etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations for staleness scoring, conflict detection, evidence weighting. Units: Δt in seconds, freshness threshold τ_stale in seconds, hash collision probability, entropy in bits, probability units. Assumptions and breakdown regimes. Cite [PAGE 1] with verbatim quotes.

RETROCAUSAL_GENEALOGY: Historical lineage - source freshness work BUILD-GV2-056, BUILD-GV2-099; multi-week traps (Najee Harris team changes, Rico Dowdle status changes, preseason vs regular season roster flux, coaching staff changes).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (engineer pushes to prod under pressure), counter-trap (disabled-by-default, fixtures only), clock (staleness as temporal decay, regression smoke tests across weeks).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof - hmm, this section is about veto proof. I'll adapt it to data pipeline veto layers: legal veto, source robots veto, production mutation veto, stale rendering veto. Physical layer = hardware/infra, biomechanical = human operational patterns, weather = external source volatility.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions.

Let me make sure word counts are sufficient. I'll aim for substantial depth.

Important: The user provided source text as pages=1. I should cite [PAGE 1] and quote verbatim where relevant.

Let me write this out now. I need to ensure no betting content. This is purely data engineering.

Let me draft.

THINK_TRACE:
- Start with the card as trust infrastructure
- Multi-hop: roster facts -> Player Lab, GSE Rating, search, content, customer trust, internal decisions (cite [PAGE 1] quote)
- Gray zone 1: "Official current evidence wins unless stale or contradicted by newer official transaction evidence" - temporal paradox: how do you know it's stale without a newer source? Breakdown regime when official source lags transaction reality (e.g., trade reported by media before official transaction wire).
- Gray zone 2: ConflictRecord vs silent overwrite - observable internal conflicts but public shows qualified status
- Gray zone 3: Regression smoke tests Najee Harris and Rico Dowdle - these are specific players with known transaction histories; using them as fixtures creates a multi-week trap where fixture staleness drifts from reality.
- Gray zone 4: Legal/TOS boundary - media/fantasy as fallback unless legal approval; risk of using them without approval.
- Evidence design: every roster fact touched needs source evidence design; ValidationError and SourceSnapshot data models.
- Stale threshold singularity: Δt = τ_stale boundary where fact flips from confirmed to qualified/unknown.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define SourceSnapshot S = (timestamp t_s, URL u, hash h, record count n, parser version v, evidence IDs E)
- Staleness function: σ(f, t_now) = t_now - t_verified(f) ; stale iff σ > τ_stale
- Conflict predicate: C(f_a, f_b) = 1 iff facts disagree on team/number/status/staff role and sources differ
- Reconciliation ranking: R = argmax over source weight w_s with recency constraint
- Probability of false confirmed stale fact: P(false confirmed) etc.
- Units: seconds for time, bytes/hash bits (SHA-256 = 256 bits), Shannon entropy for evidence diversity, dimensionless probability [0,1]
- Assumptions: official source is authoritative when fresh; transaction evidence is monotonic; parser deterministic given version
- Breakdown regimes: τ_stale → 0 (everything stale), τ_stale → ∞ (nothing stale), source unavailability, hash collision, parser version drift
- Cite [PAGE 1] with quotes.

RETROCAUSAL_GENEALOGY:
- Lineage: extends BUILD-GV2-056 (source freshness), BUILD-GV2-099 (player surface/data quality)
- NFL-specific: roster-specific truth rules, staff rules, conflict handling
- Multi-week traps: preseason roster cuts, final roster reductions, practice squad moves, in-season trades, IR designations, coaching staff changes (Najee Harris team changes example? Actually Najee Harris stayed with Steelers but the card mentions him; Rico Dowdle Cowboys RB depth). These are regression fixtures that can become stale across weeks.
- Historical pattern: generic freshness cards don't define fact-level NFL roster evidence.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under trust incident pressure, engineer might flip stale fact to confirmed, mutate prod DB, deploy cron
- Counter-trap: docs-first, type-only, disabled-by-default, fixtures only, no deploy
- Clock: staleness is a clock; smoke tests compare against fixtures not hardcoded teams (temporal anchoring trap)

CROSS_LAYER_VETO_ADJUDICATION:
- Layer 1 Legal/TOS veto: robots.txt, terms review, no paywalled/login-gated
- Layer 2 Production mutation veto: no DB migrations, no deploy, no live cron
- Layer 3 Rendering veto: stale/unknown facts do not render as confirmed
- Layer 4 Evidence veto: no source evidence design => fact not touched
- Physical/biomechanical/weather analogy: physical=infra/repo, biomechanical=engineer habits under pressure, weather=external NFL transaction volatility and source outages

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios:
1. Veto: Production DB migration attempted -> prediction: rollback via migration rollback + snapshot restore after backup verification; no stale fact confirmed.
2. Veto: Stale fixture (Najee Harris) rendered as confirmed because τ_stale exceeded -> prediction: roster:stale flags it; public shows qualified status not confirmed.
3. Veto: Unauthorized media source scraped at high volume -> prediction: legal TOS boundary blocks; integration test no-mock check fails; fixture-backed only.

I need to ensure total >= 1000 words and THINK_TRACE >= 400 words.

Let me write carefully with LaTeX.

Word count estimation: I'll write generously.

Let me compose the final response.
</NATIVE_REASONING>

<THINK_TRACE>
The build card BUILD-NRT-031 defines a fact stale detection engine for an NFL roster truth system, and the first multi-hop derivation is that roster facts are explicitly labeled "trust infrastructure" whose corruption cascades into Player Lab, GSE Rating, search, content, customer trust, and internal decisions [PAGE 1]. That is not a narrow data-quality ticket; it is a trust-boundary problem. The duplicate gate marks this card as an EXTENSION of BUILD-GV2-056 and BUILD-GV2-099, meaning generic freshness and player-surface work already exists, but none of it defines fact-level NFL roster evidence, conflict handling, staff rules, or deploy gates [PAGE 1]. The gray zone opens immediately in the reconciliation rule: "Official current evidence wins unless stale or contradicted by newer official transaction evidence" [PAGE 1]. This rule is temporally circular unless the system can independently bound staleness. If the official source itself lags transaction reality—for example, a trade reported through media before the official transaction wire posts—then "current official evidence" may be formally fresh yet factually false, and the engine has no internal operator to detect that divergence except through conflict records with fallback sources.

The second gray zone is the public/private boundary. Public surfaces may show a current fact, a qualified status, and a last verified timestamp, while founder/admin surfaces expose source weights, conflicts, parser errors, and raw evidence links [PAGE 1]. The engineering trap is that a qualified status is only as honest as the staleness threshold τ_stale. If τ_stale is set too large, a fact rendered as "current" with a verified timestamp may already be obsolete; if set too small, every fact oscillates into unknown and degrades user experience. The acceptance criterion that "stale/unknown facts do not render as confirmed" [PAGE 1] therefore depends entirely on a scalar threshold that the card does not numerically specify, creating a singularity regime at σ(f, t_now) = τ_stale where a fact's public confirmation state flips discontinuously.

The third gray zone is the regression plan. Najee Harris and Rico Dowdle smoke tests must compare rendered facts against current source evidence fixtures, "not hardcoded replacement teams" [PAGE 1]. This is a multi-week trap: fixtures captured in Week 1 encode rosters that are legally true at t_fixture but become stale by Week 4 due to practice-squad moves, IR designations, or trades. A regression suite that passes at build time can silently encode stale truth two weeks later unless fixtures are versioned, re-hashed, and re-validated against a recency bound. The legal/TOS boundary compounds this: media and fantasy sources are fallback/corroboration only unless legal approval upgrades them [PAGE 1], so an engineer under pressure during a trust incident may be tempted to treat a Twitter/X report or fantasy depth chart as confirming evidence, violating the source boundary.

The implementation constraints are designed as counter-traps: docs-first, type-only, or disabled-by-default; read-only adapters; fixture-based probes; no production database mutation; no deploy; no scraping of prohibited, paywalled, login-gated, or high-volume sources [PAGE 1]. The data model is minimal—ValidationError and SourceSnapshot—with ingestion storing timestamp, URL, hash, parsed record count, parser version, and evidence IDs [PAGE 1]. Conflicts create ConflictRecord entries instead of silent overwrites [PAGE 1]. The validation commands roster:audit, roster:verify, roster:conflicts, roster:stale, and test:roster are specified as future integration targets [PAGE 1]. The primary trust risk is explicitly stated: making a stale or conflicted fact look confirmed [PAGE 1]. My derivation concludes that the build is safe only if the staleness function, conflict predicate, and evidence-design requirement are enforced at the type or documentation level before any runtime reconciliation runs, because the card itself forbids production deployment and database mutation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Source text: [PAGE 1], BUILD-NRT-031 card. Verbatim quotes used below.

Define a source snapshot for roster fact f:
\[ S_s(f) = \langle t_s, u_s, h_s, n_s, v_s, E_s \rangle \]
where \(t_s\) is the snapshot timestamp (unit: seconds since Unix epoch, s), \(u_s\) is the source URL, \(h_s\) is the content hash (unit: bits; e.g., SHA-256 = 256 bits), \(n_s\) is the parsed record count (dimensionless integer), \(v_s\) is the parser version (semantic version string), and \(E_s\) is the set of evidence IDs (dimensionless identifiers). [PAGE 1] states: "Store raw source snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs."

Define staleness age:
\[ \sigma(f, t_{\text{now}}) = t_{\text{now}} - t_{\text{verified}}(f) \quad [\text{unit: s}] \]
A fact is stale iff:
\[ \mathcal{S}(f) = \mathbb{1}\big[\sigma(f, t_{\text{now}}) > \tau_{\text{stale}}\big] \]
where \(\tau_{\text{stale}}\) is the staleness threshold (unit: s). [PAGE 1] states: "Stale/unknown facts do not render as confirmed."

Define the conflict predicate between two records \(r_a, r_b\) on the same roster fact:
\[ \mathcal{C}(r_a, r_b) = \mathbb{1}\big[ \text{team}_a \neq \text{team}_b \lor \text{number}_a \neq \text{number}_b \lor \text{status}_a \neq \text{status}_b \lor \text{role}_a \neq \text{role}_b \big] \]
When \(\mathcal{C}=1\) and sources differ, the system must create a ConflictRecord instead of a silent overwrite [PAGE 1]: "Conflicts create ConflictRecord entries instead of silent overwrites."

Reconciliation ranking:
\[ r^{*} = \underset{r \in \mathcal{R}}{\arg\max} \; w_s(r) \cdot \mathbb{1}[\neg \mathcal{S}(r)] \cdot \mathbb{1}[\text{official}(r) \lor \neg \exists r' : t_{r'} > t_r \land \text{official}(r')] \]
where \(w_s\) is source weight (dimensionless, internal/founder only), official() indicates official source status, and the second indicator enforces that newer official transaction evidence overrides older official current evidence [PAGE 1]. Public exposure is restricted: "Public surfaces can show current fact, qualified status, and last verified timestamp. Founder/admin surfaces can show source weights, conflicts, parser errors, and raw evidence links." [PAGE 1]

Probability unit for trust risk:
\[ P(\text{false confirmed}) = P(\neg \mathcal{S} \mid \text{actual stale}) \]
The primary trust risk is making a stale or conflicted fact look confirmed [PAGE 1].

Assumptions: (1) official source is authoritative when fresh; (2) transaction evidence is monotonic in time; (3) parser output is deterministic given version \(v_s\). Breakdown regimes: \(\tau_{\text{stale}} \to 0\) renders all facts stale (availability collapse); \(\tau_{\text{stale}} \to \infty\) renders nothing stale (trust collapse); source unavailability or hash collision in \(h_s\) breaks evidence linkage; parser version drift invalidates normalized fixtures.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of BUILD-NRT-031 is explicitly backward-looking: it extends BUILD-GV2-056 and matches BUILD-GV2-099, existing generic source freshness and player surface/data quality cards [PAGE 1]. The reason-not-duplicate field states that those cards do not define NFL roster-specific truth rules, staff rules, conflict handling, or deploy gates [PAGE 1]. Historically, this places the build in a transition from generic data freshness to domain-specific roster truth infrastructure.

The scientific lineage includes source snapshot hashing, evidence-ID tracking, and reconciliation-as-conflict-detection rather than last-write-wins. The NFL-specific novelty is staff-role truth and roster-specific evidence design: every roster fact touched by the build must have source evidence design [PAGE 1].

Multi-week traps are central. NFL rosters are non-stationary across a season: preseason cuts (late August), final roster reductions (late August), practice-squad movements (Week 1 onward), in-season trades (trade deadline), injured-reserve designations, and coaching-staff changes all invalidate roster facts on irregular intervals [domain knowledge constrained by card context]. The card's regression smoke tests name Najee Harris and Rico Dowdle [PAGE 1]. These are multi-week trap fixtures: a fixture encoding Harris's team or Dowdle's status in Week 1 may be factually stale by Week 6 due to a trade, IR move, or depth-chart change. The instruction to compare against "current source evidence fixtures, not hardcoded replacement teams" [PAGE 1] is an anti-hardcoding guard, but it does not solve fixture drift unless fixtures are re-pulled, re-hashed, and checked against τ_stale on each regression run.

Another genealogical trap is the legal/TOS inheritance: media and fantasy sources are fallback/corroboration unless legal approval upgrades them [PAGE 1]. Prior generic freshness work likely did not carry NFL roster-specific legal exposure; this build inherits medium legal risk because source terms and robots review must gate every adapter [PAGE 1].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under a trust incident—e.g., a customer-facing roster page shows a player on the wrong team after a trade—an engineer may regress to crisis habits: mutate the production database directly, enable a disabled cron job, scrape a high-volume media source to "fix it fast," or flip a stale fact to confirmed to restore confidence [PAGE 1 risks: Production DB mutations, live cron jobs, prohibited/high-volume sources]. The build card explicitly forbids all four: "No production database mutation or deploy occurs," "Files to avoid: production DB migrations, deployment config, secrets, live cron jobs," and "Do not scrape ... high-volume sources" [PAGE 1].

Counter-trap: The implementation plan mandates the smallest docs-first, type-only, or disabled-by-default implementation, using fixtures or low-volume legal probes only [PAGE 1]. This raises the cost of crisis regression because there is no production code path to flip; the staleness and conflict logic exist only in types, docs, or disabled scripts until approvals are obtained.

Clock: Staleness is fundamentally a clock. \(\sigma(f, t_{\text{now}})\) grows monotonically, so every fact has a half-life of trust. The recursive theory of mind must model how an engineer perceives that clock during a crisis: they see public trust eroding and want to reset \(\sigma\) to zero by asserting confirmation. The counter-trap is that public surfaces may show "current fact, qualified status, and last verified timestamp" [PAGE 1], but never confirmed status for stale facts. The Najee Harris/Rico Dowdle regression tests compare fixtures, not hardcoded teams [PAGE 1], which prevents temporal anchoring: an engineer cannot hardcode the "expected" team and bypass the clock.

The theory-of-mind recursion resolves as: the builder must anticipate that their future self, under incident pressure, will want to violate the disabled-by-default constraint; therefore the constraint must be enforced at repo/branch and CI level (dirty state checks, package-manager scripts, no-deploy gates) before any code is written [PAGE 1 implementation plan].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Four veto layers adjudicate whether any roster fact may be rendered or ingested.

Layer 1—Legal/TOS veto (physical/institutional layer): Official/public sources only after terms and robots review. No private, paywalled, login-gated, prohibited, or high-volume sources. Media/fantasy sources are fallback/corroboration unless legal approval upgrades them [PAGE 1]. Veto condition: if robots.txt or terms prohibit crawling, the adapter is inadmissible regardless of data value.

Layer 2—Production mutation veto (physical/infra layer): No production DB migrations, deployment config, secrets, or live cron jobs. Rollback removes new disabled script/types/docs and deletes generated fixtures; existing production data is left untouched [PAGE 1]. Veto condition: any script that writes to production is rejected at pre-commit.

Layer 3—Rendering veto (trust layer): Stale/unknown facts do not render as confirmed [PAGE 1]. Public surfaces show current fact, qualified status, and last verified timestamp only. If \(\mathcal{S}(f)=1\), the fact is not confirmed. Veto condition: a UI or API endpoint that labels a stale fact "confirmed" fails acceptance.

Layer 4—Evidence design veto (data layer): Every roster fact touched by the build must have source evidence design [PAGE 1]. The data model ValidationError and SourceSnapshot requires timestamp, URL, hash, parsed record count, parser version, and evidence IDs [PAGE 1]. Veto condition: a fact with no associated SourceSnapshot cannot enter reconciliation.

Biomechanical/weather analogy: The "physical" layer is repository state and infra (repo root, branch, dirty state, package manager) [PAGE 1]; the "biomechanical" layer is engineer habit under crisis pressure (temptation to mutate prod, scrape prohibited sources, hardcode fixtures) [PAGE 1]; the "weather" layer is external NFL transaction volatility and source outages (trades, IR, media reports before official wires) that make official freshness insufficient [PAGE 1]. All four veto layers must hold simultaneously; a single layer failure permits stale or conflicted facts to appear confirmed, which is the primary trust risk [PAGE 1].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios with predictions:

Veto Scenario 1—Production DB migration attempt. A contributor adds a migration to backfill roster staleness into production. Pre-commit CI checks for migration files and deployment config; the build's rollback plan says to leave existing production data untouched and roll back through migration rollback + snapshot restore only after backup verification [PAGE 1]. Prediction: The migration is rejected at CI; no production rows are modified; roster:stale and roster:conflicts run only against fixtures.

Veto Scenario 2—Stale Najee Harris fixture rendered as confirmed. The Week-1 fixture says Harris is on Team A; by Week 6 he has been traded to Team B. Because τ_stale is exceeded, \(\sigma > \tau_{\text{stale}}\), and \(\mathcal{S}(f)=1\). Prediction: roster:stale flags the fact; the public surface renders qualified status with last verified timestamp, not "confirmed"; the smoke test fails if it compares against a hardcoded Team A instead of the current fixture [PAGE 1].

Veto Scenario 3—Unauthorized high-volume media scrape. An adapter pulls a fantasy or media source at high volume without legal/robots review to corroborate a roster fact during a trust incident. Prediction: The legal/TOS boundary blocks the adapter [PAGE 1]; integration tests using no-mock checks fail; the system falls back to official or low-volume legal probes only, and no ConflictRecord is created from the prohibited source.
</RLVR_COUNTERFACTUAL_VETOES>