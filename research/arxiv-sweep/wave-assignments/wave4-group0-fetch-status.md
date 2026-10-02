# wave4-group0 retry log — 2026-09-21 ~10:00 CDT

RETRY DISPATCH failed on the SAME fetch outage that blocked the first attempt
(same service-level outage as the wave2-group2 and retry-blocked3 logs, same morning).

- Attempted: ar5iv HTML fetch via browser.open for 2409.01493 (file_index 0161) —
  two attempts, both returned `tool_failure`: "browser-service could not fetch the
  requested page", recovery: continue_without_tool.
- Runtime/developer instruction: the browser_open failure is terminal for the turn —
  do not call browser.open again, and do not reproduce the fetch via exec/curl or
  invented endpoints. The PDF route (https://arxiv.org/pdf/...) requires the same
  blocked tool, so per the wave2-group2 precedent it is not attempted separately
  (service-level outage, not per-URL). Remaining 9 papers not attempted for the same reason.
- No full text was read for ANY of the 10 papers. No ledgers written (per template
  rules, ledgers must come from full text, never from the abstract).
- All 10 papers recorded BLOCKED in ledger-tracker.jsonl with reason:
  "fetch-outage: browser fetch service returned tool_failure on ar5iv HTML route
  2026-09-21 ~10:00 CDT (2 attempts on 2409.01493, service-level failure, retries
  prohibited by runtime; PDF route requires same blocked tool). Papers not withdrawn —
  recommend requeue on service recovery, not reserve replacement."

## Per-paper blocked status

| file_index | arXiv ID | title | status |
|---|---|---|---|
| 0161 | 2409.01493v1 | Shrouded Sin Taxes | BLOCKED — fetch outage |
| 0162 | 2405.02412v1 | Deep Learning and Transfer Learning Architectures for English Premier League Player Performance Forecasting | BLOCKED — fetch outage |
| 0163 | 2403.16282v1 | The Evolution of Football Betting — A Machine Learning Approach to Match Outcome Forecasting and Bookmaker Odds Estimation | BLOCKED — fetch outage |
| 0164 | 2401.06086v1 | XGBoost Learning of Dynamic Wager Placement for In-Play Betting on an Agent-Based Model of a Sports Betting Exchange | BLOCKED — fetch outage |
| 0165 | 2309.12333v1 | Onchain Sports Betting using UBET Automated Market Maker | BLOCKED — fetch outage |
| 0166 | 2307.13807v1 | Sports Betting: an application of neural networks and modern portfolio theory to the English Premier League | BLOCKED — fetch outage |
| 0167 | 2306.01740v4 | Not feeling the buzz: Correction study of mispricing and inefficiency in online sportsbooks | BLOCKED — fetch outage |
| 0168 | 2303.06021v4 | Machine learning for sports betting: should model selection be based on accuracy or calibration? | BLOCKED — fetch outage |
| 0169 | 2112.13001v3 | Forecasting number of corner kicks taken in association football using compound Poisson distribution | BLOCKED — fetch outage |
| 0170 | 2108.02419v1 | Implementing the BBE Agent-Based Model of a Sports-Betting Exchange | BLOCKED — fetch outage |

## Recommendation

Re-dispatch this batch in a fresh turn once the browser fetch service recovers — none
of the 10 papers has actually failed on its merits (zero full-text reads), so the
"failed twice" bar for reserve replacement is not meaningfully met for papers
0162–0170 (only 0161 got two attempts, both against the service outage, not the URL).
Nothing here should be dropped to reserves yet. Note 0168 (accuracy vs calibration
model selection) is the most GSE-relevant of the ten: the existing-research map flags
calibration as a heavily covered lane but "model selection by accuracy vs calibration"
as an open decision question, and 0167 (sportsbook mispricing correction study)
directly touches the market-microstructure gap (#3 on the gap list).
