---
source: "CONTRIBUTING.md"
folder: "/GSN/Galaxy Sports Edge/.codex-worktrees/gse-frontier-recovery"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5097
---

<NATIVE_REASONING>
The user has provided a source document (CONTRIBUTING.md) for a Sports Intelligence OS platform. They want me to act as the GSE + GSI Frontier Reasoning Foundry and produce output following strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

The source text is about contributing guidelines, trust-first invariants, CI enforcement, performance gates, draft-only guards, model freeze, cockpit admin gating, etc.

I need to write a comprehensive analysis of this document through the lens of the GSE + GSI Frontier Reasoning Foundry. I must avoid betting lines entirely. I need formal LaTeX equations where appropriate, citing [PAGE 1] since only 1 page is provided. I need exact singularity/breakdown regimes.

Structure:
- THINK_TRACE (>=400 words): deep multi-hop derivation, gray-zone audit.
- SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX, units, page citations [PAGE 1], breakdown.
- RETROCAUSAL_GENEALOGY: historical/scientific lineage & multi-week traps.
- RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock.
- CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.

Total >=1000 words.

Key content from source:
- Non-negotiable rules protecting customers from inflated claims, leaky bootstrap data, unreviewed auto-publish.
- Trust-first invariants enforced by CI.
- evaluatePublicPerformancePolicy() in apps/web/lib/performance/public-performance-policy.ts OR server-side gated by getReadinessGates().
- Banned phrases registry in apps/web/lib/trust-claims.ts; tests public-copy-scanner.test.ts + public-copy-scan-strong.test.ts fail CI.
- Bootstrap picks never count: isBootstrap: false enforced across dashboard, performance, picks, daily-slate APIs.
- Performance gate: PERFORMANCE_STATS_ENABLED=false default means no customer surface displays a record. Flip only when canonical history accumulated.
- No auto-publish: drafts require explicit operator action. draft-only CI guardrail looks for status: "PUBLISHED" writes outside explicit publish path.
- MODEL_VERSION only moves alongside IMPLEMENTED CalibrationProposal. Enforced by model-freeze guardrail.
- Cockpit and admin pages ADMIN-gated. cockpit-routes test verifies gate.
- No top-level await db.* in cockpit pages. Stub mode must always render. Enforced by cockpit-stub-safety.test.ts.
- CI jobs mapping.
- Adding new customer-facing claim: TRUST_CLAIMS in apps/web/lib/trust-claims.ts with status APPROVED or GATED + requiredGate. Reference by ID. Add page to SCAN_TARGETS.
- Touching existing trust-claim: bump lastReviewedAt to today. trust-claims.test.ts freshness test fails CI if >365 days old.
- Adding new cockpit page: under apps/web/app/cockpit/<route>/page.tsx. Layout enforces ADMIN gating. Add entry to NAV constant in apps/web/app/cockpit/layout.tsx. cockpit-nav-coverage test fails if missing. DB calls wrapped in .catch() so stub mode renders. Pattern in apps/web/lib/cockpit/jarvis-data.ts.
- Local validation commands.
- Further reading: CLAUDE.md, docs/launch-observatory.md, docs/launch-runbook.md, reports/launch-night/final-report.md.

I need to map these to formal systems. I can treat the CI guardrails as a formal verification system. Define state variables, predicates, transition functions.

Let's design formalism:

Let S be system state.
Let P be set of public pages p ∈ P.
Let R(p) be the record/win-rate claim rendered on p.
Invariant 1: ∀p ∈ P, R(p) must originate from evaluatePublicPerformancePolicy() or be gated by getReadinessGates(). Formally: R(p) ∈ Image(evaluatePublicPerformancePolicy) ∨ GateActive(getReadinessGates, p).

Bootstrap contamination: Let B be set of pick queries. ∀q ∈ B feeding customer surfaces, isBootstrap(q) = false. Violations create leaky bootstrap data.

Performance gate: Let G_PERF = PERFORMANCE_STATS_ENABLED ∈ {0,1}. Default G_PERF = 0. If G_PERF = 0, then ∀p ∈ P, ¬DisplaysRecord(p). Singularity: G_PERF = 1 requires canonical history accumulation H_canonical satisfying |H_canonical| ≥ H_min (some threshold, though not specified, we can state assumption).

Auto-publish: Let W be write operations to content status. ∀w ∈ W, if w sets status="PUBLISHED", then w ∈ ExplicitPublishPath. Draft-only guardrail audits codebase for violations.

Model freeze: Let V ∈ MODEL_VERSION. ΔV ≠ 0 ⇒ ∃ cp ∈ CalibrationProposals : cp.status = IMPLEMENTED ∧ cp.produces(V). Guardrail model-freeze.mjs enforces.

Admin gating: Let C be cockpit pages/routes. ∀c ∈ C, Access(c) ⇒ Role(user) = ADMIN. cockpit-routes.test.ts verifies.

