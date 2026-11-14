---
source: "BUILD-NRT-059-roster-data-quality-ci-gate.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3680
---

<NATIVE_REASONING>
The user wants me to process a document card (BUILD-NRT-059: Roster data quality CI gate) and produce a response following strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source text is provided (PAGES: 1). I need to cite [PAGE 1] markers and verbatim quotes from the source text.

This is a software engineering / data engineering card about a CI gate for NFL roster data quality. It's not about sports betting. I must avoid betting lines entirely.

I need to write a comprehensive response with all six XML sections, totaling >= 1,000 words, with THINK_TRACE >= 400 words.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Discuss the card's requirements, dependency chain (BUILD-071), the tension between "official current evidence wins unless stale" and conflict handling, the risk of stale facts rendering as confirmed, the Najee Harris and Rico Dowdle smoke tests, legal/TOS boundaries, read-only adapters vs production mutation, disabled-by-default implementation strategy, and gray zones like "unless stale or contradicted by newer official transaction evidence" (temporal ambiguity), "fallback/corroboration unless legal approval upgrades them" (source weight ambiguity), and "qualified status" (public vs private boundary ambiguity). Multi-hop: source evidence -> parsing -> reconciliation -> validation -> public rendering -> trust impact. Gray-zone audit: conflict resolution singularity when timestamps are equal, parser version drift, evidence hash collision, stale threshold undefined.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations. Define sets: F = roster facts, E = evidence records, S = sources with weights w_s. Define verification function V: F -> {verified, conflicted, stale, unknown}. Define conflict detection C(f_i, f_j). Freshness decay function. Information units: bits for evidence hash (SHA-256 = 256 bits), timestamp (Unix epoch seconds or ISO 8601), probability units for confidence. Breakdown regimes: when official evidence timestamp T_off < T_new_official_transaction, when two sources have equal timestamp but contradictory facts (singularity), when parser version mismatch causes normalization divergence, when no mock checks fail. Cite [PAGE 1] with verbatim quotes from the source text.

