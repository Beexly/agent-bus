# ops/LAUNCH_COMMAND_2026-09-03.md
## What it is (1-2 sentences)
Architect-written shared-state doc for the Friday 2026-09-05 NFL kickoff run: verified repo state, a landing queue of 50 unmerged audit-wave PRs (43 clean / 7 conflicted), a 24-finding refutation-hardened gap sweep (G1-G25), branch accounting for all 789 branches, and owner decisions. Every claim traces to observed output; unverified items are explicitly marked NOT VERIFIED.
## Key metrics/methods (formulas where given, else "not specified")
- Verified state: `main` = 0db5ef808 (PR #685 merge); CI SUCCESS (GitHub Actions run 33799645214); typecheck 0, lint 0, guardrails 26/26; production LIVE via Vercel dpl_GoYrLkrJ2vTC28dYaXbXhEni9PbJ; 789 remote branches, 640 diverging from main; ledger 135 rows.
- PR triage method: 50 audit-wave PRs dry-run merged against 0db5ef808 with `git merge-tree --write-tree`: 43 merge CLEAN, 7 CONFLICT, 0 absorbed. Textual clean ≠ correctness — every batch gated by full verify block.
- Gap sweep method: eight lanes (money, settlement, honesty, cron, abuse, UX, SEO, coverage); every finding handed to a separate agent instructed to REFUTE it; 24 survived, 2 refuted and excluded.
- Efficiency laws: ledger append-only (never rewrite table rows; two regex attempts max then append); decision budget 3 file reads / 2 command runs / one conclusion; two attempts per task then revert + record BLOCKED with exact error.
- Branch buckets: fully merged 140, ahead-but-empty-diff 8, divergent-with-open-PR 118, divergent-no-PR 522 (orphans by month: 2026-04: 3, 05: 21, 06: 49, 07: 204, 08: 245); largest orphans: claude/compassionate-ramanujan-qqt5nb (1009 files, 2026-06-19), safety/sports-wip-2026-06-04 (763), codex/sunday-frontier-maxforce-2026-07-05 (736).
- G25: dependency-audit guard computes `stale = ACCEPTED.filter(a => !offenders.some(o => o.name === a.package))` on a network `npm audit` call — a thin/degraded registry response makes every legitimate waiver look stale; CI run 33812513871 attempt 1 failed on a docs-only commit, re-run green with no code change; fix stays on the agent-denied path; lone failure of this kind = re-run, not code change.
## Data sources named
None as football feeds. Code locations for every finding (apps/web paths). Launch-critical surfaces named: /board, /picks, /performance, /clv, /api/performance, edge-index embed, podcast RSS, pricing JSON-LD, Studio drafts.
## Findings (numbers and facts, not vibes)
- G1 (BLOCKER, FIXED in PR #692): free-lane ESPN date targeting used UTC calendar day while ESPN buckets evening games under the prior day — every MLB West Coast night game and every NFL Sunday/Monday 8:20pm ET kickoff had its true scoreboard page skipped. Verified live, reproduced independently on MLB SF-at-ARI event 401816714.
- G8 (HIGH, honesty): the model's current ≥80-confidence band is anti-predictive — ~40% win rate while claiming ~86% — and the verdict is never rendered on any public page, only behind CRON_SECRET or the authenticated cockpit.
- G2 (BLOCKER): /performance win-rate numbers gated only by the raw env flag PERFORMANCE_STATS_ENABLED, not the eligibility/publish system — /performance keeps showing old win rates after ECE/MCE breach flips the durable eligibility system to RED.
- G3 (BLOCKER): runFreePathSettlement (the hourly settle-picks orchestrator, 570+ lines) is never actually executed by any test.
- G6 (HIGH): live hourly settlement caps at 1500 rows with NO orderBy, so its own overdue-first priority sort can only reorder an arbitrary DB sample — the truly oldest picks may never be fetched under real backlog.
- G5 (HIGH): a temporarily SUSPENDED game (will resume) is graded identically to postponed/cancelled and permanently VOIDed before completion.
- X-handle owner decision: site-wide social cards attribute every page to @GalaxySportsAI, contradicting positioning rule 8 (engine is deterministic statistical modeling, never framed as AI); three options offered; recommendation: rename before paid acquisition.
- G1 status: FIXED (PR #692, tripwire tests). Every other row OPEN and unclaimed.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: G8 (≥80-confidence band anti-predictive: ~40% realized vs ~86% claimed, hidden behind CRON_SECRET) and G2 (win-rate numbers bypassing the eligibility/publish system) are the highest-signal calibration-honesty findings in the corpus; G1's ESPN date-key fix preserves settlement truth for every night game.
- OTHER: branch accounting (522 orphans, largest 1009-file orphan) and the 43-clean/7-conflicted PR queue are operational debt data; efficiency laws (append-only ledger, decision budget) govern fleet workflow.
## Engine-actionable? (yes/no + one-line what)
Yes — surface the anti-predictive ≥80-confidence band (~40% realized vs ~86% claimed) as a P0 calibration-honesty fix and a hard gate on any published confidence ≥80 before new models add confidence claims.
