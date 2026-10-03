# wave2-group4 retry status — 2026-09-21

Attempted retry of wave2-group4.jsonl (10 papers: file_index 101–110).

**Result: ALL 10 BLOCKED — fetch infrastructure unavailable.**

- browser.open to ar5iv HTML failed on first attempt (tool_failure: browser-service could not fetch the requested page).
- Runtime directive on this failure: do NOT retry browser.open this turn, do NOT reproduce the fetch with exec/curl or invented endpoints.
- No other authorized route to full text exists this turn (PDF fetch via exec/curl is prohibited by the same directive).

Per ledger-template rule: papers are NOT given ledgers from abstracts. No ledgers were written.

| file_index | id | title | status |
|---|---|---|---|
| 101 | 1708.02715v1 | Order Flows and Limit Order Book Resiliency on the Meso-Scale | BLOCKED |
| 102 | 1604.05090v1 | Robust Draws in Balanced Knockout Tournaments | BLOCKED |
| 103 | 1601.04302v6 | Footballonomics: The Anatomy of American Football; Evidence from 7 years of NFL game data | BLOCKED |
| 104 | 1406.3402v2 | Relieving and Readjusting Pythagoras | BLOCKED |
| 105 | 1310.4461v2 | Scoring dynamics across professional team sports: tempo, balance and predictability | BLOCKED |
| 106 | 1201.0317v2 | Adjusted Plus-Minus for NHL Players using Ridge Regression with Goals, Shots, Fenwick, and Corsi | BLOCKED |
| 107 | 1011.1996v1 | Building a model for scoring 20 or more runs in a baseball game | BLOCKED |
| 108 | 0902.1360v1 | Hierarchical Bayesian Modeling of Hitting Performance in Baseball | BLOCKED |
| 109 | 0803.3697v1 | In-season prediction of batting averages: A field test of empirical Bayes and Bayes methodologies | BLOCKED |
| 110 | math/0509698v4 | A Derivation of the Pythagorean Won-Loss Formula in Baseball | BLOCKED |

**Recommendation:** re-assign this batch to a worker in a later turn when the fetch outage is resolved. The batch previously failed on a fetch outage too — this is a repeat infrastructure failure, not a paper-content issue.
