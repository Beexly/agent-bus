# strategy/ENTITLEMENT_REMAP_SPEC.md
## What it is (1-2 sentences)
A sequenced implementation spec for a Thread 1 entitlement decision ("stop charging for picks") that was REVERSED by the founder on 2026-07-10 — the document is retained for history only, and picks remain the paid product with FREE viewers limited to a small daily teaser.
## Key metrics/methods (formulas where given, else "not specified")
not specified. Enforcement model documented (no formulas): `getEntitlements(tier)` in `@sports/types` returns `{ canSeePremiumPicks, dailyPickLimit, canSeeConfidence, canSeeFactorBreakdown, canSeeLineMovement, canGetAlerts, canSeeEdgeScore }`; per-API gate in `apps/web/app/api/picks/route.ts` line ~87 uses `take: dailyPickLimit`; per-page gate via `apps/web/lib/pricing/tier-access.ts` → `getViewerEntitlements()` (fail-closed to FREE).
## Data sources named
None.
## Findings (numbers and facts, not vibes)
- REVERSED (2026-07-10). DO NOT RE-APPLY: picks are the paid product again (gate the board, win top of funnel on content + engagement, not by giving picks away at peak demand).
- Current FREE shape: `canSeePremiumPicks:false`, `dailyPickLimit:2`, `canSeeConfidence:false`, `canSeeFactorBreakdown:false`, `canSeeLineMovement:false`, `canGetAlerts:false`, `canSeeEdgeScore:true`.
- PRO/ELITE unlock premium picks + confidence + factor breakdown; ELITE adds `canGetAlerts` (+ CLV ledger per the reversal note).
- Step 3 note: the public confidence number was "still the raw, ~20-point-overstated value" — honest calibration (Thread 2) had to precede exposing confidence to FREE.
- Step 2: trust-gate bans hard phrases ("winners / profitable / winning picks / edge-as-record" framing); copy must sell tools/depth/analytics/alerts, not picks access.
- Guardrails: server-side gating only; existing subscribers never lose value mid-cycle (grandfather doctrine); full gate (`typecheck && lint && vitest run && build`, trust-gate + em-dash scanners) green before push; prices source of truth is `apps/web/lib/pricing/pricing-phases.ts`.
- Tests that must stay green: `entitlements-enforcement.test.ts` and `docs/adr/003-server-side-paywall-hardening.md` coverage.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: monetization/paywall spec, superseded; the only engine-adjacent signal is the honesty doctrine — ~20-point-overstated raw confidence requiring calibration before public exposure (TRUST-SIGNAL-adjacent as a product-integrity policy, not a model).
## Engine-actionable? (yes/no + one-line what)
No — REVERSED monetization spec; superseded, with zero model methods, metrics, or data for the engine.
