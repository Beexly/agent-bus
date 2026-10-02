# ops/hermes/BUILD-QUEUE-2026-09-18-head-serve.md
## What it is (1-2 sentences)
A six-task builder queue for the certified "head serve" path: it defines the head artifact format, serve function, empty registry, display contract, and end-to-end no-op proof. It enforces the core safety line that no number may be shown to a customer as a probability unless it is the de-vigged market probability or the output of a certified head.
## Key metrics/methods (formulas where given, else "not specified")
not specified. Defines a stratum key (sport, market, side) with parentOf shrinkage hierarchy (sport-by-market → sport → global); the serve function must satisfy an identity property: with the market logit as fixed offset and all other coefficients zero, the head returns the market probability exactly at machine precision. Certification requires clearing four floors (values in packages/types/src/calibration-floors.ts); an interval wider than the artifact's maxIntervalWidth suppresses the row instead of rendering a wide number.
## Data sources named
packages/prediction-engine/src/certificate/stratum-coverage.ts (existing stratum key); apps/web/lib/ops/calibration-eligibility-durable.ts (durable store pattern); apps/web/lib/ops/calibration-eligibility.ts (floor values relocated from here); packages/types/src/stratum.ts and calibration-floors.ts (new modules); calibration report fields: n, Brier, debiased ECE, Murphy reliability, paired log-loss lower bound over market-only baseline.
## Findings (numbers and facts, not vibes)
- As of the queue date, no head exists: `packages/prediction-engine/src/heads/` is not a directory; no artifact format, serve function, or registry exists.
- The registry ships EMPTY; every stratum is uncertified, so the serve path returns nothing and existing display is untouched.
- Acceptance gates per task: npm run typecheck exit 0, npm run lint exit 0, vitest green, final npm run guardrails 26/26 with only pre-existing M-1 ledger entry.
- packages/* must never import apps/web; shared symbols cross @sports/types.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the certification gate (refuse rather than serve, conservative-end bound reads, probability never rendered without its interval, market probability never merged with head probability) is the engine's core trust architecture; the Loss Room and ledger surfaces depend on this honesty contract.
## Engine-actionable? (yes/no + one-line what)
yes — certifies where engine probability output is allowed to be served, so wire calibration to use stratum keys and the fixed-offset market-logit identity property before any publish path consumes head output.
