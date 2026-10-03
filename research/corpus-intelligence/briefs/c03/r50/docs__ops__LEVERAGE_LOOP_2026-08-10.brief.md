# docs/ops/LEVERAGE_LOOP_2026-08-10.md
## What it is (1-2 sentences)
A 2026-08-10 calibration/integrity ops log: a "leverage loop" that shipped calibration and pause-group improvements (no gate flips) while recording the live Brier/ECE/resolution snapshot against the PROVEN floors.
## Key metrics/methods (formulas where given, else "not specified")
- Murphy decomposition: **Brier ≈ REL − RES + UNC**, with UNC ≈ 0.25.
- PROVEN floors: Brier ≤ 0.22, ECE ≤ 0.05, n ≥ 100, consecutiveGreen K = 3.
- Live snapshot: n = 339; Brier = **0.2467**; ECE = 0.0387; consecutiveGreen = 0; Murphy RES live ≈ **0.002** (need ~0.03–0.05); RPCP projected RES ≈ 0.019 — still short of floor.
- Selective δ: runtime default ON, δ ≈ 0.08 from plan; RPCP may recommend 0.15 for RES. Calibration-metrics backfill batch 150 → 250 per tick (unpriced-only work budget holds).
- Pause groups: proven-path `pauseGroups` = **Res≈0 ∪ significance-dead** (bug fix: previously used only Res≈0 holdout and was often empty while RPCP listed 4 significance-dead groups). Integrity: `RANKING_PAUSE_APPLY` default OFF — founder flips only when ready to re-measure RES on keep set.
- Coverage honesty: RPCP `independentCoverage` uses ML/SPREAD-eligible denominator (same as bake-off ≥40% gate); `independentCoverageVsAll` kept as diagnostic.
## Data sources named
Rundown (key present, free-tier HTTP 429); THE_ODDS_API_KEY (ABSENT); free Odds key; RPCP (ranking power / calibration pipeline) residuals; Vercel cron.
## Findings (numbers and facts, not vibes)
- Selective + pause **alone do not yet project Brier ≤ 0.22** on the historical sample; ops now expose `projectedBrier` / `brierGapToFloor`. [TRUST-SIGNAL]
- Path forward stated: more independent trueProb settles + pause dead groups when ready + keep selective + sport models when RES stays thin. No inventing PROVEN; GREEN only after live eligibility floors clear. [TRUST-SIGNAL]
- Market clock: last oddsInserted>0 was 2026-07-25 (stale ≫ 240m SLA); economy = daySpan=2, abort on 429, cascade-skip sports, longer inter-sport pause. [OTHER]
- REL low; the deficit is RES lift, not more maps/reliability tuning. [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
The Brier/ECE/resolution snapshot is TRUST-SIGNAL (defines what a publishable calibration bar looks like; "resolution, not reliability" is the honest reason picks aren't public yet). The market-clock/odds-429 material is OTHER (data-ops plumbing).
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the explicit floor targets (Brier ≤0.22, ECE ≤0.05, RES ≥~0.03–0.05) and the Murphy-diagnostic discipline: resolution lift is the metric that unlocks publishing, not more recalibration.
