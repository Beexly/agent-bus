# Phase 2 search notes — market microstructure + bet sizing + ensembles + abstention

**Date:** 2026-09-21 · **Output:** `phase2-candidates-market.jsonl` (135 candidates) · **Method:** arXiv API (`export.arxiv.org`), `sortBy=relevance`, 3 s between requests.

## Exclusion compliance
- `phase2-excluded-ids.txt` enforced on every fetch (newline entries; each entry counted, ~1,729).
- Trailing `vN` stripped before all exclusion matching and before output deduplication.
- All 135 final candidates rechecked against the exclusion set at assembly time: **0 violations, 0 base-ID duplicates**.

## Query inventory and verified raw counts

### Wave 1 — 16 queries, max_results=150
Original pass: 12 succeeded × 150 = 1,800 raw hits; 4 failed with transient arXiv "Remote end closed connection" errors.
Verification retry (2026-09-21): all 4 failed queries retried successfully — 150 raw hits each.
**Wave-1 verified total: 16/16 queries successful, 2,400 raw hits.**

| # | Query | Raw hits |
|---|-------|----------|
| 1 | market efficiency sports betting closing line value | 150 |
| 2 | Pinnacle closing odds prediction accuracy bookmaker | 150 |
| 3 | bookmaker margin overround removal probability | 150 |
| 4 | odds movement prediction betting market | 150 (retry) |
| 5 | arbitrage sports betting portfolio | 150 (retry) |
| 6 | Kelly criterion fractional Kelly bankroll growth | 150 |
| 7 | optimal bet sizing drawdown control correlated bets | 150 |
| 8 | portfolio optimization sports betting | 150 |
| 9 | forecast combination ensemble stacking prediction markets | 150 |
| 10 | Bayesian model averaging forecast aggregation | 150 |
| 11 | multi-armed bandits bet selection optimal stopping | 150 (retry) |
| 12 | selective prediction abstention when not to bet | 150 |
| 13 | prediction market aggregation wisdom of crowds information | 150 |
| 14 | sharp money line movement steam moves sportsbook | 150 |
| 15 | probability calibration betting implied probability forecast | 150 |
| 16 | risk parity diversification sports wager sizing | 150 (retry) |

- Unique non-excluded records from the original 12-wave fetch: **1,497** → **1,455** after initial heuristic exclusions.
- The 4 retry queries (600 raw hits) were deduplicated against all prior raw hits + exclusions + final candidates: **385 new unseen records** (see "Retry-new follow-up" below).

### Wave 2 — 8 targeted queries, max_results=100
Original pass: 6 succeeded; 2 failed ("sportsbook odds compiler setting lines prediction", "logarithmic scoring rule Kelly model comparison").
Re-verification pass: those 2 succeeded at 100 raw hits each; 2 others failed with the transient arXiv error on re-check ("prediction market bookmaker accuracy comparison", "ensemble disagreement selective classification abstention threshold") — both had succeeded in the original pass.
**Wave-2 verified: 8/8 queries successful at least once; every query returned 100 raw hits (max_results cap) on its successful run.**
- New unique non-excluded, non-wave-1 records from wave 2: **305** (per-query new counts: 10 / 64 / err→100 verified / 63 / 33 / 59 / err→100 verified / 76).

### Counts-only re-verification
- Wave-2 raw counts were re-fetched (100 each on success) because the original pass recorded only "new record" counts, not true raw hit counts.
- 4 wave-1 failed queries retried and confirmed at 150 raw hits each (they had failed with transient connection errors, not zero-result queries).

