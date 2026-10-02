# docs/fable/aws/AGENT_FAILURE_MODES.md
## What it is (1-2 sentences)
A compact risk register for agent-driven work in the FABLE/AWS lane: five failure modes, each paired with its control mechanism.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — the file lists controls, not metrics.
## Data sources named
None.
## Findings (numbers and facts, not vibes)
- Failure: agent uses a blocked source → control: source registry adapter and tests.
- Failure: agent starts paid AWS work → control: AWS gates default off.
- Failure: agent invents cloud status → control: final reports separate local skeletons from live resources.
- Failure: agent leaks secrets → control: no secret files and `npm run guard:secrets`.
- Failure: agent overstates model proof → control: claim scanner and calibration evidence rules.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Claim scanner + calibration evidence rules against overstated model proof → TRUST-SIGNAL.
- All five failure-mode/control pairs → OTHER (agent governance).
## Engine-actionable? (yes/no + one-line what)
Yes — adopt as a pre-flight checklist for the agent fleet: AWS gates default off, claim scanner run, guard:secrets on every commit, local-skeleton vs live-resource labeling in reports.
