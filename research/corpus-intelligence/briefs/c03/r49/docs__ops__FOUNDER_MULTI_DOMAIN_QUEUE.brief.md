# docs/ops/FOUNDER_MULTI_DOMAIN_QUEUE.md
## What it is (1-2 sentences)
A founder-facing v2 work queue ordering 8 domains top-to-bottom (Deploy → Settlement → Free-lane → Jynx credits → Contests/waitlist → Content → Public gates → StatKing), driven by the live `GET /api/ops/public-surface-truth` → `founderNextSteps[]` truth endpoint.
## Key metrics/methods (formulas where given, else "not specified")
Done-when criteria: deploy done when prod `deployment.sha` = main HEAD; settlement done when `overduePending: 0` HEALTHY; free-lane done when `creditStack.freeLaneConfigured: true`; Jynx credits done when `claudeProvider` auto/cloud + model maps configured and ledger ≠ cash. One-session founder block ≈20 min: Vercel redeploy production → env free-lane + CLAUDE_PROVIDER=auto + owned cloud maps → re-hit ops truth → confirm founderNextSteps shrinks. Always-on law: LIVE_BOARD off · STATS_PUBLIC off · no ROI theater · free settle · serverless honesty.
## Data sources named
`GET /api/ops/public-surface-truth` endpoint; `founder-next-steps.ts` (pure queue); `FRONTIER_SURFACE_SCORECARD.md` (probe table); Jynx docs (free + open-weight + clouds).
## Findings (numbers and facts, not vibes)
- 8 domains, ordered; founder must NOT flip LIVE_BOARD / PUBLIC_PICKS / STATS flags.
- Picks/stats stay dark until proof + rights; StatKing remains dark (research note).
- Settlement HEALTHY at `overduePending: 0` ("live now"); contests/waitlist already on postgres ("live now").
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "Picks/stats stay dark until proof + rights" + "no ROI theater": TRUST-SIGNAL (public surface gated on verifiable proof — mirrors the engine's honesty posture).
- No QB-BEHAVIOR, COACHING, OL, or SCHEME findings.
## Engine-actionable? (yes/no + one-line what)
no — Ops/launch sequencing only; the "proof before publish" gating is already GSE standing policy, not new engine content.
