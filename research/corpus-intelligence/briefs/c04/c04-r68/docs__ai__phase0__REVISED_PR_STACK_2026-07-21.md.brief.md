# docs/ai/phase0/REVISED_PR_STACK_2026-07-21.md
## What it is (1-2 sentences)
The post-Phase-0 dependency-ordered plan (2026-07-21) for what comes after Phase 0 review: a 12-item stack starting with Phase 0 truth docs, splitting #147 into five single-purpose PRs, and explicitly not creating replacement PRs yet.
## Key metrics/methods (formulas where given, else "not specified")
- Stack items 1–12 in dependency order: (1) phase0-truth-convergence docs; (2–6) split of #147 into fix/hash-validation, fix/ci-postgres-health, security/actor-boundaries, payments/checkout-attempt-idempotency, settlement/missing-score-quarantine; (7) feat/cost-policy (#148, retargeted to "foundation"); (8) feat/dispatch-telemetry (#151, same retarget); (9) feat/ai-control-plane-core (NEW, not started); (10) feat/ai-credit-reconciliation (NEW, blocked on NOVA's credit persistence); (11) feat/command-usage-telemetry (#150); (12) docs/archive-integration-research (NEW, small).
- #147 status: open draft, CI green, but contains 2 REJECT_UNSAFE files (stripe.ts, settle-sport.ts) + 2 EXTRACT_AFTER_REDESIGN files (hash.ts, ledgers.ts) — must NOT merge as-is.
## Data sources named
None as data sources. References `AI_CONTROL_PLANE_ADR_2026-07-21.md` (gap analysis), PR145_PR146 convergence map, NOVA's `monetization.ts`/`policy.ts`.
## Findings (numbers and facts, not vibes)
- #146 (NOVA) proceeds on its own track; its not-yet-started persistence-design phase should read the convergence map first (credit-lifecycle and cockpit-dashboard rows).
- Explicit non-goals: no merge/deploy/external action authorized; items 9–10 and 12 not started (planning placeholders, not branches); #146 not modified, retargeted, or rebased.
- #147 should be closed once its 5 replacements exist — same pattern used for #145.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: execution-order intelligence only (PR sequencing, security redesign pattern).
- TRUST-SIGNAL: REJECT_UNSAFE/EXTRACT_AFTER_REDESIGN classification discipline — unsafe files blocked from merge as-is.
## Engine-actionable? (yes/no + one-line what)
No — PR sequencing and merge-governance plan; no engine signal content.
