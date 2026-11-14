---
source: "CONTRIBUTING.md"
folder: "/CorpusRoot/PC-offload/OneDrive/Documents/Galaxy Sports Edge Launch Ready"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4841
---

<NATIVE_REASONING>
The user wants me to act as the GSE + GSI Frontier Reasoning Foundry and analyze a source document (CONTRIBUTING.md from a Sports Intelligence OS project). I need to produce output with strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force / Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines whatsoever.
- No toy equations.
- Must cite [PAGE 1] since only 1 page provided.
- Must use verbatim quotes from source.
- Must be formal LaTeX equations where applicable.
- Must cover all sections.
- Total >= 1000 words across sections.

Let me analyze the source text deeply.

Source: CONTRIBUTING.md (PAGE 1). It's about a Sports Intelligence OS platform with trust-first invariants enforced by CI.

Key points:
1. No fabricated data on customer surfaces - must source from evaluatePublicPerformancePolicy() in apps/web/lib/performance/public-performance-policy.ts or server-side gated by getReadinessGates().
2. No banned phrases on public copy - trust-claims.ts registry, public-copy-scanner.test.ts + public-copy-scan-strong.test.ts fail CI.
3. Bootstrap picks never count toward public performance - isBootstrap: false required.
4. Performance gate is only way to expose public win rate - PERFORMANCE_STATS_ENABLED=false default means no customer surface displays record.
5. No auto-publish - drafts require explicit operator action, draft-only CI guardrail looks for status: "PUBLISHED" writes outside explicit publish path.
6. MODEL_VERSION can only move alongside implemented CalibrationProposal - model-freeze guardrail.
7. Cockpit and admin pages are ADMIN-gated - cockpit-routes test.
8. No top-level await db.* in cockpit pages - stub mode must render, cockpit-stub-safety.test.ts.

Where to look when CI fails table.
Adding new customer-facing claim process.
Touching existing trust-claim - bump lastReviewedAt, 365 days freshness test.
Adding new cockpit page process.
Local validation commands.
Further reading.

Now I need to map this to the required XML sections. Since this is a software governance document, not a sports betting document, I need to be careful not to mention betting lines. The document itself doesn't mention betting lines, so that's easy.

For SOURCE_OPERATORS_AND_EQUATIONS: I need formal LaTeX equations. Since this is about software governance/trust gates, I can model the trust system mathematically:
- Let P be the set of public customer-facing pages.
- Let C ⊆ P be pages displaying claims/records.
- Define gate function G: P → {0,1} where G(p) = 1 iff p is gated by evaluatePublicPerformancePolicy() or getReadinessGates().
- Invariant: ∀ p ∈ C, G(p) = 1.
- Bootstrap exclusion: Let B be bootstrap picks, isBootstrap: false enforced as predicate β(q) = (q.isBootstrap == false).
- Performance stats flag: PERFORMANCE_STATS_ENABLED ∈ {0,1}, default 0. If 0, ∀ p ∈ P, no record displayed.
- Model version: MODEL_VERSION can increment only if ∃ implemented CalibrationProposal.
- Freshness: lastReviewedAt must be within 365 days of touch.

Units: information units (bits), probability units (dimensionless [0,1]), time units (days), boolean states.

Singularity/breakdown regimes: when PERFORMANCE_STATS_ENABLED=false but legacy code bypasses gate; when isBootstrap flag omitted; when lastReviewedAt > 365 days; when top-level await db.* causes cockpit stub failure.

Cite [PAGE 1] with verbatim quotes.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss how the invariants interact, gray zones (e.g., "not strictly required" reference by ID, draft-only vs explicit publish path ambiguity, bootstrap vs non-bootstrap contamination, model-freeze vs calibration proposal implementation threshold, ADMIN gating scope, stub mode vs production DB calls). Multi-hop: if claim added to TRUST_CLAIMS but not referenced, audit trail weak; if lastReviewedAt not bumped, freshness test fails everyone's PRs; if bootstrap picks leak, win rates inflated; if PERFORMANCE_STATS_ENABLED flipped prematurely, unverified records exposed.

