# docs/ops/archive/dated/PRODUCT_CASCADE_MAP.md
## What it is (1-2 sentences)
The product architecture map for Galaxy Sports Edge's "honesty engine" (claim → honesty engine → decision surface → proof surface → entitlement → checkout → retention), including the full Phase C selective-gate measurement report against a real Neon database with named exclusion reasons and two confirmed/fixed code defects.

## Key metrics/methods (formulas where given, else "not specified")
- Selective gate (`applySelectiveGate`): on every `FiredDecision` emits `width`, `multiprobSource`, `taxonomyCategory`; reason codes `FIRE`, `NO_BET_LCB`, `NO_BET_WIDTH`, `INSUFFICIENT_CALIBRATION`, `NOT_EVALUATED_MISSING_INPUTS`. Fire ⇔ interval LCB(e) > τ (probabilities are intervals via `calibration/ivap.ts`, `calibration/cvap.ts`, `MultiprobSource`; Venn-Abers per-stratum with a 100-row calibration floor `MIN_STRATUM_CALIBRATION`).
- Phase C real measurement (Neon, baseline `49010d8a`, floor=100, 2026-07-27T16:18:25Z): settled_raw_win_loss=888; settled_calibration_admitted=359; pending_candidates_raw=283; pending_candidates_evaluable=0; strata_at_or_above_floor=1; floor strata with a current candidate=0. Only qualifying stratum: `MLB|SPREAD|v5.1.0` (180 admitted); next: `MLB|MONEYLINE|v5.1.0` (74), `MLB|SPREAD|v5.0.0` (57), `MLB|MONEYLINE|v5.0.0` (28), `MLS|SPREAD|v5.1.0` (20).
- Exclusion reason pairs over 283 pending candidates (non-exclusive): q 719 · fresh odds 283 · provenance 254 · placeable window 139 · matching handicap 107 · undescribable 0.
- Binding decision recorded: do NOT set `LIVE_BOARD_GATE_SLATE=1` — every live row would render `INSUFFICIENT_CALIBRATION`/`NOT_EVALUATED_MISSING_INPUTS`.
- **Defect 1 (confirmed, fixed): handicap mismatch.** `Pick.line` was a mean spread across MIN_BOOKMAKERS+ books compared against one book's spot quote with strict equality (spreads quantized to 0.5/1.0) — near-universal false mismatch. Fix: `consensusSpreadForGame` + compare against `clvLockLine` via `selectGradingLine` (the same helper `settlement.ts` uses; `Pick.line` is rewritten every refresh cycle while PENDING, so the lock line is the immutable target). Comparisons use `1e-6`-scale epsilon for FP noise only.
- **Defect 2 (confirmed, fixed): decoupled pricing.** Handicap validated against consensus while `q` de-vigged off a different book's spread prices (pricing one bet's probability while evaluating a different bet). Fix: average the SAME batch's home/away spread prices alongside the spread (`averageAmericanPrices`, in probability space — American odds discontinuous across ±100) and override `q`'s price source with the coupled consensus.
- **De-vig rule:** `pricesForPickType` selects the price pair belonging to the pick's own market — moneyline prices in `homePrice`/`awayPrice`, spread prices in `homeSpreadPrice`/`awaySpreadPrice`; never carry a three-way draw price onto a two-way handicap. Market mapping `MARKET_FOR_PICK_TYPE`: SPREAD→SPREADS, MONEYLINE→H2H, TOTAL→TOTALS.
- Fresh-odds finding: 283/283 pending rows failed freshness against a 6-hour budget despite a 30-minute ingestion cadence (12x margin) — diagnosed as an ops issue (GitHub Actions cron auto-disabled on inactive repos, or `THE_ODDS_API_KEY` invalid/exhausted), founder-only.
- Provenance finding: 254/888 (~29%) settled rows fail-closed by `OUTCOME_LEARNING_ENABLED` defaulting off (read live at settlement, never backfilled) — a structural chicken-and-egg gap; both `isBootstrap` and `eligibleForLearning` written unconditionally on settlement success.
- Learning-eligibility rule (fail-closed): `isLearningAdmissible` admits a settled pick only when `isBootstrap === false` AND `eligibleForLearning === true`; `undefined` is inadmissible. Model-version strata: `${sport}|${pickType}|${modelVersion}` when version present, else two-part key; empty-string versions rejected by `requireModelVersion` to stop blank-version rows pooling into one stratum.
- PUSH/VOID/PENDING excluded from calibration (never coerced); a push is not a loss. `genuinely de-vigged q` computed from both sides of the `Odds` table.
- Entitlement split (server-side via `apps/web/lib/entitlements.ts`, never client-side): the existence of a No-Bet is FREE; `canSeeMultiprob`, `canSeeNoBetDetail`, `canSeeGlassLedger`, `canSeeRecompute` are PRO/ELITE only. Pitch doctrine: "the refusal is free, the reasoning is paid."

