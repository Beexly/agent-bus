# INTELLIGENCE_CORE_AUDIT.md
## What it is (1-2 sentences)
Audit report (2026-06-24) verifying the `codex/intelligence-core` branch's prediction-engine work — checklist completeness, gate safety (nothing flipped live/priced), and handoff honesty. Conclusion: code-ready behind gates, NOT live-ready; 514 tests passed.
## Key metrics/methods (formulas where given, else "not specified")
- Verification suite: `npm test --workspace=packages/prediction-engine` → 51 files / 514 tests passed; typecheck, lint, web vitest, build, and `guard:trust` / `guard:model-freeze` / `guard:draft-only` all passed.
- Sensitive marker scan: no `as any`, `@ts-ignore`, `@ts-expect-error`, `TODO`, `FIXME`, direct `canPublishProjections: true`, or `priced: true`.
- Market-anchor invariant in `market-anchored-reconciliation.ts`: team yards and touchdowns conserved; fantasy points derived from allocated yards/TDs.
- Clark-West gates require sample minimums + lower MAE for promotion; conformal intervals remain shadow/priced false.
## Data sources named
None named (codebase/internal docs only: `docs/EXECUTION_LEDGER.md`, `docs/CLAUDE_HANDOFF.md`). References real historical projection/outcome rows as still missing (needed for promotion).
## Findings (numbers and facts, not vibes)
- All checklist slices implemented (Slice 0, A1, A2, E1, B1-B6, C6, C1-C5, D1-D6, E2-E3, F1-F3, FINAL @ commit 1f2e8dd4); no unchecked backlog rows.
- Branch is code-ready, NOT live-ready. Real model promotion still requires real historical projection/outcome rows, purged/embargoed validation, Clark-West evidence vs market-only and equal-weight baselines.
- Residual risks: schema/infra unapplied by design; public calibration, pricing, publication, live money, paid-provider paths remain owner-gated. Required human ratification: LadderEvent migration (SCHEMA), R2/DuckDB + hash-chain stores (INFRA), real historical data (DATA), merge/deploy timing (OWNER).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (model promotion / calibration methodology): Clark-West gates for model promotion, market-anchored reconciliation (yards/TD conservation), conformal intervals, shadow-only tournament/divergence/prop-anchor surfaces.
## Engine-actionable? (yes/no + one-line what)
No — audit of internal build state; the promotion-gate design (Clark-West vs market-only/equal-weight baselines, purged/embargoed validation) is already internal doctrine, not new intake.