RETROCAUSAL_GENEALOGY: Historical lineage - software governance, CI guardrails, trust-by-design, similar to SOC2, ISO, MLOps model registry, deployment gates. Multi-week traps: freshness test cascade (365 days), model-freeze accumulation of unimplemented proposals, draft-only technical debt, bootstrap data leakage over time.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression - under pressure, operators might skip explicit publish, bump dates incorrectly, omit isBootstrap. Counter-trap - automated CI catches it, but human might try to bypass. Clock - 365-day freshness, CI cycles, deployment windows.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof - this section is odd for a software doc, but I need to interpret it. Since no physical/biomechanical/weather data is in source, I must state null set / not applicable, or map metaphorically: "physical layer" = server infrastructure, "biomechanical" = human operator CI interaction, "weather" = external dependency volatility. But the instruction says "Physical/biomechanical/weather veto proof." I should address that the source contains zero physical/biomechanical/weather variables, so veto adjacency is null; however, operator fatigue (biomechanical proxy) and CI/CD pipeline weather (network flakiness) can create veto failures. I must not invent fake equations.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll define 3 counterfactual veto scenarios:
1. Veto: PERFORMANCE_STATS_ENABLED=true before canonical history; prediction: CI brand-safety fails, no customer record displayed because gate blocks.
2. Veto: isBootstrap: false omitted in pick query feeding dashboard; prediction: public-copy-scanner or dashboard-performance-gate test fails, bootstrap win rate excluded.
3. Veto: top-level await db.* in cockpit page without .catch(); prediction: cockpit-stub-safety.test.ts fails, stub mode does not render.

Need to ensure total words >= 1000 across sections. Let's aim for ~200-250 words per section minimum, with THINK_TRACE >= 400.

Let's draft carefully.

Word count planning:
- THINK_TRACE: ~450 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~250 words
- RETROCAUSAL_GENEALOGY: ~200 words
- RECURSIVE_THEORY_OF_MIND: ~200 words
- CROSS_LAYER_VETO_ADJUDICATION: ~150 words
- RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total ~1450. Good.

No betting lines: check. No spreads, totals, moneylines, odds.
No toy equations: no Force/Fatigue. Use formal set theory, boolean logic, LaTeX.
Citations: [PAGE 1] with verbatim quotes.

Let's write.

Need verbatim quotes from source. I'll quote several lines exactly.

Quotes:
- "No fabricated data on customer surfaces."
- "Every customer-facing page that shows a record, win-rate, or claim must source it from `evaluatePublicPerformancePolicy()` in `apps/web/lib/performance/public-performance-policy.ts` (or be server-side gated by `getReadinessGates()`)."
- "Bootstrap picks never count toward public performance."
- "Pick queries that feed customer surfaces must include `isBootstrap: false`."
- "`PERFORMANCE_STATS_ENABLED=false` (the default) means *no* customer surface displays a record."
- "No auto-publish."
- "`draft-only` CI guardrail walks the codebase looking for `status: "PUBLISHED"` writes outside the explicit publish path."
- "MODEL_VERSION can only move alongside an IMPLEMENTED CalibrationProposal."
- "Cockpit and admin pages are ADMIN-gated."
- "No top-level `await db.*` in cockpit pages. Stub mode must always render."
- "The `trust-claims.test.ts` freshness test fails CI once a claim's `lastReviewedAt` is more than 365 days old"

Now LaTeX equations:

Define:
- \mathcal{P} = set of public customer-facing pages.
- \mathcal{C} \subseteq \mathcal{P} = pages rendering a record, win-rate, or claim.
- Gate predicate: \Gamma(p) = 1 \iff p \text{ is sourced by } \texttt{evaluatePublicPerformancePolicy()} \lor \texttt{getReadinessGates()}.
- Invariant I_1: \forall p \in \mathcal{C}, \Gamma(p) = 1.
- Query set \mathcal{Q}; bootstrap predicate \beta(q) = (q.\texttt{isBootstrap} == \texttt{false}).
- Invariant I_3: \forall q \in \mathcal{Q}_{\text{customer}}, \beta(q) = 1.
- Performance gate state: \sigma \in \{0,1\}, \sigma = \texttt{PERFORMANCE\_STATS\_ENABLED}. Default \sigma_0 = 0.
- Invariant I_4: \sigma = 0 \implies \forall p \in \mathcal{P}, \neg \text{displaysRecord}(p).
- Model version: \nu \in \mathbb{N}; proposal set \Pi. Invariant I_6: \nu_{t+1} > \nu_t \implies \exists \pi \in \Pi : \pi.\texttt{status} = \texttt{IMPLEMENTED}.
- Freshness: \tau = \text{today} - \texttt{lastReviewedAt}. Invariant I_{fresh}: \text{touch}(\text{claim}) \implies \tau \le 365 \text{ days}.

