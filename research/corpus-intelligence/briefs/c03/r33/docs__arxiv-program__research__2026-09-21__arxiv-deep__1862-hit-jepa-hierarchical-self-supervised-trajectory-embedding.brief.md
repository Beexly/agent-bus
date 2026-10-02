# docs/arxiv-program/research/2026-09-21/arxiv-deep/1862-hit-jepa-hierarchical-self-supervised-trajectory-embedding.md
## What it is (1-2 sentences)
Deep read of arXiv:2507.00028, HiT-JEPA: a hierarchical (point → segment → trajectory) self-supervised trajectory embedding framework using per-level Joint-Embedding Predictive Architectures with top-down attention interaction, evaluated on trajectory similarity retrieval. Ledger verdict: ADAPT — transferable to self-supervised multi-scale embeddings of 10Hz NFL tracking sequences, after re-engineering for 22-player multi-agent tracking.
## Key metrics/methods (formulas where given, else "not specified")
- Hierarchy: T^(1)=Conv1D(T); T^(2)=MaxPool1D(Conv1D(T^(1))); T^(3)=MaxPool1D(Conv1D(T^(2))) — channel doubles, length halves per level (n2=⌊n1/2⌋, n3=⌊n2/2⌋); embedding dim d=256.
- Per-level JEPA: context encoder E_θ^(l), target encoder E_{θ̄}^(l) (1-layer Transformers, 8 heads, hidden 1024); target params = EMA of context params; M=4 masks per trajectory, masking ratios drawn uniformly from {10%,15%,20%,25%,30%}, successive masking prob p=50%, context sampling ratio p_γ∈[85%,100%], context minus target-overlap; predictor D_φ^(l) (1-layer Transformer decoder).
- Top-down attention spotlight: A_i^(l)=softmax(Q_i^(l)K_i^(l)ᵀ/√d_k), Ã^(l)=ConvTranspose1d(A^(l),W_deconv^(l),b_deconv^(l)); A^(l-1) ← (A^(l-1) + σÃ^(l)), σ learnable.
- Loss: L = λL^(1)+μL^(2)+νL^(3), λ=0.05, μ=0.15, ν=0.8; per-level L^(l)=(1/MB)Σ SmoothL1(pred,target) + VICReg variance+covariance losses on MLP-expanded reps. Adam, lr 1e-4 halving every 5 epochs, 20 epochs max, batch 64, Nvidia A5000.
- Input: GPS → Uber H3 hexagonal cells → node2vec spatial embeddings H={h_i∈R^d}.
## Data sources named
Porto (PKDD'15 taxi, Kaggle, 1.7M trajectories, 442 taxis, Jul 2013–Jun 2014; train 200K, DB 100K, query 1K); T-Drive (Microsoft Research, 10,357 Beijing taxis, Feb 2–8 2008, avg sampling 3.1 min); GeoLife (Microsoft Research, 182 users, Apr 2007–Aug 2012, 17,6212 [sic] trajectories); FourSquare-TKY/NYC check-ins (Apr 2012–Feb 2013, 573,703 / 227,428 check-ins; zero-shot only); AIS(AU) (Australian Maritime Safety Authority vessel records, Feb 2025; zero-shot only). Preprocessing retains 20–200 points per trajectory; 10% of training for validation.
## Findings (numbers and facts, not vibes)
- Self-similarity (mean rank of true match, lower better): lowest across 5 of 6 datasets; T-Drive mean rank 1.040–1.041 across DB sizes 20%–100% and 1.031–1.038 across distortion rates 0.1–0.5; GeoLife mean ranks 2.8% worse than T-JEPA; second-best on Porto (paper attributes gap to TrajCL exploiting speed/orientation cues).
- Zero-shot (Porto-trained → TKY/NYC/AIS(AU)): lowest mean ranks across all DB sizes/downsampling/distortion, including dense-taxi → sparse-checkin → ocean-vessel transfer.
- Fine-tuning (freeze encoder + 2-layer MLP decoder approximating EDR/LCSS/Hausdorff/discrete Fréchet; HR@5, HR@20, R5@20 averaged): +12.6% over T-JEPA on T-Drive, +6.4% on GeoLife, −3.7% on Porto; Hausdorff +14.7%, discrete Fréchet +19.9% relative improvement on T-Drive vs T-JEPA.
- Ablations (Porto): no-interaction, direct-concat, and single-layer-only variants all degrade; direct-concat collapses representations.
- Hyperparams: 1 encoder layer per level best (2–3 layers overfit); batch 64–128 stable, 16 degrades.
- Leakage notes from reader: self-similarity queries are odd/even splits of the same trajectory (inflated ~1.0 ranks); fine-tune targets are heuristics computed from the same coordinates; all single-agent (no interaction modeling).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Hierarchical point→segment→trajectory embeddings as drop-in features for prop/win-probability models: OTHER (representation learning, play-concept retrieval).
- Play-embedding nearest-neighbor retrieval for play-concept search: SCHEME (route-family/play-concept clustering from tracking).
- Top-down attention spotlight focusing coarse semantics onto fine detail: OTHER (architecture pattern; reader's improvement experiment proposes a ball-trajectory co-embedding branch with cross-attention: OTHER).
## Engine-actionable? (yes/no + one-line what)
Yes — pretrain 3-level HiT-JEPA on 2018–2024 NFL 10Hz tracking (~500K play-agent trajectories), single A5000-class GPU, ~2–3 engineer-weeks for the multi-agent adaptation; acceptance gate: ≥40% top-1 same-play-concept retrieval on held-out weeks 13–18 2024 (vs ≤15% random, ≥10pp above raw-DTW) OR ≥0.002 log-loss improvement on downstream spread/total model.
