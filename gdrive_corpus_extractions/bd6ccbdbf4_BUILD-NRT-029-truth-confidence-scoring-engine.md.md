---
source: "BUILD-NRT-029-truth-confidence-scoring-engine.md"
folder: "/GSN/Galaxy Sports Edge/docs/research/nfl-roster-truth/claude-build-queue/cards"
pages: 2
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5902
---

<NATIVE_REASONING>
The user wants me to act as the GSE + GSI Frontier Reasoning Foundry and analyze a build card document. I need to produce a response with specific XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes.
- >= 1,000-WORD DEPTH across XML sections.
- When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.

The source text provided is from pages 2 (though it says PAGES: 2, the text seems to be one page). I need to cite [PAGE 2] markers since that's the page provided. Wait, the user says PAGES: 2. Let me check if there's a page break. The text starts with "# BUILD-NRT-029: Truth confidence scoring engine" and goes through to the Claude Code Prompt. Since PAGES: 2 is specified but only one block of text is given, I should treat it as [PAGE 2] or perhaps [PAGE 1]-[PAGE 2]. Actually, looking carefully: "SOURCE TEXT: ... PAGES: 2". The text itself doesn't have page markers. I will cite [PAGE 2] for the content since that's what's indicated, or I can refer to [PAGE 2] generally. To be safe, I'll cite [PAGE 2] for the source content.

Let me think about what the user is really asking. They provided a build card for a "Truth confidence scoring engine" for NFL roster truth system. They want me to analyze it through the lens of the GSE + GSI Frontier Reasoning Foundry, with strict invariants.

I need to:
- Not mention betting lines at all.
- Use formal LaTeX equations with SI/information/probability units.
- No fake ratios like Force/Fatigue.
- Exact singularity/breakdown regimes.
- Cite [PAGE 2] markers and verbatim quotes.

Let me structure this:

THINK_TRACE: Deep multi-hop derivation. I need to analyze the build card's dependencies, duplicate gate, reconciliation plan, validation plan, legal boundaries, implementation plan, acceptance criteria, test plan, rollback plan. Multi-hop: from duplicate gate (BUILD-112, BUILD-GV2-099) -> freshness -> player surface -> roster-specific truth rules -> ConfidenceScore -> ConflictRecord -> public/private boundary -> legal/TOS -> implementation plan -> acceptance criteria -> rollback. Gray-zone audit: where is the document ambiguous? "Likely files: real shipping clone paths unknown" - this is a gray zone. "Existing cards define generic freshness, data source QA, and player surfaces, but not fact-level NFL roster evidence" - gap analysis. "Official current evidence wins unless stale or contradicted by newer official transaction evidence" - temporal staleness singularity. "Media/fantasy sources are fallback/corroboration unless legal approval upgrades them" - epistemic hierarchy. Need >=400 words here.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define ConfidenceScore as a function over evidence sources. Let S be set of sources, each with weight w_i, freshness f_i(t), reliability r_i, contradiction indicator c_{ij}. Define truth confidence C ∈ [0,1] (information-theoretic probability unit, dimensionless). Use Bayesian updating or weighted evidence aggregation. ConflictRecord: binary relation R_conflict(fact_a, fact_b, t). Staleness: τ_stale = t_now - t_last_verified > Δ_threshold. Breakdown regime: when Δ_threshold → 0 or source weights all zero (singularity), or when official and fallback contradict with equal weight (non-identifiability). Cite [PAGE 2] for quotes: "Official current evidence wins unless stale or contradicted by newer official transaction evidence." "Conflicts create ConflictRecord entries instead of silent overwrites." "Public surfaces can show current fact, qualified status, and last verified timestamp." etc.

RETROCAUSAL_GENEALOGY: Historical lineage. Data quality, source freshness (BUILD-112), player surfaces (BUILD-GV2-099). Master data management (MDM), entity resolution, truth maintenance systems, non-monotonic reasoning. Multi-week traps: stale roster facts propagating through Player Lab, GSE Rating, search, content. The "founder cockpit" as a temporal anomaly detector. Multi-week trap: a fact that was correct in week 1 but becomes stale by week 4 due to trades/IR, and if the system doesn't re-verify, it cascades into wrong internal decisions.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. When data quality crisis happens (stale fact looks confirmed), teams regress to manual spreadsheet checks (crisis habit). Counter-trap: automated ConflictRecord surfacing in founder cockpit. Clock: validation cadence (roster:audit, roster:verify, roster:conflicts, roster:stale, test:roster) must run faster than roster churn rate (trades, cuts, IR). Recursive ToM: the data engineer models the founder modeling the customer modeling the player page. If the engineer thinks the founder will trust a stale fact, they add conflict visibility.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Hmm, this is about roster truth, not sports performance. But I need to interpret "physical/biomechanical/weather veto" metaphorically or map to data layers. Physical layer = database/storage, source adapters, network. Biomechanical = ingestion pipelines, parser versions, hash verification. Weather = exogenous volatility (news cycle, transaction velocity, legal/TOS changes). Veto conditions: if parser version mismatch, if hash changed, if robots.txt/TOS prohibits, if production mutation detected, if stale/unknown fact renders as confirmed. Formal veto predicate V = ∨ of layer vetoes.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifier Rewards? Or some internal framework. I'll treat as counterfactual veto scenarios where the system would be vetoed. Scenario 1: Najee Harris trade rendered as current team due to stale fixture. Veto: roster:stale fails. Prediction: test fails, no deploy. Scenario 2: Rico Dowdle status conflict between official and fallback. Veto: ConflictRecord created, public shows qualified status not confirmed. Prediction: public page shows "qualified" badge, founder cockpit shows conflict. Scenario 3: Attempted production DB mutation or scrape of prohibited source. Veto: read-only adapter enforcement, legal/TOS boundary. Prediction: CI blocks, rollback plan executed.