Breakdown/singularity regimes:
- \sigma = 1 with empty canonical history: record exposure singularity.
- \beta(q) omitted: bootstrap contamination.
- \tau > 365: freshness test cascade failure.
- Top-level \texttt{await db.*} in cockpit: stub render failure (Singularity S_{db}).

Units: dimensionless booleans, days (d), page count (count), version (semantic, dimensionless counter).

Now write sections.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit.
Start with source page 1. Derive trust graph. Gray zones:
- "Reference the claim by ID ... not strictly required" creates audit-trail entropy.
- "Flip it only when canonical history has accumulated" lacks formal threshold for accumulation.
- ADMIN-gated layout enforcement vs individual page check (delegation risk).
- Stub mode vs production DB: .catch() wrapper pattern is convention, not type-enforced.
- Draft-only vs explicit publish path: what constitutes "explicit" is operator-defined, CI walks for status:"PUBLISHED" writes.
- 365 days freshness: touching without bumping creates time-bomb for other PRs.
Multi-hop: If operator adds claim to TRUST_CLAIMS with status APPROVED but forgets SCAN_TARGETS, public-copy-scan-strong may not catch it if page not covered. If lastReviewedAt not bumped, trust-claims.test.ts fails after 365 days, blocking unrelated PRs (cascade). If isBootstrap omitted, win rates inflated, violating I_1 and I_3.

SOURCE_OPERATORS_AND_EQUATIONS: formalism, units, citations [PAGE 1].

RETROCAUSAL_GENEALOGY: lineage: CI-enforced invariants, trust-by-design, MLOps model registry, deployment gates, SOC2-like controls. Multi-week traps: 365-day freshness (temporal trap), model-freeze backlog (proposal debt), draft-only technical debt, bootstrap leakage over weeks.

RECURSIVE_THEORY_OF_MIND: crisis habit regression: under incident pressure, operator might set PERFORMANCE_STATS_ENABLED=true prematurely, skip .catch(), forget lastReviewedAt bump. Counter-trap: CI guardrails are recursive (they check the checkers). Clock: 365 days, CI cycle time, deployment window.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer = servers/CDN; biomechanical = human operator; weather = network/CDN flakiness. Source contains zero meteorological/biomechanical variables. Veto proof: software invariants are layer-independent; physical/weather outages do not bypass code gates because CI runs on deterministic static analysis. However, human fatigue (biomechanical proxy) can lead to invariant bypass attempts; CI is the hard veto.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios with predictions.

Make sure not to mention any betting terms. Words like "win-rate" appear in source; that's okay because it's in source and not a betting line per se, but I should be careful. The user said no betting lines (spreads, totals, moneylines, odds). "Win-rate" is from source and not one of those, so okay. But I won't discuss betting.

Let's compose final output with exact XML tags. No markdown outside? The user wants XML sections. I'll provide only the XML sections, maybe with a brief intro? Better to just provide the sections to be safe. But I need to ensure >=1000 words.

Let's write.

Section 1: THINK_TRACE (>=400 words). I'll write about 480 words.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS (~250 words).

Section 3: RETROCAUSAL_GENEALOGY (~200 words).

Section 4: RECURSIVE_THEORY_OF_MIND (~200 words).

Section 5: CROSS_LAYER_VETO_ADJUDICATION (~150 words).

Section 6: RLVR_COUNTERFACTUAL_VETOES (~200 words).

Total ~1480 words.

Citations: [PAGE 1] after quotes.

Check for verbatim quotes. Use backticks inside quotes? The source uses backticks. I'll quote exactly including backticks where appropriate, but XML might treat backticks fine.

Need to avoid "<" and ">" inside text that could break XML? The sections are XML-like but content can have LaTeX with \leq, etc. Using < in LaTeX might be parsed as tag. Better to use \le or \lt. Avoid raw < in text. Use "less than" or \le.

Also avoid raw & maybe. Use "and".

Let's draft now.

THINK_TRACE content:

The source document on PAGE 1 establishes a closed-loop trust governance system for a Sports Intelligence OS. The first non-negotiable rule, quoted verbatim, states: "No fabricated data on customer surfaces." It immediately binds every customer-facing page that shows a record, win-rate, or claim to `evaluatePublicPerformancePolicy()` in `apps/web/lib/performance/public-performance-policy.ts`, or to server-side gating by `getReadinessGates()` [PAGE 1]. This creates a directed dependency: content rendering must be posterior to policy evaluation.

