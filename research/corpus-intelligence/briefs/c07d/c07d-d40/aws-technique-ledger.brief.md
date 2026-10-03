# fable/aws/AWS_TECHNIQUE_LEDGER.md
## What it is (1-2 sentences)
Updated 2026-07-03. A 10-row ledger mapping AWS concepts to local no-cost implementations for GSE/FABLE, each with a proof command or artifact, plus a five-question technique rule every entry must satisfy.

## Key metrics/methods (formulas where given, else "not specified")
Not specified. No formulas, equations, or numeric thresholds. Techniques named:
1. schema-first evidence — Glue/Athena catalog discipline → JSON schema files → evidence contracts → `npm run fable:evidence`
2. local model card — SageMaker Model Registry → markdown/model-card fixture → model governance → future fixture test
3. drift bucket replay — SageMaker Model Monitor → local drift checks → calibration monitoring → drift tests
4. explainability notes — SageMaker Clarify → parity and segment docs → bias/fairness review → parity tests
5. agent tool matrix — AgentCore policy → docs and fake tools → agent safety → evidence harness and docs
6. cost cap gate — Budgets/Cost Explorer → env defaults and validators → spend safety → `npm run fable:aws-gates`
7. fake IAM policy review — IAM Access Analyzer → local fake policies → least privilege → future unit tests
8. synthetic collaboration — Clean Rooms → synthetic schemas and SQL → partner story → docs/fable/aws/clean-rooms-demo
9. artifact retention plan — S3 lifecycle concepts → local retention checklist → evidence storage → data-rights docs
10. operational command log — CloudWatch/CloudTrail mindset → command report → auditability → `docs/fable/evidence/COMMAND_LOG.md`

## Data sources named
None. Files/commands referenced: `npm run fable:evidence`, `npm run fable:aws-gates`, `docs/fable/aws/clean-rooms-demo`, `docs/fable/evidence/COMMAND_LOG.md`.

## Findings (numbers and facts, not vibes)
- Technique rule: every technique must state (1) what AWS concept inspired it, (2) how it works locally, (3) what it proves, (4) what it does not prove, (5) what owner gate is needed before live AWS use.
- Techniques 3 and 4 (drift bucket replay, explainability notes) are the closest to modeling substance: drift checks map to calibration monitoring with "drift tests" as proof; parity and segment docs map to bias/fairness review with "parity tests" as proof. Neither gives test definitions, metrics, or pass criteria.
- No sample sizes, dates (other than the 2026-07-03 update stamp), effect sizes, p-values, confidence intervals, R², accuracy figures, or gates with numeric thresholds anywhere in the file.

## Intelligence connections
- **OTHER — calibration/sizing program:** The "drift bucket replay" row (local drift checks → calibration monitoring → drift tests) is a named placeholder for exactly the calibration-monitoring capability the engine needs, but it is an unimplemented stub — no drift statistic, window, or alert threshold is defined. Flags a gap rather than a solution.
- **OTHER — trust-target intake:** "Schema-first evidence" (JSON schema files → evidence contracts) is the mechanism for enforcing intake shape discipline, but no schemas are listed here.
- **OTHER — QB-BEHAVIOR, COACHING, OL, SCHEME, TRUST-SIGNAL:** No connection — zero football content, and no trust-signal content beyond process.

## Engine-actionable? (yes/no + one-line what)
No — stub ledger naming ten techniques without definitions, thresholds, or proof artifacts; the drift-monitoring row flags an unbuilt calibration-monitoring capability.
