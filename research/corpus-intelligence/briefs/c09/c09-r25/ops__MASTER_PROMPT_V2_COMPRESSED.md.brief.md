# ops/MASTER_PROMPT_V2_COMPRESSED.md
## What it is (1-2 sentences)
Sub-4k compressed master prompt for a Beexly/Sports multi-domain completion agent: laws, product boards, D0–D11 domain matrix, 10 upgrades vs V1, priorities, anti-patterns, and the done condition.
## Key metrics/methods (formulas where given, else "not specified")
Calibration status constants recorded as laws: live Brier ≈ 0.275, ECE ≈ 0.112, RES ≈ 0.002 marked RED; `RANKING_PAUSE_APPLY` default OFF; conformal ≠ eligibility; Polymarket hold; Kalshi fuel only; `No invent/PROVEN while RED`.
## Data sources named
None (agent orchestration prompt, no data sources).
## Findings (numbers and facts, not vibes)
- Cycle cadence: ≥3 domains per cycle, stop only when matrix exhausted or only BLOCKED_FOUNDER.
- Domain matrix D0–D11: Deploy, Rank/RES, Calib offline, Spine, Content, B2B, Honesty, DASE, Research, Money, StatKing rights, Innovate offline.
- Priority order: branch world-class-completion → RPCP ops-only → Kalshi soft-fail → product boards + rankingP → pause apply OFF → WORKING_LOG → founder=redeploy/env/Stripe.
- Anti-list: rebuild free-spine/Stripe/isotonic; open maps/PROVEN; one ranking PR then stop; conformal as eligibility; market Helm/PickPilot as live.
- Live calibration state (RED): Brier ~0.275 / ECE ~0.112 / RES ~0.002 — RES near zero is the blocker for the PROVEN claim.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: agent orchestration prompt; the calibration triple (Brier/ECE/RES) is the only numeric engine state captured.
## Engine-actionable? (yes/no + one-line what)
No — coordination prompt, though it documents the live RED calibration state (Brier 0.275 / ECE 0.112 / RES 0.002) other agents track against.
