# dfs/research/2026-09-25/youtube-builder-research/sewer-dive-video-batch-2026-09-25.md
## What it is (1-2 sentences)
Transcript/description-based grading of Garrett's 39 YouTube/LinkedIn links (25 batch-1 + 14 batch-2) from 2026-09-25, each scored LEARN / SKIP / FOLLOW-UP / BLOCKED-429 with methodology, datasets/APIs/code, and track-record notes. Verdicts rest on descriptions + web search (YouTube transcripts were IP-blocked for the grading VM), each claim tagged DESCRIPTION / SEARCH / INFERENCE.

## Key metrics/methods (formulas where given, else "not specified")
Formulas: not specified (description-grade method extraction; transcript-level math was unobtainable). Methods extracted per LEARN item:
- GreenCode (LkJpNLIaeVk): ELO-feature leakage anti-pattern — a sports classifier on tennis data reached "insane 85% accuracy" inflated by leaking ELO features, honestly retracted on camera with corrected code promised.
- Rugby model series Ep 2 (MzMRKV09dn4): validation protocol — "seal off the last season... that's always gonna be our out of sample test element"; null-classification by league (Opta didn't collect = missing, not zero, e.g. Pro D2 lacks stats); triple-verify every prompt/data pull; archive-don't-delete; handle promotion/relegation explicitly. Data from an open free API discovered via Claude Research (5 req/sec; name in Ep 1).
- abdullahtarek football CV pipeline (neBZ6huolkg): YOLOv8 detection (players/referees/ball) + multi-frame trackers, custom YOLO fine-tuning, KMeans pixel-clustering team assignment, optical flow for camera-motion compensation, perspective transform to real-world meters, ball interpolation, per-player speed/distance.
- abdullahtarek NBA pipeline (QqVahw9tBfw): YOLO + trackers, zero-shot image classification for team assignment, court-keypoint detection, perspective transform to top-down tactical map, ball-acquisition/pass/interception detection, speed/distance in meters.
- Edgerunner (Gbtb6nUEAmo): deterministic low-latency prediction-market trading engine — live market data ingestion, fair-value estimation, fixed-point dislocation strategy vs venue L2 order book, inline risk gates, paper-trade execution, deterministic replay for historical backtesting (live and replay share one engine path), decision/trade journal, explicit inactive state without config ("never invents prices"). Rust + Axum + React + WebSockets; built for the Superteam × TxLINE hackathon.
- McKay Johns xG (GsfXAzfvJVM): shot features (distance, angle, play type) → Python ML expected-goals recipe.
- 8rain Station (AULU9cRrWO0): published upload spec — define thesis → AI generates formatted model CSV → upload → +EV edges across 100+ sportsbooks. Model-output contract at https://8rainstation.com/upload-spec.txt. Leagues: MLB/NHL/NBA/NFL/EPL/WNBA/UFC/MLS/La Liga/Serie A/Bundesliga/Ligue 1; markets: moneylines, spreads, totals, game/team/player props.
- Rob Pizzola / Circles Off (mMa_EunzHbg): pro bettor's first model step by step (2017–18 NHL; notes it wouldn't work today) — end-to-end process discipline.

## Data sources named
- Jeff Sackmann's open tennis data: github.com/JeffSackmann/tennis... (truncated).
- Rugby API: unnamed open free API at 5 req/sec discovered via Claude Research (named in Ep 1 — FOLLOW-UP).
- github.com/abdullahtarek/football_analysis (license unchecked — verify before code reuse); Roboflow football dataset (universe.roboflow.com/roboflow/football-dataset).
- abdullahtarek basketball repo (truncated URL); Roboflow basketball detection dataset; court keypoint dataset; HuggingFace zero-shot classifier (patrickjohncyh... truncated).
- github.com/akashjana18/edgerunner (license unchecked).
- github.com/mckayjohns/youtube-videos; https://courses.mckayjohns.com/; https://mckayjohns.substack.com/.
- aussportsbetting.com/data (free NRL historical data; FOLLOW-UP item 3cbYEPZlFUs).
- Alex Cupps CUPPS Model (Calculated Upside Player Prospecting System) — NFL draft-prospect fantasy-upside ML model from his UC Riverside data-science master's thesis; won "So You Think You Can Tout" (135 applicants); x.com/CuppsAnalytics (FOLLOW-UP).
- AWS NFL vector-search agent: go.aws short links 3ZsWjqY (GitHub code), 4qtlDIo (TiDB); TiDB vector search + Amazon Titan + AgentCore (FOLLOW-UP).
- Hockey Reference (Data Punk no-code tutorial data source).

