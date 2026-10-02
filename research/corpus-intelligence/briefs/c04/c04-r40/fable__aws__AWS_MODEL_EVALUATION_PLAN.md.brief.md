# docs/fable/aws/AWS_MODEL_EVALUATION_PLAN.md
## What it is (1-2 sentences)
A short gate document stating what every model class needs before approval and the six metrics used to judge it, with the rule that no model is approved for live use until it beats deterministic baselines and passes the source-risk rubric.

## Key metrics/methods (formulas where given, else "not specified")
Not specified — metric names only, no formulas: structured parse rate; citation/evidence accuracy; unsupported-claim false negative rate; cost per 100 evaluations; latency percentile; human review agreement. Required per model class: fixture set, expected output schema, refusal cases, source-rights cases, cost estimate, latency tolerance, hallucination audit, fallback path.

## Data sources named
None named — the plan is source-agnostic.

## Findings (numbers and facts, not vibes)
- Gate rule: "No model is approved for live use until it beats deterministic baselines on the target workload and passes the source-risk rubric."
- No numeric results, benchmarks, or evaluations are recorded in this file — it is a rubric, not a report.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All findings: OTHER (generic model-approval rubric; no sports content). (INFERENCE: its metric set — hallucination audit, unsupported-claim false-negative rate, human review agreement — is conceptually adjacent to how GSE could QC model/pick outputs, but the file provides no numbers or sports application.)

## Engine-actionable? (yes/no + one-line what)
No — a policy rubric with no results; the metric checklist is generic to agent/LLM evaluation, not to the prediction engine's calibration work.
