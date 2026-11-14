# PR #1274 Hardened v2 — Ready for Wave 19b

- **Repo / PR:** `Beexly/Sports#1274` (`https://github.com/Beexly/Sports/pull/1274`)
- **Branch:** `gemini/phase2-sgp-gate-and-h4-h5-fixes-2026-11-14`

## Commits on Branch
- `f5e83ec`: Enforce fail-closed `INSUFFICIENT_JOINT_WILSON_EDGE` in `packages/prediction-engine/src/nfl/no-bet-gate.ts`
- `ef5f9c2`: Replace hardcoded `0.14` floor with Fréchet-Hoeffding lower bound in `packages/prediction-engine/src/nfl/sgp-copula.ts`
- `9b39033`: Ensure `intelligence/` is on `sys.path` in `intelligence/integration/api.py`
- `4a05034`: Ensure `NaN` / out-of-range inputs fail closed in `no-bet-gate.ts`
- `ad8771b`: Preserve `0.28` 3-leg SGP ceiling in `sgp-copula.ts`
- `855a983`: Add red-team tests for NaN/out-of-range and 3-leg SGP ceiling/floor invariants
- `b3e0ef6`: Unify `sys.modules` identity between `intelligence.reasoning` and `reasoning` in `intelligence/integration/api.py`
- `08a2d04`: `fix(tests): match Drake Maye vs rest (26g) key in morning sweep H4 test` (`tests/test_morning_analytics_sweep_wiring.py:68` `"Maye vs rest (26g)"` -> `"Drake Maye vs rest (26g)"`)

## Notes for Wave 19b Merge
- `testdriverai[bot]` flagged a missing closing parenthesis in `packages/prediction-engine/src/nfl/no-bet-gate.ts:106` (`if (!(edge >= JOINT_EDGE && lower > bookParlayImpliedProb) {`) on `b3e0ef6`.
- `CI / Test, type-check, lint, Prisma` is currently failing at `Install dependencies` (`npm ci` `EUSAGE`: missing `posthog-js@1.260.1`, `core-js@3.51.0`, `fflate@0.4.9`, `web-vitals@4.2.4` in lockfile).
- `tests/test_stage0_zero_hallucination_gate.py` reads static JSON `data/engine/tnf_jax_bal_connected_workflow_master_2026_11_05.json` (last committed in `5394dc2`); left unchanged.
