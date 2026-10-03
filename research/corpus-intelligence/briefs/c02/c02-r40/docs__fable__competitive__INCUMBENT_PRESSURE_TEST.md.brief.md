# docs/fable/competitive/INCUMBENT_PRESSURE_TEST.md
## What it is (1-2 sentences)
A 10-criterion pressure-test table scoring GSE/FABLE's competitive posture (criterion, current status, evidence, gap, next action, confidence).
## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas; statuses are qualitative (partial / not proven / proven local gate / conceptual / fixture-only).
## Data sources named
Evidence sources named in the table: edge lab backlog, unsupported claims ledger, `npm run fable:evidence`, forensic demo, source registry adapter, AWS gate tests, Clean Rooms synthetic schema, demo report, README/INDEX/evidence docs, ADRs and issues.
## Findings (numbers and facts, not vibes)
- 10 criteria scored: only 2 are "proven" (cost-aware infrastructure — "proven local gate", high confidence; visible GitHub evidence — "proven local", high confidence); 6 are "partial"; 1 is "not proven" (measurable improvement, confidence low); 1 is "conceptual" (partner-safe architecture, confidence low); 1 is "fixture-only" (clear public demo, confidence medium). [TRUST-SIGNAL]
- "measurable improvement" is the weakest criterion: status "not proven", evidence "unsupported claims ledger", gap "no metric gain", confidence low. [TRUST-SIGNAL]
- Cost-aware infrastructure and visible GitHub evidence are the strongest: both "proven" with high confidence. [TRUST-SIGNAL]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Competitive self-assessment table: [TRUST-SIGNAL] — honest gap naming (no metric gain, unsupported claims ledger) is directly usable as a trust/credibility framework.
- Public-demo posture (fixture-only vs live public data): [OTHER]
## Engine-actionable? (yes/no + one-line what)
no — competitive/governance self-assessment with no metrics, models, or sports data; no QB/coaching/OL/scheme content.
