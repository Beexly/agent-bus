# fable/aws/sagemaker-adrs/ADR-0003-when-to-use-feature-store.md

## What it is (1-2 sentences)
An Architecture Decision Record for the fable component's AWS SageMaker integration: the decision on whether to adopt a managed SageMaker Feature Store for ML features. Verdict is **Hold** — stay on local feature files and schema docs until volume and approvals justify managed storage.

## Key metrics/methods (formulas where given, else "not specified")
not specified — no metrics, formulas, or thresholds are given. The ADR lists qualitative gates only:
- Use when: (1) feature definitions are stable, (2) source rights allow storage, (3) online/offline consistency matters.
- Reject-now rationale: "local feature schemas are enough until volume proves need."
- Rollback path: local feature files and schema docs (i.e., the current state is also the fallback).
- Owner approval needed: **yes**.

## Data sources named
None named. References "feature definitions," "source rights," and "feature volume" only in the abstract.

## Findings (numbers and facts, not vibes)
- Decision status: **Hold** (not adopted, not rejected permanently).
- Two explicit "why not now" reasons: (1) feature contracts are still being formalized; (2) no AWS storage approval exists.
- Three additional gates before adoption: (a) feature volume justifies managed storage, (b) deletion/retention rules are approved, (c) offline/online parity is a real requirement.
- INFERENCE: The fable feature pipeline currently runs on local feature files + schema docs, and this ADR commits to deferring any managed-store migration until a volume-based trigger fires and two approvals (owner approval, AWS storage approval) are obtained. The dual-approval gate (owner + storage) plus the retention-rule gate means this decision cannot move unilaterally.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Infrastructure/ML-ops governance — documents that fable's feature engineering is still in contract-formalization stage; no feature-store schema, no stabilized feature set exists yet. For an engine consuming fable outputs, the feature contract surface is unstable — pin versions.

## Engine-actionable? (yes/no + one-line what)
yes — Treat fable feature schemas as unstable and version-pin any fable-derived features in the engine; do not build assumptions of online/offline consistency into wiring plans.