Word count: Need >=1000 words across sections. I'll aim for substantial depth in each.

Citations: [PAGE 2] for the source text. Verbatim quotes: I'll quote directly from the provided text.

Let me draft carefully.

THINK_TRACE (>=400 words):
Start with duplicate gate: EXTENSION, matched BUILD-112 and BUILD-GV2-099. Not duplicate because adds roster/person evidence, reconciliation, validation, remediation. Multi-hop: generic freshness (BUILD-112) → temporal validity of any datum → NFL roster facts have shorter half-life due to transactions → player surface (BUILD-GV2-099) → entity resolution of player to team/number/status → staff rules add another entity type (coaches/staff) → conflict handling needed because official vs open-data vs fallback can disagree.

Gray zones: "Likely files: real shipping clone paths unknown in this workspace" — implementation location unspecified, a gray zone that could lead to drift. "Do not mutate production data" but "For later DB work, roll back through migration rollback" — temporal gray zone between current type-only implementation and future DB work. "Media/fantasy sources are fallback/corroboration unless legal approval upgrades them" — epistemic gray zone where weight of fallback is undefined until legal approval. "Until then, validate with source inventory, fixtures, and generated JSONL/card checks" — pre-implementation validation is ad hoc.

Derivation: ConfidenceScore must be a function C: Fact × SourceSet × Time → [0,1]. ConflictRecord is a relation. Staleness threshold Δ creates a boundary: if t_now - t_verified > Δ, confidence collapses to 0 or "unknown". Breakdown: if all sources have w=0, C undefined (division by zero singularity). If official and fallback contradict with equal weight and equal freshness, non-identifiability; system must not render as confirmed.

>=400 words. Let's write around 500.

SOURCE_OPERATORS_AND_EQUATIONS:
Define:
- Let ℱ be the set of roster facts f ∈ ℱ, each with attributes (player_id, team, number, status, staff_role, ...).
- Let 𝒮 = {s_1, ..., s_n} be source adapters.
- Evidence record e_{i,f,t} = (source_id=s_i, fact=f, timestamp=t, hash=h, parser_version=v, record_count=m).
- Source weight w_i ∈ [0,1], Σw_i = 1 (if normalized), but official sources have higher prior.
- Freshness decay: φ(Δt) = exp(-λΔt) or step function at Δ_max. Unit: dimensionless, Δt in seconds (SI).
- Reliability r_i ∈ [0,1].
- Contradiction indicator: χ(f_a, f_b) = 1 if facts conflict on same entity attribute at overlapping validity windows, else 0.

ConfidenceScore: C(f, t) = σ( Σ_i w_i · r_i · φ(t - t_i) · I(e_{i,f,t} valid) ) where σ is logistic or clipped linear to [0,1]. But no toy equations—this is formal. I should state assumptions: conditional independence of sources given ground truth; weights calibrated from historical source accuracy; freshness decay model assumed exponential with λ calibrated per source class.

ConflictRecord: CR(f_a, f_b, t_conflict) = 1 iff χ(f_a, f_b)=1 ∧ both have C > θ_conflict (some threshold). Staleness: S(f,t) = 1 iff t - t_last_verified > Δ_stale.

Breakdown regimes:
- Singularity: Σw_i = 0 or all r_i = 0 ⇒ C undefined; system must default to "unknown", not 0.5.
- Non-identifiability: two official sources contradict with equal weight and freshness ⇒ C cannot be resolved; render as conflict, not confirmed.
- Temporal boundary: t - t_last_verified = Δ_stale exactly ⇒ measure-zero edge; define as stale (right-continuous) to avoid false confirmation.

Cite [PAGE 2]: "Official current evidence wins unless stale or contradicted by newer official transaction evidence." "Conflicts create ConflictRecord entries instead of silent overwrites." "Public surfaces can show current fact, qualified status, and last verified timestamp." "Stale/unknown facts do not render as confirmed."

