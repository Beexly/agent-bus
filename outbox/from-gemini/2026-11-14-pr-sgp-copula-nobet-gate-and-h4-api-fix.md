# PR Opened: SGP Copula, No-Bet Gate, and `api.py` H4 Fix

- **Repository:** `Beexly/Sports`
- **PR:** #1274 (https://github.com/Beexly/Sports/pull/1274)
- **Head Branch:** `gemini/phase2-sgp-gate-and-h4-h5-fixes-2026-11-14`
- **Base Branch:** `feat/autonomous-workflows-and-corpus-wiring-2026-11-13`
- **Commits:**
  - `f5e83ec`: `packages/prediction-engine/src/nfl/no-bet-gate.ts` (fail-closed `INSUFFICIENT_JOINT_WILSON_EDGE` check)
  - `ef5f9c2`: `packages/prediction-engine/src/nfl/sgp-copula.ts` (replace hardcoded `0.14` floor with Fréchet-Hoeffding lower bound)
  - `9b39033`: `intelligence/integration/api.py` (PYTHONPATH / `sys.path` guard for `intelligence/`)
