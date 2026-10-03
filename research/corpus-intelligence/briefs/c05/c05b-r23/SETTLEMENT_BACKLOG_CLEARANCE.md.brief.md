# docs/ops/SETTLEMENT_BACKLOG_CLEARANCE.md
## What it is (1-2 sentences)
RCA (root-cause analysis) + STP (straight-through-processing) system, implemented on the free-path settlement runner (`runFreePathSettlement`), for draining the backlog of published picks stuck PENDING past grace after kickoff — the condition that trips `/api/health` settlement capability to CRITICAL.
## Key metrics/methods (formulas where given, else "not specified")
- RCA module: `apps/web/lib/settlement/root-cause-analysis.ts`. Techniques: classifier codes; 5 Whys (five-step causal chain per code, operator-facing); fishbone categories DATA_SOURCE · MATCHING · POLICY · PATH_CONFIG · TIMING · DURABILITY; Pareto (count/share/cumulative share, top cause attacked first); clearance waves A–D.
- Classifier codes → wave: `OVERDUE_NO_SCORE` / `NO_TRUSTED_FINAL` (no usable free final) → A (STP reprocess); `TEAM_ORIENT_FAIL` (final found, home orient failed) → B (matching/audit); `SINGLE_SOURCE_POLICY_HOLD` (settled/held under single-source audit) → B; `DISPUTED_SCORES` (multi-source conflict — never auto-force) → C (expert dispute); `PATH_MISCONFIG` (Odds key present blocks free path) → C; `WRITE_RACE_LOST` (idempotent write lost race) → A; `WITHIN_GRACE` / `NOT_COMMENCED` (not yet overdue) → D (wait). `settlePendingPicks` emits `PENDING.reason = NO_FINAL | ORIENT_FAIL` so RCA doesn't guess.
- STP module: `apps/web/lib/settlement/stp-clearance.ts`. Actions: AUTO_SETTLE (CONFIRMED final written this cycle); AUTO_SETTLE_AUDIT (SINGLE_SOURCE write, audit flag); REPROCESS (queue for next score cycle, overdue no final); EXCEPTION_QUEUE (human/evidence for DISPUTED, orient, path); WAIT (inside grace or pre-kickoff).
- Load priority: free runner sorts PENDING by `stpLoadPriority` — overdue first, so a 300s cron spends budget on the health band, not future games.
- Burn rate: `computeBurnRate({ cleared, newOverdueInflow, reopened })` — campaign is draining only when net burn > 0.
- Free-path response shape (additive): `{ path: "free", oddsApiRequired: false, picksSettled, picksHeld, sports, rca: SettlementRcaReport, stp: ClearanceWavePlan, burnRate: BurnRateReport | null }`; cron `/api/cron/settle-picks` free branch returns `free.rca` / `free.stp` post-deploy.
- Operator runbook (8 steps): confirm `path:"free"` (key absent, not invalid) → trigger free-spine-health + settle-picks → read `free.rca.operatorHeadline` and `free.rca.pareto[0]` → Wave A re-run until `OVERDUE_NO_SCORE` falls → Wave B alias/orient fixes → Wave C owner decision on DISPUTED_SCORES only with evidence → track burn via prior overdue or consecutive health probes → declare clear only when settlement-health is HEALTHY and net burn stayed positive.
## Data sources named
- Free finals from ESPN board (historical fix: free settle used undated ESPN "now" board so overdue never matched; fixed 2026-08-06 with date keys from pending commence times + abbr matching + SNAPSHOT_OUTCOME inline + drain; watch `picksSettled`, `clvRepair`, `snapshotRepair`, `scoreDates`).
- Health probes: `free-spine-health`, settle-picks cron response.
## Findings (numbers and facts, not vibes)
- Integrity companions (same PR family): placebo-leak harness fixed — bare CLV series rejected (was no-op + inverted); pairs-based residual association; production Phase-0 gate remains edge-lab `shuffledTimePlacebo`.
- `skipped-pg-integration-honesty` guard inventories AI claim + slate opener PG suites so skipped-green cannot silently delete money-path proofs.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Settlement RCA/STP clearance waves with net-burn > 0 drain criterion — TRUST-SIGNAL
- Placebo-leak harness fix: pairs-based residual association for CLV claims, Phase-0 gate `shuffledTimePlacebo` — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
no — ops runbook; but the CLV placebo-leak harness (pairs-based residual association) is calibration-validation method worth noting for any future CLV analysis.