RETROCAUSAL_GENEALOGY:
Historical lineage: Master Data Management (MDM) of the 1990s-2000s, entity resolution (Fellegi-Sunter model), truth maintenance systems (TMS) in AI (Doyle 1979), non-monotonic reasoning. In sports data, roster truth is a streaming MDM problem. BUILD-112 (source freshness) and BUILD-GV2-099 (player surface) are ancestors. This card extends them with NFL-specific transaction semantics.

Multi-week traps:
- Week 1: player on Team A. Week 3: traded to Team B. If source snapshot from Week 1 is not re-verified, Player Lab and GSE Rating ingest wrong team. The error propagates retroactively to all downstream features computed between Week 3 and re-verification. This is a "causal contamination" window.
- Staff role changes (coaching staff) have similar latency but lower velocity.
- Multi-week trap: a fact that is true at ingestion time t_0 but false at t_0 + k weeks, where k is the re-verification interval. If k > transaction inter-arrival time, expected number of stale facts grows linearly with k.

RECURSIVE_THEORY_OF_MIND:
Level 0: The system stores a roster fact.
Level 1: The founder views the founder cockpit and believes the fact is accurate.
Level 2: The customer views the public player page and makes a decision (search, content consumption).
Level 3: The data engineer anticipates the founder's trust and the customer's action.

Crisis habit regression: After a high-profile stale fact (e.g., player listed on wrong team after a trade), the org regresses to manual spreadsheets and ad-hoc checks, abandoning the automated engine. This is a habit regression because under stress, humans revert to familiar low-tech verification.

Counter-trap: The engine's ConflictRecord and stale/unknown gating is designed to be the counter-trap: instead of silent overwrite (the trap), it surfaces conflicts internally and withholds public confirmation.

Clock: Validation cadence (roster:audit, roster:verify, roster:conflicts, roster:stale, test:roster) must run with period T_valid < T_churn, where T_churn is the characteristic time between NFL roster transactions affecting tracked players. If T_valid > T_churn, the system is structurally blind to changes.

CROSS_LAYER_VETO_ADJUDICATION:
Layers:
1. Physical/Storage: production DB, migrations, secrets. Veto: any migration, deploy, or credential access. Predicate V_phys = (mutate_production ∨ deploy ∨ access_secrets).
2. Biomechanical/Ingestion: read-only adapters, parser versions, hash verification, fixture-based probes. Veto: parser_version_mismatch ∨ hash_mismatch ∨ write_attempt. Veto: "Do not mutate production data." [PAGE 2]
3. Weather/Exogenous: legal/TOS, robots.txt, source volatility, transaction velocity. Veto: robots_prohibited ∨ paywalled ∨ login_gated ∨ high_volume ∨ no_legal_approval. [PAGE 2]

Adjudication order: Physical veto is absolute (no deploy). Biomechanical veto blocks ingestion. Weather veto blocks source inclusion. Final rendered confidence C_rendered = C if ¬(V_phys ∨ V_bio ∨ V_weather), else "unknown"/withheld.

Breakdown: if all three layers simultaneously veto (e.g., only source is paywalled and production mutation attempted), C_rendered defaults to null; no fact is shown as confirmed.

RLVR_COUNTERFACTUAL_VETOES:
Scenario 1: Najee Harris trade. Counterfactual: fixture says Team A, official source says Team B. System ingests fixture first, then official. Veto: roster:conflicts creates ConflictRecord; public page shows qualified status, not confirmed. Prediction: integration test `test:roster` fails if public renders "confirmed" for Harris's team; CI blocks deploy. Verifiable: check ConflictRecord count > 0 and public badge = "qualified".

Scenario 2: Rico Dowdle status (e.g., active vs IR). Counterfactual: fallback media source says active, official source says IR with newer timestamp. Veto: official current evidence wins unless stale; since official is newer, status = IR, confidence high. If fallback is newer but unofficial, conflict created. Prediction: `roster:stale` flags if official timestamp > Δ_stale; public page shows last verified timestamp.

Scenario 3: Prohibited source scrape. Counterfactual: developer adds adapter for high-volume paywalled source to boost coverage. Veto: legal/TOS boundary and robots review block it; `roster:audit` source inventory flags it. Prediction: CI lint/security check fails; no new source weight w_i > 0 assigned without legal approval. Rollback: remove adapter, delete fixtures.

Now, let's write this out in full with proper LaTeX and XML structure. Ensure word count >1000. I'll write generously.

Need to make sure I don't mention betting lines. No spreads, totals, moneylines, odds. Good.

Need formal LaTeX equations with SI/information/probability units. I'll use probability units (dimensionless [0,1]), time in seconds, information in bits maybe.

Exact singularity/breakdown regimes: mention division by zero when sum of weights is zero; non-identifiability when contradiction with equal weight; measure-zero boundary at staleness threshold.

Let's compose. I need to be careful with [PAGE 2] citations. Since the source text is one block and PAGES: 2, I'll cite [PAGE 2] throughout. If I need [PAGE 1], I don't have it, so I'll only use [PAGE 2] or note that the provided text is [PAGE 2]. Actually, to be precise, I'll say "As recorded on [PAGE 2]..." and quote.

