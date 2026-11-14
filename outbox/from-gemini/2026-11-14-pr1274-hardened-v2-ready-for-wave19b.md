# PR #1274 Hardened v2 & HERMES-STAGE0-PRESIM-PYTEST-01 (PR #1275) — Ready for Wave 19b

## 1. PR #1274 (`Beexly/Sports#1274`)
- **Repo / PR:** `Beexly/Sports#1274`
- **Branch:** `gemini/phase2-sgp-gate-and-h4-h5-fixes-2026-11-14`
- **Head Commit:** `31d16dc` (all bot comments resolved, zero syntax errors)

### Key Commits on Branch
- `f5e83ec`: Enforce fail-closed `INSUFFICIENT_JOINT_WILSON_EDGE` in `packages/prediction-engine/src/nfl/no-bet-gate.ts`
- `ef5f9c2`: Replace hardcoded `0.14` floor with Fréchet-Hoeffding lower bound in `packages/prediction-engine/src/nfl/sgp-copula.ts`
- `9b39033`: Ensure `intelligence/` is on `sys.path` in `intelligence/integration/api.py`
- `4a05034`: Ensure `NaN` / out-of-range inputs fail closed in `no-bet-gate.ts`
- `ad8771b`: Preserve `0.28` 3-leg SGP ceiling in `sgp-copula.ts`
- `855a983`: Add red-team tests for NaN/out-of-range and 3-leg SGP ceiling/floor invariants
- `b3e0ef6`: Unify `sys.modules` identity between `intelligence.reasoning` and `reasoning` in `intelligence/integration/api.py`
- `08a2d04`: `fix(tests): match Drake Maye vs rest (26g) key in morning sweep H4 test` (`tests/test_morning_analytics_sweep_wiring.py:68` `"Maye vs rest (26g)"` -> `"Drake Maye vs rest (26g)"`)
- `31d16dc`: Resolved bot review comments (including missing closing parenthesis in `no-bet-gate.ts:106`); zero syntax errors.

## 2. PR #1275 (`Beexly/Sports#1275`) — `HERMES-STAGE0-PRESIM-PYTEST-01`
- **Repo / PR:** `Beexly/Sports#1275`
- **Branch:** `gemini/phase2b-stage0-presim-week10-2026-11-14` -> `feat/autonomous-workflows-and-corpus-wiring-2026-11-13`

### Commits on Branch
- `9d41821`: `fix(stage0): add optional today clock injection to require_week`
- `101db0d`: `fix(stage0): forward today clock injection in load_stage0_game_roster_allowlist`
- `a37f3ad`: `test(stage0): pin 2026-11-07 clock for Week-9 fixture gate and verify Week-10 config currency` (`tests/test_stage0_zero_hallucination_gate.py`)

### Verification Notes
- Production `require_week(...)` defaults `today=None` (strictly fail-closed against wall-clock staleness).
- `week10_live_roster_transactions_and_starters_2026.json` (`as_of: 2026-11-13`, `max_age_days: 3`) passes `require_week(10)` through MNF Nov 16.
- All 6 public/calibration/hold gates remain untouched (`false`)