A multi-hop derivation follows. Let \mathcal{P} be the universe of public pages and \mathcal{C} \subseteq \mathcal{P} the subset rendering performance claims. The gate predicate \Gamma(p) = 1 iff p is sourced by the approved policy function or readiness gate. Invariant: \forall p \in \mathcal{C}, \Gamma(p) = 1. If a developer adds a claim to TRUST_CLAIMS but omits the page from SCAN_TARGETS in `public-copy-scan-strong.test.ts`, the static scanner loses coverage, creating a gray zone where a claim can render without audit-trace linkage [PAGE 1]. The document admits referencing the claim ID is "not strictly required," which introduces epistemic slack: the system functions, but the provenance chain is optional rather than structural.

The bootstrap rule compounds this. PAGE 1 declares: "Bootstrap picks never count toward public performance" and requires pick queries feeding customer surfaces to include `isBootstrap: false` [PAGE 1]. A query that omits this flag leaks synthetic or seed data into the public win-rate surface, violating both the no-fabrication rule and the performance gate. The performance gate itself is gated by a boolean: "`PERFORMANCE_STATS_ENABLED=false` (the default) means *no* customer surface displays a record" [PAGE 1]. Flipping this flag before canonical history accumulates is a regime change with no formal accumulation threshold specified in the source, representing a semantic singularity.

The model-freeze invariant adds a temporal dependency: "MODEL_VERSION can only move alongside an IMPLEMENTED CalibrationProposal" [PAGE 1]. This couples version control to implementation evidence, but the source does not define what counts as "implemented" beyond the guardrail script `scripts/guardrails/model-freeze.mjs`. The cockpit rules impose ADMIN gating and forbid top-level `await db.*`, requiring stub mode to always render [PAGE 1]. The gray zone here is operator-dependent: `.catch()` wrapping is a convention, not a type-system guarantee.

Finally, the freshness rule creates a cascading time bomb: touching a trust claim without bumping `lastReviewedAt` eventually fails `trust-claims.test.ts` once the field exceeds 365 days, blocking unrelated PRs [PAGE 1]. This is a multi-week trap masquerading as hygiene.

SOURCE_OPERATORS_AND_EQUATIONS:

Formal state space and operators, units, and breakdown regimes, cited to [PAGE 1].

Define public page set \mathcal{P}, claim set \mathcal{C} \subseteq \mathcal{P}. Gate operator:
\Gamma(p) = \begin{cases} 1 & \text{if } p \text{ sourced by } \texttt{evaluatePublicPerformancePolicy()} \lor \texttt{getReadinessGates()} \\ 0 & \text{otherwise} \end{cases}
Invariant I_1 [PAGE 1]: \forall p \in \mathcal{C}, \Gamma(p) = 1. Unit: dimensionless boolean.

Query operator \mathcal{Q}; bootstrap mask \beta(q) = \mathbb{I}[q.\texttt{isBootstrap} == \texttt{false}]. Invariant I_3 [PAGE 1]: \forall q \in \mathcal{Q}_{\text{customer}}, \beta(q) = 1. Unit: dimensionless indicator.

Performance gate state \sigma = \texttt{PERFORMANCE\_STATS\_ENABLED} \in \{0,1\}, default \sigma_0 = 0 [PAGE 1]. Invariant I_4: \sigma = 0 \implies \forall p \in \mathcal{P}, \text{displaysRecord}(p) = \text{false}. Unit: dimensionless switch.

Model version \nu \in \mathbb{N}_0; proposal set \Pi. Invariant I_6 [PAGE 1]: \nu_{t+1} > \nu_t \implies \exists \pi \in \Pi : \pi.\texttt{status} = \texttt{IMPLEMENTED}.

Freshness operator \tau = t_{\text{now}} - \texttt{lastReviewedAt} measured in days (d). Invariant I_{fresh}: \text{touch}(\text{claim}) \implies \texttt{lastReviewedAt} \gets t_{\text{now}} \land \tau \le 365\,\text{d} [PAGE 1].

Breakdown/singularity regimes:
S_1: \sigma = 1 with empty canonical history → unauthorized record exposure.
S_2: \beta(q) = 0 omitted → bootstrap contamination of public performance.
S_3: \tau > 365\,\text{d} → freshness-test cascade failure, CI blocks all PRs.
S_4: top-level \texttt{await db.*} in cockpit without \texttt{.catch()} → stub render failure [PAGE 1].

