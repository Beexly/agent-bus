# docs/fable/aws/sagemaker-adrs/ADR-0001-local-first-ml.md
## What it is (1-2 sentences)
Architecture Decision Record choosing local/open-source ML over AWS SageMaker: local TypeScript/statistical primitives are deemed enough for evidence harnesses, with SageMaker gated behind data windows, versioned artifacts, and owner-approved cost ceiling.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
none (options considered: local scripts, SageMaker training, hosted inference)
## Findings (numbers and facts, not vibes)
- Decision: local/open-source first; SageMaker called premature without data windows and model artifacts.
- Cost impact: zero now; security impact: lower exposure; repo impact: keeps tests local.
- Level mapping: Level 0/1 only.
- Rollback path: remove local experiment branch.
- Adoption trigger for cloud ML: versioned model artifact + approved data manifest + owner-approved cost ceiling.
- Owner approval needed: yes for cloud ML.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Infra-only content; nothing football-related. OTHER
## Engine-actionable? (yes/no + one-line what)
no — ML infra posture decision; relevant context for how models get built but not a signal itself.
