# fable/aws/AWS_LOCAL_DATA_FACTORY.md
## What it is (1-2 sentences)
Governance doc (updated 2026-07-03) defining data classes and rules for creating AWS-shaped data discipline without moving any data to AWS; everything stays local with rights gating.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas). Data Quality Signals listed: freshness age, missing fields, contradiction count, source agreement count, update latency, outcome availability, fixture reproducibility, rights certainty. No-Cost Pipeline: source-rights review → fixture creation → schema validation → metric replay → evidence report → no-action or next local test → AWS mapping only if local proof survives. Rejection rules: rights unknown = no cloud storage; partner identity data = no repo fixture; private account data = no commit; paid provider data = no public demo without license; synthetic data must be labeled synthetic.
## Data sources named
None beyond data classes: synthetic partner data, public fixture data, internal model outputs, odds/market data (fixture only unless licensed), personal learning proof, private AWS account data (not allowed).
## Findings (numbers and facts, not vibes)
- Odds/market data permitted only as fixtures unless licensed; license review is the gate.
- Paid use blocked by `FABLE_AWS_ALLOW_PAID_RESOURCES=false` referenced elsewhere.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: data-rights hygiene (license review gate on odds/market data; rights-unknown = no cloud storage) — relevant as a TRUST-SIGNAL for the repo's commercial posture, but no football signal.
## Engine-actionable? (yes/no + one-line what)
no — governance/process doc with no sports metrics, features, or methods.
