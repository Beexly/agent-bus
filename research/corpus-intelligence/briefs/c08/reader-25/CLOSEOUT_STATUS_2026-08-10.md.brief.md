# docs/ops/CLOSEOUT_STATUS_2026-08-10.md
## What it is (1-2 sentences)
Autonomous close-out snapshot from 2026-08-10 (after engine v5.2.5): a live-vs-target status table, what was shipped that arc, what must stay off, and the highest-leverage remaining items.
## Key metrics/methods (formulas where given, else "not specified")
- Eligibility Brier RED ~0.25 (target ≤0.22); Eligibility ECE RED ~0.05–0.06 (target ≤0.05); Eligibility Murphy RES ~0.01 (was 0.002) — "real lift"; projected ranking RES path viable with pause + selective.
- Engineering: MLB StatsAPI standings + nflverse EPA → independent blend (v5.2.3); kill fake marketFairProb=0.5 (v5.2.4); sharpness-weighted blend + discrimination stretch; dual-objective selective (RES under Brier cap); live blend 0.7/0.3 (v5.2.5).
## Data sources named
ESPN free odds tertiary (Rundown 429 secondary); MLB StatsAPI standings; nflverse EPA; Stripe (secret + webhook + 6 price slots configured); waitlist public open.
## Findings (numbers and facts, not vibes)
- Independent coverage ~65% ML/SPREAD eligible.
- Odds API key ABSENT — denser books need `THE_ODDS_API_KEY` in production.
- Do NOT flip: PERFORMANCE_STATS, maps apply, AUTO_PUBLISH, RANKING_PAUSE_APPLY; "Do not invent PROVEN while floors RED."
- Levers: Brier ↓ on published set via softer stretch + more independent-priced settles under selective δ; RANKING_PAUSE_APPLY=true when founder ready (MLB ML/SPREAD dead — projected RES already clears 0.02); one real Checkout smoke (founder) still required.
- Honest posture: signal board live + money rails configured + integrity gates holding; not yet defensible PROVEN / full market board / closed revenue loop.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "Do not invent PROVEN while floors RED" + dead-group pause on MLB ML/SPREAD: TRUST-SIGNAL — dead segments get paused, not averaged away. nflverse EPA into the independent blend: OTHER (engine data plumbing snapshot).
## Engine-actionable? (yes/no + one-line what)
Yes — keep the dead-group pause (MLB ML/SPREAD) and the Brier↓ lever (more independent-priced settles under selective δ) as standing calibration tasks; and keep `THE_ODDS_API_KEY` production gap on the founder-tap list.
