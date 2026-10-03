# docs/fable/aws/AWS_OPERATING_INTELLIGENCE_MATRIX.md
## What it is (1-2 sentences)
An operating-governance matrix (updated 2026-07-03) that converts AWS learning into no-cost, local-first operating judgment for GSE/FABLE: six Well-Architected pillars each mapped to a GSE question, local evidence artifact, metric to track, learning input, no-cost action, and an owner gate. It also defines six action tiers and eight operating questions that must be answered before any AWS action is taken.
## Key metrics/methods (formulas where given, else "not specified")
not specified — metrics are listed per pillar (replay success rate, mean manual steps, rollback completeness; wildcard count, public-surface count, unknown-rights count; fallback coverage, stale-source rejection rate; local runtime, data volume, queue depth; estimated monthly cost, variable-cost driver count; retained artifact count, replay frequency, storage growth) but no formulas, thresholds, or measured values are given.
## Data sources named
AWS Well-Architected pillars (operational excellence, security, reliability, performance efficiency, cost optimization, sustainability); IAM Access Analyzer policy validation concepts; AWS Budgets, Cost Explorer, Cost Anomaly Detection; Bedrock AgentCore policy/runtime concepts. Local evidence artifacts: command log, runbook, rollback checklist, IAM review template, source-rights marker, agent allowlist, fixture replay, fallback plan, local baseline, bottleneck note, cost worksheet, cap, kill switch, retention plan, batch schedule.
## Findings (numbers and facts, not vibes)
- Action tiers: tier 0 (local docs) and tier 1 (local validation) allowed in-branch; tier 2 (read-only AWS discovery) "no by default" without explicit owner approval + profile/region; tiers 3–5 (reversible change, paid change, destructive/production-sensitive) are "no" — requiring account/region/cost/rollback/final confirmation, budget + kill switch + owner approval, or second confirmation + rollback owner respectively.
- Eight mandatory operating questions before any AWS action: local proof AWS is needed; data-rights basis; maximum monthly cost; exact kill switch; required IAM permissions and why; rollback path; proof the action worked without overclaiming; what would trigger rejecting the AWS path.
- No-cost output standard: every AWS learning item must produce at least one of — a better rejection criterion, a safer owner gate, a local test, a public-safe portfolio paragraph, a mock plan, a measurable artifact.
- Explicit statement: the matrix is local-only and does not require AWS credentials.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: infrastructure/ops governance and cost discipline for the FABLE/AWS learning lane.
- TRUST-SIGNAL (secondary): owner gates, no-overclaiming evidence rules, and explicit rejection criteria are process-level trust discipline. INFERENCE on framing.
## Engine-actionable? (yes/no + one-line what)
No — ops governance for cloud spending and access control, with no modeling or prediction signal; useful only as process discipline, not as an engine feature.
