# ops/ORBIT_MAP.md
## What it is (1-2 sentences)
"Orbit map" of what moves the needle across wave 1–4 of GSE operations: high-leverage rows (cost, revenue, coding velocity, agent ops/eval, inference, models/labels, distribution) paired with hard non-goals, plus the "already world-class" list and session-2 master extract commands.
## Key metrics/methods (formulas where given, else "not specified")
Named methods/modules, no formulas spelled out: export:settled-picks → timeHoldoutSplit → CIR (`centeredIsotonicCalibration` in `@sports/prediction-engine`) → selectedSliceEce → CLV → portfolio Kelly (`edge-lab/kelly.ts`); offline pipeline `npm run calibration:offline` = Shin → hold-out → CIR → paradox → Kelly deflator; agent-eval = 16 predicates at $0.
## Data sources named
None external. Free path law: free only when `THE_ODDS_API_KEY` is ABSENT (blank key).
## Findings (numbers and facts, not vibes)
- High-leverage: free embed `/embed/edge-index/[gameId]` SHIPPED wave6; Stripe `checkout.session.expired` handling; GEPA offline on skills; model-router PRIMARY/CHEAP env; offline calibration chain with Kelly deflator.
- Already world-class (do not rewrite): Stripe webhook retries + idempotency (`stripeEventId`), outbox lease + `claimVersion`, CheckoutAttempt create-idempotency, free-path law.
- Hard non-goals: GPU self-host, rebuilding CheckoutAttempt, multica/agent-OS vendors, custom gateway rewrite, foundation pretraining, Gamma re-enable without counsel.
- Session 2 master extract: `npm run dspy:gse`, `npm run calibration:offline`, `npm run session2:extract`, `npm run agent:eval`; integrity harnesses `npm run orbit:integrity[:full]`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: operations/economics layer — calibration pipeline (CIR, CLV, Kelly) supports the betting-accuracy program, not football behavior analysis.
## Engine-actionable? (yes/no + one-line what)
Yes (adjacent) — documents the shipped calibration pipeline path (CIR → selectedSliceEce → CLV → Kelly deflator) the engine's accuracy/proven-edge program runs on.
