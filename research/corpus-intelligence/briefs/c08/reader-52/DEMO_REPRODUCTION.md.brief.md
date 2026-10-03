# docs/fable/demo/DEMO_REPRODUCTION.md
## What it is (1-2 sentences)
Runbook for reproducing the FABLE demo: a fixture-only forensic report (fixture `fixture-public-forensic.json`) executed via `npm run fable:demo`, with live mode disabled by default (`GSE_FABLE_LIVE_PUBLIC_DEMO_ENABLED=false`). It also defines the 5-step extension protocol for adding new fixtures (fixture → source-rights evidence → falsification rule → harness test → evidence run).
## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas. Expected output shape fields: `fixture_id`, `probability_delta`, `uncertainty_flag`, `gse_flags`, `would_not_claim`.
## Data sources named
- `docs/fable/demo/fixture-public-forensic.json` (checked-in fixture)
- evidence harness test `apps/web -- lib/fable/evidence/evidence-harness.test.ts`
## Findings (numbers and facts, not vibes)
- Live mode defaults off; no numeric results in this file (demo run results live in COMMAND_LOG.md: `probability_delta` of `0.11` on `fixture-nfl-public-001`).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- FABLE demo fixture output shape (fixture_id/probability_delta/uncertainty_flag/gse_flags/would_not_claim) — TRUST-SIGNAL
- Explicit "would_not_claim" caveat mechanism for unsubstantiated predictions — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
yes — adopt the "would_not_claim" explicit-honesty contract for engine outputs that fail evidence thresholds.
