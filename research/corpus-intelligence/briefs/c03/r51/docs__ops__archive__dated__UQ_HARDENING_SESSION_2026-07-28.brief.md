# docs/ops/archive/dated/UQ_HARDENING_SESSION_2026-07-28.md
## What it is (1-2 sentences)
The 2026-07-28 UQ honesty-stack hardening session report: verification of nine already-integrated calibration/conformal/selective-gate modules, one dedup fix, 11 new test files (1790 lines), and a new deterministic multi-agent orchestrator (`SequentialEdgeLabCouncil`) with a deliberately documented refusal to build the Glass Ledger bridge the original handoff had requested.
## Key metrics/methods (formulas where given, else "not specified")
- Modules: Venn-Abers family (`pav.ts`, `ivap.ts`, `cvap.ts`, `aggregation.ts`) with log-space Neumaier geometric-mean fold aggregation; `local-isotonic-patch.ts` / `multicalib-audit-patch.ts` (binary/group-indicator multicalibration audit-and-patch, scoped as special case); conformal Mondrian with hierarchical residual store + parent/global fallback, Tier-1/Tier-2 taxonomy; Brown-Forsythe split scoring (total functions: no throws, no NaN/Infinity) and greedy bounded-depth partition sketch (exchangeability caveat: fit on a fold disjoint from calibration data or the (n+1) coverage guarantee is void); `selective-gate.ts` sole FIRE/NO_BET authority with `tuneTau` fixed-sequence Learn-then-Test and `assertDisjointRowSets` enforcing calibration/tuning/eval disjointness.
- Test: 11 new test files, 1790 lines; full `prediction-engine` suite 165 files / 1797 tests green; `tsc` clean; property-style invariants (`p0 <= p1`, `width >= 0`, finite outputs, empty/tiny inputs never throw, min-sample guards gate on sample size).
- New: `edge-lab/edge-lab-council.ts` — `SequentialEdgeLabCouncil`, pure deterministic single-round; `riskHonestyGuardian` hard veto (interval too wide, calibration sample < MIN_STRATUM_CALIBRATION, or failed placebo check → finalDecision "no_bet" regardless of other agents, structurally enforced); `placeboAnalyst` treats absent placebo result as "untested", never "passed"; `glassLedgerRecorder` always abstains.
- Council↔gate alignment tests: width veto tracks `maxWidthForFire` doctrine; thin calibration → gate silent stratum AND council no_bet; lower-endpoint edge `lcbEdge = interval.lower − q`.
- New: `edge-lab/walk-forward-taxonomy.ts` — per-row Mondrian category assignment, aggregates coverage/width/residual, emits underpowered/under-coverage/wide-interval alerts; separate harness (not a gate API change).
- Blocked: certificate/math modules (`decision-certificate.ts`, `stratum-coverage.ts`, `selective-abstention.ts`, `proper-scoring.ts`, `kelly-lower-endpoint.ts`) — the founder "gse-closeout/math/" artifact pack was never found; formulas not fabricated (still flagged, not dropped).
## Data sources named
`docs/ops/UQ_HANDOFF_2026-07-24.md` (design handoff); `docs/ops/PRODUCT_CASCADE_MAP.md` §4 (ledger persistence blocked on missing writer); commit #211; branch `feat/uq-honesty-stack-hardening`; PRs #215/#216/#217 (standing-authority pattern).
## Findings (numbers and facts, not vibes)
1. The handoff's premise was half-wrong: the nine core UQ modules were already wired (not just designed) — `selective-gate.ts` already consumed IVAP/CVAP multiprobability as primary interval source with `maxWidthForFire`/`widthNoBets`/`widthVetoedRowIds` as first-class No-Bet veto and Mondrian taxonomy attached to every fired decision; the real gaps were zero test coverage and no concrete orchestrator (TRUST-SIGNAL).
2. One real fix: `ivap.ts` carried a byte-identical private copy of the unweighted PAV block-merge loop instead of importing shared `pavIsotonic` — replaced with the import (drift risk removed); full suite stayed green (TRUST-SIGNAL).
3. Deliberate refusal to build the Glass Ledger multiprob bridge: `FiredDecision` has exactly one consumer (`scripts/edge-lab/phase1-acceptance.ts`, a research script); `appendPick`/`appendSettlement` have zero production callers; domains don't align (`LedgerPickEntry` = published pick vs `FiredDecision` = backtest row); the more specific, recently-investigated, in-repo decision (PRODUCT_CASCADE_MAP §4) won over the generic handoff instruction — documented rather than silently skipped (TRUST-SIGNAL).
4. Council design point worth reusing: the risk-honesty guardian is a structural hard veto in the orchestrator (not an opinion honored downstream); missing placebo results default to "untested" not "passed" (TRUST-SIGNAL).
5. Blocked certificate modules remain flagged, not fabricated — "Fabricating statistical formulas for a product whose entire thesis is 'never invent numbers' is the wrong failure mode" (TRUST-SIGNAL).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Finding 1: TRUST-SIGNAL
- Finding 2: TRUST-SIGNAL
- Finding 3: TRUST-SIGNAL
- Finding 4: TRUST-SIGNAL
- Finding 5: TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — the selective-gate pattern is a reusable honesty template: deterministic orchestrator with structural hard veto (width, sample floor, placebo), absent-evidence-defaults-to-untested, and calibration/tuning/eval disjointness enforced at every entry point.
