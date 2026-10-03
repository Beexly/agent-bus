# ops/LAUNCH_MAX_PATH_2026-08-09.md
## What it is (1-2 sentences)
Dated 2026-08-09 ops snapshot: a "max path" to opening the product that is integrity-safe. It records the live calibration state (eligibility RED: Brier 0.275 / ECE 0.112 / RES 0.002) and what surfaces may and may not be flipped on while RED.

## Key metrics/methods (formulas where given, else "not specified")
- Calibration eligibility snapshot: **Brier 0.275**, **ECE 0.112**, **RES 0.002** — state labeled RED.
- `canExposePublicPicks: true` — public picks already ON.
- Board surface: **signal** (auto when odds stale).
- Kill switch for the signal board = slate-freshness (published picks), not book odds.
- Not specified: how Brier/ECE/RES computed (see MURPHY_RES_AND_BRIER_MIN for Murphy breakdown).

## Data sources named
- Kalshi, FPI, ClubElo, Poisson, Elo (model-signal inputs for the `generate-signal-slate` cron).
- Market odds (The Odds API implied via THE_ODDS_API_KEY): last insert Jul 25 — market board stays dark without invention.
- `generate-signal-slate` cron (independents only) is the "finish-line unlock."

## Findings (numbers and facts, not vibes)
- On 2026-08-09: Brier 0.275 / ECE 0.112 / RES 0.002; eligibility RED.
- While RED, PERFORMANCE_STATS, maps, and PROVEN are OFF — "correct."
- Market odds last insert: Jul 25 (2026); market board remains dark until fresh odds exist, no invention.
- `generate-signal-slate` cron runs every 2h (vercel.json), producing model signals from Kalshi/FPI/ClubElo/Poisson/Elo — independents only.
- Free tools (6), methodology, B2B experimental, contests, and checkout remain open regardless.
- Free-spine health cron already scheduled — re-probes multi-source data.
- DO NOT flip while RED: PERFORMANCE_STATS / PERFORMANCE_STATS_ENABLED; CALIBRATION_ADJUSTMENTS_ENABLED / AUTO_PUBLISH; STATS_PUBLIC without a rights memo; RANKING_PAUSE_APPLY until RES is re-measured after independents settle.
- Optional founder env: THE_ODDS_API_KEY (market board / edge labels); CONTENT_FREE_LANE_ENABLED + Cerebras (podcast/newsletter free lane); AUTONOMY_EXECUTE=true (planner re-probes free-spine, no gate flips).
- Integrity rules: no invented odds/ROI; no "PROVEN" copy; rankingP = sort key only; Conformal ≠ eligibility (conformal prediction is not an eligibility gate).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Calibration eligibility snapshot (Brier 0.275 / ECE 0.112 / RES 0.002, RED on 2026-08-09) serves the **calibration/sizing** program: this is a historical baseline of model quality before the independents-only signal slate; any current Brier/ECE/RES numbers can be benchmarked against these (0.275 → ?). Note the Brier number (0.275) differs from MURPHY_RES_AND_BRIER_MIN's floor context (UNC≈0.25); UNCERTAIN whether this is the same sample or a different measurement — do not merge without checking.
- [TRUST-SIGNAL] The integrity doctrine — "no invented odds/ROI, no PROVEN copy, rankingP is a sort key, conformal ≠ eligibility" — serves the **trust-target intake** program: only published picks that survived a slate-freshness kill switch count as trustworthy records; anything PROVEN-labeled before GREEN×3 is untrustworthy.
- [OTHER] Signal sources named (Kalshi, FPI, ClubElo, Poisson, Elo) serve the **calibration/sizing** program: these are the named "independent" model inputs; any calibration of GSE signals against these five should weight them as the baseline ensemble.
- [COACHING] INFERENCE: the RES 0.002 reading (no ranking power) combined with an open public signal board means any 2026-08-09-era picks from the signal board are low-ranking-power data — treat them as near-coin-flip for coaching-tendency backtests.

## Engine-actionable? (yes/no + one-line what)
Yes — benchmark current Brier/ECE/RES against the 2026-08-09 RED baseline (0.275 / 0.112 / 0.002) and apply the integrity gate rules (no PROVEN copy, rankingP as sort key) to any calibration reporting.

**References named:** `vercel.json`, `generate-signal-slate` cron endpoint, free-spine health cron, Cerebras (free lane).