Let's draft the THINK_TRACE first. Aim for ~500 words.

THINK_TRACE content:
- The duplicate gate declares EXTENSION status, matched_existing_ids BUILD-112 and BUILD-GV2-099. Relation: extends generic source freshness/player surface/data quality with roster-specific truth rules. This is a multi-hop dependency: BUILD-112 provides temporal freshness operators for arbitrary data; BUILD-GV2-099 provides player surface entity resolution; NRT-029 adds NFL roster/person evidence, conflict handling, staff rules, deploy gates. [PAGE 2]
- Current problem: visible workspace is docs/control lane, not full app checkout. Gray zone: "Likely files: real shipping clone paths unknown in this workspace." Implementation location unspecified; risk of drift between docs and code. [PAGE 2]
- Data model: ConfidenceScore and ConflictRecord. ConfidenceScore maps a roster fact and evidence context to a probability. ConflictRecord captures contradictions instead of silent overwrite. [PAGE 2]
- Reconciliation: official current evidence wins unless stale or contradicted by newer official transaction evidence. [PAGE 2] This creates a temporal precedence operator with staleness as an exception clause.
- Validation: roster:audit, roster:verify, roster:conflicts, roster:stale, test:roster. Until implemented: source inventory, fixtures, JSONL/card checks. [PAGE 2]
- Public/private boundary: public shows current fact, qualified status, last verified timestamp. Founder/admin shows source weights, conflicts, parser errors, raw evidence links. Do not expose proprietary reconciliation logic. [PAGE 2]
- Legal/TOS: official/public only after terms and robots review. No scraping private/paywalled/login-gated/prohibited/high-volume. Media/fantasy fallback/corroboration unless legal approval upgrades. [PAGE 2]
- Implementation plan: verify repo root, branch, dirty state, package manager; read card + matched IDs; smallest docs-first/type-only/disabled-by-default; fixtures or low-volume legal probes; validation/tests and rollback notes; report exact changed files and unresolved approvals. [PAGE 2]
- Acceptance criteria: duplicate gate honored; every roster fact has source evidence design; conflicts visible internally; stale/unknown not rendered confirmed; no production DB mutation or deploy. [PAGE 2]
- Test plan: unit normalization/scoring; integration adapter fixtures/reconciliation; data validation stale/conflict/no-mock; regression Najee Harris and Rico Dowdle smoke tests compare rendered facts against current source evidence fixtures, not hardcoded replacement teams. [PAGE 2]
- Rollback: remove disabled script/types/docs, delete fixtures, leave production data untouched. Later DB work: migration rollback and snapshot restore after backup verification. [PAGE 2]
- Risks: Legal MEDIUM, Source MEDIUM, Maintenance MEDIUM. Primary trust risk: stale or conflicted fact looks confirmed. [PAGE 2]

Gray-zone audit:
- Staleness threshold Δ_stale is not numerically specified. Without a value, the boundary between "current" and "stale" is underdetermined; this is a specification gray zone that could let stale facts pass as confirmed if Δ_stale is set too large.
- Source weights w_i are not defined numerically. "Official current evidence wins" implies a weight ordering, but the exact weighting function and fallback downgrade rules are absent.
- The phrase "Media/fantasy sources are fallback/corroboration unless legal approval upgrades them" leaves the upgrade path undefined; a source could be silently used as corroboration without a clear weight change.
- "Until then, validate with source inventory, fixtures, and generated JSONL/card checks" is an ad-hoc pre-implementation validation regime; no acceptance threshold is stated for these checks.
- The rollback plan mentions "later DB work" and "migration rollback," implying a future state where production mutation is possible. The current build forbids it, but the boundary between current disabled-by-default and future enabled state is a temporal gray zone.

That's good, over 400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
Define notation and equations. Use LaTeX.

Let me write formal definitions:

\[
\mathcal{F} = \{ f \mid f = (\text{entity\_id}, \text{attribute}, \text{value}, \text{validity\_window}) \}
\]
Fact set.

\[
\mathcal{S} = \{ s_1, \dots, s_N \}
\]
Source adapters.

Evidence record:
\[
e_{i,f,t} = (s_i, f, t_{\text{obs}}, h, v_{\text{parser}}, m_{\text{records}})
\]
where h is hash, v_parser parser version, m record count. Units: t in seconds (SI), h dimensionless digest, m dimensionless count.

Source weight:
\[
w_i \in [0,1], \quad \sum_{i=1}^N w_i = 1 \quad \text{(if normalized)}
\]
Official sources: \(w_{\text{official}} > w_{\text{fallback}}\).

Freshness operator:
\[
\phi(\Delta t) = \begin{cases} 1 & \Delta t \leq \Delta_{\text{stale}} \\ 0 & \Delta t > \Delta_{\text{stale}} \end{cases}
\]
or exponential decay \(\phi(\Delta t) = e^{-\lambda \Delta t}\). Units: dimensionless; \(\Delta t\) in seconds; \(\lambda\) in s\(^{-1}\).

