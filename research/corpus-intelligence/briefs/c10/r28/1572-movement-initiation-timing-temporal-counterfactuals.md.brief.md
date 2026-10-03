# arxiv-program/research/2026-09-21/arxiv-deep/1572-movement-initiation-timing-temporal-counterfactuals.md
## What it is (1-2 sentences)
Ledger for arXiv:2508.17611 (Iwashita et al. 2025), VTCS — a temporal-counterfactual framework that shifts a player's movement-initiation timing (±1 s) and scores each counterfactual with a pitch-control value function. Verdict ADAPT — portable to NFL NGS tracking for WR route-break / pass-rush timing evaluation.
## Key metrics/methods (formulas where given, else "not specified")
- VTCS three steps: (1) detect initiation frame t₀ per receiver (acceleration-burst kinematic rules); (2) counterfactuals ξ ∈ [−15,15] frames with continuity-corrected replay for early shifts (Eq. 1) and linear gap-fill for delayed shifts (Eqs. 2–3), all other players frozen; (3) score with wUPPCF = UPPCF_i · w_d · w_s (Eq. 5); V_frame(t) = mean wUPPCF over rendezvous region Ω(t) (Eqs. 6–8); V_scenario(ξ) = max 15-frame moving average of V_frame (Eq. 9); V_timing = V_scenario(0) − max_{ξ≠0} V_scenario(ξ) (Eq. 10).
- Pass-target proxy: XGBoost classifier (5-fold GroupKFold), thresholds ≥0.55 / ≤0.30 to avoid boundary ambiguity.
- Improvement experiment: replace frozen teammates with a learned reactive-defender model, recompute V_timing under equilibrium response, test whether it predicts completions better.
## Data sources named
UltimateTrack (new, published by authors): DJI Mavic 3 drone footage of Nagoya University scrimmages, manually tracked every frame — 18,075 frames at 15 FPS, 64 possessions, 15 entities, normalized 94×37 m coordinates, CSV. Code: github.com/shunsuke-iwashita/VTCS.
## Findings (numbers and facts, not vibes)
- 455 candidate initiation sequences detected → 310 retained after visual review.
- XGBoost target predictor: RMSE ≈ 0.316, R² ≈ 0.163 (moderate).
- V_frame separates actual pass targets from non-targets: KS D = 0.3147 (p = 0); Group 1 D = 0.3159, Group 2 D = 0.3120.
- Team-relative ranking: Mann–Whitney p = 0, Cliff's δ = −0.339 (medium); Group 1 −0.329, Group 2 −0.382.
- Skill-group surprise: novices' V_timing concentrated closer to zero than experienced players — authors attribute to homogeneous movement constraining counterfactual range + heavier defensive pressure on experts; V_timing captures context-adaptive decision quality, not raw skill.
- No outcome prediction (completions) tested; no baseline comparison (first of its kind); 15 FPS limits timing resolution.
- Reproducible test gate specified: adapted V_frame must separate NFL targets from non-targets (KS D ≥ 0.25, p < 0.01); receiver mean V_timing must add +1.5% out-of-sample R² on YPRR — if the value surface fails the KS gate, stop.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Receiver-level timing bias ξ* (chronically early/late breakers) as a YPRR/prop feature (QB-BEHAVIOR)
- Counterfactual value surface as causal evidence for film-room content ("WR X's breaks are 0.2 s late vs optimal") (TRUST-SIGNAL)
- Frozen-teammate limitation acknowledged; defender-proximity covariates needed — honesty guardrail for GSE adaptation (TRUST-SIGNAL)
## Engine-actionable? (yes/no + one-line what)
Yes — build gse_vtcs.py on NGS tracking: detect WR route-break initiations, ξ-shift counterfactuals scored against a GSE catch-probability value surface, serve receiver ξ*-bias as a reception/prop-model feature after the KS gate passes.
