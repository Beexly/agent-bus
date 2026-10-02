# docs/fantasy/research/2026-09-28/hf-nfl-evaluation-tested.md

## What it is (1-2 sentences)
A TESTED evaluation (2026-09-28, live HuggingFace API runs with reproducible commands) of four NFL queue items — `tuxmx/nfl_bets_scores`, `keremberke/nfl-object-detection`, two Gradio Spaces, and the bge-m3/Qwen3 embedding models — replacing their UNTESTED queue entries. Verdicts: one research-only backtest corpus, one out-of-scope vision corpus, one dead Space (observed build failure), one live dashboard with a learnable expected-FP method, and two commercially-clean embedding models blocked only on a founder HF token.

## Key metrics/methods (formulas where given, else "not specified")
- **`tuxmx/nfl_bets_scores`**: single CSV `spreadspoke_scores.csv` (1,494,675 bytes), 17 columns, 13,788 data rows, seasons 1966–2023, 119 distinct stadiums; 2,445 rows from 2015 onward. Fill rates: stadium 13,788/13,788 (100.0%), weather_temperature 12,410 (90.0%), weather_wind_mph 12,394 (89.9%), spread_favorite 11,070 (80.3%), over_under_line 10,998 (79.8%), team_favorite_id 11,070 (80.3%), weather_humidity 8,468 (61.4%). Post-2015: spread_favorite and over_under_line both 90.2% filled (2,206 rows). Key semantic: `spread_favorite` is signed to the FAVORITE, not the home team — misreading inverts every game.
- **`seh363/Fantasy-Football-Expected-Points`** expected-FP model: rate features TPRR (targets per route run; examples: RB McCaffrey 0.24, WR Nacua 0.35, TE McBride 0.23), YPRR (yards per route run), slot rate, green-zone (RZ) attempts/targets; Expected FP from those rates; buy-low score = Expected − Actual. Error table (IN-SAMPLE, 2025 data): RB n=20 MAE 1.53, bias +1.12, 13/20 beat expected (65%), error sd 1.74; WR n=20 MAE 1.42, bias +0.30, 11/20 (55%), sd 1.89; TE n=10 MAE 1.53, bias +1.53, 10/10 (100%), sd 1.00. Residual column verified `expected − actual` reproduces the stated diff on 25/25 rows.
- **Embedding models**: bge-m3 (`BAAI/bge-m3`, MIT, 36,143,759 downloads, 3,709 likes); Qwen3-Embedding-0.6B (`Qwen/Qwen3-Embedding-0.6B`, Apache-2.0, 9,457,677 downloads, 1,252 likes). Hosted inference returned observed 401 (no HF_TOKEN in env). Research corpus size: 2,838 markdown files under `docs/`.
- **ZeroGPU**: free tier is 5 GPU-minutes/day; deliberately not exercised (nothing in queue needed inference).
- **`saimanideeppellimari/NFL_prediction`** Space: `stage: BUILD_ERROR`, `hardware: {current: null, requested: 'cpu-basic'}`, empty errors array. **`seh363` Space**: woke from SLEEPING; Gradio 6.13.0 blocks app, 18 components, `dependencies: 0` — no callable API surface.

## Data sources named
- `tuxmx/nfl_bets_scores` — scrape of the well-known `spreadspoke_scores` companion data; no license declared on HF (research/learn-only, not redistributable, not shippable).
- `keremberke/nfl-object-detection` — Roboflow-export player-detection/segmentation image corpus (`data/train.zip`, `data/valid.zip`, `data/valid-mini.zip`, `data/test.zip`); no license declared; out of scope (serving path is pure TypeScript statistics, no torch/ONNX/Python).
- `seh363/Fantasy-Football-Expected-Points` — static dashboard, 2025 season data credited in-page to `@StephenHoopes`, sourced from `nfl_data_py` + PFF; 20 RB / 20 WR / 10 TE leaderboards + three buy-low tables.
- `BAAI/bge-m3` (MIT), `Qwen/Qwen3-Embedding-0.6B` (Apache-2.0).

## Findings (numbers and facts, not vibes)
- [SCHEME] The expected-FP residual ("Expected − Actual" as buy-low score) independently confirms the rate-based-expectation-plus-residual framing the repo already shipped in PR #927 (`apps/web/lib/signals/adjustment-layer.ts`) — external validation of the engine's adjustment-layer method.
- [TRUST-SIGNAL] The TE expected-FP formula shows a +1.53 systematic bias (10/10 TEs beat expected, tightest error sd 1.00) — a position-level bias that large erases any edge on its own; proposed as a concrete calibration test for the fantasy backtest.
- [SCHEME] TPRR/YPRR/slot-rate/green-zone usage rates are a compact, learnable feature set for fantasy expected points (learn the method, not their in-sample numbers — all figures are pre-season, truncated leaderboards, not out-of-sample accuracy).
- [OTHER] Historical closing-market gap closed: `spread_favorite` + `over_under_line` + weather + `stadium_neutral` gives 1966–2023 venue/weather context the current backtest corpus lacks; 2015+ market lines 90.2% filled; admitted research-only behind the license fence, NOT a live feed or product source.
- [TRUST-SIGNAL] bge-m3 (MIT) and Qwen3-Embedding-0.6B (Apache-2.0) are licensing-cleared for a product path; both blocked only on a founder HF token (observed 401, token absent from env); bge-m3 is the designated first target for a research-corpus retrieval prototype over 2,838 markdown files (multi-vector, 8k context, CPU-servable; serving path is pure TS, so embeddings arrive as API/sidecar).
- [OTHER] `saimanideeppellimari/NFL_prediction` is dead by observed `BUILD_ERROR` (2026-09-28); revisit only if the author fixes it.
- [OTHER] ZeroGPU quota (5 GPU-min/day) deliberately preserved — nothing in this queue needed inference.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: TPRR/YPRR/slot-rate/green-zone expected-FP + residual framing validates the adjustment-layer method (PR #927).
- TRUST-SIGNAL: +1.53 TE bias → position-level calibration test for fantasy backtest; HF licensing clearance (MIT/Apache-2.0) for the embedding path; no-license datasets gated research-only.
- OTHER: spreadspoke backtest corpus (venue/weather + closing lines) for historical backtests; dead Space noted; ZeroGPU preserved.

## Engine-actionable? (yes/no + one-line what)
yes — mirror the rate-based expected-FP + buy-low-residual method in the fantasy backtest with a position-level bias calibration check (TE +1.53 FP warning).
