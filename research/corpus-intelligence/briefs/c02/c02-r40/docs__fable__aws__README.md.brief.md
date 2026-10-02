# docs/fable/aws/README.md
## What it is (1-2 sentences)
Index page for the FABLE AWS evidence layer: it records AWS research, fit decisions, cost/security gates, and zero-cost spike plans. It lists 15 official AWS documentation URLs checked on 2026-07-03 and 28 second-level docs/artifacts in the folder.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas or metrics; the file is a governance index.
## Data sources named
- 15 official AWS documentation pages: AWS Well-Architected framework (pillars page), AWS Budgets, Cost Anomaly Detection, IAM Access Analyzer policy validation, Amplify Next.js SSR support, Amplify SSR deployment, Bedrock AgentCore overview/policy/pricing, SageMaker Model Registry, SageMaker Pipelines, SageMaker Model Monitor, SageMaker Clarify, AWS Clean Rooms overview, AWS sports/NFL page.
- Local repo state at `C:\Users\Garrett\Sports`.
## Findings (numbers and facts, not vibes)
- Source posture: official AWS docs checked 2026-07-03; repo state checked locally.
- Hard boundary list (5 items): no deploy, no DNS, no secrets, no AWS account mutation, no paid dependency; also "no claim that AWS is already configured."
- Folder contains 28 second-level docs including scorecard (`AWS_SERVICE_SCORECARD.md`), model leverage map, model router design, model evaluation plan, SageMaker ADRs, Amplify ADRs, Clean Rooms demo, fixtures, and governance-os artifacts. [TRUST-SIGNAL, OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Governance/evidence posture: [TRUST-SIGNAL] — the "no claim AWS is configured" boundary and checked-docs posture is a trust-signal framework applicable to public claims.
- Cost-gating (AWS Budgets/Cost Anomaly Detection references): [OTHER]
- Infrastructure/fit research inventory: [OTHER]
## Engine-actionable? (yes/no + one-line what)
no — governance index with no metrics, models, or data; useful only as a doc catalog.
