---
source: "next-session-handoff.md"
folder: "/CorpusRoot/PC-offload/OneDrive/Documents/Galaxy Sports Edge Launch Ready/reports/launch-night"
pages: 2
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3742
---

<NATIVE_REASONING>
The user has provided a source document about a "Next-Session Handoff" for a project called Galaxy Sports Edge. They want me to act as the GSE + GSI Frontier Reasoning Foundry and produce a response following strict invariants:

1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS - never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided SOURCE TEXT and PAGES: 2. But the source text is just one markdown document. I need to treat it as if it's from pages? The document doesn't have explicit page markers. I should probably cite [PAGE 1] and [PAGE 2] based on the content structure, or note that the provided text spans the handoff document. Since they said PAGES: 2, I can cite [PAGE 1] for the first half and [PAGE 2] for the second half roughly, or just cite [PAGE 1] and [PAGE 2] appropriately. Actually, looking at the text, it's a single markdown file. I'll cite [PAGE 1] for priorities 1-4 and [PAGE 2] for priorities 5-7, or something like that. But to be safe and accurate, I should reference exact verbatim quotes and page markers. Since no actual page breaks are visible, I'll designate [PAGE 1] as the section from title through Priority 4, and [PAGE 2] as Priority 5 through the final note. Or I can just say [PAGE 1] and [PAGE 2] where appropriate. Let me check the content length. It's about 2 pages worth. I'll cite [PAGE 1] for the earlier items and [PAGE 2] for the later items.

Important: This is about software engineering handoff, not sports betting. But the user said "ZERO BETTING LINES" - this document doesn't contain betting lines anyway, so that's fine. I must not invent any betting-related content.

I need to write >= 1,000 words total across the sections, with THINK_TRACE alone >= 400 words.

Let me plan the content:

