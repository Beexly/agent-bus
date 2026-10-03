# docs/ops/MASTER_PROMPT_V2.md
## What it is (1-2 sentences)
The Galaxy Sports Edge "world-class completion" master prompt for the coding agent — hard laws, a D0–D11 contract matrix, and 10 specialist lanes, with live-class calibration numbers baked in as an immovable baseline.

## Key metrics/methods (formulas where given, else "not specified")
- Live class numbers baked in: Brier **0.275** / ECE **0.112** / Murphy RES **0.002** → eligibility **RED**. "Ranking/independents raise RES; maps do not invent it. Conformal coverage ≠ eligibility."
- Laws: gates OFF (`LIVE_BOARD` / `PUBLIC_PICKS` / `STATS_PUBLIC` / `PERFORMANCE_STATS`); maps OFF (`CALIBRATION_ADJUSTMENTS_ENABLED` / `AUTO_PUBLISH`) — offline only; free-path ABSENT-only; no invent odds/scores/ROI; no PROVEN copy while eligibility RED; `RANKING_PAUSE_APPLY` default OFF.
- D1 (Rank) done-when: RPCP on ops, bottleneck labeled, rankingP on board/picks/B2B. D2 (Calib) done-when: maps flags OFF, bakeoff docs only.
- Anti-patterns: rebuild free-spine/Stripe-sig/isotonic from scratch; treat conformal coverage as eligibility; flip STATS_PUBLIC without rights.
- Formula: not specified.

## Data sources named
- Ops SoT endpoint `GET /api/ops/public-surface-truth` → `productBoards`, `rankingPower`, `rankingPauseApply`; docs files referenced as do-not-redo (free-spine, Stripe sig, Orbit lab, isotonic).

## Findings (numbers and facts, not vibes)
- Live-class calibration baseline: Brier 0.275, ECE 0.112, Murphy resolution 0.002 → RED; maps cannot change eligibility.
- Completion protocol: each agent cycle must close evidence in ≥3 matrix rows; hard stop only when matrix exhausted or only `BLOCKED_FOUNDER` rows remain; founder clears only redeploy/env/Stripe rows.
- 10 specialist lanes (Rank, Calib, Spine, Content, B2B, Ops, DAG, Research, Money, Innovate), each with explicit "must not" constraints.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — calibration-state honesty doctrine (RES 0.002 → RED, no PROVEN claims while RED, conformal coverage ≠ eligibility) is the honest calibration-labeling policy the engine runs under.
- OTHER — the D0–D11 contract matrix and anti-pattern list encode the wire-first sequencing constraints (e.g., never rebuild isotonic from scratch).

## Engine-actionable? (yes/no + one-line what)
Yes — locks in the canonical gate posture: maps and publishing stay OFF/eligibility-RED until ranking independents raise resolution; the Brier/ECE/RES numbers are the reference baseline for calibration progress claims.
