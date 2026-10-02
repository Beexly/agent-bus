# docs/fable/aws/AWS_MICRO_EDGE_FACTORY.md
## What it is (1-2 sentences)
A protocol (updated 2026-07-03) for producing small, falsifiable sports-intelligence edges from public-safe or synthetic data before any cloud spend: a 6-step factory loop, a 7-candidate matrix with local tests and kill rules, AWS mapping rules, and a factory output template.
## Key metrics/methods (formulas where given, else "not specified")
- Allowed metrics (choose one per candidate): calibration delta, freshness gap, entropy, contradiction rate, no-action rate, or replay error.
- Factory loop: (1) candidate — define the edge hypothesis, name the source, mark rights status; (2) local fixture — build a small public-safe or synthetic fixture, document what it cannot prove; (3) metric — choose one metric; (4) falsification — define the kill rule BEFORE testing; (5) AWS mapping — map a future AWS service only if local proof survives; (6) publication — publish the artifact only if source-safe and caveated.
- AWS mapping rules: S3/Athena only after storage rights and volume justify; SageMaker only after local artifacts are reproducible; Bedrock/AgentCore only after deterministic reviewers are insufficient; Clean Rooms only after a partner and legal basis exist; CloudWatch/Cost tools only after live AWS workloads exist.
- Factory output template fields: candidate id, source rights, fixture path, local command, metric, baseline, result, kill rule, AWS service that could help later, owner decision, next action.
## Data sources named
None external — candidates name future AWS services (S3, Athena, Glue, SageMaker feature registry, AgentCore reviewer, Clean Rooms, CloudWatch-style monitor) as conditional mappings only.
## Findings (numbers and facts, not vibes)
- Candidate matrix (candidate → local signal → future AWS fit → local test → kill rule):
  - source freshness decay: stale timestamp vs model error; S3/Athena later; local timestamp replay; kill: no out-of-sample separation.
  - roster shock: transaction timestamp vs role feature; Glue/Athena later; local event join; kill: unstable across windows.
  - depth-chart instability: depth change count vs uncertainty; SageMaker feature registry later; fixture bucket test; kill: no monotonic uncertainty lift.
  - contradiction queue: conflicting public facts; AgentCore reviewer later; deterministic rule queue; kill: contradictions do not predict correction.
  - schedule fatigue: rest/travel/body-clock bucket; Athena later; schedule feature card; kill: no baseline improvement.
  - market-open event delta: event before market snapshot; Clean Rooms later with partner aggregate; fixture forensic report; kill: timing does not precede movement.
  - no-action gate: low data quality or high uncertainty; CloudWatch-style monitor later; no-action report; kill: gate does not reduce bad recommendations.
- The kill rule must be defined before testing (falsification step).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Roster shock → transaction timestamp vs role feature (role elasticity after transactions) → COACHING / SCHEME.
- Depth-chart instability → depth change count vs uncertainty lift → COACHING.
- Schedule fatigue → rest/travel/body-clock bucket → COACHING.
- Market-open event delta → event timing before market snapshot (timing edge on news/market movement) → OTHER.
- Contradiction queue (conflicting public facts predicting correction) → TRUST-SIGNAL.
- No-action gate (low data quality / high uncertainty suppresses bad recommendations) → TRUST-SIGNAL.
- Source freshness decay → stale timestamp vs model error → OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the factory loop as the standard signal-development protocol: every new edge idea gets a local fixture, one metric, and a pre-defined kill rule before any cloud or paid-tool spend.
