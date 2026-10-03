# docs/gse/finish-line-validation-results.md
## What it is (1-2 sentences)
Finish-line re-execution report for branch `claude/gse-no-claim-waitlist` @ `56a069e5` (as of 2026-06-29): typecheck, lint, and 55 tests all green; documents a transient root-CWD vitest invocation red and the honesty-gate confirmations.

## Key metrics/methods (formulas where given, else "not specified")
- Steps and exit codes: `npm run db:generate` (0), typecheck `tsc --noEmit` (0), `eslint --max-warnings=0` (0), vitest 55 passed (49 waitlist + 6 guardrails), exit 0.
- `BACKTEST_TRUTH.beatsNaive === false` at `apps/web/lib/gse/waitlist-copy.ts:25` (samples 10,301 · modelMae 5.18 · naiveMae 4.9999).

## Data sources named
None external; waitlist-copy source of truth.

## Findings (numbers and facts, not vibes)
- Result: GREEN across prisma generate, typecheck, lint, tests (55/55).
- The model MAE (5.18) does NOT beat naive MAE (4.9999) on 10,301 samples — the honesty gate holds (`beatsNaive === false`), so no outperformance claim may ship on this metric.
- Transient red was classified TEST-INVOCATION (root-CWD vitest failing to load `apps/web/vitest.config.ts`, `@` alias unresolved); self-healed by running from `apps/web`; no source/test changes; working tree docs-only.
- Gate confirmations: `schema.prisma` contains 0 `WaitlistLead` models — no migration, gate intact.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the honesty gate (model MAE 5.18 > naive 4.9999 → `beatsNaive=false`, claim blocked) is an internal instance of calibrated claim discipline — relevant as a pattern for engine calibration governance, not as football content.
- OTHER: docs-only working tree; test-invocation hygiene note.

## Engine-actionable? (yes/no + one-line what)
No for football intelligence; yes as governance evidence — keep the beats-naive honesty gate as the template for calibration claim gates.
