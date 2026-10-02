# docs/arxiv-program/research/2026-09-21/arxiv-deep/0377-openstarlab-open-approach-for-spatiotemporal-agent.md
## What it is (1-2 sentences)
Open-source framework standardizing soccer spatio-temporal agent data: UIED unified event schema + SAR per-timestep state-action-reward schema + standardized next-event (Event package) and multi-agent RL (RLearn package) benchmark pipelines. Ledger verdict: ADAPT the schema/benchmark-harness pattern only — nothing soccer-specific; the UIED/SAR analogs are the infrastructure GSE needs to make its play-by-play + NGS tracking data model-ready.
## Key metrics/methods (formulas where given, else "not specified")
- UIED schema: 105×68 m pitch, attack left→right; per-event variables (match/poss IDs, action, success, goal, scores, period/minute/second, delta_T, start_x/y, deltaX/Y, distance, dist2goal, angle2goal, end-of-possession/period/game markers); short/long pass split at 45 m.
- SAR schema: per-frame state-action-reward; center-origin coords (−52.5..52.5, −34..34); player x/y, velocity, acceleration; event+tracking synced on frame_id.
- Event package: Seq2Event (transformer+MLP), NMSTPP (neural marked spatio-temporal point process, CE+RMSE loss), LEM_1/LEM_3 (3 independently-trained MLPs predicting action/time/location sequentially), FMS (transformer foundation model), MAJ baseline; Optuna YAML tuning; greedy/probabilistic simulation.
- RLearn: multi-agent per-timestep Q-learning; Q-update Q*(s_t,a_t) = E[r_{t+1} + γQ(s_{t+1},a_{t+1})]; L_total = L_td + λ1·L_L1 + λ2·L_as, λ1 ∈ {0.01, 0.005, 0.001}, λ2 = 0.0001, γ = 1.0, Adam lr 0.001; 16 actions; terminal reward from EPV.
## Data sources named
Wyscout 2017/18 Premier League (open access); StatsBomb 2023/24 La Liga (380 matches, purchased, not publishable); 2019 Meiji J1 League tracking+event (55 matches, Data Stadium Inc.); 60/20/20 and 50/5/45 splits. Code: github.com/open-starlab (4 repos: PreProcessing, Event, RLearn, STE Label Tool).
## Findings (numbers and facts, not vibes)
- LEM_3 (3-event history): action accuracy ~0.65–0.67, time-MAE 2.69 s (Wyscout) / 2.07 s (StatsBomb), X-MAE 7.62/7.07 m, Y-MAE 21.83/8.32 m; 19–20M FLOPs / 38–39K params vs FMS 3.66–4.03B FLOPs / 1.29M params — 3-event history beats 40-event history at ~1/200th the compute; recency > long context for next-event prediction.
- Action accuracy is flat across models (~0.67 vs MAJ 0.57) — uninformative metric; F1 discriminates (LEM_3 0.20/0.25 best).
- RL: at λ1=0.01 MLP wins (acc 0.4939, TD 1.8979); at λ1=0.001 all collapse to ~0.0714 (≈ random over 16 actions); raising λ1 improves action accuracy but destabilizes TD loss — reward prediction and behavior cloning pull in opposite directions (authors blame sparse terminal EPV reward).
- INFERENCE: NFL analog of UIED = canonical play-level schema joining nflverse PBP + NGS tracking + charting; analog of SAR = per-frame 10 Hz NGS state-action-reward on play_id.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Canonical data schema (GSE-UIED over nflverse+NGS+charting) + per-frame SAR schema (22 player x/y/vx/vy + ball, 16-class action analog, per-frame ΔEPA dense reward) is foundational data-layer infrastructure for every downstream engine model: OTHER (data engineering), SCHEME (off-ball credit assignment via multi-agent Q-functions — same problem class as ledger 0372).
- The recency>context finding (LEM_3, 3-event window, 1/200th compute) is a useful prior for NFL next-play models: SCHEME.
## Engine-actionable? (yes/no + one-line what)
yes — prototype a GSE-UIED canonical play/event schema (nflverse + NGS + charting, <1% row loss on joins) and a GSE-SAR per-frame state-action-reward schema with dense per-frame ΔEPA rewards as the data-layer foundation, plus a fixed-metric benchmark harness.
