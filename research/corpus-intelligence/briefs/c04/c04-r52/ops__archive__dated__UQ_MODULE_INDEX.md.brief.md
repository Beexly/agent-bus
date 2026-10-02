# docs/ops/archive/dated/UQ_MODULE_INDEX.md
## What it is (1-2 sentences)
The UQ Honesty Stack module index as of 2026-07-28, mapping the prediction engine's uncertainty-quantification modules (calibration, conformal, Edge Lab decision path, certificate math pack) to their files, invariants, and test locations; companion to the UQ_HANDOFF_2026-07-24 and the UQ_HARDENING_SESSION_2026-07-28 docs.

## Key metrics/methods (formulas where given, else "not specified")
- PAV: linear-time isotonic regression; invariants non-decreasing fitted values, weighted pooling, total on empty.
- Inductive Venn-Abers (IVAP): invariants p0≤p1, width≥0, empty→(0.5, 0.5).
- Cross Venn-Abers (CVAP): K-fold IVAP + geometric-mean aggregation; fold clamp; deterministic seed.
- Aggregation: geometric + Neumaier summation; ordered multiprobability; finite on extremes.
- Mondrian conformal: hierarchical fallback; absolute residual; (n+1) quantile.
- Levene/Welch split quality: total function (no throw/NaN); saturated mean leg.
- LWT-MCPS sketch: deterministic partition; sample accounting; depth bound.
- Selective gate: sole FIRE authority; width→No-Bet; `MIN_STRATUM_CALIBRATION=100`; disjoint sets.
- Certificate pack: Schema v1, canonical-JSON SHA-256 hash, reason codes; post-gate-only bridge (`gate-certificate-bridge.ts` consumes gate output, never replaces it); proper-scoring offline (Brier / log-loss / reliability diagram); `kelly-lower-endpoint.ts` INTERNAL only — never a public recommended stake; abstention thresholds must not fork the gate.

## Data sources named
- None (no external data sources; modules operate on prediction-engine internals, Glass Ledger, and board gate outputs).
- Cited internal modules: `apps/web/lib/board/gate-certificates.ts` (attach-only consumer of `evaluateBoardGate`, in review on `feat/ws2-ws3-calibration-fuzz-certificate-wire`, not merged to main as of 2026-07-28).

## Findings (numbers and facts, not vibes)
- Certificate/math pack was UNBLOCKED and landed as PR #220 on 2026-07-28 (founder supplied the bodies; reviewed and merged, not invented) under `packages/prediction-engine/src/certificate/`.
- Three real defects found and fixed in the #220 review: (1) `proper-scoring.ts` did not compile under `noUncheckedIndexedAccess`, masking a real crash where a non-positive bin count drove the index negative; (2) `parseDecisionCertificate` rejected interval endpoints of exactly 0 or 1 — values the real gate emits when an isotonic region is unanimous — so certificates failed their own validator and could not be re-verified; (3) the abstention sample floor re-declared `100` instead of importing `MIN_STRATUM_CALIBRATION` — a silent fork of the gate's authority.
- Explicitly blocked (do not invent): Ledger multiprob persistence — no production consumer of `FiredDecision`; domain mismatch with `LedgerPickEntry`; #220 did not change this (certificate bridge is a pure transform with no writer).
- Next high-leverage items: (1) feed real walk-forward/historical-replay rows into `runWalkForwardTaxonomy` (wiring only); (2) `certificateFromGateCandidate` at a real post-gate call site (in review, not merged); (3) property-based fuzz (fast-check) over PAV/IVAP/CVAP/aggregation — in review and found a real CVAP degenerate-path contract bug on its second random input, not yet merged; (4) flaky test FIXED: `ai-control-plane-budget-pg.test.ts` asserted `completed === 60` exactly; observed 62 on one CI run because invocations hold $0.10 worst-case but settle $0.05 on first-route success, releasing headroom — replaced with bounds (60–120), `provisionalUsd === admitted × settled cost`, permanent-consume proof `completed + completed2 <= 120`; wave-2 floor computed in integer cents because `3.0 / 0.1` is `29.999999999999996` in IEEE-754.
- Design principles (do not violate): finite-sample honesty first; No-Bet first-class, never overridden by apparent edge; everything affecting a displayed probability must be recomputable from the Glass Ledger; pure TypeScript for core UQ primitives, no external ML libs; absence of evidence ≠ evidence of failure (thin strata stay silent; undefined placebo is untested).
- Council↔Gate alignment doctrine: shared width / sample-floor / lower-endpoint / placebo doctrine; guardian hard veto; `placebo undefined≠passed`; diagnostic-only ledger.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Confidence-interval honesty infrastructure (multiprobability, conformal coverage, selective No-Bet gating) that underlies how engine pick confidence is reported — OTHER (engine infra, no QB/coaching/OL/scheme signals).
- `MIN_STRATUM_CALIBRATION=100` sample floor and thin-strata-stay-silent doctrine: relevant to any thin-slice (e.g., QB-behavioral) subgroup work, since small behavioral samples must stay silent rather than inflate confidence — INFERENCE tagged OTHER per the brief rules (file states the principle for calibration generally, not for behavioral data).
- No person/player/coach data — OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — one-line: the No-Bet selective gate (`MIN_STRATUM_CALIBRATION=100`, width-driven abstention, thin strata stay silent) plus the Glass-Ledger recomputability rule is the calibration posture for any future pick-probability output; PR #220's `proper-scoring.ts` offline Brier/log-loss/reliability-diagram module is the scoring harness to reuse.
