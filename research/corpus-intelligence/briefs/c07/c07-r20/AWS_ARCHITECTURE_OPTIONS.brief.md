# fable/aws/AWS_ARCHITECTURE_OPTIONS.md
## What it is (1-2 sentences)
A five-option AWS architecture ladder for GSE/FABLE (docs + local gates only; Amplify preview hosting; SageMaker MLOps ladder; Clean Rooms partner collaboration; Bedrock AgentCore control plane), where the current branch implements Option A (docs and local gates, zero cloud spend) and every other option requires owner approval.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas or metrics; each option carries prerequisites (Option C: model artifacts, approved data, runtime decision; Option D: real partner + contract with query controls; Option E: tool allowlist, spend gates, audit policy).
## Data sources named
None.
## Findings (numbers and facts, not vibes)
- Current implementation: Option A only — lowest risk, no cloud spend.
- Ordering is staged (Amplify before SageMaker before Clean Rooms before AgentCore), each gated on prior proof and owner approval — i.e., a deliberate no-premature-cloud posture.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No football-intelligence content — OTHER (infra posture).
## Engine-actionable? (yes/no + one-line what)
No — strategy posture doc; nothing predictive to wire.
