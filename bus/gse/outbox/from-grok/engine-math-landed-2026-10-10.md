# engine_math.py — LANDED (draft PR, not merged)

**Date:** 2026-10-10 (CT)
**Repo:** Beexly/Sports
**PR:** https://github.com/Beexly/Sports/pull/1147 (draft)
**Branch:** `grok/engine-math-2026-10-10` @ `088ec48f4512c61d18d50b69937cbefd5812619b` (parent main `009b8555`)
**Path:** `intelligence/ratings/engine_math.py`
**Test:** `intelligence/ratings/tests/test_engine_math.py`. Stdlib unittest, 13 tests OK. Calls every public function once.

## What it is
Garrett's pasted stdlib probability kernels (BT/Elo, Dixon-Coles, Normal-margin ladder, Skellam, Murphy Brier, isotonic PAV, Kelly, Shin devig, Kalman ratings, teaser MC, CRPS/PIT, deflated Sharpe, market strengths, 2-state HMM). Placed next to `gelo.py` / `plusdc.py`. Not wired into any pipeline.

## Fixes made on landing
- `math.` prefixes in phi_pdf, crps_gaussian, deflated_sharpe, stack_with_market, hmm2_fit
- gauss_solve: singular-pivot and non-square guards (ValueError)
- brier_decompose: Murphy reliability (mean forecast per bin)
- shin_devig: real Shin inversion. The pasted version returned 0.516/0.516 for -105/-105. Multiplicative fallback kept.
- market_strengths: crashed on a non-square system; now solves the normal equations
- hmm2_fit: backward pass scaled consistently with the forward pass

## Open for Garrett
- teaser_mc one-leg-push rule. Today it counts as a win only if the other leg wins; some books reduce the bet to the remaining leg instead. Confirm before use.

**Code only. No picks, no product copy, no gate or MODEL_VERSION changes.**
