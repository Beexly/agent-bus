# docs/ai/jarvis/JARVIS_MEMORY_PROTOCOL.md
## What it is (1-2 sentences)
Design document for Jarvis's memory system whose central, explicitly stated truth is that no persistent memory exists today: it defines three memory tiers — operational truth (LIVE via Postgres/OwnerSummary), architectural truth (LIVE via version-controlled markdown), and episodic memory (built in code but gated off, status NOT_WIRED) — plus a forward-looking write protocol and promotion criteria.
## Key metrics/methods (formulas where given, else "not specified")
- Capability promotion ladder: NOT_WIRED → DESIGNED (schema exists in repo) → MANUAL (human can write/read end-to-end) → DRAFT_ONLY (auto-proposed writes into a review queue) → ACTIVE (autonomous writes within record schema, audited). Not on the current roadmap until the tool router and audit log exist.
- Episodic records capture: decision, timestamp (UTC, never backfilled/estimated), actor, rationale, outcome (appended only when observable, never invented). Writes are append-only; corrections are new records referencing the old one.
## Data sources named
PostgreSQL (`JarvisMemoryEvent` + `JarvisDecision` models in `packages/db/prisma/schema.prisma`; `buildLiveMemoryStatus()` runs COUNT queries), version-controlled markdown docs (`JARVIS_ARCHITECTURE.md`, `JARVIS_CAPABILITY_REGISTRY.md`, `JARVIS_AGENT_COUNCIL.md`, `JARVIS_MEMORY_PROTOCOL.md`, `JARVIS_OPERATOR_BRIEF.md`); `mem0` named only as an integration-scaffolding option.
## Findings (numbers and facts, not vibes)
- Last updated 2026-06-11; status DESIGNED — episodic store is NOT_WIRED; the REMEMBER phase of the operating loop is NOT_WIRED.
- Tier (c) episodic memory is BUILT but GATED OFF: schema, state machine (8 states), conflict detector, sensitivity guards, server actions, and the env-gated autonomous write path (`recordMemoryEvent()`) all exist; `JARVIS_MEMORY_WRITE_ENABLED` defaults to `"false"`, and as of 2026-07-17 nothing in production calls the autonomous path.
- `memory.wired` is hard-typed `false` until a real store exists; any claim of remembered context before wiring "would be fabrication," which is a forbidden action of both the capability and the ARCHIVE council seat (Memory Librarian, also NOT_WIRED).
- 2026-07-17 stub-mode honesty guard: `buildLiveMemoryStatus()` originally reported `wired: true` when COUNT queries resolved, but `@sports/db`'s stub client (active whenever `DATABASE_URL` is unset/sentinel — local dev, CI, most test runs) resolves every `count()` to 0 without touching a real DB; it now checks `isStubMode()` first and short-circuits to the not-wired posture.
- Sensitivity guards block `public_claim_rule`/high/legal/hr/spend categories from `confirmed` without owner approval.
- Read protocol: recall must cite the stored record (id + timestamp) so every "Jarvis remembers" claim is verifiable.
- Never recorded: PII without consent, fabricated recall, secrets/credentials, fabricated telemetry or performance numbers; "absence of data is recorded as absence."
- Pending blockers (all require owner action): production migration (`DATABASE_URL` → real Postgres + `npm run db:migrate`), `wired: true` in live cockpit, `lastWritten`/`lastRecalled` timestamp telemetry (returns `null`), registry promotion to DESIGNED, REMEMBER phase → PARTIAL, `writePath: "WIRED_ACTIVE"` via owner-set flag plus a real production caller.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the honest-wiring posture (hard-typed `wired: false`, stub-mode honesty guard, fabricated recall as a forbidden action, absence-of-data recorded as absence) is the model for honest calibration/wiring-state labeling in the engine.
- OTHER: Jarvis agent infrastructure — not GSE prediction content.
## Engine-actionable? (yes/no + one-line what)
No — this is agent-infrastructure design, not prediction intelligence; the adoptable lesson is its honest-status discipline (never claim a store/wiring is live without proof), which the engine should mirror in calibration-state labeling.
