# docs/predictions/research/2026-09-28/signal-staleness-gate.md

## What it is (1-2 sentences)
A production incident report + fix record: on 2026-09-28 (~19:00 UTC, ~15 min before an NFL kickoff) a Chicago Bears ML pick generated 8h 07m before kickoff on a single Elo source published without any QB-change, injury, weather, or scheme signal; the author built `signal-staleness.ts` into the slate CREATE path to veto stale solo-source picks before publication.

## Key metrics/methods (formulas where given, else "not specified")
- Staleness gate (`packages/ingestion-pipeline/src/signal-staleness.ts`, wired into the CREATE path of `generate-signal-slate.ts`): solo-source-Elo reads are judged for AGE only, and only inside a 12-hour pre-kickoff window; bound = 90 minutes — a solo-source read older than that for a fixture inside 12 hours does not publish. Outside the 12h window age is not evidence of anything (future boards are legitimately built days ahead). Corroboration is reported, not blocking. PASS picks are not blocked here (separate v5.3.0 rule).
- The specimen pick's factor weights: elo fair value (weight 60), prereg leakage gate (3 probes clean), Kelly log-growth (weight 9), cover probability (weight 4, negative), plus a leakage gate that did not run ("fixtures unavailable. Not a clean bill").
- Bears specimen: confidence 60, `rankingP` 0.6036, `agreement` SOLO, `sources` ["elo"], `marketFairProb` null (never saw the market), `expectedClv` 0, `independentEdge.decision` LEAN, shrunkEdge 0.0725 (from rawEdge 0.1036, a 30% solo-source haircut), `isPublished` true.
- Simulation over all 158 real pending production signal picks: VETOED 1 (0.6%), ALLOWED 157 — exactly the specimen, nothing else.
- Two self-caught bugs: (1) an unconditional age bound would have vetoed all 158 rows because pending picks average 1,695 hours before fixture (September board includes December/January games) — the pre-kickoff window fixes this; (2) age exactly 0 was treated as stale, vetoing a read stamped at kickoff — caught by an existing test.
- Root cause (author's): a 2026-09-13 AGENTS.md entry had already diagnosed "all 5 signal picks are SINGLE-source Elo... the gate should require agreement>=2 or shrink solo-source edges harder" — it was never implemented; a finding that lives in a markdown file changes nothing.

## Data sources named
- Production signal slate rows (158 real pending picks simulated); `isPublished` is a bare Boolean with no provenance column (the C-158 gap this file documents).
- The missing real fix (queued, not done): a personnel/news source feeding the independent blend — no QB or injury signal exists yet.

## Findings (numbers and facts, not vibes)
- The published Bears pick was formed 8h 07m 48.338s before kickoff on one model and published as if current; no quarterback signal, injury flag, weather, scheme, or pace factor was present.
- Every signal pick today is solo-elo (corroboration reported, not blocking, because a gate refusing all of them would publish an empty board).
- The gate does not unpublish the Bears row (already live and settling-or-settled); retroactive correction is a founder call, not a code change.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR / OTHER: the incident's proximate cause — the engine had no QB signal at all when a quarterback change was in play — is the concrete justification for the personnel/news intake queue and for QB situational (injury/change) profiles.
- OTHER: TRUST-SIGNAL analog for the engine itself — this file is a trust-signal about model behavior: solo-source, stale, un-corroborated picks with `marketFairProb` null must be shadowed, matching the total-signal program's promotion gate (uncalibrated computes in shadow, never publishes).
- OTHER: the "markdown finding changes nothing" lesson is a process signal for the intelligence program — recommendations from this corpus must land as code/config gates, not prose.

## Engine-actionable? (yes/no + one-line what)
Yes — the staleness gate is already wired, but the two structural gaps it names are actionable: (1) `isPublished` has no provenance column (C-158); (2) the personnel/news source for QB changes/injuries is queued, not built — the highest-leverage pick-quality fix.
