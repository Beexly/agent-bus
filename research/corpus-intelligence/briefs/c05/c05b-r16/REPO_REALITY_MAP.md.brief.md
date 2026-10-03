# docs/fable/REPO_REALITY_MAP.md
## What it is (1-2 sentences)
Verified 2026-07-03 snapshot of the Beexly/Sports repo reality during the `codex/fable-nfl-evidence-integration` branch work: it inventories which existing surfaces were reused, which new `apps/web/lib/fable/*` surfaces were added, and explicitly lists claims the repo does NOT yet support.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas. Method: a reality-check ledger distinguishing observed (in-repo) surfaces from unsupported claims.
## Data sources named
- NFL data: `apps/web/lib/nflverse/*`
- NFL metrics: `apps/web/lib/metrics/*`
- Data ingestion: `packages/data-ingestion/src/nflverse-*`
- Calibration: `packages/prediction-engine/src/probability-calibration.ts`, `calibration-map.ts`, `calibration-drift.ts`
- Rights registry: `apps/web/lib/scraping/source-rights-registry.ts`
## Findings (numbers and facts, not vibes)
- Remote: `https://github.com/BeeXly/Sports.git`; starting branch `claude/night-shift`; implementation branch `codex/fable-nfl-evidence-integration`.
- 6 new surfaces added: `apps/web/lib/fable/source-registry.ts`, `uncertainty.ts`, `labeling.ts`, `drift.ts`, `aws-gates.ts`, `claim-scanner.ts`.
- 4 untracked scratch files left untouched: `dashfiles.json`, `scratch_audit_err.txt`, `scratch_audit_full.json`, `scratch_audit_prod.json`.
- Claims explicitly unsupported: any measured Brier/ECE gain beyond fixture/repo-data evidence; any live AWS configuration; any paid labeling or provider account setup; any source-use right beyond the registry status.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: calibration pipeline exists (`probability-calibration.ts`, `calibration-map.ts`, `calibration-drift.ts`) — signals can be computed in shadow against real fixtures.
- OTHER: uncertainty + drift + claim-scanner modules added — the honesty/labeling layer is code, not aspiration.
## Engine-actionable? (yes/no + one-line what)
yes — confirms the calibration/drift/uncertainty code paths already exist in-repo; wire engine signals into them instead of rebuilding.
