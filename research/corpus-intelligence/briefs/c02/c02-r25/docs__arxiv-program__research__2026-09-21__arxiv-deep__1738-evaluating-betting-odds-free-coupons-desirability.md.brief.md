# docs/arxiv-program/research/2026-09-21/arxiv-deep/1738-evaluating-betting-odds-free-coupons-desirability.md

## What it is (1-2 sentences)
A deep-read note on Nakharutai, Caiado & Troffaes (2019, arXiv:1901.03645, Durham), which models bookmaker odds and free-coupon promos as desirable gambles in an imprecise-probability framework, deriving an exact LP sure-loss check (Σ b_i/(a_i+b_i) ≥ 1) and a complementary-slackness method to extract the optimal exploiting bet combination — with a worked UK football example showing a £5 free coupon creates a sure gain. Ledger verdict: **ADAPT** — implement the LP check directly on The Odds API multi-book snapshots as a cross-book arb scanner and promo evaluator.

## Key metrics/methods (formulas where given, else "not specified")
- Gamble: g_i(ω) = −a_i if ω = ω_i, else b_i (Eq. 26) for fractional odds a_i/b_i.
- Desirability ⟺ Σ_ω g_i(ω)p(ω) ≥ 0 ⟺ b_i/(a_i+b_i) ≥ p(ω_i) (Eqs. 27–30); upper probability mass p̄(ω_i) ≔ b_i/(a_i+b_i) (Eq. 31).
- Sure-loss check (Theorems 1, 5, 6): a bookmaker's odds avoid sure loss ⟺ Σ_i b_i/(a_i+b_i) ≥ 1; multi-book version uses per-outcome maximal odds.
- Free-coupon gamble: coupon value b_i on outcome ω_j ≠ ω_i; bookmaker loss a_j·b_i/b_j if ω_j occurs (Tables 2–3); sure loss checked via natural extension (Choquet integral or LP); optimal exploiting portfolio extracted via complementary slackness on the LP dual.

## Data sources named
No large dataset — worked examples on actual market odds: single bookmaker's real football odds (W 3/4, D 13/5, L 16/5); multi-bookmaker odds; "Forest" bookmaker £5 free-coupon offer; Euro 2016 outright example (France 9/2). No statistical validation or backtest (decision procedure, not predictor).

## Findings (numbers and facts, not vibes)
- [OTHER] Worked example 1: 4/(3+4) + 5/(13+5) + 5/(16+5) = 1.087 ≥ 1 → the bookmaker's odds avoid sure loss; customer cannot force a sure gain on odds alone.
- [OTHER] Worked example 2 (multi-book): avoids sure loss; optimal customer strategy = take maximal odds on each outcome (known best-odds-per-outcome rule re-derived).
- [OTHER] Examples 3–4 (Forest): £5 qualifying bet at 13/5 on D + £5 free coupon on a single other outcome → sure gain for the customer; payoff table shows bookmaker losses up to £16 on the coupon leg.
- [OTHER] The desirability/LP machinery is heavier than needed for the plain-odds case (Σ implied ≥ 1 is textbook); its value-add is the coupon/terms extension.
- [OTHER] Limitations in-file: single-customer no-cooperation assumption; UK fractional fixed-odds framing; no account-limitation/arb-ban modeling; examples are illustrative, not a market-wide scan.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: an exact multi-book sure-loss LP check (variables = stakes per outcome per book; constraints = non-negative guaranteed profit) generalizes the naive Σ 1/odds < 1 arb test to books with different rules/terms — run on each The Odds API snapshot.
- OTHER: promo terms (bonus bets, profit boosts, "bet X get Y") encoded as coupon gambles → natural-extension LP computes the maximum guaranteed extraction dollar value per promo, updated as odds move.
- TRUST-SIGNAL: the note's correctness-first gate — the LP scanner must reproduce every naive-arb detection before its extra detections count — is the right validation discipline for a money-touching scanner.
- OTHER (improvement experiment): INFERENCE-adjacent but stated in-file — extend the LP to correlated SGP outcome lattices (the paper assumes mutually exclusive single-market outcomes); hypothesis that boosted SGP menus fail sure loss more often.

## Engine-actionable? (yes/no + one-line what)
Yes — build the cross-book arb scanner (LP via scipy on The Odds API snapshots) plus a promo-term extraction evaluator, with the note's gate: LP must reproduce all naive-arb detections and the promo evaluator must assign positive extraction value to ≥ 3 real promos.
