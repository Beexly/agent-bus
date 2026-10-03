# data/CARDS_CLOSING_LINE.md
## What it is (1-2 sentences)
Doctrine C6.2 closing-line forecaster v0 implementation deck: 9 implementation cards (CL1–CL9) specifying a model that predicts where a PROP line closes from opener + line path + time-to-kickoff + news flags, using only archived OddsLineSnapshot lines, evaluated walk-forward only and scored against realized closes.
## Key metrics/methods (formulas where given, else "not specified")
- De-vigging: Shin (not proportional) — proportional split explicitly rejected for props (favourite-longshot bias). `shinDevig(decimalOdds) → {probs, z} | null`.
- `trainCloseDistiller`: ridge regression on logit(qClose), mean-imputes missing keys; returns null when n < 10·k + 10; THROWS on feature keys matching /clos|final_line|settle/i.
- CLV referee: `evVsClose(p, qClose, y)`: fired side s, settle at fair close: ret = (y_s − q_s)/q_s; expectation 0 under the null that the close prices everything.
- Evaluation: `walkForwardSplits` — purged + embargoed expanding-window folds; default {folds: 4, minTrainFraction: 0.4, embargoMs: 6h}; the ONLY sanctioned splitter.
- Decision features (CL5): open_line, open_dec_over, line_now, dec_over_now, drift_line, vel_line_per_hr (OLS slope/hr), max_step_line, jump_flag (1 if max_step_line ≥ 1.0 — v0 news proxy), steps_n, ttk_hours, book_disp_line_now, consensus_qover_now (median), qover_now; all computed exclusively from rows with capturedAt ≤ decisionAt, decisionAt ≤ commenceTime − 3h.
- Fire rule: side edge ≥ tau (default 0.015); both sides firing is impossible for tau > 0 given overround ≥ 1.
- Opener attack map (CL8): per family, z = meanSignedQDrift/seSignedQDrift, minN=50, zCrit=2 ⇒ HIT_OPENER_OVER / HIT_OPENER_UNDER / WAIT_OR_FORECAST / INSUFFICIENT.
- Realized CLV: over = qOverClose − 1/decisionDecimalOver; under = (1 − qOverClose) − 1/decisionDecimalUnder.
- Readiness gate (CL1): READY iff propMarketsWithCloseBothSides ≥ 200 AND trajectoriesGe3 ≥ 400.
## Data sources named
OddsLineSnapshot (internal archive table, via the-odds-api / the-odds-api-eu); OpeningLine + Odds tables for featured markets (out of scope); news-flag survey pending (CL2; candidates: nflverse injury reports, Odds API last_update field, path-jump proxy).
## Findings (numbers and facts, not vibes)
- The forecaster is DATA-BLOCKED not code-blocked: archive flags default OFF; no artifact records how many rows/closes exist.
- Prop market decode: exactly one "|" with non-empty halves → family = oddsApiKey (left), playerSlug (right).
- Fail-closed design: 9 refuse types in CL4 (e.g., cycle_mismatch when sides differ > 20 min; rung_mismatch when lines differ); one-sided books never fabricate.
- MARKET_PROP firewall: forecaster outputs are TIMING/EXECUTION signals on the q-side only; any MARKET_PROP provenance on the p-side fails the build (PR #555 covariate registry).
- Real-data verdicts (attack-map, CLV grids) are CROWN: paid/contractual surfaces only, never committed or published.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: CLV-manufacturing lane converts coaching-tendency and market-behavior intel into timing signals; no direct QB/coach metrics here.
- OTHER: quantitative betting-engine architecture — closing-line value as the proven-milestone metric; leak-discipline (close is TARGET never feature); market-microstructure timing edges.
## Engine-actionable? (yes + what)
Yes — implement the CL5 feature list (opener + drift + velocity + jump_flag news proxy + book dispersion) as the timing-signal feature set; enforce the CL4 pairing rules (cycle/rung mismatch refusals) on any archive-derived q computation; adopt the walk-forward-only + CLV-referee evaluation convention for all market-facing models.
