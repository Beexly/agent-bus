# ai/phase0/AI_CONTROL_PLANE_ADR_2026-07-21.md
## What it is (1-2 sentences)
An audit-only ADR (no code changes) measuring the session-built `cost-policy.ts`/`provider-dispatch.ts`/`credit-pool.ts` LLM-cost work against 8 invariants for an eventual `packages/ai-control-plane/` facade; verdict: it is a tested dispatch guard for one call path, not a real control plane.

## Key metrics/methods (formulas where given, else "not specified")
- `LLM_COST_MODE`: `resolveLlmCostMode()` throws on unrecognized values but a MISSING env var silently resolves to `"normal"` (cash-capable, reliability-first fallback) instead of failing closed.
- Invariant 3.5 audit: a real bug was found and fixed this session — dispatch telemetry only `emit()`ed on the success path, so a thrown `ClaudeMessagesError` silently dropped the bypass/fallback telemetry (fixed in #151 with regression test); telemetry DB-write failures are still silently swallowed in closure-based call sites (`pick-explainer/explain.ts`, `loss-autopsy/draft.ts`).

## Data sources named
None sports-related. Internal: `provider-dispatch.ts`, `credit-pool.ts`, `cost-policy.ts`, `internal-llm.ts`, `studio/claude.ts`, `free-lane.ts`, `messages.ts`, #148/#151.

## Findings (numbers and facts, not vibes)
- 8 invariant statuses: 3.1 one control plane — NOT MET (7 call sites use `callClaude()`, but `free-lane.ts`/`messages.ts` bypass unaudited; no AST/import-boundary CI guard); 3.2 provider ≠ payer — NOT MET (`credit-pool.ts` docstring overclaims: model-ID shape proves transport, not which credit pool paid); 3.3 explicit fail-safe — PARTIAL; 3.4 local ≠ external-free — N/A (`internal-llm.ts` unwired); 3.6 no silent substitution — NOT MET; 3.7 evidence before promotion — VIOLATED once by this session's own integration guides (AWS Activate/Google Startups PROGRAM MAXIMUMS presented as usable runway, corrected mid-session by external audit), no automated gate; 3.8 one cockpit — AT RISK (unchecked whether #146's founder page builds a parallel spend summary).
- Decision: keep the layer as foundation, supersede `MASTER-PLAN-SONNET-2026-07-21.md` (#149) on this point, and never present the work as a completed control plane in owner-facing reports.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: evidence-before-promotion (3.7) and the provider-vs-payer separation (3.2) are governance patterns directly transferable to engine claims: never present program maximums/audited-later numbers as current runway, and separate observed-transport (e.g., a number that came from source X) from claimed-attribution (a number that source X actually stands behind).

## Engine-actionable? (yes/no + one-line what)
no — LLM-cost governance only; useful as calibration-honesty discipline for how engine evidence is attributed and reported.
