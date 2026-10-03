# docs/ops/GROUND_TRUTH_AUDIT_2026-09-07.md
## What it is (1-2 sentences)
A read-only 2026-09-07 audit that re-derives 670 settled published picks against the ESPN public scoreboard (keyed by event id, never team-and-time) to find picks whose stored game row carries a score that is not the true final — counting wrong published results and measuring the auditability gap.
## Key metrics/methods (formulas where given, else "not specified")
- Coverage counts: 2,199 settled published non-VOID picks total; 774 on game rows with an ESPN event id; 670 inside the fetched ESPN windows.
- Unauditable: 1,529 of 2,199 (69.5%) cannot be checked — 1,425 have no ESPN event id at all (structural), 104 have event ids outside fetched windows (fetchable later, "an afternoon of fetching").
- Method: match by ESPN event id (duplicate-fixture defect corrupts team-and-time, so matching on it would hide the defect being measured); settlement-contradiction detector has a structural blind spot — a pick graded off a corrupt row agrees with that row, so only an outside source finds these.
- Game rows carrying a score ≠ ESPN final: MLB 169/491 (34.4%), MLS 16/62 (25.8%), NCAAF 2/51 (3.9%), NFL 0/66, total 187/670 (27.9%). Orientation control returned zero swapped home/away rows (comparison oriented correctly); coincidence control discarded as non-discriminating (118 of 138 CORRECT MLB rows also match some other real final).
- Moneyline wrong results (stored result wrong vs true final): MLB 62/438, MLS 6/62, NCAAF 0/49, NFL 0/41, total 68/590 (11.5%). All 68 sit on game rows whose score is wrong; zero wrong moneyline results found on true-final rows.
- 13 MLS moneylines were settled on matches that ended in a draw; production stores LOSS (`settlement.ts:96`) — the C-118 population.
- Spread/total line measurement across all 1,319 settled published picks: graded line differs from pick-stored line on 756 (57%); stored line not on the half-point ladder on 677 (51%); MLB totals alone 275 of 474 (58%). `line` is `avgTotal`/`avgSpread` — a cross-book average (e.g. 8.409090909090908 rendered "OVER 8.4"), not a quotable book number (C-119).
- Display-sign false alarm refuted: all 526/526 MLB, 112/112 NCAAF, 13/13 NFL settled spread selections show a minus sign, but `scoring.ts:588` renders from `chosenSpread` correctly and `scoring.ts:651` documents home-perspective storage vs chosen-team-perspective selection; the engine only ever takes the favourite on the run line — no display defect.
- ECE: published ECE 0.0524 is not trustworthy while rows graded against unobserved scores remain in its sample — C-114 records 63 moneyline rows graded before kickoff inside the ECE sample; the ECE floor remains the binding gate.
- Writer unidentified; `SCORE_MISMATCH_CROSS_PATH` refuses to overwrite an existing final with a different score, so a written wrong score is permanent; C-114 contains a pick settled 18 hours before first pitch that inherited the corrupt row — C-114 re-grading stays in scope.
## Data sources named
- ESPN public scoreboard (fetched by date, ground truth for finals).
- Neon MCP (read-only SELECT on production picks/game rows).
- Code references: `settlement.ts:96`, `scoring.ts:588`, `:651`, `:653`, `:856`; ledger entries C-114, C-118, C-119, C-143; LAUNCH_READINESS_2026-09-07.md §5 item 7; CodeRabbit review #719.
## Findings (numbers and facts, not vibes)
- 68 wrong published moneyline results out of 590 (11.5%), every one on a game row carrying a wrong score. (TRUST-SIGNAL)
- MLB concentration: 169 of the 187 affected rows (34.4% of checked MLB picks) — a prioritization signal, not proof of writer identity; NFL's 0 is 0 of 66 (consistent with a low rate, not proof of none); MLS 25.8%. (TRUST-SIGNAL)
- 69.5% of settled published picks went unchecked; only 64.8% are structurally unmeasurable (1,425 without event id); 104 are checkable today and simply were not fetched. (TRUST-SIGNAL)
- The earlier "117 contradictions" figure understated the population because picks graded off corrupt rows agree with those rows. (TRUST-SIGNAL)
- Spread/total line canonical-ness is an open founder decision (C-143): 57% graded-vs-stored line mismatch and 51% off-ladder lines make "the correct result" not well-defined for those markets. (TRUST-SIGNAL)
- The audit explicitly self-corrects three overreaches: (1) the MLB spread does not rule out a generic ingestion fault; (2) wrong-row association is not direction-establishing (mis-graded vs mis-referenced); (3) ECE is not unaffected — the published value is untrustworthy until C-114 is re-graded or excluded. (TRUST-SIGNAL)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Every wrong moneyline result sits on a wrong-score row; settlement-vs-row agreement is structurally blind — external ground-truth re-derivation is the only detector for this defect class — (TRUST-SIGNAL)
- Stable external identity (ESPN event id) on every game row is the prerequisite for an auditable track record: 1,425 rows lack it — (TRUST-SIGNAL)
- Published ECE 0.0524 rests on a contaminated sample (C-114); the ECE floor remains the binding gate — (TRUST-SIGNAL)
- No plus-sign spread selections + home-vs-chosen-team perspective split documents engine behavior (run-line picks are favourite-only) — (OTHER)
## Engine-actionable? (yes/no + one-line what)
yes — re-grade or exclude the C-114 rows, backfill ESPN event ids onto all game rows, and fix the avg-line/off-ladder settlement lines before any public track-record claim.
