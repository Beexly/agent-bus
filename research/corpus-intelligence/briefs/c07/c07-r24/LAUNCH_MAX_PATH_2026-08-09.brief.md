# ops/LAUNCH_MAX_PATH_2026-08-09.md
## What it is (1-2 sentences)
An integrity-safe 2026-08-09 launch plan that opens the product NOW using model-signal slates (independent models only) while keeping all track-record/calibration surfaces dark while eligibility is RED (Brier 0.275 / ECE 0.112 / RES 0.002).
## Key metrics/methods (formulas where given, else "not specified")
Calibration eligibility numbers at time of writing: Brier 0.275, ECE 0.112, RES 0.002 (eligibility RED). rankingP is the sort key; conformal ≠ eligibility.
## Data sources named
Kalshi, FPI, ClubElo, Poisson, Elo (model signals for the `generate-signal-slate` cron); THE_ODDS_API_KEY (optional paid market board); free tools (6), methodology, B2B experimental, contests, checkout surfaces remain open.
## Findings (numbers and facts, not vibes)
- As of 2026-08-09: PUBLIC_PICKS already ON (`canExposePublicPicks: true`); board surface = "signal" (automatic when odds stale).
- PERFORMANCE_STATS / maps / PROVEN held OFF while eligibility RED at Brier 0.275 / ECE 0.112 / RES 0.002 — flagged as correct behavior.
- Market odds last insert: Jul 25 — market board stays dark rather than invent.
- Finish-line unlock: `GET /api/cron/generate-signal-slate` every 2h (vercel.json) — independents-only model signals; the signal-board kill switch is slate freshness (published picks), not book odds.
- Do NOT flip while RED: PERFORMANCE_STATS / PERFORMANCE_STATS_ENABLED, CALIBRATION_ADJUSTMENTS_ENABLED / AUTO_PUBLISH, STATS_PUBLIC without a rights memo, RANKING_PAUSE_APPLY until RES is re-measured after independents settle.
- Integrity laws: no invented odds/ROI; no PROVEN copy.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] "Correct OFF while RED" posture: surfacing performance stats before calibration floors are met is treated as integrity violation, not a launch blocker.
- [OTHER] Ops-only launch sequencing; no QB/coaching/OL/scheme content.
## Engine-actionable? (yes — confirms engine input mix for launch signals: Kalshi/FPI/ClubElo/Poisson/Elo independents via 2h slate cron, rankingP as sort key, market odds optional/supplemental only)