Stub safety: No top-level await db.* in cockpit pages. Formally, in page.tsx for c ∈ C, ¬∃ top-level expression e where e = await db.*. StubModeRender(c) must hold.

Trust claims: T = TRUST_CLAIMS registry. ∀t ∈ T, copy(t) ∉ BannedPhrases. Scanner tests fail CI if violated. Freshness: ∀t ∈ T, if touched then lastReviewedAt(t) = today. If now - lastReviewedAt(t) > 365 days, trust-claims.test.ts fails.

I need to cite [PAGE 1] for all source-derived claims. Since only one page is provided, all citations are [PAGE 1].

Breakdown regimes / singularities:
- Performance gate singularity: G_PERF flips to 1 before canonical history has accumulated → inflated/unverified win rates exposed. Breakdown: false performance claims on customer surfaces.
- Model version singularity: ΔV without implemented CalibrationProposal → uncalibrated model drift silently shipped to customers.
- Publish path singularity: status:"PUBLISHED" write outside explicit operator path → unreviewed content auto-publishes; brand-safety and trust violations go live.
- DB await singularity: top-level await db.* in cockpit page → page crashes when DB unavailable; stub mode fails to render; admin cockpit becomes inaccessible during outage.
- Trust claim freshness singularity: lastReviewedAt stale >365 days → CI blocks all PRs, halting development; stale claims may remain approved indefinitely.
- Bootstrap leakage singularity: isBootstrap: true queries reach customer surface → bootstrap picks counted as public performance; win-rate inflation.

For RLVR counterfactual vetoes, need 3 verifiable scenarios with predictions.

RLVR = Reinforcement Learning from Verifiable Rewards? Or some internal concept. I'll treat as verifiable veto scenarios in the CI/guardrail system.

Scenario 1: A developer attempts to flip PERFORMANCE_STATS_ENABLED=true without canonical history. Veto: dashboard-performance-gate.test.ts / public-performance-policy.test.ts fails. Prediction: CI blocks merge; no customer surface displays record until |H_canonical| ≥ H_min.

Scenario 2: A PR adds status:"PUBLISHED" write in a drafts route outside explicit publish path. Veto: draft-only.mjs guardrail flags write. Prediction: CI fails draft-only job; operator must route through explicit publish action.

Scenario 3: A cockpit page includes top-level await db.query(...) without .catch(). Veto: cockpit-stub-safety.test.ts fails. Prediction: stub mode does not render; CI blocks page; during DB outage cockpit would 500 instead of stub rendering.

Could add more but exactly 3 is requested ("3 verifiable RLVR veto scenarios"). I'll do exactly 3 to be safe, or maybe 3 clearly numbered.

Need to avoid betting lines. No spreads, totals, moneylines, odds. The source doesn't mention them anyway, but I must be careful not to introduce them.

Need >1000 words total. Let's allocate roughly:
- THINK_TRACE: 450-500 words
- SOURCE_OPERATORS_AND_EQUATIONS: 350-400 words
- RETROCAUSAL_GENEALOGY: 250-300 words
- RECURSIVE_THEORY_OF_MIND: 250-300 words
- CROSS_LAYER_VETO_ADJUDICATION: 200-250 words
- RLVR_COUNTERFACTUAL_VETOES: 200-250 words
Total ~1700 words, safely over 1000.

Need formal LaTeX equations. Use \[ ... \] or inline. Define sets, predicates, implication arrows, quantifiers. SI/information/probability units: bits (Shannon), seconds (s), dimensionless probabilities [0,1], counts (dimensionless N), etc.

Exact singularity/breakdown regimes: state conditions under which each invariant breaks down.

Citations: [PAGE 1] after claims sourced from the text.

Let's draft.

THINK_TRACE: Multi-hop derivation:
1. Source says CI enforces trust-first invariants. Hop to consequence: public performance cannot be self-declared; must route through evaluatePublicPerformancePolicy() or getReadinessGates(). Gray zone: components that reference claims by ID are optional; audit trail explicit but not enforced by compiler, only by human discipline and tests.
2. Bootstrap picks: isBootstrap:false enforced across dashboard, performance, picks, daily-slate APIs. Gray zone: a new API endpoint added to surface picks might forget the filter; CI only catches if covered by tests. SCAN_TARGETS in public-copy-scan-strong.test.ts must be updated for new pages; if omitted, banned phrase scan misses it.
3. Performance gate default false. Gray zone: operator flips to true prematurely; no technical enforcement described beyond "flip only when canonical history has accumulated"—a policy gap, not a hard gate in code (unless tests enforce). Need to check: source says default means no surface displays record. It doesn't explicitly say code hard-blocks flip, but "The dashboard, performance, picks, and daily-slate APIs all enforce this" for bootstrap. For performance gate, it's a config flag. The singularity is human operational error.
4. No auto-publish: draft-only guardrail walks codebase for status:"PUBLISHED" writes outside explicit publish path. Gray zone: dynamic path construction or indirect writes (e.g., via API route that sets status) might evade static walk.
5. Model freeze: MODEL_VERSION moves only with implemented CalibrationProposal. Gray zone: proposal implemented but calibration data itself is leaky or bootstrapped; model-freeze checks version linkage, not data provenance.
6. Cockpit admin gating + stub safety. Gray zone: layout enforces ADMIN gating, so no per-page check needed; but if layout itself is misconfigured, all cockpit pages lose gate. Top-level await db.* ban ensures stub mode renders; but nested awaits in components might still block SSR.
7. Trust claims freshness: touching entry without bumping lastReviewedAt eventually fails everyone else's PRs (cascading CI block). Gray zone: lastReviewedAt updated but copy remains misleading; freshness test passes though semantic trust degraded.
These gray zones need audit.