RETROCAUSAL_GENEALOGY:

Historical lineage: The invariants on PAGE 1 descend from continuous-integration governance, trust-by-design product principles, and MLOps model-registry practices. The `model-freeze` guardrail mirrors semantic versioning coupled to evidence artifacts, analogous to regulated ML deployment where version bumps require validation artifacts. The `draft-only` guardrail and explicit publish path resemble change-management controls found in SOC2-type environments, where production state changes require human authorization.

Multi-week traps: The 365-day freshness rule [PAGE 1] is a temporal trap. A claim touched in week 1 without a date bump remains dormant until week 52, when `trust-claims.test.ts` begins failing and blocks every subsequent PR, including unrelated features. This is a delayed-action failure mode: the causal agent (missing bump) precedes the symptom by nearly a year. The model-freeze rule creates a proposal backlog trap: unimplemented CalibrationProposals accumulate, freezing MODEL_VERSION indefinitely and stalling legitimate model improvements. Bootstrap data leakage is a slow contamination trap: seed picks ingested over weeks silently inflate apparent performance until an audit discovers the missing `isBootstrap: false` predicate [PAGE 1]. Draft-only debt accumulates when operators bypass the explicit publish path, leaving `status: "PUBLISHED"` writes scattered outside the guardrail's visibility [PAGE 1].

RETROCAUSAL_GENEALOGY ends by noting that these traps are retro-causally visible: the CI failure in week 52 points back to a single omitted bump in week 1, forcing genealogical debugging across time.

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: Under incident pressure, an operator may regress to ad-hoc habits: setting \sigma = 1 prematurely to display a record, skipping the `.catch()` wrapper on cockpit DB calls, or editing trust-claim copy without resetting `lastReviewedAt`. PAGE 1 warns that touching a claim without bumping the date "eventually fails everyone else's PRs too" [PAGE 1], indicating that individual cognitive lapses become systemic blockers.

Counter-trap: The CI guardrails are recursive because they inspect the inspection mechanisms. `public-copy-scanner.test.ts` and `public-copy-scan-strong.test.ts` fail CI if banned phrases appear [PAGE 1]; `cockpit-routes.test.ts` verifies ADMIN gating on every cockpit page and API route [PAGE 1]; `cockpit-stub-safety.test.ts` enforces stub rendering [PAGE 1]. These tests model the operator's potential mistakes and pre-commit to rejecting them.

Clock: The system operates on multiple clocks. CI cycle time (minutes) catches immediate violations. The 365-day freshness clock [PAGE 1] operates on a quarterly-to-annual scale, far beyond typical sprint memory. Model version movement is gated on proposal implementation, an event-driven clock rather than a calendar clock. Deployment windows create a fourth clock: `PERFORMANCE_STATS_ENABLED` may only be flipped when canonical history has accumulated [PAGE 1], linking the gate to data accrual time rather than operator urgency.

RECURSIVE_THEORY_OF_MIND concludes that the architecture assumes operators will regress under pressure, so it externalizes memory into CI and date-stamped claims.

CROSS_LAYER_VETO_ADJUDICATION:

The source document on PAGE 1 contains zero references to physical, biomechanical, or meteorological variables. There are no weather inputs, no athlete biomechanics, and no environmental veto conditions. Therefore the set of physical/biomechanical/weather veto predicates is the null set: \mathcal{V}_{\text{phys}} = \mathcal{V}_{\text{bio}} = \mathcal{V}_{\text{weather}} = \emptyset.

This nullity is itself a finding: the trust invariants are purely software and procedural. Physical layer considerations (server uptime, CDN propagation) do not bypass code gates because CI guardrails execute static analysis on the repository, independent of runtime infrastructure [PAGE 1]. Biomechanical factors, here proxied as human operator fatigue or cognitive load, are mitigated by removing discretionary judgment from hot paths: ADMIN gating is enforced by layout, not by per-page developer checks [PAGE 1]; stub mode must always render, removing the need for live DB availability during cockpit development [PAGE 1]. Weather or network flakiness cannot cause a `status: "PUBLISHED"` write to evade the `draft-only` guardrail, because that guardrail walks the codebase statically [PAGE 1].

Veto proof conclusion: Any veto of a customer-facing claim must originate in the software invariant layer (gate predicate \Gamma, bootstrap mask \beta, performance switch \sigma, or freshness \tau). Physical, biomechanical, or weather vetoes are structurally impossible because no such variables enter the trust equations.

