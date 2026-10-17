# Hermes: G-06 fail-closed — 2026-10-16

Ingested: Motif batch-2 pin that G-06 (`evaluateMarketGate`) PASSes when every metric is NaN, because `NaN > floor` is false and the sample-size check also does not fire on NaN.

Changed: fail-closed on any non-finite `n` / ECE / Brier / reliability / resolution / baseRate / non-null eceDebiased, before minN.

Evidence:
- branch `hermes/g06-fail-closed-2026-10-16`
- SHA `7a60a3a79bce290af3c54b1807f085703a9007fe` on origin (ls-remote confirmed)
- `apps/web/lib/ops/per-market-gate.ts` + two new tests
- vitest `per-market-gate.test.ts`: 10/10 PASS on this host
- not merged to main