<THINK_TRACE> (>=400 words)
- Deep multi-hop derivation of the handoff priorities.
- Analyze dependencies between Redis durability, audit log, calibration loop, dashboard, pre-commit, proposal freshness, snapshot CI.
- Gray-zone audit: where the document is ambiguous (e.g., "existing Redis instance" - what if Redis isn't provisioned?; BullMQ worker "runs every 10 minutes" - is that a cron or a scheduled job?; "model-freeze guardrail enforces the MODEL_VERSION bump" - what is the enforcement mechanism?; ADMIN-gated route - what is the authz model?; "OPEN for more than 14 days" - timezone, business days?; snapshot regen in CI - flakiness, commit rights).
- Multi-hop: Priority 1a enables Priority 1b (durable history needed for audit diffing across restarts). Priority 1b feeds Priority 2a (audit diff needed to confirm calibration delta moved win rate). Priority 2a depends on Priority 6 (freshness audit prevents stale proposals being applied). Priority 3 depends on existing API types. Priority 5 and 7 are CI/infra gating.
- Gray zones: fallback behavior when REDIS_URL absent; exactly-once semantics for audit worker; idempotency of calibration apply route; snapshot regeneration race conditions in PR branches.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formalize the system state transitions.
- Let H_t be the Jarvis history buffer state at time t. In-memory: H_t ∈ M (volatile). Redis-backed: H_t ∈ R (persistent). Define swap predicate P(REDIS_URL) → delegate.
- Audit diff operator: ΔJ = diffJarvis(J_{t-10min}, J_t). Persist if ||ΔJ||_0 > 0 (Hamming/information change). Units: bits or nats for information difference; table rows count.
- Calibration application: C_t = {proposal p | status=IMPLEMENTED, version=v}. Apply delta δ_p. Win rate prediction: w_pred ∈ [0,1] (probability unit). Safety warning S_t active until w_{t+cycle} - w_t has sign matching δ_p direction. Breakdown: if w_t is censored or insufficient sample size N < N_min, warning cannot be invalidated → indefinite warning (singularity).
- Calibration freshness: T_open = now - t_created. Warning if T_open > 14 days = 1,209,600 seconds.
- Pre-commit: gate G = 1 if staged files ∩ {apps/web/{app,components,lib}/*} ≠ ∅ then run test:brand-safety.
- Snapshot CI: regeneration function σ: Next.js app → committed snapshot set. CI job J_CI: boot → run → commit. Breakdown: non-deterministic snapshot output, merge conflicts, flaky dev server.
- Cite [PAGE 1] and [PAGE 2] with verbatim quotes.

<RETROCAUSAL_GENEALOGY>
- Historical lineage: ring buffer → Redis (classic cache durability pattern, see Redis persistence RDB/AOF). BullMQ worker pattern (distributed task queues, BullMQ is Node.js queue on Redis). Calibration proposal → applied delta (MLOps model governance, model freeze, audit rows). Admin dashboard stub rebuild (technical debt after truncation incident). Pre-commit hooks (shift-left testing). Snapshot regeneration CI (visual regression / snapshot testing).
- Multi-week traps: If Priority 1a isn't done, Priority 1b's diffJarvis loses cross-restart context (week-over-week audit gaps). If Priority 6 isn't done, OPEN proposals accumulate for weeks, violating model-freeze intent. If Priority 7 isn't done, snapshots go stale silently over multiple PR cycles (multi-week drift). If Priority 3 isn't done, operators lack visibility for weeks after truncation incident.

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: Under pressure, the team may revert to manual calibration application (auto-apply temptation) or skip audit logging (speed over durability). The document explicitly says "never auto-apply" - counter-trap is to hard-enforce manual gate in code and tests.
- Clock: The 10-minute worker cadence vs 14-day freshness threshold vs pre-commit gating. Mismatched clocks (worker every 10 min, proposal stale after 14 days) create a window where a proposal sits OPEN for 13 days 23 hours without warning, then gets applied in a rush before the 14-day mark, bypassing review.
- Theory of mind: The next session operator will read this file first, then overnight-summary.md. They may assume priorities are independent. We must correct: Priority 1a is a prerequisite for meaningful Priority 1b. Priority 6 is a guardrail for Priority 2a.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical layer: Redis instance availability, PostgreSQL connectivity, Next.js dev server boot in CI. If Redis down, fallback to in-memory (per spec) but loses durability—veto if production deploy requires durability and REDIS_URL absent.
- Biomechanical: Operator action on /cockpit/calibration/[id]/apply requires typed reason. Human factors: reason text can be garbage. Veto if reason length < min or not typed (empty string). ADMIN-gated authz: if authz middleware misconfigured, non-admin can apply calibration → veto deployment until RBAC tested.
- Weather: Not applicable to software system directly, but CI runner environment (network flakiness, runner timezone) can affect snapshot regeneration and worker scheduling. Veto if CI cannot boot dev server deterministically.

<RLVR_COUNTERFACTUAL_VETOES>
- Scenario 1: REDIS_URL is unset in staging, but the swap delegate assumes Redis. Prediction: process-local fallback used; multi-process deploy sees split history; audit log diff missing events across restart boundary. Verifiable: restart pod, check jarvis-history-redis.test.ts mock falls back, assert ring buffer capacity invariant holds.
- Scenario 2: Calibration apply route triggered for proposal with MODEL_VERSION bump missing. Prediction: model-freeze guardrail rejects; no CalibrationApplied row; safety warning not posted. Verifiable: unit test asserts route returns 409/422 when proposal.status ≠ IMPLEMENTED.
- Scenario 3: CalibrationProposal OPEN for 15 days, but no warning fires because test only checks freshness at creation time. Prediction: stale proposal remains applicable; operator applies outdated delta; win rate moves opposite predicted direction; Jarvis safety warning from Priority 2a fires post-hoc but too late. Verifiable: test inserts proposal with created_at = now - 15 days, asserts warning fires.

I need to ensure total words >= 1000. THINK_TRACE >= 400. Let me draft carefully.

Also, I must not mention any betting terms. This document is about software, so it's fine.

Let's write.

Word count estimation: THINK_TRACE ~500 words. SOURCE_OPERATORS_AND_EQUATIONS ~300 words. RETROCAUSAL_GENEALOGY ~200 words. RECURSIVE_THEORY_OF_MIND ~200 words. CROSS_LAYER_VETO_ADJUDICATION ~150 words. RLVR_COUNTERFACTUAL_VETOES ~200 words. Total ~1550 words. Good.

Citations: Use [PAGE 1] and [PAGE 2] markers. Since the document is continuous, I'll split: [PAGE 1] covers title through Priority 4. [PAGE 2] covers Priority 5 through final note. I'll quote verbatim snippets and cite them.

Let's write the response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit of the Next-Session Handoff document. The handoff is ordered by priority, but the items form a dependency graph rather than a simple list. Priority 1a (Redis-backed Jarvis history) is the substrate for Priority 1b (durable Jarvis audit log): the audit worker calls loadJarvisAssessment() and computes diffJarvis(previous, current). If sharedJarvisHistory() remains process-local and multi-process, the previous and current assessments may be read from different in-memory ring buffers, making diffJarvis() compare disjoint state snapshots rather than a continuous time series. Therefore, durable history is not merely an operational convenience; it is a correctness precondition for audit integrity across process restarts [PAGE 1].

Priority 1b then feeds Priority 2a. The calibration apply route must post a Jarvis safety warning until the next calibration cycle confirms the delta moved the win rate in the predicted direction. That confirmation loop requires an audit trail of prior states so the system can compare pre- and post-application behavior. Without Priority 1b, the confirmation step has no durable diff to evaluate, and the safety warning becomes either permanent or vacuous [PAGE 1].

Priority 6 (Calibration Proposal freshness audit) is a guardrail for Priority 2a. The model-freeze guardrail already enforces that MODEL_VERSION bumps land with an IMPLEMENTED CalibrationProposal, but the document notes no test exists that proposals do not sit OPEN forever [PAGE 2]. A proposal that remains OPEN for weeks accumulates operational risk: an operator may feel pressure to apply a stale delta before the 14-day threshold, or worse, apply it after the threshold without the new Jarvis safety warning because the warning logic was never implemented. The 14-day freshness boundary interacts with the 10-minute BullMQ worker cadence [PAGE 1]. The worker runs on a short clock; the freshness rule runs on a long clock. If the worker only evaluates proposals at ingestion time rather than scanning for age-based staleness, a proposal can sit OPEN for 13 days, 23 hours, and 59 minutes without warning, then be rushed into production in the final minute—a clock compression trap.

Priority 3 (admin dashboard rebuild) depends on existing types in app/api/admin/dashboard/route.ts, but the current dashboard-view.tsx is explicitly a stub "rebuilt after a truncation incident" [PAGE 1]. That truncation incident implies prior data loss; restoring ingestion runs, recent picks, signal coverage, and pending picks must not re-truncate or silently drop fields. The source-level test asserting the rebuilt view consumes every key the API returns is therefore a contract test against the API schema, not merely a UI test [PAGE 1].

Priority 5 (pre-commit gating) and Priority 7 (snapshot regeneration CI) are shift-left infrastructure items. Priority 5 gates test:brand-safety on staged files under apps/web/{app,components,lib}/, while cockpit tests run only on PR via CI [PAGE 2]. The gray zone here is partial staging: if a commit touches both brand-safety-relevant components and cockpit logic, the pre-commit runs brand safety but defers cockpit tests to CI. A developer could push cockpit-breaking code that passes pre-commit but fails CI, creating a merge-blocking loop. Priority 7 introduces non-determinism risk: booting a Next.js app in CI and committing regenerated snapshots to the PR branch can produce merge conflicts if multiple PRs regenerate simultaneously, or silent drift if the dev server renders differently than the CI boot sequence [PAGE 2].

Gray-zone audit summary: (1) Redis fallback behavior when REDIS_URL is absent is specified, but production durability is not guaranteed without an explicit provisioning check; (2) BullMQ "runs every 10 minutes" lacks a stated idempotency key, risking duplicate audit rows if a job overlaps its own schedule; (3) the ADMIN-gated calibration route has no stated authorization middleware or reason-length validation, creating a human-factors injection surface; (4) the 14-day freshness threshold lacks timezone and business-day specification; (5) snapshot regeneration in CI has no stated conflict-resolution strategy for concurrent PR branches. These gray zones must be resolved before the next session treats the list as implementation-ready.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and breakdown regimes.

Let the Jarvis history state at time t be H_t. The in-memory implementation is a process-local ring buffer H_t ∈ M, where M is volatile memory tied to a single process ID. The Redis-backed implementation delegates to H_t ∈ R, where R is persistent key-value state addressable by REDIS_URL. The delegation predicate is:

P(REDIS_URL) ≡ (REDIS_URL ≠ ∅) → delegate(sharedJarvisHistory(), RedisImpl) ∨ fallback(InMemoryImpl)

Units: capacity C ∈ ℕ (number of ring-buffer entries); ordering invariant: for all i < j, timestamp(entry_i) ≤ timestamp(entry_j) [PAGE 1].

The durable audit worker operates on a 10-minute cadence τ = 600 s. Let J_k = loadJarvisAssessment() at worker invocation k. The diff operator is:

ΔJ_k = diffJarvis(J_{k-1}, J_k)

Persist predicate: ||ΔJ_k||_0 > 0 (non-zero information change measured in changed audit fields). The persisted row is written to PostgreSQL table JarvisAuditLog (new Prisma model). Paging alerts are generated by alertsFromDiff(ΔJ_k) and routed to operator-configured sinks. Units: information difference measured in field-count changes (dimensionless count) or, if serialized, bytes of JSON/tab-separated output [PAGE 1].

Calibration application: Let p be a CalibrationProposal with status σ(p) ∈ {OPEN, IMPLEMENTED}. The apply route is gated by:

G_apply(p) ≡ [σ(p) = IMPLEMENTED] ∧ [MODEL_VERSION bump enforced] ∧ [ADMIN authenticated] ∧ [reason ≠ ∅]

On success, a CalibrationApplied audit row records delta δ_p. A Jarvis safety warning S_t is posted and remains active until the next calibration cycle confirms:

sign(w_{t+cycle} - w_t) = sign(δ_p)

where w_t is a win-rate probability w_t ∈ [0,1]. Breakdown regime: if the post-cycle sample size N satisfies N < N_min (insufficient observations), the sign test is statistically undefined, and S_t cannot be invalidated. This produces an indefinite warning singularity [PAGE 1].

Calibration freshness rule: T_open = t_now - t_created. Warning fires iff T_open > 14 days = 1,209,600 s [PAGE 2].

Pre-commit gate: G_commit ≡ [∃ f ∈ staged : f ∈ apps/web/{app,components,lib}/*] → run(test:brand-safety). Cockpit tests are deferred to CI-on-PR, not gated locally [PAGE 2].

Snapshot regeneration CI job: J_CI ≡ boot(Next.js dev server) → run(snapshots:regen) → commit(result, PR branch). Breakdown regime: non-deterministic snapshot output or concurrent PR commits causes merge conflict or silent staleness [PAGE 2].

All page citations refer to the two-page handoff document: [PAGE 1] spans the title through Priority 4; [PAGE 2] spans Priority 5 through the final overnight-summary instruction.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The handoff's technical lineage traces through several established patterns. The move from process-local ring buffer to Redis-backed durability mirrors the classic transition from volatile application memory to distributed cache persistence (RDB/AOF models in Redis). The BullMQ audit worker that runs every 10 minutes belongs to the distributed job-queue family, where a persistent backend decouples task scheduling from process lifetime [PAGE 1]. The CalibrationProposal model with an IMPLEMENTED status and MODEL_VERSION guardrail is an MLOps-style model governance pattern: a model-freeze policy that couples version bumps to explicit proposal records, preventing silent weight or delta drift [PAGE 1][PAGE 2]. The admin dashboard stub, described as rebuilt after a truncation incident, reflects technical debt from prior data loss; restoring the historical DashboardData and SnapshotDetail types is an exercise in schema archaeology, recovering the full operator console design from existing API route definitions [PAGE 1].

Multi-week traps emerge when these dependencies are ignored. If Priority 1a is deferred, Priority 1b's diffJarvis() loses cross-restart context within the first week: a process restart wipes the in-memory buffer, so the audit worker compares an empty previous state against the current state, producing false-positive diffs or missing genuine deltas [PAGE 1]. If Priority 6 is not implemented, OPEN CalibrationProposals accumulate unbounded; over a multi-week horizon, stale proposals become attractive targets for rushed application during operational incidents, defeating the model-freeze intent [PAGE 2]. If Priority 7 is not wired, committed snapshots go stale silently across successive PR cycles; after three or four weeks, the snapshot suite no longer reflects the rendered UI, and visual regression confidence decays to zero [PAGE 2]. If Priority 5 remains only a CI job, brand-safety defects are caught after push rather than at commit time, extending the feedback loop from seconds to hours or days and increasing the probability that defective copy merges into the main branch [PAGE 2]. The next session should therefore treat Priorities 1a, 1b, 2a, and 6 as a single atomic cluster, because separating them by more than one week reintroduces the very failure modes the handoff is designed to eliminate.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The next session operator will read this handoff first, then reports/launch-night/overnight-summary.md for second-pass context. A recursive theory-of-mind model predicts the operator will assume the seven priorities are approximately independent work streams, each estimable in isolation. That assumption is false. Priority 1a enables Priority 1b; Priority 1b enables the confirmation half of Priority 2a; Priority 6 constrains the applicability of Priority 2a. The operator must therefore hold a joint mental model, not a stack of separate tickets.

Crisis habit regression is the primary behavioral risk. Under launch-night fatigue, the team may regress to two forbidden patterns: (1) auto-applying calibration deltas to "move faster," despite the explicit "never auto-apply" constraint [PAGE 1]; and (2) skipping the typed reason or ADMIN gate on the calibration route because the UI pressure to ship is high. The counter-trap is to hard-enforce both constraints in code and tests before any operator touches the route: the model-freeze guardrail must reject non-IMPLEMENTED proposals at the route layer, and the apply endpoint must require a non-empty, typed reason string [PAGE 1].

Clock mismatch creates a second recursive trap. The BullMQ worker ticks every 10 minutes (short clock), while the CalibrationProposal freshness warning fires after 14 days (long clock) [PAGE 1][PAGE 2]. An operator watching the short clock may see no immediate audit fireworks from a stale OPEN proposal and conclude it is safe to leave unattended. Then, as the 14-day boundary approaches, urgency compresses the review window, and the operator applies a delta that has not been validated against current model weights. The recursive counter-trap is to schedule the freshness warning as an independent check, not as a side effect of the 10-minute worker, so the long clock cannot be drowned out by short-cadence noise.

Finally, the overnight-summary.md second pass may introduce new context that re-prioritizes the list. The operator must not treat this handoff as immutable; rather, they should read it as a dependency-ordered scaffold and re-derive the critical path after the second pass, checking whether any new item invalidates the 1a → 1b → 2a → 6 chain.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Veto analysis across physical, human-factors, and environmental layers.

Physical layer: Priority 1a assumes "an existing Redis instance (REDIS_URL)." If Redis is not provisioned in the deploy target, the code falls back to in-memory per the specification, but production durability is lost. Veto condition: do not promote the Redis-backed swap to production until REDIS_URL is verified present and reachable; otherwise the fallback silently violates the durability requirement. Priority 1b requires PostgreSQL connectivity for the JarvisAuditLog Prisma model. Veto condition: the BullMQ worker must fail closed (no silent drop) if the database connection is unavailable. Priority 7 requires CI to boot a Next.js dev server. Veto condition: if the dev server fails to boot deterministically in the CI runner (port conflicts, missing environment variables, cold-start latency), snapshot regeneration must not auto-commit partial or mismatched output [PAGE 1][PAGE 2].

Biomechanical/human-factors layer: Priority 2a's apply route is ADMIN-gated and requires a typed reason. Veto condition: if the authorization middleware has not been unit-tested for role boundaries, a non-admin actor could invoke /cockpit/calibration/[id]/apply and bypass the model-freeze guardrail. The typed reason field must enforce minimum length and reject whitespace-only strings; otherwise operators can submit garbage reasons, destroying the audit trail's accountability value [PAGE 1]. Priority 1b's alertsFromDiff forwards paging alerts to Slack webhook or PagerDuty. Veto condition: if the sink is misconfigured or the webhook secret is absent, paging alerts fail silently; the worker must surface sink failures as job errors, not swallowed exceptions [PAGE 1].

Weather/environmental layer: This is a software system with no direct weather dependency, but CI runner environment acts as a proxy weather layer. Network flakiness, runner timezone drift, and shared-runner contention can affect the 10-minute BullMQ schedule and the snapshot regeneration boot sequence. Veto condition: snapshot regeneration commits must include a deterministic build identifier and timestamp so that concurrent PR branches do not overwrite each other's output; if the CI environment cannot guarantee deterministic rendering, the GitHub Action must fail rather than commit stale snapshots [PAGE 2].

Adjudication rule: any veto in the physical or authorization layer halts the corresponding priority item until remediated; no workaround is permitted that converts a hard failure into a silent fallback.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) counterfactual veto scenarios with predictions.

Scenario 1 — Redis unavailability counterfactual. Veto condition: REDIS_URL is unset in the staging environment, but sharedJarvisHistory() is swapped to delegate to Redis without validating the connection at boot. Prediction: the fallback to in-memory activates, but multi-process deploy instances each maintain disjoint ring buffers; after a rolling restart, the audit worker's diffJarvis(previous, current) compares state from different processes and generates spurious audit rows. Verifiable test: run jarvis-history-redis.test.ts with a mocked ioredis client that throws on connection; assert the same ordering and capacity invariants hold under fallback and that cross-process history is not falsely claimed as durable [PAGE 1].

Scenario 2 — Calibration apply without MODEL_VERSION counterfactual. Veto condition: an operator invokes /cockpit/calibration/[id]/apply for a CalibrationProposal whose status is OPEN (not IMPLEMENTED) and whose MODEL_VERSION bump is absent. Prediction: the model-freeze guardrail rejects the request before any delta is recorded; no CalibrationApplied row is created; no Jarvis safety warning is posted because no application occurred. Verifiable test: unit test the apply route reducer with a fixture where proposal.status ≠ IMPLEMENTED; assert HTTP 409/422 and assert the CalibrationApplied Prisma create is never called [PAGE 1].

Scenario 3 — Stale proposal freshness counterfactual. Veto condition: a CalibrationProposal has been OPEN for 15 days (T_open > 1,209,600 s), but no freshness warning exists because Priority 6 was not implemented. Prediction: an operator applies the stale delta under time pressure; the post-calibration win rate moves opposite the predicted direction because the proposal's assumptions have decayed; the Priority 2a Jarvis safety warning fires only post-hoc, after the bad delta is live. Verifiable test: insert a fixture proposal with created_at = now - 15 days into the test database; run the freshness-audit function; assert the Jarvis safety warning fires and that the proposal is flagged as stale before any apply route can be enabled [PAGE 2].
</RLVR_COUNTERFACTUAL_VETOES>