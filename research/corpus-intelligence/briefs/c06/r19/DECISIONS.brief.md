# fable/DECISIONS.md
## What it is (1-2 sentences)
The five standing architectural decisions for the FABLE layer: add (don't replace) existing NFL/metric/calibration/rights surfaces; keep AWS local and zero-cost until owner gates are explicit; use pure TypeScript primitives; treat prompts/OneNote claims as unverified; keep source rights as the controlling boundary.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
None (governance doc only).
## Findings (numbers and facts, not vibes)
- 5 numbered decisions: (1) additive FABLE layer, not replacement of NFL, metric, calibration, rights surfaces; (2) AWS work local and zero-cost until owner gates explicit; (3) pure TypeScript primitives, no runtime side effects, importable by future routes/jobs/dashboards; (4) every prompt and OneNote claim unverified until supported by repo evidence; (5) source rights as the controlling boundary for local and AWS storage alike.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Decision 4 (claims unverified until repo evidence) and decision 5 (source rights as controlling boundary) are trust-governance rules for the engine.
- [OTHER] Decision 2 (zero-cost AWS until owner gates) is a cost-control policy.
## Engine-actionable? (yes/no + one-line what)
No — governance record; actionable only as constraint: new code must be additive TS primitives, zero-cost, rights-gated.
