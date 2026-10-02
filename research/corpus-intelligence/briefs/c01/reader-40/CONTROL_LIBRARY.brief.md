# compliance/CONTROL_LIBRARY.md
## What it is (1-2 sentences)
A hand-maintained human-readable mirror of the compliance control library (8 controls: CTL-ACC-001, CTL-CHG-001, CTL-LOG-001, CTL-LOG-002, CTL-KEY-001, CTL-MON-001, CTL-AI-001, CTL-SUP-001) mapped to SOC 2, ISO 27001, and NIST AI RMF trust criteria. Explicitly internal alignment material, not a certified control set.

## Key metrics/methods (formulas where given, else "not specified")
not specified — controls, not metrics. Evidence sources per control: IdP MFA snapshots, access review exports, CI/CD deploy logs, governed receipt logs, key registry, CCM run history, supplier register.

## Data sources named
None — evidence-source types only (IdP, CI/CD logs, receipt logs).

## Findings (numbers and facts, not vibes)
- 8 controls covering privileged-access MFA, change management for production deploys, receipt-logged agent actions, receipt signature verification, key management/rotation, continuous control monitoring, AI-decision traceability to policy (NIST AI RMF GOVERN-1.1 / MEASURE-2.7), and supplier risk tracking.
- CTL-AI-001 is the AI-governance hook: agent decisions must be traceable to a policy and an outcome.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) — Compliance/governance controls; no sports signal.

## Engine-actionable? (yes/no + one-line what)
No — governance artifact with no data, metrics, or methods usable in the engine.
