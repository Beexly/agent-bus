# docs/formal/SRQC_STATUS.md
## What it is (1-2 sentences)
The "single honest record" for the Self-Refining Quotient Certificate (SRQC) effort — formal verification of the AI/agent control plane's internal admission bookkeeping (invocation claims, credit holds, dispatch) in the Sports repo, written against `main` at commit `15594ad7`, with full TLC receipts, merge SHAs #181–#200, explicit non-claims, and a skeptical-reader attack checklist.

## Key metrics/methods (formulas where given, else "not specified")
- TLC model-checking (toolchain TLC 2026.07.18.145032) on TLA+ specs at fixed constants; no TLAPS/proof universality.
- AbstractControlState domain: claimPhase ∈ {OPEN, TERMINAL}; exposurePhase ∈ {NONE, HELD, AMBIGUOUS_HELD}; pendingCountClass ∈ {ZERO, ONE, GE2}; fingerprintBound: boolean; hasRejectedFp: boolean.
- `admitUnderSRQC(events, mode ∈ {SHADOW, ENFORCE} = SHADOW)` — SHADOW always ADMITs; ENFORCE only behind `SRQC_ENFORCE=1` env flag via `evaluateSrqcAdmissionForLab` (verified unreachable from production paths by grep).
- Quotient/cutoff argument via `classifyPendingCount`; governed receipts use ed25519 signatures (`signReceiptEd25519`/`verifyReceiptEd25519`).
- No sports metrics or formulas.

## Data sources named
None external — internal ledger `control_event_ledger`, `processed_event`, `formal_incident`, `SrqcVersion`, `cti_candidate` tables.

## Findings (numbers and facts, not vibes)
- Bounded reachability of `AbstractClaimExposure.tla`: 40 states generated, 15 distinct, depth 6, no error.
- Refinement step-simulation: 1,306,029 states generated, 323,194 distinct, depth 21, no error.
- Compositional inductive closure (live-sports): 10,039,464 states generated, 4,635,468 distinct, depth 1, no error (shrunk bounds).
- W4 cutoff: controlled run (InvIds 3) — 25 states generated, 8 distinct, `AtMostOne` holds; uncontrolled — TLC finds real counterexample to GE2 (11 states, depth 4) — the admission guard is non-vacuous.
- Posture: SHADOW is the only reachable default; ENFORCE is lab-only; no active `SrqcVersion` (table empty, activation is a human decision via `scripts/activate-srqc-version.mjs`); every `FormalIncident` so far has `srqcVersion: null`.
- Without `DATABASE_URL`, 30 tests ran and passed, 26 skipped; replay script `scripts/srqc-replay.ts` correctly projects GE2 + exit 1 on synthetic double-pending window.
- Explicit non-claims: not parameterized proofs, no automatic `.tla` edits, not bet-settlement correctness (nothing about odds, grading, payouts, picks), not tightest abstraction, not a cutoff theorem.
- Scope is 100% internal agent control plane — nothing about user-facing betting logic.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None applicable to sports engine lanes. Tagged: OTHER (formal-methods governance record).

## Engine-actionable? (yes/no + one-line what)
No — audit/trust artifact for the AI control plane; no QB, coaching, scheme, OL, or trust-signal content; useful only as a model for honest claim-gating practice (cf. CALIBRATION_PROTOCOL).
