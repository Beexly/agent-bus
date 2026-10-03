# docs/ops/SESSION_2_EXTRACT.md
## What it is (1-2 sentences)
The structured research-wave extract from "Session 2": a table-per-wave inventory (GEPA/DSPy, next-50 repos, calibration methodology, Kelly sizing with CIR, agent DX/money path) where every finding is marked SHIPPED, OPERATOR, or HARD NON-GOAL with its code path and gate — a shipped-work ledger, not new research.
## Key metrics/methods (formulas where given, else "not specified")
Kelly: fractional κ ≈ 0.25–0.30 (`KELLY_FRACTION=0.25`, edge-lab λ=0.3); full Kelly forbidden (ruin path, HARD NON-GOAL). Portfolio haircuts: James–Stein edge shrink (`jamesSteinShrink`), Ledoit–Wolf correlation haircut no Σ⁻¹ (`ledoitWolfShrinkCovariance`), CLV deflator self-disarm (~50) (`clvDeflator`), portfolio composition (`portfolioKellyStakes`), CIR→Kelly bridge (`sizeAfterCalibration`). Calibration: CenteredIsotonic preserves ranking vs PAVA plateaus (`centeredIsotonicCalibration`); time-ordered holdout only (`timeHoldoutSplit`, never random split); calibration paradox +EV slice (`selectedSliceEce`, report both ECE); Shin de-vig before fair p (`shinDevig`, offline + edge path); distinct-count diagnostic (`countDistinctPredictions`); offline pipeline `npm run calibration:offline`; never wire live without founder MODEL_VERSION gate (HARD NON-GOAL until gate). GEPA: reflection LM temperature 1.0, task LM temperature 0, default `auto="light"`, MIPROv2 not default (only after light plateaus), metric returns `Prediction(score, feedback)`, fixtures→examples train/val via `promote.mjs` → `data/examples.json`. Money: free path only when key ABSENT; Stripe expired + idempotency in webhook; outbox lease + claimVersion (never rebuild). Import surface: `centeredIsotonicCalibration, timeHoldoutSplit, selectedSliceEce, sizeAfterCalibration, portfolioKellyStakes, clvDeflator, shinDevig` from `@sports/prediction-engine`.
## Data sources named
Goldens (`goldens.json` cal-*), calibration goldens, settled picks export (`export:settled-picks`, needs DATABASE_URL).
## Findings (numbers and facts, not vibes)
- GEPA/DSPy skill optimization shipped to `scripts/dspy-gse` (gse_metric, gepa_config, promote.mjs, `.claude/skills/dspy-gepa/SKILL.md`); offline only. [OTHER]
- Next-50 table shipped as `docs/ops/ORBIT_NEXT_50.md`; promptfoo wired (`eval:prompts`); calibre CIR in repo; Multica/GPL agent OS and GPU foundation train HARD NON-GOAL (DEFER_90_DAYS.md). [OTHER]
- Kelly lane shipped: fractional Kelly, JS + LW shrinks, CLV deflator, portfolio composition — all gated behind export barrel; never report sizing as CLV (house style). [OTHER]
- Free-path law (only when key ABSENT) shipped into settle-picks cron; Stripe expired+idempotency in webhook; Polymarket feature work HARD NON-GOAL (counsel). [TRUST-SIGNAL]
- Smoke commands: `npm run dspy:gse`, `npm run calibration:offline`, `npm run agent:eval`, `npm run orbit:map`. [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- CIR/PAVA, time-ordered holdout, calibration paradox, Shin de-vig → SCHEME (calibration pipeline spec)
- Fractional Kelly κ=0.25–0.30, James-Stein/Ledoit-Wolf shrinks, CLV deflator → SCHEME (bankroll/sizing)
- Never-wire-live-without-gate law and no-ECE-as-proof → TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the pinned parameters into the wire-first plan (κ=0.25, JS + LW shrinks, CLV deflator self-disarm ~50, time-ordered holdout, Shin de-vig before fair p) and enforce the never-wire-live-without-founder-gate rule in code, not just docs.
