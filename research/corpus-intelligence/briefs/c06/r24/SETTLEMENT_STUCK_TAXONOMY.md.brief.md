# ops/SETTLEMENT_STUCK_TAXONOMY.md
## What it is (1-2 sentences)
The RCA playbook for overdue/unsettled picks: a gate sequence plus a coded taxonomy (data-source, matching, policy, timing) that diagnoses why picks fail to settle.
## Key metrics/methods (formulas where given, else "not specified")
- Health signal: `overduePending: 0` = healthy ("moat oxygen").
- Gate: if `deployment.sha` lags main HEAD, redeploy before any matching work.
- RCA codes: NO_TRUSTED_FINAL (A), OVERDUE_NO_SCORE (A), TEAM_ORIENT_FAIL (B), DISPUTED_SCORES (D, policy hold), SINGLE_SOURCE_POLICY_HOLD (D), WITHIN_GRACE (timing).
- Post-fix drill: redeploy → run settle-picks with CRON_SECRET → capture picksSettled, clvRepair, snapshotRepair, scoreDates, rca → Pareto the RCA codes.
## Data sources named
- Ops truth `settlement.overduePending` / `settlement.bySport` / `operatorNext`.
- Final-score sources for kickoff days; abbr/alias tables for team orientation (name+abbr on free path).
## Findings (numbers and facts, not vibes)
- Live state as of the 2026-08-06 re-probe: overduePending 0, settlement HEALTHY; the note is explicitly NOT a claim that 139 still burn.
- Date-targeted free settle + SNAPSHOT wire landed on main in #306.
- Pareto reading rules: NO_TRUSTED_FINAL/OVERDUE_NO_SCORE dominance → score-date coverage/source gaps; TEAM_ORIENT_FAIL dominance → abbr/alias tables; DISPUTED share → leave held (policy, never auto-void).
- Free-path enqueue kinds: CLV_GRADE (grade on settle + clvRepair drain), SNAPSHOT_OUTCOME (record on settle + snapshotRepair drain), TEAM_GAME_LOG (paid settleSport only — not free).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: settlement-health discipline, policy holds never auto-voided.
- OTHER: ingestion/settlement ops (CRON_SECRET runs, snapshot repair, CLV grading on settle).
## Engine-actionable? (yes/no + one-line what)
Yes — enforce the SHA-lag gate before any settlement RCA, and read the RCA Pareto before touching matching code.
