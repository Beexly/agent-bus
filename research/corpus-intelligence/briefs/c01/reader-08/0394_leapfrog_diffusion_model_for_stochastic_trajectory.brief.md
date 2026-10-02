# arxiv-program/research/2026-09-21/arxiv-deep/0394_leapfrog_diffusion_model_for_stochastic_trajectory.md
## What it is (1-2 sentences)
Full-paper deep read of arXiv:2303.10895v1 (Mao et al., SJTU/Shanghai AI Lab, 2023): LED, a real-time-capable diffusion model for multi-agent stochastic trajectory prediction whose trainable "leapfrog" initializer replaces ~(Γ−τ) denoising steps while generating K correlated samples, benchmarked directly on NFL player-tracking data. Verdict in-file: ADAPT — serves the public-tracking-replacement lane (map gap) and generative player-movement modeling; needs modern-data retrain and calibration work before production.

## Key metrics/methods (formulas where given, else "not specified")
- **LED procedure:** standard forward diffusion Y^γ = f_diffuse(Y^{γ−1}), γ=1…Γ; inference replaces Gaussian init with trainable leapfrog initializer Ŷ^τ ~^K P(Ŷ^τ) = f_LSG(X, 𝕏_N), then only τ ≪ Γ denoising steps (Γ=100, τ=5).
- **Leapfrog initializer reparameterization:** Ŷ^τ_k = μ_θ + σ_θ·Ŝ_{θ,k}; μ_θ = f_μ(X,𝕏_N) (mean), σ_θ = f_σ(X,𝕏_N) (scalar std), Ŝ_θ = f_Ŝ(X,𝕏_N,σ_θ) (K normalized sample positions); each module = social encoder (multi-head attention: e^social = softmax(f_q(X) f_k(𝕏_N)^T/√d) f_v(𝕏_N)) + temporal encoder (e^temp = f_GRU(f_conv1D(X))) + fusion MLP (μ_θ = f_fusion([e^social : e^temp])); sample module additionally encodes σ_θ so variance shapes (not just scales) samples.
- **Denoiser:** transformer context encoder C = f_context(X,𝕏_N); noise estimate ε^γ_θ = f_ε(Ŷ^{γ+1}_k, C, γ+1); DDPM update Ŷ^γ_k = α_γ^{−1/2}(Ŷ^{γ+1}_k − (1−α_γ)/√(1−ᾱ_γ)·ε^γ_θ) + √(1−α_γ)·z.
- **Two-stage training:** stage 1 denoiser with ℒ_NE = ‖ε − f_ε(Y^{γ+1}, f_context(X,𝕏_N), γ+1)‖_2; stage 2 (denoiser frozen) initializer with ℒ = w·min_k‖Y−Ŷ_k‖_2 + (Σ_k‖Y−Ŷ_k‖_2/(σ_θ²K) + log σ_θ²), w = w_1 = 50 (min-distance term + uncertainty loss tying σ_θ to scene complexity with log-regularizer against trivial high variance).
- **Training config:** PyTorch 1.7.1, Adam, one GTX-3090; denoiser 100 epochs (lr 1e-2, halved every 16 epochs), initializer 200 epochs (lr 1e-4, ×0.9 every 32 epochs); transformer social encoder (ff dim 256, 2 heads, 2 layers), conv1d kernel 3 → 32 channels, GRU hidden 256, denoiser hidden 256.
- **Metrics:** minADE_K / minFDE_K at K=20 (K=2,4,8 ablated) at multiple horizons; wall-clock inference ms.
- GSE-specific extensions proposed in-file: (1) condition initializer on play context (down/distance/yard line/personnel/formation embeddings); (2) joint multi-agent decoding of all 22 + ball with shared interaction graph.

