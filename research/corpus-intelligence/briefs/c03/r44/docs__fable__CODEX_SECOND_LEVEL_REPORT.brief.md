# docs/fable/CODEX_SECOND_LEVEL_REPORT.md
## What it is (1-2 sentences)
Codex's second-level status report (updated 2026-07-03, branch `codex/fable-nfl-evidence-integration`) on the FABLE NFL evidence-integration build: claim-to-evidence ledger, executable evidence harness, fixture-only public-data forensic demo, edge lab, incumbent pressure test, AWS model leverage map, and a full test/typecheck/guard verification pass.
## Key metrics/methods (formulas where given, else "not specified")
- Test commands run: npm run fable:evidence / fable:claims / fable:sources / fable:aws-gates / fable:demo — all passed.
- Targeted FABLE web tests: 9 files / 33 tests passed.
- prediction-engine tests: 71 files / 738 tests passed.
- data-ingestion tests: 16 files / 131 tests passed.
- Full workspace typecheck passed (earlier broad typecheck failure superseded by docs/fable/master/TYPECHECK_DECISION.md).
- guard:trust passed, scanned 1103 files; guard:secrets passed, scanned 3063 tracked files, no secrets found; git diff --check passed.
- Blocked: `gh auth status` fails (GitHub CLI unauthenticated → live issue/PR creation blocked); actionlint unavailable on the host (workflow YAML manually inspected instead).
## Data sources named
- docs/fable/evidence/CLAIM_EVIDENCE_LEDGER.json; docs/fable/evidence/UNSUPPORTED_CLAIMS.md.
- docs/fable/master/MASTER_FINAL_REPORT.md and TYPECHECK_DECISION.md; docs/fable/CODEX_THIRD_PASS_REPORT.md.
- packages/prediction-engine, packages/data-ingestion test suites.
## Findings (numbers and facts, not vibes)
- Top 10 edge candidates: source freshness decay; injury-report timing delta; roster transaction shock; schedule rest asymmetry; depth chart instability; model disagreement entropy; calibration degradation after roster shock; source contradiction detection; role elasticity after transaction shock; market-open forensic report.
- Top 10 blockers: no measured model gain; no legal review marker; no AWS account approval; no paid-resource approval; no Bedrock account access proof; no Clean Rooms partner; no live public-data demo; no MC Dropout runtime approval; no full OneNote claim extractor; no GitHub CLI auth.
- AWS services worth spiking: Amplify preview hosting; Bedrock/AgentCore for governed agents; SageMaker Model Registry/Model Cards after artifacts exist; Clean Rooms with a real partner and contract.
- AWS services rejected for now: hosted inference; backend migration through Amplify; live Clean Rooms collaboration; paid model calls.
- Owner decisions needed: AWS account use; paid resources; model runtime; legal-review marker process; public demo data source.
- What is visible locally: root README FABLE link; docs/fable/INDEX.md; evidence ledger and validators; forensic demo; edge lab; AWS maps and ADRs; red-team review; GitHub issue package.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Edge candidates (injury-report timing delta, roster transaction shock, depth chart instability, model disagreement entropy, calibration degradation after roster shock, source contradiction detection, role elasticity after transaction shock) → COACHING (roster/depth-chart signals) / SCHEME (role elasticity).
- Claim-to-evidence ledger + unsupported-claims file + calibration evidence rules → TRUST-SIGNAL (proof discipline for engine claims).
- Rest of the report (branch status, test counts, AWS spiking decisions, blockers) → OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the top-10 edge candidate list as a signal-development backlog: start with injury-report timing delta, roster transaction shock, and source freshness decay, each with a falsification rule before any cloud spend.