## Data sources named
- Neon Postgres (production database, `ep-summer-moon-apv5ccys-pooler`); `Odds` table (append-only, one row per game/bookmaker/market); `Pick`/`PickSignalSnapshot`; `gate_decisions` table; The Odds API (odds ingestion, `THE_ODDS_API_KEY`); GitHub Actions cron → `/api/cron/refresh-odds`; `workers/data-refresh` 30-minute loop.

## Findings (numbers and facts, not vibes)
- Of 888 settled WIN/LOSS rows only 359 (~40%) are calibration-admissible; zero pending candidates are currently evaluable — the gate is data-starved, not broken.
- Ingestion staleness is 100% of pending rows (283/283) — real ops issue, not a code bug.
- Two real code bugs (handicap mismatch, decoupled pricing) produced confident wrong answers rather than errors; both fixed and tested.
- Open gaps: (a) ledger Pedersen/chain encoding does not record multiprob `width`/`multiprobSource`/`taxonomyCategory` — honesty metadata is in-memory only (BLOCKED: `FiredDecision` has exactly one consumer, a research script; `appendPick`/`appendSettlement` have zero production callers; domain mismatch — `LedgerPickEntry` is a published pick, `FiredDecision` is a backtest row); (b) live slate not wired into `/board`; (c) No-Bet reasoning rendering on decision cards was closed; checkout copy reordered to lead with No-Bet protection.
- Additive optional fields ARE hash-safe for future ledger persistence: `canonicalJson` sorts present keys; trap — it throws on `undefined`, so the field must be omitted entirely, never assigned `undefined`.
- The flag `LIVE_BOARD_GATE_SLATE=1` is off by construction: `apps/web/__tests__/board-gate-flag-policy.test.ts` fails the build if an enabling value appears in any deployable config.
- Phase D fail-closed modes: illustrative default; live-read errors and loader-null both fall back to illustrative with stated reasons; a live slate with candidates renders "live" even if all eight were refused (the refusal IS the claim).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] The selective gate (LCB(e) > τ, Venn-Abers, 100-row stratum floor, INSUFFICIENT_CALIBRATION vs NO_BET distinction) is the engine's honesty backbone — refusal must never be fabricated from missing data.
- [TRUST-SIGNAL] "The refusal is free, the reasoning is paid" entitlement split + No-Bet record as compounding trust asset.
- [OTHER] Per-market de-vig discipline (`pricesForPickType`), consensus-spread handicap matching against `clvLockLine`, American-odds discontinuity handling — pricing mechanics the engine must replicate.
- [OTHER] Fail-closed learning eligibility (bootstrap/snapshot gating) and empty-model-version pooling trap — calibration-data integrity rules.

## Engine-actionable? (yes/no + one-line what)
Yes — port the selective-gate discipline directly: per-market de-vig with coupled price/spread consensus, handicap-vs-`clvLockLine` matching with 1e-6 epsilon, fail-closed stratum floor (100 settled, version-stratified rows), and the FIRE / NO_BET_LCB / NO_BET_WIDTH / INSUFFICIENT_CALIBRATION / NOT_EVALUATED reason taxonomy so refusals are never fabricated from missing data.
