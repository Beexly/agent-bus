# fable/aws/AWS_NO_COST_WORKFLOW_BLUEPRINTS.md
## What it is (1-2 sentences)
Updated 2026-07-03. Six step-by-step local workflows for building AWS readiness (learning evidence, service fit review, mock-before-cloud, agent gates, cost review, partner architecture) without touching an AWS account.

## Key metrics/methods (formulas where given, else "not specified")
Not specified. No formulas, equations, or numeric gates. Notable parameter-like statements:
- Workflow 5 (Cost Review Without Spend), step 4: "Set default monthly cap to zero."
- Workflow 4 (AWS Agent Gate): tools categorized as propose / read / write / spend / deploy / publish; default spend, deploy, publish, secret, and production tools to blocked; agent output must carry evidence labels: observed, inferred, assumed, blocked.

## Data sources named
None. Referenced file: `docs/personal/aws/AWS_PERSONAL_PROGRESS_TEMPLATE.md` (personal progress template, kept outside the repo if it contains personal details). Referenced command: `npm run fable:evidence`. Mock candidates named: S3 artifact-retention checklist, Amplify preview build settings, SageMaker model-card manifest, Bedrock/AgentCore fake tool policy, Clean Rooms synthetic query rule.

## Findings (numbers and facts, not vibes)
- Workflow 1 (Learning Proof To Repo Action), 6 steps: complete/start a public AWS learning item → fill the personal progress template outside the repo → redact proof → add only public-safe metadata to a learning evidence JSON entry → run `npm run fable:evidence` → add one no-cost repo action (checklist, matrix row, mock plan). Outputs: learning evidence entry, GSE/FABLE relevance, no-secret and no-paid confirmations.
- Workflow 2 (Service Fit Review), 7 steps: pick one AWS service → add/update scorecard row → define current repo fit → define no-cost spike path → define rejection criteria → define adoption trigger → link the learning area that improved judgment. Outputs: service scorecard update, owner decision gate.
- Workflow 3 (Mock Before Cloud), 6 steps: write cloud intent in local terms → build no-cost mock artifact → define what the mock proves → define what the mock does not prove → add the validating command → reject live AWS unless mock passes and owner approves.
- Workflow 4 (AWS Agent Gate), 5 steps: define agent tools in the six-category taxonomy → default block spend/deploy/publish/secret/production tools → add fake-tool tests → require evidence labels (observed, inferred, assumed, blocked) → require owner approval before any live tool. Outputs: tool permission matrix, failure-mode rubric, fake-agent transcript.
- Workflow 5 (Cost Review Without Spend), 6 steps: name service → identify billing dimensions from official docs → identify variable-cost drivers → set default monthly cap to zero → define future budget/anomaly-monitor plan without creating it → identify a local alternative. Outputs: cost worksheet, kill switch, owner approval requirement.
- Workflow 6 (Partner Architecture Without Partner Data), 6 steps: define partner type → define aggregate question → define raw data that must not be exposed → define allowed/disallowed queries → define privacy threshold → use synthetic schema only. Outputs: Clean Rooms synthetic scenario, partner-safe discussion note, legal blocker list.
- Date stamp "Updated: 2026-07-03" is the only number. No sample sizes, effect sizes, dates of runs, or measured outcomes.

## Intelligence connections
- **TRUST-SIGNAL — agent evidence labels (Workflow 4):** The required output labels — observed, inferred, assumed, blocked — are a trust-signal discipline mechanism for agent-produced intelligence: every agent output must be labeled by evidence tier. Serves the trust-target intake program as a labeling convention, and matches the standing practice of labeling completion claims with audit receipts. This is the most engine-relevant convention in the file.
- **OTHER — calibration/sizing program:** Workflow 5's default-zero cost cap and mandatory kill switch are spend-safety policy, not calibration content; no connection to model calibration beyond the naming coincidence.
- **OTHER — QB-BEHAVIOR, COACHING, OL, SCHEME:** No connection — zero football content.

## Engine-actionable? (yes/no + one-line what)
No — process blueprints with one reusable convention (observed/inferred/assumed/blocked evidence labels) but no parameters, data, or thresholds.
