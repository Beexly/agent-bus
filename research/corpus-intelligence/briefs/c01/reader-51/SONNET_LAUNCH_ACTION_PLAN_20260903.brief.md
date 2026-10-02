# ops/SONNET_LAUNCH_ACTION_PLAN_20260903.md
## What it is (1-2 sentences)
A handoff plan (2026-09-03) for a Claude Sonnet session taking over the Sports repo launch from the session that produced PR #685 — phased work items (Phase 0–6), known red CI items, bot-review threads, owner-only tasks, and launch-day watch criteria.

## Key metrics/methods (formulas where given, else "not specified")
- Calibration floors cited as already-settled gates: **Brier ≤ 0.22, ECE ≤ 0.05, beat-close ≥ 52.4%** (sample did not clear them per D2/D3).
- Confidence-tail sample noted: **152 picks, 61 wins, 40% (inverted, monitored, not shipped)**.
- `stalePendingPicks` must be **0 before kickoff** (was 21 on 2026-09-02).
- `capReached = stale.length > cap` fix (fetch `cap + 1` for the settle backfill cap of 200).
- No football/QB/coaching metrics or formulas in this file.

## Data sources named
- CI pipelines (GitHub Actions runs 33709213093, 33745525674, 33701803833, 33703406579), GitHub PRs #685/#684/#686; Vercel production; `/api/ops/public-surface-truth`, `/api/cron/settle-picks`, `/api/cron/free-spine-health`, `/api/health?strict=1`; The Odds API (noted dead since 2026-08-24).

## Findings (numbers and facts, not vibes)
- CI on 8c1f68f4a (run 33745525674) failed the Test job: ADR contract test broke on `docs/adr/008-runtime-error-monitoring.md` (title format `# ADR 008 — …`, field `**Date:**`), and the C-19 label rename `cerebras_free` → `content_free` missed `credit-stack-posture.test.ts` + three ops scripts (`verify-credit-stack.mjs`, `provision-status.mjs`, `registry.mjs`).
- Full apps/web suite: **11,904 passed** locally with only those 3 failures pre-fix; typecheck, lint, 26/26 guardrails green.
- Owner instructed: merge #685 once CI green (merge commit); #686 to be closed as superseded (duplicate index).
- Launch-day watch criteria: settle cron must read `path` ∈ {free, free+odds-api}, `starved` false, `staleBackfill.capReached` false; `marketCoverage.degraded` expected for CFB totals under zero-key slate; `confidenceTail.verdict` inverted.
- Do-not-open surfaces listed: PERFORMANCE_STATS, LIVE_BOARD, PUBLISH_LEDGER, CALIBRATION_ADJUSTMENTS.
- Phase 0: 12 open items (bot findings from Devin/cubic on calibration/confidence-tail, settle-backfill, watchdog workflow, agent-bash-guard).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) Launch-gate health-check pattern (stale-data kill switch PASS requirement) — relevant to engine trust-gating, not football intelligence. No QB/coaching/OL/scheme/trust content.

## Engine-actionable? (yes/no + one-line what)
No — pure repo-ops/CI handoff doc; no football metrics, methods, or data worth ingesting.