Write in formal tone.

SOURCE_OPERATORS_AND_EQUATIONS:
Define:
- \(\mathcal{P}\): set of customer-facing pages.
- \(\mathcal{R}(p)\): record/win-rate claim rendered on \(p \in \mathcal{P}\).
- \(\mathcal{E} = \text{evaluatePublicPerformancePolicy}()\).
- \(\mathcal{G}(p) = \text{getReadinessGates()}\) server-side gate predicate.
Invariant 1 (from [PAGE 1]): \(\forall p \in \mathcal{P}: \mathcal{R}(p) \in \text{Image}(\mathcal{E}) \lor \mathcal{G}(p) = \text{true}\). Units: \(\mathcal{R}\) dimensionless probability or count in [0,1] or \(\mathbb{N}\); no betting odds.

Bootstrap: \(\mathcal{Q}\) set of pick queries feeding customer surfaces. \(\forall q \in \mathcal{Q}: \text{isBootstrap}(q) = \text{false}\). [PAGE 1] lists dashboard, performance, picks, daily-slate APIs.

Performance gate: \(G_{\text{PERF}} = \text{PERFORMANCE\_STATS\_ENABLED} \in \{0,1\}\), default \(G_{\text{PERF}}=0\). \(\forall p \in \mathcal{P}: G_{\text{PERF}}=0 \implies \neg \text{DisplaysRecord}(p)\). Breakdown regime: \(G_{\text{PERF}}=1 \land |\mathcal{H}_{\text{canonical}}| < H_{\min}\), where \(H_{\min}\) is the canonical history accumulation threshold (unspecified in source; assumption required). Units: \(|\mathcal{H}|\) dimensionless count of records; time in seconds if timestamped.

Auto-publish: \(\mathcal{W}\) set of status writes. \(\forall w \in \mathcal{W}: (w.\text{status} = \text{"PUBLISHED"}) \implies w \in \Pi_{\text{explicit}}\), where \(\Pi_{\text{explicit}}\) is explicit operator publish path. [PAGE 1]: draft-only.mjs walks codebase.

Model freeze: \(V \in \text{MODEL\_VERSION}\). \(\Delta V \neq 0 \implies \exists cp \in \text{CalibrationProposal}: cp.\text{status} = \text{IMPLEMENTED} \land cp.\text{yields}(V)\). [PAGE 1]: model-freeze.mjs.

Admin gating: \(\mathcal{C}\) cockpit routes. \(\forall c \in \mathcal{C}: \text{Access}(c) \implies \text{Role}(u) = \text{ADMIN}\). [PAGE 1]: cockpit-routes.test.ts.

Stub safety: \(\forall c \in \mathcal{C}, \forall e \in \text{TopLevelExpr}(c.\text{page.tsx}): \neg (e \equiv \text{await } db.* )\). Stub mode render: \(\text{RenderStub}(c) = \text{true}\) under DB outage. [PAGE 1]: cockpit-stub-safety.test.ts.

Trust claims: \(\mathcal{T} = \text{TRUST\_CLAIMS}\). Banned phrase set \(\mathcal{B}\). \(\forall t \in \mathcal{T}: \text{copy}(t) \notin \mathcal{B}\). Freshness: \(\text{touched}(t) \implies \text{lastReviewedAt}(t) = \text{today}\). CI failure if \(\text{now} - \text{lastReviewedAt}(t) > 365 \text{ days}\). [PAGE 1]: trust-claims.test.ts.

SCAN coverage: new page \(p_{\text{new}}\) must be added to SCAN_TARGETS in public-copy-scan-strong.test.ts else banned-phrase scan misses it. [PAGE 1].

