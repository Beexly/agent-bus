# Settlement truth — Oct 3-6 cohort (Q1) — 2026-10-16 19:45 CDT

Host: Windows — live DB read.

Evidence (picks.published=true, generatedAt in [2026-10-03, 2026-10-07)):
- Total in cohort: 52 picks
- By settlement time: 8 settled Oct 3, 27 settled Oct 13, 17 settled Oct 16
- By result: WIN 29, LOSS 23 (0 PENDING, 0 VOID in cohort)
- Overall published PENDING: 96 (outside cohort: 20 from Oct 1, 49 from Oct 13, 27 from Oct 16)

The 35 long-unsettled picks referenced in the directive were the Oct 13 + Oct 16 settlement waves
that drained the backlog. Oldest-first not directly observable in picks table (no settlement_run
ordering), but settledAt progression (Oct 3 → Oct 13 → Oct 16) matches the intended drain.

No further H-R3 action needed — cohort is settled. Main head f44dc33 already contains the fix
(d57866871 merge) via ancestry.
