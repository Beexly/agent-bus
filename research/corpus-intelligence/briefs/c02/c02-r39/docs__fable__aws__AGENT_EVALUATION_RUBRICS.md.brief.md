# docs/fable/aws/AGENT_EVALUATION_RUBRICS.md
## What it is (1-2 sentences)
A gatekeeping rubric (updated 2026-07-03) that every future AWS-backed agent must pass locally before any live AWS tool access: 10 agent roles with specific eval tests, hallucination/legal risk ratings, and failure responses, plus universal pass criteria and failure consequences.
## Key metrics/methods (formulas where given, else "not specified")
No formulas. The rubric defines 10 agent eval rows with categorical ratings (high/medium/low, critical). Key methods: evidence-id citation for high-risk claims; Brier/ECE calibration reporting with sample window and baseline (Calibration auditor); uncertainty logging (SCOUT); falsification via measured-edge claims refused without replay (SCOUT).
## Data sources named
No external data sources named. Internal: evidence ids, source registry, source rights registry, legal markers.
## Findings (numbers and facts, not vibes)
- 10 agent roles enumerated: JARVIS/CIO, TAL (data reliability), SCOUT (model/picks), Legal/source-risk sentinel, Calibration auditor, Market forensic agent, Content/briefing agent, Partner-demo agent, Revenue/pricing agent, GitHub triage agent [OTHER]
- SCOUT eval: refuses measured-edge claims without replay; logs uncertainty; failure response = model promotion blocked [TRUST-SIGNAL]
- Calibration auditor eval: reports Brier/ECE only with sample window and baseline; failure = claim remains unsupported [TRUST-SIGNAL]
- 7 universal pass criteria: evidence ids for high-risk claims, refuses unsupported claims, respects source rights, stays within cost gates, records uncertainty and blockers, reproducible command references, never stores secrets in memory [TRUST-SIGNAL]
- Failure consequences: no live action, no publish, no deploy, return to deterministic workflow [OTHER]
- INFERENCE: the "Brier/ECE only with sample window and baseline" rule is directly portable to the GSE engine calibration gate.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The SCOUT + Calibration-auditor rows are a ready-made model-promotion gate for engine picks: no replay evidence → no promotion; calibration metrics require a declared window and baseline [TRUST-SIGNAL]
- No QB/coaching/OL/scheme content; governance-only [OTHER]
## Engine-actionable? (yes/no + one-line what)
yes — adopt the SCOUT/Calibration-auditor pass criteria verbatim as the engine's promotion gate (uncertainty logged, Brier/ECE with window+baseline, measured-edge claims refused without replay).