ConfidenceScore:
\[
C(f, t) = \mathcal{P}\big( f \text{ is ground truth} \mid \{e_{i,f,t}\}, \{w_i\} \big) \in [0,1]
\]
Unit: probability (dimensionless).

A formal aggregation under conditional independence:
\[
C(f,t) = \sigma\left( \sum_{i: e_{i,f,t} \text{ valid}} w_i \, r_i \, \phi(t - t_i) \right) - \gamma \, \chi_{\text{conflict}}(f)
\]
where \(\sigma\) clips to [0,1], \(r_i\) source reliability, \(\gamma\) conflict penalty, \(\chi_{\text{conflict}}\) indicator of active conflict. But I must avoid toy equations. This is formal enough if I state assumptions clearly.

Assumptions:
1. Sources are conditionally independent given ground truth.
2. Weights are calibrated from historical source accuracy, not arbitrary.
3. Freshness decay model is exogenous and calibrated per source class.
4. Conflict penalty \(\gamma\) is applied only when a ConflictRecord exists for the same attribute at overlapping validity windows.

ConflictRecord:
\[
\text{CR}(f_a, f_b, t) = 1 \iff \chi(f_a, f_b) = 1 \land C(f_a,t) > \theta \land C(f_b,t) > \theta
\]
where \(\theta\) is a conflict-visibility threshold.

Staleness predicate:
\[
S(f,t) = 1 \iff t - t_{\text{last\_verified}}(f) > \Delta_{\text{stale}}
\]

Rendered confidence:
\[
C_{\text{rendered}}(f,t) = \begin{cases} C(f,t) & \neg S(f,t) \land \neg \exists \text{CR} \land \neg V_{\text{layer}} \\ \text{"qualified"} & S(f,t) \lor \exists \text{CR} \\ \text{null} & V_{\text{layer}} \end{cases}
\]

Singularity/breakdown regimes:
1. Weight singularity: \(\sum_i w_i = 0\) or all \(r_i = 0 \Rightarrow C\) undefined; system must default to null/unknown, not 0.5.
2. Non-identifiability: two sources with \(w_a = w_b\), \(r_a = r_b\), \(\phi_a = \phi_b\), but \(\chi(f_a,f_b)=1 \Rightarrow C\) cannot resolve; render conflict, not confirmed.
3. Temporal measure-zero boundary: \(t - t_{\text{last\_verified}} = \Delta_{\text{stale}}\) exactly; define as stale (right-continuous) to avoid false confirmation.

Page citations: [PAGE 2] quotes:
- "Official current evidence wins unless stale or contradicted by newer official transaction evidence."
- "Conflicts create ConflictRecord entries instead of silent overwrites."
- "Public surfaces can show current fact, qualified status, and last verified timestamp."
- "Stale/unknown facts do not render as confirmed."
- "Do not mutate production data."
- "Use official/public sources only after terms and robots review."

RETROCAUSAL_GENEALOGY:
- Lineage: MDM, entity resolution (Fellegi-Sunter), truth maintenance systems, non-monotonic reasoning. BUILD-112 (source freshness), BUILD-GV2-099 (player surface).
- NFL roster truth as streaming MDM with transaction-driven half-life.
- Multi-week traps: causal contamination window. Player traded week 3, snapshot week 1. Error propagates to Player Lab, GSE Rating, search, content for all downstream computations until re-verified. Expected stale facts grow linearly with re-verification interval k relative to transaction inter-arrival time.
- Staff role changes lower velocity but similar latency.
- Founder cockpit as temporal anomaly detector; if it doesn't show conflicts, it hides the retroactive corruption.

RECURSIVE_THEORY_OF_MIND:
- Levels 0-3 as described.
- Crisis habit regression: manual spreadsheets after high-profile stale fact.
- Counter-trap: ConflictRecord + stale gating.
- Clock: validation cadence period T_valid must be < T_churn (characteristic time between NFL roster transactions). If T_valid > T_churn, structurally blind.
- Recursive modeling: engineer models founder models customer models player page.

CROSS_LAYER_VETO_ADJUDICATION:
- Three layers: Physical/Storage, Biomechanical/Ingestion, Weather/Exogenous.
- Formal veto predicates.
- Adjudication order and rendered confidence formula.
- Breakdown if all layers veto.

RLVR_COUNTERFACTUAL_VETOES:
- 3 scenarios with predictions.
- Najee Harris trade conflict.
- Rico Dowdle status official vs fallback.
- Prohibited source scrape / production mutation attempt.

Now let's write it all out, ensuring XML tags are exact and word count is high. I'll aim for ~1500+ words total to be safe.

One thing: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." My equations are formal data-confidence equations, not fake physics ratios. I should state assumptions and units clearly. Good.