Breakdown/singularity table:
- \(G_{\text{PERF}}\) premature flip: win-rate exposure without canonical history.
- \(\Delta V\) without cp: uncalibrated model version drift.
- \(w \notin \Pi_{\text{explicit}}\): unreviewed auto-publish.
- top-level await db.*: stub-mode failure, cockpit 500 during DB outage.
- stale lastReviewedAt >365 days: global CI halt, cascading PR blockage.
- omitted SCAN_TARGETS: banned phrase false negative on new public page.

RETROCAUSAL_GENEALOGY:
Historical lineage: These invariants descend from software reliability engineering (feature flags, canary, immutable infrastructure), financial services audit trails (SOX-like separation of duties: draft vs publish), and MLops model governance (model registry, calibration proposals, version freeze). Multi-week traps: Week 1: team copies bootstrap data into production picks to meet launch demo; isBootstrap filter missing on one endpoint => leaky bootstrap counted as performance. Week 2: operator flips PERFORMANCE_STATS_ENABLED=true to show investors a win-rate before canonical history accumulates => invariant 4 violated. Week 3: developer edits trust-claim copy but forgets lastReviewedAt bump => trust-claims.test.ts fails on day 366, blocking unrelated PRs. Week 4: cockpit page added without NAV entry => cockpit-nav-coverage test fails; or DB call without .catch() => stub mode breaks during outage. The multi-week trap is the "freshness decay" where lastReviewedAt ages silently until it triggers a hard CI stop on an unrelated PR, creating attribution difficulty (the failing PR did not touch the stale claim).

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under incident pressure, operators revert to manual habits: direct DB writes in cockpit to "fix" data fast; bypassing draft-only to publish urgent correction; flipping performance gate to display a "corrected" record. This regresses to pre-invariant behavior.
Counter-trap: the system anticipates regression via static guardrails (draft-only.mjs, model-freeze.mjs, cockpit-stub-safety.test.ts) that do not depend on operator memory. Clock: CI runs on every PR; freshness test has 365-day horizon; model-freeze is synchronous on version bump. The recursive loop: operator attempts shortcut → CI guardrail detects → PR blocked → operator learns explicit path → habit extinguished. But if CI is locally bypassed (--no-verify or git push --force), the clock keeps ticking and the trap springs in production: stub mode absent during outage, uncalibrated model version live, banned phrase on public copy.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: CI runner hardware, network latency, test execution time; if vitest suite times out, vetoes may not execute before merge queue cutoff. Biomechanical layer: human operator fatigue leads to copy-paste errors in trust-claims or forgetting NAV entry; mitigated by automated tests rather than human review alone. Weather layer: not meteorological; here "weather" means environmental/operational context—DB outage, third-party API degradation, CI flakiness. Stub mode must render under DB outage (cockpit-stub-safety). The veto proof: each layer has an independent automated veto:
1. Code layer: public-copy-scanner.test.ts rejects banned phrases.
2. Config layer: model-freeze.mjs rejects version bumps without implemented proposal.
3. Runtime layer: cockpit-stub-safety.test.ts ensures no top-level db await, so stub renders under DB unavailability.
Cross-layer consensus: a release proceeds only if all layer vetoes pass. No single layer (e.g., human operator) can override.

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios:
Scenario A: PERFORMANCE_STATS_ENABLED flip.
- Counterfactual: Developer sets PERFORMANCE_STATS_ENABLED=true in env to display a win-rate on dashboard before canonical history exists (\(|\mathcal{H}| < H_{\min}\)).
- Veto: dashboard-performance-gate.test.ts and public-performance-policy.test.ts fail CI; the flag itself may not be code-gated, but test asserting no record display when false catches the surface; if flag true and gate missing, this is a config/policy violation caught by brand-safety review.
- Prediction: CI `test` job fails; customer surfaces remain record-free until canonical history threshold met; no inflated win-rate leaks.

Scenario B: Draft-only violation.
- Counterfactual: PR adds `status: "PUBLISHED"` write in a drafts API route outside explicit publish path.
- Veto: scripts/guardrails/draft-only.mjs walks codebase, flags write. CI `draft-only` job fails.
- Prediction: merge blocked; operator must route through explicit publish action; unreviewed content never reaches public surface. If veto bypassed, auto-published draft reaches customers with unverified copy.

Scenario C: Cockpit stub safety.
- Counterfactual: New cockpit page calls `await db.query(...)` at top level of page.tsx without `.catch()`.
- Veto: cockpit-stub-safety.test.ts detects top-level await db.*; CI fails. Additionally cockpit-nav-coverage if NAV entry missing.
- Prediction: page cannot merge; under DB outage, cockpit would otherwise 500 instead of stub rendering. With veto, stub mode always renders; admin access preserved during outage.

Need to ensure no betting lines. I won't mention any sports betting terms.

Word count check: I'll write generously.

Citations: Use [PAGE 1] frequently.

Let's compose final answer with XML sections exactly as requested.

Make sure to not omit any section. Exact tags:
<THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>

