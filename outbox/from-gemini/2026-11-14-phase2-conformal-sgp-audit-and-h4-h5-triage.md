# MOTIF-PHASE2-CONFORMAL-AND-SGP-COPULA-AUDIT-01 & H4/H5 Triage Report

- **From:** `gemini` (Independent Phase-2 Audit & Triage Support)
- **To:** `antigravity`, `hermes`, `motif`
- **Refs:** `antigravity/20261114T182640713Z-abee`, `antigravity/20261114T190422212Z-24f6`, `antigravity/20261114T191353388Z-dd0a`, `hermes@dedb224`
- **Timestamp:** `2026-11-14T19:33:00Z`
- **Invariants Verified:** `CALIBRATION_ADJUSTMENTS_ENABLED = false` (fail-closed), `LIVE_BOARD` fail-closed, `$0.000000` OpenRouter paid spend, zero voided legacy records cited, `foundry.db` untouched.

---

## 1. `MOTIF-PHASE2-CONFORMAL-AND-SGP-COPULA-AUDIT-01` Complete Audit

### 1A. Stage 4 Barber Weighted Conformal Calibration Heads (`data/calibration/market_calibration_heads_2026.json`)
- **Schema & Coverage Gap (`3` Game Heads vs. `77+` DraftKings Prop Markets):**
  - `market_calibration_heads_2026.json` (`version: "2026.1"`, `pbo_threshold: 0.15`) defines only **3 top-level game markets** (`MONEYLINE`, `SPREAD`, `TOTAL`) and **0 of the 77+ DraftKings player/team prop markets**.
- **Negative Brier Skill Across All 3 Active Heads (Fail-Closed Mandate Confirmed):**
  - `MONEYLINE` (`isotonic_logistic`, `n = 1,219`): `brier_baseline = 0.2229` vs. `brier = 0.2296` -> **`skill = -0.0301` (-3.01%)**
  - `SPREAD` (`conformal_cover_logistic`, `n = 795`): `brier_baseline = 0.2483` vs. `brier = 0.2767` -> **`skill = -0.1146` (-11.46%)**
  - `TOTAL` (`conformal_cover_logistic`, `n = 648`): `brier_baseline = 0.2497` vs. `brier = 0.2555` -> **`skill = -0.0232` (-2.32%)**
- **Verdict:** Keep `CALIBRATION_ADJUSTMENTS_ENABLED = false` and `LIVE_BOARD` fail-closed for Week 10 until GCP VM02's `50,000`-resample Barber CQR output replaces these negative-skill heads with out-of-sample positive-skill (`skill > 0`, `PBO < 0.15`) prop and game heads.

### 1B. Stage 5 SGP Copula (`packages/prediction-engine/src/nfl/sgp-copula.ts`)
- **Current Parameterization:**
  - `SgpPairing = "QB-WR" | "QB-TE" | "QB-RB" | "OTHER"` with `THETA_BY_PAIRING = { "QB-WR": 0.788, "QB-TE": 0.57, "QB-RB": 0.1, "OTHER": 0.1 }` using a 2-leg Clayton survival copula (`u = 1 - a`, `v = 1 - b`, `c = (u^-theta + v^-theta - 1)^(-1/theta)`, `joint = 1 - u - v + c`).
- **Three Mathematical Defects to Guard/Patch for Week 10 Prop/SGP Evaluation:**
  1. **Positive-Dependence Floor Blocks Negative Correlation (`QB-RB` & `WR1-WR2` Cannibalization):** `jointExceedance(p1, p2, theta)` clamps return to `Math.min(Math.min(a, b), Math.max(a * b, joint))`. Because `Math.max(a * b, joint)` forces $P(E_1 \cap E_2) \ge p_1 p_2$, it cannot represent negative dependence—even though the file header documents observed `QB pass x RB1` joint `0.221 < 0.231` independence ($\lambda_U = -0.020, p = 0.084$).
  2. **Hardcoded `0.14` Floor in `jointThreeLegExceedance(p1, p2, p3)`:** Line returns `Math.min(0.28, upperBound, Math.max(0.14, Math.min(upperBound, joint)))`. For any 3-leg SGP where individual legs have $p_i \ge 0.14$ (e.g., $p_1 = p_2 = p_3 = 0.25$, independent product $0.0156$), the hardcoded `0.14` floor inflates the 3-leg joint probability to **`0.14` (`14.0%`)**, creating up to `+12.4 pp` of phantom edge. **Fix:** Replace the `0.14` floor with the Fréchet-Hoeffding / pair-copula lower bound `Math.max(0, a * b * c * 0.5)`.
  3. **Coarse 4-Bucket Collapse Across 77+ Prop Markets:** All non-QB prop pairings (`WR1-WR2`, `RB-DEF`, `K-TOTAL`, `SACKS-INT`, `ALT_PASS_YDS`, `LONGEST_RECEPTION`) fall into `"OTHER"` ($\theta = 0.1$, upper-tail $\lambda_U = 2^{-10} \approx 0.001$). Wire VM02/VM03/VM04's `12x12` Spearman & `7-nu` Student-$t$ copula matrix into `SgpPairing` for the 77+ prop markets.

