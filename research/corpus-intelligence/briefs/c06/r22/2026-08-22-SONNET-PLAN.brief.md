# docs/ops/2026-08-22-SONNET-PLAN.md
## What it is (1-2 sentences)
Dated 2026-08-22 parallel build plan for the Sonnet lane: a work queue of 10 S-items (honesty/copy/product), 11 M-items (model/integrity/Phase 0–4), 2 L-items (distribution), plus hard do-not-touch zones, do-not-rebuild inventory, blocked items, and 10 founder decisions — all shipping inert/founder-gated.
## Key metrics/methods (formulas where given, else "not specified")
Fire/rank on calibrated edge e = p − q, never on confidence κ. Honest-ceiling constants: BLIND_ATS_CEILING = 0.56, BREAK_EVEN = 0.524, SELECTIVE_CLAIM_FLOOR = { minFiredBets: 200, requiresMultiSeasonWalkForward: true, requiresPositiveClv: true }. Tier TTLs: T1 = 15 min standard / 5 min game-day-injury; T2 live = 2 min; T3 = 2 hr. Closing-drift module refuses "admitted" below sustained OOS IC ≥ 0.05. Public-number law: coverage denominator + Wilson/Clopper-Pearson LCB + CLV backing + walk-forward provenance.
## Data sources named
Pinnacle close (line archive); MLB Stats API boxscore `officials`; NWS weather; The Odds API; nflverse-adjacent features (as-of store); Kalshi/ClubElo (Grok-owned, gated); sealed holdout via `scripts/guardrails/sealed-holdout-open-scan.mjs`.
## Findings (numbers and facts, not vibes)
- Baseline at plan time: 11,526 apps/web tests, 2,423 prediction-engine tests, tsc exit 0, CI green.
- Handoff ceiling doctrine: blind 52–56%; selective 57–60% only at ~8–15% coverage after 200+ fired walk-forward bets.
- No public number without all four legs (coverage denominator + Wilson/Clopper-Pearson LCB + CLV backing + walk-forward provenance); display-guard law.
- Model admission M1: Deflated Sharpe, White's Reality Check, Hansen SPA via stationary bootstrap; property test rejects 50 pure-noise candidates at α=0.05.
- Regime embargo M2: MLB shift ban 2023-03-30, NFL 2024 kickoff overhaul as declared boundaries.
- Kill list includes: heavy λ≈0.7–0.9 distillation default, vanilla BMA, OT mispricing-localization.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: honest ceiling, display guard, claim compiler, independent-reviewer sign-off gate — the full public-honesty stack.
- SCHEME: M4 umpire/ref EB tendencies (K%/BB%/run environment); M5 physics transforms (air density → carry, wind → kicking/passing).
- OTHER: build plan and operating doctrine.
## Engine-actionable? (yes/no + one-line what)
yes — encode the honest-ceiling constants and the four-leg public-number law as invariant checks on every published pick.
