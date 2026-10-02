# ops/C8_OFFLINE_RELIABILITY_BINS.md
## What it is (1-2 sentences)
Scaffold note for C8: an offline reliability / expected-calibration-error harness (measurement only) at `apps/web/lib/calibration/offline-reliability-bins.ts` with a vitest suite. Done when equal-width bins + ECE run on a fixture; explicitly no public performance publish and no PERFORMANCE_STATS flip.
## Key metrics/methods (formulas where given, else "not specified")
- Equal-width bins + ECE (expected calibration error). Formula: not specified in this file.
- Next step: wire LRD-style operator UI after C5 board honesty; feed settled book-priced rows only.
## Data sources named
- Settled book-priced rows (the feed for the bins; no external dataset named).
## Findings (numbers and facts, not vibes)
- Harness scaffold only; no measurements reported in the file. Test command: `cd apps/web && npx vitest run lib/calibration/offline-reliability-bins.test.ts`.
- Guardrail: no public performance publish / no PERFORMANCE_STATS flip.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Offline ECE measurement on settled book-priced rows is the measurement layer the calibration program needs; the actual calibration findings live in the AGENTS-history brief. OTHER
## Engine-actionable? (yes/no + one-line what)
No — unbuilt measurement scaffold; produces no signal until wired to settled book-priced rows.
