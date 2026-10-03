# docs/ops/hermes/BUILD_QUEUE.md

## What it is (1-2 sentences)
A twelve-task autonomous overnight build queue (H0–H11, safest-first) for a headless coding agent ("Hermes job 2") on branch `claude/fable-5-ultracode-plan-ptru4e`, with exhaustive file-touch lists, verify blocks, and hard safety rules — diagnostics/reports first (H0–H6), then small additive code changes (H7–H11).

## Key metrics/methods (formulas where given, else "not specified")
- Baselines: typecheck errors exactly 3 (known issue #421, three off-limits files); lint exit 0; guardrails 22/25 passed (model-freeze #419, api-v1-boundary #420, ai-transport-import-boundary tracked debt).
- Task details with concrete specs:
  - H3: pin promptfoo 0.122.0 (was `@latest`).
  - H4: route-auth inventory of 176 API route files (`apps/web/app/api/**/route.ts`) — columns: path, methods, auth mechanism, body parsing, validation (zod), self-declared public; summary counts (NONE FOUND, bodies without validation, entitlement checks).
  - H7: `normalizeEntityName(raw)` pure function — NFKD unicode normalize, strip combining marks, lowercase, drop periods/apostrophes, collapse whitespace, strip trailing generational suffix (jr/sr/ii/iii/iv/v only as final token with ≥2 prior tokens); 13 required test cases incl. "A.J. Brown"/"AJ Brown" → "aj brown" convergence, idempotence, collision test.
  - H8: entity-graph repository layer — `upsertEntity` on unique triple (entityType, normalizedName, sport) with `sport` defaulting to `""` (never NULL — Postgres treats NULLs as distinct in unique indexes); `linkEntities` throws on empty sourceRef/sourceTier non-finite; confidence defaults 50, clamped 0–100; `neighbors` one-hop, limit default 100, cap 500.
  - H9: RouterLegibilityCard — 6 ClaudeSurface values (studio, journal, calibration-insight, model-court, content, brief); blended cost = input×0.75 + output×0.25; surfaces' active/recommended tiers (brief: haiku; model-court: sonnet→opus, +140% cost upgrade shown as cost not saving).
  - H10: offline routing-cost report script; `--check` exits 1 if any active tier >25% more expensive than recommended; report path `reports/ai/routing-cost-<YYYY-MM-DD>.md`.
  - H11: wire response cache into free-lane; cache activates only when `LLM_RESPONSE_CACHE_ENABLED==="true"` + caller passes cacheStore + `request.surface !== undefined`; exact-key, not semantic; non-cacheable surfaces (only `brief` and `content`) and temperature>0 refused; identity test requires byte-identical behavior with no env/store.
- Hard rules: git push forbidden; file-touch lists exhaustive; off-limits: schema.prisma, migrations, .github/workflows, guardrails, .claude, .env, package-lock.json, ai-control-plane, .gitignore, .githooks, plus three typecheck-error files (deliberate open design questions, issue #421); no new deps, no fabricated data, no `any`; two strikes then abandon; commits tagged `[hermes-H<n>]`; pre-commit secret scan as tripwire (never `--no-verify`).
- Stop conditions: all tasks done/abandoned; two same-cause abandons in a row; typecheck >3; about to touch off-limits file; 8-hour cap.

## Data sources named
- None (internal repo/tooling only).

## Findings (numbers and facts, not vibes)
- No sports findings; this is process/infra documentation. Confirms repo conventions: every number that reaches a user must come from real data (rule 7); fabricated relationships (H9's two surface vocabularies) called out as forbidden; provenance-required entity graph design (no provenance = fabricated relationship).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: entity-graph design (upsert on normalized name triple, provenance-gated edges) is a candidate data structure for QB/coaching/player-entity linking in the engine — infra pattern, not data.
- No QB, coaching, OL, or scheme material.

## Engine-actionable? (yes/no + one-line what)
**No** — agent-build process doc; no ingestible sports intelligence (entity-graph schema pattern noted as future infra consideration, not actionable data).