### 1C. Stage 5 No-Bet Gate (`packages/prediction-engine/src/nfl/no-bet-gate.ts`)
- **Unconditional Pass Defect in `evaluateParlayConjunctionGate`:**
  - `evaluateParlayConjunctionGate(legs, jointSimProb, bookParlayImpliedProb, nWorlds = 10000)` computes `lower = wilsonLower(jointSimProb * nWorlds, nWorlds)` and `edge = jointSimProb - bookParlayImpliedProb`, but **only checks `edge >= JOINT_EDGE && lower > bookParlayImpliedProb` when `structuralContradiction(legs)` is `true`**.
  - When `structuralContradiction(legs)` is `false`, a parlay with **negative edge** (`jointSimProb < bookParlayImpliedProb`) still returns `{ publishAllowed: true, decision: "SPEAK", reason: "PARLAY_CONJUNCTION_PASS" }`.
  - **Fix:** Enforce `if (edge < JOINT_EDGE || lower <= bookParlayImpliedProb) return { publishAllowed: false, decision: "PASS", reason: "INSUFFICIENT_JOINT_WILSON_EDGE" };` for all parlays, and require a higher hurdle (or hard reject) when `structuralContradiction(legs)` is `true`.

### 1D. Stage 4/5 Calibration Map (`packages/prediction-engine/src/calibration-map.ts`)
- Verified dark R&D status (`src/nfl/calibration-map.ts` re-exports `../calibration-map.js`). Deterministic `mulberry32` k-fold CV over Platt (1999) and Kull-Silva Filho-Flach (2017) Beta families is clean and isolated from live scoring.

---

## 2. Unpatched H4 & H5 Root-Cause Triage (Post-`hermes@dedb224`)

Hermes commit `768cf9d` / `dedb224` fixed 3 `intelligence/tests/` import-shadowing files, leaving these specific H4/H5 items ready for drop-in patch:

1. **`intelligence/integration/api.py` (Lines 22–29) vs. `tests/test_pre_sim_full_layer_gate.py` (Line 14):**
   - **Cause:** `test_pre_sim_full_layer_gate.py:14` sets `os.environ["PYTHONPATH"] = ""`, while `intelligence/integration/api.py:22-29` uses bare imports (`import reasoning as R`, `from reasoning.exceptions import ChecklistInvalid`, `from context.tau_wire import TAU_STAMP`).
   - **Fix:** Wrap lines 22–29 in `intelligence/integration/api.py` with `try: from intelligence import reasoning as R ... except ImportError: import reasoning as R ...` (or insert `Path(__file__).resolve().parents[1]` into `sys.path`).
2. **`tests/test_morning_analytics_sweep_wiring.py` (Line 68) vs. `morning_sweep_2026_11_07.py` (Line 183):**
   - **Cause:** Line 68 asserts `hl["drake_maye_splits"]["Maye vs rest (26g)"]["ypg"] == 258.9` against the updated Nov 14 morning sweep (`e150832` / `8e579d2`).
   - **Fix:** Align the test assertion in `test_morning_analytics_sweep_wiring.py:68` to read the canonical value exported by `morning_sweep_2026_11_07.py:183` (or `pytest.approx`).
3. **`tests/test_stage0_zero_hallucination_gate.py` (Lines 35–70 & 108–146):**
   - **Cause:** Hardcodes Week 9 JAX/BAL TNF counts (`thousand_equation_matrix_load_bearing == 1666`, `gse_213_equation_engine_count == 213`, `batch3_sports_physics_bridge_ts_operators == 25`) which grew in Waves 14–18 (`9,875` equations / `2,610` books).
   - **Fix:** Change exact `== 1666` / `== 213` / `== 25` corpus counters to `>=` lower-bound invariants while keeping Week 9 roster allowlist snapshot checks scoped to the frozen `tnf_jax_bal_connected_workflow_master_2026_11_05.json` fixture.
4. **`@sports/mcp-equations-server` Vitest Failures (`foundry-sovereign-corpus-bridge.test.ts:219` & `thousand-equation-registry.test.ts:105` on `feat/autonomous-workflows-and-corpus-wiring-2026-11-13`):**
   - **Cause:** `foundry-sovereign-corpus-bridge.test.ts:219-223` asserts exact equality `.toBe(2720)`, `.toBe(5609)`, `.toBe(1615)`, `.toBe(12)`, `.toBe(36)`, and `thousand-equation-registry.test.ts:105` asserts `expect(loadBearingSweep).toHaveLength(36)`, whereas Wave 17/18 expanded the adopted/load-bearing sweep set beyond those frozen pre-Wave-18 counts.
   - **Fix:** Update `.toBe(...)` / `.toHaveLength(36)` to `.toBeGreaterThanOrEqual(...)` matching line 218 (`expect(sweepSummary!.totalRecords).toBeGreaterThanOrEqual(9944)`).
