# fable/evidence/EVIDENCE_INDEX.md
## What it is (1-2 sentences)
The index of the FABLE claim-evidence system: core ledger files, the executable harness (scripts + schemas + validators + tests), schema contracts, personal AWS learning evidence, and the GitHub navigation path.

## Key metrics/methods (formulas where given, else "not specified")
- Not specified. Ten schema contracts: claim-evidence-entry, source-registry-entry, edge-experiment-entry, labeling-manifest-entry, drift-report-entry, calibration-report-entry, aws-gate-config, forensic-report-input, forensic-report-output, personal-learning-evidence.

## Data sources named
- Repo-local ledger files (docs/fable/evidence/CLAIM_EVIDENCE_LEDGER.md/.json, UNSUPPORTED_CLAIMS.md, COMMAND_LOG.md, BLOCKERS.md) and personal AWS learning docs (docs/personal/aws/*).

## Findings (numbers and facts, not vibes)
- Executable harness: scripts/fable-evidence.ts, scripts/fable-demo-forensic-report.ts, apps/web/lib/fable/evidence/schemas.ts, validators.ts, evidence-harness.test.ts.
- Personal AWS learning evidence lives in docs/personal/aws/ and is kept separate from repo claims.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: evidence/honesty infrastructure — the claim-evidence ledger pattern is the audit backbone behind the program's receipts requirement (e.g., calibration-report and edge-experiment schemas as templates for engine experiment tracking).

## Engine-actionable? (yes/no + one-line what)
Yes — reuse the claim-evidence-entry, edge-experiment-entry, and calibration-report-entry schema pattern as the engine's experiment/audit ledger format.
