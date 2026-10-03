# docs/ai/jarvis/JARVIS_ARCHITECTURE.md
## What it is (1-2 sentences)
The canonical architecture doc for Jarvis — the governed intelligence layer of Galaxy Sports Edge — stating it is a deterministic, draft-only, zero-autonomy system: it senses/interprets/prioritizes/explains/routes work, but every externally visible action waits for human approval (last updated 2026-06-11, status DESIGNED, "zero capabilities are autonomous").
## Key metrics/methods (formulas where given, else "not specified")
- **Deterministic assessment on every cockpit load**: `buildOwnerSummary()` is pure and I/O-free (no `Date.now()`, no model calls at runtime); state is serializable and reproducible for a given summary.
- **Capability registry**: **16 capabilities** with a status ladder and wiring score (`apps/web/lib/jarvis/capability-registry.ts`).
- **Agent council**: **15 governed seats**, each with charter, owned capabilities, escalation; `externalActions: "NONE"` is a hard invariant on every seat; `canExecute` is `false` across the entire registry.
- **Ask Jarvis**: **18 deterministic intents** (9 OPERATIONS + 9 ARCHITECTURE), fixed intent set — not free-form conversation; every answer carries confidence + caveat + next action.
- **Operating-loop posture** (8 phases): SENSE WIRED, INTERPRET WIRED, DECIDE WIRED, EXPLAIN WIRED, ACT_SAFELY PARTIAL, REMEMBER NOT_WIRED, AUDIT PARTIAL, IMPROVE NOT_WIRED — **4 of 8 WIRED, 2 PARTIAL, 2 NOT_WIRED**; there is no "AUTONOMOUS" status, only WIRED/PARTIAL/NOT_WIRED.
- **Performance display gate**: `displaySafe` is true only when `PERFORMANCE_STATS_ENABLED` is open AND canonical sample size meets minimum; `actualWinRate` is `null` whenever `displaySafe` is false; pending and bootstrap picks are never counted; the **70% figure is always the target, never a claimed result**.
- **Memory honesty**: `memory.wired` is `false` until a real memory store exists — any claim of remembered context before then would be fabrication.
## Data sources named
- PostgreSQL/Prisma (picks ledger, settlement records, gate flags), BullMQ + Redis (workers), The Odds API (ingestion), the five protocol docs in `docs/ai/jarvis/` as the only durable Jarvis memory.
## Findings (numbers and facts, not vibes)
- 16 capabilities, 15 council seats, 18 Ask-Jarvis intents, 8 operating-loop phases (4 WIRED / 2 PARTIAL / 2 NOT_WIRED).
- Today the count of capabilities that execute autonomously without human intervention is **zero** — intentionally; nothing is labeled ACTIVE unless it truly executes autonomously.
- Ask Jarvis answers from live state with supporting facts, confidence, and caveats; **no model calls happen at cockpit runtime**.
- Trust rules enforced in code: no fake ACTIVE, drafts only, performance display gates, no model calls at runtime, honest absence (AI Ops telemetry reported unavailable until instrumented), memory honesty.
- File map pins implementation to: `apps/web/lib/jarvis/capability-registry.ts`, `agent-council.ts`, `intelligence-state.ts`, `apps/web/lib/cockpit/jarvis.ts`, `owner-summary.ts`, `ask-jarvis.ts`, `apps/web/app/cockpit/`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Zero-autonomy posture + canExecute=false + drafts-only → TRUST-SIGNAL
- Performance display gates (no win-rate claims below minimum sample; 70% is target, never result) → TRUST-SIGNAL
- Deterministic, model-call-free owner summary → TRUST-SIGNAL
- Capability/council registry as single source of truth → OTHER (architecture/governance)
- Picks versioned + settlement ledger canonical (AUDIT partial) → TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
**Yes** — the 70%-is-target-never-result rule and the display-safe/minimum-sample gating pattern are the exact labeling discipline the engine needs for calibration-state honesty on any public surface (uncalibrated signals compute in shadow, never publish).