RLVR_COUNTERFACTUAL_VETOES:

Three verifiable counterfactual veto scenarios derived from PAGE 1.

Scenario A: Premature performance activation. Counterfactual: an operator sets \sigma = 1 (`PERFORMANCE_STATS_ENABLED=true`) before canonical history has accumulated. Veto: Invariant I_4 [PAGE 1] and the brand-safety CI job inspect `public-performance-policy` and `dashboard-performance-gate`; the customer surface remains record-free by design. Prediction: `npm test` on `__tests__/dashboard-performance-gate.test.ts` passes, no record renders, and CI blocks release until history eligibility is satisfied.

Scenario B: Bootstrap contamination. Counterfactual: a pick query feeding the dashboard omits `isBootstrap: false`. Veto: Invariant I_3 [PAGE 1] requires the flag on all customer-surface queries. The dashboard, performance, picks, and daily-slate APIs enforce this [PAGE 1]. Prediction: `public-copy-scanner.test.ts` or the relevant API test fails CI; bootstrap picks are excluded from public performance and the inflated win-rate never reaches the customer.

Scenario C: Cockpit DB stub failure. Counterfactual: a new cockpit page contains top-level `await db.*` without `.catch()`. Veto: PAGE 1 mandates stub mode must always render and cites `cockpit-stub-safety.test.ts` [PAGE 1]. Prediction: the test fails, the page does not render in stub mode, and the PR is rejected until the call is wrapped or moved behind the explicit publish/admin path.

Each scenario is verifiable by running the named vitest files listed under Local validation on PAGE 1, and each prediction is a deterministic CI outcome, not a probabilistic wager.

Now check word count. I think it's enough. Let me count roughly:
THINK_TRACE: ~470 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~260 words.
RETROCAUSAL_GENEALOGY: ~210 words.
RECURSIVE_THEORY_OF_MIND: ~210 words.
CROSS_LAYER_VETO_ADJUDICATION: ~180 words.
RLVR_COUNTERFACTUAL_VETOES: ~220 words.
Total ~1550 words. Good.

Ensure no banned phrases like spreads, totals, moneylines, odds. None present.
Ensure LaTeX is formal. Used \mathbb{I}, cases, etc.
Citations [PAGE 1] present.
Verbatim quotes present.

One concern: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I did that.

XML sections exact names. Good.

No markdown code blocks inside? I used backticks for code, which is fine.

I will output only the XML sections. No intro text to keep strict format.
</NATIVE_REASONING>

<THINK_TRACE>
The source document on PAGE 1 establishes a closed-loop trust governance system for a Sports Intelligence OS. The first non-negotiable rule, quoted verbatim, states: "No fabricated data on customer surfaces." It immediately binds every customer-facing page that shows a record, win-rate, or claim to `evaluatePublicPerformancePolicy()` in `apps/web/lib/performance/public-performance-policy.ts`, or to server-side gating by `getReadinessGates()` [PAGE 1]. This creates a directed dependency: content rendering must be posterior to policy evaluation.

A multi-hop derivation follows. Let \mathcal{P} be the universe of public pages and \mathcal{C} \subseteq \mathcal{P} the subset rendering performance claims. The gate predicate \Gamma(p) = 1 iff p is sourced by the approved policy function or readiness gate. Invariant: \forall p \in \mathcal{C}, \Gamma(p) = 1. If a developer adds a claim to TRUST_CLAIMS but omits the page from SCAN_TARGETS in `public-copy-scan-strong.test.ts`, the static scanner loses coverage, creating a gray zone where a claim can render without audit-trace linkage [PAGE 1]. The document admits referencing the claim ID is "not strictly required," which introduces epistemic slack: the system functions, but the provenance chain is optional rather than structural.

The bootstrap rule compounds this. PAGE 1 declares: "Bootstrap picks never count toward public performance" and requires pick queries feeding customer surfaces to include `isBootstrap: false` [PAGE 1]. A query that omits this flag leaks synthetic or seed data into the public win-rate surface, violating both the no-fabrication rule and the performance gate. The performance gate itself is gated by a boolean: "`PERFORMANCE_STATS_ENABLED=false` (the default) means *no* customer surface displays a record" [PAGE 1]. Flipping this flag before canonical history accumulates is a regime change with no formal accumulation threshold specified in the source, representing a semantic singularity.

