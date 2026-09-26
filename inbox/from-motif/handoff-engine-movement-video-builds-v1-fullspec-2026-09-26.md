# Handoff: Engine movement + video-tracking builds (E1–E3)

**From:** Motif (strategy/QC)
**To:** Minis (Hermes) — implement
**Date:** 2026-09-26
**Source material:** tonight's Instagram-sourced research, verified and deep-extracted:
- NFL Big Data Bowl 2026 (Kaggle featured comp, Sep 2025→Jan 2026, 8,147 entrants, task: predict player x,y while ball in air, RMSE yards) — winners Takoi + Mifune (Rist Co., Japan); reference LB 0.518–0.540
- Two MIT repos: `XxRemsteelexX/NFL-Big-Data-Bowl-2026-` (4 architectures, 167-feature pipeline, 847 ablations) and `shevchenko9liza/nfl-player-trajectory-prediction` (tabular boosting, SHAP-embedding meta-features, Optuna) — **direct adaptation approved with attribution**
- Polymathic AI "The Well" (NeurIPS 2024, arXiv:2412.00568) — code BSD-3-Clause, **data CC BY 4.0 (commercial OK with attribution)** — methodology transfer only, no pretraining value found
- NVIDIA LocateAnything-3B — **NON-COMMERCIAL, lab-only**
- Roboflow Supervision (MIT), `trackers` pkg (Apache-2.0), TransNetV2 (MIT), PySceneDetect (BSD-3), TVCalib (MIT), RF-DETR ≤L (Apache-2.0) — **all shippable**

**Research notes (full depth, read these):**
- `~/workspace/research/2026-09-26-big-data-bowl-deepdive.md` — competition, winners, licenses
- `~/workspace/research/2026-09-26-bdb-code-extraction.md` — full code extraction, file/function refs, hazards
- `~/workspace/research/2026-09-26-movement-module-spec.md` — E1 full spec
- `~/workspace/research/2026-09-26-video-tracking-spec.md` — E3 full spec
- `~/workspace/research/2026-09-26-thewell-engine-alignment.md` — The Well transfer + limits

## Decisions (locked 2026-09-26 — Garrett delegated, Motif decided)

1. **Training data (NGS unknown):** Do NOT block on NGS. E1 trains on (a) trajectories produced by E3's video-to-tracking pipeline run over license-clean broadcast footage, plus (b) synthetic physics fixtures — both commercially safe. The BDB 2026 dataset is used **lab-only** for method validation (CC BY-NC 4.0, never commercial training). The E1 data loader is specced to the NGS column schema, so real NGS seasons plug in later with zero model changes. Priority: get E3's shippable path producing trajectories → they become E1's first real training set. This closes the loop: video in → trajectories out → movement model trained.
2. **Ball-landing spot (unknown at inference):** Landing is an OPTIONAL input with a fallback chain, in order: (i) provided landing (when available) → (ii) E1's own **ball-landing prediction head** (projectile regression on ball track: fit gravity+drag to observed ball positions, predict landing x/y + frames-to-landing) → (iii) geometric baseline without landing conditioning. Train the landing-conditioned player heads with **landing dropout** (randomly replace true landing with the predicted one / zeros during training) so the model never becomes brittle to missing landing. The old "open question" fallback is superseded by this.
3. **GPU (ZeroGPU on HuggingFace Spaces):** E1 is designed for it — <2M params, mixed precision, checkpoint every epoch with resume, batch sizes that fit shared-GPU memory (start 64, halve on OOM with gradient accumulation to preserve effective batch). Training runs as resumable chunks (ZeroGPU is serverless/shared — never assume a 12-hour uninterrupted run; design for interruption). Inference ships as a **ZeroGPU Spaces endpoint** wrapping `POST /predict/movement` — trajectories are small tensors, ideal for serverless GPU. If a training chunk exceeds ZeroGPU quotas, fall back to CPU overnight runs on the VM for Phase 0/1 (the model is small enough).

## Step 0 (before any code)

