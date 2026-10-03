# Reconciled Adversarial Audit — 2026-10-02 night
Pair: GLM 5.3 Flash (A) × Qwen 3.8 Flash (B), same brief, independently executed.
Both read IMPROVEMENTS-LOG.md + REAL-DATA-VALIDATION.md first; no re-report of known items.
Method: code-read of five hunt targets + LLM analytical passes. Audit only, nothing changed.

## CONFIRMED by both agents (treat as fact)
1. **target_hhi zero-fill is a quantitative lie** (A P1-2, B P1-3). `integration/api.py:174-175`:
   missing HHI recorded as 0.0 = "perfectly diversified" — the most extreme value on the
   scale, read by the adversary as concentration evidence. Fix: omit the observation when hhi is None.
2. **Swallowed DataGapErrors** (A P1-1, B P2). `get_pressure_splits` gap swallowed at
   `integration/api.py:130-132`; three bare `except DataGapError: pass` sites elsewhere.
   The INT clean/pressured splits (Watson 1.03%/4.43%) are the load-bearing premise of the
   L4 pressure counter-argument — when the provider fails, the track still reads CLEAR.
3. **Absence of evidence reads as CLEAR** (A P1-1, B P1-2, B P1-5). Withheld rolling form
   (Watson, 57 db < 100): the `gap_note` dies in the façade, L4 never learns the signal is
   missing. Empty/missing `qbs` map still marks `qb_behavior` CLEAR with zero observations.

## Unique P1s
4. **Validated τ̂ gates never feed the live path** (B P1-1 — highest value). The build's only
   validated gate (+6.77pp Hamming, 7.28% Brier): `coach_risk.py`, `refit_tau.py`,
   `situational_wp.py`, `behavior.py` are never called by `_build_data_context`. Validated
   research sits beside the engine, not inside it.
5. **Façade convergence doesn't hold** (A P1-3). `integration/pipeline.py:43-160`: L3 chain
   CONSTRUCTION (`build_l1`, `build_l2_correlations`, `build_causal_chains`) still lives in
   `integration/`; `reasoning/levels.py::run_l3` only evaluates pre-built chains. Fix: move
   construction into `reasoning/` or correct the architecture docs.
6. **T1 "e2e" bypasses analyze()** (B P1-4). The test hand-builds the trace and calls
   `adversary_review()` directly; the honest PARTIAL real-data verdict has no committed test
   (only a pytest-dodging scratch script).

## P2s
- `market_edge_pct` 0.0 falsy suppressing escalation indistinguishably from "no edge" (B).
- Unwired scale: 6 of 13 modules + large parts of trust-signals/coaching unreachable from `analyze()` (B).
- `get_familiarity`/`get_trust_targets` lack the try/except DataGapError that siblings have;
  a gap nukes the whole qb_behavior track to DATA-GAP (A).
- `engines/` unwired: zero imports outside tests; `drift_monitor.py` never invoked (A).
- `tests/test_engines.py:35-37`: dead loop `if tool in prompt or True: break` (A).
- `engines/harness.py:78-86`: LLM T1 fixture hardcodes all hints CLEAR, bypassing the gate (A).
- Legacy `integration/escalation.py` + `checklist.py`: delete, don't document (B).

## Checked and clear (both agree)
`test_real_provider_wiring.py` is genuine (real parquet/CSVs, real assertions — not theater);
UNCHECKED→INVALID flow works end to end; zero faked-calibration claims in production code;
reasoning/integration enums converged, no re-divergence. No P0 — nothing publishes, so blast
radius is internal reasoning quality.
