# docs/api/API_V1_STACK_PR_INDEX.md

## What it is (1-2 sentences)
The master **stacked-PR index** for the API v1 shadow-stack sequence: a copy-paste-ready PR map of all 12 PRs in order (branch names, commit SHAs, PR-body doc paths, per-PR summaries), plus the current live-route-promotion and disposable-rehearsal-packet PR bodies, the previous promotion-readiness and autonomous-polish bodies, and the full previous R&D-polish PR body.

## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas or metrics; the content is a 12-PR stack map with commit references.

## Data sources named
None — no external data sources named.

## Findings (numbers and facts, not vibes)
- Stack (branch / commit / purpose):
  1. `codex/api-persistence-shadow-adapter` — `73d59271` — local API v1 persistence shadow adapter.
  2. `codex/api-v1-db-schema-proposal` — `481f83ab` — PR body `docs/api/API_V1_DATABASE_SCHEMA_PR_BODY.md`.
  3. `codex/api-v1-durable-adapter-harness` — `01dfe0c0` — PR body `docs/api/API_V1_DURABLE_ADAPTER_HARNESS_PR_BODY.md`.
  4. `codex/api-v1-dormant-durable-adapter-interface` — `6edddd26` — PR body `docs/api/API_V1_DORMANT_DURABLE_ADAPTER_INTERFACE_PR_BODY.md`.
  5. `codex/api-v1-durable-fixture-simulator` — `63c950f4` — PR body `docs/api/API_V1_DURABLE_FIXTURE_SIMULATOR_PR_BODY.md`.
  6. `codex/api-v1-durable-fixture-report-archive` — `f286054d` — PR body `docs/api/API_V1_DURABLE_FIXTURE_REPORT_PR_BODY.md`.
  7. `codex/api-v1-disposable-db-rehearsal-plan` — `fcee1716` — PR body `docs/api/API_V1_DISPOSABLE_DB_REHEARSAL_PLAN_PR_BODY.md`.
  8. `codex/api-v1-rd-polish-guards` — `9789a040` — API v1 boundary guard + npm script, edge-case durable fixtures, markdown report renderer + tracked rendered report, stack handoff, PR index.
  9. `codex/api-v1-autonomous-polish-hardening` — `6d7601e6` — hostile invalid fixture rejection, runtime table-count shape validation, reviewer merge checklist, README navigation, focused CI API v1 boundary job, verification log `docs/api/API_V1_AUTONOMOUS_POLISH_VERIFICATION_LOG.md`.
  10. `codex/api-v1-promotion-readiness-matrix` — `a1616bd6` — local-only promotion readiness gate matrix separating shadow evidence / repo boundary / owner approval gates; live promotion disabled in every state; expected status `owner_approval_required`.
  11. `codex/api-v1-disposable-rehearsal-packet` — commit: current branch after slice committed — non-executable disposable rehearsal packet builder consuming the readiness matrix; live promotion and commands disabled.
  12. `codex/sunday-frontier-maxforce-2026-07-05` live-route-promotion-packet slice — commit: current branch after slice committed — non-executable live route promotion packet builder; 10 review gates required; live route creation and command execution disabled in every state.
- GitHub CLI auth is required before live PR creation (status note at top).
- Previous R&D polish details: added `scripts/guardrails/api-v1-boundary.mjs`, wired `guard:api-v1-boundary` into `npm.cmd run guardrails`; test `apps/web/__tests__/api-v1-boundary-guard.test.ts`; fixture `apps/web/__fixtures__/api-v1/durable-fixture-edge-cases.json`; renderer `apps/web/lib/api/v1/durable-fixture-report-renderer.ts`; docs `docs/api/fixtures/API_V1_DURABLE_FIXTURE_REPORT.md` and `docs/api/API_V1_STACK_HANDOFF.md`; boundary guard fails if any forbidden surface (route, schema edit, migration, env, credential, provider call, DB execution, AWS/account mutation) appears accidentally.
- Follow-up rule from the R&D polish body: no database-adjacent implementation proceeds until the owner approves a named disposable target and rehearsal scope.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER** — Pure process/governance index for the API v1 shadow-stack PR sequence; no sports or engine-relevant content. (INFERENCE: the boundary-guard pattern — a CI check that fails if forbidden surfaces appear — is a generally reusable safety pattern.)

## Engine-actionable? (yes/no + one-line what)
No — process artifact only; no engine signal, metric, or method to adopt.
