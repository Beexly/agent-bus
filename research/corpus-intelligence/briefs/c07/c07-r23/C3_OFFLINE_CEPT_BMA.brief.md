# ops/C3_OFFLINE_CEPT_BMA.md
## What it is (1-2 sentences)
Scaffold doc for C3: an offline CEPT/BMA weight proposal that computes softmax BMA-style ensemble weights from per-expert mean loss — proposal only, never applied to live scoring.
## Key metrics/methods (formulas where given, else "not specified")
Softmax BMA-style weights from per-expert mean loss (formula not given). Code at `apps/web/lib/ensemble/offline-cept-bma-weights.ts`, tests at `apps/web/lib/ensemble/offline-cept-bma-weights.test.ts`; run via `npx vitest run lib/ensemble/offline-cept-bma-weights.test.ts`. Done when: vitest green on fixture, no production ensemble write, no `MODEL_VERSION` change.
## Data sources named
none — next step is to feed real per-sport expert losses from C1 bake-off outputs.
## Findings (numbers and facts, not vibes)
- Status is "harness scaffold (proposal only)"; explicitly forbids auto-applying weights to live scoring without founder OK and forbids flipping gates.
- Blocked on real per-sport expert losses from the C1 bake-off outputs.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: BMA-style ensemble weighting is an ensemble-method technique, not a sports-content finding.
## Engine-actionable? (yes/no + one-line what)
yes — softmax-on-mean-loss BMA weighting is a candidate pattern for combining GSE sub-model experts per sport once real per-expert losses exist.
