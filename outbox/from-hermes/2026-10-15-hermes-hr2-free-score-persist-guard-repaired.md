# H-R2 DONE — free-score-persist-guard was a swallowed TypeError, harness-only — 2026-10-15 (Hermes)

**Verdict: the live recorded-final guard did NOT weaken. The test harness went stale.** Filed OPEN in the
ledger during H-R1; repaired this run on `hermes/live-wip-2026-09-24` @ `3a41cfda4` (pushed, ls-remote
verified). Owner merge of that branch to main is still pending (unchanged from the H-R1 note).

## Root cause (measured, not inferred)

The three red guard tests did not see a wrong result — they saw a **throw**. Diagnostic run of the real
persister against the test's mocks printed the sport result the assertions never surfaced:

```
ok: false, error: "Cannot read properties of undefined (reading 'join')"
```

Chain: `free-score-persist.ts` `loadHenry()` denies henrygd (GSE-SEC-050, correct fail-closed) and logs the
refusal by reading `clearance.blocks.join(...)` / `clearance.warnings.join(...)` — hardening added in
`68ba1c410` (sheriff pass 2, PR #610 rebase). The guard test's `checkClearance` mock (last touched 2026-09-07,
PR #719) returned a bare `{ allowed }` object with no `blocks`/`warnings`, so EVERY test invocation of the
persister hit the deny branch and threw. The sport-level `try/catch` swallowed the TypeError into
`ok:false, gamesMatched:0`, and the assertions reported it as "updateMany not called" with no visible cause.
Vitest/esbuild strips types without checking them, so the mock-shape drift never surfaced as a type error —
the exact trap the stale-test-repair skill documents (Pattern 1, plus the vitest/tsc gap).

## Fix (2 files, one commit)

1. **Test mock restored to the real contract** (`__tests__/free-score-persist-guard.test.ts`): the mock now
   mirrors the full `ClearanceResult` shape from `lib/scraping/clearance-engine.ts` (allowed, requiresReview,
   source_id, mode, tool_id, intents, blocks as `{code,message}[]`, warnings, rightsSnapshot, checkedAt),
   with henrygd denied via a faithful `SOURCE_NOT_REGISTERED` block. Comment cites the drift evidence.
2. **Deny warn now prints codes, not blank brackets** (`lib/data-sources/free-score-persist.ts`):
   `blocks=[${clearance.blocks.map(b => b.code).join(", ") || "none"}]` — an operator grepping the log for
   `SOURCE_NOT_REGISTERED` can now find the refusal. Object-shape `.join(",")` printed `[object Object]` and
   read as "no reason given". No behavior change: the fetch is still refused, the return path is identical.

## Verification (all run this session)

- `free-score-persist-guard.test.ts`: **6/6 green** (was 3 failed | 3 passed).
- 14-file settlement/free-settlement sweep: **181/181 green** — the sweep is fully green on this branch for
  the first time since the mock drifted.
- `tsc --noEmit` (apps/web project): 103 pre-existing errors, **zero** in touched files. Scoped eslint on the
  two files: exit 0.
- Diagnostic harness deleted before commit; commit carries the secret-scan pass.

## Kernel for the next repair session (not an order)

The failure was invisible for ~5 weeks because the sport-level catch flattens any throw into
`ok:false, gamesMatched:0` and the guard assertions didn't print `result.sports[].error`. Any future test that
asserts on a persister sport result should `expect(result.sports[0]?.error).toBeUndefined()` first — one line
that would have turned this from a mock-drift hunt into an instant diagnosis.

— Hermes (autonomous run, Sports repo)
