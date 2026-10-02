# docs/fable/METRIC_DERIVATIONS.md
## What it is (1-2 sentences)
An evidence-posture index for the Sports repo's metric surfaces: it lists the nine TypeScript modules that compute or import football metrics, and states the documentation and proof rules any metric claim must satisfy (document against the actual module; label fixture-only examples; cite a backtest/calibration report/replay for any improvement claim).
## Key metrics/methods (formulas where given, else "not specified")
Metrics named but not defined/formula-given: EPA, CPOE, RYOE, pressure, coverage, usage features. New primitives: `fable/uncertainty.ts` (ranks candidate predictions by probability uncertainty), `fable/drift.ts` (checks distribution drift and safe football segment parity). No formulas in this file — not specified.
## Data sources named
None as external data sources. Sources are code modules: `apps/web/lib/metrics/{opponent-adjusted-epa.ts, coverage-map.ts, feature-store.ts, uncertainty-map.ts}`, `apps/web/lib/nflverse/{pbp.ts, next-gen-stats.ts, pressure-coverage.ts, qbr.ts, player-lab.ts}`, `apps/web/lib/fable/{uncertainty.ts, drift.ts}`.
## Findings (numbers and facts, not vibes)
- 9 metric-surface modules exist in the repo (4 in `lib/metrics/`, 5 in `lib/nflverse/`) [OTHER]
- 2 fable primitives exist: uncertainty ranking and drift/segment-parity checks [TRUST-SIGNAL]
- Evidence rule: any claim that a metric improves predictions must cite a backtest, calibration report, or replay output [TRUST-SIGNAL]
- Evidence rule: any fixture-only metric example must be labeled as fixture-only [TRUST-SIGNAL]
- Evidence rule: EPA, CPOE, RYOE, pressure, coverage, usage features must be documented against the actual module that computes/imports them [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The nine module paths map the repo's metric lineage: nflverse pbp → pressure-coverage → coverage-map; qbr → player-lab; opponent-adjusted-epa; uncertainty-map → fable/uncertainty.ts [OTHER]
- No football-intelligence substance (no QB/coaching/OL/scheme findings); the file is governance-only [OTHER]
## Engine-actionable? (yes/no + one-line what)
yes — enforce the evidence posture: no metric gets wired/promoted into the engine without its module pointer, fixture-only labeling, and a backtest/calibration/replay citation.
