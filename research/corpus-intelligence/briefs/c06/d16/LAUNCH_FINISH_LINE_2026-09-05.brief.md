# ops/LAUNCH_FINISH_LINE_2026-09-05.md
## What it is (1-2 sentences)
Pre-NFL-kickoff (5 days out) operational audit of the Galaxy Sports Edge production system: a full observed-state table (production SHA `1a3f00d`, 21 fixes on branch `claude/sports-prediction-launch-rtiexc`), the v5.2.8 market-anchored calibration decision, and 60+ dispatchable work packages (WP-1..WP-29, FE, FAN, NFL, OPS, TCI, SEC). Score was 60/100 on 2026-09-06; blocks to 75/90/100 named.

## Key metrics/methods (formulas where given, else "not specified")
- Calibration floors: Brier <= 0.22, ECE <= 0.05 (10 equal-width bins), Murphy REL <= 0.05, n >= 100, three consecutive green calibration-metrics cron runs (every 6h). ECE computed in `apps/web/lib/calibration/ece.ts`.
- v5.2.8 decision: displayed probability = de-vigged market probability of the picked side (arithmetic on quoted prices, committed to immutable receipt), NOT confidence/100. Clearing evidence on closing-line corpus: Brier 0.2106 (n 2,750). Earlier observed calibration: Brier 0.2466, ECE 0.0573 (n 1,166) — RED.
- De-vig method: MEAN implied probability across books with proportional two-way de-vig (`scoring.ts`), NOT Shin-median.
- Murphy decomposition identity: Brier ~= REL - RES + UNC (gap = within-bin variance); code `probability-calibration.ts` `brierDecomposition`.
- Confidence tail: >= 80 score wins 43.7% while claiming 86.2% (n 167) — INVERTED; confidence AUC 0.4965 on 13,646 picks (PR #698) = no ranking power. Confidence never shown as probability; renders "NN/100".
- Measured market-anchored results (2026-09-05 19:05 UTC): pooled settled MONEYLINE with receipt: n 150, Brier 0.1692, ECE 0.0552, Murphy REL 0.0050; hit rate 0.7533 vs mean p 0.7958; total settled picks 1,894; 610 settled moneylines carry no receipt.
- Structural exclusions: three-way-sport (soccer) moneylines excluded (MLS n 35: hit 0.600 vs p 0.726, Brier 0.2505 — two-way moneyline on a three-way market drops draw mass, wrong by construction), non-moneyline markets excluded (spreads/totals reported per market). Non-soccer moneylines: n 115, Brier 0.1444, ECE 0.0440 (10 equal-width) / 0.0354 (5 equal-mass), Murphy REL 0.0044 — all floors met. MLB slice (n 100): hit 0.780 vs p 0.801, Brier 0.1558.
- First live market-anchored cron run (2026-09-06): n 223, Brier 0.1617, ECE 0.0553, MCE 0.2539, Murphy REL 0.0071; bootstrap 95% intervals (200 resamples) Brier [0.1395, 0.1880], ECE [0.0365, 0.1142]. Exclusions: `three_way_market` 120, `non_moneyline_market` 976, `no_market_probability` 486. pSources: `proof_receipt` 122, `market_p_from_odds_table` 101. By sport: MLB n 175 ECE 0.0509; NCAAF n 35 ECE 0.131; NFL n 13 ECE 0.3006. By version: v5.2.7 n 109 ECE 0.1478 (0.729 vs 0.706), v5.1.0 n 74 ECE 0.0729, v5.0.0 n 29 ECE 0.1531, v5.2.6 n 11 ECE 0.2043.
- WP-28 resolver: receipt-less settled moneylines get publish-time market p recomputed at read time from append-only odds table (latest snapshot per bookmaker at or before `generatedAt`, >= MIN_BOOKMAKERS real books, same mean-implied proportional de-vig; never `consensusNoVig`), zero writes; provenance `pSources`. C-110: 223 `insufficient_books` games resolved from one stored book (`market_p_single_book`), streak basis bumped to `market_anchored_v2`.
- Calibration excellence checklist (12 items): measured p = displayed p labelled with scope; one row per game (150 receipts = 150 distinct games); receipt-first enforcement; seeded bootstrap intervals; by-sport/by-version/by-market reporting; signal/stale/voided/pushed picks never enter sample; isotonic/Platt/temperature modules stay offline (`applyOff`) behind `CALIBRATION_ADJUSTMENTS_ENABLED`; drift marker on GREEN-to-RED streak reset.
- Settlement: 36 of 2,344 commenced picks PENDING past 6h (health 503); overdue cohorts: 10 MLB spreads on city-only game rows (SCORE_MISMATCH_CROSS_PATH) + 6 NCAAF on phantom fixtures (ESPN scoreboard 2026-09-05 listed 68 events, none of the three phantom games). Zero-sit policy (WP-29/C-106): PENDING >24h past commenceTime with NO_FINAL after every free source -> VOID via settlement outbox lane (`PickSettlementEvent` result VOID + RCA code); unstarted PENDING unrefreshed past `STALE_PENDING_PICK_MAX_AGE_DAYS` -> unpublished.
- ESPN client fix: `limit=1000` caused fallback to 25-event page; now `ESPN_SCOREBOARD_LIMIT = 300`, `groups=80,81` (FBS+FCS), `groups=50` (D-I hoops). Live probe: dates=20250906&limit=1000 -> 25 events, limit=300 -> 80.
- Matcher fix: 4-char containment minimum + exact 2-3 letter abbreviation matching + bipartite side matching + diacritics folded; NFL regression cases (Jets@Titans vs NE@SEA).
- Doubleheader tie window: 4h -> 90 min with kickoff-order tiebreak (`NEAREST_CANDIDATE_TIE_MS`).
- CLV: close-line value ledger exists; CLOSE stamps must come from free path too (NFL-05).
- The Odds API: 20K plan ($30/mo, started Aug 22 2026); 112 credits used 02:41-03:02 UTC (~320/hr -> exhaustion ~Sep 8); per-call costs from `x-requests-used` headers; C-109 governor: average burn <= 645/day; refresh-odds burn estimate ~34.6K credits/30d in Sep, ~51.8K in Oct.
- Free two-book board (WP-27, founder position: "we are the provider"): book 1 = ESPN inline odds via `GalaxySportsApiOddsProvider` (de-vig `fair_prob`, 8s timeouts); book 2 = Kalshi exchange quotes via PredExon catalog (free key held; PredExon free tier 1 rps, 1k req/month; `PREDEXON_INGEST` default OFF; Kalshi `list-markets` documented free/unlimited), NFL spread/total via series `KXNFLSPREAD`/`KXNFLTOTAL`; law: never invent the other side — both sides need live two-way quote or no book added. MIN_BOOKMAKERS = 2.
- ESPN public odds = one book (DraftKings via ESPN); TheRundown = wired fallback, 20k data-points/day, HTTP 429 every 15-min cycle, carries DK/FD/MGM/Pinnacle.

## Data sources named
The Odds API (paid), ESPN public scoreboard + inline odds, TheRundown (fallback), Kalshi via PredExon catalog, ESPN Power Index (FPI, rights-gated fail-closed), nflverse, Sleeper roster sync, Stripe, Sentry, Vercel runtime error groups/cron, production Neon Postgres (read-only SQL), Fanatics moneyline (C-41 lead, in MASTER-PLAN), appendix append-only 1.37M-row multi-book price-path archive (`odds_line_snapshots`).

## Findings (numbers and facts, not vibes)
1. Same fixture stored under 3 externalId namespaces (`odds-api` hash, `espn:mlb:`, `espn:baseball_mlb:`); MLB 268 fixtures with 2-3 rows, NCAAF 102, MLS 75, NFL 34; zero merged -> triple picks per game, inflated n. WP-3 unifies namespace for new rows; 500+ dup rows need owner-run merge.
2. Public moneyline board 30d: MLB 450 signal-slate rows (no book) vs 19 book-priced; NCAAF 46 signal rows written 15:54-16:05 on 2026-09-05 over the book slate. Signal slate must never overwrite a book-priced moneyline pick (fixed `31564d9`).
3. Only 28 of 738 settled moneyline picks carried a market fair (3.8%) — calibration was being measured on confidence, not market p.
4. ESPN public odds endpoint returns exactly one provider (verified live NFL/CFB/MLB/MLS) vs MIN_BOOKMAKERS = 2.
5. Paid settle cycles logged HTTP 402 (payment circuit open) since 2026-09-03; NFL 401 INVALID_KEY until 2026-09-04; but dashboard showed zero usage on both keys in September (INFERENCE in file: key stale/rotated, not unpaid) -> key rotated in Vercel 2026-09-06 02:37 UTC.
6. 583 Vercel "Task timed out after 120 seconds" since 2026-08-10 across board-fill, refresh-odds, generate-signal-slate, free-spine-health, autonomy-cycle, calibration-metrics; 7 OOM kills since 2026-06-17.
7. Three schedulers run settle-picks ~6x/hour (Vercel cron, external-cron.yml 3,573 runs, autonomy executor) — settlement fault was matching/data, not scheduling.
8. NCAAF slate: 252 games / 145 picks in 72h; MLB 41 games 0 ML (paused by founder); MLB/MLS TOTAL = 0 due to `scoreTotalPick` gates (fewer than 2 totals books, no two-sided prices, consensus < 0.55, confidence < 50) plus ESPN tertiary odds path emitting one bookmaker.
9. Signal-slate generation guard (C-111): refuse games absent from the day's free ESPN scoreboard; stale rows >30d re-confirm.
10. PR #707 merged `cff3e72d7`; one cycle later overdue 36->16; stale picks 18 (then 26 at 03:02).
11. v5.2.7 MLB slice (Aug 22-24, n 25): hit 0.600 vs p 0.806 — most recent stretch flagged for by-version/by-sport reporting after publish.
12. Test inventory: 174 money-path unit tests green; typecheck 0, lint 0, guardrails 26/26; full web suite 12,135 passed with 2 stale-source failures repaired; `packages/db` has 32 passing tests `npm test` never runs.
13. 30 open PRs triaged; #693 is a 13-commit bundle (47 of 52 added files absent from main, 11 conflicts) -> split by original PR.
14. Founder decisions delegated 2026-09-05/06: market-anchored v5.2.8 YES NOW; auto-publish receipt at streak 3; two Vercel flips (`PERFORMANCE_STATS_ENABLED=true`, `PRICING_PHASE=PROVEN`); no Slack/Sentry (alerting logs DELIVERED); checkout smoke SKIPPED; TheRundown at most a bridge, never upgrade The Odds API tier.
15. Scoring rule details: fixture generation guard rejects absent games; confidence badge NN/100; publicSurface truth surface carries `scoreBakeoffByMarket` per-market coverage; streak persists probability basis and resets on basis change.
16. Pricing phases: performanceStats/calibrationPublished gates per GATE_OPENING_RUNBOOK; PROVEN unlocks PROVEN pricing phase.
17. Fantasy suite facts: values are 2025 REG totals with no 2026 advance (FAN-01); pool 96 players (TOP_PER_POS = 24); "scheme fit" a constant 0.6 on live rows (FAN-12); GM Ledger fictional decisions dated Sep-Oct 2026 with letter grades (FAN-08); only backtested method `projectPlayerSeason` MAE vs carry-forward not wired (FAN-13).
18. Landing: ~10.5 MB first visit + 8s full-screen video interstitial (gse-reveal.mp4 4.16 MB); decision: montage OFF for organic first visits, keep `?intro=play`; hero under 250 KB.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Market-anchored display probability (de-vigged market p as the honest, calibrated number; confidence shown as score not probability): TRUST-SIGNAL — calibration floors, honesty-by-design public claim.
- Murhpy REL/Brier/ECE framework, bootstrap intervals, receipt-immutable probability basis, streak resets: TRUST-SIGNAL — calibration rigor as product differentiator (per MASTER-PLAN Track R).
- Zero-sit settlement policy (every pick graded/voided with RCA, nothing stale): TRUST-SIGNAL — record integrity.
- Signal-slate vs book-priced pick hierarchy (book picks never overwritten; book-less rows labelled "(model signal)" / "No book price attached" pill): TRUST-SIGNAL — provenance transparency.
- Calibration exclusions for three-way markets and non-moneyline markets: OTHER — scope discipline in measurement (relevant to calibration architecture).
- Fixture/matcher fixes (bipartite side matching, abbreviation-exact matching, generation guard against phantom games): OTHER — identity/matching layer integrity.
- Per-book price-quality archive 1.37M rows (from MASTER-PLAN cross-ref): OTHER — proprietary dataset.
- NFL WEEK 1: COACHING-relevant note — none in file; file is operations/engineering, no QB/OL/scheme/coaching content. SCHEME: Kalshi spread/total series KXNFLSPREAD/KXNFLTOTAL = market structure, tagged OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — engine's calibration layer should measure and display the de-vigged market probability of the picked side (mean-implied proportional two-way de-vig), never confidence-as-probability, with structural exclusions (three-way moneylines, non-moneyline markets pooled separately), one-row-per-game samples, and seeded bootstrap intervals; wire a zero-sit settlement policy with RCA codes.
