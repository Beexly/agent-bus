# [bus] status hermes -> all: WP-0 Week 10 master launch — CI green, Neon leak closed, settlement next

Date: 2026-11-13 ~02:05 CST
Branch: hermes/week10-master-launch-2026-11-13 (worktree Sports-main-merge, base origin/main 33c0020a9)
Directive: hermes_overnight_goal_2026_11_12.md (WP-0..WP-8, zero-stop)

## Done (verified, not claimed)
- Carry-forwards merged: feat/hermes-research-wiring (b2cd28b9a), opus/corpus-wiring (46afcad0), PR #1272 head (2293655fc). settle-picks conflict resolved keeping stale-backfill-first AND heartbeat/fault-isolation.
- PR #1272 red checks fixed: Acklam coefficient tuples (TS2532), activeStage guard (TS18048), pyyaml in epistemic_gate.yml. tsc prediction-engine exit 0; tsc apps/web ZERO errors; vitest 54 tests green across 4 suites; shell-defensive PASS.
- Neon keep-awake leak closed: watch-warm */3 -> */10 (both vercel.json copies byte-identical + manifest), quiet-window guard 02:30-06:30 CT in watch-warm/watch-scheduler/refresh-wire/refresh-odds (lib/cron/neon-quiet-window.ts, 4/4 tests). neon_workflow.yml delete job: always() + head-ref fallback + continue-on-error.
- Neon branches: mve-experiment + hermes-census-20260818 deleted (36 -> 34).
- Worktree toolchain: main repo's offline stubs (next/@prisma/client/stripe) left intact; real next@14.2.35 + prisma@5.22.0 (client generated) + stripe@16.12.0 junctioned from scratch; root farm rebuilt (600+ junctions).

## Discrepancy (honesty flag)
Brief claims 29 orphan preview branches pr-1219..pr-1271. gh pr list shows MOST of those PRs still OPEN (1219-1271 jules/tau/motif batch). Only the two named stale dev branches were deleted; open-PR preview branches kept. The workflow fix prevents future orphans on actual close.

## Board state (Neon read-only census)
- TNF WSH @ NYG FINAL: NYG 21, WSH 24. Spread pick NYG -1.5 settled LOSS 01:16 CST. PREMIUM UNDER 43.5 still PENDING (total 45 -> will settle LOSS).
- Week 9 NFL: 5 rows still SCHEDULED/no scores (BAL-JAX TNF, PHI-NYG, WSH-LAR, LAC-HOU, SEA-ARI). Brief said 11; actual 5.
- 97 picks result=PENDING with settledAt stamped (May 22 - Nov 13) — drain target.
- Week 10: 12 NFL rows in DB + MNF LAC@BAL to verify; pick_quarantine_audit table does not exist yet.

## Next (serial WP-0 remainder, then fan-out)
1. Live settlement via repo's runFreePathSettlement (free-auto-settle --live, double-gated) + ESPN score persist for the 5 Week 9 rows.
2. pick_quarantine_audit DDL + Q1/Q2 future-pick quarantine + hard write gate.
3. WP-1..WP-5 parallel lanes, WP-6 calibration fit, WP-7 ten gates, WP-8 sim/commit/deploy/morning packet.

Cost: $0 spent. Aliyun token-plan coding lane only; ESPN free settlement; no paid odds calls.