Also: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I will do that.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The build card BUILD-NRT-029 declares a duplicate_check_status of EXTENSION, with matched_existing_ids BUILD-112 and BUILD-GV2-099. The reason_not_duplicate states that it "adds NFL roster/person evidence, reconciliation, validation, or remediation that existing generic cards do not define" [PAGE 2]. This creates a multi-hop dependency chain: BUILD-112 supplies generic source freshness operators; BUILD-GV2-099 supplies player surface entity resolution; NRT-029 layers on NFL roster-specific truth rules, staff rules, conflict handling, and deploy gates. The data model is explicitly limited to ConfidenceScore and ConflictRecord [PAGE 2], meaning the engine does not attempt to own the full roster record, only the epistemic layer above it.

A central gray zone is the deployment location. The card admits "Likely files: real shipping clone paths unknown in this workspace" [PAGE 2]. Without a resolved repo root, branch, dirty state, and package manager, the implementation cannot be bound to a concrete path, which creates a documentation-to-code drift risk. Another gray zone is temporal: the rollback plan references "later DB work" and "migration rollback and snapshot restore only after backup verification" [PAGE 2], implying a future state in which production mutation is possible, even though the current acceptance criteria forbid any production database mutation or deploy [PAGE 2]. The boundary between the current disabled-by-default, docs-first phase and a future enabled state is underspecified.

The staleness boundary is another specification gray zone. The card states "Official current evidence wins unless stale or contradicted by newer official transaction evidence" [PAGE 2], but it does not numerically define Δ_stale, the maximum permissible age before a fact is considered stale. Without this value, the predicate S(f,t) = 1 iff t − t_last_verified > Δ_stale is underdetermined, creating a regime where a stale fact could pass as confirmed if Δ_stale is set too conservatively. Similarly, source weights w_i are not numerically specified. The hierarchy implies official > open-data > fallback, but the exact weighting function, the fallback downgrade rule, and the conflict penalty γ are absent.

The legal/TOS boundary introduces an epistemic gray zone: "Media/fantasy sources are fallback/corroboration unless legal approval upgrades them" [PAGE 2]. The upgrade path is undefined, meaning a source could be used as corroboration without a clear, auditable change in weight. Pre-implementation validation is also ad hoc: "Until then, validate with source inventory, fixtures, and generated JSONL/card checks" [PAGE 2], with no stated acceptance threshold for those checks.

The primary trust risk is explicit: "Primary trust risk is making a stale or conflicted fact look confirmed" [PAGE 2]. Every downstream consumer—Player Lab, GSE Rating, search, content, customer trust, internal decisions—depends on the engine not rendering S(f,t) = 1 or ∃ ConflictRecord as a confirmed public fact [PAGE 2]. The public/private boundary enforces this by restricting public surfaces to "current fact, qualified status, and last verified timestamp," while founder/admin surfaces expose source weights, conflicts, parser errors, and raw evidence links [PAGE 2].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let ℱ be the set of roster facts, where each f ∈ ℱ is a tuple (entity_id, attribute, value, validity_window) with entity_id ∈ {player_id, staff_id}. Let 𝒮 = {s_1, …, s_N} be the set of read-only source adapters. An evidence record is defined as:

e_{i,f,t} = (s_i, f, t_obs, h, v_parser, m_records)

where t_obs is the observation timestamp in seconds (SI unit s), h is a content hash (dimensionless digest), v_parser is the parser version string (dimensionless identifier), and m_records is the parsed record count (dimensionless count) [PAGE 2]. No production data is mutated; only raw source snapshots are stored [PAGE 2].

Source weight w_i ∈ [0,1] represents epistemic reliability, with the constraint that if normalized, ∑_{i=1}^N w_i = 1. Official sources are assigned w_official > w_fallback per the reconciliation rule [PAGE 2]. Source reliability r_i ∈ [0,1] is calibrated from historical source accuracy, not invented.

Freshness operator φ(Δt) maps age to validity:

