# research/2026-09-28/orchestration/ngs-feed-creation-plan.md
## What it is (1-2 sentences)
A research-only coordination plan (2026-09-28) for building GSE's own NGS tracking feed across four ranked source options (asonty TSV bootstrap, nfl-ngs-raw scrape probe, broadcast-CV reimplementation, licensed feeds), with a target schema, validation protocol, milestones M0–M6, standing data-QC rules, and Garrett blockers.

## Key metrics/methods (formulas where given, else "not specified")
- Target schema grain: 1 row per entity per frame; 23 entities/frame (22 players + BALL); keys game_id → play_id → frame_id (10 Hz, monotonic); columns x,y ∈ [0,120]×[0,53.3] yd, s (yd/s), a (yd/s²), dis, o, dir, event, team, position, is_targeted_receiver, ball_landing_x/y, frames_to_landing; play context (quarter, down, yards_to_go, yardline_100, seconds_remaining, score_diff, play_direction); feed metadata (source, acquired_at, feed_version, valid, identity_keys nflId/gsisId/esbId).
- Validation: test_loader_schema, test_causality (zeroing frame_id > t changes outputs < 1e-6), test_canonicalization, test_flip_involution; physics sanity (test_no_teleport: hypot(dx,dy) ≤ 12.0·Δt + 0.5; speed cap ≤ 12.0 yd/s; determinism < 1e-6; permutation invariance < 1e-5).
- Baselines: Phase 0 physics baseline (constant-velocity + ball-landing drift) must beat last-position-carried-forward; Phase 1 single relational model must beat Phase 0 RMSE by ≥ 10% on game-level held-out block (expanding window).
- Yardstick: 0.518–0.540 (BDB 2026 leaderboard band, sqrt(0.5·(MSE_x + MSE_y)) yards); target: beat 0.540 on GSE's own held-out games.
- Uncertainty calibration gates (mandatory): ECE_regression = Σ_b (n_b/N)·|RMSE_b − σ̄_b| over 10 equal-count bins < 0.15 yd; coverage at Mahalanobis ≤ 1 (expect 0.393) and ≤ 2 (expect 0.865) within ± 5 pp; synthetic-known-σ test: ECE < 0.10, coverage ± 3 pp.
- nfl-ngs-raw doctrines adopted: raw-first one-way boundary; validity-by-content; pace-between-attempts (finally-block sleep, env-tuned, retry {408,429,500,502,503,504}); empty-envelope sentinel; finality-from-schedule; failed≠absent; atomic tmp+rename writes; schedule upsert by game_id.
- CV lane (M5): ≥ 50 plays overlapping corpus, per-player CV-vs-Zebra agreement mean error < 1.0 yd, 95th percentile < 2.0 yd.
- Storage: raw frames as per-play Parquet in lake; Postgres gets derived per-play features only (a season ≈ 50M+ player-frames — DB never sees raw).

## Data sources named
Movement module spec (2026-09-26), TRACKING-10HZ-PLAYBOOK (2026-07-01), cv-movement-primitive.ts, sportsdataverse/nfl-ngs-raw (CLAUDE.md + fetch.py), asonty/ngs_highlights (2017–2019 highlight-play TSVs), sumedhk0/PanopticPigskin (AGPL-3.0, study-only), nflverse ngs-data (CC-BY-4.0), SkillCorner, SIS DataHub Pro ($99.99/mo or $749.99/yr), PFF b2b, Genius Sports (exclusive through 2029; prior deal $120M/6yr), pro.nfl.com/api/secured/*.

## Findings (numbers and facts, not vibes)
- Verified negatives: nflverse publishes NO per-frame tracking data (player-week aggregates only — calibration targets, never training frames); public nextgenstats.nfl.com/api may be dead (moved behind NFL+ Premium paywall at pro.nfl.com/api/secured/* per SportsDataverse 2026-09-04); nfl-ngs-raw itself only gets tracking for highlight plays.
- HARD constraint: train on GSE's own NGS data — BDB 2026 data is never a training input; BDB license conflict (spec says CC BY-NC 4.0 benchmark-only; playbook says no-license/confidential with post-contest destruction) — resolve by reading actual license text before ANY BDB touch; default = no BDB data at all.
- HARD: DIY CV extraction on NFL+/broadcast streams blocked without counsel; scrape lane is at NFL-ToS tolerance — flag for Garrett, do not self-clear.
- HARD: NGS internal-only doctrine (§0.A) — NGS data/metric names NEVER on any public surface; CI-enforced fence (existing no-raw-ngs-fence.ts style); violations treated as integrity failures; NGS signals get their own calibrated weight, backtested like every other signal family.
- Garrett blockers: licensed-feed money (SkillCorner low-to-mid five figures/yr estimate — verify via demo; Genius six-to-seven figures); NFL+ user-bound token (client-credentials tokens 401 on every secured route); NFL ToS risk calls; BDB license; detector procure-vs-train decision.
- Milestones M0→M6: skeleton → asonty bootstrap corpus → physics baseline on real data → scrape probe/verdict → spec loader+feature integration → CV PoC (gated) → licensed-feed pipeline (stubbed, awaiting Garrett).
- asonty finding: TSVs contain the entire runtime of the play including dead time before line set and post-TD celebration — loader must trim to the play window; dir=0 faces the far sideline, clockwise.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] NGS internal-only doctrine with CI fence — the standing legal posture; derived judgments may ship, NGS data/metric names never do.
- [TRUST-SIGNAL] Every number file-verifiable; empty-envelope/failed≠absent/validity-by-content as data-integrity primitives; calibration gates before downstream consumption.
- [TRUST-SIGNAL] Fail-closed intake: persistent non-404 failures raise and fail the stage, never swallowed; uncertain licensing defaults to no-use.
- [OTHER] Physics sanity bounds (speed cap 12.0 yd/s, no-teleport inequality) and permutation-invariance tests as model acceptance criteria.
- [OTHER] The four nfl-ngs-raw scrape doctrines as standing intake rules for any future vendor intake.

## Engine-actionable? (yes/no + one-line what)
Yes — the plan is an implementation spec for the coding agent (M0–M6 with acceptance criteria), not a signal; the engine-actionable part is the schema, calibration gates, QC rules, and fence, which should be built when the lane is staffed.