The model-freeze invariant adds a temporal dependency: "MODEL_VERSION can only move alongside an IMPLEMENTED CalibrationProposal" [PAGE 1]. This couples version control to implementation evidence, but the source does not define what counts as "implemented" beyond the guardrail script `scripts/guardrails/model-freeze.mjs`. The cockpit rules impose ADMIN gating and forbid top-level `await db.*`, requiring stub mode to always render [PAGE 1]. The gray zone here is operator-dependent: `.catch()` wrapping is a convention, not a type-system guarantee.

Finally, the freshness rule creates a cascading time bomb: touching a trust claim without bumping `lastReviewedAt` eventually fails `trust-claims.test.ts` once the field exceeds 365 days, blocking unrelated PRs [PAGE 1]. This is a multi-week trap masquerading as hygiene.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal state space and operators, units, and breakdown regimes, cited to [PAGE 1].

Define public page set \mathcal{P}, claim set \mathcal{C} \subseteq \mathcal{P}. Gate operator:
\Gamma(p) = \begin{cases} 1 & \text{if } p \text{ sourced by } \texttt{evaluatePublicPerformancePolicy()} \lor \texttt{getReadinessGates()} \\ 0 & \text{otherwise} \end{cases}
Invariant I_1 [PAGE 1]: \forall p \in \mathcal{C}, \Gamma(p) = 1. Unit: dimensionless boolean.

Query operator \mathcal{Q}; bootstrap mask \beta(q) = \mathbb{I}[q.\texttt{isBootstrap} == \texttt{false}]. Invariant I_3 [PAGE 1]: \forall q \in \mathcal{Q}_{\text{customer}}, \beta(q) = 1. Unit: dimensionless indicator.

Performance gate state \sigma = \texttt{PERFORMANCE\_STATS\_ENABLED} \in \{0,1\}, default \sigma_0 = 0 [PAGE 1]. Invariant I_4: \sigma = 0 \implies \forall p \in \mathcal{P}, \text{displaysRecord}(p) = \text{false}. Unit: dimensionless switch.

Model version \nu \in \mathbb{N}_0; proposal set \Pi. Invariant I_6 [PAGE 1]: \nu_{t+1} > \nu_t \implies \exists \pi \in \Pi : \pi.\texttt{status} = \texttt{IMPLEMENTED}.

Freshness operator \tau = t_{\text{now}} - \texttt{lastReviewedAt} measured in days (d). Invariant I_{fresh}: \text{touch}(\text{claim}) \implies \texttt{lastReviewedAt} \gets t_{\text{now}} \land \tau \le 365\,\text{d} [PAGE 1].

