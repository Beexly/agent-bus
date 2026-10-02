# fable/github/ISSUE_05_SAGEMAKER_ADOPTION_ADRS.md
## What it is (1-2 sentences)
A GitHub-issue spec defining acceptance criteria for six SageMaker adoption ADRs: SageMaker is framed as an adoption ladder to be used only when it adds scale, governance, reproducibility, partnership readiness, or operational safety.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
None.
## Findings (numbers and facts, not vibes)
Acceptance criteria: 6 ADRs must exist; each must include context, decision, cost/security/repo impact, rollback, and owner approval. Files touched: `docs/fable/aws/sagemaker-adrs/*`. Test plan: `npm run fable:evidence`. Risk called out: premature cloud ML cost. Owner decision needed: cloud ML budget and runtime approval.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: MLOps adoption process governance — no sports analytics content.
## Engine-actionable? (yes/no + one-line what)
no — process/acceptance-criteria documentation for cloud ML adoption; no engine signal.