φ(Δt) = 
  { 1,                  if Δt ≤ Δ_stale
  { 0,                  if Δt > Δ_stale

where Δt = t − t_obs in seconds (SI unit s) and Δ_stale is the staleness threshold in seconds. An exponential decay alternative φ(Δt) = exp(−λΔt) with decay constant λ in s⁻¹ is permissible if calibrated per source class.

ConfidenceScore is a probability over ground truth:

C(f, t) = 𝒫( f is ground truth | {e_{i,f,t}}, {w_i}, {r_i} ) ∈ [0,1]

The unit is probability (dimensionless [0,1]). Under the assumption of conditional independence of sources given ground truth, a formal aggregation is:

C(f,t) = clip_{[0,1]}( ∑_{i: e_{i,f,t} valid} w_i · r_i · φ(t − t_i) − γ · χ_conflict(f) )

where clip is the unit interval projection, γ is the conflict penalty in probability units, and χ_conflict(f) is an indicator that an active ConflictRecord exists for f at an overlapping validity window.

ConflictRecord is defined as:

CR(f_a, f_b, t) = 1 ⟺ χ(f_a, f_b) = 1 ∧ C(f_a, t) > θ ∧ C(f_b, t) > θ

where χ is the contradiction indicator on the same attribute at overlapping validity windows, and θ is the conflict-visibility threshold in probability units [PAGE 2].

Staleness predicate:

S(f,t) = 1 ⟺ t − t_last_verified(f) > Δ_stale

Rendered confidence:

C_rendered(f,t) = 
  { C(f,t),                          if ¬S(f,t) ∧ ¬∃CR ∧ ¬V_layer
  { "qualified",                     if S(f,t) ∨ ∃CR
  { null / withheld,                 if V_layer (any layer veto)

Exact singularity and breakdown regimes:

1. Weight singularity: if ∑_i w_i = 0 or all r_i = 0, then C(f,t) is undefined (division by zero in normalized aggregation). The system must default to null/unknown, never to 0.5 or an unqualified confirmed status.
2. Non-identifiability: if two sources have equal weight w_a = w_b, equal reliability r_a = r_b, equal freshness φ_a = φ_b, but χ(f_a, f_b) = 1, then C cannot resolve the contradiction. The engine must emit a ConflictRecord and withhold public confirmation; it must not silently overwrite [PAGE 2].
3. Temporal measure-zero boundary: at exactly t − t_last_verified = Δ_stale, the predicate is right-continuous and classifies the fact as stale to avoid false confirmation at the boundary.

Verbatim source anchors from [PAGE 2]:
- "Official current evidence wins unless stale or contradicted by newer official transaction evidence."
- "Conflicts create ConflictRecord entries instead of silent overwrites."
- "Public surfaces can show current fact, qualified status, and last verified timestamp."
- "Stale/unknown facts do not render as confirmed."
- "Do not mutate production data."
- "Use official/public sources only after terms and robots review."
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of BUILD-NRT-029 traces through master data management (MDM), entity resolution, and truth maintenance systems. BUILD-112 provides the ancestor generic source freshness framework; BUILD-GV2-099 provides the player surface entity-resolution ancestor [PAGE 2]. NRT-029 extends these into NFL roster truth by adding person/staff evidence, transaction-aware reconciliation, and staff-specific rules. Historically, entity resolution (e.g., Fellegi-Sunter models) and AI truth maintenance systems (Doyle, 1979) addressed the same problem: maintaining a consistent belief set under new, contradictory evidence. The NFL roster is a streaming MDM problem where the ground truth changes via trades, waivers, injured-reserve designations, and coaching-staff moves.

The critical multi-week trap is causal contamination. Suppose a player is on Team A at ingestion time t₀. A trade occurs at t₀ + k₁ weeks, moving the player to Team B. If the source snapshot is not re-verified before t₀ + k₂ weeks, where k₂ > k₁, then every downstream computation—Player Lab features, GSE Rating inputs, search indexing, content rendering, internal decisions—operates on a false team affiliation for the window [t₀ + k₁, t₀ + k₂]. The error propagates retroactively to all features computed during that window, even after the source is eventually corrected. The expected number of stale facts grows linearly with the re-verification interval k relative to the characteristic inter-arrival time of NFL transactions.

A second multi-week trap involves staff roles. Coaching-staff changes occur less frequently than player transactions but with similar latency; a stale staff role can corrupt search and content for an entire season if not caught by roster:stale [PAGE 2]. The founder cockpit serves as a temporal anomaly detector: if it does not surface ConflictRecord entries or stale flags, it hides the retroactive corruption and allows the organization to act on invalid trust infrastructure.

The regression Najee Harris and Rico Dowdle smoke tests specifically guard against hardcoded replacement teams, forcing the system to compare rendered facts against current source evidence fixtures rather than memorized outcomes [PAGE 2]. This prevents the model from learning a static roster snapshot that decays week over week.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Level 0: The system stores a roster fact with an associated ConfidenceScore and, if applicable, a ConflictRecord [PAGE 2].
Level 1: The founder views the founder roster accuracy cockpit and forms a belief about whether the displayed fact is accurate. The cockpit exposes source weights, conflicts, parser errors, and raw evidence links, but not proprietary reconciliation logic [PAGE 2].
Level 2: The customer views the public player page and sees only the current fact, qualified status, and last verified timestamp [PAGE 2]. The customer's trust decision is mediated entirely by this qualified rendering.
Level 3: The data engineer must model the founder modeling the customer modeling the player page. If the engineer expects the founder to treat a "qualified" badge as equivalent to "confirmed," the system has failed the recursive loop.

Crisis habit regression occurs after a high-profile stale-fact incident (e.g., a player listed on the wrong team after a trade). Under stress, the organization regresses to manual spreadsheets and ad-hoc verification, abandoning the automated engine. This is a habit regression because it reverts to familiar low-tech processes precisely when automated evidence reconciliation is most needed.

The counter-trap is the ConflictRecord plus stale/unknown gating: instead of the trap of silent overwrite, the engine surfaces conflicts internally and withholds public confirmation [PAGE 2]. The founder cockpit is the interface where the counter-trap is armed; if conflicts are visible internally, the founder can interrupt the regression before it spreads to manual workarounds.

The clock is the validation cadence. The card mandates roster:audit, roster:verify, roster:conflicts, roster:stale, and test:roster [PAGE 2]. For the engine to remain trustworthy, the validation period T_valid must be shorter than the characteristic roster-churn time T_churn (the mean interval between NFL transactions affecting tracked entities). If T_valid > T_churn, the system is structurally blind to changes that occur between validation runs, and stale facts accumulate deterministically. The smoke tests for Najee Harris and Rico Dowdle compare rendered facts against current source evidence fixtures, not hardcoded replacement teams, ensuring the clock is measured against live evidence rather than static memory [PAGE 2].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Three layers are subject to veto. The final rendered confidence C_rendered is null if any layer vetoes.

1. Physical / Storage layer. Predicate: V_phys = mutate_production ∨ deploy ∨ access_secrets ∨ modify_migrations. The card explicitly prohibits production database mutation and deploy [PAGE 2]. Files to avoid include production DB migrations, deployment config, secrets, and live cron jobs [PAGE 2]. Any attempt to cross this boundary triggers an absolute veto; no fact is rendered.

2. Biomechanical / Ingestion layer. Predicate: V_bio = write_attempt ∨ parser_version_mismatch ∨ hash_mismatch ∨ non_read_only_adapter. The ingestion plan requires read-only source adapters or fixture-based probes first, storing raw snapshots with timestamp, URL, hash, parsed record count, parser version, and evidence IDs [PAGE 2]. If a parser version changes or a content hash no longer matches the stored snapshot, the ingestion is vetoed and the fact is not updated.

3. Weather / Exogenous layer. Predicate: V_weather = robots_prohibited ∨ paywalled ∨ login_gated ∨ high_volume ∨ no_legal_approval ∨ TOS_violation. The legal/TOS boundary requires official/public sources only after terms and robots review; private, paywalled, login-gated, prohibited, or high-volume sources are forbidden [PAGE 2]. Media and fantasy sources are fallback/corroboration only unless legal approval upgrades them [PAGE 2].

Adjudication order: V_phys is evaluated first and is absolute. V_bio blocks ingestion into the evidence store. V_weather blocks source inclusion and weight assignment (w_i remains 0). The final rendering rule is:

C_rendered(f,t) = C(f,t) if ¬(V_phys ∨ V_bio ∨ V_weather) ∧ ¬S(f,t) ∧ ¬∃CR
C_rendered(f,t) = "qualified" if S(f,t) ∨ ∃CR
C_rendered(f,t) = null if (V_phys ∨ V_bio ∨ V_weather)

Breakdown regime: if all three layers veto simultaneously (e.g., the only available source is paywalled and a production migration is attempted), C_rendered defaults to null. No stale or conflicted fact is rendered as confirmed [PAGE 2]. The primary trust risk—making a stale or conflicted fact look confirmed—is mitigated by this layered veto stack [PAGE 2].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Najee Harris team conflict. Counterfactual: A fixture records Harris on Team A; the official source record, with a newer timestamp, records him on Team B following a trade. Veto: roster:conflicts generates a ConflictRecord because χ(f_A, f_B) = 1 on the team attribute at overlapping validity windows [PAGE 2]. Public rendering is forced to "qualified" with the last verified timestamp, not "confirmed." Prediction: the integration test test:roster fails if the public page renders Harris's team as confirmed; CI blocks deploy. Verifiable artifact: ConflictRecord count > 0 for Harris's entity_id and public badge = "qualified" [PAGE 2].

Scenario 2: Rico Dowdle status staleness. Counterfactual: Official source lists Dowdle as injured reserve with timestamp t_official; a fallback media source lists him as active with timestamp t_media > t_official but without legal approval to upgrade weight. Veto: official current evidence wins unless stale or contradicted by newer official transaction evidence [PAGE 2]. Because the newer evidence is unofficial and lacks legal approval, it cannot override the official record. However, if t_now − t_official > Δ_stale, roster:stale flags the fact and the public rendering becomes "qualified." Prediction: roster:stale returns non-empty for Dowdle when the official snapshot exceeds Δ_stale; public page shows last verified timestamp rather than an unqualified active status [PAGE 2].

Scenario 3: Prohibited source ingestion and production mutation. Counterfactual: A developer adds an adapter for a high-volume, paywalled, login-gated source to boost coverage and attempts a write to the production roster table. Veto: V_weather blocks the source under the legal/TOS boundary [PAGE 2]; V_phys blocks the write under "Do not mutate production data" [PAGE 2]. Prediction: CI lint and security checks fail; no source weight w_i > 0 is assigned without legal approval; rollback executes by removing the disabled script/types/docs and deleting generated fixtures while leaving existing production data untouched [PAGE 2]. Verifiable artifact: the prohibited adapter is absent from the source inventory and no migration or deploy artifact exists in the changed-files report [PAGE 2].
</RLVR_COUNTERFACTUAL_VETOES>