# fable/aws/AWS_ARCHITECTURE_OPTIONS.md
## What it is (1-2 sentences)
A decision matrix of five AWS architecture options (A–E) for GSE/FABLE, currently parked on Option A (docs and local gates only) with owner-approval gates before any cloud spend.

## Key metrics/methods (formulas where given, else "not specified")
Not specified. Options are described qualitatively with preconditions, not formulas or numeric gates.

## Data sources named
None.

## Findings (numbers and facts, not vibes)
- Option A (docs and local gates only): current branch implements this; described as lowest risk, no cloud spend.
- Option B (Amplify preview hosting): requires owner approval plus build verification, environment review, and a release-control decision.
- Option C (SageMaker MLOps ladder): useful only after model artifacts, approved data, and a runtime decision exist; starts with model cards and registry concepts, not endpoints.
- Option D (Clean Rooms partner collaboration): useful only with a real partner and contract; requires query controls and data minimization.
- Option E (Bedrock AgentCore control plane): future agent runtime/control plane candidate; requires tool allowlist, spend gates, and audit policy.
- No numbers, dates, sample sizes, or performance figures in this file.
- Files referenced: none (no cross-references in this file).

## Intelligence connections
- **OTHER — calibration/sizing program:** Option C's "model cards and registry concepts before endpoints" matches the governance doctrine of proving locally before cloud, but there is no modeling content here — pure infrastructure planning.
- **OTHER — general:** The option ladder encodes the no-cost-before-cloud posture that governs all FABLE work; relevant only as a gate, not as engine input.

## Engine-actionable? (yes/no + one-line what)
No — planning document; no engine inputs, thresholds, or data artifacts.