## Data sources named
- **NFL Football Dataset** ("records the position of every player on the field during each play in the 2017 year"): 22 players (11/team) + ball; predicts future 3.2 s (16 frames) from past 1.6 s (8 frames). Provenance thin: no train/test split description, no play/frame counts — temporal leakage unverifiable.
- **NBA SportVU:** 10 players + ball; future 4.0 s (20 frames) from past 2.0 s (10 frames). **Stanford Drone Dataset** (bird's-eye pedestrian; 4.8 s future from 3.2 s past). **ETH-UCY** (5 subsets; leave-one-out).
- Baselines per dataset: Social-GAN, STGAT, Social-STGCNN, PECNet, STAR, Trajectron++, MemoNet, NPSN, GroupNet, MID (diffusion SOTA), LB-EBM (NFL), SOPHIE/NMMP/EvolveGraph (SDD), Agentformer (ETH-UCY). Code: github.com/MediaBrain-SJTU/LED.
- Note in-file: the existing-research map already absorbed a *different newer* diffusion paper (2503.18589); LED adds the leapfrog initializer + the direct NFL benchmark.

## Findings (numbers and facts, not vibes)
- **NFL (minADE_20/minFDE_20, meters):** 3.2 s total — LED 0.87/1.50 vs MID (prior SOTA) 1.14/1.92 = **23.7%/21.9% improvement**; beats all 10 baselines at every horizon (1.0 s: 0.21/0.34 vs MID 0.30/0.58; 2.0 s: 0.49/0.91 vs MID 0.71/1.31).
- **NBA:** 4.0 s 0.81/1.10 vs MID 0.96/1.27 = 15.6%/13.4%, best at all horizons. **SDD:** 8.48/11.66 — best ADE, FDE beats NPSN 11.85. **ETH-UCY:** avg FDE 0.33 vs MemoNet 0.35 (5.7%).
- **Speed:** inference speedups vs standard diffusion **19.3/30.8/24.3/25.1× on NBA/NFL/SDD/ETH-UCY**; NBA prediction 886 ms → ~46 ms (τ=5; τ=3 → ~30 ms with 0.84/1.10). Fast-sampler comparison (NBA): LED 0.81/1.10 at ~46 ms beats PD (best 0.98/1.39 at ~452 ms) and DDIM (best 0.91/1.21 at ~530 ms) on accuracy and time.
- **Ablations (NFL, K=20):** mean+variance+correlated sampling 0.89±0.01/1.51±0.02 vs i.i.d. 1.18±0.02/1.90±0.03; correlated sampling alone already beats i.i.d. full model at K=2 (2.04±0.18/4.08±0.48 vs 2.36±0.13/4.31±0.22).
- Limitations: best-of-K metrics only (no NLL/calibration — rewards mode coverage, not calibrated probabilities); single-season 2017 NFL data, no cross-season test; thin split documentation; authors' own caveat — speedup relies on low-dimensional trajectory data, may not transfer to higher-dimensional conditioning (play context, weather, personnel embeddings). Absolute NFL errors (0.87 m ADE at 3.2 s on 2017 data) are sub-meter but not fine-route-adjudication grade.
- Effort: 3–5 weeks faithful reproduction + modern-data retrain; production latency work additional. Academic open-source code (verify license before vendoring).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [QB-BEHAVIOR] Directly adjacent: a generative model of all-22 player trajectories on NFL data — the trajectory distributions underpin route-tree modeling, receiver-separation / defender-closing-speed modeling, and QB dropback/footwork-pattern prediction; proposed play-context conditioning (down/distance/personnel) maps to QB decision-mode allocation (run vs pass, route-tree modes).
- [SCHEME] Joint multi-agent decoding (proposed improvement) captures joint outcomes (receiver separation + defender angle together) — the primitive behind coverage-vs-route interaction modeling.
- [OTHER] Public-tracking-replacement lane: a generative trajectory model trained on public NFL tracking data is exactly the "public tracking replacements" capability the map flags as a gap; also trajectory inpainting for occluded broadcast-tracking frames. Acceptance gate in-file: retrain on multi-season nflverse/Big Data Bowl tracking, require ≥15% ADE/FDE improvement over reimplemented MID/Trajectron++ on a held-out season AND end-to-end inference for all 23 agents <200 ms.

## Engine-actionable? (yes/no + one-line what)
Yes — ADAPT build candidate: reimplement LED on modern nflverse multi-season NFL tracking, add play-context conditioning + distribution calibration (NLL/rank-histograms the paper omits), gated on the §12 reproduction test (≥15% ADE/FDE gain over baselines, <200 ms all-23-agent inference).
