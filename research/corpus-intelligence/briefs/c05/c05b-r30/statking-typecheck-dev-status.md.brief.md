# statking-typecheck-dev-status.md
## What it is (1-2 sentences)
A status table of TypeScript/dev commands for the StatKing product in `apps/web`, recording which checks pass or fail and separating StatKing-related checks from repo-wide pre-existing drift.

## Key metrics/methods (formulas where given, else "not specified")
- `npm run typecheck --workspace=apps/web` — FAILS on pre-existing Prisma/generated-type drift and implicit-any errors outside StatKing; StatKing-related? false; status Warning.
- `npm run dev --workspace=apps/web` — starts Next dev, compiles instrumentation; StatKing-related? false; status Pass.
- `npm run statking:all` — Pass; StatKing-related? true; status Pass.
- `npm run test:statking` — Pass; StatKing-related? true; status Pass.
- Next action: regenerate Prisma/client types and clean repo-wide implicit-any debt in a separate branch; StatKing product-depth files are covered by focused tests.

## Data sources named
- None. File is CI/dev status only.

## Findings (numbers and facts, not vibes)
- All StatKing-specific checks (`statking:all`, `test:statking`) pass; the only failure is repo-wide Prisma type drift unrelated to StatKing.
- No numbers, metrics, or formulas beyond the 4-command table.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: dev-status hygiene; no on-field or engine intelligence content.

## Engine-actionable? (yes/no + one-line what)
No — a 4-row CI status table with no sports data, metrics, or methods.
