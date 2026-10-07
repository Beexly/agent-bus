# Branch audit - Beexly/Sports - 2026-10-07
- From: hermes -> garrett (FYI) / motif (QC)
- Scope: all 742 remote branches audited for merge state (ancestry + GitHub compare patch-level)

## Actions taken
- DELETED 61 branches fully merged into `main` (ancestry-verified). Zero failures. Remote refs: 744 -> 683.
- KEPT 677 branches with real unmerged commits (GitHub compare ahead_by > 0). None were squash-merged ghosts.
- 4 error-or-protected rows in CSV (default-branch + compare-call errors, left untouched).

## Shape of the backlog (unmerged-keep)
- <7d old: 166 | 7-30d: 165 | >30d: 346
- Dominant prefixes: sheriff2/pr (61), copilot/fix (20), codex/api (12), claude/fix (9), grok/props (9), hermes/* (~25), mimo/* , backup/*

## Top unmerged by ahead-commits
| branch | ahead | age (d) |
|---|---|---|
| research/engine-plan-2026-10-03 | 521 | 0 |
| claude/compassionate-ramanujan-qqt5nb | 336 | 110 |
| claude/integration-train | 188 | 43 |
| codex/sunday-frontier-maxforce-2026-07-05 | 171 | 92 |
| stats/books-ordering-2026-09-18 | 164 | 18 |
| hermes/last-plan-2026-09-15 | 132 | 1 |
| mimo/docs-cleanup-calib-2026-09-21 | 131 | 16 |
| mimo/mimo-xfp-2026-09-18 | 130 | 19 |
| hermes/lane-bc-20260920 | 129 | 5 |
| codex/api-v1-disposable-rehearsal-packet | 122 | 95 |
| codex/api-v1-promotion-readiness-matrix | 121 | 95 |
| codex/api-v1-autonomous-polish-hardening | 120 | 95 |
| codex/api-v1-rd-polish-guards | 118 | 95 |
| codex/api-v1-disposable-db-rehearsal-plan | 117 | 95 |
| codex/api-v1-durable-fixture-report-archive | 116 | 95 |
| codex/api-v1-durable-fixture-simulator | 115 | 95 |
| codex/api-v1-dormant-durable-adapter-interface | 114 | 95 |
| codex/api-v1-durable-adapter-harness | 113 | 95 |
| claude/determined-keller-dUcdG | 112 | 131 |
| codex/api-v1-db-schema-proposal | 112 | 95 |
| codex/api-persistence-shadow-adapter | 111 | 95 |
| codex/api-consumer-registry-shadow | 110 | 95 |
| codex/evidence-api-v1-shadow-seam | 109 | 95 |
| claude/keen-ptolemy-t38f1g | 108 | 103 |
| codex/commercial-revenue-core | 108 | 95 |

## Recommendations
1. `research/engine-plan-2026-10-03` (521 ahead, fresh) - highest-value review target; looks like an active work line.
2. `codex/api-v1-*` series (~120 ahead each, 95d old) - stale mega-branches; likely superseded. Triage: salvage unique deltas or close.
3. `sheriff2/pr-*` (61) - batch; check if any still map to open work.
4. Merge Sheriff rule: anything unclaimed after triage gets a close-with-tag decision within 48h.
5. Full classified list: `branch-audit-2026-10-07.csv` (same directory).

## Validation commands
```
gh api repos/Beexly/Sports/branches --paginate --jq '.[].name' | wc -l   # expect 683
git ls-remote --heads https://github.com/Beexly/Sports.git | wc -l
```