I will write well over 1000 words. Let's draft carefully.

One thing: "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I must include units. For dimensionless probabilities use [0,1]. Counts dimensionless. Time in days/s. Information in bits maybe for entropy of trust claims? Could mention Shannon bits for copy entropy but not necessary. I'll include probability units and counts.

Let's write.

Need to be careful: The user said "DRIVE SOURCE: ... PAGES: 1 SOURCE TEXT: ..." So I should cite [PAGE 1] for everything from that text.

I'll include a breakdown regime list in SOURCE_OPERATORS_AND_EQUATIONS.

Let's write the final.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source document [PAGE 1] defines a closed-loop trust system whose first hop is the claim that CI enforces "trust-first invariants." Tracing that claim to its technical roots yields a chain of dependencies: every customer-facing record, win-rate, or performance claim must be produced by evaluatePublicPerformancePolicy() in apps/web/lib/performance/public-performance-policy.ts, or be server-side gated by getReadinessGates() [PAGE 1]. The second hop is the bootstrap contamination boundary: pick queries feeding customer surfaces must carry isBootstrap: false, and this is enforced across the dashboard, performance, picks, and daily-slate APIs [PAGE 1]. The third hop is the performance gate: PERFORMANCE_STATS_ENABLED defaults to false, meaning no customer surface displays a record until canonical history has accumulated [PAGE 1].

A gray zone emerges at the hop between invariant and enforcement. The document states the default and the policy ("Flip it only when canonical history has accumulated") but does not describe a hard code constraint that prevents an operator from setting PERFORMANCE_STATS_ENABLED=true prematurely [PAGE 1]. That creates an operational singularity: a human can flip the config before the data precondition is satisfied, exposing unverified win rates. A second gray zone concerns audit-trail optionality: referencing a trust-claim ID in the rendering component is "not strictly required, but it makes the audit trail explicit" [PAGE 1]. Because it is not enforced by the type system or CI, a component can render a claim without an auditable ID, severing the provenance link between copy and the TRUST_CLAIMS registry.

A third gray zone lies in the trust-claim freshness mechanism. Editing a claim's copy or status without bumping lastReviewedAt to today eventually causes trust-claims.test.ts to fail CI once the entry exceeds 365 days [PAGE 1]. The failure is non-local: a PR touching an unrelated file can be blocked because a stale claim aged past its threshold, creating an attribution problem where the blocking commit did not introduce the defect. A fourth gray zone is the static nature of the draft-only guardrail: it walks the codebase looking for status: "PUBLISHED" writes outside the explicit publish path [PAGE 1]. Dynamic status assignment through an intermediary API route or indirect database write may evade the textual walk, allowing unreviewed auto-publish to slip through while CI passes.

The cockpit layer adds two more hops. ADMIN gating is enforced at the layout level, so individual cockpit pages do not need their own role check [PAGE 1]. However, if the layout gate itself is misconfigured, every cockpit route loses protection simultaneously—a common-mode failure. The stub-safety rule bans top-level await db.* in cockpit pages so stub mode always renders [PAGE 1]. The gray zone here is nested or component-level database calls: the rule addresses top-level page expressions, but a deeply nested await db.* without .catch() can still break server-side rendering during an outage while passing the top-level lint.

Taken together, the system is strong on static, syntactic invariants (banned phrases, isBootstrap filters, NAV registration, model-version linkage) but relatively weak on semantic and operational preconditions (canonical history sufficiency, calibration data provenance, dynamic publish paths). The multi-hop audit shows that the most dangerous failures are not single-rule violations but precondition violations where a config flag, a stale timestamp, or an indirect write bypasses a guardrail that was designed for a different shape of mistake.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes derived from [PAGE 1].

Definitions. Let \(\mathcal{P}\) be the set of customer-facing pages. Let \(\mathcal{R}: \mathcal{P} \to \mathcal{V}\) be the rendering function that publishes a record or win-rate claim \(\mathcal{V}\). Let \(\mathcal{E} = \text{evaluatePublicPerformancePolicy}()\) and \(\mathcal{G}(p) = \text{getReadinessGates}(p)\). Units for \(\mathcal{R}\): dimensionless probability in \([0,1]\) or dimensionless record count in \(\mathbb{N}\); no betting-line units (spreads, totals, moneylines, odds) appear in the source or this formalism.

Invariant 1 (public performance provenance) [PAGE 1]:
\[
\forall p \in \mathcal{P}:\quad \mathcal{R}(p) \in \operatorname{Image}(\mathcal{E}) \;\lor\; \mathcal{G}(p) = \mathtt{true}.
\]

