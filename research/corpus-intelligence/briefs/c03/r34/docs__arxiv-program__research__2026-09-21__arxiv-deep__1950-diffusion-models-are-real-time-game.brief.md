# docs/arxiv-program/research/2026-09-21/arxiv-deep/1950-diffusion-models-are-real-time-game.md
## What it is (1-2 sentences)
Read-notes on GameNGen (Valevski et al. 2024, arXiv:2408.14837): a pretrained Stable Diffusion v1.4 repurposed as a real-time DOOM game engine predicting next frames conditioned on past frames + actions at 20 FPS on one TPU. Verdict in file: ADAPT the stability recipe (conditioning noise augmentation + teacher-force training with autoregressive evaluation) for GSE's autoregressive game simulator; REJECT pixel-diffusion for GSE (structured state is cheaper).
## Key metrics/methods (formulas where given, else "not specified")
- Interactive World Simulation formalism: simulation distribution q(o_n | o_{<n}, a_{≤n}); objective minimizes E[D(o_q^i, o_p^i)], n ∼ N_0 episode lengths.
- Training: always teacher-forced; deployment: autoregressive. Stability trick: (noise) augmentations on conditioning frames so training sees corrupted conditioning and learns to recover — prevents autoregressive "sampling divergence" (§3.2.1).
- Fidelity: fine-tuning the latent decoder improves visual detail/text.
- Evaluation: teacher-forcing PSNR/LPIPS on held-out trajectories; autoregressive PSNR/LPIPS over 64 steps (Fig. 6); human evaluation (10 raters; 130 side-by-side 1.6s/3.2s clips; 150 more clips after 5–10 min of play); ablations on context length, noise augmentation, decoder fine-tuning (Table 2).
## Data sources named
Two-phase data: (1) an RL agent learns to play DOOM and its entire training action/observation corpus (T_agent) is recorded; (2) that corpus trains the generative diffusion model. Videos at gamengen.github.io (stated); no code release stated in the extracted text.
## Findings (numbers and facts, not vibes)
- Next-frame PSNR 29.4 ("comparable to lossy JPEG compression").
- Human raters at near chance: real game chosen 58%/60% on short clips; 50% after 5–10 min of gameplay.
- Runs at 20 FPS on a single TPU, stable over extended multi-minute sessions.
- Context ablation: big gain 1→2 frames, then rapid asymptote (~3s history; "further increasing the context size provides only small improvements").
- Long-horizon state persistence: health/ammo tallies survive far beyond the 3s conditioning window — the model learns implicit long-range state even with short explicit context (authors' own caveat: not an exact simulation).
- GSE adaptation plan: add conditioning noise augmentation (corrupt past play-features with Gaussian noise at training time) and validate autoregressively (per-play feature MSE over 64-play rollouts plotted like their Fig. 6) to the GSE-Dream RSSM (1942) or token transformers (1944/1948); track persistence of score differential, timeouts, possession across full-game rollouts.
- GSE acceptance gate: ADOPT conditioning noise augmentation as mandatory stabilizer for ALL autoregressive simulators if it flattens the 64-play divergence curve by ≥30% vs baseline on 2024 held-out games; REJECT the "3 seconds of context suffices" finding as a football conclusion (football needs drive-level memory — test context explicitly).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: game-simulator stability — the noise-augmentation recipe applies to ANY autoregressive simulator (RSSM/token models in 1942–1948), and the hierarchical-conditioning improvement (short play window + compressed drive-level summary vector) is a concrete architecture upgrade.
- SCHEME: stable full-game rollouts (score/timeout/possession persistence) are the prerequisite for trustworthy Monte-Carlo game simulations and late-game win-probability modeling.
## Engine-actionable? (yes/no + one-line what)
Yes — bolt GameNGen's conditioning-noise-augmentation + autoregressive-validation recipe onto GSE's existing rollout simulator and gate it on a ≥30% flattening of the 64-play divergence curve on 2024 held-out games.
