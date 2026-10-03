# arxiv-program/research/2026-09-21/arxiv-deep/2206-consistworld-evidence-routing-for-consistent-multi-agent.md
## What it is (1-2 sentences)
Ledgered deep read of arXiv:2609.22641 (ConsistWorld). Causal multi-agent video world model that generates K camera-controlled streams from one shared source image with cross-view and cross-time consistency, via pose-conditioned memory retrieval and visibility-gated peer sharing. Verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Rollout factorization: p_θ(X_{0:T−1}^{1:K}|I_0,C) = ∏_p p_θ(X_p^{1:K}|I_0,X_{<p}^{1:K},C_{≤p}^{1:K}); evidence split into committed base context B_p^v and peer context P_p^v
- Retrieval score: s(q,m)=½(O_{m→q}+O_{q→m}) + λ·ReLU(d_qᵀ d_m), with frustum overlap O_{a→b}=(1/|F_a|)Σ 1[z_b(x)>0 ∧ π_b(x)∈Ω_b] (no estimated depth needed)
- Visibility gate: G_i=(1−C_i)P_i, final attention a_i = a_i^base + G_i(a_i^full − a_i^base) — peer influence only where committed history is insufficient
## Data sources named
Training: 3,400 Unreal Engine MultiCamVideo scenes (10 cameras, 81 frames @240×416, 5 chunks) + 1,000 Infinigen multi-camera scenes (8 streams, 141 frames, 9 chunks, K∈{1,2,3,4}); eval: held-out scenes + Ditto-1M real images (qualitative). Eval data: https://huggingface.co/datasets/CeciliaXu00/multicam_no_person. Code: https://github.com/CeciliaTheBirb/ConsistWorld; models on HuggingFace. All synthetic/rendered — no real sports content.
## Findings (numbers and facts, not vibes)
- Consistency, Region LPIPS ↓: Self-Revisit 0.1181; Sync Sharing 0.1179; Async Handoff 0.0700
- Ablation (Table 2, Region LPIPS): full 0.1176 vs w/o retrieval 0.3374 vs w/o gating 0.1983 vs neither 0.3818 — retrieval is the dominant component
- vs full-history baseline (Table 3): PSNR 18.5583 vs 17.6799; GT-LPIPS 0.4206 vs 0.5203 — selective retrieval beats keeping all history (avoids drift from redundant/conflicting observations)
- Long-horizon (16/24/32 chunks): 0.1046/0.1088/0.1267 vs baseline 0.3820/0.4170/0.4503 — stable beyond the 9-chunk training horizon
- Agent count K=2/4/5: 0.1079/0.1221/0.1107 — generalizes to unseen K=5
- Limitations: static scenes only (NFL plays are 22 moving agents); no external baselines (claimed code unavailable); trained model doesn't transfer — only the routing/gating math does; assumes known camera poses
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: principled multi-view play fusion — fuse broadcast + All-22 + end-zone via pose-conditioned retrieval and visibility gating, replacing naive per-view independent tracking + averaging
- OTHER: "selective retrieval beats full history" is a general fusion lesson — more observations can add drift/conflict, INFERENCE for sports tracking pipelines
- OTHER: semantic retrieval extension (formation/down-distance hash) as a GSE improvement experiment for pre-snap state estimation
## Engine-actionable? (yes/no + one-line what)
Yes — multi-view play fusion module: state chunks in field coordinates + calibrated camera poses, retrieval over committed chunk archive + visibility gate weighting which camera updates which field region; acceptance gate pre-registered (fused disagreement ≤ 0.5 yards mean, gate contributes ≥15%). (~3 engineer-weeks on top of existing tracking)
