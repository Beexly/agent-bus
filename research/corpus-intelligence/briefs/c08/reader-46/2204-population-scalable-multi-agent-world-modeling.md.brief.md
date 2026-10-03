# docs/arxiv-program/research/2026-09-21/arxiv-deep/2204-population-scalable-multi-agent-world-modeling.md

## What it is (1-2 sentences)
Deep-dive research note on "Khora" (arXiv:2608.08600, Zhao et al., 2026) — a population-scalable multi-agent world model that generates consistent multi-view observations of many interacting agents — with a GSE verdict of ADAPT and a GSE spec for a "Khora-for-plays" NFL counterfactual play simulator on NGS tracking data (state-only, no pixel renderer).

## Key metrics/methods (formulas where given, else "not specified")
- Architecture: shared-state STBoard + action-conditioned world evolution (kinematic proposal p̂ plus learned residual Δ) + geometry-guided view synthesis (paper equations 1–10).
- Compute cost: T ≈ N_v·C_render + N_a·N_v·C_proj (N_v views, N_a agents).
- Paper numbers: PSNR 26.2425 / SSIM 0.7130 / LPIPS 0.1789 / FID 7.7098 / FVD 36.5529 at 2 views (vs Solaris baseline 20.1465 / 0.5273 / 0.1835 / 4.3726 / 11.4263).
- User-study action consistency: 3.5700 vs 2.0750 without cross-agent state.
- Scaling: latency 107.16 → 116.73 ms from 1 → 80 agents; per-view FPS 37.33 → 34.27; throughput 37.3 → 2741.3 view-fps.
- GSE spec in file: "Khora-for-plays" — counterfactual NFL play simulator on NGS tracking; shared per-player kinematic state, learned interaction residual, what-if outcome queries (e.g., plus/minus-one-defender re-rolls); explicitly state-only, no neural video rendering.

## Data sources named
- The paper's own multi-agent simulation environments (not NFL data).
- NGS tracking data (per the GSE adaptation spec, not the paper itself).

## Findings (numbers and facts, not vibes)
- Khora beats the Solaris baseline on every reported image/video metric (e.g., PSNR 26.24 vs 20.15, FVD 36.55 vs 11.43 — INFERENCE: FVD direction ambiguous from file alone; reported as a comparison, not a win claim).
- Cross-agent shared state is the decisive ingredient: action-consistency user-study score 3.5700 with vs 2.0750 without.
- Near-linear scaling to 80 agents: latency only 107.16 → 116.73 ms while throughput grows ~73x (37.3 → 2741.3 view-fps) across views.
- GSE verdict ADAPT: port the shared-state + interaction-residual architecture to an NFL play simulator on tracking data; do NOT port the pixel renderer.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: Counterfactual play simulator (plus/minus-one-defender re-rolls) enables what-if coaching queries — e.g., "what if the safety bites?" — from real tracking state.
- OTHER: Shared-state multi-agent world modeling is the architecture family for any NFL within-play simulator (tracks with GSE-Dream/GNS/MARIE/Gamma-World entries in the improvement ledger).
- OTHER: Scaling numbers (80 agents at ~117 ms) suggest real-time feasibility for 22-player + ball play simulation (INFERENCE: NFL play scale is smaller than the paper's max, so latency headroom exists).

## Engine-actionable? (yes/no + one-line what)
Yes — build the "Khora-for-plays" state-only counterfactual play simulator on NGS tracking per the in-file spec; skip the pixel renderer entirely.
