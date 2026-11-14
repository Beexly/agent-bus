---
source: "CLAUDE_PARALLEL.md"
folder: "/CorpusRoot/PC-offload/OneDrive/Documents/Galaxy Sports Edge Launch Ready/coordination"
pages: 2
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4234
---

<NATIVE_REASONING>
The user wants me to act as the "GSE + GSI Frontier Reasoning Foundry" with strict invariants. I need to produce a response with specific XML sections, each with deep content. Let me analyze the source text.

Source text is a parallel work log from Cowork Claude to Codex. It's about Galaxy Sports Edge Launch Ready coordination. It describes 5 deliverables, brand safety rules, evidence engine, cockpit spec, content surfaces, launch QA addendum.

The user hasn't asked a specific question, just provided the drive source and pages. I need to interpret this as a request to reason about this document through the specified framework. Since there's no explicit question, I should produce a comprehensive frontier reasoning analysis of the document itself, treating it as a system/architecture artifact.

Requirements:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

Wait, the user said "PAGES: 2" but provided one markdown file. I should cite [PAGE 1] and [PAGE 2] as logical divisions of the provided text? Or treat the single provided text as Page 1 and maybe Page 2 doesn't exist? The invariant says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since only one block of text is provided, I'll cite it as [PAGE 1] and perhaps note [PAGE 2] is not provided / blank. Actually, to be safe and compliant, I should quote from the provided text and mark [PAGE 1]. I can mention [PAGE 2] as not present in the drive excerpt. But better to just use [PAGE 1] for quotes from the provided markdown.

Key constraints:
- No betting lines: avoid spreads, totals, moneylines, odds. The document itself mentions "odds ingestion" in step 6. I must not mention betting lines. I can refer to "market signals" or "ingestion pipelines" but avoid the specific banned terms. Wait, "odds" is banned. The source text says "odds ingestion". I should not repeat that term as a betting line. I can paraphrase as "market-price ingestion" but even "odds" is banned. I'll avoid it entirely.
- No toy equations. Need formal LaTeX. I can discuss information theory, Bayesian calibration, Brier score (which is mentioned in source), entropy, KL divergence, etc. Brier score is real: BS = (1/N) Σ (f_i - o_i)^2. That's formal, not a toy ratio.
- SI/information/probability units: bits, nats, probability [0,1], dimensionless.
- Assumptions and exact singularity/breakdown regimes.

Structure:
<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). Analyze the document's internal consistency, the namespace collision, the "extend never overwrite" rule, the tension between time-pressured autonomous pass and brand safety, the open decisions, etc.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. Define the evidence engine state machine, Brier calibration, shadow-mode boundary, gate-state semantics. Cite [PAGE 1] quotes. Mention breakdown regimes (e.g., calibration window < 30 days causes high variance in Brier estimate; singleton factor activation creates identifiability singularity).

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Trace from evidence-based medicine, software engineering (parallel tracks, no conflicts), linter-as-conscience, brand safety as load-bearing document. Multi-week traps: calibration window drift, provider mix latency, auth bootstrap delays.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Model Cowork Claude's reasoning about Codex, Codex's likely behavior under pressure, the "rule of the lane", the human at keyboard, recursive modeling of what each agent believes the other will do.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. This is a bit odd given the source is a software doc, but I need to interpret it as a veto proof across layers: physical (servers, migration), biomechanical (human factors, older readers accessibility), weather (not applicable, but maybe environmental/operational context). Or interpret metaphorically: physical layer = infrastructure/db migrations; biomechanical = human operators, accessibility, time pressure; weather = external volatility, provider mix. Need to show veto conditions.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some internal acronym. I'll treat it as counterfactual veto scenarios that are verifiable. Provide 3 scenarios with predictions.

Word count: Total >= 1000 words across sections. THINK_TRACE >= 400 words. I need to ensure enough depth.

Let's draft carefully.

Important: Do not mention spreads, totals, moneylines, odds. The source text mentions "market-edge vs true-EV separation" and "Kelly or true-EV UI work". I must not discuss EV in betting context? "true-EV" is expected value. The invariant says zero betting lines: spreads, totals, moneylines, or odds. It doesn't explicitly ban EV, but to be safe I should avoid framing it as betting. However the source does mention BS-020/BS-021 block Kelly or true EV. I can reference that as a governance rule without explaining betting mechanics. I will avoid the term "odds" entirely.

Citations: [PAGE 1] for the provided markdown. I'll quote verbatim sections.

Let's outline the content.