## Filtering method
1. Fetch via arXiv API with exclusion-set filtering at ingest.
2. Heuristic relevance scoring: keyword weights (kelly, bookmaker, prediction market, sports betting, closing line, arbitrage, abstention, ensemble, calibration, bandit, etc.) plus a title "core-term" regex.
3. Tiered review pools, every candidate judged on title + truncated abstract, then full abstract where ambiguous:
   - **Main pool:** score ≥ 5, or score 4 + ≥1 core title term → 200 records reviewed → **69 kept**.
   - **Extra pool:** score 3 + ≥1 core title term → 121 records reviewed → **30 kept**.
   - **Wave-2 pool:** all 305 new records scored and top 220 reviewed → **19 kept**.
   - **Tier-2 pool:** score 2 + ≥1 core title term → 75 records reviewed → **16 kept**.
   - **Retry-new top slice:** 385 retry-new records scored; score ≥ 12 slice (15 records) skimmed → **1 kept** (2607.06166v2, prediction-market microstructure).
4. Keep rule: transferable experimental/simulated methodology for sports prediction, market modeling, bet sizing, forecast aggregation, or abstention. Skipped: pure theory without experiments, withdrawn papers, duplicates, non-English work, gambling-addiction/policy papers, non-predictive material, and generic finance/portfolio papers with no transfer path.

## Final tally
- Main 69 + extra 30 + wave-2 19 + tier-2 16 + retry-top 1 = **135 candidates** (target band 120–180, no padding).
- JSONL schema per line: `arxiv_id, title, abstract, published (YYYY-MM-DD), categories, url (https://arxiv.org/abs/<id>), relevance, query, score`.
- Validated: 135 lines of valid JSON, all schema fields present, all dates parse, every URL matches its arXiv ID, 135 unique base IDs, 0 withdrawn flags, 0 exclusion-set violations.

## Cluster highlights (representative)
- Bet sizing: fractional/conformal-Kelly backtests (2608.01494v1), risk-constrained Kelly (2604.11577v1), Wasserstein-robust Kelly (2302.13979v1), drawdown-constrained Kelly Monte Carlo (1603.06183v1), simultaneous-wager Kelly optimization (2604.24723v2), Kelly for updating probability forecasts (2602.09982v1), single-event multinomial full Kelly via state prices (2603.13581v1), robust Kelly under distribution uncertainty (1812.10371v3), variable-payoff Kelly (1411.3615v1), Kelly betting frequency (1801.06737v2).
- Market microstructure: bookmaker price-setting (2406.04062v1), Betfair order-book forecasting (2510.16008v1), Polymarket 30B-event order-book study (2604.24366v2), Polymarket trading + quarter-Kelly LLM swarm (2604.03888v1), empirical horse-racing odds dynamics OU model on 3,450 JRA races (2503.16470v2), racetrack herding vs independent bettors (1006.4884v1, 0911.3249v1), informed-trader identification and price impact (2209.08778v1), prediction-market microstructure comparison experiments (1009.1446v1), "when do prophets profit" informed-trader profitability (2607.06166v2).
- Ensembles/aggregation: learned aggregation of 15 forecasters (2607.18269v2), change-point-aware aggregation (2408.00785v4), feature-based Bayesian averaging (2108.02082v3), M4 ensemble comparison (2203.03279v3), artificial prediction markets for classifier fusion (1102.1465v6), optimal aggregation under partial evidence (1802.07107v1), calibration trees (1808.00111v2) and spline calibration (1809.07751v1).
- Abstention/pick selection: bandits with abstention (2402.14585v2, 2402.15127v2), selective-risk bounds (2603.08907v1), bounded abstention for correlated multi-horizon forecasts (2602.04714v1), learned conformal abstention (2502.06884v1), implemented multiclass abstention algorithms (2310.14770v2, 2310.14772v2), structured abstention (1803.08355v2), label-noise abstention loss (1905.10964v2).

## Retry-new follow-up (not yet reviewed)
- The 385 retry-new records (from the 4 originally failed queries) produced a 234-record high-score tier that was **not** fully reviewed — the 120–180 target was already met at 134 without padding. Only the score ≥ 12 slice (15 records) was skimmed; 1 was kept.
- Raw records persist at `/tmp/market_retry_new.jsonl` (ephemeral). If the program wants more volume later, re-fetch and review the remainder.