Breakdown/singularity regimes:
S_1: \sigma = 1 with empty canonical history \rightarrow unauthorized record exposure.
S_2: \beta(q) = 0 omitted \rightarrow bootstrap contamination of public performance.
S_3: \tau > 365\,\text{d} \rightarrow freshness-test cascade failure, CI blocks all PRs.
S_4: top-level \texttt{await db.*} in cockpit without \texttt{.catch()} \rightarrow stub render failure [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical lineage: The invariants on PAGE 1 descend from continuous-integration governance, trust-by-design product principles, and MLOps model-registry practices. The `model-freeze` guardrail mirrors semantic versioning coupled to evidence artifacts, analogous to regulated ML deployment where version bumps require validation artifacts. The `draft-only` guardrail and explicit publish path resemble change-management controls found in SOC2-type environments, where production state changes require human authorization.

Multi-week traps: The 365-day freshness rule [PAGE 1] is a temporal trap. A claim touched in week 1 without a date bump remains dormant until week 52, when `trust-claims.test.ts` begins failing and blocks every subsequent PR, including unrelated features. This is a delayed-action failure mode: the causal agent (missing bump) precedes the symptom by nearly a year. The model-freeze rule creates a proposal backlog trap: unimplemented CalibrationProposals accumulate, freezing MODEL_VERSION indefinitely and stalling legitimate model improvements. Bootstrap data leakage is a slow contamination trap: seed picks ingested over weeks silently inflate apparent performance until an audit discovers the missing `isBootstrap: false` predicate [PAGE 1]. Draft-only debt accumulates when operators bypass the explicit publish path, leaving `status: "PUBLISHED"` writes scattered outside the guardrail's visibility [PAGE 1].

RETROCAUSAL_GENEALOGY ends by noting that these traps are retro-causally visible: the CI failure in week 52 points back to a single omitted bump in week 1, forcing genealogical debugging across time.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under incident pressure, an operator may regress to ad-hoc habits: setting \sigma = 1 prematurely to display a record, skipping the `.catch()` wrapper on cockpit DB calls, or editing trust-claim copy without resetting `lastReviewedAt`. PAGE 1 warns that touching a claim without bumping the date "eventually fails everyone else's PRs too" [PAGE 1], indicating that individual cognitive lapses become systemic blockers.

Counter-trap: The CI guardrails are recursive because they inspect the inspection mechanisms. `public-copy-scanner.test.ts` and `public-copy-scan-strong.test.ts` fail CI if banned phrases appear [PAGE 1]; `cockpit-routes.test.ts` verifies ADMIN gating on every cockpit page and API route [PAGE 1]; `cockpit-stub-safety.test.ts` enforces stub rendering [PAGE 1]. These tests model the operator's potential mistakes and pre-commit to rejecting them.

Clock: The system operates on multiple clocks. CI cycle time (minutes) catches immediate violations. The 365-day freshness clock [PAGE 1] operates on a quarterly-to-annual scale, far beyond typical sprint memory. Model version movement is gated on proposal implementation, an event-driven clock rather than a calendar clock. Deployment windows create a fourth clock: `PERFORMANCE_STATS_ENABLED` may only be flipped when canonical history has accumulated [PAGE 1], linking the gate to data accrual time rather than operator urgency.

RECURSIVE_THEORY_OF_MIND concludes that the architecture assumes operators will regress under pressure, so it externalizes memory into CI and date-stamped claims.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The source document on PAGE 1 contains zero references to physical, biomechanical, or meteorological variables. There are no weather inputs, no athlete biomechanics, and no environmental veto conditions. Therefore the set of physical/biomechanical/weather veto predicates is the null set: \mathcal{V}_{\text{phys}} = \mathcal{V}_{\text{bio}} = \mathcal{V}_{\text{weather}} = \emptyset.

This nullity is itself a finding: the trust invariants are purely software and procedural. Physical layer considerations (server uptime, CDN propagation) do not bypass code gates because CI guardrails execute static analysis on the repository, independent of runtime infrastructure [PAGE 1]. Biomechanical factors, here proxied as human operator fatigue or cognitive load, are mitigated by removing discretionary judgment from hot paths: ADMIN gating is enforced by layout, not by per-page developer checks [PAGE 1]; stub mode must always render, removing the need for live DB availability during cockpit development [PAGE 1]. Weather or network flakiness cannot cause a `status: "PUBLISHED"` write to evade the `draft-only` guardrail, because that guardrail walks the codebase statically [PAGE 1].

Veto proof conclusion: Any veto of a customer-facing claim must originate in the software invariant layer (gate predicate \Gamma, bootstrap mask \beta, performance switch \sigma, or freshness \tau). Physical, biomechanical, or weather vetoes are structurally impossible because no such variables enter the trust equations.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios derived from PAGE 1.

Scenario A: Premature performance activation. Counterfactual: an operator sets \sigma = 1 (`PERFORMANCE_STATS_ENABLED=true`) before canonical history has accumulated. Veto: Invariant I_4 [PAGE 1] and the brand-safety CI job inspect `public-performance-policy` and `dashboard-performance-gate`; the customer surface remains record-free by design. Prediction: `npm test` on `__tests__/dashboard-performance-gate.test.ts` passes, no record renders, and CI blocks release until history eligibility is satisfied.

Scenario B: Bootstrap contamination. Counterfactual: a pick query feeding the dashboard omits `isBootstrap: false`. Veto: Invariant I_3 [PAGE 1] requires the flag on all customer-surface queries. The dashboard, performance, picks, and daily-slate APIs enforce this [PAGE 1]. Prediction: `public-copy-scanner.test.ts` or the relevant API test fails CI; bootstrap picks are excluded from public performance and the inflated win-rate never reaches the customer.

Scenario C: Cockpit DB stub failure. Counterfactual: a new cockpit page contains top-level `await db.*` without `.catch()`. Veto: PAGE 1 mandates stub mode must always render and cites `cockpit-stub-safety.test.ts` [PAGE 1]. Prediction: the test fails, the page does not render in stub mode, and the PR is rejected until the call is wrapped or moved behind the explicit publish/admin path.

Each scenario is verifiable by running the named vitest files listed under Local validation on PAGE 1, and each prediction is a deterministic CI outcome, not a probabilistic wager.
</RLVR_COUNTERFACTUAL_VETOES>