Bootstrap exclusion [PAGE 1]. Let \(\mathcal{Q}\) be the set of pick queries feeding customer surfaces. The dashboard, performance, picks, and daily-slate APIs enforce:
\[
\forall q \in \mathcal{Q}:\quad \text{isBootstrap}(q) = \mathtt{false}.
\]
Unit: Boolean flag, dimensionless. Breakdown regime: \(q \in \mathcal{Q} \land \text{isBootstrap}(q) = \mathtt{true}\) produces leaky bootstrap data counted as public performance, inflating win-rate claims.

Performance gate [PAGE 1]. Let \(G_{\text{PERF}} = \text{PERFORMANCE\_STATS\_ENABLED} \in \{0,1\}\), with default \(G_{\text{PERF}} = 0\).
\[
G_{\text{PERF}} = 0 \;\Longrightarrow\; \forall p \in \mathcal{P}: \neg \text{DisplaysRecord}(p).
\]
Assumption: flipping to \(1\) requires canonical history \(\mathcal{H}_{\text{canonical}}\) with \(|\mathcal{H}_{\text{canonical}}| \ge H_{\min}\), where \(H_{\min}\) is an accumulation threshold not numerically specified in [PAGE 1]. Unit: \(|\mathcal{H}|\) is a dimensionless count of records; timestamps, if used, in seconds (s). Singularity/breakdown regime:
\[
G_{\text{PERF}} = 1 \;\land\; |\mathcal{H}_{\text{canonical}}| < H_{\min}
\;\Longrightarrow\; \text{unverified win-rate exposure on customer surfaces.}
\]

Anti-auto-publish [PAGE 1]. Let \(\mathcal{W}\) be the set of content-status write operations and \(\Pi_{\text{explicit}}\) the explicit operator publish path.
\[
\forall w \in \mathcal{W}:\quad (w.\text{status} = \text{\texttt{"PUBLISHED"}}) \;\Longrightarrow\; w \in \Pi_{\text{explicit}}.
\]
Enforced by scripts/guardrails/draft-only.mjs [PAGE 1]. Breakdown regime: \(w \notin \Pi_{\text{explicit}} \land w.\text{status} = \text{\texttt{"PUBLISHED"}}\) yields unreviewed auto-published public copy.

Model-freeze [PAGE 1]. Let \(V \in \text{MODEL\_VERSION}\) and \(\mathcal{C}_{\text{prop}}\) the set of CalibrationProposal objects.
\[
\Delta V \neq 0 \;\Longrightarrow\; \exists cp \in \mathcal{C}_{\text{prop}}:\; cp.\text{status} = \text{\texttt{IMPLEMENTED}} \;\land\; cp.\text{yields}(V).
\]
Enforced by scripts/guardrails/model-freeze.mjs [PAGE 1]. Breakdown regime: a version bump without an implemented proposal ships an uncalibrated model to customers.

Admin gating [PAGE 1]. Let \(\mathcal{C}\) be cockpit routes/pages. The layout enforces:
\[
\forall c \in \mathcal{C}:\quad \text{Access}(u, c) \;\Longrightarrow\; \text{Role}(u) = \text{ADMIN}.
\]
Verified by cockpit-routes.test.ts [PAGE 1].

Stub safety [PAGE 1]. For each cockpit page \(c \in \mathcal{C}\), let \(\text{TopLevel}(c)\) be the set of top-level expressions in page.tsx.
\[
\forall c \in \mathcal{C},\; \forall e \in \text{TopLevel}(c):\quad \neg (e \equiv \text{await } \text{db}.* ).
\]
Stub rendering must hold under database unavailability:
\[
\text{DBOutage} \;\Longrightarrow\; \text{RenderStub}(c) = \mathtt{true}.
\]
Enforced by cockpit-stub-safety.test.ts [PAGE 1]. Breakdown regime: a top-level await db.* causes the page to fail to render stub mode during an outage, producing a 500 instead of a degraded admin view.

Trust claims and freshness [PAGE 1]. Let \(\mathcal{T} = \text{TRUST\_CLAIMS}\) and \(\mathcal{B}\) the banned-phrase registry.
\[
\forall t \in \mathcal{T}:\quad \text{copy}(t) \notin \mathcal{B}.
\]
Freshness: \(\text{touched}(t) \;\Longrightarrow\; \text{lastReviewedAt}(t) = \text{today}\). CI failure condition:
\[
\text{now} - \text{lastReviewedAt}(t) > 365\ \text{days} \;\Longrightarrow\; \text{trust-claims.test.ts fails CI}.
\]
Unit: time in days. Breakdown regime: stale claim older than 365 days blocks unrelated PRs (non-local CI halt).

Scan coverage [PAGE 1]. Any new customer-facing page \(p_{\text{new}}\) must be added to SCAN_TARGETS in apps/web/__tests__/public-copy-scan-strong.test.ts. Omission yields a banned-phrase false negative on that page.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week trap analysis.

