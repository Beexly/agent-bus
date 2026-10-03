# docs/ops/GATE_OPENING_RUNBOOK.md
## What it is (1-2 sentences)
The 2026-07-09 gate-opening runbook ("All Gates Open, Learning Daily"): the complete map of 10 platform gates (env var → effect → open-at-launch recommendation), the learning loop picture, the honest auto-opening timeline, and the one-sitting order of operations.
## Key metrics/methods (formulas where given, else "not specified")
- Gates: 1 PUBLIC_PICKS_ENABLED (YES — the product), 1b FORCE_NO_BET_IF_STALE (YES with #1), 2 CANONICAL_HISTORY_ENABLED (YES — learning ignition), 3 OUTCOME_LEARNING_ENABLED (YES — data collection), 4 PERFORMANCE_STATS_ENABLED (NO until eligibility GREEN×3 + calibration published), 5 DERIVED_MODEL_HISTORY_ENABLED (auto-later, ≥50 canonical settled games/sport), 6 FEATURED_PICK_PROMOTION_ENABLED (not yet), 7 CALIBRATION_ADJUSTMENTS_ENABLED (audited path only), 8 PUBLIC_BLOG_ENABLED (no — operator-reviewed doctrine), 9 CONFIDENCE_DISPLAY_MODE (keep safest), 10 DEMO_PICKS_ENABLED (OFF in production).
- Thresholds: ~100 settled picks (MIN_SETTLED_PICKS_FOR_LEARNING) unlocks public win rates; ~50 canonical settled games/sport for derived-model history; ≥500 settled + CLV ≥52.4% for ESTABLISHED pricing phase.
- Learning loop: ingest odds (cron 10:00 UTC + worker) → score → publish → settle (07:00 UTC) → canonical history (GATE 2) → eligible-for-learning snapshots (GATE 3) → calibration evidence daily → audited adjustments (GATE 7).
## Data sources named
None (infra env design).
## Findings (numbers and facts, not vibes)
- Every gate defaults to the safest option; opening is explicit env opt-in.
- Gates 2+3 are the ignition; everything downstream opens itself as data accrues — "the site earns its own gate openings from its own daily results."
- Forcing #5–#7 open on day one would feed the engine empty/uncalibrated history (score=0 factors) — noise dressed as learning.
- Launch set to paste into Vercel production env; infra prerequisites listed (DATABASE_URL, CRON_SECRET, OAuth, Stripe, PRICING_PHASE=FOUNDING).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The learning loop and data-earned gate openings are the engine's self-improvement design: OTHER (platform/learning infra). The CLV ≥52.4% ESTABLISHED threshold is a publish-trust milestone: TRUST-SIGNAL-adjacent.
## Engine-actionable? (yes/no + one-line what)
No — platform launch/ops runbook; the engine-relevant thresholds (100/500 settled, GREEN×3) are already the gating floors.