1. Read `docs/research/2026-09-21/wiring/IMPLEMENTED.md` in Beexly/Sports — do not duplicate existing work.
2. Do NOT reimplement: `prereg-eval.ts`, `sealed-split.mjs`, `conditional-td.ts`, `hr-factors.ts`, `nfl-regime-change.ts`.
3. Never touch `gse-grok-build-sandbox`. Do not reset/rebase/clean shared branches. Additive modules only.
4. This handoff composes with (does not replace): V1–V8/W1–W6/D1–D4 from `inbox/from-motif/handoff-video-model-builds-v3-fullspec-2026-09-25.md`. In particular: E1's uncertainty outputs must pass **W1 calibration gates**; E3's stages S4–S6 **are** the V3 primitive's math contract (detector-agnostic — do not re-derive); E1 movement features may feed W5 (deserve-to-win) later.

## License boundary (hard, CI-enforceable)

| Artifact | License | Verdict |
|---|---|---|
| BDB repo1/repo2 code | MIT (repo1 has `[Your Name]` placeholder — adapt methods, don't ship verbatim) | Adapt with attribution |
| The Well code | BSD-3-Clause | Adapt with attribution |
| The Well data | CC BY 4.0 (verified via HF API) | Commercial OK w/ attribution; but no transfer value found — don't download for pretraining |
| BDB 2026 competition dataset | **CC BY-NC 4.0** | **NEVER train commercial models on it. Methods only.** |
| Supervision, `trackers`, TransNetV2, PySceneDetect, TVCalib, RF-DETR ≤L | MIT/Apache-2.0/BSD-3 | Shippable |
| Ultralytics YOLO (all), LocateAnything-3B | AGPL-3.0 / NVIDIA non-commercial | **lab/ only, never shippable** |
| schubert-tom / rocinc writeups | No license | Learn-from-only, no code reuse |

**Attribution strings (put in file headers):**
- `Portions adapted from XxRemsteelexX/NFL-Big-Data-Bowl-2026- (MIT).`
- `Portions adapted from shevchenko9liza/nfl-player-trajectory-prediction (MIT).`
- `Methods informed by PolymathicAI/the_well (BSD-3-Clause).`

## Suggested build order

E2 ports P1→P4 → E1 Phase 0 (physics baseline) → E1 Phase 1 (relational model) → E3 shippable path → E1 Phase 2 (uncertainty + calibration gates) → E1 Phase 3 (ensemble+TTA) → E2 P5 (tabular SHAP features)

---

# BUILD E1 — Movement prediction module

**New files (all additive):**
- `gse-ml-service/app/models/movement.py` — module
- `gse-ml-service/app/tests/test_movement.py` — 14 tests (list below)
- Endpoint in `gse-ml-service/app/main.py`: `POST /predict/movement` — **returns trajectories, NOT a `probability` field.** This is load-bearing: `packages/prediction-engine/src/ensemble/remote-model-client.ts` classifies any response without a finite `probability` in `[0,1]` as `malformed_response` and excludes it from consensus. Do NOT add a fake probability to make it "work" — exclusion-until-ready is the designed behavior. The engine consumes trajectories via explicit integration later.

## E1 inputs (exact schema)

Per-play frame table, 23 entities/frame (22 players + ball), 10 Hz, history window T=10 frames, strictly causal (frames ≤ t only). Columns:
`game_id, play_id, frame_id, time, entity_id, x, y, s, a, dis, o, dir, event, team, position, is_targeted_receiver, ball_landing_x, ball_landing_y, frames_to_landing`
plus play context: `quarter, down, yards_to_go, yardline_100, clock, score_diff, play_direction`.
Canonicalize plays to rightward direction at load. Training data per Decisions §1–2 above: E3-derived trajectories + synthetic physics fixtures for the commercial path; BDB data lab-only for method validation; loader stays NGS-schema-compatible so real NGS seasons plug in later. **Ball landing is optional** — see Decisions §2 fallback chain; the model trains with landing dropout so it is robust to missing landing at inference.

**Ball-landing prediction head (new, part of E1):** regression head on the ball's observed track fitting projectile motion (gravity + linear drag) → outputs `pred_landing_x, pred_landing_y, pred_frames_to_landing` with its own logvar. Loss: MSE on landing position + NLL on frames-to-landing. This head's output feeds the player-prediction heads when true landing is absent (fallback chain ii).

## E1 outputs (exact schema)

Per horizon H ∈ {0.5s, 1.0s, 2.0s, ball-landing}: `dx, dy` [22], `speed` [22] (softplus), `logvar` [22,2] (clamped [−6,4]), `conf` [22] (sigmoid, P(error < 1.0 yd)). Canonical entity order: 11 offense then 11 defense by `entity_id`. Primary metric: RMSE in yards.

## E1 architecture

Query-centric transformer (<2M params so 5-seed ensembles train overnight):
1. Per-entity GRU temporal encoder over T=10 frames → entity token = temporal encoding + 16-dim position embedding + 4-dim team embedding → d_model=128.
2. **Two dedicated context tokens** with global attention: ball-landing token + play-context token. (Landing conditioning is the highest-leverage feature — it gets its own token, not just per-entity features.)
3. 4-layer / 4-head transformer, **no entity positional encoding** (permutation invariance over players).
4. Per-horizon decoder MLPs → dx, dy, speed, logvar, conf. Plus auxiliary dist-to-landing head.

## E1 loss terms (exact formulas, starting weights)

- `L_nll` (w=1.0): Gaussian NLL `0.5·(lx + (dx−dx̂)²/e^lx + ly + (dy−dŷ)²/e^ly)` — trains position + uncertainty jointly.
- `L_speed` (w=0.2): `|ŝ − hypot(dx̂,dŷ)/Δt|` — speed consistency (Mifune's trick).
- `L_dir` (w=0.1): `(1 − cos(v,d̂))` weighted by `min(speed,3)/3`, only when |v|>1 yd/s — penalizes unphysical reversals at speed.
- `L_cap` (w=1.0): `ReLU(ŝ − 12.0)²` hinge — guardrail, must be ≈0 at convergence.
- `L_conf` (w=0.2): BCE on label `1[error < 1.0 yd]` computed from detached predictions.
- `L_aux` (w=0.1): MSE on auxiliary dist-to-landing head.
- `L_accel` (w=0.1, from The Well alignment): penalize implied acceleration > 8 yd/s² between consecutive horizon predictions — kills teleport-then-stop predictions. Sibling to `L_dir`/`L_cap`.
- One-round grid search on (w_speed, w_dir) against validation RMSE; keep the combo minimizing RMSE subject to `L_cap ≈ 0`.

## E1 features (computation recipes)

- **Kinematic:** finite-difference vx/vy from x/y, heading, heading-change, window displacement aggregates (T=10).
- **Relational (anchor group):** `dist_to_ball`, `angle_to_ball`, **`dist_to_ball_landing` + closing rate** (highest leverage), `dist_to_targeted_receiver`, nearest-opponent distance + closing rate, endzone/LOS/sideline distances, `speed_toward_ball`.
- **GNN-lite neighbor embeddings (port from BDB, +0.0030):** K=6 nearest neighbors, radius 30 yd, exponential weights τ=8, ally/opponent split, 17 aggregate features. No graph library needed.
- Learned 16-dim role/position embeddings + play-context vector.
- **Convention (regression hazard):** pick ONE velocity decomposition and unit-test it: `dir=0 → vx=s, vy=0` (i.e., vx = s·cos(dir), vy = s·sin(dir)). BDB repo1's `src/data/preprocessing.py` swaps sin/cos vs the competition engineer — do not inherit the ambiguity.

## E1 augmentation (apply to raw coords BEFORE feature computation, recompute all derived features after)

- Horizontal flip `x' = 120 − x` (primary, involutive — exact round-trip). **Schema-aware:** flip raw coords → recompute ALL features → scale. A documented misfire (flipping only the indexed y column) cratered LB 0.589 → 3.674. The `apply_tta()` in BDB's `augmentation.py` is a stub returning predictions unchanged — do not copy it; implement TTA properly (below).
- Position jitter σ=0.1 yd, reframed as pushforward-noise analog: ramp 0.05 → 0.2 yd over first 30 epochs (The Well alignment — zero compute cost).
- Frame subsampling p=0.2.

## E1 training / validation (anti-leakage is non-negotiable)

- Expanding window over chronologically sorted games: train games 1..N−2k, validate next block, test most recent k games (k≈10%, min 20 games). **Game-level grouping — never shuffle plays across games.** Train-only standardization stats.
- AdamW 3e−4, cosine schedule, early stop on val RMSE.
- 5-seed ensemble + flip-TTA (predict on flipped coords, unflip dy, average; mixture variance = mean of variances + variance of means).
- **VRMSE diagnostic gate (The Well):** VRMSE = RMSE / std(target), 1.0 = mean predictor. Require VRMSE < 0.9 at every horizon before proceeding to Phase 2.
- **Rollout-stability probe (new test):** chain 5f→10f→20f predictions; assert chained error ≤ 2× direct-head error. Diagnostic only — if it fails, activate pushforward fine-tune reserve: feed detached 10f predictions back as input for the 20f head, backprop last step only.

## E1 uncertainty calibration (mandatory gate — feeds the v5.3.0 calibration rebuild)

- Validation protocol: bin by predicted σ̄ into 10 equal-count bins.
- `ECE_regression = Σ(n_b/N)|RMSE_b − σ̄_b|`, **gate < 0.15 yd**.
- Coverage within Mahalanobis ≤1 (expect 0.393) and ≤2 (expect 0.865), **gate ±5pp**.
- Recalibration via isotonic regression or log-variance temperature scaling if gates fail. Report the 10 bin rows as file-verifiable numbers.
- **If gates fail, the module ships point predictions only** — failure is logged, never silently consumed downstream.

## E1 phases + acceptance gates

- **Phase 0 — physics baseline:** constant-velocity extrapolation + landing prior. Must run end-to-end on a fixture play.
- **Phase 1 — relational model:** val RMSE beats Phase 0 by ≥10%.
- **Phase 2 — uncertainty + calibration:** ECE/coverage gates pass.
- **Phase 3 — ensemble + TTA:** 5-seed + flip-TTA; document the delta.
- Ablations to document: no-landing-conditioning, per-player LSTM (expect worse — relational wins), T∈{10,15}, GRU-vs-conv encoder, drop physics losses.

## E1 tests (`app/tests/test_movement.py`, 14)

1. Output shapes per horizon. 2. Finiteness (no NaN/inf). 3. Speed cap ≤12.0 yd/s. 4. No-teleport: `hypot(dx,dy) ≤ 12·Δt + 0.5`. 5. `logvar` in [−6,4], conf in [0,1]. 6. Determinism <1e−6 with deterministic algos + fixed seed. 7. Permutation invariance <1e−5 over entity order. 8. Flip involution exact. 9. **Causality: zeroing frames>t changes nothing** (proves no future leakage). 10. Canonicalization mirror-equivalence. 11. Synthetic calibration: ECE<0.10, coverage ±3pp at known σ=0.5. 12. Beats naive baseline. 13. Loader schema validation rejects bad frames with 422-style errors. 14. Rollout-stability probe.

---

# BUILD E2 — BDB port pack (ranked by leverage)

Concrete ports from the two MIT repos. Methods adapted, not code pasted verbatim (repo1's MIT has a `[Your Name]` placeholder — don't ship it as-is). Full file/function references in `~/workspace/research/2026-09-26-bdb-code-extraction.md` §12.

## P1 — Delta formulation (port FIRST, it's the core representation insight)

Every winning architecture predicts per-frame `(dx,dy)`, cumsums to positions, anchors to last observed position, clips to field bounds. Never predict raw coordinates.
- **Where:** `gse-ml-service/app/models/movement.py` output head (E1).
- **Test:** on a constant-velocity synthetic play, predicted positions == anchor + cumsum(dx,dy) exactly; all positions inside field bounds.

## P2 — Geometric baseline + residual learning (+0.0045 CV, #1 ablation)

Deterministic role-based endpoints + learned correction:
- Default endpoint: momentum extrapolation from last observed velocity.
- Receiver: endpoint = ball-landing spot (or targeted-receiver prior).
- Defender: endpoint = mirrored assignment (reflect across ball-carrier axis — implement per repo1's geometry, don't invent your own mirroring).
- Model learns a residual on 15 correction features (relative geometry to endpoint, not absolute coords).
- **Where:** E1 Phase 0 (this IS the physics baseline, upgraded) and as a residual head option in Phase 1.
- **Test:** baseline alone achieves documented RMSE on fixture; residual head reduces it.

## P3 — GNN-lite neighbor embeddings (+0.0030, #2 ablation)

Specified in E1 features above (K=6, r=30 yd, τ=8, ally/opp split, 17 aggregates). No graph library.
- **Test:** on a synthetic 2-player closing play, neighbor features change monotonically with distance; zero-NaN with <6 neighbors present.

## P4 — Horizontal flip train + flip TTA (+0.007 train / +0.005–0.010 TTA, free)

Specified in E1 augmentation. The three rules: (1) flip RAW coords, (2) recompute ALL features, (3) TTA = predict flipped → unflip dy → average with original. Implement TTA for real — BDB's `apply_tta()` is a stub.
- **Test:** flip involution exact; TTA improves (or at worst ties) validation RMSE on fixture; the 0.589→3.674 misfire pattern (flipping only indexed columns) is a named regression test.

## P5 — SHAP-embedding meta-features for tabular markets (−11% RMSE in repo2)

repo2's pipeline: train GBM → TreeExplainer per-sample SHAP vectors → KMeans (K=4) → cluster labels as meta-features → retrain. CPU-friendly, directly portable to GSE's tabular markets (spreads/totals).
- **Where:** `packages/feature-store/` or the tabular pipeline Minis judges closest — additive, no changes to existing features.
- **Test:** cluster labels are stable across seeds (ARI > 0.9); model with meta-features beats without on holdout.

## Explicitly do NOT port (documented failures)

Bidirectional recurrence (code-level ablation: BiGRU hurt 0.557→0.583 — favor this over repo2's team-report claim of 0.534 with Bi-GRU ensemble); 8+ layer depth; 20-model ensembles; synthetic training data (improved CV, regressed LB); pre-scaler augmentation; anomaly removal (−0.14% in repo2); Shapley Flow (duplicates plain SHAP, ARI=0.97).

---

# BUILD E3 — Video-to-tracking pipeline ("video in, trajectories out")

**Purpose:** per-player field position/speed/acceleration/distance from broadcast video, for games without NGS tracking (college, historical NFL, all-22). Output feeds E1 (as trajectory input) and `packages/feature-store/`.

**New files (all additive):**
- Shippable: `gse-ml-service/app/models/video_tracking/` (or a sibling package — Minis picks the path, keeps it importable from the service)
- Lab-only: `lab/video_tracking/` (top-level, clearly marked — never imported by shippable code; CI should fail the import if it happens)

## E3 stages (exact I/O)

- **S0 ingest:** video → `(frame_idx, t_sec, frame_rgb)` at resampled 30fps, deterministic frame selection (same bytes → same frames).
- **S1 shot segmentation:** frames → gapless shot list. **TransNetV2 (MIT)** primary, PySceneDetect (BSD-3) fallback. Min shot 1s. **Registration hard-resets at every cut.**
- **S2 detection:** `detect(frame) -> sv.Detections` interface (supervision types). Shippable default: **RF-DETR Medium (Apache-2.0)**, person class, conf 0.5. NOTE: RF-DETR XL/2XL are PML 1.0 — banned from shippable.
- **S3 tracking:** `trackers` package (Apache-2.0). **ByteTrackTracker default**; BoT-SORT + camera-motion-compensation as the broadcast alternative (73.8 vs 73.0 HOTA on SportsMOT — test §9.3 picks the winner on our fixture). Tracker state resets per shot. NOTE: `sv.ByteTrack` was removed in supervision 0.31.0 — use the `trackers` package, not the old supervision path.
- **S4 field registration** (= V3 primitive math — do not re-derive, implement to the contract): hybrid landmarking (learned keypoint model names lines, classical Hough measures them; **TVCalib (MIT)** is the clean path) → normalized DLT + RANSAC (10px) → per-frame 9-DoF Kalman on vec(H), regime-tuned noise. QC gate: ≥6 spread inliers incl. sideline/endzone intersections, inlier ratio ≥0.6, held-out reprojection <5px @720p. **Research findings baked in:** hash marks cluster (~1.3px in-band residual) while drifting off painted lines — sideline/endzone intersections are MANDATORY (test 2b); template mismatch (NFL 18'6" vs NCAA 40' hashes) causes silent 3.58-yd bias — `competition` is validated input (test 2c); virtual 1st-&-10 line EXCLUDED from landmarks; never extrapolate H past last valid fit; bridge ≤15-frame gaps, fail loud beyond.
- **S5 projection:** bbox bottom-center through H → field yards. **NULL + flag on gate failure — never silent bad projections.**
- **S6 kinematics:** Savitzky-Golay smoothing → speed/accel via central differences → cumulative distance. Implausibility flags at 12 yd/s.
- **S7 output:** deterministic sorted CSV + run manifest with SHA256 of inputs+config.

## E3 license boundary (hard)

- **Shippable** (`src` side): RF-DETR ≤L, supervision, `trackers`, TransNetV2, PySceneDetect, TVCalib, OpenCV/scipy/numpy.
- **Lab-only** (`lab/video_tracking/`, never imported by shippable code): Ultralytics YOLO (**all AGPL-3.0 — no Ultralytics YOLO is MIT**), LocateAnything-3B (NVIDIA non-commercial — R&D detector experiments only), PnLCalib (license unverified), Roboflow Universe keypoint model (terms unverified).
- Open items: verify PnLCalib + Universe terms before promoting; source a 200–500 frame hand-labeled registration set (no public football registration benchmark exists — this is the highest-leverage data investment); a license-clean 30s fixture clip; RF-DETR football fine-tuning is a follow-up (COCO person zero-shot first).

## E3 tests (8)

1. Determinism: SHA256-identical reruns. 2. Synthetic homography: <5px @720p reprojection, <0.5yd midfield error. 2b. Hash-band rejection: landmarks clustered in hash marks alone must FAIL the QC gate. 2c. Template-mismatch safety: wrong competition template → gate failure, not silent bias. 3. Dual-tracker identity: ID switches ≤2, fragmentation ≤1.5× on fixture. 4. Synthetic kinematics within 2%. 5. Shot segmentation ±2 frames. 6. Homography-failure safety: 100% of bad frames NULL+flagged. 7. QC flag behavior on partial occlusion. 8. Performance benchmark (fps recorded, not gated).

Cross-shot stitching and jersey OCR are explicitly v2 — do not build.

---

# Non-goals / do-not-touch

**Done = all three builds' tests green, license boundary CI-clean, calibration gates reported as file-verifiable numbers, no regressions in existing suites.**

- The five forbidden reimplementations (Step 0). `gse-grok-build-sandbox`. The main coding agent's branch/working tree.
- BDB 2026 dataset for any commercial training (CC BY-NC 4.0).
- Anything that ships LocateAnything or Ultralytics YOLO in the commercial path.
- Kaggle notebooks/writeups/leaderboard need a logged-in pass — the public 3rd-place writeup and high-vote notebooks are still unharvested; that's a follow-up research task, not this build.
