# adr/001-public-performance-policy.md
## What it is (1-2 sentences)
Architecture Decision Record (2026-05-18, Accepted) introducing `evaluatePublicPerformancePolicy()` — a pure, I/O-free function as the single decision point for whether a customer-facing surface may display a win-rate/record, replacing ad-hoc per-page filters that caused inconsistency, bootstrap leakage, and gate bypass.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas; policy is a 4-rule gate: GATE_OFF_PERFORMANCE_STATS → block; canonicalSettledCount < minCanonical → INSUFFICIENT_CANONICAL_SAMPLE → block; recent window entirely bootstrap → ALL_RECENT_PICKS_BOOTSTRAP → block; else allow).
## Data sources named
None external. Inputs: `db.pick` counts (canonical settled count, wins/losses/pushes, bootstrap count, pending count), `getReadinessGates().canExposePerformanceStats`, platform-config minimum settled picks.
## Findings (numbers and facts, not vibes)
- Prior problems: dashboard counted PUSH in the denominator while the performance page didn't; the 14-day dashboard list did not filter `isBootstrap: false` (bootstrap streaks could be shown as real win rates); dashboard never consulted the `canExposePerformanceStats` gate.
- Tested invariants: public-performance-policy.test.ts (mapping table), dashboard-performance-gate.test.ts (all API+pages reference the policy), policy-only-winrate.test.ts (no ad-hoc win-rate math anywhere), metadata-banned-phrases.test.ts.
- Outputs both a customer-safe `publicMessage` (disclaimer baked in: "Past performance does not guarantee future results") and an internal `operatorMessage`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: single-source-of-truth policy for public performance claims prevents inflated/misleading win-rate exposure; the same gate pattern can protect published pick records and streaks.
## Engine-actionable? (yes/no + one-line what)
no — internal governance doc, not a sports model; relevant only as the compliance layer any public-facing pick record must pass through.
