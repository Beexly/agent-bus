# ops/DEFER_90_DAYS.md
## What it is (1-2 sentences)
Hard non-goals doc: 11 explicitly forbidden items (multica platforms, GPU self-host, AgentGPT ports, Bedrock rewrite, own foundation training, Stripe idempotency rebuild, Gamma cron re-enable, LIVE_BOARD/public ROI, full Kelly κ=1, ungated CIR wiring, MIPROv2 as default optimizer) — not a backlog, forbidden unless founder+counsel reverse.
## Key metrics/methods (formulas where given, else "not specified")
- Full Kelly (κ=1) on model p forbidden: "Estimation error → ruin path."
- CIR into live scoring forbidden without gate: only under `CALIBRATION_ADJUSTMENTS_ENABLED`.
- Skill optimizer rule: GEPA `auto=light` first; MIPROv2 only after plateau.
## Data sources named
None named (refers to ORBIT_UNLOCK.md for what is shipped/operator-only).
## Findings (numbers and facts, not vibes)
- 11 hard non-goals, each with a stated reason (license/noise/cost-cosplay/compliance/ruin).
- Gamma cron re-enable: compliance hold until counsel registry.
- LIVE_BOARD / public ROI claims require founder YES + trust-gate only.
- MIPROv2 as default skill optimizer explicitly rejected in favor of GEPA auto=light.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: public ROI / verified claims gated behind founder YES + trust-gate — same trust posture as the pick pipeline.
- OTHER: sizing discipline (full Kelly = ruin path) — engine risk boundary.
## Engine-actionable? (yes/no + one-line what)
Yes — enforce κ≤0.30 and the `CALIBRATION_ADJUSTMENTS_ENABLED` gate as hard engine invariants so no agent can wire uncalibrated p-values into live sizing.
