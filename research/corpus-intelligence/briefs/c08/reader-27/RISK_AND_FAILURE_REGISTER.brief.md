# docs/ops/archive/root-museum/RISK_AND_FAILURE_REGISTER.md
## What it is (1-2 sentences)
Consolidated risk/failure register for the GSE build session on branch `claude/trusting-ramanujan-mYK6E`: 13 risks across P0/P1/P2 with severity, status, evidence, and recommended action, plus open founder decisions and respected hard stops.
## Key metrics/methods (formulas where given, else "not specified")
- Confidence vs probability: confidence was treated as a probability in the public calibration report (wrong for spread/total priced ~50%); mitigated with a market-neutral `discrimination` metric (does win rate rise with confidence?); gated follow-up to persist a modeled win-probability distinct from the confidence UX score (MODEL_VERSION bump).
- Pricing facts: old $9.99/wk (~$43/mo) priced above proven Dimers ($24.99/mo) while pre-record; repriced to a Founding monthly+annual ladder.
- Single-provider consensus: `MIN_BOOKMAKERS=2` means two agreeing books read as 100% consensus; flagged as an open model risk with thin-market-floor penalty proposed.
## Data sources named
None beyond the repo itself; npm audit as the dependency-vulnerability source (13 vulnerabilities: 1 critical, 4 high; EOL deps eslint 8, glob 7, rimraf 3).
## Findings (numbers and facts, not vibes)
- P0 #1 (verified, fixed): away-favored SPREAD picks were mis-graded — line stored away-perspective, settlement read home-perspective, so a clear LOSS recorded as WIN; fixed in `scoring.ts` (`line: avgSpread`) + `pick-card.tsx` with regression test `spread-line-convention.test.ts`; owner follow-up: re-grade any away-favored spreads settled under old logic.
- P0 #2 (verified, fixed): `settle-picks` Vercel cron was a no-op; shared `settleSport()` extracted and cron now grades; residual: add "stale unsettled picks" alert.
- P1 #3 (verified): public calibration report treated confidence as probability; mitigated via discrimination metric; gated: separate modeled win probability.
- P1 #5: casino green/red on the trust surface (calibration panel) — tout aesthetic; re-skinned to brand tokens + non-color glyphs.
- P1 #8 (open, founder): no product analytics/event tracking and no email/lifecycle infra — the funnel is blind.
- P2 #10 (open, model): single odds provider, MIN_BOOKMAKERS=2 thin-market floor.
- Open decisions: brand GSE vs GSN (GSE ships); deploy status unconfirmed — two docs claim production live, GO_LIVE_RUNBOOK treats it as unstarted, treated as NOT live until verified; hard stop: production deploy needs approval.
- Hard stops respected: no destructive DB ops, no Stripe live mode/money movement, no production deploy.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: mis-graded-loss → win corruption of win rate/calibration/CLV fixed with regression test; confidence/probability split required before calibration claims; tout aesthetics banned from trust surfaces (brand tokens + non-color glyphs).
- OTHER: hard-stop discipline (no live Stripe, no production deploy without approval) as standing guardrail pattern.
## Engine-actionable? (yes/no + one-line what)
Yes — the away-spread sign-convention fix (`line: avgSpread` + `spread-line-convention.test.ts`) and the confidence-vs-probability split are the exact failure classes the engine must regression-test before any calibration/grading claim.
