# ops/AGENT-COORDINATION.md
## What it is (1-2 sentences)
The read-first coordination document for any coding agent working the Sports repo (last updated 2026-08-21): the non-blocking merge rule, verified state of main (green, queue empty, 11,493 tests passing), the ranked build queue, hard constraints, the handoff protocol — and the clearance/rights verdicts on live pick inputs (Kalshi gated, ClubElo undetermined). Read-only intake for engine purposes.
## Key metrics/methods (formulas where given, else "not specified")
- NB2 dispersion property test: Monte-Carlo assert `Var = μ + μ²/φ` and that empirical VMR lands ≈**2.15** at league mean (the test that would have caught `φ=12`).
- Per-sport dispersion estimator: offline `estimate-phi.ts` via method-of-moments (floored) over settled `TeamGameLog`; makes NHL fall to Poisson automatically.
- Calibration CI layer uses Clopper-Pearson; de-vig oracle + Parlay MRI v1 merged (`4455c96f`).
- Project research has a measured ~37% defect rate in unverified assertions (VERIFIED / ANALYST / COUNSEL tagging).
## Data sources named
Kalshi (VERIFIED 2026-08-21; Developer Agreement v1.1 §3 forbids collecting/caching/aggregating API data without written authorization — registered `permission_required`, gated with `checkClearance`, fail-closed pending written authorization from KalshiEx LLC); ClubElo (no live terms found; Wayback 2023-01-17 allows reuse with citation to clubelo@schiefler.com; status undetermined — do not mark denied on silence); ESPN scoreboard fetchers (`limit=1000`); independent CSV (ClubElo fair values via `tryClubEloFairValue`); MoneyPuck rights downgraded (route dark).
## Findings (numbers and facts, not vibes)
- `main` @ `a060f57d` green: 11,493 tests passing, 0 failing, `tsc` exit 0, import-boundary guard 0 violations across 2,138 files.
- Rights posture: every new data source goes through the Clearance Engine with a RightsSnapshot; rights judged by the source's ToS, never a wrapper repo's license.
- Post-merge lesson: #454 passed its own tests but broke two others on main (tripped the `no-fake-percentages` tripwire, shifted a `mockDb` sequence) — run the FULL suite after merge, not just PR tests.
- Foundational hard constraints: never push to main (branch + PR only); never touch `.github/**`; never run the MVE; never weaken a guard or loosen a tolerance to get green.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: NB2 dispersion calibration (`Var = μ + μ²/φ`, VMR ≈ 2.15 at league mean) is a concrete target for the engine's count-process model calibration; the clearance-verdicts pattern (Kalshi fail-closed, ClubElo not-denied-on-silence) is the rights discipline for live inputs.
## Engine-actionable? (yes/no + one-line what)
Yes — NB2 dispersion test (φ via method-of-moments, VMR ≈ 2.15 target) and the clearance-rights discipline for live inputs both apply directly to engine data sourcing and model calibration.
