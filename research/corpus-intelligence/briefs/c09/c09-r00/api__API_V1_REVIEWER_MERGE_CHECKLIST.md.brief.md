# api/API_V1_REVIEWER_MERGE_CHECKLIST.md
## What it is (1-2 sentences)
Reviewer checklist for the 12-branch API v1 stack: mandatory merge order, pre-merge stop signs (anything that would touch live routes/secrets/DB execution stops review), and the required local verification commands.
## Key metrics/methods (formulas where given, else "not specified")
- Stack order: 12 branches (`codex/api-persistence-shadow-adapter` … `codex/sunday-frontier-maxforce-2026-07-05` live route promotion packet slice); no later branch merges before earlier ones are merged or recreated.
- Pre-merge stop signs: `apps/web/app/api/v1`, API v1 Prisma models/migrations/env vars, provider SDK calls or `fetch(`/`process.env` reads from `apps/web/lib/api/v1`, raw key persistence, DB execution, AWS/DNS/billing/partner mutation.
- Focused test list: 11 api-v1 test files, then typecheck, lint, guardrails, full test, `git diff --check`.
## Data sources named
None external — internal docs (`API_V1_STACK_HANDOFF.md`, `API_V1_PROMOTION_READINESS_MATRIX.md`, fixtures, hostile fixture JSON).
## Findings (numbers and facts, not vibes)
- Next step (disposable DB rehearsal) is blocked until owner names the disposable target, approves scope, approves destroy-by timestamp, and confirms rollback evidence.
- Live route promotion packet keeps `liveRouteCreationAllowed=false` and `commandsExecutableNow=false` even when all evidence is simulated-reviewed. Allowed work stays local-only (docs, synthetic fixtures, guardrails, tests, PR material).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (API stack governance).
## Engine-actionable? (yes/no + one-line what)
No — merge-governance checklist; no intelligence content.
