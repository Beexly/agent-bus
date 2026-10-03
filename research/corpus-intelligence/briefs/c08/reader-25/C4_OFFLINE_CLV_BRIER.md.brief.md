# docs/ops/C4_OFFLINE_CLV_BRIER.md
## What it is (1-2 sentences)
A small scaffold doc for C4 — an offline CLV ↔ Brier diagnostic harness (measurement only, soft-blocked on a live line archive): `apps/web/lib/clv/offline-clv-brier-diagnostic.ts` with a vitest fixture.
## Key metrics/methods (formulas where given, else "not specified")
Reports: mean CLV, beat-close rate, Brier(model/open/close), Brier delta vs close. No formulas given; line archive not available (U4 unblock pending).
## Data sources named
Line archive (not yet available).
## Findings (numbers and facts, not vibes)
- Done-when criteria: vitest green on fixture; reports the four metric groups; no publish wiring, no gate flips.
- Hard rule: "Do not claim +EV from positive CLV alone without settled P&L policy"; do not flip gates or invent line history.
- Next: wire identical-row open/close from the line archive when it exists.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- CLV-vs-settled-Brier comparison is the honest edge-verification ladder: TRUST-SIGNAL — the "CLV alone ≠ +EV" rule prevents false confidence.
## Engine-actionable? (yes/no + one-line what)
Yes — when the line archive lands, wire identical-row open/close into this diagnostic so the engine can compare model Brier vs close-line Brier as an edge check.
