# fable/aws/sagemaker-adrs/ADR-0004-when-to-use-model-registry.md
## What it is (1-2 sentences)
An architecture decision record (ADR-0004) deferring SageMaker Model Registry adoption: the decision is to use local model-card docs now and the registry later, because no SageMaker model artifact exists yet.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
None.
## Findings (numbers and facts, not vibes)
Decision: model-card docs now, registry later. "Use when" conditions: a versioned model artifact exists, an approval workflow exists, a rollback target exists. "Why not now": current work is the evidence harness and local primitives. Rollback path: local model card + commit hash. Additional gates: replay metrics and lineage attached, model card exists locally first, promotion/demotion workflow documented. Owner approval required: yes. Explicitly rejected now because no SageMaker model artifact exists.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: model cards + replay metrics + lineage required before any registry adoption — an evidence-before-claims posture for model governance.
- OTHER: infrastructure/governance (SageMaker MLOps), not a sports analytic.
## Engine-actionable? (yes/no + one-line what)
no — it is an MLOps governance decision with no sports content; only background context for future model deployment.
