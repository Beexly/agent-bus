# docs/engine/research/2026-09-26/2026-09-26-movement-module-spec.md
## What it is (1-2 sentences)
Implementation-ready methods-only spec for a movement prediction module: predict every NFL player's displacement, speed, per-coordinate uncertainty, and position-error confidence from 10 Hz NGS tracking frames, to feed the GSE engine's calibration rebuild. Derived from NFL Big Data Bowl 2026 winner methods (Takoi, Mifune) and Polymathic AI's The Well methodology; no code copied.

## Key metrics/methods (formulas where given, else "not specified")
- Primary metric: RMSE in yards = sqrt(0.5 * (mean((dx-dx̂)²) + mean((dy-dŷ)²))); target: beat public BDB reference band 0.518–0.540 on GSE's own held-out games.
- Architecture: query-centric transformer over 25 tokens (23 entity tokens + landing token + play token); 4 layers, 4 heads, d_model=128; <2M params; horizons H = {5, 10, 20 frames, ball-landing}. No entity positional encoding (permutation invariance tested).
- Losses (starting weights): L_nll w=1.0 — mean 0.5·(lx + (dx−dx̂)²/e^lx + ly + (dy−dŷ)²/e^ly); L_speed w=0.2 — mean |ŝ − hypot(dx̂,dŷ)/Δt|; L_dir w=0.1 — mean w_i·(1 − v·d̂/(|v||d̂|)), w_i=min(|v|,3)/3, only for |v|>1.0 yd/s; L_cap w=1.0 — mean ReLU(ŝ−12.0)²; L_conf w=0.2 — BCE on 1[err<1.0 yd]; L_aux w=0.1 — landing-distance MSE.
- Calibration gates: ECE_regression = Σ(n_b/N)·|RMSE_b − σ̄_b| < 0.15 yd (10 equal-count bins); coverage at Mahalanobis ≤1 (nominal 0.393) and ≤2 (nominal 0.865) within ±5 pp; recalibrate via isotonic or temperature scaling of logvar if gates fail.
- Augmentation: horizontal flip (x'=120−x) primary; jitter σ=0.1 yd; frame subsampling p=0.2. Canonicalize all plays to play_direction="right" at load.
- Splits: chronological game-level expanding window (train 1..N−2k, val N−2k+1..N−k, test last k≈10%, min 20 games); train AdamW lr=3e−4, wd 1e−2, batch 256 plays, cosine+5% warmup, 100 epochs, patience 10; 5-seed ensemble + TTA (expected last-mile gain ~0.005–0.010).

## Data sources named
- NFL Big Data Bowl 2026 (Kaggle, Sep 2025 → Jan 2026; 8,147 entrants / 1,899 teams); winners Takoi (ball–runner–defender relational modeling) and Mifune (speed + confidence outputs).
- Polymathic AI's The Well (NeurIPS 2024, BSD-3-Clause) — simulation/trajectory training methodology.
- GSE's own NGS tracking ingest (10 Hz frames); Big Data Bowl dataset is CC BY-NC 4.0 — non-commercial, NOT for training GSE's commercial model.

## Findings (numbers and facts, not vibes)
- Verified winner takeaways: (1) predict deltas + speed/uncertainty, not raw coords; (2) ball-landing conditioning highest leverage — dist_to_ball ≈ 20% feature importance; (3) relational modeling over 22-player set beats per-player sequences; (4) physics-informed losses (direction-cosine, velocity caps) cheap wins; (5) horizontal flip best augmentation; (6) ensemble+TTA+multi-seed last mile ~0.005–0.010 LB.
- Acceptance gates: Phase 1 single model must beat Phase 0 physics baseline (constant-velocity + landing prior) by ≥10% validation RMSE before ensembling; ECE<0.15 yd and coverage ±5pp before downstream use.
- Ablation expectations: dropping landing conditioning → large degradation; per-player LSTM → degradation; dropping L_dir/L_cap → small RMSE change but physics violations rise.
- 14 exact test assertions specified (shapes, no NaN/Inf, speed≤12.0, no-teleport ≤12.0·Δt+0.5, permutation invariance, flip involution, causality — no future leakage, canonicalization mirror-identical, calibration on synthetic σ=0.5 noise).
- Open (Garrett, non-blocking): which NGS seasons licensed for training; is ball-landing spot available at production inference time; GPU budget for 5-seed cadence.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: player-movement/trajectory ML module — physics-anchored feature set (dist_to_ball_landing, closing_to_landing, speed_toward_ball) and per-player calibrated uncertainty feeding downstream win-probability/EPA modules. Uncertainties gated before use is a calibration-honesty pattern matching the engine's total-signal wiring.

## Engine-actionable? (yes/no + one-line what)
yes — spec is implementation-ready with exact schemas, losses, tests, and integration contract (NGS frames in; calibrated dx,dy,σx,σy,conf out); blocks only on the three Garrett answers above.
