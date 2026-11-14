---
source: "observability-audit.md"
folder: "/CorpusRoot/PC-offload/OneDrive/Documents/Galaxy Sports Edge Launch Ready/reports/launch-night"
pages: 2
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3722
---

<NATIVE_REASONING>
The user has provided a source document about a launch night observability audit for a sports intelligence OS. They want me to act as the GSE + GSI Frontier Reasoning Foundry and produce a response following strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write >=1000 words total across these sections. The source is provided as pages 2 (though the text seems to be one block, I'll treat it as PAGE 2 or page markers within). The document is titled "Launch Night — Observability Audit", date 2026-05-18.

Important: I must not mention betting lines. The source mentions "sports intelligence", "picks", "performance", but I should not discuss spreads/totals/moneylines/odds. I can discuss technical observability, gates, database queries, etc.

I need to formalize LaTeX equations. Since this is a software observability audit, I can model:
- Readiness gates as Boolean predicates
- Performance exposure as indicator functions
- Bootstrap filtering as set operations
- Dashboard win-rate computation as a ratio with domain restrictions (singularity when denominator = 0 or when bootstrap contamination occurs)
- Information theory: entropy of PickResult distribution, KL divergence between bootstrap and settled distributions maybe? Or mutual information between modelVersion and outcome? Need to keep units in bits/nats.
- Probability units: P(result = WIN | published, not bootstrap) etc.

Exact singularity/breakdown regimes:
- canExposePerformanceStats = false => 503 or bootstrap state
- Denominator zero in win-rate (N_settled = 0)
- isBootstrap=true contamination in /dashboard direct DB query
- Missing `/cockpit/history` route causing forensic blind spot
- Sandbox ACL blocking git commit / npm install

Citations: [PAGE 2] since user says PAGES: 2 and provided one text block. I should cite [PAGE 2] for quotes. I can also reference page 1 implicitly? No, only source text provided is this audit. I'll cite [PAGE 2] for all source claims.

Structure:

<THINK_TRACE> (>=400 words)
- Multi-hop derivation: trace from inventory -> safety findings -> missing items -> phase plan -> failure modes.
- Gray-zone audit: indirect gating on /picks, dashboard bug, missing history route, sandbox blockers.
- Word count >=400.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal LaTeX definitions:
  - Let P be set of picks. Boolean readiness gates G_i.
  - Indicator functions I_gate.
  - Performance exposure predicate.
  - Win-rate estimator \hat{w} = (1/N) \sum 1[r_i = WIN] with domain N>0 and not bootstrap.
  - Information units: Shannon entropy H(PickResult) in bits. Bootstrap contamination bias term.
  - Singularity: N=0, gate=false, isBootstrap=true leakage.
  - Page citations [PAGE 2].

<RETROCAUSAL_GENEALOGY>
- Historical lineage: observability patterns, CI/CD phase gates, bootstrap modes in ML systems, forensic ledgers.
- Multi-week traps: sandbox ACL carry-over, missing lib/cockpit/jarvis.ts causing deferred synthesis, dashboard bug persisting into launch, missing history causing inability to audit past picks retroactively.

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: operator under launch pressure may bypass gates, directly query db.pick.findMany (like dashboard bug), skip Jarvis synthesis.
- Counter-trap: assuming /api/picks 503 is sufficient coverage while dashboard leaks stats.
- Clock: launch night 2026-05-18, sandbox ACL cannot be cleared until operator runs handoff.md §8.11 on Windows side, creating a temporal decoupling between edit and deploy.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical/biomechanical/weather veto proof: This is software, but I can map layers: network/infrastructure layer (sandbox ACL), code layer (missing files), data layer (bootstrap contamination), human layer (operator committing). "Physical" = filesystem/ACL, "biomechanical" = human operator workflow (edit on Windows, validate later), "weather" = external environment (sandbox ACL, network unavailability for npm install). Show veto proof: each layer independently blocks launch observability.

<RLVR_COUNTERFACTUAL_VETOES>
- 3 verifiable veto scenarios + predictions.
  1. Veto: dashboard computes win-rate without gate -> prediction: public sees bootstrap-era win-rate, violates readiness, trust-claims integrity fails.
  2. Veto: missing /cockpit/history + lib/cockpit/history.ts -> prediction: forensic ledger unavailable, cannot verify last 100 picks eligibility, audit trail breaks.
  3. Veto: sandbox ACL blocks git commit/typecheck -> prediction: changes unverified, merge conflicts or broken build on main, launch observatory not deployed.

Need to ensure total words >= 1000 across sections. Each section should be substantial.

No betting lines. Avoid words like spread, moneyline, total, odds, line. I can mention "picks", "performance", "win-rate", "record" in the context of the source text (since it's in the source), but not as betting odds. Win-rate is okay as a performance metric, not a betting line.

Let's draft carefully.

Word count estimation:
THINK_TRACE: ~450-500 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~300-350 words.
RETROCAUSAL_GENEALOGY: ~200-250 words.
RECURSIVE_THEORY_OF_MIND: ~200-250 words.
CROSS_LAYER_VETO_ADJUDICATION: ~200-250 words.
RLVR_COUNTERFACTUAL_VETOES: ~200-250 words.
Total ~1600-1800 words. Good.

Need to include verbatim quotes from source with [PAGE 2] citations. Example: "canExposePerformanceStats=false" or "computes 14-day record/win-rate from db.pick.findMany directly without checking canExposePerformanceStats".

Let's write.

Section 1: THINK_TRACE
Need deep multi-hop derivation.
Start: inventory of routes and libraries. Hop 1: safety findings show /dashboard bug. Hop 2: missing public-performance policy means no canonical counts. Hop 3: Jarvis synthesis missing means cockpit overview lacks structured assessment. Hop 4: missing forensic ledger means no last-100-pick audit. Hop 5: sandbox ACL blocks validation/commit, so even if code is written, it cannot be typechecked or pushed. Gray zones: /picks indirect gating (relies on API 503, silent empty render), /admin/dashboard cross-link missing, confidenceDisplayMode undefined. Derive that launch observability is not coherent because customer, operator, Jarvis surfaces diverge.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS
Define sets and predicates.
Let \mathcal{P} be the set of Pick records in Prisma schema.
Let \mathcal{G} = {g_1,...,g_8} readiness gates.
Define exposure predicate E(p) = isPublished(p) ∧ ¬isBootstrap(p).
Define performance exposure gate g_perf = canExposePerformanceStats.
Formal win-rate estimator:
\hat{w}_{14} = \frac{1}{N_{14}} \sum_{i=1}^{N_{14}} \mathbb{1}[r_i = \text{WIN}]
where N_{14} = |\{p \in \mathcal{P}_{14} : E(p) \land g_{perf}\}|.
Singularity: N_{14}=0 \implies undefined (0/0). Breakdown: if g_{perf}=false, return 503 / bootstrap state. If dashboard bypasses gate, contamination term \beta = \frac{1}{N_{raw}}\sum \mathbb{1}[isBootstrap] leaks into estimator.
Information units: H(R) = -\sum_{r\in\{PENDING,WIN,LOSS,PUSH,VOID\}} P(r) \log_2 P(r) bits. Bootstrap bias D_{KL}(P_{settled} || P_{bootstrap}) in bits.
Cite [PAGE 2] for schema fields and gates.
Units: bits, dimensionless probability, Boolean gate state {0,1}.

Section 3: RETROCAUSAL_GENEALOGY
Lineage: bootstrap modes in ML deployment, feature flags, canary releases. Forensic ledgers in safety-critical systems (aviation black box analogy but not betting). Multi-week traps: sandbox ACL carry-over from prior phases means edits invisible to CI; missing `lib/cockpit/jarvis.ts` defers synthesis to future phase, creating technical debt that compounds; dashboard bug if unpatched persists into post-launch metrics, causing retrospective data corruption (cannot disentangle bootstrap-era wins from settled wins).

Section 4: RECURSIVE_THEORY_OF_MIND
Operator model: under launch-night stress, the operator may assume `/api/picks` 503 covers all public exposure and neglect `/dashboard` direct DB path (the very bug logged). Counter-trap: believing that because cockpit and admin are gated, customer surface is safe, while `/performance/page.tsx` and `/picks/page.tsx` have indirect or missing explicit bootstrap messaging. Clock: date 2026-05-18 is launch night; sandbox ACL cannot be cleared until operator executes `handoff.md §8.11` on Windows side, creating a decoupling between code edit (immediate) and deploy validation (deferred). Recursive regression: crisis habit = patching the visible route (`/picks`) while leaving the hidden route (`/dashboard`) unpatched, then assuming the observatory is coherent.

Section 5: CROSS_LAYER_VETO_ADJUDICATION
Layer 1 Physical/Infrastructure: sandbox ACL blocks `npm install`, `git commit`, `.git/index.lock`. Veto: no typecheck/build/test can run, so code correctness is unverifiable. Proof: even perfect LaTeX/spec cannot execute in sandbox.
Layer 2 Code/Specification: missing `lib/cockpit/jarvis.ts`, `lib/cockpit/history.ts`, `lib/performance/public-performance-policy.ts`. Veto: JarvisLaunchAssessment type undefined; `/cockpit/history` 404; no canonical counts.
Layer 3 Data/Domain: `PickResult` enum includes PENDING/VOID; `isBootstrap` flag exists but is not excluded by dashboard. Veto: bootstrap-era picks contaminate performance stats.
Layer 4 Human/Workflow: operator edits on Windows-side filesystem; validation and commit/push deferred to operator after ACL cleared. Veto: temporal gap means launch-night changes may not land on `main` before public exposure.
Conclusion: all four layers independently veto launch-night observability coherence; no single patch suffices.

Section 6: RLVR_COUNTERFACTUAL_VETOES
Scenario 1: Dashboard gate omitted. Intervention: leave `/dashboard/page.tsx` unchanged. Counterfactual prediction: on launch night, operator or customer loads `/dashboard`; direct `db.pick.findMany` returns bootstrap-era picks; win-rate displayed without `canExposePerformanceStats` check; trust-claims integrity fails because bootstrap picks are not eligible for learning (`eligibleForLearning` false in `PickSignalSnapshot`). Verifiable: inspect rendered HTML for win-rate text when `canExposePerformanceStats=false`.
Scenario 2: Missing forensic ledger. Intervention: do not implement `/cockpit/history` or `lib/cockpit/history.ts`. Counterfactual prediction: operator cannot query last 100 picks with eligibility reasons; signal snapshot presence unknown; learning eligibility opaque; post-launch incident review cannot reconstruct which picks were bootstrap vs settled. Verifiable: HTTP GET `/cockpit/history` returns 404; DB query via cockpit returns empty.
Scenario 3: Sandbox ACL blocks commit/push. Intervention: edits are made but `git add`/`git commit` blocked by `.git/index.lock`. Counterfactual prediction: changes exist only on Windows-side filesystem; `main` branch remains without public-performance policy or dashboard gate; CI cannot run; launch observatory docs are local only. Verifiable: `git status` shows clean or locked index; `npm run build` throws EACCES/ACL error.

Need to make sure no betting lines. I won't mention spreads, moneylines, totals, odds.

Let's check for any accidental "line" usage that could be construed as betting line. "code line", "line of text" is fine but maybe avoid "line" alone in betting context. I'll avoid phrases like "betting line". Use "route", "endpoint", "record", "win-rate".

Also avoid fake ratios. My equations are formal set/probability, not toy Force/Fatigue. Good.

Word count check: I'll write generously.

Let's compose final answer with XML tags exactly as specified.

Need to include [PAGE 2] citations. Since source text is one block and user says PAGES: 2, I'll cite [PAGE 2] throughout. Maybe also [PAGE 1] if I infer, but better stick to [PAGE 2] only since that's what's provided. I'll say [PAGE 2] for direct quotes.

Verbatim quotes:
- "computes 14-day record/win-rate from `db.pick.findMany` directly without checking `canExposePerformanceStats`"
- "canExposePerformanceStats=false"
- "Missing: `/cockpit/history` (forensic pick ledger)"
- "Missing: `lib/cockpit/jarvis.ts` (synthesis layer)"
- "sandbox ACL" etc.

Let's write now.
</NATIVE_REASONING>

<THINK_TRACE>
The audit inventory establishes a surface-area map across customer routes, admin routes, cockpit routes, API routes, domain libraries, and Prisma models [PAGE 2]. The first derivation hop identifies that the customer layer is partially gated: `/api/performance` and `/api/picks` return 503 under `canExposePerformanceStats` and `canExposePublicPicks`, respectively, and filter `isBootstrap: false` and `isPublished: true` [PAGE 2]. However, `/picks/page.tsx` is only indirectly protected, relying on the API 503 and rendering results from the API only; it lacks an explicit "bootstrap collecting" message when picks are empty or blocked [PAGE 2]. The second hop exposes the primary defect: `/dashboard/page.tsx` computes a 14-day record/win-rate directly from `db.pick.findMany` without calling `canExposePerformanceStats`, without excluding `isBootstrap=true`, and with no readiness fallback [PAGE 2]. This creates an unmediated data path from the raw `Pick` table—including bootstrap-era records—to a customer-facing performance claim.

The third hop traces the missing canonical layer. The readiness gate inventory in `packages/prediction-engine/src/readiness.ts` includes `canExposePerformanceStats`, `canExposePublicPicks`, `canLearnFromOutcomes`, and `isBootstrapMode`, but no shared helper exists in `lib/performance/public-performance-policy.ts` to produce canonical counts consumed by both the dashboard and Jarvis [PAGE 2]. Without this policy, `/dashboard` and `/cockpit` can diverge in what they report as "performance," violating the observability requirement for one coherent surface [PAGE 2].

The fourth hop addresses the forensic gap. `PickSignalSnapshot` contains full forensic signal data with fields `isBootstrap`, `settlementResult`, `eligibleForLearning`, `usedDerivedHistory`, and `usedScheduleSignal` [PAGE 2], yet `/cockpit/history` and `lib/cockpit/history.ts` are missing [PAGE 2]. Consequently, an operator cannot retrieve the last 100 picks with eligibility reasons, signal-snapshot presence, or learning eligibility during launch night. The fifth hop is environmental: sandbox ACLs block `npm install`, lint, typecheck, test, build, and git operations because `node_modules/` is partially populated and `.git/index.lock` cannot be removed [PAGE 2]. Edits land on the Windows-side filesystem, but validation and commit/push are deferred to the operator via `handoff.md §8.11` [PAGE 2]. This creates a temporal decoupling between code authorship and deploy verification.

Gray-zone audit: The indirect gating on `/picks` is a gray zone because an empty API response could be interpreted as "no picks" rather than "blocked by bootstrap gate," misleading the customer. The missing `lib/cockpit/jarvis.ts` means `/cockpit` overview lacks a structured `JarvisLaunchAssessment` [PAGE 2], so the operator surface has no synthesis of readiness state. The absent admin↔cockpit cross-link on `/admin/dashboard` means operators may not discover the Jarvis synthesis [PAGE 2]. Multi-hop conclusion: launch-night observability is not coherent because customer, operator, and Jarvis surfaces are governed by inconsistent predicates, the dashboard can leak bootstrap-contaminated statistics, and the sandbox prevents any immediate verification that the Phase 2 fixes actually compile or pass typecheck.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(\mathcal{P}\) denote the set of `Pick` records persisted in the Prisma schema, with attributes `result \in \text{PickResult} = \{\text{PENDING},\text{WIN},\text{LOSS},\text{PUSH},\text{VOID}\}\), `settledAt`, `isPublished`, `isBootstrap`, `confidence`, `edgeScore`, `tier`, `pickGrade`, `riskLevel`, `modelVersion`, `generatedAt`, and `dataFreshnessAt` [PAGE 2]. Define the publication-and-bootstrap filter as the Boolean predicate

\[
E(p) \;=\; \text{isPublished}(p) \;\land\; \neg \text{isBootstrap}(p).
\]

Let \(\mathcal{G} = \{g_1,\dots,g_8\}\) be the readiness-gate vector in `packages/prediction-engine/src/readiness.ts`, including \(g_{\text{perf}} = \text{canExposePerformanceStats}\), \(g_{\text{picks}} = \text{canExposePublicPicks}\), \(g_{\text{learn}} = \text{canLearnFromOutcomes}\), and \(g_{\text{bootstrap}} = \text{isBootstrapMode}\) [PAGE 2]. Each gate \(g_i \in \{0,1\}\) is dimensionless.

The canonical 14-day performance estimator, restricted to exposed, non-bootstrap picks, is

\[
\hat{w}_{14} \;=\; \frac{1}{N_{14}} \sum_{i=1}^{N_{14}} \mathbb{1}\!\left[r_i = \text{WIN}\right],
\qquad
N_{14} \;=\; \left|\left\{p \in \mathcal{P}_{14} : E(p) \land g_{\text{perf}} = 1\right\}\right|,
\]

where \(\mathcal{P}_{14}\) is the 14-day window and \(\mathbb{1}[\cdot]\) is the indicator function. Units: \(\hat{w}_{14}\) is a dimensionless probability in \([0,1]\); \(N_{14}\) is a count (dimensionless integer).

Singularity and breakdown regimes:
1. If \(g_{\text{perf}} = 0\), the route must return 503 with `bootstrapGateResponse` and render `<PerformanceBootstrapState />`, never a numeric \(\hat{w}_{14}\) [PAGE 2].
2. If \(N_{14} = 0\), \(\hat{w}_{14}\) is undefined (division by zero); the UI must display a bootstrap/collecting state, not zero.
3. If the dashboard bypasses \(g_{\text{perf}}\) and omits \(E(p)\), the estimator acquires a bootstrap contamination bias

\[
\beta \;=\; \frac{1}{N_{\text{raw}}} \sum_{i=1}^{N_{\text{raw}}} \mathbb{1}\!\left[\text{isBootstrap}(p_i)\right],
\]

leaking ineligible records into a public win-rate claim [PAGE 2].

Information-theoretic units: The Shannon entropy of the result distribution is

\[
H(R) \;=\; -\sum_{r \in \text{PickResult}} P(r) \log_2 P(r) \quad \text{bits}.
\]

The divergence between settled and bootstrap populations is measurable as

\[
D_{\text{KL}}\!\left(P_{\text{settled}} \,\|\, P_{\text{bootstrap}}\right) \quad \text{bits},
\]

which is undefined when `isBootstrap` records are commingled with settled records in the dashboard query. `PickSignalSnapshot` adds forensic dimensions: `eligibleForLearning`, `settlementResult`, `usedDerivedHistory`, and `usedScheduleSignal` [PAGE 2]; their absence from `/cockpit/history` means the operator cannot compute conditional entropy \(H(R \mid \text{eligibleForLearning}=1)\).

Page citation: all schema fields, route behaviors, gate names, and missing-file assertions are drawn from [PAGE 2].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The observability pattern in this audit descends from staged-deployment and bootstrap-mode conventions in machine-learning systems, where a model is permitted to generate predictions but not to expose performance metrics until a minimum settled-sample threshold is reached [PAGE 2]. The readiness-gate family—`canPersistCanonicalHistory`, `canUseDerivedHistory`, `canExposePublicPicks`, `canPromoteFeaturedPicks`, `canPublishContent`, `canExposePerformanceStats`, `canLearnFromOutcomes`, `canApplyCalibrationAdjustments` (constant false), `isBootstrapMode`, `confidenceDisplayMode`, `minDataQualityForGameLog`, and `minSettledPicksForLearning` [PAGE 2]—forms a feature-flag lattice reminiscent of canary-release gating: each predicate must flip to 1 before the corresponding surface is promoted.

The forensic-pick-ledger requirement (`/cockpit/history`, `lib/cockpit/history.ts`) parallels black-box flight-data recording: `PickSignalSnapshot` already stores full forensic signal data plus `isBootstrap`, `settlementResult`, `eligibleForLearning`, `usedDerivedHistory`, `usedScheduleSignal`, and `modelVersion` [PAGE 2], but no query layer exposes it. The multi-week trap is that deferring this ledger to a post-launch phase means bootstrap-era picks accumulate without an audit trail. When `canLearnFromOutcomes` eventually flips to 1, the system will lack a clean historical baseline to distinguish genuine model signal from bootstrap-era noise, corrupting retrospective calibration proposals and `CalibrationProposal` records [PAGE 2].

A second multi-week trap is the missing `lib/cockpit/jarvis.ts` synthesis layer [PAGE 2]. Without a structured `JarvisLaunchAssessment` consumed by `/cockpit` overview, the operator has no single surface that answers "what the operator can see" versus "what the customer can see" [PAGE 2]. This debt compounds because `/cockpit` routes are already ADMIN-gated by `apps/web/app/cockpit/layout.tsx` [PAGE 2], so the missing synthesis layer sits inside a trusted boundary yet produces no structured output for incident review.

The third trap is environmental and retrospective: the sandbox ACL blocks `git commit` because `.git/index.lock` exists and cannot be removed [PAGE 2]. If the operator does not run `handoff.md §8.11` on the Windows side within the launch week, the Phase 2 fixes remain uncommitted. A future auditor attempting to reconstruct why `/dashboard` exposed a bootstrap win-rate on 2026-05-18 will find no commit, no PR, and no typecheck artifact, making the outage unauditable ex post.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression under launch-night pressure follows a predictable regression path: the operator patches the most visible route (`/picks/page.tsx`) to add a "bootstrap collecting" message because the safety table flags it with ⚠️ [PAGE 2], while neglecting the more severe ❌ bug on `/dashboard/page.tsx` that reads `db.pick.findMany` directly without `canExposePerformanceStats` [PAGE 2]. The operator's mental model assumes API-level 503 gating is sufficient coverage for the customer surface, failing to recurse into server-side page components that bypass the API entirely.

The counter-trap is the assumption that because `/admin/*` and `/cockpit/*` are protected by role redirects and `session.user.role !== "ADMIN"` checks [PAGE 2], the public observability surface is secure. This is false: `/dashboard` is a public or semi-public route that computes win-rate/record claims directly from the database, and `/performance/page.tsx` short-circuits to a bootstrap state only after `canExposePerformanceStats` [PAGE 2]. The operator may believe the cockpit and admin are the only surfaces requiring gate discipline, leaving the dashboard as an unguarded leakage path.

The clock imposes a hard boundary: the audit is dated 2026-05-18, launch night [PAGE 2]. The sandbox ACL cannot be cleared from inside the sandbox; validation, commit, and push must be performed by the operator on the Windows side after `handoff.md §8.11` [PAGE 2]. This creates a recursive time inconsistency: code can be authored immediately, but its correctness cannot be verified, and it cannot reach `main` before public exposure if the operator delays the ACL-clearing recipe. The operator must therefore treat the code as "staged but unproven" and avoid assuming that authoring `lib/performance/public-performance-policy.ts` equals deployed protection.

Recursive theory-of-mind fix: the operator should model the customer as observing `/dashboard` before reading the safety findings, and model the future auditor as observing the git history after launch. Both models imply that the dashboard gate and public-performance policy must be merged and typechecked before 2026-05-18 traffic, not merely edited on the Windows filesystem.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Four independent layers each veto launch-night observability coherence; no single patch overrides another layer's veto.

Layer 1 — Physical / infrastructure: The sandbox ACL blocks `npm install`, lint, typecheck, test, and build because `node_modules/` is partially populated and cannot be removed [PAGE 2]. `.git/index.lock` exists and cannot be removed, blocking `git add` and `git commit` from inside the sandbox [PAGE 2]. Veto proof: even a mathematically correct `lib/performance/public-performance-policy.ts` cannot be compiled or typechecked in the sandbox environment. The change exists only as a Windows-side file artifact until the operator executes the `handoff.md §8.11` recipe [PAGE 2].

Layer 2 — Code / specification: Three libraries are missing: `lib/cockpit/jarvis.ts` (synthesis layer), `lib/cockpit/history.ts` (forensic ledger query), and `lib/performance/public-performance-policy.ts` (shared readiness policy) [PAGE 2]. Veto proof: `/cockpit` overview cannot consume a `JarvisLaunchAssessment` because the type does not exist; `/cockpit/history` cannot return the last 100 picks with eligibility reasons; and `/dashboard` and Jarvis have no canonical counts to share, so they may diverge [PAGE 2].

Layer 3 — Data / biomechanical: The `Pick` model carries `isBootstrap`, `isPublished`, `settledAt`, and `result` fields [PAGE 2], but `/dashboard/page.tsx` queries `db.pick.findMany` directly without excluding `isBootstrap=true` and without checking `canExposePerformanceStats` [PAGE 2]. Veto proof: the biomechanical operator workflow (writing a page component that calls the ORM directly) bypasses the readiness-gate lattice, allowing bootstrap-era picks to contaminate a public win-rate. This is a data-layer veto because the semantic meaning of `isBootstrap` is ignored at the point of consumption.

Layer 4 — Human / workflow: All edits land on the Windows-side filesystem; validation and commit/push are deferred to the operator after sandbox ACL clearance [PAGE 2]. Veto proof: there is a temporal gap between code authorship and `main`-branch integration. If the operator does not perform the handoff recipe before public launch, the observatory runs with pre-Phase-2 code while the operator believes the fixes are "done."

Adjudication: Launch-night observability is coherent only if Layer 1 (ACL cleared), Layer 2 (three libraries implemented), Layer 3 (dashboard gate enforced), and Layer 4 (commit/push completed) are all satisfied. A veto in any layer is sufficient to fail the observability requirement because the customer, operator, and Jarvis surfaces would no longer share one evidence base [PAGE 2].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Dashboard gate omitted. Intervention: Leave `/dashboard/page.tsx` unchanged; it continues to compute a 14-day record/win-rate from `db.pick.findMany` directly without `canExposePerformanceStats` and without excluding `isBootstrap=true` [PAGE 2]. Counterfactual prediction: On launch night, an operator or customer loads `/dashboard`; the direct ORM query returns bootstrap-era picks; a win-rate is rendered even though `canExposePerformanceStats=false`; trust-claims integrity fails because bootstrap picks are not `eligibleForLearning` in `PickSignalSnapshot` and should not inform public performance [PAGE 2]. Verifiable RLVR check: Instrument a test that mounts `/dashboard` with `canExposePerformanceStats` mocked to `false` and asserts that no numeric win-rate or record text appears in the DOM; the test fails if the page renders a computed percentage.

Scenario 2 — Missing forensic pick ledger. Intervention: Do not implement `/cockpit/history` or `lib/cockpit/history.ts` [PAGE 2]. Counterfactual prediction: The operator cannot retrieve the last 100 picks with eligibility reasons, signal-snapshot presence, or learning eligibility; after a post-launch incident, there is no queryable trail distinguishing `isBootstrap` picks from settled picks, and `PickSignalSnapshot` fields such as `usedDerivedHistory` and `usedScheduleSignal` remain opaque [PAGE 2]. Verifiable RLVR check: An automated smoke test performs an HTTP GET to `/cockpit/history` and asserts a 200 response containing a JSON array of at most 100 records, each with `pickId`, `isBootstrap`, `eligibleForLearning`, and `signalSnapshotPresent`; the test fails with 404 or empty array.

Scenario 3 — Sandbox ACL blocks commit and push. Intervention: Edits are authored on the Windows-side filesystem, but `.git/index.lock` remains and `git add`/`git commit` are blocked from inside the sandbox [PAGE 2]. Counterfactual prediction: `main` never receives `lib/performance/public-performance-policy.ts`, the dashboard gate, or `docs/launch-observatory.md`; `npm run build` cannot run due to partially populated `node_modules/` [PAGE 2]; the launch observatory exists only as local file diffs, and CI cannot validate type safety before public exposure. Verifiable RLVR check: Run `git status` inside the sandbox and assert the working tree is either clean or reports a locked index; run `npm run build` and assert it throws an EACCES/ACL-related error rather than emitting a build artifact. The launch is vetoed until the operator clears the ACL via `handoff.md §8.11` [PAGE 2].
</RLVR_COUNTERFACTUAL_VETOES>