# ops/archive/root-museum/AUTONOMOUS_OPERATING_SYSTEM.md
## What it is (1-2 sentences)
The design spec for GSN as an autonomous back office under tight human approval gates: six operator agents (JARVIS/SARAH/TAL/SCOUT/AVA/BOBBY) layered on an existing task/decision state machine, plus a model-orchestration & cost plan and a prioritized automation roadmap.

## Key metrics/methods (formulas where given, else "not specified")
- Task state machine: `CockpitTaskStatus {NEW, ROUTED, DRAFTED, NEEDS_REVIEW, APPROVED, REJECTED, BLOCKED, ARCHIVED}`; automation owns NEW→ROUTED→DRAFTED→NEEDS_REVIEW and *→BLOCKED; human owns NEEDS_REVIEW→APPROVED|REJECTED; deliberately NO DRAFTED→APPROVED path. Every transition writes a `CockpitDecision` row in the same transaction.
- Risk/compliance: `CockpitRiskLevel {LOW, MODERATE, HIGH, COMPLIANCE_HOLD}`; `CockpitComplianceStatus {NOT_APPLICABLE, CLEAR, REVIEW_REQUIRED, HOLD, REJECTED}`.
- 2026 model pricing per M in/out (verified-ext): Haiku 4.5 $1/$5, Sonnet 4.6 $3/$15, Opus 4.7 $5/$25. Repo pricing constant $3/$15 = real Sonnet-4.6 pricing (confirms Sonnet is today's baseline; every call site hardcodes `claude-sonnet-4-6`, no prompt caching).
- Cost method: cheap models for structured work (Haiku ~0.33× vs Sonnet baseline), prompt caching on static system prompts (cache reads 0.1× input; up to 90% cost / 85% latency cut; default TTL dropped 1h→5min on 2026-03-06, so explicit 1h TTL for periodic single-shots). Reported 30–70% routing savings, no quality loss.
- Routing table (rel. cost vs Sonnet 1.0×): Haiku 4.5 for copy/banned-phrase scan, news/line-movement classification (SCOUT), funnel anomaly tagging (BOBBY) → ~0.33×; BLOG/STUDIO Sonnet cached → ~1.0→0.6×; MODEL_JOURNAL_DRAFT/PRE_MORTEM Sonnet → ~1.0×; MODEL_COURT_ANSWER and CALIBRATION_WEEKLY_INSIGHT Opus 4.7 → ~1.4–1.7×.
- Surface budgets: Studio $500/mo, Model Court $2000/mo; thresholds yellow/orange/red/hard_cap.
- Jarvis thresholds: settlement >12h amber / >36h red; schedules: every 15 min + on task create.

## Data sources named
- The Odds API ingestion (7 sports × 3 markets, 1h freshness); `SourceSnapshot` raw payloads; line-movement fields; Stripe-derived subscription telemetry; `ClaudeApiCallRecord` cost ledger.

## Findings (numbers and facts, not vibes)
- Six agents verified in repo (`agents.ts`, `schema.prisma`): JARVIS (orchestrator/chief of staff), SARAH (support triage, never sends), TAL (engineering drafts; hard stops: no prod deploy, no destructive DB op, no migration auto-apply), SCOUT (sports research; cite a source snapshot or emit nothing), AVA (content drafts from approved data; `scheduledFor` is inert metadata — no auto-publish), BOBBY (funnel analytics observation only; no Stripe live mutation).
- Doctrine: every agent drafts; only a human commits anything externally visible (`AGENTS[*].externalActions: "NONE"`); zero hard-stop violations in current state per repo audit.
- The gap (R6): six call sites hardcode Sonnet with no prompt caching — the single highest-leverage safe improvement is one additive `pickModelForSurface()` router + optional `cache` field in `messages.ts`, default Sonnet for all surfaces (zero behavior change by default).
- Prioritized roadmap: P0 settlement reliability (monitor `settleSport()`, stale-unsettled-picks alert → JARVIS RED); P0 calibration semantics — persist modeled win-probability DISTINCT from the confidence UX score, make proposals market-aware, bump MODEL_VERSION (operator sign-off); P1 model routing + caching; P1 agent-eval harness; P1 CLV capture (closing-line value — the sharp's gold-standard; GSN already stores opening lines); P2 integration tests, odds failover, vuln triage, repo hygiene.
- Cross-cutting metrics: trust = Brier + discrimination + (new) CLV, publicly graded; cost = $/surface, $/approved-artifact, cache-hit ratio; throughput, safety, quality.
- `canApplyCalibrationAdjustments` is permanently `false` in code (`jarvis.ts:52`) — calibration adjustments never auto-apply.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- CLV capture (closing-line value) as the sharp's gold-standard trust metric, with opening lines already stored — [TRUST-SIGNAL]
- P0 calibration semantics: modeled win-probability stored separately from confidence UX score — [TRUST-SIGNAL]
- Human-gated publishing pipeline (no DRAFTED→APPROVED path, compliance holds) as claim-governance — [TRUST-SIGNAL]
- Model-routing cost plan (0.33× Haiku for structured classification, cached Sonnet prose) — [OTHER]
- Six-agent drafting OS pattern (agents draft, humans approve) — [OTHER]

## Engine-actionable? (yes/no + one-line what)
yes — Wire CLV capture (opening lines already stored) as the gold-standard calibration signal, and persist modeled win-probability as a field distinct from the confidence UX score.
