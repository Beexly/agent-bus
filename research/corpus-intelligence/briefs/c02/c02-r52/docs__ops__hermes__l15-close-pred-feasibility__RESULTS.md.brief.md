# docs/ops/hermes/l15-close-pred-feasibility/RESULTS.md
## What it is (1-2 sentences)
A pre-registered feasibility study testing whether MLB line movement toward close contains a tradable prediction signal, using 241 MLB games per market with Shin de-vigged odds and a ridge model evaluated with 5-fold GroupKFold by game. The verdict is explicit: kill MLB close-prediction, no tradable signal.

## Key metrics/methods (formulas where given, else "not specified")
- Shin de-vig from `packages/prediction-engine/src/edge-lab/devig.ts`; refuses decimal odds ≤ 1 or booksum < 1.
- Labels: 241 MLB games per market (clean close: ≥3 timestamps, ≥3 books, span ≥2h, last pre-start snapshot aged ≤15 min); one row per (game, market, entry window); entry = last snapshot in window; p = median per-book Shin probability; Δ = p_close − p_entry.
- Ridge: alpha = 1.0 (pre-registered, not tuned); 5-fold GroupKFold by game; features scaled on train fold only; primary decision market = totals (over-probability).
- Label counts: totals/spread/moneyline each 241 games → 947 total labels (windows 24–12h: 236; 12–6h: 234; 6–3h: 239; 3–1h: 238).

## Data sources named
- Neon branch `hermes-census-l15-20260819` (copy-on-write of gse-postgres/neondb), SELECT-only on the append-only `odds` table, queried 2026-08-19T17:54:49Z as `hermes_ro`.

## Findings (numbers and facts, not vibes)
- Verdict: **kill MLB close-prediction — no tradable signal** [OTHER: decision].
- Test 0 (mean Δ by window): +0.00126 / −0.00061 / −0.00082 / −0.00026, all p ≥ 0.258 — no systematic sign, no flip near start; Spearman(hours, Δ) r=0.046, n=947, p=0.154 [SCHEME].
- Test 1 (dispersion, IQR(book p) vs |Δ|): totals r=0.111 (p=6.0e-4); spread r=0.099; ML r=0.030 n.s. — weak [OTHER].
- Test 2 (deviation, mean−median vs Δ): totals r=0.402 (p=3.9e-38); spread r=0.284; ML r=0.038 n.s. — diagnosed as measurement-error artifact (the snapshot mean forecasts the next median better than the median does), not signal [TRUST-SIGNAL].
- Test 3 (momentum): totals r=−0.051 (p=0.159, n=776) — null [SCHEME].
- Test 4 (lead-lag, spread move at t vs total move at t+1h): r=0.015 (n=10369, p=0.129) — null; remaining-to-close pairing r=−0.098 (n=10765) [SCHEME].
- Test 5 (Ridge grouped-CV): totals Spearman r=0.490 (n=776, 216 games, p=3.5e-48, R²=0.258) — but a ridge on p_entry alone matches it (r=0.503, R²=0.284); the 0.49 is the corr(X, Y−X) identity (corr(p_entry, p_close)=0.40 ⇒ corr(p_entry, Δ)=−0.51), not forecast skill [TRUST-SIGNAL].
- Moneyline — the market where p actually varies (sd 6.5pp, corr(entry, close)=0.95) — grouped-CV r=0.091, R²=−0.002: a kill under the r≥0.15 rule [OTHER].
- Totals no-vig P(over) lives in a 3pp band around 50% (sd 1.35pp) — no variance to predict [SCHEME].
- Verdict explicitly: do not freeze features; do not fit a booster.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the corr(X, Y−X) identity teardown — a seemingly "promising" r=0.49 is diagnosed as statistical artifact, the file's core anti-false-positive lesson for the engine's signal validation.
- TRUST-SIGNAL: the mean-vs-median deviation finding (Test 2) is the same measurement-error story — models forecasting consensus-error components need this check.
- SCHEME: null momentum (Test 3) and null lead-lag (Test 4) findings argue against cross-market / cross-window momentum features for MLB totals pricing.
- OTHER: the "kill" verdict itself — MLB close-movement prediction is a dead lane; do not allocate engine wiring to it.

## Engine-actionable? (yes/no + one-line what)
Yes — two negatives to respect: (1) do not wire MLB close-prediction features into the engine (verdict: kill, moneyline R²=−0.002); (2) adopt the corr(X, Y−X) artifact check as a mandatory validation step before trusting any Δ-prediction model's headline correlation.
