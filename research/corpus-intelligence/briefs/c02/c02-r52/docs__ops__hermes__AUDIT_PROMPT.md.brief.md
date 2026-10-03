# docs/ops/hermes/AUDIT_PROMPT.md
## What it is (1-2 sentences)
A frozen task specification for a read-only security and quality audit of the Sports production platform (Hermes Job 1). It defines 28 fixed probes in 8 blocks, a severity lookup table, and evidence rules the auditor must follow with zero discretion on classification.

## Key metrics/methods (formulas where given, else "not specified")
- Severity lookup table: BLOCKER = hardcoded credential / critical-high npm advisory in prod dep / frontend-only premium gating / raw SQL `${...}` interpolation; HIGH = unauthenticated API route with no "public" comment / empty catch / moderate advisory / failing guardrail / unvalidated `req.json()` / all-skipped test file; MEDIUM = `any`/`as any`/`@ts-ignore` / `console.log` in api routes; LOW = TODO/FIXME/HACK / low advisory; INFO = anything else.
- 28 probes in 8 blocks (Secrets, Dependencies, Paywall & authorization, Injection & input handling, Type safety & error handling, Test integrity, Governance, Debt inventory).
- Evidence rule (RULE 2): no evidence, no finding — each finding must cite file path + line number + verbatim line of text.
- Hard rules: only files created in `handoff/` (AUDIT_FINDINGS.md, AUDIT_COVERAGE.md, JOURNAL.md); `git status --short` must print nothing at end; never print a secret value (record `[REDACTED — <n> chars]`); probes capped (P10: first 12 files, P11: 25 files, P14: 25 files).
- Expected probe volumes from the 2026-08-13 baseline run: P11 ~96 of 176 API routes with no visible auth (most legitimately public); P17 ~66 files with type escapes (max 8 in one file); P21 ~17 skipped tests; P25 ~33 raw fabricated-data markers; P27 22/25 guardrails passed; P28 ~14 TODOs.
- P20 known typecheck baseline (2026-08-13): exactly 3 errors tracked as GitHub issue #421 (execute-autonomy-cycle.ts(33,3) TS2353; ranking-power-control.ts(227,39) TS2339; proven-path-seed.ts(86,9) TS2353).
- Stop conditions: all 28 probes done; 3 probes fail with same error; about to modify a file outside `handoff/`; 6 hours elapsed.

## Data sources named
- Git history of the Sports repo via `git grep` (tracked files only); `npm audit --omit=dev --json`; `npm run typecheck`, `npm run lint`, `npm test`; repo's own guardrail scripts (`scripts/guardrails/secret-scan.mjs`, `dependency-audit.mjs`, `api-v1-boundary.mjs`, `openapi-security-scan.mjs`, `api-payload-rights-scan.mjs`, `run-all.mjs`).

## Findings (numbers and facts, not vibes)
- The file is a specification document, not a results document — it contains zero audit results, only probe definitions and expected baselines.
- 28 probes are defined; P6 and the guardrail baselines reference 25 guardrail scripts (P27 expects 22/25 passing with exactly these pre-existing failures: `model-freeze` (#419), `api-v1-boundary` (#420), `ai-transport-import-boundary`).
- It names 3 expected typecheck errors as GitHub issue #421 [OTHER: process/audit baseline].
- It requires all 28 probes run in order, with no invented extra probes; journaling is one line per probe in `handoff/JOURNAL.md`.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: P25 fabricated-data markers probe enforces the repo's anti-fabrication rule — code reaching users that shows mock/fake/sample data is severity HIGH; this is the integrity mechanism behind the engine's honesty boundary.
- TRUST-SIGNAL: P26 freshness validation maps where staleness checks and remote-data fetches live (context, INFO) — relevant to data-freshness trust for predictions.
- OTHER: the whole document is a governance artifact — severity table, evidence rules, and stop conditions for an automated auditor.

## Engine-actionable? (yes/no + one-line what)
No — it is an ops/governance spec containing no sports intelligence, metrics, or model findings.
