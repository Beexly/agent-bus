# docs/ops/INDEPENDENT_EXCHANGE_HARVEST.md
## What it is (1-2 sentences)
Model-update note taking the engine to MODEL_VERSION `v5.2.2` by adding Dixon–Coles soccer modeling and Kalshi match polarity to the independent-fair-value layer. Documents the Kalshi series-search path that fixes live MLB ticker misses, plus compliance holds around Polymarket.
## Key metrics/methods (formulas where given, else "not specified")
- Dixon–Coles: soccer τ(ρ) applied to the Poisson joint, emitted as source `dixon_coles`; **replaces** Poisson in the blend (no double-count).
- ClubElo: soccer Fixtures W/D/L → 2-way, else rating logistic; soccer sport keys only.
- ESPN FPI: unchanged logistic (exact name match). Poisson / Elo: unchanged from TeamGameLog.
- Kalshi series attach: drop candidates with |Δt| > 12h when occurrence known; soccer drops TIE legs and de-vigs the two team sides (same 2-way law as Poisson).
- `toIndependentFairValue`: both sides null if either side is unmapped or unquoted.
- ESPN short-alias map: CHW→CWS, GS→GSW, NY→NYK, SA→SAS, NO→NOP, UTAH→UTA, NJ→NJD; unknown 2–6 letter tokens → null (no invent).
- ISO commence → America/New_York date/time fragments (date-only stays calendar).
- Integrity floors (unchanged): Brier ≤ 0.22, ECE ≤ 0.05, Murphy R ≤ 0.05, n ≥ 100, GREEN×K.
## Data sources named
- Kalshi series search + league expand (NFL/NBA/MLB/NHL, WNBA/CFB/CBB, EPL/MLS/UCL/…) via `external-api.kalshi.com`, verified live 2026-08-09; series map from sports-skills `KALSHI_SERIES` (machina-sports)
- ClubElo fixtures; ESPN FPI; TeamGameLog
- Polymarket Gamma — internal estimator only, `INDEPENDENT_POLYMARKET=1` default OFF
## Findings (numbers and facts, not vibes)
- Constructed event tickers miss live MLB: constructed `KXMLBGAME-26AUG12MILSD` → empty, live time-encoded `KXMLBGAME-26AUG121610MILSD` → quoted. Fix path: constructed → if zero markets, cursor-page `series_ticker=KXMLBGAME` (status=open), match date fragment + `AWAYHOME` abbr pair, snapshot event.
- Polymarket compliance hold (`.claude/skills/polymarket-hold`): not a product surface, not a cleared source, not a cron; source tag `polymarket_gamma_internal` (never confusable with quote-plane clear); env default OFF; founder may enable for offline ranking research only.
- Soft-fail → no opinion; never invent tickers, ratings, or prices. Odds API key untouched; free-path ABSENT-only.
- Founder ops: re-run calibration-metrics; generate slate under v5.2.2; expect more `independentFairValues` hits on MLB/soccer when Kalshi/ClubElo up.
- Research lineage: `/workspace/research/sports-skills`, `/workspace/research/machina-predictions-templates` (Dixon–Coles τ(ρ) monte-carlo), `/workspace/research/polymarket-template`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: independent-market fair-value machinery (soccer + exchange data), no football-specific behavior signal.
- TRUST-SIGNAL: the floors (Brier/ECE/Murphy/n), soft-fail-no-opinion, and never-invent-tickers rules are hard integrity law on the exchange-data lane.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the Dixon–Coles τ(ρ) soccer-blend replacement and the Kalshi series-matching recipe (|Δt| ≤ 12h, null-on-unmapped, date-fragment matching) for exchange-data fair values.