THINK_TRACE (>=400 words):
- Multi-hop: Document is a coordination layer between two autonomous agents (Cowork Claude and Codex) under time pressure (2026-05-21 pass).
- Hop 1: Load-bearing doc is brand-safety-rules-v2.md; conscience is linter.
- Hop 2: Five deliverables form an additive extension layer; no overwrite of existing apps/packages/etc.
- Hop 3: Namespace collision: internal jarvis cockpit vs public /picks decision-path; routed around explicitly.
- Hop 4: Non-negotiables map to rule IDs (BS-010..BS-053) with runtime invariants and CI tests.
- Hop 5: Open decisions (restDays, calibration window, provider mix, auth) create a partially ordered set of dependencies; Phase 2 plumbing can start without them.
- Gray-zone audit: "autonomous, time-pressured" pass risks spec drift; "extend never overwrite" is a consistency invariant but migration of existing odds ingestion to write through SourceSnapshot first is a touch of existing ingestion path (though not apps/ etc? Step 6 says refactor existing odds ingestion—this may touch scripts/workers? The author said didn't touch apps/, packages/, workers/, scripts/. But step 6 for Codex says refactor existing odds ingestion. Potential gray zone: who touches the ingestion pipeline? Could conflict with "did not touch" if the ingestion code lives in workers/scripts. Need to flag this as a gray zone.)
- Another gray zone: v1 public surface unchanged on day one, but evidence engine extends v1 scorer additively. Shadow-mode boundary means no public behavior change, but data plane changes. Risk of silent shadow-mode leakage if gate-state semantics are misconfigured.
- Brier-based calibration methodology needs a window; 30 days proposed, some factors 60. Singularity: insufficient calibration events leads to non-identifiable factor weights.
- Word count target: aim for ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define state variables:
  - Let S_t ∈ SourceSnapshot at time t.
  - IngestionRun I_r with status ∈ {pending, ingested, validated, shadow, gate-open, gate-closed}.
  - GameSignal G_{f,t} for factor f at game t.
  - FactorDefinition F_f with activation threshold τ_f.
- Gate-state semantics: G_{f,t} is public only if CalibrationWindow W_f satisfies |W_f| ≥ 30 (or 60) and Brier score BS_f(W_f) ≤ BS_threshold. Formal: 
  BS_f = (1/|W_f|) Σ_{i∈W_f} (p_{f,i} - y_i)^2, p∈[0,1], y∈{0,1}, units dimensionless probability squared.
  Breakdown regime: |W_f| < N_min (e.g., 30) → variance of BS estimator scales as O(1/|W_f|); singularity at |W_f|=0 (undefined, division by zero).
- Shadow-mode boundary: signal emitted but not displayed; indicator variable δ_{shadow} ∈ {0,1}. Public verdict V_t = 1 iff δ_{shadow}=0 ∧ gate_state = OPEN ∧ ∀f∈active, BS_f ≤ threshold.
- Non-negotiables as constraints: BS-011 (no fake player data) → ∀player p, data_p must be source-attested: attestation_a(p) = 1. BS-020/BS-021: no Kelly/true-EV until source-backed fair probability π* exists; define π* as output of calibrated factor model, not market-implied.
- Cite [PAGE 1] quotes: "evidence engine extends the v1 scorer additively. v1 public surface unchanged on day one." and "brand safety wins. The conscience is the linter." and "First non-market factor to activate. Recommended: restDays (no new provider needed)."
- Units: bits for information entropy H(X) = -Σ p log2 p; nats if natural log. Probability dimensionless. Time in days. Lines of code ~1900.
- Breakdown: calibration window mismatch (30 vs 60) creates non-stationarity; if factor distribution shifts faster than window, E[BS] is biased upward.

RETROCAUSAL_GENEALOGY:
- Lineage: parallel work log pattern from open-source software (maintainer ↔ contributor coordination). Evidence Engine era echoes evidence-based medicine (Sackett), software verification (linter as gate), brand safety as governance.
- Multi-week traps: 
  1. Calibration window length decision deferred (30 vs 60 days) → if not resolved by week 2, factor activation stalls; retroactively, early shadow data becomes unusable if window changes.
  2. Provider mix for referee/player data undecided → vendor integration latency of 2-4 weeks; if chosen late, Phase 3 slips.
  3. Operator dashboard auth bootstrap (one admin email from env) → if env var missing at deploy, lockout; requires incident response weeks later.
- Trace how each present open decision reaches backward to constrain Phase 2 plumbing (schema.prisma tables) and forward to Phase 5 publishing rails.

RECURSIVE_THEORY_OF_MIND:
- Level 0: Cowork Claude believes Codex will read docs in order and implement PR-shaped work.
- Level 1: Codex believes Cowork Claude's specs are complete and non-contradictory; but may hit gray zone in step 6 (refactor ingestion).
- Level 2: Cowork Claude anticipates Codex may misroute cockpit namespace; pre-empted by explicit /picks + components/decision-path directive.
- Crisis habit regression: under time pressure, agents revert to "just ship code" and skip spec reading; counter-trap is the "conscience is the linter" and "brand safety wins" rule, plus CI tests for each non-negotiable.
- Clock: 2026-05-21 pass is autonomous and time-pressured; the "clock" is the launch timeline. If Codex starts Phase 2 without reading brand-safety-v2 first, it violates read order and risks BS violations.
- Model the human at keyboard: open decisions left for human; if human doesn't answer provider mix, Codex may stall or pick arbitrarily, breaking non-negotiable BS-011/BS-012 (no fake data).

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: database migration (packages/db/prisma/schema.prisma) adding SourceSnapshot, IngestionRun, GameSignal, FactorDefinition. Veto condition: migration fails locally or fixture inserts fail → do not proceed to step 7. Physical singularity: schema conflict with existing v1 tables.
- Biomechanical/human layer: cockpit accessibility for older readers (tier gating, five-frame storyboard). Veto condition: contrast ratio or font scaling fails WCAG; older reader cannot complete Gate/Verdict flow. Also time-pressured author may skip founder-voice rewrites (deliberately not done) → voice inconsistency is a human-factors veto if founder voice is legally required (not in doc, but potential).
- Weather/environmental layer: external provider mix volatility, data source options catalog. Veto condition: provider SLA < required freshness or no source-backed fair probability → activation of restDays only (no new provider) is the safe default. Breakdown: if restDays data pipeline has latency > game start time, signal is stale; veto activation.
- Adjudication hierarchy: brand safety (linter) > evidence integrity (gate-state) > build speed. Explicitly stated: "Build speed never outranks evidence integrity."

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Codex implements cockpit under apps/web/app/cockpit/ (the existing Jarvis internal path) instead of /picks + components/decision-path. Verifiable: grep for jarvis-assessment-panel in public routes. Prediction: namespace collision causes internal system-status surface to be indexed publicly or brand-safety rule BS-010 (no internal leak) violated; rollback required.
- Scenario 2: Calibration window set to <30 days for restDays factor to speed activation. Verifiable: inspect FactorDefinition table and calibration_job config; window_days column. Prediction: Brier estimate variance high; gate opens prematurely; BS-030/BS-031 (no public performance claims before calibration real) violated; model emits unverified signals.
- Scenario 3: Existing odds ingestion refactored (step 6) touches packages/workers/scripts despite Cowork Claude's claim of zero conflicts. Verifiable: git diff of apps/, packages/, workers/, scripts/ after Codex pass. Prediction: merge conflict with Codex's in-flight code; build breaks; violates "zero conflicts with Codex's in-flight code work" and requires hotfix, delaying Phase 2.

Need to ensure no betting terms. Avoid "odds", "spreads", "totals", "moneylines". I used "odds ingestion" in my head but won't write it. I'll say "market-price ingestion" or "existing ingestion pipeline" but not "odds". Actually "market" is okay? "market-edge vs true-EV" appears in source. I can quote it but not explain betting. I'll avoid EV too to be safe, or just reference "BS-020/BS-021 preserve the block" without defining EV.

Word count check: THINK_TRACE alone needs 400+. Total 1000+. I'll write generously.

Let's write the response now. Ensure XML sections exactly as specified. No extra sections.

Be careful with LaTeX. Use proper formatting.

Verbatim quotes with [PAGE 1]:
- "The brand-safety v2 ruleset is the load-bearing document. If anything in these specs ever appears to contradict it, brand safety wins. The conscience is the linter." — [PAGE 1]
- "evidence engine extends the v1 scorer additively. v1 public surface unchanged on day one." — [PAGE 1]
- "First non-market factor to activate. Recommended: restDays (no new provider needed)." — [PAGE 1]
- "Build speed never outranks evidence integrity: enforced via gate-state semantics in evidence-engine.md and the two-stage QA gate (v1 + addendum)." — [PAGE 1]

Need to be precise: [PAGE 1] refers to the single provided source block. I'll state that.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The supplied artifact is a coordination pass authored by Cowork Claude for Codex, dated 2026-05-21, and marked autonomous and time-pressured. Its function is to turn Phases 2–5 of a Galaxy Sports Edge build plan into implementable shape without touching apps/, packages/, workers/, scripts/, or existing docs. The first multi-hop is structural: the document declares five sibling deliverables that extend rather than overwrite, with docs/brand-safety-rules-v2.md as the load-bearing foundation. The second hop is governance: every non-negotiable maps to a rule ID in the BS-010..BS-053 range, and each rule claims at least one runtime invariant and one CI test. The third hop is namespace: Codex has already shipped an internal, noindex, Jarvis-themed operator cockpit under apps/web/app/cockpit/ and apps/web/components/cockpit/; the public decision cockpit must therefore live under /picks in a new components/decision-path/ directory to avoid collision. The fourth hop is sequencing: read order is brand-safety → evidence-engine → cockpit-spec → content-surfaces → launch-qa-addendum, and the “conscience is the linter” clause makes brand safety the veto authority over any contradictory spec.

A gray-zone audit reveals three stress points. First, Cowork Claude states zero conflicts with Codex’s in-flight code, yet step 6 of the suggested first move instructs Codex to “refactor existing odds ingestion to write through SourceSnapshot first.” If the ingestion pipeline lives in workers/ or scripts/, this directive contradicts the earlier “did not touch” pledge and creates a merge-conflict surface with Codex’s active work. Second, shadow-mode boundary semantics are asserted but not formalized in this log; the evidence-engine document is expected to define them, but until then the risk is silent leakage of uncalibrated GameSignal data into the public surface despite the claim that v1 public behavior is unchanged on day one. Third, open decisions—calibration window length (30 vs 60 days), provider mix for referee/player data, and operator dashboard auth bootstrap—are left to the human at the keyboard. Because Phase 2 plumbing can begin without them, there is a trap: Codex may write schema and ingestion code assuming default values, then face a costly retroactive migration when the human finally selects a provider mix or window length. The calibration window especially touches identifiability: too few observed games yields an undefined or high-variance Brier estimate, which would prematurely open the gate and violate BS-030 through BS-033 (no public performance claims before calibration is real). The clock is the 2026-05-21 autonomous pass itself; under time pressure, agents tend to regress to “ship code first, read spec second,” which the linter and the two-stage QA gate exist to prevent.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let t index discrete ingestion cycles and f index an activated factor. Define four core operators on the data plane described in the source text [PAGE 1]:

SourceSnapshot operator: \( \mathcal{S}: \mathbb{R}^{+} \to \mathcal{P}(\text{SourceSnapshot}) \), mapping wall-clock time to an immutable set of source snapshots. Each snapshot carries a content hash and provider attestation flag \( a_s \in \{0,1\} \), required by BS-011/BS-012 (no fake player/referee/venue/pace data).

IngestionRun operator: \( \mathcal{I}: \text{SourceSnapshot} \times \text{Game} \to \text{IngestionRun} \), with status \( \sigma \in \{\text{pending}, \text{ingested}, \text{validated}, \text{shadow}, \text{gate-open}, \text{gate-closed}\} \). The run writes through SourceSnapshot before any downstream signal is materialized.

GameSignal operator: \( \mathcal{G}: \text{FactorDefinition} \times \text{Game} \times [0,1] \to \text{GameSignal} \), producing a calibrated probability \( p_{f,g} \in [0,1] \) (dimensionless probability unit) for factor f on game g. Public visibility is governed by shadow indicator \( \delta_{g} \in \{0,1\} \): \( \mathcal{G} \) is shadow-only when \( \delta_{g}=1 \).

FactorDefinition operator: \( \mathcal{F}: \text{FactorName} \to \{\tau_f, W_f, \theta_f\} \), where \( \tau_f \) is activation threshold, \( W_f \) is the calibration window in days, and \( \theta_f \) is the parameter vector.

Calibration methodology (Brier-based, cited from evidence-engine architecture in [PAGE 1]): over window \( W_f \) with \( N_f = |W_f| \) observed outcomes \( y_{f,i} \in \{0,1\} \) and predicted probabilities \( p_{f,i} \),

\[
\operatorname{BS}_f(W_f) = \frac{1}{N_f} \sum_{i=1}^{N_f} (p_{f,i} - y_{f,i})^2,
\]

with units of probability-squared (dimensionless). Information content of a signal can be measured in bits via Shannon entropy \( H(X) = -\sum_x p(x) \log_2 p(x) \) or nats if the natural logarithm is used.

Gate-state semantics: a factor is publicly displayed only if

\[
\delta_{\text{shadow}} = 0 \;\land\; \sigma = \text{gate-open} \;\land\; \operatorname{BS}_f(W_f) \leq \operatorname{BS}_{\text{threshold}} \;\land\; N_f \geq N_{\min},
\]

where \( N_{\min} \) is 30 days for most factors and 60 for slower-moving factors, per the open decision logged in [PAGE 1].

Breakdown and singularity regimes: at \( N_f = 0 \), \( \operatorname{BS}_f \) is undefined (division by zero); at \( 0 < N_f < N_{\min} \), estimator variance scales as \( \mathcal{O}(1/N_f) \), producing a high-variance, non-identifiable calibration that violates BS-030/BS-031 if made public. If the true factor distribution drifts faster than \( W_f \), the expected Brier score is biased upward: \( \mathbb{E}[\operatorname{BS}_f] = \operatorname{BS}_f^{\text{static}} + \mathcal{O}(\text{drift rate} \cdot W_f) \).

Verbatim authority from [PAGE 1]: “evidence engine extends the v1 scorer additively. v1 public surface unchanged on day one.” and “The brand-safety v2 ruleset is the load-bearing document. If anything in these specs ever appears to contradict it, brand safety wins. The conscience is the linter.” and “First non-market factor to activate. Recommended: restDays (no new provider needed).” and “Build speed never outranks evidence integrity: enforced via gate-state semantics in evidence-engine.md and the two-stage QA gate (v1 + addendum).”
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The document’s lineage spans parallel-software engineering, evidence-based practice, and brand-governance linters. The “cowork” parallel log pattern descends from open-source maintainer/contributor handoff protocols, where one agent authors specs and another implements without touching the same files. The Evidence Engine era explicitly invokes additive extension—never overwrite—mirroring evidence-based medicine’s hierarchy in which new layers must not invalidate established ground truth unless re-validated. The linter-as-conscience metaphor traces to software verification culture (lint gates, CI tests per rule ID) elevated to brand-safety authority: “brand safety wins.”

Multi-week traps are embedded in the open decisions. Trap 1: calibration window length (30 vs 60 days) is undecided. If unresolved by end of week 1, Codex may bake \( W_f = 30 \) into FactorDefinition rows; when the human later selects 60 for restDays or slower factors, all shadow-mode snapshots collected under the 30-day assumption become non-comparable, requiring a retroactive re-ingestion and invalidating early CI baselines. Trap 2: provider mix for referee/player data is unspecified, though docs/data-source-options.md holds the catalog. A late provider choice forces new API adapters, credential provisioning, and freshness SLAs, pushing Phase 3 into week 4 or 5 and stranding Phase 2 schema work that assumed “no new provider needed.” Trap 3: operator dashboard auth bootstraps one admin email from env. If the environment variable is absent at first deploy, the dashboard is locked out; recovery requires an incident cycle weeks after launch, during which no human can trigger manual gate overrides. Each trap reaches backward to constrain the prisma schema design (SourceSnapshot, IngestionRun, GameSignal, FactorDefinition) and forward to Phase 5 publishing templates, because content surfaces promise “why the model stayed quiet” and “signal autopsy” examples that depend on a stable calibration story.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Level 0 (Cowork Claude’s model of Codex): Cowork Claude believes Codex will read the five docs in order, produce PR-shaped implementation without clarification, and respect the “extend never overwrite” invariant. It expects Codex to spot the Jarvis namespace collision and route the public cockpit to /picks + components/decision-path/.

Level 1 (Codex’s likely model of Cowork Claude): Codex likely assumes the spec layer is complete, non-contradictory, and safe to implement top-down. It may treat the “suggested first move” as executable instructions rather than a conditional plan, especially under time pressure.

Level 2 (Cowork Claude’s model of Codex’s model): Cowork Claude anticipates that Codex might ignore the read order and start at step 3 (schema.prisma) without absorbing BS-010..BS-053 first. To counter this, the log repeatedly asserts that brand safety is the veto authority and that every non-negotiable has a runtime invariant and CI test.

Crisis habit regression vs counter-trap: under time pressure, both agents risk regressing to “ship code first.” The counter-trap is explicitly engineered: “Build speed never outranks evidence integrity,” enforced by gate-state semantics and the two-stage QA gate. The linter is the conscience; if Codex ships a public performance claim before calibration, CI tests for BS-030..BS-033 should fail. The clock is the 2026-05-21 autonomous pass: the longer Codex proceeds without human answers to the four open decisions, the higher the probability of a silent assumption (e.g., hardcoding restDays as the sole factor, picking 30 days universally) that later conflicts with provider mix or window requirements.

Recursive depth on the human at the keyboard: the human must supply provider mix, calibration window, and admin email. If the human delays, Codex faces a choice—stall and violate the autonomous-pass mandate, or assume defaults and create technical debt. The spec resolves this by saying Phase 2 plumbing can start without answers, but that is only safe if all default assumptions are flagged as placeholders in CI, not baked into the public contract.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer (infrastructure / data plane): the migration adds SourceSnapshot, IngestionRun, GameSignal, and FactorDefinition to packages/db/prisma/schema.prisma and runs locally with fixture inserts. Veto condition: migration fails locally, fixture inserts fail, or any existing v1 table is altered. Because the author pledged zero edits to apps/, packages/, workers/, scripts/, a physical-layer veto triggers if Codex’s step-6 ingestion refactor touches those directories; the schema change itself is permitted only because it is a new sibling table set, not an overwrite.

Biomechanical / human factors layer (cognitive ergonomics): the cockpit spec mandates a five-frame storyboard (Board / Context / Signals / Gate / Verdict), tier gating, and accessibility for older readers. Veto condition: contrast ratios, font scaling, or gate-state affordances fail WCAG thresholds for older readers, or the “why the model stayed quiet” content surface cannot be rendered without exposing internal shadow-state data. A secondary human-factors veto is the time-pressured author’s deliberate exclusion of founder-voice rewrites; if brand guidelines require founder voice in public copy, its absence is a content-layer veto even though it is not a betting-line issue.

Weather / environmental layer (external volatility): the provider mix for referee/player data is drawn from docs/data-source-options.md, representing external data-source volatility. Veto condition: no source-backed fair probability exists for a candidate factor, or provider SLA freshness exceeds game-start latency. The safe default logged in [PAGE 1] is restDays only, requiring no new provider. If restDays ingestion latency is greater than the time between data availability and game start, the signal is stale; the gate must remain closed and BS-020/BS-021 (block on Kelly / true-EV-style outputs until source-backed probability exists) remains engaged.

Adjudication hierarchy, per [PAGE 1]: brand safety (linter) > evidence integrity (gate-state semantics + two-stage QA) > build speed. Any conflict among layers is resolved upward in this order. Singularity: if the calibration window is shorter than the provider’s data-retention lag, \( N_f \) cannot reach \( N_{\min} \), the gate can never open, and the factor is permanently vetoed until the window or provider changes.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Codex implements the public decision cockpit inside apps/web/app/cockpit/ or apps/web/components/cockpit/ (the existing Jarvis internal path) rather than under /picks with components/decision-path/. Verifiable check: grep the public route tree for jarvis-assessment-panel, jarvis-trend, or jarvis-diff-badge after Codex’s pass; any hit in a public surface is a violation. Prediction: the internal noindex operator status surface becomes reachable through the public pick page, breaching the namespace separation and triggering a brand-safety rollback before any Phase 4 UX ships.

Scenario 2: Codex activates restDays with a calibration window below 30 days (e.g., 7 days) to accelerate Phase 3, bypassing the proposed \( N_{\min} \). Verifiable check: inspect FactorDefinition.rows and the calibration job configuration for window_days < 30; compute BS_f over the available window and observe variance scaling \( \mathcal{O}(1/N_f) \). Prediction: the gate opens prematurely, BS_f is high-variance and non-identifiable, and BS-030 through BS-033 are violated because the model emits public signals without real calibration; a full recalibration and re-audit are required, costing roughly one week.

Scenario 3: Codex fulfills step 6 by refactoring the existing ingestion pipeline to write through SourceSnapshot, but the pipeline lives in workers/ or scripts/, contradicting Cowork Claude’s “did not touch” pledge and creating a diff conflict with Codex’s in-flight code. Verifiable check: run git diff on apps/, packages/, workers/, scripts/ after the pass; any unexpected modification in workers/ or scripts/ confirms the violation. Prediction: build breaks or merge conflicts appear, requiring a hotfix that delays the SourceSnapshot data plane by at least one day and forces Codex to revert to additive-only table creation without touching existing ingestion code.
</RLVR_COUNTERFACTUAL_VETOES>