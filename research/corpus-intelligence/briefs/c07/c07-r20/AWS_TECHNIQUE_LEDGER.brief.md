# fable/aws/AWS_TECHNIQUE_LEDGER.md
## What it is (1-2 sentences)
A 2026-07-03 ledger of ten AWS-inspired techniques implementable locally without spend (schema-first evidence, local model cards, drift bucket replay, explainability notes, agent tool matrix, cost cap gate, fake IAM policy review, synthetic collaboration, artifact retention plan, operational command log), each with its AWS concept, local implementation, GSE/FABLE use, and proof command/artifact.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — ledger rows, not formulas. Proof artifacts named: `npm run fable:evidence`, `npm run fable:aws-gates`, `docs/fable/evidence/COMMAND_LOG.md`, `docs/fable/aws/clean-rooms-demo`.
## Data sources named
None.
## Findings (numbers and facts, not vibes)
- Ten techniques, each with an explicit technique rule: must state what AWS concept inspired it, how it works locally, what it proves, what it does NOT prove, and what owner gate precedes live use.
- Most relevant rows for engine governance: drift bucket replay (local drift checks → calibration monitoring), explainability notes (parity/segment docs → bias review), schema-first evidence (JSON schemas → evidence contracts).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Drift bucket replay and explainability notes touch calibration monitoring and bias/fairness review — TRUST-SIGNAL (adjacent to drift-bias doc).
- No QB-BEHAVIOR, COACHING, OL, or SCHEME content.
## Engine-actionable? (yes/no + one-line what)
No — technique catalog only; the drift-replay row converges with the DRIFT_BIAS_MONITORING stub but carries no method detail to wire.