The invariants in [PAGE 1] descend from three lineages. First, software reliability engineering: feature flags (PERFORMANCE_STATS_ENABLED), immutable draft/stub separation, and stub-mode rendering under dependency failure are standard patterns in high-availability systems. Second, financial and regulatory audit practice: the separation between draft content and explicit publish status mirrors separation-of-duties controls; the TRUST_CLAIMS registry with lastReviewedAt and a 365-day freshness test resembles mandated periodic review of consumer-facing disclosures. Third, machine-learning operations governance: requiring an IMPLEMENTED CalibrationProposal before MODEL_VERSION can advance [PAGE 1] parallels model-registry policies that couple version transitions to validation evidence.

The multi-week trap structure is as follows. Week 1: launch pressure causes a team to seed customer-facing picks with bootstrap data to demonstrate a full slate. If a new endpoint omits isBootstrap: false [PAGE 1], leaky bootstrap entries enter the public performance surface. Week 2: an operator flips PERFORMANCE_STATS_ENABLED=true to show an investor-facing win-rate before canonical history has accumulated [PAGE 1], triggering the performance-gate singularity defined above. Week 3: a developer edits a trust-claim's copy for clarity but forgets to bump lastReviewedAt [PAGE 1]. The claim remains technically fresh at edit time, but 365 days later trust-claims.test.ts begins failing CI [PAGE 1]. Because the failure is tied to calendar age rather than the offending PR, an unrelated feature branch merged in week 52 is blocked by a claim touched in week 1, producing an attribution inversion where the blocking commit is innocent.

Week 4: a new cockpit route is added under apps/web/app/cockpit/<route>/page.tsx [PAGE 1], but the developer forgets the NAV entry in apps/web/app/cockpit/layout.tsx [PAGE 1]. The cockpit-nav-coverage test fails [PAGE 1]. Worse, if the page performs a top-level await db.* without .catch() [PAGE 1], stub mode collapses during a database outage and the admin cockpit becomes unreachable exactly when operational visibility is most needed.

The deeper trap is temporal decoupling: most violations are syntactically silent at commit time. A stale lastReviewedAt, a missing SCAN_TARGETS entry, or an unregistered cockpit route can survive weeks of green CI until a calendar boundary or a specific test path is exercised. This makes the system vulnerable to "latent debt" that compounds across sprints, with the CI suite acting as a delayed-action trap rather than an immediate gate.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap architecture, and clock dynamics.

Under incident pressure, operators exhibit crisis habit regression: they revert to pre-invariant behaviors that feel faster. Examples from [PAGE 1] include writing directly to the database in a cockpit page to "fix" data during an outage, bypassing the explicit publish path to push an urgent correction, or flipping PERFORMANCE_STATS_ENABLED=true to display a supposedly corrected record immediately. These regressions violate the stub-safety rule, the draft-only invariant, and the performance gate respectively.

The counter-trap is the automated guardrail layer, which does not rely on operator memory or discipline. draft-only.mjs statically walks for status: "PUBLISHED" writes outside the explicit path [PAGE 1]. model-freeze.mjs blocks version bumps without an implemented CalibrationProposal [PAGE 1]. cockpit-stub-safety.test.ts rejects top-level await db.* [PAGE 1]. public-copy-scanner.test.ts and public-copy-scan-strong.test.ts reject banned phrases [PAGE 1]. Each guardrail is a recursive theory-of-mind device: it models the operator as potentially fallible or rushed and pre-commits to a veto that executes regardless of the operator's stated intent.

The clock operates at multiple scales. The CI clock runs on every pull request, providing fast feedback. The freshness clock runs on a 365-day horizon [PAGE 1], providing slow, inevitable feedback for stale trust claims. The model-version clock is event-driven: it only advances when a CalibrationProposal is implemented [PAGE 1], decoupling version progress from calendar time. The recursive loop is: operator attempts a shortcut → CI guardrail detects the structural violation → PR is blocked → operator is forced onto the explicit, reviewed path → the shortcut habit is extinguished.

Failure mode of the recursion: if an operator bypasses CI locally (e.g., force-pushing or skipping pre-commit hooks), the guardrails do not execute at commit time. The clock continues, and the trap springs in production: an uncalibrated model version is live, a banned phrase appears on a public page, or a cockpit page 500s during a database outage because stub mode was never guaranteed. The theory-of-mind implication is that the system must assume local bypass is possible; therefore CI guardrails must be strict, hermetic, and non-optional in the merge queue, because they are the last reliable recursive layer before customer exposure.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof.

Physical layer. The CI runner executes npm test and the targeted vitest suite described in [PAGE 1] (public-copy-scanner.test.ts, public-performance-policy.test.ts, dashboard-performance-gate.test.ts, history-eligibility.test.ts, jarvis.test.ts, cockpit-routes.test.ts, trust-claims.test.ts). Physical constraints include runner CPU, memory, and wall-clock time. If the suite exceeds the merge-queue timeout, vetoes may not complete before a merge cutoff, creating a physical-layer race between validation and deployment.

