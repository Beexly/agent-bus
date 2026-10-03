# fable/github/ISSUE_04_AGENTCORE_SECURITY_FIREBREAK.md
## What it is (1-2 sentences)
A GitHub-issue template doc specifying a security firebreak for AWS AgentCore: future agents must run under default-deny permissions, with no deploy, paid-resource, publishing, or source-automation authority unless explicitly granted.

## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas, no numeric thresholds. Acceptance criteria: agent roles listed; tool permissions explicit; failure modes and rollback paths exist.

## Data sources named
None. Referenced files (to-be-created): `docs/fable/aws/AGENTCORE_SECURITY_FIREBREAK.md`, `docs/fable/aws/AGENT_TOOL_PERMISSION_MATRIX.md`, `docs/fable/aws/AGENT_EVALUATION_RUBRICS.md`.

## Findings (numbers and facts, not vibes)
- Agents must not gain deploy, paid-resource, publishing, or source-automation authority by default.
- Stated risk: "Future implementation could exceed documented permissions."
- Owner decision needed: tool allowlist and approval policy.
- Test plan: docs review plus `npm run fable:evidence`.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Default-deny permission posture for agents with an explicit tool allowlist — OTHER (infra/ops governance, not sports content)
- Failure modes and rollback paths as acceptance criteria — TRUST-SIGNAL (documents agent accountability design; useful for engine-internal agent governance, e.g., guarding a calibration/publishing pipeline)

## Engine-actionable? (yes/no + one-line what)
no — infra governance doc; no metric, method, or dataset the prediction engine can ingest.
