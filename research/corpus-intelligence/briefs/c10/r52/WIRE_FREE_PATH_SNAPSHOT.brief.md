# docs/ops/WIRE_FREE_PATH_SNAPSHOT.md
## What it is (1-2 sentences)
Short status note recording that wiring free-path `SNAPSHOT_OUTCOME` into the settlement runner is complete ("Status: wired"). Describes the snapshot module's two exported functions and date-targeting behavior.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas. Module: `apps/web/lib/settlement/free-path-snapshot.ts` exporting `recordFreePathSnapshot` (runs after free-path settle, never blocks) and `drainPendingSnapshotOutcomes` (repairs PENDING SNAPSHOT_OUTCOME). Runner date-targets free scoreboards (`uniqueScoreboardDates` → `fetchScoresMultiSource({ espnDateKeys, isoDateKeys })`); undated ESPN boards are "now" only. Return fields: `clvRepair`, `snapshotRepair`, `scoreDates`.
## Data sources named
ESPN scoreboards (dated and undated).
## Findings (numbers and facts, not vibes)
- Free-path snapshot wiring is marked **wired** (date-target + snapshot PR).
- Date-targeting lets overdue picks match historical finals; repair pass drains PENDING SNAPSHOT_OUTCOME rows.
- No counts, tests, or dates given in the file.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — settlement/CLV plumbing note; track-record repair mechanics.
## Engine-actionable? (yes/no + one-line what)
No — status note on already-wired plumbing; nothing new to build.
