# ops/C3_OFFLINE_CEPT_BMA.md
## What it is (1-2 sentences)
A scaffold-stage (proposal only) offline harness for computing CEPT/BMA-style ensemble weights — softmax weights derived from per-expert mean loss — with an explicit prohibition on applying the weights to live scoring without founder approval.

## Key metrics/methods (formulas where given, else "not specified")
- Method: "Softmax BMA-style weights from per-expert mean loss" — no explicit formula given (formula itself not specified; only the conceptual recipe: softmax over per-expert mean losses).
- Test: vitest green on fixture via `npx vitest run lib/ensemble/offline-cept-bma-weights.test.ts` from `apps/web`.
- Done criteria: vitest green on fixture; softmax BMA-style weights from per-expert mean loss; no production ensemble write; no `MODEL_VERSION` change.

## Data sources named
- "Real per-sport expert losses from C1 bake-off outputs" — the planned feed (not yet wired; C1 outputs are the named upstream dependency). No actual datasets or papers named.

## Findings (numbers and facts, not vibes)
- **Status: harness scaffold (proposal only).** No weights have been computed on real data; nothing is live.
- Code: `apps/web/lib/ensemble/offline-cept-bma-weights.ts`; tests: `apps/web/lib/ensemble/offline-cept-bma-weights.test.ts`.
- Explicit do-nots: do not auto-apply weights to live scoring without founder OK; do not flip gates.
- Next step: feed real per-sport expert losses from C1 bake-off outputs — i.e., the harness is waiting on upstream C1 results.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Serves the calibration/sizing and ensemble program: once C1 bake-off outputs deliver per-sport expert losses, this harness produces the softmax BMA weights that decide how much each expert (and by extension each signal lane) contributes to the ensemble — but it is pre-data, so it currently constrains nothing and improves nothing.
- [OTHER] The "no production ensemble write, no MODEL_VERSION change" and founder-gate rules mirror the BAKEOFF_FLOOR_STRESS production policy — the ensemble weighting lane is likewise held offline until a gated, evidenced win.

## Engine-actionable? (yes/no + one-line what)
No — scaffold only; the only action it names is feeding C1 bake-off per-sport expert losses, which are not yet available.
