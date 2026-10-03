# docs/fable/github/ISSUE_AWS_PERSONAL_LEARNING_BRIDGE.md
## What it is (1-2 sentences)
A GitHub issue spec for a "Personal AWS Learning Bridge" that connects Garrett's AWS learning to GSE/FABLE architecture decisions (cost gates, IAM posture, service-fit reasoning, partner vocabulary, no-cost spike design) while keeping private learning records, credentials, account IDs, and paid resources out of the repo.

## Key metrics/methods (formulas where given, else "not specified")
not specified.

## Data sources named
Personal AWS learning records (explicitly: no secrets, account IDs, payment data, or private application data). Files touched: `docs/personal/aws/**`, `schemas/fable/personal-learning-evidence.schema.json`, `apps/web/lib/fable/evidence/schemas.ts`, `apps/web/lib/fable/evidence/validators.ts`, `apps/web/lib/fable/evidence/evidence-harness.test.ts`.

## Findings (numbers and facts, not vibes)
- Acceptance criteria: `docs/personal/aws/README.md` defines allowed/disallowed evidence; personal learning proof uses the checked-in schema; each learning item maps to a GSE/FABLE system and repo action; proof links stay blocked until owner approval; no secrets/account IDs/payment/private data included.
- Test/validation: `npm run fable:evidence`, targeted FABLE evidence harness tests, `npm run guard:secrets`, `git diff --check`.
- Stated risks: overstating course completion before public proof exists; leaking personal screenshots; implying live AWS readiness from learning artifacts.
- Owner decisions needed: approve exact public proof links/screenshots; decide which completed learning items can be public; approve any future live AWS discovery separately.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No QB/coaching/OL/scheme/trust-signal content present. [OTHER]
- INFERENCE: cost gates and service-fit reasoning from the bridge could feed the engine's infra/eval cost controls. [OTHER]

## Engine-actionable? (yes/no + one-line what)
no — infra-learning/governance spec; relevant to build cost discipline, not prediction logic.