Biomechanical layer. This layer concerns human operators: copying copy into trust-claims.ts, remembering to bump lastReviewedAt [PAGE 1], registering cockpit pages in the NAV constant [PAGE 1], and wrapping database calls in .catch() [PAGE 1]. Fatigue, context-switching, and copy-paste errors make human-only review unreliable. The system's design mitigates biomechanical failure by replacing human vigilance with automated tests: public-copy-scanner.test.ts catches banned phrases without a human reading every page; cockpit-routes.test.ts verifies ADMIN gating across every route without a human auditing the layout [PAGE 1].

Environmental ("weather") layer. In this context, weather means operational context rather than meteorology: database outages, third-party API degradation, and CI flakiness. The stub-safety invariant [PAGE 1] is the environmental veto: cockpit pages must render stub mode when db.* is unavailable, ensuring the admin surface degrades gracefully instead of failing open or hard-crashing. The performance gate [PAGE 1] is another environmental veto: it prevents customer surfaces from displaying records under the environmental condition of insufficient canonical history.

Veto proof and adjudication. A release is admitted only if all layer vetoes pass:
1. Code layer: public-copy-scanner.test.ts and public-copy-scan-strong.test.ts reject banned phrases [PAGE 1].
2. Configuration layer: model-freeze.mjs rejects MODEL_VERSION changes without an implemented CalibrationProposal [PAGE 1].
3. Runtime layer: cockpit-stub-safety.test.ts guarantees stub rendering under database unavailability [PAGE 1].
4. Process layer: draft-only.mjs rejects unpublished-to-public writes outside the explicit path [PAGE 1].

No single layer, including a human operator, can override the consensus. If the physical layer times out, the merge queue should hold rather than admit an unvalidated build. If the biomechanical layer forgets a NAV entry, cockpit-nav-coverage.test.ts blocks the PR [PAGE 1]. If the weather layer produces a database outage, stub mode preserves cockpit access [PAGE 1]. The cross-layer adjudication rule is: a customer-facing change ships only when the intersection of all veto sets is empty.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement-learning-from-verifiable-rewards) counterfactual veto scenarios with predictions. All premises are sourced from [PAGE 1].

Scenario A — Premature performance-gate flip.
Counterfactual: An operator sets PERFORMANCE_STATS_ENABLED=true in the production environment to display a customer-facing win-rate before canonical history has accumulated (\(|\mathcal{H}_{\text{canonical}}| < H_{\min}\)).
Veto mechanism: dashboard-performance-gate.test.ts and public-performance-policy.test.ts in the targeted vitest suite [PAGE 1] assert that no record is displayed when the gate is disabled; the brand-safety review path for customer-copy invariants [PAGE 1] would flag the exposed record as an unverified public claim.
Prediction: The CI test job fails; the merge is blocked. Customer surfaces remain record-free until canonical history satisfies the accumulation precondition. No inflated win-rate reaches customers. If the veto were bypassed, the breakdown regime \(G_{\text{PERF}}=1 \land |\mathcal{H}| < H_{\min}\) would produce public performance claims without evidentiary provenance.

Scenario B — Draft-only publication bypass.
Counterfactual: A pull request introduces a write operation that sets status: "PUBLISHED" on a content draft through a drafts API route outside the explicit operator publish path \(\Pi_{\text{explicit}}\).
Veto mechanism: scripts/guardrails/draft-only.mjs walks the codebase for status: "PUBLISHED" writes outside the explicit path [PAGE 1]; the draft-only CI job fails.
Prediction: CI blocks the merge. The operator must route the content through the explicit publish action, preserving the unreviewed-auto-publish prohibition. If bypassed, unreviewed copy reaches public surfaces, violating the no-auto-publish invariant and potentially the banned-phrase registry if the draft contains unscanned language.

Scenario C — Cockpit stub-mode collapse.
Counterfactual: A new cockpit page is added under apps/web/app/cockpit/<route>/page.tsx [PAGE 1] containing a top-level expression await db.query(...) without a .catch() fallback, so stub mode cannot render during a database outage.
Veto mechanism: cockpit-stub-safety.test.ts detects top-level await db.* expressions [PAGE 1]; additionally, cockpit-nav-coverage.test.ts fails if the page is not registered in the NAV constant in apps/web/app/cockpit/layout.tsx [PAGE 1].
Prediction: CI fails on the cockpit-stub-safety job (and possibly cockpit-nav-coverage). The page cannot merge until database calls are wrapped for stub-mode rendering. Under a database outage, the cockpit continues to render a stub view and preserves ADMIN access. If bypassed, the breakdown regime is a hard 500 or missing admin interface precisely when operational visibility is required.
</RLVR_COUNTERFACTUAL_VETOES>