<RETROCAUSAL_GENEALOGY>: Historical lineage of data quality CI gates, roster truth systems, master data management (MDM), conflict-free replicated data types (CRDTs) last-writer-wins, temporal databases, bitemporal models. Multi-week traps: stale roster facts persisting across weeks (e.g., player cut but still listed active), number changes, staff role changes (coaching carousel), injury designations, practice squad elevations. The Najee Harris and Rico Dowdle smoke tests reference specific players - Najee Harris (Pittsburgh Steelers RB, though in 2024 he signed with Chargers? Actually Najee Harris signed with Los Angeles Chargers in 2025 free agency? Wait, my knowledge cutoff - I should be careful. The card says "compare rendered facts against current source evidence fixtures, not hardcoded replacement teams." So I should not assert current teams hardcoded. I'll mention them as smoke test subjects without asserting specific current teams unless qualified by source evidence). Rico Dowdle (Dallas Cowboys RB). Multi-week trap: a fact verified in week 1 may be false by week 4 due to transactions; the CI gate must catch staleness before deploy.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression (under pressure, teams revert to silent overwrites, hardcoded replacements, production mutations), counter-trap (the card explicitly forbids silent overwrites, requires ConflictRecord, disabled-by-default, rollback), clock (deploy cadence vs transaction velocity - NFL transactions happen rapidly around roster cuts, waivers, practice squad moves; the CI gate must run before each deploy or preflight). Theory of mind: founder cockpit expects confidence; data engineer might cut corners under deadline; reviewer might miss conflict visibility. Recursive layers: what the implementer thinks the reviewer wants vs what the card requires.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. This is a bit of a stretch for a data card, but I need to address it. Physical layer: hardware where CI runs, storage integrity, network partition between read-only adapters and production DB. Biomechanical: human data entry errors in official sources, transposition of jersey numbers, wrong team assignment due to human error. Weather: not directly applicable, but could affect data collection (e.g., stadium staff updating rosters during severe weather events? Or more abstractly, environmental disruptions to source availability). Veto proof: any layer can veto deploy if ValidationError or stale/conflict detected. Formal veto function: Deploy = AND(all layers pass). Breakdown: if physical layer compromised (hash mismatch), veto. If biomechanical (parser normalizes #12 and #02 incorrectly), veto. Weather: source unavailability due to regional outage -> fallback only as corroboration, not official -> veto if official missing.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards) veto scenarios + predictions. Scenario 1: Silent overwrite of conflicted fact -> veto triggered by ConflictRecord absence check. Prediction: build fails, rollback to fixtures. Scenario 2: Stale fact rendered as confirmed (last_verified timestamp older than stale threshold) -> veto by roster:stale check. Prediction: public surface shows qualified status not confirmed. Scenario 3: Production DB mutation or prohibited scraping -> veto by preflight guard reading dirty state / credentials check. Prediction: execution halts, no files changed in production paths.

I need to ensure >= 1000 words total. Let me draft carefully, with citations [PAGE 1] and verbatim quotes.

Verbatim quotes from source:
- "duplicate_check_status: EXTENSION"
- "matched_existing_ids: BUILD-071"
- "Roster facts are trust infrastructure. Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions."
- "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites."
- "Do not mutate production data."
- "Use official/public sources only after terms and robots review. Do not scrape private, paywalled, login-gated, prohibited, or high-volume sources."
- "Stale/unknown facts do not render as confirmed."
- "Run relevant checks and report exact files changed, tests run, approvals needed, and unknowns."

I need to be careful not to invent fake ratios. Use formal LaTeX with proper units.

Let me structure the LaTeX:

Let $\mathcal{F}$ be the set of roster facts $f \in \mathcal{F}$.
Let $\mathcal{E}$ be evidence records $e = (s, u, h, t, c, v, \text{id})$ where $s$ = source, $u$ = URL, $h$ = SHA-256 hash (256 bits), $t$ = timestamp (SI seconds since Unix epoch, or ISO 8601), $c$ = parsed record count (dimensionless count), $v$ = parser version (semantic version string), id = evidence ID (UUID).
Source weight $w_s \in [0,1]$ dimensionless probability/confidence weight. Official sources have higher prior but not absolute.
Verification state $\sigma(f) \in \{\text{verified}, \text{conflicted}, \text{stale}, \text{unknown}\}$.
Freshness predicate: $\text{stale}(f, t_{\text{now}}, \tau) \iff t_{\text{now}} - t_{\text{last\_verified}} > \tau$, where $\tau$ is stale threshold (seconds). $\tau$ undefined in card -> breakdown regime.
Conflict operator: $\mathcal{C}(f_a, f_b) = 1 \iff \text{fact}(f_a) \neq \text{fact}(f_b) \land \text{evidence}(f_a) \neq \emptyset \land \text{evidence}(f_b) \neq \emptyset$.
Resolution: $\text{resolve}(f) = \arg\max_{e \in \mathcal{E}(f)} (w_s \cdot \mathbb{I}[t_e \ge t_{\text{all}}])$ with tie-break singularity when $t_a = t_b$ and facts differ -> ConflictRecord.
Probability of incorrect public render $P_{\text{bad}} = P(\sigma=\text{verified} \land \text{actual}=\text{false})$. Target $P_{\text{bare}} \approx 0$ but bounded by source latency.

Breakdown regimes:
- Timestamp equality singularity: $t_a = t_b \land \text{fact}_a \neq \text{fact}_b$ -> no unique last writer -> ConflictRecord mandatory.
- Parser version divergence: $v_a \neq v_b$ causing normalization mismatch (e.g., jersey number "02" vs "2").
- Stale threshold singularity: $\tau \to \infty$ means nothing is stale; $\tau \to 0$ means everything is stale immediately.
- Source unavailability: official source $s_{\text{off}}$ returns HTTP 429/robots disallow -> fallback only corroboration, cannot upgrade to official without legal approval.

Now let's write the response. Must be all XML sections. No markdown outside? The user asked for exact XML sections. I'll wrap everything in those sections. I can include LaTeX inside.

Word count: Need >= 1000 words total, THINK_TRACE >= 400. I'll aim for THINK_TRACE ~500-600, others ~150-200 each.

Let me draft.

THINK_TRACE (deep multi-hop & gray-zone audit):
- Start with card identity BUILD-NRT-059, extends BUILD-071, duplicate gate EXTENSION.
- Multi-hop chain: source adapter (read-only) -> raw snapshot (timestamp, URL, hash, count, parser version, evidence IDs) -> parser -> normalization -> reconciliation (official/open-data/fallback) -> ConflictRecord vs silent overwrite -> validation suite (roster:audit, verify, conflicts, stale, test:roster) -> public surface (current fact, qualified status, last verified) vs founder cockpit (source weights, conflicts, parser errors, raw evidence) -> deploy gate.
- Gray zones: "unless stale" has no numeric $\tau$; "contradicted by newer official transaction evidence" creates bitemporal complexity (valid time vs transaction time); "fallback/corroboration unless legal approval upgrades them" leaves source weight $w_s$ in limbo; "qualified status" undefined semantics; Najee Harris/Rico Dowdle smoke tests compare against fixtures not hardcoded teams - this avoids a specific trap (hardcoding replacement teams after trades/cuts) but introduces fixture drift risk.
- Risk: primary trust risk is making stale/conflicted fact look confirmed.

SOURCE_OPERATORS_AND_EQUATIONS: formal definitions, LaTeX, units, [PAGE 1] citations.

RETROCAUSAL_GENEALOGY: MDM, CRDT LWW, bitemporal, NFL transaction velocity (cuts, waivers, PS elevations), multi-week trap examples.

RECURSIVE_THEORY_OF_MIND: implementer/reviewer/founder mental models, crisis regression to silent overwrite, counter-trap from card, clock (deploy vs transaction).

CROSS_LAYER_VETO_ADJUDICATION: physical (CI runner, disk, network), biomechanical (human data entry, parser normalization), weather (source outage, stadium events), veto function.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios with predictions.

Make sure no betting lines. No odds/spreads/totals/moneylines.

Cite [PAGE 1] frequently. Use verbatim quotes in quotes.

Let's write it out. I'll be verbose enough to hit word count.

Check word count as I go mentally. THINK_TRACE needs >=400 words. I'll write substantial paragraphs.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The card BUILD-NRT-059 establishes a roster data quality CI gate inside the NFL roster truth namespace, explicitly extending existing generic source-freshness and player-surface work tracked under BUILD-071. The duplicate gate is marked EXTENSION rather than duplicate because, per [PAGE 1], the card "adds NFL roster/person evidence, reconciliation, validation, or remediation that existing generic cards do not define." The multi-hop derivation begins at ingestion: read-only source adapters or fixture-based probes must store raw source snapshots carrying timestamp, URL, hash, parsed record count, parser version, and evidence IDs, with an explicit prohibition on mutating production data [PAGE 1]. This creates an evidence chain from source URL through parser version to normalized roster fact. The second hop is reconciliation: official, open-data, and fallback records are compared fact-by-fact, and "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites" [PAGE 1]. This is a bitemporal-style resolution rule wrapped in a CI gate: valid time (when the roster fact is true) and transaction time (when the evidence was observed) must both be tracked, or the gate cannot distinguish a legitimate roster change from a stale cache.

Gray-zone audit reveals several underspecified regimes. The phrase "unless stale" defines no numeric staleness threshold $\tau$; without $\tau$, the predicate $t_{\text{now}} - t_{\text{last\_verified}} > \tau$ is uncomputable, which is a breakdown regime. The conflict rule presupposes a total order on evidence timestamps, but the timestamp-equality singularity—two official records with identical $t$ but contradictory team, number, status, or staff role—has no defined tie-break in the card, forcing a mandatory ConflictRecord rather than silent overwrite [PAGE 1]. Parser version drift is another gray zone: if adapter A parses jersey number "02" as integer 2 while adapter B preserves string "02", reconciliation may fabricate a conflict where none exists, or mask a real one. The source-weight ambiguity is legally significant: media and fantasy sources are "fallback/corroboration unless legal approval upgrades them" [PAGE 1], meaning $w_s$ is not fixed at build time but contingent on external legal review. The public/private boundary also contains a semantic trap: public surfaces may show "current fact, qualified status, and last verified timestamp," but "qualified status" is never defined, so a implementer could render a conflicted fact as "qualified" and effectively launder uncertainty into a confirmed-looking UI state.

The smoke tests anchor the card to concrete players—Najee Harris and Rico Dowdle—and mandate comparison "against current source evidence fixtures, not hardcoded replacement teams" [PAGE 1]. This is a deliberate counter-trap against the common failure mode of hardcoding post-trade or post-cut rosters into tests. The multi-hop risk chain terminates at the acceptance criterion that stale or conflicted facts must not render as confirmed [PAGE 1]; the card identifies the primary trust risk precisely as "making a stale or conflicted fact look confirmed" [PAGE 1]. Implementation must therefore be docs-first, type-only, or disabled-by-default, with rollback limited to removing new scripts/types/docs and deleting generated fixtures while leaving production data untouched [PAGE 1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let $\mathcal{F}$ denote the set of roster facts $f$, where each $f$ is a tuple of team, number, status, and staff role drawn from NFL personnel. Let $\mathcal{E}$ denote evidence records $e = (s, u, h, t, c, v, \mathrm{id})$, with source $s$, URL $u$, content hash $h \in \{0,1\}^{256}$ (SHA-256, 256 bits), observation timestamp $t$ in SI seconds since the Unix epoch, parsed record count $c \in \mathbb{N}_0$ (dimensionless count), parser version $v$ (semantic version string), and evidence identifier $\mathrm{id}$ (UUID). Source credibility weight $w_s \in [0,1]$ is dimensionless and assigned only after terms-and-robots review [PAGE 1].

The verification state operator is
\[
\sigma(f) \in \{ \text{verified}, \text{conflicted}, \text{stale}, \text{unknown} \}.
\]
Freshness is governed by
\[
\text{stale}(f, t_{\text{now}}, \tau) \iff t_{\text{now}} - t_{\text{last\_verified}}(f) > \tau,
\]
where $\tau$ is the staleness horizon in seconds. The card does not specify $\tau$ [PAGE 1], so the operator is undefined until a product or engineering decision fixes it; $\tau \to \infty$ yields the breakdown regime in which nothing is ever stale, and $\tau \to 0^+$ yields the opposite regime in which everything is stale immediately after verification.

Reconciliation fact comparison uses the conflict operator
\[
\mathcal{C}(f_a, f_b) = 1 \iff \text{payload}(f_a) \neq \text{payload}(f_b) \land \mathcal{E}(f_a) \neq \emptyset \land \mathcal{E}(f_b) \neq \emptyset.
\]
When $\mathcal{C} = 1$, the system must emit a ConflictRecord rather than performing a silent overwrite [PAGE 1]. Resolution selects
\[
f^{*} = \arg\max_{e \in \mathcal{E}(f)} \Bigl( w_s \cdot \mathbb{I}[t_e \ge t_{\text{all official}}] \Bigr),
\]
subject to the override that newer official transaction evidence supersedes older official current evidence [PAGE 1]. The timestamp-equality singularity occurs when $t_a = t_b$ and $\text{payload}(f_a) \neq \text{payload}(f_b)$; no unique maximizer exists, so the gate must veto resolution and write ConflictRecord.

Information units for public rendering: last verified timestamp (ISO 8601 or epoch seconds), qualified status (enumerated, undefined in card [PAGE 1]), and evidence hash (256 bits). Probability of an incorrect public confirmation is bounded by
\[
P_{\text{bad}} = P\bigl(\sigma = \text{verified} \land \text{actual payload} = \text{false}\bigr),
\]
which the CI gate targets to drive toward zero through stale/conflict/no-mock checks [PAGE 1].

Citations and verbatim quotes from [PAGE 1]: "Roster facts are trust infrastructure. Wrong team, number, status, or staff role corrupts Player Lab, GSE Rating, search, content, customer trust, and internal decisions." "Official current evidence wins unless stale or contradicted by newer official transaction evidence. Conflicts create ConflictRecord entries instead of silent overwrites." "Do not mutate production data." "Stale/unknown facts do not render as confirmed." "compare rendered facts against current source evidence fixtures, not hardcoded replacement teams."
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The roster data quality CI gate descends from master-data-management (MDM) and entity-resolution lineages in which conflicting records for the same real-world entity are materialized as conflict objects rather than collapsed by last-writer-wins. It also inherits from bitemporal and temporal-database theory: official NFL roster evidence carries both valid time (the date a player is on a team) and transaction time (the date the transaction was recorded), which is why the card distinguishes "official current evidence" from "newer official transaction evidence" [PAGE 1]. In CRDT terminology, the roster fact is a state-based replica set where concurrent updates with identical timestamps but divergent payloads are not auto-merged; they are retained as ConflictRecord entries for human or founder-cockpit review.

The multi-week trap is specific to the NFL transaction calendar. Roster truth is not static across a season: cuts, waiver claims, practice-squad elevations, injured-reserve moves, and coaching-staff changes can invalidate a fact verified in Week 1 by Week 4. A stale fact that survives a deploy gate corrupts downstream systems named in the card—Player Lab, GSE Rating, search, content, and internal decisions [PAGE 1]. Najee Harris and Rico Dowdle are used as smoke-test subjects precisely because their roster statuses (team, number, status) have historically moved through multiple official transactions; the card's instruction to compare against fixtures rather than hardcoded replacement teams prevents the test itself from encoding a retrospective falsehood [PAGE 1]. Staff-role changes add a second temporal layer: coaching hires and firings during the season alter staff-role facts independently of player transactions, so the gate must validate both player and staff evidence on independent refresh cycles. The retro-causal lesson is that any CI gate that validates roster facts only at build time, without a freshness horizon $\tau$ and a stale check, will systematically certify last-season's truth as current-season's fact during the high-velocity transaction windows around roster cutdowns and midseason waivers.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression predicts that, under deadline pressure, an implementer will regress to the easiest available pattern: silent overwrite of conflicting evidence, hardcoding of expected team assignments in smoke tests, or mutation of a local production-equivalent database to "make the tests pass." The card explicitly blocks each regression: conflicts must produce ConflictRecord entries, not silent overwrites [PAGE 1]; Najee Harris and Rico Dowdle smoke tests must compare against fixtures, not hardcoded replacement teams [PAGE 1]; and no production database mutation or deploy may occur [PAGE 1]. The counter-trap is therefore structural: the implementation must be disabled-by-default or type-only until validation is proven, so the path of least resistance is to *not* deploy unsafe behavior.

Recursive theory of mind models what each actor believes the others expect. The founder roster accuracy cockpit expects source weights, conflicts, parser errors, and raw evidence links to be visible internally [PAGE 1]. The data-quality engineer expects the CI gate to fail closed when stale or unknown facts are detected. The reviewer expects exact changed files, tests run, approvals needed, and unknowns to be reported [PAGE 1]. If the implementer models the reviewer as caring only about "green CI," they may suppress ConflictRecord visibility; if the founder models the cockpit as needing only public-facing facts, they may under-invest in internal conflict surfaces. The clock layer is the NFL transaction calendar: the gate must run faster than the rate at which official transaction evidence invalidates current roster facts. If deploys occur weekly but waivers clear daily, the gate certifies a snapshot that is already stale by the time it ships. The recursive fix is to make staleness and conflict visibility the default rendered state for any fact whose evidence age exceeds $\tau$ or whose evidence set contains $\mathcal{C}=1$, so that every layer—implementer, reviewer, founder—observes the same unverified signal and cannot coordinate on a false confirmation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: The CI runner must operate on read-only source adapters or fixtures; if the physical host cannot guarantee isolation from production credentials, network routes to production DBs, or write access to production storage, the build vetoes. Raw snapshot storage must record URL, hash, and parser version [PAGE 1]; a SHA-256 mismatch (256-bit information unit) between downloaded artifact and expected hash triggers a physical-layer veto before parsing.

Biomechanical layer veto: Human data-entry error in official sources—transposed jersey numbers, wrong team assignments, incorrect staff role titles—enters the evidence stream as apparently authoritative. Parser normalization must not silently collapse "02" and "2" or "RB" and "running back" without a versioned normalization rule; if parser version $v$ diverges between adapters, the reconciliation layer vetoes pending normalization alignment. Biomechanical fatigue in the reviewer (skipping ConflictRecord review) is mitigated by requiring that public surfaces never render a conflicted fact as confirmed [PAGE 1].

Weather layer veto: Although not a meteorological system, the card's environmental boundary includes source availability. If official/public sources fail terms or robots review, are paywalled, login-gated, prohibited, or high-volume, they are excluded [PAGE 1]. A regional outage or robots.txt change that removes official source access degrades the evidence set; fallback/media sources remain corroboration only unless legal approval upgrades them [PAGE 1]. If official evidence is unavailable and the fact cannot be corroborated to a verified state, the gate vetoes public rendering of that fact as confirmed.

Veto adjudication function:
\[
\mathrm{Deploy} = \bigwedge_{L \in \{\text{physical, biomechanical, weather, stale, conflict}\}} \mathrm{Pass}(L),
\]
where any $\mathrm{Pass}(L)=0$ halts the build. The breakdown regime is a silent veto failure: a layer returns pass while harboring a conflict or stale timestamp, which the card prohibits by requiring ConflictRecord visibility and stale/unknown non-confirmation [PAGE 1].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Silent overwrite veto. An implementer modifies reconciliation code so that when two sources disagree on a player's team, the later-processed record overwrites the earlier one without writing a ConflictRecord. The RLVR reward function includes a boolean probe: after reconciliation over a fixture containing $\mathcal{C}(f_a,f_b)=1$, assert that a ConflictRecord entry exists and that no production mutation occurred [PAGE 1]. Veto: build fails the integration check; prediction: the disabled-by-default script remains inactive, generated fixtures are deleted, and existing production data is untouched [PAGE 1].

Scenario 2: Stale confirmation veto. A public surface renders Najee Harris's team as "confirmed" while $t_{\text{now}} - t_{\text{last\_verified}} > \tau$, with $\tau$ set by a pending product decision. The data-validation test suite includes roster:stale, which flags any fact older than the horizon. Veto: roster:stale returns non-zero; prediction: the public UI falls back to "qualified status" plus last-verified timestamp rather than confirmed [PAGE 1], and the CI gate blocks deploy until evidence is refreshed or $\tau$ is explicitly approved.

Scenario 3: Prohibited source / production mutation veto. An adapter attempts to scrape a paywalled or login-gated source, or the execution path writes to a production database migration or deployment config [PAGE 1]. The preflight guard verifies repo root, branch, dirty state, package manager, and absence of credentials before running [PAGE 1]. Veto: the script halts at preflight; prediction: zero files changed in production paths, zero secrets accessed, and the build reports exact unchanged state plus required approvals (legal source review, staleness threshold $\tau$, founder cockpit visibility scope) [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>