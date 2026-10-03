# agents/hermes-final-pass-2026-09-10.md
## What it is (1-2 sentences)
Step-by-step log of Hermes's final 2026-09-10 repair pass on the Sports repo (branch `hermes/final-pass-2026-09-10`, ledger rows C-303–C-314): em-dash compliance fixes, homepage/Footer rebuilds, and guard reconciliations, with the rule that honesty-contract failures are fixed in code while deliberate design changes are reconciled in tests.
## Key metrics/methods (formulas where given, else "not specified")
- Guardrails: 24/26 → 25/26 (only `dependency-audit` red, frozen for agents, founder-only fix).
- Vitest (apps/web): baseline 27 failed files / 41 failed tests of 967 files → 5 failed files / 5 failed tests of 12,967 passed; all 22 CI-failing files went green.
- Typecheck LINT both OK; ledger check script exits 0 after each commit.
## Data sources named
None (internal repo work). Live repo `C:\Users\Garrett\Sports`; CI run logs; agent ledger `docs/ops/AGENT_LEDGER.md`.
## Findings (numbers and facts, not vibes)
- 9 commits landed; nothing merged — branch pushed, merge awaited owner; C-307 stayed OPEN pending green CI on the merged result.
- Two guards contradict: compliance scanner bans the word "guarantee" while `public-performance-policy.test.ts` requires the negation "does not guarantee future results" on performance surfaces — founder-level decision, no guard touched.
- C-314 truth-surface read (23:44:52Z): settlement HEALTHY (0 of 2,780 overdue); calibration eligibility RED at n=392 / ECE 0.0639 vs the AGENTS.md note's n=458 / 0.0524 — a regression in calibration sample/quality the engine must reckon with.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: calibration eligibility dropping from n=458/ECE 0.0524 to n=392/ECE 0.0639 is a flagged engine-health regression — settlement volume grew but calibration quality fell.
- OTHER: repo/guardrail ops; the honesty-contract rule (fix in code, reconcile design changes in tests) is a governance pattern.
## Engine-actionable? (yes/no + one-line what)
Yes — investigate why calibration eligibility regressed (n 458→392, ECE 0.0524→0.0639) before trusting public performance claims.
