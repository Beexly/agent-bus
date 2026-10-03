# docs/ops/archive/leverage/GSE_LONG_CONTEXT_PROTOCOL_AND_CODING_AGENT_HANDOFF_2026-07-24.md
## What it is (1-2 sentences)
Permanent protocol to survive LLM chat context limits (bootstrap prompt; durable file state over pasted transcripts; coding agent is verification-and-wiring-only, never re-implements engines). Doubles as a 2026-07-24 snapshot of the prediction stack's maturity.
## Key metrics/methods (formulas where given, else "not specified")
- **IVAP** (`packages/prediction-engine/src/calibration/ivap.ts`): full Inductive Venn-Abers Predictor — binary multiprobability calibration with PAV isotonic regression; outputs valid (p0, p1) intervals under exchangeability. No formulas in this file.
- **display-substantiated guard** (`packages/prediction-engine/src/guards/display-substantiated.ts`): pure honesty guard — refuses any public performance / win-rate / ROI / confidence claim lacking coverage denominator, Wilson or Clopper-Pearson LCB, CLV backing, and walk-forward provenance.
- Named-but-existing stack: Mondrian + adaptive conformal with finite-sample correction (`conformal-intervals.ts`); edge-lab placebo + walk-forward + selective-gate (No-Bet); kelly + CLV; pedersen-ledger + `packages/crypto` Pedersen commitments; No-Bet Governor; performance-CI; promotion gates.
## Data sources named
None named.
## Findings (numbers and facts, not vibes)
- Two files added in this commit: IVAP calibrator and the display honesty guard; both are coding-agent **verification-only** scope (tests listed: empty calibration, extreme scores, isotonic monotonicity, coverage on synthetic exchangeable data; guard must block claims missing evidence fields and pass when all fields present with acceptable LCB).
- Remaining high-value work listed: wire `assertDisplaySubstantiated` into every public surface that shows numbers (Board, Intelligence, marketing pages, API responses); add unit + property tests for IVAP and the guard; optional thin public recompute endpoint (Pedersen + recompute-verifier); **Phase-0 CI gate that fails the build if placebo / conditional-MI probes fail** (most logic already in edge-lab).
- Protocol: every new session loads this file + the MCP connector leverage doc + latest EXECUTION_LEDGER via the exact bootstrap prompt; never paste full transcripts or recursive trees.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: display-substantiated guard (Wilson/Clopper-Pearson LCB + CLV + walk-forward required before any public win-rate/ROI claim); IVAP calibrated (p0, p1) intervals; placebo/No-Bet selective gates; Pedersen commitment receipts.
- OTHER: long-context workflow protocol.
## Engine-actionable? (yes/no + one-line what)
Yes — wire `assertDisplaySubstantiated` into every public number-rendering surface so unsubstantiated performance claims are blocked at render time.