## Findings (numbers and facts, not vibes)
- Items: 38 unique (37 YouTube + 1 LinkedIn). Assessed: 28; BLOCKED-429: 10.
- Verdicts: LEARN 8 (batch 1: AULU9cRrWO0, LkJpNLIaeVk, mMa_EunzHbg, Gbtb6nUEAmo; batch 2: GsfXAzfvJVM, neBZ6huolkg, QqVahw9tBfw, MzMRKV09dn4); SKIP 17; FOLLOW-UP 4 (920RxyYaPHM, 3cbYEPZlFUs, A-H-_cf5yX8, MzMRKV09dn4's Ep-1 API).
- BLOCKED-429 items (10, never retried per no-retry rule): batch 1: l5Y_aiohV0k, M6L3Gl2X7-M, rne3Xs16z6k, uMkm-GQa2KE, oi_D-TnzW4Y, DxfCH6-C4ZU; batch 2: L23oIHZE14w, OUbxNLlC15w, 7gtNErGOhjw, wabA1DtYUrM. One recovered lead via SEARCH: M6L3Gl2X7-M is a May 2025 video about AI-powered betting tools (via nouvelles-du-monde.com).
- Claim numbers observed: GreenCode "insane 85% accuracy" claimed then RETRACTED as leakage artifact (negative result, honestly labeled); NRL model "$4,800" on last season (unverified); WagerGPT "$6,850.00 after 24 hours" on $2,000 bankroll (entertainment framing, unverified); Linemaker "100%" (no sample); nVenue "over 1 billion predictions" (volume, not accuracy). The file explicitly states: no auditable win-loss/ROI/calibration numbers were claimed by any assessed video — only unverifiable marketing claims.
- No leaks (exposed keys/endpoints/private data) were observed in any fetched description.
- Code-reuse rule stated: repos found are methodology references; verify licenses before any code adaptation (only engage8's MIT terms are pre-verified from the earlier sweep).
- GreenCode channel size: ~91k subs; X @GreenCodeCodes.
- Method coverage caveat: descriptions only — no transcript-level methodology obtainable this run. Treat LEARN verdicts as description-grade.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The GreenCode ELO-leakage retraction is the canonical leakage anti-pattern — catalogued in GSE's validation-hygiene notes; feeds the calibration/evidence gates (sealed-split/prereg discipline; UNCERTAIN: the corrected code was promised on Patreon but not public at grading time).
- TRUST-SIGNAL: The rugby series' seal-the-last-season holdout rule + null-classification discipline (missing ≠ zero) + triple-verify + archive-don't-delete is adoptable as engine data-ingestion standards for the trust-target intake program.
- OTHER: The YOLOv8 + optical-flow + perspective-transform CV pipelines (football and NBA) are the learnable kernel for building GSE's own tracking data from broadcast footage — same class as Next Gen Stats; feeds the tracking lane for movement primitives. Reusable tactically: the NBA court-keypoint → top-down tactical map transform.
- OTHER: Edgerunner's deterministic replay (live and replay share one engine path) + "never invents prices" + inline risk gates maps directly onto GSE's market-microstructure/CLV lane and sealed-split measurement discipline (calibration/sizing lane).
- OTHER: 8rain Station's published CSV upload spec is a ready-made model-output contract to study for GSE's own model-submission/eval formats.
- OTHER: McKay Johns' shot-feature → probability xG construction discipline transfers to NFL metric building and backtest hygiene.
- OTHER: Pizzola's pro process discipline transfers across sports even though the 2017–18 NHL model itself is stale.
- COACHING (weak/inference): The Cups/CUPPS draft-prospect ML model (thesis-backed) is adjacent to GSE's draft/DFS lanes — FOLLOW-UP item, no math extracted.
- Note on the 429-blocked items: 10 of 38 items are unverified pending live-browser re-check; any engine use of them should wait (trust-target intake should not admit unverified sources).

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the seal-the-last-season holdout + null-classification + triple-verify ingestion standard, catalogue the ELO-leakage anti-pattern, and study the 8rain CSV upload spec for GSE's model-output contract.
