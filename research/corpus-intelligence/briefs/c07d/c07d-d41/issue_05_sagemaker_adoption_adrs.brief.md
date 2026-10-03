# fable/github/ISSUE_05_SAGEMAKER_ADOPTION_ADRS.md
## What it is (1-2 sentences)
A GitHub-issue-style work item (Issue 05) scoping the SageMaker adoption ADR ladder: SageMaker is mapped as an adoption ladder and AWS ML should be used only when it adds scale, governance, reproducibility, partnership readiness, or operational safety.

## Key metrics/methods (formulas where given, else "not specified")
not specified. Acceptance criteria: 6 ADRs exist; each ADR includes context, decision, cost/security/repo impact, rollback, and owner approval.

## Data sources named
None.

## Findings (numbers and facts, not vibes)
- Acceptance criterion: exactly six ADRs must exist, each with 5 required sections (context, decision, cost/security/repo impact, rollback, owner approval).
- Files likely touched: `docs/fable/aws/sagemaker-adrs/*`.
- Test plan: `npm run fable:evidence`.
- Stated risk: premature cloud ML cost.
- Owner decision needed: cloud ML budget and runtime approval.
- The 5 valid use-conditions for AWS ML: adds scale, governance, reproducibility, partnership readiness, or operational safety.
- No numbers, dates, or dollar figures stated.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The "premature cloud ML cost" risk and budget-gate — OTHER: cloud ML is spend-gated by owner decision; any proposal to move engine training/calibration to SageMaker must clear the cloud ML budget decision first. Serves the cost discipline in the Neon + Vercel max-leverage audits (Garrett's founder taps).
- The 5 use-conditions (scale, governance, reproducibility, partnership readiness, operational safety) — OTHER: the justification test for any cloud-ML spend; local execution (Motif VM = execution lab) is the default until one of these is demonstrated. Serves the wiring lane's local-first posture.
- Test plan `npm run fable:evidence` — TRUST-SIGNAL: even the SageMaker issue defers to the evidence ledger as its verification — the ledger is the single source of truth for claim status across the program.
- No connections to QB-BEHAVIOR, COACHING, OL, or SCHEME.

## Engine-actionable? (yes/no + one-line what)
no — It is an infrastructure governance issue with no engine-facing metric, method, or finding; actionable only as cost discipline (no cloud-ML spend without Garrett's budget decision).

## Referenced files/papers/datasets named
- `docs/fable/aws/sagemaker-adrs/*` (the ADR directory this issue populates).
